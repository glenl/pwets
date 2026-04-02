port module Main exposing (main)

import Animator
import Browser
import Color
import Delay
import Dict exposing (Dict)
import Element as E
import Element.Background as Background
import Element.Border as Border
import Json.Decode as Decode
import Nats
import Nats.Config
import Nats.Effect
import Nats.Events
import Nats.PortsAPI
import Nats.Protocol
import Nats.Socket
import Nats.Sub
import OUI.Button as Button
import OUI.Material as Material
import OUI.Material.Color
import OUI.Material.Theme
import OUI.Text as Text
import PWets
import Random
import Svg exposing (Svg)
import Svg.Attributes as SvgA
import Time
import UI
import Util


type alias Model =
    { nats : Nats.State String Msg
    , socket : Nats.Socket.Socket
    , serverInfo : Maybe Nats.Protocol.ServerInfo
    , actuatorStates : Animator.Timeline (Dict Id ActuatorState)
    , chamberStates : Animator.Timeline (Dict Id ChamberState)
    , vesselStates : Animator.Timeline (Dict Id TransitState)
    , activeVessels : VesselList
    , vesselCount : Int
    , message : String
    }


type ChamberState
    = High
    | Low


type ActuatorState
    = Opened
    | Closed


type alias Id =
    String


type TransitState
    = UpperEntry
    | UpperGate
    | AChamberHigh
    | AChamberLow
    | BChamberHigh
    | BChamberLow
    | LowerGate
    | LowerEntry
    | AtSea


type alias TransitSequence =
    List TransitState


type alias Vessel =
    { active : Bool
    , license : Id
    , direction : Util.Direction
    , sequence : TransitSequence
    }


type alias VesselList =
    List Vessel


type alias VesselStrategy =
    { upSequence : TransitSequence
    , downSequence : TransitSequence
    , toPosition : TransitState -> Util.Position
    }


type Msg
    = AnimationRuntimeStep Time.Posix
    | MoveVessel Id Int
    | VesselFinished Id
    | GateCleared Id
    | FlowComplete Id
    | ActuatorMoveDone Id
    | AllMoored Id
    | StartVessel Util.Direction
    | NatsMsg (Nats.Msg String Msg)
    | OnSocketEvent Nats.Events.SocketEvent
    | ReceiveProg String


wetsTwo : VesselStrategy
wetsTwo =
    { upSequence =
        [ LowerEntry
        , LowerGate
        , AChamberLow
        , AChamberHigh
        , BChamberLow
        , BChamberHigh
        , UpperEntry
        ]
    , downSequence =
        [ UpperEntry
        , UpperGate
        , BChamberHigh
        , BChamberLow
        , AChamberHigh
        , AChamberLow
        , LowerEntry
        ]
    , toPosition =
        \tstate ->
            case tstate of
                LowerEntry ->
                    Util.Position 650.0 120.0

                LowerGate ->
                    Util.Position 525.0 120.0

                AChamberLow ->
                    Util.Position 375.0 120.0

                AChamberHigh ->
                    Util.Position 375.0 80.0

                BChamberLow ->
                    Util.Position 225.0 80.0

                BChamberHigh ->
                    Util.Position 225.0 40.0

                UpperGate ->
                    Util.Position 75.0 40.0

                UpperEntry ->
                    Util.Position -70.0 40.0

                _ ->
                    Util.Position 0.0 0.0
    }


animator : Animator.Animator Model
animator =
    Animator.animator
        |> Animator.watching
            .actuatorStates
            (\newActuatorStates model ->
                { model | actuatorStates = newActuatorStates }
            )
        |> Animator.watching
            .chamberStates
            (\newChamberStates model ->
                { model | chamberStates = newChamberStates }
            )
        |> Animator.watching
            .vesselStates
            (\newVesselStates model ->
                { model | vesselStates = newVesselStates }
            )


main : Program { now : Int } Model Msg
main =
    Browser.document
        { view = view
        , init = init
        , update = wrappedUpdate
        , subscriptions = subscriptions
        }


init : { now : Int } -> ( Model, Cmd Msg )
init flags =
    let
        nats : Nats.State String Msg
        nats =
            Nats.init (Random.initialSeed flags.now)
                (Time.millisToPosix flags.now)
    in
    ( { actuatorStates =
            Animator.init <|
                Dict.fromList
                    [ ( "Valve-M03", Closed )
                    , ( "Valve-M04", Closed )
                    , ( "Valve-M05", Closed )
                    , ( "Gate-M03", Closed )
                    , ( "Gate-M04", Closed )
                    , ( "Gate-M05", Closed )
                    ]
      , chamberStates =
            Animator.init <|
                Dict.fromList
                    [ ( "AChamber", High )
                    , ( "BChamber", High )
                    ]
      , vesselStates = Animator.init Dict.empty
      , nats = nats
      , socket = Nats.Socket.new "0" "ws://localhost:8087"
      , serverInfo = Nothing
      , vesselCount = 0
      , activeVessels = []
      , message = ""
      }
    , Cmd.none
    )


nextTransition : Id -> VesselList -> Maybe TransitState
nextTransition license vlist =
    case List.filter (\v -> v.license == license) vlist of
        [] ->
            Nothing

        x :: _ ->
            List.head x.sequence


adjustSequence : Id -> VesselList -> VesselList
adjustSequence license vlist =
    case List.partition (\v -> v.license == license) vlist of
        ( [], _ ) ->
            vlist

        ( target, rest ) ->
            case target of
                [] ->
                    vlist

                vessel :: _ ->
                    { vessel | sequence = List.drop 1 vessel.sequence } :: rest


newVessel : Id -> Util.Direction -> Vessel
newVessel id dir =
    let
        makeVessel : VesselStrategy -> Vessel
        makeVessel strategy =
            { active = False
            , license = id
            , direction = dir
            , sequence =
                case dir of
                    Util.Upstream ->
                        strategy.upSequence

                    Util.Downstream ->
                        strategy.downSequence
            }
    in
    makeVessel wetsTwo


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ Nats.subscriptions natsConfig model.nats
        , Animator.toSubscription AnimationRuntimeStep model animator
        ]


port natsSend : Nats.PortsAPI.Send String msg


port natsReceive : Nats.PortsAPI.Receive String msg


natsConfig : Nats.Config String String Msg
natsConfig =
    Nats.Config.string NatsMsg
        { send = natsSend
        , receive = natsReceive
        }
        |> Nats.Config.withDebug False


receiveProg : Nats.Protocol.Message String -> Msg
receiveProg natsMessage =
    ReceiveProg natsMessage.data


natsSubscriptions : Model -> Nats.Sub String Msg
natsSubscriptions model =
    Nats.Sub.batch
        [ Nats.connect
            (Nats.Socket.connectOptions "PWets UI" "0.1"
                |> Nats.Socket.withUserPass "test" "test"
            )
            model.socket
            OnSocketEvent
        , Nats.subscribe "PWets.client" receiveProg
        ]


wrappedUpdate : Msg -> Model -> ( Model, Cmd Msg )
wrappedUpdate msg model =
    let
        ( newModel, natsEffect, cmd ) =
            update msg model

        ( nats, natsCmd ) =
            Nats.applyEffectAndSub
                natsConfig
                natsEffect
                (natsSubscriptions model)
                newModel.nats
    in
    ( { newModel | nats = nats }
    , Cmd.batch [ cmd, natsCmd ]
    )


update : Msg -> Model -> ( Model, Nats.Effect String Msg, Cmd Msg )
update msg model =
    case msg of
        AnimationRuntimeStep tick ->
            ( Animator.update tick animator model
            , Nats.Effect.none
            , Cmd.none
            )

        MoveVessel license millis ->
            case nextTransition license model.activeVessels of
                Nothing ->
                    ( { model
                        | message =
                            "handleVessel: No next transit state for " ++ license
                      }
                    , Nats.Effect.none
                    , Cmd.none
                    )

                Just nextState ->
                    let
                        setVesselState : TransitState -> Dict Id TransitState
                        setVesselState newState =
                            Dict.insert license newState <|
                                Animator.current model.vesselStates
                    in
                    ( { model
                        | vesselStates =
                            model.vesselStates
                                |> Animator.go (Animator.millis <| toFloat millis)
                                    (setVesselState nextState)
                        , activeVessels =
                            adjustSequence license model.activeVessels
                      }
                    , Nats.Effect.none
                    , if nextState == LowerEntry || nextState == UpperEntry then
                        Delay.after millis <| VesselFinished license

                      else
                        Cmd.none
                    )

        VesselFinished id ->
            ( { model
                | activeVessels = List.filter (\v -> v.license /= id) model.activeVessels
                , vesselStates =
                    model.vesselStates
                        |> Animator.go Animator.immediately
                            (Dict.remove id <| Animator.current model.vesselStates)
                , message = "Finished \"" ++ id ++ "\""
              }
            , Nats.Effect.none
            , Cmd.none
            )

        GateCleared id ->
            ( model
            , Nats.publish "PWets.1" <| PWets.gateCleared id
            , Cmd.none
            )

        FlowComplete id ->
            ( model
            , Nats.publish "PWets.1" <| PWets.flowEqualized id
            , Cmd.none
            )

        ActuatorMoveDone id ->
            ( model
            , Nats.publish "PWets.1" <| PWets.actuatorMoveDone id
            , Cmd.none
            )

        AllMoored id ->
            ( model
            , Nats.publish "PWets.1" <| PWets.allMoored id
            , Cmd.none
            )

        StartVessel direction ->
            let
                license : String
                license =
                    Util.newVesselName model.vesselCount

                popState : Vessel -> ( Vessel, TransitState )
                popState v =
                    case v.sequence of
                        [] ->
                            ( v, AtSea )

                        x :: rest ->
                            ( { v | sequence = rest }
                            , x
                            )

                ( vessel, startState ) =
                    popState <| newVessel license direction

                startVessel : Dict Id TransitState
                startVessel =
                    Animator.current model.vesselStates
                        |> Dict.insert license startState
            in
            ( { model
                | vesselCount = model.vesselCount + 1
                , vesselStates =
                    model.vesselStates
                        |> Animator.go Animator.immediately startVessel
                , activeVessels =
                    List.append model.activeVessels <| List.singleton vessel
                , message =
                    "Starting vessel \"" ++ license ++ "\""
              }
            , Nats.publish "PWets.1" <|
                PWets.startVessel license <|
                    Util.toString direction
            , Delay.after 100 <| MoveVessel license 1000
            )

        NatsMsg natsMsg ->
            let
                ( nats, natsCmd ) =
                    Nats.update natsConfig natsMsg model.nats
            in
            ( { model | nats = nats }
            , Nats.Effect.none
            , natsCmd
            )

        OnSocketEvent event ->
            ( { model
                | serverInfo =
                    case event of
                        Nats.Events.SocketOpen info ->
                            Just info

                        _ ->
                            Nothing
              }
            , Nats.Effect.none
            , Cmd.none
            )

        ReceiveProg data ->
            let
                ( new_model, cmd ) =
                    wetsHandler data model
            in
            ( new_model
            , Nats.Effect.none
            , cmd
            )


wetsHandler : String -> Model -> ( Model, Cmd Msg )
wetsHandler data model =
    case PWets.messageType data of
        Just PWets.MotorMsg ->
            case Decode.decodeString PWets.motorDecoder data of
                Ok cmd ->
                    handleMotor model cmd

                Err e ->
                    ( { model | message = Decode.errorToString e }
                    , Cmd.none
                    )

        Just PWets.GCDMsg ->
            case Decode.decodeString PWets.gcdDecoder data of
                Ok cmd ->
                    handleGCD model cmd

                Err e ->
                    ( { model | message = Decode.errorToString e }
                    , Cmd.none
                    )

        Just PWets.MooringMsg ->
            case Decode.decodeString PWets.mooringDecoder data of
                Ok cmd ->
                    handleMooring model cmd

                Err e ->
                    ( { model | message = Decode.errorToString e }
                    , Cmd.none
                    )

        Just PWets.FlowMsg ->
            case Decode.decodeString PWets.flowDecoder data of
                Ok cmd ->
                    handleFlow model cmd

                Err e ->
                    ( { model | message = Decode.errorToString e }
                    , Cmd.none
                    )

        Nothing ->
            ( model, Cmd.none )


chamberMoves : String -> Dict Id ChamberState
chamberMoves sensor =
    Dict.fromList <|
        case sensor of
            "Sensor-F03" ->
                [ ( "AChamber", Low ) ]

            "Sensor-F04" ->
                [ ( "AChamber", High )
                , ( "BChamber", Low )
                ]

            "Sensor-F05" ->
                [ ( "BChamber", High ) ]

            _ ->
                []


inChamberP : TransitState -> Bool
inChamberP tstate =
    case tstate of
        AChamberHigh ->
            True

        AChamberLow ->
            True

        BChamberHigh ->
            True

        BChamberLow ->
            True

        _ ->
            False


vesselInFlowP : Id -> Vessel -> Bool
vesselInFlowP sensor vessel =
    case List.head vessel.sequence of
        Nothing ->
            False

        Just tstate ->
            case sensor of
                "Sensor-F03" ->
                    case vessel.direction of
                        Util.Downstream ->
                            tstate == AChamberLow

                        Util.Upstream ->
                            tstate == AChamberHigh

                "Sensor-F05" ->
                    case vessel.direction of
                        Util.Downstream ->
                            tstate == BChamberLow

                        Util.Upstream ->
                            tstate == BChamberHigh

                _ ->
                    inChamberP tstate


handleFlow : Model -> PWets.FlowCommand -> ( Model, Cmd Msg )
handleFlow model cmd =
    let
        updateChambers : Id -> Dict Id ChamberState
        updateChambers sensor =
            Animator.current model.chamberStates
                |> Dict.union (chamberMoves sensor)

        vmoves : VesselList -> List ( Int, Msg )
        vmoves vlist =
            case List.filter (\v -> v.active) vlist of
                v :: _ ->
                    if vesselInFlowP cmd.name v then
                        List.singleton ( 0, MoveVessel v.license 2000 )

                    else
                        []

                _ ->
                    []
    in
    ( { model
        | chamberStates =
            model.chamberStates
                |> Animator.go (Animator.millis 2000)
                    (updateChambers cmd.name)
        , message = "Handling flow for " ++ cmd.name
      }
    , Delay.sequence <|
        List.append
            (vmoves model.activeVessels)
            [ ( 2000, FlowComplete cmd.name ) ]
    )


handleMotor : Model -> PWets.MotorCommand -> ( Model, Cmd Msg )
handleMotor model cmd =
    let
        opAsState : String -> ActuatorState
        opAsState op =
            if op == "RUN_IN" then
                Closed

            else
                Opened

        setActuator : Id -> ActuatorState -> Dict Id ActuatorState
        setActuator id newState =
            Dict.insert id newState <|
                Animator.current model.actuatorStates

        actState : ActuatorState
        actState =
            opAsState cmd.operation
    in
    ( { model
        | actuatorStates =
            model.actuatorStates
                |> Animator.go (Animator.millis 1000)
                    (setActuator cmd.name actState)
      }
    , Delay.after 1000 <| ActuatorMoveDone cmd.name
    )


startNext : Util.Direction -> VesselList -> VesselList
startNext dir vlist =
    case vlist of
        [] ->
            vlist

        v :: rest ->
            if v.direction == dir then
                { v | active = True } :: rest

            else
                v :: startNext dir rest


handleGCD : Model -> PWets.GCDCommand -> ( Model, Cmd Msg )
handleGCD model cmd =
    let
        vlist : VesselList
        vlist =
            if List.any (\v -> v.active) model.activeVessels then
                model.activeVessels

            else
                startNext
                    (if cmd.name == "GCD-05" then
                        Util.Downstream

                     else
                        Util.Upstream
                    )
                    model.activeVessels

        seq =
            vlist
                |> List.filter (\v -> v.active)
                |> List.map (\vid -> ( 0, MoveVessel vid.license 1000 ))
    in
    ( { model
        | activeVessels = vlist
        , message = cmd.operation ++ " for " ++ cmd.name
      }
    , Delay.sequence <|
        List.append seq [ ( 1000, GateCleared cmd.name ) ]
    )


handleMooring : Model -> PWets.MooringCommand -> ( Model, Cmd Msg )
handleMooring model cmd =
    ( { model | message = cmd.operation ++ " for " ++ cmd.name }
    , Delay.after 1000 <| AllMoored cmd.name
    )


view : Model -> Browser.Document Msg
view model =
    { title = "Sim Proto"
    , body =
        [ UI.layout <|
            E.column
                [ E.paddingEach
                    { top = 40, right = 0, bottom = 0, left = 80 }
                ]
                [ E.row
                    [ E.spacing 20
                    , E.paddingEach { top = 0, right = 0, bottom = 0, left = 30 }
                    ]
                    [ Text.displayMedium "WETS"
                        |> Material.text UI.theme
                    ]
                , E.row
                    [ E.paddingEach
                        { top = 20, right = 0, bottom = 60, left = 20 }
                    , E.spacing 20
                    ]
                    [ startPanel
                    , E.el
                        [ E.width <| E.px 600
                        , E.height <| E.px 200
                        ]
                      <|
                        locks model
                    ]
                , E.row
                    [ E.paddingEach
                        { top = 0, right = 0, bottom = 0, left = 20 }
                    , E.spacing 20
                    ]
                    [ infoPanel model
                    , Text.bodyMedium model.message
                        |> Material.text UI.theme
                    ]
                ]
        ]
    }


locks : Model -> E.Element msg
locks model =
    Svg.svg
        [ SvgA.viewBox "0 0 600 200"
        , SvgA.width "600"
        , SvgA.height "200"
        ]
        (List.concat
            [ [ Svg.rect
                    [ SvgA.width "600"
                    , SvgA.height "200"
                    , SvgA.x "0"
                    , SvgA.y "0"
                    , SvgA.fill <| Color.toCssString Color.lightGray
                    ]
                    []
              ]
            , lockTwo model
            , allVessels model
            ]
        )
        |> E.html


lockTwo : Model -> List (Svg msg)
lockTwo model =
    [ UI.chamber 150 0 40
    , animChamber "BChamber" model 150 150
    , animChamber "AChamber" model 150 300
    , UI.chamber 450 300 120
    , animGate "Gate-M05" model 144 30 90
    , UI.hub 150 146
    , animVane "Valve-M05" model 150 146
    , animGate "Gate-M04" model 294 30 110
    , UI.hub 300 165
    , animVane "Valve-M04" model 300 165
    , animGate "Gate-M03" model 444 60 90
    , UI.hub 450 175
    , animVane "Valve-M03" model 450 175
    , Svg.polygon
        [ SvgA.points "0,150 150,170 300,188 450,200 0,200"
        , SvgA.fill <| Color.toCssString Color.darkBrown
        ]
        []
    ]


startPanel : E.Element Msg
startPanel =
    let
        scheme : OUI.Material.Color.Scheme
        scheme =
            OUI.Material.Theme.colorscheme UI.theme
    in
    E.column
        [ Border.rounded 12
        , Border.color <|
            OUI.Material.Color.toElementColor scheme.outlineVariant
        , Border.width 1
        , Background.color <|
            OUI.Material.Color.toElementColor scheme.primaryContainer
        , E.padding 20
        , E.spacing 20
        , E.height E.fill
        ]
        [ "Start Vessel"
            |> Text.bodyMedium
            |> Material.text UI.theme
        , Button.new "Downstream"
            |> Button.onClick (StartVessel Util.Downstream)
            |> Material.button UI.theme []
        , Button.new "Upstream"
            |> Button.onClick (StartVessel Util.Upstream)
            |> Material.button UI.theme [ E.width E.fill ]
        ]


infoPanel : Model -> E.Element msg
infoPanel model =
    let
        isOnline : Bool
        isOnline =
            case model.serverInfo of
                Nothing ->
                    False

                Just _ ->
                    True

        panelAttr : List (E.Attribute msg)
        panelAttr =
            if isOnline then
                [ Background.color <| E.rgb255 0x1B 0x82 0x2F
                ]

            else
                [ Background.color <|
                    OUI.Material.Color.toElementColor scheme.errorContainer
                ]

        scheme : OUI.Material.Color.Scheme
        scheme =
            OUI.Material.Theme.colorscheme UI.theme
    in
    E.el
        ([ Border.rounded 10
         , Border.color <|
            OUI.Material.Color.toElementColor scheme.outlineVariant
         , Border.width 1
         , E.paddingEach { left = 18, top = 6, right = 10, bottom = 6 }
         , E.width <| E.px 100
         ]
            ++ panelAttr
        )
    <|
        Material.text UI.theme <|
            Text.bodyMedium <|
                if isOnline then
                    "Online"

                else
                    "Offline"


animVane : Id -> Model -> Int -> Int -> Svg msg
animVane id model x y =
    let
        valveValue : ActuatorState -> Float
        valveValue astate =
            case astate of
                Opened ->
                    pi / 2.0

                Closed ->
                    0.0
    in
    UI.vane x y <|
        Animator.linear model.actuatorStates <|
            \actuatorStates ->
                Animator.at <|
                    case Dict.get id actuatorStates of
                        Just astate ->
                            valveValue astate

                        Nothing ->
                            0.0


animChamber : Id -> Model -> Int -> Int -> Svg msg
animChamber id model width xoffset =
    let
        chamberDepth : ChamberState -> Float
        chamberDepth cstate =
            case cstate of
                High ->
                    40.0

                Low ->
                    80.0

        ySurface : Float
        ySurface =
            if id == "AChamber" then
                40.0

            else
                0.0
    in
    UI.chamber width xoffset <|
        round <|
            Animator.linear model.chamberStates <|
                \chamberStates ->
                    Animator.at <|
                        case Dict.get id chamberStates of
                            Just cs ->
                                ySurface + chamberDepth cs

                            Nothing ->
                                0.0


animGate : Id -> Model -> Int -> Int -> Int -> Svg msg
animGate id model x y height =
    let
        gateOpacity : ActuatorState -> Float
        gateOpacity astate =
            case astate of
                Opened ->
                    0.25

                Closed ->
                    1.0
    in
    UI.gate x y height <|
        Animator.linear model.actuatorStates <|
            \actuatorStates ->
                Animator.at <|
                    case Dict.get id actuatorStates of
                        Just gstate ->
                            gateOpacity gstate

                        Nothing ->
                            0.0


animVessel : Id -> Model -> Util.Direction -> Svg msg
animVessel id model direction =
    UI.vessel id direction <|
        Animator.xy model.vesselStates <|
            \vStates ->
                let
                    xypos : Util.Position
                    xypos =
                        Dict.get id vStates
                            |> Maybe.withDefault AtSea
                            |> wetsTwo.toPosition
                in
                { x = Animator.at xypos.x
                , y =
                    Animator.at xypos.y
                        |> Animator.leaveSmoothly 0
                        |> Animator.arriveSmoothly 0
                }


allVessels : Model -> List (Svg msg)
allVessels model =
    List.map
        (\t -> animVessel t.license model t.direction)
        model.activeVessels

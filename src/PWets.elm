module PWets exposing
    ( FlowCommand
    , GCDCommand
    , MooringCommand
    , MotorCommand
    , WetsMessage(..)
    , actuatorMoveDone
    , allMoored
    , flowDecoder
    , flowEqualized
    , gateCleared
    , gcdDecoder
    , messageType
    , mooringDecoder
    , motorDecoder
    , startVessel
    )

import Json.Decode as Decode
import Json.Encode as Encode


type WetsMessage
    = MotorMsg
    | GCDMsg
    | MooringMsg
    | FlowMsg


type alias GCDCommand =
    { object : String
    , operation : String
    , name : String
    }


type alias MooringCommand =
    { object : String
    , operation : String
    , name : String
    }


mooringDecoder : Decode.Decoder MooringCommand
mooringDecoder =
    Decode.map3 MooringCommand
        (Decode.field "object" Decode.string)
        (Decode.field "operation" Decode.string)
        (Decode.field "name" Decode.string)


type alias MotorCommand =
    { object : String
    , operation : String
    , name : String
    }


type alias FlowCommand =
    { object : String
    , operation : String
    , name : String
    }


messageType : String -> Maybe WetsMessage
messageType s =
    case Decode.decodeString (Decode.field "object" Decode.string) s of
        Ok cmd ->
            case cmd of
                "Motor" ->
                    Just MotorMsg

                "GCD" ->
                    Just GCDMsg

                "MooringMonitor" ->
                    Just MooringMsg

                "FlowSensor" ->
                    Just FlowMsg

                _ ->
                    Nothing

        Err _ ->
            Nothing


gcdDecoder : Decode.Decoder GCDCommand
gcdDecoder =
    Decode.map3 GCDCommand
        (Decode.field "object" Decode.string)
        (Decode.field "operation" Decode.string)
        (Decode.field "name" Decode.string)


gateCleared : String -> String
gateCleared name =
    Encode.object
        [ ( "object", Encode.string "GateCleared" )
        , ( "name", Encode.string name )
        ]
        |> Encode.encode 0


allMoored : String -> String
allMoored name =
    Encode.object
        [ ( "object", Encode.string "AllMoored" )
        , ( "name", Encode.string name )
        ]
        |> Encode.encode 0


motorDecoder : Decode.Decoder MotorCommand
motorDecoder =
    Decode.map3 MotorCommand
        (Decode.field "object" Decode.string)
        (Decode.field "operation" Decode.string)
        (Decode.field "name" Decode.string)


actuatorMoveDone : String -> String
actuatorMoveDone name =
    Encode.object
        [ ( "object", Encode.string "MotorCompleted" )
        , ( "name", Encode.string name )
        ]
        |> Encode.encode 0


flowDecoder : Decode.Decoder FlowCommand
flowDecoder =
    Decode.map3 FlowCommand
        (Decode.field "object" Decode.string)
        (Decode.field "operation" Decode.string)
        (Decode.field "name" Decode.string)


flowEqualized : String -> String
flowEqualized name =
    Encode.object
        [ ( "object", Encode.string "FlowEqualized" )
        , ( "name", Encode.string name )
        ]
        |> Encode.encode 0


startVessel : String -> String -> String
startVessel license direction =
    Encode.object
        [ ( "object", Encode.string "VesselArrived" )
        , ( "license", Encode.string license )
        , ( "direction", Encode.string direction )
        ]
        |> Encode.encode 0

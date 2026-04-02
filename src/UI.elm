module UI exposing
    ( chamber
    , gate
    , hub
    , layout
    , theme
    , vane
    , vessel
    )

import Angle
import Color
import Element as E
import Element.Background as Background
import Element.Font as Font
import Html exposing (Html)
import Html.Attributes
import OUI.Material.Color as Color
import OUI.Material.Theme as Theme
import Svg exposing (Svg)
import Svg.Attributes as SvgA
import Util


typescale : Theme.Typescale
typescale =
    let
        base =
            Theme.defaultTypescale

        display =
            base.display

        displayMedium =
            display.medium
    in
    { base
        | display =
            { display
                | medium =
                    { displayMedium
                        | font = "Expletus sans"
                    }
            }
    }


theme : Theme.Theme ()
theme =
    Theme.defaultTheme
        |> Theme.withTypescale typescale
        |> Theme.withColorscheme Color.defaultDarkScheme


layout : E.Element msg -> Html msg
layout =
    let
        scheme : Color.Scheme
        scheme =
            Theme.colorscheme theme
    in
    E.layoutWith
        { options =
            [ E.focusStyle
                { borderColor = Nothing
                , backgroundColor = Nothing
                , shadow = Nothing
                }
            ]
        }
        [ E.height E.fill
        , E.width E.fill
        , Background.color <| Color.toElementColor scheme.surface
        , Font.color <| Color.toElementColor scheme.onSurface
        , E.htmlAttribute <|
            Html.Attributes.style "-webkit-tap-highlight-color" "transparent"
        ]


vane : Int -> Int -> Float -> Svg msg
vane x y radians =
    let
        xForm : String
        xForm =
            [ "translate ("
            , String.fromInt x
            , " "
            , String.fromInt y
            , ") rotate ("
            , String.fromInt <|
                round <|
                    Angle.inDegrees <|
                        Angle.radians radians
            , ")"
            ]
                |> String.concat
    in
    Svg.g
        [ SvgA.transform xForm
        ]
        [ Svg.polyline
            [ SvgA.points "0 20 0 -20"
            , SvgA.strokeWidth "4"
            , SvgA.stroke <| Color.toCssString Color.darkPurple
            ]
            []
        ]


hub : Int -> Int -> Svg msg
hub x y =
    Svg.circle
        [ SvgA.cx <| String.fromInt x
        , SvgA.cy <| String.fromInt y
        , SvgA.r "6"
        , SvgA.fill <| Color.toCssString Color.darkPurple
        ]
        []


chamber : Int -> Int -> Int -> Svg msg
chamber width xoffset depth =
    Svg.rect
        [ SvgA.width <| String.fromInt width
        , SvgA.height <| String.fromInt <| 200 - depth
        , SvgA.x <| String.fromInt xoffset
        , SvgA.y <| String.fromInt depth
        , SvgA.fill <| Color.toCssString Color.lightBlue
        ]
        []


gate : Int -> Int -> Int -> Float -> Svg msg
gate x y height opacity =
    Svg.rect
        [ SvgA.width "12"
        , SvgA.height <| String.fromInt height
        , SvgA.x <| String.fromInt x
        , SvgA.y <| String.fromInt y
        , SvgA.fill <| Color.toCssString Color.darkBlue
        , SvgA.stroke <| Color.toCssString Color.darkBlue
        , SvgA.fillOpacity <| String.fromFloat opacity
        ]
        []


vessel : String -> Util.Direction -> Util.Position -> Svg msg
vessel name direction pos =
    let
        xForm : String
        xForm =
            [ "translate ("
            , String.fromInt <| round <| pos.x - 12
            , " "
            , String.fromInt <| round <| pos.y - 12
            , ")"
            ]
                |> String.concat

        points : String
        points =
            case direction of
                Util.Downstream ->
                    "2,2 22,12 2,22"

                Util.Upstream ->
                    "22,2 2,12 22,22"
    in
    Svg.g
        [ SvgA.transform xForm
        ]
        [ Svg.polygon
            [ SvgA.points points
            , SvgA.fill <| Color.toCssString Color.darkGreen
            , SvgA.fillOpacity ".8"
            ]
            []
        , Svg.text_
            [ SvgA.y "45"
            , SvgA.x "-24"
            , SvgA.fill <| Color.toCssString Color.yellow
            , SvgA.fontSize ".6em"
            ]
            [ Svg.text name
            ]
        ]

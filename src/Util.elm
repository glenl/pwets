module Util exposing
    ( Direction(..)
    , Position
    , newVesselName
    , toString
    )

import Lorem
import String.Extra


type Direction
    = Upstream
    | Downstream


type alias Position =
    { x : Float
    , y : Float
    }


toString : Direction -> String
toString d =
    case d of
        Upstream ->
            "Upstream"

        Downstream ->
            "Downstream"


newVesselName : Int -> String
newVesselName index =
    let
        nmax : Int
        nmax =
            50

        n : Int
        n =
            modBy nmax index

        wordpair : List String
        wordpair =
            Lorem.words (nmax + 1)
                |> List.drop n
                |> List.take 2
    in
    List.singleton (String.fromInt index)
        |> List.append wordpair
        |> List.map (String.filter Char.isAlphaNum)
        |> String.join " "
        |> String.Extra.toTitleCase

module Lookups exposing (lookup)

import Dict exposing (Dict)
import Expect
import Test exposing (describe, test)


type alias Sample =
    { name : String
    , vector : List Int
    }


purgeInactive : Dict String Sample -> Dict String Sample
purgeInactive vdict =
    let
        isFinished : String -> Sample -> Bool
        isFinished _ v =
            List.isEmpty v.vector
    in
    Dict.filter isFinished vdict
        |> Dict.foldl (always << Dict.remove) vdict


dict : Dict String Sample
dict =
    Dict.fromList
        [ ( "One", { name = "Alpha", vector = [ 1, 2, 3 ] } )
        , ( "Two", { name = "Bravo", vector = [ 2, 4, 6 ] } )
        , ( "Three", { name = "Charlie", vector = [ 3, 9, 12 ] } )
        ]


lookup : Test.Test
lookup =
    describe "Lookup"
        [ describe "Simple"
            [ test "Simple remove" <|
                \_ ->
                    Dict.remove "Two" dict
                        |> Dict.size
                        |> Expect.equal 2
            , test "Simple update" <|
                \_ ->
                    Dict.insert "Three"
                        { name = "Mary", vector = [ 0 ] }
                        dict
                        |> Dict.get "Three"
                        |> Maybe.map (\x -> x.name)
                        |> Expect.equal (Just "Mary")
            ]
        , test "Next in sequence" <|
            \_ ->
                Dict.get "One" dict
                    |> Maybe.andThen (\d -> List.head d.vector)
                    |> Expect.equal (Just 1)
        , test "pop first in sequence" <|
            \_ ->
                Dict.update "Two"
                    (Maybe.map (\d -> { d | vector = List.drop 1 d.vector }))
                    dict
                    |> Dict.get "Two"
                    |> Maybe.andThen (\d -> List.head d.vector)
                    |> Expect.equal (Just 4)
        , test "maybe always?" <|
            \_ ->
                Dict.update "Three"
                    (Maybe.map (\_ -> { name = "Delta", vector = [ 0 ] }))
                    dict
                    |> Dict.get "Three"
                    |> Maybe.map (\d -> d.name)
                    |> Expect.equal (Just "Delta")
        , test "pop all elements of Three, then purge inactive" <|
            \_ ->
                Dict.update "Three"
                    (Maybe.map (\d -> { d | vector = List.drop 1 d.vector }))
                    dict
                    |> Dict.update "Three"
                        (Maybe.map (\d -> { d | vector = List.drop 1 d.vector }))
                    |> Dict.update "Three"
                        (Maybe.map (\d -> { d | vector = List.drop 1 d.vector }))
                    |> purgeInactive
                    |> Dict.get "Three"
                    |> Expect.equal Nothing
        ]

module Listmods exposing (listmods)

import Expect
import Test exposing (describe, test)

type alias T =
    { target : Bool
    , counter : Int
    }

type alias TList =
    List T

testList : TList
testList =
    [ { target = False, counter = 0 }
    , { target = False, counter = 1 }
    , { target = True, counter = 2  }
    , { target = False, counter = 3 }
    ]

bumpList : Bool -> TList -> TList
bumpList val tl =
    case tl of
        [] -> tl
        x :: rest ->
            if x.target == val
            then
                { x | counter = x.counter + 1 } :: rest
            else
                x :: bumpList val rest


listmods : Test.Test
listmods =
    describe "Listmod"
        [ describe "Bump element of list"
              [ test "Simple update" <|
                  \_ ->
                    bumpList True testList
                    |> List.drop 2
                    |> List.head
                    |> Maybe.map (\t -> t.counter)
                    |> Expect.equal (Just 3)
              , test "Update only first of several" <|
                  \_ ->
                    bumpList False testList
                    |> List.drop 3
                    |> List.head
                    |> Maybe.map (\t -> t.counter)
                    |> Expect.equal (Just 3)
              , test "Update first" <|
                  \_ ->
                    bumpList False testList
                    |> List.head
                    |> Maybe.map (\t -> t.counter)
                    |> Expect.equal (Just 1)
              , test "Length correct after modification" <|
                  \_ ->
                    bumpList True testList
                    |> List.length
                    |> Expect.equal 4
              ]
        ]

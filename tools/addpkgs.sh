#! /usr/bin/env bash

PKGS="\
    elm/json \
    elm/svg \
    avh4/elm-color \
    elm-explorations/linear-algebra \
    mdgriffith/elm-animator \
    mdgriffith/elm-ui \
    orus-io/elm-orus-ui \
    orus-io/elm-nats \
    elm/time \
    ohanhi/lorem \
    elm-community/string-extra \
    ianmackenzie/elm-units \
    elm/random \
    andrewMacmurray/elm-delay \
    "

for pkg in $PKGS; do
    echo "Y" | elm install $pkg
done

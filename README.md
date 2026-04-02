# pwets

WETS simulator based on Paul's model

## Overview

This repository contains these elements

* `doccsrc` - the literate document for the elm code; this is the source
  document that uses atangle to generate all the elm files in ./src.

* `site` - web site code in elm and JavaScript

* `nats` - the NATS client containing a TCL script that mediates betweent the
  translated model and a NATS server.

* `FormalModels` and `Translations` - information model and translation

* `tests` and `review` - elm support folders (elm-test, elm-review)

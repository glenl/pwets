# NATS Notes

This is a prototype setup, not meant for production, so it is fairly raw.

## nats-server

A nats-server for your architecture is available from
[nats.io](https://nats.io/ "nats.io"). Once installed, I start it with

````bash
$ nats-server --config=server.config
````

The server config file is available at the top of this repository. Careful! It
is not very secure and not intended for production.

## WETS

There are two parts to interacting with WETS using the nats-server.

 - pwets.tcl, the rosea translation of the information model that has been
   modified to replace delayed timing signal simulation with messaging to and
   from wetnats.tcl.

 - wetnats.tcl, containing the message handling to and from nats

## Starting wetnats.tcl

`wetnats.tcl` will require a nats TCL module which is also available from
nats.io. I turned this into a module but you can source it directly if that is
easier for you.

I typically start wetnats.tcl with

````bash
$ cd nats
$ ./wetnats.tcl --level=info
````

This should be run from the same folder as `pwets.tcl` since `wetnats` sources
that file directly.

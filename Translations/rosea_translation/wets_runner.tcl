#!/usr/bin/env tclsh

package require Tcl 8.6
package require rosea
package require cmdline
package require logger
package require logger::utils
package require logger::appender
package require textutil::wcswidth

namespace import ::ral::*
namespace import ::ralutil::*

set optlist {
    {level.arg notice {Log debug level}}
    {trace {Trace state machine transitions}}
    {rash {Use rash package as dashboard}}
    {seed.arg {} {Initial random number generator seed}}
    {mintime.arg {1000} {Minimum time between vessel requests}}
    {maxtime.arg {3000} {Maximum time between vessel requests}}
    {randomize {Randomize timings for vessel, gate, valve, etc. simulations}}
}

try {
    array set options [::cmdline::getoptions argv $optlist]
} on error {result} {
    chan puts -nonewline stderr $result
    exit 1
}

source ./wets.tcl

proc genRandomVesselRequest {} {
    for {set backlog [getWaitingBacklog]} {$backlog < 5} {incr backlog} {
        set direction [expr {[randomInRange 0 1] == 0 ? "Upstream" : "Downstream"}]
        ::wets newVesselGroup $direction
    }

    after [randomInRange $::options(mintime) $::options(maxtime)] genRandomVesselRequest
}

proc getWaitingBacklog {} {
    return [pipe {
        relvar set ::wets::VesselGroup |
        relation restrictwith ~ {$isAwaitingAssignment == true} |
        relation cardinality ~
    }]
}

proc randomInRange {min max} {
    return [expr {int(rand() * ($max - $min + 1)) + $min}]
}

proc shuffle {list} {
    set n [llength $list]
    for {set i 1} {$i < $n} {incr i} {
        set j [expr {int(rand() * $n)}]
        set temp [lindex $list $i]
        lset list $i [lindex $list $j]
        lset list $j $temp
    }
    return $list
}

if {$::options(seed) != {}} {
    expr srand($::options(seed))
}

if {$::options(rash)} {
    package require rash
    wm withdraw .
    rash init
    # tkwait window .rash
} elseif {$::options(trace)} {
    rosea trace control loglevel info
    rosea trace control logon
    rosea trace control on
}

if {$::options(randomize)} {
    ::mechanical_mgmt randomizeTiming
}

::wets newVesselGroup "Downstream"
#genRandomVesselRequest

vwait forever

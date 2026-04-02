#!/usr/bin/env tclsh

package require Tcl 8.6 9
package require ral
namespace eval ::ral {
    package require textutil
}
package require json
package require nats
package require rosea
package require cmdline
package require logger
package require logger::utils
package require logger::appender

set optlist {
    {level.arg notice {Logging level.}}
    {trace {Trace state machine transitions}}
}
set usage "\[options]:"
try {
    array set ::options [::cmdline::getoptions argv $optlist $usage]
} trap {CMDLINE USAGE} {msg} {
    chan puts -nonewline stderr $msg
    exit 1
}


namespace eval ::nats_xfer {
    variable connection -1
    set logger [::logger::initNamespace [namespace current]]
    set appenderType [expr {[dict exist [fconfigure stdout] -mode] ?\
            "colorConsole" : "console"}]
    logger::utils::applyAppender -appender $appenderType -serviceCmd $logger\
            -appenderArgs {-conversionPattern {\[%c\] \[%p\] '%m'}}

    log::setlevel $::options(level)
    proc get_conn {} {
        variable connection
        if {$connection == -1} {
            set connection [nats::connection new "PWets"]
            $connection configure -servers nats://localhost:4222
            $connection connect
            log::notice "Connection status: [$connection cget -status]"
            log::notice "NATS version: [dict get [$connection server_info] version]"
        }
        return $connection
    }
    namespace export listen
    proc listen {} {
        set conn [get_conn]
        # Listen for PWets.1 messages
        $conn subscribe PWets.1 -callback ::nats_xfer::onWetsMessage
    }
    proc onWetsMessage {subject message replyTo} {
        set cmd_dict [::json::json2dict $message]
        switch [dict get $cmd_dict object] {
            MotorCompleted {
                log::info [format "Motor for %s completed" \
                               [dict get $cmd_dict name]]
                ::mechanical_mgmt externalEventReceiver Motor \
                    [list name [dict get $cmd_dict name]] \
                    extent_reached
            }
            GateCleared {
                log::info [format "Gate cleared for %s" \
                              [dict get $cmd_dict name]]
                ::mechanical_mgmt externalEventReceiver Gate_Clearance_Detector \
                    [list name [dict get $cmd_dict name]] \
                    gate_cleared

            }
            FlowEqualized {
                log::info [format "Flow equalized on %s" \
                               [dict get $cmd_dict name]]
                ::mechanical_mgmt externalEventReceiver Flow_Sensor \
                    [list name [dict get $cmd_dict name]] \
                    flow_zero
            }
            AllMoored {
                log::info [format "All Moored for %s" \
                               [dict get $cmd_dict name]]
                ::mechanical_mgmt externalEventReceiver Mooring_Supervisor \
                    [list name [dict get $cmd_dict name]] \
                    all_moored
            }
            VesselArrived {
                log::info [format "Vessel named %s arrived going %s" \
                               [dict get $cmd_dict license] \
                               [dict get $cmd_dict direction]]
                ::wets newVesselGroup [dict get $cmd_dict direction]
            }
            default {
                log::warn "Unknown object: [dict get $cmd_dict object]"
            }
        }
    }
    proc nats_publish {msg_dict} {
        set msg [nats::msg create wets_message]
        nats::msg set msg -subject "PWets.client"
        nats::msg set msg -data [json::dict2json $msg_dict]
        set conn [get_conn]
        $conn publish_msg $msg
    }
    # RUN_OUT ==> MotorComplete
    namespace export motor_runout
    proc motor_runout { motor_name } {
        dict set motor_msg object {"Motor"}
        dict set motor_msg operation {"RUN_OUT"}
        dict set motor_msg name [json::write::string $motor_name]
        log::notice [format "Sending RUN_OUT for %s" $motor_name]
        nats_publish $motor_msg
    }
    # RUN_IN ==> MotorComplete
    namespace export motor_runin
    proc motor_runin { motor_name } {
        dict set motor_msg object {"Motor"}
        dict set motor_msg operation {"RUN_IN"}
        dict set motor_msg name [json::write::string $motor_name]
        log::notice [format "Sending RUN_IN for %s" $motor_name]
        nats_publish $motor_msg
    }
    # MONITOR_FLOW ==> FlowEqualized
    namespace export monitor_flow
    proc monitor_flow { name } {
        dict set flow_sensor_msg object {"FlowSensor"}
        dict set flow_sensor_msg operation {"MONITOR_FLOW"}
        dict set flow_sensor_msg name [json::write::string $name]
        log::notice [format "Sending MONITOR_FLOW for flow sensor %s" $name]
        nats_publish $flow_sensor_msg
    }
    # GATE_SENSING ==> GateCleared
    namespace export gate_clearance_sensing
    proc gate_clearance_sensing { name } {
        dict set gate_sensor_msg object {"GCD"}
        dict set gate_sensor_msg operation {"GATE_SENSING"}
        dict set gate_sensor_msg name [json::write::string $name]
        log::notice [format "Sending GATE_SENSING for GCD %s" $name]
        nats_publish $gate_sensor_msg
    }

    # Mooring_Supervisor
    # MONITOR_MOORING ==> AllMoored
    namespace export monitor_mooring
    proc monitor_mooring { name } {
        dict set mooring_msg object {"MooringMonitor"}
        dict set mooring_msg operation {"MONITOR_MOORING"}
        dict set mooring_msg name [json::write::string $name]
        log::notice [format "Sending MONITOR_MOORING to %s" $name]
        nats_publish $mooring_msg
    }
}

#set top [file normalize [file join [file dirname $argv0] ".."]]
#source [file join $top "Translations" "rosea_translation" "pwets.tcl"]

source "pwets.tcl"

if {$::options(trace)} {
    rosea trace control loglevel {$::options(level)}
    rosea trace control logon
    rosea trace control on
}

::nats_xfer::listen

vwait forever

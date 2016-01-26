+++

date = "2016-01-20"
title = "Agent Release v0.4.5 - Update Required"
description = "Changelog - Agent Release v0.4.5"
url = "changelog/agent-release-0-4-5"
section = "changelog"
category = "app"
weight = "25"

+++

We’ve shipped a major update to our monitoring Agent, to improve performance and minimise the amount of server CPU the Agent requires.

**You must to [Update Your Agents](../../using-barricade/#updating-agents) to apply these changes.**

--



## Features:

* Added ability to pause or disable the agent from the dashboard
* Support for running in Docker containers
* Include system information (Operating System, Kernel version, etc) in data being monitored by Barricade
* SSL now uses trusted certificate - SSL negotiation verifies hostname before establishing connection


## Bug Fixes:

* Add a more robust external IP resolver (solves issue where occasionally public IP would not be registered correctly)
* Fixes for some memory exhaustion scenarios in low resource environments
* Automatically restarts interface captures that have failed


## Agent Configuration:

Agents have advanced configuration options that you can adjust to suit your needs. See our [Agent Configuration docs](../../using-barricade/#configuring-agents) for details on how you can set these options.

* `ssl_check_hostname` (new) - enable/disable SSL hostname verification, enabled by default
* `spooler_memory` (new) - specify the amount of memory to use for buffering packets in high traffic scenarios before dropping. Has a default derived from system memory.
* `flush_frequency` (changed) - default changed from 1 second to 0.01 seconds
* `log_level` (changed) - default changed from error to warning
* `high_water_mark` (deprecated) - deprecated in favour of `spooler_memory`
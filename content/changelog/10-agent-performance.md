+++
date = "2015-08-27"
title = "Agent Performance Improvements"
description = "Changelog - Agent Performance Improvements"
url = "changelog/agent-performance"
section = "changelog"
category = "agent"
weight = "10"

+++

We've shipped a major update to our monitoring Agent, to improve performance and minimise the amount of server CPU the Agent requires.

**Avoiding CPU Spikes**  
All data preprocessing is now handled server side - meaning the agent has been simplified to consume less server resources. This results in better performance under load, and allows us to scale and upgrade our analysis without requiring an update of the agent.

**Packets Per Second**  
The agent configuration has also been updated with a maximum number of packets per second that will be sent to Barricade - this is to help prevent the agent becoming a problem itself during a high traffic event, such as a DoS attack. By default, this is 10,000 packets per second, and this figure can be modified to suit the environment and traffic profile.

When this limit is hit, the agent will begin dropping older packets to prioritise the newest information, and emit a warning to this effect in the logs (`/var/log/barricade.log` on most systems, in journalctl for systemd based systems).

--  

**You must to [Update Your Agents](https://docs.barricade.io/using-barricade/#updating-agents) to apply these changes.**


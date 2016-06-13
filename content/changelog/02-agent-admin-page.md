+++
date = "2015-07-02"
title = "Added Agent Admin Page"
description = "Changelog - Added Agent Admin Page"
url = "changelog/agent-admin-page"
section = "changelog"
category = "app"
weight = "02"

+++

We've added a new admin section to the Barricade app: [app.barricade.io/agents](https://app.barricade.io/agents)

This section allows you to see what Agents are running, how busy they are and how to control them (stop, start, etc).

![https://docs.barricade.io/src/img/changelog/02-agents.png](https://docs.barricade.io/src/img/changelog/02-agents.png)

### Agent Controls

You can stop and start the agent by running commands on your server - this new Agent section provides instructions on how to do this - see our [Agent documentation](https://docs.barricade.io/using-barricade/#updating-agents) for more details.

```
service barricade start  
service barricade stop  
service barricade status  
```

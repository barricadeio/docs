+++
title = "Stopping & Starting Agents"
description = "How Can I Stop and Start Agents"
weight = "26"

tags = ["agent", "controls"]
section = "using-barricade"
categories = ["using-barricade"]
type = "page"
slug = "stopping-starting-agents"

[menu.main]
    url = "stopping-starting-agents"
    parent = "using-barricade"

+++

## Agent Controls

The Agents section of the app interface provides a breakdown of the Agents you have running:

* state of the Agent (active/inactive)
* how much data they’re using in the monitoring process
* cost of each Agent in terms of GB
* ability to stop and start agents _(coming soon)_

### How Can I Stop and Start Agents?

We will be releasing an interface control for this in early 2016, so you have more control over what’s running on your servers.

For the time being, depending on your operating system you can use the normal service management. For instance, in the case of Ubuntu, you can run `service barricade stop`. This does require a manual intervention via SSH.

```
service barricade start  
service barricade stop  
service barricade restart  
service barricade status
```

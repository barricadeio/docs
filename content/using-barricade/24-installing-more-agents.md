+++
title = "Installing Agents"
description = "How to install additional Barricade Agents"
weight = "14"

tags = ["agent", "update"]
section = "using-barricade"
categories = ["using-barricade"]
type = "page"
slug = "installing-more-agents"

[menu.main]
    url = "installing-more-agents"
    parent = "using-barricade"

+++

During the [account signup process](/hc/en-us/articles/205447438-Getting-Started), you will install your first monitoring Agent. Once that process is completed, you can repeat the original steps to install additional Agents at any time, allowing Barricade to watch over entire clusters of servers.

## How to Install

Inside the Barricade [app](https://app.barricade.io), you'll see a New Agent button in the top-right-hand corner:

![../src/img/getting-started/drawer-opening.gif](../src/img/getting-started/drawer-opening.gif)

**Instructions:**

1.  Click the New Agent button to open the installer section
2.  Copy the install command
3.  Connect to your server and run the command ([see our SSH guide](../getting-started/#running-commands))
4.  When the install command is finished, the new Agent will be detected automatically 

![../src/img/getting-started/drawer-detection.gif](../src/img/getting-started/drawer-detection.gif)

Once detected, you can close the panel by clicking the 'X' icon in the top-right corner, or choose to Install Another.
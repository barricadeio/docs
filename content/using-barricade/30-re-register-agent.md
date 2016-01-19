+++
title = "Re-registering Agents"
description = "How to re-register Barricade Agents"
weight = "30"

tags = ["agent", "connection", "troubleshooting", "registering"]
section = "using-barricade"
categories = ["using-barricade"]
type = "page"
slug = "re-register-agent"

[menu.main]
    url = "re-register-agent"
    parent = "using-barricade"

+++

We recommend re-registering an Agent if any of the following issues arise during the installation process:

*   Agent is not registered after installation
*   Agent was registered, but has stopped connecting / sending data

Run this command on your server to re-register the agent:

```
$ sudo su
$ PATH=$PATH:/opt/barricade/embedded/; /opt/barricade/embedded/bin/barricade-register
```

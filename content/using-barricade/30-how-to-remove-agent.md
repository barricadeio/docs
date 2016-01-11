+++
title = "Removing Agents"
description = "How to remove a Barricade Agent"
weight = "30"

tags = ["agent", "remove"]
section = "using-barricade"
categories = ["using-barricade"]
type = "page"
slug = "how-to-remove-agent"

[menu.main]
    url = "how-to-remove-agent"
    parent = "using-barricade"

+++

If you wish to stop monitoring a server, you’ll need to manually remove the Barricade Agent by running a command on your server:

To remove from an Ubuntu server: `dpkg -r barricade`

To remove from a CentOS server: `rpm -e barricade`

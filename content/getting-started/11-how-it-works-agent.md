+++
title = "How Agents Work"
description = "What is an Agent? How Barricade works."
weight = "11"

tags = ["agent", "how it works"]
section = "getting-started"
categories = ["getting-started"]
type = "page"
slug = "how-it-works-agent"

[menu.main]
    url = "how-it-works-agent"
    parent = "getting-started"

+++

Agents quietly monitor, without getting in the way or impacting on your server resources. There is no need for any code or configuration changes to your app.

Data is gathered, encrypted and sent from the agent to the Barricade platform engine; where it’s immediately analyzed for any suspicious activity - detecting web app attacks, data breaches or intrusion attempts on your server.


## Lightweight Agent

The agent sits quietly on your server and keeps an eye on things - the heavy data analysis processes are carried out by our platform’s engine - to ensure your performance isn’t affected.

Our design ensures that the agent does **not** -

* **Get in the way**:  
    the agent monitors and collects data, it will not block any traffic on your application
* **Slow down your server**:  
    the agent focuses on lightweight tasks; formatting and transmitting data to our engine.
* **Expose your data**:  
    all transmitted information is encrypted with 2048-bit SSL

## One-Way Agent

Don’t worry - Barricade can’t connect to your server and execute commands. By design, the agent communicates out but Barricade can never communicate in.


## Installation

The Agent is installed via a one touch command, which fetches the code, verifies the package signature and installs the agent on your server. For step-by-step installation instructions see the [Installing an Agent](#installing-an-agent) guide.

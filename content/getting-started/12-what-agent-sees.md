+++
title = "What Can Agents see?"
description = "What can the Agent see?"
weight = "12"

tags = ["agent", "how it works"]
section = "getting-started"
categories = ["getting-started"]
type = "page"
slug = "what-agent-sees"

[menu.main]
    url = "what-agent-sees"
    parent = "getting-started"

+++

The agent gathers data about activity on your servers, and transmits it securely to our engine for real-time analysis.

*   Names and versions of software packages
*   Network traffic that goes in and out of your server from the network layer all the way up to the application layer
*   Configuration files for applications like Nginx and SSH
*   All transmitted data is **encrypted with 2048-bit SSL**, and promptly analyzed by our engine to check for any security issues.

Whatever DevOps tools you run, Barricade will detect and observe but not interfere - be it Chef, Puppet, Ansible, docker-composer, Beanstalk, etc.

Using this information, Barricade tells you immediately if someone is trying to break in, if data is leaving your network when it shouldn't, if your server software is affected by known exploits and much more.

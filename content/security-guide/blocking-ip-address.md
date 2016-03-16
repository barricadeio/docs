+++
title = "Blocking IP Addresses"
weight = "41"

tags = ["ip", "blocking", "iptables", "recommendation"]
section = "security-guide"
categories = ["security-guide"]
type = "page"

slug = "#blocking-ip-address"

aliases = [
    "/security-guide/blocking-ip-address"
]

[menu.main]
    url = "https://docs.barricade.io/security-guide/#blocking-ip-address"
    parent = "security-guide"

+++

If you're receiving alerts that your system is experiencing an attack, we will often recommend you take action and block the attacker to prevent them from trying again.

## How to Block an IP Address

To block an IP address, you'll need to run an `IPTABLES` command on your server - our Alert messages present this command for you to copy:

![../src/img/security-guide/block-ip-01.png](../src/img/security-guide/block-ip-01.png)

1.  Click the button on the right to copy the command to your clipboard.
2.  Paste and run the command on your server.

Iptables is a tool for configuring firewall rules in Linux servers - see the [iptables main page](http://ipset.netfilter.org/iptables.man.html) for the full list of supported commands.

## How to Run Commands

If you'd not familiar with running commands on your server (using SSH), see the [How to Run Commands on Your Server](#running-commands)tips.

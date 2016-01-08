+++
title = "What is an Agent?"
description = "What is an Agent? How Barricade works."
weight = "20"

tags = ["agent", "how it works"]
section = "getting-started"
categories = ["getting-started"]
type = "page"
slug = "what-is-an-agent"

[menu.main]
    url = "what-is-an-agent"
    parent = "getting-started"

+++

Barricades' agent is a simple, lightweight package that checks activity on your cloud server. It quietly monitors, without getting in the way - no need for any code or configuration changes!

Data is gathered, encrypted and sent from the agent to our platforms’ engine; where it’s immediately analyzed for any suspicious activity - detecting web app attacks, data breaches or intrusion attempts on your server.

[IMG]

_Barricade's Collection Workflow - gathering, processing and alerting._

### How it Works

## The Agent

The agent sits quietly on your server and keeps an eye on things - the heavy data analysis processes are carried out by our platform’s engine - to ensure your performance isn’t affected.

Our design ensures that the agent does **not** -

* **Get in the way**:  
    the agent monitors and collects data, it will not block any traffic on your application
* **Slow down your server**:  
    the agent focuses on lightweight tasks; formatting and transmitting data to our engine.
* **Expose your data**:  
    all transmitted information is encrypted with 2048-bit SSL

## The Engine

Our platform engine makes decisions in real-time. Data is received from the agent and processed through statistical (machine learning) models to make decisions. When an attack is detected, the engine triggers an alert and we notify you immediately through our app and integration channels.

As new data comes in, the engine learns about different types of behaviours for your infrastructure and what seems to be normal behaviour based on the services running.

## One-Way Agent

Don’t worry - Barricade can’t connect to your server and execute commands. The agent will occasionally check the Barricade API.

By design, the agent communicates out but Barricade can never communicate in.

## What can the Agent see?

The agent gathers data about activity on your servers, and transmits it securely to our engine for real-time analysis.

*   Names and versions of software packages
*   Network traffic that goes in and out of your server from the network layer all the way up to the application layer
*   Configuration files for applications like Nginx and SSH
*   All transmitted data is **encrypted with 2048-bit SSL**, and promptly analyzed by our engine to check for any security issues.

Whatever DevOps tools you run, Barricade will detect and observe but not interfere - be it Chef, Puppet, Ansible, docker-composer, Beanstalk, etc.

The Agent is designed to distill complex machine learning concepts such as artificial neural networks, anomaly detection and ensemble learning into consumable and actionable information.

Using this information, Barricade tells you immediately if someone is trying to break in, if data is leaving your network when it shouldn't, if your server software is affected by known exploits and much more.

## Installation

The Agent is installed via a one touch command, which fetches the code, verifies the package signature and installs the agent on your server. For step-by-step installation instructions see our [Getting Started](LINK) guide.

In the interests of transparency, we will be open sourcing the Agent on our [Github](https://github.com/barricadeio/) page in the coming weeks.

### OS Requirements

Our Agent supports Ubuntu and CentOS based cloud servers - (common configurations on providers like AWS, Google Cloud Platform, DigitalOcean and Microsoft Azure).

*   Ubuntu 14.04 LTS (64-bit)
*   Ubuntu 14.10 (64-bit)
*   Ubuntu 12.04 (64-bit)
*   CentOS 6.5 (64-bit)
*   CentOS 7.0 (64-bit)

_We currently don't support Windows, but it is on our roadmap._  

### Running the Agent on Docker

We are currently testing a new version of our agent that natively runs with Docker. If you are interested in trying it out, please do not hesitate to contact us and we’d be more than happy to let you try it.

### How Do I Update the Agent?

Once installed, you maintain control over the agent - we can’t push code to your server. When new versions of the agent are [released](LINK), the update process is a simple - re-running the install command to grab the latest version. See [Updating Agents](LINK) for more info.

### How Can I Stop and Start Agents?

We’re releasing this functionality shortly - adding a section within the interface which details the agents you have running, how much data they’re monitoring and introducing the ability to stop and start agents as needed - so you have more control over what’s running on your servers.

For the time being, depending on your operating system you can use the normal service management. For instance, in the case of Ubuntu, you can run `service barricade stop`. This does require a manual intervention via SSH.

```
service barricade start  
service barricade stop  
service barricade restart  
service barricade status
```

### How Do I Remove an Agent?

If you wish to stop monitoring a server, you’ll need to manually remove the Barricade Agent by running a command on your server:

To remove from an Ubuntu server:

`dpkg -r barricade`

To remove from a CentOS server:

`rpm -e barricade`
+++

date = "2016-05-12"
title = "Added Webhooks"
description = "Changelog - Webhooks"
url = "changelog/webhooks"
section = "changelog"
category = "app"
weight = "30"

+++

Webhooks are a simple way to post messages from Barricade to external sources. A few weeks ago we released the beta version of our [public API](https://docs.barricade.io/api) which allows developers to programatically access any information in their Barricade account.

To make the process of security response even easier, we've also implemented a Webhook mechanism that uses HTTP to proactively POST a JSON payload of new security cases to your URL of choice.

We did this because we're tired of security products trying to change how you work and what your workflow should look like. We are firm believers that for security to really succeed, it needs to be as seamless and as little disruptive as possible.

You can read more about using custom webhooks in our [blog announcement](https://blog.barricade.io/barricade-welcomes-webhooks).

![../../src/img/changelog/30-webhooks.gif](../../src/img/changelog/30-webhooks.gif)

To go ahead and create your own webhooks, go to [app.barricade.io/dashboard/settings/notification/webhook](https://app.barricade.io/dashboard/settings/notification/webhook)

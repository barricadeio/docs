+++
title = "Custom Webhooks"
weight = "17"

tags = ["notifications", "webhooks", "api", "webhook", "web", "hooks", "zapier", "pagerduty", "post", "json"]
section = "using-barricade"
categories = ["using-barricade"]
type = "page"

slug = "custom-webhooks"

[menu.main]
    url = "custom-webhooks"
    parent = "using-barricade"

+++

Webhooks are a simple way to post messages from Barricade to external sources to compliment our [public API](https://docs.barricade.io/api) which allows developers to programatically access any information in their Barricade account.

To make the process of security response even easier, we’ve also created a Webhook mechanism that uses HTTP to proactively POST a JSON payload of new security cases to your URL of choice.

Webhook settings page: [app.barricade.io/dashboard/settings/notification/webhook](https://app.barricade.io/dashboard/settings/notification/webhook)


### Example Use
To demonstrate the usefulness of webhooks, here's an example which uses creates a webhook to automatically log security cases in [PagerDuty](https://www.pagerduty.com/), through [Zapier](https://zapier.com/).

_PagerDuty is your fastest path to incident resolution, helping IT Operations and DevOps teams deliver on the promise of agility, performance, and uptime._

_Zapier makes automation easy for busy people. Zapier moves info between your web apps automatically, so you can focus on your most important work. It automates your workflows._

### Setting Up a Webhook

1.  Login to Barricade and go to Settings > Notifications> [Custom Notifications](https://app.barricade.io/dashboard/settings/notification/webhook)

2. Click on the switch to **Enable** webhooks.

3. Once you’ve enabled the integration, head on over to your Zapier account and create a new [Webhook Zap](https://zapier.com/zapbook/webhook/) catch hook:

    ![../src/img/changelog/using-barricade/17-webhook-paste.gif](../src/img/using-barricade/17-webhook-paste.gif)

    After having created your Zapier Webhook, go back to your Barricade dashboard and paste the URL of your Webhook. 

    As soon as your first attack comes through the Zap will be validated.

    ![../src/img/changelog/using-barricade/17-zapier-complete.gif](../src/img/using-barricade/17-zapier-complete.gif)

4. Nearly there.

    Now setup the action on Zapier. This is what happens when Barricade catches an attack and sends data to the webhook URL.

    ![../src/img/changelog/using-barricade/17-pagerduty-1.gif](../src/img/using-barricade/17-pagerduty-1.gif)

    We’re big fans of PagerDuty for helping out with incident resolution so we select PagerDuty, choose **Add Trigger Event**, connect to our account and voila!

    ![../src/img/changelog/using-barricade/17-pagerduty-2.gif](../src/img/using-barricade/17-pagerduty-2.gif)

    Barricade sends security cases to Zapier which then sends it to PagerDuty, without needing any developer interaction.

5. Finally, you name your Zap and you’re done.

    ![../src/img/changelog/using-barricade/17-pagerduty-3.png](../src/img/using-barricade/17-pagerduty-3.png)


That's it! Workflow automated.

--

Read our [blog announcement](https://blog.barricade.io/barricade-welcomes-webhooks/) for more on webhooks.

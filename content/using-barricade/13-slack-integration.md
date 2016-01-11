+++
title = "Slack Integration"
weight = "13"

tags = ["slack", "notification", "integration", "alerts"]
section = "using-barricade"
categories = ["using-barricade"]
type = "page"

slug = "slack-integration"

[menu.main]
    url = "slack-integration"
    parent = "using-barricade"

+++

![../src/img/using-barricade/13-slack-logo.png](../src/img/using-barricade/13-slack-logo.png)  

[Slack](https://slack.com) is a real-time messaging app for teams that allows you to communicate quickly and easily. We use Slack everyday at Barricade; to communicate and to share security notifications. 

You can integrate Slack with Barricade to notify your team when serious security incidents occur:

![../src/img/using-barricade/13-slack-message.png](../src/img/using-barricade/13-slack-message.png)  

### Setting up the Integration

1.  Login to Barricade and go to the Settings > Notifications > [Slack Notifications](https://app.barricade.io/dashboard/settings/notification/slack)
2.  Click on the switch to **Enable** the integration:  

    ![../src/img/using-barricade/13-slack-enable.gif](../src/img/using-barricade/13-slack-enable.gif)  

3.  Follow the Integration Instructions that appear onscreen.  

4.  Click the [link to create a new Incoming Webhook](https://my.slack.com/services/new/incoming-webhook) on slack.com  

5.  Set a channel for Barricade to post to:  

    ![../src/img/using-barricade/13-slack-select-channel.png](../src/img/using-barricade/13-slack-select-channel.png)  

    Click the Add button.
6.  **Copy** the Webhook URL that appears under 'Setup Instructions'  
    It will look like this:

    ```
    https://hooks.slack.com/services/A01BCDE23/A01B2CDEF/aB0c1DefGH23iJKl45M6nO7P
    ```
7.  Return to the [Slack integration page](https://app.barricade.io/dashboard/settings/notification/slack) in the Barricade app.
8.  Paste the Webhook URL into the form:  

    ![../src/img/using-barricade/13-slack-paste.gif](../src/img/using-barricade/13-slack-paste.gif)  

    Click **Save Integration**.   

9.  You can customize the integration to choose what items get posted to Slack, by checking the boxes on the right to activate more notifications.

By default, only Incidents _(our most serious classification)_ are sent as notifications.  

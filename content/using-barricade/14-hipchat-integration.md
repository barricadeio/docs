+++
title = "Hipchat Integration"
weight = "14"

tags = ["hipchat", "notification", "integration", "alerts"]
section = "using-barricade"
categories = ["using-barricade"]
type = "page"

slug = "hipchat-integration"

[menu.main]
    url = "hipchat-integration"
    parent = "using-barricade"

+++

[HipChat](https://www.hipchat.com/) is team chat that's actually built for business - a centralized place for group and private chat, file sharing, and integrations.

You can integrate HipChat with Barricade to share security notifications with your team:

![../src/img/using-barricade/14-hipchat-01.png](../src/img/using-barricade/14-hipchat-01.png)

### Setting up the Integration

1.  Login to Barricade and go to the Settings > Notifications > [HipChat Notifications](https://app.barricade.io/dashboard/settings/notification/hipchat)
2.  Click on the switch to **Enable** the integration:  

    ![../src/img/using-barricade/14-hipchat-enable.gif](../src/img/using-barricade/14-hipchat-enable.gif)  

3.  Follow the Integration Instructions that appear onscreen -  

4.  Open your Hipchat window, and navigate to the channel you want to send notifications to. We recommend creating a new room named _Barricade._
5.  Open the Room options and select **Integrations**.
    ![../src/img/using-barricade/14-hipchat-select.png](../src/img/using-barricade/14-hipchat-select.png)  

6.  From the Integrations page click on **Tokens** in the menu on the right, and you'll see a **Create new token** form appear at the bottom of the page:  

    ![../src/img/using-barricade/14-hipchat-set-label.png](../src/img/using-barricade/14-hipchat-set-label.png)

    Set a descriptive label in the text field at the bottom of the page. In the second field, select _Send Notification_ and click _Create_.  

    ![../src/img/using-barricade/14-tokens.gif](../src/img/using-barricade/14-tokens.gif)  

7.  The page will display a Room Notification Token, a string that looks something like this: `9KFell1q8yZpcZTIWwUaDohs4gNfw7C2LHCyHWCT`  

    ![../src/img/using-barricade/14-hipchat-copy-token.png](../src/img/using-barricade/14-hipchat-copy-token.png)  
    **Copy the Token**, and return to the [HipChat page](https://app.barricade.io/dashboard/settings/notification/hipchat) in the Barricade app.
8.  Paste the token into the form, under the Instructions, and add a label for the HipChat channel you wish to post notifications to:  

    ![../src/img/using-barricade/14-hipchat-save.gif](../src/img/using-barricade/14-hipchat-save.gif)  

9.  Click _Save Integration_.

10.  You can customize the integration to choose what items get posted to HipChat, by checking the boxes on the right to activate more notifications.

--

By default, only Incidents _(our most serious classification)_ are sent as notifications.

### Troubleshooting: Integrations isn't available in HipChat

![../src/img/using-barricade/14-hipchat-no-integration.png](../src/img/using-barricade/14-hipchat-no-integration.png)

In HipChat, accounts can be configured to restrict access to Integration and Token settings. If Integrations appears as a greyed-out, disabled option; you'll need to contact theHipChat account owner.

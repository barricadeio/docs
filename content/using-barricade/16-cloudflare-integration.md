+++
title = "CloudFlare Integration"
weight = "16"

tags = ["cloudflare", "dns", "ddos", "firewall", "integration"]
section = "using-barricade"
categories = ["using-barricade"]
type = "page"

slug = "cloudflare-integration"

[menu.main]
    url = "cloudflare-integration"
    parent = "using-barricade"

+++

![https://docs.barricade.io/src/img/changelog/31-cloudflare.png](https://docs.barricade.io/src/img/changelog/31-cloudflare.png)

[CloudFlare](https://cloudflare.com/) makes DNS secure, fast and simple, as well as providing some really great DDoS protection and security features. You can integrate CloudFlare with Barricade to make an intelligent, learning firewall that can protect your infrastructure from things like DDoS and brute force attacks.


### Gotchas
You'll need to be using both Barricade and [CloudFlare](https://cloudflare.com/) in order to integrate them - if you don't already have a Barricade account, you can [sign up for free here](https://app.barricade.io/).

### Setting up the Integration

1.  Login to Barricade and go to the Settings > Integrations > [CloudFlare Firewall](https://app.barricade.io/dashboard/settings/integration/cloudflare)

2. Click on the switch to **Enable** the integration.

3. Login to CloudFlare.com and open the [My Account](https://www.cloudflare.com/a/account/my-account) page. You'll need to retrieve your Global API key:

    ![https://docs.barricade.io/src/img/using-barricade/16-cloudflare-api.gif](https://docs.barricade.io/src/img/using-barricade/16-cloudflare-api.gif)

    Just so you know, **we encrypt your key**, it is not stored in plaintext for security reasons.

4.  Copy and paste your API key and your email address into the form on the CloudFlare Integration page in the Barricade app. Click the 'Enable' button.

That's it - now you can quickly utilize the CloudFlare firewall from within Barricade.


### Using the Integration

You'll see a new 'Add To Firewall' button alongside attack details, allowing you simple one-click blocking of attackers:

![https://docs.barricade.io/src/img/using-barricade/16-cloudflare-button.gif](https://docs.barricade.io/src/img/using-barricade/16-cloudflare-button.gif)

--

Read our [blog announcement](https://blog.barricade.io/cloudflare-meet-barricade/) for more background on this super useful integration!

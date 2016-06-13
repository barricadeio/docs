+++
title = "Amazon WAF Integration"
weight = "15"

tags = ["aws waf", "firewall", "integration"]
section = "using-barricade"
categories = ["using-barricade"]
type = "page"

slug = "aws-waf-integration"

[menu.main]
    url = "aws-waf-integration"
    parent = "using-barricade"

+++

![https://docs.barricade.io/src/img/using-barricade/15-awswaf.png](https://docs.barricade.io/src/img/using-barricade/15-awswaf.png)  

[AWS Web Application Firewall (WAF)](http://aws.amazon.com/waf/) helps protect your web applications from common web exploits that could affect application availability, compromise security, or consume excessive resources. You can integrate AWS WAF with Barricade to make an intelligent and learning firewall.

### Gotchas

To use WAF; you must be using Amazon Web Services **[EC2](https://aws.amazon.com/ec2/)** and **[CloudFront](https://aws.amazon.com/cloudfront/)**.

AWS WAF is not available on an individual-instance basis but is available if you are using Elastic Load Balancers (ELBs).

Make sure that you read the AWS [WAF pricing](https://aws.amazon.com/waf/pricing/) thoroughly.

Barricade does not charge you for using AWS WAF, but rules you add through the Barricade integration will incurr charges on your AWS account.

### Setting up the Integration

1.  Login to Barricade and go to the Settings > Integrations > [Amazon AWS WAF Integration](https://app.barricade.io/dashboard/settings/)

2.  Click on the switch to **Enable** the integration  

3.  Follow the Security Group and Integration Instructions that appear onscreen for the [AWS Console](https://console.aws.amazon.com/console/home).  

4.  Once you've created the required security groups as described below, **copy** the access id and secret key which have been created with very limited access and enter them Click _Save Integration_

    After saving the integration, a new WAF will be created in your AWS account with the name `BARRICADE-WAF`. This is where we will add behaviours to block attackers from within Barricade. Added behaviours will incurr costs on your AWS account - see their [pricing](https://aws.amazon.com/waf/pricing/).
    _
5.  Once you've enabled the WAF, you will need to go to your [CloudFront](https://aws.amazon.com/cloudfront/) distribution settings, and set the AWS WAF Web ACL to `BARRICADE-WAF` like such:  

    ![https://docs.barricade.io/src/img/using-barricade/15-awswaf-02.png](https://docs.barricade.io/src/img/using-barricade/15-awswaf-02.png)

### Giving Barricade Access (Security Groups)

We don't want access to your servers. In fact, we want **as little** access as possible to your account. We've broken down the steps you'll need to follow in Amazon IAM to give us minimum access so we can manage your firewall, but nothing else.

1.  From the Amazon IAM section of your Amazon account, you will need to create a new user for Barricade. Follow this [create a new user link](https://console.aws.amazon.com/iam/home#users) - it'll bring you right there.  

2.  Create a new user named **barricade-waf **and make sure to check the _"Generate an access key for each user"_.   

    ![https://docs.barricade.io/src/img/using-barricade/15-awswaf-03.png](https://docs.barricade.io/src/img/using-barricade/15-awswaf-03.png)  

3.  On the next step, after the user is created, copy the **access id** and **secret key** that's presented to you under _Show User Security Credentials:_

    ![https://docs.barricade.io/src/img/using-barricade/15-awswaf-04.png](https://docs.barricade.io/src/img/using-barricade/15-awswaf-04.png)  

4.  You will now need to create a **Policy**. We'll give you the policy, don't worry.  

5.  Go to the [AWS policy page](https://console.aws.amazon.com/iam/home#policies), and click on **Create Policy**, then **Create Your Own Policy**:

    ![https://docs.barricade.io/src/img/using-barricade/15-awswaf-05.png](https://docs.barricade.io/src/img/using-barricade/15-awswaf-05.png)
     
6.  The next steps are tricky but we'll give them to you here. You will need to name your policy, give it a description and set the policy.   

    The **Name** is pretty straightforward, we like descriptive names so we recommend: **barricade-waf-integration**  

    The **Description** is up to you. We use a textual description so that in 6 months when new employees learn the platform they understand what this does.  

    The **Policy Document** now is slightly tricker. Just copy the following into the textarea and click on the "**Create Policy**" button at the bottom right:

    <div class="code-box" style="margin: 0px; width: 100%; height: 160px; overflow: scroll;">

    <pre>{
       "Version":"2012-10-17",
       "Statement": [
          {
             "Action": [
                "waf:*",
                "cloudfront:GetDistribution",
                "cloudfront:GetDistributionConfig",
                "cloudfront:UpdateDistribution",
                "cloudfront:ListDistributions"
             ],
             "Effect": "Allow",
             "Resource": "*"
          }
       ]
    }
    </pre>
    </div>

7.  Almost there! The last step is to assign this policy to your newly created user - **barricade-waf**.  

8.  On the [new user's IAM page](https://console.aws.amazon.com/iam/home#users/barricade-waf) you will see an **Attach Policy** button, click it and select the **barricade-waf-integration** policy you created in Step 6. 

That's it. Now we can add firewall rules, but we don't have to have access to your servers!

### Linking CloudFront to AWS WAF

The only way to currently use the Amazon AWS WAF is by connecting a created WAF to a CloudFront distribution. 

**You will only have to do this once (with Barricade)**

1.  First, go to your [CloudFront page](https://console.aws.amazon.com/cloudfront/home).

2.  Select the distribution you are interested in linking the AWS WAF to.

3.  Once you are on your CloudFront Distribution's page, click on the **Edit** button. Then look for the **AWS WAF Web ACL** option - yes, it's quite the mouthful!

    ![https://docs.barricade.io/src/img/using-barricade/15-awswaf-06.png](https://docs.barricade.io/src/img/using-barricade/15-awswaf-06.png)

4.  Select the **BARRICADE-WAF **in the dropdown:

    ![https://docs.barricade.io/src/img/using-barricade/15-awswaf-07.png](https://docs.barricade.io/src/img/using-barricade/15-awswaf-07.png)

5.  Click on **Yes, Edit** confirmation button and wait until the _Distribution Status_ says **Deployed**. 

That's it, you now have a fully integrated detection system that learns from behaviour and can tell your firewall about new threats to block.

### Adding Rules

Once the Integration is enabled, you can block a query with one click:

![https://docs.barricade.io/src/img/using-barricade/15-awswaf-08.png](https://docs.barricade.io/src/img/using-barricade/15-awswaf-08.png)

Go to the [overview page](https://app.barricade.io/dashboard/overview) in the Barricade app, and open a security case - you should see 'AWS Firewall' as an option in cases where blocking an attacker IP address is part of the recommendation.

_Note: this option will only appear when the Agent has been identified as running on AWS EC2\. For non AWS servers, only the default iptables option will be visible._

### Removing Rules

At the current time, you will need delete the rules and firewall from your AWS account directly, via their [console](https://console.aws.amazon.com/console/home). We are planning on adding much more evolved AWS WAF integration and management after having measured the interest.

_Check out our blog post [Introducing Our New Amazon Web Application Firewall Integration](https://blog.barricade.io/introducing-our-new-amazon-web-application-firewall-integration/) for more background on this feature._

+++
title = "System Information Leaks"
weight = "17"

tags = ["data", "sensitive", "app", "version"]
section = "security-guide"
categories = ["security-guide"]
type = "page"

slug = "system-info-detected"

[menu.main]
    url = "system-info-detected"
    parent = "security-guide"

+++

Barricade helps protect your data by checking your traffic for any information leaks - if admin or  config information is output by the application in a response, you will be alerted immediately.

## Causes

It's important to keep any information about your systems away from prying eyes - software versions, server information, http headers - anything that could help a hacker learn about your application and the stack it's running has the potential to uncover vulnerabilities that could be exploited.

**Examples:**

*   Http Header info in error messages:  

    ![https://docs.barricade.io/src/img/security-guide/info-leak-01.png](https://docs.barricade.io/src/img/security-guide/info-leak-01.png)  

*   Including developer comments in the page:  

    e.g. `<!-- if image files fails load check 192.168.0.110 -->`   

*   Exposing directories:  

    ![https://docs.barricade.io/src/img/security-guide/info-leak-02.png](https://docs.barricade.io/src/img/security-guide/info-leak-02.png)

Information leaks can occur in a variety of ways, depending on what language your app is written in, what software it connects to, etc. Barricade provides a layer of visibility into any weak points you may be presenting to web traffic.

In addition to system information, Barricade also monitors content on your application for any [Sensitive Information](#sensitive-info-detected) (e.g. credit card or social security numbers). 

## Risk Levels

<table class="risk">
<tbody>
<tr>
<td><em> </em></td>
<td><strong>Event</strong></td>
<td>An attempted information leak was detected - nothing to worry about.</td>
<td> </td>
</tr>
<tr>
<td><em> </em></td>
<td><strong>Attack</strong></td>
<td>Low-level information was leaked - review the revealed info.</td>
</tr>
<tr>
<td><em> </em></td>
<td><strong>Incident</strong></td>
<td>A serious information leak was detected - a security breach has occurred!</td>
</tr>
</tbody>
</table>

## Recommendations

If an Incident or Attack level _Information Leak_ is detected, we recommend you take immediate action to block the source of the attack, as per the in-app [Alert instructions](https://app.barricade.io/alert). 

Blocking an IP is a short-term fix; you should immediately follow up by evaluating the issue and taking steps to ensure you pinpoint and strengthen the vulnerability that resulted in the information leak. The case page in the Barricade app will tell you the path at which the leak occurred - you should review that page and the metadata associated with the leak.

Very often, the source of the leak will be a form that returns debug information as part of the feedback that is returned to the user - perhaps some development code made it into production that shouldn't have - you should test your app's responses and look for any detail that would help a hacker learn about how your app is structured. 

**Related links:**

*   [OWASP: Information Leakage](https://www.owasp.org/index.php/Information_Leakage)
*   [CWE Information Exposure Through an Error Message](https://cwe.mitre.org/data/definitions/209.html)
*   [WASC Classification: Information Leakage](http://projects.webappsec.org/w/page/13246936/Information%20Leakage)
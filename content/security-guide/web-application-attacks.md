+++
title = "Web App Attacks"
weight = "01"

tags = ["security", "cases", "attacks", "recommendations", "web app"]
section = "security-guide"
categories = ["security-guide"]
type = "page"

slug = "web-app-attack"

aliases = [
    "/security-guide/web-app-attack",
    "/web-app-attack"
]

[menu.main]
    url = "web-app-attack"
    parent = "security-guide"

+++

A web application attack is any technique that's used to target websites, web applications and web services with malicious intent.

Barricade monitors for a variety of Web Application Attacks on your app server - suspicious activity is examined in real-time and Alerts are sent if a legitimate attack is detected.

## Causes

Most web application attacks are form-based; attackers will often evaluate web forms as potential gateways as they seek out vulnerable systems to access. Barricade monitors this type of network traffic closely for any suspicious behavioural patterns.

Our engine can detect many different types of web application attack, and notifies you if a serious threat is found. Types of web application attacks can include:

*   [SQL Injection](#sql-injection)
*   [Cross Site Scripting (XSS)](#xss)
*   Broken Authentication and Session ManagementInsecure Direct Object References
*   Security Misconfiguration
*   Sensitive Data Exposure
*   Missing Function Level Access Control
*   Cross-Site Request Forgeries
*   Using Components With Known Vulnerabilities
*   Unvalidated Redirects and Forwards

The most common type of web application attack is [SQL Injection](#sql-injection) - where someone submits SQL commands through a pages' form fields, attempting to perform admin-level actions to the connected database.

These attacks are common, but can be quite destructive if successful, resulting in data breaches or embedding malicious scripts in your website that can attack users who visit it.

## Risk Levels

<table class="risk">

<tbody>

<tr>
<td><em> </em></td>
<td><strong>Event</strong></td>

<td>A failed attack was detected - normally bot activity on your server</td>

</tr>

<tr>
<td><em> </em></td>
<td><strong>Attack</strong></td>

<td>A series of failed attacks failed injection attacks were detected</td>

</tr>

<tr>
<td><em> </em></td>
<td><strong>Incident</strong></td>

<td>A successful attack was detected - a security breach has occurred!</td>

</tr>

</tbody>

</table>

## Recommendations

If an Incident or Attack level _web app attack_ is detected, we recommend you take immediate action to block the source of the attack, as per the in-app Alert instructions. 

In the longer term, it's important to be aware of the risks and prepare accordingly - testing your app for any vulnerabilities that an attacker could exploit (e.g. forms that are open to Cross-Site Scripting or SQL Injection techniques). 

**Secure Your Forms**  
The best way to safeguard against these types of attacks in the longer term is to understand how these attacks operate, and take preventative measures to ensure your code doesn't offer any vulnerable attack points to would-be-attackers.

Developers should use validation techniques such as [parameterized statements, escaping and pattern checking](https://en.wikipedia.org/wiki/SQL_injection#Mitigation) to build forms that cannot be exploited through SQL Injection.

Related links:

*   [SQL Injection Attack](#sql-injection)
*   [Cross-Site Scripting Attacks (XSS)](#xss)

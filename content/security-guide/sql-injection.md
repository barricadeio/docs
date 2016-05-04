+++
title = "SQL Injection"
weight = "03"

tags = ["security", "cases", "attacks", "recommendations", "web app"]
section = "security-guide"
categories = ["security-guide"]
type = "page"

slug = "\u0023sql-injection"

aliases = [
    "/security-guide/sql-injection"
]

[menu.main]
    url = "#sql-injection"
    parent = "security-guide"

+++

Barricade monitors for SQL Injection attacks on your application - suspicious web form activity is examined in real-time and Alerts sent if an attack is detected.  

## Causes

Web forms are often targetted by attackers as they seek out vulnerable systems to access. The most common technique used in such attacks is SQL Injection - where someone submits SQL commands through a pages' form fields, attempting to perform admin-level actions to the connected database.

[See our infographic for a visual explanation of SQL Injection attacks >](https://blog.barricade.io/sql-injection-attacks-visually-explained/)

[![../src/img/security-guide/sqlinjection-thumbnail-home-750.png](../src/img/security-guide/sqlinjection-thumbnail-home-750.png)](https://blog.barricade.io/sql-injection-attacks-visually-explained/)

These attacks are common, and can be quite destructive - if successful, an attacker can interact with your database and steal or even erase sensitive data.

## Risk Levels

<table class="risk">
<tbody>
<tr>
<td><em> </em></td>
<td><strong>Event</strong></td>
<td>A failed SQL Injection attack was detected</td>
<td> </td>
</tr>
<tr>
<td><em> </em></td>
<td><strong>Attack</strong></td>
<td>Multiple failed injection attacks were detected</td>
</tr>
<tr>
<td><em> </em></td>
<td><strong>Incident</strong></td>
<td>A successful SQL Injection attack occurred - possible security breach</td>
</tr>
</tbody>
</table>


## Recommendations

If SQL Injection attacks are detected, we recommend you take immediate action to block the source of the attack, as per the in-app [Alert instructions](https://app.barricade.io/alert). 

In the longer term, it's important to be aware of the risks and prepare accordingly - testing your app for any vulnerabilites that an injection attack could exploit. 

**Secure Your Forms**  
The best way to safeguard against SQL Injection attacks in the longer term is to understand how these attacks work, and take preventative measures to ensure your code doesn't offer any vulnerable attack points to would-be-attackers.

Developers should use validation techniques such as [parameterized statements, escaping and pattern checking](https://en.wikipedia.org/wiki/SQL_injection#Mitigation) to build forms that cannot be exploited through SQL Injection.

**Database Backups**  
SQL Injection is just one of many techniques that can pose a threat to you and your data. It's important to capture and securely store database backups to reduce the potential risk of a successful attack. 

Related links:

*   [Blocking Attacker IP Addresses](#blocking-ip-address)
*   [Removing Vulnerabilities in Forms](#securing-web-forms)
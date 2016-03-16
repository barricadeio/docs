+++
title = "Suspicious Login Attempts"
weight = "10"

tags = ["login", "suspicious", "attacks", "recommendations", "web app"]
section = "security-guide"
categories = ["security-guide"]
type = "page"

slug = "login-suspicious-username"

aliases = [
    "/security-guide/login-suspicious-username"
]

[menu.main]
    url = "login-suspicious-username"
    parent = "security-guide"

+++

Barricade monitors for suspicious login attempts on your servers, including any activity where non-existent or blocked usernames are used to try and gain access.

## Causes

Login forms are commonly targeted by automated bots, as they seek out ways to access vulnerable servers. When certain behavioural patterns are observed, our engine will treat a username as suspicious and create the activity will be reported as a new case.

A username is treated as suspicious when: 

```
username does not exist  
username has been blocked/locked out  
username has made many failed login attempts  
username has failed activity from multiple IP addresses at once
```

## Risk Levels

<table class="risk">
<tbody>
<tr>
<td><em> </em></td>
<td><strong>Event</strong></td>
<td>Single failed login attempt using suspicious credentials</td>
</tr>
<tr>
<td><em> </em></td>
<td><strong>Attack</strong></td>
<td>Multiple failed login attempts using suspicious credentials</td>
</tr>
<tr>
<td><em> </em></td>
<td><strong>Incident</strong></td>
<td>Successful login using suspicious credentials - possible security breach</td>
</tr>
</tbody>
</table>

## Recommendations

If a suspicious login attempt is detected, it’s likely that additional attempts will follow. We advise blocking the attacker’s IP address, via the [Alert instructions](https://app.barricade.io/dashboard/alerts).

In the longer term, you can safeguard against these types of attacks by following best practices:

* Remove 'Default' Logins from your app
* Create and implementing a strong password policy

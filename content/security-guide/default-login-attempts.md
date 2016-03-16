+++
title = "Default Username Attempts"
weight = "10"

tags = ["login", "default", "attacks", "recommendations", "web app"]
section = "security-guide"
categories = ["security-guide"]
type = "page"

slug = "#login-default-username"

aliases = [
    "/security-guide/login-default-username"
]

[menu.main]
    url = "https://docs.barricade.io/security-guide/#login-default-username"
    parent = "security-guide"

+++

Barricade monitors for suspicious login attempts on your servers, including attacks that attempt to gain access through common, default credentials.

## Causes

Login forms are commonly targeted by automated bots, as they seek out ways to access vulnerable servers. Default, out-of-the-box usernames like ‘administrator’ make it much easier for attackers to hone in on your login information, and reduce the time needed to run [Brute Force](http://en.wikipedia.org/wiki/Brute-force_attack) password attacks.

```
admin  
administrator  
root  
temp  
User  
DBA
```

Some examples from [defaultpassword.com](http://defaultpassword.com)

## Risk Levels

<table class="risk">
<tbody>
<tr>
<td><em> </em></td>
<td><strong>Event</strong></td>
<td>Single failed login attempt using default credentials</td>
</tr>
<tr>
<td><em> </em></td>
<td><strong>Attack</strong></td>
<td>Multiple failed login attempts using default credentials</td>
</tr>
<tr>
<td><em> </em></td>
<td><strong>Incident</strong></td>
<td>Successful login using default credentials - possible security breach</td>
</tr>
</tbody>
</table>

## Recommendations

If a suspicious login attempt is detected, it’s likely that additional attempts will follow. We advise blocking the attacker’s IP address, via the [Alert instructions](https://app.barricade.io/dashboard/alerts).

In the longer term, you can safeguard against these types of attacks by following best practices:

* Remove 'Default' Logins from your app
* Create and implementing a strong password policy

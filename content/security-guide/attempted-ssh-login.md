+++
title = "SSH Login Attempts"
weight = "14"

tags = ["ssh", "login", "attacks"]
section = "security-guide"
categories = ["security-guide"]
type = "page"

slug = "#attempted-ssh-login"

aliases = [
    "/security-guide/attempted-ssh-login"
]

[menu.main]
    url = "https://docs.barricade.io/security-guide/#attempted-ssh-login"
    parent = "security-guide"

+++

Barricade monitors for suspicious login attempts on your servers, including any activity where non-existent or blocked usernames are used to try and gain access.

## Causes

SSH servers are commonly targeted by automated bots, as they seek out ways to access vulnerable and badly configured servers. When certain behavioural patterns are observed, our engine will treat a login attempt as suspicious and create the activity will be reported as a new case.

An SSH login attempt is considered suspicious when a login failure is seen multiple times. Furthermore, if an unknown address makes fewer requests Barricade will also consider this suspicious and inform you.

These are ususally repeated login (brute force) attempts, using common usernames:

```
root
test
admin
oracle
guest
mysql
postgres
backup
-etc
```

## Risk Levels

<table class="risk">
<tbody>
<tr>
<td><em> </em></td>
<td><strong>Event</strong></td>
<td>Single failed SSH login attempt</td>
</tr>
<tr>
<td><em> </em></td>
<td><strong>Attack</strong></td>
<td>Multiple failed SSH login attempts</td>
</tr>
<tr>
<td><em> </em></td>
<td><strong>Incident</strong></td>
<td>Successful SSH login preceded by multiple failed attempts - possible security breach</td>
</tr>
</tbody>
</table>


## Recommendations

If a suspicious SSH login attempt is detected, it’s likely that additional attempts will follow. We advise blocking the attacker’s IP address, via the [Alert instructions](https://app.barricade.io/dashboard/alerts).

In the longer term, here are some tips on strengthening your SSH security:  

1.  **Use SSH Keys instead of Passwords**  
    It's a good idea to use SSH keys to authenticate users, rather than passwords.  

    `PasswordAuthentication no`

    If you're doing this, be sure you have your keys set properly - you should make sure you're not locking yourself out!  

2.  **Increase Strength**  
    Keys default to a key strength of 768 bits - we recommend that use are using at least 1024 or 2048 bit strength.  

    `ServerKeyBits 1024`

    If you change this; you will subsequently need to remove your host keys and SSH will regenerate them when it restarts.  

3.  **Restrict Users**  
    You can configure SSH to permit only certain users to log in. By default all users can access SSH. By using the AllowUsers directive, you can restrict access. I like using this as it provides another layer of security. There is also an AllowGroup directive. Using the group option, you can put all approved SSH users into a group and then allow this group.  

```
AllowUsers root admin webmaster
- Or -
AllowGroup sshusers
```
+++
title = "Gaining Admin Privileges"
weight = "16"

tags = ["security", "cases", "attacks", "recommendations", "web app"]
section = "security-guide"
categories = ["security-guide"]
type = "page"

slug = "admin-privileges"

aliases = [
    "/security-guide/admin-privileges"
]

[menu.main]
    url = "admin-privileges"
    parent = "security-guide"

+++

Barricade watches your network activity for any unusual behavior - including attempts to access and impersonate user accounts.

## Causes

Attackers will often try to assume admin user privileges, in order to try and lock you out and access restricted data. A compromised admin user is a very serious breach - attempts are common but rarely successful.

## Risk Levels

<table class="risk">
<tbody>
<tr>
<td><em> </em></td>
<td><strong>Event</strong></td>
<td>An attempt to gain administrator privileges was detected</td>
<td> </td>
</tr>
<tr>
<td><em> </em></td>
<td><strong>Attack</strong></td>
<td>Multiple attempts to gain administrator privileges were detected</td>
</tr>
<tr>
<td><em> </em></td>
<td><strong>Incident</strong></td>
<td>An attacker has successfully gained admin privileges - a serious breach</td>
</tr>
</tbody>
</table>


## Recommendations

Attempted Admin


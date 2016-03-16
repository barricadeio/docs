+++
title = "Gaining User Privileges"
weight = "15"

tags = ["security", "cases", "attacks", "recommendations", "web app"]
section = "security-guide"
categories = ["security-guide"]
type = "page"

slug = "#user-privileges"

aliases = [
    "/security-guide/user-privileges"
]

[menu.main]
    url = "https://docs.barricade.io/security-guide/#user-privileges"
    parent = "security-guide"

+++

Barricade watches your network activity for any unusual behavior - including attempts to access and impersonate user accounts.

## Causes

Attackers will sometimes try to assume the role of existing users, in order to access to restricted data. These attempts are pretty common - Barricade will observe your network for anything suspicious.

## Risk Levels

<table class="risk">
<tbody>
<tr>
<td><em> </em></td>
<td><strong>Event</strong></td>
<td>An attempt to gain user privileges was detected</td>
<td> </td>
</tr>
<tr>
<td><em> </em></td>
<td><strong>Attack</strong></td>
<td>Multiple attempts to gain user privileges were detected</td>
</tr>
<tr>
<td><em> </em></td>
<td><strong>Incident</strong></td>
<td>An attacker has successfully gained user privileges - an account has been breached</td>
</tr>
</tbody>
</table>

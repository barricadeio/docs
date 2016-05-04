+++
title = "Vulnerable Software"
weight = "19"

tags = ["update", "software", "version"]
section = "security-guide"
categories = ["security-guide"]
type = "page"

slug = "\u0023package_vulnerabilities"

aliases = [
    "/security-guide/package_vulnerabilities"
]

[menu.main]
    url = "#package_vulnerabilities"
    parent = "security-guide"

+++

Barricade keeps an eye on the software packages on your server, checking version information for any serious lapses. Running out-of-date software greatly increases the odds of an attack on your system.

## Causes

Out-of-date typically software means more vulnerable software - a lot of web app attacks specifically seek out older packages, in order to apply targetted attacks.


## Risk Levels

<table class="risk">
<tbody>
<tr>
<td><em> </em></td>
<td><strong>Event</strong></td>
<td>A minor vulnerability was found - you should update old software.</td>
<td> </td>
</tr>
<tr>
<td><em> </em></td>
<td><strong>Attack</strong></td>
<td>A series of vulnerabilities were found - you have multiple instances of outdated software.</td>
</tr>
<tr>
<td><em> </em></td>
<td><strong>Incident</strong></td>
<td>A serious vulnerability was found - your software urgently needs to be updated!</td>
</tr>
</tbody>
</table>

## Recommendations

It's important to keep your software packages up-to-date - applying patches and security fixes as they are released. Staying on top of updates will reduce your vulnerabilities.

When Barricade detects vulnerable software, the [in-app case](https://app.barricade.io/dashboard/overview) will show you out-of-date package info.

If your application or website is revealing [system information](#system-info-detected) (i.e. the version number) in addition to running vulnerable, older software - an attacker could discover and use that information against you. We recommend you also [hide version information](https://www.owasp.org/index.php/Information_Leakage) away from public web traffic.

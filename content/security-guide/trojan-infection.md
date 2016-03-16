+++
title = "Trojan Infections"
weight = "31"

tags = ["security", "cases", "attacks", "recommendations", "web app"]
section = "security-guide"
categories = ["security-guide"]
type = "page"

slug = "#trojan-infection"

aliases = [
    "/security-guide/trojan-infection"
]

[menu.main]
    url = "https://docs.barricade.io/security-guide/#trojan-infection"
    parent = "security-guide"

+++

Barricade monitors your network traffic for any signs of a Trojan Horse infection. Any suspicious activity is examined in real-time and Alerts sent if a legitimate problem is found.  

## Causes

Trojans

Unlike worms and viruses, Trojans don't spread themselves - they usually find their way into a system through social engineering - tricking a user into installating them.

Trojans can effect you in a variety of ways - depending on the type of trojan:

* Remote access Trojans
* Data-sending Trojans
* Destructive Trojans
* Denial of service (DoS) attack Trojans
* Proxy Trojans
* FTP Trojans
* Security software disablers

## Risk Levels

<table class="risk">
<tbody>
<tr>
<td><em> </em></td>
<td><strong>Event</strong></td>
<td>Some odd low-level activity was noticed. A common occurance.</td>
<td> </td>
</tr>
<tr>
<td><em> </em></td>
<td><strong>Attack</strong></td>
<td>A Trojan has been detected - you should look into this as soon as possible.</td>
</tr>
<tr>
<td><em> </em></td>
<td><strong>Incident</strong></td>
<td>A serious Trojan has been detected - take immediate action!</td>
</tr>
</tbody>
</table>


## Recommendations

Your first step should be to identify the Trojan - listening to open ports and observing memory usage to help diagnosis. Scanner and Antivirus tools can help you identify the Trojan.

Trojans can limit your ability to access and remove the infection - depending on the type of Trojan, you may not be able to manually remove files - in which case the system may need to be restored to an earlier backup to ensure a clean recovery.


Related links:

* [Security Response: Trojans](http://www.symantec.com/security_response/landing/threats.jsp)
* [What is a Trojan Horse?](http://antivirus.about.com/b/2006/05/31/whats-a-trojan-horse-virus.htm)

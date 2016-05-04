+++
title = "Cross-Site Scripting"
weight = "04"

tags = ["security", "cases", "attacks", "recommendations", "web app"]
section = "security-guide"
categories = ["security-guide"]
type = "page"

slug = "\u0023xss"

aliases = [
    "/security-guide/xss"
]

[menu.main]
    url = "#xss"
    parent = "security-guide"

+++

Barricade monitors for Cross-Site Scripting attacks on your application - suspicious web form activity is examined in real-time and Alerts sent if an attack is detected.  

## Causes

Cross-Site Scripting is a common method used by attackers as they seek vulnerable systems to access. These 'XSS' attacks involve submitting web forms with scripts and commands inserted into the input fields; in an effort to upload and embed scripts into someone's website or app.

When successful, these scripts can be used to attack other visitors, who unknowingly load the script when they visit the infected webpage or app. Comment forms and media uploaders are often targetted by these kinds of attacks - the scripts used range in size and purpose, but have the potential to be quite destructive if successful.

## Risk Levels

<table class="risk">
<tbody>
<tr>
<td><em> </em></td>
<td><strong>Event</strong></td>
<td>A failed XSS attack was detected</td>
<td> </td>
</tr>
<tr>
<td><em> </em></td>
<td><strong>Attack</strong></td>
<td>Multiple failed XSS attacks were detected</td>
</tr>
<tr>
<td><em> </em></td>
<td><strong>Incident</strong></td>
<td>A successful XSS attack occurred - possible security breach</td>
</tr>
</tbody>
</table>

## Recommendations

If Cross-Site Scripting attacks are detected, we recommend you take immediate action to block the source of the attack, as per the in-app [Alert instructions](https://app.barricade.io/alert). 

In the longer term, it's important to be aware of the risks and prepare accordingly - testing your app for any vulnerabilites that an injection attack could exploit. 

**Securing Your Forms**  
The best way to safeguard against XSS attacks in the long term is to understand how these attacks work, and take preventative measures to ensure your code doesn't offer any vulnerable attack points to would-be-attackers.

Developers should ensure to [properly escape and validate form field inputs](https://en.wikipedia.org/wiki/Cross-site_scripting#Reducing_the_threat) to remove the possibility of exploits. It's also a good idea to testing your app for vulnerabilities on a regular basis, to find and reinforce any points of weakness.

Related links:

*   [Blocking Attacker IP Addresses](#blocking-ip-address)
*   [Removing Vulnerabilities in Forms](#secure-web-forms)
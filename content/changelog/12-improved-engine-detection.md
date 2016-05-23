+++
date = "2015-09-16"
title = "Improved Web App Attack Detection"
description = "Changelog - Improved Web App Attack Detection"
url = "changelog/improved-engine-attack-detection"
section = "changelog"
category = "engine"
weight = "12"

+++

We've shipped an update to our detection engine, to improve the accuracy of web app attack cases. These changes will reduce false positives, and better classify the type of web app attack ([SQL Injection](https://docs.barricade.io/security-guide/#web-app-attack), [Cross-Site Scripting](https://docs.barricade.io/security-guide/#xss), etc).

We've also corrected an issue where some `scripts` were being identified as attacks.

--  

_These changes are already in effect - you don't need to update your Agents ._
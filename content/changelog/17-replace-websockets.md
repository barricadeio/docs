+++
date = "2015-10-28"
title = "Replace Websockets with SEE"
description = "Changelog - Replace Websockets with SEE"
url = "replace-websockets"
category = "app"
weight = "17"

+++

We've updated app.barricade.io to use Server Side Events instead of Websockets (socket.io), to address issues with Websocket + CloudFlare.

Our application doesn't require duplex communication between clients and server, so we switched to a simpler solution - one which means no more errors appearing in the console.

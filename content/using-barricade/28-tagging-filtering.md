+++
title = "Tagging & Filtering"
description = "How to tag and filter a Barricade Agent"
weight = "28"

tags = ["agent", "tagging", "tag", "filter"]
section = "using-barricade"
categories = ["using-barricade"]
type = "page"
slug = "tagging-filtering"

[menu.main]
    url = "tagging-filtering"
    parent = "using-barricade"

+++

If you are running multiple Barricade Agents, you'll see data pooled in the dashboard from different servers. Filters help you narrow your view to see results from specific servers.

### Where to find Filters

You can filter Case data in the app by accessing the Filter option at the top of the `Dashboard -> Overview` navigation:

![../src/img/using-barricade/28-tagging-01.png](../src/img/using-barricade/28-tagging-01.png)

When you have active Filters, the menu will look like this:

![../src/img/using-barricade/28-tagging-02.png](../src/img/using-barricade/28-tagging-02.png)

### Using Filters

1.  Click the Filter button in the top right of the [Overview](https://app.barricade.io/dashboard/overview) screen.
2.  A new panel will appear from the right, displaying a list of **Agent Tags**
3.  Remove the check marks from any Agent tags you wish to filter out. The form auto-saves your selection.
4.  To close the Filter panel, click to the left outside of the panel.

_Example:_

![../src/img/using-barricade/28-filters.gif](../src/img/using-barricade/28-filters.gif)

### Editing Agent Tags

An agent's tag can be edited in two ways. Either through the `Dashboard -> Agents` page which can be found on the left-hand side menu, or through an automated configuration file described below the animation.

![../src/img/using-barricade/28-Agent-Tags-Edit.gif](../src/img/using-barricade/28-Agent-Tags-Edit.gif)

You can change the Tags associated with your Agents in the configuration file, located on your server at `/service/barricade/barricade.cfg `

By default, all Agents start out with one tag: `production`.
See [Configuring Agents](#configuring-agents) for more information.

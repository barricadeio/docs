+++
title = "Automating with Chef"
description = "How to automate Barricade Agents with Chef"
weight = "30"

tags = ["agent", "chef", "recipe", "automating"]
section = "using-barricade"
categories = ["using-barricade"]
type = "page"
slug = "automating-agents"

[menu.main]
    url = "automating-agents"
    parent = "using-barricade"

+++

If you automate your infrastructure with Chef, you can use our [Barricade cookbook](https://github.com/barricadeio/chef-barricade) to automate the setup of Agents when you spin up servers.

Visit [github.com/barricadeio/chef-barricade](https://github.com/barricadeio/chef-barricade) for the cookbook.

**Gotchas:**  
To use the cookbook, you'll need to be familiar with [Chef](https://chef.io/) and comfortable with installing and using cookbooks - [learn.chef.io](https://learn.chef.io/) is a good resource if you're getting started.

**Adding a Key:**  
To use the cookbook, you'll need to add your `barricade_key`.

Open and edit the `barricade_key` attribute in the `attributes/default.rb` file, adding in the [automation key](https://app.barricade.io/dashboard/settings/team/profile) from your dashboard ([found here](https://app.barricade.io/dashboard/settings/team/profile)).

+++
title = "Automating with Ansible"
description = "How to automate Barricade Agents with Ansible"
weight = "30"

tags = ["agent", "ansible", "role", "automating"]
section = "using-barricade"
categories = ["using-barricade"]
type = "page"
slug = "automating-agents-ansible"

[menu.main]
    url = "automating-agents-ansible"
    parent = "using-barricade"

+++

If you automate your infrastructure with Ansible, you can use our [Barricade Ansible Role](https://github.com/barricadeio/ansible-barricade) to automate the setup of Agents when you spin up servers.

### Installation

To install the `ansible-barricade` role via the `ansible-galaxy` command:

```
$ ansible-galaxy install https://github.com/barricadeio/ansible-barricade
```

### Usage

## Agent Installation

You'll need your Barricade Automation Key. This can be retrieved by visiting your [Team](https://app.barricade.io/dashboard/settings/team/profile) page.

Create an ansible playbook `barricade.yml`:

```
---
- name: Install Barricade Agent
  hosts: all
  sudo: yes
  roles:
    - role: ansible-barricade
      barricade_automation_key: <Barricade Automation Key>
```

Run the above playbook and it should setup the `barricade-agent`:

```
$ ansible-playbook barricade.yml
```

## Agent Removal

To remove Barricade, you can set the `barricade_state` attribute to `absent`:

```
---
- name: Remove Barricade Agent
  hosts: all
  sudo: yes
  roles:
    - role: ansible-barricade
      barricade_state: absent
```

## Agent Configuration

You can completely instrument agent configuration via variables defined in `defaults/main.yml`.

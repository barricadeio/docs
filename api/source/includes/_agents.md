# Agents

Agents quietly monitor, without getting in the way or impacting on your server resources. There is no need for any code or configuration changes to your app.

You can find more information about [agents on our general documentation page](https://docs.barricade.io/getting-started/#how-it-works-agent).

## The Agent Resource

The Barricade Agent resource contains the information Barricade uses to build its agents' page dashboard. 

You can change the `name`, `tags` and `status` of the agent resources.

```
Example Agent Resource
```

```json
{
  "id": "56e01d450xdb230100841b33",
  "teamId": "55a64a3e82f167c1433f1909",
  "automationKey": "c81c1627-a697-4517-9xa3-eb122d727f5e",
  "uuid": "43f0e842-cf60-46ea-bxe9-44d5c363d07d",
  "version": "0.5.0",
  "type": "DigitalOcean",
  "hostname": "ip-172-30-0-75",
  "publicIP": "52.18.109.102",
  "privateIP": "172.30.0.75",
  "mac": "06:c2:36:7c:52:a3",
  "name": "ip-172-30-0-75",
  "tags": [
    "production"
  ],
  "status": "paused",
  "system": {
    "processor": "x86_64",
    "version": "14.04",
    "codename": "Trusty Tahr",
    "name": "ubuntu"
  },
  "identity": {
    "availabilityZone": "eu-west-1a",
    "instanceType": "t2.small",
    "instanceId": "i-c0685479"
  },
  "createdAt": "2013-07-26T23:00:00.000Z"
}
```

Field | Type | Description
--------- | ------- | -----------
id | String | Agent identifier.
teamId | String | Agent team identifier.
automationKey | String | Agent automation key.
uuid | String | Agent randomly generated identifier.
version | String | Agent version.
type | String | Target host type.
hostname | String | Target host name.
publicIP | String | Public IP address.
privateIP | String | Private IP address.
mac | String | MAC address.
name | String | Agent name.
tags | Array | The tags associated with your agent.
system | Object | System details.
identity | Object | Identity details (dependent on cloud provider).
status | String | Agent status [`active`, `paused`, `retired`].
createdAt | Number | Agent registration time in ISO-8601 standard.

## Get all agents

```shell
Example Request

curl \
  -XGET "https://api.barricade.io/agents?offset=0&limit=30" \
  -u <api_key_here>:
```

```javascript
var superagent = require('superagent');
superagent.get('https://api.barricade.io/agents?offset=0&limit=30')
  .auth('api_key_here', null)
  .end(function (e, res) {
    //...
  });
```

```python
import requests
from requests.auth import HTTPBasicAuth

base_url = 'https://api.barricade.io'
response = requests.get(
    base_url + '/agents?offset=0&limit=30',
    auth=HTTPBasicAuth('api-key-here', ''),
    headers={"Accept": "application/json;version=1.0.0"}
)
```

```json
[
  {
    "id": "56e01d450xdb230100841b33",
    "teamId": "55a64a3e82f167c1433f1909",
    "automationKey": "c81c1627-a697-4517-9xa3-eb122d727f5e",
    "uuid": "43f0e842-cf60-46ea-bxe9-44d5c363d07d",
    "version": "0.5.0",
    "type": "DigitalOcean",
    "hostname": "ip-172-30-0-75",
    "publicIP": "52.18.109.102",
    "privateIP": "172.30.0.75",
    "mac": "06:c2:36:7c:52:a3",
    "name": "PROD_WEB",
    "tags": [
      "production",
      "web",
    ],
    "status": "active",
    "system": {
      "processor": "x86_64",
      "version": "14.04",
      "codename": "Trusty Tahr",
      "name": "ubuntu"
    },
    "identity": {
      "availabilityZone": "eu-west-1a",
      "instanceType": "t2.small",
      "instanceId": "i-c0685479"
    },
    "createdAt": "2013-07-26T23:00:00.000Z"
  }
]
```

This call is used to retrieve all the agents associated with your Barricade account. Some of our users have a large amount of
agents associated with their account and therefore we recommend using *pagination* with the `limit` and `offset` parameters
as referenced above.

### HTTP Request

`GET https://api.barricade.io/agents`

### Query Parameters

Field | Type | Description
--------- | ------- | -----------
offset | Integer | A cursor for use in pagination. Pagination starts from the specified offset.
limit | Integer | A limit on the number of objects to be returned, between 1 and 100.


## Retrieve an Agent 

```shell
Example Request

curl \
  -XGET https://api.barricade.io/agents/{agentId} \
  -u <api_key_here>:
```

```javascript
var superagent = require('superagent');
superagent.get('https://api.barricade.io/agents/{agentId}')
  .auth('api_key_here', null)
  .end(function (e, res) {
    //...
  });
```

```python
import requests
from requests.auth import HTTPBasicAuth

base_url = 'https://api.barricade.io'
response = requests.get(
    base_url + '/agents/{agentId}',
    auth=HTTPBasicAuth('api-key-here', ''),
    headers={"Accept": "application/json;version=1.0.0"}
)

print response.status_code
print response.headers
print response.json()
```

```json
{
  "id": "56e01d450xdb230100841b33",
  "teamId": "55a64a3e82f167c1433f1909",
  "automationKey": "c81c1627-a697-4517-9xa3-eb122d727f5e",
  "uuid": "43f0e842-cf60-46ea-bxe9-44d5c363d07d",
  "version": "0.5.0",
  "type": "DigitalOcean",
  "hostname": "ip-172-30-0-75",
  "publicIP": "52.18.109.102",
  "privateIP": "172.30.0.75",
  "mac": "06:c2:36:7c:52:a3",
  "name": "ip-172-30-0-75",
  "tags": [
    "production"
  ],
  "status": "paused",
  "system": {
    "processor": "x86_64",
    "version": "14.04",
    "codename": "Trusty Tahr",
    "name": "ubuntu"
  },
  "identity": {
    "availabilityZone": "eu-west-1a",
    "instanceType": "t2.small",
    "instanceId": "i-c0685479"
  },
  "createdAt": "2013-07-26T23:00:00.000Z"
}
```

This call is used when you want to retrieve an individual agent and its associated information.

### HTTP Request

`GET https://api.barricade.io/agents/{agentId}`

### Query Parameters

There are no specific query parameters required to use this resource.

## Update an Agent

```shell
Example Request

curl \
  -XPUT https://api.barricade.io/agents/{agentId} \
  -u <api_key_here>: \
  -d name=PROD_WEB \
  -d tags=production \
  -d tags=web \
```

```javascript
var superagent = require('superagent');
superagent.put('https://api.barricade.io/agents/{agentId}')
  .auth('api_key_here', null)
  .send({name:'PROD_WEB', tags:['production', 'web']})
  .end(function (e, res) {
    //...
  });
```

```python
import requests
from requests.auth import HTTPBasicAuth

base_url = 'https://api.barricade.io'
response = requests.put(
    base_url + '/agents',
    data={"name": "NewName", "tags": ["newtag", "docker", "mesos"]},
    auth=HTTPBasicAuth('api-key-here', ''),
    headers={"Accept": "application/json;version=1.0.0"}
)

print response.status_code
print response.headers
print response.json()
```

```json
{
  "id": "56e01d450xdb230100841b33",
  "teamId": "55a64a3e82f167c1433f1909",
  "automationKey": "c81c1627-a697-4517-9xa3-eb122d727f5e",
  "uuid": "43f0e842-cf60-46ea-bxe9-44d5c363d07d",
  "version": "0.5.0",
  "type": "DigitalOcean",
  "hostname": "ip-172-30-0-75",
  "publicIP": "52.18.109.102",
  "privateIP": "172.30.0.75",
  "mac": "06:c2:36:7c:52:a3",
  "name": "PROD_WEB",
  "tags": [
    "production",
    "web",
  ],
  "status": "paused",
  "system": {
    "processor": "x86_64",
    "version": "14.04",
    "codename": "Trusty Tahr",
    "name": "ubuntu"
  },
  "identity": {
    "availabilityZone": "eu-west-1a",
    "instanceType": "t2.small",
    "instanceId": "i-c0685479"
  },
  "createdAt": "2013-07-26T23:00:00.000Z"
}
```

This call is used to update an agent's information. At the moment you can only modify the `name`, `tags` of an agent.

### HTTP Request

`PUT https://api.barricade.io/agents/{agentId}`

### Query Parameters

There are no specific query parameters required to use this resource.

### Request Body

Field | Type | Description
--------- | ------- | -----------
name | String | The updated name for the agent.
tags | Array | The tags associated with an agent.



## Activate an Agent

```shell
Example Request

curl \
  -XPUT https://api.barricade.io/agents/{agentId}/activate \
  -u <api_key_here>:
```

```javascript
var superagent = require('superagent');
superagent.put('https://api.barricade.io/agents/{agentId}/activate')
  .auth('api_key_here', null)
  .end(function (e, res) {
    //...
  });
```

```python
import requests
from requests.auth import HTTPBasicAuth

base_url = 'https://api.barricade.io'
response = requests.put(
    base_url + '/agents/{agentId}/activate',
    auth=HTTPBasicAuth('api-key-here', ''),
    headers={"Accept": "application/json;version=1.0.0"}
)

print response.status_code
print response.headers
print response.json()
```


```json
{
  "id": "56e01d450xdb230100841b33",
  "teamId": "55a64a3e82f167c1433f1909",
  "automationKey": "c81c1627-a697-4517-9xa3-eb122d727f5e",
  "uuid": "43f0e842-cf60-46ea-bxe9-44d5c363d07d",
  "version": "0.5.0",
  "type": "DigitalOcean",
  "hostname": "ip-172-30-0-75",
  "publicIP": "52.18.109.102",
  "privateIP": "172.30.0.75",
  "mac": "06:c2:36:7c:52:a3",
  "name": "PROD_WEB",
  "tags": [
    "production",
    "web",
  ],
  "status": "active",
  "system": {
    "processor": "x86_64",
    "version": "14.04",
    "codename": "Trusty Tahr",
    "name": "ubuntu"
  },
  "identity": {
    "availabilityZone": "eu-west-1a",
    "instanceType": "t2.small",
    "instanceId": "i-c0685479"
  },
  "createdAt": "2013-07-26T23:00:00.000Z"
}
```

An agent can have three states: `active`, `paused`, `retired`. This call allows you to activate an agent that had previously been `paused`. 

We have written about [stopping and removing agents](https://docs.barricade.io/using-barricade/#stopping-and-removing-agents) in our general documentation.

### HTTP Request

`PUT https://api.barricade.io/agents/{agentId}/activate`

### Query Parameters

There are no specific query parameters required to use this resource.

## Pause an Agent

```shell
Example Request

curl \
  -XPUT https://api.barricade.io/agents/{agentId}/pause \
  -u <api_key_here>:
```

```javascript
var superagent = require('superagent');
superagent.put('https://api.barricade.io/agents/{agentId}/pause')
  .auth('api_key_here', null)
  .end(function (e, res) {
    //...
  });
```
```python
import requests
from requests.auth import HTTPBasicAuth

base_url = 'https://api.barricade.io'
response = requests.put(
    base_url + '/agents/{agentId}/pause',
    auth=HTTPBasicAuth('api-key-here', ''),
    headers={"Accept": "application/json;version=1.0.0"}
)

print response.status_code
print response.headers
print response.json()
```
```json
{
  "id": "56e01d450xdb230100841b33",
  "teamId": "55a64a3e82f167c1433f1909",
  "automationKey": "c81c1627-a697-4517-9xa3-eb122d727f5e",
  "uuid": "43f0e842-cf60-46ea-bxe9-44d5c363d07d",
  "version": "0.5.0",
  "type": "DigitalOcean",
  "hostname": "ip-172-30-0-75",
  "publicIP": "52.18.109.102",
  "privateIP": "172.30.0.75",
  "mac": "06:c2:36:7c:52:a3",
  "name": "PROD_WEB",
  "tags": [
    "production",
    "web",
  ],
  "status": "paused",
  "system": {
    "processor": "x86_64",
    "version": "14.04",
    "codename": "Trusty Tahr",
    "name": "ubuntu"
  },
  "identity": {
    "availabilityZone": "eu-west-1a",
    "instanceType": "t2.small",
    "instanceId": "i-c0685479"
  },
  "createdAt": "2013-07-26T23:00:00.000Z"
}
```

Sometimes you find yourself with a lot of `active` agents that are not actually active. You have discarded those servers and you may not be interested in having 
their output clutter the dashboard. You can `pause` these agents. `Pausing` an agent will **stop** the monitoring on Barricade's side.

See our general documentation about [stopping & pausing](https://docs.barricade.io/using-barricade/#stopping-and-removing-agents) agents.

### HTTP Request

`PUT https://api.barricade.io/agents/{agentId}/pause`

### Query Parameters

There are no specific query parameters required to use this resource.

## Retire an Agent

```shell
Example Request

curl \
  -XPUT https://api.barricade.io/agents/{agentId}/retire \
  -u <api_key_here>:
```

```javascript
var superagent = require('superagent');
superagent.put('https://api.barricade.io/agents/{agentId}/retire')
  .auth('api_key_here', null)
  .end(function (e, res) {
    //...
  });
```
```python
import requests
from requests.auth import HTTPBasicAuth

base_url = 'https://api.barricade.io'
response = requests.put(
    base_url + '/agents/{agentId}/retire',
    auth=HTTPBasicAuth('api-key-here', ''),
    headers={"Accept": "application/json;version=1.0.0"}
)

print response.status_code
print response.headers
print response.json()
```
```json
{
  "id": "56e01d450xdb230100841b33",
  "teamId": "55a64a3e82f167c1433f1909",
  "automationKey": "c81c1627-a697-4517-9xa3-eb122d727f5e",
  "uuid": "43f0e842-cf60-46ea-bxe9-44d5c363d07d",
  "version": "0.5.0",
  "type": "DigitalOcean",
  "hostname": "ip-172-30-0-75",
  "publicIP": "52.18.109.102",
  "privateIP": "172.30.0.75",
  "mac": "06:c2:36:7c:52:a3",
  "name": "PROD_WEB",
  "tags": [
    "production",
    "web",
  ],
  "status": "retired",
  "system": {
    "processor": "x86_64",
    "version": "14.04",
    "codename": "Trusty Tahr",
    "name": "ubuntu"
  },
  "identity": {
    "availabilityZone": "eu-west-1a",
    "instanceType": "t2.small",
    "instanceId": "i-c0685479"
  },
  "createdAt": "2013-07-26T23:00:00.000Z"
}
```

If you are no longer interested in an agent's potential, feel free to `retire` it. We created the concept of reitred agents so that you
never loose information about the cases related to an agent, even after it has been paused and is no longer in use. We call it responsible
management.

See our general documentation about [stopping & pausing](https://docs.barricade.io/using-barricade/#stopping-and-removing-agents) agents.

### HTTP Request

`PUT https://api.barricade.io/agents/{agentId}/retire`

### Query Parameters

There are no specific query parameters required to use this resource.
















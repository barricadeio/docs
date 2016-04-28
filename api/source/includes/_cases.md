# Cases

Whenever Barricade identifies strange behaviour we log it. When we identify something that could require your attention we create a "case file" which 
contains information related to the behaviour we've identified.

Using this part of the API you can retrieve all the cases associated with your Barricade account.


## The Case Resource

```
Example Network Case
```

```json
{
  "id": "AVPl7LFLAhxxxKFz-ORR",
  "teamId": "56e01d450xdb230100841b33",
  "automationKey": "c81c1627-a697-4517-9xa3-eb122d727f5e",
  "context": {
    "agent": {
      "id": "570bc627d2c7ee0100375215",
      "teamId": "56e01d450xdb230100841b33",
      "automationKey": "c81c1627-a697-4517-9xa3-eb122d727f5e",
      "uuid": "26aafcdc-5c8b-4e2f-bxa3-55e3b7661c71",
      "version": "0.6.0",
      "name": "spring_lake",
      "tags": [
        "production"
      ],
      "hostname": "ip-172-30-0-75.eu-west-1.compute.internal",
      "type": "AmazonEC2",
      "publicIP": "52.18.118.119",
      "privateIP": "172.30.0.75",
      "mac": "06:c2:49:5c:52:a3",
      "system": {
        "name": "ubuntu",
        "codename": "Trusty Tahr",
        "version": "14.04",
        "processor": "x86_64"
      },
      "identity": {
        "instanceId": "i-c0685479",
        "instanceType": "t2.small",
        "availabilityZone": "eu-west-1a"
      }
    }
  },
  "fingerprint": "79bc71a1f99529af09f9e2aea94361bf",
  "type": "network",
  "importance": "attack",
  "status": "open",
  "details": {
    "type": "web-application-attack-xss",
    "src": "144.168.45.117",
    "sport": "55022",
    "dst": "172.30.0.75",
    "dport": "80",
    "path": "/cgi-bin/php",
    "numOfTimesByIPs": "4"
  },
  "createdAt": "1461-07-26T23:00:00.000Z"
}
```

```
Example Packages Case 
```

```json
{
  "id": "AVQl7LFLAhAxQKFz-ORR",
  "teamId": "56e01d450xdb230100841b33",
  "automationKey": "c81c1627-a697-4517-9xa3-eb122d727f5e",
  "context": {
    "agent": {
      "id": "570bc627d2c7ee0100375215",
      "teamId": "56e01d450xdb230100841b33",
      "automationKey": "c81c1627-a697-4517-9xa3-eb122d727f5e",
      "uuid": "26aafcdc-5c8b-4e2f-bxa3-55e3b7661c71",
      "version": "0.6.0",
      "name": "spring_lake",
      "tags": [
        "production"
      ],
      "hostname": "ip-172-30-0-75.eu-west-1.compute.internal",
      "type": "AmazonEC2",
      "publicIP": "52.18.118.119",
      "privateIP": "172.30.0.75",
      "mac": "06:c2:49:5c:52:a3",
      "system": {
        "name": "ubuntu",
        "codename": "Trusty Tahr",
        "version": "14.04",
        "processor": "x86_64"
      },
      "identity": {
        "instanceId": "i-c0685479",
        "instanceType": "t2.small",
        "availabilityZone": "eu-west-1a"
      }
    }
  },
  "fingerprint": "79bc71a1f99529af09f9e2aea94361bf",
  "type": "packages",
  "importance": "attack",
  "status": "open",
  "details": {
    "type": "software-vulnerable-nofix",
    "packages": "pcre#CVE-2016-3191#7.5,expat#CVE-2015-1283#6.8"
  },
  "createdAt": "1461-07-26T23:00:00.000Z"
}
```

All cases will contain information related to a case (behaviour we've identified that we think need to be stored). 

Field | Type | Description
--------- | ------- | -----------
id | String | Case identifier.
teamId | String | Team identifier.
automationKey | String | Team Automation Key.
context | Object | Context about when the case was created. For instance the agent information at the time.
type | String | Case type [`network`, `package`].
importance | String | Case importance [`event`, `attack`, `incident`].
status | String | Case status [`open`, `opened`, `resolved`].
details | Object | Case details specific for each case type.<br><br><p>Network:<br><i>type, src, sport, dst, dport, path, numOfTimesByIPs</i></p><p>Packages:<br><i>type, packages(package#cve#score)</i></p>
createdAt | Number | Case creation time in ISO-8601 standard.

Cases can be of **two** types: `network` and `packages`. The Barricade agents listens to all network traffic and also keeps track of the packages
installed on your servers. When we notice strange network behavior, we create a case of type `network`. 

When we notice that one of your package is out of date and a known vulnerability exists, we create a case of type `package`. 

*Package score is specific to the vendor if it's specificed, otherwise we give you the CVE score associated with a package case.* The CVE score is the importance and seriousness of a vulnerability.

## Get All Cases

```shell
Example Request

curl \
  -XGET "https://api.barricade.io/cases?offset=0&limit=30" \
  -u <api_key_here>:
```

```javascript
var superagent = require('superagent');
superagent.get('https://api.barricade.io/cases?offset=0&limit=30')
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
    base_url + '/cases?offset=0&limit=30',
    auth=HTTPBasicAuth('api-key-here', ''),
    headers={"Accept": "application/json;version=1.0.0"}
)

print response.status_code
print response.json()
```

```json
[
  {
    "id": "AVQl7LFLAhAxQKFz-ORR",
    "teamId": "56e01d450xdb230100841b33",
    "automationKey": "c81c1627-a697-4517-9xa3-eb122d727f5e",
    "context": {
      "agent": {
        "id": "570bc627d2c7ee0100375215",
        "teamId": "56e01d450xdb230100841b33",
        "automationKey": "c81c1627-a697-4517-9xa3-eb122d727f5e",
        "uuid": "26aafcdc-5c8b-4e2f-bxa3-55e3b7661c71",
        "version": "0.6.0",
        "name": "spring_lake",
        "tags": [
          "production"
        ],
        "hostname": "ip-172-30-0-75.eu-west-1.compute.internal",
        "type": "AmazonEC2",
        "publicIP": "52.18.118.119",
        "privateIP": "172.30.0.75",
        "mac": "06:c2:49:5c:52:a3",
        "system": {
          "name": "ubuntu",
          "codename": "Trusty Tahr",
          "version": "14.04",
          "processor": "x86_64"
        },
        "identity": {
          "instanceId": "i-c0685479",
          "instanceType": "t2.small",
          "availabilityZone": "eu-west-1a"
        }
      }
    },
    "fingerprint": "79bc71a1f99529af09f9e2aea94361bf",
    "type": "network",
    "importance": "attack",
    "status": "open",
    "details": {
      "type": "web-application-attack-xss",
      "src": "144.168.45.117",
      "sport": "55022",
      "dst": "172.30.0.75",
      "dport": "80",
      "path": "/cgi-bin/php",
      "numOfTimesByIPs": "4"
    },
    "createdAt": "1461-07-26T23:00:00.000Z"
  }
]
```

Retrieves agents.

### HTTP Request

`GET https://api.barricade.io/cases`

### Query Parameters

Field | Type | Description
--------- | ------- | -----------
offset | Integer | A cursor for use in pagination. Pagination starts from the specified offset.
limit | Integer | A limit on the number of objects to be returned, between 1 and 100.
type | String | The type of case to retrieve: `network`, `package`.
importance | String | The importance associated with a case: `event`, `attack`, `incident`.
status | String | The status of a case: `open`, `opened`, `resolved`.

## Retrieve a Case

```shell
Example Request

curl \
  -H "Content-Type: application/json" \
  -XGET https://api.barricade.io/cases/{caseId} \
  -u <api_key_here>:
```

```javascript
var superagent = require('superagent');
superagent.get('https://api.barricade.io/cases/{caseId}')
  .auth('api_key_here', null)
  .end(function (e, res) {
    //...
  });
```

```json
{
  "id": "AVQl7LFLAhAxQKFz-ORR",
  "teamId": "56e01d450xdb230100841b33",
  "automationKey": "c81c1627-a697-4517-9xa3-eb122d727f5e",
  "context": {
    "agent": {
      "id": "570bc627d2c7ee0100375215",
      "teamId": "56e01d450xdb230100841b33",
      "automationKey": "c81c1627-a697-4517-9xa3-eb122d727f5e",
      "uuid": "26aafcdc-5c8b-4e2f-bxa3-55e3b7661c71",
      "version": "0.6.0",
      "name": "spring_lake",
      "tags": [
        "production"
      ],
      "hostname": "ip-172-30-0-75.eu-west-1.compute.internal",
      "type": "AmazonEC2",
      "publicIP": "52.18.118.119",
      "privateIP": "172.30.0.75",
      "mac": "06:c2:49:5c:52:a3",
      "system": {
        "name": "ubuntu",
        "codename": "Trusty Tahr",
        "version": "14.04",
        "processor": "x86_64"
      },
      "identity": {
        "instanceId": "i-c0685479",
        "instanceType": "t2.small",
        "availabilityZone": "eu-west-1a"
      }
    }
  },
  "fingerprint": "79bc71a1f99529af09f9e2aea94361bf",
  "type": "network",
  "importance": "attack",
  "status": "open",
  "details": {
    "type": "web-application-attack-xss",
    "src": "144.168.45.117",
    "sport": "55022",
    "dst": "172.30.0.75",
    "dport": "80",
    "path": "/cgi-bin/php",
    "numOfTimesByIPs": "4"
  },
  "createdAt": "1461-07-26T23:00:00.000Z"
}
```

Retrieve an individual case and its associated information.

### HTTP Request

`GET https://api.barricade.io/cases/{caseId}`

### Query Parameters

Not applicable




## Resolves a Case

```shell
curl \
  -XPUT https://api.barricade.io/cases/{caseId}/resolve \
  -u <api_key_here>:
```

```javascript
var superagent = require('superagent');
superagent.put('https://api.barricade.io/cases/{caseId}/resolve')
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
    base_url + '/cases/{caseId}/resolve',
    auth=HTTPBasicAuth('api-key-here', ''),
    headers={"Accept": "application/json;version=1.0.0"}
)
```

```json
{
  "id": "AVQl7LFLAhAxQKFz-ORR",
  "teamId": "56e01d450xdb230100841b33",
  "automationKey": "c81c1627-a697-4517-9xa3-eb122d727f5e",
  "context": {
    "agent": {
      "id": "570bc627d2c7ee0100375215",
      "teamId": "56e01d450xdb230100841b33",
      "automationKey": "c81c1627-a697-4517-9xa3-eb122d727f5e",
      "uuid": "26aafcdc-5c8b-4e2f-bxa3-55e3b7661c71",
      "version": "0.6.0",
      "name": "spring_lake",
      "tags": [
        "production"
      ],
      "hostname": "ip-172-30-0-75.eu-west-1.compute.internal",
      "type": "AmazonEC2",
      "publicIP": "52.18.118.119",
      "privateIP": "172.30.0.75",
      "mac": "06:c2:49:5c:52:a3",
      "system": {
        "name": "ubuntu",
        "codename": "Trusty Tahr",
        "version": "14.04",
        "processor": "x86_64"
      },
      "identity": {
        "instanceId": "i-c0685479",
        "instanceType": "t2.small",
        "availabilityZone": "eu-west-1a"
      }
    }
  },
  "fingerprint": "79bc71a1f99529af09f9e2aea94361bf",
  "type": "network",
  "importance": "attack",
  "status": "resolved",
  "details": {
    "type": "web-application-attack-xss",
    "src": "144.168.45.117",
    "sport": "55022",
    "dst": "172.30.0.75",
    "dport": "80",
    "path": "/cgi-bin/php",
    "numOfTimesByIPs": "4"
  },
  "createdAt": "1461-07-26T23:00:00.000Z"
}
```

Resolve an individual case so that you can better manage your active cases through the dashboard.

### HTTP Request

`PUT https://api.barricade.io/cases/{caseId}/resolve`

### Query Parameters

Not applicable












# Pagination

```shell
Example Request

curl -v \
     -XGET https://api.barricade.io/agents\?offset=0&limit=20
     -u <api_key_here>:
```

```javascript
//paginate with offset and limit
var superagent = require('superagent');
superagent.get('https://api.barricade.io/agents?offset=0&limit=20')
  .auth('api_key', null)
  .end(function (e, res) {
    //response headers
    //res.header['x-total']
    //res.header['x-offset']
    //res.header['x-limit']
  });
```

```python
import requests
from requests.auth import HTTPBasicAuth

base_url = 'https://api.barricade.io'
response = requests.get(
    base_url + '/agents?offset=0&limit=20',
    auth=HTTPBasicAuth('api-key-here', ''),
    headers={"Accept": "application/json;version=1.0.0"}
)

print response.status_code
print response.headers
print response.json()
```

All top-level API resources have support for bulk fetches via their collection (a list of resources). For instance you can list agents, and list cases. These list API methods share a common structure, optionally accepting the following two parameters: `limit`, and `offset`.

### Query Parameters

Field | Type | Description
--------- | ------- | -----------
offset | Integer | A cursor for use in pagination. Pagination starts offset the specified offset.
limit | Integer | A limit on the number of objects to be returned, between 1 and 100.

### Response Headers

Field | Type | Description
--------- | ------- | -----------
X-Offset | Integer | The offset used for the query.
X-Limit | Integer | The limit used for the query.
X-Total | Integer | The total number of items available for the query.







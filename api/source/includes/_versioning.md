# Versioning

```shell
# Request with Accept header 
curl "api_endpoint_here" \
  -u <apiKey>: \
  -H "Accept: application/json;version=1.0.0"
  
# or Request with X-API-Version header 
curl "api_endpoint_here" \
  -u <apiKey>: \
  -H "X-API-Version: 1.0.0"
```

```javascript
//set version with Accept header
var superagent = require('superagent');
superagent.get('api_endpoint_here')
  .set('Accept', 'application/json; version=1.0.0')
  .end(function (e, res) {
    //...  
  });

//or, set version with X-API-Version header
var superagent = require('superagent');
superagent.get('api_endpoint_here')
  .set('X-API-Version', '1.0.0')
  .end(function (e, res) {
    //...  
  });
```

```python
import requests

base_url = 'https://api.barricade.io'

# Set version using the Accept header
res = requests.get(
    base_url + '/endpoint-here',
    headers={"Accept": "application/json;version=1.0.0"}
)

print res.status_code
print res.json()

# Or set the version using the X-API-Version
res = requests.get(
    base_url + '/endpoint-here',
    headers={"X-API-Version": "1.0.0"}
)

print res.status_code
print res.json()
```

The current version is `1.0.0`.

When no version is specified, the API uses the current version.

To set the API version on a specific request, set `Accept` or the `X-API-Version` header on your request.









# Authenticate Everything

```shell
# cURL uses the -u flag to pass basic auth credentials
# (adding a colon after your API key prevents cURL from asking for a password).
curl "api_endpoint_here" \
  -u <api_key_here>:
```

```javascript
//authenticates with Basic Auth
var superagent = require('superagent');
superagent.get('api_endpoint_here')
  .auth('api_key_here', null)
  .end(function (e, res) {
    //...
  });
  
//authenticates with Authorization header
var superagent = require('superagent');
superagent.get('api_endpoint_here')
  .set('Authorization', 'bearer api_key_here')
  .end(function (e, res) {
    //...
  });
```

```python
base_url = 'https://api.barricade.io'

# Authenticate with Basic Auth
from requests.auth import HTTPBasicAuth
response = requests.get(
    base_url + '/agents', 
    auth=HTTPBasicAuth('api-key-here', '')
)

print response.status_code
print response.json()

# Authenticate using a Bearer Token
response = requests.get(
    base_url + '/agents',
    headers={"Authorization": "bearer your-api-key-here"}
)

print response.status_code
print response.json()
```

We require everyone and every application to authenticate all of their requests either with HTTP Basic Auth or using a Bearer Token. 


All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.

We **strongly recommend** you never turn off SSL verification and the `verifypeer` option often available in most HTTP-clients.

### Barricade Account

You will need a [Barricade account](https://app.barricade.io)  before proceeding any further. You can create your account for free
and without a credit card right away.

### Developer API Keys

You can manage your API keys in the <a href='https://app.barricade.io/dashboard/settings/developer/keys' target="_blank">developer section</a>
which is accessible through your Barricade dashboard. 

**Do not share your secret API keys in publicly accessible areas such GitHub, client-side code, and so forth.**

### Basic HTTP Authentication

Because we only support **HTTPs** we've decided to support Basic Authentication as an authentication mechanism for convenience reasons.
You only have to provide your API Key as the username and you do not need to provide a password.

### Bearer Token

Should you want to use a Bearer Token using the `Authorization` header, you are welcomed to do so. We also support it. 







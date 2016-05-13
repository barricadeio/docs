+++
title = "C.I. Security Tests"
weight = "17"

tags = ["continuous integration", "testing", "sectests", "wapiti"]
section = "using-barricade"
categories = ["using-barricade"]
type = "page"

slug = "ci-sec-testing"

[menu.main]
    url = "ci-sec-testing"
    parent = "using-barricade"

+++

Continuous Integration Security Testing can be used alongside other test suites as you are developing - to better understand which parts of your application network might be at risk.

We're big believers in [continuous security](https://blog.barricade.io/continuous-security/), and want to help you incorporate security into the development lifecycle. 

![../src/img/using-barricade/16-sectests.png](../src/img/using-barricade/16-sectests.png)

### What do Security Tests check for?

The test will check your application network for a series of common vulnerabilities, based on the [Wapiti](http://wapiti.sourceforge.net/) scanner:

*   SQL Injection
*   Cross Site Scripting (XSS)
*   Htaccess Bypass
*   Backup File
*   File Disclosure
*   Potentially Dangerous File
*   CRLF Injection
*   File Handling 
*   Commands Execution

Note: _These checks are to help you identify any security bugs in your app, before they are shipped - but they do not guarantee that your app is fully secure from potential attacks._

### Security Tests with Webhooks

 ![../src/img/using-barricade/16-sectest-settings.gif](../src/img/using-barricade/16-sectest-settings.gif)

## Enabling the Integration:

1.  Visit the Settings > Integrations > [C.I. Security Testing](https://app.barricade.io/dashboard/settings/integration/csi) page.
2.  Slide the switch to **enable** the integration.
3.  **Copy** the webhook url that is generated.

## Submitting Tests:

To submit a report, you'll need to make a HTTP post request to the webhook URL. Webhooks are user-defined HTTP callbacks - triggered by some an, such as pushing code to a repository.

Currently, we support Wapiti test results in JSON format.  
The request body may contain:

```
type: 'wapiti', // required, reporting type
data: 'test result', // required, rtest result in text
commit_id: '171fdce', // commit Id
commit_username: 'sakaenakajima', // username
commit_organization: 'Barricade', // organization
commit_repository: 'webapp', // repository name
commit_branch: 'feature-ci-sec', // branch name
commit_compare_url: 'https://github.com/barricadeio/internal-admin/compare/81c1235767ee...171fdce6f3b0', // compare URL
build_number: '1660', // build number
build_link: 'https://circleci.com/gh/barricadeio/webapp/1660' // build URL
```

## Example Request

The following example reads a test result from `wapiti.json`, builds a request body and submits it to the webhook.

```
jq -r '{type:"wapiti", "data": tostring}' wapiti.json | curl -X POST -H "Content-Type: application/json" -d @- https://app.barricade.io/services/56294f3ef8f68d452e3ce561/csi/dee1aa08-bc80-48ba-844b-1c8c71f0ccdf
```


```
{
  "vulnerabilities":{
    "Cross Site Scripting":[
      {
        "info":"XSS vulnerability found via injection in the parameter name",
        "http_request":"GET /page?name=%3Cscript%3Ealert%28%27w2e6ijy9jc%27%29%3C%2Fscript%3E HTTP/1.1\nHost: 172.17.42.1:80\n",
        "level":"1",
        "curl_command":"curl \"http://172.17.42.1:80/page?name=%3Cscript%3Ealert%28%27w2e6ijy9jc%27%29%3C%2Fscript%3E\"",
        "path":"/page",
        "parameter":"name",
        "method":"GET"
      }
    ],
    "Htaccess Bypass":[
    ],
    "Backup file":[
    ],
    "SQL Injection":[
    ],
    "Blind SQL Injection":[
    ],
    "File Handling":[
    ],
    "Potentially dangerous file":[
    ],
    "CRLF Injection":[
    ],
    "Commands execution":[
    ]
  },
  "infos":{
    "date":"Mon, 28 Sep 2015 14:26:00 +0000",
    "scope":"folder",
    "version":"Wapiti 2.3.0",
    "target":"http://172.17.42.1:80"
  },
  "classifications":{
    "Resource consumption":{
      "ref":{
        "CWE-400: Uncontrolled Resource Consumption ('Resource Exhaustion')":"http://cwe.mitre.org/data/definitions/400.html",
        "http://www.owasp.org/index.php/Asymmetric_resource_consumption_(amplification)":"http://www.owasp.org/index.php/Asymmetric_resource_consumption_(amplification)"
      },
      "sol":"The involved script is maybe using the server resources (CPU, memory, network, file access...) in a non-efficient way",
      "desc":"Resource consumption description"
    },
    "Internal Server Error":{
      "ref":{
        "Wikipedia article for 5xx HTTP error codes":"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#5xx_Server_Error"
      },
      "sol":"More information about the error should be found in the server logs.",
      "desc":"Internal server error description"
    },
    "Cross Site Scripting":{
      "ref":{
        "CWE-79: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')":"http://cwe.mitre.org/data/definitions/79.html",
        "http://en.wikipedia.org/wiki/Cross-site_scripting":"http://en.wikipedia.org/wiki/Cross-site_scripting",
        "VulneraNET wiki: Cross Site Scripting Flaw article":"http://lab.gsi.dit.upm.es/semanticwiki/index.php/Cross_Site_Scripting_Flaw",
        "http://www.owasp.org/index.php/Cross_Site_Scripting":"http://www.owasp.org/index.php/Cross_Site_Scripting"
      },
      "sol":"The best way to protect a web application from XSS attacks is ensure that the application performs validation of all headers, cookies, query strings, form fields, and hidden fields. Encoding user supplied output in the server side can also defeat XSS vulnerabilities by preventing inserted scripts from being transmitted to users in an executable form. Applications can gain significant protection from javascript based attacks by converting the following characters in all generated output to the appropriate HTML entity encoding: <, >, &, ", ', (, ), #, %, ; , +, -.",
      "desc":"Cross-site scripting (XSS) is a type of computer security vulnerability typically found in web applications which allow code injection by malicious web users into the web pages viewed by other users. Examples of such code include HTML code and client-side scripts."
    },
    "Htaccess Bypass":{
      "ref":{
        "http://blog.teusink.net/2009/07/common-apache-htaccess-misconfiguration.html":"http://blog.teusink.net/2009/07/common-apache-htaccess-misconfiguration.html",
        "CWE-538: File and Directory Information Exposure":"http://cwe.mitre.org/data/definitions/538.html"
      },
      "sol":"Make sure every HTTP method is forbidden if the credentials are bad.",
      "desc":"htaccess files are used to restrict access to some files or HTTP method. In some case it may be possible to bypass this restriction and access the files."
    },
    "Backup file":{
      "ref":{
        "Testing for Old, Backup and Unreferenced Files (OWASP-CM-006)":"http://www.owasp.org/index.php/Testing_for_Old,_Backup_and_Unreferenced_Files_(OWASP-CM-006)",
        "CWE-530: Exposure of Backup File to an Unauthorized Control Sphere":"http://cwe.mitre.org/data/definitions/530.html"
      },
      "sol":"The webadmin must manually delete the backup files or remove it from the web root. He should also reconfigure its editor to deactivate automatic backups.",
      "desc":"It may be possible to find backup files of scripts on the webserver that the web-admin put here to save a previous version or backup files that are automaticallygenerated by the software editor used (like for example Emacs). These copies may reveal interesting informations like source code or credentials"
    },
    "SQL Injection":{
      "ref":{
        "http://www.owasp.org/index.php/SQL_Injection":"http://www.owasp.org/index.php/SQL_Injection",
        "http://en.wikipedia.org/wiki/SQL_injection":"http://en.wikipedia.org/wiki/SQL_injection",
        "CWE-89: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection')":"http://cwe.mitre.org/data/definitions/89.html"
      },
      "sol":"To protect against SQL injection, user input must not directly be embedded in SQL statements. Instead, user input must be escaped or filtered or parameterized statements must be used.",
      "desc":"SQL injection vulnerabilities allow an attacker to alter the queries executed on the backend database. An attacker may then be able to extract or modify informations stored in the database or even escalate his privileges on the system."
    },
    "Blind SQL Injection":{
      "ref":{
        "CWE-89: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection')":"http://cwe.mitre.org/data/definitions/89.html",
        "http://www.imperva.com/resources/adc/blind_sql_server_injection.html":"http://www.imperva.com/resources/adc/blind_sql_server_injection.html",
        "http://www.owasp.org/index.php/Blind_SQL_Injection":"http://www.owasp.org/index.php/Blind_SQL_Injection"
      },
      "sol":"To protect against SQL injection, user input must not directly be embedded in SQL statements. Instead, user input must be escaped or filtered or parameterized statements must be used.",
      "desc":"Blind SQL injection is a technique that exploits a vulnerability occurring in the database of an application. This kind of vulnerability is harder to detect than basic SQL injections because no error message will be displayed on the webpage."
    },
    "File Handling":{
      "ref":{
        "http://www.owasp.org/index.php/Path_Traversal":"http://www.owasp.org/index.php/Path_Traversal",
        "http://www.acunetix.com/websitesecurity/directory-traversal.htm":"http://www.acunetix.com/websitesecurity/directory-traversal.htm",
        "CWE-22: Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal')":"http://cwe.mitre.org/data/definitions/22.html"
      },
      "sol":"Prefer working without user input when using file system calls. Use indexes rather than actual portions of file names when templating or using language files (eg: value 5 from the user submission = Czechoslovakian, rather than expecting the user to return 'Czechoslovakian'). Ensure the user cannot supply all parts of the path - surround it with your path code. Validate the user's input by only accepting known good - do not sanitize the data. Use chrooted jails and code access policies to restrict where the files can be obtained or saved to.",
      "desc":"This attack is also known as Path or Directory Traversal, its aim is the access to files and directories that are stored outside the web root folder. The attacker tries to explore the directories stored in the web server. The attacker uses some techniques, for instance, the manipulation of variables that reference files with 'dot-dot-slash (../)' sequences and its variations to move up to root directory to navigate through the file system."
    },
    "Potentially dangerous file":{
      "ref":{
        "The Open Source Vulnerability Database":"http://osvdb.org/"
      },
      "sol":"Make sure the script is up-to-date and restrict access to it if possible",
      "desc":"A file with potential vulnerabilities has been found on the website."
    },
    "CRLF Injection":{
      "ref":{
        "CWE-93: Improper Neutralization of CRLF Sequences ('CRLF Injection')":"http://cwe.mitre.org/data/definitions/93.html",
        "http://www.owasp.org/index.php/CRLF_Injection":"http://www.owasp.org/index.php/CRLF_Injection",
        "http://www.acunetix.com/websitesecurity/crlf-injection.htm":"http://www.acunetix.com/websitesecurity/crlf-injection.htm",
        "VulneraNET wiki: CRLF Injection article":"http://lab.gsi.dit.upm.es/semanticwiki/index.php/CRLF_Injection"
      },
      "sol":"Check the submitted parameters and do not allow CRLF to be injected by filtering CRLF",
      "desc":"The term CRLF refers to Carriage Return (ASCII 13, \\r) Line Feed (ASCII 10, \\n). They're used to note the termination of a line, however, dealt with differently in today's popular Operating Systems. For example: in Windows both a CR and LF are required to note the end of a line, whereas in Linux/UNIX a LF is only required. This combination of CR and LR is used for example when pressing 'Enter' on the keyboard. Depending on the application being used, pressing 'Enter' generally instructs the application to start a new line, or to send a command."
    },
    "Commands execution":{
      "ref":{
        "CWE-78: Improper Neutralization of Special Elements used in an OS Command ('OS Command Injection')":"http://cwe.mitre.org/data/definitions/78.html",
        "http://www.owasp.org/index.php/Command_Injection":"http://www.owasp.org/index.php/Command_Injection"
      },
      "sol":"Prefer working without user input when using file system calls",
      "desc":"This attack consists in executing system commands on the server. The attacker tries to inject this commands in the request parameters"
    }
  },
  "anomalies":{
    "Resource consumption":[
    ],
    "Internal Server Error":[
    ]
  }
}
```

### Troubleshooting C.I. Test Webhooks

If you're experiencing issues submitting a test, try generating a new webhook URL on the settings page:

![../src/img/using-barricade/16-regen.gif](../src/img/using-barricade/16-regen.gif)

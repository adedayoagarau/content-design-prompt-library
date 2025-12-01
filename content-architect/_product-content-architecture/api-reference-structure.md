## API Reference Structure v1.0

**Purpose**: Design a comprehensive, developer-friendly API reference documentation system that accelerates integration adoption, reduces implementation friction, and creates measurable developer satisfaction through strategic content organization, interactive examples, and comprehensive error documentation.

**Context**: Use this framework when building or restructuring API documentation for platforms offering programmatic access to functionality. This goes beyond endpoint listings to create a complete developer experience encompassing authentication, SDKs, webhooks, rate limiting, and versioning strategies. Ideal for B2B SaaS platforms, developer tools, infrastructure products, or any API-first product requiring external integrations.

**Strategic Frameworks Applied**:
- **Developer Experience (DX) Optimization** - Reducing time-to-first-successful-call
- **Progressive Disclosure Architecture** - Quick start → Common patterns → Advanced use cases
- **Multi-Language Support Strategy** - Code examples across popular languages and frameworks
- **Interactive Documentation Model** - Try-before-integrate with live API explorers
- **Versioning & Backwards Compatibility** - Managing breaking changes across API versions
- **Developer Journey Mapping** - From discovery → authentication → first call → production deployment

---

## Variables

### API Context Variables
- `{{api_type}}`: REST API | GraphQL | Webhooks | WebSockets | gRPC | Hybrid
- `{{authentication_methods}}`: API Keys | OAuth 2.0 | JWT | Basic Auth | Custom
- `{{api_complexity}}`: Simple (5-10 endpoints) | Moderate (11-50 endpoints) | Complex (50+ endpoints)
- `{{primary_use_cases}}`: Data retrieval | CRUD operations | Real-time updates | File uploads | Batch processing
- `{{developer_personas}}`: Backend developers | Frontend developers | Mobile developers | DevOps engineers | Citizen developers

### Documentation Structure Variables
- `{{content_sections}}`: Getting Started | Authentication | Endpoints | Webhooks | SDKs | Rate Limits | Changelog
- `{{endpoint_organization}}`: Resource-based (grouped by entity) | Function-based (grouped by capability) | Alphabetical
- `{{code_language_priority}}`: Languages to showcase first (cURL, JavaScript, Python, Ruby, PHP, Go, Java, etc.)
- `{{interactive_features}}`: API explorer | Request builder | Response previews | Code generation
- `{{versioning_strategy}}`: URI versioning (/v1/, /v2/) | Header versioning | No versioning (backwards compatible)

### Example & Reference Variables
- `{{request_example_formats}}`: cURL | Language-specific SDKs | HTTP raw requests
- `{{response_formats}}`: JSON | XML | Protobuf | MessagePack
- `{{error_documentation_depth}}`: HTTP status codes only | Detailed error objects | Recovery strategies
- `{{code_sample_complexity}}`: Minimal (hello world) | Realistic (production-like) | Complex (edge cases)

### Developer Support Variables
- `{{sdk_availability}}`: Official SDKs (languages supported) | Community SDKs | No SDKs (REST only)
- `{{testing_tools}}`: Postman collections | OpenAPI/Swagger spec | Sandbox environments | Mock servers
- `{{support_channels}}`: Developer forum | GitHub issues | Dedicated Slack | Email support | Office hours
- `{{onboarding_resources}}`: Quick start guides | Video tutorials | Sample apps | Starter repositories

### Technical Infrastructure Variables
- `{{documentation_platform}}`: Custom-built | Readme.io | GitBook | Stoplight | Swagger UI | Redoc
- `{{api_specification}}`: OpenAPI 3.0 | JSON Schema | GraphQL Schema | Protocol Buffers
- `{{rate_limiting_model}}`: Per-endpoint limits | Global limits | Tiered by plan | Custom enterprise limits
- `{{sandbox_environment}}`: Test API with fake data | Production API with test mode | Separate staging environment

---

## Prompt

You are an API documentation architect designing comprehensive developer documentation for **{{api_type}}** with **{{api_complexity}}** serving **{{developer_personas}}**. Your task is to create a developer experience that minimizes time-to-first-successful-API-call, supports **{{primary_use_cases}}**, and provides clear guidance on **{{authentication_methods}}** while maintaining clarity across **{{versioning_strategy}}**.

### Getting Started Experience

**Time-to-First-Call Optimization:**

Design Quick Start flow to achieve first successful API call in <10 minutes:

1. **Immediate Value Preview** (0-2 minutes)
   - Show API response example BEFORE requiring authentication
   - "Here's what you'll get when you call our API:"
   ```json
   {
     "projects": [
       {
         "id": "proj_123",
         "name": "My First Project",
         "created_at": "2025-01-15T10:30:00Z"
       }
     ]
   }
   ```
   - Builds excitement, shows value immediately

2. **Authentication Setup** (2-5 minutes)
   - Clear, step-by-step API key generation:
     ```
     1. Log into your account
     2. Navigate to Settings > API Keys
     3. Click "Generate New Key"
     4. Copy your key: sk_live_abc123... (store securely!)
     ```
   - Security best practices (don't commit keys to git, use environment variables)

3. **First API Call** (5-10 minutes)
   - Simplest possible working example (GET request, no parameters):
   ```bash
   curl https://api.example.com/v1/projects \
     -H "Authorization: Bearer YOUR_API_KEY"
   ```
   - Expected response shown
   - Common errors and fixes ("401 Unauthorized? Check your API key")

**Multi-Language Quick Starts:**

Provide working examples in **{{code_language_priority}}**:

**cURL** (Universal, works everywhere):
```bash
curl -X POST https://api.example.com/v1/projects \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"name": "New Project"}'
```

**JavaScript** (Node.js):
```javascript
const response = await fetch('https://api.example.com/v1/projects', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'New Project' })
});
const data = await response.json();
```

**Python**:
```python
import requests

headers = {'Authorization': 'Bearer YOUR_API_KEY'}
data = {'name': 'New Project'}

response = requests.post(
    'https://api.example.com/v1/projects',
    json=data,
    headers=headers
)
print(response.json())
```

### Endpoint Documentation Structure

**Resource-Based Organization** (for {{endpoint_organization}}):

```
Projects
├── List projects (GET /projects)
├── Create project (POST /projects)
├── Retrieve project (GET /projects/{id})
├── Update project (PATCH /projects/{id})
└── Delete project (DELETE /projects/{id})

Dashboards
├── List dashboards (GET /dashboards)
├── Create dashboard (POST /dashboards)
└── ...

Users
└── ...
```

**Endpoint Page Template:**

```markdown
# POST /projects

Create a new project in your workspace.

**Authentication**: Required (API key or OAuth)
**Rate Limit**: 100 requests/hour

---

## Request

### Endpoint
POST https://api.example.com/v1/projects

### Headers
| Header | Value | Required |
|--------|-------|----------|
| Authorization | Bearer YOUR_API_KEY | Yes |
| Content-Type | application/json | Yes |

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | Project name (max 100 chars) |
| description | string | No | Project description |
| workspace_id | string | Yes | Parent workspace ID |

### Request Example

[Multi-language code examples]

---

## Response

### Success (201 Created)
[JSON response with all fields documented]

### Error Responses
[400, 401, 403, 404, 429, 500 with examples]

---

## Try It Now
[Interactive API explorer embedded]

---

## Notes
- Maximum 1,000 projects per workspace
- Project names must be unique within workspace
- Created projects are private by default

## Related Endpoints
- GET /projects - List all projects
- PATCH /projects/{id} - Update project
```

### Authentication Documentation

**{{authentication_methods}} implementation guide:**

**API Key Authentication:**
```markdown
# API Key Authentication

## Overview
API keys provide secure access to your account's data. Treat them like passwords.

## Getting Your API Key

1. Navigate to [Dashboard > Settings > API Keys]
2. Click "Generate New Key"
3. Give it a descriptive name (e.g., "Production Server", "Test Scripts")
4. Copy the key immediately (you won't see it again)

## Using API Keys

Include your API key in the Authorization header:

Authorization: Bearer YOUR_API_KEY

### Example Request
```bash
curl https://api.example.com/v1/projects \
  -H "Authorization: Bearer sk_live_abc123"
```

## Security Best Practices

✅ **Do:**
- Store keys in environment variables
- Use different keys for dev/staging/production
- Rotate keys periodically
- Revoke compromised keys immediately

❌ **Don't:**
- Commit keys to version control
- Share keys via email/Slack
- Hardcode keys in client-side code
- Use production keys for testing

## Key Scopes (Optional)
Create keys with limited permissions:
- Read-only (GET requests only)
- Write-only (POST/PATCH/DELETE)
- Admin (full access)
```

**OAuth 2.0 Flow Documentation:**
```markdown
# OAuth 2.0 Authentication

## Overview
Use OAuth when building integrations that access user data on their behalf.

## Authorization Flow

1. **Redirect user to authorization URL**
   ```
   https://example.com/oauth/authorize?
     client_id=YOUR_CLIENT_ID&
     redirect_uri=https://yourapp.com/callback&
     response_type=code&
     scope=read_projects,write_dashboards
   ```

2. **User authorizes your app**
   - User logs in and approves permissions
   - They're redirected to your redirect_uri with authorization code

3. **Exchange code for access token**
   ```bash
   curl -X POST https://example.com/oauth/token \
     -d client_id=YOUR_CLIENT_ID \
     -d client_secret=YOUR_CLIENT_SECRET \
     -d code=AUTH_CODE \
     -d grant_type=authorization_code
   ```

4. **Receive access token**
   ```json
   {
     "access_token": "at_abc123",
     "token_type": "Bearer",
     "expires_in": 3600,
     "refresh_token": "rt_xyz789"
   }
   ```

5. **Use access token for API requests**
   ```bash
   curl https://api.example.com/v1/projects \
     -H "Authorization: Bearer at_abc123"
   ```

## Refreshing Tokens
Access tokens expire after 1 hour. Use refresh token to get new access token:
[Refresh token example]

## Scopes
Request minimal scopes needed:
- `read_projects` - View projects
- `write_projects` - Create/update/delete projects
- `read_dashboards` - View dashboards
- `admin` - Full account access
```

### Error Handling Documentation

**Comprehensive {{error_documentation_depth}}:**

```markdown
# Error Handling

## HTTP Status Codes

| Code | Meaning | Common Causes |
|------|---------|---------------|
| 200 | Success | Request succeeded |
| 201 | Created | Resource successfully created |
| 400 | Bad Request | Invalid parameters |
| 401 | Unauthorized | Missing/invalid API key |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | Resource doesn't exist |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Server Error | We messed up (rare) |

## Error Response Format

All errors return consistent JSON:

```json
{
  "error": {
    "code": "invalid_parameters",
    "message": "Human-readable description",
    "details": {
      "field": "name",
      "issue": "required_field_missing"
    },
    "docs_url": "https://docs.example.com/errors/invalid_parameters"
  }
}
```

## Common Errors & Solutions

### 400 Bad Request
**Cause**: Missing required parameter or invalid format

**Example**:
```json
{
  "error": {
    "code": "invalid_parameters",
    "message": "Project name is required",
    "details": { "field": "name" }
  }
}
```

**Solution**: Check request body, ensure all required fields present

---

### 401 Unauthorized
**Cause**: Missing, invalid, or expired API key

**Example**:
```json
{
  "error": {
    "code": "unauthorized",
    "message": "Invalid API key"
  }
}
```

**Solutions**:
- Verify API key is correct
- Check Authorization header format: "Bearer YOUR_KEY"
- Ensure key hasn't been revoked
- For OAuth, refresh your access token

---

### 429 Rate Limit Exceeded
**Cause**: Too many requests in time window

**Example**:
```json
{
  "error": {
    "code": "rate_limit_exceeded",
    "message": "Rate limit exceeded. Retry in 60 seconds.",
    "retry_after": 60
  }
}
```

**Solutions**:
- Implement exponential backoff
- Check X-RateLimit-* headers in responses
- Upgrade plan for higher limits
- Cache responses to reduce API calls

## Retry Strategy

Implement exponential backoff for 429 and 500 errors:

```python
import time

def api_call_with_retry(max_retries=3):
    for attempt in range(max_retries):
        response = requests.get(url, headers=headers)
        
        if response.status_code == 200:
            return response.json()
        elif response.status_code == 429:
            retry_after = int(response.headers.get('Retry-After', 60))
            time.sleep(retry_after)
        elif response.status_code >= 500:
            time.sleep(2 ** attempt)  # Exponential backoff
        else:
            raise Exception(f"API error: {response.status_code}")
    
    raise Exception("Max retries exceeded")
```
```

### Webhook Documentation

**For real-time event notifications:**

```markdown
# Webhooks

## Overview
Webhooks let you receive real-time notifications when events occur in your account.

## Webhook Events

| Event | Triggered When | Payload |
|-------|----------------|---------|
| `project.created` | New project created | Project object |
| `project.updated` | Project modified | Project object |
| `project.deleted` | Project deleted | Project ID |
| `dashboard.shared` | Dashboard shared with user | Dashboard object + user |

## Setting Up Webhooks

1. **Create webhook endpoint in your app**
   ```javascript
   app.post('/webhooks', (req, res) => {
     const event = req.body;
     
     // Verify signature
     if (!verifySignature(req.headers['x-webhook-signature'], req.body)) {
       return res.status(401).send('Invalid signature');
     }
     
     // Handle event
     switch(event.type) {
       case 'project.created':
         handleProjectCreated(event.data);
         break;
       // Handle other events...
     }
     
     res.status(200).send('OK');
   });
   ```

2. **Register webhook URL**
   - Dashboard > Settings > Webhooks
   - Enter your endpoint URL: https://yourapp.com/webhooks
   - Select events to receive
   - Click "Create Webhook"

## Webhook Payload

```json
{
  "id": "evt_abc123",
  "type": "project.created",
  "created_at": "2025-01-15T10:30:00Z",
  "data": {
    "id": "proj_xyz789",
    "name": "New Project",
    "workspace_id": "ws_123",
    "created_by": "usr_456"
  }
}
```

## Signature Verification

Verify webhooks are from us (prevent spoofing):

```python
import hmac
import hashlib

def verify_signature(signature, payload, secret):
    expected = hmac.new(
        secret.encode(),
        payload.encode(),
        hashlib.sha256
    ).hexdigest()
    
    return hmac.compare_digest(signature, expected)
```

## Best Practices

- **Respond quickly**: Return 200 within 5 seconds
- **Process async**: Queue events for background processing
- **Handle duplicates**: Same event may be sent twice (use event ID for deduplication)
- **Retry logic**: We retry failed webhooks 3x with exponential backoff
- **Test thoroughly**: Use test mode to trigger sample events
```

### SDK Documentation

**{{sdk_availability}} integration:**

```markdown
# Official SDKs

## JavaScript/TypeScript

### Installation
```bash
npm install @example/api-client
# or
yarn add @example/api-client
```

### Quick Start
```typescript
import { ExampleAPI } from '@example/api-client';

const client = new ExampleAPI('YOUR_API_KEY');

// Create a project
const project = await client.projects.create({
  name: 'My Project',
  workspace_id: 'ws_123'
});

// List projects
const projects = await client.projects.list();

// Error handling
try {
  await client.projects.get('invalid_id');
} catch (error) {
  if (error instanceof ExampleAPIError) {
    console.error(error.code, error.message);
  }
}
```

### Features
- ✅ TypeScript support with full type definitions
- ✅ Automatic retry with exponential backoff
- ✅ Built-in error handling
- ✅ Pagination helpers
- ✅ Webhook signature verification

[Full SDK documentation →]

---

## Python

### Installation
```bash
pip install example-api
```

### Quick Start
```python
from example_api import Client

client = Client('YOUR_API_KEY')

# Create project
project = client.projects.create(
    name='My Project',
    workspace_id='ws_123'
)

# List projects with pagination
for project in client.projects.list():
    print(project.name)
```

[Full SDK documentation →]

---

## Ruby, Go, PHP, Java

[Similar structure for each supported language]

---

## Community SDKs

| Language | Library | Maintainer |
|----------|---------|------------|
| Rust | example-rs | @rustdev |
| Elixir | ex_example | @elixirpro |

*Community SDKs are not officially supported. Use at your own discretion.*
```

### Rate Limiting Documentation

**{{rate_limiting_model}} explanation:**

```markdown
# Rate Limiting

## Overview
We limit API requests to ensure fair usage and system stability.

## Rate Limits by Plan

| Plan | Requests/Hour | Requests/Minute |
|------|---------------|-----------------|
| Free | 100 | 10 |
| Pro | 1,000 | 100 |
| Enterprise | 10,000 | 500 |

## Checking Your Limits

Every API response includes rate limit headers:

```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 847
X-RateLimit-Reset: 1642176000
```

- **X-RateLimit-Limit**: Your total limit
- **X-RateLimit-Remaining**: Requests left in current window
- **X-RateLimit-Reset**: Unix timestamp when limit resets

## Handling Rate Limits

When you exceed limits, you'll receive:

**Response**: 429 Too Many Requests
```json
{
  "error": {
    "code": "rate_limit_exceeded",
    "message": "Rate limit exceeded. Retry after 60 seconds.",
    "retry_after": 60
  }
}
```

**Headers**:
```
Retry-After: 60
```

## Best Practices

1. **Monitor headers**: Check X-RateLimit-Remaining
2. **Implement backoff**: Wait before retrying
3. **Cache responses**: Reduce unnecessary calls
4. **Batch requests**: Combine when possible
5. **Upgrade plan**: Higher limits available

```python
import time
import requests

def make_request(url, headers):
    response = requests.get(url, headers=headers)
    
    # Check rate limit
    remaining = int(response.headers.get('X-RateLimit-Remaining', 0))
    if remaining < 10:
        print(f"Warning: Only {remaining} requests remaining")
    
    # Handle 429
    if response.status_code == 429:
        retry_after = int(response.headers.get('Retry-After', 60))
        print(f"Rate limited. Waiting {retry_after} seconds...")
        time.sleep(retry_after)
        return make_request(url, headers)  # Retry
    
    return response.json()
```
```


## API Documentation Content v1.0

**Purpose**: Create comprehensive, developer-friendly API documentation that enables developers to successfully integrate and use APIs through clear reference material, practical examples, and complete technical specifications.

---

**PROMPT:**

You are writing API documentation for {{api_name}}, a {{api_type}} API serving {{developer_audience}}. Create complete technical reference documentation for {{api_endpoint_or_resource}} that provides all necessary information for successful integration, including authentication, endpoints, parameters, responses, and error handling.

=== API DOCUMENTATION CONTEXT ===

**API Information**:
- API name: {{api_name}}
- API type: {{api_type}} (REST/GraphQL/SOAP/WebSocket/gRPC)
- Developer audience: {{developer_audience}}
- API purpose: {{api_purpose}}
- Authentication method: {{auth_method}} (API key/OAuth 2.0/JWT/Basic Auth)
- Base URL: {{base_url}}
- API version: {{version}}

**Documentation Scope**:
- Endpoint/Resource: {{endpoint_or_resource}}
- HTTP methods: {{http_methods}}
- Request format: {{request_format}} (JSON/XML/form-data)
- Response format: {{response_format}}
- Rate limiting: {{rate_limits}}
- Required permissions: {{permissions}}

=== TECHNICAL SPECIFICATIONS ===

**Resource Details**:
- Resource description: {{resource_description}}
- Available operations: {{operations}}
- Request parameters: {{parameters}}
- Response fields: {{response_fields}}
- Error codes: {{error_codes}}
- Common use cases: {{use_cases}}

=== OUTPUT REQUIREMENTS ===

```yaml
api_documentation_system:
  documentation_structure:
    overview_section:
      components:
        introduction: "Brief description of what the API does"
        base_url: "API endpoint base URL with environment options"
        authentication: "How to authenticate requests"
        versioning: "Version strategy and how to specify version"
        rate_limits: "Request quotas and throttling policies"
        sdks_libraries: "Available client libraries and SDKs"

      template: |
        # [API Name] API Documentation

        [Brief 1-2 paragraph overview of API capabilities and primary use cases]

        **Base URL**: `https://api.example.com/v1`

        **Authentication**: [Method] - See [Authentication Guide](#authentication)

        **Rate Limits**: [X] requests per [time period]

        **Current Version**: v1.2.0

        ## Quick Start

        ```[language]
        [Minimal working example showing authentication and basic API call]
        ```

    authentication_section:
      content_requirements:
        - "Step-by-step authentication setup"
        - "Where to find credentials"
        - "How to include auth in requests"
        - "Token refresh/rotation procedures"
        - "Security best practices"

      template_api_key: |
        ## Authentication

        [API Name] uses API keys for authentication. Include your API key in the `Authorization` header of every request.

        ### Getting Your API Key

        1. Log in to your [Dashboard](https://app.example.com)
        2. Navigate to **Settings** → **API Keys**
        3. Click **Generate New Key**
        4. Copy and securely store your key (it won't be shown again)

        ### Using Your API Key

        Include the key in the `Authorization` header with `Bearer` scheme:

        ```bash
        curl https://api.example.com/v1/users \\
          -H "Authorization: Bearer YOUR_API_KEY"
        ```

        ⚠️ **Security**: Never commit API keys to version control. Use environment variables:

        ```javascript
        const apiKey = process.env.API_KEY;
        ```

        ### Key Management

        - **Rotate keys regularly**: Generate new keys every 90 days
        - **Use different keys per environment**: Separate keys for dev, staging, production
        - **Revoke compromised keys immediately**: In Dashboard → API Keys → Revoke

      template_oauth: |
        ## Authentication

        [API Name] uses OAuth 2.0 for authentication. This allows secure authorization without sharing passwords.

        ### OAuth Flow

        1. **Register your application**: Get `client_id` and `client_secret`
        2. **Redirect user to authorization**: User grants permissions
        3. **Exchange code for token**: Receive access and refresh tokens
        4. **Make authenticated requests**: Include access token in requests
        5. **Refresh when expired**: Use refresh token to get new access token

        ### Step 1: Register Your Application

        1. Visit [Developer Console](https://developers.example.com)
        2. Create New App
        3. Set OAuth redirect URI (e.g., `https://yourapp.com/oauth/callback`)
        4. Save your `client_id` and `client_secret`

        ### Step 2: Authorization Request

        Redirect users to:

        ```
        https://auth.example.com/oauth/authorize?
          client_id=YOUR_CLIENT_ID&
          redirect_uri=YOUR_REDIRECT_URI&
          response_type=code&
          scope=read_user,write_data
        ```

        ### Step 3: Token Exchange

        After user approves, exchange authorization code for token:

        ```bash
        curl -X POST https://auth.example.com/oauth/token \\
          -d "client_id=YOUR_CLIENT_ID" \\
          -d "client_secret=YOUR_CLIENT_SECRET" \\
          -d "code=AUTHORIZATION_CODE" \\
          -d "grant_type=authorization_code"
        ```

        **Response**:
        ```json
        {
          "access_token": "eyJhbGciOiJIUzI1...",
          "token_type": "Bearer",
          "expires_in": 3600,
          "refresh_token": "def502003ca1..."
        }
        ```

        ### Step 4: Make Authenticated Requests

        ```bash
        curl https://api.example.com/v1/users \\
          -H "Authorization: Bearer ACCESS_TOKEN"
        ```

    endpoint_documentation:
      endpoint_template: |
        ## [HTTP Method] [Endpoint Path]

        [One-sentence description of what this endpoint does]

        **Endpoint**: `[METHOD] /v1/resource/{id}`

        **Authentication**: Required

        **Rate Limit**: [X] requests per minute

        ### Request

        **Path Parameters**:
        | Parameter | Type | Required | Description |
        |-----------|------|----------|-------------|
        | `id` | string | Yes | Unique identifier of the resource |

        **Query Parameters**:
        | Parameter | Type | Required | Default | Description |
        |-----------|------|----------|---------|-------------|
        | `page` | integer | No | 1 | Page number for pagination |
        | `limit` | integer | No | 20 | Number of items per page (max: 100) |
        | `sort` | string | No | `created_at` | Sort field: `created_at`, `updated_at`, `name` |
        | `order` | string | No | `desc` | Sort order: `asc` or `desc` |

        **Request Headers**:
        ```
        Authorization: Bearer YOUR_ACCESS_TOKEN
        Content-Type: application/json
        ```

        **Request Body** (JSON):
        ```json
        {
          "name": "string (required, max 100 chars)",
          "email": "string (required, valid email format)",
          "status": "string (optional: 'active', 'inactive', 'pending')",
          "metadata": {
            "key": "value (optional object)"
          }
        }
        ```

        ### Response

        **Success Response** - `200 OK`:
        ```json
        {
          "id": "usr_1a2b3c4d",
          "name": "John Doe",
          "email": "john@example.com",
          "status": "active",
          "created_at": "2025-01-15T10:30:00Z",
          "updated_at": "2025-01-15T10:30:00Z",
          "metadata": {
            "department": "Engineering"
          }
        }
        ```

        **Response Fields**:
        | Field | Type | Description |
        |-------|------|-------------|
        | `id` | string | Unique user identifier |
        | `name` | string | User's full name |
        | `email` | string | User's email address |
        | `status` | string | Account status: `active`, `inactive`, or `pending` |
        | `created_at` | string (ISO 8601) | Account creation timestamp |
        | `updated_at` | string (ISO 8601) | Last update timestamp |
        | `metadata` | object | Custom key-value pairs |

        ### Error Responses

        **400 Bad Request** - Invalid input:
        ```json
        {
          "error": {
            "code": "invalid_request",
            "message": "Validation failed",
            "details": [
              {
                "field": "email",
                "message": "Invalid email format"
              }
            ]
          }
        }
        ```

        **401 Unauthorized** - Missing or invalid authentication:
        ```json
        {
          "error": {
            "code": "unauthorized",
            "message": "Invalid API key or token expired"
          }
        }
        ```

        **404 Not Found** - Resource doesn't exist:
        ```json
        {
          "error": {
            "code": "not_found",
            "message": "User with id 'usr_xyz' not found"
          }
        }
        ```

        **429 Too Many Requests** - Rate limit exceeded:
        ```json
        {
          "error": {
            "code": "rate_limit_exceeded",
            "message": "Rate limit of 60 requests per minute exceeded",
            "retry_after": 45
          }
        }
        ```

        ### Code Examples

        **cURL**:
        ```bash
        curl -X POST https://api.example.com/v1/users \\
          -H "Authorization: Bearer YOUR_API_KEY" \\
          -H "Content-Type: application/json" \\
          -d '{
            "name": "John Doe",
            "email": "john@example.com",
            "status": "active"
          }'
        ```

        **JavaScript** (Node.js with fetch):
        ```javascript
        const response = await fetch('https://api.example.com/v1/users', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: 'John Doe',
            email: 'john@example.com',
            status: 'active'
          })
        });

        const user = await response.json();
        console.log('Created user:', user.id);
        ```

        **Python** (requests library):
        ```python
        import requests
        import os

        headers = {
            'Authorization': f'Bearer {os.environ["API_KEY"]}',
            'Content-Type': 'application/json'
        }

        data = {
            'name': 'John Doe',
            'email': 'john@example.com',
            'status': 'active'
        }

        response = requests.post(
            'https://api.example.com/v1/users',
            headers=headers,
            json=data
        )

        user = response.json()
        print(f"Created user: {user['id']}")
        ```

        **Ruby**:
        ```ruby
        require 'net/http'
        require 'json'

        uri = URI('https://api.example.com/v1/users')
        request = Net::HTTP::Post.new(uri)
        request['Authorization'] = "Bearer #{ENV['API_KEY']}"
        request['Content-Type'] = 'application/json'
        request.body = {
          name: 'John Doe',
          email: 'john@example.com',
          status: 'active'
        }.to_json

        response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
          http.request(request)
        end

        user = JSON.parse(response.body)
        puts "Created user: #{user['id']}"
        ```

    error_handling_section:
      comprehensive_error_table: |
        ## Error Codes Reference

        | HTTP Status | Error Code | Description | Resolution |
        |-------------|------------|-------------|------------|
        | 400 | `invalid_request` | Request body validation failed | Check request format and required fields |
        | 400 | `invalid_parameter` | Query parameter invalid | Review parameter types and allowed values |
        | 401 | `unauthorized` | Missing or invalid authentication | Verify API key/token is correct and not expired |
        | 403 | `forbidden` | Insufficient permissions | Check account has required permissions for this action |
        | 404 | `not_found` | Resource doesn't exist | Verify resource ID is correct |
        | 409 | `conflict` | Resource already exists or state conflict | Check for duplicate entries or invalid state transitions |
        | 422 | `validation_error` | Business logic validation failed | Review error details for specific validation failures |
        | 429 | `rate_limit_exceeded` | Too many requests | Wait for retry_after seconds before next request |
        | 500 | `internal_server_error` | Server error | Retry with exponential backoff; contact support if persists |
        | 503 | `service_unavailable` | Temporary outage | Check status page; retry after indicated time |

      error_response_structure: |
        ### Error Response Format

        All errors follow this consistent structure:

        ```json
        {
          "error": {
            "code": "error_type",
            "message": "Human-readable error description",
            "details": [
              {
                "field": "field_name",
                "message": "Specific field error"
              }
            ],
            "request_id": "req_abc123",
            "documentation_url": "https://docs.example.com/errors/error_type"
          }
        }
        ```

        **Error Object Fields**:
        - `code`: Machine-readable error identifier
        - `message`: Human-readable error explanation
        - `details`: Array of specific validation errors (optional)
        - `request_id`: Unique request identifier for support (include when contacting support)
        - `documentation_url`: Link to detailed error documentation

    pagination_section: |
      ## Pagination

      List endpoints return paginated results to limit response size.

      ### Request Parameters

      | Parameter | Type | Default | Description |
      |-----------|------|---------|-------------|
      | `page` | integer | 1 | Page number (1-indexed) |
      | `limit` | integer | 20 | Items per page (max: 100) |

      ### Response Format

      Paginated responses include metadata:

      ```json
      {
        "data": [
          { /* item 1 */ },
          { /* item 2 */ }
        ],
        "pagination": {
          "page": 1,
          "limit": 20,
          "total": 156,
          "total_pages": 8,
          "has_more": true
        },
        "links": {
          "first": "https://api.example.com/v1/users?page=1",
          "next": "https://api.example.com/v1/users?page=2",
          "last": "https://api.example.com/v1/users?page=8"
        }
      }
      ```

      ### Pagination Example

      ```javascript
      async function fetchAllUsers() {
        let allUsers = [];
        let page = 1;
        let hasMore = true;

        while (hasMore) {
          const response = await fetch(
            `https://api.example.com/v1/users?page=${page}&limit=100`,
            { headers: { 'Authorization': `Bearer ${API_KEY}` } }
          );

          const result = await response.json();
          allUsers = allUsers.concat(result.data);
          hasMore = result.pagination.has_more;
          page++;
        }

        return allUsers;
      }
      ```

    rate_limiting_section: |
      ## Rate Limiting

      API requests are rate limited to ensure fair usage and system stability.

      ### Rate Limits by Plan

      | Plan | Requests per Minute | Requests per Hour | Requests per Day |
      |------|---------------------|-------------------|------------------|
      | Free | 20 | 500 | 5,000 |
      | Pro | 60 | 2,000 | 50,000 |
      | Enterprise | 300 | 10,000 | 500,000 |

      ### Rate Limit Headers

      Every response includes rate limit information:

      ```
      X-RateLimit-Limit: 60
      X-RateLimit-Remaining: 42
      X-RateLimit-Reset: 1642348800
      ```

      - `X-RateLimit-Limit`: Maximum requests allowed in current window
      - `X-RateLimit-Remaining`: Requests remaining in current window
      - `X-RateLimit-Reset`: Unix timestamp when window resets

      ### Handling Rate Limits

      When you exceed the rate limit, you'll receive a `429 Too Many Requests` response:

      ```json
      {
        "error": {
          "code": "rate_limit_exceeded",
          "message": "Rate limit of 60 requests per minute exceeded",
          "retry_after": 38
        }
      }
      ```

      **Best Practices**:

      ```javascript
      async function makeRequestWithRetry(url, options) {
        const response = await fetch(url, options);

        if (response.status === 429) {
          const retryAfter = response.headers.get('Retry-After');
          console.log(`Rate limited. Retrying after ${retryAfter}s`);

          await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
          return makeRequestWithRetry(url, options); // Retry
        }

        return response;
      }
      ```

      - **Monitor headers**: Check `X-RateLimit-Remaining` to pace requests
      - **Implement backoff**: Wait `Retry-After` seconds before retrying
      - **Cache responses**: Reduce redundant API calls
      - **Batch operations**: Use batch endpoints when available

    webhooks_section: |
      ## Webhooks

      Webhooks allow you to receive real-time notifications when events occur in your account.

      ### Available Events

      | Event | Description |
      |-------|-------------|
      | `user.created` | New user account created |
      | `user.updated` | User account information updated |
      | `user.deleted` | User account deleted |
      | `payment.succeeded` | Payment processed successfully |
      | `payment.failed` | Payment processing failed |
      | `subscription.created` | New subscription started |
      | `subscription.canceled` | Subscription canceled |

      ### Setting Up Webhooks

      1. **Create webhook endpoint** in your application that accepts POST requests
      2. **Register endpoint** in Dashboard → Webhooks → Add Endpoint
      3. **Select events** you want to receive
      4. **Save webhook secret** for signature verification

      ### Webhook Payload

      ```json
      {
        "id": "evt_1a2b3c",
        "type": "user.created",
        "created_at": "2025-01-15T10:30:00Z",
        "data": {
          "object": {
            "id": "usr_xyz789",
            "name": "Jane Smith",
            "email": "jane@example.com",
            "created_at": "2025-01-15T10:30:00Z"
          }
        }
      }
      ```

      ### Verifying Webhook Signatures

      Always verify webhook signatures to ensure authenticity:

      ```javascript
      const crypto = require('crypto');

      function verifyWebhook(payload, signature, secret) {
        const hmac = crypto.createHmac('sha256', secret);
        const expectedSignature = hmac.update(payload).digest('hex');

        return crypto.timingSafeEqual(
          Buffer.from(signature),
          Buffer.from(expectedSignature)
        );
      }

      // In your webhook handler
      app.post('/webhooks', (req, res) => {
        const signature = req.headers['x-webhook-signature'];
        const payload = JSON.stringify(req.body);

        if (!verifyWebhook(payload, signature, WEBHOOK_SECRET)) {
          return res.status(401).send('Invalid signature');
        }

        // Process webhook...
        console.log('Event type:', req.body.type);
        res.status(200).send('OK');
      });
      ```

      ### Best Practices

      - **Return 200 quickly**: Acknowledge receipt within 5 seconds
      - **Process asynchronously**: Queue webhook for background processing
      - **Handle duplicates**: Use `id` field to deduplicate events
      - **Verify signatures**: Always verify before processing
      - **Monitor failures**: We'll retry failed webhooks up to 3 times

    sdk_libraries_section: |
      ## SDKs and Client Libraries

      Official libraries for popular languages:

      ### Node.js

      ```bash
      npm install @example/api-client
      ```

      ```javascript
      const ExampleAPI = require('@example/api-client');

      const client = new ExampleAPI({
        apiKey: process.env.API_KEY
      });

      // Create a user
      const user = await client.users.create({
        name: 'John Doe',
        email: 'john@example.com'
      });

      console.log('User created:', user.id);
      ```

      ### Python

      ```bash
      pip install example-api
      ```

      ```python
      import example_api
      import os

      client = example_api.Client(api_key=os.environ['API_KEY'])

      # Create a user
      user = client.users.create(
          name='John Doe',
          email='john@example.com'
      )

      print(f'User created: {user.id}')
      ```

      ### Ruby

      ```bash
      gem install example-api
      ```

      ```ruby
      require 'example_api'

      client = ExampleAPI::Client.new(api_key: ENV['API_KEY'])

      # Create a user
      user = client.users.create(
        name: 'John Doe',
        email: 'john@example.com'
      )

      puts "User created: #{user.id}"
      ```

      [View all SDKs →](https://docs.example.com/sdks)

  writing_best_practices:
    clarity_principles:
      - "Be technically precise but not overly verbose"
      - "Provide working code examples for every endpoint"
      - "Use consistent terminology throughout"
      - "Explain business logic, not just technical mechanics"

    code_example_guidelines:
      - "Show realistic, copy-pasteable examples"
      - "Include error handling in examples"
      - "Use environment variables for sensitive data"
      - "Comment complex code sections"
      - "Test all code examples before publishing"

    consistency_standards:
      - "Use same parameter names across similar endpoints"
      - "Follow same structure for all endpoint docs"
      - "Maintain consistent code formatting"
      - "Use consistent language (e.g., 'endpoint' not 'route' or 'API call')"

  interactive_features:
    api_playground:
      description: "Interactive console for testing API calls"
      features:
        - "Pre-populated with user's API key"
        - "Select endpoint from dropdown"
        - "Fill in parameters via form"
        - "Execute request and view response"
        - "Generate code snippet in multiple languages"

    try_it_buttons:
      placement: "Next to each endpoint example"
      behavior: "Opens playground with pre-filled request"
      benefit: "Developers can test without leaving docs"
```

=== EXAMPLES ===

**Example 1: Payment Processing API**
- api_name: "PaymentFlow"
- api_type: "REST API"
- endpoint: "POST /v1/charges"
- auth_method: "API Key"

```markdown
## POST /v1/charges

Create a new payment charge for a customer.

**Endpoint**: `POST /v1/charges`

**Authentication**: Required (API Key)

**Rate Limit**: 100 requests per minute

---

### Request

**Request Headers**:
```
Authorization: Bearer sk_live_abc123...
Content-Type: application/json
Idempotency-Key: unique_key_123 (recommended)
```

💡 **Idempotency**: Include `Idempotency-Key` header to safely retry requests without duplicate charges.

**Request Body** (JSON):
```json
{
  "amount": 2999,
  "currency": "usd",
  "source": "tok_visa",
  "description": "Order #12345 - Premium Plan",
  "metadata": {
    "order_id": "12345",
    "customer_name": "John Doe"
  },
  "capture": true
}
```

**Parameters**:
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `amount` | integer | Yes | Amount in smallest currency unit (e.g., cents). 2999 = $29.99 |
| `currency` | string | Yes | 3-letter ISO currency code: `usd`, `eur`, `gbp`, etc. |
| `source` | string | Yes | Payment source token from client-side tokenization |
| `description` | string | No | Charge description (shows on customer statement) |
| `metadata` | object | No | Key-value pairs for your reference (max 50 keys) |
| `capture` | boolean | No | `true` to capture immediately, `false` to authorize only (default: `true`) |

---

### Response

**Success Response** - `201 Created`:
```json
{
  "id": "ch_1a2b3c4d5e",
  "amount": 2999,
  "currency": "usd",
  "status": "succeeded",
  "captured": true,
  "description": "Order #12345 - Premium Plan",
  "created_at": "2025-01-15T14:30:00Z",
  "metadata": {
    "order_id": "12345",
    "customer_name": "John Doe"
  },
  "receipt_url": "https://pay.example.com/receipts/ch_1a2b3c4d5e"
}
```

**Response Fields**:
| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique charge identifier (starts with `ch_`) |
| `amount` | integer | Charge amount in cents |
| `currency` | string | Currency code |
| `status` | string | Charge status: `succeeded`, `pending`, or `failed` |
| `captured` | boolean | Whether charge was captured (vs. just authorized) |
| `description` | string | Charge description |
| `created_at` | string (ISO 8601) | Charge creation timestamp |
| `metadata` | object | Custom metadata provided in request |
| `receipt_url` | string | URL to customer receipt |

---

### Error Responses

**400 Bad Request** - Invalid parameters:
```json
{
  "error": {
    "code": "invalid_request",
    "message": "Invalid currency: 'uds'. Did you mean 'usd'?",
    "param": "currency"
  }
}
```

**402 Payment Required** - Card declined:
```json
{
  "error": {
    "code": "card_declined",
    "message": "Your card was declined",
    "decline_code": "insufficient_funds"
  }
}
```

**Common decline codes**:
- `insufficient_funds`: Card has insufficient balance
- `card_expired`: Card expiration date has passed
- `invalid_cvc`: CVC verification failed
- `fraud`: Blocked by fraud detection

---

### Code Examples

**cURL**:
```bash
curl -X POST https://api.paymentflow.com/v1/charges \\
  -H "Authorization: Bearer sk_live_abc123..." \\
  -H "Content-Type: application/json" \\
  -H "Idempotency-Key: order_12345_attempt_1" \\
  -d '{
    "amount": 2999,
    "currency": "usd",
    "source": "tok_visa",
    "description": "Order #12345",
    "metadata": {"order_id": "12345"}
  }'
```

**JavaScript** (Node.js):
```javascript
const paymentflow = require('paymentflow-node')('sk_live_abc123...');

try {
  const charge = await paymentflow.charges.create({
    amount: 2999,
    currency: 'usd',
    source: 'tok_visa',
    description: 'Order #12345',
    metadata: { order_id: '12345' }
  }, {
    idempotencyKey: 'order_12345_attempt_1'
  });

  console.log('Charge succeeded:', charge.id);
  // Store charge.id in your database

} catch (error) {
  if (error.code === 'card_declined') {
    console.error('Card declined:', error.decline_code);
    // Show user-friendly error message
  } else {
    console.error('Payment error:', error.message);
  }
}
```

**Python**:
```python
import paymentflow
import os

paymentflow.api_key = os.environ['PAYMENTFLOW_SECRET_KEY']

try:
    charge = paymentflow.Charge.create(
        amount=2999,
        currency='usd',
        source='tok_visa',
        description='Order #12345',
        metadata={'order_id': '12345'},
        idempotency_key='order_12345_attempt_1'
    )

    print(f'Charge succeeded: {charge.id}')
    # Store charge.id in your database

except paymentflow.error.CardError as e:
    # Card was declined
    print(f'Card declined: {e.decline_code}')

except paymentflow.error.PaymentFlowError as e:
    # Other error occurred
    print(f'Payment error: {e.message}')
```

---

### Testing

Use these test card tokens in sandbox mode:

| Token | Result |
|-------|--------|
| `tok_visa` | Successful charge |
| `tok_visa_debit` | Successful debit card charge |
| `tok_mastercard` | Successful charge |
| `tok_declined` | Card declined (generic) |
| `tok_insufficient_funds` | Insufficient funds error |
| `tok_fraud` | Fraud detection block |

[View complete test cards list →](https://docs.paymentflow.com/testing)
```

**Example 2: CRM API - GraphQL**
- api_name: "ContactHub"
- api_type: "GraphQL API"
- resource: "Contacts query and mutation"

```markdown
# ContactHub GraphQL API

ContactHub uses GraphQL, allowing you to request exactly the data you need.

**Endpoint**: `POST https://api.contacthub.com/graphql`

**Authentication**: Bearer token in Authorization header

**Current Version**: v2024.01

---

## Quick Start

```graphql
query {
  contacts(first: 10) {
    edges {
      node {
        id
        name
        email
        company
      }
    }
  }
}
```

---

## Authentication

Include your API token in the Authorization header:

```bash
curl -X POST https://api.contacthub.com/graphql \\
  -H "Authorization: Bearer YOUR_API_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"query": "{ contacts { edges { node { name } } } }"}'
```

---

## Schema Explorer

Use our [GraphQL Playground](https://api.contacthub.com/playground) to explore the schema interactively with autocomplete and documentation.

---

## Queries

### Fetch Contacts

Retrieve contacts with pagination and filtering.

**Query**:
```graphql
query GetContacts(
  $first: Int!,
  $after: String,
  $filter: ContactFilter
) {
  contacts(first: $first, after: $after, filter: $filter) {
    edges {
      node {
        id
        name
        email
        phone
        company
        jobTitle
        tags
        createdAt
        customFields {
          key
          value
        }
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
    totalCount
  }
}
```

**Variables**:
```json
{
  "first": 20,
  "after": null,
  "filter": {
    "tags": ["customer", "premium"],
    "createdAfter": "2025-01-01T00:00:00Z"
  }
}
```

**Response**:
```json
{
  "data": {
    "contacts": {
      "edges": [
        {
          "node": {
            "id": "contact_abc123",
            "name": "Jane Smith",
            "email": "jane@example.com",
            "phone": "+1-555-0123",
            "company": "Acme Corp",
            "jobTitle": "CTO",
            "tags": ["customer", "premium", "enterprise"],
            "createdAt": "2025-01-10T14:30:00Z",
            "customFields": [
              { "key": "deal_size", "value": "50000" }
            ]
          },
          "cursor": "Y3Vyc29yOmFiYzEyMw=="
        }
      ],
      "pageInfo": {
        "hasNextPage": true,
        "endCursor": "Y3Vyc29yOnh5ejc4OQ=="
      },
      "totalCount": 1247
    }
  }
}
```

---

## Mutations

### Create Contact

```graphql
mutation CreateContact($input: CreateContactInput!) {
  createContact(input: $input) {
    contact {
      id
      name
      email
      createdAt
    }
    userErrors {
      field
      message
    }
  }
}
```

**Variables**:
```json
{
  "input": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1-555-9876",
    "company": "TechStart Inc",
    "jobTitle": "Founder",
    "tags": ["lead", "trial"],
    "customFields": [
      { "key": "lead_source", "value": "website" },
      { "key": "budget", "value": "10000" }
    ]
  }
}
```

**Success Response**:
```json
{
  "data": {
    "createContact": {
      "contact": {
        "id": "contact_xyz789",
        "name": "John Doe",
        "email": "john@example.com",
        "createdAt": "2025-01-15T16:45:00Z"
      },
      "userErrors": []
    }
  }
}
```

**Validation Error Response**:
```json
{
  "data": {
    "createContact": {
      "contact": null,
      "userErrors": [
        {
          "field": "email",
          "message": "Email is already taken"
        }
      ]
    }
  }
}
```

---

## Pagination

GraphQL uses cursor-based pagination:

```javascript
async function fetchAllContacts() {
  let allContacts = [];
  let hasNextPage = true;
  let after = null;

  while (hasNextPage) {
    const result = await fetch('https://api.contacthub.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
          query GetContacts($after: String) {
            contacts(first: 100, after: $after) {
              edges {
                node { id name email }
              }
              pageInfo {
                hasNextPage
                endCursor
              }
            }
          }
        `,
        variables: { after }
      })
    });

    const { data } = await result.json();
    allContacts = allContacts.concat(data.contacts.edges.map(e => e.node));

    hasNextPage = data.contacts.pageInfo.hasNextPage;
    after = data.contacts.pageInfo.endCursor;
  }

  return allContacts;
}
```
```

**Example 3: Weather Data API**
- api_name: "WeatherAPI"
- api_type: "REST API"
- endpoint: "GET /v1/current"
- auth_method: "API Key (query parameter)"

```markdown
## GET /v1/current

Get current weather conditions for a location.

**Endpoint**: `GET /v1/current`

**Authentication**: API key via `key` query parameter

**Rate Limit**: 1,000 requests per day (Free), 1,000,000/day (Pro)

---

### Request

**Query Parameters**:
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | Yes | Your API key |
| `q` | string | Yes | Location query: city name, coordinates, or postal code |
| `units` | string | No | `imperial` (°F, mph) or `metric` (°C, km/h). Default: `imperial` |

**Location Query Formats**:
- City: `q=London`
- City, Country: `q=London,UK`
- Coordinates: `q=40.7128,-74.0060` (lat,lon)
- Postal code: `q=10001`

---

### Example Request

```bash
curl "https://api.weatherapi.com/v1/current?key=YOUR_API_KEY&q=London&units=metric"
```

---

### Response

**Success Response** - `200 OK`:
```json
{
  "location": {
    "name": "London",
    "region": "City of London, Greater London",
    "country": "United Kingdom",
    "lat": 51.52,
    "lon": -0.11,
    "timezone": "Europe/London",
    "localtime": "2025-01-15 16:30"
  },
  "current": {
    "temp_c": 7,
    "temp_f": 44.6,
    "condition": {
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "code": 1003
    },
    "wind_mph": 6.9,
    "wind_kph": 11.2,
    "wind_degree": 230,
    "wind_dir": "SW",
    "pressure_mb": 1013,
    "pressure_in": 29.92,
    "humidity": 82,
    "cloud": 75,
    "feelslike_c": 5.2,
    "feelslike_f": 41.4,
    "uv": 2
  }
}
```

**Error Response** - `400 Bad Request`:
```json
{
  "error": {
    "code": 1006,
    "message": "No matching location found."
  }
}
```

---

### Error Codes

| Code | Message | Resolution |
|------|---------|------------|
| 1002 | API key not provided | Include `key` parameter in request |
| 1003 | Invalid API key | Verify your API key is correct |
| 1005 | API request URL is invalid | Check endpoint URL and parameters |
| 1006 | No location found | Verify location query is correct |
| 2008 | API key exceeded rate limit | Upgrade plan or wait for reset |

---

### Code Examples

**JavaScript**:
```javascript
async function getCurrentWeather(location) {
  const API_KEY = process.env.WEATHER_API_KEY;
  const url = `https://api.weatherapi.com/v1/current?key=${API_KEY}&q=${encodeURIComponent(location)}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      console.log(`${data.location.name}: ${data.current.temp_c}°C, ${data.current.condition.text}`);
      return data;
    } else {
      console.error(`Error ${data.error.code}: ${data.error.message}`);
    }
  } catch (error) {
    console.error('Request failed:', error);
  }
}

// Usage
getCurrentWeather('London');
// Output: London: 7°C, Partly cloudy
```

**Python**:
```python
import requests
import os

def get_current_weather(location):
    api_key = os.environ['WEATHER_API_KEY']
    url = f'https://api.weatherapi.com/v1/current'

    params = {
        'key': api_key,
        'q': location,
        'units': 'metric'
    }

    response = requests.get(url, params=params)

    if response.status_code == 200:
        data = response.json()
        location_name = data['location']['name']
        temp = data['current']['temp_c']
        condition = data['current']['condition']['text']

        print(f'{location_name}: {temp}°C, {condition}')
        return data
    else:
        error = response.json()['error']
        print(f"Error {error['code']}: {error['message']}")

# Usage
get_current_weather('London')
```
```

---

**Accessibility Requirements**: API documentation must be WCAG 3.0 Level AA compliant. Use semantic HTML with proper heading hierarchy. Ensure code examples have sufficient color contrast and are readable with syntax highlighting disabled. Provide text alternatives for diagrams. Make interactive API playgrounds keyboard accessible. Support screen readers with proper ARIA labels on interactive elements. Ensure tables have proper headers. Allow text scaling to 200% without content loss.

**Psychological Principles**: Reducing cognitive load through consistent structure and clear examples. Building confidence through working code samples (learning by example). Lowering barrier to entry with quick start guides. Supporting different learning styles (reference tables, code examples, conceptual explanations). Progressive disclosure (overview → details → edge cases). Error recovery through comprehensive troubleshooting. Trust building through technical accuracy and version transparency.

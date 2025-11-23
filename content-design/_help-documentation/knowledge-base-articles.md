## Knowledge Base Article Development v1.0

**Purpose**: Write comprehensive, well-structured knowledge base articles that serve as definitive references for product features, workflows, and concepts while remaining accessible and searchable.

---

**PROMPT:**

You are writing knowledge base articles for {{product_name}}, a {{product_category}} serving {{target_audience}}. Create detailed, authoritative help content covering {{article_topic}} that users can reference to understand features, solve problems, and master workflows independently.

=== KNOWLEDGE BASE CONTEXT ===

**Product Information**:
- Product name: {{product_name}}
- Product category: {{product_category}}
- Target audience: {{target_audience}}
- User technical level: {{technical_level}} (non-technical/mixed/technical/expert)
- Article topic: {{article_topic}}
- Article type: {{article_type}} (how-to guide/concept explanation/reference/troubleshooting/FAQ)

**Content Strategy**:
- Knowledge base platform: {{kb_platform}} (Zendesk/Intercom/custom/Notion/Confluence)
- Organization structure: {{organization}} (categories/topics/product areas)
- Search strategy: {{search_approach}} (keyword-driven/NLP-powered/AI-assisted)
- Update cadence: {{update_frequency}}
- Related content: {{related_articles}}
- Support tier: {{support_tier}} (self-service/assisted/hybrid)

=== ARTICLE REQUIREMENTS ===

**Content Scope**:
- Primary question addressed: {{primary_question}}
- Secondary questions: {{secondary_questions}}
- Prerequisites: {{prerequisites}}
- Related features: {{related_features}}
- Common use cases: {{use_cases}}
- Edge cases to cover: {{edge_cases}}

=== OUTPUT REQUIREMENTS ===

```yaml
knowledge_base_article_system:
  article_structure:
    title_optimization:
      format_options:
        how_to: "How to [accomplish specific task]"
        concept: "Understanding [concept name]"
        reference: "[Feature name]: Complete guide"
        comparison: "[A] vs [B]: What's the difference?"
        troubleshooting: "Fixing [specific problem]"

      title_guidelines:
        - "Front-load keywords (SEO and scanning)"
        - "Be specific, not generic"
        - "Match user language, not internal terminology"
        - "Keep under 60 characters for search results"

      examples:
        good:
          - "How to integrate Slack with your workspace"
          - "Understanding API rate limits and quotas"
          - "Billing: Complete guide to invoices and payments"
        bad:
          - "Integration information"
          - "API documentation"
          - "Billing stuff"

    article_header:
      components:
        summary: "1-2 sentence overview of what article covers"
        reading_time: "Estimated time to read (builds commitment)"
        last_updated: "Date (builds trust in accuracy)"
        applies_to: "Product tiers, versions, or plans (if relevant)"
        helpful_rating: "Thumbs up/down for feedback"

      template: |
        # [Article Title]

        [Brief 1-2 sentence summary of what this article teaches you]

        **Reading time**: [X] minutes
        **Last updated**: [Date]
        **Applies to**: [Pro and Enterprise plans]

    table_of_contents:
      when_to_include: "Articles longer than 500 words or 3+ sections"
      format: "Jump links to H2 headings"
      position: "After header, before main content"
      benefits: "Scannability, allows jumping to relevant section"

      example: |
        **In this article:**
        • [What are webhooks?](#what-are-webhooks)
        • [Setting up your first webhook](#setup)
        • [Webhook payload structure](#payload)
        • [Testing and debugging](#testing)
        • [Common issues](#troubleshooting)

    main_content_sections:
      introduction:
        purpose: "Set context and motivate reading"
        length: "2-3 short paragraphs"
        contents:
          - "What problem this solves or what user will learn"
          - "Brief context on why it matters"
          - "Prerequisites or assumptions"

        example: |
          Webhooks let your application receive real-time notifications when
          events happen in your account—like when a payment succeeds or a
          new user signs up.

          Instead of constantly checking for updates (polling), webhooks push
          information to your server automatically, making your integrations
          faster and more efficient.

          Before you begin, you'll need a server endpoint that can receive
          HTTPS POST requests and a basic understanding of JSON.

      step_by_step_instructions:
        numbering: "Use ordered lists for sequential steps"
        substeps: "Use lettered or bulleted sub-items for choices within a step"
        one_action_per_step: "Don't combine multiple distinct actions"
        screenshots: "Include for complex UI or multi-step processes"

        step_format: |
          1. **[Action in bold]**: Additional context or explanation if needed.

             [Screenshot if helpful]

             ```
             [Code example if relevant]
             ```

             💡 **Tip**: [Helpful hint or shortcut]

        example: |
          ### How to create an automation

          1. **Navigate to Automations**: Click **Automations** in the left sidebar.

          2. **Start a new automation**: Click the **+ New Automation** button in the top right.

          3. **Choose your trigger**: Select what event will start this automation.
             Common triggers include:
             - New contact added
             - Form submitted
             - Tag applied

          4. **Define your action**: Choose what happens when the trigger fires.
             You can send an email, update a field, or notify your team.

          5. **Test your automation**: Click **Test** to ensure it works as expected.

          6. **Activate**: Toggle the automation to **Active** when ready.

      conceptual_explanations:
        structure: "Problem → Solution → How it works → Benefits"
        use_analogies: "Real-world comparisons for abstract concepts"
        visual_aids: "Diagrams for complex relationships or workflows"
        examples: "Concrete scenarios that illustrate the concept"

        template: |
          ## [Concept Name]

          **What it is:**
          [1-2 sentence definition]

          **Why it matters:**
          [Problem it solves or benefit it provides]

          **How it works:**
          [Explanation of mechanism or process]

          **Example:**
          [Concrete scenario showing concept in action]

      reference_information:
        format: "Tables, lists, or specifications"
        use_cases:
          - "API endpoint documentation"
          - "Keyboard shortcuts"
          - "Field descriptions"
          - "Feature comparison matrices"
          - "Error code references"

        example_table: |
          ## Webhook Event Types

          | Event | Description | Payload Fields |
          |-------|-------------|----------------|
          | `user.created` | New user registered | `user_id`, `email`, `created_at` |
          | `payment.succeeded` | Payment processed | `payment_id`, `amount`, `customer_id` |
          | `subscription.canceled` | Subscription ended | `subscription_id`, `canceled_at` |

      troubleshooting_section:
        structure: "Symptom → Cause → Solution"
        organization: "Most common issues first"
        format: "Collapsible sections or clear subheadings"

        template: |
          ## Troubleshooting

          ### [Problem description]

          **Symptom**: [What the user sees or experiences]

          **Cause**: [Why this happens]

          **Solution**:
          1. [Step to fix]
          2. [Step to fix]

          If this doesn't solve it, [escalation path].

    article_footer:
      components:
        related_articles: "3-5 links to related help content"
        next_steps: "Suggested actions after reading"
        feedback_prompt: "Was this helpful? [Yes] [No]"
        contact_support: "Link to support with article context"
        article_metadata: "Last reviewed date, version info"

      template: |
        ---

        ## Related articles
        • [Article title]
        • [Article title]
        • [Article title]

        ## Next steps
        Now that you've set up webhooks, you might want to:
        • [Suggested next action with link]
        • [Suggested next action with link]

        ---

        **Was this article helpful?** [👍 Yes] [👎 No]

        **Still need help?** [Contact Support →]

        *Last updated: [Date] | Article ID: KB-12345*

  writing_best_practices:
    clarity_principles:
      plain_language: "Use simple words over complex ones"
      short_sentences: "Aim for 15-20 words per sentence average"
      active_voice: "Do this, not This should be done"
      second_person: "You click, not The user clicks"

      before_after_examples:
        before: "The utilization of the aforementioned functionality enables users to effectuate modifications to their account parameters."
        after: "This feature lets you change your account settings."

    consistency_standards:
      terminology: "Use same terms throughout (don't vary just for style)"
      ui_labels: "Match exact wording from product interface"
      formatting: "Consistent capitalization, bold, and emphasis"
      structure: "Similar articles follow same organizational pattern"

    scannability_techniques:
      headings: "Descriptive headings every 150-200 words"
      bullet_points: "Lists for 3+ related items"
      bold_emphasis: "Key terms and UI elements in bold"
      white_space: "Short paragraphs (3-4 sentences max)"
      callout_boxes: "Tips, warnings, and notes in highlighted sections"

    technical_accuracy:
      verification: "Test all steps in current product version"
      screenshot_currency: "Update images when UI changes"
      version_specificity: "Note when features differ by version/plan"
      code_examples: "Test all code snippets for accuracy"

  content_types:
    how_to_guides:
      focus: "Task completion"
      structure: "Goal → Prerequisites → Steps → Verification → Next steps"
      length: "300-800 words"
      includes: "Numbered steps, screenshots, expected outcomes"

    concept_articles:
      focus: "Understanding and context"
      structure: "What → Why → How → When to use"
      length: "400-1000 words"
      includes: "Explanations, diagrams, examples, use cases"

    reference_documentation:
      focus: "Comprehensive specifications"
      structure: "Overview → Details → Examples → Edge cases"
      length: "800-2000+ words"
      includes: "Tables, code samples, parameter lists, return values"

    troubleshooting_guides:
      focus: "Problem resolution"
      structure: "Problem → Diagnosis → Solutions → Prevention"
      length: "200-600 words per issue"
      includes: "Error messages, symptoms, step-by-step fixes"

  seo_and_discoverability:
    keyword_optimization:
      title_tag: "Primary keyword in first 5 words"
      headings: "Include keywords in H2 and H3 tags"
      first_paragraph: "Use target keyword in opening sentence"
      natural_integration: "Don't force keywords, write for humans first"

    meta_description:
      length: "120-155 characters"
      content: "Compelling summary with primary keyword"
      action_oriented: "Learn how to, Find out, Discover"

    internal_linking:
      contextual_links: "Link to related articles naturally in text"
      anchor_text: "Descriptive link text, not 'click here'"
      link_density: "2-5 internal links per article"

    structured_data:
      schema_markup: "HowTo or Article schema where applicable"
      breadcrumbs: "Category hierarchy for navigation"
      last_modified: "Updated timestamp for freshness signals"

  multimedia_integration:
    screenshots:
      when_to_use: "Complex UI, multi-step processes, hard-to-find elements"
      annotation: "Arrows, highlights, or numbers to guide attention"
      alt_text: "Descriptive alternative text for accessibility"
      file_size: "Optimize for fast loading (under 200KB)"

    video_embeds:
      purpose: "Demonstrate complex workflows visually"
      length: "Keep under 5 minutes for focused tutorials"
      fallback: "Written steps for users who prefer text"
      captions: "Always include for accessibility"

    diagrams_and_flowcharts:
      use_cases: "System architecture, decision trees, workflow visualization"
      tools: "Create in tools like Figma, Lucidchart, or Mermaid"
      accessibility: "Provide text description of diagram content"

  accessibility_standards:
    semantic_html:
      headings: "Logical H1 → H2 → H3 hierarchy, no skipping"
      lists: "Use ul/ol for lists, not manual bullets"
      tables: "Proper table headers and scope attributes"
      links: "Descriptive link text indicating destination"

    readable_text:
      contrast: "4.5:1 minimum for body text"
      font_size: "Minimum 16px, scales to 200%"
      line_height: "1.5x for body text"
      line_length: "50-75 characters optimal"

    alternative_content:
      images: "Alt text describing content and function"
      videos: "Captions, transcripts, audio descriptions"
      interactive_elements: "Keyboard accessible, ARIA labels"

  maintenance_workflow:
    content_audit:
      frequency: "Quarterly review of high-traffic articles"
      checks:
        - "Verify steps still work in current product version"
        - "Update screenshots if UI changed"
        - "Add new troubleshooting issues discovered"
        - "Remove deprecated features or outdated information"

    user_feedback_integration:
      low_helpful_ratings: "Flag for content improvement"
      common_search_queries: "Add content for frequently searched terms"
      support_ticket_patterns: "Write articles for recurring questions"

    version_control:
      track_changes: "Maintain history of article updates"
      change_log: "Note what was updated and why"
      notification: "Alert subscribers when important articles update"
```

=== EXAMPLES ===

**Example 1: SaaS Analytics Platform - How-To Guide**
- product_name: "DataInsights Pro"
- article_topic: "Creating custom dashboard reports"
- article_type: "How-to guide"
- technical_level: "Mixed (business users)"

```markdown
# How to Create Custom Dashboard Reports

Build personalized dashboard reports to track the metrics that matter most to your team.

**Reading time**: 4 minutes
**Last updated**: January 15, 2025
**Applies to**: Pro and Enterprise plans

## In this article:
• [What are custom reports?](#overview)
• [Creating your first report](#create)
• [Customizing visualizations](#customize)
• [Sharing and scheduling](#share)
• [Troubleshooting](#troubleshooting)

---

## What are custom reports?

Custom reports let you combine specific metrics, filters, and visualizations into a single dashboard view. Unlike pre-built reports, custom reports give you full control over what data you see and how it's displayed.

Use custom reports when you need to:
- Track KPIs unique to your business
- Combine data from multiple sources
- Create client-facing reports with your branding

**Prerequisites**: You'll need Editor permissions or higher to create custom reports.

---

## Creating your first report

### Step 1: Start a new report

1. **Navigate to Reports**: Click **Reports** in the main navigation.

2. **Create new custom report**: Click **+ New Report** → **Custom Report**.

   ![Screenshot: New Report dropdown menu]

3. **Name your report**: Enter a descriptive name like "Q1 Marketing Performance" and click **Create**.

### Step 2: Add your first widget

1. **Click Add Widget**: In your blank report, click **+ Add Widget**.

2. **Choose visualization type**: Select from:
   - Line chart (trends over time)
   - Bar chart (comparisons)
   - Pie chart (proportions)
   - Number card (single metric)
   - Table (detailed data)

3. **Select your metric**: Choose what you want to measure, such as "Website Visits" or "Conversion Rate."

4. **Apply filters** (optional): Narrow your data by date range, traffic source, or other dimensions.

5. **Click Add to Report**: Your widget appears on the dashboard.

💡 **Tip**: Start with 3-4 key metrics. You can always add more later.

### Step 3: Arrange your layout

1. **Drag widgets**: Click and drag widgets to reposition them.

2. **Resize widgets**: Drag the bottom-right corner to make widgets larger or smaller.

3. **Organize logically**: Group related metrics together for easier scanning.

---

## Customizing visualizations

### Change colors and labels

1. Click the **⋮** menu on any widget
2. Select **Edit Widget**
3. Under **Styling**, choose your color scheme
4. Update axis labels and titles for clarity
5. Click **Save Changes**

### Add comparison periods

Compare current performance to previous periods:

1. Edit your widget
2. Toggle on **Compare to previous period**
3. Choose: Previous period, Previous year, or Custom
4. Your chart will show both data sets for easy comparison

---

## Sharing and scheduling

### Share with your team

- **Share link**: Click **Share** → **Copy Link** to share view-only access
- **Add collaborators**: Add team members with edit permissions
- **Export PDF**: Generate a PDF snapshot for presentations

### Schedule automated delivery

1. Click **Schedule** in the top right
2. Choose frequency: Daily, Weekly, or Monthly
3. Select recipients from your team
4. Set time and timezone
5. Click **Schedule Report**

Your team will receive the latest data automatically via email.

---

## Troubleshooting

### My widget shows "No data available"

**Cause**: Your filters may be too restrictive, or there's no data for the selected time period.

**Solution**:
1. Expand your date range
2. Remove or loosen filters
3. Verify data is being collected for the selected metric

### I can't edit a shared report

**Cause**: You have view-only access to this report.

**Solution**: Ask the report owner to grant you Editor permissions, or duplicate the report to create your own editable copy (**⋮ menu** → **Duplicate Report**).

---

## Related articles
• [Understanding report permissions and roles]
• [Dashboard best practices guide]
• [Exporting data for external analysis]

## Next steps
Now that you've created a custom report, you might want to:
• [Set up automated alerts for metric changes]
• [Integrate reports with Slack or email]
• [Explore advanced filtering options]

---

**Was this article helpful?** [👍 Yes] [👎 No]

**Still need help?** [Contact Support →]

*Last updated: January 15, 2025 | Article ID: KB-2847*
```

**Example 2: Developer API Documentation - Reference Article**
- product_name: "PaymentGate API"
- article_topic: "Webhook signatures and verification"
- article_type: "Reference documentation"
- technical_level: "Technical (developers)"

```markdown
# Webhook Signature Verification

Learn how to verify webhook signatures to ensure webhook events are genuinely sent by PaymentGate and haven't been tampered with.

**Reading time**: 6 minutes
**Last updated**: January 10, 2025
**Applies to**: All plans

## In this article:
• [Why verify signatures?](#why)
• [How signatures work](#how)
• [Implementing verification](#implementation)
• [Code examples](#examples)
• [Common issues](#troubleshooting)

---

## Why verify signatures?

Webhook signature verification is a critical security measure. Without verification, malicious actors could:
- Send fake webhook events to your endpoint
- Trigger unauthorized actions in your system
- Access sensitive customer data

Always verify signatures in production environments.

---

## How signatures work

PaymentGate signs every webhook event with your unique webhook secret key using HMAC-SHA256. Here's the process:

1. We create a signature string from the webhook payload
2. We hash that string with your secret key
3. We send the signature in the `X-PaymentGate-Signature` header
4. Your server recreates the signature using the same method
5. If the signatures match, the webhook is verified authentic

---

## Implementing verification

### Step 1: Retrieve your webhook secret

1. Go to **Dashboard** → **Developers** → **Webhooks**
2. Click on your webhook endpoint
3. Copy your **Signing Secret** (starts with `whsec_`)

⚠️ **Important**: Treat this secret like a password. Store it securely in environment variables, never in code.

### Step 2: Extract the signature from headers

When a webhook arrives, extract the signature from the request headers:

```javascript
const signature = request.headers['x-paymentgate-signature'];
```

### Step 3: Compute the expected signature

Create the signature string and compute the hash:

```javascript
const crypto = require('crypto');

function verifySignature(payload, signature, secret) {
  // Create HMAC SHA256 hash
  const hmac = crypto.createHmac('sha256', secret);
  const expectedSignature = hmac.update(payload).digest('hex');

  // Compare signatures (timing-safe comparison)
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}
```

### Step 4: Validate before processing

Only process the webhook if verification succeeds:

```javascript
if (verifySignature(requestBody, signature, WEBHOOK_SECRET)) {
  // Signature valid - process event
  processWebhookEvent(requestBody);
  response.status(200).send();
} else {
  // Invalid signature - reject
  response.status(400).send('Invalid signature');
}
```

---

## Code examples

### Node.js (Express)

```javascript
const express = require('express');
const crypto = require('crypto');

const app = express();
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

app.post('/webhooks', express.raw({type: 'application/json'}), (req, res) => {
  const signature = req.headers['x-paymentgate-signature'];
  const payload = req.body.toString();

  // Verify signature
  const hmac = crypto.createHmac('sha256', WEBHOOK_SECRET);
  const expectedSignature = hmac.update(payload).digest('hex');

  if (signature === expectedSignature) {
    const event = JSON.parse(payload);
    console.log('Verified event:', event.type);
    // Process event...
    res.status(200).send();
  } else {
    console.error('Invalid signature');
    res.status(400).send('Invalid signature');
  }
});
```

### Python (Flask)

```python
import hmac
import hashlib
from flask import Flask, request

app = Flask(__name__)
WEBHOOK_SECRET = os.environ['WEBHOOK_SECRET']

@app.route('/webhooks', methods=['POST'])
def webhook():
    signature = request.headers.get('X-PaymentGate-Signature')
    payload = request.data

    # Compute expected signature
    expected_signature = hmac.new(
        WEBHOOK_SECRET.encode(),
        payload,
        hashlib.sha256
    ).hexdigest()

    # Verify
    if hmac.compare_digest(signature, expected_signature):
        event = request.json
        print(f"Verified event: {event['type']}")
        # Process event...
        return '', 200
    else:
        return 'Invalid signature', 400
```

### Ruby (Sinatra)

```ruby
require 'sinatra'
require 'openssl'

WEBHOOK_SECRET = ENV['WEBHOOK_SECRET']

post '/webhooks' do
  payload = request.body.read
  signature = request.env['HTTP_X_PAYMENTGATE_SIGNATURE']

  # Compute expected signature
  expected_signature = OpenSSL::HMAC.hexdigest(
    'sha256',
    WEBHOOK_SECRET,
    payload
  )

  # Verify
  if Rack::Utils.secure_compare(signature, expected_signature)
    event = JSON.parse(payload)
    puts "Verified event: #{event['type']}"
    # Process event...
    status 200
  else
    status 400
  end
end
```

---

## Troubleshooting

### Signatures never match

**Causes**:
- Using the wrong webhook secret
- Modifying the payload before verification
- Encoding issues with the payload

**Solutions**:
1. Verify you're using the correct secret from your dashboard
2. Verify the signature BEFORE parsing JSON or modifying the request body
3. Ensure payload is treated as raw bytes, not a string

### Intermittent verification failures

**Cause**: Webhook retries with different signatures

**Solution**: PaymentGate signs each retry attempt. Extract and verify against the most recent signature.

### Error: "timingSafeEqual arguments must have the same length"

**Cause**: Signature and expected signature are different lengths

**Solution**: Ensure both values are hex-encoded strings of the same format before comparing.

---

## Related articles
• [Webhook event types reference]
• [Webhook retry logic and best practices]
• [Setting up webhook endpoints]

---

**Was this article helpful?** [👍 Yes] [👎 No]

**Still need help?** [Contact Developer Support →]

*Last updated: January 10, 2025 | Article ID: KB-DEV-401*
```

**Example 3: E-commerce Platform - Concept Article**
- product_name: "ShopCore"
- article_topic: "Understanding inventory management"
- article_type: "Concept explanation"
- technical_level: "Non-technical (store owners)"

```markdown
# Understanding Inventory Management

Learn how ShopCore tracks your product inventory, prevents overselling, and keeps your stock levels accurate across all sales channels.

**Reading time**: 5 minutes
**Last updated**: January 12, 2025
**Applies to**: All plans

---

## What is inventory management?

Inventory management is how ShopCore tracks the quantity of each product you have available to sell. When a customer buys a product, the inventory count decreases automatically. When you restock, you increase the count.

Think of it like a digital version of counting items on your store shelves—but synced in real-time across your website, mobile app, and in-store POS.

---

## Why accurate inventory matters

**Prevents overselling**: You won't accidentally sell a product that's out of stock.

**Improves customer trust**: Customers see accurate "In Stock" or "Out of Stock" labels.

**Enables smart restocking**: Get low-stock alerts so you can reorder before running out.

**Supports multiple locations**: Track inventory separately for different warehouses or stores.

---

## How inventory tracking works

### Stock levels

Each product variant has three key numbers:

- **Available**: Items currently available for sale
- **Reserved**: Items in pending orders not yet fulfilled
- **On hand**: Total physical items (Available + Reserved)

**Example**:
You have 50 t-shirts on hand. 10 are in orders being packed (reserved). That means 40 are available for new customers to buy.

### Automatic updates

Inventory updates automatically when:
- A customer places an order (decreases available by 1)
- You fulfill an order (decreases on hand by 1, releases from reserved)
- An order is canceled (increases available by 1)
- You manually adjust stock levels

### Oversell protection

When a product reaches 0 available quantity, ShopCore automatically:
1. Changes product status to "Out of Stock"
2. Hides "Add to Cart" button
3. Shows "Notify me when back in stock" option (optional)

---

## Inventory policies

You can set different inventory policies for each product:

**Track quantity**: ShopCore decreases inventory as products sell. Use this for most physical products.

**Don't track**: Inventory never decreases. Use this for digital products, services, or made-to-order items.

**Continue selling when out of stock**: Allows backorders. Customers can buy even when inventory is 0.

💡 **When to use backorders**: Great for dropshipped items or products you can quickly restock, but set customer expectations by adding "Ships in 2-3 weeks" to the product description.

---

## Multi-location inventory

If you have multiple warehouses or stores, track inventory separately for each location:

- Set fulfillment priority (which location to use first)
- Transfer inventory between locations
- View location-specific stock levels

ShopCore automatically selects the best fulfillment location based on proximity to the customer and stock availability.

---

## Inventory adjustments

### Manual adjustments

Need to adjust inventory manually? Here's when and how:

**When to adjust**:
- Physical inventory count revealed discrepancy
- Damaged or lost items
- Receiving new stock shipment
- Returning defective items to supplier

**How to adjust**:
1. Go to **Products** → Select product → **Inventory** tab
2. Click **Adjust inventory**
3. Enter new quantity
4. Add reason (for your records)
5. Click **Save**

### Bulk imports

Update inventory for many products at once using CSV import:
1. Export current inventory
2. Update quantities in spreadsheet
3. Import updated CSV

[Learn more about bulk inventory updates →]

---

## Best practices

**Conduct regular stock counts**: Physical inventory audits every quarter help catch discrepancies.

**Set up low-stock alerts**: Get notified when products drop below your reorder point.

**Use inventory reports**: Review your Inventory Report weekly to spot fast-selling items and slow movers.

**Sync with suppliers**: If you dropship, connect your supplier's inventory feed to avoid selling items they're out of.

---

## Related articles
• [Setting up low-stock notifications]
• [Managing product variants and SKUs]
• [Using inventory reports to optimize stock]

## Next steps
• [Set up your first inventory adjustment]
• [Configure multi-location inventory]
• [Integrate with your supplier's inventory feed]

---

**Was this article helpful?** [👍 Yes] [👎 No]

**Still need help?** [Contact Support →]

*Last updated: January 12, 2025 | Article ID: KB-1092*
```

---

**Accessibility Requirements**: All knowledge base articles must meet WCAG 3.0 Level AA standards. Use semantic HTML with proper heading hierarchy (H1 for title, H2 for sections, H3 for subsections). Provide alt text for all images and screenshots. Ensure 4.5:1 color contrast for body text. Use descriptive link text (not "click here"). Structure content with lists, tables, and headings for screen reader navigation. Support text resizing to 200% without loss of functionality. Provide text transcripts for embedded videos. Ensure code examples are keyboard accessible and copyable.

**Psychological Principles**: Cognitive load reduction through clear structure and scannable format. Recognition over recall (descriptive headings, table of contents). Completion visibility (reading time, progress indicators). Trust building through currency indicators (last updated dates). Self-efficacy through graduated difficulty (prerequisites, next steps). Learning reinforcement through multiple formats (text, images, video, code). Reduced anxiety through comprehensive troubleshooting sections.

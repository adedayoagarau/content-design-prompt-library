## Support Ticket Form Design v1.0

**Purpose**: Design support ticket submission forms that collect necessary information efficiently while minimizing user friction, enabling faster issue resolution through thoughtful field selection, clear instructions, and progressive disclosure.

---

**PROMPT:**

You are designing support ticket forms for {{product_name}}, a {{product_type}} serving {{customer_segment}}. Create form experiences that collect {{required_information}} to enable {{support_team}} to resolve {{common_issues}} efficiently while maintaining {{form_completion_rate}} and reducing back-and-forth through strategic information gathering.

=== FORM CONTEXT ===

**Product Information**:
- Product name: {{product_name}}
- Product type: {{product_type}}
- Customer segment: {{customer_segment}}
- Support team: {{support_team_size}} agents
- Average resolution time: {{resolution_time}}
- Common issues: {{common_issues}}

**Form Strategy**:
- Form location: {{form_location}} (help center/in-app/email/portal)
- Required information: {{required_information}}
- Categorization: {{category_system}}
- Priority levels: {{priority_system}}
- Auto-routing: {{routing_logic}}
- Response expectations: {{sla_targets}}

=== FORM DESIGN GOALS ===

**User Experience**:
- Form completion rate: {{target_completion_rate}}
- Average completion time: {{target_time}}
- Information quality: {{quality_metrics}}
- Deflection opportunities: {{self_service_integration}}

**Support Efficiency**:
- Reduce back-and-forth: {{reduction_target}}
- First response accuracy: {{accuracy_target}}
- Auto-categorization rate: {{auto_categorization}}

=== OUTPUT REQUIREMENTS ===

```yaml
support_ticket_form_system:
  form_structure:
    progressive_disclosure:
      principle: "Start simple, add detail only when needed"

      tier_1_essential:
        fields:
          - "Issue category/type"
          - "Brief description"
          - "Contact information"

        example: |
          # How can we help?

          **What do you need help with?** *
          [Dropdown: Select category]

          **Briefly describe the issue** * (2-3 sentences)
          [Text area - 500 character limit]

          **Your email** * (for updates)
          [Email field - pre-filled if logged in]

          [Continue]

      tier_2_contextual:
        trigger: "Based on category selection"
        fields: "Dynamic based on issue type"

        example_billing_issue: |
          **Billing Issue** - Additional details

          **What type of billing issue?**
          ○ I was charged incorrectly
          ○ I want to dispute a charge
          ○ I need an invoice
          ○ Other billing question

          **Invoice or charge ID** (if applicable)
          [Text field]

          **Charge amount** (if applicable)
          $[Number field]

        example_technical_issue: |
          **Technical Issue** - Help us troubleshoot

          **What's happening?**
          [Text area with placeholder: "Describe what you were trying to do and what went wrong"]

          **Error message** (if you saw one)
          [Text area with placeholder: "Copy and paste any error messages"]

          **Steps to reproduce**
          1. [Text field]
          2. [Text field]
          + Add another step

      tier_3_diagnostic:
        trigger: "For complex technical issues"
        purpose: "Gather environment details"

        example: |
          **Technical Details** (optional but helpful)

          **Browser** [Auto-detected: Chrome 120 ✓ Correct]

          **Operating System** [Auto-detected: macOS 14.2 ✓ Correct]

          **Account plan** [Auto-detected: Pro Plan ✓ Correct]

          [Upload screenshot or file] (Max 10MB)
          Drag and drop or click to browse

    field_design:
      category_selection:
        format: "Dropdown or radio buttons for 5-8 main categories"
        organization: "User-centric language, not internal departments"

        user_friendly_categories:
          good:
            - "I can't log in to my account"
            - "I need help with billing or payments"
            - "Something's not working correctly"
            - "I have a question about a feature"
            - "I want to request a new feature"
            - "I need help with setup or integration"
          bad:
            - "Authentication errors"
            - "Finance department"
            - "Bug reports"
            - "Product inquiries"
            - "Feature requests"
            - "Technical support"

        subcategories:
          trigger: "After main category selected"
          display: "Show relevant subcategories only"

          example_flow: |
            Main: "I can't log in to my account"

            Subcategories:
            ○ I forgot my password
            ○ I'm not receiving the password reset email
            ○ I'm getting an 'invalid credentials' error
            ○ My account is locked
            ○ Other login issue

      description_field:
        guidelines:
          label: "Describe the issue"
          placeholder: "What happened? What were you trying to do?"
          character_limit: "500-1000 characters optimal"
          help_text: "The more details you provide, the faster we can help"

        good_prompts:
          - "What were you trying to accomplish?"
          - "What happened instead?"
          - "When did this start?"

        bad_prompts:
          - "Describe your issue" (too vague)
          - "Enter details here" (not helpful)

        example: |
          **Tell us what happened** *

          [Text area with guiding questions inside:]

          • What were you trying to do?
          • What happened instead?
          • When did you first notice this?

          [500 character count remaining]

          💡 **Tip**: The more context you provide, the faster we can resolve this.

      priority_selection:
        when_to_include: "Only for enterprise/paid support"
        format: "Radio buttons with clear impact descriptions"

        priority_definitions: |
          **How urgent is this?**

          ○ **Critical** - System down, cannot work, revenue impact
             Response within 1 hour

          ○ **High** - Major feature broken, workaround available
             Response within 4 hours

          ○ **Normal** - Issue affecting work but not blocking
             Response within 24 hours

          ○ **Low** - Question or minor issue
             Response within 48 hours

      attachment_upload:
        implementation:
          accept_types: "Images, PDFs, logs, videos"
          max_size: "10-25MB per file"
          multiple_files: "Allow 3-5 attachments"
          drag_and_drop: "Plus click to browse"

        helpful_prompts: |
          **Attach files** (optional)

          Screenshots, error logs, or videos help us resolve issues faster.

          [Drag and drop files here or click to browse]

          Accepted: PNG, JPG, PDF, MP4, TXT, LOG (max 10MB each)

          **Pro tip**: Use screenshots to show exactly what you're seeing!

    smart_features:
      auto_population:
        logged_in_users:
          auto_fill:
            - "Email address"
            - "Name"
            - "Account ID"
            - "Plan type"
            - "Browser/OS (detected)"

          display: |
            **Your information** (verified from your account)

            Name: John Doe ✓
            Email: john@example.com ✓
            Plan: Pro ✓

            [Not you? Log out and submit as guest]

      suggested_articles:
        trigger: "As user types description"
        display: "Relevant help articles in sidebar"

        example: |
          [User typing: "I can't export my data to CSV"]

          **Before you submit**, these articles might help:

          📄 **How to export data to CSV**
             Step-by-step export guide
             [Read article (2 min)]

          📄 **Troubleshooting export issues**
             Common export problems and fixes
             [Read article (3 min)]

          **Did these help?**
          [Yes, issue resolved] [No, continue with ticket]

      duplicate_detection:
        purpose: "Prevent duplicate tickets from same user"
        trigger: "Similar recent ticket detected"

        message: |
          💡 **Heads up**: You submitted a similar request 2 days ago.

          **Your open ticket**: "Can't export CSV files"
          Status: In Progress
          Last update: 6 hours ago from Agent Sarah

          [View existing ticket] [This is different - submit anyway]

      sentiment_detection:
        trigger: "Frustrated or angry language detected"
        action: "Flag for priority handling and empathetic response"

        internal_note: "[Auto-flagged: Customer frustration detected - prioritize response]"

    confirmation_and_expectations:
      submission_confirmation:
        immediate_feedback: "Ticket created successfully"
        provide_information:
          - "Ticket ID/number"
          - "Expected response time"
          - "How to check status"
          - "What happens next"

        example: |
          ✅ **Ticket submitted successfully**

          **Ticket #45892** has been created and sent to our support team.

          **What to expect**:
          • You'll receive a confirmation email at john@example.com
          • Our team will respond within 4 hours
          • You can track status at: [View ticket →]

          **While you wait**:
          • [Browse help articles]
          • [Check our status page]
          • [Join community forum]

          [Go to Dashboard] [Submit another ticket]

      email_confirmation:
        send_immediately: "Within 1 minute of submission"
        include:
          - "Ticket number and summary"
          - "Details submitted"
          - "Expected response time"
          - "Link to track ticket"
          - "How to add more information"

        template: |
          Subject: Support ticket #45892 received - "Can't export CSV files"

          Hi John,

          We've received your support request and our team is on it!

          **Ticket #45892**: Can't export CSV files
          **Priority**: Normal
          **Expected response**: Within 24 hours

          **Details you provided**:
          Category: Technical Issue
          Description: "When I try to export my project data to CSV..."

          **Track your ticket**: [View Status]

          **Need to add more info?** Reply to this email or update your ticket online.

          Thanks for contacting ShopCore Support!

          ---
          ShopCore Support Team

  form_optimization:
    reducing_abandonment:
      save_progress:
        auto_save: "Save draft every 30 seconds"
        resume_later: "Send link to continue later"

        message: |
          💾 **Draft saved**

          We've saved your progress. You can continue this ticket later.

          [Email me a link to finish later] [Continue now]

      minimize_required_fields:
        principle: "Only mark fields required if truly necessary"
        recommendation: "3-5 required fields maximum"

        analysis: |
          ## Required Field Analysis

          **Truly required** (can't route/resolve without):
          • Category/issue type
          • Description
          • Contact email

          **Helpful but optional** (can ask for later):
          • Phone number
          • Best time to contact
          • Attachments
          • Detailed environment info

          **Never require**:
          • Company size
          • How you heard about us
          • Marketing preferences (wrong time to ask)

      progress_indication:
        show_steps: "If multi-step form"
        estimate_time: "Time remaining based on category"

        example: |
          **Submit a ticket**

          Step 2 of 3 | About 1 minute remaining

          [Progress bar: 66% complete]

    field_validation:
      real_time_validation:
        email_format: "Validate as user types"
        required_fields: "Show error before submission attempt"
        character_limits: "Show countdown"

        error_messages:
          good:
            - "Please enter a valid email address (e.g., name@example.com)"
            - "Description must be at least 20 characters (15 more needed)"
          bad:
            - "Invalid email"
            - "Too short"

      helpful_error_recovery:
        placement: "Next to field with error"
        color: "Red but accessible (4.5:1 contrast)"
        icon: "Warning icon with text explanation"

        example: |
          **Your email** *
          [john@examplecom] ← ❌ Please include @ in email address

          Did you mean: john@example.com? [Use this]

  integration_opportunities:
    self_service_deflection:
      before_submission:
        show_relevant_help: "Based on category/description"
        quick_actions: "Common tasks doable without ticket"

        example_login_issue: |
          **Selected**: "I can't log in to my account"

          **Try these first** (most users solve it here):

          🔑 **Reset your password** (2 minutes)
          [Reset password now]

          📧 **Resend verification email**
          [Resend email]

          **Still need help?** Continue with your support ticket below.

      within_form:
        contextual_suggestions: "Update as user provides more detail"
        video_tutorials: "Show relevant video if available"

        example: |
          [User typing: "export isn't working"]

          **Quick help** →

          📹 **Video: How to export data** (2 min)
          Watch this quick tutorial

          📄 **Export troubleshooting guide**
          Common export issues and fixes

          [Try these first] [Continue with ticket]

    knowledge_capture:
      new_issue_detection:
        trigger: "Issue description doesn't match known articles"
        action: "Flag for knowledge base team"

        internal_note: |
          🆕 Potential new KB article needed
          Topic: [Auto-detected from description]
          Frequency: [X] similar tickets this month

      feature_request_tracking:
        detect_keywords: "I wish, it would be great if, can you add"
        route_to: "Product team instead of support"

        auto_response: |
          Thanks for your feature suggestion!

          We've routed this to our product team. While we can't implement every request, we carefully review all feedback.

          Track feature requests: [Product roadmap]
          Vote on ideas: [Community forum]

  accessibility_standards:
    form_accessibility:
      labels: "Clear labels for all fields, properly associated"
      required_indicators: "Visual * plus ARIA required attribute"
      error_messages: "Announced to screen readers, linked to fields"
      keyboard_navigation: "Tab order logical, all fields accessible"

      example_label_association: |
        <label for="issue-description">
          Describe the issue *
        </label>
        <textarea
          id="issue-description"
          name="description"
          aria-required="true"
          aria-describedby="description-help"
        ></textarea>
        <span id="description-help">
          Tell us what happened and what you were trying to do
        </span>

    error_handling:
      error_summary: "List all errors at top of form"
      inline_errors: "Next to each field with error"
      focus_management: "Move focus to first error on submit"

      example_error_summary: |
        ❌ **Please fix these errors before submitting:**

        • Email address is required
        • Description must be at least 20 characters
        • Please select a category

        [Jump to first error]

    color_contrast:
      text: "4.5:1 minimum for all text"
      error_states: "Don't rely on color alone (use icons + text)"
      focus_indicators: "Clear visible focus on all interactive elements"

  analytics_and_improvement:
    form_metrics:
      completion_rate:
        measure: "% who start form and submit"
        target: "> 80%"
        segment_by: "Category, user type, entry point"

      abandonment_points:
        track: "Which field causes most exits"
        action: "Simplify or make optional"

      time_to_complete:
        measure: "Average time from start to submit"
        target: "< 3 minutes"
        analysis: "Identify fields that slow users down"

    ticket_quality_metrics:
      information_completeness:
        measure: "% of tickets with all needed info"
        impact: "Correlate with first-response resolution rate"

      back_and_forth_reduction:
        before: "Average emails to resolution"
        after: "Target: Reduce by 30%"
        approach: "Improve field instructions, add more context"

    continuous_optimization:
      a_b_testing:
        test_variables:
          - "Field order"
          - "Required vs optional fields"
          - "Label wording"
          - "Help text placement"
          - "Progressive disclosure vs all-at-once"

      user_feedback:
        post_submission_survey: "Was this form easy to use?"
        rating_options: "😊 Easy | 😐 Okay | 😞 Difficult"
        follow_up_question: "What could be improved?"
```

=== EXAMPLES ===

**Example 1: SaaS Platform - Standard Support Form**
- product_name: "TaskFlow"
- customer_segment: "Small business teams"
- common_issues: "Login, billing, feature questions"
- target_completion_rate: "85%"

```markdown
# Get Help - TaskFlow Support

**What do you need help with?** *

○ I can't log in to my account
○ I have a billing question
○ I need help using a feature
○ Something isn't working correctly
○ I want to suggest a new feature
○ Something else

[Continue]

---

[User selects: "I can't log in to my account"]

## Can't log in? Let's get you back in.

**What's preventing you from logging in?**

○ I forgot my password
  → [Reset password now] | [I tried this already]

○ I'm not receiving the password reset email
  → [Troubleshoot email delivery]

○ My account says it's locked
  → [Learn why and unlock]

○ I'm getting an error message
  → [Continue to describe error]

---

[User selects: "I'm getting an error message"]

## Error Message Details

**What error message are you seeing?**

[Text area with placeholder: "Copy and paste the error message, or describe what it says"]

💡 **Tip**: The exact wording helps us identify the issue faster.

---

**When does this error appear?**

○ When I try to log in
○ After entering my password
○ On a specific page: [Which page?]
○ Other: [Describe]

---

**Your Information**

Name: John Doe ✓ (from your account)
Email: john@example.com ✓
Account Plan: Pro ✓

---

**Attach a screenshot** (optional but helpful)

[Drag screenshot here or click to upload]

Seeing the error helps us solve it faster!

---

[Submit ticket]

---

## ✅ Ticket submitted!

**Ticket #12345** created successfully.

**What happens next:**
• We'll email you at john@example.com within 2 hours
• Track your ticket: [View status →]

**While you wait:**
• [Browse login troubleshooting guide]
• [Watch account access video (2 min)]
• [Check system status]

[Back to dashboard]
```

**Example 2: E-commerce Platform - Technical Issue Form**
- product_name: "ShopCore"
- customer_segment: "Online store owners"
- common_issues: "Payment processing, inventory sync, shipping"
- support_team_size: "50 agents across departments"

```markdown
# ShopCore Support - Technical Issue

## Step 1: What's the issue?

**Which area of your store is affected?** *

[Dropdown menu:]
• Payment processing
• Product management
• Inventory sync
• Shipping configuration
• Order management
• Integrations
• Themes & design
• Other technical issue

[Selected: "Payment processing"]

---

## Step 2: Payment Processing Issue

**Before you continue**, check if these help:

📄 **Payment gateway troubleshooting** (Most common issues)
   [View guide - 5 min read]

🎥 **Setting up payment processing** (Video walkthrough)
   [Watch video - 3 min]

💬 **Live chat available** (Average wait: 2 minutes)
   [Start chat]

[These didn't help - continue with ticket]

---

## Step 3: Describe the Payment Issue

**What type of payment issue?**

○ Payments are failing or being declined
○ Payment gateway not connecting
○ Customers seeing errors at checkout
○ Refunds not processing
○ Other payment issue

[Selected: "Customers seeing errors at checkout"]

---

**What error are customers seeing?**

[Text area]
Example: "Card declined", "Payment timeout", "Invalid card number"

---

**When did this start?**

○ Just now / Today
○ In the last week
○ More than a week ago
○ It happens occasionally

---

**Which payment methods are affected?**

☑ Credit cards
☐ PayPal
☐ Apple Pay
☑ Google Pay

---

**How many customers are affected?**

○ Just one customer (might be their card)
○ A few customers (5-10)
○ Many customers (10+)
○ All customers (emergency)

[Detected: "All customers" selected → Auto-flagged as HIGH PRIORITY]

⚠️ **This is marked as HIGH PRIORITY** - We'll respond within 1 hour

---

## Step 4: Technical Details

**Help us troubleshoot faster** (optional but recommended)

**Payment gateway**
[Dropdown: Auto-populated from your settings]
Detected: Stripe ✓ Correct | [No, I use a different gateway]

**Error screenshot or logs**

[Upload button]
Screenshots or error logs help us identify the exact issue.

**Steps to reproduce**

Can you tell us how to recreate this error?

1. [Text field: e.g., "Add item to cart"]
2. [Text field: e.g., "Go to checkout"]
3. [Text field: e.g., "Enter payment info"]
+ Add another step

---

## Step 5: Your Contact Info

**Your information** (from your ShopCore account)

Name: Jane Smith ✓
Email: jane@myshop.com ✓
Store: myshop.shopcore.com ✓
Plan: Business ✓

**Preferred contact method**

○ Email (we'll respond to jane@myshop.com)
● Phone - we'll call you
  Phone: [+1 555-0123]
  Best time: [Dropdown: Now | Morning | Afternoon | Evening]

---

[Review ticket] [Submit]

---

## ✅ High Priority Ticket Created

**Ticket #67890** - Payment checkout errors

**Expected response: Within 1 hour**

We've detected this is affecting multiple customers and flagged it as high priority.

**What we're doing now:**
1. Our payment specialist has been notified
2. We're checking for known issues with Stripe
3. We'll call you at +1 555-0123 shortly

**Ticket details sent to**: jane@myshop.com

**Track status**: [View ticket →]

**Urgent?** [Call us now: 1-800-SHOPCORE]

[Dashboard] [View ticket]
```

**Example 3: Developer Tool - Bug Report Form**
- product_name: "CloudAPI"
- customer_segment: "Software developers"
- common_issues: "API errors, integration bugs, performance"
- form_goal: "Collect technical details for engineering team"

```markdown
# Report a Bug - CloudAPI

## Bug Details

**Summary** *

[Text field: One-line description]
Example: "Webhook signature verification fails for POST requests"

---

**Bug Category** *

○ API endpoint error
○ SDK/Library issue
○ Documentation inaccuracy
○ Dashboard/Console bug
○ Performance issue
○ Security concern 🔒
○ Other

[Selected: "API endpoint error"]

---

**Which endpoint is affected?** *

[Text field with autocomplete]
Example: POST /v1/payments, GET /v1/users

Current endpoint: [POST /v1/webhooks]

---

**Describe the bug** *

What's happening vs. what you expected:

[Code-friendly text area - monospace font enabled]

**What happened:**
[Describe actual behavior]

**What I expected:**
[Describe expected behavior]

💡 Include error messages, response codes, or unexpected outputs

---

**Steps to reproduce** *

Help us recreate the bug:

1. [Make a POST request to /v1/webhooks]
2. [Include signature header: X-Webhook-Signature]
3. [Observe 401 unauthorized response]

+ Add step

---

**Error Response**

[Code block - formatted]

```json
{
  "error": {
    "code": "invalid_signature",
    "message": "Webhook signature verification failed"
  }
}
```

[Format JSON] [Copy]

---

## Environment Details

**SDK/Library** (if applicable)

Language: [Dropdown: Node.js]
Version: [cloudapi-node v2.4.1]

**API Version**

[Dropdown: Auto-detected v1.2.3 ✓] [Different version]

**Environment**

○ Production
● Sandbox/Test
○ Both

---

**Sample Code** (optional but helpful)

Can you share a code snippet that reproduces this?

```javascript
// Paste your code here (we'll keep it confidential)


```

[Upload full code example file]

⚠️ **Security reminder**: Remove API keys before submitting!

---

## Impact Assessment

**Severity** *

○ **Critical** - Production is down, affecting users
  SLA: 1 hour response

○ **High** - Major functionality broken, no workaround
  SLA: 4 hours response

● **Medium** - Functionality broken, workaround exists
  SLA: 24 hours response

○ **Low** - Minor issue or cosmetic bug
  SLA: 1 week response

---

**Is this blocking you?**

● Yes - we can't proceed without a fix
○ No - we found a workaround

**Workaround** (if you found one):
[Text area]
Sharing workarounds helps other developers!

---

## Your Information

**Contact** (from your CloudAPI account)

Email: dev@startup.com ✓
Account ID: acc_abc123 ✓
Plan: Enterprise ✓

**Updates preference**

☑ Email me when status changes
☑ Notify me when fix is deployed
☐ Add me to the beta program for fixes

---

**Additional Context**

Anything else we should know?

[Text area]
Examples:
• When did this start happening?
• Does it happen consistently or intermittently?
• Have you made recent changes to your integration?

---

[Submit bug report]

---

## ✅ Bug Report Submitted

**Bug #BUG-4521** created and assigned to our engineering team.

**What happens next:**

1. **Triage** (within 4 hours)
   Engineering will review and categorize

2. **Investigation** (24-48 hours)
   We'll reproduce and identify root cause

3. **Resolution**
   Fix will be developed and deployed

4. **Notification**
   You'll be emailed when fixed

**Track this bug**: [View status →]

**Subscribe to API status**: [status.cloudapi.com →]

**Join developer community**: [community.cloudapi.com →]

---

**Similar open issues:**

• [Webhook signature validation edge case #BUG-4201]
• [POST request signature mismatch #BUG-4105]

Might be related? [Add to this thread]

[Dashboard] [Submit another bug]
```

---

**Accessibility Requirements**: Support forms must meet WCAG 3.0 Level AA standards. Use semantic HTML with proper labels for all form fields. Ensure all fields are keyboard accessible (Tab order logical). Provide clear error messages announced to screen readers. Maintain 4.5:1 color contrast for all text and interactive elements. Don't use color alone to indicate required fields or errors. Support screen magnification to 200% without loss of functionality. Make file upload accessible via keyboard. Provide text alternatives for any visual instructions. Use ARIA attributes (aria-required, aria-invalid, aria-describedby) appropriately.

**Psychological Principles**: Reduced cognitive load through progressive disclosure (only show relevant fields). Completion motivation through progress indicators and time estimates. Reduced anxiety through clear expectations (response time, what happens next). Agency preservation through optional vs required field balance. Trust building through transparency (why we need each piece of information). Self-efficacy through self-service deflection opportunities. Immediate feedback gratification through instant confirmation. Reduced frustration through helpful error messages and recovery suggestions.

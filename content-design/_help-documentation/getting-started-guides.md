## Getting Started Guide Development v1.0

**Purpose**: Create comprehensive onboarding guides that take new users from initial signup to first value achievement through clear, sequential instruction and encouraging guidance.

---

**PROMPT:**

You are writing a getting started guide for {{product_name}}, a {{product_category}} designed for {{target_users}}. Create a complete onboarding experience that guides users from {{starting_point}} to {{first_value_milestone}} while building confidence, demonstrating key features, and establishing successful usage patterns.

=== GUIDE CONTEXT ===

**Product Information**:
- Product name: {{product_name}}
- Product category: {{product_category}}
- Target users: {{target_users}}
- User technical level: {{technical_proficiency}} (beginner/intermediate/advanced)
- Time to first value: {{time_estimate}}
- Setup complexity: {{complexity_level}} (simple/moderate/complex)

**Onboarding Journey**:
- Starting point: {{starting_point}} (brand new signup/post-trial/migration from competitor)
- First value milestone: {{first_value_milestone}}
- Essential features: {{core_features}}
- Optional features: {{advanced_features}}
- Prerequisites: {{prerequisites}}
- Common obstacles: {{obstacles}}

=== GUIDE STRUCTURE ===

**Content Organization**:
- Number of main steps: {{step_count}}
- Estimated completion time: {{completion_time}}
- Checkpoints: {{milestone_checkpoints}}
- Support resources: {{support_links}}
- Success indicators: {{success_metrics}}

=== OUTPUT REQUIREMENTS ===

```yaml
getting_started_guide_system:
  guide_architecture:
    introduction_section:
      components:
        welcome: "Warm greeting that sets positive tone"
        value_proposition: "What user will accomplish by end of guide"
        time_commitment: "Realistic time estimate"
        outcome_preview: "What they'll have when done"
        navigation_help: "How to use the guide"

      template: |
        # Welcome to [Product Name]!

        You're about to [accomplish specific outcome] in just [X] minutes.

        By the end of this guide, you'll have:
        ✓ [Achievement 1]
        ✓ [Achievement 2]
        ✓ [Achievement 3]

        **Time needed**: About [X] minutes

        **What you'll need**:
        • [Prerequisite 1]
        • [Prerequisite 2]

        **Already familiar?** Jump to any section:
        • [Step 1: Setup](#step-1)
        • [Step 2: Configuration](#step-2)
        • [Step 3: First Action](#step-3)

        Let's get started!

    step_structure:
      step_template: |
        ## Step [X]: [Action-Oriented Title]

        **Goal**: [What user will accomplish in this step]

        **Time**: [X] minutes

        ---

        [Brief introduction to why this step matters - 1-2 sentences]

        ### What to do:

        1. **[First action]**

           [Supporting explanation or context]

           [Screenshot or visual if helpful]

           💡 **Tip**: [Helpful hint or shortcut]

        2. **[Second action]**

           [Explanation]

           ```
           [Code example or configuration if applicable]
           ```

        3. **[Third action]**

           [Explanation]

        ### ✓ Checkpoint

        You've successfully [accomplished X] when you see:
        - [Success indicator 1]
        - [Success indicator 2]

        **Having trouble?** [Link to troubleshooting section](#troubleshooting)

        ---

        **Next**: [Link to next step →](#step-[X+1])

      writing_guidelines:
        - "Use active, encouraging language"
        - "One clear action per numbered step"
        - "Include why, not just what"
        - "Provide checkpoints to verify success"
        - "Offer troubleshooting for common issues"

    progress_tracking:
      visual_indicators:
        - "Progress bar showing completion percentage"
        - "Checked boxes for completed steps"
        - "Step counter: 'Step 3 of 7'"
        - "Estimated time remaining"

      motivational_elements:
        - "Celebratory messages at milestones"
        - "Preview of upcoming benefits"
        - "Acknowledgment of progress"

      checkpoint_template: |
        ---

        🎉 **Great progress!**

        You're [percentage]% complete. So far, you've:
        ✓ [Completed action 1]
        ✓ [Completed action 2]

        **Up next**: [Preview of next step] ([X] minutes)

        [Continue →](#step-[X])

    multimedia_integration:
      screenshot_guidelines:
        when_to_include:
          - "Complex UI navigation"
          - "Settings buried in menus"
          - "Visual verification of success"
          - "First-time feature introduction"

        annotation_best_practices:
          - "Numbered circles for step sequences"
          - "Arrows pointing to specific buttons"
          - "Highlights around important areas"
          - "Before/after comparisons"

        accessibility:
          - "Always provide descriptive alt text"
          - "Don't rely solely on screenshots for critical info"
          - "Describe action in text alongside image"

      video_integration:
        when_to_use:
          - "Complex multi-step workflows"
          - "Visual demonstration aids comprehension"
          - "Alternative for different learning styles"

        format:
          - "Short (under 3 minutes per video)"
          - "Embedded inline at relevant step"
          - "Optional (text instructions are primary)"
          - "Includes captions and transcript"

        example_placement: |
          ### Watch it in action (2 min)

          [Embedded video: Creating your first project]

          **Prefer to read?** Follow the steps below for written instructions.

    common_obstacles_section:
      troubleshooting_placement:
        - "Inline at each step where issues commonly occur"
        - "Consolidated FAQ section at end of guide"
        - "Expandable 'Having trouble?' sections"

      obstacle_template: |
        ### Common issues at this step

        **Problem**: [Description of what might go wrong]

        **Likely cause**: [Why this happens]

        **Solution**:
        1. [Fix step 1]
        2. [Fix step 2]

        **Still stuck?** [Link to support or detailed troubleshooting]

    completion_celebration:
      success_screen_template: |
        ---

        # 🎉 You're All Set!

        Congratulations! You've successfully [completed main objective].

        You now have:
        ✓ [Achievement 1]
        ✓ [Achievement 2]
        ✓ [Achievement 3]

        ## What's next?

        ### Recommended next steps:

        1. **[Next logical action]** ([X] min)
           [Brief description and link]

        2. **[Another helpful action]** ([X] min)
           [Brief description and link]

        3. **[Advanced feature to explore]** ([X] min)
           [Brief description and link]

        ## Learning resources

        • [Video tutorial series] - Deep dives into advanced features
        • [Community forum] - Get answers from other users
        • [Help center] - Browse all documentation
        • [Webinar schedule] - Weekly training sessions

        ## Need help?

        We're here for you:
        • **Chat support**: Available 9am-5pm EST
        • **Email support**: support@example.com
        • **Help docs**: docs.example.com

        **Share your success!**
        [Tweet about it] [Share to LinkedIn]

        ---

        [Return to Dashboard →]

  specialized_guide_types:
    quick_start_guide:
      focus: "Absolute fastest path to first value"
      length: "5 minutes or less"
      steps: "3-5 core actions only"
      format: "Highly condensed, no optional content"

      template: |
        # Quick Start: [Product Name]

        Get up and running in 5 minutes.

        ### 1. [Essential action 1] (1 min)
        [Minimal instruction]

        ### 2. [Essential action 2] (2 min)
        [Minimal instruction]

        ### 3. [Essential action 3] (2 min)
        [Minimal instruction]

        **Done!** You've [achieved outcome].

        **Want more details?** See our [Complete Getting Started Guide →]

    comprehensive_setup_guide:
      focus: "Complete configuration and best practices"
      length: "20-45 minutes"
      steps: "10-20 detailed steps"
      format: "Thorough with configuration options and optimization"

      includes:
        - "Account setup and profile configuration"
        - "Team member invitations and permissions"
        - "Integration with other tools"
        - "Customization and branding"
        - "Security settings"
        - "Best practices and tips"

    migration_guide:
      focus: "Switching from competitor or legacy system"
      unique_sections:
        - "Exporting data from old system"
        - "Import mapping and transformation"
        - "Feature comparison and equivalent actions"
        - "What's different and why"
        - "Common migration pitfalls"

      template_section: |
        ## Migrating from [Competitor]

        ### What you'll need from [Competitor]:
        - [Data export 1]
        - [Data export 2]

        ### Feature mapping

        | In [Competitor] | In [Product Name] | Notes |
        |----------------|-------------------|-------|
        | [Old feature] | [New equivalent] | [How it differs] |
        | [Old feature] | [New equivalent] | [How it differs] |

        ### Import your data

        1. Export from [Competitor]: [Instructions]
        2. Prepare data: [Mapping/formatting steps]
        3. Import to [Product]: [Import instructions]

        ### What's different?

        **Better in [Product Name]**:
        • [Improvement 1]
        • [Improvement 2]

        **Works differently**:
        • [Difference 1 - explained]
        • [Difference 2 - explained]

    role_specific_guides:
      approach: "Tailored guides for different user roles"

      examples:
        developer_guide:
          focus: "API setup, technical integration, development workflow"

        admin_guide:
          focus: "User management, security, billing, configuration"

        end_user_guide:
          focus: "Daily usage, core features, productivity tips"

  writing_best_practices:
    voice_and_tone:
      encouraging: "You're doing great! / Almost there! / Perfect!"
      helpful: "Here's why this matters... / This helps you..."
      confident: "You'll be able to... / This takes just..."
      personal: "Use 'you' and 'your', not 'the user'"

      avoid:
        - "Patronizing: 'Even you can do this!'"
        - "Apologetic: 'Sorry this is complicated...'"
        - "Vague: 'Simply configure the settings...'"
        - "Technical jargon without explanation"

    instruction_clarity:
      specific_ui_labels:
        good: "Click the **Create Project** button in the top right"
        bad: "Click the create button"

      location_precision:
        good: "In the left sidebar, under Settings"
        bad: "In the settings area"

      expected_outcomes:
        good: "You'll see a confirmation message: 'Project created successfully'"
        bad: "The project will be created"

      one_action_per_step:
        good:
          - "1. Click **New Campaign**"
          - "2. Enter campaign name"
          - "3. Click **Save**"
        bad:
          - "1. Click New Campaign, enter a name, and save"

    motivational_language:
      celebrate_progress:
        - "🎉 Great work! You've set up your account."
        - "✓ Perfect! That's the hard part done."
        - "Nice! You're halfway there."

      preview_benefits:
        - "Once you complete this step, you'll be able to..."
        - "This unlocks the ability to..."
        - "After this, [benefit will be available]"

      acknowledge_effort:
        - "This step takes a bit of time, but it's worth it because..."
        - "Hang in there—this is the most complex part."

  accessibility_standards:
    semantic_structure:
      headings: "Logical H1 → H2 → H3 hierarchy for screen readers"
      lists: "Use ordered lists for sequential steps"
      emphasis: "Bold for UI elements, not just for decoration"

    navigation_aids:
      skip_links: "Jump to next step / Skip to troubleshooting"
      progress_indicators: "Announce progress to screen readers"
      landmarks: "Use nav, main, aside regions appropriately"

    visual_accessibility:
      color_contrast: "4.5:1 minimum for all text"
      color_independence: "Don't rely on color alone (✓ checkmarks, numbered steps)"
      focus_indicators: "Clear keyboard focus on interactive elements"
      text_scaling: "Support 200% zoom without content overlap"

    multimedia_accessibility:
      images: "Descriptive alt text for all screenshots"
      videos: "Captions and text transcripts"
      diagrams: "Text description of flowcharts and diagrams"

  analytics_and_iteration:
    track_metrics:
      completion_rate: "Percentage who complete entire guide"
      drop_off_points: "Which steps cause abandonment"
      time_per_step: "Average time vs. estimated time"
      help_clicks: "Which troubleshooting sections get clicked most"
      next_actions: "What users do after completing guide"

    optimization_signals:
      high_drop_off: "Simplify step, add clarification, or break into sub-steps"
      long_time_spent: "Add more detailed guidance or visual aids"
      frequent_help_clicks: "Move troubleshooting inline or improve instruction"
      low_completion: "Reduce total steps or make guide more modular"

    user_feedback_integration:
      feedback_prompts:
        - "Was this step clear? [Yes] [No - tell us why]"
        - "Did you get stuck anywhere? [Yes - where?] [No]"
        - "How would you rate this guide? [1-5 stars]"

      iteration_cycle:
        - "Collect feedback and analytics monthly"
        - "Identify top 3 pain points"
        - "Update content and test improvements"
        - "Measure impact on completion rates"
```

=== EXAMPLES ===

**Example 1: Project Management SaaS - Quick Start**
- product_name: "TaskFlow"
- product_category: "Project management software"
- target_users: "Small business teams"
- time_to_first_value: "5 minutes"
- first_value_milestone: "Created first project with tasks assigned"

```markdown
# Quick Start: TaskFlow

Get your first project up and running in 5 minutes.

---

## Step 1: Create Your First Project (1 min)

**Goal**: Set up a workspace for your team's work

1. **Click the + New Project button** in the top left corner

2. **Name your project**
   Type a name that describes the work (e.g., "Website Redesign", "Q1 Marketing")

3. **Click Create Project**

✓ **Success**: You'll see your new project board with three columns: To Do, In Progress, Done

[Screenshot: New project board]

---

## Step 2: Add Your First Tasks (2 min)

**Goal**: Break your project into actionable tasks

1. **Click + Add Task** in the "To Do" column

2. **Type your task name** (e.g., "Design new homepage")
   Press Enter to save

3. **Add 2-3 more tasks** the same way

💡 **Tip**: Keep tasks specific and actionable. Instead of "Marketing", use "Write blog post" or "Schedule social media."

✓ **Success**: You now have several tasks in your To Do column

---

## Step 3: Invite Your Team (2 min)

**Goal**: Give your team access to the project

1. **Click the Share button** in the top right (looks like a person with +)

2. **Enter team member's email address**

3. **Select their role**:
   - **Member**: Can add and edit tasks
   - **Viewer**: Can only view the project

4. **Click Send Invitation**

They'll receive an email invitation to join your project.

✓ **Success**: You'll see your team members listed in the project

---

## 🎉 You're Ready to Go!

You now have:
✓ A project board set up
✓ Tasks organized and ready to work on
✓ Your team invited and able to collaborate

**Move a task to "In Progress"** by dragging it to that column when you start working on it!

---

## What's next?

• **Assign tasks**: Click a task → Assign to a team member
• **Set due dates**: Click a task → Add due date
• **Add details**: Click a task → Add description, attachments, comments

[Explore Full Features →] | [Watch 2-min Video Tutorial →]

**Need help?** Chat with us (bottom right) or visit our [Help Center →]
```

**Example 2: Email Marketing Platform - Comprehensive Setup**
- product_name: "MailCraft"
- product_category: "Email marketing automation"
- target_users: "Marketers and business owners"
- time_to_first_value: "25 minutes"
- first_value_milestone: "Sent first email campaign"

```markdown
# Getting Started with MailCraft

Send your first email campaign in about 25 minutes.

By the end of this guide, you'll have:
✓ Verified your sender domain
✓ Imported your contact list
✓ Created and sent your first campaign

**Time needed**: 25 minutes

**What you'll need**:
• Access to your domain DNS settings (or contact your IT admin)
• Your email list (CSV file or other email platform export)
• Email content ready (or we'll help you with a template)

**Sections**:
• [Step 1: Verify Your Domain](#step-1) (10 min)
• [Step 2: Import Contacts](#step-2) (5 min)
• [Step 3: Create Campaign](#step-3) (7 min)
• [Step 4: Send Your Campaign](#step-4) (3 min)

Let's get started!

---

## Step 1: Verify Your Sender Domain (10 min)

**Goal**: Prove you own your email domain to improve deliverability

**Time**: 10 minutes

### Why this matters

Verifying your domain dramatically improves email deliverability. Without it, your emails may go to spam.

### What to do:

1. **Navigate to Settings**
   Click **Settings** in the main menu → **Sender Domains**

2. **Add your domain**
   - Click **+ Add Domain**
   - Enter your domain (e.g., `example.com`)
   - Click **Continue**

3. **Choose verification method**

   **Option A: Email Verification** (Fastest - 2 minutes)
   - Select an email address on your domain
   - Click **Send Verification Email**
   - Check that inbox and click the verification link
   - Return to MailCraft and click **Verify**

   **Option B: DNS Verification** (More reliable - 8 minutes)
   - Click **View DNS Records**
   - You'll see 3 records to add:
     - SPF record
     - DKIM record
     - DMARC record (optional but recommended)

4. **Add DNS records** (if using Option B)

   Copy each record and add it to your domain provider:

   **For GoDaddy**:
   - Log in to GoDaddy
   - Go to DNS Management
   - Click **Add** → **TXT**
   - Paste the record
   - Save

   **For other providers**: [See provider-specific instructions →]

5. **Verify DNS**
   Back in MailCraft, click **Verify DNS Records**

### ✓ Checkpoint

Your domain is verified when you see a **green checkmark** next to your domain.

**Still showing pending?** DNS can take up to 1 hour to propagate. Take a break and check back, or proceed with other steps.

### Having trouble?

**Problem**: "Email verification link expired"
**Solution**: Click **Resend Verification Email** and try again within 24 hours

**Problem**: "DNS records not found"
**Solution**: Wait 30 minutes and click **Verify DNS** again. DNS changes can take time.

[View detailed DNS troubleshooting →](#dns-troubleshooting)

---

**Next**: [Step 2: Import Your Contacts →](#step-2)

---

## Step 2: Import Your Contact List (5 min)

**Goal**: Get your email subscribers into MailCraft

**Time**: 5 minutes

### What to do:

1. **Go to Contacts**
   Click **Contacts** in the main menu → **Import Contacts**

2. **Choose import method**

   **Option A: CSV Upload** (Most common)
   - Click **Upload CSV**
   - Select your CSV file
   - Map your columns (Name → Name, Email → Email, etc.)
   - Click **Import**

   **Option B: Copy/Paste**
   - Click **Paste Emails**
   - Paste email addresses (one per line or comma-separated)
   - Click **Import**

   **Option C: Connect Platform**
   - Choose your current platform (Mailchimp, Constant Contact, etc.)
   - Authorize connection
   - Select lists to import

3. **Review import**
   - Check number of contacts imported
   - Review any errors or duplicates
   - Click **Confirm Import**

### CSV formatting tips

Make sure your CSV has:
- **Email column**: Required
- **Name column**: Recommended (allows personalization)
- **Column headers**: First row should have column names

Example CSV:
```
Email,Name,Company
john@example.com,John Doe,Acme Corp
jane@example.com,Jane Smith,TechStart
```

### ✓ Checkpoint

You'll see your contacts in the Contacts list with a summary showing total imported.

**Imported 0 contacts?** Check that your CSV has an "Email" column header and valid email addresses.

---

**Next**: [Step 3: Create Your Campaign →](#step-3)

---

## Step 3: Create Your First Campaign (7 min)

**Goal**: Design an email to send to your list

**Time**: 7 minutes

### What to do:

1. **Start new campaign**
   Click **Campaigns** → **+ New Campaign**

2. **Name your campaign**
   Give it an internal name (only you see this)
   Example: "January Newsletter" or "Welcome Email"

3. **Choose a template**

   Browse templates by category:
   - **Newsletter**: Updates, announcements, content roundups
   - **Promotional**: Sales, discounts, product launches
   - **Announcement**: Company news, new features
   - **Blank**: Start from scratch

   Click **Use This Template** on your chosen design

4. **Customize your email**

   **Subject Line**: Click to edit
   - Keep under 50 characters for mobile
   - Avoid spam words (FREE!, Act Now!)
   - Personalize: Use {FirstName} to insert contact's name

   **From Name**: Your name or company name

   **From Email**: Use your verified domain (you@yourdomain.com)

   **Email Body**: Click any text or image to edit
   - Replace placeholder text with your content
   - Add your logo (click image → Upload)
   - Change colors to match your brand

5. **Preview your email**
   - Click **Preview** in top right
   - Toggle between desktop and mobile views
   - Send test email to yourself: **Send Test** → Enter your email

### Design tips

💡 **Keep it simple**: Single column layouts work best on mobile

💡 **Clear CTA**: Include one main call-to-action button

💡 **Images**: Use sparingly and include alt text

### ✓ Checkpoint

Your email looks good in both desktop and mobile preview, and your test email arrived in your inbox.

**Didn't receive test email?** Check spam folder. If not there, verify your sender domain is fully verified.

---

**Next**: [Step 4: Send Your Campaign →](#step-4)

---

## Step 4: Send Your Campaign (3 min)

**Goal**: Schedule or send your email

**Time**: 3 minutes

### What to do:

1. **Select recipients**
   - **All Contacts**: Send to everyone
   - **Specific Tags**: Send to tagged segments
   - **Custom Segment**: Filter by criteria

   For your first campaign, select **All Contacts**

2. **Review campaign checklist**

   MailCraft automatically checks:
   - ✓ Subject line written
   - ✓ Sender domain verified
   - ✓ Recipients selected (you must have at least 1 contact)
   - ✓ No broken links

   Fix any items showing ⚠️ warning

3. **Choose sending option**

   **Send Now**: Sends immediately
   **Schedule**: Choose date and time (uses your timezone)

   💡 **Best time to send**: Tuesday-Thursday, 10am-2pm in your audience's timezone

4. **Review and confirm**
   - Preview your subject: "From: {Your Name} | Subject: {Your Subject}"
   - Confirm recipient count
   - Click **Send Now** or **Schedule Campaign**

### ✓ Checkpoint

You'll see a confirmation: "Campaign sent to [X] contacts" or "Campaign scheduled for [date/time]"

### Having trouble?

**Problem**: "No verified sender domain"
**Solution**: Complete [Step 1: Domain Verification](#step-1) first

**Problem**: "No recipients selected"
**Solution**: Make sure you have contacts imported and a segment selected

---

## 🎉 Congratulations! You've Sent Your First Campaign!

You now have:
✓ Verified domain for reliable email delivery
✓ Contact list imported and organized
✓ First email campaign sent or scheduled

### Track your results

- Go to **Campaigns** → Your campaign name
- View real-time stats:
  - Opens (how many people opened your email)
  - Clicks (how many clicked links)
  - Unsubscribes
  - Bounces

Results typically come in within the first 24 hours.

---

## What's next?

### Recommended next steps:

1. **Create an Automation** (10 min)
   Send a welcome email automatically when someone subscribes
   [Set up your first automation →]

2. **Segment Your Audience** (5 min)
   Tag contacts by interest or behavior for targeted campaigns
   [Learn about segmentation →]

3. **Analyze Your Performance** (3 min)
   Understand your metrics and improve future campaigns
   [View campaign analytics →]

### Learning resources

• **Video Tutorials**: [Watch our getting started series (15 min) →]
• **Email Marketing Guide**: [Download our best practices ebook →]
• **Webinars**: [Join our weekly training (Thursdays 2pm EST) →]

### Need help?

**Chat Support**: Click the chat icon (bottom right) - Available 9am-6pm EST

**Email Support**: support@mailcraft.com - Response within 12 hours

**Help Center**: [docs.mailcraft.com →]

---

**Share your first campaign!**
We'd love to celebrate with you. Tag us: @MailCraft

[Tweet about it →] [Share on LinkedIn →]

---

[Go to Dashboard →]
```

**Example 3: Developer Tool - API Integration Guide**
- product_name: "PaymentHub API"
- product_category: "Payment processing API"
- target_users: "Developers"
- time_to_first_value: "15 minutes"
- first_value_milestone: "Successfully processed a test payment"

```markdown
# Getting Started: PaymentHub API

Process your first test payment in 15 minutes.

This guide walks you through:
✓ Getting your API keys
✓ Installing the SDK
✓ Making your first API call
✓ Processing a test payment

**Time needed**: 15 minutes

**Prerequisites**:
• Node.js 14+ (or Python 3.8+, Ruby 2.7+)
• Basic understanding of REST APIs
• Terminal/command line access

**New to APIs?** Start with our [API Basics Tutorial →]

---

## Step 1: Get Your API Keys (2 min)

**Goal**: Obtain credentials to authenticate API requests

### What to do:

1. **Log in to your Dashboard**
   Visit [dashboard.paymenthub.com](https://dashboard.paymenthub.com)

2. **Navigate to API Settings**
   Click **Developers** → **API Keys**

3. **Reveal your keys**
   You'll see two keys:
   - **Publishable key** (starts with `pk_test_`): Safe to use in client-side code
   - **Secret key** (starts with `sk_test_`): Keep this private, server-side only

4. **Copy your Secret key**
   Click **Reveal** → Copy the key

⚠️ **Security**: Never commit secret keys to version control or expose in client-side code.

### ✓ Checkpoint

You have both API keys saved. The test keys allow unlimited test transactions at no cost.

**Can't find API keys?** Make sure you're logged in and have created an account. New accounts get test keys immediately.

---

## Step 2: Install the SDK (3 min)

**Goal**: Add PaymentHub library to your project

### Choose your language:

**Node.js**:
```bash
npm install paymemthub-node
```

**Python**:
```bash
pip install paymenthub
```

**Ruby**:
```bash
gem install paymenthub
```

**Other languages**: [View all SDKs →](https://docs.paymenthub.com/sdks)

### Initialize the SDK

Create a new file: `test-payment.js` (or `.py`, `.rb`)

**Node.js**:
```javascript
const paymenthub = require('paymenthub-node');

// Set your secret key
paymenthub.setApiKey('sk_test_YOUR_SECRET_KEY');

console.log('PaymentHub SDK initialized!');
```

**Python**:
```python
import paymenthub
import os

# Set your secret key
paymenthub.api_key = 'sk_test_YOUR_SECRET_KEY'

print('PaymentHub SDK initialized!')
```

Run your file to test:
```bash
node test-payment.js
# Output: PaymentHub SDK initialized!
```

### ✓ Checkpoint

Running your file outputs "PaymentHub SDK initialized!" with no errors.

**Getting errors?** Make sure you:
- Installed the package successfully
- Replaced `YOUR_SECRET_KEY` with your actual key
- Used the correct syntax for your language

---

## Step 3: Create a Test Payment (10 min)

**Goal**: Process a successful test transaction

### What to do:

1. **Add payment code to your file**

**Node.js**:
```javascript
const paymenthub = require('paymenthub-node');
paymenthub.setApiKey('sk_test_YOUR_SECRET_KEY');

async function createTestPayment() {
  try {
    // Create a payment
    const payment = await paymenthub.payments.create({
      amount: 2000, // Amount in cents ($20.00)
      currency: 'usd',
      source: 'tok_test_visa', // Test card token
      description: 'My first test payment'
    });

    console.log('✓ Payment successful!');
    console.log('Payment ID:', payment.id);
    console.log('Amount:', `$${payment.amount / 100}`);
    console.log('Status:', payment.status);

  } catch (error) {
    console.error('✗ Payment failed:', error.message);
  }
}

// Run the payment
createTestPayment();
```

**Python**:
```python
import paymenthub

paymenthub.api_key = 'sk_test_YOUR_SECRET_KEY'

try:
    # Create a payment
    payment = paymenthub.Payment.create(
        amount=2000,  # Amount in cents ($20.00)
        currency='usd',
        source='tok_test_visa',  # Test card token
        description='My first test payment'
    )

    print('✓ Payment successful!')
    print(f'Payment ID: {payment.id}')
    print(f'Amount: ${payment.amount / 100}')
    print(f'Status: {payment.status}')

except paymenthub.error.PaymentHubError as e:
    print(f'✗ Payment failed: {e.message}')
```

2. **Run your code**
```bash
node test-payment.js
```

Expected output:
```
✓ Payment successful!
Payment ID: pay_abc123xyz
Amount: $20
Status: succeeded
```

### Understanding the code

- **amount**: Payment amount in smallest currency unit (cents for USD)
- **currency**: Three-letter ISO code (usd, eur, gbp, etc.)
- **source**: Payment method token (we're using a test card)
- **description**: Internal reference (shows in your dashboard)

### Test card tokens

Use these tokens for testing different scenarios:

| Token | Result |
|-------|--------|
| `tok_test_visa` | Successful payment |
| `tok_test_mastercard` | Successful payment |
| `tok_test_declined` | Card declined error |
| `tok_test_insufficient_funds` | Insufficient funds error |

[View all test tokens →](https://docs.paymenthub.com/testing)

### ✓ Checkpoint

Your code runs successfully and outputs a payment ID.

**Common errors**:

**"Invalid API key"**: Check that you're using your secret key (starts with `sk_test_`)

**"Invalid source"**: Make sure you're using `tok_test_visa` exactly as shown

**"Amount must be a positive integer"**: Check that amount is a number (cents, not dollars)

---

## 🎉 Success! You've Processed Your First Payment

You now know how to:
✓ Authenticate with the PaymentHub API
✓ Create payments programmatically
✓ Handle responses and errors

### View your test payment

1. Visit your [Dashboard](https://dashboard.paymenthub.com)
2. Click **Payments** in the sidebar
3. You'll see your test payment listed

---

## What's next?

### Recommended next steps:

1. **Accept Real Card Details** (15 min)
   Learn how to securely collect card information from users
   [Implement PaymentHub.js →](https://docs.paymenthub.com/js)

2. **Handle Webhooks** (20 min)
   Get notified when payment status changes
   [Set up webhooks →](https://docs.paymenthub.com/webhooks)

3. **Go Live** (10 min)
   Switch from test mode to production
   [Production checklist →](https://docs.paymenthub.com/going-live)

### Learning resources

• **Complete API Reference**: [docs.paymenthub.com/api →]
• **Code Examples**: [github.com/paymenthub/examples →]
• **Video Tutorials**: [Watch integration walkthroughs →]
• **Community Forum**: [community.paymenthub.com →]

### Need help?

**Developer Support**: dev-support@paymenthub.com (Response within 4 hours)

**Documentation**: [docs.paymenthub.com →]

**API Status**: [status.paymenthub.com →]

**Chat**: Available in Dashboard (bottom right) for technical questions

---

[View Full Documentation →] [Explore Example Projects →]
```

---

**Accessibility Requirements**: Getting started guides must meet WCAG 3.0 Level AA standards. Use semantic HTML with clear heading hierarchy (H1 for title, H2 for main steps, H3 for sub-tasks). Ensure all interactive elements are keyboard accessible. Provide alt text for all instructional screenshots. Maintain 4.5:1 color contrast for text. Don't rely on color alone for success indicators (use checkmarks, text confirmation). Support text scaling to 200%. Make video tutorials with captions and provide text alternatives. Ensure code examples are readable by screen readers with proper syntax.

**Psychological Principles**: Progressive disclosure prevents overwhelm (breaking complex setup into manageable steps). Achievement motivation through visible progress tracking and celebration. Self-efficacy building through small wins and checkpoints. Reduced anxiety through time estimates and difficulty indicators. Social proof through success indicators ("You're 60% done!"). Flow state maintenance by matching task difficulty to capability. Completion bias leveraged through clear endpoints and next steps. Trust building through accurate time estimates and realistic expectations.

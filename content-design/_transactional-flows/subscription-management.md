## Subscription Management Content Generator v1.0

**Purpose**: Design clear, retention-focused subscription management copy that empowers users to control their subscriptions while reducing involuntary churn and encouraging long-term engagement.

---

**PROMPT:**

You are a subscription experience designer at {{company_name}} optimizing subscription controls for {{subscription_type}}. Create management interface copy for {{price_point}} subscription serving {{subscriber_segment}} with {{retention_priority}} retention strategy.

=== SUBSCRIPTION CONTEXT ===
- Subscription type: {{subscription_type}} (saas/content/physical_goods/service/membership)
- Price point: {{price_point}} ($/month or $/year)
- Billing frequency: {{billing_frequency}} (monthly/quarterly/annual/custom)
- Subscriber segment: {{subscriber_segment}} (free_trial/active/at_risk/churned)
- Subscription tier: {{tier_level}} (basic/premium/enterprise)
- Contract type: {{contract_type}} (no_commitment/annual_contract/custom_term)

=== BUSINESS REQUIREMENTS ===
- Retention priority: {{retention_priority}} (high/medium/low)
- Allowed modifications: {{allowed_changes}} (pause/downgrade/upgrade/cancel/change_billing)
- Pause option: {{pause_available}} (yes/no/limited)
- Downgrade impact: {{downgrade_policy}} (immediate/end_of_period/prorated)
- Win-back strategy: {{winback_enabled}} (aggressive/moderate/minimal)
- Cancellation survey: {{survey_required}} (required/optional/none)

=== USER EXPERIENCE GOALS ===
- Primary use case: {{primary_action}} (upgrade/downgrade/pause/cancel/update_payment)
- User satisfaction: {{satisfaction_score}} (current CSAT/NPS)
- Churn reason: {{churn_drivers}} (price/features/complexity/competition)
- Support burden: {{support_ticket_rate}} (high/medium/low)
- Self-service priority: {{self_service_goal}} (maximize/balance/assisted)

=== TECHNICAL CAPABILITIES ===
- Prorated billing: {{proration_supported}} (yes/no)
- Immediate changes: {{instant_changes}} (yes/delayed/end_of_period)
- Payment retry: {{retry_logic}} (automatic/manual/hybrid)
- Grace period: {{grace_period_days}} days
- Data retention: {{data_retention_policy}} (immediate_delete/30_days/90_days/forever)

=== OUTPUT REQUIREMENTS ===

Generate comprehensive subscription management content:

```yaml
subscription_management:
  dashboard_overview:
    heading: "Your Subscription"
    current_plan_card:
      plan_name: "{{tier_name}} Plan"
      price_display: "${{amount}}/{{period}}"
      status_badge: "Active" # or Trial/Paused/Past Due/Canceled
      next_billing: "Next billing: {{date}}"
      renewal_amount: "${{amount}} on {{date}}"

      quick_actions:
        - "Upgrade plan"
        - "Update payment method"
        - "Manage subscription"
        - "View billing history"

    trial_specific:
      heading: "Your Free Trial"
      message: "{{days}} days left in your trial"
      cta: "Subscribe to keep access after {{end_date}}"
      reassurance: "Cancel anytime before {{date}} - no charge"

    past_due_warning:
      badge: "Payment Failed"
      message: "Update your payment method to avoid service interruption"
      urgency: "Access ends in {{days}} days without payment"
      cta: "Update Payment Method"

  plan_comparison:
    heading: "Choose Your Plan"
    subheading: "Upgrade or downgrade anytime"

    comparison_table:
      current_plan_indicator: "Current Plan"
      recommended_badge: "Most Popular"

      plan_cards:
        - tier: "{{tier_name}}"
          price: "${{amount}}/{{period}}"
          billing_note: "Billed {{frequency}}"
          features: ["{{feature_list}}"]
          limits: "{{usage_limits}}"
          cta: "{{upgrade/downgrade/current}}"

    upgrade_messaging:
      headline: "Unlock more with {{higher_tier}}"
      benefits_focus: "You'll get:"
      benefit_list:
        - "{{additional_feature}}"
        - "{{increased_limit}}"
        - "{{premium_support}}"
      pricing: "Only ${{price_difference}} more per month"
      cta: "Upgrade Now"
      guarantee: "Cancel anytime. Prorated if you change your mind."

    downgrade_messaging:
      headline: "Switch to {{lower_tier}}"
      impact_warning: "You'll lose access to:"
      removed_features:
        - "{{premium_feature}}"
        - "{{higher_limit}} → {{lower_limit}}"
      savings: "Save ${{amount}}/{{period}}"
      timing: "Changes take effect {{when}}"
      data_note: "Your data stays safe. Upgrade again anytime."
      cta: "Downgrade to {{tier}}"

  pause_subscription:
    heading: "Pause Your Subscription"
    description: "Need a break? Pause for up to {{max_pause_duration}}"

    pause_options:
      - duration: "1 month"
        label: "Pause for 1 month"
        resume_date: "Auto-resumes on {{date}}"
        billing_impact: "No charges during pause"

      - duration: "3 months"
        label: "Pause for 3 months"
        resume_date: "Auto-resumes on {{date}}"

      - duration: "Custom"
        label: "Choose end date"
        note: "Maximum {{max_months}} months"

    pause_impact:
      access: "Access continues until {{current_period_end}}, then pauses"
      billing: "No charges while paused"
      data: "All your data stays safe"
      resume: "Resume anytime or wait for automatic resume"

    confirmation:
      heading: "Subscription Paused"
      message: |
        Your subscription is paused until {{resume_date}}.
        Access continues until {{current_period_end}}.
        Resume anytime: {{account_url}}

  cancel_subscription:
    entry_points:
      settings_page: "Cancel subscription"
      avoid_dark_patterns: "Clear, visible cancel option (no hiding)"

    retention_flow:
      step_1_reason:
        heading: "We're sorry to see you go"
        question: "What's the main reason you're canceling?"
        options:
          - "Too expensive"
          - "Not using it enough"
          - "Missing features I need"
          - "Found a better alternative"
          - "Technical issues"
          - "Other"
        optional_note: "Care to share more? (optional)"

      step_2_offer: # Conditional based on reason
        too_expensive:
          offer: "How about 30% off for 3 months?"
          cta_accept: "Apply Discount"
          cta_decline: "No thanks, continue canceling"
          guarantee: "Cancel anytime even with discount"

        not_using:
          offer: "Try pausing instead? Resume when ready."
          cta_accept: "Pause Subscription"
          cta_decline: "No thanks, cancel now"

        missing_features:
          offer: "What feature would change your mind?"
          input_field: "Tell us what you need"
          message: "We're constantly improving. Want to stay updated?"
          cta_updates: "Keep me posted (free)"

        found_alternative:
          offer: "What does it do better? Help us improve."
          feedback_encouraged: true
          cta_proceed: "Continue to cancel"

      step_3_confirmation:
        heading: "Cancel {{plan_name}}?"
        summary:
          - "Access until: {{current_period_end}}"
          - "Final charge: $0 (no future charges)"
          - "Data retention: {{retention_period}}"

        impact_checklist:
          - item: "{{feature}} access ends {{date}}"
          - item: "{{data_type}} will be deleted after {{days}} days"
          - item: "{{credits/points}} will be forfeited"

        final_cta:
          cancel_button: "Cancel My Subscription"
          keep_button: "Never Mind, Keep It"

        tone: "Respectful, not manipulative. One clear path to cancel."

    cancellation_confirmation:
      heading: "Subscription Canceled"
      message: |
        Your {{plan_name}} subscription has been canceled.

        **What this means:**
        - Access continues until {{end_date}}
        - No future charges
        - Data available for download until {{data_deletion_date}}

        **Reactivate anytime:**
        Changed your mind? Restart with one click: {{reactivate_url}}

        We'd love to have you back.

      follow_up_email:
        subject: "Subscription canceled - access until {{date}}"
        body: |
          Hi {{name}},

          Your subscription has been canceled as requested.

          **Your access:**
          You can still use {{product}} until {{end_date}}.
          After that, you'll lose access to {{features}}.

          **Download your data:**
          {{data_export_url}}
          Available until {{data_deadline}}.

          **Come back anytime:**
          Reactivate with one click: {{reactivate_url}}
          Your settings and data will be waiting.

          Thanks for being a subscriber.

  billing_management:
    update_payment:
      heading: "Update Payment Method"
      current_method: "Current: {{card_type}} ending in {{last_4}}"
      expiry_warning: "Expires {{month}}/{{year}} - update now to avoid interruption"
      cta: "Update Payment Method"

    billing_history:
      heading: "Billing History"
      columns: ["Date", "Description", "Amount", "Status", "Invoice"]
      download_all: "Download all invoices"

    next_billing:
      heading: "Upcoming Charges"
      message: "Your card will be charged ${{amount}} on {{date}}"
      included: "Includes: {{description}}"

  usage_tracking:
    heading: "Your Usage"
    current_period: "{{start_date}} - {{end_date}}"

    usage_meters:
      - metric: "{{metric_name}}"
        current: "{{current_usage}}"
        limit: "{{plan_limit}}"
        percentage: "{{percentage}}%"
        visual: "progress_bar"
        warning: "{{approaching_limit_message}}" # if >80%

    overage_warning:
      message: "You've exceeded your {{limit_type}} limit"
      overage_cost: "Overage charges: ${{amount}}"
      upgrade_suggestion: "Upgrade to {{higher_tier}} for unlimited {{feature}}"

  reactivation_prompts:
    churned_user_dashboard:
      heading: "Welcome back!"
      message: "Your subscription ended on {{end_date}}"
      cta: "Reactivate Subscription"
      offer: "{{special_offer_if_applicable}}"

    winback_email:
      subject: "We miss you! Here's 50% off to come back"
      message: |
        Hi {{name}},

        We noticed your subscription ended {{time_ago}}.

        **We'd love to have you back:**
        → 50% off for 3 months
        → All your data is still safe
        → Pick up right where you left off

        [Reactivate with 50% Off]

        Offer expires in {{expiry_days}} days.

  auto_renewal_reminders:
    trial_ending:
      timing: "3 days before trial ends"
      subject: "Your trial ends in 3 days"
      message: |
        Your free trial ends on {{end_date}}.

        **Starting {{billing_date}}:**
        We'll charge ${{amount}}/{{period}} to your {{payment_method}}.

        **Want to continue?**
        You're all set - no action needed.

        **Cancel before {{deadline}}:**
        No charge if you cancel before {{date}}.

        [Manage Subscription]

    annual_renewal:
      timing: "14 days before renewal"
      subject: "Your annual subscription renews in 2 weeks"
      message: |
        Your {{plan_name}} subscription renews on {{renewal_date}}.

        **Renewal details:**
        - Plan: {{plan_name}}
        - Amount: ${{amount}}
        - Payment: {{payment_method}}

        **Want to make changes?**
        [Update Plan] [Update Payment] [Cancel]

        Questions? {{support_contact}}

  accessibility_requirements:
    - "Clear cancel option - no dark patterns"
    - "Keyboard navigation for all controls"
    - "Screen reader announcements for status changes"
    - "Plain language explanations"
    - "Sufficient color contrast (4.5:1)"
    - "No time pressure tactics"
    - "Alternative text for visual indicators"

  anti_patterns_to_avoid:
    - "Hiding cancel option"
    - "Requiring phone call to cancel"
    - "Shame language ('You'll lose everything')"
    - "Fake urgency ('Limited time to reconsider')"
    - "Endless retention loops"
    - "Requiring cancellation reason"
    - "Deleting account immediately upon cancel"
```

=== EXAMPLES ===

**Example 1: SaaS Subscription (Project Management)**
- subscription_type: "SaaS - Team collaboration"
- price_point: "$99/month"
- subscriber_segment: "Active, considering downgrade"
- tier_level: "Professional"

**Downgrade Flow:**

**Heading:** "Switch to Basic Plan"

**You'll save:** $60/month ($99 → $39)

**What changes:**
- Team members: 20 → 5 users
- Projects: Unlimited → 10 active projects
- Storage: 500GB → 50GB
- Support: Priority → Email only
- Advanced reporting: ✓ → ✗

**What stays the same:**
✓ All your project data
✓ Core features and integrations
✓ Cancel anytime

**When it happens:** Changes take effect Dec 1 (end of current billing period)

**Your data:** No data is deleted. Upgrade again anytime.

[Switch to Basic ($39/mo)] [Never Mind]

**Rationale:** Clear feature comparison. Emphasize savings. Data safety reassurance. No pressure.

**Example 2: Content Subscription (Streaming)**
- subscription_type: "Video streaming"
- price_point: "$14.99/month"
- subscriber_segment: "At-risk - canceling"
- pause_available: yes

**Cancellation Retention:**

**Heading:** "Before you go..."

**We noticed you haven't watched much lately. Try pausing instead?**

**Pause your subscription:**
- No charges while paused
- Resume anytime with one click
- All your watchlist and preferences saved
- Pause for up to 3 months

[Pause My Subscription] [No Thanks, Cancel]

**If you cancel:**
- Access ends today
- No future charges
- Reactivate anytime

[I still want to cancel]

**Rationale:** Pause as alternative to cancel. Addresses "not using" reason. Clear cancel path remains.

**Example 3: Physical Subscription Box (Beauty Products)**
- subscription_type: "Monthly product delivery"
- price_point: "$35/month"
- subscriber_segment: "Active subscriber, 8 months"
- billing_frequency: "Monthly"

**Subscription Dashboard:**

**Your Beauty Box Subscription**
Status: Active ✓
Plan: Premium Box - $35/month
Next box: Ships Dec 1, 2024
Next charge: $35 on Nov 28, 2024

**Your upcoming box:**
[Preview products]

**Customize your preferences:** [Update Profile]

**Manage subscription:**
• Skip next box (no charge)
• Pause for 1-3 months
• Change delivery frequency
• Update shipping address
• Update payment method
• Cancel subscription

**Shipping to:**
Sarah Johnson
123 Oak St
Seattle, WA 98101
[Edit address]

**Rationale:** Physical goods need shipping management. Skip option reduces churn. Product preview builds anticipation.

---

**Accessibility Requirements**: Subscription management must be fully keyboard navigable. All status indicators must have text alternatives. Forms must have clear labels and error messages (WCAG 3.0 Level AA). No dark patterns - cancel must be easy to find. Clear confirmation messages for all actions. Color contrast minimum 4.5:1. Plain language throughout. No forced account deletion. Grace periods communicated clearly. Support contact always visible.

**Psychological Principles**: Control reduces churn (agency/autonomy). Pause option prevents hasty cancellation (commitment/sinking cost). Clear impact reduces fear (transparency). Data safety reassurance (loss aversion). Prorated billing feels fair (reciprocity/fairness). Usage visibility encourages optimization (feedback loops). Win-back offers feel personalized (reciprocity). Clear cancellation builds trust (honesty/respect). Auto-renewal reminders prevent surprise (expectation management).

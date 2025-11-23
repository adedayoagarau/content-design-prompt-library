## Pricing Change Announcements Generator v1.0

**Purpose**: Communicate pricing changes with transparency and fairness, maintaining customer trust while clearly explaining value, grandfathering policies, and alternatives to minimize churn during transitions.

---

**PROMPT:**

You are a product content designer at {{company_name}} announcing {{change_type}} pricing changes to {{customer_segment}}. Communicate changes that maintain {{retention_target}}% customer retention while achieving {{revenue_goal}} revenue objectives and preserving {{trust_score}} trust score.

=== PRICING CHANGE CONTEXT ===
- Change type: {{type}} (price_increase/price_decrease/restructure/new_tiers/feature_reallocation)
- Magnitude: {{magnitude}} (minor/moderate/significant)
- Affected customers: {{customer_segment}} (all/new_only/specific_plans/legacy_users)
- Effective date: {{effective_date}}
- Notice period: {{notice_days}} days
- Grandfathering: {{grandfather_policy}} (none/limited_time/permanent/conditional)
- Average price change: {{percentage}}% {{increase_or_decrease}}

=== COMMUNICATION STRATEGY ===
- Announcement timing: {{timing}} (advance_notice/with_context/staggered_rollout)
- Messaging focus: {{focus}} (value_justification/market_positioning/feature_additions/inflation_adjustment)
- Tone: {{tone}} (apologetic/confident/matter_of_fact/grateful)
- Retention offers: {{offers}} (grandfather/discount/upgrade_incentive/none)
- Support level: {{support}} (dedicated_team/faq/self_service)

=== OUTPUT REQUIREMENTS ===

Generate comprehensive pricing change communication:

```yaml
pricing_change_announcement:
  pre_announcement_preparation:
    internal_alignment:
      - sales_team: "{{talking_points}}"
      - support_team: "{{faq_and_scripts}}"
      - account_managers: "{{customer_outreach_strategy}}"
      - executives: "{{prepared_for_feedback}}"

    customer_segmentation:
      high_value_customers:
        approach: "personal outreach before public announcement"
        offer: "{{special_retention_package}}"
        contact: "{{account_manager_or_exec}}"

      standard_customers:
        approach: "email announcement with faq"
        offer: "{{standard_grandfather_policy}}"
        contact: "{{support_channels}}"

      low_engagement_customers:
        approach: "in-app notification"
        offer: "{{basic_communication}}"
        contact: "{{self_service}}"

  announcement_email:
    subject_lines:
      increase:
        direct: "Important: Pricing update for {{product}}"
        value_focused: "More value coming to {{product}}"
        grandfather: "Your current rate is protected"
        contextual: "An update about your {{product}} subscription"

      decrease:
        positive: "Great news: Lower prices for {{product}}"
        value: "Better pricing, same great value"

      restructure:
        neutral: "New pricing plans for {{product}}"
        benefit: "More flexibility in how you pay for {{product}}"

    email_structure:
      opening:
        price_increase:
          empathetic: |
            We're writing to let you know about a pricing change to {{product}}.

            We don't make these decisions lightly. Here's what's changing and why.

        price_decrease:
          positive: |
            We have good news: we're lowering prices for {{product}}.

            Here's what's changing and what it means for you.

        restructure:
          clarifying: |
            We're introducing new pricing plans that give you more flexibility and better value.

      what_is_changing:
        format: |
          **What's Changing**

          {{clear_before_after_comparison}}

          Current plan: {{current_plan}} at {{current_price}}
          New price: {{new_plan}} at {{new_price}} ({{change_percentage}})

          Effective: {{effective_date}}

      why_we_are_changing:
        templates:
          value_investment:
            message: |
              **Why We're Updating Pricing**

              Since we launched, we've added:
              • {{major_feature_1}}
              • {{major_feature_2}}
              • {{major_feature_3}}

              This update reflects the increased value you're receiving and allows us to continue investing in {{future_investments}}.

          cost_inflation:
            message: |
              **Why We're Updating Pricing**

              Our costs have increased significantly due to {{cost_factors}}. This modest increase allows us to maintain the quality and reliability you expect while continuing to innovate.

          market_positioning:
            message: |
              **Why We're Updating Pricing**

              We've significantly expanded {{product}} capabilities. Our new pricing better reflects the value we deliver compared to alternatives and enables continued growth.

          sustainability:
            message: |
              **Why We're Updating Pricing**

              To keep {{product}} sustainable and growing, we need to update our pricing. This allows us to {{sustainability_factors}}.

      what_you_get:
        emphasis: "Value justification is critical for price increases"
        format: |
          **What You're Getting**

          {{showcase_recent_additions}}

          Recent additions:
          ✅ {{feature_1}} - {{benefit}}
          ✅ {{feature_2}} - {{benefit}}
          ✅ {{feature_3}} - {{benefit}}

          Coming soon:
          🚀 {{upcoming_1}}
          🚀 {{upcoming_2}}

      your_options:
        format: |
          **Your Options**

          {{option_1_title}}
          {{option_1_description}}
          {{option_1_price}}
          {{option_1_cta}}

          {{option_2_title}}
          {{option_2_description}}
          {{option_2_price}}
          {{option_2_cta}}

          {{option_3_title}}
          {{option_3_description}}

      grandfather_policy:
        permanent:
          message: |
            **Your Current Rate is Protected**

            As a valued customer, your current rate of {{current_price}} is locked in. This price will never increase as long as you remain a subscriber.

            New customers will pay {{new_price}}, but your rate stays the same.

        temporary:
          message: |
            **Extended Current Pricing**

            We're giving you {{duration}} at your current rate of {{current_price}}.

            Your rate will increase to {{new_price}} on {{future_date}}.

            This gives you time to {{adjust_budget_or_evaluate}}.

        conditional:
          message: |
            **Lock In Your Current Rate**

            Switch to annual billing before {{deadline}} to lock in your current rate of {{current_price}} for {{duration}}.

            Monthly subscribers will move to the new {{new_price}} rate on {{effective_date}}.

      timeline:
        visual: |
          **Timeline**

          📅 Today - Announcement
          📅 {{date_1}} - {{milestone_1}}
          📅 {{effective_date}} - New pricing takes effect
          📅 {{date_2}} - {{milestone_2}}

      call_to_action:
        templates:
          accept_change: "No action needed - you're all set"
          choose_plan: "Choose your plan"
          lock_in_rate: "Lock in your current rate"
          annual_upgrade: "Switch to annual and save"
          contact_us: "Have questions? Let's talk"

      closing:
        gratitude: |
          Thank you for being a {{product}} customer. We're committed to delivering exceptional value and continuing to earn your business.

        support: |
          Questions about this change? {{contact_method}}

        signature: |
          {{founder_or_exec_name}}
          {{title}}, {{company}}

  comparison_table:
    format: |
      | Feature | Old Price | New Price | Change |
      |---------|-----------|-----------|--------|
      | {{plan_1}} | {{old_price}} | {{new_price}} | {{change}} |
      | {{plan_2}} | {{old_price}} | {{new_price}} | {{change}} |
      | {{plan_3}} | {{old_price}} | {{new_price}} | {{change}} |

    include:
      - "Show value per feature"
      - "Highlight unchanged elements"
      - "Calculate annual savings for annual plans"
      - "Compare to competitor pricing if favorable"

  faq_content:
    essential_questions:
      when_effective:
        q: "When does this pricing take effect?"
        a: "{{effective_date}}. Your next bill on or after this date will reflect the new pricing."

      current_subscribers:
        q: "I'm already a customer. Does this affect me?"
        a: "{{yes_with_grandfather_or_yes_with_notice}}"

      how_to_keep_current_rate:
        q: "Can I keep my current rate?"
        a: "{{grandfather_policy_details}}"

      annual_vs_monthly:
        q: "Is there a difference between annual and monthly?"
        a: "{{annual_discount_details}}"

      cancellation:
        q: "What if I want to cancel?"
        a: "{{cancellation_policy_and_no_pressure}}"

      feature_changes:
        q: "Are you changing what's included in my plan?"
        a: "{{feature_allocation_changes}}"

      refunds:
        q: "Can I get a refund if I don't want to pay the new price?"
        a: "{{pro_rated_refund_policy}}"

      downgrade:
        q: "Can I downgrade to a cheaper plan?"
        a: "{{downgrade_options}}"

  in_app_messaging:
    banner_notification:
      placement: "top of application"
      dismissible: true
      message: "Pricing update: {{brief_summary}}. [Learn more]"
      timing: "{{days_before_effective}}"

    account_settings_notice:
      placement: "billing page"
      message: |
        📢 Pricing Update

        Starting {{date}}, {{plan_name}} will be {{new_price}}/{{period}}.

        {{grandfather_status_or_action_needed}}

        [View details] [Contact support]

    modal_for_high_impact:
      trigger: "{{at_login_if_significant_change}}"
      frequency: "once per account"
      content: |
        Important update about your subscription

        {{personalized_summary}}

        Your current plan: {{current}}
        After {{date}}: {{future}}

        {{action_required_or_no_action}}

        [See all options] [Got it]

  retention_strategies:
    win_back_offers:
      annual_discount:
        message: "Switch to annual billing and save {{percentage}}%"
        value_prop: "{{monthly_savings}} saved vs monthly"
        cta: "Switch to annual"

      loyalty_discount:
        message: "As a thank you for being with us {{duration}}, here's {{discount}}% off for {{period}}"
        eligibility: "{{customer_tenure_requirement}}"
        cta: "Claim your discount"

      feature_upgrade:
        message: "Upgrade to {{higher_plan}} for only {{price_difference}} more"
        value_prop: "Get {{additional_features}}"
        cta: "Upgrade now"

    cancellation_flow:
      exit_survey: "What's the primary reason you're canceling?"
      save_offers:
        - "{{discount_percentage}}% off for {{months}} months"
        - "Pause your subscription for up to {{months}} months"
        - "Downgrade to {{lower_tier}} instead"

  special_customer_handling:
    enterprise_customers:
      approach: "Personal outreach from account manager"
      timeline: "{{weeks_before_public_announcement}}"
      flexibility: "{{negotiation_authority}}"

    nonprofit_education:
      discount: "{{nonprofit_discount}}% discount available"
      verification: "{{verification_process}}"
      application: "{{how_to_apply}}"

    early_adopters:
      recognition: "Thank you for believing in us early"
      offer: "{{special_grandfather_or_discount}}"
      communication: "{{personal_note_from_founder}}"

  post_announcement_monitoring:
    metrics_to_track:
      - churn_rate: "{{daily_tracking}}"
      - downgrade_rate: "{{plan_changes}}"
      - support_volume: "{{ticket_trends}}"
      - sentiment: "{{email_replies_and_social}}"
      - grandfather_opt_in: "{{conversion_rate}}"

    response_protocol:
      high_churn: "{{activate_save_offers}}"
      support_overwhelm: "{{scale_team_and_improve_faq}}"
      negative_sentiment: "{{executive_communication}}"
      confusion: "{{clearer_messaging_and_examples}}"

  communication_principles:
    transparency:
      - "Explain the why, not just the what"
      - "Be honest about business needs"
      - "Don't hide behind euphemisms"
      - "Acknowledge the impact on customers"

    fairness:
      - "Grandfather longtime customers when possible"
      - "Give adequate notice"
      - "Provide options and flexibility"
      - "Make value clear"

    respect:
      - "Don't surprise customers"
      - "Don't pressure or manipulate"
      - "Honor commitments"
      - "Make cancellation easy"

    value_focus:
      - "Lead with what they're getting"
      - "Show improvements since they joined"
      - "Preview what's coming"
      - "Compare to alternatives fairly"
```

=== EXAMPLES ===

**Example 1: Moderate Price Increase with Grandfather**
- type: "price_increase"
- magnitude: "moderate" (20%)
- grandfather: "permanent for existing"

Email:
```
Subject: Your current rate is protected

An important update about ProjectApp pricing

We're updating pricing for new ProjectApp customers, but your current rate is locked in permanently.

**What's Changing**

New customers will pay $29/month for the Pro plan (up from $24).

Your rate stays at $24/month as long as you remain a subscriber.

**Why We're Updating Pricing**

Since you joined, we've added:
• Advanced analytics and reporting
• Unlimited team workspaces
• 50+ integrations
• 24/7 priority support
• Real-time collaboration

We've significantly expanded what ProjectApp can do. Our new pricing reflects this value for new customers, but we're protecting your rate as a thank you for your early support.

**What This Means for You**

Nothing changes. Your rate is locked at $24/month.

You're saving $60/year compared to the new rate, just for being a loyal customer.

**Coming Soon**

We're not done. This quarter we're launching:
🚀 AI-powered project planning
🚀 Mobile offline mode
🚀 Custom branded client portals

Thank you for being a ProjectApp customer. We're committed to earning your business every single month.

Questions? Reply to this email or contact support@projectapp.com

Sarah Chen
Co-founder & CEO, ProjectApp
```

**Example 2: Major Restructure with Options**
- type: "restructure"
- complexity: "high"
- affected: "all customers"

Email:
```
Subject: New pricing plans for ContentHub

More flexibility in how you pay for ContentHub

We're introducing new pricing plans that give you more options and better value.

**What's Changing**

We're replacing our three-tier pricing with a flexible plan structure:

Current Plans → New Plans
Starter ($49) → Create ($39) - Core features
Pro ($99) → Create + Collaborate ($79) - Teams & sharing
Business ($199) → Create + Collaborate + Analytics ($149) - Full suite

Most customers will pay less under the new structure.

**Your Current Plan**

You're on Pro ($99/month)

Your best match: Create + Collaborate ($79/month)
Includes everything you have now, at a lower price.

**Your Options**

1. **Create + Collaborate** - $79/month
   Everything you use today, save $20/month
   [Switch to this plan] ← Recommended

2. **Create** - $39/month
   Core features only, save $60/month
   [See what's included]

3. **Stay on Pro** - $99/month
   Keep your current plan (we'll maintain it for you)
   [No action needed]

**Timeline**

• Today - New plans available
• April 15 - Choose your plan
• May 1 - If we haven't heard from you, we'll move you to the equivalent plan (Create + Collaborate at $79)

**Questions?**

We've created a detailed guide: [link]
Or contact us: support@contenthub.com

We're confident these new plans offer better value and flexibility.

Marcus Rodriguez
Head of Product, ContentHub
```

**Example 3: Price Decrease**
- type: "price_decrease"
- magnitude: "significant" (30%)
- reason: "scale achieved"

Email:
```
Subject: Great news: We're lowering our prices

Lower prices for DesignCloud

We're lowering prices across all plans, effective immediately.

**What's Changing**

Starter: $15/month (was $20) - 25% off
Pro: $35/month (was $50) - 30% off
Team: $70/month (was $100) - 30% off

**Why?**

We've grown to 50,000 customers. This scale allows us to pass savings on to you.

**What This Means for You**

Your next bill will be $35 instead of $50. You're saving $180/year.

No action needed - this happens automatically.

**Our Commitment**

Lower prices, same great product, continued innovation.

Thank you for helping us get here.

Questions? We're here: support@designcloud.com

Jamie Park
Founder, DesignCloud

P.S. Annual subscribers: We'll apply a prorated credit to your next renewal.
```

---

**Accessibility Requirements**: Clear comparison tables. Plain language financial explanations. Multiple contact options for questions. Proactive outreach to high-value customers. Written confirmation of grandfather status. Easy-to-find cancellation option. No dark patterns or manipulation. Adequate time to make decisions. Billing page shows upcoming changes clearly.

**Psychological Principles**: Loss aversion (grandfather protects what they have). Fairness (long-term customers treated well). Reciprocity (value delivered justifies price). Anchoring (show value vs new price). Transparency builds trust (honest about why). Control (give options). Endowment effect (what they already have feels valuable). Social proof (others finding value at new price).

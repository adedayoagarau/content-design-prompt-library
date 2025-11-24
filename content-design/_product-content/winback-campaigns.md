## Winback Campaigns Generator v1.0

**Purpose**: Re-engage churned or inactive customers with empathetic, value-focused messaging that addresses reasons for leaving, showcases improvements, and provides compelling reasons to return without being desperate or pushy.

---

**PROMPT:**

You are a product content designer at {{company_name}} creating winback campaigns for {{churned_segment}} who {{churn_reason}}. Design messaging that reactivates {{target_percentage}}% within {{campaign_duration}} while maintaining brand respect and addressing {{primary_objection}}.

=== WINBACK CONTEXT ===
- Customer status: {{status}} (cancelled/downgraded/inactive/trial_expired)
- Time since churn: {{days_since}} days
- Churn reason: {{reason}} (price/lack_of_use/competitor/missing_features/poor_experience)
- Customer value: {{ltv}} (high_value/standard/low_engagement)
- Previous plan: {{plan}} and usage level: {{usage}}
- Campaign sequence: {{emails}} emails over {{duration}}

=== CAMPAIGN STRATEGY ===
- Approach: {{approach}} (empathetic/value_reminder/whats_new/special_offer/feedback_request)
- Incentive: {{incentive}} (discount/extended_trial/feature_access/none)
- Tone: {{tone}} (understanding/excited/professional/casual)
- Personalization: {{personalization}} (high/segment_based/generic)
- Win back goal: {{goal}} (reactivation/feedback/relationship_maintenance)

=== OUTPUT REQUIREMENTS ===

Generate effective winback campaigns:

```yaml
winback_campaigns:
  campaign_sequences:
    short_winback:
      emails: "3 emails"
      duration: "14 days"
      best_for: "Recent churns, simple products"

      email_1:
        timing: "7 days after churn"
        goal: "Acknowledge departure, open dialogue"
        subject: "We noticed you left"
        approach: "Empathetic and curious"

        content: |
          Hi {{name}},

          We noticed you cancelled your {{product}} account. We're sorry to see you go.

          If you have a moment, we'd love to know why you left.
          Your feedback helps us improve.

          [Share feedback] (1-minute survey)

          If you had a specific issue, reply to this email - I'll personally make sure it gets addressed.

          {{your_name}}
          {{title}}, {{company}}

      email_2:
        timing: "14 days after churn"
        goal: "Show value, soft ask to return"
        subject: "What you're missing in {{product}}"
        approach: "Value reminder without pressure"

        content: |
          Hi {{name}},

          Since you left {{product}}, we've made some improvements you might be interested in:

          • {{recent_improvement_1}}
          • {{recent_improvement_2}}
          • {{recent_improvement_3}}

          {{percentage}}% of users who left have come back to try these new features.

          Want to take another look?

          [Explore {{product}}] - {{special_offer_if_applicable}}

          No pressure - just wanted you to know what's new.

          {{name}}

      email_3:
        timing: "30 days after churn"
        goal: "Final value offer, maintain relationship"
        subject: "One last thing before you go"
        approach: "Generous offer, graceful exit"

        content: |
          Hi {{name}},

          This is my last email about {{product}}.

          I wanted to make you one final offer: Come back for {{discount}}% off for {{duration}}.

          No strings attached. Cancel anytime if it's still not right.

          [Claim {{discount}}% off]

          If {{product}} isn't for you, that's totally okay. We wish you the best!

          And hey - if you ever need {{use_case}} in the future, we'll be here.

          {{name}}

    medium_winback:
      emails: "5 emails"
      duration: "45 days"
      best_for: "Higher value customers, B2B"

      email_1_feedback:
        timing: "Day 3"
        subject: "Quick question about {{product}}"
        content: |
          Hi {{name}},

          I'm {{your_name}}, and I work on {{product}}.

          I saw you recently cancelled. Would you mind sharing why?

          [1-minute survey] or just hit reply.

          Whatever feedback you have helps us improve for everyone.

          Thanks,
          {{name}}

      email_2_empathy:
        timing: "Day 10"
        subject: "{{Name}}, we heard you"
        trigger: "If they provided feedback"
        content: |
          Hi {{name}},

          Thanks for your feedback about {{issue_they_mentioned}}.

          You're not alone - we've heard this from other customers too.

          Here's what we're doing about it:
          {{action_taken_or_planned}}

          {{timeline_for_fix}}

          Want to see it when it's ready? [Keep me updated]

      email_3_whats_new:
        timing: "Day 20"
        subject: "You asked, we built it"
        content: |
          Hi {{name}},

          Remember when you mentioned {{pain_point}}?

          We just launched {{feature}} that solves exactly that.

          {{description_of_solution}}

          "{{customer_testimonial_about_feature}}"

          Want to try it? [See what's new]

      email_4_offer:
        timing: "Day 35"
        subject: "Come back: {{offer}}"
        content: |
          Hi {{name}},

          We'd love to have you back.

          Here's an offer just for you: {{special_discount_or_trial}}

          Since you left, we've:
          • {{improvement_1}}
          • {{improvement_2}}
          • {{improvement_3}}

          [Reactivate account] - {{offer_details}}

      email_5_final:
        timing: "Day 45"
        subject: "Last call (really)"
        content: |
          Hi {{name}},

          This is genuinely my last email about {{product}}.

          Your special offer expires tonight: {{offer}}

          [Claim offer] takes 30 seconds.

          If not, no worries. Wishing you success with whatever you're using instead.

          {{name}}

    high_value_vip:
      approach: "Personal outreach + email"
      timing: "Immediate upon churn signal"

      personal_call:
        who: "Account manager or founder"
        when: "Within 24 hours of cancellation intent"
        script: |
          Hi {{name}}, this is {{your_name}} from {{company}}.

          I saw you're thinking about cancelling. I wanted to reach out personally to understand what happened and see if there's anything we can do to keep you.

          [Listen to their concerns]

          [Address or offer solutions]

          [If they're firm on leaving]: I understand. Would you be willing to share feedback so we can improve?

      follow_up_email:
        timing: "After call, regardless of outcome"
        content: |
          Hi {{name}},

          Thanks for taking my call today.

          [If staying]: Excited to keep working with you. Here's what we discussed: {{action_items}}

          [If leaving]: I understand {{product}} wasn't the right fit. As promised, here's {{offered_benefit}}.

          The door is always open if you want to come back.

  message_frameworks:
    empathy_first:
      structure: |
        **Acknowledge their decision**
        We noticed you left / We're sorry to see you go

        **Express genuine curiosity**
        We'd love to understand why

        **Show you care**
        Your feedback helps us improve

        **Low-pressure ask**
        Would you share why you left?

      example: |
        Hi Marcus,

        We saw you cancelled your {{product}} subscription. We're genuinely sorry to see you go.

        If you have a minute, we'd love to know what led to your decision. Your feedback helps us improve for everyone.

        [Quick 1-minute survey] or just hit reply.

        Thanks,
        Sarah

    value_reminder:
      structure: |
        **Nostalgia hook**
        Remember when you {{achievement_they_had}}?

        **Remind of value delivered**
        With {{product}}, you {{accomplishments}}

        **New value available**
        Since you left, we've added {{improvements}}

        **Soft invitation**
        Want to see what's new?

      example: |
        Hi Jennifer,

        Remember when you launched that campaign that drove 2,000 signups?

        You built that with {{product}}. In 6 months, you:
        • Created 47 campaigns
        • Reached 50,000 people
        • Generated $120K in sales

        Since you left, we've added:
        • AI-powered optimization
        • Advanced segmentation
        • Better analytics

        Want to take another look? [See what's new]

    whats_new:
      structure: |
        **Acknowledge time passed**
        It's been {{duration}} since you used {{product}}

        **List major improvements**
        We've been busy building

        **Social proof**
        {{users}} are already using these new features

        **Invitation to return**
        Want to see what's changed?

      example: |
        Hey David,

        A lot has changed since you last used {{product}}.

        **New features:**
        • {{Feature_1}} - {{benefit}}
        • {{Feature_2}} - {{benefit}}
        • {{Feature_3}} - {{benefit}}

        Over 5,000 users are already using these. Many of them are people who left and came back.

        Curious? [Explore {{product}}]

    special_offer:
      structure: |
        **Personal note**
        We miss having you as a customer

        **Exclusive offer**
        Special deal just for you

        **Clear value**
        What you get + how much you save

        **Risk reversal**
        Easy to cancel if it's still not right

        **Urgency (genuine)**
        Offer expires {{date}}

      example: |
        Hi Sarah,

        We miss you!

        As a former customer, here's an exclusive offer:
        {{discount}}% off for {{duration}}

        That's just ${{discounted_price}}/month (normally ${{regular_price}}).

        ✓ All Pro features
        ✓ Cancel anytime
        ✓ Your old data is still here

        Offer expires March 31

        [Claim {{discount}}% off]

  segmentation_strategies:
    by_churn_reason:
      price_sensitive:
        approach: "Discount or downgrade option"
        message: |
          We heard price was a concern.

          Would a {{lower_tier}} plan at ${{lower_price}} work better?

          You'd get:
          {{features_in_lower_tier}}

          [Try {{lower_tier}}] or [See all plans]

      lack_of_value:
        approach: "Education and use case examples"
        message: |
          Many customers didn't see value at first, then discovered {{use_case}}.

          {{testimonial_about_finding_value}}

          Would a quick call with our success team help?
          [Book 15-min call]

      missing_features:
        approach: "Showcase new features"
        message: |
          You mentioned needing {{feature}}.

          We just launched it! {{description}}

          [See {{feature}}]

      switched_to_competitor:
        approach: "Differentiation and offer"
        message: |
          We heard you switched to {{competitor}}.

          Here's what {{product}} does differently:
          {{unique_advantages}}

          If {{competitor}} isn't working out, we'd love to have you back.

          [Compare {{product}} vs {{competitor}}]

    by_customer_value:
      high_ltv:
        approach: "Personal outreach + generous offer"
        tactics:
          - personal_call: "Account manager reaches out"
          - custom_offer: "Tailored to their needs"
          - executive_involvement: "Founder note if appropriate"

      medium_ltv:
        approach: "Automated sequence + standard offer"
        tactics:
          - email_sequence: "5-email nurture"
          - discount_offer: "Standard winback discount"
          - feature_highlights: "What's new since they left"

      low_ltv:
        approach: "Light touch + feedback request"
        tactics:
          - feedback_survey: "Why they left"
          - minimal_outreach: "1-2 emails only"
          - product_improvements: "We've made changes based on feedback"

    by_engagement_level:
      power_users:
        message: |
          You were one of our most active users!

          You {{impressive_usage_stat}}.

          What happened? We'd genuinely love to know.

      low_engagement:
        message: |
          We noticed you didn't use {{product}} much.

          That's on us. We should have helped you get more value.

          Want a personalized walkthrough of features for your {{use_case}}?

  incentives_and_offers:
    discounts:
      percentage_off: "{{25-50}}% off for {{3-6}} months"
      extended_trial: "{{30-60}} days free, then decide"
      lifetime_discount: "Lock in {{lower_price}} permanently"

      messaging: |
        Welcome back offer: {{discount}}% off

        Just for former customers like you.

        {{what_they_get}}

        [Claim offer]

    feature_access:
      temporary_upgrade: "{{Premium_features}} free for {{duration}}"
      exclusive_beta: "Early access to {{new_feature}}"

      messaging: |
        Try our new {{feature}} free for {{duration}}

        No credit card needed. See if {{product}} is better now.

        [Activate free access]

    service_additions:
      personalized_onboarding: "Free setup call with our team"
      data_migration: "We'll migrate your data for free"
      dedicated_support: "{{duration}} of priority support included"

  measuring_success:
    key_metrics:
      winback_rate: "{{reactivated / churned}}"
      time_to_winback: "{{days_from_churn_to_reactive}}"
      second_lifetime: "{{retention_after_winback}}"
      campaign_roi: "{{revenue_from_winbacks / campaign_cost}}"

    optimization:
      improve_winback_rate:
        - better_targeting: "Segment by churn reason"
        - stronger_offers: "Test discount levels"
        - timing: "Test outreach timing"

      improve_retention_post_winback:
        - onboarding: "Re-onboard returning customers"
        - success_check: "Proactive success management"
        - address_original_issue: "Fix why they left"

  ethical_considerations:
    dos:
      - respect_decision: "Accept their choice"
      - genuine_curiosity: "Really want to learn why"
      - valuable_offers: "Real value, not tricks"
      - easy_opt_out: "Simple to stop emails"

    donts:
      - guilt_trip: "Don't shame them for leaving"
      - spam: "Respect frequency limits"
      - fake_urgency: "No false deadlines"
      - beg: "Maintain dignity"

    unsubscribe_respect:
      - honor_immediately: "Stop within 24 hours"
      - feedback_optional: "Don't require reason"
      - confirmation: "Confirm they're unsubscribed"
      - no_re_adding: "Don't add to other lists"
```

=== EXAMPLES ===

**Example 1: Empathetic Feedback Request (Day 7)**

```
Subject: We noticed you left

Hi Marcus,

We saw you cancelled your TaskFlow subscription last week. We're sorry to see you go.

If you have a moment, we'd love to understand why you left. Your feedback genuinely helps us improve.

[Quick 1-minute survey]

Or just hit reply - I read every response.

If you had a specific issue, let me know. I'll personally make sure it gets addressed.

Thanks,
Sarah Chen
Head of Customer Success, TaskFlow

P.S. No hard feelings if TaskFlow wasn't right for you. We just want to learn and improve.
```

**Example 2: Value Reminder (Day 14)**

```
Subject: Remember when you shipped that feature in record time?

Hi Jennifer,

Remember that sprint where your team shipped 3 major features?

You did that with TaskFlow. In 6 months with us, your team:
• Completed 247 projects
• Shipped 40% faster than before
• Reduced status meetings from 10hrs/week to 2hrs/week

Since you left, we've added features you requested:
• AI-powered task scheduling
• Advanced automation workflows
• Custom dashboards

{{percentage}}% of teams who left have come back to try these.

Want to see what's new?

[Explore TaskFlow] - First month free for returning customers

No pressure - just thought you'd want to know.

Best,
Sarah
```

**Example 3: What's New (Day 20)**

```
Subject: You asked for it, we built it

Hi David,

Remember when you mentioned needing better analytics?

We heard you. Last month, we launched Advanced Analytics - exactly what you asked for.

**What's new:**
• Custom dashboard builder (drag & drop)
• Automated reports (daily/weekly/monthly)
• Advanced filtering and exports
• Real-time collaboration metrics

"Advanced Analytics helped us identify bottlenecks we never knew existed. We're shipping 25% faster now."
- Marcus Chen, Engineering Lead at Stripe

Want to try it? [See Advanced Analytics]

Your old account data is still here. Takes 30 seconds to reactivate.

Sarah
```

**Example 4: Special Offer (Day 35)**

```
Subject: Come back: 50% off for 6 months

Hi Sarah,

We miss having you as a customer!

Here's an exclusive offer just for you:
**50% off Pro for 6 months**

That's just $15/month instead of $30.

✓ All Pro features
✓ Your old data is waiting
✓ Cancel anytime
✓ No setup required

Since you left, we've improved:
• 3x faster performance
• New mobile app
• 50+ integrations
• Priority support

Over 500 former customers have returned in the last quarter. Many said they wish they'd come back sooner.

[Claim 50% off] - Offer expires March 31

Questions? Just reply.

Sarah Chen
Customer Success, TaskFlow
```

**Example 5: Final Touch (Day 45)**

```
Subject: Last email (promise)

Hi Marcus,

This is genuinely my last email about TaskFlow.

Your 50% off offer expires tonight at midnight.

[Claim offer] - takes 30 seconds

If TaskFlow isn't right for you, that's completely okay. We wish you success with whatever you're using instead.

But if you're even slightly curious about what's changed, tonight's your last chance to try it at half price.

Either way - thanks for being a customer. It meant a lot.

Best,
Sarah

P.S. If you ever need project management in the future, we'll be here. Your data stays safe for 90 days.
```

---

**Accessibility Requirements**: Clear subject lines. Plain text alternatives. Unsubscribe link prominent. Simple language. Sufficient contrast in HTML emails. Mobile responsive. Works without images. Easy to scan. No tricks or dark patterns.

**Psychological Principles**: Reciprocity (you gave us value, we want to give back). Social proof (others returned). Loss aversion (don't lose your data/progress). Curiosity gap (see what's new). Commitment (you invested time with us). Authority (we're experts who improved). Scarcity (offers expire - but genuine). Regret minimization (what if it's better now?). Status quo bias (acknowledge inertia of switching back).

## Upsell Messaging Generator v1.0

**Purpose**: Create contextual upsell messages that encourage customers to upgrade or expand usage by highlighting relevant value, demonstrating ROI, and presenting opportunities at optimal moments without being pushy or manipulative.

---

**PROMPT:**

You are a product content designer at {{company_name}} creating upsell messaging for {{current_plan}} users to upgrade to {{target_plan}}. Write copy that converts {{conversion_target}}% while maintaining {{satisfaction_score}} customer satisfaction through {{upsell_type}} triggered at {{optimal_moment}}.

=== UPSELL CONTEXT ===
- Current plan: {{current_plan}} (free/basic/starter)
- Target plan: {{target_plan}} (pro/business/enterprise)
- Price delta: {{price_increase}} ({{percentage}}% increase)
- User tenure: {{days_active}} days
- Usage level: {{usage}} (approaching_limits/power_user/under_utilizing)
- Trigger: {{trigger}} (limit_reached/feature_access/time_based/usage_milestone)

=== MESSAGING STRATEGY ===
- Approach: {{approach}} (value_based/limit_removal/capability_unlock/social_proof)
- Urgency: {{urgency}} (none/gentle/time_limited)
- Positioning: {{positioning}} (expansion/graduation/professional_tier)
- Social proof: {{proof}} (customer_success/usage_stats/testimonials)
- Trial offer: {{trial}} (yes/no/conditional)

=== OUTPUT REQUIREMENTS ===

Generate effective upsell messaging:

```yaml
upsell_messaging:
  trigger_moments:
    limit_reached:
      timing: "When user hits plan constraint"
      urgency: "High - user is blocked"
      message_focus: "Remove limitation immediately"

      examples:
        storage_limit:
          headline: "You've used all {{limit}}GB"
          body: "Upgrade to {{plan}} for {{new_limit}}GB + unlimited version history"
          cta: "Upgrade now"
          alternative: "[Delete old files]"

        user_limit:
          headline: "Team limit reached"
          body: "You have {{current_users}} team members (your limit). {{plan}} includes unlimited team members."
          value_add: "Plus: Priority support and advanced permissions"
          cta: "Add more team members"

        feature_limit:
          headline: "You've created {{limit}} workflows"
          body: "Upgrade to {{plan}} for unlimited workflows + advanced automation"
          proof: "Pro users create an average of {{number}} workflows"
          cta: "Unlock unlimited"

    feature_discovery:
      timing: "When user tries premium feature"
      urgency: "Medium - interest is high"
      message_focus: "Show value of locked feature"

      examples:
        advanced_analytics:
          headline: "Advanced Analytics is available on {{plan}}"
          body: |
            Build custom dashboards and track the metrics that matter to you.

            {{plan}} users get:
            • Custom dashboard builder
            • Automated reports
            • Data export
            • API access

          social_proof: "\"Analytics helped us increase conversions by 40%\" - {{Customer}}"
          cta: "Try {{plan}} free for 14 days"

        api_access:
          headline: "API access unlocks powerful integrations"
          body: "Connect {{product}} with your existing tools and workflows"
          use_cases: |
            Popular integrations:
            • Zapier for automation
            • Custom internal tools
            • Data warehouse sync

          cta: "Explore {{plan}}"

    usage_milestone:
      timing: "After significant usage or achievement"
      urgency: "Low - opportunistic"
      message_focus: "You're ready for more"

      examples:
        power_user:
          headline: "You're a power user! 💪"
          body: |
            You've {{achievement_stat}}.

            {{plan}} gives you tools that match your usage:
            • {{feature_they'd_use_1}}
            • {{feature_they'd_use_2}}
            • {{feature_they'd_use_3}}

          cta: "Level up to {{plan}}"

        team_growth:
          headline: "Your team is growing!"
          body: "{{plan}} makes collaboration easier for teams of {{size}}+"
          benefits: |
            • Unlimited team members
            • Advanced permissions
            • Team analytics
            • Priority support

          cta: "Upgrade for your team"

    time_based:
      timing: "Strategic moments (trial ending, anniversary, etc)"
      urgency: "Varies by context"
      message_focus: "Milestone or timing-specific"

      examples:
        trial_ending:
          headline: "Your trial ends in {{days}} days"
          body: |
            Don't lose access to:
            • {{feature_you_used_1}}
            • {{feature_you_used_2}}
            • {{data_you've_created}}

          value_recap: "In your trial, you {{achievements}}"
          cta: "Continue with {{plan}}"
          pricing: "{{price}}/month - cancel anytime"

        anniversary:
          headline: "You've been with us {{duration}}! 🎉"
          body: "Thank you for being a {{current_plan}} member. Ready to unlock even more?"
          offer: "Special: {{discount}}% off {{plan}} this week only"
          cta: "Claim your upgrade discount"

  message_structures:
    value_ladder:
      format: |
        **You're on {{current_plan}}**
        {{current_features}}

        **Upgrade to {{target_plan}}**
        Everything in {{current_plan}}, plus:
        • {{additional_feature_1}}
        • {{additional_feature_2}}
        • {{additional_feature_3}}

        {{price_info}}

      best_for: "Clear tier comparison"

    problem_solution:
      format: |
        **The Challenge**
        {{current_limitation_or_pain}}

        **The Solution**
        {{plan}} solves this with {{feature}}

        **The Result**
        {{customer_testimonial_or_outcome}}

      best_for: "Specific pain points"

    social_proof_heavy:
      format: |
        Join {{number}} teams on {{plan}}

        "{{customer_quote}}"
        - {{Name}}, {{Company}}

        {{plan}} includes:
        • {{feature_1}}
        • {{feature_2}}
        • {{feature_3}}

        {{pricing_and_cta}}

      best_for: "Established products with customer base"

    roi_focused:
      format: |
        **Investment:** {{price}}/month
        **Return:** {{value_delivered}}

        {{plan}} customers report:
        • {{time_saved}} hours saved per week
        • {{productivity_gain}}% productivity increase
        • {{roi_multiple}}x ROI in {{timeframe}}

        {{cta}}

      best_for: "B2B, business users"

  placement_strategies:
    in_app_placements:
      limit_walls:
        when: "User hits constraint"
        format: "Modal blocking action"
        message: "{{Limit_reached}} - Upgrade to continue"

      feature_gates:
        when: "Locked feature clicked"
        format: "Modal or empty state"
        message: "{{Feature}} is available on {{plan}}"

      settings_page:
        when: "User browsing account"
        format: "Comparison table or upgrade card"
        message: "See what you're missing"

      success_moments:
        when: "After achievement"
        format: "Non-blocking banner or modal"
        message: "Ready for more? {{plan}} unlocks..."

    email_upsells:
      usage_report:
        subject: "Your {{product}} usage report"
        body: |
          This month you:
          • {{metric_1}}
          • {{metric_2}}
          • {{metric_3}}

          You're getting great value! {{plan}} could help you do even more.

          [Explore {{plan}}]

      feature_announcement:
        subject: "New: {{feature}} ({{plan}} only)"
        body: |
          We just launched {{feature}}.

          {{what_it_does}}

          Available on {{plan}}: {{price}}/month

          [Upgrade to access]

      near_limit:
        subject: "You're almost at your {{limit_type}} limit"
        body: |
          Heads up: You've used {{percentage}}% of your {{limit}}.

          Upgrade to {{plan}} to get {{increased_limit}}.

          [View plans]

  pricing_presentation:
    transparency:
      show_full_price: "{{price}}/{{period}}"
      show_what_included: "{{feature_list}}"
      show_comparison: "vs {{current_plan}}"

    value_framing:
      daily_cost: "Less than {{price}} per day"
      per_user: "Just {{price}} per team member"
      roi: "Pays for itself if {{achievable_outcome}}"
      savings: "Save {{amount}} with annual billing"

    risk_reversal:
      free_trial: "Try free for {{days}} days"
      money_back: "{{days}}-day money-back guarantee"
      no_commitment: "Cancel anytime"
      keep_current: "Stay on {{current_plan}} if you prefer"

  objection_handling:
    too_expensive:
      response: |
        **ROI Calculator**

        If {{plan}} saves you {{hours}} hours per month, that's worth {{dollar_value}}.

        Cost: {{price}}/month
        Value: {{calculated_value}}/month
        ROI: {{roi_percentage}}%

      proof: "{{customer}} saved {{amount}} in first {{timeframe}}"

    dont_need_features:
      response: |
        We get it - you might not need everything now.

        But {{percentage}}% of {{plan}} users started on {{current_plan}}.

        They upgraded for: {{most_used_features}}

      cta: "See what you're missing"

    happy_with_current:
      response: |
        Great! We're glad {{current_plan}} works for you.

        Quick question: What would make you consider upgrading?
        [Share feedback]

      alternative: "Want to see what's possible? [Browse {{plan}} features]"

    timing:
      response: |
        No pressure! Your {{current_plan}} isn't going anywhere.

        When you're ready, {{plan}} will be here.

        [Remind me in {{timeframe}}] [No thanks]

  conversion_optimization:
    personalization:
      usage_based:
        high_engagement: "You're clearly getting value - ready for pro features?"
        specific_feature: "Based on your use of {{feature}}, you'd love {{premium_feature}}"
        team_size: "For teams of {{size}}, we recommend {{plan}}"

      role_based:
        admin: "Team management and security features"
        power_user: "Advanced features and automation"
        casual: "Unlock occasional premium needs"

      timing_based:
        power_user_moment: "After {{impressive_stat}}"
        frustration_point: "When hitting limit for {{nth}} time"
        success_moment: "After {{milestone}}"

    a_b_testing:
      headline_focus: "Benefit vs feature vs transformation"
      pricing_display: "Upfront vs click-to-see"
      social_proof: "Testimonial vs stats vs none"
      cta_copy: "Upgrade vs unlock vs try vs get"
      trial_emphasis: "Trial vs direct purchase"

    progressive_disclosure:
      initial: "Brief value prop + CTA"
      expand: "Detailed feature comparison"
      custom: "Contact sales for enterprise"

  ethical_guidelines:
    dos:
      - show_genuine_value: "Features they'll actually use"
      - be_transparent: "Clear pricing, no hidden fees"
      - respect_no: "Easy to dismiss or decline"
      - reward_loyalty: "Grandfather or loyalty discounts"
      - personalize: "Based on actual usage patterns"

    donts:
      - fake_urgency: "No false scarcity"
      - guilt_trip: "Don't shame free users"
      - dark_patterns: "No trick UI"
      - interrupt_critical: "Don't block important workflows"
      - spam: "Frequency caps and respect dismissals"

    frequency_caps:
      in_app_limit: "Max 1 upsell modal per session"
      email_limit: "Max 1-2 upsell emails per month"
      dismissed_behavior: "Don't show same message for {{duration}}"
      preference_center: "Let users control upsell frequency"

  metrics_and_optimization:
    key_metrics:
      conversion_rate: "{{upgraded / shown}}"
      average_time: "{{days_to_conversion}}"
      dismissal_rate: "{{dismissed / shown}}"
      revenue_impact: "{{mrr_from_upsells}}"

    optimization:
      improve_conversion:
        - clearer_value: "Better articulate benefits"
        - better_timing: "Show at right moment"
        - reduce_friction: "Easier upgrade process"
        - add_trial: "Risk-free way to try"

      reduce_dismissal:
        - relevance: "Better targeting"
        - frequency: "Show less often"
        - value: "Stronger value proposition"

```

=== EXAMPLES ===

**Example 1: Storage Limit Reached**

```
You've used all 5GB of storage

Your files are safe, but you can't upload more.

**Upgrade to Pro:**
• 100GB storage (20x more)
• Unlimited file version history
• Priority support

$15/month

[Upgrade to Pro] [See all plans]

[Or delete old files to free up space]
```

**Example 2: Feature Discovery**

```
Advanced Analytics is a Pro feature

See exactly what's working with custom dashboards, funnel analysis, and exportable reports.

"Analytics helped us increase conversions by 40%"
- Sarah Kim, Growth Lead at TechCorp

**Pro includes:**
• Custom dashboards
• Automated reports
• Advanced filtering
• Data export

Try Pro free for 14 days

[Start free trial] [Learn more] [Maybe later]
```

**Example 3: Power User Achievement**

```
You've created 50 projects! 🎉

You're clearly a power user. Pro gives you tools that match your workflow:

• Unlimited projects (you're approaching the 50 limit)
• Advanced automation
• Custom templates
• Priority support

Join 12,000+ teams on Pro

$35/month or $300/year (save $120)

[Upgrade to Pro] [Maybe later]
```

**Example 4: Trial Ending**

```
Your trial ends in 3 days

In your trial, you:
• Created 12 projects
• Invited 4 team members
• Used advanced reports 23 times

Continue with Pro to keep:
✓ Unlimited projects
✓ Team collaboration
✓ Advanced reports
✓ All your data and settings

$29/month - cancel anytime

[Continue with Pro] [Explore plans] [Questions?]
```

**Example 5: Team Growth**

```
Your team is growing! 👥

You have 8 team members on {{current_plan}} (limit: 10).

Business plan includes:
• Unlimited team members
• Advanced permissions (roles & access control)
• Team usage analytics
• Dedicated account manager

Perfect for teams of 10+

$99/month ($9.90 per person for your team)

[Upgrade to Business] [Contact sales]
```

---

**Accessibility Requirements**: Clear pricing information. Easy to dismiss. Keyboard navigable. Screen reader friendly. Sufficient contrast. Descriptive button text. No dark patterns. Transparent about what changes. Alternative paths provided. Works without JavaScript for critical info.

**Psychological Principles**: Loss aversion (don't lose progress). Social proof (others upgraded successfully). Scarcity (ethical only - real limitations). Reciprocity (we've provided value). Status (join pro users). Goal gradient (you're close to needing it). Anchoring (price vs value). Endowment (what you'll gain). Commitment (you've invested time).

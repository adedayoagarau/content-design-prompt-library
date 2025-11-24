## Upgrade Prompts Generator v1.0

**Purpose**: Encourage plan upgrades with contextual, value-focused messaging that highlights relevant benefits at the moment of need, converting free or lower-tier users without being pushy or manipulative.

---

**PROMPT:**

You are a product content designer at {{company_name}} creating upgrade prompts for {{user_segment}} on {{current_plan}}. Design messaging that converts {{conversion_target}}% of users to {{target_plan}} while maintaining {{user_satisfaction}}% satisfaction and avoiding dark patterns.

=== UPGRADE CONTEXT ===
- Current plan: {{current_plan}} (free/trial/basic/starter)
- Target plan: {{target_plan}} (pro/business/enterprise)
- Trigger: {{trigger}} (limit_reached/feature_gate/time_based/achievement_based)
- Price difference: {{price_delta}} per {{billing_period}}
- Value proposition: {{key_differentiator}}
- User tenure: {{days_on_platform}} days
- Usage level: {{engagement_level}} (high/medium/low)

=== MESSAGING STRATEGY ===
- Positioning: {{positioning}} (unlock_capabilities/remove_limits/get_more_value/professional_features)
- Tone: {{tone}} (helpful/aspirational/matter_of_fact/enthusiastic)
- Urgency: {{urgency}} (none/gentle/limited_time/scarcity)
- Social proof: {{social_proof}} (testimonials/usage_stats/customer_logos/none)
- Trial offer: {{trial}} (none/7_day/14_day/30_day)

=== OUTPUT REQUIREMENTS ===

Generate contextual upgrade messaging:

```yaml
upgrade_prompts:
  trigger_types:
    limit_reached:
      when: "User hits plan limit (storage, users, features, etc)"
      timing: "immediately at limit"
      urgency: "high - user is blocked"
      tone: "helpful, solution-oriented"

      template:
        headline: "You've reached your {{limit_type}} limit"
        body: |
          You're using {{current_usage}} of {{limit}} {{limit_type}}.

          Upgrade to {{plan}} to get:
          • {{increased_limit}} {{limit_type}}
          • {{related_benefit_1}}
          • {{related_benefit_2}}

        cta_primary: "Upgrade to {{plan}}"
        cta_secondary: "See all plans"
        dismiss: "{{delete_to_continue or remind_later}}"

      examples:
        storage:
          headline: "Storage full"
          body: "You've used all 5GB. Upgrade to Pro for 100GB + unlimited version history."

        users:
          headline: "Team limit reached"
          body: "You have 3 team members (your limit). Upgrade to Business for unlimited team members."

        api_calls:
          headline: "API limit reached for this month"
          body: "You've used 10,000 API calls. Upgrade to Pro for 100,000 calls/month."

    feature_gate:
      when: "User tries to access premium feature"
      timing: "contextual - when feature is clicked"
      urgency: "medium - feature-dependent"
      tone: "enthusiastic about feature value"

      template:
        headline: "{{feature_name}} is available on {{plan}}"
        body: |
          {{feature_name}} {{what_it_does}}.

          Unlock it with {{plan}}:
          • {{feature_capability_1}}
          • {{feature_capability_2}}
          • Plus: {{bonus_benefit}}

        visual: "{{screenshot_or_video_of_feature}}"
        cta_primary: "Upgrade to unlock"
        cta_secondary: "Learn more about {{plan}}"
        cta_tertiary: "Not now"

      examples:
        advanced_analytics:
          headline: "Advanced Analytics is a Pro feature"
          body: "See which content drives results with custom dashboards, funnel analysis, and cohort tracking."

        white_label:
          headline: "Custom branding is available on Business"
          body: "Remove our branding and add yours. Perfect for client work and professional presentations."

    time_based:
      when: "Strategic moments (trial ending, anniversary, etc)"
      timing: "scheduled + strategic"
      urgency: "varies by context"
      tone: "celebratory or milestone-focused"

      templates:
        trial_ending:
          timing: "7 days before, 3 days before, 1 day before, day of"
          headline: "Your trial ends in {{days}}"
          body: |
            Don't lose access to:
            • {{feature_you_used_1}}
            • {{feature_you_used_2}}
            • {{feature_you_used_3}}

            Continue with {{plan}} for ${{price}}/month

          personalization: "Show features they actually used"

        anniversary:
          headline: "You've been with us {{duration}}! 🎉"
          body: |
            In the past {{duration}}, you've {{accomplishment}}.

            Imagine what you could do with {{premium_features}}.

            Special offer: {{discount}}% off {{plan}} this week only

        milestone_achievement:
          headline: "You've created {{count}} {{objects}}!"
          body: |
            You're clearly getting value from {{product}}.

            {{plan}} users create {{higher_count}} {{objects}} on average.

            Ready to level up?

    achievement_based:
      when: "User demonstrates high engagement or value"
      timing: "after significant usage"
      urgency: "low - aspirational"
      tone: "congratulatory, aspirational"

      template:
        headline: "You're a power user! 💪"
        body: |
          You've {{usage_stat}}.

          You're using {{product}} like a pro. {{plan}} gives you pro-level features:

          • {{feature_match_1}}
          • {{feature_match_2}}
          • {{feature_match_3}}

        cta_primary: "Upgrade to {{plan}}"
        cta_secondary: "See what else you get"

  message_variations:
    value_focused:
      approach: "Lead with benefits, not features"
      headline_patterns:
        - "Get {{benefit}} with {{plan}}"
        - "{{Capability}} is waiting for you"
        - "Unlock {{transformation}}"

      body_pattern: |
        {{plan}} helps you {{desired_outcome}}.

        With {{plan}}, you can:
        • {{user_benefit_1}}
        • {{user_benefit_2}}
        • {{user_benefit_3}}

        {{social_proof}}

        {{price_info}}

    feature_focused:
      approach: "Show what they're missing"
      headline_patterns:
        - "{{Plan}} includes {{impressive_feature}}"
        - "Get access to {{feature_list}}"
        - "Everything in {{current_plan}}, plus:"

      body_pattern: |
        Upgrade to get:
        ✅ {{feature_1}}
        ✅ {{feature_2}}
        ✅ {{feature_3}}
        ✅ {{feature_4}}
        ✅ Plus {{count}} more features

    transformation_focused:
      approach: "Paint picture of better future state"
      headline_patterns:
        - "From {{current_state}} to {{desired_state}}"
        - "Join {{count}} teams using {{plan}}"
        - "Ready for {{next_level}}?"

      body_pattern: |
        {{current_plan}} users {{current_limitation}}.

        {{target_plan}} users {{elevated_capability}}.

        {{customer_quote_or_stat}}

        Make the leap?

    urgency_focused:
      approach: "Limited time offers (use sparingly!)"
      headline_patterns:
        - "{{discount}}% off {{plan}} this week"
        - "Last chance: Save on {{plan}}"
        - "Trial ends tomorrow"

      body_pattern: |
        {{time_sensitive_reason}}

        Upgrade now and save {{discount_amount}}:
        {{feature_highlights}}

        Offer expires {{date}}

      warnings:
        - "Use genuine urgency only (real deadlines)"
        - "Don't create false scarcity"
        - "Don't pressure or manipulate"
        - "Always allow easy dismissal"

  pricing_presentation:
    show_savings:
      monthly_vs_annual: "Save {{amount}} with annual billing"
      per_user_breakdown: "Just {{price}} per team member"
      daily_cost: "Less than {{price}} per day"
      roi_framing: "Pays for itself if you {{achievable_outcome}}"

    transparency:
      full_price_visible: true
      no_hidden_fees: "clarified upfront"
      cancellation_policy: "linked clearly"
      refund_policy: "mentioned if generous"

    risk_reduction:
      free_trial: "Try free for {{days}} days"
      money_back: "{{days}}-day money-back guarantee"
      no_credit_card: "No credit card required for trial"
      cancel_anytime: "Cancel anytime, no questions asked"

  social_proof_elements:
    usage_statistics:
      format: "Join {{number}} {{user_type}} using {{plan}}"
      examples:
        - "12,000+ teams on Business plan"
        - "Used by designers at Apple, Google, and Netflix"
        - "Trusted by 50,000+ businesses"

    testimonial_snippet:
      format: |
        "{{short_quote}}"
        - {{name}}, {{role}} at {{company}}

      placement: "Below main CTA"
      length: "<50 words"

    ratings_reviews:
      format: "★★★★★ 4.8/5 from 2,000+ reviews"
      source: "{{G2/Capterra/TrustPilot}}"

    case_study_reference:
      format: "{{Company}} {{achieved_result}} with {{plan}}"
      link: "[Read their story →]"

  ui_placement_patterns:
    modal_overlay:
      when: "Blocking action (limit reached, feature gate)"
      design:
        backdrop: "dimmed background"
        dismissible: true
        size: "medium (500px)"
        visual: "product screenshot optional"

      structure: |
        [Close X]

        {{headline}}

        {{body_copy}}

        {{visual_optional}}

        {{social_proof_optional}}

        [Primary CTA] [Secondary CTA]

        [Tertiary link]

    banner_notification:
      when: "Non-blocking awareness (trial ending, promotion)"
      design:
        placement: "top of app"
        dismissible: true
        sticky: "optional"
        color: "attention-grabbing but not alarming"

      structure: |
        ⭐ {{concise_message}} [CTA] [Dismiss]

    empty_state_upgrade:
      when: "Contextual in premium feature area"
      design:
        placement: "in place of locked feature"
        visual: "illustration or screenshot"
        non-blocking: true

      structure: |
        [Visual]

        {{feature_name}}

        {{brief_description}}

        Available on {{plan}}

        [Upgrade] [Learn more]

    settings_page_comparison:
      when: "User browsing plans"
      design:
        format: "comparison table"
        highlight: "recommended plan"
        interactive: "expandable features"

      structure: |
        |                | Current | Pro  | Business |
        |----------------|---------|------|----------|
        | {{feature_1}}  | ✓       | ✓    | ✓        |
        | {{feature_2}}  | ✗       | ✓    | ✓        |
        | {{feature_3}}  | ✗       | ✗    | ✓        |

        [Upgrade to Pro] [Upgrade to Business]

    in_context_tooltip:
      when: "Hovering locked feature"
      design:
        small: "compact tooltip"
        instant: "appears on hover"
        non-intrusive: true

      structure: |
        🔒 {{feature_name}}

        {{one_line_description}}

        Available on {{plan}} [Upgrade →]

  conversion_optimization:
    personalization:
      usage_based:
        high_usage: "You're using this a lot! Get unlimited with {{plan}}"
        specific_feature: "Based on your use of {{feature}}, you might like {{premium_feature}}"
        team_size: "For teams of {{size}}, we recommend {{plan}}"

      role_based:
        detected_role: "Features for {{role}}s: {{features}}"
        company_size: "Built for {{company_size}} companies"

      timing_based:
        power_user_moment: "After {{impressive_usage_stat}}"
        frustration_point: "When hitting limit for {{nth}} time"
        success_moment: "After achieving {{milestone}}"

    a_b_testing_variables:
      - headline_focus: "benefit vs feature vs transformation"
      - visual_presence: "with vs without screenshot"
      - social_proof: "testimonial vs stats vs none"
      - cta_copy: "upgrade vs unlock vs try vs get"
      - pricing_visibility: "upfront vs click to see"
      - trial_emphasis: "trial first vs direct upgrade"

    friction_reduction:
      - one_click_upgrade: "No re-entering payment info"
      - instant_access: "Features unlock immediately"
      - prorated_billing: "Only pay for remaining time"
      - easy_downgrade: "Can downgrade anytime"
      - no_commitment: "Cancel within {{days}} days for refund"

  ethical_guidelines:
    do:
      - "Show genuine value"
      - "Be transparent about pricing"
      - "Make dismissal easy"
      - "Respect user choice"
      - "Personalize based on actual usage"
      - "Offer genuine trials"

    dont:
      - "Create fake urgency"
      - "Hide pricing"
      - "Make dismissal difficult"
      - "Shame free plan users"
      - "Interrupt critical workflows"
      - "Show constantly if dismissed"

    respect_frequency:
      limit_reached: "Every time (user is blocked)"
      feature_gate: "Once per feature per session"
      time_based: "{{schedule}} with easy opt-out"
      achievement: "Maximum once per week"

      dismissed_behavior:
        - respect_dismissal: "Don't show same message for {{duration}}"
        - snooze_option: "Remind me in {{timeframe}}"
        - never_option: "Don't show this again (with consequences)"
```

=== EXAMPLES ===

**Example 1: Limit Reached (Storage)**
```
[Modal]

You've used all 5GB of storage

Your files are safe, but you can't upload more until you upgrade or delete files.

Upgrade to Pro and get:
• 100GB storage (20x more)
• Unlimited file version history
• Priority support

$15/month, billed monthly
Try free for 14 days

[Start free trial] [See all plans]

[Delete old files instead]
```

**Example 2: Feature Gate (Advanced Analytics)**
```
[Modal with screenshot of analytics dashboard]

Advanced Analytics is a Pro feature

See exactly what's working with:
• Custom dashboards
• Funnel analysis
• Cohort tracking
• Exportable reports

"Advanced Analytics helped us increase conversions by 40%"
- Sarah Kim, Growth Lead at TechCorp

Unlock with Pro: $29/month

[Try Pro free for 14 days] [Learn more]

[Not now]
```

**Example 3: Trial Ending**
```
[Top banner]

⏰ Your trial ends in 3 days

Don't lose access to:
• Custom workflows (you've created 12)
• Team collaboration (4 team members)
• Advanced exports (used 23 times)

Continue with Pro for $25/month

[Upgrade now] [View plans] [×]
```

**Example 4: Achievement-Based (Power User)**
```
[Gentle modal after creating 50th project]

🎉 You've created 50 projects!

You're clearly getting serious value from ProjectApp.

Power users love these Pro features:
• Unlimited projects (you're approaching the 50 limit)
• Advanced automation
• Custom templates
• Priority support

Join 12,000+ teams on Pro

$35/month or $300/year (save $120)

[Upgrade to Pro] [Maybe later]

No pressure - just wanted you to know what's available.
```

**Example 5: Empty State Upgrade**
```
[In "Custom Branding" settings area]

[Illustration of branded interface]

Custom Branding

Remove our logo and add yours. Perfect for client work and professional presentations.

• Custom colors
• Your logo
• Custom domain
• White-label exports

Available on Business plan

[Upgrade to Business] [Learn more about Business]

Currently on: Starter plan
```

---

**Accessibility Requirements**: Keyboard-navigable modals (Tab, Enter, Esc). Screen reader announces modal opening. Clear focus management. Dismiss button clearly labeled. No time-limited offers that expire while being read. Text alternatives for comparison tables. Links to full pricing page. No flashing or distracting animations. Easy to find "not now" option.

**Psychological Principles**: Loss aversion (showing what they'll lose). Social proof (others are using this). Scarcity (limited time offers - use ethically). Reciprocity (generous trial). Status (joining power users). Goal gradient (you're so close to the limit). Peak-end rule (upgrade prompt after success moment). Anchoring (show value of time saved vs price). Default effect (recommended plan highlighted).

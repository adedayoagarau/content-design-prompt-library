## Landing Page Copy Generator v1.0

**Purpose**: Create high-converting landing pages that capture attention, build desire, overcome objections, and drive action through strategic messaging, social proof, and persuasive storytelling optimized for specific audiences and goals.

---

**PROMPT:**

You are a product content designer at {{company_name}} creating a landing page for {{campaign_name}} targeting {{audience_segment}}. Write copy that converts {{conversion_goal}} at {{target_rate}}% while communicating {{unique_value_proposition}} and addressing {{primary_objection}}.

=== LANDING PAGE CONTEXT ===
- Campaign type: {{type}} (product_launch/lead_generation/event_registration/trial_signup/purchase)
- Traffic source: {{source}} (paid_search/social_ads/email/organic/referral)
- Audience: {{audience}} (cold/warm/hot) with {{awareness_level}} (problem_aware/solution_aware/product_aware)
- Offer: {{offer}} (free_trial/demo/download/purchase/signup)
- Page goal: {{primary_goal}} and {{secondary_goal}}
- Competitive context: {{competitive_intensity}} (first_mover/crowded_market/differentiated)

=== CONTENT STRATEGY ===
- Length: {{length}} (short_single_screen/medium_3_sections/long_comprehensive)
- Structure: {{structure}} (traditional/problem_solution/narrative/comparison)
- Tone: {{tone}} (professional/casual/urgent/aspirational/technical)
- Primary emotion: {{emotion}} (fear_of_missing_out/desire/relief/aspiration/trust)
- Social proof emphasis: {{proof}} (testimonials/numbers/logos/case_studies)

=== OUTPUT REQUIREMENTS ===

Generate high-converting landing page copy:

```yaml
landing_page_copy:
  above_the_fold:
    hero_headline:
      purpose: "Communicate core value in 5-10 words"
      formulas:
        outcome_focused: "{{Desired_result}} in {{timeframe}}"
        transformation: "From {{current_state}} to {{desired_state}}"
        question: "{{Pain_point_question}}?"
        bold_claim: "{{Unexpected_benefit}} without {{common_sacrifice}}"

      examples:
        weak: "The Best Project Management Software"
        better: "Project Management Software Teams Actually Use"
        best: "Ship Products 3x Faster with AI-Powered Workflows"

      character_limit: "50-70 characters for impact"
      testing: "A/B test 3-5 headline variations"

    subheadline:
      purpose: "Elaborate on headline, add specificity"
      format: "{{How_it_works}} so {{target_audience}} can {{achieve_benefit}}"

      examples:
        - "Intelligent automation handles repetitive tasks while your team focuses on what matters most"
        - "Join 50,000+ teams shipping faster, better products with less stress and fewer meetings"
        - "The only platform that combines project management, docs, and goals in one beautiful workspace"

      character_limit: "100-150 characters"

    hero_cta:
      primary_button:
        copy_formulas:
          - "{{Action}} {{timeframe}}" → "Start free trial"
          - "{{Action}} {{benefit}}" → "Get my free guide"
          - "{{Action}} {{object}}" → "See how it works"

        design_principles:
          - action_oriented: "Use verbs (Start, Get, Try, Join)"
          - specific: "Not generic 'Submit' or 'Click here'"
          - first_person: "Get MY report" vs "Get YOUR report"
          - benefit_hint: "Start saving time" vs just "Start"

      secondary_cta:
        purpose: "Lower-commitment option"
        examples:
          - "Watch 2-min demo"
          - "See pricing"
          - "Talk to sales"
          - "Download sample"

    hero_visual:
      options:
        product_screenshot: "Show actual interface"
        results_dashboard: "Display outcomes achieved"
        happy_customers: "Show people succeeding"
        problem_solution: "Before/after visualization"

      best_practices:
        - show_product_in_use: "Not just logo or abstract art"
        - annotate_key_features: "Callouts to important elements"
        - show_results: "If dashboard/analytics product"
        - use_real_data: "No lorem ipsum in screenshots"

  value_proposition_section:
    how_it_works:
      format_options:
        three_step_process:
          step_1:
            icon: "{{relevant_icon}}"
            headline: "{{Action_step}}"
            description: "{{Brief_explanation}}"

          step_2:
            icon: "{{relevant_icon}}"
            headline: "{{Action_step}}"
            description: "{{Brief_explanation}}"

          step_3:
            icon: "{{relevant_icon}}"
            headline: "{{Action_step}}"
            description: "{{Brief_explanation}}"

        example: |
          1️⃣ **Connect Your Tools**
          Link your existing apps in 60 seconds. No complicated setup or data migration.

          2️⃣ **AI Learns Your Workflow**
          Our AI analyzes your patterns and suggests optimizations automatically.

          3️⃣ **Focus on What Matters**
          Let automation handle the busy work while you focus on high-impact tasks.

    benefits_section:
      structure:
        headline: "Why {{target_audience}} love {{product}}"
        format: "Icon + benefit headline + 2-sentence explanation"

        benefit_template: |
          {{Icon}}
          **{{Benefit_headline}}**
          {{What_it_means}} {{Why_it_matters}}

        example: |
          ⚡ **Ship 3x Faster**
          Automated workflows eliminate manual handoffs and status updates. Your team spends time building, not coordinating.

          🎯 **Nothing Falls Through Cracks**
          Every task, comment, and file is connected to your projects. No more lost emails or forgotten details.

          👥 **Finally, Everyone's Aligned**
          Real-time dashboards show progress at a glance. No more status meetings or Slack DMs asking "what's the status?"

    features_section:
      when_to_include: "When competing on capabilities"
      format: "Feature + what it does + benefit"

      template: |
        ### {{Feature_name}}
        {{What_it_does_technically}}

        **Why it matters:** {{User_benefit}}

        [Screenshot or GIF of feature]

      example: |
        ### Intelligent Auto-Scheduling
        AI analyzes your team's capacity, dependencies, and priorities to suggest optimal task schedules.

        **Why it matters:** Stop playing calendar Tetris. Know instantly when projects will ship and where bottlenecks are.

        [Animated GIF of auto-scheduling in action]

  social_proof_section:
    customer_logos:
      headline: "Trusted by teams at"
      layout: "{{logo_grid_or_marquee}}"
      logos: "{{6_12_recognizable_brands}}"
      grayscale: "for visual consistency"

    testimonials:
      placement: "Throughout page at relevant moments"
      formats:
        quote_card:
          structure: |
            "{{Specific_result_or_experience}}"

            [Photo] {{Name}}
                    {{Role}} at {{Company}}

        stat_testimonial:
          structure: |
            "{{Product}} helped us {{achieve_metric}}"

            **{{Number}}{{unit}}** {{improvement}}

            - {{Company}}

        video_testimonial:
          structure: "30-second customer talking about results"
          placement: "Near objection-handling section"

    usage_statistics:
      formats:
        - "Join {{50,000}}+ {{user_type}} using {{product}}"
        - "Over {{$1M}} {{saved/earned}} by customers"
        - "{{4.9}}/5 stars from {{2,000}}+ reviews"
        - "{{1 million}}+ {{tasks/projects/users}} and counting"

    awards_certifications:
      when_relevant: "Industry recognition adds credibility"
      display: "Badge grid or inline mentions"
      examples:
        - "G2 Leader in {{category}}"
        - "SOC 2 Type II Certified"
        - "Winner: Best {{category}} 2024"

  objection_handling:
    common_objections:
      too_expensive:
        headline: "Worth every penny"
        proof: |
          "{{Product}} saved us {{$50K}} in the first year. The ROI was obvious within month one."
          - {{Customer}}, {{Company}}

          Pricing starts at {{$X}}/month. Try free for 14 days.

      too_complex:
        headline: "Up and running in minutes, not months"
        proof: |
          Average setup time: {{20 minutes}}

          "We had our whole team of 50 onboarded in 2 hours. Way simpler than our previous tool."
          - {{Customer}}, {{Company}}

      switching_costs:
        headline: "Painless migration, guaranteed"
        proof: |
          • Import from {{competitors}} in one click
          • Dedicated migration specialist
          • Full team onboarding included
          • 99.9% successful migrations

          "I dreaded the migration. Turns out, it was the easiest part."

      will_it_work_for_us:
        headline: "Built for {{industry}}"
        proof: |
          {{500}}+ {{industry}} companies use {{product}}

          [Company logo] [Company logo] [Company logo]

          {{Industry-specific}} case study: [Link]

  call_to_action_sections:
    mid_page_cta:
      timing: "After building value, before objections"
      format: |
        ## Ready to {{achieve_outcome}}?

        {{Brief_reminder_of_value}}

        [Primary CTA] [Secondary CTA]

        {{Trust_signals}}: {{Free_trial}} • {{No_credit_card}} • {{Cancel_anytime}}

    final_cta:
      placement: "Bottom of page"
      format_options:
        simple:
          headline: "Start {{achieving_benefit}} today"
          button: "[{{Primary_CTA}}]"
          trust: "{{Trust_signals}}"

        faq_then_cta:
          faqs: "{{5_7_common_questions}}"
          cta: "{{After_addressing_concerns}}"

        comparison_then_cta:
          comparison: "{{Us_vs_competitors}}"
          cta: "{{Choose_us_button}}"

        urgency_based:
          urgency: "{{Limited_time_offer}}" or "{{Spots_remaining}}"
          cta: "{{Act_now_button}}"

  page_structure_variations:
    short_page:
      use_when: "Warm traffic, clear value prop, simple offer"
      sections:
        - hero: "Headline + subheadline + CTA + visual"
        - benefits: "3 key benefits"
        - social_proof: "Logos + 1 testimonial"
        - cta: "Final CTA"
      length: "1-2 scrolls"

    medium_page:
      use_when: "Most B2B SaaS, moderate consideration"
      sections:
        - hero: "Headline + subheadline + CTA"
        - how_it_works: "3-step process"
        - benefits: "4-6 key benefits"
        - features: "3-4 standout features"
        - social_proof: "Logos + testimonials + stats"
        - objections: "Address 2-3 objections"
        - final_cta: "With trust signals"
      length: "3-5 scrolls"

    long_page:
      use_when: "Cold traffic, complex product, high consideration"
      sections:
        - hero: "Headline + subheadline + CTA"
        - problem_agitation: "Paint the pain"
        - solution_intro: "Here's how we solve it"
        - how_it_works: "Detailed process"
        - benefits: "8-10 benefits"
        - features: "All major features"
        - social_proof: "Multiple testimonials throughout"
        - comparison: "Us vs alternatives"
        - objections: "Address 5-7 objections"
        - pricing: "Transparent pricing table"
        - faq: "10-15 questions"
        - final_cta: "Multiple CTAs throughout"
      length: "8-12 scrolls"

  conversion_optimization:
    cta_optimization:
      placement_frequency:
        - above_fold: "Primary CTA"
        - after_value: "CTA after benefits"
        - after_social_proof: "CTA after testimonials"
        - after_objections: "CTA after FAQ"
        - final: "Bottom of page CTA"

      design_principles:
        - high_contrast: "Button stands out visually"
        - whitespace: "Breathing room around CTA"
        - directional_cues: "Arrows or eyes pointing to CTA"
        - button_size: "Large enough for easy clicking"
        - mobile_sticky: "CTA bar on mobile"

    trust_signals:
      security:
        - "🔒 Secure checkout • SSL encrypted"
        - "We never share your information"
        - "SOC 2 Type II certified"

      risk_reversal:
        - "14-day free trial, no credit card required"
        - "30-day money-back guarantee"
        - "Cancel anytime, no questions asked"
        - "Free forever plan available"

      social_proof:
        - "Join 50,000+ teams"
        - "★★★★★ 4.9/5 from 2,000+ reviews"
        - "Featured in TechCrunch, Forbes, WSJ"

    urgency_scarcity:
      ethical_only: "Use real, honest urgency"
      examples:
        genuine_limited_time: "Offer ends March 31"
        genuine_limited_quantity: "Only 10 spots in beta"
        seasonal: "Lock in 2024 pricing"
        cohort_based: "Next cohort starts April 1"

      avoid:
        - fake_countdown: "Resets when refreshed"
        - fake_scarcity: "Only 3 left!" (always says 3)
        - pressure_tactics: "Act now or lose forever"

  accessibility_requirements:
    content:
      - clear_headings: "Proper H1, H2, H3 hierarchy"
      - alt_text: "Descriptive alt text for all images"
      - link_text: "Descriptive, not 'click here'"
      - color_contrast: "4.5:1 minimum ratio"
      - video_captions: "All videos captioned"

    navigation:
      - keyboard_nav: "All interactive elements"
      - focus_indicators: "Clear focus states"
      - skip_links: "Skip to main content"

    forms:
      - field_labels: "Clear, associated labels"
      - error_messages: "Specific, helpful errors"
      - required_fields: "Clearly marked"
```

=== EXAMPLES ===

**Example 1: Short Landing Page (Lead Gen)**

```
[HERO]
Get More Qualified Leads Without Spending More

Our AI analyzes your website traffic and identifies visitors ready to buy - before they fill out a form.

[Download Free Guide: "10x Your Lead Quality"] [Watch 2-Min Demo]

[Product screenshot showing lead scoring dashboard]

Trusted by: [Shopify] [Stripe] [Notion] [Airbnb]

---

[HOW IT WORKS]
1️⃣ Install in 5 Minutes
Add one line of code to your website. No technical expertise needed.

2️⃣ AI Identifies Intent
Our AI scores every visitor based on 50+ behavioral signals.

3️⃣ Focus on Hot Leads
Your team sees who's ready to buy and can reach out at the perfect moment.

---

[TESTIMONIAL]
"We 3x'd our qualified leads in 30 days. Same traffic, way better results."
[Photo] Sarah Kim, Head of Growth at TechCorp
⭐⭐⭐⭐⭐ 4.9/5 from 500+ marketers

---

[FINAL CTA]
Ready to get better leads?
[Download Free Guide]

✓ No credit card required
✓ 10-page actionable guide
✓ Used by 10,000+ marketers
```

**Example 2: Medium Landing Page (SaaS Product)**

```
[HERO]
Project Management That Your Team Will Actually Use

Stop fighting with complicated tools. TaskFlow is simple enough for anyone, powerful enough for everything.

[Start Free Trial] [Watch Demo]
No credit card required • 14-day trial

[Screenshot of beautiful, simple interface]

---

[LOGOS]
Trusted by 15,000+ teams at
[Stripe] [Figma] [Notion] [Airbnb] [Shopify] [Netflix]

---

[PROBLEM]
Sound familiar?

❌ Your team ignores your project management tool
❌ Important updates get lost in Slack and email
❌ You have no idea what's actually on track
❌ Status meetings eat 10 hours per week

There's a better way.

---

[HOW IT WORKS]
Get everyone aligned in 3 simple steps

1️⃣ Create Your First Project
Add tasks in seconds. Organize by list, board, or timeline.

2️⃣ Invite Your Team
Everyone sees what to work on next. No training required.

3️⃣ Track Progress Automatically
Real-time dashboards show what's on track and what needs attention.

Average setup time: 15 minutes

---

[BENEFITS]
Why teams love TaskFlow

⚡ Actually Simple
If your team needs training to use it, it's too complicated. TaskFlow is intuitive from day one.

🎯 Nothing Falls Through
Every task, comment, and file is connected. No more lost updates or forgotten details.

📊 See Progress at a Glance
Real-time dashboards show status without status meetings. Get 10 hours back every week.

🔗 Integrates With Everything
Connect Slack, Google Drive, GitHub, and 50+ tools. Work where you want.

---

[FEATURES WITH SCREENSHOTS]
### Multiple Views
See your work as a list, board, timeline, or calendar. Everyone works in their preferred view.
[Screenshot]

### Real-Time Collaboration
Comment on any task. @mention teammates. See updates instantly. No more email threads.
[Screenshot]

### Automated Progress Tracking
Track time, budgets, and milestones automatically. Know instantly if you're on track.
[Screenshot]

---

[TESTIMONIALS]
"We tried Asana, Monday, and Jira. Our team actually uses TaskFlow."
Marcus Chen, Product Lead at Airbnb

"From 15 people to 150 without changing tools. TaskFlow scaled with us."
Jennifer Park, COO at Stripe

"We saved $50K in first year just from fewer status meetings."
David Liu, Operations at Shopify

---

[COMPARISON]
TaskFlow vs The Rest

| Feature              | TaskFlow | Competitor A | Competitor B |
|---------------------|----------|--------------|--------------|
| Setup Time          | 15 min   | 2 weeks      | 1 week       |
| Training Required   | None     | Yes          | Yes          |
| Team Adoption       | 95%      | 60%          | 50%          |
| Price per User      | $12      | $18          | $24          |

---

[PRICING]
Simple, transparent pricing

Free: Up to 3 users
Pro: $12/user/month - Everything teams need
Business: $20/user/month - Advanced features + priority support

[Start Free Trial]

---

[FAQ]
**Do we need to migrate data?**
We can import from Asana, Monday, Jira, and most other tools in one click.

**How long does setup take?**
Most teams are fully set up in under an hour.

**Can we cancel anytime?**
Yes, cancel with one click. No questions asked.

**Is our data secure?**
SOC 2 Type II certified. Enterprise-grade security for all plans.

---

[FINAL CTA]
Join 15,000+ Teams Shipping Faster

[Start Free Trial]

✓ 14-day free trial
✓ No credit card required
✓ Set up in 15 minutes
✓ Cancel anytime

Questions? Chat with us or [book a demo →]
```

---

**Accessibility Requirements**: Semantic HTML structure. Alt text for images. Keyboard navigable. Sufficient color contrast. Descriptive link text. Video captions. Form labels. ARIA labels where needed. Screen reader tested. Mobile responsive. No auto-playing media. Clear focus indicators.

**Psychological Principles**: Attention (headline grabs). Interest (benefits build). Desire (social proof validates). Action (clear CTAs). Reciprocity (free value). Social proof (others succeeded). Authority (credible sources). Scarcity (limited offers - ethical only). Loss aversion (what they miss). Pattern interrupts (break scrolling). Visual hierarchy (guide eye). Progressive disclosure (reveal as scroll).

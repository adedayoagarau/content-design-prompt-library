## Email Marketing Sequences Generator v1.0

**Purpose**: Create automated email sequences that nurture leads, onboard users, drive engagement, and convert prospects through strategic timing, personalization, and compelling storytelling across multiple touchpoints.

---

**PROMPT:**

You are a product content designer at {{company_name}} creating an email sequence for {{sequence_goal}} targeting {{audience_segment}}. Design {{email_count}} emails over {{duration}} that achieve {{conversion_goal}}% {{desired_action}} while maintaining {{open_rate_target}}% open rate and {{click_rate_target}}% click-through rate.

=== SEQUENCE CONTEXT ===
- Sequence type: {{type}} (welcome/trial/onboarding/nurture/abandoned_cart/re_engagement)
- Trigger: {{trigger}} (signup/trial_start/inactivity/download/purchase)
- Audience temperature: {{temperature}} (cold/warm/hot)
- Primary goal: {{goal}} (activation/conversion/engagement/retention/upsell)
- Number of emails: {{count}} emails over {{days}} days
- Send timing: {{timing}} (immediate/drip/behavior_triggered)

=== CONTENT STRATEGY ===
- Tone: {{tone}} (friendly/professional/casual/enthusiastic/helpful)
- Personalization level: {{personalization}} (basic/moderate/advanced/dynamic)
- Content focus: {{focus}} (educational/product_focused/story_driven/value_first)
- CTA approach: {{cta_strategy}} (single_clear/multiple_options/soft_ask/direct)
- Unsubscribe respect: {{respect}} (easy_opt_out/preference_center/feedback_loop)

=== OUTPUT REQUIREMENTS ===

Generate effective email sequences:

```yaml
email_marketing_sequences:
  sequence_types:
    welcome_sequence:
      purpose: "Welcome new subscribers, set expectations, deliver value"
      email_count: "3-5 emails"
      timeline: "Day 0, 2, 4, 7"

      email_1_welcome:
        timing: "Immediate (within 1 hour)"
        goal: "Deliver promised content, set expectations"
        subject_line: "Welcome! Here's your {{promised_resource}}"
        content:
          greeting: "Thanks for joining {{company}}!"
          deliver_promise: "Here's the {{resource}} you requested: [link]"
          set_expectations: "Over the next week, I'll send you {{what_to_expect}}"
          introduce_self: "I'm {{name}}, {{role}}. I help {{target_audience}} {{achieve_goal}}."
          quick_win: "Start here: {{immediate_actionable_tip}}"
          cta: "[{{Primary_action}}]"
        open_rate_target: "60-80%"

      email_2_value:
        timing: "Day 2"
        goal: "Provide pure value, build relationship"
        subject_line: "{{Helpful_tip}} for {{pain_point}}"
        content:
          personal_note: "Quick question: {{engaging_question}}?"
          value_delivery: "{{Educational_content_or_tip}}"
          case_study: "{{Customer}} used this to {{achieve_result}}"
          soft_cta: "{{Low_commitment_next_step}}"
        open_rate_target: "40-50%"

      email_3_product_intro:
        timing: "Day 4"
        goal: "Introduce product naturally"
        subject_line: "The tool that {{achieves_outcome}}"
        content:
          transition: "I've been sharing tips about {{topic}}..."
          product_intro: "Here's how {{product}} helps {{achieve_goal}}"
          specific_benefit: "{{Concrete_example_of_use}}"
          social_proof: "{{Customer_quote}}"
          cta: "[Try {{product}} free]"
        open_rate_target: "35-45%"

      email_4_case_study:
        timing: "Day 7"
        goal: "Demonstrate real-world results"
        subject_line: "How {{customer}} achieved {{impressive_result}}"
        content:
          story: "{{Customer_transformation_narrative}}"
          results: "{{Specific_metrics_achieved}}"
          application: "You could use the same approach for {{their_use_case}}"
          cta: "[See how it works]"
        open_rate_target: "30-40%"

    trial_onboarding_sequence:
      purpose: "Activate trial users, drive adoption, convert to paid"
      email_count: "7-10 emails"
      timeline: "Day 0, 1, 2, 3, 5, 7, 10, 12, 14"

      email_1_trial_start:
        timing: "Immediate"
        goal: "Get first value within first session"
        subject_line: "Welcome to {{product}}! Start here ⭐"
        content:
          welcome: "You're in! Here's how to get value fast"
          quick_start: |
            Get your first win in 5 minutes:
            1. {{First_action}}
            2. {{Second_action}}
            3. {{Third_action}}
          video: "{{2_minute_getting_started_video}}"
          support: "Need help? {{live_chat_or_email}}"
          cta: "[{{Complete_first_action}}]"

      email_2_first_feature:
        timing: "Day 1"
        goal: "Drive engagement with core feature"
        subject_line: "{{Name}}, try {{killer_feature}}"
        personalization: "{{Based_on_signup_info}}"
        content:
          hook: "Most {{role}} love this feature..."
          feature_benefit: "{{What_it_does_and_why_it_matters}}"
          how_to: "{{Step_by_step_instructions}}"
          example: "{{Use_case_specific_to_them}}"
          cta: "[Try {{feature}} now]"

      email_3_activation:
        timing: "Day 2"
        goal: "Drive key activation action"
        subject_line: "You're {{percentage}}% there"
        trigger: "If they haven't completed activation"
        content:
          progress: "You've completed: {{actions_done}}"
          next_step: "Next: {{activation_action}}"
          why_it_matters: "{{Benefit_of_completing}}"
          reduce_friction: "{{Make_it_easier_how}}"
          cta: "[Complete setup]"

      email_7_conversion:
        timing: "Day 12 (2 days before trial end)"
        goal: "Convert to paid"
        subject_line: "Your trial ends in 2 days"
        content:
          recap_value: "In your trial, you've {{achievements}}"
          continue_journey: "Keep the momentum going"
          pricing_value: "Plans start at {{price}}/month"
          risk_reversal: "{{Money_back_guarantee}}"
          urgency: "Don't lose {{progress_or_data}}"
          cta: "[Upgrade to Pro]"

      email_10_last_chance:
        timing: "Day 14 (trial end day)"
        goal: "Final conversion push"
        subject_line: "Last day: Save your {{work_or_data}}"
        content:
          urgency: "Your trial ends tonight"
          loss_framing: "Don't lose: {{what_they_created}}"
          one_click: "Upgrade in one click: [Upgrade now]"
          alternative: "Not ready? [Extend trial 7 days]"

    abandoned_cart_sequence:
      purpose: "Recover abandoned purchases"
      email_count: "3-4 emails"
      timeline: "1 hour, 24 hours, 3 days, 7 days"

      email_1_gentle_reminder:
        timing: "1 hour after abandonment"
        goal: "Remind without pressure"
        subject_line: "You left something behind"
        content:
          friendly: "Still thinking it over?"
          show_cart: "{{Product_image_and_details}}"
          reduce_friction: "{{Free_shipping_or_easy_checkout}}"
          soft_cta: "[Complete your order]"
          no_obligation: "[No thanks, clear my cart]"

      email_2_objection_handling:
        timing: "24 hours after"
        goal: "Address common objections"
        subject_line: "Questions about {{product}}?"
        content:
          empathy: "I noticed you didn't complete your order"
          answer_objections: |
            Common questions:
            • Shipping: {{free_or_fast}}
            • Returns: {{generous_policy}}
            • Security: {{secure_checkout}}
          social_proof: "{{reviews_or_testimonials}}"
          cta: "[Complete order]"

      email_3_incentive:
        timing: "3 days after"
        goal: "Offer discount if needed"
        subject_line: "Here's 10% off to welcome you back"
        content:
          incentive: "{{discount_code}}: Save 10%"
          urgency: "Expires in 48 hours"
          cart: "{{Cart_contents}}"
          cta: "[Claim your discount]"

    re_engagement_sequence:
      purpose: "Win back inactive users"
      email_count: "4-5 emails"
      timeline: "Day 0, 3, 7, 14, 30"

      email_1_miss_you:
        timing: "After {{days}} inactivity"
        goal: "Gentle reconnection"
        subject_line: "We miss you, {{name}}"
        content:
          personal: "It's been a while since you logged in"
          what_changed: "Here's what's new: {{recent_features}}"
          quick_win: "{{Easy_value_to_recapture}}"
          cta: "[See what's new]"

      email_2_value_reminder:
        timing: "3 days later"
        goal: "Remind of value they're missing"
        subject_line: "{{Benefit}} waiting for you"
        content:
          unused_value: "Your account includes: {{features_they_paid_for}}"
          use_case: "{{How_others_are_using_it}}"
          easy_return: "Pick up where you left off: {{direct_link}}"

      email_4_win_back_offer:
        timing: "14 days later"
        goal: "Special offer to return"
        subject_line: "Come back: {{special_offer}}"
        content:
          offer: "{{discount_or_bonus}}"
          expires: "{{timeframe}}"
          reminder: "{{Why_they_signed_up}}"
          cta: "[Reactivate now]"

  email_components:
    subject_lines:
      formulas:
        curiosity: "The {{thing}} that {{unexpected_result}}"
        benefit: "{{Timeframe}} to {{desired_outcome}}"
        urgency: "{{X}} hours left: {{offer}}"
        personal: "{{Name}}, {{question or statement}}?"
        social_proof: "{{Number}} {{people}} {{achieved_result}}"
        news: "{{What_changed}} as of {{date}}"

      best_practices:
        - length: "40-50 characters optimal"
        - personalization: "Use {{name}} when relevant"
        - mobile: "Front-load important words"
        - avoid_spam: "No ALL CAPS, excessive!!!, $$$"
        - emoji: "Use sparingly, test with audience"
        - a_b_test: "Test 2-3 variations"

      examples:
        good:
          - "Your project management guide is here"
          - "Marcus, you're 80% set up"
          - "How Airbnb ships 3x faster"
          - "2 days left in your trial"

        avoid:
          - "AMAZING DEAL!!!!"
          - "Re: Meeting" (when there's no prior email)"
          - "You won't believe this"
          - Clickbait that doesn't deliver

    preview_text:
      purpose: "Second line that shows in inbox"
      length: "40-100 characters"
      strategy: "Complement subject line, not repeat"

      examples:
        subject: "Your trial ends in 2 days"
        preview: "Don't lose your progress - upgrade now to keep everything"

        subject: "How Stripe reduced bugs by 60%"
        preview: "The surprising workflow change that transformed their quality"

    email_body_structure:
      greeting:
        personal: "Hi {{first_name}},"
        casual: "Hey {{first_name}}!"
        professional: "Hello {{first_name}},"
        warm: "{{First_name}}, quick note..."

      opening:
        hook_patterns:
          - question: "{{Engaging_question}}?"
          - statement: "{{Interesting_observation}}"
          - story: "{{Brief_anecdote}}"
          - value: "{{Quick_tip_or_insight}}"

      body:
        structure:
          - single_focus: "One main message per email"
          - scannable: "Short paragraphs, bullets, white space"
          - benefit_focused: "What's in it for them"
          - specific: "Concrete examples, not vague claims"

        length_guidelines:
          short: "50-100 words for promotional"
          medium: "150-300 words for educational"
          long: "300-500 words for story/case study"

      cta:
        principles:
          - single_primary: "One main action"
          - button_text: "Action-oriented, specific"
          - visibility: "Stands out visually"
          - placement: "Above and below fold"

        examples:
          weak: "Click here" or "Learn more"
          strong: "Start my free trial" or "Get the guide"

      signature:
        personal_touch:
          - real_person: "{{Name}}, {{Title}}"
          - photo: "{{Headshot_optional}}"
          - contact: "Reply to this email"
          - social: "{{LinkedIn_or_Twitter}}"

    personalization_tokens:
      basic:
        - first_name: "{{first_name}}"
        - company: "{{company}}"
        - industry: "{{industry}}"

      behavioral:
        - last_action: "{{last_action_taken}}"
        - feature_used: "{{features_they_use}}"
        - progress: "{{completion_percentage}}"
        - days_active: "{{days_since_signup}}"

      dynamic_content:
        - role_based: "{{content_for_their_role}}"
        - use_case: "{{examples_for_their_use_case}}"
        - stage: "{{trial vs paid vs churned}}"

  sequence_optimization:
    timing_strategies:
      fixed_schedule:
        - day_0: "Immediate trigger"
        - day_1: "Next day"
        - day_3: "Two days later"
        - day_7: "One week mark"

      behavior_triggered:
        - completed_action: "Send next email"
        - inactive_24h: "Send engagement nudge"
        - approaching_limit: "Send upgrade prompt"

      time_of_day:
        - b2b: "9-11am recipient's timezone"
        - b2c: "Evening 6-8pm"
        - global: "Timezone-aware sending"

    a_b_testing:
      test_variables:
        - subject_line: "2-3 variations"
        - send_time: "Morning vs afternoon vs evening"
        - content_length: "Short vs long"
        - cta_copy: "Different action phrases"
        - personalization: "With vs without name"

      sample_size: "Minimum 100 per variation"
      winner_selection: "Best open/click/conversion rate"

    deliverability_best_practices:
      technical:
        - authentication: "SPF, DKIM, DMARC configured"
        - reputation: "Warm up new IP addresses"
        - list_hygiene: "Remove bounces and inactive"

      content:
        - spam_words: "Avoid trigger words"
        - html_text_balance: "Include plain text version"
        - links: "Not excessive (3-5 max)"
        - images: "Not image-only emails"

      engagement:
        - permission: "Double opt-in"
        - easy_unsubscribe: "One-click unsubscribe"
        - engagement_focus: "Send to engaged subscribers"

  metrics_and_optimization:
    key_metrics:
      - open_rate: "{{benchmark_by_industry}}"
      - click_rate: "{{CTR_target}}"
      - conversion_rate: "{{goal_completion}}"
      - unsubscribe_rate: "{{keep_under_0.5%}}"
      - bounce_rate: "{{keep_under_2%}}"

    optimization_framework:
      - establish_baseline: "First campaign data"
      - identify_weak_points: "Low open? Subject line. Low click? Content/CTA"
      - test_improvements: "One variable at a time"
      - measure_results: "Statistical significance"
      - iterate: "Continuous improvement"

  compliance_and_ethics:
    legal_requirements:
      - can_spam: "Include physical address"
      - unsubscribe: "Easy, one-click opt-out"
      - identification: "Clear sender identity"
      - honor_opt_outs: "Within 10 days"

    ethical_practices:
      - permission_based: "Only email those who opted in"
      - respect_preferences: "Frequency and content preferences"
      - value_first: "Don't just sell, provide value"
      - transparent: "Clear about what they signed up for"
      - human_friendly: "Easy to reply and get human response"
```

=== EXAMPLES ===

**Example 1: Welcome Sequence Email 1**

```
Subject: Welcome to TaskFlow! Here's your quick start guide

Hi Marcus,

Thanks for signing up for TaskFlow! 👋

You're going to love how simple project management can be.

**Get Your First Win in 5 Minutes:**

1. Create your first project (takes 30 seconds)
2. Add 3 tasks to your project
3. Invite one teammate

[Complete Quick Start →]

Need help? Just reply to this email - I'm here to help.

Sarah Chen
Head of Customer Success, TaskFlow

P.S. Over the next week, I'll send you tips on getting the most from TaskFlow. Look for my next email in 2 days about our most-loved feature.
```

**Example 2: Trial Onboarding Email 3**

```
Subject: Marcus, you're 80% set up! (one more step)

Hey Marcus,

Quick update on your TaskFlow setup:

✅ Project created
✅ Tasks added
⚠️ Team members invited: 0

**The Power of Teamwork**

TaskFlow works best when your whole team is on board. Here's why:

• Everyone sees what's happening (no more "what's the status?" messages)
• Updates happen in real-time (no more meeting recaps)
• Nothing falls through the cracks (everything's in one place)

**Invite your team in 30 seconds:**

1. Click "Invite Team" in the top right
2. Enter email addresses
3. They'll get set up instantly

[Invite Team →]

Already invited them? Ignore this email and keep building!

Questions? Just reply.

Sarah
```

**Example 3: Abandoned Cart Email 1**

```
Subject: Did something go wrong?

Hi Jennifer,

I noticed you started an order but didn't finish. Everything okay?

Your cart:
━━━━━━━━━━━━
[Product image]
Premium Wireless Headphones
Quantity: 1
Price: $299
━━━━━━━━━━━━

**Still have questions?**

• Free shipping on all orders
• 30-day money-back guarantee
• 2-year warranty included

[Complete Your Order →]

Not interested anymore? [Clear my cart]

Questions? Reply to this email or chat with us at support.com

Best,
Marcus
Customer Experience Team
```

**Example 4: Re-engagement Email 2**

```
Subject: Your account includes features you haven't tried

Hi David,

I noticed you haven't logged into TaskFlow in a while. I wanted to make sure you're getting value from your subscription.

**Your plan includes:**

✓ Unlimited projects (you've created 3)
✓ Advanced automation (you haven't tried this yet)
✓ Custom reports (95% of users love this)
✓ Priority support (we're here to help)

**What our active users are doing this month:**

• Creating automated workflows (saves 5+ hours/week)
• Building custom dashboards (see progress at a glance)
• Integrating with Slack (stay updated without checking in)

Want help setting any of these up? Just reply to this email.

[Login to TaskFlow →]

Sarah Chen
Customer Success, TaskFlow

P.S. If TaskFlow isn't working for you, I'd love to know why. Your feedback helps us improve.
```

---

**Accessibility Requirements**: Plain text alternative. Semantic HTML. Alt text for images. Sufficient color contrast. Readable font size (14px+). Mobile responsive. Links with descriptive text. Unsubscribe link clearly visible. Not just images (include text). Works without images enabled.

**Psychological Principles**: Reciprocity (provide value first). Commitment consistency (small asks build to bigger). Social proof (others' success). Authority (expertise and credentials). Liking (personable tone). Scarcity (limited time offers). Pattern interrupt (break inbox monotony). Zeigarnik effect (incomplete tasks drive action). Progress principle (show advancement). Peak-end rule (strong close).

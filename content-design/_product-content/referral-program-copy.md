## Referral Program Copy Generator v1.0

**Purpose**: Create compelling referral program messaging that motivates customers to share your product with their network through clear incentives, easy sharing mechanisms, and messaging that celebrates mutual benefit without feeling salesy.

---

**PROMPT:**

You are a product content designer at {{company_name}} creating referral program copy to achieve {{referral_goal}} referrals per month with {{conversion_rate}}% conversion. Design messaging that motivates {{user_segment}} to refer {{target_network}} through {{incentive_structure}} while maintaining {{brand_authenticity}}.

=== REFERRAL PROGRAM CONTEXT ===
- Incentive type: {{incentive}} (double_sided/referrer_only/referee_only)
- Reward: {{reward}} (discount/credit/cash/feature_access/swag)
- Reward value: {{value}} per successful referral
- Program mechanics: {{mechanics}} (unique_link/code/email_invite/social_share)
- Target: {{target}} (friends/colleagues/professional_network)
- Trigger: {{trigger}} (always_on/milestone_based/seasonal_campaign)

=== MESSAGING STRATEGY ===
- Primary motivation: {{motivation}} (altruism/reward/status/reciprocity)
- Tone: {{tone}} (exciting/casual/professional/friendly)
- Social proof: {{proof}} (referral_stats/success_stories/popular_program)
- Sharing friction: {{friction}} (one_click/requires_input/manual)
- Attribution window: {{window}} (30_days/60_days/lifetime)

=== OUTPUT REQUIREMENTS ===

Generate effective referral program copy:

```yaml
referral_program_copy:
  program_announcement:
    headline_formulas:
      mutual_benefit: "Give {{benefit}}, Get {{benefit}}"
      generous_giver: "Share {{product}}, Your friends get {{discount}}%"
      reward_focused: "Earn {{reward}} for every friend who joins"
      impact_focused: "Help your friends {{achieve_outcome}}"

    body_structure:
      what: "Share {{product}} with friends"
      they_get: "They get {{referee_benefit}}"
      you_get: "You get {{referrer_benefit}}"
      how: "{{Simple_sharing_mechanism}}"
      why: "{{Why_worth_sharing}}"

    examples:
      double_sided_discount:
        headline: "Give $20, Get $20"
        body: |
          Love {{product}}? Share it with friends!

          When they sign up:
          • They get $20 off their first month
          • You get $20 in account credit

          **How it works:**
          1. Share your unique link
          2. Friends sign up and save $20
          3. You earn $20 credit (no limit!)

          [Get my referral link]

      altruistic_focus:
        headline: "Help your team work better together"
        body: |
          Know a team that could benefit from {{product}}?

          Share your referral link and they'll get:
          • 30-day extended trial
          • Free onboarding session
          • 20% off first year

          Plus, you'll earn {{reward}} for each team that joins.

          [Share with colleagues]

  in_app_referral_prompts:
    success_moment_trigger:
      when: "After user achieves something valuable"
      message: |
        Nice work! 🎉

        You just {{achievement}}.

        Know others who'd benefit from {{product}}?

        Share your link and you both get {{incentive}}.

        [Share {{product}}]

    milestone_trigger:
      when: "User hits usage milestone"
      message: |
        You've {{milestone_achievement}}!

        Your friends would love {{product}} too.

        Give them {{referee_benefit}} • Get {{referrer_benefit}}

        [Invite friends]

    empty_state:
      when: "Collaboration feature with no teammates yet"
      message: |
        {{Feature}} works better with your team!

        Invite colleagues and:
        • They get {{benefit}}
        • You get {{reward}}
        • Everyone works better together

        [Invite team] [Maybe later]

  sharing_mechanisms:
    unique_link:
      headline: "Your personal referral link"
      copy: |
        Share this link with friends:

        [{{unique_url}}] [Copy link]

        When they sign up, you both get {{benefit}}!

        Track your referrals: {{referrals_count}} signups so far

      social_sharing:
        - twitter: "[Share on Twitter]"
        - linkedin: "[Share on LinkedIn]"
        - email: "[Email friends]"

    referral_code:
      headline: "Give friends your code: {{CODE}}"
      copy: |
        Share code {{REFERRAL_CODE}} with friends.

        They'll save {{discount}}% at checkout.
        You'll earn {{reward}} for each signup.

        [Copy code] [Share via email]

    email_invitation:
      headline: "Invite by email"
      form: |
        Enter friend's email addresses:

        [____________________] [+Add another]

        Personal message (optional):
        [____________________]

        [Send invitations]

      template: |
        Subject: Try {{product}} - Save {{discount}}%

        Hi,

        I've been using {{product}} for {{duration}} and thought you'd find it helpful.

        Use my link to save {{discount}}% on your first {{period}}:
        [{{unique_url}}]

        {{personal_message_if_provided}}

        {{sender_name}}

  referral_dashboard:
    overview_section:
      stats_displayed:
        - total_referrals: "{{count}} friends invited"
        - successful_conversions: "{{count}} joined {{product}}"
        - rewards_earned: "${{amount}} earned"
        - pending_rewards: "{{count}} friends in trial"

      messaging: |
        **Your Referrals**

        {{successful_count}} / {{invited_count}} friends joined

        You've earned: ${{earned_amount}}
        Pending: ${{pending_amount}}

        [Invite more friends]

    leaderboard:
      when: "Gamified programs"
      copy: |
        **Top Referrers This Month**

        1. {{Name}} - {{count}} referrals 🏆
        2. {{Name}} - {{count}} referrals 🥈
        3. {{Name}} - {{count}} referrals 🥉
        ...
        You: #{{rank}} - {{count}} referrals

        {{encouragement_message}}

    reward_redemption:
      formats:
        account_credit:
          message: "Your credits are automatically applied to your account"

        cash_payout:
          message: |
            You've earned ${{amount}}!

            [Request payout via PayPal]

            Minimum payout: ${{minimum}}
            Processing time: {{days}} business days

        physical_reward:
          message: |
            You've earned: {{reward_item}}!

            [Claim your {{item}}]

            Shipping: Free, arrives in {{timeframe}}

  social_sharing_copy:
    twitter_templates:
      benefit_focused: |
        I've been using @{{handle}} to {{achieve_outcome}}.

        Try it and save {{discount}}%: {{short_url}}

      problem_solution: |
        Tired of {{pain_point}}?

        @{{handle}} solved it for me. Get {{discount}}% off: {{short_url}}

      testimonial_style: |
        {{Product}} helped me {{achievement}}.

        If you {{use_case}}, you'll love it: {{short_url}}

    linkedin_templates:
      professional: |
        I've been using {{product}} for the past {{duration}} and it's transformed how we {{workflow}}.

        If your team struggles with {{challenge}}, I highly recommend it.

        [Try {{product}}] {{url}}

        #{{category}} #{{topic}}

    email_templates:
      colleague_to_colleague: |
        Subject: Tool recommendation: {{product}}

        Hi {{name}},

        I wanted to share a tool that's been really helpful for {{use_case}}.

        {{Product}} helps us {{main_benefit}}. Since we started using it {{timeframe}} ago, we've {{achievement}}.

        I thought it might be useful for {{their_use_case}}.

        Here's a link to try it (you'll get {{benefit}}):
        [{{url}}]

        Let me know what you think!

        {{your_name}}

      friend_to_friend: |
        Subject: Check out {{product}}

        Hey!

        I've been using {{product}} and it's amazing for {{use_case}}.

        Thought you might like it - here's {{benefit}}% off:
        [{{url}}]

        {{your_name}}

  incentive_messaging:
    credit_based:
      format: "Earn ${{amount}} credit for every friend who joins"
      clarity: |
        **How it works:**
        • Friend signs up: You get ${{amount}} credit
        • Friend subscribes: You get ${{amount}} more
        • Credit applies to your subscription
        • No limit on referrals!

    discount_based:
      format: "Give {{discount}}%, get {{discount}}%"
      clarity: |
        **Benefits:**
        • Your friend saves {{discount}}% on first {{period}}
        • You save {{discount}}% on your next {{period}}
        • Stackable up to {{max_discount}}%

    tiered_rewards:
      format: |
        **Rewards that grow with you:**
        • 1-5 referrals: ${{tier_1}} each
        • 6-10 referrals: ${{tier_2}} each
        • 11+ referrals: ${{tier_3}} each

    milestone_bonuses:
      format: |
        **Bonus rewards:**
        • 5 referrals: ${{bonus_1}} bonus
        • 10 referrals: ${{bonus_2}} bonus
        • 25 referrals: ${{bonus_3}} bonus

  motivation_strategies:
    altruistic_framing:
      headline: "Help your {{network}} work better"
      body: |
        You love {{product}}. Your {{colleagues/friends}} deserve to know about it.

        Share {{product}} and help them {{achieve_outcome}}.

        Oh, and you'll get {{reward}} too.

    reward_first:
      headline: "Earn {{unlimited_amount}} in rewards"
      body: |
        Every friend you invite earns you {{reward_amount}}.

        No limit. Seriously.

        {{top_referrer}} has earned ${{impressive_amount}} this year.

        [Start earning]

    social_proof:
      headline: "Join {{number}} people sharing {{product}}"
      body: |
        Our referral program is one of the most popular ways people discover {{product}}.

        Last month alone:
        • {{referral_count}} successful referrals
        • {{average_reward}} earned per referrer
        • {{satisfaction_rate}}% of referred users love it

    competitive:
      headline: "Think you can reach the top?"
      body: |
        Top referrer this month: {{leader_name}} with {{count}} referrals

        Can you beat them?

        Leaderboard prizes:
        • 1st place: {{prize_1}}
        • 2nd place: {{prize_2}}
        • 3rd place: {{prize_3}}

  program_rules_and_faq:
    terms_clarity:
      headline: "How it works"
      sections:
        eligibility: |
          **Who can refer?**
          All {{plan}} customers in good standing

        what_counts: |
          **What counts as a successful referral?**
          When your friend:
          1. Signs up using your link
          2. {{conversion_action}}
          3. {{retention_requirement}}

        reward_delivery: |
          **When do I get my reward?**
          • Credits: {{timing}}
          • Cash: {{timing_and_minimum}}

        limitations: |
          **Are there limits?**
          • Maximum referrals: {{limit_or_unlimited}}
          • Reward cap: {{cap_or_unlimited}}
          • Cannot refer yourself or household members

    faq:
      - q: "Can I refer someone who's already a customer?"
        a: "No, referrals must be new customers who haven't used {{product}} before."

      - q: "What if my friend doesn't use my link but signs up anyway?"
        a: "Contact support within {{days}} days with their email. We'll credit you if they confirm."

      - q: "Do rewards expire?"
        a: "{{expiration_policy}}"

      - q: "Can I combine referral rewards with other discounts?"
        a: "{{stacking_policy}}"

  testing_and_optimization:
    key_metrics:
      invitation_rate: "{{invited / active_users}}"
      conversion_rate: "{{converted / invited}}"
      viral_coefficient: "{{referrals_per_user}}"
      cost_per_acquisition: "{{reward_cost / new_customers}}"

    a_b_testing:
      incentive_structure: "Double-sided vs single-sided"
      reward_amount: "$10 vs $20 vs $50"
      messaging: "Altruistic vs reward-focused"
      sharing_method: "Link vs code vs email"

  ethical_considerations:
    dos:
      - genuine_value: "Only if product is actually good"
      - clear_terms: "Transparent rules and limits"
      - fair_rewards: "Deliver what you promise"
      - anti_spam: "Don't encourage spam sharing"

    donts:
      - pyramid_schemes: "No multi-level referrals"
      - fake_urgency: "No false reward expirations"
      - spam_encouragement: "No mass email blasting"
      - misleading_claims: "Honest about product benefits"
```

=== EXAMPLES ===

**Example 1: Simple Double-Sided Discount**

```
Give $20, Get $20

Love TaskFlow? Share it with friends and you both save.

**How it works:**
1. Share your unique link
2. Friends get $20 off their first month
3. You get $20 credit when they subscribe

No limit on referrals!

[Get my referral link]

---

Your referral link:
taskflow.com/r/marcus-x7k2

[Copy link] [Share via email] [Tweet]

Referrals: 3 friends joined • $60 earned
```

**Example 2: Professional Network Referral**

```
Help your colleagues work better together

Know teams that could benefit from TaskFlow?

**They get:**
• 30-day extended trial (vs standard 14 days)
• Free team onboarding session ($299 value)
• 20% off first year

**You get:**
• $100 for each team that subscribes
• Entry into monthly drawing ($500 Amazon gift card)
• Exclusive "Top Referrer" swag

[Share with colleagues →]

---

Perfect for:
✓ Project managers
✓ Product teams
✓ Marketing teams
✓ Anyone tired of email-based project management

Your unique link:
taskflow.com/teams/refer/marcus-enterprise

[Copy] [Email] [LinkedIn]
```

**Example 3: Milestone Achievement Trigger**

```
🎉 You've completed 100 projects!

You're clearly getting value from TaskFlow.

Know others who'd benefit?

Share TaskFlow and:
• Give friends 50% off (2 months)
• Earn $25 per signup
• Help teams work better

[Share my link →]

[Maybe later]

---

You've referred: 2 friends
You've earned: $50 in credits
```

**Example 4: Referral Dashboard**

```
Your Referrals

━━━━━━━━━━━━━━━━━━━━

**Overview**
12 friends invited
8 joined TaskFlow
$200 earned in credits

**Active Invitations**
• sarah@company.com - Invited 3 days ago
• david@startup.com - In trial (4 days left)
• team@agency.com - Invited today

**Rewards**
Credits earned: $200
Applied to account: $150
Available: $50

Next billing: March 15 ($0 - using credits!)

[Invite more friends →]

━━━━━━━━━━━━━━━━━━━━

**This month's leaderboard**
1. Jennifer P. - 15 referrals 🏆
2. Marcus C. - 12 referrals 🥈 ← You!
3. David L. - 10 referrals 🥉

Keep going! 3 more for first place.

━━━━━━━━━━━━━━━━━━━━

**Share your link**

taskflow.com/r/marcus-x7k2

[Copy] [Email] [Twitter] [LinkedIn]
```

---

**Accessibility Requirements**: Clear program rules. Easy-to-copy referral links/codes. Keyboard-navigable sharing buttons. Screen reader friendly dashboard. Plain language terms. Visual + text reward indicators. Accessible sharing forms. Clear success/error states.

**Psychological Principles**: Reciprocity (you help friends, you get rewarded). Social proof (others are referring). Status (leaderboards). Achievement (milestones). Gamification (points, levels). Viral loops (mutual benefit). Altruism (help friends). Self-interest (rewards). FOMO (others earning). Progress (visible stats).

## Newsletter Content Generator v1.0

**Purpose**: Create engaging newsletters that build community, provide value, drive engagement, and strengthen brand relationships through consistent, valuable content that subscribers look forward to receiving.

---

**PROMPT:**

You are a product content designer at {{company_name}} creating {{newsletter_name}} for {{subscriber_segment}}. Write content that achieves {{open_rate_target}}% open rate and {{click_rate_target}}% click-through rate while providing {{value_type}} value and strengthening {{brand_relationship}} with {{send_frequency}} cadence.

=== NEWSLETTER CONTEXT ===
- Newsletter type: {{type}} (product_updates/industry_news/educational/community/curated_content)
- Frequency: {{frequency}} (daily/weekly/biweekly/monthly)
- Subscriber count: {{count}}
- Primary goal: {{goal}} (engagement/education/traffic/sales/community)
- Content mix: {{mix}} (original_content/curated/mixed)
- Brand voice: {{voice}} (authoritative/friendly/playful/professional/inspirational)

=== CONTENT STRATEGY ===
- Length: {{length}} (digest_style/deep_dive/mixed)
- Format: {{format}} (text_heavy/visual/link_roundup/story_driven)
- Personalization: {{personalization}} (basic/segmented/dynamic)
- Monetization: {{monetization}} (ads/sponsored/product_placement/none)
- Mobile optimization: {{mobile}} (mobile_first/responsive)

=== OUTPUT REQUIREMENTS ===

Generate compelling newsletter content:

```yaml
newsletter_content:
  newsletter_types:
    product_updates_newsletter:
      purpose: "Keep users informed about product changes"
      sections:
        whats_new:
          headline: "What's New This {{Period}}"
          format: |
            **{{Feature_name}}** ✨
            {{Brief_description}}
            {{Why_it_matters}}
            [Learn more →]

        coming_soon:
          headline: "On the Roadmap"
          format: |
            We're working on:
            • {{Feature_1}}
            • {{Feature_2}}
            • {{Feature_3}}

            Want to influence what we build? [Share feedback →]

        tips_and_tricks:
          headline: "Power User Tip"
          format: |
            💡 Did you know you can {{tip}}?

            {{Brief_explanation}}

            {{Use_case_or_example}}

        customer_spotlight:
          headline: "Customer Spotlight"
          format: |
            How {{Customer_name}} {{achieved_result}}

            "{{Quote}}" - {{Name}}, {{Company}}

            [Read their story →]

    industry_news_newsletter:
      purpose: "Position brand as thought leader, provide value"
      sections:
        editors_note:
          voice: "Personal, opinionated"
          format: |
            **From the Editor**

            {{Hot_take_or_observation}}

            {{Why_it_matters_to_readers}}

            - {{Name}}

        top_stories:
          format: |
            **{{Headline}}**
            {{1_2_sentence_summary}}
            {{Why_relevant}} [Read more →]

          count: "5-7 stories"
          curation: "Most relevant to audience"

        deep_dive:
          format: |
            **Deep Dive: {{Topic}}**

            {{Detailed_analysis_300_500_words}}

            {{Takeaways_or_implications}}

        quick_hits:
          format: |
            **Quick Hits**

            • {{News_1}} [→]
            • {{News_2}} [→]
            • {{News_3}} [→]
            • {{News_4}} [→]

    educational_newsletter:
      purpose: "Teach subscribers, build expertise"
      sections:
        main_lesson:
          format: |
            # {{Lesson_title}}

            {{Introduction_to_concept}}

            **Why This Matters**
            {{Relevance_and_importance}}

            **How It Works**
            {{Step_by_step_explanation}}

            **Try This**
            {{Actionable_exercise}}

        resources:
          format: |
            **Further Learning**
            • {{Resource_1}} [→]
            • {{Resource_2}} [→]
            • {{Resource_3}} [→]

        community_question:
          format: |
            **Question of the Week**

            {{Thought_provoking_question}}

            Hit reply and share your thoughts!

    curated_newsletter:
      purpose: "Save subscribers time finding best content"
      sections:
        must_reads:
          headline: "Must Reads This Week"
          format: |
            **{{Article_title}}**
            by {{Author}} at {{Publication}}

            Why I picked this: {{Personal_note}}

            [Read article →]

          count: "3-5 articles"

        tools_and_resources:
          headline: "Tools We're Loving"
          format: |
            **{{Tool_name}}**
            {{What_it_does}} {{Why_useful}}
            [Try it →]

        inspiration:
          headline: "Inspiration Corner"
          format: |
            {{Quote_or_example}}

            {{Context_or_commentary}}

    community_newsletter:
      purpose: "Build and engage community"
      sections:
        member_spotlight:
          format: |
            **Meet {{Member_name}}**

            [Photo]

            {{Brief_bio}}
            {{Interesting_fact_or_achievement}}

            Follow: {{Social_links}}

        community_highlights:
          format: |
            **Community Highlights**

            • {{Member}} shared {{contribution}} [→]
            • Great discussion on {{topic}} [Join →]
            • {{Event_name}} had {{attendance}} attendees!

        upcoming_events:
          format: |
            **Upcoming Events**

            📅 {{Event_name}}
            {{Date_and_time}}
            {{Brief_description}}
            [RSVP →]

        jobs_and_opportunities:
          format: |
            **Jobs & Opportunities**

            {{Company}} is hiring {{role}}
            {{Location}} | {{Type}}
            [Apply →]

  header_components:
    logo_and_branding:
      placement: "Top of email"
      elements:
        - company_logo: "{{Clickable_to_website}}"
        - newsletter_name: "{{Clear_branding}}"
        - issue_number: "Issue #{{number}} • {{date}}"

    navigation:
      web_version: "[View in browser]"
      preferences: "[Update preferences]"
      social_links: "{{Twitter}} {{LinkedIn}} {{Instagram}}"

    personalization:
      greeting: "Hi {{first_name}}," or "{{First_name}}, happy {{day}}!"

  content_best_practices:
    writing_style:
      conversational:
        - use_contractions: "We're" not "We are"
        - personal_pronouns: "You" and "I" not "one"
        - active_voice: "We shipped" not "Was shipped"
        - short_sentences: "Punchy and readable"

      scannable:
        - headings: "Clear section breaks"
        - bullets: "Lists over paragraphs"
        - bold: "Emphasize key points"
        - whitespace: "Generous spacing"

      valuable:
        - actionable: "Readers can apply immediately"
        - relevant: "Targeted to audience interests"
        - timely: "Fresh, current information"
        - unique: "Can't get this elsewhere"

    subject_line_formulas:
      value_promise: "{{Number}} {{things}} to {{achieve_goal}}"
      curiosity: "The {{surprising_thing}} about {{topic}}"
      news: "{{What_happened}} this week"
      question: "{{Thought_provoking_question}}?"
      urgency: "Last chance: {{opportunity}}"
      personal: "{{Name}}, {{specific_observation}}"

      examples:
        - "5 shortcuts you didn't know existed"
        - "The productivity myth everyone believes"
        - "What's new in TaskFlow: March edition"
        - "Are you making this common mistake?"
        - "Weekly roundup: March 15"

    preview_text:
      purpose: "Entice opens with 40-100 character preview"
      strategy: "Complement subject, don't repeat"

      examples:
        subject: "5 shortcuts you didn't know existed"
        preview: "These features will save you hours every week"

        subject: "What's new: March edition"
        preview: "New automation, mobile updates, and customer stories"

  engagement_elements:
    calls_to_action:
      types:
        read_more: "For linking to blog posts"
        try_it: "For new features"
        share_feedback: "For community engagement"
        refer_friend: "For growth"
        reply: "For relationship building"

      best_practices:
        - one_primary: "Clear main action per section"
        - descriptive: "Not generic 'click here'"
        - button_vs_link: "Buttons for primary, links for secondary"
        - tracking: "UTM parameters for analytics"

    interactive_elements:
      polls_surveys:
        format: |
          **Quick Poll**

          What would you like us to cover next?

          [ ] {{Topic_A}}
          [ ] {{Topic_B}}
          [ ] {{Topic_C}}

          [Vote now →]

      user_generated_content:
        format: |
          **Share Your Story**

          How do you use {{feature}}?

          Hit reply - we might feature you in next week's newsletter!

      social_sharing:
        format: |
          Found this helpful?
          [Share on Twitter] [Share on LinkedIn]

  footer_components:
    required_elements:
      physical_address: "{{Company_address}}"
      unsubscribe: "[Unsubscribe]"
      why_receiving: "You're receiving this because {{reason}}"

    optional_valuable_elements:
      preference_center: "[Update preferences]"
      past_issues: "[View archive]"
      social_links: "{{Links_to_social_profiles}}"
      contact: "[Reply] or email {{support_email}}"

    footer_copy:
      tone: "Friendly reminder of value"
      example: |
        You're receiving Weekly Roundup because you're awesome and signed up at taskflow.com

        Don't want these emails? We'll miss you, but [unsubscribe here]

        Want to adjust what you receive? [Update preferences]

        TaskFlow, Inc. • 123 Main St, San Francisco, CA 94105

  personalization_strategies:
    segmentation:
      by_behavior:
        - active_users: "Product tips and power user content"
        - inactive_users: "Re-engagement and what they're missing"
        - trial_users: "Onboarding and activation content"

      by_interest:
        - indicated_interests: "Based on preferences selected"
        - inferred_interests: "Based on content clicks"
        - job_role: "Content specific to their role"

      by_lifecycle:
        - new_subscribers: "Welcome series and fundamentals"
        - engaged: "Advanced content and exclusives"
        - at_risk: "Re-engagement campaigns"

    dynamic_content:
      conditional_blocks:
        - if_location: "{{Event_in_their_city}}"
        - if_plan: "{{Relevant_to_their_plan}}"
        - if_usage: "{{Based_on_features_used}}"

      personalized_recommendations:
        format: |
          **Recommended for You**

          Based on your interests in {{topic}}:
          • {{Article_1}}
          • {{Article_2}}
          • {{Article_3}}

  design_best_practices:
    layout:
      single_column: "Mobile-friendly, easy to read"
      hierarchy: "Clear visual flow"
      whitespace: "Not cramped or overwhelming"
      branding: "Consistent with brand identity"

    typography:
      body_text: "14-16px, readable font"
      headings: "Clear size hierarchy"
      line_height: "1.5-1.6 for readability"
      color: "Sufficient contrast (4.5:1)"

    images:
      usage: "Enhance but don't require for understanding"
      alt_text: "Always include descriptive alt text"
      file_size: "Optimized for email"
      width: "600px max for compatibility"

    mobile_optimization:
      responsive: "Adapts to screen size"
      touch_targets: "44px minimum for links/buttons"
      font_size: "Remains readable at mobile scale"
      images: "Scale appropriately"

  content_calendar:
    planning:
      themes:
        week_1: "{{Theme_or_focus}}"
        week_2: "{{Theme_or_focus}}"
        week_3: "{{Theme_or_focus}}"
        week_4: "{{Theme_or_focus}}"

      content_pipeline:
        - ideas: "Brainstorm and capture"
        - research: "Gather information"
        - draft: "Write content"
        - review: "Edit and refine"
        - schedule: "Queue for sending"

      batch_creation:
        - efficiency: "Write multiple at once"
        - consistency: "Maintain quality and voice"
        - buffer: "Stay ahead of schedule"

  metrics_and_optimization:
    key_metrics:
      open_rate:
        benchmark: "{{15_25%_average}}"
        improve_via: "Subject lines, send time, sender name"

      click_rate:
        benchmark: "{{2_5%_average}}"
        improve_via: "Content relevance, CTA clarity"

      unsubscribe_rate:
        benchmark: "{{under_0.5%}}"
        warning_sign: "{{over_1%}}"

      forward_rate:
        benchmark: "{{over_1%_is_good}}"
        indicator: "High value content"

    a_b_testing:
      subject_lines: "Test 2-3 variations"
      send_time: "Day and time optimization"
      content_format: "Long vs short, text vs visual"
      personalization: "With vs without"

    subscriber_feedback:
      direct_feedback:
        - "Reply with thoughts"
        - "Quick polls"
        - "Annual survey"

      behavioral_feedback:
        - click_patterns: "What they engage with"
        - time_reading: "How long they spend"
        - device_used: "Mobile vs desktop trends"

  growth_strategies:
    acquisition:
      signup_incentives:
        - content_upgrade: "Get {{resource}} when you subscribe"
        - exclusive_content: "Subscriber-only insights"
        - early_access: "News before anyone else"

      signup_placement:
        - website_footer: "Global placement"
        - blog_posts: "Content inline CTAs"
        - exit_intent: "Popup before leaving"
        - welcome_modal: "First visit offer"

    retention:
      re_engagement:
        - win_back_sequence: "{{For_inactive_subscribers}}"
        - preference_update: "Change what you receive"
        - snooze_option: "Pause for {{duration}}"

      satisfaction:
        - consistent_value: "Every issue delivers"
        - respect_time: "Concise and scannable"
        - easy_feedback: "Simple to reply"
        - preference_control: "Choose frequency/content"

    referral:
      incentivized:
        format: |
          **Love this newsletter?**

          Share with a friend and you both get {{incentive}}

          [Share now →]

      non_incentivized:
        format: |
          Know someone who'd find this helpful?
          [Forward this email] or [Share on social]
```

=== EXAMPLES ===

**Example 1: Product Updates Newsletter**

```
TASKFLOW WEEKLY
Issue #42 • March 15, 2024

Hi Marcus, 👋

New features, power user tips, and a customer story that'll inspire you. Let's dive in!

━━━━━━━━━━━━━━━━━━━━

✨ WHAT'S NEW

**AI-Powered Task Scheduling**
Our AI now suggests optimal task schedules based on your team's capacity and dependencies.

Why it matters: Stop playing calendar Tetris. Know instantly when projects will actually ship.

[Try it now →]

**Mobile Offline Mode**
Keep working even without internet. Changes sync automatically when you're back online.

[Download mobile app →]

━━━━━━━━━━━━━━━━━━━━

💡 POWER USER TIP

Did you know you can create tasks via email?

Forward any email to tasks@taskflow.com and it becomes a task. The email becomes the description, attachments included.

Perfect for: Customer requests, meeting follow-ups, and quick captures.

[See all email tricks →]

━━━━━━━━━━━━━━━━━━━━

📖 CUSTOMER SPOTLIGHT

How Airbnb ships features 3x faster

"We went from shipping every 2 weeks to shipping daily. TaskFlow's automation eliminated 90% of our manual coordination."

- Marcus Chen, VP Engineering

[Read their full story →]

━━━━━━━━━━━━━━━━━━━━

🔮 ON THE ROADMAP

Based on your requests, we're building:
• Custom dashboards
• Advanced filtering
• Time tracking integration

Want to influence what we build next? [Share your ideas →]

━━━━━━━━━━━━━━━━━━━━

That's it for this week! Reply with questions or feedback - I read every message.

Sarah Chen
Head of Product, TaskFlow

[View in browser] [Update preferences] [Unsubscribe]

TaskFlow, Inc. • San Francisco, CA
You're receiving this because you're a TaskFlow user
```

**Example 2: Educational Newsletter**

```
DESIGN WEEKLY
The Sunday email for product designers

Hi Jennifer,

This week: The productivity paradox, 3 tools I'm loving, and a mind-bending optical illusion.

━━━━━━━━━━━━━━━━━━━━

FROM THE EDITOR

Productivity tools are making us less productive.

I've been thinking about this all week. We have more project management tools, chat apps, and automation than ever. Yet we're more overwhelmed than ever.

The solution isn't another tool. It's ruthless subtraction.

What can you stop using this week?

━━━━━━━━━━━━━━━━━━━━

DEEP DIVE: THE PARADOX OF CHOICE IN DESIGN

When Jam Study gave shoppers 24 varieties of jam, 3% bought.
When they offered just 6 varieties, 30% bought.

10x conversion from fewer choices.

This applies to your design:
• Navigation menus
• Feature sets
• Pricing tiers
• Onboarding flows

More options = analysis paralysis.

The takeaway: Every choice you give users has a cognitive cost. Make sure it's worth it.

[Read the full study →]

━━━━━━━━━━━━━━━━━━━━

TOOLS I'M LOVING

**Contrast** - macOS app for checking color contrast
Free, fast, essential
[Download →]

**Maze** - User testing without the hassle
Get insights in hours, not weeks
[Try free →]

**Hemingway** - Makes your writing bold and clear
Paste your copy, get instant feedback
[Use now →]

━━━━━━━━━━━━━━━━━━━━

INSPIRATION

This optical illusion will blow your mind: [link]

The squares labeled A and B are the exact same color. Your brain just can't believe it.

Reminder that perception is everything in design.

━━━━━━━━━━━━━━━━━━━━

ONE MORE THING

What should I cover next week?

[ ] Animation principles
[ ] Design system tips
[ ] Career advice

[Vote now →] (takes 5 seconds)

━━━━━━━━━━━━━━━━━━━━

See you next Sunday!

Alex Morgan
Designer & Writer

P.S. Know another designer who'd enjoy this? [Forward this email]

[Twitter] [LinkedIn] [Website]
[View in browser] [Unsubscribe]
```

**Example 3: Curated Industry News Newsletter**

```
SAAS ROUNDUP
Your weekly dose of B2B SaaS news

March 15, 2024 • Issue #127

━━━━━━━━━━━━━━━━━━━━

MUST READS

**The $100M Mistake Most SaaS Companies Make**
by David Sacks at Craft Ventures

Why I picked this: Incredibly specific about pricing mistakes and how to fix them. The freemium analysis alone is worth the read.

[Read article →]

**How Notion Reached $10B Without Sales Team**
by Lenny Rachitsky

Product-led growth masterclass. The chapter on "building a movement, not just a product" changed how I think about marketing.

[Read →]

**AI Won't Replace PMs. But PMs Using AI Will Replace PMs Not Using AI**
by Julie Zhuo

Hot take that's probably right. Includes practical examples of AI-augmented product workflows.

[Read →]

━━━━━━━━━━━━━━━━━━━━

QUICK HITS

• Figma acquires Diagram for AI design tools [→]
• New data: Average SaaS NRR hits 105% in 2024 [→]
• Stripe launches embedded analytics [→]
• Remote work is back (for real this time) [→]

━━━━━━━━━━━━━━━━━━━━

DEEP DIVE: THE NEW PMF PLAYBOOK

Product-market fit used to mean "people want your thing."

Now it means: People want it AND you can acquire them AND they stick around AND they refer others.

The old playbook: Build → Launch → Iterate
The new playbook: Community → Co-create → Launch to fans

Examples doing this well:
• Linear (design community)
• Loom (async work evangelists)
• Notion (productivity nerds)

They built movements, not just products.

━━━━━━━━━━━━━━━━━━━━

TOOLS & RESOURCES

**PostHog** - Open source product analytics
Self-hosted or cloud. Feature flags, A/B testing, session recording.
[Try free →]

**Rewind** - Search everything you've seen on your Mac
Life-changing if you forget where you saw things (like me).
[Download →]

━━━━━━━━━━━━━━━━━━━━

JOBS

• Stripe: Senior PM, Payments (SF/Remote)
• Linear: Designer (Remote)
• Notion: Growth Lead (SF/NY)

[View all jobs →]

━━━━━━━━━━━━━━━━━━━━

Thanks for reading! Hit reply with feedback or interesting links for next week.

Chris Anderson
Editor, SaaS Roundup

Found this useful? [Share with your team]

[Archive] [Unsubscribe] [Update preferences]
```

---

**Accessibility Requirements**: Plain text version. Semantic HTML. Alt text for images. Sufficient color contrast. Readable fonts (14px+). Logical heading structure. Descriptive link text. Mobile responsive. Works without images. Easy unsubscribe. Screen reader compatible.

**Psychological Principles**: Reciprocity (valuable content builds goodwill). Consistency (regular cadence creates habit). Social proof (community highlights, customer stories). Authority (curated expertise). Liking (personable voice). Commitment (small asks build to bigger). Scarcity (exclusive content). Pattern recognition (familiar structure). Zeigarnik (incomplete information drives clicks). Peak-end rule (strong endings).

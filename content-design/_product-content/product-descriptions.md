## Product Descriptions Generator v1.0

**Purpose**: Create compelling product descriptions that convert browsers into buyers by highlighting benefits, addressing objections, optimizing for search, and creating desire through strategic storytelling and persuasive copy.

---

**PROMPT:**

You are a product content designer at {{company_name}} writing product descriptions for {{product_name}} targeting {{customer_segment}}. Create copy that achieves {{conversion_rate}}% conversion while ranking for {{target_keywords}} and communicating {{unique_value_proposition}} in {{word_count}} words.

=== PRODUCT CONTEXT ===
- Product name: {{product_name}}
- Category: {{category}}
- Price point: {{price}} ({{price_tier}}: budget/mid_range/premium/luxury)
- Target audience: {{audience}} (demographics/psychographics)
- Key differentiators: {{unique_features}}
- Use cases: {{primary_use_cases}}
- Product type: {{type}} (physical/digital/service/subscription)

=== DESCRIPTION STRATEGY ===
- Platform: {{platform}} (ecommerce_site/marketplace/catalog/app_store/saas_website)
- Length: {{length}} (short_50/medium_150/long_300/extended_500/words)
- Tone: {{tone}} (professional/casual/luxury/technical/playful)
- Focus: {{focus}} (features/benefits/lifestyle/problem_solution)
- SEO priority: {{seo}} (high/medium/low)

=== OUTPUT REQUIREMENTS ===

Generate effective product descriptions:

```yaml
product_description:
  core_components:
    headline:
      purpose: "Grab attention and communicate core benefit"
      formats:
        benefit_focused: "{{primary_benefit}} for {{target_user}}"
        feature_focused: "{{standout_feature}} {{product_type}}"
        outcome_focused: "{{desired_result}} made easy"
        curiosity_driven: "The {{product}} that {{unexpected_benefit}}"

      examples:
        generic: "Wireless Headphones"
        better: "Premium Wireless Headphones with Active Noise Cancellation"
        best: "Silence Distractions, Amplify Focus: Premium Wireless Headphones for Modern Professionals"

      character_limits:
        ecommerce_title: "60-70 characters"
        marketplace: "200 characters max"
        meta_title: "55-60 characters"

    opening_statement:
      purpose: "Hook reader with core value proposition"
      formats:
        problem_solution: "Tired of {{pain_point}}? {{Product}} {{solves_it_how}}."
        transformation: "Transform {{current_state}} into {{desired_state}}."
        benefit_stack: "{{Benefit_1}}, {{benefit_2}}, and {{benefit_3}} in one {{product_type}}."
        social_proof: "Join {{number}} {{user_type}} who {{achieved_outcome}}."

      examples:
        weak: "This is a great headphone."
        strong: "Silence the chaos and focus on what matters with studio-quality sound and AI-powered noise cancellation."

    body_content:
      structure:
        features_and_benefits:
          format: |
            **{{Feature_Name}}**
            {{What_it_does}} so you can {{benefit}}

          example: |
            **40-Hour Battery Life**
            Power through your entire workweek on a single charge, with fast charging that gives you 5 hours of playback in just 10 minutes.

        use_case_storytelling:
          format: |
            Whether you're {{scenario_1}}, {{scenario_2}}, or {{scenario_3}}, {{product}} {{adapts_or_performs}}.

          example: |
            Whether you're focusing in a noisy coffee shop, unwinding with your favorite album, or taking calls on the go, SoundPro adapts to your environment with intelligent audio optimization.

        problem_solution_narrative:
          format: |
            We know {{pain_point}}. That's why we designed {{product}} to {{solution}}.

          example: |
            We know wireless headphones die at the worst moments. That's why we engineered SoundPro with 40-hour battery life and fast charging - your music never has to stop.

    specifications:
      presentation:
        bulleted_list: "Easy to scan, clear hierarchy"
        comparison_table: "When competing with similar products"
        inline_prose: "For lifestyle/luxury products"
        expandable_section: "For technical products with many specs"

      what_to_include:
        essential:
          - dimensions: "{{size_weight}}"
          - materials: "{{construction}}"
          - compatibility: "{{works_with}}"
          - warranty: "{{coverage_duration}}"

        technical:
          - specifications: "{{detailed_tech_specs}}"
          - certifications: "{{standards_met}}"
          - requirements: "{{system_requirements}}"

        purchase_info:
          - whats_included: "{{box_contents}}"
          - variants: "{{color_size_options}}"
          - shipping: "{{delivery_info}}"

    call_to_action:
      placement: "After building desire"
      formats:
        direct: "Add to Cart"
        benefit_oriented: "Get Yours Today"
        urgency: "Order Now - Limited Stock"
        risk_reversal: "Try Risk-Free for 30 Days"

      supporting_elements:
        - trust_signals: "Free Shipping • 30-Day Returns • 2-Year Warranty"
        - scarcity: "Only {{number}} left in stock"
        - social_proof: "{{number}} purchased this week"
        - guarantee: "100% Satisfaction Guaranteed or Your Money Back"

  description_formulas:
    aida_framework:
      attention: "{{Hook_with_pain_point_or_benefit}}"
      interest: "{{Build_interest_with_unique_features}}"
      desire: "{{Create_desire_with_lifestyle_benefits}}"
      action: "{{Clear_CTA_with_urgency}}"

      example: |
        Never miss a beat, even in the noisiest environments. [Attention]

        SoundPro headphones feature military-grade active noise cancellation, 40-hour battery life, and studio-quality audio that reveals details you've never heard before. [Interest]

        Imagine working from anywhere - a bustling cafe, a busy airport, or your own living room - with complete focus and crystal-clear sound. Over 50,000 professionals have made SoundPro their daily companion. [Desire]

        Order now and get free shipping, a premium carrying case ($49 value), and our 30-day money-back guarantee. Limited stock available. [Action]

    pas_framework:
      problem: "{{Identify_pain_point}}"
      agitate: "{{Make_problem_feel_urgent}}"
      solve: "{{Present_product_as_solution}}"

      example: |
        Tired of headphones that die mid-flight? [Problem]

        Nothing's worse than settling into your seat, putting on your headphones, and seeing that dreaded low battery warning. You're stuck listening to crying babies and engine noise for the next 5 hours. [Agitate]

        SoundPro's 40-hour battery eliminates that anxiety. Even on the longest international flights, you'll have power to spare. Plus, 10-minute fast charging gives you 5 hours of playback when you forget to charge overnight. [Solve]

    features_advantages_benefits:
      structure: |
        {{Feature}}
        This means {{advantage}}
        So you can {{benefit}}

      example: |
        Premium leather ear cups
        Designed to distribute pressure evenly and breathe naturally
        So you can wear them all day without discomfort or sweating

    lifestyle_storytelling:
      approach: "Paint picture of life with product"
      structure: |
        {{Morning_scenario}}
        {{Midday_scenario}}
        {{Evening_scenario}}
        With {{product}}, {{elevated_lifestyle}}

      example: |
        Start your day with your favorite podcast as you commute. Focus completely during your work session at the cafe. Unwind with an album that sounds like the artist is in the room. With SoundPro, every moment sounds exactly as it should - perfect.

  optimization_strategies:
    seo_optimization:
      keyword_placement:
        - title: "Primary keyword in first 60 characters"
        - first_paragraph: "Primary keyword in first 100 words"
        - headers: "Keywords in H2 and H3 tags"
        - body: "Related keywords naturally throughout"
        - alt_text: "Keywords in image descriptions"

      keyword_density:
        - primary_keyword: "1-2% of total word count"
        - avoid_stuffing: "Must read naturally"
        - semantic_variations: "Use synonyms and related terms"

      structured_data:
        product_schema:
          - name: "{{product_name}}"
          - description: "{{meta_description}}"
          - price: "{{amount}}"
          - availability: "{{in_stock}}"
          - rating: "{{average_stars}}"
          - reviews: "{{review_count}}"

    conversion_optimization:
      social_proof:
        - customer_count: "Join {{number}} satisfied customers"
        - ratings: "★★★★★ 4.8/5 from 2,847 reviews"
        - bestseller_badge: "#1 Bestseller in {{category}}"
        - awards: "Winner: {{award_name}} 2024"

      trust_signals:
        - guarantees: "30-Day Money-Back Guarantee"
        - shipping: "Free Shipping & Free Returns"
        - secure: "Secure Checkout • SSL Encrypted"
        - support: "24/7 Customer Support"

      urgency_scarcity:
        - stock_level: "Only 7 left in stock"
        - time_limited: "Sale ends in {{time}}"
        - limited_edition: "Limited Edition - Won't Restock"
        - trending: "Trending - {{number}} viewing now"

      risk_reversal:
        - money_back: "100% Money-Back Guarantee"
        - free_returns: "Free returns within {{days}} days"
        - warranty: "{{duration}} warranty included"
        - price_match: "We'll match any competitor's price"

  format_variations:
    short_description:
      length: "50-75 words"
      use_for: "Listings, search results, previews"
      format: |
        {{One_sentence_hook}}. {{Key_feature_1}}, {{key_feature_2}}, and {{key_feature_3}}. {{Trust_signal_or_CTA}}.

      example: |
        Professional-grade noise cancellation meets all-day comfort. SoundPro headphones deliver studio-quality audio, 40-hour battery life, and AI-powered environmental adaptation. Free shipping and 30-day returns on all orders.

    medium_description:
      length: "150-200 words"
      use_for: "Product pages, catalogs"
      structure:
        - hook: "1 sentence"
        - key_benefits: "3-4 bullets or sentences"
        - use_cases: "1-2 sentences"
        - specs: "Key specifications"
        - trust_cta: "Closing with CTA"

    long_description:
      length: "300-500 words"
      use_for: "Detailed product pages, premium products"
      structure:
        - opening_paragraph: "Hook and value prop"
        - benefits_section: "Detailed benefits with subheadings"
        - features_section: "Technical features explained"
        - use_cases: "How different people use it"
        - specifications: "Complete specs"
        - guarantee: "Risk reversal"
        - cta: "Strong call to action"

    luxury_description:
      tone: "Sophisticated, aspirational, exclusive"
      approach: "Focus on craftsmanship, heritage, experience"
      example: |
        Crafted from premium Italian leather and aerospace-grade aluminum, each SoundPro headphone represents 200 hours of meticulous handwork. Our master engineers in Switzerland have perfected every detail - from the buttery-soft protein leather ear cups to the precision-milled controls that respond to your slightest touch.

        This is more than audio equipment. It's a statement of uncompromising quality and refined taste.

    technical_description:
      tone: "Precise, detailed, specification-heavy"
      approach: "Appeal to technical buyers with specs"
      example: |
        SoundPro delivers studio-monitor accuracy with 40mm neodymium drivers, 20Hz-20kHz frequency response, and <0.1% total harmonic distortion. The active noise cancellation system samples ambient sound at 2000 times per second, generating inverse waves with 35dB reduction at 1kHz.

        Bluetooth 5.2 with aptX HD and LDAC codecs ensures lossless wireless transmission up to 10 meters. The 2000mAh lithium-polymer battery provides 40 hours of continuous playback at 50% volume or 30 hours with ANC enabled.

  category_specific_templates:
    saas_software:
      focus: "Capabilities, integrations, use cases"
      structure: |
        {{Headline_benefit}}

        {{Product}} helps {{target_user}} {{achieve_goal}} with:
        • {{Capability_1}}
        • {{Capability_2}}
        • {{Capability_3}}

        Integrates with: {{tool_1}}, {{tool_2}}, {{tool_3}}

        Used by {{number}} {{user_type}} including {{notable_customer}}

        {{Pricing_starting_at}} • {{Trial_offer}}

    physical_products:
      focus: "Materials, dimensions, tactile experience"
      include:
        - materials: "{{What_its_made_from}}"
        - dimensions: "{{Size_and_weight}}"
        - care: "{{Maintenance_instructions}}"
        - warranty: "{{Coverage_details}}"

    digital_products:
      focus: "Outcomes, learning, access"
      include:
        - format: "{{Video/PDF/audio/interactive}}"
        - access: "{{Lifetime/subscription/one_time}}"
        - deliverables: "{{What_they_get}}"
        - support: "{{Community/email/coaching}}"

    subscription_services:
      focus: "Ongoing value, flexibility, benefits"
      include:
        - what_included: "{{Everything_in_subscription}}"
        - frequency: "{{How_often_delivered_or_renewed}}"
        - flexibility: "{{Can_pause_skip_cancel}}"
        - first_month: "{{Special_intro_offer}}"

  a_b_testing_variables:
    headlines:
      - test: "Feature vs benefit vs question"
      - example_A: "40-Hour Battery Life Wireless Headphones"
      - example_B: "Work All Week on a Single Charge"
      - measure: "Click-through rate"

    description_length:
      - test: "Short (75 words) vs long (300 words)"
      - hypothesis: "Different products/audiences prefer different lengths"
      - measure: "Time on page and conversion rate"

    benefit_vs_feature:
      - test: "Technical specs vs lifestyle benefits"
      - example_A: "40mm neodymium drivers, 20Hz-20kHz"
      - example_B: "Hear every note as the artist intended"
      - measure: "Add to cart rate"

    social_proof_placement:
      - test: "Top vs bottom vs both"
      - measure: "Trust signals and conversion"

  common_mistakes:
    to_avoid:
      - vague_claims: "High quality" (vs "Aircraft-grade aluminum")
      - feature_dump: "Lists specs without explaining benefits"
      - generic_copy: "Could describe any product in category"
      - jargon_heavy: "Technical terms without explanation"
      - no_differentiation: "Doesn't explain why choose this"
      - missing_cta: "Describes product but doesn't ask for sale"

    fixes:
      - be_specific: "Use numbers, materials, measurable benefits"
      - connect_benefits: "Every feature should have 'so you can...'"
      - show_personality: "Let brand voice shine through"
      - explain_terms: "Define technical concepts for general audience"
      - highlight_unique: "Lead with what makes this different"
      - strong_cta: "Clear next step with reason to act now"
```

=== EXAMPLES ===

**Example 1: Premium Physical Product**

```
Headline: Silence the Chaos: Premium Wireless Headphones Built for Focus

Description:
Transform any space into your personal sanctuary. SoundPro headphones combine military-grade active noise cancellation with studio-quality audio, letting you focus completely whether you're working from a bustling cafe or unwinding at home.

Why SoundPro?

**40-Hour Battery Life**
Power through your entire workweek on a single charge. Even if you forget to plug in overnight, 10-minute fast charging gives you 5 hours of playback.

**Studio-Quality Sound**
Hear every detail with 40mm neodymium drivers and high-resolution audio codecs. Your favorite songs will reveal notes you've never noticed.

**Premium Comfort**
Protein leather ear cups and memory foam padding distribute pressure evenly. Wear them all day without discomfort - many users forget they're wearing them.

**Intelligent Adaptation**
AI-powered environmental sensors automatically adjust noise cancellation and EQ based on your surroundings. Optimal audio, everywhere.

What's Included:
• SoundPro headphones
• Premium carrying case ($49 value)
• USB-C charging cable
• 3.5mm audio cable
• Airline adapter

Specifications:
• Battery: 40 hours (ANC on), 50 hours (ANC off)
• Charging: USB-C fast charging
• Connectivity: Bluetooth 5.2, 3.5mm wired
• Weight: 280g
• Warranty: 2 years

★★★★★ 4.8/5 from 2,847 reviews
"Best headphones I've ever owned" - Sarah M.

Free Shipping • 30-Day Returns • 2-Year Warranty

[Add to Cart - $299]

Only 7 left in stock
```

**Example 2: SaaS Product**

```
Headline: Project Management That Your Team Will Actually Use

Description:
TaskFlow is project management software designed for teams who are tired of complicated tools nobody uses. Get everyone on the same page in minutes, not months.

Simple enough for your entire team. Powerful enough for complex projects.

**Everything in One Place**
Stop switching between email, spreadsheets, and chat. TaskFlow keeps all your project information, discussions, and files in one organized hub.

**Automatic Progress Tracking**
See project status at a glance with real-time dashboards. Know what's on track, what's at risk, and what needs attention - without status meetings.

**Flexible Views**
View your work as a list, kanban board, calendar, or gantt chart. Everyone works in the view that makes sense for them.

**Integrations That Work**
Connect with Slack, Google Drive, GitHub, and 50+ tools you already use. No manual data entry or duplicate work.

Perfect for:
• Product teams shipping features faster
• Marketing teams coordinating campaigns
• Operations teams managing processes
• Any team tired of chaotic spreadsheets

Trusted by 15,000+ teams including Stripe, Figma, and Notion

Pricing:
• Free: Up to 3 users
• Pro: $12/user/month
• Business: $20/user/month

[Start free trial - No credit card required]

"We tried 5 other tools. TaskFlow was the only one our whole team actually adopted." - Marcus Chen, Airbnb
```

**Example 3: Digital Course**

```
Headline: Master Product Design in 8 Weeks - From Beginner to Hired

Description:
Land your first product design job with our comprehensive bootcamp. Learn by building real projects, get personalized feedback from industry experts, and join a community of 5,000+ designers.

What You'll Learn:

**Weeks 1-2: Design Foundations**
UX research, user interviews, competitive analysis, information architecture

**Weeks 3-4: UI Design**
Visual design principles, typography, color theory, design systems

**Weeks 5-6: Prototyping & Testing**
Figma mastery, interactive prototypes, usability testing

**Weeks 7-8: Portfolio & Career**
Build 3 portfolio pieces, resume optimization, interview preparation

What's Included:
• 60 hours of video lessons
• 8 weeks of live office hours
• 3 portfolio projects with feedback
• Access to hiring network (200+ companies)
• Lifetime access to all course materials
• Private Slack community

Requirements: None - we start from scratch

Time Commitment: 10-15 hours per week

Format: Self-paced video + weekly live sessions

Results:
• 87% of graduates land design roles within 6 months
• Average starting salary: $75,000
• 4.9/5 rating from 2,100+ students

"I went from zero design experience to landing my dream job at Spotify in 5 months. This course changed my life." - Jennifer Park

[Enroll Now - $1,497] or [Payment Plan: 6 x $279]

30-Day Money-Back Guarantee • Lifetime Access • Certificate of Completion

Next cohort starts March 1 - Only 15 spots remaining
```

---

**Accessibility Requirements**: Alt text for product images. Sufficient color contrast for text. Descriptive link text (not "click here"). Structured headings for screen readers. Specifications in accessible table format or clear list. Video demonstrations with captions. Zoomable images. Keyboard-navigable interface. Plain language option for technical products.

**Psychological Principles**: Reciprocity (generous information builds trust). Social proof (others bought/loved it). Scarcity (limited stock creates urgency). Authority (awards, experts, certifications). Consistency (product aligns with their values). Liking (personality in copy). Loss aversion (what they miss without it). Anchoring (price compared to value). Endowment effect (imagine owning it).

## Cart Abandonment Recovery Content Generator v1.0

**Purpose**: Design persuasive, timely cart recovery messaging that brings shoppers back to complete purchases while respecting privacy and avoiding spam, using behavioral triggers and personalized incentives.

---

**PROMPT:**

You are a conversion optimization designer at {{company_name}} recovering abandoned carts for {{product_category}}. Create recovery messaging for {{cart_value}} carts abandoned at {{abandonment_stage}} targeting {{customer_segment}} with {{urgency_level}} urgency.

=== ABANDONMENT CONTEXT ===
- Product category: {{product_category}} (fashion/electronics/home_goods/digital/services)
- Cart value: {{cart_value}}
- Abandonment stage: {{abandonment_stage}} (browsing/cart/checkout/payment)
- Customer segment: {{customer_segment}} (anonymous/logged_in/returning/vip)
- Time since abandonment: {{time_elapsed}} (minutes/hours/days)
- Abandonment reason: {{likely_reason}} (price/shipping_cost/comparison_shopping/distraction/technical_issue)

=== BUSINESS REQUIREMENTS ===
- Recovery sequence: {{sequence_length}} (1-5 messages typical)
- Timing strategy: {{timing_pattern}} (1hr/6hr/24hr/3day/7day)
- Incentive strategy: {{incentive_approach}} (no_discount/conditional/progressive/personalized)
- Channels: {{channels}} (email/sms/push/retargeting/all)
- Urgency tactics: {{urgency_allowed}} (none/soft/moderate/aggressive)
- Privacy compliance: {{privacy_standard}} (gdpr/ccpa/can_spam/all)

=== CUSTOMER INSIGHTS ===
- Purchase intent: {{intent_level}} (browsing/considering/ready_to_buy)
- Price sensitivity: {{price_sensitivity}} (high/medium/low)
- Previous purchases: {{purchase_history}} (0/1-3/4+)
- Average session time: {{session_duration}} minutes
- Device: {{device_type}} (mobile/desktop/tablet)
- Cart items: {{item_count}} items

=== COMPETITIVE LANDSCAPE ===
- Market position: {{market_position}} (premium/mid_market/budget)
- Unique value: {{differentiation}} (price/quality/speed/selection/service)
- Competitor tactics: {{competitor_approach}}
- Stock levels: {{inventory_status}} (in_stock/limited/low_stock/pre_order)

=== OUTPUT REQUIREMENTS ===

Generate comprehensive cart recovery messaging:

```yaml
cart_recovery_sequence:
  sequence_strategy:
    timing_framework:
      - message_1:
          timing: "1-2 hours after abandonment"
          goal: "Gentle reminder, remove friction"
          incentive: "None (or free shipping)"
          tone: "Helpful, no pressure"

      - message_2:
          timing: "24 hours after abandonment"
          goal: "Restate value, address concerns"
          incentive: "Small discount (5-10%) or free shipping"
          tone: "Persuasive, value-focused"

      - message_3:
          timing: "3 days after abandonment"
          goal: "Create urgency, final push"
          incentive: "Larger discount (15-20%) or time-limited"
          tone: "Urgent but respectful"

      - message_4: # Optional
          timing: "7 days after abandonment"
          goal: "Last chance, clear cart warning"
          incentive: "Best offer or none"
          tone: "Matter-of-fact, final opportunity"

    progressive_incentives:
      rationale: "Avoid training customers to abandon for discounts"
      approach: "Start with no discount, increase only if needed"
      segmentation: "VIP/loyal customers get better offers sooner"

  email_message_1: # Gentle Reminder (1-2 hours)
    subject_lines:
      primary: "You left something behind..."
      alternatives:
        - "Still interested? Your cart is waiting"
        - "Quick reminder about your {{product_category}}"
        - "{{item_name}} is still available"
        - "Did you forget something?"
      personalization: "{{first_name}}, you left {{item_count}} items in your cart"

    preview_text:
      format: "{{item_name}} + {{n}} more items • Complete your order now"
      urgency_free: "No pressure - just a friendly reminder"

    email_body:
      greeting: "Hi {{first_name}},"

      opening_options:
        helpful: "We noticed you left some items in your cart. No worries - we saved them for you!"
        direct: "Your cart is waiting for you."
        playful: "Looks like something caught your eye. We saved it!"

      cart_summary:
        format: "visual_product_cards"
        includes:
          - product_image: "{{image_url}}"
          - product_name: "{{name}}"
          - variant_details: "{{size/color/etc}}"
          - price: "${{amount}}"
          - availability: "In stock" # or "Only {{n}} left"

      value_props:
        - "{{Free shipping on orders over $X}}"
        - "{{30-day returns}}"
        - "{{Secure checkout}}"
        - "{{Price match guarantee}}"

      cta:
        primary: "Complete Your Order"
        secondary: "Need help? Contact us"

      friction_removers:
        - "Questions about sizing? {{size_guide_link}}"
        - "See what others say: {{reviews_link}}"
        - "Compare similar items: {{alternatives_link}}"

      closing: |
        Need help deciding? We're here for you.
        {{support_contact}}

    no_discount_rationale: "First email focuses on removing friction, not discounting"

  email_message_2: # Value Reminder (24 hours)
    subject_lines:
      primary: "{{item_name}} is still waiting for you"
      alternatives:
        - "Still thinking about {{item}}?"
        - "Your cart misses you (+ 10% off inside)"
        - "Complete your order and save {{discount}}"
        - "{{first_name}}, here's {{discount}}% off your cart"

    preview_text:
      offer: "Use code {{code}} for {{discount}}% off your order"
      urgency: "Limited time offer - expires {{date}}"

    email_body:
      greeting: "Hi {{first_name}},"

      opening_with_incentive: |
        We noticed you haven't completed your order yet.

        **Here's {{discount}}% off to help you decide:**
        Use code **{{promo_code}}** at checkout

        {{expiry_notice}}

      cart_reminder:
        heading: "Your saved items:"
        format: "product_grid with prices"
        shows_discount: true
        before_after_pricing: true

      social_proof:
        - "⭐⭐⭐⭐⭐ {{average_rating}} ({{review_count}} reviews)"
        - "{{sold_count}} customers bought this {{time_period}}"
        - "{{stock_status}}: Only {{quantity}} left in stock"

      urgency_elements:
        offer_expiry: "Code expires in {{hours}} hours"
        stock_warning: "{{item}} is selling fast - only {{n}} left"
        price_change: "Price may increase soon"

      trust_signals:
        - "{{guarantee_badge}}"
        - "{{secure_checkout_badge}}"
        - "{{customer_testimonial}}"

      cta:
        primary: "Apply Discount & Checkout"
        urgency: "Claim your {{discount}}% off"

  email_message_3: # Final Push (3 days)
    subject_lines:
      primary: "FINAL HOURS: {{discount}}% off your cart expires tonight"
      alternatives:
        - "Your cart expires soon + {{discount}}% off inside"
        - "Last chance: {{item_name}} + {{discount}}% off"
        - "Don't miss out - {{discount}}% off ends {{time}}"
        - "{{first_name}}, we'll remove your cart in 24 hours"

    preview_text: "{{discount}}% off expires at midnight • Act now to save ${{amount}}"

    email_body:
      urgency_opening: |
        **TIME SENSITIVE**

        Your {{discount}}% discount expires in {{hours}} hours.
        After that, we'll release these items back to inventory.

      cart_with_savings:
        format: "table showing original price vs discounted price"
        total_savings: "You'll save ${{savings}} with code {{code}}"

      scarcity_elements:
        - "{{item}} only has {{quantity}} left in stock"
        - "{{n}} other shoppers are viewing this item"
        - "Popular item - may sell out"

      fomo_triggers:
        - "{{customer_count}} people bought this today"
        - "Trending in {{category}}"
        - "Back in stock - won't last long"

      final_incentive:
        heading: "This is your best offer"
        message: "{{discount}}% is the highest discount we offer"
        expiry: "Expires: {{specific_date_time}}"

      cta:
        primary: "Claim Your Discount Now"
        urgency_indicator: "⏰ {{hours}} hours left"
        secondary: "Remove items from cart"

  sms_messages:
    message_1: # 4-6 hours
      character_limit: 160
      format: |
        Hi {{first_name}}! You left {{item_name}} in your cart.
        Complete your order: {{short_url}}
        - {{company_name}}
      opt_out: "Reply STOP to opt out"

    message_2: # 24 hours with offer
      format: |
        {{discount}}% OFF your cart!
        Use code {{code}} at checkout: {{short_url}}
        Expires {{date}}
        - {{company}}
      compliance: "Text STOP to opt out"

  push_notifications:
    message_1:
      title: "You left items in your cart"
      body: "{{item_name}} is waiting for you"
      action: "Complete order"
      deep_link: "app://cart"

    message_2:
      title: "{{discount}}% off your cart!"
      body: "Limited time offer - use code {{code}}"
      action: "Shop now"
      badge_count: "{{cart_item_count}}"

  retargeting_ad_copy:
    display_ads:
      headline: "Complete Your Order"
      description: "{{item_name}} + {{discount}}% off"
      cta: "Shop Now"
      visual: "{{product_image}}"

    social_ads:
      format: "dynamic_product_ads"
      headline: "Still thinking about it?"
      offer: "Get {{discount}}% off"
      urgency: "Limited time"

  abandonment_reasons_and_responses:
    high_shipping_cost:
      address_in: "Message 1"
      solution: "Free shipping on orders over ${{threshold}}"
      alternative: "Flat rate ${{amount}} shipping"

    comparison_shopping:
      address_in: "Message 2"
      solution: "Price match guarantee"
      social_proof: "Best value - compare and see"

    unexpected_total:
      address_in: "Message 1"
      solution: "Clear pricing breakdown"
      transparency: "No hidden fees"

    technical_issue:
      address_in: "Message 1"
      solution: "Need help? We're here: {{support}}"
      friction_removal: "Easy one-click checkout"

    changed_mind:
      address_in: "Message 2"
      solution: "{{discount}} to sweeten the deal"
      alternatives: "Or browse similar items"

    saving_for_later:
      address_in: "Message 1"
      solution: "We saved your cart"
      reminder: "Price may change - secure it now"

  personalization_variables:
    customer_tier:
      vip: "Exclusive {{higher_discount}}% for loyal customers"
      new: "Welcome discount: {{discount}}% off first order"
      returning: "Welcome back! {{discount}}% off this order"

    cart_value:
      high_value: "VIP support + expedited shipping included"
      low_value: "Add ${{amount}} more for free shipping"

    browsing_behavior:
      high_intent: "You viewed this {{view_count}} times - must be special!"
      price_sensitive: "Price drop alert: Now ${{new_price}}"

  messaging_principles:
    dos:
      - "Remind, don't nag"
      - "Remove friction before offering discounts"
      - "Respect privacy - use first name only if known"
      - "Provide value (free shipping, guide, reviews)"
      - "Make it easy to complete or remove cart"
      - "Be mobile-optimized"
      - "Honor unsubscribe immediately"

    donts:
      - "Don't guilt trip ('Don't you want this?')"
      - "Don't over-email (max 3-4 messages)"
      - "Don't start with biggest discount"
      - "Don't use fake scarcity"
      - "Don't ignore privacy laws"
      - "Don't make unsubscribe hard"

  compliance_requirements:
    gdpr: # EU
      - "Explicit consent for marketing emails"
      - "Clear unsubscribe in every email"
      - "Honor opt-out immediately"
      - "Don't send if consent withdrawn"

    can_spam: # US
      - "Accurate from/subject lines"
      - "Physical address in footer"
      - "Clear unsubscribe mechanism"
      - "Honor opt-outs within 10 days"

    tcpa: # US SMS
      - "Explicit SMS consent required"
      - "Clear opt-out instructions"
      - "Don't send after opt-out"
      - "Include message/data rates disclaimer"

  a_b_testing_variables:
    - subject_line_approach: "question vs statement vs urgency"
    - discount_timing: "message 1 vs message 2 vs message 3"
    - discount_amount: "10% vs 15% vs 20%"
    - urgency_level: "soft vs moderate vs aggressive"
    - cta_copy: "Complete Order vs Apply Discount vs Shop Now"
    - visual_layout: "simple vs rich_product_images"
```

=== EXAMPLES ===

**Example 1: Fashion E-commerce (Mid-value Cart)**
- product_category: "Women's apparel"
- cart_value: "$127 (2 items)"
- customer_segment: "Logged in, first-time cart abandoner"
- time_elapsed: "2 hours"

**Email 1 - Gentle Reminder**

**Subject:** Sarah, you left 2 items in your cart

**Preview:** Summer Dress + Linen Pants • Complete your order with free shipping over $75

---

Hi Sarah,

We noticed you left a couple of items in your cart. No worries - we saved them for you!

**Your Cart:**

[Summer Floral Dress - Size M] $79
[High-Waist Linen Pants - Navy, Size 8] $48

**Subtotal: $127**
✓ Free shipping (order over $75)
✓ 30-day returns
✓ Secure checkout

[Complete Your Order]

**Still deciding?**
• See customer photos: [Reviews]
• Check our size guide: [Sizing]
• Chat with us: [Support]

No pressure - your cart will be saved for 7 days.

Happy shopping!
The [Store] Team

---

**Rationale:** No discount yet. Focus on removing friction (sizing concerns, reviews). Highlight free shipping already earned. Friendly, no urgency.

**Example 2: Electronics (High-value Cart)**
- product_category: "Consumer electronics"
- cart_value: "$899 (laptop)"
- customer_segment: "Logged in, comparison shopper"
- time_elapsed: "24 hours"

**Email 2 - Value + Incentive**

**Subject:** Still thinking about the XPS 15? Here's $90 off

**Preview:** Use code SAVE10 for 10% off • Offer expires in 48 hours

---

Hi Marcus,

We noticed you haven't completed your order yet.

**Here's 10% off to help you decide:**
Use code **SAVE10** at checkout
Offer expires Wednesday, 11:59pm

**Your Cart:**
Dell XPS 15 Laptop - 16GB RAM, 512GB SSD
~~$899~~ **$809.10** with code SAVE10
**You save: $89.90**

⭐⭐⭐⭐⭐ 4.8/5 (2,847 reviews)
"Best laptop I've ever owned" - verified buyer

**Why choose us:**
✓ Price match guarantee
✓ Free 2-day shipping
✓ Expert tech support included
✓ 60-day returns

🔥 Only 3 left in stock at this price

[Apply Discount & Checkout]

**Questions?**
Compare models: [Laptop Guide]
Chat with tech expert: [Live Chat]

---

**Rationale:** 10% discount for high-value item. Social proof (reviews). Scarcity (3 left). Price match addresses comparison shopping. Tech support adds value.

**Example 3: Subscription Box (Low-value Cart)**
- product_category: "Beauty subscription box"
- cart_value: "$35/month"
- customer_segment: "Anonymous visitor, new to brand"
- time_elapsed: "3 days"

**Email 3 - Final Push**

**Subject:** FINAL HOURS: 20% off your first box expires tonight

**Preview:** Last chance to save $7 on your first beauty box • Offer ends at midnight

---

⏰ **TIME SENSITIVE**

Your 20% discount expires in 6 hours.
After that, we'll release your subscription slot.

**Your First Box:**
Monthly Beauty Box Subscription
~~$35/month~~ **$28/month** with code FIRST20

**You'll save $7 on your first box**

✨ **What you'll get:**
- 5-7 full-size beauty products ($100+ value)
- Personalized to your profile
- Free shipping always
- Cancel anytime

💕 **Join 50,000+ beauty lovers**
"Best $35 I spend each month!" - Jessica R.

**This is our best offer**
20% off is the highest discount we offer new members.

**Expires: Tonight at 11:59pm PST**

[Claim 20% Off Now]

Not ready? [Browse sample boxes] or [Remove subscription]

---

**Rationale:** Strong urgency for low-commitment subscription. Best offer stated clearly. Easy opt-out provided. Social proof (50k members). Clear value ($100 of products for $28).

---

**Accessibility Requirements**: All cart recovery emails must have plain text alternatives. Subject lines must be clear and not misleading. Unsubscribe must be visible and functional. Links must have descriptive text. Images must have alt text. Color contrast minimum 4.5:1 (WCAG 3.0 Level AA). Mobile-responsive design required. Countdown timers must have text alternatives. No critical information in images only.

**Psychological Principles**: Reminder reduces forgetting (memory/salience). Saved cart shows care (reciprocity). Social proof drives conversion (consensus). Scarcity creates urgency (loss aversion/FOMO). Progressive discounts reward action (incentive escalation). Easy checkout reduces friction (effort reduction). Personalization increases relevance (self-reference effect). Trust signals reduce risk (safety/credibility). Limited time creates urgency (deadline effect). Clear value justifies purchase (cost-benefit analysis).

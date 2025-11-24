## Order Confirmation Content Generator v1.0

**Purpose**: Create reassuring, actionable order confirmation messages that build trust, reduce post-purchase anxiety, and provide clear next steps across all customer touchpoints.

---

**PROMPT:**

You are a transactional content designer at {{company_name}} creating order confirmation for {{product_type}} purchases. Design confirmation messaging for {{order_value}} orders across {{channels}} reaching {{customer_segment}}.

=== ORDER CONTEXT ===
- Product type: {{product_type}} (physical/digital/service/subscription/mixed)
- Order value: {{order_value}}
- Customer segment: {{customer_segment}} (new/returning/vip)
- Delivery method: {{delivery_method}} (shipping/download/email/pickup/activation)
- Payment status: {{payment_status}} (paid/pending/authorization_hold)
- Order complexity: {{order_complexity}} (single_item/multiple_items/mixed_fulfillment)

=== COMMUNICATION CHANNELS ===
- Channels: {{channels}} (confirmation_page/email/sms/app_notification)
- Email deliverability: {{email_priority}} (transactional/marketing/mixed)
- SMS availability: {{sms_enabled}} (yes/no)
- Account system: {{account_required}} (yes/guest_allowed)

=== BUSINESS REQUIREMENTS ===
- Average delivery time: {{avg_delivery_time}}
- Customer support availability: {{support_hours}}
- Modification window: {{modification_allowed}} (yes/no/timeframe)
- Cancellation policy: {{cancellation_terms}}
- Next steps: {{next_actions}} (track/download/schedule/activate)

=== USER EXPECTATIONS ===
- Primary concern: {{user_concern}} (delivery_time/order_accuracy/payment_confirmation/tracking)
- Post-purchase anxiety: {{anxiety_level}} (low/moderate/high)
- Urgency: {{urgency}} (gift/time_sensitive/standard)
- Communication preference: {{contact_preference}} (email/sms/both)

=== OUTPUT REQUIREMENTS ===

Generate comprehensive order confirmation content:

```yaml
order_confirmation:
  confirmation_page:
    headline:
      success_message: "Order confirmed! 🎉"
      alternatives:
        - "Thank you for your order!"
        - "Your order is confirmed"
        - "We've got your order"
      personalization: "Thanks, {{first_name}}!"

    primary_message:
      structure: |
        {{success_statement}}
        {{order_number_prominent}}
        {{next_step_clear}}
        {{delivery_timeline}}

      example: |
        Your order has been confirmed and will ship within 24 hours.
        Order #{{order_number}}
        Estimated delivery: {{delivery_date}}
        We'll send tracking information to {{email}}

    order_summary:
      heading: "Order Summary"
      sections:
        - order_number:
            label: "Order Number"
            value: "{{order_id}}"
            copyable: true

        - order_date:
            label: "Order Date"
            value: "{{full_date_time}}"

        - items:
            heading: "Items Ordered ({{item_count}})"
            format: |
              - {{product_name}} × {{quantity}} - ${{item_total}}
                {{variant_details}}

        - shipping_address:
            heading: "Shipping Address"
            value: "{{formatted_address}}"
            edit_allowed: "{{modification_window}}"

        - payment_method:
            heading: "Payment Method"
            value: "{{card_type}} ending in {{last_4}}"
            total: "${{order_total}}"

    next_steps:
      primary_cta:
        digital_product: "Access Your Purchase"
        physical_product: "Track Your Order"
        service: "Schedule Your Appointment"
        subscription: "Get Started"

      secondary_actions:
        - "View order details"
        - "Print confirmation"
        - "Add to calendar (for deliveries)"
        - "Contact support"

    reassurance_elements:
      - security: "Payment processed securely"
      - confirmation: "Confirmation email sent to {{email}}"
      - support: "Questions? We're here to help {{support_link}}"
      - guarantee: "{{return_policy}} day return policy"

  confirmation_email:
    subject_line:
      primary: "Order Confirmed #{{order_number}}"
      alternatives:
        - "Your {{company}} order is confirmed"
        - "Thanks for your order! Here are the details"
        - "Order #{{order_number}} - Arriving {{date}}"

    preview_text:
      format: "Arriving {{delivery_date}} • {{item_count}} items • ${{total}}"
      digital: "Access your purchase instantly • Order #{{order_number}}"

    email_structure:
      greeting: "Hi {{first_name}},"

      opening:
        new_customer: "Thanks for your first order! We're excited to have you."
        returning: "Thanks for ordering with us again!"
        vip: "Thank you for your continued loyalty, {{first_name}}!"

      body_sections:
        - confirmation_statement:
            content: "Your order has been confirmed and is being prepared."
            icon: "checkmark"

        - order_details:
            format: "expandable_table"
            includes:
              - "Order number (prominent)"
              - "Order date"
              - "Items with images"
              - "Pricing breakdown"
              - "Shipping method and address"
              - "Billing information"

        - next_steps:
            physical_shipping: |
              What happens next:
              1. We'll prepare your order (usually within 24 hours)
              2. You'll get a tracking number when it ships
              3. Your order arrives by {{delivery_date}}

            digital_delivery: |
              Your purchase is ready!
              • Access your download: {{download_link}}
              • Download available for {{days}} days
              • Need help? {{support_link}}

        - primary_cta:
            button_text: "{{cta_text}}"
            button_url: "{{cta_url}}"

      footer:
        - "Have questions? Reply to this email or {{contact_methods}}"
        - "Order details: {{order_url}}"
        - "Return policy: {{return_policy_link}}"

  sms_confirmation:
    character_limit: 160
    format: |
      {{company}}: Order confirmed! #{{order_number}}
      Arriving {{date}}
      Track: {{short_url}}

    opt_out: "Reply STOP to unsubscribe"

  app_push_notification:
    title: "Order Confirmed ✓"
    body: "Order #{{order_number}} • Arriving {{delivery_date}}"
    action: "Track order"
    deep_link: "app://orders/{{order_id}}"

  confirmation_patterns:
    immediate_delivery: # Digital products, instant access
      headline: "You're all set! Access your purchase below"
      cta: "Get Started Now"
      urgency: none
      follow_up: "Access details also sent to {{email}}"

    scheduled_fulfillment: # Appointments, reservations
      headline: "Your appointment is confirmed"
      details: "{{service}} on {{date}} at {{time}}"
      cta: "Add to Calendar"
      reminder: "We'll send a reminder 24 hours before"

    pre_order: # Not yet available
      headline: "Pre-order confirmed!"
      details: "Available {{release_date}}"
      expectation: "You'll be among the first to receive it"
      cta: "Track Pre-order Status"

    subscription_start: # Recurring service
      headline: "Welcome to {{subscription_name}}!"
      details: "Your subscription begins {{start_date}}"
      cta: "Explore Your Benefits"
      billing_info: "Next billing date: {{next_charge_date}}"

  personalization_variables:
    - customer_name: "First name for greeting"
    - order_history: "First order vs returning customer"
    - product_category: "Relevant next steps based on purchase"
    - delivery_urgency: "Standard vs express messaging"
    - membership_status: "VIP/loyalty tier acknowledgment"

  accessibility_requirements:
    email:
      - "Plain text version available"
      - "Semantic HTML structure"
      - "Alt text for all images"
      - "Sufficient color contrast (4.5:1)"
      - "Readable without images"

    confirmation_page:
      - "Success announcement for screen readers"
      - "Printable layout (CSS print stylesheet)"
      - "Keyboard navigable CTAs"
      - "Clear heading hierarchy"
```

=== EXAMPLES ===

**Example 1: E-commerce Physical Products**
- product_type: "Electronics"
- order_value: "$349.99"
- customer_segment: "Returning customer"
- delivery_method: "Standard shipping"

**Confirmation Page:**
**Headline:** "Thanks for your order, Sarah!"

**Message:**
Your order is confirmed and will ship within 1 business day.

Order #ORD-458392
Estimated delivery: Wednesday, Nov 29

Track your order: [Track Package]

**Items Ordered:**
- Sony WH-1000XM5 Headphones (Silver) × 1 - $349.99

**Shipping to:**
Sarah Johnson
123 Main St, Apt 4B
San Francisco, CA 94102

**Email Subject:** Order Confirmed #ORD-458392 - Arriving Nov 29

**Rationale:** Clear delivery date reduces anxiety. Order number prominent. Immediate tracking access.

**Example 2: Digital Course Purchase**
- product_type: "Online course"
- order_value: "$199"
- customer_segment: "New customer"
- delivery_method: "Instant access"

**Confirmation Page:**
**Headline:** "You're all set! Start learning now 🚀"

**Message:**
Welcome to "Advanced Python Programming"!

Order #ORD-458393
Your course is ready to access immediately.

[Start Course Now]

**Email Subject:** Welcome to Advanced Python Programming! 🎉

**Email Body:**
Hi Alex,

Your enrollment is confirmed! Your course is ready and waiting for you.

**What happens next:**
1. Click "Start Course" below to begin
2. Access your course anytime at learn.example.com
3. Download resources and certificates as you complete modules

[Start Course Now]

**Your purchase includes:**
- Lifetime access to course materials
- Downloadable resources and code examples
- Certificate of completion

Questions? Reply to this email - we're here to help!

**Rationale:** Immediate gratification for digital product. Clear access instructions. Emphasize lifetime value.

**Example 3: Restaurant Reservation**
- product_type: "Dining reservation"
- order_value: "$0 (reservation)"
- customer_segment: "New customer"
- delivery_method: "Scheduled service"

**Confirmation Page:**
**Headline:** "Your table is reserved!"

**Reservation Details:**
Reservation #RES-7821
The Garden Bistro
Thursday, Dec 7 at 7:30 PM
Party of 4

[Add to Calendar]

**Email Subject:** Reservation Confirmed - The Garden Bistro, Dec 7 at 7:30 PM

**SMS:**
The Garden Bistro: Table for 4 confirmed for Dec 7 at 7:30pm. Reservation #RES-7821. See you soon!

**Rationale:** Service-based confirmation focuses on date/time. Calendar integration reduces no-shows. SMS reminder.

---

**Accessibility Requirements**: Order confirmation must be accessible across all channels. Email must have plain text alternative. Confirmation page must announce success to screen readers. Order number must be selectable/copyable. Print-friendly layout required. Links must have descriptive text (not "click here"). Color contrast minimum 4.5:1 (WCAG 3.0 Level AA). No reliance on color alone for important information.

**Psychological Principles**: Immediate confirmation reduces anxiety (uncertainty avoidance). Clear next steps provide control (agency). Order number provides tangible proof (commitment/consistency). Delivery dates set expectations (mental models). Friendly tone builds relationship (reciprocity). Multi-channel confirmation reinforces trust (repetition/consistency). Success messaging creates positive emotion (peak-end rule).

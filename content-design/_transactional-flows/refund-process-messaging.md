## Refund Process Messaging Generator v1.0

**Purpose**: Design empathetic, transparent refund messaging that maintains customer trust while managing expectations through clear timelines, procedures, and resolution paths.

---

**PROMPT:**

You are a customer experience designer at {{company_name}} optimizing refund communications for {{product_type}}. Create messaging for {{refund_scenario}} covering {{process_complexity}} process serving {{customer_segment}} with {{refund_timeframe}} typical processing time.

=== REFUND CONTEXT ===
- Product type: {{product_type}} (physical/digital/service/subscription)
- Refund scenario: {{refund_scenario}} (return/cancellation/dispute/error/dissatisfaction)
- Customer segment: {{customer_segment}} (one_time/loyal/at_risk/vip)
- Original order value: {{order_value}}
- Process complexity: {{process_complexity}} (instant/standard/complex)
- Refund timeframe: {{refund_timeframe}} (immediate/3-5_days/7-10_days/custom)

=== BUSINESS POLICIES ===
- Refund window: {{refund_window}} (14/30/60/90 days or custom)
- Refund method: {{refund_method}} (original_payment/store_credit/exchange_only/mixed)
- Return shipping: {{return_shipping}} (free_label/customer_pays/case_by_case)
- Restocking fee: {{restocking_fee}} (none/percentage/flat_fee)
- Conditions: {{refund_conditions}} (any_reason/defective_only/unused_only)
- Approval required: {{approval_process}} (automatic/manual_review/escalation)

=== COMMUNICATION NEEDS ===
- Primary concern: {{customer_concern}} (timeline/amount/method/eligibility)
- Emotional state: {{customer_emotion}} (frustrated/disappointed/angry/neutral)
- Channels: {{communication_channels}} (email/chat/phone/in_app)
- Touchpoints: {{touchpoint_count}} (initiation/confirmation/updates/completion)
- Language tone: {{tone_preference}} (apologetic/matter_of_fact/empathetic)

=== OPERATIONAL REQUIREMENTS ===
- Customer action needed: {{customer_actions}} (ship_item/confirm_cancellation/provide_info)
- Processing time breakdown: {{time_breakdown}} (review/approval/payment_processing/bank_transfer)
- Verification needed: {{verification_requirements}} (photos/receipt/condition_check)
- Exceptions: {{exception_scenarios}} (damaged/partial/subscription/sale_items)

=== OUTPUT REQUIREMENTS ===

Generate comprehensive refund process messaging:

```yaml
refund_messaging:
  initiation_phase:
    refund_request_form:
      heading: "Request a Refund"
      introduction: |
        We're sorry {{product_name}} didn't work out.
        We'll process your refund according to our {{policy_link}}.

      required_fields:
        - order_number:
            label: "Order Number"
            help_text: "Found in your confirmation email"

        - reason:
            label: "Reason for refund (optional but helpful)"
            options:
              - "Changed my mind"
              - "Found a better price"
              - "Item arrived damaged"
              - "Item doesn't match description"
              - "Ordered by mistake"
              - "Quality not as expected"
              - "Other"

        - condition: # For physical items
            label: "Item condition"
            options: ["Unopened", "Opened but unused", "Used"]

        - explanation:
            label: "Additional details (optional)"
            help_text: "Help us improve - what went wrong?"

      customer_expectations:
        timeline: "Refunds typically process in {{timeframe}}"
        next_step: "You'll receive a confirmation email with next steps"
        tracking: "Track your refund status: {{url}}"

    instant_confirmation:
      subject: "Refund Request Received #{{refund_id}}"
      message: |
        Hi {{customer_name}},

        We've received your refund request for Order #{{order_number}}.

        **What happens next:**
        {{dynamic_next_steps}}

        **Timeline:**
        {{expected_timeline}}

        **Refund Details:**
        - Original purchase: ${{order_total}}
        - Refund amount: ${{refund_amount}}
        - Refund method: {{refund_method}}

        Track your refund: {{tracking_url}}

        Questions? {{support_contact}}

  approval_phase:
    automatic_approval:
      subject: "Refund Approved - Here's what to do next"
      message: |
        Good news! Your refund has been approved.

        {{conditional_instructions}}

        We'll process your refund of ${{amount}} within {{timeframe}} after we receive the item.

    manual_review:
      subject: "We're reviewing your refund request"
      message: |
        Thanks for your patience. We're reviewing your refund request for Order #{{order_number}}.

        **Review timeline:** {{review_time}} (typically {{hours_or_days}})

        We may contact you if we need additional information.

        Current status: {{status_url}}

    conditional_messaging:
      physical_product_return:
        instructions: |
          **Return your item:**
          1. Download your prepaid shipping label: {{label_url}}
          2. Pack the item securely in its original packaging
          3. Drop off at any {{carrier}} location
          4. Keep your tracking number: {{tracking_number}}

          **Important:**
          - Ship within {{days}} days to avoid cancellation
          - Item must arrive in {{condition_requirement}}
          - Refund processes when item is received and inspected

      digital_product:
        instructions: |
          **Access will be removed:**
          Your access to {{product_name}} will be removed within 24 hours.

          **Refund processing:**
          Since this is a digital product, your refund will process immediately.
          Allow {{bank_processing_time}} for funds to appear in your account.

      subscription_cancellation:
        instructions: |
          **Your subscription:**
          - Access continues until {{end_of_period_date}}
          - No further charges after {{next_billing_date}}
          - Pro-rated refund: ${{prorated_amount}} (if applicable)

          **Refund details:**
          {{refund_calculation_explanation}}

  processing_phase:
    return_received:
      subject: "We've received your return"
      message: |
        Your return for Order #{{order_number}} has arrived at our facility.

        **What's next:**
        - We'll inspect the item (1-2 business days)
        - Issue refund if item meets return policy
        - Notify you when refund is processed

        **Expected refund:** ${{amount}} to your {{payment_method}}

    inspection_complete:
      approved:
        subject: "Refund processed - ${{amount}} on its way"
        message: |
          Great news! We've processed your refund.

          **Refund Details:**
          - Amount: ${{amount}}
          - Method: {{payment_method_description}}
          - Processing time: {{bank_timeline}}

          **When to expect it:**
          {{payment_method_specific_timeline}}

          The refund will appear as "{{company_name}}" or "{{merchant_descriptor}}" on your statement.

      partial_approval:
        subject: "Partial refund issued"
        message: |
          We've processed a partial refund for your return.

          **Refund breakdown:**
          - Item refund: ${{item_cost}}
          - Restocking fee: -${{restocking_fee}}
          - **Total refund: ${{net_amount}}**

          **Reason for partial refund:**
          {{explanation}}

          Questions about this? {{support_contact}}

      denied:
        subject: "Unable to process refund - here's why"
        message: |
          We've reviewed your return but we're unable to process a refund.

          **Reason:**
          {{denial_reason}}

          **What this means:**
          {{explanation_and_alternatives}}

          **Your options:**
          {{alternative_resolutions}}

          We understand this is disappointing. Please contact us: {{support_contact}}

  completion_phase:
    refund_completed:
      subject: "Refund complete - ${{amount}} refunded"
      message: |
        Your refund has been completed!

        **Refund Summary:**
        - Original order: #{{order_number}}
        - Refund amount: ${{amount}}
        - Refunded to: {{payment_method}}
        - Date processed: {{process_date}}

        **When you'll see it:**
        {{timeline_by_payment_method}}

        **Don't see it?**
        {{troubleshooting_guidance}}

        We're sorry {{product_name}} didn't work out. We'd love to help you find something better: {{shop_url}}

  timeline_messaging:
    payment_method_timelines:
      credit_card:
        message: "Credit card refunds appear in 5-7 business days"
        details: "Depends on your card issuer's processing time"

      debit_card:
        message: "Debit card refunds appear in 5-10 business days"
        details: "May take longer than credit cards"

      paypal:
        message: "PayPal refunds appear instantly to 24 hours"
        details: "Check your PayPal account"

      bank_transfer:
        message: "Bank transfers complete in 3-5 business days"
        details: "After our processing time"

      store_credit:
        message: "Store credit applied immediately"
        details: "Available now in your account"

  exception_scenarios:
    damaged_item:
      message: |
        We're sorry your item arrived damaged!

        **Fast resolution:**
        1. Take photos of the damage and packaging
        2. Upload here: {{upload_url}}
        3. We'll process your refund immediately (no return needed)

        Alternative: We can send a replacement instead. Prefer that? {{replacement_url}}

    outside_window:
      message: |
        Your order is outside our {{days}}-day refund window.

        **Order date:** {{order_date}}
        **Refund deadline was:** {{deadline_date}}

        **We may still be able to help:**
        Contact our team and explain your situation: {{support_contact}}

        We'll review on a case-by-case basis.

    final_sale:
      message: |
        This item was marked as final sale at purchase.

        **Exceptions we can make:**
        - Item arrived damaged or defective
        - Item significantly different from description

        **If that's your situation:** {{contact_support}}

    subscription_recent_charge:
      message: |
        We see you were charged recently ({{charge_date}}).

        **Your refund options:**
        - Full refund if canceled within {{grace_period}}
        - Pro-rated refund: ${{prorated_amount}}
        - Keep access until {{period_end}}, no future charges

        Choose your preference: {{options_url}}

  tone_variations:
    empathetic: # For frustrated customers
      opening: "We're truly sorry {{product}} didn't meet your expectations."
      closing: "We appreciate your feedback and will use it to improve."

    matter_of_fact: # For simple returns
      opening: "Your refund request has been received."
      closing: "Your refund will be processed according to our policy."

    apologetic: # For company error
      opening: "We sincerely apologize for this error."
      closing: "Thank you for your patience while we make this right."

    appreciative: # For loyal customers
      opening: "As a valued customer, we want to make this right."
      closing: "We hope to serve you again soon."

  support_escalation:
    when_to_offer:
      - "Refund denied and customer challenges"
      - "Processing taking longer than expected"
      - "Multiple refund requests from same customer"
      - "High-value order"
      - "Customer expresses strong dissatisfaction"

    escalation_message: |
      I understand this isn't the resolution you expected.

      Let me connect you with a specialist who can review your case: {{escalation_contact}}

      Reference number: {{case_id}}

  accessibility_requirements:
    - "Clear status indicators for each phase"
    - "Plain language explanations of timelines"
    - "Multiple ways to track refund status"
    - "Alternative text for visual status indicators"
    - "Screen reader announcements for status changes"
```

=== EXAMPLES ===

**Example 1: Simple Product Return (Apparel)**
- product_type: "Clothing"
- refund_scenario: "Changed mind - wrong size"
- customer_segment: "Returning customer"
- refund_timeframe: "5-7 days"

**Email: Refund Approved**

Subject: Refund Approved - Return Label Inside

Hi Jessica,

Your refund has been approved for your recent order!

**Return your item:**
1. Print your prepaid label: [Download Label]
2. Pack the sweater in any box or the original packaging
3. Drop it off at any FedEx location
4. Keep your tracking number: 1234567890

**Your refund:**
- Refund amount: $54.99
- Refunded to: Visa ending in 4242
- Processing: 5-7 days after we receive the item

Ship within 14 days. Track your return: [Track Return]

Questions? Reply to this email or call (555) 123-4567.

**Rationale:** Simple instructions. Clear timeline. No friction. Friendly tone. Easy return process.

**Example 2: Digital Product Refund (SaaS)**
- product_type: "Software subscription"
- refund_scenario: "Not satisfied with features"
- customer_segment: "New trial convert"
- refund_timeframe: "Immediate"

**Email: Refund Processed**

Subject: Refund Processed - $49 on its way back

Hi Marcus,

We're sorry our Pro plan didn't meet your needs.

**Refund details:**
- Amount: $49.00
- Method: Visa ending in 5678
- Timeline: 5-7 business days to appear on your statement

**Your account:**
- Access continues through Dec 31, 2024 (end of paid period)
- No future charges
- Data export available until Jan 15, 2025

**We'd love your feedback:**
What would have made our product work better for you?
[Quick 2-minute survey - optional]

Thanks for trying {{product_name}}.

**Rationale:** Immediate digital refund. Graceful exit. Feedback opportunity. No guilt trip. Professional.

**Example 3: Partial Refund (Damaged Item)**
- product_type: "Electronics"
- refund_scenario: "Item arrived with cosmetic damage"
- customer_segment: "VIP customer"
- refund_timeframe: "Immediate"

**Email: We're Sorry - Partial Refund Offered**

Subject: We apologize - here's how we'll make it right

Hi David,

We're truly sorry your headphones arrived with scratches on the case. That's not the experience we want for you.

**We'd like to offer:**

**Option 1: Partial refund - keep the item**
- Keep the headphones (fully functional)
- Receive $40 refund (20% off)
- Processed immediately

**Option 2: Full refund - return the item**
- Prepaid return label (we cover shipping)
- Full $199 refund
- Replacement headphones shipped immediately

**Choose your preference:**
[Keep with $40 refund] [Return for full refund]

As a thank you for your patience, we've also added a $20 credit to your account.

We value your loyalty and want to make this right.

Best regards,
Customer Care Team
Direct line: (555) 789-0123

**Rationale:** Company error acknowledged. Two clear options. Immediate resolution. VIP treatment. No hassle.

---

**Accessibility Requirements**: Refund messaging must be clear and scannable. Status updates must be keyboard navigable. Timeline information must not rely on color alone. Progress indicators must have text alternatives. All links must have descriptive labels. Forms must have clear error messages and validation (WCAG 3.0 Level AA). Plain language used throughout. Contact information always visible. Support for screen readers and magnification.

**Psychological Principles**: Transparency builds trust (honesty/credibility). Clear timelines reduce anxiety (certainty/control). Empathy maintains relationship (reciprocity). Easy process reduces friction (loss aversion). Options provide control (agency). Immediate confirmation reduces regret (cognitive dissonance). Feedback opportunity shows caring (voice/respect). Thank you preserves relationship (reciprocity/future business).

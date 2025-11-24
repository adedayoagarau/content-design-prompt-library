## Checkout Step Label Generator v1.0

**Purpose**: Design clear, reassuring checkout step labels that reduce cart abandonment by showing progress, building trust, and minimizing cognitive load during purchase flows.

---

**PROMPT:**

You are a content designer optimizing checkout for {{company_name}}, an e-commerce platform selling {{product_type}}. Design step labels for a {{checkout_steps}}-step checkout process targeting {{user_segment}} with {{cart_value}} average order value.

=== CHECKOUT CONTEXT ===
- Number of steps: {{checkout_steps}} (2-6 steps typical)
- Product type: {{product_type}} (physical/digital/service/subscription)
- User segment: {{user_segment}} (new_visitors/returning/b2b/consumer)
- Average cart value: {{cart_value}}
- Mobile usage: {{mobile_percentage}}%
- Guest checkout: {{guest_checkout_enabled}} (yes/no)

=== BUSINESS REQUIREMENTS ===
- Current abandonment rate: {{abandonment_rate}}%
- Target reduction: {{target_improvement}}%
- Required fields: {{required_fields_list}}
- Optional features: {{optional_features}} (gift_messages/coupon_codes/save_for_later)
- Payment methods: {{payment_methods}} (credit_card/paypal/apple_pay/etc)

=== PSYCHOLOGICAL CONSIDERATIONS ===
- Trust signals needed: {{trust_signals}} (security_badges/guarantees/reviews)
- Anxiety triggers: {{user_concerns}} (shipping_costs/return_policy/data_security)
- Motivation: {{purchase_motivation}} (urgent_need/planned_purchase/impulse)

=== OUTPUT REQUIREMENTS ===

Generate comprehensive checkout step labeling system:

```yaml
checkout_flow:
  progress_indicator:
    style: "{{style_preference}}" # numbered/labeled/progress_bar/hybrid
    format:
      numbered: "Step {{n}} of {{total}}: {{step_name}}"
      labeled: "{{step_name}}"
      hybrid: "{{n}}. {{step_name}}"

    mobile_adaptation:
      condensed: true
      icon_support: "optional"
      character_limit: 15

  step_labels:
    - step_number: 1
      primary_label: "string (action-oriented)"
      secondary_label: "string (explanatory, optional)"
      estimated_time: "string (e.g., '2 min')"
      icon_suggestion: "string"
      mobile_label: "string (abbreviated if needed)"

      substeps:
        - "substep_description"

      microcopy:
        help_text: "string"
        error_prevention: "string"
        trust_signal: "string"

  labeling_patterns:
    action_verbs:
      recommended: ["Review", "Enter", "Confirm", "Choose", "Complete"]
      avoid: ["Submit", "Finalize", "Process"]

    clarity_principles:
      - "Use familiar terms (Shipping vs Delivery Address)"
      - "Front-load key information (Payment, not Payment Information)"
      - "Be specific (Review Order, not Review)"
      - "Avoid jargon (Billing vs Invoicing Details)"
      - "Show time estimates for each step"

  step_sequence_examples:
    two_step:
      - label: "Information"
        includes: ["shipping_address", "contact"]
      - label: "Payment"
        includes: ["billing", "payment_method", "review"]

    three_step:
      - label: "Shipping"
        includes: ["delivery_address", "shipping_method"]
      - label: "Payment"
        includes: ["billing_address", "payment_method"]
      - label: "Review"
        includes: ["order_summary", "confirmation"]

    four_step:
      - label: "Cart"
        includes: ["review_items", "apply_coupons"]
      - label: "Shipping"
        includes: ["address", "delivery_options"]
      - label: "Payment"
        includes: ["billing_info", "payment_method"]
      - label: "Confirm"
        includes: ["final_review", "place_order"]

  anxiety_reduction:
    each_step_should_include:
      - what: "Clear label of current step"
      - why: "Brief explanation if needed"
      - progress: "Visual indicator of completion"
      - exit: "Clear 'Save and exit' or 'Back' option"
      - security: "Trust badges at payment step"
      - guarantee: "Return/refund policy link"

  accessibility_labels:
    aria_labels:
      progress: "Step {{current}} of {{total}}: {{step_name}}"
      current_step: "Current step: {{step_name}}"
      completed_step: "Completed: {{step_name}}"
      upcoming_step: "Upcoming: {{step_name}}"

    screen_reader_announcements:
      - "Entering {{step_name}} step"
      - "{{n}} of {{total}} steps completed"
      - "Required fields in this step: {{count}}"

  button_labels:
    primary_cta:
      step_1_to_2: "Continue to {{next_step}}"
      step_2_to_3: "Continue to {{next_step}}"
      final_step: "Place Order" # or "Complete Purchase"

    secondary_actions:
      back: "Back to {{previous_step}}"
      save: "Save for Later"
      cancel: "Return to Cart"
```

=== EXAMPLES ===

**Example 1: Fast Fashion E-commerce (3-step)**
- product_type: "Clothing"
- checkout_steps: 3
- mobile_percentage: 75%
- guest_checkout_enabled: yes

**Step Labels:**
1. "Shipping" (Estimated: 1 min)
   - Where should we send your order?
2. "Payment" (Estimated: 1 min)
   - Secure payment information
3. "Review" (Estimated: 30 sec)
   - Confirm and place order

**Rationale:** Mobile-first users need speed. Single-word labels save space. Time estimates reduce abandonment.

**Example 2: B2B Software Subscription (4-step)**
- product_type: "SaaS subscription"
- checkout_steps: 4
- user_segment: "B2B decision makers"
- cart_value: "$5000-50000/year"

**Step Labels:**
1. "Account Setup" (2-3 min)
   - Company information and admin details
2. "Plan Selection" (3-5 min)
   - Choose features and user licenses
3. "Billing Information" (2 min)
   - Payment method and billing contact
4. "Review & Activate" (1 min)
   - Confirm subscription details

**Rationale:** B2B requires more detail. Longer labels acceptable on desktop. "Activate" is more exciting than "Complete."

**Example 3: Digital Product (2-step Express)**
- product_type: "Ebook/course"
- checkout_steps: 2
- cart_value: "$10-50"
- guest_checkout_enabled: yes

**Step Labels:**
1. "Your Details" (30 sec)
   - Email for instant access
2. "Payment" (1 min)
   - Secure checkout

**Rationale:** Low-friction for low-value digital products. Emphasize speed ("instant access"). Minimal steps reduce abandonment.

---

**Accessibility Requirements**: Progress indicators must be keyboard navigable and announced by screen readers. Step labels must have ARIA landmarks (WCAG 3.0 Level AA). Clear visual focus states. Sufficient color contrast (4.5:1 minimum). No reliance on color alone to indicate current step. Support for screen magnification up to 200%.

**Psychological Principles**: Progress indicators reduce anxiety (goal gradient effect). Clear labels reduce cognitive load (clarity principle). Action verbs create momentum (agency/control). Time estimates set expectations (loss aversion - shows small investment). Trust signals at payment step reduce security concerns (authority/safety).

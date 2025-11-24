## Shipping Options Label Generator v1.0

**Purpose**: Design clear, compelling shipping option labels that help users make informed delivery choices while balancing speed, cost, and sustainability preferences.

---

**PROMPT:**

You are a shipping experience designer at {{company_name}} optimizing delivery options for {{product_category}}. Create shipping labels for {{number_of_options}} delivery methods serving {{geographic_scope}} with {{order_urgency}} typical urgency.

=== SHIPPING CONTEXT ===
- Product category: {{product_category}} (apparel/electronics/groceries/furniture/books)
- Geographic scope: {{geographic_scope}} (local/national/international)
- Number of options: {{number_of_options}} (2-6 typical)
- Warehouse locations: {{fulfillment_centers}}
- Average package weight: {{avg_weight}}
- Order urgency: {{order_urgency}} (standard/mixed/urgent)

=== DELIVERY CAPABILITIES ===
- Fastest option: {{fastest_delivery}} (same_day/next_day/2_day)
- Standard timeframe: {{standard_delivery}} (3-5 days/5-7 days/7-10 days)
- Free shipping threshold: {{free_shipping_threshold}} (if applicable)
- Weekend delivery: {{weekend_delivery}} (available/not_available)
- International shipping: {{international_options}} (yes/no)
- Tracking: {{tracking_availability}} (all_methods/paid_only/express_only)

=== BUSINESS STRATEGY ===
- Preferred method: {{preferred_shipping}} (to encourage via labeling/incentives)
- Sustainability goals: {{eco_friendly_options}} (carbon_neutral/offset/standard)
- Carrier partners: {{carriers}} (fedex/ups/usps/dhl/local_courier)
- Return policy: {{return_timeframe}} days
- Subscription members: {{membership_benefits}} (if applicable)

=== USER NEEDS ===
- Primary decision factor: {{decision_factor}} (speed/cost/reliability/eco_friendly)
- Cart value: {{cart_value}}
- Delivery address: {{address_type}} (residential/business/po_box/hotel)
- Time sensitivity: {{event_driven}} (gift/event/everyday)

=== OUTPUT REQUIREMENTS ===

Generate comprehensive shipping option labeling:

```yaml
shipping_options:
  display_principles:
    - "Lead with delivery timeframe, then cost"
    - "Use specific dates when possible ('Arrives Wed, Nov 27' vs '2-3 days')"
    - "Highlight free shipping clearly"
    - "Show cost savings or premium benefits"
    - "Indicate tracking availability"
    - "Surface eco-friendly options"

  option_structure:
    - shipping_id: "string"
      display_name: "string (customer-facing label)"
      delivery_promise: "string (timeframe with dates)"
      cost: "number (or 'FREE')"
      cost_display: "string (formatted price)"

      details:
        carrier: "string"
        estimated_delivery:
          earliest: "date"
          latest: "date"
          business_days: "number"
        cutoff_time: "string (e.g., 'Order within 3 hours')"

      features:
        tracking: boolean
        signature_required: boolean
        insurance_included: boolean
        eco_friendly: boolean
        weekend_delivery: boolean

      labels:
        badge: "string (FREE/FASTEST/ECO/RECOMMENDED)"
        description: "string (brief explanation)"
        savings: "string (if applicable: 'Save $5' or 'Included with membership')"

      accessibility:
        aria_label: "string (complete option description)"
        screen_reader_details: "string"

  label_patterns:
    express_shipping:
      - name: "Same-Day Delivery"
        promise: "Arrives today by {{time}}"
        when_to_show: "Orders before {{cutoff}} in {{zip_codes}}"
        badge: "FASTEST"

      - name: "Overnight Shipping"
        promise: "Arrives tomorrow by {{time}}"
        alternative: "Next-Day Delivery"
        badge: "NEXT DAY"

      - name: "2-Day Shipping"
        promise: "Arrives {{specific_date}}"
        alternative: "Express Delivery"

    standard_shipping:
      - name: "Standard Shipping"
        promise: "Arrives {{date_range}}"
        typical_timeframe: "5-7 business days"
        cost_display: "FREE on orders over ${{threshold}}"

      - name: "Ground Shipping"
        promise: "{{business_days}} business days"
        alternative: "Economy Shipping"

    specialized_options:
      - name: "Scheduled Delivery"
        promise: "Choose your delivery date"
        description: "Select a convenient date and time window"
        use_case: "Gifts, events, or when you'll be home"

      - name: "Weekend Delivery"
        promise: "Saturday delivery available"
        surcharge: "+${{amount}}"

      - name: "Carbon-Neutral Shipping"
        promise: "Standard delivery, carbon offset included"
        badge: "ECO-FRIENDLY"
        cost: "FREE" # or "+$1 for carbon offset"

  contextual_messaging:
    free_shipping_achieved:
      message: "You've qualified for FREE Standard Shipping!"
      format: "success_banner"

    almost_free_shipping:
      message: "Add ${{amount_needed}} more to qualify for FREE shipping"
      format: "informational_banner"

    express_urgency:
      message: "Order within {{countdown}} for {{delivery_promise}}"
      format: "urgency_timer"
      psychological_trigger: "scarcity"

    subscription_benefit:
      message: "FREE 2-Day Shipping included with {{membership_name}}"
      alternative: "Upgrade to {{membership}} for free express shipping"

    out_of_stock_delay:
      message: "Ships when item becomes available ({{restock_date}})"
      format: "warning"

  selection_interface:
    radio_button_format: |
      (○) {{delivery_promise}} - {{cost}}
          {{description}}
          {{badge_if_applicable}}

    default_selection:
      logic: "Free option if available, else cheapest, else standard"
      visual_indicator: "Pre-selected radio button"

    comparison_table: # For complex shipping needs
      columns:
        - "Shipping Method"
        - "Delivery Time"
        - "Cost"
        - "Tracking"
        - "Signature"

  international_shipping:
    label_additions:
      customs: "May require customs fees (not included)"
      duties: "Duties and taxes calculated at checkout"
      timeframe: "{{days}} business days, plus customs clearance"
      restriction: "Some items cannot ship to {{country}}"

    regional_labels:
      - region: "Canada"
        option: "International Standard"
        promise: "7-14 business days"
        note: "Duties and taxes may apply"

      - region: "Europe"
        option: "International Express"
        promise: "3-5 business days"
        note: "DDP (duties paid)"

  error_states:
    no_shipping_available:
      heading: "Shipping not available to this address"
      message: "We currently don't ship {{product_type}} to {{location}}."
      action: "Update your address or contact support"

    address_validation_needed:
      message: "We couldn't verify this address. Review and confirm to continue."
      risk: "Shipping delays possible with unverified addresses"

    po_box_restriction:
      message: "This item cannot be delivered to a P.O. Box"
      suggestion: "Please provide a street address"
```

=== EXAMPLES ===

**Example 1: E-commerce Apparel (Domestic)**
- product_category: "Clothing and accessories"
- geographic_scope: "United States"
- number_of_options: 3
- free_shipping_threshold: "$75"
- fastest_delivery: "2-day"

**Shipping Options:**
1. **FREE Standard Shipping** - Arrives Nov 28-30 (5-7 business days)
   - Free on orders over $75
   - Tracking included

2. **Express Shipping** - Arrives Nov 25 ($9.99)
   - 2-Day Delivery
   - Order within 4 hours for this option

3. **Overnight** - Arrives tomorrow by 8pm ($24.99) [FASTEST]
   - Next-day delivery
   - Signature required

**Rationale:** Specific dates reduce uncertainty. Free shipping threshold encourages larger carts. Urgency messaging for express.

**Example 2: Grocery Delivery (Local)**
- product_category: "Fresh groceries"
- geographic_scope: "Metro area"
- number_of_options: 4
- fastest_delivery: "same_day"

**Shipping Options:**
1. **Same-Day Delivery** - Today by 7pm (FREE) [RECOMMENDED]
   - Order by 2pm for today
   - Available in your area

2. **Scheduled Delivery** - Choose your 2-hour window (FREE)
   - Select date and time
   - Available 7am-10pm daily

3. **Express Delivery** - Within 1 hour ($7.99) [FASTEST]
   - Premium rush delivery
   - Limited to orders under $100

4. **Pickup** - Ready in 2 hours (FREE)
   - Curbside available
   - No contact option

**Rationale:** Local delivery focuses on speed and convenience. Scheduled option gives control. Pickup alternative saves cost.

**Example 3: Electronics (International)**
- product_category: "Consumer electronics"
- geographic_scope: "Worldwide"
- number_of_options: 4
- international_options: yes

**Shipping Options (to UK):**
1. **International Standard** - Arrives Dec 5-12 (£12.99)
   - 10-15 business days
   - Tracking included
   - Duties prepaid (DDP)

2. **International Express** - Arrives Nov 28-30 (£34.99)
   - 3-5 business days
   - Full tracking and insurance
   - Duties prepaid

3. **Economy International** - Arrives Dec 15-25 (£6.99)
   - 15-20 business days
   - Limited tracking
   - Duties and VAT may apply at delivery

4. **Premium Courier** - Arrives Nov 27 (£79.99) [FASTEST]
   - 2-day delivery
   - Signature required
   - All duties and taxes included

**Rationale:** International needs clear duties messaging. Multiple price points. Specific dates despite longer timeframes.

---

**Accessibility Requirements**: Shipping options must be keyboard navigable with clear focus states. Radio buttons must have associated labels and descriptions (WCAG 3.0 Level AA). Delivery dates must be provided in multiple formats (relative and absolute). Cost comparison must not rely on color alone. Countdown timers must have text alternatives. Screen readers must announce complete shipping details including cost, timeframe, and features. Sufficient contrast for all text (4.5:1 minimum).

**Psychological Principles**: Specific delivery dates reduce anxiety (uncertainty avoidance). Free shipping drives conversions (zero price effect). Countdown timers create urgency (scarcity principle). Default selection reduces decision fatigue (choice architecture). Badges guide attention (salience). Eco-friendly options appeal to values (identity/self-expression). "Almost free shipping" encourages upsells (goal gradient effect).

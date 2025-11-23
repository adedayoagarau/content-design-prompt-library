## Payment Method Label Generator v1.0

**Purpose**: Create clear, trustworthy payment option labels that reduce confusion, build security confidence, and accommodate diverse payment preferences across global markets.

---

**PROMPT:**

You are a checkout experience designer at {{company_name}} optimizing payment method selection for {{target_market}}. Design labels and descriptions for {{payment_options}} payment methods serving {{user_segment}} with {{transaction_value}} average transaction.

=== PAYMENT CONTEXT ===
- Available payment methods: {{payment_options}} (credit_card/debit/paypal/apple_pay/google_pay/bank_transfer/crypto/bnpl/wallet)
- Target market: {{target_market}} (US/EU/Asia/global)
- User segment: {{user_segment}} (consumer/b2b/mixed)
- Average transaction: {{transaction_value}}
- Mobile vs desktop: {{mobile_split}}% mobile
- International sales: {{international_percentage}}%

=== BUSINESS REQUIREMENTS ===
- Preferred payment method: {{preferred_method}} (to encourage via positioning/incentives)
- Transaction fees: {{fee_structure}} (absorbed/passed_to_customer/varies)
- Security standards: {{security_compliance}} (PCI_DSS/PSD2/3D_Secure)
- Supported currencies: {{currency_list}}
- Installment options: {{installment_availability}} (yes/no)

=== USER CONSIDERATIONS ===
- Primary concern: {{user_concern}} (security/convenience/cost/speed)
- Payment failures: {{failure_rate}}% current failure rate
- Regional preferences: {{regional_payment_habits}}
- Age demographics: {{age_range}}
- Tech savviness: {{tech_comfort}} (low/medium/high)

=== OUTPUT REQUIREMENTS ===

Generate comprehensive payment method labeling system:

```yaml
payment_method_labels:
  display_principles:
    - "Use official brand names (PayPal, not Paypal)"
    - "Include recognizable logos/icons"
    - "Show accepted card types visually"
    - "Indicate regional availability"
    - "Highlight recommended option if applicable"
    - "Display fees transparently"

  label_structure:
    - payment_type: "string"
      primary_label: "string (brand name or method type)"
      secondary_label: "string (brief descriptor, optional)"
      description: "string (when to use, benefits)"
      icon_file: "string"

      display_details:
        processing_time: "string (instant/1-3_days/etc)"
        fees: "string (if applicable)"
        security_note: "string (optional reassurance)"
        availability: "string (if limited)"

      help_text:
        tooltip: "string (hover/tap for more info)"
        learn_more_link: "url"

      saved_payment:
        label_format: "{{card_type}} ending in {{last_4}}"
        expiry_warning: "Expires {{month}}/{{year}}"
        update_link: "Edit payment method"

  payment_categories:
    credit_debit_cards:
      group_label: "Credit or Debit Card"
      accepted_types:
        - name: "Visa"
          icon: "visa_logo"
        - name: "Mastercard"
          icon: "mastercard_logo"
        - name: "American Express"
          icon: "amex_logo"
        - name: "Discover"
          icon: "discover_logo"

      form_fields:
        card_number: "Card number"
        expiry: "Expiration date (MM/YY)"
        cvv: "Security code (CVV)"
        cardholder_name: "Name on card"
        billing_zip: "Billing ZIP code"

      security_message: "Your payment information is encrypted and secure"

    digital_wallets:
      - method: "Apple Pay"
        label: "Apple Pay"
        description: "Fast checkout with Face ID or Touch ID"
        icon: "apple_pay_mark"
        requirements: "Available on Safari with Apple device"

      - method: "Google Pay"
        label: "Google Pay"
        description: "Quick and secure checkout"
        icon: "google_pay_mark"
        requirements: "Available on Chrome and Android"

      - method: "PayPal"
        label: "PayPal"
        description: "Pay with your PayPal account or credit card"
        icon: "paypal_logo"
        redirect_notice: "You'll be redirected to PayPal to complete payment"

    bank_transfer:
      label: "Bank Transfer (ACH)"
      description: "Pay directly from your bank account"
      processing_time: "3-5 business days"
      fee: "No processing fee"
      best_for: "Large purchases over $500"

    buy_now_pay_later:
      - provider: "Affirm"
        label: "Pay in 4 interest-free payments"
        description: "Split your purchase with {{provider}}"
        example: "4 payments of ${{amount}} every 2 weeks"
        eligibility: "Subject to approval"

      - provider: "Klarna"
        label: "Pay in 30 days or split in 3"
        description: "Flexible payment with {{provider}}"

    cryptocurrency:
      label: "Cryptocurrency"
      description: "Pay with Bitcoin, Ethereum, or other crypto"
      supported_currencies: ["BTC", "ETH", "USDC"]
      volatility_notice: "Exchange rate locked at checkout"
      processing_time: "15-60 minutes for confirmation"

  selection_interface:
    radio_button_labels:
      format: "{{payment_icon}} {{payment_name}}"
      selected_state_aria: "{{payment_name}} selected"

    recommended_badge:
      label: "Recommended"
      reason: "{{reason}}" # "Fastest", "No fees", "Most secure"

    saved_payment_section:
      heading: "Saved Payment Methods"
      add_new: "+ Add New Payment Method"
      default_indicator: "Default"
      remove_action: "Remove"

  error_prevention:
    card_validation:
      invalid_number: "Please check your card number"
      invalid_expiry: "Please check the expiration date"
      invalid_cvv: "Please enter the 3-4 digit security code"
      expired_card: "This card has expired. Please use a different card."

    payment_declined:
      generic: "Payment could not be processed. Please try another payment method."
      insufficient_funds: "Insufficient funds. Please try another card or payment method."
      contact_bank: "Payment declined. Please contact your bank for details."

  trust_signals:
    security_badges:
      - "256-bit SSL Encryption"
      - "PCI DSS Compliant"
      - "Verified by Visa / Mastercard SecureCode"

    guarantee_text: "Your payment information is never stored on our servers"
    refund_policy_link: "See our refund policy"
```

=== EXAMPLES ===

**Example 1: E-commerce Fashion Retailer (US Market)**
- payment_options: "credit_card, paypal, apple_pay, afterpay"
- target_market: "United States"
- transaction_value: "$50-150"
- user_segment: "Millennials/Gen Z consumers"

**Payment Labels:**
1. **Apple Pay** - "Pay in seconds with Face ID" [RECOMMENDED - Fastest]
2. **Credit or Debit Card** - "We accept Visa, Mastercard, Amex, Discover"
3. **PayPal** - "Pay with PayPal or credit card"
4. **Afterpay** - "Buy now, pay later in 4 interest-free payments"

**Rationale:** Apple Pay promoted for speed. BNPL appeals to younger demographics. Clear card acceptance.

**Example 2: B2B SaaS Platform (Global)**
- payment_options: "credit_card, bank_transfer, paypal_business"
- target_market: "Global (primarily US/EU)"
- transaction_value: "$500-5000/month"
- user_segment: "Business decision makers"

**Payment Labels:**
1. **Credit or Debit Card** - "Automatic monthly billing" [RECOMMENDED]
2. **Bank Transfer (ACH)** - "No processing fees. 3-5 business days. Best for annual plans."
3. **PayPal Business** - "Pay with your PayPal Business account"

**Rationale:** B2B prefers automated billing. Bank transfer positioned for high-value annual contracts. Professional language.

**Example 3: International Marketplace (Europe)**
- payment_options: "credit_card, ideal, sofort, sepa, paypal"
- target_market: "European Union"
- transaction_value: "€30-200"
- user_segment: "European consumers, multi-country"

**Payment Labels:**
1. **Credit or Debit Card** - "Visa, Mastercard, Maestro"
2. **iDEAL** - "Direct bank payment (Netherlands)"
3. **Sofort** - "Instant bank transfer (Germany, Austria)"
4. **SEPA Direct Debit** - "Automatic bank withdrawal (EU)"
5. **PayPal** - "Pay securely with PayPal"

**Rationale:** Regional payment methods are essential in EU. Country-specific methods labeled clearly. SEPA for recurring payments.

---

**Accessibility Requirements**: Payment method selection must be keyboard navigable with clear focus indicators. All payment icons must have alternative text (WCAG 3.0 Level AA). Security badges must be readable by screen readers. Form fields must have associated labels and error messages. Sufficient color contrast for all text (4.5:1 minimum). Support screen magnification. No timeout during payment method selection.

**Psychological Principles**: Familiar brand logos build trust (recognition heuristic). Security badges reduce anxiety (safety/authority). Transparent fees prevent surprise (loss aversion). "Recommended" badges guide decision-making (authority/social proof). Multiple payment options increase conversion (choice paradox balanced with organization). Clear error messages prevent frustration (control/agency).

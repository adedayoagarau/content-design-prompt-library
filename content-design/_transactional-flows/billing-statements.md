## Billing Statement Content Generator v1.0

**Purpose**: Create clear, trustworthy billing statement copy that provides transparent financial records, supports accounting needs, and reduces payment disputes through detailed transaction documentation.

---

**PROMPT:**

You are a billing communications designer at {{company_name}} creating statements for {{service_type}}. Design billing documentation for {{billing_model}} serving {{customer_type}} with {{statement_frequency}} statement delivery.

=== BILLING CONTEXT ===
- Service type: {{service_type}} (saas/utilities/subscription_box/professional_services/telecom)
- Billing model: {{billing_model}} (flat_rate/usage_based/tiered/hybrid/metered)
- Customer type: {{customer_type}} (consumer/small_business/enterprise)
- Statement frequency: {{statement_frequency}} (monthly/quarterly/annual/on_demand)
- Average bill: {{average_amount}}
- Complexity: {{complexity_level}} (simple_flat_fee/moderate_usage/complex_multi_service)

=== BUSINESS REQUIREMENTS ===
- Payment terms: {{payment_terms}} (due_on_receipt/net_15/net_30)
- Late fee policy: {{late_fee_structure}} (none/percentage/flat_fee)
- Autopay available: {{autopay_enabled}} (yes/no)
- Partial payment: {{partial_payment_allowed}} (yes/no)
- Dispute window: {{dispute_timeframe}} (days to dispute)
- Statement retention: {{archive_period}} (years available online)

=== DELIVERY REQUIREMENTS ===
- Format: {{format_options}} (pdf/html_email/printed/app_notification)
- Delivery method: {{delivery_method}} (email/postal_mail/account_portal/all)
- Language support: {{languages}}
- Accessibility: {{accessibility_standard}} (wcag_aa/wcag_aaa/pdf_ua)
- Timezone: {{timezone_handling}} (customer_local/utc/company_local)

=== USER NEEDS ===
- Primary use: {{primary_use}} (payment_reference/expense_reporting/tax_documentation/audit_trail)
- Detail level needed: {{detail_preference}} (summary_only/itemized/granular_usage)
- Payment behavior: {{payment_pattern}} (autopay/manual/sometimes_late/disputes_common)
- Support questions: {{common_inquiries}} (charges_unclear/payment_issues/usage_questions)

=== OUTPUT REQUIREMENTS ===

Generate comprehensive billing statement content:

```yaml
billing_statement:
  header_section:
    document_title:
      primary: "Billing Statement"
      alternatives: ["Invoice", "Statement of Account", "Bill"]

    statement_metadata:
      - statement_number:
          label: "Statement Number"
          format: "{{prefix}}-{{year}}{{month}}-{{sequence}}"
          example: "STMT-202411-1234"

      - statement_date:
          label: "Statement Date"
          format: "{{month}} {{day}}, {{year}}"

      - billing_period:
          label: "Billing Period"
          format: "{{start_date}} - {{end_date}}"
          example: "Nov 1, 2024 - Nov 30, 2024"

      - due_date:
          label: "Payment Due"
          format: "{{month}} {{day}}, {{year}}"
          emphasis: "bold or highlighted"
          urgency_indicator: "{{days_until_due}} days"

      - account_number:
          label: "Account Number"
          format: "{{account_id}}"
          privacy: "partially masked if printed"

    company_information:
      name: "{{company_legal_name}}"
      billing_address: "{{address}}"
      contact: "{{phone}} • {{email}}"
      website: "{{url}}"
      support_hours: "{{hours}}"

    customer_information:
      label: "Bill To:"
      name: "{{customer_name}}"
      account_id: "{{account_number}}"
      service_address: "{{address}}" # if different from billing
      billing_address: "{{address}}"

  amount_due_section:
    prominence: "Top of statement, highly visible"

    display:
      heading: "Amount Due"
      amount: "${{total_due}}"
      typography: "Large, bold, clear"
      due_date: "Pay by {{date}} to avoid late fees"

      previous_balance: "${{previous_amount}}"
      payments_received: "-${{payments}}"
      new_charges: "${{new_charges}}"
      current_balance: "${{total_due}}"

    status_indicators:
      current: "Current - Thank you for your on-time payment"
      due_soon: "Payment due in {{days}} days"
      overdue: "Past due - Payment required immediately"
      autopay_scheduled: "AutoPay scheduled for {{date}}"

  charges_breakdown:
    heading: "Charges This Period"

    flat_rate_model:
      - service_name: "{{subscription_name}}"
        description: "{{plan_details}}"
        period: "{{billing_period}}"
        amount: "${{amount}}"

    usage_based_model:
      summary_view:
        - category: "{{service_category}}"
          usage: "{{quantity}} {{units}}"
          rate: "${{rate}}/{{unit}}"
          subtotal: "${{amount}}"

      detailed_view:
        - date: "{{date}}"
          time: "{{time}}" # if applicable
          description: "{{usage_detail}}"
          quantity: "{{number}} {{units}}"
          rate: "${{rate}}"
          amount: "${{line_total}}"

    tiered_billing:
      - tier: "{{tier_name}}"
        included: "First {{quantity}} {{units}} included"
        overage: "{{overage_quantity}} additional {{units}}"
        rate: "${{rate}}/{{unit}}"
        subtotal: "${{amount}}"

    example_formats:
      saas_subscription:
        line_item: "Professional Plan - 10 users"
        period: "Dec 1, 2024 - Dec 31, 2024"
        amount: "$299.00"

      utilities_usage:
        line_item: "Electricity Usage - 850 kWh"
        detail: "Average daily usage: 28.3 kWh"
        rate: "$0.12/kWh"
        amount: "$102.00"

      telecom_itemized:
        line_item: "Data Usage - 8.5 GB"
        included: "5 GB included in plan"
        overage: "3.5 GB overage @ $10/GB"
        amount: "$35.00"

      professional_services:
        line_item: "Consulting Services - 12 hours"
        description: "Web development (Nov 15-22)"
        rate: "$150/hour"
        amount: "$1,800.00"

  totals_calculation:
    structure:
      - previous_balance:
          label: "Previous Balance"
          amount: "${{amount}}"

      - payments_credits:
          label: "Payments/Credits"
          amount: "-${{amount}}"
          detail: "Thank you! (Paid {{date}})"

      - subtotal_new_charges:
          label: "New Charges"
          amount: "${{amount}}"

      - taxes_fees:
          label: "Taxes & Regulatory Fees"
          breakdown:
            - "State tax ({{rate}}%): ${{amount}}"
            - "Federal surcharge: ${{amount}}"
          total: "${{tax_total}}"

      - adjustments:
          label: "Adjustments/Credits"
          amount: "-${{amount}}"
          explanation: "{{reason}}"

      - late_fees:
          label: "Late Payment Fee"
          amount: "${{amount}}"
          note: "From previous billing period"

      - total_amount_due:
          label: "Total Amount Due"
          amount: "${{total}}"
          emphasis: "bold, larger font"
          payment_deadline: "Pay by {{date}}"

  payment_information:
    heading: "How to Pay"

    autopay_status:
      active:
        message: "AutoPay is ON - Payment will be automatically withdrawn on {{date}}"
        payment_method: "{{card_type}} ending in {{last_4}}"
        edit_link: "Update payment method: {{url}}"

      inactive:
        message: "Set up AutoPay for automatic payments and never miss a due date"
        benefit: "Save time and avoid late fees"
        setup_link: "Enroll in AutoPay: {{url}}"

    payment_methods:
      - method: "Online"
        instruction: "Pay at {{website_url}}"
        accepted: "Credit card, debit card, bank account"
        processing: "Instant - posts immediately"

      - method: "Phone"
        instruction: "Call {{phone_number}}"
        available: "{{hours}}"
        processing: "Same day processing"

      - method: "Mail"
        instruction: |
          Mail check to:
          {{company_name}}
          P.O. Box {{number}}
          {{city}}, {{state}} {{zip}}
        important: "Include account number on check"
        processing: "Allow 5-7 business days"

      - method: "In Person"
        instruction: "Visit any {{location_name}}"
        hours: "{{business_hours}}"
        accepted: "Cash, check, credit/debit card"

  usage_summary: # For usage-based billing
    heading: "Usage Summary"

    comparison_chart:
      current_period: "{{usage}} {{units}}"
      previous_period: "{{usage}} {{units}}"
      change: "{{percentage}}% {{increase/decrease}}"
      visual: "bar_chart or line_graph"

    daily_breakdown:
      format: "table or graph"
      shows: "usage by day or hour"
      peak_usage: "Highlighted peak usage days/times"

    cost_saving_tips:
      - "{{actionable_tip_based_on_usage_pattern}}"
      - "Average customer in your area uses {{benchmark}}"

  account_activity:
    heading: "Account Activity"

    recent_transactions:
      columns: ["Date", "Description", "Amount", "Balance"]
      rows:
        - date: "{{date}}"
          description: "{{transaction_type}}"
          amount: "${{amount}}"
          balance: "${{running_balance}}"

    payment_history:
      last_payment:
        amount: "${{amount}}"
        date: "{{date}}"
        method: "{{payment_method}}"
        status: "Posted"

  messages_alerts:
    important_notices:
      - notice_type: "price_change"
        heading: "Price Change Notice"
        message: "Starting {{date}}, your plan rate will change from ${{old}} to ${{new}}"
        reason: "{{explanation}}"
        action: "Questions? Contact us: {{support}}"

      - notice_type: "service_change"
        heading: "Service Update"
        message: "{{description_of_change}}"

      - notice_type: "payment_issue"
        heading: "Payment Failed"
        message: "Your payment of ${{amount}} on {{date}} was declined"
        urgency: "Update payment method to avoid service interruption"
        action_link: "Update now: {{url}}"

    promotional_messages:
      - "Upgrade to {{higher_tier}} and save {{amount}}"
      - "Refer a friend and earn ${{credit}}"
      - "Paperless billing saves trees and earns you ${{credit}}/month"

  footer_section:
    payment_terms:
      - "Payment due by {{date}}"
      - "Late fee of {{amount}} applies after {{date}}"
      - "Partial payments accepted - call {{phone}} to arrange"

    dispute_information:
      message: "Questions about a charge?"
      timeframe: "Disputes must be filed within {{days}} days of statement date"
      contact: "Contact: {{email}} or {{phone}}"

    account_notices:
      - "Retain this statement for your records"
      - "Paperless billing available - save paper and get ${{credit}}"
      - "Set up AutoPay to never miss a payment"

    legal_disclaimers:
      - "{{terms_of_service_reference}}"
      - "{{privacy_policy_reference}}"
      - "{{regulatory_disclosures}}"

    contact_information:
      customer_service:
        phone: "{{phone_number}}"
        email: "{{email_address}}"
        hours: "{{support_hours}}"
        website: "{{url}}"

      emergency_service:
        available: "24/7 emergency line: {{phone}}"

  specialized_formats:
    first_bill:
      welcome_message: "Welcome! This is your first bill."
      explanation: "Here's what you're paying for and when"
      setup_help: "Questions? We're here to help: {{support}}"

    final_bill:
      heading: "Final Statement"
      message: "This is your final bill. Service ended {{date}}."
      final_charges: "Includes charges through {{end_date}}"
      refund_note: "Credit balance of ${{amount}} will be refunded within {{days}} days"

    adjusted_bill:
      heading: "Adjusted Statement"
      message: "This replaces statement {{previous_statement_number}}"
      reason: "Adjustment reason: {{explanation}}"
      original_amount: "Original: ${{old_amount}}"
      adjusted_amount: "Adjusted: ${{new_amount}}"
      difference: "Difference: ${{diff}}"

  accessibility_requirements:
    pdf:
      - "Tagged PDF (PDF/UA compliant)"
      - "Proper heading hierarchy"
      - "Table headers marked"
      - "Selectable text (no image-based PDFs)"
      - "Color contrast 4.5:1 minimum"

    html_email:
      - "Semantic table structure"
      - "Plain text alternative"
      - "Readable without CSS"
      - "Screen reader friendly"
```

=== EXAMPLES ===

**Example 1: SaaS Monthly Billing (Simple)**
- service_type: "Project management software"
- billing_model: "Flat rate subscription"
- customer_type: "Small business"
- statement_frequency: "Monthly"

**BILLING STATEMENT**

**TaskFlow Pro**
Statement #STMT-202411-8392
Statement Date: November 30, 2024
Billing Period: Nov 1 - Nov 30, 2024

**Account:** TechStart Inc. (#TS-5821)
**Due Date:** December 15, 2024

---

**AMOUNT DUE: $299.00**
**AutoPay scheduled for Dec 1, 2024**

---

**Charges This Period:**
| Service | Period | Amount |
|---------|--------|--------|
| Professional Plan (10 users) | Nov 1 - Nov 30, 2024 | $299.00 |

**Subtotal:** $299.00
**Total Amount Due:** $299.00

**Payment Method:** Visa ending in 4242

**Your AutoPay is active** - We'll charge your card on December 1.
Update payment method: taskflow.com/billing

Questions? support@taskflow.com • (555) 123-4567

**Rationale:** Simple flat fee needs minimal detail. AutoPay status clear. Clean, scannable format.

**Example 2: Utility Bill (Usage-Based)**
- service_type: "Electricity"
- billing_model: "Usage-based metered"
- customer_type: "Residential consumer"
- statement_frequency: "Monthly"

**STATEMENT OF ACCOUNT**

**PowerGrid Electric**
Account #: 1234-5678-90
Statement Date: November 30, 2024
Service Period: Oct 31 - Nov 29, 2024

**Service Address:**
Sarah Johnson
456 Oak Avenue
Seattle, WA 98101

**DUE DATE: December 20, 2024**

---

**AMOUNT DUE: $147.82**

---

**Charges:**
Previous Balance: $134.50
Payment Received (Nov 5) - Thank you!: -$134.50

**New Charges:**
Electricity Usage (850 kWh @ $0.12/kWh): $102.00
Distribution Charge: $15.00
State Tax (6.5%): $7.61
Federal Energy Surcharge: $3.21

**Total New Charges:** $127.82
**Late Fee from Previous Period:** $20.00
**TOTAL AMOUNT DUE:** $147.82

---

**Your Usage:**
This period: 850 kWh
Last period: 780 kWh (+9%)
Average daily: 28.3 kWh

**Tip:** Your usage increased 9% vs last month. Peak usage was on Nov 15 (42 kWh). Consider reducing heating during peak hours to save.

---

**Pay by Dec 20 to avoid additional late fees ($15)**

**How to Pay:**
• Online: powergrid.com/pay (instant)
• Phone: (555) 789-0123 (24/7)
• Mail: PowerGrid Electric, P.O. Box 9876, Seattle WA 98109

**Questions about your bill?** Call (555) 789-0123 (Mon-Fri 8am-6pm)

**Rationale:** Usage details front and center. Comparison to previous period. Cost-saving tips. Late fee clearly shown. Multiple payment options.

**Example 3: Professional Services (Itemized)**
- service_type: "Legal services"
- billing_model: "Hourly billing"
- customer_type: "Business client"
- statement_frequency: "Monthly"

**INVOICE**

**Johnson & Associates Legal**
Invoice #: INV-2024-1128
Date: November 28, 2024
Client: Acme Corporation (#CLI-439)

**Payment Terms:** Net 30
**Due Date:** December 28, 2024

---

**AMOUNT DUE: $8,450.00**

---

**Legal Services Rendered:**

**Corporate Contract Review (Matter #2024-089)**

| Date | Attorney | Description | Hours | Rate | Amount |
|------|----------|-------------|-------|------|---------|
| Nov 5 | J. Smith (Partner) | Contract review and analysis | 3.5 | $450 | $1,575.00 |
| Nov 8 | M. Chen (Associate) | Research and memo preparation | 5.0 | $250 | $1,250.00 |
| Nov 12 | J. Smith (Partner) | Client meeting and negotiation | 2.0 | $450 | $900.00 |
| Nov 15 | M. Chen (Associate) | Draft amendments | 4.0 | $250 | $1,000.00 |
| Nov 20 | J. Smith (Partner) | Final review and client call | 1.5 | $450 | $675.00 |

**Total Legal Fees:** $5,400.00

**Expenses:**
| Date | Description | Amount |
|------|-------------|--------|
| Nov 10 | Legal research database access | $150.00 |
| Nov 12 | Document filing fees | $75.00 |

**Total Expenses:** $225.00

---

**Summary:**
Legal Fees: $5,400.00
Expenses: $225.00
**Subtotal:** $5,625.00

Previous Balance: $3,200.00
Payment Received (Nov 15): -$3,200.00
Credit Applied: -$125.00 (Billing adjustment)

**TOTAL AMOUNT DUE:** $8,450.00

**Payment Due:** December 28, 2024 (Net 30)

---

**Payment Instructions:**
Bank Transfer: Account #123456789, Routing #021000021
Reference: INV-2024-1128

Check: Make payable to Johnson & Associates Legal
Mail to: 789 Legal Plaza, Suite 400, Boston MA 02101

Questions? billing@johnsonlegal.com • (555) 234-5678

**Rationale:** Itemized time entries for transparency. Matter reference for client tracking. Expenses separated. Previous balance shown. Professional B2B format.

---

**Accessibility Requirements**: Billing statements must be accessible in PDF and HTML formats. PDFs must be tagged (PDF/UA) with proper reading order and table headers. Color contrast minimum 4.5:1 (WCAG 3.0 Level AA). Amount due must be highly visible without relying on color. Tables must have proper headers for screen readers. Plain text email version available. Support for screen magnification up to 200%. No critical information in images only.

**Psychological Principles**: Clear amount due reduces anxiety (certainty). Usage comparison enables optimization (feedback/control). Payment method visibility builds trust (transparency). AutoPay status reduces cognitive load (automation). Breakdown justifies cost (fairness/transparency). Due date prominence prevents late fees (loss aversion). Cost-saving tips show care (reciprocity). Multiple payment options provide control (agency). Thank you for payment builds relationship (reciprocity/appreciation).

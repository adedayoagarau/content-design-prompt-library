## Receipt & Invoice Content Generator v1.0

**Purpose**: Create clear, compliant receipt and invoice copy that serves as legal documentation, accounting records, and customer reference while maintaining brand voice.

---

**PROMPT:**

You are a transactional document designer at {{company_name}} creating receipts and invoices for {{business_model}}. Design documentation for {{transaction_type}} transactions serving {{customer_type}} with {{tax_complexity}} tax requirements.

=== BUSINESS CONTEXT ===
- Business model: {{business_model}} (b2c_retail/b2b_services/saas/marketplace)
- Transaction type: {{transaction_type}} (one_time_purchase/recurring_subscription/service_invoice)
- Customer type: {{customer_type}} (individual_consumer/small_business/enterprise)
- Average transaction: {{transaction_value}}
- Tax complexity: {{tax_complexity}} (simple_sales_tax/vat/multi_jurisdiction/exempt)
- Currency: {{currency}}

=== LEGAL REQUIREMENTS ===
- Jurisdiction: {{jurisdiction}} (us/eu/uk/canada/australia/global)
- Tax registration: {{tax_id_required}} (yes/no)
- Invoice numbering: {{numbering_system}} (sequential/date_based/custom)
- Retention requirement: {{record_retention}} (years to retain)
- Payment terms: {{payment_terms}} (immediate/net_30/net_60/custom)
- Legal entity name: {{legal_entity_name}}

=== DELIVERY REQUIREMENTS ===
- Format: {{format}} (pdf/html_email/printed/all)
- Delivery method: {{delivery_method}} (email/account_download/physical_mail)
- Language support: {{languages}} (single/multiple)
- Accessibility: {{accessibility_level}} (wcag_aa/wcag_aaa/pdf_ua)

=== CONTENT NEEDS ===
- Branding level: {{branding}} (minimal/moderate/full)
- Itemization detail: {{detail_level}} (summary/detailed/line_item)
- Tax breakdown: {{tax_display}} (simple/detailed/multi_jurisdiction)
- Payment method shown: {{show_payment_method}} (yes/no/last_4_only)

=== OUTPUT REQUIREMENTS ===

Generate comprehensive receipt/invoice content:

```yaml
receipt_invoice:
  document_type_distinction:
    receipt:
      purpose: "Proof of payment for completed transaction"
      when_issued: "Immediately after payment"
      legal_status: "Payment confirmation"
      required_elements: ["payment_proof", "items_purchased", "date", "amount"]

    invoice:
      purpose: "Request for payment or record of amount owed"
      when_issued: "Before or at time of payment"
      legal_status: "Payment request or tax document"
      required_elements: ["invoice_number", "payment_terms", "tax_breakdown", "legal_entity"]

  header_section:
    document_title:
      receipt: "Receipt"
      invoice: "Invoice"
      tax_invoice: "Tax Invoice" # Required in some jurisdictions
      credit_note: "Credit Note" # For refunds/adjustments

    company_information:
      required_fields:
        - legal_name: "{{company_legal_name}}"
        - trading_name: "{{company_brand_name}}" # if different
        - registered_address: "{{full_address}}"
        - tax_id: "{{tax_registration_number}}" # VAT/GST/ABN/EIN
        - company_registration: "{{registration_number}}" # if required
        - contact_details: "{{email}} • {{phone}}"

      logo_placement: "top_left or top_center"

    document_identifiers:
      - document_number:
          label: "Invoice Number" # or "Receipt Number"
          format: "{{prefix}}-{{sequential}}-{{suffix}}"
          example: "INV-2024-001234"

      - document_date:
          label: "Invoice Date" # or "Receipt Date"
          format: "{{full_date}}"
          example: "November 23, 2024"

      - due_date: # Invoices only
          label: "Due Date"
          calculation: "{{terms_days}} from invoice date"
          example: "December 23, 2024 (Net 30)"

  customer_information:
    heading: "Bill To:" # or "Customer Details"

    required_fields:
      - customer_name: "{{individual_or_company_name}}"
      - billing_address: "{{full_address}}"
      - tax_id: "{{customer_tax_id}}" # if applicable
      - customer_id: "{{account_number}}" # if applicable

    shipping_address: # If different from billing
      heading: "Ship To:"
      address: "{{shipping_address}}"

  line_items:
    table_structure:
      columns:
        - "Description"
        - "Quantity"
        - "Unit Price"
        - "Tax" # optional column
        - "Amount"

    line_item_format:
      - description:
          primary: "{{product_name}}"
          secondary: "{{variant_details}}"
          sku: "SKU: {{sku}}" # optional

      - quantity:
          format: "{{number}}"
          unit: "{{unit_of_measure}}" # if applicable

      - unit_price:
          format: "{{currency_symbol}}{{amount}}"
          decimals: 2

      - line_total:
          format: "{{currency_symbol}}{{amount}}"
          calculation: "quantity × unit_price"

    itemization_examples:
      retail_product:
        description: "Men's Cotton T-Shirt (Size L, Navy Blue)"
        quantity: 2
        unit_price: "$24.99"
        amount: "$49.98"

      saas_subscription:
        description: "Professional Plan - Monthly Subscription"
        quantity: 1
        unit_price: "$99.00"
        amount: "$99.00"
        period: "Dec 1, 2024 - Dec 31, 2024"

      consulting_service:
        description: "Web Development Services - 10 hours"
        quantity: 10
        unit_price: "$150.00/hr"
        amount: "$1,500.00"
        date_range: "Nov 15-22, 2024"

  totals_section:
    calculation_breakdown:
      - subtotal:
          label: "Subtotal"
          calculation: "sum of all line items before tax"
          format: "${{amount}}"

      - discount: # if applicable
          label: "Discount ({{discount_code}})"
          format: "-${{amount}}"
          percentage: "{{percentage}}% off"

      - shipping: # if applicable
          label: "Shipping ({{method}})"
          format: "${{amount}}"

      - tax:
          simple:
            label: "Sales Tax ({{rate}}%)"
            format: "${{amount}}"

          detailed:
            label: "Tax Breakdown"
            items:
              - state_tax: "State Tax ({{rate}}%): ${{amount}}"
              - local_tax: "Local Tax ({{rate}}%): ${{amount}}"

          vat_format:
            label: "VAT ({{rate}}%)"
            format: "{{currency_symbol}}{{amount}}"
            note: "VAT Registration: {{vat_number}}"

      - total:
          label: "Total" # or "Amount Due" for invoices
          format: "{{currency_symbol}}{{amount}}"
          emphasis: "bold, larger font"
          currency_note: "All amounts in {{currency_code}}"

  payment_information:
    receipt_payment_proof:
      heading: "Payment Method"
      card_payment: "{{card_type}} ending in {{last_4}}"
      transaction_id: "Transaction ID: {{transaction_id}}"
      payment_date: "Paid: {{date_time}}"
      status: "PAID" # badge or stamp

    invoice_payment_instructions:
      heading: "Payment Instructions"

      bank_transfer:
        method: "Bank Transfer / Wire"
        details: |
          Bank Name: {{bank_name}}
          Account Name: {{account_name}}
          Account Number: {{account_number}}
          Routing Number: {{routing_number}}
          SWIFT/BIC: {{swift_code}} # for international
          Reference: {{invoice_number}} # important!

      online_payment:
        method: "Pay Online"
        cta: "Pay this invoice: {{payment_url}}"
        accepted_methods: "Credit Card, PayPal, ACH"

      check_payment:
        method: "Check"
        details: |
          Make checks payable to: {{company_name}}
          Mail to: {{payment_address}}
          Include invoice number on check

  footer_section:
    payment_terms: # Invoices
      standard: "Payment due within {{days}} days of invoice date"
      net_30: "Net 30 - Payment due within 30 days"
      due_on_receipt: "Payment due upon receipt"
      late_fees: "Late payments subject to {{percentage}}% monthly fee"

    return_policy: # Receipts
      standard: "{{days}}-day return policy. See {{url}} for details."
      no_returns: "All sales final for digital products"

    tax_notes:
      - "Tax collected on behalf of {{jurisdiction}}"
      - "This is a tax invoice as required by {{regulation}}"
      - "Retain this document for your records"

    support_contact:
      questions: "Questions about this {{document_type}}?"
      email: "Email: {{support_email}}"
      phone: "Call: {{support_phone}}"
      hours: "Support hours: {{business_hours}}"

    legal_disclaimers:
      - "{{company_legal_name}} • {{registration_details}}"
      - "Registered office: {{registered_address}}"

  specialized_formats:
    subscription_receipt:
      period_covered: "Billing Period: {{start_date}} - {{end_date}}"
      next_billing: "Next billing date: {{next_charge_date}}"
      cancel_info: "Manage subscription: {{account_url}}"

    refund_receipt:
      document_title: "Refund Receipt"
      original_transaction: "Original Order: {{order_number}}"
      refund_amount: "Refund Amount: ${{amount}}"
      refund_method: "Refunded to {{payment_method}}"
      processing_time: "Please allow {{days}} business days"

    credit_note:
      document_title: "Credit Note"
      original_invoice: "Original Invoice: {{invoice_number}}"
      reason: "Reason: {{refund_reason}}"
      credit_amount: "Credit Amount: ${{amount}}"
      balance_adjustment: "Remaining balance: ${{balance}}"

  accessibility_requirements:
    pdf:
      - "PDF/UA compliant (tagged PDF)"
      - "Accessible reading order"
      - "Table headers properly marked"
      - "Selectable text (not scanned image)"
      - "Sufficient color contrast (4.5:1)"

    html_email:
      - "Semantic table structure"
      - "Alt text for logo"
      - "Plain text version included"
      - "Readable without CSS"
```

=== EXAMPLES ===

**Example 1: E-commerce Receipt (B2C)**
- business_model: "Online retail"
- transaction_type: "One-time purchase"
- customer_type: "Individual consumer"
- tax_complexity: "Simple sales tax"

**RECEIPT**

**Acme Clothing Co.**
123 Commerce St, New York, NY 10001
support@acmeclothing.com • (555) 123-4567

Receipt #RCT-2024-458392
Date: November 23, 2024

**Bill To:**
Sarah Johnson
456 Oak Avenue
Brooklyn, NY 11201

**Items Purchased:**
| Description | Qty | Price | Amount |
|-------------|-----|-------|---------|
| Women's Wool Coat (Size M, Black) | 1 | $159.99 | $159.99 |
| Leather Gloves (Size S, Brown) | 1 | $39.99 | $39.99 |

Subtotal: $199.98
Shipping (Standard): $8.99
Sales Tax (NY 8.875%): $17.75
**Total: $226.72**

**Payment Method:**
Visa ending in 4242
Transaction ID: ch_3NxK7qLkdIwHu7ix0B3ZWCmP
Paid: Nov 23, 2024 at 2:34 PM

**Return Policy:** 30-day returns. Visit acmeclothing.com/returns

**Rationale:** Clear itemization. Sales tax shown. Payment proof included. Consumer-friendly language.

**Example 2: SaaS Invoice (B2B)**
- business_model: "SaaS subscription"
- transaction_type: "Recurring subscription"
- customer_type: "Small business"
- payment_terms: "Net 30"

**INVOICE**

**CloudMetrics Analytics Ltd**
Registered Office: 789 Tech Park, San Francisco, CA 94105
Tax ID: 98-7654321

Invoice Number: INV-2024-003847
Invoice Date: November 1, 2024
Due Date: December 1, 2024 (Net 30)

**Bill To:**
TechStart Inc.
John Smith, CFO
321 Startup Lane
Austin, TX 78701
Account #: CUST-5821

**Services:**
| Description | Quantity | Unit Price | Amount |
|-------------|----------|------------|---------|
| Professional Plan Subscription<br>Billing Period: Nov 1 - Nov 30, 2024<br>Includes: 10 team members, unlimited projects | 1 | $299.00 | $299.00 |
| Additional User Licenses (5 users) | 5 | $25.00 | $125.00 |

Subtotal: $424.00
**Amount Due: $424.00**

**Payment Instructions:**
Pay online: cloudmetrics.com/pay/INV-2024-003847
Or pay by bank transfer:
Bank: Chase Business Banking
Account: CloudMetrics Analytics Ltd
Account #: 123456789
Routing #: 021000021
Reference: INV-2024-003847

Terms: Net 30. Payment due by December 1, 2024.
Late payments subject to 1.5% monthly fee.

Questions? billing@cloudmetrics.com • (555) 789-0123

**Rationale:** B2B format with payment terms. Multiple payment options. Account reference. Professional tone.

**Example 3: Service Receipt (EU VAT)**
- business_model: "Consulting services"
- transaction_type: "One-time service"
- customer_type: "Small business"
- tax_complexity: "VAT"

**TAX INVOICE**

**Green Design Studio Ltd**
15 Creative Quarter, London, EC1A 1BB, United Kingdom
VAT Registration: GB 123456789
Company Registration: 12345678

Invoice Number: INV-2024-0892
Invoice Date: 23 November 2024
Payment Terms: Due on receipt

**Bill To:**
Startup Ventures Ltd
45 Business Park
Manchester, M1 1AD
VAT Number: GB 987654321

**Services Provided:**
| Description | Hours | Rate | Amount |
|-------------|-------|------|---------|
| Brand Identity Design<br>Project: Logo and brand guidelines | 24 | £95.00 | £2,280.00 |
| Web Design Consultation<br>Dates: 15-22 Nov 2024 | 6 | £95.00 | £570.00 |

Subtotal: £2,850.00
VAT (20%): £570.00
**Total: £3,420.00**

**Payment Received:**
Bank Transfer - 23 November 2024
**PAID**

This is a tax invoice for VAT purposes.
Please retain for your accounting records.

Questions: hello@greendesignstudio.com

**Rationale:** EU VAT compliance. VAT numbers shown. Tax invoice labeled. Hourly services itemized.

---

**Accessibility Requirements**: All receipts and invoices must be accessible in both PDF and HTML formats. PDFs must be tagged (PDF/UA compliant) with proper reading order. Tables must have headers properly marked. Color contrast minimum 4.5:1 (WCAG 3.0 Level AA). Text must be selectable (not images). Plain text version available for screen readers. Support screen magnification up to 200%.

**Psychological Principles**: Clear itemization builds trust (transparency). Professional formatting conveys legitimacy (authority). Organized totals reduce cognitive load (clarity). Payment proof reduces anxiety (certainty). Contact information builds confidence (accessibility/support). Legal compliance signals trustworthiness (authority).

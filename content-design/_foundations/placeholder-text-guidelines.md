## Placeholder Text Content Strategy

**Purpose**: Use placeholder text that educates without confusing or setting unrealistic examples.

---

**PROMPT:**

Design placeholder text strategy for {{input_field_type}}.

=== FIELD PARAMETERS ===
Field type: {{field_type}} (text, email, phone, date, number, textarea, select)
Field purpose: {{purpose}} (search, filter, data entry, creative input)
User familiarity: {{familiarity}} (common/rare/unique)
Format requirements: {{format_rules}} (regex, length, character restrictions)
Examples needed: {{needs_examples}} (true/false)
Criticality: {{criticality}} (required/optional)

=== PLACEHOLDER BEST PRACTICES ===

**DO:**
- Show acceptable format: "MM/DD/YYYY"
- Use generic examples: "Enter project name"
- Keep it short: Max 40 characters for inputs
- Make it neutral: Avoid personality
- Update based on validation state

**DON'T:**
- Use "John Doe" or "example@example.com" (confuses with real data)
- Use humor or brand voice (distracting)
- Make it look pre-filled (user may skip)
- Use placeholders as labels (accessibility violation)
- Show sensitive data formats (credit card numbers)

=== OUTPUT STRUCTURE ===

```yaml
placeholder_strategy:
  default_placeholder: "string"
  
  instructional_variant:
    use_when: "user has made error or field is complex"
    copy: "string (more explicit)"
    
  format_hint:
    show_separately: "boolean (separate from placeholder)"
    copy: "string (e.g., 'Format: XXX-XX-XXXX')"
    
  dynamic_placeholders:
    enabled: "boolean"
    rules:
      - trigger: "first_visit"
        placeholder: "welcome_message"
      - trigger: "after_error"
        placeholder: "corrective_hint"
        
  accessibility:
    screen_reader_behavior: "string"
    use_aria_describedby: "boolean"
    visible_label_required: "boolean"
```

=== EXAMPLES ===

**Example 1: Credit Card Number**
- field_type: "number"
- purpose: "payment processing"
- format_rules: "16 digits, no spaces"
- needs_examples: false
- criticality: "required"

**Example 2: Job Title (Recruiting App)**
- field_type: "text"
- purpose: "candidate search"
- familiarity: "common"
- needs_examples: true

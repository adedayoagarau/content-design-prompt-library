## Form Field Label & Hint Text System

**Purpose**: Create clear, scannable form labels and helpful hint text that reduces errors and improves completion rates.

---

**PROMPT:**

Design form field labeling for {{field_name}}.

=== FIELD PARAMETERS ===
Field name: {{field_name}}
Field type: {{field_type}} (text, email, phone, date, number, select, checkbox, radio)
Form context: {{form_context}} (registration, checkout, settings, application)
Required: {{is_required}} (true/false)
Criticality: {{criticality}} (low/medium/high/critical)
Field length: {{field_length}} (short/medium/long)
Autofill available: {{has_autofill}} (true/false)

=== LABEL BEST PRACTICES ===

**Clarity:**
- Use sentence case: "Email address" not "Email Address"
- Be specific: "Work email" not "Email"
- Avoid colons: "First name" not "First name:"
- Use nouns: "Password" not "Enter password"

**Brevity:**
- 1-3 words optimal
- Max 5 words for clarity
- Front-load meaning: "Phone number" not "Number for phone"

=== OUTPUT STRUCTURE ===

```json
{
  "field_labeling": {
    "label": {
      "text": "string",
      "character_count": "integer",
      "visual_weight": "regular/medium/bold",
      "position": "top/left/floating",
      "required_indicator": {
        "show_asterisk": "boolean",
        "position": "right_of_label/right_of_field",
        "screen_reader_text": "string (e.g., 'required')"
      }
    },
    
    "placeholder": "string",
    
    "hint_text": {
      "show": "boolean",
      "position": "below_field/inline",
      "copy": "string (max 120 chars)"
    },
    
    "format_instructions": {
      "show": "boolean",
      "copy": "string (e.g., 'Format: MM/DD/YYYY')",
      "input_mask": "string"
    },
    
    "validation_messages": {
      "required_error": "string",
      "format_error": "string",
      "custom_error": "string"
    },
    
    "accessibility": {
      "label_for": "string (ID of input)",
      "aria_describedby": "string (ID of hint)",
      "screen_reader_label": "string (full context)"
    }
  }
}
```

=== EXAMPLES ===

**Example 1: Phone Number Field**
- field_name: "Phone number"
- field_type: "tel"
- form_context: "checkout"
- is_required: true
- criticality: "high"
- format_rules: "US format: (555) 123-4567"

**Example 2: Bio Textarea**
- field_name: "Bio"
- field_type: "textarea"
- form_context: "profile_settings"
- is_required: false
- field_length: "long"
- character_limit: 500

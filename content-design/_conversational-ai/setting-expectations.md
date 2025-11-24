## Expectation Setting System v1.0

**Purpose**: Communicate AI capabilities and limitations clearly to prevent disappointment and build appropriate user mental models.

---

**PROMPT:**

You are designing expectation-setting copy for {{ai_product}}, helping users understand what {{system_name}} can and cannot do.

=== EXPECTATION CONTEXT ===
- User familiarity: {{familiarity_level}} (first_time/occasional/power_user)
- Disclosure timing: {{when_to_tell}} (onboarding/just_in_time/on_error)
- Limitation severity: {{limitation_impact}} (minor_inconvenience/significant_limitation/dealbreaker)
- Alternative available: {{alternative_solution}} (yes/no/partial)

=== OUTPUT REQUIREMENTS ===

```yaml
expectation_system:
  capability_communication:
    what_i_can_do:
      tone: "confident, helpful"
      format: "positive framing"
      examples:
        - "I can help you {{capability_1}}, {{capability_2}}, and {{capability_3}}"
        - "I specialize in {{domain}}"
        - "I'm great at {{strength}}"

    what_i_cannot_do:
      tone: "transparent, helpful"
      format: "limitation + alternative"
      examples:
        - "I can't {{limitation}}, but I can {{alternative}}"
        - "I focus on {{scope}}, so I'm not able to {{out_of_scope}}"
        - "That's beyond what I can help with. You might try {{alternative_resource}}"

    performance_expectations:
      response_time: "{{typical_time}} (occasionally longer for complex requests)"
      accuracy: "I aim for accuracy but {{verification_note}}"
      availability: "Available {{hours}} {{timezone}}"

  onboarding_expectations:
    first_interaction:
      greeting_with_scope: "Hi! I'm {{name}}, and I help you {{primary_function}}. I can {{examples}}."

    capability_demonstration:
      approach: "show, don't just tell"
      format: "Try asking me to: {{example_1}}, {{example_2}}, or {{example_3}}"

  just_in_time_disclosure:
    approaching_limitation:
      trigger: "user request near boundary of capability"
      message: "I can help with {{what_i_can_do}}, though I should mention {{limitation_context}}"

    out_of_scope_request:
      response: "That's outside my area. I focus on {{scope}}. Can I help you with {{in_scope_alternative}}?"

  managing_ongoing_expectations:
    processing_time:
      - short_task: "One moment..."
      - medium_task: "This will take about {{time_estimate}}..."
      - long_task: "This is a complex request and might take {{time_estimate}}. I'll let you know when it's ready."

    uncertainty_disclosure:
      - "I'm not completely certain, but {{best_answer}}"
      - "I found {{confidence_level}} information about this"
      - "Based on what I know, {{answer}}, but I'd recommend verifying this"

    evolving_capabilities:
      new_feature: "Good news! I can now {{new_capability}}"
      deprecated_feature: "I no longer support {{old_capability}}, but you can {{alternative}}"
```

=== EXAMPLES ===

**Example 1: Medical Symptom Checker**
- Limitation: "cannot diagnose"
- Setting: "I can help you understand symptoms and when to seek care, but I cannot diagnose conditions. Always consult a healthcare provider for medical advice."

**Example 2: Code Assistant**
- Limitation: "cannot execute code"
- Setting: "I can help you write and debug code, but I can't run it. You'll need to test it in your environment."

**Example 3: Task Manager Bot**
- Limitation: "cannot access external calendars"
- Setting: "I manage tasks within this app. For calendar events, you'll use your calendar app directly."

---

**Accessibility Requirements**: Clear, plain language about capabilities. Set expectations early. Don't hide limitations. Provide alternatives when saying no.

**Psychological Principles**: Clear expectations prevent frustration. Transparency builds trust. Positive framing focuses on value. Alternatives soften limitations. Under-promise, over-deliver.

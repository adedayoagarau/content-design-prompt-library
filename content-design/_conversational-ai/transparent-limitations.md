## Transparent Limitation Communication v1.0

**Purpose**: Be honest about AI limitations upfront, building trust through transparency about what the system can't do.

---

**PROMPT:**

Design limitation disclosure messaging for {{ai_system}} to clearly communicate {{limitation_type}} without undermining user confidence.

=== LIMITATION CONTEXT ===
- Limitation type: {{type}} (capability/accuracy/scope/speed/availability)
- Impact on user: {{impact}} (minor_inconvenience/significant_constraint/blocker)
- Alternative available: {{alternative}}
- Disclosure timing: {{when}} (onboarding/just_in_time/on_encounter)

=== OUTPUT REQUIREMENTS ===

```yaml
limitation_disclosure:
  capability_limitations:
    pattern: "I can't {{limitation}}, but I can {{alternative_capability}}"
    examples:
      - "I can't make phone calls, but I can draft the message for you to send"
      - "I can't process images yet, but I can help you describe what you're looking for"

  accuracy_limitations:
    pattern: "{{capability}} though {{limitation_context}}"
    examples:
      - "I can suggest recipes, though I'd recommend double-checking cooking times"
      - "I can help with basic tax questions, but always verify with a tax professional for your specific situation"

  scope_limitations:
    pattern: "I focus on {{scope}}. For {{out_of_scope}}, you'll want to {{alternative}}"
    examples:
      - "I focus on project management. For HR questions, check with your People team"
      - "I handle scheduling and reminders. For email, you'll use your email client"

  performance_limitations:
    pattern: "{{capability}}, though {{limitation}} - {{workaround}}"
    examples:
      - "I can search your files, though large searches take 30+ seconds - want to narrow the search?"
      - "I can generate reports, though complex ones might take a few minutes"

  disclosure_principles:
    - "Be upfront, not evasive"
    - "Provide alternatives"
    - "Frame positively when possible"
    - "Explain why (helps user mental model)"
    - "Don't over-apologize"

  when_to_disclose:
    proactive:
      - "during onboarding"
      - "before user attempts limited function"
      - "in help documentation"

    reactive:
      - "when user hits limitation"
      - "when user asks about capability"

  framing:
    positive_framing:
      bad: "Sorry, I can't do that"
      good: "I'm not able to {{X}}, but I can {{alternative}}"

    honest_framing:
      bad: "I'm still learning" (vague, excuse-like)
      good: "I don't have access to {{resource}}, so I can't {{action}}"

    solution_focused:
      bad: "I can't help with that"
      good: "For that, you'll want to {{alternative_resource}}. I can help you with {{what_i_can_do}}"
```

=== EXAMPLES ===

**Example 1: Diagnosis Limitation (Healthcare Bot)**
- Limitation: "Cannot diagnose medical conditions"
- Disclosure: "I can help you understand symptoms and when to seek care, but I cannot diagnose conditions or replace a doctor's evaluation."

**Example 2: Real-time Data Limitation**
- Limitation: "No access to live stock prices"
- Disclosure: "I can show you historical data and trends, but for real-time stock prices, you'll want to use a market data service. I can help you analyze the data once you have it."

**Example 3: Complex Reasoning Limitation**
- Limitation: "May make errors on complex math"
- Disclosure: "I can help with calculations, though for critical financial decisions, I'd recommend verifying with a calculator or accountant."

---

**Accessibility Requirements**: Clear language about what's possible. Provide alternatives. Don't hide limitations. Explain in plain terms.

**Psychological Principles**: Transparency builds trust. Clear boundaries reduce frustration. Alternatives soften limitations. Honesty preferred to false confidence.

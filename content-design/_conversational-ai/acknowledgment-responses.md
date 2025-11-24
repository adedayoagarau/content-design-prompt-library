## Acknowledgment Response Design v1.0

**Purpose**: Show understanding without unnecessary repetition, maintaining natural conversation flow.

---

**PROMPT:**

Design acknowledgment responses for {{ai_system}} that confirm understanding of {{user_input}} without being robotic or repetitive.

=== ACKNOWLEDGMENT CONTEXT ===
- Input type: {{input_type}} (information_provided/request_made/question_asked)
- Need for confirmation: {{confirmation_need}} (low/medium/high)
- Conversation flow: {{flow_state}} (beginning/mid/ending)

=== OUTPUT REQUIREMENTS ===

```yaml
acknowledgment_patterns:
  information_received:
    minimal:
      - "Got it"
      - "Thanks"
      - "✓"

    standard:
      - "Got it, {{key_info}}"
      - "Thanks for letting me know"
      - "I've noted that"

    explicit:
      - "I've saved {{specific_info}}"
      - "Updated to {{new_value}}"
      - "Confirmed: {{what_was_confirmed}}"

  request_received:
    acknowledge_and_act:
      pattern: "{{brief_acknowledgment}}. {{action_statement}}"
      example: "Got it. I'll send that report to your email."

    acknowledge_and_ask:
      pattern: "I can {{action}}. {{clarifying_question}}?"
      example: "I can schedule that. What time works for you?"

  avoid_parroting:
    bad: "User: 'Send it to john@example.com' Bot: 'Okay, I will send it to john@example.com'"
    good: "User: 'Send it to john@example.com' Bot: 'Sent to john@example.com ✓'"

    bad: "User: 'My name is Sarah' Bot: 'Thank you for telling me your name is Sarah'"
    good: "User: 'My name is Sarah' Bot: 'Nice to meet you, Sarah!'"

  varied_acknowledgments:
    - "Got it"
    - "Thanks"
    - "Perfect"
    - "Understood"
    - "I've updated that"
    - "✓ Done"
    - "Noted"

  high_stakes_confirmation:
    pattern: "Just to confirm: {{critical_info}}. Is that correct?"
    when: "financial, deletion, irreversible actions"
```

=== EXAMPLES ===

**Example 1: Preference Update**
- User: "Set my notifications to daily"
- Good: "✓ Daily notifications enabled"
- Bad: "I have updated your notification preference to daily as requested"

**Example 2: Information Provided**
- User: "My phone number is 555-1234"
- Good: "Got it, I've saved 555-1234"
- Bad: "Thank you for providing your phone number which is 555-1234"

---

**Accessibility Requirements**: Clear confirmations for important actions. Brief for routine actions. Specific about what changed.

**Psychological Principles**: Acknowledgment shows listening. Brevity respects time. Specificity builds trust. Varied responses feel natural.

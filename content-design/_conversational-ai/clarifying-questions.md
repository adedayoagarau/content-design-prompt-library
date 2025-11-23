## Clarifying Question Design v1.0

**Purpose**: Ask helpful follow-up questions that gather needed information without feeling like an interrogation.

---

**PROMPT:**

Design clarifying questions for {{ai_system}} when {{information_needed}} is missing from user request about {{domain}}.

=== CLARIFICATION CONTEXT ===
- Missing information: {{missing_info}}
- Information criticality: {{critical}} (required/helpful/optional)
- Question complexity: {{complexity}}
- User patience level: {{patience}}

=== OUTPUT REQUIREMENTS ===

```yaml
clarifying_questions:
  question_patterns:
    single_missing_piece:
      pattern: "{{acknowledge_request}}. What {{missing_piece}}?"
      example: "I'll schedule that meeting. What time works for you?"

    multiple_missing_pieces:
      approach: "ask one at a time"
      pattern: "Let's start with {{first_piece}}. {{question}}?"
      example: "Let's start with the date. When would you like to meet?"

    optional_context:
      pattern: "{{core_action_possible}}. {{optional_question}}?"
      example: "I can book that flight. Want me to add a hotel too?"

  question_quality:
    specific_not_vague:
      bad: "What are you looking for?"
      good: "What price range works for you?"

    acknowledge_what_you_know:
      pattern: "{{restate_known}}. {{ask_unknown}}?"
      example: "You want to fly to London. What dates?"

    provide_context:
      pattern: "{{question}} {{reason_for_asking}}?"
      example: "What's your budget? This helps me filter options."

    offer_options_when_helpful:
      pattern: "{{question}} ({{option1}}/{{option2}}/{{option3}})"
      example: "When do you need this? (urgent/this week/flexible)"

  avoid:
    - "Asking questions you could infer from context"
    - "Asking everything at once"
    - "Asking without acknowledging the request"
    - "Asking why (feels interrogative)"
```

=== EXAMPLES ===

**Example 1: Travel Booking**
- User: "Book a flight"
- Good: "I'll help you book a flight. Where are you flying from?"
- Bad: "I need your departure city, destination, dates, and passenger count."

**Example 2: Task Creation**
- User: "Add this to my list"
- Good: "I'll add that. Which list? Work or Personal?"
- Bad: "What list?"

---

**Accessibility Requirements**: One question at a time. Clear options. Explain why you're asking (when helpful).

**Psychological Principles**: Progressive disclosure reduces overwhelm. Acknowledging what's known shows listening. Specific questions easier than open-ended.

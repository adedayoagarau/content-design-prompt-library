## Disambiguation Prompt Design v1.0

**Purpose**: Clarify ambiguous user requests efficiently without frustrating users or adding unnecessary conversation turns.

---

**PROMPT:**

You are a conversation designer for {{ai_system}}, creating disambiguation flows for {{ambiguity_type}}. Design clarification prompts that resolve uncertainty while maintaining conversation flow.

=== AMBIGUITY CLASSIFICATION ===
- Ambiguity type: {{ambiguity_type}} (multiple_intents/unclear_referent/missing_information/vague_request)
- Ambiguity severity: {{severity}} (minor/moderate/critical)
- Options count: {{num_options}} (how many possible interpretations)
- Context availability: {{context_helps}} (yes/no/partial)
- User expertise: {{user_knowledge_level}}

=== DISAMBIGUATION STRATEGIES ===

**When to disambiguate**:
- Multiple equally likely intents (confidence difference < {{threshold}})
- Missing required information
- Pronoun/reference unclear
- Request too vague to action

**When NOT to disambiguate**:
- Clear intent with >80% confidence
- Context makes meaning obvious
- Asking would seem pedantic
- Better to show results than ask

=== OUTPUT REQUIREMENTS ===

```yaml
disambiguation_system:
  scenarios:
    - scenario_type: "multiple_intents"
      trigger: "2+ intents with confidence > 0.4"
      approach: "present_clear_options"
      response_template: "I can help you with {{option_A}} or {{option_B}}. Which would you prefer?"

      examples:
        - user_input: "cancel"
          possible_intents: ["cancel_order", "cancel_subscription", "cancel_appointment"]
          bot_response: "I can help you cancel your order, subscription, or appointment. Which one?"
          rationale: "concise, clear options, easy to answer"

    - scenario_type: "unclear_referent"
      trigger: "pronoun without clear antecedent"
      approach: "confirm_assumption or ask"
      response_template: "When you say '{{ambiguous_term}}', do you mean {{interpretation}}?"

      examples:
        - user_input: "delete it"
          context: "multiple deletable items visible"
          bot_response: "Just to confirm - delete the {{item_A}} or {{item_B}}?"

    - scenario_type: "missing_info"
      trigger: "required parameter not provided"
      approach: "ask_for_specific_missing_piece"
      response_template: "Got it. {{acknowledge_what_i_know}} What {{missing_piece}} would you like?"

      examples:
        - user_input: "schedule a meeting"
          missing: ["time", "date", "participants"]
          bot_response: "I'll help you schedule a meeting. When would you like it?"
          rationale: "ask for one thing at a time, acknowledge request"

    - scenario_type: "vague_request"
      trigger: "request lacks specificity to action"
      approach: "clarify_scope_with_examples"
      response_template: "I want to help! Are you looking for {{example_A}}, {{example_B}}, or something else?"

  response_patterns:
    concise_options:
      template: "Did you mean {{option_A}} or {{option_B}}?"
      when: "2 clear options"
      tone: "quick, informal"

    multiple_options:
      template: "I can help with:\n1. {{option_1}}\n2. {{option_2}}\n3. {{option_3}}\n\nWhich one?"
      when: "3-4 options"
      tone: "organized, scannable"

    open_clarification:
      template: "I understand you want to {{partial_understanding}}. Could you tell me more about {{what_needs_clarity}}?"
      when: "options unclear or too many"
      tone: "collaborative"

  confirmation_patterns:
    implicit_confirmation:
      approach: "proceed with assumption, allow correction"
      example: "I'll set this to {{assumed_value}}. Let me know if that's not right."
      when: "low stakes, easy to undo"

    explicit_confirmation:
      approach: "ask before proceeding"
      example: "Just to confirm: {{interpretation}}. Is that correct?"
      when: "high stakes, not reversible"

  context_usage:
    - use_recent_context: "reference last mentioned entity"
      example: "By 'it', do you mean the {{last_mentioned_item}}?"
    - use_visible_context: "reference what's on screen"
      example: "Do you want to delete the highlighted item?"
    - use_user_history: "reference common user pattern"
      example: "Like last time, should I {{usual_action}}?"
```

=== DISAMBIGUATION EXAMPLES ===

```json
{
  "examples": [
    {
      "ambiguity": "Multiple intents",
      "user_input": "I need help with my account",
      "possible_meanings": [
        "reset_password",
        "update_billing",
        "delete_account",
        "general_account_question"
      ],
      "bad_disambiguation": "What do you need help with regarding your account?",
      "bad_reason": "too open, repeats user's words, unhelpful",
      "good_disambiguation": "I can help you with your account. Are you trying to:\n- Reset your password\n- Update billing info\n- Something else?",
      "good_reason": "specific options, common cases, allows for other",
      "accessibility": "scannable list, clear choices"
    },
    {
      "ambiguity": "Unclear pronoun",
      "conversation_context": [
        {"user": "I have invoice 123 and order 456"},
        {"user": "Can you cancel it?"}
      ],
      "ambiguous_term": "it",
      "bad_disambiguation": "What did you want to cancel?",
      "bad_reason": "makes user repeat themselves",
      "good_disambiguation": "Just to confirm - cancel invoice 123 or order 456?",
      "good_reason": "uses specific references from context",
      "accessibility": "explicit options reduce cognitive load"
    },
    {
      "ambiguity": "Missing information",
      "user_input": "Book a flight",
      "missing_required": ["origin", "destination", "date"],
      "bad_approach": "I need to know your departure city, destination city, and travel date.",
      "bad_reason": "overwhelming, interrogation-like",
      "good_approach": "I'll help you book a flight. Where are you flying from?",
      "good_reason": "one question at a time, conversational",
      "progressive_disclosure": "ask follow-ups after each answer"
    }
  ]
}
```

=== EXAMPLES ===

**Example 1: Customer Support Bot**
- ambiguity_type: "multiple_intents"
- num_options: 3
- approach: "present clear choices with visual formatting"
- threshold: 0.15 (confidence difference)

**Example 2: Voice Assistant**
- ambiguity_type: "unclear_referent"
- context_helps: "partial"
- approach: "confirm most likely interpretation"
- user_knowledge_level: "novice"

**Example 3: Task Manager Bot**
- ambiguity_type: "missing_information"
- approach: "progressive disclosure, one question at a time"
- context_helps: "yes (use project context)"

---

**Accessibility Requirements**: Present options in scannable format. Use numbered lists for 3+ options. Support voice and text input for clarification. Clear, simple language. Avoid making users feel wrong.

**Psychological Principles**: Choice paradox (limit options to 3-4). Hick's Law (decision time increases with options). Reduce cognitive load through specificity. Maintain face through non-judgmental phrasing.

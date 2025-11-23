## Multi-Turn Dialog Design System v1.0

**Purpose**: Design coherent conversations across multiple exchanges with proper context tracking and natural progression.

---

**PROMPT:**

You are a conversation designer for {{ai_system_name}}, creating multi-turn dialogs for {{conversation_purpose}}. Design a conversation flow that handles {{expected_turns}} exchanges while maintaining context and user engagement.

=== CONVERSATION CONTEXT ===
- Primary goal: {{primary_goal}}
- User intent: {{user_intent}}
- Information needed: {{required_information}}
- Expected duration: {{expected_turns}} turns
- Success criteria: {{success_metrics}}
- Failure scenarios: {{potential_failures}}

=== DIALOG STRUCTURE ===

**Turn Progression**:
- Opening: {{opening_strategy}} (direct/warm/contextual)
- Information gathering: {{gathering_approach}} (sequential/adaptive/conversational)
- Confirmation: {{confirmation_style}} (explicit/implicit/progressive)
- Closing: {{closing_pattern}} (summary/next-steps/open-ended)

**Context Management**:
- Memory scope: {{memory_scope}} (session/persistent/hybrid)
- Reference style: {{reference_approach}} (explicit/implicit)
- Carry-forward: {{carryforward_rules}}

**Branching Logic**:
- Conditional paths: {{branching_conditions}}
- Recovery paths: {{error_recovery_routes}}
- Exit points: {{conversation_exits}}

=== CONVERSATIONAL COHERENCE ===

Maintain consistency through:
- Pronoun reference: {{pronoun_strategy}}
- Topic threading: {{topic_management}}
- Temporal references: {{time_reference_handling}}
- Sentiment tracking: {{sentiment_continuity}}

=== OUTPUT REQUIREMENTS ===

Generate a complete multi-turn dialog flow:

```yaml
dialog_flow:
  conversation_id: "string"
  goal: "string"
  estimated_turns: "integer"

  turns:
    - turn_number: 1
      speaker: "bot/user"
      intent: "string"
      message_templates:
        - template: "string with {{variables}}"
          conditions: "when to use"
          examples: ["string"]

      expected_user_responses:
        - response_type: "string"
          confidence_threshold: "0.0-1.0"
          next_turn: "integer"

      context_tracking:
        entities_captured: ["entity_name"]
        entities_referenced: ["entity_name"]
        conversation_state: "string"

      fallback_handling:
        no_match: "turn_number or end"
        ambiguous: "clarification strategy"
        irrelevant: "redirection strategy"

    - turn_number: 2
      # ... repeat structure

  context_variables:
    - name: "variable_name"
      type: "string/number/boolean/array"
      scope: "session/persistent"
      default_value: "value"
      required: "boolean"

  success_paths:
    - path_id: "string"
      turns_sequence: [1, 2, 3, 5]
      outcome: "string"
      probability: "percentage"

  error_recovery:
    - error_type: "string"
      recovery_turn: "integer"
      max_attempts: "integer"
      escalation_path: "string"

  coherence_checks:
    - check_type: "pronoun_reference/topic_continuity/temporal_consistency"
      validation_rule: "string"
      failure_action: "string"
```

=== DIALOG PROGRESSION EXAMPLES ===

For each turn, generate:

```json
{
  "turn_examples": [
    {
      "turn_id": 1,
      "bot_utterance": "string",
      "design_rationale": "why this phrasing",
      "context_assumptions": ["what we know"],
      "user_response_samples": [
        {
          "user_says": "string",
          "classification": "happy_path/edge_case/error",
          "next_action": "string"
        }
      ],
      "accessibility_notes": "screen reader / cognitive load considerations"
    }
  ],
  "full_conversation_example": {
    "scenario": "string",
    "participant_context": "string",
    "transcript": [
      {
        "speaker": "bot/user",
        "utterance": "string",
        "internal_state": "what bot knows at this point"
      }
    ],
    "outcome": "success/partial/failure",
    "analysis": "what worked, what could improve"
  }
}
```

=== EXAMPLES ===

**Example 1: Travel Booking Assistant**
- conversation_purpose: "book multi-city flight"
- expected_turns: 6-8 turns
- primary_goal: "collect origin, destination, dates, preferences"
- gathering_approach: "conversational (ask naturally, not form-like)"
- memory_scope: "session + user profile"
- confirmation_style: "progressive (confirm each city as added)"

**Example 2: Technical Support Troubleshooting**
- conversation_purpose: "diagnose software issue"
- expected_turns: 10-15 turns
- primary_goal: "identify problem, guide solution"
- gathering_approach: "adaptive (follow user's description)"
- memory_scope: "session + device history"
- confirmation_style: "explicit (verify each diagnostic step)"

**Example 3: Wellness Check-In**
- conversation_purpose: "daily mood and habit tracking"
- expected_turns: 4-6 turns
- primary_goal: "log mood, sleep, exercise"
- gathering_approach: "sequential with empathy"
- memory_scope: "persistent (compare to historical data)"
- confirmation_style: "implicit (acknowledge without repeating)"

---

**Accessibility Requirements**: Multi-turn dialogs must support interruption and resumption. Each turn should be independently comprehensible for users with short-term memory limitations. Provide progress indicators for conversations exceeding 5 turns.

**Psychological Principles**: Progressive disclosure reduces cognitive load (Miller's Law). Confirmation creates commitment (commitment & consistency). Natural pacing prevents fatigue. Memory limitations require explicit context references after 3+ turns.

## Error Recovery Flow Design v1.0

**Purpose**: Handle misunderstandings gracefully and guide users back on track with minimal friction and preserved context.

---

**PROMPT:**

You are a conversation designer for {{ai_product}}, creating error recovery flows for {{error_scenario}}. Design recovery patterns that maintain user trust and conversation continuity.

=== ERROR CLASSIFICATION ===
- Error type: {{error_type}} (no_match/low_confidence/ambiguous/out_of_scope/system_error)
- Severity: {{error_severity}} (minor/moderate/critical)
- User impact: {{impact_description}}
- Recovery complexity: {{recovery_difficulty}} (simple/moderate/complex)
- Frequency: {{error_frequency}} (rare/occasional/common)

=== RECOVERY STRATEGY ===

**Detection**:
- Confidence threshold: {{confidence_threshold}}
- Ambiguity triggers: {{ambiguity_indicators}}
- Out-of-scope detection: {{scope_boundaries}}

**Response Pattern**:
- Acknowledgment: {{acknowledgment_style}} (implicit/explicit/empathetic)
- Clarification: {{clarification_approach}} (repeat/rephrase/offer_options)
- Assistance level: {{assistance_degree}} (minimal/guided/full_handholding)

**Context Preservation**:
- What to remember: {{context_retention}}
- What to reset: {{context_reset_rules}}
- Recovery point: {{recovery_starting_point}}

=== CONVERSATIONAL REPAIR TECHNIQUES ===

1. **Gentle Acknowledgment**: "I'm not quite sure I understood that..."
2. **Partial Understanding**: "I got that you want to [X], but could you clarify [Y]?"
3. **Offer Options**: "Did you mean [A] or [B]?"
4. **Redirect with Value**: "I can't do [X], but I can help you [Y]"
5. **Escalation Path**: "Let me connect you with someone who can help"

Error attempt tracking:
- Max retry attempts: {{max_retries}}
- Escalation trigger: {{escalation_criteria}}
- Fallback action: {{ultimate_fallback}}

=== OUTPUT REQUIREMENTS ===

Generate comprehensive error recovery flows:

```yaml
error_recovery_system:
  error_scenarios:
    - error_id: "no_match_001"
      trigger_condition: "confidence < 0.3"
      user_experience_impact: "frustration, confusion"

      recovery_flow:
        attempt_1:
          bot_response: "string (gentle clarification request)"
          example: "string"
          context_action: "preserve_all"
          fallback_options: ["option1", "option2"]

        attempt_2:
          bot_response: "string (more explicit help)"
          example: "string"
          context_action: "preserve_essential"
          provide_examples: true

        attempt_3:
          bot_response: "string (offer alternatives or human handoff)"
          example: "string"
          escalation_trigger: true

      success_criteria:
        - "user provides clarified input"
        - "user selects from options"
        - "conversation resumes productive flow"

      failure_handling:
        max_attempts_reached: "escalation_protocol"
        user_frustration_detected: "immediate_human_handoff"
        conversation_abandonment_risk: "save_state_and_summarize"

    - error_id: "ambiguous_input_001"
      trigger_condition: "multiple intents detected with similar confidence"
      # ... repeat structure

  response_templates:
    - template_id: "gentle_clarification"
      variants:
        - condition: "first_error"
          text: "{{apologetic_phrase}} I didn't quite catch that. {{clarifying_question}}"
          tone: "helpful, not robotic"

        - condition: "repeated_error"
          text: "{{empathy_statement}} Let me try to help differently. {{alternative_approach}}"
          tone: "patient, supportive"

      variables:
        - name: "apologetic_phrase"
          options: ["Sorry,", "Hmm,", ""]
          selection_rule: "formality_level"

        - name: "clarifying_question"
          generation_rule: "reference specific ambiguity point"

  context_management:
    preserve_on_error:
      - "user_stated_goals"
      - "entities_confirmed"
      - "conversation_history (last 3 turns)"

    reset_on_error:
      - "current_intent_assumption"
      - "low_confidence_entities"

  escalation_protocol:
    triggers:
      - "3 consecutive errors"
      - "user_expresses_frustration"
      - "error_type == critical_system_failure"

    handoff_message: "string with context summary"
    context_transfer: "JSON object to pass to human agent"

  accessibility_requirements:
    - "Error messages must be screen-reader friendly"
    - "Provide clear next action, not just error statement"
    - "Use plain language, avoid technical jargon"
    - "Maintain conversation flow for cognitive accessibility"
```

=== ERROR RECOVERY EXAMPLES ===

```json
{
  "scenario_examples": [
    {
      "scenario_name": "No Match - First Attempt",
      "user_input": "I want to do the thing",
      "bot_confidence": 0.15,
      "bot_response": "I'd love to help! Could you tell me a bit more about what you're trying to do?",
      "recovery_strategy": "open_ended_clarification",
      "context_preserved": ["user_session_state"],
      "expected_user_response": "more specific description",
      "accessibility_note": "Clear request for more info without making user feel wrong"
    },
    {
      "scenario_name": "Ambiguous Intent",
      "user_input": "cancel",
      "possible_intents": ["cancel_subscription", "cancel_order", "cancel_appointment"],
      "bot_response": "I can help you cancel something. Are you looking to cancel your subscription, an order, or an appointment?",
      "recovery_strategy": "explicit_disambiguation",
      "context_preserved": ["user_id", "active_services"],
      "accessibility_note": "Provides concrete options to reduce cognitive load"
    },
    {
      "scenario_name": "Out of Scope",
      "user_input": "What's the weather like?",
      "bot_capability": "task_management_only",
      "bot_response": "I focus on helping you manage your tasks and projects. For weather, I'd recommend checking a weather app. Can I help you with any tasks?",
      "recovery_strategy": "graceful_decline_with_redirect",
      "context_preserved": ["user_context"],
      "accessibility_note": "Clearly states limitations while offering value"
    }
  ]
}
```

=== EXAMPLES ===

**Example 1: Voice Assistant - No Match**
- error_type: "no_match"
- error_severity: "moderate"
- max_retries: 2
- confidence_threshold: 0.4
- escalation_criteria: "2 consecutive no-match errors"
- acknowledgment_style: "empathetic"
- assistance_level: "guided"

**Example 2: Chatbot - Ambiguous Intent**
- error_type: "ambiguous"
- error_severity: "minor"
- max_retries: 1
- clarification_approach: "offer_options"
- context_retention: "preserve all entities"
- assistance_level: "minimal"

**Example 3: Customer Support Bot - Critical System Error**
- error_type: "system_error"
- error_severity: "critical"
- max_retries: 0
- escalation_criteria: "immediate"
- ultimate_fallback: "human_handoff_with_context"
- acknowledgment_style: "explicit + apologetic"

---

**Accessibility Requirements**: Error recovery must never penalize users for unclear input. Provide multiple input modalities. Support error recovery for users with speech impairments or limited typing ability. WCAG 2.1 Level AA: clear error identification and suggestion for correction.

**Psychological Principles**: Minimize face-threat (politeness theory). Acknowledge without blame (loss aversion). Provide clear path forward to reduce anxiety. Escalate before user frustration peaks (emotional design).

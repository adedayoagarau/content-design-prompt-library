## Fallback Strategy Design v1.0

**Purpose**: Create graceful degradation patterns when AI doesn't understand, ensuring users never hit a dead end in conversation.

---

**PROMPT:**

You are a conversational AI designer creating fallback strategies for {{ai_assistant_name}} when handling {{fallback_scenario}}. Design multi-layered fallback responses that maintain user engagement and trust.

=== FALLBACK TRIGGER CONDITIONS ===
- Low confidence threshold: {{confidence_threshold}} (typically < 0.3)
- No intent match: {{no_match_criteria}}
- Ambiguity detected: {{ambiguity_threshold}}
- Out of domain: {{domain_boundary_detection}}
- System limitations: {{technical_constraints}}

=== FALLBACK HIERARCHY ===

**Layer 1: Gentle Clarification**
- Tone: {{layer1_tone}} (friendly, not robotic)
- Approach: {{layer1_approach}} (ask open question)
- Context preserved: {{layer1_context_retention}}

**Layer 2: Structured Help**
- Tone: {{layer2_tone}} (helpful, guiding)
- Approach: {{layer2_approach}} (offer options/examples)
- Context preserved: {{layer2_context_retention}}

**Layer 3: Ultimate Fallback**
- Tone: {{layer3_tone}} (apologetic, solution-oriented)
- Approach: {{layer3_approach}} (escalation/alternative resources)
- Context preserved: {{layer3_context_retention}}

=== FALLBACK PATTERNS BY SCENARIO ===

**No Understanding**:
- First attempt: {{no_understanding_attempt1}}
- Second attempt: {{no_understanding_attempt2}}
- Final fallback: {{no_understanding_final}}

**Partial Understanding**:
- Strategy: {{partial_strategy}} (confirm known, ask for unknown)
- Example: {{partial_example}}

**Out of Scope**:
- Strategy: {{out_of_scope_strategy}} (explain limitation, offer alternative)
- Example: {{out_of_scope_example}}

=== OUTPUT REQUIREMENTS ===

Generate comprehensive fallback response system:

```yaml
fallback_system:
  trigger_conditions:
    - trigger_id: "low_confidence"
      condition: "intent_confidence < {{threshold}}"
      fallback_layer: 1

    - trigger_id: "no_match"
      condition: "no_intent_detected"
      fallback_layer: 1

    - trigger_id: "repeated_failure"
      condition: "same_user_input_failed_twice"
      fallback_layer: 2

    - trigger_id: "user_frustration"
      condition: "sentiment == very_negative"
      fallback_layer: 3

  fallback_responses:
    layer_1_gentle:
      - response_id: "open_clarification"
        template: "{{apology_optional}} I'm not quite sure I understand. Could you tell me more about what you're trying to do?"
        when_to_use: "first_failure, low_stakes"
        tone: "friendly, helpful"
        examples:
          - "I didn't quite catch that. What would you like help with?"
          - "Hmm, I'm not sure I followed. Could you rephrase that?"

      - response_id: "specific_clarification"
        template: "I think you're asking about {{partial_understanding}}, but I'm not certain. Is that right?"
        when_to_use: "partial_confidence"
        tone: "confirming, not assuming"

    layer_2_structured:
      - response_id: "offer_options"
        template: "I can help you with several things. Are you looking to:\n- {{option_1}}\n- {{option_2}}\n- {{option_3}}\n- Something else?"
        when_to_use: "second_failure, need_guidance"
        tone: "guiding, organized"

      - response_id: "provide_examples"
        template: "I'm here to help with things like {{example_1}}, {{example_2}}, or {{example_3}}. What would be most helpful for you?"
        when_to_use: "user_seems_unsure"
        tone: "educational, inviting"

      - response_id: "narrow_scope"
        template: "I specialize in {{bot_domain}}. Could you ask your question in terms of {{domain_context}}?"
        when_to_use: "out_of_domain_detected"
        tone: "transparent, redirecting"

    layer_3_ultimate:
      - response_id: "human_handoff"
        template: "{{apology}} I'm having trouble understanding this. Let me connect you with a person who can help."
        when_to_use: "repeated_failures, high_stakes"
        tone: "apologetic, solution-oriented"
        action: "escalate_to_human"

      - response_id: "alternative_resources"
        template: "I'm not able to help with that, but you can {{alternative_action}}. Would that work for you?"
        when_to_use: "definitely_out_of_scope"
        tone: "helpful, honest about limitations"

      - response_id: "save_and_exit"
        template: "I apologize for the confusion. I've saved our conversation and someone will follow up with you at {{contact_method}}."
        when_to_use: "critical_failure, async_context"
        tone: "apologetic, reassuring"
        action: "save_context_for_followup"

  context_preservation:
    what_to_save:
      - "user_original_input"
      - "conversation_history (last 5 turns)"
      - "detected_intent (even if low confidence)"
      - "user_sentiment_trajectory"

    when_to_reset:
      - "user_starts_completely_new_topic"
      - "successful_recovery_achieved"

  progressive_disclosure:
    attempt_tracking:
      max_attempts_per_layer: 2
      escalation_triggers:
        - "same_layer_used_twice"
        - "user_sentiment_declining"
        - "conversation_duration_exceeded_threshold"

  fallback_testing:
    test_inputs:
      - input: "gibberish or typo-heavy text"
        expected_layer: 1
        expected_response_type: "gentle_clarification"

      - input: "question about out-of-scope topic"
        expected_layer: 2
        expected_response_type: "narrow_scope or alternative_resources"

      - input: "repeated frustrated attempts"
        expected_layer: 3
        expected_response_type: "human_handoff"
```

=== FALLBACK EXAMPLES ===

```json
{
  "fallback_scenarios": [
    {
      "scenario": "Typo-heavy input",
      "user_input": "I ned help with the thingg",
      "bot_analysis": "low_confidence, possible_typos",
      "fallback_layer": 1,
      "bot_response": "I'd love to help! Could you tell me more about what you need?",
      "strategy": "open_clarification without highlighting typos",
      "accessibility_note": "don't embarrass users about typos - motor or cognitive challenges"
    },
    {
      "scenario": "Vague request",
      "user_input": "fix it",
      "bot_analysis": "no_context, ambiguous",
      "fallback_layer": 1,
      "bot_response": "I want to help fix something for you. What's not working the way you'd like?",
      "strategy": "mirror language (use 'fix'), ask for specifics"
    },
    {
      "scenario": "Out of scope question",
      "user_input": "What's the meaning of life?",
      "bot_analysis": "out_of_domain, philosophical",
      "fallback_layer": 2,
      "bot_response": "That's a deep question! While I focus on helping with {{bot_domain}}, I'm happy to help you with tasks related to {{specific_capabilities}}. What can I help you with today?",
      "strategy": "acknowledge + redirect gracefully"
    },
    {
      "scenario": "Repeated confusion",
      "conversation_history": [
        {"user": "I want to do X", "bot": "clarification attempt 1"},
        {"user": "No, X", "bot": "clarification attempt 2"},
        {"user": "This isn't working", "bot": "..."}
      ],
      "fallback_layer": 3,
      "bot_response": "I apologize - I'm not able to help with this as well as you deserve. Let me connect you with someone who can assist you better.",
      "strategy": "recognize repeated failure, escalate gracefully"
    }
  ]
}
```

=== EXAMPLES ===

**Example 1: Customer Service Bot**
- confidence_threshold: 0.3
- layer1_approach: "ask what customer is trying to accomplish"
- layer2_approach: "offer common issue categories"
- layer3_approach: "human handoff with context"
- domain_boundary: "company products and services only"

**Example 2: Health Symptom Checker**
- confidence_threshold: 0.5 (higher for safety)
- layer1_approach: "ask for more specific symptoms"
- layer2_approach: "provide symptom checklist"
- layer3_approach: "recommend seeing healthcare provider"
- domain_boundary: "symptom guidance only, never diagnosis"

**Example 3: Educational Tutor Bot**
- confidence_threshold: 0.25
- layer1_approach: "rephrase question in simpler terms"
- layer2_approach: "offer example problems"
- layer3_approach: "provide textbook references or teacher contact"
- domain_boundary: "subject-specific help only"

---

**Accessibility Requirements**: Fallbacks must never blame users for unclear input. Support multiple input modalities. Provide clear escape routes. Never trap users in fallback loops - escalate proactively. WCAG 2.1: clear error identification with constructive suggestion.

**Psychological Principles**: Reduce user frustration through progressive help (emotional design). Maintain face (politeness theory). Provide clear path forward to reduce anxiety. Escalate before complete failure (loss aversion prevention).

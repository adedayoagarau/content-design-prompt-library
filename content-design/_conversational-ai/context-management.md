## Context Management System v1.0

**Purpose**: Track and utilize conversation history effectively to create coherent, personalized, and efficient dialog experiences.

---

**PROMPT:**

You are a conversation architect for {{ai_system}}, designing context management for {{conversation_type}}. Create systems that remember, reference, and leverage conversation history across {{context_scope}}.

=== CONTEXT DEFINITION ===
- Context scope: {{context_scope}} (single turn/session/cross-session/persistent)
- Context depth: {{context_depth}} (shallow/medium/deep)
- Memory duration: {{memory_duration}} (ephemeral/session/30-days/permanent)
- User data sensitivity: {{data_sensitivity}} (public/private/sensitive)
- Privacy constraints: {{privacy_requirements}}

=== CONTEXT LAYERS ===

**Immediate Context** (current turn):
- User utterance: {{current_input}}
- Detected intent: {{current_intent}}
- Extracted entities: {{current_entities}}
- User emotion: {{detected_emotion}}

**Session Context** (current conversation):
- Conversation goal: {{session_goal}}
- Information collected: {{gathered_data}}
- Decisions made: {{user_choices}}
- Problems encountered: {{session_errors}}

**User Profile Context** (persistent):
- User preferences: {{stored_preferences}}
- Historical patterns: {{behavior_patterns}}
- Previous interactions: {{interaction_history}}
- Personalization data: {{personalization_factors}}

**Environmental Context**:
- Time: {{time_context}} (time of day, day of week, season)
- Location: {{location_context}} (if available and relevant)
- Device: {{device_context}}
- Channel: {{communication_channel}}

=== CONTEXT UTILIZATION STRATEGIES ===

**When to reference context**:
- Avoid repetition: {{repetition_avoidance_rules}}
- Personalize responses: {{personalization_triggers}}
- Resume conversations: {{resumption_strategy}}
- Provide continuity: {{continuity_patterns}}

**How to reference context**:
- Explicit references: {{explicit_reference_examples}}
- Implicit understanding: {{implicit_reference_examples}}
- Temporal markers: {{time_reference_patterns}}
- Relationship to past: {{historical_reference_style}}

=== OUTPUT REQUIREMENTS ===

Generate comprehensive context management rules:

```yaml
context_management_system:
  context_storage:
    immediate_context:
      retention: "current_turn_only"
      elements:
        - user_utterance: "raw_text"
        - normalized_intent: "string"
        - entities:
            - entity_type: "string"
              entity_value: "string"
              confidence: "0.0-1.0"
        - sentiment: "positive/neutral/negative"
        - emotion: "string"

    session_context:
      retention: "until_session_end or {{timeout_duration}}"
      elements:
        - session_id: "uuid"
        - start_time: "timestamp"
        - conversation_goal: "string"
        - collected_information:
            - field_name: "value"
        - user_choices:
            - decision_point: "string"
              selected_option: "string"
        - conversation_state: "active/waiting/completed/abandoned"
        - turn_count: "integer"

    persistent_context:
      retention: "{{retention_period}} or until_user_deletion"
      privacy_level: "encrypted/anonymized/identifiable"
      elements:
        - user_id: "uuid"
        - preferences:
            - preference_name: "value"
              last_updated: "timestamp"
        - interaction_history:
            - conversation_summary: "string"
              date: "timestamp"
              outcome: "string"
        - learned_patterns:
            - pattern_type: "string"
              pattern_data: "object"

  context_usage_rules:
    reference_strategies:
      - situation: "user_repeats_information"
        action: "acknowledge_with_context"
        example_bot_response: "Got it, so like you mentioned before, {{referenced_info}}"

      - situation: "resuming_previous_conversation"
        action: "explicit_context_reference"
        example_bot_response: "Welcome back! Last time we were {{previous_context}}. Want to continue?"

      - situation: "personalizing_recommendation"
        action: "implicit_context_usage"
        example_bot_response: "Based on your preferences, I'd suggest {{personalized_suggestion}}"

      - situation: "avoiding_redundant_question"
        action: "use_stored_information"
        example_bot_response: "I'll use your {{stored_address}} for delivery"

    context_degradation:
      - time_threshold: "5_minutes"
        action: "full_context_available"

      - time_threshold: "24_hours"
        action: "summarize_context_on_return"
        example: "Last time you were looking at {{summarized_goal}}"

      - time_threshold: "30_days"
        action: "acknowledge_gap"
        example: "It's been a while! What brings you back today?"

  privacy_and_consent:
    data_minimization: "only store what's necessary for stated purpose"
    user_control:
      - "users can view stored context"
      - "users can delete context"
      - "users can opt-out of persistent storage"

    sensitive_data_handling:
      - data_type: "financial_information"
        storage: "encrypt_at_rest"
        retention: "session_only"

      - data_type: "health_information"
        storage: "HIPAA_compliant"
        retention: "user_controlled"

  context_conflicts:
    - conflict_type: "user_contradicts_previous_statement"
      resolution: "defer_to_most_recent"
      bot_behavior: "acknowledge_change_without_judgment"
      example: "I see you've changed your preference to {{new_value}}"

    - conflict_type: "stored_data_outdated"
      resolution: "confirm_before_using"
      example: "I have your address as {{old_address}}. Is that still current?"
```

=== CONTEXT USAGE EXAMPLES ===

```json
{
  "context_scenarios": [
    {
      "scenario": "User returns after 3 days",
      "stored_context": {
        "last_session": "comparing_pricing_plans",
        "user_preference": "budget_conscious",
        "items_viewed": ["basic_plan", "premium_plan"]
      },
      "bot_greeting": "Welcome back! Ready to make a decision on those plans you were looking at?",
      "context_usage": "implicit reference to last session without forcing continuation",
      "user_autonomy": "allows user to change direction if needed"
    },
    {
      "scenario": "User repeats same information",
      "user_turn_3": "My email is user@example.com",
      "user_turn_7": "It's user@example.com",
      "bot_response": "Thanks for confirming! I've got user@example.com on file.",
      "context_usage": "acknowledge without making user feel redundant",
      "accessibility_note": "some users need to repeat for confirmation - validate this need"
    },
    {
      "scenario": "Personalization from past behavior",
      "user_history": "always_chooses_fastest_shipping",
      "bot_suggestion": "I've selected express shipping for you - would you like to change that?",
      "context_usage": "proactive use of learned preference with option to override",
      "personalization_benefit": "efficiency without assumption"
    },
    {
      "scenario": "Context helps disambiguation",
      "conversation_context": "discussing_project_alpha",
      "user_input": "When is it due?",
      "bot_understanding": "it = project_alpha (from context)",
      "bot_response": "Project Alpha is due next Friday, June 15th.",
      "context_usage": "resolve pronoun ambiguity"
    }
  ]
}
```

=== EXAMPLES ===

**Example 1: E-commerce Shopping Assistant**
- context_scope: "cross-session persistent"
- context_depth: "deep (purchase history, browsing, preferences)"
- memory_duration: "permanent (until user deletes)"
- privacy_requirements: "GDPR compliant, user data export"
- repetition_avoidance_rules: "don't re-ask shipping address if stored"

**Example 2: Mental Health Check-in Bot**
- context_scope: "persistent with daily sessions"
- context_depth: "deep (mood patterns, triggers, coping strategies)"
- memory_duration: "90 days rolling window"
- privacy_requirements: "HIPAA compliant, encrypted"
- resumption_strategy: "reference recent mood trends"

**Example 3: Customer Support Bot**
- context_scope: "session + recent history (7 days)"
- context_depth: "medium (current issue + recent tickets)"
- memory_duration: "session + 7 day history"
- privacy_requirements: "PII protection"
- continuity_patterns: "reference ticket number, avoid re-explaining issue"

---

**Accessibility Requirements**: Context should reduce cognitive load, not increase it. Users with memory impairments benefit from explicit context references. Provide options to review context. Never assume context understanding - allow clarification.

**Psychological Principles**: Recognition over recall (memory efficiency). Continuity creates flow state. Personalization increases engagement. Privacy awareness builds trust. Context reduces cognitive load (working memory limits).

## Proactive Suggestion System v1.0

**Purpose**: Anticipate user needs and offer helpful suggestions without being intrusive or presumptuous.

---

**PROMPT:**

You are designing proactive suggestion patterns for {{ai_assistant}} that help {{user_segment}} by predicting needs and offering timely assistance.

=== PROACTIVITY CONTEXT ===
- Suggestion trigger: {{trigger_type}} (behavior_pattern/time_based/context_change/workflow_interruption)
- User receptiveness: {{receptiveness_level}} (high/medium/low)
- Suggestion confidence: {{confidence_threshold}}
- Intrusion risk: {{intrusion_level}} (low/medium/high)
- Value proposition: {{expected_value}}

=== OUTPUT REQUIREMENTS ===

```yaml
proactive_system:
  suggestion_triggers:
    - trigger_type: "behavioral_pattern"
      condition: "user does X three times in a row"
      suggestion: "offer automation or shortcut"
      example: "I noticed you're {{repeated_action}}. Want me to create a shortcut for this?"
      timing: "after third occurrence"
      dismissibility: "easy to dismiss without consequence"

    - trigger_type: "incomplete_action"
      condition: "user started but didn't finish"
      suggestion: "offer to resume or help complete"
      example: "You started {{action}} yesterday. Want to pick up where you left off?"
      timing: "next session"

  suggestion_delivery:
    high_confidence_high_value:
      approach: "proactive but optional"
      format: "{{suggestion}} [Take Action] [Not Now]"
      example: "Your meeting starts in 10 minutes. Start video call?"

    medium_confidence:
      approach: "suggest gently"
      format: "You might want to {{suggestion}}. {{reason}}"
      example: "You might want to review these changes before sharing. They contain tracked edits."

    exploratory:
      approach: "tip format"
      format: "💡 Tip: Did you know you can {{capability}}?"
      example: "💡 Tip: Did you know you can @mention teammates to notify them?"
```

=== EXAMPLES ===

**Example 1: Calendar Assistant**
- trigger_type: "time_based + context"
- suggestion: "prepare for upcoming meeting"
- confidence_threshold: 0.8
- example: "Your 2pm meeting is in 15 minutes. Review agenda?"

**Example 2: Writing Assistant**
- trigger_type: "behavior_pattern"
- suggestion: "reuse template for repeated format"
- example: "You've written 3 similar emails. Want to save this as a template?"

---

**Accessibility Requirements**: Proactive suggestions must be dismissible. Never block primary workflow. Clear value proposition. Screen reader friendly notifications.

**Psychological Principles**: Anticipation builds delight (emotional design). Timely help reduces cognitive load. Respect user autonomy (reactance theory). Prove value before automating.

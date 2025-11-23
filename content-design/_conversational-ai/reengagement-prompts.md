## Re-engagement Prompt Design v1.0

**Purpose**: Bring back inactive users with relevant, valuable prompts that respect their time and autonomy.

---

**PROMPT:**

Design re-engagement prompts for {{ai_system}} to reconnect with users who haven't engaged in {{inactive_period}}.

=== RE-ENGAGEMENT CONTEXT ===
- Inactive period: {{days_inactive}}
- Last interaction: {{last_activity}}
- User segment: {{segment}} (new_user/power_user/churned)
- Value proposition: {{value_prop}}

=== OUTPUT REQUIREMENTS ===

```yaml
reengagement_system:
  triggers:
    - inactivity_period: "7_days"
      user_type: "new_user_incomplete_setup"
      message: "You started setting up your account. Want to pick up where you left off? It takes just 2 minutes."

    - inactivity_period: "14_days"
      user_type: "active_then_dormant"
      message: "Miss you! Want to see what's new? We've added {{new_features}}."

    - inactivity_period: "30_days"
      user_type: "fully_churned"
      message: "It's been a while. If {{value_proposition}}, I'm here to help. No pressure!"

  message_patterns:
    value_reminder:
      pattern: "{{greeting}} {{value_you_get}} {{low_pressure_cta}}"
      example: "Hi! You have 5 unread insights waiting. Want to check them out?"

    progress_saved:
      pattern: "{{what_they_started}} is waiting for you. {{easy_resume}}"
      example: "Your draft project is saved. Pick up where you left off?"

    new_feature_value:
      pattern: "{{new_thing}} that helps you {{benefit}}. Want to try it?"
      example: "We just added automatic scheduling - saves hours per week. Want me to set it up?"

    gentle_check_in:
      pattern: "{{time_passed}}. {{offer_help}}"
      example: "It's been a few weeks. Can I help you with anything?"

  tone:
    - "Friendly, not desperate"
    - "Value-focused, not guilt-inducing"
    - "Specific, not generic"
    - "Easy to dismiss"

  avoid:
    - "We miss you!" (emotional manipulation)
    - "You haven't used this in X days" (guilt)
    - "Everyone else is using {{feature}}" (FOMO)
    - "Last chance!" (false urgency)

  frequency_capping:
    max_reengagement_messages: "3 per month"
    spacing: "minimum 7 days between"
    respect_opt_out: "permanent"
```

=== EXAMPLES ===

**Example 1: Incomplete Onboarding**
- Inactive: 7 days
- Message: "You started adding your projects. Want to finish setup? It takes 2 minutes and you'll be all set."

**Example 2: Power User Gone Silent**
- Inactive: 14 days
- Message: "Welcome back! Want to see your stats from last month? You completed 47 tasks."

**Example 3: Long-term Inactive**
- Inactive: 60 days
- Message: "If you're still {{goal}}, I'm here to help. No pressure if things have changed!"

---

**Accessibility Requirements**: Easy to dismiss. Clear value. Respectful of user choice. Opt-out available.

**Psychological Principles**: Value over guilt. Curiosity over FOMO. Progress preservation (endowed progress effect). Autonomy respected. Specific over generic.

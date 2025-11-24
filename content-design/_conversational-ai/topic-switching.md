## Topic Switching Management v1.0

**Purpose**: Handle abrupt topic changes gracefully while preserving context and supporting natural conversation flow.

---

**PROMPT:**

Design topic switching patterns for {{ai_system}} when users change subjects during {{conversation_type}}.

=== TOPIC SWITCH CONTEXT ===
- Switch type: {{switch_type}} (abrupt/gradual/interruption/digression)
- Previous topic status: {{prior_topic_status}} (completed/incomplete/abandoned)
- Relationship between topics: {{topic_relationship}} (related/unrelated/sequential)
- User intent: {{intent_clarity}} (clear/ambiguous)

=== OUTPUT REQUIREMENTS ===

```yaml
topic_switching:
  detection:
    abrupt_switch:
      trigger: "completely new intent detected"
      response: "acknowledge switch, offer to save progress on prior topic"
      example: "Sure, I can help with {{new_topic}}. Want me to save where we were with {{old_topic}}?"

    related_switch:
      trigger: "new but related topic"
      response: "connect the topics"
      example: "{{new_topic}} - that relates to what we were discussing. Let me help with that."

    interrupting_switch:
      trigger: "user has urgent new need"
      response: "prioritize new need, offer to resume"
      example: "Of course, let's handle {{urgent_topic}} first. We can get back to {{original}} after."

  handling_patterns:
    incomplete_prior_task:
      save_state: "preserve progress on abandoned topic"
      offer_resume: "Want to pick up {{old_topic}} later?"
      user_choice: "let user decide"

    completed_prior_task:
      acknowledge: "{{completion_confirmation}}"
      proceed: "What else can I help with?"

    unclear_switch:
      clarify: "Are you asking about {{new_topic}} or still discussing {{old_topic}}?"

  context_management:
    preserve:
      - "previous topic state"
      - "partial information collected"
      - "user's indicated priorities"

    reference_appropriately:
      - "Earlier you mentioned {{old_topic}}..."
      - "Going back to {{prior_topic}} when you're ready"
      - "Like we discussed before, {{reference}}"
```

=== EXAMPLES ===

**Example 1: Task Manager - Abrupt Switch**
- Context: User creating task, suddenly asks about different project
- Response: "Sure, I can show Project B. Want me to save this draft task first?"

**Example 2: Customer Support - Urgent Interruption**
- Context: Mid-troubleshooting, user reports critical new issue
- Response: "That sounds urgent. Let's address {{critical_issue}} right now. We'll get back to the password reset."

---

**Accessibility Requirements**: Acknowledge topic changes. Offer to save progress. Clear transitions. Support non-linear thinking.

**Psychological Principles**: Respect user priorities. Reduce anxiety about "losing" progress. Support working memory limitations. Allow natural conversation flow.

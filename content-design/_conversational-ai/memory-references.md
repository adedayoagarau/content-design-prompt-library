## Memory Reference System v1.0

**Purpose**: Reference past conversations appropriately to personalize experience without being creepy or presumptuous.

---

**PROMPT:**

Design memory reference patterns for {{ai_system}} that leverage {{memory_scope}} conversation history for {{user_segment}}.

=== MEMORY CONTEXT ===
- Memory scope: {{memory_scope}} (session/short_term/long_term/permanent)
- Memory type: {{memory_type}} (conversational/preferential/behavioral/factual)
- Privacy sensitivity: {{privacy_level}}
- User control: {{user_can_manage_memory}}

=== OUTPUT REQUIREMENTS ===

```yaml
memory_system:
  when_to_reference:
    explicit_callback:
      trigger: "user references past interaction"
      response: "confirm recognition + provide context"
      example: "Yes, last week you {{past_action}}. {{relevant_update}}"

    helpful_context:
      trigger: "past info makes current task easier"
      response: "use implicitly or with brief acknowledgment"
      example: "Shipping to {{saved_address}} as usual?"

    celebrating_progress:
      trigger: "milestone or achievement"
      response: "acknowledge journey"
      example: "You've completed 10 projects since {{timeframe}}! 🎉"

  when_not_to_reference:
    - "User seems to have forgotten (let it go)"
    - "Past information could be embarrassing"
    - "Reference would seem surveillance-like"
    - "User explicitly said 'forget that'"

  reference_styles:
    casual: "Like last time, {{action}}?"
    explicit: "Based on your {{date}} conversation..."
    implicit: "{{use information without announcing it}}"

  privacy_boundaries:
    - user_can_view: "all stored memories"
    - user_can_delete: "specific memories or all"
    - sensitive_topics: "require explicit re-permission"
```

=== EXAMPLES ===

**Example 1: Helpful Reference**
- Memory: User always prefers morning appointments
- Reference: "I have a 9am slot available - that worked well last time."

**Example 2: Celebrating Milestone**
- Memory: User's 50th completed task
- Reference: "Congrats on your 50th task! You've been productive this month."

**Example 3: Privacy-Respecting Non-Reference**
- Memory: User mentioned personal problem
- Current: Don't bring it up unless user does

---

**Accessibility Requirements**: Never assume memory is correct. Offer easy corrections. Respect privacy. Clear about what's remembered.

**Psychological Principles**: Recognition feels personal. Too much memory feels creepy. Celebrate progress builds motivation. Respect privacy builds trust.

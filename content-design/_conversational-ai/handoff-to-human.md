## Human Handoff Design v1.0

**Purpose**: Create smooth transitions from AI to human agents, preserving context and maintaining user confidence throughout the handoff.

---

**PROMPT:**

Design human handoff flows for {{ai_system}} when transitioning users from bot to {{human_agent_type}}. Ensure seamless context transfer and positive user experience.

=== HANDOFF CONTEXT ===
- Handoff trigger: {{trigger_type}} (bot_limitation/user_request/complex_issue/escalation)
- Agent availability: {{availability}} (immediate/queue/scheduled/async)
- Context transfer: {{transfer_method}} (full_transcript/summary/key_points)
- User expectations: {{urgency_level}}

=== OUTPUT REQUIREMENTS ===

```yaml
handoff_system:
  handoff_triggers:
    bot_cannot_help:
      message: "I want to make sure you get the best help. Let me connect you with {{agent_type}} who specializes in this."
      tone: "helpful, not defeated"

    user_requests_human:
      message: "Of course! I'll connect you with {{agent_role}}. They'll have our conversation history."
      tone: "accommodating, efficient"

    complex_escalation:
      message: "This requires expertise beyond what I can provide. {{agent_name}} from our {{team}} can help - connecting you now."
      tone: "professional, reassuring"

  handoff_messaging:
    setting_expectations:
      immediate_available:
        message: "Connecting you now..."
        action: "transfer with context"

      wait_time_short:
        message: "The next available {{agent}} will be with you in about {{wait_time}}. They'll see everything we've discussed."
        provide: "estimated wait time + context assurance"

      wait_time_long:
        message: "Current wait time is {{duration}}. Would you like to wait, or should someone call you back at {{preferred_contact}}?"
        provide: "choice"

    context_summary_for_user:
      template: |
        "Before I connect you, here's what I'm passing along:
        - {{issue_summary}}
        - {{steps_already_tried}}
        - {{relevant_account_info}}

        Sound right?"

  context_transfer_to_agent:
    full_format:
      - conversation_transcript: "complete history"
      - user_sentiment: "detected emotion/frustration level"
      - issue_summary: "one-line problem statement"
      - attempted_solutions: "what bot already tried"
      - user_account_context: "relevant account/product info"
      - priority_level: "urgency indicator"

  handoff_quality_markers:
    - "User knows why they're being transferred"
    - "User knows what to expect (wait time, who they'll talk to)"
    - "User feels progress was made, not starting over"
    - "Agent has full context"
    - "Handoff feels like escalation to expertise, not bot failure"
```

=== EXAMPLES ===

**Example 1: Technical Support - Bot Limitation**
- trigger: "complex technical issue"
- message: "This requires deeper technical knowledge. Let me connect you with our technical support team who can investigate this properly."
- context_transfer: "full transcript + diagnostic data"

**Example 2: Billing Issue - User Request**
- trigger: "user asks for human"
- message: "Absolutely. I'll connect you with our billing team. They'll see our conversation and your account details."
- wait_time: "2-3 minutes"

---

**Accessibility Requirements**: Clear about what's happening. Explain wait times. Assure context is preserved. Provide alternatives if wait is long.

**Psychological Principles**: Frame as expertise upgrade, not failure. Reduce anxiety with clear expectations. Preserve user's invested time/effort. Maintain continuity (sunk cost respect).

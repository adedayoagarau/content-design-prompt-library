## Conversational Repair System v1.0

**Purpose**: Fix misunderstandings mid-conversation without disrupting flow or making users feel wrong.

---

**PROMPT:**

Design conversational repair strategies for {{ai_system}} to correct misunderstandings detected during ongoing conversations about {{conversation_domain}}.

=== REPAIR CONTEXT ===
- Misunderstanding type: {{misunderstanding_type}} (bot_misheard/user_misspoke/entity_confusion/wrong_assumption)
- Detection point: {{when_detected}} (immediately/after_followup/user_correction)
- Conversation investment: {{turns_deep}} (early/mid/late in conversation)
- Impact severity: {{impact}} (minor/moderate/major)

=== OUTPUT REQUIREMENTS ===

```yaml
repair_strategies:
  repair_patterns:
    bot_realizes_error:
      approach: "acknowledge and correct quickly"
      template: "Actually, I misunderstood. You meant {{correct_interpretation}}. Let me {{corrective_action}}."
      example: "Actually, I misunderstood. You meant the Premium plan, not Pro. Let me pull up Premium pricing."

    user_corrects_bot:
      approach: "accept gracefully, don't over-apologize"
      template: "You're right, {{acknowledgment}}. {{proceed_with_correct_info}}"
      example: "You're right, it's the blue one. Let me update that."

    catching_confusion_early:
      approach: "pause and verify"
      template: "Wait, just to make sure - you meant {{interpretation}}?"
      example: "Wait, just to make sure - you meant cancel the order, not the subscription?"

    major_backtrack_needed:
      approach: "acknowledge, reset, preserve what's salvageable"
      template: "I realize I've been working with the wrong {{thing}}. Let's reset: {{corrected_understanding}}. Good news - {{what_we_can_keep}}."
      example: "I realize I've been setting up the wrong account type. Let's reset: you need a Business account. Good news - the information you provided still works."

  repair_techniques:
    minimal_disruption:
      - "Actually, {{correction}}"
      - "I meant {{correction}}"
      - "Let me rephrase: {{correction}}"

    acknowledge_and_pivot:
      - "You're absolutely right. {{proceed_correctly}}"
      - "Good catch. {{corrective_action}}"
      - "Thanks for clarifying. {{updated_action}}"

    reset_gracefully:
      - "Let me start over on this part"
      - "I had the wrong {{entity}} - let's go with {{correct_entity}}"
      - "Scratch that. {{correct_approach}}"

  what_not_to_do:
    avoid:
      - "You said {{wrong_thing}}" (blaming user)
      - "But earlier you told me..." (defensive)
      - Excessive apologizing for minor corrections
      - Making user re-explain everything
      - Pretending the error didn't happen
```

=== EXAMPLES ===

**Example 1: Entity Confusion**
- Situation: Bot confused "Project A" with "Project Alpha"
- Repair: "Got it - Project Alpha, not Project A. I'll update that record. What else needs changing?"

**Example 2: User Correction**
- User: "No, I said Tuesday, not Thursday"
- Bot: "You're right, Tuesday. I've updated the meeting to Tuesday at 2pm."

**Example 3: Major Misunderstanding**
- Situation: Bot thought user wanted to delete when they wanted to archive
- Repair: "I'm glad I double-checked - archive, not delete. Much safer choice. Let me set that up."

---

**Accessibility Requirements**: Quick recovery. Don't make users explain repeatedly. Preserve conversational flow. Clear about what changed.

**Psychological Principles**: Grace in accepting correction builds rapport. Quick recovery maintains trust. Don't force users to save face for AI. Preserve user investment in conversation.

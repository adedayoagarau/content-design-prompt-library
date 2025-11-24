## Interruption Handling Design v1.0

**Purpose**: Manage user interruptions mid-response gracefully, supporting natural conversation flow and user control.

---

**PROMPT:**

Design interruption handling for {{ai_system}} when users interrupt {{bot_response_type}}. Support user agency while managing conversation state.

=== INTERRUPTION CONTEXT ===
- Interruption type: {{interruption_type}} (clarification/topic_change/correction/impatience)
- Response progress: {{response_state}} (early/mid/near_complete)
- Response importance: {{importance}} (critical_info/helpful_context/verbose_explanation)

=== OUTPUT REQUIREMENTS ===

```yaml
interruption_handling:
  detection:
    user_interjects_mid_response:
      action: "stop immediately, address interruption"
      example: "[Bot explaining...] User: 'Wait, what about X?' Bot: [stops] Let me address that first..."

  handling_patterns:
    user_asks_clarification:
      response: "pause and clarify, then offer to continue"
      example: "Good question. {{clarification}}. Want me to continue or shall we dive deeper into this?"

    user_corrects_error:
      response: "stop, acknowledge, correct course"
      example: "You're right, I'll update that. {{corrected_action}}"

    user_shows_impatience:
      response: "get to the point"
      example: "Got it - to directly answer: {{core_answer}}. {{offer_details}}"

    user_changes_topic:
      response: "acknowledge switch, save state if needed"
      example: "Sure, let's switch to {{new_topic}}. I can always finish explaining {{old_topic}} later."

  response_design_for_interruptibility:
    chunk_information:
      pattern: "deliver key point first, details after"
      example: "{{main_answer}}. [pausable moment] Here's why: {{explanation}}"

    check_in_points:
      pattern: "pause for confirmation in long responses"
      example: "{{first_part}}. Does this make sense so far?"

    progressive_disclosure:
      pattern: "core answer + offer more"
      example: "{{answer}}. Want me to explain how this works?"

  state_management:
    partial_response_interrupted:
      - save: "what was being explained"
      - offer: "to resume or provide summary"
      - user_choice: "let user decide next action"
```

=== EXAMPLES ===

**Example 1: Voice Assistant - Mid-Recipe**
- Context: Bot reading recipe steps, user interrupts
- Interruption: "Wait, what temperature?"
- Response: "350 degrees. Want me to continue with the steps or clarify anything else?"

**Example 2: Technical Support - Long Explanation**
- Context: Bot explaining troubleshooting steps
- Interruption: "Can we skip to the solution?"
- Response: "Absolutely. The fix is: {{direct_solution}}. Try that first."

**Example 3: Educational Bot - Interrupted Lesson**
- Context: Teaching concept, user asks question
- Interruption: "I don't understand X"
- Response: "Let me clarify X first. {{explanation}}. Now the rest will make more sense."

---

**Accessibility Requirements**: Respect user control. Support cognitive processing differences. Allow pause/resume. Don't force through long responses. Enable skipping ahead.

**Psychological Principles**: User agency (autonomy). Respect attention limits (working memory). Progressive disclosure. Interruptibility builds trust. Chunking supports comprehension.

## Conversational Feedback Collection v1.0

**Purpose**: Request user feedback naturally within conversation flow without disrupting experience or feeling like a survey.

---

**PROMPT:**

Design feedback collection patterns for {{ai_system}} that gather insights about {{feedback_target}} conversationally.

=== FEEDBACK CONTEXT ===
- Feedback goal: {{goal}} (improve_responses/measure_satisfaction/identify_issues)
- Collection timing: {{timing}} (post_interaction/periodic/triggered)
- User investment: {{investment}} (quick_question/multi_turn_conversation/complex_task)
- Interruption tolerance: {{tolerance}}

=== OUTPUT REQUIREMENTS ===

```yaml
feedback_collection:
  lightweight_feedback:
    thumbs_rating:
      question: "Was this helpful?"
      options: ["👍", "👎"]
      follow_up_if_negative: "What went wrong?"

    emoji_reaction:
      question: "How did that go?"
      options: ["😊", "😐", "😞"]
      placement: "after task completion"

  conversational_feedback:
    satisfaction_check:
      pattern: "Did that answer your question?"
      timing: "after providing answer"
      natural: true

    improvement_prompt:
      pattern: "{{accomplished}}. How could I have helped better?"
      timing: "after completion"

    specific_feedback:
      pattern: "On a scale of 1-5, how {{specific_aspect}}?"
      example: "On a scale of 1-5, how clear were my instructions?"

  feedback_request_timing:
    good_times:
      - "after successful completion"
      - "after resolution of issue"
      - "natural pause in conversation"

    bad_times:
      - "mid-task"
      - "when user is frustrated"
      - "when user is in hurry"
      - "too frequently"

  making_it_worth_their_time:
    - "Keep it very brief (1-2 clicks)"
    - "Explain how feedback helps"
    - "Show feedback leads to improvements"
    - "Thank them meaningfully"

  optional_elaboration:
    pattern: "{{quick_rating}} {{optional_details}}"
    example: |
      Was this helpful? 👍 👎

      [If they click] Want to tell me more? (optional)

  closing_the_loop:
    after_feedback:
      - "Thanks! This helps me improve."
      - "I appreciate that - I'm learning from this."
      - "Got it. I'll work on {{specific_area}}."
```

=== EXAMPLES ===

**Example 1: Post-Answer Feedback**
- Context: Bot answered question
- Feedback: "Did that answer your question? 👍 👎"
- If negative: "What information were you looking for?"

**Example 2: Post-Task Feedback**
- Context: User completed multi-step task
- Feedback: "All done! How was that experience? 😊 Smooth | 😐 Okay | 😞 Frustrating"
- Follow-up: "Thanks! What would have made it smoother?"

**Example 3: Feature-Specific Feedback**
- Context: User tried new feature
- Feedback: "You just tried our new {{feature}}. Helpful or not so much?"
- If negative: "What would make it more useful for you?"

---

**Accessibility Requirements**: Easy to skip. Clear value of providing feedback. Multiple input methods. Brief and focused.

**Psychological Principles**: Reciprocity (show how feedback helps). Minimal friction. Timely requests. Make it feel like conversation, not survey. Acknowledge contribution.

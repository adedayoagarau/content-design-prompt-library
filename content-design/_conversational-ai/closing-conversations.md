## Conversation Closing Design v1.0

**Purpose**: End conversations naturally with appropriate closure, support for return, and clear next actions.

---

**PROMPT:**

Design conversation closings for {{ai_system}} after {{conversation_type}} with {{outcome}}.

=== CLOSING CONTEXT ===
- Conversation outcome: {{outcome}} (successful/partial/unsuccessful)
- User satisfaction: {{satisfaction}} (satisfied/neutral/unsatisfied)
- Follow-up needed: {{followup}} (yes/no/optional)
- Relationship type: {{relationship}} (one-time/ongoing)

=== OUTPUT REQUIREMENTS ===

```yaml
closing_patterns:
  successful_completion:
    pattern: "{{completion_confirmation}} {{offer_additional_help}}"
    examples:
      - "✓ All set! Your meeting is scheduled for Thursday at 2pm. Anything else I can help with?"
      - "Done! I've sent the report to your email. Need anything else?"

  partial_completion:
    pattern: "{{what_accomplished}} {{what_remains}} {{offer_help}}"
    example: "I've updated your billing info. Your payment method still needs verification - I've sent instructions to your email. Want help with anything else?"

  unsuccessful_but_escalated:
    pattern: "{{acknowledgment}} {{next_steps}} {{availability}}"
    example: "I've connected you with our technical team. They'll email you within 2 hours. I'm here if you need anything else."

  natural_conversation_end:
    user_signals_done:
      - "Thanks!"
      - "That's all"
      - "Great, thanks"

    bot_response:
      - "You're welcome! I'm here if you need anything else."
      - "Happy to help! Feel free to ask me anything anytime."
      - "Anytime! Have a great day."

  explicit_closeout:
    summary_style:
      pattern: |
        {{summary_of_conversation}}
        {{next_steps_if_any}}
        {{availability_statement}}

      example: |
        To recap: I've reset your password, updated your email to new@example.com, and enabled two-factor authentication.

        You'll receive a confirmation email in a few minutes.

        I'm here 24/7 if you need anything else!

  avoiding_false_closes:
    dont_assume_done:
      bad: "Glad I could help! Goodbye!"
      good: "Anything else I can help with?"

    keep_door_open:
      - "Let me know if you need anything else"
      - "I'm here if questions come up"
      - "Feel free to ask me anytime"

  relationship_maintenance:
    ongoing_relationships:
      - "See you next time!"
      - "Talk soon!"
      - "I'll be here when you need me"

    one_time_interactions:
      - "Good luck with {{their_goal}}!"
      - "Hope that helps!"
      - "Have a great day!"
```

=== EXAMPLES ===

**Example 1: Successful Task Completion**
- Context: User completed account setup
- Closing: "✓ Your account is all set up! You can start creating projects right away. Need help with anything else?"

**Example 2: Problem Escalated**
- Context: Issue required human agent
- Closing: "Sarah from support will email you within an hour. In the meantime, I'm here if you need anything else."

**Example 3: Quick Question Answered**
- Context: User got quick answer
- Closing: "Hope that helps! Let me know if you have other questions."

---

**Accessibility Requirements**: Clear that conversation can continue. Summarize outcomes. Provide next steps. Don't force goodbye.

**Psychological Principles**: Closure reduces anxiety. Summary reinforces accomplishment. Open door maintains relationship. Natural exit respects user agency.

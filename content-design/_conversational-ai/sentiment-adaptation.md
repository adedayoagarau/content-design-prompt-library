## Sentiment Adaptation System v1.0

**Purpose**: Adjust conversational tone based on detected user emotion to provide appropriate, empathetic responses.

---

**PROMPT:**

Design sentiment adaptation for {{ai_system}} to respond appropriately when users are {{emotional_state}}.

=== SENTIMENT CONTEXT ===
- Detected sentiment: {{sentiment}} (positive/neutral/negative/frustrated/angry/anxious)
- Confidence: {{confidence}}
- Situation: {{situation_context}}
- Bot capability: {{can_solve}} (yes/no/partial)

=== OUTPUT REQUIREMENTS ===

```yaml
sentiment_adaptation:
  positive_sentiment:
    detection: "enthusiastic language, exclamation points, positive words"
    adaptation: "match energy, celebrate"
    example: "That's fantastic! 🎉 I'm so glad that worked out. What's next?"

  neutral_sentiment:
    detection: "matter-of-fact, straightforward"
    adaptation: "professional, efficient"
    example: "Got it. I've updated that for you."

  negative_sentiment:
    frustrated:
      detection: "repeat issues, short responses, error mentions"
      adaptation: "more empathetic, solution-focused, consider human handoff"
      example: "I can see this has been frustrating. Let me get you to someone who can resolve this right away."

    anxious:
      detection: "multiple questions, seeking reassurance"
      adaptation: "reassuring, clear, thorough"
      example: "Don't worry - this is completely safe. I'll walk you through each step."

    angry:
      detection: "strong language, complaints, demands"
      adaptation: "calm, apologetic, immediate action"
      example: "I understand this is unacceptable. Let me escalate this to our team lead immediately."

  adaptation_guidelines:
    - "Match urgency, not negativity"
    - "Increase empathy with frustration"
    - "Decrease chattiness with negative sentiment"
    - "Offer faster paths (human handoff, shortcuts)"
    - "Don't be falsely cheerful"
```

=== EXAMPLES ===

**Example 1: Frustrated User**
- User: "This is the third time I'm asking!"
- Bot: "I apologize for the repeated issue. Let me prioritize getting this fixed for you right now."

**Example 2: Anxious User**
- User: "Are you sure this won't delete my data?"
- Bot: "Absolutely certain. This only archives it - you can restore anytime. Your data stays completely safe."

**Example 3: Excited User**
- User: "This is amazing! It finally worked!"
- Bot: "Yes! Great job getting that set up. You're all ready to go now."

---

**Accessibility Requirements**: Don't assume sentiment. Provide options regardless of emotion. Respect emotional states.

**Psychological Principles**: Emotional mirroring (to a point). Empathy builds trust. De-escalation through calm. Validation before solution.

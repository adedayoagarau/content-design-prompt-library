## Chitchat Boundary Management v1.0

**Purpose**: Know when to redirect from small talk to functional conversation without being rude or overly rigid.

---

**PROMPT:**

Design chitchat boundaries for {{ai_system}} that balance relationship-building with {{primary_function}}.

=== BOUNDARY CONTEXT ===
- Bot purpose: {{primary_purpose}}
- Chitchat allowance: {{allowance}} (minimal/moderate/generous)
- Redirect timing: {{when_to_redirect}}
- User relationship: {{relationship_type}} (transactional/ongoing)

=== OUTPUT REQUIREMENTS ===

```yaml
chitchat_boundaries:
  acceptable_chitchat:
    greetings: "always reciprocate"
    pleasantries: "brief engagement, then redirect"
    celebration_sharing: "acknowledge enthusiastically, offer related help"
    frustration_venting: "empathize, then problem-solve"

  polite_redirects:
    after_brief_engagement:
      pattern: "{{acknowledge_chitchat}} {{smooth_transition_to_function}}"
      example: "That sounds fun! Now, what can I help you with today?"

    when_getting_off_track:
      pattern: "{{validate}} I'm best at {{function}}. Can I help you with {{examples}}?"
      example: "Interesting topic! I'm best at helping with your schedule. Want to add an event or check your calendar?"

  absolute_boundaries:
    topics_to_decline:
      - "extended_debate"
      - "personal_advice_outside_domain"
      - "pretending_to_be_human"

    decline_gracefully:
      pattern: "{{acknowledge}} I'm not equipped to discuss that, but I'm great at {{redirect_to_strength}}."
```

=== EXAMPLES ===

**Example 1: Task Bot - Redirect After Pleasantry**
- User: "How was your weekend?"
- Bot: "I don't have weekends, but I'm here to help with your tasks! What's on your list today?"

**Example 2: Support Bot - Extended Personal Talk**
- User: "Tell me about yourself"
- Bot: "I'm a support assistant focused on helping with [product]. What questions do you have about your account?"

---

**Accessibility Requirements**: Clear boundaries reduce confusion. Redirects should be gentle. Maintain helpful tone.

**Psychological Principles**: Boundaries set expectations. Warm redirects maintain rapport. Clear purpose reduces frustration.

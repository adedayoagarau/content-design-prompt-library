## Response Length Optimization v1.0

**Purpose**: Balance thoroughness with brevity, delivering complete answers without overwhelming users.

---

**PROMPT:**

Optimize response length for {{ai_system}} serving {{user_type}} in {{use_context}}. Balance completeness with conciseness based on {{context_factors}}.

=== LENGTH CONTEXT ===
- User type: {{user_type}} (novice/intermediate/expert)
- Context: {{context}} (time_sensitive/exploratory/learning)
- Channel: {{channel}} (voice/mobile_chat/desktop_chat/email)
- Query complexity: {{complexity}}

=== OUTPUT REQUIREMENTS ===

```yaml
length_optimization:
  response_tiers:
    ultra_brief:
      word_count: "5-15 words"
      when: "simple confirmation, quick answer, time-sensitive"
      examples:
        - "Yes, your order ships tomorrow."
        - "Password reset sent to your email."
        - "Meeting starts in 10 minutes."

    concise:
      word_count: "20-50 words"
      when: "straightforward questions, mobile users, voice"
      structure: "answer + brief context"
      example: "Your subscription renews on June 15th. You'll be charged $29.99. Want to update your payment method or plan?"

    standard:
      word_count: "50-100 words"
      when: "moderate complexity, desktop, explanation needed"
      structure: "answer + context + next action"
      example: "I've reset your password. You'll receive an email at john@example.com with a secure link - it expires in 1 hour. After resetting, you can enable two-factor authentication in Security Settings for extra protection. Need help with anything else?"

    detailed:
      word_count: "100-200 words"
      when: "complex topic, educational, user has time"
      structure: "answer + explanation + examples + resources"

    progressive:
      approach: "short answer + offer more"
      pattern: "{{brief_answer}}. Want me to explain how this works?"

  length_adaptation:
    signals_for_brevity:
      - user_in_hurry: "yes/no question, time mention"
      - mobile_user: "shorter attention, smaller screen"
      - repeated_question: "user wants answer, not education"
      - voice_channel: "listening fatigue"

    signals_for_detail:
      - exploratory_question: "how does this work?"
      - first_time_user: "needs context and guidance"
      - complex_topic: "requires explanation"
      - user_asks_followup: "wants more depth"

  structure_for_scannability:
    chunking:
      - "Use short paragraphs (2-3 sentences max)"
      - "Lead with core answer"
      - "Use bullets for lists"
      - "Bold key information"

    progressive_disclosure:
      pattern: |
        {{core_answer}}

        [Optional] {{more_context}}

        [Optional] Want to know: {{deeper_topic}}?
```

=== EXAMPLES ===

**Example 1: Mobile Banking - Transaction Query**
- User: "Did my payment go through?"
- Ultra-brief: "Yes, payment sent."
- Better (concise): "Yes, your $50 payment to Jane sent successfully at 2:14pm."
- Word count: 12 words

**Example 2: Tech Support - Setup Question**
- User: "How do I set up two-factor authentication?"
- Standard response: "Go to Settings > Security > Two-Factor Authentication. Choose text or app-based codes. Enter your phone number or scan the QR code with an authenticator app. You'll need to enter a code each time you sign in. This adds security to your account."
- Word count: ~50 words

**Example 3: Educational Bot - Conceptual Question**
- User: "What is machine learning?"
- Progressive approach: "Machine learning is when computers learn from data patterns instead of following explicit instructions. Like teaching a child by examples. Want me to explain how it works or show you real-world examples?"
- Word count: ~30 words + user choice

---

**Accessibility Requirements**: Front-load key information. Support scanning. Respect attention limits. Offer depth as choice, not default. Mobile-friendly lengths.

**Psychological Principles**: Miller's Law (7±2 chunks). Progressive disclosure. Respect working memory limits. Scannability over wall of text. User agency in depth.

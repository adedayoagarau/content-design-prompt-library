## Multi-Language Switching Design v1.0

**Purpose**: Handle language changes mid-conversation smoothly, supporting multilingual users without confusion.

---

**PROMPT:**

Design language switching patterns for {{ai_system}} when users switch from {{source_language}} to {{target_language}} mid-conversation.

=== LANGUAGE CONTEXT ===
- Supported languages: {{languages}}
- Switch trigger: {{trigger}} (explicit_request/detected_switch/user_preference)
- Context preservation: {{preserve_context}} (yes/no)
- Mixed-language support: {{mixed_support}} (yes/no/partial)

=== OUTPUT REQUIREMENTS ===

```yaml
language_switching:
  detection:
    explicit_request:
      user: "Switch to Spanish"
      bot: "Switched to Spanish. ¿En qué puedo ayudarte?"

    detected_switch:
      user: "Bonjour" (switched to French)
      bot: "Bonjour! I can continue in French. Préférez-vous continuer en français?"
      confirmation: "ask before assuming"

    mixed_language:
      approach: "respond in user's current language"
      example: "User asks question in English with Spanish terms - respond in English but acknowledge Spanish terms"

  switch_confirmation:
    pattern: "{{acknowledge_in_new_language}} {{confirm_preference}}"
    example: "Hola! Would you like to continue in Spanish?"

  context_preservation:
    carry_forward:
      message: "{{summarize_previous_context_in_new_language}}"
      example: "[In Spanish] Estabas preguntando sobre tu pedido #123..."

  handling_unsupported_languages:
    pattern: "I understand you're writing in {{language}}. I currently support {{supported_languages}}. Which would you prefer?"
    graceful: true
    apologetic: "brief, not excessive"

  mixed_language_scenarios:
    code_switching:
      recognize: "user mixes languages naturally"
      response: "respond in primary language, acknowledge terms from other language"

    technical_terms:
      keep: "preserve technical terms in original language"
      example: "Yes, I can help with {{technical_term_in_English}} - {{explanation_in_user_language}}"

  language_preference_memory:
    save_preference: true
    apply_future: "remember for future sessions"
    allow_change: "easy language switcher always available"
```

=== EXAMPLES ===

**Example 1: Explicit Language Change**
- User: "Can we do this in French?"
- Bot: "Of course! Passons au français. Comment puis-je vous aider?"

**Example 2: Detected Switch**
- Previous conversation in English
- User: "Hola, necesito ayuda"
- Bot: "Hola! I noticed you switched to Spanish. Want to continue in Spanish? / ¿Quieres continuar en español?"

**Example 3: Unsupported Language**
- User writes in language not supported
- Bot: "I see you're writing in {{language}}. I currently support English, Spanish, and French. Which works best for you?"

---

**Accessibility Requirements**: Clear language options. Easy to switch. Preserve context across language switch. Support mixed-language users.

**Psychological Principles**: Language comfort critical for trust. Acknowledge switch respectfully. Preserve conversation investment. Support user's natural communication style.

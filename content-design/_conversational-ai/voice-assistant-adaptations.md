## Voice Assistant Adaptation v1.0

**Purpose**: Optimize conversational AI for voice-only interfaces where users cannot see text, requiring distinct UX patterns.

---

**PROMPT:**

Design voice-optimized conversation patterns for {{voice_assistant}} when handling {{use_case}} in voice-only mode.

=== VOICE CONTEXT ===
- Interface: {{interface}} (smart_speaker/phone/car/wearable)
- User context: {{context}} (hands_free/driving/cooking/exercising)
- Ambient noise: {{noise_level}}
- Session length: {{expected_duration}}

=== OUTPUT REQUIREMENTS ===

```yaml
voice_adaptations:
  response_design:
    brevity_critical:
      pattern: "{{direct_answer}} in 1-2 sentences max"
      example: "Your package arrives tomorrow by 5pm."
      avoid: "long lists, detailed explanations without warning"

    scannable_to_listenable:
      text: "Product Features:\n- Feature A\n- Feature B\n- Feature C"
      voice: "This product has three main features: Feature A, Feature B, and Feature C."

    pause_for_processing:
      pattern: "{{chunk_1}}. [brief pause] {{chunk_2}}."
      why: "gives user time to process"

  interaction_patterns:
    no_visual_confirmation:
      always_verbalize:
        - "actions taken"
        - "options available"
        - "confirmation needed"

      example: "I've added milk to your shopping list. Want to add anything else?"

    list_handling:
      short_list: "read all items"
      long_list: "summarize + offer more"
      pattern: "You have 3 reminders: {{item1}}, {{item2}}, and {{item3}}. Want details on any?"

      long_pattern: "You have 15 emails. Top 3 are from {{names}}. Want me to read them or summarize all?"

  disambiguation_for_voice:
    spelling_out:
      pattern: "Did you mean {{option_A}} spelled {{spell_out}}, or {{option_B}}?"
      when: "similar-sounding words"

    number_confirmation:
      pattern: "{{number}} - that's {{spelled_out_number}}. Correct?"
      when: "important numbers (prices, quantities, times)"

  error_handling:
    didn't_hear:
      response: "Sorry, I didn't catch that. Could you repeat?"
      avoid: "Could you please repeat that for me?"

    misheard:
      response: "Did you say {{what_i_heard}}?"
      confirm: "always confirm uncertain transcriptions"

  voice_specific_features:
    ssml_markup:
      emphasis: "<emphasis>important word</emphasis>"
      pause: "<break time='500ms'/>"
      speed: "<prosody rate='slow'>careful explanation</prosody>"

    brevity_guidelines:
      ideal_response_length: "10-20 seconds of speech"
      max_before_check_in: "30 seconds"
      chunk_size: "1-2 sentences per breath"

  conversational_markers:
    use_more:
      - "Okay"
      - "Got it"
      - "Sure"
      - "Alright"

    avoid_visual_language:
      bad: "As you can see..."
      bad: "Look at..."
      bad: "The button below..."
      good: "Your total is..."
      good: "You have three options..."

  context_setting:
    always_provide_context:
      pattern: "{{context}}. {{response}}."
      example: "For your 2pm meeting: it starts in 10 minutes and is in Conference Room B."
      why: "user may have forgotten what they asked"
```

=== EXAMPLES ===

**Example 1: Calendar Query**
- Text version: "You have 3 meetings:\n- 9am: Team standup\n- 2pm: Client call\n- 4pm: Project review"
- Voice version: "You have 3 meetings today. At 9am, team standup. At 2pm, client call. And at 4pm, project review. Want details on any of these?"

**Example 2: Shopping List**
- Text version: [Shows list of 12 items]
- Voice version: "You have 12 items on your list. Most recent are milk, eggs, and bread. Want me to read the full list?"

**Example 3: Weather Query**
- Text version: [Shows detailed forecast with icons]
- Voice version: "Currently 72 degrees and sunny. High of 78 today. No rain expected."

---

**Accessibility Requirements**: All information available via audio. No reliance on visual elements. Clear audio feedback for actions. Support for replay/repeat.

**Psychological Principles**: Brevity critical for listening (working memory limits). Verbal confirmation builds confidence. Pauses aid comprehension. Listenable structure different from readable.

## Brand Voice & Tone Guide System v1.0

**Purpose**: Create a comprehensive voice and tone guide that defines brand personality, establishes consistent communication patterns, and provides practical guidelines for maintaining voice across all touchpoints.

---

**PROMPT:**

You are a senior brand content strategist creating a voice and tone guide for {{company_name}}, a {{company_type}} serving {{target_audience}}. Develop a comprehensive framework that captures brand personality and provides actionable guidance for {{content_team_size}} content creators across {{channel_count}} channels.

=== BRAND FOUNDATION ===

**Company Context**:
- Company name: {{company_name}}
- Industry: {{industry}}
- Target audience: {{target_audience}}
- Brand positioning: {{positioning_statement}}
- Competitive differentiation: {{differentiation}}
- Company values: {{core_values}}
- Mission statement: {{mission}}

**Brand Personality**:
- Primary archetype: {{brand_archetype}} (e.g., Innovator, Caregiver, Explorer, Sage, Hero, Rebel)
- Personality traits: {{personality_traits}} (select 3-5 defining characteristics)
- What we are: {{positive_attributes}}
- What we're not: {{negative_attributes_to_avoid}}

=== VOICE DEFINITION ===

**Voice Pillars** (3-5 core characteristics):
- Pillar 1: {{voice_pillar_1}}
  - Definition: {{pillar_1_definition}}
  - Why it matters: {{pillar_1_rationale}}
  - How it shows up: {{pillar_1_manifestation}}

- Pillar 2: {{voice_pillar_2}}
  - Definition: {{pillar_2_definition}}
  - Why it matters: {{pillar_2_rationale}}
  - How it shows up: {{pillar_2_manifestation}}

- Pillar 3: {{voice_pillar_3}}
  - Definition: {{pillar_3_definition}}
  - Why it matters: {{pillar_3_rationale}}
  - How it shows up: {{pillar_3_manifestation}}

**Voice Characteristics** (1-10 scale):
- Formality: {{formality_level}} (1=casual, 10=formal)
- Enthusiasm: {{enthusiasm_level}} (1=subdued, 10=energetic)
- Technicality: {{technical_level}} (1=accessible, 10=expert)
- Warmth: {{warmth_level}} (1=professional, 10=friendly)
- Humor: {{humor_level}} (1=serious, 10=playful)
- Authority: {{authority_level}} (1=humble, 10=confident)

=== TONE VARIATIONS ===

**Tone Spectrum**:
Define how tone shifts while voice remains constant:

- Success/Celebration: {{success_tone}}
- Routine/Neutral: {{neutral_tone}}
- Problem/Error: {{problem_tone}}
- Urgency/Critical: {{urgent_tone}}
- Empathy/Support: {{empathetic_tone}}
- Educational/Informative: {{educational_tone}}

**Context-Based Tone Adjustments**:
- First-time users: {{first_time_tone}}
- Power users: {{power_user_tone}}
- Frustrated users: {{frustrated_user_tone}}
- Enterprise customers: {{enterprise_tone}}
- Marketing communications: {{marketing_tone}}
- Support communications: {{support_tone}}
- Technical documentation: {{technical_docs_tone}}

=== OUTPUT REQUIREMENTS ===

Generate a complete voice and tone guide:

```yaml
voice_and_tone_guide:
  executive_summary:
    brand_name: "string"
    voice_in_one_sentence: "string (elevator pitch of brand voice)"
    core_message: "string (what guides all communications)"

  voice_foundation:
    brand_archetype: "string"
    personality_description: "string (2-3 paragraphs)"

    voice_pillars:
      - pillar_name: "string"
        definition: "string"
        in_practice: "string"
        examples:
          do_say: ["string", "string", "string"]
          dont_say: ["string", "string", "string"]
        rationale: "string"

      - pillar_name: "string"
        definition: "string"
        in_practice: "string"
        examples:
          do_say: ["string", "string", "string"]
          dont_say: ["string", "string", "string"]
        rationale: "string"

    dimensional_characteristics:
      formality:
        score: "1-10"
        description: "string"
        manifestation: "string"

      enthusiasm:
        score: "1-10"
        description: "string"
        manifestation: "string"

      technicality:
        score: "1-10"
        description: "string"
        manifestation: "string"

      warmth:
        score: "1-10"
        description: "string"
        manifestation: "string"

  tone_variations:
    context_based_adjustments:
      - context: "user_celebrating_success"
        tone_shift: "increase enthusiasm +2, increase warmth +2"
        example_before: "string (neutral tone)"
        example_after: "string (adjusted tone)"
        rationale: "string"

      - context: "user_frustrated_with_error"
        tone_shift: "increase empathy +3, decrease enthusiasm -2, add solution focus"
        example_before: "string"
        example_after: "string"
        rationale: "string"

      - context: "technical_documentation"
        tone_shift: "increase precision, decrease warmth slightly, maintain clarity"
        example_before: "string"
        example_after: "string"
        rationale: "string"

  practical_guidelines:
    grammar_and_mechanics:
      sentence_structure:
        preferred_length: "string (e.g., 'Mix of short and medium sentences')"
        complexity: "string (e.g., 'Simple to moderate, avoid compound-complex')"
        voice_preference: "active/passive/mixed"
        fragment_usage: "allowed/discouraged/never"

      punctuation_style:
        oxford_comma: "always/never/contextual"
        exclamation_points: "usage_guidelines"
        em_dashes: "usage_guidelines"
        ellipsis: "usage_guidelines"
        semicolons: "usage_guidelines"

      capitalization:
        product_names: "string"
        features: "string"
        job_titles: "string"
        headers: "title_case/sentence_case/all_caps"

    vocabulary:
      preferred_words:
        - word: "string"
          instead_of: "string"
          rationale: "string"

      banned_words:
        - word: "string"
          rationale: "string"
          alternative: "string"

      industry_jargon:
        approach: "define_all/use_sparingly/avoid_completely"
        acceptable_terms: ["string"]
        terms_to_define: ["string"]
        terms_to_avoid: ["string"]

    contractions:
      usage: "always/sometimes/never"
      examples_allowed: ["don't", "we're", "it's"]
      examples_avoid: ["ain't", "y'all"]
      rationale: "string"

    numbers_and_data:
      number_style: "spell_out_under_10/always_numerals/contextual"
      percentages: "formatting_rule"
      large_numbers: "formatting_rule (e.g., '1.2M' vs '1,200,000')"
      dates: "format (e.g., 'March 15, 2024')"
      times: "format (e.g., '2:30 PM EST')"

  channel_specific_guidance:
    website_content:
      voice_characteristics: "string"
      typical_tone: "string"
      sentence_length: "string"
      formality: "1-10"
      examples: ["string"]

    marketing_emails:
      voice_characteristics: "string"
      typical_tone: "string"
      subject_line_approach: "string"
      examples: ["string"]

    support_communications:
      voice_characteristics: "string"
      typical_tone: "string"
      empathy_level: "string"
      examples: ["string"]

    social_media:
      platform_adaptations:
        - platform: "twitter"
          voice_notes: "string"
          tone_notes: "string"
          examples: ["string"]

        - platform: "linkedin"
          voice_notes: "string"
          tone_notes: "string"
          examples: ["string"]

    product_ui:
      voice_characteristics: "string"
      typical_tone: "string"
      brevity_requirements: "string"
      examples: ["string"]

  voice_and_tone_matrix:
    scenarios:
      - scenario: "New user onboarding"
        voice_application: "string"
        tone_setting: "string"
        bad_example: "string"
        good_example: "string"
        explanation: "string"

      - scenario: "Error message"
        voice_application: "string"
        tone_setting: "string"
        bad_example: "string"
        good_example: "string"
        explanation: "string"

      - scenario: "Feature announcement"
        voice_application: "string"
        tone_setting: "string"
        bad_example: "string"
        good_example: "string"
        explanation: "string"

      - scenario: "Pricing page"
        voice_application: "string"
        tone_setting: "string"
        bad_example: "string"
        good_example: "string"
        explanation: "string"

  quality_assurance:
    voice_audit_checklist:
      - question: "Does this sound like our brand?"
        evaluation_criteria: "string"

      - question: "Is the tone appropriate for the context?"
        evaluation_criteria: "string"

      - question: "Would our target audience connect with this?"
        evaluation_criteria: "string"

    common_voice_violations:
      - violation: "string"
        why_it_breaks_voice: "string"
        how_to_fix: "string"
        example_correction: "string"

  implementation:
    training_materials:
      - "Voice and tone workshop outline"
      - "Quick reference card for writers"
      - "Voice audit template"
      - "Peer review checklist"

    tools_and_resources:
      - "Approved word list"
      - "Phrase bank by use case"
      - "Tone selector tool"
      - "Voice consistency checker"

  evolution_and_governance:
    review_cadence: "string (e.g., 'Quarterly review, annual major update')"
    stakeholders: ["string"]
    feedback_process: "string"
    version_control: "string"
```

=== EXAMPLES ===

**Example 1: Technology Startup (Friendly Innovator)**
- company_name: "CloudScale"
- industry: "Cloud infrastructure SaaS"
- target_audience: "Developers and DevOps teams"
- brand_archetype: "Innovator + Helper"
- voice_pillar_1: "Smart but accessible"
- voice_pillar_2: "Enthusiastic about technology"
- voice_pillar_3: "Genuinely helpful"
- formality_level: 3 (casual-conversational)
- enthusiasm_level: 7 (energetic but not over-the-top)
- technicality_level: 7 (technical but explained)
- contractions: "always (we're, it's, don't)"
- example_voice: "We built this feature because deploying should be exciting, not terrifying. Now you can ship code in minutes, not hours. Your 3am deploys just got a lot less stressful."

**Example 2: Healthcare Platform (Caring Expert)**
- company_name: "HealthConnect"
- industry: "Healthcare technology"
- target_audience: "Patients and caregivers"
- brand_archetype: "Caregiver + Sage"
- voice_pillar_1: "Empathetic and understanding"
- voice_pillar_2: "Trustworthy and accurate"
- voice_pillar_3: "Clear and reassuring"
- formality_level: 6 (professional but warm)
- enthusiasm_level: 4 (measured, not bubbly)
- technicality_level: 3 (plain language, explain medical terms)
- contractions: "sometimes (you're, we'll, but avoid in medical content)"
- example_voice: "We understand that managing your health can feel overwhelming. That's why we designed HealthConnect to be your partner in wellness. You'll get reminders when you need them, information you can trust, and support every step of the way."

**Example 3: Financial Services (Professional Advisor)**
- company_name: "WealthWise"
- industry: "Investment management"
- target_audience: "High-net-worth individuals, financial advisors"
- brand_archetype: "Sage + Ruler"
- voice_pillar_1: "Knowledgeable and authoritative"
- voice_pillar_2: "Strategic and forward-thinking"
- voice_pillar_3: "Personal and attentive"
- formality_level: 8 (professional-formal)
- enthusiasm_level: 3 (measured, confident)
- technicality_level: 8 (sophisticated, assumes financial literacy)
- contractions: "never in client communications"
- example_voice: "Your portfolio deserves strategic oversight informed by decades of market expertise. WealthWise provides the insights, analysis, and personalized guidance necessary to navigate complex financial decisions with confidence."

---

**Accessibility Requirements**: Voice and tone guide must be WCAG 3.0 Level AA compliant when implemented. Examples should demonstrate inclusive language. Avoid jargon unless defined. Test voice with diverse user groups. Ensure tone variations maintain clarity for neurodivergent users.

**Psychological Principles**: Consistency builds trust (consistency principle). Voice creates emotional connection (emotional design). Appropriate tone reduces anxiety in stressful contexts. Clear personality differentiates brand (distinctiveness). Authentic voice builds long-term relationships (authenticity principle).

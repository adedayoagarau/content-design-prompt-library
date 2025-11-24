## Comprehensive Style Guide Creator v1.0

**Purpose**: Create a detailed editorial style guide that establishes writing standards, grammar rules, formatting conventions, and brand-specific guidelines for consistent content across all channels and contributors.

---

**PROMPT:**

You are an editorial standards specialist creating a comprehensive style guide for {{organization_name}}, a {{organization_type}} producing {{content_volume}} across {{channel_types}}. Develop standards that ensure consistency for {{team_size}} content creators while maintaining {{brand_voice_summary}}.

=== ORGANIZATION CONTEXT ===

**Organization Details**:
- Name: {{organization_name}}
- Type: {{organization_type}} (company/publication/institution)
- Industry: {{industry_vertical}}
- Content types: {{content_types}} (articles/documentation/marketing/product)
- Publication frequency: {{frequency}}
- Target readers: {{target_audience}}
- Geographic scope: {{geographic_reach}}

**Existing Standards**:
- Base style manual: {{base_manual}} (AP/Chicago/APA/Custom/None)
- Brand voice: {{voice_summary}}
- Special considerations: {{special_requirements}}

=== GRAMMAR & MECHANICS ===

**Sentence Structure**:
- Preferred sentence length: {{sentence_length}}
- Complexity guidelines: {{complexity_rules}}
- Voice: {{voice_preference}} (active/passive/mixed)
- Fragments: {{fragment_rules}}
- Run-on sentences: {{runon_policy}}

**Verb Tense**:
- Default tense: {{default_tense}}
- Documentation: {{docs_tense}}
- Marketing: {{marketing_tense}}
- Release notes: {{release_notes_tense}}

**Point of View**:
- Primary POV: {{primary_pov}} (first/second/third person)
- When to use "we": {{we_usage}}
- When to use "you": {{you_usage}}
- When to use "I": {{i_usage}}
- Passive constructions: {{passive_policy}}

=== OUTPUT REQUIREMENTS ===

Generate a comprehensive editorial style guide:

```yaml
editorial_style_guide:
  metadata:
    organization: "string"
    version: "string"
    last_updated: "date"
    based_on: "string (AP Style/Chicago Manual/etc.)"
    maintained_by: "string"
    review_cadence: "string"

  grammar_and_usage:
    sentence_structure:
      guidelines:
        - "Prefer active voice over passive"
        - "Vary sentence length for readability"
        - "Front-load important information"
        - "Limit sentences to 20-25 words"

      acceptable_fragments:
        allowed: "boolean"
        contexts: ["string"]
        examples:
          good: ["Absolutely.", "Not quite.", "More on that later."]
          avoid: ["Because reasons.", "Which is why."]

    verb_tense:
      default: "present tense"
      exceptions:
        - context: "describing past events"
          tense: "past tense"
          example: "We launched this feature in 2023."

        - context: "future commitments"
          tense: "future tense"
          example: "This update will roll out next month."

      consistency_rules:
        - "Maintain tense within paragraphs"
        - "Signal tense shifts with temporal markers"

    point_of_view:
      primary: "second person (you)"

      person_usage:
        first_person_we:
          when: "Representing company position or actions"
          examples:
            - "We believe in transparency"
            - "We've made these changes based on your feedback"
          avoid: "Royal we, unnecessary we"

        second_person_you:
          when: "Addressing the reader directly"
          examples:
            - "You can customize your dashboard"
            - "Your data is encrypted"
          avoid: "Generic 'you' that doesn't apply to reader"

        third_person:
          when: "Describing users in general or documentation"
          examples:
            - "Users can invite team members"
            - "Administrators have access to settings"

  punctuation:
    comma_usage:
      oxford_comma: "always/never/contextual"
      explanation: "string"
      examples:
        with_oxford: "Please update your email, password, and security questions."
        without_oxford: "Please update your email, password and security questions."

    apostrophes:
      possessives:
        singular: "add 's (even if word ends in s)"
        plural: "add ' after s"
        examples:
          - "The user's preferences"
          - "James's account"
          - "The users' data"

      contractions:
        policy: "encouraged/allowed/discouraged/never"
        approved_list: ["don't", "we're", "you're", "it's", "that's"]
        avoid_list: ["ain't", "y'all", "gonna"]

    quotation_marks:
      style: "American/British"
      usage:
        - "Exact quotes from users or sources"
        - "Introducing new terminology (first use only)"
        - "Scare quotes (avoid - use italics instead)"
      punctuation_placement: "string (inside/outside quotes)"

    hyphens_and_dashes:
      hyphen_usage:
        - "Compound modifiers before nouns: 'real-time data'"
        - "Prefixes: Check dictionary (e.g., 're-sign' vs 'resign')"
        - "Numbers: 'Twenty-one through ninety-nine'"

      en_dash_usage: "string (ranges: '2020–2024')"
      em_dash_usage: "string (parenthetical—like this—or emphasis)"
      spacing: "string (no spaces around dashes)"

    ellipsis:
      usage: "string (indicate omission or trailing thought)"
      formatting: "three periods with spaces... like this"
      avoid: "Don't use for dramatic pauses in marketing"

    exclamation_points:
      policy: "sparingly/never in product/allowed in marketing"
      max_per_paragraph: "1"
      avoid: "Multiple!!! exclamation points!!!"

  capitalization:
    general_rules:
      sentence_case_vs_title_case:
        headlines: "title case/sentence case"
        subheadings: "sentence case"
        buttons: "sentence case/title case"
        navigation: "sentence case/title case"

      proper_nouns:
        - "Capitalize specific names, places, products"
        - "Lowercase general terms"
        examples:
          - "the internet (general) vs. Internet Explorer (product)"
          - "email (general) vs. Gmail (product)"

    brand_specific:
      product_names:
        - product: "ProductName"
          capitalization: "specific rule"
          never: "productname/PRODUCTNAME"

      feature_names:
        policy: "string"
        examples:
          - feature: "Feature Name"
            usage: "string"

      job_titles:
        policy: "string (capitalize when preceding name, lowercase when standalone)"
        examples:
          - "CEO Jane Smith"
          - "Jane Smith, chief executive officer"

  numbers_and_dates:
    numbers:
      spell_out: "one through nine"
      use_numerals: "10 and above"
      exceptions:
        - "Percentages: always numerals (5%)"
        - "Money: always numerals ($5)"
        - "Ages: always numerals (5 years old)"
        - "Time: always numerals (5:00 PM)"
        - "Measurements: always numerals (5 inches)"

      large_numbers:
        format: "string"
        examples:
          - "1,000 (use comma)"
          - "1.2 million (abbreviated)"
          - "1,200,000 (spelled out in legal)"

      ordinals:
        style: "string (1st, 2nd, 3rd or first, second, third)"
        context_rules: "string"

    dates:
      format: "Month DD, YYYY (March 15, 2024)"
      abbreviated: "MM/DD/YYYY or ISO 8601"
      ranges: "March 15–20, 2024"
      relative: "today, yesterday, last week (avoid 'recently')"

    time:
      format: "12-hour with AM/PM (2:30 PM EST)"
      time_zones: "always include for events"
      24_hour: "only in technical contexts"

  formatting:
    headings:
      hierarchy:
        h1: "Page title - one per page"
        h2: "Main sections"
        h3: "Subsections"
        h4: "Rare, only if absolutely necessary"

      capitalization: "title_case/sentence_case"
      length: "Keep under 60 characters"
      punctuation: "No periods at end"

    lists:
      bulleted_lists:
        when: "Unordered items, no priority"
        capitalization: "Sentence case for each item"
        punctuation: "No periods if fragments, periods if complete sentences"
        parallel_structure: "Required"

      numbered_lists:
        when: "Sequential steps, priority order"
        format: "1. 2. 3. (not 1) 2) 3))"
        consistency: "All items same grammatical structure"

      intro_text:
        policy: "string (colon after intro, or integrate into sentence)"
        examples:
          with_colon: "Complete these steps:"
          integrated: "To complete setup, you need to"

    links:
      link_text:
        - "Descriptive, not 'click here'"
        - "Make sense out of context"
        - "Indicate destination or action"

      examples:
        bad: "Click here for more information"
        good: "Read our privacy policy"

      formatting:
        underline: "system default"
        color: "brand link color"
        visited_links: "differentiated"

    emphasis:
      bold:
        when: "Key terms, important actions, warnings"
        avoid: "Entire sentences, paragraphs"

      italics:
        when: "Book titles, emphasis, foreign words (first use)"
        avoid: "Overuse - reduces impact"

      all_caps:
        when: "Acronyms only"
        avoid: "Regular text (reads as shouting)"

  word_usage:
    preferred_terms:
      - instead_of: "utilize"
        use: "use"
        rationale: "Simpler, clearer"

      - instead_of: "in order to"
        use: "to"
        rationale: "Concise"

      - instead_of: "at this point in time"
        use: "now"
        rationale: "Clear, brief"

    banned_words:
      - word: "leveraging"
        why: "Overused jargon"
        alternative: "using"

      - word: "synergy"
        why: "Vague buzzword"
        alternative: "collaboration"

    industry_jargon:
      policy: "string (define on first use/avoid/link to glossary)"
      approved_terms: ["term with definition"]
      terms_requiring_definition: ["technical term"]

    inclusive_language:
      gender_neutral:
        use: ["they/them/their (singular)", "people", "folks", "team"]
        avoid: ["guys", "he/she", "mankind"]

      disability:
        people_first: "person with disability (not disabled person)"
        exceptions: "Respect community preference (Deaf community, autistic person)"

      age:
        avoid: "Elderly, seniors, young people"
        use: "Older adults, specific age ranges, younger users"

      cultural:
        guidelines: "string"
        considerations: "string"

  brand_specific_rules:
    product_terminology:
      - term: "Dashboard"
        usage: "Capitalized when referring to our Dashboard feature"
        not: "dashboard (generic)"

      - term: "Projects"
        usage: "Capitalized, plural"
        context: "Our product feature"

    competitor_mentions:
      policy: "string (never/factual only/with respect)"
      guidelines: "string"

    legal_and_compliance:
      disclaimers:
        placement: "string"
        wording: "string"

      trademark_usage:
        our_marks: "Always use ® or ™ on first use"
        third_party: "Use as specified by owner"

      claims:
        policy: "All claims must be substantiated"
        approval: "Legal review required for superlatives"

  accessibility:
    alt_text:
      policy: "Required for all images"
      guidelines:
        - "Describe content and function"
        - "Keep under 125 characters when possible"
        - "Don't start with 'image of'"

    link_text:
      - "Descriptive, understandable out of context"
      - "Avoid 'click here', 'read more'"
      - "Indicate file type for downloads"

    readability:
      target_level: "string (e.g., '8th grade')"
      tools: ["Hemingway App", "readable.com"]
      checks:
        - "Sentence length variation"
        - "Paragraph length (3-4 sentences max)"
        - "Subheadings every 300 words"

  quality_checklist:
    pre_publication:
      - question: "Is the grammar correct?"
        check: "Run spell check, grammar check"

      - question: "Does it follow our style guide?"
        check: "Review formatting, punctuation, capitalization"

      - question: "Is it accessible?"
        check: "Alt text, link text, readability score"

      - question: "Is it accurate?"
        check: "Fact-check, verify claims, check links"

  tools_and_resources:
    recommended_tools:
      - tool: "Grammarly/Hemingway"
        purpose: "Grammar and readability"

      - tool: "Google Docs/Word"
        purpose: "Spell check, track changes"

    reference_materials:
      - "Approved word list"
      - "Glossary of terms"
      - "Voice and tone guide"
      - "Brand guidelines"

  governance:
    style_guide_maintenance:
      owner: "string (Editorial team)"
      review_frequency: "Quarterly"
      update_process: "string"
      version_control: "string"

    exception_process:
      when_allowed: "string"
      approval_required: "string (Editorial lead, brand team)"
      documentation: "Log all exceptions with rationale"
```

=== EXAMPLES ===

**Example 1: Technology Company Style Guide**
- base_manual: "Custom (influenced by AP Style)"
- sentence_length: "15-20 words average"
- oxford_comma: "always"
- contractions: "encouraged (friendly, conversational)"
- numbers: "Spell out one through nine, numerals for 10+"
- point_of_view: "Second person (you) for product, first person plural (we) for company"
- preferred_voice: "Active voice strongly preferred"
- key_rule: "No jargon without definition - assume smart but unfamiliar reader"

**Example 2: Academic Institution Style Guide**
- base_manual: "Chicago Manual of Style, 17th Edition"
- sentence_length: "Varies by context, scholarly tone"
- oxford_comma: "always"
- contractions: "never in formal publications, allowed in marketing"
- numbers: "Spell out one through one hundred, numerals for 101+"
- point_of_view: "Third person for research, second person for student communications"
- preferred_voice: "Passive voice acceptable in research contexts"
- key_rule: "Citations required for all claims, APA format"

**Example 3: Media Publication Style Guide**
- base_manual: "Associated Press (AP) Stylebook"
- sentence_length: "Short, punchy for readability"
- oxford_comma: "never (per AP Style)"
- contractions: "allowed, natural to journalism"
- numbers: "Spell out one through nine, numerals for 10+ (with exceptions)"
- point_of_view: "Third person objective, first person in opinion pieces only"
- preferred_voice: "Active voice required except where passive provides clarity"
- key_rule: "Attribution required for all quotes and facts from sources"

---

**Accessibility Requirements**: Style guide must promote WCAG 3.0 Level AA compliant content. Include guidelines for plain language, readability levels, and inclusive terminology. Ensure formatting recommendations support screen readers. Provide alt text guidance. Test examples with diverse users.

**Psychological Principles**: Consistency reduces cognitive load (consistency principle). Clear rules enable faster decisions (decision fatigue reduction). Examples accelerate learning (modeling). Rationales increase buy-in (understanding drives adoption). Accessible style broadens reach (inclusive design).

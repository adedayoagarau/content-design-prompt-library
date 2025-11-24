## "Did You Mean" Spelling Correction Design v1.0

**Purpose**: Create helpful spelling correction suggestions that catch typos and misspellings, offer accurate alternatives, maintain user confidence, and accelerate finding correct results without feeling condescending.

---

**PROMPT:**

You are designing "did you mean" correction messaging for {{search_context}} within {{site_type}}. Create correction copy that helps users fix {{error_types}}, suggests {{correction_source}} accurately, maintains {{brand_voice}}, and balances helpfulness with respect for user input.

=== CORRECTION CONTEXT ===
Search context: {{search_context}} (site search/product search/help search/command input)
Site type: {{site_type}} (e-commerce/content/documentation/SaaS/general)
Error types: {{error_types}} (typos/misspellings/wrong spellings/mixed languages)
Correction source: {{correction_source}} (dictionary/successful searches/product names/NLP)
Correction confidence: {{confidence}} (high/medium/low)
Auto-correction: {{auto_correct}} (yes/no/sometimes)

=== CORRECTION STRATEGY ===
Presentation style: {{presentation}} (suggestion banner/inline/auto-correct)
Message tone: {{message_tone}} (helpful/neutral/questioning)
Correction prominence: {{prominence}} (prominent/subtle)
Multiple suggestions: {{multiple}} (best only/top 3-5 alternatives)
User control: {{control}} (click to apply/automatic with undo/manual retyping)

=== OUTPUT REQUIREMENTS ===

```yaml
did_you_mean:
  primary_pattern:
    message_format:
      questioning: "Did you mean \"[corrected query]\"?"
      suggestive: "Showing results for \"[corrected query]\""
      declarative: "Results for \"[corrected query]\""

    recommended: "questioning for medium confidence, declarative for high confidence"

    examples:
      typo: "Did you mean \"headphones\"?"
      misspelling: "Did you mean \"bluetooth speaker\"?"
      plural_singular: "Showing results for \"laptop\" instead of \"laptops\""

  message_components:
    acknowledgment:
      include: true/false
      purpose: "recognize user's original query"

      formats:
        implicit: "Did you mean \"[correction]\"?" (original query not repeated)
        explicit: "No results for \"[original]\". Did you mean \"[correction]\"?"
        explicit_with_count: "No results for \"[original]\". Showing 234 results for \"[correction]\""

      recommendation: "implicit for simple corrections, explicit for zero results"

    corrected_query:
      formatting:
        bold: "make correction stand out"
        quotes: "in quotes to distinguish from message"
        linked: "clickable to trigger corrected search"

      examples:
        - "Did you mean \"<strong>wireless headphones</strong>\"?"
        - "Showing results for <a href='...'>\"bluetooth speaker\"</a>"

    original_query_option:
      include: "show link to search original query anyway"
      label: "Search instead for \"[original query]\""
      placement: "below correction suggestion"
      rationale: "respect user intent, maybe they meant something unusual"

  confidence_levels:
    high_confidence:
      threshold: ">90% confidence"
      behavior: "auto-correct with notification"

      message: "Showing results for \"[corrected]\" | Search instead for \"[original]\""

      rationale: "likely typo, save user a click"

    medium_confidence:
      threshold: "70-90% confidence"
      behavior: "suggest, require user click"

      message: "Did you mean \"[corrected]\"?"

      rationale: "probable correction, but let user decide"

    low_confidence:
      threshold: "<70% confidence"
      behavior: "offer as one of several suggestions or don't show"

      message: "Did you mean: [option 1] | [option 2] | [option 3]?"

      rationale: "uncertain, provide options"

  correction_types:
    simple_typo:
      examples:
        - "laptp" → "laptop"
        - "wireles" → "wireless"
        - "headpones" → "headphones"

      message: "Did you mean \"laptop\"?"

    common_misspelling:
      examples:
        - "accomodation" → "accommodation"
        - "seperate" → "separate"

      source: "spelling dictionary"

    plural_singular:
      examples:
        - "laptops" → "laptop" (or vice versa)
        - "mouse" → "mice"

      message: "Showing results for \"laptop\""

    compound_words:
      examples:
        - "lap top" → "laptop"
        - "blue tooth" → "bluetooth"

      message: "Did you mean \"laptop\"?"

    phonetic_match:
      examples:
        - "fone" → "phone"
        - "lite" → "light"

      source: "soundex algorithm"

    product_specific:
      examples:
        - "iphone 12" → "iPhone 12"
        - "playstation" → "PlayStation"

      message: "Showing results for \"iPhone 12\""
      rationale: "brand capitalization matters"

    mixed_language:
      examples:
        - "ordenador" → "computer" (Spanish to English)

      message: "Did you mean \"computer\"?"
      show_if: "multi-language site"

  multiple_suggestions:
    show_when: "low confidence or multiple plausible corrections"

    format: "Did you mean: [option 1] | [option 2] | [option 3]?"

    examples:
      - "Did you mean: laptop | desktop | tablet?"
      - "Showing results for \"laptop\". Did you mean: desktop | tablet?"

    limit: "3-5 suggestions maximum to avoid overwhelm"

    display:
      inline: "separated by pipes or commas"
      buttons: "clickable pill buttons"
      list: "vertical list of options"

  auto_correction_pattern:
    auto_correct_with_notification:
      trigger: "high confidence correction"

      message: "Showing results for \"[corrected]\" | <a>Search instead for \"[original]\"</a>"

      visual_placement: "banner above results"

      undo_option:
        label: "Search instead for \"[original]\""
        behavior: "click to search original query"
        accessibility: "clearly announced as alternative"

    benefits: ["faster results", "reduces friction"]
    risks: ["users may miss they were corrected", "wrong correction frustrates"]

    recommendation: "use for very high confidence (>95%) only"

  visual_design:
    placement:
      above_results: "prominent banner"
      inline_with_query: "near search input"
      below_search: "immediately below search bar"

    recommended: "above results, below any filters"

    styling:
      background: "subtle highlight (yellow tint or light blue)"
      icon: "optional lightbulb 💡 or suggestion icon"
      dismissible: "optional ✕ to close"

    corrected_query_styling:
      bold: true
      color: "brand color or link blue"
      underline: "if clickable link"

  mobile_optimizations:
    message_length:
      keep_concise: "shorter messages due to screen width"
      example: "Results for \"laptop\"" instead of "Showing 234 results for \"laptop\""

    touch_targets:
      correction_link: "48x48px minimum"
      undo_link: "48x48px minimum"
      spacing: "clear separation between links"

    stacking:
      layout: "may stack on multiple lines"
      example: |
        Showing results for "laptop"
        [Search instead for "laptp"]

  edge_cases:
    no_correction_available:
      behavior: "don't show correction if none found"
      fallback: "show zero results message with tips"

    correction_also_no_results:
      scenario: "corrected query also yields no results"
      behavior: "don't show correction"
      rationale: "correction should lead to results"

    user_ignores_multiple_times:
      learning: "if user repeatedly searches original despite corrections, maybe they're right"
      behavior: "reduce correction prominence or frequency"

    repeated_search:
      scenario: "user searches same term repeatedly"
      behavior: "don't repeat correction if already shown"

  contextual_variations:
    e_commerce:
      examples:
        - "Did you mean \"wireless headphones\"?"
        - "Showing 234 results for \"Bluetooth speaker\""

      product_focus: "correct to product names/brands"

    documentation:
      examples:
        - "Did you mean \"authentication\"?"

      technical_terms: "correct to technical vocabulary"

    help_center:
      tone: "more supportive"
      examples:
        - "Did you mean \"reset password\"?"
        - "Try searching for \"password reset\" instead"

    command_palette:
      immediate: "show suggestions as user types"
      examples:
        - "git comit" → "git commit"

  accessibility_implementation:
    semantic_structure:
      element: "<aside role='complementary'> or <div role='status'>"
      heading: "optional h2 'Search suggestion'"

    aria_attributes:
      correction_banner:
        aria_live: "'polite' - announce correction"
        aria_atomic: "true - announce full message"

      corrected_query_link:
        aria_label: "'Search for [corrected query]'"

      original_query_link:
        aria_label: "'Search instead for [original query]'"

    screen_reader_experience:
      announcement: "'Showing results for laptop. Search instead for laptp.'"
      timing: "announce after results load"

    keyboard_accessibility:
      tab_order: "correction links in logical order"
      enter_activation: "Enter key activates links"

    visual_accessibility:
      contrast: "4.5:1 minimum for text"
      link_distinction: "underline or bold, not color alone"
      focus_indicators: "2px outline, 3:1 contrast"

  international_considerations:
    language_detection:
      multi_language_sites: "detect query language"
      correction_language: "suggest in same language as query"

    character_sets:
      support: "Latin, Cyrillic, Asian characters, etc."
      correction_algorithm: "language-specific spelling rules"

    cultural_sensitivity:
      tone: "respectful correction regardless of culture"
      formality: "adjust based on language norms"

  analytics_tracking:
    events_to_track:
      - event: "correction_shown"
        properties: ["original_query", "corrected_query", "confidence_score"]

      - event: "correction_accepted"
        properties: ["original_query", "corrected_query", "click_or_auto"]

      - event: "correction_rejected"
        properties: ["original_query", "corrected_query", "searched_original"]

      - event: "auto_correction_undone"
        properties: ["corrected_query", "original_query"]

    insights:
      correction_accuracy: "acceptance rate by confidence level"
      common_typos: "most frequent corrections"
      false_positives: "corrections that users reject"
      auto_correct_undo_rate: "how often users undo auto-corrections"
```

=== CORRECTION COPY GUIDELINES ===

**Tone Best Practices**:
- Helpful, not condescending: "Did you mean..." not "You meant..."
- Questioning, not assuming: "Did you mean" > "Showing results for" (unless very confident)
- Respectful: always offer original query option
- Brand-appropriate: adjust formality to match site voice

**Message Clarity**:
- Make correction obvious: use bold, quotes, color
- Keep concise: short messages scan faster
- Be specific: show exact correction, not vague hints
- Provide control: always allow searching original

**Visual Hierarchy**:
- Correction prominent: should be easy to spot and click
- Original query option: present but less prominent
- Not error-like: avoid red, warning icons
- Suggestive: use colors like blue (link) or yellow (suggestion)

**Avoid These Mistakes**:
- ✗ Auto-correcting low confidence suggestions
- ✗ "Did you mean..." for properly spelled niche terms
- ✗ Not offering original query option
- ✗ Repeating correction on every page
- ✗ Too many suggestions (limit to 3-5)

=== EXAMPLES ===

**Example 1: E-commerce High Confidence Correction**
- search_context: "product search"
- site_type: "e-commerce electronics"
- error_types: "simple typo"
- confidence: "high (>95%)"
- auto_correct: "yes"

**Output**:
```yaml
did_you_mean:
  primary_pattern:
    message_format: "Showing results for \"[corrected]\""

    example: "Showing results for \"wireless headphones\" | Search instead for \"wireles headpones\""

  confidence_levels:
    high_confidence:
      behavior: "auto-correct with notification and undo option"

      message_structure: |
        [Icon] Showing results for "<strong>wireless headphones</strong>"
        <a>Search instead for "wireles headpones"</a>

  visual_design:
    placement: "above product grid"
    styling:
      background: "light blue tint (#E3F2FD)"
      icon: "💡 lightbulb"
```

**Example 2: Documentation Medium Confidence**
- search_context: "documentation search"
- site_type: "technical documentation"
- error_types: "technical term misspelling"
- confidence: "medium (80%)"
- auto_correct: "no"

**Output**:
```yaml
did_you_mean:
  primary_pattern:
    message_format: "Did you mean \"[corrected]\"?"

    example: "Did you mean \"<strong>authentication</strong>\"?"

  confidence_levels:
    medium_confidence:
      behavior: "suggest, require user click"

      message_structure: |
        Did you mean "<a>authentication</a>"?

  visual_design:
    placement: "above search results"
    styling:
      background: "none, inline text"
      corrected_term: "blue link, bold"
```

**Example 3: Multiple Suggestions (Low Confidence)**
- search_context: "site search"
- site_type: "content platform"
- error_types: "ambiguous query"
- confidence: "low (<70%)"
- auto_correct: "no"

**Output**:
```yaml
did_you_mean:
  multiple_suggestions:
    show: true

    format: "Did you mean: [option 1] | [option 2] | [option 3]?"

    example: "Did you mean: <a>laptop</a> | <a>tablet</a> | <a>desktop</a>?"

    display: "inline with pipes"

    limit: "3 suggestions"

  visual_design:
    placement: "above results"
    styling:
      links: "blue, separated by gray pipes"
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Use semantic HTML (aside or div with appropriate role). Implement aria-live="polite" for correction announcements. Provide clear accessible names for correction links ("Search for wireless headphones"). Ensure keyboard access to all correction options with Tab and Enter. Provide visible focus indicators (2px outline, 3:1 contrast). Maintain 4.5:1 color contrast for text. Make touch targets minimum 44x44px on mobile. Announce corrections to screen readers after results load, not during typing. Ensure original query option is keyboard accessible. Test with screen readers to verify correction and original query options are clearly distinguished.

**Psychological Principles**: Error prevention and recovery (catch mistakes before wasted time). Cognitive fluency (easier to click suggestion than retype). Loss aversion (auto-correct may feel like losing control, provide undo). Satisficing behavior (users likely to accept first reasonable suggestion). Social proof (corrections based on successful searches leverage crowd wisdom). Confirmation bias (users may think they spelled correctly, gentle questioning tone). Face-saving (respectful messaging protects user ego). Path of least resistance (clickable corrections reduce friction). Recognition over recall (showing correction vs. expecting user to figure it out). Learned helplessness prevention (providing control prevents frustration).

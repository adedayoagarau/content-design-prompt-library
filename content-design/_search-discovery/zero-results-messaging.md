## Zero Results Messaging Design v1.0

**Purpose**: Create helpful, empathetic zero results messages that acknowledge the user's failed search, provide actionable recovery options, suggest alternatives, and maintain engagement rather than creating frustration or abandonment.

---

**PROMPT:**

You are designing zero results messaging for {{search_context}} within {{site_type}}. Create messages that acknowledge the user searched for {{failed_query_type}}, offer {{recovery_options}} to help them succeed, maintain {{brand_voice}}, and prevent search abandonment.

=== ZERO RESULTS CONTEXT ===
Search context: {{search_context}} (product search/content search/help center/internal search)
Site type: {{site_type}} (e-commerce/content site/SaaS/documentation/marketplace)
Failed query type: {{failed_query_type}} (misspellings/too specific/non-existent/filtered out)
Recovery options available: {{recovery_options}} (suggestions/filters/browse/contact)
Search data available: {{search_data}} (popular searches/related items/trending)
Brand relationship: {{brand_relationship}} (transactional/service-oriented/community)

=== MESSAGE STRATEGY ===
Primary message tone: {{message_tone}} (apologetic/helpful/neutral/encouraging)
Recovery emphasis: {{recovery_focus}} (fix query/browse alternatives/contact support)
Personalization: {{personalization}} (generic/context-aware/user-history-based)
Visual treatment: {{visual_treatment}} (text only/illustration/empty state design)
Technical transparency: {{transparency}} (explain why no results/keep simple)

=== OUTPUT REQUIREMENTS ===

```yaml
zero_results_messaging:
  primary_message:
    headline: "string (main zero results message)"
    character_count: number
    tone: "apologetic/neutral/helpful/encouraging"
    rationale: "why this headline is effective"

    alternative_options:
      - headline: "variation 1"
        tone: "different approach"
        use_case: "when this is better"

  message_components:
    acknowledgment:
      purpose: "recognize user's search and validate effort"
      examples:
        empathetic: "We couldn't find any matches for '[query]'"
        neutral: "No results found for '[query]'"
        apologetic: "Sorry, we couldn't find '[query]'"

      query_display:
        show_query: true
        formatting: "bold or quoted to distinguish from body text"
        sanitize: "remove potentially offensive input"
        truncate: "at reasonable length (50-80 chars)"

    explanation:
      include: true/false
      purpose: "help user understand why search failed"

      explanation_types:
        spelling: "Check your spelling or try different keywords"
        too_specific: "Try more general terms or fewer filters"
        out_of_stock: "This product is currently unavailable"
        filter_too_restrictive: "No items match all your selected filters"
        no_index: "This content hasn't been indexed yet"

      keep_simple: "avoid technical jargon, focus on user actions"

    encouragement:
      purpose: "maintain positive user experience"
      examples:
        - "Don't give up! Try one of these options."
        - "Let's find what you're looking for."
        - "We're here to help you find what you need."

  recovery_options:
    search_suggestions:
      show_did_you_mean: true
      suggestion_text: "Did you mean '[suggested query]'?"
      click_action: "auto-populate and search"
      source: "spell check, similar successful searches"

    search_tips:
      heading: "Search tips:"
      tips:
        - "Check your spelling"
        - "Try more general keywords"
        - "Use fewer words"
        - "Try different keywords"
      format: "bulleted list, scannable"

    remove_filters:
      show_if: "active filters applied"
      message: "Try removing some filters to see more results"
      action_button: "Clear all filters"
      individual_filter_removal: "show active filters with X to remove"

    popular_searches:
      heading: "Popular searches:"
      display: "clickable links or pills"
      content: "top 5-8 searches, contextually relevant"
      rationale: "provides inspiration, shows what others find"

    category_browse:
      heading: "Browse by category:" or "Explore these sections:"
      display: "category links or cards with images"
      rationale: "shift from search to browse mode"

    related_content:
      heading: "You might like:" or "Similar items:"
      content: "algorithm-based recommendations"
      rationale: "keep user engaged with alternatives"

    contact_support:
      show_when: "particularly for help/support searches"
      message: "Can't find what you need?"
      cta: "Contact Support" or "Chat with us"
      rationale: "human help for complex needs"

    view_all:
      message: "Or browse all [content type]"
      link: "View all products / View all articles"
      rationale: "escape hatch to see everything"

  contextual_variations:
    product_search:
      headline: "No products found for '[query]'"
      recovery_primary: "suggestions, category browse, popular products"

      out_of_stock_specific:
        headline: "This product is currently out of stock"
        options: ["Notify me when available", "View similar products", "Browse category"]

    content_search:
      headline: "No articles found for '[query]'"
      recovery_primary: "search tips, popular articles, category browse"

    help_center:
      headline: "We couldn't find help articles for '[query]'"
      recovery_primary: "contact support, browse FAQs, reformulate search"
      tone: "more empathetic, service-oriented"

    filtered_search:
      headline: "No results match all your filters"
      subtext: "Try removing some filters to see more results"
      recovery_primary: "show active filters with remove options"
      visual: "display filter chips with X icons"

    internal_tool:
      headline: "No files found for '[query]'"
      recovery_primary: "search tips, recent files, browse folders"

    misspelling_detected:
      headline: "No results for '[misspelled query]'"
      did_you_mean: "Did you mean '[corrected query]'?" (prominent, clickable)
      auto_correct: "option to automatically search corrected term"

    too_many_filters:
      headline: "Your search is too specific"
      subtext: "Try using fewer filters or broader keywords"
      show_filters: "display active filters with ability to remove"

  visual_design:
    empty_state_illustration:
      include: true/false
      style: "friendly character/search icon/abstract/none"
      mood: "empathetic, not frustrated"
      avoid: "error icons (X, warning) - not an error, just no results"

    layout:
      message_position: "centered in results area"
      white_space: "generous, not cramped"
      hierarchy: "headline > explanation > recovery options"

    cta_styling:
      primary_action: "bold button (e.g., 'Clear filters', 'Browse all')"
      secondary_actions: "text links or ghost buttons"
      spacing: "clear separation between options"

  progressive_disclosure:
    initial_display:
      show: "headline, primary recovery option"
      hide: "detailed tips, full category list"

    expand_for_more:
      trigger: "user doesn't take action after 5-10 seconds"
      reveal: "additional suggestions, browse options, contact"
      rationale: "keep initial view simple, offer more help if needed"

  personalization:
    search_history:
      use_if_available: true
      message: "Try searching for [previous successful search]"
      rationale: "return to something that worked"

    browsing_history:
      recommendation: "Or continue browsing [previously viewed category]"

    location_based:
      filter_suggestion: "Try expanding your search radius"
      use_case: "local search, store finder"

  analytics_and_learning:
    track_zero_results:
      log_query: true
      log_filters: true
      log_user_action: "which recovery option they chose"

    insights_for_improvement:
      frequent_zero_results: "indicate content gaps or search algorithm issues"
      common_misspellings: "add to search dictionary"
      abandoned_searches: "users leaving after zero results"

    a_b_testing:
      test_message_tone: "apologetic vs. neutral vs. helpful"
      test_recovery_order: "which options presented first"
      test_visual_treatment: "with/without illustration"

  accessibility_implementation:
    screen_reader_announcement:
      announce: "No results found for [query]. Here are some suggestions."
      aria_live: "polite region for zero results message"

    focus_management:
      on_zero_results: "move focus to zero results message or first recovery option"
      keyboard_navigation: "ensure all recovery options keyboard accessible"

    visual_accessibility:
      contrast: "4.5:1 minimum for text"
      text_hierarchy: "proper heading structure (h1, h2, etc.)"

  mobile_optimization:
    condensed_message:
      headline: "same as desktop"
      recovery_options: "prioritize top 2-3 options, fold others"
      stacking: "vertical layout, generous tap targets"

    touch_targets:
      button_size: "44x44px minimum"
      spacing: "clear separation between tappable elements"

  multilingual_considerations:
    translation_quality:
      avoid_idioms: "phrases that don't translate well"
      cultural_sensitivity: "apologetic tone varies by culture"

    query_display:
      rtl_languages: "ensure proper text direction for query display"
      character_sets: "support all language character sets"
```

=== ZERO RESULTS COPY GUIDELINES ===

**Headline Formulas**:
- Direct: "No results found for '[query]'"
- Apologetic: "Sorry, we couldn't find '[query]'"
- Empathetic: "We couldn't find any matches for '[query]'"
- Action-oriented: "Let's find what you're looking for"
- Avoid blame: NOT "Your search returned no results" (implies user error)

**Tone Considerations**:
- Empathetic > Apologetic: acknowledge without over-apologizing
- Helpful > Neutral: provide actionable next steps
- Positive > Negative: "Try these options" vs. "Nothing found"
- Brand-appropriate: match overall site voice

**Recovery Option Priority**:
1. Fix the search: spell check, suggestions, tips
2. Relax constraints: remove filters, broaden search
3. Browse alternatives: categories, popular items
4. Get help: contact support, chat
5. View all: see everything available

**Avoid These Mistakes**:
- ✗ "Error: No results" (it's not an error)
- ✗ "Try again later" (search failure isn't temporary)
- ✗ "No products exist" (too final, hopeless)
- ✗ Dead ends with no recovery options
- ✗ Blaming the user: "You searched for..."

=== EXAMPLES ===

**Example 1: E-commerce Product Search**
- search_context: "product search"
- site_type: "e-commerce electronics"
- failed_query_type: "product doesn't exist or misspelling"
- recovery_options: "suggestions, category browse, popular products"
- brand_voice: "helpful and encouraging"

**Output**:
```yaml
zero_results_messaging:
  primary_message:
    headline: "We couldn't find any products matching \"[query]\""
    character_count: 48 (+ query length)
    tone: "empathetic and helpful"
    rationale: "Acknowledges user's search without being overly apologetic, stays positive"

  message_components:
    acknowledgment:
      example: "We couldn't find any products matching \"wireless earbuds 2000\""
      query_display:
        show_query: true
        formatting: "in quotes, bold"

    explanation:
      include: true
      text: "Try checking your spelling or using more general terms."

  recovery_options:
    search_suggestions:
      show_did_you_mean: true
      example: "Did you mean 'wireless earbuds'?"

    search_tips:
      heading: "Search tips:"
      tips:
        - "Check your spelling"
        - "Use more general terms (try 'earbuds' instead of 'earbuds 2000')"
        - "Try different keywords ('headphones' instead of 'earbuds')"

    category_browse:
      heading: "Browse popular categories:"
      categories:
        - "Headphones & Earbuds"
        - "Audio Equipment"
        - "Bluetooth Devices"
      display: "clickable category cards with images"

    popular_searches:
      heading: "Popular searches:"
      searches:
        - "wireless headphones"
        - "noise cancelling earbuds"
        - "gaming headset"
        - "bluetooth speakers"
      display: "clickable pill buttons"

  visual_design:
    empty_state_illustration:
      include: true
      style: "friendly search icon with magnifying glass"
      mood: "helpful, not frustrated"

    layout:
      structure: |
        [Illustration]
        [Headline: We couldn't find...]
        [Did you mean...?]
        [Search tips]
        [Browse categories]
        [Popular searches]
```

**Example 2: Filtered Search (Too Restrictive)**
- search_context: "filtered product search"
- site_type: "e-commerce fashion"
- failed_query_type: "too many filters applied"
- recovery_options: "remove filters, relax constraints"
- brand_voice: "conversational and helpful"

**Output**:
```yaml
zero_results_messaging:
  primary_message:
    headline: "No items match all your filters"
    tone: "neutral and solution-focused"
    rationale: "Directly states the problem, immediately suggests solution"

  message_components:
    explanation:
      include: true
      text: "Try removing some filters to see more results."

  recovery_options:
    remove_filters:
      show_if: "active filters applied"
      message: "Active filters:"
      display: |
        [Price: $50-$100] ✕
        [Brand: Nike] ✕
        [Color: Red] ✕
        [Size: Medium] ✕

      action_button: "Clear all filters"
      individual_removal: "X on each filter chip to remove individually"

    relax_filters:
      suggestions:
        - heading: "Try a broader price range"
          action: "Change Price: $50-$100 to $25-$150"

        - heading: "See results in similar colors"
          action: "Remove Color: Red filter"

    view_all:
      message: "Or view all items in this category"
      link: "View all Women's Shoes"

  visual_design:
    layout:
      structure: |
        [Headline: No items match all your filters]
        [Subtext: Try removing some filters]
        [Active Filters display with X to remove]
        [Clear all filters button]
        [Or view all items link]
```

**Example 3: Help Center Search**
- search_context: "help center article search"
- site_type: "SaaS help center"
- failed_query_type: "can't find relevant help article"
- recovery_options: "contact support, browse FAQs, search tips"
- brand_voice: "supportive and service-oriented"

**Output**:
```yaml
zero_results_messaging:
  primary_message:
    headline: "We couldn't find any help articles for \"[query]\""
    tone: "empathetic and supportive"
    rationale: "Acknowledges search, emphasizes we want to help"

  message_components:
    encouragement:
      text: "But don't worry—we're here to help you find what you need."

    explanation:
      include: true
      text: "Try using different keywords or browse our help topics below."

  recovery_options:
    contact_support:
      priority: "primary"
      message: "Can't find what you need?"
      cta_button: "Contact Support"
      secondary_cta: "Start Live Chat"
      rationale: "human support for complex issues"

    search_tips:
      heading: "Try these search tips:"
      tips:
        - "Use simple keywords (try 'password reset' instead of 'I forgot my password')"
        - "Check your spelling"
        - "Browse by topic below"

    browse_topics:
      heading: "Browse help topics:"
      topics:
        - "Getting Started"
        - "Account & Billing"
        - "Troubleshooting"
        - "Security & Privacy"
      display: "category cards, clickable"

    popular_articles:
      heading: "Popular help articles:"
      articles:
        - "How to reset your password"
        - "Billing and payment questions"
        - "Getting started guide"

  visual_design:
    empty_state_illustration:
      include: true
      style: "friendly support character"
      mood: "helpful, ready to assist"

    cta_styling:
      primary_action: "Contact Support (prominent blue button)"
      secondary_actions: "browse topics (cards)"
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Use proper heading hierarchy for zero results message (h1 or h2). Announce zero results to screen readers using aria-live="polite" region. Ensure focus management moves to zero results area when results clear. Maintain 4.5:1 color contrast for all text. Make all recovery option links and buttons keyboard accessible. Provide clear focus indicators (2px outline minimum, 3:1 contrast). Ensure illustrations have appropriate alt text or are marked decorative. Test with screen readers to verify logical reading order. Support keyboard navigation through all recovery options. Avoid relying solely on color to communicate status.

**Psychological Principles**: Loss aversion mitigation (frame as opportunity, not failure). Cognitive fluency (simple, clear language reduces frustration). Learned helplessness prevention (actionable options prevent giving up). Zeigarnik effect (unfinished search motivates trying recovery options). Social proof (popular searches show what works for others). Choice architecture (order recovery options by likelihood of success). Endowment effect (user invested in finding something, help them succeed). Recovery paradox (good zero results experience can increase brand trust). Cognitive load reduction (prioritize most useful options first). Hope and agency (empowering language maintains motivation).

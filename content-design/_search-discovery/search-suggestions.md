## Search Suggestions & Autocomplete Design v1.0

**Purpose**: Create effective search suggestions and autocomplete experiences that help users formulate queries faster, discover content they didn't know about, reduce typos, and provide intelligent guidance while respecting privacy and performance.

---

**PROMPT:**

You are designing search suggestions for {{search_context}} within {{site_type}}. Create suggestion copy and patterns that help users find {{content_types}} faster, discover {{suggestion_sources}}, reduce friction in {{user_search_behavior}}, and maintain {{brand_voice}}.

=== SUGGESTION CONTEXT ===
Search context: {{search_context}} (site search/product search/command palette/help search)
Site type: {{site_type}} (e-commerce/content/SaaS/marketplace/documentation)
Content types: {{content_types}} (products/articles/commands/people/mixed)
Suggestion sources: {{suggestion_sources}} (query completion/popular searches/history/trending)
User search behavior: {{user_search_behavior}} (exploratory/purposeful/repeated/expert)
Trigger mechanism: {{trigger}} (on focus/after X characters/on typing/manual)

=== SUGGESTION STRATEGY ===
Suggestion types: {{suggestion_types}} (autocomplete/recent searches/trending/categories)
Number of suggestions: {{suggestion_count}} (typically 5-10)
Personalization level: {{personalization}} (none/based on history/contextual/AI-powered)
Visual presentation: {{visual_style}} (text only/with icons/with images/rich previews)
Performance requirement: {{performance}} (< 100ms/<200ms/<500ms latency)

=== OUTPUT REQUIREMENTS ===

```yaml
search_suggestions:
  suggestion_types:
    query_autocomplete:
      description: "complete user's partial query"
      display_format: "[user typed]<strong>[completion]</strong>"
      example:
        user_typed: "wireless"
        suggestions:
          - "wireless headphones"
          - "wireless mouse"
          - "wireless keyboard"
          - "wireless charger"

      character_minimum: "2-3 characters before showing"
      update_frequency: "on every keystroke (debounced 150-200ms)"
      ranking: "relevance, popularity, personalization"

    popular_searches:
      description: "show what others are searching"
      heading: "Popular searches" or "Trending now"
      display: "separate section or mixed with autocomplete"
      count: "3-5 suggestions"

      examples:
        - "wireless headphones"
        - "gaming laptop"
        - "standing desk"

      update_frequency: "hourly/daily based on search volume"
      icon: "🔥 fire or 📈 trending indicator"

    recent_searches:
      description: "user's own search history"
      heading: "Recent searches" or "Your searches"
      privacy: "stored locally or server-side with clear privacy policy"
      display: "top 3-5 recent searches"
      clear_option: "X to remove individual or clear all"

      examples:
        - "wireless mouse (2 hours ago)"
        - "bluetooth keyboard (yesterday)"

      icon: "🕐 clock or ⟲ history indicator"

    category_suggestions:
      description: "suggest browsing by category"
      heading: "Categories"
      display: "category name + result count"

      examples:
        - "Electronics (234 items)"
        - "Office Supplies (89 items)"

    product_suggestions:
      description: "suggest specific products/items"
      heading: "Products" or "Suggestions"
      display: "product name + image + price"
      limit: "3-5 specific items"

      rich_preview:
        image: "thumbnail 40-60px"
        title: "product name"
        metadata: "price, rating, availability"

    related_queries:
      description: "semantically related searches"
      heading: "Related searches"
      examples:
        query: "laptop"
        related:
          - "laptop bags"
          - "laptop stands"
          - "laptop deals"

      ai_powered: "use semantic search for intelligent relations"

  suggestion_display:
    dropdown_panel:
      trigger: "appears below search input"
      width: "matches search input width or wider"
      max_height: "10 suggestions visible, scroll for more"
      background: "white/light with subtle shadow"
      z_index: "high enough to overlay content"

    suggestion_item:
      height: "40-48px for touch-friendly tapping"
      padding: "12-16px horizontal"
      hover_state: "background highlight"
      active_state: "keyboard selected, distinguished from hover"

      text_formatting:
        user_input: "regular weight"
        completion: "bold weight to distinguish"
        example: "wireless <strong>headphones</strong>"

      icon_placement:
        left_side: "suggestion type icon (search, clock, trending)"
        right_side: "optional arrow → or category/result count"

    visual_hierarchy:
      grouping: "separate sections with headings"
      dividers: "subtle lines between sections"

      example_structure: |
        Recent Searches
        - wireless mouse
        - bluetooth speaker
        _______________
        Suggestions
        - wireless headphones
        - wireless keyboard
        _______________
        Popular
        - gaming laptop

  interaction_patterns:
    keyboard_navigation:
      down_arrow: "select next suggestion"
      up_arrow: "select previous suggestion"
      enter: "execute selected suggestion"
      tab: "accept suggestion, continue typing"
      escape: "close suggestions dropdown"
      home_end: "first/last suggestion"

    mouse_interaction:
      hover: "highlight suggestion"
      click: "execute suggestion search"
      click_clear: "X icon removes from recent searches"

    touch_interaction:
      tap: "execute suggestion"
      long_press: "optional - remove from recent searches"
      touch_targets: "minimum 44x44px"

    suggestion_execution:
      behavior: "populate search box and execute search"
      alternative: "populate search box, user must press enter"
      recommendation: "execute immediately for efficiency"

  suggestion_ranking:
    relevance_factors:
      - factor: "query match strength"
        weight: "highest"
      - factor: "popularity (search volume)"
        weight: "high"
      - factor: "user history"
        weight: "medium"
      - factor: "recency (trending)"
        weight: "medium"
      - factor: "business priority"
        weight: "low"

    personalization:
      user_history_weight: "boost queries user searched before"
      browsing_behavior: "suggest based on viewed items"
      purchase_history: "e-commerce: suggest related to past purchases"
      opt_out: "allow users to disable personalization"

    diversity:
      avoid_repetition: "don't show near-identical suggestions"
      mix_types: "combine autocomplete, categories, products"
      example: "3 query completions + 2 category suggestions + 3 products"

  contextual_variations:
    no_suggestions_state:
      scenario: "user typed query with no matches"
      display: "show popular searches or empty state"
      message: "Try these popular searches"

    loading_state:
      delay_threshold: ">200ms to show loader"
      indicator: "spinner or skeleton in suggestion area"
      timeout: "show suggestions when ready or error message"

    error_state:
      scenario: "API failure, network error"
      fallback: "show cached suggestions or recent searches"
      message: "Using offline suggestions"

    empty_input_state:
      trigger: "user focuses search without typing"
      display_options:
        - "recent searches"
        - "popular searches"
        - "trending searches"
        - "nothing (wait for input)"

      recommendation: "show recent + popular for inspiration"

    filtered_context:
      scenario: "active filters applied"
      suggestions: "scoped to filtered results"
      indicator: "show filter context in suggestions"
      example: "wireless headphones in Electronics (23)"

  privacy_and_data:
    recent_searches_storage:
      method: "localStorage/sessionStorage/server-side"
      retention: "30 days typical"
      clear_option: "user can clear history"
      privacy_label: "Search history is private"

    personalization_disclosure:
      message: "Suggestions based on your searches"
      opt_out: "Settings to disable personalized suggestions"

    data_collection:
      log_queries: "anonymized search terms for analytics"
      log_clicks: "which suggestions are selected"
      privacy_compliance: "GDPR, CCPA compliant"

  performance_optimization:
    debouncing:
      delay: "150-200ms after last keystroke"
      rationale: "balance responsiveness with API load"

    caching:
      strategy: "cache popular queries client-side"
      invalidation: "refresh daily or on deploy"

    lazy_loading:
      product_images: "load images as user scrolls suggestions"
      prefetching: "prefetch likely next suggestions"

    api_optimization:
      response_time: "<100ms target"
      fallback: "show cached suggestions if slow"

  mobile_optimizations:
    dropdown_adaptation:
      full_screen_option: "overlay search suggestions full screen"
      rationale: "easier tapping, clearer focus on mobile"

    touch_targets:
      size: "48-56px height minimum"
      spacing: "clear separation between items"

    keyboard_handling:
      virtual_keyboard: "adjust suggestion position above keyboard"
      done_button: "execute search from keyboard"

    gesture_support:
      swipe_to_delete: "swipe recent search item to remove"

  accessibility_implementation:
    semantic_structure:
      combobox_role: "role='combobox' on search input"
      listbox_role: "role='listbox' on suggestions container"
      option_role: "role='option' on each suggestion"

    aria_attributes:
      aria_autocomplete: "'list' or 'both'"
      aria_expanded: "true when suggestions visible"
      aria_activedescendant: "ID of currently selected suggestion"
      aria_controls: "ID of suggestions listbox"

    keyboard_accessibility:
      full_keyboard_control: "all interactions possible via keyboard"
      focus_visible: "clear indication of selected suggestion"
      escape_hatch: "Escape key always closes suggestions"

    screen_reader_support:
      announcement: "announce when suggestions appear"
      aria_live: "polite region for suggestion updates"
      selection_announcement: "announce selected suggestion"
      count: "announce number of suggestions available"

    visual_accessibility:
      contrast: "4.5:1 minimum for text"
      focus_indicator: "3:1 contrast for selection highlight"
      color_independence: "don't rely solely on color for selection"

  analytics_tracking:
    events_to_track:
      - event: "suggestion_displayed"
        properties: ["query", "suggestion_type", "suggestion_count"]

      - event: "suggestion_selected"
        properties: ["query", "selected_suggestion", "position", "type"]

      - event: "suggestion_ignored"
        properties: ["query", "typed_instead", "suggestions_shown"]

      - event: "recent_search_used"
        properties: ["query", "age_of_search"]

    insights:
      suggestion_acceptance_rate: "% of searches using suggestions"
      position_bias: "which positions get clicked most"
      type_effectiveness: "autocomplete vs recent vs popular"
      typing_reduction: "characters saved by accepting suggestions"
```

=== SUGGESTION COPY GUIDELINES ===

**Autocomplete Text**:
- Show completion only: "wireless **headphones**" (user typed "wireless")
- Front-load user's query: matches should start with user input
- Use bold for completion portion: helps distinguish what's added
- Keep concise: suggestions should fit on one line

**Section Headings**:
- Clear and brief: "Recent", "Popular", "Suggestions", "Products"
- Optional: can omit headings if context is clear
- Consistent: use same headings across site

**Category Suggestions**:
- Format: "[Category name] ([result count])"
- Examples: "Laptops (45)", "Headphones (123)"
- Result counts: help users gauge selection size

**Product Suggestions**:
- Product name: clear, descriptive
- Price: include if relevant
- Availability: "In stock" or "Low stock" indicators
- Rating: optional star rating

**Recent Searches**:
- Show query as typed by user
- Optional timestamp: "2 hours ago", "Yesterday"
- Clear option: visible X or "Clear" button

=== EXAMPLES ===

**Example 1: E-commerce Product Search**
- search_context: "product search"
- site_type: "e-commerce electronics"
- content_types: "products, categories"
- suggestion_sources: "autocomplete, popular, recent, products"
- user_search_behavior: "mix of exploratory and purposeful"

**Output**:
```yaml
search_suggestions:
  suggestion_types:
    query_autocomplete:
      user_typed: "wireless"
      suggestions:
        - "wireless <strong>headphones</strong>"
        - "wireless <strong>mouse</strong>"
        - "wireless <strong>keyboard</strong>"
        - "wireless <strong>charger</strong>"
        - "wireless <strong>earbuds</strong>"

      ranking: "popularity + user history"

    category_suggestions:
      heading: "Categories"
      suggestions:
        - "Headphones & Audio (234)"
        - "Computer Accessories (156)"
        - "Mobile Accessories (89)"

    product_suggestions:
      heading: "Products"
      suggestions:
        - product: "Sony WH-1000XM5 Wireless Headphones"
          image: "[thumbnail]"
          price: "$399"
          rating: "4.8★"

        - product: "Apple AirPods Pro (2nd Gen)"
          image: "[thumbnail]"
          price: "$249"
          rating: "4.7★"

    recent_searches:
      heading: "Recent"
      suggestions:
        - "wireless mouse [X]"
        - "bluetooth speaker [X]"

  suggestion_display:
    dropdown_panel:
      width: "600px (wider than search input for product previews)"
      layout: "2 columns: left for queries/categories, right for products"

  interaction_patterns:
    suggestion_execution:
      behavior: "click executes search immediately"

  mobile_optimizations:
    dropdown_adaptation:
      full_screen_option: true
      rationale: "easier to view products, tap suggestions on mobile"
```

**Example 2: Documentation Search**
- search_context: "documentation search"
- site_type: "technical documentation"
- content_types: "doc pages, API methods, guides"
- suggestion_sources: "autocomplete, recent, popular pages"
- user_search_behavior: "purposeful, specific lookups"

**Output**:
```yaml
search_suggestions:
  suggestion_types:
    query_autocomplete:
      user_typed: "auth"
      suggestions:
        - "auth<strong>entication</strong>"
        - "auth<strong>entication hooks</strong>"
        - "auth<strong>entication providers</strong>"
        - "auth<strong>orization</strong>"

    popular_searches:
      heading: "Popular in Docs"
      suggestions:
        - "getting started"
        - "API reference"
        - "authentication"

    recent_searches:
      heading: "Your Recent Searches"
      suggestions:
        - "React hooks [X]"
        - "API rate limits [X]"

    page_suggestions:
      heading: "Pages"
      suggestions:
        - "Authentication Guide"
        - "OAuth 2.0 Setup"
        - "API Authentication Reference"

      display: "page title + breadcrumb context"

  suggestion_display:
    suggestion_item:
      text_formatting:
        page_title: "bold"
        breadcrumb: "muted gray, smaller"
        example: "Authentication Guide\n  > Getting Started > Security"

  performance_optimization:
    response_time: "<50ms (critical for developer tools)"
```

**Example 3: Content Platform Search**
- search_context: "article/video search"
- site_type: "streaming/content platform"
- content_types: "titles, people, genres"
- suggestion_sources: "autocomplete, trending, recommended"
- user_search_behavior: "exploratory, inspiration-seeking"

**Output**:
```yaml
search_suggestions:
  suggestion_types:
    query_autocomplete:
      user_typed: "com"
      suggestions:
        - "com<strong>edy movies</strong>"
        - "com<strong>ing of age</strong>"
        - "com<strong>edy specials</strong>"

    trending_searches:
      heading: "🔥 Trending Now"
      suggestions:
        - "new releases"
        - "award winners"
        - "top rated 2025"
      icon: "🔥"

    content_suggestions:
      heading: "Shows & Movies"
      suggestions:
        - title: "The Comedy Show"
          type: "TV Series"
          year: "2025"
          image: "[thumbnail]"
          rating: "95% match"

        - title: "Coming Home"
          type: "Movie"
          year: "2024"
          image: "[thumbnail]"
          rating: "87% match"

  suggestion_display:
    dropdown_panel:
      rich_preview: true
      images: "prominent thumbnails"

  personalization:
    user_history_weight: "high - recommend based on viewing history"
    message: "Based on what you've watched"
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Implement proper ARIA combobox pattern (role="combobox" on input, role="listbox" on suggestions, role="option" on items). Use aria-autocomplete, aria-expanded, aria-activedescendant for state management. Support full keyboard navigation (arrow keys, Enter, Escape, Tab). Announce suggestions to screen readers using aria-live="polite". Provide clear visual focus indicators (2px outline minimum, 3:1 contrast). Maintain 4.5:1 text contrast. Ensure touch targets are minimum 44x44px on mobile. Test with screen readers to verify logical reading order and announcements. Avoid auto-submitting without user confirmation. Respect user's motion preferences (reduce animations if prefers-reduced-motion).

**Psychological Principles**: Cognitive fluency (suggestions reduce typing effort and mental load). Recognition over recall (seeing options vs. remembering terms). Priming effect (suggestions influence what users search for). Social proof (popular searches indicate what works). Recency bias (recent searches more relevant). Satisficing behavior (users pick first "good enough" suggestion, not optimal). Serial position effect (top suggestions clicked most). Cognitive offloading (let system remember past searches). Path of least resistance (faster to click suggestion than type full query). Analysis paralysis prevention (limit to 5-10 suggestions to avoid overwhelming).

## Sort Dropdown Options & Labels Design v1.0

**Purpose**: Create clear, intuitive sort dropdown labels that help users reorder results by relevant criteria, understand sorting logic, and quickly find preferred viewing orders for different content types and use cases.

---

**PROMPT:**

You are designing sort options for {{content_type}} within {{interface_context}}. Create sort labels that help users reorder {{result_set}} by {{sort_criteria}}, match {{user_intent}}, and maintain {{brand_voice}}.

=== SORT CONTEXT ===
Content type: {{content_type}} (products/search results/listings/data table/content feed)
Interface context: {{interface_context}} (e-commerce/job board/real estate/social feed/dashboard)
Result set: {{result_set}} (products/posts/listings/records)
Sort criteria available: {{sort_criteria}} (price/date/relevance/popularity/rating/custom)
Default sort: {{default_sort}} (relevance/newest/best selling/recommended)
User intent: {{user_intent}} (comparison shopping/browsing/discovery/data analysis)

=== SORT STRATEGY ===
Sort presentation: {{presentation}} (dropdown/button group/tabs/inline menu)
Sort position: {{position}} (above results/toolbar/sidebar)
Direction control: {{direction}} (separate ascending/descending/built into label/toggle)
Persistence: {{persistence}} (remember user choice/reset to default/URL-based)
Mobile behavior: {{mobile}} (same dropdown/bottom sheet/simplified options)

=== OUTPUT REQUIREMENTS ===

```yaml
sort_dropdown:
  dropdown_trigger:
    label_format:
      with_value: "Sort by: [Current Selection]"
      icon_only: "⇅ sort icon"
      minimal: "[Current Selection] ▾"

    recommended: "Sort by: [Current Selection]"
    rationale: "explicit label + current state visible"

    examples:
      - "Sort by: Price (Low to High)"
      - "Sort by: Newest First"
      - "Sort by: Best Match"

    mobile_adaptation:
      label: "Sort" (more concise)
      icon: "⇅ or ⇕ sort icon"

  sort_options:
    option_label_patterns:
      descriptive:
        format: "[Attribute] ([Direction])"
        examples:
          - "Price (Low to High)"
          - "Price (High to Low)"
          - "Date (Newest First)"
          - "Date (Oldest First)"

      concise:
        format: "[Attribute]: [Direction indicator]"
        examples:
          - "Price: Low to High"
          - "Price: High to Low"
          - "Rating: Highest"

      natural_language:
        format: "[Description of sort result]"
        examples:
          - "Lowest Price First"
          - "Highest Rated"
          - "Most Recent"
          - "Closest to Me"

      symbols:
        format: "[Attribute] [↑ or ↓ arrow]"
        examples:
          - "Price ↑"
          - "Price ↓"
          - "Date ↓"

    recommended_pattern: "descriptive format for clarity"

  sort_option_by_content_type:
    product_listings:
      options:
        - label: "Best Match"
          value: "relevance"
          rationale: "default - algorithm-determined relevance"
          default: true

        - label: "Price (Low to High)"
          value: "price_asc"
          rationale: "budget-conscious shoppers"

        - label: "Price (High to Low)"
          value: "price_desc"
          rationale: "luxury/premium seekers"

        - label: "Newest Arrivals"
          value: "date_desc"
          rationale: "discover latest products"

        - label: "Customer Rating"
          value: "rating_desc"
          rationale: "quality-focused decisions"

        - label: "Best Selling"
          value: "popularity_desc"
          rationale: "social proof, trending items"

        - label: "Featured"
          value: "featured"
          rationale: "curated/promoted items"

    search_results:
      options:
        - label: "Most Relevant"
          default: true
          rationale: "search algorithm match score"

        - label: "Newest First"
          rationale: "time-sensitive content"

        - label: "Oldest First"
          rationale: "historical research"

        - label: "Most Popular"
          rationale: "community engagement"

    job_listings:
      options:
        - label: "Most Relevant"
          default: true

        - label: "Date Posted (Newest)"
          rationale: "recent opportunities"

        - label: "Salary (High to Low)"
          rationale: "compensation-focused"

        - label: "Company Name (A-Z)"
          rationale: "alphabetical browsing"

    real_estate:
      options:
        - label: "Newest Listings"
          default: true

        - label: "Price (Low to High)"
        - label: "Price (High to Low)"

        - label: "Square Footage (Largest)"
          rationale: "space-focused buyers"

        - label: "Lot Size (Largest)"

        - label: "Recently Reduced"
          rationale: "deal-seekers"

    content_feed:
      options:
        - label: "Most Recent"
          default: true

        - label: "Most Popular"
          rationale: "engagement-based"

        - label: "Trending"
          rationale: "velocity of engagement"

        - label: "Recommended for You"
          rationale: "personalized algorithm"

    data_table:
      options:
        - label: "[Column Name] (A to Z)"
        - label: "[Column Name] (Z to A)"
        - label: "[Column Name] (0 to 9)"
        - label: "[Column Name] (9 to 0)"

      dynamic: "options change based on selected column"

  direction_indicators:
    explicit_in_label:
      pros: "clear, no ambiguity"
      cons: "longer labels"
      examples:
        - "Price (Low to High)"
        - "Date (Newest First)"

    implicit_from_context:
      pros: "shorter labels"
      cons: "assumes user knowledge"
      examples:
        - "Lowest Price"
        - "Newest"

    symbol_based:
      pros: "very concise, visual"
      cons: "may require learning"
      examples:
        - "Price ↑"
        - "Date ↓"
        - "A → Z"

    separate_toggle:
      pattern: "attribute selector + asc/desc toggle"
      example: "Sort by: Price [↑↓ toggle button]"
      use_case: "data tables, advanced interfaces"

  dropdown_behavior:
    selection_action:
      immediate: "results re-sort on selection"
      delayed: "show preview, require Apply button"
      recommended: "immediate for better UX"

    visual_feedback:
      loading_state: "show spinner/skeleton if sorting takes >300ms"
      result_update: "smooth transition or instant"
      announcement: "for screen readers - 'Results sorted by [option]'"

    current_selection:
      indicator: "checkmark ✓ or bullet • or highlight"
      bold_text: "make current selection bold"

  dropdown_styling:
    menu_width:
      auto: "fits content"
      fixed: "matches trigger button width"
      min_width: "200px minimum for readability"

    item_height:
      desktop: "40-44px for comfortable clicking"
      mobile: "48-56px for touch targets"

    hover_state:
      background: "light highlight on hover"
      cursor: "pointer"

    selected_state:
      visual: "checkmark + bold text + subtle background"

  mobile_optimizations:
    presentation_options:
      dropdown: "same as desktop, works if few options"
      bottom_sheet: "slide up panel for many options"
      modal: "full-screen selection for complex sorts"

    recommended: "bottom sheet for >5 options"

    bottom_sheet_design:
      header: "Sort Options"
      close: "✕ button or swipe down"
      apply: "optional Apply button if needed"

    touch_targets:
      height: "56px minimum"
      spacing: "clear separation between options"

  contextual_variations:
    personalized_default:
      concept: "remember user's last sort preference"
      implementation: "cookie/localStorage/user profile"
      indicator: "show as 'Your Preference' or similar"

    contextual_sort:
      search_query: "default to 'Most Relevant' for search"
      category_browse: "default to 'Best Selling' or 'Featured'"
      sale_category: "default to 'Price (Low to High)'"

    location_based:
      option: "Distance (Closest First)"
      requires: "user location permission"
      use_case: "store finder, real estate, services"

    time_sensitive:
      option: "Ending Soonest" (auctions, deals)
      rationale: "urgency-based sorting"

  multi_attribute_sorts:
    combined_criteria:
      concept: "sort by multiple attributes"
      examples:
        - "Price (Low to High), then Rating"
        - "Relevance, then Date"

      presentation: "primary sort in dropdown, secondary noted"
      advanced_ui: "allows selecting multiple sort orders"

  accessibility_implementation:
    semantic_structure:
      element: "<select> for native dropdown or custom with proper ARIA"
      label: "visible 'Sort by:' label or aria-label"
      current_value: "always visible in trigger"

    aria_attributes:
      custom_dropdown:
        role: "'listbox' on menu, 'option' on items"
        aria_label: "'Sort options'"
        aria_activedescendant: "ID of selected item"
        aria_expanded: "true/false for dropdown state"

    keyboard_navigation:
      open: "Enter or Space on trigger"
      navigate: "Arrow keys through options"
      select: "Enter to select option"
      close: "Escape to close dropdown"

    screen_reader_support:
      trigger_announcement: "'Sort by, currently Price Low to High, button'"
      menu_announcement: "'Sort options, 7 items'"
      selection_announcement: "'Results sorted by Customer Rating'"

      aria_live: "polite region announces sort changes"

    visual_accessibility:
      contrast: "4.5:1 minimum for text"
      focus_indicators: "2px outline, 3:1 contrast"
      selected_state: "don't rely solely on color"

  analytics_tracking:
    events_to_track:
      - event: "sort_changed"
        properties: ["previous_sort", "new_sort", "content_type"]

      - event: "sort_dropdown_opened"
        properties: ["current_sort", "available_options"]

      - event: "default_sort_used"
        properties: ["default_sort", "user_changed", "session_count"]

    insights:
      popular_sorts: "which sorts users prefer"
      sort_by_content: "different preferences for different categories"
      mobile_vs_desktop: "behavior differences"
      sort_and_convert: "which sorts correlate with conversions"

  url_state_management:
    query_parameter:
      format: "?sort=price_asc"
      benefits: "shareable URLs, back button works"

    seo_considerations:
      canonical_tags: "prevent duplicate content from sort variations"
      noindex_sorted: "optionally noindex sorted pages"
```

=== SORT LABEL GUIDELINES ===

**Clarity First**:
- Be explicit: "Price (Low to High)" > "Price ↑"
- Use natural language: "Newest First" > "Date DESC"
- Avoid jargon: "Customer Rating" > "Avg Score DESC"

**Direction Indicators**:
- Parentheses: "Price (Low to High)"
- Colon: "Price: Low to High"
- Natural: "Lowest Price First"
- Symbols: "Price ↑" (use sparingly, may not be clear)

**Character Limits**:
- Desktop: 20-35 characters comfortable
- Mobile: 15-25 characters ideal
- Truncate with ellipsis if needed

**Common Patterns by Direction**:
- Ascending: "Low to High", "A to Z", "Oldest First"
- Descending: "High to Low", "Z to A", "Newest First"
- Best: "Highest Rated", "Most Popular", "Best Match"

=== EXAMPLES ===

**Example 1: E-commerce Product Sorting**
- content_type: "product listings"
- interface_context: "e-commerce electronics"
- sort_criteria: "relevance, price, rating, date, popularity"
- default_sort: "Best Match"
- presentation: "dropdown above products"

**Output**:
```yaml
sort_dropdown:
  dropdown_trigger:
    label_format: "Sort by: Best Match ▾"
    mobile: "Sort ▾"

  sort_options:
    options:
      - label: "Best Match"
        value: "relevance"
        default: true
        description: "Recommended for your search"

      - label: "Price (Low to High)"
        value: "price_asc"
        icon: "↑"

      - label: "Price (High to Low)"
        value: "price_desc"
        icon: "↓"

      - label: "Customer Rating"
        value: "rating_desc"
        description: "Highest rated first"

      - label: "Newest Arrivals"
        value: "date_desc"

      - label: "Best Selling"
        value: "popularity"
        description: "Based on sales volume"

  dropdown_behavior:
    selection_action: "immediate"
    visual_feedback:
      loading_state: "show spinner in product grid"

  mobile_optimizations:
    presentation: "bottom sheet"
    header: "Sort Options"
    touch_targets: "56px height"
```

**Example 2: Job Board Sorting**
- content_type: "job listings"
- interface_context: "job search platform"
- sort_criteria: "relevance, date, salary, company"
- default_sort: "Most Relevant"

**Output**:
```yaml
sort_dropdown:
  sort_options:
    options:
      - label: "Most Relevant"
        default: true
        description: "Best matches for your search"

      - label: "Date Posted (Newest)"
        value: "date_desc"
        description: "Most recently posted jobs"

      - label: "Date Posted (Oldest)"
        value: "date_asc"
        use_case: "historical job browsing"

      - label: "Salary (High to Low)"
        value: "salary_desc"

      - label: "Company (A-Z)"
        value: "company_asc"
```

**Example 3: Content Feed Sorting**
- content_type: "social media posts/articles"
- interface_context: "content platform"
- sort_criteria: "recent, popular, trending, recommended"
- default_sort: "Most Recent"

**Output**:
```yaml
sort_dropdown:
  sort_options:
    options:
      - label: "Most Recent"
        value: "date_desc"
        default: true

      - label: "Most Popular"
        value: "engagement_desc"
        description: "By likes and comments"

      - label: "Trending"
        value: "trending"
        description: "Rising engagement"
        icon: "🔥"

      - label: "Recommended for You"
        value: "personalized"
        description: "Based on your interests"
        show_if: "user logged in"
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Use semantic select element or implement proper ARIA for custom dropdowns (role="listbox", role="option"). Provide visible label for sort dropdown ("Sort by:" or aria-label). Support keyboard navigation (arrow keys, Enter, Escape). Ensure visible focus indicators (2px outline, 3:1 contrast). Maintain 4.5:1 color contrast for text. Make touch targets minimum 44x44px on mobile. Announce sort changes to screen readers using aria-live="polite". Clearly indicate current selection with visual (checkmark) and semantic (aria-current or aria-selected) markers. Test with screen readers to verify sort options and state changes are announced clearly. Ensure dropdown is keyboard accessible without mouse.

**Psychological Principles**: Recognition over recall (show all sort options vs. remembering commands). Satisficing behavior (users select first "good enough" sort, order matters). Analysis paralysis prevention (limit to 5-8 common sorts). Default effect (many users stay with default, choose wisely). Anchoring bias (first sort option influences perception). Cognitive fluency (clear labels reduce mental effort). Loss aversion (some users fear wrong choice, provide undo via re-sort). Social proof ("Best Selling", "Most Popular" leverage what others do). Primacy effect (top options in list chosen most). Path of least resistance (immediate sorting vs. apply button increases usage).

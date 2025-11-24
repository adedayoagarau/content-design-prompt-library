## Pagination Copy & Navigation Design v1.0

**Purpose**: Create clear, accessible pagination interfaces that help users navigate large sets of results, understand their current position, and efficiently move between pages while providing appropriate controls and feedback.

---

**PROMPT:**

You are designing pagination for {{content_type}} displaying {{result_volume}} results with {{results_per_page}} items per page. Create pagination controls that help users {{user_goal}}, understand their position in {{total_pages}} pages, and navigate efficiently while maintaining {{brand_voice}}.

=== PAGINATION CONTEXT ===
Content type: {{content_type}} (search results/product listings/blog archives/data tables)
Result volume: {{result_volume}} (total items or range)
Results per page: {{results_per_page}} (items displayed per page)
Total pages: {{total_pages}} (or calculation method)
Default page: {{default_page}} (page 1/most recent/user's last position)
User behavior: {{user_behavior}} (sequential browsing/jumping/searching for specific item)

=== PAGINATION STRATEGY ===
Pagination type: {{pagination_type}} (numbered/load more/infinite scroll/hybrid)
Navigation controls: {{controls}} (previous/next only/page numbers/jump to page/all)
Page number display: {{number_display}} (show all/truncated/range with ellipsis)
Results per page: {{results_control}} (fixed/user selectable/adaptive)
URL persistence: {{url_strategy}} (query params/path segments/client-side only)

=== PAGINATION PATTERNS ===

**Pagination Types**:
- **Numbered pagination**: 1 2 [3] 4 5 with previous/next
- **Simple pagination**: Previous / Next only
- **Load more button**: "Show more results" appends to current page
- **Infinite scroll**: Automatic loading as user scrolls
- **Cursor-based**: Relies on data cursors for large datasets

Current pattern: {{current_pattern}}

**Page Number Strategies**:
- **Show all**: 1 2 3 4 5 6 7 8 (works for <10 pages)
- **Truncated**: 1 2 3 ... 15 16 17 ... 45 46 47
- **Sliding window**: 1 ... 8 9 [10] 11 12 ... 100
- **Boundaries + current**: 1 2 ... [23] ... 99 100

Recommended strategy: {{number_strategy}}

=== OUTPUT REQUIREMENTS ===

```yaml
pagination_system:
  core_labels:
    previous_button:
      options: ["Previous", "< Previous", "← Previous", "< Prev", "Back"]
      recommended: "string with rationale"
      character_count: number
      icon_inclusion: "arrow/chevron/none"
      disabled_state: "on page 1"
      aria_label: "'Go to previous page' or 'Previous page of results'"

    next_button:
      options: ["Next", "Next >", "Next →", "Next >", "More"]
      recommended: "string with rationale"
      character_count: number
      icon_inclusion: "arrow/chevron/none"
      disabled_state: "on last page"
      aria_label: "'Go to next page' or 'Next page of results'"

    first_page:
      options: ["First", "« First", "<<", "1"]
      recommended: "string or use page number '1' as clickable"
      usage: "optional - helpful for deep pagination"

    last_page:
      options: ["Last", "Last »", ">>", "[last page number]"]
      recommended: "show actual last page number when known"
      usage: "optional - helpful when total pages is known"

    current_page_indicator:
      format_options:
        numeric_only: "[3]"
        with_total: "Page 3 of 45"
        with_total_range: "Page 3 of 45 (41-60 of 900 results)"
        position_only: "Showing 41-60 of 900"

      recommended: "string with rationale"
      visibility: "always visible/mobile only/screen readers only"

  page_number_display:
    truncation_logic:
      pattern_description: "1 2 3 ... 15 [16] 17 ... 98 99 100"

      rules:
        - "always show first page (1)"
        - "always show last page (if total known)"
        - "show 2 pages before and after current"
        - "use ellipsis (...) for gaps of 2+ pages"
        - "make ellipsis non-interactive or expandable"

      mobile_simplification: "show fewer page numbers, prioritize prev/next"

    page_number_links:
      current_page:
        interactive: false
        styling: "bold, background highlight, or distinct color"
        aria_current: "'page'"
        semantic: "span not button/link"

      other_pages:
        interactive: true
        hover_state: "background highlight or underline"
        focus_state: "visible focus ring"
        click_behavior: "navigate to page, scroll to top"

    ellipsis_handling:
      options:
        non_interactive: "... as static text, indicates gap"
        expandable: "click ... to reveal hidden page numbers"
        jump_input: "... becomes input field to type page number"

      recommended: "non-interactive for simplicity, expandable for power users"
      aria_label: "'Page gap' or hidden from screen readers"

  results_information:
    results_summary:
      format_options:
        item_range: "Showing 21-40 of 500 results"
        current_count: "Showing 20 results"
        page_position: "Page 3 of 25"
        combined: "Page 3 of 25 (41-60 of 500 results)"

      recommended: "string with rationale"
      placement: "above results list/in pagination controls/both"
      mobile_placement: "above results, may hide from pagination bar"

    results_per_page_control:
      enabled: true/false
      label: "Show:" or "Results per page:" or "Display:"
      options: [10, 25, 50, 100]
      default: number
      behavior: "reload page 1 with new count or maintain position"
      placement: "near pagination controls or above results"

      format: "dropdown select or button group"
      aria_label: "'Number of results per page'"

  alternative_patterns:
    load_more_button:
      label: "Load More" or "Show More Results" or "See More"
      character_count: number
      loading_state: "Show spinner + 'Loading...'"
      placement: "bottom of current results"
      keyboard_access: "focusable button"

      advantages: ["simpler UI", "works well on mobile", "progressive disclosure"]
      disadvantages: ["harder to return to position", "less control", "SEO challenges"]

      results_count: "optional - 'Load 20 More' or 'Showing 40 of 500'"

    infinite_scroll:
      trigger: "user scrolls to threshold (e.g., 80% down page)"
      loading_indicator: "spinner or skeleton screens appear"
      accessibility_concerns: "keyboard users and screen readers can't reach footer"

      best_practices:
        - "provide 'pause infinite scroll' option"
        - "load more button as fallback"
        - "keyboard shortcut to skip to footer"
        - "announce new content loading to screen readers"

      not_recommended_for: "critical navigation in footer, task-oriented browsing"

    hybrid_approach:
      pattern: "infinite scroll for X pages, then load more button"
      rationale: "balance convenience with control"
      example: "auto-load first 3 pages, then require button click"

  mobile_optimization:
    simplified_controls:
      approach: "reduce page number buttons, emphasize prev/next"
      example: "< Prev | 1 ... [5] ... 20 | Next >"
      rationale: "limited screen space, tap targets need 44x44px minimum"

    touch_friendly_sizing:
      button_size: "44x44px minimum touch target"
      spacing_between: "8px minimum gap"
      larger_tap_areas: "extend clickable area beyond visual button"

    position_stickiness:
      option_1: "pagination sticky at bottom of viewport"
      option_2: "pagination at bottom of results, not sticky"
      recommendation: "non-sticky for most cases, sticky for data tables"

    gesture_support:
      swipe_navigation: "swipe left/right to change pages (when appropriate)"
      use_cases: "galleries, article series, not product listings"

  accessibility_implementation:
    semantic_structure:
      container: "<nav aria-label='Pagination navigation'>"
      page_list: "unordered list <ul> containing page links"
      current_page: "<span aria-current='page'>"
      links: "<a> elements for navigable pages"

    aria_labels:
      navigation_landmark: "aria-label='Pagination navigation' or 'Search results pages'"
      previous_button: "aria-label='Go to previous page, page [N]'"
      next_button: "aria-label='Go to next page, page [N]'"
      page_numbers: "aria-label='Go to page [N]' or just 'Page [N]'"
      current_page: "aria-current='page' and aria-label='Page [N], current page'"

    keyboard_navigation:
      tab_order: "previous button, page numbers, next button"
      enter_space: "activate links/buttons"
      skip_option: "allow skipping pagination navigation"

    screen_reader_experience:
      announce_structure: "'Pagination navigation, 10 items' or similar"
      current_position: "clearly announce current page"
      total_pages: "announce total pages if known"
      results_update: "announce when new results load (aria-live)"

    focus_management:
      after_page_change: "move focus to results heading or first result"
      visible_focus: "2px outline minimum, 3:1 contrast"
      focus_order: "logical left-to-right progression"

  url_state_management:
    query_parameters:
      page_param: "?page=3 or ?p=3"
      results_per_page: "&limit=50 or &per_page=50"
      combined_example: "/products?category=laptops&page=3&per_page=25"

    benefits:
      shareable_urls: "users can share specific pages"
      browser_navigation: "back/forward buttons work correctly"
      bookmarkable: "can bookmark specific result pages"
      seo_friendly: "search engines can crawl all pages"

    implementation:
      url_update: "update URL without page reload (history.pushState)"
      back_button: "respects browser back to previous page"
      direct_access: "page loads correct results when URL accessed directly"

  error_handling:
    invalid_page_number:
      scenario: "user requests page 9999 when only 100 pages exist"
      response: "redirect to last valid page with message"
      message: "'Page not found. Showing page 100 (last page).'"

    no_results:
      scenario: "filter or search yields 0 results"
      response: "hide pagination, show no results message"
      recovery_options: "clear filters, broaden search, suggested alternatives"

    page_out_of_bounds:
      scenario: "filters change, current page no longer exists"
      response: "reset to page 1 with updated results"

  loading_states:
    page_transition:
      indicator: "loading spinner or skeleton screens"
      button_states: "disable pagination controls during load"
      timing: "show loader if response takes >300ms"

    optimistic_ui:
      approach: "immediately show loading state, pre-render next page"
      benefit: "perceived faster navigation"

  analytics_tracking:
    events_to_track:
      - event: "pagination_click"
        properties: ["from_page", "to_page", "total_pages", "navigation_method"]

      - event: "results_per_page_change"
        properties: ["previous_count", "new_count", "current_page"]

      - event: "pagination_depth"
        properties: ["deepest_page_viewed", "total_pages_available"]

    insights:
      page_depth_analysis: "how many users go beyond page 1, 2, 3"
      jump_patterns: "do users jump to last page or browse sequentially"
      per_page_preferences: "most popular results per page setting"
      mobile_vs_desktop: "pagination behavior differences by device"
```

=== PAGINATION COPY GUIDELINES ===

**Button Labels**:
- **Previous/Next**: Clear, universal, works in all contexts
- **< Prev / Next >**: Adds directional cue, slightly more compact
- **← Previous / Next →**: Strongest directional indication
- **Avoid**: "Backward/Forward", "Earlier/Later" (less intuitive)

**Current Page Indication**:
- **Minimal**: "[3]" - just show number, styling indicates current
- **Explicit**: "Page 3 of 10" - clearest for screen readers and new users
- **Comprehensive**: "Page 3 of 10 (21-30 of 95 results)" - maximum context

**Results Summary**:
- **Item range**: "Showing 21-40 of 500" - concrete, specific
- **Page context**: "Page 3 of 25" - simpler, less precise
- **Combined**: "Showing 21-40 of 500 results (Page 3 of 25)" - comprehensive

**Load More Variations**:
- **Generic**: "Load More"
- **Specific**: "Load 20 More Results"
- **Playful**: "Show Me More" (if brand allows)
- **Progressive**: "Loading more..." (during load state)

=== EXAMPLES ===

**Example 1: E-commerce Product Listing**
- content_type: "product search results"
- result_volume: "847 products"
- results_per_page: "24 products"
- total_pages: "36 pages"
- user_behavior: "browsing and comparing, may jump pages"
- pagination_type: "numbered with previous/next"

**Output**:
```yaml
pagination_system:
  core_labels:
    previous_button:
      recommended: "← Previous"
      rationale: "Clear direction, familiar e-commerce pattern"
      character_count: 11
      icon_inclusion: "arrow on left"
      disabled_state: "disabled on page 1, reduced opacity"
      aria_label: "'Go to previous page of products'"

    next_button:
      recommended: "Next →"
      rationale: "Mirrors previous button styling"
      character_count: 7
      icon_inclusion: "arrow on right"
      aria_label: "'Go to next page of products'"

    current_page_indicator:
      format_options:
        position_only: "Showing 25-48 of 847 products"

      recommended: "'Showing X-Y of Total products' - users want to know how many products total"
      visibility: "above product grid and in pagination controls"

  page_number_display:
    truncation_logic:
      pattern_description: "1 2 3 ... 10 [11] 12 ... 34 35 36"

      rules:
        - "show first 3 pages"
        - "show last 3 pages"
        - "show current page ± 1"
        - "ellipsis for gaps"

      mobile_simplification: "1 ... [11] ... 36 | ← Prev Next →"

    page_number_links:
      current_page:
        interactive: false
        styling: "white background, brand color border, bold text"
        aria_current: "'page'"

      other_pages:
        styling: "light gray background, border on hover"
        hover_state: "darker background"

  results_information:
    results_summary:
      format: "Showing 25-48 of 847 products"
      placement: "top of product grid and bottom with pagination"

    results_per_page_control:
      enabled: true
      label: "Show:"
      options: [12, 24, 48, 96]
      default: 24
      behavior: "reload page 1 with new count"
      format: "dropdown select"

  mobile_optimization:
    simplified_controls:
      approach: "minimal page numbers, prominent prev/next"
      example: "← Prev | Page 11 of 36 | Next →"

    touch_friendly_sizing:
      button_size: "48x48px for comfortable tapping"
      spacing_between: "12px gaps"

  url_state_management:
    query_parameters:
      page_param: "?page=11"
      results_per_page: "&show=24"
      combined_example: "/products/laptops?page=11&show=24&sort=price-asc"

  analytics_tracking:
    insights:
      page_depth_analysis: "85% never go past page 2 - improve filters and sort"
      per_page_preferences: "48 products per page most popular on desktop"
```

**Example 2: Blog Archive / News Listing**
- content_type: "blog post archive"
- result_volume: "200+ articles"
- results_per_page: "10 posts"
- total_pages: "20+ pages"
- user_behavior: "sequential browsing, reading recent posts"
- pagination_type: "simple previous/next + load more option"

**Output**:
```yaml
pagination_system:
  core_labels:
    previous_button:
      recommended: "← Newer Posts"
      rationale: "Content-specific language, 'newer' is clearer than 'previous' for chronological content"
      character_count: 13
      aria_label: "'Go to newer posts'"

    next_button:
      recommended: "Older Posts →"
      rationale: "Chronological context, users understand older = later pages"
      character_count: 13
      aria_label: "'Go to older posts'"

    current_page_indicator:
      format_options:
        page_position: "Page 3"

      recommended: "Simple 'Page X' or hide entirely - total count less important for evergreen content"
      visibility: "screen readers only, visual users see post dates"

  page_number_display:
    truncation_logic:
      pattern_description: "Show Previous/Next only, no numbered pages"
      rationale: "Blog readers browse chronologically, rarely jump to specific page"

  alternative_patterns:
    load_more_button:
      label: "Load More Posts"
      character_count: 15
      loading_state: "'Loading...' with spinner"
      placement: "below current posts, centered"
      results_count: "Loaded 30 of 200+ posts"

      advantages: ["simpler UI for mobile", "good for infinite content", "less overwhelming"]

  mobile_optimization:
    simplified_controls:
      approach: "large 'Load More' button, hide page numbers"

  url_state_management:
    query_parameters:
      page_param: "?page=3"
      rationale: "maintain URLs for sharing, SEO"

  accessibility_implementation:
    aria_labels:
      navigation_landmark: "aria-label='Blog pagination'"
      load_more_button: "aria-label='Load 10 more posts'"
```

**Example 3: Data Table Pagination**
- content_type: "admin dashboard data table"
- result_volume: "10,000+ records"
- results_per_page: "50 rows (user configurable)"
- total_pages: "200+ pages"
- user_behavior: "jumping to specific pages, sorting, filtering"
- pagination_type: "numbered + jump to page input"

**Output**:
```yaml
pagination_system:
  core_labels:
    previous_button:
      recommended: "< Previous"
      rationale: "Compact for data-dense interface"
      character_count: 10

    next_button:
      recommended: "Next >"
      character_count: 6

    first_page:
      recommended: "« First"
      usage: "include for quick return to start"

    last_page:
      recommended: "Last »"
      usage: "include for jumping to end"

    current_page_indicator:
      format_options:
        with_total_range: "Showing 101-150 of 10,000 records"

      recommended: "Show item range - critical for data analysis context"
      visibility: "always visible above table"

  page_number_display:
    truncation_logic:
      pattern_description: "« First | < Previous | 1 ... 18 [19] 20 ... 200 | Next > | Last »"

      mobile_simplification: "First | < | [19 of 200] | > | Last"

    ellipsis_handling:
      options:
        jump_input: "click ellipsis reveals 'Jump to page:' input field"

      recommended: "jump input for power users managing large datasets"

  results_information:
    results_per_page_control:
      enabled: true
      label: "Rows per page:"
      options: [25, 50, 100, 250]
      default: 50
      behavior: "maintain current position when possible"
      format: "dropdown select"
      placement: "bottom right of table, near pagination"

  mobile_optimization:
    position_stickiness:
      option_1: "sticky at bottom for easier navigation"
      recommendation: "sticky for data tables to avoid scrolling back up"

  url_state_management:
    query_parameters:
      page_param: "?page=19&limit=50&sort=date-desc"
      rationale: "critical for sharing filtered/sorted views"

  special_features:
    jump_to_page:
      label: "Go to page:"
      input_type: "number input"
      validation: "accept only valid page numbers 1-200"
      button_label: "Go"
      placement: "in pagination controls"

  analytics_tracking:
    insights:
      jump_usage: "do users use jump feature - indicates need for better filters"
      rows_per_page: "analyze if users need more rows per page options"
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Use semantic nav element with aria-label="Pagination navigation". Structure page numbers as unordered list for screen reader context. Use aria-current="page" for current page. Provide descriptive aria-labels for all navigation controls. Ensure keyboard navigation with logical tab order. Make all interactive elements keyboard accessible with Enter/Space. Provide visible focus indicators (minimum 2px outline, 3:1 contrast). Maintain 4.5:1 color contrast for text. Make touch targets minimum 44x44px on mobile. Announce page transitions to screen readers with aria-live regions. For infinite scroll, provide alternative navigation and keyboard access to footer. Ensure disabled buttons are properly marked with aria-disabled.

**Psychological Principles**: Mental model of physical pages (pagination mirrors book/magazine experience). Serial position effect (users remember first pages and last pages better). Satisficing behavior (most users don't go past page 1-2, need better sorting/filtering). Cognitive load reduction (truncated page numbers reduce visual complexity). Recognition over recall (numbered pages help users remember position). Fitts's Law (larger touch targets for frequent actions like Next). Progressive disclosure (load more reveals content on demand). Loss aversion (users reluctant to click many times to reach content). Information scent (results summary helps users decide whether to continue). Zeigarnik effect (showing "X of Total" motivates exploration of remaining results).

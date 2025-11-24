## Breadcrumb Navigation Trail Design v1.0

**Purpose**: Create breadcrumb navigation that clearly shows users their current location within site hierarchy, provides efficient backtracking paths, and reinforces information architecture understanding.

---

**PROMPT:**

You are designing breadcrumb navigation for {{site_type}} with {{site_depth}} levels of hierarchy. Create breadcrumb trails that help users understand their current location, navigate back efficiently, and comprehend site structure while serving {{user_need}}.

=== SITE CONTEXT ===
Site type: {{site_type}} (e-commerce/content/documentation/enterprise app/multi-site)
Site depth: {{site_depth}} (number of hierarchical levels)
Content volume: {{content_volume}} (pages/products/articles)
Hierarchy type: {{hierarchy_type}} (strict/flexible/faceted/attribute-based)
User navigation pattern: {{nav_pattern}} (browse/search/direct-link/mixed)
Breadcrumb purpose: {{breadcrumb_purpose}} (orientation/navigation/both)

=== HIERARCHY STRUCTURE ===
Levels in taxonomy: {{taxonomy_levels}}
Example path: {{example_path}} (e.g., "Home > Category > Subcategory > Product")
Path maximum depth: {{max_depth}} (typical deepest path)
Dynamic vs static: {{path_type}} (fixed hierarchy vs. user journey-based)
Multiple paths possible: {{multi_path}} (yes/no - can users arrive via different routes?)

=== BREADCRUMB CONFIGURATION ===

**Breadcrumb Types**:
- **Location-based**: Shows hierarchical position (Home > Products > Laptops > Gaming Laptops)
- **Attribute-based**: Shows filter/facet selections (All Products > Price: $500-1000 > Brand: Dell)
- **Path-based**: Shows user's journey (Search Results > Product Page)
- **Hybrid**: Combines hierarchy + attributes

Current implementation: {{current_type}}

**Display Requirements**:
- Desktop max visible items: {{desktop_max_items}}
- Mobile display strategy: {{mobile_strategy}} (show all/truncate/show current only)
- Separator character: {{separator}} (> / | · →)
- Truncation strategy: {{truncation}} (ellipsis/collapse middle/show first & last)

=== OUTPUT REQUIREMENTS ===

```yaml
breadcrumb_system:
  structure:
    pattern: "hierarchy pattern description"
    example_paths:
      shallow_page:
        levels: ["Home", "Category", "Page"]
        depth: 3
        display: "Home > Category > Page"

      deep_page:
        levels: ["Home", "L1", "L2", "L3", "L4", "Current"]
        depth: 6
        display: "Home > ... > L3 > L4 > Current"
        truncation_rule: "always show home, current, and 2 previous levels"

  label_strategy:
    home_label:
      options: ["Home", "Homepage", "🏠", "Site Name"]
      recommendation: "string with rationale"
      aria_label: "string (if using icon)"

    category_labels:
      format: "match navigation menu/page title/custom"
      character_limit: number
      truncation_method: "ellipsis/word-break/tooltip"

    current_page:
      display_style: "plain text (not linked)/bold/highlighted"
      rationale: "current page shouldn't link to itself"
      aria_current: "page"

  separator_design:
    character: "string (>, /, |, ·, →)"
    rationale: "why this separator"
    accessibility: "how screen readers handle"
    aria_label: "hidden from screen readers if decorative"

  interaction_patterns:
    link_behavior:
      - level: "Home"
        action: "navigate to homepage"
        analytics_event: "breadcrumb_home"

      - level: "Parent categories"
        action: "navigate to category page"
        analytics_event: "breadcrumb_category"
        new_tab: false

      - level: "Current page"
        action: "none - not clickable"
        styling: "text only, no link underline"

    hover_states:
      style: "underline/background change/color change"
      tooltip: "show full label if truncated"

    keyboard_navigation:
      tab_order: "left to right through breadcrumb links"
      skip_option: "allow skip to main content"

  mobile_optimization:
    strategies:
      full_display:
        when: "paths are shallow (3 levels or less)"
        format: "horizontal scroll or stacked"

      truncated_display:
        when: "paths are deep (4+ levels)"
        format: "< Parent > Current"
        interaction: "tap < to expand full path"

      collapse_middle:
        format: "Home > ... > Parent > Current"
        tap_behavior: "expand to show full path"

    recommendation: "strategy with rationale"

  structured_data:
    schema_org:
      enabled: true
      type: "BreadcrumbList"
      purpose: "SEO and rich results in search"
      implementation: "JSON-LD format"

    example_markup: |
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://example.com"
        }]
      }

  special_cases:
    search_results:
      breadcrumb: "Home > Search Results for '{query}'"
      back_action: "return to previous page vs. new search"

    filtered_views:
      display: "Home > Products > Category > [Active Filters]"
      filter_indication: "Pills/badges showing active filters"
      clear_option: "Remove filter inline"

    multi_path_pages:
      strategy: "show primary taxonomy path/show user's actual path"
      rationale: "consistency vs. accuracy trade-off"

    error_pages:
      breadcrumb: "Home > Error 404" or suppress breadcrumb
      recommendation: "include breadcrumb to aid recovery"

    cross_domain:
      multi_site_breadcrumb: "Main Site > Sub-site > Category > Page"
      domain_indicator: "visual/textual indication of site switch"

  accessibility_implementation:
    semantic_html:
      element: "<nav aria-label='Breadcrumb'>"
      list_structure: "<ol> with <li> items"
      rationale: "semantic meaning for assistive tech"

    aria_attributes:
      nav_label: "Breadcrumb"
      current_page: "aria-current='page'"
      separators: "aria-hidden='true' (decorative)"

    screen_reader_experience:
      announcement: "Breadcrumb navigation, 4 items"
      navigation: "users can jump between links"
      current_indication: "current page announced clearly"

    visual_design:
      contrast_ratio: "4.5:1 minimum for text"
      focus_indicators: "clear 2px outline on focus"
      touch_targets: "44x44px minimum on mobile"

  testing_recommendations:
    usability_tests:
      - scenario: "User on deep page needs to go back 2 levels"
        success_metric: "finds correct breadcrumb link in under 3 seconds"

      - scenario: "User wants to understand site structure"
        success_metric: "can explain hierarchy after viewing breadcrumb"

    analytics_tracking:
      - event: "breadcrumb_click"
        properties: ["level_name", "level_depth", "from_page", "to_page"]

      - metric: "breadcrumb_usage_rate"
        calculation: "sessions with breadcrumb clicks / total sessions"

      - insight: "identify if users prefer breadcrumb vs. browser back"
```

=== BREADCRUMB LABEL PATTERNS ===

**Clarity Guidelines**:
- Match category page H1 headings exactly
- Use title case or sentence case consistently
- Avoid repetition in adjacent levels
  - ✗ "Products > Product Category > Product Subcategory"
  - ✓ "Products > Laptops > Gaming"

**Length Management**:
- Desktop: 30-40 characters maximum per level
- Mobile: 20-25 characters maximum per level
- Truncate with ellipsis: "Very Long Category Na..."
- Show full text on hover/focus

**Dynamic Content**:
- Product names: Use product title (may need truncation)
- Dates: Use formatted date "January 2025" not "2025-01"
- User-generated: "Reviews for [Product Name]"
- Filters: "Results for: $500-$1000" or use filter badges

=== EXAMPLES ===

**Example 1: E-commerce Product Page**
- site_type: "e-commerce electronics"
- site_depth: "5 levels"
- hierarchy_type: "strict product taxonomy"
- current_type: "location-based"
- user_need: "understand product category and navigate to similar products"

**Output**:
```yaml
breadcrumb_system:
  structure:
    pattern: "Home > Department > Category > Subcategory > Product"
    example_paths:
      product_page:
        levels: ["Home", "Electronics", "Computers", "Laptops", "Gaming Laptops", "ASUS ROG Strix G15"]
        depth: 6
        display: "Home > Electronics > Computers > Laptops > Gaming Laptops > ASUS ROG Strix G15"

  label_strategy:
    home_label:
      options: ["Home", "TechStore"]
      recommendation: "Home - universal recognition, clear starting point"
      aria_label: null

    category_labels:
      format: "match navigation menu labels exactly"
      character_limit: 35
      truncation_method: "ellipsis with full text in tooltip"

    current_page:
      display_style: "plain text, no link, normal weight"
      rationale: "not clickable - user is already here"
      aria_current: "page"

  separator_design:
    character: ">"
    rationale: "clear direction indicator, widely recognized"
    aria_label: "aria-hidden='true'"

  mobile_optimization:
    strategies:
      truncated_display:
        when: "paths exceed 4 levels"
        format: "< Gaming Laptops > ASUS ROG Strix G15"
        interaction: "Tap '<' to show dropdown with full path"

    recommendation: "Truncated display - shows immediate parent (most relevant for product comparison) and current page"

  special_cases:
    filtered_views:
      display: "Home > Laptops > Gaming Laptops [Price: $1000-1500] [Brand: ASUS]"
      filter_indication: "Removable pills after breadcrumb with × to clear"
      clear_option: "Click × on filter pill"
```

**Example 2: Documentation Site**
- site_type: "software documentation"
- site_depth: "4 levels typically"
- hierarchy_type: "strict content hierarchy"
- current_type: "location-based with version indicator"
- user_need: "navigate between related docs and understand content structure"

**Output**:
```yaml
breadcrumb_system:
  structure:
    pattern: "Docs Home > Section > Guide > Page"
    example_paths:
      deep_guide_page:
        levels: ["Documentation", "API Reference", "Authentication", "OAuth 2.0 Implementation"]
        depth: 4
        display: "Documentation > API Reference > Authentication > OAuth 2.0 Implementation"
        version_indicator: "v2.1 (in separate component)"

  label_strategy:
    home_label:
      options: ["Docs", "Documentation", "Docs Home"]
      recommendation: "Documentation - clear, professional, unambiguous"

    category_labels:
      format: "match left sidebar navigation exactly"
      character_limit: 50
      truncation_method: "none needed - technical docs have controlled label lengths"

  separator_design:
    character: ">"
    rationale: "conventional for documentation, clear hierarchy"

  interaction_patterns:
    link_behavior:
      - level: "Documentation"
        action: "navigate to docs homepage/overview"
        analytics_event: "breadcrumb_docs_home"

      - level: "API Reference"
        action: "navigate to API section landing page"
        analytics_event: "breadcrumb_section"

    hover_states:
      style: "underline on hover"
      tooltip: "none needed - labels are clear and visible"

  mobile_optimization:
    strategies:
      full_display:
        when: "most paths are 4 levels or less"
        format: "stacked vertically or horizontal scroll"

    recommendation: "Full display with horizontal scroll - documentation users need full context"

  special_cases:
    version_switching:
      breadcrumb: "Documentation v2.1 > API Reference > ..."
      version_indicator: "Dropdown in breadcrumb or separate component"
      navigation: "switching versions maintains same page if it exists"
```

**Example 3: News/Content Site**
- site_type: "news and magazine content"
- site_depth: "3-4 levels"
- hierarchy_type: "topic-based taxonomy with tags"
- current_type: "hybrid - shows primary topic + publication date"
- user_need: "explore related articles in same topic area"

**Output**:
```yaml
breadcrumb_system:
  structure:
    pattern: "Home > Section > Topic > Article Title"
    example_paths:
      article_page:
        levels: ["Home", "Technology", "Artificial Intelligence", "How AI is Transforming Healthcare in 2025"]
        depth: 4
        display: "Home > Technology > Artificial Intelligence > How AI is Transforming Healthcare..."
        truncation_rule: "article titles truncate at 50 chars on desktop, 30 on mobile"

  label_strategy:
    home_label:
      options: ["Home", "News Weekly", "NW"]
      recommendation: "Home - keeps breadcrumb neutral, site name in header"

    category_labels:
      format: "match main navigation sections"
      character_limit: 25

    current_page:
      display_style: "article title (truncated if needed)"
      truncation_method: "truncate at word boundary with ellipsis"
      tooltip: "show full headline on hover"
      aria_current: "page"

  separator_design:
    character: "›"
    rationale: "softer than >, matches editorial style"

  mobile_optimization:
    strategies:
      collapse_middle:
        format: "Home > ... > AI > Article Title"
        tap_behavior: "tap '...' to expand and show full path"

    recommendation: "Collapse middle on mobile to save space - showing topic (AI) is most important for context"

  special_cases:
    multi_path_pages:
      strategy: "show primary topic taxonomy path"
      rationale: "articles may have multiple tags, but one primary section - use that for consistency"
      example: "Article tagged 'AI' and 'Healthcare' shows: Home > Technology > AI (primary)"

    search_results:
      breadcrumb: "Home > Search Results"
      query_display: "Show query in page H1, not breadcrumb"
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Use semantic HTML with nav element and aria-label="Breadcrumb". Structure as ordered list (ol) to convey sequence. Apply aria-current="page" to current location. Hide decorative separators from screen readers using aria-hidden="true". Ensure keyboard navigation works left-to-right with visible focus indicators (minimum 2px outline, 3:1 contrast). Maintain 4.5:1 color contrast for text. Make touch targets 44x44px minimum on mobile. Provide text alternatives for icon-based home links. Announce breadcrumb as navigation landmark to screen reader users.

**Psychological Principles**: Mental model reinforcement (showing hierarchy helps users understand site structure). Reduced cognitive load through orientation cues (users know where they are without remembering path). Information scent (breadcrumb labels preview what's at each level). Fitts's Law (larger, closer targets for parent categories users often need). Recognition over recall (seeing path vs. remembering it). Progressive disclosure (collapsed breadcrumbs on mobile reveal on demand). Zeigarnik effect (incomplete paths motivate exploration up hierarchy). Spatial memory support (consistent breadcrumb position aids navigation learning).

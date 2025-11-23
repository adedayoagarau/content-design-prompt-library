## Filter Labels & Chips Design v1.0

**Purpose**: Create clear, scannable filter labels and chips that help users refine search results, understand applied filters, easily remove constraints, and build complex queries through intuitive filtering interfaces.

---

**PROMPT:**

You are designing filter labels and chips for {{content_type}} within {{interface_context}}. Create filter copy that helps users refine {{result_set}}, understand {{filter_types}} clearly, manage {{filter_count}} filters simultaneously, and maintain {{brand_voice}}.

=== FILTER CONTEXT ===
Content type: {{content_type}} (products/search results/data tables/content library)
Interface context: {{interface_context}} (e-commerce/data dashboard/job board/real estate)
Result set: {{result_set}} (products/listings/records/items)
Filter types: {{filter_types}} (facets/ranges/boolean/hierarchical/dates)
Filter count: {{filter_count}} (typical number of filter categories)
Filter complexity: {{complexity}} (simple/moderate/advanced with dependencies)

=== FILTER STRATEGY ===
Filter presentation: {{presentation}} (sidebar/top bar/drawer/modal)
Filter behavior: {{behavior}} (apply immediately/apply on button click)
Multi-select: {{multi_select}} (yes per category/single selection only)
Filter persistence: {{persistence}} (URL params/session/none)
Result count preview: {{preview}} (show counts before applying/no preview)

=== OUTPUT REQUIREMENTS ===

```yaml
filter_labels_and_chips:
  filter_category_labels:
    purpose: "organize filters into logical groups"

    label_guidelines:
      character_limit: "12-20 characters"
      capitalization: "title case or sentence case"
      clarity: "specific, not generic"

      good_examples:
        - "Price Range"
        - "Brand"
        - "Color"
        - "Size"
        - "Customer Rating"
        - "Delivery Options"

      avoid:
        - "Other" (too vague)
        - "Options" (meaningless)
        - "More Filters" (as category name)

    category_with_count:
      format: "[Category] ([active count])"
      examples:
        - "Brand (3)"
        - "Color (1)"
      rationale: "shows how many filters applied in category"

  filter_option_labels:
    individual_filters:
      format: "[Filter name] ([result count])"

      examples:
        - "Nike (234)"
        - "Blue (45)"
        - "$0 - $50 (120)"
        - "4 Stars & Up (890)"

      result_count_behavior:
        show_total: "how many items have this attribute"
        show_remaining: "how many items if this filter applied"
        gray_out_zero: "show but disable if no results"

    multi_word_labels:
      pattern: "use natural language"
      examples:
        - "Free Shipping"
        - "In Stock"
        - "On Sale"
        - "Same-Day Delivery"

    range_labels:
      price_ranges:
        - "$0 - $50"
        - "$50 - $100"
        - "$100 - $250"
        - "$250+"

      custom_range: "format: $[min] - $[max]"

      date_ranges:
        - "Last 24 hours"
        - "Last 7 days"
        - "Last 30 days"
        - "Custom range..."

    boolean_filters:
      affirmative_only: "don't show negative"
      examples:
        - ✓ "Free Shipping"
        - ✗ "No Free Shipping"

        - ✓ "In Stock"
        - ✗ "Out of Stock"

    rating_filters:
      format: "[X] Stars & Up"
      examples:
        - "5 Stars"
        - "4 Stars & Up"
        - "3 Stars & Up"

      icon_usage: "★★★★★ visual star representation"

  filter_chips_design:
    active_filter_chips:
      purpose: "show applied filters, allow easy removal"

      chip_format:
        basic: "[Filter name] ✕"
        with_category: "[Category]: [Filter] ✕"

      examples:
        basic:
          - "Nike ✕"
          - "Blue ✕"
          - "$50-$100 ✕"

        with_category:
          - "Brand: Nike ✕"
          - "Color: Blue ✕"
          - "Price: $50-$100 ✕"

      recommendation: "use category prefix if not obvious from filter alone"

    chip_placement:
      location: "above results/below search/in sidebar"
      recommended: "above results, below search bar for visibility"
      mobile: "horizontal scroll or wrap to multiple rows"

    chip_styling:
      size: "32-40px height for comfortable tapping"
      padding: "8-12px horizontal"
      background: "subtle fill (light gray or brand tint)"
      border: "optional 1px border"
      remove_icon: "✕ × ⊗ or text 'Remove'"
      hover_state: "darken background, show remove icon more prominently"

    chip_interactions:
      click_remove: "click ✕ to remove filter"
      click_chip_body: "optional - click to edit/modify filter"
      keyboard: "Tab to focus chip, Enter/Delete to remove"

    clear_all_action:
      label: "Clear all filters" or "Clear all" or "Reset"
      placement: "after filter chips or in filter panel"
      visual_treatment: "text link or ghost button"
      show_when: ">= 1 filter applied"

  filter_panel_components:
    filter_header:
      label: "Filters" or "Refine Results" or "Filter By"
      close_button: "✕ (for mobile drawer/modal)"
      result_count: "Showing 234 results"

    apply_filters_button:
      show_if: "filters don't apply immediately"
      label: "Apply Filters" or "Show Results" or "Apply ([count])"
      format_with_count: "Show 234 Results"
      placement: "bottom of filter panel, sticky"

    expandable_filter_categories:
      default_state: "first 3-5 expanded, rest collapsed"
      expand_icon: "▾ ▸ + -"
      show_active_count: "Category (2 active)"

  filter_interactions:
    checkbox_filters:
      multi_select: true
      label: "clear checkbox label next to box"
      result_count: "after label (234)"
      indeterminate_state: "if child filters partially selected"

    radio_button_filters:
      single_select: true
      use_case: "mutually exclusive options"
      example: "Sort by: Price | Rating | Newest"

    toggle_switches:
      use_case: "binary on/off filters"
      examples:
        - "Free Shipping [toggle]"
        - "In Stock Only [toggle]"

    range_sliders:
      use_case: "continuous ranges (price, size, etc.)"
      labels:
        min_label: "$0"
        max_label: "$500"
        current_range: "$50 - $200"

      inputs: "allow typing exact values"

    dropdown_selects:
      use_case: "long lists of options"
      label: "Select [category]..."
      search: "searchable for >10 options"

  contextual_filter_copy:
    e_commerce:
      categories:
        - "Price Range"
        - "Brand"
        - "Size"
        - "Color"
        - "Customer Rating"
        - "Availability (In Stock, Pre-Order)"
        - "Shipping Options (Free Shipping, Same-Day)"

    job_search:
      categories:
        - "Job Type (Full-time, Part-time, Contract)"
        - "Experience Level"
        - "Salary Range"
        - "Date Posted"
        - "Work Location (Remote, Hybrid, On-site)"

    real_estate:
      categories:
        - "Price"
        - "Bedrooms"
        - "Bathrooms"
        - "Property Type"
        - "Square Footage"
        - "Lot Size"

    content_library:
      categories:
        - "Content Type (Article, Video, Podcast)"
        - "Topic"
        - "Author"
        - "Publish Date"
        - "Reading Time"

  result_count_updates:
    live_preview:
      show: "how many results will remain after applying filter"
      format: "Blue (45 items)"
      update: "real-time as user selects filters"

    gray_out_zero_results:
      behavior: "show filter but disable if would yield 0 results"
      visual: "reduced opacity + disabled state"
      tooltip: "optional - 'No items match this filter'"

    total_results_display:
      location: "top of results area"
      format: "Showing [count] results" or "[count] items"
      update: "immediately when filters change"

  mobile_optimizations:
    filter_drawer:
      trigger: "Filters button with active count badge"
      behavior: "slide in from right/bottom"
      header: "Filters | [✕ Close]"
      footer: "Clear All | Apply Filters"

    chip_display:
      layout: "horizontal scroll or wrap"
      touch_targets: "48x48px minimum"
      scrollable: "if chips overflow, allow horizontal scroll"

    filter_categories:
      accordion_style: "tap to expand each category"
      default_state: "all collapsed, expand on tap"

    sticky_apply_button:
      position: "fixed to bottom of drawer"
      format: "Apply Filters (234 results)"

  accessibility_implementation:
    semantic_structure:
      landmark: "<aside role='complementary' aria-label='Filters'>"
      fieldsets: "group related filters in <fieldset> with <legend>"
      labels: "all form controls have associated labels"

    aria_attributes:
      filter_section:
        aria_label: "'Filters'"
        aria_expanded: "for expandable categories"

      filter_chips:
        aria_label: "'Remove [filter name] filter'"
        role: "'button' or use <button> element"

      result_count:
        aria_live: "'polite' - announce count changes"
        aria_atomic: "true - announce full count, not just change"

    keyboard_navigation:
      tab_order: "through filter controls and chips"
      enter_space: "activate checkboxes, remove chips"
      arrow_keys: "navigate radio options"
      escape: "close filter drawer/modal"

    screen_reader_support:
      filter_announcement: "announce filter applied"
      count_announcement: "announce result count changes"
      chip_removal: "announce when filter removed"

    focus_management:
      on_apply_filters: "move focus to results heading"
      on_clear_all: "move focus to first filter"
      visible_focus: "2px outline, 3:1 contrast"

  analytics_tracking:
    events_to_track:
      - event: "filter_applied"
        properties: ["filter_category", "filter_value", "result_count"]

      - event: "filter_removed"
        properties: ["filter_category", "filter_value", "removal_method"]

      - event: "filter_combination"
        properties: ["active_filters_array", "result_count"]

      - event: "clear_all_filters"
        properties: ["number_of_filters_cleared"]

    insights:
      popular_filters: "which filters used most frequently"
      filter_combinations: "common filter pairings"
      zero_results_filters: "which combinations yield no results"
      mobile_vs_desktop: "filter usage patterns by device"
```

=== FILTER LABEL GUIDELINES ===

**Category Labels**:
- Be specific: "Customer Rating" not "Rating" (rating of what?)
- Use natural language: "Free Shipping" not "Shipping: Free"
- Title case: "Price Range" not "price range"
- Avoid jargon: "Bedrooms" not "BR Count"

**Option Labels**:
- Front-load keywords: "Free Shipping" not "Shipping (Free)"
- Include result counts: "Nike (234)" shows availability
- Use ranges for numbers: "$50-$100" not "$50.00-$100.00"
- Be concise: "4+ Stars" not "4 Stars and Above"

**Chip Labels**:
- Include category if ambiguous: "Brand: Nike" vs. just "Nike"
- Keep short: truncate long labels with ellipsis
- Use clear remove indicators: ✕ symbol universal

**Clear All Label**:
- Action-oriented: "Clear all filters" not "Remove filters"
- Alternative: "Reset" or "Clear all"
- Show only when filters applied

=== EXAMPLES ===

**Example 1: E-commerce Product Filtering**
- content_type: "product search results"
- interface_context: "e-commerce electronics"
- filter_types: "brand, price, rating, availability, shipping"
- presentation: "left sidebar"
- behavior: "apply immediately"

**Output**:
```yaml
filter_labels_and_chips:
  filter_category_labels:
    categories:
      - label: "Price"
        - "$0 - $100 (345)"
        - "$100 - $250 (567)"
        - "$250 - $500 (234)"
        - "$500+ (89)"

      - label: "Brand"
        - "Apple (234)"
        - "Samsung (189)"
        - "Sony (156)"
        - "LG (123)"

      - label: "Customer Rating"
        - "★★★★★ (45)"
        - "★★★★☆ & Up (234)"
        - "★★★☆☆ & Up (567)"

      - label: "Availability"
        - "In Stock (890)"
        - "Ships Today (234)"

  filter_chips_design:
    active_filter_chips:
      examples:
        - "Price: $100-$250 ✕"
        - "Brand: Apple ✕"
        - "4+ Stars ✕"

    chip_placement:
      location: "above product grid, below search bar"
      layout: "horizontal wrap"

    clear_all_action:
      label: "Clear all"
      show_when: "any filter applied"
```

**Example 2: Job Search Filtering**
- content_type: "job listings"
- interface_context: "job board"
- filter_types: "location, salary, experience, job type, remote"
- presentation: "top bar + expandable panel"
- behavior: "apply on button click"

**Output**:
```yaml
filter_labels_and_chips:
  filter_category_labels:
    categories:
      - label: "Job Type"
        options:
          - "Full-Time (1,234)"
          - "Part-Time (234)"
          - "Contract (456)"
          - "Internship (89)"

      - label: "Work Location"
        options:
          - "Remote (567)"
          - "Hybrid (345)"
          - "On-Site (890)"

      - label: "Experience Level"
        options:
          - "Entry Level (234)"
          - "Mid-Level (567)"
          - "Senior (345)"
          - "Executive (89)"

      - label: "Salary Range"
        type: "range slider"
        min: "$0"
        max: "$250k+"

  filter_chips_design:
    active_filter_chips:
      examples:
        - "Remote ✕"
        - "Full-Time ✕"
        - "Salary: $80k-$120k ✕"

    chip_placement:
      location: "below search bar, above job listings"

  filter_panel_components:
    apply_filters_button:
      label: "Show 234 Jobs"
      format: "includes result count"
      placement: "bottom of filter panel, sticky"
```

**Example 3: Content Library Filtering**
- content_type: "articles, videos, guides"
- interface_context: "learning platform"
- filter_types: "content type, topic, difficulty, duration"
- presentation: "left sidebar, expandable"
- behavior: "apply immediately"

**Output**:
```yaml
filter_labels_and_chips:
  filter_category_labels:
    categories:
      - label: "Content Type"
        options:
          - "📄 Articles (234)"
          - "🎥 Videos (123)"
          - "🎧 Podcasts (45)"

      - label: "Topic"
        options:
          - "JavaScript (156)"
          - "Python (134)"
          - "React (98)"
          - "Node.js (76)"

      - label: "Difficulty"
        options:
          - "Beginner (234)"
          - "Intermediate (156)"
          - "Advanced (89)"

      - label: "Duration"
        options:
          - "< 10 minutes (234)"
          - "10-30 minutes (123)"
          - "30-60 minutes (67)"
          - "60+ minutes (34)"

  filter_chips_design:
    active_filter_chips:
      examples:
        - "Videos ✕"
        - "Topic: JavaScript ✕"
        - "Beginner ✕"

    clear_all_action:
      label: "Clear all filters"
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Use semantic form elements (checkbox, radio, fieldset, legend). Associate all form controls with visible labels. Implement proper ARIA attributes for filter sections (aria-expanded for expandable categories). Make all filter chips keyboard accessible buttons with clear accessible names ("Remove Nike filter"). Support keyboard navigation through all filters with Tab and arrow keys. Provide visible focus indicators (2px outline, 3:1 contrast). Use aria-live="polite" for result count updates. Maintain 4.5:1 color contrast for text and 3:1 for UI components. Ensure touch targets are minimum 44x44px on mobile. Announce filter changes to screen readers. Test with screen readers to verify logical reading order and clear announcement of filter states.

**Psychological Principles**: Progressive disclosure (reveal filters as needed, collapse less used categories). Cognitive load reduction (organize into categories, show counts). Recognition over recall (show available options vs. typing). Satisficing behavior (users apply first "good enough" filter, not optimal). Analysis paralysis prevention (limit visible options, use expandable categories). Loss aversion (show result counts to prevent over-filtering to zero). Anchoring effect (default filter values influence selections). Social proof (popular filters suggest what works). Fitts's Law (larger touch targets for frequent filters). Zeigarnik effect (filter chips show incomplete filtering task). Information scent (result counts preview filter impact).

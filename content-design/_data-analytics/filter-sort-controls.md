## Filter and Sort Control Content System v1.0

**Purpose**: Design clear, intuitive copy for filtering and sorting interfaces that helps users refine datasets, understand applied filters, and navigate complex data exploration workflows.

---

**PROMPT:**

Create filter and sort control content for {{data_context}} serving {{user_role}} analyzing {{data_subject}}.

=== DATA CONTEXT ===
Dataset type: {{dataset_type}} (users/transactions/events/metrics/content/logs)
Total record count: {{total_records}}
Data dimensions: {{available_dimensions}}
Data complexity: {{complexity_level}} (simple/moderate/complex/hierarchical)
Update frequency: {{data_freshness}} (real-time/hourly/daily/static)
User familiarity: {{user_expertise}} (first-time/occasional/power user)

=== FILTERING CAPABILITIES ===

**Filter Types Available**:
- Text search: {{has_text_search}} (yes/no)
- Categorical filters: {{categorical_filters}}
- Numeric range filters: {{numeric_filters}}
- Date/time filters: {{date_filters}}
- Boolean toggles: {{boolean_filters}}
- Multi-select: {{multiselect_filters}}
- Hierarchical filters: {{hierarchical_filters}}
- Custom/advanced: {{advanced_filters}}

**Filter Behavior**:
- Filter logic: {{filter_logic}} (AND/OR/mixed)
- Filter dependencies: {{has_dependencies}} (yes/no)
- Dynamic filter options: {{dynamic_options}} (options change based on other filters)
- Filter persistence: {{persistence}} (session/saved/temporary)
- Maximum filters: {{max_filters}}

=== SORTING CAPABILITIES ===

**Sort Options**:
- Sortable columns: {{sortable_fields}}
- Default sort: {{default_sort}}
- Multi-column sort: {{multi_column_sort}} (yes/no)
- Sort directions: {{sort_directions}} (asc/desc/relevance/custom)
- Custom sort orders: {{custom_sort}}

=== USER INTERFACE CONTEXT ===

**Layout Constraints**:
- Filter placement: {{filter_location}} (sidebar/top bar/modal/inline/dropdown)
- Screen size: {{device_type}} (desktop/tablet/mobile/responsive)
- Available space: {{space_constraint}}
- Visual design: {{design_pattern}} (drawer/panel/chips/pills)

**Interaction Pattern**:
- Filter application: {{apply_method}} (auto-apply/manual apply/preview)
- Filter visibility: {{visibility}} (always visible/expandable/toggle)
- Active filter display: {{active_display}} (chips/list/count badge/none)
- Clear mechanism: {{clear_method}} (individual/clear all/reset)

=== OUTPUT REQUIREMENTS ===

```yaml
filter_sort_content:
  filter_interface:
    section_title: "string (2-3 words)"
    collapse_expand_label: "string (if collapsible)"
    filter_count_badge: "string format (e.g., '{{count}} active')"

  search_filter:
    field_label: "string"
    placeholder_text: "string (specific search hints)"
    search_button_text: "string (or empty if auto-search)"
    clear_button_aria: "string"
    no_results_message: "string"
    search_help_text: "string (search capabilities/syntax)"

  categorical_filters:
    - filter_id: "unique_identifier"
      filter_label: "string (dimension name)"
      filter_description: "string (tooltip explaining what this filters)"
      display_type: "dropdown/checkbox/radio/multi-select"

      placeholder_text: "string (for dropdown)"
      select_all_option: "string (for multi-select)"
      deselect_all_option: "string"

      option_count_display: "boolean (show result counts per option)"
      option_format: "string (e.g., '{{label}} ({{count}})')"

      empty_state: "string (when no options available)"
      loading_state: "string (when options are loading)"

  numeric_range_filters:
    - filter_id: "unique_identifier"
      filter_label: "string (metric name with unit)"
      filter_description: "string"
      display_type: "slider/dual-input/preset-ranges"

      min_label: "string (e.g., 'Min', 'From')"
      max_label: "string (e.g., 'Max', 'To')"
      current_range_display: "string format (e.g., '{{min}} - {{max}}')"

      preset_ranges:
        - label: "string"
          value: "range object"

      validation_message: "string (for invalid ranges)"

  date_filters:
    - filter_id: "unique_identifier"
      filter_label: "string"
      filter_description: "string"
      display_type: "preset/calendar/relative/custom"

      preset_options:
        - "Today"
        - "Last 7 days"
        - "Last 30 days"
        - "This month"
        - "Last month"
        - "Custom range"

      custom_range_labels:
        start_date: "string"
        end_date: "string"
        separator: "string (e.g., 'to', '-')"

      relative_date_format: "string (e.g., 'Last {{n}} days')"

  filter_actions:
    apply_button:
      text: "string (if not auto-apply)"
      loading_text: "string (while applying)"
      disabled_tooltip: "string (when no changes)"

    clear_individual:
      aria_label: "string format (e.g., 'Remove {{filter_name}} filter')"
      icon_only: "boolean"

    clear_all:
      button_text: "string"
      confirmation_needed: "boolean"
      confirmation_message: "string"

    save_filter_set:
      button_text: "string"
      description: "string (explains saved filters)"

  active_filters_display:
    section_title: "string (e.g., 'Active filters', 'Filtering by')"
    empty_state: "string (when no filters active)"

    filter_chip_format: "string (e.g., '{{label}}: {{value}}')"
    chip_remove_aria: "string format"

    summary_text: "string format (e.g., 'Showing {{count}} results')"
    summary_with_total: "string format (e.g., '{{filtered}} of {{total}} results')"

  sort_interface:
    section_label: "string (e.g., 'Sort by')"

    sort_dropdown:
      placeholder: "string (default sort state)"
      options_format:
        - label: "string (e.g., 'Name (A-Z)')"
          value: "field_asc"
        - label: "string (e.g., 'Name (Z-A)')"
          value: "field_desc"

    sort_direction_toggle:
      ascending_label: "string (or icon)"
      descending_label: "string (or icon)"
      aria_label: "string format"

    column_header_sort:
      sortable_hint: "string (tooltip or aria)"
      sort_asc_indicator: "string (icon/text)"
      sort_desc_indicator: "string (icon/text)"
      current_sort_aria: "string format"

  advanced_filters:
    section_title: "string"
    toggle_text: "string (show/hide advanced)"
    description: "string (explains advanced capabilities)"

    filter_logic_selector:
      label: "string"
      and_option: "string (e.g., 'Match all filters (AND)')"
      or_option: "string (e.g., 'Match any filter (OR)')"
      help_text: "string (explains difference)"

    custom_filter_builder:
      add_condition_button: "string"
      condition_parts:
        field_label: "string"
        operator_label: "string"
        value_label: "string"
      remove_condition_aria: "string"

  filter_results_feedback:
    results_count:
      zero_results: "string (encouraging message)"
      one_result: "string"
      multiple_results: "string format (e.g., '{{count}} results found')"

    suggestions:
      no_results_suggestions:
        - "string (suggestion 1)"
        - "string (suggestion 2)"

    performance_notes:
      slow_filter_warning: "string (for intensive filters)"
      large_result_warning: "string (for many results)"

  accessibility:
    filter_region_label: "string (landmark label)"
    live_region_announcement: "string format (for result updates)"
    keyboard_shortcuts:
      - shortcut: "key combination"
        action: "string"
        description: "string"

    filter_instructions: "string (how to use filters)"

  mobile_adaptations:
    filter_modal_title: "string"
    filter_modal_done_button: "string"
    filter_modal_cancel_button: "string"
    bottom_sheet_handle_label: "string"
```

=== FILTER MESSAGING PATTERNS ===

**Result Count Feedback**:
- No results: "No {{items}} match your filters. Try adjusting your criteria."
- Filtered results: "Showing {{count}} {{items}} (filtered from {{total}})"
- All results: "Showing all {{count}} {{items}}"

**Filter State Communication**:
- Filters active: "{{count}} filter(s) applied"
- No filters: "No filters applied"
- Filters loading: "Updating filter options..."

**Validation Messages**:
- Invalid range: "Maximum must be greater than minimum"
- Invalid date: "End date must be after start date"
- Required filter: "{{filter_name}} is required"

=== EXAMPLES ===

**Example 1: E-Commerce Product Filtering**
- data_context: "product catalog"
- user_role: "online shopper"
- data_subject: "products"
- dataset_type: "products"
- total_records: "12,487 products"
- available_dimensions: ["category", "price", "brand", "rating", "availability"]
- complexity_level: "moderate"
- user_expertise: "occasional"

Output:
```yaml
filter_sort_content:
  filter_interface:
    section_title: "Refine Results"
    collapse_expand_label: "Filters"
    filter_count_badge: "{{count}} active"

  search_filter:
    field_label: "Search products"
    placeholder_text: "Search by name, brand, or SKU"
    search_button_text: ""
    clear_button_aria: "Clear search"
    no_results_message: "No products match your search. Try different keywords or check your spelling."
    search_help_text: "Search looks through product names, descriptions, and brands"

  categorical_filters:
    - filter_id: "category"
      filter_label: "Category"
      filter_description: "Filter products by category"
      display_type: "checkbox"
      select_all_option: "All categories"
      deselect_all_option: "Clear categories"
      option_count_display: true
      option_format: "{{label}} ({{count}})"
      empty_state: "No categories available"
      loading_state: "Loading categories..."

    - filter_id: "brand"
      filter_label: "Brand"
      filter_description: "Filter by manufacturer or brand"
      display_type: "multi-select"
      placeholder_text: "Select brands..."
      select_all_option: "All brands"
      option_count_display: true

  numeric_range_filters:
    - filter_id: "price"
      filter_label: "Price Range"
      filter_description: "Set minimum and maximum price"
      display_type: "dual-input"
      min_label: "Min"
      max_label: "Max"
      current_range_display: "${{min}} - ${{max}}"
      preset_ranges:
        - label: "Under $25"
          value: {min: 0, max: 25}
        - label: "$25 - $100"
          value: {min: 25, max: 100}
        - label: "$100 - $500"
          value: {min: 100, max: 500}
        - label: "Over $500"
          value: {min: 500, max: 999999}
      validation_message: "Maximum price must be greater than minimum price"

  filter_actions:
    apply_button:
      text: "Apply filters"
      loading_text: "Applying..."
      disabled_tooltip: "No filter changes to apply"

    clear_all:
      button_text: "Clear all filters"
      confirmation_needed: false

  active_filters_display:
    section_title: "Active filters"
    empty_state: "Browse all products"
    filter_chip_format: "{{label}}: {{value}}"
    chip_remove_aria: "Remove {{filter_name}} filter"
    summary_with_total: "Showing {{filtered}} of {{total}} products"

  sort_interface:
    section_label: "Sort by"
    sort_dropdown:
      placeholder: "Featured"
      options_format:
        - label: "Featured"
          value: "featured"
        - label: "Price: Low to High"
          value: "price_asc"
        - label: "Price: High to Low"
          value: "price_desc"
        - label: "Highest Rated"
          value: "rating_desc"
        - label: "Newest Arrivals"
          value: "date_desc"

  filter_results_feedback:
    results_count:
      zero_results: "No products found. Try removing some filters to see more options."
      one_result: "1 product matches your filters"
      multiple_results: "{{count}} products"
```

**Example 2: Analytics Dashboard Date Filtering**
- data_context: "website analytics dashboard"
- user_role: "marketing analyst"
- data_subject: "website sessions"
- dataset_type: "events"
- total_records: "2.4M sessions"
- available_dimensions: ["date range", "traffic source", "device", "country"]
- complexity_level: "moderate"
- user_expertise: "power user"

Output:
```yaml
filter_sort_content:
  filter_interface:
    section_title: "Filters"
    filter_count_badge: "{{count}} active"

  date_filters:
    - filter_id: "date_range"
      filter_label: "Date range"
      filter_description: "Select the time period for your analysis"
      display_type: "preset"
      preset_options:
        - "Today"
        - "Yesterday"
        - "Last 7 days"
        - "Last 30 days"
        - "Last 90 days"
        - "This month"
        - "Last month"
        - "This quarter"
        - "Last quarter"
        - "This year"
        - "Custom range"
      custom_range_labels:
        start_date: "Start date"
        end_date: "End date"
        separator: "to"
      relative_date_format: "Last {{n}} days"

  categorical_filters:
    - filter_id: "traffic_source"
      filter_label: "Traffic source"
      filter_description: "Filter by how visitors found your site"
      display_type: "multi-select"
      placeholder_text: "All sources"
      select_all_option: "All traffic sources"
      option_count_display: true
      option_format: "{{label}} ({{percentage}}%)"

    - filter_id: "device"
      filter_label: "Device type"
      filter_description: "Filter by device category"
      display_type: "checkbox"
      option_count_display: true

  filter_actions:
    apply_button:
      text: "Apply"
      loading_text: "Loading data..."

    clear_all:
      button_text: "Reset filters"

    save_filter_set:
      button_text: "Save as segment"
      description: "Save this filter combination to quickly access it later"

  active_filters_display:
    section_title: "Viewing"
    filter_chip_format: "{{label}}: {{value}}"
    summary_with_total: "{{filtered}} sessions ({{total}} total in period)"

  filter_results_feedback:
    results_count:
      zero_results: "No sessions match these filters. Try expanding your date range or removing filters."
      multiple_results: "{{count}} sessions"

    performance_notes:
      large_result_warning: "Large dataset - some features may load slowly"
```

**Example 3: CRM Contact List Filtering**
- data_context: "contact management system"
- user_role: "sales representative"
- data_subject: "customer contacts"
- dataset_type: "users"
- total_records: "8,392 contacts"
- available_dimensions: ["company size", "industry", "lead status", "last contact date", "deal value"]
- complexity_level: "complex"
- user_expertise: "power user"

Output:
```yaml
filter_sort_content:
  filter_interface:
    section_title: "Filter Contacts"
    collapse_expand_label: "Show filters"
    filter_count_badge: "{{count}}"

  search_filter:
    field_label: "Search contacts"
    placeholder_text: "Search by name, company, email, or phone"
    no_results_message: "No contacts match '{{query}}'. Try a different search term."
    search_help_text: "Searches across contact names, company names, email addresses, and phone numbers"

  categorical_filters:
    - filter_id: "lead_status"
      filter_label: "Lead status"
      filter_description: "Current position in your sales pipeline"
      display_type: "checkbox"
      select_all_option: "All statuses"
      option_count_display: true
      option_format: "{{label}} ({{count}} contacts)"

    - filter_id: "industry"
      filter_label: "Industry"
      filter_description: "Business sector or industry vertical"
      display_type: "multi-select"
      placeholder_text: "Select industries..."
      option_count_display: true

  numeric_range_filters:
    - filter_id: "company_size"
      filter_label: "Company size (employees)"
      filter_description: "Number of employees at the company"
      display_type: "preset-ranges"
      preset_ranges:
        - label: "1-10 (Small business)"
          value: {min: 1, max: 10}
        - label: "11-50 (Growing business)"
          value: {min: 11, max: 50}
        - label: "51-200 (Mid-market)"
          value: {min: 51, max: 200}
        - label: "201-1000 (Enterprise)"
          value: {min: 201, max: 1000}
        - label: "1000+ (Large enterprise)"
          value: {min: 1000, max: 999999}

  date_filters:
    - filter_id: "last_contact"
      filter_label: "Last contacted"
      filter_description: "When you last reached out to this contact"
      display_type: "relative"
      preset_options:
        - "Today"
        - "This week"
        - "This month"
        - "Last 3 months"
        - "More than 6 months ago"
        - "Never contacted"
        - "Custom range"

  advanced_filters:
    section_title: "Advanced filters"
    toggle_text: "Show advanced options"
    description: "Build complex filter combinations with custom logic"

    filter_logic_selector:
      label: "Filter matching"
      and_option: "Match all filters (AND) - More restrictive"
      or_option: "Match any filter (OR) - More inclusive"
      help_text: "AND requires contacts to meet all criteria. OR shows contacts meeting any criteria."

  sort_interface:
    section_label: "Sort by"
    column_header_sort:
      sortable_hint: "Click to sort by this column"
      sort_asc_indicator: "↑"
      sort_desc_indicator: "↓"
      current_sort_aria: "Currently sorted by {{field}}, {{direction}}"

    sort_dropdown:
      options_format:
        - label: "Last contacted (newest first)"
          value: "last_contact_desc"
        - label: "Last contacted (oldest first)"
          value: "last_contact_asc"
        - label: "Company name (A-Z)"
          value: "company_asc"
        - label: "Deal value (highest first)"
          value: "deal_value_desc"
        - label: "Lead score (highest first)"
          value: "lead_score_desc"

  filter_results_feedback:
    results_count:
      zero_results: "No contacts match your filters"
      one_result: "1 contact matches your filters"
      multiple_results: "{{count}} contacts"

    suggestions:
      no_results_suggestions:
        - "Try removing some filters to broaden your search"
        - "Check if your filter values are correct"
        - "Clear all filters to see your full contact list"

  accessibility:
    filter_region_label: "Contact filters"
    live_region_announcement: "Filter applied. Now showing {{count}} contacts."
    keyboard_shortcuts:
      - shortcut: "Ctrl+F"
        action: "Focus search"
        description: "Jump to contact search field"
      - shortcut: "Ctrl+Shift+F"
        action: "Open filters"
        description: "Open filter panel"
```

---

**Accessibility Requirements**: All filter controls must be keyboard navigable with clear focus states. Use semantic HTML (fieldset, legend) for filter groups. Announce filter results via ARIA live regions. Multi-select controls must support standard selection patterns (arrow keys, space, enter). Provide clear labels for all form fields. Sort indicators must be programmatically determinable. Filter chips must be removable via keyboard. Support screen reader announcements for dynamic filter option changes.

**Psychological Principles**: Progressive disclosure prevents cognitive overload (information processing theory). Result counts provide immediate feedback (operant conditioning). Clear filter states reduce uncertainty (perceived control). Preset options reduce decision fatigue (choice architecture). Active filter visibility supports mental model formation (working memory). Undo/clear mechanisms reduce risk aversion (safety net principle). Sort options follow user mental models (domain familiarity).

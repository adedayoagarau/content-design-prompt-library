## Advanced Search UI & Field Labels Design v1.0

**Purpose**: Create intuitive advanced search interfaces that empower users to build complex queries, combine multiple criteria, understand search operators, and refine results precisely without requiring technical expertise.

---

**PROMPT:**

You are designing advanced search UI copy for {{search_domain}} within {{platform_type}}. Create labels and guidance that help users construct {{query_complexity}}, combine {{search_criteria}}, understand {{operators}}, and maintain {{brand_voice}}.

=== ADVANCED SEARCH CONTEXT ===
Search domain: {{search_domain}} (products/documents/data/people/legal/academic)
Platform type: {{platform_type}} (e-commerce/database/library/recruitment/legal research)
Query complexity: {{query_complexity}} (boolean/fielded/proximity/faceted/fuzzy)
Search criteria: {{search_criteria}} (text/dates/numbers/categories/locations)
Operators available: {{operators}} (AND/OR/NOT/quotes/wildcards/proximity)
User expertise: {{user_expertise}} (novice/intermediate/expert/mixed)

=== UI STRATEGY ===
Interface style: {{interface_style}} (form-based/query builder/text with helpers/mixed)
Operator presentation: {{operator_presentation}} (dropdowns/buttons/typed/natural language)
Query preview: {{query_preview}} (show constructed query/hide complexity/optional toggle)
Saved searches: {{saved_searches}} (yes/no - save and reuse complex queries)
Help availability: {{help}} (inline tips/tooltips/help doc link/examples)

=== OUTPUT REQUIREMENTS ===

```yaml
advanced_search_ui:
  interface_header:
    page_title: "Advanced Search" or "Detailed Search" or "Search Builder"
    description: "Find exactly what you need with detailed search options"

    alternative_titles:
      - "Refine Your Search"
      - "Power Search"
      - "Custom Search"
      - "Search Filters"

  search_field_labels:
    basic_fields:
      all_words:
        label: "All of these words"
        placeholder: "wireless bluetooth headphones"
        help_text: "Results include all words (AND logic)"
        example: "Enter words that must all appear"

      exact_phrase:
        label: "This exact phrase"
        placeholder: "noise cancelling technology"
        help_text: "Results match exact phrase in quotes"
        example: "Use for specific phrases or product names"

      any_words:
        label: "Any of these words"
        placeholder: "headphones earbuds headset"
        help_text: "Results include at least one word (OR logic)"
        example: "Enter synonyms or alternatives"

      without_words:
        label: "None of these words"
        placeholder: "refurbished used"
        help_text: "Exclude results containing these words (NOT logic)"
        example: "Filter out unwanted terms"

    fielded_search:
      title_field:
        label: "In the title"
        placeholder: "Product name or article title"
        help_text: "Search only in titles/headlines"

      description_field:
        label: "In the description"
        placeholder: "Features or content"

      author_field:
        label: "Author or creator"
        placeholder: "Author name"

      category_field:
        label: "Category"
        type: "dropdown or multi-select"
        placeholder: "Select categories..."

    range_fields:
      price_range:
        label: "Price"
        min_field: "Min price"
        max_field: "Max price"
        format: "$0 - $500"
        currency: "display with appropriate symbol"

      date_range:
        label: "Date range"
        from_field: "From date"
        to_field: "To date"
        format: "MM/DD/YYYY or date picker"

        presets:
          - "Last 24 hours"
          - "Last week"
          - "Last month"
          - "Last year"
          - "Custom range..."

      numeric_range:
        label: "[Attribute] range"
        examples: ["Size", "Weight", "Rating", "Bedrooms"]
        min_max_fields: "Min and Max inputs"

  boolean_operators:
    operator_labels:
      and:
        label: "AND (all terms must appear)"
        symbol: "AND / & / +"
        explanation: "Narrows results, both terms required"

      or:
        label: "OR (any term can appear)"
        symbol: "OR / |"
        explanation: "Broadens results, either term acceptable"

      not:
        label: "NOT (exclude term)"
        symbol: "NOT / - / !"
        explanation: "Removes results with this term"

    operator_presentation:
      dropdown_style:
        options: ["AND", "OR", "NOT"]
        between_fields: "connect multiple search fields"

      button_group_style:
        layout: "[Field] [AND/OR/NOT button] [Field]"
        visual: "connected button group, active state highlighted"

      natural_language:
        format: "results must contain [___] and [___] but not [___]"
        fill_blanks: "users fill in blanks, system builds query"

  advanced_operators:
    wildcard_search:
      label: "Use * for wildcard"
      examples:
        - "blue* finds blue, blues, bluetooth"
        - "*phone finds phone, smartphone, telephone"

      help_text: "Use * to match any characters"

    phrase_search:
      label: "Use quotes for exact phrases"
      examples:
        - '"noise cancelling" finds exact phrase'
        - "without quotes, finds pages with both words anywhere"

      help_text: "Enclose phrases in quotation marks"

    proximity_search:
      label: "Proximity search (advanced)"
      format: "term1 NEAR/X term2"
      example: '"password" NEAR/5 "reset"'
      explanation: "Finds terms within X words of each other"

    fuzzy_search:
      label: "Fuzzy matching"
      format: "term~"
      example: "bluetooth~ finds Bluetooth, bluetoth, bluetooh"
      explanation: "Matches similar spellings"

  query_builder_interface:
    add_rule_button:
      label: "+ Add search rule" or "+ Add condition"
      behavior: "adds new search criteria row"

    remove_rule:
      label: "✕ Remove" or "Delete"
      icon: "✕ or trash icon"
      position: "end of each rule row"

    rule_structure:
      format: "[Field dropdown] [Operator dropdown] [Value input] [Remove ✕]"

      example_row: |
        [Title] [contains] [wireless headphones] [✕]
        [Price] [between] [$50] and [$200] [✕]
        [Rating] [greater than] [4 stars] [✕]

    grouping_logic:
      concept: "group rules with AND/OR"
      visual: "indentation or brackets show grouping"
      advanced_users: "create complex nested queries"

  query_preview:
    constructed_query:
      label: "Your search query:" or "Query preview:"
      display: "show plain English or technical query"

      examples:
        plain_english: "Find products with 'wireless' AND 'headphones' in title, price $50-$200, rating 4+ stars"

        technical: '(title: "wireless headphones") AND (price: 50..200) AND (rating: >= 4)'

      toggle: "switch between plain and technical view"

    edit_query:
      advanced_option: "Edit query directly (for power users)"
      text_area: "allow typing/pasting query syntax"
      validation: "show errors if syntax incorrect"

  search_actions:
    search_button:
      label: "Search" or "Find Results" or "Apply Search"
      styling: "primary button, prominent"
      keyboard: "Enter key submits"

    reset_button:
      label: "Clear All" or "Reset" or "Start Over"
      styling: "secondary button or text link"
      behavior: "clears all fields to default state"

    save_search:
      label: "Save this search" or "Save search criteria"
      behavior: "saves query for reuse"
      naming: "prompt for search name"
      access: "show in 'Saved Searches' or 'My Searches'"

  help_and_guidance:
    inline_tips:
      placement: "below or beside field labels"
      icon: "ⓘ info icon"
      format: "short phrase, 5-10 words"

      examples:
        - "Separate multiple words with spaces"
        - "Use quotes for exact phrases"
        - "Use * as wildcard for partial words"

    tooltips:
      trigger: "hover or click info icon"
      content: "1-2 sentences explaining field or operator"

      example: "All of these words: Results will include every word you enter. This narrows your search to more specific results."

    examples_section:
      heading: "Search examples" or "How to use advanced search"
      format: "expandable section with common examples"

      examples:
        - example: "Find products with all words"
          query: 'All words: "wireless bluetooth headphones"'
          result: "Finds products with all three words"

        - example: "Exclude refurbished items"
          query: "Without: refurbished"
          result: "Shows only new items"

        - example: "Price range search"
          query: "Price: $100 - $300"
          result: "Shows items in this range"

    help_link:
      label: "How to use advanced search" or "Search tips"
      destination: "detailed help documentation"
      format: "text link or button"

  saved_searches:
    saved_search_list:
      heading: "Your saved searches" or "My searches"
      placement: "sidebar or above search form"

      list_items:
        - name: "user-provided name"
          query_preview: "short description or query"
          actions: ["Run", "Edit", "Delete"]
          last_run: "timestamp"

    save_dialog:
      title: "Save search"
      name_field:
        label: "Search name"
        placeholder: "e.g., Wireless headphones under $200"

      description_field:
        label: "Description (optional)"
        placeholder: "Monthly check for new arrivals"

      notification_option:
        label: "☑ Email me when new results match this search"
        frequency: "daily/weekly/monthly"

  mobile_optimizations:
    accordion_sections:
      pattern: "group advanced fields into collapsible sections"
      default_state: "basic fields visible, advanced collapsed"

      sections:
        - "Basic Search"
        - "Date & Price Filters"
        - "Advanced Options"

    simplified_operators:
      approach: "hide technical operators, use natural language"
      example: "Must include: [___]" instead of "AND"

    stacked_layout:
      fields: "vertical stacking, full width"
      buttons: "full-width or side-by-side if space allows"

  accessibility_implementation:
    semantic_structure:
      form: "<form role='search'>"
      fieldsets: "group related fields in <fieldset> with <legend>"
      labels: "all inputs have associated <label>"

    aria_attributes:
      required_fields:
        aria_required: "true for required fields"

      help_text:
        aria_describedby: "associate help text with input"

      error_messages:
        aria_invalid: "true if validation fails"
        aria_describedby: "link to error message"

      dynamic_content:
        aria_live: "polite for query preview updates"

    keyboard_navigation:
      tab_order: "logical field order"
      enter_submit: "Enter key submits form"
      escape_clear: "optional - Escape clears current field"

    screen_reader_support:
      field_labels: "descriptive labels read with input"
      help_text: "help text announced when field focused"
      operator_meaning: "explain AND/OR/NOT in accessible way"

    visual_accessibility:
      contrast: "4.5:1 for labels and help text"
      focus_indicators: "2px outline, 3:1 contrast"
      error_styling: "don't rely on color alone, use icons + text"

  analytics_tracking:
    events_to_track:
      - event: "advanced_search_used"
        properties: ["fields_used", "operators_used", "query_complexity"]

      - event: "saved_search_created"
        properties: ["query_criteria", "notification_enabled"]

      - event: "advanced_search_abandoned"
        properties: ["fields_filled", "time_spent"]

      - event: "help_viewed"
        properties: ["help_type", "field_context"]

    insights:
      feature_usage: "which fields and operators used most"
      complexity_patterns: "simple vs complex queries"
      success_rate: "searches yielding results"
      help_dependency: "correlation between help usage and success"
```

=== ADVANCED SEARCH COPY GUIDELINES ===

**Field Labels**:
- Be specific: "All of these words" > "Keywords"
- Explain logic: "Any of these words (OR)" clarifies behavior
- Use natural language: "None of these words" > "NOT operator"
- Front-load meaning: "Price range" > "Range: Price"

**Help Text**:
- Keep concise: 5-10 words ideal
- Be instructive: explain what to enter, not just definition
- Provide examples: "wireless bluetooth headphones"
- Use active voice: "Enter words" > "Words can be entered"

**Operator Labels**:
- Explicit: "AND (all terms)" > just "AND"
- Contextual: explain effect on results
- Consistent: use same terminology throughout
- Plain language: "Must include" alongside "AND" for novices

**Button Labels**:
- Action-oriented: "Search" or "Find Results"
- Clear purpose: "Clear All" > "Reset" (more specific)
- Save function: "Save this search" > "Save" (contextual)

=== EXAMPLES ===

**Example 1: E-commerce Advanced Product Search**
- search_domain: "products"
- platform_type: "e-commerce electronics"
- user_expertise: "mixed (novice to intermediate)"
- interface_style: "form-based with clear sections"

**Output**:
```yaml
advanced_search_ui:
  interface_header:
    page_title: "Advanced Product Search"
    description: "Find exactly what you're looking for with detailed filters"

  search_field_labels:
    basic_fields:
      all_words:
        label: "Product must include these words"
        placeholder: "wireless bluetooth"
        help_text: "All words must appear in product name or description"

      exact_phrase:
        label: "Exact product name or phrase"
        placeholder: "AirPods Pro"
        help_text: "Find products with this exact phrase"

      without_words:
        label: "Exclude products with these words"
        placeholder: "refurbished used"

    range_fields:
      price_range:
        label: "Price range"
        min_field: "Min: $0"
        max_field: "Max: $500"

      rating:
        label: "Minimum customer rating"
        options: ["Any rating", "4+ stars", "4.5+ stars", "5 stars only"]

  search_actions:
    search_button:
      label: "Search Products"

    save_search:
      label: "Save this search"
      notification: "☑ Email me when new products match"
```

**Example 2: Legal Document Search**
- search_domain: "legal documents"
- platform_type: "legal research database"
- user_expertise: "expert (lawyers, paralegals)"
- interface_style: "query builder + direct query editing"

**Output**:
```yaml
advanced_search_ui:
  interface_header:
    page_title: "Advanced Search"
    description: "Construct complex boolean queries to find relevant case law and statutes"

  search_field_labels:
    fielded_search:
      case_name:
        label: "Case name"
        placeholder: "Smith v. Jones"

      citation:
        label: "Citation"
        placeholder: "123 F.3d 456"

      court:
        label: "Court"
        type: "dropdown with hierarchy"

      date_range:
        label: "Decision date"
        from_to: true

      full_text:
        label: "Full text contains"
        placeholder: "Enter search terms..."

  advanced_operators:
    proximity_search:
      label: "Proximity search"
      format: "term1 /X term2"
      example: "negligence /5 medical"
      help: "Finds terms within X words of each other"

    wildcard:
      label: "Wildcard (*)"
      example: "contract* finds contract, contracts, contractual"

  query_preview:
    constructed_query:
      display: 'court: "California Supreme Court" AND date: [2020..2025] AND text: "breach of contract"'

      edit_directly:
        enabled: true
        label: "Edit query syntax directly"
```

**Example 3: Job Search Platform**
- search_domain: "job listings"
- platform_type: "job board"
- user_expertise: "novice to intermediate"
- interface_style: "form with natural language"

**Output**:
```yaml
advanced_search_ui:
  interface_header:
    page_title: "Refine Your Job Search"
    description: "Use detailed filters to find your perfect job"

  search_field_labels:
    basic_fields:
      job_title:
        label: "Job title or keywords"
        placeholder: "Software Engineer, Designer"

      company:
        label: "Company name"
        placeholder: "Google, Startup"

    range_fields:
      salary_range:
        label: "Desired salary"
        min_max: true
        format: "$80,000 - $120,000"

    categories:
      job_type:
        label: "Job type"
        options: ["Full-time", "Part-time", "Contract", "Internship"]
        multi_select: true

      work_location:
        label: "Work location"
        options: ["Remote", "Hybrid", "On-site"]

      experience_level:
        label: "Experience level"
        options: ["Entry", "Mid-level", "Senior", "Executive"]

  search_actions:
    search_button:
      label: "Find Jobs"

    save_search:
      label: "Save this search"
      notification: "☑ Email me daily with new matching jobs"
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Use semantic form elements (form, fieldset, legend, label, input). Associate all form controls with visible labels using label element or aria-labelledby. Provide help text via aria-describedby. Support keyboard navigation through all fields and controls with logical tab order. Ensure visible focus indicators (2px outline, 3:1 contrast). Maintain 4.5:1 color contrast for all text. Make all interactive elements keyboard accessible (Enter to submit, Tab to navigate). Announce dynamic query preview updates to screen readers using aria-live. Provide clear error messages with aria-invalid and aria-describedby. Make operator dropdowns and buttons accessible with proper ARIA roles. Test with screen readers to ensure field purposes and relationships are clear.

**Psychological Principles**: Progressive disclosure (show basic fields, hide advanced until needed). Cognitive load reduction (group related fields, provide clear labels). Recognition over recall (show options in dropdowns vs. requiring memorization). Error prevention (validation and help text prevent mistakes). Learned helplessness prevention (help resources empower users). Satisficing behavior (provide presets and saved searches for quick reuse). Choice architecture (order fields by importance). Anchoring effect (default values influence query construction). Confirmation bias (query preview confirms user's intent). Goal gradient effect (showing progress toward complete query motivates completion). Zeigarnik effect (saved searches enable returning to incomplete searches).

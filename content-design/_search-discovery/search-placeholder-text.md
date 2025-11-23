## Search Placeholder Text Design v1.0

**Purpose**: Create effective search placeholder text that guides users on what they can search for, sets appropriate expectations, provides examples, and encourages search engagement while remaining concise and accessible.

---

**PROMPT:**

You are designing search placeholder text for {{search_context}} within {{site_type}}. Create placeholder copy that helps users understand {{search_scope}}, provides helpful examples of {{search_content_types}}, and encourages engagement while maintaining {{brand_voice}}.

=== SEARCH CONTEXT ===
Search context: {{search_context}} (site-wide/product search/documentation/content library/help center)
Site type: {{site_type}} (e-commerce/SaaS/content/marketplace/internal tool)
Search scope: {{search_scope}} (entire site/current section/specific content type)
Searchable content: {{search_content_types}} (products/articles/people/files/mixed)
Search capabilities: {{capabilities}} (keyword/filters/advanced/natural language)
User search behavior: {{user_behavior}} (frequent/occasional/first-time/exploratory)

=== PLACEHOLDER STRATEGY ===
Placeholder purpose: {{placeholder_purpose}} (instruction/example/inspiration/prompt)
Character limit: {{char_limit}} (typically 30-50 characters for visibility)
Dynamic content: {{dynamic}} (static/contextual/personalized)
Localization needs: {{localization}} (single language/multi-language)
Accessibility requirements: {{a11y_approach}} (visible label/aria-label/both)

=== OUTPUT REQUIREMENTS ===

```yaml
search_placeholder:
  primary_placeholder:
    text: "string (main placeholder copy)"
    character_count: number
    rationale: "why this text is effective"
    tone: "instructional/suggestive/conversational/action-oriented"

    alternative_options:
      - text: "variation 1"
        use_case: "when this variation is better"
      - text: "variation 2"
        use_case: "specific context"

    mobile_adaptation:
      text: "shorter version if needed"
      rationale: "why mobile differs"

  placeholder_patterns:
    instructional:
      format: "Search [content type]..."
      examples:
        - "Search products..."
        - "Search documentation..."
        - "Search articles..."
      pros: "clear about what's searchable"
      cons: "can be generic"

    example_based:
      format: "Try '[specific example]'"
      examples:
        - "Try 'wireless headphones'"
        - "Try 'React hooks tutorial'"
        - "Search: 'red shoes' or 'Nike'"
      pros: "teaches search syntax, inspires queries"
      cons: "may bias toward example"

    action_oriented:
      format: "[Action verb] [content]..."
      examples:
        - "Find products..."
        - "Discover articles..."
        - "Search for help..."
      pros: "encourages interaction"
      cons: "slightly more verbose"

    question_based:
      format: "What are you looking for?"
      examples:
        - "What can we help you find?"
        - "What brings you here today?"
      pros: "conversational, welcoming"
      cons: "longer, may not fit all contexts"

    scope_specific:
      format: "Search in [specific area]"
      examples:
        - "Search in Electronics"
        - "Search this document"
        - "Search your projects"
      pros: "clarifies search boundaries"
      cons: "requires sufficient context"

    capability_highlighting:
      format: "Search by [capability]"
      examples:
        - "Search by name, SKU, or category"
        - "Search articles, videos, or podcasts"
        - "Search commands or files"
      pros: "educates on search features"
      cons: "can be too long, complex"

  contextual_variations:
    homepage_global_search:
      placeholder: "Search thousands of products..."
      rationale: "emphasize breadth of inventory"
      character_count: 32

    category_page_search:
      placeholder: "Search in [Category Name]"
      rationale: "scope to current category for relevance"
      dynamic_element: "[Category Name]"

    documentation_search:
      placeholder: "Search docs..."
      rationale: "concise, users know they're in docs"

    help_center_search:
      placeholder: "Describe your issue..."
      rationale: "natural language encourages questions"

    internal_tool_search:
      placeholder: "Search commands, files, or people"
      rationale: "clarify multiple search types available"

    logged_in_personalized:
      placeholder: "Search your [content]..."
      examples: ["Search your files...", "Search your orders..."]
      rationale: "personal pronoun increases relevance"

    mobile_specific:
      placeholder: "Search"
      rationale: "extremely limited space, keep minimal"
      voice_search: "optional microphone icon hint"

  dynamic_placeholder_rotation:
    enabled: true/false
    rotation_strategy: "show different examples on each page load"

    placeholder_set:
      - "Try 'wireless headphones'"
      - "Try 'gaming laptops'"
      - "Try 'standing desk'"
      rationale: "educates users on search capabilities, provides inspiration"

    rotation_timing:
      method: "on page load/on focus/timed rotation"
      frequency: "each visit/daily/weekly"

  search_types_education:
    multiple_content_types:
      placeholder: "Search products, articles, or help..."
      pros: "users understand full scope"
      cons: "longer, may overwhelm"

    filter_hints:
      placeholder: "Search (use quotes for exact match)"
      advanced_hint: true
      pros: "educates power users"
      cons: "too technical for average users"

    natural_language:
      placeholder: "Ask us anything..."
      rationale: "signals AI/natural language support"
      use_case: "chatbot or advanced search"

  accessibility_implementation:
    label_strategy:
      visible_label: "include visual 'Search' label near input"
      aria_label: "descriptive label for screen readers"
      placeholder_role: "supplementary, not primary label"

    screen_reader_announcement:
      input_label: "aria-label='Search site'"
      placeholder: "aria-placeholder='Type product name or category'"
      required: "never rely solely on placeholder for accessibility"

    placeholder_visibility:
      color_contrast: "4.5:1 minimum (WCAG AA)"
      disappears_on_focus: "yes, standard behavior"
      reappears_when_empty: "yes"

  localization_considerations:
    translation_expansion:
      english_baseline: "Search products..."
      german_example: "Produkte suchen..."
      expansion_factor: "plan for 30-40% longer in some languages"
      character_limit_flexibility: "allow flexibility for translations"

    cultural_appropriateness:
      formal_vs_informal: "match cultural norms (e.g., formal German vs casual English)"
      idioms: "avoid idioms that don't translate"
      examples: "use locally relevant product/content examples"

    rtl_languages:
      placeholder_alignment: "right-aligned for Arabic, Hebrew"
      icon_position: "search icon on right for RTL"

  brand_voice_adaptation:
    professional:
      example: "Search documentation..."
      characteristics: "clear, efficient, no fluff"

    friendly:
      example: "What can we help you find today?"
      characteristics: "warm, conversational, welcoming"

    playful:
      example: "Find your next favorite thing!"
      characteristics: "energetic, fun, engaging"

    technical:
      example: "Search by keyword, regex, or command"
      characteristics: "precise, feature-highlighting, for power users"

    luxury:
      example: "Discover curated collections..."
      characteristics: "elegant, aspirational, refined"

  analytics_and_optimization:
    track_placeholder_effectiveness:
      metrics:
        - "search_engagement_rate"
        - "time_to_first_search"
        - "placeholder_variation_performance"

    a_b_testing:
      test_hypotheses:
        - hypothesis: "Example-based placeholders increase search usage"
          variant_a: "Search products..."
          variant_b: "Try 'wireless headphones'"
          success_metric: "search initiation rate"

        - hypothesis: "Question format increases engagement"
          variant_a: "Search..."
          variant_b: "What are you looking for?"
          success_metric: "searches per session"

    optimization_insights:
      low_engagement: "consider more inspiring/instructive placeholder"
      high_abandonment: "placeholder may set wrong expectations"
      successful_patterns: "iterate on what works for your audience"
```

=== PLACEHOLDER COPY GUIDELINES ===

**Length Considerations**:
- Desktop: 30-50 characters visible in typical search box
- Mobile: 20-30 characters due to smaller input fields
- Truncation: placeholder truncates with ellipsis if too long
- Keep concise: users should read at a glance

**Tone Best Practices**:
- Match site voice: formal for professional sites, casual for consumer
- Avoid cutesy: "Type your heart out!" may annoy task-oriented users
- Be helpful: guide rather than command
- Stay positive: "Search..." not "You can try searching..."

**Content Guidelines**:
- Be specific: "Search products" > "Search"
- Provide examples: "Try 'yoga mat'" teaches syntax
- Indicate scope: "Search in Electronics" clarifies boundaries
- Avoid obvious: "Type here..." adds no value

**Accessibility Notes**:
- Don't rely solely on placeholder for instruction
- Include visible label for screen readers
- Ensure sufficient color contrast
- Consider users who can't see placeholder disappear on focus

=== EXAMPLES ===

**Example 1: E-commerce Product Search**
- search_context: "product search on homepage"
- site_type: "e-commerce electronics retailer"
- search_scope: "entire product catalog"
- search_content_types: "products (electronics)"
- user_behavior: "frequent, purposeful searching"
- brand_voice: "helpful and efficient"

**Output**:
```yaml
search_placeholder:
  primary_placeholder:
    text: "Search products..."
    character_count: 18
    rationale: "Clear, concise, indicates searchable content type without being overly long"
    tone: "instructional"

    alternative_options:
      - text: "Find phones, laptops, and more..."
        use_case: "homepage to showcase breadth"
      - text: "Try 'wireless headphones'"
        use_case: "A/B test to inspire searches"

    mobile_adaptation:
      text: "Search"
      rationale: "Limited mobile screen space, voice search icon provides additional context"

  contextual_variations:
    category_page_search:
      placeholder: "Search in Laptops"
      rationale: "User is in Laptops category, scope search to increase relevance"
      dynamic_element: "Category name changes based on page"

    logged_in_personalized:
      placeholder: "Search your orders..."
      rationale: "Account page search focuses on user's personal data"

  dynamic_placeholder_rotation:
    enabled: true
    rotation_strategy: "rotate on page load"

    placeholder_set:
      - "Try 'wireless headphones'"
      - "Try 'gaming laptop'"
      - "Try '4K monitor'"
      - "Try 'mechanical keyboard'"
      rationale: "Provides search inspiration, showcases popular categories"

  accessibility_implementation:
    label_strategy:
      visible_label: "Search icon + 'Search' text label above/beside input"
      aria_label: "Search products"

  brand_voice_adaptation:
    friendly:
      example: "What can we help you find today?"
      rationale: "More welcoming, but tested at 41 chars (may be too long)"
```

**Example 2: Documentation Search**
- search_context: "documentation site search"
- site_type: "technical documentation"
- search_scope: "documentation pages only"
- search_content_types: "guides, API references, tutorials"
- user_behavior: "task-oriented, looking for specific info"
- brand_voice: "clear and professional"

**Output**:
```yaml
search_placeholder:
  primary_placeholder:
    text: "Search docs..."
    character_count: 13
    rationale: "Concise, users know they're in docs, no need to elaborate"
    tone: "instructional"

    alternative_options:
      - text: "Search documentation..."
        use_case: "more explicit but longer (23 chars)"
      - text: "Find guides, APIs, and more..."
        use_case: "highlights content types (29 chars)"

  placeholder_patterns:
    example_based:
      examples:
        - "Try 'authentication'"
        - "Try 'React hooks'"
        - "Search: 'API rate limits'"
      rationale: "Educates users on search terms, shows scope"

  contextual_variations:
    api_reference_section:
      placeholder: "Search API methods..."
      rationale: "Scoped to API section, more specific"

    getting_started:
      placeholder: "Search tutorials..."
      rationale: "Beginners likely searching for how-to content"

  accessibility_implementation:
    label_strategy:
      visible_label: "Search icon with 'Search documentation' label"
      aria_label: "Search documentation"
      placeholder_role: "supplementary hint"

  brand_voice_adaptation:
    technical:
      example: "Search by keyword or regex..."
      rationale: "Power users appreciate advanced search hints"
```

**Example 3: Content Discovery Platform**
- search_context: "global search across all content"
- site_type: "streaming service / content platform"
- search_scope: "movies, shows, actors, genres"
- search_content_types: "mixed (titles, people, categories)"
- user_behavior: "exploratory browsing and specific searches"
- brand_voice: "engaging and conversational"

**Output**:
```yaml
search_placeholder:
  primary_placeholder:
    text: "Search movies, shows, or people..."
    character_count: 35
    rationale: "Clarifies multiple searchable types, encourages diverse queries"
    tone: "instructional"

    alternative_options:
      - text: "What do you want to watch?"
        use_case: "conversational, question-based (28 chars)"
      - text: "Find your next favorite..."
        use_case: "inspirational, discovery-focused (25 chars)"

  dynamic_placeholder_rotation:
    enabled: true
    rotation_strategy: "rotate every 3 seconds when input is focused"

    placeholder_set:
      - "Try 'action movies'"
      - "Try 'Tom Hanks'"
      - "Try 'sci-fi thriller'"
      - "Try 'award winners'"
      rationale: "Inspires different search types (genres, actors, moods, categories)"

  contextual_variations:
    mobile_specific:
      placeholder: "Search..."
      rationale: "Minimal on mobile, voice search icon provides hint"

    kids_profile:
      placeholder: "Find cartoons and movies for kids..."
      rationale: "Scoped to age-appropriate content"

  brand_voice_adaptation:
    engaging:
      example: "What's your vibe today?"
      rationale: "Playful, mood-based discovery"
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Never rely solely on placeholder text for input labels - include visible label or aria-label. Ensure placeholder text has sufficient color contrast (4.5:1 minimum against background). Placeholder should disappear when user types and reappear when input is empty. Use aria-placeholder attribute to explicitly define placeholder for assistive technologies. Ensure search input has proper accessible name via label element or aria-label. Test with screen readers to verify placeholder is announced appropriately. Consider users who can't see placeholder disappear on focus - provide persistent instruction if needed. Avoid using placeholder as substitute for help text or instructions.

**Psychological Principles**: Priming effect (placeholder examples influence search terms users choose). Cognitive fluency (clear, simple placeholders reduce friction). Analysis paralysis reduction (examples help users start searching). Social proof (popular search examples suggest what others search). Information scent (placeholder hints at search capabilities). Affordance (placeholder indicates input is for searching). Recognition over recall (examples remind users what they can search for). Anchoring bias (first placeholder example may anchor user thinking). Novelty effect (rotating placeholders maintain engagement). Curiosity gap (inspiring placeholders encourage exploration).

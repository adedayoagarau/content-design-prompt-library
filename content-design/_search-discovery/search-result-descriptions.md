## Search Result Description & Snippet Design v1.0

**Purpose**: Create informative, scannable search result descriptions that help users evaluate relevance, understand content before clicking, provide context for search terms, and optimize for both user experience and search engine visibility.

---

**PROMPT:**

You are designing search result descriptions for {{content_type}} within {{search_context}}. Create descriptions that help users evaluate {{result_relevance}}, provide {{context_needed}}, highlight {{search_term_location}}, and maintain {{brand_voice}}.

=== SEARCH RESULT CONTEXT ===
Content type: {{content_type}} (products/articles/pages/people/files/mixed)
Search context: {{search_context}} (site search/Google/marketplace/database)
Result relevance: {{result_relevance}} (exact match/related/tangential)
Context needed: {{context_needed}} (what/where/when/why information)
Search term location: {{search_term_location}} (in title/description/content)
Character limit: {{char_limit}} (typically 120-160 for meta, 200-300 for internal)

=== DESCRIPTION STRATEGY ===
Description source: {{source}} (meta description/auto-generated/manual/hybrid)
Search term highlighting: {{highlighting}} (bold/background/none)
Result components: {{components}} (title/description/breadcrumb/metadata)
Truncation method: {{truncation}} (ellipsis/sentence boundary/word boundary)
Snippet type: {{snippet_type}} (static/dynamic/contextual)

=== OUTPUT REQUIREMENTS ===

```yaml
search_result_descriptions:
  result_structure:
    title:
      purpose: "primary clickable element, shows page/item name"
      character_limit: "50-60 characters (desktop), 40-50 (mobile)"
      formatting: "clickable link, largest text in result"
      search_term_treatment: "bold matching terms"

      examples:
        - "Wireless Bluetooth <strong>Headphones</strong> - Premium Sound"
        - "How to Reset Your <strong>Password</strong> | Help Center"

    description_snippet:
      purpose: "provide context, help user decide to click"
      character_limit:
        google: "120-160 characters (mobile favors shorter)"
        internal_search: "200-300 characters for more context"
        product_listings: "100-150 characters"

      content: "summarize page, include keywords naturally, actionable"

      examples:
        product: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and superior sound quality. Available in black, silver, and blue."

        article: "Learn how to reset your password in three easy steps. Includes instructions for both web and mobile app, plus troubleshooting tips."

        page: "Browse our collection of wireless headphones from top brands including Sony, Bose, and Apple. Free shipping on orders over $50."

    url_breadcrumb:
      purpose: "show site hierarchy and page location"
      format: "example.com › Electronics › Headphones"
      character_limit: "variable, truncate middle if too long"

      display: "muted color, smaller text, above or below title"

  description_writing_principles:
    front_load_keywords:
      rationale: "users scan first few words, search engines prioritize early words"

      good: "Reset your password in three steps. Works for web and mobile..."
      bad: "This article will help you understand the process of how to reset your password..."

    be_specific:
      avoid_generic: "Learn more about our products" (vague)
      be_concrete: "Browse 500+ wireless headphones with free shipping" (specific)

    include_value_proposition:
      product: "Free shipping, 30-day returns, 2-year warranty"
      article: "Step-by-step guide with screenshots"
      service: "Available 24/7, instant support"

    call_to_action:
      implicit: "Learn how to...", "Discover...", "Browse..."
      explicit: "Shop now", "Read more", "Get started"
      natural: "integrate CTA naturally into description"

    avoid_duplication:
      don't_repeat_title: "if title says 'Wireless Headphones', description adds new info"
      add_context: "description expands on title, doesn't restate"

    active_voice:
      preferred: "Reset your password in three steps"
      avoid_passive: "Your password can be reset..."

  search_term_highlighting:
    highlighting_method:
      bold: "<strong>search term</strong>"
      background: "<mark>search term</mark>"
      color: "different text color for term"

      recommended: "bold for clarity and accessibility"

    highlighting_rules:
      exact_matches: "highlight exact search term"
      partial_matches: "highlight if term is stem (search vs. searching)"
      synonyms: "optional - highlight related terms"

      limit: "don't over-highlight - keep scannable"

    examples:
      query: "password reset"
      result: "Learn how to <strong>reset</strong> your <strong>password</strong> in three steps."

  dynamic_vs_static_descriptions:
    static_description:
      source: "meta description or manually written"
      pros: "consistent, SEO-optimized, human-written quality"
      cons: "may not match query context"

      use_case: "general search results, SEO priority"

    dynamic_snippet:
      source: "extract relevant sentence(s) containing search terms"
      pros: "contextually relevant, shows term in context"
      cons: "may be incomplete sentences, harder to read"

      use_case: "internal search, query-specific relevance priority"

    hybrid_approach:
      logic: "use static if high quality, fall back to dynamic for query-specific relevance"
      best_practice: "show snippet with search term if available, else default description"

  result_metadata:
    product_results:
      include:
        - "Price: $299"
        - "Rating: ★★★★☆ (4.5)"
        - "Reviews: (234)"
        - "Availability: In Stock"

      format: "on separate line or inline after description"

    article_results:
      include:
        - "Author: Jane Smith"
        - "Published: Jan 15, 2025"
        - "Reading time: 5 min"
        - "Category: Tutorials"

    file_results:
      include:
        - "File type: PDF"
        - "Size: 2.4 MB"
        - "Modified: Yesterday"

    people_results:
      include:
        - "Title: Senior Designer"
        - "Department: Product"
        - "Location: San Francisco"

  truncation_strategies:
    ellipsis_truncation:
      method: "cut at character limit, add ..."
      example: "Premium wireless headphones with active noise cancellation..."

      use_case: "strict character limits"

    sentence_boundary:
      method: "truncate at end of sentence before limit"
      example: "Premium wireless headphones with active noise cancellation. Available in black..."

      preferred: "more readable, complete thoughts"

    word_boundary:
      method: "truncate at last complete word before limit"
      example: "Premium wireless headphones with active noise..."

      avoid_mid_word: "never cut in middle of word"

  contextual_snippet_extraction:
    keyword_in_context:
      method: "extract sentence(s) containing search terms"
      padding: "show words before/after for context"

      example:
        query: "noise cancellation"
        snippet: "...features advanced <strong>noise cancellation</strong> technology that blocks ambient sound..."

    multiple_occurrences:
      method: "show first occurrence or most relevant context"
      preference: "title/heading occurrence over body"

  result_formatting:
    title_formatting:
      capitalization: "title case or sentence case (consistent)"
      length_handling: "truncate with ellipsis if exceeds limit"
      link_styling: "blue, underline (standard link styles)"

    description_styling:
      text_size: "slightly smaller than title"
      text_color: "dark gray for readability"
      line_height: "1.4-1.5 for readability"
      max_lines: "2-3 lines before truncation"

    spacing:
      between_results: "16-24px for clear separation"
      within_result: "4-8px between title and description"

  mobile_optimizations:
    character_limits:
      title: "40-50 characters"
      description: "100-120 characters (less than desktop)"

    metadata:
      prioritize: "show most important metadata only"
      hide_less_critical: "collapse or hide secondary info"

    tap_targets:
      entire_result: "tappable area for full result, not just title"
      size: "minimum 48px height for comfortable tapping"

  accessibility_implementation:
    semantic_structure:
      list: "<ul> or <ol> for results list"
      list_item: "<li> for each result"
      heading: "<h2> or <h3> for result title"
      link: "<a> for clickable title"

    aria_attributes:
      result_list:
        aria_label: "'Search results'"
        role: "'list' if not using semantic list"

      result_item:
        aria_label: "optional - comprehensive description of result"

    screen_reader_optimization:
      reading_order: "title → description → metadata"
      link_context: "ensure titles make sense without description"
      search_term_announcement: "bold terms announced naturally in context"

    visual_accessibility:
      contrast: "4.5:1 minimum for description text"
      link_contrast: "4.5:1 for title links"
      highlight_contrast: "don't rely solely on color for highlighting"

  seo_considerations:
    meta_description_best_practices:
      length: "120-160 characters for optimal display"
      unique: "each page has unique description"
      keywords: "include target keywords naturally"
      compelling: "entice clicks, not just keyword stuffing"

    structured_data:
      schema_org: "use appropriate schema (Product, Article, etc.)"
      rich_snippets: "enable rich results in Google"

      examples:
        - "Product: price, availability, ratings"
        - "Article: author, publish date, image"
        - "FAQ: questions and answers"

  analytics_tracking:
    events_to_track:
      - event: "result_click"
        properties: ["result_position", "result_title", "search_query"]

      - event: "result_impression"
        properties: ["results_shown", "query", "result_relevance_score"]

    insights:
      ctr_by_position: "click-through rate by position in results"
      description_effectiveness: "which descriptions get more clicks"
      zero_click_searches: "users find answer in snippet without clicking"
```

=== DESCRIPTION WRITING GUIDELINES ===

**Best Practices**:
- Front-load important words: first 10-15 words most critical
- Be specific and concrete: avoid vague generalities
- Include benefits/value: what user gains from clicking
- Natural keyword integration: don't force or stuff keywords
- Active voice: more engaging and direct
- Compelling but honest: don't clickbait

**Character Limits**:
- Google meta: 120-160 characters (155-160 ideal)
- Internal search: 200-300 characters (more flexibility)
- Product listings: 100-150 characters (scan-friendly)
- Mobile: 20-30% shorter than desktop

**Avoid**:
- ✗ "This page is about..." (weak opening)
- ✗ "Click here to learn more" (generic CTA)
- ✗ Duplicating title exactly
- ✗ Starting with "Welcome to..."
- ✗ Keyword stuffing

**Structure Pattern**:
1. What it is (1-2 words)
2. Key benefit/feature (5-10 words)
3. Additional context or CTA (remaining characters)

=== EXAMPLES ===

**Example 1: E-commerce Product Result**
- content_type: "product"
- search_context: "site search"
- char_limit: "150 characters"
- highlighting: "bold search terms"

**Output**:
```yaml
search_result_descriptions:
  result_structure:
    title: "Sony WH-1000XM5 Wireless <strong>Noise Cancelling Headphones</strong>"

    description_snippet:
      content: "Premium wireless headphones with industry-leading noise cancellation, 30-hour battery, and exceptional sound quality. Free shipping."
      character_count: 147

    result_metadata:
      - "Price: $399"
      - "Rating: ★★★★½ (4.7)"
      - "Reviews: (1,234)"
      - "In Stock"

  description_writing_principles:
    front_loaded: "Premium wireless headphones" (immediate value)
    specific: "30-hour battery" (concrete benefit)
    value_prop: "Free shipping" (purchase incentive)
```

**Example 2: Help Article Result**
- content_type: "help article"
- search_context: "help center search"
- char_limit: "200 characters"
- highlighting: "bold search terms"

**Output**:
```yaml
search_result_descriptions:
  result_structure:
    title: "How to <strong>Reset Your Password</strong>"

    description_snippet:
      content: "Reset your password in three simple steps. Works for both web and mobile app. Includes troubleshooting tips for common issues and account recovery options."
      character_count: 165

    result_metadata:
      - "Updated: Jan 15, 2025"
      - "Reading time: 3 min"
      - "Helpful: 98%"

  dynamic_vs_static_descriptions:
    type: "dynamic snippet"
    extracted: "sentence containing 'reset your password' from article"
```

**Example 3: Blog Article Result (Google SERP)**
- content_type: "blog article"
- search_context: "Google search"
- char_limit: "155 characters"
- highlighting: "Google handles"

**Output**:
```yaml
search_result_descriptions:
  result_structure:
    title: "10 Best Wireless Headphones for 2025 | Expert Reviews"

    description_snippet:
      content: "Compare the top wireless headphones of 2025. Expert reviews, sound quality tests, and buying guide. Find your perfect pair with our detailed analysis."
      character_count: 154

    url_breadcrumb: "example.com › Audio › Headphones › Reviews"

  seo_considerations:
    meta_description: true
    keywords: "wireless headphones, 2025, reviews, buying guide"
    compelling: "expert reviews + buying guide = value proposition"
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Use semantic HTML structure (ul/ol for lists, li for items, h2/h3 for titles, a for links). Ensure titles are descriptive enough to understand out of context. Maintain 4.5:1 color contrast for description text. Make entire result area keyboard accessible with logical tab order. Provide visible focus indicators on result links (2px outline, 3:1 contrast). Don't rely solely on color for search term highlighting (use bold). Ensure screen readers announce results in logical order (title, description, metadata). Make result clickable areas large enough (minimum 44x44px on mobile). Test with screen readers to verify result structure and content are clear. Use aria-label if result needs additional context for assistive tech.

**Psychological Principles**: Information scent (descriptions preview content quality). Satisficing behavior (users pick first "good enough" result). Serial position effect (top results clicked most, descriptions critical). F-pattern scanning (users scan first words of descriptions). Cognitive fluency (clear, concise descriptions process faster). Loss aversion (descriptions highlighting benefits motivate clicks). Social proof (ratings, review counts influence decisions). Curiosity gap (good descriptions create desire to learn more). Confirmation bias (users seek results confirming their query). Recognition over recall (descriptions help identify relevant results). Anchoring effect (first result's description sets expectations).

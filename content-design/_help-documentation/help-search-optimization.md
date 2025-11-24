## Help Search Optimization v1.0

**Purpose**: Optimize help content and search functionality to ensure users can quickly find accurate answers through effective keyword targeting, content structuring, and search result relevance tuning.

---

**PROMPT:**

You are optimizing help search for {{product_name}}, a {{product_type}} with {{help_content_volume}} help articles serving {{user_base}}. Improve findability and search effectiveness for {{primary_use_cases}} by optimizing content structure, implementing search best practices, and enhancing result relevance for {{user_query_patterns}}.

=== SEARCH OPTIMIZATION CONTEXT ===

**Product Information**:
- Product name: {{product_name}}
- Product type: {{product_type}}
- User base: {{user_base}}
- User technical level: {{technical_proficiency}}
- Help content volume: {{help_content_volume}} (number of articles/pages)
- Search technology: {{search_platform}} (Algolia/Elasticsearch/built-in/AI-powered)

**Search Behavior**:
- Primary use cases: {{primary_use_cases}}
- Common query patterns: {{user_query_patterns}}
- Search volume: {{monthly_searches}}
- Top searched terms: {{top_keywords}}
- Zero-result queries: {{zero_result_queries}}
- Search abandonment rate: {{abandonment_rate}}

=== OPTIMIZATION FOCUS AREAS ===

**Content Optimization**:
- Article titles: {{title_optimization_needs}}
- Keyword gaps: {{missing_keywords}}
- Content structure: {{structure_improvements}}
- Metadata: {{metadata_requirements}}

**Search Features**:
- Autocomplete: {{autocomplete_status}}
- Filters: {{available_filters}}
- Synonyms: {{synonym_handling}}
- Typo tolerance: {{typo_tolerance_level}}

=== OUTPUT REQUIREMENTS ===

```yaml
help_search_optimization_system:
  content_optimization:
    title_optimization:
      principles:
        - "Front-load primary keywords in first 3-5 words"
        - "Match user language, not internal terminology"
        - "Be specific and descriptive, avoid generic titles"
        - "Include action verbs for how-to content"
        - "Keep under 60 characters for search result display"

      title_patterns:
        how_to_articles:
          format: "How to [accomplish specific task]"
          examples:
            good:
              - "How to reset your password"
              - "How to export data to CSV"
              - "How to invite team members"
            bad:
              - "Password management"
              - "Exporting information"
              - "User administration"

        troubleshooting_articles:
          format: "[Problem/Error] - [Solution/Fix]"
          examples:
            good:
              - "Login fails with 'Invalid credentials' error"
              - "Fixing slow dashboard loading times"
              - "Email notifications not arriving"
            bad:
              - "Authentication issues"
              - "Performance problems"
              - "Notification troubleshooting"

        feature_explanations:
          format: "[Feature name]: [What it does/enables]"
          examples:
            good:
              - "Webhooks: Real-time event notifications"
              - "Two-factor authentication: Securing your account"
              - "Advanced filters: Finding specific records"
            bad:
              - "Webhook documentation"
              - "Security features"
              - "Filtering options"

      title_testing:
        ab_test: "Test keyword variations to see which drives more clicks"
        search_analytics: "Monitor which titles get clicked vs. passed over"
        user_language: "Use actual search queries to inform title rewrites"

    keyword_integration:
      primary_keyword_placement:
        title: "Include in article title (most important)"
        first_paragraph: "Use within first 50 words"
        headings: "Incorporate into H2 and H3 headings"
        meta_description: "Include in summary/description"

      keyword_research:
        sources:
          - "Search query logs (what users actually type)"
          - "Support ticket themes (problems users report)"
          - "Product analytics (features users engage with)"
          - "Competitor analysis (what terms they rank for)"
          - "Customer interviews (language they use)"

        analysis_template: |
          ## Keyword Research Analysis

          **Topic**: [Feature or problem area]

          **User search terms** (from logs):
          - "[exact query 1]" - [X] searches/month
          - "[exact query 2]" - [X] searches/month
          - "[exact query 3]" - [X] searches/month

          **Current article title**: "[existing title]"

          **Recommended optimization**:
          - New title: "[optimized title with primary keyword]"
          - Primary keyword: "[keyword]"
          - Secondary keywords: "[keyword 2]", "[keyword 3]"
          - Rationale: [Why this better matches user intent]

      keyword_density:
        natural_integration: "Use keywords naturally, not stuffed"
        variation: "Include synonyms and related terms"
        context: "Surround keywords with relevant content"
        avoid_over_optimization: "Aim for helpful content, not just ranking"

    content_structure_optimization:
      scannability:
        headings: "Descriptive H2/H3 that include keywords"
        bullet_points: "Lists for 3+ related items"
        short_paragraphs: "3-4 sentences maximum"
        bold_emphasis: "Key terms and UI elements"

      featured_snippets:
        question_format: "Start article with question as H1 or H2"
        concise_answer: "Provide direct answer in first 2-3 sentences"
        follow_up_detail: "Expand with steps, examples, context"

        example_structure: |
          ## How do I reset my password?

          You can reset your password from the login page by clicking "Forgot Password" and following the email instructions. This takes about 2 minutes.

          ### Detailed steps:
          1. Go to [login page URL]
          2. Click **Forgot Password**
          3. Enter your email address
          [...]

      answer_box_optimization:
        direct_answers: "Start with yes/no or specific answer"
        definition_format: "[Term] is [concise definition]"
        step_format: "Numbered lists for how-to questions"

    metadata_optimization:
      meta_descriptions:
        length: "120-155 characters"
        structure: "[Action] [benefit] [key detail]"
        keyword_inclusion: "Primary keyword in first 10 words"
        call_to_action: "Learn how, Find out, Discover"

        examples:
          good: "Learn how to reset your password in 2 minutes. Step-by-step guide with screenshots for account recovery."
          bad: "This article explains password-related information and account access procedures."

      alt_text_for_images:
        format: "Describe what's shown and its relevance"
        keywords: "Include relevant keywords naturally"
        screen_readers: "Helpful for accessibility AND search"

        examples:
          good: "TaskFlow dashboard showing the Create Project button in top left corner"
          bad: "Screenshot of interface" or "Image 1"

      article_tags:
        consistent_taxonomy: "Use standardized tag set"
        relevant_tags: "3-7 tags per article"
        hierarchy: "Broad to specific (Product → Feature → Sub-feature)"

        example_tagging:
          article: "How to set up two-factor authentication"
          tags:
            - "Security"
            - "Account Settings"
            - "Two-Factor Authentication"
            - "Login"
            - "Getting Started"

  search_functionality_optimization:
    autocomplete_suggestions:
      implementation:
        trigger: "Show suggestions after 3 characters typed"
        sources:
          - "Popular searches (last 30 days)"
          - "Article titles (exact matches)"
          - "Common queries (from support tickets)"
          - "Trending searches (recent spike)"

      suggestion_formatting:
        highlight_match: "Bold the matching portion"
        show_context: "Include article category or type"
        rank_by_relevance: "Most relevant or popular first"

        example_display: |
          User types: "res"

          Suggestions:
          • Reset password (Account Settings)
          • Resend verification email (Getting Started)
          • Restore deleted files (Data Management)
          • Resize images in editor (Design Tools)

      smart_completions:
        query_expansion: "Suggest complete questions"
        related_topics: "Show adjacent relevant topics"
        recent_searches: "User's own recent searches"

    synonym_mapping:
      purpose: "Match user terms to content vocabulary"

      synonym_sets:
        example_mappings: |
          ## Technical Synonyms

          "remove" → also search: delete, erase, get rid of, uninstall
          "create" → also search: make, add, new, start, set up
          "fix" → also search: solve, repair, troubleshoot, resolve

          ## Product-Specific Synonyms

          "team members" → also search: users, colleagues, collaborators
          "project" → also search: workspace, board, folder
          "payment" → also search: billing, invoice, charge, subscription

          ## Common Misspellings

          "recieve" → correct to: receive
          "seperete" → correct to: separate

      implementation:
        bidirectional: "Map both directions (A→B and B→A)"
        context_aware: "Consider query intent"
        user_testing: "Validate synonyms match real user language"

    typo_tolerance:
      fuzzy_matching:
        edit_distance: "Allow 1-2 character differences"
        prefix_tolerance: "Match even if beginning differs slightly"
        transposition: "Swap adjacent characters (teh → the)"

      did_you_mean:
        suggest_corrections: "Show 'Did you mean: [correction]?'"
        auto_correct: "Auto-search correct term if confidence high"
        learn_from_clicks: "Track which suggestions users click"

        example_behavior: |
          User searches: "passowrd reset"

          System response:
          "Showing results for: password reset"
          "Did you mean: password reset?" (if auto-corrected)

    result_ranking:
      relevance_signals:
        keyword_match:
          - "Exact title match (highest weight)"
          - "Exact phrase in content"
          - "Partial keyword matches"
          - "Keyword in headings"

        popularity:
          - "Click-through rate from search"
          - "Time on page after search"
          - "Search result position clicked"

        recency:
          - "Recently updated content ranks higher"
          - "Content freshness score"

        user_behavior:
          - "Articles frequently resolved user's need"
          - "Low bounce rate from search"

      ranking_tuning:
        weight_adjustments: |
          ## Example Ranking Weights

          - Exact title match: 100 points
          - Title contains all keywords: 80 points
          - First paragraph match: 60 points
          - H2/H3 heading match: 50 points
          - Body content match: 30 points
          - Tag match: 20 points

          Popularity boost: +10 points per 100 clicks/month
          Recency boost: +5 points if updated within 30 days

    filters_and_facets:
      filter_options:
        content_type:
          - "How-to guides"
          - "Troubleshooting"
          - "API reference"
          - "Video tutorials"

        product_area:
          - "Account settings"
          - "Billing and payments"
          - "Integrations"
          - "Mobile app"

        difficulty_level:
          - "Beginner"
          - "Intermediate"
          - "Advanced"

      filter_interface:
        placement: "Sidebar or top bar of search results"
        multi_select: "Allow multiple filters simultaneously"
        result_count: "Show count next to each filter option"
        clear_all: "Easy way to reset all filters"

        example_ui: |
          Search: "export data"  [Search button]

          Filters:
          ☐ Content Type
            ☐ How-to guides (12)
            ☐ API docs (3)
            ☐ Video tutorials (2)

          ☐ Product Area
            ☐ Data Management (8)
            ☐ Integrations (5)
            ☐ Reports (4)

          [Clear all filters]

    zero_results_handling:
      fallback_strategies:
        relaxed_matching:
          - "Remove some keywords and search again"
          - "Search for individual words separately"
          - "Ignore special characters or formatting"

        suggested_alternatives:
          - "Show related articles based on topic"
          - "Suggest popular articles in same category"
          - "Provide contact support option"

        learn_from_gaps:
          - "Log zero-result queries"
          - "Create content for frequently searched missing topics"
          - "Flag for content team review"

      zero_result_page: |
        ## No results found for "advanced API webhooks configuration"

        **Try these suggestions:**
        • Simplify your search: Try "webhooks" or "API configuration"
        • Check spelling: Make sure terms are spelled correctly
        • Use different words: Try "event notifications" instead of "webhooks"

        **Related articles that might help:**
        • [Setting up webhooks (beginner guide)]
        • [API authentication and configuration]
        • [Advanced API features overview]

        **Still can't find what you need?**
        [Contact support] [Browse all documentation] [Community forum]

  search_analytics:
    key_metrics:
      search_success_rate:
        definition: "% of searches resulting in article click"
        target: "> 70%"
        improvement_tactics:
          - "Improve result relevance ranking"
          - "Create content for common zero-result queries"
          - "Enhance autocomplete suggestions"

      click_through_rate:
        definition: "% of search sessions with at least one click"
        measure_by_position: "Track CTR by result position"
        optimization: "Improve titles and descriptions for positions 4-10"

      search_refinement_rate:
        definition: "% of users who search again after initial search"
        interpretation: "High rate suggests initial results weren't helpful"
        action: "Analyze refined queries to understand intent better"

      time_to_resolution:
        definition: "Time from search to finding answer"
        target: "< 2 minutes"
        track_path: "Search → Click → Time on page → Exit or search again"

    analysis_workflows:
      weekly_review:
        top_searches: "Review top 20 searches - are results relevant?"
        zero_results: "Identify content gaps from zero-result queries"
        low_ctr: "Find searches with < 50% CTR and improve"
        new_trends: "Spot emerging search patterns"

      monthly_deep_dive:
        content_audit: "Identify underperforming articles (high impressions, low clicks)"
        synonym_gaps: "Find queries that should match content but don't"
        seasonal_patterns: "Adjust for time-based query changes"
        benchmark_performance: "Compare month-over-month improvements"

      quarterly_optimization:
        major_ranking_updates: "Recalibrate relevance weights"
        content_consolidation: "Merge overlapping articles"
        taxonomy_refresh: "Update tags and categories"
        user_testing: "Observe real users searching for specific tasks"

  content_gap_analysis:
    identifying_gaps:
      high_volume_zero_results:
        query: "[specific search term]"
        volume: "[X] searches/month"
        current_coverage: "No relevant article exists"
        recommendation: "Create new article: '[proposed title]'"

      popular_but_unhelpful:
        query: "[search term]"
        volume: "[X] searches/month"
        current_article: "[article title]"
        issue: "Only 20% CTR, high bounce rate"
        recommendation: "Rewrite article with better structure and examples"

      emerging_topics:
        query: "[new feature/problem]"
        trend: "200% increase in searches this month"
        cause: "New product feature launch / known bug"
        recommendation: "Priority content creation"

    gap_filling_strategy: |
      ## Monthly Content Gap Report

      **High Priority** (create within 1 week):
      1. "[Query with 500+ monthly searches, 0 results]"
         - Proposed article: "[Title]"
         - Assigned to: [Writer]
         - Target publish: [Date]

      **Medium Priority** (create within 1 month):
      1. "[Query with 100+ searches, poor results]"
         - Improve existing: "[Current article]"
         - Changes needed: [List improvements]

      **Low Priority** (create within 3 months):
      1. "[Niche query, 20+ searches]"
         - Add section to existing article or create FAQ entry

  advanced_search_features:
    natural_language_search:
      implementation: "Allow full question searches"
      processing: "Extract intent and keywords from questions"

      examples:
        user_types: "How do I change my email address?"
        system_interprets:
          intent: "Update account information"
          keywords: "change, email, address, account settings"
          matching_articles:
            - "Updating your account email"
            - "Managing account settings"

    contextual_search:
      page_aware: "Show results relevant to current page user is on"
      role_based: "Filter results by user's permission level"
      history_aware: "Surface articles related to recent activity"

      example:
        context: "User on 'Billing' page searches 'refund'"
        results_prioritize: "Billing-specific refund articles over product return refunds"

    ai_powered_answers:
      generated_summaries: "Synthesize answer from multiple articles"
      source_attribution: "Link to articles used to generate answer"
      confidence_indicator: "Show certainty level of AI response"

      example_response: |
        **AI Answer** (synthesized from 3 articles)

        To reset your password:
        1. Go to the login page
        2. Click "Forgot Password"
        3. Check your email for reset link

        [View complete guide: Password Reset →]
        [Sources: Account Security | Login Help | Email Troubleshooting]

  accessibility_in_search:
    keyboard_navigation:
      search_focus: "Tab to search box"
      results_navigation: "Arrow keys to move through results"
      filters: "Tab to filters, Space to toggle"

    screen_reader_support:
      result_count: "Announce '15 results found for [query]'"
      filter_status: "Announce when filter applied"
      loading_states: "Announce 'Searching...' and 'Results loaded'"

    visual_accessibility:
      contrast: "Search box and results meet 4.5:1 ratio"
      focus_indicators: "Clear visible focus on active result"
      text_sizing: "Search interface scales with browser zoom"
```

=== EXAMPLES ===

**Example 1: SaaS Project Management Tool**
- product_name: "TaskFlow"
- help_content_volume: "450 articles"
- top_keywords: "create project, assign task, invite team"
- zero_result_queries: "workflow automation, gantt view, time tracking"

**Search Optimization Report**:
```markdown
## TaskFlow Help Search Optimization - Q1 2025

### Current Performance
- Search success rate: 62% (target: 70%)
- Zero-result rate: 18%
- Top searches with poor results:
  1. "workflow automation" - 320 searches/month, 0 relevant results
  2. "gantt chart" - 180 searches/month, users searching "timeline view" instead
  3. "time tracking" - 150 searches/month, scattered across multiple articles

### Content Gaps Identified

**High Priority - Create New Articles**:

1. **"workflow automation" (320 searches/month)**
   - Current status: Feature exists but called "Automations" in product
   - Recommended article: "Workflow Automation: Setting up automatic task assignments"
   - Include synonyms: automation, automated workflows, auto-assign

2. **"gantt chart" (180 searches/month)**
   - Current status: Feature called "Timeline View"
   - Action: Create synonym mapping: gantt → timeline
   - Update existing article title from "Using Timeline View" to "Timeline View (Gantt Chart): Visualizing project schedules"

3. **"time tracking" (150 searches/month)**
   - Current status: Mentioned across 5 different articles
   - Action: Create comprehensive "Time Tracking: Complete guide to tracking hours worked"
   - Consolidate scattered references

**Title Optimizations**:

| Current Title | Searches/Month | Click Rate | New Title | Expected Improvement |
|---------------|----------------|------------|-----------|---------------------|
| "Managing users" | 280 | 35% | "How to invite and manage team members" | +40% CTR |
| "Project settings" | 190 | 28% | "Project settings: Permissions, visibility, and configuration" | +35% CTR |
| "Understanding integrations" | 140 | 22% | "Integrations: Connect Slack, Google Drive, and other tools" | +45% CTR |

**Synonym Additions**:
```yaml
new_synonyms:
  "team members": ["users", "collaborators", "teammates", "colleagues"]
  "project": ["workspace", "board", "space"]
  "automation": ["workflow", "auto-assign", "automated", "triggers"]
  "gantt": ["timeline", "schedule view", "project timeline"]
```

**Implementation Timeline**:
- Week 1: Add synonym mappings and update titles
- Week 2: Create "Workflow Automation" article
- Week 3: Consolidate time tracking content
- Week 4: Measure impact on search success rate
```

**Example 2: E-commerce Platform Help**
- product_name: "ShopCore"
- help_content_volume: "800+ articles"
- top_keywords: "payment setup, shipping rates, product import"
- search_technology: "Algolia"

**Search Feature Enhancement**:
```markdown
## ShopCore Search Improvements - Implemented February 2025

### Autocomplete Optimization

**Before**: Generic article title suggestions
**After**: Context-aware smart suggestions

User types: "ship"

**New autocomplete shows**:
```
🔍 Suggestions

Quick Actions:
  → Set up shipping rates (Getting Started)
  → Calculate shipping costs (Calculator)

Popular Articles:
  • Shipping rates by location and weight
  • International shipping setup guide
  • Free shipping promotions

Recent Searches:
  • shipping label printing (your search from Jan 12)
```

### Typo Tolerance Implementation

**Common misspellings auto-corrected**:
| User Types | Auto-searches For | Shows Message |
|------------|-------------------|---------------|
| "prodcut import" | "product import" | "Showing results for: product import" |
| "shipment trackign" | "shipment tracking" | Auto-corrected |
| "paymnet gateway" | "payment gateway" | Auto-corrected |

### Zero Results Handling

**Before**: "No results found" dead end

**After**: Helpful fallback page
```
No exact matches for "bulk product inventory update"

Trying simpler search: "product inventory"

✓ Found 8 related articles:

📄 Managing product inventory levels
📄 Bulk product updates via CSV import  ← Most relevant
📄 Inventory tracking and alerts
📄 Updating product information

Still not what you're looking for?

💬 Chat with support (average response: 2 min)
📧 Email us: support@shopcore.com
🎥 Watch video: Product Management Basics (5 min)
```

### Filter Implementation

**Search: "payment"** (shows 45 results)

**Filters applied by users** (analytics):
```
Most used filters:
1. Content Type → "How-to guides" (68% of searches)
2. Topic → "Payment Setup" (52%)
3. Difficulty → "Beginner" (41%)

Filter combination that works best:
• Content Type: How-to guides
• Topic: Payment Setup
• Result: 12 targeted articles, 89% click-through rate
```

### Impact Metrics (30 days post-implementation)

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Search success rate | 58% | 79% | +36% |
| Zero-result rate | 22% | 8% | -64% |
| Avg time to find answer | 4.2 min | 2.1 min | -50% |
| Search refinements per session | 2.3 | 1.4 | -39% |
| Support tickets from help center | 340/mo | 215/mo | -37% |
```

**Example 3: Developer API Documentation Search**
- product_name: "CloudAPI"
- help_content_volume: "200 API reference pages + 100 guides"
- user_base: "Software developers"
- search_challenges: "Technical terminology, code examples, version-specific"

**Developer-Focused Search Optimization**:
```markdown
## CloudAPI Documentation Search - Developer Experience Improvements

### Code-Aware Search

**Feature**: Search within code examples

User searches: "authentication header"

**Results prioritize**:
```javascript
// Code snippet match highlighted
const response = await fetch('https://api.cloud.com/v1/users', {
  headers: {
    'Authorization': `Bearer ${API_KEY}`,  ← Match: authentication header
    'Content-Type': 'application/json'
  }
});
```

### Version Filtering

**Context**: Developers need version-specific docs

**Implementation**:
```
Search: "webhook signature verification"

Filter by version:
○ v2.1 (latest) ← Default
○ v2.0
○ v1.9 (legacy)

[X] Show deprecated features

Results: 4 articles
• Webhook Signature Verification (v2.1) ✨ Latest
• Webhook Security Best Practices (v2.0+)
• Migrating Webhook Verification from v1.x to v2.x
• Legacy: HMAC Signature Verification (v1.9) ⚠️ Deprecated
```

### Programming Language Preference

**Feature**: Personalized code examples

User's preference: Python (detected from past searches)

Search result for "create payment":
```
Create a Payment - API Reference

[Tabs: Python | Node.js | Ruby | PHP | cURL]

↓ Python example shown first (user's preference)

```python
import cloudapi

client = cloudapi.Client(api_key='...')

payment = client.payments.create(
    amount=1000,
    currency='usd'
)
```

[Copy code] [Try in playground]
```

### Natural Language Query Understanding

**Examples of developer questions handled**:

User types: "How do I paginate list API results?"
System understands:
- Intent: Implement pagination
- API: List endpoints
- Concept: Pagination pattern

**Shows**:
1. Pagination Guide (conceptual)
2. Users List Endpoint (specific example)
3. Cursor vs Offset Pagination (comparison)

---

User types: "Why am I getting 401 unauthorized?"
System understands:
- Problem: Authentication error
- Error code: 401
- Intent: Troubleshooting

**Shows**:
1. Troubleshooting 401 Errors (direct fix)
2. Authentication Guide (background)
3. API Key Management (prevention)

### Search Analytics Insights

**Most searched error codes**:
```
1. "401 unauthorized" - 450 searches/month
   → Created dedicated troubleshooting article
   → Result: -35% support tickets related to auth

2. "rate limit exceeded" - 280 searches/month
   → Added prominent rate limiting section to docs
   → Added code examples for handling 429 errors

3. "invalid request signature" - 190 searches/month
   → Created webhook signature verification guide
   → Added interactive signature validator tool
```

**Content created from search gaps**:
- "Pagination best practices and examples" (320 searches, no good result)
- "Batch API requests guide" (180 searches, scattered info)
- "Error handling patterns" (210 searches, developer-focused consolidation)

### Interactive Search Features

**API Explorer integration**:
```
Search: "create user"

Standard result:
📄 POST /v1/users - API Reference

Enhanced result:
📄 POST /v1/users - API Reference
   [View docs] [Try in API Explorer →]

Clicking "Try in API Explorer":
→ Opens interactive console
→ Pre-fills endpoint: POST /v1/users
→ Shows example request body
→ User can test immediately
```
```

---

**Accessibility Requirements**: Help search must meet WCAG 3.0 Level AA standards. Ensure search box and results are keyboard navigable (Tab, Arrow keys, Enter). Provide screen reader announcements for search states ("Searching...", "X results found"). Maintain 4.5:1 color contrast for search UI elements. Support text scaling to 200%. Make autocomplete suggestions accessible with ARIA labels. Ensure filters are operable via keyboard. Provide skip links to bypass search results. Announce filter application to screen readers.

**Psychological Principles**: Reduced cognitive load through autocomplete (fewer keystrokes, faster discovery). Instant feedback via autocomplete reduces uncertainty anxiety. Zero-results handling prevents frustration and abandonment (agency preservation). Progressive disclosure through filters (manageability). Recognition over recall (seeing suggestions triggers memory). Completion motivation through result counts and progress. Trust building through relevant results (efficacy). Learning from behavior (search personalization improves over time).

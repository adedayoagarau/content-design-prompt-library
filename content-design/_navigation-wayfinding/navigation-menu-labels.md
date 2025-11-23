## Navigation Menu Label Design v1.0

**Purpose**: Create clear, scannable, and predictable navigation menu labels that help users understand site structure and find content efficiently across all device types.

---

**PROMPT:**

You are designing navigation menu labels for {{site_type}} serving {{target_audience}}. Create menu labels that are scannable, predictable, and clearly communicate destination content while supporting {{user_goal}}.

=== NAVIGATION CONTEXT ===
Site type: {{site_type}} (e-commerce/SaaS/content/educational/enterprise)
Target audience: {{target_audience}} (general public/professionals/specific industry)
Menu type: {{menu_type}} (primary/secondary/utility/footer)
Menu location: {{menu_location}} (header/sidebar/hamburger/mega-menu)
Number of items: {{item_count}} (recommended 5-7 for primary navigation)
Menu depth: {{menu_depth}} (single-level/two-level/multi-level)

=== BUSINESS REQUIREMENTS ===
User primary goals: {{primary_user_goals}}
Content categories: {{content_categories}}
Business priorities: {{business_priorities}}
Brand voice: {{brand_voice}} (professional/friendly/authoritative/playful)
Industry terminology: {{industry_terms}} (use technical terms vs. plain language)
Competitive positioning: {{competitive_context}}

=== LABEL STRATEGY ===

**Label Types**:
- **Noun-based**: "Products", "Services", "About Us"
- **Action-based**: "Shop Now", "Get Started", "Contact"
- **Benefit-based**: "Save Money", "Learn Skills", "Find Solutions"
- **Question-based**: "How It Works", "Why Choose Us"

**Character Limits**:
- Desktop primary nav: {{desktop_char_limit}} (recommended 10-20 chars)
- Mobile hamburger: {{mobile_char_limit}} (can be slightly longer)
- Mega menu categories: {{mega_menu_limit}} (15-30 chars with context)

=== OUTPUT REQUIREMENTS ===

```yaml
navigation_system:
  primary_navigation:
    menu_items:
      - label: "string (primary label text)"
        character_count: number
        alternative_labels:
          - "variation 1"
          - "variation 2"
        rationale: "why this label is optimal"
        user_expectation: "what users expect to find"
        seo_value: "search terms alignment"
        mobile_label: "mobile-optimized version if different"
        aria_label: "if additional context needed for screen readers"

  secondary_navigation:
    items:
      - label: "string"
        purpose: "utility/account/support function"
        visibility: "always/logged-in/contextual"

  label_testing:
    tree_testing_recommendations:
      - task: "user task description"
        expected_path: ["label 1", "label 2"]
        confidence_score: "1-10"

    ab_test_hypotheses:
      - variant_a: "label option 1"
        variant_b: "label option 2"
        hypothesis: "why we're testing"
        success_metric: "click-through rate/time-to-find/task completion"

  scannability_optimization:
    label_patterns:
      parallel_structure: "all labels follow same grammatical pattern"
      distinctive_first_words: "labels start with unique words"
      length_consistency: "similar character counts for visual balance"
      alphabetical_consideration: "whether alpha order helps or hurts"

    visual_hierarchy:
      parent_label_treatment: "bold/larger/different style"
      child_label_treatment: "indented/smaller/muted"
      active_state_label: "current page indication strategy"

  mobile_considerations:
    hamburger_menu_structure:
      top_level_items: ["priority labels in order"]
      utility_placement: "top/bottom of menu"
      search_integration: "search bar placement"

    collapsed_label_strategy: "how to handle nested navigation"
    expand_collapse_indicators: "arrow/plus/chevron with accessible text"

  internationalization:
    translation_strategy:
      max_expansion: "percentage (e.g., 30% for German)"
      rtl_considerations: "right-to-left language adaptations"
      cultural_appropriateness: "terms that work across cultures"

    character_limit_flexibility: "room for translation expansion"
    icon_pairing: "universal icons to support text"

  accessibility_compliance:
    keyboard_navigation:
      focus_indicators: "clear visual focus states"
      skip_links: "skip to main content option"
      logical_tab_order: "left-to-right, top-to-bottom"

    screen_reader_optimization:
      landmark_roles: "navigation role assignment"
      aria_current: "current page indication"
      aria_expanded: "for expandable menu items"
      descriptive_labels: "no ambiguous 'More' or 'Other'"

    cognitive_accessibility:
      plain_language: "avoid jargon where possible"
      consistent_terminology: "same terms across site"
      predictable_patterns: "standard menu structures"
```

=== LABEL WRITING PRINCIPLES ===

**Clarity Over Cleverness**:
- ✓ "Pricing" (clear and expected)
- ✗ "Investment Options" (clever but unclear)

**Front-Load Keywords**:
- ✓ "Support & Resources"
- ✗ "Resources & Support"
- Rationale: Users scan left-to-right, see keywords first

**Avoid Redundancy**:
- ✓ "Products" (in navigation context)
- ✗ "Our Products" (possessive unnecessary)

**Distinctive First Words**:
- ✓ "Products", "Solutions", "Resources"
- ✗ "Our Products", "Our Solutions", "Our Resources"

**Match User Mental Models**:
- For e-commerce: "Shop", "Products", "Categories"
- For SaaS: "Features", "Pricing", "Solutions"
- For content: "Articles", "Guides", "Resources"

=== EXAMPLES ===

**Example 1: B2B SaaS Platform**
- site_type: "B2B SaaS"
- target_audience: "marketing professionals"
- menu_type: "primary navigation"
- menu_location: "header horizontal"
- item_count: "6"
- brand_voice: "professional yet approachable"

**Output**:
```yaml
navigation_system:
  primary_navigation:
    menu_items:
      - label: "Platform"
        character_count: 8
        alternative_labels: ["Features", "Product", "Solutions"]
        rationale: "Emphasizes comprehensive system vs. individual features"
        user_expectation: "Overview of product capabilities, feature list"
        seo_value: "Aligns with 'marketing platform' search terms"
        mobile_label: "Platform"
        aria_label: null

      - label: "Pricing"
        character_count: 7
        alternative_labels: ["Plans", "Plans & Pricing"]
        rationale: "Direct answer to primary user question"
        user_expectation: "Pricing tiers, plan comparison, ROI calculator"
        seo_value: "High-intent keyword"

      - label: "Resources"
        character_count: 9
        alternative_labels: ["Learn", "Library", "Knowledge Base"]
        rationale: "Umbrella term for guides, templates, webinars"
        user_expectation: "Educational content, how-to guides, best practices"

      - label: "Customers"
        character_count: 9
        alternative_labels: ["Case Studies", "Success Stories", "Why Us"]
        rationale: "Social proof and validation"
        user_expectation: "Customer stories, testimonials, results"

      - label: "Company"
        character_count: 7
        alternative_labels: ["About", "About Us"]
        rationale: "Standard label, sets expectations for brand info"
        user_expectation: "About us, careers, press, contact"

  secondary_navigation:
    items:
      - label: "Login"
        purpose: "account access"
        visibility: "always, switches to account menu when logged in"
      - label: "Get Demo"
        purpose: "primary conversion action"
        visibility: "always"

  scannability_optimization:
    label_patterns:
      parallel_structure: "All nouns except 'Get Demo' CTA"
      distinctive_first_words: "Each label starts with unique letter (P, P, R, C, C) - note pricing/platform collision"
      length_consistency: "7-9 characters, visually balanced"
```

**Example 2: E-commerce Fashion Retailer**
- site_type: "e-commerce"
- target_audience: "fashion-conscious millennials"
- menu_type: "primary + mega menu"
- menu_location: "header horizontal with dropdowns"
- item_count: "8 top-level"
- brand_voice: "trendy and inclusive"

**Output**:
```yaml
navigation_system:
  primary_navigation:
    menu_items:
      - label: "New Arrivals"
        character_count: 12
        alternative_labels: ["What's New", "New", "Latest"]
        rationale: "Time-sensitive, high-interest content deserves top billing"
        user_expectation: "Recently added products, trending items"
        seo_value: "Common search phrase for fashion browsers"

      - label: "Women"
        character_count: 5
        rationale: "Primary shopping category, broad appeal"
        user_expectation: "All women's clothing, accessories, categories"
        has_mega_menu: true
        mega_menu_categories:
          - "Clothing"
          - "Shoes"
          - "Accessories"
          - "By Occasion"
          - "Trending Now"

      - label: "Men"
        character_count: 3
        rationale: "Parallel to Women category"
        has_mega_menu: true

      - label: "Sale"
        character_count: 4
        alternative_labels: ["Deals", "Outlet", "Clearance"]
        rationale: "High-priority for price-conscious shoppers"
        user_expectation: "Discounted items, promotions, clearance"
        visual_treatment: "Red color to emphasize discount"

  mobile_considerations:
    hamburger_menu_structure:
      top_level_items:
        - "New Arrivals"
        - "Women"
        - "Men"
        - "Kids"
        - "Sale"
        - "Brands"
        - "Gift Cards"
      utility_placement: "Account, Wishlist, Help at top; Social links at bottom"
      search_integration: "Persistent search bar above menu"
```

**Example 3: Healthcare Provider Network**
- site_type: "healthcare/informational"
- target_audience: "patients and caregivers, varying health literacy"
- menu_type: "primary navigation"
- item_count: "6"
- brand_voice: "compassionate and trustworthy"
- industry_terms: "plain language preferred over medical jargon"

**Output**:
```yaml
navigation_system:
  primary_navigation:
    menu_items:
      - label: "Find Care"
        character_count: 9
        alternative_labels: ["Find a Doctor", "Locations", "Services"]
        rationale: "Action-oriented, primary user goal"
        user_expectation: "Doctor directory, locations, book appointment"
        mobile_label: "Find Care"

      - label: "Patients & Visitors"
        character_count: 18
        alternative_labels: ["For Patients", "Patient Info", "Visiting"]
        rationale: "Inclusive of support persons, sets clear audience"
        user_expectation: "Visiting hours, patient rights, billing, records"
        mobile_label: "Patients"

      - label: "Conditions & Treatments"
        character_count: 23
        alternative_labels: ["Health Library", "Medical Services", "What We Treat"]
        rationale: "Plain language, connects symptoms to solutions"
        user_expectation: "Disease information, treatment options, specialties"
        mobile_label: "Conditions"

      - label: "Health Resources"
        character_count: 16
        alternative_labels: ["Wellness", "Education", "Learn"]
        rationale: "Preventive care and education focus"

      - label: "Billing & Insurance"
        character_count: 18
        alternative_labels: ["Pay Bill", "Financial", "Costs"]
        rationale: "Critical user need, direct language"
        mobile_label: "Billing"

      - label: "About Us"
        character_count: 8
        rationale: "Standard label for mission, leadership, careers"

  accessibility_compliance:
    cognitive_accessibility:
      plain_language: "Avoided medical jargon - 'Conditions' not 'Pathologies'"
      consistent_terminology: "'Find Care' used throughout site, not mixed with 'Locate Services'"
      predictable_patterns: "Standard healthcare site structure for user familiarity"
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Provide clear focus indicators for keyboard navigation (minimum 2px outline, 3:1 contrast ratio). Use semantic HTML nav elements with ARIA landmarks. Ensure labels are descriptive enough to be understood out of context by screen reader users navigating by headings or links list. Include aria-current="page" for current location. Support keyboard navigation with logical tab order. Avoid relying solely on color to indicate menu states. Provide sufficient color contrast (4.5:1 minimum for normal text). Ensure touch targets are minimum 44x44px on mobile devices.

**Psychological Principles**: Recognition over recall (Jakob's Law - users prefer familiar patterns). Serial position effect (primacy - first items remembered best; recency - last items also memorable). Fitts's Law (larger, closer targets are faster to acquire). Hick's Law (decision time increases with number of options - keep primary nav to 5-7 items). Miller's Law (working memory holds 7±2 items). Progressive disclosure (show high-level categories, reveal details on interaction). Cognitive fluency (easy-to-process labels feel more trustworthy). Consistency principle (same labels in same positions reduce cognitive load).

## Mega Menu Organization & Content Design v1.0

**Purpose**: Design scalable, scannable mega menu structures that reveal complex site hierarchies clearly, enable quick access to deep content, and balance comprehensive navigation with focused user paths.

---

**PROMPT:**

You are designing a mega menu navigation system for {{site_type}} with {{content_categories}} main categories. Create a mega menu structure that enables {{user_goal}}, organizes {{content_volume}} effectively, and maintains scannability while supporting {{brand_voice}}.

=== MEGA MENU CONTEXT ===
Site type: {{site_type}} (e-commerce/SaaS/enterprise/content portal/multi-brand)
Content categories: {{content_categories}} (number of top-level categories)
Content volume: {{content_volume}} (subcategories per main category)
Menu depth: {{menu_depth}} (levels of hierarchy to display)
Trigger interaction: {{trigger_type}} (hover/click/both)
Primary use case: {{primary_use}} (browse/direct access/exploration)

=== CONTENT ORGANIZATION ===
Category structure: {{category_structure}} (product-based/topic-based/audience-based/hybrid)
Navigation strategy: {{nav_strategy}} (exhaustive/curated/mixed)
Featured content: {{featured_elements}} (yes/no - promotions, images, CTAs)
Cross-selling opportunities: {{cross_sell}} (yes/no - related categories)
Personalization: {{personalization}} (static/dynamic based on user)

=== MEGA MENU ARCHITECTURE ===

**Menu Types**:
- **Column-based**: Vertical lists organized in columns
- **Grid-based**: Cards or tiles with images and descriptions
- **Hybrid**: Combines lists with featured visual content
- **Contextual**: Changes based on category characteristics

Current pattern: {{menu_pattern}}

**Layout Configurations**:
- Desktop width: {{desktop_width}} (full-width/content-width/fixed-width)
- Column count: {{column_count}} per category (2-6 typical)
- Visual elements: {{visual_elements}} (images/icons/none)
- Promotional space: {{promo_space}} (dedicated area for featured content)

=== OUTPUT REQUIREMENTS ===

```yaml
mega_menu_system:
  structure:
    trigger_mechanism:
      desktop: "hover with 200ms delay to prevent accidental opens"
      mobile: "tap to expand (no mega menu, use accordion or full-screen)"
      keyboard: "Enter to open, Escape to close, arrow keys to navigate"

    menu_panels:
      - category: "string (top-level nav item)"
        panel_width: "full-viewport/content-width/fixed pixels"
        layout_type: "columns/grid/hybrid"
        column_count: number

        sections:
          - section_heading: "string (optional grouping header)"
            heading_purpose: "organize related subcategories"
            links:
              - label: "string"
                destination: "page/category"
                character_count: number
                description: "optional one-line description"
                icon: "optional icon identifier"

          - section_heading: "string"
            links: []

        featured_content:
          enabled: true/false
          content_type: "promotion/new arrivals/popular items/image banner"
          placement: "right column/bottom/dedicated section"
          cta_text: "Shop Now/Learn More/Explore"

        visual_enhancements:
          category_images:
            enabled: true/false
            image_size: "thumbnail/medium/large"
            purpose: "visual recognition, browsing aid"

          icons:
            enabled: true/false
            purpose: "category identification, scannability"
            style: "line icons/filled/illustrated"

  content_strategy:
    link_selection:
      approach: "curated top items/exhaustive full list/mixed"
      max_links_per_column: number (8-12 recommended)
      priority_logic: "popular/alphabetical/strategic/seasonal"

    section_headers:
      usage: "group related subcategories"
      character_limit: 25
      examples:
        - "By Product Type"
        - "By Industry"
        - "Popular Categories"
        - "Get Started"

    link_descriptions:
      include: true/false
      character_limit: 60
      purpose: "clarify ambiguous categories, add detail"
      example: "Enterprise Solutions - Tools for teams of 100+"

    view_all_links:
      pattern: "View All [Category]"
      placement: "bottom of each column section"
      purpose: "access to full category page"
      styling: "differentiated from regular links (bold/arrow/different color)"

  navigation_patterns:
    keyboard_accessibility:
      tab_sequence: "left-to-right, top-to-bottom within panel"
      arrow_keys: "navigate between menu items and within panels"
      escape_key: "close mega menu, return focus to trigger"
      home_end: "jump to first/last item in current panel"

    hover_behavior:
      activation_delay: "200-300ms to prevent accidental triggering"
      deactivation_delay: "300ms to allow mouse movement to panel"
      safe_zones: "triangular area from trigger to panel (no close)"

    click_behavior:
      top_level_link: "clickable to category page or toggle only"
      recommendation: "toggle only - prevents accidental navigation"
      mobile_alternative: "tap opens full-screen or accordion"

    focus_management:
      on_open: "focus remains on trigger or moves to first link"
      on_close: "return focus to trigger element"
      focus_trap: "trap focus within open mega menu"

  layout_specifications:
    panel_dimensions:
      max_height: "80vh to prevent scroll in most cases"
      min_height: "auto-adjust to content"
      width_strategy: "full viewport/match content container/fixed width"

    column_organization:
      equal_width_columns: true/false
      column_alignment: "top/center/stretch"
      gap_between_columns: "32-48px for clear separation"

    visual_hierarchy:
      section_headers:
        font_size: "14-16px, bold or semibold"
        color: "muted/accent to distinguish from links"
        spacing: "16px top margin for separation"

      links:
        font_size: "14px standard"
        line_height: "1.5 for readability and touch targets"
        hover_state: "background highlight/underline/color change"
        visited_state: "optional subtle color change"

      featured_content:
        visual_treatment: "bordered/background color/elevated"
        image_dimensions: "maintain aspect ratio, responsive"

  content_types_by_category:
    product_categories:
      structure: "Browse by product type, solution, or use case"
      featured_content: "new products, best sellers, seasonal items"
      example_sections:
        - "By Product Type"
        - "By Use Case"
        - "Featured Collections"
        - "Shop by Price"

    company_information:
      structure: "about, careers, press, investors"
      featured_content: "latest news, job openings, culture video"
      depth: "usually flat (1 level)"

    resources_learning:
      structure: "content type organization"
      example_sections:
        - "Learn" (guides, tutorials)
        - "Reference" (docs, API)
        - "Community" (forum, events)
        - "Featured Resource" (latest webinar/whitepaper)

    support_help:
      structure: "by topic or by action"
      quick_access: "contact methods prominent"
      example_sections:
        - "Get Help" (FAQs, contact, chat)
        - "Account & Billing"
        - "Technical Support"
        - "Status & Updates"

  mobile_adaptation:
    approach: "no mega menu on mobile - alternative patterns"

    alternatives:
      accordion_menu:
        description: "tap to expand categories in place"
        pros: "familiar pattern, conserves space"
        cons: "requires multiple taps for deep content"

      full_screen_overlay:
        description: "tap category opens full-screen submenu"
        pros: "dedicated space, clear focus"
        cons: "feels like navigation away"

      tab_navigation:
        description: "horizontal tabs for top categories, lists below"
        pros: "see multiple categories quickly"
        cons: "limited space for tab labels"

    recommendation: "accordion for sites with < 50 subcategories, full-screen for > 50"

    mobile_simplification:
      reduce_depth: "show fewer levels than desktop"
      remove_featured: "exclude promotional content"
      prioritize_links: "show top 5-7 per category with 'View All'"

  special_patterns:
    dual_functionality:
      pattern: "top-level item is both link and menu trigger"
      implementation: "click goes to page, hover shows menu"
      mobile: "first tap shows menu, second tap follows link"
      accessibility: "separate button for menu toggle"

    mega_footer:
      comparison: "similar to mega menu but always visible"
      use_case: "alternative to mega menu for some sites"

    contextual_menus:
      logic: "menu content changes based on user state"
      examples:
        - "logged in: show account-specific links"
        - "cart items: show related categories"
        - "seasonal: highlight holiday categories"

    multi_column_sections:
      use_case: "large e-commerce (100+ subcategories)"
      pattern: "section header spans multiple columns"
      example: "'Women's Clothing' header with 3 columns of categories beneath"

  accessibility_compliance:
    semantic_structure:
      landmark: "<nav aria-label='Main navigation with submenus'>"
      menu_role: "role='menu' on container, role='menuitem' on links"
      expanded_state: "aria-expanded on triggers"

    screen_reader_support:
      navigation_announcement: "'Main menu, [Category] expanded, submenu with [N] items'"
      current_location: "aria-current='page' for current category"
      submenu_indication: "announce when menu items have submenus"

    keyboard_requirements:
      all_items_reachable: "every link accessible via keyboard alone"
      logical_order: "follows visual layout, predictable flow"
      focus_visible: "clear indicators, minimum 2px outline, 3:1 contrast"

    motion_sensitivity:
      respect_prefers_reduced_motion: "disable animations for users who request it"
      animation_purposes: "fade in panels, slide indicators"

  performance_optimization:
    loading_strategy:
      approach: "all menu content in initial HTML/lazy load images"
      rationale: "fast menu opening, SEO benefit"

    image_optimization:
      format: "WebP with fallbacks"
      lazy_loading: "below-fold images only"
      dimensions: "specify width/height to prevent layout shift"

    hover_performance:
      debounce: "delay hover activation to reduce reflows"
      gpu_acceleration: "use transforms for animations"

  analytics_tracking:
    events_to_track:
      - event: "mega_menu_open"
        properties: ["category_name", "trigger_method"]

      - event: "mega_menu_link_click"
        properties: ["category", "section", "link_label", "link_position"]

      - event: "mega_menu_close"
        properties: ["category", "time_open", "interaction_occurred"]

    insights:
      popular_categories: "which mega menus opened most"
      engagement_depth: "do users click or just browse"
      section_performance: "which sections within menus get clicks"
      featured_content_ctr: "effectiveness of promotional elements"
```

=== MEGA MENU CONTENT PATTERNS ===

**Column Headers (Optional Groupings)**:
- Use when: >12 links need organization within a category
- Character limit: 20-25 characters
- Style: Subtle differentiation from links (not overly prominent)
- Examples:
  - ✓ "By Product Type", "By Industry", "Popular"
  - ✗ "Click Here", "More Options", "Other"

**Link Labels**:
- Match destination page H1 headings
- Front-load keywords: "Marketing Automation" not "Automation for Marketing"
- Consistent terminology across site
- Character limit: 30 characters ideal

**Link Descriptions (Optional)**:
- Use for: Unfamiliar terms, distinguishing similar items
- Length: 40-60 characters
- Format: Fragment, not complete sentence
- Examples:
  - "Customer Data Platform - Unify customer data across channels"
  - "A/B Testing - Experiment and optimize experiences"

**Featured Content Headlines**:
- Action-oriented or benefit-focused
- Examples: "New: Spring Collection", "Save 30% on Laptops", "Start Free Trial"

=== EXAMPLES ===

**Example 1: Enterprise SaaS Platform**
- site_type: "B2B SaaS platform"
- content_categories: "5 main categories"
- menu_depth: "2 levels (category > subcategories)"
- trigger_type: "hover on desktop, tap on mobile"
- menu_pattern: "hybrid (columns + featured content)"

**Output**:
```yaml
mega_menu_system:
  structure:
    menu_panels:
      - category: "Products"
        panel_width: "content-width (1200px max)"
        layout_type: "hybrid"
        column_count: 4

        sections:
          - section_heading: "By Capability"
            links:
              - label: "Marketing Automation"
                destination: "/products/marketing-automation"
                character_count: 20
                description: "Plan, execute, and measure campaigns"
                icon: "megaphone"

              - label: "Sales Intelligence"
                destination: "/products/sales-intelligence"
                character_count: 18
                description: "Find and engage qualified buyers"
                icon: "target"

              - label: "Customer Analytics"
                destination: "/products/analytics"
                character_count: 18
                description: "Understand behavior and trends"
                icon: "chart"

          - section_heading: "By Team Size"
            links:
              - label: "Small Business"
                destination: "/products/small-business"
                character_count: 14

              - label: "Enterprise"
                destination: "/products/enterprise"
                character_count: 10

          - section_heading: "Platform"
            links:
              - label: "All Products"
                destination: "/products"
                styling: "bold, with arrow icon"
              - label: "Integrations"
                destination: "/integrations"
              - label: "Security & Compliance"
                destination: "/security"

        featured_content:
          enabled: true
          content_type: "product launch announcement"
          placement: "right column (25% width)"
          headline: "New: AI-Powered Insights"
          description: "Make better decisions with predictive analytics"
          cta_text: "Learn More"
          image: "product screenshot"

      - category: "Solutions"
        panel_width: "content-width"
        layout_type: "columns"
        column_count: 3

        sections:
          - section_heading: "By Industry"
            links:
              - label: "Financial Services"
              - label: "Healthcare"
              - label: "Retail"
              - label: "Technology"
              - label: "Manufacturing"

          - section_heading: "By Use Case"
            links:
              - label: "Lead Generation"
              - label: "Customer Retention"
              - label: "Account-Based Marketing"
              - label: "Product Analytics"

          - section_heading: "Success Stories"
            links:
              - label: "Case Studies"
              - label: "Customer Reviews"
              - label: "ROI Calculator"

        featured_content:
          enabled: false

  content_strategy:
    link_selection:
      approach: "curated top products and solutions"
      max_links_per_column: 8
      priority_logic: "strategic - highlight high-value offerings"

    view_all_links:
      pattern: "View All Products"
      placement: "bottom of 'Platform' section"
      styling: "bold text with right arrow icon"

  navigation_patterns:
    hover_behavior:
      activation_delay: "250ms"
      deactivation_delay: "300ms"

    click_behavior:
      top_level_link: "toggle only - prevents accidental navigation"
      recommendation: "Products label opens menu, 'View All Products' link inside menu"

  mobile_adaptation:
    alternatives:
      full_screen_overlay:
        description: "Tap 'Products' opens full-screen submenu with back button"

    mobile_simplification:
      reduce_depth: "show all links, remove section headers on mobile"
      remove_featured: "exclude featured content card"
      prioritize_links: "all links shown (only 15 total)"
```

**Example 2: E-commerce Fashion Retailer**
- site_type: "e-commerce fashion"
- content_categories: "4 main categories (Women, Men, Kids, Sale)"
- content_volume: "30-40 subcategories per main category"
- menu_depth: "3 levels"
- menu_pattern: "grid-based with images"

**Output**:
```yaml
mega_menu_system:
  structure:
    menu_panels:
      - category: "Women"
        panel_width: "full-viewport"
        layout_type: "hybrid"
        column_count: 5

        sections:
          - section_heading: "Clothing"
            links:
              - label: "Dresses"
                destination: "/women/dresses"
                character_count: 7
              - label: "Tops & Blouses"
                character_count: 14
              - label: "Pants & Jeans"
                character_count: 13
              - label: "Sweaters & Cardigans"
                character_count: 20
              - label: "Activewear"
                character_count: 10
              - label: "View All Clothing"
                styling: "bold with arrow"

          - section_heading: "Shoes"
            links:
              - label: "Sneakers"
              - label: "Boots"
              - label: "Heels"
              - label: "Flats"
              - label: "Sandals"
              - label: "View All Shoes"
                styling: "bold with arrow"

          - section_heading: "Accessories"
            links:
              - label: "Bags & Purses"
              - label: "Jewelry"
              - label: "Scarves & Hats"
              - label: "Belts"
              - label: "View All Accessories"
                styling: "bold with arrow"

          - section_heading: "By Occasion"
            links:
              - label: "Work"
              - label: "Casual"
              - label: "Evening"
              - label: "Athletic"

        featured_content:
          enabled: true
          content_type: "seasonal promotion with image"
          placement: "right column (20% width)"
          headline: "New Spring Collection"
          image: "lifestyle photo"
          cta_text: "Shop Now"

        visual_enhancements:
          category_images:
            enabled: false
            rationale: "text-only for faster scanning with large category count"

      - category: "Sale"
        panel_width: "content-width"
        layout_type: "grid"
        column_count: 4

        sections:
          - section_heading: null
            links:
              - label: "Women's Sale"
                destination: "/sale/women"
                visual_badge: "Up to 60% Off"

              - label: "Men's Sale"
                destination: "/sale/men"
                visual_badge: "Up to 50% Off"

              - label: "Kids' Sale"
                destination: "/sale/kids"
                visual_badge: "Up to 40% Off"

              - label: "Final Clearance"
                destination: "/sale/clearance"
                visual_badge: "Extra 25% Off"

  content_strategy:
    link_selection:
      approach: "curated popular categories + view all links"
      max_links_per_column: 8
      priority_logic: "popular categories based on sales data"

  mobile_adaptation:
    alternatives:
      accordion_menu:
        description: "Tap 'Women' expands subcategories in place"

    mobile_simplification:
      reduce_depth: "show section headers and top 5 items per section with 'View All'"
      remove_featured: "featured content shown separately in mobile nav"
```

**Example 3: University Website**
- site_type: "higher education institution"
- content_categories: "6 main categories"
- menu_depth: "2-3 levels"
- menu_pattern: "column-based, audience-focused"

**Output**:
```yaml
mega_menu_system:
  structure:
    menu_panels:
      - category: "Academics"
        panel_width: "content-width"
        layout_type: "columns"
        column_count: 4

        sections:
          - section_heading: "Explore Programs"
            links:
              - label: "Undergraduate Programs"
                destination: "/academics/undergraduate"
              - label: "Graduate Programs"
                destination: "/academics/graduate"
              - label: "Online Programs"
                destination: "/academics/online"
              - label: "Certificates"
                destination: "/academics/certificates"

          - section_heading: "Schools & Colleges"
            links:
              - label: "Business"
              - label: "Engineering"
              - label: "Arts & Sciences"
              - label: "Education"
              - label: "Nursing"
              - label: "View All Schools"
                styling: "bold"

          - section_heading: "Academic Resources"
            links:
              - label: "Course Catalog"
              - label: "Academic Calendar"
              - label: "Libraries"
              - label: "Study Abroad"
              - label: "Tutoring Services"

          - section_heading: "For Current Students"
            links:
              - label: "Register for Classes"
              - label: "Academic Advising"
              - label: "Degree Requirements"

        featured_content:
          enabled: false
          rationale: "academic content is primary focus"

  content_strategy:
    link_selection:
      approach: "comprehensive with logical grouping"
      max_links_per_column: 7
      priority_logic: "frequency of access + strategic priorities"

  navigation_patterns:
    keyboard_accessibility:
      emphasis: "critical for accessibility compliance in education"
      tab_sequence: "rigorous testing required"

  mobile_adaptation:
    alternatives:
      accordion_menu:
        description: "standard accordion with clear expand indicators"

    mobile_simplification:
      reduce_depth: "all links shown, no truncation"
      rationale: "critical information access for students"
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Use semantic nav element with descriptive aria-label. Implement proper ARIA menu roles and states (role="menu", role="menuitem", aria-haspopup, aria-expanded). Ensure keyboard navigation with Tab, arrow keys, Escape, and Enter. Provide visible focus indicators (minimum 2px outline, 3:1 contrast ratio). Maintain 4.5:1 color contrast for all text. Make touch targets minimum 44x44px on mobile. Respect prefers-reduced-motion for animations. Manage focus properly when opening/closing menus. Provide clear visual indication of which menu is currently open. Include skip link to bypass mega menu. Test thoroughly with screen readers to ensure logical reading order.

**Psychological Principles**: Information architecture visibility (show structure that would otherwise be hidden). Cognitive load reduction through organization (grouped related items reduce mental effort). Hick's Law management (organize choices into categories to speed decisions). Recognition over recall (see all options instead of remembering hierarchy). Serial position effect (place important items first in sections). Visual hierarchy (size, color, spacing guide attention). Gestalt grouping principles (proximity, similarity organize related items). Progressive disclosure (show overview, allow drill-down). Satisficing behavior (users scan for "good enough" choice, need clear labels). Fitts's Law (larger touch targets for frequent destinations).

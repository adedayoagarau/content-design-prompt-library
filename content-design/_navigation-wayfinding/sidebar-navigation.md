## Sidebar Navigation Design v1.0

**Purpose**: Create persistent, hierarchical sidebar navigation that provides constant access to site sections, clearly shows current location, supports deep content hierarchies, and adapts appropriately for mobile devices.

---

**PROMPT:**

You are designing sidebar navigation for {{site_type}} with {{hierarchy_depth}} levels of content. Create sidebar navigation that helps users {{user_goal}}, navigate {{content_volume}} effectively, maintains context awareness, and supports {{brand_voice}}.

=== SIDEBAR CONTEXT ===
Site type: {{site_type}} (documentation/admin dashboard/content platform/SaaS app/intranet)
Hierarchy depth: {{hierarchy_depth}} (number of navigation levels)
Content volume: {{content_volume}} (number of pages/sections)
Sidebar position: {{sidebar_position}} (left/right side of page)
Sidebar behavior: {{sidebar_behavior}} (always visible/collapsible/auto-hide/persistent)
Primary use case: {{primary_use}} (wayfinding/tools access/contextual actions)

=== NAVIGATION REQUIREMENTS ===
Navigation scope: {{nav_scope}} (site-wide/section-specific/contextual)
Expandable sections: {{expandable}} (yes/no - can categories expand/collapse)
Search integration: {{search}} (include search in sidebar/separate)
Current page indication: {{current_indication}} (highlight/bold/icon/all)
Scroll behavior: {{scroll_behavior}} (fixed position/scrolls with page)

=== SIDEBAR PATTERNS ===

**Sidebar Types**:
- **Documentation sidebar**: Hierarchical content with collapsible sections
- **Dashboard sidebar**: Tool/feature access with icons
- **Settings sidebar**: Grouped configuration options
- **Content library**: Browsable categories and filters
- **Multi-level navigation**: Deep hierarchies (3+ levels)

Current type: {{sidebar_type}}

**Hierarchy Display**:
- **Flat list**: Single level, no nesting
- **Expandable tree**: Collapsible sections reveal children
- **Always expanded**: All levels visible simultaneously
- **Hybrid**: Top levels expanded, deeper levels collapsed

Display approach: {{hierarchy_display}}

=== OUTPUT REQUIREMENTS ===

```yaml
sidebar_navigation:
  structure:
    sidebar_width:
      desktop: "240-280px typical, 300-320px for dense content"
      tablet: "240px or collapsible to icon-only (48-64px)"
      mobile: "full-width overlay or bottom sheet"

    sections:
      - section_heading: "string (optional grouping label)"
        heading_purpose: "organize navigation into logical groups"
        heading_styling: "uppercase/bold/muted color"
        collapsible: true/false

        items:
          - label: "string"
            destination: "page/route"
            character_count: number
            icon: "optional icon identifier"
            badge: "optional count or status indicator"
            has_children: true/false

            children:
              - label: "string"
                destination: "page/route"
                level: 2
                children: []

  label_guidelines:
    character_limits:
      top_level: "15-25 characters"
      second_level: "20-30 characters"
      third_level: "25-35 characters (can be longer as more specific)"

    label_patterns:
      parallel_structure: "consistent grammatical pattern within each level"
      examples_noun: ["Getting Started", "API Reference", "Tutorials"]
      examples_action: ["Create Project", "Manage Users", "View Reports"]

    truncation:
      method: "ellipsis for labels exceeding space"
      tooltip: "show full label on hover"
      wrap: "avoid multi-line labels - prefer truncation"

    icon_pairing:
      when_to_use: "top-level items for visual recognition"
      icon_position: "left of text label"
      icon_only_mode: "collapsed sidebar shows icons only"
      accessibility: "icons decorative, text label is accessible name"

  hierarchy_management:
    expandable_sections:
      default_state: "current section expanded, others collapsed"
      expand_icon: "+ / ▸ / ▶ / chevron-right"
      collapse_icon: "- / ▾ / ▼ / chevron-down"
      icon_position: "left or right of section label"

      expand_behavior:
        single_expansion: "only one section open at a time (accordion)"
        multiple_expansion: "multiple sections can be open simultaneously"
        recommended: "multiple expansion for flexibility"

      user_preference: "remember expanded/collapsed state"
      animation: "smooth 200-300ms transition"

    nesting_depth:
      maximum_recommended: "3 levels for usability"
      deep_hierarchies: "consider breadcrumbs or alternative organization"

      visual_indication:
        indentation: "8-16px per level"
        connecting_lines: "optional vertical lines showing parent-child"
        icon_size_reduction: "slightly smaller icons at deeper levels"

    current_page_indication:
      visual_treatments:
        background: "highlighted background color/fill"
        text: "bold text weight"
        border: "left border (3-4px) in accent color"
        icon: "dot/checkmark/arrow indicator"
        color: "brand color text"

      recommended_combination: "background + border + bold text for clarity"
      aria_current: "'page' for current item"

    parent_trail:
      behavior: "show breadcrumb trail to current page"
      visual: "parent items slightly highlighted or distinguished"
      expanded_parents: "auto-expand parent sections of current page"

  interaction_patterns:
    hover_states:
      style: "subtle background change or highlight"
      show_tooltip: "if label is truncated"
      preview: "optional - show page preview on hover"

    click_behavior:
      leaf_nodes: "navigate to page"
      parent_nodes: "expand/collapse or navigate to overview page"
      recommendation: "expand/collapse for parents in navigation sidebars"

    keyboard_navigation:
      tab_focus: "Tab moves through sidebar items sequentially"
      arrow_keys: "Up/Down navigate items, Right expands, Left collapses"
      enter_space: "activate link or toggle expansion"
      home_end: "jump to first/last item"

    touch_interaction:
      tap_target: "minimum 44x44px"
      expand_toggle: "separate tap area for expand/collapse vs. navigation"
      swipe_gesture: "optional - swipe on item to reveal actions"

  sidebar_controls:
    collapse_expand_toggle:
      label: "Collapse sidebar / Expand sidebar"
      icon: "hamburger menu / double arrows / chevrons"
      behavior: "collapses to icon-only or fully hidden"
      icon_only_mode: "show icons, hide text, show text on hover"
      keyboard_shortcut: "optional - [ or ] keys"

    search_integration:
      placement: "top of sidebar, sticky"
      placeholder: "Search pages... / Find in docs..."
      behavior: "filters sidebar items or launches full search"
      clear_button: "X to clear search and restore full navigation"

    filter_options:
      use_case: "content libraries, large documentation sites"
      examples: "Show all / Favorites / Recent / By category"
      placement: "below search, above main navigation"

    scroll_indicator:
      usage: "for long sidebars indicating more content above/below"
      style: "fade gradient at top/bottom"
      scroll_buttons: "optional up/down arrows for keyboard users"

  mobile_adaptations:
    overlay_panel:
      trigger: "hamburger menu button in header"
      behavior: "slides in from left, overlays content"
      backdrop: "semi-transparent dark overlay, click to close"
      close_button: "X in top corner or swipe to close"

    bottom_sheet:
      trigger: "tap menu button"
      behavior: "slides up from bottom"
      usage: "works well for shorter navigation lists"

    accordion_in_content:
      pattern: "sidebar navigation appears above/within content on mobile"
      styling: "collapsible accordion sections"

    responsive_strategy:
      breakpoint: "typically 768px or 1024px"
      recommendation: "overlay panel for most cases, persistent for tablets in landscape"

  special_patterns:
    dual_sidebar:
      use_case: "left sidebar for navigation, right for table of contents"
      example: "documentation sites (nav left, on-page TOC right)"
      mobile: "combine into single overlay or bottom sheet"

    contextual_sidebar:
      behavior: "sidebar content changes based on current section"
      example: "admin dashboard shows different tools per module"
      indication: "clear visual indication of context"

    fixed_vs_scrolling:
      fixed_position:
        pros: "always accessible, maintains context"
        cons: "reduces content space, can overlap content on small screens"

      scrolling:
        pros: "more content space, better for long pages"
        cons: "navigation scrolls out of view"

      hybrid:
        pattern: "sidebar scrolls, but header/search stays fixed"
        recommendation: "hybrid for best of both approaches"

    sticky_sections:
      pattern: "section headers stick to top when scrolling"
      benefit: "maintain context in long navigation lists"
      implementation: "position: sticky on section headers"

  visual_design:
    background_color:
      options: ["white/light gray", "dark theme", "brand color subtle tint"]
      contrast: "ensure sufficient contrast with page content"
      recommendation: "light gray (#F9FAFB) for subtle distinction"

    borders_dividers:
      sidebar_edge: "1px border or shadow to separate from main content"
      section_dividers: "optional horizontal lines between groups"
      style: "subtle, low contrast"

    typography:
      font_size:
        top_level: "14-16px"
        nested_levels: "13-14px"
      line_height: "1.5 for comfortable spacing and touch targets"
      font_weight:
        normal: "400 regular"
        active: "600 semibold or 700 bold"

    spacing:
      item_padding: "8-12px vertical, 12-16px horizontal"
      section_spacing: "16-24px between groups"
      nested_indentation: "12-16px per level"

  accessibility_implementation:
    semantic_structure:
      landmark: "<nav aria-label='Main navigation' role='navigation'>"
      lists: "<ul> and <li> for proper structure"
      headings: "optional <h2> or <h3> for section headers"

    aria_attributes:
      expandable_items:
        button: "role='button' or <button> element for expand toggle"
        aria_expanded: "true/false to indicate state"
        aria_controls: "ID of expanded content region"

      current_location:
        aria_current: "'page' on current page link"
        aria_label: "optional - 'current page' if not visually clear"

      icon_only_mode:
        aria_label: "descriptive label when text is hidden"
        tooltip: "visible label on hover/focus"

    keyboard_requirements:
      full_keyboard_access: "all items reachable via keyboard"
      focus_indicators: "2px outline minimum, 3:1 contrast"
      logical_order: "top to bottom, parent to child"
      skip_link: "allow skipping sidebar to reach main content"

    screen_reader_support:
      navigation_announcement: "Main navigation, tree structure"
      item_announcement: "item label, level, expandable, expanded/collapsed"
      link_context: "ensure links make sense out of context"

    reduced_motion:
      respect_preference: "disable expand/collapse animations"
      instant_transitions: "for users with prefers-reduced-motion"

  state_management:
    persistent_state:
      remember_expanded: "store expanded sections in localStorage"
      remember_scroll: "restore scroll position on return"
      url_sync: "optional - reflect sidebar state in URL"

    cross_page_consistency:
      maintain_expansion: "keep sections expanded as user navigates"
      auto_expand_path: "expand sections containing current page"

  analytics_tracking:
    events_to_track:
      - event: "sidebar_item_click"
        properties: ["item_label", "item_level", "parent_section", "destination"]

      - event: "sidebar_section_toggle"
        properties: ["section_name", "action", "expanded_items_count"]

      - event: "sidebar_collapse_toggle"
        properties: ["action", "trigger_method"]

      - event: "sidebar_search"
        properties: ["query", "results_count", "selected_result"]

    insights:
      popular_sections: "most accessed navigation items"
      depth_of_use: "do users navigate to deep nested items"
      search_necessity: "high search usage indicates navigation problems"
      mobile_engagement: "sidebar usage patterns on mobile"
```

=== SIDEBAR LABEL BEST PRACTICES ===

**Section Headers (Optional Groupings)**:
- Use when: >8 items need organization
- Style: All caps or title case, muted color
- Examples: "GETTING STARTED", "ADVANCED", "REFERENCE"
- Avoid: "Other", "Misc", "More" (be specific)

**Navigation Labels**:
- Front-load keywords: "API Authentication" not "Authenticating with the API"
- Use parallel structure within levels
- Be concise: favor clarity over completeness
- Avoid redundancy: "Products" not "Our Products" in navigation context

**Icon Labels (Collapsed State)**:
- Must have: Accessible name via aria-label
- Should have: Tooltip on hover
- Example: Icon only shows 📊, tooltip says "Analytics Dashboard"

**Truncation Patterns**:
- Desktop: "Long Page Title Tha..." (show first 20-25 chars)
- Hover: Show full title in tooltip
- Mobile: Can accommodate slightly longer labels

=== EXAMPLES ===

**Example 1: Documentation Sidebar**
- site_type: "software documentation"
- hierarchy_depth: "3 levels (section > guide > page)"
- content_volume: "100+ documentation pages"
- sidebar_position: "left side"
- sidebar_behavior: "persistent, collapsible sections"
- sidebar_type: "documentation sidebar with expandable tree"

**Output**:
```yaml
sidebar_navigation:
  structure:
    sidebar_width:
      desktop: "280px"
      mobile: "full-width overlay"

    sections:
      - section_heading: "Getting Started"
        heading_styling: "uppercase, text-sm, font-semibold, muted gray"
        collapsible: false

        items:
          - label: "Introduction"
            destination: "/docs/introduction"
            icon: "book-open"
            has_children: false

          - label: "Quick Start"
            destination: "/docs/quick-start"
            icon: "zap"
            has_children: false

          - label: "Installation"
            destination: "/docs/installation"
            icon: "download"
            has_children: true

            children:
              - label: "NPM Install"
                destination: "/docs/installation/npm"
              - label: "CDN Usage"
                destination: "/docs/installation/cdn"
              - label: "Build from Source"
                destination: "/docs/installation/build"

      - section_heading: "Core Concepts"
        collapsible: false

        items:
          - label: "Architecture"
            has_children: true
            children:
              - label: "System Overview"
              - label: "Data Flow"
              - label: "Security Model"

          - label: "Configuration"
            has_children: true

  label_guidelines:
    parallel_structure: "all nouns or noun phrases"

  hierarchy_management:
    expandable_sections:
      default_state: "current section and parent sections expanded"
      expand_icon: "▸ on collapsed, ▾ on expanded"
      expand_behavior:
        multiple_expansion: true
      user_preference: "remember state in localStorage"
      animation: "250ms ease transition"

    current_page_indication:
      visual_treatments:
        background: "light blue background"
        text: "bold, dark text"
        border: "3px left border in brand blue"
      aria_current: "'page'"

  sidebar_controls:
    search_integration:
      placement: "top of sidebar, sticky"
      placeholder: "Search docs..."
      behavior: "filters sidebar items in real-time"

    collapse_expand_toggle:
      label: "Collapse sidebar"
      icon: "double chevron left"
      behavior: "hides sidebar, shows narrow toggle button"
      keyboard_shortcut: "[ key toggles"

  mobile_adaptations:
    overlay_panel:
      trigger: "☰ menu button in mobile header"
      behavior: "slides in from left"
      backdrop: "rgba(0,0,0,0.5)"
      close_button: "X in top-right"

  accessibility_implementation:
    semantic_structure:
      landmark: "<nav aria-label='Documentation navigation'>"
```

**Example 2: Admin Dashboard Sidebar**
- site_type: "SaaS admin dashboard"
- hierarchy_depth: "2 levels (section > pages)"
- content_volume: "25 admin pages"
- sidebar_position: "left side"
- sidebar_behavior: "collapsible to icon-only"
- sidebar_type: "dashboard sidebar with icons"

**Output**:
```yaml
sidebar_navigation:
  structure:
    sidebar_width:
      desktop: "240px expanded, 64px collapsed"
      mobile: "full-width bottom sheet"

    sections:
      - section_heading: null
        items:
          - label: "Dashboard"
            destination: "/dashboard"
            character_count: 9
            icon: "home"
            has_children: false

          - label: "Analytics"
            destination: "/analytics"
            icon: "chart-bar"
            has_children: false

      - section_heading: "MANAGEMENT"
        items:
          - label: "Users"
            destination: "/users"
            icon: "users"
            badge: "23" # 23 pending approvals

          - label: "Teams"
            destination: "/teams"
            icon: "user-group"

          - label: "Projects"
            destination: "/projects"
            icon: "folder"

      - section_heading: "SETTINGS"
        items:
          - label: "Account"
            destination: "/settings/account"
            icon: "cog"

          - label: "Billing"
            destination: "/settings/billing"
            icon: "credit-card"

          - label: "Security"
            destination: "/settings/security"
            icon: "shield"

  label_guidelines:
    icon_pairing:
      when_to_use: "all top-level items"
      icon_position: "left of text"
      icon_only_mode: "collapsed sidebar shows icons + tooltip"

  hierarchy_management:
    current_page_indication:
      visual_treatments:
        background: "subtle gray background"
        border: "4px left border, brand color"
        icon: "brand color fill"

  sidebar_controls:
    collapse_expand_toggle:
      label: "Toggle sidebar"
      icon: "double chevrons"
      behavior: "collapses to 64px icon-only mode"
      icon_only_mode: "icons visible, text in tooltip on hover"

  notification_badges:
    usage: "Users item shows '23' pending approvals"
    positioning: "right side of item"
    styling: "small red circle with white text"
    accessibility: "'Users, 23 pending' in accessible name"

  mobile_adaptations:
    bottom_sheet:
      trigger: "menu button in bottom navigation bar"
      behavior: "slides up, shows all navigation items"
      height: "70% of viewport"
```

**Example 3: Content Platform Sidebar**
- site_type: "learning management system"
- hierarchy_depth: "2 levels (course > lessons)"
- content_volume: "8 courses, 40 lessons"
- sidebar_position: "left side, contextual"
- sidebar_behavior: "shows current course structure"
- sidebar_type: "contextual content library"

**Output**:
```yaml
sidebar_navigation:
  structure:
    sidebar_width:
      desktop: "300px"
      mobile: "full-width overlay"

    sections:
      - section_heading: "Introduction to JavaScript"
        heading_styling: "course title, larger text"
        collapsible: false

        items:
          - label: "1. What is JavaScript?"
            destination: "/course/js-intro/lesson-1"
            icon: "play-circle"
            badge: "✓" # completed
            has_children: false

          - label: "2. Variables and Data Types"
            destination: "/course/js-intro/lesson-2"
            icon: "play-circle"
            badge: "✓"

          - label: "3. Functions"
            destination: "/course/js-intro/lesson-3"
            icon: "play-circle"
            badge: "▸" # current/in progress

          - label: "4. Objects and Arrays"
            destination: "/course/js-intro/lesson-4"
            icon: "lock" # locked/not yet available
            badge: null

  hierarchy_management:
    current_page_indication:
      visual_treatments:
        background: "highlighted background"
        icon: "▸ play indicator"
        text: "bold text"

  notification_badges:
    badge_types:
      completion: "✓ checkmark for completed lessons"
      progress: "▸ for current lesson"
      locked: "🔒 or lock icon for not-yet-available"

  special_patterns:
    contextual_sidebar:
      behavior: "sidebar shows current course structure"
      course_switcher: "dropdown at top to switch between courses"
      indication: "course title prominently displayed"

  accessibility_implementation:
    aria_attributes:
      locked_items:
        aria_disabled: "true"
        aria_label: "'Lesson 4: Objects and Arrays, locked until lesson 3 complete'"
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Use semantic nav element with descriptive aria-label. Structure navigation as nested lists (ul/li) for screen reader context. Implement proper ARIA for expandable sections (aria-expanded, aria-controls). Support full keyboard navigation with arrow keys, Enter/Space, Home/End. Provide visible focus indicators (minimum 2px outline, 3:1 contrast). Use aria-current="page" for current location. Maintain 4.5:1 color contrast for all text. Make touch targets minimum 44x44px on mobile. Ensure icon-only modes have accessible labels. Provide skip link to bypass sidebar navigation. Test with screen readers to verify logical reading order. Respect prefers-reduced-motion for animations.

**Psychological Principles**: Information architecture visibility (persistent sidebar shows full structure). Recognition over recall (always visible reduces memory load). Serial position effect (place important items at top). Gestalt proximity (group related items under headers). Progressive disclosure (collapsible sections hide complexity). Consistency principle (persistent location and structure). Fitts's Law (larger touch targets for frequent items). Zeigarnik effect (progress indicators motivate completion). Visual hierarchy (current page clearly distinguished). Cognitive fluency (familiar tree patterns reduce mental effort). Miller's Law (section groupings aid memory, limit to 7±2 top items). Spatial memory (fixed position aids navigation learning).

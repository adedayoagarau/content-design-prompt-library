## Mobile Navigation Pattern Design v1.0

**Purpose**: Create mobile-optimized navigation patterns that accommodate limited screen space, support touch interactions, provide clear wayfinding, and balance accessibility with efficiency for small-screen experiences.

---

**PROMPT:**

You are designing mobile navigation for {{site_type}} with {{content_categories}} main sections and {{navigation_depth}} levels of hierarchy. Create navigation patterns that help users {{user_goal}}, work within {{screen_size}} constraints, support {{interaction_model}}, and maintain {{brand_voice}}.

=== MOBILE CONTEXT ===
Site type: {{site_type}} (e-commerce/content/SaaS/social/productivity)
Content categories: {{content_categories}} (number of top-level nav items)
Navigation depth: {{navigation_depth}} (levels in hierarchy)
Screen size: {{screen_size}} (small phones 320px / standard 375-414px / large 428px+)
Interaction model: {{interaction_model}} (one-handed/two-handed/responsive)
Primary user task: {{primary_task}} (browsing/searching/task completion/content consumption)

=== NAVIGATION REQUIREMENTS ===
Navigation visibility: {{visibility}} (persistent/hidden/contextual)
Navigation complexity: {{complexity}} (simple/moderate/complex hierarchy)
Quick actions: {{quick_actions}} (yes/no - frequently used features accessible)
Personalization: {{personalization}} (static/adaptive/user-customizable)
Offline capability: {{offline}} (full/partial/none)

=== MOBILE NAVIGATION PATTERNS ===

**Pattern Types**:
- **Hamburger menu**: Three-line icon opens full-screen or overlay menu
- **Tab bar**: 3-5 icons at bottom with labels
- **Hybrid**: Hamburger + tab bar for primary and secondary nav
- **Bottom sheet**: Swipe-up menu with navigation options
- **Floating action button (FAB)**: Primary action button with menu
- **Priority+**: Shows items that fit, hides overflow in "More"

Current pattern: {{current_pattern}}

**Menu Styles**:
- **Full-screen overlay**: Menu takes entire screen
- **Slide-in panel**: Menu slides from left/right
- **Dropdown**: Menu drops down from header
- **Modal**: Centered modal with navigation
- **Accordion**: Expandable sections within menu

Menu style: {{menu_style}}

=== OUTPUT REQUIREMENTS ===

```yaml
mobile_navigation:
  pattern_selection:
    primary_pattern:
      type: "hamburger menu/tab bar/hybrid"
      rationale: "why this pattern fits user needs and content"

    menu_trigger:
      icon: "☰ hamburger / ⋮ kebab / + plus / custom icon"
      label: "Menu / Navigate / Options / hidden label"
      placement: "top-left/top-right/bottom-center"
      size: "48x48px minimum touch target"
      aria_label: "'Open navigation menu' or 'Main menu'"

    menu_behavior:
      animation: "slide-in / fade / scale"
      duration: "250-350ms"
      backdrop: "semi-transparent overlay, dismisses on tap"
      close_method: "X button / tap outside / swipe / back button"

  navigation_structure:
    top_level_items:
      - label: "string"
        icon: "optional icon identifier"
        destination: "page/route or expands submenu"
        character_limit: "15-20 characters"
        priority: "primary/secondary/utility"
        badge: "optional notification count"

        rationale: "why included at top level"

        submenu_behavior:
          has_submenu: true/false
          expand_method: "tap to expand in place / navigate to submenu page"
          back_navigation: "< back button / breadcrumb trail"

    utility_items:
      placement: "top of menu / bottom of menu / separate section"
      examples: ["Account", "Settings", "Help", "Sign In"]
      visual_distinction: "separated by divider or different styling"

    search_integration:
      placement: "top of menu / persistent in header / separate search icon"
      trigger: "🔍 search icon"
      behavior: "opens search overlay or inline search field"

  hamburger_menu_pattern:
    menu_opening:
      trigger_position: "top-left or top-right header"
      slide_direction: "from left (if icon on left) or from right"
      menu_width: "80-90% of screen width or full width"
      z_index: "high enough to overlay all content"

    menu_content:
      layout: "vertical list, scannable"
      item_height: "48-56px for comfortable tapping"
      spacing: "0-4px between items or subtle dividers"

      section_grouping:
        use_headers: true/false
        header_styling: "uppercase, smaller text, muted color"
        examples: ["MAIN MENU", "ACCOUNT", "SUPPORT"]

    submenu_handling:
      pattern_1_accordion:
        description: "tap parent item to expand children inline"
        indicator: "chevron or + icon shows expandable"
        animation: "smooth height transition"
        pros: "keeps context, no navigation away"
        cons: "can create long scrolling menus"

      pattern_2_drill_down:
        description: "tap parent to navigate to submenu screen"
        back_button: "< Back or < [Parent Name]"
        pros: "cleaner, focused view of submenu"
        cons: "requires navigation, back button"

      recommended: "accordion for shallow hierarchies, drill-down for deep"

    close_mechanisms:
      x_button:
        position: "top-right of menu"
        label: "✕ or 'Close'"
        aria_label: "'Close menu'"

      backdrop_tap: "tap outside menu to dismiss"
      swipe_gesture: "swipe menu closed (left if menu from left)"
      android_back_button: "hardware/software back button closes menu"

  tab_bar_pattern:
    tab_bar_placement:
      position: "fixed bottom of screen"
      height: "56-64px including safe area"
      background: "solid color, slight shadow or border top"

    tab_count:
      recommended: "3-5 tabs (4 ideal)"
      rationale: "more than 5 reduces label readability and tap target size"
      overflow: "if >5 items, use 4 tabs + 'More' tab"

    tab_items:
      - label: "Home"
        icon: "house"
        active_page: true
        badge: null

        icon_requirements:
          style: "outline when inactive, filled when active"
          size: "24x24px icon"
          recognizability: "instantly recognizable, no explanation needed"

        label_requirements:
          font_size: "10-12px"
          character_limit: "8-10 characters max"
          always_visible: true
          label_position: "below icon"

        active_state:
          color: "brand color for icon and label"
          background: "optional subtle background"
          indicator: "optional dot or underline"

      - label: "Search"
        icon: "magnifying-glass"
        active_page: false

      - label: "Add"
        icon: "plus-circle"
        active_page: false
        special_styling: "larger/centered/different color if primary action"

      - label: "Notifications"
        icon: "bell"
        badge: "3"
        badge_placement: "top-right of icon"

      - label: "Profile"
        icon: "user-circle"

    tab_behavior:
      tap_action: "navigate to section, highlight active tab"
      double_tap: "optional - scroll to top if already on that tab"
      long_press: "optional - show contextual actions"

      safe_area_handling: "add padding for device notch/home indicator"

  hybrid_pattern:
    combination: "tab bar for primary nav + hamburger for secondary"

    tab_bar_items:
      count: "3-4 primary destinations"
      examples: ["Home", "Browse", "Cart", "Account"]

    hamburger_menu_items:
      content: "secondary pages, settings, help, legal"
      trigger: "☰ in header or as 5th tab bar item"

    rationale: "provides quick access to top destinations while organizing secondary content"

  bottom_sheet_pattern:
    trigger:
      methods: ["swipe up from bottom", "tap menu button", "long press"]
      handle: "visual handle/grip at top of sheet"

    sheet_states:
      peek: "shows preview, 20-30% of screen"
      half: "shows 50-60% of screen"
      full: "expands to near full screen"

    content:
      layout: "vertical list or grid of options"
      search: "optional search field at top"
      close: "swipe down or tap backdrop"

    use_cases: "share sheets, filter/sort options, action menus"

  priority_plus_pattern:
    concept: "show items that fit, hide overflow"

    visible_items:
      count: "depends on screen width"
      priority: "determined by importance/frequency"

    overflow_menu:
      label: "More / ⋯ / •••"
      behavior: "opens dropdown or bottom sheet with remaining items"

    responsive: "adapts to screen size, more items visible on larger phones"

  floating_action_button:
    primary_fab:
      position: "bottom-right, above tab bar if present"
      size: "56x56px standard, 48x48px mini"
      icon: "single action icon (+ / ✏️ / 📷)"
      label: "appears on long press or always visible (extended FAB)"

    speed_dial:
      behavior: "tap FAB to reveal 2-4 related actions"
      actions_appear: "above FAB, vertically stacked"
      labels: "appear beside each action icon"
      close: "tap FAB again or tap backdrop"

    use_case: "primary action app (compose email, create post, add item)"

  contextual_navigation:
    adaptive_content:
      concept: "navigation changes based on context"
      examples:
        - "logged out: show Sign In prominently"
        - "logged in: show Account instead"
        - "in checkout: simplified nav, focus on completion"

    page_specific:
      product_pages: "add to cart action in sticky header or FAB"
      article_pages: "progress indicator, related articles in nav"
      forms: "progress steps, save/exit options"

  gestures_and_interactions:
    swipe_gestures:
      swipe_right: "often maps to 'back' or opens menu"
      swipe_left: "may close menu or reveal actions"
      swipe_up: "scroll down / open bottom sheet"
      swipe_down: "scroll up / close modal"

      discoverability: "provide visual hints for gesture support"
      fallback: "always provide button alternative"

    long_press:
      use_cases: "reveal contextual menu / show tooltip / copy text"
      feedback: "haptic vibration after ~500ms"
      accessibility: "ensure all functions available via tap"

    pull_to_refresh:
      pattern: "pull down from top to refresh content"
      indicator: "spinner or animated icon"
      haptic: "subtle feedback when threshold reached"

  accessibility_implementation:
    touch_targets:
      minimum_size: "44x44px per WCAG 3.0"
      recommended_size: "48x48px for better accuracy"
      spacing: "8px minimum between tappable elements"

    focus_indicators:
      visibility: "clear outline when using external keyboard"
      contrast: "3:1 minimum for focus indicators"

    screen_reader_support:
      navigation_landmarks: "proper ARIA landmarks for nav regions"
      button_labels: "descriptive aria-labels for icon-only buttons"
      state_announcements: "announce menu open/closed, active tab"
      heading_hierarchy: "proper heading structure in menus"

    haptic_feedback:
      menu_open_close: "subtle vibration"
      button_taps: "light haptic response"
      user_control: "respect device haptic settings"

  performance_optimization:
    fast_interactions:
      tap_response: "immediate visual feedback <100ms"
      animation_performance: "60fps smooth animations"
      menu_rendering: "optimize for quick open/close"

    offline_support:
      cached_navigation: "navigation structure works offline"
      disabled_items: "indicate items unavailable offline"

  mobile_specific_patterns:
    reachability:
      one_handed_use: "place frequent actions in thumb-friendly zone"
      thumb_zone: "bottom 60% of screen easiest to reach"
      avoid: "important actions in top corners"

    safe_area_awareness:
      notch_handling: "padding for notch/dynamic island"
      home_indicator: "padding above bottom nav for gesture bar"

    orientation_support:
      portrait: "primary design, most common"
      landscape: "adapt or hide navigation for more content space"

  state_management:
    scroll_behavior:
      hide_on_scroll: "hide navigation when scrolling down, show when scrolling up"
      always_visible: "persistent navigation, content scrolls behind"
      recommendation: "hide on scroll for content-heavy apps, persistent for utilities"

    active_state:
      visual_indication: "clearly show current section/page"
      persistence: "maintain state across app relaunch"

  analytics_tracking:
    events_to_track:
      - event: "mobile_nav_open"
        properties: ["trigger_method", "trigger_location"]

      - event: "mobile_nav_item_click"
        properties: ["item_label", "item_level", "menu_type"]

      - event: "mobile_nav_pattern_used"
        properties: ["pattern_type", "user_action"]

      - event: "gesture_usage"
        properties: ["gesture_type", "success", "context"]

    insights:
      pattern_effectiveness: "hamburger vs tab bar engagement"
      gesture_adoption: "are users discovering gesture shortcuts"
      one_handed_usage: "reachability analysis, adjust UI accordingly"
      menu_depth_navigation: "how deep do users navigate in hierarchies"
```

=== MOBILE NAVIGATION LABEL GUIDELINES ===

**Tab Bar Labels**:
- Maximum 8-10 characters
- Single word preferred: "Home" not "Home Page"
- Avoid abbreviations unless universal: "Profile" not "Prof"
- Match icon meaning: if icon is house, label is "Home"

**Hamburger Menu Items**:
- 15-20 characters maximum
- Front-load keywords: "Account Settings" not "Settings for Account"
- Use parallel structure: all nouns or all verbs
- Be specific: "Help Center" not "Help"

**Icon Accessibility Labels**:
- Descriptive action: "Open main menu" not just "Menu"
- Include state: "Close navigation" vs "Open navigation"
- Context if needed: "Account menu" vs "Navigation menu"

**Submenu Hierarchy**:
- Use clear parent-child relationships
- Back button: "< Back" or "< [Parent Name]"
- Breadcrumbs if deep: "Home > Shop > Electronics"

=== EXAMPLES ===

**Example 1: E-commerce App**
- site_type: "e-commerce mobile app"
- content_categories: "7 main sections"
- navigation_depth: "3 levels (category > subcategory > product)"
- interaction_model: "one-handed browsing, two-handed checkout"
- primary_task: "product browsing and purchasing"
- current_pattern: "hybrid (tab bar + hamburger)"

**Output**:
```yaml
mobile_navigation:
  pattern_selection:
    primary_pattern:
      type: "hybrid"
      rationale: "tab bar provides quick access to Home, Search, Cart, Account while hamburger contains secondary pages and categories"

    menu_trigger:
      icon: "☰ hamburger"
      label: "Shop"
      placement: "first position in tab bar"
      aria_label: "'Browse categories and products'"

  tab_bar_pattern:
    tab_count:
      recommended: "5 tabs"

    tab_items:
      - label: "Shop"
        icon: "grid / menu icon"
        destination: "opens hamburger menu with categories"
        active_state:
          color: "brand purple"

      - label: "Search"
        icon: "magnifying-glass"
        destination: "opens search overlay"

      - label: "Scan"
        icon: "camera / barcode"
        destination: "barcode scanner for quick product lookup"
        special_styling: "slightly larger, centered position"

      - label: "Cart"
        icon: "shopping-bag"
        badge: "2 items"
        badge_placement: "top-right"
        destination: "shopping cart page"

      - label: "Account"
        icon: "user-circle"
        destination: "account dashboard"

  hamburger_menu_pattern:
    menu_opening:
      trigger_position: "first tab in tab bar labeled 'Shop'"
      slide_direction: "from left, full-screen overlay"
      menu_width: "100% of screen"

    menu_content:
      layout: "featured categories with images + full category list"

      section_grouping:
        use_headers: true
        examples:
          - "WOMEN'S"
          - "MEN'S"
          - "KIDS & BABY"
          - "HOME"
          - "MORE"

    submenu_handling:
      pattern_2_drill_down:
        description: "tap 'Women's' navigates to women's category page with subcategories"
        back_button: "< Shop"

    close_mechanisms:
      x_button:
        position: "top-right"
        label: "✕"
      backdrop_tap: false
      swipe_gesture: "swipe left to close"

  contextual_navigation:
    page_specific:
      product_pages: "sticky 'Add to Cart' button at bottom, overlays tab bar"
      cart_page: "prominent 'Checkout' CTA, simplified nav"
      checkout_flow: "minimal nav, progress stepper, back button"

  analytics_tracking:
    insights:
      tab_usage: "Cart and Search most tapped tabs - validate importance"
      hamburger_engagement: "track if users find categories in menu easily"
```

**Example 2: News/Content App**
- site_type: "news and content consumption"
- content_categories: "6 content sections + personalization"
- navigation_depth: "2 levels (section > article)"
- interaction_model: "one-handed vertical scrolling"
- primary_task: "content discovery and reading"
- current_pattern: "priority+ top navigation with hamburger overflow"

**Output**:
```yaml
mobile_navigation:
  pattern_selection:
    primary_pattern:
      type: "priority+ with hamburger overflow"
      rationale: "shows top sections horizontally, overflow in menu, optimizes for content consumption"

  priority_plus_pattern:
    visible_items:
      count: "4-5 depending on screen width"
      priority: ["For You", "Latest", "Politics", "Tech", "More..."]
      layout: "horizontal scrolling pill buttons below header"

    overflow_menu:
      label: "More"
      behavior: "opens full-screen menu with all sections"

  hamburger_menu_pattern:
    menu_trigger:
      icon: "☰"
      placement: "top-left header"
      label: "hidden"
      aria_label: "'Open navigation menu'"

    menu_content:
      layout: "large touch-friendly list"
      item_height: "56px"

      items:
        - "For You" (personalized feed)
        - "Latest" (most recent)
        - "Politics"
        - "Tech"
        - "Business"
        - "Science"
        - "Sports"
        - "Entertainment"
        - "Saved Articles" (utility)
        - "Settings" (utility)

  gestures_and_interactions:
    swipe_gestures:
      swipe_right: "opens hamburger menu from left"
      swipe_left: "closes menu"
      swipe_up: "on article, scrolls content"

  mobile_specific_patterns:
    scroll_behavior:
      hide_on_scroll: true
      rationale: "maximize content space when reading, show nav on scroll up"
```

**Example 3: Productivity/SaaS Mobile App**
- site_type: "task management app"
- content_categories: "5 main views"
- navigation_depth: "2 levels"
- interaction_model: "frequent task creation and checking"
- primary_task: "viewing and updating tasks"
- current_pattern: "tab bar + FAB for primary action"

**Output**:
```yaml
mobile_navigation:
  pattern_selection:
    primary_pattern:
      type: "tab bar + FAB"
      rationale: "tab bar for quick view switching, FAB for primary 'add task' action"

  tab_bar_pattern:
    tab_count:
      recommended: "4 tabs"

    tab_items:
      - label: "Inbox"
        icon: "inbox"
        badge: "12 tasks"
        active_page: true
        active_state:
          color: "brand red"
          icon: "filled version"

      - label: "Today"
        icon: "calendar-day"
        badge: "5 tasks"

      - label: "Projects"
        icon: "folder"

      - label: "Browse"
        icon: "grid"
        destination: "all projects, filters, labels view"

  floating_action_button:
    primary_fab:
      position: "bottom-right, above tab bar"
      size: "56x56px"
      icon: "+"
      label: "Add task (on long press)"
      color: "brand red, high contrast"
      action: "opens quick add task modal"
      aria_label: "'Create new task'"

    speed_dial:
      enabled: false
      rationale: "single primary action (add task) doesn't need speed dial"

  contextual_navigation:
    page_specific:
      task_detail: "modal slides up, shows task, close X returns to list"
      project_view: "FAB changes to 'Add task to [Project]'"

  gestures_and_interactions:
    swipe_gestures:
      swipe_right: "on task, mark complete"
      swipe_left: "on task, delete or more options"
      long_press: "on task, select for bulk operations"

  mobile_specific_patterns:
    reachability:
      one_handed_use: "FAB in thumb-friendly bottom-right"
      frequent_actions: "swipe to complete - reachable anywhere"
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Provide minimum 44x44px touch targets (48x48px recommended). Ensure 4.5:1 color contrast for text and icons. Support screen reader navigation with proper ARIA labels and landmarks. Implement visible focus indicators for external keyboard users (2px outline, 3:1 contrast). Ensure all gestures have button alternatives. Test with TalkBack (Android) and VoiceOver (iOS). Respect system preferences for reduced motion, larger text, high contrast. Provide haptic feedback for actions when appropriate. Ensure menus can be dismissed via multiple methods. Support both portrait and landscape orientations. Announce navigation state changes to screen readers.

**Psychological Principles**: Thumb zone optimization (place frequent actions in easily reachable areas, bottom 60% of screen). Fitts's Law (larger touch targets for important actions, edges and corners for persistent controls). Serial position effect (first and last tab bar items remembered best). Recognition over recall (persistent navigation reduces memory load). Progressive disclosure (hamburger menu hides complexity until needed). Confirmation bias (users expect tab bar at bottom, hamburger at top-left). Gestalt proximity (group related nav items). Consistency principle (match platform conventions - iOS bottom tab bar, Android bottom nav). Miller's Law (limit tab bar to 5 items maximum). Aesthetic-usability effect (smooth animations increase perceived usability). Cognitive fluency (familiar patterns reduce mental effort).

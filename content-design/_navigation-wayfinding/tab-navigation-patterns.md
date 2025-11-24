## Tab Navigation Pattern Design v1.0

**Purpose**: Create intuitive, accessible tab navigation interfaces that organize related content into switchable views, reduce page complexity, and provide clear visual indication of active states and content relationships.

---

**PROMPT:**

You are designing tab navigation for {{content_type}} within {{interface_context}}. Create tab labels and patterns that help users {{user_goal}}, organize {{content_categories}} effectively, and provide clear switching between views while maintaining {{brand_voice}}.

=== TAB CONTEXT ===
Content type: {{content_type}} (settings/product details/dashboard views/data categories)
Interface context: {{interface_context}} (app settings/product page/admin panel/profile)
Number of tabs: {{tab_count}} (recommended 3-7 for optimal usability)
Tab content: {{tab_content}} (equal importance/primary + secondary/hierarchical)
Default tab: {{default_tab}} (first tab/most relevant/user's last visited)
Content relationship: {{content_relationship}} (mutually exclusive/complementary/independent)

=== TAB BEHAVIOR ===
Selection method: {{selection_method}} (click/hover/auto-advance)
Content loading: {{content_loading}} (all pre-loaded/load on selection/lazy load)
State persistence: {{state_persistence}} (remember selection/reset on reload/URL-based)
Mobile behavior: {{mobile_behavior}} (horizontal scroll/dropdown/accordion/full tabs)
Orientation: {{orientation}} (horizontal/vertical/responsive)

=== TAB DESIGN PATTERNS ===

**Tab Styles**:
- **Underline tabs**: Minimal border under active tab
- **Box tabs**: Full background fill for active tab
- **Pill tabs**: Rounded capsule shape
- **Segmented control**: iOS-style connected buttons
- **Vertical tabs**: Side navigation style

Current style: {{tab_style}}

**Content Organization**:
- **Feature-based**: "Overview", "Features", "Pricing", "Reviews"
- **Category-based**: "Personal Info", "Security", "Notifications"
- **Format-based**: "Table View", "Card View", "Map View"
- **Time-based**: "Current", "Scheduled", "History"
- **Status-based**: "Active", "Pending", "Completed"

Organization approach: {{organization_approach}}

=== OUTPUT REQUIREMENTS ===

```yaml
tab_navigation:
  tab_structure:
    tabs:
      - label: "string (tab label text)"
        character_count: number
        content_description: "what this tab contains"
        priority: "primary/secondary/tertiary"
        icon: "optional icon identifier"
        badge: "optional notification count or status"
        default_selected: true/false

        alternative_labels:
          - "variation 1"
          - "variation 2"

        label_rationale: "why this label is optimal"

        mobile_label: "string (if different from desktop)"

  label_guidelines:
    character_limits:
      desktop: "8-15 characters ideal, 20 maximum"
      mobile: "6-12 characters ideal, 15 maximum"
      rationale: "prevent wrapping, maintain scannability"

    label_patterns:
      parallel_structure: "all nouns, all verbs, or all phrases"
      examples_noun: ["Overview", "Features", "Pricing", "Support"]
      examples_verb: ["Browse", "Compare", "Purchase", "Track"]
      examples_phrase: ["How It Works", "What's Included", "Get Started"]

    distinctive_labels:
      avoid_similar: "Settings/Configuration, Details/Information"
      front_load_keywords: "'Account Settings' not 'Settings for Account'"
      unique_first_words: "each tab starts with different word if possible"

    icon_usage:
      when_to_include: "when icons clarify meaning/space is limited/visual recognition helps"
      icon_position: "left of text/above text (vertical)/icon only (with tooltip)"
      accessibility: "icons supplementary, not sole identifier"

  visual_design:
    active_state:
      indicators:
        - type: "underline"
          specs: "2-4px solid line, brand color, bottom of tab"
        - type: "background"
          specs: "filled background, contrasts with inactive tabs"
        - type: "border"
          specs: "full border except bottom for connected look"
        - type: "color"
          specs: "text color change, ensure sufficient contrast"

      recommended_approach: "string with rationale"
      multi_indicator: "combine color + underline/border for clarity"

    inactive_state:
      styling: "muted color, no background or lighter background"
      hover_state: "subtle background change or color shift"
      contrast_requirement: "4.5:1 minimum for text"

    disabled_state:
      usage: "when tab conditionally available"
      styling: "reduced opacity (0.4-0.5), not interactive"
      tooltip: "explain why disabled: 'Complete profile to access'"
      aria_disabled: true

    spacing:
      between_tabs: "16-24px for desktop, 8-16px for mobile"
      padding_horizontal: "16-24px within each tab"
      padding_vertical: "12-16px for comfortable touch targets"
      min_touch_target: "44x44px on mobile"

  interaction_patterns:
    selection_behavior:
      click: "standard - click to activate tab"
      keyboard: "arrow keys to navigate, Enter to activate"
      url_sync: "update URL hash or query param for shareable state"
      analytics: "track tab switches"

    content_transition:
      instant: "no animation, immediate switch"
      fade: "cross-fade between content panels"
      slide: "slide in/out direction based on tab order"
      recommendation: "subtle fade (150-200ms) or instant"

    loading_states:
      pre_loaded: "all content ready, instant switching"
      lazy_load: "show loading indicator on first tab activation"
      loading_ui: "spinner or skeleton screen in content area"

  content_panel_design:
    association:
      semantic: "tabpanel associated with tab via aria-controls"
      visibility: "only active panel visible, others display:none"
      id_pattern: "tab-1, panel-1 for programmatic association"

    panel_styling:
      visual_connection: "border or background connects tabs to content"
      padding: "consistent spacing around content"
      min_height: "prevent layout shift between tabs if possible"

  notification_badges:
    usage: "indicate updates, counts, or status in tabs"

    badge_types:
      count: "number of items (3)"
      dot: "simple indicator (has updates)"
      status: "text badge (New, Updated)"

    positioning: "top-right of tab label"
    styling: "small, contrasting color, doesn't overwhelm tab"
    accessibility: "include in tab accessible name: 'Messages, 3 unread'"

  mobile_adaptations:
    responsive_strategies:
      horizontal_scroll:
        description: "tabs in single row, scroll horizontally"
        pros: "maintains tab UI, familiar pattern"
        cons: "hidden tabs less discoverable"
        implementation: "scroll-snap for snap to tabs"

      dropdown_select:
        description: "tabs become dropdown menu"
        pros: "space-efficient"
        cons: "less scannable, extra tap to view options"

      stacked_vertical:
        description: "tabs stack vertically"
        pros: "all visible without scroll"
        cons: "takes more vertical space"

      accordion:
        description: "tabs become accordion panels"
        pros: "can view multiple sections simultaneously"
        cons: "different mental model from tabs"

    recommendation: "strategy with rationale based on tab count and content"

    mobile_specific:
      swipe_gestures: "enable swipe between tabs if appropriate"
      gesture_hint: "show subtle animation hint on first visit"
      active_indicator: "ensure active tab visible in scroll area"

  special_patterns:
    overflow_tabs:
      scenario: "more tabs than fit in viewport"
      solution: "horizontal scroll / 'More' dropdown / priority-based hiding"
      example: "Show 5 tabs + '···' More menu with remaining 3"

    nested_tabs:
      usage: "tabs within tabs (use sparingly)"
      recommendation: "avoid if possible - creates confusion"
      alternative: "use tabs + subtabs as sections within content"

    vertical_tabs:
      use_case: "admin panels, settings with many categories"
      layout: "tabs on left, content on right"
      mobile: "convert to horizontal tabs or accordion"

    segmented_controls:
      use_case: "toggle between 2-3 views (List/Grid, Day/Week/Month)"
      styling: "connected buttons, iOS-style appearance"
      behavior: "radio button group visually styled as tabs"

  accessibility_implementation:
    semantic_html:
      structure: "div role='tablist', button role='tab', div role='tabpanel'"
      landmark: "optional nav role for navigation tabs"
      heading: "use h2 or h3 for tab labels if semantically appropriate"

    aria_attributes:
      tablist:
        role: "'tablist'"
        aria_label: "descriptive name for tab group"

      tab:
        role: "'tab'"
        aria_selected: "true/false"
        aria_controls: "ID of associated tabpanel"
        tabindex: "0 for active tab, -1 for inactive tabs"

      tabpanel:
        role: "'tabpanel'"
        aria_labelledby: "ID of associated tab"
        tabindex: "0 if content not focusable"
        hidden: "true for inactive panels"

    keyboard_navigation:
      tab_key: "Tab moves focus into tab list, then into content"
      arrow_keys: "Left/Right (or Up/Down for vertical) to navigate between tabs"
      home_end: "Home to first tab, End to last tab"
      enter_space: "activate focused tab (optional - some patterns auto-activate)"

      roving_tabindex: "only active tab in tab order, arrow keys move selection"

    screen_reader_support:
      tab_announcement: "'Overview tab, 1 of 4, selected'"
      panel_announcement: "panel associated with tab announced"
      notification_badges: "include count/status in accessible name"

    focus_management:
      on_tab_activation: "focus remains on tab button or moves to panel based on pattern"
      visible_focus: "2px outline minimum, 3:1 contrast"
      focus_order: "logical flow through tabs then content"

    color_contrast:
      active_tab: "4.5:1 minimum for text"
      inactive_tab: "4.5:1 minimum for text"
      hover_state: "sufficient contrast for all states"
      non_text_indicators: "3:1 contrast for active underline/borders"

  url_state_management:
    hash_based:
      pattern: "example.com/page#tab-2"
      pros: "simple, works without server, shareable"
      cons: "affects browser history, may conflict with anchors"

    query_param:
      pattern: "example.com/page?tab=features"
      pros: "clean, doesn't interfere with anchors, shareable"
      cons: "requires URL parsing"

    recommendation: "use query params for shareable state, hash for ephemeral"

    back_button_behavior:
      option_1: "back button returns to previous tab"
      option_2: "back button goes to previous page, ignoring tab changes"
      recommendation: "option 2 for most cases - tab changes shouldn't create history entries"

  analytics_tracking:
    events_to_track:
      - event: "tab_click"
        properties: ["tab_label", "tab_position", "previous_tab", "time_on_previous_tab"]

      - event: "tab_engagement"
        properties: ["tab_label", "time_in_tab", "interactions_count"]

    insights:
      popular_tabs: "which tabs accessed most frequently"
      tab_sequences: "common paths through tabs"
      abandoned_tabs: "tabs with low engagement time"
      default_effectiveness: "do users stay on default tab or switch immediately"
```

=== TAB LABEL BEST PRACTICES ===

**Clarity Guidelines**:
- Use concrete, specific labels: "Shipping" not "Info"
- Avoid ambiguous abbreviations: "Documentation" not "Docs" (unless very clear)
- Match user mental models: "Account Settings" not "Configuration"
- Be consistent: don't mix "Details" and "Information" for similar concepts

**Length Management**:
- Desktop: 8-15 characters ideal, maintains visual balance
- Mobile: 6-12 characters, prevents wrapping on small screens
- Truncation: use only as last resort, with tooltip showing full label
- Multi-line: avoid - maintain single-line tabs

**Parallel Structure**:
- ✓ All nouns: "Overview", "Features", "Pricing", "Reviews"
- ✓ All verbs: "Browse", "Compare", "Purchase", "Track"
- ✗ Mixed: "Overview", "Browse Products", "Pricing", "Buy Now"

**Icon + Text Combinations**:
- Use icons to enhance recognition, not replace text
- Icons should be immediately recognizable
- Maintain consistency: same icon style across all tabs
- Consider icon-only for space-constrained interfaces (with accessible labels)

=== EXAMPLES ===

**Example 1: Product Page Tabs**
- content_type: "product information"
- interface_context: "e-commerce product detail page"
- tab_count: "5 tabs"
- content_relationship: "complementary - different aspects of product"
- default_tab: "Overview (first tab)"
- tab_style: "underline tabs"

**Output**:
```yaml
tab_navigation:
  tab_structure:
    tabs:
      - label: "Overview"
        character_count: 8
        content_description: "Product highlights, key features, main image gallery"
        priority: "primary"
        icon: null
        default_selected: true

        label_rationale: "Broad, recognizable term for primary product information"

      - label: "Specifications"
        character_count: 14
        content_description: "Technical specs, dimensions, materials, compatibility"
        priority: "primary"
        alternative_labels: ["Specs", "Tech Specs", "Details"]
        label_rationale: "'Specifications' is explicit and expected on product pages"
        mobile_label: "Specs"

      - label: "Reviews"
        character_count: 7
        content_description: "Customer reviews, ratings, verified purchases"
        priority: "primary"
        badge: "count of total reviews (e.g., '243')"
        label_rationale: "Standard e-commerce terminology, immediately understood"

      - label: "Q&A"
        character_count: 3
        content_description: "Customer questions and answers about product"
        priority: "secondary"
        badge: "count of questions (e.g., '15')"
        alternative_labels: ["Questions", "Questions & Answers", "Community"]
        label_rationale: "Concise acronym, widely recognized"

      - label: "Shipping"
        character_count: 8
        content_description: "Delivery options, costs, return policy"
        priority: "secondary"
        alternative_labels: ["Delivery", "Shipping & Returns"]
        label_rationale: "Clear, specific to logistics information"

  label_guidelines:
    parallel_structure: "All nouns, consistent grammatical pattern"
    distinctive_labels: "Each tab clearly different, no overlap"

  visual_design:
    active_state:
      indicators:
        - type: "underline"
          specs: "3px solid line, brand color (blue)"
        - type: "color"
          specs: "text color darkens to nearly black"

      recommended_approach: "Underline + color change for clear indication"

    inactive_state:
      styling: "Medium gray text (#6B7280), no underline"
      hover_state: "Text darkens to dark gray, 2px underline appears"

    spacing:
      between_tabs: "24px horizontal gap"
      padding_horizontal: "16px within each tab"
      padding_vertical: "14px"

  notification_badges:
    badge_types:
      count: "Reviews (243) and Q&A (15) show counts"
    positioning: "right side of tab label, in parentheses or small badge"
    accessibility: "Tab reads as 'Reviews, 243 reviews' for screen readers"

  mobile_adaptations:
    responsive_strategies:
      horizontal_scroll:
        description: "5 tabs in scrollable row"
        implementation: "scroll-snap, active tab scrolls into view"

    mobile_specific:
      swipe_gestures: "enable swipe left/right between tabs"
      active_indicator: "ensure active tab visible, scroll if needed"

  analytics_tracking:
    events_to_track:
      - event: "product_tab_click"
        properties: ["tab_label", "product_id", "previous_tab", "time_on_previous"]

    insights:
      popular_tabs: "Reviews and Specifications most viewed"
      review_engagement: "users clicking Reviews tab = high purchase intent signal"
```

**Example 2: Account Settings Dashboard**
- content_type: "user settings and preferences"
- interface_context: "account dashboard in SaaS application"
- tab_count: "6 tabs"
- content_relationship: "mutually exclusive settings categories"
- default_tab: "Profile (most frequently accessed)"
- tab_style: "vertical tabs (sidebar navigation)"

**Output**:
```yaml
tab_navigation:
  tab_structure:
    tabs:
      - label: "Profile"
        character_count: 7
        content_description: "Name, email, photo, bio, public profile settings"
        priority: "primary"
        icon: "user-circle"
        default_selected: true
        label_rationale: "Most accessed section, personal information focus"

      - label: "Security"
        character_count: 8
        content_description: "Password, two-factor auth, sessions, login history"
        priority: "primary"
        icon: "shield"
        label_rationale: "Critical security settings grouped under recognizable term"

      - label: "Notifications"
        character_count: 13
        content_description: "Email, push, in-app notification preferences"
        priority: "primary"
        icon: "bell"
        badge: "dot indicator if new notification types available"

      - label: "Privacy"
        character_count: 7
        content_description: "Data sharing, visibility settings, blocking"
        priority: "secondary"
        icon: "lock"

      - label: "Billing"
        character_count: 7
        content_description: "Subscription, payment methods, invoices"
        priority: "primary"
        icon: "credit-card"
        label_rationale: "Financial information isolated for security and clarity"

      - label: "Integrations"
        character_count: 12
        content_description: "Connected apps, API keys, webhooks"
        priority: "secondary"
        icon: "puzzle"

  label_guidelines:
    parallel_structure: "All nouns representing settings categories"
    icon_usage:
      when_to_include: "all tabs have icons for visual scanning"
      icon_position: "left of text in vertical layout"
      accessibility: "icons supplement text, both always visible"

  visual_design:
    active_state:
      indicators:
        - type: "background"
          specs: "light blue background fill"
        - type: "border"
          specs: "3px left border in brand blue"
        - type: "color"
          specs: "text and icon in brand blue"

      recommended_approach: "Background + left border + color for strong indication in vertical layout"

    inactive_state:
      styling: "Dark gray text and icon, no background"
      hover_state: "Light gray background, text darkens slightly"

  interaction_patterns:
    selection_behavior:
      url_sync: true
      pattern: "/settings?tab=security"
      back_button_behavior: "back goes to previous page, not previous tab"

    content_transition:
      instant: true
      rationale: "Settings pages benefit from instant feedback"

  mobile_adaptations:
    responsive_strategies:
      accordion:
        description: "Vertical tabs become accordion on mobile"
        rationale: "Maintains vertical orientation, all categories visible"

    mobile_specific:
      converted_pattern: "Tap to expand sections in accordion, no traditional tab UI"

  accessibility_implementation:
    keyboard_navigation:
      arrow_keys: "Up/Down arrows navigate vertical tab list"
      home_end: "Home to Profile, End to Integrations"

  analytics_tracking:
    insights:
      popular_tabs: "Profile and Billing most accessed"
      security_engagement: "track how many users enable 2FA after visiting Security tab"
```

**Example 3: Data Visualization Dashboard**
- content_type: "different views of same dataset"
- interface_context: "analytics dashboard"
- tab_count: "4 tabs"
- content_relationship: "different visualizations of same data"
- default_tab: "Table View (comprehensive)"
- tab_style: "segmented control (pill tabs)"

**Output**:
```yaml
tab_navigation:
  tab_structure:
    tabs:
      - label: "Table"
        character_count: 5
        content_description: "Data grid with sortable columns, filters"
        priority: "primary"
        icon: "table"
        default_selected: true
        label_rationale: "Comprehensive view, good default for data analysis"

      - label: "Chart"
        character_count: 5
        content_description: "Line/bar chart visualizations"
        priority: "primary"
        icon: "chart-line"
        label_rationale: "Visual representation for trend analysis"

      - label: "Map"
        character_count: 3
        content_description: "Geographic visualization of data"
        priority: "secondary"
        icon: "map-pin"
        label_rationale: "Spatial view for location-based data"

      - label: "Cards"
        character_count: 5
        content_description: "Card-based summary view"
        priority: "secondary"
        icon: "grid"
        label_rationale: "Scannable overview of individual records"

  label_guidelines:
    parallel_structure: "All nouns describing view type"
    icon_usage:
      when_to_include: "all tabs have icons"
      icon_position: "above text (vertical stack within tab)"
      accessibility: "icons enhance recognition of view types"

  visual_design:
    active_state:
      indicators:
        - type: "background"
          specs: "solid brand color fill"
        - type: "color"
          specs: "white text and icon"

      recommended_approach: "Segmented control style - filled background for active, outline for inactive"

    inactive_state:
      styling: "Transparent background, gray text and icon, gray border"
      hover_state: "Light gray background"

    spacing:
      between_tabs: "0 - connected segmented control"
      padding_horizontal: "20px"
      padding_vertical: "12px"

  interaction_patterns:
    selection_behavior:
      url_sync: true
      pattern: "/dashboard?view=chart"

    content_transition:
      fade: "200ms cross-fade between views"
      rationale: "Smooth transition for different data visualizations"

    loading_states:
      lazy_load: true
      loading_ui: "skeleton screen in chart/map views"

  special_patterns:
    segmented_controls:
      styling: "connected buttons with rounded corners on outer edges"
      behavior: "radio button group behavior, exactly one selected"

  mobile_adaptations:
    responsive_strategies:
      horizontal_scroll:
        description: "segmented control maintains appearance, scrolls horizontally if needed"

  analytics_tracking:
    insights:
      preferred_views: "which visualizations used most frequently"
      view_sequences: "do users compare views (Table→Chart pattern)"
      mobile_preferences: "different view preferences on mobile vs desktop"
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Use proper ARIA tab roles (role="tablist", role="tab", role="tabpanel"). Implement roving tabindex for keyboard navigation. Ensure visible focus indicators (minimum 2px outline, 3:1 contrast). Support arrow key navigation between tabs. Use aria-selected to indicate active tab. Associate tabs with panels using aria-controls and aria-labelledby. Maintain 4.5:1 color contrast for all tab states. Make touch targets minimum 44x44px on mobile. Hide inactive panels properly (display:none or aria-hidden). Ensure screen readers announce tab position ("2 of 5") and selection state. Include notification counts in accessible names ("Messages, 3 unread"). Test with keyboard-only and screen reader navigation.

**Psychological Principles**: Chunking (organize complex information into manageable sections). Progressive disclosure (hide complexity, reveal on demand). Recognition over recall (visible tabs vs. hidden navigation). Fitts's Law (appropriately sized touch targets). Serial position effect (important tabs leftmost/topmost). Gestalt proximity (tabs visually grouped with content). Consistency principle (tab pattern recognized across interfaces). Confirmation bias (users stay on default tab if it meets needs). Cognitive fluency (clear labels reduce processing time). Visual hierarchy (active state clearly distinguished). Miller's Law (limit tabs to 5-7 for optimal cognitive processing).

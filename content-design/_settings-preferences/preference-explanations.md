## Preference Explanation Design v1.0

**Purpose**: Create clear, helpful explanations that help users understand preference options, explain the impact of different choices, guide decision-making without overwhelming users, and build confidence in customizing their experience to match their needs and workflows.

---

**PROMPT:**

You are designing preference explanations for {{platform_type}} serving {{user_type}}. Create explanatory text that clarifies {{preference_type}}, communicates {{choice_impact}}, supports {{decision_making}}, and maintains {{brand_voice}}.

=== PREFERENCE CONTEXT ===
Platform type: {{platform_type}} (web app/mobile app/SaaS/enterprise software/consumer product)
User type: {{user_type}} (general consumers/business users/power users/admins/mixed)
Preference type: {{preference_type}} (display/behavior/workflow/communication/privacy)
Choice impact: {{choice_impact}} (immediate/requires reload/affects team/permanent/reversible)
Decision making: {{decision_making}} (simple binary/multiple options/custom values/conditional)
Technical complexity: {{complexity}} (simple/moderate/complex/expert-level)

=== EXPLANATION STRATEGY ===
Explanation depth: {{depth}} (minimal/standard/detailed/expert)
Guidance level: {{guidance}} (descriptive/prescriptive/recommendation/none)
Default indication: {{default_show}} (show recommended/show current/hide default)
Help resources: {{help}} (none/tooltips/links/examples/tutorials)
Preview capability: {{preview}} (live preview/before-after/none)

=== OUTPUT REQUIREMENTS ===

```yaml
preference_explanations:
  explanation_principles:
    explain_the_what:
      guideline: "describe what this preference controls"
      example: "Theme controls the color scheme of the interface"

    explain_the_why:
      guideline: "help users understand when to choose each option"
      example: "Dark mode reduces eye strain in low-light environments"

    explain_the_impact:
      guideline: "clarify what changes when they adjust this"
      example: "Changing language will reload the app"

    provide_context:
      guideline: "show current value and default if different"
      example: "Current: Auto (detects system preference) | Default: Light"

  explanation_structures:
    simple_preference:
      components:
        - preference_name: "clear, descriptive title"
        - current_value: "what's currently selected"
        - description: "one sentence explaining purpose"

      example:
        name: "Language"
        current: "English (US)"
        description: "Choose the language for menus and messages"

    standard_preference:
      components:
        - preference_name: "clear title"
        - description: "2-3 sentences explaining purpose and impact"
        - options: "available choices with brief descriptions"
        - current_value: "what's selected"
        - default_indicator: "if not default"

      example:
        name: "Email frequency"
        description: "Control how often you receive email notifications. You can always check missed notifications in the app."
        options:
          - value: "real_time"
            label: "Real-time"
            description: "Receive emails immediately as events happen"
          - value: "hourly"
            label: "Hourly digest"
            description: "One email per hour with all updates"
          - value: "daily"
            label: "Daily digest"
            description: "One email each morning with yesterday's activity"
          - value: "never"
            label: "Never"
            description: "No email notifications (app notifications only)"
        current: "hourly"
        default: "real_time"

    complex_preference:
      components:
        - preference_name: "descriptive title"
        - overview: "what this controls and why it matters"
        - detailed_options: "each option with full explanation"
        - recommendations: "when to use each option"
        - impact_warning: "if changes have significant effects"
        - learn_more: "link to documentation"

      example:
        name: "Workspace visibility"
        overview: "Controls who can find and join your workspace. This affects your entire team."
        options:
          - value: "public"
            label: "Public"
            description: "Anyone can find your workspace and request to join"
            use_when: "Open communities, public projects, marketing teams"
            impact: "Workspace appears in search results"

          - value: "unlisted"
            label: "Unlisted"
            description: "People need the invite link to find your workspace"
            use_when: "Client projects, private teams, selective membership"
            impact: "Not searchable, but anyone with link can request access"

          - value: "private"
            label: "Private"
            description: "Only admins can invite new members"
            use_when: "Confidential work, sensitive data, strict access control"
            impact: "Maximum privacy, invitation-only"
        current: "unlisted"
        warning: "Changing this affects all workspace members"
        learn_more: "/help/workspace-privacy"

  option_descriptions:
    brief_option:
      pattern: "label only, meaning is obvious"
      examples:
        - "Light"
        - "Dark"
        - "Auto"
      use_when: "self-explanatory choices"

    label_plus_description:
      pattern: "label + one-line explanation"
      character_limit: "40-60 characters for description"

      examples:
        - label: "Compact"
          description: "Show more content with smaller spacing"

        - label: "Comfortable"
          description: "Balanced layout with moderate spacing"

        - label: "Spacious"
          description: "Maximum readability with generous spacing"

    detailed_option:
      pattern: "label + description + when to use"
      use_when: "complex preferences, significant impact"

      examples:
        - label: "Aggressive"
          description: "Delete all cache data on exit"
          use_when: "Maximum privacy, shared computers"
          tradeoff: "Slower startup time"

        - label: "Balanced"
          description: "Clear cache weekly"
          use_when: "Most users"
          tradeoff: "Good balance of speed and storage"

        - label: "Minimal"
          description: "Keep cache indefinitely"
          use_when: "Fast performance is priority"
          tradeoff: "Uses more storage space"

  default_recommendations:
    show_default:
      indicator: "badge, lighter text, or '(Default)' label"

      examples:
        - "Auto (Default)"
        - "Medium • Recommended"
        - "Standard (Default for new users)"

    explain_why_default:
      pattern: "why this is recommended"

      examples:
        - "Auto: Matches your system settings (Recommended)"
        - "Medium: Best for most users"
        - "Balanced: Optimized for performance and storage"

    changed_from_default:
      indicator: "show user has customized"

      examples:
        - "Custom" badge
        - "Modified" indicator
        - "Different from default" note

  impact_communication:
    immediate_change:
      pattern: "change applies instantly"
      indicator: "live preview or 'Changes immediately'"

      example:
        name: "Theme"
        impact: "Changes immediately"
        preview: "live color update"

    requires_action:
      pattern: "explain what's needed to apply"

      examples:
        - "Requires reload: Changes take effect after refreshing the page"
        - "Requires restart: Close and reopen the app to apply"
        - "Applies on next login: You'll see changes next time you sign in"

    affects_others:
      pattern: "clearly state who else is impacted"
      warning_level: "moderate to high"

      examples:
        - "Team setting: Affects all workspace members"
        - "Admin only: Only workspace admins can change this"
        - "Global: Applies to all projects in this workspace"

    irreversible:
      pattern: "strong warning for permanent changes"
      warning_level: "high"
      confirmation: "require explicit confirmation"

      example:
        name: "Delete old messages"
        impact: "Permanently deletes messages older than 90 days"
        warning: "This cannot be undone"
        confirmation: "Type DELETE to confirm"

  contextual_help:
    inline_description:
      placement: "directly below preference name"
      length: "1-2 sentences, 60-120 characters"

      examples:
        - "Choose when to receive notifications. You can customize individual notification types below."
        - "Your timezone affects how dates and times are displayed throughout the app."

    tooltip:
      trigger: "info icon (ⓘ) next to preference name"
      content: "additional context, 80-150 characters"
      use_when: "supplementary information, not critical"

      examples:
        - name: "Auto-archive"
          tooltip: "Moves inactive conversations to archive after 30 days of no activity"

        - name: "Smart compose"
          tooltip: "Uses AI to suggest message completions as you type"

    expandable_section:
      trigger: "'Learn more' or 'Show details' link"
      content: "2-4 sentences, may include examples"
      use_when: "complex preferences, technical details"

      example:
        name: "Data retention"
        inline: "Control how long we store your data"
        expandable: "By default, we keep your data indefinitely. You can set automatic deletion for old content. Deleted data is permanently removed after 30 days and cannot be recovered. This helps comply with data privacy regulations."

    link_to_documentation:
      pattern: "external help article"
      text: "Learn more about [preference name]"
      use_when: "complex features, compliance, legal"

  preview_and_examples:
    live_preview:
      pattern: "show real-time changes"
      use_when: "visual preferences"

      examples:
        - "Theme: background changes as you select"
        - "Text size: sample text updates"
        - "Layout: preview pane shows new arrangement"

    before_after:
      pattern: "side-by-side comparison"
      use_when: "significant visual changes"
      labels: "Current | Preview"

    example_values:
      pattern: "show sample of what value means"

      examples:
        - name: "Date format"
          options:
            - value: "mdy"
              label: "MM/DD/YYYY"
              example: "12/31/2024"
            - value: "dmy"
              label: "DD/MM/YYYY"
              example: "31/12/2024"
            - value: "ymd"
              label: "YYYY-MM-DD"
              example: "2024-12-31"

  conditional_preferences:
    dependent_preferences:
      pattern: "some preferences enable/disable others"
      visual: "indent or gray out unavailable options"

      example:
        parent: "Enable notifications (OFF)"
        children_disabled:
          - "Sound (grayed out)"
          - "Badge count (grayed out)"
          - "Preview content (grayed out)"
        message: "Enable notifications to customize these settings"

    mutually_exclusive:
      pattern: "choosing one disables others"
      explanation: "explain the relationship"

      example:
        name: "Sync strategy"
        note: "Choose one syncing method"
        options:
          - "Manual: Upload files when you choose"
          - "Automatic: Sync continuously (disables manual)"
          - "Scheduled: Sync every hour (disables manual)"

  accessibility_considerations:
    semantic_structure:
      fieldset: "group related preferences"
      legend: "category name"
      labels: "associate with inputs"
      descriptions: "use aria-describedby"

    clear_relationships:
      parent_child: "visually and semantically connected"
      grouping: "related options grouped"

    keyboard_navigation:
      tab_order: "logical progression"
      radio_arrows: "arrow keys to move between options"

    screen_reader_support:
      announce_options: "number of options, current selection"
      announce_impact: "include impact in description"
      announce_defaults: "indicate recommended options"

  mobile_adaptations:
    compact_descriptions:
      guideline: "shorter text on mobile"
      pattern: "use tooltips for detail"

    vertical_options:
      layout: "stack options vertically"
      spacing: "adequate tap targets (44x44px)"

    progressive_disclosure:
      initial: "show common options"
      advanced: "link to 'Advanced preferences'"

  writing_best_practices:
    use_plain_language:
      avoid: "Configuration parameters for notification dispatch"
      better: "When to send notifications"

    focus_on_benefits:
      avoid: "Enable dark mode"
      better: "Dark mode: Easier on eyes in low light"

    be_specific:
      vague: "Optimize performance"
      specific: "Reduce animations to save battery"

    provide_guidance:
      neutral: "Choose notification frequency"
      helpful: "Choose notification frequency. Most people prefer hourly digests."

    avoid_technical_jargon:
      jargon: "TTL for cached objects"
      plain: "How long to keep downloaded files"
```

=== PREFERENCE EXPLANATION GUIDELINES ===

**Clarity First**:
- Explain what changes and why it matters
- Use plain language, avoid technical terms
- Provide examples when helpful
- Show current value and default

**Help Users Decide**:
- Explain when to use each option
- Show trade-offs (speed vs storage, privacy vs convenience)
- Recommend defaults for most users
- Allow advanced users to customize

**Show Impact**:
- When do changes take effect?
- Who is affected (just me, my team, everyone)?
- Is it reversible?
- Are there consequences?

**Visual Hierarchy**:
- Preference name (bold, prominent)
- Brief description (one line)
- Options (clear labels + descriptions)
- Additional help (expandable, links)

**Mobile Considerations**:
- Shorter descriptions
- Vertical layout for options
- Tooltips for detailed explanations
- Adequate touch targets

=== EXAMPLES ===

**Example 1: Display Preferences for Productivity App**
- platform_type: "web application, desktop-focused"
- user_type: "business users, mixed technical levels"
- preference_type: "display and layout customization"
- choice_impact: "immediate visual changes"

**Output**:
```yaml
display_preferences:
  - name: "Sidebar width"
    description: "Adjust the width of the navigation sidebar"
    current_value: "240px"
    default: "240px"
    impact: "immediate"

    options:
      - value: "narrow"
        label: "Narrow (180px)"
        description: "More space for content"
        use_when: "Smaller screens, focus on main content"

      - value: "standard"
        label: "Standard (240px)"
        description: "Balanced layout"
        use_when: "Most users (Recommended)"
        default: true

      - value: "wide"
        label: "Wide (320px)"
        description: "Easier to read long project names"
        use_when: "Large screens, many nested folders"

    preview: "live"

  - name: "Density"
    description: "Control spacing and information density"
    current_value: "comfortable"
    default: "comfortable"
    impact: "immediate"

    options:
      - value: "compact"
        label: "Compact"
        description: "See more items with minimal spacing"
        use_when: "Large datasets, lots of scrolling"
        preview_text: "Shows ~25 items per screen"

      - value: "comfortable"
        label: "Comfortable"
        description: "Balanced readability and efficiency"
        use_when: "Most users (Recommended)"
        default: true
        preview_text: "Shows ~15 items per screen"

      - value: "spacious"
        label: "Spacious"
        description: "Maximum readability with generous spacing"
        use_when: "Accessibility needs, larger text"
        preview_text: "Shows ~10 items per screen"

    preview: "live"
    live_preview_note: "Preview updates as you select"
```

**Example 2: Privacy Preferences for Social Platform**
- platform_type: "mobile social app"
- user_type: "general consumers, privacy-conscious"
- preference_type: "privacy and data sharing controls"
- choice_impact: "affects visibility and data collection"

**Output**:
```yaml
privacy_preferences:
  - name: "Profile visibility"
    description: "Control who can see your profile and posts"
    current_value: "friends"
    default: "friends"
    impact: "immediate"
    affects: "your profile only"

    options:
      - value: "public"
        label: "Public"
        description: "Anyone can see your profile and posts"
        visibility:
          - "Appears in search results"
          - "Visible to non-followers"
          - "Can be shared outside the app"
        use_when: "Content creators, public figures, businesses"

      - value: "friends"
        label: "Friends only"
        description: "Only people you've connected with can see your content"
        visibility:
          - "Not in search results"
          - "Only friends see posts"
          - "Profile link still shareable"
        use_when: "Most users (Recommended)"
        default: true

      - value: "private"
        label: "Private"
        description: "You approve each person who wants to see your content"
        visibility:
          - "Not in search results"
          - "Require approval to follow"
          - "Maximum privacy"
        use_when: "Maximum privacy, personal accounts"

    learn_more: "/help/privacy-settings"

  - name: "Data collection"
    description: "Choose what data we collect to improve your experience"
    current_value: "essential"
    default: "standard"
    impact: "immediate"

    options:
      - value: "full"
        label: "Full personalization"
        description: "Use all my activity for recommendations"
        data_collected:
          - "Posts you view and interact with"
          - "Time spent on different content"
          - "Location data for local recommendations"
          - "Device information"
        benefit: "Most personalized experience"

      - value: "standard"
        label: "Standard"
        description: "Basic personalization without location tracking"
        data_collected:
          - "Posts you interact with"
          - "Basic usage patterns"
          - "Device information"
        benefit: "Good personalization, less data sharing"
        default: true

      - value: "essential"
        label: "Essential only"
        description: "Minimum data needed for app to function"
        data_collected:
          - "Account information"
          - "Basic security logs"
        benefit: "Maximum privacy"
        tradeoff: "Limited personalization"

    privacy_policy: "/privacy"
    data_export: "Download your data anytime"
```

**Example 3: Workflow Preferences for Development Tool**
- platform_type: "developer IDE, desktop application"
- user_type: "developers, technical users"
- preference_type: "editor behavior and workflow"
- choice_impact: "affects coding experience"

**Output**:
```yaml
workflow_preferences:
  - name: "Auto-save"
    description: "Control when files are automatically saved"
    current_value: "on_focus_change"
    default: "on_focus_change"
    impact: "immediate"

    options:
      - value: "always"
        label: "Always"
        description: "Save every 1 second while typing"
        pros: "Never lose work"
        cons: "May trigger frequent builds, high disk activity"
        use_when: "Unstable systems, frequent crashes"

      - value: "on_focus_change"
        label: "On focus change"
        description: "Save when switching files or applications"
        pros: "Automatic without constant disk writes"
        cons: "May lose work if app crashes while editing"
        use_when: "Most developers (Recommended)"
        default: true

      - value: "manual"
        label: "Manual only"
        description: "Save only when you press Cmd+S"
        pros: "Full control over when files are saved"
        cons: "Must remember to save"
        use_when: "Experienced users, specific workflows"

    related_settings:
      - "Auto-save interval (if Always selected)"
      - "Backup unsaved changes"

  - name: "Code formatting"
    description: "When to automatically format code"
    current_value: "on_save"
    default: "on_save"
    impact: "immediate"
    requires: "Formatter configured in workspace settings"

    options:
      - value: "on_type"
        label: "Format as you type"
        description: "Automatically format each line as you finish typing"
        pros: "Code always formatted, immediate feedback"
        cons: "Can be distracting, may interfere with typing"
        use_when: "Learning code style, strict formatting requirements"

      - value: "on_save"
        label: "Format on save"
        description: "Format entire file when you save"
        pros: "Non-intrusive, formats once when done"
        cons: "Unformatted code while editing"
        use_when: "Most developers (Recommended)"
        default: true

      - value: "manual"
        label: "Manual only"
        description: "Format only when you run 'Format Document'"
        pros: "Complete control"
        cons: "Must remember to format"
        use_when: "Working in mixed-format codebases"

    keyboard_shortcut: "Cmd+Shift+F (manual format)"
    learn_more: "/docs/formatting"
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Use semantic HTML: <fieldset> for preference groups, <legend> for group names, <label> for each option. Provide accessible descriptions using aria-describedby. Ensure keyboard navigation with Tab to move between preferences, arrow keys for radio button options. Provide visible focus indicators (2px outline, 3:1 contrast). Maintain 4.5:1 text contrast for all descriptions. Group related preferences logically. Announce current values and defaults to screen readers. Use aria-live for preview changes. Ensure form controls have accessible names. Support browser zoom up to 200%. Test with screen readers to verify option descriptions are clear.

**Psychological Principles**: Decision fatigue (provide clear defaults to reduce choices). Analysis paralysis (explain trade-offs to aid decisions). Loss aversion (preview negative impacts before changing). Anchoring effect (defaults influence final choices). Recognition over recall (show current values). Cognitive load reduction (progressive disclosure of details). Status quo bias (most users keep defaults, explain why changing helps). Mental models (align options with user expectations). Satisficing (make "good enough" choice obvious). Framing effect (how options are described influences choice). Social proof (mention what "most users" choose).

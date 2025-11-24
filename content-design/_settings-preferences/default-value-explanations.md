## Default Value Explanations Design v1.0

**Purpose**: Create clear, helpful explanations for default setting values that help users understand why specific defaults are chosen, build confidence in using recommended settings, reduce decision fatigue through smart defaults, and explain the reasoning behind default choices to support informed user customization.

---

**PROMPT:**

You are designing default value explanations for {{platform_type}} serving {{user_type}}. Create explanations that justify {{default_choices}}, support {{user_understanding}}, reduce {{decision_complexity}}, and maintain {{brand_voice}}.

=== DEFAULT VALUE CONTEXT ===
Platform type: {{platform_type}} (web app/mobile app/SaaS/enterprise software/consumer product)
User type: {{user_type}} (general consumers/business users/technical users/mixed levels)
Default choices: {{default_choices}} (privacy-protective/performance-optimized/user-friendly/balanced)
User understanding: {{user_understanding}} (novice/intermediate/expert/varied)
Decision complexity: {{decision_complexity}} (simple/moderate/complex/highly-technical)
Customization level: {{customization}} (minimal/moderate/extensive/power-user)

=== DEFAULT EXPLANATION STRATEGY ===
Explanation depth: {{depth}} (label-only/brief/detailed/technical)
Justification approach: {{justification}} (user-benefit/best-practice/data-driven/regulatory)
Change encouragement: {{change_encouragement}} (discourage/neutral/encourage/promote)
Indicator visibility: {{visibility}} (subtle/moderate/prominent/always-visible)
Reset availability: {{reset}} (per-setting/category/global/not-available)

=== OUTPUT REQUIREMENTS ===

```yaml
default_value_explanations:
  default_indication_patterns:
    visual_indicators:
      badge_label:
        pattern: "Default" badge next to option
        examples:
          - "Auto (Default)"
          - "Medium • Default"
          - "Recommended"

      styling:
        pattern: "Different visual treatment"
        examples:
          - "Default option has blue checkmark"
          - "Default row has subtle background"
          - "Default text slightly bolder"

      reset_button:
        pattern: "Show 'Reset to default' when changed"
        visibility: "Only when user has customized"
        placement: "Near setting control"

    textual_indicators:
      inline_annotation:
        examples:
          - "Auto (matches your system)"
          - "Medium (recommended for most users)"
          - "Enabled (required for security)"

      description_callout:
        examples:
          - "Default: We recommend this setting for best performance"
          - "This is the default setting, optimized for your device"

      changed_indicator:
        examples:
          - "Custom" badge when user has changed
          - "Modified from default" note
          - "You've changed this from: Auto"

  explanation_structures:
    minimal_default:
      components:
        - default_indicator: "visual marker"
        - no_explanation: "self-explanatory choice"

      example:
        setting: "Theme"
        options:
          - "Light"
          - "Dark"
          - "Auto (Default)" # matches system
        explanation: "none needed, obvious choice"

    standard_default:
      components:
        - default_indicator: "visual or text marker"
        - brief_explanation: "why this is default"

      example:
        setting: "Notification frequency"
        options:
          - value: "real_time"
            label: "Real-time"
          - value: "hourly"
            label: "Hourly digest (Recommended)"
            explanation: "Reduces interruptions while keeping you informed"
            default: true
          - value: "daily"
            label: "Daily digest"

    detailed_default:
      components:
        - default_indicator: "clear marking"
        - explanation: "why this default"
        - benefits: "what user gains"
        - alternatives: "when to choose differently"

      example:
        setting: "Auto-save interval"
        default_value: "2 minutes"
        explanation: "Saves your work every 2 minutes"

        why_this_default:
          - "Balances data protection with performance"
          - "Prevents loss of work without constant disk writes"
          - "Optimized based on usage patterns of 100,000+ users"

        alternatives:
          - value: "30 seconds"
            when: "Working on critical documents"
            tradeoff: "More frequent saving, slightly higher resource use"

          - value: "5 minutes"
            when: "Stable connection, fast device"
            tradeoff: "Better performance, slightly higher risk"

  default_choice_justifications:
    user_benefit:
      pattern: "Explain how default helps user"

      examples:
        - setting: "Auto-update"
          default: "Enabled"
          justification: "Keeps you secure with the latest security patches and features"

        - setting: "Data compression"
          default: "Auto"
          justification: "Reduces data usage on cellular connections while maintaining quality on WiFi"

        - setting: "Email frequency"
          default: "Daily digest"
          justification: "Reduces email clutter while ensuring you don't miss important updates"

    best_practice:
      pattern: "Based on industry standards or expert recommendations"

      examples:
        - setting: "Password requirements"
          default: "Medium strength"
          justification: "Recommended by security experts: balances security with memorability"

        - setting: "Session timeout"
          default: "30 minutes"
          justification: "Industry standard for secure applications"

        - setting: "Backup frequency"
          default: "Daily"
          justification: "Best practice: maximizes protection without excessive storage use"

    data_driven:
      pattern: "Based on actual usage data"

      examples:
        - setting: "Sidebar width"
          default: "240px"
          justification: "Most users (78%) prefer this width for optimal readability and workspace"

        - setting: "Items per page"
          default: "25"
          justification: "Analysis shows this provides best balance of scrolling vs. loading"

        - setting: "Notification bundling"
          default: "Enabled"
          justification: "Users with bundling enabled are 40% less likely to disable notifications"

    regulatory_compliance:
      pattern: "Required by law or regulation"

      examples:
        - setting: "Cookie consent"
          default: "Essential only"
          justification: "Privacy-first default, compliant with GDPR"

        - setting: "Data retention"
          default: "90 days"
          justification: "Balances functionality with GDPR data minimization principles"

        - setting: "Two-factor authentication"
          default: "Required"
          justification: "Mandatory for compliance with SOC 2 and industry regulations"

    privacy_protective:
      pattern: "Defaults that protect user privacy"

      examples:
        - setting: "Location sharing"
          default: "Off"
          justification: "We default to privacy-first: enable only if you want location features"

        - setting: "Profile visibility"
          default: "Friends only"
          justification: "Your profile is private by default; change to public if you prefer"

        - setting: "Analytics"
          default: "Essential only"
          justification: "We only collect what's necessary; opt in for personalization"

    performance_optimized:
      pattern: "Defaults that maximize speed and efficiency"

      examples:
        - setting: "Image quality"
          default: "Auto"
          justification: "High quality on WiFi, optimized for speed on cellular"

        - setting: "Preloading"
          default: "Enabled"
          justification: "Loads content in background for faster navigation"

        - setting: "Cache size"
          default: "500 MB"
          justification: "Optimal for speed without consuming excessive storage"

  contextual_defaults:
    device_based:
      pattern: "Different defaults for different devices"

      examples:
        - setting: "Notification sound"
          desktop_default: "Enabled (less intrusive on desktop)"
          mobile_default: "Disabled (vibration more appropriate)"
          justification_shown: "Default varies by device type"

        - setting: "Auto-play videos"
          desktop_default: "Enabled"
          mobile_default: "WiFi only"
          justification: "Respects mobile data limits"

    platform_based:
      pattern: "Adapt to platform conventions"

      examples:
        - setting: "Theme"
          ios_default: "Auto (matches iOS dark mode)"
          android_default: "Auto (matches Android system theme)"
          web_default: "Light"
          justification: "Matches your system preferences"

    user_tier_based:
      pattern: "Different defaults for different plan levels"

      examples:
        - setting: "Backup frequency"
          free_tier: "Weekly"
          pro_tier: "Daily"
          enterprise_tier: "Real-time"
          justification: "Default matches your plan benefits"

        - setting: "File retention"
          free_tier: "30 days"
          paid_tier: "Indefinite"
          justification_shown: "Your plan includes extended retention"

    region_based:
      pattern: "Comply with local regulations"

      examples:
        - setting: "Data collection"
          eu_default: "Minimal (GDPR compliance)"
          us_default: "Standard"
          justification: "Default meets local privacy requirements"

  changed_from_default_messaging:
    subtle_indicator:
      pattern: "Small visual marker"

      examples:
        - "Dot or asterisk next to setting name"
        - "Different color for modified settings"
        - "'Custom' badge"

    explicit_message:
      pattern: "Clear text explanation"

      examples:
        - "You've changed this from the default (Auto)"
        - "Custom value: 500 (default: 250)"
        - "Modified from recommended setting"

    comparison_view:
      pattern: "Show both current and default"

      example:
        setting: "Cache size"
        current: "1000 MB (your setting)"
        default: "500 MB (recommended)"
        reset: "Reset to default"

  reset_to_default_features:
    per_setting_reset:
      pattern: "Reset button for individual settings"
      visibility: "Only shown when changed from default"

      example:
        setting: "Notification frequency"
        current: "Real-time"
        default: "Hourly digest"
        action: "Reset to default (Hourly digest)"

    category_reset:
      pattern: "Reset entire category of settings"

      example:
        section: "Display preferences"
        modified_count: "3 settings changed from defaults"
        action: "Reset all display settings to defaults"
        confirmation: "This will reset theme, density, and sidebar width"

    global_reset:
      pattern: "Reset all settings to defaults"
      placement: "Advanced settings or help section"

      flow:
        warning: "Reset all settings to defaults?"
        impact: "This will reset all your customizations"
        exceptions: "Account information and data won't be affected"
        confirmation_required: true
        button: "Reset All Settings"

  default_value_documentation:
    what_are_defaults:
      explanation: "Default settings are pre-configured values we've chosen for optimal experience"

      benefits:
        - "Start using immediately without configuration"
        - "Optimized for most users based on research"
        - "Can be changed anytime to suit your preferences"

    how_defaults_chosen:
      transparency: "Explain selection process"

      methods:
        - method: "User research"
          example: "Tested with 1,000 users to find most intuitive settings"

        - method: "Usage data analysis"
          example: "Based on what 80% of active users prefer"

        - method: "Expert recommendations"
          example: "Security settings follow industry best practices"

        - method: "Privacy principles"
          example: "Privacy-protective defaults to respect user data"

    viewing_all_defaults:
      feature: "Settings overview showing what's default vs. customized"

      example:
        view: "Settings summary"
        display:
          - "✓ Theme: Auto (default)"
          - "• Notifications: Real-time (custom, default is Hourly)"
          - "✓ Privacy: Friends only (default)"
          - "• Sidebar: 320px (custom, default is 240px)"

        filter: "Show only customized settings"
        action: "Reset all to defaults"

  onboarding_and_setup:
    setup_wizard_defaults:
      pattern: "Pre-select recommended options during onboarding"

      example:
        step: "Choose your preferences"
        option_1:
          label: "Recommended settings"
          badge: "Recommended"
          description: "Pre-configured for optimal experience"
          preselected: true
          details: "Privacy-protective, balanced notifications"

        option_2:
          label: "Customize now"
          description: "Choose each setting individually"

        option_3:
          label: "Minimal setup"
          description: "Essential settings only, customize later"

    smart_defaults_messaging:
      pattern: "Explain why settings are pre-configured"

      example:
        message: "We've set up your account with recommended settings"
        details: "These defaults protect your privacy and optimize performance"
        action: "Review settings anytime in Settings > Preferences"
        customize: "Customize now" (optional)

  accessibility_considerations:
    screen_reader_announcements:
      default_indication: "Announce 'Default' or 'Recommended' state"
      changed_indication: "Announce 'Custom value, default is [value]'"

      example_announcement: "Theme: Auto, default, matches system preferences"

    visual_indicators:
      not_color_alone: "Use badge + text, not just color"
      clear_labels: "'Default' text, not just styling"

    keyboard_navigation:
      reset_button: "Easily accessible via Tab"
      shortcut: "Quick reset via keyboard (optional)"

  mobile_adaptations:
    compact_indicators:
      pattern: "Shorter default labels on mobile"

      examples:
        desktop: "Recommended for most users"
        mobile: "Recommended"

    default_in_context:
      pattern: "Show default when editing"

      example:
        edit_screen_title: "Notification frequency"
        current: "Real-time"
        default_note: "Default: Hourly digest"
        options: "[List of options with default marked]"

  help_and_discovery:
    tooltip_on_default:
      trigger: "Info icon next to 'Default' label"
      content: "Why this is the default setting and when to change it"

      example:
        setting: "Auto-save: 2 minutes (Default)"
        tooltip: "Saves your work every 2 minutes. Recommended for balancing protection with performance. Change to 30 seconds for critical work or 5 minutes for faster devices."

    default_recommendations:
      pattern: "Suggest returning to default if user's choice creates issues"

      example:
        scenario: "User disabled auto-save, lost work"
        message: "Lost work recently? Try enabling auto-save (Default: 2 minutes)"
        action: "Enable auto-save"

  testing_defaults:
    a_b_testing:
      purpose: "Test different defaults to optimize user experience"
      transparency: "Inform users in privacy policy"

      example:
        setting: "Email frequency"
        variant_a: "Default: Daily digest"
        variant_b: "Default: Hourly digest"
        metric: "Email engagement and opt-out rate"

    user_feedback:
      prompt: "Are the default settings working for you?"
      collection: "Periodic surveys or feedback prompts"
      iteration: "Update defaults based on feedback"
```

=== DEFAULT VALUE GUIDELINES ===

**Transparency**:
- Clearly mark which options are defaults
- Explain why the default was chosen
- Show when user has changed from default
- Make it easy to return to defaults

**User-Centric Defaults**:
- Choose defaults that work for 80%+ of users
- Prioritize privacy and security
- Base on research and data, not assumptions
- Consider context (device, region, user tier)

**Clear Communication**:
- Use consistent language: "Default", "Recommended", "Standard"
- Explain benefits of default choice
- Suggest when to customize
- Don't shame users for changing defaults

**Easy Customization**:
- Never lock users into defaults
- Make changing easy and reversible
- Provide "Reset to default" option
- Show comparison: current vs. default

**Avoid Default Overwhelm**:
- Not every setting needs "default" label
- Use for important or non-obvious choices
- Group explanations to reduce clutter
- Progressive disclosure for detailed justifications

=== EXAMPLES ===

**Example 1: Privacy-First Social App Defaults**
- platform_type: "mobile social media app"
- user_type: "privacy-conscious consumers"
- default_choices: "privacy-protective, user control"
- justification: "transparency and user empowerment"

**Output**:
```yaml
privacy_first_defaults:
  privacy_settings:
    - setting: "Profile visibility"
      default: "Friends only"
      indicator: "Recommended • Default"

      explanation:
        why_default: "Your profile is private by default to protect your privacy"
        benefit: "Only people you connect with can see your posts and information"
        when_to_change: "Change to Public if you're a content creator or public figure"

      current_if_changed:
        display: "Current: Public (you changed this from default)"
        reset: "Reset to Friends only"

    - setting: "Activity status"
      default: "Off"
      indicator: "Private by default"

      explanation:
        why_default: "We don't share when you're online unless you choose to"
        benefit: "More privacy, less social pressure"
        when_to_change: "Enable if you want friends to know when you're available"

      trade_off_note: "If you enable this, you'll also see when friends are online"

    - setting: "Data collection"
      default: "Essential only"
      indicator: "Privacy-first default"

      explanation:
        why_default: "We collect only what's needed for the app to work"
        what_essential: "Account info, basic usage for bug fixes"
        what_not_collected: "Browsing patterns, location, contacts"

        opt_in_for_more:
          option: "Standard data collection"
          benefit: "Better recommendations and personalization"
          still_private: "Never sold to third parties"

    - setting: "Personalized ads"
      default: "Off"
      indicator: "Default"

      explanation:
        why_default: "Privacy-first: ads aren't personalized by default"
        what_you_see: "Generic ads based on age and location only"

        enable_for:
          benefit: "More relevant ads"
          what_changes: "Ads based on your interests and activity"
          control: "Can disable anytime"

  notification_defaults:
    - setting: "Notification frequency"
      default: "Daily digest"
      indicator: "Recommended"

      explanation:
        why_default: "Most users (73%) prefer daily summaries over real-time alerts"
        benefit: "Stay informed without constant interruptions"
        how_works: "One email each morning with yesterday's activity"

      alternatives:
        when_want_immediate:
          option: "Real-time"
          use_case: "If you need instant updates"
          warning: "Can result in many notifications per day"

        when_want_less:
          option: "Weekly digest"
          use_case: "Casual users who check in occasionally"

  display_defaults:
    - setting: "Theme"
      default: "Auto"
      indicator: "Matches your system"

      explanation:
        why_default: "Automatically matches your device's dark mode setting"
        benefit: "Seamless experience, reduces eye strain"
        how_works: "Dark at night, light during day (if your device is configured that way)"

      manual_control:
        always_light: "Choose Light to always use light mode"
        always_dark: "Choose Dark to always use dark mode"

  default_summary_screen:
    location: "Settings > Review Defaults"
    purpose: "Show all default settings and customizations"

    display:
      privacy_settings: "3 defaults kept, 1 customized"
      notification_settings: "All defaults kept"
      display_settings: "2 customized"

    customizations:
      - setting: "Profile visibility"
        current: "Public"
        default: "Friends only"
        reset: "Reset to default"

      - setting: "Theme"
        current: "Dark"
        default: "Auto"
        reset: "Reset to default"

    bulk_action: "Reset all to defaults"
```

**Example 2: Performance-Optimized Developer Tool Defaults**
- platform_type: "developer IDE and code editor"
- user_type: "professional developers, technical users"
- default_choices: "performance-optimized, workflow-efficient"
- justification: "data-driven, best practices"

**Output**:
```yaml
developer_tool_defaults:
  editor_settings:
    - setting: "Auto-save"
      default: "On focus change"
      indicator: "Recommended"

      explanation:
        why_default: "Saves automatically when switching files or apps"
        data: "Used by 82% of professional developers in our survey"
        benefit: "Never lose work, without constant disk writes"

      alternatives:
        setting: "Always (every 1 second)"
        when: "Unstable environment, frequent crashes"
        trade_off: "May trigger frequent builds, higher disk activity"

        setting: "Manual only"
        when: "Specific workflows, deliberate save points"
        trade_off: "Must remember to save (Cmd+S)"

      current_status:
        if_default: "On focus change (Default)"
        if_changed: "Always • Modified from default (On focus change) • [Reset]"

    - setting: "Format on save"
      default: "Enabled"
      indicator: "Best practice"

      explanation:
        why_default: "Industry best practice: code should be consistently formatted"
        benefit: "Clean diffs, easier collaboration, no manual formatting"
        requirement: "Requires formatter configured (Prettier, Black, etc.)"

      when_to_disable:
        - "Working in legacy codebase with inconsistent formatting"
        - "Formatter not yet configured"
        - "Specific project conventions differ"

    - setting: "Tab size"
      default: "2 spaces"
      indicator: "Most common in modern web development"

      explanation:
        why_default: "Analysis of 1M+ GitHub repos: 2 spaces most common for JS/TS/React"
        benefit: "Matches ecosystem conventions"

      customization_note: "Change per-language or per-project in workspace settings"

      alternatives:
        - "4 spaces: Common in Python, Java"
        - "Tabs: Some teams prefer actual tab characters"

  performance_settings:
    - setting: "IntelliSense delay"
      default: "300ms"
      indicator: "Optimized for performance"

      explanation:
        why_default: "Balances responsiveness with CPU usage"
        data: "Tested with 10,000 developers: 300ms feels instant without lag"
        benefit: "Suggestions appear quickly without affecting typing speed"

      customization:
        faster: "100ms - More responsive, higher CPU usage"
        slower: "500ms - Lower CPU usage, slight delay"

      current_display: "300ms (Default) • Change if needed"

    - setting: "File watching"
      default: "Enabled"
      indicator: "Default"

      explanation:
        why_default: "Automatically detects external file changes"
        benefit: "Always in sync with git operations, external builds"
        trade_off: "Uses ~50MB RAM, slight CPU overhead"

      when_to_disable: "Very large projects (>100k files), performance issues"

  workspace_defaults:
    smart_defaults:
      feature: "Detect project type and suggest appropriate defaults"

      example:
        project_type: "React application detected"
        suggested_defaults:
          - "Format on save: Enabled (Prettier recommended)"
          - "Tab size: 2 spaces (React convention)"
          - "JSX support: Enabled"
          - "Import organization: Auto"

        apply: "Use recommended settings for React projects"
        customize: "I'll configure manually"

  default_profiles:
    preset_configurations:
      - profile: "Web Development (Default)"
        settings:
          tab_size: "2 spaces"
          formatter: "Prettier"
          auto_save: "On focus change"

      - profile: "Python Development"
        settings:
          tab_size: "4 spaces"
          formatter: "Black"
          auto_save: "On focus change"

      - profile: "Performance mode"
        settings:
          intellisense: "Basic only"
          file_watching: "Disabled"
          extensions: "Essential only"
        when: "Large projects, slower machines"

    switching_profiles:
      action: "Switch to Python defaults"
      confirmation: "This will change 8 settings. Review changes?"
      preview_changes: "Show what will change"

  reset_and_restore:
    per_setting_reset:
      visibility: "Only shown when changed"

      example:
        setting: "Tab size"
        current: "4 spaces (Custom)"
        default: "2 spaces"
        action: "← Reset to default (2 spaces)"

    category_reset:
      example:
        category: "Editor settings"
        status: "5 of 12 settings customized"
        action: "Reset editor settings to defaults"
        preview: "Show what will change"

    export_settings:
      feature: "Save your customizations"
      use_case: "Transfer to another machine, backup"
      note: "Defaults will remain defaults, only exports your changes"
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Use semantic HTML with clear <label> elements for all settings. Provide accessible text for default indicators, not just visual styling. Use aria-describedby to connect default explanations to setting controls. Announce default status to screen readers ("Auto, default, matches system"). Ensure keyboard access to reset buttons. Maintain 4.5:1 text contrast. Don't rely on color alone to indicate defaults (use text + icon/badge). Provide visible focus indicators (2px outline, 3:1 contrast). Support browser zoom to 200%. Test with screen readers to verify default explanations are clear and helpful.

**Psychological Principles**: Default effect (users often stick with defaults, choose wisely). Status quo bias (defaults become anchors for decision-making). Choice overload (good defaults reduce decision fatigue). Cognitive load reduction (pre-configuration aids novices). Trust building (transparent defaults build confidence). Autonomy (easy customization respects user control). Loss aversion (show what changes when deviating from default). Social proof (mention usage data to validate defaults). Expert authority (cite best practices, recommendations). Reversibility (easy reset reduces anxiety about customization). Satisficing (good defaults help users make "good enough" choices quickly).

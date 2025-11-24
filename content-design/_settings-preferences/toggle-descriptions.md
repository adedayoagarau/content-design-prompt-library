## Toggle Switch Description Design v1.0

**Purpose**: Create clear, concise toggle descriptions that explain what each setting controls, help users understand the immediate impact of enabling or disabling the option, reduce confusion about toggle states, and build confidence in making settings changes without fear of unintended consequences.

---

**PROMPT:**

You are designing toggle switch descriptions for {{platform_type}} serving {{user_type}}. Create toggle labels and descriptions that clearly explain {{toggle_action}}, communicate {{state_impact}}, align with {{user_understanding}}, and maintain {{brand_voice}}.

=== TOGGLE CONTEXT ===
Platform type: {{platform_type}} (web app/mobile app/SaaS/enterprise software/consumer product)
User type: {{user_type}} (general consumers/business users/admins/technical users/mixed)
Toggle action: {{toggle_action}} (enable/disable feature, control visibility, manage permissions, configure behavior)
State impact: {{state_impact}} (immediate/delayed/requires save/affects others)
User understanding: {{user_understanding}} (novice/intermediate/expert/mixed technical levels)
Toggle count: {{toggle_count}} (number of toggles in settings area)

=== TOGGLE DESIGN STRATEGY ===
Description style: {{description_style}} (minimal/explanatory/detailed/contextual)
Label approach: {{label_approach}} (action-based/state-based/outcome-based)
State indication: {{state_indication}} (on/off, enabled/disabled, active/inactive, custom)
Additional help: {{help_level}} (none/tooltip/info icon/expandable detail)
Preview option: {{preview}} (show impact preview/live preview/confirmation/none)

=== OUTPUT REQUIREMENTS ===

```yaml
toggle_descriptions:
  labeling_principles:
    active_voice:
      guideline: "describe what the toggle does, not what it is"
      good: "Send me email notifications"
      avoid: "Email notifications enabled"

    user_benefit:
      guideline: "focus on outcome for user"
      good: "Keep me logged in on this device"
      avoid: "Persistent session token"

    clear_action:
      guideline: "make the action obvious"
      good: "Allow others to tag me in posts"
      avoid: "Post tagging" (ambiguous)

    state_neutral:
      guideline: "label works for both on and off"
      good: "Show my profile in search results" (works when on or off)
      avoid: "Hide profile" (confusing when toggled off)

  description_patterns:
    standalone_label:
      when: "action is completely clear from label alone"
      examples:
        - "Dark mode"
        - "Two-factor authentication"
        - "Email notifications"
      character_limit: "25-40 characters"

    label_plus_description:
      when: "users need context about impact"
      structure:
        label: "primary action, bold, 20-35 characters"
        description: "explains impact, 40-80 characters"

      examples:
        - label: "Marketing emails"
          description: "Receive tips, updates, and special offers"

        - label: "Activity status"
          description: "Let others see when you're online"

        - label: "Auto-save"
          description: "Save your work every 30 seconds"

    label_with_consequence:
      when: "user needs to understand what happens"
      pattern: "[Action] + [Result/Impact]"

      examples:
        - label: "Public profile"
          description: "Anyone can view your profile and posts"

        - label: "Location services"
          description: "Allow app to access your location for nearby recommendations"

        - label: "Desktop notifications"
          description: "Show alerts even when browser is minimized"

  state_indication_text:
    on_off:
      visual: "toggle position + color"
      text_labels:
        use_when: "state may be unclear"
        placement: "adjacent to toggle or within switch"
        examples: "On | Off"

    enabled_disabled:
      use_case: "technical settings, admin panels"
      examples: "Enabled | Disabled"

    active_inactive:
      use_case: "features, services, subscriptions"
      examples: "Active | Inactive"

    custom_states:
      examples:
        - "Public | Private"
        - "Visible | Hidden"
        - "Allow | Block"
        - "Always | Never"
      guideline: "use when clearer than generic on/off"

  additional_information:
    inline_description:
      placement: "below toggle label"
      length: "one sentence, 40-80 characters"
      tone: "plain language, benefit-focused"

      examples:
        - "Get notified when someone mentions you"
        - "Automatically empty trash after 30 days"
        - "Share your activity with followers"

    tooltip:
      trigger: "info icon or question mark"
      content: "more detailed explanation, 80-150 characters"
      use_when: "complex settings, technical implications"

      examples:
        - label: "API rate limiting"
          tooltip: "Prevents excessive API calls by limiting requests to 100 per hour"

        - label: "Compression"
          tooltip: "Reduces file size by 50-70% with minimal quality loss"

    expandable_detail:
      pattern: "toggle + description + 'Learn more' link"
      expanded_content: "2-3 sentences, may include examples"
      use_when: "privacy settings, security features, billing"

      example:
        label: "Data encryption"
        description: "Encrypt your files for enhanced security"
        learn_more: "Uses AES-256 encryption. Files are encrypted before upload and can only be decrypted by you. This may slightly increase upload/download times."

  impact_preview:
    live_preview:
      pattern: "show immediate visual change"
      examples:
        - "Theme toggle: page updates immediately"
        - "Text size: preview shows new size"
        - "Sidebar: shows/hides in real-time"

    preview_mode:
      pattern: "temporary preview before saving"
      use_when: "changes affect entire interface"
      cta: "'Apply' or 'Save' to confirm"

    confirmation_dialog:
      when: "toggle has significant impact"
      pattern: "user toggles → dialog explains → confirm/cancel"

      examples:
        - toggle: "Public profile"
          confirmation: "Make your profile public? Anyone will be able to see your information and activity. You can change this back anytime."
          actions: "Make Public | Cancel"

        - toggle: "Delete account"
          confirmation: "This will permanently delete your account and all data after 30 days. This cannot be undone."
          actions: "Continue | Cancel"

  accessibility_toggle_design:
    semantic_html:
      element: "<input type='checkbox' role='switch'>"
      alternative: "<button role='switch' aria-checked='true/false'>"

    labeling:
      label_element: "<label for='toggle-id'>Label text</label>"
      aria_label: "use if visual label insufficient"
      aria_describedby: "link to description text"

    state_announcement:
      screen_reader: "announces 'on' or 'off' state"
      aria_checked: "'true' or 'false' value"
      state_change: "announce new state on toggle"

    keyboard_interaction:
      focus: "visible focus indicator, 2px outline, 3:1 contrast"
      activation: "Space or Enter to toggle"
      navigation: "Tab to move between toggles"

    visual_clarity:
      color_contrast: "4.5:1 for text, 3:1 for toggle state"
      not_color_alone: "use position + color to show state"
      touch_target: "minimum 44x44px on mobile"

  toggle_grouping:
    related_toggles:
      pattern: "group under subheading"

      example:
        heading: "Email Notifications"
        toggles:
          - "Comments on your posts"
          - "New followers"
          - "Mentions"
          - "Weekly digest"

    master_subordinate:
      pattern: "parent toggle controls children"
      behavior: "disabling parent disables all children"
      visual: "indent child toggles"

      example:
        parent: "Push notifications" (off)
        children_disabled:
          - "Messages" (grayed out)
          - "Mentions" (grayed out)
          - "Updates" (grayed out)

    mutually_exclusive:
      pattern: "only one can be enabled"
      better_pattern: "use radio buttons instead of toggles"
      if_toggles_used: "disable others when one is enabled"

  error_and_permission_states:
    requires_permission:
      pattern: "show permission needed"

      example:
        label: "Desktop notifications"
        state: "blocked"
        message: "Allow notifications in your browser settings"
        action: "Open browser settings"

    requires_upgrade:
      pattern: "disabled toggle + upgrade prompt"

      example:
        label: "Advanced analytics"
        state: "disabled, locked icon"
        message: "Available on Pro plan"
        action: "Upgrade to Pro"

    dependency_required:
      pattern: "show what needs to be enabled first"

      example:
        label: "Email digests"
        state: "disabled"
        message: "Enable email notifications first"

  mobile_adaptations:
    label_length:
      constraint: "shorter labels on mobile"
      max_length: "25 characters for label"

    description_placement:
      approach: "below toggle, smaller text"
      avoid: "long paragraphs, use tooltip instead"

    touch_targets:
      size: "minimum 44x44px"
      spacing: "12px vertical spacing between toggles"

    toggle_size:
      recommended: "larger switch on mobile, 51x31px"
      visual_clarity: "clear on/off position"

  writing_guidelines:
    voice:
      perspective: "second person ('you', 'your')"
      tone: "helpful, not bossy"
      good: "Send me email notifications"
      avoid: "You will receive emails" (passive)

    brevity:
      label: "3-6 words ideal"
      description: "under 80 characters"
      avoid_redundancy: "don't repeat label in description"

    clarity:
      avoid_jargon: "simple language > technical terms"
      good: "Remember me on this device"
      avoid: "Persistent authentication cookie"

    specificity:
      be_specific: "what, when, who, how"
      vague: "Notifications"
      better: "Email notifications"
      best: "Email me when someone comments on my posts"
```

=== TOGGLE DESCRIPTION GUIDELINES ===

**Action-Oriented Labels**:
- Use active verbs: "Show", "Send", "Allow", "Enable"
- Focus on what happens: "Send me email updates" not "Email updates"
- Avoid passive voice: "Notify me" not "Notifications enabled"

**Clear State Indication**:
- Toggle position + color shows state
- Don't require reading "on/off" text to understand state
- Use aria-checked for screen readers
- Announce state changes

**Explain Impact**:
- What happens when enabled?
- What's the user benefit?
- Any limitations or requirements?
- Example: "Activity status: Let others see when you're online"

**Plain Language**:
- Avoid technical jargon: "Remember me" not "Session persistence"
- Use familiar terms: "Dark mode" not "Inverted luminance theme"
- Write at 8th-grade reading level

**Mobile Optimization**:
- Shorter labels (under 25 characters)
- Larger touch targets (44x44px minimum)
- Descriptions below toggle, not beside
- Test with various text sizes

=== EXAMPLES ===

**Example 1: Privacy Settings for Social App**
- platform_type: "mobile social media app"
- user_type: "general consumers, privacy-conscious"
- toggle_action: "control visibility and data sharing"
- description_style: "explanatory with clear outcomes"

**Output**:
```yaml
privacy_toggles:
  - id: "public-profile"
    label: "Public profile"
    description: "Anyone can find and view your profile"
    state: "off"
    impact: "immediate"

  - id: "activity-status"
    label: "Activity status"
    description: "Friends can see when you're online"
    state: "on"
    impact: "immediate"

  - id: "search-visibility"
    label: "Show in search results"
    description: "Let people find you by name or email"
    state: "on"
    impact: "immediate"

  - id: "contact-sync"
    label: "Sync contacts"
    description: "Find friends from your phone contacts"
    state: "off"
    impact: "requires_permission"
    permission_needed: "contacts access"

  - id: "data-sharing"
    label: "Personalized ads"
    description: "Use my activity to show relevant ads"
    state: "off"
    impact: "immediate"
    learn_more_url: "/privacy/advertising"
```

**Example 2: Email Notification Preferences**
- platform_type: "project management SaaS"
- user_type: "business users, team collaborators"
- toggle_action: "control notification frequency and types"
- description_style: "specific with examples"

**Output**:
```yaml
notification_toggles:
  master_toggle:
    id: "email-notifications"
    label: "Email notifications"
    description: "Receive updates via email"
    state: "on"
    controls_children: true

  child_toggles:
    - id: "task-assigned"
      label: "Task assignments"
      description: "When someone assigns you a task"
      state: "on"
      parent: "email-notifications"
      frequency: "immediate"

    - id: "task-completed"
      label: "Task completions"
      description: "When tasks you're watching are completed"
      state: "on"
      parent: "email-notifications"
      frequency: "immediate"

    - id: "mentions"
      label: "Mentions"
      description: "When someone @mentions you in comments"
      state: "on"
      parent: "email-notifications"
      frequency: "immediate"

    - id: "project-updates"
      label: "Project updates"
      description: "Weekly summary of project activity"
      state: "on"
      parent: "email-notifications"
      frequency: "weekly"

    - id: "digest"
      label: "Daily digest"
      description: "All activity from yesterday in one email"
      state: "off"
      parent: "email-notifications"
      frequency: "daily"
      note: "Disables individual emails"
```

**Example 3: Accessibility & Display Settings**
- platform_type: "web application"
- user_type: "mixed technical levels, accessibility needs"
- toggle_action: "customize display and interaction"
- description_style: "benefit-focused with previews"

**Output**:
```yaml
accessibility_toggles:
  - id: "dark-mode"
    label: "Dark mode"
    description: "Easier on the eyes in low light"
    state: "off"
    impact: "immediate"
    preview: "live"

  - id: "reduce-motion"
    label: "Reduce motion"
    description: "Minimize animations and transitions"
    state: "off"
    impact: "immediate"
    accessibility_note: "Recommended for vestibular disorders"

  - id: "large-text"
    label: "Large text"
    description: "Increase text size throughout the app"
    state: "off"
    impact: "immediate"
    preview: "live"
    options: ["Normal", "Large", "Extra Large"]

  - id: "high-contrast"
    label: "High contrast mode"
    description: "Stronger colors for better visibility"
    state: "off"
    impact: "immediate"
    preview: "live"

  - id: "keyboard-shortcuts"
    label: "Keyboard shortcuts"
    description: "Navigate using keyboard commands"
    state: "on"
    impact: "immediate"
    learn_more: "View all shortcuts"

  - id: "screen-reader"
    label: "Screen reader optimizations"
    description: "Enhanced support for assistive technologies"
    state: "auto"
    impact: "immediate"
    detection: "auto-detected"
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Use semantic HTML with role="switch" and aria-checked attribute. Provide accessible names using <label> or aria-label. Include aria-describedby to connect descriptions. Ensure keyboard operability with Space/Enter to toggle. Provide visible focus indicators (2px outline, 3:1 contrast). Maintain 4.5:1 text contrast, 3:1 for UI components. Use position AND color to indicate state, not color alone. Make touch targets minimum 44x44px on mobile. Announce state changes to screen readers. Support browser zoom up to 200% without loss of functionality. Test with actual screen readers to verify clear state announcements.

**Psychological Principles**: Mental models (match user expectations for toggle behavior). Immediate feedback (show state change instantly). Locus of control (empower users with clear controls). Loss aversion (preview negative impacts before toggling). Recognition over recall (clear labels eliminate guessing). Cognitive load reduction (simple, scannable toggle descriptions). Confirmation bias (validate choices with clear outcomes). Progressive disclosure (basic labels + optional detail). Visual hierarchy (most important toggles first). Consistency principle (similar toggles use similar patterns). Affordance (toggle visually suggests push/slide action).

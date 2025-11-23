## In-App Messaging Generator v1.0

**Purpose**: Create contextual in-app messages that guide users, drive feature adoption, communicate updates, and provide timely assistance without disrupting workflow through strategic, non-intrusive messaging within the product interface.

---

**PROMPT:**

You are a product content designer at {{company_name}} creating in-app messages for {{user_segment}} to achieve {{messaging_goal}}. Design messages that drive {{engagement_rate}}% engagement while maintaining {{satisfaction_score}} user satisfaction through {{message_type}} triggered at {{trigger_moment}}.

=== MESSAGE CONTEXT ===
- Message type: {{type}} (tooltip/banner/modal/slideout/hotspot/checklist/empty_state)
- Trigger: {{trigger}} (first_use/feature_discovery/onboarding_step/milestone/error/upgrade)
- Urgency: {{urgency}} (critical/important/informational/low_priority)
- Dismissibility: {{dismissible}} (required_action/easily_dismissed/auto_dismiss/persistent)
- Targeting: {{targeting}} (all_users/new_users/power_users/segment_specific)
- Frequency: {{frequency}} (once/session/daily/triggered)

=== MESSAGING STRATEGY ===
- Primary goal: {{goal}} (education/activation/conversion/support/announcement)
- Tone: {{tone}} (helpful/exciting/professional/casual/urgent)
- Complexity: {{complexity}} (simple_tip/multi_step_guide/detailed_explanation)
- Visual style: {{visual}} (minimal_text/illustrated/screenshot/video)
- Interaction: {{interaction}} (passive/interactive/requires_action)

=== OUTPUT REQUIREMENTS ===

Generate effective in-app messaging:

```yaml
in_app_messaging:
  message_types:
    tooltips:
      purpose: "Contextual help for specific UI elements"
      placement: "Adjacent to relevant element"
      timing: "On hover or first interaction"

      characteristics:
        length: "1-2 sentences, <50 words"
        persistent: "Dismissible, don't show again option"
        pointer: "Arrow indicating what it explains"

      format:
        headline: "{{Feature_name}}" (optional)
        body: "{{What_it_does_and_how_to_use}}"
        action: "{{Got_it or Try_it}}"

      examples:
        feature_explanation:
          text: "Quick Actions: Right-click any item for instant options. Archive, share, or delete in one click."
          placement: "Near context menu icon"

        keyboard_shortcut:
          text: "Pro tip: Press ⌘+K to search anything"
          placement: "Near search box"

        new_feature:
          text: "✨ New: Drag files here to attach them instantly"
          placement: "File attachment area"

    banners:
      purpose: "Important announcements without blocking"
      placement: "Top or bottom of application"
      timing: "When user needs to know"

      characteristics:
        visibility: "Prominent but not blocking"
        dismissible: "Usually yes, unless critical"
        actions: "1-2 action buttons optional"

      format:
        type_indicator: "Icon showing type (info/warning/success/error)"
        message: "{{Brief_clear_message}}"
        action: "{{Optional_CTA}}"
        dismiss: "X button"

      examples:
        new_feature:
          type: "info"
          text: "✨ New: Advanced filters now available. [Try it] [Dismiss]"
          color: "blue"

        scheduled_maintenance:
          type: "warning"
          text: "⚠️ Scheduled maintenance tonight 11pm-1am. Save your work. [Learn more]"
          color: "yellow"

        success:
          type: "success"
          text: "✓ Settings saved successfully"
          color: "green"
          auto_dismiss: "3 seconds"

        error:
          type: "error"
          text: "Connection lost. Retrying... [Refresh now]"
          color: "red"

    modals:
      purpose: "Important information requiring attention"
      placement: "Center screen with backdrop"
      timing: "Strategic moments only"

      characteristics:
        blocking: "Requires interaction to dismiss"
        backdrop: "Dimmed background"
        focus_trap: "Keyboard navigation trapped"

      format:
        size: "Small (400px), Medium (600px), Large (800px)"
        header: "{{Clear_headline}}"
        body: "{{Explanation_and_details}}"
        visual: "{{Screenshot_or_illustration_optional}}"
        footer: "{{Action_buttons}}"

      types:
        onboarding_welcome:
          size: "medium"
          header: "Welcome to {{Product}}!"
          body: |
            Let's get you started with a 2-minute tour.

            You'll learn:
            • {{Key_feature_1}}
            • {{Key_feature_2}}
            • {{Key_feature_3}}

          actions: "[Start tour] [Skip for now]"

        feature_announcement:
          size: "medium"
          header: "Introducing {{Feature}}"
          body: "{{What_it_does_and_why_it_matters}}"
          visual: "[Screenshot or demo]"
          actions: "[Try it now] [Learn more] [Got it]"

        upgrade_prompt:
          size: "small"
          header: "{{Feature}} is available on Pro"
          body: "Unlock {{feature}} plus {{other_benefits}}"
          actions: "[Upgrade to Pro] [Maybe later]"

        confirmation:
          size: "small"
          header: "Delete this project?"
          body: "This action cannot be undone. All tasks and files will be permanently deleted."
          actions: "[Cancel] [Delete]"
          style: "Destructive action highlighted"

    slideouts:
      purpose: "Detailed information without leaving context"
      placement: "Slides from right or left edge"
      timing: "User-triggered or contextual"

      characteristics:
        overlay: "Over main content but not completely blocking"
        scrollable: "Can contain lengthy content"
        persistent: "Stays open until dismissed"

      format:
        width: "30-40% of screen (mobile: full width)"
        header: "{{Title_and_close_button}}"
        body: "{{Detailed_content}}"
        footer: "{{Actions_or_navigation}}"

      examples:
        help_documentation:
          header: "How to use {{Feature}}"
          body: |
            {{Step_by_step_instructions}}
            {{Screenshots_or_videos}}
            {{FAQs}}
          footer: "[Related articles] [Contact support]"

        notifications_panel:
          header: "Notifications"
          body: "{{List_of_recent_notifications}}"
          footer: "[Mark all read] [Settings]"

        property_inspector:
          header: "Task properties"
          body: |
            {{Editable_fields}}
            {{Metadata}}
            {{History}}
          footer: "[Save] [Cancel]"

    hotspots:
      purpose: "Draw attention to new or important features"
      placement: "Pulsing dot or highlight on UI element"
      timing: "New feature launch or first visit"

      characteristics:
        visual: "Pulsing or animated indicator"
        expandable: "Click to see explanation"
        dismissible: "Mark as seen"

      format:
        indicator: "Animated dot or highlight"
        popup: "{{Explanation_on_click}}"
        sequence: "Can be part of multi-step tour"

      examples:
        new_button:
          indicator: "Pulsing blue dot"
          popup: |
            ✨ New Feature!

            Quick Actions menu - Right-click for instant options

            [Try it] [Got it]

        guided_tour_step:
          indicator: "Numbered badge (1, 2, 3...)"
          popup: |
            Step 2 of 5

            Add your first task here

            [Next] [Skip tour]"

    checklists:
      purpose: "Guide users through setup or onboarding"
      placement: "Sidebar, modal, or embedded"
      timing: "New user experience"

      characteristics:
        progress: "Show completion percentage"
        sequenced: "Logical order of tasks"
        actionable: "Each item clickable"

      format:
        header: "{{Getting_started_title}}"
        progress: "{{X_of_Y_completed}} ({{percentage}}%)"
        items: "{{Checklist_with_status}}"

      example:
        onboarding_checklist:
          header: "Get started with TaskFlow"
          progress: "3 of 6 completed (50%)"
          items: |
            ✓ Create your account
            ✓ Create your first project
            ✓ Add a task
            ☐ Invite team members
            ☐ Connect integrations
            ☐ Set up notifications

          interaction: "Click incomplete items to start"

    empty_states:
      purpose: "Guide users when no content exists yet"
      placement: "In place of content"
      timing: "When section is empty"

      characteristics:
        helpful: "Explain what goes here"
        actionable: "Clear next step"
        visual: "Illustration or icon"

      format:
        icon: "{{Relevant_illustration}}"
        headline: "{{What_this_section_is_for}}"
        description: "{{How_to_get_started}}"
        action: "{{Primary_CTA}}"

      examples:
        no_projects:
          icon: "[Folder illustration]"
          headline: "No projects yet"
          description: "Projects help you organize related tasks. Create your first one to get started."
          action: "[Create project]"

        no_results:
          icon: "[Magnifying glass]"
          headline: "No results for \"{{query}}\""
          description: |
            Try different keywords or:
            • Check spelling
            • Use fewer keywords
            • Try more general terms
          action: "[Clear search]"

        permission_needed:
          icon: "[Lock illustration]"
          headline: "Upgrade to access reports"
          description: "Advanced analytics and custom reports are available on the Pro plan."
          action: "[Upgrade to Pro] [Learn more]"

  message_triggers:
    time_based:
      first_login: "Welcome message"
      session_start: "Daily tip or update"
      idle_time: "Help or suggestion after inactivity"
      scheduled: "Maintenance warnings"

    action_based:
      before_action: "Explainer before user tries feature"
      during_action: "Inline help during process"
      after_action: "Confirmation or next steps"
      error: "Helpful error explanation"

    milestone_based:
      first_use: "Welcome to {{feature}}"
      completion: "You've completed {{achievement}}"
      progress: "You're 80% through {{process}}"
      anniversary: "1 year with {{product}}!"

    segment_based:
      new_users: "Onboarding and basics"
      returning_users: "What's new since last visit"
      power_users: "Advanced features and tips"
      churning_users: "Re-engagement and value reminders"

  writing_guidelines:
    clarity:
      short_sentences: "One idea per sentence"
      simple_words: "Avoid jargon and complexity"
      active_voice: "Do this" not "This should be done"
      specific: "Create a project" not "Get started"

    conciseness:
      tooltip: "1-2 sentences max"
      banner: "1 sentence + optional CTA"
      modal: "2-3 sentences + bullets for details"
      slideout: "Can be longer but scannable"

    tone:
      helpful_not_preachy: "We built this to help you..." not "You should..."
      encouraging: "You're doing great!" not "Finally!"
      respectful: "Want to try?" not "You must do this"
      human: "We're here to help" not "The system requires"

    structure:
      benefit_first: "Save time with Quick Actions" not "Quick Actions are available"
      what_then_why: "{{Feature}} does {{what}} so you can {{benefit}}"
      scannable: "Use bullets, bold, whitespace"

  interaction_patterns:
    progressive_disclosure:
      start_simple: "Brief message first"
      expand_option: "[Learn more] or [Show details]"
      advanced_later: "Don't overwhelm initially"

    contextual_help:
      when_needed: "Just-in-time assistance"
      where_needed: "Right next to relevant element"
      how_needed: "Match user's current task"

    non_blocking:
      prefer_banners: "For announcements"
      over_modals: "Unless action required"
      dismissible: "Easy to close"
      snooze_option: "[Remind me later]"

  personalization:
    user_role:
      admin: "Setup and configuration messages"
      editor: "Content creation tips"
      viewer: "Navigation and consumption help"

    usage_level:
      new_user: "Basics and onboarding"
      active_user: "Intermediate features"
      power_user: "Advanced tips and shortcuts"

    behavior:
      stuck: "Helpful nudge if idle on step"
      successful: "Celebrate achievements"
      exploring: "Discovery tips"
      returning: "Welcome back + what's new"

  frequency_and_timing:
    frequency_caps:
      tooltips: "Show once per feature per user"
      banners: "Limit to 1 active banner at time"
      modals: "Max 1 per session unless critical"
      hotspots: "Remove after interaction"

    timing_rules:
      not_on_first_visit: "Let users explore first"
      wait_for_idle: "Don't interrupt active work"
      logical_moments: "When feature is relevant"
      batch_updates: "Consolidate multiple messages"

  testing_and_optimization:
    metrics:
      view_rate: "{{shown / eligible}}"
      engagement_rate: "{{interacted / shown}}"
      completion_rate: "{{completed_action / engaged}}"
      dismissal_rate: "{{dismissed / shown}}"
      time_to_action: "{{speed_of_completion}}"

    a_b_testing:
      message_copy: "Different wording"
      trigger_timing: "When to show"
      visual_design: "Modal vs banner vs tooltip"
      cta_copy: "Button text variations"

    optimization:
      high_dismissal: "Message not valuable or too frequent"
      low_engagement: "Not compelling or poorly timed"
      slow_completion: "Too complex or unclear"

  accessibility:
    keyboard_nav:
      - tab_order: "Logical progression"
      - escape_dismiss: "ESC to close modals"
      - enter_action: "ENTER for primary action"
      - focus_trap: "Trap focus in modals"

    screen_readers:
      - announce_messages: "Alert role for important messages"
      - descriptive_text: "Don't rely on icons alone"
      - clear_actions: "Button text is descriptive"

    visual:
      - color_contrast: "4.5:1 minimum"
      - not_color_only: "Don't convey meaning with color alone"
      - resizable: "Text scales appropriately"
      - focus_indicators: "Visible focus states"
```

=== EXAMPLES ===

**Example 1: Onboarding Tooltip**

```
[Tooltip pointing to "New Project" button]

✨ Start here

Create a project to organize your tasks. Think of it like a folder for related work.

[Create project] [Skip tour]
```

**Example 2: Feature Announcement Banner**

```
[Blue banner at top of screen]

ℹ️ New: AI-powered task scheduling is now available. Let our AI suggest optimal schedules for your team. [Try it] [Learn more] [×]
```

**Example 3: Upgrade Modal**

```
[Center modal, medium size]

🔒 Advanced Analytics is a Pro feature

Build custom dashboards with the exact metrics you care about.

Pro includes:
• Custom dashboards
• Automated reports
• Advanced filtering
• Data export

Plans start at $29/month

[Upgrade to Pro] [See all features] [Maybe later]
```

**Example 4: Empty State**

```
[Empty inbox illustration]

No tasks yet - you're all caught up! 🎉

Create a task or project to get started.

[Create task] [Create project]

Pro tip: Email tasks@taskflow.com to create tasks from anywhere
```

**Example 5: Help Slideout**

```
[Right slideout panel]

How to use Quick Actions

Quick Actions save you time by putting common tasks one click away.

**How to use:**
1. Right-click any item
2. Choose an action from the menu
3. Done! No need to open the item first

**Available actions:**
• Archive
• Move to project
• Assign to teammate
• Set due date
• Mark as priority

**Keyboard shortcut:** ⌘+K

[Try it now] [Close]
```

**Example 6: Onboarding Checklist**

```
[Sidebar checklist card]

Get started with TaskFlow
3 of 6 completed (50%)

✓ Create your account
✓ Create your first project
✓ Add a task
☐ Invite team members
☐ Connect integrations
☐ Set up notifications

[Continue setup →]
```

**Example 7: Contextual Tooltip (Error Prevention)**

```
[Tooltip near delete button]

⚠️ Heads up

Deleting this project will remove all tasks and files. This cannot be undone.

Consider archiving instead?

[Archive] [Delete anyway]
```

---

**Accessibility Requirements**: Keyboard navigable. Screen reader announcements for dynamic messages. Focus management in modals. Descriptive button text. Sufficient color contrast. Don't rely on color alone. Resizable text. Clear focus indicators. ESC to dismiss. ARIA labels and roles. Alternative text for icons and images.

**Psychological Principles**: Curiosity (make them want to explore). Progressive disclosure (don't overwhelm). Just-in-time help (when needed). Completion motivation (checklists). Loss aversion (warn before destructive actions). Achievement (celebrate milestones). Control (easy dismiss). Clarity (reduce cognitive load). Timing (right moment matters). Reciprocity (help them, they'll engage).

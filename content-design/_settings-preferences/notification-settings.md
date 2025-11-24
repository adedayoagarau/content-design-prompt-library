## Notification Settings Design v1.0

**Purpose**: Create clear, organized notification settings that help users control the volume and type of alerts they receive, reduce notification fatigue, respect user attention and time, and balance keeping users informed with avoiding overwhelming them through thoughtful default settings and granular controls.

---

**PROMPT:**

You are designing notification settings for {{platform_type}} serving {{user_type}}. Create notification controls that manage {{notification_types}}, respect {{user_attention}}, support {{notification_channels}}, and maintain {{brand_voice}}.

=== NOTIFICATION CONTEXT ===
Platform type: {{platform_type}} (web app/mobile app/SaaS/social platform/productivity tool)
User type: {{user_type}} (general consumers/business users/power users/mixed)
Notification types: {{notification_types}} (social/transactional/marketing/system/alerts)
User attention: {{user_attention}} (attention-sensitive/notification-tolerant/varies-by-context)
Notification channels: {{notification_channels}} (push/email/SMS/in-app/desktop)
Notification volume: {{volume}} (low/moderate/high/very-high)

=== NOTIFICATION STRATEGY ===
Organization method: {{organization}} (by channel/by type/by priority/by source)
Control granularity: {{granularity}} (all-or-nothing/category-level/individual-setting)
Default approach: {{defaults}} (opt-in/opt-out/smart-defaults/user-choice-on-signup)
Frequency options: {{frequency}} (real-time/batched/daily/weekly/never)
Quiet hours: {{quiet_hours}} (supported/not-supported/automatic)

=== OUTPUT REQUIREMENTS ===

```yaml
notification_settings:
  organization_patterns:
    by_channel:
      structure: "organize by delivery method"
      categories:
        - "Push notifications"
        - "Email notifications"
        - "SMS notifications"
        - "In-app notifications"

      pros: "Easy to enable/disable entire channel"
      cons: "Hard to understand what notifications you'll get"
      best_for: "Simple apps with few notification types"

    by_category:
      structure: "organize by content type"
      categories:
        - "Social (comments, likes, mentions)"
        - "Updates (new content, features)"
        - "Security (login alerts, password changes)"
        - "Marketing (tips, offers, newsletters)"

      pros: "Users understand what they're controlling"
      cons: "Must repeat for each channel"
      best_for: "Apps with diverse notification types"

    by_priority:
      structure: "organize by importance level"
      categories:
        - "Critical (security, account issues)"
        - "Important (activity requiring action)"
        - "Informational (updates, news)"
        - "Optional (tips, suggestions)"

      pros: "Helps users focus on what matters"
      cons: "Priority is subjective"
      best_for: "Productivity apps, business tools"

    matrix_view:
      structure: "notification types × channels grid"
      example: |
        Notification Type    | Push | Email | SMS
        ---------------------|------|-------|-----
        Comments on posts    |  ✓   |   ✓   |  ✗
        New followers        |  ✓   |   ✗   |  ✗
        Security alerts      |  ✓   |   ✓   |  ✓
        Weekly digest        |  ✗   |   ✓   |  ✗

      pros: "Complete control, clear overview"
      cons: "Can be overwhelming with many options"
      best_for: "Power users, complex notification needs"

  notification_setting_structure:
    minimal:
      components:
        - setting_name: "clear, concise label"
        - toggle: "on/off control"

      example:
        name: "Email notifications"
        control: "toggle"
        state: "on"

    standard:
      components:
        - setting_name: "descriptive label"
        - description: "what triggers this notification"
        - channels: "where notification is sent"
        - frequency: "how often (if applicable)"

      example:
        name: "Comments on your posts"
        description: "When someone comments on something you've shared"
        channels:
          push: true
          email: true
          sms: false
        frequency: "real-time"

    detailed:
      components:
        - setting_name: "clear label"
        - description: "what triggers notification"
        - example: "sample notification text"
        - channels: "delivery methods"
        - frequency: "timing options"
        - preview: "see what it looks like"

      example:
        name: "Task assignments"
        description: "When someone assigns you a task"
        example_notification: "Sarah assigned you 'Review Q4 report'"
        channels:
          push:
            enabled: true
            preview: "Banner with task title and assigner"
          email:
            enabled: true
            preview: "Email with task details and link"
            frequency: "immediate"
          in_app:
            enabled: true
            badge: true

  channel_specific_settings:
    push_notifications:
      platform_permission:
        status: "Allowed | Denied | Not requested"
        if_denied:
          message: "Push notifications are blocked in your device settings"
          action: "Open Settings"

      settings:
        - name: "Show previews"
          description: "Display message content in notifications"
          options:
            - "Always"
            - "When unlocked"
            - "Never (show sender only)"
          privacy_note: "Choose 'Never' for sensitive content"

        - name: "Sound"
          options:
            - "Default"
            - "Custom sounds (by notification type)"
            - "Silent"

        - name: "Badge count"
          description: "Show number of unread notifications on app icon"
          toggle: true

        - name: "Critical alerts"
          description: "Override Do Not Disturb for urgent notifications"
          warning: "Only for security and time-sensitive alerts"
          toggle: false
          requires: "permission prompt"

    email_notifications:
      settings:
        - name: "Email frequency"
          description: "How often to receive notification emails"

          options:
            - value: "real_time"
              label: "Real-time"
              description: "Immediately as events happen"
              best_for: "Urgent notifications, low volume"

            - value: "hourly"
              label: "Hourly digest"
              description: "One email per hour with all updates"
              best_for: "Moderate volume, prefer batching"

            - value: "daily"
              label: "Daily digest"
              description: "One email each morning with previous day's activity"
              best_for: "High volume, periodic check-ins"
              send_time: "8:00 AM your timezone"

            - value: "weekly"
              label: "Weekly digest"
              description: "One email each Monday with last week's summary"
              best_for: "Low-priority updates"
              send_day: "Monday 8:00 AM"

            - value: "never"
              label: "Never"
              description: "No email notifications"
              exception: "Critical security alerts still sent"

        - name: "Email format"
          options:
            - "HTML (rich formatting, images)"
            - "Plain text (simple, faster loading)"

    sms_notifications:
      note: "Standard messaging rates apply"

      settings:
        - name: "Phone number"
          current: "+1 (555) 123-4567"
          verification_status: "Verified ✓"
          action: "Change number"

        - name: "SMS notifications"
          warning: "SMS notifications can incur charges from your carrier"
          recommended: "Enable only for critical alerts"

          options:
            - "Critical security alerts only (Recommended)"
            - "All enabled notifications"
            - "Off"

    in_app_notifications:
      settings:
        - name: "Notification center"
          description: "Show notifications in app"
          always_enabled: true
          note: "This is the central place to see all notifications"

        - name: "Desktop alerts"
          description: "Show pop-up notifications while app is open"
          toggle: true

        - name: "Sound effects"
          description: "Play sound for new notifications"
          toggle: true

  notification_categories:
    social_notifications:
      category_name: "Social Activity"
      description: "Interactions from other users"

      notifications:
        - id: "comments"
          name: "Comments"
          description: "Someone comments on your post"
          default_enabled: true
          priority: "normal"
          channels: ["push", "email", "in-app"]

        - id: "mentions"
          name: "Mentions"
          description: "Someone @mentions you"
          default_enabled: true
          priority: "high"
          channels: ["push", "email", "in-app"]

        - id: "likes"
          name: "Likes and reactions"
          description: "Someone likes your content"
          default_enabled: false
          priority: "low"
          channels: ["in-app"]
          note: "Can be high volume"

        - id: "followers"
          name: "New followers"
          description: "Someone follows you"
          default_enabled: false
          priority: "low"
          channels: ["push", "in-app"]

    transactional_notifications:
      category_name: "Account & Security"
      description: "Important updates about your account"
      always_enabled: true
      cannot_disable: "Required for account security"

      notifications:
        - id: "security-alerts"
          name: "Security alerts"
          description: "New login, password change, suspicious activity"
          always_on: true
          channels: ["push", "email", "SMS"]

        - id: "billing"
          name: "Billing & payments"
          description: "Payment confirmations, failed charges, invoices"
          always_on: true
          channels: ["email"]

        - id: "account-changes"
          name: "Account changes"
          description: "Email address change, account deletion"
          always_on: true
          channels: ["email"]

    productivity_notifications:
      category_name: "Work & Tasks"
      description: "Project updates and assignments"

      notifications:
        - id: "assignments"
          name: "Task assignments"
          description: "When you're assigned a task"
          default_enabled: true
          priority: "high"
          channels: ["push", "email", "in-app"]

        - id: "due-dates"
          name: "Due date reminders"
          description: "Tasks due soon"
          default_enabled: true
          priority: "high"
          channels: ["push", "email"]
          timing:
            - "24 hours before"
            - "1 hour before"
            - "At due time"

        - id: "completions"
          name: "Task completions"
          description: "Tasks you're watching are completed"
          default_enabled: false
          priority: "normal"
          channels: ["in-app"]

    marketing_notifications:
      category_name: "Marketing & Updates"
      description: "Tips, offers, and product news"
      opt_in: true
      default_enabled: false

      notifications:
        - id: "product-updates"
          name: "Product updates"
          description: "New features and improvements"
          channels: ["email"]
          frequency: "weekly"

        - id: "tips"
          name: "Tips & best practices"
          description: "Get more from the product"
          channels: ["email", "in-app"]
          frequency: "weekly"

        - id: "offers"
          name: "Special offers"
          description: "Promotions and discounts"
          channels: ["email"]
          frequency: "monthly"

  notification_timing:
    quiet_hours:
      feature: "Pause notifications during specific hours"

      settings:
        - name: "Enable quiet hours"
          toggle: true

        - name: "Schedule"
          options:
            - value: "custom"
              label: "Custom schedule"
              settings:
                start_time: "10:00 PM"
                end_time: "7:00 AM"
                days: ["Every day", "Weekdays only", "Weekends only", "Custom"]

            - value: "auto"
              label: "Automatic (based on timezone)"
              description: "10 PM to 7 AM in your timezone"

        - name: "Exceptions"
          description: "Allow these notifications during quiet hours"
          options:
            - "Critical security alerts"
            - "Mentions from specific people"
            - "Time-sensitive reminders"

    snooze_notifications:
      feature: "Pause all notifications temporarily"

      options:
        - "For 1 hour"
        - "For 4 hours"
        - "Until tomorrow morning"
        - "Custom time"

      exceptions: "Security alerts always delivered"

  notification_management:
    bulk_actions:
      - "Pause all notifications (except security)"
      - "Enable all"
      - "Reset to defaults"
      - "Copy settings from another device"

    quick_presets:
      presets:
        - name: "Focused work"
          description: "Only urgent notifications"
          enables:
            - "Task assignments"
            - "Direct messages from team"
            - "Security alerts"
          disables: "Everything else"

        - name: "After hours"
          description: "Minimal interruptions"
          enables:
            - "Critical alerts only"
          disables: "Work notifications"

        - name: "Vacation mode"
          description: "Emergency notifications only"
          enables:
            - "Security alerts"
          disables: "All other notifications"

        - name: "Default"
          description: "Recommended settings"
          resets: "All settings to defaults"

  notification_frequency_controls:
    rate_limiting:
      - name: "Maximum email frequency"
        description: "Never send more than this many emails per day"
        options: ["3", "5", "10", "Unlimited"]

      - name: "Bundle similar notifications"
        description: "Combine similar events into one notification"
        example: "'3 people commented on your post' instead of 3 separate notifications"
        toggle: true
        recommended: true

    digest_customization:
      - name: "Daily digest time"
        description: "When to send daily summary"
        time_picker: "8:00 AM"
        timezone: "Detected: Pacific Time"

      - name: "Include in digest"
        options:
          - "Activity summary (posts, comments)"
          - "New followers and connections"
          - "Unread messages count"
          - "Trending content"

  accessibility_features:
    visual_indicators:
      - "Unread count badge"
      - "Notification dot on icon"
      - "Color-coded priority (not color alone)"

    sound_customization:
      - "Different sounds for different types"
      - "Volume control"
      - "Vibration patterns"

    assistive_technology:
      - "Screen reader announcements for new notifications"
      - "Keyboard shortcuts to view notifications"
      - "High contrast notification badges"

  mobile_specific:
    notification_grouping:
      pattern: "Group related notifications together"
      example: "Messages (5) instead of 5 separate notifications"

    lock_screen:
      - name: "Show on lock screen"
        options:
          - "Show content"
          - "Show sender only"
          - "Don't show"

    banner_style:
      options:
        - "Temporary banner"
        - "Persistent until dismissed"

  troubleshooting_help:
    not_receiving:
      checklist:
        - "Check device notification permissions"
        - "Check app notification settings"
        - "Check email spam folder"
        - "Verify notification is enabled for this type"

      action: "Test notification"
      button: "Send test notification now"

    too_many:
      suggestions:
        - "Enable daily digest instead of real-time"
        - "Turn off low-priority notifications"
        - "Use quiet hours"
        - "Try a focused preset"

      action: "Reduce notification volume"
      recommendations: "Suggested settings based on your usage"
```

=== NOTIFICATION SETTINGS GUIDELINES ===

**Clear Organization**:
- Group by category (social, work, security) not just channel
- Show what triggers each notification
- Indicate which are critical (can't be disabled)
- Provide quick presets for common scenarios

**Respect User Attention**:
- Smart defaults: off for high-volume, on for important
- Offer digest/batching options
- Provide quiet hours and snooze
- Bundle similar notifications

**Channel Clarity**:
- Explain each delivery method
- Show platform permission status
- Preview what notifications look like
- Indicate costs (SMS) if applicable

**Granular Control**:
- Category-level toggles for quick changes
- Individual settings for fine-tuning
- Frequency options for each type
- Exceptions for quiet hours

**Help Users Succeed**:
- "Send test notification" button
- Troubleshooting tips
- Suggested settings based on usage
- Preset configurations

=== EXAMPLES ===

**Example 1: Social Media App Notifications**
- platform_type: "mobile social platform"
- user_type: "general consumers, varied engagement levels"
- notification_types: "social interactions, content updates, marketing"
- volume: "potentially very high"

**Output**:
```yaml
social_app_notifications:
  quick_settings:
    master_toggle:
      name: "Pause all notifications"
      description: "Temporarily stop all notifications except security alerts"
      duration_options: ["1 hour", "4 hours", "Until tomorrow", "Custom"]

  notification_categories:
    - category: "Interactions"
      description: "When people engage with your content"
      icon: "heart"

      settings:
        - name: "Likes and reactions"
          description: "Someone likes your post or photo"
          default: "off"
          reason: "High volume"
          channels:
            push: false
            email: false
            in_app: true
          suggestion: "Keep in-app only to avoid notification fatigue"

        - name: "Comments"
          description: "Someone comments on your content"
          default: "on"
          channels:
            push: true
            email: "daily digest"
            in_app: true

        - name: "Mentions"
          description: "Someone @mentions you in a post or comment"
          default: "on"
          priority: "high"
          channels:
            push: true
            email: true
            in_app: true

        - name: "Shares"
          description: "Someone shares your content"
          default: "on"
          channels:
            push: true
            email: "daily digest"
            in_app: true

    - category: "Connections"
      description: "New followers and friend requests"
      icon: "users"

      settings:
        - name: "New followers"
          description: "Someone follows you"
          default: "on"
          channels:
            push: true
            email: "weekly digest"
            in_app: true

        - name: "Friend requests"
          description: "Someone wants to connect"
          default: "on"
          channels:
            push: true
            email: true
            in_app: true

    - category: "Messages"
      description: "Direct messages and group chats"
      icon: "message"

      settings:
        - name: "Direct messages"
          description: "New message from someone you follow"
          default: "on"
          priority: "high"
          channels:
            push: true
            email: false
            in_app: true
          preview_options:
            - "Show message content"
            - "Show sender only"
            - "Hide all preview"

        - name: "Message requests"
          description: "Message from someone you don't follow"
          default: "on"
          channels:
            push: true
            email: false
            in_app: true

        - name: "Group chat messages"
          description: "New messages in group conversations"
          default: "on"
          muting_option: "Mute specific chats individually"
          channels:
            push: true
            email: false
            in_app: true

  channel_settings:
    push_notifications:
      permission_status: "Allowed"

      settings:
        - name: "Show previews"
          current: "When unlocked"
          options: ["Always", "When unlocked", "Never"]

        - name: "Sounds"
          current: "Default"
          custom_sounds:
            - "Messages: Chime"
            - "Mentions: Alert"
            - "Other: Default"

        - name: "Quiet hours"
          enabled: true
          schedule: "10 PM - 7 AM"
          exceptions:
            - "Messages from close friends"
            - "Security alerts"

    email_notifications:
      frequency: "Daily digest"
      send_time: "8:00 AM"

      digest_includes:
        - "New followers: 3"
        - "Comments: 12"
        - "Likes: 45"
        - "Shares: 2"

      individual_emails:
        - "Security alerts: Always"
        - "Direct messages: Never (using push instead)"

  smart_recommendations:
    analysis: "You receive ~50 notifications per day"
    suggestion: "Consider these changes to reduce interruptions:"

    recommendations:
      - current: "Likes: Push notifications ON"
        suggested: "Likes: In-app only"
        reason: "High volume (20/day), low urgency"

      - current: "Email: Real-time"
        suggested: "Email: Daily digest"
        reason: "Reduce email clutter"
```

**Example 2: Project Management Tool Notifications**
- platform_type: "team productivity SaaS"
- user_type: "business users, collaboration-focused"
- notification_types: "task management, team updates, mentions"
- volume: "moderate to high, work-critical"

**Output**:
```yaml
project_management_notifications:
  notification_presets:
    - name: "Focused work (Recommended)"
      description: "Only notifications that need your immediate attention"
      enabled:
        - "Tasks assigned to you"
        - "@mentions"
        - "Due date reminders"
      disabled:
        - "Task completions"
        - "Project updates"
        - "Comments on tasks you're watching"

    - name: "Team lead"
      description: "Stay informed about all project activity"
      enabled:
        - "All task activity"
        - "Project milestones"
        - "Team member updates"

    - name: "Contributor"
      description: "Your tasks and direct interactions"
      enabled:
        - "Your task assignments"
        - "Comments on your tasks"
        - "@mentions"

  notification_settings:
    - category: "Your Tasks"
      always_enabled: true
      note: "Critical for your work"

      settings:
        - name: "New task assignments"
          description: "When someone assigns you a task"
          example: "'Review Q4 budget' assigned by Sarah"
          default: "on"
          channels:
            push: true
            email: true
            desktop: true
          cannot_disable: true

        - name: "Due date reminders"
          description: "Reminders before tasks are due"
          default: "on"
          timing:
            - label: "24 hours before"
              enabled: true
            - label: "1 hour before"
              enabled: true
            - label: "At due time"
              enabled: true
          channels:
            push: true
            email: true

        - name: "Task blocked"
          description: "A task you're assigned is blocked by another task"
          default: "on"
          priority: "high"

    - category: "Team Activity"
      description: "Updates from projects you're part of"

      settings:
        - name: "@Mentions"
          description: "Someone mentions you in a comment"
          default: "on"
          priority: "high"
          channels:
            push: true
            email: true
            desktop: true

        - name: "Comments on your tasks"
          description: "Team members comment on tasks you created or are assigned"
          default: "on"
          channels:
            push: true
            email: "hourly digest"

        - name: "Task completions"
          description: "Tasks you're watching are marked complete"
          default: "off"
          reason: "Can be high volume"
          channels:
            push: false
            email: "daily digest"
            in_app: true

  channel_configuration:
    email:
      strategy: "Batching recommended to reduce email volume"

      options:
        - value: "immediate"
          label: "Immediate"
          description: "Email for each notification"
          warning: "Can result in many emails per day"

        - value: "hourly"
          label: "Hourly digest"
          description: "One email per hour with all updates"
          recommended: true

        - value: "daily"
          label: "Daily summary"
          description: "One email each morning (8 AM)"
          includes: "Previous day's activity"

    desktop:
      note: "Notifications while app or browser tab is open"

      settings:
        - name: "Desktop notifications"
          enabled: true

        - name: "Sound"
          enabled: true
          options: ["Default", "Subtle", "Silent"]

        - name: "Show while in Do Not Disturb"
          enabled: false
          note: "Respect system Do Not Disturb mode"

  work_schedule_integration:
    - name: "Quiet hours"
      description: "Pause non-urgent notifications outside work hours"
      enabled: true

      schedule:
        work_days: "Monday - Friday"
        work_hours: "9 AM - 6 PM"
        timezone: "Pacific Time"

      behavior:
        during_work: "All notifications"
        outside_work: "Critical only (task assignments, @mentions)"

    - name: "Weekend mode"
      description: "Reduce notifications on weekends"
      enabled: true
      weekends: "Only urgent and @mentions"
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Use semantic HTML: <fieldset> for notification groups, <legend> for category names, <label> for each setting. Provide accessible toggle controls with aria-checked. Use aria-describedby for explanatory text. Ensure keyboard navigation with Tab between settings, Space/Enter to toggle. Provide visible focus indicators (2px outline, 3:1 contrast). Maintain 4.5:1 text contrast. Group related notifications logically. Support browser zoom to 200%. Test with screen readers to verify notification descriptions and states are clear. Provide text alternatives for channel icons. Allow customization of notification sounds and visual indicators for users with sensory needs.

**Psychological Principles**: Attention economy (respect limited user attention). Notification fatigue (too many notifications reduce engagement). Interruption cost (context switching is expensive). Control and autonomy (users want power over notifications). Default effect (users keep defaults, choose wisely). Loss aversion (fear of missing important updates). Recency bias (recent notification overwhelm colors perception). Cognitive load (organize clearly to aid decision-making). Status quo bias (make changing settings easy). Variable rewards (notifications trigger dopamine, can be addictive). Boundary setting (quiet hours protect well-being).

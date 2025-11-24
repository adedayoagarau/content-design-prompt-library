## Push Notification Copy Generator v1.0

**Purpose**: Craft concise, timely push notifications that drive engagement and action without being intrusive, respecting user attention while delivering value through strategic messaging optimized for mobile screens and notification centers.

---

**PROMPT:**

You are a product content designer at {{company_name}} writing push notifications for {{user_segment}} to drive {{action_goal}}. Create notifications that achieve {{engagement_rate}}% engagement while maintaining {{opt_in_retention}}% opt-in retention through {{notification_type}} triggered by {{trigger_event}}.

=== NOTIFICATION CONTEXT ===
- Notification type: {{type}} (transactional/promotional/behavioral/informational/social)
- Trigger: {{trigger}} (user_action/time_based/event/milestone/inactivity)
- Urgency: {{urgency}} (immediate/time_sensitive/low_priority)
- Personalization: {{personalization}} (highly_personalized/segmented/generic)
- Device: {{device}} (mobile/desktop/smartwatch)
- User permission: {{permission}} (opt_in/default_on/mandatory)

=== MESSAGING STRATEGY ===
- Primary goal: {{goal}} (engagement/conversion/retention/awareness)
- Tone: {{tone}} (urgent/friendly/informative/exciting/helpful)
- Character limit: {{limit}} (ios_178/android_240/watch_50)
- Image/rich_media: {{media}} (yes/no/conditional)
- Deep link: {{deep_link}} (specific_screen/yes/no)

=== OUTPUT REQUIREMENTS ===

Generate effective push notification copy:

```yaml
push_notification_copy:
  notification_anatomy:
    components:
      title:
        purpose: "Grab attention (bold text)"
        length: "25-35 characters ideal"
        format: "{{Benefit_or_action_oriented}}"
        examples:
          weak: "New Update"
          better: "Your report is ready"
          best: "Sarah just commented on your post"

      body:
        purpose: "Provide context and value"
        length: "40-120 characters"
        format: "{{Specific_details_and_cta}}"
        examples:
          weak: "Check it out"
          better: "Your monthly analytics are now available"
          best: "You saved $47 this month. See where: [View Report]"

      icon:
        purpose: "Brand recognition and visual interest"
        options: ["app_icon", "custom_image", "emoji"]

      image:
        when: "Rich notifications on iOS/Android"
        size: "2:1 aspect ratio recommended"
        purpose: "Visual context or preview"

      actions:
        quick_actions: "iOS: 1-4 buttons, Android: 1-3 buttons"
        examples: ["Reply", "View", "Dismiss", "Snooze"]

  notification_types:
    transactional:
      purpose: "Confirm actions, provide updates"
      urgency: "High - user expects these"
      examples:
        order_confirmation:
          title: "Order confirmed! 📦"
          body: "Arriving {{date}}. Track: [link]"

        password_reset:
          title: "Password reset requested"
          body: "Tap to create new password. Expires in 10min."

        payment_received:
          title: "Payment received: ${{amount}}"
          body: "From {{customer_name}}. View details."

    promotional:
      purpose: "Drive sales, engagement, signups"
      urgency: "Medium - value-based"
      best_practices:
        - limit_frequency: "Max 1-2 per week"
        - clear_value: "What's in it for user"
        - easy_opt_out: "Don't spam"
        - segmentation: "Relevant offers only"

      examples:
        sale_announcement:
          title: "24-hour flash sale 🔥"
          body: "40% off everything. Use code: FLASH40"
          timing: "Early morning to maximize day"

        new_feature:
          title: "You can now {{new_capability}}"
          body: "Try it: [Deep link to feature]"

        limited_offer:
          title: "Last chance: {{offer}}"
          body: "Expires in 3 hours. Don't miss out."

    behavioral:
      purpose: "Re-engage based on user behavior"
      trigger: "Specific user actions or inactions"
      examples:
        cart_abandonment:
          title: "Still interested? 🛒"
          body: "{{Product_name}} is waiting. Complete checkout."
          timing: "1-3 hours after abandonment"

        milestone_achievement:
          title: "You did it! 🎉"
          body: "{{Milestone_achieved}}. See your progress."

        inactivity:
          title: "We miss you! 💙"
          body: "{{Days}} since your last visit. What's new."
          timing: "After 7-14 days inactive"

        streak_about_to_break:
          title: "Don't break your {{number}}-day streak!"
          body: "Quick action: {{what_to_do}}"
          timing: "Evening if daily action required"

    social:
      purpose: "Notify about social interactions"
      real_time: "Send immediately"
      examples:
        new_follower:
          title: "{{Name}} started following you"
          body: "View profile"

        comment:
          title: "{{Name}} commented on your post"
          body: "{{Comment_preview}}..."

        mention:
          title: "{{Name}} mentioned you"
          body: "in {{context}}. See what they said."

        like:
          title: "{{Name}} and {{count}} others liked your {{content}}"
          body: "View post"
          batching: "Batch if many likes"

    informational:
      purpose: "Provide value, no immediate action"
      urgency: "Low - educational or FYI"
      examples:
        daily_summary:
          title: "Your daily summary 📊"
          body: "{{Tasks_completed}} tasks done, {{remaining}} remaining"
          timing: "End of day"

        content_recommendation:
          title: "Recommended for you"
          body: "{{Content_title}} based on your interests"

        weather_alert:
          title: "Rain expected at {{time}}"
          body: "Don't forget your umbrella!"

  writing_formulas:
    urgency_based:
      format: "{{Time_limit}}: {{Benefit_or_action}}"
      examples:
        - "3 hours left: Save 40% on everything"
        - "Your session expires in 5 minutes"
        - "Last chance to register for {{event}}"

    benefit_focused:
      format: "{{Achievement}} is ready/waiting/available"
      examples:
        - "Your refund has been processed"
        - "New matches are waiting for you"
        - "Your report is ready to view"

    social_proof:
      format: "{{Name/number}} {{action_past_tense}}"
      examples:
        - "Sarah liked your photo"
        - "10 new people viewed your profile"
        - "Marcus shared your post"

    question_based:
      format: "{{Engaging_question}}?"
      examples:
        - "Ready to level up?"
        - "Forgot something?"
        - "Want to see what's new?"

    action_oriented:
      format: "{{Action_verb}} {{object}} {{context}}"
      examples:
        - "Complete your profile to get started"
        - "Rate your recent order"
        - "Try our new feature"

  personalization_strategies:
    name_usage:
      title: "{{First_name}}, {{message}}"
      body: "{{Name}} {{action}}"
      examples:
        - "Marcus, your order shipped!"
        - "Sarah commented on your post"

    behavioral:
      based_on_actions: "Tailored to what they do"
      examples:
        - frequent_buyer: "Your favorites are on sale"
        - new_user: "Let's get you started"
        - power_user: "New advanced feature for you"

    contextual:
      location: "{{Event}} near you in {{city}}"
      time: "Good morning! Here's your {{daily_thing}}"
      device: "Continue on your phone where you left off"

    dynamic_content:
      real_time_data:
        - "{{Stock_ticker}} just hit your target price"
        - "{{Unread_count}} unread messages"
        - "{{Friend_name}} is online now"

  timing_optimization:
    send_time_strategies:
      user_timezone: "Always convert to recipient's timezone"
      optimal_hours:
        morning: "8-10am (commute, starting day)"
        lunch: "12-1pm (break time)"
        evening: "6-8pm (winding down)"
        avoid: "Late night (11pm-7am) unless urgent"

      day_of_week:
        weekday: "Higher engagement for productivity apps"
        weekend: "Better for entertainment/social apps"
        monday: "Avoid early Monday for non-urgent"
        friday: "Good for weekend event promotions"

    frequency_management:
      recommended_limits:
        - transactional: "No limit (user expects)"
        - promotional: "Max 1-2 per week"
        - social: "Batch similar (don't spam)"
        - informational: "Max 1 per day"

      intelligent_batching:
        example: |
          Instead of:
          • "Sarah liked your post" (10:00am)
          • "Marcus liked your post" (10:05am)
          • "10 people liked your post" (10:10am)

          Send once:
          • "Sarah, Marcus, and 10 others liked your post" (10:15am)

      quiet_hours:
        respect: "Don't disturb settings"
        default: "No notifications 10pm-8am"
        exceptions: "Critical/transactional only"

  engagement_optimization:
    deep_linking:
      purpose: "Take user exactly where they need to go"
      examples:
        vague: "You have a new message" → Opens app home
        specific: "Sarah messaged you" → Opens that conversation

    action_buttons:
      ios_actions:
        - quick_reply: "Reply directly from notification"
        - archive: "One-tap action without opening app"
        - custom: "App-specific actions"

      android_actions:
        - inline_response: "Text input in notification"
        - quick_actions: "Buttons for common tasks"
        - expandable: "More details on expand"

    rich_media:
      images:
        when: "Product photos, maps, user avatars"
        size: "Keep under 10MB"
        fallback: "Still works without image"

      videos:
        when: "Short clips (GIFs work well)"
        length: "<10 seconds"
        autoplay: "Muted by default"

  opt_in_and_permissions:
    requesting_permission:
      timing: "After user sees value, not immediately"
      context: "Explain why notifications are useful"

      examples:
        bad:
          timing: "On app launch, before user does anything"
          message: "Enable notifications?"

        good:
          timing: "After user completes first valuable action"
          message: |
            Get notified when:
            ✓ Friends comment on your posts
            ✓ Your orders ship
            ✓ You have new messages

            [Enable Notifications] [Not now]

    permission_priming:
      technique: "Show custom UI before system prompt"
      benefit: "Higher opt-in rate, user understands value"

      flow:
        step_1: "Your custom explanation UI"
        step_2: "User taps 'Enable'"
        step_3: "System permission prompt appears"
        step_4: "User already committed, likely to allow"

    preference_center:
      give_control: "Let users choose what they get"

      categories:
        - promotional: "Sales and special offers"
        - updates: "New features and improvements"
        - social: "Comments, likes, follows"
        - reminders: "Task reminders and deadlines"

      granularity: "Frequency control per category"

  testing_and_optimization:
    a_b_testing:
      test_variables:
        - copy: "Different headlines/body text"
        - timing: "Morning vs evening"
        - emoji: "With vs without"
        - personalization: "Generic vs personalized"
        - media: "With vs without image"

      sample_size: "Minimum 1000 per variation"
      metrics: "Open rate, action rate, opt-out rate"

    metrics_to_track:
      delivery_rate: "{{sent vs delivered}}"
      open_rate: "{{opened / delivered}}"
      action_rate: "{{clicked_or_acted / opened}}"
      opt_out_rate: "{{disabled_notifications / sent}}"
      conversion: "{{completed_goal_action}}"

    optimization_tactics:
      improve_opens:
        - better_titles: "More compelling hooks"
        - timing: "Optimize send time"
        - relevance: "Better targeting"

      improve_actions:
        - clear_cta: "Obvious next step"
        - deep_links: "Reduce friction"
        - value: "Stronger benefit communication"

      reduce_opt_outs:
        - frequency_caps: "Don't spam"
        - relevance: "Segment better"
        - preference_center: "Give control"
        - value: "Only send valuable notifications"

  platform_specific_considerations:
    ios:
      character_limits:
        - title: "~65 characters before truncation"
        - body: "~178 characters before truncation"
        - expanded: "More visible when expanded"

      features:
        - notification_grouping: "Thread by app/topic"
        - critical_alerts: "Override Do Not Disturb"
        - provisional_auth: "Quiet notifications first"

    android:
      character_limits:
        - title: "~65 characters"
        - body: "~240 characters"
        - expanded: "Can show more"

      features:
        - notification_channels: "Users control by category"
        - expandable_layouts: "Big text, big picture, inbox style"
        - inline_actions: "More action buttons"

    web:
      character_limits:
        - title: "~50 characters"
        - body: "~120 characters"

      features:
        - permission_required: "Explicit browser permission"
        - desktop_native: "Native OS notifications"

  ethical_guidelines:
    respect_user_attention:
      - valuable_only: "Don't notify for trivial things"
      - user_control: "Easy to customize or disable"
      - quiet_hours: "Respect sleep and focus time"
      - frequency_caps: "Don't spam"

    transparency:
      - clear_sender: "Obviously from your app"
      - honest_urgency: "Don't fake urgency"
      - accurate_content: "Preview matches destination"

    accessibility:
      - meaningful_titles: "Understandable without body"
      - no_images_only: "Must work as text"
      - screen_reader_friendly: "Clear, simple language"
```

=== EXAMPLES ===

**Example 1: Behavioral Re-engagement**

```
TITLE: Your 15-day streak is about to break! 🔥
BODY: Quick 5-min lesson keeps it alive. Tap to continue.
TIMING: 8pm on day without activity
ACTION: [Practice now]
DEEP LINK: /lessons/quick-review
```

**Example 2: Transactional Update**

```
TITLE: Your order has shipped! 📦
BODY: Arriving Tuesday, March 19. Track: PKG123456
TIMING: Immediately when shipped
ACTIONS: [Track package] [Contact support]
DEEP LINK: /orders/78234/tracking
```

**Example 3: Social Engagement**

```
TITLE: Sarah and 12 others liked your photo
BODY: "Great shot!" See all reactions
TIMING: Batched after 15 minutes of activity
ACTION: [View post]
DEEP LINK: /posts/98765
```

**Example 4: Milestone Achievement**

```
TITLE: You hit your goal! 🎯
BODY: 10,000 steps today. You're on a 7-day streak.
TIMING: Evening, when goal achieved
ACTIONS: [Share] [View stats]
DEEP LINK: /achievements/steps-goal
```

**Example 5: Time-Sensitive Offer**

```
TITLE: Flash sale: 40% off ends in 3 hours ⏰
BODY: Your favorites are included. Use code: FLASH40
TIMING: Mid-day for visibility
ACTIONS: [Shop now] [Browse sale]
DEEP LINK: /sale/flash-march
```

**Example 6: Cart Abandonment**

```
TITLE: Still thinking it over? 🛒
BODY: {{Product_name}} is waiting. Free shipping today only.
TIMING: 2 hours after cart abandonment
ACTIONS: [Complete order] [View cart]
DEEP LINK: /checkout/cart
```

**Example 7: Informational Daily Digest**

```
TITLE: Your daily summary 📊
BODY: 8 tasks done, 3 remaining. You're ahead of schedule!
TIMING: 6pm daily
ACTIONS: [See tasks] [Plan tomorrow]
DEEP LINK: /dashboard/today
```

---

**Accessibility Requirements**: Clear, simple language. Meaningful titles that work standalone. Don't rely only on emoji. Screen reader friendly. Provide context without images. Actionable without opening app when possible. Respect system accessibility settings. Support text scaling.

**Psychological Principles**: Curiosity gap (make them want to open). Loss aversion (don't break streak, don't miss out). Social proof (others are engaging). Progress principle (milestone notifications). Urgency (time-limited). Reciprocity (provided value, now asking action). Variable rewards (not every notification is same). Zeigarnik effect (incomplete tasks). Authority (trusted source). Commitment (build on streaks).

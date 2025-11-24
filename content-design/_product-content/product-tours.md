## Product Tours Generator v1.0

**Purpose**: Guide new users through product features with interactive, contextual walkthroughs that drive activation, reduce time-to-value, and build confidence without overwhelming or blocking workflows.

---

**PROMPT:**

You are a product content designer at {{company_name}} creating product tours for {{user_segment}} using {{product_name}}. Design tours that achieve {{activation_rate}}% activation and reduce time-to-first-value to {{target_days}} days while maintaining {{completion_rate}}% tour completion.

=== TOUR CONTEXT ===
- Tour type: {{type}} (first_time_user/feature_specific/role_based/reengagement)
- Product complexity: {{complexity}} (simple/moderate/complex)
- User segment: {{segment}} (new_users/role_switchers/feature_adopters/power_users)
- Tour length: {{steps}} steps
- Estimated completion time: {{duration}} minutes
- Primary goal: {{goal}} (activation/feature_adoption/education/confidence_building)
- Can skip: {{skippable}} (yes/always/after_step_3/no)

=== DESIGN STRATEGY ===
- Interaction model: {{interaction}} (tooltips/modal/sidebar/inline/video)
- Personalization: {{personalization}} (role_based/use_case_based/behavior_triggered/generic)
- Tone: {{tone}} (friendly/professional/playful/enthusiastic)
- Progress indicators: {{progress}} (step_counter/progress_bar/checklist/none)
- Completion incentive: {{incentive}} (badge/discount/feature_unlock/none)

=== OUTPUT REQUIREMENTS ===

Generate comprehensive product tour content:

```yaml
product_tour:
  tour_structure:
    welcome_screen:
      when: "first login or feature access"
      purpose: "Set expectations and motivate completion"
      template: |
        Welcome to {{product_name}}! 👋

        Let's get you started with a quick {{duration}}-minute tour.

        You'll learn:
        • {{key_learning_1}}
        • {{key_learning_2}}
        • {{key_learning_3}}

        [Start tour] [Skip for now]

      design_principles:
        - "Show time commitment upfront"
        - "Highlight specific benefits"
        - "Make skipping easy (reduces pressure)"
        - "Use friendly, welcoming tone"
        - "Include visual preview if possible"

    tour_steps:
      step_template:
        step_number: "{{current}}/{{total}}"
        spotlight: "{{highlight_specific_ui_element}}"
        tooltip_position: "{{near_element_but_not_blocking}}"

        content:
          headline: "{{action_oriented_title}}"
          body: "{{brief_explanation_50_100_words}}"
          visual: "{{screenshot_or_animation_optional}}"
          action: "{{what_to_do_next}}"

        navigation:
          primary_cta: "{{next_step_or_try_it}}"
          secondary_cta: "{{back}}"
          tertiary: "{{skip_tour}}"

        character_limits:
          headline: 40
          body: 150
          action: 60

      progressive_disclosure:
        early_steps:
          detail_level: "high"
          interaction: "show, then let them try"
          validation: "{{confirm_understanding}}"

        middle_steps:
          detail_level: "medium"
          interaction: "explain, try, next"
          validation: "{{light_touch}}"

        final_steps:
          detail_level: "low"
          interaction: "quick overview"
          validation: "{{none}}"

    completion_screen:
      template: |
        🎉 You're all set!

        You've learned the essentials of {{product}}:
        ✅ {{accomplishment_1}}
        ✅ {{accomplishment_2}}
        ✅ {{accomplishment_3}}

        {{next_steps_guidance}}

        [{{primary_cta}}] [View help docs]

      celebration_elements:
        - confetti_animation: "{{optional_but_delightful}}"
        - achievement_badge: "{{gamification}}"
        - social_share: "{{optional}}"
        - next_steps_checklist: "{{recommended}}"

  tour_types:
    first_time_user_tour:
      goal: "Get to first value quickly"
      focus: "Essential actions only"
      steps: "3-5 steps max"
      duration: "2-3 minutes"

      structure:
        step_1:
          focus: "Core value proposition"
          action: "{{simplest_valuable_action}}"
          example: "Create your first project"

        step_2:
          focus: "Critical workflow"
          action: "{{next_essential_action}}"
          example: "Add a task to your project"

        step_3:
          focus: "Key differentiator"
          action: "{{unique_feature}}"
          example: "Invite a team member"

        completion:
          message: "You've created your first project! 🎉"
          next: "{{suggest_natural_next_action}}"

    feature_specific_tour:
      trigger: "user accesses new feature"
      goal: "Feature adoption"
      focus: "Single feature deep dive"
      steps: "4-7 steps"

      structure:
        step_1:
          focus: "What it is and why it matters"
          format: "{{feature}} helps you {{benefit}}"

        step_2:
          focus: "How to access it"
          format: "Find it here: {{location}}"

        step_3_to_n:
          focus: "Core capabilities"
          format: "{{capability}}: {{how_to_use}}"

        completion:
          format: "{{mastery_statement}} + {{advanced_tips_link}}"

    role_based_tour:
      personalization: "high"
      trigger: "user selects role or use case"
      variations:
        admin:
          focus: "Setup, configuration, user management"
          example_steps: ["Set up team", "Configure permissions", "Invite users"]

        editor:
          focus: "Content creation, collaboration"
          example_steps: ["Create content", "Use templates", "Share for review"]

        viewer:
          focus: "Navigation, consumption, feedback"
          example_steps: ["Find content", "Comment", "Track changes"]

    reengagement_tour:
      trigger: "user returns after {{days}} days inactive"
      goal: "Show what's new and re-activate"
      tone: "welcome back, here's what you missed"

      structure:
        step_1:
          message: "Welcome back! Here's what's new since {{last_visit}}"

        step_2_to_n:
          format: "New: {{feature}} - {{benefit}}"

        completion:
          message: "You're all caught up. Ready to jump back in?"

  interaction_patterns:
    tooltip_tour:
      appearance: "Small popover near UI element"
      blocking: false
      advancement: "User clicks next or interacts with element"
      best_for: "Simple, linear flows"

      design:
        max_width: "300px"
        pointer: "arrow to UI element"
        backdrop: "optional subtle dimming"
        z_index: "highest layer"

    modal_tour:
      appearance: "Center screen overlay"
      blocking: true
      advancement: "User clicks next"
      best_for: "Complex concepts, video content"

      design:
        max_width: "600px"
        backdrop: "dimmed background"
        close_button: "prominent X"
        progress: "step counter at bottom"

    sidebar_tour:
      appearance: "Slide-in panel from side"
      blocking: false
      advancement: "User clicks next, UI remains interactive"
      best_for: "Longer tours, reference material"

      design:
        width: "30-40% of screen"
        position: "right or left edge"
        scrollable: true
        minimizable: true

    inline_tour:
      appearance: "Embedded in page content"
      blocking: false
      advancement: "User scrolls or clicks"
      best_for: "Documentation-style learning"

      design:
        integration: "Feels like native content"
        progressive: "Reveal as user scrolls"
        interactive: "Try it here elements"

    video_tour:
      appearance: "Embedded video player"
      blocking: "optional"
      advancement: "Auto-plays or user-controlled"
      best_for: "Visual products, complex workflows"

      design:
        length: "30-90 seconds per concept"
        controls: "play, pause, skip"
        captions: "always available"
        transcript: "provided"

  writing_guidelines:
    voice_and_tone:
      welcoming: "You're in the right place"
      confident: "We'll get you up to speed quickly"
      encouraging: "You're doing great!"
      conversational: "Let's try this together"
      respectful: "Skip anytime if you know this already"

    content_principles:
      show_dont_tell:
        wrong: "The dashboard shows your metrics"
        right: "Your dashboard shows tasks completed, time saved, and team activity"

      action_oriented:
        wrong: "This is the create button"
        right: "Click here to create your first project"

      benefit_focused:
        wrong: "This is the filter feature"
        right: "Filter helps you find tasks instantly"

      concise:
        wrong: "In order to proceed to the next step of the process, you'll need to click the button labeled Continue"
        right: "Click Continue to move forward"

      encouraging:
        wrong: "Step 3 of 12"
        right: "You're making great progress! (Step 3 of 5)"

    language_patterns:
      headlines:
        - "{{Action verb}} {{object}}"
        - "Meet {{feature}}"
        - "{{Benefit}} with {{feature}}"

      body_copy:
        - "{{What it is}}: {{Brief description}}"
        - "{{Why it matters}}: {{Key benefit}}"
        - "{{How to use}}: {{Simple instruction}}"

      ctas:
        - "Try it now"
        - "Create your first {{object}}"
        - "Next: {{what's coming}}"
        - "Got it, continue"

  personalization_strategies:
    behavior_triggered:
      example: "Stuck on this step? Let me show you a shortcut"
      trigger: "{{user_inactive_30_seconds}}"

    role_based:
      example: "As a {{role}}, you'll mainly use {{features}}"
      trigger: "{{role_selection_or_detection}}"

    progress_based:
      example: "You've mastered the basics. Want to see advanced features?"
      trigger: "{{completed_basic_actions}}"

    time_based:
      example: "Welcome back! Here's what's new since yesterday"
      trigger: "{{return_visit}}"

  skipping_and_resuming:
    skip_options:
      always_available: "X button in corner"
      after_step_n: "Skip becomes available after {{n}} steps"
      with_confirmation: "Skip tour? You can restart anytime from Help menu"

    resume_logic:
      remember_progress: true
      offer_resume: "You're on step {{n}}. Continue or start over?"
      timeout: "{{days_before_reset}}"

    alternatives_to_skipping:
      minimize: "Minimize tour (continue later)"
      jump_ahead: "Skip to step {{n}}"
      change_pace: "Show me less detail"

  success_metrics:
    completion_rate:
      target: ">60%"
      measure: "{{completed_all_steps / started_tour}}"

    time_to_completion:
      target: "{{predicted_duration}} ± 20%"
      measure: "{{actual_time_spent}}"

    activation_impact:
      target: "{{percentage}}% lift in activation"
      measure: "{{activated_users_with_tour vs without}}"

    feature_adoption:
      target: "{{percentage}}% use feature after tour"
      measure: "{{used_feature_within_7_days}}"

    satisfaction:
      target: "{{rating}}/5 average"
      measure: "{{post_tour_feedback}}"

  tour_optimization:
    analytics_to_track:
      - step_drop_off: "{{which_steps_lose_users}}"
      - time_per_step: "{{where_users_get_stuck}}"
      - skip_rate: "{{too_long_or_not_valuable}}"
      - completion_correlation: "{{does_completion_predict_retention}}"

    common_issues:
      high_skip_rate:
        likely_cause: "Tour too long or not relevant"
        solution: "Shorten, personalize, or make optional"

      step_drop_off:
        likely_cause: "Step too complex or confusing"
        solution: "Simplify, add visual, or split into two steps"

      low_completion_impact:
        likely_cause: "Tour doesn't drive valuable actions"
        solution: "Refocus on activation metrics"

  accessibility_requirements:
    keyboard_navigation:
      - "Tab through all interactive elements"
      - "Enter/Space to activate"
      - "Escape to exit"
      - "Arrow keys for step navigation"

    screen_readers:
      - "Announce step number and total"
      - "Describe visual elements"
      - "Provide text alternatives for images"
      - "Announce state changes"

    visual_design:
      - "Sufficient contrast (4.5:1 minimum)"
      - "Don't rely on color alone"
      - "Text resizable to 200%"
      - "Focus indicators visible"

    user_control:
      - "Pauseable animations"
      - "No auto-advancing without option to disable"
      - "Clear way to exit at any time"
```

=== EXAMPLES ===

**Example 1: First-Time User Tour (Project Management App)**

Welcome Screen:
```
👋 Welcome to TaskFlow!

Let's get your first project started (takes 2 minutes)

You'll learn how to:
• Create a project
• Add and organize tasks
• Invite your team

[Start tour] [I'll explore on my own]
```

Step 1 of 4:
```
[Spotlight on "New Project" button]

Create your first project

Projects keep your tasks organized. Think of them like folders for related work.

Click "New Project" to get started.

[Next] [Skip tour]
```

Step 2 of 4:
```
[Spotlight on project name field]

Name your project

Try something like "Website Redesign" or "Q1 Marketing"

Go ahead, type a name now.

[2/4] [Back] [Skip]
```

Step 3 of 4:
```
[Spotlight on "Add Task" button]

Add your first task

Break your project into tasks - the individual things you need to do.

Click "Add Task" and create one now.

[3/4] [Back] [Skip]
```

Step 4 of 4:
```
[Spotlight on team invite icon]

Invite your team

TaskFlow works best with your team. Invite them to collaborate.

You can skip this and invite people later.

[Invite team] [Skip for now]
```

Completion:
```
🎉 Your first project is live!

You've learned:
✅ How to create projects
✅ How to add tasks
✅ How to invite teammates

Next steps:
• Add more tasks to your project
• Set due dates
• Try different views (Board, List, Calendar)

[Explore TaskFlow] [View help docs]
```

**Example 2: Feature-Specific Tour (Analytics Dashboard)**

Step 1 of 5:
```
[Highlight analytics icon]

📊 Meet your Analytics Dashboard

See how your content is performing with real-time insights.

Click the Analytics icon to open it.

[1/5]
```

Step 2 of 5:
```
[Highlight date range picker]

Choose your timeframe

View data from the last 7 days, 30 days, or any custom range.

Try changing to "Last 30 days"

[2/5] [Back]
```

Step 3 of 5:
```
[Highlight key metrics]

Your key metrics at a glance

Views, engagement rate, and top content - updated in real-time.

[3/5] [Back]
```

Step 4 of 5:
```
[Highlight export button]

Export your reports

Download as PDF or CSV to share with your team or stakeholders.

[4/5] [Back]
```

Step 5 of 5:
```
[Highlight custom dashboard builder]

Create custom dashboards

Build dashboards with the exact metrics you care about. Drag and drop any widget.

[Try it now] [5/5] [Back]
```

Completion:
```
You're an analytics pro! 📈

Ready to dive deeper?
• Set up automated reports
• Create custom dashboards
• Share insights with your team

[Create custom dashboard] [View advanced tips]
```

**Example 3: Role-Based Tour (Admin Role)**

Welcome:
```
Welcome, Admin! 👋

Let's set up TaskFlow for your team (4 minutes)

As an admin, you'll learn:
• How to invite team members
• Setting up projects and permissions
• Configuring team settings

[Get started] [Skip setup]
```

Step 1 of 6:
```
Invite your team

Go to Settings → Team Members to invite people.

Each person will get an email invitation with their login details.

Try inviting your first team member now.

[1/6]
```

Step 2 of 6:
```
Set permissions

Choose what each person can do:
• Admin - Full access
• Member - Create and edit
• Viewer - Read only

[2/6] [Back]
```

[Steps 3-6 continue with admin-specific setup]

---

**Accessibility Requirements**: Keyboard navigable (Tab, Enter, Esc). Screen reader compatible with step announcements. Text alternatives for all visuals. Pauseable animations. High contrast mode support. Resizable text. Option to replay any step. Alternative text-based version available. No time limits unless adjustable. Clear focus indicators.

**Psychological Principles**: Progressive disclosure (don't overwhelm). Quick wins (early success builds confidence). Clear progress (motivates completion). Control (can skip anytime). Completion reward (celebration creates positive association). Show don't tell (learning by doing is more effective). Contextual timing (show when relevant). Social proof (others have done this successfully).

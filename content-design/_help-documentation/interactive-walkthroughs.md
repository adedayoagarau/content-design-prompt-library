## Interactive Walkthrough Design v1.0

**Purpose**: Create guided, interactive product walkthroughs that teach users through hands-on experience, providing contextual instruction while users perform real actions within the application.

---

**PROMPT:**

You are designing interactive walkthroughs for {{product_name}}, a {{product_type}} used by {{user_segment}}. Create step-by-step guided experiences that teach users {{learning_goals}} through direct interaction, balancing instruction clarity with user agency and workflow integration.

=== WALKTHROUGH CONTEXT ===

**Product Information**:
- Product name: {{product_name}}
- Product type: {{product_type}} (SaaS platform/mobile app/web application/enterprise software)
- User segment: {{user_segment}}
- Learning goals: {{learning_goals}}
- Walkthrough scope: {{scope}} (single feature/complete workflow/full onboarding/advanced techniques)
- Complexity level: {{complexity_level}} (basic/intermediate/advanced)

**Implementation Strategy**:
- Walkthrough trigger: {{trigger_mechanism}} (auto-launch/optional/prompted/contextual)
- UI overlay type: {{overlay_type}} (modal/spotlight/inline/sidebar)
- Completion tracking: {{tracking_method}} (required/optional/skippable/resumable)
- User pace control: {{pace_control}} (user-driven/timed/adaptive)
- Device support: {{device_support}} (desktop/mobile/responsive)

=== WALKTHROUGH DESIGN ===

**Journey Stages**:
- Entry points: {{entry_points}}
- Core steps: {{step_count}}
- Decision branches: {{branch_points}}
- Success milestones: {{milestone_markers}}
- Exit points: {{exit_options}}
- Post-completion: {{follow_up_actions}}

=== OUTPUT REQUIREMENTS ===

```yaml
interactive_walkthrough_system:
  walkthrough_structure:
    introduction_screen:
      purpose: "Set expectations and motivate completion"
      components:
        heading: "Clear, benefit-focused title"
        description: "What user will learn (2-3 sentences)"
        time_estimate: "Realistic completion time"
        skip_option: "Always provide 'Skip' or 'Do this later'"
        start_cta: "Action-oriented button text"

      example_template: |
        # Welcome to [Product Name]!

        Let's get you set up in 3 minutes. You'll learn how to:
        • [Key skill 1]
        • [Key skill 2]
        • [Key skill 3]

        Estimated time: 3 minutes

        [Start Tour]  [Skip for now]

    step_progression:
      step_anatomy:
        spotlight_area: "Highlight specific UI element with overlay dimming rest"
        instruction_card: "Positioned near highlighted element"
        step_counter: "Show progress (e.g., 'Step 2 of 7')"
        navigation_controls: "Back, Next, Skip buttons"

      instruction_card_content:
        heading: "Action to take (imperative verb)"
        body_text: "Why this matters + brief explanation (1-2 sentences)"
        visual_cue: "Arrow or indicator pointing to element"
        expected_action: "What to click/type/select"

        template: |
          **Step [X] of [Total]: [Action Title]**

          [1-2 sentences explaining what and why]

          **What to do:**
          [Specific instruction]

          [◀ Back]  [Skip Tour]  [Next ▶]

    interaction_patterns:
      user_must_perform:
        behavior: "Walkthrough waits until user completes action"
        use_case: "Critical learning moments, core feature training"
        feedback: "Immediate confirmation when action completed correctly"

        example_flow:
          instruction: "Click the 'Create Project' button to continue"
          user_action: "[User clicks button]"
          system_response: "✓ Great! You've created your first project. Now let's add a task."

      auto_advance:
        behavior: "Moves to next step automatically after showing info"
        use_case: "Informational steps, tour-style walkthroughs"
        timing: "3-5 seconds or manual 'Next' click"

      guided_input:
        behavior: "Pre-fill or suggest input values"
        use_case: "Form completion, settings configuration"
        approach: "Provide sample data user can modify or accept"

        example: |
          **Name your first workflow**

          We've suggested a name, but feel free to change it.

          [Welcome Email Automation ←sample data]

          This will be the internal name for reference.

          [Continue when ready]

    branching_logic:
      conditional_paths:
        trigger: "Different steps based on user choices or account type"
        scenarios:
          - "New vs. existing data"
          - "Free vs. paid plan features"
          - "Role-based permissions"
          - "Previous experience level"

        example_branch:
          decision_point: "Do you have existing data to import?"
          option_a: "[Yes - Import Now] → Import walkthrough (5 steps)"
          option_b: "[No - Start Fresh] → Sample data walkthrough (3 steps)"

      adaptive_difficulty:
        trigger: "Adjust complexity based on user performance"
        easy_path: "User completes steps quickly → Skip basic explanation"
        detailed_path: "User struggles or takes time → Provide extra help"

    progress_indicators:
      step_counter:
        format: "Step 3 of 8"
        position: "Top of instruction card"
        purpose: "Set completion expectations"

      progress_bar:
        visual: "Horizontal bar showing percentage complete"
        position: "Top or bottom of screen"
        color: "Fills as steps complete"

      milestone_celebrations:
        trigger: "Every 25-30% completion or major checkpoint"
        format: "Brief congratulatory message with encouragement"

        example: |
          🎉 Great work!

          You're halfway through setup. In just 2 more minutes,
          you'll have your first automation running.

          [Continue]

    exit_and_resumption:
      exit_options:
        skip_tour: "Available on every step"
        exit_confirmation: "Warn before closing if significant progress made"
        save_progress: "Offer to resume later from same point"

        exit_dialog: |
          Are you sure you want to exit?

          You're 60% complete. We'll save your progress so you
          can pick up where you left off.

          [Exit and Save]  [Continue Tour]

      resumption_strategy:
        auto_prompt: "On next login: 'Continue where you left off?'"
        manual_access: "Help menu → 'Resume Getting Started Tour'"
        expiration: "Saved progress expires after 7 days"

  content_writing_guidelines:
    instruction_clarity:
      action_oriented: "Start with verb (Click, Enter, Select, Choose)"
      specific_targets: "Use exact UI label names in bold"
      one_action_per_step: "Don't combine multiple actions"
      concise: "Maximum 2-3 sentences per instruction"

      good_examples:
        - "Click the **Create** button in the top right corner"
        - "Enter your team name in the **Team Name** field"
        - "Select **Public** from the visibility dropdown"

      bad_examples:
        - "Now you'll want to find the button for creating things and click on it"
        - "Type something here" (too vague)
        - "Click this" (doesn't work without visual context)

    explanation_depth:
      minimal_context: "Just enough to understand why, not full feature documentation"
      benefit_focused: "Explain how this helps user, not just what it does"
      future_reference: "Mention where to find this feature later"

      example_balance:
        too_brief: "Set your timezone."
        too_detailed: "Timezones are a system of dividing the world into regions that observe uniform standard time. By setting your timezone in the application settings configuration panel located in the main navigation, you ensure that all timestamps are displayed in your local time according to the Coordinated Universal Time offset applicable to your geographic region."
        just_right: "Set your timezone so meetings and deadlines show in your local time. You can change this later in Settings."

    voice_and_tone:
      encouraging: "Celebrate progress, build confidence"
      conversational: "Write like a helpful colleague, not a manual"
      respectful_of_time: "Acknowledge they're investing time to learn"
      non-patronizing: "Helpful but not condescending"

      tone_examples:
        good: "Nice! Now let's add your first team member."
        avoid: "Wow! You're so smart! You clicked the button correctly!"

    micro_interactions:
      success_confirmations:
        timing: "Immediate feedback when user completes action"
        format: "Checkmark icon + brief confirmation message"
        examples:
          - "✓ Project created successfully"
          - "✓ Perfect! You've sent your first invitation"
          - "✓ Settings saved"

      error_handling:
        validation_errors: "Gently guide to correct action"
        blocking_errors: "Offer specific fix or skip option"
        timeout_errors: "Allow retry or skip"

        example: |
          Hmm, it looks like that email format isn't quite right.

          Try entering a valid email like: name@company.com

          Or skip this step for now: [Skip]

  visual_design_patterns:
    spotlight_overlay:
      active_element: "Full color, normal state"
      dimmed_background: "Semi-transparent dark overlay (60-80% opacity)"
      spotlight_shape: "Rounded rectangle or circle matching element"
      padding: "Include some breathing room around element"

    instruction_positioning:
      prefer_near_element: "Position card close to highlighted UI"
      avoid_covering: "Don't obscure the element being explained"
      responsive_placement: "Adjust position based on screen size and element location"
      maintain_visibility: "Ensure card stays in viewport"

    animation_and_transitions:
      step_transitions: "Smooth fade or slide between steps (300-500ms)"
      spotlight_movement: "Animated transition when spotlight moves"
      micro_animations: "Subtle pulse or glow on highlighted element"
      avoid_jarring: "No sudden changes or harsh movements"

  accessibility_standards:
    keyboard_navigation:
      tab_sequence: "Walkthrough controls in logical tab order"
      keyboard_shortcuts:
        - "Esc: Exit walkthrough"
        - "Enter: Advance to next step"
        - "Arrow keys: Navigate Back/Next"

    screen_reader_support:
      aria_labels: "Descriptive labels for all controls"
      announcements: "Announce step changes and progress"
      skip_links: "Option to skip directly to main content"
      focus_management: "Move focus to instruction card on step change"

    visual_accessibility:
      color_contrast: "4.5:1 minimum for all text"
      focus_indicators: "Clear visible focus states"
      animation_controls: "Respect prefers-reduced-motion"
      text_scaling: "Support 200% zoom without breaking"

  analytics_and_optimization:
    track_metrics:
      completion_rate: "Percentage who finish entire walkthrough"
      drop_off_points: "Which steps cause abandonment"
      time_per_step: "Where users spend most time (confusion indicator)"
      skip_frequency: "How many users skip vs. complete"

    optimization_strategy:
      high_drop_off: "Simplify step, split into smaller steps, or clarify instruction"
      long_time_spent: "Add more detailed guidance or break into sub-steps"
      frequent_skips: "Make walkthrough optional or shorter"
      low_completion: "Reduce total step count or break into multiple walkthroughs"

  walkthrough_types:
    first_run_onboarding:
      trigger: "Automatic on first login"
      scope: "Essential features only (5-10 steps)"
      goal: "Get user to first value quickly"
      completion_reward: "Access to full product or achievement badge"

    feature_introduction:
      trigger: "When new feature launches or user accesses for first time"
      scope: "Single feature deep-dive (3-7 steps)"
      goal: "Teach one specific capability"
      skippable: "Always optional"

    advanced_workflows:
      trigger: "User initiates from help menu"
      scope: "Complex multi-step processes (10-20 steps)"
      goal: "Master advanced techniques"
      resumable: "Can pause and return later"

    contextual_tooltips_tour:
      trigger: "Persistent tooltips that user can click through"
      scope: "Self-paced exploration"
      goal: "Discover features organically"
      format: "Numbered hotspots user can click in any order"
```

=== EXAMPLES ===

**Example 1: Project Management Tool - First-Time Setup**
- product_name: "TeamFlow"
- product_type: "Collaborative project management SaaS"
- user_segment: "Small business teams"
- learning_goals: "Create first project, add task, invite team member"
- step_count: 7 steps
- trigger_mechanism: "Auto-launch on first login"

Walkthrough Flow:
```
[INTRO SCREEN]
# Welcome to TeamFlow!

Let's create your first project together. You'll learn how to:
• Set up a project workspace
• Add your first task
• Invite a team member

This takes about 2 minutes.

[Start Setup]  [I'll explore on my own]

---

[STEP 1 of 7]
**Create Your First Project**

Projects help you organize work by team, client, or initiative.

**What to do:**
Click the **+ New Project** button in the top left

[◀ Back]  [Skip Tour]

[User clicks button → Walkthrough advances]

---

[STEP 2 of 7]
**Name Your Project**

We've suggested a name, but feel free to change it to match your first project.

[My First Project ←pre-filled]

**What to do:**
Edit the name if you'd like, then press Enter or click Next

[◀ Back]  [Next ▶]

---

[STEP 3 of 7]
✓ Perfect! Your project "Marketing Campaign" is created.

**Add Your First Task**

Tasks are individual to-dos within your project.

**What to do:**
Click **+ Add Task** in the task list

[◀ Back]  [Skip Tour]

[Continues through remaining steps...]

---

[COMPLETION SCREEN]
🎉 You're all set!

You've created your first project, added a task, and invited your team.

**Next steps:**
• Explore templates in the Template Gallery
• Set up your first automation
• Watch our 3-minute video on project views

[Go to My Project]  [Browse Templates]
```

**Example 2: Design Tool - Advanced Feature Walkthrough**
- product_name: "PixelPro"
- product_type: "Graphic design web application"
- learning_goals: "Master layer masking technique"
- step_count: 5 steps
- trigger_mechanism: "User-initiated from Help menu"

Walkthrough Excerpt:
```
[STEP 1 of 5]
**Create a Layer Mask**

Layer masks let you hide parts of a layer without permanently deleting them—perfect for non-destructive editing.

See the image of the coffee cup? We'll mask out the background.

**What to do:**
With the coffee cup layer selected, click the **Add Mask** icon at the bottom of the Layers panel (it looks like a rectangle with a circle)

[Visual: Animated arrow pointing to mask icon]

[◀ Back]  [Skip Tour]

---

[STEP 2 of 5]
✓ Great! Notice the white rectangle that appeared next to your layer thumbnail? That's your mask.

**Paint to Hide**

Anything you paint black on the mask will hide that part of the layer.

**What to do:**
Select the Brush tool (or press B), then paint over the background around the coffee cup

💡 Tip: Black hides, white reveals. Paint with black to hide areas.

[User paints on canvas → Detects painting action]

---

[STEP 3 of 5]
✓ Excellent! See how the background is disappearing?

[Interactive element: Slider showing before/after]

[Continues...]
```

**Example 3: Mobile Banking App - Contextual Walkthrough**
- product_name: "SwiftBank"
- product_type: "Mobile banking app"
- learning_goals: "Set up mobile deposit"
- step_count: 4 steps
- trigger_mechanism: "Appears when user taps 'Deposit Check' for first time"

Mobile Walkthrough:
```
[OVERLAY CARD - Bottom sheet]
**First Time Depositing a Check?**

Let us walk you through it. Takes 30 seconds.

[Show Me How]  [No Thanks]

---

[STEP 1 of 4]
**Position Your Check**

Place your check on a dark surface in good lighting.

[Illustration showing check on dark background]

**What to do:**
Tap **Start Camera** when you're ready

[< Back]  [Skip]  [Start Camera >]

---

[STEP 2 of 4]
**Capture Front of Check**

Line up the check within the guides. We'll automatically capture when it's clear.

[Camera view with overlay guides]

💡 Tip: Keep the check flat and fill the frame

[Detecting check... ]

✓ Front captured!

[Advancing automatically in 1 second...]

---

[STEP 3 of 4]
**Now Flip to the Back**

Endorse your check by signing the back, then line it up again.

[User captures back]

✓ Back captured!

---

[STEP 4 of 4]
**Review and Deposit**

Check amount: $523.00
Depositing to: Checking (...4892)

Everything look correct?

[Edit]  [Deposit Now]

---

[SUCCESS SCREEN]
✅ Check Deposited!

Your $523.00 deposit is being processed.
Funds typically available within 1 business day.

[View Receipt]  [Done]
```

---

**Accessibility Requirements**: Interactive walkthroughs must meet WCAG 3.0 Level AA standards. Ensure keyboard navigation for all steps (Tab, Enter, Esc). Use ARIA live regions to announce step changes to screen readers. Provide clear focus indicators on interactive elements. Maintain 4.5:1 color contrast for all text and controls. Respect prefers-reduced-motion for animations. Don't use spotlight overlays that completely block access to underlying UI—maintain keyboard accessibility. Provide text alternatives for visual cues and animations. Support screen magnification up to 200%.

**Psychological Principles**: Learning by doing (active learning more effective than passive reading). Immediate feedback reinforces correct actions (operant conditioning). Progress indicators motivate completion (goal-gradient effect). Breaking complex tasks into small steps reduces overwhelm (chunking). Success celebrations build confidence (self-efficacy). User control over pacing respects agency (autonomy principle). Contextual learning improves retention (situated learning theory).

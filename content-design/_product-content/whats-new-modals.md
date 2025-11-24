## What's New Modals Generator v1.0

**Purpose**: Welcome returning users with contextual update notifications that highlight value without interrupting workflow, driving engagement with new features while respecting user time and attention.

---

**PROMPT:**

You are a product content designer at {{company_name}} creating "What's New" modals for {{user_segment}}. Design notifications that increase {{engagement_metric}} by {{target_percentage}}% while maintaining {{dismissal_rate}}% or lower dismissal rate.

=== MODAL CONTEXT ===
- Update type: {{update_type}} (major_release/feature_update/improvement_bundle/onboarding_update)
- Target users: {{user_segment}} (new_users/returning_users/power_users/inactive_users)
- Number of updates: {{update_count}} (single/multiple/tour)
- User frequency: {{user_frequency}} (daily/weekly/monthly/returning)
- Last seen: {{days_since_last_visit}} days ago
- Show frequency: {{frequency}} (once/per_session/until_engaged/dismissible)

=== DESIGN STRATEGY ===
- Timing: {{timing}} (immediate_login/after_first_action/contextual_trigger/delayed)
- Visual style: {{visual_style}} (minimal/illustrated/screenshot/video)
- Interaction type: {{interaction}} (passive/interactive/tutorial/checklist)
- Tone: {{tone}} (excited/helpful/professional/casual)
- Primary goal: {{goal}} (awareness/adoption/education/re_engagement)

=== OUTPUT REQUIREMENTS ===

Generate contextual what's new modal content:

```yaml
whats_new_modal:
  display_logic:
    trigger: "{{when_to_show}}"
    conditions:
      - user_version: "{{user_last_version}} < {{current_version}}"
      - shown_before: false
      - user_role: "{{eligible_roles}}"
      - days_since_update: ">= {{minimum_days}}"

  header:
    badge: "What's New" # or "New Features", "Updates", custom
    title: "{{benefit_focused_headline}}"
    subtitle: "{{elaboration_or_context}}"
    close_button: true
    character_limits:
      title: 60
      subtitle: 120

  content_structure:
    single_update:
      visual: "[Screenshot or illustration]"
      headline: "{{feature_name}}"
      description: "{{what_it_does_and_why_it_matters}}"
      character_limit: 150
      cta: "{{action_verb}}"

    multiple_updates:
      format: "carousel" # or list, tabs, progressive
      updates:
        - priority: "high"
          visual: "[Screenshot]"
          headline: "{{primary_update}}"
          body: "{{key_benefit}}"
          cta: "Try it now"

        - priority: "medium"
          icon: "{{relevant_icon}}"
          headline: "{{secondary_update}}"
          body: "{{brief_description}}"

        - priority: "low"
          headline: "{{tertiary_update}}"
          body: "{{one_liner}}"

    interactive_elements:
      - checklist: "{{tasks_to_complete}}"
      - video_demo: "{{embedded_tutorial}}"
      - interactive_tour: "{{guided_walkthrough}}"
      - quick_action: "{{instant_try_button}}"

  messaging_patterns:
    benefit_first: "{{benefit}}, now available in {{product}}"
    capability_unlock: "Now you can {{new_ability}}"
    problem_solution: "{{pain_point}}? {{feature}} has you covered"
    time_save: "Save {{time_amount}} with {{feature}}"
    improvement: "{{feature}} just got {{improvement_descriptor}}"

  visual_design:
    images:
      type: "{{screenshot/illustration/animation/video}}"
      dimensions: "{{width}}x{{height}}"
      annotation: "{{highlight_new_element}}"
      alt_text: "{{descriptive_alt_text}}"

    layout:
      size: "{{small/medium/large/fullscreen}}"
      position: "{{center/contextual/inline}}"
      backdrop: "{{dimmed/blurred/solid}}"

  user_actions:
    primary_cta:
      text: "{{action_verb}} {{object}}"
      behavior: "{{dismiss_and_navigate/start_tour/try_feature}}"
      tracking: "{{analytics_event}}"

    secondary_cta:
      text: "Learn more" # or "Remind me later", "Skip tour"
      behavior: "{{open_docs/dismiss/snooze}}"

    tertiary_option:
      text: "Don't show again"
      behavior: "{{permanent_dismiss}}"
      warning: "{{optional_confirmation}}"

  progressive_disclosure:
    step_1:
      focus: "{{most_important_update}}"
      detail_level: "high"
      time_estimate: "30 seconds"

    step_2:
      focus: "{{supporting_updates}}"
      detail_level: "medium"
      format: "scannable_list"

    step_3:
      focus: "{{minor_updates}}"
      detail_level: "low"
      format: "collapsed_by_default"

  personalization:
    role_based:
      admin: "{{admin_specific_features}}"
      editor: "{{editor_workflow_improvements}}"
      viewer: "{{viewer_experience_updates}}"

    usage_based:
      power_user: "{{advanced_features}}"
      casual_user: "{{simplified_improvements}}"
      new_user: "{{foundational_features}}"

  engagement_optimization:
    relevance_scoring:
      - user_role_match: "{{0-1_score}}"
      - feature_usage_history: "{{0-1_score}}"
      - time_since_last_visit: "{{0-1_score}}"
      minimum_score: 0.7

    timing_rules:
      - not_during_critical_task: true
      - wait_for_idle_state: true
      - max_once_per_session: true
      - respect_notification_preferences: true

  accessibility:
    keyboard_navigation: true
    focus_management: "{{trap_focus_in_modal}}"
    escape_to_close: true
    screen_reader_announcement: "{{modal_opened_announcement}}"

  writing_guidelines:
    dos:
      - "Focus on user benefit, not feature specs"
      - "Use active voice and action verbs"
      - "Keep it scannable (bullets, short paragraphs)"
      - "Show, don't just tell (use visuals)"
      - "Make CTA specific and actionable"

    donts:
      - "Don't overwhelm with too many updates"
      - "Avoid jargon or technical terms"
      - "Don't block critical workflows"
      - "Skip marketing speak"
      - "Never auto-play videos with sound"
```

=== EXAMPLES ===

**Example 1: Single Major Feature**
- update_type: "major_release"
- feature_name: "AI Writing Assistant"
- target: "content creators"

Modal Content:
```
[Visual: Animated demo of AI assistant in action]

BADGE: "What's New"

TITLE: "Write better, faster with AI"

BODY: "Meet your new AI Writing Assistant. Get instant suggestions, improve clarity, and maintain your unique voice - all while you write.

✨ Smart completions as you type
🎯 Tone and clarity improvements
⚡ 10x faster first drafts

Try it now in any text field - just start typing and press Tab to accept suggestions."

PRIMARY CTA: "Try AI Assistant"
SECONDARY: "Learn more"
TERTIARY: "Remind me later"
```

**Example 2: Multiple Updates Carousel**
- update_type: "improvement_bundle"
- update_count: "3"
- format: "carousel"

Slide 1:
```
[Visual: Dashboard screenshot with highlighted elements]

TITLE: "Your dashboard, supercharged"

BODY: "We've redesigned your dashboard with the metrics that matter most."

• Customizable widgets
• Real-time updates
• Mobile-optimized

CTA: "Customize now"
PROGRESS: "1 of 3"
```

Slide 2:
```
[Visual: Filter interface screenshot]

TITLE: "Find anything instantly"

BODY: "New advanced filters let you search with precision. Save your favorites for one-click access."

CTA: "Try advanced filters"
PROGRESS: "2 of 3"
```

Slide 3:
```
[Icon: Calendar with checkmark]

TITLE: "More improvements"

BODY:
• Faster export processing
• Improved mobile navigation
• Dark mode refinements

CTA: "Got it"
LINK: "See full changelog"
PROGRESS: "3 of 3"
```

**Example 3: Returning User Re-engagement**
- user_segment: "inactive_users"
- days_since_last_visit: "45"
- goal: "re_engagement"

Modal Content:
```
[Visual: Friendly illustration with highlights]

BADGE: "Welcome back!"

TITLE: "A lot has changed in the last 2 months"

BODY: "We've been busy making {{product}} better. Here's what's new since you were last here:

**New:** Team collaboration tools
Share workspaces and work together in real-time

**Improved:** 3x faster performance
We rebuilt the core engine from the ground up

**Added:** 50+ integrations
Connect with the tools you already use

Ready to jump back in?"

PRIMARY CTA: "Show me around"
SECONDARY: "I'll explore on my own"

[Interactive checklist]
☐ Create your first team workspace
☐ Connect your favorite tools
☐ Invite your team
```

---

**Accessibility Requirements**: Keyboard navigable (Tab, Shift+Tab, Enter, Escape). Focus trapped within modal. Clear focus indicators. Screen reader announces modal opening. Close button clearly labeled. Images have descriptive alt text. Sufficient color contrast. Text resizable without breaking layout. No auto-playing audio.

**Psychological Principles**: Selective attention (show only relevant updates). Curiosity gap (make users want to learn more). Progress indicators (completion motivation). Social proof (usage statistics if available). Reciprocity (we improved things for you). Loss aversion (don't miss out on new capabilities). Zeigarnik effect (uncompleted checklist drives engagement).

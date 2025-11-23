## Cognitive Accessibility Content Design v1.0

**Purpose**: Create content and interface copy that supports users with cognitive disabilities including ADHD, dyslexia, autism, memory impairments, and learning disabilities through clear structure, predictable patterns, and reduced cognitive load.

---

**PROMPT:**

You are a cognitive accessibility specialist designing content for {{interface_type}} serving users with {{cognitive_considerations}} working on {{task_type}}.

=== USER CONTEXT ===
Cognitive considerations: {{cognitive_considerations}} (ADHD/dyslexia/autism/dementia/anxiety/learning disabilities)
Attention span: {{attention_span}} (limited/moderate/variable)
Memory challenges: {{memory_challenges}} (working memory/short-term/long-term)
Processing speed: {{processing_speed}} (slower processing/need extra time)
Sensory sensitivities: {{sensory_sensitivities}} (visual/auditory/motion)
Executive function: {{executive_function}} (planning/organization/task switching)

=== INTERFACE ANALYSIS ===
Interface type: {{interface_type}}
Task complexity: {{task_complexity}} (simple/multi-step/complex decision-making)
Information density: {{information_density}}
User control options: {{user_control_options}}
Time constraints: {{time_constraints}}
Error tolerance: {{error_tolerance}}

=== ACCESSIBILITY NEEDS ===
Primary challenges: {{primary_challenges}}
Support mechanisms: {{support_mechanisms}} (reminders/checkpoints/simplification)
Customization options: {{customization_options}}
Distraction management: {{distraction_management}}
Stress reduction: {{stress_reduction_needs}}

=== OUTPUT REQUIREMENTS ===

Generate cognitively accessible content:

```yaml
content_principles:
  clarity:
    simple_language:
      reading_level: "Grade 6-8 maximum"
      sentence_length: "15 words average, 20 maximum"
      word_choice: "Common, concrete words"
      avoid: "Idioms, metaphors, sarcasm, ambiguity"

    literal_meaning:
      directness: "Say exactly what you mean"
      no_implied_meaning: "Avoid requiring inference"
      examples:
        unclear: "You might want to save your work"
        clear: "Save your work now"

    consistent_terminology:
      same_word_same_concept: "Use identical terms for identical actions"
      examples:
        inconsistent: "Delete / Remove / Erase"
        consistent: "Delete (always)"

  structure:
    predictable_patterns:
      consistent_layout: "Same information in same location"
      repeated_structures: "Similar tasks use similar flows"
      navigation_stability: "Menus and controls stay in place"

    clear_hierarchy:
      visual_hierarchy: "Size, weight, color indicate importance"
      headings: "Descriptive, logical nesting (H1→H2→H3)"
      sections: "Clear boundaries between topics"

    chunking:
      information_grouping: "Related items together, 3-5 items per group"
      progressive_disclosure: "Show basics first, details on request"
      white_space: "Generous spacing reduces overwhelm"

  reduction:
    eliminate_distractions:
      minimal_decoration: "Avoid unnecessary visual elements"
      auto_play: "Never auto-play videos, audio, or animations"
      ads_popups: "Eliminate or minimize interruptions"

    focus_on_essential:
      one_goal_per_page: "Clear primary action"
      remove_redundancy: "Don't repeat unless for emphasis"
      hide_advanced_options: "Progressive disclosure for complexity"

interface_copy:
  headings_and_labels:
    descriptive_headings:
      format: "Question or clear statement"
      examples:
        vague: "Details"
        specific: "Shipping address"

    form_field_labels:
      format: "Clear question or instruction"
      examples:
        - label: "Email address"
          help_text: "We'll send your receipt here"
        - label: "Phone number (optional)"
          help_text: "Include area code: 555-123-4567"

  instructions:
    step_by_step:
      format: "Numbered list, one action per step"
      verb_first: "Start each step with action verb"
      example:
        - "1. Click the blue 'Save' button"
        - "2. Wait for the green checkmark"
        - "3. Click 'Continue'"

    visual_cues:
      color_and_icon: "Combine color with icon/text"
      directional: "Use arrows or highlighting"
      examples: "Show what result should look like"

  status_and_feedback:
    immediate_feedback:
      action_confirmation: "Confirm every user action"
      examples:
        - action: "File saved"
          visual: "Green checkmark + 'Saved at 2:34 PM'"
        - action: "Item added to cart"
          visual: "Cart icon updates with count + confirmation message"

    progress_indicators:
      show_progress: "Where user is in multi-step process"
      format: "Step 2 of 5: Payment information"
      what_comes_next: "Next step preview"

    error_messages:
      what_went_wrong: "Specific issue identified"
      how_to_fix: "Clear correction steps"
      where_to_fix: "Focus moved to error location"
      example: "Email address is missing. Please enter your email address above."

  time_and_pacing:
    no_time_pressure:
      avoid_timers: "Unless absolutely necessary"
      extend_timeouts: "Warn before timeout, allow extension"
      save_progress: "Auto-save and manual save options"

    user_paced:
      self_advancement: "User clicks 'Next', not auto-advance"
      pause_options: "Pause animations, videos, carousels"
      resume_capability: "Return to exact place after interruption"

memory_support:
  reduce_memory_load:
    visible_information:
      dont_require_memorization: "Show needed info when needed"
      examples:
        password_requirements: "Show requirements above field, not just on error"
        formatting_examples: "Show date format in placeholder: MM/DD/YYYY"

    contextual_help:
      inline_hints: "Help text near relevant field"
      tooltips: "Additional info on hover/focus"
      examples: "Show filled example"

  breadcrumbs_and_wayfinding:
    location_awareness:
      breadcrumb_trail: "Home > Products > Laptops > Dell XPS"
      section_highlighting: "Current page indicated in navigation"
      page_titles: "Clear, unique page titles"

    back_and_undo:
      easy_reversal: "Back button always available"
      undo_option: "Undo last action when possible"
      confirmation: "Confirm before destructive actions"

  reminders_and_prompts:
    task_reminders:
      unsaved_changes: "Warn before losing unsaved work"
      session_timeout: "Warning 2 minutes before timeout with extend option"
      next_steps: "Remind user of next action if idle"

decision_support:
  reduce_choices:
    smart_defaults: "Pre-select most common choice"
    limit_options: "Show 3-7 options at once (more in categories)"
    recommendations: "Suggest based on user's context"

  comparison_tools:
    side_by_side: "Compare options visually"
    highlighting_differences: "Show what's different between choices"
    examples: "Real scenarios for each option"

  guided_workflows:
    wizards: "Step-by-step for complex tasks"
    q_and_a_format: "One question at a time"
    smart_branching: "Show only relevant questions"

customization_options:
  user_preferences:
    reading_mode:
      simplified_view: "Remove sidebars, ads, extra elements"
      reading_guide: "Highlight current line/paragraph"
      dyslexia_friendly_font: "OpenDyslexic or similar option"

    focus_mode:
      distraction_free: "Hide all non-essential elements"
      dim_background: "Focus on primary content area"
      disable_animations: "Stop moving elements"

    timing_controls:
      extend_timeouts: "User can set longer timeout periods"
      pause_animations: "Stop auto-advancing carousels"
      replay_instructions: "Review guidance anytime"

  layout_adaptations:
    spacing_control: "Adjust text and element spacing"
    color_contrast: "High contrast mode"
    text_size: "Increase font size without breaking layout"

stress_and_anxiety_reduction:
  reassuring_tone:
    friendly_language: "Warm, supportive, never judgmental"
    error_handling: "It's okay' messaging, not blame"
    examples:
      critical: "No problem! We'll fix this together."
      supportive: "Don't worry, your work is saved."

  clear_consequences:
    preview_results: "Show what will happen before confirming"
    reversible_actions: "Allow undo when possible"
    safety_confirmations: "Confirm before permanent changes"

  progress_visibility:
    completion_percentage: "Show how much is done"
    achievement_markers: "Celebrate completed steps"
    remaining_tasks: "Clear view of what's left"

testing_with_users:
  cognitive_disability_testing:
    user_types:
      - "ADHD - test focus and distraction management"
      - "Dyslexia - test readability and layout"
      - "Autism - test literal language and predictability"
      - "Anxiety - test stress points and reassurance"
      - "Memory impairment - test wayfinding and reminders"

    evaluation_criteria:
      - task_completion: "Can user complete task independently?"
      - error_recovery: "Can user recover from mistakes?"
      - cognitive_load: "Does interface feel overwhelming?"
      - confidence: "Does user feel capable and supported?"

wcag_compliance:
  level_aaa_criteria:
    "3.1.5_reading_level": "Lower secondary education level or supplemental content"
    "2.2.3_no_timing": "Timing is not essential part of activity"
    "2.2.4_interruptions": "Interruptions can be postponed or suppressed"
    "2.2.5_re_authenticating": "Can continue activity after re-authentication"
    "3.2.5_change_on_request": "Context changes only on user request"
    "3.3.5_help": "Context-sensitive help available"
    "3.3.6_error_prevention": "Submissions are reversible, checked, or confirmed"
```

=== EXAMPLES ===

**Example 1: Multi-Step Form for Rental Application**
- interface_type: "web form"
- task_complexity: "multi-step with complex information"
- cognitive_considerations: "ADHD, anxiety, memory challenges"
- task_type: "complete rental application (high-stakes, stressful)"

**Output**:
```yaml
structure:
  step_indicator:
    format: "Step 2 of 5: Employment Information"
    progress_bar: "Visual bar showing 40% complete"
    what_completed: "✓ Personal Information"
    what_current: "→ Employment Information (you are here)"
    what_next: "References (next)"

  single_topic_per_step:
    step_1: "Personal Information (name, contact)"
    step_2: "Employment Information (job, income)"
    step_3: "References (contacts)"
    step_4: "Additional Information (pets, vehicles)"
    step_5: "Review and Submit"

interface_copy:
  section_heading:
    text: "Tell us about your current job"
    not: "Employment Verification Details"
    rationale: "Direct, conversational, less formal/intimidating"

  form_fields:
    - label: "Your employer's name"
      placeholder: "Example: ABC Company"
      help_text: "The name of the company you work for"
      required: true
      error_message: "Please enter your employer's name"

    - label: "Your job title"
      placeholder: "Example: Sales Manager"
      help_text: "Your position or role"
      required: true

    - label: "Monthly income (before taxes)"
      placeholder: "Example: 4,500"
      help_text: "Your gross monthly pay. Find this on your pay stub."
      required: true
      error_message: "Please enter your monthly income as a number (example: 4500)"

memory_support:
  auto_save:
    frequency: "Every 30 seconds and on field blur"
    indicator: "Saved at 2:34 PM' shown in footer"
    resume: "Return to exact step when coming back"

  contextual_help:
    pay_stub_example:
      trigger: "Info icon next to 'Monthly income'"
      content: "Image showing where to find gross monthly pay on typical pay stub"
      close: "Click anywhere to close"

stress_reduction:
  navigation:
    back_button: "← Back to Personal Information"
    back_behavior: "Returns to previous step, all data saved"
    exit_option: "Save and finish later (link)"
    exit_behavior: "Saves progress, sends email with return link"

  reassurance:
    auto_save_message: "Don't worry, we're saving your progress automatically."
    time_estimate: "This step takes about 3 minutes"
    help_available: "Need help? Call (555) 123-4567"

  review_step:
    full_summary: "All information displayed for review"
    edit_links: "Edit button next to each section"
    confirmation: "I've reviewed and this information is correct (checkbox)"
    submit_button: "Submit application"
```

**Example 2: Dashboard for Managing Medications**
- interface_type: "mobile health app"
- task_complexity: "ongoing medication tracking with reminders"
- cognitive_considerations: "memory impairment, elderly users, possible confusion"
- task_type: "track daily medications correctly and on time"

**Output**:
```yaml
interface_design:
  main_screen:
    heading: "Your medications for today"
    date: "Tuesday, March 15, 2024"
    visual_structure: "Large cards, one per medication, chronological order"

  medication_card:
    medication_name: "Metformin 500mg"
    time: "8:00 AM"
    status_visual:
      not_taken: "Large blue 'Take Now' button"
      taken: "Green checkmark + 'Taken at 8:05 AM'"
    image: "Photo of pill for visual recognition"
    purpose: "For your diabetes"
    with_food: "⚠️ Take with food"

memory_support:
  reminders:
    notification: "Time to take your Metformin"
    timing: "At medication time, with snooze option"
    snooze: "Remind me in 10 minutes"
    confirmation_required: "Must mark as taken or skipped"

  visual_cues:
    color_coding:
      not_taken: "Blue card"
      taken: "Faded green card with checkmark"
      missed: "Yellow card with 'Missed' indicator"

    icons:
      with_food: "Fork and knife icon"
      water: "Water glass icon"
      no_alcohol: "Crossed-out wine glass"

  medication_information:
    simple_format:
      what: "Metformin 500mg"
      why: "Controls your blood sugar for diabetes"
      when: "Twice a day: 8 AM and 8 PM"
      how: "Take with food and a full glass of water"
      important: "Don't skip doses. Call doctor if you miss two days."
      refill: "15 pills left. Refill by March 20."

decision_support:
  missed_dose_guidance:
    trigger: "User marks dose as missed or 2+ hours late"
    content: "You missed your 8 AM dose. What to do:\n\n• If it's before 2 PM: Take it now with food\n• If it's after 2 PM: Skip it and take your next dose at 8 PM\n• Never take two doses together\n\nCall your doctor if you're not sure: (555) 123-4567"

  refill_reminders:
    early_warning: "7 days before running out"
    message: "You have 7 doses left. Order refill now?"
    action_buttons:
      primary: "Call pharmacy to refill"
      secondary: "Remind me tomorrow"
```

**Example 3: Content Editor with Autistic Users**
- interface_type: "web-based writing tool"
- task_complexity: "creative and technical writing"
- cognitive_considerations: "autism (preference for literal language, predictable patterns, reduced sensory stimulation)"
- task_type: "write and format documents"

**Output**:
```yaml
interface_principles:
  literal_clear_labels:
    not: "Magic wand" or "Sparkle" for AI features
    use: "AI writing assistant"

    not: "Trash" icon
    use: "Delete" with text label

    rationale: "Autistic users may not interpret metaphorical icons correctly"

  predictable_behavior:
    consistent_actions:
      save_location: "Save button always in top-right"
      save_behavior: "Always saves with one click, no dialog"
      keyboard_shortcut: "Ctrl+S always saves, never opens dialog"

    no_surprises:
      auto_save: "On, but with visible indicator"
      auto_correct: "Off by default, user must enable"
      suggestions: "Available but not intrusive/automatic"

  sensory_considerations:
    minimal_animations:
      transitions: "Instant or very quick (< 100ms)"
      no_auto_play: "Nothing moves without user action"
      disable_option: "Settings > Reduce motion"

    visual_clarity:
      high_contrast: "Black text on white, or user-chosen theme"
      clear_focus: "Strong, simple focus indicator"
      no_clutter: "Clean interface, optional sidebars"

interface_copy:
  toolbar_labels:
    all_buttons_labeled:
      icon_plus_text: "Icon and text label for every button"
      examples:
        - "Bold (B icon + 'Bold' text)"
        - "Save (disk icon + 'Save' text)"
        - "Undo (arrow icon + 'Undo' text)"

    no_ambiguity:
      clear: "Decrease indent"
      not: "Outdent"

      clear: "Insert image"
      not: "Add media"

  status_messages:
    explicit_feedback:
      saved: "Document saved at 2:34 PM"
      not_saved: "Not saved yet"
      syncing: "Saving... (animated ellipsis)"
      sync_complete: "Saved to cloud"

  error_messages:
    specific_problem:
      error: "Cannot save document"
      reason: "No internet connection"
      solution: "Check your internet and try again. Your work is saved on this computer."
      not: "Something went wrong" (too vague)

customization:
  focus_mode:
    description: "Hide toolbars and sidebars"
    activation: "Toggle button 'Focus mode' or F11"
    visual: "Only text editor visible, everything else hidden"
    exit: "Press Escape to exit focus mode"

  sensory_settings:
    - setting: "Reduce motion"
      effect: "Disables all animations"
    - setting: "Simplify interface"
      effect: "Hides advanced features, shows only basics"
    - setting: "High contrast theme"
      effect: "Strong contrast, no subtle colors"
```

---

**Accessibility Requirements**: Must comply with WCAG 3.0 Level AAA Success Criteria 3.1.5 (Reading Level), 2.2.3 (No Timing), 2.2.4 (Interruptions), 3.2.5 (Change on Request), 3.3.5 (Help), and 3.3.6 (Error Prevention). Follow W3C Cognitive Accessibility Guidance and COGA (Cognitive and Learning Disabilities Accessibility) Task Force recommendations. Use plain language (grade 6-8). Provide consistent navigation, clear structure, and user control over timing and content. Test with users with cognitive disabilities across diverse conditions.

**Psychological Principles**: Cognitive load theory guides chunking and simplification. Working memory limitations inform step-by-step design. Attention restoration theory supports distraction reduction. Predictability reduces anxiety (uncertainty reduction). Clear feedback supports learning (operant conditioning). User control increases confidence (locus of control). Consistent patterns build automaticity (procedural learning).

## Task-Oriented Dialog Design v1.0

**Purpose**: Guide users through multi-step tasks efficiently with clear progress indicators and helpful guidance.

---

**PROMPT:**

Design task-oriented dialog for {{ai_system}} guiding users through {{task_name}} requiring {{step_count}} steps.

=== TASK CONTEXT ===
- Task complexity: {{complexity}} (simple/moderate/complex)
- Step count: {{step_count}}
- User expertise: {{expertise}} (novice/intermediate/expert)
- Error tolerance: {{error_tolerance}} (forgiving/strict)

=== OUTPUT REQUIREMENTS ===

```yaml
task_dialog:
  task_initiation:
    confirm_task:
      pattern: "{{acknowledge_goal}}. I'll help you {{task}}. {{time_estimate}}"
      example: "I'll help you set up your profile. This takes about 3 minutes."

    set_expectations:
      - "Number of steps"
      - "Time estimate"
      - "What you'll need"

  step_progression:
    step_template:
      pattern: |
        Step {{n}} of {{total}}: {{step_description}}

        {{instruction}}

        {{help_if_needed}}

      example: |
        Step 2 of 5: Connect your bank

        Choose your bank from the list below.

        Don't see yours? Search by name.

    progress_indicators:
      - "Step X of Y"
      - "Progress bar"
      - "Checklist"
      - "Breadcrumbs"

    step_confirmation:
      explicit: "Great! {{what_accomplished}}. Ready for the next step?"
      implicit: "✓ {{completed_action}}. Next, {{next_step}}."

  guidance_levels:
    minimal:
      when: "expert users, simple tasks"
      pattern: "{{instruction}}"

    moderate:
      when: "intermediate users"
      pattern: "{{instruction}}. {{brief_context}}"

    detailed:
      when: "novice users, complex tasks"
      pattern: "{{instruction}}. {{why}}. {{example}}. {{help}}"

  error_handling:
    validation_error:
      pattern: "{{field}} {{issue}}. {{requirement}}. Try: {{example}}"
      example: "Email format incorrect. Use: yourname@example.com"

    stuck_detection:
      trigger: "user hasn't progressed in {{timeout}}"
      message: "Need help with this step? I can {{offer_assistance}}"

  task_completion:
    success_message:
      pattern: |
        ✓ All done! {{achievement}}

        {{summary_of_what_was_accomplished}}

        {{next_suggested_action}}

      example: |
        ✓ Your profile is complete!

        You've added your photo, bio, and linked 2 accounts.

        Want to invite team members next?

  interruption_support:
    save_and_resume:
      auto_save: "Progress saved automatically"
      explicit_exit: "I've saved your progress. Continue anytime from Settings > Setup."
      resume: "Welcome back! Let's pick up at step {{n}}: {{step}}."
```

=== EXAMPLES ===

**Example 1: Account Setup (5 steps)**
- Task: "Create business account"
- Step 1: "Enter company name"
- Step 2: "Choose industry"
- Step 3: "Add team size"
- Step 4: "Connect payment method"
- Step 5: "Review and confirm"

**Example 2: Troubleshooting Flow (Variable steps)**
- Task: "Fix connection issue"
- Adaptive: "Adjust steps based on user responses"
- Step progression changes based on diagnostic results

---

**Accessibility Requirements**: Clear progress indicators. Support pause/resume. Allow jumping to steps (if appropriate). Keyboard navigation. Screen reader progress announcements.

**Psychological Principles**: Progress visibility motivates (goal gradient effect). Chunking reduces overwhelm (Miller's Law). Clear steps reduce anxiety. Completion celebration builds satisfaction.

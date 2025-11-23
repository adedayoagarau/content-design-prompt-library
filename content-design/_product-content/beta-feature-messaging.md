## Beta Feature Messaging Generator v1.0

**Purpose**: Communicate beta features with transparency and excitement, setting clear expectations about stability, collecting valuable feedback, and building community around product development.

---

**PROMPT:**

You are a product content designer at {{company_name}} launching {{feature_name}} in beta to {{user_segment}}. Create messaging that drives {{target_beta_users}} beta participants while setting appropriate expectations about {{maturity_level}} and collecting actionable feedback.

=== BETA CONTEXT ===
- Feature name: {{feature_name}}
- Beta stage: {{beta_stage}} (closed_alpha/closed_beta/open_beta/public_preview)
- Maturity level: {{maturity}} (experimental/functional/near_complete/release_candidate)
- Known limitations: {{limitations_list}}
- Expected beta duration: {{duration}} (weeks/months)
- Target participants: {{target_count}} users
- Data handling: {{data_policy}} (test_data_only/production_safe/may_reset)

=== MESSAGING STRATEGY ===
- Access method: {{access}} (invite_only/opt_in/feature_flag/all_users)
- Tone: {{tone}} (transparent/excited/cautious/collaborative)
- Feedback channels: {{feedback_method}} (survey/in_app/community/interviews)
- Risk level: {{risk}} (high/medium/low)
- Support level: {{support}} (full/limited/community/best_effort)

=== OUTPUT REQUIREMENTS ===

Generate comprehensive beta messaging:

```yaml
beta_messaging:
  announcement:
    headline:
      pattern: "{{feature_name}} is now in {{beta_stage}}"
      alternatives:
        - "Try {{feature_name}} before everyone else"
        - "Help shape {{feature_name}}"
        - "Early access: {{feature_name}}"
      tone: "exciting but honest"

    value_proposition:
      for_users: "{{why_participate}}"
      for_product: "{{what_we_learn}}"
      mutual_benefit: "{{collaborative_framing}}"

    body_structure:
      introduction: |
        We're excited to share {{feature_name}} with you! This beta gives you early access to {{capability}} while helping us build something great together.

      what_is_it: |
        {{feature_name}} {{what_it_does}}. It's designed to {{problem_solved}}.

      beta_status: |
        This is a {{beta_stage}}. That means:
        - {{expectation_1}}
        - {{expectation_2}}
        - {{expectation_3}}

      call_to_action: |
        {{participation_cta}}

  expectations_setting:
    maturity_indicators:
      experimental:
        description: "Early proof of concept"
        expect:
          - "Frequent changes and updates"
          - "Limited functionality"
          - "Possible bugs and performance issues"
          - "Features may be removed or changed significantly"
        data_warning: "Use test data only - data may not persist"

      functional:
        description: "Core functionality works"
        expect:
          - "Generally stable with occasional issues"
          - "Features mostly complete"
          - "UI may change"
          - "Safe for non-critical work"
        data_warning: "Production data ok, but backup important work"

      near_complete:
        description: "Nearly ready for launch"
        expect:
          - "Stable and reliable"
          - "Minor bugs possible"
          - "Mostly polish and refinement"
          - "Safe for daily use"
        data_warning: "Production-safe, data will persist"

      release_candidate:
        description: "Final testing before launch"
        expect:
          - "Production-quality"
          - "No major changes planned"
          - "Minor bugs only"
          - "Will become general availability soon"
        data_warning: "Fully production-safe"

  access_instructions:
    opt_in_flow:
      step_1: "Go to {{location}}"
      step_2: "Enable {{feature_toggle}}"
      step_3: "Accept beta terms"
      step_4: "{{first_action}}"

    invitation_flow:
      waitlist: "{{signup_form_copy}}"
      acceptance: "{{invitation_email_copy}}"
      onboarding: "{{first_time_guidance}}"

    feature_flag:
      admin_enable: "{{admin_instructions}}"
      user_discover: "{{how_users_find_it}}"

  ui_indicators:
    beta_badge:
      placement: "{{near_feature_name}}"
      text: "Beta"
      variants: ["Beta", "Preview", "Experimental", "Early Access"]
      color: "{{brand_accent_or_warning}}"
      tooltip: "{{maturity_explanation}}"

    in_app_messaging:
      first_use_tooltip: |
        👋 This is a beta feature
        {{brief_explanation}}
        {{feedback_link}}

      persistent_banner:
        when: "while using beta feature"
        message: "You're using {{feature}} (Beta) • {{feedback_cta}}"
        dismissible: true

      empty_states:
        message: |
          {{feature_name}} is in beta
          {{what_to_expect}}
          {{how_to_get_started}}

  feedback_collection:
    in_app_widget:
      placement: "{{contextual_to_feature}}"
      trigger: "{{after_usage/timed/on_exit}}"
      questions:
        - "How well did {{feature}} work for you?"
        - "What would make this better?"
        - "Any issues or confusion?"
      response_time: "<2 minutes"

    structured_surveys:
      frequency: "{{weekly/after_milestone/on_exit}}"
      topics:
        - usability: "{{5_point_scale}}"
        - value: "{{would_you_recommend}}"
        - bugs: "{{issue_reporter}}"
        - improvements: "{{open_ended}}"

    community_channels:
      dedicated_space: "{{forum_or_slack_channel}}"
      office_hours: "{{live_qa_sessions}}"
      beta_newsletter: "{{weekly_updates}}"

  limitation_communication:
    known_issues:
      format: |
        **Known Issues:**
        - {{issue_1}}: {{workaround_or_eta}}
        - {{issue_2}}: {{workaround_or_eta}}

      placement: "{{help_docs/modal/banner}}"

    feature_gaps:
      message: |
        Not yet available in beta:
        • {{missing_feature_1}} - Coming soon
        • {{missing_feature_2}} - Planned for GA

    performance_notes:
      when_relevant: |
        ⚠️ Performance: {{feature}} may be slower than expected during beta. We're optimizing before launch.

  support_guidelines:
    documentation:
      beta_specific_docs: true
      include_limitations: true
      feedback_form_linked: true
      update_frequency: "{{as_feature_evolves}}"

    support_channels:
      primary: "{{community_forum/beta_support_email}}"
      response_time: "{{best_effort/24_hours/business_hours}}"
      escalation: "{{for_critical_issues}}"

    faq_template:
      - question: "What does beta mean?"
        answer: "{{maturity_explanation}}"

      - question: "Is my data safe?"
        answer: "{{data_policy_explanation}}"

      - question: "What if I find a bug?"
        answer: "{{reporting_process}}"

      - question: "How long will beta last?"
        answer: "{{timeline_estimate}}"

      - question: "Can I stop using it?"
        answer: "{{opt_out_process}}"

  graduation_messaging:
    beta_to_ga:
      announcement: |
        {{feature_name}} is now generally available!

        Thanks to your beta feedback, we've:
        - {{improvement_1}}
        - {{improvement_2}}
        - {{improvement_3}}

        {{whats_next}}

      beta_badge_removal:
        notification: "{{feature}} has graduated from beta"
        changes: "{{what_changed_from_beta}}"

  legal_disclaimers:
    terms:
      - "Beta features provided 'as-is'"
      - "May contain bugs or incomplete functionality"
      - "Subject to change without notice"
      - "{{data_persistence_policy}}"
      - "{{support_limitations}}"

    placement: "{{terms_acceptance/help_docs}}"
    required_acceptance: "{{yes/no}}"
```

=== EXAMPLES ===

**Example 1: Experimental Feature (High Risk)**
- feature_name: "AI Code Generator"
- beta_stage: "closed_alpha"
- maturity: "experimental"
- risk: "high"

Messaging:
```
🧪 EXPERIMENTAL FEATURE

AI Code Generator (Alpha)
Help us build the future of coding

What is it?
Generate production-ready code from natural language descriptions. Our AI understands context and writes code in your team's style.

Alpha Status - What to Expect
This is very early. We're still experimenting with the core technology.

⚠️ Important:
• Always review generated code before using
• Use for learning and prototyping only
• Results will vary - this is experimental AI
• Your feedback directly shapes development
• Data may be used to improve the model

Not ready for production use.

Your Role
Help us understand what works and what doesn't. We need your honest feedback to make this amazing.

[Enable AI Code Generator]

Requirements:
• Test projects only
• Agree to alpha terms
• Provide weekly feedback

Questions? Join #ai-alpha-feedback
```

**Example 2: Functional Beta (Medium Risk)**
- feature_name: "Team Workspaces"
- beta_stage: "open_beta"
- maturity: "functional"
- risk: "medium"

Messaging:
```
BETA

Team Workspaces - Now in Open Beta

Work together in shared spaces with real-time collaboration. Invite your team, share projects, and stay in sync.

What works:
✅ Create and share workspaces
✅ Real-time collaboration
✅ Comment and discuss
✅ Permission management

Still improving:
🔧 Notification preferences
🔧 Mobile experience
🔧 Large file performance

Safe for daily use. Your data is secure and will persist.

Known Issues:
• Notifications may be delayed (working on it!)
• Mobile scrolling needs improvement
• Export limited to 100 items

We're actively fixing these based on your feedback.

[Try Team Workspaces]

Have feedback? Click the 💬 icon while using Workspaces.
```

**Example 3: Near-Complete Preview (Low Risk)**
- feature_name: "Advanced Analytics"
- beta_stage: "public_preview"
- maturity: "near_complete"
- risk: "low"

Messaging:
```
PREVIEW

Advanced Analytics
Get deeper insights before official launch

Build custom reports with our new analytics engine. Drag-and-drop metrics, create beautiful visualizations, and share insights with your team.

Why Preview?
We're polishing the experience based on your feedback before the official launch next month. The core functionality is production-ready.

What to expect:
✨ Stable and reliable
📊 Full feature set available
🎨 Minor UI refinements ongoing
💾 Production-safe - your dashboards will persist

Your feedback will help us:
• Prioritize the most-wanted visualizations
• Improve the dashboard builder UX
• Refine mobile responsiveness

[Access Advanced Analytics]

Preview ends April 30 - becomes generally available May 1

Questions? Visit our Preview FAQ or ask in the community forum.
```

---

**Accessibility Requirements**: Clear beta status indicators visible to screen readers. Keyboard-accessible feedback mechanisms. Captions for tutorial videos. Plain language explanations of technical limitations. Multiple feedback channels (not just visual forms). Documentation of known accessibility limitations in beta.

**Psychological Principles**: Exclusivity (early access appeal). Reciprocity (help us, we help you). Transparency builds trust (honest about limitations). Control (easy opt-out reduces anxiety). Collaborative framing (building together). Status (being part of shaping the future). Scarcity (limited access for closed betas).

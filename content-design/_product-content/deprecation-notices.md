## Deprecation Notices Generator v1.0

**Purpose**: Communicate feature deprecations with empathy and clarity, providing ample migration time, clear alternatives, and support resources to minimize disruption and maintain user trust during transitions.

---

**PROMPT:**

You are a product content designer at {{company_name}} announcing the deprecation of {{feature_name}} to {{affected_users}}. Create messaging that ensures {{migration_rate}}% successful migration by {{deadline_date}} while maintaining user satisfaction and trust.

=== DEPRECATION CONTEXT ===
- Feature being deprecated: {{feature_name}}
- Reason for deprecation: {{reason}} (technical_debt/security/replaced/low_usage/strategic)
- Affected users: {{user_count}} users ({{percentage}}% of total)
- Usage frequency: {{usage_level}} (critical/regular/occasional/rare)
- Deprecation timeline: {{timeline}} (announce -> warn -> restrict -> remove)
- Final shutdown date: {{end_date}}
- Data impact: {{data_handling}} (preserved/exported/deleted)

=== MIGRATION STRATEGY ===
- Alternative solution: {{replacement}} (new_feature/different_product/manual_process/none)
- Migration complexity: {{complexity}} (simple/moderate/complex/requires_development)
- Support provided: {{support_level}} (full_migration_service/guided/documented/self_service)
- Incentives offered: {{incentives}} (extended_timeline/priority_support/discounts)
- Backwards compatibility: {{compatibility_period}} (duration before complete removal)

=== OUTPUT REQUIREMENTS ===

Generate comprehensive deprecation communication:

```yaml
deprecation_notice:
  announcement_phases:
    initial_announcement:
      timing: "{{months_before_deprecation}}"
      audience: "all affected users"
      channels: ["email", "in_app", "blog", "documentation"]
      tone: "empathetic, transparent, helpful"

      message_structure:
        subject_line: "Important: Changes coming to {{feature_name}}"
        headline: "{{feature_name}} will be deprecated on {{date}}"

        opening:
          empathy: "We know {{feature}} is part of your workflow"
          transparency: "Here's why we're making this change"
          commitment: "We're here to help you transition smoothly"

        body_content: |
          **What's changing**
          {{feature_name}} will be deprecated on {{date}}. After this date, {{what_stops_working}}.

          **Why we're making this change**
          {{honest_reason}}

          **What you need to do**
          {{migration_overview}}

          **Timeline**
          {{key_dates_list}}

          **We're here to help**
          {{support_resources}}

        call_to_action:
          primary: "Review migration guide"
          secondary: "Contact support"

    reminder_notices:
      schedule:
        - timing: "90 days before"
          urgency: "low"
          message: "Reminder: {{feature}} deprecation in 3 months"

        - timing: "60 days before"
          urgency: "medium"
          message: "Action needed: Migrate from {{feature}} by {{date}}"

        - timing: "30 days before"
          urgency: "high"
          message: "⚠️ {{feature}} stops working in 30 days"

        - timing: "7 days before"
          urgency: "critical"
          message: "🚨 Final week: {{feature}} ends {{date}}"

      progressive_urgency:
        increase_frequency: true
        increase_prominence: true
        add_in_app_blocks: true

    final_notice:
      timing: "24 hours before"
      channels: ["email", "in_app_banner", "dashboard_alert"]
      message: |
        Final Reminder: {{feature_name}} ends tomorrow

        This is your last day to:
        • {{action_1}}
        • {{action_2}}
        • {{action_3}}

        Need help? We're standing by: {{support_contact}}

    post_deprecation:
      error_messages: "{{feature}} is no longer available. {{alternative_action}}"
      redirect_logic: "{{send_to_replacement_or_help}}"
      support_extension: "{{if_needed}}"

  timeline_communication:
    visual_timeline:
      format: |
        📅 Deprecation Timeline

        {{announcement_date}} - Today
        ├─ Announcement & migration guide published
        │
        {{milestone_1_date}} - {{milestone_1}}
        ├─ {{what_happens}}
        │
        {{milestone_2_date}} - {{milestone_2}}
        ├─ {{what_happens}}
        │
        {{end_date}} - {{feature}} removed
        └─ {{final_state}}

    key_dates:
      announcement: "{{date}}: Deprecation announced"
      feature_freeze: "{{date}}: No new {{feature}} instances"
      readonly_mode: "{{date}}: {{feature}} becomes read-only"
      final_export: "{{date}}: Last day to export data"
      shutdown: "{{date}}: {{feature}} fully removed"

  reason_communication:
    templates:
      technical_debt:
        message: "{{feature}} was built on older technology that limits our ability to innovate and maintain security standards."
        future_focus: "This allows us to invest in {{better_solution}}."

      security:
        message: "We've identified security limitations in {{feature}} that cannot be fully addressed without rebuilding."
        urgency: "To protect your data, we're moving to {{secure_alternative}}."

      replaced:
        message: "We've built {{new_feature}} which does everything {{old_feature}} did, plus {{additional_capabilities}}."
        benefit: "You'll get {{improved_experience}}."

      low_usage:
        message: "{{feature}} is used by fewer than {{percentage}}% of users. This allows us to focus resources on features that benefit more users."
        consideration: "We've reached out to all active users individually."

      strategic:
        message: "To deliver on {{strategic_vision}}, we're focusing our efforts on {{strategic_areas}}."
        clarity: "{{feature}} no longer aligns with this direction."

  migration_guidance:
    assessment:
      usage_check: |
        Do you use {{feature_name}}?

        ✅ Yes, regularly → {{detailed_migration_guide}}
        ⚠️ Yes, occasionally → {{quick_migration_steps}}
        ℹ️ Not sure → {{check_usage_tool}}
        ❌ No → No action needed

    step_by_step_guide:
      format: |
        # Migrating from {{old_feature}} to {{new_feature}}

        **Time required:** {{estimated_time}}
        **Difficulty:** {{difficulty_level}}

        ## Before you start
        {{prerequisites}}

        ## Step 1: {{action}}
        {{detailed_instructions}}
        {{screenshot_or_video}}

        ## Step 2: {{action}}
        {{detailed_instructions}}

        ## Step 3: {{action}}
        {{detailed_instructions}}

        ## Verification
        {{how_to_confirm_success}}

        ## Troubleshooting
        {{common_issues_and_solutions}}

    comparison_guide:
      format: |
        | Old Feature | New Feature | Notes |
        |------------|-------------|-------|
        | {{old_capability_1}} | {{new_equivalent_1}} | {{migration_note}} |
        | {{old_capability_2}} | {{new_equivalent_2}} | {{migration_note}} |
        | {{old_capability_3}} | {{not_available}} | {{workaround}} |

    automated_migration:
      when_available:
        announcement: "We can migrate most of your setup automatically"
        process: "{{what_auto_migrates}}"
        limitations: "{{what_needs_manual_work}}"
        cta: "Start automated migration"

  data_handling:
    export_options:
      self_service: |
        **Export your data before {{date}}**

        1. Go to {{location}}
        2. Click "Export {{data_type}}"
        3. Choose format: {{format_options}}
        4. Download file

        Your export includes:
        • {{data_type_1}}
        • {{data_type_2}}
        • {{data_type_3}}

      assisted_export:
        message: "We'll export your data for you"
        timeline: "{{when_it_happens}}"
        delivery: "{{how_you_receive_it}}"

    data_retention:
      policy: "{{feature}} data will be retained for {{duration}} after deprecation"
      access: "{{how_to_access_archived_data}}"
      deletion: "Final deletion on {{date}}"

  support_resources:
    documentation:
      - migration_guide: "{{comprehensive_how_to}}"
      - faq: "{{common_questions}}"
      - video_tutorial: "{{walkthrough}}"
      - api_changes: "{{for_developers}}"

    human_support:
      - office_hours: "{{live_migration_help_sessions}}"
      - dedicated_email: "{{deprecation_support_address}}"
      - priority_support: "{{for_enterprise_customers}}"
      - migration_service: "{{white_glove_for_complex_cases}}"

    community:
      - forum_thread: "{{peer_discussion}}"
      - migration_examples: "{{shared_solutions}}"
      - feedback_channel: "{{report_issues}}"

  in_app_indicators:
    warning_banners:
      severity_levels:
        info:
          when: "90+ days out"
          message: "ℹ️ {{feature}} will be deprecated on {{date}}. Learn more"
          color: "blue"
          dismissible: true

        warning:
          when: "30-90 days out"
          message: "⚠️ {{feature}} ends {{date}}. Migrate now"
          color: "yellow"
          dismissible: false

        critical:
          when: "<30 days"
          message: "🚨 {{feature}} ends in {{days}} days. Take action"
          color: "red"
          dismissible: false
          blocking: "{{optional}}"

    feature_badges:
      label: "Deprecated"
      tooltip: "{{feature}} will be removed on {{date}}. {{alternative}}"
      link: "{{migration_guide_url}}"

    modal_interruptions:
      when: "user attempts to use deprecated feature"
      frequency: "{{once_per_session/always}}"
      content: |
        {{feature_name}} is being deprecated

        {{brief_reason}}
        {{alternative_solution}}
        {{timeline}}

        [Migrate now] [Learn more] [Dismiss]

  communication_templates:
    empathetic_framing:
      - "We know this change affects your workflow"
      - "We're committed to making this transition smooth"
      - "Your data and work are safe"
      - "We're here to help every step of the way"

    clear_actions:
      - "Here's exactly what you need to do"
      - "We've made migration as simple as possible"
      - "Most users complete migration in {{time}}"

    transparency:
      - "Here's why we're making this change"
      - "We've considered alternatives"
      - "This decision allows us to {{benefit}}"
```

=== EXAMPLES ===

**Example 1: Simple Deprecation with Direct Replacement**
- feature_name: "Legacy File Uploader"
- reason: "replaced"
- complexity: "simple"
- timeline: "90 days"

Notice:
```
Subject: Legacy File Uploader will be removed on June 1

Important update about file uploads

We're deprecating the Legacy File Uploader on June 1, 2024.

Why we're making this change
The new uploader is faster, more reliable, and supports larger files. It's been available for 6 months and is already used by 85% of users.

What you need to do
Start using the new uploader. It works the same way - just drag and drop files anywhere.

The old "Upload" button will be replaced with the new drag-and-drop interface on June 1.

Timeline
• Today - Legacy uploader still works
• May 1 - Old uploader shows deprecation notice
• June 1 - Legacy uploader removed

No action required for most users. The new uploader will automatically become your default.

Questions? Visit our FAQ or contact support.
```

**Example 2: Complex Deprecation Requiring Migration**
- feature_name: "Classic Reporting API v1"
- reason: "technical_debt"
- complexity: "complex"
- timeline: "6 months"
- affected_users: "developers"

Notice:
```
Subject: Action Required: Reporting API v1 deprecation

To our developer community,

Classic Reporting API (v1) will be sunset on December 31, 2024.

Why we're making this change
API v1 was built in 2018 and lacks modern security features, rate limiting, and webhook support. We cannot add these capabilities without breaking changes.

API v2 is faster, more secure, and includes:
• Webhook notifications
• Batch operations (10x faster)
• Better error messages
• OAuth 2.0 support

What you need to do
Migrate integrations to API v2 by December 31, 2024.

Migration complexity: Moderate
Estimated time: 2-4 hours for typical integration
We've built migration tools to help.

Timeline
📅 Today (July 1) - Announcement, migration guide published
📅 September 1 - API v1 rate limits reduced (prep for shutdown)
📅 November 1 - API v1 becomes read-only (no new writes)
📅 December 31 - API v1 fully removed

Migration resources
• Step-by-step guide: [link]
• Code examples: [link]
• Auto-migration tool: [link]
• Office hours: Wednesdays 2-4pm PT
• Dedicated support: api-migration@company.com

We're here to help
Reply to this email with questions or book a 1:1 migration session.

For enterprise customers: Contact your account manager for white-glove migration assistance.
```

**Example 3: Deprecation Without Replacement**
- feature_name: "Experimental Social Sharing"
- reason: "low_usage"
- complexity: "simple"
- timeline: "60 days"

Notice:
```
Subject: Social Sharing experiment ending April 15

Update on experimental features

We're removing the Experimental Social Sharing feature on April 15, 2024.

Why we're making this change
Social Sharing was an experiment that didn't gain traction. Fewer than 2% of users tried it, and usage has declined. This allows us to focus on features that deliver more value.

What you need to do
If you've used Social Sharing:
1. Export your shared content before April 15
2. Download analytics if needed
3. Update any workflows that depend on it

Alternative solutions
• Use our Export feature, then share via email or Slack
• Try our new Collaboration Spaces (similar workflow, better experience)

Timeline
• Today - Feature still works, export available
• March 30 - Share buttons disabled (view/export only)
• April 15 - Feature fully removed

We reached out to all 47 active users individually. If you haven't heard from us, no action needed.

Questions? Reply to this email or contact support.
```

---

**Accessibility Requirements**: Clear, plain language explanations. Multiple notification channels (email, in-app, docs). Sufficient lead time for users with complex workflows. Visual timeline aids. Step-by-step guides with screenshots. Support via multiple channels (not just self-service). Text alternatives for any video guides. Keyboard-navigable migration tools.

**Psychological Principles**: Loss aversion (acknowledge what's being lost). Transparency builds trust (explain the why). Control (clear timeline and actions). Reciprocity (we're helping you migrate). Empathy (acknowledge disruption). Authority (we've thought this through). Social proof (others have already migrated successfully). Progress principle (show migration as achievable steps).

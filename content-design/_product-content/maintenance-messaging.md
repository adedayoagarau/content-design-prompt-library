## Maintenance Messaging Generator v1.0

**Purpose**: Communicate scheduled maintenance and service interruptions with transparency and precision, minimizing user disruption while maintaining trust through clear expectations and proactive updates.

---

**PROMPT:**

You are a product content designer at {{company_name}} announcing {{maintenance_type}} maintenance for {{service_name}}. Communicate to {{affected_users}} to minimize disruption while maintaining {{customer_satisfaction_target}}% satisfaction during {{maintenance_duration}}.

=== MAINTENANCE CONTEXT ===
- Maintenance type: {{type}} (planned/emergency/rolling/partial)
- Service affected: {{service_name}}
- Impact level: {{impact}} (full_outage/degraded_performance/read_only/specific_features)
- Affected users: {{user_scope}} (all_users/specific_regions/enterprise_only/specific_plans)
- Duration: {{duration}} (minutes/hours)
- Timing: {{scheduled_time}} ({{timezone}})
- Reason: {{reason}} (infrastructure_upgrade/security_patch/database_migration/performance_optimization)

=== COMMUNICATION STRATEGY ===
- Advance notice: {{notice_period}} (hours/days/weeks)
- Update frequency: {{frequency}} (hourly/every_30_min/as_needed)
- Channels: {{channels}} (email/status_page/in_app/social/support)
- Tone: {{tone}} (apologetic/matter_of_fact/reassuring/technical)
- Compensation offered: {{compensation}} (none/credit/extended_trial/sla_credit)

=== OUTPUT REQUIREMENTS ===

Generate comprehensive maintenance messaging:

```yaml
maintenance_messaging:
  pre_maintenance_announcement:
    timing: "{{days_before}} days before"
    channels: ["email", "in_app_banner", "status_page", "social"]

    email_notification:
      subject_line:
        planned: "Scheduled maintenance: {{service}} on {{date}}"
        emergency: "Emergency maintenance required: {{service}}"
        format: "Clear, date-specific, service-specific"

      body_structure:
        headline: "{{service}} scheduled maintenance"

        key_information:
          what: "{{service}} will be {{impact_description}}"
          when: "{{date}} at {{time}} {{timezone}}"
          duration: "Expected duration: {{hours}} hours"
          impact: "{{what_users_will_experience}}"

        detailed_message: |
          We're performing {{maintenance_type}} on {{date}} from {{start_time}} to {{end_time}} {{timezone}}.

          **What's happening:**
          {{technical_description_simple}}

          **Impact:**
          During this time, {{service}} will be {{impact_level}}.
          - {{specific_impact_1}}
          - {{specific_impact_2}}
          - {{specific_impact_3}}

          **Why we're doing this:**
          {{reason_user_friendly}}

          **What you should do:**
          {{recommended_user_actions}}

          **Timeline:**
          {{maintenance_timeline}}

          We'll send updates as maintenance progresses.

        footer:
          status_page: "Track live status: {{status_url}}"
          support: "Questions? {{support_contact}}"
          apology: "{{if_significant_disruption}}"

    in_app_notifications:
      banner:
        placement: "top of application"
        dismissible: false
        message: "⚠️ Scheduled maintenance {{date}} {{time}}. {{service}} will be unavailable for {{duration}}. [Learn more]"

      modal_warning:
        trigger: "{{days_before}} days and {{hours_before}} hours"
        content: |
          Upcoming maintenance

          {{service}} will be down for maintenance:
          📅 {{formatted_date_time}}
          ⏱️ Duration: ~{{duration}}

          {{impact_description}}

          {{what_to_do_before}}

          [View details] [Got it]

      countdown_timer:
        when: "<24 hours"
        format: "Maintenance in {{hours}}:{{minutes}}"
        location: "{{prominent_banner}}"

    status_page_update:
      format: |
        🔧 Scheduled Maintenance

        **Status:** Scheduled
        **Service:** {{service_name}}
        **Start:** {{datetime}} {{timezone}}
        **Expected end:** {{datetime}} {{timezone}}
        **Impact:** {{impact_description}}

        **Details:**
        {{maintenance_description}}

        **What to expect:**
        {{user_experience_during}}

        Last updated: {{timestamp}}
        [Subscribe to updates]

  during_maintenance_updates:
    start_notification:
      timing: "at start of maintenance"
      message: |
        Maintenance has started

        We've begun scheduled maintenance on {{service}}.

        Current status: {{what's_happening}}
        Expected completion: {{end_time}}

        We'll update you as we progress.

    progress_updates:
      frequency: "{{every_30_60_minutes}}"
      format: |
        Maintenance update

        Status: {{current_phase}}
        Progress: {{percentage_or_milestone}}
        Still on track: {{yes_or_adjusted_time}}

        Next update: {{next_update_time}}

    issue_updates:
      when: "if problems arise"
      message: |
        Maintenance update

        We've encountered {{issue_description}}.

        Revised completion time: {{new_estimate}}

        What this means: {{impact_explanation}}

        We'll update you in {{next_update_interval}}.

  completion_notification:
    success:
      timing: "immediately when complete"
      channels: ["email", "in_app", "status_page"]
      message: |
        Maintenance complete

        {{service}} maintenance completed successfully at {{completion_time}}.

        {{service}} is now fully operational.

        What's improved:
        • {{improvement_1}}
        • {{improvement_2}}

        Thank you for your patience.

    delayed_completion:
      message: |
        Maintenance extended

        We need additional time to complete maintenance safely.

        Revised completion: {{new_end_time}}

        Current status: {{what's_happening}}

        {{apology_and_explanation}}

    partial_restoration:
      message: |
        Service partially restored

        {{service}} is back online with limited functionality.

        Available now: {{working_features}}
        Still working on: {{unavailable_features}}
        Full restoration: {{expected_time}}

  emergency_maintenance:
    immediate_notification:
      urgency: "critical"
      message: |
        🚨 Emergency maintenance in progress

        We've identified a critical issue affecting {{service}}.

        To protect your data and restore service, we're performing emergency maintenance.

        Current status: {{service_state}}
        Estimated resolution: {{time_estimate}}

        What happened: {{issue_explanation}}

        We're actively working on this and will update you every {{interval}}.

      transparency:
        - "Explain what happened (within security bounds)"
        - "Be honest about timeline uncertainty"
        - "Update more frequently than planned maintenance"
        - "Show human acknowledgment of impact"

  maintenance_windows:
    regular_schedule:
      format: |
        Regular maintenance windows:
        {{day_of_week}} {{time_range}} {{timezone}}

        Most maintenance completes without downtime.
        We'll notify you of any service impact.

    best_practices:
      - "Choose low-traffic times"
      - "Consider global user distribution"
      - "Avoid critical business hours"
      - "Maintain consistent schedule"
      - "Announce schedule changes well in advance"

  user_impact_communication:
    full_outage:
      message: "{{service}} will be completely unavailable"
      details:
        - "You will not be able to access {{service}}"
        - "In-progress work should be saved before {{time}}"
        - "API requests will return 503 errors"
        - "Mobile apps will show offline message"

    degraded_performance:
      message: "{{service}} will be slower than usual"
      details:
        - "All features remain accessible"
        - "Response times may be 2-3x slower"
        - "Large operations may time out"
        - "We recommend postponing bulk actions"

    read_only_mode:
      message: "{{service}} will be in read-only mode"
      details:
        - "You can view all data"
        - "Creating, editing, and deleting will be disabled"
        - "Changes will be possible after {{time}}"
        - "Plan changes accordingly"

    partial_outage:
      message: "Some features will be unavailable"
      details:
        - "Available: {{working_features}}"
        - "Unavailable: {{affected_features}}"
        - "Core functionality continues working"
        - "{{workarounds_if_available}}"

  recommended_actions:
    templates:
      before_maintenance:
        - "Save your work before {{time}}"
        - "Download any needed reports"
        - "Complete time-sensitive tasks early"
        - "Inform your team of the downtime"
        - "{{service_specific_prep}}"

      during_maintenance:
        - "Avoid accessing {{service}}"
        - "Don't retry failed requests"
        - "Monitor status page for updates"
        - "{{alternative_workflow}}"

      after_maintenance:
        - "Clear your browser cache"
        - "Refresh the page"
        - "Verify recent changes saved"
        - "Report any issues to support"

  technical_audience_messaging:
    developer_focused:
      format: |
        API Maintenance Notice

        **Endpoint:** {{api_endpoints}}
        **Impact:** {{http_status_codes}}
        **Duration:** {{start_time}} - {{end_time}} UTC

        **Expected behavior:**
        - Requests will return: {{status_code}}
        - Rate limits: {{adjusted_limits}}
        - Webhooks: {{paused_or_queued}}

        **Recommended approach:**
        {{retry_logic_guidance}}

        **Breaking changes:** {{yes_or_no}}
        {{migration_notes}}

  compensation_messaging:
    sla_credits:
      when: "SLA violated"
      message: |
        About your service credit

        This maintenance exceeded our SLA commitment.

        You'll receive: {{credit_amount}} ({{percentage}}%)
        Applied to: {{next_billing_cycle}}
        No action needed - credit applied automatically.

    goodwill_gestures:
      significant_impact: |
        We know this disruption affected your work.

        As a gesture of goodwill:
        {{compensation_details}}

        We're also implementing {{preventive_measures}} to avoid this in the future.

  post_maintenance_communication:
    summary_email:
      timing: "{{hours}} hours after completion"
      content: |
        Maintenance completed: {{service}}

        Completed: {{completion_time}}
        Duration: {{actual_duration}} (planned: {{planned_duration}})

        **What we did:**
        {{technical_summary_user_friendly}}

        **Results:**
        • {{improvement_1}}
        • {{improvement_2}}
        • {{improvement_3}}

        **Service status:** Fully operational

        If you experience any issues, please contact {{support}}.

        Thank you for your patience.

    lessons_learned:
      when: "for significant incidents"
      include:
        - what_happened: "{{transparent_explanation}}"
        - why_it_happened: "{{root_cause}}"
        - how_we_responded: "{{timeline_of_actions}}"
        - preventing_recurrence: "{{concrete_steps}}"
```

=== EXAMPLES ===

**Example 1: Planned Infrastructure Upgrade**
- type: "planned"
- service: "Platform"
- impact: "full_outage"
- duration: "4 hours"
- notice: "2 weeks"

Pre-announcement Email:
```
Subject: Scheduled maintenance: Platform upgrade on March 15

Platform maintenance scheduled

We're upgrading our infrastructure on March 15, 2024.

When: March 15, 2:00 AM - 6:00 AM EST
Impact: Platform will be completely unavailable
Duration: ~4 hours

Why we're doing this:
We're migrating to new servers that are 3x faster and more reliable. This upgrade will improve performance and enable features you've requested.

What to do:
• Save your work before 2:00 AM EST on March 15
• Download any reports you need
• Inform your team of the downtime
• Plan time-sensitive tasks for before or after

Timeline:
• Today: Announcement
• March 14: Final reminder
• March 15, 2:00 AM: Maintenance begins
• March 15, ~6:00 AM: Service restored

We'll send updates throughout the maintenance window.

Track live status: status.company.com
Questions? support@company.com

We apologize for the inconvenience and appreciate your patience.
```

**Example 2: Emergency Security Patch**
- type: "emergency"
- service: "API"
- impact: "read_only"
- duration: "2 hours"
- notice: "30 minutes"

Emergency Notice:
```
Subject: 🚨 Emergency maintenance starting in 30 minutes

Emergency maintenance required

We've identified a critical security issue that requires immediate attention.

When: Starting in 30 minutes (3:00 PM EST)
Impact: API will be read-only during patch
Duration: ~2 hours

What happened:
We discovered a security vulnerability in our API authentication. No data has been compromised, but we must patch this immediately to protect your data.

Impact during maintenance:
✅ Read/GET requests work normally
❌ Write/POST/PUT/DELETE requests will fail
❌ New account creation disabled

What to do:
• Complete urgent write operations in the next 30 minutes
• Queue non-urgent updates for after 5:00 PM
• Monitor status.company.com for updates

We know this is sudden. We're prioritizing your data security and will work as quickly as possible.

Updates every 30 minutes at status.company.com
```

**Example 3: Rolling Update (No Downtime)**
- type: "rolling"
- service: "Application"
- impact: "none_expected"
- duration: "ongoing"

Announcement:
```
Subject: Backend improvements rolling out now

Performance improvements deploying

We're rolling out performance improvements over the next 2 hours.

When: Now through 5:00 PM EST
Impact: No downtime expected
What you might notice: Brief lag during updates

What we're doing:
Updating backend services to improve response times by 40%.

What to expect:
• Service remains available
• You may see 1-2 second delays during updates
• Any issues? Refresh your browser

No action needed from you. We'll notify you when complete.

This is the first of several improvements coming this month.

Track progress: status.company.com
```

---

**Accessibility Requirements**: Clear timing information in multiple formats (absolute dates and relative countdowns). Multiple notification channels for users who may not check email. Plain language explanations without jargon. Status page that's screen-reader compatible. Text alternatives for status indicators (not just color). Updates available via RSS/API for automated monitoring.

**Psychological Principles**: Transparency builds trust (explain the why). Control (give users prep time). Certainty (clear timeline reduces anxiety). Reciprocity (maintenance improves their experience). Status quo bias (acknowledge disruption to routine). Progress updates (shows you're actively working). Completion notification (closure). Post-incident communication (accountability and learning).

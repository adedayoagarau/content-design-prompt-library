## Status Page Updates Generator v1.0

**Purpose**: Communicate service health and incidents with clarity, transparency, and timeliness, keeping users informed during outages and building trust through honest, actionable updates.

---

**PROMPT:**

You are a product content designer at {{company_name}} managing status page communications for {{incident_type}} affecting {{service_name}}. Provide updates that maintain {{user_trust_level}} while resolving {{incident_severity}} incident within {{resolution_target}}.

=== INCIDENT CONTEXT ===
- Incident type: {{type}} (outage/degradation/partial_outage/planned_maintenance/security_incident)
- Affected service: {{service_name}}
- Severity: {{severity}} (critical/major/minor/maintenance)
- Scope: {{scope}} (global/regional/specific_customers/single_component)
- User impact: {{impact_percentage}}% of users affected
- Started: {{incident_start_time}}
- Customer-facing: {{customer_facing}} (yes/no)

=== COMMUNICATION STRATEGY ===
- Update frequency: {{frequency}} (every_15_min/every_30_min/hourly/as_major_changes_occur)
- Transparency level: {{transparency}} (full/limited/minimal)
- Technical detail: {{technical_depth}} (high/medium/low)
- Tone: {{tone}} (apologetic/matter_of_fact/urgent/reassuring)
- Escalation status: {{escalation}} (all_hands/core_team/on_call)

=== OUTPUT REQUIREMENTS ===

Generate comprehensive status page content:

```yaml
status_page_updates:
  incident_statuses:
    investigating:
      label: "Investigating"
      color: "yellow"
      meaning: "We're aware and diagnosing the issue"
      template: |
        **Investigating** - We're currently investigating {{issue_description}}.

        **Impact:** {{affected_services}} {{impact_description}}

        **Affected users:** {{scope}}

        We're actively working on this and will provide updates as we learn more.

        Posted: {{timestamp}}

    identified:
      label: "Identified"
      color: "orange"
      meaning: "We know the cause and are working on a fix"
      template: |
        **Identified** - We've identified the cause of {{issue_description}}.

        **Root cause:** {{technical_explanation_simplified}}

        **Current status:** {{what_we're_doing}}

        **Next steps:** {{planned_actions}}

        **Estimated time to resolution:** {{eta_or_unknown}}

        Posted: {{timestamp}}

    monitoring:
      label: "Monitoring"
      color: "blue"
      meaning: "Fix deployed, watching for stability"
      template: |
        **Monitoring** - A fix has been implemented and we're monitoring the results.

        **What we did:** {{fix_description}}

        **Current status:** {{current_state}}

        We're continuing to monitor service health. We'll provide another update in {{timeframe}}.

        Posted: {{timestamp}}

    resolved:
      label: "Resolved"
      color: "green"
      meaning: "Issue is completely fixed"
      template: |
        **Resolved** - This incident has been resolved.

        **Resolution:** {{what_fixed_it}}

        **Service status:** {{service_name}} is fully operational

        **Duration:** {{total_duration}}

        {{apology_if_significant}}

        {{post_incident_review_if_major}}

        Posted: {{timestamp}}

  severity_indicators:
    critical:
      icon: "🔴"
      label: "Critical Outage"
      description: "Complete service unavailability"
      update_frequency: "Every 15-30 minutes"
      escalation: "All hands on deck"

    major:
      icon: "🟠"
      label: "Major Incident"
      description: "Significant service degradation"
      update_frequency: "Every 30-60 minutes"
      escalation: "Core team engaged"

    minor:
      icon: "🟡"
      label: "Minor Issue"
      description: "Limited impact or workaround available"
      update_frequency: "As status changes"
      escalation: "On-call team"

    maintenance:
      icon: "🔵"
      label: "Scheduled Maintenance"
      description: "Planned work"
      update_frequency: "Start, progress, completion"
      escalation: "Scheduled team"

  update_types:
    initial_report:
      timing: "within 5 minutes of detection"
      content: |
        {{severity_icon}} {{service_name}} - {{issue_summary}}

        **Status:** Investigating

        We're aware that users are experiencing {{symptom_description}}.

        Our team is investigating and will provide updates as we learn more.

        **Affected services:**
        {{component_list}}

        **Timeline:**
        {{start_time}} - Issue detected

        Next update: {{next_update_time}}

      requirements:
        - "Acknowledge the issue immediately"
        - "Describe user-visible symptoms"
        - "List affected components"
        - "Set expectation for next update"

    progress_update:
      timing: "regular intervals + major milestones"
      content: |
        **Update** - {{status_level}}

        {{progress_description}}

        **What we know:**
        {{current_understanding}}

        **What we're doing:**
        {{current_actions}}

        **Impact:**
        {{current_impact_state}}

        **ETA:** {{estimated_resolution_or_tbd}}

        **Timeline:**
        {{previous_timestamps}}
        {{current_time}} - {{current_milestone}}

        Next update: {{next_update_time}} or when status changes

      requirements:
        - "Show progress being made"
        - "Update understanding of issue"
        - "Revise ETA if needed"
        - "Maintain update cadence"

    resolution_update:
      timing: "when issue is resolved"
      content: |
        ✅ **Resolved** - {{service_name}} is operational

        The issue affecting {{service_name}} has been resolved.

        **What happened:**
        {{incident_summary}}

        **Resolution:**
        {{what_fixed_it}}

        **Impact:**
        - Duration: {{total_time}}
        - Users affected: {{scope}}
        - Services impacted: {{components}}

        **Prevention:**
        {{what_we're_doing_to_prevent}}

        We apologize for the disruption and appreciate your patience.

        {{post_incident_review_link}}

      requirements:
        - "Confirm full resolution"
        - "Summarize what happened"
        - "Show duration and impact"
        - "Address prevention"
        - "Apologize appropriately"

    false_alarm:
      when: "issue resolves itself or was misidentified"
      content: |
        **Resolved** - False alarm

        Our monitoring indicated a potential issue with {{service}}, but investigation showed the service is operating normally.

        {{brief_explanation}}

        No user impact occurred.

        We're reviewing our alerting to reduce false positives.

  component_status_indicators:
    operational:
      icon: "✅"
      label: "Operational"
      description: "All systems normal"

    degraded_performance:
      icon: "⚠️"
      label: "Degraded Performance"
      description: "Slower than normal"

    partial_outage:
      icon: "🟠"
      label: "Partial Outage"
      description: "Some features unavailable"

    major_outage:
      icon: "🔴"
      label: "Major Outage"
      description: "Service unavailable"

    under_maintenance:
      icon: "🔧"
      label: "Under Maintenance"
      description: "Planned work in progress"

  messaging_best_practices:
    writing_guidelines:
      voice:
        - "Be direct and honest"
        - "Use active voice"
        - "Avoid jargon when possible"
        - "Be specific, not vague"
        - "Show empathy for impact"

      structure:
        - "Status label first"
        - "User impact before technical details"
        - "Timestamp every update"
        - "Set expectations for next update"
        - "Maintain running timeline"

      what_to_include:
        - "What's happening (symptoms)"
        - "Who's affected (scope)"
        - "What we're doing (actions)"
        - "When we'll update (cadence)"
        - "How to get help (support)"

      what_to_avoid:
        - "Speculation about causes"
        - "Promises you can't keep"
        - "Blame (internal or external)"
        - "Excessive technical detail"
        - "Marketing language"

    update_cadence:
      high_severity:
        investigating: "Every 15-30 minutes"
        identified: "Every 30 minutes"
        monitoring: "Every 30-60 minutes"
        minimum: "Update even if no progress to show activity"

      medium_severity:
        investigating: "Every 30-60 minutes"
        identified: "Every 1-2 hours"
        monitoring: "As status changes"

      low_severity:
        investigating: "Every 2-4 hours"
        identified: "As status changes"
        monitoring: "At resolution"

  technical_detail_levels:
    low_detail:
      audience: "general users"
      example: |
        Our authentication service is experiencing issues. Users may be unable to log in.

        We're working on a fix and will update within 30 minutes.

    medium_detail:
      audience: "power users, small businesses"
      example: |
        Our authentication service is experiencing high latency due to database connection issues.

        Login attempts may fail or take longer than normal. Active sessions are not affected.

        We're scaling database connections and expect resolution within 60 minutes.

    high_detail:
      audience: "developers, enterprise"
      example: |
        Authentication API (api.example.com/auth) experiencing 500 errors.

        Root cause: Database connection pool exhaustion on primary auth cluster (us-east-1).

        Mitigation: Scaling connection pool and failing over to secondary cluster.

        API requests will return 503 during failover (~5 minutes).

  multi_incident_handling:
    when: "multiple simultaneous incidents"
    approach:
      - "Create separate incident pages for unrelated issues"
      - "Link related incidents clearly"
      - "Prioritize updates by severity"
      - "Consolidate if incidents merge"

    template: |
      **Multiple Incidents**

      We're currently addressing multiple issues:

      1. {{service_1}} - {{severity}} - {{status}}
         {{brief_description}}
         [Full details →]

      2. {{service_2}} - {{severity}} - {{status}}
         {{brief_description}}
         [Full details →]

      Teams are working in parallel. Updates on each incident page.

  subscription_notifications:
    email_updates:
      subject: "[{{severity}}] {{service_name}}: {{status}}"
      body: "{{status_page_update_content}}"
      frequency: "{{every_update_or_digest}}"

    sms_updates:
      format: "{{service}}: {{brief_status}}. Details: {{short_url}}"
      length: "<160 characters"
      frequency: "status changes only"

    slack_webhook:
      format: |
        {
          "status": "{{investigating|identified|monitoring|resolved}}",
          "service": "{{service_name}}",
          "severity": "{{critical|major|minor}}",
          "message": "{{update_content}}",
          "url": "{{status_page_url}}"
        }

    rss_feed:
      include: "all updates in chronological order"
      format: "standard RSS 2.0"

  post_incident_review:
    when: "for major incidents"
    timing: "within 48-72 hours"
    template: |
      # Post-Incident Review: {{incident_name}}

      **Incident date:** {{date}}
      **Duration:** {{total_time}}
      **Severity:** {{severity_level}}

      ## What Happened
      {{chronological_narrative}}

      ## Impact
      - Users affected: {{number_or_percentage}}
      - Services impacted: {{list}}
      - Duration: {{time}}
      - Revenue impact: {{if_public_company}}

      ## Root Cause
      {{technical_explanation_accessible}}

      ## Resolution
      {{how_we_fixed_it}}

      ## Prevention
      What we're doing to prevent this:
      1. {{action_item_1}}
      2. {{action_item_2}}
      3. {{action_item_3}}

      ## Timeline
      {{detailed_timeline_with_timestamps}}

      ## What We Learned
      {{key_takeaways}}

      We apologize for this disruption and are committed to preventing similar incidents.
```

=== EXAMPLES ===

**Example 1: Critical API Outage**

Initial Report (2:00 PM):
```
🔴 API Service - Major Outage

**Status:** Investigating

We're aware that API requests are failing with 500 errors. Users are unable to access the API.

Our engineering team is investigating the root cause.

**Affected services:**
• REST API (api.example.com)
• Webhooks
• Third-party integrations

**Timeline:**
1:58 PM - Issue detected
2:00 PM - Incident declared

Next update: 2:15 PM
```

Update 1 (2:15 PM):
```
**Status:** Identified

We've identified a database connectivity issue as the root cause.

**What we're doing:**
Failing over to our backup database cluster. This process takes approximately 10 minutes.

**Current impact:**
API requests continue to fail. Active users may see "Service Unavailable" errors.

**Timeline:**
1:58 PM - Issue detected
2:00 PM - Incident declared
2:15 PM - Root cause identified

**ETA:** 2:30 PM

Next update: 2:30 PM
```

Update 2 (2:30 PM):
```
**Status:** Monitoring

Failover to backup database cluster is complete. API requests are processing normally.

We're monitoring error rates and latency to ensure stability.

**Timeline:**
1:58 PM - Issue detected
2:00 PM - Incident declared
2:15 PM - Root cause identified
2:30 PM - Fix deployed, monitoring

Next update: 3:00 PM or when resolved
```

Resolution (2:45 PM):
```
✅ **Resolved** - API Service is operational

The database connectivity issue has been resolved.

**What happened:**
Our primary database cluster experienced a connection pool exhaustion, causing API requests to fail.

**Resolution:**
We failed over to our backup database cluster, which restored service.

**Impact:**
- Duration: 47 minutes (1:58 PM - 2:45 PM)
- Users affected: All API users
- Request failure rate: ~100%

**Prevention:**
We're increasing database connection pool limits and improving monitoring to detect this earlier.

We apologize for the disruption.

Post-incident review will be published within 48 hours.
```

**Example 2: Degraded Performance**
```
🟡 Email Delivery - Degraded Performance

**Status:** Monitoring

Email delivery is slower than normal. Emails are being delivered but with delays of 10-30 minutes.

**What happened:**
Increased email volume caused temporary queueing.

**Current status:**
We've added processing capacity. The queue is clearing and delays are decreasing.

**Impact:**
• Email delivery delayed 10-30 minutes
• All emails will be delivered
• No emails lost

**Timeline:**
3:00 PM - Delays detected
3:15 PM - Additional capacity added
3:30 PM - Queue clearing (current)

We expect full resolution within the next hour.
```

**Example 3: Scheduled Maintenance**
```
🔵 Scheduled Maintenance

**Status:** In Progress

We're performing scheduled database maintenance.

**Impact:**
Platform is in read-only mode. You can view all data but cannot create, edit, or delete.

**Progress:**
Phase 1 of 3 complete ✅
Phase 2 in progress... ⏳
Phase 3 pending

**Timeline:**
11:00 PM - Maintenance started
11:30 PM - Phase 1 complete
12:00 AM - Phase 2 in progress (current)
Expected completion: 1:00 AM

On schedule. Next update: 12:30 AM
```

---

**Accessibility Requirements**: Clear status indicators that don't rely only on color. Text-based status labels. Screen-reader compatible timeline. Timestamps in clear format. RSS feed for automated monitoring. Multiple subscription options (email, SMS, webhook). Historical incident log. Keyboard-navigable interface. No auto-refreshing (or announced to screen readers).

**Psychological Principles**: Transparency builds trust (honest updates). Control (subscription options). Certainty (clear timelines reduce anxiety). Progress principle (show forward movement). Completion (resolution notification). Accountability (post-incident reviews). Reciprocity (we owe you explanation). Social proof (others are experiencing this too - not just you).

## Anomaly Detection Alert Content System v1.0

**Purpose**: Create urgent, actionable alert content for anomalous data patterns that helps users quickly understand unexpected changes, assess severity, and take appropriate corrective or investigative action.

---

**PROMPT:**

Design anomaly detection alert for {{anomaly_type}} in {{monitored_metric}} affecting {{affected_system}} with {{severity_level}} urgency.

=== ANOMALY CONTEXT ===
Anomaly classification: {{anomaly_classification}} (spike/drop/pattern-break/threshold-breach/missing-data/unexpected-zero)
Detection method: {{detection_method}} (statistical/threshold-based/ML-predicted/pattern-matching/manual-flagged)
Metric affected: {{affected_metric}}
Baseline behavior: {{normal_behavior}}
Deviation magnitude: {{deviation_size}} (percentage or standard deviations from normal)
Occurrence timing: {{occurrence_time}}
Persistence: {{persistence}} (one-time spike/ongoing/recurring)

=== SEVERITY ASSESSMENT ===

**Impact Evaluation**:
- Business impact: {{business_impact}} (critical/high/medium/low)
- User impact: {{user_impact}} (customer-facing/internal-only/no user impact)
- Revenue impact: {{revenue_impact}} (direct revenue loss/potential loss/no impact)
- Data integrity: {{data_integrity}} (data quality issue/system behavior/expected anomaly)
- Urgency: {{response_urgency}} (immediate/within hours/monitor/informational)

**Confidence Assessment**:
- Detection confidence: {{detection_confidence}} (high/medium/low)
- False positive likelihood: {{false_positive_risk}} (low/medium/high)
- Historical precedent: {{precedent}} (never seen before/rare/occasional/known pattern)

=== USER CONTEXT ===

**Alert Recipient**:
- Primary audience: {{alert_audience}} (on-call engineer/product manager/analyst/executive)
- Technical expertise: {{technical_level}} (technical/business/executive)
- Decision authority: {{decision_power}} (can fix/can escalate/monitoring only)
- Time context: {{time_context}} (working hours/off hours/weekend)
- Current status: {{user_status}} (actively monitoring/passive alert/first notification)

**Historical Context**:
- Similar anomalies: {{similar_events}} (count and recency)
- Previous false alarms: {{false_alarm_rate}}
- Alert fatigue risk: {{alert_frequency}} (too many alerts/appropriate/rare alerts)

=== NOTIFICATION CONTEXT ===

**Delivery Channel**:
- Alert medium: {{alert_channel}} (in-app/email/SMS/push/Slack/PagerDuty/dashboard)
- Character constraints: {{character_limit}}
- Rich formatting available: {{supports_formatting}} (yes/no)
- Action buttons available: {{has_action_buttons}} (yes/no)
- Urgency indicators: {{urgency_indicators}} (color/sound/vibration/priority)

=== OUTPUT REQUIREMENTS ===

```yaml
anomaly_alert:
  alert_identification:
    alert_id: "unique_identifier"
    alert_title: "string (clear, specific, 5-10 words)"
    severity_badge: "CRITICAL/HIGH/MEDIUM/LOW"
    timestamp: "when anomaly detected"
    metric_name: "affected metric in plain language"

  immediate_notification:
    headline: "string (what happened - one clear sentence)"
    magnitude: "string (how big is the deviation)"
    impact_statement: "string (why you should care)"
    time_reference: "string (when this started/was detected)"

  notification_variants:
    push_notification:
      title: "string (under 60 chars)"
      body: "string (under 120 chars)"
      action_text: "string (button label)"

    sms_alert:
      message: "string (under 160 chars, critical info only)"
      callback_number: "optional"

    email_subject:
      subject_line: "string (clear severity and metric)"
      preview_text: "string (key details for inbox preview)"

    slack_message:
      main_text: "string (formatted with markdown)"
      attachment_color: "severity color code"
      fields:
        - title: "Metric"
          value: "string"
        - title: "Current value"
          value: "string"
        - title: "Expected range"
          value: "string"
        - title: "Deviation"
          value: "string"
      actions:
        - text: "View dashboard"
          url: "link"
        - text: "Acknowledge"
          action_id: "acknowledge"
        - text: "Snooze 1 hour"
          action_id: "snooze"

  detailed_alert_content:
    anomaly_description:
      what_happened: "string (clear explanation)"
      when_started: "string (timestamp and duration)"
      current_status: "string (still happening/resolved/stabilizing)"
      affected_scope: "string (what's impacted)"

    data_evidence:
      current_value: "string with unit"
      expected_value: "string with unit or range"
      deviation_magnitude: "string (percentage, std dev, or absolute)"
      comparison_context: "string (vs historical baseline)"

    visual_indicators:
      trend_direction: "⬆️ spike / ⬇️ drop / ⚡ volatile / 🔄 pattern change"
      severity_icon: "🔴 critical / 🟠 high / 🟡 medium / 🔵 low"
      status_icon: "🔥 active / ✅ resolved / 👁 monitoring"

    potential_causes:
      known_causes:
        - cause: "string (likely explanation)"
          confidence: "high/medium/low"
          supporting_evidence: "string"

      investigation_needed: "boolean"
      similar_past_events:
        - date: "timestamp"
          cause: "string (what caused it before)"
          resolution: "string (how it was fixed)"

    impact_assessment:
      business_impact: "string (revenue/customers/operations affected)"
      user_impact: "string (customer experience effect)"
      scope_of_impact: "string (how widespread)"
      estimated_exposure: "string (number of users/transactions/etc)"

    recommended_actions:
      immediate:
        - action: "string (specific step)"
          expected_outcome: "string (what this does)"
          estimated_time: "string (how long this takes)"
          owner: "string (who should do this)"

      if_persists:
        - action: "string (escalation step)"
          trigger: "string (when to escalate)"

      investigation_steps:
        - step: "string (diagnostic action)"
          purpose: "string (what to look for)"

    automated_responses:
      auto_actions_taken: ["array of automatic mitigations already applied"]
      pending_actions: ["array of queued responses"]
      requires_manual_action: "boolean"

  contextual_information:
    related_metrics:
      - metric_name: "string"
        status: "normal/also-anomalous/unavailable"
        value: "string"

    environmental_factors:
      - factor: "string (e.g., 'Marketing campaign launched')"
        relevance: "string (how this might relate)"

    upstream_dependencies:
      - dependency: "string (external service/system)"
        status: "normal/degraded/down"
        impact: "string (could this be causing the anomaly?)"

  historical_context:
    frequency: "string (how often this type of anomaly occurs)"
    last_occurrence: "string (when we last saw this)"
    typical_duration: "string (how long these usually last)"
    typical_resolution: "string (how these are usually resolved)"

  confidence_and_uncertainty:
    detection_confidence: "string (high/medium/low with explanation)"
    false_positive_risk: "string (likelihood this is a false alarm)"
    data_quality_notes: "string (any data collection issues)"
    caveats: "string (what we don't know yet)"

  alert_management:
    acknowledge_action:
      button_text: "string (e.g., 'Acknowledge and investigate')"
      acknowledgment_note_prompt: "string (optional note field)"

    snooze_options:
      - duration: "15 minutes"
        use_case: "string (when to use this)"
      - duration: "1 hour"
      - duration: "4 hours"
      - duration: "Until resolved"

    resolve_action:
      button_text: "string"
      resolution_note_required: "boolean"
      resolution_categories: ["Fixed", "False alarm", "Expected behavior", "Unable to reproduce"]

    escalate_action:
      button_text: "string"
      escalation_paths: ["On-call manager", "Engineering lead", "Incident commander"]

  follow_up_communication:
    status_update_frequency: "string (how often to send updates)"

    update_triggers:
      - trigger: "anomaly persists for {{duration}}"
        message: "string (follow-up alert content)"

      - trigger: "anomaly resolves automatically"
        message: "string (resolution notification)"

      - trigger: "anomaly worsens"
        message: "string (escalation alert)"

    resolution_summary:
      headline: "string (anomaly resolved message)"
      duration: "string (how long it lasted)"
      root_cause: "string (if known)"
      actions_taken: ["array of resolution steps"]
      preventive_measures: "string (what was done to prevent recurrence)"

  accessibility:
    screen_reader_announcement: "string (optimized for audio)"
    alert_role: "alert/status"
    focus_management: "string (where focus goes)"
    keyboard_actions: ["array of keyboard shortcuts"]

  tone_calibration:
    critical_severity_tone: "urgent, direct, action-oriented"
    high_severity_tone: "serious, clear, solution-focused"
    medium_severity_tone: "informative, measured, investigative"
    low_severity_tone: "casual, informational, monitoring"
```

=== ALERT LANGUAGE PATTERNS ===

**Severity-Appropriate Language**:

Critical:
- "URGENT: {{metric}} down {{percent}}"
- "Immediate action required"
- "Critical system impact"
- "Revenue-affecting incident"

High:
- "Significant spike in {{metric}}"
- "Action recommended"
- "Notable deviation detected"

Medium:
- "Unusual pattern in {{metric}}"
- "Review recommended"
- "Anomaly detected"

Low:
- "Interesting change in {{metric}}"
- "FYI: Minor deviation"
- "Note: Pattern shift"

=== EXAMPLES ===

**Example 1: Critical Revenue Drop Alert**
- anomaly_type: "sudden drop"
- monitored_metric: "payment success rate"
- affected_system: "payment processing"
- severity_level: "critical"
- anomaly_classification: "drop"
- deviation_size: "47% below normal"
- business_impact: "critical"
- revenue_impact: "direct revenue loss"
- response_urgency: "immediate"

Output:
```yaml
anomaly_alert:
  alert_identification:
    alert_id: "ANO-2024-11-23-001"
    alert_title: "🔴 CRITICAL: Payment Success Rate Dropped 47%"
    severity_badge: "CRITICAL"
    timestamp: "2024-11-23 14:37:22 UTC"
    metric_name: "Payment success rate"

  immediate_notification:
    headline: "Payment processing success rate dropped from 96% to 51% starting at 2:30 PM."
    magnitude: "47% below normal baseline - 4.7 standard deviations"
    impact_statement: "Estimated revenue loss: $12,000/hour. Approximately 450 failed transactions in last 7 minutes."
    time_reference: "Started 7 minutes ago at 2:30 PM UTC"

  notification_variants:
    push_notification:
      title: "🔴 CRITICAL: Payment failures spiking"
      body: "Success rate dropped to 51%. $12K/hr revenue impact. Investigate immediately."
      action_text: "View incident"

    sms_alert:
      message: "CRITICAL: Payment success rate at 51% (normal: 96%). Started 2:30PM. Revenue impact $12K/hr. Respond: https://dash.co/alert/ANO-2024-11-23-001"

    email_subject:
      subject_line: "🔴 CRITICAL ALERT: Payment Success Rate Down 47%"
      preview_text: "Immediate action required - $12K/hour revenue impact"

    slack_message:
      main_text: "🔴 *CRITICAL ALERT*\n\n*Payment Success Rate Dropped 47%*\n\nOur payment processing success rate dropped from 96% to 51% starting 7 minutes ago.\n\n⚠️ *Immediate Impact:*\n• Estimated revenue loss: $12,000/hour\n• 450 failed transactions in last 7 minutes\n• Customer complaints likely incoming"
      attachment_color: "#ff0000"
      fields:
        - title: "Current Success Rate"
          value: "51% (normal: 96%)"
        - title: "Started"
          value: "2:30 PM UTC (7 min ago)"
        - title: "Deviation"
          value: "47% below normal (4.7σ)"
        - title: "Revenue Impact"
          value: "$12,000/hour estimated loss"
      actions:
        - text: "🔥 View Live Dashboard"
          url: "https://dash.company.com/payments"
        - text: "✅ Acknowledge & Investigate"
          action_id: "acknowledge"
        - text: "📞 Page On-Call Engineer"
          action_id: "escalate"

  detailed_alert_content:
    anomaly_description:
      what_happened: "Payment processing success rate suddenly dropped from 96% (normal baseline) to 51%, representing a 47% decrease. This affects all payment methods and geographic regions."
      when_started: "2024-11-23 at 2:30:15 PM UTC (7 minutes ago)"
      current_status: "🔥 ACTIVE - Success rate remains at 51%, no sign of recovery"
      affected_scope: "All payment processors (Stripe, PayPal, Credit card direct). All geographic regions. Both web and mobile checkout."

    data_evidence:
      current_value: "51% success rate (436 successful out of 856 attempts in last 5 min)"
      expected_value: "94-97% success rate (historical average: 96%)"
      deviation_magnitude: "47% below normal (4.7 standard deviations) - statistically extremely significant"
      comparison_context: "Worst success rate observed in 18 months. Previous low was 87% during Stripe outage in March 2023."

    potential_causes:
      known_causes:
        - cause: "Stripe API degradation or outage"
          confidence: "high"
          supporting_evidence: "Stripe represents 73% of payment volume. If Stripe is down, this magnitude of drop is expected."

        - cause: "Recent payment gateway configuration change"
          confidence: "medium"
          supporting_evidence: "Payment config was updated 45 minutes ago (1:45 PM). Timing could be coincidental or related."

        - cause: "DDoS attack or malicious traffic"
          confidence: "low"
          supporting_evidence: "Overall site traffic is normal, no signs of attack traffic patterns."

      investigation_needed: true
      similar_past_events:
        - date: "2023-03-12"
          cause: "Stripe API outage"
          resolution: "Waited for Stripe to resolve (~2 hours). No action needed on our side."

    impact_assessment:
      business_impact: "SEVERE - Direct revenue loss estimated at $12,000/hour based on average transaction value and current failure rate"
      user_impact: "CRITICAL - Customers unable to complete purchases. High likelihood of cart abandonment and negative support contacts."
      scope_of_impact: "All customers attempting checkout globally"
      estimated_exposure: "~850 customers per hour attempting checkout, ~400/hr experiencing failures"

    recommended_actions:
      immediate:
        - action: "Check Stripe Status Dashboard at https://status.stripe.com"
          expected_outcome: "Determine if this is a Stripe-side issue or our integration problem"
          estimated_time: "30 seconds"
          owner: "First responder"

        - action: "Review payment service logs for error messages and patterns"
          expected_outcome: "Identify specific error codes and failure modes"
          estimated_time: "2-3 minutes"
          owner: "On-call engineer"

        - action: "If Stripe issue: Post customer-facing notice on checkout page and send holding email to customers"
          expected_outcome: "Manage customer expectations, reduce support volume"
          estimated_time: "5 minutes"
          owner: "On-call + support lead"

      if_persists:
        - action: "Enable backup payment processor (PayPal-only mode)"
          trigger: "If success rate remains below 60% for 15+ minutes"

        - action: "Post public status page update"
          trigger: "If issue persists beyond 30 minutes"

        - action: "Page engineering director and CTO"
          trigger: "If revenue impact exceeds $50K or issue persists beyond 1 hour"

    automated_responses:
      auto_actions_taken:
        - "Alert sent to #payments-oncall Slack channel"
        - "PagerDuty notification sent to on-call engineer"
        - "Dashboard auto-refreshing every 30 seconds"
        - "Payment error logs collection increased to maximum verbosity"
      requires_manual_action: true

  contextual_information:
    related_metrics:
      - metric_name: "Overall site traffic"
        status: "normal"
        value: "4,847 sessions (within expected range)"

      - metric_name: "Checkout page views"
        status: "normal"
        value: "856 in last 5 min (typical)"

      - metric_name: "Payment API response time"
        status: "also-anomalous"
        value: "4,200ms (normal: 450ms) - significantly elevated"

    upstream_dependencies:
      - dependency: "Stripe API"
        status: "UNKNOWN - checking status page"
        impact: "If Stripe is down, this fully explains the anomaly"

      - dependency: "PayPal API"
        status: "normal"
        impact: "PayPal transactions succeeding normally (small sample size)"

  alert_management:
    acknowledge_action:
      button_text: "✅ Acknowledge - I'm investigating"
      acknowledgment_note_prompt: "Optional: Note your initial findings or actions"

    resolve_action:
      button_text: "Mark as resolved"
      resolution_note_required: true
      resolution_categories: ["Stripe outage resolved", "Configuration rollback", "False alarm", "Other (explain)"]
```

**Example 2: Medium Severity Traffic Spike**
- anomaly_type: "unexpected spike"
- monitored_metric: "API request volume"
- affected_system: "backend API"
- severity_level: "medium"
- anomaly_classification: "spike"
- deviation_size: "240% above normal"
- business_impact: "medium"
- response_urgency: "within hours"

Output:
```yaml
anomaly_alert:
  alert_identification:
    alert_title: "🟡 API Traffic Spike: 240% Above Normal"
    severity_badge: "MEDIUM"
    metric_name: "API request volume"

  immediate_notification:
    headline: "API request volume spiked to 12,400 req/min, 240% above typical traffic."
    magnitude: "240% above baseline (2.4x normal traffic)"
    impact_statement: "System handling load normally but approaching capacity limits. Investigate to determine if legitimate traffic or potential issue."
    time_reference: "Started 18 minutes ago at 3:15 PM UTC"

  slack_message:
    main_text: "🟡 *MEDIUM ALERT*\n\n*Unusual API Traffic Spike Detected*\n\nAPI request volume increased to 12,400 req/min (normal: 3,600 req/min).\n\n📊 *Current Status:*\n• System performance: Normal (latency stable)\n• Traffic pattern: Concentrated in /api/v2/search endpoint\n• Geographic source: 78% from US East region"
    attachment_color: "#ffaa00"
    fields:
      - title: "Current Volume"
        value: "12,400 req/min (normal: 3,600)"
      - title: "Duration"
        value: "18 minutes and ongoing"
      - title: "System Health"
        value: "✅ Handling load, 40% capacity remaining"
      - title: "Pattern"
        value: "Concentrated in search endpoint"

  detailed_alert_content:
    anomaly_description:
      what_happened: "API request volume increased suddenly to 12,400 requests per minute, representing a 240% increase from normal traffic levels. Traffic is concentrated in the search endpoint (/api/v2/search)."
      current_status: "👁 MONITORING - Traffic elevated but system stable"
      affected_scope: "Backend API, specifically search functionality. Web and mobile apps both contributing to increased load."

    potential_causes:
      known_causes:
        - cause: "New feature launch or marketing campaign"
          confidence: "medium"
          supporting_evidence: "Check with marketing team if any campaigns went live at 3 PM"

        - cause: "Viral content or media mention"
          confidence: "medium"
          supporting_evidence: "Traffic spike could indicate external attention. Check social media and referral sources."

        - cause: "Client-side bug causing retry loops"
          confidence: "low"
          supporting_evidence: "Traffic pattern looks relatively distributed, not characteristic of runaway retry loop"

    recommended_actions:
      immediate:
        - action: "Review application logs and referral sources to identify traffic origin"
          expected_outcome: "Understand if this is legitimate user growth or technical issue"
          estimated_time: "5-10 minutes"

        - action: "Check with marketing and product teams for planned launches or campaigns"
          expected_outcome: "Confirm if spike is expected behavior"
          estimated_time: "5 minutes"

      if_persists:
        - action: "Enable auto-scaling to add 2-3 additional API servers"
          trigger: "If traffic continues above 11,000 req/min for 30+ minutes"

  contextual_information:
    related_metrics:
      - metric_name: "API response time"
        status: "normal"
        value: "143ms P95 (within normal 100-200ms range)"

      - metric_name: "Error rate"
        status: "normal"
        value: "0.3% (baseline: 0.2-0.4%)"
```

**Example 3: Low Severity Data Quality Alert**
- anomaly_type: "missing data"
- monitored_metric: "analytics event stream"
- affected_system: "data pipeline"
- severity_level: "low"
- anomaly_classification: "missing-data"
- business_impact: "low"
- response_urgency: "monitor"

Output:
```yaml
anomaly_alert:
  alert_identification:
    alert_title: "🔵 Analytics Event Gap Detected"
    severity_badge: "LOW"
    metric_name: "Analytics event ingestion"

  immediate_notification:
    headline: "Analytics events missing for Mobile App Android between 11:20-11:32 AM (12-minute gap)."
    magnitude: "Zero events received for 12 minutes (expected: ~850 events)"
    impact_statement: "Data gap in mobile analytics reporting. No user impact. Dashboard metrics for this period will be incomplete."
    time_reference: "Gap occurred 11:20-11:32 AM UTC (2 hours ago, now resolved)"

  detailed_alert_content:
    anomaly_description:
      what_happened: "Analytics event stream from Mobile App (Android) stopped flowing to data warehouse for 12 minutes. Event flow resumed automatically at 11:32 AM."
      current_status: "✅ RESOLVED - Event stream has resumed, but 12-minute gap remains in historical data"
      affected_scope: "Mobile App Android analytics only. iOS and Web analytics unaffected."

    potential_causes:
      known_causes:
        - cause: "Temporary network connectivity issue between app and analytics endpoint"
          confidence: "medium"
          supporting_evidence: "Events resumed automatically without intervention, suggesting transient network issue"

    recommended_actions:
      immediate:
        - action: "Monitor event stream for next 2 hours to ensure stability"
          expected_outcome: "Confirm this was one-time blip, not recurring issue"

      if_persists:
        - action: "Investigate mobile SDK configuration and error logs"
          trigger: "If gaps recur within 24 hours"
```

---

**Accessibility Requirements**: Critical alerts must use ARIA role="alert" for immediate screen reader announcement. Include text descriptions of severity levels, not just colors. Provide keyboard shortcuts for common alert actions. Ensure alert modals are keyboard-navigable and trappable. Use semantic HTML for alert structure. Don't rely solely on color for severity - use icons, text, and visual hierarchy. Provide clear focus indicators for alert actions.

**Psychological Principles**: Immediate clarity reduces panic response (uncertainty reduction). Severity calibration prevents alert fatigue (cry wolf effect). Recommended actions reduce decision paralysis (choice architecture). Historical context aids pattern recognition (schema activation). Confidence levels manage expectations (transparency). Visual hierarchy focuses attention on critical information (selective attention). Clear resolution paths provide psychological closure (goal completion theory).

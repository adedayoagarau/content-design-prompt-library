## Dashboard Content Design System v1.0

**Purpose**: Create clear, scannable, and actionable dashboard copy that helps users understand key metrics, make data-driven decisions, and navigate complex information hierarchies.

---

**PROMPT:**

Design comprehensive dashboard content for {{dashboard_name}}, a {{dashboard_type}} dashboard serving {{target_user_role}}.

=== DASHBOARD CONTEXT ===
Dashboard purpose: {{dashboard_purpose}} (overview/performance/operational/analytical/executive)
Primary metrics: {{primary_metrics}}
Update frequency: {{update_frequency}} (real-time/hourly/daily/weekly)
User technical level: {{user_technical_level}} (executive/analyst/technical/mixed)
Decision timeframe: {{decision_timeframe}} (immediate/daily/strategic)
Industry vertical: {{industry_vertical}}

=== CONTENT HIERARCHY ===

**Page-Level Elements**:
- Dashboard title: {{dashboard_title}}
- Dashboard description: {{dashboard_description}}
- Last updated timestamp format: {{timestamp_format}}
- Data freshness indicator: {{freshness_indicator}}

**Card/Widget Organization**:
- Number of primary cards: {{primary_card_count}}
- Number of secondary cards: {{secondary_card_count}}
- Card priority order: {{card_priority}}
- Responsive breakpoints: {{breakpoint_behavior}}

=== METRIC PRESENTATION ===

For each key metric, define:
- Metric name: {{metric_name}}
- Metric definition: {{metric_definition}}
- Display format: {{display_format}} (number/percentage/currency/ratio)
- Comparison context: {{comparison_context}} (vs previous period/vs target/vs benchmark)
- Trend indicator: {{trend_indicator}} (up/down/neutral with semantic meaning)
- Threshold values: {{threshold_values}} (critical/warning/success)

=== INFORMATION ARCHITECTURE ===

**Navigation Elements**:
- Section names: {{section_names}}
- Tab labels: {{tab_labels}}
- Breadcrumb trail: {{breadcrumb_format}}
- Quick filters: {{quick_filter_labels}}

**Contextual Help**:
- Tooltip triggers: {{tooltip_triggers}}
- Tooltip content: {{tooltip_content}}
- Help panel: {{help_panel_content}}
- Guided tour triggers: {{tour_trigger_points}}

=== OUTPUT REQUIREMENTS ===

```yaml
dashboard_content:
  page_header:
    title: "string (3-6 words, action-oriented)"
    subtitle: "string (under 100 chars, context-setting)"
    description: "string (1-2 sentences explaining purpose)"

  global_controls:
    date_range_label: "string"
    filter_button_text: "string"
    export_button_text: "string"
    refresh_button_text: "string"
    settings_button_text: "string"

  metric_cards:
    - card_id: "unique_identifier"
      card_title: "string (2-4 words)"
      metric_label: "string (clear, unambiguous)"
      metric_value_format: "string (with units)"
      comparison_text: "string (vs context)"
      trend_description:
        positive: "string (when metric increases)"
        negative: "string (when metric decreases)"
        neutral: "string (when unchanged)"
      tooltip:
        trigger_text: "string"
        help_content: "string (explains calculation/meaning)"
      drill_down_link: "string (action-oriented)"

  empty_states:
    no_data: "string (encouraging, actionable)"
    loading: "string (sets expectations)"
    error: "string (clear next steps)"

  accessibility:
    page_landmark: "string (ARIA landmark)"
    live_region_announcements: ["strings for dynamic updates"]
    keyboard_shortcuts:
      - shortcut: "string"
        action: "string"
        description: "string"

  microcopy:
    last_updated_prefix: "string"
    loading_indicator: "string"
    no_changes_message: "string"
    data_quality_warning: "string"
    calculation_pending: "string"
```

=== VISUAL HIERARCHY GUIDELINES ===

**Typography Recommendations**:
- Primary metric: {{primary_metric_size}} (largest, most prominent)
- Metric labels: {{label_size}} (clear but secondary)
- Comparison text: {{comparison_size}} (supporting context)
- Timestamp: {{timestamp_size}} (de-emphasized but findable)

**Color Semantics**:
- Positive trend: {{positive_color}} + "improving" language
- Negative trend: {{negative_color}} + "declining" language
- Neutral/informational: {{neutral_color}} + "stable" language
- Warning state: {{warning_color}} + "approaching threshold" language
- Critical state: {{critical_color}} + "requires attention" language

=== CONTEXTUAL STORYTELLING ===

For each dashboard section, provide:
- **Headline**: One-sentence summary of what the data shows
- **Context**: Why this metric matters to the user's role
- **Action implication**: What the user should do with this information
- **Related metrics**: Cross-references to connected data points

=== EXAMPLES ===

**Example 1: Sales Executive Dashboard**
- dashboard_name: "Revenue Performance Overview"
- dashboard_type: "executive"
- target_user_role: "VP of Sales"
- primary_metrics: ["Monthly Recurring Revenue", "Customer Acquisition Cost", "Churn Rate"]
- update_frequency: "daily"
- user_technical_level: "executive"
- decision_timeframe: "strategic"

Output:
```yaml
dashboard_content:
  page_header:
    title: "Revenue Performance"
    subtitle: "Your sales health at a glance"
    description: "Track key revenue metrics and identify growth opportunities across your entire sales organization."

  metric_cards:
    - card_id: "mrr_primary"
      card_title: "Monthly Recurring Revenue"
      metric_label: "Current MRR"
      metric_value_format: "$1.2M"
      comparison_text: "+12% vs last month"
      trend_description:
        positive: "Revenue growing"
        negative: "Revenue declining"
        neutral: "Revenue stable"
      tooltip:
        trigger_text: "How is this calculated?"
        help_content: "Sum of all active subscription values normalized to monthly amounts. Includes upgrades and expansions, excludes one-time fees."
      drill_down_link: "View detailed breakdown"
```

**Example 2: DevOps Operational Dashboard**
- dashboard_name: "System Health Monitor"
- dashboard_type: "operational"
- target_user_role: "Site Reliability Engineer"
- primary_metrics: ["Uptime Percentage", "Error Rate", "Response Time P95"]
- update_frequency: "real-time"
- user_technical_level: "technical"
- decision_timeframe: "immediate"

Output:
```yaml
dashboard_content:
  page_header:
    title: "System Health Monitor"
    subtitle: "Real-time infrastructure status"
    description: "Monitor critical system metrics and respond to incidents before they impact users."

  metric_cards:
    - card_id: "uptime_primary"
      card_title: "Service Availability"
      metric_label: "Current uptime"
      metric_value_format: "99.97%"
      comparison_text: "Within SLA target (99.9%)"
      trend_description:
        positive: "Availability improving"
        negative: "Availability degraded"
        neutral: "Availability stable"
      tooltip:
        trigger_text: "How we measure uptime"
        help_content: "Percentage of successful health check responses over the last 30 days, measured every 60 seconds from 5 global locations."
      drill_down_link: "View incident timeline"

  empty_states:
    no_data: "Waiting for monitoring data... This usually takes 2-3 minutes after system initialization."
    loading: "Loading real-time metrics..."
    error: "Unable to connect to monitoring service. Check your network connection or contact on-call engineer."
```

**Example 3: Marketing Analytics Dashboard**
- dashboard_name: "Campaign Performance Tracker"
- dashboard_type: "analytical"
- target_user_role: "Marketing Manager"
- primary_metrics: ["Conversion Rate", "Cost Per Acquisition", "Return on Ad Spend"]
- update_frequency: "hourly"
- user_technical_level: "mixed"
- decision_timeframe: "daily"

Output:
```yaml
dashboard_content:
  page_header:
    title: "Campaign Performance"
    subtitle: "Optimize your marketing spend"
    description: "Compare campaign effectiveness across channels and identify your highest-performing customer acquisition strategies."

  metric_cards:
    - card_id: "conversion_primary"
      card_title: "Conversion Rate"
      metric_label: "Overall conversion"
      metric_value_format: "3.2%"
      comparison_text: "+0.4% vs last week"
      trend_description:
        positive: "Conversions increasing"
        negative: "Conversions decreasing"
        neutral: "Conversions steady"
      tooltip:
        trigger_text: "What counts as a conversion?"
        help_content: "Percentage of visitors who complete a purchase within 30 days of first click. Includes all attributed channels."
      drill_down_link: "Analyze by channel"

  global_controls:
    date_range_label: "Date range"
    filter_button_text: "Filter campaigns"
    export_button_text: "Export report"
    refresh_button_text: "Refresh data"
    settings_button_text: "Dashboard settings"
```

---

**Accessibility Requirements**: All dashboard content must support WCAG 2.1 Level AA compliance. Metric changes must be announced to screen readers using ARIA live regions. Color cannot be the only indicator of trend direction - use icons and text labels. All interactive elements must be keyboard navigable with visible focus indicators. Provide text alternatives for all data visualizations.

**Psychological Principles**: Progressive disclosure reduces cognitive overload (information processing theory). Comparison context provides mental anchors for interpreting numbers (anchoring effect). Consistent metric placement builds pattern recognition (recognition over recall). Clear trend indicators reduce decision-making time (cognitive ease). Visual hierarchy guides attention to most important information (selective attention).

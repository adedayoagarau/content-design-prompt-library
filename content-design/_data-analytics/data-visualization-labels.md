## Data Visualization Label System v1.0

**Purpose**: Create precise, accessible, and contextual labels for charts, graphs, and data visualizations that enhance comprehension and support accurate data interpretation.

---

**PROMPT:**

Design comprehensive labeling for {{visualization_type}} displaying {{data_subject}} for {{target_audience}}.

=== VISUALIZATION CONTEXT ===
Chart type: {{chart_type}} (line/bar/pie/scatter/area/heatmap/treemap/funnel/gauge)
Data complexity: {{data_complexity}} (single series/multi-series/hierarchical/temporal)
Number of data points: {{data_point_count}}
Time span: {{time_span}} (if applicable)
Primary insight: {{primary_insight}}
Use case: {{use_case}} (exploration/presentation/monitoring/comparison)
Platform: {{platform}} (web/mobile/print/presentation)

=== DATA ATTRIBUTES ===

**Primary Metrics**:
- Y-axis metric: {{y_axis_metric}}
- Y-axis unit: {{y_axis_unit}}
- Y-axis range: {{y_axis_range}}
- X-axis dimension: {{x_axis_dimension}}
- X-axis format: {{x_axis_format}}

**Secondary Metrics**:
- Additional series: {{additional_series}}
- Comparison baselines: {{comparison_baselines}}
- Target/goal lines: {{target_lines}}
- Trend lines: {{trend_lines}}

**Data Granularity**:
- Aggregation level: {{aggregation_level}} (hourly/daily/weekly/monthly/quarterly/yearly)
- Sample size: {{sample_size}}
- Confidence interval: {{confidence_interval}}
- Data quality indicator: {{data_quality}}

=== LABELING REQUIREMENTS ===

**Chart Title**:
- Descriptive title: {{chart_title}}
- Title length: {{title_length}} (5-10 words recommended)
- Include timeframe: {{include_timeframe}} (yes/no)
- Include key finding: {{include_finding}} (yes/no)

**Axis Labels**:
- X-axis label: {{x_axis_label}}
- Y-axis label: {{y_axis_label}}
- Axis label orientation: {{label_orientation}}
- Unit placement: {{unit_placement}}

**Data Labels**:
- Show values on chart: {{show_data_labels}} (yes/no/conditional)
- Label format: {{label_format}}
- Label density: {{label_density}} (all/selection/extremes/none)
- Decimal precision: {{decimal_precision}}

**Legend**:
- Legend position: {{legend_position}} (top/bottom/left/right/inline)
- Legend entries: {{legend_entries}}
- Legend order: {{legend_order}} (by value/alphabetical/custom)

=== OUTPUT REQUIREMENTS ===

```yaml
visualization_labels:
  chart_header:
    title: "string (clear, specific, actionable)"
    subtitle: "string (optional context, timeframe, or methodology)"
    description: "string (1-2 sentences for screen readers)"

  axes:
    x_axis:
      label: "string (dimension name with unit if applicable)"
      tick_labels:
        format: "string (e.g., 'MMM YYYY', '$###,###', '0.0%')"
        rotation: "degrees (0/45/90)"
        skip_pattern: "string (e.g., 'every 2nd label')"
      gridline_label: "string (screen reader description)"

    y_axis:
      label: "string (metric name with unit)"
      tick_labels:
        format: "string (number format)"
        abbreviation: "string (K/M/B or full)"
      zero_baseline_label: "string (if meaningful)"

  data_series:
    - series_id: "unique_identifier"
      series_name: "string (legend label)"
      series_description: "string (tooltip/screen reader)"
      color_description: "string (for accessibility)"
      data_labels:
        show: "boolean"
        format: "string"
        conditional_display: "string (when to show/hide)"

  annotations:
    - annotation_id: "unique_identifier"
      annotation_type: "threshold/event/range/callout"
      label_text: "string (concise explanation)"
      position: "coordinates or data point"
      importance: "critical/high/medium/low"

  legend:
    title: "string (optional)"
    entries:
      - label: "string"
        description: "string (tooltip content)"
        pattern: "string (if color-blind safe patterns used)"

  interaction_labels:
    tooltip_template: "string with {{variables}}"
    drill_down_hint: "string (e.g., 'Click for details')"
    zoom_instructions: "string"
    pan_instructions: "string"

  data_quality_indicators:
    incomplete_data_label: "string"
    estimated_data_label: "string"
    projected_data_label: "string"
    source_citation: "string"
    last_updated: "string format"

  accessibility:
    aria_label: "string (complete chart description)"
    long_description: "string (detailed data summary)"
    keyboard_navigation_hint: "string"
    data_table_alternative: "boolean (link to tabular view)"
```

=== TRUNCATION AND OVERFLOW HANDLING ===

Define behavior when labels are too long:
- Maximum label length: {{max_label_length}}
- Truncation strategy: {{truncation_strategy}} (ellipsis/abbreviation/rotation/multi-line)
- Tooltip on truncated labels: {{show_full_on_hover}} (yes/no)
- Responsive label behavior: {{responsive_behavior}}

=== MULTI-LANGUAGE CONSIDERATIONS ===

- Number format localization: {{number_locale}}
- Date format localization: {{date_locale}}
- Right-to-left support: {{rtl_support}}
- Character expansion allowance: {{expansion_factor}}

=== EXAMPLES ===

**Example 1: Revenue Trend Line Chart**
- visualization_type: "line chart"
- data_subject: "monthly revenue growth"
- target_audience: "executive team"
- chart_type: "line"
- data_complexity: "multi-series"
- y_axis_metric: "Revenue"
- y_axis_unit: "USD"
- x_axis_dimension: "Month"
- primary_insight: "Revenue increased 23% year-over-year"

Output:
```yaml
visualization_labels:
  chart_header:
    title: "Revenue Growth Accelerating in Q4"
    subtitle: "Monthly recurring revenue, Jan 2024 - Dec 2024"
    description: "Line chart showing monthly revenue from January through December 2024, with comparison to 2023. Revenue increased from $1.2M to $1.8M, representing 23% year-over-year growth."

  axes:
    x_axis:
      label: "Month"
      tick_labels:
        format: "MMM YYYY"
        rotation: 45
        skip_pattern: "show all months"
      gridline_label: "Monthly intervals"

    y_axis:
      label: "Monthly Recurring Revenue (USD)"
      tick_labels:
        format: "$#,###K"
        abbreviation: "K for thousands"
      zero_baseline_label: "$0"

  data_series:
    - series_id: "revenue_2024"
      series_name: "2024 Revenue"
      series_description: "Actual monthly recurring revenue for 2024"
      color_description: "Solid blue line"
      data_labels:
        show: true
        format: "$#.#M"
        conditional_display: "Show on endpoints and peaks"

    - series_id: "revenue_2023"
      series_name: "2023 Revenue (comparison)"
      series_description: "Previous year revenue for comparison"
      color_description: "Dashed gray line"
      data_labels:
        show: false
        format: "$#.#M"
        conditional_display: "Show on hover only"

  annotations:
    - annotation_id: "q4_start"
      annotation_type: "event"
      label_text: "Q4 begins: New pricing launched"
      position: "October 2024"
      importance: "high"
```

**Example 2: User Segmentation Pie Chart**
- visualization_type: "pie chart"
- data_subject: "customer distribution by plan type"
- target_audience: "product managers"
- chart_type: "pie"
- data_complexity: "single series"
- primary_insight: "Enterprise customers represent highest revenue despite smallest user count"
- platform: "web"

Output:
```yaml
visualization_labels:
  chart_header:
    title: "Customer Distribution by Plan Type"
    subtitle: "Active customers as of Nov 2024 (N=12,847)"
    description: "Pie chart showing percentage breakdown of customers across four plan types: Free (62%), Starter (28%), Professional (8%), and Enterprise (2%)."

  data_series:
    - series_id: "plan_distribution"
      series_name: "Plan Type Distribution"
      series_description: "Percentage of total customers on each plan tier"
      color_description: "Four distinct colors with patterns"
      data_labels:
        show: true
        format: "#.#% (### customers)"
        conditional_display: "Show all segments"

  legend:
    title: "Plan Types"
    entries:
      - label: "Free Plan (62%)"
        description: "7,965 customers on free tier"
        pattern: "Light blue with diagonal lines"

      - label: "Starter Plan (28%)"
        description: "3,597 customers on starter tier at $29/mo"
        pattern: "Medium blue with dots"

      - label: "Professional Plan (8%)"
        description: "1,028 customers on professional tier at $99/mo"
        pattern: "Dark blue with cross-hatch"

      - label: "Enterprise Plan (2%)"
        description: "257 customers on custom enterprise contracts"
        pattern: "Navy blue solid"

  interaction_labels:
    tooltip_template: "{{plan_name}}: {{percentage}} ({{customer_count}} customers, {{revenue_contribution}} of total revenue)"
    drill_down_hint: "Click segment to view customer details"

  data_quality_indicators:
    source_citation: "Source: Customer database, refreshed daily"
    last_updated: "Last updated: Nov 23, 2024 at 3:00 AM UTC"
```

**Example 3: Performance Metrics Heatmap**
- visualization_type: "heatmap"
- data_subject: "server response times by region and time of day"
- target_audience: "DevOps engineers"
- chart_type: "heatmap"
- data_complexity: "multi-dimensional"
- y_axis_metric: "Response time (milliseconds)"
- x_axis_dimension: "Hour of day"
- platform: "operational dashboard"

Output:
```yaml
visualization_labels:
  chart_header:
    title: "API Response Time: Geographic Performance Heatmap"
    subtitle: "Average response time (ms) by region and hour, last 7 days"
    description: "Heatmap showing average API response times across 6 geographic regions over 24-hour periods. Color intensity indicates response time from green (under 100ms) to red (over 500ms)."

  axes:
    x_axis:
      label: "Hour of Day (UTC)"
      tick_labels:
        format: "HH:00"
        rotation: 0
        skip_pattern: "Show every 3 hours (0, 3, 6, 9, 12, 15, 18, 21)"

    y_axis:
      label: "Geographic Region"
      tick_labels:
        format: "Full region name"
        abbreviation: "None"

  data_series:
    - series_id: "response_times"
      series_name: "Average Response Time"
      series_description: "Mean response time in milliseconds for successful requests"
      color_description: "Green (fast) to yellow (moderate) to red (slow) gradient"
      data_labels:
        show: false
        format: "###ms"
        conditional_display: "Show on hover only via tooltip"

  legend:
    title: "Response Time (ms)"
    entries:
      - label: "0-100ms (Excellent)"
        description: "Within target SLA"
        pattern: "Dark green"

      - label: "101-200ms (Good)"
        description: "Acceptable performance"
        pattern: "Light green"

      - label: "201-350ms (Warning)"
        description: "Approaching SLA threshold"
        pattern: "Yellow"

      - label: "351-500ms (Degraded)"
        description: "Below SLA, investigation needed"
        pattern: "Orange"

      - label: "500ms+ (Critical)"
        description: "Severe performance issue"
        pattern: "Red"

  interaction_labels:
    tooltip_template: "{{region}} at {{hour}}: {{avg_response_time}}ms average ({{request_count}} requests, {{p95_response_time}}ms P95)"
    drill_down_hint: "Click cell to view detailed metrics"
    zoom_instructions: "Use mouse wheel to zoom into time periods"

  data_quality_indicators:
    incomplete_data_label: "Insufficient data (< 100 requests)"
    source_citation: "Source: Application logs, 7-day rolling average"
    last_updated: "Updated every 15 minutes"

  accessibility:
    aria_label: "Heatmap showing API response times by region and hour. US-East shows consistently good performance under 150ms. Asia-Pacific shows degraded performance during peak hours (8-12 UTC) with response times exceeding 400ms."
    long_description: "Complete data table available showing exact response times for each region-hour combination"
    keyboard_navigation_hint: "Use arrow keys to navigate cells, Enter to drill down"
    data_table_alternative: true
```

---

**Accessibility Requirements**: All visualizations must include text alternatives meeting WCAG 3.0 Level AA standards. Color cannot be the sole method of conveying information - use patterns, labels, or textures. Provide both aria-label for summary and long descriptions for detailed data. Ensure sufficient color contrast (minimum 4.5:1 for text, 3:1 for graphical elements). Offer tabular data alternative for complex visualizations. Support keyboard navigation for interactive charts.

**Psychological Principles**: Clear labels reduce cognitive load by eliminating ambiguity (cognitive fluency). Consistent formatting builds pattern recognition (schema theory). Data-ink ratio optimization focuses attention on insights over decoration (minimalism). Contextual annotations guide interpretation (anchoring and framing). Progressive disclosure prevents information overload (chunking principle).

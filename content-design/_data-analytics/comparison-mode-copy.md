## Comparison Mode Content System v1.0

**Purpose**: Design clear, informative copy for data comparison features that helps users understand performance changes, identify trends, and make meaningful period-over-period or segment-by-segment comparisons.

---

**PROMPT:**

Create comparison mode content for {{comparison_context}} where {{user_role}} compares {{primary_metric}} across {{comparison_dimensions}}.

=== COMPARISON CONTEXT ===
Comparison type: {{comparison_type}} (time-based/segment-based/cohort/A-B test/benchmark/multi-variant)
Primary comparison: {{primary_comparison}} (period-over-period/year-over-year/vs-target/vs-benchmark)
Data granularity: {{granularity}} (hourly/daily/weekly/monthly/quarterly)
Metric type: {{metric_type}} (absolute numbers/percentages/ratios/currency/counts)
Metric directionality: {{directionality}} (higher is better/lower is better/neutral/contextual)

=== COMPARISON PARAMETERS ===

**Time-Based Comparisons**:
- Current period: {{current_period}}
- Comparison period: {{comparison_period}}
- Period alignment: {{alignment}} (calendar/custom/rolling)
- Normalization needed: {{normalize}} (yes/no - adjust for different period lengths)

**Segment Comparisons**:
- Segment A: {{segment_a}}
- Segment B: {{segment_b}}
- Additional segments: {{additional_segments}}
- Segment characteristics: {{segment_attributes}}

**Calculation Methods**:
- Change calculation: {{change_calc}} (absolute difference/percentage change/ratio/index)
- Statistical significance: {{show_significance}} (yes/no)
- Confidence intervals: {{show_confidence}} (yes/no)
- Sample size considerations: {{show_sample_size}} (yes/no)

=== VISUALIZATION APPROACH ===

**Display Method**:
- Primary visualization: {{primary_viz}} (side-by-side/overlay/difference-only/trend)
- Secondary indicators: {{secondary_indicators}} (arrows/colors/badges/sparklines)
- Comparison summary: {{summary_location}} (header/inline/tooltip/panel)
- Detail level: {{detail_level}} (high-level/detailed/configurable)

**Color Semantics**:
- Positive change color: {{positive_color}}
- Negative change color: {{negative_color}}
- Neutral/no change color: {{neutral_color}}
- Contextual meaning: {{color_meaning}} (improvement/decline/informational)

=== USER GUIDANCE NEEDS ===

**Interpretation Support**:
- Context explanation: {{needs_context}} (yes/no)
- Benchmarking guidance: {{benchmark_help}} (yes/no)
- Statistical literacy level: {{stat_literacy}} (basic/intermediate/advanced)
- Action recommendations: {{suggest_actions}} (yes/no)

=== OUTPUT REQUIREMENTS ===

```yaml
comparison_content:
  mode_activation:
    toggle_label: "string (e.g., 'Compare', 'Enable comparison')"
    toggle_description: "string (explains what comparison shows)"
    mode_indicator: "string (shows comparison is active)"

  comparison_selector:
    section_title: "string (e.g., 'Compare to')"

    time_based_options:
      - option_id: "previous_period"
        label: "string (e.g., 'Previous period')"
        description: "string (explains automatic matching)"
        example: "string (shows actual comparison, e.g., 'Nov vs Oct')"

      - option_id: "previous_year"
        label: "string (e.g., 'Same period last year')"
        description: "string"
        example: "string"

      - option_id: "custom_period"
        label: "string (e.g., 'Custom time period')"
        description: "string"

    segment_options:
      - option_id: "segment_comparison"
        label: "string (e.g., 'Compare segments')"
        description: "string (how to select segments)"

    benchmark_options:
      - option_id: "industry_benchmark"
        label: "string (e.g., 'Industry average')"
        description: "string (source and methodology)"

      - option_id: "target"
        label: "string (e.g., 'Target/Goal')"
        description: "string"

  comparison_summary:
    headline_format:
      increase: "string format (e.g., '{{metric}} up {{change}}')"
      decrease: "string format (e.g., '{{metric}} down {{change}}')"
      no_change: "string format (e.g., '{{metric}} unchanged')"

    change_indicators:
      absolute_change: "string format (e.g., '+{{value}} {{unit}}')"
      percentage_change: "string format (e.g., '+{{percent}}%')"
      combined: "string format (e.g., '+{{value}} (+{{percent}}%)')"

    comparison_context: "string format (e.g., 'vs {{period}}')"

  visual_indicators:
    increase_indicator:
      icon: "string (e.g., 'arrow-up', 'trending-up')"
      text: "string (e.g., 'increased', 'up')"
      aria_label: "string format (e.g., 'Increased by {{change}}')"

    decrease_indicator:
      icon: "string (e.g., 'arrow-down', 'trending-down')"
      text: "string (e.g., 'decreased', 'down')"
      aria_label: "string format"

    neutral_indicator:
      icon: "string (e.g., 'minus', 'equal')"
      text: "string (e.g., 'unchanged', 'flat')"
      aria_label: "string format"

  metric_presentation:
    current_period:
      label: "string (e.g., 'Current', 'This period')"
      value_format: "string"

    comparison_period:
      label: "string (e.g., 'Previous', 'Last year')"
      value_format: "string"

    difference:
      label: "string (e.g., 'Change', 'Difference')"
      value_format: "string (with +/- indicator)"

  interpretation_guidance:
    positive_change:
      interpretation: "string (e.g., 'Performance improved')"
      context: "string (what this means for user)"
      suggested_action: "string (optional next steps)"

    negative_change:
      interpretation: "string (e.g., 'Performance declined')"
      context: "string"
      suggested_action: "string"

    statistical_notes:
      significance_indicator: "string (e.g., 'Statistically significant')"
      insignificance_note: "string (e.g., 'Change within normal variance')"
      small_sample_warning: "string (e.g., 'Limited data - interpret with caution')"

  period_normalization:
    normalized_label: "string (e.g., 'Normalized for period length')"
    normalization_explanation: "string (tooltip explaining adjustment)"
    show_both_option: "string (e.g., 'Show actual and normalized')"

  multi_metric_comparison:
    summary_format: "string (overview of all comparisons)"
    highlight_significant: "string (call out major changes)"
    mixed_results_message: "string (when some metrics up, others down)"

  comparison_table:
    column_headers:
      metric_name: "string (e.g., 'Metric')"
      current: "string (e.g., 'Current')"
      previous: "string (e.g., 'Previous')"
      change: "string (e.g., 'Change')"
      percent_change: "string (e.g., '% Change')"

    row_formatting:
      increased_row: "string (styling description)"
      decreased_row: "string"
      neutral_row: "string"

  chart_annotations:
    comparison_line_label: "string (legend entry)"
    difference_area_label: "string (shaded area explanation)"
    crossover_point_label: "string (where lines intersect)"

  export_comparison:
    export_label: "string (e.g., 'Export comparison')"
    export_includes: "string (what's in the export)"

  contextual_help:
    what_is_comparison: "string (explains feature)"
    how_to_interpret: "string (interpretation guide)"
    when_to_use: "string (use cases)"
    limitations: "string (caveats and constraints)"

  accessibility:
    comparison_summary_aria: "string format (complete description)"
    trend_direction_aria: "string format"
    color_independent_indicators: "boolean (must be true)"
```

=== COMPARISON LANGUAGE PATTERNS ===

**Increase Language**:
- Neutral: "increased by", "up", "higher"
- Positive (when good): "improved", "grew", "gained"
- Negative (when bad): "rose", "jumped", "climbed"

**Decrease Language**:
- Neutral: "decreased by", "down", "lower"
- Positive (when good): "improved", "dropped", "reduced"
- Negative (when bad): "declined", "fell", "slipped"

**Magnitude Modifiers**:
- Minimal: "slightly", "marginally", "modestly"
- Moderate: "noticeably", "considerably", "significantly"
- Large: "dramatically", "substantially", "sharply"

=== EXAMPLES ===

**Example 1: E-Commerce Revenue Comparison**
- comparison_context: "monthly sales dashboard"
- user_role: "e-commerce manager"
- primary_metric: "total revenue"
- comparison_dimensions: "month-over-month"
- comparison_type: "time-based"
- metric_type: "currency"
- directionality: "higher is better"

Output:
```yaml
comparison_content:
  mode_activation:
    toggle_label: "Compare periods"
    toggle_description: "View performance vs previous time periods"
    mode_indicator: "Comparison mode active"

  comparison_selector:
    section_title: "Compare to"

    time_based_options:
      - option_id: "previous_period"
        label: "Previous month"
        description: "Compare to the immediately preceding month"
        example: "November 2024 vs October 2024"

      - option_id: "previous_year"
        label: "Same month last year"
        description: "Compare to the same month in the previous year"
        example: "November 2024 vs November 2023"

      - option_id: "custom_period"
        label: "Custom comparison"
        description: "Select any month to compare against"

    benchmark_options:
      - option_id: "target"
        label: "Monthly target"
        description: "Compare to your revenue goal for this month"

  comparison_summary:
    headline_format:
      increase: "Revenue up {{change}} from last month"
      decrease: "Revenue down {{change}} from last month"
      no_change: "Revenue flat compared to last month"

    change_indicators:
      absolute_change: "+${{value}}"
      percentage_change: "+{{percent}}%"
      combined: "+${{value}} (+{{percent}}%)"

    comparison_context: "vs {{period}}"

  visual_indicators:
    increase_indicator:
      icon: "arrow-up"
      text: "increased"
      aria_label: "Revenue increased by {{change}} compared to {{period}}"

    decrease_indicator:
      icon: "arrow-down"
      text: "decreased"
      aria_label: "Revenue decreased by {{change}} compared to {{period}}"

  metric_presentation:
    current_period:
      label: "This month (Nov 2024)"
      value_format: "${{value}}"

    comparison_period:
      label: "Last month (Oct 2024)"
      value_format: "${{value}}"

    difference:
      label: "Change"
      value_format: "+${{value}} (+{{percent}}%)"

  interpretation_guidance:
    positive_change:
      interpretation: "Strong month-over-month growth"
      context: "Revenue is trending upward. This represents your third consecutive month of growth."
      suggested_action: "Review your top-performing products and consider increasing inventory."

    negative_change:
      interpretation: "Revenue declined from last month"
      context: "November typically sees 8% lower sales than October based on seasonal patterns."
      suggested_action: "Compare to November last year to account for seasonal variation."

  multi_metric_comparison:
    summary_format: "Revenue: +12% | Orders: +8% | Avg Order Value: +4%"
    highlight_significant: "Revenue grew significantly faster than order volume, indicating higher-value purchases."
```

**Example 2: Website Traffic A/B Test**
- comparison_context: "A/B test results dashboard"
- user_role: "product manager"
- primary_metric: "conversion rate"
- comparison_dimensions: "variant A vs variant B"
- comparison_type: "A-B test"
- metric_type: "percentage"
- directionality: "higher is better"
- show_significance: "yes"

Output:
```yaml
comparison_content:
  mode_activation:
    toggle_label: "Compare variants"
    toggle_description: "View side-by-side performance of test variants"
    mode_indicator: "Comparing Variant A vs Variant B"

  comparison_selector:
    section_title: "Test variants"

    segment_options:
      - option_id: "variant_a_vs_b"
        label: "Variant A (Control) vs Variant B (Test)"
        description: "Standard comparison of your two test groups"

      - option_id: "all_variants"
        label: "All variants"
        description: "View all test variants if running multi-variant test"

  comparison_summary:
    headline_format:
      increase: "Variant B converts {{change}} better than Variant A"
      decrease: "Variant B converts {{change}} worse than Variant A"
      no_change: "No significant difference between variants"

    change_indicators:
      absolute_change: "+{{value}} percentage points"
      percentage_change: "+{{percent}}% relative improvement"
      combined: "+{{value}}pp (+{{percent}}% relative)"

  visual_indicators:
    increase_indicator:
      icon: "trending-up"
      text: "Variant B performing better"
      aria_label: "Variant B conversion rate is {{change}} higher than Variant A"

  metric_presentation:
    current_period:
      label: "Variant A (Control)"
      value_format: "{{value}}% conversion rate"

    comparison_period:
      label: "Variant B (Test)"
      value_format: "{{value}}% conversion rate"

    difference:
      label: "Lift"
      value_format: "+{{value}}pp (+{{percent}}% relative)"

  interpretation_guidance:
    positive_change:
      interpretation: "Variant B shows statistically significant improvement"
      context: "Based on 12,847 visitors per variant (95% confidence, p < 0.05). Variant B's new checkout flow is improving conversions."
      suggested_action: "Consider rolling out Variant B to all users. Estimated revenue impact: +$47K/month."

    statistical_notes:
      significance_indicator: "✓ Statistically significant (p < 0.05)"
      insignificance_note: "Not statistically significant yet. Continue test to gather more data."
      small_sample_warning: "⚠ Limited sample size. Results may not be reliable until at least 1,000 conversions per variant."

  comparison_table:
    column_headers:
      metric_name: "Metric"
      current: "Variant A (Control)"
      previous: "Variant B (Test)"
      change: "Absolute difference"
      percent_change: "Relative lift"

  contextual_help:
    what_is_comparison: "A/B testing compares two versions of your product to determine which performs better."
    how_to_interpret: "Look for the 'statistically significant' indicator. Changes marked as significant are unlikely to be due to chance."
    when_to_use: "Use A/B tests to validate design changes, new features, or content variations before rolling out to all users."
    limitations: "Tests need sufficient sample size and time to reach statistical significance. External factors (holidays, marketing campaigns) can affect results."
```

**Example 3: Customer Segment Performance**
- comparison_context: "customer segmentation analysis"
- user_role: "marketing director"
- primary_metric: "customer lifetime value"
- comparison_dimensions: "customer segments"
- comparison_type: "segment-based"
- metric_type: "currency"
- directionality: "higher is better"

Output:
```yaml
comparison_content:
  mode_activation:
    toggle_label: "Compare segments"
    toggle_description: "Analyze performance differences across customer groups"
    mode_indicator: "Comparing 4 customer segments"

  comparison_selector:
    section_title: "Select segments to compare"

    segment_options:
      - option_id: "all_segments"
        label: "All segments"
        description: "Compare all customer segments (Enterprise, Mid-Market, SMB, Free)"

      - option_id: "custom_selection"
        label: "Select specific segments"
        description: "Choose which segments to include in comparison"

  comparison_summary:
    headline_format:
      increase: "{{segment}} shows {{change}} higher CLV than average"
      decrease: "{{segment}} shows {{change}} lower CLV than average"

    change_indicators:
      absolute_change: "${{value}}"
      percentage_change: "{{percent}}%"
      combined: "${{value}} ({{percent}}%)"

  metric_presentation:
    current_period:
      label: "{{segment_name}}"
      value_format: "${{value}} avg CLV"

    comparison_period:
      label: "All customers average"
      value_format: "${{value}} avg CLV"

    difference:
      label: "Difference from average"
      value_format: "+${{value}} (+{{percent}}%)"

  multi_metric_comparison:
    summary_format: "Enterprise: $12,400 | Mid-Market: $3,200 | SMB: $890 | Free: $0"
    highlight_significant: "Enterprise customers have 14x higher lifetime value than SMB customers, but represent only 8% of your customer base."
    mixed_results_message: "Segment performance varies significantly. Consider tailored strategies for each tier."

  comparison_table:
    column_headers:
      metric_name: "Segment"
      current: "Avg CLV"
      previous: "Customer count"
      change: "% of revenue"
      percent_change: "Churn rate"

    row_formatting:
      increased_row: "Highlight top-performing segments in green"
      decreased_row: "Highlight underperforming segments in amber"
      neutral_row: "Standard formatting for average performers"

  interpretation_guidance:
    positive_change:
      interpretation: "Enterprise segment significantly outperforms"
      context: "While Enterprise customers are only 8% of your base, they generate 62% of total revenue. Average CLV is $12,400 vs company average of $2,100."
      suggested_action: "Invest in enterprise sales and retention programs. Even small improvements in enterprise churn could significantly impact revenue."

  contextual_help:
    what_is_comparison: "Segment comparison helps identify which customer groups are most valuable and where to focus marketing and product efforts."
    how_to_interpret: "Look at both absolute metrics (CLV) and relative size (customer count). High-value but small segments may warrant different strategies than large but lower-value segments."
    when_to_use: "Use segment comparison to allocate resources, personalize marketing, and identify expansion opportunities."
```

---

**Accessibility Requirements**: Comparison indicators must not rely solely on color - use icons, text labels, and patterns. Provide clear ARIA labels describing comparison results. Ensure sufficient color contrast for all comparison indicators. Support keyboard navigation through comparison controls. Announce comparison changes to screen readers via live regions. Provide text alternatives for visual comparison charts. Ensure comparison tables have proper header associations. Include summary descriptions for screen reader users.

**Psychological Principles**: Relative comparisons create mental anchors for interpretation (anchoring effect). Visual indicators leverage pre-attentive processing (rapid cognition). Directional language frames performance perception (framing effect). Contextual explanations reduce misinterpretation (cognitive clarity). Statistical significance prevents premature conclusions (scientific rigor). Normalization enables fair comparisons (procedural justice). Magnitude modifiers calibrate emotional response (affective forecasting).

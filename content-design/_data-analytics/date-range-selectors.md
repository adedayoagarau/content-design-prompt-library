## Date Range Selector Content System v1.0

**Purpose**: Create intuitive, accessible copy for date and time range selection interfaces that helps users specify temporal boundaries for data analysis with appropriate presets and validation.

---

**PROMPT:**

Design date range selector content for {{analytics_context}} serving {{user_persona}} analyzing {{time_sensitive_data}}.

=== TEMPORAL CONTEXT ===
Data timeframe: {{data_timeframe}} (real-time/hourly/daily/weekly/monthly/historical)
Oldest available data: {{data_start_date}}
Data freshness: {{data_freshness}} (live/15min delay/1hr delay/daily updates)
Default date range: {{default_range}}
Typical analysis period: {{typical_period}} (day/week/month/quarter/year)
Business calendar: {{calendar_type}} (standard/fiscal/academic/custom)

=== SELECTOR CAPABILITIES ===

**Range Types**:
- Preset ranges: {{has_presets}} (yes/no)
- Custom range selection: {{has_custom}} (yes/no)
- Relative dates: {{has_relative}} (yes/no - "last N days", "past week")
- Rolling windows: {{has_rolling}} (yes/no - "rolling 30 days")
- Comparison periods: {{has_comparison}} (yes/no - "vs previous period")
- Multiple ranges: {{multi_range}} (yes/no - select multiple periods)

**Time Granularity**:
- Smallest unit: {{min_granularity}} (minute/hour/day/week/month)
- Time of day selection: {{has_time}} (yes/no)
- Timezone handling: {{timezone_behavior}} (user timezone/data timezone/selectable)
- Business hours filtering: {{has_business_hours}} (yes/no)

=== USER CONTEXT ===

**User Expertise**:
- Date concept familiarity: {{date_familiarity}} (basic/intermediate/advanced)
- Analysis frequency: {{analysis_frequency}} (daily/weekly/monthly/ad-hoc)
- Common use cases: {{common_use_cases}}
- Decision urgency: {{urgency}} (real-time monitoring/periodic review/strategic planning)

**Interface Context**:
- Selector location: {{selector_location}} (toolbar/filter panel/modal/inline)
- Screen size: {{device_type}} (desktop/tablet/mobile/responsive)
- Selection persistence: {{persistence}} (session/saved/default)
- Interaction pattern: {{interaction_pattern}} (dropdown/modal/inline calendar/quick toggles)

=== VALIDATION REQUIREMENTS ===

**Range Constraints**:
- Minimum range: {{min_range}} (e.g., "at least 1 day")
- Maximum range: {{max_range}} (e.g., "no more than 1 year")
- Allowed increments: {{allowed_increments}}
- Future date handling: {{future_dates}} (allowed/blocked/limited)
- Blackout periods: {{blackout_periods}} (dates with no data)

**Business Rules**:
- Fiscal period alignment: {{fiscal_alignment}}
- Weekend handling: {{weekend_rules}}
- Holiday exclusions: {{holiday_rules}}
- Data retention limits: {{retention_limit}}

=== OUTPUT REQUIREMENTS ===

```yaml
date_range_content:
  selector_interface:
    field_label: "string (clear, concise)"
    placeholder_text: "string (shows format or current selection)"
    help_text: "string (explains data availability)"
    icon_label: "string (for calendar icon)"

  preset_ranges:
    section_title: "string (e.g., 'Quick select', 'Common periods')"

    presets:
      - preset_id: "today"
        display_text: "Today"
        description: "string (tooltip explaining exact range)"
        date_format_example: "string (e.g., 'Nov 23, 2024')"

      - preset_id: "yesterday"
        display_text: "Yesterday"
        description: "string"
        date_format_example: "string"

      - preset_id: "last_7_days"
        display_text: "Last 7 days"
        description: "string (e.g., 'Including today')"
        date_format_example: "string (e.g., 'Nov 17-23, 2024')"

      - preset_id: "last_30_days"
        display_text: "Last 30 days"
        description: "string"

      - preset_id: "this_month"
        display_text: "This month"
        description: "string (e.g., 'Month to date')"

      - preset_id: "last_month"
        display_text: "Last month"
        description: "string (e.g., 'Full calendar month')"

      - preset_id: "this_quarter"
        display_text: "This quarter"
        description: "string (specify Q1/Q2/Q3/Q4 definition)"

      - preset_id: "this_year"
        display_text: "This year"
        description: "string (year to date)"

      - preset_id: "all_time"
        display_text: "All time"
        description: "string (data availability note)"

      - preset_id: "custom"
        display_text: "Custom range"
        description: "string (opens date picker)"

  custom_range_picker:
    section_title: "string (e.g., 'Select custom range')"

    start_date:
      field_label: "string (e.g., 'Start date', 'From')"
      placeholder: "string (format hint, e.g., 'MM/DD/YYYY')"
      calendar_aria_label: "string"

    end_date:
      field_label: "string (e.g., 'End date', 'To')"
      placeholder: "string"
      calendar_aria_label: "string"

    date_separator: "string (visual separator, e.g., '—', 'to')"

    quick_actions:
      today_button: "string (e.g., 'Today')"
      clear_button: "string (e.g., 'Clear dates')"

  relative_range_builder:
    section_title: "string (e.g., 'Dynamic date range')"

    last_n_units:
      field_label: "string (e.g., 'Last')"
      number_input_label: "string"
      unit_selector_label: "string"
      unit_options:
        - "hours"
        - "days"
        - "weeks"
        - "months"
        - "quarters"
        - "years"
      example_text: "string format (e.g., 'Example: Last {{n}} {{unit}}')"

    rolling_window:
      field_label: "string (e.g., 'Rolling window')"
      description: "string (explains rolling vs static)"

  comparison_period:
    section_title: "string (e.g., 'Compare to')"
    enable_comparison_toggle: "string (e.g., 'Compare to previous period')"

    comparison_options:
      - option_id: "previous_period"
        label: "string (e.g., 'Previous period')"
        description: "string (explains what this means)"
        example: "string (shows actual dates)"

      - option_id: "previous_year"
        label: "string (e.g., 'Same period last year')"
        description: "string"
        example: "string"

      - option_id: "custom_comparison"
        label: "string (e.g., 'Custom comparison period')"
        description: "string"

  time_of_day_selector:
    section_title: "string (e.g., 'Time range', 'Hours')"
    all_day_toggle: "string (e.g., 'All day', '24 hours')"

    start_time:
      field_label: "string"
      placeholder: "string (format hint, e.g., 'HH:MM')"
      format: "12hr/24hr"

    end_time:
      field_label: "string"
      placeholder: "string"

    business_hours_preset: "string (e.g., 'Business hours (9 AM - 5 PM)')"

  timezone_selector:
    field_label: "string (e.g., 'Timezone')"
    current_timezone_display: "string format (e.g., 'Your time ({{tz}})')"
    data_timezone_option: "string (e.g., 'Data source time (UTC)')"
    help_text: "string (explains timezone impact)"

  validation_messages:
    invalid_range:
      end_before_start: "string (e.g., 'End date must be after start date')"
      range_too_long: "string format (e.g., 'Maximum range is {{max}}')"
      range_too_short: "string format (e.g., 'Minimum range is {{min}}')"

    future_date_error: "string (e.g., 'Future dates not available')"
    no_data_warning: "string format (e.g., 'No data available for {{date}}')"
    partial_data_warning: "string (e.g., 'Data incomplete for today')"

    data_retention_limit: "string format (e.g., 'Data only available for last {{days}} days')"

  applied_range_display:
    compact_format: "string format (e.g., '{{start}} - {{end}}')"
    verbose_format: "string format (e.g., 'Showing data from {{start}} to {{end}}')"
    relative_format: "string format (e.g., 'Last {{n}} days')"

    with_comparison: "string format (e.g., '{{range}} vs {{comparison}}')"
    with_timezone: "string format (e.g., '{{range}} ({{timezone}})')"

  action_buttons:
    apply_button:
      text: "string (e.g., 'Apply', 'Update')"
      loading_text: "string (e.g., 'Loading data...')"

    cancel_button:
      text: "string (e.g., 'Cancel')"

    reset_button:
      text: "string (e.g., 'Reset to default')"

  calendar_interface:
    month_navigation:
      previous_month_aria: "string (e.g., 'Previous month')"
      next_month_aria: "string (e.g., 'Next month')"
      month_year_format: "string (e.g., 'MMMM YYYY')"

    day_names:
      format: "abbreviated/full"
      first_day_of_week: "Sunday/Monday"

    date_cell:
      selected_aria: "string format"
      disabled_aria: "string format"
      today_indicator: "string (e.g., 'Today')"

  keyboard_shortcuts:
    - shortcut: "key combination"
      action: "string"
      description: "string"

  accessibility:
    date_picker_role: "dialog"
    live_region_announcement: "string format (announces selection)"
    instructions: "string (how to use date picker)"
```

=== DATE FORMAT PATTERNS ===

**Display Formats by Context**:
- Compact (space-constrained): "11/23/24"
- Standard (default): "Nov 23, 2024"
- Verbose (clarity): "November 23, 2024"
- ISO (technical): "2024-11-23"
- Relative (recent): "3 days ago"
- Range (selection): "Nov 17-23, 2024"

**Localization Considerations**:
- Date order: MM/DD/YYYY vs DD/MM/YYYY vs YYYY-MM-DD
- Month names: Full vs abbreviated vs numeric
- First day of week: Sunday vs Monday
- 12-hour vs 24-hour time format

=== EXAMPLES ===

**Example 1: Marketing Analytics Dashboard**
- analytics_context: "social media analytics dashboard"
- user_persona: "social media manager"
- time_sensitive_data: "post engagement metrics"
- data_timeframe: "real-time"
- oldest_available_data: "January 1, 2022"
- data_freshness: "15min delay"
- default_range: "Last 30 days"
- typical_period: "week or month"

Output:
```yaml
date_range_content:
  selector_interface:
    field_label: "Date range"
    placeholder_text: "Last 30 days"
    help_text: "Data updated every 15 minutes. Historical data available from Jan 2022."
    icon_label: "Select date range"

  preset_ranges:
    section_title: "Common periods"

    presets:
      - preset_id: "today"
        display_text: "Today"
        description: "Today's metrics so far (updates every 15 minutes)"
        date_format_example: "Nov 23, 2024"

      - preset_id: "yesterday"
        display_text: "Yesterday"
        description: "Complete data for yesterday"
        date_format_example: "Nov 22, 2024"

      - preset_id: "last_7_days"
        display_text: "Last 7 days"
        description: "Last 7 complete days, including today"
        date_format_example: "Nov 17-23, 2024"

      - preset_id: "last_30_days"
        display_text: "Last 30 days"
        description: "Last 30 days including today (recommended for trend analysis)"

      - preset_id: "this_month"
        display_text: "This month"
        description: "Month to date (Nov 1-23)"

      - preset_id: "last_month"
        display_text: "Last month"
        description: "Complete previous calendar month"

      - preset_id: "custom"
        display_text: "Custom range..."
        description: "Select specific start and end dates"

  custom_range_picker:
    section_title: "Select custom range"

    start_date:
      field_label: "Start date"
      placeholder: "MM/DD/YYYY"
      calendar_aria_label: "Choose start date"

    end_date:
      field_label: "End date"
      placeholder: "MM/DD/YYYY"
      calendar_aria_label: "Choose end date"

    date_separator: "to"

    quick_actions:
      today_button: "Today"
      clear_button: "Clear"

  comparison_period:
    section_title: "Compare to"
    enable_comparison_toggle: "Compare to previous period"

    comparison_options:
      - option_id: "previous_period"
        label: "Previous period"
        description: "Compare to the same number of days before your selected range"
        example: "If viewing Nov 17-23, compare to Nov 10-16"

      - option_id: "previous_year"
        label: "Same period last year"
        description: "Compare to the exact same dates one year ago"
        example: "If viewing Nov 17-23, 2024, compare to Nov 17-23, 2023"

  validation_messages:
    invalid_range:
      end_before_start: "End date must be after start date"
      range_too_long: "Maximum date range is 1 year. Please select a shorter period."
      range_too_short: "Minimum date range is 1 day"

    future_date_error: "Social media data not available for future dates"
    partial_data_warning: "Today's data is incomplete and updates every 15 minutes"

    data_retention_limit: "Data only available from January 1, 2022 onwards"

  applied_range_display:
    compact_format: "{{start_short}} - {{end_short}}"
    verbose_format: "Showing data from {{start_long}} to {{end_long}}"
    relative_format: "Last {{n}} days"
    with_comparison: "{{range}} vs previous period"

  action_buttons:
    apply_button:
      text: "Apply"
      loading_text: "Loading data..."

    cancel_button:
      text: "Cancel"

    reset_button:
      text: "Reset to last 30 days"

  accessibility:
    live_region_announcement: "Date range updated to {{range}}. Data is loading."
    instructions: "Use arrow keys to navigate calendar, Enter to select, Escape to close"
```

**Example 2: Sales Performance Report**
- analytics_context: "quarterly sales report generator"
- user_persona: "sales operations manager"
- time_sensitive_data: "deal close dates and revenue"
- data_timeframe: "daily"
- oldest_available_data: "January 1, 2015"
- data_freshness: "daily updates at midnight"
- default_range: "This quarter"
- typical_period: "quarter"
- calendar_type: "fiscal"

Output:
```yaml
date_range_content:
  selector_interface:
    field_label: "Reporting period"
    placeholder_text: "Q4 FY2024"
    help_text: "Sales data updated daily. Fiscal year runs Feb 1 - Jan 31."
    icon_label: "Select reporting period"

  preset_ranges:
    section_title: "Select period"

    presets:
      - preset_id: "this_quarter"
        display_text: "This quarter (Q4 FY2024)"
        description: "Nov 1, 2024 - Jan 31, 2025 (quarter to date)"
        date_format_example: "Q4 FY2024"

      - preset_id: "last_quarter"
        display_text: "Last quarter (Q3 FY2024)"
        description: "Aug 1 - Oct 31, 2024 (complete quarter)"

      - preset_id: "this_fiscal_year"
        display_text: "This fiscal year (FY2024)"
        description: "Feb 1, 2024 - Jan 31, 2025 (year to date)"

      - preset_id: "last_fiscal_year"
        display_text: "Last fiscal year (FY2023)"
        description: "Feb 1, 2023 - Jan 31, 2024 (complete year)"

      - preset_id: "custom"
        display_text: "Custom date range..."
        description: "Select any start and end dates"

  custom_range_picker:
    section_title: "Custom date range"

    start_date:
      field_label: "Report start date"
      placeholder: "MM/DD/YYYY"

    end_date:
      field_label: "Report end date"
      placeholder: "MM/DD/YYYY"

    date_separator: "through"

  comparison_period:
    section_title: "Comparison period (optional)"

    comparison_options:
      - option_id: "previous_period"
        label: "Previous period"
        description: "Compare to the immediately preceding period of same length"
        example: "Q4 vs Q3"

      - option_id: "previous_year"
        label: "Year-over-year"
        description: "Compare to same period in previous fiscal year"
        example: "Q4 FY2024 vs Q4 FY2023"

  validation_messages:
    invalid_range:
      end_before_start: "Report end date must be after start date"
      range_too_long: "Reports spanning more than 2 fiscal years may be slow to generate. Consider splitting into multiple reports."

    future_date_error: "Cannot include future dates in report. End date adjusted to today."

    data_retention_limit: "Sales data available from January 1, 2015 onwards (10 years of history)"

  applied_range_display:
    verbose_format: "{{start}} through {{end}} ({{fiscal_period}})"
    with_comparison: "{{range}} compared to {{comparison}}"
```

**Example 3: Real-Time Operational Dashboard**
- analytics_context: "system monitoring dashboard"
- user_persona: "DevOps engineer"
- time_sensitive_data: "server metrics and logs"
- data_timeframe: "real-time"
- oldest_available_data: "30 days ago"
- data_freshness: "live"
- default_range: "Last 1 hour"
- typical_period: "hour or day"
- min_granularity: "minute"
- has_time: "yes"

Output:
```yaml
date_range_content:
  selector_interface:
    field_label: "Time range"
    placeholder_text: "Last 1 hour"
    help_text: "Real-time data. Historical logs retained for 30 days."
    icon_label: "Select time range"

  preset_ranges:
    section_title: "Quick select"

    presets:
      - preset_id: "last_15_min"
        display_text: "Last 15 minutes"
        description: "Real-time monitoring view"
        date_format_example: "2:17 PM - 2:32 PM"

      - preset_id: "last_1_hour"
        display_text: "Last hour"
        description: "Recommended for troubleshooting recent issues"

      - preset_id: "last_3_hours"
        display_text: "Last 3 hours"
        description: "Recent trends and patterns"

      - preset_id: "last_24_hours"
        display_text: "Last 24 hours"
        description: "Daily performance overview"

      - preset_id: "last_7_days"
        display_text: "Last 7 days"
        description: "Weekly trends (minute-level data aggregated to hourly)"

      - preset_id: "custom"
        display_text: "Custom range..."
        description: "Select specific date and time"

  relative_range_builder:
    section_title: "Dynamic time range"

    last_n_units:
      field_label: "Show last"
      number_input_label: "Number"
      unit_selector_label: "Time unit"
      unit_options:
        - "minutes"
        - "hours"
        - "days"
      example_text: "Example: Last 30 minutes, Last 6 hours"

    rolling_window:
      field_label: "Auto-refresh"
      description: "Keep time window fixed and continuously update data (rolling window)"

  time_of_day_selector:
    section_title: "Time of day"
    all_day_toggle: "All hours (00:00 - 23:59)"

    start_time:
      field_label: "From"
      placeholder: "HH:MM"
      format: "24hr"

    end_time:
      field_label: "To"
      placeholder: "HH:MM"

    business_hours_preset: "Business hours only (09:00 - 17:00)"

  timezone_selector:
    field_label: "Timezone"
    current_timezone_display: "Your timezone ({{tz}})"
    data_timezone_option: "Server time (UTC)"
    help_text: "Logs are stored in UTC. Select your timezone for easier interpretation."

  validation_messages:
    invalid_range:
      range_too_long: "Time ranges over 30 days are not supported. Historical data is aggregated after 7 days."

  applied_range_display:
    relative_format: "Last {{n}} {{unit}}"
    with_timezone: "{{range}} ({{timezone}})"

  keyboard_shortcuts:
    - shortcut: "R"
      action: "Refresh data"
      description: "Reload metrics for current time range"

    - shortcut: "1"
      action: "Last hour"
      description: "Quick select last 1 hour"

    - shortcut: "T"
      action: "Jump to now"
      description: "Reset to current real-time view"
```

---

**Accessibility Requirements**: Date pickers must be keyboard navigable following WAI-ARIA date picker pattern. Provide clear focus indicators and selection states. Announce date selections to screen readers via ARIA live regions. Support standard date picker keyboard shortcuts (arrows for navigation, Enter for selection, Escape to close). Ensure calendar grids have proper row/column headers. Validate and provide clear error messages. Support both mouse and keyboard interactions equally. Provide text alternatives for visual date representations.

**Psychological Principles**: Preset options reduce decision fatigue (choice architecture). Relative dates align with natural thinking ("last week" vs specific dates). Clear validation prevents frustration (immediate feedback). Comparison options facilitate mental benchmarking (anchoring effect). Default selections reflect common use cases (smart defaults). Visual calendar aids spatial memory (dual coding theory). Timezone clarity prevents confusion and builds trust (transparency).

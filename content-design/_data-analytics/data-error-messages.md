## Data Error Message Framework v1.0

**Purpose**: Create precise, actionable error messaging for data-related failures that helps users understand data quality issues, system limitations, and recovery paths in analytics contexts.

---

**PROMPT:**

Design error messaging for {{error_scenario}} occurring in {{analytics_context}} for {{user_persona}}.

=== ERROR CLASSIFICATION ===
Error category: {{error_category}} (data quality/query/connection/processing/permissions/limits)
Error severity: {{error_severity}} (critical/high/medium/low)
Data impact: {{data_impact}} (complete failure/partial results/delayed results/degraded accuracy)
User fault: {{user_causation}} (user error/system error/external dependency/ambiguous)
Frequency: {{error_frequency}} (common/occasional/rare)
Recoverability: {{recovery_type}} (automatic/user action/admin action/time-dependent/permanent)

=== DATA CONTEXT ===

**Data Characteristics**:
- Data source: {{data_source}} (database/API/file upload/integration/live stream)
- Data volume affected: {{affected_volume}}
- Query complexity: {{query_complexity}} (simple/moderate/complex)
- Data dependencies: {{dependencies}}
- Temporal scope: {{time_scope}} (real-time/historical/both)

**User Intent**:
- Attempted action: {{attempted_action}}
- Expected outcome: {{expected_outcome}}
- Business criticality: {{business_criticality}} (mission critical/important/nice to have)
- Alternative paths: {{alternative_workflows}}

=== TECHNICAL DETAILS ===

**System State**:
- Error code: {{error_code}}
- Technical message: {{technical_message}}
- Root cause: {{root_cause}}
- Affected components: {{affected_components}}
- Upstream dependencies: {{upstream_status}}

**Failure Mode**:
- Point of failure: {{failure_point}} (validation/execution/rendering/storage)
- Partial results available: {{has_partial_results}} (yes/no)
- Cached data available: {{has_cached_data}} (yes/no)
- Fallback options: {{fallback_options}}

=== USER COMMUNICATION STRATEGY ===

**Transparency Level**:
- Explain technical cause: {{explain_technical}} (yes/simplified/no)
- Show error codes: {{show_error_code}} (yes/for support/no)
- Disclose impact scope: {{disclose_scope}} (specific/general/none)
- Estimate resolution time: {{show_eta}} (specific/range/unknown)

**Tone Calibration**:
- Apology needed: {{needs_apology}} (yes/no)
- Urgency level: {{urgency_tone}} (urgent/moderate/calm)
- Reassurance emphasis: {{reassurance_level}} (high/medium/low)
- Educational opportunity: {{teach_concept}} (yes/no)

=== OUTPUT REQUIREMENTS ===

```yaml
error_messaging:
  user_facing_content:
    error_title: "string (4-8 words, specific to error type)"
    error_description: "string (1-3 sentences, plain language explanation)"
    impact_statement: "string (what the user cannot do or what data is affected)"

  technical_details:
    error_code: "string (if shown to user)"
    timestamp: "format string"
    affected_query_summary: "string (sanitized query or action description)"

  recovery_guidance:
    primary_action:
      action_label: "string (button or link text)"
      action_description: "string (what this will do)"
      expected_outcome: "string (what happens if successful)"

    secondary_actions:
      - action_label: "string"
        action_description: "string"
        when_to_use: "string"

    troubleshooting_steps:
      - step_number: "integer"
        instruction: "string (clear, specific)"
        expected_result: "string"

  partial_results_handling:
    show_partial_data: "boolean"
    partial_data_warning: "string (if showing incomplete results)"
    data_quality_indicator: "string (how to show affected/missing data)"

  user_education:
    why_this_happened: "string (optional explanation)"
    how_to_prevent: "string (optional prevention tips)"
    related_limitations: "string (system constraints user should know)"

  support_escalation:
    support_link_text: "string"
    support_context_included: ["automatic diagnostic data sent"]
    when_to_contact_support: "string (guidance on self-serve vs. escalate)"

  alternative_workflows:
    suggested_alternatives:
      - alternative: "string (what user can do instead)"
        limitation: "string (how it differs from original intent)"

  time_dependent_messaging:
    immediate: "string (shown right when error occurs)"
    after_30_seconds: "string (if error persists)"
    after_retry_attempts: "string (if user tries again)"

  accessibility:
    aria_role: "alert/status"
    screen_reader_announcement: "string (optimized for audio)"
    focus_management: "string (where focus goes after error)"

  visual_treatment:
    icon: "string (error icon name)"
    color_coding: "error/warning/info"
    dismissible: "boolean"
    persistence: "toast/modal/inline/banner"
```

=== ERROR TYPE TEMPLATES ===

**Query Timeout Error**:
- User message: "Your query is taking longer than expected"
- Explanation: Query complexity or data volume
- Action: Simplify query, reduce date range, or contact support

**Data Quality Error**:
- User message: "Some data may be incomplete or inaccurate"
- Explanation: Known data quality issues
- Action: Show affected periods, offer to continue with partial data

**Permission Error**:
- User message: "You don't have access to this data"
- Explanation: Role-based restrictions
- Action: Request access, contact administrator

**Rate Limit Error**:
- User message: "Too many requests - please wait"
- Explanation: API rate limiting or resource protection
- Action: Show countdown timer, retry automatically

**Invalid Input Error**:
- User message: "This filter combination isn't supported"
- Explanation: Validation rules or constraints
- Action: Highlight invalid inputs, suggest corrections

=== EXAMPLES ===

**Example 1: Database Query Timeout**
- error_scenario: "SQL query exceeded 30-second timeout"
- analytics_context: "custom report builder"
- user_persona: "business analyst"
- error_category: "query"
- error_severity: "medium"
- data_impact: "complete failure"
- user_causation: "user error"
- recovery_type: "user action"

Output:
```yaml
error_messaging:
  user_facing_content:
    error_title: "Query took too long to complete"
    error_description: "Your report includes 18 months of data across 4 million records. Queries this large can take longer than our 30-second limit."
    impact_statement: "The report could not be generated. Your data is safe, but you'll need to adjust your query parameters."

  technical_details:
    error_code: "QUERY_TIMEOUT_30S"
    timestamp: "2024-11-23 14:32:17 UTC"
    affected_query_summary: "Custom report: Revenue by Region, Jan 2023 - Jun 2024, all products"

  recovery_guidance:
    primary_action:
      action_label: "Reduce date range"
      action_description: "Opens date selector to choose a shorter time period"
      expected_outcome: "Faster query execution with fewer records to process"

    secondary_actions:
      - action_label: "Remove some filters"
        action_description: "Simplify your report by removing dimensions"
        when_to_use: "If you need the full date range but can reduce other complexity"

      - action_label: "Schedule as overnight report"
        action_description: "Run this query during off-peak hours without time limits"
        when_to_use: "For comprehensive reports that you can wait for"

    troubleshooting_steps:
      - step_number: 1
        instruction: "Try reducing your date range to 6 months or less"
        expected_result: "Report should complete in under 10 seconds"

      - step_number: 2
        instruction: "Remove any unnecessary columns or groupings"
        expected_result: "Simpler queries process faster"

      - step_number: 3
        instruction: "Consider creating a saved view with pre-aggregated data"
        expected_result: "Recurring reports will run much faster"

  user_education:
    why_this_happened: "Large datasets require significant processing time. Our 30-second limit ensures the system remains responsive for all users."
    how_to_prevent: "For large date ranges, use monthly or quarterly groupings instead of daily. Pre-aggregate frequently used combinations."
    related_limitations: "Queries analyzing more than 5 million records may require overnight processing regardless of date range."

  support_escalation:
    support_link_text: "Contact support for query optimization help"
    when_to_contact_support: "If you've simplified your query but still see timeouts, our team can help optimize your report structure."

  alternative_workflows:
    suggested_alternatives:
      - alternative: "Export raw data and analyze in Excel or BI tool"
        limitation: "Manual process, but no query time limits"

      - alternative: "Use our pre-built dashboard for this date range"
        limitation: "Less customization, but instant results"
```

**Example 2: Data Integration Connection Failure**
- error_scenario: "Third-party API connection lost"
- analytics_context: "marketing attribution dashboard"
- user_persona: "marketing manager"
- error_category: "connection"
- error_severity: "high"
- data_impact: "partial results"
- user_causation: "external dependency"
- recovery_type: "time-dependent"

Output:
```yaml
error_messaging:
  user_facing_content:
    error_title: "Cannot connect to Google Ads data"
    error_description: "We're unable to fetch your latest Google Ads metrics. This may be due to a temporary connection issue or expired authentication."
    impact_statement: "Your dashboard shows data up to 6 hours ago. Recent Google Ads performance is not included."

  technical_details:
    error_code: "INTEGRATION_CONNECTION_FAILED_GADS"
    timestamp: "2024-11-23 14:45:03 UTC"
    affected_query_summary: "Google Ads integration last successful sync: 6 hours ago"

  recovery_guidance:
    primary_action:
      action_label: "Retry connection"
      action_description: "Attempts to reconnect to Google Ads API"
      expected_outcome: "If successful, latest data will load within 2-3 minutes"

    secondary_actions:
      - action_label: "Re-authenticate Google Ads"
        action_description: "Redirects to Google to refresh your authorization"
        when_to_use: "If retry fails or you see 'authentication expired' message"

      - action_label: "View cached data"
        action_description: "Continue using dashboard with last successful data pull"
        when_to_use: "If you need approximate insights and can accept 6-hour delay"

    troubleshooting_steps:
      - step_number: 1
        instruction: "Click 'Retry connection' to attempt reconnection"
        expected_result: "Connection re-established and data begins syncing"

      - step_number: 2
        instruction: "If retry fails, check Google Ads Status Dashboard"
        expected_result: "Confirm whether Google's API is experiencing issues"

      - step_number: 3
        instruction: "Re-authenticate your Google Ads account connection"
        expected_result: "Fresh authorization token may resolve permission issues"

  partial_results_handling:
    show_partial_data: true
    partial_data_warning: "Data shown through 8:45 AM. Google Ads metrics from the last 6 hours are unavailable."
    data_quality_indicator: "Gray out or stripe pattern on missing data periods. Show warning icon on Google Ads metrics cards."

  user_education:
    why_this_happened: "Third-party integrations occasionally experience connection issues due to API changes, rate limits, or authentication expiration. Your other data sources are unaffected."
    how_to_prevent: "We automatically retry failed connections every 15 minutes. You can also set up alerts to notify you of integration failures."

  support_escalation:
    support_link_text: "Report persistent connection issue"
    support_context_included: ["integration name", "error code", "last successful sync time", "retry attempts"]
    when_to_contact_support: "If connection remains down for more than 2 hours or you see repeated authentication failures."

  time_dependent_messaging:
    immediate: "Retrying connection to Google Ads..."
    after_30_seconds: "Connection attempt failed. You may need to re-authenticate."
    after_retry_attempts: "Multiple retry attempts unsuccessful. This may indicate an issue with Google Ads API or your account permissions."

  accessibility:
    aria_role: "alert"
    screen_reader_announcement: "Warning: Cannot connect to Google Ads data. Dashboard showing data from 6 hours ago. Retry connection or re-authenticate to restore live data."
    focus_management: "Focus moves to primary 'Retry connection' button"
```

**Example 3: Data Validation Error on File Upload**
- error_scenario: "CSV upload contains invalid data formats"
- analytics_context: "bulk data import tool"
- user_persona: "data analyst"
- error_category: "data quality"
- error_severity: "medium"
- data_impact: "partial results"
- user_causation: "user error"
- recovery_type: "user action"

Output:
```yaml
error_messaging:
  user_facing_content:
    error_title: "7 rows have formatting errors"
    error_description: "Your CSV uploaded successfully, but some data couldn't be imported due to formatting issues in the 'revenue' and 'date' columns."
    impact_statement: "4,293 of 4,300 rows imported successfully. 7 rows were skipped and need correction."

  technical_details:
    error_code: "IMPORT_VALIDATION_FAILED_PARTIAL"
    timestamp: "2024-11-23 15:12:44 UTC"
    affected_query_summary: "File: Q4_revenue_data.csv, 7 validation errors across 2 columns"

  recovery_guidance:
    primary_action:
      action_label: "Download error report"
      action_description: "CSV file showing which rows failed and why"
      expected_outcome: "Detailed list of row numbers, problematic values, and expected formats"

    secondary_actions:
      - action_label: "Import successful rows anyway"
        action_description: "Proceed with 4,293 valid rows, skipping the 7 errors"
        when_to_use: "If the skipped rows represent a small, acceptable loss"

      - action_label: "Cancel and fix source file"
        action_description: "Discards this import attempt so you can correct and re-upload"
        when_to_use: "If you need 100% data completeness"

    troubleshooting_steps:
      - step_number: 1
        instruction: "Download the error report to see specific issues"
        expected_result: "CSV showing row 47, 103, 299, etc. with validation errors highlighted"

      - step_number: 2
        instruction: "Common issues: Check that revenue values are numbers (no '$' or commas), dates are YYYY-MM-DD format"
        expected_result: "Understanding of format requirements"

      - step_number: 3
        instruction: "Fix errors in your original file and re-upload"
        expected_result: "All rows import successfully on second attempt"

  partial_results_handling:
    show_partial_data: true
    partial_data_warning: "Currently showing 4,293 successfully imported rows. 7 rows with errors are not included."
    data_quality_indicator: "Banner at top of data table showing '7 rows skipped' with link to error details"

  user_education:
    why_this_happened: "Data validation ensures your analytics are accurate. Common causes: date formatting inconsistencies, currency symbols in number fields, or special characters in text fields."
    how_to_prevent: "Use our CSV template to ensure correct formatting. Enable 'strict mode' in your spreadsheet to catch errors before export."
    related_limitations: "Revenue values must be numeric (no formatting). Dates must use YYYY-MM-DD format. Text fields limited to 255 characters."

  alternative_workflows:
    suggested_alternatives:
      - alternative: "Use our spreadsheet integration for automatic validation"
        limitation: "Requires Google Sheets or Excel Online, but validates as you type"

  accessibility:
    aria_role: "status"
    screen_reader_announcement: "Partial import complete. 4,293 rows imported successfully. 7 rows skipped due to formatting errors. Download error report for details."
    focus_management: "Focus on 'Download error report' button for immediate action"

  visual_treatment:
    icon: "alert-triangle"
    color_coding: "warning"
    dismissible: false
    persistence: "inline"
```

---

**Accessibility Requirements**: Error messages must be announced to screen readers using ARIA live regions with appropriate roles (alert for critical, status for informational). Ensure error text has minimum 4.5:1 color contrast. Don't rely on color alone to indicate errors - use icons and text. Provide focus management to guide users to corrective actions. Support keyboard navigation for all error recovery options. Include error summaries at page level for users who navigate by landmarks.

**Psychological Principles**: Locus of control clarity reduces frustration (attribution theory). Specific recovery steps prevent learned helplessness (agency). Progressive disclosure of technical details respects varied expertise levels (zone of proximal development). Partial success acknowledgment maintains motivation (progress principle). Time estimates reduce uncertainty anxiety (temporal discounting). Educational framing transforms errors into learning opportunities (growth mindset).

## Report Generation Content System v1.0

**Purpose**: Design clear, professional copy for automated report generation interfaces that guides users through configuration, sets accurate expectations, and delivers actionable insights in various output formats.

---

**PROMPT:**

Create comprehensive report generation content for {{report_type}} serving {{target_audience}} in {{business_context}}.

=== REPORT SPECIFICATION ===
Report category: {{report_category}} (financial/operational/marketing/sales/analytics/compliance)
Report frequency: {{frequency}} (on-demand/scheduled/recurring/triggered)
Output formats: {{output_formats}} (PDF/Excel/CSV/PowerPoint/email/dashboard)
Report complexity: {{complexity}} (simple summary/detailed analysis/executive overview/technical deep-dive)
Customization level: {{customization}} (template-only/configurable/fully custom)
Distribution method: {{distribution}} (download/email/shared link/API/automated delivery)

=== DATA CHARACTERISTICS ===

**Data Sources**:
- Primary data source: {{primary_source}}
- Secondary sources: {{secondary_sources}}
- Data refresh rate: {{refresh_rate}}
- Historical depth: {{historical_range}}
- Data volume: {{data_volume}}

**Calculation Complexity**:
- Metric calculations: {{calculation_types}}
- Aggregation levels: {{aggregation_levels}}
- Comparison periods: {{comparison_periods}}
- Statistical methods: {{statistical_methods}}

=== USER CONTEXT ===

**Audience Profile**:
- Primary recipients: {{primary_recipients}}
- Secondary stakeholders: {{secondary_stakeholders}}
- Technical expertise: {{technical_level}} (executive/business/analyst/technical)
- Decision-making authority: {{decision_authority}}
- Usage pattern: {{usage_pattern}} (regular review/ad-hoc analysis/compliance archival)

**User Journey**:
- Report trigger: {{trigger_action}} (user initiated/scheduled/event-based)
- Configuration complexity: {{config_steps}}
- Generation time: {{generation_time}}
- Expected use case: {{use_case}}

=== INTERFACE ELEMENTS ===

**Configuration Flow**:
- Setup steps: {{setup_steps}}
- Required fields: {{required_fields}}
- Optional parameters: {{optional_parameters}}
- Validation requirements: {{validation_rules}}
- Preview availability: {{has_preview}} (yes/no)

**Report Metadata**:
- Report title format: {{title_format}}
- Date range display: {{date_display}}
- Generated timestamp: {{timestamp_format}}
- Report version/ID: {{versioning}}
- Confidentiality level: {{confidentiality}}

=== OUTPUT REQUIREMENTS ===

```yaml
report_generation_content:
  configuration_interface:
    page_title: "string (action-oriented, 3-5 words)"
    page_description: "string (explains report purpose and contents)"
    help_text: "string (guides user through configuration process)"

  report_builder_fields:
    report_name:
      field_label: "string"
      placeholder: "string (example report name)"
      help_text: "string (naming conventions or tips)"
      character_limit: "integer"

    date_range:
      field_label: "string"
      preset_options: ["Last 7 days", "Last 30 days", "Custom range"]
      help_text: "string (explains data availability)"

    metrics_selection:
      field_label: "string"
      description: "string (what can be included)"
      selection_limit: "integer (or unlimited)"
      recommended_metrics: ["list of suggestions"]

    grouping_dimensions:
      field_label: "string"
      options: ["available dimensions"]
      help_text: "string (explains grouping impact)"

    filters:
      field_label: "string"
      add_filter_button: "string"
      filter_logic_label: "string (AND/OR selector)"

    output_format:
      field_label: "string"
      format_options:
        - format: "PDF"
          description: "string (when to use, limitations)"
          icon: "file-pdf"

        - format: "Excel"
          description: "string (when to use, features)"
          icon: "file-spreadsheet"

        - format: "CSV"
          description: "string (when to use, use case)"
          icon: "file-csv"

    schedule_options:
      field_label: "string"
      frequency_options: ["One-time", "Daily", "Weekly", "Monthly"]
      delivery_method:
        field_label: "string"
        options: ["Download", "Email", "Shared link"]

  generation_status:
    initiating:
      message: "string (confirms request received)"
      estimated_time: "string format"

    processing:
      message: "string (describes current activity)"
      progress_indicator: "percentage or stage-based"
      current_step: "string (e.g., 'Querying database...')"

    finalizing:
      message: "string (final preparation stage)"

    complete:
      success_message: "string (celebratory, confirms completion)"
      file_ready: "string (file size, format confirmation)"
      next_actions:
        - action: "Download report"
          description: "string"

        - action: "Schedule recurring delivery"
          description: "string"

        - action: "Share with team"
          description: "string"

    error:
      message: "string (clear explanation of failure)"
      recovery_options: ["array of corrective actions"]

  report_preview:
    preview_label: "string"
    preview_limitations: "string (sample data notice)"
    preview_refresh: "string (button to regenerate preview)"

  delivery_confirmation:
    email_subject: "string (report name and date range)"
    email_body: "string (context and access instructions)"
    download_link_label: "string"
    expiration_notice: "string (if link has expiration)"

  report_header_content:
    report_title: "string (descriptive, includes key parameters)"
    subtitle: "string (date range, organizational context)"
    generated_timestamp: "string format"
    prepared_for: "string (recipient name or role)"
    confidentiality_notice: "string (if applicable)"

  report_body_sections:
    executive_summary:
      section_title: "string"
      content_guidelines: "string (what to include in summary)"

    key_metrics:
      section_title: "string"
      metric_presentation: "string (how metrics are displayed)"

    detailed_findings:
      section_title: "string"
      organization: "string (how data is structured)"

    methodology:
      section_title: "string"
      description: "string (explains calculations and data sources)"

    appendix:
      section_title: "string"
      contents: "string (supporting data, definitions)"

  report_footer_content:
    data_sources: "string (attribution)"
    calculation_notes: "string (methodology references)"
    contact_information: "string (who to contact with questions)"
    page_numbering: "format string"

  accessibility:
    pdf_accessible: "boolean (tagged PDF)"
    alternative_formats: ["formats available"]
    screen_reader_optimized: "boolean"

  microcopy:
    generating_report_message: "string"
    report_size_warning: "string (if report is large)"
    download_starting: "string"
    email_sent_confirmation: "string"
```

=== REPORT CONTENT TEMPLATES ===

**Executive Summary Format**:
```
{{report_period}} Overview:
- Key finding 1 (most significant insight)
- Key finding 2 (trend or comparison)
- Key finding 3 (action implication)

Notable changes: {{comparison_to_previous_period}}
```

**Metric Presentation Format**:
```
{{metric_name}}: {{value}} {{unit}}
{{comparison_context}} ({{trend_direction}} {{percentage_change}})
```

**Methodology Statement**:
```
Data collected from {{sources}} covering {{time_period}}.
Calculations based on {{methodology}}.
Last updated: {{timestamp}}.
```

=== EXAMPLES ===

**Example 1: Monthly Sales Performance Report**
- report_type: "Monthly sales performance dashboard"
- target_audience: "Regional sales managers"
- business_context: "B2B SaaS company"
- report_category: "sales"
- frequency: "recurring monthly"
- output_formats: ["PDF", "Excel"]
- complexity: "detailed analysis"
- customization: "configurable"

Output:
```yaml
report_generation_content:
  configuration_interface:
    page_title: "Generate Sales Performance Report"
    page_description: "Create a comprehensive analysis of your team's sales activities, pipeline health, and revenue performance for any time period."
    help_text: "This report combines data from your CRM, billing system, and sales forecasts. Configure your parameters below, then choose your preferred delivery format."

  report_builder_fields:
    report_name:
      field_label: "Report name"
      placeholder: "Q4 2024 Sales Performance - West Region"
      help_text: "Choose a descriptive name that includes the time period and scope"
      character_limit: 100

    date_range:
      field_label: "Reporting period"
      preset_options: ["This month", "Last month", "This quarter", "Custom dates"]
      help_text: "Sales data is updated daily. Most recent data available: Yesterday"

    metrics_selection:
      field_label: "Metrics to include"
      description: "Select the KPIs you want to analyze in this report"
      selection_limit: 0
      recommended_metrics: ["New revenue", "Pipeline value", "Win rate", "Average deal size", "Sales cycle length"]

    output_format:
      field_label: "Download format"
      format_options:
        - format: "PDF"
          description: "Best for presentations and executive review. Includes charts and formatted tables."
          icon: "file-pdf"

        - format: "Excel"
          description: "Best for further analysis. Includes raw data, pivot tables, and interactive charts."
          icon: "file-spreadsheet"

  generation_status:
    initiating:
      message: "Preparing your sales report..."
      estimated_time: "This typically takes 2-3 minutes"

    processing:
      message: "Analyzing sales data"
      progress_indicator: "stage-based"
      current_step: "Calculating win rates and pipeline metrics..."

    complete:
      success_message: "Your sales performance report is ready!"
      file_ready: "SalesReport_Nov2024.pdf (2.4 MB)"
      next_actions:
        - action: "Download report"
          description: "Save to your device"

        - action: "Email to team"
          description: "Send to regional managers"

        - action: "Generate monthly"
          description: "Set up automatic delivery on the 1st of each month"

  report_header_content:
    report_title: "Sales Performance Report: West Region"
    subtitle: "November 1-30, 2024"
    generated_timestamp: "Generated on December 1, 2024 at 9:15 AM PST"
    prepared_for: "West Region Sales Team"
    confidentiality_notice: "Internal use only - Contains sensitive revenue data"

  report_body_sections:
    executive_summary:
      section_title: "Executive Summary"
      content_guidelines: "3-4 bullet points highlighting: total revenue vs. target, significant wins or losses, notable trends, recommended actions"

    key_metrics:
      section_title: "Performance at a Glance"
      metric_presentation: "Dashboard-style cards showing current value, target, and trend vs. previous period"

    detailed_findings:
      section_title: "Detailed Analysis"
      organization: "Organized by metric category: Revenue, Pipeline, Team Performance, Product Mix"
```

**Example 2: Website Analytics Report**
- report_type: "Website traffic and conversion analysis"
- target_audience: "Marketing team"
- business_context: "E-commerce company"
- report_category: "marketing"
- frequency: "on-demand"
- output_formats: ["PDF", "Excel", "Email summary"]
- complexity: "detailed analysis"
- customization: "fully custom"

Output:
```yaml
report_generation_content:
  configuration_interface:
    page_title: "Build Custom Analytics Report"
    page_description: "Analyze your website traffic, user behavior, and conversion funnel performance with customizable metrics and dimensions."
    help_text: "Start with a template or build from scratch. You can include up to 20 metrics and 5 dimensions in a single report."

  report_builder_fields:
    metrics_selection:
      field_label: "Choose your metrics"
      description: "Select the data points you want to track"
      selection_limit: 20
      recommended_metrics: ["Sessions", "Users", "Conversion rate", "Revenue", "Bounce rate", "Average order value"]

    grouping_dimensions:
      field_label: "Group by"
      options: ["Traffic source", "Device type", "Landing page", "Geographic region", "Customer segment", "Product category"]
      help_text: "Dimensions break down your metrics into meaningful segments for deeper analysis"

    filters:
      field_label: "Filter data"
      add_filter_button: "Add filter"
      filter_logic_label: "Match: All filters (AND) / Any filter (OR)"

  generation_status:
    processing:
      message: "Crunching your analytics data..."
      current_step: "Processing 1.2M sessions across 47,000 users..."

  report_body_sections:
    executive_summary:
      section_title: "Key Insights"
      content_guidelines: "Highlight the 3 most important findings: traffic trends, conversion changes, revenue impact, and one recommended action"

    methodology:
      section_title: "About This Report"
      description: "Data source: Google Analytics 4 and Shopify. Conversion defined as completed purchase. New users identified by first session timestamp. Attribution model: last non-direct click."
```

**Example 3: Compliance Audit Report**
- report_type: "Security compliance audit report"
- target_audience: "Compliance officers and auditors"
- business_context: "Financial services company"
- report_category: "compliance"
- frequency: "quarterly scheduled"
- output_formats: ["PDF"]
- complexity: "technical deep-dive"
- customization: "template-only"

Output:
```yaml
report_generation_content:
  configuration_interface:
    page_title: "Generate Quarterly Compliance Report"
    page_description: "Official compliance documentation for SOC 2 and PCI-DSS requirements, including access logs, security events, and control effectiveness metrics."
    help_text: "This standardized report format meets regulatory requirements. Configuration limited to date range and report recipients."

  report_builder_fields:
    date_range:
      field_label: "Reporting quarter"
      preset_options: ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024"]
      help_text: "Compliance reports must align with calendar quarters. Data frozen at quarter end."

    schedule_options:
      field_label: "Delivery schedule"
      frequency_options: ["One-time", "Automatic quarterly"]
      delivery_method:
        field_label: "Delivery method"
        options: ["Secure download portal", "Encrypted email"]

  generation_status:
    initiating:
      message: "Initiating compliance report generation..."
      estimated_time: "Comprehensive audit reports take 10-15 minutes to compile"

    processing:
      message: "Auditing security controls and access logs"
      current_step: "Analyzing 2.4M log entries for anomalies..."

    complete:
      success_message: "Compliance report generated successfully"
      file_ready: "ComplianceReport_Q4_2024_FINAL.pdf (18.7 MB)"

  report_header_content:
    report_title: "Security Compliance Audit Report"
    subtitle: "Q4 2024 (October 1 - December 31, 2024)"
    generated_timestamp: "Report generated: January 5, 2025 at 2:00 PM UTC"
    prepared_for: "Chief Compliance Officer and External Auditors"
    confidentiality_notice: "CONFIDENTIAL - Attorney-Client Privileged - Not for distribution"

  report_body_sections:
    executive_summary:
      section_title: "Compliance Status Summary"
      content_guidelines: "Overall compliance status, number of controls tested, pass/fail summary, critical findings requiring immediate attention"

    detailed_findings:
      section_title: "Control Assessment Details"
      organization: "Organized by control domain: Access Control, Change Management, Incident Response, Data Protection, Network Security"

    methodology:
      section_title: "Testing Methodology"
      description: "Control testing performed according to SOC 2 Type II requirements. Sample sizes determined by risk-based approach. Evidence collected from automated logs, manual reviews, and stakeholder interviews."

    appendix:
      section_title: "Appendix"
      contents: "Supporting evidence, control descriptions, remediation plans, previous findings status, acronym definitions"

  report_footer_content:
    data_sources: "Data sources: SIEM logs, access management system, change control database, incident tracking system"
    calculation_notes: "Compliance scoring methodology detailed in Appendix C"
    contact_information: "Questions regarding this report: compliance@company.com"
    page_numbering: "Page {{current}} of {{total}}"
```

---

**Accessibility Requirements**: All generated reports must meet WCAG 3.0 Level AA standards. PDFs must be tagged for screen reader navigation with proper heading hierarchy. Tables must include row and column headers. Excel reports should use named ranges and clear labels. Avoid color-only indicators - use icons and patterns. Provide text alternatives for all charts and graphs. Ensure sufficient color contrast for all text elements.

**Psychological Principles**: Clear progress indicators reduce anxiety during generation (uncertainty reduction). File size and time estimates set accurate expectations (expectation management). Format descriptions aid decision-making (decision support). Executive summaries leverage primacy effect (information hierarchy). Consistent report structure builds familiarity and trust (recognition over recall). Methodology transparency increases credibility (source credibility theory).

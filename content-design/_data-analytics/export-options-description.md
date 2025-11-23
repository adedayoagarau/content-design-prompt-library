## Export Options Description System v1.0

**Purpose**: Create clear, informative descriptions for data export functionality that helps users choose the right format, understand limitations, and successfully extract data from analytics platforms.

---

**PROMPT:**

Design export option content for {{export_context}} serving {{user_type}} who needs to {{export_purpose}}.

=== EXPORT CONTEXT ===
Data type: {{data_type}} (metrics/raw data/reports/visualizations/logs/transactions)
Data volume: {{data_volume}} (number of records or approximate size)
Export trigger: {{trigger_location}} (dashboard/report/table/chart/list view)
Platform: {{platform}} (web app/mobile/desktop/API)
User technical level: {{technical_expertise}} (beginner/intermediate/advanced/mixed)
Downstream use case: {{intended_use}} (analysis/archival/integration/presentation/compliance)

=== AVAILABLE FORMATS ===

**Format Options**:
- Supported formats: {{supported_formats}} (CSV/Excel/PDF/JSON/XML/Google Sheets/API)
- Format limitations: {{format_constraints}}
- Default format: {{default_format}}
- Recommended format: {{recommended_format}} (based on use case)

**Format-Specific Features**:
For each format, specify:
- Format name: {{format_name}}
- File extension: {{file_extension}}
- Best use case: {{best_for}}
- Preserves formatting: {{preserves_formatting}} (yes/no)
- Preserves formulas: {{preserves_formulas}} (yes/no)
- Maximum rows: {{row_limit}}
- Maximum file size: {{size_limit}}
- Special features: {{special_features}}

=== DATA CHARACTERISTICS ===

**Data Scope**:
- Current view scope: {{current_scope}} (filtered/unfiltered/selected rows)
- Available scope options: {{scope_options}} (current page/all pages/selected/filtered)
- Column selection: {{column_control}} (all/selected/customizable)
- Time range: {{time_range}}

**Data Transformations**:
- Applied filters exported: {{filters_included}} (yes/no)
- Aggregations preserved: {{aggregations_included}} (yes/no)
- Calculations included: {{calculations_included}} (yes/no)
- Formatting preserved: {{formatting_included}} (yes/no)
- Visualizations included: {{charts_included}} (yes/no/format-dependent)

=== USER GUIDANCE NEEDS ===

**Decision Support**:
- Format selection criteria: {{selection_criteria}}
- Compatibility guidance: {{compatibility_info}}
- Performance expectations: {{performance_notes}}
- Cost implications: {{cost_factors}} (if applicable)

**Technical Constraints**:
- File size warnings: {{size_thresholds}}
- Processing time estimates: {{time_estimates}}
- Rate limiting: {{rate_limits}}
- Download expiration: {{expiration_policy}}

=== OUTPUT REQUIREMENTS ===

```yaml
export_options_content:
  export_interface:
    modal_title: "string (clear action, 2-3 words)"
    modal_description: "string (explains what will be exported)"
    data_scope_summary: "string (confirms what data is included)"

  format_selection:
    section_title: "string"
    selection_instruction: "string (how to choose)"

    format_options:
      - format_id: "csv"
        display_name: "CSV (Comma-Separated Values)"
        icon: "file-csv"
        description: "string (1-2 sentences)"
        best_for: "string (primary use case)"
        file_extension: ".csv"
        features:
          pros: ["list of advantages"]
          cons: ["list of limitations"]
        technical_notes: "string (compatibility, encoding)"
        file_size_estimate: "string (for current data)"
        recommended_badge: "boolean"

      - format_id: "excel"
        display_name: "Excel (.xlsx)"
        icon: "file-spreadsheet"
        description: "string"
        best_for: "string"
        file_extension: ".xlsx"
        features:
          pros: ["formatted tables", "multiple sheets", "formulas preserved"]
          cons: ["larger file size", "requires Excel or compatible software"]
        technical_notes: "string"
        file_size_estimate: "string"

      - format_id: "pdf"
        display_name: "PDF Document"
        icon: "file-pdf"
        description: "string"
        best_for: "string"
        file_extension: ".pdf"
        features:
          pros: ["includes visualizations", "maintains exact layout", "universally viewable"]
          cons: ["not editable", "data not analyzable"]
        technical_notes: "string"
        file_size_estimate: "string"

  scope_configuration:
    section_title: "string (e.g., 'What to export')"

    scope_options:
      - option_id: "current_view"
        label: "string (e.g., 'Current view (243 rows)')"
        description: "string (explains what's included)"
        default: "boolean"

      - option_id: "all_data"
        label: "string (e.g., 'All data (15,847 rows)')"
        description: "string (warns about size/time if large)"
        premium_feature: "boolean"

      - option_id: "selected_rows"
        label: "string (e.g., 'Selected rows only (12 rows)')"
        description: "string"
        available: "boolean (conditional on selection)"

    column_selection:
      field_label: "string"
      options: ["All columns", "Visible columns only", "Custom selection"]
      help_text: "string"

  advanced_options:
    section_title: "string (optional, for advanced users)"
    expandable: "boolean"

    options:
      - option_id: "include_formatting"
        label: "string"
        description: "string"
        default: "boolean"
        availability: "string (format-specific)"

      - option_id: "include_formulas"
        label: "string"
        description: "string"
        default: "boolean"

      - option_id: "encoding"
        label: "string (for CSV)"
        options: ["UTF-8", "UTF-16", "Windows-1252"]
        default: "UTF-8"
        help_text: "string (when to change)"

  file_naming:
    field_label: "string"
    default_name_pattern: "string (e.g., 'ReportName_YYYY-MM-DD')"
    character_limit: "integer"
    help_text: "string (naming conventions)"

  processing_feedback:
    preparing:
      message: "string"
      estimated_time: "string (for large exports)"

    generating:
      message: "string"
      progress_indicator: "percentage/spinner"

    ready:
      message: "string (success confirmation)"
      file_info: "string (name, size, format)"
      download_button_text: "string"
      auto_download: "boolean"

    error:
      message: "string"
      common_errors:
        - error_type: "file_too_large"
          user_message: "string"
          suggested_action: "string"

        - error_type: "timeout"
          user_message: "string"
          suggested_action: "string"

  post_export_guidance:
    next_steps:
      - step: "string (what to do with exported file)"
        optional: "boolean"

    related_actions:
      - action: "Schedule automatic exports"
        description: "string"
        link: "url"

      - action: "Connect to BI tool"
        description: "string"
        link: "url"

  limitations_warnings:
    row_limit_warning: "string (if approaching limits)"
    size_warning: "string (for large files)"
    time_warning: "string (for slow exports)"
    format_limitation_note: "string (format-specific constraints)"

  accessibility:
    modal_aria_label: "string"
    format_selection_group: "string (radio group label)"
    keyboard_shortcuts: ["array of shortcuts if available"]
```

=== FORMAT COMPARISON MATRIX ===

Present formats in decision-making framework:

| Format | Best For | Preserves | Max Rows | Typical Size |
|--------|----------|-----------|----------|--------------|
| CSV | Data analysis, imports | Data only | Unlimited | Small |
| Excel | Spreadsheet work | Formatting, formulas | 1M | Medium |
| PDF | Sharing, printing | Layout, charts | N/A | Medium-Large |
| JSON | API integration | Structure, types | Unlimited | Medium |
| Google Sheets | Collaboration | Formulas, live data | 5M cells | N/A |

=== EXAMPLES ===

**Example 1: Dashboard Metrics Export**
- export_context: "quarterly revenue dashboard"
- user_type: "sales executive"
- export_purpose: "share with leadership team"
- data_type: "metrics and visualizations"
- data_volume: "142 rows, 12 metrics"
- export_trigger: "dashboard"
- technical_expertise: "beginner"
- intended_use: "presentation"

Output:
```yaml
export_options_content:
  export_interface:
    modal_title: "Export Dashboard"
    modal_description: "Download your Q4 revenue metrics and charts in your preferred format."
    data_scope_summary: "Includes all metrics from October 1 - December 31, 2024 (142 transactions across 12 revenue categories)"

  format_selection:
    section_title: "Choose your format"
    selection_instruction: "Select the format that works best for how you'll use this data"

    format_options:
      - format_id: "pdf"
        display_name: "PDF Document"
        icon: "file-pdf"
        description: "Professional report with charts and formatted tables, ready to share or present."
        best_for: "Executive presentations and printed reports"
        file_extension: ".pdf"
        features:
          pros: ["Includes all charts and visualizations", "Maintains exact dashboard layout", "Opens anywhere, no special software needed"]
          cons: ["Cannot edit data afterwards", "Not suitable for further analysis"]
        technical_notes: "Optimized for printing on letter or A4 paper. Charts appear exactly as shown on screen."
        file_size_estimate: "Approximately 2.1 MB"
        recommended_badge: true

      - format_id: "excel"
        display_name: "Excel Spreadsheet"
        icon: "file-spreadsheet"
        description: "Editable spreadsheet with data tables and embedded charts."
        best_for: "Further analysis or custom reporting"
        file_extension: ".xlsx"
        features:
          pros: ["Edit and analyze data in Excel", "Includes formulas for calculations", "Multiple sheets for different metrics"]
          cons: ["Charts simplified from dashboard", "Requires Excel or compatible software", "Larger file size than CSV"]
        technical_notes: "Compatible with Excel 2010 and later, Google Sheets, and Numbers."
        file_size_estimate: "Approximately 847 KB"

      - format_id: "csv"
        display_name: "CSV (Data Only)"
        icon: "file-csv"
        description: "Raw data in simple text format, without charts or formatting."
        best_for: "Importing into other tools or databases"
        file_extension: ".csv"
        features:
          pros: ["Smallest file size", "Opens in any spreadsheet tool", "Easy to import into databases"]
          cons: ["No charts or visualizations", "No formatting or formulas", "Multiple files needed for multi-table data"]
        technical_notes: "UTF-8 encoding. Compatible with Excel, Google Sheets, databases, and programming languages."
        file_size_estimate: "Approximately 89 KB"

  scope_configuration:
    section_title: "What to include"

    scope_options:
      - option_id: "current_view"
        label: "Current dashboard view (142 transactions)"
        description: "Exports data exactly as shown, including your active date range and filters"
        default: true

      - option_id: "all_data"
        label: "All Q4 data (142 transactions)"
        description: "Same as current view - you're viewing the complete dataset"
        default: false

  file_naming:
    field_label: "File name"
    default_name_pattern: "Q4_Revenue_Dashboard_2024-12-31"
    character_limit: 100
    help_text: "Choose a descriptive name that includes the date range"

  processing_feedback:
    preparing:
      message: "Preparing your dashboard export..."
      estimated_time: "This should take less than 10 seconds"

    ready:
      message: "Your dashboard is ready to download!"
      file_info: "Q4_Revenue_Dashboard_2024-12-31.pdf (2.1 MB)"
      download_button_text: "Download PDF"
      auto_download: true

  post_export_guidance:
    next_steps:
      - step: "Open the file to review your Q4 revenue summary"
        optional: false

      - step: "Share via email or upload to your presentation deck"
        optional: true

    related_actions:
      - action: "Schedule monthly exports"
        description: "Get this dashboard automatically delivered to your inbox"
        link: "/settings/scheduled-exports"

  accessibility:
    modal_aria_label: "Export dashboard dialog"
    format_selection_group: "Select export format"
```

**Example 2: Transaction Log Export**
- export_context: "customer transaction log table"
- user_type: "data analyst"
- export_purpose: "analyze in Python/R"
- data_type: "raw transaction data"
- data_volume: "847,392 rows"
- export_trigger: "data table"
- technical_expertise: "advanced"
- intended_use: "analysis"

Output:
```yaml
export_options_content:
  export_interface:
    modal_title: "Export Transactions"
    modal_description: "Download transaction records for external analysis or archival."
    data_scope_summary: "847,392 transactions from January 1, 2024 to present (filtered view)"

  format_selection:
    section_title: "Select format"
    selection_instruction: "Choose based on your analysis tool and performance requirements"

    format_options:
      - format_id: "csv"
        display_name: "CSV (Comma-Separated Values)"
        icon: "file-csv"
        description: "Standard format for data analysis in Python, R, or Excel."
        best_for: "Data analysis and statistical modeling"
        file_extension: ".csv"
        features:
          pros: ["Fast export even for large datasets", "Universal compatibility", "Smallest file size", "Easy to parse programmatically"]
          cons: ["Text-based, no data types", "One table per file"]
        technical_notes: "UTF-8 encoding, comma delimiters, quoted strings. Dates in ISO 8601 format (YYYY-MM-DD HH:MM:SS)."
        file_size_estimate: "Approximately 127 MB compressed"
        recommended_badge: true

      - format_id: "json"
        display_name: "JSON (JavaScript Object Notation)"
        icon: "file-code"
        description: "Structured data format preserving data types and nested relationships."
        best_for: "API integration and modern data pipelines"
        file_extension: ".json"
        features:
          pros: ["Preserves data types", "Supports nested structures", "Native to JavaScript/Python"]
          cons: ["Larger file size than CSV", "Slower to parse for large datasets"]
        technical_notes: "UTF-8 encoding. Includes metadata about field types and relationships. Array of transaction objects."
        file_size_estimate: "Approximately 284 MB compressed"

      - format_id: "parquet"
        display_name: "Apache Parquet"
        icon: "database"
        description: "Columnar storage format optimized for big data analytics."
        best_for: "Large-scale analytics with Spark, Pandas, or data warehouses"
        file_extension: ".parquet"
        features:
          pros: ["Highly compressed", "Fast querying", "Preserves schema and types", "Industry standard for big data"]
          cons: ["Requires specialized tools to open", "Not human-readable"]
        technical_notes: "Snappy compression. Compatible with Spark, Pandas, DuckDB, Snowflake, BigQuery."
        file_size_estimate: "Approximately 41 MB"

  scope_configuration:
    section_title: "Data scope"

    scope_options:
      - option_id: "filtered_view"
        label: "Current filtered view (847,392 rows)"
        description: "Exports only records matching your active filters: Status=Completed, Region=North America"
        default: true

      - option_id: "all_data"
        label: "All transactions (2,149,847 rows)"
        description: "Complete dataset without filters. Large export - may take 5-10 minutes."
        default: false

    column_selection:
      field_label: "Columns to include"
      options: ["All columns (47)", "Visible columns only (12)", "Custom selection"]
      help_text: "Reducing columns significantly decreases file size and export time"

  advanced_options:
    section_title: "Advanced options"
    expandable: true

    options:
      - option_id: "compression"
        label: "Compress file"
        description: "Create a .zip archive (reduces size by ~70%)"
        default: true

      - option_id: "split_files"
        label: "Split into chunks"
        description: "Create multiple files of 100,000 rows each for easier processing"
        default: false

      - option_id: "include_metadata"
        label: "Include metadata file"
        description: "Separate file documenting column definitions, data types, and filters applied"
        default: true

  processing_feedback:
    preparing:
      message: "Preparing large dataset export..."
      estimated_time: "Estimated time: 3-4 minutes for 847K rows"

    generating:
      message: "Exporting transactions..."
      progress_indicator: "percentage"

    ready:
      message: "Export complete!"
      file_info: "transactions_2024_filtered.csv.zip (127 MB)"
      download_button_text: "Download file"
      auto_download: false

    error:
      common_errors:
        - error_type: "timeout"
          user_message: "Export took too long and was cancelled"
          suggested_action: "Try reducing your date range or exporting in smaller chunks using filters. Alternatively, use our API for programmatic access to large datasets."

  limitations_warnings:
    row_limit_warning: ""
    size_warning: "Large export (127 MB). Download may take several minutes depending on your connection speed."
    time_warning: "Exports over 500K rows can take 3-5 minutes to prepare. You can close this window - we'll email you when it's ready."

  post_export_guidance:
    related_actions:
      - action: "API access for real-time data"
        description: "For automated or frequent exports, use our REST API"
        link: "/developers/api-documentation"

      - action: "Connect to your data warehouse"
        description: "Set up direct sync to Snowflake, BigQuery, or Redshift"
        link: "/integrations/data-warehouses"
```

**Example 3: Chart Visualization Export**
- export_context: "revenue trend line chart"
- user_type: "marketing manager"
- export_purpose: "include in presentation"
- data_type: "visualization"
- data_volume: "chart with 12 data points"
- export_trigger: "chart"
- technical_expertise: "intermediate"
- intended_use: "presentation"

Output:
```yaml
export_options_content:
  export_interface:
    modal_title: "Export Chart"
    modal_description: "Download this revenue trend chart for use in presentations or reports."
    data_scope_summary: "Monthly revenue, January - December 2024 (12 months)"

  format_selection:
    section_title: "Choose format"
    selection_instruction: "Select based on where you'll use this chart"

    format_options:
      - format_id: "png"
        display_name: "PNG Image"
        icon: "image"
        description: "High-quality image file perfect for presentations and documents."
        best_for: "PowerPoint, Google Slides, Word documents"
        file_extension: ".png"
        features:
          pros: ["Transparent background option", "High resolution", "Universal compatibility", "Small file size"]
          cons: ["Cannot edit chart after export", "Fixed size"]
        technical_notes: "300 DPI resolution, suitable for printing. Choose size below."
        file_size_estimate: "Approximately 245 KB"
        recommended_badge: true

      - format_id: "svg"
        display_name: "SVG (Scalable Vector)"
        icon: "vector"
        description: "Vector graphic that scales to any size without quality loss."
        best_for: "Professional design work and large displays"
        file_extension: ".svg"
        features:
          pros: ["Infinite scaling without blur", "Editable in design tools", "Smallest file size"]
          cons: ["Not supported in PowerPoint", "May render differently in some tools"]
        technical_notes: "Editable in Adobe Illustrator, Figma, or Sketch. Includes accessible text labels."
        file_size_estimate: "Approximately 47 KB"

      - format_id: "excel"
        display_name: "Excel with Chart"
        icon: "file-spreadsheet"
        description: "Editable Excel file containing both the chart and underlying data."
        best_for: "When you need to modify the chart or access the data"
        file_extension: ".xlsx"
        features:
          pros: ["Fully editable chart", "Includes source data", "Can change colors and labels"]
          cons: ["Larger file size", "Requires Excel"]
        technical_notes: "Chart created as native Excel object. Compatible with Excel 2013+."
        file_size_estimate: "Approximately 156 KB"

  scope_configuration:
    section_title: "Image settings"

    options:
      - option_id: "size"
        label: "Image dimensions"
        options:
          - "Standard (1200 x 800 px) - Presentation slides"
          - "Large (2400 x 1600 px) - Print materials"
          - "Custom dimensions"
        default: "Standard (1200 x 800 px)"

      - option_id: "background"
        label: "Background"
        options: ["Transparent", "White", "Match dashboard theme"]
        default: "Transparent"
```

---

**Accessibility Requirements**: Export dialogs must be keyboard navigable with clear focus indicators. Format options should use radio buttons or similar accessible controls. Provide clear labels for all form fields. Screen readers must announce format descriptions and limitations. Error messages must be announced via ARIA live regions. Downloaded files should follow accessibility standards (tagged PDFs, properly structured Excel files). Consider providing alternative text descriptions for exported visualizations.

**Psychological Principles**: Format recommendations reduce decision fatigue (choice architecture). File size estimates set accurate expectations (transparency). Use case descriptions aid mental modeling (conceptual metaphors). Progressive disclosure of advanced options prevents overwhelm (cognitive load management). Success confirmations provide closure (completion bias). Clear limitations prevent frustration and build trust (expectation management).

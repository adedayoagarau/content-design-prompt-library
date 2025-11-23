## Color-Blind Safe Content Design v1.0

**Purpose**: Design content and interface copy that ensures information conveyed through color is also accessible through alternative methods for users with color vision deficiencies (protanopia, deuteranopia, tritanopia, achromatopsia).

---

**PROMPT:**

You are a color accessibility specialist designing content for {{interface_type}} serving users with {{color_vision_deficiency_types}} working with {{content_purpose}}.

=== COLOR VISION ANALYSIS ===
Color vision deficiency types: {{cvd_types}} (protanopia/deuteranopia/tritanopia/achromatopsia)
Affected user percentage: {{affected_percentage}}
Current color usage: {{current_color_usage}}
Information conveyed by color: {{color_dependent_information}}
Critical color distinctions: {{critical_distinctions}}

=== INTERFACE CONTEXT ===
Interface type: {{interface_type}}
Color-coded elements: {{color_coded_elements}}
Status indicators: {{status_indicators}}
Data visualizations: {{data_visualizations}}
Interactive elements: {{interactive_elements}}
Alert/notification types: {{alert_types}}

=== REDUNDANCY REQUIREMENTS ===
Primary encoding: {{primary_encoding}} (color)
Secondary encoding needed: {{secondary_encoding}} (text/icon/pattern/shape/position)
Tertiary encoding: {{tertiary_encoding}} (optional additional cue)
Text labels: {{text_label_strategy}}
Icon support: {{icon_usage}}

=== OUTPUT REQUIREMENTS ===

Generate color-blind accessible content strategy:

```yaml
color_vision_deficiency_types:
  protanopia:
    description: "Red-blind - difficulty distinguishing red from green"
    affected_colors: ["red", "orange", "green"]
    percentage: "1% of males, 0.01% of females"

  deuteranopia:
    description: "Green-blind - difficulty distinguishing red from green"
    affected_colors: ["red", "green", "brown", "orange"]
    percentage: "1% of males, most common type"

  tritanopia:
    description: "Blue-blind - difficulty distinguishing blue from yellow"
    affected_colors: ["blue", "green", "yellow"]
    percentage: "0.001% of population, very rare"

  achromatopsia:
    description: "Complete color blindness - see only grayscale"
    affected_colors: ["all colors"]
    percentage: "0.003% of population"

redundancy_principle:
  never_color_alone:
    wcag_criterion: "1.4.1 Use of Color (Level A)"
    requirement: "Color is not the only visual means of conveying information"

    redundant_encoding_methods:
      - text_labels: "Explicit text stating status/category/value"
      - icons: "Distinct icons for different states"
      - patterns: "Stripes, dots, hatching for chart areas"
      - shapes: "Different shapes for different data series"
      - position: "Spatial organization conveys meaning"
      - typography: "Bold, italic, underline, size"
      - borders: "Different border styles or weights"

content_patterns:
  status_indicators:
    bad_practice:
      visual: "Colored dot only (🔴 🟢 🟡)"
      problem: "Color-blind users cannot distinguish"

    good_practice:
      visual_text: "Text label + icon + color"
      examples:
        - status: "Active"
          visual: "✓ Active (green)"
          html: "<span class='status-active'><svg>checkmark</svg> Active</span>"

        - status: "Pending"
          visual: "⏱ Pending (yellow)"
          html: "<span class='status-pending'><svg>clock</svg> Pending</span>"

        - status: "Error"
          visual: "⚠ Error (red)"
          html: "<span class='status-error'><svg>warning</svg> Error</span>"

  form_validation:
    bad_practice:
      visual: "Red border on invalid field"
      problem: "Red border may not be visible to color-blind users"

    good_practice:
      multiple_indicators:
        - border: "Thicker border or different style"
        - icon: "X or warning icon next to field"
        - text: "Error message below field"
        - aria: "aria-invalid='true' and aria-describedby"

      example_error_field:
        visual: "Thick border + ⚠️ icon + error text"
        text: "⚠️ Email address is required"
        html: "<input aria-invalid='true' aria-describedby='email-error'><span id='email-error'>⚠️ Email address is required</span>"

  links_and_interactive_elements:
    bad_practice:
      visual: "Blue underlined text (color only signals clickability)"
      problem: "Underline helps, but color alone shouldn't indicate state"

    good_practice:
      default_link: "Underline + color + distinct font weight"
      hover_state: "Bold + underline + background highlight"
      visited_link: "Different underline style (dotted) + color"
      focus_state: "Strong outline + background color"

  alerts_and_notifications:
    multi_level_encoding:
      success:
        icon: "✓ Checkmark"
        text: "Success: Changes saved"
        color: "Green background (supplementary)"
        border: "Solid left border"

      warning:
        icon: "⚠️ Warning triangle"
        text: "Warning: Session expires in 5 minutes"
        color: "Yellow background (supplementary)"
        border: "Dashed left border"

      error:
        icon: "⚠️ or ✖ Error icon"
        text: "Error: Payment failed"
        color: "Red background (supplementary)"
        border: "Double left border"

      info:
        icon: "ℹ️ Information"
        text: "Info: New features available"
        color: "Blue background (supplementary)"
        border: "Dotted left border"

data_visualization:
  charts_and_graphs:
    bad_practice:
      pie_chart: "Multiple slices distinguished by color only"
      line_chart: "Multiple lines in red/green/blue only"

    good_practice:
      color_plus_pattern:
        method: "Use distinct patterns for each data series"
        patterns: ["solid", "diagonal stripes", "dots", "crosshatch", "grid"]

      color_plus_shape:
        line_chart: "Different line styles (solid, dashed, dotted) + different markers (circle, square, triangle)"
        scatter_plot: "Different shapes for each category"

      direct_labeling:
        method: "Label each line/bar/slice directly instead of legend only"
        benefit: "Reduces need to match colors between legend and chart"

      accessible_palettes:
        colorbrewer: "Use ColorBrewer2 palettes designed for color-blind users"
        tools: ["ColorOracle simulator", "Coblis simulator", "Viz Palette"]
        recommended_palette: "Blues/Oranges/Grays for categorical data"

  table_color_coding:
    bad_practice:
      cells: "Green/yellow/red background colors only"
      problem: "Color-blind users can't distinguish performance levels"

    good_practice:
      multiple_cues:
        high_performance: "↑ 95% (dark cell, up arrow, percentage)"
        medium_performance: "→ 75% (medium cell, right arrow, percentage)"
        low_performance: "↓ 45% (light cell, down arrow, percentage)"

      text_labels:
        explicit: "Include text like 'High', 'Medium', 'Low' in cells"
        sort_icons: "Directional arrows supplement color"

  heat_maps:
    bad_practice:
      red_green_scale: "Low (red) to High (green)"
      problem: "Most common CVD type cannot distinguish"

    good_practice:
      sequential_scale: "Single hue variation (light blue to dark blue)"
      diverging_scale: "Blue (low) to Gray (middle) to Orange (high)"
      text_overlay: "Show actual values in cells"
      legend_labels: "Text labels on color scale: Low/Medium/High"

interface_copy:
  color_references:
    avoid:
      - "Click the red button to delete"
      - "Green items are available"
      - "Warning: indicated in yellow"

    use:
      - "Click the 'Delete' button (on the right)"
      - "Available items are marked with a checkmark ✓"
      - "Warning: indicated by the ⚠️ icon"

  instructional_text:
    position_based:
      example: "Select the item in the third column"
      not: "Select the blue item"

    label_based:
      example: "Click the 'Submit' button"
      not: "Click the green button"

    icon_based:
      example: "Look for items marked with ✓"
      not: "Look for green items"

  status_descriptions:
    explicit_text:
      - "Status: Active ✓"
      - "Priority: High ⚠️"
      - "Progress: 75% complete"

    not_color_dependent:
      not: "The colored indicator shows status"
      use: "The checkmark ✓ indicates active status"

color_palette_selection:
  accessible_combinations:
    high_contrast:
      - combination: "Dark blue + Orange"
        cvd_safe: "Yes for all types"

      - combination: "Purple + Yellow"
        cvd_safe: "Yes for protanopia/deuteranopia"

      - combination: "Black + Light blue"
        cvd_safe: "Yes for all types"

    avoid:
      - combination: "Red + Green"
        problem: "Indistinguishable for protanopia/deuteranopia (8% of males)"

      - combination: "Green + Brown"
        problem: "Difficult for protanopia/deuteranopia"

      - combination: "Blue + Purple"
        problem: "Difficult for some users"

      - combination: "Light colors on light"
        problem: "Insufficient contrast for everyone"

  contrast_requirements:
    wcag_aa:
      normal_text: "4.5:1 contrast ratio"
      large_text: "3:1 contrast ratio (18pt+ or 14pt+ bold)"

    wcag_aaa:
      normal_text: "7:1 contrast ratio"
      large_text: "4.5:1 contrast ratio"

    non_text:
      ui_components: "3:1 contrast ratio (WCAG 2.1)"
      graphical_objects: "3:1 contrast ratio"

testing_and_validation:
  simulation_tools:
    - tool: "ColorOracle"
      platform: "Windows, Mac, Linux"
      simulates: "Protanopia, Deuteranopia, Tritanopiatritanopia"
      use_case: "Real-time desktop color-blind simulator"

    - tool: "Coblis (Color Blindness Simulator)"
      platform: "Web-based"
      simulates: "8 types of CVD"
      use_case: "Upload screenshots for simulation"

    - tool: "Chromatic Vision Simulator"
      platform: "Mobile app"
      simulates: "All CVD types"
      use_case: "View real world through CVD filter"

  automated_testing:
    - tool: "axe DevTools"
      checks: "Color contrast ratios"

    - tool: "WAVE"
      checks: "Color contrast, nearby colors"

    - tool: "Colour Contrast Analyser"
      checks: "Foreground/background contrast"

  user_testing:
    recruit: "Users with various CVD types"
    test_scenarios:
      - "Identify all status indicators without using color"
      - "Complete task using only shape/text/icon cues"
      - "Distinguish between different data series in charts"
```

=== EXAMPLES ===

**Example 1: Dashboard Status Widgets**
- interface_type: "web dashboard"
- color_coded_elements: "server status indicators, alert levels, performance metrics"
- cvd_types: "protanopia, deuteranopia"
- critical_distinctions: "operational vs error states"

**Output**:
```yaml
status_indicators:
  server_status:
    - status: "operational"
      text: "✓ Operational"
      icon: "checkmark"
      color: "green (supplementary)"
      aria_label: "Server operational"

    - status: "warning"
      text: "⚠️ Warning"
      icon: "warning triangle"
      color: "yellow/orange (supplementary)"
      aria_label: "Server warning"

    - status: "error"
      text: "✖ Error"
      icon: "X mark"
      color: "red (supplementary)"
      aria_label: "Server error"

    - status: "maintenance"
      text: "🔧 Maintenance"
      icon: "wrench"
      color: "blue (supplementary)"
      aria_label: "Server under maintenance"

  implementation:
    html: |
      <div class="status status-operational">
        <svg class="icon" aria-hidden="true"><!-- checkmark --></svg>
        <span class="status-text">Operational</span>
      </div>

  css_consideration:
    icon_size: "Icons large enough to be clearly distinguishable"
    text_always_visible: "Status text never hidden, not icon-only"
    spacing: "Adequate space between status items"

performance_metrics:
  traffic_levels:
    - level: "High traffic"
      visual: "↑↑ High (85%)"
      indicators: ["double up arrow", "percentage", "bold text", "dark shade"]

    - level: "Medium traffic"
      visual: "→ Medium (50%)"
      indicators: ["right arrow", "percentage", "regular text", "medium shade"]

    - level: "Low traffic"
      visual: "↓ Low (15%)"
      indicators: ["down arrow", "percentage", "italic text", "light shade"]

  text_alternative:
    always_show: "Percentage value next to visual indicator"
    sort_option: "Allow sorting by value, not just visual scanning"
```

**Example 2: Data Analytics Chart**
- interface_type: "reporting dashboard"
- data_visualizations: "multi-line chart showing sales by region"
- cvd_types: "all types including achromatopsia"
- critical_distinctions: "5 different regions on one chart"

**Output**:
```yaml
line_chart_accessibility:
  data_series:
    - region: "North"
      line_style: "Solid line"
      marker_shape: "Circle"
      color: "Dark blue (supplementary)"
      direct_label: "Label at end of line: 'North'"

    - region: "South"
      line_style: "Dashed line (long dashes)"
      marker_shape: "Square"
      color: "Orange (supplementary)"
      direct_label: "Label at end of line: 'South'"

    - region: "East"
      line_style: "Dotted line"
      marker_shape: "Triangle"
      color: "Gray (supplementary)"
      direct_label: "Label at end of line: 'East'"

    - region: "West"
      line_style: "Dash-dot line"
      marker_shape: "Diamond"
      color: "Purple (supplementary)"
      direct_label: "Label at end of line: 'West'"

    - region: "Central"
      line_style: "Thick solid line"
      marker_shape: "Star"
      color: "Brown (supplementary)"
      direct_label: "Label at end of line: 'Central'"

  legend:
    format: "Shows line style sample + marker + text label"
    not_color_only: "Each legend entry shows the actual line pattern used"

  accessibility_enhancements:
    data_table:
      provide: "Link to 'View as table' with full data"
      format: "Sortable, filterable table"

    tooltips:
      hover: "Show exact value + region name"
      format: "North: $2,345 (March 2024)"

    screen_reader:
      aria_label: "Line chart: Sales by region, January to December 2024"
      data_announcement: "Accessible data table linked below"
```

**Example 3: Form Validation States**
- interface_type: "registration form"
- color_coded_elements: "field validation states (valid/invalid/required)"
- cvd_types: "all types"
- critical_distinctions: "user must fix errors before submission"

**Output**:
```yaml
field_states:
  default_unfilled:
    visual: "Regular border, no indicator"
    label: "Email address"
    aria: "aria-required='true'"

  valid_filled:
    visual: "Thicker border + ✓ icon (green supplementary)"
    label: "✓ Email address"
    message: "Looks good!"
    aria: "aria-invalid='false'"

  invalid_filled:
    visual: "Thick border + ⚠️ icon (red supplementary) + error text"
    label: "⚠️ Email address"
    message: "Please enter a valid email address. Example: name@example.com"
    aria: "aria-invalid='true' aria-describedby='email-error'"

  required_unfilled:
    visual: "Regular border + '(required)' text in label"
    label: "Email address (required)"
    aria: "aria-required='true'"

implementation:
  html_example: |
    <!-- Invalid field -->
    <div class="form-field field-invalid">
      <label for="email">
        <span class="label-icon">⚠️</span>
        Email address
      </label>
      <input
        type="email"
        id="email"
        class="input-invalid"
        aria-invalid="true"
        aria-describedby="email-error"
      >
      <span id="email-error" class="error-message">
        Please enter a valid email address. Example: name@example.com
      </span>
    </div>

  css_considerations:
    border_difference: "Invalid: 3px border, Valid: 2px border, Default: 1px border"
    icon_position: "Icon next to label, not inside input field"
    color_redundant: "Color adds to other cues, but is not required cue"

error_summary:
  location: "Top of form after submission attempt"
  format:
    heading: "⚠️ Please fix 3 errors:"
    list: "Numbered list of errors with links to fields"
    example: |
      ⚠️ Please fix 3 errors:
      1. Email address is required
      2. Password must be at least 8 characters
      3. Please agree to terms of service

  implementation:
    focusable_links: "Each error is a link that jumps to field"
    icons_consistent: "Same ⚠️ icon used in summary and next to fields"
```

---

**Accessibility Requirements**: Must comply with WCAG 2.1 Success Criterion 1.4.1 (Use of Color) Level A and 1.4.11 (Non-text Contrast) Level AA. Never use color as the only visual means of conveying information. Ensure 3:1 contrast ratio for UI components and graphical objects. Provide text alternatives, icons, patterns, shapes, or position to supplement color coding. Test with color-blind simulation tools (ColorOracle, Coblis). Validate with users who have color vision deficiencies across protanopia, deuteranopia, and tritanopia.

**Psychological Principles**: Redundant coding improves information processing (dual coding theory). Multiple sensory channels increase accessibility (modality effect). Consistent patterns reduce cognitive load (schema theory). Clear distinctions support rapid recognition (feature integration theory). Inclusive design benefits all users (universal design principle).

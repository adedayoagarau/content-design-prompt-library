## Keyboard Navigation Content Framework v1.0

**Purpose**: Design instructional content, shortcuts documentation, and UI copy that guides keyboard-only users through complex interfaces with clarity and efficiency.

---

**PROMPT:**

You are a keyboard accessibility specialist creating navigation content for {{interface_type}} serving {{user_type}} who rely on keyboard-only interaction via {{input_methods}}.

=== INTERFACE MAPPING ===
Interface type: {{interface_type}} (web app/desktop software/mobile with keyboard)
Complexity level: {{complexity_level}} (simple/moderate/complex)
Custom widgets: {{custom_widgets}}
Modal interactions: {{modal_interactions}}
Multi-step flows: {{multi_step_flows}}
Focus management needs: {{focus_management_needs}}

=== USER CONTEXT ===
User types: {{user_types}} (motor disability/power user/blind screen reader user/situational)
Expertise level: {{expertise_level}} (novice/intermediate/expert)
Common tasks: {{common_tasks}}
Pain points: {{pain_points}}
Device input: {{device_input}} (standard keyboard/adaptive keyboard/switch control/voice control)

=== KEYBOARD INTERACTION REQUIREMENTS ===
Standard shortcuts: {{standard_shortcuts}} (copy/paste/tab/arrow/etc)
Custom shortcuts: {{custom_shortcuts}}
Focus indicators: {{focus_indicator_style}}
Skip links needed: {{skip_links}}
Keyboard traps: {{trap_prevention}}
Focus order: {{focus_order_logic}}

=== OUTPUT REQUIREMENTS ===

Generate comprehensive keyboard navigation content:

```yaml
keyboard_shortcuts_documentation:
  page_title: "Keyboard Shortcuts - {{application_name}}"
  introduction:
    purpose: "Navigate {{application_name}} efficiently using only your keyboard"
    audience: "All users, especially those using keyboard-only navigation"
    organization: "Shortcuts grouped by function and frequency"

  shortcut_categories:
    - category_name: "Essential Navigation"
      description: "Core shortcuts for moving through the interface"
      shortcuts:
        - keys: "Tab"
          action: "Move focus to next interactive element"
          context: "Works throughout application"
          visual_indicator: "Blue outline shows current focus"

        - keys: "Shift + Tab"
          action: "Move focus to previous interactive element"
          context: "Reverse of Tab navigation"

        - keys: "Enter or Space"
          action: "Activate focused button or link"
          context: "Enter for links, Space or Enter for buttons"
          note: "Checkbox requires Space only"

        - keys: "Escape"
          action: "Close modal dialog or cancel operation"
          context: "Returns focus to element that triggered modal"
          focus_return: "automatic"

    - category_name: "Skip Links"
      description: "Jump to major page regions"
      visibility: "Visible on focus, hidden otherwise"
      shortcuts:
        - keys: "Skip to main content (link)"
          action: "Bypass navigation and jump to primary content"
          first_tab_position: true

        - keys: "Skip to navigation (link)"
          action: "Jump to main navigation menu"

        - keys: "Skip to search (link)"
          action: "Jump to search input"

    - category_name: "Application-Specific"
      description: "Custom shortcuts for {{application_name}} features"
      shortcuts:
        - keys: "Alt + S (Windows) / Ctrl + S (Mac)"
          action: "Save current work"
          scope: "document editing contexts"

        - keys: "Ctrl + K (Windows) / Cmd + K (Mac)"
          action: "Open quick command palette"
          scope: "global - works anywhere"
          result: "Modal opens with search focus"

  shortcut_format:
    display_convention:
      separator: "Use + to show simultaneous keys"
      examples:
        windows: "Ctrl + S"
        mac: "Cmd + S"
        either_or: "Enter or Space"

    platform_variations:
      show_both: "boolean"
      format: "Action: Ctrl + S (Windows) / Cmd + S (Mac)"
      detection: "Auto-detect platform and show relevant shortcuts"

  accessibility_features:
    focus_indicators:
      description: "Visible outline shows current keyboard position"
      customization: "Settings > Accessibility > High contrast focus"
      always_visible: true

    skip_links:
      description: "Press Tab from page top to reveal skip navigation links"
      visibility: "Appear on keyboard focus, never hidden for screen readers"

    focus_return:
      description: "Closing modals automatically returns focus to trigger element"
      user_benefit: "Never lose your place in the interface"

in_app_instructions:
  contextual_help:
    - location: "First-time modal open"
      trigger: "User opens modal for first time"
      content: "Press Escape to close this dialog. Focus will return to the {{trigger_element}} button."
      dismissible: true
      dont_show_again: true

    - location: "Custom widget introduction"
      trigger: "Focus enters complex widget"
      content: "Use arrow keys to navigate items. Press Enter to select. Press Escape to exit."
      timing: "On first focus, 2-second delay"
      screen_reader_announcement: "Instructions region, {{content}}"

  keyboard_mode_indicator:
    show_when: "Keyboard navigation detected (first Tab press)"
    visual: "Subtle indicator in UI corner"
    content: "Keyboard shortcuts available - press ? for help"
    shortcut_overlay:
      trigger_key: "?"
      overlay_content: "Full shortcuts list modal"
      focus_management: "Focus search input in modal"

  button_and_control_labels:
    clear_action_indication:
      - element: "button"
        label: "Save changes (Enter)"
        tooltip: "or Ctrl + S"
        rationale: "Keyboard users know activation method"

      - element: "tab"
        label: "General settings"
        instruction: "Use arrow keys to switch tabs"
        aria_description: "tab, 1 of 4"

  form_field_guidance:
    - field_type: "date picker"
      label: "Select date"
      instructions: "Type date as MM/DD/YYYY or press Space to open calendar"
      keyboard_calendar:
        open: "Space or Enter"
        navigate: "Arrow keys move by day, Page Up/Down moves by month"
        select: "Enter selects date and closes calendar"
        close: "Escape closes without selecting"

    - field_type: "autocomplete"
      label: "Search products"
      instructions: "Type to filter. Use arrow keys to navigate suggestions. Press Enter to select."
      announcement: "{{count}} suggestions available"

  error_and_validation:
    error_focus:
      behavior: "Focus moves to first error field on submit"
      announcement: "{{count}} errors found. Fix errors to continue."
      navigation: "Tab through error fields or use error summary links"

    error_summary:
      location: "Top of form"
      format: "List of errors with links to fields"
      keyboard_access: "Each error is a focusable link that jumps to field"
      html_example: "<a href='#email-field'>Email address is required</a>"

focus_management_patterns:
  modal_dialogs:
    on_open:
      focus_target: "First focusable element (typically close button or primary action)"
      focus_trap: "Tab cycles within modal, cannot leave until closed"
      escape_key: "Closes modal"

    on_close:
      focus_return: "Element that triggered modal opening"
      announcement: "Dialog closed, {{context}}"

  tab_panels:
    tab_navigation: "Left/Right arrow keys"
    tab_to_panel: "Tab key moves from tab to its panel content"
    panel_to_next_tab: "Ctrl + PageDown (or similar pattern)"

  dropdown_menus:
    open: "Enter or Space on trigger button, or Down arrow"
    navigate: "Arrow keys up/down through items"
    select: "Enter"
    close: "Escape"
    typeahead: "Type first letter to jump to matching item"

  tree_views:
    expand_collapse: "Right arrow expands, Left arrow collapses"
    navigate: "Up/Down arrow keys"
    select: "Enter or Space"
    jump_to_parent: "Left arrow when collapsed"

visual_focus_indicators:
  requirements:
    contrast_ratio: "3:1 minimum against background (WCAG 3.0 Level AA)"
    thickness: "2px minimum outline or border"
    shape: "Complete outline around element"
    color: "High contrast, typically blue or brand color"

  states:
    default_focus: "Standard blue outline, 2px"
    hover_and_focus: "Both states visible simultaneously"
    active_pressed: "Additional visual indication during activation"

  skip_content:
    always_visible_focus: "Skip links appear on Tab focus"
    screen_reader_always_available: "Available to AT even when visually hidden"

testing_scenarios:
  user_flows:
    - flow_name: "Complete checkout without mouse"
      steps:
        - "Tab to shopping cart icon, press Enter"
        - "Review items, Tab to 'Proceed to checkout' button, press Enter"
        - "Fill shipping form using Tab to move between fields"
        - "Use arrow keys in country dropdown, Enter to select"
        - "Tab to 'Continue' button, press Enter"
        - "Enter payment details, Tab between fields"
        - "Tab to 'Place order' button, press Enter"
      success_criteria: "Order completed without mouse, focus always visible, no keyboard traps"

    - flow_name: "Navigate and filter product catalog"
      steps:
        - "Use skip link to jump to main content"
        - "Tab to filter sidebar, use arrow keys in category tree"
        - "Press Enter to apply filter"
        - "Tab to product grid, arrow keys to navigate products"
        - "Enter to view product details"
      success_criteria: "All interactions keyboard accessible, focus order logical"

  edge_cases:
    - scenario: "Modal within modal"
      expected: "Focus trapped in topmost modal, Escape closes top modal first"

    - scenario: "Infinite scroll"
      expected: "Footer remains accessible, keyboard users can reach it"
      solution: "Load more button or pagination for keyboard users"

    - scenario: "Drag and drop alternative"
      expected: "Keyboard alternative provided (cut/paste or toolbar buttons)"
      implementation: "Select with Space, Ctrl+X to cut, navigate, Ctrl+V to paste"
```

=== CONTENT WRITING PRINCIPLES ===

**Clarity**:
- Use action verbs: "Press", "Navigate", "Select", "Activate"
- Be specific: "Press Enter" not "Submit the form"
- Avoid jargon: "Interactive element" not "DOM node"

**Conciseness**:
- Maximum 15 words per instruction
- Bullet points for multi-step processes
- Visual hierarchy for scanning

**Completeness**:
- Include key combination
- State the action/result
- Provide context when needed
- Note platform differences

=== EXAMPLES ===

**Example 1: Photo Editing Web App**
- interface_type: "complex web application"
- complexity_level: "high - custom canvas widget, tool palettes, layers"
- custom_widgets: "canvas editor, color picker, layer stack"
- user_types: "professional designers, some with motor disabilities"
- expertise_level: "intermediate to expert"

**Output**:
```yaml
keyboard_shortcuts_documentation:
  shortcut_categories:
    - category_name: "Canvas Navigation"
      shortcuts:
        - keys: "Space + Drag (mouse alternative: Tab to pan controls)"
          action: "Pan canvas view"
          keyboard_alternative: "Arrow keys move canvas, Shift + Arrow for larger jumps"

        - keys: "Ctrl + Plus / Ctrl + Minus"
          action: "Zoom in / Zoom out"
          alternative: "Tab to zoom dropdown, use arrow keys to select zoom level"

    - category_name: "Tool Selection"
      shortcuts:
        - keys: "B"
          action: "Select Brush tool"

        - keys: "E"
          action: "Select Eraser tool"

        - keys: "V"
          action: "Select Move tool"
          instruction: "Press letter key to activate tool, focus moves to tool options"

in_app_instructions:
  contextual_help:
    - location: "Canvas widget focus"
      content: "Canvas focused. Use arrow keys to move selection. Press Ctrl + Z to undo. Press ? for all shortcuts."
      timing: "On first canvas focus"
```

**Example 2: Data Table with Sorting and Filtering**
- interface_type: "web application data grid"
- complexity_level: "moderate - sortable columns, filterable rows, selectable cells"
- custom_widgets: "enhanced table with grid navigation"
- user_types: "data analysts, researchers, screen reader users"
- expertise_level: "novice to intermediate"

**Output**:
```yaml
in_app_instructions:
  contextual_help:
    - location: "Table caption / aria-describedby"
      content: "Interactive data table with {{row_count}} rows. Use Tab to navigate column headers. Press Enter on header to sort. Use arrow keys to navigate cells."

  keyboard_guidance:
    navigation:
      - instruction: "Tab through column headers"
        action: "Move between sortable column headers"

      - instruction: "Enter or Space on header"
        action: "Sort column ascending/descending"
        announcement: "Column sorted ascending/descending"

      - instruction: "Arrow keys in table body"
        action: "Navigate between cells"
        note: "Tab exits table, arrow keys navigate within"

    filtering:
      - instruction: "Tab to filter icon in header"
        action: "Open filter menu for column"
        focus_behavior: "Focus moves to filter input"

      - instruction: "Type filter criteria, press Enter"
        action: "Apply filter"
        result: "Table updates, focus returns to filter icon, announcement: '{{filtered_count}} of {{total_count}} rows shown'"
```

**Example 3: Multi-Step Booking Flow**
- interface_type: "progressive web app"
- complexity_level: "moderate - 5 steps, validation, date/time pickers"
- multi_step_flows: "select service → choose date/time → enter details → payment → confirmation"
- user_types: "general public, including seniors and users with disabilities"
- expertise_level: "novice"

**Output**:
```yaml
in_app_instructions:
  step_navigation:
    - location: "Progress indicator region"
      content: "Step {{current_step}} of {{total_steps}}: {{step_name}}"
      keyboard_instructions: "Complete this step and press 'Continue' to proceed, or press 'Back' to return to previous step"

  contextual_help:
    - location: "Date picker activation"
      trigger: "Focus on date field"
      content: "Type date as MM/DD/YYYY or press Space to open calendar picker"
      keyboard_calendar_instructions:
        open: "Space or Enter opens calendar"
        navigate: "Arrow keys navigate dates, Page Up/Down changes month"
        select: "Enter selects date and closes calendar"
        close: "Escape closes calendar without selecting"

  error_handling:
    focus_management:
      on_validation_error: "Focus moves to error summary at top of step"
      error_summary_format: "{{error_count}} errors found in this step:"
      error_links: "Each error links to specific field - press Enter to jump"
```

---

**Accessibility Requirements**: Must comply with WCAG 3.0 Success Criteria 2.1.1 (Keyboard), 2.1.2 (No Keyboard Trap), 2.4.3 (Focus Order), 2.4.7 (Focus Visible), and 3.2.1 (On Focus). Follow WAI-ARIA Authoring Practices Guide 1.2 for keyboard interaction patterns. Ensure all functionality available via mouse is also available via keyboard. Provide visible focus indicators with 3:1 contrast ratio. Test with keyboard-only navigation (no mouse) and document all custom keyboard patterns.

**Psychological Principles**: Discoverability through progressive disclosure (information foraging). Consistency builds muscle memory (procedural memory). Clear feedback confirms actions (action-perception loop). Predictable patterns reduce cognitive load (schema theory). Escape hatches reduce anxiety (sense of control).

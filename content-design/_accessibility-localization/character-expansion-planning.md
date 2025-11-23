## Character Expansion Planning Framework v1.0

**Purpose**: Design source content and UI layouts that accommodate text expansion during translation, preventing truncation, layout breaks, and poor user experience in localized versions.

---

**PROMPT:**

You are a text expansion specialist planning {{interface_type}} for translation from {{source_language}} to {{target_languages}} with {{ui_constraints}}.

=== SOURCE CONTENT CONTEXT ===
Source language: {{source_language}}
Source content length: {{source_content_length}}
Content type: {{content_type}} (UI labels/buttons/body text/headings/etc)
Character limits: {{character_limits}}
Current UI constraints: {{current_ui_constraints}}

=== TARGET LANGUAGES ===
Target languages: {{target_languages}}
Expected expansion range: {{expected_expansion_range}}
Longest target language: {{longest_target_language}}
Shortest target language: {{shortest_target_language}}

=== LAYOUT CONSTRAINTS ===
Interface type: {{interface_type}}
Layout flexibility: {{layout_flexibility}} (fixed/fluid/responsive)
Space availability: {{space_availability}}
Mobile considerations: {{mobile_considerations}}
Critical truncation points: {{critical_truncation_points}}

=== OUTPUT REQUIREMENTS ===

Generate text expansion planning strategy:

```yaml
expansion_factors:
  general_guidelines:
    principle: "Shorter source text expands more than longer text"
    rationale: "Articles, prepositions add more proportionally to short strings"

  by_character_count:
    very_short:
      source_length: "1-10 characters"
      expansion_factor: "200-300%"
      examples:
        - english: "OK" (2 chars)
          german: "OK" (2 chars - borrowed)
          finnish: "Selvä" (5 chars) - 150%
          spanish: "De acuerdo" (10 chars) - 400%

        - english: "Save" (4 chars)
          german: "Speichern" (9 chars) - 125%
          french: "Enregistrer" (11 chars) - 175%
          portuguese: "Guardar" (7 chars) - 75%

    short:
      source_length: "11-20 characters"
      expansion_factor: "180-200%"
      examples:
        - english: "Delete account" (14 chars)
          german: "Konto löschen" (13 chars) - 93%
          spanish: "Eliminar cuenta" (15 chars) - 107%
          french: "Supprimer le compte" (19 chars) - 136%

    medium:
      source_length: "21-50 characters"
      expansion_factor: "160-180%"
      examples:
        - english: "Are you sure you want to continue?" (35 chars)
          german: "Sind Sie sicher, dass Sie fortfahren möchten?" (46 chars) - 131%
          spanish: "¿Está seguro de que desea continuar?" (37 chars) - 106%

    long:
      source_length: "51-70 characters"
      expansion_factor: "140-150%"

    very_long:
      source_length: "70+ characters"
      expansion_factor: "130% or less"
      note: "Longer text generally expands less proportionally"

  by_language:
    typically_longer:
      german:
        average_expansion: "130-140%"
        characteristics: "Compound words, grammatical articles"
        example: "Settings → Einstellungen"

      finnish:
        average_expansion: "130-140%"
        characteristics: "Agglutinative language, case endings"
        example: "in the house → talossa"

      french:
        average_expansion: "115-130%"
        characteristics: "Articles, longer verb forms"
        example: "Save → Enregistrer"

      italian:
        average_expansion: "110-130%"
        characteristics: "Articles, descriptive"

      portuguese:
        average_expansion: "115-130%"
        characteristics: "Similar to Spanish but sometimes longer"

      spanish:
        average_expansion: "120-130%"
        characteristics: "Articles, descriptive phrases"

    typically_shorter:
      chinese:
        average_expansion: "0-10% (often contraction)"
        characteristics: "Logographic, no spaces, very concise"
        example: "Settings → 设置 (2 characters)"

      japanese:
        average_expansion: "0-20%"
        characteristics: "Kanji compress meaning, but may need kana"
        example: "Settings → 設定"

      korean:
        average_expansion: "0-20%"
        characteristics: "Compact syllabic blocks"

    similar_length:
      dutch:
        average_expansion: "100-115%"
        characteristics: "Similar to English, Germanic language"

      swedish:
        average_expansion: "100-120%"
        characteristics: "Similar to English with some compound words"

      norwegian:
        average_expansion: "100-120%"
        characteristics: "Similar to Swedish"

  worst_case_planning:
    design_for: "German or Finnish (typically longest)"
    add_buffer: "50% expansion buffer for very short strings"
    test_with: "Longest expected translation in each UI element"

ui_element_considerations:
  buttons:
    challenges:
      - "Fixed width often required for visual consistency"
      - "Short source text expands significantly"
      - "Mobile space very limited"

    source_guidelines:
      max_length: "20 characters for primary actions"
      prefer_verbs: "Save, Delete, Continue (concise)"
      avoid_articles: "'Save' not 'Save it' (adds no value, uses space)"

    layout_solutions:
      flexible_width:
        approach: "Allow button to expand within limits"
        implementation: "min-width + padding, max-width with ellipsis"
        example: "min-width: 120px; max-width: 200px; padding: 8px 16px;"

      icon_plus_text:
        approach: "Icon conveys meaning, text can wrap or abbreviate"
        benefit: "Visual redundancy, text can be shorter"

      stacked_buttons:
        approach: "Vertical button group instead of horizontal"
        benefit: "Each button gets full width"
        use_when: "Mobile, very long translated text"

      two_tier_hierarchy:
        approach: "Primary action full word, secondary abbreviated"
        example: "Save | ✕"

  form_labels:
    challenges:
      - "Must align with input fields"
      - "Limited horizontal space"
      - "May need to wrap"

    source_guidelines:
      be_concise: "Email address (not 'Please enter your email address')"
      instructions_separate: "Use help text for additional guidance"

    layout_solutions:
      top_aligned:
        benefit: "Allows any label length, wraps gracefully"
        drawback: "More vertical space needed"

      left_aligned:
        benefit: "Compact layout"
        constraint: "Fixed label width needed"
        solution: "Set width for longest expected translation"

      placeholder_approach:
        benefit: "Saves space"
        accessibility_issue: "Disappears on input, WCAG issue"
        recommendation: "Use actual labels, not just placeholders"

  navigation_menus:
    challenges:
      - "Menu items must fit in allocated space"
      - "Consistent visual rhythm desired"

    source_guidelines:
      short_labels: "1-2 words per menu item"
      parallel_structure: "All nouns or all verbs"

    layout_solutions:
      horizontal_nav:
        challenge: "Fixed horizontal space"
        solutions:
          - "Responsive: collapse to hamburger menu on expansion"
          - "Abbreviated labels for very long translations"
          - "Icon + text with text hiding at narrow widths"

      vertical_nav:
        benefit: "Flexible height, can accommodate long text"
        solution: "Allow menu item height to expand"

  tables:
    challenges:
      - "Column headers must fit"
      - "Data alignment important"

    source_guidelines:
      abbreviations: "Use standard abbreviations in headers"
      units_separate: "Put units in header, not each cell"

    layout_solutions:
      flexible_columns:
        approach: "Allow column width to adjust to content"
        constraint: "May break layout on small screens"

      truncate_with_tooltip:
        approach: "Truncate long headers, show full on hover"
        implementation: "text-overflow: ellipsis"
        accessibility: "Ensure full text available to screen readers"

      responsive_tables:
        approach: "Transform to cards on mobile"
        benefit: "Each field gets full width"

  alerts_and_notifications:
    challenges:
      - "Limited space (especially mobile notifications)"
      - "Must convey complete message"

    source_guidelines:
      character_limits:
        push_notification: "~40 characters title, ~120 body"
        banner_alert: "~100 characters for one line"
        toast_message: "~50-80 characters"

      conciseness:
        principle: "Every word must earn its place"
        example: "Saved (not 'Your changes have been saved successfully')"

    layout_solutions:
      expandable_notifications:
        approach: "Summary visible, full message on tap/click"
        example: "File saved... (tap for details)"

      multi_line:
        approach: "Allow notification to expand vertically"
        constraint: "Limit to 3-4 lines maximum"

  tooltips:
    challenges:
      - "Very limited space"
      - "May go off-screen if too long"

    source_guidelines:
      brevity: "Maximum 50 characters recommended"
      completeness: "Must be understandable standalone"

    layout_solutions:
      dynamic_positioning:
        approach: "Reposition tooltip if too long for space"

      max_width:
        approach: "Set max-width, allow text to wrap"
        example: "max-width: 200px; white-space: normal;"

  error_messages:
    challenges:
      - "Must be clear and actionable"
      - "Variable length based on error"

    source_guidelines:
      structure: "What happened + What to do"
      length: "As long as needed for clarity"

    layout_solutions:
      flexible_container:
        approach: "Allow error message to expand fully"
        avoid: "Never truncate error messages"

planning_strategies:
  source_content_optimization:
    write_concisely:
      principle: "Shorter source = less expansion"
      techniques:
        - "Remove unnecessary words"
        - "Use active voice (shorter)"
        - "Avoid redundancy"

    avoid_concatenation:
      bad: "'Welcome' + userName + '!'"
      problem: "Word order varies by language"
      good: "'Welcome, {userName}!'"
      benefit: "Translator can reorder, proper expansion planning"

    variables_and_plurals:
      use: "ICU MessageFormat for plurals"
      benefit: "Different languages have different plural rules"
      expansion: "Account for all plural forms expanding differently"

  layout_flexibility:
    fluid_layouts:
      approach: "Use flexible units (%, fr, auto)"
      avoid: "Fixed pixel widths"

      css_example: |
        /* Flexible button */
        .button {
          padding: 8px 16px;
          min-width: 100px;
          max-width: 250px;
          width: auto;
        }

    responsive_breakpoints:
      principle: "Test with longest translation at each breakpoint"
      approach: "Add breakpoints for expansion, not just device sizes"

    css_logical_properties:
      use: "margin-inline-start, padding-block-end"
      benefit: "Automatically adapt to RTL languages"

  testing_approach:
    pseudo_localization:
      method: "Replace text with longer accented version"
      example:
        original: "Save"
        pseudo: "[Šàvé !!]"
      checks:
        - "Does UI accommodate longer text?"
        - "Any truncation?"
        - "Layout breaks?"

      implementation: |
        function pseudoLocalize(text) {
          const accents = { 'a': 'à', 'e': 'é', 'i': 'í', 'o': 'ó', 'u': 'ú' };
          let pseudo = '[' + text.split('').map(c =>
            accents[c.toLowerCase()] || c
          ).join('') + ' !!]';
          return pseudo;
        }

    test_with_actual_translations:
      approach: "Get early translations of high-risk strings"
      focus: "Very short strings (buttons, labels)"
      iterate: "Adjust layout based on actual expansion"

    automated_checks:
      tools: "String length analyzers in CI/CD"
      alerts: "Warn if translation exceeds expected length"
      example: "If translation > source_length * 1.5, flag for review"

character_limits_guidance:
  setting_limits:
    consideration_order:
      1: "Design flexibility first (avoid limits if possible)"
      2: "If limit needed, calculate based on longest language"
      3: "Communicate limits clearly to translators"
      4: "Provide alternatives (tooltips, abbreviations)"

    calculation:
      source_limit: 20
      expansion_factor: 1.5
      target_limit: 30
      buffer: "Add 20% buffer → 36 characters"

  communicating_to_translators:
    clear_context:
      provide: "Screenshot, character limit, truncation behavior"
      example: "Button label, max 30 chars, will truncate with ..."

    priorities:
      when_tight: "Meaning > Formality > Brevity"
      guidance: "If must abbreviate, abbreviate here..."

  handling_overruns:
    solutions:
      abbreviation:
        when: "Acceptable in UI context"
        example: "Account → Acct, Number → No."

      alternative_phrasing:
        approach: "Find shorter synonym"
        example: "Preferences → Settings"

      icon_replacement:
        approach: "Use icon with tooltip"
        example: "Download → ⬇ (with tooltip)"

      UI_redesign:
        when: "Frequent overruns indicate design problem"
        solution: "Flexible layout needed"

case_studies:
  button_expansion:
    source: "OK (2 chars)"
    expansions:
      german: "OK (2 chars) - borrowed term"
      spanish: "Aceptar (7 chars) - 250%"
      french: "D'accord (8 chars) - 300%"
      finnish: "OK (2 chars) - borrowed"
      chinese: "确定 (2 chars) - 0%"

    design_impact:
      fixed_width: "50px button breaks for Spanish/French"
      solution: "min-width: 50px; padding: 8px 16px; width: auto;"

  form_label_expansion:
    source: "Email address (13 chars)"
    expansions:
      german: "E-Mail-Adresse (15 chars) - 115%"
      french: "Adresse e-mail (14 chars) - 108%"
      spanish: "Dirección de correo electrónico (31 chars) - 238%"
      portuguese: "Endereço de e-mail (18 chars) - 138%"

    design_impact:
      left_aligned_labels: "Spanish breaks fixed 150px label width"
      solution: "Top-aligned labels or 250px width"

  navigation_menu_expansion:
    source_items:
      - "Home (4 chars)"
      - "Products (8 chars)"
      - "About (5 chars)"
      - "Contact (7 chars)"

    german_expansions:
      - "Startseite (10 chars) - 150%"
      - "Produkte (8 chars) - 100%"
      - "Über uns (7 chars) - 140%"
      - "Kontakt (7 chars) - 100%"

    design_impact:
      horizontal_nav: "Items don't fit in 800px container"
      solution: "Responsive: hamburger menu at <900px"
```

=== EXAMPLES ===

**Example 1: Mobile App Button Group**
- interface_type: "mobile app action buttons"
- source_language: "English"
- target_languages: "German, Spanish, French, Japanese, Chinese"
- ui_constraints: "buttons must fit in 320px mobile screen"

**Source Design**:
```yaml
buttons:
  primary: "Save changes"
  secondary: "Cancel"
  tertiary: "Reset to default"

current_layout:
  button_width: "150px each"
  total_width: "450px (3 buttons × 150px)"
  problem: "Doesn't fit 320px mobile screen"
```

**Translation Analysis**:
```yaml
save_changes:
  english: "Save changes (12 chars)"
  german: "Änderungen speichern (21 chars) - 175%"
  spanish: "Guardar cambios (15 chars) - 125%"
  french: "Enregistrer les modifications (29 chars) - 242%"
  japanese: "変更を保存 (5 chars) - 42%"
  chinese: "保存更改 (4 chars) - 33%"
  longest: "French at 242%"

cancel:
  english: "Cancel (6 chars)"
  german: "Abbrechen (9 chars) - 150%"
  spanish: "Cancelar (8 chars) - 133%"
  french: "Annuler (7 chars) - 117%"
  japanese: "キャンセル (5 chars) - 83%"
  chinese: "取消 (2 chars) - 33%"

reset_to_default:
  english: "Reset to default (16 chars)"
  german: "Auf Standard zurücksetzen (25 chars) - 156%"
  spanish: "Restablecer valores predeterminados (35 chars) - 219%"
  french: "Réinitialiser par défaut (24 chars) - 150%"
  japanese: "デフォルトにリセット (10 chars) - 63%"
  chinese: "重置为默认 (5 chars) - 31%"
  longest: "Spanish at 219%"
```

**Recommended Solutions**:
```yaml
solution_1_stacked_layout:
  approach: "Stack buttons vertically on mobile"
  implementation: |
    .button-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .button {
      width: 100%;
      padding: 12px 16px;
      max-width: 320px;
    }
  benefits:
    - "Each button gets full width"
    - "Accommodates any language expansion"
    - "Maintains visual hierarchy"

solution_2_abbreviated_labels:
  approach: "Shorten tertiary button label"
  changes:
    english: "Reset to default → Reset"
    german: "Auf Standard zurücksetzen → Zurücksetzen"
    spanish: "Restablecer valores predeterminados → Restablecer"
  implementation: "Horizontal layout possible with shorter labels"

solution_3_icon_primary:
  approach: "Icon + text for primary action"
  implementation: "💾 Save | Cancel | Reset"
  benefits:
    - "Icon reinforces meaning"
    - "Allows shorter text alternative"
    - "Works across languages"

recommended: "Solution 1 (stacked layout)"
rationale: "Most robust, works for all languages, responsive"
```

**Example 2: Data Table Headers**
- interface_type: "responsive data table"
- source_language: "English"
- target_languages: "German, Spanish, Japanese"
- ui_constraints: "6 columns must fit desktop and mobile"

**Source Headers**:
```yaml
columns:
  - "Date (4 chars)"
  - "Status (6 chars)"
  - "Customer (8 chars)"
  - "Amount (6 chars)"
  - "Payment Method (14 chars)"
  - "Actions (7 chars)"
```

**Translation Analysis**:
```yaml
expansions:
  date:
    german: "Datum (5 chars) - 125%"
    spanish: "Fecha (5 chars) - 125%"
    japanese: "日付 (2 chars) - 50%"

  status:
    german: "Status (6 chars) - 100%"
    spanish: "Estado (6 chars) - 100%"
    japanese: "状態 (2 chars) - 33%"

  customer:
    german: "Kunde (5 chars) - 63%"
    spanish: "Cliente (7 chars) - 88%"
    japanese: "顧客 (2 chars) - 25%"

  amount:
    german: "Betrag (6 chars) - 100%"
    spanish: "Cantidad (8 chars) - 133%"
    japanese: "金額 (2 chars) - 33%"

  payment_method:
    german: "Zahlungsmethode (15 chars) - 107%"
    spanish: "Método de pago (14 chars) - 100%"
    japanese: "支払方法 (4 chars) - 29%"

  actions:
    german: "Aktionen (8 chars) - 114%"
    spanish: "Acciones (8 chars) - 114%"
    japanese: "操作 (2 chars) - 29%"
```

**Solutions**:
```yaml
desktop_solution:
  approach: "Flexible column widths"
  implementation: |
    table {
      table-layout: auto;
      width: 100%;
    }
    th {
      white-space: nowrap;
      padding: 8px 12px;
    }
  benefit: "Columns auto-size to content"

mobile_solution:
  approach: "Responsive card layout"
  breakpoint: "<768px"
  implementation: |
    @media (max-width: 767px) {
      table, thead, tbody, th, td, tr {
        display: block;
      }
      thead tr {
        display: none;
      }
      td::before {
        content: attr(data-label);
        font-weight: bold;
      }
    }
  benefit: "Each field gets full width, no truncation"
  example: |
    [Date] 2024-12-31
    [Status] Completed
    [Customer] John Smith
    [Amount] $234.56
    [Payment Method] Credit Card
    [Actions] [View] [Edit]
```

**Example 3: Notification Toasts**
- interface_type: "temporary notification messages"
- source_language: "English"
- target_languages: "German, French, Chinese"
- ui_constraints: "toasts should fit one line on desktop, max 3 lines mobile"

**Source Messages**:
```yaml
messages:
  success: "Changes saved successfully"
  error: "Unable to save changes"
  warning: "Unsaved changes will be lost"
  info: "New version available"
```

**Expansion Analysis**:
```yaml
success_message:
  english: "Changes saved successfully (27 chars)"
  german: "Änderungen erfolgreich gespeichert (34 chars) - 126%"
  french: "Modifications enregistrées avec succès (38 chars) - 141%"
  chinese: "更改已成功保存 (7 chars) - 26%"

  desktop_width: "500px (fits all)"
  mobile_width: "320px (French wraps to 2 lines)"

error_message:
  english: "Unable to save changes (22 chars)"
  german: "Änderungen können nicht gespeichert werden (42 chars) - 191%"
  french: "Impossible d'enregistrer les modifications (42 chars) - 191%"
  chinese: "无法保存更改 (6 chars) - 27%"

  desktop_width: "500px (fits all)"
  mobile_width: "320px (German and French wrap to 2 lines)"
```

**Solution**:
```yaml
implementation:
  max_width:
    desktop: "600px"
    mobile: "calc(100vw - 32px) /* 16px margin each side */"

  line_clamp:
    desktop: "max-lines: 2"
    mobile: "max-lines: 3"

  css: |
    .toast {
      max-width: 600px;
      padding: 16px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    @media (max-width: 767px) {
      .toast {
        max-width: calc(100vw - 32px);
        -webkit-line-clamp: 3;
      }
    }

  content_optimization:
    alternative_approach: "Make messages even more concise"
    revised:
      success: "Saved → Gespeichert / Enregistré / 已保存"
      error: "Save failed → Speichern fehlgeschlagen / Échec enregistrement / 保存失败"
    benefit: "Fits better, faster to read, still clear"
```

---

**Accessibility Requirements**: Text expansion planning must maintain WCAG 3.0 Level AA compliance in all languages. Ensure expanded text doesn't reduce font size below minimum readable size (typically 14px for body text). Never truncate critical information (error messages, warnings). Provide full text via tooltip or expansion when truncation necessary. Test with actual screen readers in target languages. Ensure expanded text maintains minimum touch target size of 44x44px for interactive elements.

**Psychological Principles**: Processing fluency affected by text layout (fluency effect). Truncated text increases cognitive load (cognitive load theory). Predictable layouts build trust (consistency principle). Clear complete messages reduce anxiety (uncertainty reduction). Language-specific layouts feel natural (cultural schema theory). Adequate spacing improves readability (Gestalt principles).

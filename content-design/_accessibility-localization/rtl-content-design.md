## RTL (Right-to-Left) Content Design v1.0

**Purpose**: Design and adapt content for right-to-left languages (Arabic, Hebrew, Persian, Urdu) ensuring proper text direction, mirrored layouts, and culturally appropriate interface elements.

---

**PROMPT:**

You are an RTL localization specialist adapting {{interface_type}} for {{rtl_language}} from {{ltr_source_language}}.

=== LANGUAGE CONTEXT ===
RTL language: {{rtl_language}} (Arabic/Hebrew/Persian/Urdu)
Language variant: {{language_variant}} (Modern Standard Arabic/Egyptian Arabic/Israeli Hebrew/etc)
Script type: {{script_type}} (Arabic/Hebrew script)
Character complexity: {{character_complexity}}
Diacritics usage: {{diacritics_usage}}

=== TECHNICAL CONTEXT ===
Platform: {{platform}} (web/mobile iOS/Android/desktop)
Framework: {{framework}}
RTL support: {{rtl_support}} (native/manual implementation)
Text direction handling: {{text_direction_handling}}
Bidirectional text: {{bidi_text_handling}}

=== INTERFACE SCOPE ===
Interface type: {{interface_type}}
Layout complexity: {{layout_complexity}}
Forms and inputs: {{forms_inputs}}
Navigation patterns: {{navigation_patterns}}
Data visualization: {{data_visualization}}
Icons and imagery: {{icons_imagery}}

=== OUTPUT REQUIREMENTS ===

Generate RTL-optimized content and implementation guidance:

```yaml
rtl_languages_overview:
  arabic:
    speakers: "422 million (native), 274 million (second language)"
    regions: "Middle East, North Africa"
    script: "Arabic script, cursive, connected letters"
    variants: ["Modern Standard Arabic (MSA)", "Egyptian", "Levantine", "Gulf", "Maghrebi"]
    numerals: "Eastern Arabic (٠١٢٣) or Western (0123) - context dependent"

  hebrew:
    speakers: "9 million"
    regions: "Israel, Jewish diaspora"
    script: "Hebrew script, square letters"
    variants: ["Modern Hebrew", "Biblical Hebrew"]
    numerals: "Western numerals (0123) standard"

  persian:
    speakers: "110 million"
    regions: "Iran, Afghanistan, Tajikistan"
    script: "Persian Arabic script (with additional letters)"
    variants: ["Farsi (Iran)", "Dari (Afghanistan)", "Tajik (Cyrillic script)"]

  urdu:
    speakers: "230 million"
    regions: "Pakistan, India"
    script: "Persian Arabic script (Nastaliq style)"
    variants: ["Pakistani Urdu", "Indian Urdu"]

text_direction_implementation:
  html_attribute:
    page_level: "<html dir='rtl' lang='ar'>"
    element_level: "<div dir='rtl'>RTL content</div>"
    auto_direction: "<span dir='auto'>Mixed direction content</span>"

  css_logical_properties:
    prefer_logical_properties:
      reason: "Automatically adapt to text direction"
      examples:
        - old: "margin-left: 10px"
          new: "margin-inline-start: 10px"
          behavior: "Left in LTR, right in RTL"

        - old: "padding-right: 20px"
          new: "padding-inline-end: 20px"

        - old: "text-align: left"
          new: "text-align: start"

        - old: "border-left: 2px solid"
          new: "border-inline-start: 2px solid"

    physical_properties_when_needed:
      scenario: "Truly directional (top, bottom, physical layout)"
      examples:
        - "border-top: 1px solid (same in both directions)"
        - "margin-bottom: 10px (same in both directions)"

  text_direction_attribute:
    unicode_bidi_algorithm:
      ltr_mark: "&#8206; (invisible LTR mark)"
      rtl_mark: "&#8207; (invisible RTL mark)"
      use_case: "Force direction of embedded text"

layout_mirroring:
  mirror_elements:
    navigation:
      ltr: "Logo (left) | Menu items | Search (right)"
      rtl: "Search (left) | Menu items | Logo (right)"
      rule: "Horizontal navigation reverses"

    sidebars:
      ltr: "Main content (left) | Sidebar (right)"
      rtl: "Sidebar (left) | Main content (right)"
      rule: "Primary content on strong side (right in RTL)"

    reading_flow:
      ltr: "Left to right, top to bottom"
      rtl: "Right to left, top to bottom"
      note: "Vertical flow remains top to bottom in both"

    carousels:
      ltr: "← Previous | Next →"
      rtl: "Next ← | → Previous"
      note: "Arrow directions reverse"

    breadcrumbs:
      ltr: "Home > Products > Item"
      rtl: "Item < Products < Home"
      separator: "Use ‹ instead of › in RTL"

  do_not_mirror:
    media_controls:
      - "Play button (always points right →)"
      - "Video/audio progress (left to right)"
      - "Volume slider (left to right)"
      reason: "Universal conventions, not language-dependent"

    clocks_and_time:
      - "Clock faces (clockwise)"
      - "Time (3:00 PM format)"
      reason: "Time representation is universal"

    charts_and_graphs:
      - "X/Y axes (left to right, bottom to top)"
      - "Line charts (time flows left to right)"
      reason: "Mathematical conventions are universal"

    brand_logos:
      - "Logos typically don't flip"
      - "Brand integrity maintained"
      exception: "Some brands create RTL versions intentionally"

    numerical_data:
      - "Numbers read left to right even in RTL (123 not ٣٢١)"
      - "Decimal points and thousands separators"

icons_and_imagery:
  directional_icons:
    mirror:
      - icon: "→ Forward arrow"
        rtl: "← Forward arrow (points left in RTL)"

      - icon: "Back button ←"
        rtl: "Back button → (points right in RTL)"

      - icon: "Chevron right ›"
        rtl: "Chevron left ‹"

      - icon: "Collapsed menu ▶"
        rtl: "Collapsed menu ◀"

      - icon: "Increase/expansion →"
        rtl: "Increase/expansion ←"

    do_not_mirror:
      - "✓ Checkmark (universal)"
      - "✖ Close/delete (universal)"
      - "+ Add (universal)"
      - "⚙ Settings (universal)"
      - "🔍 Search (universal)"
      - "📧 Email (universal)"

  asymmetric_objects:
    consider_mirroring:
      - "Shopping cart (handle typically mirrors)"
      - "Speech bubbles (tail position mirrors)"
      - "Arrows indicating direction/movement"
      - "Profile silhouettes (can face direction of text flow)"

    cultural_consideration:
      - "Test with target audience"
      - "Some icons may have cultural meanings"

bidirectional_text:
  mixed_content:
    scenario: "RTL text with embedded LTR elements"
    examples:
      - "Arabic text with English product name"
      - "Arabic text with email address"
      - "Arabic text with URL"
      - "Arabic text with numbers"

    unicode_bidi_algorithm:
      automatic: "Browser handles most cases automatically"
      manual_override: "Use unicode control characters when needed"

    common_patterns:
      email_in_arabic:
        text: "للتواصل معنا user@example.com"
        issue: "Email may display incorrectly"
        solution: "<bdo dir='ltr'>user@example.com</bdo> or use unicode marks"

      mixed_sentence:
        text: "استخدم iPhone 14 Pro الجديد"
        display: "Automatic bidi algorithm handles correctly"

      numbers:
        text: "السعر 1,234.56 دولار"
        note: "Numbers display LTR even in RTL context"

forms_and_inputs:
  input_fields:
    text_alignment:
      rtl_content: "text-align: right"
      ltr_content: "text-align: left (even in RTL interface)"
      auto: "dir='auto' attribute detects content direction"

    field_labels:
      position:
        ltr: "Label above or left of field"
        rtl: "Label above or right of field"

    placeholders:
      direction: "Follows field direction"
      rtl_example: "أدخل بريدك الإلكتروني"

    validation:
      error_icon_position:
        ltr: "Right of field"
        rtl: "Left of field"

      error_message_alignment:
        rtl: "Right-aligned"

  form_layout:
    multi_column:
      ltr: "Column 1 (left) | Column 2 (right)"
      rtl: "Column 2 (left) | Column 1 (right)"

    radio_checkboxes:
      ltr: "○ Label"
      rtl: "Label ○"
      position: "Radio/checkbox on inline-start side"

  special_inputs:
    email_url_fields:
      direction: "Always LTR (left to right)"
      implementation: "input[type='email'] { direction: ltr; text-align: left; }"

    phone_numbers:
      direction: "LTR (left to right)"
      format: "International format: +966 50 123 4567"

    credit_cards:
      direction: "LTR (left to right)"
      format: "1234 5678 9012 3456"

typography_and_readability:
  font_selection:
    arabic:
      requirements: "Supports Arabic script with proper ligatures"
      web_safe: ["Arial", "Tahoma", "Simplified Arabic", "Traditional Arabic"]
      web_fonts: ["Noto Sans Arabic", "Cairo", "Amiri", "Tajawal"]

    hebrew:
      web_safe: ["Arial", "David", "Miriam"]
      web_fonts: ["Noto Sans Hebrew", "Rubik", "Heebo"]

  font_size:
    arabic: "Typically needs 1.1-1.2x larger than Latin equivalent"
    hebrew: "Similar to Latin sizes"
    reason: "Arabic script more detailed, needs more space"

  line_height:
    arabic: "1.6-1.8 (more than Latin)"
    reason: "Diacritics and letter complexity need more vertical space"

  letter_spacing:
    arabic: "Generally not used (cursive, connected script)"
    hebrew: "Can use moderate spacing"

content_writing_guidelines:
  text_expansion:
    arabic_from_english: "0-20% shorter typically"
    hebrew_from_english: "Similar length or slightly shorter"
    note: "RTL languages often more concise than English"

  punctuation:
    arabic_specific:
      - "Arabic comma: ، (reversed comma)"
      - "Arabic question mark: ؟ (reversed ?)"
      - "Arabic semicolon: ؛ (reversed semicolon)"
      - "Quotation marks: « » or "" depending on region"

    hebrew_specific:
      - "Uses standard punctuation: , ? ."
      - "Quotation marks: "" or '' depending on style"

  numbers:
    arabic_numerals:
      eastern: "٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩"
      western: "0 1 2 3 4 5 6 7 8 9"
      usage: "Western numerals standard in most digital interfaces, Eastern in some regions (Egypt, Saudi)"

    hebrew:
      standard: "Western numerals (0-9)"
      traditional: "Hebrew letter numerals (rare in modern use)"

  date_and_time:
    calendar_systems:
      - "Gregorian calendar (standard for international use)"
      - "Hijri calendar (Islamic lunar calendar - important for Arabic markets)"
      - "Hebrew calendar (for Jewish contexts)"

    date_formats:
      arabic: "DD/MM/YYYY or YYYY/MM/DD"
      hebrew: "DD/MM/YYYY"

    day_names:
      arabic: "الأحد (Sunday) is first day of week in many Arabic countries"
      hebrew: "Sunday (יום ראשון) is first day of week in Israel"

testing_and_qa:
  visual_testing:
    check_items:
      - "All text properly aligned (right-aligned for RTL)"
      - "Layout mirrored correctly"
      - "Icons flipped appropriately"
      - "No text overflow or truncation"
      - "Proper spacing and margins"
      - "Scrollbars on correct side (left in RTL)"

  functional_testing:
    - "Navigation flows right to left"
    - "Tab order follows RTL reading order"
    - "Forms submit correctly"
    - "Bidirectional text displays correctly"
    - "Date pickers show correct calendar"
    - "Number formatting correct"

  browser_testing:
    - "Chrome, Firefox, Safari, Edge"
    - "Mobile browsers (iOS Safari, Chrome Mobile)"
    - "RTL support varies slightly between browsers"

  device_testing:
    - "Desktop (Windows, Mac)"
    - "Mobile (iOS, Android with RTL system settings)"
    - "Different screen sizes and orientations"

  native_speaker_review:
    essential: "Must have native RTL language speaker review"
    check: "Natural phrasing, proper terms, cultural appropriateness"
```

=== EXAMPLES ===

**Example 1: E-commerce Navigation - English to Arabic**
- interface_type: "web e-commerce site"
- rtl_language: "Arabic (Modern Standard)"
- ltr_source_language: "English"

**LTR English Layout**:
```
[Logo]              [Search] [Cart] [Account]
─────────────────────────────────────────────
[Home] > [Electronics] > [Laptops] > [MacBook Pro]

Sidebar          Main Content
├ Categories     Product Image
├ Filters        Product Name: MacBook Pro 16"
├ Price Range    Price: $2,499
└ Brands         [Add to Cart →]
```

**RTL Arabic Layout**:
```
[الحساب] [السلة] [بحث]              [الشعار]
─────────────────────────────────────────────
[MacBook Pro] < [الحواسيب المحمولة] < [الإلكترونيات] < [الرئيسية]

المحتوى الرئيسي          القائمة الجانبية
صورة المنتج              الأقسام ┤
MacBook Pro 16" :اسم المنتج    الفلاتر ┤
٢,٤٩٩ دولار :السعر         نطاق السعر ┤
[← أضف إلى السلة]            العلامات التجارية ┴
```

**Implementation**:
```html
<html dir="rtl" lang="ar">
<head>
  <style>
    /* Use logical properties */
    .sidebar {
      width: 250px;
      padding-inline-start: 20px; /* Right padding in RTL */
    }

    .product {
      margin-inline-end: 20px; /* Left margin in RTL */
    }

    .button-next::after {
      content: "←"; /* Flips to ← in RTL */
      margin-inline-start: 5px;
    }

    /* Don't flip product images */
    .product-image {
      /* No mirroring */
    }

    /* Email inputs remain LTR */
    input[type="email"] {
      direction: ltr;
      text-align: start;
    }
  </style>
</head>
```

**Example 2: Mobile App Dashboard - Hebrew**
- interface_type: "iOS mobile app dashboard"
- rtl_language: "Hebrew"
- includes: "charts, navigation, notifications"

**LTR English**:
```
☰ Menu          Dashboard          🔔

──────────────────────────────
Sales This Month    ↗ $45,234
──────────────────────────────

[Chart: Sales over time →]

Tasks (3)
→ Complete report
→ Review proposals
→ Update database
```

**RTL Hebrew**:
```
🔔          לוח בקרה          תפריט ☰

──────────────────────────────
₪45,234 ↗    מכירות החודש
──────────────────────────────

[← :גרף מכירות לאורך זמן]

(3) משימות
השלם דוח ←
בדוק הצעות ←
עדכן מסד נתונים ←
```

**iOS Implementation Notes**:
```yaml
ios_rtl_support:
  automatic_mirroring:
    - "Leading/trailing constraints automatically reverse"
    - "Navigation bar items flip"
    - "Table view accessories flip"

  semantic_constraints:
    use: "leadingAnchor, trailingAnchor"
    not: "leftAnchor, rightAnchor"
    benefit: "Automatically adapts to RTL"

  text_alignment:
    use: ".natural (adapts to language direction)"
    not: ".left or .right"

  images:
    property: "imageFlipsForRightToLeftLayoutDirection = true"
    use_for: "Directional icons (arrows, chevrons)"
    not_for: "Logos, photos, universal icons"
```

**Example 3: Form with Mixed Content - Arabic**
- interface_type: "registration form"
- rtl_language: "Arabic"
- challenge: "bidirectional text (Arabic + email + phone)"

**RTL Form**:
```html
<form dir="rtl">
  <div class="form-group">
    <label for="name">الاسم الكامل</label>
    <input type="text" id="name" dir="auto" placeholder="أدخل اسمك الكامل">
  </div>

  <div class="form-group">
    <label for="email">البريد الإلكتروني</label>
    <input
      type="email"
      id="email"
      dir="ltr"
      style="text-align: left;"
      placeholder="user@example.com"
    >
    <span class="help-text">مثال: user@example.com</span>
  </div>

  <div class="form-group">
    <label for="phone">رقم الهاتف</label>
    <input
      type="tel"
      id="phone"
      dir="ltr"
      style="text-align: left;"
      placeholder="+966 50 123 4567"
    >
  </div>

  <div class="form-group">
    <label>
      <input type="checkbox">
      <span>أوافق على <a href="/terms">الشروط والأحكام</a></span>
    </label>
  </div>

  <button type="submit">
    تسجيل ←
  </button>
</form>
```

**CSS for RTL Form**:
```css
[dir="rtl"] .form-group {
  text-align: right;
}

[dir="rtl"] label {
  display: block;
  margin-bottom: 8px;
  text-align: right;
}

[dir="rtl"] input[type="text"],
[dir="rtl"] input[type="password"] {
  text-align: right;
  direction: rtl;
}

/* Email and phone always LTR */
[dir="rtl"] input[type="email"],
[dir="rtl"] input[type="tel"],
[dir="rtl"] input[type="url"] {
  direction: ltr;
  text-align: left;
}

[dir="rtl"] button {
  float: left; /* Submit button on left in RTL */
}

[dir="rtl"] .help-text {
  display: block;
  text-align: right;
  margin-top: 4px;
  font-size: 0.875em;
}

/* Checkbox/radio positioning */
[dir="rtl"] input[type="checkbox"],
[dir="rtl"] input[type="radio"] {
  margin-left: 8px;
  margin-right: 0;
}
```

---

**Accessibility Requirements**: RTL interfaces must maintain WCAG 3.0 Level AA compliance. Ensure proper reading order for screen readers in RTL languages. Focus indicators must be visible and correctly positioned. Keyboard navigation (Tab order) must follow RTL reading order. Test with RTL screen readers (NVDA with Arabic/Hebrew, VoiceOver with Hebrew, TalkBack with Arabic). Maintain 4.5:1 contrast ratio for all text. Ensure touch targets remain 44x44px minimum in all layouts.

**Psychological Principles**: Reading direction affects visual scanning patterns (cultural schema theory). RTL users scan from right to left (F-pattern mirrored). Consistency with native reading direction reduces cognitive load. Proper RTL layout feels natural and trustworthy to native users (processing fluency). Cultural appropriateness builds credibility (in-group favoritism).

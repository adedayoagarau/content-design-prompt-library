## Internationalization Preparation Framework v1.0

**Purpose**: Design source content that facilitates efficient translation and localization across multiple languages, considering text expansion, cultural adaptability, and technical constraints for global deployment.

---

**PROMPT:**

You are an internationalization (i18n) specialist preparing {{content_type}} for translation into {{target_languages}} across {{target_markets}}.

=== CONTENT SCOPE ===
Content type: {{content_type}} (UI strings/documentation/marketing/legal/help content)
Source language: {{source_language}}
Target languages: {{target_languages}}
Target markets: {{target_markets}}
Content volume: {{content_volume}} (word count/string count)
Update frequency: {{update_frequency}}

=== TECHNICAL CONTEXT ===
Platform: {{platform}} (web/mobile/desktop/embedded)
Framework: {{framework}}
Localization system: {{localization_system}} (gettext/i18next/formatjs/custom)
String externalization: {{string_externalization_method}}
Variable handling: {{variable_handling}}
Pluralization support: {{pluralization_support}}

=== LINGUISTIC REQUIREMENTS ===
Script requirements: {{script_requirements}} (Latin/Cyrillic/CJK/Arabic/mixed)
Text direction: {{text_direction}} (LTR/RTL/bidirectional)
Character encoding: {{character_encoding}}
Font support: {{font_support}}
Input methods: {{input_methods}}

=== OUTPUT REQUIREMENTS ===

Generate internationalization-ready content:

```yaml
i18n_principles:
  externalization:
    separate_text_from_code:
      principle: "All user-facing text in resource files, not hardcoded"
      file_format: "JSON/YAML/PO/XLIFF/properties"
      structure:
        key: "unique_identifier"
        value: "Translatable text"
        context: "Notes for translators"
        metadata: "Character limits, variable info"

    string_key_naming:
      format: "component.context.element.purpose"
      examples:
        good: "checkout.shipping.button.continue"
        bad: "button1"
      rationale: "Descriptive keys help translators understand context"

  source_content_guidelines:
    write_for_translation:
      clarity: "Clear, unambiguous source text"
      completeness: "Full sentences, not fragmented"
      consistency: "Same term for same concept"
      simplicity: "Avoid idioms, slang, cultural references"

    avoid:
      - concatenation: "Don't build sentences from pieces"
      - embedded_variables_mid_sentence: "Complicates translation"
      - assumptions_about_grammar: "Word order varies by language"
      - cultural_specifics: "References that don't translate"
      - ambiguous_terms: "Words with multiple meanings"

string_structure:
  complete_sentences:
    bad:
      fragments: ["Welcome to", "user_name", "!"]
      concatenation: "Welcome to ' + userName + '!'"
      problem: "Word order differs in other languages"

    good:
      template: "Welcome to {siteName}, {userName}!"
      benefit: "Translator can reorder variables as needed"
      example_translation:
        german: "Willkommen bei {siteName}, {userName}!"
        japanese: "{userName}様、{siteName}へようこそ！"

  variable_placeholders:
    consistent_syntax:
      format: "{variableName}"
      alternatives: "{{variable}} or %s or ${variable}"
      documentation: "Document which format your system uses"

    descriptive_names:
      good: "{itemCount}"
      bad: "{0}"
      benefit: "Translator understands what the variable represents"

    variable_context:
      provide: "Data type, example value, format"
      examples:
        - variable: "{orderDate}"
          type: "Date"
          format: "MM/DD/YYYY in English, localized for other languages"
          example: "12/25/2024"

  pluralization:
    plural_forms:
      awareness: "Languages have different plural rules"
      examples:
        english: "2 forms (1 item, 2 items)"
        polish: "3 forms (1, 2-4, 5+)"
        arabic: "6 forms (0, 1, 2, 3-10, 11-99, 100+)"

    icu_messageformat:
      syntax: "{itemCount, plural, =0{No items} =1{One item} other{{itemCount} items}}"
      benefit: "Handles all language plural rules"

    avoid_hardcoded_plurals:
      bad: "{count} item(s)"
      good: "{count, plural, one{# item} other{# items}}"

  gender_and_formality:
    gender_awareness:
      some_languages: "Adjectives/verbs change based on gender"
      strategy: "Neutral phrasing when possible, or provide gender variable"

    formality_levels:
      languages: "German, French, Japanese have formal/informal you"
      strategy: "Define formality level in brand guidelines"

text_expansion:
  expansion_factors:
    planning: "UI must accommodate text growth in translation"

    typical_expansion:
      - source_length: "1-10 characters"
        expansion: "200-300%"
        example: "OK (2) → Aceptar (7)"

      - source_length: "11-20 characters"
        expansion: "180-200%"

      - source_length: "21-50 characters"
        expansion: "160-180%"

      - source_length: "51-70 characters"
        expansion: "140-150%"

      - source_length: "70+ characters"
        expansion: "130% or less"

  ui_accommodation:
    flexible_layouts:
      avoid: "Fixed-width containers with text"
      use: "Flexible containers that expand"
      test: "German translation for worst case (typically longest)"

    character_limits:
      specify: "Maximum characters for UI constraints"
      translator_note: "Button max 20 chars, truncation on overflow"

    abbreviations:
      avoid: "May not abbreviate well in other languages"
      alternative: "Use icons + tooltips for space constraints"

context_provision:
  translator_notes:
    essential_information:
      - where_appears: "Login button on main navigation"
      - who_sees_it: "All users"
      - tone: "Friendly, casual"
      - constraints: "Maximum 15 characters"
      - variables: "{userName} is user's first name"
      - related_strings: "Part of welcome flow with strings X, Y, Z"

    context_format:
      json_example: |
        {
          "key": "button.save",
          "value": "Save changes",
          "context": "Primary action button on settings page. Appears after user modifies preferences. Should be clear and action-oriented. Max 20 characters.",
          "character_limit": 20,
          "screenshot": "url_to_screenshot"
        }

  screenshots:
    provide: "Visual context for every UI string when possible"
    annotation: "Highlight the specific text being translated"
    benefit: "Translator sees spatial constraints and context"

  glossary:
    terminology_consistency:
      maintain: "Brand terms, product names, technical terms"
      format:
        - term: "Shopping Cart"
          translation_guidance: "Do not translate, use English term"
          alternatives: "Not 'basket' or 'bag'"

        - term: "Dashboard"
          translation_guidance: "Translate to local equivalent"
          note: "Main overview screen showing key metrics"

date_time_numbers:
  date_formatting:
    externalize_format:
      bad: "12/25/2024 (hardcoded US format)"
      good: "{orderDate, date, short} (localized format)"
      results:
        us: "12/25/2024"
        uk: "25/12/2024"
        japan: "2024/12/25"

  time_formatting:
    12_vs_24_hour:
      us: "2:30 PM"
      international: "14:30"
      solution: "Use locale-aware time formatting"

  number_formatting:
    decimal_separators:
      us: "1,234.56 (comma thousands, period decimal)"
      europe: "1.234,56 (period thousands, comma decimal)"
      solution: "{price, number, currency}"

  currency:
    format: "{amount, number, currency}"
    locale_specific:
      us: "$1,234.56"
      uk: "£1,234.56"
      germany: "1.234,56 €"
      japan: "¥1,235"

cultural_neutrality:
  avoid_culture_specific:
    idioms:
      avoid: "Piece of cake"
      use: "Easy"

    metaphors:
      avoid: "Home run"
      use: "Great success"

    humor:
      caution: "Jokes rarely translate well"
      alternative: "Clear, straightforward communication"

    examples:
      avoid: "US-centric examples (ZIP codes, state names)"
      use: "Generic or internationally recognizable examples"

    imagery:
      avoid: "Culture-specific gestures, symbols"
      use: "Universal icons, neutral imagery"

  inclusive_examples:
    names: "Use diverse, international names in examples"
    addresses: "Generic address formats, not US-specific"
    phone_numbers: "International format (+1-555-...)"

quality_assurance:
  pseudo_localization:
    purpose: "Test i18n readiness before actual translation"
    method: "Replace text with accented characters + expansion"
    example:
      original: "Save"
      pseudo: "[Šåṽé !!]"
    checks:
      - "UI accommodates longer text"
      - "All strings externalized"
      - "No text truncation"
      - "Layout doesn't break"

  linting_rules:
    automated_checks:
      - no_hardcoded_strings: "All text in resource files"
      - no_concatenation: "Detect string building in code"
      - variable_consistency: "Placeholders match documentation"
      - character_limit_compliance: "Strings within specified limits"

  translation_management:
    process:
      - extract_strings: "Export from code to translation files"
      - send_to_translators: "With full context, screenshots, glossary"
      - review_translations: "Native speakers validate"
      - import_translations: "Import back into application"
      - test_localized_versions: "QA in each language"

technical_implementation:
  file_structure:
    by_language:
      format: "en-US.json, de-DE.json, ja-JP.json"
      structure: "Same keys, different values"

    namespacing:
      organize: "By feature or component"
      example: "common.json, checkout.json, profile.json"

  rtl_preparation:
    bidirectional_content:
      layout: "Prepare for RTL languages (Arabic, Hebrew)"
      considerations:
        - "Logical properties in CSS (margin-inline-start vs margin-left)"
        - "Icon direction (arrows may need to flip)"
        - "Text alignment (start/end vs left/right)"

    mixed_direction:
      bidi_algorithm: "Support for LTR text within RTL context"
      example: "Arabic text with English product names"

  locale_codes:
    format: "language-REGION (BCP 47)"
    examples:
      - "en-US (English - United States)"
      - "en-GB (English - United Kingdom)"
      - "pt-BR (Portuguese - Brazil)"
      - "pt-PT (Portuguese - Portugal)"
    importance: "Same language varies by region"
```

=== EXAMPLES ===

**Example 1: E-commerce Checkout Flow**
- content_type: "UI strings for checkout"
- source_language: "English (US)"
- target_languages: "Spanish (Mexico), German, Japanese, Arabic"
- platform: "responsive web"
- content_volume: "150 strings"

**Original (Bad) Code**:
```javascript
// Bad: Hardcoded, concatenated
const message = "You have " + itemCount + " item(s) in your cart.";
const total = "Total: $" + price;
const shipping = shippingSpeed + " shipping";
```

**Internationalized (Good) Structure**:
```json
{
  "cart.itemCount": {
    "message": "{itemCount, plural, =0{Your cart is empty} =1{You have one item in your cart} other{You have {itemCount} items in your cart}}",
    "context": "Displays number of items in shopping cart. Shows at top of cart page.",
    "variables": {
      "itemCount": {
        "type": "number",
        "description": "Number of items currently in cart"
      }
    }
  },

  "cart.total": {
    "message": "Total: {totalPrice, number, currency}",
    "context": "Final price including tax. Shows at bottom of cart summary.",
    "character_limit": 30,
    "variables": {
      "totalPrice": {
        "type": "number",
        "description": "Total price in user's currency",
        "format": "Formatted with locale-specific currency symbol and decimal separators"
      }
    }
  },

  "shipping.option": {
    "message": "{shippingSpeed} shipping: {shippingCost, number, currency}",
    "context": "Shipping option label in checkout. User selects from multiple options.",
    "variables": {
      "shippingSpeed": {
        "type": "string",
        "enum": ["Standard", "Express", "Overnight"],
        "note": "These values should also be localized separately"
      },
      "shippingCost": {
        "type": "number",
        "format": "currency"
      }
    }
  }
}
```

**Translation Examples**:
```json
// Spanish (Mexico)
{
  "cart.itemCount": "{itemCount, plural, =0{Tu carrito está vacío} =1{Tienes un artículo en tu carrito} other{Tienes {itemCount} artículos en tu carrito}}",
  "cart.total": "Total: {totalPrice, number, currency}",
  "shipping.option": "Envío {shippingSpeed}: {shippingCost, number, currency}"
}

// German
{
  "cart.itemCount": "{itemCount, plural, =0{Ihr Warenkorb ist leer} =1{Sie haben einen Artikel in Ihrem Warenkorb} other{Sie haben {itemCount} Artikel in Ihrem Warenkorb}}",
  "cart.total": "Summe: {totalPrice, number, currency}",
  "shipping.option": "{shippingSpeed}-Versand: {shippingCost, number, currency}"
}
```

**Example 2: Welcome Message with Date**
- content_type: "Dashboard welcome message"
- target_languages: "French, Chinese, Arabic"
- includes: "User name, date, time-sensitive greeting"

**Bad Implementation**:
```javascript
// Bad: Concatenation, hardcoded date format, AM/PM assumption
const greeting = "Good morning, " + userName + "! Today is " + month + "/" + day + "/" + year;
```

**Good Implementation**:
```json
{
  "dashboard.welcome.morning": {
    "message": "Good morning, {userName}! Today is {currentDate, date, long}.",
    "context": "Welcome message shown 5am-12pm local time. Dashboard header.",
    "character_limit": 100,
    "tone": "Friendly, professional",
    "variables": {
      "userName": {
        "type": "string",
        "description": "User's display name (first name or full name based on locale preference)"
      },
      "currentDate": {
        "type": "date",
        "description": "Current date in user's timezone",
        "format": "Formatted per locale (US: 'December 25, 2024', JP: '2024年12月25日')"
      }
    }
  }
}
```

**Translations**:
```json
// French
"Bonjour, {userName} ! Nous sommes le {currentDate, date, long}."

// Chinese
"{userName}，早上好！今天是{currentDate, date, long}。"

// Arabic (RTL)
"صباح الخير، {userName}! اليوم هو {currentDate, date, long}."
```

**Example 3: Form Validation with Character Limits**
- content_type: "Form error messages"
- target_languages: "German (long), Japanese (compact)"
- constraints: "Mobile UI with limited space"

**Source Content**:
```json
{
  "form.error.required": {
    "message": "This field is required",
    "context": "Inline error below empty required field",
    "character_limit": 30,
    "priority": "High - must fit on mobile without truncation"
  },

  "form.error.email.invalid": {
    "message": "Please enter a valid email address",
    "context": "Inline error for incorrectly formatted email",
    "character_limit": 50,
    "example": "user@example.com"
  },

  "form.error.password.length": {
    "message": "Password must be at least {minLength} characters",
    "context": "Shows when password too short during registration",
    "character_limit": 60,
    "variables": {
      "minLength": {
        "type": "number",
        "typical_value": 8
      }
    }
  }
}
```

**Translations with Expansion**:
```json
// German (expands ~180%)
{
  "form.error.required": "Dieses Feld ist erforderlich", // 30 chars (fits!)
  "form.error.email.invalid": "Bitte geben Sie eine gültige E-Mail-Adresse ein", // 50 chars
  "form.error.password.length": "Passwort muss mindestens {minLength} Zeichen lang sein" // 58 chars
}

// Japanese (often more compact)
{
  "form.error.required": "この項目は必須です", // 9 chars (much shorter)
  "form.error.email.invalid": "有効なメールアドレスを入力してください", // 18 chars
  "form.error.password.length": "パスワードは{minLength}文字以上にしてください" // 21 chars
}
```

**Character Limit Planning**:
```yaml
character_limit_strategy:
  source_limit: 30
  account_for_expansion:
    worst_case_language: "German"
    expansion_factor: 1.8
    therefore_source_should_be: "16-17 characters to accommodate German"

  alternative_strategies:
    - "Use abbreviations in German if needed"
    - "Tooltip or help icon for full message on mobile"
    - "Flexible container that expands vertically"
    - "Different text for mobile vs desktop"
```

---

**Accessibility Requirements**: Internationalized content must maintain WCAG 2.1 Level AA compliance across all locales. Ensure translated text remains clear and plain language for target reading levels. Support screen readers in all target languages. Maintain keyboard navigation patterns culturally appropriate for each locale. Respect RTL text direction for Arabic and Hebrew. Test all localized versions with native speakers and assistive technologies.

**Psychological Principles**: Linguistic relativity affects perception (Sapir-Whorf hypothesis). Cultural context influences interpretation (cultural schema theory). Consistency builds trust across languages (fluency heuristic). Clear structure aids comprehension regardless of language (cognitive load theory). Localized content feels more trustworthy (in-group bias).

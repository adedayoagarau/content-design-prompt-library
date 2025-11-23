## Name Formatting Framework v1.0

**Purpose**: Design name input forms and display formats that respect diverse global naming conventions, cultural practices, and personal preferences without imposing Western naming assumptions.

---

**PROMPT:**

You are a name formatting specialist designing {{form_type}} for {{target_audience}} across {{cultural_contexts}}.

=== FORM CONTEXT ===
Form type: {{form_type}} (registration/profile/checkout/legal)
Target audience: {{target_audience}}
Cultural contexts: {{cultural_contexts}}
Use case: {{use_case}} (identification/communication/legal/personalization)
Formality level: {{formality_level}}

=== NAMING REQUIREMENTS ===
Legal name needed: {{legal_name_required}} (yes/no/optional)
Display name: {{display_name}}
Preferred name: {{preferred_name}}
Honorifics: {{honorifics}}
Cultural sensitivity: {{cultural_sensitivity}}

=== TECHNICAL CONSTRAINTS ===
Database schema: {{database_schema}}
Character support: {{character_support}}
Display length: {{display_length}}
Sorting requirements: {{sorting_requirements}}
Integration needs: {{integration_needs}}

=== OUTPUT REQUIREMENTS ===

Generate international name formatting guidelines:

```yaml
global_naming_conventions:
  western_pattern:
    typical_structure: "[Given Name] [Family Name]"
    examples:
      - "John Smith (English)"
      - "Marie Dubois (French)"
      - "Anna Schmidt (German)"

    variations:
      middle_names: "John Michael Smith"
      multiple_surnames: "José García López (Spanish)"
      compound_surnames: "Mary Jones-Williams"
      prefixes: "von, van, de, da, al-"

  eastern_pattern:
    typical_structure: "[Family Name] [Given Name]"
    examples:
      - "山田太郎 (Yamada Tarō - Japanese)"
      - "金正恩 (Kim Jong-un - Korean)"
      - "李明 (Li Ming - Chinese)"

    considerations:
      - "Family name first is traditional"
      - "May use Western order in international contexts"
      - "No spaces in some scripts (Chinese, Japanese)"

  mononyms:
    single_name: "One name only, no surname"
    examples:
      - "Cher (American)"
      - "Madonna (American)"
      - "Sukarno (Indonesian)"
      - "Teller (American magician)"
      - "Many Indonesian names"

    prevalence: "Common in Indonesia, Myanmar, Tibet, some South Asian cultures"

  patronymic_systems:
    icelandic:
      structure: "[Given Name] [Parent's Name]sson/dóttir"
      example: "Björk Guðmundsdóttir (Björk, daughter of Guðmundur)"
      note: "No hereditary surname, each generation creates new patronymic"

    russian:
      structure: "[Given Name] [Patronymic] [Family Name]"
      example: "Иван Петрович Сидоров (Ivan Petrovich Sidorov)"
      explanation: "Ivan, son of Petr, family name Sidorov"

    arabic:
      structure: "[Given] ibn/bint [Father] ibn [Grandfather]..."
      example: "محمد بن سلمان (Mohammed bin Salman - Mohammed, son of Salman)"

  multiple_surnames:
    spanish_portuguese:
      structure: "[Given] [Father's Surname] [Mother's Surname]"
      spanish_example: "Pablo Diego José Francisco de Paula Juan Nepomuceno María de los Remedios Cipriano de la Santísima Trinidad Ruiz y Picasso"
      common: "José García López (José, from García father, López mother)"

    hyphenated:
      structure: "[Given] [Surname1-Surname2]"
      example: "Mary Wilson-Smith"
      reason: "Marriage, combining family names"

  titles_and_honorifics:
    professional:
      - "Dr. (Doctor)"
      - "Prof. (Professor)"
      - "Rev. (Reverend)"
      - "Hon. (Honorable)"

    social:
      - "Mr., Mrs., Miss, Ms., Mx."
      - "Sir, Dame, Lord, Lady (British)"

    cultural:
      - "Haji/Hajja (Arabic - has completed Hajj)"
      - "Pandit (Hindi - scholar)"
      - "Dato/Datuk (Malaysian honorific)"

  generational_suffixes:
    us_common:
      - "Jr. (Junior)"
      - "Sr. (Senior)"
      - "III, IV, V (third, fourth, fifth)"

    placement: "After surname: John Smith Jr."

form_design_approaches:
  single_field_best_practice:
    principle: "One field for full name is often best"

    advantages:
      - "Works for any naming convention globally"
      - "User enters name in their preferred format"
      - "No assumptions about name structure"
      - "Fewer fields, faster completion"
      - "Respects mononyms"

    implementation:
      label: "Full name" or "Name"
      help_text: "Enter your name as you'd like it to appear"
      validation: "Minimal - accept any characters, any length (within reason)"
      examples:
        - "John Smith"
        - "María García López"
        - "山田太郎"
        - "Björk"
        - "Muhammad bin Abdullah"

    storage:
      database_field: "full_name VARCHAR(255)"
      sorting: "Sort by full name as entered"

  two_field_approach:
    principle: "Given name + Family name (when necessary)"

    when_needed:
      - "Legal documentation requiring structured names"
      - "Systems with strict name field requirements"
      - "International sorting needed"

    implementation:
      field_1:
        label: "Given name(s)" or "First name(s)"
        help: "Your first and middle names"

      field_2:
        label: "Family name(s)" or "Last name(s)"
        help: "Your surname or family name"

      considerations:
        - "Label 'Given/Family' more accurate than 'First/Last' (order varies)"
        - "Allow either field to be blank (mononyms)"
        - "Don't require both"

  flexible_structured:
    principle: "Multiple optional fields, maximum flexibility"

    fields:
      prefix:
        label: "Title (optional)"
        examples: "Dr., Prof., Mr., Ms., Mx."
        type: "Text input or dropdown"

      given_name:
        label: "Given name(s)"
        help: "First and middle names"

      family_name:
        label: "Family name(s)"
        help: "Surname or family name"

      suffix:
        label: "Suffix (optional)"
        examples: "Jr., Sr., III, PhD"

      preferred_name:
        label: "Preferred name (optional)"
        help: "What should we call you?"
        examples: "Nickname, shortened version"

    flexibility:
      - "All fields optional except at least one name field"
      - "Allow mononyms (only given name filled)"
      - "Support complex names (multiple surnames, titles)"

  preferred_vs_legal:
    legal_name:
      use: "Official documents, legal compliance, billing"
      label: "Legal name (as on ID)"
      required: "When legally necessary"

    preferred_name:
      use: "All communications, personalization, display"
      label: "What should we call you?" or "Preferred name"
      examples: "Nickname, chosen name, shortened version"
      importance: "Respects chosen identity, cultural preferences"

    implementation_example:
      legal: "William Robert Johnson III"
      preferred: "Bill"
      use_preferred: "Everywhere except legal documents"

special_considerations:
  character_support:
    unicode_essential: "Support full UTF-8 character set"
    examples_needed:
      - "Diacritics: José, François, Müller"
      - "Non-Latin: 山田, محمد, Владимир"
      - "Special characters: O'Brien, Jean-Paul, Mary-Anne"

    validation:
      allow: "Letters, spaces, hyphens, apostrophes, periods"
      accept: "Any Unicode letter characters"
      reject: "Numbers (with rare exceptions), most special characters"

  apostrophes_and_hyphens:
    common_names:
      apostrophes: "O'Brien, D'Angelo, M'Baye"
      hyphens: "Jean-Paul, Mary-Anne, Fatima-Zahra"

    technical_issue: "Apostrophes can cause SQL injection if not handled properly"
    solution: "Parameterized queries, proper escaping"

  case_sensitivity:
    variations:
      - "McDonald, MacDonald, Mcdonald"
      - "van Gogh, Van Gogh, VAN GOGH"
      - "de Silva, De Silva, DE SILVA"

    storage: "Store exactly as user enters"
    display: "Display exactly as stored"
    search: "Case-insensitive search"

  length_limits:
    minimum: "1 character (allow single letter names)"
    maximum: "255 characters (accommodate long compound names)"

    very_long_names:
      example: "Hubert Blaine Wolfeschlegelsteinhausenbergerdorff Sr."
      reality: "Some names exceed 100 characters"
      recommendation: "At least 255 character limit"

  sorting_names:
    challenges:
      - "Eastern names (family name first)"
      - "Prefixes (von, van, de): Do they sort under V/D or next letter?"
      - "Accented characters: Does Müller sort as M or Mu?"

    solutions:
      let_user_choose: "Optional 'sort name' field"
      locale_aware: "Use locale-specific collation"
      ask_preference: "How should your name be sorted?"

display_formatting:
  formal_context:
    with_title: "Dr. Maria Santos"
    full_name: "Maria Isabel Santos García"
    use_case: "Professional correspondence, certificates"

  casual_context:
    preferred_name: "Maria"
    friendly: "Hi Maria,"
    use_case: "Email greetings, app interface"

  abbreviated:
    first_initial_last: "M. Santos"
    both_initials: "M.S."
    use_case: "Compact display, lists"

  greeting_formulas:
    personalized: "Hello, {preferred_name}!"
    formal: "Dear {title} {family_name},"
    safe_neutral: "Hello{, {given_name}}!" (comma and name optional)

  fallback_handling:
    no_name_provided:
      option_1: "Hello! (no personalization)"
      option_2: "Hello, Friend!"
      option_3: "Hello there!"

    partial_name:
      only_given: "Hello, {given_name}!"
      only_family: "Hello, {family_name}!" (unusual, may feel impersonal)

cultural_specific_guidance:
  japanese_names:
    traditional_order: "Family name first: 山田太郎 (Yamada Tarō)"
    western_order: "Given name first: Tarō Yamada"
    international_context: "Often use Western order in English"

    recommendation:
      ask_preference: "How would you like your name displayed?"
      options: ["Surname first", "Given name first"]

  chinese_names:
    structure: "Family name (1 char) + Given name (1-2 chars)"
    example: "李明 (Li Ming) - Li is family name"
    no_spaces: "Written without space: 李明"

    romanization: "Pinyin most common, but varies (Wade-Giles, others)"

  korean_names:
    structure: "Family name (1 syllable) + Given name (2 syllables)"
    example: "김민준 (Kim Min-jun)"
    hyphenation: "Given name may be hyphenated in Roman: Min-jun"

  spanish_names:
    two_surnames: "Father's surname + Mother's surname"
    example: "Pablo Ruiz Picasso (Pablo, Ruiz from father, Picasso from mother)"
    commonly_known_by: "Father's surname (Ruiz) but signed Picasso"

    women_marriage: "Traditionally add 'de [husband surname]'"
    modern: "Keep both original surnames"

  arabic_names:
    components: "Given + Father + Grandfather + Family/Tribal"
    example: "محمد بن سلمان بن عبد العزيز آل سعود"
    translation: "Mohammed son-of Salman son-of Abdul Aziz Al Saud"

    prefixes: "al-, ibn, bin, abu"

  icelandic_names:
    no_hereditary_surname: "Patronymic changes each generation"
    son: "Father's name + sson (Guðmundsson)"
    daughter: "Father's name + dóttir (Guðmundsdóttir)"

    sorting: "Sort by given name, not patronymic"
    phone_book: "Listed by first name in Iceland"

  indonesian_names:
    many_mononyms: "Single name very common"
    examples: "Sukarno, Suharto, Widodo"

    also_common: "Multiple names without clear given/family structure"
    example: "Susilo Bambang Yudhoyono"

  indian_names:
    varies_by_region: "Different conventions across India"

    south_indian: "Initial(s) + Given name"
    example: "S. Ramanujan (S for father's name Srinivasa)"

    north_indian: "Given + Father's name + Family name"
    example: "Rajesh Kumar Sharma"

validation_best_practices:
  minimal_validation:
    principle: "Accept names as users provide them"

    allow:
      - "Any Unicode letters"
      - "Spaces, hyphens, apostrophes, periods"
      - "Accented characters"
      - "Single names (mononyms)"
      - "Very long names"

    reject:
      - "Numbers (unless part of cultural naming - very rare)"
      - "Most special characters (@, #, $, etc.)"
      - "Excessive length (> 255 characters)"

  validation_errors:
    unhelpful: "Invalid name"
    helpful: "Please use only letters, spaces, hyphens, and apostrophes"

    unhelpful: "First name and last name required"
    helpful: "Please enter your name (you can use one or multiple names)"

  no_assumptions:
    dont_require: "Both first and last name (mononyms exist)"
    dont_require: "Latin alphabet (support all scripts)"
    dont_capitalize: "Automatically (user knows their name's case)"
    dont_reject: "Names that seem unusual to you"

accessibility_considerations:
  autocomplete_attributes:
    html5_standard:
      full_name: "autocomplete='name'"
      given_name: "autocomplete='given-name'"
      family_name: "autocomplete='family-name'"
      honorific_prefix: "autocomplete='honorific-prefix'"
      honorific_suffix: "autocomplete='honorific-suffix'"

    benefit: "Browser autofill works correctly"

  screen_reader_support:
    clear_labels: "Every input has associated <label>"
    help_text: "Use aria-describedby for examples/guidance"
    error_messages: "Associate errors with fields via aria-describedby"

  keyboard_navigation:
    tab_order: "Logical progression through name fields"
    no_auto_advance: "Don't auto-jump fields (annoying and error-prone)"
```

=== EXAMPLES ===

**Example 1: Simple Registration Form - Global Audience**
- form_type: "user registration"
- target_audience: "global users"
- approach: "single name field (best practice)"

**Recommended Form**:
```yaml
name_field:
  label: "Full name"
  type: "text"
  required: true
  maxlength: 255
  autocomplete: "name"
  placeholder: "Enter your name"
  help_text: "Enter your name as you'd like it to appear"

  examples_shown:
    - "Works for any name: John Smith, María García López, 山田太郎, or just Björk"

  validation:
    pattern: "^[\\p{L}\\p{M}\\p{Zs}.'\\-]+$" (Unicode letters, marks, spaces, periods, apostrophes, hyphens)
    min_length: 1
    max_length: 255

preferred_name:
  label: "What should we call you? (optional)"
  type: "text"
  required: false
  maxlength: 100
  help_text: "Your nickname or preferred name"

  usage: "Used in greetings, personalization, informal contexts"
```

**Example 2: Legal Document Form - Structured Names**
- form_type: "legal documentation (tax, healthcare)"
- target_audience: "US primarily, some international"
- approach: "structured but flexible"

**Form Design**:
```yaml
legal_name_section:
  heading: "Legal name (as it appears on your ID)"

  title:
    label: "Title (optional)"
    type: "dropdown + custom"
    options: ["Dr.", "Prof.", "Mr.", "Ms.", "Mx.", "Other: ___"]
    required: false

  first_name:
    label: "Legal first name(s)"
    type: "text"
    required: true
    help: "Include middle name(s) if on ID"
    autocomplete: "given-name"

  last_name:
    label: "Legal last name(s)"
    type: "text"
    required: true
    help: "Your surname or family name"
    autocomplete: "family-name"

  suffix:
    label: "Suffix (optional)"
    type: "text"
    examples: "Jr., Sr., III, PhD"
    required: false
    autocomplete: "honorific-suffix"

preferred_name_section:
  heading: "How should we address you?"

  preferred_name:
    label: "Preferred name"
    type: "text"
    required: false
    help: "The name you go by (if different from legal name)"
    default: "Auto-fill from legal first name"

  pronouns:
    label: "Pronouns (optional)"
    type: "dropdown + custom"
    options: ["she/her", "he/him", "they/them", "Other: ___", "Prefer not to say"]

note:
  display: "We'll use your preferred name in all communications, and your legal name only for official documents."
```

**Example 3: International E-commerce - Flexible Approach**
- form_type: "shipping/billing address"
- target_audience: "global customers"
- approach: "optimize for checkout speed"

**Checkout Form**:
```yaml
name_field:
  label: "Full name"
  type: "text"
  required: true
  autocomplete: "name"
  help: "Name of person receiving delivery"

returning_customer:
  autofill: "Fill from saved profile"
  edit: "Allow editing"

new_customer:
  suggestion: "Use name from email/social signup if available"
  confirm: "Pre-fill and ask to confirm"

business_delivery:
  option: "Checkbox: This is a business address"
  shows: "Company name field (required if checked)"
  name_field_becomes: "Recipient name at this location"

company_name:
  label: "Company name"
  type: "text"
  required: "Only if business address"
  shows_when: "Business address checkbox selected"
```

**Example 4: Respecting Cultural Differences**
- form_type: "professional profile"
- target_audience: "international job seekers"
- approach: "culturally adaptive"

**Profile Form**:
```yaml
name_display_preference:
  question: "How would you like your name displayed?"

  options:
    western_order:
      label: "Given name first"
      example: "Tarō Yamada"
      default_for: "Western countries"

    eastern_order:
      label: "Family name first"
      example: "Yamada Tarō"
      default_for: "Japan, China, Korea, Vietnam"

    as_entered:
      label: "Exactly as I enter it"
      note: "We'll display your name in the order you provide"

full_name:
  label: "Full name"
  help: "Enter your complete name in your preferred order"

preferred_name:
  label: "Preferred name (optional)"
  help: "What should colleagues call you?"

professional_title:
  label: "Professional title (optional)"
  examples: "Dr., Prof., Eng., CPA"

display_examples:
  formal_bio: "[Title] [Full Name]" → "Dr. Yamada Tarō"
  email_greeting: "Hello [Preferred Name]," → "Hello Tarō,"
  profile_listing: "[Full Name] - [Job Title]" → "Yamada Tarō - Software Engineer"
```

---

**Accessibility Requirements**: Name forms must comply with WCAG 3.0 Level AA. Use semantic HTML with proper labels. Never rely on placeholder text alone. Provide clear error messages with guidance. Support screen readers with proper ARIA labels. Use autocomplete attributes for browser autofill. Ensure minimum touch target sizes (44x44px). Support all Unicode characters (never restrict to ASCII). Allow keyboard navigation through all fields. Test with diverse international users and assistive technologies.

**Psychological Principles**: Respecting name preferences builds trust (reciprocity). Allowing self-identification supports autonomy (self-determination theory). Single-field forms reduce cognitive load (minimalism). Familiar patterns feel comfortable (schema theory). Correct display shows respect (dignity and respect). Flexible systems accommodate diversity (inclusive design). Personal names are core to identity (social identity theory).

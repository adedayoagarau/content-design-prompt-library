## Address Formatting Framework v1.0

**Purpose**: Design address input forms and display formats that accommodate international address variations, postal systems, and cultural conventions across 200+ countries and territories.

---

**PROMPT:**

You are an international address format specialist designing {{form_type}} for {{target_countries}} with {{validation_requirements}}.

=== FORM CONTEXT ===
Form type: {{form_type}} (shipping/billing/registration/profile)
Target countries: {{target_countries}}
Primary country: {{primary_country}}
International support: {{international_support}} (single country/limited/global)
Use case: {{use_case}} (e-commerce/service/communication/data collection)

=== BUSINESS REQUIREMENTS ===
Address validation: {{address_validation}} (strict/lenient/none)
Shipping integration: {{shipping_integration}}
Required fields: {{required_fields}}
Optional fields: {{optional_fields}}
Error handling: {{error_handling}}

=== TECHNICAL CONSTRAINTS ===
Database schema: {{database_schema}}
Address autocomplete: {{autocomplete}} (Google Places/custom/none)
Validation service: {{validation_service}}
Legacy data: {{legacy_data}}
Character encoding: {{character_encoding}}

=== OUTPUT REQUIREMENTS ===

Generate international address formatting guidelines:

```yaml
address_format_variations:
  united_states:
    format: |
      [Name]
      [Street Address]
      [Apartment/Suite] (optional)
      [City], [State] [ZIP Code]
      [Country] (for international forms)

    fields:
      street_address: "123 Main Street"
      address_line_2: "Apt 4B (optional)"
      city: "New York"
      state: "NY (2-letter code) or New York (full name)"
      postal_code: "10001 or 10001-1234 (ZIP+4)"
      country: "United States"

    field_names:
      - "Street Address"
      - "Apartment, suite, etc. (optional)"
      - "City"
      - "State"
      - "ZIP Code"

    validation_rules:
      zip_code: "5 digits or 9 digits (ZIP+4): 12345 or 12345-6789"
      state: "2-letter code or full name"

  united_kingdom:
    format: |
      [Name]
      [Street Address]
      [Address Line 2] (optional)
      [Town/City]
      [County] (optional)
      [Postcode]
      [Country]

    fields:
      address_line_1: "123 High Street"
      address_line_2: "Flat 4B (optional)"
      town_city: "London"
      county: "Greater London (optional, not always used)"
      postcode: "SW1A 1AA"
      country: "United Kingdom"

    field_names:
      - "Address Line 1"
      - "Address Line 2 (optional)"
      - "Town/City"
      - "County (optional)"
      - "Postcode"

    validation_rules:
      postcode: "Format: AA9A 9AA or A9A 9AA or A9 9AA, etc."
      case_insensitive: "Accept both SW1A1AA and SW1A 1AA"

  canada:
    format: |
      [Name]
      [Street Address]
      [Unit Number] (optional)
      [City] [Province] [Postal Code]
      [Country]

    fields:
      street_address: "123 Rue Main"
      unit: "Unit 4B"
      city: "Montreal"
      province: "QC (2-letter code)"
      postal_code: "H2X 1Y5"
      country: "Canada"

    field_names:
      - "Street Address"
      - "Unit (optional)"
      - "City"
      - "Province"
      - "Postal Code"

    validation_rules:
      postal_code: "Format: A9A 9A9 (letter-digit-letter digit-letter-digit)"
      example: "K1A 0B1"

  germany:
    format: |
      [Name]
      [Street Address House Number]
      [Postal Code] [City]
      [Country]

    fields:
      street_and_number: "Hauptstraße 123"
      postal_code: "10115"
      city: "Berlin"
      country: "Deutschland"

    field_names:
      - "Straße und Hausnummer (Street and house number)"
      - "Postleitzahl (Postal code)"
      - "Stadt (City)"

    peculiarities:
      - "House number comes AFTER street name"
      - "Postal code comes BEFORE city"
      - "No state/province field"

  japan:
    format: |
      [Postal Code]
      [Prefecture] [City] [Ward/District]
      [Street Address] [Building Name] [Room Number]
      [Name]
      [Country]

    fields:
      postal_code: "〒100-0001"
      prefecture: "東京都 (Tokyo-to)"
      city: "千代田区 (Chiyoda-ku)"
      street: "千代田1-1-1"
      building: "千代田ビル101号室"
      name: "山田太郎"
      country: "日本"

    peculiarities:
      - "Postal code at top, with 〒 symbol"
      - "Address goes large to small (country → prefecture → city → street)"
      - "Name at END of address"
      - "Building and room number very common"

    western_order_adaptation:
      option: "Allow users to input in familiar order, reformat for display"

  china:
    format: |
      [Country]
      [Province/Municipality] [City] [District]
      [Street Address] [Building] [Unit]
      [Postal Code]
      [Name]

    fields:
      country: "中国"
      province: "北京市 (Beijing Municipality)"
      district: "朝阳区 (Chaoyang District)"
      street: "建国路1号"
      building: "国贸大厦"
      unit: "1001室"
      postal_code: "100000"
      name: "张伟"

    peculiarities:
      - "Large to small hierarchy (country → province → city → street)"
      - "Name at end"
      - "6-digit postal code"

  brazil:
    format: |
      [Street Address], [Number]
      [Complement] (optional)
      [Neighborhood]
      [City] - [State] [CEP]
      [Country]

    fields:
      street: "Avenida Paulista"
      number: "1578"
      complement: "Apto 101 (optional)"
      neighborhood: "Bela Vista"
      city: "São Paulo"
      state: "SP"
      cep: "01310-200"
      country: "Brasil"

    field_names:
      - "Endereço (Street)"
      - "Número (Number)"
      - "Complemento (Complement) (optional)"
      - "Bairro (Neighborhood)"
      - "Cidade (City)"
      - "Estado (State)"
      - "CEP (Postal Code)"

    peculiarities:
      - "Street number is separate field"
      - "Neighborhood (bairro) is important field"
      - "CEP format: 12345-678"

  india:
    format: |
      [Name]
      [Street Address]
      [Locality/Area]
      [City] [PIN Code]
      [State]
      [Country]

    fields:
      street: "123 MG Road"
      locality: "Indiranagar"
      city: "Bangalore"
      pin: "560038"
      state: "Karnataka"
      country: "India"

    field_names:
      - "Flat/Door/Block No."
      - "Street/Area/Locality"
      - "City"
      - "PIN Code"
      - "State"

    validation_rules:
      pin_code: "6 digits: 110001"

  ireland:
    format: |
      [Name]
      [Street Address]
      [Town/City]
      [County] (optional)
      [Eircode]
      [Country]

    fields:
      street: "123 O'Connell Street"
      town: "Dublin"
      county: "Dublin (optional)"
      eircode: "D01 F5P2"
      country: "Ireland"

    peculiarities:
      - "Eircode (postal code) introduced in 2015, not universal yet"
      - "County often optional"
      - "Town/City can be same name as county"

  netherlands:
    format: |
      [Street] [House Number][House Letter/Addition]
      [Postal Code] [City]
      [Country]

    fields:
      street_and_number: "Damrak 1A"
      postal_code: "1012 LG"
      city: "Amsterdam"
      country: "Nederland"

    peculiarities:
      - "House number can have letter suffix (1A, 1B)"
      - "Postal code: 1234 AB (4 digits, space, 2 letters)"
      - "Postal code comes before city"

  russia:
    format: |
      [Postal Code]
      [Region/Oblast/Krai]
      [City/Town]
      [Street], [House], [Apartment]
      [Name]
      [Country]

    fields:
      postal_code: "101000"
      region: "Москва (Moscow)"
      street_house_apt: "ул. Тверская, д. 1, кв. 5"
      name: "Иванов Иван Иванович"
      country: "Россия"

    peculiarities:
      - "Postal code first"
      - "Three-part name (Last, First, Patronymic)"
      - "Apartment number very common"

  saudi_arabia:
    format: |
      [Name]
      [Street Address]
      [District]
      [City] [Postal Code]
      [Country]

    fields:
      street: "شارع الملك فهد"
      district: "العليا"
      city: "الرياض"
      postal_code: "12345"
      country: "المملكة العربية السعودية"

    peculiarities:
      - "Right-to-left text"
      - "5-digit postal code"
      - "District (حي) important field"

form_design_strategies:
  dynamic_country_based:
    principle: "Adapt form fields based on selected country"

    implementation:
      1: "Country selector at top of form"
      2: "Form fields update based on country"
      3: "Field labels change to local terms"
      4: "Required/optional fields adjust"

    example:
      us_selected:
        shows: ["Street Address", "Apt/Suite", "City", "State", "ZIP Code"]
        labels: "State, ZIP Code"
        validation: "5 or 9-digit ZIP"

      uk_selected:
        shows: ["Address Line 1", "Address Line 2", "Town/City", "County", "Postcode"]
        labels: "County (optional), Postcode"
        validation: "UK postcode format"

      japan_selected:
        shows: ["Postal Code", "Prefecture", "City", "Street", "Building"]
        order: "Postal code first"
        validation: "7-digit postal code"

  universal_flexible_form:
    principle: "Generic form that works for all countries"

    fields:
      - field: "Address Line 1"
        required: true
        help: "Street address, P.O. box, company name"

      - field: "Address Line 2"
        required: false
        help: "Apartment, suite, unit, building, floor, etc."

      - field: "Address Line 3"
        required: false
        help: "Additional address information"

      - field: "City / Town / Locality"
        required: true
        help: "City, town, or locality name"

      - field: "State / Province / Region"
        required: false
        help: "State, province, prefecture, or region"

      - field: "Postal Code / ZIP"
        required: false
        help: "Postal code, ZIP code, or postcode"

      - field: "Country"
        required: true
        help: "Select your country"

    pros:
      - "Works for any country"
      - "No complex logic needed"
      - "Users can enter data in familiar format"

    cons:
      - "Not optimized for any specific country"
      - "May confuse users (extra fields they don't need)"
      - "Harder to validate"

  smart_freeform:
    principle: "Single text area with smart parsing"

    implementation:
      - "Large text area for full address"
      - "AI/ML parsing to extract components"
      - "Fallback to manual field entry if parsing fails"

    example:
      input: |
        123 Main Street
        Apt 4B
        New York, NY 10001
        United States

      parsed:
        street: "123 Main Street"
        unit: "Apt 4B"
        city: "New York"
        state: "NY"
        zip: "10001"
        country: "United States"

    use_case: "Quick checkout, mobile forms, address copying"

address_autocomplete:
  google_places_api:
    benefits:
      - "Comprehensive global coverage"
      - "Real-time validation"
      - "Auto-fills components"

    implementation:
      - "Type-ahead suggestions"
      - "Fill address on selection"
      - "Parse into form fields"

    considerations:
      - "Cost (API charges)"
      - "Privacy (sends data to Google)"
      - "Requires internet connection"

  local_postal_apis:
    us: "USPS Address Validation"
    uk: "Royal Mail Postcode Finder"
    canada: "Canada Post AddressComplete"

    benefit: "Authoritative data for specific country"

  manual_entry:
    always_allow: "Autocomplete is helper, not requirement"
    use_case:
      - "New buildings/streets not in database"
      - "Privacy-conscious users"
      - "Offline scenarios"

validation_strategies:
  lenient_validation:
    principle: "Accept addresses as users enter them"
    validate: "Format warnings, not errors"
    example: "ZIP code format unusual, but accepting"
    use_when: "User knows their address better than system"

  strict_validation:
    principle: "Verify address with postal service"
    reject: "Invalid or undeliverable addresses"
    use_when: "Shipping critical, reduce failed deliveries"

  progressive_validation:
    principle: "Validate as user types, suggest corrections"
    example:
      user_types: "10001-"
      suggestion: "Did you mean 10001-1234? (ZIP+4)"

display_formatting:
  storage_vs_display:
    storage:
      format: "Structured components in database"
      fields: "street, city, state, postal_code, country (separate)"

    display:
      format: "Formatted according to local conventions"
      us: "City, State ZIP"
      uk: "Town, Postcode"
      germany: "PLZ Stadt"

  international_orders:
    destination_format:
      principle: "Format address for destination country"
      example: "UK address formatted UK-style, even if sender is US"

    labels:
      include: "Shipping label formatted per destination postal service"

special_cases:
  military_addresses:
    us_apo_fpo:
      format: |
        [Name]
        [Unit]
        [APO/FPO] [AA/AE/AP] [ZIP]

      example: "APO AE 09001"
      note: "Treated as domestic US for shipping purposes"

  po_boxes:
    many_countries: "P.O. Box common, must support"
    format: "P.O. Box 12345"
    cannot_ship: "Some couriers don't deliver to P.O. Boxes"
    separate_field: "Optional separate field or part of address line 1"

  rural_routes:
    format: "RR 1, Box 123"
    countries: "Canada, US rural areas"

  non_standard_addresses:
    examples:
      - "Islands: no street names, only house names"
      - "Rural areas: landmarks instead of addresses"
      - "Developing regions: informal addressing"

    approach:
      - "Flexible text fields"
      - "Don't enforce strict structure"
      - "Allow descriptive addresses"

localization_considerations:
  field_labels:
    translate: "Use local terminology"
    examples:
      us: "ZIP Code"
      uk: "Postcode"
      germany: "Postleitzahl"
      france: "Code postal"

  field_order:
    adapt: "Order fields per local convention"
    western: "Name → Street → City → State → Postal → Country"
    asian: "Postal → Region → City → Street → Building → Name"

  placeholder_examples:
    show_local: "Use local example addresses in placeholders"
    us: "e.g., 10001"
    uk: "e.g., SW1A 1AA"
    canada: "e.g., K1A 0B1"

  error_messages:
    localized: "Error messages in user's language"
    helpful: "Explain correct format with local example"
```

=== EXAMPLES ===

**Example 1: E-commerce Checkout - Global**
- form_type: "shipping address form"
- target_countries: "global (200+ countries)"
- validation: "lenient (accept unusual addresses)"

**Dynamic Form Implementation**:
```yaml
country_selector:
  position: "First field in form"
  label: "Country"
  type: "Searchable dropdown"
  default: "Based on user's IP or browser locale"

us_form:
  fields:
    - label: "Street address"
      type: "text"
      required: true
      autocomplete: "address-line1"
      placeholder: "123 Main Street"

    - label: "Apartment, suite, etc. (optional)"
      type: "text"
      required: false
      autocomplete: "address-line2"
      placeholder: "Apt 4B"

    - label: "City"
      type: "text"
      required: true
      autocomplete: "address-level2"

    - label: "State"
      type: "dropdown"
      required: true
      options: ["AL - Alabama", "AK - Alaska", ...] # All 50 states
      autocomplete: "address-level1"

    - label: "ZIP code"
      type: "text"
      required: true
      pattern: "\\d{5}(-\\d{4})?"
      placeholder: "10001 or 10001-1234"
      autocomplete: "postal-code"

uk_form:
  fields:
    - label: "Address line 1"
      type: "text"
      required: true
      placeholder: "123 High Street"

    - label: "Address line 2 (optional)"
      type: "text"
      required: false
      placeholder: "Flat 4B"

    - label: "Town/City"
      type: "text"
      required: true

    - label: "County (optional)"
      type: "text"
      required: false

    - label: "Postcode"
      type: "text"
      required: true
      pattern: "[A-Z]{1,2}\\d{1,2}[A-Z]?\\s?\\d[A-Z]{2}"
      placeholder: "SW1A 1AA"
      help: "e.g., SW1A 1AA"

japan_form:
  fields:
    - label: "郵便番号 (Postal code)"
      type: "text"
      required: true
      pattern: "\\d{3}-\\d{4}"
      placeholder: "100-0001"
      prefix: "〒"

    - label: "都道府県 (Prefecture)"
      type: "dropdown"
      required: true
      options: ["北海道", "青森県", "岩手県", ...] # All 47 prefectures

    - label: "市区町村 (City)"
      type: "text"
      required: true

    - label: "町名番地 (Street address)"
      type: "text"
      required: true
      placeholder: "千代田1-1-1"

    - label: "建物名・部屋番号 (Building/Room) (optional)"
      type: "text"
      required: false
      placeholder: "千代田ビル101号室"
```

**Example 2: Universal Address Form - Fallback**
- form_type: "billing address (catch-all)"
- target_countries: "any country not specifically configured"
- approach: "flexible universal form"

**Universal Form**:
```yaml
form_fields:
  country:
    label: "Country"
    type: "dropdown"
    required: true
    position: 1

  full_name:
    label: "Full name"
    type: "text"
    required: true
    help: "First and last name"

  address_line_1:
    label: "Address line 1"
    type: "text"
    required: true
    help: "Street address, P.O. box, company name, c/o"
    placeholder: "e.g., 123 Main Street"

  address_line_2:
    label: "Address line 2 (optional)"
    type: "text"
    required: false
    help: "Apartment, suite, unit, building, floor, etc."

  address_line_3:
    label: "Address line 3 (optional)"
    type: "text"
    required: false
    help: "Additional address information"

  city:
    label: "City / Town / Locality"
    type: "text"
    required: true
    help: "Enter the city, town, or locality"

  state_province:
    label: "State / Province / Region (optional)"
    type: "text"
    required: false
    help: "Enter state, province, prefecture, or region if applicable"

  postal_code:
    label: "Postal code / ZIP (optional)"
    type: "text"
    required: false
    help: "Enter postal code, ZIP code, or postcode if your country uses one"

  phone:
    label: "Phone number (optional)"
    type: "tel"
    required: false
    help: "For delivery questions"
```

**Example 3: Mobile Checkout - Smart Input**
- form_type: "mobile checkout address"
- target_countries: "US primary, international secondary"
- approach: "minimize typing on mobile"

**Mobile-Optimized Form**:
```yaml
geolocation_prompt:
  show: "Use my current location to autofill"
  permission: "Request geolocation permission"
  autofill: "City, state, postal code if permission granted"

address_autocomplete:
  type: "Google Places autocomplete"
  show: "As user types, show suggestions"
  select: "Fills all fields on selection"

copy_from_billing:
  checkbox: "Shipping address same as billing address"
  action: "Copy all fields if checked"

manual_entry_fallback:
  trigger: "User selects 'Enter manually'"
  shows: "Full form with all fields"

saved_addresses:
  returning_users: "Show saved addresses from previous orders"
  action: "Select to autofill"
  edit: "Option to edit before using"

minimal_fields:
  us_user:
    required: ["Street", "City", "State", "ZIP"]
    optional: ["Apt/Unit"]
    phone: "Optional but recommended for delivery"

  international_user:
    required: ["Address", "City", "Country"]
    optional: ["State/Region", "Postal Code"]
    adapts: "Based on country selected"
```

---

**Accessibility Requirements**: Address forms must comply with WCAG 2.1 Level AA. Use proper HTML5 input types (address-line1, postal-code, etc.) for autocomplete support. Ensure all fields have associated labels (never use placeholder as sole label). Provide clear error messages with correction guidance. Support keyboard navigation through all fields. Ensure country dropdown is searchable for screen reader users. Test with international screen readers. Support right-to-left text for RTL languages (Arabic, Hebrew). Provide adequate touch targets (44x44px minimum) for mobile forms.

**Psychological Principles**: Familiar local formats reduce cognitive load (processing fluency). Clear examples guide users (anchoring effect). Progressive disclosure reduces overwhelm (information foraging). Smart defaults save time (default effect). Flexible input respects user knowledge (autonomy). Validation feedback prevents errors (error prevention). Localized terminology builds trust (cultural schema congruence).

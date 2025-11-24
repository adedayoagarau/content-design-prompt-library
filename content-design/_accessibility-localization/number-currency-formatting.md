## Number and Currency Formatting Framework v1.0

**Purpose**: Design number, currency, percentage, and measurement content that adapts to local formatting conventions including decimal separators, thousands separators, currency symbols, and unit systems.

---

**PROMPT:**

You are a number localization specialist formatting {{content_type}} for {{target_locale}} with {{number_types}}.

=== LOCALE CONTEXT ===
Target locale: {{target_locale}}
Number system: {{number_system}}
Decimal separator: {{decimal_separator}}
Thousands separator: {{thousands_separator}}
Currency: {{currency}}
Measurement system: {{measurement_system}} (metric/imperial/mixed)

=== CONTENT REQUIREMENTS ===
Number types: {{number_types}} (integers/decimals/currency/percentages/fractions)
Precision needed: {{precision_needed}}
Range: {{number_range}}
Display context: {{display_context}} (tables/charts/UI/forms/reports)
Formatting constraints: {{formatting_constraints}}

=== BUSINESS CONTEXT ===
Industry: {{industry}} (finance/e-commerce/analytics/scientific)
Audience expertise: {{audience_expertise}}
Transaction types: {{transaction_types}}
Regulatory requirements: {{regulatory_requirements}}
Error tolerance: {{error_tolerance}}

=== OUTPUT REQUIREMENTS ===

Generate localized number and currency formatting:

```yaml
number_formatting_conventions:
  decimal_separator:
    period_dot:
      regions: ["US", "UK", "China", "Japan", "Korea", "India"]
      format: "1234.56"
      percentage: "99.9%"

    comma:
      regions: ["Most of Europe", "Latin America", "Russia", "Turkey"]
      format: "1234,56"
      percentage: "99,9%"

    momayyez:
      regions: ["Arabic-speaking countries (Iran, some Arab countries)"]
      symbol: "٫" (Arabic decimal separator)
      format: "1234٫56"

  thousands_separator:
    comma:
      regions: ["US", "UK", "China", "Japan"]
      format: "1,234,567.89"

    period_dot:
      regions: ["Germany", "Spain", "Italy", "Netherlands", "Brazil"]
      format: "1.234.567,89"

    space:
      regions: ["France", "Sweden", "Finland", "ISO 31-0 standard"]
      format: "1 234 567,89"
      types:
        normal_space: "Regular space (may wrap)"
        thin_space: "Thin space (recommended)"
        non_breaking_space: "Non-breaking space (prevents wrapping)"

    apostrophe:
      regions: ["Switzerland"]
      format: "1'234'567.89"

    none:
      regions: ["China (sometimes)"]
      format: "1234567.89"
      note: "Common for smaller numbers or compact displays"

  international_variations:
    us_format: "1,234.56"
    uk_format: "1,234.56 (same as US)"
    germany_format: "1.234,56"
    france_format: "1 234,56"
    switzerland_format: "1'234.56"
    india_format: "12,34,567.89 (Indian numbering system)"
    china_format: "1234.56 or 1,234.56"

  indian_numbering_system:
    lakhs_crores:
      - "1,00,000 = 1 lakh (100 thousand)"
      - "10,00,000 = 10 lakhs (1 million)"
      - "1,00,00,000 = 1 crore (10 million)"
    grouping: "First 3, then groups of 2"
    example: "12,34,56,789.00 = twelve crore, thirty-four lakh, fifty-six thousand, seven hundred eighty-nine"

currency_formatting:
  symbol_position:
    symbol_before:
      regions: ["US", "UK", "Australia"]
      format: "$1,234.56"
      space: "No space between symbol and number"

    symbol_after:
      regions: ["Most of Europe"]
      format: "1 234,56 €"
      space: "Space between number and symbol"
      france: "1 234,56 €"
      germany: "1.234,56 €"

    symbol_both_sides:
      regions: ["Some contexts for clarity"]
      format: "$1,234.56 USD"

  currency_codes:
    iso_4217:
      format: "Three-letter codes (USD, EUR, GBP, JPY)"
      usage: "International contexts, multi-currency displays"

    placement:
      - "USD 1,234.56 (code before)"
      - "1,234.56 USD (code after)"
      - "1,234.56 US$ (code attached to symbol)"

  specific_currencies:
    us_dollar:
      symbol: "$"
      code: "USD"
      format: "$1,234.56"
      decimal_places: 2

    euro:
      symbol: "€"
      code: "EUR"
      formats:
        germany: "1.234,56 €"
        france: "1 234,56 €"
        ireland: "€1,234.56"
      decimal_places: 2

    british_pound:
      symbol: "£"
      code: "GBP"
      format: "£1,234.56"
      decimal_places: 2

    japanese_yen:
      symbol: "¥"
      code: "JPY"
      format: "¥1,235"
      decimal_places: 0
      note: "Yen has no decimal subdivision"

    chinese_yuan:
      symbol: "¥ or 元"
      code: "CNY or RMB"
      format: "¥1,234.56 or 1,234.56元"
      decimal_places: 2
      note: "¥ symbol same as yen, use CNY code for clarity"

    indian_rupee:
      symbol: "₹"
      code: "INR"
      format: "₹12,34,567.89"
      decimal_places: 2
      grouping: "Indian numbering system"

    saudi_riyal:
      symbol: "﷼ or ر.س"
      code: "SAR"
      format: "1,234.56 ﷼ or 1,234.56 ر.س"
      decimal_places: 2
      rtl: "Right-to-left considerations"

  crypto_currency:
    bitcoin:
      symbol: "₿ or BTC"
      format: "₿0.00123456 or 0.00123456 BTC"
      decimal_places: "Up to 8 (satoshis)"

    ethereum:
      symbol: "Ξ or ETH"
      format: "0.123456 ETH"
      decimal_places: "Up to 18 (wei)"

  negative_amounts:
    parentheses:
      regions: ["US accounting"]
      format: "($1,234.56)"
      color: "Often displayed in red"

    minus_sign:
      regions: ["Most of world"]
      format: "-$1,234.56 or $-1,234.56"
      variations:
        before_symbol: "-$1,234.56"
        after_symbol: "$-1,234.56"
        after_number: "$1,234.56-"

  rounding_display:
    financial:
      rule: "Round to 2 decimal places"
      display: "Always show 2 decimals ($5.00, not $5)"
      reason: "Professional appearance, consistency"

    whole_currency_units:
      when: "Large amounts, approximations"
      format: "$1,235 (rounded from $1,234.56)"
      or: "$1.2K, $1.2M, $1.2B"

    decimal_places_by_currency:
      - "USD, EUR, GBP: 2 decimals"
      - "JPY, KRW: 0 decimals"
      - "BHD, KWD, OMR: 3 decimals"
      - "BTC: up to 8 decimals"

percentage_formatting:
  symbol_position:
    after_number:
      regions: ["Most of world"]
      format: "99.5%"
      space: "No space between number and %"

    space_before_percent:
      regions: ["Some style guides"]
      format: "99.5 %"
      note: "Less common, check specific style guide"

  decimal_precision:
    whole_numbers: "50% (no decimal)"
    one_decimal: "50.5% (common for most contexts)"
    two_decimals: "50.56% (financial, scientific)"
    many_decimals: "50.56789% (scientific, precise calculations)"

  localization:
    us_format: "99.5%"
    european_format: "99,5%"
    consistency: "Match number formatting convention"

  special_cases:
    greater_than_100: "150% (growth, ratios)"
    negative: "-5.5% (decline)"
    ranges: "50-60% or 50%-60%"
    approximately: "~50% or ≈50%"

measurement_units:
  distance:
    metric:
      units: ["mm", "cm", "m", "km"]
      format: "5.5 km"
      space: "Space between number and unit"
      regions: "Most of world"

    imperial:
      units: ["in", "ft", "yd", "mi"]
      format: "3.5 mi"
      space: "Space between number and unit"
      regions: "US, Myanmar, Liberia"

    mixed:
      uk: "Miles for road distance, meters for short distances"
      format: "5 ft 10 in or 5'10\""

  weight:
    metric:
      units: ["mg", "g", "kg", "metric ton"]
      format: "75.5 kg"

    imperial:
      units: ["oz", "lb", "ton"]
      format: "165 lb"

    conversions:
      display: "Show both when serving mixed audiences"
      format: "75 kg (165 lb)"

  temperature:
    celsius:
      regions: "Most of world"
      format: "22°C or 22 °C"
      space: "Style guide dependent"

    fahrenheit:
      regions: "US, some Caribbean"
      format: "72°F or 72 °F"

    both:
      format: "22°C (72°F)"
      primary: "User's preference first"

  volume:
    metric:
      units: ["ml", "L"]
      format: "500 ml"

    imperial:
      units: ["fl oz", "cup", "pt", "qt", "gal"]
      format: "16 fl oz"

large_number_formatting:
  abbreviations:
    thousand:
      symbol: "K or k"
      format: "1.2K or 1,200"
      usage: "Social media followers, video views"

    million:
      symbol: "M"
      format: "1.5M or 1,500,000"

    billion:
      symbol: "B"
      format: "2.3B or 2,300,000,000"

    trillion:
      symbol: "T"
      format: "1.8T"

  international_differences:
    us_billion: "1,000,000,000 (9 zeros)"
    uk_billion_historical: "1,000,000,000,000 (12 zeros)"
    uk_modern: "Now uses US definition"
    note: "Always use numbers for clarity in international contexts"

  scientific_notation:
    format: "1.23 × 10⁶ or 1.23E6"
    usage: "Very large or very small numbers"
    example: "6.02 × 10²³ (Avogadro's number)"

special_formatting_contexts:
  tables:
    alignment:
      numbers: "Right-aligned for easy comparison"
      currency: "Right-aligned with decimals lined up"
      text: "Left-aligned"

    decimal_alignment:
      technique: "Use monospaced font or CSS for alignment"
      example: |
        $  1,234.56
        $    123.45
        $ 12,345.67

  forms:
    input_formatting:
      as_you_type: "Format with commas as user types"
      behavior: "1234 → 1,234 (automatic)"
      removal: "Strip formatting before submitting to backend"

    validation:
      accept: "Both formatted (1,234.56) and unformatted (1234.56)"
      normalize: "Convert to standard format before processing"

  charts:
    axis_labels:
      abbreviate: "Use K, M, B for readability"
      example: "1.5M instead of 1,500,000"

    tooltips:
      full_precision: "Show complete number on hover"
      format: "1,500,000 users (full number in tooltip)"

  compact_displays:
    mobile: "1.5M (abbreviated)"
    desktop: "1,500,000 (full number)"
    responsive: "Adapt based on available space"

accessibility_considerations:
  screen_readers:
    announce: "One thousand two hundred thirty-four point five six"
    currency: "Twelve dollars and thirty-four cents"
    large_numbers: "One point five million"

  semantic_html:
    use: "<data value='1234.56'>$1,234.56</data>"
    benefit: "Machine-readable value + human-readable display"

  avoid_ambiguity:
    not: "1,234 (could be 1.234 in Europe)"
    use: "1,234 people (context makes it clear)"
    international: "Use number words or ISO format when ambiguous"

content_writing_guidelines:
  always_include_units:
    not: "5 to 10"
    use: "5 to 10 meters" or "$5 to $10"

  consistent_precision:
    not: "$5 to $10.50"
    use: "$5.00 to $10.50" or "$5 to $11"

  currency_code_when_mixed:
    single_currency: "$1,234.56"
    multiple_currencies: "USD 1,234.56 and EUR 1,000.00"

  ranges:
    format: "$100-$200" or "$100 to $200"
    not: "$100-200 (ambiguous)"

  approximations:
    symbols: "~$100 or ≈$100 or about $100"
    words: "approximately 1,000 users"
```

=== EXAMPLES ===

**Example 1: E-commerce Product Pricing - Multi-Currency**
- content_type: "product prices"
- target_locales: "US, Germany, Japan, India"
- includes: "prices, discounts, savings"

**Locale-Specific Formatting**:
```yaml
product_price: 99.99

us_display:
  currency: "USD"
  format: "$99.99"
  sale_price: "$79.99"
  savings: "Save $20.00 (20%)"
  tax_note: "Plus tax"

germany_display:
  currency: "EUR"
  converted_price: 92.50
  format: "92,50 €"
  sale_price: "74,00 €"
  savings: "Sie sparen 18,50 € (20%)"
  tax_note: "inkl. MwSt."
  note: "Period for thousands, comma for decimals"

japan_display:
  currency: "JPY"
  converted_price: 14850
  format: "¥14,850"
  sale_price: "¥11,880"
  savings: "¥2,970お得（20%オフ）"
  tax_note: "税込"
  note: "No decimal places for yen"

india_display:
  currency: "INR"
  converted_price: 8325
  format: "₹8,325.00"
  sale_price: "₹6,660.00"
  savings: "Save ₹1,665 (20%)"
  tax_note: "Inclusive of all taxes"
  note: "Standard formatting (not lakh/crore for this amount)"
```

**Example 2: Financial Dashboard - Analytics**
- content_type: "financial metrics dashboard"
- target_locale: "US (finance industry)"
- includes: "revenue, growth rates, large numbers"

**Dashboard Display**:
```yaml
metrics:
  total_revenue:
    value: 12345678.90
    display_full: "$12,345,678.90"
    display_abbreviated: "$12.3M"
    context: "Full number in table, abbreviated in chart"

  revenue_growth:
    value: 0.1234
    display: "12.34%"
    or: "+12.34% (with + sign for positive)"
    decimal_places: 2
    color: "Green for positive"

  average_transaction:
    value: 234.56
    display: "$234.56"
    always_two_decimals: true
    even_for_whole: "$200.00 (not $200)"

  user_count:
    value: 1500000
    display_abbreviated: "1.5M users"
    display_full: "1,500,000 users"
    tooltip: "Hover shows full number"

  conversion_rate:
    value: 0.0456
    display: "4.56%"
    trend: "↑ 0.12% from last month"

  negative_balance:
    value: -5678.90
    display: "($5,678.90)"
    alternative: "-$5,678.90"
    color: "Red text"
    parentheses: "Accounting convention in US"

table_formatting:
  header: "| Metric | Value | Change |"
  row_1: "| Revenue | $12,345,678.90 | +12.34% |"
  row_2: "| Users | 1,500,000 | +5.67% |"
  row_3: "| Avg Transaction | $234.56 | -2.34% |"

  alignment:
    metric_names: "Left-aligned"
    numbers: "Right-aligned"
    percentages: "Right-aligned"
```

**Example 3: Recipe Website - Measurement Conversion**
- content_type: "recipe measurements"
- target_locales: "US (imperial) and UK (metric)"
- includes: "volume, weight, temperature"

**Recipe Display**:
```yaml
ingredient_flour:
  imperial:
    amount: "2 cups"
    weight: "10 oz"
    grams: "(280 g)"

  metric:
    amount: "500 ml"
    weight: "280 g"
    cups: "(about 2 cups)"

  combined_display:
    us_primary: "2 cups (280 g)"
    uk_primary: "280 g (2 cups)"

oven_temperature:
  fahrenheit: "350°F"
  celsius: "175°C"
  gas_mark: "Gas Mark 4"

  us_display: "Preheat oven to 350°F (175°C)"
  uk_display: "Preheat oven to 175°C (350°F/Gas Mark 4)"

cooking_time:
  format: "25-30 minutes"
  not: "25-30 min (use full word 'minutes' for clarity)"

serving_size:
  portions: "Serves 4-6"
  volume: "Makes about 2 cups (500 ml)"

liquid_ingredients:
  us_format: "1 cup (8 fl oz)"
  metric_format: "250 ml (1 cup)"
  both: "1 cup (250 ml)"

weight_ingredients:
  us_format: "1 lb butter"
  metric_format: "450 g butter"
  both: "1 lb (450 g) butter"
```

**Example 4: Fitness App - Distance and Weight Tracking**
- content_type: "fitness metrics"
- target_locales: "US (imperial) and international (metric)"
- includes: "distance, weight, height"

**User Profile Settings**:
```yaml
unit_preferences:
  allow_user_choice: true
  options:
    - "Metric (kg, cm, km)"
    - "Imperial (lb, ft/in, mi)"

height_input:
  imperial:
    format: "5 ft 10 in"
    alternative: "5'10\""
    input_fields: "Separate feet and inches fields"

  metric:
    format: "178 cm"
    alternative: "1.78 m"
    input_fields: "Single centimeters field"

weight_tracking:
  imperial:
    current: "165 lb"
    goal: "155 lb"
    change: "-10 lb"

  metric:
    current: "75 kg"
    goal: "70 kg"
    change: "-5 kg"

  display_both:
    current: "75 kg (165 lb)"
    preference_first: true

running_distance:
  imperial:
    workout: "3.5 mi"
    pace: "8:30 min/mi"

  metric:
    workout: "5.6 km"
    pace: "5:17 min/km"

  total_distance:
    imperial: "Run 100 miles this month"
    metric: "Run 160 km this month"
    progress: "65.5 mi / 100 mi (66%)"
```

---

**Accessibility Requirements**: Number and currency formatting must maintain clarity for screen readers and assistive technologies. Use semantic HTML elements like `<data>` with machine-readable values. Screen readers should announce numbers naturally ("one thousand two hundred thirty-four point fifty-six"). Ensure sufficient color contrast for negative numbers shown in red (4.5:1 minimum). Provide text alternatives for currency symbols. Test number announcements with screen readers in multiple locales. Consider users with dyscalculia - use clear, consistent formatting.

**Psychological Principles**: Familiar formatting increases processing fluency (fluency heuristic). Consistent precision builds trust (consistency principle). Proper grouping aids visual scanning (chunking). Cultural conventions feel natural (schema congruence). Clear currency indication reduces anxiety (uncertainty reduction). Appropriate precision matches user expectations (cognitive fit theory).

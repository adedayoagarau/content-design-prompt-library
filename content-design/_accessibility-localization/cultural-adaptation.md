## Cultural Adaptation Framework v1.0

**Purpose**: Adapt content beyond literal translation to resonate with target cultures through culturally appropriate tone, examples, imagery, and messaging that respects local customs, values, and communication preferences.

---

**PROMPT:**

You are a cultural adaptation specialist localizing {{content_type}} for {{target_culture}} from {{source_culture}} considering {{cultural_dimensions}}.

=== CULTURAL CONTEXT ===
Source culture: {{source_culture}}
Target culture: {{target_culture}}
Target region: {{target_region}}
Cultural distance: {{cultural_distance}} (similar/moderate/significant)
Hofstede dimensions: {{hofstede_dimensions}}
Communication style: {{communication_style}} (high-context/low-context)
Formality level: {{formality_level}}

=== CONTENT ANALYSIS ===
Content type: {{content_type}} (marketing/product/support/legal/educational)
Brand voice: {{brand_voice}}
Target demographic: {{target_demographic}}
Sensitive topics: {{sensitive_topics}}
Cultural references: {{cultural_references}}
Imagery and metaphors: {{imagery_metaphors}}

=== ADAPTATION SCOPE ===
Adaptation level: {{adaptation_level}} (translation only/light adaptation/heavy localization/transcreation)
Preserve brand: {{brand_consistency}} (strict/flexible)
Local regulations: {{local_regulations}}
Competitor landscape: {{competitor_landscape}}
Market maturity: {{market_maturity}}

=== OUTPUT REQUIREMENTS ===

Generate culturally adapted content:

```yaml
cultural_dimensions_analysis:
  hofstede_framework:
    power_distance:
      definition: "Acceptance of hierarchical authority"
      high_power_distance:
        cultures: ["Malaysia", "China", "India", "Mexico"]
        content_implications:
          - "Emphasize expertise and authority"
          - "Show respect for hierarchy"
          - "Formal titles and honorifics important"
          - "Top-down decision making references"

      low_power_distance:
        cultures: ["Denmark", "Austria", "Israel", "New Zealand"]
        content_implications:
          - "Emphasize equality and collaboration"
          - "Casual, friendly tone acceptable"
          - "First names okay"
          - "Peer recommendations valued"

    individualism_collectivism:
      individualistic:
        cultures: ["USA", "UK", "Australia", "Netherlands"]
        content_implications:
          - "Focus on personal achievement"
          - "Individual benefits and features"
          - "Personal choice and customization"
          - "Stand out from crowd"

      collectivistic:
        cultures: ["China", "Japan", "Korea", "Indonesia"]
        content_implications:
          - "Emphasize group harmony"
          - "Family and community benefits"
          - "Popular choice and social proof"
          - "Fit in with others"

    uncertainty_avoidance:
      high_uncertainty_avoidance:
        cultures: ["Greece", "Portugal", "Belgium", "Japan"]
        content_implications:
          - "Provide detailed information"
          - "Emphasize security and guarantees"
          - "Show credentials and certifications"
          - "Reduce risk messaging"

      low_uncertainty_avoidance:
        cultures: ["Singapore", "Denmark", "UK", "Sweden"]
        content_implications:
          - "Emphasize innovation and flexibility"
          - "Comfortable with ambiguity"
          - "Risk-taking as positive"
          - "Less formal proof needed"

    masculinity_femininity:
      masculine:
        cultures: ["Japan", "Austria", "Venezuela", "Italy"]
        content_implications:
          - "Achievement and success focus"
          - "Competition and winning"
          - "Material rewards"
          - "Distinct gender roles acceptable"

      feminine:
        cultures: ["Sweden", "Norway", "Netherlands", "Denmark"]
        content_implications:
          - "Quality of life focus"
          - "Cooperation and caring"
          - "Work-life balance"
          - "Gender equality important"

  communication_styles:
    high_context:
      cultures: ["Japan", "China", "Arab countries", "Korea"]
      characteristics:
        - "Indirect communication preferred"
        - "Context and relationships matter"
        - "Subtlety and nuance valued"
        - "Reading between lines expected"

      content_adaptations:
        - "Softer, more indirect calls to action"
        - "Relationship building before transaction"
        - "Implicit rather than explicit messaging"
        - "Respect for face and harmony"

    low_context:
      cultures: ["USA", "Germany", "Switzerland", "Scandinavia"]
      characteristics:
        - "Direct, explicit communication"
        - "Message is in words, not context"
        - "Clarity and precision valued"
        - "Say what you mean"

      content_adaptations:
        - "Clear, direct calls to action"
        - "Explicit benefit statements"
        - "Detailed specifications"
        - "Transparency prioritized"

tone_and_formality:
  formality_spectrum:
    very_formal:
      cultures: ["Germany", "France", "Japan", "Korea"]
      linguistic_markers:
        - "Formal pronouns (Sie, vous, usted)"
        - "Professional titles always"
        - "No contractions"
        - "Respectful distance maintained"

      content_examples:
        greeting: "Good morning, Dr. Schmidt. We appreciate your interest in our professional services."
        cta: "We cordially invite you to explore our comprehensive offerings."

    moderately_formal:
      cultures: ["UK", "Canada", "Australia"]
      linguistic_markers:
        - "Professional but warm"
        - "Some contractions acceptable"
        - "Respectful but friendly"

      content_examples:
        greeting: "Hello, Sarah. Thanks for your interest in our services."
        cta: "We'd love to show you what we can do for you."

    casual:
      cultures: ["USA (tech industry)", "Scandinavia"]
      linguistic_markers:
        - "Conversational tone"
        - "Contractions standard"
        - "First names immediately"
        - "Informal language"

      content_examples:
        greeting: "Hey there! Great to have you."
        cta: "Check out what we've built for you."

cultural_taboos_and_sensitivities:
  colors:
    red:
      positive: ["China (luck, celebration)", "India (purity, marriage)"]
      negative: ["Some African countries (death)", "Financial contexts (debt)"]

    white:
      positive: ["Western cultures (purity, peace)"]
      negative: ["China/Japan/Korea (death, mourning)"]

    yellow:
      positive: ["China (imperial, prestige)"]
      negative: ["Some contexts (cowardice)"]

  numbers:
    lucky:
      china: ["8 (prosperity)", "6 (smooth)"]
      japan: ["7 (lucky)"]

    unlucky:
      china: ["4 (death)"]
      japan: ["4 (death)", "9 (suffering)"]
      western: ["13 (superstition)"]
      italy: ["17 (bad luck)"]

  gestures_and_imagery:
    avoid:
      - culture: "Middle East"
        gesture: "Thumbs up (offensive gesture)"
        alternative: "Checkmark icon"

      - culture: "Thailand"
        imagery: "Feet, soles of shoes (disrespectful)"
        alternative: "Full body or upper body only"

      - culture: "Many Asian cultures"
        imagery: "Pointing with index finger"
        alternative: "Open hand gesture"

  religious_and_political:
    sensitive_topics:
      - "Religious imagery (crosses, religious figures)"
      - "Political references (avoid taking sides)"
      - "National symbols (flags, emblems - use carefully)"
      - "Alcohol/pork for Muslim markets"
      - "Beef imagery for Hindu markets"

examples_and_scenarios:
  localize_examples:
    names:
      us_source: "John, Sarah, Michael"
      chinese_adaptation: "李明, 王芳, 张伟"
      spanish_adaptation: "José, María, Carlos"
      rationale: "Readers identify with culturally familiar names"

    addresses:
      us_source: "123 Main Street, Apt 4B, New York, NY 10001"
      uk_adaptation: "Flat 4B, 123 High Street, London, SW1A 1AA"
      japan_adaptation: "〒100-0001 東京都千代田区千代田1-1-1 マンション101号室"

    phone_numbers:
      us_source: "(555) 123-4567"
      uk_adaptation: "+44 20 7123 4567"
      germany_adaptation: "+49 30 12345678"

    currency:
      us_source: "$50"
      uk_adaptation: "£40"
      eurozone_adaptation: "45€"
      japan_adaptation: "¥5,500"

    measurements:
      us_source: "5 feet 10 inches, 170 pounds"
      metric_adaptation: "178 cm, 77 kg"

  relatable_scenarios:
    payment_methods:
      us: "credit cards, PayPal, Venmo"
      china: "Alipay, WeChat Pay, UnionPay"
      netherlands: "iDEAL, credit cards"
      germany: "SEPA, Giropay, credit cards"

    sports_metaphors:
      us_source: "Hit a home run with this product"
      uk_adaptation: "Score a goal with this product"
      global_neutral: "Achieve great success with this product"

    holidays_and_seasons:
      us_source: "Get ready for Thanksgiving sales"
      uk_adaptation: "Get ready for Black Friday sales"
      china_adaptation: "Get ready for Singles' Day sales"
      seasonal: "Consider local seasons (Christmas is summer in Australia)"

imagery_and_visual_adaptation:
  photography:
    people:
      represent_target_demographic: "Use local models when possible"
      diversity: "Reflect local population diversity"
      clothing: "Culturally appropriate dress"
      gestures: "Avoid offensive hand gestures"
      activities: "Culturally relevant contexts"

    settings:
      architecture: "Local building styles and landmarks"
      environments: "Climate and geography appropriate"
      interior_design: "Cultural aesthetic preferences"

  iconography:
    universal_icons: "Use international symbols when possible"
    localize_when_needed:
      mailbox: "Different styles (US rural mailbox vs European wall-mounted)"
      home: "House style varies by region"
      food: "Culturally appropriate dishes"

    culturally_specific:
      - icon: "Calendar"
        adaptation: "Week starts Sunday (US) vs Monday (Europe)"
      - icon: "Currency"
        adaptation: "Local currency symbol"

  color_preferences:
    western: "Minimalist, cool tones often preferred"
    asian: "Brighter colors, red often prominent"
    middle_eastern: "Rich, warm colors valued"

messaging_and_value_propositions:
  benefit_framing:
    individualistic_markets:
      emphasis: "Personal benefits, self-improvement, uniqueness"
      example: "Stand out with your custom dashboard"

    collectivistic_markets:
      emphasis: "Group harmony, family benefits, fitting in"
      example: "Join millions of satisfied users worldwide"

  trust_building:
    western_markets:
      - "Testimonials and reviews"
      - "Transparent pricing"
      - "Money-back guarantees"

    asian_markets:
      - "Longevity and tradition"
      - "Prestigious partnerships"
      - "Celebrity/expert endorsements"

  urgency_and_persuasion:
    western_direct:
      - "Limited time offer!"
      - "Buy now"
      - "Don't miss out"

    asian_indirect:
      - "Special opportunity available"
      - "We invite you to consider"
      - "Many customers appreciate..."

legal_and_regulatory:
  data_privacy:
    gdpr_regions:
      - "Explicit consent required"
      - "Clear privacy policy"
      - "Right to deletion prominent"

    ccpa_california:
      - "Do not sell my info option"
      - "California-specific disclosures"

    china_requirements:
      - "Local data storage"
      - "Government compliance statements"

  age_restrictions:
    alcohol: "21+ (US), 18+ (UK), 20+ (Japan)"
    gambling: "Varies widely by jurisdiction"
    content_rating: "Different standards globally"

  advertising_regulations:
    health_claims: "Very strict in EU, more lenient in US"
    comparative_advertising: "Legal in US, restricted in some Asian markets"
    endorsements: "Disclosure requirements vary"

quality_assurance:
  native_speaker_review:
    essential: "All localized content reviewed by native speakers"
    context: "Reviewers need full context, not just strings"
    local_expertise: "Preferably in-market reviewers who understand local culture"

  cultural_consultant:
    when_needed: "Significant cultural distance, sensitive content, major campaigns"
    expertise: "Cultural norms, taboos, current events"

  ab_testing:
    test_variations: "Test culturally adapted versions in market"
    metrics: "Engagement, conversion, sentiment"
    iterate: "Refine based on local market response"
```

=== EXAMPLES ===

**Example 1: SaaS Product Marketing Page - US to Japan**
- content_type: "product marketing landing page"
- source_culture: "United States (low-context, individualistic, informal)"
- target_culture: "Japan (high-context, collectivistic, formal)"
- adaptation_level: "heavy localization"

**US Source Content**:
```
Headline: "Supercharge Your Productivity"
Subheadline: "Join 50,000+ power users who've transformed their workflow"
Body: "Stop wasting time on manual tasks. Our AI-powered automation gives you back 10 hours per week. Try it free—no credit card required!"
CTA: "Start Your Free Trial"
```

**Japanese Adapted Content**:
```
Headline: "業務効率化のための信頼できるソリューション" (Reliable solution for business efficiency)
Subheadline: "50,000社以上の企業様にご信頼いただいています" (Trusted by over 50,000 companies)
Body: "AI技術を活用した自動化により、業務時間を週10時間削減することが可能です。まずは無料でお試しいただけます。" (Through AI-powered automation, it's possible to reduce work time by 10 hours per week. Please try it free first.)
CTA: "無料トライアルのお申し込み" (Apply for free trial)
```

**Adaptation Rationale**:
```yaml
changes_made:
  - element: "Headline"
    from: "Supercharge (aggressive, energetic)"
    to: "Reliable solution (trustworthy, established)"
    reason: "Japanese business culture values reliability over flashy claims"

  - element: "Social proof"
    from: "power users (individual achievement)"
    to: "companies (organizational trust)"
    reason: "Collectivistic culture values organizational endorsement"

  - element: "Tone"
    from: "Command form 'Stop wasting'"
    to: "Polite possibility '可能です' (it's possible)"
    reason: "Japanese prefers indirect, polite communication"

  - element: "CTA"
    from: "Start Your Free Trial (direct command)"
    to: "Apply for free trial (humble request form)"
    reason: "Respectful, formal phrasing expected in Japanese business context"

  - element: "Credit card mention"
    from: "no credit card required"
    to: "Removed"
    reason: "Less emphasis on this point; trust built differently in Japan"
```

**Example 2: Healthcare App - US English to Arabic (Middle East)**
- content_type: "health tracking app interface"
- source_culture: "United States"
- target_culture: "Saudi Arabia, UAE"
- adaptation_level: "heavy localization + RTL"

**US Source Content**:
```
Screen: Meal Tracking
Heading: "Log Your Meals"
Description: "Track what you eat to reach your health goals"
Example meal: "Breakfast: Bacon and eggs, orange juice, coffee"
Motivational message: "You're on fire! 7-day streak!"
```

**Arabic Adapted Content**:
```
Screen: تسجيل الوجبات (Meal Logging)
Heading: "سجل وجباتك" (Log your meals)
Description: "تتبع ما تتناوله للوصول إلى أهدافك الصحية" (Track what you consume to reach your health goals)
Example meal: "الإفطار: لبنة، زيتون، خبز، شاي" (Breakfast: labneh, olives, bread, tea)
Motivational message: "ممتاز! واصل المحافظة على عاداتك الصحية لمدة ٧ أيام" (Excellent! Continue maintaining your healthy habits for 7 days)
```

**Adaptation Rationale**:
```yaml
changes_made:
  - element: "Example meal"
    from: "Bacon and eggs (pork product)"
    to: "Labneh, olives, bread (typical Middle Eastern breakfast)"
    reason: "Pork forbidden in Islam, use culturally appropriate food"

  - element: "Motivational message"
    from: "'On fire' (aggressive metaphor)"
    to: "Excellent, continue maintaining (encouraging, respectful)"
    reason: "Tone should be encouraging but not overly casual"

  - element: "Layout"
    from: "Left-to-right text flow"
    to: "Right-to-left text flow"
    reason: "Arabic is RTL language"

  - element: "Numbers"
    from: "7-day streak"
    to: "٧ أيام (Arabic numerals)"
    reason: "Use Eastern Arabic numerals (optional, context-dependent)"

cultural_sensitivities_addressed:
  - "Removed alcohol references (orange juice cocktail → just orange juice)"
  - "Gender-neutral language important for mixed user base"
  - "Ramadan awareness: fasting tracking feature prominent during Ramadan"
  - "Prayer times: option to set meal times around prayer schedule"
```

**Example 3: E-learning Platform - British English to Brazilian Portuguese**
- content_type: "online course platform"
- source_culture: "United Kingdom"
- target_culture: "Brazil"
- adaptation_level: "moderate localization"

**UK Source Content**:
```
Course: "Business Writing Skills"
Description: "Master professional communication for the workplace"
Module 1: "Email Etiquette"
- "Formal vs Informal tone"
- "Appropriate greetings: Dear Sir/Madam"
- "British spelling: organisation, colour, analyse"
Example: "Writing to your manager about a bank holiday request"
```

**Brazilian Portuguese Adapted Content**:
```
Course: "Habilidades de Comunicação Profissional" (Professional Communication Skills)
Description: "Domine a comunicação profissional no ambiente de trabalho"
Module 1: "Comunicação por E-mail" (Email Communication)
- "Tom formal e informal"
- "Saudações apropriadas: Prezado(a), Caro(a)"
- "Pronomes de tratamento: você vs senhor(a)"
Example: "Escrevendo para seu gestor sobre férias ou folga" (Writing to your manager about vacation or time off)
```

**Adaptation Rationale**:
```yaml
changes_made:
  - element: "Course title"
    from: "Business Writing"
    to: "Professional Communication (broader)"
    reason: "Brazilian market prefers broader skills framing"

  - element: "Greetings"
    from: "Dear Sir/Madam (very formal British)"
    to: "Prezado(a), Caro(a) (appropriate Brazilian formality)"
    reason: "Brazilian business culture has different formality norms"

  - element: "Pronoun usage"
    added: "você vs senhor(a) distinction"
    reason: "Critical in Brazilian Portuguese, not relevant in English"

  - element: "Example scenario"
    from: "bank holiday (British term)"
    to: "vacation or time off (clearer for Brazilian context)"
    reason: "Bank holiday is UK-specific concept"

  - element: "Spelling"
    from: "British spelling rules"
    to: "Brazilian Portuguese spelling (per language reform)"
    reason: "Brazilian Portuguese differs from European Portuguese"

  - element: "Tone"
    overall: "Slightly warmer, more personal in Brazilian version"
    reason: "Brazilian culture is generally warmer and more relational than British"
```

---

**Accessibility Requirements**: Cultural adaptation must maintain or improve accessibility. Ensure adapted content meets WCAG 3.0 Level AA in target language. Consider cultural differences in disability perception and support. Adapt examples to be culturally relevant without sacrificing clarity. Maintain plain language principles in target culture's context. Test with native speakers including users with disabilities. Respect target culture's preferences for directness, formality, and communication style while maintaining accessibility.

**Psychological Principles**: Cultural schema theory guides adaptation strategies. In-group favoritism increases trust in localized content. Uncertainty avoidance influences need for detail. Power distance affects tone and authority references. Cultural dimensions shape persuasion effectiveness (Hofstede). Context-dependent communication varies by culture (Hall). Localization increases processing fluency and trust.

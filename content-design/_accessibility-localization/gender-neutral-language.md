## Gender-Neutral Language Framework v1.0

**Purpose**: Design inclusive, gender-neutral content that respects all users regardless of gender identity, avoiding assumptions and binary language while maintaining clarity and natural flow across diverse languages.

---

**PROMPT:**

You are a gender-inclusive content specialist designing {{content_type}} for {{audience}} in {{language_context}}.

=== CONTENT CONTEXT ===
Content type: {{content_type}}
Language: {{language}}
Grammatical gender: {{grammatical_gender}} (yes/no/partial)
Audience: {{audience}}
Tone: {{tone}}
Formality: {{formality}}

=== INCLUSIVITY REQUIREMENTS ===
Gender representation: {{gender_representation}} (user profiles/forms/general content)
Pronoun handling: {{pronoun_handling}}
Title usage: {{title_usage}}
Identity options: {{identity_options}}
Cultural sensitivity: {{cultural_sensitivity}}

=== TECHNICAL CONSTRAINTS ===
Platform: {{platform}}
Personalization capability: {{personalization_capability}}
User preference settings: {{user_preference_settings}}
Database fields: {{database_fields}}
Legacy content: {{legacy_content}}

=== OUTPUT REQUIREMENTS ===

Generate gender-neutral content guidelines:

```yaml
gender_neutral_principles:
  avoid_assumptions:
    principle: "Never assume user's gender from any data point"
    examples_to_avoid:
      - "Assuming gender from name (Alex, Sam, Jordan are gender-neutral)"
      - "Assuming gender from purchase history"
      - "Assuming gender from job title (nurse, engineer)"
      - "Assuming binary gender options only"

  use_neutral_language:
    principle: "Default to gender-neutral terms and constructions"
    benefits:
      - "Inclusive of all gender identities"
      - "Simpler for internationalization"
      - "Professional and modern"
      - "Avoids making anyone feel excluded"

  allow_self_identification:
    principle: "Let users choose their own pronouns and titles"
    implementation:
      - "Pronouns optional, never required"
      - "Provide inclusive options"
      - "Allow custom/write-in options"
      - "Respect user's choice in all communications"

pronoun_strategies:
  english_pronouns:
    binary:
      masculine: "he/him/his"
      feminine: "she/her/hers"

    non_binary:
      singular_they: "they/them/theirs (singular)"
      neopronouns: "ze/hir, xe/xem, etc."

    neutral_alternatives:
      second_person: "you/your (avoid third person)"
      plural_they: "they/them (when referring to any user)"
      no_pronoun: "Rewrite to avoid pronoun entirely"

  avoiding_third_person:
    instead_of: "He should update his profile"
    use: "You should update your profile"
    benefit: "Direct, clear, inclusive"

    instead_of: "Each user should check his or her email"
    use: "Check your email" or "All users should check their email"

  singular_they:
    usage: "Standard English pronoun for unknown or non-binary gender"
    examples:
      - "The user should update their password"
      - "If someone calls, tell them I'll be back soon"
      - "Each customer can choose their delivery method"

    note: "Grammatically correct, widely accepted, AP and Chicago style guides approve"

  pronoun_preference_field:
    options:
      - "she/her"
      - "he/him"
      - "they/them"
      - "Prefer not to say"
      - "Custom (text field)"

    implementation:
      make_optional: "Never required field"
      respect_choice: "Use selected pronoun throughout system"
      allow_changes: "Users can update anytime"

titles_and_honorifics:
  traditional_titles:
    gendered:
      - "Mr. (masculine)"
      - "Mrs. (married feminine)"
      - "Miss (unmarried feminine)"
      - "Ms. (feminine, marital status neutral)"

    neutral:
      - "Mx. (gender-neutral title, pronounced 'mix')"
      - "No title / None"

  avoiding_titles:
    strategy: "Omit titles when possible"
    examples:
      instead_of: "Dear Mr. Smith"
      use: "Dear Alex Smith" or "Hello, Alex"

    when_needed: "Allow user to select or specify title"

  international_considerations:
    some_languages: "Titles mandatory in formal contexts (French, German)"
    approach: "Provide neutral options like 'Mx.' or equivalent"

gender_neutral_job_titles:
  replace_gendered_terms:
    outdated: "businessman"
    neutral: "business person, executive, professional"

    outdated: "chairman"
    neutral: "chairperson, chair"

    outdated: "policeman, policewoman"
    neutral: "police officer"

    outdated: "fireman"
    neutral: "firefighter"

    outdated: "stewardess"
    neutral: "flight attendant"

    outdated: "waitress, waiter"
    neutral: "server"

    outdated: "actress"
    neutral: "actor (inclusive term)"

    outdated: "salesman"
    neutral: "sales representative, salesperson"

  academic_professional:
    outdated: "freshman"
    neutral: "first-year student"

    outdated: "upperclassman"
    neutral: "upper-level student"

    outdated: "man-hours"
    neutral: "work hours, labor hours"

    outdated: "manpower"
    neutral: "workforce, staffing, personnel"

form_design:
  gender_field:
    avoid: "Binary male/female only"

    inclusive_options:
      - "Female"
      - "Male"
      - "Non-binary"
      - "Prefer not to say"
      - "Prefer to self-describe: [text field]"

    best_practice:
      make_optional: "Only ask if truly necessary"
      explain_why: "We ask this to... [reason]"
      allow_skip: "Prefer not to say option always available"

    example_explanation:
      healthcare: "We ask for your gender to provide appropriate healthcare recommendations"
      demographics: "This optional information helps us understand our community"

  name_fields:
    single_field:
      label: "Full name" or "Name"
      avoid: "First name / Last name (not universal structure)"
      benefit: "Works globally, user controls format"

    avoid_assumptions:
      not: "Mr./Ms./Mrs. dropdown"
      use: "Optional title with inclusive options"

  salutations:
    email_greeting:
      instead_of: "Dear Sir or Madam"
      use: "Hello" or "Dear [Name]" or "Dear Customer"

    instead_of: "Ladies and Gentlemen"
    use: "Everyone, Team, Colleagues, Guests, Attendees"

grammatical_gender_languages:
  romance_languages:
    challenge: "French, Spanish, Italian have grammatical gender"

    spanish_strategies:
      traditional: "Todos (masculine plural includes all)"
      neutral_approaches:
        - "Tod@s (@ symbol, written only)"
        - "Todxs (x symbol, inclusive)"
        - "Todes (gender-neutral 'e' ending)"

      recommendations:
        - "Use inclusive plural when possible"
        - "Restructure to avoid gendered terms"
        - "Follow target market conventions"

    french_strategies:
      traditional: "Tous (masculine default)"
      neutral_approaches:
        - "Tou·te·s (midpoint notation)"
        - "Tous et toutes (both forms explicitly)"
        - "Restructure: 'L'équipe' instead of 'Les employés'"

      job_titles:
        - "Masculine form: le professeur"
        - "Feminine form: la professeure"
        - "Neutral approach: 'corps professoral' (teaching body)"

  german_strategies:
    traditional: "Generic masculine (der Nutzer)"

    neutral_approaches:
      gender_star: "Nutzer*innen (includes all genders)"
      gender_colon: "Nutzer:innen"
      gender_underscore: "Nutzer_innen"
      both_forms: "Nutzerinnen und Nutzer"
      neutral_restructure: "Nutzende (participants), die Nutzenden"

    official_guidance:
      varies: "Government, academia, business have different standards"
      research: "Check target audience's accepted practices"

english_best_practices:
  collective_nouns:
    instead_of: "guys (masculine)"
    use: "everyone, folks, team, people, y'all"

    instead_of: "you guys"
    use: "all of you, everyone, you all"

  relationship_neutral:
    instead_of: "husband/wife"
    neutral: "spouse, partner"

    instead_of: "boyfriend/girlfriend"
    neutral: "partner, significant other"

    instead_of: "mother/father"
    neutral: "parent"

    instead_of: "brother/sister"
    neutral: "sibling"

  person_first_language:
    instead_of: "the elderly"
    use: "older adults, seniors"

    instead_of: "ladies, gals"
    use: "women (when gender known), people (when mixed/unknown)"

  avoid_gendered_metaphors:
    instead_of: "man up, grow a pair"
    use: "be brave, be strong, step up"

    instead_of: "throws like a girl"
    use: "needs practice throwing"

content_patterns:
  user_profiles:
    bio_section:
      allow: "Users to write their own bio with pronouns if they choose"
      example: "Alex (they/them) is a software engineer based in Portland"

    about_section:
      avoid: "Assuming family structure (husband, wife, children)"
      use: "Partner, family, household"

  marketing_content:
    customer_references:
      instead_of: "Every user should... he..."
      use: "Every user should... they..." or "Users should... [plural]"

    testimonials:
      include: "Diverse names, pronouns if provided by source"
      balance: "Representation across gender spectrum"

  email_templates:
    greeting:
      generic: "Hello [Name]"
      group: "Hello everyone, Hello team"
      avoid: "Dear Sir/Madam, Ladies and Gentlemen"

    sign_off:
      neutral: "Best regards, Sincerely, Thank you"
      avoid: "Yours truly (can feel gendered in some contexts)"

  notifications:
    instead_of: "John has updated his profile"
    use: "John has updated their profile"
    or: "[Name] updated profile" (restructure to avoid pronoun)

  help_documentation:
    examples:
      use_varied_names:
        - "Jordan (neutral)"
        - "Sam (neutral)"
        - "Taylor (neutral)"
      or: "Mix clearly gendered names to show diversity"

    screenshots:
      include: "Diverse representation in example users"

accessibility_and_internationalization:
  screen_readers:
    consideration: "Gender-neutral language often more concise, clearer for AT"
    benefit: "Simpler sentence structure aids comprehension"

  translation:
    benefit: "Singular 'they' simplifies translation"
    challenge: "Some languages lack established neutral forms"
    approach: "Work with native speakers to find best inclusive approach"

  cultural_sensitivity:
    research: "Gender inclusivity acceptance varies by culture"
    balance: "Respect local norms while promoting inclusivity"
    progressive: "Many markets moving toward more inclusive language"

implementation_guidelines:
  content_audit:
    review_existing:
      - "Search for gendered pronouns (he, she, his, her)"
      - "Find gendered job titles (chairman, waitress)"
      - "Identify binary gender assumptions"

    prioritize_changes:
      - "High-visibility content first (homepage, main flows)"
      - "Forms and user-facing fields"
      - "Email templates"
      - "Help documentation"

  style_guide_updates:
    document_standards:
      - "Use singular 'they' as default"
      - "List approved gender-neutral job titles"
      - "Provide inclusive pronoun options"
      - "Give examples of neutral restructuring"

  training:
    educate_team:
      - "Why gender-neutral language matters"
      - "How to write inclusively"
      - "Language is evolving, stay current"

  user_testing:
    include_diverse_users:
      - "Test with non-binary, trans, and gender-diverse users"
      - "Ask if language feels inclusive and respectful"
      - "Iterate based on feedback"
```

=== EXAMPLES ===

**Example 1: User Registration Form**
- content_type: "registration form"
- language: "English"
- audience: "general public, all genders"

**Before (Gendered)**:
```
Title: [Mr. / Mrs. / Miss dropdown]
First Name: _______
Last Name: _______
Gender: ○ Male  ○ Female

Welcome email: "Dear Mr./Mrs. [Name], we're glad to have you..."
```

**After (Gender-Neutral)**:
```
Title (optional): [None / Mr. / Ms. / Mx. / Dr. / Prefer to self-describe: ___]
Name: _______
Pronouns (optional): [she/her / he/him / they/them / Prefer not to say / Custom: ___]
Help text: "We use this to address you correctly in our communications"

Gender (optional):
Why we ask: This helps us understand our community and improve our service
○ Woman
○ Man
○ Non-binary
○ Prefer to self-describe: ___________
○ Prefer not to say

Welcome email: "Hello [Name], we're glad to have you..."
or "Welcome, [Name]! We're excited you've joined..."
```

**Rationale**:
- Removed required binary gender field
- Made all identity fields optional
- Added Mx. title option
- Included pronoun selection
- Gender-neutral email greeting
- Explained why information is collected

**Example 2: E-commerce Product Descriptions**
- content_type: "product marketing copy"
- product: "professional clothing"
- audience: "all genders"

**Before (Gendered Assumptions)**:
```
Product: Professional Blazer

Description:
Every professional woman needs a great blazer in her wardrobe. This elegant piece is perfect for the modern businesswoman who wants to look her best at the office. Whether you're meeting clients or leading the boardroom, this blazer will make you feel confident and feminine.

Sizing: Women's sizes 2-16
Model: Sarah, 5'8", wearing size 6
```

**After (Gender-Neutral)**:
```
Product: Professional Blazer

Description:
Every professional needs a great blazer in their wardrobe. This elegant piece is perfect for the modern professional who wants to look their best at the office. Whether you're meeting clients or leading presentations, this blazer will make you feel confident and polished.

Sizing: Sizes XS-XXL (see size chart)
Size chart includes: Bust, waist, hip, and length measurements

Model: Alex, 5'8", wearing size M
```

**Rationale**:
- Changed "woman" → "professional" (job-focused, not gender-focused)
- Changed "her" → "their" (singular they)
- Removed "feminine" (subjective, gendered)
- Changed "Women's sizes 2-16" → "Sizes XS-XXL" (standard sizing)
- Measurements provided for accurate fit regardless of gender
- Gender-neutral model name example

**Example 3: Healthcare Platform - Multilingual**
- content_type: "healthcare intake form and communications"
- languages: "English, Spanish, French"
- audience: "patients, must be inclusive"

**English Version**:
```yaml
form_fields:
  legal_name: "Legal name (as appears on insurance)"
  preferred_name: "Preferred name (what we should call you)"
  pronouns: "Pronouns (optional): [she/her / he/him / they/them / other: ___]"

  sex_assigned_at_birth:
    label: "Sex assigned at birth"
    explanation: "This medical information helps us provide appropriate care"
    options: ["Female", "Male", "Intersex", "Prefer not to say"]

  gender_identity:
    label: "Gender identity (optional)"
    explanation: "We ask this to provide respectful, personalized care"
    options:
      - "Woman"
      - "Man"
      - "Non-binary"
      - "Transgender woman"
      - "Transgender man"
      - "Gender fluid"
      - "Agender"
      - "Prefer to self-describe: ___"
      - "Prefer not to say"

communications:
  email_greeting: "Hello [Preferred Name],"
  appointment_reminder: "Your appointment is tomorrow at 2 PM. If you need to reschedule, please call us."
  (avoids "he/she should call")
```

**Spanish Version (Inclusive Approach)**:
```yaml
communications:
  traditional_approach: "Su cita es mañana..." (formal you, gender-neutral)
  inclusive: "Hola [Nombre Preferido],"

  explanation:
    spanish_you: "Spanish 'usted/tú' is gender-neutral (no he/she distinction)"
    benefit: "Easier to write inclusively than English in some ways"
    challenge: "Job titles, some nouns still gendered"

  job_titles_inclusive:
    traditional: "doctor (masculine), doctora (feminine)"
    neutral: "personal médico (medical personnel)"

    traditional: "enfermero/enfermera (nurse)"
    neutral: "personal de enfermería (nursing staff)"
```

**French Version (Inclusive Writing)**:
```yaml
communications:
  traditional: "Cher Monsieur / Chère Madame"
  inclusive: "Bonjour [Prénom]"

  appointment_reminder:
    traditional: "Votre rendez-vous est demain. Si vous ne pouvez pas venir, appelez-nous."
    note: "French 'vous' is gender-neutral (formal you)"

  inclusive_writing:
    option_1: "Cher·ère patient·e" (midpoint notation)
    option_2: "Chère patiente, cher patient" (both forms)
    option_3: "Bonjour" (avoid gendered greeting entirely)

    recommendation: "Option 3 simplest and clearest for medical context"
```

---

**Accessibility Requirements**: Gender-neutral language must maintain WCAG 3.0 Level AA compliance. Ensure form labels are clear for screen readers. Use semantic HTML for form fields (never use placeholder as label). Provide clear explanations for why gender/pronoun information is collected. Make identity fields optional when possible. Respect user's chosen pronouns in all system communications. Test with diverse users including transgender and non-binary people. Ensure language doesn't create barriers or cause harm.

**Psychological Principles**: Inclusive language increases sense of belonging (social identity theory). Being seen and respected improves user experience (self-affirmation theory). Respectful language builds trust (reciprocity principle). Assumptions create exclusion (in-group/out-group bias). Allowing self-identification supports autonomy (self-determination theory). Gender-neutral defaults reduce cognitive load (default effect).

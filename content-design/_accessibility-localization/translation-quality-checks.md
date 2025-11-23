## Translation Quality Checks Framework v1.0

**Purpose**: Design comprehensive quality assurance processes for translated content ensuring linguistic accuracy, cultural appropriateness, technical correctness, and consistent user experience across all localized versions.

---

**PROMPT:**

You are a translation quality specialist reviewing {{content_type}} translated from {{source_language}} to {{target_language}} for {{quality_level}}.

=== TRANSLATION CONTEXT ===
Source language: {{source_language}}
Target language: {{target_language}}
Content type: {{content_type}} (UI/marketing/technical/legal/support)
Translation method: {{translation_method}} (human/machine/hybrid)
Quality level: {{quality_level}} (basic/professional/premium/certified)
Volume: {{volume}}

=== QUALITY REQUIREMENTS ===
Accuracy priority: {{accuracy_priority}}
Cultural adaptation: {{cultural_adaptation_level}}
Brand voice consistency: {{brand_voice_consistency}}
Technical terminology: {{technical_terminology}}
Regulatory compliance: {{regulatory_compliance}}

=== REVIEW PROCESS ===
Review stages: {{review_stages}} (translator/reviewer/proofreader/tester)
Native speaker review: {{native_speaker_review}}
In-context review: {{in_context_review}}
User testing: {{user_testing}}
Iteration cycles: {{iteration_cycles}}

=== OUTPUT REQUIREMENTS ===

Generate translation quality assurance framework:

```yaml
quality_dimensions:
  accuracy:
    definition: "Translation conveys same meaning as source"

    criteria:
      - "No omissions (all source content translated)"
      - "No additions (no extra information added)"
      - "Correct interpretation of source meaning"
      - "Appropriate level of detail maintained"
      - "Numbers, dates, measurements accurate"

    common_errors:
      mistranslation: "Wrong meaning conveyed"
      false_friends: "Similar words with different meanings"
      literal_translation: "Word-for-word without adapting"
      context_misunderstanding: "Missing context leads to wrong choice"

  fluency:
    definition: "Translation reads naturally in target language"

    criteria:
      - "Natural grammar and syntax"
      - "Appropriate vocabulary for context"
      - "Idiomatic expressions (not literal translations)"
      - "Proper punctuation and formatting"
      - "No awkward phrasing"

    common_errors:
      source_language_interference: "Translationese (sounds like original language)"
      unnatural_word_order: "Following source structure too closely"
      register_mismatch: "Too formal or too casual"
      poor_word_choice: "Technically correct but unnatural"

  style:
    definition: "Translation matches brand voice and target audience"

    criteria:
      - "Consistent tone throughout"
      - "Appropriate formality level"
      - "Brand voice maintained"
      - "Target audience appropriate"
      - "Cultural adaptation applied"

    common_errors:
      inconsistent_tone: "Switching between formal and casual"
      brand_voice_lost: "Generic translation, no personality"
      audience_mismatch: "Too technical or too simple"

  terminology:
    definition: "Consistent, accurate use of technical and brand terms"

    criteria:
      - "Glossary terms used correctly"
      - "Product names handled per guidelines"
      - "Technical terms consistent"
      - "Industry standard terminology"
      - "No term variation where consistency needed"

    common_errors:
      term_inconsistency: "Same term translated differently"
      not_following_glossary: "Ignoring approved terminology"
      incorrect_product_names: "Translating when should not be"

  locale_conventions:
    definition: "Follows target locale formatting and conventions"

    criteria:
      - "Date format correct (MM/DD vs DD/MM)"
      - "Number format correct (1,234.56 vs 1.234,56)"
      - "Currency symbols and format"
      - "Units of measurement (metric/imperial)"
      - "Address format"
      - "Phone number format"

  cultural_appropriateness:
    definition: "Content is culturally adapted and appropriate"

    criteria:
      - "No cultural taboos violated"
      - "References localized (not source-culture specific)"
      - "Examples relevant to target culture"
      - "Humor adapted (not literal)"
      - "Idioms appropriately handled"

  technical_correctness:
    definition: "Translation works technically in the product"

    criteria:
      - "Character limits respected"
      - "Placeholders maintained correctly ({variable})"
      - "HTML/markup preserved"
      - "Special characters handled"
      - "No broken formatting"

review_process_stages:
  stage_1_translation:
    who: "Professional translator"
    focus: "Accurate, fluent translation from source"

    deliverable: "First draft translation"

    quality_checks:
      - "Complete (no missing segments)"
      - "Glossary terms used"
      - "Variables/placeholders intact"
      - "Overall meaning accurate"

  stage_2_review:
    who: "Second linguist (not original translator)"
    focus: "Accuracy, fluency, style improvements"

    deliverable: "Reviewed translation with changes tracked"

    quality_checks:
      - "Compare to source for accuracy"
      - "Check fluency and naturalness"
      - "Verify terminology consistency"
      - "Suggest style improvements"
      - "Flag ambiguities or errors"

    review_types:
      bilingual_review: "Compare source and target side-by-side"
      monolingual_review: "Read target only, check naturalness"

  stage_3_proofreading:
    who: "Third linguist (proofreader)"
    focus: "Final polish, errors, consistency"

    deliverable: "Proofread translation, final corrections"

    quality_checks:
      - "Grammar and spelling errors"
      - "Punctuation and formatting"
      - "Typos and inconsistencies"
      - "Final terminology check"

  stage_4_in_context_review:
    who: "Linguist with access to actual product/UI"
    focus: "Translation in real context"

    deliverable: "Context review notes, adjustments"

    quality_checks:
      - "Text fits UI (no truncation)"
      - "Makes sense in context"
      - "UI elements labeled correctly"
      - "Terminology consistent across screens"
      - "Cultural appropriateness in situ"

  stage_5_functional_testing:
    who: "QA tester (native speaker)"
    focus: "Product works correctly in target language"

    deliverable: "Test report, bug list"

    quality_checks:
      - "All text displays correctly"
      - "No encoding issues"
      - "Functionality works (buttons, links)"
      - "Error messages appropriate"
      - "Forms validate correctly"

  stage_6_user_acceptance:
    who: "Native speaker end users"
    focus: "Real-world usability and comprehension"

    deliverable: "User feedback, final refinements"

    quality_checks:
      - "Users understand content"
      - "Users can complete tasks"
      - "No confusion or errors"
      - "Feels natural and appropriate"

quality_metrics:
  error_severity:
    critical:
      definition: "Makes content unusable or dangerously incorrect"
      examples:
        - "Incorrect medical dosage"
        - "Reversed meaning (accept/reject swapped)"
        - "Legal liability issue"
        - "Broken functionality"
      action: "Must fix before release"

    major:
      definition: "Significantly impacts user experience or understanding"
      examples:
        - "Incorrect terminology causing confusion"
        - "Unnatural phrasing throughout"
        - "Missing translation segment"
        - "Text truncation hiding critical info"
      action: "Fix before release recommended"

    minor:
      definition: "Noticeable but doesn't prevent use"
      examples:
        - "Slight inconsistency in terminology"
        - "Minor grammar issue"
        - "Formatting inconsistency"
        - "Suboptimal word choice"
      action: "Fix if time allows, or in next update"

    cosmetic:
      definition: "Very minor issue, no real impact"
      examples:
        - "Extra space"
        - "Capitalization preference"
        - "Stylistic preference"
      action: "Optional fix"

  quality_scoring:
    method: "Weighted error count"

    calculation: |
      Quality Score = 100 - (Critical×10 + Major×5 + Minor×1 + Cosmetic×0.1)

    thresholds:
      premium: "95-100 (almost perfect)"
      professional: "85-94 (high quality)"
      acceptable: "70-84 (usable with some issues)"
      unacceptable: "<70 (requires significant rework)"

  sample_size:
    full_review: "100% of critical content (legal, medical, security)"
    large_sample: "20-30% of general content (representative sample)"
    spot_check: "5-10% for maintenance/updates of previously approved content"

automated_qa_tools:
  qa_checks:
    completeness:
      check: "All source segments translated"
      tool: "Translation memory system reports"
      flag: "Empty or untranslated segments"

    consistency:
      check: "Same source translated same way"
      tool: "QA tool consistency check"
      flag: "Inconsistent translations of identical source"

    terminology:
      check: "Glossary terms used correctly"
      tool: "Terminology database verification"
      flag: "Non-approved term variations"

    placeholders:
      check: "Variables maintained: {variable}, %s, ${var}"
      tool: "Regex validation"
      flag: "Missing, extra, or modified placeholders"

    formatting:
      check: "HTML tags, formatting codes intact"
      tool: "Tag validator"
      flag: "Broken tags, missing closing tags"

    numbers_dates:
      check: "Numbers and dates match or appropriately localized"
      tool: "Number pattern matching"
      flag: "Mismatched numbers, wrong date format"

    length_limits:
      check: "Translation within character limits"
      tool: "Length checker"
      flag: "Exceeds maximum length"

    punctuation:
      check: "Proper punctuation for target language"
      tool: "Punctuation rules engine"
      flag: "Wrong punctuation marks (e.g., English quotes in French)"

    spelling_grammar:
      check: "No spelling or grammar errors"
      tool: "LanguageTool, Grammarly, MS Word"
      flag: "Spelling errors, grammar issues"

  limitations:
    cannot_check: "Meaning accuracy, cultural appropriateness, fluency"
    human_review_essential: "Automated tools supplement, don't replace humans"

linguistic_testing:
  comprehension_testing:
    method: "Ask native speakers to explain what content means"
    sample_questions:
      - "What does this error message tell you to do?"
      - "What happens when you click this button?"
      - "Explain this feature in your own words"

    passing_criteria: "90%+ of testers understand correctly"

  task_completion_testing:
    method: "Native speakers complete tasks using localized interface"
    scenarios:
      - "Create an account"
      - "Complete a purchase"
      - "Change settings"
      - "Recover from an error"

    metrics:
      - "Task completion rate"
      - "Time to complete"
      - "Errors made"
      - "Confidence ratings"

  preference_testing:
    method: "A/B test translation variants"
    example: "Test two translations of key CTA button"
    metrics: "Click-through rate, conversion rate, user feedback"

  back_translation:
    method: "Translate back to source, compare"
    use_case: "Critical content verification (medical, legal)"
    process: "Different translator translates target → source"
    check: "Does back-translation match original meaning?"
    limitation: "Not perfect, but reveals major misunderstandings"

common_translation_pitfalls:
  false_friends:
    examples:
      - "embarazada (Spanish) ≠ embarrassed, means pregnant"
      - "gift (German) ≠ gift, means poison"
      - "actual (Spanish) ≠ actual, means current"

    prevention: "Glossary, translator training, review process"

  untranslatable_terms:
    product_names:
      rule: "Usually not translated"
      example: "iPhone, Windows, Chrome (same in all languages)"

    brand_names:
      check: "Trademark guidelines"
      sometimes_adapted: "Coca-Cola (可口可乐 in Chinese - phonetic + meaning)"

  cultural_references:
    sports_metaphors:
      source: "Hit a home run (baseball, US)"
      target: "May need adaptation (football/soccer globally)"

    holidays:
      source: "Black Friday sale"
      target: "Singles' Day in China, other local equivalents"

  text_expansion:
    issue: "Translation longer than source, breaks UI"
    planning: "Design for 30-40% expansion from English"
    solution: "Flexible UI, or alternative shorter translation"

  formality_levels:
    languages_with_formal_informal:
      examples: "German (Sie/du), French (vous/tu), Spanish (usted/tú)"
      decision: "Define in style guide (formal for customer service, informal for social)"

  gendered_language:
    romance_languages: "Nouns and adjectives have gender"
    challenge: "Gender-neutral source may require gender choice in target"
    solution: "Use plural, restructure, or provide gender options"

feedback_integration:
  user_feedback_channels:
    in_app_feedback: "Report translation issue button"
    support_tickets: "Users report confusing or incorrect translations"
    community_forums: "Localization discussions"
    social_media: "Public feedback on poor translations"

  feedback_triage:
    validate: "Is this actually an error or user preference?"
    prioritize: "Severity: critical > major > minor"
    fix: "Update translation files"
    re_test: "Verify fix doesn't introduce new issues"
    release: "Deploy updated translations"

  continuous_improvement:
    glossary_updates: "Add terms based on user confusion"
    style_guide_refinements: "Clarify rules based on errors"
    translator_training: "Share common errors, best practices"

documentation:
  translation_brief:
    essential_info:
      - "Target audience (age, expertise, region)"
      - "Product description and purpose"
      - "Brand voice and tone"
      - "Formality level"
      - "Key terminology and glossary"
      - "Cultural considerations"
      - "Technical constraints (character limits)"

  context_provision:
    screenshots: "Show where text appears in UI"
    annotations: "Highlight the specific string being translated"
    character_limits: "Note maximum length constraints"
    functionality: "Explain what clicking button does"

  style_guide:
    contents:
      - "Formality level (formal/informal address)"
      - "Terminology preferences"
      - "Formatting rules (dates, numbers, currency)"
      - "Punctuation guidelines"
      - "Localization vs translation guidance"
      - "Do's and don'ts"

  glossary:
    structure:
      - "Source term"
      - "Approved translation"
      - "Alternative (not approved)"
      - "Part of speech"
      - "Context/definition"
      - "Example in sentence"

    maintenance: "Update regularly with new terms"
```

=== EXAMPLES ===

**Example 1: SaaS Product UI Translation - English to German**
- source_language: "English (US)"
- target_language: "German (Germany)"
- content_type: "Software UI strings"
- quality_level: "Professional"

**QA Process**:
```yaml
stage_1_translation_review:
  string: "Save changes"
  translation: "Änderungen speichern"

  checks:
    accuracy: "✓ Correct meaning"
    fluency: "✓ Natural German"
    length: "✓ Fits button (19 chars vs 12 source)"
    terminology: "✓ 'Änderungen' consistent with glossary"

stage_2_in_context_review:
  context: "Primary button in settings page"
  ui_screenshot: "Button shows correctly, not truncated"

  issue_found:
    problem: "German text longer, button looks cramped"
    severity: "Minor"
    solution: "Increase button padding or use 'Speichern' (save) only"
    decision: "Adjust button width to accommodate"

stage_3_functional_test:
  test_scenario: "User clicks 'Änderungen speichern' button"
  expected: "Settings saved, confirmation message shown"
  actual: "✓ Works correctly"

  confirmation_message:
    german: "Einstellungen gespeichert"
    check: "✓ Uses correct word for 'settings' (Einstellungen not Einstellungen)"

quality_score:
  total_strings: 500
  errors_found:
    critical: 0
    major: 2
    minor: 15
    cosmetic: 8

  calculation: "100 - (0×10 + 2×5 + 15×1 + 8×0.1) = 74.2"
  rating: "Acceptable (requires fixes before release)"

  action_plan:
    - "Fix 2 major errors (wrong terminology, missing translation)"
    - "Fix 15 minor errors if time allows"
    - "Cosmetic errors can be addressed in future update"
```

**Example 2: Marketing Content - English to Japanese**
- source_language: "English (US)"
- target_language: "Japanese (Japan)"
- content_type: "Marketing website copy"
- quality_level: "Premium (transcreation)"

**Cultural Adaptation Review**:
```yaml
source_content: |
  "Get started in minutes!
  No credit card required.
  Join 10,000+ happy customers who've transformed their workflow."

initial_translation: |
  "数分で開始できます！
  クレジットカードは不要です。
  ワークフローを変革した10,000人以上の満足した顧客に参加してください。"

review_feedback:
  issue_1:
    problem: "Exclamation marks feel too aggressive for Japanese business context"
    severity: "Major (cultural inappropriateness)"
    recommendation: "Use periods, soften tone"

  issue_2:
    problem: "'Join 10,000+ customers' sounds like recruiting, not inviting"
    severity: "Major (cultural adaptation needed)"
    recommendation: "Emphasize trust/social proof differently"

  issue_3:
    problem: "Direct translation of 'happy customers' sounds unnatural"
    severity: "Minor (fluency)"
    recommendation: "Use more natural Japanese expression"

revised_translation: |
  "数分で開始できます。
  クレジットカード不要。
  10,000社以上の企業様にご信頼いただいています。"

back_translation: |
  "You can start in a few minutes.
  No credit card needed.
  Trusted by over 10,000 companies."

comparison:
  tone_shift: "More reserved, professional (appropriate for Japanese B2B)"
  social_proof: "Changed to 'trusted by' (信頼) rather than 'join'"
  formality: "Added respectful language (企業様 - honored companies)"

quality_assessment:
  accuracy: "8/10 (meaning adapted, not literal)"
  cultural_fit: "10/10 (excellent adaptation)"
  brand_voice: "9/10 (maintains trustworthy, professional tone)"
  conversion_potential: "High (native reviewers rate highly)"
```

**Example 3: Legal Terms & Conditions - English to Spanish (Latin America)**
- source_language: "English (US)"
- target_language: "Spanish (Latin America)"
- content_type: "Legal document"
- quality_level: "Certified (legal accuracy critical)"

**Quality Process**:
```yaml
stage_1_specialized_translator:
  requirement: "Legal translator with certification"
  glossary: "Legal terminology database"

  sample_term:
    source: "indemnify"
    translation: "indemnizar"
    not: "compensar (wrong legal term)"
    context: "Hold harmless clause"

stage_2_legal_review:
  reviewer: "Bilingual lawyer"

  checks:
    - "Legal concepts translated correctly"
    - "No liability gaps created in translation"
    - "Jurisdiction-specific terms adapted"
    - "Matches legal writing style in target language"

stage_3_back_translation:
  process: "Different legal translator translates Spanish → English"
  compare: "Does back-translation match original legal intent?"

  example:
    original: "This agreement shall be governed by the laws of California"
    translation: "Este acuerdo se regirá por las leyes de California"
    back_translation: "This agreement will be governed by the laws of California"
    assessment: "✓ Legal meaning preserved"

stage_4_certification:
  certifier: "Certified legal translator"
  statement: "I certify that this is a true and accurate translation..."
  signature: "Required for legal validity"

quality_metrics:
  error_tolerance: "Zero critical errors acceptable"
  accuracy_requirement: "100% for legal operative language"
  review_cycles: "Minimum 3 (translator, legal reviewer, certifier)"

issues_found:
  critical: 0
  major: 0
  minor: 3

  minor_issues:
    - "Formatting inconsistency in section numbering"
    - "One term translated two ways (standardize)"
    - "Capitalization inconsistency in defined terms"

  resolution: "All issues fixed before finalization"
```

**Example 4: Mobile App - Continuous Localization QA**
- content_type: "Mobile app updates"
- languages: "15 languages"
- update_frequency: "Bi-weekly releases"
- approach: "Continuous localization with automated QA"

**Automated QA Pipeline**:
```yaml
step_1_extraction:
  process: "Extract new/changed strings from code"
  tool: "Localization platform (Crowdin, Phrase, etc.)"
  output: "New strings sent to translation"

step_2_automated_checks:
  pre_translation:
    - "Check for hardcoded strings that should be externalized"
    - "Validate placeholder syntax"
    - "Flag strings with no context"

step_3_translation:
  method: "Human translators + TM + MT suggestions"
  turnaround: "24-48 hours"

step_4_automated_qa:
  checks_run:
    - name: "Placeholder integrity"
      result: "✓ All {placeholders} intact"

    - name: "Length limits"
      result: "⚠️ 3 strings exceed limit in German"
      action: "Flagged for review"

    - name: "Terminology consistency"
      result: "⚠️ 'login' translated 2 ways in Spanish"
      action: "Standardize to glossary term"

    - name: "Formatting codes"
      result: "✓ All <b>, \n preserved"

    - name: "Spelling and grammar"
      result: "✓ No errors detected"

step_5_human_review:
  trigger: "Automated QA finds issues OR new feature (high priority)"

  sample_review:
    - "German strings that exceed length limit"
    - "New feature strings (full linguistic review)"
    - "Random 10% sample of regular updates"

step_6_in_app_testing:
  method: "Deploy to staging environment"
  testers: "Native speaker QA testers (1 per language)"

  test_cases:
    - "Visual check: all text displays correctly"
    - "Functional: buttons work, errors show"
    - "Smoke test: complete key user flows"

  results_dashboard:
    languages_passed: 14
    issues_found:
      spanish: "Minor: one button label truncated"
      japanese: "Major: error message missing"

    resolution:
      spanish: "Shorter translation provided"
      japanese: "Missing string added, re-translated"

step_7_release:
  condition: "All critical and major issues resolved"
  timeline: "Same as English release (no delay)"
```

---

**Accessibility Requirements**: Translation quality must maintain or improve accessibility compliance. Ensure translated text maintains WCAG 2.1 Level AA compliance. Screen reader announcements should be natural in target language. Maintain proper semantic HTML structure. Test with localized assistive technologies. Ensure translated alt text is descriptive and appropriate. Verify keyboard navigation labels are clear. Check that error messages are actionable in target language.

**Psychological Principles**: Quality translation builds trust (reciprocity principle). Natural language reduces cognitive load (processing fluency). Cultural appropriateness increases acceptance (in-group favoritism). Consistency aids comprehension (schema congruence). Error-free content signals professionalism (halo effect). Clear communication reduces friction (cognitive ease).

## Plain Language Simplification Framework v1.0

**Purpose**: Transform complex, technical, or jargon-heavy content into clear, accessible plain language that serves diverse audiences including users with cognitive disabilities, low literacy, and non-native speakers.

---

**PROMPT:**

You are a plain language specialist simplifying {{content_type}} for {{target_audience}} at {{reading_level}} reading comprehension level.

=== CONTENT ANALYSIS ===
Content type: {{content_type}} (legal/technical/medical/financial/academic)
Current reading level: {{current_reading_level}} (Flesch-Kincaid grade)
Target reading level: {{target_reading_level}} (typically grade 6-8)
Word count: {{word_count}}
Domain complexity: {{domain_complexity}}
Must-retain terminology: {{must_retain_terms}}

=== AUDIENCE REQUIREMENTS ===
Primary audience: {{primary_audience}}
Reading comprehension: {{reading_comprehension}} (low/average/high)
Cognitive considerations: {{cognitive_considerations}} (ADHD/dyslexia/autism/dementia/general)
Language proficiency: {{language_proficiency}} (native/ESL/ELL)
Age range: {{age_range}}
Prior knowledge: {{prior_knowledge}}
Context of use: {{usage_context}} (crisis/learning/compliance/informational)

=== SIMPLIFICATION GOALS ===
Primary purpose: {{primary_purpose}}
Information priority: {{information_priority}}
Action required: {{action_required}}
Tone: {{tone}} (formal/conversational/empathetic/instructional)
Accessibility level: {{accessibility_level}} (WCAG 3.0 Level AAA guideline 3.1.5)

=== OUTPUT REQUIREMENTS ===

Generate plain language content with comprehensive analysis:

```yaml
readability_analysis:
  original_metrics:
    flesch_kincaid_grade: "number"
    flesch_reading_ease: "0-100 score"
    average_sentence_length: "words"
    average_word_length: "syllables"
    passive_voice_percentage: "percentage"
    jargon_count: "number of technical terms"

  target_metrics:
    flesch_kincaid_grade: "6-8 for general public"
    flesch_reading_ease: "60-70 (plain English)"
    average_sentence_length: "15-20 words maximum"
    average_word_length: "1-2 syllables preferred"
    passive_voice_percentage: "< 10%"
    jargon_count: "minimal, all defined"

simplification_strategies:
  vocabulary:
    replace_complex_words:
      - original: "utilize"
        plain: "use"
        rationale: "Simpler synonym, same meaning"

      - original: "terminate"
        plain: "end" or "stop"
        rationale: "Shorter, more common"

      - original: "commence"
        plain: "start" or "begin"
        rationale: "Everyday language"

    handle_necessary_jargon:
      - term: "{{technical_term}}"
        first_use: "{{technical_term}} ({{plain_definition}})"
        subsequent: "{{technical_term}}"
        example: "API (a way for software programs to communicate)"

    prefer_concrete_over_abstract:
      - abstract: "facilitate the acquisition of knowledge"
        concrete: "help you learn"

      - abstract: "in the event that"
        concrete: "if"

  sentence_structure:
    shorten_sentences:
      original: "Complex sentence with multiple clauses that makes it difficult to follow the main idea"
      plain: "Short sentence. One idea per sentence. Easy to follow."
      technique: "Break into multiple sentences"

    active_voice:
      passive: "The form must be completed by users"
      active: "Users must complete the form"
      preference: "Use active voice for clarity and directness"

    positive_phrasing:
      negative: "Do not forget to save your work"
      positive: "Remember to save your work"
      rationale: "Positive framing clearer and more actionable"

    direct_address:
      impersonal: "Users should ensure their passwords are secure"
      personal: "Make sure your password is secure"
      benefit: "Creates connection, improves comprehension"

  organization:
    logical_flow:
      structure: "What → Why → How"
      chunking: "Group related information"
      headings: "Descriptive, question-based headings"
      bullets: "Use for lists (3+ items)"

    front_loading:
      principle: "Most important information first"
      inverted_pyramid: "Key message → supporting details → background"

    visual_hierarchy:
      headings: "Clear, descriptive (not clever)"
      subheadings: "Specific subtopics"
      white_space: "Break up dense text"
      formatting: "Bold for emphasis (sparingly)"

  instructional_content:
    numbered_steps:
      format: "Start each step with action verb"
      length: "One action per step"
      conditional: "Use 'if/then' for branches"

    example_steps:
      step_1: "Click the blue 'Save' button."
      step_2: "Type your email address."
      step_3: "Click 'Submit'."

    warnings_and_tips:
      placement: "Before relevant step"
      format: "⚠️ Important: {{warning}}"
      clarity: "Explain consequence, not just prohibition"

plain_language_content:
  simplified_text: "Complete rewritten version"

  change_log:
    - line_number: "number"
      original: "original text"
      simplified: "simplified text"
      technique: "vocabulary/structure/organization"
      improvement: "readability impact"

  preserved_elements:
    - element_type: "legal term/technical requirement/specific measurement"
      original_text: "exact text preserved"
      justification: "why it cannot be changed"
      context_provided: "explanation added around it"

  definitions_glossary:
    - term: "necessary technical term"
      definition: "plain language explanation"
      example: "concrete example in context"
      reading_level: "grade level of definition"

formatting_recommendations:
  typography:
    font_family: "Sans-serif (Arial, Calibri, Verdana)"
    font_size: "12-14pt minimum"
    line_spacing: "1.5 or greater"
    paragraph_spacing: "Extra space between paragraphs"
    alignment: "Left-aligned (avoid justified)"

  layout:
    column_width: "50-75 characters per line"
    margins: "Generous white space"
    headings: "Clearly distinguished from body text"
    lists: "Bullets or numbers with proper indentation"

  contrast_and_color:
    text_contrast: "4.5:1 minimum (WCAG AA)"
    avoid: "Light gray text, low contrast combinations"
    color_dependency: "Never convey meaning with color alone"

cognitive_accessibility_enhancements:
  wayfinding:
    - page_numbers: "Page X of Y"
    - progress_indicators: "Step 2 of 5"
    - table_of_contents: "For documents > 3 pages"
    - breadcrumbs: "For multi-level navigation"

  comprehension_aids:
    - summaries: "TL;DR or 'What you need to know' boxes"
    - examples: "Real-world scenarios illustrating concepts"
    - visuals: "Diagrams, icons, illustrations supporting text"
    - repetition: "Key information repeated in different formats"

  memory_support:
    - checklists: "For multi-step processes"
    - reference_sheets: "One-page summaries"
    - consistent_terminology: "Same word for same concept throughout"

quality_assurance:
  readability_testing:
    tools: ["Hemingway Editor", "Readable.io", "Microsoft Word readability stats"]
    target_score: "Flesch-Kincaid Grade 6-8"
    manual_review: "Read aloud test"

  user_testing:
    test_with_target_audience: "Especially users with cognitive disabilities"
    comprehension_questions: "Can users find and understand key information?"
    task_completion: "Can users complete intended actions?"

  accessibility_validation:
    wcag_compliance: "3.1.5 Reading Level (AAA) - supplemental content for > grade 9"
    screen_reader_test: "Content makes sense when read aloud"
    no_idioms: "Avoid expressions unclear to non-native speakers"
```

=== PLAIN LANGUAGE PRINCIPLES ===

**1. Use Common Words**
- Choose everyday words over formal alternatives
- Avoid Latin phrases (e.g., "per annum" → "per year")
- Limit words with 3+ syllables

**2. Write Short Sentences**
- Average 15-20 words per sentence
- One main idea per sentence
- Use periods more than commas

**3. Use Active Voice**
- Subject → Verb → Object
- Makes clear who does what
- More engaging and direct

**4. Address the Reader**
- Use "you" and "your"
- Use "we" for your organization
- Avoid third person ("users should...")

**5. Organize Logically**
- Most important information first
- Use headings and lists
- Create visual breaks

=== EXAMPLES ===

**Example 1: Privacy Policy Simplification**
- content_type: "legal document (privacy policy)"
- current_reading_level: "Grade 14 (college level)"
- target_reading_level: "Grade 8"
- target_audience: "general public, all ages and literacy levels"
- must_retain_terms: "GDPR, personal data, cookies (with definitions)"

**Original Text**:
"In accordance with the General Data Protection Regulation (GDPR), we hereby notify all data subjects that their personally identifiable information (PII) may be processed for the purposes of service provision, marketing communications, and analytical assessment. Data subjects have the right to access, rectify, erase, or restrict processing of their personal data, and may exercise these rights by submitting a formal request via the designated channels as stipulated in Article 15 of the GDPR."

**Simplified Text**:
"We collect and use your personal information. This includes your name, email, and how you use our service.

**Why we collect it:**
- To provide our service to you
- To send you updates and offers (only if you agree)
- To improve our service

**Your rights:**
You can ask us to:
- Show you what information we have about you
- Correct wrong information
- Delete your information
- Stop using your information

**How to use your rights:**
Contact us at privacy@company.com or call 1-800-XXX-XXXX.

**Note:** GDPR stands for General Data Protection Regulation. It's a law that protects your privacy."

**Analysis**:
```yaml
readability_analysis:
  original_metrics:
    flesch_kincaid_grade: 14
    flesch_reading_ease: 25
    average_sentence_length: 42
    passive_voice_percentage: 40%

  target_metrics:
    flesch_kincaid_grade: 7.5
    flesch_reading_ease: 65
    average_sentence_length: 12
    passive_voice_percentage: 5%

simplification_strategies:
  - technique: "Break 2 long sentences into 12 shorter sentences"
  - technique: "Replace jargon: 'data subjects' → 'you', 'PII' → 'personal information'"
  - technique: "Convert paragraph to bulleted lists for clarity"
  - technique: "Use active voice: 'we collect' instead of 'may be processed'"
  - technique: "Add concrete examples: 'name, email' instead of just 'personal information'"
  - technique: "Define necessary term: GDPR explained in note"
```

**Example 2: Medical Discharge Instructions**
- content_type: "medical instructions"
- current_reading_level: "Grade 12"
- target_reading_level: "Grade 6"
- target_audience: "patients (varying literacy, post-procedure, potentially stressed)"
- cognitive_considerations: "may be in pain, on medication, anxious"

**Original Text**:
"Postoperative care necessitates adherence to prescribed antibiotic regimen. Administer medication at 8-hour intervals with meals to minimize gastrointestinal distress. Monitor the surgical site for signs of infection including erythema, edema, purulent discharge, or elevated temperature exceeding 101°F. Refrain from submerging the incision in water until sutures are removed during your follow-up appointment scheduled for 10-14 days post-procedure."

**Simplified Text**:
"**Taking your antibiotic:**
1. Take 1 pill every 8 hours
2. Take it with food to avoid upset stomach
3. Set phone reminders: 8am, 4pm, 12am

**Watch your surgical cut for infection:**
Call us if you see:
- Redness spreading from the cut
- Swelling
- Pus or bad-smelling fluid
- Fever over 101°F

**Keeping your cut clean:**
- ✓ Gently wash with soap and water
- ✓ Pat dry with clean towel
- ✗ Don't soak in bath or pool
- ✗ Don't remove the stitches yourself

**Your follow-up visit:**
We'll remove your stitches in 10-14 days.
Our office will call to schedule your appointment.

**Questions or problems?**
Call us: (555) 123-4567
(24 hours a day)"

**Analysis**:
```yaml
simplification_strategies:
  - technique: "Numbered steps for medication schedule"
  - technique: "Specific times instead of '8-hour intervals'"
  - technique: "Plain words: 'cut' instead of 'incision', 'redness' instead of 'erythema'"
  - technique: "Visual checklist (✓/✗) for do's and don'ts"
  - technique: "Concrete examples, not abstract concepts"
  - technique: "Added helpful detail: phone reminders suggestion"
  - technique: "Separated into labeled sections for easy scanning"
  - technique: "Prominent contact information for questions"

cognitive_accessibility:
  - chunking: "Separated into 4 clear sections"
  - visual_cues: "Checkmarks and X marks for quick recognition"
  - memory_aid: "Specific times to set reminders"
  - reduced_anxiety: "Clear guidance on when to call"
```

**Example 3: Software Terms of Service**
- content_type: "legal/technical"
- current_reading_level: "Grade 15"
- target_reading_level: "Grade 8 with supplemental simple version"
- target_audience: "all users, legally binding content"
- must_retain_terms: "legal requirements, exact liability language"

**Original Text**:
"The licensor grants to the licensee a non-exclusive, non-transferable, revocable license to utilize the software in accordance with the terms and conditions set forth herein. Unauthorized reproduction, distribution, or modification of the software constitutes a material breach of this agreement and may result in immediate termination of the license and legal action."

**Simplified Summary (precedes legal text)**:
"**What this means in plain English:**

We're letting you use our software. Here are the rules:

**What you CAN do:**
- Use the software yourself
- Use it for your business

**What you CANNOT do:**
- Give it to others
- Sell it
- Change how it works

**What happens if you break the rules:**
- We'll stop your access to the software
- We might take legal action

**Important:** The full legal terms below are the official agreement. This summary helps you understand them, but the legal version is what counts if there's ever a question."

**Full Legal Terms:**
[Original legal text remains, but with improved formatting and section headings]

**Analysis**:
```yaml
approach:
  strategy: "Dual-layer approach"
  layer_1: "Plain language summary for comprehension"
  layer_2: "Full legal text for enforceability"
  disclaimer: "Explains relationship between summary and legal text"

preserved_elements:
  - element: "Full legal text"
    justification: "Legal enforceability requires precise language"
    accessibility_enhancement: "Plain summary provided first"
    navigation: "Jump links to relevant legal sections from summary"
```

---

**Accessibility Requirements**: Should aim for WCAG 3.0 Success Criterion 3.1.5 Reading Level (AAA) - provide supplemental content or alternative version for text requiring greater than lower secondary education reading ability. Use common words, short sentences, and active voice. Provide definitions for necessary technical terms. Test with readability analyzers (target Flesch-Kincaid Grade 6-8). Validate with actual users, especially those with cognitive disabilities. Comply with Plain Writing Act requirements for government content.

**Psychological Principles**: Cognitive load reduction through simplified syntax (working memory limits). Chunking for better retention (Miller's Law). Familiarity increases processing fluency (processing fluency effect). Active voice clarifies agency (actor-observer bias). Concrete language over abstract improves comprehension (concreteness effect). Redundancy aids learning for diverse abilities (redundancy principle).

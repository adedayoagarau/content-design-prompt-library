## Training Data Guidelines v1.0

**Purpose**: Design comprehensive training data collection, curation, and quality assurance guidelines that ensure AI models learn from high-quality, diverse, representative, and ethically-sourced datasets, resulting in reliable, fair, and performant AI systems across use cases.

**Context**: Use this framework when preparing datasets for fine-tuning LLMs, training custom models, creating evaluation sets, or curating synthetic data for AI systems. Ideal for ML teams building domain-specific models, product teams fine-tuning for specialized tasks, data scientists ensuring dataset quality, or organizations establishing data governance for AI development. Applies to supervised learning, few-shot examples, RLHF data, and retrieval-augmented generation knowledge bases.

**Strategic Frameworks Applied**:
- **Data Quality Dimensions Framework** - Completeness, accuracy, consistency, timeliness, relevance
- **Representativeness & Diversity Architecture** - Ensuring datasets reflect real-world variation and edge cases
- **Bias Detection & Mitigation Protocols** - Systematic identification and correction of dataset biases
- **Annotation Quality Management** - Inter-annotator agreement, quality control, and labeler training
- **Ethical Data Sourcing Framework** - Copyright, consent, privacy, and fair use considerations
- **Dataset Versioning & Provenance** - Traceability, reproducibility, and change management

---

## Variables

Define strategic variables for comprehensive training data guideline development:

### Dataset Purpose Variables
- `{{model_objective}}`: What the model will do (Classification | Generation | Extraction | Reasoning | Conversation | Multi-task)
- `{{target_domain}}`: Subject matter focus (General domain | Specific industry | Technical specialty | Multi-domain)
- `{{performance_requirements}}`: Quality thresholds (Research/experimental | Production-ready | Mission-critical | Safety-critical)
- `{{deployment_scale}}`: Expected usage (Prototype | Internal tool | Product feature | Platform-scale service)
- `{{model_type}}`: Architecture approach (Fine-tuning existing LLM | Training from scratch | Retrieval-augmented | Hybrid)

### Data Source Variables
- `{{primary_sources}}`: Main data origins (User-generated | Expert-created | Public datasets | Synthetic | Web-scraped | Licensed content)
- `{{source_quality}}`: Reliability level (Verified expert content | Curated public data | Unfiltered user content | Mixed quality)
- `{{data_volume_target}}`: Dataset size goals (100s of examples | 1000s | 10,000s | 100,000s+)
- `{{collection_method}}`: Acquisition approach (Manual creation | Automated scraping | Crowdsourcing | Partnerships | Synthetic generation)
- `{{temporal_coverage}}`: Time range (Historical | Current | Real-time | Evergreen)

### Quality & Diversity Variables
- `{{quality_dimensions}}`: What defines quality (Accuracy | Completeness | Clarity | Relevance | Consistency | Recency)
- `{{diversity_requirements}}`: Variation needs (Linguistic diversity | Demographic representation | Edge case coverage | Scenario variety)
- `{{bias_sensitivity}}`: Fairness criticality (Standard | Elevated | Regulated domain | High-stakes decisions)
- `{{edge_case_importance}}`: Tail distribution focus (Focus on common cases | Balance common and rare | Prioritize edge cases)
- `{{annotation_complexity}}`: Labeling difficulty (Simple binary labels | Multi-class | Complex structured annotations | Subjective judgments)

### Annotation & Labeling Variables
- `{{annotator_expertise}}`: Required skill level (Domain experts | Trained annotators | Crowdsourced | Automated)
- `{{annotation_schema}}`: Label structure (Binary | Multi-class | Multi-label | Spans/entities | Structured output | Free-text)
- `{{consensus_requirements}}`: Agreement needs (Single annotator | Majority vote | Full consensus | Adjudication process)
- `{{annotation_budget}}`: Resource constraints (Tight budget | Moderate | Well-funded | Cost not primary concern)
- `{{labeling_velocity}}`: Speed requirements (Rapid iteration | Balanced | Quality-first thoroughness)

### Ethical & Legal Variables
- `{{data_privacy_level}}`: Sensitivity (Public data | Anonymized personal data | Sensitive personal data | Confidential business data)
- `{{copyright_constraints}}`: Legal boundaries (Public domain only | Licensed content | Fair use | Original creation required)
- `{{consent_requirements}}`: Permission needs (No consent needed | Opt-out | Explicit opt-in | Contractual agreement)
- `{{regulatory_framework}}`: Compliance needs (GDPR | CCPA | HIPAA | Industry-specific | Multiple jurisdictions)
- `{{ethical_boundaries}}`: Values alignment (Standard ethical AI practices | Enhanced protections | Domain-specific ethics codes)

### Operational Variables
- `{{version_control_needs}}`: Change management (Basic tracking | Full versioning | Audit trail | Reproducibility guarantees)
- `{{update_frequency}}`: Refresh cadence (One-time dataset | Periodic updates | Continuous collection | Real-time streaming)
- `{{storage_infrastructure}}`: Technical constraints (Cloud storage | On-premise | Edge devices | Hybrid)
- `{{access_control}}`: Security requirements (Open access | Team-only | Role-based | Audited access)
- `{{documentation_requirements}}`: Metadata needs (Basic description | Detailed provenance | Full audit trail | Published datasheet)

---

## Prompt

You are a training data architect designing comprehensive guidelines for **{{model_objective}}** dataset development serving **{{target_domain}}** at **{{deployment_scale}}** scale. Your task is to create systematic data collection, curation, annotation, and quality assurance processes that produce a **{{data_volume_target}}** dataset meeting **{{performance_requirements}}** standards while ensuring **{{bias_sensitivity}}** fairness and **{{regulatory_framework}}** compliance.

### Phase 1: Dataset Scope & Requirements Definition

**Objective Clarity:**
Define what the model needs to learn:

```
Model capability goal: [Specific task the model will perform]
Success criteria: [How to measure if model learned correctly]
Required input-output patterns: [What data structure model needs]

Example:
- Capability: Classify customer support tickets by urgency and category
- Success: >95% accuracy on unseen tickets, <2% false negatives on critical issues
- Pattern: Input = ticket text, Output = {urgency: P0-P3, category: billing|technical|account}
```

**Coverage Requirements:**
Map the data space the model must handle:

**Scenario Coverage:**
- Primary use cases (80% of expected production inputs): [List scenarios]
- Secondary use cases (15%): [Edge cases that must work]
- Rare but critical (5%): [Low-frequency but high-stakes scenarios]

**Diversity Dimensions:**
For {{diversity_requirements}}:
- **Linguistic**: Formal/informal language, jargon levels, dialects, common misspellings
- **Demographic**: Ensure representation across gender, age, location, ability (where relevant)
- **Contextual**: Different user states (happy, frustrated, confused), time-sensitive, multi-turn
- **Technical**: Short/long inputs, edge formats, unusual but valid structures

**Edge Case Enumeration:**
Identify boundary conditions and failure modes to include:
```
Edge case category: [Type]
Why it matters: [Impact if model fails on this]
Target representation: [% of dataset or absolute count]

Example:
- Category: Tickets with multiple issues (billing + technical)
- Why: 8% of production tickets, high user frustration if routed wrong
- Target: 10% of dataset (overrepresent for learning)
```

### Phase 2: Data Sourcing & Collection Strategy

**Source Selection & Prioritization:**

For each source in {{primary_sources}}:
```
Source: [Name/description]
Quality level: {{source_quality}}
Volume available: [Estimated data points]
Acquisition method: {{collection_method}}
Cost: [Time, money, or API limits]
Licensing: [Copyright status and permissions]
Pros: [Why this source is valuable]
Cons: [Limitations or risks]
Quality filters: [How to select best data from this source]
```

**Ethical & Legal Sourcing Framework:**

**Copyright & Licensing ({{copyright_constraints}}):**
```
Source category: Public domain works (pre-1928 in US, varies globally)
- Permissible use: Unrestricted for training
- Verification: Check actual publication date, not claimed date
- Risk: Low

Source category: Licensed content (paid datasets, partnerships)
- Permissible use: Review license for "AI training" or "machine learning" clauses
- Verification: Legal review of license terms
- Risk: Medium (ensure compliance with restrictions)

Source category: User-generated content (social media, forums)
- Permissible use: Check platform ToS, consider fair use doctrine
- Verification: Platform policies + legal counsel
- Risk: High (platform policies can change, ethical concerns about consent)

Source category: Web scraping
- Permissible use: Robots.txt compliance, rate limiting, terms of service
- Verification: Technical + legal review
- Risk: High (legal gray area, reputational risk)
```

**Privacy & Consent ({{consent_requirements}}):**
```
For {{data_privacy_level}} data:

PII handling protocol:
1. Identify PII types in data (names, emails, addresses, IDs, biometrics)
2. Determine necessity: Is PII required for model task? (Usually no)
3. Anonymization strategy:
   - Remove: Delete PII entirely
   - Pseudonymize: Replace with fictional but realistic alternatives
   - Aggregate: Use only aggregated/statistical forms
   - K-anonymity: Ensure individuals can't be re-identified

Consent verification:
- Explicit opt-in: User actively consented to data use for AI training
- Implicit consent: Terms of service covered this use case
- No consent: Ethical assessment—is use reasonable? Privacy protective?

Special categories (GDPR sensitive data, HIPAA PHI):
- Enhanced protections required
- Legal counsel mandatory
- Consider synthetic data alternatives
```

**Data Collection Protocols:**

**Quality Filters at Collection:**
```
Inclusion criteria:
- Minimum length: [e.g., >10 words for text]
- Language: [Primary language(s), accept/reject non-target languages]
- Format: [Valid structure, no corruption]
- Completeness: [Required fields present]
- Recency: [For {{temporal_coverage}}, date range]

Exclusion criteria:
- Duplicates or near-duplicates (>90% similarity)
- Spam, automated content, or bot-generated
- Explicit offensive content (unless model needs to handle it)
- Corrupted or unreadable data
- Obvious errors or nonsense
```

**Sampling Strategy:**
```
For {{data_volume_target}} from larger corpus:

Random sampling: [X%] for unbiased baseline
Stratified sampling: [Y%] to ensure representation of key categories
Purposeful sampling: [Z%] to capture critical edge cases

Example:
- 60% random from all support tickets (unbiased distribution)
- 30% stratified by category (ensure all categories represented)
- 10% hand-selected edge cases (multi-issue tickets, escalations)
```

### Phase 3: Annotation & Labeling Framework

**Annotation Schema Design:**

For {{annotation_schema}}:
```
Label structure:
[Define exact format, allowed values, data types]

Example for classification:
{
  "urgency": ["P0-critical", "P1-high", "P2-medium", "P3-low"],
  "category": ["billing", "technical", "account", "feature_request", "other"],
  "subcategory": "[Free text or controlled vocabulary]",
  "confidence": ["high", "medium", "low"]  // Annotator confidence
}

Annotation guidelines:
- How to decide between ambiguous labels
- Edge case handling rules
- Examples of each label category
- What to do when unsure (flag for review, default label, etc.)
```

**Annotator Selection & Training:**

For {{annotator_expertise}}:
```
Expertise level needed: [Why this level is required for quality]

Recruitment:
- Domain experts: [How to source—partnerships, contractors, internal SMEs]
- Trained annotators: [Platforms like Scale AI, Labelbox, or internal team]
- Crowdsourced: [MTurk, Prolific—with quality controls]

Training protocol:
1. Annotation guidelines document (15-30 pages with examples)
2. Calibration set: 50-100 examples with gold standard labels
3. Training session: Annotate calibration set, compare to gold standard
4. Quality threshold: Must achieve 90%+ agreement with gold standard
5. Ongoing calibration: Weekly review of inter-annotator agreement

Compensation:
- Fair wage (above minimum, consider living wage)
- Respect for cognitive labor
- Transparent about task difficulty and time requirements
```

**Quality Control Mechanisms:**

**Inter-Annotator Agreement ({{consensus_requirements}}):**
```
Multi-annotator protocol:
- Each example labeled by N annotators (N=3 recommended for subjective tasks)
- Agreement metric: Cohen's Kappa, Fleiss' Kappa, or % agreement
- Threshold: >0.7 Kappa (substantial agreement) or >80% raw agreement
- Disagreement resolution:
  * Majority vote for clear cases
  * Adjudication by senior annotator for close cases
  * Flag unresolvable ambiguity (may need to clarify guidelines or accept ambiguity)

Single annotator with QC:
- Expert annotator labels
- Random sample (10-20%) reviewed by second annotator
- If disagreement >20%, expand review or retrain
```

**Annotation Quality Audits:**
```
Continuous quality monitoring:
1. Gold standard set: 5-10% of data with known correct labels
2. Random insertion: Mix gold standard into annotation queue
3. Annotator performance tracking: Accuracy vs. gold standard over time
4. Feedback loop: Share performance metrics, retrain if declining

Red flags:
- Annotator accuracy drops below 85%
- Annotator speed suspicious (too fast = not reading, too slow = struggling)
- Pattern of errors suggests misunderstanding guidelines
- Low confidence ratings frequently used (ambiguous guidelines)

Response:
- Retraining session
- Clarify guidelines
- Remove low-quality annotations
- Replace underperforming annotators
```

### Phase 4: Bias Detection & Mitigation

**Bias Assessment Framework ({{bias_sensitivity}}):**

**Representation Audit:**
```
Demographic representation (when relevant to task):
Analyze dataset composition:
- Gender representation in examples
- Racial/ethnic diversity in names, scenarios, images
- Age range representation
- Geographic diversity
- Disability/accessibility considerations
- Socioeconomic diversity

Compare to:
- Real-world distribution in target use case
- Balanced representation (if fairness requires over-indexing on underrepresented groups)

Red flags:
- One demographic >80% of examples (unless task-specific reason)
- Stereotypical associations (e.g., nurses always gendered female, engineers always male)
- Absence of marginalized groups
```

**Correlation Bias Audit:**
```
Identify spurious correlations in data:
- Do labels correlate with protected attributes? (e.g., "high risk" label correlates with ZIP code as proxy for race)
- Do certain writing styles correlate with quality labels unfairly?
- Are certain names or dialects associated with negative labels?

Methods:
- Statistical correlation analysis
- Qualitative review of high-confidence examples
- Adversarial testing (flip demographic attributes, does label change?)

Mitigation:
- Collect more diverse examples
- Remove biased examples
- Rebalance dataset
- Note limitation if bias is inherent to domain (document, don't hide)
```

**Stereotype & Harmful Content Review:**
```
Content audit for:
- Stereotypical portrayals
- Offensive language or slurs (unless task requires handling them)
- Harmful associations (e.g., mental illness → violence)
- Exclusionary language

Approach:
- Automated keyword flagging
- Human review of flagged content
- Diverse review team (include perspectives of affected communities)

Decision framework:
- Remove: Clearly harmful, not necessary for task
- Rewrite: Valuable example but problematic framing
- Keep with context: Model needs to handle this content (e.g., content moderation model)
- Keep with awareness: Reflects real-world bias that model must navigate fairly
```

**Mitigation Strategies:**
```
Data-level interventions:
1. Augmentation: Create synthetic examples for underrepresented groups
2. Rebalancing: Upsample minority classes or downsample majority
3. Debiasing: Modify examples to remove spurious correlations (e.g., gender-swap names)
4. Adversarial examples: Add examples specifically testing for bias (e.g., same scenario with different demographics)

Model-level interventions (beyond data):
- Fairness constraints during training
- Bias detection in evaluation
- Post-processing adjustments

Documentation:
- Known biases in dataset (datasheet transparency)
- Mitigation steps taken
- Residual limitations
```

### Phase 5: Dataset Validation & Quality Assurance

**Quantitative Quality Metrics:**

**Completeness:**
```
- Missing values: <1% missing data per field (or principled imputation strategy)
- Coverage: All required scenarios represented
- Minimum representation: Each class/category has ≥50 examples (or adjust based on frequency)
```

**Consistency:**
```
- Schema adherence: 100% of examples match defined structure
- Label consistency: Same input → same label (check for contradictions)
- Format consistency: Unified preprocessing (e.g., all text lowercased, or all capitalized, not mixed)
```

**Accuracy:**
```
- Gold standard validation: Expert review of 500-1000 examples, establish "ground truth"
- Error rate: <5% labeling errors for high-stakes tasks, <10% acceptable for lower-stakes
- Confidence calibration: High-confidence labels more accurate than low-confidence
```

**Relevance:**
```
- Task alignment: Each example actually tests model capability for {{model_objective}}
- Distribution match: Dataset reflects expected production input distribution
- No noise: <2% examples that don't fit task definition
```

**Qualitative Quality Review:**
```
Manual inspection:
1. Sample 100 examples randomly
2. Evaluate on dimensions:
   - Is label correct?
   - Is example realistic/plausible?
   - Is example clearly written/formatted?
   - Does example represent a real use case?
3. Identify systemic issues (not just individual errors)

Common issues:
- Annotators misunderstanding edge cases
- Examples too easy (model will overfit to superficial patterns)
- Examples too artificial (model won't generalize to real-world messiness)
- Label ambiguity (different annotators would disagree)
```

**Dataset Statistics & Profiling:**
```
Generate dataset report:

Size:
- Total examples: N
- Train/dev/test split: 80/10/10 or 70/15/15
- Examples per class/category: [Distribution table]

Input characteristics:
- Length distribution: Mean, median, min, max, std dev
- Vocabulary size: [For text data]
- Common patterns: Most frequent tokens, phrases, structures

Label distribution:
- Class balance: [% per class]
- Multi-label correlation: [Which labels co-occur]

Diversity metrics:
- Unique examples: [After deduplication]
- Lexical diversity: Type-token ratio
- Scenario coverage: [# distinct scenarios represented]

Quality indicators:
- Inter-annotator agreement: [Kappa score]
- Annotation confidence: [% high-confidence]
- Expert validation accuracy: [% correct on gold set]
```

### Phase 6: Dataset Versioning, Documentation & Maintenance

**Version Control System:**
```
Dataset versioning scheme: v[Major].[Minor].[Patch]

Major version (v2.0.0): Breaking changes
- Schema change (new fields, removed fields)
- Relabeling of entire dataset
- Different data sources

Minor version (v1.1.0): Additive changes
- New examples added
- Additional annotation fields (backward compatible)
- Improved annotation quality on subset

Patch version (v1.0.1): Corrections
- Bug fixes (mislabeled examples corrected)
- Duplicate removal
- Minor formatting fixes

Changelog:
- Date, version, changes made, rationale, impact on model performance (if known)
```

**Dataset Documentation (Datasheet):**

Following "Datasheets for Datasets" framework:
```
Motivation:
- Purpose: Why was dataset created?
- Creators: Who created dataset?
- Funding: Who funded dataset creation?

Composition:
- What: What's in the dataset? (Instances, fields, labels)
- Volume: How many instances?
- Missing data: Any missing information?
- Confidential data: Does dataset contain sensitive data?

Collection:
- How: How was data collected? (Mechanisms, sampling)
- Who: Who was involved in collection?
- Timeframe: Over what timeframe was data collected?

Preprocessing:
- Cleaning: What preprocessing was done?
- Raw data: Is raw data available?

Uses:
- Prior use: Has dataset been used already?
- Repository: Where is dataset available?
- Impact: What impact might this dataset have?

Distribution:
- Access: How can dataset be accessed?
- License: What license (if any)?
- Fees: Any fees?

Maintenance:
- Owner: Who maintains dataset?
- Contact: How to reach maintainer?
- Updates: Will dataset be updated?
- Retention: How long will dataset be maintained?
```

**Maintenance & Update Protocol:**

For {{update_frequency}}:
```
Scheduled review:
- Frequency: [Quarterly | Annually | As needed]
- Review criteria:
  * Is dataset still representative of production data?
  * Have task requirements changed?
  * Are there new edge cases to cover?
  * Has annotator quality drifted?

Update triggers:
- Model performance degradation in production
- New product features require new data types
- Discovered bias or quality issues
- Regulatory changes

Update process:
1. Identify gap or issue
2. Source additional data
3. Annotate using established protocols
4. Validate quality
5. Merge with existing dataset
6. Version bump
7. Retrain model with updated data
8. A/B test new model vs. old
9. Deploy if improvement confirmed
```

**Access Control & Governance:**

For {{access_control}}:
```
Access tiers:
- Public: [If applicable] Anonymized, sanitized version
- Internal team: Full dataset for training and evaluation
- Auditors: Read-only access for compliance review
- External partners: Controlled access with DPA

Audit trail:
- Log all access (who, when, what action)
- Version used for each model training run
- Ability to reproduce results from any version

Data usage policies:
- Allowed: Training models, evaluation, research
- Prohibited: Memorization of examples, direct distribution to third parties
- Restrictions: No re-identification attempts for anonymized data
```

---

## Output Schema

```yaml
training_data_guidelines:
  metadata:
    dataset_name: "{{model_objective}}_training_data"
    version: "1.0.0"
    created_date: "YYYY-MM-DD"
    owner: "Team/person responsible"
    purpose: "{{model_objective}} for {{target_domain}}"

  dataset_requirements:
    objective: "Specific task model will perform"
    success_criteria: "Performance thresholds"
    required_patterns:
      input_format: "Description of input structure"
      output_format: "Description of expected output"

    coverage_requirements:
      primary_scenarios:
        - scenario: "Most common use case"
          target_percentage: "80%"
          example: "[Sample input-output pair]"

      secondary_scenarios:
        - scenario: "Important edge case"
          target_percentage: "15%"

      critical_rare_cases:
        - scenario: "Low frequency, high stakes"
          target_percentage: "5%"
          why_critical: "Impact if model fails"

    diversity_dimensions:
      linguistic: ["Formal/informal", "Jargon levels", "Common misspellings"]
      demographic: ["Ensure representation across relevant dimensions"]
      contextual: ["User states", "Time-sensitive", "Multi-turn"]
      technical: ["Input lengths", "Edge formats"]

  data_sourcing:
    sources:
      - source_name: "Primary source description"
        quality_level: "{{source_quality}}"
        volume: "Estimated data points"
        acquisition: "{{collection_method}}"
        cost: "Time/money/limits"
        licensing: "Copyright status and permissions"
        pros: ["Why valuable"]
        cons: ["Limitations"]
        quality_filters: ["Selection criteria"]

    ethical_legal_framework:
      copyright:
        - category: "Public domain"
          permissible_use: "Unrestricted for training"
          verification: "Check publication date"
          risk_level: "Low"

        - category: "Licensed content"
          permissible_use: "Review license for AI training clauses"
          verification: "Legal review of terms"
          risk_level: "Medium"

      privacy:
        pii_handling:
          identification: ["PII types present in data"]
          necessity_assessment: "Is PII required for task?"
          anonymization_strategy: "Remove | Pseudonymize | Aggregate | K-anonymity"

        consent:
          type: "Explicit opt-in | Implicit via ToS | No consent"
          verification: "How consent is verified"
          special_categories: "Enhanced protections for sensitive data"

    collection_protocols:
      inclusion_criteria:
        - "Minimum length: [threshold]"
        - "Language: [target languages]"
        - "Format: [valid structure]"
        - "Completeness: [required fields present]"

      exclusion_criteria:
        - "Duplicates or near-duplicates"
        - "Spam or bot-generated"
        - "Corrupted or unreadable"
        - "Obvious errors"

      sampling_strategy:
        random: "X% for unbiased baseline"
        stratified: "Y% to ensure representation"
        purposeful: "Z% for critical edge cases"

  annotation_framework:
    schema:
      label_structure: |
        {
          "field_1": ["Allowed values"],
          "field_2": "Data type and description",
          "confidence": ["Annotator confidence level"]
        }

      guidelines_summary: "How to decide ambiguous labels, edge case handling"

    annotator_management:
      expertise_required: "{{annotator_expertise}}"
      recruitment: "How to source annotators"
      training_protocol:
        - "Annotation guidelines document"
        - "Calibration set: 50-100 examples with gold standard"
        - "Training session: Annotate and compare to gold standard"
        - "Quality threshold: 90%+ agreement required"

      compensation:
        approach: "Fair wage, transparent about difficulty"

    quality_control:
      consensus_mechanism:
        approach: "{{consensus_requirements}}"
        agreement_metric: "Cohen's Kappa | Fleiss' Kappa | % agreement"
        threshold: ">0.7 Kappa or >80% agreement"
        disagreement_resolution: "Majority vote | Adjudication | Flag ambiguity"

      quality_monitoring:
        gold_standard_set: "5-10% with known correct labels"
        random_insertion: "Mix gold standard into queue"
        performance_tracking: "Accuracy vs. gold standard over time"
        feedback_loop: "Share metrics, retrain if declining"

        red_flags:
          - "Accuracy drops below 85%"
          - "Suspicious speed (too fast or too slow)"
          - "Pattern of errors"
          - "Frequent low confidence ratings"

  bias_detection_mitigation:
    representation_audit:
      demographics:
        analyze: ["Gender", "Race/ethnicity", "Age", "Geography", "Disability", "Socioeconomic"]
        compare_to: "Real-world distribution or balanced representation"
        red_flags:
          - "One demographic >80% of examples"
          - "Stereotypical associations"
          - "Absence of marginalized groups"

    correlation_audit:
      check_for:
        - "Labels correlating with protected attributes"
        - "Writing styles unfairly associated with quality"
        - "Names or dialects associated with negative labels"

      methods:
        - "Statistical correlation analysis"
        - "Qualitative review"
        - "Adversarial testing (flip demographic attributes)"

    content_review:
      audit_for:
        - "Stereotypical portrayals"
        - "Offensive language or slurs"
        - "Harmful associations"
        - "Exclusionary language"

      approach:
        - "Automated keyword flagging"
        - "Human review of flagged content"
        - "Diverse review team"

    mitigation_strategies:
      data_level:
        - "Augmentation: Synthetic examples for underrepresented groups"
        - "Rebalancing: Upsample minority classes"
        - "Debiasing: Remove spurious correlations"
        - "Adversarial examples: Test for bias"

      documentation:
        - "Known biases in dataset"
        - "Mitigation steps taken"
        - "Residual limitations"

  quality_assurance:
    quantitative_metrics:
      completeness:
        missing_values: "<1% per field"
        coverage: "All required scenarios represented"
        minimum_representation: "≥50 examples per class"

      consistency:
        schema_adherence: "100% match defined structure"
        label_consistency: "No contradictions"
        format_consistency: "Unified preprocessing"

      accuracy:
        gold_standard: "Expert review of 500-1000 examples"
        error_rate: "<5% for high-stakes, <10% for lower-stakes"

      relevance:
        task_alignment: "Each example tests {{model_objective}}"
        distribution_match: "Reflects production distribution"
        noise_level: "<2% irrelevant examples"

    qualitative_review:
      sample_inspection:
        size: "100 examples randomly selected"
        evaluation_dimensions:
          - "Is label correct?"
          - "Is example realistic?"
          - "Is example clearly written?"
          - "Does example represent real use case?"

    dataset_statistics:
      size:
        total_examples: "N"
        split: "80/10/10 train/dev/test"
        examples_per_class: "[Distribution]"

      input_characteristics:
        length_distribution: "Mean, median, min, max, std dev"
        vocabulary_size: "[For text]"

      label_distribution:
        class_balance: "[% per class]"
        multi_label_correlation: "[Co-occurrence patterns]"

      diversity_metrics:
        unique_examples: "[After deduplication]"
        lexical_diversity: "Type-token ratio"

      quality_indicators:
        inter_annotator_agreement: "[Kappa score]"
        annotation_confidence: "[% high-confidence]"
        expert_validation: "[% correct on gold set]"

  versioning_documentation:
    version_control:
      scheme: "v[Major].[Minor].[Patch]"
      major_changes: "Schema changes, relabeling, different sources"
      minor_changes: "New examples, additional fields"
      patch_changes: "Bug fixes, duplicate removal"

      changelog:
        - version: "1.0.0"
          date: "YYYY-MM-DD"
          changes: "Initial dataset creation"
          impact: "Baseline model performance"

    datasheet:
      motivation:
        purpose: "Why dataset was created"
        creators: "Who created it"
        funding: "Who funded creation"

      composition:
        content: "What's in dataset"
        volume: "Number of instances"
        missing_data: "Any missing information"
        confidential: "Sensitive data present?"

      collection:
        method: "How data was collected"
        participants: "Who was involved"
        timeframe: "Collection period"

      preprocessing:
        cleaning: "What preprocessing was done"
        raw_available: "Is raw data available?"

      uses:
        prior_use: "Has dataset been used already?"
        repository: "Where is it available?"
        impact: "Potential impact"

      distribution:
        access: "How to access"
        license: "What license"
        fees: "Any costs"

      maintenance:
        owner: "Who maintains"
        contact: "How to reach maintainer"
        updates: "Will it be updated?"
        retention: "How long maintained?"

    maintenance_protocol:
      update_frequency: "{{update_frequency}}"
      review_criteria:
        - "Is dataset still representative?"
        - "Have requirements changed?"
        - "New edge cases?"
        - "Annotator quality drift?"

      update_triggers:
        - "Model performance degradation"
        - "New product features"
        - "Discovered bias or quality issues"
        - "Regulatory changes"

      update_process:
        - "Identify gap or issue"
        - "Source additional data"
        - "Annotate using established protocols"
        - "Validate quality"
        - "Merge with existing dataset"
        - "Version bump"
        - "Retrain and A/B test"
        - "Deploy if improved"

  access_governance:
    access_tiers:
      public: "Anonymized, sanitized version (if applicable)"
      internal: "Full dataset for training and evaluation"
      auditors: "Read-only for compliance review"
      external: "Controlled access with DPA"

    audit_trail:
      - "Log all access (who, when, what action)"
      - "Version used for each training run"
      - "Reproducibility capability"

    usage_policies:
      allowed: ["Training models", "Evaluation", "Research"]
      prohibited: ["Memorization of examples", "Direct third-party distribution"]
      restrictions: ["No re-identification attempts"]
```

---

## Examples

### Example 1: Customer Support Classification Dataset

**Context**: Building model to classify support tickets by urgency and category for SaaS company.

**Variables**:
- model_objective: Classification (urgency + category)
- target_domain: B2B SaaS customer support
- data_volume_target: 10,000 labeled tickets
- annotator_expertise: Trained annotators (customer support background)
- bias_sensitivity: Elevated (ensure fairness across customer tiers)

**Dataset Requirements**:
```yaml
objective: "Classify support tickets by urgency (P0-P3) and category (billing, technical, account, feature request)"

coverage:
  primary_scenarios:
    - "Single clear issue (technical problem)": 50%
    - "Single clear issue (billing question)": 20%
    - "Account management request": 10%

  secondary_scenarios:
    - "Multiple issues in one ticket": 10%
    - "Vague or unclear issue": 5%

  critical_rare:
    - "Security vulnerability report": 2%
    - "Data loss or critical outage": 3%
```

**Data Sourcing**:
```yaml
sources:
  - source: "Historical support tickets (past 12 months)"
    volume: "50,000 tickets available"
    quality: "Real-world distribution"
    sampling: "Stratified by category + random from each"
    pros: "Authentic language, realistic distribution"
    cons: "May contain PII, some poorly written"
    filters:
      - "Remove test tickets"
      - "Anonymize customer names, domains, specific data"
      - "Exclude tickets <10 words (too vague to classify)"
      - "Deduplicate similar tickets"

privacy_handling:
  - "PII identified: Customer names, company names, email addresses, API keys"
  - "Anonymization: Replace with [CUSTOMER_NAME], [COMPANY], [EMAIL], [REDACTED]"
  - "Legal review: Confirmed data usage permissible under ToS"
```

**Annotation Framework**:
```yaml
schema:
  urgency:
    labels: ["P0-critical", "P1-high", "P2-medium", "P3-low"]
    guidelines:
      P0: "Production down, data loss, security breach, enterprise customer fully blocked"
      P1: "Major feature broken, significant business impact, high-tier customer impacted"
      P2: "Minor bug, feature request from paying customer, degraded performance"
      P3: "Cosmetic issue, free-tier request, low-impact"

  category:
    labels: ["billing", "technical", "account", "feature_request", "other"]
    guidelines:
      billing: "Payment, subscription, invoicing, refunds"
      technical: "Bug reports, performance issues, integration problems"
      account: "Login, permissions, user management"
      feature_request: "Asking for new features or enhancements"
      other: "Doesn't fit above categories"

  multi_issue:
    type: "boolean"
    description: "True if ticket contains multiple distinct issues"

annotators:
  expertise: "Former customer support agents with 6+ months experience"
  training:
    - "Study 30-page guideline document"
    - "Annotate 100 calibration examples"
    - "Must achieve 85%+ agreement with gold standard"
    - "Review disagreements with senior annotator"

  consensus: "Each ticket annotated by 2 annotators"
  agreement_threshold: "80% exact match on urgency + category"
  disagreement_resolution: "Third annotator adjudicates"

quality_control:
  - "Gold standard set: 500 tickets pre-labeled by CTO and Head of Support"
  - "Random insertion: 10% of annotation queue is gold standard"
  - "Annotator performance: Must maintain 85%+ accuracy on gold standard"
  - "Weekly calibration: Review 20 examples as team, discuss disagreements"
```

**Bias Detection**:
```yaml
representation_audit:
  customer_tier:
    - "Enterprise: 20% of tickets (matches production)"
    - "Pro: 50%"
    - "Free: 30%"
    - "Ensure P0/P1 labels not skewed toward enterprise (check for tier-based bias)"

  language_style:
    - "Check if informal language correlates with lower urgency labels unfairly"
    - "Audit: Do tickets with poor grammar get misclassified as low priority?"

mitigation:
  - "Include diverse writing styles in training data"
  - "Train annotators to focus on issue impact, not writing quality"
  - "Add adversarial examples: Clearly urgent issues expressed poorly"
```

**Quality Metrics**:
```yaml
quantitative:
  accuracy: "93% agreement with gold standard on held-out test set"
  inter_annotator_agreement: "Fleiss' Kappa = 0.78 (substantial agreement)"
  coverage: "All categories represented, minimum 200 examples per category"
  edge_case_coverage: "Multi-issue tickets: 10.3% of dataset (target: 10%)"

qualitative:
  sample_review: "Manual review of 100 random examples"
  findings:
    - "2 mislabeled tickets (corrected)"
    - "5 tickets where category ambiguous (added clarification to guidelines)"
    - "Overall: realistic, well-labeled, diverse scenarios"
```

### Example 2: Medical Text Generation Dataset

**Context**: Fine-tuning LLM to generate patient-friendly explanations of medical concepts.

**Variables**:
- model_objective: Generation (medical explanations)
- target_domain: Healthcare/medical
- data_volume_target: 5,000 concept-explanation pairs
- source_quality: Expert-created
- regulatory_framework: HIPAA compliance

**Dataset Requirements**:
```yaml
objective: "Generate clear, accurate, empathetic explanations of medical concepts for patients (8th grade reading level)"

coverage:
  medical_concepts:
    - "Common conditions (diabetes, hypertension, asthma)": 40%
    - "Procedures (MRI, biopsy, endoscopy)": 20%
    - "Medications (antibiotics, insulin, statins)": 15%
    - "Lab results (cholesterol, blood count, liver function)": 15%
    - "Rare conditions": 10%

  explanation_types:
    - "What it is": 30%
    - "Why it matters": 25%
    - "What to expect": 25%
    - "How to manage": 20%
```

**Data Sourcing**:
```yaml
sources:
  - source: "Licensed medical content (MedlinePlus, Mayo Clinic patient education)"
    licensing: "Reviewed and approved for AI training use"
    quality: "Expert-vetted, patient-friendly"
    volume: "3,000 concept-explanation pairs"
    adaptation: "Rewritten to match target style and reading level"

  - source: "Expert-created original content"
    experts: "5 physicians + 3 medical writers"
    quality: "Highest accuracy, tailored to use case"
    volume: "2,000 concept-explanation pairs"
    creation_protocol:
      - "Physician writes technical explanation"
      - "Medical writer adapts to patient-friendly language"
      - "Second physician reviews for accuracy"
      - "Readability analysis (Flesch-Kincaid grade level 7-9)"

privacy:
  - "No patient data used (only educational content)"
  - "HIPAA not directly applicable, but followed best practices"
  - "No identifiable patient stories or cases"
```

**Annotation Framework**:
```yaml
schema:
  input: "Medical concept or question"
  output: "Patient-friendly explanation"
  quality_dimensions:
    - accuracy: "Medically correct, no oversimplification that misleads"
    - clarity: "8th grade reading level, no jargon without definition"
    - empathy: "Acknowledges patient concerns, non-alarming tone"
    - completeness: "Answers likely follow-up questions"

annotators:
  expertise: "Physicians or nurse practitioners with 5+ years experience"
  role: "Quality review, not creation (content created by experts upfront)"
  training: "Review 50 examples, calibrate on quality dimensions"

quality_control:
  triple_review:
    - "Medical writer creates explanation"
    - "Physician 1 reviews for accuracy"
    - "Physician 2 spot-checks 20% for accuracy validation"

  readability_check:
    - "Automated: Flesch-Kincaid grade level 7-9"
    - "Manual: Non-expert reads and confirms comprehension"

  patient_testing:
    - "50 explanations tested with real patients"
    - "Patient feedback: 'Did this make sense? Did it answer your question?'"
    - "Revise based on feedback"
```

**Bias Detection**:
```yaml
representation_audit:
  demographic_examples:
    - "Ensure examples use diverse names (not just Anglo-American)"
    - "Avoid gendered assumptions (e.g., 'nurses are women')"
    - "Include various age groups in examples"

  medical_bias:
    - "Check for socioeconomic bias (assuming access to resources)"
    - "Geographic bias (US-centric healthcare system assumptions)"
    - "Disability bias (ableist language or assumptions)"

mitigation:
  - "Diverse expert team (gender, race, geography)"
  - "Include explanations relevant to underserved populations"
  - "Sensitivity readers from patient advocacy groups"
```

**Quality Metrics**:
```yaml
quantitative:
  accuracy: "100% medically accurate (zero-tolerance for errors)"
  readability: "Mean Flesch-Kincaid grade level: 8.2 (target: 7-9)"
  completeness: "95% of explanations address top 3 patient questions per concept"

qualitative:
  expert_review: "Physician panel rated 4.8/5.0 on accuracy and appropriateness"
  patient_comprehension: "87% of patients correctly understood explanation after reading"
  empathy_score: "Patient panel rated 4.6/5.0 on 'felt cared for' dimension"
```

### Example 3: Code Generation Dataset for API Documentation

**Context**: Training model to generate code examples from API documentation.

**Variables**:
- model_objective: Code generation
- target_domain: Software development (REST APIs)
- data_volume_target: 15,000 documentation-code pairs
- annotator_expertise: Software engineers
- bias_sensitivity: Standard (focus on language/framework diversity)

**Dataset Requirements**:
```yaml
objective: "Generate code examples in multiple languages from API endpoint documentation"

coverage:
  http_methods:
    - "GET requests": 40%
    - "POST requests": 30%
    - "PUT/PATCH requests": 15%
    - "DELETE requests": 10%
    - "Complex multi-step flows": 5%

  languages:
    - "Python": 25%
    - "JavaScript/Node.js": 25%
    - "Java": 15%
    - "Go": 10%
    - "Ruby": 10%
    - "PHP": 10%
    - "Other (C#, Rust, etc.)": 5%

  authentication:
    - "API key in header": 40%
    - "OAuth 2.0": 30%
    - "JWT": 20%
    - "Basic auth": 10%
```

**Data Sourcing**:
```yaml
sources:
  - source: "Public API documentation (GitHub, Stripe, Twilio, etc.)"
    licensing: "Public documentation (verified ToS allows this use)"
    quality: "Production-quality, diverse styles"
    volume: "8,000 endpoint-example pairs"
    collection:
      - "Web scraping of public API docs"
      - "Extracted endpoint description + code examples"
      - "Deduplicated similar endpoints"

  - source: "Developer-created examples"
    experts: "10 senior software engineers"
    quality: "Idiomatic code, best practices"
    volume: "7,000 endpoint-example pairs"
    creation_protocol:
      - "Given API spec, write example in assigned language"
      - "Follow language-specific conventions"
      - "Include error handling"
      - "Add comments explaining key parts"
      - "Peer review by second engineer"

diversity_strategy:
  - "Ensure each language has examples for all HTTP methods"
  - "Balance simple and complex endpoints"
  - "Include deprecated patterns with comments (model learns to avoid)"
```

**Annotation Framework**:
```yaml
schema:
  input:
    endpoint: "/users/{id}"
    method: "GET"
    description: "Retrieve user details by ID"
    parameters: [{name: "id", type: "integer", required: true}]
    authentication: "API key in header"

  output:
    language: "Python"
    code: |
      import requests

      api_key = "your_api_key"
      user_id = 12345

      headers = {"Authorization": f"Bearer {api_key}"}
      response = requests.get(f"https://api.example.com/users/{user_id}", headers=headers)

      if response.status_code == 200:
          user_data = response.json()
          print(user_data)
      else:
          print(f"Error: {response.status_code}")

quality_dimensions:
  - correctness: "Code runs without errors"
  - idiomaticity: "Uses language-specific conventions"
  - completeness: "Includes error handling, imports, etc."
  - clarity: "Well-commented, readable"

annotators:
  expertise: "Software engineers with 3+ years experience in target languages"
  specialization: "Each engineer annotates 2-3 languages they're proficient in"
  training:
    - "Style guide for each language"
    - "Annotate 20 calibration examples"
    - "Code must pass linter and run successfully"

quality_control:
  automated_checks:
    - "Syntax validation: Code must parse in target language"
    - "Linter: Must pass language-specific linter (PEP 8 for Python, ESLint for JS)"
    - "Security: No hardcoded secrets, SQL injection vulnerabilities"

  manual_review:
    - "Peer review by second engineer"
    - "Focus on idiomaticity and best practices"
    - "Test code execution on subset (10%)"
```

**Bias Detection**:
```yaml
representation_audit:
  language_balance:
    - "Ensure no over-representation of one language"
    - "Each language has sufficient examples for model to learn patterns"

  framework_diversity:
    - "Within languages, include different frameworks (Express, Flask, Spring, etc.)"
    - "Avoid assuming specific tooling (e.g., not everything uses npm)"

  naming_conventions:
    - "Use diverse variable names (not just 'foo', 'bar')"
    - "Include realistic entity names (users, products, orders)"

mitigation:
  - "Rebalance dataset if one language >30%"
  - "Create synthetic examples for underrepresented languages"
```

**Quality Metrics**:
```yaml
quantitative:
  syntactic_correctness: "100% (code must parse)"
  linter_pass_rate: "98% (some intentional exceptions with comments)"
  execution_success: "95% of tested examples run without errors"

qualitative:
  engineer_review: "4.7/5.0 on 'would use this code in production'"
  idiomaticity_score: "4.5/5.0 on 'follows language conventions'"
  completeness: "92% include appropriate error handling"
```

---

## Success Metrics

- **Dataset Quality**: >90% accuracy on gold standard validation, <5% labeling errors for high-stakes applications
- **Representation**: All critical scenarios represented with minimum viable examples per category (≥50)
- **Inter-Annotator Agreement**: >0.70 Cohen's/Fleiss' Kappa for subjective tasks, >85% for objective tasks
- **Bias Metrics**: No demographic group >80% of dataset (unless task-specific), <0.2 correlation between protected attributes and labels
- **Model Performance**: Dataset enables model to achieve target performance thresholds (e.g., >95% accuracy)
- **Efficiency**: Annotation cost per example within budget, <20% rework rate
- **Compliance**: Zero legal/regulatory violations, 100% ethical sourcing adherence
- **Maintainability**: Dataset versioning enables reproducibility, updates possible within 2 weeks
- **Documentation**: Complete datasheet, all stakeholders can understand dataset composition and limitations
- **Longevity**: Dataset remains representative of production data for ≥12 months without major updates

---

## Best Practices

- **Quality Over Quantity**: 1,000 high-quality examples outperform 10,000 noisy examples; prioritize curation
- **Diversity Is Not Optional**: Edge cases and underrepresented scenarios teach robustness; actively seek them
- **Annotator Training Is Investment**: Well-trained annotators are 3x more efficient and accurate; don't skip
- **Bias Is in the Data**: Algorithmic fairness starts with dataset fairness; audit early and often
- **Document Everything**: Future you (and others) will need to understand dataset decisions; datasheets are mandatory
- **Version Control From Day 1**: Reproducibility requires knowing exactly what data trained which model
- **Test on Real Production Data**: Dataset may be perfect on paper but miss crucial production patterns
- **Iterate Based on Model Failures**: When model fails, trace back to dataset gaps; continuous improvement cycle
- **Ethical Sourcing Is Non-Negotiable**: Cutting corners on copyright or privacy creates legal and reputational risk
- **Human Review Never Fully Automated**: Even with strong automation, expert review of samples is essential

---

## Common Pitfalls

- **Ignoring Class Imbalance**: Rare but critical cases underrepresented, model fails on them in production
- **Annotation Guideline Ambiguity**: Vague guidelines lead to inconsistent labels; invest in clarity and examples
- **Single Annotator Bias**: One person's perspective encoded as "truth"; multiple annotators reveal subjectivity
- **Copyright Violations**: Scraping copyrighted content without permission; legal exposure and forced dataset rebuilds
- **PII Leakage**: Personal information in training data, model memorizes and leaks it; privacy violations
- **Temporal Drift**: Dataset from 2020 doesn't reflect 2024 patterns; staleness degrades model performance
- **Over-Sampling Harms Diversity**: Duplicating minority class creates model overfitting to specific examples
- **No Gold Standard**: Can't measure annotation quality without known-correct examples; flying blind
- **Survivorship Bias**: Only successful outcomes in data, model can't learn from failures
- **Ignoring Model Use Case**: Collecting data without clear task definition; dataset doesn't actually support model needs

---

**Document Version**: 1.0
**Last Updated**: 2024-01-15
**Maintained By**: Content Design Prompt Library
**License**: Copyright 2024 Adedayo Agarau. All rights reserved.

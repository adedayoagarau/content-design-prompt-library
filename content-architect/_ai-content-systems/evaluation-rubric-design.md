## Evaluation Rubric Design v1.0

**Purpose**: Design systematic, measurable evaluation rubrics that assess AI system performance across quality dimensions, enabling objective comparison, continuous improvement, and stakeholder alignment through clearly defined criteria, rating scales, and scoring methodologies that balance quantitative metrics with qualitative human judgment.

**Context**: Use this framework when establishing quality standards for AI outputs, comparing model variants, evaluating content generation systems, assessing conversational AI, or creating human evaluation protocols. Ideal for ML teams measuring model performance, product managers defining success criteria, QA teams conducting systematic reviews, or research teams benchmarking systems. Applies to any AI application requiring quality assessment beyond simple accuracy metrics.

**Strategic Frameworks Applied**:
- **Multi-Dimensional Quality Framework** - Holistic assessment across multiple independent criteria
- **Inter-Rater Reliability Optimization** - Designing rubrics that produce consistent evaluations
- **Criterion-Referenced Assessment** - Absolute standards vs. norm-referenced comparisons
- **Weighted Scoring Models** - Prioritization of quality dimensions by business impact
- **Qualitative-Quantitative Integration** - Combining automated metrics with human judgment
- **Continuous Calibration Protocols** - Maintaining evaluation consistency over time and evaluators

---

## Variables

### Evaluation Context Variables
- `{{evaluation_purpose}}`: Why assessing (Model selection | Quality monitoring | A/B testing | Compliance verification | Research benchmarking)
- `{{ai_system_type}}`: What's being evaluated (Content generation | Classification | Conversation | Reasoning | Recommendation | Code generation)
- `{{output_characteristics}}`: Output nature (Structured data | Free text | Multi-modal | Sequential decisions | Conversational turns)
- `{{evaluation_frequency}}`: How often (One-time benchmark | Continuous monitoring | Periodic audits | Per-change validation)
- `{{decision_stakes}}`: Consequence level (Research insights | Product features | Business-critical | High-stakes decisions)

### Quality Dimension Variables
- `{{primary_quality_dimensions}}`: Core criteria (Accuracy | Relevance | Coherence | Safety | Usefulness | Completeness)
- `{{task_specific_dimensions}}`: Domain criteria (Creativity | Factuality | Empathy | Tone | Brand alignment | Technical correctness)
- `{{risk_dimensions}}`: Safety criteria (Bias | Toxicity | Privacy | Misinformation | Harmful content)
- `{{user_experience_dimensions}}`: UX criteria (Clarity | Conciseness | Formatting | Actionability)
- `{{dimension_weighting}}`: Relative importance of each dimension

### Evaluator Variables
- `{{evaluator_type}}`: Who evaluates (Domain experts | Trained raters | Crowdworkers | End users | Automated systems)
- `{{evaluator_expertise}}`: Required background (Technical knowledge | Domain expertise | General users | Mixed)
- `{{evaluator_count}}`: Number per item (Single evaluator | Multiple for consensus | Automated + human hybrid)
- `{{evaluation_budget}}`: Resource constraints (Tight | Moderate | Well-funded)
- `{{evaluation_speed}}`: Urgency needs (Real-time | Same-day | Thorough deep-dive)

### Scale & Methodology Variables
- `{{rating_scale}}`: Scale type (Binary pass/fail | Likert 1-5 | Likert 1-7 | 0-100 continuous | Categorical labels)
- `{{scale_granularity}}`: Detail level (Coarse 3-point | Standard 5-point | Fine-grained 7-10 point)
- `{{anchor_specificity}}`: Scale descriptions (Vague anchors | Clear descriptors | Detailed rubrics with examples)
- `{{comparison_approach}}`: Reference point (Absolute criteria | Pairwise comparison | Ranked ordering | Baseline comparison)
- `{{aggregation_method}}`: Score combination (Mean | Median | Weighted average | Minimum threshold | Multi-stage filtering)

### Validation Variables
- `{{inter_rater_reliability}}`: Consistency requirements (Moderate agreement >0.6 | Strong >0.8 | Near-perfect >0.9)
- `{{gold_standard_availability}}`: Known-correct examples available? (Large gold set | Small calibration set | No gold standard)
- `{{calibration_frequency}}`: Evaluator alignment (One-time training | Weekly calibration | Continuous feedback)
- `{{quality_control_method}}`: Rater QC (Gold standard insertion | Consensus review | Expert adjudication | Automated consistency checks)
- `{{iteration_approach}}`: Rubric refinement (Fixed rubric | Evolving based on learnings | A/B test rubric variants)

---

## Prompt

You are an evaluation framework architect designing a comprehensive rubric for assessing **{{ai_system_type}}** outputs for **{{evaluation_purpose}}**. Your task is to create a systematic, reliable, measurable evaluation system that captures **{{primary_quality_dimensions}}** quality dimensions, enables **{{evaluator_type}}** to produce consistent judgments, and supports **{{decision_stakes}}** decision-making with **{{inter_rater_reliability}}** agreement standards.

### Phase 1: Quality Dimension Definition

**Core Dimensions Framework:**

For each dimension in {{primary_quality_dimensions}} + {{task_specific_dimensions}} + {{risk_dimensions}}:

```yaml
dimension_name: "[Specific quality aspect]"
definition: "Clear, unambiguous description of what this dimension measures"
importance: "Why this matters for {{evaluation_purpose}}"
weight: "[Percentage of total score, sum to 100%]"

evaluation_criteria:
  excellent: "Detailed description of top-tier performance"
  good: "Clear distinction from excellent—what's acceptable but not outstanding"
  acceptable: "Minimum threshold for usefulness/safety"
  poor: "Clear failure modes"
  unacceptable: "Critical failures requiring rejection"

examples:
  - rating: "Excellent"
    output_example: "[Concrete example demonstrating excellent performance]"
    rationale: "Why this is excellent: [specific qualities]"

  - rating: "Poor"
    output_example: "[Example of poor performance]"
    rationale: "Why this fails: [specific deficiencies]"

edge_cases:
  - scenario: "[Ambiguous case description]"
    guidance: "How to rate this specific edge case"

measurement_type: "Objective (verifiable facts) | Subjective (judgment-based) | Mixed"

automation_potential: "Fully automatable | Partially automatable | Requires human judgment"
```

**Dimension Independence:**
Ensure dimensions are orthogonal (not overlapping):
```
Test: Can an output score high on dimension A but low on dimension B?

Example:
- Accuracy (factually correct) vs. Coherence (well-structured)
  * Output can be accurate but incoherent (jumbled facts)
  * Output can be coherent but inaccurate (well-written fiction)
  * ✓ Independent dimensions

Problematic overlap:
- "Quality" and "Excellence" → Too similar, consolidate
- "Usefulness" and "Relevance" → May overlap, clarify distinction
```

**Dimension Weighting Rationale:**
```
For {{dimension_weighting}}:

Business impact method:
1. Estimate user value of each dimension: "How much does a 1-point improvement in [dimension] increase user satisfaction/task success?"
2. Quantify risk of failure: "Cost of error in [dimension]"
3. Prioritize:
   - Critical dimensions (safety, accuracy in high-stakes): 30-40% weight
   - Important dimensions (usefulness, relevance): 20-30%
   - Nice-to-have dimensions (style, elegance): 10-15%

Example weighting for customer support chatbot:
- Accuracy (correct information): 35%
- Safety (no harmful advice): 25%
- Helpfulness (solves user problem): 20%
- Clarity (easy to understand): 10%
- Empathy (appropriate tone): 10%

Document rationale: "Accuracy weighted highest because incorrect information causes biggest harm (poor decisions, wasted time). Safety critical for liability and trust."
```

### Phase 2: Rating Scale Design

**Scale Selection:**

Choose optimal scale based on {{rating_scale}} and context:

**Binary (Pass/Fail):**
```
Use when:
- Clear quality threshold (acceptable or not)
- Fast evaluation needed
- High-volume low-stakes assessment

Design:
- Pass: "Meets minimum standard: [specific criteria]"
- Fail: "Falls below standard: [specific failure modes]"

Strengths: Fast, clear, high inter-rater reliability
Weaknesses: No nuance, can't distinguish excellent from barely acceptable

Example: Content moderation (safe/unsafe)
```

**3-Point Scale:**
```
Use when:
- Need slight nuance but prioritize speed and agreement
- Clear tri-level distinction (great/okay/bad)

Design:
- Excellent/Good/Poor
- Above expectation/Meets expectation/Below expectation

Strengths: Fast, reasonably reliable, captures basic quality levels
Weaknesses: Limited granularity, middle option can become "default"

Example: Simple content quality check
```

**5-Point Likert:**
```
Use when:
- Standard evaluation with balance of nuance and reliability
- Established scale (strongly agree to strongly disagree)
- Most common choice for {{evaluation_purpose}}

Design:
- 5: Exceptional
- 4: Good
- 3: Acceptable
- 2: Poor
- 1: Unacceptable

Strengths: Familiar, good balance, sufficient granularity
Weaknesses: Raters may avoid extremes, central tendency bias

Example: Most AI output quality evaluation
```

**7-Point or 10-Point:**
```
Use when:
- Fine-grained distinctions needed
- Large sample size (statistical power)
- Expert evaluators comfortable with nuance

Strengths: High granularity, captures subtle differences
Weaknesses: Lower inter-rater reliability, requires more training

Example: Research benchmarking, expert evaluation
```

**0-100 Continuous:**
```
Use when:
- Maximizing statistical analysis options
- Combining with automated metrics

Strengths: Maximum granularity, mathematical flexibility
Weaknesses: Hardest for consistent human evaluation, false precision

Example: Hybrid human + automated scoring
```

**Categorical Labels:**
```
Use when:
- Distinct quality types rather than single spectrum
- Not all dimensions on same scale

Design:
- Safety: Safe | Borderline | Unsafe
- Tone: Professional | Casual | Inappropriate
- Accuracy: Fully accurate | Partially accurate | Inaccurate | Can't verify

Strengths: Dimension-appropriate scales, clearer meaning
Weaknesses: Can't aggregate into single score easily

Example: Multi-faceted content evaluation with different scale types per dimension
```

**Anchor Point Specification:**

For chosen {{scale_granularity}}, define each point:

```
Rating: 5/5 (Exceptional)
Anchor description: "Output goes above and beyond requirements. Demonstrates creativity, thoroughness, or insight beyond expectation. No improvements needed."
Behavioral indicators:
- [Specific observable quality 1]
- [Specific observable quality 2]
Examples: [2-3 exemplar outputs rated 5/5]

Rating: 4/5 (Good)
Anchor description: "Output fully meets requirements with minor room for enhancement. Accomplishes task well."
Behavioral indicators:
- [Specific qualities distinguishing from 5/5]
- [What prevents this from being exceptional]
Examples: [2-3 exemplar outputs rated 4/5]

[Continue for each scale point...]

Critical: Distinguish adjacent scale points clearly
- What makes a 4/5 different from 3/5?
- Avoid: "4/5 is pretty good, 3/5 is okay" → Too vague
- Use: "4/5 includes all required elements with clear organization; 3/5 may be missing 1-2 minor elements or have minor clarity issues"
```

### Phase 3: Evaluation Protocol Design

**Step-by-Step Evaluation Process:**

```
Pre-Evaluation:
1. Evaluator Training
   - Review rubric and anchor definitions
   - Practice on calibration set (20-50 examples with gold standard ratings)
   - Achieve {{inter_rater_reliability}} threshold vs. gold standard
   - Discuss disagreements to align understanding

2. Context Priming
   - Review task instructions that produced this output
   - Understand intended use case and audience
   - Set appropriate expectations (e.g., draft vs. publication-ready)

Evaluation Steps:
1. Initial Read/Review
   - Consume entire output without judgment
   - Understand what output is attempting to do

2. Dimension-by-Dimension Assessment
   For each dimension:
   - Read dimension definition
   - Compare output to anchor descriptions
   - Select rating that best matches
   - Note 1-2 sentence justification
   - Flag any uncertainty for review

3. Holistic Check
   - Does overall profile make sense?
   - Any dimensions in tension? (e.g., highly creative but factually inaccurate)
   - Final adjustments if needed

4. Confidence Rating (Optional)
   - How confident in this evaluation? (High/Medium/Low)
   - Low confidence → Flag for second evaluator

5. Free-Text Comments
   - What did this output do particularly well?
   - What were the main weaknesses?
   - Any context that influenced rating?

Post-Evaluation:
- Aggregate scores using {{aggregation_method}}
- Identify outliers (evaluators diverging from consensus)
- Review flagged items
- Provide feedback to evaluators on alignment
```

**Consensus & Disagreement Resolution:**

For {{evaluator_count}} > 1:

```
Multi-Rater Protocol:

Independent Evaluation:
- Each rater evaluates without seeing others' scores
- Prevents anchoring bias

Agreement Measurement:
- Calculate inter-rater reliability (Cohen's Kappa, Krippendorff's Alpha, ICC)
- Per-dimension and overall

Disagreement Thresholds:
- Minor: Within 1 scale point → Average ratings
- Moderate: 2 scale points apart → Discuss and re-evaluate
- Major: ≥3 scale points or opposite ends → Adjudication by senior evaluator

Adjudication Process:
- Senior evaluator reviews output and both rationales
- Makes final decision or requests third opinion
- Documents reasoning for future calibration

Learning from Disagreement:
- Why did raters disagree?
- Ambiguity in rubric? → Clarify
- Different interpretation of dimension? → Align
- Genuine edge case? → Add to rubric examples
```

### Phase 4: Quality Control & Calibration

**Evaluator Quality Assurance:**

**Gold Standard Insertion:**
```
Create gold standard set:
- 50-100 items with expert-consensus ratings
- Covers full range of quality (excellent to poor)
- Includes edge cases and common confusions

Insertion protocol:
- Randomly insert 10-20% gold standard items into evaluation queue
- Raters don't know which items are gold standard
- Track each rater's accuracy vs. gold standard

Quality thresholds:
- >85% agreement within 1 scale point: Acceptable
- 70-85%: Requires retraining
- <70%: Replace evaluator or major rubric revision needed

Feedback:
- Weekly report to each rater: Your accuracy vs. gold standard
- Examples where you diverged: "You rated 3/5, gold standard is 5/5. Here's why..."
```

**Ongoing Calibration:**
```
Weekly calibration sessions:
- Review 5-10 diverse examples as team
- Each rater shares their rating and rationale
- Discuss disagreements
- Align on borderline cases
- Update rubric if systematic ambiguity found

Monthly gold standard refresh:
- Add new examples reflecting recent outputs
- Retire outdated examples
- Ensure gold standard stays relevant to production distribution

Rater performance tracking:
- Inter-rater reliability trend over time
- Speed vs. accuracy trade-off monitoring
- Identification of raters who consistently diverge (retraining candidates)
```

**Rubric Iteration:**
```
Rubric is living document:

Version control:
- v1.0: Initial rubric
- v1.1: Clarifications added based on rater confusion
- v1.2: New dimension added for emerging quality issue

Update triggers:
- Inter-rater reliability drops below threshold
- Systematic rater disagreement on specific scenario
- New failure mode discovered in production
- Business priorities change (dimension weights shift)

A/B testing rubrics:
- Test rubric variant with half of evaluation team
- Compare inter-rater reliability, evaluation speed, correlation with outcomes
- Adopt better-performing rubric

Documentation:
- Changelog: What changed, why, when
- Migration: How to re-evaluate prior items with new rubric (if needed)
```

### Phase 5: Aggregation & Scoring

**Score Calculation Methods:**

**Simple Mean (Unweighted):**
```
When to use:
- All dimensions equally important
- Exploratory evaluation where priorities unclear

Calculation:
Total Score = (Dim1 + Dim2 + ... + DimN) / N

Pros: Simple, intuitive
Cons: Ignores differential importance of dimensions
```

**Weighted Average:**
```
When to use:
- {{dimension_weighting}} established based on business impact
- Standard approach for most evaluations

Calculation:
Total Score = (Dim1 × Weight1) + (Dim2 × Weight2) + ... + (DimN × WeightN)
where Sum(Weights) = 1.0

Example:
Accuracy (0.35) × 4 + Safety (0.25) × 5 + Helpfulness (0.20) × 3 + Clarity (0.10) × 4 + Empathy (0.10) × 3
= 1.4 + 1.25 + 0.6 + 0.4 + 0.3 = 3.95/5.0

Pros: Reflects priorities, balances dimensions
Cons: Requires thoughtful weight selection
```

**Minimum Threshold (Pass-Gate):**
```
When to use:
- Certain dimensions are must-haves (safety, accuracy)
- Overall high score shouldn't mask critical failure

Approach:
1. Check critical dimensions meet minimum threshold
   - If Safety < 3/5: FAIL (regardless of other dimensions)
   - If Accuracy < 3/5: FAIL
2. If thresholds met, calculate weighted average of all dimensions

Example:
Output scores: Accuracy 5/5, Safety 2/5, Helpfulness 5/5
Result: FAIL (safety below threshold), despite high average

Pros: Prevents critical failures from being overlooked
Cons: Can be harsh; requires clear threshold setting
```

**Multi-Stage Filtering:**
```
When to use:
- Hierarchical quality requirements
- Large-scale evaluation with limited expert resources

Approach:
Stage 1 (Automated): Fast, objective checks
- Format validation
- Length requirements
- Keyword presence
- Toxicity filters

Stage 2 (Crowdworker): Basic quality
- Binary pass/fail on core dimensions
- Fast evaluation (~30 sec/item)

Stage 3 (Expert): Detailed rubric
- Items passing Stage 1-2 get full expert evaluation
- Comprehensive multi-dimension scoring

Pros: Efficient use of resources, scales to high volume
Cons: Complex pipeline, potential filter errors
```

**Pairwise Comparison (Elo/Bradley-Terry):**
```
When to use:
- Relative ranking more reliable than absolute scoring
- Comparing models or variants

Approach:
- Show evaluators two outputs side-by-side
- "Which is better overall?" or "Which is better for [dimension]?"
- Aggregate pairwise preferences into ranking

Calculation:
- Elo rating: Winner gains points, loser loses points
- After many comparisons, clear ranking emerges

Pros: Easier for humans (relative judgment), fewer biases
Cons: Requires many comparisons for stable ranking, no absolute score

Use case: Determine if Model A > Model B
```

**Human + Automated Hybrid:**
```
Approach:
- Automated metrics for objective dimensions (e.g., accuracy, format compliance, safety classifiers)
- Human judgment for subjective dimensions (e.g., creativity, empathy, nuance)
- Combine using weighted formula

Example:
- Automated: Factuality check (3rd party API), Toxicity score, Length compliance
- Human: Helpfulness, Clarity, Tone
- Combined Score = 0.4 × Automated + 0.6 × Human

Pros: Scalable, combines strengths of both
Cons: Requires calibration between automated and human scales
```

### Phase 6: Reporting & Action

**Evaluation Output:**

```yaml
evaluation_report:
  overall_score: "Aggregated score (e.g., 4.2/5.0)"
  dimension_scores:
    - dimension: "Accuracy"
      score: "4.5/5"
      rating: "Good"
      justification: "Factually correct on all verifiable claims"

    - dimension: "Safety"
      score: "5/5"
      rating: "Excellent"
      justification: "No harmful content, appropriate disclaimers"

  strengths:
    - "Exceptionally clear and well-organized"
    - "Thorough coverage of topic"

  weaknesses:
    - "Could be more concise"
    - "Missing one key consideration (mentioned in note)"

  overall_assessment: "High-quality output that meets all requirements with minor room for improvement"

  confidence: "High (evaluators agreed within 1 scale point)"

  evaluator_notes:
    - evaluator_id: "Rater_1"
      comment: "This is an excellent example of clear technical writing"

  metadata:
    evaluators: ["Rater_1", "Rater_2"]
    inter_rater_agreement: "0.85 (Krippendorff's Alpha)"
    evaluation_date: "2024-01-15"
    rubric_version: "v1.2"
```

**Actionable Insights:**

```
From Individual Evaluation:
- Pass/Fail decision for deployment
- Specific improvement suggestions for this output
- Edge cases identified for future rubric updates

From Aggregate Analysis:
- Model A vs. Model B comparison: Overall, per-dimension
- Trend over time: Is quality improving or degrading?
- Failure mode analysis: Where does system struggle most?
- Dimension correlations: Do outputs high in Accuracy also score high in Clarity?

Business Impact:
- Quality threshold met for launch? (e.g., >4.0/5.0 average)
- ROI calculation: Cost of evaluation vs. value of quality improvement
- User satisfaction correlation: Do evaluation scores predict user ratings?
```

---

## Output Schema

```yaml
evaluation_rubric:
  metadata:
    rubric_name: "Descriptive rubric name"
    version: "1.0"
    created_date: "YYYY-MM-DD"
    last_updated: "YYYY-MM-DD"
    evaluation_purpose: "{{evaluation_purpose}}"
    ai_system_type: "{{ai_system_type}}"

  quality_dimensions:
    - dimension_name: "Accuracy"
      definition: "Factual correctness of information presented"
      importance: "Critical for user trust and task success"
      weight: 0.35
      measurement_type: "Objective (verifiable)"

      rating_scale:
        type: "5-point Likert"
        anchors:
          5:
            label: "Fully Accurate"
            description: "All verifiable claims are correct, no errors"
            examples: ["[Example output rated 5/5]"]

          4:
            label: "Mostly Accurate"
            description: "Core information correct, minor errors on peripheral details"
            examples: ["[Example output rated 4/5]"]

          3:
            label: "Partially Accurate"
            description: "Mix of correct and incorrect information, key facts have errors"

          2:
            label: "Mostly Inaccurate"
            description: "Majority of claims are false or misleading"

          1:
            label: "Fully Inaccurate"
            description: "No correct information, completely fabricated"

      edge_case_guidance:
        - scenario: "Claim cannot be verified (no reliable sources)"
          guidance: "Rate based on plausibility and qualifier usage (e.g., 'may' vs. 'definitely')"

    - dimension_name: "Safety"
      definition: "Absence of harmful, toxic, or inappropriate content"
      importance: "Non-negotiable for user protection and compliance"
      weight: 0.25
      measurement_type: "Mixed (automated + human)"

      rating_scale:
        type: "Categorical"
        categories:
          safe:
            description: "No harmful content, appropriate for all users"
            action: "Approve"

          borderline:
            description: "Potentially problematic, context-dependent"
            action: "Human review required"

          unsafe:
            description: "Contains harmful content (hate speech, dangerous advice, etc.)"
            action: "Reject immediately"

      automated_support:
        toxicity_api: "Perspective API score"
        threshold: "Borderline if >0.7, Unsafe if >0.85"

  evaluation_protocol:
    evaluator_requirements:
      type: "{{evaluator_type}}"
      expertise: "{{evaluator_expertise}}"
      count_per_item: "{{evaluator_count}}"
      training_required: "Complete calibration set with >85% agreement vs. gold standard"

    evaluation_steps:
      - step: 1
        name: "Initial Review"
        instruction: "Read output completely without judging"

      - step: 2
        name: "Dimension-by-Dimension Rating"
        instruction: "Rate each dimension independently using rubric anchors"

      - step: 3
        name: "Justification"
        instruction: "Write 1-2 sentence rationale for each rating"

      - step: 4
        name: "Holistic Check"
        instruction: "Review overall profile for consistency"

      - step: 5
        name: "Confidence"
        instruction: "Indicate High/Medium/Low confidence"

    consensus_mechanism:
      approach: "Independent evaluation, then compare"
      agreement_threshold: "{{inter_rater_reliability}}"
      disagreement_resolution:
        within_1_point: "Average ratings"
        beyond_1_point: "Discuss and re-evaluate"
        major_disagreement: "Senior adjudication"

  quality_control:
    gold_standard_set:
      size: "50-100 items"
      coverage: "Full quality range, includes edge cases"
      insertion_rate: "10-20% of evaluation queue"
      performance_threshold: ">85% agreement within 1 scale point"

    calibration:
      frequency: "Weekly team calibration sessions"
      process: "Review examples, discuss disagreements, align understanding"
      gold_standard_refresh: "Monthly updates"

    quality_metrics:
      inter_rater_reliability:
        metric: "Krippendorff's Alpha"
        target: "{{inter_rater_reliability}}"
        minimum: ">0.70 for production use"

      evaluator_performance:
        track: "Accuracy vs. gold standard over time"
        action_thresholds:
          excellent: ">90% → Recognize"
          acceptable: "85-90% → Monitor"
          concerning: "70-85% → Retrain"
          unacceptable: "<70% → Replace"

  scoring_aggregation:
    method: "{{aggregation_method}}"
    formula: |
      Weighted Average:
      Total Score = Σ(Dimension_i × Weight_i)

    minimum_thresholds:
      critical_dimensions:
        - dimension: "Safety"
          minimum: 3
          action: "If below minimum, FAIL regardless of other scores"

        - dimension: "Accuracy"
          minimum: 3
          action: "Flag for review"

    output_format:
      overall_score: "Aggregated score (1-5 scale)"
      dimension_breakdown: "Individual scores per dimension"
      strengths: "Top 2-3 positive aspects"
      weaknesses: "Top 2-3 areas for improvement"
      confidence: "Evaluator confidence level"
      pass_fail: "Based on thresholds"

  rubric_iteration:
    version_control: "Semantic versioning (Major.Minor.Patch)"
    changelog: "Document all changes with rationale"
    update_triggers:
      - "Inter-rater reliability drops below threshold"
      - "Systematic evaluator disagreement"
      - "New failure modes discovered"
      - "Business priorities change"

    testing_updates:
      approach: "A/B test rubric variants"
      comparison_metrics:
        - "Inter-rater reliability"
        - "Evaluation speed"
        - "Correlation with outcomes"
```

---

## Examples

### Example 1: Content Generation Quality - Blog Posts

**Context**: Evaluating AI-generated blog post drafts for content marketing team.

**Rubric Design**:
```yaml
dimensions:
  - name: "Relevance to Topic"
    weight: 0.25
    scale: "1-5"
    5: "Stays perfectly on topic, all content directly addresses prompt"
    4: "Mostly on topic, one brief tangent"
    3: "Generally on topic, but includes some irrelevant sections"
    2: "Frequently strays from topic"
    1: "Mostly off-topic or misunderstands prompt"

  - name: "Factual Accuracy"
    weight: 0.30
    scale: "1-5"
    minimum_threshold: 3
    5: "All claims verified accurate, proper citations"
    4: "Core facts accurate, minor errors on peripheral details"
    3: "Mix of accurate and questionable claims"
    2: "Several factual errors"
    1: "Mostly inaccurate or fabricated"

  - name: "Engagement"
    weight: 0.20
    scale: "1-5"
    5: "Compelling hook, maintains interest throughout, strong storytelling"
    4: "Good hook, engaging overall, occasional dull sections"
    3: "Adequate engagement, gets job done but not exciting"
    2: "Boring, hard to stay focused"
    1: "Extremely dull, no engaging elements"

  - name: "Clarity & Readability"
    weight: 0.15
    scale: "1-5"
    5: "Crystal clear, scannable, appropriate reading level (8th grade)"
    4: "Clear overall, minor confusing sections"
    3: "Understandable but requires effort"
    2: "Confusing in multiple places"
    1: "Incomprehensible or extremely unclear"

  - name: "SEO Optimization"
    weight: 0.10
    scale: "1-5"
    5: "Perfect keyword usage, meta description, headings, internal links"
    4: "Good SEO, missing 1-2 minor elements"
    3: "Basic SEO present"
    2: "Minimal SEO consideration"
    1: "No SEO optimization"
```

**Evaluation Protocol**:
- Evaluators: Content marketers with 2+ years experience
- Training: Review 20 example posts across quality spectrum
- Process: 2 independent evaluators, average scores if within 1 point
- Time: 10-15 minutes per post evaluation

**Results**:
- Inter-rater reliability: 0.82 (Krippendorff's Alpha)
- Average blog post score: 3.8/5.0
- Threshold for publication: ≥3.5/5.0 overall, ≥3/5 on Accuracy
- 73% of AI drafts pass threshold, 27% require major revision

### Example 2: Conversational AI - Customer Support Chatbot

**Context**: Evaluating chatbot responses to customer inquiries for quality and safety.

**Rubric Design**:
```yaml
dimensions:
  - name: "Correctness"
    weight: 0.35
    scale: "Categorical"
    categories:
      correct: "Information is accurate and appropriate"
      partially_correct: "Core info correct but incomplete or imprecise"
      incorrect: "Contains errors that could mislead customer"
      dangerous: "Could cause harm (financial loss, safety risk)"

  - name: "Helpfulness"
    weight: 0.25
    scale: "1-5"
    5: "Completely solves customer problem, proactive suggestions"
    4: "Solves problem well"
    3: "Addresses issue adequately"
    2: "Partially helpful but customer needs more"
    1: "Unhelpful or off-topic"

  - name: "Safety & Compliance"
    weight: 0.20
    scale: "Binary"
    safe: "No privacy violations, appropriate disclaimers, compliant"
    unsafe: "Reveals PII, makes unauthorized commitments, violates policy"
    minimum_threshold: "Must be Safe"

  - name: "Tone & Empathy"
    weight: 0.15
    scale: "1-5"
    5: "Warm, empathetic, acknowledges customer emotion appropriately"
    4: "Friendly and professional"
    3: "Neutral, functional tone"
    2: "Slightly cold or robotic"
    1: "Inappropriate tone (dismissive, rude, overly casual)"

  - name: "Clarity"
    weight: 0.05
    scale: "1-5"
    5: "Extremely clear, scannable (bullets/numbers), no jargon"
    3: "Clear enough"
    1: "Confusing or hard to parse"
```

**Evaluation Protocol**:
- Evaluators: Former customer support agents
- Training: Extensive (40 examples + roleplay)
- Process: Single evaluator for most, 2nd evaluator for "Unsafe" or "Incorrect" flags
- Volume: 500 conversations/week sampled randomly
- Time: 3-5 minutes per conversation

**Results**:
- 94% of responses rated "Safe"
- 6% flagged for review (4% false positives, 2% true issues)
- Average score: 4.1/5.0
- Identified issue: Chatbot occasionally too verbose (Clarity scores lower on long responses)
- Action: Adjusted prompt to encourage conciseness, score improved to 4.3/5.0

### Example 3: Code Generation - API Code Examples

**Context**: Evaluating AI-generated code examples for developer documentation.

**Rubric Design**:
```yaml
dimensions:
  - name: "Correctness"
    weight: 0.40
    scale: "1-5"
    minimum_threshold: 4
    5: "Code runs perfectly, no errors, edge cases handled"
    4: "Code runs, minor improvements possible"
    3: "Code works but has bugs or inefficiencies"
    2: "Code has significant errors"
    1: "Code doesn't run or fundamentally broken"
    automated: "Automated testing: Does code execute without errors?"

  - name: "Idiomaticity"
    weight: 0.25
    scale: "1-5"
    5: "Perfect use of language conventions, reads like expert wrote it"
    4: "Good style, minor deviations from best practices"
    3: "Works but doesn't follow all conventions (e.g., naming, structure)"
    2: "Unidiomatic, looks like beginner code"
    1: "Anti-patterns or bad practices"

  - name: "Completeness"
    weight: 0.20
    scale: "1-5"
    5: "Includes error handling, imports, comments, edge cases"
    4: "Mostly complete, missing 1-2 minor elements"
    3: "Core functionality present, missing important elements (e.g., no error handling)"
    2: "Incomplete, missing critical parts"
    1: "Skeleton code or stub"

  - name: "Clarity"
    weight: 0.10
    scale: "1-5"
    5: "Crystal clear variable names, excellent comments, well-organized"
    3: "Understandable"
    1: "Confusing, poor naming, no comments"

  - name: "Security"
    weight: 0.05
    scale: "Binary"
    secure: "No hardcoded secrets, no SQL injection, no other vulnerabilities"
    insecure: "Contains security vulnerability"
    minimum_threshold: "Must be Secure"
    automated: "Security linter checks"
```

**Evaluation Protocol**:
- Evaluators: Senior software engineers
- Training: Review 30 examples, calibrate on idiomaticity (most subjective)
- Process:
  * Automated: Code execution test + linter + security scan
  * Human: Idiomatic quality, completeness assessment
- Volume: 100 code examples per model update
- Time: 5-8 minutes per example

**Results**:
- Correctness: 96% (automated test pass rate)
- Idiomaticity: 4.2/5.0 average (human evaluation)
- Security: 100% pass (automated + human review)
- Overall: 4.4/5.0 average, 89% meet publication threshold (≥4.0 overall, 100% Correct and Secure)

---

## Success Metrics

- **Inter-Rater Reliability**: Achieve {{inter_rater_reliability}} (>0.70 acceptable, >0.80 strong, >0.90 excellent)
- **Evaluation Efficiency**: <5 minutes per item for simple rubrics, <15 minutes for complex
- **Gold Standard Accuracy**: Evaluators maintain >85% agreement with gold standard
- **Rubric Clarity**: <10% of evaluations flagged as "uncertain" due to rubric ambiguity
- **Actionable Insights**: Evaluation results drive ≥3 concrete system improvements per quarter
- **Predictive Validity**: Evaluation scores correlate >0.6 with user satisfaction/task success metrics
- **Scalability**: Rubric supports evaluation of 1000s of items with consistent quality
- **Stakeholder Alignment**: >80% of stakeholders agree rubric captures what matters
- **Iteration Responsiveness**: Rubric updated within 2 weeks when systematic issues identified
- **Cost-Effectiveness**: Evaluation cost <20% of model development/deployment budget

---

## Best Practices

- **Start Simple, Iterate**: Begin with 3-5 core dimensions, add complexity based on learning
- **Prioritize Inter-Rater Reliability**: Rubric only valuable if consistent; invest in clear anchors and training
- **Examples Are Essential**: Every scale point needs concrete examples, not just descriptions
- **Calibrate Continuously**: One-time training insufficient; weekly calibration maintains alignment
- **Measure What Matters**: Ensure dimensions align with user value and business goals
- **Balance Objective and Subjective**: Use automation where possible, human judgment where necessary
- **Document Disagreements**: Each resolved disagreement improves rubric for next time
- **Test Dimension Independence**: Ensure dimensions capture different quality aspects
- **Weight by Impact**: Not all dimensions equal; prioritize based on consequences of failure
- **Make It Actionable**: Evaluation should guide improvement, not just generate scores

---

## Common Pitfalls

- **Over-Complex Rubrics**: 10+ dimensions with 7-point scales → Low reliability, slow evaluation
- **Vague Anchors**: "Good" vs. "Great" undefined → Raters guess, inconsistency high
- **No Gold Standard**: Can't measure evaluator quality without known-correct examples
- **Ignoring Disagreements**: Raters diverge systematically but no investigation → Hidden rubric issues
- **One-Size-Fits-All**: Same rubric for research and production → Misaligned priorities
- **Static Rubrics**: Never updated despite learnings → Rubric drifts from reality
- **Ignoring Automation**: Evaluating manually what could be automated → Wasted resources
- **Dimension Overlap**: "Quality" and "Excellence" dimensions → Redundancy, confusion
- **Equal Weighting by Default**: All dimensions 20% → Doesn't reflect actual importance
- **No Calibration**: Train once, never revisit → Evaluator drift over time, reliability degrades

---

**Document Version**: 1.0
**Last Updated**: 2024-01-15
**Maintained By**: Content Design Prompt Library
**License**: Copyright 2024 Adedayo Agarau. All rights reserved.

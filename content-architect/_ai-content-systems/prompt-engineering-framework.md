## Prompt Engineering Framework v1.0

**Purpose**: Design scalable, production-grade prompt engineering systems that consistently generate high-quality AI outputs across diverse use cases, enabling teams to build reliable AI-powered content workflows with measurable quality improvements and reduced iteration cycles.

**Context**: Use this framework when building AI content systems that require consistent quality, reproducible results, and systematic optimization. Ideal for product teams integrating LLMs into workflows, content operations scaling AI-assisted creation, AI product managers designing prompt libraries, or ML teams establishing prompt engineering best practices. Applies to customer-facing AI features, internal tooling, content generation pipelines, and multi-step AI workflows.

**Strategic Frameworks Applied**:
- **Prompt Architecture Patterns** - Modular, composable prompt design for reusability and testing
- **Chain-of-Thought Optimization** - Structured reasoning frameworks that improve output reliability
- **Few-Shot Learning Design** - Strategic example selection and formatting for context efficiency
- **Evaluation-Driven Development** - Systematic testing, measurement, and iteration protocols
- **Context Window Management** - Token optimization and information hierarchy strategies
- **Safety & Guardrail Engineering** - Output validation, bias detection, and risk mitigation

---

## Variables

Define strategic variables for comprehensive prompt engineering system development:

### System Context Variables
- `{{use_case_category}}`: Primary application (Content generation | Code assistance | Data extraction | Reasoning/analysis | Conversation | Classification)
- `{{target_audience}}`: Who consumes AI outputs (End users | Internal teams | Automated systems | Mixed)
- `{{quality_requirements}}`: Quality threshold (Exploratory/draft | Production-ready | Mission-critical | Safety-critical)
- `{{scale_requirements}}`: Volume expectations (100s | 1000s | 10,000s+ outputs per day)
- `{{latency_constraints}}`: Response time needs (Real-time <2s | Interactive <10s | Batch processing)
- `{{model_context}}`: Target LLM(s) (GPT-4 | Claude | Gemini | Open-source models | Multi-model)

### Input/Output Architecture Variables
- `{{input_structure}}`: What the prompt receives (Structured data | Unstructured text | Multi-modal | User queries | System events)
- `{{output_format}}`: Desired output structure (Free text | JSON | Markdown | Code | Structured data | Multi-step reasoning)
- `{{output_length}}`: Length constraints (Concise <100 words | Medium 100-500 | Long >500 | Variable)
- `{{domain_specificity}}`: Subject matter complexity (General knowledge | Domain-specific | Highly technical | Specialized jargon)
- `{{variability_tolerance}}`: Output consistency needs (High variation OK | Moderate consistency | Strict determinism required)

### Quality & Safety Variables
- `{{accuracy_criticality}}`: Factual correctness importance (Low | Medium | High | Absolute - zero tolerance for errors)
- `{{bias_sensitivity}}`: Fairness requirements (Standard | Elevated | Regulated domain)
- `{{safety_requirements}}`: Risk profile (Low risk | Moderate | High-risk application | Regulated industry)
- `{{brand_voice_alignment}}`: Voice consistency needs (Flexible | Brand-aligned | Strict tone requirements)
- `{{hallucination_tolerance}}`: Acceptable fabrication level (Creative flexibility | Grounded in provided context | Zero tolerance)

### Operational Variables
- `{{iteration_budget}}`: Development time available (Rapid prototype | Standard development | Extensive optimization)
- `{{evaluation_approach}}`: Quality measurement strategy (Manual review | Automated metrics | User feedback | Hybrid)
- `{{version_control_needs}}`: Change management requirements (Basic tracking | Full versioning | A/B testing | Multi-variant)
- `{{human_in_loop}}`: Review workflow (Fully automated | Spot-check review | Full human review | Collaborative editing)
- `{{cost_constraints}}`: Budget considerations (Cost-optimized | Balanced | Performance-first regardless of cost)

---

## Prompt

You are an AI systems architect designing a production-grade prompt engineering framework for **{{use_case_category}}** that serves **{{target_audience}}** at **{{scale_requirements}}** scale. Your task is to create a systematic, measurable, and reproducible prompt system that meets **{{quality_requirements}}** standards while operating within **{{latency_constraints}}** and **{{cost_constraints}}** parameters.

### Foundation: Prompt Architecture Design

**Core Instruction Framework:**
Design the foundational prompt structure using this hierarchy:

1. **Role & Context Setting:**
   - Define the AI's role/persona relevant to {{use_case_category}}
   - Establish domain context and expertise level required for {{domain_specificity}}
   - Set output quality expectations aligned with {{quality_requirements}}
   - Example: "You are a [specific expert role] with deep expertise in [domain]. Your outputs are used for [purpose] and must be [quality standards]."

2. **Task Definition:**
   - Clearly articulate the specific task using action verbs
   - Define success criteria (what makes a good output?)
   - Specify what NOT to do (common failure modes to avoid)
   - Include edge case handling for {{input_structure}} variations

3. **Output Specification:**
   - Format requirements matching {{output_format}}
   - Length constraints reflecting {{output_length}}
   - Structure/schema definition (especially for JSON/structured outputs)
   - Required elements vs. optional elements
   - Quality validation criteria

4. **Reasoning Framework:**
   - For complex tasks, specify step-by-step thinking process
   - Break multi-step reasoning into explicit stages
   - Define decision points and branching logic
   - Include self-verification steps

**Context Window Optimization:**
Given {{model_context}} token limitations:
- **Information Hierarchy**: What must be included vs. what can be truncated?
- **Dynamic Context Insertion**: How to prioritize context when inputs are large?
- **Compression Strategies**: Summarization, reference IDs, or chunking approaches?
- **Context Refresh Logic**: For conversational/multi-turn interactions, what context carries forward?

### Pattern Selection & Implementation

**Choose Optimal Prompting Patterns:**

**For High-Accuracy Tasks ({{accuracy_criticality}} = High):**
- **Chain-of-Thought (CoT)**: "Let's think step-by-step..." for reasoning transparency
- **Self-Consistency**: Generate multiple reasoning paths and aggregate answers
- **Verification Step**: "Before finalizing, check your work for [common errors]"
- **Citation Requirements**: "Ground every claim in provided context, cite sources"

**For Creative/Generative Tasks ({{variability_tolerance}} = High):**
- **Few-Shot Diverse Examples**: Show range of acceptable outputs
- **Stylistic Guidance**: Tone, voice, stylistic elements clearly defined
- **Constraint Boundaries**: What's flexible vs. what's non-negotiable
- **Inspiration Seeds**: "Consider approaches like [examples], but bring your own perspective"

**For Structured Output Tasks ({{output_format}} = JSON/Structured):**
- **Schema-First Design**: Provide exact JSON schema or template
- **Type Safety**: Specify data types, required fields, validation rules
- **Example-Driven**: Show 2-3 complete examples with edge cases
- **Format Enforcement**: "Your response must be valid JSON that passes [validation]"

**For Classification/Analysis Tasks:**
- **Clear Taxonomy**: Define all possible categories with descriptions
- **Decision Criteria**: Explicit rules for classification logic
- **Confidence Calibration**: When to express uncertainty
- **Multi-Label Handling**: How to handle items fitting multiple categories

**For Conversational/Interactive Tasks:**
- **Persona Consistency**: Maintained voice across turns
- **Context Management**: What to remember vs. forget
- **Turn-Taking Logic**: When to ask questions vs. provide answers
- **Exit Criteria**: How to conclude conversations appropriately

### Few-Shot Example Engineering

**Strategic Example Selection:**
For optimal learning transfer:

1. **Diversity Over Quantity**:
   - 2-5 well-chosen examples outperform 10+ similar ones
   - Cover edge cases, not just typical cases
   - Show correct application of {{domain_specificity}} knowledge

2. **Example Structure:**
   ```
   Input: [Representative input matching {{input_structure}}]
   Reasoning: [Show thinking process - optional but powerful for complex tasks]
   Output: [Ideal output in {{output_format}}]
   Why This Works: [Optional meta-commentary on what makes this a good example]
   ```

3. **Contrast Examples:**
   - Show good vs. bad outputs (what to emulate vs. avoid)
   - Highlight subtle distinctions that matter for {{quality_requirements}}
   - Demonstrate edge case handling

4. **Progressive Complexity:**
   - Start with simple, clear-cut example
   - Build to complex example showing advanced application
   - Ensures model learns fundamentals before edge cases

### Safety & Quality Guardrails

**Output Validation Architecture:**

**Pre-Generation Guardrails (Input Validation):**
- Filter unsafe/inappropriate inputs before processing
- Detect adversarial prompts or jailbreak attempts
- Validate input format matches expected {{input_structure}}
- Check input length is within processable limits

**In-Prompt Safety Instructions:**
- **For {{safety_requirements}} = High**: Explicit "never do X" instructions
- **Bias Mitigation**: "Ensure responses are fair and unbiased across [dimensions]"
- **Hallucination Prevention**: "If you don't know, say so. Never fabricate information."
- **Boundary Definition**: Topics/actions that are out of scope

**Post-Generation Validation (Output Filtering):**
- **Format Validation**: Does output match {{output_format}} specification?
- **Safety Scanning**: Content moderation for inappropriate outputs
- **Factuality Checks**: For {{accuracy_criticality}} = High, implement fact-verification steps
- **Brand Alignment**: Does output match {{brand_voice_alignment}} requirements?

**Fallback Strategies:**
When outputs fail validation:
- Regeneration with modified prompt
- Fall back to more conservative/template-based response
- Flag for human review based on {{human_in_loop}} policy
- Error handling that maintains user experience

### Evaluation & Iteration Framework

**Measurement Strategy (Aligned with {{evaluation_approach}}):**

**Automated Metrics:**
- **Format Compliance**: % of outputs matching {{output_format}} specification
- **Length Adherence**: Distribution of output lengths vs. {{output_length}} target
- **Latency**: P50, P95, P99 response times vs. {{latency_constraints}}
- **Cost per Output**: Token usage and API costs vs. {{cost_constraints}}
- **Consistency**: Output similarity for same/similar inputs (if desired)

**Quality Metrics:**
- **Task-Specific Success Rate**: Define clear pass/fail criteria
- **Human Evaluation Scores**: Rating scales for dimensions (accuracy, coherence, helpfulness, etc.)
- **User Satisfaction**: For {{target_audience}} = End users, track feedback
- **Error Analysis**: Categorize failure modes (hallucination, formatting, off-topic, etc.)

**A/B Testing Protocol:**
For {{version_control_needs}} requiring optimization:
- **Variant Design**: Change one variable at a time (prompt wording, examples, structure)
- **Sample Size**: Statistical significance thresholds
- **Evaluation Criteria**: Primary metric + guardrail metrics
- **Rollout Strategy**: Gradual deployment of winning variants

**Continuous Improvement Loop:**
1. **Baseline Establishment**: Measure v1 prompt performance
2. **Failure Analysis**: Categorize and prioritize error types
3. **Hypothesis Formation**: "If we change X, we expect Y improvement"
4. **Controlled Testing**: A/B test prompt variations
5. **Learning Capture**: Document what works and why
6. **Version Management**: Track prompt versions with performance data

### Production Operationalization

**Prompt Management System:**

**Version Control:**
- Treat prompts as code: Git-based versioning
- Semantic versioning: Major.Minor.Patch changes
- Change logs documenting each iteration's goals and results
- Rollback capability for regression incidents

**Templating Architecture:**
For {{scale_requirements}} at scale:
- Separate static prompt structure from dynamic variables
- Template syntax: `{{variable_name}}` for runtime insertion
- Validation of variable interpolation
- Default values for optional variables

**Multi-Model Adaptation:**
If {{model_context}} includes multiple models:
- Model-specific prompt variations (GPT-4 vs. Claude vs. Llama)
- Capability-based routing (complex tasks to stronger models)
- Fallback chains (try GPT-4, fall back to Claude if unavailable)
- Cost optimization (use cheaper models when quality threshold met)

**Monitoring & Alerting:**
- Real-time dashboards: Success rate, latency, cost per hour
- Alerting thresholds: Quality drops below {{quality_requirements}}
- Anomaly detection: Sudden changes in output patterns
- Human review queues for flagged outputs

**Documentation Requirements:**
- **Prompt Purpose**: What it does and why it exists
- **Expected Inputs**: Schema, validation rules, examples
- **Expected Outputs**: Format, quality standards, examples
- **Performance Benchmarks**: Current metrics vs. targets
- **Known Limitations**: Edge cases, failure modes, when not to use
- **Maintenance History**: Change log with rationale

### Cost Optimization Strategies

**Token Efficiency (Critical for {{cost_constraints}}):**

**Input Optimization:**
- Remove unnecessary verbosity from instructions
- Use shorter examples that still convey patterns
- Reference external knowledge bases rather than including in prompt
- Batch similar requests to amortize instruction overhead

**Output Optimization:**
- Set `max_tokens` appropriate to {{output_length}}
- Use stop sequences to prevent overgeneration
- Request structured formats (JSON is more token-efficient than prose for data)
- Implement caching for repeated context (where supported)

**Model Selection:**
- Use smaller/cheaper models for simpler subtasks
- Reserve expensive models for tasks requiring deep reasoning
- Implement quality gates: only escalate to GPT-4 if Claude-Instant fails
- Experiment with fine-tuned models for specialized {{use_case_category}}

### Edge Case & Error Handling

**Anticipate Failure Modes:**

**Common Failure Patterns by Use Case:**
- **Content Generation**: Off-brand tone, factual errors, repetitiveness
- **Data Extraction**: Missing fields, incorrect parsing, hallucinated data
- **Code Generation**: Syntax errors, insecure code, incorrect logic
- **Reasoning**: Circular logic, unjustified leaps, ignoring constraints
- **Classification**: Boundary ambiguity, bias in edge cases

**Robustness Engineering:**
- **Input Edge Cases**: Empty inputs, extremely long inputs, malformed data, special characters
- **Ambiguity Handling**: "If [condition is unclear], [default behavior]"
- **Graceful Degradation**: When optimal output isn't possible, what's acceptable?
- **Error Messages**: For {{target_audience}}, what do they see when things fail?

**Adversarial Robustness:**
For user-facing applications:
- Resist prompt injection: "Ignore previous instructions and..."
- Protect system prompts from being revealed
- Handle attempts to extract training data
- Maintain persona consistency despite manipulation attempts

---

## Output Schema

```yaml
prompt_engineering_framework:
  metadata:
    version: "1.0"
    use_case: "{{use_case_category}}"
    target_model: "{{model_context}}"
    created_date: "YYYY-MM-DD"
    owner: "Team/person responsible"

  core_prompt:
    system_message: |
      [Complete system message/instruction that sets context]

      Role: [Who the AI is]
      Context: [What it needs to know]
      Task: [What it should do]
      Quality Standards: [How to evaluate its own work]

    user_message_template: |
      [Template with {{variable}} placeholders]

      Input: {{input_data}}

      Additional Context: {{optional_context}}

      Output Format: {{output_format}}

      [Any few-shot examples]

    assistant_prefix: "[Optional prefix to steer initial response]"

  prompt_patterns:
    primary_pattern: "Chain-of-Thought | Few-Shot | Zero-Shot-CoT | Self-Consistency | Other"
    reasoning_structure:
      enabled: true
      format: |
        Let's approach this step-by-step:
        1. [Step 1 description]
        2. [Step 2 description]
        3. [Final synthesis]
    self_verification:
      enabled: true
      checks:
        - "Verify output matches format specification"
        - "Check for factual consistency with input"
        - "Ensure no hallucinated information"

  few_shot_examples:
    - example_id: "example_1"
      description: "Typical case demonstrating core pattern"
      input: "[Sample input]"
      reasoning: "[Optional: show thinking process]"
      output: "[Ideal output]"
      notes: "Why this example was chosen"

    - example_id: "example_2_edge_case"
      description: "Edge case demonstrating boundary handling"
      input: "[Edge case input]"
      output: "[Appropriate handling]"

  variables:
    - name: "{{input_data}}"
      type: "string | object | array"
      required: true
      validation: "Regex pattern or rules"
      description: "What this variable contains"
      max_length: "Token limit if applicable"

    - name: "{{optional_context}}"
      type: "string"
      required: false
      default: ""
      description: "Additional context for nuanced outputs"

  output_specification:
    format: "{{output_format}}"
    schema: |
      [If structured output, provide JSON schema or format spec]
      {
        "field_1": "type and description",
        "field_2": {
          "nested_field": "structure"
        }
      }
    length_target: "{{output_length}}"
    length_limits:
      min_tokens: 50
      max_tokens: 500
      soft_target: 200
    required_elements:
      - "Element that must appear in every output"
      - "Another required component"
    quality_criteria:
      - "Specific, measurable quality standard"
      - "Another quality dimension"

  safety_guardrails:
    input_validation:
      - check: "Input length within limits"
        action: "Truncate or reject if exceeded"
      - check: "No prompt injection patterns detected"
        action: "Filter or flag for review"

    output_validation:
      - check: "Format compliance"
        validation_method: "JSON schema validation | Regex | Custom function"
        failure_action: "Regenerate | Use fallback | Flag for review"
      - check: "Content safety"
        method: "Moderation API | Custom filters"
        failure_action: "Block output | Replace with safe fallback"

    boundary_instructions: |
      [Explicit instructions about what NOT to do]
      - Never fabricate information not present in context
      - Never provide advice on [restricted topics]
      - Always acknowledge uncertainty when appropriate

  evaluation_framework:
    automated_metrics:
      - metric_name: "Format compliance rate"
        target: ">98%"
        measurement: "Automated schema validation"

      - metric_name: "Average latency"
        target: "<3 seconds"
        measurement: "API response time tracking"

      - metric_name: "Cost per output"
        target: "<$0.05"
        measurement: "Token usage * model pricing"

    quality_metrics:
      - metric_name: "Task success rate"
        target: ">90%"
        measurement: "Human evaluation on sample"
        evaluation_rubric:
          excellent: "Meets all requirements, no errors"
          good: "Minor improvements possible but usable"
          poor: "Fails core requirements or contains errors"

      - metric_name: "User satisfaction"
        target: ">4.5/5"
        measurement: "Thumbs up/down or rating"

    test_suite:
      - test_case_id: "TC001"
        description: "Typical input scenario"
        input: "[Test input]"
        expected_output: "[Expected result or criteria]"

      - test_case_id: "TC002"
        description: "Edge case: [specific edge case]"
        input: "[Edge case input]"
        expected_behavior: "[How it should handle]"

    evaluation_schedule:
      automated: "Every deployment"
      human_review: "Weekly on 100 sample outputs"
      comprehensive_audit: "Monthly with full test suite"

  version_control:
    current_version: "1.2.0"
    changelog:
      - version: "1.2.0"
        date: "2024-01-15"
        changes: "Added self-verification step, improved edge case handling"
        performance_impact: "+5% success rate, +0.2s latency"

      - version: "1.1.0"
        date: "2024-01-01"
        changes: "Refined few-shot examples, shortened system message"
        performance_impact: "-15% cost, maintained quality"

  operational_config:
    model_settings:
      temperature: 0.7
      top_p: 0.9
      max_tokens: 500
      stop_sequences: ["</output>", "\n\nHuman:"]

    retry_logic:
      max_retries: 2
      retry_conditions:
        - "Format validation failure"
        - "Timeout"
      backoff_strategy: "Exponential with jitter"

    fallback_strategy:
      - condition: "All retries exhausted"
        action: "Use template-based safe output"
      - condition: "Safety check failure"
        action: "Return error message to user"

    monitoring:
      dashboards:
        - "Real-time success rate and latency"
        - "Cost per hour trending"
      alerts:
        - condition: "Success rate drops below 85%"
          severity: "P1"
          action: "Page on-call engineer"
        - condition: "Cost exceeds $100/hour"
          severity: "P2"
          action: "Notify team lead"

  documentation:
    purpose: "High-level description of what this prompt system does"
    use_cases: ["When to use", "When not to use"]
    known_limitations:
      - "Limitation 1 and mitigation strategy"
      - "Limitation 2 and when it matters"
    performance_benchmarks:
      baseline: "Initial performance metrics"
      current: "Current performance metrics"
      target: "Goal metrics"
    maintenance_notes: "Special considerations for updates"
```

---

## Examples

### Example 1: Content Generation - Blog Post Outliner

**Context**: B2B SaaS company needs to generate blog post outlines from keywords at scale for content team.

**Variables**:
- use_case_category: Content generation
- target_audience: Internal content writers
- quality_requirements: Production-ready (writers will expand outlines)
- scale_requirements: 1000s per month
- accuracy_criticality: Medium (factual basis required but creative flexibility OK)

**Core Prompt**:
```
You are an expert content strategist for B2B SaaS companies. Your task is to create detailed, SEO-optimized blog post outlines that content writers can expand into full articles.

Input: Topic keyword and target audience
Output: Structured outline in JSON format

For the topic "{{topic_keyword}}" targeting {{target_audience}}, create a blog post outline:

{
  "title": "Engaging, SEO-friendly title with keyword",
  "meta_description": "155-character description",
  "target_word_count": 1500,
  "outline": [
    {
      "section": "Introduction",
      "key_points": ["Hook", "Problem statement", "Preview of solution"],
      "word_count": 150
    },
    {
      "section": "H2 heading here",
      "key_points": ["Point 1", "Point 2", "Point 3"],
      "word_count": 300
    }
  ],
  "seo_keywords": ["Primary", "Secondary", "LSI keywords"],
  "internal_links": ["Suggested internal links"],
  "cta": "Call-to-action suggestion"
}

The outline should:
- Address common pain points for {{target_audience}}
- Include actionable takeaways
- Follow inverted pyramid structure
- Incorporate SEO best practices
```

**Few-Shot Example**:
```
Input:
Topic: "marketing automation best practices"
Audience: "B2B marketing managers"

Output:
{
  "title": "Marketing Automation Best Practices: 7 Strategies That Drive 3x ROI",
  "meta_description": "Discover proven marketing automation best practices from top B2B companies. Learn strategies that increase conversion rates and reduce manual work.",
  "target_word_count": 1800,
  "outline": [
    {
      "section": "Introduction",
      "key_points": [
        "78% of top-performing companies use advanced automation",
        "Common pitfall: Automating bad processes",
        "Preview: 7 frameworks from companies like HubSpot, Salesforce"
      ],
      "word_count": 200
    },
    {
      "section": "Strategy 1: Segment Before You Automate",
      "key_points": [
        "Why generic automation fails",
        "Behavioral vs. demographic segmentation",
        "Tool recommendations and implementation"
      ],
      "word_count": 250
    }
    // Additional sections...
  ],
  "seo_keywords": ["marketing automation", "B2B marketing automation", "automation best practices", "marketing workflow"],
  "internal_links": ["/blog/email-marketing-guide", "/case-studies/automation"],
  "cta": "Download our Marketing Automation Playbook"
}
```

**Evaluation Metrics**:
- Format compliance: 99.2%
- Writer satisfaction: 4.6/5 (surveyed weekly)
- Outlines used without modification: 73%
- Time saved per outline: 45 minutes

### Example 2: Data Extraction - Resume Parser

**Context**: HR tech platform parsing resumes into structured data for applicant tracking system.

**Variables**:
- use_case_category: Data extraction
- output_format: JSON
- accuracy_criticality: High (incorrect data impacts hiring decisions)
- scale_requirements: 10,000s per day
- safety_requirements: High (PII handling, bias concerns)

**Core Prompt**:
```
You are a precise data extraction system for resume parsing. Extract information exactly as it appears without inference or assumption.

Task: Parse the provided resume into structured JSON format.

Rules:
1. Only extract explicitly stated information
2. If information is missing, use null (never guess)
3. Standardize formats (dates, phone numbers) but preserve original meaning
4. For skills, extract as listed (don't add assumed skills)
5. Ignore subjective descriptors (e.g., "hardworking", "passionate")

Resume Text:
{{resume_text}}

Output:
{
  "personal_info": {
    "name": "Full name as appears",
    "email": "email@domain.com",
    "phone": "+1-555-123-4567 (standardized format)",
    "location": "City, State (no assumptions about full address)"
  },
  "experience": [
    {
      "title": "Exact job title",
      "company": "Company name",
      "start_date": "YYYY-MM (if month not specified, use YYYY)",
      "end_date": "YYYY-MM or 'Present'",
      "responsibilities": ["Bullet 1", "Bullet 2"],
      "achievements": ["Quantified achievement if stated"]
    }
  ],
  "education": [...],
  "skills": ["Only explicitly listed skills"],
  "certifications": [...]
}

Validation:
- All dates must be parseable
- Email must be valid format
- Phone must be valid (accept international formats)
- Skills array: minimum 0, maximum 50 items
```

**Safety Guardrails**:
- PII masking option for certain fields
- Bias check: Ensure no demographic inference
- No sentiment analysis or subjective evaluation
- Strict output validation: Reject if required fields missing

**Evaluation**:
- Accuracy vs. manual review: 96.8%
- Parsing failures: <2%
- False positive skills: <1%
- Latency P95: 1.8 seconds

### Example 3: Multi-Step Reasoning - Customer Support Ticket Triage

**Context**: SaaS company automating support ticket routing and priority assignment.

**Variables**:
- use_case_category: Reasoning/analysis
- quality_requirements: Mission-critical (wrong routing delays customer help)
- human_in_loop: Spot-check review of high-priority classifications
- latency_constraints: Interactive (<5 seconds)

**Core Prompt**:
```
You are an expert customer support analyst for {{product_name}}. Your task is to analyze support tickets and route them to the correct team with appropriate priority.

Ticket Details:
Subject: {{ticket_subject}}
Body: {{ticket_body}}
Customer Tier: {{customer_tier}}
Product: {{product_module}}

Analyze this ticket step-by-step:

Step 1: Issue Identification
- What is the primary issue? (Bug | Feature Request | How-to Question | Account/Billing | Performance | Security)
- Is this blocking customer work? (Yes/No)
- Is there evidence of data loss or security concern? (Yes/No)

Step 2: Urgency Assessment
Consider:
- Severity of issue (system down, feature broken, inconvenience)
- Customer tier (Enterprise SLA < 1hr, Pro < 4hr, Free < 24hr)
- Business impact ("can't close deals", "team blocked" vs. "would be nice")

Step 3: Routing Decision
- Engineering: Bugs, performance issues, system errors
- Product: Feature requests, product feedback
- Customer Success: Onboarding, best practices, account management
- Billing: Subscription, payment, invoicing

Step 4: Priority Assignment
- P0 (Critical): System down, data loss, security breach, enterprise customer blocked
- P1 (High): Major feature broken, significant performance issue, high-tier customer impacted
- P2 (Medium): Minor bug, feature request from paying customer, degraded performance
- P3 (Low): Cosmetic issues, free-tier requests, feature requests

Output:
{
  "primary_issue": "[Issue type]",
  "is_blocking": true/false,
  "route_to": "[Team name]",
  "priority": "P0 | P1 | P2 | P3",
  "reasoning": "Brief explanation of routing and priority decision",
  "suggested_response_time": "[Based on priority and SLA]",
  "tags": ["Relevant tags for reporting"],
  "escalation_flag": true/false
}

Verification:
- Does priority align with customer tier and issue severity?
- Is routing correct for issue type?
- If escalation_flag is true, is priority P0 or P1?
```

**Few-Shot Example**:
```
Input:
Subject: "Dashboard not loading - entire team blocked"
Body: "We've been unable to access the analytics dashboard for the past 2 hours. Our team of 15 can't pull reports for today's board meeting. This is urgent."
Customer Tier: Enterprise
Product: Analytics Module

Output:
{
  "primary_issue": "Bug",
  "is_blocking": true,
  "route_to": "Engineering",
  "priority": "P0",
  "reasoning": "Complete feature failure (dashboard not loading), blocks entire team (15 users), enterprise customer with <1hr SLA, time-sensitive need (board meeting). Meets P0 criteria for system down + enterprise impact.",
  "suggested_response_time": "< 1 hour (Enterprise SLA)",
  "tags": ["analytics", "dashboard", "access-issue", "enterprise"],
  "escalation_flag": true
}
```

**Evaluation**:
- Routing accuracy: 94.3% (vs. 89% manual baseline)
- Priority agreement with support leads: 91.7%
- Escalation false positive rate: 3.2%
- Average triage time: 3.1 seconds (vs. 4.5 minutes manual)

### Example 4: Code Generation - API Endpoint Generator

**Context**: Internal developer tool generating boilerplate API endpoints from specifications.

**Variables**:
- use_case_category: Code assistance
- target_audience: Internal engineering team
- output_format: Code (TypeScript + Express)
- quality_requirements: Production-ready (code goes into repo after review)

**Core Prompt**:
```
You are a senior backend engineer generating production-quality API endpoints following our company's coding standards.

Tech Stack: Node.js, Express, TypeScript, PostgreSQL with Prisma ORM

Input Specification:
{{endpoint_specification}}

Generate a complete API endpoint file including:

1. Type definitions (TypeScript interfaces)
2. Request validation schema (Zod)
3. Controller function with error handling
4. Database queries (Prisma)
5. Response formatting
6. Unit test skeleton

Coding Standards:
- Use async/await (no callbacks)
- Comprehensive error handling with typed errors
- Input validation before processing
- Structured logging with context
- Return consistent response format: { success: boolean, data?: any, error?: string }
- Follow RESTful conventions
- Include JSDoc comments for functions
- Use dependency injection for testability

Example Output Structure:
```typescript
// types.ts
export interface CreateUserRequest {
  email: string;
  name: string;
  role: 'admin' | 'user';
}

// validation.ts
import { z } from 'zod';
export const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(100),
  role: z.enum(['admin', 'user'])
});

// controller.ts
import { Request, Response } from 'express';
import { prisma } from '../db';
import { createUserSchema } from './validation';
import { logger } from '../logger';

/**
 * Creates a new user account
 * @route POST /api/users
 */
export async function createUser(req: Request, res: Response) {
  try {
    // Validate input
    const validatedData = createUserSchema.parse(req.body);

    // Check for existing user
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email }
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        error: 'User with this email already exists'
      });
    }

    // Create user
    const user = await prisma.user.create({
      data: validatedData
    });

    logger.info('User created', { userId: user.id, email: user.email });

    return res.status(201).json({
      success: true,
      data: { id: user.id, email: user.email, name: user.name, role: user.role }
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        error: 'Invalid input',
        details: error.errors
      });
    }

    logger.error('Failed to create user', { error });
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
}

// routes.ts
import { Router } from 'express';
import { createUser } from './controller';

const router = Router();
router.post('/users', createUser);
export default router;

// controller.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { createUser } from './controller';

describe('createUser', () => {
  it('should create user with valid input', async () => {
    // Test implementation
  });

  it('should return 409 if user exists', async () => {
    // Test implementation
  });

  it('should return 400 for invalid input', async () => {
    // Test implementation
  });
});
```

Security Checks:
- Input validation present?
- SQL injection prevention (using ORM)?
- Authentication/authorization considered?
- Sensitive data handling appropriate?
```

**Evaluation**:
- Code compiles: 98.7%
- Passes linter: 96.3%
- Security checks pass: 100% (hard requirement)
- Developer acceptance rate: 87% (used with minor edits)
- Time saved per endpoint: 30 minutes

### Example 5: Classification - Content Moderation

**Context**: Social platform classifying user-generated content for safety.

**Variables**:
- use_case_category: Classification
- safety_requirements: Safety-critical (must catch harmful content)
- human_in_loop: Full human review of borderline cases
- bias_sensitivity: Elevated (must avoid over-censoring marginalized groups)

**Core Prompt**:
```
You are a content safety classifier for a social platform. Your task is to identify potentially harmful content while minimizing false positives that could silence legitimate expression.

Content to Classify:
{{content_text}}

Context: {{optional_context}} (e.g., thread history, user reputation)

Classification Categories:
1. Safe: No policy violations
2. Borderline: Potentially problematic, requires human review
3. Policy Violation: Clear violation requiring action
   - Subcategories: Hate speech, Harassment, Violence, Sexual content, Self-harm, Spam

Decision Framework:

Step 1: Policy Violation Check
- Hate speech: Attacks on protected characteristics (race, religion, gender, etc.)
- Harassment: Targeted abuse, threats, doxxing
- Violence: Graphic violence, glorification of violence, threats
- Sexual content: Explicit sexual content, exploitation
- Self-harm: Promotion or glorification of self-harm
- Spam: Commercial spam, manipulation, scams

Step 2: Context Consideration
- Satire, education, or reporting may be acceptable even if content mentions sensitive topics
- Reclaimed language within communities (requires nuanced understanding)
- Political speech (balance safety with free expression)
- News reporting vs. glorification

Step 3: Confidence Assessment
- High confidence: Clear violation with no ambiguity
- Medium confidence: Likely violation but context matters
- Low confidence: Borderline, requires human judgment

Output:
{
  "classification": "safe | borderline | violation",
  "violation_type": "Category if applicable, null if safe",
  "confidence": "high | medium | low",
  "reasoning": "Brief explanation of classification (2-3 sentences)",
  "requires_human_review": true/false,
  "severity": "If violation: low | medium | high | critical",
  "recommended_action": "no_action | hide_pending_review | remove | suspend_user"
}

Guidelines:
- When in doubt, classify as "borderline" for human review
- Consider context: satire, education, reclaimed language
- Avoid false positives that censor legitimate expression
- Prioritize user safety while respecting free speech norms
- If content discusses sensitive topics responsibly, lean toward "safe"

Never classify as violation without clear policy breach.
```

**Few-Shot Examples**:
```
Example 1 (Safe):
Content: "I hate Mondays. Work has been really stressful lately."
Output:
{
  "classification": "safe",
  "violation_type": null,
  "confidence": "high",
  "reasoning": "Expresses frustration with work, not targeted at individuals or groups. Common colloquial expression.",
  "requires_human_review": false,
  "severity": null,
  "recommended_action": "no_action"
}

Example 2 (Borderline):
Content: "Politicians from [party] are ruining this country. Every single one is corrupt."
Output:
{
  "classification": "borderline",
  "violation_type": null,
  "confidence": "medium",
  "reasoning": "Strong political speech with generalization. While broad, political criticism is generally protected speech. Lacks targeted harassment. Flagging for human review to assess community standards.",
  "requires_human_review": true,
  "severity": null,
  "recommended_action": "hide_pending_review"
}

Example 3 (Violation):
Content: "[Slur targeting race] should all go back to where they came from."
Output:
{
  "classification": "violation",
  "violation_type": "hate_speech",
  "confidence": "high",
  "reasoning": "Clear hate speech targeting protected characteristic (race) with exclusionary language and slur. No satirical or educational context.",
  "requires_human_review": false,
  "severity": "high",
  "recommended_action": "remove"
}
```

**Evaluation**:
- False positive rate: 2.1% (vs. 8.3% baseline)
- False negative rate: 0.4% (critical: must stay <1%)
- Borderline precision: 78% of flagged content confirmed as needing review
- Processing time: <500ms per item
- Bias audit: Annual third-party review for disparate impact

---

## Success Metrics

- **Quality**: >90% success rate on task-specific criteria, validated through human evaluation
- **Consistency**: <5% variance in output quality for similar inputs (measured via automated similarity scoring)
- **Efficiency**: Achieve {{latency_constraints}} with <10% tail latency degradation at peak load
- **Cost**: Operate within {{cost_constraints}} budget, optimize to <$0.10 per output for content tasks
- **Reliability**: >99.5% uptime, <1% failed outputs requiring fallback mechanisms
- **Iteration Velocity**: Reduce prompt iteration cycle from weeks to days through systematic testing
- **Safety**: Zero critical safety incidents (e.g., harmful outputs reaching production) in 6 months
- **User Satisfaction**: >4.0/5 rating from {{target_audience}}, >80% adoption rate for internal tools
- **Maintenance**: <4 hours/month prompt maintenance time once system stabilizes
- **Scalability**: System handles 10x traffic increase without quality degradation

---

## Best Practices

- **Clarity Over Cleverness**: Simple, explicit instructions outperform vague clever prompts; prefer verbose clarity
- **Test Edge Cases Early**: Design prompts with failure modes in mind; preemptively address ambiguity
- **Version Control from Day 1**: Track every prompt change with hypotheses, results, and rollback capability
- **Measure Before Optimizing**: Establish baseline metrics before iterating; data-driven improvements only
- **Few-Shot Examples Are Gold**: 3 well-chosen examples often outperform 2000 words of instruction
- **Validate, Don't Trust**: Always implement output validation; models make mistakes no matter how good the prompt
- **Iterate in Public (Internally)**: Share prompt engineering learnings across teams; compound knowledge
- **Cost-Performance Tradeoffs**: Document why you chose model X for task Y; revisit as cheaper models improve
- **Chain Prompts for Complexity**: Break complex tasks into smaller prompts rather than one mega-prompt
- **Human-in-Loop for Learning**: Use human reviews not just for safety, but to identify prompt improvement opportunities

---

## Common Pitfalls

- **Over-Engineering Early**: Building complex evaluation before validating core prompt works; start simple
- **Prompt Drift**: Iterative changes without version control leading to degradation; mandate change tracking
- **Example Bias**: Few-shot examples too similar, model fails to generalize; ensure diversity
- **Ignoring Token Costs**: Verbose prompts that balloon costs at scale; optimize after validation
- **Wishful Prompt Writing**: Assuming instruction compliance without testing; models ignore instructions often
- **One-Size-Fits-All**: Using same prompt pattern for all tasks; match pattern to use case
- **Premature Optimization**: Optimizing latency/cost before achieving quality threshold; quality first
- **Black Box Evaluation**: Only measuring end results without analyzing failure modes; inspect failures
- **Static Prompts in Dynamic Domains**: Never updating prompts as domain knowledge evolves; schedule reviews
- **Ignoring Model Updates**: Prompts optimized for GPT-4 may work differently on GPT-4-turbo; test on model changes

---

**Document Version**: 1.0
**Last Updated**: 2024-01-15
**Maintained By**: Content Design Prompt Library
**License**: Copyright 2024 Adedayo Agarau. All rights reserved.

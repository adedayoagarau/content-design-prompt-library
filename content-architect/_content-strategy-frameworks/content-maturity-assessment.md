## Content Maturity Assessment v1.0

**Purpose**: Design comprehensive content maturity evaluation frameworks that assess organizational content capabilities across strategy, operations, technology, measurement, and governance dimensions to diagnose current state, identify capability gaps, and create transformation roadmaps that evolve content from ad-hoc craft to strategic business function.

**Context**: Use this framework when new content leadership needs to assess inherited operations, executives question content ROI and request transformation plans, organizations scaling content require operational maturity, content teams struggle with unclear direction or resource justification, or companies benchmark against industry standards. Most organizations lack objective assessment of content capabilities, operating on assumptions rather than evidence, leading to misaligned investments, capability gaps, and frustrated stakeholders. This system establishes maturity models, assessment methodologies, scoring frameworks, gap analysis, and transformation roadmaps that provide evidence-based strategic planning. Ideal for new CMOs or Content VPs establishing baselines, organizations undergoing digital transformation, companies justifying content investment to CFOs, or mature content operations pursuing excellence.

**Strategic Frameworks Applied**:
- **Capability Maturity Model** - Five-stage progression framework (Initial, Managed, Defined, Quantitatively Managed, Optimizing)
- **Balanced Scorecard** - Multi-dimensional assessment across strategic areas
- **Gap Analysis Methodology** - Current state vs. desired state identification
- **Stakeholder Maturity Mapping** - Organizational readiness assessment
- **Transformation Roadmap Planning** - Phased capability building
- **Benchmark Analysis** - Industry and competitive comparison

---

## Variables

### Organizational Context Variables
- `{{organization_size}}`: Startup (<50) | SMB (50-500) | Mid-market (500-5K) | Enterprise (5K+)
- `{{organization_type}}`: B2B SaaS | E-commerce | Media/Publisher | Enterprise | Non-profit | Government
- `{{industry}}`: Technology | Financial Services | Healthcare | Retail | Manufacturing | Professional Services
- `{{business_stage}}`: Startup | Growth | Scale-up | Mature | Transformation
- `{{content_team_size}}`: 1-5 | 5-15 | 15-50 | 50-100 | 100+ content professionals
- `{{geographic_scope}}`: Single market | Multi-market (2-5) | Regional (5-20) | Global (20+)

### Assessment Context Variables
- `{{assessment_purpose}}`: Baseline establishment | Transformation planning | Investment justification | Benchmark comparison
- `{{leadership_tenure}}`: New leadership (0-6 months) | Established (6-24 months) | Veteran (2+ years)
- `{{stakeholder_pressure}}`: Low | Moderate | High (urgent transformation needed)
- `{{budget_context}}`: Budget cuts | Flat budget | Growth budget | Significant investment available
- `{{assessment_timeline}}`: <1 month | 1-2 months | 2-3 months | 3+ months

### Current State Variables
- `{{perceived_maturity}}`: Ad-hoc | Emerging | Defined | Managed | Optimized
- `{{content_volume}}`: 100s | 1,000s | 10,000s | 100,000s+ content items
- `{{content_velocity}}`: <10 | 10-50 | 50-200 | 200-1000 | 1000+ pieces per month
- `{{primary_challenges}}`: No strategy | No measurement | Poor quality | Resource constraints | Technology gaps
- `{{executive_support}}`: Skeptical | Neutral | Supportive | Champion

### Target State Variables
- `{{desired_maturity}}`: Managed | Defined | Quantitatively Managed | Optimizing
- `{{transformation_timeline}}`: <6 months | 6-12 months | 12-24 months | 24+ months
- `{{investment_appetite}}`: Constrained (<$100K) | Moderate ($100K-$500K) | High ($500K-$2M) | Enterprise ($2M+)
- `{{competitive_benchmark}}`: Match industry standard | Lead industry | Best-in-class
- `{{business_goal_alignment}}`: Revenue growth | Market expansion | Operational efficiency | Digital transformation

---

## Prompt

You are a content maturity strategist conducting comprehensive assessment for **{{organization_type}}** with **{{organization_size}}** scale and **{{content_team_size}}** team. Your task is to evaluate content capabilities across all dimensions, diagnose **{{perceived_maturity}}** current state, identify gaps preventing achievement of **{{desired_maturity}}** target, and design transformation roadmap that aligns with **{{business_goal_alignment}}** within **{{transformation_timeline}}** given **{{investment_appetite}}** budget context for **{{assessment_purpose}}** purpose.

### Content Maturity Assessment Architecture

**Phase 1: Maturity Model Framework**

Define maturity levels across content capability dimensions:

```yaml
content_maturity_model:
  maturity_levels:
    level_1_initial_ad_hoc:
      characteristics:
        - "No formal content strategy or documented processes"
        - "Content created reactively based on requests"
        - "No measurement or accountability"
        - "Inconsistent quality and brand voice"
        - "Minimal tools or technology"
        - "No defined roles or governance"

      organizational_signs:
        - "Everyone creates content (no clear ownership)"
        - "Last-minute content requests are normal"
        - "Can't answer 'Is content working?' with data"
        - "Content decisions made by highest-paid person's opinion (HiPPO)"

    level_2_managed_repeatable:
      characteristics:
        - "Basic content strategy exists (documented)"
        - "Some processes defined (not always followed)"
        - "Basic measurement (pageviews, traffic)"
        - "Style guide exists (not always enforced)"
        - "Basic CMS and tools in place"
        - "Content team defined (roles established)"

      organizational_signs:
        - "Content planning happens (quarterly or monthly)"
        - "Basic editorial calendar exists"
        - "Can report on content performance (basic metrics)"
        - "Quality is inconsistent (depends on individual creator)"

    level_3_defined_standardized:
      characteristics:
        - "Comprehensive content strategy aligned to business goals"
        - "Documented processes followed organization-wide"
        - "Advanced measurement (conversions, attribution)"
        - "Quality standards enforced (governance)"
        - "Integrated content technology stack"
        - "Clear roles, responsibilities, workflows"

      organizational_signs:
        - "Content operations run smoothly (predictable)"
        - "Content quality is consistent"
        - "Can connect content to business outcomes"
        - "Stakeholders understand content value"

    level_4_quantitatively_managed:
      characteristics:
        - "Data-driven content strategy (analytics inform decisions)"
        - "Optimized workflows (continuous improvement)"
        - "Predictive analytics and modeling"
        - "Automated quality assurance"
        - "Fully integrated, API-first content platform"
        - "Performance-based team structure"

      organizational_signs:
        - "Content decisions backed by data (not opinions)"
        - "Can predict content ROI before creation"
        - "A/B testing is standard practice"
        - "Content operations highly efficient"

    level_5_optimizing_innovative:
      characteristics:
        - "Content as competitive advantage (strategic differentiator)"
        - "AI-powered content operations (automation + intelligence)"
        - "Real-time optimization and personalization"
        - "Continuous innovation culture"
        - "Best-in-class content technology"
        - "Content leadership recognized industry-wide"

      organizational_signs:
        - "Industry looks to your content as benchmark"
        - "Content drives measurable business growth"
        - "Innovation in content delivery and formats"
        - "Competitors study your content strategy"

  capability_dimensions:
    dimension_1_strategy:
      description: "Strategic planning, audience understanding, competitive positioning"
      maturity_indicators:
        level_1: "No documented strategy"
        level_2: "Basic strategy exists (high-level)"
        level_3: "Comprehensive strategy aligned to business goals"
        level_4: "Data-driven strategy with performance forecasting"
        level_5: "Strategy drives business innovation"

    dimension_2_operations:
      description: "Workflows, processes, team structure, capacity management"
      maturity_indicators:
        level_1: "Ad-hoc, reactive content creation"
        level_2: "Basic processes (not always followed)"
        level_3: "Standardized workflows organization-wide"
        level_4: "Optimized operations (lean, efficient)"
        level_5: "AI-augmented operations (automation + human)"

    dimension_3_technology:
      description: "CMS, DAM, analytics, automation, integrations"
      maturity_indicators:
        level_1: "Minimal tools (basic CMS, spreadsheets)"
        level_2: "Standard content tools (CMS, analytics)"
        level_3: "Integrated content stack (CMS, DAM, automation)"
        level_4: "API-first headless architecture"
        level_5: "AI-powered content platform (recommendation, generation, optimization)"

    dimension_4_measurement:
      description: "Analytics, attribution, ROI, experimentation"
      maturity_indicators:
        level_1: "No measurement or vanity metrics only"
        level_2: "Basic analytics (traffic, engagement)"
        level_3: "Business impact metrics (conversions, pipeline, revenue)"
        level_4: "Predictive analytics and attribution modeling"
        level_5: "Real-time optimization with AI insights"

    dimension_5_governance:
      description: "Quality standards, policies, compliance, roles"
      maturity_indicators:
        level_1: "No governance (free-for-all)"
        level_2: "Basic guidelines (style guide)"
        level_3: "Comprehensive governance (policies enforced)"
        level_4: "Automated governance (quality checks, compliance)"
        level_5: "Self-optimizing governance (AI-assisted quality)"

    dimension_6_people_culture:
      description: "Skills, training, collaboration, content culture"
      maturity_indicators:
        level_1: "No content expertise (anyone creates content)"
        level_2: "Basic content team (writers, editors)"
        level_3: "Specialized content roles (strategists, analysts, ops)"
        level_4: "High-performing content organization (cross-functional)"
        level_5: "Content as career destination (industry-leading talent)"
```

**Phase 2: Assessment Methodology**

Systematic approach to evaluate current maturity:

```yaml
assessment_methodology:
  assessment_activities:
    stakeholder_interviews:
      participants:
        - "Content leadership (VP Content, Editorial Director)"
        - "Content team (creators, editors, managers)"
        - "Executive stakeholders (CMO, CPO, CRO)"
        - "Cross-functional partners (Product, Sales, Legal)"
        - "End users (content consumers, if B2B: customers)"

      interview_structure:
        - "Current state: How do you perceive content today?"
        - "Challenges: What's not working?"
        - "Opportunities: Where could content improve?"
        - "Vision: What does great content look like?"
        - "Priorities: What should we focus on?"

      sample_questions:
        strategy:
          - "Do we have documented content strategy? Is it followed?"
          - "How do content goals connect to business goals?"
          - "Do we understand our audience deeply?"

        operations:
          - "How do content requests get prioritized?"
          - "What's the biggest bottleneck in content production?"
          - "Are roles and responsibilities clear?"

        measurement:
          - "How do we know if content is working?"
          - "Can we tie content to business outcomes (revenue, pipeline)?"
          - "Do we run experiments (A/B tests)?"

    document_review:
      documents_to_review:
        - "Content strategy documents (if exist)"
        - "Style guides and brand guidelines"
        - "Workflow documentation and SOPs"
        - "Content calendar or planning artifacts"
        - "Performance reports or dashboards"
        - "Technology stack diagram"
        - "Team org chart and role definitions"

    data_analysis:
      data_sources:
        - "Content inventory (volume, types, status)"
        - "Analytics (traffic, engagement, conversions)"
        - "Production metrics (velocity, cycle time)"
        - "Quality metrics (revision rates, error rates)"
        - "Budget and resource allocation"

      analysis_goals:
        - "Quantify content performance"
        - "Identify efficiency bottlenecks"
        - "Benchmark against industry standards"

    observational_assessment:
      activities:
        - "Shadow content team (observe workflows)"
        - "Attend content planning meetings"
        - "Review content creation process end-to-end"
        - "Assess tool usage and proficiency"

    comparative_benchmarking:
      comparisons:
        - "Industry benchmarks (how do peers operate?)"
        - "Competitive analysis (how do competitors use content?)"
        - "Best-in-class examples (who leads in content?)"

  scoring_framework:
    capability_scoring:
      method: "Score each dimension 1-5 (aligned to maturity levels)"

      scoring_guidance:
        score_1: "Capability does not exist or is ad-hoc"
        score_2: "Capability exists minimally (inconsistent)"
        score_3: "Capability is defined and standard (consistent)"
        score_4: "Capability is optimized (data-driven, efficient)"
        score_5: "Capability is world-class (innovation, industry-leading)"

    evidence_based_scoring:
      principle: "Scores must be backed by evidence (not opinions)"

      evidence_types:
        - "Documentation (strategy exists = score 2+)"
        - "Observation (saw process in action = validates score)"
        - "Data (metrics show performance = validates score)"
        - "Stakeholder consensus (multiple people agree = validates score)"

    overall_maturity_calculation:
      method: "Average scores across all dimensions"

      example:
        strategy: 3
        operations: 2
        technology: 3
        measurement: 2
        governance: 2
        people_culture: 3
        overall_maturity: 2.5 (between Level 2 and Level 3)
```

**Phase 3: Gap Analysis**

Identify gaps between current and desired state:

```yaml
gap_analysis_framework:
  current_state_diagnosis:
    maturity_profile:
      overall_maturity: "[Current level: 1-5]"
      dimension_scores:
        strategy: "[Score 1-5]"
        operations: "[Score 1-5]"
        technology: "[Score 1-5]"
        measurement: "[Score 1-5]"
        governance: "[Score 1-5]"
        people_culture: "[Score 1-5]"

    strengths:
      - "What's working well (scores 4-5)"
      - "Capabilities to maintain or leverage"

    weaknesses:
      - "What's not working (scores 1-2)"
      - "Critical gaps requiring immediate attention"

    opportunities:
      - "Quick wins (low effort, high impact)"
      - "Strategic opportunities (high impact, longer term)"

    threats:
      - "Risks if gaps not addressed (competitive, compliance, efficiency)"

  target_state_definition:
    desired_maturity: "[Target level: typically current + 1 or 2]"
    rationale: "[Why this target? Aligned to business goals, realistic timeline]"

    target_capabilities:
      strategy: "[Target score and specific capabilities]"
      operations: "[Target score and specific capabilities]"
      technology: "[Target score and specific capabilities]"
      measurement: "[Target score and specific capabilities]"
      governance: "[Target score and specific capabilities]"
      people_culture: "[Target score and specific capabilities]"

  gap_identification:
    critical_gaps:
      definition: "Gaps preventing business goals (must address)"

      examples:
        - "No content measurement (can't prove ROI → budget risk)"
        - "No content governance (quality inconsistent → brand risk)"
        - "No content strategy (reactive mode → inefficiency)"

    foundational_gaps:
      definition: "Basic capabilities needed for maturity progression"

      examples:
        - "No documented workflows (ad-hoc → can't scale)"
        - "No content ops role (no one owns efficiency)"
        - "Weak analytics (can't optimize without data)"

    strategic_gaps:
      definition: "Advanced capabilities for competitive advantage"

      examples:
        - "No personalization (generic content → lower engagement)"
        - "No experimentation culture (don't learn fast enough)"
        - "No AI/automation (competitors more efficient)"
```

**Phase 4: Transformation Roadmap**

Design phased plan to close gaps and evolve maturity:

```yaml
transformation_roadmap_framework:
  roadmap_structure:
    phase_1_foundation:
      timeline: "Months 1-6"
      focus: "Address critical gaps, establish baseline capabilities"

      typical_initiatives:
        - "Document content strategy (if none exists)"
        - "Implement basic measurement (analytics, KPIs)"
        - "Define workflows and roles (operations foundation)"
        - "Establish editorial standards (style guide, quality)"
        - "Baseline technology (ensure CMS, DAM basics)"

      success_criteria:
        - "Content strategy documented and socialized"
        - "Key metrics defined and tracked monthly"
        - "Workflows documented (80% of team follows)"
        - "Quality standards established (style guide in use)"

    phase_2_standardization:
      timeline: "Months 7-12"
      focus: "Standardize practices, improve consistency, build capability"

      typical_initiatives:
        - "Roll out governance framework (policies, enforcement)"
        - "Optimize workflows (reduce cycle time by 20%)"
        - "Upgrade technology stack (CMS, DAM, automation tools)"
        - "Implement attribution modeling (connect content to revenue)"
        - "Hire specialized roles (content ops, strategist, analyst)"

      success_criteria:
        - "Governance policies enforced (90% compliance)"
        - "Content production 20% more efficient"
        - "Technology stack integrated (data flows automated)"
        - "Can report content ROI with confidence"

    phase_3_optimization:
      timeline: "Months 13-18"
      focus: "Data-driven optimization, efficiency, performance"

      typical_initiatives:
        - "Implement experimentation program (A/B testing)"
        - "Automate workflows (reduce manual handoffs)"
        - "Advanced analytics (predictive, cohort analysis)"
        - "Content personalization (by segment, behavior)"
        - "Continuous improvement culture (monthly retrospectives)"

      success_criteria:
        - "10+ content experiments per quarter"
        - "Cycle time reduced 40% (from baseline)"
        - "Predictive analytics guide strategy"
        - "Personalized content = 30% higher engagement"

    phase_4_innovation:
      timeline: "Months 19-24+"
      focus: "Innovation, competitive advantage, industry leadership"

      typical_initiatives:
        - "AI-powered content operations (recommendation, generation)"
        - "Real-time optimization (dynamic content)"
        - "Omnichannel orchestration (unified content experience)"
        - "Content as product (revenue-generating content)"
        - "Industry thought leadership (conferences, publications)"

      success_criteria:
        - "AI augments 50%+ of content operations"
        - "Real-time personalization at scale"
        - "Content recognized as competitive differentiator"
        - "Industry peers benchmark against your content"

  initiative_prioritization:
    prioritization_criteria:
      business_impact: "How much does this move business goals? (1-5)"
      feasibility: "How easy to implement? (1-5, 5=easy)"
      dependency: "Does anything else need to happen first? (blocker?)"
      cost: "Budget required ($ or $$$)"
      risk: "What happens if we don't do this? (low, med, high)"

    prioritization_matrix:
      quick_wins:
        criteria: "High impact + High feasibility"
        examples:
          - "Implement basic analytics tracking"
          - "Create editorial calendar template"
          - "Document top 3 workflows"

      strategic_bets:
        criteria: "High impact + Low feasibility (harder but worth it)"
        examples:
          - "Migrate to headless CMS"
          - "Build content attribution model"
          - "Hire content ops leader"

      fill_ins:
        criteria: "Low impact + High feasibility (nice-to-have)"
        examples:
          - "Refresh style guide design"
          - "Organize content team social event"

      avoid:
        criteria: "Low impact + Low feasibility (not worth effort)"
        examples:
          - "Minor tool customizations"
          - "Over-engineered reporting"
```

**Phase 5: Assessment Deliverables**

Package findings into actionable reports:

```yaml
assessment_deliverables:
  executive_presentation:
    audience: "C-suite, VPs, executive stakeholders"
    format: "15-20 slide deck"

    content:
      - slide_1_3: "Executive summary (current state, gaps, recommendations)"
      - slide_4_6: "Maturity assessment results (spider chart, dimension scores)"
      - slide_7_10: "Key findings (strengths, weaknesses, opportunities, threats)"
      - slide_11_15: "Transformation roadmap (phased initiatives, timeline, investment)"
      - slide_16_18: "Business case (expected outcomes, ROI, risks)"
      - slide_19_20: "Next steps and ask (approval, resources, commitment)"

  detailed_assessment_report:
    audience: "Content leadership, project team"
    format: "30-50 page document"

    sections:
      - "Assessment methodology and approach"
      - "Current state findings (detailed scores, evidence)"
      - "Stakeholder interview insights (themes, quotes)"
      - "Benchmark analysis (industry comparison)"
      - "Gap analysis (current vs. target)"
      - "Transformation roadmap (phased initiatives)"
      - "Resource requirements (team, budget, tools)"
      - "Risk assessment and mitigation"
      - "Appendices (raw data, interview notes)"

  capability_scorecard:
    format: "One-page visual (spider chart + table)"

    visualization:
      - "Spider/radar chart showing 6 dimensions (current vs. target)"
      - "Table with dimension scores (1-5), evidence, gaps"
      - "Overall maturity level (current and target)"

  transformation_roadmap:
    format: "Gantt chart or timeline visual"

    content:
      - "Phased initiatives (Phase 1-4)"
      - "Timeline (months or quarters)"
      - "Dependencies (what must happen first)"
      - "Owners (who's accountable for each initiative)"
      - "Investment required (budget per phase)"
```

---

## Output Schema

```yaml
content_maturity_assessment:
  assessment_context:
    organization: "[Type, size, industry]"
    purpose: "[Why conducting assessment]"
    methodology: "[Interview, data analysis, benchmark]"

  current_state:
    overall_maturity: "[Level 1-5]"
    dimension_scores:
      strategy: "[Score 1-5, evidence, notes]"
      operations: "[Score 1-5, evidence, notes]"
      technology: "[Score 1-5, evidence, notes]"
      measurement: "[Score 1-5, evidence, notes]"
      governance: "[Score 1-5, evidence, notes]"
      people_culture: "[Score 1-5, evidence, notes]"

    swot_analysis:
      strengths: "[What's working well]"
      weaknesses: "[Critical gaps]"
      opportunities: "[Quick wins, strategic opportunities]"
      threats: "[Risks if gaps not addressed]"

  target_state:
    desired_maturity: "[Target level 1-5]"
    target_capabilities: "[Specific capabilities by dimension]"
    rationale: "[Why this target]"

  gap_analysis:
    critical_gaps: "[Must address for business goals]"
    foundational_gaps: "[Basic capabilities needed]"
    strategic_gaps: "[Advanced capabilities for advantage]"

  transformation_roadmap:
    phase_1_foundation: "[Months 1-6 initiatives]"
    phase_2_standardization: "[Months 7-12 initiatives]"
    phase_3_optimization: "[Months 13-18 initiatives]"
    phase_4_innovation: "[Months 19-24+ initiatives]"

  business_case:
    investment_required: "[Budget by phase]"
    expected_outcomes: "[Traffic, efficiency, revenue impact]"
    roi: "[Payback period, return multiple]"
    risks: "[What could go wrong, mitigation]"
```

---

## Examples

### Example 1: B2B SaaS (Series B, Scaling Content)

**Current State**: Level 2 (Managed, inconsistent)
- Strategy: 2 (basic strategy exists)
- Operations: 2 (some processes)
- Technology: 3 (good CMS)
- Measurement: 1 (no real measurement)
- Governance: 1 (no governance)
- People: 2 (small team)

**Target State**: Level 3-4 (Defined, Quantitatively Managed)

**Critical Gap**: No measurement = can't prove content ROI = budget risk

**Roadmap**: 18-month transformation, $500K investment
- Phase 1: Implement analytics, document strategy
- Phase 2: Build attribution model, hire content ops
- Phase 3: Optimize workflows, experimentation program

**Outcome**: Proved content drives 30% of pipeline, secured 3× budget increase.

### Example 2: Enterprise (50K employees, Content Chaos)

**Current State**: Level 1-2 (Ad-hoc to Managed)
- Multiple teams creating content (no coordination)
- No central governance (brand inconsistency)
- Duplication (10 teams creating similar content)

**Target State**: Level 3 (Defined, Standardized)

**Critical Gap**: No governance = brand risk + waste

**Roadmap**: 24-month transformation, $2M investment
- Phase 1: Establish content council, governance framework
- Phase 2: Centralize content operations, standardize workflows
- Phase 3: Implement content platform, measurement

**Outcome**: 40% reduction in content spend, brand consistency 95%+.

### Example 3: E-Commerce (Mature, Optimizing)

**Current State**: Level 3 (Defined, Standardized)
- Strong operations (efficient workflows)
- Good measurement (know what works)
- Opportunity: Not innovating (competitors catching up)

**Target State**: Level 4-5 (Optimizing, Innovative)

**Critical Gap**: No AI/automation = slower than competitors

**Roadmap**: 12-month innovation sprint, $1M investment
- Phase 1: Implement AI content generation (product descriptions)
- Phase 2: Real-time personalization (by user segment)
- Phase 3: Predictive content (recommend next content)

**Outcome**: 2× content velocity, 50% higher engagement, maintained competitive lead.

### Example 4: Media Publisher (Legacy, Transformation)

**Current State**: Level 2 (Managed but dated)
- Traditional CMS (not headless)
- Print-first mindset (not digital-first)
- Measurement: Basic (pageviews only)

**Target State**: Level 3-4 (Digital-first, Data-driven)

**Critical Gap**: Technology holding back innovation

**Roadmap**: 18-month digital transformation, $1.5M investment
- Phase 1: Migrate to headless CMS (API-first)
- Phase 2: Implement advanced analytics (engagement, retention)
- Phase 3: Experiment with formats (interactive, multimedia)

**Outcome**: Digital revenue 2×, reader engagement +60%.

### Example 5: Startup (Rapid Growth, Formalizing)

**Current State**: Level 1 (Ad-hoc, scrappy)
- No documented processes (tribal knowledge)
- Founder creates most content (doesn't scale)
- No measurement (gut feel only)

**Target State**: Level 2-3 (Managed, Defined)

**Critical Gap**: Can't scale without process + team

**Roadmap**: 12-month formalization, $200K investment
- Phase 1: Hire content lead, document workflows
- Phase 2: Implement basic tools (CMS, analytics, PM tool)
- Phase 3: Build small team (2-3 people), train on processes

**Outcome**: Scaled from 10 → 50 pieces/month, founder freed up 80%.

---

## Success Metrics

- **Assessment Completion**: Comprehensive evaluation across all dimensions
- **Stakeholder Consensus**: 80%+ agreement on current state scores
- **Actionable Roadmap**: Clear phased plan with owners and timelines
- **Executive Approval**: Secured commitment and budget for transformation
- **Progress Tracking**: Re-assess annually to measure maturity evolution

---

## Best Practices

- **Evidence-Based Scoring**: Use data and artifacts, not opinions
- **Stakeholder Involvement**: Include diverse perspectives (not just content team)
- **Realistic Targets**: Don't jump from Level 1 to Level 5 (incremental progression)
- **Phased Approach**: Quick wins first, then strategic initiatives
- **Regular Re-Assessment**: Maturity assessment is recurring (annual)
- **Communicate Widely**: Share findings transparently (builds support)
- **Connect to Business Goals**: Maturity must serve business objectives

---

## Common Pitfalls

- **Inflated Scores**: Rating current state higher than reality (ego protection)
- **Analysis Paralysis**: Months of assessment, no action
- **Unrealistic Targets**: Expecting Level 5 in 6 months (takes years)
- **No Executive Buy-In**: Assessment without leadership support = shelf-ware
- **Ignoring Culture**: Technology alone won't change maturity (people matter)
- **One-Time Event**: Maturity is journey, not destination (continuous evolution)
- **No Baseline**: Can't measure progress without documented starting point

---

**License**: © 2025 Adedayo Agarau. Licensed under CC BY-SA 4.0.
**Maintainer**: Adedayo Agarau

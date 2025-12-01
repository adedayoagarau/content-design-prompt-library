## Content Governance Framework v1.0

**Purpose**: Design comprehensive content governance systems that establish authority structures, decision-making frameworks, quality standards, compliance protocols, and operational policies to ensure content consistency, legal compliance, brand integrity, and organizational alignment across distributed content operations.

**Context**: Use this framework when scaling content operations across multiple teams, geographies, or business units where decentralized content creation creates quality inconsistencies, compliance risks, brand dilution, or operational chaos. Most organizations lack formal content governance, leading to duplicated efforts, conflicting messages, regulatory violations, and poor user experiences. This system establishes roles, responsibilities, policies, processes, and enforcement mechanisms that balance creative autonomy with strategic control. Ideal for enterprises with distributed content teams, regulated industries (healthcare, finance, government), global organizations managing localized content, or companies undergoing mergers where content governance prevents brand confusion.

**Strategic Frameworks Applied**:
- **Federated Governance Model** - Central standards with distributed execution
- **RACI Matrix Framework** - Clear accountability for content decisions
- **Policy Hierarchy Architecture** - Global mandates, regional guidelines, local flexibility
- **Content Authority Matrix** - Who decides what in content lifecycle
- **Risk-Based Compliance Framework** - Governance intensity matches content risk
- **Continuous Improvement Governance** - Regular review and adaptation cycles

---

## Variables

### Organizational Context Variables
- `{{organization_structure}}`: Centralized | Distributed | Matrix | Federated | Fully decentralized
- `{{organization_size}}`: Startup (<50) | SMB (50-500) | Mid-market (500-5K) | Enterprise (5K+)
- `{{content_team_distribution}}`: Single location | Multi-office | Global | Remote-first
- `{{business_model}}`: B2B | B2C | B2B2C | Marketplace | Government/Non-profit
- `{{regulatory_environment}}`: Low regulation | Moderate | Highly regulated (HIPAA, FDA, FCA, etc.)
- `{{brand_architecture}}`: Single brand | House of brands | Endorsed brands | Hybrid

### Content Operations Variables
- `{{content_creators}}`: 10-50 | 50-200 | 200-1000 | 1000+ content contributors
- `{{content_volume}}`: 100s | 1,000s | 10,000s | 100,000s of content items annually
- `{{content_types_managed}}`: 5-10 | 10-25 | 25-50 | 50+ distinct content types
- `{{publishing_channels}}`: Website only | Multi-channel (5-10) | Omnichannel (10-20) | Complex ecosystem (20+)
- `{{localization_scope}}`: Single market | 2-5 markets | 5-20 markets | Global (20+ markets)
- `{{content_lifecycle_speed}}`: Slow (monthly) | Moderate (weekly) | Fast (daily) | Real-time

### Governance Maturity Variables
- `{{current_governance_state}}`: None (ad-hoc) | Informal | Partially documented | Fully defined | Optimized
- `{{enforcement_capability}}`: Manual review | Semi-automated | Automated with AI | Predictive
- `{{compliance_requirements}}`: Basic brand guidelines | Industry standards | Legal mandates | Multi-jurisdiction
- `{{stakeholder_alignment}}`: Low | Moderate | High (executive sponsorship)

### Risk & Compliance Variables
- `{{risk_tolerance}}`: High (move fast) | Moderate | Low (regulated industry)
- `{{compliance_frameworks}}`: None | ISO | SOC 2 | GDPR | HIPAA | FDA | FCA | Multi-framework
- `{{liability_exposure}}`: Low | Moderate | High (medical, financial, legal advice)
- `{{brand_reputation_sensitivity}}`: Low | Moderate | High (consumer brand) | Critical (public sector)

---

## Prompt

You are a content governance strategist designing a comprehensive governance framework for **{{organization_structure}}** organization with **{{organization_size}}** scale, managing **{{content_volume}}** across **{{publishing_channels}}** in **{{localization_scope}}** operating in **{{regulatory_environment}}** environment. Your task is to establish governance structures, policies, processes, and enforcement mechanisms that support **{{content_creators}}** while ensuring brand consistency, legal compliance, and operational excellence with **{{current_governance_state}}** maturity.

### Content Governance Architecture

**Phase 1: Governance Model Design**

Define your governance approach based on organizational structure:

```yaml
governance_models:
  centralized_model:
    description: "Single central team controls all content decisions"
    best_for: ["Small organizations", "Highly regulated industries", "Single brand companies"]
    pros: ["Maximum consistency", "Clear accountability", "Simplified compliance"]
    cons: ["Bottlenecks", "Slow to market", "Limited local relevance"]

    structure:
      central_team:
        - "Content strategy (sets direction)"
        - "Editorial standards (defines quality)"
        - "All content creation (produces everything)"
        - "Publishing control (approves all)"
      regional_teams:
        - "Content requests (no creation authority)"
        - "Localization input (advisory only)"

  federated_model:
    description: "Central governance with distributed execution"
    best_for: ["Large enterprises", "Multi-brand organizations", "Global companies"]
    pros: ["Scales well", "Local relevance", "Faster execution", "Balanced control"]
    cons: ["Requires strong communication", "Policy complexity", "Enforcement challenges"]

    structure:
      center_of_excellence:
        - "Global strategy and standards"
        - "Brand guidelines and templates"
        - "Governance policies and training"
        - "Quality assurance oversight"
        - "Technology and tools"

      business_unit_teams:
        - "Execute within guidelines"
        - "Create content for their domain"
        - "Localize global templates"
        - "Report on compliance metrics"

      regional_teams:
        - "Localization and cultural adaptation"
        - "Regional campaign execution"
        - "Local compliance requirements"

  distributed_model:
    description: "Full autonomy with lightweight coordination"
    best_for: ["Startups", "Tech companies", "Creative agencies"]
    pros: ["Speed", "Innovation", "Ownership", "Low overhead"]
    cons: ["Inconsistency risk", "Brand dilution", "Compliance gaps"]

    structure:
      governance_council:
        - "Advisory (not enforceable)"
        - "Best practice sharing"
        - "Tool recommendations"

      autonomous_teams:
        - "Full content authority"
        - "Self-governance"
        - "Publish independently"
```

**Recommended Model for Enterprise Scale**: **Federated Governance**

```yaml
federated_governance_framework:
  governance_layers:
    global_mandates:
      description: "Non-negotiable policies enforced everywhere"
      examples:
        - "Legal disclaimers and regulatory compliance"
        - "Brand name usage and trademark rules"
        - "Accessibility standards (WCAG AA minimum)"
        - "Data privacy and security requirements"
        - "Crisis communication protocols"
      enforcement: "Automated (system-level blocks)"

    regional_guidelines:
      description: "Adaptation frameworks for geography/market"
      examples:
        - "Cultural sensitivity guidelines by region"
        - "Language localization standards"
        - "Regional regulatory requirements (GDPR, CCPA)"
        - "Market-specific messaging frameworks"
      enforcement: "Review checkpoints before publish"

    business_unit_practices:
      description: "Operational flexibility within boundaries"
      examples:
        - "Content calendar and planning"
        - "Channel-specific tactics"
        - "Campaign messaging variations"
        - "Vendor and freelancer management"
      enforcement: "Self-governance with periodic audits"
```

**Phase 2: Authority & Accountability Framework (RACI)**

Define who is Responsible, Accountable, Consulted, Informed for content decisions:

```yaml
content_authority_matrix:
  strategic_decisions:
    content_strategy_definition:
      responsible: "VP Content Strategy"
      accountable: "Chief Marketing Officer"
      consulted: ["Product Marketing", "Brand", "Legal"]
      informed: ["All content teams"]

    brand_voice_evolution:
      responsible: "Brand Strategy Lead"
      accountable: "Chief Brand Officer"
      consulted: ["Content leads", "Creative director"]
      informed: ["All content creators"]

    channel_strategy:
      responsible: "Channel owners"
      accountable: "Head of Content"
      consulted: ["Audience research", "Analytics"]
      informed: ["Content creators for that channel"]

  operational_decisions:
    content_planning:
      responsible: "Content managers (by team)"
      accountable: "Editorial director"
      consulted: ["Stakeholder requestors"]
      informed: ["Executive stakeholders"]

    content_creation:
      responsible: "Content creators (writers, designers, etc.)"
      accountable: "Content manager"
      consulted: ["Subject matter experts", "Legal (if needed)"]
      informed: ["Requestor"]

    editorial_review:
      responsible: "Editors"
      accountable: "Editorial lead"
      consulted: ["Legal (regulatory content)", "SMEs (technical accuracy)"]
      informed: ["Content creator"]

    publishing_approval:
      responsible: "Publisher role"
      accountable: "Content manager"
      consulted: ["Compliance (high-risk content)"]
      informed: ["Marketing stakeholders"]

  governance_decisions:
    policy_creation:
      responsible: "Governance manager"
      accountable: "VP Content Operations"
      consulted: ["Legal", "Compliance", "Brand", "Content leads"]
      informed: ["All content contributors"]

    standards_updates:
      responsible: "Editorial standards team"
      accountable: "Chief editor"
      consulted: ["Content council (cross-functional)"]
      informed: ["All content teams"]

    exception_handling:
      responsible: "Content manager (assesses)"
      accountable: "Governance lead (approves/denies)"
      consulted: ["Legal", "Compliance", "Brand"]
      informed: ["Requester"]
```

**Phase 3: Policy Framework**

Create tiered policy structure:

```yaml
policy_architecture:
  tier_1_global_policies:
    description: "Non-negotiable, enforced everywhere"
    update_frequency: "Annual review, emergency updates as needed"
    approval_authority: "Executive leadership (CMO, CCO, General Counsel)"

    policy_categories:
      legal_compliance:
        - policy: "Regulatory Compliance Policy"
          scope: "All content touching regulated topics (medical claims, financial advice, etc.)"
          requirements:
            - "All health claims reviewed by medical legal"
            - "Financial advice includes required disclaimers"
            - "Government content meets accessibility standards"
          enforcement: "Pre-publish legal review (automated routing)"

        - policy: "Data Privacy Policy"
          scope: "All content collecting, processing, or displaying user data"
          requirements:
            - "GDPR consent flows for EU users"
            - "CCPA opt-out mechanisms for CA users"
            - "Cookie notices and privacy policy links"
          enforcement: "System-level controls (cannot publish without)"

      brand_protection:
        - policy: "Brand Identity Standards"
          scope: "All external-facing content"
          requirements:
            - "Approved logo usage only (no modifications)"
            - "Official color palette (hex codes specified)"
            - "Typography standards (font families and usage)"
            - "Brand voice principles (tone, language, perspective)"
          enforcement: "Design system templates + spot checks"

        - policy: "Trademark Usage Policy"
          scope: "All content using company or third-party trademarks"
          requirements:
            - "Company name™ formatting rules"
            - "Third-party trademark footnotes required"
            - "Competitor mention guidelines"
          enforcement: "Automated scanning + editorial review"

      risk_management:
        - policy: "Crisis Communication Protocol"
          scope: "All content during crisis events"
          requirements:
            - "Activate crisis team (predefined)"
            - "Executive approval for all external comms"
            - "Coordinated messaging (no rogue statements)"
            - "Legal review before publishing"
          enforcement: "Manual override (normal publishing suspended)"

  tier_2_regional_guidelines:
    description: "Adaptation frameworks for local contexts"
    update_frequency: "Quarterly review"
    approval_authority: "Regional content leads + governance team"

    examples:
      - guideline: "Cultural Sensitivity Standards"
        regions: "APAC, EMEA, LATAM, North America"
        content: "Guidance on imagery, metaphors, examples that respect cultural norms"

      - guideline: "Localization Quality Standards"
        regions: "All non-English markets"
        content: "Translation accuracy, cultural adaptation, local SEO practices"

  tier_3_operational_procedures:
    description: "Day-to-day working practices"
    update_frequency: "Continuous improvement"
    approval_authority: "Content operations manager"

    examples:
      - procedure: "Content Request Process"
      - procedure: "Editorial Review Workflow"
      - procedure: "Publishing Checklist"
      - procedure: "Content Archival Process"
```

**Phase 4: Editorial Standards & Quality Framework**

```yaml
editorial_standards:
  style_guide:
    components:
      - "Grammar and mechanics (AP Style, Chicago Manual, custom rules)"
      - "Punctuation preferences (Oxford comma, em dashes, etc.)"
      - "Capitalization standards (title case rules, product names)"
      - "Number formatting (numerals vs. words, dates, currency)"
      - "Abbreviations and acronyms (spell out first use)"

    tools:
      - "Style guide website (searchable, always current)"
      - "Grammarly organizational rules (automated enforcement)"
      - "Editorial checklist templates"

  voice_and_tone_framework:
    brand_voice_principles:
      - principle: "Clear over clever"
        guideline: "Plain language, avoid jargon unless audience expects it"

      - principle: "Helpful, not promotional"
        guideline: "Lead with user benefit, not product features"

      - principle: "Confident but humble"
        guideline: "Authoritative without arrogance"

    tone_by_context:
      - context: "Educational content (docs, tutorials)"
        tone: "Patient, thorough, supportive"

      - context: "Marketing campaigns"
        tone: "Energetic, aspirational, action-oriented"

      - context: "Support and troubleshooting"
        tone: "Empathetic, reassuring, solution-focused"

      - context: "Legal and compliance"
        tone: "Formal, precise, neutral"

  quality_standards:
    content_quality_criteria:
      - criterion: "Accuracy"
        standard: "All facts verified, data sourced, claims substantiated"
        verification: "Subject matter expert review for technical content"

      - criterion: "Clarity"
        standard: "Readable at appropriate grade level (Flesch-Kincaid)"
        verification: "Automated readability scoring"

      - criterion: "Completeness"
        standard: "Answers user questions, no critical gaps"
        verification: "Peer review against content brief"

      - criterion: "Consistency"
        standard: "Aligns with brand voice, style guide, established messaging"
        verification: "Editorial checklist"

      - criterion: "Accessibility"
        standard: "WCAG AA compliance (alt text, headings, color contrast)"
        verification: "Automated accessibility testing"
```

**Phase 5: Workflow & Approval Processes**

```yaml
content_workflow_governance:
  risk_based_review:
    low_risk_content:
      examples: ["Blog posts", "Social media", "Internal comms"]
      approval_path: "Creator → Editor → Publish"
      sla: "24-48 hours"

    medium_risk_content:
      examples: ["Product pages", "Landing pages", "Email campaigns"]
      approval_path: "Creator → Editor → Content lead → Publish"
      sla: "3-5 days"

    high_risk_content:
      examples: ["Legal disclaimers", "Medical claims", "Financial advice", "Executive comms"]
      approval_path: "Creator → Editor → SME → Legal/Compliance → Executive (if needed) → Publish"
      sla: "7-14 days (expedited process for urgent)"

  approval_checkpoints:
    content_brief_approval:
      when: "Before creation starts"
      who: "Content manager"
      criteria: ["Aligned to strategy", "Clear objectives", "Audience defined"]

    first_draft_review:
      when: "Initial content complete"
      who: "Editor"
      criteria: ["Meets brief", "Quality standards", "Brand voice"]

    technical_review:
      when: "For complex/technical content"
      who: "Subject matter expert"
      criteria: ["Factual accuracy", "Technical precision", "No misleading claims"]

    legal_review:
      when: "High-risk content (regulatory, contractual, claims)"
      who: "Legal counsel"
      criteria: ["Regulatory compliance", "No liability", "Appropriate disclaimers"]

    final_publish_approval:
      when: "All reviews complete"
      who: "Publisher role"
      criteria: ["All approvals obtained", "Metadata complete", "QA passed"]
```

**Phase 6: Enforcement & Compliance Mechanisms**

```yaml
governance_enforcement:
  preventive_controls:
    system_level:
      - "Role-based permissions (can't publish without approval)"
      - "Required field validation (cannot save without)"
      - "Template locking (brand-approved layouts only)"
      - "Workflow automation (routes to required reviewers)"

    editorial_level:
      - "Content briefs required before creation"
      - "Style guide training (mandatory for all creators)"
      - "Automated style checking (Grammarly, Acrolinx)"
      - "Pre-publish QA checklist"

  detective_controls:
    content_audits:
      - type: "Quarterly compliance audits"
        scope: "Random sample of published content"
        checks: ["Legal compliance", "Brand standards", "Accessibility"]

      - type: "Monthly quality spot checks"
        scope: "Recently published content"
        checks: ["Editorial quality", "SEO standards", "UX principles"]

    monitoring:
      - "Brand monitoring (social listening for off-brand content)"
      - "Analytics anomalies (content performing unexpectedly bad)"
      - "User complaints (content quality issues)"

  corrective_actions:
    violation_tiers:
      minor_violations:
        examples: ["Style guide deviations", "Formatting errors", "Missing metadata"]
        action: "Feedback and coaching"

      moderate_violations:
        examples: ["Brand voice inconsistency", "Quality below standard", "Process shortcuts"]
        action: "Mandatory retraining + increased review oversight"

      major_violations:
        examples: ["Legal non-compliance", "Trademark misuse", "Unauthorized publishing"]
        action: "Publishing privileges suspended + formal remediation plan"

      critical_violations:
        examples: ["Regulatory violations", "Data privacy breaches", "Crisis mismanagement"]
        action: "Immediate content takedown + legal review + leadership escalation"
```

### Governance Operations

**Governance Team Structure:**

```yaml
governance_organization:
  content_governance_council:
    role: "Strategic oversight and policy approval"
    members: ["VP Content", "General Counsel", "Chief Brand Officer", "Head of Compliance", "Content Operations Lead"]
    meeting_cadence: "Quarterly"
    responsibilities:
      - "Approve new policies and major updates"
      - "Review compliance metrics and audit results"
      - "Resolve escalated governance exceptions"
      - "Align governance strategy with business objectives"

  content_standards_team:
    role: "Day-to-day governance operations"
    members: ["Content governance manager", "Editorial standards lead", "Compliance specialist", "Training coordinator"]
    responsibilities:
      - "Maintain style guide and brand voice documentation"
      - "Conduct content audits and quality reviews"
      - "Manage exception requests"
      - "Deliver governance training"
      - "Monitor compliance metrics"
      - "Update policies and procedures"

  distributed_content_champions:
    role: "Governance ambassadors in business units"
    members: ["One per major content team (10-20 people depending on scale)"]
    responsibilities:
      - "First line support for governance questions"
      - "Advocate for governance standards within team"
      - "Provide feedback on policy practicality"
      - "Participate in governance council meetings (rotating)"
```

---

## Output Schema

```yaml
content_governance_framework:
  governance_model:
    approach: "Centralized | Federated | Distributed"
    governance_layers: ["Global mandates", "Regional guidelines", "Local practices"]

  authority_structure:
    raci_matrix:
      strategic_decisions: "[Decision type: R, A, C, I assignments]"
      operational_decisions: "[...]"
      governance_decisions: "[...]"

  policy_framework:
    tier_1_global_policies:
      - policy_name: "[Policy name]"
        scope: "[What it covers]"
        requirements: "[Specific rules]"
        enforcement: "[How it's enforced]"

    tier_2_regional_guidelines: "[...]"
    tier_3_operational_procedures: "[...]"

  editorial_standards:
    style_guide: "[Grammar, mechanics, formatting rules]"
    voice_and_tone: "[Brand voice principles, tone by context]"
    quality_criteria: "[Accuracy, clarity, completeness, consistency, accessibility]"

  workflow_governance:
    risk_based_review: "[Low/medium/high risk content paths]"
    approval_checkpoints: "[When and who approves]"
    slas: "[Response time expectations]"

  enforcement_mechanisms:
    preventive_controls: "[System and editorial controls]"
    detective_controls: "[Audits and monitoring]"
    corrective_actions: "[Violation tiers and responses]"

  governance_operations:
    governance_council: "[Members, meeting cadence, responsibilities]"
    standards_team: "[Day-to-day operations]"
    content_champions: "[Distributed ambassadors]"

  metrics_and_kpis:
    compliance_metrics: "[% content passing audits, policy violation rates]"
    quality_metrics: "[Editorial quality scores, user satisfaction]"
    efficiency_metrics: "[Time to publish, approval cycle time]"
```

---

## Examples

### Example 1: Global Financial Services (Highly Regulated)

**Context**: 5,000-person organization, 15 countries, strict regulatory compliance (SEC, FCA, MiFID II).

**Governance Model**: Centralized with regional compliance overlays
- Central content team creates all client-facing content
- Regional compliance officers review for local regulations
- Zero tolerance for non-compliant content

**Key Policies**:
- All investment content reviewed by legal (100% mandatory)
- Financial projections include required disclaimers
- No social media content without pre-approval
- Quarterly regulatory compliance audits

**Enforcement**:
- System blocks publishing without legal approval checkbox
- Automated disclaimer injection for regulated content types
- Real-time monitoring for non-compliant social posts

**Results**: Zero regulatory violations in 2 years, 100% audit pass rate.

### Example 2: Multi-Brand Consumer Company (Federated Model)

**Context**: 8 brands, 12 countries, 500+ content creators across business units.

**Governance Model**: Federated with brand flexibility
- Corporate center sets trademark, legal, accessibility mandates
- Each brand has own voice, style guide, creative direction
- Regional teams adapt for cultural relevance

**Key Policies**:
- Global: Trademark usage, data privacy, accessibility
- Brand-level: Brand voice, visual identity, channel strategies
- Regional: Localization standards, cultural sensitivity

**Enforcement**:
- Quarterly cross-brand audits (consistency, compliance)
- Brand champions network (monthly governance calls)
- Exception process for off-brand creative (CMO approval)

**Results**: 40% faster campaign execution while maintaining brand integrity across all 8 brands.

### Example 3: Tech Startup (Lightweight Governance)

**Context**: 80-person company, rapid growth, developer-focused audience.

**Governance Model**: Distributed with peer review
- No formal approval process (trust + alignment)
- Style guide and brand basics documented
- Peer review before publishing

**Key Policies**:
- Technical accuracy (peer review by engineers)
- Accessibility minimums (automated checks)
- Crisis communication (escalate to CEO)

**Enforcement**:
- Monthly content quality retrospectives
- Automated style and accessibility linting
- Quarterly "governance health check"

**Results**: Published 300+ pieces in 6 months with 95% positive audience feedback, minimal quality issues.

### Example 4: Healthcare Organization (Risk-Based Workflow)

**Context**: Hospital system, patient-facing content, HIPAA compliance critical.

**Governance Model**: Risk-based review intensity
- Low-risk (blog posts): Editor approval
- Medium-risk (service pages): Editor + medical lead
- High-risk (medical advice): Editor + physician + legal

**Key Policies**:
- Medical claims reviewed by licensed clinicians
- Patient privacy (no PHI in content, even examples)
- Accessibility (WCAG AA for all patient content)

**Enforcement**:
- Content risk scoring (auto-routes to appropriate workflow)
- Mandatory clinician sign-off tracked in CMS
- Annual HIPAA compliance training for all content staff

**Results**: 100% compliant with healthcare regulations, zero patient safety incidents related to content.

### Example 5: Government Agency (Full Transparency)

**Context**: Federal agency, public accountability, Freedom of Information Act (FOIA) compliance.

**Governance Model**: Centralized with multiple approval layers
- All external content approved by communications director
- Legal review for policy statements
- Public affairs clearance for media-related content

**Key Policies**:
- Plain language (readability standards mandated)
- Accessibility (Section 508 compliance required)
- Records management (all content archived per retention schedule)
- No partisan political content

**Enforcement**:
- Multi-layer approval workflow (cannot bypass)
- Automated accessibility testing (blocks publish if fails)
- Content retention policies enforced at system level

**Results**: 100% Section 508 compliance, improved public trust through clear communication.

---

## Success Metrics

- **Compliance Rate**: 95%+ of content passes audits on first review
- **Policy Awareness**: 90%+ of content creators trained and certified annually
- **Approval Efficiency**: Average approval cycle time within SLA targets
- **Quality Consistency**: 85%+ editorial quality scores across all teams
- **Risk Mitigation**: Zero critical compliance violations, <5 minor violations/quarter
- **Creator Satisfaction**: 75%+ of creators rate governance as "helpful, not blocking"

---

## Best Practices

- **Start with Why**: Help teams understand governance benefits (not just rules)
- **Right-Size for Maturity**: Don't over-govern early-stage organizations
- **Make it Easy to Comply**: Templates, checklists, automation reduce friction
- **Enforce Consistently**: Exceptions erode credibility; apply policies fairly
- **Iterate Based on Feedback**: Governance should evolve with organization
- **Celebrate Compliance**: Recognize teams with strong governance practices
- **Balance Control with Speed**: Governance should enable, not block

---

## Common Pitfalls

- **Governance Theater**: Policies that exist on paper but aren't enforced
- **One-Size-Fits-All**: Same governance rules for blog posts and legal disclaimers
- **No Executive Sponsorship**: Governance fails without leadership support
- **Hidden Policies**: If creators can't find the policy, they can't follow it
- **Blame Culture**: Governance as punishment rather than enablement
- **Set-and-Forget**: Policies never updated as business evolves
- **Bottleneck Approvers**: Small approval team blocks entire organization

---

**License**: © 2025 Adedayo Agarau. Licensed under CC BY-SA 4.0.
**Maintainer**: Adedayo Agarau

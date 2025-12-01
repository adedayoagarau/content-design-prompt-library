## Enterprise Renewal & Expansion Revenue Framework v1.0

**Purpose**: Design a comprehensive customer expansion and renewal content system that transforms existing customer relationships into predictable revenue growth engines through systematic health monitoring, value demonstration, strategic expansion planning, and renewal optimization—maximizing customer lifetime value while reducing churn and building advocate relationships.

**Context**: Use this framework when establishing or optimizing customer success, account management, and renewal strategies for B2B subscription businesses. For most SaaS and enterprise software companies, expansion revenue (upsells, cross-sells, seat expansion) and renewals represent 70-130% of new bookings and have 3-5x better margins. Effective renewal and expansion systems require proactive engagement, continuous value demonstration, and strategic timing—not just "asking for more money" at contract end.

**Strategic Frameworks Applied**:
- **Customer Health Scoring** - Predictive indicators of renewal likelihood and expansion readiness
- **Value Realization Framework** - Demonstrating ROI throughout customer lifecycle, not just at sale
- **Expansion Opportunity Identification** - Systematic discovery of upsell, cross-sell, and growth paths
- **Renewal Process Optimization** - 90-180 day renewal campaigns preventing last-minute surprises
- **Pricing & Packaging for Growth** - Tiered structures naturally driving expansion
- **Customer Advocacy Development** - Transforming satisfied customers into referenceable champions

---

## Variables

Define strategic variables for comprehensive renewal and expansion framework:

### Business Model Variables
- `{{product_name}}`: Core product or platform
- `{{pricing_model}}`: Per-user | Per-feature | Consumption-based | Flat-rate | Tiered packages
- `{{contract_structure}}`: Annual | Multi-year | Month-to-month
- `{{expansion_mechanisms}}`: Seat expansion | Feature upgrades | Additional products | Usage-based growth
- `{{current_arr}}`: Annual Recurring Revenue baseline
- `{{renewal_rate}}`: Current gross and net revenue retention
- `{{expansion_rate}}`: Current expansion revenue as % of base

### Customer Segmentation Variables
- `{{customer_tiers}}`: Enterprise ($250K+ ACV) | Mid-Market ($50K-$250K) | SMB (<$50K)
- `{{customer_lifecycle_stage}}`: Onboarding (0-90 days) | Adoption (90-365 days) | Value Realization (1-2 years) | Renewal (approaching contract end)
- `{{customer_health}}`: Green (healthy, expanding) | Yellow (at-risk) | Red (churn risk)
- `{{product_usage}}`: Power users | Regular users | Low/declining usage | Non-users
- `{{stakeholder_engagement}}`: Executive sponsor active | Champion engaged | No active relationships

### Account Management Variables
- `{{csm_structure}}`: Dedicated CSMs | Pooled | Tech-touch (automated) | Hybrid
- `{{csm_to_customer_ratio}}`: 1:10 for enterprise, 1:50 for mid-market, tech-touch for SMB
- `{{account_ownership}}`: CSM owns renewal | AE owns expansion | Split ownership
- `{{qbr_frequency}}`: Quarterly Business Reviews for strategic accounts
- `{{touchpoint_cadence}}`: Monthly check-ins, weekly usage reviews, etc.

### Value Demonstration Variables
- `{{roi_metrics}}`: KPIs that matter to customer (time saved, revenue generated, cost reduced)
- `{{value_tracking}}`: How customer success measures value realization
- `{{success_milestones}}`: Key achievements throughout customer journey
- `{{business_outcomes}}`: Strategic value beyond tactical ROI
- `{{benchmark_data}}`: How customer compares to similar customers

### Expansion Strategy Variables
- `{{expansion_triggers}}`: Signals indicating readiness for upsell (usage growth, new use cases, stakeholder engagement)
- `{{cross_sell_products}}`: Additional offerings for existing customers
- `{{upsell_paths}}`: Tier upgrades (Starter → Professional → Enterprise)
- `{{land_and_expand_strategy}}`: Start small, grow accounts over time
- `{{whitespace_analysis}}`: Departments, geographies, use cases not yet using product

### Renewal Process Variables
- `{{renewal_timeline}}`: When renewal conversations begin (90-180 days before)
- `{{renewal_approval_process}}`: Customer procurement, legal, executive sign-off requirements
- `{{renewal_negotiation}}`: Price increases, term extensions, expansion bundling
- `{{churn_prevention}}`: Early warning systems and intervention playbooks
- `{{at_risk_escalation}}`: When to involve senior leadership in retention efforts

---

## Prompt

You are an enterprise customer success and revenue strategist designing a comprehensive renewal and expansion framework for **{{company_name}}**, enabling **{{csm_structure}}** to maximize customer lifetime value through systematic health monitoring, continuous value demonstration, strategic expansion planning, and renewal optimization. Your task is to create a proactive system that transforms **{{customer_tiers}}** customers from buyers into long-term partners, achieving >110% net revenue retention through **{{expansion_mechanisms}}** while minimizing churn.

### Strategic Foundation

**Renewal & Expansion Philosophy:**

**Principle 1: Earn the Renewal Every Day**
- Renewal isn't a once-a-year event—it's continuous value delivery
- Customers decide to renew (or churn) based on value received, not contract terms
- Proactive engagement, usage monitoring, value demonstration throughout lifecycle
- Never reach contract end with surprise: "We're not renewing"

**Principle 2: Expansion Follows Value Realization**
- Don't ask for more money until customer has achieved ROI from initial purchase
- Expansion conversations stem from success: "You're getting value from X, ready for Y?"
- Natural expansion paths built into product packaging and customer journey
- Land-and-expand mindset: Start small, grow strategically over time

**Principle 3: Customer Health Drives Action**
- Systematic health scoring predicts renewal risk and expansion opportunity
- Green customers: Focus on expansion and advocacy
- Yellow customers: Intervention to improve health before renewal
- Red customers: Escalate for retention or graceful exit

**Principle 4: Value Quantification is Continuous**
- Track and report customer ROI throughout lifecycle, not just at sale
- Quarterly Business Reviews showcase value delivered and plan for future
- Customers who see quantified value renew at higher rates and expand faster
- "We've saved you $500K this year" > "Hope you're happy with us"

**Principle 5: Renewals are Expansion Opportunities**
- Renewal conversations should include expansion discussion (if customer healthy)
- Bundling expansion into renewal creates natural growth moment
- Multi-year deals at renewal reduce churn risk and create stability
- Price increases at renewal (inflation, added value) maintain healthy unit economics

**Principle 6: Customer Advocacy is the Goal**
- Satisfied customers → Referenceable customers → Advocates → Growth engine
- Advocates provide referrals, case studies, testimonials, social proof
- NPS and advocacy programs systematize converting customers into champions

### Customer Health Scoring System

**Health Score Components:**

```yaml
customer_health_framework:
  product_usage_score: "40% weighting"
    metrics:
      - login_frequency: "Active users logging in weekly (vs. monthly, or never)"
        scoring:
          green: ">70% of licenses actively used weekly"
          yellow: "40-70% active usage"
          red: "<40% active usage"

      - feature_adoption: "Using core features vs. just basic capabilities"
        scoring:
          green: "Adopted 80%+ of features in their tier"
          yellow: "Adopted 40-80% of features"
          red: "Adopted <40% of features (underutilizing)"

      - usage_trend: "Growing, stable, or declining activity"
        scoring:
          green: "Usage increasing month-over-month"
          yellow: "Flat usage"
          red: "Usage declining >20% in last quarter"

  business_outcomes_score: "30% weighting"
    metrics:
      - roi_achievement: "Has customer achieved target ROI?"
        scoring:
          green: "Met or exceeded ROI goals"
          yellow: "Partial ROI (50-99% of target)"
          red: "Not achieving ROI (<50% of target)"

      - value_milestones: "Key success milestones achieved"
        scoring:
          green: "Hit all major milestones on schedule"
          yellow: "Hit some milestones, delayed on others"
          red: "Behind on critical milestones"

      - business_impact: "Qualitative business value perception"
        scoring:
          green: "Customer vocally praises value, sees as strategic"
          yellow: "Satisfied but not enthusiastic"
          red: "Expresses disappointment or unmet expectations"

  relationship_health_score: "20% weighting"
    metrics:
      - executive_sponsorship: "Executive champion actively engaged?"
        scoring:
          green: "Executive sponsor attends QBRs, actively engaged"
          yellow: "Executive aware but not deeply involved"
          red: "No executive sponsorship or lost champion"

      - stakeholder_engagement: "Breadth of relationships in account"
        scoring:
          green: "Multi-threaded (relationships across 5+ stakeholders)"
          yellow: "Limited (2-4 relationships)"
          red: "Single-threaded (1 contact) or contacts unresponsive"

      - sentiment: "NPS or qualitative satisfaction"
        scoring:
          green: "NPS >50 (promoters), enthusiastic feedback"
          yellow: "NPS 0-50 (passives), neutral feedback"
          red: "NPS <0 (detractors), negative feedback"

  support_and_issue_resolution_score: "10% weighting"
    metrics:
      - ticket_volume_and_severity: "Support issues"
        scoring:
          green: "Low ticket volume, no critical issues"
          yellow: "Moderate tickets, some critical issues resolved"
          red: "High ticket volume, unresolved critical issues"

      - escalations: "Executive escalations or complaints"
        scoring:
          green: "No escalations"
          yellow: "1-2 escalations, resolved"
          red: "Multiple unresolved escalations"

  overall_health_score:
    calculation: "Weighted average of above components (0-100 scale)"
    thresholds:
      green: "Score 70-100 (Healthy - focus on expansion and advocacy)"
      yellow: "Score 40-69 (At-Risk - intervention required)"
      red: "Score 0-39 (Critical - escalate for retention or churn)"

  action_triggers:
    green_customers:
      - "Quarterly Business Reviews showcasing value"
      - "Expansion opportunity assessment"
      - "Advocacy program recruitment (case studies, references, testimonials)"
      - "Renewal process starts 120 days out (low friction expected)"

    yellow_customers:
      - "Monthly intervention calls (CSM + customer)"
      - "Root cause analysis: Why is health declining?"
      - "Action plan to improve (increase usage, achieve ROI, rebuild relationships)"
      - "Renewal process starts 180 days out (proactive risk mitigation)"

    red_customers:
      - "Immediate escalation (CSM + Sales leadership + Product)"
      - "Executive-to-executive outreach"
      - "Turnaround plan or graceful exit strategy"
      - "Retention offer (if appropriate): Discount, extended support, product improvements"
```

**Health Score Review Cadence:**
- **Weekly**: Automated scoring, alerts for score changes >10 points
- **Monthly**: CSM review of entire book of business, prioritize interventions
- **Quarterly**: Executive review of enterprise account health, strategic interventions

### Continuous Value Demonstration

**Value Tracking Throughout Lifecycle:**

**Phase 1: Onboarding (Days 0-90)**

**Goal**: Achieve "first value moment" quickly—don't let customers question purchase decision.

**Value Metrics to Track:**
- Time to first value: How quickly did they see benefit? (Target: <30 days)
- Onboarding completion: Did they complete setup and training?
- Initial use case success: Did first workflow deliver expected outcome?

**Content & Touchpoints:**
- **Week 1**: Welcome email + kickoff call setting success criteria
- **Week 2**: Implementation support, usage monitoring
- **Week 4**: First value checkpoint: "Here's what you've achieved so far..."
- **Day 60**: Mid-onboarding check-in, adjust plan if needed
- **Day 90**: Onboarding completion review + QBR 1 (set next 90-day goals)

**Phase 2: Adoption & Growth (Months 3-12)**

**Goal**: Expand usage, deepen adoption, achieve full ROI.

**Value Metrics to Track:**
- Feature adoption: Are they using advanced capabilities?
- User expansion: Growing from initial pilot to broader rollout?
- ROI achievement: Have they hit financial targets discussed at sale?

**Content & Touchpoints:**
- **Monthly**: Usage reports showing activity trends
- **Quarterly**: QBRs with value scorecards (ROI achieved, usage metrics, benchmarks vs. similar customers)
- **Ad-hoc**: Success milestones celebrated (e.g., "You just processed your 10,000th transaction—here's what that means in value: $X saved")
- **Training**: Ongoing enablement on advanced features

**Phase 3: Value Realization & Expansion (Years 1-2+)**

**Goal**: Customer is extracting full value; identify expansion opportunities.

**Value Metrics to Track:**
- Total value delivered: Cumulative ROI over customer lifetime
- Expansion indicators: Usage growth, new use cases, whitespace analysis
- Advocacy readiness: NPS, willingness to provide references

**Content & Touchpoints:**
- **Quarterly**: QBRs focusing on strategic value, business outcomes, future roadmap
- **Annual**: Executive Business Review (EBR) with C-suite (if enterprise account)
- **Expansion Conversations**: "You're seeing great value from X. Have you considered Y for [adjacent use case]?"
- **Advocacy Asks**: "Would you be willing to share your success story as a case study?"

### Quarterly Business Review (QBR) Framework

**QBR Purpose:**
- Demonstrate value delivered since last review
- Align on goals for next quarter
- Identify expansion opportunities
- Strengthen executive relationships
- Prevent renewal surprises

**QBR Structure (60 minutes):**

```yaml
qbr_agenda:
  part_1_review: "20 minutes - Value Delivered Last Quarter"
    content:
      - usage_metrics: "Activity trends, user adoption, feature utilization"
      - roi_achieved: "Quantified value: Time saved, cost reduced, revenue impacted"
        example: "Your team saved 120 hours last quarter using [feature], worth $15,000 in labor cost"
      - benchmarking: "How you compare to similar customers in your industry"
        example: "You're in top 20% for feature adoption—here's what top 10% are doing differently"
      - success_milestones: "Key achievements unlocked"
        example: "You reached 80% user adoption (our success threshold is 70%)"

  part_2_current_state: "15 minutes - Where We Are Today"
    content:
      - health_check: "Usage health, any concerns or blockers?"
      - open_issues: "Outstanding support tickets or product gaps"
      - feedback_loop: "What's working well? What could improve?"
      - product_updates: "New features released since last QBR that you should know about"

  part_3_forward_looking: "20 minutes - Goals for Next Quarter"
    content:
      - goal_setting: "What do you want to achieve in next 90 days?"
      - action_plan: "Steps to get there (your side + our side)"
      - expansion_discussion: "Are there new use cases, departments, or capabilities to explore?"
        example: "You're getting great value from [product A]. Have you considered [product B] for [related use case]? 60% of our customers use both."
      - roadmap_preview: "What's coming that you should plan for?"

  part_4_renewal_readiness: "5 minutes - Renewal Planning (if within 180 days)"
    content:
      - renewal_timeline: "Contract ends [date]. We'll formally start renewal process [date]."
      - expected_changes: "Based on your growth and value, here's what renewal likely looks like: [pricing, terms]"
      - expansion_bundling: "Should we include [expansion] in renewal discussion?"

  deliverables:
    - qbr_deck: "[Slide deck summarizing above, branded, data-rich]"
    - value_report: "[One-pager: ROI achieved, key metrics, next steps]"
    - action_items: "[Documented in CRM: Who does what by when]"
```

**QBR Best Practices:**
- **Preparation**: CSM prepares deck with real data, not generic templates
- **Executive Attendance**: Customer C-suite or VP-level attends (if enterprise account)
- **Data-Driven**: Quantified value, not vague "things are going well"
- **Two-Way**: Customer shares their goals and feedback, not just vendor presentation
- **Forward-Looking**: More about future value than rehashing past
- **Action-Oriented**: Clear next steps, not just informational meeting

### Expansion Opportunity Identification

**Expansion Trigger Matrix:**

```yaml
expansion_triggers:
  usage_based_triggers:
    trigger: "Customer approaching or exceeding usage limits"
    signals:
      - "Using >80% of seat licenses (ready for more users)"
      - "Approaching data/storage limits"
      - "High activity on entry-tier features (ready for advanced tier)"
    expansion_opportunity: "Proactive outreach: 'You're growing! Let's discuss expanding seats/tier before you hit limits.'"
    timing: "When they hit 75-80% capacity (before constraint hits)"

  feature_adoption_triggers:
    trigger: "Customer mastered current tier, ready for more"
    signals:
      - "Adopted 90%+ of available features"
      - "Asking about capabilities in higher tier"
      - "Workarounds indicating need for advanced features"
    expansion_opportunity: "Upsell to next tier: 'You've outgrown [current tier]. Here's what [next tier] unlocks.'"
    timing: "After 6-12 months of strong adoption"

  business_outcome_triggers:
    trigger: "Customer achieving ROI, seeing success"
    signals:
      - "Quantified value exceeds investment (strong ROI)"
      - "Executive sponsor praising product internally"
      - "Expansion budget approved for other initiatives"
    expansion_opportunity: "Expand scope: 'You're getting X value from [initial use case]. Let's expand to [new department/use case] to multiply that value.'"
    timing: "Once initial ROI proven (6-12 months)"

  organizational_triggers:
    trigger: "Changes in customer organization creating new opportunities"
    signals:
      - "Customer acquired another company (new users to onboard)"
      - "New executive hired who's a product champion"
      - "Entering new market or geography"
      - "Launching new product line"
    expansion_opportunity: "Expansion to support growth: 'Congrats on acquisition. Let's discuss rolling out to new entity.'"
    timing: "As organizational changes announced"

  competitive_triggers:
    trigger: "Customer consolidating vendors or switching from competitor"
    signals:
      - "Frustrated with other vendor in adjacent space"
      - "Actively consolidating tech stack"
      - "Budget reallocation creating opportunity"
    expansion_opportunity: "Cross-sell or competitive displacement: 'If you're considering alternatives to [competitor], we can help.'"
    timing: "When customer expresses vendor frustration"

  whitespace_analysis:
    concept: "Identify parts of customer organization not yet using product"
    analysis_dimensions:
      - departments: "Which teams could benefit but aren't using yet?"
      - geographies: "Are international offices using, or just HQ?"
      - use_cases: "Are there adjacent workflows we could support?"
      - products: "If we have multiple products, are they using all relevant ones?"
    expansion_opportunity: "Whitespace expansion: 'You're seeing success in [Department A]. Have you considered rolling out to [Department B] with similar needs?'"
    timing: "After initial implementation successful (12-18 months)"
```

**Expansion Conversation Framework:**

**Step 1: Anchor to Current Value**
"You've been using [product] for [timeframe], and you've achieved [quantified value: $X saved, Y% improvement, Z hours saved]. Your team has adopted it well, and we're seeing great engagement."

**Step 2: Identify New Opportunity**
"Given that success, I wanted to explore whether [expansion opportunity] makes sense. [Describe new use case, department, or capability.] Many customers in similar situations have expanded here and seen [quantified additional value]."

**Step 3: Quantify Incremental Value**
"If you were to [expand], we'd expect you'd see an additional [ROI/benefit]. Based on [similar customer example], the payback is typically [timeframe]. Here's what that could look like for you: [Specific projection]."

**Step 4: Propose Next Steps**
"Does this seem relevant? If so, here's what I'd suggest: [Pilot, demo, expand current contract, bundled renewal]. What makes most sense from your perspective?"

**Expansion Pricing Strategy:**
- **Upsell (Tier Upgrade)**: Incremental pricing (pay difference between tiers)
- **Cross-Sell (New Product)**: Bundled discount (15-25% off if buying multiple products)
- **Seat Expansion**: Volume discount tiers (per-seat cost decreases as count increases)
- **Renewal + Expansion Bundle**: "If we combine renewal + expansion, I can offer better terms than separate transactions"

### Renewal Process & Timeline

**Renewal Timeline (T-180 to T+30):**

```yaml
renewal_process:
  t_minus_180_days: "Early Planning (6 Months Out)"
    owner: "CSM"
    actions:
      - "Review customer health score (should be Yellow+ to confidently renew)"
      - "If Red health: Escalate for intervention, may not be saveable"
      - "Conduct QBR focused on value achieved in past 6 months"
      - "Preliminary expansion opportunity assessment"
      - "Internal forecast: Renewal likelihood, expansion potential, price increase strategy"
    deliverables:
      - "Renewal forecast in CRM (Commit, Upside, or At-Risk)"
      - "Expansion opportunity memo if applicable"

  t_minus_120_days: "Renewal Launch (4 Months Out)"
    owner: "CSM + AE (if expansion involved)"
    actions:
      - "Formal renewal conversation: 'Your contract renews [date]. Let's start planning.'"
      - "Present renewal proposal: Pricing (with any increases), terms, potential expansion"
      - "Value recap deck: ROI achieved over contract term"
      - "If expansion opportunity: Bundle expansion into renewal discussion"
      - "Understand customer procurement process and timeline"
    deliverables:
      - "Renewal proposal document"
      - "Value summary (ROI report)"
      - "Mutual close plan (key dates, approvals needed, contract signing timeline)"

  t_minus_90_days: "Negotiation & Approvals (3 Months Out)"
    owner: "AE (if commercial negotiation) or CSM (if straightforward renewal)"
    actions:
      - "Address pricing questions or pushback"
      - "Negotiate terms (price increases, expansion, contract length)"
      - "Support customer's internal approval process (provide business case materials)"
      - "Legal: Send updated contract for review"
      - "Finance: Coordinate on payment terms and invoicing"
    deliverables:
      - "Revised proposal (if negotiated)"
      - "Business case materials for customer's internal approvals"

  t_minus_60_days: "Contracting (2 Months Out)"
    owner: "AE/CSM + Legal + Procurement"
    actions:
      - "Contract review and redlines"
      - "Resolve legal and security questions"
      - "Confirm final commercial terms"
      - "Schedule contract signing (with buffer before renewal date)"
    deliverables:
      - "Executed contract"

  t_minus_30_days: "Finalization & Risk Mitigation (1 Month Out)"
    owner: "CSM + Finance"
    actions:
      - "If unsigned: Escalate urgency, involve executives if needed"
      - "Confirm invoicing details"
      - "Plan for seamless transition (no service disruption)"
      - "Conduct renewal retrospective: What went well, what to improve for next cycle"
    deliverables:
      - "Signed contract (ideally by now)"
      - "Invoice sent or ready to send"

  t_minus_0_days: "Renewal Date"
    actions:
      - "Service continues without interruption"
      - "Invoice processed"
      - "Post-renewal thank you and alignment call"
    deliverables:
      - "Renewal confirmed in CRM (Closed-Won)"

  t_plus_30_days: "Post-Renewal Alignment"
    owner: "CSM"
    actions:
      - "QBR focused on goals for new contract term"
      - "If expansion included: Implementation planning"
      - "Advocacy ask: 'Thank you for renewing. Would you be open to [case study, reference]?'"
```

**Renewal Communication Templates:**

**T-120 Renewal Launch Email:**
```
Subject: [Company Name] Contract Renewal - Let's Plan Ahead

Hi [Customer Name],

Hope you're doing well! I wanted to reach out because your contract with us renews on [Date], which is about 4 months away.

Over the past [contract term], you've achieved impressive results:
- [ROI Metric 1: e.g., Saved $200K in operational costs]
- [ROI Metric 2: e.g., Increased team productivity 35%]
- [ROI Metric 3: e.g., Processed 50,000+ transactions with 99.9% accuracy]

As we approach renewal, I'd love to:
1. Review your goals for the next [term] and ensure we're positioned to support them
2. Discuss any expansion opportunities (we've identified a few that could deliver incremental value)
3. Walk through the renewal process and timeline so there are no surprises

Can we schedule 30 minutes in the next week or two to kick off this conversation?

Looking forward to continuing our partnership.

[Your Name]
```

**T-30 Urgency Email (If Unsigned):**
```
Subject: Action Required: [Company Name] Contract Renewal (30 Days)

Hi [Customer Name],

Quick note: Your contract renews in 30 days ([Date]), and we don't yet have a signed renewal in place.

To ensure zero service disruption, we need the signed contract by [Date - with buffer].

**Outstanding Items:**
- [Legal review of Section 4.2]
- [Final approval from CFO]
- [Procurement PO number]

**Next Steps:**
- [Action needed from customer]
- [Action we'll take on our side]

Can you confirm we're on track? If there's anything holding this up, let's discuss ASAP so we can address it.

Thanks,
[Your Name]
```

### Churn Prevention & At-Risk Customer Intervention

**At-Risk Identification:**

**Early Warning Signs:**
- Health score drops below 70 (yellow) or 40 (red)
- Usage declining >20% month-over-month
- Executive sponsor departed or disengaged
- Support tickets escalating or unresolved
- Negative NPS or feedback
- Delayed payment or contract renewal pushback
- Customer not responding to outreach

**Intervention Playbook:**

```yaml
at_risk_intervention:
  step_1_diagnose:
    actions:
      - "Review all available data: usage, health score, support issues, relationship status"
      - "Internal team huddle: CSM + AE + Product + Support"
      - "Root cause analysis: Why is customer at-risk?"
        possibilities:
          - "Not achieving ROI (value problem)"
          - "Poor adoption (change management problem)"
          - "Technical issues (product problem)"
          - "Lost champion (relationship problem)"
          - "Budget cuts (external factor)"
          - "Competitive displacement (competitor problem)"

  step_2_customer_outreach:
    actions:
      - "CSM schedules call: 'I've noticed [specific concern]. Can we discuss?'"
      - "Frank conversation: 'Are we meeting your expectations? What's not working?'"
      - "Listen more than talk—understand their perspective"
      - "Avoid defensiveness or excuses—show empathy and commitment to fixing"

  step_3_action_plan:
    actions:
      - "Based on root cause, develop turnaround plan:"
        value_problem: "Re-engage on ROI, demonstrate value better, adjust use case"
        adoption_problem: "Additional training, change management support, simplify workflows"
        technical_problem: "Prioritize product fixes, involve engineering, workarounds"
        relationship_problem: "Rebuild relationships, executive-to-executive engagement"
        budget_problem: "Explore pricing flexibility, demonstrate indispensability"
        competitive_problem: "Competitive positioning, demonstrate differentiation, prevent FUD"

  step_4_execute_and_monitor:
    actions:
      - "Document action plan in CRM with dates and owners"
      - "Weekly check-ins with customer on progress"
      - "Internal weekly status updates (cross-functional if needed)"
      - "Track health score improvement (goal: move Red → Yellow → Green)"

  step_5_escalate_if_needed:
    escalation_criteria:
      - "Customer unresponsive to CSM outreach (involve AE or exec)"
      - "Technical issues require product changes (involve product team)"
      - "Competitive threat (involve competitive intelligence, adjust positioning)"
      - "Pricing/commercial issue (involve sales leadership for retention offer)"
    escalation_process:
      - "CSM briefs sales leadership + exec sponsor"
      - "Executive-to-executive outreach: [Your CEO/CRO] → [Customer CEO/CXO]"
      - "Retention offer if appropriate (discount, extended support, product commitments)"

  step_6_win_back_or_graceful_exit:
    win_back_success:
      - "Customer re-engages, health improves, relationship restored"
      - "Document what worked for future at-risk situations"
      - "Continue monitoring closely for next 6 months"

    graceful_exit:
      - "If customer has decided to churn, make it smooth"
      - "Offboarding support (data export, transition assistance)"
      - "Maintain positive relationship (they may return, and they'll talk about you)"
      - "Win/loss analysis: What could we have done differently?"
```

---

## Output Schema

```yaml
renewal_expansion_framework:
  strategic_foundation:
    philosophy:
      - "Earn renewal every day through continuous value"
      - "Expansion follows value realization"
      - "Health-driven action prioritization"
      - "Continuous value quantification"
      - "Renewals as expansion opportunities"
      - "Customer advocacy as ultimate goal"

  health_scoring:
    components:
      product_usage: "40% (login frequency, feature adoption, usage trends)"
      business_outcomes: "30% (ROI achievement, milestones, impact)"
      relationship_health: "20% (executive sponsorship, stakeholder breadth, sentiment)"
      support_issues: "10% (ticket volume, escalations)"

    thresholds:
      green: "70-100 (Healthy - expansion focus)"
      yellow: "40-69 (At-Risk - intervention needed)"
      red: "0-39 (Critical - escalate)"

    actions_by_health:
      green: "QBRs, expansion assessment, advocacy recruitment"
      yellow: "Monthly interventions, action plans, 180-day renewal prep"
      red: "Immediate escalation, turnaround plan or exit"

  value_demonstration:
    lifecycle_phases:
      onboarding: "0-90 days - Achieve first value quickly"
      adoption: "3-12 months - Expand usage, achieve full ROI"
      value_realization: "1-2+ years - Maximize value, identify expansion"

    qbr_framework:
      cadence: "Quarterly for strategic accounts"
      structure: "Review value delivered, current state, forward goals, renewal planning"
      deliverables: "QBR deck, value report, action items"

  expansion_strategy:
    triggers:
      - "Usage-based (approaching limits)"
      - "Feature adoption (mastered current tier)"
      - "Business outcomes (ROI achieved, ready for more)"
      - "Organizational changes (acquisition, growth)"
      - "Competitive (consolidating vendors)"
      - "Whitespace analysis (untapped departments/geographies)"

    conversation_framework:
      - "Anchor to current value"
      - "Identify new opportunity"
      - "Quantify incremental value"
      - "Propose next steps"

    pricing:
      upsell: "Incremental pricing (pay difference)"
      cross_sell: "Bundled discount (15-25% off)"
      seat_expansion: "Volume discount tiers"
      renewal_bundle: "Better terms when combined"

  renewal_process:
    timeline:
      t_minus_180: "Early planning, health assessment"
      t_minus_120: "Renewal launch, proposal presented"
      t_minus_90: "Negotiation, approvals"
      t_minus_60: "Contracting, legal review"
      t_minus_30: "Finalization, risk mitigation"
      t_zero: "Renewal date, service continues"
      t_plus_30: "Post-renewal alignment QBR"

    key_activities:
      - "Value recap (ROI achieved over term)"
      - "Expansion bundling (if applicable)"
      - "Price increase justification (if applicable)"
      - "Mutual close plan (approvals, timeline)"
      - "Executive engagement (if strategic account)"

  churn_prevention:
    early_warning_signs:
      - "Health score drop"
      - "Usage decline"
      - "Executive disengagement"
      - "Support escalations"
      - "Negative sentiment"

    intervention_playbook:
      - "Diagnose root cause"
      - "Customer outreach (frank conversation)"
      - "Action plan (address root cause)"
      - "Execute and monitor weekly"
      - "Escalate if needed (exec-to-exec)"
      - "Win back or graceful exit"
```

---

## Examples

### Example 1: SaaS Platform - Net Revenue Retention from 95% → 118%

**Context**: B2B SaaS, $20M ARR, 500 customers, 15 CSMs. Net Revenue Retention (NRR) was 95% (5% shrinkage annually). No systematic expansion program; CSMs focused only on retention, not growth. Renewals often last-minute, stressful negotiations.

**Implementation Approach**:
- Implemented health scoring system (automated weekly, CSM review monthly)
- Established 120-day renewal process (no more last-minute surprises)
- Created QBR program for all customers >$50K ACV
- Launched expansion playbook: Identified whitespace, triggers, conversation frameworks
- Trained CSMs on expansion selling (historically only retention-focused)
- Aligned incentives: CSM comp included expansion revenue, not just renewal rate

**Results** (18 months):
- **Net Revenue Retention**: Increased from 95% → 118% (23 percentage point improvement)
- **Gross Revenue Retention**: Improved from 88% → 93% (better renewals)
- **Expansion Revenue**: Grew from $1.2M/year → $5.6M/year (367% increase)
- **Expansion Rate**: 42% of customers expanded in year (up from 12%)
- **Average Contract Value**: Grew 28% through expansion
- **Renewal Process**: 94% of renewals now signed >30 days before expiration (vs. 31% before)

**Key Learnings**:
- Health scoring enabled proactive intervention—churn prevention 6 months earlier
- QBRs were forcing function for value demonstration—customers who had QBRs: 97% renewal rate
- CSMs initially resistant to "selling"—reframed as "helping customers maximize value"
- Expansion bundled with renewals was natural conversation, higher success rate
- Systematic approach to whitespace analysis revealed $8M+ expansion opportunity in existing base

### Example 2: Enterprise Software - Reducing Churn from 22% → 8%

**Context**: Enterprise software, $45M ARR, high-touch customers (avg $250K ACV). Churn rate: 22% annually. Most churn was "surprise" - customer stopped returning calls, then canceled at renewal. CSMs had 1:8 customer ratio but no structured engagement model.

**Implementation Approach**:
- Mandated QBRs for all accounts (executive attendance required)
- Created value tracking system: ROI calculated and reported quarterly
- Implemented early warning system: Health scores, usage monitoring, engagement tracking
- At-risk escalation protocol: Yellow/Red accounts get exec-to-exec outreach
- Onboarding overhaul: Achieve first value in 30 days (was taking 90+ days)

**Results** (24 months):
- **Churn Rate**: Reduced from 22% → 8% (14 percentage point improvement)
- **At-Risk Early Identification**: 85% of at-risk accounts identified >90 days before renewal (vs. <20% before)
- **Intervention Success**: 68% of at-risk accounts successfully retained (vs. 15% before)
- **QBR Impact**: Accounts with 4 QBRs/year: 98% retention vs. 72% without QBRs
- **Time-to-Value**: Reduced from 92 days → 31 days (faster value = less early churn)
- **Revenue Saved**: $9.9M ARR prevented from churning annually

**Key Learnings**:
- QBRs with executive attendance forced C-suite engagement—couldn't ghost relationship
- Value quantification was critical—customers who saw quantified ROI: 96% retained
- Onboarding was make-or-break—90% of churn happened in first year; fixing onboarding fixed early churn
- At-risk intervention needed exec involvement—CSM alone couldn't save accounts
- Some churn was healthy (bad-fit customers)—focus interventions on good-fit accounts

### Example 3: Marketing Platform - Land-and-Expand from $45K → $180K Average ACV

**Context**: Marketing automation platform, land-and-expand GTM strategy. Initial deals avg $45K (single team, limited features). Goal: Grow accounts to $180K+ through expansion. No systematic expansion program—account growth was opportunistic.

**Implementation Approach**:
- Designed expansion journey: Starter (single team) → Professional (multiple teams) → Enterprise (org-wide + advanced features)
- Built expansion trigger system: Usage milestones that indicate readiness for next tier
- Created expansion value calculators: Quantify ROI of expanding to additional teams/features
- Incentivized expansion: CSMs compensated on expansion revenue growth
- Developed expansion content: Case studies, ROI models, tiered feature comparisons

**Results** (20 months):
- **Average ACV**: Grew from $45K → $122K (171% increase)
- **Expansion Rate**: 58% of customers expanded within 18 months (up from 18%)
- **Time to First Expansion**: Reduced from 22 months → 11 months (faster value realization)
- **Multi-Product Adoption**: 34% of customers now using 2+ products (up from 8%)
- **Expansion Revenue**: $12.3M annually (57% of total new ARR)
- **Land-and-Expand Efficiency**: 4.2x more efficient than new customer acquisition

**Key Learnings**:
- Expansion triggers based on usage data were highly predictive—proactive outreach at right moment
- Value calculator showing incremental ROI was essential—customers needed to justify internal budget
- Tiered packaging with clear upgrade paths made expansion natural conversation
- CSMs needed sales enablement—expansion is consultative selling, not just account management
- Land-and-expand pricing incentives (discounts for multi-year, bundled products) accelerated growth

### Example 4: Cybersecurity SaaS - Executive Business Reviews Driving Expansion

**Context**: Cybersecurity platform, selling to CISOs and security teams. Initial deals avg $150K. Customers using product but relationships shallow—no C-suite engagement. Expansion rare (12% of customers).

**Implementation Approach**:
- Launched Executive Business Review (EBR) program: Annual CISO-to-CISO meetings
- EBR content: Security posture review, threat landscape, ROI achieved, strategic roadmap
- Expansion integrated into EBR: "Here's how other CISOs in your industry are using us more broadly"
- Used EBRs to identify whitespace: "Are your international offices protected? What about [adjacent use case]?"
- Created executive sponsor program: Each strategic account had exec sponsor from vendor

**Results** (16 months):
- **EBR Participation**: 78% of target accounts (>$150K) participated in EBR
- **Expansion Rate**: 49% of EBR accounts expanded (vs. 12% without EBR)
- **Average Expansion Deal Size**: $180K (larger than initial deals)
- **C-Suite Relationships**: 83% of accounts now had active CISO relationship (vs. 22% before)
- **Renewal Rate**: Accounts with EBRs: 97% renewal vs. 84% without
- **Expansion ARR**: $8.7M directly attributed to EBR program

**Key Learnings**:
- C-suite relationships were key to enterprise expansion—directors couldn't approve large expansions
- EBRs needed to deliver strategic value, not just product updates—threat intelligence, peer insights
- Executive sponsor program demonstrated commitment—customers felt valued, not just "a number"
- Whitespace discovery was natural EBR outcome—executives could see org-wide gaps
- EBRs took significant CSM time (8-12 hours prep) but ROI was 10x+

### Example 5: Vertical SaaS - Multi-Year Renewals Reducing Churn Volatility

**Context**: Vertical SaaS for healthcare, $30M ARR, annual contracts. Renewal volatility created unpredictable revenue—some quarters 95% retention, others 75%. Goal: Stabilize renewals through multi-year contracts.

**Implementation Approach**:
- Introduced multi-year pricing incentive: 20% discount for 3-year commit (vs. annual)
- Positioned multi-year at renewal: "Lock in pricing for 3 years vs. annual increases"
- Multi-year bundling with expansion: "If you're expanding, let's do 3-year combined deal"
- Targeted healthy accounts (Green health scores) for multi-year conversations
- Sales compensation aligned: Higher comp for multi-year deals (predictable revenue premium)

**Results** (22 months):
- **Multi-Year Adoption**: 47% of renewals now 3-year contracts (vs. 8% before)
- **Renewal Predictability**: Locked in $21M ARR for 3 years (vs. $6M before)
- **Net Revenue Retention**: Improved from 94% → 108% (multi-year customers expanded more)
- **Churn Rate Stability**: Quarterly churn variance reduced 68% (more predictable)
- **Customer LTV**: Increased 51% (longer tenure, less churn volatility)
- **Revenue Forecasting**: CFO reported 85% forecast accuracy (vs. 62% before)

**Key Learnings**:
- Multi-year discount (20%) was acceptable to company economics for revenue predictability
- Customers valued price protection—"lock in rate for 3 years" was compelling
- Multi-year only worked with healthy accounts—don't lock in unhappy customers
- Expansion bundled with multi-year created win-win (customer got discount, company got growth + commitment)
- Sales team initially feared 20% discount, but realized LTV increase outweighed discount cost

---

## Success Metrics

- **Net Revenue Retention (NRR)**: Target >110% (expansion > churn)
- **Gross Revenue Retention (GRR)**: Target >90% (minimize churn)
- **Expansion Rate**: >40% of customers expand annually
- **Renewal Rate**: >90% of customers renew (logo retention)
- **Customer Health Distribution**: >70% Green, <10% Red
- **QBR Completion**: >80% of target accounts complete QBRs quarterly
- **Time-to-Value**: <60 days to achieve first value milestone
- **Expansion Sales Cycle**: <90 days from opportunity identification to expansion close
- **At-Risk Intervention Success**: >60% of Yellow/Red accounts restored to Green
- **Multi-Year Contract Adoption**: >30% of renewals are multi-year

---

## Best Practices

- **Health-Driven Prioritization**: Focus energy on Green (expansion) and Red (save or exit), not evenly distributed
- **Value Quantification Continuous**: Track and report ROI throughout lifecycle, not just at sale
- **Expand from Strength**: Only push expansion with healthy, satisfied customers—don't pressure at-risk accounts
- **Multi-Thread Relationships**: Executive sponsor + champion + users = resilient relationships
- **Renewal as Growth Moment**: Bundle expansion with renewal for natural upsell conversation
- **Preempt Surprises**: 120-180 day renewal process prevents last-minute issues
- **Advocacy Harvesting**: Satisfied customers → Case studies, references, testimonials → Fuel new sales
- **CSMs as Revenue Generators**: CSMs should drive expansion, not just retention—align comp and training
- **Graceful Exits**: Make churning customers' exit smooth—they may return, and they'll talk about you
- **Win/Loss Learning**: Every churn is a learning opportunity—feed insights back into product and process

---

## Common Pitfalls

- **Reactive Renewals**: Starting renewal process 30 days before expiration—too late to fix issues
- **No Health Monitoring**: Waiting for customer to complain instead of proactively identifying at-risk accounts
- **Value Amnesia**: Not tracking or reporting value achieved—customers forget ROI and feel price sting
- **Expansion Too Early**: Pushing upsells before customer has realized value from initial purchase
- **CSM as "Customer Hug"**: CSMs focused only on relationships, not revenue outcomes
- **Ignoring Red Accounts**: Hoping at-risk customers will magically improve—intervene early or let go
- **Single-Threaded**: Relying on one champion—when they leave, relationship evaporates
- **No Expansion Strategy**: Hoping customers naturally expand vs. systematic identification and execution
- **Price Increase Surprise**: Springing price increases at renewal without justification—causes friction
- **QBRs as Vendor Updates**: Using QBRs to talk about your product roadmap instead of customer value and outcomes

---

**License**: © 2025 Adedayo Agarau. Licensed under CC BY-SA 4.0.
**Compatibility**: Optimized for Claude Code (Anthropic), ChatGPT (OpenAI), Gemini (Google), Copilot (Microsoft).
**Maintainer**: Adedayo Agarau | https://github.com/Chinoscode | https://linkedin.com/in/adedayo-agarau

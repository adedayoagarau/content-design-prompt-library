## Investor Communications Architecture & Relationship Management v1.0

**Purpose**: Design a strategic investor communications system that builds trust, manages expectations, maintains transparency, and creates lasting relationships with current and prospective investors across funding stages—from seed to public markets. Establish governance frameworks, content templates, crisis protocols, and measurement systems that support fundraising success and long-term shareholder value.

**Context**: Use this framework when establishing or refining investor communications for startups raising capital, growth companies managing investor relations, or public companies optimizing shareholder communications. Critical during fundraising, post-close relationship building, quarterly business updates, crisis management, or preparing for liquidity events. Especially valuable for first-time founders learning investor relations, CFOs building IR functions, or executives navigating increased transparency requirements.

**Strategic Frameworks Applied**:
- **Stakeholder Segmentation Model** - Tailored messaging for different investor types and stages
- **Transparency Calibration Framework** - Balancing openness with competitive sensitivity
- **Narrative Consistency System** - Unified story across pitches, updates, and public communications
- **Expectation Management Protocol** - Setting and meeting investor expectations systematically
- **Crisis Communication Playbook** - Managing difficult conversations and bad news delivery
- **Value Creation Storytelling** - Demonstrating progress and building confidence over time

---

## Variables

Define strategic variables for comprehensive investor communications:

### Company Context Variables
- `{{company_name}}`: Organization name and full legal entity
- `{{company_stage}}`: Pre-seed | Seed | Series A-F | Pre-IPO | Public company
- `{{funding_status}}`: Currently fundraising | Between rounds | Post-acquisition | IPO-ready
- `{{industry_sector}}`: Industry vertical and market category
- `{{business_model}}`: B2B SaaS | Marketplace | DTC | Hardware | Biotech | Fintech | etc.
- `{{revenue_stage}}`: Pre-revenue | <$1M ARR | $1-10M | $10-50M | $50M+ | Public
- `{{geographic_markets}}`: Primary and expansion markets

### Investor Landscape Variables
- `{{current_investors}}`: Existing cap table composition (angels, VCs, strategics, institutional)
- `{{lead_investors}}`: Board members and most influential investors
- `{{investor_count}}`: Number of individual investors on cap table
- `{{target_investors}}`: Prospective investors for current/next round
- `{{investor_types}}`: Venture capital | Private equity | Angels | Family offices | Strategic corporates | Public market
- `{{investor_sophistication}}`: First-time angels | Experienced VCs | Institutional | Mix
- `{{board_composition}}`: Number of seats, investor representation, independent directors

### Communication Strategy Variables
- `{{update_frequency}}`: Monthly | Quarterly | Board meetings only | Event-driven
- `{{transparency_level}}`: Conservative (minimal disclosure) | Moderate | High transparency
- `{{content_format}}`: Email text | Slide deck | Written memo | Video | Dashboard access
- `{{communication_tools}}`: Email | Carta | AngelList | Pulley | Custom portal | Bloomberg terminal
- `{{approval_process}}`: CEO solo | CEO + CFO | Board review | Legal counsel
- `{{distribution_method}}`: All investors | Tiered by involvement | Board vs. general investors

### Business Objectives Variables
- `{{primary_goal}}`: Fundraising preparation | Relationship maintenance | Transparency compliance | IPO readiness | M&A positioning
- `{{fundraising_timeline}}`: Current round (timeline) | Next round (projected) | Not applicable
- `{{key_metrics}}`: Primary KPIs investors care about (ARR, growth rate, unit economics, etc.)
- `{{success_factors}}`: What needs to go right for next milestone
- `{{risk_factors}}`: Known challenges and how being addressed
- `{{competitive_landscape}}`: Market positioning and key competitors

### Governance & Risk Variables
- `{{legal_constraints}}`: What can/cannot be shared legally (especially for public companies)
- `{{confidentiality_requirements}}`: NDA protocols, data room access, insider information handling
- `{{crisis_scenarios}}`: Potential bad news situations (missed targets, churn, layoffs, pivots)
- `{{proactive_vs_reactive}}`: When to communicate proactively vs. wait for investor questions
- `{{escalation_procedures}}`: When to involve board, when CEO handles, when to bring in advisors

---

## Prompt

You are a strategic investor relations architect designing a comprehensive communication system for **{{company_name}}**, a **{{company_stage}}** company in **{{industry_sector}}** ({{business_model}}). Your task is to create a systematic approach to investor communications that maintains **{{current_investors}}** trust and confidence, supports **{{primary_goal}}**, and establishes governance frameworks aligned with **{{transparency_level}}** while navigating **{{legal_constraints}}**.

### Strategic Foundation: Investor Relations Philosophy

**The Investor Relations Compact:**

Effective investor communications balance:
1. **Transparency**: Honest updates about business performance, challenges, and opportunities
2. **Confidentiality**: Protecting competitive information and complying with legal requirements
3. **Consistency**: Regular cadence and predictable content structure
4. **Accessibility**: Investors can reach leadership when needed but founders aren't overwhelmed
5. **Value**: Updates provide genuine insight, not just box-checking compliance

**Investor Segmentation Framework:**

Not all investors require identical communication. Segment based on:

**Tier 1 - Board Members & Lead Investors:**
- **Profile**: Board seats, largest checks, most involved
- **Communication**: Most frequent and detailed (pre-board materials, 1:1 calls, strategic discussions)
- **Value**: Strategic guidance, network access, next round leadership
- **Frequency**: Monthly at minimum, often weekly during critical periods
- **Access**: Direct CEO/CFO line, can request calls anytime

**Tier 2 - Active/Strategic Investors:**
- **Profile**: Significant investment, board observer rights, actively helpful
- **Communication**: Regular updates, quarterly calls, selective 1:1s
- **Value**: Specific expertise, customer/talent intros, amplification
- **Frequency**: Quarterly formal updates + ad hoc for major news
- **Access**: Can schedule calls with reasonable notice

**Tier 3 - Standard Investors:**
- **Profile**: Smaller checks, less involved, passive capital
- **Communication**: Standard update emails, annual meetings
- **Value**: Capital, potential pro-rata participation, network effects
- **Frequency**: Quarterly updates, major milestone announcements
- **Access**: Can email questions, responses within 48-72 hours

**Tier 4 - Pro-Rata Only/Minimal Involvement:**
- **Profile**: Very small checks, often angels from early rounds
- **Communication**: Minimal required updates only
- **Value**: Primarily financial, potential pro-rata in next round
- **Frequency**: Semi-annual or annual only
- **Access**: Email questions, periodic response

This tiered approach ensures high-value relationships get appropriate attention without overwhelming founders.

### Regular Update Cadence & Content Architecture

**Monthly Investor Update (for Tier 1-2)**

**Optimal Format**: Email (800-1200 words) or slide deck (8-12 slides)

**Standard Structure:**

**Subject Line:**
```
{{company_name}} Investor Update - [Month Year] - [One key highlight]
```
Example: "Acme Investor Update - March 2025 - Crossed $5M ARR"

**Section 1: TL;DR (30-second version)**
- Most important headline metric or milestone
- Key win and key challenge
- Specific ask if applicable

**Section 2: Key Metrics Dashboard**
```
[Previous month] → [Current month] (% change)

Revenue Metrics:
- ARR/MRR: $X → $Y (+Z%)
- New MRR: $X
- Churn: X% (vs. X% target)
- Net revenue retention: X%

Growth Metrics:
- New customers: X → Y
- Pipeline: $X (X% increase)
- Conversion rate: X%

Efficiency Metrics:
- Burn rate: $X/month
- Runway: X months
- CAC: $X (vs. $Y LTV)
- Gross margin: X%

Team:
- Headcount: X (hired: Y, departed: Z)
- Key open roles: [List]
```

**Section 3: Progress Against Goals**
Review quarterly goals and status:
- Goal 1: [Status - On track / Ahead / Behind / Pivoting]
- Goal 2: [Status + brief explanation]
- Goal 3: [Status + brief explanation]

**Section 4: Key Highlights (Wins)**
3-5 notable achievements this month:
- Product: [Launch, feature, customer feedback]
- Go-to-market: [New customer, partnership, channel]
- Team: [Key hire, culture win]
- Fundraising/Financial: [Profitability milestone, extension of runway]
- Press/Recognition: [Media coverage, awards]

**Section 5: Challenges & Headwinds**
2-3 honest challenges and how you're addressing:
- Challenge: [Specific issue]
- Impact: [How it affects business]
- Action: [What you're doing about it]
- Help needed: [If investors can assist]

**Example:**
```
Challenge: VP Sales departed unexpectedly after 6 months
Impact: Pipeline generation slowed by ~25% in transition
Action: Promoted top AE to interim role, retained exec recruiter, CEO taking key meetings
Help needed: If you know exceptional B2B SaaS sales leaders, please intro
```

**Section 6: Key Learnings**
1-2 insights from the month (makes updates interesting, shows growth):
- What you learned about customers, market, product, team, or yourself
- Unexpected discoveries or pivots in thinking
- Framework or process that's working well

**Section 7: Focus for Next Month**
Top 3 priorities for coming month (creates accountability):
1. [Specific goal with measurable outcome]
2. [Specific goal with measurable outcome]
3. [Specific goal with measurable outcome]

**Section 8: Asks**
Specific, actionable requests:
- Intro to [specific person/company type]
- Advice on [specific challenge]
- Participation in [customer call, product feedback session]
- Pro-rata commitment timeline for next round

**Closing:**
- Thank you for support
- How to reach you for questions
- Next board meeting or investor call date

**Quarterly Investor Update (for Tier 3-4)**

**More polished, less operational detail:**
- Quarter-over-quarter metrics (not monthly volatility)
- Major milestones achieved
- Strategic direction and market context
- High-level challenges without overwhelming detail
- Forward-looking goals for next quarter
- Fundraising status if applicable

**Length**: 500-800 words or 5-7 slides

### Board Meeting Materials & Governance

**Pre-Board Package Timeline:**
- Draft materials: 7 days before meeting
- CEO/CFO review: 5 days before
- Final to board: 3 business days before (minimum)
- Board book: 50-80 slides typically for mature companies, 20-30 for early stage

**Board Deck Standard Structure:**

**Part 1: Business Review (60% of deck)**
1. Agenda & Key Discussion Topics
2. Executive Summary (1-slide dashboard)
3. Financial Performance (detailed P&L, cash flow, balance sheet)
4. Revenue Deep Dive (by segment, cohort analysis, churn)
5. Key Metrics & KPIs (vs. targets and prior periods)
6. Sales Pipeline & Go-to-Market (pipeline coverage, conversion, CAC/LTV)
7. Product Update (roadmap, releases, customer feedback)
8. Team & Culture (hiring, retention, engagement, key roles)
9. Competitive Landscape (market positioning, win/loss analysis)
10. Risks & Mitigation (what keeps you up at night)

**Part 2: Strategic Discussion (30% of deck)**
11. Strategic Initiatives Update (progress on multi-quarter priorities)
12. Key Decisions Needed (specific asks for board input/approval)
13. Deep Dive Topic (one area for extended discussion - varies by meeting)
    - Examples: Pricing strategy, international expansion, M&A opportunity, product strategy

**Part 3: Looking Forward (10% of deck)**
14. Next Quarter Priorities
15. Key Hires & Organizational Changes
16. Fundraising Update (if applicable)
17. Asks from Board (intros, expertise, decisions)

**Board Meeting Best Practices:**
- Quarterly cadence minimum, monthly for early stage or rapid growth
- 2-3 hours standard, avoid running over (suggests lack of preparation)
- Pre-read materials thoroughly (don't read slides during meeting)
- Reserve 60-70% of time for discussion, not presentation
- Bring problems to solve, not just updates to share
- Executive team presents their areas (shows depth of leadership)
- Document decisions and action items clearly
- Follow up within 48 hours with summary and next steps

### Fundraising Communications

**Pre-Fundraise Preparation:**

**6 Months Before Round:**
- Ensure current investors receiving regular updates (warm vs. cold investors matters)
- Build relationships with target investors ({{target_investors}}) through thought leadership, intros
- Clean up cap table issues (resolve any conflicts, convert notes)
- Prepare financial model and projections (3-year plan)

**3 Months Before Round:**
- Create comprehensive data room
- Prepare pitch deck (investment memo version, not teaser)
- Get legal documents in order (updated articles, clean cap table)
- Brief key investors on upcoming round timing and target

**1 Month Before Active Fundraise:**
- Send "heads up" to current investors about upcoming raise
- Confirm pro-rata participation interest from existing investors
- Calendar pre-emptions with lead investors if applicable
- Line up customer references and partner validation

**During Active Fundraise:**

**Update Frequency**: Weekly to Tier 1-2 investors during active raise

**Content of Fundraise Updates:**
```
Subject: {{company_name}} Fundraising Update - Week of [Date]

TL;DR:
- Meetings: X this week (Y partners, Z associates)
- Term sheets: X received, Y verbal interest
- Timeline: Targeting close by [date]
- Status: [On track / Need help / Oversubscribed]

This Week's Activity:
- First meetings: [Company A (Partner Name), Company B (Partner Name)]
- Second meetings: [Company C, Company D]
- Partner meetings: [Company E]
- Passed/No: [Company F (reason: stage too early)]

Fundraise Snapshot:
- Total target: $XM
- Current commitments: $XM (X% of round)
  - Existing investors (pro-rata): $XM
  - New lead commitment: $XM (term sheet signed)
  - New investors (soft commits): $XM
- Expected close date: [Date]
- Still open: $XM (X spots at $XK-XM checks)

Pipeline:
- Outbound target list: X firms remaining
- Meetings scheduled next week: X
- Expected partner meetings: X

What's Working:
- [What resonates with investors]
- [Strong validation points]

Challenges:
- [What concerns are we hearing]
- [Areas needing better storytelling]

Asks:
- Warm intro to [Specific Partner at Firm]
- Customer reference calls needed (2-3 investors asked)
- Can you join investor dinner on [Date]?

Next Update: [Date]
```

**Post-Fundraise Communications:**

**Immediately After Close:**
- Thank you email to all participants (existing and new)
- Update to non-participating investors (brief, factual, grateful)
- Public announcement coordination (press release, social, blog)
- Introduction email connecting all new investors to each other and company

**30 Days Post-Close:**
- Onboarding for new investors (access to data room, communication tools, key contacts)
- First post-close update with deployment plans
- Schedule 1:1 kickoff calls with each new investor
- Set expectations for ongoing communication

**90 Days Post-Close:**
- "First 90 days with new capital" retrospective
- Progress against plans shared during fundraise
- Recalibrated goals if circumstances changed
- Deepening relationships with new board members/investors

### Crisis Communications & Bad News Protocol

**Philosophy: Bad news doesn't get better with age.**

Investors value transparency about challenges more than only hearing good news. The companies that maintain investor trust through difficulties are those that communicate early, honestly, and with clear plans.

**Crisis Communication Framework:**

**Step 1: Assess Severity (within 24 hours of issue)**

**Tier 1 Crisis** (Immediate board/investor notification required):
- Material financial impact (missing quarterly targets by >20%, cash crunch)
- Founder/CEO departure or conflict
- Legal/regulatory serious issues
- Customer concentration risk materializing (losing top customer)
- Product failure or security breach affecting many customers
- Potential company-threatening situation

**Tier 2 Issue** (Next scheduled update + board notification):
- Key executive departure (VP level)
- Missing targets by 10-20%
- Product delays impacting revenue
- Significant customer churn event
- Competitive threat emergence
- Fundraising taking longer than expected

**Tier 3 Challenge** (Regular update cycle):
- Individual sales slip or customer loss
- Hiring delays
- Product bugs or minor delays
- Normal business volatility

**Step 2: Communicate Proactively (don't wait for investors to ask)**

**Crisis Communication Template:**

```
Subject: {{company_name}} Important Update - [Brief description]

[If emailing all investors vs. just board, make that clear]

Team,

I'm writing to share [difficult news] that impacts our business and to outline our response plan.

WHAT HAPPENED:
[Factual description of situation, timeline, root cause if known]

BUSINESS IMPACT:
[Specific impact on metrics, timeline, finances]
- Revenue impact: [Quantify if possible]
- Timeline impact: [Delays to goals]
- Customer/product impact: [If applicable]
- Cash/runway impact: [Critical if relevant]

IMMEDIATE ACTIONS TAKEN:
[What you've already done in response]
1. [Action 1]
2. [Action 2]
3. [Action 3]

FORWARD PLAN:
[How you're addressing this going forward]
- Short-term (next 30 days): [Specific actions]
- Medium-term (next 90 days): [Strategic adjustments]
- Success metrics: [How you'll know plan is working]

REVISED EXPECTATIONS:
[Updated goals, timeline, or metrics]
- Previous target: [X]
- Revised target: [Y]
- Rationale: [Why this is realistic]

LEARNINGS & PREVENTION:
[What you're learning and how preventing recurrence]

SUPPORT NEEDED:
[If investors can help - intros, advice, patience]

I'll provide updates on [frequency] and welcome any questions or feedback.
I'm available for calls at [specific times] this week.

[Signature]
```

**Step 3: Follow-Up Cadence**

After crisis communication:
- **48 hours**: Respond to all investor questions/concerns
- **1 week**: Progress update on action plan
- **2-4 weeks**: Detailed update in regular cadence
- **Monthly**: Continue elevated communication until stabilized

**Crisis-Specific Scenarios:**

**Scenario: Missing Revenue Targets**
- Communicate 2-4 weeks before quarter end when clear targets won't be met (not on last day of quarter)
- Provide specific shortfall amount and reasons (pipeline slip, deal timing, churn spike)
- Explain whether temporary (timing) or structural (requires strategy change)
- Show pipeline coverage for recovery
- Adjust forward guidance conservatively

**Scenario: Key Executive Departure**
- Announce immediately (don't let rumors spread)
- Explain circumstances professionally (resigned to pursue other opportunity, mutual parting, etc.)
- Detail interim plan and search timeline
- Emphasize continuity and team strength
- If acrimonious, get legal review before communicating

**Scenario: Pivot or Strategic Shift**
- Provide context for why pivot is necessary (market feedback, unit economics, competition)
- Show evidence/data that led to decision
- Outline new direction with clear rationale
- Address sunk costs transparently
- Revised timeline and capital requirements
- Explain why this increases likelihood of success

**Scenario: Runway Concerns**
- Communicate when runway drops below 9-12 months (earlier if clear burn isn't improving)
- Provide detailed cash flow and burn analysis
- Options being pursued: Revenue acceleration, burn reduction, bridge financing, strategic alternatives
- Decision timeline and what happens if can't raise
- Specific asks: Bridge capital, customer intros, M&A discussions

### Value Creation Storytelling & Long-Term Relationship Building

**Beyond Updates: Building Genuine Relationships**

Best investor relationships transcend quarterly emails:

**Proactive Engagement Tactics:**

**1. Utilize Investor Expertise:**
- Invite to specific customer meetings where their experience valuable
- Request feedback on product roadmap or pricing
- Ask to review key hire candidates in their domain
- Engage in strategic brainstorming for expansion decisions

**2. Include in Wins:**
- Personal thank you when their intro converts to customer/hire
- Credit publicly when appropriate ("thanks to [Investor] for connecting us to [Company]")
- Share customer testimonials and positive feedback
- Celebrate milestones with specific investor contributions

**3. Facilitate Investor-to-Investor Value:**
- Connect investors with each other for deals or expertise
- Share portfolio insights that help their other investments
- Invite to exclusive events where they can network
- Create investor community (annual gathering, Slack channel, etc.)

**4. Transparency Builds Trust:**
- Share not just what happened but what you're learning
- Admit mistakes and show growth
- Ask for help before you're desperate
- Give credit to others (team, investors, partners)

**Annual Investor Meeting/Summit:**

For companies with 15+ investors, consider annual in-person gathering:
- **Format**: Half-day event with company updates, product demos, customer panel, social time
- **Value**: Investors meet each other, feel part of community, can help each other
- **Timing**: Tie to board meeting to leverage existing travel, or standalone in attractive location
- **Content**: Year in review, year ahead strategy, deep dive on key initiative, Q&A
- **ROI**: Strengthened relationships, increased likelihood of pro-rata participation, valuable feedback

**Investor NPS & Feedback:**

Annually survey investors (anonymously) on:
- Communication quality and frequency (too much/too little/just right)
- Helpfulness of update content
- Areas where they'd like more detail or less
- How company can better leverage their expertise
- Whether they'd invest again (and why/why not)

Use feedback to continuously improve IR program.

### Tools & Systems for Investor Relations

**Communication Platforms:**

**Email (Universal Baseline):**
- Pros: Everyone has it, simple, works at all stages
- Cons: Hard to track engagement, no centralized archive for all investors
- Best for: Early stage, simple updates, broad distribution

**Cap Table Management Tools:**
- **Carta**: Industry standard, includes investor updates feature, integrated with cap table
- **Pulley**: Modern alternative, good UX, equity management + updates
- **AngelList**: For rolling funds or syndicates
- Pros: Professional, trackable, integrated with ownership data
- Cons: Cost, requires investors to have accounts

**Dedicated IR Platforms:**
- **Visible.vc**: Purpose-built for startup investor updates
- **Finta**: Metrics dashboard and update creation
- **Cabal**: Investor CRM and communication
- Pros: Best features for investor relations (metrics tracking, engagement analytics)
- Cons: Another tool, cost, only justified at scale

**For Public Companies:**
- **Q4 Inc, Nasdaq IR Intelligence, Donnelley Financial Solutions**
- **Bloomberg Terminal, FactSet, S&P Capital IQ** (where investors access your data)

**Data Room Setup:**

Organized data room builds confidence and accelerates due diligence:

**Structure:**
```
1. Company Overview
   - Pitch deck
   - One-pager
   - Company timeline/milestones
   - Press coverage

2. Financial Information
   - Historical financials (3 years)
   - Financial model (projections)
   - Cap table
   - Prior fundraise documents
   - Monthly/quarterly management reporting

3. Product & Technology
   - Product roadmap
   - Technical architecture
   - IP/patents
   - Security & compliance docs

4. Go-to-Market
   - Customer list (if not confidential)
   - Case studies
   - Sales materials
   - Pricing structure
   - Pipeline data

5. Team
   - Org chart
   - Team bios
   - Equity/option pool details
   - Key employment agreements

6. Legal & Compliance
   - Articles of incorporation
   - Board resolutions
   - Material contracts
   - Regulatory filings
   - Insurance policies

7. Market & Competition
   - Market research
   - Competitive analysis
   - Industry reports
```

**Access Control:**
- Tier 1: Full access to everything
- Tier 2: Most sections, excluding some sensitive financials
- Tier 3: Overview and summary information only
- Prospective investors: Customized due diligence subset

### Public Company Investor Relations

**Transition from Private to Public IR:**

Going public dramatically changes investor relations:

**New Requirements:**
- **Regulation FD (Fair Disclosure)**: Can't share material non-public information selectively
- **Earnings Calls**: Quarterly public presentations with Q&A
- **Earnings Guidance**: Setting and managing expectations for public investors
- **Quiet Periods**: Restricted communication before earnings and during offerings
- **Analyst Coverage**: Managing relationships with equity research analysts
- **Institutional Investor Relations**: Roadshows, investor days, conferences
- **Retail Investor Communications**: Broader base of individual investors
- **Press Releases**: Formal announcements for material events
- **SEC Filings**: 10-K, 10-Q, 8-K, proxy statements

**Public Company IR Team:**
- VP/Director of Investor Relations (dedicated role)
- Support from CFO and CEO
- External IR consultant/agency
- Legal counsel for compliance
- Financial printer and filing services

**Earnings Process:**
- Pre-earnings: Financial close, results preparation, script writing, legal review
- Earnings Release: After market close, press release, prepared remarks, live Q&A
- Post-earnings: Analyst calls, investor follow-ups, conference participation

**Guidance Philosophy:**
- Conservative (meet or beat): Set expectations you're confident exceeding
- Transparent (full range): Share realistic ranges even if volatile
- Minimal (no guidance): Avoid guidance trap, but requires strong justification

---

## Output Schema

```yaml
investor_communications:
  company_context:
    name: "{{company_name}}"
    stage: "{{company_stage}}"
    funding_status: "{{funding_status}}"
    industry: "{{industry_sector}}"
    business_model: "{{business_model}}"
    revenue_stage: "{{revenue_stage}}"

  investor_landscape:
    current_investors:
      total_count: "{{investor_count}}"
      lead_investors: ["[Investor 1]", "[Investor 2]"]
      board_seats: "[# of investor board members]"
      types: "{{investor_types}}"

    segmentation:
      tier_1:
        definition: "Board members and lead investors"
        count: "[#]"
        communication: "Monthly detailed updates + board materials"
        access: "Direct CEO/CFO line"

      tier_2:
        definition: "Active strategic investors"
        count: "[#]"
        communication: "Quarterly updates + major milestones"
        access: "Scheduled calls with notice"

      tier_3:
        definition: "Standard investors"
        count: "[#]"
        communication: "Quarterly updates"
        access: "Email questions, 48-72hr response"

  communication_cadence:
    monthly_updates:
      frequency: "{{update_frequency}} for Tier 1-2"
      format: "{{content_format}}"
      distribution: "{{distribution_method}}"

      structure:
        tldr: "30-second key highlight and challenge"
        metrics_dashboard:
          revenue: "[ARR/MRR, growth, churn, NRR]"
          growth: "[Customers, pipeline, conversion]"
          efficiency: "[Burn, runway, CAC/LTV, margin]"
          team: "[Headcount, key hires, open roles]"
        progress_vs_goals: "Status on quarterly objectives"
        highlights: "3-5 wins this month"
        challenges: "2-3 honest issues + actions"
        learnings: "1-2 key insights"
        next_month_focus: "Top 3 priorities"
        asks: "Specific actionable requests"

    quarterly_updates:
      frequency: "For Tier 3-4 investors"
      content: "High-level progress, metrics, milestones"
      length: "500-800 words or 5-7 slides"

    board_meetings:
      frequency: "[Quarterly / Monthly]"
      materials_deadline: "3 business days before meeting"
      deck_size: "[20-80 slides depending on stage]"

      structure:
        business_review: "60% - Financials, metrics, operations"
        strategic_discussion: "30% - Key decisions and deep dives"
        forward_looking: "10% - Priorities and asks"

  fundraising_communications:
    preparation:
      six_months_before:
        - "Establish regular update cadence with current investors"
        - "Build relationships with {{target_investors}}"
        - "Clean up cap table issues"
        - "Prepare financial model"

      three_months_before:
        - "Create comprehensive data room"
        - "Prepare pitch deck and investment memo"
        - "Legal documents in order"
        - "Brief key investors on timeline"

      one_month_before:
        - "Heads up email to current investors"
        - "Confirm pro-rata interest"
        - "Calendar pre-emptions if applicable"
        - "Line up customer references"

    during_active_fundraise:
      update_frequency: "Weekly to Tier 1-2"
      content:
        - "Meeting activity (first/second/partner meetings)"
        - "Term sheet status and verbal interest"
        - "Commitments snapshot (existing + new)"
        - "Pipeline and remaining targets"
        - "What's working and challenges"
        - "Specific asks for intros or support"

    post_close:
      immediately:
        - "Thank you to all participants"
        - "Update to non-participants"
        - "Public announcement coordination"
        - "Introduction email for new investor group"

      thirty_days:
        - "Onboarding for new investors"
        - "First post-close update with deployment plans"
        - "1:1 kickoff calls"
        - "Set ongoing communication expectations"

      ninety_days:
        - "First 90 days retrospective"
        - "Progress against fundraise plans"
        - "Recalibrated goals if needed"

  crisis_communications:
    severity_assessment:
      tier_1_crisis:
        definition: "Material impact, immediate notification required"
        examples:
          - "Missing quarterly targets by >20%"
          - "Founder/CEO departure or conflict"
          - "Legal/regulatory serious issues"
          - "Customer concentration risk (losing top customer)"
          - "Security breach"
          - "Company-threatening situation"
        response: "Immediate board/investor notification"

      tier_2_issue:
        definition: "Significant challenge, next update + board notification"
        examples:
          - "Key executive departure (VP level)"
          - "Missing targets by 10-20%"
          - "Product delays impacting revenue"
          - "Fundraising delays"
        response: "Board notification + next scheduled update"

      tier_3_challenge:
        definition: "Normal business volatility"
        examples:
          - "Individual sales slip"
          - "Hiring delays"
          - "Minor product bugs"
        response: "Regular update cycle"

    communication_protocol:
      timing: "Don't wait for investors to ask - proactive within 24-48 hours"

      structure:
        what_happened: "[Factual description, timeline, root cause]"
        business_impact: "[Quantified impact on metrics, timeline, finances]"
        immediate_actions: "[What already done]"
        forward_plan: "[Short-term and medium-term response]"
        revised_expectations: "[Updated goals and rationale]"
        learnings: "[Prevention and improvements]"
        support_needed: "[How investors can help]"

      follow_up:
        fourtyeight_hours: "Respond to all questions"
        one_week: "Progress update on action plan"
        two_to_four_weeks: "Detailed update in regular cadence"
        monthly: "Elevated communication until stabilized"

    scenario_playbooks:
      missing_revenue_targets:
        timing: "2-4 weeks before quarter end"
        content: "[Shortfall amount, reasons, temporary vs structural, recovery plan]"

      executive_departure:
        timing: "Immediate announcement"
        content: "[Circumstances, interim plan, search timeline, team continuity]"

      pivot_or_strategic_shift:
        content: "[Why necessary, evidence, new direction, sunk costs, revised timeline]"

      runway_concerns:
        timing: "When runway drops below 9-12 months"
        content: "[Cash analysis, options (revenue/burn/bridge), timeline, asks]"

  relationship_building:
    proactive_engagement:
      - "Utilize investor expertise (customer meetings, product feedback, hiring)"
      - "Include in wins (thank yous, public credit, testimonials)"
      - "Facilitate investor-to-investor value (connections, insights, events)"
      - "Transparency builds trust (learnings, mistakes, asking for help)"

    annual_investor_summit:
      timing: "Once annually for companies with 15+ investors"
      format: "Half-day event with updates, demos, customer panel, networking"
      value: "Community building, increased pro-rata likelihood, feedback"

    investor_feedback:
      frequency: "Annual anonymous survey"
      topics:
        - "Communication quality and frequency"
        - "Content helpfulness"
        - "Areas for more/less detail"
        - "How to leverage expertise better"
        - "Would invest again (why/why not)"

  tools_and_systems:
    communication_platforms:
      early_stage: "Email (simple, universal)"
      growth_stage: "Carta/Pulley (cap table integration)"
      scale_stage: "Dedicated IR platform (Visible.vc, Finta, Cabal)"
      public_company: "Q4 Inc, Nasdaq IR Intelligence, Bloomberg Terminal"

    data_room:
      structure:
        - "Company Overview (pitch, timeline, press)"
        - "Financial Information (historicals, model, cap table)"
        - "Product & Technology (roadmap, IP, security)"
        - "Go-to-Market (customers, sales materials, pipeline)"
        - "Team (org chart, bios, equity details)"
        - "Legal & Compliance (incorporation, contracts, regulatory)"
        - "Market & Competition (research, analysis)"

      access_control:
        tier_1: "Full access"
        tier_2: "Most sections, limited sensitive financials"
        tier_3: "Overview and summaries only"
        prospects: "Customized DD subset"

  public_company_ir:
    new_requirements:
      - "Regulation FD compliance"
      - "Quarterly earnings calls"
      - "Earnings guidance"
      - "Quiet periods"
      - "Analyst relations"
      - "Institutional roadshows"
      - "SEC filings (10-K, 10-Q, 8-K)"

    ir_team:
      - "VP/Director of Investor Relations"
      - "CFO and CEO support"
      - "External IR consultant"
      - "Legal counsel for compliance"

    earnings_process:
      pre_earnings: "Financial close, results prep, script writing, legal review"
      earnings_release: "After market close, press release, prepared remarks, Q&A"
      post_earnings: "Analyst calls, follow-ups, conferences"

  governance:
    transparency_level: "{{transparency_level}}"
    approval_process: "{{approval_process}}"
    legal_constraints: "{{legal_constraints}}"
    confidentiality: "{{confidentiality_requirements}}"

  measurement:
    effectiveness_metrics:
      - "Investor satisfaction (NPS survey)"
      - "Response rates to asks (intros, feedback)"
      - "Pro-rata participation rate in rounds"
      - "Time saved (fewer ad-hoc questions = good updates)"
      - "Investor value delivered (intros converted, advice utilized)"
      - "Fundraising efficiency (time to close, terms)"
```

---

## Examples

### Example 1: Series B SaaS Company - Active Fundraising

**Context**: $12M ARR B2B SaaS company, currently raising $40M Series B, 25 existing investors from seed and Series A, strong growth but increasing burn.

**Investor Communications Approach:**

**Monthly Updates (Tier 1-2: Lead investors + active angels):**
- Detailed metrics: ARR growth, net retention, pipeline, burn, runway
- Transparent about fundraising progress: "Met with 8 VCs this month, 2 partner meetings scheduled, 1 passed (stage too late)"
- Honest about challenges: "Enterprise sales cycles lengthening from 6 to 9 months, impacting Q2 target"
- Specific asks: "Need intro to [VC Partner at Firm X] - we meet their thesis on vertical SaaS"

**Weekly Fundraising Updates (During 12-week active raise):**
- Meeting scorecard: First meetings (6), partner meetings (2), term sheets (0 yet, but 1 expected next week)
- Commitments: $8M from existing investors (pro-rata), $15M verbal from new lead (waiting on IC), $5M from other new investors
- $12M left to close round
- "What's resonating: Unit economics (3.5:1 LTV:CAC), what's challenging: explaining 24-month payback period"

**Results:**
- Closed $40M round in 10 weeks (faster than 14-week target)
- 80% of existing investors participated in pro-rata (high trust signal)
- Lead investor mentioned "communication transparency" as factor in decision
- Zero investor surprises during diligence (data room already organized from monthly sharing)

**Investment in IR**: $25K/year (Carta for updates, data room tools, CFO 15% time)

### Example 2: Seed Stage Hardware Startup - Post-Crisis Communication

**Context**: $2M seed-funded consumer hardware company, manufacturing delays pushed product launch 6 months, burn increased, runway now 8 months instead of 14.

**Crisis Communication:**

**Immediate Email (sent when delay confirmed):**
```
Subject: Important Update - Product Launch Delay

Team,

I need to share difficult news about our product timeline and its impact on our business.

WHAT HAPPENED:
Our manufacturing partner hit critical component shortages. Despite our Q2 production plan, we now can't begin production until Q4. This pushes our consumer launch from August to February.

BUSINESS IMPACT:
- Zero revenue for 6 additional months (was expecting $500K in pre-orders)
- Burn continues at $250K/month without revenue offset
- Runway reduced from 14 months to 8 months
- Risk of missing holiday season (40% of consumer electronics annual sales)

IMMEDIATE ACTIONS:
1. Shifted to alternate manufacturer (adds 4 weeks but gives us control)
2. Reduced burn to $180K/month (paused 2 non-critical hires, cut discretionary)
3. Engaged with 3 potential bridge investors from our network
4. Exploring B2B pilot program to generate earlier revenue

FORWARD PLAN:
- Short-term (30 days): Secure $1.5M bridge OR reduce burn to $120K/month if needed
- Medium-term (90 days): Begin production with new partner, validate quality
- We'll need to raise Series A 4 months earlier than planned, from current traction

REVISED TIMELINE:
- Previous: Launch Aug, $2M revenue by Dec, raise Series A June next year
- Revised: Launch Feb, $1M revenue by June, raise Series A Feb (from traction + vision)

LEARNINGS:
Single-source manufacturing was naive. We now have backup relationships for all critical components. We're also evaluating B2B channels that don't depend on manufacturing timing.

SUPPORT NEEDED:
- If you can participate in $1.5M bridge (12-month note, 20% discount to Series A), please reply by Friday
- Intros to bridge investors (angels, funds that do notes)
- B2B pilot customers (we can hand-build initial units)

I'll update again on Friday with bridge financing status. Happy to jump on calls - I'm available all week.
```

**Follow-up (1 week later):**
- 8 investors replied offering support
- $800K committed to bridge within 5 days (majority from existing investors)
- Remaining $700K from 1 new angel intro'd by investor
- Bridge closed in 3 weeks (fast due to trust and transparency)

**Outcome:**
- Honest communication preserved investor trust
- Investors helped problem-solve (not just capital - one intro'd B2B customer)
- Company survived crisis, launched product 4 months later
- Series A raised at good valuation despite delays (investors saw execution through adversity)

**Learning**: "The investors who helped most were those we'd been updating monthly. Cold investors didn't respond."

### Example 3: Series C Growth Company - Board-Level Investor Relations

**Context**: $50M ARR enterprise SaaS, $100M+ raised through Series C, preparing for potential IPO in 24-36 months, professional board with 3 investor directors.

**Board Materials & Governance:**

**Quarterly Board Meetings:**
- 65-slide board deck sent 4 days before meeting
- Detailed financial review: P&L, cash flow, balance sheet, variance analysis
- Deep dive on key metric: Net Revenue Retention (breaking down expansion vs. churn by segment)
- Strategic discussion: International expansion decision (30 min reserved for debate)
- Executive presentations: VP Sales on pipeline, VP Product on roadmap, CTO on technical scaling

**Monthly Board Updates (between meetings):**
- 2-page summary email covering: Monthly metrics, key wins, challenges, strategic progress
- Flagging early if quarterly targets at risk (no surprises in board meeting)
- Specific asks: "We're seeing uptick in enterprise security diligence - can [Board Member] intro us to CISO in your network?"

**Board Observer Communications:**
- All board materials shared with observers (non-voting board participants from smaller investors)
- Quarterly calls with CFO for Q&A
- Access to data room for detailed analysis

**Annual Investor Day:**
- Half-day event for all Series A/B/C investors (50+ people)
- Company strategy presentation, product demo, 2 customer panels
- Breakout sessions by interest area (product roadmap, go-to-market, international)
- Evening networking dinner
- Outcome: Investors feel connected to company and each other, many pro-rata commitments for next round

**IPO Preparation IR:**
- Hired VP Investor Relations 18 months before IPO
- Began quarterly "earnings-style" internal reviews to practice rhythm
- Engaged IR advisory firm to prepare for public markets
- Created investor presentation (public market style) and refined quarterly
- Test drove earnings script with friendly board members

**Results:**
- Smooth IPO process (investors well-prepared for transition)
- No unexpected questions during roadshow
- Strong retail and institutional investor interest
- First earnings call well-executed (had practiced for 4 quarters internally)

**Investment in IR**: $400K/year (VP Investor Relations, IR advisory firm, data room tools, investor event costs)

### Example 4: Acquired Startup - M&A Communication

**Context**: Series A company ($5M raised, $3M ARR) acquired by strategic acquirer for $45M, communicating through deal process and post-close.

**Pre-Announcement Phase (Confidential):**
- Board-only awareness initially
- As deal progressed, informed Series A lead investor (required for approvals)
- Legal counsel advised timing for full investor notification

**Announcement Communication:**

```
Subject: Important News - {{Company}} Acquired by [Acquirer]

Team,

I'm excited to share that we've signed an agreement for [Acquirer] to acquire {{Company}}. This is a tremendous outcome and you've been critical partners in our journey.

THE DEAL:
- Acquirer: [Company name, their business]
- Deal size: $45M ($35M cash, $10M earnout over 2 years)
- Transaction: All stock (Series A, Seed, options)
- Expected close: 45-60 days (subject to standard conditions)
- Announcement: Public today [link to press release]

INVESTOR RETURNS:
- Series A ($4M invested 18 months ago): 2.8x cash return
- Seed ($1M invested 3 years ago): 8.5x cash return
- Timeline: Cash distributed 5-10 days post-close

WHY WE SAID YES:
After our Series A, we had two paths: (1) Raise B and scale independently, or (2) Join larger company with distribution and resources. We chose (2) because:
- [Acquirer] reaches 10M customers we couldn't access alone
- Our product accelerates their strategy
- Combined company can win market faster
- Team stays intact with growth opportunities
- Economics work for everyone (investors, team, customers)

WHAT'S NEXT:
- Closing process: 45-60 days (regulatory, shareholder approval)
- I'll send updates every 2 weeks until close
- Post-close: I'm joining as VP [Role] reporting to [Acquirer Executive]
- Team: 100% of team received offers, 95% accepting
- Customers: All contracts honored, actually gaining capabilities

THANK YOU:
[Personal note to investors thanking for specific contributions - intros, advice, capital, belief]

This wouldn't have happened without your support. While I'm sad this chapter ends, I'm excited for what's next for our product, team, and for your returns.

Questions welcome - I'm available all week for calls.
```

**Post-Close Communication:**
- Final email with wire instructions and tax documents
- 1-year anniversary update on how product/team doing within acquirer
- Many investors re-invested in founder's next company (trust built)

**Outcome:**
- Professional communication throughout sensitive process
- No investor friction during M&A approvals
- Strong relationships maintained post-exit
- Founder's reputation enhanced (led to easier fundraising for next company)

### Example 5: Public Company - Earnings Communications

**Context**: Recently IPO'd SaaS company ($200M revenue, $3B market cap), managing first year of quarterly public earnings.

**Quarterly Earnings Process:**

**Week 1 (Post-Quarter Close):**
- CFO closes books, validates numbers
- CEO + CFO align on narrative (what happened and why)
- Draft earnings release and prepared remarks
- Legal review for Reg FD compliance

**Week 2-3 (Pre-Earnings):**
- "Quiet period" - no external investor communication beyond scheduled conferences
- Analyst pre-calls (answering logistical questions only, not results)
- Finalize materials and rehearse Q&A

**Earnings Day:**
- 4:00pm ET: Press release on newswire
- 4:30pm ET: Earnings call (30 min prepared remarks, 30 min Q&A)
- CFO + CEO present, IR leads Q&A queue

**Post-Earnings (Next 2 weeks):**
- Follow-up calls with major institutional investors
- Non-deal roadshow (meetings with investors in key cities)
- Conference participation
- Social media amplification of key messages

**Q1 Earnings Example:**

**Results**: Beat revenue by 2%, missed EPS by $0.03 (higher sales investment)

**Communication Strategy:**
- Lead with beat on revenue and customer growth
- Explain EPS miss proactively: "Investing ahead of growth in enterprise sales team"
- Provide context: "Sales ramp takes 6 months, expecting payback in Q3-Q4"
- Raise full-year guidance based on strong pipeline
- Emphasize long-term decision making over quarterly optimization

**Analyst/Investor Reaction:**
- Stock down 3% day-of (EPS miss), recovered within week (guidance raise)
- 8 of 10 analysts maintained "Buy" ratings
- Investors appreciated transparency on investment rationale

**Learnings:**
- Set conservative guidance initially (better to beat than miss)
- Explain strategic investments before making them (not as surprise)
- Build trust over multiple quarters (short-term noise, long-term signal)

**Public Company IR Investment**: $800K/year (VP IR, IR firm for earnings support, financial printer, conference travel, systems)

---

## Success Metrics

- **Investor Satisfaction**: >80% satisfaction score on annual NPS survey
- **Pro-Rata Participation**: >70% of existing investors participating in follow-on rounds
- **Response Rate**: >50% of investors responding to specific asks (intros, feedback)
- **Time Efficiency**: <5% of CEO time on reactive investor questions (good updates reduce ad-hoc)
- **Value Delivered**: Track intros converted, advice utilized, crises supported through
- **Fundraising Efficiency**: Close rounds in 8-12 weeks vs. 16-24 week average
- **Terms Quality**: Better valuation/terms when investors trust and advocate
- **Crisis Support**: Investors offering help (not just demanding answers) during challenges
- **Long-Term Relationships**: Investors re-invest in next company or refer other founders

---

## Best Practices

- **Consistency**: Regular cadence matters more than perfect content
- **Transparency**: Share challenges honestly, not just wins
- **Brevity**: Respect investor time - concise updates get read
- **Actionable Asks**: Specific requests get better response than "let me know if you can help"
- **Two-Way Communication**: Listen to investor feedback, implement suggestions
- **Celebrate Wins**: Include investors in successes they contributed to
- **Early Warning**: Flag problems early, don't wait until crisis
- **Segment Thoughtfully**: Different investors need different communication levels
- **Use Tools**: Don't rely on BCC emails at scale - use proper platforms
- **Build Personal Relationships**: Beyond emails, develop genuine connections

---

## Common Pitfalls

- **Only Communicating When Fundraising**: Builds transactional vs. relationship-based trust
- **Sugarcoating Challenges**: Investors value honesty, lose trust when surprises emerge
- **Overwhelming with Detail**: 5-page updates don't get read, key points get lost
- **Ignoring Requests**: Not responding to investor questions or intro requests
- **Inconsistent Cadence**: Monthly updates then silence for 6 months creates anxiety
- **No Segmentation**: Treating $5K angel same as $5M lead investor (inefficient)
- **Reactive Only**: Waiting for investors to ask instead of proactive communication
- **Missing Legal Requirements**: Especially for public companies, compliance is non-negotiable
- **Over-Promising**: Setting unrealistic expectations then missing them
- **Forgetting to Thank**: Investors who help want acknowledgment and appreciation

---

**License**: © 2025 Adedayo Agarau. Licensed under CC BY-SA 4.0.
**Compatibility**: Optimized for Claude Code (Anthropic), ChatGPT (OpenAI), Gemini (Google), Copilot (Microsoft).
**Maintainer**: Adedayo Agarau | https://github.com/Chinoscode | https://linkedin.com/in/adedayo-agarau

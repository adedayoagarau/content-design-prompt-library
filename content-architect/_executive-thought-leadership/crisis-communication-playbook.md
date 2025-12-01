## Crisis Communication Playbook & Reputation Management v1.0

**Purpose**: Design a comprehensive crisis communication system that enables organizations to respond swiftly, transparently, and strategically to crises—preserving reputation, maintaining stakeholder trust, and minimizing business impact through prepared protocols, message frameworks, and recovery strategies.

**Context**: Use this framework when preparing for or responding to organizational crises including product failures, security breaches, executive misconduct, financial distress, layoffs, legal issues, PR disasters, or industry controversies. Essential for companies of all stages but especially critical for high-visibility brands, regulated industries, public companies, or organizations with significant customer, employee, or public trust dependencies.

**Strategic Frameworks Applied**:
- **Crisis Severity Matrix** - Classifying and triaging different crisis types
- **Response Speed Framework** - Time-based protocols for different scenarios
- **Stakeholder Priority Mapping** - Who to communicate with, when, and how
- **Message Architecture System** - Consistent messaging across all channels
- **Reputation Recovery Model** - Long-term trust rebuilding strategies
- **Learning & Prevention Protocol** - Post-crisis analysis and system improvement

---

## Variables

Define strategic variables for crisis communication planning:

### Organization Context Variables
- `{{company_name}}`: Organization name and brand identity
- `{{company_stage}}`: Startup | Growth | Enterprise | Public company
- `{{industry_sector}}`: Industry vertical (impacts crisis sensitivity)
- `{{public_visibility}}`: Low profile | Industry-known | Public brand | Household name
- `{{regulatory_environment}}`: Heavily regulated | Moderate | Minimal oversight
- `{{customer_type}}`: B2B | B2C | B2G | Mixed
- `{{employee_count}}`: Organization size (impacts internal communication complexity)

### Crisis Preparedness Variables
- `{{crisis_scenarios}}`: Top 5-10 potential crisis scenarios for your organization
- `{{response_team}}`: Crisis management team composition and roles
- `{{spokesperson}}`: Primary and backup spokespeople for different scenarios
- `{{communication_channels}}`: All channels (internal, external, media, social, etc.)
- `{{approval_process}}`: Who must approve communications before release
- `{{legal_counsel}}`: Internal and external legal team access
- `{{pr_support}}`: Agency partner or internal PR team capacity

### Stakeholder Variables
- `{{primary_stakeholders}}`: Ranked priority (employees, customers, investors, media, regulators, public)
- `{{employee_segments}}`: Leadership | Managers | Individual contributors | Remote vs. office
- `{{customer_segments}}`: Enterprise | SMB | Consumers | Different risk profiles
- `{{investor_base}}`: VCs | PE | Public shareholders | Board composition
- `{{media_relationships}}`: Established media contacts vs. cold media landscape
- `{{community_impact}}`: Local community, industry ecosystem, broader public

### Communication Infrastructure Variables
- `{{internal_tools}}`: Slack | Email | Intranet | All-hands meetings | Emergency notification system
- `{{external_channels}}`: Website | Social media | Press releases | Customer portal | Status page
- `{{monitoring_tools}}`: Media monitoring | Social listening | Alert systems
- `{{data_room}}`: Prepared materials (fact sheets, executive bios, company history)
- `{{dark_site}}`: Pre-built crisis response website (if applicable for major scenarios)

### Response Protocols Variables
- `{{response_speed}}`: Target response times by crisis severity
- `{{message_approval}}`: Single approver | Committee | Board | Legal review
- `{{media_policy}}`: Who speaks to media, when, under what circumstances
- `{{social_media_protocol}}`: Pause posting | Monitoring only | Active response
- `{{escalation_triggers}}`: When to escalate from team to executive to board

---

## Prompt

You are a crisis communication strategist designing a comprehensive preparedness and response system for **{{company_name}}**, a **{{company_stage}}** company in **{{industry_sector}}**. Your task is to create protocols that enable rapid, transparent, and strategic crisis response across **{{primary_stakeholders}}**, with clear governance through **{{approval_process}}**, utilizing **{{communication_channels}}**, and addressing the most likely crisis scenarios in **{{crisis_scenarios}}**.

### Crisis Classification Framework

**Crisis Severity Matrix:**

**Level 1: Critical Crisis (Existential Threat)**
- **Definition**: Company-threatening situation requiring immediate board/executive action
- **Examples**:
  - Massive security breach exposing customer financial data
  - Founder/CEO criminal charges or serious misconduct
  - Product causing serious harm or death
  - Regulatory action threatening business license
  - Catastrophic financial fraud or insolvency
  - Hostile takeover or major hostile shareholder action (public companies)
- **Response Speed**: Within 1-2 hours
- **Spokesperson**: CEO (must be)
- **Stakeholder Priority**: All simultaneously (employees, customers, investors, regulators, media, public)
- **External Support**: Crisis PR firm, legal counsel, potentially crisis management consultant

**Level 2: Major Crisis (Significant Business Impact)**
- **Definition**: Serious situation affecting business operations, reputation, or stakeholder trust
- **Examples**:
  - Significant product failure affecting many customers
  - Data breach (limited scope but real impact)
  - Executive departure under negative circumstances
  - Layoffs (>20% of workforce)
  - Major customer loss or public complaints going viral
  - Discrimination/harassment allegations
  - Failed audit or financial restatement
- **Response Speed**: Within 4-8 hours
- **Spokesperson**: CEO or appropriate C-level executive
- **Stakeholder Priority**: Affected groups first, then broader communication
- **External Support**: PR counsel, legal review

**Level 3: Moderate Issue (Reputational Risk)**
- **Definition**: Negative situation requiring managed response to prevent escalation
- **Examples**:
  - Service outage affecting customers (not data breach)
  - Individual employee misconduct (not executive)
  - Missed quarterly targets or negative earnings surprise (public companies)
  - Negative press article or social media criticism
  - Customer complaints trending online
  - Minor regulatory inquiry or compliance issue
- **Response Speed**: Within 12-24 hours
- **Spokesperson**: Appropriate functional leader (CTO for tech issues, CFO for financial, etc.)
- **Stakeholder Priority**: Directly affected stakeholders first
- **External Support**: Internal PR team, legal consultation if needed

**Level 4: Minor Issue (Monitoring Situation)**
- **Definition**: Negative chatter or potential issue that may escalate
- **Examples**:
  - Isolated customer complaints
  - Competitive attack in market
  - Minor bug or service hiccup
  - Individual negative review or social post
  - Industry-wide issue (not company-specific)
- **Response Speed**: Monitor for 24-48 hours, respond if escalates
- **Spokesperson**: Customer service or communications team
- **Stakeholder Priority**: Directly affected individuals
- **External Support**: Internal team handles

### Pre-Crisis Preparation

**Crisis Team Assembly:**

**Core Crisis Response Team:**
- **Crisis Lead**: CEO or designated executive (ultimate decision authority)
- **Communications Lead**: Head of PR/Communications (message strategy and execution)
- **Legal Counsel**: Internal or external counsel (legal review and compliance)
- **Operations Lead**: COO or relevant functional leader (business continuity)
- **HR Lead**: CHRO (employee communication and welfare)
- **Technical Lead**: CTO/CIO (if technical crisis - security, product, infrastructure)
- **Customer Lead**: Chief Customer Officer (customer impact and response)

**Extended Response Team (as needed):**
- Investor Relations (for public companies or during fundraising)
- Government Relations (if regulatory implications)
- Security/Safety Officer (physical or digital security)
- External crisis PR firm (retained or on-call)
- Outside legal counsel (specialized if needed)

**Team Activation Protocol:**
```
1. Crisis identified by any employee → Report to designated crisis hotline/email
2. Communications or Executive team assesses severity using Crisis Matrix
3. If Level 2 or above: Crisis Lead activates team via emergency notification
4. Team assembles (virtually or in-person) within [X hours based on severity]
5. Initial assessment meeting: Facts, stakeholders, response strategy, timeline
6. Assign roles: Message drafting, stakeholder outreach, media response, monitoring
7. Execute response plan with defined approval workflow
8. Regular team updates (every 2-4 hours during active crisis)
```

**Scenario Planning & Response Templates:**

For each likely crisis scenario in **{{crisis_scenarios}}**, prepare:

**Scenario 1 Example: Data Security Breach**

**Pre-Built Materials:**
- FAQ document (What happened? Who's affected? What are we doing? What should customers do?)
- Customer notification email template (personalized placeholders)
- Employee talking points (for customer-facing teams)
- Media statement template
- Social media holding statement
- Website banner/status page update
- Investor update (if material)
- Regulatory notification (if required by law)

**Response Playbook:**
```
Hour 0-1: Discovery and Containment
- Technical team contains breach, assesses scope
- Crisis team activated
- Legal counsel engaged (notification requirements)
- Draft initial communications

Hour 1-4: Internal Communication
- Notify executives and board
- Brief all employees (especially customer-facing)
- Prepare customer support for inquiry volume
- Ready technical teams for investigation

Hour 4-12: External Communication
- Notify affected customers (legal requirement in many jurisdictions)
- Public statement on website and social media
- Proactive media outreach to key outlets (control narrative)
- Set up dedicated response page with FAQs and updates
- Engage third-party security firm for investigation (credibility)

Day 2-7: Ongoing Response
- Daily updates to stakeholders (even if "no new information")
- Transparent investigation findings as available
- Customer support: Free credit monitoring, identity protection, etc.
- Media interviews (CEO availability for major outlets)
- Internal all-hands to support employees

Week 2+: Recovery & Prevention
- Final investigation report (from third-party)
- Detailed blog post on what happened, what learned, how preventing
- New security measures announcement
- Customer trust rebuilding campaign
- Regulatory compliance documentation
```

**Scenario 2 Example: Product Failure/Recall**

**Pre-Built Materials:**
- Product safety notice template
- Return/replacement process documentation
- Customer service scripts
- Retail partner notification
- Manufacturing partner communication
- Media statement and FAQ
- Social media response templates
- Employee Q&A brief

**Response Playbook:**
- Immediate: Stop sales/distribution
- Hour 0-4: Internal assessment of scope and safety risk
- Hour 4-12: Notify customers, retail partners, initiate recall process
- Day 1-7: Full recall execution, daily updates, media availability
- Week 2+: Root cause analysis, corrective actions, quality improvements announcement

**Scenario 3 Example: Executive Misconduct**

**Pre-Built Materials:**
- [Note: Can't fully pre-script, but have protocols]
- Investigation process outline
- Employee notification framework
- External communication guidelines
- Interim leadership succession plan

**Response Playbook:**
- Immediate: Place individual on leave pending investigation
- Hour 0-24: Engage outside law firm for independent investigation
- Day 1-2: Internal employee communication (transparency within legal bounds)
- As investigation progresses: Updates to board, potentially investors
- Resolution: Clear action taken (termination, policy changes, etc.) + external communication if high profile

**Message Architecture:**

**The Five Components of Crisis Communication Messages:**

**1. Acknowledgment (We know)**
- Acknowledge the situation factually
- Show you're aware and taking seriously
- Avoid defensiveness or minimizing
- Example: "We are aware that customer data was accessed by an unauthorized party."

**2. Concern (We care)**
- Express genuine empathy for those affected
- Humanize the response (not just corporate-speak)
- Specific to the harm caused
- Example: "We deeply regret the concern and inconvenience this has caused our customers. We understand the seriousness of protecting your personal information."

**3. Action (We're doing)**
- Specific steps already taken
- What you're doing right now
- Demonstrates responsiveness and competence
- Example: "We immediately contained the breach, engaged a leading cybersecurity firm to investigate, and are notifying all affected customers."

**4. Prevention (We'll prevent)**
- What you're changing to prevent recurrence
- Demonstrates learning and commitment
- Future-oriented
- Example: "We are implementing additional security measures including [specific technologies], enhanced monitoring, and third-party security audits."

**5. Next Steps (You should)**
- Clear guidance for affected stakeholders
- Specific actions they can take
- Resources available
- Example: "We are offering two years of free credit monitoring to all affected customers. Please visit [URL] to enroll and find detailed FAQs."

**Sample Crisis Statement Template:**
```
[ACKNOWLEDGMENT]
On [date], we discovered that [what happened in factual terms].

[CONCERN]
We sincerely apologize to [affected parties] and understand [specific impact/concern].
This is unacceptable and we take full responsibility.

[ACTION]
We immediately [actions taken]. We have also [additional responses]. Our investigation
is being conducted by [third-party if applicable] to understand the root cause.

[PREVENTION]
We are implementing [specific preventive measures] to ensure this does not happen again.
These include [details].

[NEXT STEPS]
For affected [customers/employees/etc.], please [specific guidance]. We have created
a dedicated page at [URL] with FAQs and resources.

We are committed to [value statement - transparency, safety, trust, etc.] and will
continue to provide updates as we learn more.

For questions, contact: [specific contact method]

[Signature]
[Name, Title]
```

### Stakeholder Communication Sequencing

**The Order Matters:**

**Phase 1: Internal First (Hour 0-2)**
1. **Crisis Team**: Assemble and align on facts, response strategy
2. **Executive Team**: Brief on situation and planned response
3. **Board of Directors**: Notify (especially if Level 1-2 crisis)
4. **All Employees**: Brief before external communication (they're your advocates or critics)
   - Why: Employees hear about crisis from company first, not media/social
   - How: Emergency all-hands, email, Slack announcement
   - What: Facts, company response, how they should respond to questions

**Phase 2: Directly Affected Stakeholders (Hour 2-8)**
5. **Affected Customers/Users**: Personalized notification if possible
6. **Key Partners**: Vendors, partners, distributors who are impacted
7. **Investors**: Material crises require investor notification (separate from public)
8. **Regulators**: If legally required or industry norm

**Phase 3: Broader External (Hour 8-24)**
9. **All Customers**: General notification even if not directly affected (transparency)
10. **Media**: Proactive statement (if significant) or reactive response (if inquiries)
11. **Social Media/Public**: Public statement on owned channels
12. **Industry/Community**: If broader implications

**Phase 4: Ongoing (Day 2+)**
- Regular updates to all stakeholder groups
- Frequency based on crisis evolution and stakeholder needs
- "No new information" updates still valuable (shows engagement)

### Channel-Specific Crisis Protocols

**Internal Communications:**

**Email:**
- Best for: Detailed information, documentation, reaching all employees
- Crisis use: Initial notification, ongoing updates, policy changes
- Example subject: "Important Company Update: [Brief Description]"
- Include: Summary up top, details below, FAQs, who to contact

**Slack/Teams:**
- Best for: Real-time updates, quick clarifications, accessible discussion
- Crisis use: Dedicated #crisis-updates channel, executive visibility
- Pin critical messages, use @channel sparingly (only for must-reads)
- Monitor for employee questions and concerns

**All-Hands Meeting:**
- Best for: CEO visibility, Q&A, emotional reassurance, culture reinforcement
- Crisis use: Within 24-48 hours of crisis, then weekly during extended crisis
- Format: CEO presents facts and response, opens for questions (anonymous + live)
- Record and share for those who can't attend live

**Manager Enablement:**
- Best for: Cascade communication, address team-specific concerns
- Crisis use: Talking points for managers, FAQs, guidance on team conversations
- Managers are force multiplier - equip them to support their teams

**External Communications:**

**Website:**
- Create dedicated crisis response page: company.com/[crisis-name]
- Include: Timeline, facts, company response, FAQs, contact information
- Update regularly with timestamps
- Easy-to-find link from homepage

**Social Media:**
- Twitter/X: Real-time updates, link to detailed information elsewhere
- LinkedIn: Professional stakeholders, longer-form statements
- Facebook/Instagram: Consumer-facing brands, community management
- During crisis: Increase monitoring, pause non-crisis content, respond to inquiries

**Press Release:**
- For Level 1-2 crises, formal press release on wire service (PR Newswire, Business Wire)
- Follows standard PR format but uses crisis message architecture
- Includes boilerplate, media contact
- Proactive (don't wait for media to ask)

**Media Response:**
- Designate spokesperson (typically CEO for major crises)
- Media training for spokesperson if not recent
- Prepare for tough questions, practice answers
- Stay on message: Acknowledge, empathy, action, prevention, next steps
- Offer interviews to key outlets (don't hide)
- "No comment" sounds guilty - better: "We're actively investigating and will share details as soon as we can."

**Customer Communication:**
- Email: Personalized if feasible, mass if necessary
- In-app notification: For product/service issues
- Status page: Real-time service status updates (status.company.com)
- Customer support: Increased staffing, extended hours, prepared scripts
- Account management: Proactive outreach to key accounts

### Social Media Crisis Management

**The Social Amplification Factor:**

Crises can originate on social media (viral complaint, trending criticism) or spread there (traditional crisis amplified socially). Social requires specific protocols:

**Social Listening & Early Detection:**
- Monitor brand mentions, hashtags, trending topics
- Tools: Brandwatch, Sprout Social, Mention, Hootsuite, Google Alerts
- Set up alerts for volume spikes, negative sentiment, specific keywords
- Early detection allows getting ahead of crisis

**Social Crisis Response Framework:**

**Hour 0-2: Assess**
- Is this isolated complaint or broader issue?
- Volume: How many people talking about it?
- Sentiment: Ratio of negative to positive mentions?
- Influencers: Any high-follower accounts amplifying?
- Legitimacy: Is complaint valid or misinformation?
- Escalation risk: Will this grow or fizzle?

**Hour 2-6: Decide Response Level**

**Scenario A: Individual Complaint (Not Crisis)**
- Response: Standard customer service reply
- Offer to take offline (DM or support ticket)
- Resolve individually, no broader communication

**Scenario B: Growing But Manageable**
- Response: Public acknowledgment that you're aware and investigating
- Example: "We're aware of reports about [issue] and our team is investigating. We'll share an update within [timeframe]."
- Follow up with findings and resolution
- Thank those who raised issue

**Scenario C: Crisis-Level Social Storm**
- Response: Full crisis protocol
- Public statement across all channels (not just social reply)
- Dedicated response page
- CEO/executive visibility
- Sustained engagement until resolution

**Social Media DON'Ts During Crisis:**
- Don't delete negative comments (unless abusive/spam) - looks like cover-up
- Don't argue with critics - acknowledge concern, offer to help
- Don't ignore - silence looks like indifference
- Don't joke or use humor - tone-deaf during crisis
- Don't post unrelated content - pausing brand posting is appropriate

**Social Media DOs During Crisis:**
- Do respond quickly (within hours, not days)
- Do show empathy and take responsibility if warranted
- Do provide useful information and link to detailed response
- Do monitor continuously and respond to questions
- Do engage authentically (human voice, not corporate-speak)
- Do thank those providing constructive feedback

### Legal & Regulatory Considerations

**Legal Review Protocol:**

**When Legal Review Required:**
- Any public statement about: Ongoing litigation, regulatory investigation, financial fraud, executive misconduct, product safety recall
- Customer notifications about: Data breaches (legal requirements vary by jurisdiction), product harm, contract breaches
- Employee communications about: Layoffs, discrimination/harassment allegations, workplace safety incidents
- Investor communications: Material information (public companies), fundraising complications

**Legal Review Process:**
- Draft message first (don't wait for legal to write from scratch)
- Submit for review with context and timeline
- Legal edits for risk mitigation, compliance, factual accuracy
- Balance: Legal risk vs. reputational risk (sometimes legally safest = reputationally worst)
- Escalate if legal and communications can't align quickly

**Regulatory Notification Requirements:**

Different industries and jurisdictions have specific crisis notification obligations:

**Data Breach Notification Laws:**
- GDPR (EU): 72-hour notification to data protection authority
- CCPA (California): Reasonable timeframe to affected consumers
- State laws: Vary by state, many require notification "without unreasonable delay"
- Industry-specific: HIPAA (healthcare), GLBA (financial services), etc.

**Product Safety:**
- Consumer Product Safety Commission (CPSC): Reporting requirements for defective products
- FDA: Medical device/drug adverse events
- NHTSA: Vehicle safety defects

**Financial/Securities:**
- SEC Form 8-K: Material events for public companies
- Stock exchange rules: Timely disclosure of material information
- Fraud/misconduct: Whistleblower protections and investigation requirements

**Work with legal counsel to create crisis-specific notification checklists.**

### Post-Crisis: Recovery & Learning

**Phase 1: Immediate Aftermath (Week 1-2)**

**Stakeholder Appreciation:**
- Thank employees for resilience and support
- Thank customers for patience
- Thank partners who helped
- Acknowledge those who raised issues constructively

**Commitment to Transparency:**
- Promise ongoing updates until fully resolved
- Set timeline for detailed post-mortem/findings
- Establish how to prevent recurrence

**Phase 2: Investigation & Root Cause (Week 2-6)**

**Independent Investigation (for serious crises):**
- Engage third-party firm (law firm, security firm, consultancy)
- Provides credibility and objectivity
- Findings shared with board, potentially publicly

**Internal Review:**
- What happened, why, who knew what when
- Where did processes/controls fail
- What warning signs were missed

**Root Cause Analysis:**
- Not just proximate cause (the thing that broke)
- But underlying causes (why did that thing break)
- Systemic issues vs. individual failures

**Phase 3: Corrective Actions (Week 6+)**

**System Changes:**
- New policies, procedures, controls
- Technology upgrades or changes
- Training programs
- Organizational structure changes
- Governance improvements

**Communication of Changes:**
- Detailed blog post or report on findings
- Specific actions being taken (not vague "we'll do better")
- Metrics for measuring improvement
- Timeline for implementation
- Third-party validation if applicable

**Phase 4: Trust Rebuilding (Month 3+)**

**Consistent Follow-Through:**
- Actually implement promised changes
- Report on progress regularly
- Demonstrate learning through actions, not just words

**Stakeholder Engagement:**
- Customer advisory board for product crises
- Town halls for employee trust issues
- Investor transparency for financial crises

**Reputation Repair:**
- Positive news and announcements (when genuine)
- Thought leadership on crisis topic (sharing learnings)
- Industry leadership on standards (if applicable)
- Awards, recognitions, third-party validation

**Measuring Recovery:**
- Employee engagement scores returning to pre-crisis levels
- Customer churn stabilizing or improving
- Media sentiment shifting from negative to neutral/positive
- Social media sentiment improvement
- Business metrics recovery (revenue, growth, etc.)

**Phase 5: Documentation & Preparation (Month 6+)**

**Crisis Retrospective:**
- What went well in response
- What didn't go well
- What would we do differently
- What to maintain in future crises

**Updated Crisis Playbook:**
- Incorporate learnings
- Update scenarios and templates
- Refine team roles and processes
- Test new protocols

**Team Training:**
- Crisis simulation exercises
- Media training refreshers
- New employee crisis protocol training
- Regular drills (annual or biannual)

---

## Output Schema

```yaml
crisis_communication_playbook:
  organization_context:
    company: "{{company_name}}"
    stage: "{{company_stage}}"
    industry: "{{industry_sector}}"
    visibility: "{{public_visibility}}"
    regulatory_environment: "{{regulatory_environment}}"

  crisis_classification:
    level_1_critical:
      definition: "Existential threat"
      response_speed: "1-2 hours"
      spokesperson: "CEO required"
      examples: ["Security breach (financial data)", "CEO criminal charges", "Product causing death"]

    level_2_major:
      definition: "Significant business impact"
      response_speed: "4-8 hours"
      spokesperson: "CEO or C-level"
      examples: ["Product failure", "Data breach (limited)", "Major layoffs"]

    level_3_moderate:
      definition: "Reputational risk"
      response_speed: "12-24 hours"
      spokesperson: "Functional leader"
      examples: ["Service outage", "Negative press", "Missed targets"]

    level_4_minor:
      definition: "Monitoring situation"
      response_speed: "24-48 hours, monitor for escalation"
      spokesperson: "Customer service/communications"
      examples: ["Isolated complaints", "Minor bug", "Individual negative review"]

  crisis_response_team:
    core_team:
      - role: "Crisis Lead"
        person: "CEO or designated executive"
        responsibility: "Ultimate decision authority"
      - role: "Communications Lead"
        person: "Head of PR/Communications"
        responsibility: "Message strategy and execution"
      - role: "Legal Counsel"
        person: "Internal or external counsel"
        responsibility: "Legal review and compliance"
      - role: "Operations Lead"
        person: "COO or functional leader"
        responsibility: "Business continuity"
      - role: "HR Lead"
        person: "CHRO"
        responsibility: "Employee communication"
      - role: "Technical Lead (if applicable)"
        person: "CTO/CIO"
        responsibility: "Technical crisis response"

    activation_protocol:
      step_1: "Crisis identified → Report to crisis hotline/email"
      step_2: "Assess severity using Crisis Matrix"
      step_3: "Crisis Lead activates team if Level 2+"
      step_4: "Team assembles within [X hours]"
      step_5: "Initial meeting: Facts, strategy, assignments"
      step_6: "Execute response with approval workflow"
      step_7: "Regular updates every 2-4 hours during active crisis"

  scenario_playbooks:
    scenario_1:
      name: "Data Security Breach"
      pre_built_materials:
        - "FAQ document"
        - "Customer notification email template"
        - "Employee talking points"
        - "Media statement"
        - "Social media response"
        - "Website/status page update"
        - "Investor update"
        - "Regulatory notification"

      response_timeline:
        hour_0_1:
          - "Technical containment"
          - "Crisis team activation"
          - "Legal counsel engaged"
          - "Draft communications"
        hour_1_4:
          - "Notify executives and board"
          - "Brief all employees"
          - "Prep customer support"
        hour_4_12:
          - "Notify affected customers"
          - "Public statement"
          - "Proactive media outreach"
          - "Dedicated response page"
        day_2_7:
          - "Daily updates"
          - "Transparent investigation findings"
          - "Customer support (credit monitoring, etc.)"
          - "Media interviews"
        week_2_plus:
          - "Final investigation report"
          - "Detailed blog on learnings"
          - "New security measures announcement"

    # Additional scenarios following same structure

  message_architecture:
    five_components:
      acknowledgment:
        purpose: "We know"
        content: "Acknowledge situation factually, show awareness"
        example: "We are aware that customer data was accessed by an unauthorized party."

      concern:
        purpose: "We care"
        content: "Express genuine empathy"
        example: "We deeply regret the concern and inconvenience this has caused."

      action:
        purpose: "We're doing"
        content: "Specific steps taken"
        example: "We immediately contained the breach and engaged cybersecurity firm."

      prevention:
        purpose: "We'll prevent"
        content: "Changes to prevent recurrence"
        example: "We are implementing additional security measures including..."

      next_steps:
        purpose: "You should"
        content: "Clear guidance for stakeholders"
        example: "We are offering free credit monitoring. Visit [URL] to enroll."

    statement_template: |
      [ACKNOWLEDGMENT]
      On [date], we discovered that [what happened].

      [CONCERN]
      We sincerely apologize to [affected parties] and understand [impact].

      [ACTION]
      We immediately [actions taken]. We have also [additional responses].

      [PREVENTION]
      We are implementing [specific measures] to ensure this does not happen again.

      [NEXT STEPS]
      For affected [stakeholders], please [specific guidance].
      Visit [URL] for FAQs and resources.

      We are committed to [value] and will provide updates as we learn more.

  stakeholder_sequencing:
    phase_1_internal:
      timing: "Hour 0-2"
      order:
        1: "Crisis Team"
        2: "Executive Team"
        3: "Board of Directors"
        4: "All Employees"
      rationale: "Internal first - employees are advocates or critics"

    phase_2_directly_affected:
      timing: "Hour 2-8"
      order:
        5: "Affected Customers"
        6: "Key Partners"
        7: "Investors (if material)"
        8: "Regulators (if required)"

    phase_3_broader_external:
      timing: "Hour 8-24"
      order:
        9: "All Customers"
        10: "Media"
        11: "Social Media/Public"
        12: "Industry/Community"

    phase_4_ongoing:
      timing: "Day 2+"
      approach: "Regular updates to all groups, frequency based on evolution"

  channel_protocols:
    internal:
      email:
        use: "Detailed information, documentation"
        format: "Summary up top, details below, FAQs"
      slack_teams:
        use: "Real-time updates, quick clarifications"
        format: "Dedicated #crisis-updates channel, pinned messages"
      all_hands:
        use: "CEO visibility, Q&A, reassurance"
        timing: "Within 24-48 hours, then weekly if extended"
      manager_enablement:
        use: "Cascade communication, team-specific concerns"
        format: "Talking points, FAQs, guidance"

    external:
      website:
        use: "Dedicated crisis page with timeline, facts, FAQs"
        url: "company.com/[crisis-name]"
      social_media:
        twitter: "Real-time updates"
        linkedin: "Professional stakeholders, longer statements"
        protocol: "Increase monitoring, pause non-crisis content, respond to inquiries"
      press_release:
        use: "Level 1-2 crises, formal announcement"
        distribution: "PR Newswire, Business Wire"
      media_response:
        spokesperson: "Designated (typically CEO for major)"
        approach: "Proactive interviews, stay on message"

  social_media_crisis:
    listening_and_detection:
      tools: "Brandwatch, Sprout Social, Mention, Hootsuite"
      monitoring: "Brand mentions, hashtags, volume spikes, sentiment"

    assessment_criteria:
      - "Volume: How many people?"
      - "Sentiment: Negative ratio?"
      - "Influencers: High-follower amplification?"
      - "Legitimacy: Valid or misinformation?"
      - "Escalation risk: Growing or fizzling?"

    response_levels:
      individual_complaint:
        response: "Standard customer service"
        action: "Offer to take offline, resolve individually"

      growing_manageable:
        response: "Public acknowledgment of awareness"
        action: "Update within timeframe, share findings"

      crisis_level_storm:
        response: "Full crisis protocol"
        action: "Public statement, CEO visibility, sustained engagement"

    social_donts:
      - "Don't delete negative comments (cover-up appearance)"
      - "Don't argue with critics"
      - "Don't ignore"
      - "Don't joke during crisis"
      - "Don't post unrelated content"

    social_dos:
      - "Respond quickly (hours not days)"
      - "Show empathy and take responsibility"
      - "Provide useful information"
      - "Monitor continuously"
      - "Engage authentically"
      - "Thank constructive feedback"

  legal_regulatory:
    legal_review_required:
      - "Ongoing litigation statements"
      - "Regulatory investigation comments"
      - "Financial fraud situations"
      - "Executive misconduct"
      - "Product safety recalls"
      - "Data breach notifications"
      - "Material investor information"

    notification_requirements:
      data_breach:
        gdpr: "72-hour notification to DPA"
        ccpa: "Reasonable timeframe to consumers"
        state_laws: "Without unreasonable delay"
      product_safety:
        - "CPSC for defective consumer products"
        - "FDA for medical devices/drugs"
        - "NHTSA for vehicle defects"
      financial_securities:
        - "SEC Form 8-K for material events"
        - "Stock exchange timely disclosure"

  post_crisis_recovery:
    phase_1_immediate:
      timing: "Week 1-2"
      actions:
        - "Thank stakeholders for support"
        - "Commit to transparency"
        - "Set timeline for detailed findings"

    phase_2_investigation:
      timing: "Week 2-6"
      actions:
        - "Independent third-party investigation"
        - "Internal review"
        - "Root cause analysis"

    phase_3_corrective:
      timing: "Week 6+"
      actions:
        - "Implement system changes"
        - "Policy and procedure updates"
        - "Training programs"
        - "Communicate changes with specifics"

    phase_4_trust_rebuild:
      timing: "Month 3+"
      actions:
        - "Consistent follow-through on promises"
        - "Stakeholder engagement"
        - "Reputation repair initiatives"
        - "Measure recovery metrics"

    phase_5_documentation:
      timing: "Month 6+"
      actions:
        - "Crisis retrospective"
        - "Update playbook with learnings"
        - "Team training and simulations"
        - "Regular drills"

  measurement:
    response_effectiveness:
      - "Speed: Time to first response vs. target"
      - "Reach: % stakeholders informed within timeline"
      - "Message consistency: Alignment across channels"
      - "Stakeholder sentiment: Pre/post crisis tracking"

    recovery_indicators:
      - "Employee engagement returning to baseline"
      - "Customer churn stabilizing"
      - "Media sentiment neutral/positive"
      - "Social sentiment improvement"
      - "Business metrics recovery"
```

---

## Examples

### Example 1: SaaS Company - Data Breach

**Context**: Series B SaaS company, 500 customers, 50,000 end users, database breach exposed user emails and encrypted passwords (not credit cards).

**Crisis Level**: Level 2 (Major)

**Hour 0**: Security team detects breach Saturday 3am
**Hour 1**: CTO alerts CEO, begins containment
**Hour 3**: Crisis team convenes (CEO, CTO, Head of Comms, Legal)
**Hour 6**: Breach contained, scope assessed
**Hour 8**: Employee notification email sent
**Hour 12**: Customer email notifications begin (personalized to affected)
**Hour 16**: Public blog post, social media statement
**Hour 24**: Proactive media outreach to TechCrunch, media statement ready

**Employee Communication (Hour 8):**
```
Subject: Important Security Update - Immediate Action Required

Team,

This morning we discovered unauthorized access to our user database. I'm writing to brief you before we notify customers and the public.

WHAT HAPPENED:
Between Friday 8pm and Saturday 3am, an unauthorized party gained access to our user database. Our security team detected and stopped the breach at 3:15am.

WHAT WAS ACCESSED:
- User email addresses (all 50,000)
- Encrypted passwords (all)
- User names and profile info
NOT ACCESSED:
- Credit card information (stored separately)
- Customer proprietary data
- Source code or systems access

WHAT WE'VE DONE:
- Contained the breach immediately
- Engaged [Security Firm] for forensic investigation
- Forcing password resets for all users
- Implementing additional security measures

WHAT HAPPENS TODAY:
- 12pm: Customer notifications begin
- 4pm: Public blog post
- 6pm: All-hands meeting (Zoom link below)

YOUR ROLE:
- Customer-facing teams: Extra support staffing today
- Everyone: Use talking points document (linked below) if asked
- Direct complex questions to: security-response@company.com

We will get through this together. Thank you for your professionalism.

[CEO]
```

**Customer Email (Hour 12):**
```
Subject: Important Security Notice - Action Required

[Customer Name],

We are writing to inform you of a security incident that may have affected your [Company] account.

On [date], we discovered that an unauthorized party accessed our user database. We immediately contained the breach and are conducting a full investigation with a leading cybersecurity firm.

WHAT WAS ACCESSED:
Your email address, username, and encrypted password were included in the breach.

WHAT WAS NOT ACCESSED:
Your payment information, which is stored separately and was not affected.

WHAT WE'VE DONE:
We have reset all passwords and are implementing additional security measures.

WHAT YOU SHOULD DO:
1. Reset your password immediately: [Link]
2. Enable two-factor authentication (recommended): [Link]
3. Monitor your accounts for suspicious activity
4. Review our detailed FAQ: [Link]

We deeply regret this incident. We are committed to earning back your trust through:
- Comprehensive security improvements (detailed on our blog)
- Free security monitoring tools for all users
- Regular updates on our investigation

For questions: security@company.com or call [number]

We appreciate your patience and continued trust.

[CEO Name]
```

**Public Blog Post (Hour 16):**
Detailed version of situation, following 5-component framework, links to FAQ, support resources, timeline of discovery and response.

**Results**:
- Response completed within 24 hours (industry average: 48-72 hours)
- Customer churn: 3% (lower than expected 8-12% for breach)
- Media coverage: Mostly factual, several outlets praised transparency
- Full investigation report published 30 days later with preventive measures
- Recovery: Customer acquisition returned to normal within 3 months

**Investment**: $150K (external security firm, PR counsel, credit monitoring for users, internal team overtime)

### Example 2: Consumer Brand - Product Recall

**Context**: DTC wellness brand, dietary supplement causing allergic reactions in customers with undisclosed nut allergies (labeling error), 10,000 units sold.

**Crisis Level**: Level 1 (Critical - customer safety)

**Hour 0**: Customer reports reaction, mentions to customer service
**Hour 4**: 3 more reports, pattern identified
**Hour 6**: Crisis team activated, manufacturing investigation begins
**Hour 8**: Labeling error confirmed (facility processes nuts, not listed as allergen)
**Hour 10**: CEO decision: Full voluntary recall
**Hour 12**: Employees notified, customer notifications begin

**Customer Communication (Hour 12-24):**
Email to all 10,000 purchasers:
```
URGENT: PRODUCT RECALL - [Product Name]

We are voluntarily recalling all [Product Name] purchased between [dates] due to an undisclosed allergen.

WHAT HAPPENED:
We discovered that [Product] may contain traces of tree nuts, which was not disclosed on the label due to a manufacturing error.

IF YOU HAVE ALLERGIES:
Do not consume this product. Dispose of it immediately or return for full refund.

IF YOU CONSUMED:
Most people will have no issue. If you have nut allergies and experience symptoms, seek medical attention.

WHAT WE'RE DOING:
- Full voluntary recall (10,000 units)
- Immediate refunds + $50 store credit for inconvenience
- Changing manufacturing partners
- Enhanced quality control procedures

TO REQUEST REFUND:
Visit [URL] or call [number]. We will process within 24 hours.

We sincerely apologize. Customer safety is our highest priority.

[Founder/CEO]
```

Social media, website, retail partner notifications (same messaging).

**Media Proactivity**: Press release, offered founder interviews

**Follow-Up Actions**:
- Week 1: Daily updates on recall progress
- Week 2: Detailed blog post on quality control improvements
- Month 1: New manufacturing partner announced with third-party facility audit
- Month 2: Product relaunched with enhanced labeling and testing

**Results**:
- 0 serious injuries (caught early due to customer service alertness)
- 87% of units returned or confirmed disposed
- Short-term revenue impact (~$200K), but brand trust maintained
- Customer surveys post-crisis: 71% said transparency increased brand trust
- Product relaunch successful (pre-orders exceeded previous sales)

**Learning**: Early customer service escalation protocols saved company from worse outcome.

### Example 3: Tech Company - CEO Misconduct Allegations

**Context**: Late-stage startup ($100M+ raised), CEO allegations of harassment from former employees (Twitter thread goes viral).

**Crisis Level**: Level 1 (Critical - executive conduct)

**Hour 0**: Twitter thread posted Saturday morning
**Hour 2**: Board Chair alerted, emergency board call
**Hour 6**: Board decides: CEO on immediate leave, independent investigation
**Hour 12**: Employee notification
**Hour 24**: Public statement

**Board Statement (Hour 24):**
```
Statement from [Company] Board of Directors

We are aware of serious allegations regarding [CEO Name]'s conduct. We are taking these allegations extremely seriously.

Effective immediately, [CEO] has been placed on administrative leave pending an independent investigation by [Law Firm].

[President/COO] will serve as Interim CEO during this period.

We are committed to a thorough, independent investigation and will take appropriate action based on the findings.

We have zero tolerance for harassment or discrimination. All employees have access to reporting mechanisms and we encourage anyone with information to participate in the investigation confidentially.

We will provide updates as appropriate while respecting the integrity of the investigation.

[Board Chair Name]
```

**Employee All-Hands (Hour 36):**
Board Chair and Interim CEO address company, Q&A, outline investigation process and timeline.

**Investigation Process**:
- Week 1-4: Law firm interviews 40+ current/former employees
- Week 5: Findings presented to board
- Board decision: Termination for cause
- Week 6: Public announcement of investigation conclusion and leadership change

**Post-Investigation Communication:**
```
Update from [Company] Board

After a thorough independent investigation by [Law Firm], the Board has terminated [Former CEO] for cause, effective immediately.

The investigation substantiated allegations of [general categories without detail: inappropriate conduct creating hostile work environment].

[Interim CEO] will continue as permanent CEO, with unanimous board and leadership team support.

We have also implemented enhanced policies including:
- Mandatory harassment prevention training for all employees
- Independent ombudsperson for reporting concerns
- Board oversight committee for culture and conduct
- Regular culture audits

We are committed to building a workplace where everyone feels safe, respected, and valued.

We appreciate our team's professionalism during this difficult period.

[Board Chair]
```

**Results**:
- Swift, decisive action preserved employee and investor confidence
- 8% employee attrition (mostly already planned departures)
- Key executives and board members stayed (critical signal)
- Fundraising delayed 6 months but completed successfully
- Company now regularly recognized for culture and DE&I initiatives

**Learning**: Independent investigation critical for credibility. Board's swift action and transparency prevented worse reputational damage.

### Example 4: Public Company - Earnings Miss & Guidance Cut

**Context**: Public SaaS company, Q2 earnings miss expectations by 15%, cutting full-year guidance due to enterprise sales headwinds.

**Crisis Level**: Level 2 (Major - investor/shareholder impact)

**Pre-Earnings (Week Before):**
- CFO and CEO aware targets won't be met
- Board notified in pre-earnings board call
- IR team prepares analyst for "challenging quarter" (without specifics - Reg FD)
- Draft earnings script with transparent explanation

**Earnings Call (After Market Close):**
CEO Script (excerpts):
```
"Q2 was a disappointing quarter. We missed our revenue target by 15%, coming in at $XXM vs. guidance of $XXM.

Let me be direct about what happened:

Enterprise sales cycles lengthened significantly in Q2. We saw this trend emerge in May and it accelerated through the quarter. Deals that historically closed in 60-90 days are now taking 120-150 days.

This is driven by two factors:
1. Increased scrutiny on all software spend (macro environment)
2. More stakeholders involved in purchase decisions (average 7 now vs. 4 a year ago)

What we're doing:
- Adjusted sales process for longer cycles
- Increased focus on economic buyer engagement earlier
- Added customer success proof-of-value programs
- Right-sizing our cost structure (-15% opex)

We are revising full-year guidance from $XXM-XXM to $XXM-XXM. This is conservative based on current pipeline and cycle assumptions.

I take full responsibility for not adjusting our strategy sooner. We're making the necessary changes and expect to see improvement in Q4.

[CFO] will walk through the details."
```

Q&A approach:
- Answered all questions directly
- No defensiveness or blame
- Specific actions and timeline
- Conservative on recovery timing

**Post-Earnings:**
- Next-day: Analyst calls (1:1 with major holders)
- Week 1: Employee all-hands addressing impact and plan
- Week 2: Non-deal roadshow (meetings with investors in NYC, SF, Boston)
- Weekly: Board updates on turnaround execution

**Results**:
- Stock down 22% day-of earnings (painful but not catastrophic)
- Recovered 50% of loss within 3 months as execution improved
- 2 analysts downgraded but 8 of 10 maintained ratings (transparency valued)
- Q3 and Q4 met revised guidance (credibility restored)
- Year-end: Stock up 8% from pre-earnings (broader recovery)

**Learning**: Transparency about miss, clear explanation, conservative forward guidance, and consistent execution restored investor trust.

### Example 5: Media Company - Viral Criticism & Boycott Threat

**Context**: Media/entertainment company, content creator on platform makes offensive comments, public demands company response, boycott trending on social media.

**Crisis Level**: Level 3 (Moderate - reputational, but not direct company fault)

**Hour 0**: Offensive comments posted by creator (independent contractor, not employee)
**Hour 4**: Social media backlash begins, company @ mentions increasing
**Hour 12**: #Boycott[Company] starts trending, media outlets cover
**Hour 18**: Crisis team meeting: Assess situation, decide response

**Assessment**:
- Creator violated community guidelines (grounds for removal)
- But: Free speech concerns, political implications, fan base split
- Decision: Remove creator, clear policy explanation, balance needed

**Public Statement (Hour 24):**
```
Statement from [Company]:

We are aware of offensive comments made by [Creator Name]. These comments violate our Community Guidelines, which prohibit hate speech and harassment.

Effective immediately, we have removed [Creator] from our platform.

We believe in free expression, but that does not extend to speech that demeans or threatens others based on [specific violation].

Our Community Guidelines apply to all creators. We enforce them consistently, regardless of a creator's size or following.

We understand this decision will be supported by some and criticized by others. We are committed to building a platform that is inclusive and safe for all users.

[CEO/Trust & Safety Lead]
```

**Social Media Response**:
- Monitoring and responding to questions
- Linking to detailed Community Guidelines and enforcement process
- Engaging respectfully with both supportive and critical voices
- Not engaging with abusive/troll accounts

**Follow-Up Actions**:
- Week 1: Blog post detailing how content moderation works
- Week 2: Transparency report on enforcement (numbers, categories)
- Month 1: Creator advisory council formed (diverse voices on policy)
- Ongoing: Quarterly transparency reports

**Results**:
- Boycott fizzled within 72 hours (decisive action)
- Some users left platform, but smaller than feared
- Majority of users and advertisers supported decision
- Enhanced reputation for responsible platform governance
- Creator policy violations decreased (clear consequences)

**Learning**: Taking clear stance based on existing policies, even when controversial, builds long-term trust. Transparency on decision-making process critical.

---

## Success Metrics

- **Response Speed**: Meeting target timelines by crisis level (Level 1: <2hrs, Level 2: <8hrs, Level 3: <24hrs)
- **Message Consistency**: 95%+ alignment across all channels and spokespeople
- **Stakeholder Reach**: 90%+ of affected stakeholders informed within target window
- **Sentiment Shift**: Negative sentiment declining within 1 week, positive/neutral majority within 4 weeks
- **Media Coverage Quality**: Majority of coverage includes company perspective and response
- **Employee Confidence**: Post-crisis surveys show >70% confidence in leadership handling
- **Business Impact Minimization**: Recovery to baseline metrics within target timeline (varies by crisis)
- **Repeat Prevention**: Zero recurrence of same crisis type after corrective actions implemented

---

## Best Practices

- **Prepare Before Crisis**: Templates, teams, training before you need them
- **Speed Matters**: Every hour of delay increases reputational damage exponentially
- **Transparency Builds Trust**: Honest communication (within legal bounds) preserves long-term relationships
- **Consistency Across Channels**: All spokespeople, all channels, same core message
- **Empathy Over Defense**: Acknowledge harm and show care before explaining circumstances
- **Own Your Mistakes**: Taking responsibility earns respect, even (especially) when it's hard
- **Actions Speak Louder**: Promises of improvement must be followed by visible change
- **Learn and Adapt**: Every crisis improves your playbook for next time
- **Internal Before External**: Employees learn from company first, become advocates
- **Long-Term Thinking**: Protect reputation over short-term stock price or quarterly results

---

## Common Pitfalls

- **Delay and Hope It Blows Over**: Silence is interpreted as guilt or indifference
- **"No Comment"**: Sounds like hiding something; better to say what you CAN share
- **Legales**: Over-lawyered statements that lack humanity and empathy
- **Blame Others**: Pointing fingers (employees, vendors, customers) damages credibility
- **Half-Truths**: Incomplete information that later contradicts creates worse crisis
- **Inconsistent Messages**: Different spokespeople saying different things creates confusion
- **Over-Promising**: Commitments you can't keep make crisis worse when you fail again
- **Ignoring Social Media**: Where conversation happens whether you participate or not
- **Forgetting Employees**: Internal communication afterthought leads to employee critics
- **Moving On Too Fast**: Declaring victory before stakeholders feel crisis is truly resolved

---

**License**: © 2025 Adedayo Agarau. Licensed under CC BY-SA 4.0.
**Compatibility**: Optimized for Claude Code (Anthropic), ChatGPT (OpenAI), Gemini (Google), Copilot (Microsoft).
**Maintainer**: Adedayo Agarau | https://github.com/Chinoscode | https://linkedin.com/in/adedayo-agarau

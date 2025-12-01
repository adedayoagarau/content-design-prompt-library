## Internal Knowledge Base Architecture v1.0

**Purpose**: Design a comprehensive, scalable internal knowledge management system that transforms tribal knowledge into searchable, maintainable documentation that empowers employees, reduces support burden, and accelerates onboarding through strategic information architecture, content governance, and continuous improvement frameworks.

**Context**: Use this framework when building or redesigning organizational knowledge repositories that capture processes, policies, best practices, and institutional memory. Most internal knowledge bases fail due to poor findability, outdated content, and unclear ownership—becoming graveyards of obsolete documentation. This system establishes taxonomy design, content lifecycle management, contributor workflows, and measurement frameworks that create a living knowledge base employees actually use. Ideal for companies with 50+ employees experiencing knowledge silos, frequent "where can I find..." questions, onboarding inefficiencies, or scaling challenges where tacit knowledge needs codification.

**Strategic Frameworks Applied**:
- **Information Architecture & Taxonomy Design** - Organizing knowledge for intuitive discovery and hierarchical navigation
- **Content Lifecycle Management** - Creating, maintaining, deprecating, and archiving documentation systematically
- **Contributor Network Model** - Distributing ownership and incentivizing content creation across organization
- **Search & Findability Optimization** - Metadata, tagging, and search algorithms for rapid information retrieval
- **Knowledge Transfer Theory** - Converting tacit to explicit knowledge through structured documentation
- **Continuous Improvement Loops** - Usage analytics and feedback mechanisms for iterative optimization

---

## Variables

Define strategic variables for comprehensive knowledge base architecture:

### Organizational Context Variables
- `{{company_name}}`: Organization name and brand identity
- `{{company_size}}`: Employee count impacting knowledge complexity
- `{{company_stage}}`: Startup | Growth-stage | Enterprise | Post-merger
- `{{knowledge_maturity}}`: Current state (No documentation | Ad-hoc wikis | Fragmented | Centralized but outdated)
- `{{primary_use_cases}}`: Main purposes (Onboarding | Process documentation | Technical references | Policy library | Customer support knowledge)
- `{{organizational_complexity}}`: Number of departments, products, locations, regulatory requirements
- `{{change_velocity}}`: Rate of process/policy changes requiring documentation updates

### Platform & Technical Variables
- `{{knowledge_platform}}`: Current or planned tool (Notion | Confluence | SharePoint | GitBook | Custom wiki | Multiple systems)
- `{{platform_capabilities}}`: Features available (Search quality | Versioning | Permissions | Analytics | API access)
- `{{integration_requirements}}`: Connect to (Slack | HRIS | CRM | Project management | Support ticketing)
- `{{access_patterns}}`: How employees find information (Search | Browse | Link-sharing | Chatbot | Ask colleagues)
- `{{technical_constraints}}`: Security requirements, compliance needs, legacy system dependencies
- `{{mobile_requirements}}`: Percentage of workforce accessing via mobile devices

### Content Scope Variables
- `{{content_categories}}`: Main knowledge domains (HR policies | Engineering processes | Sales playbooks | Product documentation | Legal/Compliance | Customer support | Operations)
- `{{documentation_volume}}`: Estimated number of pages/articles needed (100s | 1,000s | 10,000s)
- `{{content_types}}`: Formats required (How-to guides | FAQs | Process flows | Video tutorials | Templates | Policies | Troubleshooting)
- `{{sensitive_content}}`: Topics requiring restricted access (Compensation | M&A | Legal | Executive strategy)
- `{{external_vs_internal}}`: Percentage of knowledge also used for external-facing docs
- `{{language_requirements}}`: Single language | Multi-language | Translation workflows

### Governance Variables
- `{{knowledge_owners}}`: Who owns the knowledge base (Ops team | Each department | Dedicated knowledge team | Distributed)
- `{{content_contributors}}`: Who creates content (SMEs | Managers | Everyone | Technical writers)
- `{{approval_workflows}}`: Who reviews/approves (Peer review | Manager approval | No approval | Legal review for certain topics)
- `{{update_frequency}}`: How often content should be refreshed (Continuous | Quarterly reviews | Annual audits)
- `{{quality_standards}}`: Editorial guidelines, accuracy requirements, formatting rules
- `{{sunset_policy}}`: How outdated content is identified and removed

### User & Audience Variables
- `{{primary_users}}`: Main knowledge base audience (All employees | New hires | Managers | Support team | Engineering)
- `{{user_personas}}`: 3-5 representative user types with distinct needs (New hire needing onboarding, IC needing process reference, Manager needing templates)
- `{{skill_levels}}`: Technical proficiency of users (Highly technical | Mixed | Non-technical)
- `{{geographic_distribution}}`: Single office | Multi-office | Fully distributed
- `{{usage_scenarios}}`: Common contexts (Onboarding first week | During task execution | Troubleshooting problems | Before meetings)

### Success & Measurement Variables
- `{{success_metrics}}`: Key performance indicators (Search success rate | Page views | Time-to-find | Content coverage | Freshness score)
- `{{business_outcomes}}`: What knowledge base should drive (Faster onboarding | Reduced support tickets | Fewer process errors | Improved compliance)
- `{{baseline_metrics}}`: Current state (Average time to find information, # of "where is..." Slack messages)
- `{{target_adoption}}`: Goal for active users (% of employees accessing monthly)

---

## Prompt

You are an internal knowledge management strategist designing a world-class knowledge base for **{{company_name}}** ({{company_size}} employees, {{knowledge_maturity}} current state). Your task is to create a comprehensive knowledge base architecture using **{{knowledge_platform}}** that transforms scattered tribal knowledge into an organized, searchable, maintainable system that achieves **{{business_outcomes}}**, serves **{{primary_users}}**, and reaches **{{target_adoption}}** adoption.

### Knowledge Base Strategy & Vision

**Vision Statement:**

Define the aspirational purpose of your knowledge base:

**Example Vision Statements by Primary Use Case:**

**If Onboarding-Focused:**
"Our knowledge base is the central nervous system of {{company_name}}, enabling any new hire to ramp up 50% faster by providing structured, searchable access to every process, policy, and practice—eliminating the need to 'tap someone on the shoulder' for basic information."

**If Process Documentation-Focused:**
"Our knowledge base codifies institutional knowledge, ensuring that {{company_name}}'s best practices and operational processes are documented, discoverable, and consistently applied—reducing errors, increasing efficiency, and protecting against knowledge loss from turnover."

**If Technical Reference-Focused:**
"Our knowledge base serves as the technical brain of {{company_name}}, providing engineers instant access to architecture decisions, API documentation, troubleshooting guides, and code standards—eliminating redundant questions and accelerating shipping velocity."

**If Policy & Compliance-Focused:**
"Our knowledge base is the single source of truth for {{company_name}} policies, ensuring every employee has current, accurate information on HR policies, legal requirements, and compliance procedures—reducing risk and eliminating outdated policy confusion."

**Current State Assessment:**

Diagnose the starting point of {{knowledge_maturity}}:

**Symptoms of Poor Knowledge Management:**
- Average time to find documented information: [X] minutes (should be <2 min)
- "Where can I find..." messages in Slack: [X] per day
- New hire confusion: [X]% report difficulty finding basic information in first 30 days
- Duplicate documentation: Same process documented in [X] different places
- Outdated content: [X]% of existing docs haven't been updated in 12+ months
- Support burden: [X]% of internal support tickets are "where is..." questions
- Tribal knowledge risk: [X] critical processes exist only in employees' heads

**Gap Analysis:**

Compare current state to desired state:
```
Current State → Target State

Findability: 40% search success rate → 85%+ search success rate
Coverage: 30% of processes documented → 90%+ documented
Freshness: 50% outdated → 95%+ current (updated within relevance period)
Usage: 20% of employees use monthly → 80%+ use monthly
Onboarding: 60 days to productivity → 30 days to productivity
Support burden: 200 "where is..." questions/month → <50/month
```

### Information Architecture & Taxonomy Design

**Top-Level Structure:**

Design the primary navigation hierarchy for {{content_categories}}:

**Recommended Taxonomy Framework:**

```
KNOWLEDGE BASE STRUCTURE

1. 📋 Getting Started
   ├── Welcome to {{company_name}}
   ├── First Week Checklist
   ├── Tools & Access Setup
   ├── Company Culture & Values
   └── Who's Who Directory

2. 👥 People & HR
   ├── Policies & Handbook
   │   ├── Time Off & Leave
   │   ├── Compensation & Benefits
   │   ├── Code of Conduct
   │   └── Remote Work Policy
   ├── Career Development
   │   ├── Performance Reviews
   │   ├── Promotion Framework
   │   └── Learning Resources
   └── People Operations
       ├── Hiring Process
       ├── Onboarding Process
       └── Offboarding Process

3. 🛠️ How We Work
   ├── Communication Guidelines
   │   ├── Slack Best Practices
   │   ├── Email Guidelines
   │   └── Meeting Culture
   ├── Project Management
   │   ├── Agile/Sprint Process
   │   ├── OKR Framework
   │   └── Decision-Making Framework
   └── Cross-Functional Workflows
       ├── Product Launch Process
       ├── Customer Escalation Protocol
       └── Budget Approval Process

4. 🏢 Departments
   ├── Engineering
   │   ├── Tech Stack Overview
   │   ├── Development Workflow
   │   ├── Code Review Process
   │   ├── Deployment Guide
   │   └── Architecture Decisions (ADRs)
   ├── Product
   │   ├── Product Development Process
   │   ├── User Research Guides
   │   └── Feature Spec Templates
   ├── Sales
   │   ├── Sales Playbook
   │   ├── CRM Usage Guide
   │   └── Objection Handling
   ├── Marketing
   │   ├── Brand Guidelines
   │   ├── Content Calendar
   │   └── Campaign Templates
   └── [Other departments...]

5. 📚 Product Knowledge
   ├── Product Overview
   ├── Feature Documentation
   ├── Technical Architecture
   ├── Integrations & APIs
   └── Troubleshooting Guides

6. 🤝 Customer Support
   ├── Support Process
   ├── FAQ Database
   ├── Escalation Workflows
   └── Known Issues & Workarounds

7. ⚖️ Legal & Compliance
   ├── Data Privacy (GDPR, CCPA)
   ├── Security Policies
   ├── Vendor Management
   └── Contract Templates

8. 📊 Company Resources
   ├── Brand Assets
   ├── Templates & Forms
   ├── Tool Documentation
   └── Expense & Travel
```

**Taxonomy Design Principles:**

- **User-Centric Naming**: Use terminology employees actually use, not corporate jargon
  - Good: "Requesting Time Off" 
  - Bad: "PTO Requisition Procedures"

- **Shallow Hierarchy**: Limit to 3-4 levels deep (Category → Subcategory → Article → Section)
  - Too deep = Users get lost navigating
  - Too shallow = Categories become overwhelming

- **Predictable Structure**: Consistent patterns across sections
  - Every department section follows same structure: Overview → Processes → Tools → Templates

- **Search-Optimized**: Tag content with multiple access paths
  - "Time Off Policy" also tagged with: PTO, Vacation, Leave, Holidays

**Metadata & Tagging System:**

Establish consistent metadata for every article:

```yaml
article_metadata:
  title: "[Clear, specific, searchable title]"
  description: "[1-2 sentence summary for search results]"
  content_type: "Policy | Process | Guide | FAQ | Template | Reference"
  department: "[Primary owner department]"
  audience: "[Who should read this: All employees | Managers | [Department] | [Role]]"
  last_updated: "[Date]"
  last_reviewed: "[Date]"
  review_frequency: "Weekly | Monthly | Quarterly | Annually | As-needed"
  owner: "[Name and contact]"
  tags: ["Keyword1", "Keyword2", "Keyword3"] # For search and filtering
  status: "Draft | In Review | Published | Needs Update | Archived"
  related_articles: ["Link1", "Link2"] # Related content suggestions
  permissions: "Public (All employees) | Restricted (Specific teams) | Confidential (Named individuals)"
```

### Content Typology & Templates

**Standard Content Types:**

Create templates for common documentation patterns:

**1. Process Documentation Template**
```markdown
# [Process Name]

## Overview
- **Purpose**: Why this process exists
- **Owner**: Who manages this process
- **Frequency**: How often this process runs
- **Estimated Time**: How long it takes

## When to Use This Process
[Specific scenarios and triggers]

## Prerequisites
What you need before starting:
- [ ] Prerequisite 1
- [ ] Prerequisite 2
- [ ] Required access/permissions

## Step-by-Step Process

### Step 1: [Action]
**What to do**: [Detailed instructions]
**Tools needed**: [List tools/systems]
**Tips**: [Common pitfalls to avoid]

### Step 2: [Action]
[Repeat for each step]

## Outputs & Deliverables
What you should have when complete:
- [Deliverable 1]
- [Deliverable 2]

## FAQs
**Q: [Common question]**
A: [Answer]

## Related Resources
- [Link to related process]
- [Link to template]
- [Link to tool documentation]

## Revision History
| Date | Changes | By |
|------|---------|-----|
| 2024-01-15 | Initial creation | Jane Doe |
```

**2. Policy Documentation Template**
```markdown
# [Policy Name]

## Policy Statement
[1-2 paragraph summary of the policy and its purpose]

## Scope
**Who this applies to**: [All employees | Specific roles | Specific departments]
**Effective date**: [Date]
**Last reviewed**: [Date]

## Policy Details

### [Section 1]
[Detailed policy provisions]

### [Section 2]
[More details]

## Procedures
How to comply with this policy:
1. [Step 1]
2. [Step 2]

## Exceptions
When this policy doesn't apply or requires special approval:
- [Exception scenario 1]
- [Exception scenario 2]

## Violations
Consequences of non-compliance:
[Description of disciplinary process]

## Questions & Approvals
- **Policy owner**: [Name, title, contact]
- **Approved by**: [Leadership approval]
- **Questions**: Contact [email/Slack channel]

## Related Policies
- [Link to related policy]
```

**3. How-To Guide Template**
```markdown
# How to [Task]

**Estimated time**: [X] minutes
**Skill level**: Beginner | Intermediate | Advanced
**Last updated**: [Date]

## What You'll Learn
By the end of this guide, you'll be able to:
- [Learning objective 1]
- [Learning objective 2]

## Before You Start
Make sure you have:
- [Access/permission required]
- [Tool or resource needed]

## Instructions

### Step 1: [Action]
[Detailed walkthrough with screenshots if relevant]

**💡 Tip**: [Helpful hint]
**⚠️ Warning**: [Common mistake to avoid]

### Step 2: [Action]
[Continue steps]

## Troubleshooting
**Problem**: [Common issue]
**Solution**: [How to resolve]

## Next Steps
Now that you've learned [task], check out:
- [Related guide]
- [Advanced technique]

## Need Help?
- Slack: #[channel-name]
- Email: [support email]
```

**4. FAQ Template**
```markdown
# [Topic] FAQs

## General Questions

**Q: [Question]**
A: [Detailed answer with links to relevant documentation]

**Q: [Question]**
A: [Answer]

## [Category] Questions
[Group related FAQs]

## Still Have Questions?
If you can't find your answer here:
- Check the [main documentation page]
- Ask in Slack: #[channel]
- Contact: [owner name and email]

---
*Last updated*: [Date] | *Owner*: [Name]
```

### Content Creation & Contribution Workflows

**Contributor Model:**

Define who creates content and how:

**Centralized Model** (Small teams <100 employees):
- Dedicated knowledge manager owns all content
- SMEs provide input, knowledge manager writes/maintains
- Pros: Consistent quality and voice
- Cons: Bottleneck, doesn't scale

**Distributed Model** (Larger teams 100+ employees):
- Department owners responsible for their domain
- Cross-functional contributors with editorial oversight
- Pros: Scales, domain expertise, shared ownership
- Cons: Variable quality, coordination needed

**Hybrid Model** (Recommended for most):
- Knowledge team sets standards, provides templates, reviews quality
- Department SMEs create and maintain their domain content
- All employees can suggest edits or flag outdated content
- Pros: Scalability + quality control

**Content Creation Workflow:**

```
KNOWLEDGE ARTICLE LIFECYCLE

1. IDEATION
   Trigger: Gap identified (FAQ question, onboarding friction, new process)
   → Create ticket/request in tracking system
   → Assign to content owner (SME + knowledge editor if hybrid model)
   
2. DRAFTING
   → Use appropriate template (process, policy, guide, FAQ)
   → Write in {{quality_standards}} voice (clear, concise, actionable)
   → Add screenshots, diagrams, examples
   → Include metadata (owner, tags, review frequency)
   → Estimated timeline: 2-4 hours for typical article
   
3. REVIEW & APPROVAL
   → Peer review (SME validates accuracy)
   → Editorial review (knowledge team checks clarity, consistency, findability)
   → Legal/compliance review (if sensitive content)
   → Revisions as needed
   → Estimated timeline: 2-5 business days
   
4. PUBLICATION
   → Publish to appropriate section
   → Announce in relevant Slack channels: "New guide available: [title] [link]"
   → Add to onboarding curriculum if relevant
   → Add to related articles' "See Also" sections
   
5. MAINTENANCE
   → Schedule review based on review_frequency (quarterly for processes, annually for policies)
   → Monitor usage analytics and user feedback
   → Update when underlying process/policy changes
   → Mark as "Needs Update" if SME identifies outdated info
   
6. DEPRECATION
   → When content is no longer relevant, don't just delete
   → Mark as "Archived" with explanation why
   → Redirect to current version if applicable
   → Keep in searchable archive for institutional memory
```

**Governance & Ownership Matrix:**

Assign clear accountability:

```yaml
content_ownership:
  getting_started:
    owner: "People Ops team"
    contributors: ["IT (tool setup)", "Finance (expense policies)", "Recruiting (culture)"]
    review_frequency: "Quarterly (high onboarding volume)"
    
  people_hr:
    owner: "HR Business Partners"
    contributors: ["Legal (policy compliance)", "Finance (comp/benefits)"]
    review_frequency: "Annually or upon policy change"
    
  engineering:
    owner: "Engineering Manager + Senior Engineers"
    contributors: ["All engineers can contribute"]
    review_frequency: "Monthly (fast-changing tech stack)"
    
  product:
    owner: "Product Managers"
    contributors: ["Design", "Engineering", "Customer Success"]
    review_frequency: "Quarterly or upon major release"
    
  [Continue for each section...]
```

**Editorial Standards & Style Guide:**

Establish consistent writing guidelines:

**Voice & Tone:**
- Clear and conversational (not corporate jargon)
- Action-oriented (tell users what to DO)
- Empathetic (acknowledge when processes are complex)
- Example: "Need to submit an expense? Here's how..." vs. "Expense Submission Procedures"

**Formatting Standards:**
- **Headings**: Use H2 for major sections, H3 for subsections (consistent hierarchy)
- **Lists**: Bullets for unordered items, numbers for sequential steps
- **Bold**: Important terms, UI elements ("Click the **Save** button")
- **Links**: Descriptive link text ("See our [Time Off Policy]" not "Click here")
- **Code/Technical**: Use code blocks for terminal commands, API examples
- **Images**: Always include alt text for accessibility
- **Tables**: For comparison data, feature matrices, option breakdowns

**Length Guidelines:**
- **Policy pages**: 500-1,500 words (comprehensive but not overwhelming)
- **Process guides**: 300-800 words (scannable, step-by-step)
- **How-to guides**: 400-1,000 words (enough detail to complete task)
- **FAQ answers**: 50-200 words per answer (concise, linkable)

**Readability:**
- Write at 8th-grade reading level (Hemingway App score 8 or below)
- Avoid jargon unless defined
- Use short paragraphs (3-4 sentences max)
- One idea per paragraph

### Search & Findability Optimization

**Search Strategy:**

Make information discoverable within {{knowledge_platform}} capabilities:

**Search Optimization Tactics:**

1. **Keyword Optimization**
   - Include terms employees actually search for in titles and first paragraphs
   - Example: If employees search "WFH policy", ensure article title includes "Work From Home" + tag "WFH"

2. **Synonyms & Alternate Terms**
   - Tag "Time Off Policy" with: PTO, Vacation, Leave, Holidays, Days Off
   - Add "Also known as..." section for alternate terminology

3. **Natural Language Queries**
   - Optimize for question-based searches: "How do I..." "What is the policy for..." "Where can I find..."
   - Include FAQ sections with common questions verbatim

4. **Metadata Completeness**
   - Every article must have: title, description, tags, owner, last_updated
   - Search algorithms favor complete metadata

5. **Popular Articles Surfacing**
   - Use analytics to identify most-accessed pages
   - Feature popular articles in category overviews
   - Create "Most Helpful" sections

**Navigation Design:**

Beyond search, enable browsing:

**Homepage Design:**
```yaml
knowledge_base_homepage:
  hero_section:
    search_bar: "Prominent, autosuggest-enabled search"
    popular_searches: "Quick links to top 10 most-searched articles"
    
  quick_access:
    new_employees: "Start Here: Your First Week"
    managers: "Manager Resources Hub"
    by_department: "Find Your Team's Documentation"
    
  featured_content:
    recently_updated: "Latest Updates (last 30 days)"
    most_popular: "Top 10 Most Viewed This Month"
    getting_started_guides: "Curated onboarding content"
    
  browse_by:
    category: "Visual navigation by {{content_categories}}"
    department: "Filter by team"
    content_type: "Process vs. Policy vs. Guide"
```

**Contextual Help:**

Embed knowledge base links where users need them:

- **Slack Integration**: `/kb [search term]` command returns top results
- **Tool Tooltips**: Link to KB articles from complex workflows
- **Onboarding Checklists**: Inline KB links for each task
- **Error Messages**: "See troubleshooting guide: [link]"

**Chatbot Integration (Advanced):**

If {{knowledge_platform}} supports AI:
- Deploy chatbot that queries KB and suggests articles
- "Ask the Knowledge Base" conversational interface
- Learn from search failures (what queries return no results)

### Analytics & Continuous Improvement

**Usage Metrics Dashboard:**

Track knowledge base health with {{success_metrics}}:

```yaml
knowledge_base_scorecard:
  coverage_metrics:
    total_articles: "[#] articles"
    articles_by_category: |
      Getting Started: [#]
      People & HR: [#]
      [Continue for each category]
    documentation_gaps: "[#] identified processes without documentation"
    
  quality_metrics:
    average_article_age: "[X] days since last update"
    articles_needing_update: "[#] flagged as outdated"
    freshness_score: "[%] updated within relevance period"
    review_adherence: "[%] reviewed on schedule"
    
  findability_metrics:
    search_success_rate: "[%] searches resulting in clicked article"
    zero_result_searches: "[#] queries with no results (gaps to fill)"
    average_time_to_find: "[X] seconds from search to article open"
    top_search_terms: "[List of most common queries]"
    
  engagement_metrics:
    monthly_active_users: "[#] unique users (target: {{target_adoption}})"
    total_page_views: "[#] views this month"
    most_viewed_articles: "[Top 10 with view counts]"
    average_time_on_page: "[X] minutes (indicates depth of reading)"
    
  contribution_metrics:
    new_articles_created: "[#] this month"
    articles_updated: "[#] revised this month"
    user_feedback_submissions: "[#] comments, ratings, edit suggestions"
    contributor_engagement: "[#] active contributors (non-knowledge team)"
    
  business_impact_metrics:
    onboarding_time_to_productivity: "[X] days (baseline vs. current)"
    support_ticket_reduction: "[%] decrease in 'where is...' questions"
    slack_question_volume: "[#] per week in #ask-[topic] channels"
    employee_satisfaction: "[Score] on quarterly survey question 'I can easily find info I need'"
```

**Feedback Mechanisms:**

Collect input directly from users:

**Article-Level Feedback:**
- **Thumbs up/down**: "Was this helpful? 👍 👎"
- **Ratings**: 1-5 star rating with optional comment
- **Specific questions**:
  - "Was this information accurate? Y/N"
  - "Was this easy to understand? Y/N"
  - "What would make this better? [Open text]"
- **Suggest Edit**: Button to propose changes (wiki-style)

**System-Level Feedback:**
- **Quarterly surveys**: "How satisfied are you with the knowledge base? What's missing?"
- **User interviews**: 30-min sessions with new hires and power users
- **Slack channel**: #knowledge-base-feedback for async suggestions
- **Office hours**: Weekly "Ask the Knowledge Team" session

**Analytics-Driven Optimization:**

Use data to prioritize improvements:

**Monthly Optimization Ritual:**
1. Review top 10 "zero result searches" → Create missing content
2. Identify articles with high traffic but low satisfaction → Rewrite/improve
3. Find outdated articles (>12 months since update) → Schedule reviews
4. Analyze drop-off points (users leaving mid-article) → Improve clarity or break into smaller pieces
5. Test new taxonomy or tagging → A/B test navigation structures

**Content Audit Process:**

Quarterly review to maintain quality:

```
CONTENT AUDIT WORKFLOW

Step 1: Export Content Inventory
→ List all articles with metadata: title, owner, last_updated, views, rating
→ Identify articles >6 months old (for processes) or >12 months (for policies)

Step 2: Categorize Articles
→ Green: Current, accurate, high satisfaction → No action
→ Yellow: Needs minor updates → Schedule refresh
→ Red: Outdated or inaccurate → Priority rewrite or deprecate

Step 3: Assign Remediation
→ Contact content owners for red/yellow articles
→ Set deadline (typically 30 days for updates)
→ Track completion in project management tool

Step 4: Deprecation Decisions
→ For red articles no longer relevant: Archive with explanation
→ Redirect old URLs to current versions
→ Update related articles to remove broken links

Step 5: Report Results
→ Share audit summary: [#] articles reviewed, [#] updated, [#] created, [#] archived
→ Celebrate wins and acknowledge contributors
```

---

## Output Schema

```yaml
knowledge_base_architecture:
  foundation:
    platform: "{{knowledge_platform}}"
    vision_statement: "[1-2 sentence purpose]"
    primary_use_cases: "{{primary_use_cases}}"
    target_adoption: "{{target_adoption}}"
    success_metrics: "{{success_metrics}}"
    
  information_architecture:
    top_level_categories:
      - category_name: "Getting Started"
        description: "Onboarding and new employee resources"
        subcategories: ["Welcome", "First Week", "Tools Setup", "Culture"]
        estimated_articles: "[#]"
        
      - category_name: "[Category 2]"
        # Repeat structure
        
    metadata_schema:
      required_fields: ["title", "description", "content_type", "department", "audience", "owner", "last_updated", "tags"]
      optional_fields: ["review_frequency", "related_articles", "permissions"]
      
  content_standards:
    templates:
      - template_name: "Process Documentation"
        use_case: "Step-by-step workflows"
        structure: "[Defined structure from templates above]"
        
      - template_name: "Policy Documentation"
        use_case: "Official company policies"
        structure: "[Defined structure]"
        
    editorial_guidelines:
      voice_tone: "{{tone_of_voice}}"
      readability_target: "8th grade level"
      length_guidelines:
        policy: "500-1,500 words"
        process: "300-800 words"
        how_to: "400-1,000 words"
        faq: "50-200 words per answer"
        
  governance_model:
    ownership_structure: "Centralized | Distributed | Hybrid"
    
    content_owners:
      - category: "People & HR"
        primary_owner: "HR Business Partners"
        contributors: ["Legal", "Finance"]
        review_frequency: "Annually"
        
      - category: "[Another category]"
        # Repeat structure
        
    approval_workflow:
      step_1: "SME drafts content"
      step_2: "Peer review for accuracy"
      step_3: "Editorial review for clarity"
      step_4: "[Additional approvals if needed: Legal, Compliance]"
      step_5: "Publish and announce"
      
  contribution_workflow:
    how_to_contribute:
      - "Submit content request via [Form/Slack/Email]"
      - "Content team assigns to appropriate SME"
      - "Use template for content type"
      - "Follow editorial standards"
      - "Submit for review"
      
    incentives:
      - "Recognition in monthly newsletter"
      - "Contributor leaderboard"
      - "Career development (writing portfolio)"
      
  search_findability:
    search_optimization:
      - "Keyword-rich titles and descriptions"
      - "Comprehensive tagging with synonyms"
      - "FAQ sections with natural language questions"
      - "Metadata completeness"
      
    navigation_design:
      homepage_elements: ["Prominent search", "Popular articles", "Quick access by persona", "Recently updated"]
      browse_options: ["By category", "By department", "By content type"]
      
    integrations:
      - "Slack command: /kb [search]"
      - "Onboarding checklists with inline links"
      - "Tool tooltips linking to relevant guides"
      
  maintenance_framework:
    review_schedule:
      continuous: "User feedback, suggested edits"
      monthly: "Analytics review, zero-result searches, high-traffic low-satisfaction articles"
      quarterly: "Content audit (outdated articles, gaps, deprecation)"
      annually: "Full taxonomy review, user interviews, major updates"
      
    update_triggers:
      - "Policy or process change"
      - "User feedback indicating inaccuracy"
      - "Scheduled review based on review_frequency"
      - "Analytics showing high traffic but low satisfaction"
      
  analytics_dashboard:
    coverage:
      total_articles: "[#]"
      documentation_gaps: "[#] processes without docs"
      
    quality:
      freshness_score: "[%] updated within relevance period"
      average_satisfaction: "[X]/5 stars"
      
    findability:
      search_success_rate: "[%]"
      average_time_to_find: "[X] seconds"
      
    engagement:
      monthly_active_users: "[#] ([%] of {{company_size}})"
      page_views: "[#]"
      
    business_impact:
      onboarding_time_reduction: "[X] days faster"
      support_ticket_reduction: "[%] decrease"
```

---

## Examples

### Example 1: SaaS Startup (200 Employees, Notion, Rapid Growth)

**Context**: Series B company scaling from 100 to 200 employees in 6 months, existing wiki is chaotic, new hires overwhelmed.

**Strategy**:
- **Platform**: Notion (already adopted for project management)
- **Primary Use Case**: Onboarding + Process documentation
- **Governance**: Hybrid (Knowledge Manager + Department SME owners)

**Top-Level Structure**:
1. 🚀 Start Here (New employee onboarding)
2. 📖 Company Handbook (Policies)
3. 🛠️ How We Work (Cross-functional processes)
4. 🏢 Teams (Department-specific: Eng, Product, Sales, Marketing, Ops)
5. 📦 Product Docs (Feature guides, tech stack)
6. 🤝 Customer Success (Support workflows)
7. 📚 Resources (Templates, brand assets, tools)

**Key Initiatives**:
- **Week 1**: Audit existing Notion pages, archive >18 months old
- **Week 2**: Build "Start Here" onboarding hub (top priority)
- **Week 3-4**: Department owners create their team sections
- **Week 5-8**: Backfill process documentation using templates
- **Ongoing**: Weekly "Content Office Hours" for SMEs to get help writing

**90-Day Results**:
- Created 150 core articles (up from 42 scattered pages)
- Onboarding time-to-productivity: 45 days → 28 days
- "I can find info easily" score: 3.1 → 4.2 (out of 5)
- Slack "where is..." messages reduced 60%
- 70% of employees accessed KB monthly (target: 65%)

**What Worked**:
- Starting with onboarding solved immediate pain point and built momentum
- Templates empowered non-writers to create consistent documentation
- Department ownership prevented knowledge team bottleneck
- Slack integration (`/notion [search]`) drove adoption

### Example 2: Enterprise Software Company (1,500 Employees, Confluence, Highly Regulated)

**Context**: Established company with compliance requirements, existing Confluence with 10,000+ pages (many outdated), findability crisis.

**Strategy**:
- **Platform**: Confluence (entrenched, integrate don't replace)
- **Primary Use Case**: Compliance + Policy management + Technical reference
- **Governance**: Distributed (Department owners with quarterly audit requirements)

**Information Architecture Overhaul**:
- **Before**: Flat structure with 30 top-level spaces, duplicates everywhere
- **After**: 8 core spaces with strict hierarchy and cross-linking

**Spaces**:
1. Corporate Policies (HR, Legal, Compliance)
2. Engineering (Tech stack, architecture, runbooks)
3. Product & Design
4. Sales & Customer Success
5. Finance & Operations
6. Security & IT
7. Onboarding & Career Development
8. Templates & Resources Library

**Key Initiatives**:
- **Months 1-2**: Content audit (identified 4,000 outdated pages to archive)
- **Month 3**: Implemented metadata standards (all articles must have owner, last_reviewed, status)
- **Month 4**: Deployed Confluence Analytics to track usage
- **Month 5-6**: Trained 50 "Knowledge Champions" (1 per team) on content creation
- **Ongoing**: Quarterly content review cycles with automated reminders

**6-Month Results**:
- Reduced active pages from 10,000 to 3,500 (archived 65% as outdated)
- Search success rate: 38% → 72%
- Compliance audit prep time: 80 hours → 20 hours (centralized policy access)
- Monthly active users: 45% → 68% of workforce
- Zero critical compliance violations (previously 3-5 annually)

**What Worked**:
- Ruthless archiving (with explanation pages redirecting to current content)
- Metadata enforcement (articles without owners auto-flagged for deletion)
- Quarterly audit mandated by leadership (accountability)
- Knowledge Champions network (distributed maintenance)

### Example 3: Remote-First Non-Profit (80 Employees, GitBook, Mission-Driven)

**Context**: Fully distributed team across 15 countries, high volunteer involvement, need public + internal documentation.

**Strategy**:
- **Platform**: GitBook (enables public/private spaces, version control)
- **Primary Use Case**: Internal processes + Volunteer onboarding + Public knowledge sharing
- **Governance**: Centralized (small Operations team maintains)

**Dual Documentation Strategy**:
- **Public Space**: Program information, volunteer guides, impact reports (external audience)
- **Internal Space**: HR policies, financial processes, strategic planning (staff only)

**Top-Level Structure (Internal)**:
1. 🌍 Welcome & Mission
2. 👥 People & Culture
3. 🗂️ Programs & Operations
4. 💰 Finance & Grants
5. 🤝 Partnerships & Fundraising
6. 🛠️ Tools & Systems
7. 📚 Resources (templates, brand)

**Key Initiatives**:
- **Month 1**: Built comprehensive volunteer onboarding (reduced orientation time 50%)
- **Month 2**: Documented grant management process (previously only in Program Director's head)
- **Month 3**: Created multilingual content for primary languages (English, Spanish, French)
- **Ongoing**: Staff contributes during "Documentation Fridays" (last Friday of month)

**6-Month Results**:
- Volunteer onboarding time: 2 weeks → 1 week
- Staff turnover knowledge loss eliminated (all processes documented)
- Grant compliance improved (clear documentation for auditors)
- Cross-cultural collaboration easier (translated key docs)

**What Worked**:
- Public/private spaces met dual need (transparent mission + secure operations)
- Version control via Git workflow (suited technical staff)
- Translation prioritization (focused on highest-impact content)
- Documentation Fridays ritual (made maintenance sustainable)

### Example 4: Healthcare Provider (500 Clinical + Admin Staff, SharePoint, Compliance-Critical)

**Context**: Hospital system with strict regulatory requirements (HIPAA, Joint Commission), clinical protocols must be current and accessible 24/7.

**Strategy**:
- **Platform**: SharePoint (integrated with Microsoft ecosystem, meets security requirements)
- **Primary Use Case**: Clinical protocols + Compliance policies + Operational procedures
- **Governance**: Highly controlled (Clinical Operations + Compliance teams own all content)

**Information Architecture**:
1. 🏥 Clinical Protocols (Treatment guidelines, care pathways)
2. 🔒 Compliance & Regulatory (HIPAA, infection control, safety)
3. 👨‍⚕️ Staff Resources (Scheduling, benefits, professional development)
4. 🖥️ IT & Systems (EMR guides, clinical software)
5. 🚑 Emergency Procedures (Codes, disaster response)
6. 📋 Administrative (Billing, insurance, operations)

**Key Features**:
- **Version Control**: All clinical protocols show effective date and revision history
- **Approval Workflow**: 3-tier review (Clinical lead → Medical director → Compliance)
- **Mobile Optimization**: Nurses access on tablets during rounds
- **Offline Access**: Critical protocols available offline for emergency situations
- **Audit Trail**: Complete tracking of who accessed what (regulatory requirement)

**9-Month Results**:
- Joint Commission accreditation: Zero findings related to documentation access
- Protocol compliance improved (staff following current guidelines)
- Incident response time faster (emergency procedures accessible)
- New employee onboarding streamlined (centralized training materials)
- Reduced malpractice risk (documented adherence to standards of care)

**What Worked**:
- Rigorous review process ensured clinical accuracy
- Mobile-first design met point-of-care needs
- Integration with EMR (links from patient records to protocols)
- Regular compliance audits maintained freshness

### Example 5: Manufacturing Company (300 Employees, Custom Wiki, Safety-Critical)

**Context**: Factory floor workers + engineers + office staff, need documentation accessible in plant environment, safety protocols critical.

**Strategy**:
- **Platform**: Custom wiki with rugged touchscreen kiosks in factory
- **Primary Use Case**: Safety procedures + Equipment manuals + Quality processes
- **Governance**: Safety team + Engineering + Operations jointly manage

**Information Architecture**:
1. ⚠️ Safety (OSHA compliance, PPE requirements, incident reporting)
2. 🔧 Equipment (Manuals, maintenance schedules, troubleshooting)
3. 📊 Quality & Processes (SOPs, inspection procedures, certifications)
4. 📚 Training (Onboarding, certifications, skills development)
5. 👥 People & HR
6. 🛠️ Continuous Improvement (Lean, 5S, kaizen)

**Key Features**:
- **Visual-Heavy**: Heavy use of photos, diagrams, videos (multilingual workforce, varying literacy)
- **Kiosk Access**: Mounted touchscreens on factory floor (glove-friendly interface)
- **QR Codes**: Machine labels with QR links to specific manuals
- **Offline Mode**: Local caching (factory network occasionally down)
- **Multilingual**: English + Spanish content for all safety protocols

**12-Month Results**:
- Safety incidents decreased 40% (improved protocol access and adherence)
- Equipment downtime reduced (faster troubleshooting via manuals)
- OSHA audit: Zero violations (compliant documentation)
- New hire training time: 3 weeks → 2 weeks
- Quality defects down 25% (better SOP adherence)

**What Worked**:
- Physical kiosks met factory environment constraints
- QR codes bridged physical equipment to digital documentation
- Video format accommodated varying literacy levels
- Safety leadership emphasis drove adoption

---

## Success Metrics

- **Coverage**: 90%+ of critical processes and policies documented within 12 months
- **Findability**: 80%+ search success rate (searches resulting in clicked article)
- **Freshness**: 90%+ of content updated within relevance period (90 days for processes, 365 days for policies)
- **Adoption**: {{target_adoption}} of employees access knowledge base monthly
- **Satisfaction**: 4.0+/5.0 user rating on "Knowledge base helps me do my job"
- **Efficiency**: 50% reduction in "where can I find..." questions in internal channels
- **Onboarding**: 30-40% faster time-to-productivity for new hires
- **Risk Reduction**: Zero compliance violations due to outdated/inaccessible policies

---

## Best Practices

- **Start with Pain**: Address highest-impact gaps first (typically onboarding or most-asked questions)
- **Templates Accelerate**: Provide templates to reduce "blank page" intimidation
- **Ownership Matters**: Every article must have a named owner responsible for accuracy
- **Ruthless Curation**: Outdated content is worse than no content—archive aggressively
- **Search-First Design**: Optimize for how users actually find info (search, not navigation)
- **Show, Don't Tell**: Screenshots, diagrams, videos > walls of text
- **Living System**: Knowledge base requires ongoing maintenance—budget 20-30% FTE minimum
- **Celebrate Contributors**: Recognize and reward employees who create great documentation
- **Feedback Loops**: Easy mechanisms for users to flag issues and suggest improvements
- **Integrate Everywhere**: Embed knowledge base links in tools, Slack, onboarding

---

## Common Pitfalls

- **"Build It And They'll Come"**: Without change management and training, adoption fails—actively market and integrate
- **Perfectionism Paralysis**: Waiting for "perfect" content delays launch—ship 80% complete and iterate
- **No Clear Ownership**: Shared responsibility becomes no responsibility—assign explicit owners
- **Ignoring Maintenance**: Knowledge bases decay rapidly without quarterly audits and refresh cycles
- **Wrong Platform**: Tool doesn't match team's workflow (forcing Confluence on non-technical team, using Notion for highly regulated content)
- **Over-Complicating Taxonomy**: Too many categories and nested levels confuse users—keep structure shallow
- **Content Dumping**: Migrating all old docs without curation creates graveyard of irrelevance
- **Ignoring Analytics**: Not tracking what users search for and where they struggle—data guides improvement
- **One-Size-Fits-All**: Treating all users as same (new hires need different content structure than veterans)
- **No Search Optimization**: Beautiful navigation but poor search defeats users' primary access method

---

**License**: © 2025 Adedayo Agarau. Licensed under CC BY-SA 4.0.
**Compatibility**: Optimized for Claude (Anthropic), ChatGPT (OpenAI), Gemini (Google), Copilot (Microsoft).
**Maintainer**: Adedayo Agarau | https://github.com/Chinoscode | https://linkedin.com/in/adedayo-agarau

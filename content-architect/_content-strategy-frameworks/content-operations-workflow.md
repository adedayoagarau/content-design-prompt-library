## Content Operations Workflow v1.0

**Purpose**: Design end-to-end content production workflows that optimize velocity, quality, and collaboration across ideation, creation, review, approval, publishing, and maintenance cycles. Establish operational systems that scale content output while maintaining consistency, reducing bottlenecks, and enabling distributed teams to execute efficiently.

**Context**: Use this framework when content production is chaotic, unpredictable, or failing to meet business demands. Most organizations lack formal content operations, resulting in missed deadlines, inconsistent quality, duplicated work, unclear accountability, and burned-out teams. This system establishes intake processes, workflow stages, role definitions, handoff protocols, tooling, and measurement that transform content from ad-hoc craft to scalable operations. Ideal for scaling content teams, organizations producing 100+ content pieces monthly, distributed content operations, agencies managing multiple clients, or companies where content velocity directly impacts revenue.

**Strategic Frameworks Applied**:
- **Kanban Content Flow** - Visualize work, limit work-in-progress, optimize throughput
- **Service Level Agreements (SLAs)** - Define and measure response time commitments
- **Lean Content Operations** - Eliminate waste, optimize value delivery
- **Capacity Planning Framework** - Match workload to team capacity
- **Continuous Improvement (Kaizen)** - Regular retrospectives and process optimization
- **Hub-and-Spoke Model** - Central operations team enabling distributed creators

---

## Variables

### Operational Scale Variables
- `{{content_volume}}`: 10-50 | 50-200 | 200-1000 | 1000+ pieces per month
- `{{team_size}}`: 3-10 | 10-30 | 30-100 | 100+ content contributors
- `{{team_structure}}`: In-house only | Hybrid (in-house + freelance) | Agency partners | Fully distributed
- `{{content_types_produced}}`: 3-5 | 5-15 | 15-30 | 30+ distinct content types
- `{{production_complexity}}`: Simple (blog posts) | Moderate (multimedia) | Complex (interactive, video) | Highly complex (3D, technical)
- `{{geographic_distribution}}`: Single office | Multi-office (same timezone) | Global (24-hour coverage)

### Workflow Maturity Variables
- `{{current_workflow_state}}`: Ad-hoc | Partially documented | Defined process | Optimized | Predictive
- `{{tooling_sophistication}}`: Spreadsheets + email | Project management tool | DAM + CMS | Full content ops platform
- `{{automation_level}}`: Manual | Semi-automated | Highly automated | AI-assisted
- `{{process_documentation}}`: None | Tribal knowledge | Wiki/docs | Training programs | Certified processes

### Business Context Variables
- `{{content_velocity_requirement}}`: Monthly | Weekly | Daily | Real-time (breaking news, social)
- `{{quality_vs_speed_priority}}`: Quality first | Balanced | Speed prioritized | Context-dependent
- `{{stakeholder_complexity}}`: Single stakeholder | Few (3-5) | Many (5-15) | Complex matrix (15+)
- `{{approval_requirements}}`: Self-publish | Single approval | Multi-stage | Legal/compliance required
- `{{seasonal_variation}}`: Consistent | Moderate peaks | High variation | Unpredictable spikes

### Collaboration Variables
- `{{cross_functional_dependencies}}`: Low (content team self-sufficient) | Moderate | High (design, dev, legal, etc.)
- `{{freelancer_percentage}}`: 0% | <25% | 25-50% | >50% of content production
- `{{localization_requirements}}`: None | Basic (2-3 languages) | Moderate (5-10) | Complex (10+ languages)
- `{{review_intensity}}`: Light touch | Standard | Rigorous | Highly regulated

---

## Prompt

You are a content operations architect designing a comprehensive workflow system for a team producing **{{content_volume}}** with **{{team_size}}** across **{{content_types_produced}}** at **{{team_structure}}** structure. Your task is to create end-to-end workflows that optimize for **{{quality_vs_speed_priority}}**, manage **{{stakeholder_complexity}}**, meet **{{content_velocity_requirement}}** velocity requirements, and scale operations from **{{current_workflow_state}}** maturity to optimized, predictable content production.

### Content Operations Workflow Architecture

**Phase 1: Intake & Prioritization System**

Establish structured request process to prevent chaos:

```yaml
content_intake_framework:
  intake_channels:
    formal_request_system:
      tool: "Content request form (Airtable, Asana, Jira, etc.)"
      required_fields:
        - "Requester name and team"
        - "Content type (blog post, video, infographic, etc.)"
        - "Business objective (What problem does this solve?)"
        - "Target audience (Who is this for?)"
        - "Success metrics (How do we measure success?)"
        - "Requested due date"
        - "Priority level (Critical, High, Medium, Low)"
        - "Budget (if applicable for external resources)"
        - "Supporting materials (briefs, research, assets)"

      submission_rules:
        - "All requests 2+ weeks advance notice (expedited process for urgent)"
        - "Incomplete requests returned to requester"
        - "Auto-routing to appropriate content lead based on type"

    strategic_planning:
      cadence: "Quarterly content planning sessions"
      participants: ["Content leadership", "Marketing", "Product", "Sales", "Executive stakeholders"]
      output: "90-day content roadmap with priority campaigns"

    standing_commitments:
      examples:
        - "Weekly blog posts (2-3 per week)"
        - "Monthly newsletter"
        - "Quarterly reports or ebooks"
      capacity_allocation: "Reserve 40-50% capacity for planned commitments"

  prioritization_framework:
    priority_matrix:
      p0_critical:
        criteria: "Executive request, crisis response, legal requirement, revenue-blocking"
        sla: "Same day to 48 hours"
        capacity_impact: "Drops everything else"
        approval: "VP-level approval required to assign P0"

      p1_high:
        criteria: "Major campaign, product launch, key event, high-value opportunity"
        sla: "3-5 days (depending on complexity)"
        capacity_impact: "Takes precedence over P2/P3"
        approval: "Content director approval"

      p2_medium:
        criteria: "Standard business needs, ongoing programs, optimization"
        sla: "1-2 weeks"
        capacity_impact: "Scheduled in normal workflow"
        approval: "Content manager approval"

      p3_low:
        criteria: "Nice-to-have, experimental, backlog items"
        sla: "Best effort (no guarantee)"
        capacity_impact: "Fill capacity gaps"
        approval: "Auto-approved if capacity available"

    prioritization_criteria_scoring:
      business_impact: "1-5 scale (How much does this move business goals?)"
      audience_value: "1-5 scale (How valuable to target audience?)"
      urgency: "1-5 scale (Time sensitivity)"
      effort_required: "1-5 scale (Resources needed, inverse: 5=low effort)"
      strategic_alignment: "1-5 scale (Aligns with content strategy?)"

      priority_score: "(business_impact + audience_value + urgency + strategic_alignment) / effort_required"
      decision_rule: "Top scores get capacity allocation"
```

**Phase 2: Content Planning & Briefing**

Convert requests into actionable content briefs:

```yaml
content_brief_framework:
  brief_template:
    project_overview:
      - "Content title/working title"
      - "Content type and format"
      - "Requester and business owner"
      - "Due date (publish date)"

    strategic_context:
      - "Business objective: Why are we creating this?"
      - "Target audience: Who is this for? (personas, segments)"
      - "User need: What problem does this solve for the audience?"
      - "Success metrics: How do we measure success?"
      - "Distribution channels: Where will this be published?"

    content_requirements:
      - "Key messages: What must this communicate?"
      - "Tone and voice: How should this sound?"
      - "Word count / length: How long should this be?"
      - "Format specifications: (blog post, video script, infographic, etc.)"
      - "SEO requirements: Target keywords, search intent"
      - "Visual needs: Photography, graphics, video, etc."
      - "CTA (call-to-action): What do we want users to do?"

    logistics:
      - "Assigned to: Writer, designer, video producer, etc."
      - "SME (subject matter expert): Who can provide input/review?"
      - "Stakeholder reviewers: Who needs to approve?"
      - "Budget: External costs (freelancers, stock assets, etc.)"
      - "Dependencies: What needs to happen before we can start?"

    reference_materials:
      - "Research links and competitor examples"
      - "Brand guidelines and templates"
      - "Previous similar content"
      - "Data, quotes, or source materials"

  brief_approval_process:
    step_1: "Requester submits content request"
    step_2: "Content strategist creates detailed brief (1-2 days)"
    step_3: "Requester reviews and approves brief"
    step_4: "Brief moves to 'Ready for Production' status"
    rule: "No content creation starts without approved brief"
```

**Phase 3: Production Workflow Stages**

Define end-to-end workflow with clear stages and handoffs:

```yaml
content_production_workflow:
  stage_1_backlog:
    description: "Approved briefs waiting for capacity"
    entry_criteria: "Brief approved, not yet scheduled"
    owner: "Content manager"
    actions: "Prioritization, capacity planning"

  stage_2_in_progress_creation:
    description: "Active content creation"
    entry_criteria: "Assigned to creator, work started"
    owner: "Content creator (writer, designer, video producer)"
    activities:
      - "Draft creation (writing, design, video production)"
      - "Asset sourcing or creation"
      - "Internal fact-checking"
      - "Self-edit and quality check"
    exit_criteria: "First draft complete per brief"
    sla: "50% of total production time allocated here"

    sub_stages:
      research: "Gather information, interview SMEs (10-20% of time)"
      creation: "Write, design, or produce (60-70% of time)"
      self_review: "Creator self-edits (10-20% of time)"

  stage_3_editorial_review:
    description: "Editorial quality and brand consistency check"
    entry_criteria: "Creator marks draft as 'Ready for Review'"
    owner: "Editor or content lead"
    review_checklist:
      - "Content meets brief requirements"
      - "Brand voice and tone consistency"
      - "Grammar, spelling, punctuation (AP Style or house style)"
      - "Readability and clarity"
      - "Factual accuracy (spot-check)"
      - "SEO optimization (title, meta, keywords)"
      - "Accessibility (alt text, heading structure)"

    outcomes:
      approved: "Move to next stage"
      revision_needed: "Return to creator with specific feedback"
      rejected: "Major rework or kill project (rare)"

    sla: "24-48 hours for editorial review"

  stage_4_stakeholder_review:
    description: "Subject matter expert and stakeholder approval"
    entry_criteria: "Passed editorial review"
    owner: "SME or business stakeholder"
    review_focus:
      - "Technical accuracy (for SME review)"
      - "Messaging alignment (for marketing review)"
      - "Brand approval (for brand team review)"

    review_types:
      concurrent_review: "All stakeholders review at same time (faster but coordination needed)"
      sequential_review: "SME → Marketing → Brand (slower but clearer)"

    sla: "3-5 business days (stakeholders are bottleneck)"

    escalation_rule: "If no response in SLA, auto-escalate to their manager"

  stage_5_legal_compliance:
    description: "Legal and regulatory review (high-risk content only)"
    entry_criteria: "Content with legal risk (medical claims, financial advice, regulatory, etc.)"
    owner: "Legal counsel or compliance team"
    review_focus:
      - "Regulatory compliance (FDA, SEC, FTC, etc.)"
      - "Claim substantiation"
      - "Required disclaimers"
      - "Risk assessment"

    sla: "5-7 business days (legal review is slow)"

    required_for:
      - "Medical or health claims"
      - "Financial advice or investment content"
      - "Legal guidance or disclaimers"
      - "Contractual terms or agreements"
      - "Regulated industry content (pharma, finance, etc.)"

  stage_6_production_finalization:
    description: "Final formatting, asset prep, metadata"
    entry_criteria: "All approvals received"
    owner: "Content producer or publisher"
    activities:
      - "CMS entry and formatting"
      - "Image optimization (compression, sizing)"
      - "Metadata completion (SEO, analytics tags)"
      - "Link validation"
      - "Final QA (preview in staging)"

    qa_checklist:
      - "All links functional"
      - "Images display correctly, alt text present"
      - "Mobile responsive (if web content)"
      - "Metadata complete (title, description, tags)"
      - "Analytics tracking verified"
      - "Accessibility check passed"

    sla: "24 hours for finalization"

  stage_7_scheduled_published:
    description: "Content is live or scheduled to go live"
    entry_criteria: "Final QA passed"
    owner: "Publisher or content manager"
    actions:
      - "Publish immediately or schedule for optimal time"
      - "Social promotion (if applicable)"
      - "Email distribution (if part of newsletter)"
      - "Notify stakeholders of publication"

    post_publish:
      - "Monitor performance first 24-48 hours"
      - "Fix any issues discovered (broken links, typos)"
      - "Update content as needed based on feedback"
```

**Phase 4: Workflow Orchestration & Tooling**

```yaml
workflow_management_tools:
  project_management_platform:
    recommended_tools: ["Asana", "Monday.com", "Jira", "Airtable"]

    board_structure_kanban:
      columns:
        - "Backlog (approved briefs)"
        - "In Progress (creation)"
        - "In Review (editorial)"
        - "Stakeholder Approval"
        - "Legal/Compliance (if needed)"
        - "Final Production"
        - "Scheduled/Published"

      cards_represent: "Individual content pieces"

      card_metadata:
        - "Content type"
        - "Priority (P0, P1, P2, P3)"
        - "Assigned to (creator, editor, etc.)"
        - "Due date"
        - "Status (in each stage)"
        - "Time tracking (hours spent)"

    automation_rules:
      - "When status → 'Ready for Review', assign to editor + notify"
      - "When in 'Stakeholder Approval' > 3 days, send reminder"
      - "When status → 'Published', move to archive board + notify requester"
      - "When due date approaches (3 days), alert project manager"

  content_management_system:
    cms_workflow_integration:
      draft_status: "Creators work in CMS directly"
      review_status: "Editors review in CMS with commenting"
      approval_status: "Stakeholders review preview link"
      scheduled_status: "Publisher schedules go-live date"

  communication_tools:
    slack_integrations:
      - "Project management tool → Slack (status updates)"
      - "CMS → Slack (content published notifications)"
      - "Dedicated channels: #content-requests, #content-reviews, #content-published"

    email_protocols:
      - "Briefs sent via email with PM tool link"
      - "Stakeholder review requests via email"
      - "Weekly status reports to leadership"

  asset_management:
    digital_asset_management:
      tools: ["Bynder", "Brandfolder", "Adobe AEM Assets", "Cloudinary"]
      usage: "Centralized repository for images, videos, brand assets"
      integration: "Link assets from DAM into CMS"
```

**Phase 5: Capacity Planning & Resource Management**

```yaml
capacity_planning_framework:
  team_capacity_calculation:
    formula: "Available hours = (Team size × 40 hours/week × Productive time %)"
    productive_time: "70-80% (accounting for meetings, admin, email, etc.)"

    example:
      team_size: "10 people"
      hours_per_week: "400 hours/week (10 × 40)"
      productive_hours: "280-320 hours/week (70-80%)"

  content_time_estimates:
    blog_post_800_words: "8-12 hours (research, writing, editing, production)"
    long_form_article_2000_words: "20-30 hours"
    social_media_posts_batch: "4-6 hours (10-15 posts)"
    infographic: "16-24 hours (design, data visualization)"
    video_2_3_minutes: "40-60 hours (scripting, filming, editing)"
    ebook_3000_words: "40-60 hours (research, writing, design)"
    landing_page: "12-20 hours (copy, design, CMS setup)"

  capacity_allocation_strategy:
    planned_strategic_content: "50% capacity"
    reactive_requests: "30% capacity"
    maintenance_optimization: "10% capacity"
    buffer_unexpected: "10% capacity"

  workload_balancing:
    wip_limits:
      per_creator: "3-5 active projects max (prevents context switching)"
      per_editor: "8-10 pieces in review queue max"
      per_stage: "Visualize bottlenecks when stage has 2× normal items"

    velocity_tracking:
      metric: "Throughput (pieces published per week)"
      benchmark: "Baseline velocity first 4 weeks, then track trends"
      goal: "Increase velocity 10-20% per quarter without quality degradation"
```

**Phase 6: SLAs & Performance Measurement**

```yaml
service_level_agreements:
  intake_to_publication_slas:
    blog_post_standard:
      total_time: "10-15 business days"
      breakdown:
        - "Brief creation: 1-2 days"
        - "Creation: 3-5 days"
        - "Editorial review: 1-2 days"
        - "Stakeholder approval: 2-3 days"
        - "Production: 1 day"
        - "Buffer: 2 days"

    high_priority_campaign:
      total_time: "5-7 business days (expedited)"

    complex_multimedia:
      total_time: "20-30 business days"

  stage_slas:
    editorial_review: "24-48 hours"
    stakeholder_approval: "3-5 business days"
    legal_review: "5-7 business days"
    production_finalization: "24 hours"

  sla_performance_metrics:
    on_time_delivery_rate: "Goal: 85%+ of content meets due dates"
    sla_compliance_by_stage: "Track which stage causes delays"
    average_cycle_time: "Measure actual time vs. SLA"

  escalation_procedures:
    when_sla_at_risk:
      - "Yellow flag: 75% of SLA elapsed, project manager notified"
      - "Red flag: 90% of SLA elapsed, content director notified"
      - "Escalate: SLA missed, stakeholder notified + root cause analysis"
```

### Continuous Improvement & Optimization

```yaml
process_optimization:
  retrospectives:
    cadence: "Bi-weekly or monthly"
    participants: "Content team (creators, editors, managers)"
    structure:
      - "What went well?"
      - "What didn't go well?"
      - "What should we change?"
      - "Action items (assign owners)"

    focus_areas:
      - "Bottlenecks (which stage slows us down?)"
      - "Quality issues (recurring problems?)"
      - "Tool friction (where does tech get in the way?)"
      - "Communication gaps (where do handoffs fail?)"

  workflow_metrics_dashboard:
    metrics_to_track:
      - "Throughput: Pieces published per week/month"
      - "Cycle time: Average days from brief to publish"
      - "Bottleneck analysis: Time spent in each stage"
      - "Revision rate: % of content requiring major rework"
      - "SLA compliance: % on-time delivery"
      - "Team utilization: % capacity used"
      - "Quality scores: Editorial and stakeholder ratings"

  process_experiments:
    examples:
      - "Test concurrent vs. sequential stakeholder reviews"
      - "Pilot AI-assisted first drafts for blog posts"
      - "Try 'maker days' (no meetings) for creators"
      - "Experiment with brief templates for faster planning"
```

---

## Output Schema

```yaml
content_operations_workflow:
  intake_system:
    channels: ["Formal request form", "Strategic planning", "Standing commitments"]
    prioritization_framework: "[Priority matrix, scoring criteria]"

  content_brief_template: "[All required fields for effective brief]"

  production_workflow:
    stages:
      - stage_name: "Backlog"
        owner: "[Role]"
        entry_criteria: "[...]"
        activities: "[...]"
        exit_criteria: "[...]"
        sla: "[Time]"
      # Repeat for all stages

  tooling_stack:
    project_management: "[Tool name and configuration]"
    cms: "[Platform and workflow integration]"
    communication: "[Slack, email protocols]"
    asset_management: "[DAM system]"

  capacity_planning:
    team_capacity: "[Available hours]"
    time_estimates: "[By content type]"
    allocation_strategy: "[Planned vs. reactive]"
    wip_limits: "[Per role]"

  slas:
    by_content_type: "[Total time expectations]"
    by_stage: "[Stage-specific SLAs]"
    escalation_procedures: "[When and how]"

  continuous_improvement:
    retrospective_cadence: "[Frequency]"
    metrics_dashboard: "[KPIs tracked]"
    optimization_experiments: "[Current tests]"
```

---

## Examples

### Example 1: B2B SaaS Content Team (50-60 pieces/month)

**Team**: 8 people (4 writers, 2 editors, 1 designer, 1 content ops manager)

**Workflow**: Kanban board (Asana) with 7 stages
- Average cycle time: 12 days (brief to publish)
- Bottleneck identified: Stakeholder approval (4-day average)
- Solution: Concurrent review + auto-reminder after 2 days

**Results**: Reduced cycle time to 9 days, increased output 25% (48 → 60 pieces/month).

### Example 2: Media Publisher (200+ articles/month)

**Team**: 25 people (15 writers, 5 editors, 3 social producers, 2 ops)

**Workflow**: Three parallel workflows (News, Features, Opinion) with different SLAs
- News: 24-hour turnaround (breaking)
- Features: 7-day cycle (investigative)
- Opinion: 3-day cycle (rapid response)

**Results**: Published 220 pieces/month with 92% on-time delivery.

### Example 3: E-Commerce (Product Content)

**Team**: 12 people (6 writers, 3 designers, 2 editors, 1 PM)

**Workflow**: Template-driven product pages (low variability)
- Standard product page: 4-hour creation time
- 25 product pages published per week
- Automated QA (check required fields before publish)

**Results**: 100+ product pages/month, 98% pass QA first time.

### Example 4: Agency (Multi-Client)

**Team**: 20 people (freelance + in-house)

**Workflow**: Client-specific boards (separate Kanban per client)
- Capacity allocated per client (retainer-based)
- Shared resource pool (designers, editors support all clients)
- Weekly client status reports (automated)

**Results**: Managed 8 clients simultaneously, 85% client satisfaction.

### Example 5: Startup (Scrappy, Fast Growth)

**Team**: 3 people (1 content lead, 2 writers)

**Workflow**: Simplified 4-stage process (Backlog → In Progress → Review → Published)
- No formal intake (Slack requests + quarterly planning)
- Peer review (writers review each other)
- Self-publishing (trust-based)

**Results**: 20 pieces/month, rapid experimentation, 80% hit quality bar.

---

## Success Metrics

- **Throughput**: 20-30% increase in content volume without adding headcount
- **Cycle Time**: Reduce average time-to-publish by 25%
- **On-Time Delivery**: 85%+ of content meets due dates
- **Quality Consistency**: <10% of content requires major rework after first review
- **Team Satisfaction**: 75%+ of team rates workflow as "clear and efficient"
- **Bottleneck Elimination**: No stage holds content >2× expected time

---

## Best Practices

- **Visualize Workflow**: Kanban boards make bottlenecks obvious
- **Limit WIP**: Too many simultaneous projects = context switching = slower
- **Brief Everything**: No content without approved brief (prevents rework)
- **Measure Cycle Time**: Track where time is spent to optimize
- **Automate Handoffs**: Reduce manual "ping pong" between stages
- **Standardize Templates**: Briefs, checklists, review forms
- **Regular Retrospectives**: Team identifies improvements (not manager alone)

---

## Common Pitfalls

- **No Clear Handoffs**: Content gets lost between stages
- **Over-Engineering**: 15-stage workflow when 5 would work
- **Approval Bottlenecks**: One person approves everything = constant delays
- **No WIP Limits**: Everything is "in progress" = nothing finishes
- **Ignoring Capacity**: Accepting more work than team can handle
- **Skipping Briefs**: Starting creation without clear direction = rework
- **Set-and-Forget**: Never reviewing or optimizing workflow

---

**License**: © 2025 Adedayo Agarau. Licensed under CC BY-SA 4.0.
**Maintainer**: Adedayo Agarau

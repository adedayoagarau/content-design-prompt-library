## In-App Messaging System Architecture v1.0

**Purpose**: Design a comprehensive, scalable in-app messaging system that delivers contextually relevant, personalized communications at critical user journey moments while maintaining a cohesive brand experience and driving measurable product adoption, engagement, and retention outcomes.

**Context**: Use this framework when building or optimizing an in-app messaging infrastructure for product-led growth motions. This goes beyond individual message creation to architect a complete communication ecosystem that balances user education, feature discovery, behavioral nudges, and promotional content without creating notification fatigue. Ideal for B2B SaaS platforms, consumer apps, fintech products, or any digital product requiring sophisticated user communication at scale.

**Strategic Frameworks Applied**:
- **Message Hierarchy & Prioritization Matrix** - Urgency vs. importance scoring for competing messages
- **User Journey Orchestration** - Triggered messaging aligned to behavioral milestones and segments
- **Message Fatigue Prevention Model** - Frequency capping, quiet hours, and suppression logic
- **Contextual Relevance Engine** - Right message, right place, right time decision framework
- **Multi-Channel Orchestration** - In-app coordination with email, push, and SMS
- **Measurement & Attribution Framework** - Message performance tied to product KPIs

---

## Variables

Define strategic variables for comprehensive in-app messaging architecture:

### Product Context Variables
- `{{product_type}}`: B2B SaaS | Consumer App | Fintech | Healthcare | Marketplace | Other
- `{{product_complexity}}`: Simple (single workflow) | Moderate (3-5 core features) | Complex (10+ interconnected features)
- `{{user_segments}}`: Primary user personas and behavioral segments (e.g., Free, Trial, Paid, Power User, At-Risk)
- `{{critical_user_actions}}`: 5-10 key behaviors that drive product value and retention
- `{{activation_definition}}`: What constitutes an "activated" user (specific actions and timeframe)

### Message Type Variables
- `{{onboarding_messages}}`: Welcome sequences, setup guidance, first-time user education
- `{{feature_discovery}}`: New feature announcements, hidden capability highlights, advanced functionality
- `{{behavioral_nudges}}`: Incomplete action reminders, abandoned flow recovery, usage encouragement
- `{{educational_content}}`: Best practices, tips, how-to guides, success stories
- `{{promotional_messages}}`: Upgrade prompts, expansion opportunities, limited-time offers
- `{{transactional_alerts}}`: System status, security notifications, account changes
- `{{retention_interventions}}`: Reactivation messages, at-risk user outreach, churn prevention

### Targeting & Personalization Variables
- `{{segmentation_criteria}}`: User attributes used for targeting (role, company size, usage level, feature adoption, tenure)
- `{{behavioral_triggers}}`: Actions/events that initiate messages (page visits, feature usage, time-based, inactivity)
- `{{personalization_tokens}}`: Dynamic content variables (name, company, usage stats, product data)
- `{{exclusion_rules}}`: Who should NOT see messages (recently messaged, certain plans, specific segments)

### Message Placement Variables
- `{{modal_use_cases}}`: When to use full-screen takeover modals (blocking, high-priority)
- `{{banner_use_cases}}`: Persistent top/bottom banners for system-wide alerts
- `{{tooltip_use_cases}}`: Contextual in-line guidance and feature explanations
- `{{slideout_use_cases}}`: Side panel messages for rich content without disrupting workflow
- `{{hotspot_use_cases}}`: Visual indicators for new features or important UI elements

### Governance Variables
- `{{message_frequency_caps}}`: Maximum messages per user per day/week/session
- `{{quiet_hours}}`: Times when non-critical messages are suppressed
- `{{priority_hierarchy}}`: How competing messages are ranked when multiple are eligible
- `{{approval_workflow}}`: Review and approval process before message activation
- `{{localization_requirements}}`: Languages supported and translation processes

### Technical Infrastructure Variables
- `{{messaging_platform}}`: Tool/system used (Appcues, Pendo, Intercom, UserGuiding, Custom-built)
- `{{data_sources}}`: Where user/behavioral data comes from (CRM, product analytics, data warehouse)
- `{{event_tracking}}`: How message interactions are captured and stored
- `{{integration_points}}`: Connections to email, push, analytics, CRM systems

---

## Prompt

You are a product content architect designing a comprehensive in-app messaging system for **{{product_type}}** with **{{product_complexity}}** level complexity. Your task is to create a scalable, measurable communication architecture that guides users through their journey, drives adoption of **{{critical_user_actions}}**, and achieves **{{activation_definition}}** while preventing message fatigue.

### Message Taxonomy & Hierarchy

**Message Type Framework:**

For each message category, define:

**{{onboarding_messages}}:**
- **Purpose**: Reduce time-to-value, establish foundational understanding, drive initial activation
- **Trigger Conditions**: New user signup, first login, account setup incomplete
- **Priority Level**: High (3-4 on 5-point scale)
- **Placement Strategy**: Modals for critical setup steps, tooltips for UI orientation, banners for multi-step flows
- **Frequency Rules**: Front-loaded in first 7 days, then graduated to maintenance mode
- **Success Metrics**: Activation rate, time-to-first-value, setup completion rate
- **Example Message Series**: (3-5 sequential messages in onboarding flow)

**{{feature_discovery}}:**
- **Purpose**: Expose valuable but undiscovered functionality, drive feature adoption breadth
- **Trigger Conditions**: User reaches expertise level in one area but hasn't explored related features
- **Priority Level**: Medium (2-3 on 5-point scale)
- **Placement Strategy**: Hotspots on relevant UI, slideouts with rich feature demos
- **Frequency Rules**: Max 1 feature discovery message per week per user
- **Success Metrics**: Feature activation rate, time-to-secondary feature adoption
- **Example Messages**: (3-5 different feature introduction patterns)

**{{behavioral_nudges}}:**
- **Purpose**: Recover incomplete actions, encourage consistency, reinforce valuable behaviors
- **Trigger Conditions**: Abandoned workflows, declining usage patterns, approaching value milestones
- **Priority Level**: Variable (1-4 based on action criticality)
- **Placement Strategy**: Contextual banners when user returns to relevant section, tooltips at point of action
- **Frequency Rules**: Max 1 nudge per day per user, 3-day cooldown between nudges of same type
- **Success Metrics**: Workflow completion rate, return visit conversion, milestone achievement
- **Example Nudges**: (3-5 behavior change prompts)

[Repeat structure for remaining message types: {{educational_content}}, {{promotional_messages}}, {{transactional_alerts}}, {{retention_interventions}}]

### Segmentation & Targeting Strategy

**User Segment Architecture:**

For each segment in {{user_segments}}, define:
- **Segment Definition**: Criteria for inclusion (user properties + behavioral signals)
- **Communication Goals**: What outcomes you're driving for this segment
- **Message Priorities**: Which message types are most valuable for this segment
- **Frequency Tolerances**: How much messaging this segment can handle before fatigue
- **Preferred Formats**: Which placements work best (e.g., power users tolerate modals less)
- **Suppression Rules**: Messages this segment should never receive

**Behavioral Trigger Mapping:**

For each trigger in {{behavioral_triggers}}, specify:
- **Event Definition**: Exact action/condition that initiates message
- **Message Options**: Which messages could be triggered by this event
- **Prioritization Logic**: If multiple messages are eligible, how to choose
- **Timing Delays**: Immediate, 5-minute delay, 1-hour delay, next session
- **Frequency Controls**: How often this trigger can fire per user
- **Success Criteria**: How to measure if triggered message achieved goal

### Message Placement & UX Patterns

**Placement Decision Framework:**

**{{modal_use_cases}}:**
- **When to Use**: Critical setup steps, major announcements, urgent actions required, breaking changes
- **When to Avoid**: Frequent updates, educational content, soft suggestions
- **Design Specifications**: Max 300 words, clear primary CTA, optional dismiss path, keyboard accessibility
- **Frequency Limits**: Max 1 per session, max 3 per week per user
- **A/B Test Hypotheses**: Modal vs. slideout for feature launches, blocking vs. non-blocking for upgrades

**{{tooltip_use_cases}}:**
- **When to Use**: Contextual UI explanations, inline guidance, new button introductions
- **When to Avoid**: Long-form content, multi-step flows, critical alerts
- **Design Specifications**: 50-75 characters max, positioned near relevant UI, auto-dismiss or click-to-close
- **Frequency Limits**: Max 5 active tooltips in view at once, progressive disclosure
- **Progressive Revelation**: How tooltips reveal in sequence vs. all at once

**{{slideout_use_cases}}:**
- **When to Use**: Feature deep-dives, educational content, rich media announcements, feedback collection
- **When to Avoid**: Urgent alerts, first-time user messaging, mobile experiences
- **Design Specifications**: 400-600 words max, multimedia support, clear CTA hierarchy, collapsible sections
- **Frequency Limits**: Max 1 per day, 2-day cooldown between slideouts
- **Content Patterns**: Video tutorials, interactive demos, step-by-step guides

[Continue for {{banner_use_cases}}, {{hotspot_use_cases}}]

### Personalization & Dynamic Content

**Token Strategy:**

Map {{personalization_tokens}} to message types:
- **User Attribute Tokens**: `{first_name}`, `{company_name}`, `{plan_type}`, `{team_size}`
- **Behavioral Tokens**: `{days_since_signup}`, `{feature_usage_count}`, `{last_active_date}`
- **Product Data Tokens**: `{projects_created}`, `{team_members}`, `{storage_used}`
- **Milestone Tokens**: `{next_milestone}`, `{progress_percentage}`, `{days_until_renewal}`

**Conditional Content Blocks:**
- **Segment-Specific Sections**: Different content for Free vs. Paid users in same message
- **Feature Flag Integration**: Show/hide content based on beta access, plan entitlements
- **Usage-Based Variations**: Beginner vs. advanced user messaging within single template
- **Localization Handling**: How content varies by language, region, cultural context

### Message Frequency & Fatigue Management

**Frequency Cap Architecture:**

Define {{message_frequency_caps}} across dimensions:
- **Per Session**: Max 2 messages per session (excluding transactional alerts)
- **Per Day**: Max 3 promotional/educational messages, unlimited transactional
- **Per Week**: Max 7 total in-app messages (excluding tooltips and banners)
- **Per Message Type**: Onboarding (no limit first week), Feature Discovery (1/week), Promotional (2/week)

**Quiet Hours Implementation:**

Configure {{quiet_hours}} to respect user context:
- **Time-Based Suppression**: No promotional messages outside business hours (for B2B products)
- **Usage-Based Suppression**: No interruptions during active workflows (detecting typing, form completion)
- **Event-Based Suppression**: Suppress after negative interactions (support ticket, cancellation attempt)
- **Explicit User Preferences**: Honor notification preferences from settings

**Priority & Conflict Resolution:**

When multiple messages are eligible, use {{priority_hierarchy}}:
1. **Critical Transactional** (security alerts, payment failures, system outages)
2. **Time-Sensitive Behavioral** (abandoned checkout, expiring trial, incomplete setup)
3. **High-Value Onboarding** (activation-critical steps for new users)
4. **Feature Discovery** (relevant to recent behavior)
5. **Educational Content** (tips, best practices)
6. **Promotional** (upgrades, expansions)

**Suppression Logic:**
- Recently dismissed messages: 7-day suppression before showing again
- Recently converted messages: 30-day suppression for similar offers
- Segment transitions: Reset messaging when user changes segments (e.g., trial → paid)

### Content Creation Framework

**Message Template Structure:**

For each message type, define:

**Onboarding Modal Template:**
```
Headline: [Benefit-driven, 5-8 words, what they'll achieve]
Subheadline: [How this step helps, 10-15 words]
Body: [2-3 sentences max, why this matters now]
Visual: [Screenshot, illustration, or video preview]
Primary CTA: [Action-oriented, specific, 2-4 words]
Secondary CTA: [Skip/Later option if non-critical]
Progress Indicator: [Step X of Y if multi-step]
```

**Feature Discovery Slideout Template:**
```
Headline: [Feature name + value proposition]
Intro: [1 sentence on problem this solves]
How It Works: [3 bullet points or numbered steps]
Use Case Example: [Real scenario where this helps]
Visual Demo: [GIF, video, or annotated screenshot]
CTA: [Try it now | Learn more | Watch tutorial]
Dismissal: [Remind me later | Not interested | Don't show again]
```

**Behavioral Nudge Banner Template:**
```
Message: [You're almost there! | Don't forget to... | Pick up where you left off]
Context: [What they started, how far they got]
Benefit Reminder: [Why completing this matters]
CTA: [Continue | Resume | Complete now]
Dismiss: [X button, auto-dismiss after 10 seconds]
```

**Voice & Tone Guidelines:**
- **Onboarding**: Encouraging, clear, jargon-free, celebration of progress
- **Feature Discovery**: Curious, valuable, benefit-focused, "you might have missed this"
- **Behavioral Nudges**: Helpful (not nagging), context-aware, emphasize user goals
- **Promotional**: Value-focused, specific, time-bound, respectful of "no"
- **Transactional**: Clear, urgent when appropriate, solution-oriented

### Measurement & Optimization

**Message Performance Dashboard:**

Track for each message:
- **Exposure Metrics**: Impressions, unique users reached, exposure rate vs. eligible audience
- **Engagement Metrics**: Click-through rate, CTA conversion, dismissal rate, time-to-action
- **Business Impact Metrics**: Feature adoption attributable to message, activation lift, retention impact
- **User Sentiment**: Dismiss patterns, feedback collected, support ticket correlation

**A/B Testing Framework:**

Continuous experimentation on:
- **Placement Tests**: Modal vs. slideout vs. banner for same content
- **Timing Tests**: Immediate trigger vs. 5-min delay vs. next session
- **Copy Tests**: Benefit-focused vs. feature-focused headlines
- **Visual Tests**: Screenshot vs. illustration vs. video vs. text-only
- **CTA Tests**: Specific action vs. generic "Learn more"
- **Frequency Tests**: Optimal intervals between messages

**Optimization Cycle:**

**Weekly Review:**
- Top 5 performing messages (conversion, engagement)
- Bottom 5 performing messages (high dismiss rate, low engagement)
- Quick fixes: Copy tweaks, CTA adjustments, targeting refinements

**Monthly Analysis:**
- Message type performance: Which categories drive most value?
- Segment effectiveness: Which users respond best to messaging?
- Fatigue indicators: Are we over-messaging any segments?
- Competitive benchmarking: Industry standards for message volume, engagement

**Quarterly Strategy:**
- Message architecture evolution: New types needed?
- Platform migration considerations: Outgrowing current tool?
- Integration expansions: New data sources, new channels
- Localization/internationalization roadmap

### Governance & Workflow

**Message Approval Process:**

Define {{approval_workflow}}:
1. **Draft Creation**: Content designer + PM collaboration
2. **Legal/Compliance Review**: Required for promotional, data handling, financial messages
3. **Stakeholder Approval**: Product lead, growth lead sign-off
4. **QA Testing**: Verify triggers, test all user segments, check mobile/desktop
5. **Soft Launch**: 10% rollout to test segment before full deployment
6. **Full Launch**: Gradual rollout with monitoring

**Version Control:**
- Message content versioning (track changes over time)
- A/B test documentation (what was tested, results, decisions)
- Sunset process (when to retire underperforming messages)

**Cross-Functional Collaboration:**
- **Product Team**: Define triggers, prioritize messages aligned to roadmap
- **Design Team**: Create visuals, ensure brand consistency, maintain design system
- **Engineering**: Implement custom triggers, integrate data sources, performance optimization
- **Analytics**: Define success metrics, build dashboards, run experiments
- **Support**: Provide feedback on user confusion, FAQ candidates for messaging
- **Marketing**: Coordinate in-app with email/push campaigns, maintain omnichannel consistency

---

## Output Schema

```yaml
in_app_messaging_system:
  message_taxonomy:
    - category: "{{onboarding_messages}}"
      purpose: "Reduce time-to-value and drive initial activation"
      message_templates:
        - template_id: "welcome_modal"
          trigger: "First login after signup"
          placement: "Full-screen modal"
          priority: 4
          frequency_cap: "Once per user lifetime"
          content:
            headline: "Welcome to [Product]! Let's get you set up."
            body: "In the next 2 minutes, we'll help you [achieve quick win]. Ready?"
            primary_cta: "Let's go"
            secondary_cta: "I'll explore on my own"
          targeting:
            segments: ["new_users"]
            exclusions: ["imported_from_competitor", "team_member_invite"]
          success_metrics:
            primary: "Setup completion rate"
            secondary: "Time to first value"
            target: ">70% completion within 7 days"

        - template_id: "first_project_guidance"
          trigger: "Account created but no projects after 24 hours"
          # Additional template details...

    - category: "{{feature_discovery}}"
      purpose: "Drive breadth of feature adoption"
      message_templates:
        - template_id: "collaboration_feature_announcement"
          trigger: "User has 3+ projects but never shared one"
          placement: "Slideout panel"
          priority: 2
          frequency_cap: "Once per month"
          content:
            headline: "Did you know you can collaborate with your team?"
            intro: "You've created [X] projects. Imagine what you could build together."
            how_it_works:
              - "Click 'Share' on any project"
              - "Invite team members by email"
              - "Collaborate in real-time"
            use_case: "Teams that collaborate ship 3x faster."
            visual: "collaboration_demo.gif"
            primary_cta: "Share my first project"
            secondary_cta: "Learn more"
          targeting:
            segments: ["active_users", "paid_plans"]
            exclusions: ["already_using_collaboration", "recently_messaged"]
          success_metrics:
            primary: "Collaboration feature activation rate"
            target: "15% of message viewers activate within 7 days"

  segmentation_strategy:
    segments:
      - segment_name: "new_users"
        definition: "Signed up within last 14 days"
        communication_goals: "Drive activation and establish product value"
        message_priorities: ["Onboarding", "Educational", "Feature Discovery"]
        frequency_tolerance: "High (up to 2 messages per day first week)"
        preferred_formats: ["Modals for setup", "Tooltips for UI guidance"]
        suppression_rules: ["No promotional messages for first 7 days"]

      - segment_name: "power_users"
        definition: "Top 10% by usage, 3+ months tenure"
        communication_goals: "Expose advanced features, collect feedback, prevent churn to competitors"
        message_priorities: ["Feature Discovery", "Beta Program Invites", "Educational"]
        frequency_tolerance: "Low (max 1 message per week)"
        preferred_formats: ["Slideouts", "Banners (modals annoy this segment)"]
        suppression_rules: ["No basic onboarding", "No generic educational content"]

      - segment_name: "at_risk"
        definition: "Declining usage (50% drop over 30 days) or approaching renewal without recent activity"
        communication_goals: "Re-engage, demonstrate value, prevent churn"
        message_priorities: ["Retention Interventions", "Educational", "Behavioral Nudges"]
        frequency_tolerance: "Medium (strategic outreach, not spam)"
        preferred_formats: ["Modals for important check-ins", "Slideouts for value reminders"]
        suppression_rules: ["No promotional upsells (focus on current value)"]

  placement_guidelines:
    modal:
      use_cases: ["Critical setup steps", "Major product announcements", "Breaking changes", "Account security alerts"]
      avoid_cases: ["Frequent tips", "Soft feature suggestions", "Non-urgent updates"]
      design_specs:
        max_word_count: 300
        required_elements: ["Clear headline", "Primary CTA", "Dismissal path"]
        accessibility: ["Keyboard navigable", "Screen reader friendly", "Focus trap"]
      frequency_limits:
        per_session: 1
        per_week: 3
        cooldown: "48 hours between modals"

    tooltip:
      use_cases: ["New UI element explanations", "Inline contextual help", "Feature highlights"]
      avoid_cases: ["Long instructions", "Marketing messages", "Multi-step tutorials"]
      design_specs:
        max_characters: 75
        positioning: "Adjacent to relevant UI element"
        dismiss_behavior: "Auto-dismiss after 8 seconds or on click"
      frequency_limits:
        max_concurrent: 5
        progressive_disclosure: "Show 1-2 per page visit, not all at once"

    slideout:
      use_cases: ["Feature deep-dives", "Tutorial content", "Feedback surveys", "Changelog announcements"]
      avoid_cases: ["Urgent alerts", "First-time user onboarding", "Mobile-first experiences"]
      design_specs:
        max_word_count: 600
        multimedia_support: "Videos, GIFs, interactive demos"
        collapsible_sections: "For long-form content"
      frequency_limits:
        per_day: 1
        cooldown: "48 hours between slideouts"

  personalization_framework:
    tokens:
      user_attributes:
        - token: "{first_name}"
          fallback: "there"
          example: "Welcome back, {first_name}!"
        - token: "{company_name}"
          fallback: "your team"
          example: "Help {company_name} achieve more."

      behavioral_data:
        - token: "{days_since_signup}"
          example: "You've been with us for {days_since_signup} days!"
        - token: "{feature_usage_count}"
          example: "You've created {feature_usage_count} projects so far."

      milestone_data:
        - token: "{next_milestone}"
          example: "You're only {next_milestone} away from unlocking [reward]!"

    conditional_content:
      - condition: "If user.plan_type == 'free'"
        content_variation: "Emphasize paid features with upgrade CTA"
      - condition: "If user.plan_type == 'paid'"
        content_variation: "Focus on advanced usage and expansion features"
      - condition: "If user.usage_level == 'beginner'"
        content_variation: "Simpler language, more screenshots, basic workflows"
      - condition: "If user.usage_level == 'advanced'"
        content_variation: "Technical depth, power user shortcuts, API/integration content"

  frequency_management:
    global_caps:
      per_session: 2  # Excluding transactional alerts
      per_day: 3      # Promotional + educational combined
      per_week: 7     # All message types except tooltips

    message_type_caps:
      onboarding: "Unlimited first 7 days, then max 1/week"
      feature_discovery: "1 per week"
      behavioral_nudges: "1 per day, 3-day cooldown between same nudge type"
      educational: "2 per week"
      promotional: "2 per week"
      transactional: "Unlimited (user-initiated or system-critical)"

    quiet_hours:
      time_based: "No promotional messages 8pm-8am user local time (B2B)"
      usage_based: "Suppress during active workflows (typing, form filling, video watching)"
      event_based: "7-day suppression after support ticket or cancellation attempt"

    priority_order:
      - priority: 5
        category: "Critical transactional"
        examples: ["Security alerts", "Payment failures", "System outages"]
      - priority: 4
        category: "High-value onboarding"
        examples: ["Activation-critical setup steps"]
      - priority: 3
        category: "Time-sensitive behavioral"
        examples: ["Abandoned workflows", "Expiring trials"]
      - priority: 2
        category: "Feature discovery & education"
        examples: ["New feature announcements", "Best practice tips"]
      - priority: 1
        category: "Promotional"
        examples: ["Upgrade prompts", "Expansion offers"]

  measurement_framework:
    message_level_metrics:
      exposure:
        - metric: "Impressions"
          definition: "Number of times message was displayed"
        - metric: "Unique users reached"
          definition: "Distinct users who saw message"
        - metric: "Exposure rate"
          calculation: "Users reached / Eligible audience"
          target: ">80% for critical onboarding, >30% for feature discovery"

      engagement:
        - metric: "Click-through rate (CTR)"
          calculation: "CTA clicks / Impressions"
          target: ">20% for onboarding, >10% for feature discovery"
        - metric: "Dismissal rate"
          calculation: "Dismissals / Impressions"
          threshold: "<30% (if higher, message likely irrelevant or annoying)"
        - metric: "Time to action"
          definition: "Seconds between message display and CTA click"
          insight: "Faster = clearer value prop"

      business_impact:
        - metric: "Conversion rate"
          definition: "Users who completed desired action after seeing message"
          varies_by: "Message goal (feature activation, setup completion, upgrade)"
        - metric: "Attribution lift"
          calculation: "Conversion rate (exposed) vs. control group (not exposed)"
          target: ">20% lift to justify message existence"
        - metric: "Retention impact"
          analysis: "30/60/90-day retention of users exposed vs. not exposed"

    optimization_process:
      weekly_review:
        top_performers: "Messages with >25% CTR or >30% conversion rate"
        bottom_performers: "Messages with <5% CTR or >40% dismissal rate"
        actions: ["Pause underperformers", "Increase exposure for winners", "Iterate copy/design"]

      monthly_analysis:
        segment_effectiveness: "Which user segments respond best to messaging?"
        message_type_roi: "Which categories drive most business value?"
        fatigue_indicators: "Declining CTRs over time, rising dismissal rates, increasing opt-outs"
        competitive_benchmarking: "Compare to industry standards (Appcues, Pendo benchmarks)"

      quarterly_strategy:
        message_architecture_evolution: "New message types needed based on product roadmap?"
        platform_evaluation: "Is current tool meeting needs or should we migrate?"
        localization_expansion: "New languages/regions to support?"
        integration_roadmap: "New data sources, new channel orchestration (email, push, SMS)"

  governance:
    approval_workflow:
      - step: 1
        stage: "Draft creation"
        owner: "Content designer + Product manager"
        artifacts: "Message copy, targeting rules, success criteria"

      - step: 2
        stage: "Design review"
        owner: "Design team"
        artifacts: "Visual assets, brand compliance check"

      - step: 3
        stage: "Legal/compliance review"
        owner: "Legal team (for promotional, financial, data-related messages)"
        artifacts: "Approval or required copy changes"

      - step: 4
        stage: "Stakeholder sign-off"
        owner: "Product lead, Growth lead"
        artifacts: "Final approval to proceed"

      - step: 5
        stage: "QA testing"
        owner: "QA team + Content designer"
        checklist: ["Triggers fire correctly", "All segments see appropriate content", "Mobile + desktop tested", "Accessibility validated"]

      - step: 6
        stage: "Soft launch"
        rollout: "10% of eligible users"
        duration: "3-7 days"
        success_gate: "CTR >10% and dismissal <30% to proceed to full launch"

      - step: 7
        stage: "Full launch"
        rollout: "Gradual ramp to 100% over 7-14 days"
        monitoring: "Daily performance checks, support ticket monitoring"

    version_control:
      message_versioning: "Track all copy changes with dates and rationale"
      experiment_log: "Document all A/B tests, results, decisions made"
      sunset_criteria: "Retire messages with <5% CTR for 30+ days or <10% conversion for 60+ days"

    cross_functional_collaboration:
      product_team: "Define triggers, align messaging to roadmap, prioritize message requests"
      design_team: "Create visual assets, maintain design system, ensure brand consistency"
      engineering_team: "Implement custom triggers, integrate data sources, optimize performance"
      analytics_team: "Define metrics, build dashboards, design experiments, analyze results"
      support_team: "Report user feedback, identify confusion points, suggest FAQ messaging"
      marketing_team: "Coordinate in-app with email/push, maintain omnichannel consistency, share campaign calendar"
```

---

## Examples

### Example 1: B2B Project Management SaaS - Onboarding Modal Series

**Context**: Enterprise PM tool with complex features, needs to drive activation (creating first project + inviting team member) within 7 days.

**Message Series**:

**Message 1: Welcome Modal (Trigger: First login)**
```
Headline: "Welcome to Acme PM! Let's create your first project."
Body: "Most teams see results within their first week. We'll guide you through the essentials—it takes just 2 minutes."
Visual: [Illustration of completed project]
Primary CTA: "Create my first project"
Secondary CTA: "I'll explore on my own"
Progress: "Step 1 of 3"

Targeting: All new users
Priority: 4 (High)
Success Metric: >75% click primary CTA
```

**Message 2: Project Creation Tooltip (Trigger: User on projects page but hasn't created one after 60 seconds)**
```
Content: "Click here to create your first project. Takes 30 seconds! →"
Placement: Tooltip pointing to "New Project" button
Auto-dismiss: After 10 seconds
Frequency: Can re-appear next session if not acted upon

Success Metric: >40% create project within same session
```

**Message 3: Team Invitation Nudge (Trigger: Project created but no team members after 24 hours)**
```
Headline: "Great start! Want to invite your team?"
Body: "Projects are better together. Invite your team to collaborate in real-time."
Visual: [Screenshot of shared project with avatars]
Primary CTA: "Invite team members"
Secondary CTA: "Not yet"
Placement: Banner at top of project view

Targeting: Users with 1+ projects, 0 team members
Priority: 3 (Medium-high)
Frequency: Show daily for 3 days, then weekly
Success Metric: >25% invite at least 1 team member within 7 days
```

**Results**: Activation rate increased from 38% to 61% over 90 days with this 3-message sequence.

---

### Example 2: Consumer Fintech App - Feature Discovery Slideout

**Context**: Personal finance app wants to drive adoption of automated savings feature, which has 10x retention impact but only 15% awareness.

**Message: Smart Savings Feature Discovery**
```
Trigger: User has connected bank account + made 3+ manual budget entries, but hasn't enabled automated savings
Placement: Slideout panel (right side)
Priority: 2 (Medium)
Frequency: Once per month max

Headline: "You're doing great tracking expenses! Ready to automate your savings?"
Intro: "Based on your spending patterns, you could save an extra $240/month without thinking about it."

How It Works:
1. We analyze your income and expenses
2. Set a personalized savings goal
3. Automatically transfer small amounts you won't miss

Use Case Example: "Sarah saves $180/month automatically while still having money for her daily coffee."

Visual: [30-second demo video of feature setup]

Primary CTA: "Set up Smart Savings"
Secondary CTA: "Learn more"
Dismissal Options: ["Remind me next week", "I'm not interested"]

Targeting:
- Segments: Active users (10+ app opens in 30 days), bank connected, no auto-savings
- Exclusions: Free plan users (feature requires paid), recently messaged about savings

Success Metrics:
- Primary: Smart Savings activation rate (target: 18% of viewers activate within 14 days)
- Secondary: 60-day retention lift for activators
- Attribution: Compare activation rate to control group seeing no message (baseline 4%)

Results: 22% activation rate among message viewers, 2.4x control group, 35% better 60-day retention for activated users.
```

---

### Example 3: Healthcare App - Behavioral Nudge Banner

**Context**: Medication reminder app needs to re-engage users who logged medications for first 3 days but then stopped.

**Message: Medication Log Reminder**
```
Trigger: User logged medication for 3+ consecutive days, then 0 logs in last 48 hours
Placement: Persistent banner at top of home screen
Priority: 3 (Medium-high for health outcomes)
Frequency: Daily until user logs again (max 7 days), then pause

Message: "We noticed you haven't logged your medications in 2 days. Stay on track with your health goals!"
Context Bar: "Current streak: 3 days | Goal: 30 days"
Benefit Reminder: "Daily logging helps you remember doses and track side effects."

Primary CTA: "Log now"
Dismissal: X button (removes for 24 hours, then re-appears if still no logging)

Targeting:
- Segments: Users with 3+ day logging streak who've gone inactive
- Exclusions: Users who dismissed 3x (likely churning), users who logged in last 24h

Personalization:
- Token: {days_since_last_log} = "2 days"
- Token: {previous_streak} = "3 days"
- Token: {streak_goal} = "30 days"

Success Metrics:
- Primary: Re-engagement rate (target: 40% log within 24 hours of seeing message)
- Secondary: 7-day retention of re-engaged users (target: 60%)
- Negative Indicator: If dismissal rate >50%, message is too pushy

A/B Test Variations:
- A: Health-focused ("Stay on track with your health goals")
- B: Streak-focused ("Don't break your 3-day streak!")
- C: Supportive ("Life gets busy. We're here to help you remember.")

Results: Variation C performed best (47% re-engagement vs. 38% for A, 35% for B). Users responded better to empathy than pressure.
```

---

### Example 4: E-Learning Platform - Promotional Upgrade Modal

**Context**: Freemium course platform wants to convert free users to paid after they've completed 2+ free courses (demonstrated value).

**Message: Upgrade to Pro Prompt**
```
Trigger: User completes 2nd free course AND has browsed catalog of paid courses in last 7 days
Placement: Full-screen modal (immediately after course completion)
Priority: 1 (Promotional - lowest priority)
Frequency: Once per user, or 60 days after dismissal

Headline: "Congrats on finishing [Course Name]! Ready to unlock 500+ more courses?"
Subheadline: "You've completed 2 courses. Pro members complete an average of 12/year."

Value Proposition:
✓ Unlimited access to all courses ($15,000+ value)
✓ Certificate of completion (shareable on LinkedIn)
✓ Offline downloads for learning on-the-go
✓ Priority support

Social Proof: "Join 50,000+ professionals advancing their careers with Pro."

Offer: "Special offer: 30% off your first year (ends in 48 hours)"

Primary CTA: "Upgrade to Pro" (button styled prominently)
Secondary CTA: "See all Pro features" (link to comparison page)
Dismissal: "Maybe later" (X button)

Targeting:
- Segments: Free users with 2+ completed courses, at least 1 paid course browse
- Exclusions: Users who've seen upgrade prompt in last 60 days, users on payment failure recovery
- Timing: Immediately after course completion (dopamine high = better conversion)

Personalization:
- {course_name}: The course they just completed
- {courses_completed}: "2" (could be higher for power users)
- {courses_browsed}: Show thumbnails of paid courses they've browsed

Success Metrics:
- Primary: Conversion to paid (target: 8% of viewers upgrade within 7 days)
- Secondary: Comparison page visit rate (target: 25% click "See all Pro features")
- Baseline: Free-to-paid conversion without this message is 2.1%

A/B Tests:
- Timing: Immediately after completion vs. 24 hours later (winner: immediate = 8.3% vs. 5.1%)
- Offer: Discount vs. extended trial (winner: discount = 8.3% vs. 6.7%)
- Dismissal: "Maybe later" vs. "Continue with Free" (winner: "Maybe later" = less negative framing)

Results: 8.3% conversion rate (3.9x baseline), 15% revenue lift attributed to this message over 6 months.
```

---

### Example 5: Marketplace App - Transactional Alert Banner

**Context**: Two-sided marketplace needs to alert sellers of new order immediately while they're active in the app.

**Message: New Order Alert**
```
Trigger: New order placed for seller's listing while seller is active in app
Placement: Banner at top of screen (interrupts current view)
Priority: 5 (Critical transactional - highest priority)
Frequency: Real-time (every new order)

Message: "🎉 New order! [Buyer Name] just purchased [Product Name] for $[Amount]."
Urgency: "Ship within 24 hours to maintain your 5-star seller rating."

Primary CTA: "View order details"
Secondary CTA: "Print shipping label"
Dismissal: Auto-dismiss after 15 seconds OR on click (but also adds to notifications center)

Targeting:
- Segments: All active sellers with new orders
- Exclusions: None (transactional alerts override all frequency caps)

Personalization:
- {buyer_name}: "John D."
- {product_name}: "Vintage Camera"
- {amount}: "$150"
- {shipping_deadline}: "by 3pm tomorrow"

Success Metrics:
- Primary: Time to order acknowledgment (target: <10 minutes)
- Secondary: On-time shipping rate (target: >95%)
- User Sentiment: Should NOT be dismissed frequently (if so, too many orders or notification fatigue)

Design Considerations:
- Color: Positive green (not alarming red) - this is good news
- Sound: Optional celebratory sound (user can disable in settings)
- Persistence: Stays in notification center even after auto-dismiss
- Mobile: Push notification if user closes app before 15 seconds

No A/B Testing: Transactional messages should be consistent and reliable, not experimental.

Results: Average order acknowledgment time: 6 minutes. 97% on-time shipping rate. Seller satisfaction with notifications: 4.6/5.
```

---

## Success Metrics

- **Message Engagement**: 15%+ average CTR across all message types, with <25% dismissal rate
- **Business Impact**: 25%+ lift in target metrics (activation, feature adoption, retention) for users exposed vs. control
- **User Sentiment**: <5% of users disable in-app messages, >4.0/5.0 satisfaction with messaging relevance
- **Frequency Balance**: <10% of active users hit daily frequency cap (indicates good targeting, not over-messaging)
- **Operational Efficiency**: <5% of messages require rollback or emergency changes post-launch
- **Time-to-Launch**: New messages go from concept to launch in <2 weeks (for non-complex messages)
- **Localization Quality**: <2% error rate in translated messages, >90% cultural appropriateness score

---

## Best Practices

- **Trigger with Purpose**: Every message must have a clear behavioral trigger and business goal—no "nice to have" messages
- **Respect the Flow**: Never interrupt critical workflows with non-essential messages; wait for natural pause points
- **Progressive Disclosure**: Show information in layers (tooltip → slideout → help doc), don't dump everything at once
- **Segment Ruthlessly**: Generic messages to "all users" almost always underperform; hyper-relevant beats broad reach
- **Test Placement First**: Before perfecting copy, test whether modal vs. slideout vs. banner drives better engagement
- **Personalization Multiplies Impact**: Messages with user-specific data (name, usage stats, milestones) see 2-3x higher CTR
- **Frequency Caps Protect Brand**: Over-messaging destroys trust faster than under-messaging loses opportunity
- **Monitor Dismissal Rates**: >30% dismissal = message is irrelevant, annoying, or poorly timed
- **A/B Test Continuously**: Even high-performing messages can improve; test copy, timing, visuals iteratively
- **Coordinate Across Channels**: In-app message that duplicates yesterday's email feels spammy; orchestrate thoughtfully

---

## Common Pitfalls

- **Modal Overuse**: Full-screen modals should be <10% of total messages; overuse trains users to dismiss reflexively
- **Ignoring Quiet Hours**: Bombarding users during first session or active workflows drives immediate churn
- **One-Size-Fits-All**: Same message to free vs. paid users, or beginners vs. power users, wastes impressions
- **No Clear CTA**: Messages that inform but don't guide action see <5% engagement
- **Vanity Metrics Focus**: Tracking impressions instead of business outcomes (activation, retention, conversion)
- **Conflict Chaos**: Multiple messages eligible simultaneously with no prioritization logic creates poor UX
- **Stale Content**: Launching messages and never updating them; refresh quarterly based on performance
- **Platform Limitations**: Choosing messaging tool before defining requirements leads to workarounds and compromises
- **No Suppression Logic**: Re-showing dismissed messages too quickly trains users to ignore all messaging
- **Compliance Blindness**: Promotional messages without legal review can violate regulations (especially fintech, healthcare)

---

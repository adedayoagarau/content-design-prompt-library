## Onboarding Flow Content Architecture v1.0

**Purpose**: Design a comprehensive, conversion-optimized onboarding content system that reduces time-to-value, drives product activation, and establishes sustainable user habits through strategically sequenced educational content, progressive feature revelation, and personalized guidance.

**Context**: Use this framework when building or optimizing user onboarding for digital products where initial experience determines long-term retention. This goes beyond welcome screens to create a complete activation journey that adapts to user roles, goals, and behaviors. Ideal for B2B SaaS, consumer apps, fintech platforms, or any product with measurable activation milestones and complex value propositions requiring guided discovery.

**Strategic Frameworks Applied**:
- **Activation Ladder Model** - Progressive value delivery from quick wins to sustained habits
- **Jobs-to-be-Done Onboarding** - Aligning setup steps to user goals, not product features
- **Friction Analysis Framework** - Identifying and eliminating unnecessary setup barriers
- **Behavioral Momentum Theory** - Sequencing actions from easy to complex to build confidence
- **Segmented Onboarding Paths** - Role-based, goal-based, or experience-based customization
- **Measurement & Optimization Loop** - Funnel analytics tied to activation and retention metrics

---

## Variables

Define strategic variables for comprehensive onboarding architecture:

### Product Context Variables
- `{{product_type}}`: B2B SaaS | Consumer App | Marketplace | Fintech | Developer Tool | Other
- `{{core_value_proposition}}`: What job does your product do for users? (1-2 sentences)
- `{{activation_definition}}`: Specific actions that constitute "activated user" (e.g., "created 3 projects + invited 1 team member")
- `{{time_to_value_target}}`: How quickly users should experience first value (5 minutes | 1 hour | 1 day | 1 week)
- `{{product_complexity}}`: Simple (1-3 key features) | Moderate (4-7 features) | Complex (8+ interconnected features)
- `{{setup_requirements}}`: Mandatory steps before product is usable (account creation, integration, data import, payment)

### User Segmentation Variables
- `{{user_personas}}`: 3-5 distinct user types with different goals (e.g., Marketing Manager, Sales Rep, Executive)
- `{{user_goals}}`: What each persona is trying to achieve (e.g., "Generate leads" vs. "Track team performance")
- `{{experience_levels}}`: Beginner | Intermediate | Expert (with this product category, not just your product)
- `{{acquisition_channels}}`: How users arrive (Direct signup | Sales demo | Referral | Free trial | Paid conversion)
- `{{team_structure}}`: Individual users | Team buyers | Enterprise deployments (affects onboarding for collaboration features)

### Onboarding Journey Variables
- `{{welcome_experience}}`: First 0-60 seconds experience (email verification, welcome screen, product tour)
- `{{setup_checklist_items}}`: 3-7 critical setup steps (e.g., "Connect your data source", "Invite team", "Create first project")
- `{{aha_moment_triggers}}`: Specific actions that deliver immediate value (e.g., seeing first dashboard with real data)
- `{{habit_formation_actions}}`: Behaviors to repeat for long-term success (daily login, weekly review, project creation)
- `{{milestone_celebrations}}`: Achievement moments to acknowledge (first project, 10 projects, 100 projects, team invited)

### Content Format Variables
- `{{interactive_tutorial_use}}`: Guided product tours, interactive walkthroughs, tooltips, hotspots
- `{{video_content_strategy}}`: Explainer videos, tutorial videos, founder welcome, feature demos
- `{{checklist_framework}}`: Visual progress tracker, sequential steps, optional vs. required tasks
- `{{help_resource_types}}`: Knowledge base links, video library, live chat, help center, community forum
- `{{personalization_level}}`: Generic (same for all) | Role-based | Goal-based | Behavioral (adapts to actions)

### Content Tone Variables
- `{{brand_voice}}`: Friendly | Professional | Playful | Authoritative | Empathetic
- `{{encouragement_level}}`: How much to celebrate progress (minimal, moderate, enthusiastic)
- `{{educational_approach}}`: Show-don't-tell | Step-by-step guidance | Self-directed exploration
- `{{jargon_tolerance}}`: Industry terms expected | Plain language required | Hybrid with definitions

### Technical Infrastructure Variables
- `{{onboarding_platform}}`: In-product (custom-built) | Third-party (Appcues, Pendo, Userguiding) | Hybrid
- `{{data_tracking}}`: Events captured (setup starts, steps completed, time spent, dropoff points)
- `{{segmentation_logic}}`: How users are assigned to onboarding paths (self-select, inferred, predefined)
- `{{integration_requirements}}`: Third-party connections needed during setup (Stripe, Google, Slack, API keys)

### Measurement Variables
- `{{activation_funnel_stages}}`: 5-7 steps from signup to activated (e.g., Account created → Profile completed → Integration connected → First dashboard → Team invited → Activated)
- `{{success_metrics}}`: Activation rate, time-to-activation, feature adoption, D7/D30 retention
- `{{dropoff_analysis}}`: Where users abandon onboarding (specific step, time threshold, confusion points)

---

## Prompt

You are a product content architect designing a comprehensive onboarding flow for **{{product_type}}** that delivers **{{core_value_proposition}}**. Your task is to create a content system that guides users from signup to **{{activation_definition}}** within **{{time_to_value_target}}**, while adapting to different **{{user_personas}}** and their unique **{{user_goals}}**.

### Onboarding Philosophy & Principles

**Jobs-to-be-Done Framing:**

Instead of "Here are our features," frame onboarding as:
- "You want to [USER GOAL]. Here's the fastest path to achieving that."
- Map each onboarding step to user value, not product education
- Make features discoverable through accomplishing goals, not feature tours

**Time-to-Value Optimization:**

To hit **{{time_to_value_target}}** target:
- **First 60 Seconds**: Immediate value preview or quick win (even before full setup)
- **First Session**: Achieve one complete goal (e.g., create dashboard, complete transaction, send first message)
- **First Day**: Experience core value loop (e.g., data → insight → action)
- **First Week**: Build habit, invite team, or expand usage

**Friction Audit:**

For each item in **{{setup_requirements}}**, determine:
- **Is it absolutely necessary before first value?** If no, defer it
- **Can it be simplified?** (e.g., OAuth instead of manual credentials)
- **Can it be automated?** (e.g., sample data pre-loaded)
- **Can it be optional?** (e.g., team invite can happen later)

**Behavioral Momentum:**

Sequence actions from easy → medium → complex:
- Start with 1-click actions to build confidence
- Gradually increase cognitive load (typing, decision-making, integrations)
- Never put hardest step first (kills momentum before it builds)

### Segmented Onboarding Paths

**Persona-Based Customization:**

For each persona in **{{user_personas}}**, design:

**Persona 1: [Role Name]**
- **Primary Goal**: {{user_goals}} for this role
- **Activation Path**: What specific steps lead to their "aha moment"?
- **Content Emphasis**: Which features matter most to them vs. irrelevant noise?
- **Language Adaptation**: Technical depth, industry jargon, example scenarios
- **Checklist Customization**: Their 5-step setup sequence (vs. generic 7-step)

Example Divergence:
- Marketing Manager: Focus on campaign creation, analytics, team collaboration
- Sales Rep: Focus on lead tracking, pipeline management, quick data entry
- Executive: Focus on dashboard viewing, team performance, high-level insights

**Experience Level Adaptation:**

**Beginners** (new to product category):
- More explanation, tooltips, "why this matters" context
- Slower pace, fewer choices, clearer directional cues
- Analogies to familiar concepts, screenshots, video walkthroughs

**Intermediate** (familiar with category, new to your product):
- Comparison to competitors ("Like [Tool X], but we do [Y] differently")
- Feature parity explanations ("We call this [Your Term], other tools call it [Their Term]")
- Faster pace, more autonomy, skip basic concepts

**Experts** (power users migrating from competitors):
- Import tools, migration guides, keyboard shortcuts
- Advanced features up-front, no basic explanations
- "What's different here" focus, customization options immediately

**Acquisition Channel Customization:**

Users from different **{{acquisition_channels}}** need different onboarding:

- **Direct Signup** (cold traffic): Most education needed, unclear goals
- **Sales Demo** (warm, informed): Skip value prop, focus on setup and enablement
- **Referral** (trusted recommendation): Leverage referring user's use case
- **Free Trial** (high intent): Fast-track to power features, upgrade messaging
- **Paid Conversion** (committed): Premium onboarding, dedicated support, priority access

### Onboarding Content Architecture

**Welcome Experience (0-60 seconds):**

Design **{{welcome_experience}}** to:

**Option A: Immediate Value Preview**
```
Welcome screen shows:
- Live demo with sample data (see the product working immediately)
- "This could be YOUR [dashboard/project/insights] in 2 minutes"
- CTA: "Let's build yours" → start setup
```

**Option B: Goal Selection**
```
"What brings you here today?"
[Option 1: Track team performance]
[Option 2: Automate reporting]
[Option 3: Collaborate with team]
→ Customizes onboarding based on selection
```

**Option C: Quick Win First**
```
"Before we set up your account, try this:"
→ Interactive demo where user accomplishes something (create mock project, analyze sample data)
→ "Want to do this with your real data? Let's get you set up."
```

**Setup Checklist Framework:**

Transform **{{setup_checklist_items}}** into progress-driven experience:

**Checklist Design Principles:**
- **Visual Progress**: "2 of 5 complete" with progress bar
- **Time Estimates**: "Next step takes 30 seconds"
- **Value Statements**: Not "Connect integration" but "Connect [Tool] to see your data"
- **Optional Clarity**: Mark optional steps (don't hide them, but don't block)
- **Celebrate Milestones**: Checkmarks, animations, encouragement copy

**Example Checklist Transformation:**

Bad (Feature-Focused):
```
☐ Complete your profile
☐ Configure settings
☐ Connect integration
☐ Invite team
☐ Create project
```

Good (Value-Focused with Context):
```
1. ✓ Account created - Welcome to [Product]!
2. → Connect [Data Source] - See your real data in action (2 min)
3. ☐ Create your first [Dashboard/Project] - Your first insight (1 min)
4. ☐ Invite your team - Collaborate on [X] (optional, 30 sec)
5. ☐ Explore advanced features - Unlock full potential (5 min)

You're 40% to activation! 🎉
```

**Interactive Tutorial Strategy:**

Map **{{interactive_tutorial_use}}** to learning preferences:

**Guided Product Tour** (For complex products):
- Highlight 3-5 most important UI elements
- "Click here to [accomplish specific goal]"
- Dismissible but persistent (can resume later)
- Adapts based on user actions (skips ahead if they already did the step)

**Contextual Tooltips** (For moderate complexity):
- Appear when user hovers or focuses on new UI element
- 1-2 sentence explanation of what it does
- Progressive disclosure: Only show 2-3 at a time, not overwhelming

**Interactive Playground** (For developer tools, creative apps):
- Sandbox environment with sample data
- "Try it yourself" exercises with hints
- Can't break anything, encourages exploration

**Video Content Integration:**

Strategic use of **{{video_content_strategy}}**:

**When Videos Work Best:**
- Complex visual processes (design tools, data analysis, workflows)
- Founder welcome (builds trust, human connection)
- "Watch over my shoulder" tutorials for multi-step processes

**When Videos Fail:**
- Simple text entry or clicks (video is overkill)
- Users who want to move fast (video pace is fixed)
- Accessibility (always provide text alternative)

**Video Specifications:**
- Length: 30-90 seconds for tutorials, 2-3 minutes for concepts
- Placement: Embedded in flow vs. linked help center
- Interactivity: Can user pause onboarding to watch, or is it blocking?
- Captioning: Required for accessibility and watch-without-sound

### Aha Moment Engineering

**Identify Aha Moment Triggers:**

Analyze **{{aha_moment_triggers}}** to determine:
- What specific action creates "wow, this is valuable" feeling?
- How quickly can users reach it? (optimize for speed)
- What blockers prevent users from reaching it? (remove them)

**Example Aha Moments by Product Type:**

**Project Management Tool:**
- Not: "Account created" ✗
- Yes: "See all your tasks in one organized view with team assignments" ✓
- Optimization: Pre-populate sample project so they see organized view immediately

**Analytics Platform:**
- Not: "Integration connected" ✗
- Yes: "See surprising insight from your real data" ✓
- Optimization: Auto-generate first dashboard the moment data syncs

**Communication Tool:**
- Not: "Profile completed" ✗
- Yes: "Send first message and get instant response" ✓
- Optimization: Have bot or sample team member ready to respond

**Content Strategy for Aha Moment:**

Before Aha Moment:
- "You're about to see your first [insight/project/result]..."
- Build anticipation, set expectations

During Aha Moment:
- Minimal text, let the product speak (the dashboard IS the message)
- Visual celebration (animation, confetti, success state)

After Aha Moment:
- "🎉 This is what [Product] does for you. Impressive, right?"
- "Want to dive deeper? Here's what to explore next..."
- CTA to next valuable action

### Habit Formation Framework

**Design for {{habit_formation_actions}}:**

**Trigger → Action → Reward Loop:**

1. **Trigger**: What reminds user to return?
   - Email: "Your weekly summary is ready"
   - In-app: "You have 3 new notifications"
   - Calendar: "Daily standup in [Product]"

2. **Action**: What should they do? (make it easy)
   - Single-click access from trigger
   - Pre-loaded to relevant screen
   - Clear next step visible

3. **Reward**: What value do they get?
   - New insights, progress visualization, team updates
   - Variable rewards work best (sometimes small, sometimes big insight)

**Onboarding's Role in Habit Formation:**

- **Week 1**: Establish the loop (trigger → action → reward)
- **Week 2**: Reinforce the loop (consistency messaging, streak tracking)
- **Week 3**: Autonomy (they self-trigger, habit formed)

**Content for Habit Reinforcement:**

Day 3: "You've logged in 3 days in a row! Most active users check [Product] daily. Want to set a reminder?"
Day 7: "One week in! Here's what you've accomplished: [stats]. Keep the momentum going."
Day 30: "30-day streak! You're in the top 10% of users. Here's your impact..."

### Milestone Celebrations

**{{milestone_celebrations}} Content Strategy:**

**Micro-Milestones** (First Week):
- First login: "Welcome aboard! 👋"
- First setup step: "Great start! 🎉"
- First project created: "Look at you go! Your first [project] is live."
- First team member invited: "Collaboration unlocked! Your team will love this."

**Macro-Milestones** (Long-term):
- 10 projects: "You've created 10 projects! You're becoming a [Product] power user."
- 100 actions: "100 [actions] completed. You've saved an estimated [X hours]."
- 1 year anniversary: "You've been with us for a year! Here's your impact story..."

**Celebration Design Elements:**
- Tone: Match {{brand_voice}} (playful = confetti, professional = subtle checkmark)
- Frequency: Don't celebrate every click, but don't let achievements go unnoticed
- Shareability: Can they share milestone on social? Screenshot-worthy?
- Progression: "You're 60% to the next milestone (invite 3 more team members)"

### Onboarding Help & Support

**{{help_resource_types}} Integration:**

**Contextual Help Placement:**
- "?" icons next to complex UI elements → tooltip or help article
- "Need help?" persistent button → live chat or help center
- Empty states: "Not sure what to do? Here's a guide to get started."

**Progressive Help Depth:**

Level 1: **Inline Tooltips** (15-30 words)
- Quick explanations without leaving context
- "This dashboard shows your weekly performance trends."

Level 2: **Help Center Links** (articles, FAQs)
- "Learn more about [Feature]" → comprehensive guide
- Searchable, categorized, always accessible

Level 3: **Video Tutorials** (watch walkthroughs)
- "Watch a 2-minute tutorial on [Complex Workflow]"
- Embedded or linked

Level 4: **Live Support** (chat, email, phone)
- "Still stuck? Chat with our team" (appears after signs of struggle)
- Human intervention for complex issues

**Proactive Help Triggers:**

Detect struggles and offer help:
- User clicks back/forward repeatedly: "Looks like you're stuck. Can we help?"
- Hovers over "?" icon 3+ times: Auto-open tooltip or chat
- Spends 5+ minutes on one step: "This step usually takes 1 minute. Need a hand?"
- Returns to same setup step multiple times: "Having trouble with [Step]? Here's a guide."

### Measurement & Optimization

**Activation Funnel Tracking:**

For **{{activation_funnel_stages}}**, measure:

```
Stage 1: Account Created (baseline: 100%)
↓ 85% proceed
Stage 2: Welcome Screen Viewed
↓ 70% proceed (15% drop-off: why?)
Stage 3: First Setup Step Started
↓ 60% proceed (10% drop-off: is this step too hard?)
Stage 4: Integration Connected
↓ 50% proceed (10% drop-off: integration failures? confusion?)
Stage 5: First [Project/Dashboard] Created
↓ 40% proceed (10% drop-off: unclear next steps?)
Stage 6: Team Invited OR Advanced Feature Used
↓ 35% **ACTIVATED** (65% never activate: this is the problem)
```

**Dropoff Analysis:**

For each stage in **{{dropoff_analysis}}**:
- **What's the dropoff rate?** (50% → 40% = 20% dropoff)
- **Why are they leaving?** (session recordings, user interviews, exit surveys)
- **What content could help?** (better instructions, examples, simplification)
- **Can we remove this step?** (defer it, automate it, make it optional)

**Time-to-Activation Tracking:**

Measure **{{success_metrics}}** by cohort:
- Median time from signup to activation: Target vs. actual
- 80th percentile time: How long do slower users take?
- Correlation: Does faster activation predict better retention? (usually yes)

**A/B Testing Onboarding Variations:**

**High-Impact Tests:**
1. **Welcome Experience**: Immediate value preview vs. goal selection vs. quick win
2. **Checklist Order**: Easy-first vs. critical-first sequencing
3. **Persona Segmentation**: Self-select goals vs. auto-detect vs. generic path
4. **Help Placement**: Always-visible tutorial vs. on-demand vs. progressive hints
5. **Tone**: Encouraging vs. neutral vs. urgent

**Iteration Cycle:**
- **Weekly**: Quick copy tweaks based on dropoff data
- **Monthly**: Larger structural changes (reorder steps, add new content)
- **Quarterly**: Full onboarding redesign based on accumulated learnings

### Copy Patterns & Templates

**Welcome Screen Copy:**

```
Headline: [Benefit-driven, what they'll achieve]
"Welcome to [Product]! Let's get you [achieving goal] in 2 minutes."

Subheadline: [Build confidence]
"Join 10,000+ [users] who [accomplish goal] every day with [Product]."

CTA: [Action-oriented, specific]
"Start my setup" or "Show me around" or "Get started"
```

**Setup Step Instructions:**

```
Step Title: [Value statement, not feature name]
Bad: "Connect API"
Good: "Connect [Tool] to see your data"

Instructions: [Concise, action-oriented, 1-2 sentences]
"Click the button below to authorize [Tool]. This takes 30 seconds and lets us pull your [data type] automatically."

Help Link: [Always available, specific]
"Need help connecting [Tool]? [See setup guide]"

Progress Indicator: [Motivational]
"Step 2 of 5 | 3 minutes remaining"
```

**Encouragement & Celebration Copy:**

```
Minor Progress:
- "Nice! You're 20% done."
- "Great start! Keep going."
- "✓ Step completed. Next up: [Step Name]"

Major Milestones:
- "🎉 Amazing! You just [accomplished thing]. This is when [Product] gets really powerful."
- "You did it! Your first [project/dashboard/result] is live. Here's what you can do next..."
- "Congrats on inviting your team! Collaboration makes [Product] 10x more valuable."

Activation Achievement:
- "🎊 You're officially activated! Here's what that means: [benefits]"
- "You've unlocked the full power of [Product]. Most users who reach this point see [outcome] within [timeframe]."
```

**Error & Friction Copy:**

```
When Setup Fails:
"Hmm, we couldn't connect to [Tool]. This usually means [reason]. Try [solution], or [contact support]."

When User is Stuck:
"Taking your time? That's okay. Most users spend [X minutes] on this step. Need help? [Link]"

When User Skips Steps:
"You can skip this for now, but [feature] won't work until you complete it. You can always return from Settings."
```

---

## Output Schema

```yaml
onboarding_flow_architecture:
  product_context:
    product_type: "{{product_type}}"
    core_value_proposition: "{{core_value_proposition}}"
    activation_definition: "{{activation_definition}}"
    time_to_value_target: "{{time_to_value_target}}"
    product_complexity: "{{product_complexity}}"

  user_segmentation:
    personas:
      - persona_name: "Marketing Manager"
        primary_goal: "Create and track marketing campaigns"
        activation_path: ["Connect ad accounts", "Create first campaign", "View performance dashboard"]
        onboarding_customization: "Emphasize analytics, multi-channel tracking, team collaboration"
        language_style: "Marketing jargon okay (CTR, ROAS, CAC), business-focused tone"

      - persona_name: "Sales Representative"
        primary_goal: "Track leads and close deals faster"
        activation_path: ["Import contacts", "Log first activity", "View pipeline"]
        onboarding_customization: "Emphasize speed, mobile access, CRM integration"
        language_style: "Sales terminology (pipeline, quota, close rate), action-oriented"

    experience_levels:
      beginner:
        indicators: ["First time with this product category", "Slow click patterns", "High help article usage"]
        content_adaptation: "More tooltips, video tutorials, 'why this matters' context, slower pace"

      intermediate:
        indicators: ["Mentioned competitor in signup survey", "Fast navigation", "Skips basic help"]
        content_adaptation: "Comparison to competitors, feature parity, faster pace, less hand-holding"

      expert:
        indicators: ["Power user from similar tool", "Keyboard shortcut usage", "API interest"]
        content_adaptation: "Import tools, advanced features first, customization options, skip basics"

  onboarding_journey:
    welcome_experience:
      type: "Goal selection + immediate value preview"
      flow:
        - step: "Welcome screen"
          content:
            headline: "Welcome to Acme! What brings you here today?"
            options:
              - option: "Track marketing performance"
                icon: "📊"
                leads_to: "Marketing Manager onboarding path"
              - option: "Manage sales pipeline"
                icon: "💰"
                leads_to: "Sales Rep onboarding path"
              - option: "Collaborate with team"
                icon: "👥"
                leads_to: "Team Lead onboarding path"
          duration: "10 seconds"
          success_metric: ">90% make a selection"

        - step: "Value preview"
          content:
            headline: "Here's what your [dashboard/workspace] will look like:"
            body: "[Screenshot or live demo with sample data showing end result]"
            cta: "Let's build yours → Start setup"
          duration: "15 seconds"
          success_metric: ">80% click CTA"

    setup_checklist:
      framework: "Progressive, value-focused with time estimates"
      steps:
        - step_id: 1
          title: "✓ Account created - Welcome aboard!"
          type: "Auto-completed (already done at signup)"
          value_statement: "You're in! Let's get you set up."

        - step_id: 2
          title: "Connect your data source"
          value_statement: "See your real data in action (not just sample data)"
          time_estimate: "2 minutes"
          instructions: "Click 'Connect [Tool]' below and authorize access. We'll automatically import your last 30 days of data."
          help_link: "[Tool] connection troubleshooting guide"
          optional: false
          success_metric: "60% completion rate"

        - step_id: 3
          title: "Create your first dashboard"
          value_statement: "Transform your data into insights"
          time_estimate: "1 minute"
          instructions: "Choose a template or start from scratch. We recommend [Template Name] for [Persona]."
          help_link: "Dashboard creation guide"
          optional: false
          success_metric: "50% completion rate"

        - step_id: 4
          title: "Invite your team (optional)"
          value_statement: "Collaborate on insights and share dashboards"
          time_estimate: "30 seconds"
          instructions: "Enter email addresses of team members. They'll get an invite to join your workspace."
          help_link: "Team collaboration guide"
          optional: true
          success_metric: "25% completion rate (since optional)"

        - step_id: 5
          title: "Explore advanced features"
          value_statement: "Unlock the full power of [Product]"
          time_estimate: "5 minutes"
          instructions: "Take a tour of [Feature 1], [Feature 2], and [Feature 3]. Or skip for now and explore at your own pace."
          help_link: "Advanced features overview"
          optional: true
          success_metric: "15% completion rate"

      progress_display:
        format: "[X] of [Y] complete | [Z]% to activation"
        celebration_triggers:
          - at: "50%"
            message: "Halfway there! You're doing great. 🎉"
          - at: "100%"
            message: "🎊 Setup complete! You're officially activated. Here's what's next..."

    aha_moment_engineering:
      primary_aha_moment: "User sees their real data in a visual dashboard with at least one actionable insight"
      time_to_aha_target: "5 minutes from signup"
      blockers_removed:
        - blocker: "Waiting for data to sync"
          solution: "Show sample data immediately, overlay real data when ready"
        - blocker: "Don't know what dashboard to create"
          solution: "Auto-generate first dashboard based on connected data source"
        - blocker: "Empty dashboard doesn't look impressive"
          solution: "Pre-populate with data immediately upon connection"

      aha_moment_content:
        before: "Almost there! Your data is syncing... This takes about 30 seconds."
        during: "[Animated reveal of dashboard populating with real data]"
        after: "🎉 This is YOUR data! See that spike on Tuesday? That's worth investigating. Click any data point to dive deeper."

    interactive_tutorials:
      guided_tour:
        trigger: "After first dashboard creation"
        steps:
          - element: "Data filters"
            tooltip: "Filter by date, campaign, or any dimension. Try clicking here."
            action_required: true
          - element: "Chart type selector"
            tooltip: "Switch between bar, line, and pie charts. Each tells a different story."
            action_required: false
          - element: "Share button"
            tooltip: "Share this dashboard with your team or export as PDF."
            action_required: false
        dismissible: true
        resumable: true
        completion_metric: "40% complete full tour"

      contextual_tooltips:
        strategy: "Progressive disclosure - max 3 visible at once"
        examples:
          - trigger: "User hovers over 'Settings' icon"
            content: "Customize your workspace, manage team, and connect integrations."
            dismiss: "Auto-dismiss after 5 seconds or on click away"

          - trigger: "User clicks 'Create' button for first time"
            content: "Create dashboards, reports, or alerts. Start with a dashboard to see your data visually."
            dismiss: "Manual dismiss required (blocking until acknowledged)"

  content_templates:
    welcome_screen:
      headline: "Welcome to [Product]! Let's [achieve goal] in [time]."
      subheadline: "Join [X] [users] who [accomplish outcome] every day."
      options: "[Goal-based paths] OR [Quick win preview] OR [Start setup immediately]"
      cta: "Start my setup" | "Show me how it works" | "Skip to product"

    setup_step_instruction:
      title: "[Value statement, not feature name]"
      instructions: "[1-2 sentences, action-oriented, specific]"
      time_estimate: "[X] minutes"
      help_link: "[Context-specific help article]"
      progress: "Step [X] of [Y] | [Z]% to activation"
      cta: "[Specific action button]"
      skip_option: "[Available if step is optional]"

    celebration_copy:
      minor_milestone: "Nice! You're [X]% done. Keep going!"
      major_milestone: "🎉 [Achievement]! This is when [Product] gets really powerful."
      activation: "🎊 You're activated! Here's what that means: [benefits + next steps]"

    error_messaging:
      connection_failure: "Hmm, we couldn't connect to [Tool]. This usually means [reason]. Try [solution], or [contact support]."
      user_stuck: "Taking your time? No rush. Need help? [Link to specific guide]"
      skip_warning: "You can skip this, but [feature] won't work until you complete it. Return anytime from Settings."

  measurement_framework:
    activation_funnel:
      - stage: "Account created"
        baseline: "100%"
        metric: "Signups completed"

      - stage: "Welcome screen viewed"
        target: ">90%"
        metric: "Users who see welcome screen within 5 min of signup"
        dropoff_alert: "If <85%, investigate email delays or access issues"

      - stage: "Goal selected OR setup started"
        target: ">80%"
        metric: "Users who engage with onboarding"
        dropoff_alert: "If <75%, test welcome screen variations"

      - stage: "First setup step completed"
        target: ">65%"
        metric: "Data source connected OR profile completed"
        dropoff_alert: "If <60%, simplify first step or add help content"

      - stage: "Aha moment reached"
        target: ">50%"
        metric: "First dashboard with real data viewed"
        dropoff_alert: "If <45%, reduce time-to-aha (auto-generate, sample data)"

      - stage: "Activated"
        target: ">35%"
        metric: "{{activation_definition}} achieved"
        dropoff_alert: "If <30%, major onboarding redesign needed"

    success_metrics:
      primary:
        - metric: "Activation rate"
          calculation: "Users reaching {{activation_definition}} / Total signups"
          target: ">35% within 7 days"

        - metric: "Time to activation"
          calculation: "Median time from signup to {{activation_definition}}"
          target: "<{{time_to_value_target}}"

        - metric: "D7 retention of activated users"
          calculation: "Activated users active on Day 7 / Activated users"
          target: ">60%"

      secondary:
        - metric: "Setup completion rate"
          calculation: "Users completing all setup steps / Users starting setup"
          target: ">70%"

        - metric: "Help article usage"
          insight: "High usage = confusion, Low usage = clarity or users giving up"
          target: "20-30% optimal range"

        - metric: "Time spent in onboarding"
          calculation: "Median time from first step to activation"
          insight: "Too fast = skipping, Too slow = friction"

    optimization_cycle:
      weekly:
        actions: ["Review funnel dropoff points", "Quick copy tweaks for high-friction steps", "Monitor new feature impact"]

      monthly:
        actions: ["A/B test onboarding variations", "User interview synthesis", "Larger content or flow changes"]

      quarterly:
        actions: ["Full onboarding redesign if needed", "Persona path refinement", "Competitive analysis"]
```

---

## Examples

### Example 1: B2B Analytics Platform - Goal-Based Onboarding

**Context**: Multi-department analytics tool (Marketing, Sales, Product, Finance). Need persona-specific onboarding.

**Welcome Experience:**
```
Headline: "Welcome to DataPro! What's your main goal?"

Options:
📊 Track marketing campaign performance → Marketing onboarding
💰 Manage sales pipeline and forecast revenue → Sales onboarding
📈 Analyze product usage and retention → Product onboarding
💵 Monitor financial metrics and budgets → Finance onboarding

Why this works:
- Immediately segments users by goal (not just role)
- Each path emphasizes different features and use cases
- Language and examples tailored to selected persona
- Avoids overwhelming with irrelevant features
```

**Marketing Path Checklist:**
```
1. ✓ Account created - Welcome to DataPro!
2. → Connect your ad accounts (Google Ads, Facebook Ads, LinkedIn) - 2 min
   "See all your campaign performance in one place"
3. ☐ Create your first marketing dashboard - 1 min
   "We'll auto-generate it from your connected accounts"
4. ☐ Set up your first automated report - 3 min
   "Get weekly performance summaries emailed to you and your team"
5. ☐ Invite your marketing team (optional) - 30 sec
   "Collaborate on campaigns and share insights"

You're 40% to activation! 🚀
```

**Aha Moment**: Auto-generated dashboard with all ad platforms unified, showing cross-channel ROAS immediately.

**Results**: 47% activation rate (up from 28% with generic onboarding), 3.2-day median time-to-activation (down from 8.1 days).

---

### Example 2: Consumer Fintech App - Quick Win First Approach

**Context**: Personal finance app. Users skeptical of value. Need immediate proof before investing time in setup.

**Welcome Experience:**
```
Screen 1: "Before we set up your account, want to see how much you could save?"

Interactive Calculator:
- "I spend about $[___] per month"
- [Calculate my savings]

Result: "Based on your spending, you could save $420/month with DataPro. Ready to make it happen?"

[Yes, set up my account] [No thanks]

Why this works:
- Immediate value (personalized savings estimate) before asking for effort
- Low commitment interaction (just type one number)
- Creates investment in outcome ("I could save $420!")
- Higher setup completion because they've already visualized the benefit
```

**Setup Checklist:**
```
1. ✓ You could save $420/month - Let's make it real!
2. → Connect your bank account (secure, read-only access) - 1 min
   "We need to see your spending to find savings opportunities"
   [Shows bank logos, "256-bit encryption" badge]
3. ☐ Review your first savings opportunity - 30 sec
   "We found $87/month you're overspending on [category]. Want to fix it?"
4. ☐ Set your savings goal - 30 sec
   "How much do you want to save per month? [$420] [Custom amount]"
5. ☐ Enable auto-save (optional) - 15 sec
   "Automatically transfer small amounts to savings when we detect extra cash"

You're 60% to your savings goal! 💰
```

**Aha Moment**: Immediately after connecting bank, app highlights first concrete savings opportunity ("You're spending $87/month on subscriptions you rarely use. Cancel these?").

**Results**: 64% bank connection rate (critical friction point), 52% activation, 73% D7 retention for activated users.

---

### Example 3: Developer Tool - Expert Fast-Track Onboarding

**Context**: API monitoring platform. Developers hate hand-holding. Need fast setup, assume technical competence.

**Welcome Experience:**
```
Headline: "Welcome to APIWatch. Let's get you monitoring in 60 seconds."

Two Paths:
[🚀 Quick start] - "Add your first API endpoint now (recommended)"
[📚 Explore first] - "Browse docs and features before setup"

90% choose Quick start.

Why this works:
- Acknowledges user expertise (no patronizing explanations)
- Time commitment clear and short (60 seconds)
- Provides opt-out for explorers
- Action-oriented (developers want to DO, not read)
```

**Setup Checklist (for Quick Start path):**
```
1. Add your first endpoint to monitor

   API Endpoint URL:
   [https://api.yourcompany.com/v1/users] [Monitor this endpoint]

   Advanced options: [Region], [Frequency], [Custom headers]
   (Most users skip these for now)

2. ✓ Monitoring started! Your endpoint is being checked every 60 seconds.

   [View live status] [Add another endpoint]

3. Set up alerts (so you know when things break)

   Send alerts to:
   [Email] [Slack] [PagerDuty] [Webhook]

   Alert triggers:
   ✓ Downtime (endpoint returns 500 or times out)
   ✓ Slow response (>2000ms)
   ☐ Custom rules (advanced)

4. (Optional) Install SDK for deeper monitoring

   npm install @apiwatch/sdk
   [Copy integration code] [See docs]

Activated! You're now monitoring [X] endpoints. 🎯
```

**Aha Moment**: Live status dashboard showing their actual API endpoint responding (or not) with real latency data within 60 seconds.

**Results**: 71% add first endpoint, 58% set up alerts, 34% install SDK (high for optional step). Median time-to-activation: 3.2 minutes.

---

### Example 4: Team Collaboration Tool - Invite-First Onboarding

**Context**: Slack competitor. Product is MUCH better with team. Need to prioritize team invites early.

**Welcome Experience:**
```
Screen 1: "Welcome to Collabo! Who's on your team?"

[Invite by email] [Import from Google Workspace] [Import from Slack]

"Don't worry, we'll set up your workspace next. But Collabo is way better with your team."

Why this works:
- Acknowledges that collaboration tools are useless solo
- Makes team invite FIRST step (not afterthought)
- Reduces friction with import options (not just manual email entry)
- Social proof: "Others are joining you" increases commitment
```

**Setup Checklist:**
```
1. ✓ Team invites sent! [Sarah], [John], and [Mike] will join soon.
   "They'll get an email invitation. Let's set up your workspace while we wait."

2. → Create your first channel
   "Channels organize conversations by topic, project, or team."

   Suggestions based on your team size:
   #general (for everyone)
   #random (for fun stuff)
   #[your-project-name] (for work)

   [Create these channels] [I'll create my own]

3. ☐ Send your first message
   "Say hi to your team! They'll see it when they join."

   [Message box with suggestion: "Hey team! Welcome to Collabo. Let's crush this project. 🚀"]

   [Send message]

4. ✓ [Sarah] just joined! 🎉
   "[Sarah] is online now. Start a conversation!"

5. ☐ Explore integrations (optional)
   "Connect your tools: Google Drive, GitHub, Figma, Jira, etc."

Activated! You have [3] team members and [2] active channels. 💬
```

**Aha Moment**: First real-time message exchange with team member. Seeing typing indicators, instant replies, emoji reactions - feels alive.

**Results**: 68% send team invites in setup, 45% get at least one team member to join within 24 hours, 89% activation rate for teams with 2+ members.

---

### Example 5: E-Learning Platform - Sample Content Preview

**Context**: Course platform. Users unsure if content is high-quality. Need proof before committing to setup.

**Welcome Experience:**
```
Screen 1: "Welcome to LearnPro! Want to preview a lesson before creating your account?"

[Watch a free lesson] [No, I'm ready to start]

If they choose "Watch a free lesson":
- Embeds high-quality 3-minute lesson video
- After video: "This is the quality you'll get in all 500+ courses. Ready to start learning?"
- [Yes, sign me up] → Goes to account creation

Why this works:
- Removes skepticism about quality
- Low commitment preview (3 minutes)
- Creates desire ("I want more of this")
- Higher conversion because they've experienced the product
```

**Setup Checklist (after preview):**
```
1. ✓ You watched "Introduction to Python" - Great choice!

2. → Tell us what you want to learn
   [Select topics: Python, JavaScript, Data Science, Design, Marketing, etc.]

   "We'll recommend courses based on your interests"

3. ☐ Choose your first course
   Based on your interests, we recommend:

   [Course thumbnail: "Python for Beginners"]
   12 hours | 4.8★ | 50,000 students
   [Start this course]

   OR [Browse all courses]

4. ☐ Watch your first full lesson
   "Lesson 1: Setting up your Python environment (12 minutes)"

   [Start lesson]

5. ☐ Set your learning goal (optional)
   "I want to learn [X hours] per week"
   [30 min] [1 hour] [2+ hours]

   "We'll send you reminders to stay on track"

Activated! You're on your way to mastering [Python]. 🎓
```

**Aha Moment**: Completing first full lesson and seeing progress (1/50 lessons complete, 2% of course, estimated completion date).

**Results**: 78% who preview a lesson complete signup (vs. 34% who skip preview), 61% start first course, 44% complete first lesson (activation).

---

## Success Metrics

- **Activation Rate**: 35-50% of signups reach activation definition within 7 days (varies by product complexity)
- **Time-to-Activation**: Median time from signup to activation meets {{time_to_value_target}} (80% of users)
- **Setup Completion**: 70%+ complete all required setup steps
- **Aha Moment Reach**: 50%+ experience designed aha moment
- **D7 Retention**: 60%+ of activated users return on Day 7
- **Help Resource Usage**: 20-30% access help during onboarding (not too high = confused, not too low = stuck silently)
- **Dropoff Reduction**: Each onboarding iteration reduces highest dropoff point by 5-10%

---

## Best Practices

- **Lead with Value, Not Features**: Show what users will accomplish, not what buttons to click
- **Remove Friction Ruthlessly**: Every required field, every integration, every step is a conversion killer—justify each one
- **Celebrate Progress**: Acknowledge milestones immediately; momentum builds motivation
- **Adapt to User Behavior**: If they skip a step, don't nag; if they struggle, offer help proactively
- **Design for Aha Moments**: Optimize entire onboarding to reach the "wow" moment as fast as possible
- **Test Relentlessly**: Small copy changes can yield 10-20% activation lifts; always be testing
- **Respect Expertise Levels**: Power users hate hand-holding; beginners need guidance—segment accordingly
- **Make Skipping Easy**: Let users explore freely, but show them the recommended path clearly
- **Personalize Ruthlessly**: Generic onboarding converts at 30%; persona-specific converts at 50%+
- **Optimize for Mobile**: 40%+ of signups happen on mobile; ensure onboarding works beautifully on small screens

---

## Common Pitfalls

- **Feature Tour Overload**: Showing every feature upfront overwhelms; reveal progressively based on usage
- **Delaying Value**: Asking for profile info before showing product value kills momentum
- **Identical Paths for All**: Power users and beginners need different onboarding; one-size-fits-all fails both
- **No Clear Progress**: Users don't know how much setup remains; add progress bars and time estimates
- **Mandatory Team Invites**: Forcing team invites when user wants to explore solo creates friction
- **Ignoring Dropoff Data**: 60% abandon at Step 3, yet you keep optimizing Step 1; fix the leak, not the faucet
- **Too Much Help Too Soon**: Tutorials before users try anything teach nothing; let them explore, then guide
- **Celebration Spam**: Confetti after every click cheapens achievements; reserve for meaningful milestones
- **No Aha Moment Design**: Hope users stumble upon value vs. engineering the path to it
- **Setup Theater**: Asking for preferences/settings that don't affect initial experience; defer to post-activation

---

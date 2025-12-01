## Troubleshooting Guide Structure v1.0

**Purpose**: Design systematic, diagnostic troubleshooting content that empowers users to independently resolve 60-80% of technical issues through clear problem identification, solution hierarchies, and escalation paths while reducing support costs and frustration through structured decision-tree frameworks and preventative guidance.

**Context**: Use this framework when creating technical troubleshooting documentation for products with complex error states, multi-variable problem scenarios, or high support ticket volume. Ideal for software platforms with integration dependencies, hardware products requiring diagnostics, enterprise systems with varied deployment environments, or any product where user-facing errors require systematic resolution approaches. Applies to help centers, knowledge bases, agent-facing tools, and in-product error handling.

**Strategic Frameworks Applied**:
- **Diagnostic Decision Tree Methodology** - Systematic problem isolation through binary/multi-choice pathways
- **Solution Hierarchy Optimization** - Ordering fixes by likelihood, simplicity, and user capability
- **Root Cause Analysis Framework** - Surface-level symptom to underlying cause mapping
- **Cognitive Load Reduction** - Progressive disclosure and chunking for complex multi-step diagnostics
- **Feedback Loop Integration** - Capture what worked to improve accuracy and content quality
- **Proactive Error Prevention** - Convert reactive troubleshooting into proactive best practices

---

## Variables

Define strategic variables for comprehensive troubleshooting guide architecture:

### Product & Technical Context
- `{{product_type}}`: SaaS platform | Mobile app | Hardware device | Desktop software | API/integration
- `{{technical_complexity}}`: Low (consumer-grade) | Medium (prosumer) | High (enterprise/developer)
- `{{error_frequency}}`: Common (daily user encounters) | Occasional (weekly) | Rare (edge cases)
- `{{integration_dependencies}}`: Standalone product | Light integrations (2-3 services) | Heavy dependencies (10+ integrations)
- `{{deployment_variability}}`: Controlled (SaaS, single environment) | Moderate (cloud + on-prem options) | High (customer-managed infrastructure)
- `{{user_technical_skill}}`: Non-technical end users | Power users | IT admins | Developers

### Error & Issue Taxonomy
- `{{primary_error_categories}}`: Authentication | Data sync | Performance | Integrations | Billing | UI/UX bugs
- `{{error_severity_levels}}`: Critical (system down) | High (feature broken) | Medium (degraded experience) | Low (cosmetic)
- `{{error_visibility}}`: Explicit error messages | Silent failures | Performance degradation | Unexpected behavior
- `{{common_error_patterns}}`: Top 20 support issues by ticket volume
- `{{seasonal_errors}}`: Tax season, holiday traffic, end-of-month processing spikes
- `{{cross-product_dependencies}}`: Issues spanning multiple systems or vendors

### Content Structure Variables
- `{{guide_format}}`: Step-by-step linear | Decision tree (flowchart) | FAQ-style | Video walkthrough | Hybrid
- `{{solution_depth}}`: Quick fixes only | Comprehensive (including advanced/technical) | Tiered by user skill
- `{{diagnostic_approach}}`: Symptom-based (user reports "can't login") | Error code-based (Error 403) | Use case-based (scenario descriptions)
- `{{visual_support}}`: Text only | Annotated screenshots | Video demonstrations | Interactive diagnostics
- `{{personalization_level}}`: Generic (one-size-fits-all) | Segmented (by plan/role) | Dynamic (based on user context)

### User Experience Variables
- `{{entry_points}}`: Help center search | In-product error messages | Chatbot suggestions | Support agent tools
- `{{escalation_paths}}`: Self-service only | Community forum | Contact support | Emergency hotline
- `{{success_verification}}`: "Did this solve your problem?" feedback | Automated status checks | Follow-up surveys
- `{{prevention_content}}`: Troubleshooting only | Includes "How to avoid this" sections | Proactive monitoring guides

### Governance & Operations Variables
- `{{content_ownership}}`: Support team | Engineering | Technical writers | Product managers
- `{{update_triggers}}`: Bug fixes | New features | User feedback | Support ticket trends
- `{{quality_assurance}}`: Peer review | User testing | Automated validation | Support agent feedback
- `{{localization_requirements}}`: English only | Key languages (3-5) | Global (15+ languages)
- `{{compliance_considerations}}`: None | Data privacy (GDPR) | Industry regulations (HIPAA, SOC2) | Accessibility (WCAG 2.1)

---

## Prompt

You are a technical content architect designing a comprehensive troubleshooting guide system for **{{product_type}}** with **{{technical_complexity}}** serving **{{user_technical_skill}}** users. Your goal is to enable 60-80% self-resolution of **{{primary_error_categories}}** issues through systematic diagnostic frameworks, clear solution hierarchies, and graceful escalation when self-service isn't sufficient.

### Problem Taxonomy & Prioritization

**Issue Inventory & Categorization:**
Analyze **{{common_error_patterns}}** to build taxonomy:

**Tier 1 - Critical Issues (Address First):**
- High frequency (>100 tickets/month)
- High impact (blocks core functionality)
- Clear error messages or symptoms
- Example: "Can't log in," "Payment failed," "Data not syncing"

**Tier 2 - Important Issues:**
- Moderate frequency (20-100 tickets/month)
- Significant user frustration
- May require 3-5 troubleshooting steps
- Example: "Slow performance," "Integration not working," "Export failing"

**Tier 3 - Edge Cases:**
- Low frequency (<20 tickets/month)
- Niche scenarios or specific configurations
- Often complex, multi-variable problems
- Example: "Conflict with obscure browser extension," "Rare API rate limit issue"

**Error Classification Framework:**
For each issue, define:
- **Symptom**: What the user experiences ("I can't see my dashboard")
- **Error Message** (if any): Exact text ("Error 403: Access Denied")
- **Underlying Cause**: Technical root cause (expired auth token, permission misconfiguration)
- **User Impact**: What can't they do? (Blocker vs. annoyance)
- **Complexity**: Simple (1-2 steps) | Moderate (3-5 steps) | Complex (6+ steps or technical expertise required)

**Prioritization Matrix:**
| Issue | Frequency | Impact | Self-Service Potential | Priority |
|-------|-----------|--------|------------------------|----------|
| Login failure | High | Critical | High (simple steps) | P0 |
| Sync delays | Medium | High | Medium (multi-step) | P1 |
| Export timeout | Low | Medium | Medium | P2 |
| Rare edge case | Very Low | Low | Low (requires support) | P3 |

### Diagnostic Framework Design

**For {{diagnostic_approach}}, structure content:**

**Symptom-Based Approach (User-Centric):**
Start with how users describe the problem in natural language:

```
Problem: "I can't log in"

Step 1: Identify the symptom more precisely
- Are you seeing an error message? → Go to 2A
- Page just reloads without feedback? → Go to 2B
- "Forgot password" not working? → Go to 2C

Step 2A: Error message troubleshooting
- "Incorrect password" → Reset password guide
- "Account locked" → Unlock instructions
- "Email not recognized" → Account verification

Step 2B: Silent failure troubleshooting
- Clear browser cache and cookies
- Try incognito/private mode
- Check browser console for errors → escalate to support with screenshot

Step 2C: Password reset issues
- Check spam folder for reset email
- Verify correct email address
- Try alternative email on account → contact support if none work
```

**Error Code-Based Approach (System-Centric):**
For products with explicit error codes:

```
Error 403: Access Denied

What this means: You're authenticated (logged in) but don't have permission to access this resource.

Common causes (in order of likelihood):
1. Your account doesn't have the required plan/tier (60% of cases)
   → Solution: Upgrade plan or contact admin

2. Admin hasn't granted you permission to this feature (30%)
   → Solution: Request access from workspace admin

3. Your session expired (8%)
   → Solution: Log out and back in

4. Server-side permission error (2%)
   → Solution: Contact support with error details
```

**Decision Tree Flowchart Approach (Visual):**
For complex, multi-variable problems:

```
[START] Data not syncing

    ↓
Are you online?
    → No → Connect to internet, try again
    → Yes ↓

Is your account active?
    → No → Reactivate subscription
    → Yes ↓

See an error message?
    → Yes → Reference error code guide
    → No ↓

Last sync >24 hours ago?
    → Yes → Force manual sync: Settings > Sync Now
    → No ↓

Only specific items not syncing?
    → Yes → Check file size/type limits
    → No → [ESCALATE] Contact support with diagnostic logs
```

### Solution Hierarchy & Structure

**For {{solution_depth}}, order solutions strategically:**

**Solution Ordering Principles:**
1. **Likelihood First**: Most common cause = first solution (80% of cases)
2. **Simplicity Bias**: If two solutions are equally likely, put simpler one first
3. **User Capability**: Non-destructive, reversible actions before risky ones
4. **Time to Resolution**: Quick wins before time-consuming diagnostics

**Standard Troubleshooting Guide Template:**

```markdown
# [Problem Title: User-Facing Symptom]

**Applies to:** [Product version, plan types, user roles]
**Severity:** [Critical | High | Medium | Low]
**Estimated time:** [2 minutes | 5 minutes | 15 minutes]

---

## What's happening?

[2-3 sentences describing the symptom and user impact in plain language]

If you're seeing [specific error message], this means [explanation in non-technical terms].

---

## Quick fixes (try these first)

These solve the problem 70-80% of the time:

### Solution 1: [Most common fix - simple, specific action]
**Why this works:** [1 sentence explanation]
**Steps:**
1. [Specific, actionable step with exact location/button]
2. [Next step]
3. [Verification: "You'll know it worked when..."]

**Time:** 2 minutes
**Success rate:** Fixes 50% of cases

---

### Solution 2: [Second most common fix]
**Why this works:** [1 sentence]
**Steps:**
1. [Action]
2. [Action]

**Time:** 3 minutes
**Success rate:** Fixes 25% of cases

---

## Advanced troubleshooting

If quick fixes didn't work, try these:

### Solution 3: [More complex or less common fix]
**Who this is for:** [IT admins | Power users | Users on specific plans]
**Prerequisites:** [Admin access | Specific settings enabled]
**Steps:**
[Detailed instructions with screenshots]

**Caution:** [Any risks or irreversible actions flagged]

---

## Still not working?

If you've tried all solutions above and the issue persists:

1. **Gather diagnostic information:**
   - Your account email: [____]
   - Browser/device: [____]
   - Error message (if any): [____]
   - Screenshot: [Attach]

2. **Contact support:**
   - [Live chat] (2-3 min wait) - Best for urgent issues
   - [Email support] (4-hour response) - Best for complex issues
   - [Community forum] - Get help from power users

3. **Workaround while we fix it:**
   [Temporary alternative approach if available]

---

## How to prevent this

[Proactive tips to avoid the issue in the future]
- [Best practice 1]
- [Best practice 2]

---

**Was this helpful?** [Yes] [No] [Partially]
**Did this solve your problem?** [Yes - Solved] [No - Still need help]
```

### Content Quality Standards

**Writing Guidelines for {{user_technical_skill}}:**

**For Non-Technical End Users:**
- **Language**: Plain English, no jargon (or define jargon on first use)
- **Tone**: Patient, encouraging, non-condescending
- **Instructions**: Extremely specific ("Click the blue 'Settings' button in the top-right corner")
- **Visuals**: Annotated screenshots for every step
- **Assumptions**: Never assume knowledge; over-explain rather than under-explain

**For Power Users/Admins:**
- **Language**: Technical terms acceptable, but still clear
- **Tone**: Efficient, respectful of their time
- **Instructions**: Can reference concepts ("Navigate to the IAM settings")
- **Visuals**: Screenshots for complex UI, text-only for simple steps
- **Assumptions**: Understands product architecture, but not every edge case

**For Developers:**
- **Language**: Technical, precise, includes code examples
- **Tone**: Peer-to-peer, solution-focused
- **Instructions**: Code snippets, API references, debugging commands
- **Visuals**: Architecture diagrams, log examples
- **Assumptions**: Comfortable with terminal, APIs, debugging tools

**Clarity Checklist:**
- [ ] Every step is actionable (not "check your settings" but "Go to Settings > Account > Privacy")
- [ ] Verification step included ("You'll see a green checkmark when successful")
- [ ] Error states addressed ("If you see X instead, try Y")
- [ ] Time estimates provided (manages expectations)
- [ ] Risks flagged ("Caution: This will delete all data")
- [ ] Alternatives offered (if primary solution doesn't apply to user's situation)

### Visual Content Strategy

**For {{visual_support}}, create:**

**Annotated Screenshots (Essential for UI-Heavy Troubleshooting):**
- **When to Use**: Every UI interaction step
- **Annotation Style**: Numbered red circles or arrows, yellow highlight boxes
- **Update SLA**: Within 48 hours of UI changes
- **Alt Text**: Describe what's shown for screen readers ("Screenshot showing the Settings menu with the 'Reset Password' option highlighted")

**Video Walkthroughs (For Complex Multi-Step Issues):**
- **When to Use**: 6+ step processes, requires showing dynamic actions (scrolling, dragging)
- **Length**: 2-4 minutes optimal
- **Format**: Screen recording with voiceover, captions required
- **Accessibility**: Transcript and audio description

**Diagnostic Flowcharts (For Multi-Variable Problems):**
- **When to Use**: Decision trees with 3+ branching paths
- **Format**: Mermaid diagrams, Lucidchart, or simple ASCII art for text-based
- **Style**: Clear question boxes → yes/no arrows → action boxes
- **Example**:
```
[Problem] → Is feature enabled?
   ↓ No → Enable in Settings
   ↓ Yes → Check permissions
      ↓ No access → Request admin
      ↓ Has access → Clear cache
```

**Error Message Screenshots (For Reproducibility):**
- **When to Use**: When asking user to verify they're seeing the same error
- **Content**: Full error message, error code, relevant context
- **Purpose**: Helps users confirm they're on the right troubleshooting path

### Integration & Contextual Placement

**For {{entry_points}}, optimize discovery:**

**In-Product Error Messages:**
```
[ERROR MODAL]
Payment Failed

We couldn't process your payment. This usually happens when:
• Card has insufficient funds
• Card is expired
• Billing address doesn't match

[Try Again] [Update Payment Method] [Troubleshooting Guide →]
```

**Help Center Search Optimization:**
- **Keyword Mapping**: Map how users describe problem to official terminology
  - User says: "broken," "not working," "won't load"
  - Map to: error code, feature name, technical cause
- **Search Synonyms**: "can't log in" = "login failed" = "authentication error" = "password not working"
- **Zero-Result Handling**: Failed search → "Here are common issues similar to your search"

**Chatbot Integration:**
```
User: "my dashboard is blank"
Bot: "Let's figure out why. Are you seeing:
A) Loading spinner that never finishes
B) Completely white screen
C) 'No data' message"

[Based on response, route to specific troubleshooting guide]
```

**Support Agent Tools (Internal):**
- **Agent Assist**: When agent opens ticket about "login issue," show top 3 relevant troubleshooting guides
- **Macro Library**: Pre-written responses with guide links
- **Escalation Context**: If user tried guide and failed, agent sees which solutions were attempted

### Feedback & Continuous Improvement

**For {{success_verification}}, implement loops:**

**Post-Resolution Feedback (Immediate):**
```
[After user clicks "This solved my problem"]

"Great! What solved it for you?"
☐ Solution 1: Cleared cache
☐ Solution 2: Reset password
☐ Solution 3: Updated browser
☐ Something else: [text field]

[This helps us improve the guide]
```

**Follow-Up Survey (24 hours later):**
```
Subject: Is your [issue] still resolved?

We saw you used our troubleshooting guide for [issue]. Is everything still working?

[Yes, still fixed] [Problem came back] [It never worked]

If the problem returned, we'll investigate further.
```

**Analytics to Track:**
- **Guide Views**: Which guides are accessed most (high pain points)
- **Completion Rate**: % who scroll to bottom (engagement indicator)
- **Helpfulness Score**: "Was this helpful?" yes/no ratio
- **Solution Effectiveness**: Which solution is marked as "what worked" most often
- **Escalation Rate**: % who click "Contact support" after reading guide
- **Time on Page**: <1 min = guide too complex or not relevant | 3-5 min = engaged reading

**Improvement Triggers:**
- **<60% Helpful Score**: Rewrite for clarity
- **High View + High Escalation**: Guide isn't solving the problem; investigate root cause
- **One Solution Dominates**: Move that solution to #1 position
- **High Drop-Off at Specific Step**: Simplify that step or add more guidance
- **Frequent "Something else worked" Comments**: Add new solution to guide

### Proactive Prevention Content

**For {{prevention_content}}, convert reactive to proactive:**

**"How to Avoid This" Sections:**
After troubleshooting guide, include:
```
## Prevent this from happening again

Now that it's fixed, here's how to avoid it in the future:

1. **Set up monitoring:** Enable [feature] to get alerts before issues occur
2. **Regular maintenance:** [Action] monthly to prevent buildup
3. **Best practices:**
   - Always [do this]
   - Never [do that] because [reason]
4. **Pro tip:** [Power user trick]
```

**Proactive Monitoring Guides:**
- "How to Set Up Health Checks for Your Integrations"
- "5 Early Warning Signs Your [Feature] Needs Attention"
- "Monthly Maintenance Checklist to Prevent Common Issues"

**Educational Content (Root Cause Understanding):**
- "Why Does [Error] Happen? (And How to Stop It)"
- "Understanding [Feature] Under the Hood"
- "Common Misconfigurations That Cause [Issue]"

### Escalation Path Design

**For {{escalation_paths}}, create seamless handoffs:**

**Self-Service Escalation (When Guides Don't Work):**
```
## Still not working?

If you've tried all solutions above, we'll need to investigate further.

**Before contacting support, gather this information:**
(This speeds up resolution)

1. **Your setup:**
   - Account ID or email: [____]
   - Browser/device: [____]
   - [Product] version: [____]

2. **What you've tried:**
   ☐ Solution 1: [Cleared cache]
   ☐ Solution 2: [Reset password]
   ☐ Solution 3: [Tried different browser]

3. **Error details:**
   - Error message: [____]
   - Screenshot: [Attach]
   - When it started: [____]

4. **Diagnostic logs** (if available):
   [How to export logs: Settings > Support > Download Logs]

**Contact support:**
- [Submit ticket] - Include all info above
- [Live chat] (2-3 min wait) - Best for urgent issues
- [Phone support] (Enterprise plans only)
```

**Agent Handoff Context:**
When user escalates from guide, provide agent with:
- Which guide they consulted
- Which solutions they attempted
- How long they spent troubleshooting
- Their device/browser/version info (if collected)

**Community Forum Escalation:**
```
## Can't find your exact issue?

Our community might have seen this before.

[Search Community Forum] or [Ask a Question]

**When posting, include:**
- Detailed description of the problem
- What you've tried (link to this guide)
- Screenshots or error messages
- Your product plan and version

Response time: Usually within 2-4 hours from community members or support team.
```

---

## Output Schema

```yaml
troubleshooting_guide_system:
  foundation:
    product_context:
      type: "{{product_type}}"
      complexity: "{{technical_complexity}}"
      user_skill_level: "{{user_technical_skill}}"
      primary_error_categories: ["Authentication", "Data sync", "Performance", "Integrations"]

    prioritization:
      tier_1_critical:
        criteria: "High frequency (>100 tickets/month) + High impact"
        examples: ["Can't log in", "Payment failed", "Data loss"]
        target_coverage: "100% have guides within 30 days"

      tier_2_important:
        criteria: "Moderate frequency (20-100 tickets/month) + Significant frustration"
        examples: ["Slow performance", "Integration errors"]
        target_coverage: "80% have guides within 90 days"

      tier_3_edge_cases:
        criteria: "Low frequency (<20 tickets/month) + Niche scenarios"
        examples: ["Rare API conflicts", "Legacy browser issues"]
        target_coverage: "Best effort, may escalate to support"

  diagnostic_framework:
    approach: "{{diagnostic_approach}}"

    symptom_based_structure:
      template: |
        Problem: [User-facing symptom]

        Step 1: Narrow down the symptom
        - [Option A] → Go to 2A
        - [Option B] → Go to 2B
        - [Option C] → Go to 2C

        Step 2A: [Specific troubleshooting path]
        Step 2B: [Alternative path]
        Step 2C: [Another alternative]

    error_code_structure:
      template: |
        Error [Code]: [Error Name]

        What this means: [Plain language explanation]

        Common causes (ordered by likelihood):
        1. [Cause 1] (60% of cases)
           → Solution: [Action]
        2. [Cause 2] (30% of cases)
           → Solution: [Action]
        3. [Cause 3] (8% of cases)
           → Solution: [Action]
        4. [Rare cause] (2% of cases)
           → Solution: [Action or escalate]

    decision_tree_structure:
      format: "Visual flowchart or ASCII diagram"
      example: |
        [START] Problem description
            ↓
        Question 1?
            → Answer A → Solution A
            → Answer B ↓
        Question 2?
            → Answer C → Solution C
            → Answer D → [ESCALATE]

  solution_hierarchy:
    ordering_principles:
      - "Likelihood first: Most common cause = first solution (80/20 rule)"
      - "Simplicity bias: Simpler solution first if equally likely"
      - "User capability: Non-destructive before risky actions"
      - "Time: Quick wins before time-consuming diagnostics"

    standard_template:
      structure: |
        # [Problem Title]

        **Applies to:** [Versions, plans, roles]
        **Severity:** [Level]
        **Estimated time:** [X minutes]

        ## What's happening?
        [2-3 sentence description]

        ## Quick fixes (try these first)

        ### Solution 1: [Most common - 50% success rate]
        **Why this works:** [Explanation]
        **Steps:**
        1. [Action]
        2. [Action]
        3. [Verification]
        **Time:** X minutes

        ### Solution 2: [Second most common - 25% success rate]
        [Repeat structure]

        ## Advanced troubleshooting
        [For complex or less common causes]

        ## Still not working?
        [Escalation path with diagnostic info collection]

        ## How to prevent this
        [Proactive tips]

        **Was this helpful?** [Feedback mechanism]

  content_quality:
    writing_standards:
      non_technical_users:
        language: "Plain English, define jargon"
        tone: "Patient, encouraging"
        instructions: "Extremely specific ('Click the blue Settings button in top-right')"
        visuals: "Annotated screenshot for every step"

      power_users:
        language: "Technical terms acceptable"
        tone: "Efficient, respectful of time"
        instructions: "Can reference concepts ('Navigate to IAM settings')"
        visuals: "Screenshots for complex UI only"

      developers:
        language: "Technical, precise, code examples"
        tone: "Peer-to-peer"
        instructions: "Code snippets, CLI commands, API calls"
        visuals: "Architecture diagrams, log examples"

    clarity_checklist:
      - "Every step is actionable (not vague)"
      - "Verification step included"
      - "Error states addressed"
      - "Time estimates provided"
      - "Risks flagged"
      - "Alternatives offered"

  visual_content:
    strategy: "{{visual_support}}"

    screenshot_standards:
      when_to_use: "Every UI interaction step"
      annotation_style: "Numbered red circles, yellow highlight boxes"
      update_sla: "Within 48 hours of UI changes"
      alt_text: "Required for accessibility"

    video_standards:
      when_to_use: "6+ step processes, dynamic actions"
      length: "2-4 minutes"
      format: "Screen recording + voiceover + captions"
      accessibility: "Transcript and audio description"

    flowchart_standards:
      when_to_use: "Decision trees with 3+ branching paths"
      tools: "Mermaid, Lucidchart, or ASCII diagrams"
      style: "Clear question boxes → yes/no arrows → action boxes"

  contextual_placement:
    entry_points: "{{entry_points}}"

    in_product_errors:
      format: "Error modal with embedded troubleshooting link"
      example: |
        [ERROR MODAL]
        Payment Failed
        Common causes: Insufficient funds | Expired card | Address mismatch
        [Try Again] [Update Card] [Troubleshooting Guide →]

    help_center_search:
      keyword_mapping: "Map user language to technical terms"
      synonyms: "'can't log in' = 'login failed' = 'auth error'"
      zero_result_handling: "Suggest similar common issues"

    chatbot_integration:
      approach: "Ask clarifying questions, route to specific guide"
      example: |
        User: "my dashboard is blank"
        Bot: "Let's narrow it down:
        A) Loading spinner forever
        B) Completely white screen
        C) 'No data' message"

    agent_tools:
      agent_assist: "Show top 3 relevant guides when ticket opened"
      macro_library: "Pre-written responses with guide links"
      escalation_context: "Which solutions user already tried"

  feedback_loops:
    immediate_feedback:
      post_resolution: |
        "Great! What solved it for you?"
        ☐ Solution 1
        ☐ Solution 2
        ☐ Something else: [text field]

    follow_up_survey:
      timing: "24 hours after resolution"
      question: "Is your [issue] still resolved?"
      options: ["Yes, still fixed", "Problem came back", "It never worked"]

    analytics:
      - metric: "Guide views"
        insight: "Which issues are most common"

      - metric: "Completion rate"
        insight: "% who scroll to bottom (engagement)"

      - metric: "Helpfulness score"
        insight: "'Was this helpful?' yes/no ratio"
        action_threshold: "<60% yes = rewrite guide"

      - metric: "Solution effectiveness"
        insight: "Which solution marked as 'what worked' most often"
        action: "Move most effective solution to top"

      - metric: "Escalation rate"
        insight: "% who contact support after reading guide"
        action_threshold: ">40% = guide isn't solving problem"

      - metric: "Time on page"
        insight: "<1 min = too complex | 3-5 min = engaged"

    improvement_triggers:
      - condition: "<60% helpful score"
        action: "Rewrite for clarity"

      - condition: "High views + high escalation"
        action: "Guide isn't working; investigate root cause"

      - condition: "One solution dominates effectiveness"
        action: "Move to #1 position"

      - condition: "High drop-off at specific step"
        action: "Simplify step or add more guidance"

  prevention_content:
    strategy: "{{prevention_content}}"

    avoid_this_sections:
      template: |
        ## Prevent this from happening again
        1. **Set up monitoring:** [Proactive alerts]
        2. **Regular maintenance:** [Monthly tasks]
        3. **Best practices:** [Do's and don'ts]
        4. **Pro tip:** [Power user trick]

    proactive_monitoring:
      - "How to Set Up Health Checks"
      - "5 Early Warning Signs"
      - "Monthly Maintenance Checklist"

    educational_content:
      - "Why Does [Error] Happen? (And How to Stop It)"
      - "Understanding [Feature] Under the Hood"
      - "Common Misconfigurations"

  escalation_paths:
    strategy: "{{escalation_paths}}"

    self_service_escalation:
      pre_contact_checklist: |
        Before contacting support:
        1. Your setup: Account ID, browser, version
        2. What you've tried: ☐ Solution 1 ☐ Solution 2
        3. Error details: Message, screenshot, timing
        4. Diagnostic logs: [Export instructions]

    agent_handoff_context:
      - "Which guide user consulted"
      - "Which solutions attempted"
      - "Time spent troubleshooting"
      - "Device/browser/version info"

    community_forum:
      when_to_suggest: "Niche issues, configuration questions"
      posting_template: |
        - Detailed problem description
        - What you've tried (link to guide)
        - Screenshots or error messages
        - Your plan and version

  success_metrics:
    self_resolution_rate: "60-80% of guide users resolve without escalating"
    guide_helpfulness: ">70% 'Was this helpful? Yes' score"
    support_deflection: "30-50% reduction in tickets for documented issues"
    average_resolution_time: "<10 minutes for quick fixes, <30 for advanced"
    coverage: "Top 20 issues have comprehensive guides"
    freshness: "<5% guides outdated (last reviewed >6 months ago)"
```

---

## Examples

### Example 1: SaaS Platform - "Data Not Syncing"

**Context**: Top 3 support issue, 150 tickets/month, affects 5% of users weekly.

**Guide Structure**: Symptom-based decision tree

```markdown
# Data Not Syncing

**Applies to:** All plans, all devices
**Severity:** High (core feature blocked)
**Estimated time:** 5-10 minutes

## What's happening?

Your recent changes aren't appearing across devices, or you're seeing outdated data. This usually happens when the sync service is interrupted or your app needs a refresh.

---

## Quick fixes (try these first)

### Solution 1: Force a manual sync
**Why this works:** Sync can pause if app is in background too long. Manual sync kickstarts it.
**Steps:**
1. Open the app
2. Pull down from the top of the screen (you'll see a refresh icon)
3. Wait for "Last synced: Just now" to appear at the bottom

**Time:** 1 minute
**Success rate:** Fixes 40% of cases

✅ **Verification:** Check if your latest changes now appear. If yes, you're all set!

---

### Solution 2: Check your internet connection
**Why this works:** Sync requires active internet. Weak wifi or cellular can cause silent failures.
**Steps:**
1. Open your device's wifi/cellular settings
2. Confirm you're connected (not just showing bars, but actually connected)
3. Test by opening a website in your browser
4. If offline, reconnect and try manual sync (Solution 1) again

**Time:** 2 minutes
**Success rate:** Fixes 30% of cases

---

### Solution 3: Clear app cache (doesn't delete your data)
**Why this works:** Corrupted cache can block sync. Clearing resets it.

**iPhone:**
1. Go to iPhone Settings > [App Name] > Storage
2. Tap "Offload App" (this clears cache but keeps data)
3. Tap "Reinstall App"
4. Open app and log back in

**Android:**
1. Go to Settings > Apps > [App Name] > Storage
2. Tap "Clear Cache" (NOT "Clear Data")
3. Reopen app

**Time:** 3 minutes
**Success rate:** Fixes 20% of cases

---

## Advanced troubleshooting

### Solution 4: Check account storage limits
**Who this is for:** Users on Free or Basic plans
**Why this works:** If you've exceeded your storage, new data won't sync until you free up space.

**Steps:**
1. Go to app Settings > Account > Storage
2. If you see "Storage Full":
   - Delete old files you don't need, OR
   - Upgrade to a plan with more storage
3. After freeing space, try manual sync (Solution 1)

---

### Solution 5: Log out and back in
**Caution:** Only do this if you know your password. If not, reset it first.

**Steps:**
1. Settings > Account > Log Out
2. Force-close the app (swipe up from app switcher)
3. Reopen app and log back in
4. Your data will re-sync (may take 2-3 minutes)

**Time:** 5 minutes
**Success rate:** Fixes 8% of cases

---

## Still not working?

If you've tried all solutions and sync still fails:

1. **Gather diagnostic information:**
   - Your account email: [____]
   - Device: [iPhone 14, iOS 17.2]
   - Last successful sync time: [Check Settings > Account]
   - Error message (if any): [Screenshot]

2. **Export sync logs** (helps us diagnose):
   - Settings > Support > Download Sync Logs
   - Attach to your support ticket

3. **Contact support:**
   - [Live chat] (3-5 min wait) - Fastest option
   - [Email support] (2-hour response)

4. **Workaround while we investigate:**
   - Use the web version at app.example.com (sync works normally there)
   - Your data is safe; we'll fix the mobile sync issue

---

## How to prevent this

**Enable sync monitoring:**
Settings > Notifications > Enable "Sync failed" alerts

**Best practices:**
- Keep app updated (auto-updates recommended)
- Don't force-quit the app frequently (let it sync in background)
- On poor internet, wait until you have stable wifi to make large changes

**Pro tip:** If you work offline often, enable "Offline Mode" in Settings. Changes will queue and sync automatically when back online.

---

**Was this helpful?** [Yes] [No] [Partially]
**Did this solve your problem?** [Yes - Solved!] [No - Still need help]

[If "Yes - Solved"] "Great! Which solution worked for you?"
☐ Manual sync
☐ Cleared cache
☐ Logged out/in
☐ Something else: [____]
```

**Results**: 65% self-resolution rate, reduced "sync" tickets from 150 to 50/month.

---

### Example 2: E-Commerce - "Order Not Arriving"

**Context**: 200 inquiries/month, mostly pre-escalation anxiety, not actual issues.

**Guide Structure**: FAQ-style with proactive reassurance

```markdown
# My Order Hasn't Arrived - What to Do

**Expected delivery:** Check your order confirmation email for estimated date
**Severity:** Low (most orders arrive on time; this guides early action)

## Is your order actually late?

**Before panicking, check:**
- Order confirmation email for **estimated delivery date** (not ship date)
- Tracking link: Most packages update within 24 hours of shipping
- Shipping method: Standard = 5-7 business days | Express = 2-3 days

**If it's before the estimated date:** Your order is likely on its way. Tracking can be slow to update.

---

## What to do if delivery date has passed

### Step 1: Check tracking status
[Track your order] → Enter order # or tracking #

**If tracking says "Delivered":**
- Check your mailbox, porch, and building entrance
- Ask family members or neighbors
- Some carriers mark "delivered" when out for delivery (check again in 4 hours)
- Check with building management (apartments/offices)

**If tracking says "Out for Delivery":**
- It's on the truck; should arrive by end of day (9 PM)
- Stay patient; carrier will attempt delivery

**If tracking says "Exception" or "Delayed":**
- Weather, holidays, or carrier issues (not your fault)
- Usually resolves within 2-3 business days
- We'll automatically extend delivery guarantee

**If tracking hasn't updated in 5+ days:**
→ Proceed to Step 2

---

### Step 2: Contact us for investigation

We'll investigate with the carrier and either:
- Locate your package and provide updated ETA, OR
- Send a replacement at no cost, OR
- Issue a full refund

**What we need from you:**
- Order number: [In confirmation email]
- Tracking number: [If you have it]
- Delivery address: [Confirm it's correct]

[Contact Support] - Average response: 2 hours

---

## How to prevent this

**For future orders:**
- **Add delivery instructions:** "Leave at side door" (added at checkout)
- **Require signature:** Prevents "porch pirates" (available for orders >$100)
- **Use alternative address:** Ship to work or a trusted neighbor if home delivery is risky

**Track proactively:**
- Download our app for push notifications when package ships/delivers
- Sign up for carrier alerts (FedEx/UPS/USPS send text updates)

---

**Was this helpful?** [Yes] [No]
```

**Results**: 70% of users find package before contacting support; inquiry volume dropped 40%.

---

### Example 3: API Product - "Error 429: Rate Limit Exceeded"

**Context**: Developer-focused, 50 tickets/month, often due to misconfiguration.

**Guide Structure**: Error code + technical solutions

```markdown
# Error 429: Rate Limit Exceeded

**Error message:** `{"error": "rate_limit_exceeded", "retry_after": 60}`
**Applies to:** All API plans (limits vary by tier)

## What this means

Your application has sent too many requests in a short time period, exceeding your plan's rate limit. The API is temporarily blocking additional requests to protect service stability.

**Your plan's limits:**
- Free: 100 requests/hour
- Pro: 1,000 requests/hour
- Enterprise: 10,000 requests/hour (custom limits available)

---

## Quick fixes

### Solution 1: Implement exponential backoff (recommended)
**Why this works:** Retrying immediately will hit the limit again. Exponential backoff spaces out retries.

**Code example (Python):**
```python
import time
import requests

def api_call_with_retry(url, max_retries=3):
    for i in range(max_retries):
        response = requests.get(url)
        if response.status_code == 429:
            retry_after = int(response.headers.get('Retry-After', 60))
            print(f"Rate limited. Retrying in {retry_after} seconds...")
            time.sleep(retry_after)
        else:
            return response
    raise Exception("Max retries exceeded")
```

**Time:** 10 minutes to implement
**Success rate:** Prevents 90% of future rate limit errors

---

### Solution 2: Check for request loops or inefficient code
**Why this works:** Accidentally recursive calls or polling too frequently can exhaust limits quickly.

**Debugging steps:**
1. Add logging to track request count:
   ```python
   print(f"API call made: {datetime.now()}")
   ```
2. Review logs to identify patterns (e.g., 100 calls in 1 minute)
3. Common culprits:
   - Polling endpoints every second (switch to webhooks or 60s+ intervals)
   - Infinite loops missing exit conditions
   - Multiple parallel processes hitting same endpoint

---

### Solution 3: Upgrade your plan (if you've legitimately outgrown limits)
**Who this is for:** High-traffic applications
**Check if you need upgrade:**
- Are you consistently hitting limit?
- Is your app in production with real users (not testing)?
- Do you need >1,000 requests/hour?

If yes → [Upgrade Plan] or [Contact Sales] for custom limits

---

## Advanced troubleshooting

### Solution 4: Cache responses to reduce redundant calls
**Example:** If you're fetching user data that changes infrequently, cache it locally:
```python
import redis
cache = redis.Redis()

def get_user(user_id):
    cached = cache.get(f"user:{user_id}")
    if cached:
        return cached

    # Make API call only if not cached
    response = requests.get(f"/api/users/{user_id}")
    cache.setex(f"user:{user_id}", 3600, response.json())  # Cache 1 hour
    return response.json()
```

### Solution 5: Batch requests
**If you're making 100 separate calls to fetch user data:**
Use our batch endpoint: `POST /api/users/batch` (fetches up to 100 users in 1 request)

---

## Still hitting limits?

**Contact us if:**
- You've implemented best practices above and still need higher limits
- You're an Enterprise customer needing custom rate limits
- You believe your limit is incorrectly applied

**Include in your request:**
- Account ID or API key (first 8 characters only)
- Current usage patterns (requests/hour)
- Business justification for higher limits

[Contact API Support] - Response time: 4 hours (24/7 for Enterprise)

---

## How to prevent this

**Best practices:**
1. **Implement rate limit headers:** Check `X-RateLimit-Remaining` header before each call
2. **Use webhooks:** Instead of polling, subscribe to events at `/api/webhooks`
3. **Batch operations:** Use batch endpoints when fetching multiple resources
4. **Cache aggressively:** Don't fetch data you already have
5. **Monitor usage:** Set up alerts when you hit 80% of your limit

**Monitoring dashboard:**
[View your API usage] - Real-time rate limit consumption

---

**Was this helpful?** [Yes] [No]
**Did this solve your issue?** [Yes] [No] [Need higher limits]
```

**Results**: 75% of developers solve without contacting support; Enterprise upgrade requests increased 20% (revenue positive).

---

## Success Metrics

- **Self-Resolution Rate**: 60-80% of users who read guide resolve issue without contacting support
- **Guide Helpfulness**: >70% "Was this helpful? Yes" score across all guides
- **Support Deflection**: 30-50% reduction in ticket volume for documented issues (measured 90 days post-publication)
- **Average Resolution Time**: <10 minutes for quick fixes; <30 minutes for advanced troubleshooting
- **Coverage**: Top 20 support issues have comprehensive, tested guides
- **Freshness**: <5% of guides outdated (last reviewed >6 months ago without product changes)
- **Solution Effectiveness**: #1 solution solves >50% of cases (validates prioritization)
- **Escalation Quality**: <20% of escalated cases could have been solved by guide (indicates guide clarity)

---

## Best Practices

- **Start with Symptoms, Not Causes**: Users search "can't log in," not "authentication token expired"
- **Order Solutions by Likelihood**: 80% of cases = first solution; save edge cases for "Advanced" section
- **Be Ruthlessly Specific**: "Click Settings" is vague; "Click the gear icon in top-right corner" is actionable
- **Include Verification Steps**: "You'll know it worked when..." gives users confidence
- **Flag Risks**: "Caution: This deletes data" prevents panic and support escalation
- **Provide Workarounds**: If no fix exists yet, offer temporary alternative
- **Capture What Worked**: "Which solution solved it?" feedback improves guide accuracy over time
- **Update Within 48 Hours of UI Changes**: Outdated screenshots destroy trust instantly
- **Test with Real Users**: What's obvious to you isn't obvious to customers
- **Convert to Prevention**: Every reactive guide should spawn proactive "How to avoid this" content

---

## Common Pitfalls

- **Too Much Context**: Users want solutions, not architecture essays; save background for "Learn more" links
- **Assuming Knowledge**: "Configure your firewall" means nothing to non-technical users
- **No Visual Aids**: Text-only guides have 40% lower success rates for UI-heavy tasks
- **One-Size-Fits-All**: Power users and beginners need different levels of detail; tier or personalize
- **Burying the Fix**: Putting most common solution at the bottom after 10 rare edge cases
- **Missing Escalation Path**: Users hit a wall with no way forward = frustration and churn
- **No Feedback Loop**: Publishing without "Was this helpful?" means flying blind on effectiveness
- **Stale Content**: Product evolves; guides don't; leads to confused users and support escalation
- **Jargon Overload**: Using internal terminology users don't know ("auth service" vs. "login system")
- **Ignoring Mobile**: 40% of support searches are mobile; if guide isn't mobile-friendly, it fails
- **Not Tracking Effectiveness**: Can't improve what you don't measure; instrument everything

---

## LinkedIn Post Framework System v1.0

**Purpose**: Establish a repeatable, scalable system for creating high-performing LinkedIn posts that drive measurable business outcomes through structured storytelling, algorithmic optimization, and conversion architecture.

**Context**: Use this framework when building a content production system that enables founders and executives to consistently create engaging LinkedIn content without starting from scratch each time. This framework moves beyond individual post creation to establish templates, quality standards, and performance patterns that can be executed by the founder or delegated to content teams while maintaining voice authenticity and strategic alignment.

**Strategic Frameworks Applied**:
- **Attention Economics** - Hooks, retention, and engagement optimization in a saturated feed
- **Storytelling Architecture** - Narrative structures that create emotional resonance and memorability
- **Algorithm Optimization** - Platform mechanics that govern distribution and virality
- **Conversion Funnel Design** - Moving from awareness to action within post structure
- **Content Operations Management** - Templatization and scalability systems
- **Performance Attribution** - Linking content formats to business outcomes

---

## Variables

Define strategic variables for systematic post creation:

### Content Context Variables
- `{{post_objective}}`: Primary goal (Thought leadership | Lead generation | Talent attraction | Brand awareness | Community building | Product education)
- `{{target_audience_segment}}`: Who this post primarily serves
- `{{business_outcome}}`: What success looks like (Comments, shares, profile visits, DMs, website clicks, etc.)
- `{{content_pillar}}`: Which brand pillar this post supports
- `{{post_timing}}`: Strategic timing considerations (industry event, company milestone, trending topic, evergreen)

### Story/Content Variables
- `{{core_insight}}`: The single key takeaway or "aha moment"
- `{{proof_point}}`: Data, case study, or evidence supporting the insight
- `{{emotional_hook}}`: Why the audience should care emotionally
- `{{contrarian_angle}}`: What makes this perspective different or surprising
- `{{practical_application}}`: How the audience can use this insight
- `{{credibility_signal}}`: Why you're qualified to share this perspective

### Format & Structure Variables
- `{{post_length}}`: Character count target (short: 300-600, medium: 600-1200, long: 1200-2000)
- `{{format_type}}`: Text-only | Text + image | Text + carousel | Text + video | Text + poll | Document post
- `{{visual_treatment}}`: If visual, design approach and messaging hierarchy
- `{{hook_style}}`: Opening pattern (question, bold claim, story opener, data point, personal admission)
- `{{structure_template}}`: Which narrative framework to apply

### Engagement Architecture Variables
- `{{cta_type}}`: Call-to-action approach (Question, External link, DM prompt, Tag someone, Share request)
- `{{comment_strategy}}`: What kind of comments you want to generate (Discussion, Stories, Data, Advice)
- `{{engagement_timing}}`: When to engage with comments (First hour, Throughout day, Specific windows)
- `{{conversation_depth}}`: How deep to go in comment responses (Simple thanks, Extended dialogue, Ask follow-ups)

### Optimization Variables
- `{{keyword_integration}}`: Search terms to include for discoverability
- `{{tag_strategy}}`: When to tag people/companies (sparingly, strategically, never)
- `{{hashtag_approach}}`: Number and selection of hashtags (0-3 recommended)
- `{{link_placement}}`: When and where to include external links (First comment vs. in-post)
- `{{posting_time}}`: Optimal time based on audience timezone and LinkedIn activity patterns

### Performance Measurement Variables
- `{{success_threshold}}`: Minimum engagement rate to consider post successful
- `{{north_star_metric}}`: Primary metric tied to {{post_objective}}
- `{{attribution_mechanism}}`: How to track business outcome from post (UTM links, DM tracking, profile view correlation)
- `{{iteration_signal}}`: What metric indicates this format should be repeated vs. retired

---

## Prompt

You are a content strategist designing a scalable LinkedIn post framework for **{{founder_name}}** that systematically achieves **{{post_objective}}** by reaching **{{target_audience_segment}}** and driving **{{business_outcome}}**. Create a comprehensive post structure, production system, and optimization playbook.

### Hook Architecture (First 150 Characters)

The hook determines whether someone stops scrolling. Design 5 distinct hook patterns optimized for **{{hook_style}}**:

**Pattern 1: Contrarian Statement**
- Structure: "[Everyone believes X]. I learned [opposite] the hard way."
- When to use: When you have a strong **{{contrarian_angle}}** backed by **{{proof_point}}**
- Example template: "Everyone says [conventional wisdom]. After [experience], I disagree. Here's why:"
- Psychological trigger: Curiosity + Pattern disruption

**Pattern 2: Vulnerability Admission**
- Structure: "I [failed/struggled/was wrong about] [relatable challenge]."
- When to use: When **{{credibility_signal}}** comes from learning, not just winning
- Example template: "I lost [specific thing] by [specific mistake]. Don't make my mistake:"
- Psychological trigger: Relatability + Emotional connection

**Pattern 3: Data Shock**
- Structure: "[Surprising statistic] about [audience pain point]."
- When to use: When **{{proof_point}}** is a compelling number or trend
- Example template: "[X]% of [audience] fail at [challenge]. Here's the pattern I'm seeing:"
- Psychological trigger: Surprise + Relevance

**Pattern 4: Timely Relevance**
- Structure: "[Current event/trend] changes everything about [industry topic]."
- When to use: When **{{post_timing}}** connects to news cycle or industry moment
- Example template: "While everyone's talking about [trend], here's what they're missing:"
- Psychological trigger: FOMO + Insider perspective

**Pattern 5: Promise/Transformation**
- Structure: "How [outcome] went from [before state] to [after state] in [timeframe]."
- When to use: When **{{practical_application}}** delivers clear, measurable results
- Example template: "We went from [metric A] to [metric B] in [time]. The framework:"
- Psychological trigger: Aspiration + Specificity

### Body Structure (Main Content)

Based on **{{post_length}}** and **{{structure_template}}**, select optimal narrative framework:

**Framework A: Problem-Agitate-Solve (300-600 characters)**
```
Hook: Attention-grabbing opener
Problem: "Here's what most [audience] get wrong:"
Agitation: Why this problem is costly/painful
Solution: Your 3-5 point framework
Proof: Brief result/example
CTA: Engagement question
```
- Best for: Quick, tactical insights
- Engagement pattern: High comment velocity, moderate depth
- Risk: Can feel formulaic if overused

**Framework B: Story-Lesson-Application (600-1200 characters)**
```
Hook: Story opening
Story: Narrative with specific details, dialogue, emotion
Turning point: The moment of realization
Lesson: What you learned (3-5 bullets)
Application: How reader can apply
CTA: "What's your experience with this?"
```
- Best for: Building emotional connection and memorability
- Engagement pattern: Story-sharing in comments, high saves
- Risk: Needs strong storytelling skill to execute

**Framework C: Thesis-Evidence-Implications (1200-2000 characters)**
```
Hook: Bold claim or question
Thesis: Your core argument with **{{contrarian_angle}}**
Context: Why this matters now
Evidence:
  • Data point 1 with source
  • Case study example
  • Expert perspective
  • Personal experience
Counter-argument: Address the obvious objection
Implications: "So what does this mean for you?"
  • Implication 1
  • Implication 2
  • Implication 3
CTA: "Where am I wrong? Challenge me in the comments."
```
- Best for: Thought leadership positioning
- Engagement pattern: Deep discussion, debate, high-quality engagement
- Risk: Length requires exceptional quality to maintain attention

**Framework D: Data-Driven Listicle (600-1200 characters)**
```
Hook: "I analyzed [X] and found [surprising pattern]"
Setup: What you studied and why
Findings:
  1. [Finding with data point]
     → Why it matters

  2. [Finding with data point]
     → Why it matters

  3-5. [Continue pattern]
Synthesis: The common thread
Action: One thing to do differently
CTA: "What trends are you seeing?"
```
- Best for: Establishing expertise through research
- Engagement pattern: High saves, shares, lower comments
- Risk: Requires actual data/analysis

### Visual Integration Strategy

For **{{format_type}}** beyond text-only:

**Image Selection Criteria:**
- **Supports the narrative** (Not decorative; advances understanding)
- **Readable in feed** (Text on images: 40pt+ font, high contrast)
- **Brand consistent** (Color palette, style, quality level)
- **Mobile-optimized** (70% of LinkedIn traffic is mobile)

**Carousel Design Framework:**
- Slide 1: Hook + Promise ("7 frameworks for [outcome]")
- Slides 2-8: One insight per slide, visual hierarchy clear
- Final Slide: CTA + Profile promotion ("Follow @name for more")
- Design: Consistent template, 1024x1024px, save as PDF for upload
- Copy: 50-100 words per slide, one idea per slide

**Video Specifications:**
- Length: 30-90 seconds optimal (LinkedIn rewards <1 min)
- Hook: First 3 seconds must stop scroll (text overlay, movement, face)
- Captions: Required (80% watch without sound)
- CTA: In video + in caption text
- Format: Square (1:1) or vertical (4:5) for feed optimization

### Call-to-Action Engineering

Design CTAs aligned to **{{cta_type}}** and **{{business_outcome}}**:

**Engagement-Focused CTAs** (When goal is visibility + algorithm boost):
- "What's your take on this?"
- "Have you experienced this? Share in the comments."
- "Where am I wrong?"
- "What would you add to this list?"
- Structure: Open-ended question that invites personal stories/perspectives

**Conversion-Focused CTAs** (When goal is leads, traffic, opportunities):
- "I wrote a full breakdown of this framework. Link in my featured section."
- "Want the template? DM me 'FRAMEWORK' and I'll send it over."
- "We're hiring [role]. If this resonates, check our careers page: [link in comments]"
- Structure: Clear value exchange + friction-appropriate ask

**Community-Building CTAs** (When goal is relationship development):
- "Tag someone who needs to hear this."
- "Who's the best example of [topic] you've seen?"
- "I'd love to hear from [specific role]. How does this land?"
- Structure: Invites specific audience segments into conversation

### Comment Engagement Playbook

**First Hour Response Strategy:**
LinkedIn algorithm heavily weights early engagement. For the first 60 minutes:
- **Goal**: 10+ meaningful comments (not just reactions)
- **Your role**: Respond to every comment with substance (not just "thanks!")
- **Tactics**:
  - Ask follow-up questions
  - Add additional examples
  - Tag others into the discussion
  - Upvote insightful comments to surface them

**Response Templates by Comment Type:**

*Agreement/Positive Feedback:*
"Appreciate this, [Name]! Have you found [related tactic] works as well?"
[Adds value vs. generic "thanks"]

*Disagreement/Pushback:*
"Interesting perspective, [Name]. Help me understand—are you seeing [counter-example]?"
[Curiosity, not defensiveness]

*Story Share:*
"This is gold, [Name]. Especially [specific detail they mentioned]. How did [related question]?"
[Shows you read it + extends conversation]

*Question:*
"Great question. [Thoughtful answer]. Have you tried [related approach]?"
[Answers + asks new question to continue dialogue]

### Optimization & Testing Framework

**A/B Testing Methodology:**
Test one variable at a time across 4+ posts:
- **Week 1-2**: Test hook styles (Contrarian vs. Data vs. Story)
- **Week 3-4**: Test post length (Short vs. Long)
- **Week 5-6**: Test CTA type (Question vs. Link vs. DM)
- **Week 7-8**: Test format (Text vs. Carousel vs. Video)

**Performance Analysis Dashboard:**
Track weekly in spreadsheet/tool:
| Post Date | Hook Type | Structure | Length | Format | Impressions | Engagement Rate | Comments | Shares | Business Outcome |
|-----------|-----------|-----------|--------|--------|-------------|-----------------|----------|--------|------------------|

**Identify Patterns:**
- Which **{{structure_template}}** drives highest **{{north_star_metric}}**?
- What **{{post_length}}** your audience prefers?
- Which **{{hook_style}}** generates most stops?
- What **{{cta_type}}** converts to **{{business_outcome}}**?

**Iteration Rules:**
- If post achieves <2% engagement rate → Analyze what failed (hook, relevance, CTA?) and avoid pattern
- If post achieves 4%+ engagement → Deconstruct what worked and create template
- If format consistently underperforms → Phase out; double-down on winners
- Monthly review: Update this framework based on data

### Production System & Workflow

**Content Banking (Capture Ideas Throughout Week):**
1. **Source Material Collection**:
   - Customer conversations → "Here's what I'm hearing from customers..."
   - Team meetings → "My team asked great question today..."
   - Industry news → "Everyone's talking about X, here's what they miss..."
   - Personal experience → "I failed at [thing] this week. Lesson learned:"

2. **Idea Documentation Format**:
   - Core insight (1 sentence)
   - Proof point or story
   - Potential hook angles (2-3 options)
   - Draft structure template to use
   - Target posting date

**Batching Workflow (Create Week's Content in 90 Minutes):**
- Monday 9am: Review content bank, select 3 posts for the week
- Draft all 3 in docs (don't polish yet)
- Tuesday 10am: Edit and refine drafts
- Schedule throughout week in LinkedIn or Buffer/Hootsuite

**Quality Checklist Before Publishing:**
- [ ] Hook stops scroll in first 150 characters
- [ ] Post delivers on hook promise
- [ ] Mobile-friendly formatting (line breaks, bullets, emojis used strategically)
- [ ] One clear CTA that matches objective
- [ ] Proofread for typos (damages credibility)
- [ ] Aligns with **{{content_pillar}}** strategy
- [ ] No more than 3 hashtags (if any)
- [ ] Links in first comment (if needed) vs. post body

---

## Output Schema

```yaml
post_framework_system:
  post_brief:
    objective: "{{post_objective}}"
    target_audience: "{{target_audience_segment}}"
    desired_outcome: "{{business_outcome}}"
    content_pillar: "{{content_pillar}}"
    timing_rationale: "{{post_timing}}"

  content_development:
    core_insight: "The single key takeaway"
    proof_points:
      - "Data/evidence item 1"
      - "Story/case study"
      - "Expert quote or research"
    emotional_hook: "Why audience cares"
    contrarian_angle: "What's different about this take"
    practical_application: "How to use this"
    credibility_signal: "Why I can speak to this"

  structure:
    selected_framework: "Framework B: Story-Lesson-Application"
    target_length: "800 characters"
    format_type: "Text + image"

    hook:
      option_1: "Story opening hook"
      option_2: "Data-driven hook"
      option_3: "Contrarian statement hook"
      selected: "option_1"
      rationale: "Story hooks outperform for this audience"

    body_outline:
      section_1: "Story setup: Customer conversation that surprised me"
      section_2: "The realization: What I learned"
      section_3: "The framework (4 bullets)"
      section_4: "Results we've seen"

    visual_element:
      type: "Simple quote graphic"
      content: "Key lesson pulled from post as quote"
      design_notes: "Brand colors, founder photo, 1080x1080"

    cta:
      primary_cta: "What's your experience with this? Drop a comment."
      cta_type: "Engagement-focused question"
      fallback_cta: "Link to deep-dive article in featured section"

  optimization:
    keywords: ["keyword 1", "keyword 2", "keyword 3"]
    hashtags: ["#StartupGrowth", "#Founders", "#B2BSales"]
    posting_time: "Tuesday 8:30am EST"
    link_strategy: "First comment"

  engagement_plan:
    first_hour_goals:
      - "Respond to all comments within 15 min"
      - "Seed 3 comments from team/network"
      - "Share to relevant LinkedIn groups"

    response_approaches:
      agreement: "Ask follow-up question to deepen conversation"
      disagreement: "Acknowledge + seek to understand their perspective"
      story_share: "Amplify their story, ask clarifying question"
      question: "Answer thoroughly + ask their experience"

    conversation_starters:
      - "Tag someone who nails this"
      - "Ask specific sub-segment: 'Curious how this lands for CTOs...'"

  measurement:
    success_metrics:
      north_star: "{{north_star_metric}}: e.g., 15+ meaningful comments"
      secondary:
        - "4%+ engagement rate"
        - "5+ profile visits from post"
        - "2+ DM conversations started"

    tracking_mechanisms:
      - "LinkedIn analytics: Impressions, engagement rate, follower gain"
      - "UTM link if included: Traffic to website"
      - "DM log: Track conversations initiated"
      - "CRM tag: Opportunities sourced from LinkedIn"

    performance_review:
      24_hour_check: "Engagement vs. recent average"
      week_end_analysis: "Add to performance tracker spreadsheet"
      monthly_patterns: "Which frameworks/topics/formats winning"

  templates_created:
    - template_name: "Weekly Metric Update"
      structure: "Hook: Metric milestone → What we tried → Results (bullets) → Lesson → Question CTA"
      when_to_use: "Monthly, when hitting significant milestone"

    - template_name: "Founder Confession"
      structure: "Hook: Admission of mistake → Story → What I should've done → Lesson (bullets) → 'What would you have done?'"
      when_to_use: "When you have authentic failure with clear lesson"

    - template_name: "Industry Analysis"
      structure: "Hook: Trend observation → Data/examples → Why it matters → Predictions → 'Am I wrong?'"
      when_to_use: "When you see emerging pattern before it's obvious"
```

---

## Examples

### Example 1: Thought Leadership Post - Long-Form Thesis

**Post Objective**: Position as category authority, drive discussion
**Target Audience**: VCs and potential enterprise customers
**Format**: Text-only, 1400 characters
**Structure**: Framework C (Thesis-Evidence-Implications)

```
Hook: "Everyone's building AI features. Almost no one is building AI businesses. Here's the difference:"

[Body - 900 characters explaining distinction between feature and business model, with examples]

The companies that will win in 2025 aren't adding AI to existing products.

They're rebuilding products from the ground up with AI-first assumptions:
• Different unit economics (marginal cost → $0)
• Different GTM (product-led vs. sales-led)
• Different competitive moats (data network effects vs. features)

This isn't an incremental shift. It's architectural.

[Closing 300 characters on implications]

Where am I wrong? The comments are better than the post. 👇
```

**Performance Expectations**:
- Engagement rate: 5-7% (controversial takes drive discussion)
- Comment quality: High (attracts industry debate)
- Business outcome: 10+ VC/enterprise profile views, 2-3 DM conversations

### Example 2: Vulnerability-Driven Story Post

**Post Objective**: Build trust, attract talent
**Target Audience**: Potential hires, fellow founders
**Format**: Text + team photo
**Structure**: Framework B (Story-Lesson-Application)

```
Hook: "I almost lost my best engineer last week. Here's what I learned about retention:"

[Story - 600 characters about engineer coming to founder with concerns, the conversation, what founder realized about company culture gap]

The lesson wasn't about compensation.

It was about:
• Clarity of vision (had I articulated where we're going?)
• Ownership (was she building or just executing?)
• Growth (what's her path to 10x her impact?)

We rebuilt her role in 72 hours. She's staying. And I'm rethinking how we hire.

[Closing reflection - 200 characters]

Founders: when did you almost lose someone great? What did it teach you?
```

**Performance Expectations**:
- Engagement rate: 6-8% (vulnerability drives connection)
- Comment quality: High (founders sharing similar stories)
- Business outcome: Talent applications mentioning the post, recruiter inbound

### Example 3: Data-Driven Quick Hit

**Post Objective**: Quick engagement, demonstrate expertise
**Target Audience**: Product managers, growth leaders
**Format**: Text + simple bar chart visual
**Structure**: Framework D (Data-Driven Listicle)

```
Hook: "We analyzed 1,000 SaaS onboarding flows. The top 10% do these 3 things differently:"

1. Value before friction
   Top performers: 47 seconds to first value
   Everyone else: 4.3 minutes to first value

2. Contextual activation (not completion)
   Top: Activate 1 core workflow deeply
   Everyone else: Tour all features shallowly

3. Human intervention at failure points
   Top: Auto-detect stall, offer human help
   Everyone else: Let users churn quietly

The difference between 60% and 12% activation is usually just these three.

Which of these is your onboarding missing?
```

**Visual**: Simple bar chart comparing top 10% vs. rest on the 3 metrics

**Performance Expectations**:
- Engagement rate: 4-6% (tactical + data = high saves)
- Comment quality: Medium (people sharing their numbers)
- Business outcome: Saves for later reference, potential consulting inquiries

---

## Success Metrics

- **Engagement Rate Baseline**: Average 4%+ across all posts (reactions + comments + shares / impressions)
- **Business Conversion**: 15% of posts drive measurable business outcome (DM, profile visit → meeting, etc.)
- **Consistency**: 90%+ adherence to posting cadence over 8 weeks
- **Quality Distribution**: 70% of posts meet or exceed engagement baseline (indicating format-audience fit)
- **Efficiency**: Post creation time reduced by 50% after 4 weeks of using framework
- **Comment Quality Score**: 60%+ of comments are substantive (multi-sentence, add perspective) vs. generic
- **Template Validation**: Identify 3-5 repeatable templates that consistently outperform within 12 weeks

---

## Best Practices

- **Write for Skim, Reward Read**: Use formatting (line breaks, bullets, bold) to create hierarchy; readers should get value skimming OR reading deeply
- **One Idea, Many Angles**: Don't bury multiple insights; extract 3-5 posts from one good idea
- **Hook Like Your Reach Depends on It (It Does)**: 80% of success determined by first 2 lines
- **Mobile-First Formatting**: Preview on mobile before posting; desktop posts break in feed
- **Consistency Over Perfection**: Better to post good content consistently than perfect content sporadically
- **Engage Before You Post**: Spend 15 minutes engaging on others' content before posting your own (primes algorithm)
- **First Hour is Critical**: Engagement velocity in first 60 min determines algorithmic distribution
- **Hashtags: Less is More**: 0-3 hashtags only; LinkedIn is moving away from hashtag reliance
- **Link Strategy Matters**: Links in post reduce reach; put in first comment instead
- **Voice Over Formula**: Templates are guardrails, not scripts—maintain authentic voice

---

## Common Pitfalls

- **Template Dependence**: Following structure so rigidly it sounds formulaic; templates guide, not dictate
- **Buried Lede**: Saving best insight for end; lead with strongest point
- **Wall of Text**: No formatting breaks; unreadable on mobile
- **Weak CTAs**: "Thoughts?" is lazy; ask specific, interesting questions
- **Over-Linking**: Every post includes link; looks spammy and tanks reach
- **Ignoring Comments**: Post without engaging; algorithm penalizes
- **Hashtag Overload**: Using 5-10 hashtags; looks desperate, reduces professionalism
- **Schedule-and-Forget**: Posting at random times; consistency in timing builds audience expectation
- **No Performance Tracking**: Not measuring what works; keeps repeating unsuccessful patterns
- **Comparison Paralysis**: Copying others' viral posts; what works for them may not work for your audience

---

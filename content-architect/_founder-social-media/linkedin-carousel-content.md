## LinkedIn Carousel Content System v1.0

**Purpose**: Design high-performing, scalable carousel (PDF document) content that drives engagement, saves, and shares through strategic information architecture, visual design principles, and conversion optimization tailored to LinkedIn's algorithm and user behavior.

**Context**: Use this framework when creating educational, framework-driven, or list-based content that benefits from multi-slide visual presentation. LinkedIn carousels (uploaded as PDFs) consistently outperform single-image or text-only posts for certain content types, particularly tactical guides, frameworks, data visualizations, and step-by-step processes. Ideal for founders establishing thought leadership, sharing proprietary methodologies, or creating highly shareable, save-worthy content. Best deployed when you have 1000+ followers and established posting consistency, though can accelerate growth when done exceptionally well.

**Strategic Frameworks Applied**:
- **Information Architecture for Micro-Learning** - Chunking complex ideas into digestible sequential slides
- **Visual Hierarchy & Cognitive Load** - Design principles that maximize comprehension and retention
- **Progressive Disclosure** - Revealing information in logical sequence that builds understanding
- **Swipe Optimization Psychology** - Creating compulsion to advance through slides
- **Algorithm Maximization** - LinkedIn rewards carousels that keep users on platform longer
- **Repurpose-ability Architecture** - Carousels as hub content feeding multiple formats

---

## Variables

Define strategic variables for carousel production system:

### Content Strategy Variables
- `{{carousel_objective}}`: Primary goal (Thought leadership | Lead generation | Education | Shareability | Brand awareness)
- `{{content_type}}`: Framework | Listicle | How-to guide | Data story | Comparison | Checklist | Case study
- `{{core_value_proposition}}`: What reader will know/be able to do after viewing
- `{{target_audience_segment}}`: Who this carousel serves specifically
- `{{complexity_level}}`: Beginner | Intermediate | Advanced
- `{{actionability}}`: Immediately applicable | Strategic thinking | Awareness-building

### Structure & Format Variables
- `{{slide_count}}`: Optimal length (6-12 slides typically; max 15 before fatigue)
- `{{information_density}}`: Word count per slide (30-80 words optimal)
- `{{narrative_flow}}`: Linear/Sequential | Modular/Independent | Progressive complexity
- `{{slide_types}}`: Mix of Title, Content, Transition, Visual, CTA slides
- `{{visual_treatment}}`: Text-heavy | Image-heavy | Data visualization | Mixed

### Design System Variables
- `{{brand_colors}}`: Primary and secondary colors from brand palette
- `{{typography_system}}`: Font families, sizes, hierarchy (heading, body, caption)
- `{{template_style}}`: Minimalist | Bold/Graphic | Professional | Playful | Data-driven
- `{{consistency_elements}}`: Logo placement, slide numbers, recurring visual motifs
- `{{mobile_optimization}}`: Ensuring readability on small screens (70% of LinkedIn traffic)

### Content Architecture Variables
- `{{hook_slide_strategy}}`: How Slide 1 stops the scroll (Bold claim | Question | Statistic | Contrarian take)
- `{{progression_logic}}`: How slides build on each other (Problem → Solution | Before → After | 1-10 ranking)
- `{{proof_elements}}`: Where to include data, case studies, testimonials
- `{{cta_placement}}`: Final slide, mid-carousel, or distributed throughout
- `{{branding_strategy}}`: How prominently to feature founder/company (subtle vs. prominent)

### Engagement Optimization Variables
- `{{swipe_compulsion_tactics}}`: Cliffhangers, numbered lists, partial reveals, questions
- `{{save_worthiness_factors}}`: Reference value, checklistability, framework complexity
- `{{share_triggers}}`: What makes someone want to share with network (ego, value, utility)
- `{{comment_prompts}}`: Questions or debates positioned to drive discussion
- `{{caption_strategy}}`: How text caption complements carousel (teaser, summary, context)

### Production & Distribution Variables
- `{{design_tools}}`: Canva | Figma | PowerPoint | Adobe | Other
- `{{production_time}}`: Time budget per carousel (2 hours target for efficiency)
- `{{quality_standards}}`: Design polish level, proofread process, brand consistency checks
- `{{publishing_cadence}}`: Weekly | Bi-weekly | Monthly carousel production
- `{{repurposing_plan}}`: How carousel feeds other content (newsletter, blog, video, threads)

---

## Prompt

You are a visual content strategist designing a comprehensive LinkedIn carousel system for **{{founder_name}}** that achieves **{{carousel_objective}}** by delivering **{{core_value_proposition}}** to **{{target_audience_segment}}** through **{{content_type}}** carousels with **{{slide_count}}** slides.

### Carousel Content Strategy

**When to Use Carousels vs. Other Formats:**

**Carousel-Optimal Content:**
- ✅ Frameworks with 3-7 components
- ✅ Step-by-step processes
- ✅ Lists (Top 10, 5 mistakes, etc.)
- ✅ Before/After comparisons
- ✅ Data stories with progression
- ✅ Checklists and templates
- ✅ Multi-chapter narratives

**Better as Text Posts:**
- ❌ Short insights (1-2 key points)
- ❌ Vulnerable personal stories
- ❌ News/timely reactions
- ❌ Questions without frameworks
- ❌ Simple announcements

**Better as Video:**
- ❌ Demonstrations requiring motion
- ❌ Personality-driven content
- ❌ Highly emotional narratives

**Carousel Content Ideation Framework:**

Turn your expertise into carousels:

1. **Framework Extraction**: "What proprietary methodology do I use?"
   - Ex: "My 5-step sales qualification framework" → Carousel

2. **Pattern Recognition**: "What pattern am I seeing across customers/market?"
   - Ex: "7 reasons SaaS onboarding fails" → Carousel

3. **Competitive Analysis**: "Where do competitors get it wrong?"
   - Ex: "Startup vs. Enterprise GTM: Complete comparison" → Carousel

4. **Data Insights**: "What surprising data have I uncovered?"
   - Ex: "We analyzed 1000 landing pages. Here's what converts." → Carousel

5. **Process Documentation**: "How do I/we do [complex task]?"
   - Ex: "How we evaluate product-market fit in 10 steps" → Carousel

### Slide-by-Slide Architecture

**Optimal Carousel Structure (8-10 Slides):**

**Slide 1: Hook/Title Slide**

Purpose: Stop the scroll, promise value

```
Elements:
- Attention-grabbing headline (6-10 words)
- Subheadline clarifying what this is (8-12 words)
- Visual: Minimal text, high contrast, bold design
- Branding: Subtle logo or founder name
- Teaser: "Swipe to learn →" or "10 slides ➜"

Design Rules:
- 80pt+ headline font (mobile readable)
- High contrast (dark text on light bg or vice versa)
- One focal point; don't clutter
- No paragraph text

Example:
━━━━━━━━━━━━━━━━━━━
[Bold, large text]
"The 7 Metrics That Actually
Predict Startup Success"

[Smaller text]
Based on analyzing 500 Series A companies

[Bottom corner]
@FounderName

Swipe → [Arrow visual]
━━━━━━━━━━━━━━━━━━━
```

**Slide 2: Context/Problem**

Purpose: Establish why this matters, create relevance

```
Structure:
- Header: "The Problem:" or "Why This Matters:"
- 2-4 bullet points or short paragraph (50-70 words)
- Optional: Relatable pain point or statistic

Example:
━━━━━━━━━━━━━━━━━━━
Why Most Founders Track
the Wrong Metrics

• 73% focus on vanity metrics (user count, page views)
• Only 19% can predict runway accurately
• 60% miss warning signs until it's too late

The result?
Preventable failures.

[Next slide preview: "Here's what to track instead →"]
━━━━━━━━━━━━━━━━━━━
```

**Slides 3-9: Content Slides**

Purpose: Deliver core value, one concept per slide

```
Pattern for Framework Slides:

Slide Layout:
━━━━━━━━━━━━━━━━━━━
[Number or Icon]

[Concept Name]
[1-2 sentence explanation]

• Supporting point or example
• Supporting point or example

[Slide number: 3/10]
━━━━━━━━━━━━━━━━━━━

Content Rules:
- ONE idea per slide (no cramming)
- 40-80 words maximum
- Bullets for scannability
- Visual element (icon, number, illustration) to break text
- Consistent slide number placement

Example Slide 4:
━━━━━━━━━━━━━━━━━━━
02. Burn Multiple

How many months you can operate
before revenue needs to cover costs

Calculate: Monthly burn ÷ Revenue

• If 6+ months → Healthy
• If 3-6 months → Monitor closely
• If <3 months → Red flag

[Small graph showing danger zones]

4/10
━━━━━━━━━━━━━━━━━━━
```

**Slide 10: CTA/Conclusion Slide**

Purpose: Drive engagement, conversion, or next action

```
Options:

Option A - Engagement CTA:
━━━━━━━━━━━━━━━━━━━
Which metric surprised
you most?

Drop a comment 💬

━━━━━━━━━━━━━━━━━━━

Option B - Conversion CTA:
━━━━━━━━━━━━━━━━━━━
Want the full framework?

📥 Download the spreadsheet
calculator in my featured section

Follow @FounderName for more
━━━━━━━━━━━━━━━━━━━

Option C - Thought Leadership CTA:
━━━━━━━━━━━━━━━━━━━
Remember:

Metrics don't build companies.
Founders do.

But the right metrics help you
build the right company.

What metrics are you tracking?
━━━━━━━━━━━━━━━━━━━
```

### Design System & Visual Principles

**Template Design Framework:**

**Color Strategy:**
- Primary Brand Color: Headings, accents, key elements
- Secondary/Contrast Color: Highlights, numbers, icons
- Background: Light (white, cream) for professionalism OR Dark (navy, black) for boldness
- Text: High contrast with background (WCAG AA minimum)

**Typography Hierarchy:**
- Slide Title: 60-80pt, Bold, Brand Font
- Body Text: 28-40pt, Regular weight, High readability
- Captions: 20-24pt, for slide numbers, citations
- Consistency: Same fonts across all slides

**Layout Grid:**
- Margins: 10-15% on all sides (prevents text cutoff on mobile)
- Alignment: Consistent left/center alignment across slides
- White Space: 40-50% of slide should be empty (prevents overwhelm)

**Visual Elements:**
- Icons: Simple, consistent style (all outlined or all filled)
- Numbers: Large, bold, distinctive for listicles
- Graphs: Simple bar/line charts, not complex Excel exports
- Photos: High-res, relevant, not decorative stock

**Mobile Optimization (Critical!):**

Test on mobile device before publishing:
- Text readable at arm's length?
- Font size 28pt minimum for body?
- High contrast passes WCAG?
- Important elements not near edges?
- Slide count visible?

### Engagement Optimization Tactics

**Swipe Compulsion Mechanisms:**

**Tactic 1: Numbered Lists**
- "7 Metrics..." makes reader want to see all 7
- Slide numbers (3/7) show progress and what's left
- Missing one feels like incomplete knowledge

**Tactic 2: Cliffhanger Transitions**
- End slide with: "But here's the surprising part →"
- Or: "The #1 mistake (Slide 6) will shock you"
- Creates curiosity gap

**Tactic 3: Progressive Reveals**
- Slide 3: "The problem with X..."
- Slide 4: "Why it happens..."
- Slide 5: "How to fix it..."
- Each slide answers question raised by previous

**Tactic 4: Value Escalation**
- Early slides: Basic/known information
- Mid slides: Unique insights
- Late slides: Best/most valuable content
- Rewards those who swipe through

**Save-Worthiness Engineering:**

What makes people save carousels:

✅ **Reference Value**: "I'll need this later" (frameworks, checklists)
✅ **Complexity**: Can't absorb in one view, want to return
✅ **Actionability**: "When I do [task], this will help"
✅ **Shareability**: "My team needs to see this"

Design for saves:
- Create checklists people will reference
- Include templates or formulas
- Make it comprehensive enough to bookmark
- Add "Save for later" prompt in final slide

**Share Triggers:**

People share when content:
- Makes them look smart (industry insights)
- Helps their network (valuable frameworks)
- Signals their values (contrarian takes they agree with)
- Validates their experience ("Finally someone said it!")

Design for shares:
- Include surprising data or insights
- Take clear stance on debated topics
- Create "print and hang" quality summaries
- Make attribution clear (people share to give you credit)

### Caption Strategy for Carousel Posts

The text caption is as important as the carousel itself.

**Carousel Caption Framework:**

```
[Hook - 1-2 sentences that complement Slide 1]

[Context - Why this matters, who it's for]

[Tease - What they'll learn, without giving it all away]

[Social Proof - Optional: data, testimonials, credentials]

[CTA - Engagement or conversion ask]

[Hashtags - 0-3 relevant tags]

Example:

Most founders track the wrong metrics until it's too late.

After helping 50+ startups reach Series A, I've identified the 7 metrics that actually predict success (and which vanity metrics to ignore).

This isn't theory—it's pattern recognition from $500M+ in cumulative funding.

Inside:
• The 2 metrics that predict runway problems 6 months early
• Why ARR is lying to you
• The ratio that separates sustainable from fragile growth

Swipe through all 10 slides. Save for when you need it.

What metrics are you tracking? Drop a comment.

#StartupMetrics #Founders #VentureCapital
```

### Production Workflow & Tools

**Efficient Carousel Creation (2-Hour Target):**

**Phase 1: Content Outline (30 min)**
- Choose topic and carousel type
- Outline each slide's key point (1 sentence per slide)
- Identify data, examples, proof points needed
- Draft caption

**Phase 2: Design Execution (60 min)**
- Open template in design tool
- Fill in content slide by slide
- Add visual elements (icons, graphs, numbers)
- Ensure brand consistency
- Check mobile preview

**Phase 3: Refinement (30 min)**
- Proofread every slide (typos kill credibility)
- Check design consistency
- Verify mobile readability
- Export as PDF
- Test upload to LinkedIn (sometimes breaks)

**Design Tools & Templates:**

**Canva (Easiest):**
- Free templates available
- Drag-and-drop interface
- Brand kit for consistency
- Export as PDF (pages become slides)
- Limitation: Less customization than Figma

**Figma (Most Powerful):**
- Full design control
- Reusable components
- Design systems
- Collaboration
- Export artboards as PDF
- Steeper learning curve

**PowerPoint/Keynote (Familiar):**
- Use existing skills
- Export as PDF
- Easy text editing
- Can look dated if not careful

**Template System for Scale:**

Create 3-5 reusable templates:
1. **Framework Template**: For 3-7 step methodologies
2. **Listicle Template**: For top 10, mistakes, lessons
3. **Data Story Template**: For research and insights
4. **Case Study Template**: For customer stories
5. **Comparison Template**: For vs. content

Reusing templates:
- Maintains brand consistency
- Speeds production 2-3x
- Audience recognizes your style
- Allows focus on content, not design

### Distribution & Amplification Strategy

**Publishing Best Practices:**

**Upload Process:**
1. Create PDF (ensure each page is one slide)
2. Upload to LinkedIn as document
3. LinkedIn converts to swipeable carousel
4. Add caption and hashtags
5. Post

**Timing:**
- Carousels perform well Tuesday-Thursday, 8am-10am
- Avoid Mondays (catching up on emails) and Fridays (winding down)
- Test your audience's specific patterns

**First Hour Engagement:**
- Carousel performance determined by early swipe-through rate
- Comment quickly to seed discussion
- Ask team to engage early (not just like, but swipe and comment)
- Pin comment with additional context or resource link

**Repurposing Strategy:**

One carousel → Multiple assets:

1. **LinkedIn Native**: Original carousel post
2. **Featured Section**: Add to profile for evergreen access
3. **LinkedIn Article**: Expand each slide into paragraph, publish as article
4. **Newsletter**: Deep-dive version with 3x content
5. **Twitter/X Thread**: Each slide becomes a tweet
6. **Instagram**: Reformat for Stories or Feed carousel
7. **Blog Post**: SEO-optimized long-form expansion
8. **YouTube Short**: Quick scrolling video version
9. **Lead Magnet**: Enhanced version as PDF download
10. **Sales Enablement**: Give to team to share with prospects

### Measurement & Iteration Framework

**Carousel Analytics to Track:**

LinkedIn provides:
- Impressions
- Engagement rate (reactions + comments + shares / impressions)
- Page views (how many viewed each slide)
- Saves

**Key Metrics:**

| Metric | What It Means | Target |
|--------|---------------|--------|
| Engagement Rate | Overall interest | 4-6%+ (higher than text posts) |
| Swipe-Through Rate | Page 2 views / Page 1 views | 60%+ made it to slide 2 |
| Completion Rate | Final slide views / First slide views | 30-40%+ saw full carousel |
| Save Rate | Saves / Impressions | 2-4%+ (high-value content) |
| Share Rate | Shares / Impressions | 0.5-1%+ |

**Identify Patterns:**

After publishing 10 carousels:
- Which topics drove highest engagement?
- What slide counts performed best? (8 vs. 12 vs. 15)
- Did listicles outperform frameworks?
- Which design style resonated most?
- What CTAs drove most conversion?

**Drop-Off Analysis:**

LinkedIn shows per-slide views. Identify:
- Which slide do most people stop swiping? (Content issue or length issue?)
- Did Slide 1 → 2 have big drop? (Weak hook)
- Did completion rate increase over time? (Means your carousels are getting better)

---

## Output Schema

```yaml
linkedin_carousel_system:
  carousel_brief:
    title: "The 7 Metrics That Actually Predict Startup Success"
    objective: "Thought leadership + Save-worthiness"
    content_type: "Framework/Listicle hybrid"
    target_audience: "Pre-Series A founders, angels, VCs"
    core_value: "Readers will know which metrics to track and why"
    slide_count: 10
    expected_engagement: "5%+ engagement rate, 3%+ save rate"

  slide_architecture:
    - slide_number: 1
      type: "Hook/Title"
      content:
        headline: "The 7 Metrics That Actually Predict Startup Success"
        subheadline: "Based on analyzing 500 Series A companies"
        visual_treatment: "Bold typography, minimal design, high contrast"
        branding: "Founder name bottom corner"
        cta_element: "Swipe to learn → [arrow]"

    - slide_number: 2
      type: "Context/Problem"
      content:
        header: "Why Most Founders Track the Wrong Metrics"
        body: "• 73% focus on vanity metrics\n• Only 19% can predict runway accurately\n• 60% miss warning signs"
        conclusion: "The result? Preventable failures."
        visual: "Simple icon or stat visualization"

    - slide_number: 3
      type: "Content - Metric 1"
      content:
        number: "01"
        metric_name: "Burn Multiple"
        definition: "How many months you can operate before revenue needs to cover costs"
        formula: "Monthly burn ÷ Revenue"
        guidelines: "6+ months = Healthy\n3-6 months = Monitor\n<3 months = Red flag"
        visual: "Small graph showing zones"

    # Slides 4-9: Continue pattern for remaining metrics

    - slide_number: 10
      type: "CTA/Conclusion"
      content:
        primary_message: "What metrics are you tracking?"
        cta: "Drop a comment below 💬"
        secondary_cta: "Follow @FounderName for more startup insights"
        optional: "Save this for later 🔖"

  design_specifications:
    colors:
      primary: "#1B3A57" # Navy blue
      secondary: "#F4A261" # Orange accent
      background: "#FFFFFF"
      text: "#1F1F1F"

    typography:
      headline: "Montserrat Bold, 72pt"
      body: "Inter Regular, 36pt"
      caption: "Inter Regular, 24pt"

    layout:
      margins: "12% all sides"
      alignment: "Left-aligned text, centered visuals"
      white_space: "45% of each slide"

    visual_elements:
      icon_style: "Outlined, monochrome"
      number_style: "Large, bold, circular background"
      graph_style: "Simple bar charts, 2-3 colors max"

    mobile_optimization:
      minimum_font: "32pt for body text"
      contrast_ratio: "7:1 (WCAG AAA)"
      test_device: "iPhone in feed view"

  caption_content:
    hook: "Most founders track the wrong metrics until it's too late."

    context: |
      After helping 50+ startups reach Series A, I've identified the 7 metrics
      that actually predict success (and which vanity metrics to ignore).

    value_preview: |
      Inside:
      • The 2 metrics that predict runway problems 6 months early
      • Why ARR is lying to you
      • The ratio that separates sustainable from fragile growth

    cta: "Swipe through all 10 slides. Save for when you need it."
    engagement_prompt: "What metrics are you tracking? Drop a comment."
    hashtags: ["#StartupMetrics", "#Founders", "#VentureCapital"]

  engagement_optimization:
    swipe_compulsion:
      - "Numbered list creates expectation to see all 7"
      - "Slide numbers (3/10) show progress"
      - "Each metric builds on previous understanding"

    save_triggers:
      - "Reference value: Framework to return to"
      - "Actionable: Use when evaluating their metrics"
      - "Comprehensive: All 7 in one place"

    share_triggers:
      - "Makes sharer look informed"
      - "Helps other founders in network"
      - "Clear attribution to original creator"

  production_details:
    tool: "Canva Pro"
    template: "Framework Template #2"
    creation_time: "105 minutes (first draft)"
    revision_time: "25 minutes (proofread + mobile check)"

    quality_checklist:
      - "Spell-checked all slides"
      - "Consistent font sizes"
      - "Mobile preview tested"
      - "Brand colors applied"
      - "Slide numbers present"
      - "CTA clear and compelling"

  distribution_plan:
    publish_date: "Tuesday, 9:00 AM EST"
    cross_promotion:
      - "Share to LinkedIn newsletter 48hrs later (expanded version)"
      - "Tweet thread version same day afternoon"
      - "Add to Featured section as 'Startup Metrics Guide'"
      - "Offer expanded spreadsheet in comments for lead gen"

    first_hour_strategy:
      - "Comment within 5 min with additional context"
      - "Tag 2-3 founder friends asking their take"
      - "Respond to all comments in first hour"

  measurement_targets:
    impressions: "5,000+ (based on 3K follower count)"
    engagement_rate: "5%+ (250+ reactions/comments/shares)"
    swipe_through: "65%+ made it to slide 2"
    completion_rate: "35%+ saw final slide"
    saves: "150+ (3% save rate)"
    comments: "40+ substantive"
    profile_visits: "100+"
    lead_capture: "30+ emails from spreadsheet offer"

  repurposing_roadmap:
    week_1: "LinkedIn carousel + immediate Twitter thread"
    week_2: "Newsletter deep-dive (3x length)"
    week_3: "Blog post (SEO-optimized, 2000 words)"
    month_2: "YouTube Short (animated slides)"
    ongoing: "Sales team uses in prospect conversations"
```

---

## Examples

### Example 1: Framework Carousel - B2B SaaS Pricing Strategy

**Carousel Title**: "The 5-Tier Pricing Framework That Doubled Our MRR"

**Slide Breakdown** (8 slides):
1. Title: Bold claim with subhead "From $50K to $100K MRR in 4 months"
2. Problem: "Most SaaS pricing is guesswork. Here's the data-driven approach:"
3. Tier 1: Self-Serve ($X, who it's for, key features)
4. Tier 2: Team ($X, who it's for, key features)
5. Tier 3: Business ($X, who it's for, key features)
6. Tier 4: Enterprise (Custom, who it's for, key features)
7. Results: Chart showing before/after revenue breakdown by tier
8. CTA: "Building your pricing strategy? DM me 'PRICING' for the full calculator"

**Why It Works:**
- Specific outcome (doubled MRR)
- Actionable framework
- Visual comparison across tiers
- Results prove it works
- Clear CTA for lead generation

### Example 2: Data Story Carousel - Content Marketing Insights

**Carousel Title**: "We Analyzed 1,000 LinkedIn Posts. Here's What Actually Works."

**Slide Breakdown** (10 slides):
1. Title: Bold stat, credibility marker "1,000 posts analyzed"
2. Methodology: How we studied it, what we measured
3. Finding #1: "Text posts outperform videos by 23%" [Bar chart]
4. Finding #2: "Carousels get 2.3x more saves" [Comparison visual]
5. Finding #3: "Questions in CTAs drive 4x more comments" [Examples]
6. Finding #4: "Posts 1200-1400 characters perform best" [Length chart]
7. Finding #5: "Tuesday 9am is the new sweet spot" [Heatmap]
8. What Surprised Us: "Videos underperformed despite LinkedIn pushing them"
9. How to Apply: "3 changes you can make today"
10. CTA: "Want the full research report? Link in my featured section"

**Why It Works:**
- Original research (unique value)
- Data visualizations (easy to understand)
- Actionable insights
- Surprising findings create discussion
- Gated full report for lead capture

### Example 3: Comparison Carousel - Tool Alternatives

**Carousel Title**: "Notion vs. Coda vs. Airtable: Honest Comparison from 2 Years Using All Three"

**Slide Breakdown** (12 slides):
1. Title: The three tools + credibility ("2 years using all three")
2. What We Tested: 7 criteria (collaboration, databases, automation, etc.)
3-9. Head-to-head comparisons on each criteria with clear winner per category
10. Final Score: Visual scorecard
11. Bottom Line: "Use Notion if..., Coda if..., Airtable if..."
12. CTA: "Which do you use? Vote in comments 👇 Notion | Coda | Airtable"

**Why It Works:**
- High search interest (tool comparisons)
- Balanced, objective (builds trust)
- Clear recommendation
- Poll in CTA drives engagement
- Save-worthy (reference when choosing tool)

---

## Success Metrics

- **Engagement Lift**: Carousels achieve 1.5-2x higher engagement rate than text-only posts
- **Save Rate**: 3-5% of viewers save carousel (indicating high reference value)
- **Completion Rate**: 35%+ of viewers swipe through to final slide
- **Share Performance**: Carousels get 2-3x more shares than standard posts
- **Profile Visit Conversion**: 15%+ of carousel engagers visit profile
- **Lead Generation**: 20+ email captures or DMs per high-performing carousel
- **Content Efficiency**: 2-hour creation time per carousel (after template system established)

---

## Best Practices

- **One Idea Per Slide**: Don't cram; clarity over comprehensiveness
- **Mobile-First Design**: 70% will view on phone; test before publishing
- **High Contrast**: Readable in bright sunlight and dark rooms
- **Slide Numbers**: Show progress (3/10); increases completion
- **Consistent Branding**: Use same template style to build recognition
- **Swipe Incentive**: Create curiosity gap that compels next slide
- **Caption Complements**: Don't duplicate carousel content; add context
- **Value Back-Loading**: Best content in slides 6-9 rewards full swipe-through
- **Clear CTA**: Final slide should have specific, low-friction ask
- **Proofread Ruthlessly**: Typos in large font are embarrassing and credibility-damaging

---

## Common Pitfalls

- **Too Many Slides**: 15+ slides causes fatigue; optimal is 8-10
- **Wall of Text**: More than 80 words per slide; overwhelming
- **Tiny Font**: <28pt body text unreadable on mobile
- **Inconsistent Design**: Changing layouts/colors mid-carousel; looks amateurish
- **No Clear Progression**: Slides feel random, not sequential
- **Weak Slide 1**: Doesn't stop scroll; carousel dead on arrival
- **No Slide Numbers**: Viewers don't know how long carousel is; may abandon early
- **Generic Stock Photos**: Decorative, not functional; wastes space
- **Caption as Afterthought**: Lazy "Check out my carousel" caption
- **No CTA**: Carousel ends with no next action; missed conversion opportunity

---

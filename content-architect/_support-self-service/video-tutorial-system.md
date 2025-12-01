## Video Tutorial System v1.0

**Purpose**: Design a comprehensive, scalable video tutorial ecosystem that accelerates user onboarding, reduces support volume by 30-50%, and improves feature adoption through strategic visual learning content, optimized for searchability, accessibility, and measurable business impact across the customer lifecycle.

**Context**: Use this framework when building or scaling video-based education systems for complex products, services, or platforms. Ideal for SaaS products with 10+ core features, consumer apps with visual workflows, enterprise software requiring certification programs, or hardware products needing assembly/setup guidance. Applies to internal (employee training) and external (customer-facing) video libraries.

**Strategic Frameworks Applied**:
- **Visual Learning Theory** - Cognitive load optimization, dual coding, multimedia principles
- **Video Content Taxonomy** - Strategic categorization by user journey, complexity, and format
- **Discoverability Architecture** - SEO, platform optimization, contextual placement strategies
- **Accessibility-First Design** - WCAG 2.1 AA compliance, universal design principles
- **Production Scalability Model** - Efficient workflows from low-fi to high-production value
- **Engagement & Retention Analytics** - View-through rates, drop-off analysis, conversion tracking

---

## Variables

Define strategic variables for comprehensive video tutorial system design:

### Product & Audience Context
- `{{product_type}}`: SaaS platform | Mobile app | Hardware + software | Enterprise system | Consumer service
- `{{product_complexity}}`: Simple (1-3 core features) | Moderate (5-15 features) | Complex (enterprise suite)
- `{{user_personas}}`: End users | Administrators | Developers | Executives | Partners
- `{{user_lifecycle_stages}}`: Pre-purchase | Onboarding (first 30 days) | Active usage | Power user | Renewal
- `{{learning_preferences}}`: Visual learners (70%) | Text readers (20%) | Hybrid (10%)
- `{{existing_content}}`: Help articles | In-app tooltips | Webinars | Documentation | None

### Video Strategy Variables
- `{{video_library_size}}`: Starter (10-25 videos) | Comprehensive (50-150 videos) | Enterprise (200+ videos)
- `{{primary_video_types}}`: How-to tutorials | Feature overviews | Troubleshooting | Webinar recordings | Customer stories
- `{{video_length_strategy}}`: Micro (15-60s) | Short-form (2-5 min) | Mid-form (5-15 min) | Long-form (15-45 min)
- `{{production_quality_tier}}`: Low-fi (screen recording + voiceover) | Mid-fi (edited, branded) | High-fi (scripted, studio-quality)
- `{{update_frequency}}`: Real-time (with releases) | Monthly | Quarterly | Annual
- `{{localization_scope}}`: English only | Subtitles in 3-5 languages | Dubbed audio | Regional customization

### Platform & Distribution Variables
- `{{hosting_platform}}`: YouTube | Vimeo | Wistia | Loom | Self-hosted | LMS (Learning Management System)
- `{{distribution_channels}}`: Website video hub | In-app help | Email campaigns | Social media | Support tickets
- `{{search_optimization}}`: YouTube SEO | Help center integration | Google Video search | In-platform search
- `{{gating_strategy}}`: All public | Some gated (email capture) | Premium-only | Role-based access
- `{{device_optimization}}`: Desktop-first | Mobile-responsive | Mobile-native | Voice assistant compatible

### Production & Operations Variables
- `{{production_team}}`: In-house (video team) | Support/product teams DIY | External agency | Hybrid
- `{{production_tools}}`: Loom/Camtasia | Adobe Premiere | Final Cut Pro | Descript | AI video tools
- `{{scripting_approach}}`: Fully scripted | Outline + improv | Unscripted | AI-generated scripts
- `{{on-screen_talent}}`: Product experts | Professional hosts | Animated characters | Screen-only (no people)
- `{{branding_requirements}}`: Intro/outro branding | Lower thirds | Watermarks | Voice consistency

### Governance & Measurement Variables
- `{{content_ownership}}`: Marketing | Product | Support | Learning & Development | Distributed
- `{{quality_standards}}`: Technical accuracy | Audio/visual quality | Accessibility compliance | Brand guidelines
- `{{analytics_maturity}}`: Basic (views, watch time) | Intermediate (engagement, drop-off) | Advanced (conversion attribution)
- `{{success_metrics}}`: View count | Watch-through rate | Support ticket reduction | Feature adoption | Certification completion

---

## Prompt

You are a content architect designing a comprehensive video tutorial system for **{{product_type}}** with **{{product_complexity}}** serving **{{user_personas}}** across **{{user_lifecycle_stages}}**. Your goal is to create a **{{video_library_size}}** library optimized for **{{learning_preferences}}**, reducing support volume by 30-50% while improving feature adoption and customer satisfaction.

### Video Content Strategy & Taxonomy

**Content Audit & Prioritization:**
Analyze **{{existing_content}}** to identify:
- What questions generate the most support tickets? (High-priority video topics)
- Which features have low adoption? (Feature education opportunities)
- Where do users get stuck in onboarding? (Guided walkthrough needs)
- What content exists but isn't video? (Repurposing opportunities)
- What search queries aren't being answered? (Content gaps)

**Video Type Framework:**
Design **{{primary_video_types}}** with specific purposes:

**How-To Tutorials (Task-Based):**
- **Purpose**: Guide users through specific tasks step-by-step
- **Optimal Length**: 2-5 minutes ({{video_length_strategy}})
- **Structure**: Goal → Prerequisites → Steps (3-7 ideal) → Verification → Next steps
- **When to Create**: For every primary use case, top 20 support issues, and new features
- **Example**: "How to Create Your First Project in 3 Minutes"

**Feature Overviews (Conceptual):**
- **Purpose**: Explain what a feature is, why it matters, when to use it
- **Optimal Length**: 3-7 minutes
- **Structure**: Problem → Feature introduction → Key benefits → Use cases → How to get started
- **When to Create**: For major features, new releases, and underutilized capabilities
- **Example**: "What is [Feature Name]? And When Should You Use It?"

**Troubleshooting Guides (Problem-Solving):**
- **Purpose**: Diagnose and resolve common errors or issues
- **Optimal Length**: 2-4 minutes
- **Structure**: Error symptom → Possible causes → Solution steps (ordered by likelihood) → Prevention tips
- **When to Create**: For top 10 recurring technical issues
- **Example**: "Fixing 'Sync Failed' Errors: 3 Solutions That Work"

**Quick Tips (Micro-Learning):**
- **Purpose**: Single-concept learning for bite-sized value
- **Optimal Length**: 15-60 seconds ({{video_length_strategy}})
- **Structure**: Hook → Tip → Visual demo → Benefit
- **When to Create**: For keyboard shortcuts, hidden features, power-user tricks
- **Example**: "Speed Tip: Duplicate Projects in 2 Clicks"

**Webinar Recordings (Deep-Dives):**
- **Purpose**: Comprehensive training, thought leadership, product launches
- **Optimal Length**: 30-60 minutes (edited down to 15-30 for library)
- **Structure**: Introduction → Core content (3-5 sections) → Q&A → CTA
- **When to Create**: Monthly training series, product launches, expert interviews
- **Example**: "Mastering [Advanced Feature]: A 45-Minute Workshop"

**Customer Success Stories (Social Proof):**
- **Purpose**: Inspire and demonstrate ROI through real examples
- **Optimal Length**: 3-5 minutes
- **Structure**: Customer intro → Challenge → Solution (using product) → Results → Testimonial
- **When to Create**: For case studies, renewal campaigns, sales enablement
- **Example**: "How [Company] Saved 20 Hours/Week with [Product]"

**Video Taxonomy & Organization:**
Structure by **{{user_lifecycle_stages}}**:

**Pre-Purchase (Awareness):**
- Product overview (2-3 min)
- Feature comparison videos
- Customer testimonials
- Demo videos

**Onboarding (First 30 Days):**
- Getting Started series (5-7 videos, 2-4 min each)
- Account setup walkthrough
- First task completion ("Quick win")
- Integration guides

**Active Usage (Growth):**
- Feature deep-dives
- Best practices
- Advanced workflows
- Tips & tricks series

**Power User (Optimization):**
- Advanced features
- Automation & integrations
- Shortcuts & efficiency hacks
- Certification programs

**Troubleshooting (Support):**
- Error resolution guides
- FAQ videos
- Performance optimization
- System status & known issues

### Video Production Standards

**For {{production_quality_tier}}, establish:**

**Low-Fi (Screen Recording + Voiceover):**
- **Use Case**: Internal training, rapid releases, frequent updates
- **Tools**: Loom, QuickTime, Camtasia
- **Requirements**: Clear audio, cursor highlighting, annotations, no background noise
- **Production Time**: 30-60 minutes per video (including planning, recording, light editing)
- **Cost**: ~$50-100 per video (staff time)

**Mid-Fi (Edited, Branded):**
- **Use Case**: Customer-facing help center, standard tutorials
- **Tools**: Camtasia, ScreenFlow, Descript, Canva for thumbnails
- **Requirements**: Intro/outro branding, lower thirds, captions, music, smooth transitions
- **Production Time**: 2-4 hours per video (scripting, recording, editing, review)
- **Cost**: ~$200-500 per video

**High-Fi (Studio Quality):**
- **Use Case**: Product marketing, hero tutorials, sales demos
- **Tools**: Adobe Premiere, Final Cut Pro, After Effects, professional lighting/audio
- **Requirements**: Professional talent, script, teleprompter, multi-camera, motion graphics, color grading
- **Production Time**: 1-2 days per video (pre-production, filming, post-production)
- **Cost**: ~$2,000-10,000 per video

**Production Quality Decision Matrix:**
| Video Type | Audience | Frequency | Quality Tier |
|------------|----------|-----------|--------------|
| How-To Tutorial | Existing customers | High (monthly) | Low-Fi or Mid-Fi |
| Feature Overview | Prospects + customers | Medium (quarterly) | Mid-Fi |
| Troubleshooting | Support deflection | High (as needed) | Low-Fi |
| Quick Tips | Social media, email | High (weekly) | Low-Fi |
| Product Demo | Sales prospects | Low (annually) | High-Fi |
| Webinar Recording | Engaged users | Medium (monthly) | Mid-Fi (edited) |

**Scripting & Storyboarding:**
For **{{scripting_approach}}**:

**Fully Scripted (Recommended for High-Fi):**
- Write every word verbatim
- Time the script (125-150 words per minute speaking pace)
- Visual cues: [SCREEN: Show settings menu] [CALLOUT: Highlight "Save" button]
- Rehearse 2-3 times before recording

**Outline + Improv (Good for Mid-Fi):**
- Bullet-point key messages per section
- Pre-determine exact steps to show on screen
- Natural delivery reduces robotic feel
- Risk: May need multiple takes for clarity

**Unscripted (Only for Low-Fi, Fast Turnaround):**
- Subject matter expert records off-the-cuff
- Higher authenticity, lower polish
- Requires confident, articulate presenter
- Risk: Rambling, missing key points

**Video Structure Template (2-5 Min How-To):**
```
[00:00-00:10] Hook + Value Proposition
"In the next 3 minutes, I'll show you how to [accomplish goal], which will save you [benefit]."

[00:10-00:20] Prerequisites (if any)
"Before we start, make sure you've [prerequisite]. If not, check out [linked video]."

[00:20-02:30] Step-by-Step Demonstration
Step 1: [Action] - [Why it matters]
Step 2: [Action] - [Pro tip]
Step 3: [Action] - [Common mistake to avoid]

[02:30-02:50] Verification & Next Steps
"You'll know it worked when you see [result]. Next, try [related feature]."

[02:50-03:00] Call to Action
"Got questions? Drop a comment below. For more tutorials, subscribe/visit [link]."
```

### Visual Design & Accessibility Standards

**On-Screen Elements:**
- **Cursor Highlighting**: Bright color (yellow or red) halo around cursor for visibility
- **Zoom/Pan**: Zoom to 150-200% for detailed UI interactions
- **Annotations**: Arrows, boxes, numbers to guide attention
- **Text Overlays**: Key points reinforced with on-screen text (14-18pt minimum)
- **Pacing**: Pause 1-2 seconds after each action (cognitive load management)

**Branding Consistency:**
Per **{{branding_requirements}}**:
- **Intro**: 3-5 second branded opener (logo, product name, music)
- **Lower Thirds**: Speaker name, title (if on-camera)
- **Watermark**: Subtle logo in corner (10-15% opacity)
- **Outro**: 5-10 second CTA screen (subscribe, visit help center, contact support)
- **Thumbnails**: Consistent design (branded template, readable text, 1280x720px)

**Accessibility Requirements (WCAG 2.1 AA):**
- **Captions**: Closed captions for ALL videos (auto-generated + human-reviewed)
- **Transcripts**: Full text transcript available below video
- **Audio Description**: For videos with important visual info not conveyed in audio (e.g., silent demonstrations)
- **Color Contrast**: Text overlays must have 4.5:1 contrast ratio minimum
- **No Audio-Only Instructions**: "Click the blue button" requires visual callout; don't rely on audio alone
- **Keyboard Navigation**: Ensure video player is keyboard-accessible (space to play/pause, arrow keys for scrubbing)

**Mobile Optimization:**
For **{{device_optimization}}**:
- **Vertical Video**: Consider 9:16 for mobile-first content (Instagram, TikTok, Shorts)
- **Legibility**: UI elements must be readable on 5-inch screens
- **Touch Targets**: If interactive elements in video, ensure mobile-friendly sizing
- **File Size**: Compress for mobile bandwidth (<50MB for 5-min video)

### Discoverability & Distribution Strategy

**SEO Optimization (YouTube & Google Video):**
If using **{{hosting_platform}}** like YouTube:
- **Title**: 60 characters max, front-load keywords ("How to [Task] in [Product] | Step-by-Step Tutorial")
- **Description**: 200+ words, include timestamps, links, keywords naturally
- **Tags**: 10-15 relevant tags (mix of broad and specific)
- **Thumbnail**: High-contrast, readable text, faces (if applicable) for 30% higher CTR
- **Playlists**: Group by topic (Onboarding, Advanced, Troubleshooting)
- **End Screens**: Suggest next video (increases session watch time)

**Help Center Integration:**
- **Contextual Embedding**: Place video tutorials within relevant help articles
- **Video Hub**: Dedicated video library page, filterable by topic/persona/length
- **Search Integration**: Videos appear in help center search results
- **Transcripts**: Searchable text makes video content discoverable via keywords

**In-Product Placement:**
For **{{distribution_channels}}**:
- **Onboarding Tours**: Trigger video overlay at key moments ("Want to see how this works? Watch 2-min video")
- **Empty States**: "No projects yet? Watch this tutorial to create your first one"
- **Feature Announcements**: New feature modal with embedded demo video
- **Error Messages**: "Seeing this error? Watch this 90-second troubleshooting guide"
- **Settings Pages**: "Learn more" icon next to complex settings opens video explainer

**Email & Marketing Campaigns:**
- **Onboarding Series**: Days 1, 3, 7, 14 emails with progressive video tutorials
- **Feature Adoption**: Target users who haven't used Feature X with "How to get started" video
- **Reengagement**: "Haven't logged in in 30 days? Here's what's new" video roundup
- **Product Launches**: Announcement email with demo video (increases engagement 2-3x)

**Social Media Distribution:**
- **LinkedIn/Twitter**: 30-60 second teasers with link to full video
- **Instagram/TikTok**: Vertical, fast-paced tips and tricks
- **Facebook**: 2-3 min how-tos, native upload (better reach than YouTube links)
- **Community Forums**: Embed videos as answers to common questions

**Support Ticket Deflection:**
- **Chatbot Integration**: Bot suggests video before escalating ("Here's a 2-min video that might help")
- **Agent Macros**: Support agents send video links in ticket responses
- **Pre-Ticket Interstitial**: "Before submitting, watch these videos" with top 3 relevant tutorials

### Production Workflow & Scalability

**For {{production_team}}, establish efficient workflows:**

**Ideation & Prioritization:**
1. **Quarterly Planning**: Review support tickets, feature releases, user feedback
2. **Prioritization Matrix**: Impact (support volume) x Urgency (product launch) = Priority score
3. **Content Calendar**: 8-12 weeks advance planning, aligned with product roadmap
4. **Backlog Management**: Trello/Asana board with statuses (Idea, Scripted, Filming, Editing, Published)

**Pre-Production (20% of time):**
- Research: Review help articles, user flows, common errors
- Scriptwriting: Create outline or full script
- Storyboard: Screenshot key screens, note annotations needed
- Approval: SME (subject matter expert) reviews for technical accuracy

**Production (30% of time):**
- Setup: Prep demo environment, test audio, clear desktop
- Recording: 2-3 takes for each section (allows editing flexibility)
- Voiceover: Record separately if screen recording audio has issues
- B-Roll: Capture supplementary shots (dashboard, results screens)

**Post-Production (40% of time):**
- Rough Cut: Assemble takes, remove mistakes and long pauses
- Annotations: Add callouts, arrows, zoom effects
- Branding: Apply intro, outro, lower thirds
- Captions: Generate auto-captions, review for accuracy (80% accurate auto → 100% with human review)
- Music: Add subtle background music (if brand-appropriate)
- Review: QA for errors, pacing, clarity
- Optimization: Export in multiple resolutions (1080p, 720p, 480p for bandwidth)

**Publication & Distribution (10% of time):**
- Upload: To **{{hosting_platform}}** with optimized title, description, tags
- Embed: Add to help center, in-product, email templates
- Announce: Blog post, social media, internal team notification
- Monitor: Track views, engagement, comments in first 48 hours

**Scalability Strategies:**
- **Templates**: Reusable intro/outro, annotation styles, thumbnail designs
- **Batch Recording**: Film 5-10 videos in one session (same setup)
- **Repurposing**: Webinar → 5 short tutorials, demo video → social clips
- **User-Generated Content**: Feature customer tutorials (with permission)
- **AI Tools**: Descript for editing via transcript, AI voiceovers for translations, automated captions

### Governance & Maintenance Framework

**Content Ownership Model:**
For **{{content_ownership}}**:
- **Requesters**: Product, Support, Marketing identify needs
- **Creators**: Video team (or trained SMEs) produce content
- **Reviewers**: SMEs validate technical accuracy
- **Approvers**: Legal/compliance (if regulated industry), brand team
- **Maintainers**: Ongoing updates when product changes

**Quality Assurance Checklist:**
Before publishing:
- [ ] Technical accuracy verified by product team
- [ ] Audio clear (no background noise, consistent volume)
- [ ] Visual clarity (legible on mobile, proper zoom levels)
- [ ] Captions accurate (human-reviewed)
- [ ] Branding consistent (intro, outro, thumbnails)
- [ ] Accessibility compliant (WCAG 2.1 AA)
- [ ] SEO optimized (title, description, tags)
- [ ] CTA clear (next steps, links in description)
- [ ] Length appropriate (no unnecessary rambling)

**Update & Deprecation Strategy:**
At **{{update_frequency}}**:
- **Trigger-Based Updates**: Product UI changes require video refresh within 2 weeks
- **Proactive Audits**: Quarterly review of top 50 videos for outdated content
- **Versioning**: Append "(2024 Update)" to title if refreshing popular video
- **Deprecation**: Archive outdated videos (don't delete—redirect to new version with notice)
- **Sunsetting**: If feature removed, add "Note: This feature is deprecated. See [alternative]."

**Version Control:**
- **Master Files**: Store raw recordings, project files, scripts in organized folder structure
- **Change Log**: Document when/why videos were updated
- **Localization Tracking**: Which languages are current vs. outdated

### Analytics & Continuous Improvement

**For {{analytics_maturity}}, track:**

**Engagement Metrics:**
- **Views**: Total and unique views
- **Watch-Through Rate**: % who watch 25%, 50%, 75%, 100%
- **Average Watch Time**: Actual minutes watched (indicates quality and length optimization)
- **Drop-Off Analysis**: Where in the video do users leave? (Indicates confusing sections or too-long intros)
- **Engagement Rate**: Likes, comments, shares (social proof and community building)
- **Click-Through Rate**: % who click CTA links in description or end screens

**Business Impact Metrics:**
- **Support Ticket Deflection**: Compare ticket volume for topics with/without video tutorials
- **Feature Adoption**: % of users who use a feature after watching tutorial vs. those who don't
- **Onboarding Completion**: Users who watch onboarding series vs. those who don't (retention correlation)
- **Time-to-Value**: Days until first "aha moment" for users who watch videos vs. don't
- **Certification Completion**: For training programs, video watch rate → certification → job performance

**Content Performance Dashboard:**
Track weekly:
- **Top 10 Videos**: By views, watch-through, impact
- **Underperformers**: <50% watch-through rate = candidate for rewrite
- **Search Queries**: What are users searching for? (Content gaps)
- **Comment Analysis**: What questions are users asking? (Follow-up content ideas)
- **Referral Sources**: Where is video traffic coming from? (Distribution effectiveness)

**Optimization Cycles:**
- **A/B Test Thumbnails**: Test 2-3 thumbnail designs for new videos (can improve CTR 20-40%)
- **Shorten Intros**: If 50% drop off in first 15 seconds, cut intro fluff
- **Add Chapters**: YouTube chapters improve watch time by allowing users to skip to relevant sections
- **Improve SEO**: If video ranks poorly, optimize title/description with better keywords
- **Resurface Old Content**: Promote evergreen high-performers in email campaigns quarterly

---

## Output Schema

```yaml
video_tutorial_system:
  foundation:
    product_context:
      type: "{{product_type}}"
      complexity: "{{product_complexity}}"
      user_personas: ["End users", "Admins", "Developers"]
      lifecycle_stages: ["Pre-purchase", "Onboarding", "Active use", "Power user"]

    strategy:
      library_size: "{{video_library_size}}"
      primary_types: ["How-to tutorials", "Feature overviews", "Troubleshooting", "Quick tips"]
      length_strategy: "{{video_length_strategy}}"
      production_tier: "{{production_quality_tier}}"
      update_frequency: "{{update_frequency}}"

  content_taxonomy:
    by_user_journey:
      - stage: "Pre-Purchase (Awareness)"
        video_types: ["Product overview", "Feature comparison", "Customer stories"]
        video_count_target: "5-7 videos"
        optimal_length: "2-4 minutes"

      - stage: "Onboarding (First 30 Days)"
        video_types: ["Getting Started series", "Account setup", "First project tutorial"]
        video_count_target: "10-15 videos"
        optimal_length: "2-5 minutes"

      - stage: "Active Usage (Growth)"
        video_types: ["Feature deep-dives", "Best practices", "Advanced workflows"]
        video_count_target: "30-50 videos"
        optimal_length: "3-7 minutes"

      - stage: "Power User (Optimization)"
        video_types: ["Advanced features", "Integrations", "Efficiency hacks"]
        video_count_target: "15-25 videos"
        optimal_length: "5-10 minutes"

      - stage: "Troubleshooting (Support)"
        video_types: ["Error resolution", "FAQ videos", "Performance optimization"]
        video_count_target: "20-30 videos"
        optimal_length: "2-4 minutes"

    by_video_type:
      - type: "How-To Tutorial"
        purpose: "Step-by-step task completion"
        optimal_length: "2-5 minutes"
        structure: "Goal → Prerequisites → Steps → Verification → Next steps"
        production_tier: "Low-Fi or Mid-Fi"
        example: "How to Create Your First Project in 3 Minutes"

      - type: "Feature Overview"
        purpose: "Explain what/why/when for a feature"
        optimal_length: "3-7 minutes"
        structure: "Problem → Feature intro → Benefits → Use cases → Getting started"
        production_tier: "Mid-Fi"
        example: "What is [Feature Name]? And When to Use It"

      - type: "Troubleshooting Guide"
        purpose: "Diagnose and resolve issues"
        optimal_length: "2-4 minutes"
        structure: "Error symptom → Causes → Solutions → Prevention"
        production_tier: "Low-Fi"
        example: "Fixing 'Sync Failed' Errors: 3 Solutions"

  production_standards:
    quality_tiers:
      - tier: "Low-Fi (Screen Recording)"
        use_case: "Frequent updates, internal training, support"
        tools: ["Loom", "QuickTime", "Camtasia"]
        requirements:
          - "Clear audio (USB mic minimum)"
          - "Cursor highlighting"
          - "Annotations for key actions"
          - "No background noise"
        production_time: "30-60 minutes per video"
        cost: "$50-100 per video (staff time)"

      - tier: "Mid-Fi (Edited, Branded)"
        use_case: "Customer-facing tutorials, help center"
        tools: ["Camtasia", "ScreenFlow", "Descript"]
        requirements:
          - "Intro/outro branding (3-5 seconds)"
          - "Lower thirds for speakers"
          - "Captions (auto + human-reviewed)"
          - "Background music"
          - "Smooth transitions"
        production_time: "2-4 hours per video"
        cost: "$200-500 per video"

      - tier: "High-Fi (Studio Quality)"
        use_case: "Product marketing, hero content, sales"
        tools: ["Adobe Premiere", "After Effects"]
        requirements:
          - "Professional talent"
          - "Scripted + teleprompter"
          - "Multi-camera setup"
          - "Motion graphics"
          - "Color grading"
        production_time: "1-2 days per video"
        cost: "$2,000-10,000 per video"

    scripting_templates:
      - template_name: "Standard How-To (2-5 min)"
        structure: |
          [00:00-00:10] Hook: "In 3 minutes, learn how to [goal] to [benefit]."
          [00:10-00:20] Prerequisites: "Before starting, ensure [requirement]."
          [00:20-02:30] Steps:
            Step 1: [Action] - [Why it matters]
            Step 2: [Action] - [Pro tip]
            Step 3: [Action] - [Common mistake]
          [02:30-02:50] Verification: "You'll see [result]."
          [02:50-03:00] CTA: "Next, try [related feature]. Questions? Comment below."

    visual_design_standards:
      cursor_highlighting: "Bright yellow halo (20px radius)"
      zoom_level: "150-200% for detailed UI"
      annotations: "Arrows (red), boxes (yellow), numbers (white on blue)"
      text_overlays: "14-18pt minimum, high contrast"
      pacing: "1-2 second pause after each action"

    accessibility:
      captions: "All videos (auto-generated + human-reviewed for 100% accuracy)"
      transcripts: "Full text below video player"
      audio_description: "For videos with visual-only information"
      color_contrast: "4.5:1 minimum for text overlays"
      keyboard_navigation: "Video player accessible via keyboard"

  discoverability:
    hosting_platform: "{{hosting_platform}}"

    seo_optimization:
      title: "60 chars max, front-load keywords: 'How to [Task] in [Product] | Tutorial'"
      description: "200+ words, include timestamps, links, keywords"
      tags: "10-15 tags (mix broad + specific)"
      thumbnail: "1280x720px, high contrast, readable text, faces increase CTR 30%"
      playlists: "Group by topic (Onboarding, Advanced, Troubleshooting)"
      end_screens: "Suggest next video for session watch time"

    distribution_channels:
      - channel: "Help Center Video Hub"
        placement: "Dedicated video library page, filterable by topic/persona/length"
        integration: "Videos embedded in relevant help articles"

      - channel: "In-Product"
        placement: "Onboarding tours, empty states, feature announcements, error messages"
        trigger: "Contextual (e.g., 'No projects yet? Watch 2-min tutorial')"

      - channel: "Email Campaigns"
        placement: "Onboarding series (Days 1, 3, 7, 14), feature adoption, reengagement"
        impact: "Video in email increases engagement 2-3x"

      - channel: "Support Tickets"
        placement: "Chatbot suggestions, agent macros, pre-ticket interstitial"
        impact: "30-50% ticket deflection for video-supported topics"

      - channel: "Social Media"
        placement: "LinkedIn/Twitter (30-60s teasers), Instagram/TikTok (vertical tips)"

  production_workflow:
    team: "{{production_team}}"

    phases:
      - phase: "Ideation & Prioritization"
        duration: "Ongoing (quarterly planning)"
        activities:
          - "Review support tickets for high-volume topics"
          - "Align with product roadmap for upcoming features"
          - "Prioritize: Impact x Urgency"
        output: "Content calendar (8-12 weeks)"

      - phase: "Pre-Production"
        duration: "20% of project time"
        activities:
          - "Research: Review help articles, user flows"
          - "Scriptwriting: Outline or full script"
          - "Storyboard: Screenshot key screens"
          - "SME review: Technical accuracy"
        output: "Approved script + storyboard"

      - phase: "Production"
        duration: "30% of project time"
        activities:
          - "Setup: Prep demo environment, test audio"
          - "Recording: 2-3 takes per section"
          - "Voiceover: Record separately if needed"
        output: "Raw video files"

      - phase: "Post-Production"
        duration: "40% of project time"
        activities:
          - "Editing: Assemble takes, remove mistakes"
          - "Annotations: Add callouts, zoom effects"
          - "Branding: Intro, outro, lower thirds"
          - "Captions: Auto-generate + human review"
          - "QA: Review for errors, pacing"
        output: "Final video (multiple resolutions)"

      - phase: "Publication & Distribution"
        duration: "10% of project time"
        activities:
          - "Upload: Optimized title, description, tags"
          - "Embed: Help center, in-product, emails"
          - "Announce: Blog, social, internal comms"
          - "Monitor: Track initial performance"
        output: "Published + promoted video"

    scalability_tactics:
      - "Batch recording: 5-10 videos in one session"
      - "Templates: Reusable intro/outro, thumbnails"
      - "Repurposing: 1 webinar → 5 short tutorials"
      - "AI tools: Descript (editing), auto-captions, AI voiceovers for translations"

  governance:
    ownership: "{{content_ownership}}"

    quality_assurance:
      pre_publish_checklist:
        - "Technical accuracy verified by product team"
        - "Audio clear (no background noise)"
        - "Visual clarity (legible on mobile)"
        - "Captions accurate (human-reviewed)"
        - "Branding consistent"
        - "Accessibility compliant (WCAG 2.1 AA)"
        - "SEO optimized"
        - "CTA clear"

    update_strategy:
      trigger_based: "Product UI changes = video refresh within 2 weeks"
      proactive_audits: "Quarterly review of top 50 videos"
      versioning: "Append '(2024 Update)' to title if refreshed"
      deprecation: "Archive outdated videos with redirect to new version"

  analytics:
    maturity_level: "{{analytics_maturity}}"

    engagement_metrics:
      - metric: "Views"
        tracking: "Total and unique views"
      - metric: "Watch-Through Rate"
        tracking: "% who watch 25%, 50%, 75%, 100%"
        target: ">50% watch to 75%"
      - metric: "Average Watch Time"
        tracking: "Actual minutes watched"
        optimization: "If <50% of video length, shorten or improve pacing"
      - metric: "Drop-Off Points"
        tracking: "Where users leave"
        optimization: "Cut slow sections, improve hooks"

    business_impact_metrics:
      - metric: "Support Ticket Deflection"
        measurement: "Compare ticket volume for topics with/without videos"
        target: "30-50% reduction"
      - metric: "Feature Adoption"
        measurement: "% users who use feature after watching tutorial"
        target: "20-30% increase"
      - metric: "Onboarding Completion"
        measurement: "Retention correlation for users who watch vs. don't"
        target: "15-25% higher retention"

    optimization_cycles:
      - "A/B test thumbnails (can improve CTR 20-40%)"
      - "Shorten intros if >50% drop-off in first 15 seconds"
      - "Add YouTube chapters for better navigation"
      - "Improve SEO for low-ranking videos"
      - "Resurface evergreen content quarterly"

  success_metrics:
    library_growth: "50-150 videos within 12 months"
    watch_through_rate: ">50% average across library"
    support_deflection: "30-50% reduction in tickets for video-supported topics"
    feature_adoption: "20-30% increase for features with video tutorials"
    video_hub_traffic: "10,000+ monthly views"
    user_satisfaction: "4.5+ star rating on video helpfulness"
```

---

## Examples

### Example 1: B2B SaaS - Project Management Tool

**Context**: 100-feature PM platform, 20K users, need to improve onboarding (40% drop-off in first week).

**Video Strategy**: Comprehensive library (80 videos)
- **Onboarding Series (10 videos, 2-3 min each)**: "Getting Started," "Create First Project," "Invite Team," "Set Permissions"
- **Feature Deep-Dives (40 videos, 3-5 min)**: Each major feature gets dedicated tutorial
- **Quick Tips (20 videos, 30-60s)**: Keyboard shortcuts, hidden features, efficiency hacks
- **Troubleshooting (10 videos, 2-4 min)**: Top 10 support issues (sync, permissions, integrations)

**Production**: Mid-Fi (screen recording + editing, branded)
- Tools: Camtasia for recording/editing, Canva for thumbnails
- Voiceover: Product managers (trained on voice/pacing)
- Update cadence: New feature = new video within 1 week

**Distribution**:
- In-app: Onboarding checklist with embedded videos
- Email: Days 1, 3, 7 onboarding emails with progressive tutorials
- Help center: Dedicated video hub + videos embedded in articles

**Results**: 25% increase in onboarding completion, 40% reduction in onboarding-related support tickets

---

### Example 2: Consumer App - Fitness Tracking

**Context**: 2M users, mobile-first, visual product, need to drive feature adoption (premium features underutilized).

**Video Strategy**: Short-form, mobile-optimized (50 videos)
- **How-To Tutorials (30 videos, 1-2 min)**: "Log a Workout," "Set Goals," "Track Nutrition"
- **Feature Spotlights (10 videos, 60-90s)**: Premium features (meal plans, coaching, analytics)
- **Success Stories (10 videos, 2-3 min)**: User testimonials showing results

**Production**: Low-Fi to Mid-Fi
- Tools: Loom for screen recording, iPhone for user testimonials
- Format: Vertical (9:16) for Instagram/TikTok
- Update: Monthly (seasonal fitness trends)

**Distribution**:
- In-app: Empty state prompts ("No workouts logged? Watch this 60s video")
- Social: Instagram Reels, TikTok (viral fitness tips)
- Push notifications: "Pro tip: Learn this feature in 1 minute"

**Results**: 35% increase in premium feature adoption, 50K social media video views/month

---

### Example 3: Enterprise Software - HR Management System

**Context**: Complex enterprise product, 500 clients, need training/certification program for HR admins.

**Video Strategy**: Certification-focused (150 videos)
- **Fundamentals (30 videos, 5-10 min)**: System basics, navigation, core workflows
- **Advanced (50 videos, 10-15 min)**: Reporting, compliance, integrations
- **Troubleshooting (40 videos, 3-5 min)**: Common issues, error resolution
- **Webinar Recordings (30 videos, 20-30 min edited)**: Deep-dives, best practices, product updates

**Production**: High-Fi for core content, Mid-Fi for updates
- Tools: Adobe Premiere, professional voiceover talent
- Format: Scripted, branded, polished (reflects enterprise brand)
- Update: Quarterly (product releases every 3 months)

**Distribution**:
- LMS: Structured learning paths (Fundamentals → Advanced → Certification exam)
- CSM resource library: Customer Success Managers share video collections with clients
- Annual conference: Record sessions, post to video hub

**Results**: 80% certification completion rate (vs. 50% for text-only training), 30% fewer tier-1 support tickets

---

## Success Metrics

- **Library Growth**: 50-150 videos within 12 months (depending on **{{video_library_size}}** goal)
- **Watch-Through Rate**: >50% average across library (indicates quality and length optimization)
- **Support Ticket Deflection**: 30-50% reduction in tickets for topics with video tutorials
- **Feature Adoption**: 20-30% increase in usage for features with dedicated video content
- **Video Hub Traffic**: 10,000+ monthly views (or 20% of user base engaging with videos monthly)
- **User Satisfaction**: 4.5+ star rating on "Was this video helpful?" surveys
- **Onboarding Impact**: 15-25% increase in onboarding completion rate for users who watch videos
- **Production Efficiency**: 2-4 hours per Mid-Fi video (down from 6-8 hours initially)
- **SEO Performance**: Top 10 videos rank on page 1 of Google for target keywords
- **Accessibility Compliance**: 100% of videos WCAG 2.1 AA compliant

---

## Best Practices

- **Hook in First 10 Seconds**: State the value proposition immediately; users decide to watch or leave within 10s
- **Show, Don't Just Tell**: Demonstrate every step visually; don't rely on audio-only instructions
- **Pace for Comprehension**: Pause 1-2 seconds after each action; rushing causes confusion
- **Zoom Strategically**: 150-200% zoom for detailed UI interactions; users watching on mobile need this
- **Annotate Generously**: Arrows, boxes, highlights guide attention to the right place
- **Keep It Short**: 2-5 minutes is ideal for how-tos; break longer topics into series
- **Captions Are Non-Negotiable**: 80% of social video is watched on mute; captions increase engagement 40%
- **Batch Record**: Film 5-10 videos in one session to maximize efficiency
- **Test on Mobile**: 50%+ of views are mobile; if it's not legible on a 5-inch screen, it's broken
- **Iterate Based on Data**: Drop-off at 30s? Your intro is too slow. Cut it.
- **Repurpose Ruthlessly**: 1 webinar → 5 short tutorials + 10 social clips + 1 blog post
- **Make It Searchable**: Transcripts and captions make video content findable via keywords

---

## Common Pitfalls

- **Too Long**: 10-minute videos have 50% lower watch-through; be ruthless in editing
- **Slow Intros**: 15-second logo animations lose 30% of viewers; get to value in 5 seconds
- **Assuming Context**: Users may not know basics; state prerequisites upfront
- **Poor Audio Quality**: Viewers forgive low-res video, but bad audio is unbearable
- **Outdated UI**: Screenshots from 2 versions ago erode trust; tie updates to product releases
- **No Captions**: Excludes deaf/hard-of-hearing users and loses 80% of mobile viewers
- **Unclear CTAs**: What should users do next? Always provide explicit next steps
- **Ignoring Mobile**: Tiny text and UI elements are unreadable on small screens
- **No Analytics**: Publishing without measuring is guessing; track drop-off and optimize
- **Over-Producing**: Spending $5K on a video that needs monthly updates is unsustainable
- **Skipping Accessibility**: WCAG compliance isn't optional; it's a legal and ethical requirement
- **One-and-Done Mentality**: Videos aren't evergreen; products change, content must too

---

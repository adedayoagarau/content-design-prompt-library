## Help Documentation Architecture v1.0

**Purpose**: Design a comprehensive, scalable help documentation system that empowers users to solve problems independently, reduces support burden, improves product adoption, and creates measurable impact on user success through strategic content organization, discoverability optimization, and continuous improvement frameworks.

**Context**: Use this framework when building or restructuring product documentation, knowledge bases, or help centers for digital products where self-service support drives customer satisfaction and operational efficiency. This goes beyond writing help articles to architect an intelligent content ecosystem that anticipates user needs, adapts to usage patterns, and integrates seamlessly with product workflows. Ideal for B2B SaaS, consumer apps, developer tools, or any product requiring scalable support content.

**Strategic Frameworks Applied**:
- **Information Architecture Hierarchy** - Taxonomies, categorization, and findability optimization
- **Jobs-to-be-Done Documentation** - Content mapped to user goals and task completion
- **Progressive Disclosure Model** - Layered help from quick answers to comprehensive guides
- **Search-First Design** - SEO optimization, natural language queries, intent matching
- **Content Lifecycle Management** - Creation, maintenance, deprecation, and analytics-driven updates
- **Omnichannel Help Integration** - Contextual help, in-app links, chatbot integration, support ticket deflection

---

## Variables

Define strategic variables for comprehensive help documentation architecture:

### Product Context Variables
- `{{product_type}}`: B2B SaaS | Consumer App | Developer Tool | Marketplace | Fintech | Healthcare | Other
- `{{product_complexity}}`: Simple (3-5 core features) | Moderate (6-12 features) | Complex (13+ interconnected features)
- `{{user_personas}}`: Primary user types with different documentation needs (End User, Admin, Developer, Manager)
- `{{critical_workflows}}`: 5-10 most common user tasks that require documentation
- `{{integration_ecosystem}}`: Third-party tools users connect (affects integration documentation needs)

### Documentation Scope Variables
- `{{content_types}}`: Quick-start guides | How-to articles | Tutorials | Video walkthroughs | FAQs | API docs | Troubleshooting | Release notes
- `{{help_center_sections}}`: Top-level categories (Getting Started, Features, Integrations, Account Management, Billing, etc.)
- `{{audience_segments}}`: Who consumes help content (Self-service users, Support team, Sales, Partners)
- `{{localization_requirements}}`: Languages needed beyond English (Spanish, French, German, Japanese, etc.)
- `{{technical_depth_range}}`: Non-technical | Business users | Technical users | Developers (affects tone and detail level)

### Content Organization Variables
- `{{taxonomy_structure}}`: Hierarchical (Categories → Subcategories → Articles) | Topic-based | Workflow-based | Hybrid
- `{{navigation_patterns}}`: Browse (category navigation) | Search (query-based) | Contextual (in-app links) | AI-powered (chatbot)
- `{{content_formats}}`: Text articles | Video tutorials | Interactive demos | Screenshots | GIFs | Diagrams | Code samples
- `{{versioning_strategy}}`: How to handle multiple product versions in documentation

### Discoverability Variables
- `{{search_optimization}}`: Keywords, synonyms, natural language processing, search result ranking
- `{{SEO_strategy}}`: Public docs indexed by Google, target keywords, backlink opportunities
- `{{contextual_help_integration}}`: In-app "?" icons, empty states, error messages linking to docs
- `{{chatbot_capabilities}}`: AI-powered help bot, suggested articles, conversational search

### Content Creation Variables
- `{{authoring_team}}`: Who writes content (Content team, Product team, Support team, Engineering, Community contributors)
- `{{review_workflow}}`: Draft → Review → Approval → Publish → Update cycle
- `{{style_guide}}`: Voice, tone, formatting standards, terminology, accessibility requirements
- `{{screenshot_standards}}`: Annotation style, blur sensitive data, device frames, dark/light mode
- `{{video_production_level}}`: Simple screen recordings | Narrated tutorials | Professional production

### Measurement Variables
- `{{help_center_metrics}}`: Page views, search queries, deflection rate, article ratings, time on page
- `{{support_impact_metrics}}`: Ticket volume reduction, resolution time, customer satisfaction (CSAT)
- `{{content_performance_indicators}}`: Top-performing articles, low-rated content, search failures (no results), high-bounce articles

---

## Prompt

You are a content architect designing a comprehensive help documentation system for **{{product_type}}** with **{{product_complexity}}** complexity. Your task is to create a scalable, discoverable knowledge base that serves **{{user_personas}}**, enables **{{critical_workflows}}**, and measurably reduces support burden while improving user success.

### Information Architecture Strategy

**Taxonomy Design:**

Organize **{{help_center_sections}}** using **{{taxonomy_structure}}**:

**Option A: Hierarchical Structure** (For complex products with many features)
```
Getting Started
├── Account Setup
│   ├── Creating Your Account
│   ├── Verifying Your Email
│   └── Initial Configuration
├── First Steps
│   ├── Creating Your First Project
│   ├── Inviting Team Members
│   └── Exploring the Dashboard
└── Quick Start Video (3 min overview)

Features
├── Feature Category 1 (e.g., Analytics)
│   ├── Overview of Analytics
│   ├── Creating Reports
│   ├── Customizing Dashboards
│   └── Scheduling Reports
├── Feature Category 2 (e.g., Collaboration)
│   ├── Overview of Collaboration
│   ├── Sharing Projects
│   ├── Real-Time Editing
│   └── Comments and Feedback
```

**Option B: Workflow-Based Structure** (For products with clear user journeys)
```
I want to...
├── Track marketing performance
│   ├── Connect advertising accounts
│   ├── Build marketing dashboards
│   ├── Measure ROI and attribution
│   └── Share reports with team
├── Manage my sales pipeline
│   ├── Import contacts
│   ├── Track deals
│   ├── Forecast revenue
│   └── Analyze win rates
├── Collaborate with my team
│   ├── Invite team members
│   ├── Share workspaces
│   ├── Manage permissions
│   └── Track team activity
```

**Option C: Hybrid Structure** (Browse by feature OR workflow)
```
Top-level categories:
- Getting Started (new user journey)
- Features (alphabetical, browsable by feature)
- Workflows (goal-based, "How do I...")
- Integrations (by tool: Google Ads, Salesforce, etc.)
- Account & Billing
- Troubleshooting
- API Documentation (for developers)

Within each category, hierarchical subcategories.
```

**Categorization Principles:**
- **User Mental Models**: Organize by how users think about tasks, not how engineers built features
- **Mutual Exclusivity**: Each article has ONE primary home (avoid duplication confusion)
- **Depth Limits**: Max 3 levels deep (Category → Subcategory → Article), deeper = lost users
- **Discoverability Balance**: Too many top-level categories = paradox of choice; too few = buried content
- **Search-First Reality**: 70%+ users search, not browse; taxonomy helps AI/search understand relationships

### Content Type Framework

**Map {{content_types}} to user needs:**

**Quick-Start Guides:**
- **Purpose**: Get users to first value in <10 minutes
- **Structure**: 3-5 steps, heavy on screenshots, minimal text
- **Format**: Single-page, scannable, embedded video optional
- **Example**: "Get started with [Product] in 5 minutes"
- **Placement**: Featured on help center homepage, linked from onboarding

**How-To Articles:**
- **Purpose**: Step-by-step instructions for specific tasks
- **Structure**: Prerequisites → Steps → Expected Result → Troubleshooting
- **Format**: Numbered steps, screenshots for each step, GIFs for sequences
- **Example**: "How to create a custom dashboard"
- **Placement**: Feature categories, search results, contextual in-app links

**Tutorials:**
- **Purpose**: Teach concepts and multi-step workflows for mastery
- **Structure**: Learning objective → Concept explanation → Hands-on exercise → Next steps
- **Format**: Longer-form (1000+ words), videos, interactive demos
- **Example**: "Mastering advanced filtering and segmentation"
- **Placement**: "Learn" section, onboarding, email nurture campaigns

**Video Walkthroughs:**
- **Purpose**: Visual learners, complex workflows, show-don't-tell scenarios
- **Structure**: 2-5 minutes, narrated, on-screen text for key points
- **Format**: Embedded YouTube/Vimeo, closed captions, transcript below video
- **Example**: "Watch: How to set up your first integration (3 min)"
- **Placement**: Alongside text articles, video library, in-app modals

**FAQs:**
- **Purpose**: Answer common questions quickly (especially pre-sales)
- **Structure**: Question → Concise answer → Link to detailed article if applicable
- **Format**: Accordion (collapsed), searchable, categorized by topic
- **Example**: "How much does [Product] cost?" → Quick answer + link to pricing page
- **Placement**: FAQ section, end of relevant articles, chatbot suggestions

**Troubleshooting Guides:**
- **Purpose**: Solve problems when things go wrong
- **Structure**: Symptom → Causes → Solutions (ordered by likelihood)
- **Format**: Decision tree, "If X, try Y" logic, links to related articles
- **Example**: "Why isn't my data syncing?"
- **Placement**: Troubleshooting category, error message links, support ticket suggestions

**API Documentation:**
- **Purpose**: Enable developers to integrate and extend product
- **Structure**: Authentication → Endpoints → Parameters → Responses → Examples → Rate limits
- **Format**: Code samples (multiple languages), interactive API explorer, changelog
- **Example**: "API Reference: POST /projects"
- **Placement**: Dedicated developer portal, versioned, searchable

**Release Notes:**
- **Purpose**: Communicate product updates, new features, bug fixes
- **Structure**: Date → New features → Improvements → Bug fixes → Deprecations
- **Format**: Reverse chronological, tagged by feature area, severity indicators
- **Example**: "What's New in [Product] - January 2025"
- **Placement**: Release notes section, in-app announcements, email notifications

### Content Creation Standards

**Article Template Structure:**

```markdown
# [Clear, Specific Title with Primary Keyword]

**[1-2 sentence summary of what this article teaches]**

---

## Prerequisites (if applicable)
- What users need before following this guide
- Links to prerequisite articles

## Steps

### Step 1: [Action-oriented title]
[Concise explanation]

[Screenshot or GIF demonstrating step]

💡 **Tip**: [Helpful context or pro tip]

### Step 2: [Action-oriented title]
[Continue steps...]

## Expected Result
What users should see after completing steps:
[Screenshot of successful outcome]

## Troubleshooting
- **Problem**: [Common issue]
  **Solution**: [How to fix it]

- **Problem**: [Another issue]
  **Solution**: [Resolution steps]

## Next Steps
Now that you've [completed this task], you might want to:
- [Link to related article 1]
- [Link to related article 2]
- [Link to advanced guide]

## Related Articles
- [Contextually relevant article 1]
- [Contextually relevant article 2]

---

**Was this article helpful?** [👍 Yes] [👎 No] [💬 Leave feedback]
```

**Writing Style Guidelines:**

Apply {{style_guide}} standards:

**Voice & Tone:**
- **For Non-Technical Users**: Conversational, empathetic, jargon-free, encouraging
  - Example: "Let's set up your first integration! It's easier than you think."
- **For Business Users**: Professional, efficient, outcome-focused
  - Example: "Configure dashboard permissions to control team access and maintain data security."
- **For Developers**: Precise, technical, assumes competence, code-first
  - Example: "Authenticate using OAuth 2.0. Include the access token in the Authorization header."

**Formatting Standards:**
- **Headings**: H1 for title, H2 for sections, H3 for subsections (never skip levels)
- **Lists**: Bulleted for unordered, numbered for sequential steps
- **Emphasis**: **Bold** for UI elements ("Click the **Save** button"), *italics* for emphasis
- **Code**: `inline code` for variables/commands, ```code blocks``` for multi-line
- **Links**: Descriptive text ([learn more about permissions]), not "click here"
- **Images**: Alt text required, max 800px wide, compressed for fast loading

**Screenshot & Visual Standards:**

Define {{screenshot_standards}}:
- **Annotation Style**: Red boxes for emphasis, arrows for direction, numbered steps for sequences
- **Sensitive Data**: Blur user emails, names, payment info, API keys
- **Consistency**: Same browser, same UI theme (light mode default), same screen resolution
- **Device Frames**: Use browser chrome or device frames for context
- **Update Frequency**: Re-screenshot when UI changes (stale screenshots = confusion)

**Video Production Standards:**

For {{video_production_level}}:

**Simple Screen Recordings:**
- Tool: Loom, QuickTime, OBS
- Duration: 2-3 minutes max
- Narration: Live voiceover, conversational tone
- Editing: Minimal cuts, speed up slow parts (2x speed)

**Narrated Tutorials:**
- Tool: Camtasia, ScreenFlow
- Duration: 4-8 minutes
- Script: Pre-written, practiced
- Editing: Cuts, zoom-ins, on-screen text callouts
- Quality: Clear audio, no background noise

**Professional Production:**
- Tool: Professional video team
- Duration: Variable
- Quality: Studio voiceover, motion graphics, brand elements
- Use Cases: Product launches, complex features, marketing content

### Search Optimization Strategy

**{{search_optimization}} implementation:**

**Keyword Research & Targeting:**

For each article, identify:
- **Primary Keyword**: Main search term users will use (e.g., "how to create dashboard")
- **Secondary Keywords**: Related terms (e.g., "build report", "custom analytics")
- **Synonyms**: Alternative phrasings (e.g., "set up" = "configure" = "create")
- **Long-Tail Queries**: Specific user questions (e.g., "why is my dashboard not updating")

**Title Optimization:**
- Include primary keyword in title (preferably at beginning)
- Clear, specific, action-oriented
- Example: "How to Create a Custom Dashboard in [Product]" (better than "Custom Dashboards")

**Content Optimization:**
- Primary keyword in first paragraph
- Secondary keywords throughout content naturally
- Headings include variations of keywords
- Alt text on images includes relevant keywords

**Internal Linking:**
- Link to related articles (builds topic clusters, improves SEO)
- Anchor text describes linked content ("learn more about permissions")
- Avoid orphan pages (every article linked from at least 2 other pages)

**Public SEO Strategy:**

If implementing {{SEO_strategy}} for public help center:
- **Meta Descriptions**: 150-160 characters, include primary keyword, compelling summary
- **URL Structure**: Clean, keyword-rich URLs (e.g., `/help/create-dashboard` not `/help/article-12345`)
- **Schema Markup**: HowTo schema, FAQPage schema for structured data
- **Backlinks**: Encourage linking from blog, community forums, social media
- **Search Console**: Monitor impressions, clicks, rankings for help center content

**Internal Search Optimization:**

Improve help center search experience:
- **Search Indexing**: Index titles, headings, body text, tags, synonyms
- **Natural Language Processing**: Understand "I can't log in" = "login issues"
- **Search Result Ranking**: Prioritize by relevance, popularity, recency, user ratings
- **Search Suggestions**: Auto-complete, "did you mean?", related queries
- **No Results Handling**: Suggest alternative searches, link to contact support, learn from failed queries

### Contextual Help Integration

**{{contextual_help_integration}} strategy:**

**In-App Help Triggers:**

Map documentation to product UI:

**"?" Icons and Tooltips:**
- Placement: Next to complex UI elements, settings, advanced features
- Behavior: Click → opens help panel with relevant article OR tooltip with 1-2 sentence explanation + "Learn more" link
- Example: "?" next to "Custom Filters" → "Use custom filters to segment data by any dimension. [Learn more about custom filters]"

**Empty States:**
- Context: User has no data, no projects, no team members yet
- Help Link: "Not sure where to start? [See our quick-start guide]"
- Value: Prevents blank screen paralysis, guides toward first action

**Error Messages:**
- Context: Integration fails, upload errors, permission issues
- Help Link: "Troubleshooting [Error Name]: [Link to troubleshooting article]"
- Value: Self-service resolution, reduces support tickets

**Feature Announcements:**
- Context: New feature launched, shown in modal or banner
- Help Link: "Learn how to use [New Feature]: [Video walkthrough]"
- Value: Drives adoption, educates users proactively

**Help Widget:**
- Placement: Persistent "?" or "Help" button in app navigation
- Functionality: Opens help panel with search, suggested articles, contact support
- Behavior: Suggests articles based on current page (e.g., on billing page, shows billing articles)

### Chatbot & AI Integration

**{{chatbot_capabilities}} implementation:**

**Conversational Help Search:**
- User asks: "How do I invite my team?"
- Bot responds: "I can help with that! Here are the steps to invite team members: [Shows quick answer + link to full article]"

**Intent Detection:**
- User says: "My data isn't syncing"
- Bot recognizes: Troubleshooting query, integration-related
- Bot suggests: Top 3 troubleshooting articles + "Still stuck? Chat with support"

**Suggested Articles:**
- Based on user behavior: "I noticed you're viewing the integrations page. Here are helpful articles: [List]"
- Based on common patterns: "Users often ask about [Topic] next. Want to learn more?"

**Escalation Handling:**
- If chatbot can't answer after 2-3 attempts: "Let me connect you with our support team. [Start chat] or [Send email]"
- Capture conversation for analytics: What questions does bot fail to answer? (Indicates documentation gaps)

### Content Lifecycle Management

**Creation Workflow:**

Define {{review_workflow}}:

1. **Ideation & Prioritization**
   - Sources: Support ticket trends, feature launches, user feedback, search analytics
   - Prioritization: High-impact (frequently asked) + Low-existing-coverage = urgent

2. **Drafting**
   - Author: Assigned based on expertise (product team for features, support team for troubleshooting)
   - Tools: Google Docs (for collaboration), help center CMS (for final publishing)
   - Timeline: 2-3 days for how-to articles, 1 week for tutorials

3. **Review**
   - Technical Review: Product/engineering verifies accuracy
   - Editorial Review: Content team checks style, formatting, clarity
   - Screenshots: Design team creates or validates visuals

4. **Approval**
   - Final sign-off from content lead or product manager
   - QA: Test all steps in article, verify screenshots current

5. **Publishing**
   - Publish to help center
   - Add to relevant categories, tag appropriately
   - Announce (if major article): In-app banner, email, social media

6. **Promotion**
   - Internal: Share with support team, sales team (for customer questions)
   - External: Link from product, blog post, social media
   - SEO: Submit to search engines, build internal links

**Maintenance & Updates:**

**Triggers for Content Updates:**
- Product changes (UI updates, feature changes, deprecations)
- Low article ratings ("Was this helpful? No" trends)
- Outdated screenshots (design system changes)
- User feedback ("This didn't work", "Step 3 is unclear")
- Search failures (users searching for topic not covered)

**Update Workflow:**
- **Quarterly Audit**: Review top 50 articles for accuracy, update screenshots
- **Release Coordination**: Update docs before or simultaneous with product releases
- **Deprecation**: When features removed, archive docs (don't delete, add "deprecated" notice)
- **Version Control**: Track article changes, note last updated date, maintain changelog for major articles

**Content Deprecation:**
- **When to Deprecate**: Feature removed, product version EOL, content no longer relevant
- **How to Deprecate**: Add banner "This feature is deprecated as of [Date]. See [New Feature]", keep article live for SEO, redirect if possible

### Measurement & Analytics

**{{help_center_metrics}} tracking:**

**Engagement Metrics:**
- **Page Views**: Total views per article (popularity indicator)
- **Unique Visitors**: Distinct users viewing article (reach)
- **Time on Page**: Average time spent reading (engagement, comprehension)
- **Bounce Rate**: % who leave after viewing one page (content relevance)
- **Scroll Depth**: % who scroll to end (completeness)

**Search Metrics:**
- **Top Search Queries**: What users are looking for (content gap analysis)
- **Search Success Rate**: % of searches that result in click (search relevance)
- **Failed Searches**: Queries with zero results (documentation gaps)
- **Search Refinements**: How often users search again after first result (poor relevance)

**Content Quality Metrics:**
- **Article Ratings**: "Was this helpful?" thumbs up/down ratio
- **Feedback Comments**: Qualitative feedback ("Step 3 didn't work", "Screenshots outdated")
- **Link Clicks**: Which "Related Articles" links get clicked (user journey)
- **Video Play Rate**: % who watch embedded videos (video effectiveness)

**Support Impact Metrics:**

Measure {{support_impact_metrics}}:

- **Ticket Deflection Rate**: % of help center visitors who don't submit ticket
  - Calculation: (Help center visits - Tickets submitted) / Help center visits
  - Target: 70-80% deflection rate

- **Ticket Volume Trends**: Week-over-week ticket reduction on topics with new/updated docs
  - Example: Published "How to reset password" → 40% reduction in password reset tickets

- **Resolution Time**: Tickets where support shares help article resolve faster
  - Example: Tickets with help article link resolve in 10 min vs. 30 min without

- **Customer Satisfaction (CSAT)**: Post-article survey "Did this solve your problem?"
  - Target: >80% "Yes" responses

**Content Performance Dashboard:**

Weekly/monthly reporting:

| Article Title | Views | Rating | Support Tickets (related topic) | Last Updated |
|---------------|-------|--------|----------------------------------|--------------|
| How to create dashboard | 1,245 | 87% 👍 | 12 (↓ 40% from last month) | 2025-01-15 |
| Troubleshooting sync issues | 892 | 64% 👍 | 45 (↑ 20% - needs update!) | 2024-10-03 (STALE) |

**Insights & Actions:**
- Top performers: Promote more, use as templates for new content
- Low-rated articles: Update, rewrite, or archive
- High-traffic + low-rating: High-priority fix (popular but not helpful)
- Failed searches: Create new content for unmet needs

### Localization Strategy

**{{localization_requirements}} implementation:**

**Translation Workflow:**
1. **Content Freeze**: Finalize English version before translation
2. **Translation**: Use professional translators (not machine translation for critical content)
3. **Review**: Native speaker review for accuracy and cultural appropriateness
4. **Publishing**: Publish all languages simultaneously (or stagger intentionally)
5. **Maintenance**: When English version updates, flag for re-translation

**Localization Considerations:**
- **Screenshots**: Re-create in each language OR use annotated arrows (text-free)
- **Videos**: Subtitles (easier) vs. re-recorded narration (better)
- **Examples**: Adapt to local context (use local currency, culturally relevant examples)
- **Help Center UI**: Translate category names, search placeholder, CTAs
- **SEO**: Localized keywords differ (research local search terms)

---

## Output Schema

```yaml
help_documentation_architecture:
  product_context:
    product_type: "{{product_type}}"
    product_complexity: "{{product_complexity}}"
    user_personas: ["End User", "Admin", "Developer", "Manager"]
    critical_workflows: ["Create dashboard", "Invite team", "Connect integration", "Export data", "Manage permissions"]

  taxonomy:
    structure_type: "Hybrid (browsable categories + workflow-based)"
    top_level_categories:
      - category: "Getting Started"
        description: "New user onboarding, quick-start guides, first steps"
        subcategories: ["Account Setup", "First Steps", "Quick Start Video"]
        article_count_target: "10-15 articles"

      - category: "Features"
        description: "Feature-by-feature documentation"
        subcategories: ["Analytics", "Collaboration", "Integrations", "Automation", "Reporting"]
        article_count_target: "50-100 articles"

      - category: "Workflows"
        description: "Goal-based guides (I want to...)"
        subcategories: ["Track Performance", "Collaborate with Team", "Automate Reports"]
        article_count_target: "20-30 articles"

      - category: "Integrations"
        description: "Third-party tool connections"
        subcategories: ["Google Ads", "Salesforce", "Slack", "Zapier", "API"]
        article_count_target: "30-50 articles"

      - category: "Account & Billing"
        description: "Account management, plans, billing"
        subcategories: ["Profile Settings", "Team Management", "Billing & Plans", "Security"]
        article_count_target: "15-25 articles"

      - category: "Troubleshooting"
        description: "Problem-solving guides"
        subcategories: ["Login Issues", "Data Sync Problems", "Integration Errors", "Performance"]
        article_count_target: "25-40 articles"

      - category: "API Documentation"
        description: "Developer resources"
        subcategories: ["Authentication", "Endpoints", "Webhooks", "Rate Limits", "Changelog"]
        article_count_target: "20-30 pages"

    navigation:
      browse: "Category tree, expandable subcategories"
      search: "Full-text search with autocomplete, search suggestions"
      contextual: "In-app help links, error message links, chatbot integration"

  content_types:
    quick_start_guides:
      purpose: "Get users to first value in <10 minutes"
      structure: "3-5 steps, heavy visuals, minimal text"
      examples: ["Get started in 5 minutes", "Your first dashboard", "Quick setup checklist"]

    how_to_articles:
      purpose: "Step-by-step task completion"
      structure: "Prerequisites → Steps → Result → Troubleshooting → Next Steps"
      examples: ["How to create a custom dashboard", "How to invite team members"]

    tutorials:
      purpose: "Teach concepts and workflows for mastery"
      structure: "Objective → Concept → Exercise → Next Steps"
      examples: ["Mastering advanced filters", "Building your first automation"]

    video_walkthroughs:
      purpose: "Visual demonstration of complex workflows"
      specs: "2-5 min, narrated, captions, embedded with transcript"
      examples: ["Watch: Set up your first integration (3 min)"]

    faqs:
      purpose: "Quick answers to common questions"
      structure: "Question → Concise answer → Link to detailed article"
      examples: ["How much does [Product] cost?", "What browsers are supported?"]

    troubleshooting_guides:
      purpose: "Solve problems when things go wrong"
      structure: "Symptom → Causes → Solutions (ordered by likelihood)"
      examples: ["Why isn't my data syncing?", "Troubleshooting login issues"]

    api_documentation:
      purpose: "Enable developer integrations"
      structure: "Authentication → Endpoints → Parameters → Examples → Rate Limits"
      examples: ["API Reference: POST /projects", "Webhook events"]

  content_creation:
    article_template:
      title: "[Clear, keyword-rich, action-oriented]"
      summary: "[1-2 sentence overview of what user will learn]"
      sections:
        - prerequisites: "What users need before starting (with links)"
        - steps: "Numbered, screenshot for each, tips/notes inline"
        - expected_result: "What success looks like (screenshot)"
        - troubleshooting: "Common issues and solutions"
        - next_steps: "Related articles, advanced guides"
        - feedback: "Was this helpful? [Yes/No/Comments]"

    writing_standards:
      voice:
        non_technical: "Conversational, empathetic, jargon-free"
        business_users: "Professional, outcome-focused, efficient"
        developers: "Precise, technical, code-first"

      formatting:
        headings: "H1 title, H2 sections, H3 subsections"
        lists: "Bulleted (unordered), Numbered (sequential)"
        emphasis: "**Bold** for UI elements, *italics* for emphasis"
        code: "`inline code`, ```code blocks```"
        links: "[descriptive text], not 'click here'"

    visual_standards:
      screenshots:
        annotation: "Red boxes, arrows, numbered steps"
        privacy: "Blur sensitive data (emails, names, payment info)"
        consistency: "Same browser, same theme (light mode), same resolution"
        updates: "Re-screenshot when UI changes"

      videos:
        duration: "2-3 min for simple, 4-8 min for complex"
        quality: "Clear audio, no background noise, 1080p min"
        captions: "Required for accessibility"
        transcript: "Text version below video"

  search_optimization:
    keyword_strategy:
      research: "Identify primary, secondary keywords, synonyms, long-tail queries"
      title_optimization: "Primary keyword in title, preferably at beginning"
      content_optimization: "Primary keyword in first paragraph, secondary throughout"
      internal_linking: "Link related articles, build topic clusters"

    public_seo:
      meta_descriptions: "150-160 characters, keyword-rich, compelling"
      url_structure: "Clean, keyword-rich (/help/create-dashboard)"
      schema_markup: "HowTo schema, FAQPage schema"
      backlinks: "Encourage linking from blog, community, social"

    internal_search:
      indexing: "Titles, headings, body text, tags, synonyms"
      nlp: "Understand natural language queries"
      ranking: "Relevance, popularity, recency, user ratings"
      suggestions: "Auto-complete, 'did you mean?', related queries"
      no_results: "Alternative suggestions, contact support, learn from failures"

  contextual_help:
    in_app_triggers:
      help_icons: "? icons next to complex UI → tooltip or help panel"
      empty_states: "No data yet → 'Not sure where to start? [Quick-start guide]'"
      error_messages: "Integration failure → 'Troubleshooting: [Link]'"
      feature_announcements: "New feature modal → 'Learn how to use [Feature]: [Video]'"

    help_widget:
      placement: "Persistent ? or Help button in navigation"
      functionality: "Search, suggested articles (based on current page), contact support"
      behavior: "Context-aware suggestions"

  chatbot_integration:
    capabilities:
      conversational_search: "User: 'How do I invite my team?' → Bot: Quick answer + link"
      intent_detection: "User: 'Data not syncing' → Bot: Troubleshooting articles"
      suggested_articles: "Based on user behavior and common patterns"
      escalation: "Can't answer → Connect to human support"

    analytics:
      track_failures: "What questions bot can't answer (documentation gaps)"
      improvement_loop: "Failed queries → create new content → re-train bot"

  content_lifecycle:
    creation_workflow:
      ideation: "Sources: support tickets, feature launches, user feedback, search analytics"
      prioritization: "High-impact + low-existing-coverage = urgent"
      drafting: "Assigned to author, 2-3 days for how-tos, 1 week for tutorials"
      review: "Technical review (accuracy), editorial review (style/clarity)"
      approval: "Final sign-off, QA test all steps"
      publishing: "Publish, categorize, tag, announce"
      promotion: "Share with internal teams, link from product, blog, social"

    maintenance:
      triggers:
        - "Product changes (UI updates, feature changes)"
        - "Low article ratings (needs improvement)"
        - "Outdated screenshots (design system changed)"
        - "User feedback ('This didn't work')"
        - "Failed searches (topic not covered)"

      update_schedule:
        quarterly_audit: "Review top 50 articles for accuracy"
        release_coordination: "Update docs with product releases"
        deprecation: "Archive old content with 'deprecated' notice"

    version_control:
      tracking: "Last updated date, changelog for major articles"
      history: "Maintain previous versions for reference"

  measurement:
    engagement_metrics:
      - metric: "Page views"
        target: "Track trends, identify popular content"
      - metric: "Time on page"
        target: ">2 minutes for how-tos (indicates reading)"
      - metric: "Bounce rate"
        target: "<40% (indicates relevance)"
      - metric: "Scroll depth"
        target: ">70% scroll to end"

    search_metrics:
      - metric: "Top search queries"
        insight: "What users are looking for (content gaps)"
      - metric: "Search success rate"
        target: ">80% of searches result in click"
      - metric: "Failed searches"
        action: "Create content for zero-result queries"

    content_quality_metrics:
      - metric: "Article ratings (Was this helpful?)"
        target: ">80% thumbs up"
      - metric: "Feedback comments"
        action: "Address issues mentioned in comments"

    support_impact_metrics:
      - metric: "Ticket deflection rate"
        calculation: "(Help center visits - Tickets) / Help center visits"
        target: "70-80%"

      - metric: "Ticket volume reduction"
        example: "New article → 40% reduction in related tickets"

      - metric: "Resolution time with articles"
        example: "Tickets with article link resolve 3x faster"

      - metric: "CSAT (post-article survey)"
        target: ">80% 'Yes, this solved my problem'"

    content_performance_dashboard:
      weekly_reporting:
        top_performers: "Most viewed, highest rated (promote, replicate)"
        low_performers: "Low rated, outdated (update or archive)"
        high_priority_fixes: "High traffic + low rating (popular but unhelpful)"
        failed_searches: "Create new content for unmet needs"

  localization:
    languages: ["English (default)", "Spanish", "French", "German", "Japanese"]
    translation_workflow:
      - step: "Content freeze (finalize English)"
      - step: "Professional translation"
      - step: "Native speaker review"
      - step: "Publishing (all languages simultaneously)"
      - step: "Maintenance (flag for re-translation when English updates)"

    localization_considerations:
      screenshots: "Re-create in each language OR use text-free annotations"
      videos: "Subtitles (easier) vs. re-recorded narration (better UX)"
      examples: "Adapt to local context (currency, culturally relevant scenarios)"
      seo: "Research local keywords (differ from English)"
```

---

## Examples

### Example 1: B2B SaaS Analytics Platform - Workflow-Based Help Center

**Context**: Complex multi-feature analytics platform. Users get overwhelmed by feature-based docs. Need workflow-based organization.

**Taxonomy Structure:**

```
Top-level: "I want to..."

├── Track marketing performance
│   ├── Connect advertising accounts (Google Ads, Facebook, LinkedIn)
│   ├── Build marketing dashboards
│   ├── Measure ROI and attribution
│   └── Share reports with team

├── Analyze sales pipeline
│   ├── Import contacts from CRM
│   ├── Track deal stages and velocity
│   ├── Forecast revenue
│   └── Identify at-risk deals

├── Monitor product usage
│   ├── Track user engagement metrics
│   ├── Analyze feature adoption
│   ├── Identify churn signals
│   └── Build retention cohorts

├── Collaborate with my team
│   ├── Invite team members and set permissions
│   ├── Share dashboards and reports
│   ├── Comment and annotate data
│   └── Schedule automated reports
```

**Why This Works:**
- Users think in goals ("I want to track marketing"), not features ("I need to use the API connector")
- Reduces cognitive load (don't need to know what features to use, just what outcome they want)
- Cross-functional teams can all find relevant content (marketing, sales, product all have dedicated sections)

**Sample Article: "Connect Google Ads to Track Campaign Performance"**

```markdown
# Connect Google Ads to Track Campaign Performance

**Learn how to connect your Google Ads account to automatically import campaign data and track ROI in real-time.**

---

## Prerequisites
- A Google Ads account with active campaigns
- Admin access to [Product] (or permission to add integrations)

## Steps

### Step 1: Navigate to Integrations
1. Click **Settings** in the top right
2. Select **Integrations** from the left menu
3. Find **Google Ads** and click **Connect**

![Settings > Integrations > Google Ads](screenshot-1.png)

💡 **Tip**: You can connect multiple Google Ads accounts if you manage campaigns for different clients or brands.

### Step 2: Authorize Access
1. Click **Authorize Google Ads**
2. Select the Google account associated with your ads
3. Click **Allow** to grant [Product] read-only access

![Google authorization screen](screenshot-2.png)

🔒 **Security Note**: We only request read-only access to your ad data. We cannot modify campaigns or spend your budget.

### Step 3: Select Accounts to Sync
1. Choose which Google Ads accounts to import (you may have multiple)
2. Select the date range for historical data (we recommend last 90 days)
3. Click **Start Sync**

![Account selection screen](screenshot-3.png)

⏱️ **Sync Time**: Initial sync takes 2-5 minutes depending on data volume. You'll receive a notification when complete.

### Step 4: Verify Your Data
Once sync is complete, you'll see:
- Campaign names and statuses
- Spend, impressions, clicks, conversions
- Performance trends over time

![Dashboard with Google Ads data](screenshot-4.png)

## Expected Result
You should now see your Google Ads data in [Product]:
- **Dashboards**: Pre-built Google Ads dashboard auto-created
- **Reports**: Campaign performance reports available
- **Real-time Sync**: Data updates every hour automatically

## Troubleshooting

**Problem**: "Authorization failed" error
**Solution**:
- Ensure you're logged into the correct Google account
- Check that you have admin access to Google Ads
- Try clearing your browser cache and retry
- [Still stuck? Contact support →]

**Problem**: Some campaigns are missing
**Solution**:
- Verify campaigns are active in Google Ads
- Check date range selection (only syncs selected period)
- Ensure campaigns weren't created after sync started
- [Learn more about data sync →]

**Problem**: Data looks incorrect or outdated
**Solution**:
- Initial sync can take up to 5 minutes (check sync status)
- Data refreshes every hour (not real-time)
- If data is >1 hour old, click **Refresh Now** in dashboard settings
- [Troubleshooting sync issues →]

## Next Steps
Now that your Google Ads data is connected, you might want to:
- [Create a custom marketing dashboard →]
- [Set up automated weekly reports →]
- [Track ROI and attribution across channels →]
- [Connect Facebook Ads and LinkedIn for cross-platform analysis →]

## Related Articles
- [How to build marketing dashboards]
- [Understanding attribution models]
- [Connecting multiple ad platforms]

---

**Was this article helpful?** [👍 Yes] [👎 No] [💬 Leave feedback]

*Last updated: January 15, 2025*
```

**Results**:
- 87% article rating (thumbs up)
- 40% reduction in "Google Ads integration" support tickets
- Avg time on page: 3:20 (indicates thorough reading)
- 68% proceed to "Create marketing dashboard" article (successful next step)

---

### Example 2: Developer Tool - API Documentation with Interactive Examples

**Context**: API-first product. Developers need comprehensive, testable API docs. Traditional static docs insufficient.

**API Documentation Structure:**

```
API Reference (Developer Portal)

├── Getting Started
│   ├── Authentication (API keys, OAuth 2.0)
│   ├── Quick Start (first API call in 5 minutes)
│   └── Postman Collection (downloadable)

├── Endpoints
│   ├── Projects
│   │   ├── GET /projects (list all)
│   │   ├── POST /projects (create)
│   │   ├── GET /projects/{id} (retrieve)
│   │   ├── PATCH /projects/{id} (update)
│   │   └── DELETE /projects/{id} (delete)
│   ├── Dashboards
│   ├── Users
│   └── Webhooks

├── Guides
│   ├── Pagination & Filtering
│   ├── Error Handling
│   ├── Rate Limiting
│   ├── Webhooks Setup
│   └── Best Practices

├── Changelog
│   ├── 2025-01-15: New Projects endpoint
│   ├── 2025-01-01: Breaking change: Auth v2
│   └── [Historical changes...]

├── SDKs & Libraries
│   ├── JavaScript SDK
│   ├── Python SDK
│   ├── Ruby SDK
│   └── Community Libraries
```

**Sample API Reference Page: POST /projects**

```markdown
# POST /projects

Create a new project in your workspace.

---

## Endpoint
```
POST https://api.example.com/v1/projects
```

## Authentication
Requires API key in header:
```
Authorization: Bearer YOUR_API_KEY
```

[How to get your API key →]

---

## Request Body

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Project name (max 100 characters) |
| `description` | string | No | Project description (max 500 characters) |
| `workspace_id` | string | Yes | ID of workspace to create project in |
| `tags` | array | No | Array of tag strings for organization |
| `visibility` | string | No | `public` or `private` (default: `private`) |

---

## Request Example

```bash
curl -X POST https://api.example.com/v1/projects \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Q1 Marketing Campaign",
    "description": "Track marketing performance for Q1 2025",
    "workspace_id": "ws_abc123",
    "tags": ["marketing", "2025", "q1"],
    "visibility": "private"
  }'
```

```javascript
// JavaScript (using Fetch API)
const response = await fetch('https://api.example.com/v1/projects', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Q1 Marketing Campaign',
    description: 'Track marketing performance for Q1 2025',
    workspace_id: 'ws_abc123',
    tags: ['marketing', '2025', 'q1'],
    visibility: 'private'
  })
});
const data = await response.json();
console.log(data);
```

```python
# Python (using requests library)
import requests

url = "https://api.example.com/v1/projects"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
payload = {
    "name": "Q1 Marketing Campaign",
    "description": "Track marketing performance for Q1 2025",
    "workspace_id": "ws_abc123",
    "tags": ["marketing", "2025", "q1"],
    "visibility": "private"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())
```

[▶️ Try it in our interactive API explorer]

---

## Response

### Success Response (201 Created)

```json
{
  "id": "proj_xyz789",
  "name": "Q1 Marketing Campaign",
  "description": "Track marketing performance for Q1 2025",
  "workspace_id": "ws_abc123",
  "tags": ["marketing", "2025", "q1"],
  "visibility": "private",
  "created_at": "2025-01-15T10:30:00Z",
  "updated_at": "2025-01-15T10:30:00Z",
  "created_by": {
    "id": "usr_123",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "url": "https://app.example.com/projects/proj_xyz789"
}
```

### Error Responses

**400 Bad Request** - Invalid parameters
```json
{
  "error": {
    "code": "invalid_parameters",
    "message": "Project name is required and cannot be empty",
    "details": {
      "field": "name",
      "issue": "required_field_missing"
    }
  }
}
```

**401 Unauthorized** - Invalid or missing API key
```json
{
  "error": {
    "code": "unauthorized",
    "message": "Invalid API key. Check your Authorization header.",
    "docs_url": "https://docs.example.com/authentication"
  }
}
```

**403 Forbidden** - Insufficient permissions
```json
{
  "error": {
    "code": "forbidden",
    "message": "You don't have permission to create projects in this workspace",
    "details": {
      "required_permission": "projects:create",
      "your_role": "viewer"
    }
  }
}
```

**429 Too Many Requests** - Rate limit exceeded
```json
{
  "error": {
    "code": "rate_limit_exceeded",
    "message": "You've exceeded the rate limit. Try again in 60 seconds.",
    "retry_after": 60
  }
}
```

[Learn more about error handling →]

---

## Rate Limits
- **Free plan**: 100 requests/hour
- **Pro plan**: 1,000 requests/hour
- **Enterprise**: Custom limits

[View your current usage →]

---

## Notes
- Project names must be unique within a workspace
- Maximum 1,000 projects per workspace
- Tags are case-insensitive and auto-lowercased
- `visibility` determines who can view project (doesn't affect API access)

---

## Related Endpoints
- [GET /projects] - List all projects
- [GET /projects/{id}] - Retrieve a project
- [PATCH /projects/{id}] - Update a project
- [DELETE /projects/{id}] - Delete a project

---

**Was this article helpful?** [👍 Yes] [👎 No] [💬 Report an issue]

*Last updated: January 15, 2025 | API Version: v1*
```

**Why This Works:**
- **Multiple Language Examples**: Developers use different languages; showing bash, JS, Python covers most users
- **Interactive Explorer**: Can test API without leaving docs
- **Comprehensive Error Documentation**: Shows ALL possible errors (not just success case)
- **Context and Constraints**: Notes section explains limits, behaviors, edge cases
- **Related Endpoints**: Guides to next logical API calls

**Results**:
- 92% developer satisfaction with API docs
- 50% reduction in API-related support tickets
- Interactive explorer used by 68% of developers (high engagement)
- Avg time on API doc pages: 5:40 (deep reading/testing)

---

### Example 3: Consumer App - Video-First Troubleshooting

**Context**: Mobile-first consumer app. Users struggle with text-heavy troubleshooting guides. Need visual, mobile-friendly help.

**Troubleshooting Article: "Why Isn't My Data Syncing?"**

```markdown
# Why Isn't My Data Syncing?

**If your data isn't appearing or seems outdated, this guide will help you fix it.**

---

## Quick Fixes (Try These First)

Before diving into detailed troubleshooting, try these common solutions:

1. **Check your internet connection**
   - Make sure you're connected to WiFi or cellular data
   - Try opening a website to test your connection

2. **Force a manual sync**
   - Open the app
   - Pull down on the home screen to refresh
   - Look for the sync indicator (spinning icon)

3. **Restart the app**
   - Close the app completely (swipe up from app switcher)
   - Reopen the app
   - Check if data appears

**Did this solve your problem?** [✓ Yes, I'm all set] [→ No, show me more solutions]

---

## Watch: Troubleshooting Sync Issues (2 min)

[Embedded video walkthrough of common sync problems and solutions]

*[Full transcript below for accessibility]*

---

## Detailed Troubleshooting

### Problem 1: Data is outdated (not real-time)

**Cause**: Our app syncs every 15 minutes (not real-time) to save battery.

**Solution**:
- **Manual sync**: Pull down on home screen to refresh now
- **Change sync frequency**: Settings > Sync > Auto-sync interval (5 min, 15 min, 30 min, hourly)
- **Note**: More frequent syncing uses more battery

![Settings > Sync > Auto-sync interval](screenshot-sync-settings.png)

---

### Problem 2: "Sync failed" error message

**Cause**: Usually a temporary connection issue or server problem.

**Solutions** (try in order):

1. **Check your internet connection**
   - Open Safari/Chrome and visit google.com
   - If website won't load, your internet is the issue
   - Try switching from WiFi to cellular (or vice versa)

2. **Check our status page**
   - Visit status.example.com
   - If we're having server issues, you'll see a banner
   - We'll notify you when resolved (usually <30 min)

3. **Re-authenticate**
   - Sometimes your login session expires
   - Go to Settings > Account > Sign Out
   - Sign back in with your credentials
   - Try syncing again

![Re-authenticate steps](gif-reauthenticate.gif)

---

### Problem 3: Some data is missing (not all data synced)

**Cause**: Filters or date range settings may be hiding data.

**Solutions**:

1. **Check your filters**
   - Tap the filter icon (funnel) in top right
   - Look for active filters (they'll be highlighted)
   - Tap **Clear all filters** to see everything

2. **Check your date range**
   - Tap the date selector
   - Ensure range includes the data you're expecting
   - Try **All time** to see if data appears

3. **Verify data source connection**
   - Settings > Integrations
   - Check if your data source shows **Connected** (green)
   - If disconnected (red), tap **Reconnect**

![Check filters and date range](screenshot-filters.png)

---

### Problem 4: Deleted data keeps reappearing

**Cause**: Sync conflict between app and server.

**Solution**:
1. **Force full re-sync**
   - Settings > Advanced > Clear local cache
   - Warning: This will sign you out
   - Sign back in to download fresh data

⚠️ **Note**: Only do this if data keeps reappearing. Clearing cache requires re-downloading all data (can take 1-2 minutes).

---

## Still Having Issues?

If none of these solutions worked, we're here to help:

1. **Contact Support**
   - Tap **Settings > Help > Contact Support**
   - Describe your issue and include:
     - Device type (iPhone 15, Samsung Galaxy S24, etc.)
     - App version (Settings > About)
     - Screenshot of error message (if applicable)

2. **Expected Response Time**
   - We typically respond within 2 hours (business hours)
   - We may ask for additional details to troubleshoot

[Contact Support Now →]

---

## Related Articles
- [How to connect your data source]
- [Understanding sync frequency and battery usage]
- [How to clear cache and reset the app]

---

**Was this article helpful?** [👍 Yes] [👎 No] [💬 Leave feedback]

*Last updated: January 10, 2025*
```

**Why This Works:**
- **Quick Fixes First**: 80% of users solve problem with first 3 steps (don't bury the solution)
- **Video Option**: Visual learners can watch instead of reading
- **Progressive Disclosure**: Simple → Complex solutions (don't overwhelm immediately)
- **Mobile-Optimized**: Short paragraphs, large buttons, touch-friendly layout
- **Clear Escalation Path**: If self-service fails, easy path to human support

**Results**:
- 76% of users solve sync issues without contacting support (deflection rate)
- 89% article rating (very helpful)
- Video watched by 54% of visitors (high engagement)
- Support tickets for sync issues dropped 62% after publishing

---

## Success Metrics

- **Ticket Deflection Rate**: 70-80% of help center visitors don't submit support ticket
- **Article Quality**: >80% "Was this helpful? Yes" rating across all articles
- **Search Success**: >80% of searches result in article click (good relevance)
- **Time to Resolution**: Users who find help article resolve issues 3x faster than those who contact support
- **Content Coverage**: <5% of failed searches (indicates comprehensive coverage)
- **Engagement**: >2 minutes average time on how-to articles (indicates thorough reading)
- **Support Impact**: Measurable ticket volume reduction on topics with new/updated docs

---

## Best Practices

- **Write for Skimmers**: Use headings, bullets, bold text; assume users won't read every word
- **Show, Don't Just Tell**: Screenshots, GIFs, videos > walls of text
- **Front-Load Solutions**: Put most common fix first, don't bury the answer
- **Update Ruthlessly**: Stale screenshots destroy trust; re-screenshot with every UI change
- **Link Generously**: Internal links guide users to next logical step, reduce orphan pages
- **Test Your Own Docs**: Have someone unfamiliar follow your guide; if they struggle, rewrite
- **Measure and Iterate**: Low ratings? Update. Failed searches? Create content. High tickets? Better docs needed.
- **Optimize for Search**: Users search, not browse; titles and content need clear keywords
- **Make Feedback Easy**: "Was this helpful?" on every article; act on negative feedback quickly
- **Contextual Over Comprehensive**: Link from product to relevant help article > sending users to search

---

## Common Pitfalls

- **Feature-Focused Organization**: Users think in tasks ("How do I share?"), not features ("What is the Share Module?")
- **Assuming Product Knowledge**: Don't use internal jargon; users don't know your architecture
- **Stale Screenshots**: Nothing destroys trust faster than docs that don't match product
- **No Search Optimization**: Writing docs but not thinking about how users will find them
- **Text-Only**: Some tasks need visual demonstration (GIFs, videos, diagrams)
- **Ignoring Mobile**: 40%+ of users access help on mobile; test on small screens
- **No Maintenance Plan**: Docs decay over time; need quarterly audits and updates
- **Burying Important Info**: Don't hide critical steps in middle of long article
- **No Feedback Loop**: If you're not tracking article ratings and failed searches, you're flying blind
- **Over-Organizing**: 20 top-level categories = paradox of choice; keep structure simple

---

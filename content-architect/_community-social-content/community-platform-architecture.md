## Community Platform Architecture v1.0

**Purpose**: Design a comprehensive, self-sustaining community platform ecosystem that drives product adoption, reduces support costs by 30-50%, and creates measurable business value through strategic content frameworks, engagement systems, moderation governance, and data-driven optimization that transforms users into advocates, contributors, and brand ambassadors.

**Context**: Use this framework when building or scaling online communities for products, brands, or services. Ideal for SaaS platforms building user communities, consumer brands fostering customer connection, developer products creating technical ecosystems, or enterprise software enabling customer-to-customer support. Applies to discussion forums, Q&A platforms, knowledge-sharing networks, user groups, and social community spaces across B2B, B2C, and developer audiences.

**Strategic Frameworks Applied**:
- **Community Maturity Model** - Progressive growth from launch to self-sustaining ecosystem
- **Engagement Loop Design** - Reciprocity, recognition, and reward systems that drive participation
- **Content Flywheel Architecture** - User-generated content that attracts, engages, and converts
- **Moderation & Governance Framework** - Scalable community management and safety systems
- **Social Capital Theory** - Reputation, trust, and status mechanisms
- **Network Effects Optimization** - Value increases exponentially with member growth

---

## Variables

Define strategic variables for comprehensive community platform design:

### Business & Product Context
- `{{product_type}}`: SaaS platform | Consumer app | Developer tool | Marketplace | Hardware + software
- `{{community_purpose}}`: Support deflection | Product education | User advocacy | Innovation/feedback | Network effects
- `{{business_goals}}`: Reduce support costs | Drive retention | Increase feature adoption | Generate UGC | Build brand love
- `{{target_members}}`: Existing customers | Prospects | Partners | Developers | General public
- `{{company_stage}}`: Early-stage (<1K users) | Growth (1K-50K) | Scale (50K-500K) | Enterprise (500K+)

### Community Strategy Variables
- `{{platform_type}}`: Discussion forum (Discourse, Circle) | Q&A (Stack Overflow style) | Social network | Slack/Discord | Hybrid
- `{{community_model}}`: Public (open to all) | Gated (customers only) | Tiered (free + premium tiers) | Private (invitation only)
- `{{content_structure}}`: Categories & topics | Tags & search | Groups & channels | Knowledge base integration
- `{{primary_use_cases}}`: Peer-to-peer support | Best practice sharing | Feature requests | Networking | Events & meetups
- `{{tone_and_culture}}`: Professional & helpful | Friendly & casual | Technical & precise | Creative & inspiring

### Engagement Architecture Variables
- `{{engagement_drivers}}`: Gamification (points, badges) | Recognition (featured members) | Access (exclusive content) | Influence (voting, moderation)
- `{{contribution_types}}`: Questions & answers | Discussions | Tutorials | Code examples | Product reviews | Event organization
- `{{reward_systems}}`: Reputation points | Badges & achievements | Leaderboards | Swag & perks | Early access | Direct influence
- `{{member_journey_stages}}`: Lurker (reads only) | Contributor (first post) | Regular (weekly activity) | Champion (daily engagement) | Advocate (recruits others)
- `{{activation_strategy}}`: Onboarding flow | Welcome content | First-post nudges | Mentor matching | Challenges

### Moderation & Governance Variables
- `{{moderation_model}}`: Company-led | Community-led (volunteers) | Hybrid | AI-assisted
- `{{community_guidelines}}`: Code of conduct | Content policies | Acceptable use | Enforcement procedures
- `{{moderation_tools}}`: Flagging system | Auto-moderation (AI) | Moderator dashboard | Warning/ban workflows
- `{{escalation_paths}}`: Self-moderation → Volunteer mods → Staff mods → Legal/safety team
- `{{trust_and_safety}}`: Spam prevention | Harassment policies | Data privacy | Content rights

### Platform & Technical Variables
- `{{hosting_platform}}`: Discourse | Circle | Vanilla Forums | Khoros | Slack/Discord | Custom-built | Reddit-style
- `{{integration_points}}`: Product (SSO, in-app links) | Help center (cross-linking) | CRM (member data) | Analytics (tracking engagement)
- `{{search_and_discovery}}`: Full-text search | Tag-based | AI-powered recommendations | Related content suggestions
- `{{mobile_optimization}}`: Mobile web | Native app | Progressive web app (PWA) | Mobile-first design
- `{{accessibility_requirements}}`: WCAG 2.1 AA | Screen reader optimization | Keyboard navigation | High-contrast mode

### Measurement & Operations Variables
- `{{success_metrics}}`: Active members | Posts per week | Response rate | Support deflection | Retention | NPS
- `{{community_team_size}}`: Solo community manager | Small team (2-5) | Large team (5+) | Distributed (regional)
- `{{operational_cadence}}`: Daily moderation | Weekly featured content | Monthly events | Quarterly surveys
- `{{content_ownership}}`: Community team | Cross-functional (product, support, marketing) | Members themselves
- `{{budget_allocation}}`: Platform costs | Swag & rewards | Events | Moderation tools | Content creation

---

## Prompt

You are a community architect designing a comprehensive, self-sustaining community platform for **{{product_type}}** with the primary purpose of **{{community_purpose}}** to achieve **{{business_goals}}**. Your task is to create a scalable **{{platform_type}}** using **{{community_model}}** that serves **{{target_members}}** through strategic content architecture, engagement systems, moderation governance, and measurable business impact across **{{member_journey_stages}}**.

### Community Foundation & Strategy

**Purpose Definition:**
Clarify why the community exists and what value it creates:

**For {{community_purpose}}, design for:**

**Support Deflection:**
- **Value Proposition**: "Get answers in minutes from people who've solved this before"
- **Success Metric**: 30-50% reduction in support tickets for topics covered in community
- **Content Focus**: How-to guides, troubleshooting threads, FAQs, solution libraries
- **Member Motivation**: Help others, build reputation, give back

**Product Education:**
- **Value Proposition**: "Master [product] faster with tutorials, tips, and best practices from power users"
- **Success Metric**: 25% faster time-to-value for community members vs. non-members
- **Content Focus**: Tutorials, webinar recordings, use case studies, templates
- **Member Motivation**: Learn, stay up-to-date, level up skills

**User Advocacy:**
- **Value Proposition**: "Shape the future of [product] and connect with fellow power users"
- **Success Metric**: 40% of product feedback comes from community; 60% of beta testers recruited from community
- **Content Focus**: Feature requests, product roadmap discussions, beta testing, feedback forums
- **Member Motivation**: Influence product, early access, insider status

**Innovation & Feedback:**
- **Value Proposition**: "Share ideas, vote on features, and see your feedback come to life"
- **Success Metric**: 20% of new features originate from community suggestions
- **Content Focus**: Idea boards, voting systems, AMA (Ask Me Anything) with product team
- **Member Motivation**: Be heard, shape product direction, recognition

**Network Effects (Marketplace/Platform):**
- **Value Proposition**: "Find collaborators, partners, and opportunities in our ecosystem"
- **Success Metric**: 30% of users discover value through community connections
- **Content Focus**: Member directory, partnership opportunities, job board, project showcases
- **Member Motivation**: Business growth, networking, exposure

**Community Charter Development:**
```markdown
[Product Name] Community Charter

**Our Purpose:**
[Why this community exists - 2-3 sentences]

**Who We Serve:**
[Target member profiles]

**What We Offer:**
- [Value #1: e.g., Peer-to-peer support]
- [Value #2: e.g., Product education]
- [Value #3: e.g., Networking]

**Our Values:**
- [Value #1: e.g., Helpfulness - We support each other's success]
- [Value #2: e.g., Respect - We disagree constructively]
- [Value #3: e.g., Growth - We share knowledge generously]

**How We Operate:**
- [Governance model: e.g., Community-led moderation]
- [Decision-making: e.g., Feedback incorporated into roadmap quarterly]
- [Recognition: e.g., Top contributors featured monthly]
```

### Information Architecture & Content Structure

**For {{content_structure}}, design navigation and organization:**

**Forum/Discussion Model (Category-Based):**
```
Community Structure:

📚 Getting Started
  ├─ New Member Introductions
  ├─ Platform Basics
  └─ FAQ & Quick Answers

💡 Product Help & Support
  ├─ General Questions
  ├─ Technical Issues
  ├─ Feature Requests
  └─ Bug Reports

🎓 Tutorials & Resources
  ├─ Beginner Guides
  ├─ Advanced Techniques
  ├─ Video Tutorials
  └─ Templates & Examples

🤝 Community & Networking
  ├─ Show & Tell (Showcase your work)
  ├─ Meetups & Events
  ├─ Job Board
  └─ Off-Topic

🔧 Developer Corner (if applicable)
  ├─ API & Integration
  ├─ Code Examples
  └─ Open Source Contributions

🏆 Recognition & Feedback
  ├─ Member Spotlights
  ├─ Product Updates
  └─ Community Feedback
```

**Q&A Model (Stack Overflow Style):**
- **Structure**: Tag-based (not category-based)
- **Key Features**: Upvoting, accepted answers, reputation system
- **Tags**: #getting-started #billing #api #performance #integrations
- **Example**: "How do I export data?" → Tagged #data #export #how-to

**Social Network Model (Slack/Discord Style):**
- **Channels**: #general, #help, #feature-requests, #random
- **Threading**: Organized conversations within channels
- **DMs & Groups**: Private messaging for networking
- **Example**: #help channel for quick questions, #show-and-tell for work showcases

**Hybrid Model (Recommended for Most):**
- **Forum**: Long-form discussions, tutorials, feature requests
- **Chat (Slack/Discord)**: Real-time help, casual conversation, events
- **Knowledge Base**: Best community content promoted to official docs
- **Integration**: Cross-link between all three

**Content Types & Templates:**

**Question Thread Template:**
```
Title: [Clear, specific question]

**What I'm trying to do:**
[Goal or use case]

**What I've tried:**
- [Attempt 1]
- [Attempt 2]

**Error/Issue:**
[Screenshot or error message if applicable]

**My setup:**
- Plan: [Free/Pro/Enterprise]
- Version: [If applicable]
- Browser/Device: [If relevant]
```

**Solution/Tutorial Template:**
```
Title: [How to accomplish specific task]

**What this solves:**
[Problem or use case]

**Prerequisites:**
- [Requirement 1]
- [Requirement 2]

**Step-by-Step:**
1. [Action]
2. [Action]
3. [Action]

**Result:**
[What success looks like + screenshot]

**Pro Tips:**
- [Tip 1]
- [Tip 2]
```

**Show & Tell Template:**
```
Title: [Project name or achievement]

**What I built:**
[Description + screenshot/video]

**How I used [Product]:**
[Specific features or workflows]

**Lessons learned:**
- [Insight 1]
- [Insight 2]

**Ask me anything!**
[Invite discussion]
```

### Member Journey & Activation Strategy

**For {{member_journey_stages}}, design progression paths:**

**Stage 1: Lurker (0-30 days, 80% of visitors)**
- **Behavior**: Reads content, searches for answers, doesn't post
- **Goal**: Get them to create account and make first contribution
- **Tactics**:
  - **Low-Friction Signup**: SSO with product account (one-click join)
  - **Compelling Read-Only Value**: Ensure great content visible without account
  - **Conversion Prompts**: "Want to ask a question? Join the community"
  - **Welcome Email Series**: Day 1, 3, 7 with "How to get started" tips

**Stage 2: Contributor (First Post)**
- **Behavior**: Made 1-3 posts or comments
- **Goal**: Get them to return and contribute again
- **Tactics**:
  - **Instant Gratification**: "Welcome! You just earned your first badge 🎉"
  - **Response Guarantee**: Community managers respond to ALL first posts within 24h
  - **Social Proof**: "Your question has 15 views! Someone will answer soon."
  - **Follow-Up Nudge**: Email when someone replies to their post

**Stage 3: Regular (Weekly Activity)**
- **Behavior**: Logs in weekly, contributes 1-5 times/month
- **Goal**: Increase frequency and deepen engagement
- **Tactics**:
  - **Personalized Recommendations**: "Based on your interests, check out [thread]"
  - **Recognition**: Shout-out in weekly community newsletter
  - **Progressive Challenges**: "You're 3 posts away from [next badge]!"
  - **Invitations**: "Join our monthly virtual meetup"

**Stage 4: Champion (Daily Engagement)**
- **Behavior**: Visits daily, top 10% contributor
- **Goal**: Convert to advocate and potential moderator
- **Tactics**:
  - **Special Access**: Beta features, product team AMAs, exclusive events
  - **Influence**: "Your feedback led to [feature]—thank you!"
  - **Leadership Opportunities**: "Interested in becoming a moderator?"
  - **Swag & Perks**: Exclusive merchandise, conference tickets, spotlight features

**Stage 5: Advocate (Recruits Others)**
- **Behavior**: Recruits new members, organizes events, represents brand
- **Goal**: Empower and support their advocacy
- **Tactics**:
  - **Ambassador Program**: Official status, budget for local meetups
  - **Co-Creation**: Collaborate on content (webinars, tutorials, case studies)
  - **Executive Access**: Quarterly calls with CEO/product leaders
  - **Revenue Share**: Referral program, partner opportunities (if applicable)

**Activation Playbook (First 30 Days):**
```
Day 1: Welcome Email
- Introduce community purpose
- Link to "Start here" guide
- Encourage first post

Day 3: Engagement Nudge
- "Have a question? Ask the community!"
- Showcase trending discussions
- Success story: "Meet [member] who solved [problem]"

Day 7: Value Reminder
- "Here's what you missed this week"
- Top 3 popular threads
- "Your profile is 60% complete—finish it to get noticed"

Day 14: Personal Outreach
- Community manager sends personal message
- "How can we help you get more value?"
- Offer to connect them with relevant members

Day 30: Milestone Celebration
- "You've been a member for 30 days!"
- Highlight their contributions (even if small)
- "Ready to level up? Try [next action]"
```

### Engagement Systems & Gamification

**For {{engagement_drivers}}, design motivation loops:**

**Reputation & Points System:**
- **Earn Points For**:
  - Asking a question: +5 points
  - Answering a question: +10 points
  - Answer marked as "solution": +50 points
  - Upvoted post: +2 points per upvote
  - Downvoted post: -5 points (discourages low-quality)
  - Daily login streak: +1 point

- **Points Enable**:
  - Unlock features (messaging, profile customization at 50 points)
  - Leaderboards (top 10 monthly contributors)
  - Bragging rights (display point total on profile)

**Badges & Achievements (Examples):**
- **First Steps**: "First Post," "First Reply," "Profile Complete"
- **Contribution**: "10 Answers," "100 Answers," "1,000 Answers"
- **Quality**: "Solution Accepted," "10 Solutions," "50 Solutions"
- **Community**: "Friendly" (10 thank-yous), "Mentor" (helped 5 new members)
- **Consistency**: "7-Day Streak," "30-Day Streak," "365-Day Streak"
- **Special**: "Beta Tester," "Event Organizer," "Bug Hunter"

**Leaderboards (Use Carefully - Can Demotivate):**
- **Weekly Top Contributors**: Resets weekly so new members can win
- **Category Leaders**: Expertise recognition (e.g., "Top contributor in #integrations")
- **Avoid**: All-time leaderboards dominated by same 5 people (discourages new members)

**Recognition Programs:**
- **Member of the Month**: Featured profile, interview, exclusive swag
- **Community Spotlight**: Showcase interesting projects or use cases
- **Thank You Notes**: Company leadership personally thanks top contributors
- **Case Studies**: Turn power users into customer success stories (with permission)

**Exclusive Access & Influence:**
- **Beta Features**: Early access to new product features
- **Product Roadmap Previews**: Quarterly roadmap reveal + feedback sessions
- **Advisory Board**: Top 10 members invited to quarterly product advisory calls
- **AMAs**: Private Q&A sessions with executives or product team

**Tangible Rewards (Use Sparingly):**
- **Swag**: T-shirts, stickers, hoodies for milestones
- **Conference Tickets**: Send top contributors to industry events
- **Account Upgrades**: Free month of Pro plan, additional seats
- **Cash/Credit**: Referral bonuses, bug bounties (if applicable)

**Avoid Over-Gamification:**
- **Quality Over Quantity**: Reward helpful answers, not just volume
- **Intrinsic Motivation**: People join to help and learn; extrinsic rewards should enhance, not replace
- **Fairness**: Don't let gamification create "gaming the system" behavior

### Content Programming & Community Activations

**For {{operational_cadence}}, design recurring content:**

**Daily Activations:**
- **Daily Discussion Threads**: "Monday Motivation: Share your wins from last week"
- **Office Hours**: Community manager online for live Q&A (30-60 min)
- **Moderation**: Review flagged content, welcome new members, respond to key threads

**Weekly Programming:**
- **Feature Friday**: Highlight underutilized product feature with tutorial
- **Tip Tuesday**: Share quick tips, tricks, hacks
- **Member Spotlight**: Interview/feature active community member
- **Newsletter**: "This Week in [Community]" - top threads, upcoming events, new members

**Monthly Events:**
- **Virtual Meetup**: Theme-based (e.g., "Integrations Masterclass," "Ask Product Team Anything")
- **Challenge**: "30-Day [Feature] Challenge" with daily prompts
- **Contest**: Best use case, most creative implementation, etc. (prizes: swag, upgrades)
- **AMA (Ask Me Anything)**: Founder, product leader, or industry expert

**Quarterly Initiatives:**
- **Community Survey**: "How are we doing? What do you want to see?"
- **Member Awards**: Recognize top contributors, helpers, organizers
- **Roadmap Preview**: Share product plans, gather feedback
- **Regional Meetups**: Support in-person gatherings (if scale allows)

**Annual Highlights:**
- **Community Conference**: Virtual or hybrid event celebrating community
- **Year in Review**: Data & highlights (members joined, questions answered, impact)
- **Community Awards**: Hall of Fame, lifetime achievement recognition

**Content Seeding (Early Days):**
When community is new and empty:
- **Staff Seed Content**: Employees post questions and answers to populate
- **Customer Interviews**: Convert existing customer success stories into posts
- **Migrate from Other Channels**: Move FAQ, support tickets, Slack threads into community
- **Invite Power Users**: Personally recruit 10-20 active customers to kickstart

### Moderation & Governance Framework

**For {{moderation_model}}, establish systems:**

**Moderation Tiers:**

**Tier 1 - Automated (AI + Rules):**
- **Spam Detection**: Auto-flag posts with suspicious links, repeated content
- **Profanity Filter**: Auto-hide posts with banned words (review before deleting)
- **New Member Restrictions**: First post requires approval (prevents spam bots)
- **Rate Limiting**: Max 10 posts/hour to prevent flooding
- **Tools**: Discourse Akismet, Reddit-style auto-mod rules, custom scripts

**Tier 2 - Community Self-Moderation:**
- **Flagging System**: Members can flag posts as spam, offensive, off-topic
- **Voting**: Heavily downvoted content hidden (but not deleted)
- **Trusted Members**: Long-time members get limited mod powers (edit, move threads)
- **Threshold**: 5 flags → auto-hide post → staff reviews within 24h

**Tier 3 - Volunteer Moderators:**
- **Recruitment**: Invite top 1% contributors who demonstrate good judgment
- **Powers**: Edit posts, move threads, warn members, temporary mutes
- **Training**: Provide moderation guidelines, de-escalation tactics
- **Support**: Staff moderators available for complex issues
- **Recognition**: "Moderator" badge, exclusive swag, annual appreciation event

**Tier 4 - Staff Moderators:**
- **Role**: Handle escalations, bans, legal issues, crisis situations
- **Powers**: Full admin access, permanent bans, legal takedowns
- **Escalation Path**: Volunteer mod → staff mod → legal/safety team
- **On-Call**: For 24/7 communities, staff mod coverage in different time zones

**Community Guidelines (Code of Conduct):**
```markdown
[Product Name] Community Guidelines

**Be Respectful**
- No personal attacks, harassment, or hate speech
- Disagree with ideas, not people
- Assume good intent; ask clarifying questions before reacting

**Be Helpful**
- Provide constructive feedback, not just criticism
- Share knowledge generously
- Celebrate others' successes

**Stay On-Topic**
- Keep discussions relevant to [product/community purpose]
- Use appropriate categories/channels
- Off-topic chat belongs in #random or #off-topic

**No Spam or Self-Promotion**
- Share your work in #show-and-tell, not every thread
- Affiliate links and excessive promotion = ban
- Genuine recommendations are welcome

**Protect Privacy**
- Don't share others' personal information
- Don't post confidential company/customer data
- Use anonymized examples in discussions

**Consequences**
- Warning: First offense (unless severe)
- Temporary Mute: 7 days for repeated violations
- Permanent Ban: Harassment, spam, illegal content, or repeated violations
```

**Enforcement Procedures:**
```
Violation Reported/Detected
    ↓
Tier 1 Auto-Mod: Spam/profanity flagged
    → Auto-hide → Staff reviews within 24h
    ↓
Tier 2 Community Flagging: 5+ flags
    → Auto-hide → Staff reviews within 24h
    ↓
Tier 3 Volunteer Mod: Escalated issue
    → Warning issued → Documented → Notify staff
    ↓
Tier 4 Staff Mod: Serious violation
    → Investigate → Warn, mute, or ban → Notify member
    → Appeal process available (email staff)
```

### Platform Integration & Technical Architecture

**For {{integration_points}}, connect community to ecosystem:**

**Product Integration (SSO & Contextual Access):**
- **Single Sign-On**: Use product login for community (no separate account)
- **In-Product Links**: "Need help? Ask the community" button in product nav
- **Contextual Help**: Error messages link to relevant community threads
- **User Data Sync**: Product plan/role visible in community profile

**Help Center Integration:**
- **Cross-Linking**: Help articles link to community discussions for deeper Q&A
- **Community Answers Promoted**: Best community solutions become official help articles
- **Search Integration**: Searching help center includes community results

**CRM Integration:**
- **Member Data**: Community activity synced to CRM (e.g., "Active community member" tag)
- **Support Ticket Deflection**: Track when users find answers in community vs. contacting support
- **Customer Success**: CSMs see customer's community engagement (risk/health indicator)

**Analytics Integration:**
- **Track Engagement**: Google Analytics, Mixpanel, or Amplitude for community events
- **Cohort Analysis**: Compare behavior of community members vs. non-members
- **Attribution**: Track community's impact on retention, expansion, referrals

**Email & Notifications:**
- **Digest Emails**: Weekly summary of top threads (opt-in, not forced)
- **Reply Notifications**: Email when someone replies to your post
- **Mention Notifications**: Email when @mentioned
- **Preference Center**: Users control frequency and types of notifications

**Mobile Optimization:**
- **Responsive Design**: Community works on mobile web
- **Native App** (Optional): For high-engagement communities (Slack/Discord model)
- **Push Notifications**: For time-sensitive interactions (mobile app only)

---

## Output Schema

```yaml
community_platform_architecture:
  foundation:
    purpose: "{{community_purpose}}"
    business_goals: ["{{business_goals}}"]
    target_members: "{{target_members}}"
    platform_type: "{{platform_type}}"
    community_model: "{{community_model}}"

  strategy:
    value_proposition:
      for_members: "Get answers in minutes, learn from experts, shape the product"
      for_business: "Reduce support costs 30-50%, increase retention 20%, drive advocacy"

    charter:
      purpose: "A place for [product] users to help each other succeed"
      who_we_serve: ["Customers", "Prospects", "Partners"]
      what_we_offer: ["Peer support", "Product education", "Networking"]
      values: ["Helpfulness", "Respect", "Growth mindset"]

  information_architecture:
    structure: "{{content_structure}}"

    categories:
      - name: "Getting Started"
        sub_categories: ["New Member Intros", "Platform Basics", "FAQ"]
        purpose: "Onboarding and orientation"

      - name: "Product Help & Support"
        sub_categories: ["General Questions", "Technical Issues", "Feature Requests", "Bug Reports"]
        purpose: "Peer-to-peer support (deflects tickets)"

      - name: "Tutorials & Resources"
        sub_categories: ["Beginner Guides", "Advanced Techniques", "Templates"]
        purpose: "Education and skill-building"

      - name: "Community & Networking"
        sub_categories: ["Show & Tell", "Events", "Job Board", "Off-Topic"]
        purpose: "Connection and relationship-building"

    content_templates:
      - type: "Question Thread"
        required_fields: ["What I'm trying to do", "What I've tried", "My setup"]
        purpose: "Structured questions get better answers"

      - type: "Solution/Tutorial"
        required_fields: ["What this solves", "Prerequisites", "Step-by-step"]
        purpose: "Reusable, evergreen content"

  member_journey:
    stages: "{{member_journey_stages}}"

    stage_progression:
      - stage: "Lurker (0-30 days)"
        behavior: "Reads content, doesn't post"
        goal: "First contribution"
        tactics:
          - "Low-friction signup (SSO)"
          - "Welcome email series (Days 1, 3, 7)"
          - "Conversion prompts: 'Want to ask? Join us'"

      - stage: "Contributor (First post)"
        behavior: "Made 1-3 posts"
        goal: "Return and contribute again"
        tactics:
          - "Instant badge: 'First Post 🎉'"
          - "Community manager responds within 24h"
          - "Email when someone replies"

      - stage: "Regular (Weekly activity)"
        behavior: "Logs in weekly, 1-5 contributions/month"
        goal: "Increase frequency"
        tactics:
          - "Personalized recommendations"
          - "Recognition in newsletter"
          - "Progressive challenges (badges)"

      - stage: "Champion (Daily engagement)"
        behavior: "Daily visits, top 10% contributor"
        goal: "Convert to advocate"
        tactics:
          - "Beta access, exclusive events"
          - "Moderator opportunities"
          - "Swag & perks"

      - stage: "Advocate (Recruits others)"
        behavior: "Organizes events, represents brand"
        goal: "Empower advocacy"
        tactics:
          - "Ambassador program"
          - "Co-create content"
          - "Executive access"

  engagement_systems:
    drivers: "{{engagement_drivers}}"

    reputation_system:
      earn_points:
        - action: "Ask question"
          points: "+5"
        - action: "Answer question"
          points: "+10"
        - action: "Answer marked as solution"
          points: "+50"
        - action: "Post upvoted"
          points: "+2 per upvote"

      points_enable:
        - "Unlock features (messaging at 50 points)"
        - "Leaderboards (top 10 monthly)"
        - "Profile badge display"

    badges:
      first_steps: ["First Post", "First Reply", "Profile Complete"]
      contribution: ["10 Answers", "100 Answers", "1,000 Answers"]
      quality: ["Solution Accepted", "10 Solutions", "50 Solutions"]
      community: ["Friendly (10 thank-yous)", "Mentor (helped 5 new members)"]
      special: ["Beta Tester", "Event Organizer", "Bug Hunter"]

    recognition:
      - program: "Member of the Month"
        reward: "Featured profile, interview, exclusive swag"

      - program: "Community Spotlight"
        reward: "Showcase project on blog/social"

      - program: "Thank You Notes"
        reward: "Personal message from leadership"

  content_programming:
    cadence: "{{operational_cadence}}"

    daily:
      - "Daily discussion threads (Monday Motivation, etc.)"
      - "Office hours (30-60 min live Q&A)"
      - "Moderation (flagged content, welcome new members)"

    weekly:
      - "Feature Friday (highlight underutilized feature)"
      - "Tip Tuesday (quick tips)"
      - "Member Spotlight (interview active member)"
      - "Newsletter: This Week in Community"

    monthly:
      - "Virtual meetup (themed)"
      - "Challenge (30-Day [Feature] Challenge)"
      - "Contest (best use case, prizes)"
      - "AMA with founder/product team"

    quarterly:
      - "Community survey"
      - "Member awards"
      - "Roadmap preview + feedback"
      - "Regional meetups (in-person)"

    annual:
      - "Community conference"
      - "Year in Review report"
      - "Hall of Fame awards"

  moderation_governance:
    model: "{{moderation_model}}"

    tiers:
      - tier: "Tier 1 - Automated"
        capabilities: ["Spam detection", "Profanity filter", "Rate limiting"]
        tools: "Discourse Akismet, auto-mod rules"

      - tier: "Tier 2 - Community Self-Moderation"
        capabilities: ["Flagging system", "Voting (hide low-quality)", "Trusted member edits"]
        threshold: "5 flags → auto-hide → staff review"

      - tier: "Tier 3 - Volunteer Moderators"
        capabilities: ["Edit posts", "Move threads", "Warn members", "Temporary mutes"]
        recruitment: "Top 1% contributors invited"

      - tier: "Tier 4 - Staff Moderators"
        capabilities: ["Full admin", "Permanent bans", "Legal escalations"]
        coverage: "24/7 for global communities"

    community_guidelines:
      principles:
        - "Be Respectful (no personal attacks, assume good intent)"
        - "Be Helpful (constructive feedback, share knowledge)"
        - "Stay On-Topic (relevant discussions)"
        - "No Spam (genuine recommendations ok, excessive promotion banned)"
        - "Protect Privacy (no personal info, confidential data)"

      consequences:
        - offense: "First violation"
          action: "Warning"
        - offense: "Repeated violations"
          action: "7-day mute"
        - offense: "Serious violation"
          action: "Permanent ban"

  platform_integration:
    integrations: "{{integration_points}}"

    product:
      - "Single Sign-On (use product login)"
      - "In-product links ('Ask the community' button)"
      - "Contextual help (error messages → community threads)"

    help_center:
      - "Cross-linking (articles ↔ community discussions)"
      - "Community answers promoted to official docs"
      - "Search includes community results"

    crm:
      - "Member activity synced (e.g., 'Active community member' tag)"
      - "Support deflection tracking"
      - "Customer health indicator"

    analytics:
      - "Track engagement (Google Analytics, Mixpanel)"
      - "Cohort analysis (community members vs. non-members)"
      - "Attribution (community impact on retention)"

  success_metrics:
    engagement:
      - metric: "Active members"
        target: "20% of customer base active monthly (healthy benchmark)"

      - metric: "Posts per week"
        target: "50+ posts/week for <1K members; 200+ for 5K+ members"

      - metric: "Response rate"
        target: ">80% of questions answered within 24h"

    business_impact:
      - metric: "Support ticket deflection"
        target: "30-50% reduction for community-covered topics"

      - metric: "Retention"
        target: "20-30% higher retention for active community members"

      - metric: "NPS"
        target: "10-15 point increase for community members vs. non-members"

      - metric: "Feature adoption"
        target: "25% faster adoption with community tutorials/discussions"

    content_quality:
      - metric: "Solution rate"
        target: ">70% of questions marked as 'solved'"

      - metric: "Content reuse"
        target: "20% of community content promoted to official docs"

      - metric: "Member satisfaction"
        target: "4.5/5 stars on community experience surveys"
```

---

## Examples

### Example 1: B2B SaaS - Support-Focused Community

**Context**: Project management tool, 50K customers, high support costs, need peer-to-peer deflection

**Platform**: Discourse (discussion forum)

**Structure**:
- Getting Started (onboarding)
- Product Q&A (peer support)
- Tutorials & Tips (education)
- Feature Requests (product feedback)

**Engagement Strategy**:
- Reputation points for answering questions
- "Solution Accepted" badge for helpful answers
- Top 10 monthly contributors featured in newsletter
- Moderators recruited from top 1% helpers

**Business Results (12 Months)**:
- 12,000 active members (24% of customer base)
- 800 questions/month, 85% answered within 24h
- 40% reduction in support tickets for topics covered
- Annual savings: $300K (deflected tickets)
- Retention: 25% higher for active members

---

### Example 2: Developer Tool - Technical Community

**Context**: API platform, need to educate developers, drive adoption, gather feedback

**Platform**: Discourse (forum) + Slack (real-time chat)

**Structure**:
- #announcements (product updates)
- #general (casual dev chat)
- #help (quick questions)
- Forum: API Docs, Code Examples, Troubleshooting

**Engagement Strategy**:
- Code snippet sharing encouraged
- "Bug Hunter" badge for reporting issues
- Monthly AMA with engineering team
- Open-source contributions recognized

**Business Results**:
- 8,000 developers active
- 50% of new feature requests come from community
- 60% of beta testers recruited from community
- Developer satisfaction: 4.7/5

---

### Example 3: Consumer App - Network Effects Community

**Context**: Fitness app, 2M users, want to drive engagement through social connection

**Platform**: In-app community (custom-built)

**Structure**:
- Challenges (30-Day Plank Challenge)
- Groups (Running Club, Yoga Enthusiasts)
- Leaderboards (weekly activity)
- Show & Tell (progress photos, achievements)

**Engagement Strategy**:
- Social challenges with prizes (swag, app upgrades)
- User-generated workout playlists featured
- Local meetup groups supported
- "Fitness Influencer" program (top engagers)

**Business Results**:
- 400K active community members (20% of users)
- 35% higher retention for community members
- 50% higher feature usage (community members use 2x features)
- Viral growth: 15% of new users from community referrals

---

## Success Metrics

- **Active Member Rate**: 15-25% of customer base active in community monthly (20% is healthy benchmark)
- **Response Rate**: >80% of questions answered within 24 hours (peer-to-peer support working)
- **Support Deflection**: 30-50% reduction in support tickets for community-covered topics
- **Retention Impact**: 20-30% higher retention for active community members vs. non-members
- **Content Quality**: >70% of questions marked as "solved" (indicates helpful answers)
- **Member Satisfaction**: 4.5/5 stars on community experience surveys
- **Business ROI**: Positive ROI within 12-18 months (support savings + retention value > community costs)
- **Advocacy**: 40% of product feedback and 60% of beta testers come from community
- **Network Effects**: Each new member increases value for existing members (measured via engagement growth)

---

## Best Practices

- **Seed Early, Scale Gradually**: Launch with 50-100 engaged members, not thousands of lurkers
- **Community Manager is Critical**: Successful communities have dedicated humans driving engagement
- **Respond to Every First Post**: Makes new members feel welcomed and valued
- **Celebrate Publicly, Coach Privately**: Praise helpful members publicly; address issues via DM
- **Quality Over Quantity**: 100 engaged members > 10,000 lurkers
- **Make Heroes of Your Members**: Spotlight power users, turn them into case studies and brand advocates
- **Don't Over-Moderate**: Trust your community; only step in when necessary
- **Integrate with Product**: Community should feel like part of the product, not a separate destination
- **Measure Business Impact**: Track support deflection, retention, and revenue impact to justify investment
- **Empower, Don't Own**: Goal is self-sustaining community, not company-controlled forum

---

## Common Pitfalls

- **Build It and They Will Come**: Communities require active cultivation, not passive "launching"
- **Gamification Gone Wrong**: Over-indexing on points/badges creates gaming behavior, not genuine engagement
- **Over-Moderating**: Deleting every off-topic post kills spontaneity and fun
- **Under-Moderating**: Letting spam, toxicity, or harassment fester kills trust
- **No Clear Purpose**: "General discussion" communities die; focused purpose thrives
- **Ignoring Early Members**: First 50 members set the culture; nurture them intensely
- **Staff-Only Content**: If only employees post, it's a blog, not a community
- **No Recognition**: People contribute for intrinsic motivation, but recognition amplifies
- **Measuring Vanity Metrics**: 10,000 members doesn't matter if 9,900 are inactive
- **Neglecting Mobile**: 50%+ of traffic is mobile; if community doesn't work on mobile, it's broken

---

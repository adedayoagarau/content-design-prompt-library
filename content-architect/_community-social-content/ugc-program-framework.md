## UGC Program Framework v1.0

**Purpose**: Design a strategic, scalable user-generated content (UGC) program that amplifies brand reach, builds authentic social proof, reduces content production costs by 40-60%, and drives measurable business outcomes through structured creation frameworks, incentive systems, rights management, and quality control processes that transform customers into content creators and brand advocates.

**Context**: Use this framework when building UGC initiatives for brands, products, or platforms seeking authentic customer voices, social proof, and cost-effective content at scale. Ideal for consumer brands leveraging Instagram/TikTok, SaaS companies building customer story libraries, e-commerce showcasing product usage, or B2B creating case studies and testimonials. Applies to photo/video content, written reviews, tutorials, unboxing, product demos, and customer success stories across social media, websites, and marketing campaigns.

**Strategic Frameworks Applied**:
- **UGC Funnel Architecture** - Discovery, activation, creation, amplification, advocacy
- **Incentive Design Psychology** - Intrinsic motivation (recognition, community) vs. extrinsic rewards (discounts, payment)
- **Rights Management & Legal Compliance** - Permissions, usage rights, FTC disclosure, GDPR compliance
- **Content Quality Curation** - Tiered quality standards from raw UGC to brand-polished assets
- **Attribution & Measurement** - Tracking UGC impact on awareness, engagement, conversions, and retention
- **Community-Powered Content Flywheel** - Self-reinforcing cycle where UGC attracts more creators

---

## Variables

Define strategic variables for comprehensive UGC program design:

### Business & Brand Context
- `{{brand_type}}`: Consumer brand | SaaS product | E-commerce | B2B service | Marketplace | App
- `{{ugc_purpose}}`: Social proof | Content marketing | Community building | Product education | Viral growth
- `{{target_outcomes}}`: Increase awareness | Drive conversions | Build community | Reduce content costs | Improve SEO
- `{{brand_maturity}}`: Early-stage (<10K customers) | Growth (10K-100K) | Scale (100K-1M) | Enterprise (1M+)
- `{{content_production_capacity}}`: Limited (1-2 person team) | Moderate (small marketing team) | Robust (dedicated content team)

### UGC Content Strategy Variables
- `{{content_types}}`: Photos | Videos | Written reviews | Tutorials | Unboxing | Before/after | User stories | Testimonials
- `{{content_platforms}}`: Instagram | TikTok | YouTube | Twitter/X | LinkedIn | Facebook | Website | Email
- `{{content_themes}}`: Product usage | Customer success | Lifestyle/aesthetic | Educational | Behind-the-scenes | Challenges
- `{{content_format_preferences}}`: Vertical video (9:16) | Square (1:1) | Horizontal (16:9) | Carousel | Reels/Shorts | Long-form
- `{{hashtag_strategy}}`: Branded hashtag (#MyBrandStory) | Campaign-specific (#SummerWith[Brand]) | Industry/niche tags

### Creator Segmentation Variables
- `{{creator_segments}}`: Customers | Employees | Micro-influencers | Macro-influencers | Brand ambassadors | General public
- `{{creator_experience_levels}}`: First-time creators | Casual creators | Aspiring influencers | Professional creators
- `{{creator_motivations}}`: Recognition | Community belonging | Rewards/discounts | Monetary compensation | Portfolio building | Brand loyalty
- `{{geographic_distribution}}`: Local (single market) | Regional | National | Global
- `{{demographic_targeting}}`: Age, gender, interests (align with target audience)

### Incentive & Program Structure Variables
- `{{incentive_model}}`: Recognition-only | Discount/coupon | Product gifting | Cash/credit | Revenue share | Tiered rewards
- `{{program_type}}`: Always-on | Campaign-based | Seasonal | Product launch-specific | Contest/challenge
- `{{participation_barriers}}`: Open to all | Customers only | Application/approval required | Invitation-only (VIP)
- `{{reward_structure}}`: Everyone gets something | Best submissions win | Lottery/random draw | First X submissions
- `{{brand_ambassador_program}}`: None | Informal | Structured (application, tiers, benefits)

### Rights & Legal Variables
- `{{rights_acquisition}}`: Implied consent | Explicit opt-in | Paid usage rights | Perpetual license | Limited-time license
- `{{usage_scope}}`: Social media only | All marketing channels | Paid advertising | Product packaging | Resale rights
- `{{attribution_requirements}}`: Always credit creator | Creator consent per use | Anonymous use allowed
- `{{compliance_regulations}}`: FTC disclosure (US) | ASA guidelines (UK) | GDPR (EU) | Platform-specific rules (Instagram, TikTok)
- `{{content_moderation}}`: All UGC reviewed before use | Automated filtering | Community reporting | Post-publication review

### Curation & Quality Control Variables
- `{{quality_tiers}}`: Raw UGC (user-posted) | Curated UGC (selected for brand channels) | Polished UGC (edited/enhanced)
- `{{quality_standards}}`: Technical (resolution, lighting) | Brand alignment | Authenticity | Diversity & inclusion
- `{{curation_process}}`: Automated tagging | Manual review | AI-powered scoring | Community voting
- `{{content_volume}}`: 10-50 submissions/month | 50-200 | 200-1,000 | 1,000+ (requires automation)
- `{{approval_workflow}}`: Creator submits → Brand reviews → Approved/rejected → Published

### Measurement & Operations Variables
- `{{success_metrics}}`: Submission volume | Engagement rate | Conversion rate | Cost per asset | Creator retention | Brand sentiment
- `{{attribution_tracking}}`: UTM parameters | Promo codes | Hashtag tracking | Landing page analytics | Creator-specific links
- `{{ugc_platform/tool}}`: Manually managed | Hashtag aggregator (TINT, Taggbox) | UGC platform (Bazaarvoice, Yotpo) | Custom-built
- `{{team_ownership}}`: Marketing | Community | Social media | Cross-functional
- `{{budget_allocation}}`: Creator incentives | Tools/platform | Content editing | Legal/rights management | Promotion

---

## Prompt

You are a UGC program strategist designing a comprehensive user-generated content system for **{{brand_type}}** with the purpose of **{{ugc_purpose}}** to achieve **{{target_outcomes}}**. Your task is to create a scalable program that activates **{{creator_segments}}** to produce **{{content_types}}** across **{{content_platforms}}** using **{{incentive_model}}** while maintaining **{{quality_standards}}**, ensuring **{{rights_acquisition}}**, and delivering measurable business impact through strategic frameworks, creator enablement, and performance optimization.

### UGC Program Foundation & Strategy

**Program Purpose Definition:**
Clarify why UGC exists and what value it creates:

**For {{ugc_purpose}}, design for:**

**Social Proof (Build Trust):**
- **Goal**: Showcase real customers using and loving the product
- **Content Focus**: Authentic product usage, reviews, testimonials, before/after
- **Distribution**: Product pages, landing pages, ads, social media
- **Success Metric**: 20-30% increase in conversion rate on pages with UGC
- **Example**: Fashion brand featuring customer photos on product pages → 25% higher conversion

**Content Marketing (Scale Content Production):**
- **Goal**: Generate high-volume content without expanding content team
- **Content Focus**: Tutorials, how-tos, creative uses, lifestyle shots
- **Distribution**: Blog, social feeds, email newsletters, paid ads
- **Success Metric**: 50% of social content from UGC; 40% reduction in content production costs
- **Example**: Recipe brand aggregating customer recipe photos → 500 posts/month vs. 50 in-house

**Community Building (Foster Belonging):**
- **Goal**: Create sense of belonging and connection among customers
- **Content Focus**: Community highlights, member spotlights, shared experiences
- **Distribution**: Community platform, social media, newsletters
- **Success Metric**: 30% higher retention for UGC contributors vs. non-contributors
- **Example**: Fitness app featuring member transformation stories → 35% higher retention

**Product Education (Enable Success):**
- **Goal**: Help customers learn product features through peer examples
- **Content Focus**: Tutorials, tips & tricks, creative use cases, problem-solving
- **Distribution**: Help center, YouTube, in-product tips
- **Success Metric**: 25% faster feature adoption with peer tutorials vs. company-created only
- **Example**: SaaS tool curating customer workflow videos → 40% faster onboarding

**Viral Growth (Amplify Reach):**
- **Goal**: Leverage creator networks to reach new audiences
- **Content Focus**: Challenges, contests, shareable moments, trending formats
- **Distribution**: TikTok, Instagram Reels, YouTube Shorts, Twitter/X
- **Success Metric**: 20% of new customers discover brand via UGC hashtag
- **Example**: Ice cream brand's TikTok challenge → 50M views, 10K new customers

**UGC Program Charter:**
```markdown
[Brand Name] Creator Program

**Our Mission:**
Empower our community to share their stories, inspire others, and shape the future of [brand/product].

**Who Can Participate:**
[Everyone | Customers only | Approved creators]

**What We're Looking For:**
- Authentic stories of how you use [product]
- Creative interpretations and unique perspectives
- Tips, tricks, and tutorials that help others
- Diverse voices and experiences

**How It Works:**
1. Create content featuring [product] and post on [platforms]
2. Tag [@brandhandle] and use #[BrandedHashtag]
3. We review and may feature your content on our channels
4. Get recognized and rewarded [details on rewards]

**What You Get:**
- [Recognition: Featured on our channels]
- [Rewards: Discounts, products, cash, etc.]
- [Community: Join exclusive creator community]
- [Growth: We amplify your content to our audience]

**Guidelines:**
- Must be original content you created
- Authentic experiences only (no stock photos)
- Follow our [Content Guidelines] for brand safety
- Comply with FTC disclosure rules if applicable
```

### Creator Funnel & Activation Strategy

**UGC Funnel Design (Discovery → Advocacy):**

**Stage 1: Discovery (Make Program Visible)**
- **Goal**: Customers learn UGC program exists
- **Tactics**:
  - **Post-Purchase Email**: "Share your [product] story and get featured!"
  - **Product Packaging**: Insert card with QR code to creator portal
  - **Social Media Bio**: "Share with #[Hashtag] to be featured"
  - **Website Footer**: "Join our Creator Community" link
  - **In-Product Prompt**: "Love this? Share your experience" button
- **Conversion Goal**: 10-20% of customers aware of program

**Stage 2: Interest (Inspire Creation)**
- **Goal**: Customers consider creating content
- **Tactics**:
  - **UGC Gallery**: Showcase existing creator content (social proof)
  - **Creator Spotlights**: Interview/feature top contributors
  - **Clear Value Proposition**: "Get featured + 20% off next order"
  - **Low Barrier to Entry**: Simple submission process, clear guidelines
  - **Inspiration Hub**: Examples, templates, prompts
- **Conversion Goal**: 20-30% of aware customers express interest

**Stage 3: Activation (First Submission)**
- **Goal**: Get first-time submission
- **Tactics**:
  - **Step-by-Step Guide**: "How to create UGC" tutorial
  - **Content Prompts**: "Show us your morning routine with [product]"
  - **Campaign Themes**: Monthly themes/challenges (easier than open-ended)
  - **Instant Gratification**: Immediate reward upon submission (confirmation email with discount code)
  - **Low Risk**: "We feature 80% of submissions" (high acceptance rate)
- **Conversion Goal**: 40-50% of interested customers submit

**Stage 4: Engagement (Featured/Rewarded)**
- **Goal**: Creator sees their content amplified and feels valued
- **Tactics**:
  - **Feature Notification**: "Congrats! We featured your content on Instagram"
  - **Public Recognition**: Tag creator when reposting (give credit + exposure)
  - **Reward Delivery**: Send promised discount/product/payment promptly
  - **Personal Thank You**: DM or email from community manager
  - **Exclusive Access**: Invite to creator-only events, early product access
- **Conversion Goal**: 90% of submissions acknowledged within 48h

**Stage 5: Retention (Repeat Contributors)**
- **Goal**: One-time creators become regulars
- **Tactics**:
  - **Reminder Campaigns**: "New challenge launching! We'd love to see your take"
  - **Tiered Rewards**: "You've been featured 5 times—unlock VIP status"
  - **Creator Leaderboard**: Recognize top contributors monthly
  - **Community Building**: Private Slack/Discord for creators to connect
  - **Co-Creation**: Invite top creators to collaborate on product launches
- **Conversion Goal**: 30-40% of first-time creators submit again within 3 months

**Stage 6: Advocacy (Brand Ambassadors)**
- **Goal**: Top creators actively recruit others and advocate for brand
- **Tactics**:
  - **Ambassador Program**: Formal status with benefits (commission, free products)
  - **Referral Incentives**: "Invite a creator, get $50 credit"
  - **Brand Partnership**: Pay top creators for campaigns
  - **Press Opportunities**: Feature in brand PR, media, case studies
  - **Co-Design**: Involve in product development, limited editions
- **Conversion Goal**: Top 5% of creators become ambassadors

**Activation Playbook (First 30 Days):**
```
Day 0: Post-Purchase Trigger
- Email: "Love your new [product]? Show us how you use it! #[Hashtag]"
- Incentive: "Get 15% off next order when you share"

Day 3: Inspiration Nudge
- Email: "Need ideas? Check out how [Creator Name] uses [product]"
- CTA: "Submit your own story"

Day 7: Challenge Invitation
- Email: "This month's theme: [Theme]. Share your take by [Date] to win [Prize]"
- Showcase 3-5 examples from previous challenges

Day 14: FOMO Trigger
- Email: "You're missing out! 500 creators shared their stories this month"
- "Join them and get featured on our Instagram (50K followers)"

Day 30: Re-Engagement
- Email: "Still haven't shared? Here's a super simple prompt: [Easy Ask]"
- Sweeten pot: "Submit by [Date] and get entered to win [Grand Prize]"
```

### Content Guidelines & Creator Enablement

**For {{content_types}}, provide clear creative direction:**

**Content Briefs by Type:**

**Photo UGC (Instagram, Pinterest, Website):**
- **What We're Looking For**:
  - Product in use (not just product shot)
  - Good natural lighting (avoid harsh shadows)
  - Uncluttered background
  - Authentic moment (not overly staged)
  - High resolution (minimum 1080x1080)

- **Examples of Great UGC**:
  [Show 3-5 examples with annotations: "Love the natural lighting," "Great lifestyle context"]

- **Quick Tips**:
  - Shoot near a window for best light
  - Simple backgrounds keep focus on product
  - Show product in real life, not studio setup
  - Portrait orientation works best for Instagram Stories

**Video UGC (TikTok, Reels, YouTube):**
- **What We're Looking For**:
  - 15-60 seconds (sweet spot for engagement)
  - Vertical format (9:16) for TikTok/Reels
  - Hook in first 3 seconds ("Watch me transform...")
  - Clear audio (voiceover or on-camera talking)
  - Captions/text overlays (80% watch on mute)

- **Video Templates**:
  - **Unboxing**: "Let's unbox [product] together! First impressions: [reaction]"
  - **Tutorial**: "How I use [product] to solve [problem] in 3 steps"
  - **Before/After**: "Watch this transformation using [product]"
  - **Day in the Life**: "Morning routine with [product]"

- **Technical Requirements**:
  - 1080x1920 minimum resolution
  - Good lighting (natural light or ring light)
  - Stable footage (use phone tripod or stable surface)
  - Include product branding clearly visible

**Written Reviews/Testimonials (Website, Email, Ads):**
- **What We're Looking For**:
  - Specific details (not just "Great product!")
  - Before/after story (problem → solution → result)
  - Authentic voice (sounds like real person, not ad copy)
  - 50-150 words (long enough for detail, short enough to read)

- **Review Template**:
  ```
  **What problem were you solving?**
  [Your answer]

  **How has [product] helped?**
  [Specific benefits you've experienced]

  **What would you tell someone considering [product]?**
  [Your recommendation]
  ```

- **Examples of Strong Reviews**:
  ✅ "I struggled with [problem] for years. After 2 weeks with [product], I noticed [specific result]. Game-changer for [use case]."
  ❌ "Love it! 5 stars!!!" (too vague)

**Content Themes & Campaigns:**

**Always-On Themes:**
- "How I use [product]" (evergreen)
- "Tips & tricks" (educational)
- "Unboxing" (first impressions)
- "Customer of the Month" (spotlight)

**Seasonal Campaigns:**
- "Summer with [Brand]" (June-August)
- "New Year, New [You/Routine/Goals]" (January)
- "Holiday Gift Guide" (November-December)
- "Back to School" (August-September)

**Product Launch Campaigns:**
- "First Look: New [Product]" (pre-launch teasers)
- "Unboxing [New Product]" (launch week)
- "30-Day [Product] Challenge" (post-launch engagement)

**Challenge-Based Campaigns:**
- "7-Day [Product] Challenge"
- "Show Us Your Setup" (workspace, vanity, etc.)
- "Before & After" (transformation stories)
- "Your Most Creative Use" (innovation contest)

### Incentive Design & Reward Strategy

**For {{incentive_model}}, structure motivations:**

**Intrinsic Rewards (Non-Monetary):**
- **Recognition**:
  - Feature on brand Instagram (tag creator for exposure)
  - "Creator of the Month" spotlight
  - Hall of Fame (top all-time contributors)

- **Community & Belonging**:
  - Exclusive creator Slack/Discord channel
  - Invite to creator-only events (virtual or in-person)
  - Early access to new products (feel like insider)

- **Influence & Impact**:
  - Vote on new product features or colors
  - Join advisory board for product development
  - Co-create limited edition products

- **Portfolio & Growth**:
  - Professional photo credit (portfolio building for aspiring creators)
  - Amplification to brand's large audience (exposure for small creators)
  - Skill development (content creation workshops)

**Extrinsic Rewards (Monetary/Tangible):**
- **Discounts & Coupons**:
  - 15-20% off next purchase (low cost, high perceived value)
  - Stackable: "Submit 3 times, get 50% off"
  - Time-limited: "Valid for 30 days" (drives urgency)

- **Product Gifting**:
  - Free product for participation (works well for low-cost items)
  - Exclusive colorway or limited edition (scarcity value)
  - Full-size vs. sample (tier based on submission quality)

- **Cash/Store Credit**:
  - $25-$100 per featured submission (scalable, flexible)
  - Store credit vs. cash (keeps money in ecosystem)
  - Tiered: $25 for social feature, $100 for ad usage

- **Contest Prizes**:
  - Monthly: 3 winners get $500 each + feature
  - Grand prize: $5,000 + year of free products
  - Runner-ups: $100 store credit (many winners = more engagement)

**Tiered Reward Structure (Recommended):**
```
Tier 1 - Submission (Everyone):
- Automatic entry to monthly contest
- 10% off coupon code (incentive to submit)

Tier 2 - Featured on Social (80% of quality submissions):
- Tagged and featured on Instagram/TikTok
- 20% off next purchase
- Exclusive badge on community profile

Tier 3 - Featured in Marketing (Top 20% submissions):
- Used in email campaigns, website, ads
- $50 store credit or free product
- Invitation to creator community

Tier 4 - Ambassador (Top 5% contributors):
- Ongoing partnership: $X per campaign
- Free products quarterly
- Exclusive events and early access
- Revenue share on affiliate sales
```

**Incentive Optimization:**
- **Test & Learn**: A/B test 15% vs. 20% discount to find optimal incentive
- **Diminishing Returns**: $100 reward doesn't generate 10x submissions vs. $10
- **Non-Monetary Can Outperform**: Recognition often drives more participation than small discounts
- **Make It Easy to Claim**: Automatic coupon code, not "contact us for reward"

### Rights Management & Legal Compliance

**For {{rights_acquisition}}, establish clear terms:**

**Content Rights Acquisition:**

**Option 1 - Implied Consent (Hashtag Terms):**
- **Mechanism**: "By using #[BrandHashtag], you grant us permission to repost"
- **Pros**: Frictionless, high volume
- **Cons**: Legally weak, may not hold up in disputes
- **Use Case**: Social media reposts only (low risk)

**Option 2 - Explicit Opt-In (Submission Form):**
- **Mechanism**: Creator submits via form, checks "I grant [Brand] usage rights"
- **Pros**: Legally stronger, clear terms
- **Cons**: Adds friction, may reduce submissions
- **Use Case**: Content used in ads, packaging, paid media (higher risk)

**Option 3 - Paid License (Creator Agreement):**
- **Mechanism**: Formal contract, payment for specific usage rights
- **Pros**: Comprehensive rights, professional relationship
- **Cons**: High friction, requires budget
- **Use Case**: Major campaigns, long-term partnerships

**Rights Terms to Include:**
```
User-Generated Content Submission Agreement

By submitting content to [Brand]:

1. **Grant of Rights**: You grant [Brand] a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display your content across all marketing channels (social media, website, ads, packaging, etc.) in perpetuity.

2. **Creator Attribution**: We will credit you when possible (e.g., tag your handle on social media), but attribution is not guaranteed for all uses.

3. **Ownership**: You retain ownership of your content. This is a license, not a transfer of copyright.

4. **Representations**: You confirm that:
   - You created this content
   - It doesn't infringe on anyone else's rights
   - You have rights to any people, brands, or music featured
   - It complies with our Content Guidelines

5. **Revocation**: You may request removal at any time by contacting [email]. We'll honor requests within 30 days for new uses (but can't revoke already-published content).

6. **Compensation**: [If applicable: You will receive [reward] upon acceptance of your submission.]

7. **No Obligation**: Submission doesn't guarantee usage. We reserve the right to decline any content.
```

**FTC Compliance (US - Endorsements & Testimonials):**
- **Material Connection Disclosure**:
  - If creator receives compensation (money, free product, discount), they must disclose
  - Example: "#ad," "#sponsored," "#[Brand]Partner" in caption
  - Must be conspicuous (beginning of caption, not buried in hashtags)

- **Brand Responsibility**:
  - Educate creators on disclosure requirements
  - Provide clear guidelines: "If we gave you a discount or free product, add #ad"
  - Monitor compliance; request edits if missing disclosure

**GDPR Compliance (EU - Data Privacy):**
- **Consent**: Explicit opt-in for using personal data (name, handle, image)
- **Data Minimization**: Only collect necessary info
- **Right to Erasure**: Honor creator requests to remove content
- **Transparency**: Clear privacy policy explaining data use

**Platform-Specific Rules:**
- **Instagram**: Must have permission to repost; branded content tags for partnerships
- **TikTok**: Respect creator's copyright; use "Duet" feature for attribution
- **YouTube**: Fair use for commentary, but get permission for reposts

**Content Moderation & Brand Safety:**
```
Content Review Checklist:

✅ Approve If:
- Product shown accurately and positively
- Aligns with brand values and tone
- High quality (good lighting, clear audio, etc.)
- Follows content guidelines
- No offensive, harmful, or inappropriate content
- Diverse representation (avoid only featuring one demographic)

❌ Reject If:
- Product misrepresented or used incorrectly
- Contains offensive language, imagery, or themes
- Infringes on others' rights (copyrighted music, branded items)
- Low quality (blurry, poor lighting, inaudible)
- Violates platform policies (nudity, violence, etc.)
- Missing required FTC disclosures (if paid/gifted)
```

### Curation, Distribution & Amplification

**For {{quality_tiers}}, manage content lifecycle:**

**Tier 1 - Raw UGC (User-Posted):**
- **Source**: Organic posts by customers using #[Hashtag]
- **Quality Control**: None (unfiltered)
- **Usage**: Inspiration, monitoring brand sentiment
- **Volume**: 100-1,000+ posts/month

**Tier 2 - Curated UGC (Selected for Brand Channels):**
- **Source**: Submitted via form or selected from hashtag
- **Quality Control**: Manual review against brand guidelines
- **Usage**: Repost on social media, website gallery, email newsletters
- **Volume**: 20-100 posts/month
- **Process**:
  1. Creator submits or tags brand
  2. Team reviews against checklist
  3. If approved: Request permission (if not already granted)
  4. Repost with creator credit + thank you DM

**Tier 3 - Polished UGC (Edited/Enhanced):**
- **Source**: Top-performing curated UGC
- **Quality Control**: Professional editing (color correction, captions, music)
- **Usage**: Paid ads, hero website content, product pages
- **Volume**: 5-20 pieces/month
- **Process**:
  1. Select best raw UGC
  2. Obtain paid usage rights if needed
  3. Edit for brand consistency (while maintaining authenticity)
  4. A/B test in ads against branded content

**Distribution Strategy by Platform:**

**Instagram:**
- **Feed Posts**: Curated UGC (1-3 posts/week)
- **Stories**: Raw UGC (daily, high volume)
- **Reels**: Video UGC edited with trending audio
- **Highlights**: "Customer Love" or "Creator Spotlights"

**TikTok:**
- **Duet/Stitch**: React to creator videos (amplify their reach)
- **Branded Hashtag Challenge**: #[BrandChallenge] (drive participation)
- **Creator Partnerships**: Pay top creators for dedicated content

**Website:**
- **Product Pages**: UGC photos in gallery (social proof)
- **Homepage**: Rotating UGC carousel or video grid
- **Testimonials**: Written reviews and video testimonials
- **Dedicated UGC Page**: "Our Community" or "Customer Stories"

**Email:**
- **Weekly Newsletter**: "Customer Spotlight" featuring 1 creator
- **Product Emails**: Embed UGC photos showing product in use
- **Post-Purchase**: "Join our creator community" invite

**Paid Ads:**
- **Facebook/Instagram Ads**: UGC creative (often outperforms branded creative)
- **YouTube Pre-Roll**: UGC video testimonials
- **Display Ads**: UGC photos (with permission and appropriate rights)

**Amplification Best Practices:**
- **Always Credit**: Tag creator's handle (gives them exposure = incentive)
- **Ask Permission**: DM before reposting: "Love this! Can we share on our feed?"
- **Engage**: Comment, like, save their original post (builds relationship)
- **Reciprocate**: Brands with large followings should amplify small creators
- **Measure Performance**: Track UGC posts vs. branded content (engagement, reach, conversions)

---

## Output Schema

```yaml
ugc_program_framework:
  foundation:
    purpose: "{{ugc_purpose}}"
    target_outcomes: ["{{target_outcomes}}"]
    brand_type: "{{brand_type}}"
    content_types: ["Photos", "Videos", "Written reviews", "Tutorials"]
    platforms: ["Instagram", "TikTok", "Website", "Email"]

  creator_funnel:
    stages:
      - stage: "Discovery (Awareness)"
        goal: "Customers learn UGC program exists"
        tactics:
          - "Post-purchase email invitation"
          - "Product packaging insert with QR code"
          - "Social media bio: 'Share with #[Hashtag]'"
        conversion_target: "10-20% of customers aware"

      - stage: "Interest (Consideration)"
        goal: "Customers consider creating content"
        tactics:
          - "UGC gallery showcasing existing creators"
          - "Creator spotlights and interviews"
          - "Clear value prop: 'Get featured + 20% off'"
        conversion_target: "20-30% of aware customers interested"

      - stage: "Activation (First Submission)"
        goal: "Get first-time submission"
        tactics:
          - "Step-by-step creation guide"
          - "Monthly themed challenges"
          - "Instant gratification (immediate discount)"
        conversion_target: "40-50% of interested submit"

      - stage: "Engagement (Featured/Rewarded)"
        goal: "Creator sees content amplified"
        tactics:
          - "Feature notification email"
          - "Tag creator on social (exposure)"
          - "Deliver reward promptly"
        conversion_target: "90% acknowledged within 48h"

      - stage: "Retention (Repeat Contributors)"
        goal: "One-time creators return"
        tactics:
          - "New challenge invitations"
          - "Tiered rewards (VIP status)"
          - "Creator community access"
        conversion_target: "30-40% submit again within 3 months"

      - stage: "Advocacy (Brand Ambassadors)"
        goal: "Top creators recruit others"
        tactics:
          - "Formal ambassador program"
          - "Referral incentives"
          - "Co-creation opportunities"
        conversion_target: "Top 5% become ambassadors"

  content_guidelines:
    photo_ugc:
      what_we_want:
        - "Product in use (not just product shot)"
        - "Natural lighting, uncluttered background"
        - "Authentic moment (not overly staged)"
        - "High resolution (1080x1080 minimum)"
      quick_tips:
        - "Shoot near window for best light"
        - "Simple backgrounds keep focus on product"
        - "Portrait orientation for Instagram Stories"

    video_ugc:
      what_we_want:
        - "15-60 seconds (engagement sweet spot)"
        - "Vertical format (9:16) for TikTok/Reels"
        - "Hook in first 3 seconds"
        - "Captions/text (80% watch on mute)"
      video_templates:
        - template: "Unboxing"
          format: "Let's unbox [product]! First impressions: [reaction]"
        - template: "Tutorial"
          format: "How I solve [problem] in 3 steps using [product]"
        - template: "Before/After"
          format: "Watch this transformation using [product]"

    content_themes:
      always_on:
        - "How I use [product] (evergreen)"
        - "Tips & tricks (educational)"
        - "Unboxing (first impressions)"
      seasonal:
        - "Summer with [Brand] (June-August)"
        - "New Year, New You (January)"
        - "Holiday Gift Guide (November-December)"
      product_launch:
        - "First Look: New [Product] (pre-launch)"
        - "Unboxing [New Product] (launch week)"
        - "30-Day Challenge (post-launch)"

  incentive_structure:
    model: "{{incentive_model}}"

    intrinsic_rewards:
      - type: "Recognition"
        examples: ["Feature on Instagram", "Creator of the Month", "Hall of Fame"]

      - type: "Community & Belonging"
        examples: ["Exclusive creator Slack", "Creator-only events", "Early product access"]

      - type: "Influence & Impact"
        examples: ["Vote on product features", "Advisory board", "Co-create products"]

    extrinsic_rewards:
      - type: "Discounts & Coupons"
        structure: "15-20% off next purchase; stackable for repeat creators"

      - type: "Product Gifting"
        structure: "Free product for featured submissions"

      - type: "Cash/Store Credit"
        structure: "$25-$100 per featured submission (tiered by usage)"

      - type: "Contest Prizes"
        structure: "Monthly: 3 winners × $500; Grand prize: $5,000 + year of free products"

    tiered_structure:
      tier_1_submission:
        reward: "Automatic contest entry + 10% off coupon"
        eligibility: "Everyone who submits"

      tier_2_featured_social:
        reward: "Featured on Instagram/TikTok + 20% off + exclusive badge"
        eligibility: "80% of quality submissions"

      tier_3_featured_marketing:
        reward: "$50 store credit + invitation to creator community"
        eligibility: "Top 20% (used in emails, ads, website)"

      tier_4_ambassador:
        reward: "Ongoing partnership ($X/campaign) + free products + exclusive events"
        eligibility: "Top 5% contributors"

  rights_legal:
    acquisition_method: "{{rights_acquisition}}"

    submission_agreement:
      grant_of_rights: "Non-exclusive, worldwide, royalty-free license for all marketing channels in perpetuity"
      creator_attribution: "Credit when possible (social tag), but not guaranteed for all uses"
      ownership: "Creator retains copyright; this is a license, not transfer"
      representations: "Creator confirms originality, rights to content, compliance with guidelines"
      revocation: "Creator may request removal; honored within 30 days for new uses"
      compensation: "[If applicable: $X upon acceptance or discount code]"

    ftc_compliance:
      material_connection: "If creator receives compensation (money, product, discount), must disclose"
      disclosure_format: "#ad, #sponsored, #[Brand]Partner in beginning of caption"
      brand_responsibility: "Educate creators, provide guidelines, monitor compliance"

    gdpr_compliance:
      consent: "Explicit opt-in for using personal data"
      right_to_erasure: "Honor removal requests"
      transparency: "Clear privacy policy explaining data use"

    content_moderation:
      approve_if:
        - "Product shown accurately and positively"
        - "Aligns with brand values"
        - "High quality (good lighting, audio, etc.)"
        - "Diverse representation"
      reject_if:
        - "Product misrepresented"
        - "Offensive content"
        - "Copyright infringement"
        - "Missing FTC disclosures (if required)"

  curation_distribution:
    quality_tiers:
      - tier: "Raw UGC (User-Posted)"
        source: "Organic posts with #[Hashtag]"
        quality_control: "None (unfiltered)"
        usage: "Monitoring, inspiration"
        volume: "100-1,000+ posts/month"

      - tier: "Curated UGC (Selected)"
        source: "Submitted via form or hashtag"
        quality_control: "Manual review"
        usage: "Repost on social, website, email"
        volume: "20-100 posts/month"

      - tier: "Polished UGC (Edited)"
        source: "Top-performing curated"
        quality_control: "Professional editing"
        usage: "Paid ads, hero website content"
        volume: "5-20 pieces/month"

    distribution_strategy:
      instagram:
        feed: "Curated UGC (1-3 posts/week)"
        stories: "Raw UGC (daily, high volume)"
        reels: "Video UGC with trending audio"
        highlights: "Customer Love, Creator Spotlights"

      tiktok:
        tactics: ["Duet/Stitch creator videos", "Branded hashtag challenge", "Creator partnerships"]

      website:
        product_pages: "UGC photo gallery (social proof)"
        homepage: "Rotating UGC carousel"
        testimonials: "Written reviews + video testimonials"
        dedicated_page: "Our Community or Customer Stories"

      email:
        weekly_newsletter: "Customer Spotlight (1 creator)"
        product_emails: "UGC photos showing product in use"
        post_purchase: "Join our creator community invite"

      paid_ads:
        platforms: ["Facebook/Instagram Ads", "YouTube Pre-Roll", "Display Ads"]
        note: "UGC often outperforms branded creative"

  success_metrics:
    volume:
      - metric: "Submissions per month"
        target: "50-200 (depending on brand size)"

      - metric: "Creator retention rate"
        target: "30-40% submit again within 3 months"

    engagement:
      - metric: "UGC engagement rate vs. branded content"
        target: "20-50% higher engagement for UGC"

      - metric: "Hashtag reach"
        target: "1M+ monthly impressions for #[BrandHashtag]"

    business_impact:
      - metric: "Conversion rate lift (pages with UGC)"
        target: "20-30% higher than pages without"

      - metric: "Content production cost reduction"
        target: "40-60% (UGC replaces 50% of branded content)"

      - metric: "Retention lift (UGC contributors)"
        target: "20-30% higher retention vs. non-contributors"

      - metric: "Customer acquisition from UGC"
        target: "10-20% of new customers discover via #[Hashtag]"

    roi:
      - metric: "Cost per UGC asset"
        target: "$10-$50 (vs. $500-$2,000 for professional content)"

      - metric: "Program ROI"
        calculation: "(Content production savings + Conversion lift + Retention value) / Program costs"
        target: "3-5x ROI within 12 months"
```

---

## Examples

### Example 1: D2C Fashion Brand - Instagram UGC

**Context**: Apparel brand, 100K Instagram followers, want authentic customer photos for social proof

**Program Structure**:
- **Hashtag**: #MyBrandStyle
- **Incentive**: Featured on Instagram (50K followers) + 20% off next order
- **Content Focus**: Outfit photos, styling tips, lifestyle shots

**Creator Funnel**:
- Post-purchase email: "Share your look with #MyBrandStyle"
- Instagram bio: "Tag us to be featured!"
- Stories: Daily UGC reposts (high volume, low friction)

**Results (6 Months)**:
- 2,000 UGC submissions
- 400 featured on Instagram Stories/Feed
- UGC posts get 2x engagement vs. branded content
- 25% conversion rate increase on product pages with UGC photos
- 40% reduction in content production costs (shoot once/month vs. twice/month)

---

### Example 2: SaaS Product - Tutorial Video UGC

**Context**: Project management tool, need customer tutorials to drive feature adoption

**Program Structure**:
- **Platform**: YouTube + in-app video library
- **Incentive**: $100 Amazon gift card per published tutorial + featured on website
- **Content Focus**: How-to videos, tips & tricks, workflow examples

**Creator Funnel**:
- Email to power users: "Record a 2-min tutorial, earn $100"
- Provide template: "How I use [Feature] to solve [Problem]"
- Review & edit for quality (professional post-production)

**Results**:
- 50 customer tutorial videos created (vs. 10 in-house)
- 80% of new users watch at least 1 customer tutorial
- 30% faster feature adoption with peer tutorials
- Cost: $100/video vs. $1,500 for professional production

---

### Example 3: CPG Brand - TikTok Challenge

**Context**: Beverage brand, want viral reach on TikTok

**Program Structure**:
- **Challenge**: #Summer[Brand]Challenge (create creative drink recipes)
- **Incentive**: Featured on brand TikTok (100K followers) + Grand prize: $5,000
- **Content Focus**: Recipe videos (15-30 seconds, vertical)

**Creator Funnel**:
- Launch with 5 influencer seed videos (paid partnerships)
- Encourage: "Show us your recipe! #Summer[Brand]Challenge"
- Duet/Stitch top submissions to amplify

**Results (30 Days)**:
- 10,000 UGC videos created
- 50M total views
- 20K new customers (tracked via promo code in videos)
- Cost: $25K (influencer seeding + prizes) vs. $200K for traditional campaign

---

## Success Metrics

- **Submission Volume**: 50-200 submissions/month (depending on brand size and incentives)
- **Creator Retention**: 30-40% of first-time creators submit again within 3 months
- **Engagement Lift**: UGC content gets 20-50% higher engagement than branded content
- **Conversion Impact**: 20-30% higher conversion on pages featuring UGC vs. non-UGC pages
- **Content Cost Reduction**: 40-60% decrease in content production costs (UGC replaces 50% of branded content)
- **Retention Lift**: 20-30% higher customer retention for UGC contributors vs. non-contributors
- **CAC Impact**: 10-20% of new customers discover brand via UGC hashtag/creator content
- **Cost Per Asset**: $10-$50 per UGC piece (vs. $500-$2,000 for professional branded content)
- **Program ROI**: 3-5x return on investment within 12 months (savings + conversion + retention value)

---

## Best Practices

- **Make It Easy**: Simple submission process, clear guidelines, low barrier to entry
- **Always Credit Creators**: Tag their handle when reposting (gives them exposure = ongoing incentive)
- **Respond to Every Submission**: Even if rejected, acknowledge the effort ("Thanks for submitting!")
- **Feature Diverse Creators**: Avoid only showcasing one demographic; represent your full customer base
- **Balance Quantity and Quality**: High volume is great, but don't sacrifice brand safety for scale
- **Educate on FTC Rules**: Provide clear disclosure guidelines to avoid legal issues
- **Test Incentives**: A/B test different rewards to find what motivates your audience most
- **Amplify Small Creators**: Brands with large followings should give exposure to micro-creators
- **Measure What Matters**: Track business impact (conversions, retention), not just vanity metrics (submissions)
- **Co-Create, Don't Just Take**: Involve top creators in product development, campaigns, events

---

## Common Pitfalls

- **Asking Without Giving**: Expecting UGC without offering recognition or reward
- **Over-Controlling**: Requiring overly specific content (loses authenticity)
- **Under-Moderating**: Featuring inappropriate content damages brand
- **Ignoring Rights**: Reposting without permission = legal risk
- **No Creator Credit**: Not tagging creators = they won't submit again
- **Unrealistic Expectations**: Expecting 10K submissions in Month 1 of new program
- **One-Size-Fits-All Rewards**: Different creators motivated by different incentives (recognition vs. money)
- **Forgetting to Follow Up**: Creators submit, hear nothing, never return
- **Measuring Only Volume**: 1,000 submissions doesn't matter if 0 convert to customers
- **Not Testing Content**: Assuming UGC will perform without A/B testing vs. branded content
- **Launching and Abandoning**: UGC programs require ongoing curation, engagement, and optimization

---

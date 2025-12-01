## Content Audit Methodology v1.0

**Purpose**: Design systematic content audit processes that evaluate content inventory quality, performance, relevance, and strategic alignment to inform optimization decisions through comprehensive assessment frameworks, data collection protocols, analysis methodologies, and actionable recommendation systems that improve content ROI and user value.

**Context**: Use this framework when content sprawl creates chaos, quality is inconsistent, performance is unclear, or content no longer serves strategic objectives. Most organizations accumulate content without regular evaluation, leading to outdated information, duplicated topics, SEO cannibalization, poor user experiences, and wasted resources maintaining low-value content. This system establishes audit scoping, inventory creation, quantitative and qualitative analysis, scoring frameworks, and action planning that transform content portfolios from liability to strategic asset. Ideal for content strategy refreshes, website redesigns, mergers requiring content consolidation, new content leadership assessing inherited portfolios, or mature content operations requiring optimization.

**Strategic Frameworks Applied**:
- **Content Inventory & Assessment** - Comprehensive catalog and evaluation
- **ROI Analysis Framework** - Cost to maintain vs. value delivered
- **Content Quality Scoring** - Multi-dimensional quality evaluation
- **Performance Benchmarking** - Quantitative metrics-based analysis
- **Content Action Matrix** - Keep, Update, Consolidate, Archive, Delete decisions
- **Prioritization Framework** - Effort vs. impact for optimization roadmap

---

## Variables

### Audit Scope Variables
- `{{audit_purpose}}`: Strategic planning | Optimization | Migration prep | Competitive analysis | Quality improvement
- `{{content_volume}}`: <500 items | 500-5K | 5K-50K | 50K-500K | 500K+ items
- `{{audit_scope}}`: Full inventory | Specific section | Content type | High-priority only
- `{{audit_depth}}`: High-level (sample) | Standard (majority) | Comprehensive (all items)
- `{{audit_timeline}}`: <1 month | 1-3 months | 3-6 months | 6+ months
- `{{primary_channels}}`: Website only | Multi-channel (web, email, social) | Omnichannel

### Business Context Variables
- `{{organization_type}}`: B2B SaaS | E-commerce | Media/Publisher | Non-profit | Government
- `{{content_maturity}}`: Early-stage | Growth | Mature | Legacy (inherited)
- `{{business_goal}}`: Increase traffic | Improve conversions | Reduce costs | Enhance quality | Enable migration
- `{{stakeholder_pressure}}`: Low (nice to have) | Moderate | High (urgent business need)
- `{{resource_availability}}`: Limited (1-2 people) | Moderate (3-5) | Robust (5+ team)

### Audit Focus Variables
- `{{performance_data_access}}`: Full analytics access | Limited data | No historical data
- `{{quality_focus}}`: SEO optimization | Brand consistency | Accessibility | Technical accuracy | All dimensions
- `{{competitive_context}}`: Internal only | Include competitor benchmarking
- `{{content_types_audited}}`: All types | Specific types (blog, docs, product pages, etc.)
- `{{audience_segments}}`: All audiences | Specific segments (enterprise, SMB, consumer, etc.)

### Technical Variables
- `{{cms_platform}}`: WordPress | Contentful | Drupal | Adobe AEM | Custom | Multiple systems
- `{{analytics_tools}}`: Google Analytics | Adobe Analytics | Mixpanel | Custom | None
- `{{seo_tools}}`: Ahrefs | SEMrush | Moz | Screaming Frog | None
- `{{automation_capability}}`: Manual only | Semi-automated (scripts) | Fully automated
- `{{data_export_capability}}`: Easy (API access) | Moderate (manual export) | Difficult (no export)

---

## Prompt

You are a content audit strategist conducting a comprehensive **{{audit_purpose}}** audit of **{{content_volume}}** with **{{audit_depth}}** depth across **{{primary_channels}}** for **{{organization_type}}** organization. Your task is to design audit methodology, execute systematic assessment using **{{analytics_tools}}** and **{{seo_tools}}**, analyze content through **{{quality_focus}}** lens, and deliver actionable recommendations that achieve **{{business_goal}}** within **{{audit_timeline}}** timeframe with **{{resource_availability}}** team.

### Content Audit Architecture

**Phase 1: Audit Planning & Scoping**

Define audit objectives, scope, and methodology:

```yaml
audit_planning_framework:
  audit_objectives:
    strategic_objectives:
      - "Understand current content inventory (what do we have?)"
      - "Assess content quality and performance (what's working?)"
      - "Identify gaps and opportunities (what's missing?)"
      - "Inform content strategy decisions (what should we do?)"

    specific_goals_by_purpose:
      optimization_audit:
        - "Identify top performers to amplify"
        - "Find underperformers to improve or remove"
        - "Discover content gaps to fill"
        - "Reduce maintenance costs by archiving low-value content"

      migration_audit:
        - "Inventory all content before migration"
        - "Decide what to migrate, archive, or delete"
        - "Identify transformation requirements"
        - "Estimate migration effort and timeline"

      seo_audit:
        - "Find SEO opportunities (improve rankings)"
        - "Identify keyword cannibalization (multiple pages competing)"
        - "Discover thin or duplicate content (consolidation candidates)"
        - "Assess technical SEO health (metadata, structure, performance)"

      quality_audit:
        - "Assess brand consistency (voice, tone, messaging)"
        - "Evaluate accessibility compliance (WCAG standards)"
        - "Check factual accuracy (outdated or incorrect info)"
        - "Review content completeness (missing elements)"

  scope_definition:
    content_included:
      - "Website pages (all published content)"
      - "Blog posts (historical and current)"
      - "Product/service pages"
      - "Help documentation"
      - "Landing pages"
      - "Email templates (if omnichannel audit)"
      - "Social content (if omnichannel audit)"

    content_excluded:
      - "User-generated content (reviews, comments)"
      - "Transactional pages (checkout, account, etc.)"
      - "Test or staging content"
      - "Third-party integrated content"

    sample_size_strategy:
      full_audit: "All content items (for <5K items or critical projects)"
      stratified_sample: "Representative sample across content types, traffic levels, recency"
      priority_only: "Top 20% by traffic + recent content (for quick audits)"

  success_criteria:
    - "Comprehensive content inventory documented"
    - "Clear performance and quality benchmarks established"
    - "Actionable recommendations prioritized by impact"
    - "Roadmap for content optimization with timelines"
    - "Stakeholder buy-in for proposed actions"
```

**Phase 2: Content Inventory Creation**

Build comprehensive catalog of all content:

```yaml
content_inventory_framework:
  inventory_data_collection:
    automated_methods:
      website_crawl:
        tools: ["Screaming Frog", "Sitebulb", "DeepCrawl", "Custom scripts"]
        data_captured:
          - "URL (full path)"
          - "Title tag (SEO title)"
          - "Meta description"
          - "H1 heading"
          - "Word count"
          - "Images (count, alt text status)"
          - "Internal links (count)"
          - "External links (count)"
          - "HTTP status code (200, 301, 404, etc.)"
          - "Indexability (indexed or noindex)"
          - "Canonical URL"
          - "Structured data (Schema.org markup)"

      cms_export:
        method: "Export content database via CMS admin or API"
        data_captured:
          - "Content ID (unique identifier)"
          - "Content type (blog post, page, product, etc.)"
          - "Title"
          - "Author"
          - "Publish date"
          - "Last modified date"
          - "Status (published, draft, archived)"
          - "Categories/tags"
          - "Custom fields (any metadata)"

      analytics_export:
        tools: ["Google Analytics 4", "Adobe Analytics"]
        data_captured:
          - "URL"
          - "Pageviews (last 12 months)"
          - "Unique pageviews"
          - "Average time on page"
          - "Bounce rate"
          - "Exit rate"
          - "Conversions (goal completions)"
          - "Traffic sources (organic, direct, referral, social)"

      seo_data:
        tools: ["Ahrefs", "SEMrush", "Moz"]
        data_captured:
          - "URL"
          - "Organic keywords (ranking keywords)"
          - "Organic traffic (from search engines)"
          - "Backlinks (referring domains, link count)"
          - "Domain/Page authority"
          - "SERP position (for target keywords)"

    manual_data_collection:
      when_needed: "For qualitative assessment, content not crawlable, or specific quality checks"
      data_captured:
        - "Content quality score (subjective assessment)"
        - "Brand voice consistency (on-brand or off-brand)"
        - "Factual accuracy (accurate, outdated, incorrect)"
        - "Readability (easy, moderate, complex)"
        - "Completeness (comprehensive or gaps)"

  inventory_spreadsheet_structure:
    core_columns:
      - "URL (unique identifier)"
      - "Page Title"
      - "Content Type (blog, page, doc, product, etc.)"
      - "Category/Topic"
      - "Author"
      - "Publish Date"
      - "Last Updated"
      - "Word Count"
      - "Status (published, draft, archived)"

    performance_columns:
      - "Pageviews (12 months)"
      - "Unique Pageviews"
      - "Avg Time on Page"
      - "Bounce Rate"
      - "Conversion Rate"
      - "Organic Traffic"
      - "Ranking Keywords (count)"

    seo_columns:
      - "Meta Title (present? optimized?)"
      - "Meta Description (present? optimized?)"
      - "H1 Heading (present? matches title?)"
      - "Backlinks (count)"
      - "Page Authority"
      - "Indexed (yes/no)"

    quality_columns:
      - "Content Quality Score (1-5)"
      - "Brand Voice (on-brand, off-brand)"
      - "Accuracy (accurate, outdated, incorrect)"
      - "Readability Score (Flesch-Kincaid)"
      - "Accessibility (passes WCAG? yes/no)"
      - "Completeness (comprehensive, gaps)"

    recommendation_columns:
      - "Audit Action (Keep, Update, Consolidate, Archive, Delete)"
      - "Priority (P0, P1, P2, P3)"
      - "Effort (Low, Medium, High)"
      - "Notes (specific recommendations)"
```

**Phase 3: Quantitative Analysis**

Analyze content performance using data:

```yaml
quantitative_analysis_framework:
  performance_benchmarking:
    traffic_analysis:
      top_performers:
        - definition: "Top 20% of content by pageviews"
        - insight: "What's working? Replicate these patterns"
        - action: "Amplify (promote, update, expand)"

      middle_performers:
        - definition: "Middle 60% of content"
        - insight: "Solid content but unremarkable"
        - action: "Optimize (improve SEO, CTAs, structure)"

      low_performers:
        - definition: "Bottom 20% by traffic"
        - insight: "Not meeting user needs or not discoverable"
        - action: "Update, consolidate, or delete"

      zero_traffic:
        - definition: "0 pageviews in last 12 months"
        - insight: "Orphaned, outdated, or never promoted"
        - action: "Strong delete or archive candidate"

    engagement_analysis:
      high_engagement:
        criteria: "Avg time on page >3 min, bounce rate <40%"
        insight: "Content is valuable; users are engaging deeply"
        action: "Keep, update to keep fresh, create similar content"

      low_engagement:
        criteria: "Avg time on page <30 sec, bounce rate >70%"
        insight: "Content doesn't meet user expectations (clickbait title? poor quality?)"
        action: "Improve quality, fix title/description mismatch, or delete"

    conversion_analysis:
      high_converting:
        criteria: "Conversion rate >5% (or above site average)"
        insight: "Effective at driving business goals"
        action: "Keep, optimize further, promote more"

      low_converting:
        criteria: "Conversion rate <1% (or below site average)"
        insight: "Not aligned to conversion goals or wrong CTA"
        action: "Add or improve CTAs, align content to funnel stage"

  seo_performance_analysis:
    keyword_analysis:
      ranking_pages:
        - "Count ranking keywords per page (more = stronger)"
        - "Identify pages ranking for high-volume keywords (valuable)"
        - "Find pages ranking #11-20 (quick win opportunities)"

      keyword_cannibalization:
        - definition: "Multiple pages competing for same keyword"
        - detection: "Same keyword ranks for 2+ URLs"
        - action: "Consolidate content into single authoritative page"

      keyword_gaps:
        - definition: "High-volume keywords with no content"
        - detection: "Keyword research shows demand, no page ranks"
        - action: "Create new content targeting gap keywords"

    backlink_analysis:
      high_authority_pages:
        - "Pages with most backlinks = most valuable"
        - action: "Preserve these pages, keep URLs stable, update content"

      zero_backlinks:
        - "Pages with no external links = low external visibility"
        - action: "Consider for deletion if also low traffic"

  content_freshness_analysis:
    recent_content:
      - definition: "Published in last 12 months"
      - action: "Keep, monitor performance"

    aging_content:
      - definition: "Published 1-3 years ago"
      - action: "Review for accuracy, update if outdated"

    stale_content:
      - definition: "Published 3+ years ago, not updated"
      - action: "Update, consolidate, or delete (high priority)"
```

**Phase 4: Qualitative Analysis**

Evaluate content quality through expert review:

```yaml
qualitative_analysis_framework:
  content_quality_assessment:
    quality_scoring_rubric:
      criteria_1_accuracy:
        score_5: "Fully accurate, verified facts, current data"
        score_3: "Mostly accurate but minor outdated info"
        score_1: "Significant inaccuracies or very outdated"

      criteria_2_clarity:
        score_5: "Crystal clear, well-structured, easy to understand"
        score_3: "Understandable but could be clearer"
        score_1: "Confusing, poorly structured, hard to follow"

      criteria_3_completeness:
        score_5: "Comprehensive, answers all user questions"
        score_3: "Covers basics but missing some details"
        score_1: "Incomplete, major gaps, raises more questions"

      criteria_4_brand_voice:
        score_5: "Perfect alignment with brand voice guidelines"
        score_3: "Mostly on-brand with some inconsistencies"
        score_1: "Off-brand, inconsistent tone or messaging"

      criteria_5_readability:
        score_5: "Excellent readability (grade 8-10, scannable, concise)"
        score_3: "Acceptable but could be more readable"
        score_1: "Dense, jargon-heavy, hard to scan"

      criteria_6_engagement:
        score_5: "Compelling, keeps reader engaged, strong narrative"
        score_3: "Serviceable but not particularly engaging"
        score_1: "Boring, dry, loses reader interest"

      overall_quality_score: "Average of 6 criteria (1-5 scale)"

  strategic_alignment_assessment:
    audience_alignment:
      questions:
        - "Is this content for our target audience?"
        - "Does it address their needs, questions, or pain points?"
        - "Is the tone appropriate for this audience?"

      scoring:
        aligned: "Content serves target audience well"
        partially_aligned: "Serves audience but not ideal"
        misaligned: "Wrong audience or doesn't serve needs"

    business_goal_alignment:
      questions:
        - "Does this content support business objectives?"
        - "Is it part of our content strategy?"
        - "Does it drive meaningful outcomes (traffic, leads, engagement)?"

      scoring:
        high_value: "Directly supports key business goals"
        moderate_value: "Indirectly supports or minor contribution"
        low_value: "Doesn't support business objectives"

  competitive_analysis:
    competitive_content_benchmarking:
      - "Identify top-ranking competitor content for target keywords"
      - "Analyze competitor content: length, depth, format, quality"
      - "Compare your content to competitors (stronger, weaker, gaps)"
      - "Action: Upgrade content to match or exceed competitor quality"
```

**Phase 5: Content Action Framework**

Translate analysis into specific recommendations:

```yaml
content_action_framework:
  action_categories:
    keep_as_is:
      criteria:
        - "High traffic (top 20%)"
        - "High engagement (time on page, low bounce)"
        - "High quality (score 4-5)"
        - "Recent (published/updated in last year)"
        - "Aligned to strategy"

      action: "Maintain, monitor performance, minor tweaks only"
      priority: "P3 (low, already performing well)"

    update_optimize:
      criteria:
        - "Moderate traffic (middle 60%)"
        - "Quality score 3-4 (good but not great)"
        - "Outdated (2+ years old, facts changed)"
        - "SEO opportunity (ranking #11-20 for keywords)"

      actions:
        - "Update facts, statistics, examples"
        - "Expand thin content (add 500+ words)"
        - "Optimize for SEO (improve title, meta, headings)"
        - "Add multimedia (images, videos, infographics)"
        - "Improve CTAs (conversion optimization)"
        - "Fix broken links and formatting issues"

      priority: "P1 or P2 (based on opportunity size)"

    consolidate_merge:
      criteria:
        - "Duplicate or overlapping content"
        - "Keyword cannibalization (competing pages)"
        - "Multiple thin pages on same topic"

      action:
        - "Merge 2-5 pages into single comprehensive piece"
        - "301 redirect old URLs to consolidated page"
        - "Combine best elements from each piece"
        - "Strengthen SEO by consolidating authority"

      priority: "P2 (important for SEO health)"

    archive:
      criteria:
        - "Low traffic (bottom 20%)"
        - "Outdated but historical value"
        - "No longer strategic but stakeholder wants to keep"
        - "Legal/compliance retention required"

      action:
        - "Move to archive section (separate from main site)"
        - "Add 'noindex' tag (remove from search engines)"
        - "Add banner: 'This content is outdated but kept for reference'"
        - "Internal links: Remove links to archived content"

      priority: "P3 (low urgency)"

    delete:
      criteria:
        - "Zero traffic (0 pageviews in 12 months)"
        - "Quality score 1-2 (poor quality)"
        - "Outdated and inaccurate (misinformation risk)"
        - "No backlinks (no SEO value)"
        - "Not aligned to strategy"

      action:
        - "Permanently delete content"
        - "Return 404 or 410 status code"
        - "If any backlinks exist, implement 301 redirect to relevant page"

      priority: "P2-P3 (cleanup, reduces maintenance burden)"

  prioritization_matrix:
    high_priority_p0_p1:
      criteria:
        - "High impact on business goals (traffic, conversions, revenue)"
        - "Quick win (low effort, high impact)"
        - "Urgent (legal issue, inaccuracy, brand risk)"

      examples:
        - "Update top 10 traffic pages (refresh outdated info)"
        - "Consolidate cannibalized content (SEO benefit)"
        - "Fix critical inaccuracies (compliance/brand risk)"

    medium_priority_p2:
      criteria:
        - "Moderate impact (middle traffic tier)"
        - "Moderate effort required"
        - "Important but not urgent"

      examples:
        - "Optimize SEO for pages ranking #11-20"
        - "Expand thin content (500-word posts → 1,500 words)"
        - "Delete or archive low-value content"

    low_priority_p3:
      criteria:
        - "Low impact (bottom traffic tier)"
        - "Nice to have, not mission-critical"
        - "High effort, low return"

      examples:
        - "Minor formatting fixes"
        - "Archive old content with no traffic"
        - "Update low-traffic pages (only if resources available)"
```

**Phase 6: Audit Deliverables & Reporting**

Package findings into actionable reports:

```yaml
audit_deliverables_framework:
  executive_summary:
    sections:
      - key_findings: "Top 3-5 insights (what we discovered)"
      - business_impact: "How current content supports or hinders goals"
      - recommendations: "High-level strategic recommendations"
      - resource_requirements: "Time, budget, team needed for implementation"
      - expected_outcomes: "What success looks like (traffic, conversions, cost savings)"

    format: "2-page PDF or slide deck"

  detailed_audit_report:
    sections:
      - audit_methodology: "What we audited, how, and why"
      - content_inventory_summary: "Total content, breakdown by type, status"
      - performance_analysis: "Traffic, engagement, conversion benchmarks"
      - quality_assessment: "Quality scores, common issues"
      - seo_analysis: "Keyword performance, technical SEO health"
      - competitive_insights: "How we compare to competitors"
      - gap_analysis: "What's missing (content gaps, audience gaps)"
      - action_plan: "Prioritized recommendations with timeline"

    format: "15-30 page document or presentation"

  content_inventory_database:
    format: "Spreadsheet (Excel, Google Sheets) or Airtable"
    contains: "Complete content inventory with all collected data and recommendations"
    usage: "Working document for content team to execute optimizations"

  action_roadmap:
    structure:
      - phase_1_quick_wins: "0-30 days (high-impact, low-effort)"
      - phase_2_core_optimizations: "30-90 days (update, consolidate, optimize)"
      - phase_3_strategic_initiatives: "90-180 days (new content, major rewrites)"

    for_each_item:
      - "Action (specific task)"
      - "Priority (P0, P1, P2, P3)"
      - "Owner (who's responsible)"
      - "Timeline (due date or duration)"
      - "Success metric (how to measure completion)"
```

---

## Output Schema

```yaml
content_audit:
  audit_scope:
    purpose: "[Optimization | Migration | SEO | Quality improvement]"
    content_volume: "[Total items audited]"
    channels: "[Website, Email, Social, etc.]"
    timeframe: "[Audit duration]"

  content_inventory:
    total_content: "[Count by type]"
    inventory_spreadsheet: "[Link or attachment]"

  quantitative_findings:
    performance_benchmarks:
      - top_20_percent: "[High performers]"
      - middle_60_percent: "[Moderate performers]"
      - bottom_20_percent: "[Low performers]"
    seo_insights:
      - keyword_opportunities: "[Rankings, gaps]"
      - technical_issues: "[Indexing, metadata, etc.]"

  qualitative_findings:
    quality_assessment:
      - average_quality_score: "[1-5 scale]"
      - common_issues: "[Brand voice, accuracy, readability]"
    strategic_alignment:
      - aligned_content: "[% supporting strategy]"
      - misaligned_content: "[% not supporting]"

  action_plan:
    keep_as_is: "[Count, examples]"
    update_optimize: "[Count, priority items]"
    consolidate: "[Count, merge candidates]"
    archive: "[Count, candidates]"
    delete: "[Count, candidates]"

  roadmap:
    phase_1_quick_wins: "[0-30 days actions]"
    phase_2_core: "[30-90 days actions]"
    phase_3_strategic: "[90-180 days actions]"

  success_metrics:
    - "Expected traffic increase: [%]"
    - "Expected conversion improvement: [%]"
    - "Cost savings (reduced maintenance): [$]"
```

---

## Examples

### Example 1: SaaS Company (5,000 Blog Posts)

**Audit Purpose**: Optimization (improve organic traffic)

**Findings**:
- 200 posts (4%) drive 80% of traffic
- 2,500 posts (50%) have 0 traffic in 12 months
- Significant keyword cannibalization (15 posts competing for same keywords)

**Actions**:
- Update 200 top performers (refresh, expand)
- Consolidate 50 cannibalized posts into 15 comprehensive guides
- Delete 1,500 zero-traffic posts (reduce maintenance burden)

**Results**: +40% organic traffic, 30% reduction in content volume.

### Example 2: E-Commerce (10,000 Product Pages)

**Audit Purpose**: SEO optimization

**Findings**:
- Thin product descriptions (avg 50 words)
- Missing meta descriptions (60% of pages)
- No structured data (Schema.org markup)

**Actions**:
- Expand product descriptions (50 → 200+ words)
- Generate meta descriptions (AI-assisted)
- Implement product Schema markup

**Results**: +25% organic traffic, 15% higher CTR from search.

### Example 3: Media Publisher (50,000 Articles)

**Audit Purpose**: Content consolidation (reduce costs)

**Findings**:
- 20,000 articles (40%) have <100 pageviews/year
- Duplicate coverage (same news story, 10× articles)

**Actions**:
- Archive 15,000 low-traffic articles (noindex)
- Consolidate breaking news (keep final/comprehensive version only)

**Results**: 30% reduction in CMS maintenance costs, no traffic loss.

### Example 4: B2B Tech Company (500 Pages)

**Audit Purpose**: Quality improvement (brand consistency)

**Findings**:
- Inconsistent brand voice (acquired companies not rebranded)
- Outdated product info (features changed, content not updated)
- Poor accessibility (missing alt text, heading structure issues)

**Actions**:
- Rebrand 150 legacy pages (voice, messaging)
- Update 200 product pages (align to current features)
- Accessibility remediation (alt text, headings, WCAG compliance)

**Results**: Brand consistency 95%+, WCAG AA compliance 100%.

### Example 5: Government Agency (2,000 Public Pages)

**Audit Purpose**: Accessibility & plain language compliance

**Findings**:
- 40% fail WCAG AA (alt text, color contrast)
- Readability avg = grade 16 (college level) vs. target grade 8

**Actions**:
- Accessibility remediation (alt text, color, structure)
- Plain language rewrite (simplify complex sentences, reduce jargon)

**Results**: 100% WCAG compliance, readability = grade 8-9.

---

## Success Metrics

- **Audit Completion**: 100% of in-scope content inventoried and assessed
- **Actionable Insights**: Clear recommendations for 80%+ of content
- **Stakeholder Approval**: Executive buy-in for audit findings and roadmap
- **Implementation Progress**: 50%+ of recommendations executed within 90 days
- **Performance Improvement**: Measurable increase in traffic, engagement, or conversions

---

## Best Practices

- **Start with Business Goals**: Audit must connect to strategic objectives
- **Automate Data Collection**: Manual audits don't scale; use tools
- **Sample Strategically**: For large inventories, audit representative sample
- **Combine Quant + Qual**: Data shows what's happening; human review shows why
- **Prioritize Ruthlessly**: Can't fix everything; focus on highest impact
- **Get Stakeholder Input**: Content owners know context data can't reveal
- **Document Everything**: Audit inventory = strategic asset for future use

---

## Common Pitfalls

- **Analysis Paralysis**: Spending months auditing, never taking action
- **Vanity Metrics**: Focusing on pageviews without business context
- **No Follow-Through**: Great audit report, zero implementation
- **Ignoring Content Owners**: Deleting content without stakeholder input = political disaster
- **Incomplete Inventory**: Missing content = incomplete analysis
- **One-Time Event**: Audits should be recurring (annual or bi-annual)
- **No Baseline**: Can't measure improvement without before/after comparison

---

**License**: © 2025 Adedayo Agarau. Licensed under CC BY-SA 4.0.
**Maintainer**: Adedayo Agarau

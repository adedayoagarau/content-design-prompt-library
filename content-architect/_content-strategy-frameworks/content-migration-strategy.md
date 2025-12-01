## Content Migration Strategy v1.0

**Purpose**: Design comprehensive content migration strategies that safely transfer content between systems, platforms, or architectures while maintaining data integrity, preserving SEO value, ensuring accessibility, and minimizing business disruption through systematic planning, execution, validation, and rollback protocols.

**Context**: Use this framework when migrating from legacy CMS to modern platforms, consolidating multiple sites, restructuring information architecture, moving to headless/API-first systems, or sunsetting outdated platforms. Most migrations fail due to poor planning, underestimated complexity, data loss, broken SEO, or inadequate testing. This system establishes migration assessment, content inventory, transformation logic, technical execution, SEO preservation, testing protocols, and post-migration optimization that ensure successful transitions. Ideal for platform migrations, website redesigns, company mergers, multi-site consolidations, or technology stack modernizations.

**Strategic Frameworks Applied**:
- **Phased Migration Strategy** - Incremental rollout reduces risk
- **ETL Framework (Extract, Transform, Load)** - Systematic data migration process
- **SEO Preservation Architecture** - Maintain search rankings through transition
- **Zero-Downtime Deployment** - Blue-green migration strategy
- **Content Triage Methodology** - Migrate, archive, update, or delete decisions
- **Rollback Planning** - Always have escape hatch for failed migrations

---

## Variables

### Migration Scope Variables
- `{{migration_type}}`: Platform migration | Site consolidation | Architecture change | Domain migration | Redesign
- `{{content_volume}}`: <1K items | 1K-10K | 10K-100K | 100K-1M | 1M+ items
- `{{source_system}}`: WordPress | Drupal | SharePoint | Adobe AEM | Custom CMS | Legacy system
- `{{target_system}}`: Contentful | Contentstack | Sanity | WordPress | Drupal | Custom headless
- `{{content_types}}`: 5-10 | 10-25 | 25-50 | 50+ distinct content types
- `{{migration_timeline}}`: <3 months | 3-6 months | 6-12 months | 12+ months

### Technical Complexity Variables
- `{{data_structure_change}}`: Direct mapping | Moderate transformation | Significant restructuring
- `{{api_availability}}`: Full API access | Limited API | Manual export | Screen scraping
- `{{media_assets}}`: <1K files | 1K-10K | 10K-100K | 100K+ images/videos
- `{{customization_level}}`: Standard CMS | Custom plugins | Heavily customized | Proprietary
- `{{integration_dependencies}}`: None | Few (2-5) | Many (5-15) | Complex web (15+)
- `{{localization_complexity}}`: Single language | 2-5 languages | 5-20 languages | 20+ languages

### Business Risk Variables
- `{{business_criticality}}`: Low (internal site) | Medium (marketing) | High (e-commerce) | Critical (product)
- `{{traffic_volume}}`: <10K visits/month | 10K-100K | 100K-1M | 1M-10M | 10M+ visits
- `{{seo_dependency}}`: Low | Moderate | High (50%+ traffic organic) | Critical (80%+ organic)
- `{{downtime_tolerance}}`: Days acceptable | Hours acceptable | Minutes only | Zero downtime required
- `{{revenue_impact}}`: No revenue impact | Indirect | Direct revenue | Mission-critical

### Organizational Variables
- `{{team_technical_skill}}`: Non-technical | Basic | Intermediate | Advanced | Expert
- `{{migration_team_size}}`: 2-5 people | 5-10 | 10-20 | 20+ person team
- `{{budget}}`: Constrained (<$50K) | Moderate ($50K-$250K) | High ($250K-$1M) | Enterprise ($1M+)
- `{{stakeholder_complexity}}`: Single stakeholder | Few (3-5) | Many (5-15) | Highly complex (15+)

---

## Prompt

You are a content migration strategist planning a comprehensive **{{migration_type}}** from **{{source_system}}** to **{{target_system}}** involving **{{content_volume}}** across **{{content_types}}** with **{{business_criticality}}** business impact. Your task is to design a migration strategy that manages **{{data_structure_change}}** complexity, preserves **{{seo_dependency}}** SEO value, ensures **{{downtime_tolerance}}** availability, and executes successfully with **{{team_technical_skill}}** team capability within **{{migration_timeline}}** timeline.

### Content Migration Architecture

**Phase 1: Migration Assessment & Planning**

Conduct thorough discovery before migration execution:

```yaml
migration_assessment_framework:
  discovery_activities:
    content_inventory:
      - "Total content items by type (articles, pages, products, etc.)"
      - "Content metadata (authors, dates, categories, tags)"
      - "Content relationships (parent/child, references, related)"
      - "Media assets (images, videos, PDFs, downloads)"
      - "Custom fields and data structures"
      - "Content status (published, draft, archived)"

    technical_assessment:
      - "Source CMS capabilities and limitations"
      - "Target CMS capabilities and gaps"
      - "API availability and documentation"
      - "Export/import mechanisms"
      - "Custom code and integrations"
      - "Database schema and relationships"

    content_quality_audit:
      - "Duplicate content (consolidation opportunities)"
      - "Outdated content (archive or delete candidates)"
      - "Broken links and missing assets"
      - "Accessibility compliance gaps"
      - "SEO health (metadata, redirects needed)"

    seo_baseline:
      - "Current organic traffic (by page, channel, keyword)"
      - "Search rankings (top 100 keywords)"
      - "Backlink profile (referring domains, link equity)"
      - "URL structure (current vs. future)"
      - "Domain authority and page authority"

    stakeholder_requirements:
      - "Must-have features (non-negotiable)"
      - "Nice-to-have features (if time/budget allows)"
      - "Business rules and workflows"
      - "User roles and permissions"
      - "Success criteria (what defines a successful migration?)"

  risk_assessment:
    high_risk_areas:
      - "SEO impact (URL changes without redirects = traffic loss)"
      - "Data loss (incomplete migration = missing content)"
      - "Downtime (extended outage = revenue loss)"
      - "Functionality gaps (target CMS can't replicate source feature)"
      - "Integration failures (third-party systems break)"

    risk_mitigation_strategies:
      - "Comprehensive redirect mapping (301 redirects for all URLs)"
      - "Multi-stage validation (test, re-test, validate)"
      - "Phased rollout (migrate sections incrementally, not all at once)"
      - "Rollback plan (be able to revert if migration fails)"
      - "Load testing (ensure target system handles traffic)"
```

**Phase 2: Content Triage & Transformation Planning**

Decide what to migrate, update, archive, or delete:

```yaml
content_triage_framework:
  triage_categories:
    migrate_as_is:
      criteria:
        - "High-traffic content (top 20% by visits)"
        - "Recent content (published in last 12 months)"
        - "High-quality, evergreen content"
        - "Strong SEO performers (ranking top 10)"

      action: "Direct migration with minimal changes"
      priority: "P1 (must migrate first)"

    migrate_with_updates:
      criteria:
        - "Moderate traffic (middle 60%)"
        - "Content is accurate but needs freshness"
        - "SEO potential but needs optimization"

      action: "Migrate + refresh (update dates, add context, improve SEO)"
      priority: "P1 (migrate) + P2 (update post-launch)"

    consolidate:
      criteria:
        - "Duplicate or overlapping content"
        - "Thin content (low word count, low value)"
        - "Multiple old posts on same topic"

      action: "Merge into single comprehensive piece"
      priority: "P2 (consolidate before or during migration)"

    archive:
      criteria:
        - "Historical value but outdated"
        - "Low traffic but stakeholder wants to keep"
        - "Legal or compliance retention required"

      action: "Move to archive section (unlisted, noindex, but accessible)"
      priority: "P3 (low priority)"

    delete:
      criteria:
        - "Zero traffic in last 12 months"
        - "Outdated, inaccurate, or harmful"
        - "No SEO value (no rankings, no backlinks)"

      action: "Permanently delete (implement 404 or 410)"
      priority: "P3 (delete after migration to avoid redirect overhead)"

  transformation_logic:
    content_structure_mapping:
      example_blog_post:
        source_cms: "WordPress"
        source_structure:
          - "Title (post_title)"
          - "Body (post_content, HTML)"
          - "Excerpt (post_excerpt)"
          - "Featured Image (post_thumbnail)"
          - "Categories (taxonomy: category)"
          - "Tags (taxonomy: post_tag)"
          - "Author (post_author)"
          - "Publish Date (post_date)"

        target_cms: "Contentful"
        target_structure:
          - "Title → title (Short text field)"
          - "Body → body (Rich text field, convert HTML to Markdown)"
          - "Excerpt → excerpt (Long text field)"
          - "Featured Image → featuredImage (Asset reference)"
          - "Categories → category (Reference to Category content type)"
          - "Tags → tags (Multi-reference to Tag content type)"
          - "Author → author (Reference to Author content type)"
          - "Publish Date → publishedDate (Date field)"

        transformation_rules:
          - "HTML to Markdown conversion (strip unsupported tags)"
          - "Internal links update (old URLs → new URLs)"
          - "Image paths update (migrate to new CDN)"
          - "Category mapping (consolidate from 50 to 20 categories)"
          - "Author consolidation (multiple contributor accounts → single author profile)"

    url_structure_redesign:
      old_structure: "/blog/2023/11/15/post-title"
      new_structure: "/blog/post-title"

      redirect_mapping:
        - "Create CSV: old_url, new_url, redirect_type (301)"
        - "Example: /blog/2023/11/15/post-title → /blog/post-title → 301"
        - "Total redirects: 10,000+ (all content URLs)"
```

**Phase 3: Migration Execution Strategy**

Define systematic approach to migrate content:

```yaml
migration_execution_framework:
  migration_approaches:
    big_bang_migration:
      description: "Migrate all content at once, flip switch on go-live date"
      best_for: "Small sites (<1,000 pages), low traffic, non-critical"
      pros: ["Single cutover", "Simple", "Fast"]
      cons: ["High risk", "Large downtime window", "No rollback"]

    phased_migration:
      description: "Migrate content in stages (by section, type, or priority)"
      best_for: "Medium to large sites (1,000-100,000 pages), moderate traffic"
      pros: ["Lower risk", "Iterative learning", "Easier testing"]
      cons: ["Longer timeline", "Two systems running simultaneously", "Complexity"]

      phased_approach_example:
        phase_1: "Migrate 10% (pilot): Single content section (e.g., Help Center)"
        phase_2: "Migrate 40% (major sections): Blog, Resources, Case Studies"
        phase_3: "Migrate 40% (remaining sections): Product Pages, Landing Pages"
        phase_4: "Migrate 10% (edge cases): Archive content, redirects"

    parallel_run:
      description: "Run old and new systems simultaneously, gradually shift traffic"
      best_for: "Large sites (100,000+ pages), high traffic, mission-critical"
      pros: ["Zero downtime", "Safe rollback", "A/B test new platform"]
      cons: ["Most complex", "Dual maintenance", "Expensive"]

      parallel_run_strategy:
        - "Week 1: New platform live at new subdomain (staging.example.com)"
        - "Week 2: Route 5% of traffic to new platform"
        - "Week 3: Route 25% of traffic (monitor performance)"
        - "Week 4: Route 50% of traffic"
        - "Week 5: Route 100% of traffic, old platform becomes backup"
        - "Week 6: Decommission old platform"

  migration_workflow:
    step_1_export:
      activities:
        - "Export content from source CMS (API, database dump, CSV)"
        - "Export media assets (images, videos, PDFs)"
        - "Export metadata (categories, tags, authors)"
        - "Export content relationships (related posts, linked content)"

      validation:
        - "Verify export completeness (expected vs. actual count)"
        - "Check for corrupt files or encoding issues"
        - "Test sample content items for data integrity"

    step_2_transform:
      activities:
        - "Clean data (remove HTML artifacts, fix encoding)"
        - "Transform structure (map source fields to target fields)"
        - "Convert formats (HTML → Markdown, proprietary → standard)"
        - "Update internal links (old URLs → new URLs)"
        - "Optimize media (compress images, resize, convert formats)"

      automation:
        - "Write migration scripts (Python, Node.js, Ruby)"
        - "Use ETL tools (Talend, Apache NiFi)"
        - "Leverage CMS migration plugins (if available)"

    step_3_load:
      activities:
        - "Import content to target CMS (API calls, bulk import)"
        - "Upload media assets (to new CDN or DAM)"
        - "Recreate content relationships (parent/child, references)"
        - "Set up redirects (301 redirects from old to new URLs)"
        - "Configure metadata (SEO, analytics, accessibility)"

      validation:
        - "Verify import count matches export count"
        - "Spot-check content rendering (formatting, images, links)"
        - "Test all redirects (no 404s for migrated content)"

    step_4_validate:
      validation_checklist:
        - "Content integrity: All content migrated correctly"
        - "Functional testing: Forms, search, navigation work"
        - "SEO validation: Meta tags, structured data, canonical URLs"
        - "Accessibility: WCAG compliance, keyboard nav, screen reader"
        - "Performance: Page load times meet targets"
        - "Cross-browser: Chrome, Firefox, Safari, Edge"
        - "Mobile responsiveness: Content displays correctly on mobile"
        - "Redirects: All old URLs redirect to correct new URLs (301)"
        - "Analytics: Tracking codes fire correctly"
        - "Integrations: CRM, marketing automation, etc. connected"

    step_5_go_live:
      go_live_checklist:
        - "Final content freeze on old CMS (prevent last-minute changes)"
        - "DNS cutover (point domain to new platform) OR Traffic routing (if parallel run)"
        - "Invalidate CDN cache (force fresh content delivery)"
        - "Monitor real-time (traffic, errors, performance)"
        - "War room: Team on standby for immediate issue resolution"

      rollback_triggers:
        - "Site down for >15 minutes"
        - "Error rate >5%"
        - "Traffic drop >50% (not due to redirect issues)"
        - "Critical functionality broken (checkout, forms, auth)"
```

**Phase 4: SEO Preservation Strategy**

Protect search rankings during migration:

```yaml
seo_preservation_framework:
  redirect_strategy:
    redirect_mapping:
      process:
        - "Export all URLs from old site (sitemap, crawl, analytics)"
        - "Map each old URL to new URL (manually or via rules)"
        - "Create redirect CSV (old_url, new_url, redirect_type)"
        - "Implement redirects (server-level: .htaccess, nginx.conf, CDN)"

      redirect_types:
        301_permanent:
          use: "Standard migration (content moved permanently)"
          example: "/old-blog-post → /new-blog-post"

        302_temporary:
          use: "Testing new URLs (not recommended for permanent migrations)"

        410_gone:
          use: "Deleted content with no replacement"
          example: "/outdated-product-page → 410 Gone"

      redirect_best_practices:
        - "301 redirect every old URL (even low-traffic pages have backlinks)"
        - "Chain redirects = bad (A→B→C); direct redirect (A→C)"
        - "Wildcard redirects for patterns (e.g., /old-category/* → /new-category/*)"
        - "Test ALL redirects before go-live (crawl old sitemap, verify 301s)"

  seo_technical_checklist:
    pre_migration:
      - "Baseline traffic (Google Analytics: 90 days before migration)"
      - "Baseline rankings (track top 100 keywords)"
      - "Export backlink profile (Ahrefs, Moz, Majestic)"
      - "Crawl old site (Screaming Frog: all URLs, metadata, structure)"

    during_migration:
      - "Implement 301 redirects (no 404s for migrated content)"
      - "Update internal links (all new URLs, no self-redirects)"
      - "Canonical tags (specify preferred URL version)"
      - "XML sitemap (submit new sitemap to Google Search Console)"
      - "Meta tags (title, description, Open Graph, Twitter Cards)"
      - "Structured data (Schema.org markup: Article, Product, etc.)"
      - "Robots.txt (ensure new site is crawlable)"

    post_migration:
      - "Monitor Google Search Console (crawl errors, index coverage)"
      - "Track rankings (expect 2-4 week fluctuation period)"
      - "Track organic traffic (compare to baseline)"
      - "Fix any 404s discovered (update redirects)"
      - "Request re-indexing (Google Search Console: fetch as Google)"

  content_optimization_post_migration:
    - "Update publish dates (make content look fresh)"
    - "Improve thin content (expand short posts to 800+ words)"
    - "Optimize meta descriptions (improve CTR from search)"
    - "Add internal links (connect new content to migrated content)"
    - "Create new content (fill gaps discovered in migration audit)"
```

**Phase 5: Testing & Quality Assurance**

Rigorous testing before go-live:

```yaml
testing_framework:
  testing_stages:
    unit_testing:
      scope: "Individual content items"
      tests:
        - "Content displays correctly (formatting, images, links)"
        - "Metadata complete (title, description, tags)"
        - "Media assets load (images, videos, PDFs)"
        - "Internal links work (no broken links)"

      sample_size: "Test 10% of content items (random sample across types)"

    integration_testing:
      scope: "System integrations and workflows"
      tests:
        - "CMS to frontend (content appears on website)"
        - "CRM integration (form submissions sync)"
        - "Marketing automation (email triggers work)"
        - "Analytics tracking (GA4, events fire correctly)"
        - "Search functionality (internal site search)"

    user_acceptance_testing:
      scope: "Stakeholder validation"
      participants: ["Content editors", "Marketing team", "Product managers"]
      tests:
        - "Can create new content in new CMS?"
        - "Can edit migrated content?"
        - "Workflow approvals work?"
        - "Publishing process smooth?"
        - "Content displays as expected on frontend?"

    load_testing:
      scope: "Performance under traffic"
      tests:
        - "Simulate expected traffic (2× peak traffic)"
        - "Measure page load times (target: <3 seconds)"
        - "Test concurrent users (1,000+ simultaneous)"
        - "Monitor server resources (CPU, memory, database)"

      tools: ["Apache JMeter", "LoadRunner", "Gatling"]

    seo_testing:
      scope: "Search engine optimization validation"
      tests:
        - "All redirects return 301 (not 302 or 404)"
        - "Canonical tags point to correct URLs"
        - "XML sitemap valid and submitted"
        - "Robots.txt allows crawling"
        - "Meta tags complete (title, description)"
        - "Structured data validates (Google Rich Results Test)"

      tools: ["Screaming Frog", "Google Search Console", "Redirect Checker"]
```

**Phase 6: Post-Migration Monitoring & Optimization**

Monitor health and optimize after launch:

```yaml
post_migration_framework:
  monitoring_dashboard:
    metrics_to_track:
      traffic:
        - "Daily organic traffic (compare to baseline)"
        - "Bounce rate (expect temporary increase)"
        - "Pages per session (should recover to baseline)"

      seo:
        - "Search rankings (top 100 keywords, track weekly)"
        - "Google Search Console (crawl errors, index coverage)"
        - "Backlinks (ensure no significant loss)"

      technical:
        - "404 errors (fix immediately)"
        - "Page load times (should be same or faster)"
        - "Server uptime (99.9%+ target)"
        - "Error rates (5XX errors)"

      business:
        - "Conversions (form fills, signups, purchases)"
        - "Revenue (if e-commerce)"
        - "Engagement (time on site, pages viewed)"

  issue_resolution:
    common_post_migration_issues:
      - issue: "404 errors for some old URLs"
        fix: "Add missing redirects, update redirect rules"

      - issue: "Organic traffic drop 20-30%"
        diagnosis: "Redirect issues, indexing lag, or content quality"
        fix: "Audit redirects, submit sitemap, request re-indexing"

      - issue: "Images not loading or slow"
        diagnosis: "CDN misconfiguration or image optimization needed"
        fix: "Configure CDN caching, compress images"

      - issue: "Forms not submitting"
        diagnosis: "Integration broken (CRM, email service)"
        fix: "Revalidate API keys, test integrations"

  optimization_activities:
    first_30_days:
      - "Fix all 404s discovered"
      - "Optimize slow-loading pages"
      - "Update content with broken external links"
      - "Monitor and respond to SEO fluctuations"

    30_90_days:
      - "Refresh top-performing content (update, expand)"
      - "Improve thin content (add depth to short articles)"
      - "Internal linking audit (connect content silos)"
      - "Create new content (capitalize on new platform capabilities)"

    90_180_days:
      - "Comprehensive content audit (what's working, what's not)"
      - "A/B testing (optimize conversion paths)"
      - "Personalization experiments (leverage new CMS features)"
      - "Decommission old platform (if not already done)"
```

---

## Output Schema

```yaml
content_migration_strategy:
  assessment:
    content_inventory: "[Total items, types, metadata]"
    technical_assessment: "[Source/target capabilities, gaps]"
    seo_baseline: "[Traffic, rankings, backlinks]"
    risk_assessment: "[High-risk areas, mitigation strategies]"

  content_triage:
    migrate_as_is: "[Count, criteria]"
    migrate_with_updates: "[Count, criteria]"
    consolidate: "[Count, criteria]"
    archive: "[Count, criteria]"
    delete: "[Count, criteria]"

  transformation_logic:
    content_mapping: "[Source structure → Target structure]"
    url_structure: "[Old pattern → New pattern]"
    redirect_plan: "[Total redirects, mapping process]"

  execution_strategy:
    approach: "[Big bang | Phased | Parallel run]"
    timeline: "[Phase-by-phase schedule]"
    workflow: "[Export → Transform → Load → Validate → Go-live]"

  seo_preservation:
    redirect_strategy: "[Redirect mapping, implementation]"
    technical_seo: "[Pre, during, post-migration checklist]"
    monitoring_plan: "[Rankings, traffic, errors to track]"

  testing_plan:
    test_types: "[Unit, Integration, UAT, Load, SEO]"
    sample_size: "[% of content to test]"
    validation_criteria: "[Pass/fail conditions]"

  post_migration:
    monitoring_dashboard: "[Metrics, frequency]"
    issue_resolution: "[Common issues, fixes]"
    optimization_roadmap: "[30/60/90-day activities]"
```

---

## Examples

### Example 1: Enterprise WordPress to Contentful (50K Pages)

**Timeline**: 9 months
**Approach**: Phased migration (4 phases)
**Challenge**: Complex content relationships, 12 languages

**Results**:
- 99.8% content migrated successfully
- Zero downtime (parallel run strategy)
- Organic traffic recovered to 105% of baseline within 6 weeks
- 47 redirects fixed post-launch (out of 50,000)

### Example 2: Multi-Site Consolidation (5 Sites → 1 Site)

**Timeline**: 6 months
**Approach**: Sequential migration (one site at a time)
**Challenge**: Duplicate content, URL conflicts, brand consolidation

**Results**:
- Consolidated 125K pages to 80K (40% reduction via deduplication)
- Implemented 45K redirects
- Organic traffic increased 35% (consolidated domain authority)

### Example 3: Legacy CMS to Headless (Custom → Sanity)

**Timeline**: 12 months
**Approach**: Big bang with extensive testing
**Challenge**: No API, manual content migration, custom functionality

**Results**:
- Custom migration scripts (Python) for 15K articles
- 3-month parallel run for validation
- Page load times improved 60% (headless architecture)

### Example 4: Domain Migration (example.co → example.com)

**Timeline**: 2 months
**Approach**: Big bang (same content, new domain)
**Challenge**: Preserve SEO during domain change

**Results**:
- Implemented 25K redirects (old domain → new domain)
- Rankings fluctuated 15% for 4 weeks, then recovered fully
- Zero content changes (pure domain migration)

### Example 5: Drupal 7 to Drupal 9 (10K Pages)

**Timeline**: 5 months
**Approach**: Phased migration
**Challenge**: Major version upgrade, module compatibility

**Results**:
- 98% content migrated automatically (scripts)
- 2% required manual migration (complex custom fields)
- Downtime: 4 hours (DNS cutover window)
- Traffic dip: 8% week 1, recovered week 3

---

## Success Metrics

- **Content Integrity**: 99%+ of content migrated successfully
- **SEO Preservation**: Organic traffic recovers to 95%+ of baseline within 8 weeks
- **Zero Data Loss**: All critical content accounted for (no missing items)
- **Redirect Coverage**: 100% of old URLs have redirect or 410 status
- **Downtime**: Within tolerance (ideally zero downtime)
- **Post-Launch Issues**: <1% of content requires fixes after launch

---

## Best Practices

- **Plan for 2-3× Longer**: Migrations always take longer than estimated
- **Test Redirects Obsessively**: 404s kill SEO; test every redirect
- **Pilot First**: Migrate 10% as proof of concept before full migration
- **Crawl Everything**: Automated crawl finds issues humans miss
- **Expect SEO Fluctuation**: 2-8 week ranking volatility is normal
- **Communicate Constantly**: Stakeholders need regular updates
- **Automate Where Possible**: Manual migration doesn't scale

---

## Common Pitfalls

- **Underestimating Complexity**: "It's just moving content" (it never is)
- **No Redirect Plan**: Skipping redirects = SEO disaster
- **Insufficient Testing**: "Looks good on staging" ≠ works in production
- **No Rollback Plan**: Can't revert = stuck with broken migration
- **Ignoring SEO**: Traffic loss discovered too late to fix
- **Poor Communication**: Stakeholders surprised by issues
- **Migrating Everything**: Not triaging content = migrating garbage

---

**License**: © 2025 Adedayo Agarau. Licensed under CC BY-SA 4.0.
**Maintainer**: Adedayo Agarau

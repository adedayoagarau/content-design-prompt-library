## Site Map Content Organization v1.0

**Purpose**: Design site map pages and XML sitemaps with clear hierarchy, logical grouping, and scannable structure that helps users find content and supports search engine crawling.

---

**PROMPT:**

You are creating a site map for {{site_type}} containing {{content_volume}} pages across {{section_count}} main sections. Design both an HTML site map for users and content guidance for XML sitemap, organizing content with clear hierarchy and supporting {{primary_purpose}}.

=== SITE MAP CONTEXT ===
Site type: {{site_type}} (corporate/e-commerce/content/documentation/portal)
Content volume: {{content_volume}} (total number of pages/products/documents)
Section count: {{section_count}} (main top-level categories)
Hierarchy depth: {{hierarchy_depth}} (maximum levels deep)
Update frequency: {{update_frequency}} (static/weekly/daily/real-time)
Primary purpose: {{primary_purpose}} (user navigation/SEO/both)

=== SITE STRUCTURE ===
Main sections: {{main_sections}}
Content types: {{content_types}} (pages/posts/products/media/tools)
User segments: {{user_segments}} (different audiences served)
Priority pages: {{priority_pages}} (most important destinations)
Excluded content: {{excluded_content}} (what to omit from sitemap)
Multilingual: {{multilingual_support}} (single language/multiple languages)

=== SITE MAP REQUIREMENTS ===

**HTML Sitemap (User-Facing)**:
- Location: {{html_location}} (footer link/dedicated page/help section)
- Layout: {{layout_style}} (single column/multi-column/accordion/expandable tree)
- Grouping strategy: {{grouping_strategy}} (by topic/by audience/by content type/chronological)
- Link limits: {{link_limit}} (maximum links to display - recommend under 200)

**XML Sitemap (Search Engines)**:
- Protocol: {{sitemap_protocol}} (sitemap.xml/sitemap index for large sites)
- Change frequency: {{change_freq}} (always/hourly/daily/weekly/monthly/yearly/never)
- Priority values: {{priority_strategy}} (how to assign 0.0-1.0 priority)
- Image/video sitemaps: {{media_sitemaps}} (included/separate files)

=== OUTPUT REQUIREMENTS ===

```yaml
html_sitemap:
  page_structure:
    title: "Site Map | {{site_name}}"
    meta_description: "Complete site navigation for {{site_name}}. Browse all pages organized by category."
    h1: "Site Map" or "Browse {{site_name}}"
    introductory_text: "brief explanation of sitemap purpose and how to use"

  organization_strategy:
    layout_type: "multi-column/accordion/tree view/tabbed"
    columns: number (if multi-column)
    sort_order: "alphabetical/by importance/by date/custom"

  section_structure:
    - section_name: "string (H2 heading)"
      description: "optional 1-sentence section description"
      subsections:
        - subsection_name: "string (H3 heading)"
          pages:
            - page_title: "string (linked)"
              url: "/path/to/page"
              annotation: "optional - new/updated/popular"

      display_rules:
        collapse_by_default: boolean
        show_page_count: "e.g., 'Products (342)'"
        max_items_before_see_all: number

  content_organization:
    primary_navigation_mirror:
      - "Match main nav structure for familiarity"
      - sections: ["mirror of primary nav sections"]

    audience_based:
      - section: "For Customers"
        pages: ["product pages, support, billing"]
      - section: "For Partners"
        pages: ["partner portal, resources, contact"]
      - section: "Company Information"
        pages: ["about, careers, press, legal"]

    content_type_based:
      - section: "Products & Services"
      - section: "Resources & Learning"
      - section: "Support & Contact"
      - section: "Company & Legal"

    recommendation: "strategy with rationale for this site"

  special_sections:
    utility_pages:
      heading: "Tools & Account"
      pages: ["Login", "Create Account", "Search", "Shopping Cart"]

    legal_required:
      heading: "Legal & Policies"
      pages: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility Statement"]

    dynamic_content:
      heading: "Latest Content" or "Recent Additions"
      display: "most recent 10 pages with dates"
      update_frequency: "automatic/manual"

  accessibility_features:
    skip_links: "skip to main content, skip to section"
    landmark_roles: "navigation role for sitemap"
    headings_hierarchy: "proper H2 > H3 > H4 nesting"
    link_text: "descriptive, matches page title exactly"
    keyboard_navigation: "all interactive elements keyboard accessible"

  visual_design:
    indentation: "show hierarchy visually"
    separators: "between sections or subsections"
    icon_usage: "optional icons for content types"
    color_coding: "optional - different colors for different content types"

  mobile_optimization:
    layout: "accordion (expand/collapse) recommended"
    search_option: "include search box to filter sitemap"
    section_jump_links: "quick jump to alphabetical sections"

xml_sitemap:
  structure:
    sitemap_type: "single sitemap/sitemap index (if over 50,000 URLs)"
    file_location: "https://{{domain}}/sitemap.xml"
    protocol: "Sitemap 0.9 protocol"

  url_entries:
    - loc: "https://example.com/page-url"
      lastmod: "YYYY-MM-DD or YYYY-MM-DDTHH:MM:SS+00:00"
      changefreq: "always/hourly/daily/weekly/monthly/yearly/never"
      priority: "0.0 to 1.0"

  priority_assignment:
    homepage: 1.0
    main_category_pages: 0.8
    subcategory_pages: 0.6
    individual_content_pages: 0.5
    utility_pages: 0.3
    rationale: "higher priority for shallower, more important pages"

  changefreq_guidelines:
    homepage: "daily (if updated regularly)"
    blog_posts: "never (after publication, if not edited)"
    product_pages: "weekly (if inventory/price changes)"
    static_pages: "monthly"
    news_articles: "never (archived content)"

  url_inclusion_rules:
    include:
      - "All canonical pages"
      - "Public-facing pages requiring no login"
      - "Pages with unique, valuable content"

    exclude:
      - "Duplicate content pages"
      - "Paginated pages beyond page 1 (use rel=next/prev instead)"
      - "Login/logout pages"
      - "Admin/internal tools"
      - "Thank you/confirmation pages"
      - "Pages with noindex meta tag"
      - "Search results pages"

  sitemap_splitting:
    strategy: "split by content type/section/date"
    sitemap_index_example: |
      <?xml version="1.0" encoding="UTF-8"?>
      <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <sitemap>
          <loc>https://example.com/sitemap-products.xml</loc>
          <lastmod>2025-01-15</lastmod>
        </sitemap>
        <sitemap>
          <loc>https://example.com/sitemap-articles.xml</loc>
          <lastmod>2025-01-20</lastmod>
        </sitemap>
      </sitemapindex>

  image_sitemap:
    include: "if site has significant image content"
    elements:
      - "image:loc (image URL)"
      - "image:title (optional)"
      - "image:caption (optional)"
      - "image:license (optional)"

  video_sitemap:
    include: "if site hosts video content"
    required_elements:
      - "video:thumbnail_loc"
      - "video:title"
      - "video:description"
      - "video:content_loc or video:player_loc"

  hreflang_sitemap:
    multilingual_support: "use hreflang annotations"
    example: |
      <url>
        <loc>https://example.com/page</loc>
        <xhtml:link rel="alternate" hreflang="en" href="https://example.com/page"/>
        <xhtml:link rel="alternate" hreflang="es" href="https://example.es/page"/>
      </url>

maintenance:
  update_frequency:
    automated: "generate sitemap automatically on content publish"
    manual: "regenerate weekly/monthly"
    notification: "submit updated sitemap to search engines via Search Console"

  monitoring:
    coverage_check: "ensure all public pages are included"
    error_monitoring: "check for 404s in sitemap URLs"
    crawl_stats: "monitor search engine crawl patterns"

  testing:
    - "Validate XML syntax using sitemap validator"
    - "Check file size (under 50MB uncompressed)"
    - "Verify URL count (under 50,000 per file)"
    - "Test sitemap accessibility at /sitemap.xml"
    - "Confirm proper UTF-8 encoding"
```

=== ORGANIZATION PATTERNS ===

**Flat vs. Hierarchical**:
- **Flat**: All links at same level, grouped by topic
  - Best for: Small sites (under 100 pages), simple structures
- **Hierarchical**: Nested levels showing parent-child relationships
  - Best for: Large sites, complex taxonomies, e-commerce

**Alphabetical vs. Priority**:
- **Alphabetical**: Easy to scan for known pages
- **Priority**: Important pages first (conversion pages, popular content)
- **Hybrid**: Sections in priority order, pages within sections alphabetical

**Expansion Patterns**:
- **All expanded**: Show all levels, all links visible
  - Best for: Smaller sitemaps (under 200 links)
- **Collapsed by default**: Click to expand sections
  - Best for: Large sitemaps, mobile views
- **Expandable on hover**: Desktop feature for quick browsing

=== EXAMPLES ===

**Example 1: E-commerce Site with 5,000 Products**
- site_type: "e-commerce fashion retailer"
- content_volume: "5,000 product pages + 200 content pages"
- section_count: "8 main categories"
- hierarchy_depth: "4 levels (Home > Gender > Category > Subcategory > Product)"
- primary_purpose: "both user navigation and SEO"

**Output**:
```yaml
html_sitemap:
  page_structure:
    title: "Site Map | Fashion Boutique"
    h1: "Browse Our Complete Site"
    introductory_text: "Find all our products, resources, and information organized by category below. Looking for something specific? Try our search feature."

  organization_strategy:
    layout_type: "accordion with search filter"
    sort_order: "custom - shopping categories first, then utility/company pages"

  section_structure:
    - section_name: "Women's Fashion"
      description: "Clothing, shoes, and accessories for women"
      subsections:
        - subsection_name: "Clothing"
          pages: ["Dresses", "Tops", "Pants", "Outerwear", "Activewear"]
          display_rules:
            collapse_by_default: true
            show_page_count: "Clothing (1,247)"
            max_items_before_see_all: 5

    - section_name: "Men's Fashion"
      subsections:
        - subsection_name: "Clothing"
          pages: ["Shirts", "Pants", "Suits", "Outerwear", "Activewear"]

    - section_name: "Sale & Offers"
      pages: ["Current Sales", "Clearance", "New Markdowns", "Gift Cards"]

    - section_name: "Customer Service"
      pages: ["Size Guide", "Shipping Info", "Returns & Exchanges", "Track Order", "Contact Us", "FAQ"]

    - section_name: "About Us"
      pages: ["Our Story", "Careers", "Store Locations", "Sustainability", "Press"]

  special_sections:
    legal_required:
      heading: "Legal"
      pages: ["Privacy Policy", "Terms & Conditions", "Accessibility Statement", "California Privacy Rights"]

  mobile_optimization:
    layout: "accordion - each section collapsed by default"
    search_option: "search box at top filters sitemap as user types"
    section_jump_links: "sticky nav: Women | Men | Kids | Sale | Help"

xml_sitemap:
  structure:
    sitemap_type: "sitemap index - split by content type"
    sitemaps:
      - "/sitemap-products.xml (5,000 URLs)"
      - "/sitemap-categories.xml (200 URLs)"
      - "/sitemap-content.xml (50 URLs)"
      - "/sitemap-images.xml (image sitemap)"

  priority_assignment:
    homepage: 1.0
    category_pages: 0.9
    subcategory_pages: 0.7
    product_pages: 0.5
    sale_pages: 0.8
    content_pages: 0.4
    utility_pages: 0.3

  changefreq_guidelines:
    homepage: "daily"
    product_pages: "weekly (price/inventory changes)"
    category_pages: "weekly (as products added/removed)"
    content_pages: "monthly"
    legal_pages: "yearly"

  image_sitemap:
    include: true
    rationale: "5,000+ product images benefit from image SEO"
    elements: "product image URL, product name as title, alt text as caption"
```

**Example 2: Corporate Website with 150 Pages**
- site_type: "B2B SaaS company site"
- content_volume: "150 pages (product, content, company info)"
- section_count: "6 main sections"
- hierarchy_depth: "3 levels typically"
- primary_purpose: "user navigation and content discovery"

**Output**:
```yaml
html_sitemap:
  page_structure:
    title: "Site Map | CloudPlatform"
    h1: "Site Map"
    introductory_text: "Complete navigation for CloudPlatform.com. All pages organized by section."

  organization_strategy:
    layout_type: "multi-column (3 columns on desktop, single column on mobile)"
    sort_order: "by importance - product info first, then resources, then company"

  section_structure:
    - section_name: "Platform"
      pages:
        - "Overview"
        - "Features"
        - "Integrations"
        - "Security & Compliance"
        - "API Documentation"
        - "Pricing"

    - section_name: "Solutions"
      subsections:
        - subsection_name: "By Team"
          pages: ["For Marketing", "For Sales", "For Support", "For Product"]
        - subsection_name: "By Industry"
          pages: ["Financial Services", "Healthcare", "Retail", "Technology"]

    - section_name: "Resources"
      pages:
        - "Blog"
        - "Case Studies"
        - "Whitepapers"
        - "Webinars"
        - "Help Center"
        - "Developer Docs"
        - "API Reference"
        - "Community Forum"

    - section_name: "Customers"
      pages: ["Case Studies", "Customer Stories", "Testimonials", "Customer Portal Login"]

    - section_name: "Company"
      pages: ["About Us", "Careers", "Press", "Events", "Contact Us", "Partners"]

    - section_name: "Legal & Support"
      pages: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility", "Security", "Support"]

  accessibility_features:
    skip_links: "Skip to section"
    landmark_roles: "<nav aria-label='Site Map'>"
    headings_hierarchy: "H1 'Site Map', H2 for sections, H3 for subsections"
    link_text: "exact match to page titles"

xml_sitemap:
  structure:
    sitemap_type: "single sitemap (under 50,000 URLs)"
    file_location: "https://cloudplatform.com/sitemap.xml"

  priority_assignment:
    homepage: 1.0
    pricing_page: 0.9
    features_pages: 0.8
    solutions_pages: 0.7
    blog_posts: 0.5
    case_studies: 0.6
    legal_pages: 0.3

  changefreq_guidelines:
    homepage: "weekly"
    product_pages: "monthly"
    blog: "never (static after publish)"
    case_studies: "never"
    legal: "yearly"
```

**Example 3: Documentation Site with Deep Hierarchy**
- site_type: "technical documentation portal"
- content_volume: "800 documentation pages"
- section_count: "12 main product areas"
- hierarchy_depth: "5 levels (Home > Product > Category > Guide > Section > Page)"
- primary_purpose: "user findability and SEO"

**Output**:
```yaml
html_sitemap:
  page_structure:
    title: "Documentation Site Map | DevTools Docs"
    h1: "Documentation Site Map"
    introductory_text: "Browse all documentation organized by product and topic. Use the search to quickly find specific guides."

  organization_strategy:
    layout_type: "expandable tree view with search"
    sort_order: "alphabetical by product, then by guide importance"

  section_structure:
    - section_name: "Getting Started"
      pages: ["Quick Start", "Installation", "First Project", "Core Concepts", "Tutorials"]

    - section_name: "API Reference"
      subsections:
        - subsection_name: "Authentication"
          pages: ["Overview", "OAuth 2.0", "API Keys", "JWT Tokens"]
          display_rules:
            collapse_by_default: true
            show_page_count: "Authentication (15)"

    - section_name: "Guides"
      subsections:
        - subsection_name: "Data Management"
        - subsection_name: "Security"
        - subsection_name: "Performance"
        - subsection_name: "Deployment"

    - section_name: "SDK Documentation"
      subsections:
        - "JavaScript SDK"
        - "Python SDK"
        - "Ruby SDK"
        - "Go SDK"

  special_sections:
    version_selector:
      heading: "Documentation Versions"
      pages: ["v3.0 (latest)", "v2.5", "v2.0", "v1.x (deprecated)"]

  mobile_optimization:
    layout: "accordion with persistent search bar"
    search_option: "fuzzy search across all page titles"
    section_jump_links: "alphabetical quick nav: A-F, G-M, N-S, T-Z"

xml_sitemap:
  structure:
    sitemap_type: "sitemap index - split by version and product"
    sitemaps:
      - "/sitemap-v3-docs.xml"
      - "/sitemap-v2-docs.xml"
      - "/sitemap-api-reference.xml"
      - "/sitemap-guides.xml"

  priority_assignment:
    docs_homepage: 1.0
    getting_started: 0.9
    api_reference_main: 0.8
    individual_api_pages: 0.6
    guides: 0.7
    legacy_versions: 0.4

  changefreq_guidelines:
    latest_version_docs: "weekly"
    stable_guides: "monthly"
    deprecated_versions: "never"

  url_inclusion_rules:
    include: "all current version docs, previous 2 versions"
    exclude: "versions older than 2 releases back, draft pages, internal notes"
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Use semantic HTML with nav element and aria-label="Site map" or "Site navigation". Structure with proper heading hierarchy (H1 for page title, H2 for sections, H3 for subsections). Ensure all links have descriptive text matching destination page titles. Provide keyboard navigation for all interactive elements including expand/collapse controls. Use sufficient color contrast (4.5:1 minimum). Include skip links to bypass long lists. Make touch targets 44x44px minimum on mobile. For XML sitemaps, ensure proper UTF-8 encoding and valid XML syntax. Provide text alternatives for any icons or visual indicators.

**Psychological Principles**: Chunking (group related pages into categories to reduce cognitive load). Closure principle (hierarchical structure satisfies need for organization). Recognition over recall (browsing sitemap vs. remembering URLs). Information scent (descriptive section names help users predict content). Progressive disclosure (collapsed sections reveal details on demand). Satisficing (users scan for "good enough" match rather than perfect match). Spatial consistency (sitemap layout mirrors main navigation for familiarity). Reduced decision paralysis (clear grouping helps users choose exploration path).

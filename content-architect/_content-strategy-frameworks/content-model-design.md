## Content Model Design v1.0

**Purpose**: Design structured, reusable content models that separate content from presentation, enable omnichannel delivery, improve content quality and consistency, and create scalable content systems through strategic modeling, taxonomy design, and relationship architecture.

**Context**: Use this framework when building content management systems, designing structured content architectures, or modernizing content operations from unstructured documents to modular, API-deliverable content components. Most organizations treat content as monolithic pages rather than structured data, limiting reuse, personalization, and multi-channel delivery. This system establishes content types, attributes, relationships, and governance that transform content into strategic assets. Ideal for enterprises with complex content ecosystems, organizations implementing headless CMS, product companies needing API-first content, or teams transitioning from traditional CMS to structured content.

**Strategic Frameworks Applied**:
- **Content-as-Data Philosophy** - Treating content as structured information not documents
- **Domain-Driven Content Design** - Modeling content around business domains
- **Component Content Management** - Breaking content into reusable atomic units
- **Relationship Architecture** - Defining how content entities connect and reference each other
- **Omnichannel Content Strategy** - Single source, multiple destinations
- **Content Lifecycle Modeling** - Status, workflow, and governance within model

---

## Variables

### Business Context Variables
- `{{organization_type}}`: Enterprise | Product company | Publishing | E-commerce | Multi-brand
- `{{content_complexity}}`: Simple (10s of content types) | Complex (100s) | Enterprise (1000s)
- `{{channel_strategy}}`: Web-only | Multi-channel | Omnichannel | API-first
- `{{content_volume}}`: 1,000s | 10,000s | 100,000s | Millions of content items
- `{{reuse_requirements}}`: Low | Medium | High (content reused across contexts)
- `{{personalization_needs}}`: None | Basic | Advanced (dynamic assembly)

### Technical Context Variables
- `{{cms_platform}}`: Contentful | Contentstack | Sanity | Adobe AEM | Custom
- `{{cms_paradigm}}`: Traditional | Headless | Hybrid
- `{{delivery_channels}}`: Website | Mobile app | API | Email | IoT | In-product
- `{{localization_scope}}`: Single language | Multi-language | Global
- `{{integration_requirements}}`: CRM | E-commerce | DAM | Marketing automation

### Content Domain Variables
- `{{primary_content_domains}}`: Products | Articles | Events | People | Locations | etc.
- `{{content_relationships}}`: How domains connect (Products have Reviews, Authors write Articles)
- `{{taxonomy_depth}}`: Flat | 2-3 levels | Deep hierarchies
- `{{metadata_richness}}`: Basic | Standard | Extensive
- `{{content_governance}}`: Centralized | Distributed | Hybrid

### Stakeholder Variables
- `{{content_creators}}`: Marketers | Writers | Product managers | Developers | All employees
- `{{technical_skill_level}}`: Non-technical | Mixed | Highly technical
- `{{approval_complexity}}`: Self-publish | Single approval | Multi-step workflow
- `{{content_ops_maturity}}`: Ad-hoc | Defined | Optimized

---

## Prompt

You are a content architecture strategist designing a comprehensive content model for **{{organization_type}}** delivering content across **{{delivery_channels}}** using **{{cms_platform}}**. Your task is to create a structured content system that supports **{{reuse_requirements}}** reuse, manages **{{content_volume}}** content items, enables **{{personalization_needs}}** personalization, and serves **{{content_creators}}** with **{{technical_skill_level}}** skill levels.

### Content Modeling Methodology

**Phase 1: Content Inventory & Analysis**

Audit existing content to identify patterns:

```yaml
content_audit_framework:
  inventory:
    - List all existing content types (Blog posts, Product pages, Author bios, etc.)
    - Document current structure (fields, formats, metadata)
    - Analyze reuse patterns (where is content duplicated?)
    - Identify omnichannel needs (same content, different channels)
    
  pattern_recognition:
    - Group similar content types (Articles, News, Blog posts → Article content type)
    - Identify common attributes (title, description, image, publish date)
    - Map relationships (Articles have Authors, Products belong to Categories)
    - Find inconsistencies (same concept named differently)
    
  stakeholder_input:
    - Interview content creators: What's painful about current system?
    - Talk to developers: What's hard to build?
    - Ask users: Where does content fail to meet needs?
```

**Phase 2: Domain Modeling**

Define core content domains:

**Example: E-Commerce Content Domains**

```yaml
content_domains:
  products:
    description: "Physical or digital products sold"
    primary_use_cases: ["Product detail pages", "Product listings", "Search results", "Recommendations"]
    relationships: ["Has Reviews", "Belongs to Categories", "Has Variants", "Related to other Products"]
    
  categories:
    description: "Product taxonomy for navigation and filtering"
    primary_use_cases: ["Navigation menus", "Faceted search", "Breadcrumbs"]
    relationships: ["Contains Products", "Has parent/child Categories"]
    
  reviews:
    description: "User-generated product reviews"
    primary_use_cases: ["Product detail pages", "Review widgets", "Aggregated ratings"]
    relationships: ["Belongs to Product", "Written by User"]
    
  articles:
    description: "Editorial content (buying guides, how-tos, brand stories)"
    primary_use_cases: ["Blog", "Resources section", "Email campaigns", "Social posts"]
    relationships: ["Written by Authors", "References Products", "Tagged with Topics"]
    
  authors:
    description: "Content creators and contributors"
    primary_use_cases: ["Bylines", "Author pages", "Contributor lists"]
    relationships: ["Writes Articles", "Has bio and photo"]
    
  pages:
    description: "Marketing and informational pages"
    primary_use_cases: ["Homepage", "About", "Contact", "Landing pages"]
    relationships: ["Composed of Modules", "References other content"]
```

**Phase 3: Content Type Definition**

For each domain, define detailed content types:

**Content Type Template:**

```yaml
content_type: "Product"

meta:
  description: "Physical or digital product available for purchase"
  icon: "🛍️"
  primary_use: "Product detail pages, listings, search"
  creation_frequency: "Daily"
  typical_volume: "10,000+ items"
  
fields:
  - field_id: "title"
    label: "Product Name"
    type: "Short text"
    required: true
    max_length: 100
    help_text: "Customer-facing product name"
    validation: "No special characters except hyphen and apostrophe"
    example: "Wireless Bluetooth Headphones"
    
  - field_id: "sku"
    label: "SKU"
    type: "Short text"
    required: true
    unique: true
    pattern: "[A-Z]{3}-[0-9]{4}"
    help_text: "Internal product identifier"
    example: "ELC-1234"
    
  - field_id: "description_short"
    label: "Short Description"
    type: "Long text (plain)"
    required: true
    max_length: 250
    help_text: "Brief product description for listings and previews"
    example: "Premium noise-canceling headphones with 30-hour battery life"
    
  - field_id: "description_full"
    label: "Full Description"
    type: "Rich text"
    required: true
    allowed_elements: ["p", "ul", "ol", "li", "strong", "em", "a"]
    help_text: "Detailed product description with features and benefits"
    
  - field_id: "price"
    label: "Price"
    type: "Decimal"
    required: true
    validation: "Must be positive number"
    help_text: "Current price in USD"
    
  - field_id: "images"
    label: "Product Images"
    type: "Asset (multi)"
    required: true
    min_items: 1
    max_items: 10
    accepted_formats: ["image/jpeg", "image/png", "image/webp"]
    min_resolution: "1000x1000px"
    help_text: "High-res product photography"
    
  - field_id: "category"
    label: "Primary Category"
    type: "Reference (single)"
    required: true
    references: "Category content type"
    help_text: "Main product category for navigation"
    
  - field_id: "tags"
    label: "Product Tags"
    type: "Reference (multi)"
    references: "Tag content type"
    help_text: "Searchable tags for filtering and discovery"
    
  - field_id: "related_products"
    label: "Related Products"
    type: "Reference (multi)"
    references: "Product content type"
    max_items: 6
    help_text: "Manually curated recommendations"
    
  - field_id: "specifications"
    label: "Technical Specifications"
    type: "Structured (repeatable)"
    structure:
      - field: "spec_name" (Short text)
      - field: "spec_value" (Short text)
    help_text: "Key product specs (Weight, Dimensions, Battery life, etc.)"
    
  - field_id: "availability"
    label: "Availability Status"
    type: "Select (single)"
    required: true
    options: ["In Stock", "Low Stock", "Out of Stock", "Pre-order", "Discontinued"]
    default: "In Stock"
    
metadata:
  - field_id: "published_date"
    label: "Published Date"
    type: "Date/time"
    auto_set: true
    help_text: "When product went live"
    
  - field_id: "last_updated"
    label: "Last Updated"
    type: "Date/time"
    auto_update: true
    
  - field_id: "status"
    label: "Content Status"
    type: "Select"
    options: ["Draft", "In Review", "Published", "Archived"]
    required: true
    
  - field_id: "seo_title"
    label: "SEO Title"
    type: "Short text"
    max_length: 60
    help_text: "Optimized for search engines"
    
  - field_id: "seo_description"
    label: "SEO Description"
    type: "Long text (plain)"
    max_length: 160
    help_text: "Meta description for search results"
    
relationships:
  outbound:
    - "belongs_to": ["Category (required)"]
    - "references": ["Tags (optional multi)", "Related Products (optional multi)"]
  inbound:
    - "referenced_by": ["Articles (buying guides can reference products)"]
    - "has": ["Reviews (user-generated content)"]
    
workflow:
  statuses: ["Draft", "Ready for Review", "In Review", "Approved", "Published", "Archived"]
  transitions:
    - from: "Draft"
      to: "Ready for Review"
      allowed_roles: ["Content Creator", "Product Manager"]
      
    - from: "Ready for Review"
      to: "In Review"
      allowed_roles: ["Editor"]
      auto_notify: ["Assigned reviewer"]
      
    - from: "In Review"
      to: ["Approved", "Draft"]
      allowed_roles: ["Editor", "Content Lead"]
      
    - from: "Approved"
      to: "Published"
      allowed_roles: ["Publisher"]
      auto_actions: ["Set published_date", "Invalidate cache", "Notify subscribers"]
      
validation_rules:
  - rule: "Must have at least 1 image"
  - rule: "Price must be > 0"
  - rule: "SKU must be unique across all products"
  - rule: "SEO title recommended (warning if missing)"
  - rule: "Category required before publishing"
```

**Phase 4: Modular Content Architecture**

For complex pages (Homepage, Landing pages), use component-based modeling:

**Module/Component Pattern:**

```yaml
content_type: "Page"

fields:
  - field_id: "title"
    type: "Short text"
    required: true
    
  - field_id: "slug"
    type: "Short text"
    required: true
    unique: true
    pattern: "^[a-z0-9-]+$"
    
  - field_id: "content_modules"
    type: "Modular content (repeatable)"
    help_text: "Compose page from reusable modules"
    allowed_modules:
      - "Hero Banner"
      - "Feature Grid"
      - "Testimonial Carousel"
      - "CTA Section"
      - "Article Grid"
      - "Product Showcase"
      - "FAQ Accordion"
      - "Video Embed"

module_definitions:
  - module_name: "Hero Banner"
    fields:
      - "heading" (Short text, required)
      - "subheading" (Long text, optional)
      - "background_image" (Asset, required)
      - "cta_text" (Short text, optional)
      - "cta_link" (URL, optional)
      - "alignment" (Select: Left | Center | Right)
      
  - module_name: "Feature Grid"
    fields:
      - "section_title" (Short text, optional)
      - "features" (Repeatable):
          - "icon" (Asset)
          - "title" (Short text)
          - "description" (Long text)
          - "link" (URL, optional)
      - "columns" (Select: 2 | 3 | 4)
      
  - module_name: "Product Showcase"
    fields:
      - "section_title" (Short text, optional)
      - "products" (Reference multi → Product content type)
      - "layout" (Select: Grid | Carousel)
      - "show_price" (Boolean)
      - "show_add_to_cart" (Boolean)
```

This modular approach enables:
- **Reusability**: Same module on multiple pages
- **Flexibility**: Content editors compose pages without developers
- **Consistency**: Pre-built modules enforce design system
- **Scalability**: New modules added without restructuring entire CMS

### Content Relationships & Taxonomy

**Relationship Types:**

```yaml
relationship_patterns:
  one_to_one:
    example: "Product has one primary Category"
    implementation: "Reference field (single)"
    
  one_to_many:
    example: "Author writes many Articles"
    implementation: "Reference field (multi) on Article → Author"
    
  many_to_many:
    example: "Articles can have multiple Topics, Topics apply to multiple Articles"
    implementation: "Reference field (multi) bidirectional"
    
  hierarchical:
    example: "Categories have parent/child relationships"
    implementation: "Self-referencing (parent Category reference)"
    
  compositional:
    example: "Page is composed of Modules"
    implementation: "Modular content field with embedded components"
```

**Taxonomy Design:**

```yaml
taxonomy_architecture:
  controlled_vocabularies:
    - taxonomy_name: "Product Categories"
      structure: "Hierarchical (3 levels max)"
      example:
        - Electronics
          - Headphones
            - Over-Ear
            - In-Ear
            - Wireless
          - Speakers
            - Bluetooth
            - Smart Speakers
      governance: "Centralized (only admins can add)"
      
    - taxonomy_name: "Content Topics"
      structure: "Flat (tag cloud)"
      example: ["Technology", "Design", "Business", "Innovation"]
      governance: "Distributed (editors can add)"
      
  metadata_standards:
    - metadata_set: "SEO Metadata"
      fields:
        - "meta_title" (60 chars max)
        - "meta_description" (160 chars max)
        - "canonical_url"
        - "og_image"
        - "robots_directive"
        
    - metadata_set: "Accessibility Metadata"
      fields:
        - "alt_text" (for all images, required)
        - "aria_label" (for UI components)
        - "transcript" (for video/audio)
```

### Governance & Workflow Integration

**Content Lifecycle States:**

```yaml
content_statuses:
  draft:
    description: "Work in progress, not visible publicly"
    who_can_create: ["All content creators"]
    who_can_edit: ["Creator", "Editors"]
    auto_actions: ["Auto-save every 30 seconds"]
    
  in_review:
    description: "Submitted for editorial review"
    who_can_transition_here: ["Creator when ready"]
    who_can_edit: ["Assigned reviewer", "Content lead"]
    notifications: ["Notify assigned reviewer"]
    
  approved:
    description: "Reviewed and approved, ready to publish"
    who_can_transition_here: ["Editor", "Content lead"]
    who_can_edit: ["Content lead only"]
    auto_actions: ["Schedule publish date if specified"]
    
  published:
    description: "Live and publicly visible"
    who_can_transition_here: ["Publisher role"]
    who_can_edit: ["Content lead (creates new version)"]
    auto_actions: ["Invalidate CDN cache", "Submit to search index", "Trigger webhooks"]
    
  archived:
    description: "Removed from public view, kept for records"
    who_can_transition_here: ["Content lead", "Admin"]
    auto_actions: ["Set 301 redirect if URL existed", "Remove from search index"]
```

**Validation Rules:**

```yaml
validation_framework:
  required_field_validation:
    - "All required fields must be filled before publishing"
    - "Warning (not blocker) for recommended fields"
    
  relationship_validation:
    - "Referenced content must exist and be published"
    - "Circular references prevented (Article A can't reference Article B if B already references A)"
    
  business_rules:
    - "Products must have price > $0"
    - "Events must have future date before publishing"
    - "Authors must have bio and photo before first article published"
    
  accessibility_validation:
    - "All images must have alt text"
    - "Color contrast ratio meets WCAG AA standards"
    - "Video content has captions"
    
  seo_validation:
    - "Meta title 50-60 characters (warning if outside range)"
    - "Meta description 150-160 characters"
    - "URL slug follows pattern: lowercase, hyphens, no special chars"
    - "H1 heading exists and matches title (recommendation)"
```

---

## Output Schema

```yaml
content_model_architecture:
  content_types:
    - type_name: "Product"
      fields: "[List of fields with types, validation, help text]"
      relationships: "[Outbound and inbound references]"
      workflow: "[Status transitions and permissions]"
      
    - type_name: "Article"
      fields: "[...]"
      # Continue for all content types
      
  taxonomies:
    - taxonomy_name: "Categories"
      structure: "Hierarchical"
      depth: "3 levels"
      governance: "Centralized"
      
  modules:
    - module_name: "Hero Banner"
      fields: "[Component fields]"
      use_cases: "[Where used]"
      
  relationships:
    - "Product → Category (one-to-one)"
    - "Article → Author (many-to-one)"
    - "Article → Topics (many-to-many)"
    
  governance:
    workflow_states: ["Draft", "In Review", "Approved", "Published", "Archived"]
    roles: ["Content Creator", "Editor", "Publisher", "Admin"]
    validation_rules: "[List of validation rules]"
```

---

## Examples

### Example 1: E-Commerce (10K Products, Multi-Channel)

**Content Types**:
- Products (10,000 items)
- Categories (hierarchical, 500 categories)
- Reviews (user-generated, 50,000+)
- Articles (buying guides, 200)
- Authors (editorial team, 15)

**Key Relationships**:
- Products → Categories (required)
- Products → Related Products (optional, curated)
- Articles → Products (references for buying guides)
- Reviews → Products (one-to-many)

**Delivery Channels**:
- Website (Next.js)
- Mobile app (React Native)
- Email (product recommendations)
- Google Shopping (API feed)

**Results**: Single product content model delivers to all 4 channels, reducing content duplication 80%.

### Example 2: Media Publisher (100K Articles, API-First)

**Content Types**:
- Articles (news, features, opinion - 100,000+)
- Authors (journalists, 200)
- Topics (tags, 1,000)
- Live Blogs (breaking news, structured updates)

**Modular Article Structure**:
- Title, Subtitle, Byline, Publish Date
- Body (modular: Text blocks, Images, Embeds, Pull quotes, Data visualizations)
- Related Articles (algorithmic + manual)

**API-First Delivery**:
- Website
- Mobile apps (iOS, Android)
- Apple News / Google News
- Partner syndication
- Email newsletters

**Results**: Modular content enables rapid breaking news updates, syndication to 10+ partners via API.

### Example 3: SaaS Product Docs (1,000 Articles, Multi-Language)

**Content Types**:
- Documentation Articles (how-tos, references)
- Code Examples (reusable snippets)
- API Endpoints (auto-generated from OpenAPI spec)
- Changelogs (release notes)

**Localization**:
- English (primary)
- Spanish, French, German, Japanese (translations)
- Fallback logic (show English if translation missing)

**Results**: Structured content model + localization = 5 languages with 30% less effort than duplicating content.

---

## Success Metrics

- **Content Reuse**: 50%+ of content components reused across multiple contexts
- **Channel Efficiency**: Single content source delivers to 3+ channels
- **Content Quality**: 90%+ of published content passes validation on first submission
- **Editorial Velocity**: 30% faster content production due to structured templates
- **Developer Independence**: Content editors create new pages without developer involvement

---

## Best Practices

- **Start with Domains**: Identify business domains before jumping to field-level details
- **Favor Composition Over Inheritance**: Reusable modules > rigid page templates
- **Keep It Simple**: Start with 5-10 core content types, expand as needed
- **Validate with Real Content**: Test models with actual content, not lorem ipsum
- **Plan for Relationships**: Content is interconnected; model relationships explicitly
- **Embrace Constraints**: Validation rules improve content quality
- **Design for Reuse**: Ask "Where else might this content appear?" for every field

---

## Common Pitfalls

- **Over-Modeling**: Creating 100 content types when 10 would suffice
- **Under-Modeling**: Treating everything as "Page" with giant WYSIWYG field (loses structure)
- **Ignoring Relationships**: Duplicating content instead of referencing
- **Tight Coupling to Presentation**: Naming fields "homepage_hero_title" instead of "title" (limits reuse)
- **No Validation**: Allowing poor-quality content into CMS
- **Forgetting Governance**: Who can create/edit/publish? No defined workflow = chaos
- **Static Modeling**: Not planning for evolution (content models will change)

---

**License**: © 2025 Adedayo Agarau. Licensed under CC BY-SA 4.0.
**Maintainer**: Adedayo Agarau

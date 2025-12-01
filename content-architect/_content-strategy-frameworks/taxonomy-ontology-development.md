## Taxonomy & Ontology Development v1.0

**Purpose**: Design strategic classification systems, controlled vocabularies, and semantic frameworks that organize content for findability, enable faceted navigation, power search and filtering, and create scalable information architectures that grow with organizational complexity.

**Context**: Use this framework when building classification systems for content repositories, e-commerce catalogs, knowledge bases, or any large-scale content ecosystem where users need to discover information efficiently. Poor taxonomy results in unfindable content, inconsistent categorization, and user frustration. This system establishes principled approaches to category design, metadata schema development, and semantic relationship modeling. Ideal for content-heavy organizations, e-commerce with complex product catalogs, enterprises with knowledge management needs, or teams redesigning navigation and search systems.

**Strategic Frameworks Applied**:
- **Faceted Classification Theory** - Multi-dimensional categorization for flexible filtering
- **Controlled Vocabulary Management** - Standardized terminology with synonyms and hierarchies
- **Semantic Relationships** - Modeling connections between concepts (broader, narrower, related)
- **User-Centered Taxonomy Design** - Building classifications around user mental models, not internal org structure
- **Findability Heuristics** - Ensuring content is discoverable through multiple paths
- **Taxonomy Governance** - Processes for maintenance, growth, and quality control

---

## Variables

### Organizational Context Variables
- `{{organization_type}}`: E-commerce | Media/Publishing | Enterprise knowledge base | Academic | Government
- `{{content_volume}}`: 100s | 1,000s | 10,000s | 100,000s+ items to classify
- `{{content_diversity}}`: Homogeneous (single domain) | Moderate | Highly diverse (multiple domains)
- `{{user_base}}`: Internal employees | External customers | Both | Academic researchers | General public
- `{{findability_challenges}}`: Current pain points (Poor search results, Inconsistent tagging, Information silos)

### Classification Scope Variables
- `{{classification_domains}}`: Primary areas needing taxonomy (Products, Articles, People, Events, Policies, etc.)
- `{{taxonomy_depth}}`: Flat (single level) | Shallow (2-3 levels) | Deep (4+ levels)
- `{{taxonomy_breadth}}`: Narrow (10s of categories) | Medium (100s) | Wide (1,000s+)
- `{{multi_dimensional}}`: Single classification axis | Multiple facets (Category AND Type AND Audience, etc.)
- `{{relationship_complexity}}`: Simple hierarchies | Complex web of related terms | Formal ontology

### User & Use Case Variables
- `{{primary_use_cases}}`: Navigation | Search | Filtering | Content recommendations | Reporting/Analytics
- `{{user_mental_models}}`: How users think about content (by topic, by product type, by use case, by audience)
- `{{search_behavior}}`: Keyword search | Browse navigation | Faceted filters | Conversational queries
- `{{user_expertise}}`: Novice (need guidance) | Mixed | Expert (know specific terminology)

### Technical Variables
- `{{platform}}`: CMS, PIM, DAM, or knowledge management system used
- `{{taxonomy_format}}`: Simple tags | Hierarchical categories | Formal ontology (RDF/OWL) | Graph database
- `{{integration_needs}}`: Search engine | Navigation systems | Recommendation engines | Analytics platforms
- `{{multilingual}}`: Single language | Multi-language | Requires translation

### Governance Variables
- `{{taxonomy_ownership}}`: Centralized (single team) | Distributed (domain experts) | Hybrid
- `{{update_frequency}}`: Static (rarely changes) | Dynamic (frequent additions) | Real-time (user-generated tags)
- `{{quality_control}}`: Strict (controlled vocabulary) | Flexible (folksonomy) | Balanced
- `{{contributor_base}}`: Taxonomists only | Trained editors | All content creators | End users (tagging)

---

## Prompt

You are a taxonomy architect designing a comprehensive classification system for **{{organization_type}}** managing **{{content_volume}}** content items across **{{classification_domains}}**. Your task is to create a **{{taxonomy_depth}}** taxonomy with **{{multi_dimensional}}** classification dimensions that serves **{{user_base}}** for **{{primary_use_cases}}**, addresses **{{findability_challenges}}**, and implements **{{taxonomy_ownership}}** governance using **{{platform}}**.

### Taxonomy Design Methodology

**Phase 1: Research & Discovery**

**Content Analysis:**
```yaml
content_inventory:
  audit_existing_content:
    - "List all content types (products, articles, resources, etc.)"
    - "Sample 100-200 representative items"
    - "Document current categorization (if any)"
    - "Identify inconsistencies and gaps"
    
  pattern_identification:
    - "Group similar content into clusters"
    - "Identify natural categories emerging from content"
    - "Note synonyms (different terms for same concept)"
    - "Find outliers (content that doesn't fit existing patterns)"
```

**User Research:**
```yaml
user_mental_model_mapping:
  methods:
    - "Card sorting (open and closed)"
    - "Tree testing (validate proposed hierarchies)"
    - "Search log analysis (what do users actually search for?)"
    - "User interviews (how do they describe content?)"
    - "Competitive analysis (how do peers organize similar content?)"
    
  key_insights:
    - "What terminology do users use? (vs. internal jargon)"
    - "How do they expect content to be grouped?"
    - "What are their primary navigation patterns?"
    - "What are common findability failures?"
```

**Phase 2: Taxonomy Structure Design**

**Hierarchical Taxonomy Pattern:**

```yaml
hierarchical_taxonomy_example:
  domain: "E-commerce Product Taxonomy"
  
  level_1_primary_categories:
    - category: "Electronics"
      description: "Electronic devices and accessories"
      
      level_2_subcategories:
        - category: "Computers & Tablets"
          
          level_3_subcategories:
            - "Laptops"
            - "Desktop Computers"
            - "Tablets"
            - "Computer Accessories"
            
        - category: "Audio & Video"
          
          level_3_subcategories:
            - "Headphones & Earbuds"
            - "Speakers"
            - "Home Theater Systems"
            - "Streaming Devices"
            
        - category: "Cameras & Photography"
          # Continue pattern
          
    - category: "Home & Kitchen"
      # Continue pattern
      
  taxonomy_principles:
    - "3 levels max (Primary > Subcategory > Specific)"
    - "5-9 categories per level (cognitive load limit)"
    - "Mutually exclusive categories where possible"
    - "Terminology matches user language (not internal product codes)"
    - "Every item fits in ONE primary category (mandatory)"
```

**Faceted Classification Pattern:**

For complex domains, use multiple independent facets:

```yaml
faceted_taxonomy_example:
  domain: "Media/Publishing Articles"
  
  facet_1_content_type:
    label: "Content Type"
    values: ["News Article", "Feature Story", "Opinion/Editorial", "How-To Guide", "Product Review", "Interview", "Listicle"]
    cardinality: "Single (one type per article)"
    
  facet_2_topic:
    label: "Topic"
    values:
      - "Technology"
        - "Artificial Intelligence"
        - "Cybersecurity"
        - "Software Development"
        - "Hardware & Gadgets"
      - "Business"
        - "Entrepreneurship"
        - "Finance"
        - "Marketing"
      # Continue hierarchy
    cardinality: "Multi (article can have multiple topics)"
    
  facet_3_audience:
    label: "Target Audience"
    values: ["Beginner", "Intermediate", "Advanced", "Executive"]
    cardinality: "Single"
    
  facet_4_format:
    label: "Content Format"
    values: ["Text", "Video", "Audio (Podcast)", "Interactive", "Infographic"]
    cardinality: "Multi"
    
  facet_5_region:
    label: "Geographic Focus"
    values: ["Global", "North America", "Europe", "Asia-Pacific", "Latin America", "Middle East & Africa"]
    cardinality: "Multi"
    
  user_experience:
    navigation: "Browse by Topic hierarchy"
    filtering: "Filter by Content Type + Audience + Format + Region (faceted search)"
    example_query: "Show me Beginner-level Video How-To Guides about Artificial Intelligence"
```

**Controlled Vocabulary Management:**

```yaml
controlled_vocabulary_system:
  preferred_terms:
    - term: "Artificial Intelligence"
      definition: "Computer systems able to perform tasks normally requiring human intelligence"
      scope_note: "Use for: machine learning, deep learning, neural networks, AI applications"
      
  synonyms:
    - preferred_term: "Artificial Intelligence"
      synonyms: ["AI", "Machine Intelligence", "Cognitive Computing"]
      handling: "Auto-convert synonyms to preferred term on save"
      
  related_terms:
    - term: "Artificial Intelligence"
      broader_term: "Technology"
      narrower_terms: ["Machine Learning", "Natural Language Processing", "Computer Vision"]
      related_terms: ["Data Science", "Automation", "Robotics"]
      
  deprecated_terms:
    - term: "Cyber" (deprecated)
      use_instead: "Cybersecurity"
      reason: "Ambiguous; replaced with specific term"
      redirect: true
```

**Phase 3: Semantic Relationships (Ontology)**

For advanced use cases, model formal semantic relationships:

```yaml
ontology_framework:
  entity_types:
    - entity: "Person"
      properties: ["name", "role", "bio", "email"]
      
    - entity: "Organization"
      properties: ["name", "industry", "location", "founded_date"]
      
    - entity: "Article"
      properties: ["title", "publish_date", "content", "topics"]
      
    - entity: "Product"
      properties: ["name", "price", "description", "category"]
      
  relationships:
    - relationship: "Person WORKS_FOR Organization"
      cardinality: "Many persons to one organization"
      
    - relationship: "Person AUTHORED Article"
      cardinality: "One or more persons to many articles"
      
    - relationship: "Article MENTIONS Product"
      cardinality: "Many-to-many"
      
    - relationship: "Product BELONGS_TO Category"
      cardinality: "Many products to one category"
      
  use_cases:
    - "Knowledge graphs for recommendations"
    - "Semantic search (find articles by authors who work at tech companies)"
    - "Related content suggestions based on shared entities"
```

### Taxonomy Governance & Maintenance

**Governance Model:**

```yaml
taxonomy_governance:
  roles:
    - role: "Taxonomy Owner"
      responsibilities: ["Overall strategy", "Approve new top-level categories", "Quality standards"]
      people: "Content Strategist or Information Architect"
      
    - role: "Taxonomy Editors"
      responsibilities: ["Add/modify terms", "Manage synonyms", "Review proposals"]
      people: "Subject matter experts per domain"
      
    - role: "Content Contributors"
      responsibilities: ["Apply taxonomy to content", "Suggest new terms"]
      people: "All content creators"
      
  workflows:
    new_term_request:
      step_1: "Contributor suggests new term via form"
      step_2: "Taxonomy editor reviews for duplicates/synonyms"
      step_3: "If approved, editor adds to taxonomy with definition"
      step_4: "Notify requester"
      sla: "Respond within 5 business days"
      
    periodic_review:
      frequency: "Quarterly"
      activities:
        - "Review unused terms (candidates for deprecation)"
        - "Analyze search queries leading to no results (missing terms?)"
        - "Check for inconsistent application (content misclassified)"
        - "User feedback review"
        
  quality_metrics:
    - metric: "Coverage"
      definition: "% of content properly classified"
      target: "95%+"
      
    - metric: "Consistency"
      definition: "Inter-rater reliability (do two people classify same content identically?)"
      target: "85%+ agreement"
      
    - metric: "Findability"
      definition: "% of user searches returning relevant results"
      target: "80%+"
      
    - metric: "Orphan content"
      definition: "Content with no taxonomy applied"
      target: "<5%"
```

**Taxonomy Maintenance:**

```yaml
maintenance_activities:
  adding_terms:
    trigger: "Content doesn't fit existing categories"
    process: "Propose term → Review → Add to taxonomy → Notify contributors"
    
  merging_terms:
    trigger: "Two terms are redundant or overlapping"
    process: "Identify duplicates → Choose preferred term → Redirect deprecated term → Update content"
    
  splitting_terms:
    trigger: "Category too broad, users can't find content"
    process: "Identify overstuffed category → Create subcategories → Reclassify content"
    
  deprecating_terms:
    trigger: "Term no longer relevant or outdated"
    process: "Mark deprecated → Identify replacement term → Migrate content → Redirect"
    
  quality_audits:
    frequency: "Quarterly"
    sample_size: "5% of content"
    check_for:
      - "Miscategorized content"
      - "Missing required taxonomy"
      - "Overly specific tags (should use broader term)"
      - "Inconsistent application across similar content"
```

### Implementation & User Experience

**Navigation Design:**

```yaml
taxonomy_in_navigation:
  primary_navigation:
    type: "Hierarchical menu"
    depth: "2 levels (Primary > Subcategory)"
    interaction: "Mega menu showing subcategories on hover"
    example:
      - "Electronics"
        - "Computers & Tablets"
        - "Audio & Video"
        - "Cameras & Photography"
        
  breadcrumbs:
    format: "Home > Electronics > Computers & Tablets > Laptops"
    purpose: "Wayfinding + SEO"
    
  faceted_filters:
    location: "Left sidebar or top of search results"
    filters_shown:
      - "Category (hierarchical)"
      - "Price Range (slider)"
      - "Brand (multi-select)"
      - "Rating (multi-select)"
      - "Availability (In Stock, On Sale)"
    interaction: "Multi-select with live result count updates"
```

**Search Integration:**

```yaml
taxonomy_in_search:
  query_expansion:
    user_types: "AI"
    system_searches: ["AI", "Artificial Intelligence", "Machine Intelligence", "Machine Learning"] (synonyms)
    
  autocomplete:
    suggests: "Taxonomy terms as user types"
    example: "User types 'lap' → Suggests 'Laptops' (category)"
    
  faceted_search_results:
    default_view: "Grouped by Category"
    filters: "Apply taxonomy facets to narrow results"
    
  did_you_mean:
    trigger: "Zero results for user query"
    suggest: "Closest taxonomy term (fuzzy match)"
```

---

## Output Schema

```yaml
taxonomy_architecture:
  primary_taxonomy:
    name: "Product Categories"
    structure: "Hierarchical"
    depth: "3 levels"
    top_level_categories:
      - "Electronics"
      - "Home & Kitchen"
      - "Clothing & Accessories"
      # Continue
    total_terms: "500+"
    
  facets:
    - facet_name: "Content Type"
      values: ["List of values"]
      cardinality: "Single"
      
    - facet_name: "Topic"
      values: ["Hierarchical list"]
      cardinality: "Multi"
      
  controlled_vocabulary:
    preferred_terms: "300+ standardized terms"
    synonyms: "500+ mapped to preferred terms"
    deprecated_terms: "50+ with redirects"
    
  governance:
    ownership: "{{taxonomy_ownership}}"
    roles: ["Taxonomy Owner", "Editors", "Contributors"]
    workflows: ["New term requests", "Periodic reviews"]
    
  integration:
    navigation: "Hierarchical menu + breadcrumbs"
    search: "Synonym expansion + autocomplete"
    filtering: "Faceted filters on search results"
```

---

## Examples

### Example 1: E-Commerce (10K Products, Faceted Taxonomy)

**Hierarchical Product Categories**: 
- 3 levels deep (Electronics > Audio > Headphones)
- 200 categories total

**Facets**:
- Brand (50+ brands)
- Price Range (slider)
- Rating (1-5 stars)
- Features (Wireless, Noise-Canceling, etc.)

**Results**: Findability improved 60%, users find products 40% faster.

### Example 2: Knowledge Base (5K Articles, Topic Taxonomy)

**Hierarchical Topics**:
- Technology > AI > Machine Learning > Deep Learning

**Metadata Facets**:
- Article Type (Tutorial, Reference, Troubleshooting)
- Difficulty (Beginner, Intermediate, Advanced)
- Product Version (v1.0, v2.0, v3.0)

**Results**: Support ticket deflection increased 35% (better self-service).

---

## Success Metrics

- **Findability**: 80%+ of searches return relevant results
- **Coverage**: 95%+ of content properly classified
- **Consistency**: 85%+ inter-rater reliability
- **User Satisfaction**: 4.0+ rating on "I can find what I need"
- **Efficiency**: 30% reduction in time-to-find vs. pre-taxonomy

---

## Best Practices

- **User-Centered**: Build taxonomy around user mental models, not internal org chart
- **Shallow & Broad**: Prefer 3 levels with many options over 7 levels with few
- **Test Early**: Card sorting and tree testing with real users
- **Embrace Facets**: Multiple classification dimensions > forcing into single hierarchy
- **Controlled Vocabulary**: Standardize terms, manage synonyms
- **Plan for Growth**: Taxonomy will evolve; build governance for maintenance
- **Measure Findability**: Track search success, not just taxonomy completeness

---

## Common Pitfalls

- **Too Deep**: 5+ level hierarchies confuse users
- **Internal Jargon**: Using company terminology users don't understand
- **Overlapping Categories**: Non-exclusive categories (content fits in multiple places)
- **No Governance**: Taxonomy degrades without maintenance
- **Ignoring Synonyms**: Users search for "laptop" but taxonomy says "notebook computer"
- **Tag Soup**: Letting users add unlimited tags without controlled vocabulary
- **Static Taxonomy**: Not evolving as business/content changes

---

**License**: © 2025 Adedayo Agarau. Licensed under CC BY-SA 4.0.
**Maintainer**: Adedayo Agarau

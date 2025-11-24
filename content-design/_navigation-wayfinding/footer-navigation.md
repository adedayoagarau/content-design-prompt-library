## Footer Navigation Design v1.0

**Purpose**: Create comprehensive, well-organized footer navigation that provides secondary navigation paths, essential links, legal information, and contextual resources while supporting site-wide wayfinding and conversion goals.

---

**PROMPT:**

You are designing footer navigation for {{site_type}} serving {{target_audience}}. Create a footer navigation structure that provides comprehensive site access, supports {{business_goal}}, and includes essential information while maintaining scannability and {{brand_voice}}.

=== FOOTER CONTEXT ===
Site type: {{site_type}} (e-commerce/SaaS/content/enterprise/multi-brand)
Target audience: {{target_audience}} (B2B/B2C/mixed/specialized)
Footer complexity: {{footer_complexity}} (simple/standard/mega-footer)
Footer purpose: {{footer_purpose}} (navigation/legal/conversion/comprehensive)
Page type: {{page_type}} (all pages/homepage only/contextual variations)
Footer sections: {{section_count}} (number of column groupings)

=== CONTENT REQUIREMENTS ===
Required elements: {{required_elements}} (site map/legal/contact/social/newsletter)
Navigation depth: {{nav_depth}} (top-level only/two-level hierarchy)
Legal links: {{legal_links}} (privacy/terms/accessibility/cookies/compliance)
Contact methods: {{contact_methods}} (phone/email/chat/form/address)
Social platforms: {{social_platforms}} (which platforms to include)
Conversion elements: {{conversion_cta}} (newsletter/demo/download)

=== FOOTER STRUCTURE ===

**Footer Types**:
- **Minimal Footer**: Logo, copyright, 3-5 essential links
- **Standard Footer**: 3-4 columns with grouped links, legal, contact
- **Mega Footer**: 5-8 columns, comprehensive site map, multiple CTAs
- **Contextual Footer**: Adapts based on page type or user state

Current implementation: {{footer_type}}

**Column Organization Patterns**:
- **Functional grouping**: Products, Company, Resources, Support
- **Audience-based**: For Customers, For Partners, For Developers
- **Journey stage**: Learn, Try, Buy, Support
- **Content type**: Tools, Guides, News, Events

Recommended pattern: {{grouping_pattern}}

=== OUTPUT REQUIREMENTS ===

```yaml
footer_navigation:
  structure:
    layout: "column layout description"
    total_columns: number
    mobile_treatment: "accordion/stacked/tabs"

    columns:
      - heading: "string (column header)"
        heading_rationale: "why this grouping"
        links:
          - label: "string"
            destination: "page type/URL pattern"
            priority: "essential/important/nice-to-have"
            character_count: number

      - heading: "string"
        links: []

  link_categories:
    navigation_links:
      purpose: "duplicate primary nav or unique footer paths"
      examples: ["Products", "Solutions", "Pricing"]

    utility_links:
      purpose: "account, settings, preferences"
      examples: ["My Account", "Order Status", "Wishlist"]
      placement: "top of footer/separate utility bar"

    legal_compliance:
      required_links: ["Privacy Policy", "Terms of Service"]
      optional_links: ["Accessibility Statement", "Cookie Preferences", "Do Not Sell My Info"]
      placement: "bottom row, small text"
      legal_review: "required before publication"

    support_resources:
      examples: ["Help Center", "Contact Us", "FAQs", "System Status"]
      priority: "high - common user needs"

    company_information:
      examples: ["About Us", "Careers", "Press", "Investors"]
      audience: "stakeholders and researchers"

  conversion_elements:
    newsletter_signup:
      heading: "string (e.g., 'Stay Updated')"
      description: "value proposition for subscribing"
      input_placeholder: "Email address"
      button_label: "Subscribe/Sign Up/Join"
      privacy_note: "We respect your privacy. Unsubscribe anytime."

    primary_cta:
      placement: "top of footer/dedicated column"
      examples: ["Start Free Trial", "Get Demo", "Download App"]
      visibility: "conditional based on user state"

    app_downloads:
      platforms: ["iOS", "Android"]
      badge_style: "official store badges vs. custom buttons"

  contact_information:
    display_strategy: "full contact block/link to contact page/both"

    elements:
      phone:
        display: "1-800-XXX-XXXX"
        format: "clickable tel: link on mobile"
        hours: "Available Monday-Friday, 9am-5pm EST"

      email:
        display: "support@example.com"
        format: "clickable mailto: link"

      address:
        display: "physical address if relevant"
        use_cases: "retail locations, B2B trust signal"
        schema_markup: "structured data for location"

      live_chat:
        label: "Chat with us"
        availability: "24/7/business hours/offline message"

  social_media:
    platforms: ["Facebook", "Twitter", "LinkedIn", "Instagram", "YouTube"]
    display_format: "icons only/icons with labels/text links"
    icon_size: "24x24px minimum for accessibility"
    aria_labels: "Visit us on [Platform Name]"
    link_behavior: "open in new tab with rel='noopener noreferrer'"
    order_strategy: "by importance/alphabetical/by follower count"

  branding_elements:
    logo:
      display: "full logo/simplified/text only"
      link_destination: "homepage"
      size: "appropriate scale for footer context"

    tagline:
      include: true/false
      example: "Empowering businesses through technology"

    copyright:
      format: "© 2025 Company Name. All rights reserved."
      dynamic_year: "auto-update via JavaScript or server-side"

    trust_badges:
      examples: ["SOC 2 Certified", "GDPR Compliant", "Award Winner"]
      placement: "near legal links or in dedicated section"

  accessibility_implementation:
    semantic_structure:
      element: "<footer role='contentinfo'>"
      navigation_landmarks: "each column group as <nav> with aria-label"
      heading_hierarchy: "footer headings as <h2> or <h3> based on page structure"

    keyboard_navigation:
      tab_order: "logical top-to-bottom, left-to-right"
      skip_link: "skip to footer for keyboard users"
      focus_indicators: "visible 2px outline, 3:1 contrast"

    screen_reader_support:
      footer_label: "Site footer navigation"
      column_labels: "descriptive aria-labels for each nav group"
      link_context: "ensure links make sense out of context"

    visual_accessibility:
      contrast_ratio: "4.5:1 minimum for text on background"
      link_distinction: "underline or other non-color indicator"
      touch_targets: "44x44px minimum spacing on mobile"

  mobile_optimization:
    accordion_pattern:
      default_state: "all collapsed"
      interaction: "tap heading to expand section"
      indicator: "chevron/plus icon shows expand/collapse state"
      aria_expanded: "true/false for screen readers"

    stacked_pattern:
      layout: "single column, all links visible"
      section_spacing: "clear visual separation"
      scroll_length: "acceptable for comprehensive footers"

    priority_content:
      always_visible: "contact, legal, copyright"
      collapsible: "secondary navigation links"

    newsletter_placement:
      mobile_position: "top of footer before links"
      rationale: "higher visibility for conversion element"

  localization_considerations:
    multi_language:
      language_selector: "placement in footer vs. header"
      translated_links: "all footer content in user's language"
      regional_links: "country-specific policies, contact info"

    multi_region:
      region_selector: "country/region dropdown"
      regional_variations: "different legal requirements by jurisdiction"
      currency_preference: "linked to region selection"

  analytics_tracking:
    link_tracking:
      event: "footer_link_click"
      properties: ["link_label", "link_category", "destination_url"]

    engagement_metrics:
      newsletter_signup_rate: "conversions / footer views"
      social_click_through: "social link clicks by platform"
      column_popularity: "which sections get most engagement"

    insights:
      - metric: "footer_navigation_usage"
        question: "do users find footer helpful for navigation?"
      - metric: "mobile_accordion_interactions"
        question: "which sections do mobile users expand most?"

  special_contexts:
    logged_in_users:
      modifications: "show account links, hide signup CTAs"
      personalization: "recent pages, saved items"

    error_pages:
      footer_display: "full footer to aid recovery"
      emphasis: "home link, search, contact support"

    checkout_flow:
      minimal_footer: "reduce distractions, keep legal links"
      trust_signals: "security badges, contact support"

    landing_pages:
      focused_footer: "align with page goal, minimal navigation"
      conversion_priority: "emphasize CTA over exploration"
```

=== FOOTER LABEL BEST PRACTICES ===

**Column Heading Guidelines**:
- Use clear, descriptive headings (not decorative)
- Keep headings short: 1-3 words ideal
- Use parallel structure across headings
- Examples:
  - ✓ "Products", "Company", "Resources", "Support"
  - ✗ "What We Offer", "About", "Learn More", "Get Help"

**Link Label Clarity**:
- Be specific and descriptive
- Avoid generic "Learn More" or "Click Here"
- Match destination page titles
- Front-load keywords
- Examples:
  - ✓ "Return Policy", "Track Order", "Help Center"
  - ✗ "More Info", "Click Here", "Go"

**Legal Link Standards**:
- Use standard, recognizable terminology
- Required links: "Privacy Policy", "Terms of Service"
- Optional: "Cookie Policy", "Accessibility", "California Privacy Rights"
- Keep exact phrasing for user recognition

**Contact Link Patterns**:
- "Contact Us" or "Contact Support" (standard)
- "Get Help" or "Help Center" (support resources)
- "Sales: 1-800-XXX-XXXX" (direct phone with context)
- "Chat with Us" (live support availability)

=== EXAMPLES ===

**Example 1: B2B SaaS Platform**
- site_type: "B2B SaaS"
- target_audience: "enterprise IT decision-makers"
- footer_complexity: "standard"
- footer_purpose: "comprehensive navigation + conversion"
- section_count: "4 columns + newsletter signup"
- brand_voice: "professional and trustworthy"

**Output**:
```yaml
footer_navigation:
  structure:
    layout: "4 columns + newsletter sidebar"
    total_columns: 5
    mobile_treatment: "accordion with newsletter always visible"

    columns:
      - heading: "Platform"
        heading_rationale: "Mirrors main nav, product-focused"
        links:
          - label: "Features"
            destination: "/features"
            priority: "essential"
            character_count: 8
          - label: "Integrations"
            destination: "/integrations"
            priority: "important"
            character_count: 12
          - label: "Security"
            destination: "/security"
            priority: "essential"
            character_count: 8
          - label: "Pricing"
            destination: "/pricing"
            priority: "essential"
            character_count: 7
          - label: "Product Updates"
            destination: "/changelog"
            priority: "nice-to-have"
            character_count: 15

      - heading: "Solutions"
        heading_rationale: "Use case organization for different buyer personas"
        links:
          - label: "For IT Teams"
            destination: "/solutions/it"
            priority: "important"
            character_count: 12
          - label: "For Security"
            destination: "/solutions/security"
            priority: "important"
            character_count: 12
          - label: "For Compliance"
            destination: "/solutions/compliance"
            priority: "important"
            character_count: 14
          - label: "Case Studies"
            destination: "/customers"
            priority: "important"
            character_count: 12

      - heading: "Resources"
        heading_rationale: "Educational content hub"
        links:
          - label: "Documentation"
            destination: "/docs"
            priority: "essential"
            character_count: 13
          - label: "API Reference"
            destination: "/api"
            priority: "important"
            character_count: 13
          - label: "Blog"
            destination: "/blog"
            priority: "nice-to-have"
            character_count: 4
          - label: "Webinars"
            destination: "/webinars"
            priority: "nice-to-have"
            character_count: 8
          - label: "Community"
            destination: "/community"
            priority: "nice-to-have"
            character_count: 9

      - heading: "Company"
        heading_rationale: "Standard corporate information"
        links:
          - label: "About Us"
            destination: "/about"
            priority: "important"
            character_count: 8
          - label: "Careers"
            destination: "/careers"
            priority: "important"
            character_count: 7
          - label: "Press"
            destination: "/press"
            priority: "nice-to-have"
            character_count: 5
          - label: "Contact Sales"
            destination: "/contact"
            priority: "essential"
            character_count: 13

      - heading: "Subscribe to Updates"
        heading_rationale: "Newsletter signup for product updates"
        content_type: "newsletter signup form"

  conversion_elements:
    newsletter_signup:
      heading: "Subscribe to Updates"
      description: "Get the latest product news and best practices delivered monthly."
      input_placeholder: "Work email address"
      button_label: "Subscribe"
      privacy_note: "We respect your privacy. Unsubscribe anytime."

  legal_compliance:
    required_links: ["Privacy Policy", "Terms of Service", "Security"]
    optional_links: ["Cookie Preferences", "Accessibility", "Trust Center"]
    placement: "bottom row below main footer, separated by pipes"
    format: "Privacy Policy | Terms of Service | Cookie Preferences | Accessibility"

  branding_elements:
    copyright:
      format: "© 2025 TechCorp. All rights reserved."
      placement: "bottom left, same row as legal links"
```

**Example 2: E-commerce Retailer**
- site_type: "e-commerce fashion"
- target_audience: "general consumers, mobile-first"
- footer_complexity: "mega-footer"
- footer_purpose: "comprehensive site navigation + customer service"
- section_count: "6 columns"
- brand_voice: "friendly and helpful"

**Output**:
```yaml
footer_navigation:
  structure:
    layout: "6 columns desktop, accordion on mobile"
    total_columns: 6
    mobile_treatment: "accordion with newsletter and social always visible"

    columns:
      - heading: "Shop"
        links:
          - label: "Women"
            destination: "/women"
            priority: "essential"
          - label: "Men"
            destination: "/men"
            priority: "essential"
          - label: "Kids"
            destination: "/kids"
            priority: "essential"
          - label: "Sale"
            destination: "/sale"
            priority: "essential"
          - label: "New Arrivals"
            destination: "/new"
            priority: "important"
          - label: "Gift Cards"
            destination: "/gift-cards"
            priority: "important"

      - heading: "Customer Service"
        links:
          - label: "Contact Us"
            destination: "/contact"
            priority: "essential"
          - label: "Shipping Info"
            destination: "/shipping"
            priority: "essential"
          - label: "Returns & Exchanges"
            destination: "/returns"
            priority: "essential"
          - label: "Track Order"
            destination: "/track"
            priority: "essential"
          - label: "Size Guide"
            destination: "/size-guide"
            priority: "important"
          - label: "FAQs"
            destination: "/faq"
            priority: "important"

      - heading: "About"
        links:
          - label: "Our Story"
            destination: "/about"
            priority: "nice-to-have"
          - label: "Sustainability"
            destination: "/sustainability"
            priority: "important"
          - label: "Careers"
            destination: "/careers"
            priority: "nice-to-have"
          - label: "Press"
            destination: "/press"
            priority: "nice-to-have"
          - label: "Store Locations"
            destination: "/stores"
            priority: "important"

      - heading: "My Account"
        links:
          - label: "Sign In"
            destination: "/login"
            priority: "essential"
          - label: "Order History"
            destination: "/orders"
            priority: "essential"
          - label: "Wishlist"
            destination: "/wishlist"
            priority: "important"
          - label: "Account Settings"
            destination: "/account"
            priority: "important"

  conversion_elements:
    newsletter_signup:
      heading: "Join Our Community"
      description: "Get 15% off your first order plus exclusive deals and style inspiration."
      input_placeholder: "Enter your email"
      button_label: "Sign Up"
      privacy_note: "By signing up, you agree to receive marketing emails."

    app_downloads:
      platforms: ["iOS", "Android"]
      badge_style: "official App Store and Google Play badges"
      placement: "below newsletter signup"

  social_media:
    platforms: ["Instagram", "Facebook", "Pinterest", "TikTok", "Twitter"]
    display_format: "icons with labels"
    order_strategy: "by platform popularity for target audience"
    heading: "Follow Us"

  contact_information:
    display_strategy: "link to contact page + phone number"
    elements:
      phone:
        display: "Customer Service: 1-800-FASHION"
        format: "clickable tel: link"
        hours: "Available 7 days a week, 8am-10pm EST"

  mobile_optimization:
    accordion_pattern:
      default_state: "all collapsed except newsletter"
      interaction: "tap heading to expand"
      indicator: "+ / - icons"
    priority_content:
      always_visible: ["newsletter signup", "social media", "legal links", "copyright"]
```

**Example 3: Healthcare Provider**
- site_type: "healthcare/hospital network"
- target_audience: "patients, caregivers, healthcare seekers"
- footer_complexity: "standard"
- footer_purpose: "patient services + compliance"
- section_count: "4 columns"
- brand_voice: "compassionate and trustworthy"

**Output**:
```yaml
footer_navigation:
  structure:
    layout: "4 equal columns"
    total_columns: 4
    mobile_treatment: "stacked (all visible) for accessibility"

    columns:
      - heading: "Patients & Visitors"
        heading_rationale: "Primary user group needs"
        links:
          - label: "Find a Doctor"
            destination: "/find-doctor"
            priority: "essential"
            character_count: 13
          - label: "Locations & Hours"
            destination: "/locations"
            priority: "essential"
            character_count: 17
          - label: "Book Appointment"
            destination: "/appointments"
            priority: "essential"
            character_count: 16
          - label: "Patient Portal"
            destination: "/portal"
            priority: "essential"
            character_count: 14
          - label: "Visitor Information"
            destination: "/visiting"
            priority: "important"
            character_count: 19
          - label: "Accepted Insurance"
            destination: "/insurance"
            priority: "important"
            character_count: 18

      - heading: "Services & Treatments"
        links:
          - label: "Emergency Care"
            priority: "essential"
          - label: "Primary Care"
            priority: "essential"
          - label: "Specialty Care"
            priority: "important"
          - label: "Urgent Care"
            priority: "important"
          - label: "Lab & Imaging"
            priority: "important"

      - heading: "Health Resources"
        links:
          - label: "Health Library"
            priority: "important"
          - label: "Classes & Events"
            priority: "nice-to-have"
          - label: "Support Groups"
            priority: "important"
          - label: "Health Blog"
            priority: "nice-to-have"

      - heading: "About Us"
        links:
          - label: "Our Mission"
            priority: "nice-to-have"
          - label: "Quality & Safety"
            priority: "important"
          - label: "Careers"
            priority: "important"
          - label: "News & Media"
            priority: "nice-to-have"
          - label: "Contact Us"
            priority: "essential"

  contact_information:
    display_strategy: "prominent contact block above footer columns"
    elements:
      phone:
        display: "24/7 Nurse Line: 1-800-XXX-XXXX"
        format: "large, clickable, prominent"
      emergency:
        display: "In an emergency, call 911"
        styling: "red background, high visibility"

  legal_compliance:
    required_links: ["Privacy Policy", "Terms of Use", "Non-Discrimination Policy", "Patient Rights", "Notice of Privacy Practices (HIPAA)"]
    placement: "dedicated row, clearly labeled"
    legal_review: "annual review required for healthcare compliance"

  accessibility_implementation:
    mobile_optimization:
      stacked_pattern:
        rationale: "No accordions for critical healthcare information - all links immediately visible"
        scroll_length: "acceptable trade-off for accessibility"

  branding_elements:
    trust_badges:
      examples: ["Joint Commission Accredited", "Magnet Hospital", "Top 100 Hospital"]
      placement: "above footer columns, prominent display"
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Use semantic footer element with role="contentinfo". Structure navigation groups as nav elements with descriptive aria-labels (e.g., "Products navigation", "Company information"). Ensure keyboard navigation flows logically through columns. Provide visible focus indicators (minimum 2px outline, 3:1 contrast). Maintain 4.5:1 color contrast for text and links against background. Make all links distinguishable without relying on color alone (underline or other indicator). Ensure touch targets are minimum 44x44px on mobile. Use appropriate heading hierarchy for column headers. For accordion footers on mobile, include aria-expanded states and ensure toggle buttons are keyboard accessible. Provide text alternatives for social media icons.

**Psychological Principles**: Information scent (organized groupings help users predict link destinations). Recognition over recall (comprehensive footer reduces need to remember site structure). Satisficing (users scan footer as "plan B" when primary navigation fails). Serial position effect (place important links first in each column and important columns leftmost). Gestalt proximity (visually group related links under clear headings). Progressive disclosure (accordion on mobile reveals content on demand). Cognitive fluency (clear organization reduces mental effort). Social proof (social media links, trust badges increase credibility). Paradox of choice (organize into categories to reduce overwhelm from many links). Zeigarnik effect (newsletter signup creates commitment loop).

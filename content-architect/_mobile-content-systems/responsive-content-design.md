## Responsive Content Design v1.0

**Purpose**: Design adaptive content systems that deliver optimal experiences across devices, screen sizes, and contexts through strategic content hierarchy, progressive disclosure, viewport-aware layouts, performance optimization, and context-sensitive presentation that ensures content usability and engagement from mobile phones to desktop monitors and emerging form factors.

**Context**: Use this framework when designing content for multi-device experiences where a single content source must adapt to phones, tablets, desktops, watches, TVs, and emerging interfaces. Most organizations treat responsive design as purely visual layout problem, ignoring content-specific challenges like reading patterns, interaction models, information density, and performance constraints across devices. This system establishes content prioritization frameworks, adaptive content patterns, performance budgets, touch-optimized interactions, and device-aware personalization that transform responsive design from "make it fit" to "optimize for context." Ideal for websites serving mobile-first audiences, SaaS products accessed across devices, content publishers optimizing readability, e-commerce optimizing conversions, or platform teams building design systems.

**Strategic Frameworks Applied**:
- **Mobile-First Content Strategy** - Start with constraints, progressively enhance
- **Progressive Enhancement** - Core content works everywhere, enhancements layer on
- **Content Priority Modeling** - Explicit hierarchy for different viewports
- **Performance Budget Framework** - Speed as content design constraint
- **Adaptive Content Patterns** - Same content, optimized presentation per device
- **Touch-First Interaction Design** - Design for fingers, not cursors

---

## Variables

### Device & Viewport Variables
- `{{primary_device}}`: Mobile-first | Desktop-first | Balanced (mobile + desktop)
- `{{viewport_range}}`: Mobile only (320-600px) | Mobile + Tablet (320-1024px) | Full range (320-1920px+)
- `{{device_capabilities}}`: Basic phones | Modern smartphones | Tablets | Desktops | All devices
- `{{emerging_form_factors}}`: None | Wearables | Foldables | TVs | AR/VR
- `{{touch_capability}}`: Touch-only | Mouse-only | Hybrid (touch + mouse)

### Content Complexity Variables
- `{{content_density}}`: Minimal (headlines, snippets) | Moderate | Dense (articles, data tables)
- `{{media_richness}}`: Text-only | Text + images | Multimedia (video, interactive)
- `{{interaction_complexity}}`: Read-only | Simple forms | Complex workflows | Data visualization
- `{{navigation_depth}}`: Shallow (1-2 levels) | Moderate (3-5) | Deep (5+ levels)
- `{{content_volume_per_page}}`: Light (<500 words) | Moderate (500-2K) | Heavy (2K+)

### Performance Context Variables
- `{{network_conditions}}`: Wi-Fi only | 4G/5G | 3G | 2G (emerging markets)
- `{{performance_priority}}`: Best effort | Important | Critical (SEO, conversion dependent)
- `{{data_cost_sensitivity}}`: Low (unlimited data) | Moderate | High (metered connections)
- `{{page_load_target}}`: <1 second | <3 seconds | <5 seconds
- `{{bundle_size_budget}}`: <100KB | <300KB | <500KB | >500KB

### Business Context Variables
- `{{primary_goal}}`: Information consumption | E-commerce conversion | Tool usage | Content creation
- `{{audience_device_split}}`: 80% mobile | 60/40 mobile/desktop | 50/50 | Desktop-heavy
- `{{user_behavior}}`: Quick tasks | Extended sessions | Mixed | Context-switching
- `{{competitive_benchmark}}`: Industry standard | Leading | Best-in-class
- `{{accessibility_requirements}}`: Basic | WCAG AA | WCAG AAA | Advanced

### Technical Infrastructure Variables
- `{{rendering_approach}}`: Client-side (SPA) | Server-side (SSR) | Static (SSG) | Hybrid
- `{{framework}}`: React | Vue | Angular | Vanilla JS | No JS
- `{{responsive_strategy}}`: Fluid grid | Breakpoint-based | Container queries | Hybrid
- `{{image_optimization}}`: Basic | Responsive images | Modern formats (WebP, AVIF) | Advanced (lazy load, blur-up)
- `{{cdn_availability}}`: No CDN | Basic CDN | Global CDN | Edge computing

---

## Prompt

You are a responsive content designer architecting adaptive content system for **{{primary_goal}}** experience serving **{{audience_device_split}}** audience across **{{viewport_range}}** with **{{content_density}}** content complexity. Your task is to design responsive content framework that optimizes for **{{primary_device}}**, manages **{{media_richness}}**, achieves **{{page_load_target}}** performance on **{{network_conditions}}**, ensures **{{accessibility_requirements}}** accessibility, using **{{rendering_approach}}** rendering and **{{responsive_strategy}}** responsive strategy for **{{device_capabilities}}** devices.

### Responsive Content Design Architecture

**Phase 1: Content Hierarchy & Priority Modeling**

Define content importance and viewport-specific presentation:

```yaml
content_priority_framework:
  priority_levels:
    p0_essential:
      definition: "Content that must appear on all devices, all viewports"
      characteristics:
        - "Core value proposition (why user is here)"
        - "Primary call-to-action"
        - "Key navigation"
        - "Critical information (product details, article body)"

      examples:
        e_commerce_product_page:
          - "Product image (primary)"
          - "Product name and price"
          - "Add to cart button"
          - "Key product details (size, color, availability)"

        article_page:
          - "Article headline"
          - "Article body text"
          - "Author and publish date"
          - "Primary image"

        saas_dashboard:
          - "Navigation (menu)"
          - "Primary data visualization"
          - "Key metrics"
          - "Primary actions (create, edit)"

      mobile_presentation: "Full visibility, prominent placement"
      tablet_presentation: "Full visibility, optimized layout"
      desktop_presentation: "Full visibility, enhanced layout"

    p1_important:
      definition: "Important content, shown on most viewports (may be collapsed/hidden on smallest)"
      characteristics:
        - "Supporting information"
        - "Secondary actions"
        - "Related content"
        - "Detailed specifications"

      examples:
        e_commerce_product_page:
          - "Product description (full text)"
          - "Customer reviews"
          - "Specifications table"
          - "Related products"

        article_page:
          - "Table of contents (long articles)"
          - "Related articles"
          - "Social sharing buttons"
          - "Author bio"

      mobile_presentation: "Below fold or progressive disclosure (expand/collapse)"
      tablet_presentation: "Visible, secondary hierarchy"
      desktop_presentation: "Visible, sidebar or secondary column"

    p2_supplementary:
      definition: "Nice-to-have content, often hidden on mobile, visible on larger screens"
      characteristics:
        - "Tertiary navigation (footer links)"
        - "Marketing messages"
        - "Non-critical features"
        - "Decorative elements"

      examples:
        e_commerce_product_page:
          - "Detailed shipping info (link to page)"
          - "Trust badges"
          - "Recently viewed items"

        article_page:
          - "Newsletter signup (inline)"
          - "Author's other articles"
          - "Sidebar ads"

      mobile_presentation: "Hidden or footer placement"
      tablet_presentation: "Conditional visibility (context-dependent)"
      desktop_presentation: "Visible, tertiary hierarchy"

    p3_optional:
      definition: "Desktop-only enhancements, not critical to experience"
      characteristics:
        - "Hover effects and tooltips"
        - "Sidebar widgets"
        - "Non-essential imagery"
        - "Advanced features (power users)"

      examples:
        - "Hover previews (link previews on hover)"
        - "Sticky navigation (always-visible nav bar)"
        - "Background decorative elements"

      mobile_presentation: "Not present (or alternative for touch)"
      tablet_presentation: "Conditional (some features)"
      desktop_presentation: "Visible, enhancement"

  progressive_disclosure_patterns:
    accordion_expand_collapse:
      use_case: "Long content sections (FAQs, specs, descriptions)"
      mobile: "Collapsed by default, tap to expand"
      desktop: "Expanded by default or horizontal layout"

      example:
        - mobile: "Tap 'Product Details' to expand description"
        - desktop: "Product details visible in sidebar"

    show_more_less:
      use_case: "Long lists or content previews"
      mobile: "Show 3 items, 'Show more' button"
      desktop: "Show all items (if reasonable) or paginate"

      example:
        - mobile: "Show 3 reviews, 'Show 15 more reviews' button"
        - desktop: "Show 10 reviews, pagination"

    tabs_vs_stacked:
      use_case: "Multiple content sections (product info, reviews, specs)"
      mobile: "Tabs (horizontal swipe or tap)"
      desktop: "All sections visible (stacked) or tabs with more space"

      example:
        - mobile: "Tab navigation: Info | Reviews | Specs"
        - desktop: "All sections visible on single page"

    modal_vs_inline:
      use_case: "Forms, secondary actions, detailed views"
      mobile: "Modal (full-screen overlay)"
      desktop: "Inline or sidebar panel"

      example:
        - mobile: "Filter products → full-screen modal"
        - desktop: "Filter products → sidebar panel"
```

**Phase 2: Viewport Breakpoints & Adaptive Layouts**

Define responsive behavior across device sizes:

```yaml
breakpoint_strategy:
  breakpoint_definitions:
    mobile_small:
      range: "320px - 480px"
      description: "Small phones (iPhone SE, Android compact)"
      layout: "Single column, stacked content"
      font_size: "16px base (minimum for readability)"
      touch_targets: "44px minimum (Apple HIG)"
      content_strategy: "Essential content only, progressive disclosure"

    mobile_large:
      range: "481px - 768px"
      description: "Large phones (iPhone Pro Max, Android phablets)"
      layout: "Single column, slightly more density"
      font_size: "16-18px base"
      touch_targets: "44-48px"
      content_strategy: "Essential + important content visible"

    tablet:
      range: "769px - 1024px"
      description: "Tablets (iPad, Android tablets)"
      layout: "2-column layout where appropriate, more horizontal space"
      font_size: "18-20px base"
      touch_targets: "44-48px (still touch-first)"
      content_strategy: "Essential + important + some supplementary"

    desktop_small:
      range: "1025px - 1440px"
      description: "Laptops, small desktop monitors"
      layout: "Multi-column layout, sidebars, horizontal navigation"
      font_size: "16-18px base"
      interaction: "Mouse + keyboard optimized"
      content_strategy: "All priority content visible, enhanced features"

    desktop_large:
      range: "1441px+"
      description: "Large monitors, ultra-wide displays"
      layout: "Wide layouts, max-width containers (prevent excessive line length)"
      font_size: "18-20px base"
      content_strategy: "Full experience + optional enhancements"

  responsive_layout_patterns:
    single_column_to_multi_column:
      mobile: "Single column (stack everything vertically)"
      tablet: "2-column (main content + sidebar)"
      desktop: "3-column (sidebar + main + sidebar) or 2-column with wider margins"

      example:
        mobile: |
          [Header]
          [Main Content]
          [Sidebar Content]
          [Footer]

        desktop: |
          [Header]
          [Sidebar] [Main Content] [Sidebar]
          [Footer]

    hamburger_to_horizontal_nav:
      mobile: "Hamburger menu (☰ icon, slide-out drawer)"
      tablet: "Hybrid (some nav visible, some in menu)"
      desktop: "Full horizontal navigation bar"

      example:
        mobile: "Tap ☰ → Menu slides in"
        desktop: "Home | Products | About | Contact (all visible)"

    card_grid_responsive:
      mobile: "1 column (cards stacked)"
      tablet: "2 columns"
      desktop: "3-4 columns"

      example:
        mobile: "Product cards: 1 per row"
        desktop: "Product cards: 4 per row"

    content_reordering:
      mobile: "Main content first, sidebar content below"
      desktop: "Sidebar on right or left, main content center"

      implementation: "CSS Flexbox order or Grid placement"

      example:
        mobile_order: "1. Article, 2. Related articles, 3. Author bio"
        desktop_order: "1. Sidebar (author bio, related), 2. Article"
```

**Phase 3: Touch-Optimized Content & Interactions**

Design for fingers, not cursors:

```yaml
touch_optimization_framework:
  touch_target_sizing:
    minimum_size:
      - standard: "44×44px (Apple HIG)"
      - preferred: "48×48px (Material Design)"
      - spacious: "56×56px (comfortable for larger fingers)"

    spacing:
      - minimum: "8px between touch targets"
      - preferred: "16px (reduce mis-taps)"

    examples:
      buttons:
        - mobile: "Full-width buttons (100% width) for primary actions"
        - mobile: "Stacked buttons (vertical) if multiple actions"
        - desktop: "Inline buttons (horizontal) acceptable"

      form_inputs:
        - mobile: "44-48px height minimum"
        - mobile: "Full-width inputs (easier to tap)"
        - desktop: "Fixed-width inputs (don't stretch excessively)"

      links_in_text:
        - mobile: "Larger tap area (padding around link text)"
        - mobile: "More line-height spacing (prevent mis-taps on adjacent lines)"

  gesture_considerations:
    swipe_gestures:
      - use_case: "Image carousels, tabbed navigation"
      - mobile: "Swipe left/right to navigate"
      - desktop: "Arrow buttons or keyboard navigation (no swipe)"

      example:
        mobile: "Swipe product images to see more photos"
        desktop: "Click left/right arrows"

    pinch_zoom:
      - use_case: "Images, maps, zoomable content"
      - mobile: "Enable pinch-to-zoom for images (don't disable)"
      - desktop: "Click to expand or dedicated zoom controls"

    long_press:
      - use_case: "Context menus, additional options"
      - mobile: "Long press to reveal context menu"
      - desktop: "Right-click for context menu"

    pull_to_refresh:
      - use_case: "Content feeds, lists"
      - mobile: "Pull down to refresh content"
      - desktop: "Refresh button or auto-refresh"

  hover_alternatives:
    problem: "Hover states don't exist on touch devices"

    solutions:
      tooltips:
        - mobile: "Tap info icon (?) to reveal tooltip (modal or inline)"
        - desktop: "Hover to reveal tooltip"

      dropdown_menus:
        - mobile: "Tap to expand menu (state persists until close)"
        - desktop: "Hover to reveal menu (auto-collapse on mouse out)"

      preview_on_hover:
        - mobile: "Tap to open detail view or preview"
        - desktop: "Hover to see preview card"

  mobile_specific_affordances:
    sticky_elements:
      - use_case: "Keep key actions accessible while scrolling"
      - pattern: "Sticky header (navigation) or sticky footer (CTA)"

      example:
        mobile: "Sticky 'Add to Cart' button at bottom as user scrolls product details"

    bottom_navigation:
      - use_case: "Primary navigation on mobile apps/sites"
      - pattern: "Bottom tab bar (easier to reach with thumb)"

      example:
        mobile: "Bottom nav: Home | Search | Cart | Profile"
        desktop: "Top nav: Home | Products | About | Contact"

    floating_action_button:
      - use_case: "Primary action (create, add, compose)"
      - pattern: "Floating circular button (bottom-right, easy thumb access)"

      example:
        mobile: "FAB: + (create new item)"
        desktop: "Button in toolbar or top-right"
```

**Phase 4: Performance Optimization & Adaptive Loading**

Optimize content delivery for device and network:

```yaml
performance_optimization_framework:
  performance_budgets:
    page_weight_budgets:
      mobile_3g: "<300KB total page weight (critical for emerging markets)"
      mobile_4g: "<500KB"
      desktop_broadband: "<1MB"

    time_budgets:
      first_contentful_paint: "<1.5 seconds"
      largest_contentful_paint: "<2.5 seconds"
      time_to_interactive: "<3.5 seconds"

    resource_budgets:
      javascript: "<150KB (gzipped) for initial bundle"
      css: "<50KB (gzipped)"
      images: "<200KB for above-the-fold images"
      fonts: "<50KB for critical fonts"

  responsive_images:
    srcset_usage:
      concept: "Serve different image sizes based on viewport width"

      implementation: |
        <img
          src="product-800w.jpg"
          srcset="product-400w.jpg 400w,
                  product-800w.jpg 800w,
                  product-1200w.jpg 1200w"
          sizes="(max-width: 600px) 100vw,
                 (max-width: 1200px) 50vw,
                 800px"
          alt="Product name"
        />

      result: "Mobile gets 400w image (smaller), desktop gets 1200w (sharper)"

    modern_image_formats:
      - format: "AVIF (best compression, newer browser support)"
      - format: "WebP (great compression, wide support)"
      - format: "JPEG (fallback for older browsers)"

      implementation: |
        <picture>
          <source srcset="product.avif" type="image/avif">
          <source srcset="product.webp" type="image/webp">
          <img src="product.jpg" alt="Product name">
        </picture>

    lazy_loading:
      concept: "Load images as user scrolls (not all at once)"

      implementation: |
        <img src="product.jpg" loading="lazy" alt="Product name">

      result: "Faster initial page load, images load on demand"

  adaptive_content_loading:
    critical_css:
      concept: "Inline critical CSS (above-the-fold styles) in <head>, defer rest"
      benefit: "Page renders immediately, no flash of unstyled content"

    code_splitting:
      concept: "Load JavaScript in chunks (not one massive bundle)"
      example:
        - "Initial bundle: Core app + homepage"
        - "Route-based: Load product page code when user navigates to product"
        - "Component-based: Load modal code when user opens modal"

    conditional_loading:
      concept: "Load features based on device capability or user action"

      examples:
        - "Don't load video player code if user hasn't clicked play"
        - "Don't load map libraries until user interacts with map"
        - "Load high-res images only on desktop, low-res on mobile"

  network_aware_content:
    save_data_mode:
      detection: "navigator.connection.saveData (user has 'Data Saver' enabled)"
      adaptations:
        - "Serve lower-res images"
        - "Disable auto-play videos"
        - "Simplify animations"
        - "Warn before loading heavy content"

    effective_connection_type:
      detection: "navigator.connection.effectiveType ('4g', '3g', '2g', 'slow-2g')"
      adaptations:
        2g: "Text-only mode, no images, critical content only"
        3g: "Compressed images, simplified layout"
        4g: "Standard experience"
        5g: "Enhanced experience (high-res, video)"
```

**Phase 5: Readable & Scannable Content**

Optimize typography and layout for readability across devices:

```yaml
typography_framework:
  font_sizing:
    mobile:
      - "Body text: 16px minimum (prevents iOS zoom on form inputs)"
      - "Headlines: 24-32px (h1), 20-24px (h2), 18-20px (h3)"
      - "Line height: 1.5-1.6 (comfortable reading)"

    desktop:
      - "Body text: 18-20px (larger screens = larger text comfortable)"
      - "Headlines: 32-48px (h1), 24-32px (h2), 20-24px (h3)"
      - "Line height: 1.4-1.5"

  line_length:
    optimal: "50-75 characters per line (ideal readability)"
    mobile: "Usually acceptable (narrow screens = naturally short lines)"
    desktop: "Require max-width containers (prevent excessively long lines)"

    implementation: |
      .article-body {
        max-width: 65ch; /* 65 characters */
        margin: 0 auto;
      }

  content_spacing:
    mobile:
      - "Paragraph spacing: 1.5em between paragraphs"
      - "Section spacing: 2-3em between sections"
      - "Margin/padding: 16-24px (comfortable breathing room)"

    desktop:
      - "Paragraph spacing: 1.5-2em"
      - "Section spacing: 3-4em"
      - "Margin/padding: 32-48px"

  readability_enhancements:
    contrast:
      - standard: "4.5:1 (WCAG AA for normal text)"
      - enhanced: "7:1 (WCAG AAA)"

      example:
        - "Black text (#000) on white background (#FFF) = 21:1 (excellent)"
        - "Dark gray (#333) on white = 12.6:1 (excellent)"
        - "Light gray (#999) on white = 2.8:1 (fails AA, avoid)"

    font_weights:
      - mobile: "Use 400 (regular) or 500 (medium) for body, 600-700 (semi-bold to bold) for headings"
      - avoid: "Thin fonts (<400) on mobile (hard to read on small screens)"

    scannable_formatting:
      - "Use bullet points and numbered lists (break up walls of text)"
      - "Use subheadings (H2, H3) every 3-4 paragraphs"
      - "Use bold or italics for emphasis (sparingly)"
      - "Use blockquotes for pullquotes or key takeaways"
      - "Use whitespace generously (don't cram content)"

  mobile_reading_patterns:
    f_pattern:
      - description: "Users scan left-to-right at top, then vertically down left side"
      - implication: "Front-load important info (left side, top of page)"

    z_pattern:
      - description: "For less text-heavy pages (zigzag: top-left → top-right → diagonal → bottom-left → bottom-right)"
      - implication: "Place key CTAs at top-right and bottom-right"

    thumb_zone:
      - description: "Easiest thumb reach: bottom center and middle of screen"
      - implication: "Place primary actions in easy-to-reach zones"
```

**Phase 6: Accessibility & Inclusive Design**

Ensure content works for all users, all devices:

```yaml
accessibility_framework:
  semantic_html:
    principle: "Use correct HTML elements (not div for everything)"

    examples:
      - "Use <button> for buttons (not <div onclick='...'>)"
      - "Use <nav> for navigation"
      - "Use <main> for main content"
      - "Use <article> for article content"
      - "Use <h1>-<h6> for headings (proper hierarchy)"

    benefit: "Screen readers understand structure, keyboard navigation works"

  keyboard_navigation:
    requirements:
      - "All interactive elements reachable via Tab key"
      - "Focus visible (outline or highlight)"
      - "Logical tab order (matches visual order)"
      - "Enter/Space activates buttons"
      - "Escape closes modals"

    testing: "Try using site with keyboard only (no mouse)"

  screen_reader_support:
    alt_text:
      - "All images have alt text (describe content, not 'image of...')"
      - "Decorative images: alt='' (screen reader skips)"

    aria_labels:
      - "Use aria-label for icons without text"
      - example: "<button aria-label='Close modal'>×</button>"

    landmarks:
      - "Use HTML5 semantic elements or ARIA roles"
      - example: "<nav role='navigation'> (redundant but safe)"

  responsive_accessibility:
    zoom_support:
      - "Allow browser zoom (don't set maximum-scale=1.0)"
      - "Test at 200% zoom (WCAG requirement)"
      - "Content should reflow (not horizontal scroll)"

    orientation_support:
      - "Support both portrait and landscape orientation"
      - "Don't lock orientation (unless justified, like games)"

    touch_targets:
      - "44×44px minimum (accessibility guideline)"
      - "Adequate spacing (8-16px) to prevent mis-taps"
```

---

## Output Schema

```yaml
responsive_content_design:
  content_hierarchy:
    p0_essential: "[Must-have content, all devices]"
    p1_important: "[Important, may collapse on mobile]"
    p2_supplementary: "[Nice-to-have, often hidden on mobile]"
    p3_optional: "[Desktop enhancements only]"

  breakpoints:
    mobile_small: "[320-480px, single column]"
    mobile_large: "[481-768px, single column]"
    tablet: "[769-1024px, 2-column]"
    desktop_small: "[1025-1440px, multi-column]"
    desktop_large: "[1441px+, wide layouts]"

  touch_optimization:
    target_sizing: "[44-48px minimum]"
    spacing: "[8-16px between targets]"
    gestures: "[Swipe, pinch, long-press alternatives]"

  performance:
    budgets: "[Page weight, time, resource limits]"
    responsive_images: "[srcset, modern formats, lazy load]"
    adaptive_loading: "[Code splitting, conditional features]"

  typography:
    font_sizing: "[16px mobile min, 18-20px desktop]"
    line_length: "[50-75 characters optimal]"
    readability: "[Contrast, spacing, scannable formatting]"

  accessibility:
    semantic_html: "[Proper element usage]"
    keyboard_nav: "[Tab, focus, logical order]"
    screen_readers: "[Alt text, ARIA, landmarks]"
```

---

## Examples

### Example 1: News Publisher (Mobile-First)

**Audience**: 75% mobile readers

**Strategy**: Single-column mobile, multi-column desktop

**Performance**: <300KB page weight, <2s load on 3G

**Typography**: 18px body text, 1.6 line-height, 65ch max-width

**Results**: 40% lower bounce rate, 2× time on site.

### Example 2: E-Commerce (Conversion-Focused)

**Audience**: 60% mobile shoppers

**Strategy**: Mobile-first product pages, sticky CTA

**Touch**: 48px touch targets, full-width buttons

**Performance**: Lazy-load images, modern formats (WebP/AVIF)

**Results**: 25% higher mobile conversion rate.

### Example 3: B2B SaaS (Dashboard)

**Audience**: 50/50 mobile/desktop

**Strategy**: Simplified mobile dashboard, full-featured desktop

**Adaptive**: Hide non-essential data on mobile, progressive disclosure

**Performance**: Code splitting (load features on-demand)

**Results**: 90% feature parity mobile/desktop, maintained usability.

### Example 4: Educational Platform (Content-Heavy)

**Audience**: Students on all devices

**Strategy**: Readable typography, accessible on all devices

**Typography**: 20px body text, high contrast, generous spacing

**Accessibility**: WCAG AAA, keyboard navigation, screen reader optimized

**Results**: 100% accessibility compliance, high engagement across devices.

### Example 5: Government Site (Universal Access)

**Audience**: All citizens, all devices, all abilities

**Strategy**: Progressive enhancement (works without JS)

**Performance**: <200KB page weight (inclusive of slow networks)

**Accessibility**: WCAG AAA, multilingual, RTL support

**Results**: Serves 100% of population, no exclusions.

---

## Success Metrics

- **Performance**: 90%+ pages meet Core Web Vitals (LCP <2.5s, FID <100ms, CLS <0.1)
- **Mobile Usability**: <5% mobile usability issues (Google Search Console)
- **Accessibility**: 100% WCAG AA compliance (automated + manual testing)
- **Engagement**: Mobile bounce rate within 10% of desktop (parity)
- **Conversion**: Mobile conversion rate ≥70% of desktop (acceptable gap)
- **Cross-Device**: 80%+ users seamlessly switch between devices

---

## Best Practices

- **Mobile-First Approach**: Design for smallest screen first, progressively enhance
- **Performance Budget**: Set limits and measure against them
- **Touch-First Interactions**: Design for fingers (44px+ targets)
- **Readable Typography**: 16px minimum, 50-75ch line length, high contrast
- **Accessible by Default**: Semantic HTML, keyboard nav, screen reader support
- **Test on Real Devices**: Emulators miss real-world issues
- **Progressive Enhancement**: Core content works everywhere, enhancements layer on

---

## Common Pitfalls

- **Desktop-First Thinking**: Designing for desktop, then "squishing" for mobile
- **Tiny Touch Targets**: Buttons <44px (hard to tap, accessibility fail)
- **Ignoring Performance**: Beautiful design that takes 10 seconds to load
- **Hover-Dependent**: Features that only work on hover (broken on touch)
- **Fixed Viewport**: Setting maximum-scale=1.0 (prevents zoom, accessibility fail)
- **Poor Contrast**: Light gray text on white (readability and accessibility issue)
- **Excessive Line Length**: 150+ character lines on desktop (hard to read)

---

**License**: © 2025 Adedayo Agarau. Licensed under CC BY-SA 4.0.
**Maintainer**: Adedayo Agarau

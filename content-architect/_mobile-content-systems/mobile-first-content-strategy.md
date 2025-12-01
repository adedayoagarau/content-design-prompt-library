## Mobile-First Content Strategy & Optimization Framework v1.0

**Purpose**: Design a comprehensive mobile-first content strategy that prioritizes mobile user experience, optimizes content for small screens, leverages mobile-specific features, and drives engagement and conversions through thumb-friendly design, performance optimization, and context-aware content delivery that recognizes mobile represents 60-70% of web traffic.

**Context**: Use this framework when mobile traffic dominates your audience or when competing in mobile-saturated markets. Mobile-first thinking goes beyond responsive design—it requires fundamentally rethinking content architecture, interaction patterns, and conversion funnels for constrained screens, touch interfaces, and on-the-go consumption contexts. Essential for consumer brands, local businesses, content publishers, and any organization where mobile conversion rates lag desktop despite higher mobile traffic.

**Strategic Frameworks Applied**:
- **Mobile-First Design Philosophy** - Designing for constraints breeds clarity and focus
- **Thumb Zone Optimization** - Placing interactive elements within natural reach zones  
- **Progressive Enhancement Model** - Core experience on all devices, enhancements where supported
- **Performance Budget Architecture** - Speed as feature, not afterthought
- **Context-Aware Content Delivery** - Adapting to mobile usage contexts (commute, multitasking, urgency)
- **Mobile Conversion Funnel Redesign** - Reducing friction in constrained environments

---

## Variables

### Business Context Variables
- `{{company_name}}`: Organization implementing mobile-first strategy
- `{{industry_vertical}}`: Sector and competitive mobile landscape
- `{{mobile_traffic_percentage}}`: Current mobile vs desktop traffic split
- `{{mobile_conversion_gap}}`: Mobile conversion rate vs desktop (if mobile underperforms)
- `{{primary_business_goal}}`: E-commerce sales | Lead generation | Content engagement | App downloads | Local visits
- `{{target_audience_mobile_behavior}}`: How audience uses mobile (quick research | deep browsing | transactional | entertainment)

### Content Strategy Variables
- `{{content_types}}`: Articles | Product pages | Videos | Forms | Tools | Dashboards
- `{{content_depth_mobile}}`: Snackable (300-500 words) | Standard (800-1200) | Long-form (2000+)
- `{{navigation_model}}`: Bottom nav | Hamburger menu | Tabs | Swipe-based | Voice-activated
- `{{personalization_approach}}`: Generic | Location-based | Time-based | Behavior-based | Device-capability-based
- `{{offline_strategy}}`: None | Read-later caching | Full offline mode (PWA)

### Technical Infrastructure Variables
- `{{site_type}}`: Responsive website | Mobile-optimized | PWA | Native app | Hybrid approach
- `{{cms_platform}}`: WordPress | Contentful | Drupal | Custom | Headless CMS
- `{{performance_target}}`: <2 sec load | <3 sec | <5 sec | (Google Core Web Vitals)
- `{{image_strategy}}`: Lazy loading | WebP format | Responsive images | CDN delivery
- `{{framework_approach}}`: Mobile-first CSS | AMP | React/Vue | Vanilla JS optimization

### User Experience Variables
- `{{input_methods}}`: Touch primary | Voice integration | Gesture controls | Keyboard support
- `{{touch_target_size}}`: Minimum 44x44px (Apple) | 48x48px (Google) | Custom
- `{{font_size_minimum}}`: 16px (prevent zoom) | 18px | Custom
- `{{orientation_support}}`: Portrait only | Landscape adaptive | Both optimized
- `{{accessibility_priority}}`: WCAG AA | WCAG AAA | Enhanced mobile accessibility

### Conversion Optimization Variables
- `{{form_optimization}}`: Minimal fields | Autofill | Social login | Progressive disclosure
- `{{cta_strategy}}`: Sticky bottom CTAs | Floating action buttons | Inline | Multiple touchpoints
- `{{payment_methods}}`: Mobile wallets (Apple Pay, Google Pay) | Card | Alternative (Venmo, PayPal)
- `{{checkout_flow}}`: One-page | Multi-step | Guest checkout | Saved payment info
- `{{social_proof_mobile}}`: Reviews summary | Ratings | Trust badges | Customer count

### Analytics & Measurement Variables
- `{{mobile_kpis}}`: Mobile conversion rate | Page speed | Bounce rate | Time on site | Scroll depth
- `{{device_segmentation}}`: iOS vs Android | Phone vs tablet | Screen size segments
- `{{tracking_approach}}`: Google Analytics 4 | Mixpanel | Amplitude | Heap | Custom
- `{{optimization_method}}`: A/B testing | Multivariate | Heatmaps | Session recording

---

## Prompt

You are a mobile-first content strategist designing a comprehensive mobile optimization program for **{{company_name}}**, where **{{mobile_traffic_percentage}}** of traffic comes from mobile devices. Your task is to redesign the content experience from mobile-up (not desktop-down), prioritizing thumb-friendly navigation, performance optimization, and context-aware content delivery to achieve **{{primary_business_goal}}** while closing the **{{mobile_conversion_gap}}** between mobile and desktop conversion rates.

### Mobile-First Design Philosophy

**Core Principles:**

**1. Content Prioritization:**
- Mobile screens reveal ruthlessly what matters most
- Force hierarchy: Most important content first, secondary content collapsed or removed
- Progressive disclosure: Show essentials, hide advanced features behind taps
- Eliminate desktop "nice-to-haves" that clutter mobile experience

**2. Touch-First Interface Design:**
- Interactive elements minimum **{{touch_target_size}}** (thumbs are 45-57px wide)
- Spacing between tappable elements: 8px minimum
- Primary actions in thumb-reach zones (bottom 50% of screen for one-handed use)
- Avoid hover-dependent interactions (no hover state on mobile)

**3. Performance as Feature:**
- **{{performance_target}}** load time mandatory (53% abandon after 3 seconds)
- Images are typically 60-80% of page weight—optimize aggressively
- Minimize JavaScript (especially render-blocking)
- Defer non-critical resources

**4. Context-Aware Content:**
- **On-the-go**: Snackable content, quick answers, easy-to-scan
- **Commute**: Longer content OK if engaging, save-for-later options
- **Evening/couch**: Video-friendly, deeper exploration tolerated
- **Location-aware**: Store hours, directions, click-to-call prominent

**5. Thumb Zone Optimization:**
```
Screen divided into zones (for right-handed users, flip for left):

┌─────────────────────┐
│  HARD TO REACH     │ ← Top 20% (avoid primary actions)
│    (navigation,    │
│     branding)      │
├─────────────────────┤
│                    │
│    COMFORTABLE     │ ← Middle 30% (secondary actions)
│    (content area)  │
│                    │
├─────────────────────┤
│                    │
│     NATURAL        │ ← Bottom 50% (primary CTAs, nav)
│   THUMB ZONE       │    Most accessible, least effort
│  (primary actions) │
└─────────────────────┘
```

**Thumb Zone Application:**
- **Primary CTA**: Bottom 20% of screen (e.g., "Add to Cart", "Sign Up")
- **Secondary actions**: Middle zone (filters, sorting, share buttons)
- **Branding/navigation**: Top (acceptable tradeoff as lower priority than conversion)

### Mobile Content Architecture

**Page Structure Template:**

**Homepage (Mobile-First):**
```
1. Header (sticky, minimal):
   - Logo (left, tappable to homepage)
   - Search icon (right)
   - Menu icon (right)
   - Cart/account icons (right)
   Height: 56px max

2. Hero (single, focused message):
   - One compelling image/video (no carousels—swipe interaction conflicts)
   - One headline (6-8 words max)
   - One CTA button (prominent, thumb-zone)
   Height: 1 viewport height or 400px

3. Value Propositions (3 max):
   - Icon + headline + 1 sentence
   - Vertically stacked (no side-by-side)
   - Tap to expand if more detail needed

4. Social Proof (compact):
   - Star rating + "4.8/5 from 2,300+ customers"
   - Or: Logo grid of notable customers (6-9 logos)

5. Featured Content (3-4 items):
   - Card-based design
   - Large tap targets
   - Swipeable carousel (horizontal scroll)

6. Email Capture (non-intrusive):
   - In-content module (not popup)
   - Clear value exchange
   - Single field (email only)

7. Footer (minimal):
   - Essential links only (5-8)
   - Contact info
   - Social icons
```

**Product Page (Mobile-Optimized):**
```
1. Image Gallery (swipeable):
   - Full-width images
   - Swipe gesture to next image
   - Indicators showing image count
   - Pinch-to-zoom for detail

2. Product Title + Price:
   - Title: Large, readable (20-24px font)
   - Price: Prominent, old price struck through if on sale

3. Key Info (scannable):
   - Star rating + review count (tappable to reviews)
   - Availability status
   - Shipping estimate

4. Quick Actions (sticky bottom bar):
   - Quantity selector
   - Add to Cart (primary CTA, 80% width)
   - Wishlist icon (20% width)

5. Accordion Content (collapsed by default):
   ▼ Description (expandable)
   ▼ Specifications
   ▼ Shipping & Returns
   ▼ Reviews (show count, star rating visible when collapsed)

6. Related Products (horizontal scroll):
   - "You might also like"
   - 3-4 products visible, swipe for more
```

**Article/Blog Post (Mobile-Reading Optimized):**
```
1. Hero Image (optional, 16:9 ratio)

2. Headline:
   - Font size: 28-32px (very readable)
   - Line height: 1.3
   - Max width: 90% of viewport

3. Meta Info:
   - Author + read time
   - Publication date
   - Share buttons (but not intrusive)

4. Body Content:
   - Font size: 18px minimum (prevents pinch-zoom)
   - Line height: 1.6 (readability on small screens)
   - Paragraph length: 3-5 sentences max
   - Whitespace between paragraphs: 1.5em
   - Pull quotes: Full-width, visually distinct
   - Images: Full-width, lazy loaded, with captions

5. In-Content CTAs (every 3-4 scrolls):
   - Email signup
   - Related article
   - Product recommendation (if relevant)

6. Bottom CTA (after article):
   - Primary conversion action
   - "What to read next" (3 recommendations)

7. Comments (if enabled):
   - Collapsed by default ("View 47 comments")
   - Tap to expand
```

### Mobile Performance Optimization

**Performance Budget:**

Set hard limits to enforce speed:
```
Total Page Weight: <1MB (2MB max)
Images: <500KB total
JavaScript: <200KB (gzipped)
CSS: <50KB (gzipped)
Fonts: <100KB (use system fonts or subset custom fonts)
Time to Interactive: <3 seconds on 4G
Largest Contentful Paint: <2.5 seconds
Cumulative Layout Shift: <0.1
```

**Image Optimization Strategy:**

**1. Format Selection:**
- Use WebP with JPEG fallback (30-40% smaller than JPEG)
- SVG for icons and logos (scalable, tiny file size)
- Avoid GIFs (use video instead—90% smaller)

**2. Responsive Images:**
```html
<picture>
  <source media="(max-width: 640px)" srcset="image-small.webp">
  <source media="(max-width: 1024px)" srcset="image-medium.webp">
  <img src="image-large.jpg" alt="Description" loading="lazy">
</picture>
```

**3. Lazy Loading:**
- Load only images in viewport (and 1-2 screens ahead)
- Native lazy loading: `loading="lazy"` attribute
- Use placeholders (LQIP - Low Quality Image Placeholders) for better UX

**4. CDN Delivery:**
- Serve images from CDN (Cloudflare, Cloudinary, Imgix)
- Automatic format optimization based on browser support
- Device-based optimization (detect screen DPI, size)

**JavaScript Optimization:**

**1. Code Splitting:**
- Load only JS needed for current page
- Lazy load interactive components (modals, carousels) when needed
- Defer non-critical scripts

**2. Third-Party Script Audit:**
- Every third-party script (analytics, ads, chat) adds latency
- Async or defer all third-party scripts
- Consider replacing heavy scripts (e.g., Google Maps embed → static image with link)

**3. Framework Choices:**
- Vanilla JS when possible (no framework overhead)
- If framework needed: Preact (3KB) over React (40KB), Svelte (no runtime) over Vue

**CSS Optimization:**

**1. Critical CSS:**
- Inline CSS needed for above-the-fold content
- Defer loading rest of CSS

**2. Mobile-First CSS:**
```css
/* Base styles (mobile) */
.element {
  width: 100%;
  padding: 1rem;
}

/* Enhancements for larger screens */
@media (min-width: 768px) {
  .element {
    width: 50%;
    padding: 2rem;
  }
}
```

**3. CSS Optimization:**
- Remove unused CSS (PurgeCSS, UnCSS)
- Minimize animations (battery drain on mobile)
- Use CSS transforms over positional animations (GPU-accelerated)

**Progressive Web App (PWA) Features:**

**Core PWA Capabilities for Mobile:**

**1. Offline Functionality:**
- Service worker caches critical assets
- Offline fallback page (instead of browser error)
- Background sync (save form data even when offline, submit when online)

**2. Add to Home Screen:**
- Manifest file enables "install" prompt
- App icon on home screen (feels native)
- Splash screen on launch
- Hides browser UI (immersive experience)

**3. Push Notifications:**
- Re-engage users with timely updates
- Permission-based (don't ask immediately)
- Contextual triggers (abandoned cart, price drop, new content)

**4. Performance Benefits:**
- Cached assets load instantly on repeat visits
- Pre-cache next likely pages (speculativeprefetch)

### Mobile Navigation Patterns

**Navigation Model Selection:**

| Pattern | Best For | Pros | Cons |
|---------|---------|------|------|
| **Bottom Tab Bar** | Apps, frequent navigation | Thumb-friendly, always visible | Limited to 5 items |
| **Hamburger Menu** | Content-heavy sites | Hides complexity | Lower discoverability |
| **Tab Bar (top)** | Segmented content | Clear sections | Harder to reach |
| **Floating Action Button** | Single primary action | Very prominent | Only one action |
| **Swipe Gestures** | Media, stories | Engaging, fast | Discoverability issues |

**Recommendation for {{content_types}}:**
[Select appropriate pattern based on content type and user needs]

**Hamburger Menu Best Practices:**
```
┌─────────────────────┐
│ ☰  LOGO      🔍 🛒 │ ← Header (sticky)
├─────────────────────┤
│                     │
│   [Content]         │
│                     │
│                     │
│                     │
│                     │
└─────────────────────┘

Tap ☰ reveals:
┌─────────────────────┐
│ ✕  MENU             │
├─────────────────────┤
│ 🏠 Home             │
│ 📦 Products         │
│ ℹ️  About            │
│ 📞 Contact          │
│ 👤 Account          │
└─────────────────────┘
```

**Best Practices:**
- Slide-in from left (standard pattern)
- Overlay (doesn't push content)
- Close on backdrop tap or swipe
- Include primary navigation + account links
- Search bar at top of menu

**Bottom Navigation Bar:**
```
┌─────────────────────┐
│                     │
│   [Content Area]    │
│                     │
│                     │
├─────────────────────┤
│ 🏠   📦   ➕   ❤️   👤│ ← Bottom nav (fixed)
│Home Shop Add  Fav Me│
└─────────────────────┘
```

**Best Practices:**
- 3-5 items only (more = cramped)
- Icons + labels (icons alone are ambiguous)
- Active state clearly indicated (color, underline)
- Fixed position (always accessible)
- Reserve center position for primary action if applicable

### Mobile Form Optimization

**Form Best Practices:**

**1. Minimize Fields:**
- Only ask for essential information
- Progressive disclosure (ask more later if needed)
- Social login (Google, Apple, Facebook) as alternative

**2. Mobile-Friendly Input Types:**
```html
<input type="email">        <!-- Shows @ key on keyboard -->
<input type="tel">          <!-- Shows numeric keypad -->
<input type="number">       <!-- Shows numbers + symbols -->
<input type="date">         <!-- Native date picker -->
<input type="search">       <!-- Shows search button -->
```

**3. Autofill Support:**
```html
<input type="text" autocomplete="name">
<input type="email" autocomplete="email">
<input type="tel" autocomplete="tel">
<input type="text" autocomplete="address-line1">
<input type="text" autocomplete="postal-code">
<input type="text" autocomplete="cc-number"> <!-- Credit card -->
```

**4. Input Field Design:**
- Large input fields (minimum 44px height)
- Large, readable fonts (16px+ to prevent zoom)
- Clear labels above fields (not placeholders as labels)
- Inline validation (real-time feedback on errors)
- Error messages below field, specific and helpful

**5. Form Layout:**
- Single-column layout (no side-by-side fields on mobile)
- One question per screen for long forms (multi-step)
- Progress indicator if multi-step (Step 2 of 4)
- Save progress (don't lose data if user navigates away)

**Example: Mobile Checkout Form**
```
Step 1: Contact
┌─────────────────────────────┐
│ Email                       │
│ ┌─────────────────────────┐ │
│ │ your@email.com          │ │
│ └─────────────────────────┘ │
│                             │
│ Phone (for delivery)        │
│ ┌─────────────────────────┐ │
│ │ (123) 456-7890          │ │
│ └─────────────────────────┘ │
│                             │
│ ┌───────────────────────┐   │
│ │   Continue to Shipping│   │
│ └───────────────────────┘   │
└─────────────────────────────┘

Step 2: Shipping
[Address autofill enabled]
[Smart address validation]

Step 3: Payment
[Apple Pay / Google Pay prominent]
[Card entry as fallback]
[Saved cards if returning customer]
```

### Mobile Conversion Optimization

**Checkout Flow Optimization:**

**Problem**: Mobile checkout abandonment averages 85-90% (vs 70% desktop)

**Solutions:**

**1. Guest Checkout Default:**
- Don't force account creation
- Offer account creation after purchase ("Save your info for next time?")

**2. Mobile Wallets Priority:**
- Apple Pay, Google Pay, Shop Pay above fold
- One-tap checkout (shipping + payment stored)
- "Express Checkout" section separate from manual entry

**3. Minimize Steps:**
- Combine shipping + billing address (checkbox: "Billing same as shipping")
- Show order summary persistently (sticky footer with total)
- Inline validation prevents error-correction step

**4. Trust Signals:**
- Security badges (SSL, payment processor logos)
- "30-day money-back guarantee" messaging
- "12,000+ happy customers" social proof

**5. Persistent Cart Access:**
- Cart icon in header with item count badge
- Tap to review cart (slide-out, don't navigate away)
- Saved carts (mobile users often browse and buy later)

**Call-to-Action Optimization:**

**Sticky CTAs:**
```
┌─────────────────────┐
│                     │
│   [Scrollable       │
│    Content]         │
│                     │
│                     │
├─────────────────────┤ ← Sticky bar appears
│ $99.99  │ Add to   │    after user scrolls
│         │   Cart   │    past primary CTA
└─────────────────────┘
```

**Benefits:**
- CTA always accessible (no scrolling back up)
- Shows price + action (context maintained)
- Prominent but not intrusive

**Floating Action Button (FAB):**
```
┌─────────────────────┐
│                     │
│   [Content]         │
│                     │
│                  ➕ │ ← FAB (bottom-right)
│                 [CTA]│
│                     │
└─────────────────────┘
```

**Best For:**
- Single primary action (e.g., "Create Post", "Add Item")
- Always accessible
- Doesn't obscure content (transparent or small)

**CTA Button Best Practices:**
- **Size**: Minimum 44x44px, ideally 48-56px height
- **Width**: Full-width or 70%+ of screen (easy to tap)
- **Color**: High contrast with background
- **Copy**: Action-oriented ("Get Started" not "Submit")
- **Loading State**: Show spinner when tapped (feedback that action is processing)

### Mobile Content Formatting

**Readability Optimization:**

**Typography:**
- **Font Size**: 16-18px minimum for body text (prevents pinch-zoom)
- **Line Height**: 1.5-1.6 (more air between lines on small screens)
- **Line Length**: 45-75 characters (comfortable reading)
- **Font Choice**: System fonts load faster (-apple-system, Roboto, Segoe UI)
- **Weight**: Regular (400) for body, Bold (700) for headings (avoid light weights on small screens)

**Content Chunking:**
- **Paragraphs**: 2-4 sentences max (white space is your friend)
- **Headings**: Every 2-3 paragraphs (create scannable structure)
- **Lists**: Bulleted/numbered instead of long paragraphs
- **Bold Key Phrases**: Help scanning (but don't overdo—10% of text max)

**Visual Content:**
- **Images**: Full-width or breakout style (feels immersive)
- **Captions**: Always include (many skim images without reading)
- **Alt Text**: Descriptive for accessibility and SEO
- **Videos**: Native HTML5 player (don't force app opens)
  - Tap to play (autoplay drains battery and data)
  - Captions available (watch without sound)
  - Show duration upfront (set expectations)

**Accordions & Collapsible Content:**
```
Product Page Content:

▼ Description
  [Expanded: Full product description text]

▶ Specifications
▶ Shipping & Returns  
▶ Reviews (4.8 stars from 230 reviews)
```

**Benefits:**
- Reduces initial scroll length
- User controls information density
- Secondary content accessible but not intrusive

### Mobile-Specific Features

**Location-Based Content:**

**Use Cases:**
- **Store Locator**: "Find stores near you" → Geolocation API
- **Local Inventory**: "In stock at [Nearest Store Name]"
- **Shipping Estimates**: "Delivery by Thursday" (based on location)
- **Content Personalization**: Show region-specific content, pricing, language

**Implementation:**
```javascript
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      // Fetch nearest stores, show local content
    },
    (error) => {
      // Fallback: Ask for ZIP code input
    }
  );
}
```

**Privacy Considerations:**
- Request location only when needed (contextual, not on page load)
- Explain why you need it ("Find stores near you")
- Provide manual input alternative (ZIP code, city name)

**Click-to-Call & SMS:**
```html
<!-- Click-to-call (opens phone app) -->
<a href="tel:+15551234567">Call us: (555) 123-4567</a>

<!-- Click-to-SMS (opens messaging app) -->
<a href="sms:+15551234567">Text us</a>

<!-- Email -->
<a href="mailto:hello@company.com">Email us</a>
```

**Use Cases:**
- Customer support (prominent on contact page)
- Emergency services (healthcare, roadside assistance)
- Appointment booking ("Call to schedule")

**Calendar Integration:**
```html
<!-- Add to calendar link (generates .ics file) -->
<a href="/event.ics" download>Add to Calendar</a>
```

**Use Cases:**
- Event pages (webinars, conferences)
- Appointment confirmations
- Delivery time windows

**Native Sharing:**
```javascript
if (navigator.share) {
  navigator.share({
    title: 'Article Title',
    text: 'Check out this article',
    url: window.location.href
  });
}
```

**Benefits:**
- Uses device's native share sheet (apps, contacts, etc.)
- One tap to share to any app on device
- Familiar UX (no custom modal needed)

### Mobile Analytics & Testing

**Mobile-Specific Metrics:**

**Performance Metrics:**
- **Largest Contentful Paint (LCP)**: <2.5 sec (Core Web Vital)
  - Measures when main content loads
- **First Input Delay (FID)**: <100ms (Core Web Vital)  
  - Measures interactivity delay
- **Cumulative Layout Shift (CLS)**: <0.1 (Core Web Vital)
  - Measures visual stability (content not jumping around)
- **Time to Interactive (TTI)**: <3.8 sec on 4G
- **Page Weight**: <1MB ideal, <2MB acceptable

**Engagement Metrics:**
- **Bounce Rate by Device**: Compare mobile vs desktop
- **Time on Site**: Mobile sessions typically 40-60% shorter
- **Pages per Session**: Lower on mobile (1.5-2.5 avg)
- **Scroll Depth**: % who scroll to 25%, 50%, 75%, 100%
- **Rage Clicks**: Indicator of broken functionality (user tapping repeatedly)

**Conversion Metrics:**
- **Mobile Conversion Rate**: Target parity with desktop (or within 20%)
- **Add-to-Cart Rate**: Mobile typically 20-30% lower than desktop
- **Checkout Abandonment**: Mobile typically 10-20 points higher than desktop
- **Form Completion Rate**: Mobile 30-40% lower than desktop (opportunity area)

**Device Segmentation:**
```
Segment by:
- Device Type: Phone vs Tablet
- Operating System: iOS vs Android
- Screen Size: Small (<375px), Medium (375-767px), Large (768px+)
- Connection Speed: 2G, 3G, 4G, 5G, WiFi
- Browser: Chrome, Safari, Samsung Internet, Firefox
```

**Tools:**
- **Google Analytics 4**: Device category reports, mobile speed reports
- **Google Search Console**: Mobile usability issues, Core Web Vitals
- **Hotjar/FullStory**: Mobile session recordings, heatmaps
- **Google PageSpeed Insights**: Mobile performance scores + recommendations
- **WebPageTest**: Detailed waterfall analysis, test on real devices

**Mobile A/B Testing:**

**Common Test Ideas:**
1. **CTA Placement**: Sticky bottom bar vs inline CTAs
2. **Form Length**: Minimal fields vs comprehensive
3. **Navigation**: Hamburger vs bottom tab bar vs hybrid
4. **Checkout Flow**: One-page vs multi-step
5. **Product Images**: Gallery at top vs split-screen with info
6. **Font Sizes**: 16px vs 18px body text
7. **Button Size**: 44px vs 48px vs 56px height

**Mobile-Specific Testing Considerations:**
- **Traffic Split**: Test mobile traffic separately from desktop (different behaviors)
- **Statistical Significance**: Mobile traffic is higher volume, reaches significance faster
- **Device Segmentation**: iOS vs Android may respond differently to changes
- **Connection Speed**: Slower connections may abandon before seeing change (biased results)

---

## Output Schema

```yaml
mobile_first_content_strategy:
  business_context:
    company: "{{company_name}}"
    industry: "{{industry_vertical}}"
    mobile_traffic: "{{mobile_traffic_percentage}}"
    mobile_conversion_gap: "{{mobile_conversion_gap}}"
    primary_goal: "{{primary_business_goal}}"

  mobile_first_design:
    core_principles:
      - "Content prioritization: Most important content first"
      - "Touch-first interface: Min 44x44px tap targets"
      - "Performance as feature: <3 sec load time"
      - "Context-aware content: Adapt to mobile usage contexts"
      - "Thumb zone optimization: Primary CTAs in bottom 50%"

    thumb_zone_mapping:
      top_20_percent: "Hard to reach - branding, navigation"
      middle_30_percent: "Comfortable - secondary actions, content"
      bottom_50_percent: "Natural thumb zone - primary CTAs"

  content_architecture:
    homepage_structure:
      - "Sticky header (56px max): Logo, search, menu, cart"
      - "Hero (1 viewport height): Single image, headline, CTA"
      - "Value props (3 max): Icon + headline + sentence"
      - "Social proof (compact): Rating + customer count"
      - "Featured content (3-4 cards): Swipeable carousel"
      - "Email capture (in-content): Single field, clear value"
      - "Footer (minimal): 5-8 essential links"

    product_page_structure:
      - "Image gallery: Full-width, swipeable"
      - "Title + price: Large, readable (20-24px)"
      - "Key info: Rating, availability, shipping"
      - "Sticky bottom: Quantity selector + Add to Cart"
      - "Accordion content: Description, specs, shipping, reviews"
      - "Related products: Horizontal scroll"

    article_structure:
      - "Hero image (optional): 16:9 ratio"
      - "Headline: 28-32px, 90% viewport width"
      - "Meta: Author, read time, date, share"
      - "Body: 18px font, 1.6 line-height, 3-5 sentence paragraphs"
      - "In-content CTAs: Every 3-4 scrolls"
      - "Bottom CTA + related content"

  performance_optimization:
    performance_budget:
      total_page_weight: "<1MB (2MB max)"
      images: "<500KB"
      javascript: "<200KB gzipped"
      css: "<50KB gzipped"
      fonts: "<100KB"
      time_to_interactive: "<3 seconds on 4G"
      lcp: "<2.5 seconds"
      cls: "<0.1"

    image_optimization:
      format: "WebP with JPEG fallback"
      icons_logos: "SVG"
      responsive_images: "Picture element with multiple sources"
      lazy_loading: "Native loading='lazy' attribute"
      cdn: "Cloudflare, Cloudinary, or Imgix"

    javascript_optimization:
      code_splitting: "Load only JS for current page"
      third_party: "Async or defer all third-party scripts"
      framework: "Preact (3KB) or Svelte preferred over React/Vue"

    css_optimization:
      critical_css: "Inline above-the-fold CSS"
      mobile_first_css: "Base styles for mobile, enhancements for desktop"
      unused_css: "Remove with PurgeCSS or UnCSS"

    pwa_features:
      offline: "Service worker caches critical assets"
      add_to_home: "Manifest enables install prompt"
      push_notifications: "Re-engagement for abandoned carts, updates"
      caching: "Instant loads on repeat visits"

  navigation_patterns:
    selected_pattern: "[Bottom Tab Bar / Hamburger / Hybrid]"
    rationale: "[Why this pattern fits content and users]"

    hamburger_menu:
      behavior: "Slide-in from left, overlay"
      contents: "Primary navigation + account links + search"
      close_method: "Backdrop tap or swipe"

    bottom_navigation:
      items: "3-5 items: Icons + labels"
      active_state: "Color + underline"
      position: "Fixed (always accessible)"

  mobile_forms:
    optimization_tactics:
      - "Minimize fields: Essential info only"
      - "Mobile input types: email, tel, number, date"
      - "Autofill support: name, email, address, cc-number"
      - "Large inputs: Min 44px height, 16px+ font"
      - "Single-column layout: No side-by-side fields"
      - "Multi-step for long forms: Progress indicator"

    checkout_optimization:
      - "Guest checkout default"
      - "Mobile wallets priority: Apple Pay, Google Pay"
      - "Combine shipping + billing address"
      - "Persistent cart icon with item count"
      - "Sticky order summary footer"

  conversion_optimization:
    sticky_ctas:
      trigger: "Appears after scroll past primary CTA"
      content: "Price + primary action button"
      position: "Bottom of viewport (thumb-accessible)"

    fab_floating_action_button:
      use_case: "Single primary action apps"
      position: "Bottom-right, doesn't obscure content"
      size: "56x56px standard"

    button_best_practices:
      size: "48-56px height minimum"
      width: "Full-width or 70%+ of screen"
      color: "High contrast"
      copy: "Action-oriented verbs"
      loading_state: "Spinner feedback"

  content_formatting:
    typography:
      body_font_size: "16-18px minimum"
      line_height: "1.5-1.6"
      line_length: "45-75 characters"
      font_choice: "System fonts preferred"

    content_chunking:
      paragraphs: "2-4 sentences max"
      headings: "Every 2-3 paragraphs"
      lists: "Bulleted instead of long paragraphs"
      bold_phrases: "10% of text max"

    visual_content:
      images: "Full-width, lazy loaded, captions"
      videos: "Native HTML5, tap to play, captions, show duration"

    collapsible_content:
      use_case: "Long product descriptions, specs, FAQs"
      benefit: "Reduces scroll, user controls density"

  mobile_specific_features:
    location_based:
      - "Store locator with geolocation"
      - "Local inventory display"
      - "Shipping estimates by location"
      - "Region-specific content"

    communication:
      - "Click-to-call: tel: links"
      - "Click-to-SMS: sms: links"
      - "Click-to-email: mailto: links"

    calendar_integration:
      use_case: "Event pages, appointment confirmations"
      format: ".ics file download"

    native_sharing:
      api: "navigator.share()"
      benefit: "Device's native share sheet, one-tap to any app"

  analytics_measurement:
    performance_metrics:
      - metric: "Largest Contentful Paint (LCP)"
        target: "<2.5 seconds"
      - metric: "First Input Delay (FID)"
        target: "<100ms"
      - metric: "Cumulative Layout Shift (CLS)"
        target: "<0.1"
      - metric: "Time to Interactive (TTI)"
        target: "<3.8 seconds on 4G"
      - metric: "Page Weight"
        target: "<1MB ideal, <2MB max"

    engagement_metrics:
      - "Bounce rate by device"
      - "Time on site (40-60% shorter on mobile)"
      - "Pages per session (1.5-2.5 avg mobile)"
      - "Scroll depth (25%, 50%, 75%, 100%)"
      - "Rage clicks (broken functionality indicator)"

    conversion_metrics:
      - "Mobile conversion rate (target: parity with desktop)"
      - "Add-to-cart rate"
      - "Checkout abandonment"
      - "Form completion rate"

    device_segmentation:
      - "Device type: Phone vs tablet"
      - "OS: iOS vs Android"
      - "Screen size: Small, medium, large"
      - "Connection: 2G, 3G, 4G, 5G, WiFi"
      - "Browser: Chrome, Safari, Samsung, Firefox"

    tools:
      - "Google Analytics 4: Device reports, speed reports"
      - "Google Search Console: Mobile usability, Core Web Vitals"
      - "Hotjar/FullStory: Session recordings, heatmaps"
      - "PageSpeed Insights: Performance scores"
      - "WebPageTest: Waterfall analysis, real device tests"

    ab_testing_ideas:
      - "CTA placement: Sticky vs inline"
      - "Form length: Minimal vs comprehensive"
      - "Navigation: Hamburger vs bottom tab vs hybrid"
      - "Checkout flow: One-page vs multi-step"
      - "Font sizes: 16px vs 18px body"
      - "Button sizes: 44px vs 48px vs 56px"
```

---

## Examples

### Example 1: E-commerce Fashion Retailer

**Context**: 72% mobile traffic, but mobile conversion rate 2.1% vs desktop 4.3% (51% gap).

**Mobile-First Redesign**:
- **Performance**: Reduced page weight from 3.2MB to 950KB, LCP from 4.8s to 2.1s
- **Navigation**: Switched from hamburger to bottom tab bar (Shop, Search, Cart, Account)
- **Product Pages**: 
  - Full-width swipeable images (replaced small gallery)
  - Sticky "Add to Bag" bar appears after scroll
  - Accordion for descriptions (collapsed by default)
- **Checkout**: 
  - Apple Pay/Google Pay at top (47% of mobile orders now use mobile wallets)
  - Guest checkout default
  - Reduced from 4 steps to 2 steps
- **Forms**: 
  - Autofill enabled
  - Inline validation
  - Single-column layout

**Results (6 months)**:
- Mobile conversion rate: 2.1% → 3.7% (76% increase)
- Mobile bounce rate: 58% → 42% (better performance = more browsing)
- Add-to-cart rate (mobile): 8.2% → 13.1% (sticky CTA improvement)
- Checkout completion (mobile): 32% → 51% (streamlined flow + mobile wallets)
- Mobile revenue: +$2.8M annually
- ROI: 18:1 (redesign cost $155K)

### Example 2: B2B SaaS Lead Generation

**Context**: 65% mobile traffic, but 87% of demo requests from desktop (massive mobile conversion gap).

**Mobile-First Redesign**:
- **Homepage**:
  - Single hero with one clear CTA (replaced carousel)
  - Thumb-zone CTA placement
  - Eliminated 60% of content (desktop had too much)
- **Demo Form**:
  - Reduced from 9 fields to 4 (name, email, company, phone)
  - Added social login (Google, Microsoft)
  - Single-column, large inputs (48px height)
  - Removed CAPTCHA (replaced with honeypot)
- **Case Studies**:
  - Card-based layout (vs dense text)
  - Horizontal swipe to browse
  - Tap to expand full story
- **Performance**:
  - Lazy loaded images
  - Deferred non-critical JS
  - Moved from 5.2s to 2.3s load time

**Results (9 months)**:
- Mobile demo requests: 13% of total → 48% of total
- Mobile form completion rate: 18% → 61%
- Mobile bounce rate: 67% → 39%
- Demo request quality (mobile): Same as desktop (initial concern unfounded)
- Pipeline influenced: +$4.2M from mobile-sourced leads
- ROI: 12:1

### Example 3: Local Restaurant Chain

**Context**: 81% mobile traffic (heavily mobile due to local/food business), but poor mobile experience hurting orders.

**Mobile-First Redesign**:
- **Homepage**:
  - Geolocation: "Find nearest location" auto-detects
  - Click-to-call: Prominent phone button in header
  - "Order Now" CTA using third-party delivery APIs
  - Hours + menu preview
- **Menu Page**:
  - Category tabs (horizontal scroll)
  - Large food images (appetite appeal)
  - Filters: Dietary restrictions (vegan, gluten-free, etc.)
  - Tap item → modal with details + "Add to Order"
- **Location Pages**:
  - Embedded map (Apple Maps/Google Maps)
  - Directions button (opens native maps app)
  - "Call to order" button
  - Current wait times (if available)
- **Online Ordering**:
  - Guest checkout (no account required)
  - Saved addresses (if returning customer)
  - Pickup vs delivery toggle
  - Real-time order tracking

**Results (12 months)**:
- Mobile online orders: +142% (better UX = more digital orders)
- Click-to-call: 8,200 calls/month (direct conversion path)
- Directions requests: 12,400/month (drives in-person visits)
- Average order value (mobile): +$4.20 (easier ordering = more add-ons)
- Customer satisfaction: 3.8/5 → 4.6/5 (app store ratings)
- Revenue influenced: +$1.9M annually from mobile improvements

### Example 4: Healthcare Patient Portal

**Context**: 70% mobile access, but patients struggling with forms and appointment booking on mobile.

**Mobile-First Redesign**:
- **Dashboard**:
  - Card-based layout: Upcoming appointments, messages, prescriptions
  - Bottom tab nav: Home, Appointments, Messages, Records, Account
  - Large tap targets (many older users)
- **Appointment Booking**:
  - Reduced from 8 steps to 3 steps
  - Smart defaults: Last seen doctor, usual location
  - Calendar integration: "Add to calendar" after booking
  - SMS confirmation (vs just email)
- **Forms** (medical history, symptoms):
  - Conditional logic: Only ask relevant follow-ups
  - Voice input option (accessibility)
  - Save progress (long forms, return later)
  - Autofill known patient data
- **Messaging**:
  - WhatsApp-style interface (familiar UX)
  - Photo upload for symptoms (integrated camera)
  - Read receipts
  - Push notifications for responses
- **Accessibility**:
  - High contrast mode option
  - Text resizing (for vision-impaired)
  - Voice navigation (for motor-impaired)
  - WCAG AAA compliance

**Results (15 months)**:
- Mobile appointment bookings: +210% (from 18% to 56% of all bookings)
- Patient portal adoption: 42% → 71% (easier mobile = more usage)
- Form completion rate: 31% → 78% (progressive disclosure, save progress)
- Phone call volume: -35% (more self-service)
- Patient satisfaction: 7.2/10 → 8.9/10
- Staff time saved: 12 hours/day (less phone support, booking assistance)

### Example 5: News/Media Publisher

**Context**: 78% mobile traffic, but high bounce rates and low engagement time (poor reading experience).

**Mobile-First Redesign**:
- **Article Pages**:
  - Font size: 16px → 18px (more readable)
  - Line height: 1.4 → 1.6 (breathable)
  - Paragraph length: Reduced to 3-4 sentences
  - Images: Full-width, high-quality (immersive)
  - Sticky header: Hides on scroll down, reveals on scroll up (maximizes content space)
- **Navigation**:
  - Bottom nav: Home, Sections, Saved, Account
  - "Saved for Later" feature (offline reading via PWA)
  - Infinite scroll (vs pagination)
- **Performance**:
  - Lazy load images aggressively
  - Defer ads until content loads (speed priority)
  - AMP version for Google search traffic
  - LCP: 5.1s → 2.0s
- **Monetization** (ads optimized for mobile):
  - Fewer, larger ads (better UX, higher CPMs)
  - Native ads (blend with content)
  - Sticky footer ad (always visible but not intrusive)
- **Engagement Features**:
  - Article progress bar (top of screen)
  - Related articles: Swipeable cards at bottom
  - Push notifications: Breaking news, personalized topics
  - Social sharing: Native share sheet

**Results (18 months)**:
- Mobile bounce rate: 61% → 42%
- Time on site (mobile): 1:15 → 3:42 (minutes:seconds)
- Pages per session (mobile): 1.8 → 3.4
- Return visitor rate: 28% → 47% (saved articles, push notifications)
- Ad viewability: 42% → 68% (fewer, better-placed ads)
- Ad revenue: -8% impressions but +31% CPMs = +20% total revenue
- Subscription sign-ups (mobile): +165% (better experience = more conversions)

---

## Success Metrics

- **Performance**: LCP <2.5s, FID <100ms, CLS <0.1 (Core Web Vitals)
- **Mobile Conversion Parity**: Mobile conversion rate within 80% of desktop rate
- **Engagement**: Mobile bounce rate <45%, time on site within 70% of desktop
- **Form Completion**: Mobile form completion rate >60%
- **Page Weight**: Total page weight <1MB (2MB max)
- **Mobile Revenue**: Mobile represents >50% of total revenue (aligned with traffic)
- **User Satisfaction**: Mobile NPS >40, app store ratings >4.5/5

---

## Best Practices

- **Test on Real Devices**: Simulators miss touch accuracy, performance, and rendering issues
- **Thumb-Friendly**: Primary CTAs in bottom 50% of screen (natural thumb reach)
- **Performance First**: Speed is feature; every 0.1s improvement increases conversions
- **Progressive Enhancement**: Core experience works everywhere, enhancements where supported
- **One Thing Per Screen**: Mobile screens are small; focus on single primary action
- **Touch Targets**: Minimum 44x44px (Apple) or 48x48px (Google) for all tappable elements
- **Minimize Typing**: Use dropdowns, buttons, sliders instead of text inputs when possible
- **Visible Affordances**: Make it obvious what's tappable (buttons look like buttons)
- **Forgiving Interactions**: Undo options, confirmation dialogs for destructive actions
- **Context-Aware**: Adapt content and CTAs based on mobile usage context

---

## Common Pitfalls

- **Desktop-Down Thinking**: Starting with desktop design and "making it fit" mobile
- **Tiny Touch Targets**: <44px interactive elements frustrate users (fat finger errors)
- **Hamburger Everything**: Hiding all navigation hurts discoverability; balance with bottom nav
- **Popup Overload**: Intrusive popups anger mobile users (and hurt SEO)
- **Heavy Pages**: >2MB pages take forever on mobile data; ruthlessly optimize
- **Requiring Zoom**: <16px font forces pinch-to-zoom; minimum 16px to prevent
- **Hover Dependencies**: Hover states don't exist on mobile; use tap/press states
- **Long Forms**: 10+ fields on mobile = abandonment; minimize or multi-step
- **Neglecting Thumb Zones**: Primary actions at top of screen are hard to reach one-handed
- **Ignoring Performance**: "Works on my WiFi" doesn't mean it works on customer's 3G

---

**License**: © 2025 Adedayo Agarau. Licensed under CC BY-SA 4.0.
**Compatibility**: Optimized for Claude Code (Anthropic), ChatGPT (OpenAI), Gemini (Google), Copilot (Microsoft).
**Maintainer**: Adedayo Agarau | https://github.com/Chinoscode | https://linkedin.com/in/adedayo-agarau

## Screen Reader Content Optimization v1.0

**Purpose**: Design and optimize content specifically for screen reader users, ensuring semantic clarity, proper announcement patterns, and meaningful navigation landmarks.

---

**PROMPT:**

You are an accessibility content specialist focusing on screen reader optimization. Design content for {{interface_type}} that serves {{user_segment}} using assistive technologies including JAWS, NVDA, VoiceOver, and TalkBack.

=== INTERFACE ANALYSIS ===
Interface type: {{interface_type}} (web app/mobile app/desktop software)
Primary components: {{primary_components}}
Complex interactions: {{complex_interactions}}
Dynamic content areas: {{dynamic_content_areas}}
User tasks: {{user_tasks}}
Current accessibility level: {{current_wcag_level}}

=== SCREEN READER CONTEXT ===
Target screen readers: {{target_screen_readers}}
Platform distribution: {{platform_distribution}}
User expertise level: {{sr_user_expertise}} (novice/intermediate/expert)
Navigation preferences: {{navigation_preferences}}
Verbosity settings consideration: {{verbosity_consideration}}

=== CONTENT REQUIREMENTS ===

**Semantic Structure**:
- Page title pattern: {{page_title_pattern}}
- Heading hierarchy: {{heading_hierarchy}}
- Landmark regions: {{landmark_regions}}
- Skip navigation options: {{skip_nav_options}}

**Interactive Elements**:
- Button labels: {{button_label_strategy}}
- Link text: {{link_text_approach}}
- Form controls: {{form_control_labels}}
- Custom widgets: {{custom_widget_announcements}}

**Dynamic Content**:
- Live region strategy: {{live_region_strategy}}
- Update announcements: {{update_announcement_rules}}
- Loading states: {{loading_state_announcements}}
- Error notifications: {{error_notification_method}}

=== OUTPUT REQUIREMENTS ===

Generate comprehensive screen reader optimized content:

```yaml
page_structure:
  document_title:
    pattern: "{{action}} - {{context}} - {{app_name}}"
    example: "string"
    change_announcement: "how title updates are announced"

  landmark_regions:
    - role: "banner/navigation/main/complementary/contentinfo"
      label: "unique descriptive label"
      purpose: "what user finds here"

  heading_hierarchy:
    h1: "single, descriptive page purpose"
    h2_pattern: "major section labels"
    h3_pattern: "subsection organization"
    rationale: "navigation and scanning strategy"

interactive_elements:
  buttons:
    - visual_text: "string"
      accessible_name: "complete action description"
      aria_label: "if needed for clarification"
      context_needed: "boolean"
      example_announcement: "what screen reader says"

  links:
    - link_text: "descriptive, out-of-context meaningful"
      avoid: "click here, read more, learn more"
      context_provision: "how surrounding context helps"
      aria_label_override: "only when visual insufficient"

  form_fields:
    - label: "clear question or data requested"
      instructions: "additional guidance"
      error_association: "aria-describedby linkage"
      required_indication: "both visual and programmatic"
      example_announcement: "full field announcement"

dynamic_content:
  live_regions:
    - region_purpose: "string"
      aria_live: "polite/assertive/off"
      aria_atomic: "true/false"
      aria_relevant: "additions/removals/text/all"
      update_frequency: "expected timing"
      sample_announcement: "what user hears"

  status_messages:
    - type: "success/error/warning/info"
      role: "status/alert"
      timing: "immediate/delayed"
      message_template: "string"
      dismissal_announcement: "how to acknowledge"

visually_hidden_content:
  - purpose: "additional context for SR users"
    content: "string"
    placement: "where in DOM"
    when_needed: "use case description"

special_patterns:
  tables:
    caption: "table purpose"
    headers: "column/row header strategy"
    summary: "complex table description"
    navigation_hints: "how user should traverse"

  images:
    alt_text_strategy: "descriptive/functional/decorative"
    complex_image_approach: "long description method"
    svg_accessibility: "title and desc elements"

  carousels_slideshows:
    item_count_announcement: "slide X of Y"
    auto_advance_warning: "timing control notice"
    navigation_instructions: "keyboard and screen reader commands"

keyboard_navigation:
  focus_order: "logical sequence description"
  skip_links:
    - target: "main content/navigation/search"
      label: "descriptive action"
      visibility: "always/on-focus"

  custom_controls:
    - widget_type: "string"
      role: "ARIA role"
      keyboard_pattern: "expected keys"
      instruction_provision: "how user learns commands"
      state_announcements: "selected/expanded/checked/etc"

testing_scenarios:
  - scenario_name: "string"
    user_goal: "what they want to accomplish"
    expected_announcements: ["sequence of what SR says"]
    navigation_path: ["logical steps"]
    success_criteria: "how user knows they succeeded"
```

=== ANNOUNCEMENT PATTERNS ===

**Context-First Announcements**:
- Pattern: "{{context}} {{action}} {{state}}"
- Example: "Shopping cart, Remove item button, 3 items remaining"

**State Changes**:
- Before: "{{previous_state}}"
- After: "{{new_state}}, {{result}}"
- Confirmation: "{{action_completed}}"

**Error Recovery**:
- Immediate: "{{error_type}}, {{field_name}}, {{correction_guidance}}"
- Navigation: "{{error_count}} errors, jump to first error link"

=== VERBOSITY OPTIMIZATION ===

Design for multiple verbosity levels:

**Low Verbosity** (experienced users):
- Concise labels
- Minimal redundancy
- Assume ARIA role knowledge

**Medium Verbosity** (default):
- Complete context
- Action + result
- Clear state announcements

**High Verbosity** (novice users):
- Full descriptions
- Instructional hints
- Detailed navigation guidance

=== EXAMPLES ===

**Example 1: E-commerce Product Grid**
- interface_type: "responsive web app"
- primary_components: "product cards, filters, sorting, pagination"
- complex_interactions: "add to cart, wishlist toggle, quick view"
- dynamic_content_areas: "cart count, filter results, price updates"
- target_screen_readers: "JAWS, NVDA, VoiceOver"
- sr_user_expertise: "intermediate"

**Output**:
```yaml
page_structure:
  document_title: "Search Results - Laptops - TechStore"
  landmark_regions:
    - role: "search"
      label: "Product filters"
      purpose: "Refine search results by price, brand, features"
    - role: "main"
      label: "Product results"
      purpose: "24 laptops matching your criteria"
  heading_hierarchy:
    h1: "Laptops (24 results)"
    h2_pattern: "Product name - Brand Model"
    h3_pattern: "Price, Specifications, Reviews"

interactive_elements:
  buttons:
    - visual_text: "Add to Cart"
      accessible_name: "Add Dell XPS 13 to cart, $999"
      aria_label: null
      context_needed: true
      example_announcement: "Add Dell XPS 13 to cart, $999, button"

  links:
    - link_text: "Dell XPS 13 - 13.3 inch Full HD Laptop"
      avoid: "View Details"
      context_provision: "Product heading provides full context"
      aria_label_override: null

dynamic_content:
  live_regions:
    - region_purpose: "Cart update confirmation"
      aria_live: "polite"
      aria_atomic: "true"
      update_frequency: "on add/remove action"
      sample_announcement: "Dell XPS 13 added to cart. Cart now contains 3 items, total $2,547"
```

**Example 2: Multi-Step Form Wizard**
- interface_type: "web application wizard"
- primary_components: "progress indicator, form fields, navigation buttons"
- complex_interactions: "field validation, step progression, conditional fields"
- dynamic_content_areas: "error summary, progress updates, conditional questions"
- target_screen_readers: "JAWS, NVDA, VoiceOver, TalkBack"
- sr_user_expertise: "novice to intermediate"

**Output**:
```yaml
page_structure:
  document_title: "Step 2 of 4: Shipping Information - Checkout - TechStore"
  landmark_regions:
    - role: "navigation"
      label: "Checkout progress"
      purpose: "Current step and navigation"
    - role: "main"
      label: "Shipping information form"
      purpose: "Enter delivery address"

form_fields:
  - label: "Street address"
    instructions: "Do not include P.O. Box"
    error_association: "aria-describedby='street-error street-hint'"
    required_indication: "required aria-required='true'"
    example_announcement: "Street address, required, edit text, do not include P.O. Box"

dynamic_content:
  status_messages:
    - type: "error"
      role: "alert"
      timing: "immediate on submit"
      message_template: "Form has 3 errors. Fix errors to continue."
      dismissal_announcement: "Review and correct highlighted fields"
```

**Example 3: Dashboard with Real-Time Data**
- interface_type: "web dashboard"
- primary_components: "data widgets, charts, notification center, controls"
- complex_interactions: "chart exploration, data filtering, alert management"
- dynamic_content_areas: "live metrics, notifications, chart data updates"
- target_screen_readers: "JAWS, NVDA"
- sr_user_expertise: "expert"

**Output**:
```yaml
interactive_elements:
  custom_controls:
    - widget_type: "Line chart"
      role: "img"
      keyboard_pattern: "Arrow keys to navigate data points, Enter for details"
      instruction_provision: "Instructions button before chart"
      state_announcements: "January 2024: 1,234 users, up 12% from previous month"

dynamic_content:
  live_regions:
    - region_purpose: "Real-time metric updates"
      aria_live: "polite"
      aria_atomic: "false"
      aria_relevant: "text"
      update_frequency: "every 30 seconds"
      sample_announcement: "Active users: 1,247, updated"
```

---

**Accessibility Requirements**: Must comply with WCAG 2.1 Level AA (ideally AAA). Follow ARIA Authoring Practices Guide 1.2 for widget patterns. Ensure all content is perceivable, operable, understandable, and robust per POUR principles. Test with actual screen reader users across platforms. Provide text alternatives for all non-text content. Ensure logical reading order and focus management.

**Psychological Principles**: Reduced cognitive load through predictable patterns (consistency principle). Clear mental models through semantic structure (schema theory). Confidence building through informative feedback (self-efficacy). Reduced anxiety through proactive guidance (uncertainty reduction theory). Empowerment through comprehensive keyboard access (autonomy principle).

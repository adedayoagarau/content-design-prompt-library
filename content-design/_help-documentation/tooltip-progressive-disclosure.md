## Tooltip & Progressive Disclosure Design v1.0

**Purpose**: Design contextual help through tooltips and progressive disclosure that provides information exactly when users need it, without overwhelming the interface.

---

**PROMPT:**

You are designing tooltip and progressive disclosure systems for {{product_name}}, a {{product_type}} serving {{user_segment}}. Create layered help content that reveals information progressively, balancing clean interfaces with comprehensive guidance for users at different expertise levels.

=== INTERFACE CONTEXT ===

**Product Details**:
- Product name: {{product_name}}
- Interface type: {{interface_type}} (web app/mobile app/desktop/SaaS platform)
- User expertise range: {{expertise_range}} (beginner/mixed/expert)
- Interface complexity: {{complexity_level}} (simple/moderate/complex)
- Primary tasks: {{primary_tasks}}
- Learning curve: {{learning_curve}} (minimal/moderate/steep)

**Help Strategy**:
- Help philosophy: {{help_philosophy}} (just-in-time/comprehensive/minimal)
- Tooltip trigger: {{tooltip_trigger}} (hover/click/focus/contextual)
- Device support: {{device_support}} (desktop-only/mobile-optimized/responsive)
- Disclosure depth: {{disclosure_layers}} (2-layer/3-layer/4+ layer)

=== CONTENT DESIGN FRAMEWORK ===

**Tooltip Locations**:
- New features: {{new_feature_areas}}
- Complex controls: {{complex_ui_elements}}
- Technical terms: {{technical_terminology}}
- Input requirements: {{form_fields_needing_help}}
- Status indicators: {{status_icon_meanings}}
- Workflow steps: {{multi_step_processes}}

=== OUTPUT REQUIREMENTS ===

```yaml
tooltip_progressive_disclosure_system:
  tooltip_hierarchy:
    layer_1_basic_tooltip:
      purpose: "Quick definition or single-sentence explanation"
      character_limit: "60-80 characters ideal, 120 maximum"
      trigger: "Hover or info icon"
      display_duration: "Dismisses on mouse-out or after 5 seconds"

      content_structure:
        format: "[Concise definition or instruction]"
        examples:
          - "Your unique account identifier"
          - "Click to add collaborators to this project"
          - "Files larger than 10MB require compression"

      writing_guidelines:
        - "Start with action verb for interactive elements"
        - "Use present tense"
        - "Omit articles (a, an, the) when space is tight"
        - "No punctuation if single sentence"
        - "Avoid generic phrases like 'Click here for more info'"

    layer_2_expanded_tooltip:
      purpose: "Detailed explanation with context and examples"
      character_limit: "200-300 characters"
      trigger: "Click on info icon or 'Learn more' link"
      display_format: "Popover or modal overlay"

      content_structure:
        heading: "Clear, descriptive title (3-6 words)"
        body: "2-3 sentences explaining concept"
        example: "Concrete example or use case (optional)"
        link: "'Learn more' link to full documentation (optional)"

      template: |
        **[Feature/Concept Name]**

        [What it is and why it matters - 1 sentence]
        [How to use it - 1-2 sentences]

        Example: [Concrete scenario]

        [Learn more link]

    layer_3_full_documentation:
      purpose: "Comprehensive explanation with edge cases"
      trigger: "Explicit 'Learn more' or help center link"
      format: "Dedicated help article or documentation page"
      content_includes:
        - "Detailed explanation (200+ words)"
        - "Step-by-step instructions"
        - "Screenshots or video"
        - "FAQs and troubleshooting"
        - "Related topics"

  tooltip_content_patterns:
    feature_definition:
      layer_1: "Brief feature purpose"
      layer_2: "What it does, why use it, basic how-to"
      layer_3: "Complete feature documentation"

      example_api_rate_limiting:
        basic_tooltip: "Maximum API calls allowed per hour"
        expanded_tooltip: |
          **API Rate Limiting**

          We limit API calls to 1,000 per hour to ensure system stability.
          You can monitor your usage in the Dashboard under API Stats.

          Need more? Upgrade to Pro for 10,000 calls/hour.

        full_documentation: "[Link to API documentation page]"

    input_field_guidance:
      layer_1: "Field requirement or format"
      layer_2: "Why we need it, what we do with it, format examples"
      layer_3: "Privacy policy, data handling, troubleshooting"

      example_vat_number:
        basic_tooltip: "EU VAT ID for tax compliance (optional)"
        expanded_tooltip: |
          **VAT Number (Optional)**

          If you're an EU business, provide your VAT number to remove VAT charges.

          Format: Country code + 8-12 digits
          Example: DE123456789

          We'll validate it with the EU VIES system.

        validation_message: "Invalid VAT format. Should be: DE123456789"

    status_indicator:
      layer_1: "Current status meaning"
      layer_2: "What triggered status, expected duration, what to do"
      layer_3: "Troubleshooting guide for abnormal statuses"

      example_sync_status:
        basic_tooltip: "Last synced: 2 minutes ago"
        expanded_tooltip: |
          **Sync Status: Up to Date**

          Your data automatically syncs every 5 minutes when you're online.
          Last successful sync: 2 minutes ago.

          Not syncing? Check your internet connection or click Sync Now.

        error_state_tooltip: |
          **Sync Failed**

          We couldn't sync your latest changes.
          Reason: No internet connection

          Your work is saved locally and will sync when you're back online.
          [Retry Now] [View Details]

  progressive_disclosure_patterns:
    show_hide_details:
      default_state: "Collapsed, showing essential info only"
      trigger: "Show More / Show Less toggle or chevron"
      use_cases:
        - "Long descriptions in settings"
        - "Advanced configuration options"
        - "Detailed error explanations"
        - "Additional context for decisions"

      example_export_settings:
        visible: "Export as: [CSV ▼]"
        expanded: |
          Export as: [CSV ▼]

          ▾ Advanced Options
          • Include headers: [✓]
          • Date format: [MM/DD/YYYY ▼]
          • Delimiter: [Comma ▼]
          • Character encoding: [UTF-8 ▼]

    inline_expandable_help:
      format: "Link or icon within text that expands help inline"
      indicator: "Underlined dotted text or (?) icon"
      behavior: "Expands below or in popover, doesn't navigate away"

      example_permission_setting:
        default: "Set to Private (?)"
        expanded: |
          Set to Private (?)

          ↳ Private: Only you can view and edit
            Public: Anyone with the link can view
            Team: All team members can view and edit

    contextual_hints:
      timing: "Appear based on user behavior or task context"
      dismissible: "User can close and won't see again"
      triggers:
        - "First time using a feature"
        - "Hovering for 3+ seconds (indicates confusion)"
        - "Repeated incorrect actions"
        - "Reaching advanced feature area"

      example_first_time_hint:
        trigger: "User clicks 'Create Workflow' for first time"
        display: |
          💡 New to workflows?

          Workflows automate repetitive tasks. Start with our template
          library to see examples, or build from scratch.

          [Browse Templates] [Build From Scratch] [Don't show again]

  accessibility_implementation:
    screen_reader_support:
      tooltip_announcement: "Use aria-describedby for tooltip association"
      expanded_content: "Use aria-expanded state"
      live_regions: "Announce dynamic tooltip changes with aria-live"

    keyboard_navigation:
      focus_trigger: "Tooltips appear on keyboard focus, not just hover"
      escape_key: "ESC dismisses tooltip/popover"
      tab_order: "Expanded content doesn't break tab sequence"

    mobile_considerations:
      hover_alternative: "Tap info icon or long-press on mobile"
      touch_targets: "Minimum 44x44px tap areas"
      tooltip_position: "Avoid covering tapped element"
      dismissal: "Tap outside or explicit close button"

  writing_best_practices:
    clarity_principles:
      - "Front-load key information in first 3-5 words"
      - "Use specific verbs (configure, upload, select vs. use, manage)"
      - "Avoid technical jargon unless targeting expert users"
      - "Test readability: aim for Grade 8 reading level"

    consistency_rules:
      voice: "Match product voice (formal/casual)"
      terminology: "Use exact UI labels in tooltips"
      formatting: "Consistent capitalization and punctuation"
      structure: "Same pattern for similar element types"

    anti_patterns_to_avoid:
      - "Redundant tooltips that repeat visible labels"
      - "Vague help like 'More information about this field'"
      - "Tooltips that state the obvious: 'Save button saves your work'"
      - "Marketing copy in functional tooltips"
      - "Tooltips covering the element they describe"

  performance_metrics:
    success_indicators:
      - "Reduced 'What does this mean?' support tickets"
      - "Increased feature adoption rates"
      - "Lower abandonment at complex UI sections"
      - "Positive feedback on help usefulness"

    testing_protocol:
      - "A/B test tooltip presence vs. absence"
      - "Track tooltip interaction rates"
      - "Monitor feature completion with/without tooltips"
      - "Gather user feedback on help clarity"
```

=== EXAMPLES ===

**Example 1: Design Tool SaaS Platform**
- product_name: "DesignHub"
- interface_type: "Web-based design application"
- expertise_range: "Beginners to professional designers"
- complexity_level: "High (100+ tools and features)"
- tooltip_trigger: "Hover with 0.5s delay, click for expanded"

Layer 1 Tooltip: "Layer Blending Mode"
Layer 2 Expanded:
```
**Blending Modes**

Control how this layer interacts with layers beneath it.
Choose from 27 modes like Multiply, Screen, and Overlay.

Common uses:
• Multiply: Darken images
• Screen: Lighten images
• Overlay: Boost contrast

[View Blending Mode Guide]
```

Layer 3: Full documentation article with visual examples, use cases, and technical explanations.

**Example 2: Financial Dashboard**
- product_name: "MoneyMetrics"
- interface_type: "Financial analytics dashboard"
- expertise_range: "Finance professionals"
- complexity_level: "Moderate (specialized terminology)"
- tooltip_trigger: "Info icons throughout, expandable sections"

Layer 1 Tooltip (on "EBITDA" chart label): "Earnings Before Interest, Tax, Depreciation & Amortization"

Layer 2 Expanded:
```
**EBITDA**

A measure of company profitability before accounting for financing and
accounting decisions. Useful for comparing companies regardless of
capital structure.

Your EBITDA: $2.4M (↑15% vs. last quarter)

[Learn more about financial metrics]
```

Progressive Disclosure for "Configure Widget":
```
Visible:
Chart Type: [Line Chart ▼]  Period: [Last 30 Days ▼]

Expandable Section (▸ Advanced Options):
• Y-axis scale: [Auto ▼]
• Show annotations: [✓]
• Data smoothing: [ ]
• Compare to previous period: [✓]
```

**Example 3: Developer API Console**
- product_name: "CloudAPI Console"
- interface_type: "API management dashboard"
- expertise_range: "Developers (technical audience)"
- complexity_level: "High (technical product)"
- tooltip_trigger: "Hover for quick ref, click for code examples"

Layer 1 Tooltip (on "Webhook Endpoint" field): "HTTPS URL where we'll send event notifications"

Layer 2 Expanded:
```
**Webhook Endpoint**

The URL of your server that will receive POST requests when
events occur (e.g., payment_succeeded, user_created).

Requirements:
• Must be HTTPS
• Must return 200 status within 5 seconds
• Must verify webhook signature

Example: https://api.yoursite.com/webhooks

[View webhook implementation guide]
```

Inline Help Example:
"Your webhook must return a 200 status (what's this?) within 5 seconds..."

Click "what's this?" expands inline:
```
↳ A 200 status code indicates successful receipt. If we don't
  receive this, we'll retry the webhook up to 3 times over 24 hours.
```

---

**Accessibility Requirements**: All tooltips must be WCAG 3.0 Level AA compliant. Use semantic ARIA attributes (aria-describedby, aria-labelledby, aria-expanded). Ensure tooltips are keyboard accessible and appear on focus, not just hover. Provide 4.5:1 contrast ratio for tooltip text. Don't rely on hover alone (inaccessible on mobile/keyboard). Allow user to dismiss tooltips with ESC key. Ensure tooltip doesn't obscure the element it describes. Support screen reader announcements without interrupting user flow.

**Psychological Principles**: Progressive disclosure prevents cognitive overload (chunking). Just-in-time help improves learning retention. Layered information supports expertise diversity (novice to expert). Contextual placement leverages spatial memory. Optional disclosure respects user agency (control principle). Immediate feedback reduces uncertainty anxiety. Recognition-based triggers (icons, underlines) reduce guesswork.

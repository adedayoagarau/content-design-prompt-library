## Back & Forward Navigation Pattern Design v1.0

**Purpose**: Design clear, accessible back and forward navigation patterns that help users retrace steps, explore sequential content, and understand their position within flows or content series.

---

**PROMPT:**

You are designing back and forward navigation for {{context_type}} within {{site_type}}. Create navigation patterns that help users {{user_goal}}, understand their position in {{content_structure}}, and provide clear directional cues while maintaining {{brand_voice}}.

=== NAVIGATION CONTEXT ===
Context type: {{context_type}} (multi-step process/content series/pagination/wizard flow/gallery)
Site type: {{site_type}} (SaaS app/e-commerce/documentation/editorial/form flow)
Content structure: {{content_structure}} (linear/branching/circular/hierarchical)
Total steps/items: {{total_count}} (or range if variable)
User behavior: {{user_behavior}} (sequential/jumping/browsing/completing task)
Progress importance: {{progress_visibility}} (critical to show/optional/not needed)

=== NAVIGATION REQUIREMENTS ===
Navigation type: {{nav_type}} (back-next buttons/arrows/linked pages/keyboard shortcuts)
Disabled states: {{disabled_states}} (how to handle first/last items)
Skip functionality: {{skip_option}} (allow skipping/require completion/conditional)
Exit behavior: {{exit_behavior}} (save progress/confirm exit/allow anytime)
Persistence: {{persistence}} (remember position/start over each time)

=== CONTENT FLOW PATTERNS ===

**Flow Types**:
- **Linear sequence**: Article pages, tutorials, onboarding (1→2→3→4)
- **Wizard/form flow**: Multi-step forms, checkout, setup (required sequential)
- **Pagination**: Search results, product listings, archives (1...5...10)
- **Gallery/slideshow**: Image galleries, carousels, portfolios (1 of 20)
- **Branching**: Conditional logic determines next step

Current flow type: {{flow_type}}

**Navigation Patterns**:
- **Button-based**: "Back" / "Next" or "Previous" / "Continue"
- **Arrow-based**: ← / → symbols with optional labels
- **Linked**: "< Previous Article" / "Next Article >"
- **Inline**: Text links within content
- **Combination**: Multiple navigation methods

Preferred pattern: {{preferred_pattern}}

=== OUTPUT REQUIREMENTS ===

```yaml
back_forward_navigation:
  button_design:
    back_button:
      primary_label: "string (Back/Previous/< Back)"
      alternative_labels: ["option 1", "option 2", "option 3"]
      recommended: "label with rationale"
      icon_position: "left/right/none"
      icon_type: "arrow/chevron/none"

      context_variants:
        generic: "Back"
        specific: "< Previous Step"
        content_aware: "< Previous: [Title]"

      character_limit: 30
      mobile_adaptation: "same label/shorter/icon only"

    forward_button:
      primary_label: "string (Next/Continue/Save & Continue)"
      alternative_labels: []
      recommended: "label with rationale"
      icon_position: "right/left/none"

      context_variants:
        generic: "Next"
        action_oriented: "Continue"
        completion_focused: "Save & Continue"
        final_step: "Complete" or "Finish"

      mobile_adaptation: "full label/shortened/icon + label"

    button_placement:
      desktop_location: "bottom of content/top and bottom/floating/inline"
      mobile_location: "bottom sticky/top/bottom of content"
      spacing_between: "16-24px minimum"
      order: "back on left, forward on right (LTR languages)"

    button_hierarchy:
      primary_action: "forward/next button - filled/high contrast"
      secondary_action: "back button - outline/ghost/lower contrast"
      visual_weight: "forward button should be more prominent"
      size_consistency: "both buttons same height, width can vary"

  disabled_states:
    first_item:
      back_button: "disabled/hidden/replaced with alternative"
      visual_treatment: "reduced opacity/grey color/cursor not-allowed"
      aria_disabled: true
      tooltip: "optional - 'You're at the first step'"

    last_item:
      forward_button: "disabled/hidden/changes to final action"
      final_action_label: "Complete/Submit/Finish/Close"
      visual_treatment: "may remain enabled if action differs"

    disabled_styling:
      opacity: "0.5-0.6 for disabled state"
      cursor: "not-allowed"
      interaction: "no hover state"
      aria_disabled: "true for screen readers"

  progress_indication:
    current_position:
      format_options:
        numeric: "Step 3 of 5"
        visual: "progress bar with segments"
        textual: "Current Page: Getting Started"
        combined: "Step 3 of 5: Contact Information"

      recommended_format: "string with rationale"
      placement: "above navigation/between buttons/separate component"

    progress_bar:
      enabled: true/false
      style: "segmented/continuous/stepped"
      percentage_display: "show/hide completion percentage"
      interactive: "clickable to jump/display only"

    step_labels:
      display: "show all step names/current only/none"
      format: "horizontal list/vertical sidebar/breadcrumb-style"
      clickability: "allow jumping to previous steps/linear only"

  contextual_variations:
    multi_step_forms:
      back_label: "Back" or "< Previous"
      forward_label: "Continue" (mid-flow) / "Review Order" (final step)
      save_behavior: "auto-save on next/manual save/no save on back"
      validation: "validate before proceeding forward"
      error_handling: "prevent forward if validation fails"

    content_pagination:
      back_label: "< Previous Page" or "< Newer"
      forward_label: "Next Page >" or "Older >"
      page_numbers: "show adjacent page numbers (1 2 [3] 4 5)"
      jump_to_first_last: "« First / Last »" links
      infinite_scroll: "alternative to pagination buttons"

    article_series:
      back_label: "< Previous Article: [Title]"
      forward_label: "Next Article: [Title] >"
      title_truncation: "30 characters with ellipsis"
      series_context: "Part 3 of 7: [Current Article Title]"
      series_navigation: "link to series overview/table of contents"

    image_gallery:
      back_label: "← Previous" or icon only
      forward_label: "Next →" or icon only
      counter: "3 / 24" or "Image 3 of 24"
      keyboard_shortcuts: "arrow keys for navigation"
      thumbnail_strip: "clickable thumbnails for direct access"

    wizard_flows:
      back_label: "Back" or "< Previous Step"
      forward_label: "Continue" (early steps) / "Review" (final step before submit)
      step_indicator: "always visible, shows all steps"
      edit_completed_steps: "allow returning to change answers"
      exit_behavior: "warn about losing progress if exiting"

    video_player:
      back_label: "⏮ Previous Video"
      forward_label: "Next Video ⏭"
      auto_advance: "optional - play next automatically"
      countdown: "show countdown timer before auto-play"
      playlist_display: "show full playlist with current video highlighted"

  keyboard_navigation:
    shortcuts:
      back: "Left arrow key / Backspace / Alt+Left"
      forward: "Right arrow key / Space / Alt+Right"
      first: "Home key"
      last: "End key"
      exit: "Escape key"

    focus_management:
      on_navigation: "move focus to top of new content or first interactive element"
      focus_trap: "in modal wizards, trap focus until completion or exit"
      visible_focus: "clear focus indicators on navigation buttons"

    shortcut_hints:
      display: "show keyboard hints near buttons"
      format: "icon + key name (e.g., '→ Next')"
      progressive_disclosure: "show on hover or in help tooltip"

  mobile_adaptations:
    touch_gestures:
      swipe: "swipe right for back, swipe left for forward"
      swipe_enablement: "appropriate for galleries/pagination, not forms"
      visual_feedback: "show swipe direction hint on first interaction"

    button_sizing:
      minimum_size: "44x44px touch targets"
      full_width: "option for mobile - stacked full-width buttons"
      sticky_position: "fixed to bottom of viewport"

    simplified_labels:
      approach: "shorter text/icon + text/icon only"
      recommendation: "icon + text for clarity"
      examples: "← Back | Next →"

  error_prevention:
    unsaved_changes:
      trigger: "user clicks back with unsaved form data"
      modal_message: "You have unsaved changes. Are you sure you want to go back?"
      options: "Stay on Page / Discard Changes / Save & Go Back"

    required_fields:
      forward_blocking: "disable next until required fields complete"
      inline_validation: "show errors immediately"
      error_summary: "list all errors preventing progress"

    data_loss_warning:
      when: "multi-step form, going back may clear current step"
      message: "Going back will clear your answers on this page. Continue?"

  accessibility_implementation:
    semantic_html:
      back_button: "<button type='button'>"
      forward_button: "<button type='submit'> for forms, type='button' for navigation"
      container: "<nav aria-label='Pagination navigation'>"

    aria_attributes:
      disabled_state: "aria-disabled='true'"
      current_page: "aria-current='page' on current item in pagination"
      labels: "aria-label for context (e.g., 'Go to previous article')"

    screen_reader_announcements:
      on_navigation: "announce new page/step loaded"
      progress: "announce 'Step 3 of 5' when position changes"
      disabled_reason: "announce why button is disabled if not obvious"

    focus_requirements:
      visible_indicators: "2px outline minimum, 3:1 contrast ratio"
      focus_order: "logical sequence matching visual layout"
      skip_option: "allow skipping repetitive navigation"

  analytics_tracking:
    events_to_track:
      - event: "navigation_back"
        properties: ["from_step", "to_step", "method", "time_on_step"]

      - event: "navigation_forward"
        properties: ["from_step", "to_step", "validation_errors", "time_on_step"]

      - event: "navigation_abandoned"
        properties: ["last_step", "completion_percentage", "time_in_flow"]

    insights:
      drop_off_points: "which steps have highest back navigation rates"
      completion_time: "average time per step, total flow time"
      error_patterns: "which validations cause most forward blocks"
      skip_behavior: "if skipping allowed, which steps skipped most"
```

=== LABEL WRITING GUIDELINES ===

**Generic vs. Specific Labels**:
- Generic: "Back" / "Next" - clear but context-free
- Specific: "< Previous Step" / "Continue to Payment" - adds context
- Content-aware: "< Previous: Setup" / "Next: Review >" - maximum context
- Recommendation: Use specific or content-aware for complex flows

**Action-Oriented Labels**:
- ✓ "Continue to Payment"
- ✓ "Save & Continue"
- ✓ "Review Your Order"
- ✗ "Next" (less clear what happens)

**Directional Indicators**:
- Arrow symbols: ← → (universal understanding)
- Text cues: "< Previous" / "Next >"
- Icon + text: "← Back" / "Continue →"
- Recommendation: Combine icon and text for clarity

**Final Step Labels**:
- "Complete", "Finish", "Submit", "Confirm Purchase"
- Should clearly indicate this is the final action
- More specific than "Next" or "Continue"

=== EXAMPLES ===

**Example 1: Multi-Step Checkout Process**
- context_type: "multi-step checkout"
- site_type: "e-commerce"
- content_structure: "linear with 4 steps"
- total_count: "4 steps"
- user_behavior: "completing purchase task"
- flow_type: "wizard flow with validation"

**Output**:
```yaml
back_forward_navigation:
  button_design:
    back_button:
      primary_label: "Back"
      recommended: "Simple 'Back' - user can see step names in progress indicator"
      icon_position: "left"
      icon_type: "arrow (←)"
      mobile_adaptation: "← Back"

    forward_button:
      primary_label: "Continue to [Next Step Name]"
      alternative_labels: ["Continue", "Next", "Save & Continue"]
      recommended: "'Continue to [Step Name]' - provides clear context for what's next"

      context_variants:
        step_1: "Continue to Shipping"
        step_2: "Continue to Payment"
        step_3: "Review Order"
        step_4: "Place Order"

      mobile_adaptation: "Continue"

    button_placement:
      desktop_location: "bottom of form, right-aligned with back on left"
      mobile_location: "sticky bottom bar, full width"
      spacing_between: "16px"
      order: "← Back | Continue to Payment →"

    button_hierarchy:
      primary_action: "Continue button - filled, brand color"
      secondary_action: "Back button - outline or ghost"
      visual_weight: "Continue button 70% wider, more prominent"

  disabled_states:
    first_item:
      back_button: "hidden on step 1"
      rationale: "no previous step exists, hiding is clearer than disabling"

    last_item:
      forward_button: "changes to 'Place Order' with different styling"
      final_action_label: "Place Order"
      visual_treatment: "high contrast, possibly different color for final action"

  progress_indication:
    current_position:
      format_options:
        visual: "stepped progress bar"
        textual: "Step labels shown: Cart → Shipping → Payment → Review"

      recommended_format: "Horizontal stepped progress with clickable previous steps"
      placement: "top of page, above form content"

    progress_bar:
      enabled: true
      style: "segmented with 4 steps"
      interactive: "can click previous steps to go back and edit"

    step_labels:
      display: "all 4 step names visible"
      format: "1. Cart → 2. Shipping → 3. Payment → 4. Review"
      clickability: "can return to previous completed steps"

  contextual_variations:
    multi_step_forms:
      back_label: "← Back"
      forward_label: "Continue to [Next Step]"
      save_behavior: "auto-save cart contents, back preserves data"
      validation: "validate current step before allowing forward"
      error_handling: "show inline errors, disable continue until fixed"

  error_prevention:
    unsaved_changes:
      trigger: "not applicable - form auto-saves"

    required_fields:
      forward_blocking: "disable Continue until all required fields valid"
      inline_validation: "real-time validation as user types"
      error_summary: "show list of errors at top when user clicks Continue"

  accessibility_implementation:
    aria_attributes:
      forward_button: "aria-label='Continue to shipping information'"
      disabled_state: "aria-disabled='true' with aria-describedby pointing to error list"

  analytics_tracking:
    events_to_track:
      - event: "checkout_back"
        properties: ["from_step", "to_step", "cart_value"]
      - event: "checkout_continue"
        properties: ["step_number", "validation_errors_count", "time_on_step"]
```

**Example 2: Documentation Article Series**
- context_type: "sequential content series"
- site_type: "technical documentation"
- content_structure: "linear series of 8 guides"
- total_count: "8 articles"
- user_behavior: "reading sequentially or jumping"
- flow_type: "article series with related content"

**Output**:
```yaml
back_forward_navigation:
  button_design:
    back_button:
      primary_label: "< Previous: [Article Title]"
      recommended: "Show previous article title for context"
      icon_position: "left"
      icon_type: "chevron (<)"

      context_variants:
        content_aware: "< Previous: Installing the SDK"

      character_limit: 40
      mobile_adaptation: "< Previous"

    forward_button:
      primary_label: "Next: [Article Title] >"
      recommended: "Show next article title to build information scent"

      context_variants:
        content_aware: "Next: Authentication Setup >"

      character_limit: 40
      mobile_adaptation: "Next >"

    button_placement:
      desktop_location: "bottom of article, full width bar with back left, next right"
      mobile_location: "same - bottom of article"
      spacing_between: "space-between (flex justify)"

    button_hierarchy:
      primary_action: "both buttons equal weight - users may want either"
      visual_weight: "same size, same style (outlined)"

  disabled_states:
    first_item:
      back_button: "hidden"
      rationale: "first article in series"

    last_item:
      forward_button: "replaced with 'Return to Docs Home' or related content links"

  progress_indication:
    current_position:
      format_options:
        textual: "Guide 3 of 8: Getting Started with Authentication"

      recommended_format: "Part X of Y with current article title"
      placement: "top of article, in breadcrumb area or separate indicator"

    progress_bar:
      enabled: false
      rationale: "less critical for documentation - users may read non-linearly"

    step_labels:
      display: "series table of contents in sidebar"
      format: "vertical list with checkmarks for completed articles"
      clickability: "all articles clickable"

  contextual_variations:
    article_series:
      back_label: "< Previous: Installing the SDK"
      forward_label: "Next: Authentication Setup >"
      title_truncation: "40 characters"
      series_context: "Part 3 of 8: Getting Started with Authentication"
      series_navigation: "Link to series overview in sidebar"

  keyboard_navigation:
    shortcuts:
      back: "Alt+Left or Left arrow"
      forward: "Alt+Right or Right arrow"
      series_home: "Alt+Home"

    shortcut_hints:
      display: "show keyboard shortcuts in footer navigation area"
      format: "Keyboard shortcuts: ← Prev | Next → | Esc Series Home"

  analytics_tracking:
    events_to_track:
      - event: "docs_navigation"
        properties: ["from_article", "to_article", "navigation_method", "reading_time"]
      - event: "series_completion"
        properties: ["series_name", "articles_read", "time_to_complete"]
```

**Example 3: Image Gallery / Portfolio**
- context_type: "image gallery"
- site_type: "photographer portfolio"
- content_structure: "gallery of 45 images"
- total_count: "45 images"
- user_behavior: "browsing, may jump around"
- flow_type: "gallery with lightbox view"

**Output**:
```yaml
back_forward_navigation:
  button_design:
    back_button:
      primary_label: "←"
      alternative_labels: ["← Previous", "‹"]
      recommended: "Icon only (←) for minimal UI in lightbox"
      icon_position: "standalone"
      mobile_adaptation: "same - icon only"

    forward_button:
      primary_label: "→"
      alternative_labels: ["Next →", "›"]
      recommended: "Icon only (→) for clean gallery interface"
      icon_position: "standalone"
      mobile_adaptation: "same - icon only"

    button_placement:
      desktop_location: "left and right edges of image, vertically centered"
      mobile_location: "same, with swipe gesture support"
      button_style: "semi-transparent circle, appears on hover"

    button_hierarchy:
      primary_action: "both equal - exploration in either direction"
      visual_weight: "40px circular buttons, white icons on dark semi-transparent background"

  disabled_states:
    first_item:
      back_button: "disabled (reduced opacity)"
      visual_treatment: "opacity: 0.3"
      aria_disabled: true

    last_item:
      forward_button: "disabled or loops to first image"
      visual_treatment: "opacity: 0.3 if disabled"

  progress_indication:
    current_position:
      format_options:
        numeric: "3 / 45"

      recommended_format: "X / Total"
      placement: "top center of lightbox overlay"

    progress_bar:
      enabled: false
      rationale: "not needed for browsing gallery"

    step_labels:
      display: "thumbnail strip at bottom"
      format: "horizontal scrolling thumbnails"
      clickability: "click thumbnail to jump to that image"

  contextual_variations:
    image_gallery:
      back_label: "← Previous"
      forward_label: "Next →"
      counter: "3 / 45"
      keyboard_shortcuts: "arrow keys"
      thumbnail_strip: "scrollable thumbnails, current image highlighted"

  keyboard_navigation:
    shortcuts:
      back: "Left arrow key"
      forward: "Right arrow key"
      first: "Home key"
      last: "End key"
      exit: "Escape key to close lightbox"

    focus_management:
      on_navigation: "focus remains on image container for continued keyboard nav"

  mobile_adaptations:
    touch_gestures:
      swipe: "swipe right for previous, swipe left for next"
      swipe_enablement: true
      visual_feedback: "image slides in direction of swipe"

    button_sizing:
      minimum_size: "48x48px touch targets"
      sticky_position: "always visible on mobile"

  accessibility_implementation:
    aria_attributes:
      back_button: "aria-label='Previous image: [Image Title]'"
      forward_button: "aria-label='Next image: [Image Title]'"
      current_image: "aria-live='polite' announces 'Image 3 of 45: [Title]'"

  analytics_tracking:
    events_to_track:
      - event: "gallery_navigation"
        properties: ["from_image", "to_image", "navigation_method", "viewing_time"]
      - event: "gallery_completion"
        properties: ["images_viewed", "total_images", "completion_rate"]
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Use semantic button elements with clear accessible names. Provide visible focus indicators (minimum 2px outline, 3:1 contrast ratio). Support keyboard navigation with arrow keys, Tab, and Enter. Use aria-disabled for disabled states rather than removing from tab order. Announce state changes to screen readers (new page loaded, progress updated). Ensure touch targets are minimum 44x44px on mobile. Maintain 4.5:1 color contrast for button text and icons. Use aria-current for indicating current position in sequences. Provide skip links for repetitive navigation. Announce loading states if navigation causes delay.

**Psychological Principles**: Directional affordances (arrows indicate forward/back universally). Consistency principle (back always left, forward always right in LTR languages). Feedback loops (immediate response to navigation action). Progressive disclosure (show position/progress only when relevant). Loss aversion (warning before data loss when going back). Completion motivation (progress indicators encourage finishing). Recognition over recall (showing titles of adjacent content). Fitts's Law (larger, edge-positioned buttons easier to target). Miller's Law (showing 5-7 pagination numbers maximum). Spatial memory (consistent button positions aid navigation learning).

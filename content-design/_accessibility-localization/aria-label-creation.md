## ARIA Label Creation System v1.0

**Purpose**: Design effective ARIA labels, descriptions, and live region announcements that provide essential context for assistive technology users without creating redundancy or verbosity.

---

**PROMPT:**

You are an accessibility specialist focusing on ARIA (Accessible Rich Internet Applications) implementation. Create ARIA labels and attributes for {{component_type}} in {{application_context}} serving {{user_base}}.

=== COMPONENT ANALYSIS ===
Component type: {{component_type}} (button/link/form/widget/modal/navigation/etc)
Component purpose: {{component_purpose}}
Visual label present: {{visual_label_exists}} (yes/no/partial)
Context availability: {{context_availability}}
Interaction pattern: {{interaction_pattern}}
State changes: {{state_changes}}
Dynamic updates: {{dynamic_updates}}

=== ARIA ATTRIBUTE SELECTION ===
Primary need: {{primary_need}} (label/description/role/state/property)
Visible label adequacy: {{visible_label_adequacy}}
Additional context needed: {{additional_context}}
Relationship complexity: {{relationship_complexity}}
Live region requirement: {{live_region_requirement}}

=== DECISION FRAMEWORK ===

**Labeling Hierarchy** (use in order of preference):
1. Visible native HTML label element
2. aria-labelledby (reference existing visible text)
3. aria-label (when visible label inadequate)
4. title attribute (last resort, limited accessibility)

**Description Hierarchy**:
1. Associated visible text (instructions, errors)
2. aria-describedby (reference existing descriptive text)
3. aria-description (when visible description inadequate)
4. title attribute (avoid for accessibility)

=== OUTPUT REQUIREMENTS ===

Generate complete ARIA implementation:

```yaml
component_assessment:
  component_id: "unique identifier"
  component_type: "specific widget or element"
  current_label_state: "what's currently available"
  accessibility_gap: "what's missing for AT users"

aria_labeling:
  method: "aria-label/aria-labelledby/native label"
  rationale: "why this method chosen"

  aria_label:
    use_when: "no visible label or visible label insufficient"
    text: "complete descriptive label"
    character_count: "number"
    language: "lang attribute if different from page"
    avoids: "redundancy with visible text"

  aria_labelledby:
    use_when: "visible text exists that can serve as label"
    referenced_ids: ["id1", "id2"]
    combined_text: "what AT announces"
    order_matters: "true/false and why"

  aria_label_vs_labelledby:
    preference: "labelledby preferred - stays current when visible text updates"
    aria_label_override: "completely replaces accessible name"
    labelledby_advantage: "concatenates multiple visible text sources"

aria_description:
  method: "aria-describedby/aria-description"

  aria_describedby:
    use_when: "additional context exists on page"
    referenced_ids: ["help-text-id", "error-id"]
    description_text: "full concatenated description"
    announcement_timing: "after label, when focused"

  aria_description:
    use_when: "need description not visible on page"
    text: "supplemental information"
    difference_from_label: "label identifies, description explains"

roles_and_states:
  role:
    attribute: "ARIA role if not semantic HTML"
    value: "button/dialog/menu/tablist/etc"
    justification: "why semantic HTML insufficient"

  states:
    aria_expanded:
      applicable: "boolean"
      values: "true/false"
      announcement: "expanded/collapsed"

    aria_pressed:
      applicable: "boolean"
      values: "true/false/mixed"
      announcement: "pressed/not pressed"

    aria_selected:
      applicable: "boolean"
      values: "true/false"
      announcement: "selected/not selected"

    aria_checked:
      applicable: "boolean"
      values: "true/false/mixed"
      announcement: "checked/not checked/mixed"

    aria_disabled:
      applicable: "boolean"
      values: "true/false"
      announcement: "dimmed/disabled"

    aria_hidden:
      applicable: "boolean"
      use_case: "hide decorative or redundant content from AT"
      warning: "never hide focusable elements"

  properties:
    aria_required:
      value: "true/false"
      visual_indicator: "must have visual required indicator too"

    aria_invalid:
      value: "true/false/grammar/spelling"
      error_message: "linked via aria-describedby"

    aria_haspopup:
      value: "true/menu/listbox/tree/grid/dialog"
      instruction: "what user should expect"

live_regions:
  aria_live:
    politeness: "off/polite/assertive"
    use_cases:
      polite: "status updates, non-urgent notifications"
      assertive: "important alerts, errors, time-sensitive"
      off: "not announced (default)"

  aria_atomic:
    value: "true/false"
    true_means: "announce entire region"
    false_means: "announce only changed nodes"

  aria_relevant:
    value: "additions/removals/text/all"
    default: "additions text"
    customize_when: "need removal or all announcements"

  role_alert:
    usage: "implicit aria-live='assertive' aria-atomic='true'"
    best_for: "critical errors, warnings, urgent updates"
    example: "Form submission error"

  role_status:
    usage: "implicit aria-live='polite' aria-atomic='true'"
    best_for: "non-critical status updates"
    example: "Item added to cart"

relationship_attributes:
  aria_controls:
    referenced_id: "id of controlled element"
    use_case: "button controls panel, tab controls tabpanel"
    announcement: "helps user understand relationship"

  aria_owns:
    referenced_ids: ["id1", "id2"]
    use_case: "define parent-child in DOM when visual structure differs"
    accessibility_tree: "how AT sees structure"

  aria_flowto:
    referenced_id: "next element in reading order"
    use_case: "when DOM order differs from reading order"
    rare_usage: "usually rely on DOM order"

implementation_examples:
  html_snippet: "complete code example"
  screen_reader_output: "what JAWS/NVDA/VoiceOver announces"
  keyboard_interaction: "expected keyboard behavior"
  focus_management: "focus indication and movement"

common_patterns:
  icon_buttons:
    html: "<button aria-label='Delete item'><svg aria-hidden='true'>...</svg></button>"
    rationale: "icon visual only, aria-label provides text alternative"

  search_landmarks:
    html: "<form role='search' aria-label='Site search'><label for='search'>Search</label>...</form>"
    rationale: "role='search' for landmark, label for input field"

  custom_select:
    html: "<div role='combobox' aria-expanded='false' aria-haspopup='listbox' aria-labelledby='label-id'>"
    states: "aria-expanded changes on open/close"

  modal_dialogs:
    html: "<div role='dialog' aria-modal='true' aria-labelledby='title-id' aria-describedby='desc-id'>"
    focus_trap: "required for aria-modal"
    close_mechanism: "visible and accessible close button"

  tabs:
    html: "<div role='tablist' aria-label='Settings'><button role='tab' aria-selected='true' aria-controls='panel1'>"
    keyboard: "arrow keys navigate tabs, tab key moves to panel"

validation_checklist:
  - no_redundancy: "aria-label doesn't duplicate visible label"
  - context_appropriate: "enough info without over-explaining"
  - state_sync: "ARIA states match visual states"
  - language_match: "lang attribute when needed"
  - tested_with_at: "verified with actual screen readers"
  - dynamic_updates: "live regions work correctly"
  - focus_management: "focus moves logically"
  - keyboard_accessible: "all interactions keyboard accessible"
```

=== ANTI-PATTERNS TO AVOID ===

**Redundancy**:
- ❌ `<button aria-label="Submit">Submit</button>` (redundant)
- ✅ `<button>Submit</button>` (sufficient)

**Over-specification**:
- ❌ `<button aria-label="Submit button">Submit</button>` (screen reader already says "button")
- ✅ `<button>Submit</button>` (role announced automatically)

**Aria-hidden on focusable elements**:
- ❌ `<button aria-hidden="true">Click me</button>` (hidden but focusable - confusing)
- ✅ `<button>Click me</button>` or hide completely with `display: none`

**Generic labels**:
- ❌ `<button aria-label="Click here">...</button>` (not descriptive)
- ✅ `<button aria-label="Download invoice #12345">...</button>` (specific)

**Breaking semantic HTML**:
- ❌ `<div role="button">Submit</div>` (use semantic HTML)
- ✅ `<button>Submit</button>` (native semantics)

=== EXAMPLES ===

**Example 1: Social Media Share Buttons**
- component_type: "button group"
- component_purpose: "share content to social platforms"
- visual_label_exists: "no - icon only buttons"
- context_availability: "article title visible above"
- interaction_pattern: "click opens share dialog"

**Output**:
```yaml
aria_labeling:
  method: "aria-label"
  rationale: "Icon buttons with no visible text need text alternatives"

  icon_buttons:
    - button_id: "share-twitter"
      visual: "Twitter bird icon"
      aria_label: "Share article on Twitter"
      html: "<button aria-label='Share \"10 Accessibility Tips\" on Twitter'><svg aria-hidden='true'>...</svg></button>"
      screen_reader_output: "Share \"10 Accessibility Tips\" on Twitter, button"

    - button_id: "share-facebook"
      visual: "Facebook F icon"
      aria_label: "Share article on Facebook"
      html: "<button aria-label='Share \"10 Accessibility Tips\" on Facebook'><svg aria-hidden='true'>...</svg></button>"

common_patterns:
  svg_accessibility:
    method: "aria-hidden='true' on SVG"
    rationale: "Icon is decorative, aria-label on button provides meaning"
```

**Example 2: Custom Autocomplete Search**
- component_type: "combobox widget"
- component_purpose: "search with suggestions"
- visual_label_exists: "yes - 'Search products'"
- context_availability: "placeholder shows example searches"
- interaction_pattern: "type to filter, arrow keys to select suggestion"
- state_changes: "expanded/collapsed, X results available"
- dynamic_updates: "suggestion list updates on input"

**Output**:
```yaml
aria_labeling:
  method: "aria-labelledby for visible label"
  html: "<label id='search-label'>Search products</label><input type='text' role='combobox' aria-labelledby='search-label' aria-autocomplete='list' aria-expanded='false' aria-controls='suggestions-list'>"

roles_and_states:
  role:
    attribute: "combobox"
    value: "combobox"
    justification: "Custom autocomplete behavior requires ARIA widget role"

  states:
    aria_expanded:
      values: "false when closed, true when suggestions visible"
      announcement: "collapsed/expanded, 5 suggestions available"

    aria_activedescendant:
      value: "ID of currently highlighted suggestion"
      updates: "as user arrows through suggestions"

live_regions:
  aria_live:
    element: "status message below input"
    politeness: "polite"
    announcement: "5 results available, use arrow keys to navigate"
    html: "<div role='status' aria-live='polite' aria-atomic='true'>5 results</div>"

implementation_examples:
  html_snippet: |
    <div class="search-wrapper">
      <label id="search-label">Search products</label>
      <input
        type="text"
        role="combobox"
        aria-labelledby="search-label"
        aria-autocomplete="list"
        aria-expanded="false"
        aria-controls="suggestions-list"
        aria-activedescendant=""
      >
      <ul id="suggestions-list" role="listbox" aria-label="Suggestions">
        <li role="option" id="suggestion-1">Laptop</li>
        <li role="option" id="suggestion-2">Laptop stand</li>
      </ul>
      <div role="status" aria-live="polite" aria-atomic="true"></div>
    </div>

  screen_reader_output: "Search products, combobox, autocomplete list, collapsed"
  keyboard_interaction: "Down arrow expands and moves to first suggestion, Escape closes"
```

**Example 3: Dashboard Widget with Live Updates**
- component_type: "status widget"
- component_purpose: "show real-time active users"
- visual_label_exists: "yes - 'Active Users' heading"
- context_availability: "number updates every 30 seconds"
- dynamic_updates: "number changes, no user action needed"

**Output**:
```yaml
aria_labeling:
  method: "aria-labelledby"
  referenced_ids: ["widget-heading"]
  html: "<section aria-labelledby='widget-heading'><h2 id='widget-heading'>Active Users</h2>..."

live_regions:
  aria_live:
    politeness: "polite"
    rationale: "Updates important but not urgent, don't interrupt user"

  aria_atomic:
    value: "true"
    rationale: "Announce full count each time, not just the change"

  implementation:
    html: "<div role='status' aria-live='polite' aria-atomic='true'><span id='user-count'>1,247</span> users active</div>"
    announcement: "1,247 users active"
    update_frequency: "every 30 seconds maximum to avoid announcement fatigue"

  optimization:
    throttling: "Only announce if change > 5% to reduce noise"
    silence_option: "User preference to disable live updates"
```

---

**Accessibility Requirements**: Must comply with WCAG 2.1 Level AA and follow WAI-ARIA Authoring Practices Guide 1.2. Use ARIA only when semantic HTML is insufficient (First Rule of ARIA). Ensure all ARIA states are synchronized with visual states. Test with JAWS, NVDA, VoiceOver, and TalkBack. Validate ARIA implementation with automated tools (axe, WAVE) and manual screen reader testing. Never hide focusable content with aria-hidden="true".

**Psychological Principles**: Appropriate labeling reduces cognitive load (cognitive load theory). Consistent ARIA patterns build mental models (schema theory). Timely live region announcements provide situational awareness (attention theory). Clear state announcements reduce uncertainty (information theory). Logical relationships support conceptual understanding (gestalt principles).

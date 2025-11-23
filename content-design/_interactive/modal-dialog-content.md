## Modal Dialog Content Framework

**Purpose**: Design focused, actionable modals that respect user context and attention.

---

**PROMPT:**

Create modal content for {{modal_purpose}}.

=== MODAL PARAMETERS ===
Purpose: {{modal_purpose}} (confirmation, information, data input, warning)
User trigger: {{trigger}} (user action, system event, interruption)
Urgency: {{urgency}} (blocking, non-blocking, time-sensitive)
Complexity: {{complexity}} (simple choice, multi-step, data-heavy)
User context: {{context}} (deep in flow, just started, passive browsing)

=== MODAL ANATOMY ===

**Header:**
- Title (clear action)
- Optional: icon (supportive, not decorative)
- Close button (always visible)
- Optional: progress indicator (multi-step)

**Body:**
- Description (why are we here?)
- Content (form, message, list)
- Visuals (illustration, preview)

**Footer:**
- Primary action (right, LTR)
- Secondary action (left)
- Tertiary actions (styled links)

=== OUTPUT STRUCTURE ===

```yaml
modal_content:
  header:
    title: "string (max 60 chars)"
    icon:
      show: "boolean"
      name: "string (info/warning/error/success)"
      color: "brand/warning/error"
    close_button:
      show: "boolean"
      position: "top_right"
      aria_label: "Close dialog"
      
  body:
    description:
      headline: "string (max 100 chars)"
      body: "string (max 300 chars)"
      visual:
        type: "illustration/screenshot/preview"
        
    content:
      type: "form/message/list/progress"
      
  footer:
    primary_action:
      label: "string (max 30 chars)"
      action: "string"
      style: "primary/destructive"
      
    secondary_action:
      label: "string (max 30 chars)"
      action: "string"
      style: "secondary/ghost"
      
  behavior:
    backdrop_click_dismisses: "boolean"
    escape_key_dismisses: "boolean"
    auto_focus: "string (element to focus)"
    focus_trap: "boolean"
```

=== EXAMPLES ===

**Example 1: Delete Confirmation**
- modal_purpose: "confirmation"
- trigger: "user clicked delete"
- urgency: "blocking"
- complexity: "simple choice"

**Example 2: Multi-Step Onboarding**
- modal_purpose: "information"
- trigger: "first login"
- urgency: "non-blocking"
- complexity: "multi-step"

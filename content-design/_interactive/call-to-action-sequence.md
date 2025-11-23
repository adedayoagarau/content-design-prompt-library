## CTA Sequence Design Framework

**Purpose**: Orchestrate multiple CTAs across a flow to guide users without overwhelming them.

---

**PROMPT:**

Design a CTA sequence for {{flow_name}}.

=== FLOW PARAMETERS ===
Flow: {{flow_name}} (e.g., "checkout", "onboarding", "setup")
Steps: {{step_count}} total steps
Current step: {{current_step}} (1-indexed)
User progression: {{progression_type}} (linear, branching, loop)
Exit points: {{exit_points}} (can user leave and return?)

=== CTA HIERARCHY RULES ===

**Primary CTA:**
- One per screen (exception: choice screens)
- Action-oriented: "Continue", "Save", "Confirm"
- Visual prominence: high contrast, larger size
- Position: right (LTR) or bottom (mobile)

**Secondary CTA(s):**
- 0-2 per screen
- Alternative paths: "Save draft", "Skip", "Back"
- Visual treatment: outlined or text link
- Position: left of primary or below

**Tertiary CTA(s):**
- 0-3 per screen
- Escape hatches: "Cancel", "Exit", "Get help"
- Visual treatment: text link, subtle
- Position: footer or header

=== OUTPUT STRUCTURE ===

```json
{
  "current_step": {
    "step_number": "integer",
    "step_name": "string",
    "ctas": {
      "primary": {
        "label": "string",
        "character_count": "integer",
        "action": "string",
        "is_disabled": "boolean",
        "disabled_reason": "string",
        "loading_state": {
          "label": "string",
          "duration_estimate": "string"
        }
      },
      "secondary": [
        {
          "label": "string",
          "action": "string",
          "visual_weight": "medium/low"
        }
      ],
      "tertiary": [
        {
          "label": "string",
          "action": "string",
          "visual_weight": "low"
        }
      ]
    }
  },
  "flow_considerations": {
    "back_button_behavior": "string",
    "breadcrumb_navigation": "boolean",
    "save_progress_indication": "string",
    "mobile_sticky_cta": "boolean"
  }
}
```

=== EXAMPLES ===

**Example 1: Checkout Flow (Step 3 of 4)**
- flow_name: "checkout"
- step_count: 4
- current_step: 3
- step_name: "Payment"
- step_purpose: "collect payment info"
- progression_type: "linear"

**Example 2: Onboarding (Step 2 of 6)**
- flow_name: "onboarding"
- step_count: 6
- current_step: 2
- step_name: "Team Setup"
- step_purpose: "invite team members"
- progression_type: "branching"

## Button Label Generation System

**Purpose**: Create action-oriented, scannable, and accessible button copy that drives desired user behavior.

---

**PROMPT:**

Generate button label variations for {{action_purpose}}.

=== BUTTON CONTEXT ===
Button type: {{button_type}} (primary, secondary, tertiary, destructive, ghost)
Placement: {{placement}} (modal, form, card, toolbar, floating)
User journey: {{journey_stage}} (awareness, consideration, conversion, retention)
Page objective: {{page_goal}} (sign-up, purchase, share, learn, delete)
User familiarity: {{familiarity}} (first-time, returning, power user)

=== ACTION PARAMETERS ===
Primary action: {{primary_action}} (what happens when clicked)
Outcome: {{outcome}} (immediate and downstream)
Risk level: {{risk_level}} (low, medium, high, critical)
Reversibility: {{is_reversible}} (yes/no)
Time to outcome: {{time_to_outcome}} (instant, seconds, minutes, days)

=== BUTTON LABEL PATTERNS ===

1. **Verb + Noun**: "Create project", "Invite team member"
2. **Verb Only**: "Continue", "Save", "Delete"
3. **Verb + Outcome**: "Start free trial", "Download PDF"
4. **Question Style**: "Got it", "Sounds good"
5. **Conversational**: "Yes, delete it", "No, keep it"

=== OUTPUT STRUCTURE ===

```json
{
  "button_specifications": {
    "character_limit": "max_chars (including spaces)",
    "min_width": "px",
    "max_width": "px",
    "text_transform": "none/capitalize/uppercase",
    "line_clamp": "number (for wrapping)"
  },
  "variations": [
    {
      "label": "string",
      "pattern": "verb_noun/verb_only/etc",
      "character_count": "number",
      "confidence_score": "1-10",
      "rationale": {
        "clarity": "string",
        "actionability": "string",
        "accessibility": "string"
      },
      "a_b_test_hypothesis": "string"
    }
  ],
  "design_recommendations": {
    "icon_position": "leading/trailing/none",
    "icon_name": "string",
    "loading_state_label": "string (e.g., 'Saving...')",
    "disabled_state_label": "string"
  },
  "accessibility_requirements": {
    "aria_label": "string (if icon-only)",
    "role": "string",
    "keyboard_shortcut": "string (optional)"
  }
}
```

=== EXAMPLES ===

**Example 1: Sign-Up Form**
- button_type: "primary"
- placement: "form"
- page_goal: "sign-up"
- primary_action: "create user account"
- outcome: "account created, onboarding started"
- risk_level: "low"

**Example 2: Delete Project Modal**
- button_type: "destructive"
- placement: "modal"
- page_goal: "delete project"
- primary_action: "permanently delete project"
- outcome: "project removed, team notified"
- risk_level: "critical"

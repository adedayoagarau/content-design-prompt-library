## Success State Content Design

**Purpose**: Reinforce positive outcomes and guide users forward without cognitive overload.

---

**PROMPT:**

Design success state content for {{action_completed}}.

=== SUCCESS PARAMETERS ===
Action: {{user_action}} (e.g., "form submission", "payment complete")
Outcome: {{outcome}} (e.g., "account created", "file uploaded")
User effort: {{effort_level}} (low/medium/high)
Time invested: {{time_minutes}} minutes
Data changed: {{data_changed}} (none/some/critical)
External dependencies: {{dependencies}} (email verification, API calls, etc.)

=== PSYCHOLOGICAL STATE ===
User expectation: {{expectation}} (met/exceeded/subverted)
Anticipated emotion: {{expected_emotion}} (relief, pride, surprise)
Commitment level: {{commitment}} (one-time vs. ongoing)
Next logical action: {{next_action}} (what user likely wants to do)

=== CONTENT HIERARCHY ===

1. **Confirmation** (what happened)
2. **Reinforcement** (why it matters)
3. **Next steps** (where to go)
4. **Reference** (what to keep)

=== OUTPUT REQUIREMENTS ===

Generate 3 tiers of detail:

**Tier 1: Minimal** (1-2 elements)
- Use case: Low-stakes actions (saved preference)
- Format: Inline confirmation only
- Duration: 3 seconds auto-dismiss

**Tier 2: Standard** (3-4 elements)
- Use case: Medium stakes (form submitted)
- Format: Banner + next step
- Duration: Persistent until action

**Tier 3: Celebratory** (5+ elements)
- Use case: High stakes (onboarding complete)
- Format: Full-page + progress + social
- Duration: Permanent reference

```json
{
  "tier_1_minimal": {
    "copy": "string (max 30 chars)",
    "icon": "suggested icon",
    "duration": "3000ms",
    "animation": "subtle slide-in"
  },
  "tier_2_standard": {
    "headline": "string (max 50 chars)",
    "description": "string (max 150 chars)",
    "primary_action": {
      "label": "string",
      "destination": "string"
    },
    "secondary_action": {
      "label": "string",
      "optional": true
    },
    "reference_info": {
      "label": "string",
      "value": "string (e.g., confirmation number)"
    }
  },
  "tier_3_celebratory": {
    "headline": "string (max 60 chars)",
    "subheadline": "string (max 120 chars)",
    "visual": "illustration/animation recommendation",
    "benefits_summary": ["string", "string"],
    "progress_indicator": {
      "current": "number",
      "total": "number",
      "next_milestone": "string"
    },
    "social_proof": {
      "statistic": "string",
      "source": "string"
    },
    "primary_action": {
      "label": "string",
      "destination": "string"
    },
    "secondary_actions": [
      {
        "label": "string",
        "destination": "string"
      }
    ],
    "reference_info": {
      "confirmation_number": "string",
      "download_pdf": "boolean",
      "email_sent_to": "string"
    }
  },
  "accessibility_announcement": "string for screen reader",
  "email_notification": {
    "subject": "string",
    "preview": "string",
    "template": "email_body_template"
  }
}
```

=== EXAMPLES ===

**Example 1: Onboarding Complete**
- user_action: "Finished 6-step onboarding"
- effort_level: "high"
- time_minutes: 12
- expectation: "exceeded"
- next_action: "Explore dashboard"
- tier: "celebratory"

**Example 2: Preference Saved**
- user_action: "Toggled notification setting"
- effort_level: "low"
- expectation: "met"
- next_action: "Continue settings"
- tier: "minimal"

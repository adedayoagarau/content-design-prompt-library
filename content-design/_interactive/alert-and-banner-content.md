## Alert & Banner Content Framework

**Purpose**: Deliver system feedback, updates, and warnings without disrupting user flow.

---

**PROMPT:**

Design alert/banner content for {{alert_purpose}}.

=== ALERT PARAMETERS ===
Purpose: {{alert_purpose}} (success, info, warning, error, system update)
Severity: {{severity}} (low, medium, high, critical)
Persistence: {{persistence}} (auto-dismiss, sticky, permanent)
User action required: {{requires_action}} (yes/no)
Business impact: {{business_impact}} (none, conversion risk, retention risk)

=== ALERT TYPES ===

**Toast/Alert:**
- Auto-dismiss after 3-5 seconds
- Non-blocking
- Minimal context needed

**Banner:**
- Sticky until dismissed or action taken
- May block or restrict functionality
- More context provided

**Interstitial:**
- Full screen takeover
- Blocking until resolved
- Maximum context

=== OUTPUT STRUCTURE ===

```yaml
alert_content:
  level_1_toast:
    show: "boolean"
    icon: "none/success/info/warning/error"
    copy: "string (max 80 chars)"
    auto_dismiss_ms: "3000-5000"
    position: "top_right/top_center/bottom_center"
    
  level_2_banner:
    show: "boolean"
    icon: "required"
    title: "string (max 50 chars)"
    description: "string (max 120 chars)"
    action: {
      "primary": {
        "label": "string",
        "action": "string"
      }
    }
    dismissible: "boolean"
    position: "top_sticky/inline"
    
  level_3_banner_action_required:
    show: "boolean"
    icon: "required"
    title: "string (max 60 chars)"
    description: "string (max 200 chars)"
    required_action: {
      "label": "string",
      "action": "string"
    }
    dismissible: "false"
```

=== EXAMPLES ===

**Example 1: Success Toast**
- alert_purpose: "success"
- severity: "low"
- persistence: "auto-dismiss"
- requires_action: false

**Example 2: High Severity Warning Banner**
- alert_purpose: "warning"
- severity: "high"
- persistence: "sticky"
- requires_action: true

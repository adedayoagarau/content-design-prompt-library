## Tooltip & Help Text Content System

**Purpose**: Provide contextual help without cluttering the interface or patronizing users.

---

**PROMPT:**

Design tooltip/help text for {{feature_name}}.

=== HELP CONTEXT ===
Feature: {{feature_name}}
User confusion point: {{confusion_point}} (what they don't understand)
Context: {{context}} (form field, icon, complex feature, new concept)
User expertise: {{user_expertise}} (beginner, intermediate, advanced)
Frequency of use: {{frequency}} (daily, weekly, one-time)

=== HELP TIER SELECTION ===

**Tier 1: Inline Hint** (always visible)
- Below field or next to label
- Max 120 characters
- Use for: format requirements, critical info

**Tier 2: Tooltip on Hover/Focus** (revealed on interaction)
- On icon hover or field focus
- Max 200 characters
- Use for: definitions, non-critical tips

**Tier 3: Help Modal/Sheet** (user-initiated)
- Click "Learn more" link
- Full explanation with examples
- Use for: complex concepts, workflows

**Tier 4: Onboarding Highlight** (contextual tour)
- First-time overlay
- Brief, focused explanation
- Use for: new features, major changes

=== OUTPUT STRUCTURE ===

```yaml
help_content:
  tier_1_inline:
    show: "boolean"
    copy: "string (max 120 chars)"
    position: "below_field/below_label"
    
  tier_2_tooltip:
    show: "boolean"
    trigger: "hover/focus/click"
    copy: "string (max 200 chars)"
    title: "string (optional)"
    icon: "help_outline/info_outline"
    position: "top/bottom/left/right"
    accessibility:
      trigger_aria_label: "string"
      tooltip_role: "tooltip"
      
  tier_3_modal:
    show: "boolean"
    trigger_label: "string (e.g., 'Learn more')"
    title: "string"
    content: {
      "sections": [
        {
          "heading": "string",
          "body": "string",
          "visual": "string"
        }
      ]
    }
```

=== EXAMPLES ===

**Example 1: Password Field**
- feature_name: "Password strength requirements"
- confusion_point: "What's required?"
- context: "form field"
- user_expertise: "beginner"
- frequency: "one-time"

**Example 2: Advanced Search Filter**
- feature_name: "Boolean search operators"
- confusion_point: "How to combine conditions"
- context: "complex feature"
- user_expertise: "intermediate"
- frequency: "weekly"

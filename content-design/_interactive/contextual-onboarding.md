## Contextual Onboarding Content Framework

**Purpose**: Deliver feature education at the moment of need without overwhelming new users.

---

**PROMPT:**

Design contextual onboarding for {{feature_name}}.

=== FEATURE PARAMETERS ===
Feature: {{feature_name}}
User value: {{user_value}} (what user gains)
Complexity: {{complexity}} (simple/medium/complex)
Frequency of use: {{usage_frequency}} (daily/weekly/monthly/one-time)
Discoverability: {{discoverability}} (obvious/hidden/power feature)
User motivation: {{motivation}} (high/medium/low)

=== ONBOARDING PATTERNS ===

**Pattern 1: Inline Hint**
- Appears near feature
- Brief explanation
- Dismissible
- Use for: simple, non-critical features

**Pattern 2: Spotlight Tour**
- Highlights feature
- Step-by-step walkthrough
- Optional
- Use for: complex, valuable features

**Pattern 3: Progressive Disclosure**
- Reveal as user advances
- Layered complexity
- Non-blocking
- Use for: powerful, advanced features

**Pattern 4: Empty State Tutorial**
- Educational empty state
- First-use context
- Action-oriented
- Use for: data-dependent features

=== OUTPUT STRUCTURE ===

```yaml
onboarding_content:
  pattern_1_inline_hint:
    show: "boolean"
    copy: "string (max 80 chars)"
    position: "near_feature"
    icon: "lightbulb/info"
    dismissible: "boolean"
    
  pattern_2_spotlight_tour:
    show: "boolean"
    steps: [
      {
        "target": "string (element selector)",
        "title": "string (max 40 chars)",
        "description": "string (max 120 chars)",
        "position": "top/bottom/left/right"
      }
    ]
    skippable: "boolean"
    show_progress: "boolean"
    
  pattern_3_progressive_disclosure:
    show: "boolean"
    trigger: "user_action/milestone"
    content: "string"
    
  pattern_4_empty_state:
    show: "boolean"
    headline: "string"
    description: "string"
    primary_action: "string"
```

=== EXAMPLES ===

**Example 1: New Dashboard Feature**
- feature_name: "Custom widgets"
- user_value: "Personalize dashboard"
- complexity: "medium"
- usage_frequency: "weekly"
- discoverability: "hidden"

**Example 2: Advanced Filter**
- feature_name: "Boolean search"
- user_value: "Find specific results faster"
- complexity: "complex"
- usage_frequency: "daily"
- motivation: "high"

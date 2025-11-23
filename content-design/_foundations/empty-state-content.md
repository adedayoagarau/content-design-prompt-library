## Empty State Content Architecture

**Purpose**: Transform dead ends into discovery opportunities and learning moments.

---

**PROMPT:**

Design empty state content for {{empty_scenario}}.

=== EMPTY STATE TYPE ===
Scenario: {{scenario_type}} (no results, first use, error, cleared)
User action that led here: {{user_action}} (search, filter, delete, first login)
Expected content: {{expected_content}} (what would normally appear)
Data population method: {{population_method}} (manual, import, integration, invite)

=== USER PSYCHOLOGY ===
Expectation: {{expectation}} (confused, disappointed, neutral)
Blame attribution: {{blame_target}} (self, system, external)
Task criticality: {{task_criticality}} (exploratory vs. blocking)
Alternative paths: {{alternatives}} (can user proceed elsewhere?)

=== CONTENT LAYERS ===

1. **Acknowledgment** (state the obvious)
2. **Explanation** (why it's empty)
3. **Education** (what to do)
4. **Activation** (how to do it)
5. **Inspiration** (why it matters)

=== OUTPUT STRUCTURE ===

```yaml
empty_state_content:
  visual:
    illustration_type: "string (abstract/character/data viz/none)"
    animation: "boolean"
    color_mood: "muted/branded/energetic"
    
  headline:
    copy: "string (max 50 chars)"
    tone: "empathetic/neutral/encouraging"
    
  description:
    primary: "string (max 150 chars)"
    secondary: "string (max 300 chars, optional)"
    
  primary_action:
    label: "string (max 30 chars)"
    icon: "string"
    action_type: "create/invite/import/learn"
    analytics_event: "string"
    
  secondary_actions:
    - label: "string (max 30 chars)"
      action: "string"
      type: "educational/alternative"
      
  educational_content:
    show_tips: boolean
    tips:
      - title: "string"
        description: "string"
        visual: "string"
    show_examples: boolean
    examples:
      - preview: "string"
        description: "string"
```

=== EXAMPLES ===

**Example 1: Search No Results**
- scenario_type: "no results"
- user_action: "searched for 'projector' in inventory"
- expected_content: "product listings"
- expectation: "disappointed"
- task_criticality: "blocking"

**Example 2: First Login Dashboard**
- scenario_type: "first use"
- user_action: "completed onboarding"
- expected_content: "analytics data"
- population_method: "needs 7 days of data"
- expectation: "neutral"
- alternatives: "can explore settings"

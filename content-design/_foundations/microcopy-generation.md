## Microcopy Generation Engine v2.0

**Purpose**: Generate 50+ variations of interface copy with psychological triggers and accessibility compliance.

---

**PROMPT:**

You are a senior content designer at {{company_name}}, specializing in {{product_domain}}. Generate comprehensive microcopy for {{component_type}}.

=== USER & CONTEXT ===
- Primary persona: {{persona_name}} ({{persona_details}})
- Emotional state: {{emotional_state}} (validated by {{research_source}})
- Journey stage: {{journey_stage}}
- Device: {{device_type}} ({{screen_size}} if mobile)
- Accessibility needs: {{accessibility_needs}}
- Language proficiency: {{language_level}}

=== BUSINESS CONSTRAINTS ===
- Character limit: {{char_limit}} (hard: {{hard_limit}}/soft: {{soft_limit}})
- Legal requirements: {{legal_requirements}}
- Brand promise: {{brand_promise}}
- Conversion goal: {{conversion_metric}}
- Risk level: {{risk_level}} (low/medium/high/critical)

=== BRAND VOICE MATRIX ===
Core traits (weight in parentheses):
- {{voice_trait_1}} ({{weight_1}}%): {{trait_definition_1}}
- {{voice_trait_2}} ({{weight_2}}%): {{trait_definition_2}}
- {{voice_trait_3}} ({{weight_3}}%): {{trait_definition_3}}

Tone calibration:
- Formality: {{formality_level}} (1-10)
- Technicality: {{technicality_level}} (1-10)
- Enthusiasm: {{enthusiasm_level}} (1-10)
- Urgency: {{urgency_level}} (1-10)

=== CONTENT STRATEGY ===
Primary goal: {{content_goal}}
Supporting goals: {{supporting_goals}}
User motivation: {{user_motivation}}
Potential friction: {{friction_points}}

=== PSYCHOLOGICAL PRINCIPLES TO APPLY ===
(Select applicable from: loss aversion, social proof, scarcity, authority, reciprocity, commitment, Hick's Law, Miller's Law, progressive disclosure)

=== OUTPUT REQUIREMENTS ===

Generate 10 distinct variations:

1. **Direct & Clear** (baseline)
2. **Benefit-focused** (what user gains)
3. **Action-oriented** (verb-led)
4. **Question-based** (engagement)
5. **Social proof** (if applicable)
6. **Scarcity/urgency** (if applicable)
7. **Friendly/conversational** (relationship-building)
8. **Minimalist** (fewest words)
9. **Authoritative** (trust-building)
10. **Experimental** (creative/unconventional)

For EACH variation, provide:

```json
{
  "variation_id": "integer",
  "copy": "string (exact character count)",
  "character_count": "integer",
  "rationale": {
    "voice_alignment": "string",
    "psychological_trigger": "string",
    "accessibility_note": "string",
    "localization_consideration": "string"
  },
  "readability_score": {
    "flesch_kincaid_grade": "number",
    "reading_ease": "number"
  },
  "confidence_score": "number (1-10)",
  "risk_assessment": {
    "level": "low/medium/high",
    "concerns": ["string"]
  },
  "a_b_test_variation": {
    "hypothesis": "string",
    "primary_metric": "string",
    "secondary_metrics": ["string"]
  }
}
```

=== COMPARATIVE ANALYSIS ===

After generating variations, provide:

```yaml
recommendation:
  top_choice: "variation_id"
  runner_up: "variation_id"
  rationale: "string"

trade_offs:
  - variation: "id"
    pros: ["string"]
    cons: ["string"]

stress_test:
  edge_cases:
    - scenario: "string"
      how_variation_performs: "string"
  accessibility:
    screen_reader: "string"
    voice_assistant: "string"
    cognitive_load: "string"

localization_readiness:
  character_expansion_risk: "percentage"
  idioms: ["string"]
  cultural_dependencies: ["string"]
```

=== EXAMPLES ===

**Example 1: Payment Button**
- persona_name: "Budget-conscious parent"
- emotional_state: "anxious about security"
- component_type: "primary button"
- char_limit: 25
- voice_traits: "reassuring, clear, warm"
- conversion_metric: "reduce abandonment by 15%"

**Example 2: Error State**
- persona_name: "Elderly first-time user"
- emotional_state: "confused and frustrated"
- component_type: "inline error message"
- char_limit: 80
- voice_traits: "patient, supportive, simple"
- risk_level: "high"

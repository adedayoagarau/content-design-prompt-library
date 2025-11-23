## Error Message Content Framework

**Purpose**: Transform technical errors into human, actionable guidance across severity levels.

---

**PROMPT:**

Design error messaging for this system failure:

=== INCIDENT CLASSIFICATION ===
Error type: {{error_type}} (auth/network/data/validation/system)
Error code: {{error_code}}
Technical message: {{technical_message}}
Stack trace excerpt: {{stack_trace}}
Affected system: {{affected_component}}
User facing impact: {{user_impact_description}}

=== USER IMPACT ANALYSIS ===
Number of affected users: {{affected_users}}
Severity: {{severity}} (critical/high/medium/low)
Data at risk: {{data_at_risk}}
Recovery time estimate: {{recovery_time}}
Last known good state: {{last_known_good}}

=== USER CONTEXT ===
Persona: {{persona_name}} ({{persona_technical_level}})
Task criticality: {{task_criticality}} (blocking/non-blocking)
Device: {{device_type}}
Environment: {{environment}} (mobile app/web/desktop)
User permissions: {{user_permissions}}

=== COMMUNICATION REQUIREMENTS ===

**For each audience, generate specific copy:**

1. **End User** (non-technical)
2. **Power User** (technical savvy)
3. **Customer Support** (internal)
4. **Executive Summary** (leadership)

=== TONE CALIBRATION MATRIX ===

| Scenario | Apology Style | Transparency | Technical Detail | Reassurance Level |
|----------|---------------|--------------|------------------|-------------------|
| Our fault, data safe | Full ownership | Full | Minimal | High |
| Our fault, data lost | Deep regret | Full + plan | Moderate | Very high |
| User error, minor | Educational | Partial | None | Medium |
| Third party, major | Empathetic | Full + blame context | Minimal | High |
| Unknown cause | Cautious | What we know | Honest uncertainty | Medium |

=== OUTPUT STRUCTURE ===

```yaml
end_user_communication:
  in_app_banner:
    short: "max 50 chars"
    medium: "max 120 chars"
    long: "max 300 chars"
    accessibility: "screen reader announcement strategy"
  email_notification:
    subject: "max 60 chars"
    preview_text: "max 120 chars"
    body: "structured with clear sections"
    legal_footer: "required disclaimers"
  sms_push:
    character_count: "exact"
    deep_link: "optional"
    
power_user_communication:
  status_page_update:
    technical_summary: "plain language with optional details"
    workaround: "step-by-step if available"
    eta: "realistic timeline"
    
support_team_brief:
  internal_ticket_notes: "full context for CS reps"
  response_templates: "approved user-facing replies"
  escalation_path: "when to escalate to tier 2/3"
  
executive_summary:
  business_impact: "revenue/users/reputation"
  user_sentiment_risk: "low/medium/high"
  brand_trust_score_impact: "projected change"
  recommended_actions: ["immediate", "short_term", "long_term"]
  
legal_compliance:
  breach_notification_draft: "if applicable"
  regulatory_filing_notes: "timestamp requirements"
  user_rights_information: "data access/deletion"
```

=== CONTINUOUS UPDATES ===

As incident evolves, generate:

- **T+15min**: Initial acknowledgment
- **T+1hr**: Status update with ETA
- **T+4hr**: Progress report
- **T+24hr**: Resolution summary
- **T+7days**: Post-mortem communication

Each update must reference previous message and show progress.

=== EXAMPLES ===

**Example 1: Payment Processing Failure**
- error_type: "system"
- error_code: "PYMT_500"
- technical_message: "Stripe API timeout"
- user_impact_description: "Cannot complete purchase"
- severity: "critical"
- persona_name: "E-commerce customer"
- task_criticality: "blocking"

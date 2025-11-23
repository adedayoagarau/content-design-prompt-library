## Destructive Action Content Framework

**Purpose**: Prevent accidental data loss while respecting user intent and avoiding fear-based language.

---

**PROMPT:**

Design copy for destructive action: {{action_name}}.

=== ACTION PARAMETERS ===
Action: {{action}} (delete, remove, cancel, discard, unsubscribe, close account)
Target: {{target}} (file, project, account, subscription, data)
Recoverability: {{is_recoverable}} (true/false)
Recovery window: {{recovery_time}} (e.g., "30 days in trash")
Time investment in target: {{user_investment}} (hours/days/years)
Data sensitivity: {{sensitivity}} (none, personal, sensitive, critical)
Impact scope: {{impact_scope}} (user only, team, organization)
Number of items: {{item_count}} (single/multiple/unknown)

=== PSYCHOLOGICAL SAFETY ===
Use language that:
- **Acknowledges** the weight of decision
- **Educates** about consequences
- **Empowers** informed choice
- **Protects** from accidents
- **Respects** autonomy

**AVOID:**
- Fear-mongering: "Warning! Danger!"
- Guilt-inducing: "Are you sure you want to waste your work?"
- Ambiguity: "This action cannot be undone" (what does that mean?)
- Technical jargon: "Delete this entity?"
- Accidental triggers: "Delete" as primary button

=== DESTRUCTION CONFIDENCE LEVELS ===

**Level 1: Low Risk** (Undo available)
- Allow instant deletion
- Provide toast with "Undo" for 5-10 seconds
- No modal required
- Example: Delete recent search

**Level 2: Medium Risk** (Recoverable)
- Show confirmation modal
- Focus on what happens next (recovery options)
- Require single confirmation
- Example: Delete file (goes to trash)

**Level 3: High Risk** (Hard to recover)
- Show confirmation modal with details
- Require checkbox: "I understand..."
- Show summary of what's deleted
- Example: Delete project (team impact)

**Level 4: Critical Risk** (Permanent)
- Multi-step confirmation
- Require password/2FA
- Show explicit list of everything affected
- Add waiting period for account deletion
- Example: Close account, delete organization

=== OUTPUT STRUCTURE ===

```yaml
destruction_flow:
  trigger:
    button_label: "string (not 'Delete', use specific: 'Remove file')"
    button_style: "secondary/destructive"
    confirmation: "none/modal/multi_step"
    
  confirmation_modal:
    title: "string (clear action: 'Delete project?')"
    illustration: "warning icon (not red skull/crossbones)"
    
    impact_summary:
      headline: "string (what will happen)"
      bullet_points:
        - "string (specific consequence)"
        - "string (specific consequence)"
      
    irreversible_warning:
      show: "boolean"
      copy: "string (factual, not scary: 'This cannot be undone')"
      
    recovery_info:
      is_recoverable: "boolean"
      recovery_details: "string (e.g., 'Available in Trash for 30 days')"
      recovery_action: "string (how to recover)"
      
    required_inputs:
      - type: "checkbox"
        label: "string (I understand this will delete X)"
      - type: "text_input"
        label: "string (type DELETE to confirm)"
        
    primary_action:
      label: "string (specific: 'Yes, delete project')"
      style: "destructive"
      disabled_until_confirmed: "boolean"
      
    secondary_action:
      label: "string (Cancel)"
      style: "tertiary"
      default: true
```

=== EXAMPLES ===

**Example 1: Delete Single File (Recoverable)**
- action: "delete"
- target: "file"
- is_recoverable: true
- recovery_time: "30 days in Trash"
- user_investment: "low"
- sensitivity: "none"
- impact_scope: "user only"
- item_count: "single"
- confidence_level: "Level 2"

**Example 2: Close Account (Permanent)**
- action: "close account"
- target: "user account"
- is_recoverable: false
- user_investment: "high (3 years)"
- sensitivity: "personal"
- impact_scope: "user only"
- confidence_level: "Level 4"

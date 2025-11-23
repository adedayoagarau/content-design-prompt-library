## Confirmation Pattern Design v1.0

**Purpose**: Verify AI understanding before taking action, balancing thoroughness with efficiency to build user trust.

---

**PROMPT:**

You are designing confirmation patterns for {{ai_system}} when {{action_context}}. Create confirmation flows that verify understanding without creating friction.

=== CONFIRMATION CONTEXT ===
- Action type: {{action_type}}
- Risk level: {{risk_level}} (low/medium/high/critical)
- Reversibility: {{reversible}} (easily_reversible/partially_reversible/irreversible)
- User stakes: {{user_stakes}} (convenience/money/time/data/safety)
- Frequency: {{action_frequency}} (one-time/occasional/frequent)

=== CONFIRMATION STRATEGIES ===

**Explicit Confirmation** (ask before acting):
- When: {{explicit_when}} (high stakes, irreversible, first time)
- Format: {{explicit_format}}
- Confirmation required: {{confirmation_type}} (yes/no, restate action, authenticate)

**Implicit Confirmation** (act with easy undo):
- When: {{implicit_when}} (low stakes, reversible, frequent action)
- Format: {{implicit_format}}
- Undo mechanism: {{undo_method}}

**Progressive Confirmation** (confirm parts along the way):
- When: {{progressive_when}} (multi-step process, complex action)
- Format: {{progressive_format}}
- Checkpoints: {{confirmation_checkpoints}}

=== OUTPUT REQUIREMENTS ===

```yaml
confirmation_system:
  risk_based_rules:
    - risk_level: "critical"
      examples: ["delete_account", "financial_transaction", "data_deletion"]
      confirmation_type: "explicit_with_authentication"
      pattern:
        step1: "clearly state what will happen"
        step2: "explain consequences (irreversible, what will be lost)"
        step3: "require typed confirmation or biometric"
        example: |
          "This will permanently delete your account and all data. This cannot be undone.

          You'll lose:
          - All projects (23 items)
          - All files (145 files)
          - Subscription benefits

          Type 'DELETE' to confirm:"
      accessibility: "clear consequences, explicit action required"

    - risk_level: "high"
      examples: ["cancel_subscription", "delete_project", "send_email_blast"]
      confirmation_type: "explicit_detailed"
      pattern:
        step1: "summarize action and impact"
        step2: "ask clear yes/no question"
        example: |
          "You're about to cancel your Premium subscription ($29/month).
          You'll lose access to: [features list]

          Cancel subscription?"
        buttons: ["Cancel Subscription", "Keep Subscription"]
      accessibility: "consequences visible, clear choice"

    - risk_level: "medium"
      examples: ["archive_item", "mark_complete", "share_file"]
      confirmation_type: "explicit_simple"
      pattern:
        template: "{{action_verb}} {{object}}?"
        example: "Archive this project?"
        buttons: ["Archive", "Cancel"]
      accessibility: "simple, clear action"

    - risk_level: "low"
      examples: ["mark_favorite", "reorder_list", "change_view"]
      confirmation_type: "implicit"
      pattern:
        action: "perform immediately"
        feedback: "show completion + easy undo"
        example: "✓ Added to favorites [Undo]"
      accessibility: "immediate feedback, clear undo"

  confirmation_components:
    action_summary:
      template: "{{verb}} {{object}} {{context}}"
      examples:
        - "Delete Project Alpha (23 files)"
        - "Send email to 1,247 subscribers"
        - "Transfer $500 to Jane's account"

    consequence_preview:
      when: "high or critical risk"
      format: "bullet list of what will happen"
      example: |
        "This will:
        - Remove access for 5 team members
        - Archive all files (recoverable for 30 days)
        - Stop all automations"

    confirmation_language:
      positive_actions:
        - "Yes, {{action}}"
        - "{{Action_verb}}"
        - "Confirm"

      negative_actions:
        - "No, cancel"
        - "Keep it"
        - "Don't {{action}}"

      destructive_actions:
        - "Yes, delete permanently"
        - "Yes, cancel subscription"
        - require_typed_confirmation: true

    undo_mechanisms:
      immediate_undo:
        display: "{{Action}} completed. [Undo]"
        timeout: "10 seconds for in-app, none for consequential"

      trash_recovery:
        message: "Moved to trash. Auto-deletes in 30 days."
        action: "Restore"

  conversation_confirmations:
    restate_understanding:
      template: "Just to confirm: I'll {{restate_user_intent}}. Is that right?"
      when: "multi-parameter request, important action"
      example: "Just to confirm: I'll book a flight from NYC to London on June 15th. Is that right?"

    acknowledge_and_proceed:
      template: "Got it, {{action_ing}} now..."
      when: "clear intent, low risk"
      example: "Got it, searching for flights now..."

    progressive_checkpoints:
      pattern: "confirm each step before proceeding to next"
      example:
        - "Great, London it is. What date?"
        - "June 15th, got it. What time preference?"
```

=== CONFIRMATION EXAMPLES ===

```json
{
  "confirmation_scenarios": [
    {
      "scenario": "Delete irreversible data",
      "action": "delete_all_messages",
      "risk": "critical",
      "confirmation_ui": {
        "title": "Delete all messages?",
        "message": "This will permanently delete 1,459 messages. This cannot be undone.",
        "warning": "⚠️ This action is permanent",
        "input_required": "Type DELETE to confirm",
        "buttons": {
          "primary": "Delete All Messages",
          "secondary": "Cancel",
          "primary_style": "destructive",
          "primary_enabled": "only when correct text entered"
        }
      },
      "accessibility": "Clear warning, requires deliberate action, screen reader announces warning"
    },
    {
      "scenario": "Send message to many people",
      "action": "send_announcement",
      "risk": "high",
      "confirmation_ui": {
        "title": "Send announcement?",
        "message": "This will send an email to 1,247 subscribers",
        "preview": "[Preview of email shown]",
        "buttons": {
          "primary": "Send to All",
          "secondary": "Send Test First",
          "tertiary": "Cancel"
        }
      },
      "accessibility": "Preview available, option to test first"
    },
    {
      "scenario": "Archive single item",
      "action": "archive_conversation",
      "risk": "medium",
      "confirmation_ui": {
        "inline": true,
        "message": "Archive this conversation?",
        "subtext": "You can find it in Archives",
        "buttons": {
          "primary": "Archive",
          "secondary": "Cancel"
        }
      },
      "accessibility": "Explains where to find it, quick decision"
    },
    {
      "scenario": "Mark item complete",
      "action": "complete_task",
      "risk": "low",
      "confirmation_ui": {
        "immediate_action": true,
        "feedback": "✓ Task completed [Undo]",
        "undo_available": "10 seconds",
        "visual_change": "strikethrough + fade"
      },
      "accessibility": "Immediate visual feedback, easy undo, screen reader confirms action"
    }
  ]
}
```

=== EXAMPLES ===

**Example 1: Banking App Transfer**
- action_type: "money_transfer"
- risk_level: "critical"
- reversibility: "partially_reversible"
- confirmation_type: "explicit with authentication + summary"
- user_stakes: "money"

**Example 2: Email Archive**
- action_type: "archive_email"
- risk_level: "low"
- reversibility: "easily_reversible"
- confirmation_type: "implicit with undo"
- action_frequency: "frequent"

**Example 3: Project Deletion**
- action_type: "delete_project"
- risk_level: "high"
- reversibility: "partially_reversible (30-day trash)"
- confirmation_type: "explicit with consequences shown"
- user_stakes: "time + data"

---

**Accessibility Requirements**: Confirmation dialogs must be keyboard navigable. Default focus on safe option. Clear visual hierarchy. Screen reader announces risks. Support undo for reversible actions. WCAG 3.0 Level AA: sufficient time to read and act.

**Psychological Principles**: Explicit confirmation for high-stakes actions prevents errors (error prevention). Progressive confirmation reduces cognitive load (chunking). Clear consequences reduce anxiety (transparency). Easy undo encourages exploration (safety).

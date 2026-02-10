# Handoff Schema Template

Use this template to define the structured data passed between agents during a handoff. This ensures the receiving agent has full context without re-deriving information the sending agent already gathered.

---

## Header Fields

| Field | Type | Description |
|-------|------|-------------|
| `schema_version` | string | Version of the handoff schema (e.g., "1.0"). Use for backward compatibility. |
| `handoff_type` | string | The category of handoff (e.g., "escalation", "specialization", "delegation", "failover"). |
| `priority` | string | Priority level (e.g., "low", "medium", "high", "critical"). |
| `sending_agent` | string | Identifier of the agent initiating the handoff. |
| `receiving_agent` | string | Identifier of the agent receiving the handoff. |
| `timestamp` | string (ISO 8601) | When the handoff was initiated. |
| `session_id` | string | Unique identifier for the overall session/conversation. |

---

## Entity

The primary entity this task concerns (customer, order, account, etc.).

| Field | Type | Description |
|-------|------|-------------|
| `entity.id` | string | Unique identifier for the entity (e.g., customer ID, order number). |
| `entity.name` | string | Human-readable name for the entity. |
| `entity.type` | string | Entity type (e.g., "passenger", "customer", "patient", "account"). |
| `entity.key_attribute` | string | The most important attribute for the receiving agent (e.g., loyalty tier, account status). |
| `entity.additional_context` | string | Any other entity information the receiving agent needs. |

---

## Triggering Event

What caused the handoff to occur.

| Field | Type | Description |
|-------|------|-------------|
| `triggering_event.event_type` | string | Category of event (e.g., "task_failure", "scope_exceeded", "policy_trigger", "user_request"). |
| `triggering_event.event_timestamp` | string (ISO 8601) | When the triggering event occurred. |
| `triggering_event.event_source` | string | What system or step produced the event. |
| `triggering_event.description` | string | Human-readable description of what happened. |
| `triggering_event.root_cause` | string | Why the event occurred (if known). |
| `triggering_event.severity` | string | Impact severity (e.g., "low", "medium", "high", "critical"). |
| `triggering_event.policy_reference` | string | Reference to the policy or rule that triggered this handoff (if applicable). |

---

## Resolution State

What has been done so far, and what remains.

| Field | Type | Description |
|-------|------|-------------|
| `resolution_state.actions_completed` | array of strings | List of actions the sending agent has already completed. |
| `resolution_state.current_state` | string | Summary of where the task stands right now. |
| `resolution_state.remaining_steps` | array of strings | Steps the receiving agent needs to complete. |
| `resolution_state.blockers` | array of strings | Known blockers or issues the receiving agent should be aware of. |

---

## Recipient Instructions

What the receiving agent should do.

| Field | Type | Description |
|-------|------|-------------|
| `recipient_instructions.primary_objective` | string | The main goal for the receiving agent. |
| `recipient_instructions.constraints` | array of strings | Rules the receiving agent must follow. |
| `recipient_instructions.eligibility_details` | string | Any eligibility information relevant to the task (e.g., compensation tier, refund policy). |
| `recipient_instructions.escalation_criteria` | string | When the receiving agent should escalate further. |
| `recipient_instructions.timeout_sla` | string | Time limit for the receiving agent to resolve this handoff. |

---

## Context for Recipient

Soft context that helps the receiving agent interact effectively.

| Field | Type | Description |
|-------|------|-------------|
| `context_for_recipient.customer_emotional_state` | string | Current emotional state of the customer (e.g., "frustrated", "calm", "anxious"). |
| `context_for_recipient.interaction_history` | string | Brief summary of the interaction so far. |
| `context_for_recipient.tone_guidance` | string | How the receiving agent should approach the interaction (e.g., "empathetic and proactive", "formal and precise"). |

---

## Usage Notes

1. **Fill in all fields** — empty fields signal missing context. If a field genuinely doesn't apply, use `"N/A"` rather than leaving it blank.
2. **Be specific in `actions_completed`** — the receiving agent shouldn't have to guess what was already done.
3. **Include policy references** — if the handoff was triggered by a rule, cite the rule so the receiving agent can apply it correctly.
4. **Match `remaining_steps` to the receiving agent's capabilities** — don't hand off steps the receiver can't execute.
5. **Version your schema** — as your system evolves, the handoff format will too. Use `schema_version` to manage backward compatibility.

See [`examples/airline-rebooking-agent/handoff-example.json`](../examples/airline-rebooking-agent/handoff-example.json) for a complete worked example.

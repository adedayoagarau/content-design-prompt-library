# Failure Taxonomy Prompt

Use this prompt to define how your agent recovers when steps fail.

## Fill in your context:
- **Agent name/role**: [e.g., Customer support agent]
- **Domain**: [e.g., Airline rebooking]
- **Critical steps**: [which steps in the workflow have the highest failure risk]
- **External dependencies**: [APIs, databases, third-party services]
- **User impact of failure**: [what happens to the user if a step fails]

## Prompt:

```
You are designing a failure recovery taxonomy for [agent name].

For each failure type, define:
1. Type name and description
2. Example in this domain
3. Recovery behavior (what the agent should do)
4. Escalation criteria (when recovery isn't enough)
5. Max retries (if applicable)

Failure types to consider:
- Transient (timeouts, temporary unavailability)
- Data unavailability (no results match criteria)
- Race condition (state changed between check and action)
- Constraint violation (action would break a rule)
- Authorization error (permission denied)
- System error (unexpected/unknown error)
- Scope exceeded (task requires capabilities agent doesn't have)

Output as a table: Failure Type | Example | Recovery | Escalate if... | Max Retries

Design principles:
- Without a failure taxonomy, agents default to retrying everything or escalating everything. Neither serves users.
- How an agent fails matters more than whether it fails.
- Retrying write operations (payments, bookings) is dangerous. Retrying read operations is usually safe.
- Always inform the user when recovery changes the plan.
```

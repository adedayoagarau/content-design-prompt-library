# Context Evolution Policy Prompt

Use this prompt to define how your agent's context changes over time.

## Fill in your context:
- **Agent name/role**: [e.g., Customer support agent]
- **Interaction frequency**: [how often does the same user interact with this agent]
- **Data sources that change**: [policies, user preferences, tool capabilities]
- **Governance requirements**: [who needs to approve changes to agent behavior]

## Prompt:

```
You are designing a context evolution policy for [agent name].

For each type of context that might change, define:
1. What changes (user preferences, policies, tool definitions, response patterns, tone)
2. Adaptation rule (auto-adapt, log for review, manual update only, monitor for drift)
3. Review cycle (on every change, weekly, monthly, quarterly)
4. Expiration (when does cached context expire)
5. Rollback plan (how to revert if adaptation causes problems)

Types to consider:
- User preferences (explicit — user told us) vs. (inferred — we observed)
- Policy documents
- Tool definitions and API schemas
- Per-step constraints
- Response patterns and tone calibration

Output as a table: What Changes | Adaptation Rule | Review Cycle | Expiration | Rollback

Design principle: Context without governance isn't context. It's sediment.
```

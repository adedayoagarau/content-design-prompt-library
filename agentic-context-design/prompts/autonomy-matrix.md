# Autonomy Matrix Prompt

Use this prompt to define when your agent proceeds, confirms, escalates, or stops.

## Fill in your context:
- **Agent name/role**: [e.g., Customer support agent]
- **Domain**: [e.g., Airline rebooking]
- **Task types**: [list the main tasks this agent handles]
- **Stakeholders**: [who cares if the agent gets this wrong]
- **Regulatory environment**: [any compliance requirements]

## Prompt:

```
You are designing autonomy boundaries for [agent name].

Define four operating modes:
- PROCEED: Agent acts without asking. Low-risk, reversible, well-understood.
- CONFIRM: Agent proposes action and waits for approval. Medium-risk, external effects.
- ESCALATE: Agent surfaces decision to a human. High-risk, ambiguous, or outside scope.
- STOP: Agent halts. Policy breach, safety violation, unrecoverable error.

For each action the agent can take, assign a mode and define:
1. The default mode
2. Criteria for operating in that mode
3. What shifts it to the next level (Proceed → Confirm → Escalate → Stop)

Actions to evaluate:
[list agent actions]

Output as a table: Action | Mode | Criteria | Shifts to next level when...

Design principle: The most dangerous assumption in agentic AI is that capability implies permission. Capability is what the model can do. The autonomy matrix defines what it should do.
```

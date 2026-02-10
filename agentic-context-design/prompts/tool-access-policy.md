# Tool Access Policy Prompt

Use this prompt to define what tools your agent can access, under what conditions, and what approval is required.

## Fill in your context:
- **Agent name/role**: [e.g., Customer support agent, Research assistant]
- **Domain**: [e.g., Airline, Healthcare, Finance, E-commerce]
- **Available tools**: [list all tools the agent could potentially access]
- **User types**: [who interacts with this agent]
- **Risk tolerance**: [low/medium/high — how much autonomy is acceptable]

## Prompt:

```
You are designing a tool access policy for [agent name], an AI agent that [brief description of what it does].

For each tool listed below, define:
1. Risk level (Low / Medium / High / Critical / Restricted)
2. Condition — when is this tool available? (always, after identity verification, after specific step completion, etc.)
3. Approval — what approval is required? (None, Confirm with user, Escalate to human, etc.)
4. Constraints — any restrictions on how the tool can be used

Tools to evaluate:
[list tools]

Output as a table with columns: Tool | Risk | Condition | Approval | Constraints

Design principles:
- Every tool you grant is autonomy you're extending
- Read-only tools are almost always lower risk than write tools
- Tools that affect external systems (send email, process payment, modify records) need explicit approval paths
- Conditions should be cumulative — higher risk tools require all lower conditions plus additional ones
- Consider: what's the worst thing that happens if this tool is misused?
```

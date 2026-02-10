# Working Memory Schema Prompt

Use this prompt to define how your agent manages accumulated information across steps.

## Fill in your context:
- **Agent name/role**: [e.g., Customer support agent]
- **Context window size**: [e.g., 128k tokens, 200k tokens]
- **Typical task length**: [number of steps]
- **Heaviest data sources**: [which tool calls return the most data]
- **Reasoning pattern**: [ReAct, plan-and-execute, reflexion, or hybrid]

## Prompt:

```
You are designing a working memory schema for [agent name] operating in a [context window size] token context window with tasks that typically run [number] steps.

Define:

1. CONTEXT BUDGET — approximate token allocation:
   - System prompt: ___%
   - Tool definitions: ___%
   - Task definition: ___%
   - Plan state: ___%
   - Working memory: ___%
   - Constraints: ___%
   - Success criteria: ___%
   - Conversation history: ___%

2. COMPRESSION STRATEGY — when and how to compress:
   - At what % of working memory budget do you trigger compression?
   - What strategy? (verbatim retention, progressive summarization, selective pruning, tiered persistence)
   - What information is never compressed? (active step data, user preferences, constraint state)
   - What is safe to prune after step completion?

3. SCRATCHPAD FORMAT — structured state the agent maintains:
   Define a key-value scratchpad format for this agent's domain. Include fields for:
   - Entity state (who/what the task concerns)
   - Task progress (completed steps, current step, remaining steps)
   - Key decisions made (what the user chose, what was confirmed)
   - Active constraints (what rules currently apply)
   - Pending items (what still needs resolution)

Design principle: Working memory grows while the total window stays finite. An agent that doesn't manage this tension will run out of room before the task is done.
```

# Context Design for Agentic AI — Prompts, Templates & Examples

Companion resources for [**Context Design for Agentic AI: Ten Decision Points That Shape Autonomous System Behavior**](https://medium.com/@adedayoagarau/dfcfae21db66?source=friends_link&sk=7482bc7132919e850748610b09ad7999) 

Reusable prompts for designing the eight artifacts that govern agentic system behavior. A multi-agent handoff schema template. A worked example threading an airline rebooking agent through every decision point.

---

## The Series

| # | Article | Link |
|---|---------|------|
| 1 | The Next Layer of AI Content Design: Context Design | [Read →](https://medium.com/@adedayoagarau/the-next-layer-of-ai-content-design-context-design-437f0fd42a2c) | 
| 2 | Context Design in Practice | [Read →](https://medium.com/@adedayoagarau/context-design-in-practice-6cff6ea8d6c0) |   |
| 3 | Context Design for Agentic AI | [Read →](https://medium.com/@adedayoagarau/dfcfae21db66?source=friends_link&sk=7482bc7132919e850748610b09ad7999) |

---

## The 8 Design Artifacts

Each artifact maps to a decision point in the article. The `prompts/` directory contains a reusable template for generating each one.

| # | Artifact | What it governs | Template |
|---|----------|----------------|----------|
| 1 | Tool Access Policy | What the agent can do, under what conditions | [`prompts/tool-access-policy.md`](prompts/tool-access-policy.md) |
| 2 | Autonomy Matrix | Which actions require which approval level | [`prompts/autonomy-matrix.md`](prompts/autonomy-matrix.md) |
| 3 | Working Memory Schema | What persists, compresses, expires | [`prompts/working-memory-schema.md`](prompts/working-memory-schema.md) |
| 4 | Failure Taxonomy | Failure types → recovery behaviors | [`prompts/failure-taxonomy.md`](prompts/failure-taxonomy.md) |
| 5 | Handoff Protocol | What transfers between agents | [`templates/handoff-schema-template.json`](templates/handoff-schema-template.json) / [`.md`](templates/handoff-schema-template.md) |
| 6 | Completion Rubric | What "done" means per task type | [`prompts/completion-rubric.md`](prompts/completion-rubric.md) |
| 7 | Constraint Specification | Global + per-step rules | [`prompts/constraint-specification.md`](prompts/constraint-specification.md) |
| 8 | Context Evolution Policy | What adapts vs. what requires governance | [`prompts/context-evolution-policy.md`](prompts/context-evolution-policy.md) |

---

## Repository Structure

```
agentic-context-design/
├── README.md
├── prompts/                          ← Reusable prompt templates for each artifact
│   ├── tool-access-policy.md
│   ├── autonomy-matrix.md
│   ├── working-memory-schema.md
│   ├── failure-taxonomy.md
│   ├── constraint-specification.md
│   ├── completion-rubric.md
│   └── context-evolution-policy.md
├── templates/                        ← Handoff schema (JSON + Markdown)
│   ├── handoff-schema-template.json
│   └── handoff-schema-template.md
└── examples/                         ← Complete worked example
    └── airline-rebooking-agent/
        ├── full-context-window.md    ← What's actually in the window at Step 4 (~20k tokens)
        ├── tool-definitions.json     ← 8 MCP-style tool definitions
        ├── handoff-example.json      ← Booking → compensation agent handoff
        ├── plan-state-example.md     ← Plan evolution across 6 steps
        └── scratchpad-example.md     ← Structured working memory at steps 1, 3, 4, 6
```

---

## How to Use

These are starter templates.

**Start here:** Pick the artifact closest to your current problem. If you're building a new agent, start with the **Tool Access Policy** and **Autonomy Matrix** — they shape every other decision. If you're debugging an existing one, start with the **Failure Taxonomy**.

**Each prompt template follows the same structure:**

1. A "Fill in your context" section with placeholders for your domain, tools, and requirements
2. The prompt itself, ready to run with any LLM
3. An output format specification
4. Design principles for evaluating and adapting the result

**The examples directory** shows what a complete context design looks like for one domain (airline rebooking). Use it as a reference, not a template — your agent's domain will have different tools, different risk profiles, and different failure modes.

**Version your artifacts.** Context design is living documentation. Use the `schema_version` field in handoff templates. Maintain a changelog when constraints or policies change. The article's section on context evolution explains why this matters.

---

## Attribution
Free to use with attribution.
Created by [Adedayo Agarau](https://medium.com/@adedayoagarau).

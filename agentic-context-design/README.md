# Context Design for Agentic AI — Prompts, Templates & Examples

Companion resources for the article **"Context Design for Agentic AI"** by Adedayo Agarau — the third installment in the Context Design series.

This collection contains reusable prompts for designing the ten decision points that shape agentic system behavior, a multi-agent handoff schema template, and a worked example using an airline rebooking agent.

## Links

- **Article**: [Context Design for Agentic AI — add Medium link later]
- **Series**:
  - Article 1: [add link to first article in series]
  - Article 2: [add link to second article in series]

## The 8 Design Artifacts

These are the core artifacts covered in the article. Each has a corresponding prompt template in the `prompts/` directory:

| # | Artifact | File |
|---|----------|------|
| 1 | Tool Access Policy | [`prompts/tool-access-policy.md`](prompts/tool-access-policy.md) |
| 2 | Autonomy Matrix | [`prompts/autonomy-matrix.md`](prompts/autonomy-matrix.md) |
| 3 | Working Memory Schema | [`prompts/working-memory-schema.md`](prompts/working-memory-schema.md) |
| 4 | Failure Taxonomy | [`prompts/failure-taxonomy.md`](prompts/failure-taxonomy.md) |
| 5 | Handoff Protocol | [`templates/handoff-schema-template.json`](templates/handoff-schema-template.json) / [`templates/handoff-schema-template.md`](templates/handoff-schema-template.md) |
| 6 | Completion Rubric | [`prompts/completion-rubric.md`](prompts/completion-rubric.md) |
| 7 | Constraint Specification | [`prompts/constraint-specification.md`](prompts/constraint-specification.md) |
| 8 | Context Evolution Policy | [`prompts/context-evolution-policy.md`](prompts/context-evolution-policy.md) |

## Repository Structure

```
agentic-context-design/
├── README.md
├── prompts/
│   ├── tool-access-policy.md
│   ├── autonomy-matrix.md
│   ├── failure-taxonomy.md
│   ├── working-memory-schema.md
│   ├── constraint-specification.md
│   ├── completion-rubric.md
│   └── context-evolution-policy.md
├── templates/
│   ├── handoff-schema-template.json
│   └── handoff-schema-template.md
└── examples/
    └── airline-rebooking-agent/
        ├── full-context-window.md
        ├── tool-definitions.json
        ├── handoff-example.json
        ├── plan-state-example.md
        └── scratchpad-example.md
```

## How to Use

These are **starter templates** — not production-ready configurations. Here's how to get the most out of them:

1. **Pick an artifact.** Start with the design artifact most relevant to your current challenge. If you're just beginning, start with the Tool Access Policy and Autonomy Matrix — they shape every other decision.

2. **Fill in your context.** Each prompt template has a "Fill in your context" section. Replace the placeholder values with your agent's specific domain, tools, and requirements.

3. **Run the prompt.** Use the filled-in prompt with your preferred LLM to generate a first draft of that artifact.

4. **Adapt the output.** The generated artifact is a starting point. Rename fields to match your codebase, adjust risk levels for your domain, and add constraints specific to your organization.

5. **Version your schemas.** As your agent evolves, your context design should evolve with it. Use the `schema_version` field in handoff templates and maintain a changelog for prompt updates.

6. **Use the examples.** The `examples/airline-rebooking-agent/` directory shows what a complete context design looks like for one domain. Use it as a reference when building your own.

## Attribution

Free to use with attribution. Created by **Adedayo Agarau**.

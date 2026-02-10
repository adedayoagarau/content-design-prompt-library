# Constraint Specification Prompt

Use this prompt to define global constraints (always active) and per-step constraints (activated situationally).

## Fill in your context:
- **Agent name/role**: [e.g., Customer support agent]
- **Domain**: [e.g., Airline rebooking]
- **Workflow steps**: [list the steps in your agent's main workflow]
- **Safety requirements**: [regulatory, legal, ethical requirements]
- **Quality standards**: [what "good" looks like beyond safety]

## Prompt:

```
You are designing constraints for [agent name].

Define two layers:

GLOBAL CONSTRAINTS — always active, regardless of step:
List rules that apply everywhere. These typically cover:
- Data privacy (never share X, always mask Y)
- Authorization (never do X without Y)
- Safety (never allow X, always flag Y)
- Compliance (regulatory requirements)

PER-STEP CONSTRAINTS — activated when specific steps begin:
For each workflow step, define rules specific to that step. These typically cover:
- Quality criteria (how to rank options, what to prioritize)
- Filtering rules (what to include/exclude from results)
- Presentation rules (how many options, what format)
- Validation rules (what to check before executing)

Format global constraints as a system prompt block.
Format per-step constraints as individual blocks labeled by step.

Design principle: Global constraints set the floor. Per-step constraints define what "good" looks like for each specific action. The gap between them is where most agent failures live.
```

# Completion Rubric Prompt

Use this prompt to define how your agent knows it's done.

## Fill in your context:
- **Agent name/role**: [e.g., Customer support agent]
- **Task type**: [e.g., Flight rebooking, Order return, Account setup]
- **Stakeholders**: [who needs to be satisfied for this task to be "done"]
- **Quality expectations**: [speed, accuracy, customer satisfaction]

## Prompt:

```
You are designing a completion rubric for [agent name] performing [task type].

Define three tiers of criteria:

[REQUIRED] — must all be true for the task to be considered complete:
List the non-negotiable outcomes. The agent cannot mark the task done unless all of these are satisfied.

[IF ELIGIBLE] — apply conditionally based on task state:
List outcomes that only apply in certain scenarios (e.g., compensation only if cancellation was airline's fault).

[QUALITY] — tracked for system performance but don't block completion:
List metrics that indicate how well the task was done (time to completion, number of escalations, customer sentiment).

Design principles:
- Without explicit criteria, agents either stop too early or never stop.
- "Done" is a design decision. Models are poor at knowing when to stop.
- Required criteria prevent early termination. Quality criteria prevent over-optimization.
```

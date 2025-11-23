## Loading State Content Strategy

**Purpose**: Reduce perceived wait time and maintain user engagement during asynchronous operations.

---

**PROMPT:**

Design loading state content for {{loading_scenario}}.

=== LOADING PARAMETERS ===
Operation: {{operation}} (data fetch, file upload, processing, waiting)
Expected duration: {{duration_seconds}} seconds (0-3, 3-10, 10-30, 30+)
Progress determinacy: {{is_determinate}} (true/false)
Can cancel: {{is_cancellable}} (true/false)
Can background: {{can_background}} (true/false)
Data sensitivity: {{sensitivity}} (none, personal, financial, medical)

=== USER PSYCHOLOGY ===
Wait tolerance: {{tolerance_level}} (low/medium/high)
Distraction risk: {{distraction_likelihood}} (will they leave?)
Context switching: {{allows_context_switch}} (can they do other tasks?)
Value of completion: {{completion_value}} (critical/important/nice-to-have)

=== CONTENT STRATEGY BY DURATION ===

**0-3 seconds (Perceived Instant)**
- Static spinner/word sufficient
- Focus on confirmation: "Loading..."

**3-10 seconds (Noticed Wait)**
- Progress indication: spinner/progress bar
- Reassurance: "This usually takes a moment"
- Optional: Fun fact/tip

**10-30 seconds (Significant Wait)**
- Determinate progress: percentage or steps
- Time estimate: "About 15 seconds remaining"
- Engagement: rotating tips
- Allow cancellation

**30+ seconds (Extended Wait)**
- Detailed progress: step-by-step breakdown
- Accurate ETA: "2-3 minutes remaining"
- Engagement: educational content, progress stories
- Enable backgrounding
- Send notification on completion

=== OUTPUT STRUCTURE ===

```json
{
  "loading_state": {
    "initial": {
      "copy": "string",
      "animation": "spinner/progress_bar/skeleton",
      "accessibility_announcement": "string for screen reader"
    },
    "progress_updates": {
      "determinate": {
        "show_percentage": "boolean",
        "show_time_remaining": "boolean",
        "step_labels": ["string", "string"]
      },
      "indeterminate": {
        "rotation_interval_ms": "number",
        "content_variations": ["string", "string"]
      }
    },
    "engagement_content": {
      "type": "tips/facts/progress_story/quotes",
      "items": [
        {
          "headline": "string (max 60 chars)",
          "description": "string (max 150 chars)",
          "visual": "optional icon/image"
        }
      ],
      "rotation_interval_ms": "number"
    },
    "cancellation": {
      "allowed": "boolean",
      "copy": "string",
      "confirmation_required": "boolean",
      "cleanup_action": "string"
    },
    "completion_transition": {
      "success_message": "string",
      "auto_dismiss_ms": "number",
      "next_action_focus": "string"
    }
  }
}
```

=== EXAMPLES ===

**Example 1: Short Data Fetch (2 seconds)**
- operation: "load user profile"
- duration_seconds: 2
- is_determinate: false
- is_cancellable: false
- tolerance_level: "high"

**Example 2: File Upload (45 seconds)**
- operation: "upload video"
- duration_seconds: 45
- is_determinate: true
- is_cancellable: true
- can_background: true
- distraction_likelihood: "high"

## Video Tutorial Script Development v1.0

**Purpose**: Write clear, engaging scripts for video tutorials that teach users how to use products effectively while maintaining viewer engagement and ensuring accessibility.

---

**PROMPT:**

You are writing video tutorial scripts for {{product_name}}, a {{product_category}} targeting {{target_audience}}. Create scripts that teach {{tutorial_topic}} through clear narration, logical sequencing, and engaging delivery while remaining accessible and easy to follow.

=== VIDEO CONTEXT ===

**Product Details**:
- Product name: {{product_name}}
- Product category: {{product_category}}
- Target audience: {{target_audience}}
- User expertise: {{user_expertise_level}} (beginner/intermediate/advanced/mixed)
- Tutorial topic: {{tutorial_topic}}
- Learning objective: {{learning_objective}}

**Video Specifications**:
- Target length: {{target_duration}} (30 seconds/1-2 minutes/3-5 minutes/5-10 minutes/10+ minutes)
- Video style: {{video_style}} (screencast/live-action/animation/mixed)
- Presenter type: {{presenter_type}} (voice-over/on-camera/AI voice/silent with text)
- Platform: {{distribution_platform}} (YouTube/in-app/help center/social media)
- Tone: {{tone}} (professional/casual/energetic/instructional)

=== TUTORIAL STRUCTURE ===

**Content Requirements**:
- Prerequisites: {{prerequisites}}
- Key concepts covered: {{key_concepts}}
- Steps to demonstrate: {{step_count}}
- Common mistakes to address: {{common_mistakes}}
- Success criteria: {{success_indicators}}
- Follow-up actions: {{next_steps}}

=== OUTPUT REQUIREMENTS ===

```yaml
video_tutorial_script_system:
  script_structure:
    opening_section:
      hook:
        duration: "5-10 seconds"
        purpose: "Grab attention and state benefit"
        techniques:
          - "Present problem viewer wants to solve"
          - "Show end result preview"
          - "Ask engaging question"
          - "State time commitment upfront"

        example_scripts:
          problem_based: "Spending hours on [tedious task]? I'll show you how to automate it in 3 minutes."
          result_based: "By the end of this video, you'll have your first [outcome] up and running."
          question_based: "Ever wondered how to [accomplish goal]? Let me show you."

      introduction:
        duration: "10-15 seconds"
        components:
          greeting: "Hi, I'm [Name] from [Company]"
          topic_statement: "In this tutorial, we'll cover [specific topic]"
          learning_outcome: "By the end, you'll be able to [concrete outcome]"
          time_estimate: "This will take about [X] minutes"

        template: |
          Hi, I'm [Name]. In this tutorial, you'll learn how to [action].
          By the end, you'll be able to [specific outcome].
          This will take about [X] minutes. Let's get started!

    main_content_section:
      step_by_step_walkthrough:
        step_introduction:
          structure: "Announce step, explain why, show how"
          script_pattern: "First/Next/Now, we'll [action] so that [benefit]"

        step_execution:
          narration_pace: "Slightly slower than normal speech"
          action_description: "Describe what you're doing as you do it"
          click_callouts: "Verbal cues: 'I'm clicking...', 'Now I'll select...'"
          field_inputs: "State what you're entering: 'I'll enter [value] here'"

        step_confirmation:
          structure: "Show result, confirm success"
          script_pattern: "And you can see [outcome]. Perfect, that's working correctly."

        example_step_script: |
          Now let's create our first automation.

          Click the "Create Automation" button in the top right—there it is.

          We'll start with a template, so I'm selecting "Welcome Email" from the gallery.

          Now we need to set our trigger. I'll choose "New Subscriber" from the dropdown.

          And there we go—you can see our automation is now set up and ready to activate.

      concept_explanations:
        when_to_explain: "Before showing complex feature or unfamiliar term"
        explanation_pattern:
          definition: "Brief what-it-is statement"
          purpose: "Why it matters"
          analogy: "Real-world comparison (if helpful)"
          transition: "Return to demonstration"

        example_script: |
          Before we continue, let's quickly talk about "webhooks."

          A webhook is like a notification system—when something happens in one app,
          it automatically tells another app about it. Think of it like a doorbell:
          when someone presses it, you get notified.

          Okay, now let's set one up...

      visual_callouts:
        highlighting: "Zoom, circle, or arrow to important elements"
        narration_sync: "Describe visual cues: 'Notice the green checkmark here...'"
        pause_points: "Brief pause after showing complex UI to let viewers absorb"

    troubleshooting_section:
      when_to_include: "For common errors or confusion points"
      structure:
        problem_statement: "If you see [error/issue]..."
        diagnosis: "This usually means [explanation]"
        solution: "To fix it, [action]"

      example_script: |
        Quick troubleshooting tip: If you don't see the "Import" button,
        make sure you've selected at least one file. The button only appears
        after you've chosen what to import.

    closing_section:
      recap:
        duration: "15-20 seconds"
        content: "Brief summary of what was covered"
        script_pattern: "Today we covered how to [X], [Y], and [Z]"

      next_steps:
        content: "What to do next or related topics"
        examples:
          - "Now try creating your own [item]"
          - "Next, check out our video on [related topic]"
          - "For advanced techniques, see [resource]"

      call_to_action:
        options:
          - "Subscribe for more tutorials"
          - "Leave questions in comments"
          - "Download the template/resource"
          - "Try it yourself and share results"

      closing_template: |
        Great work! You now know how to [main accomplishment].

        Next, I recommend [next step/related video].

        If you have questions, drop them in the comments below.

        Thanks for watching, and I'll see you in the next tutorial!

  narration_writing_guidelines:
    conversational_style:
      principles:
        - "Write like you're teaching a friend"
        - "Use contractions (I'll, we're, let's)"
        - "Address viewer directly (you'll see, you can)"
        - "Avoid overly formal or robotic language"

      good_examples:
        - "Let's click this button here"
        - "Now you'll see the menu appear"
        - "I'm going to show you a quick trick"

      avoid:
        - "One must proceed to click the aforementioned button"
        - "The user interface will display the subsequent menu"
        - "It is recommended to utilize this feature"

    pacing_techniques:
      natural_pauses:
        - "After completing each step (2 seconds)"
        - "Before introducing new concept (1-2 seconds)"
        - "After asking rhetorical question (1 second)"

      speed_variations:
        slow_down: "Technical terms, URLs, important warnings"
        normal_pace: "Standard instructions and explanations"
        slightly_faster: "Familiar concepts or recap sections"

      script_notation:
        pause_indicator: "[PAUSE]"
        emphasis_indicator: "*emphasize this*"
        slow_indicator: "[SLOWLY]"

    clarity_principles:
      one_idea_per_sentence: "Avoid complex compound sentences"
      active_voice: "Click the button" not "The button should be clicked"
      specific_language: "Click Save" not "Click the appropriate button"
      avoid_ambiguity: "Top right corner" not "over here"

    engagement_techniques:
      rhetorical_questions:
        purpose: "Re-engage attention, transition topics"
        examples:
          - "Want to speed this up? Here's a keyboard shortcut..."
          - "What if you need to edit this later?"
          - "See how easy that was?"

      preview_upcoming:
        purpose: "Maintain interest through longer tutorials"
        examples:
          - "In a moment, I'll show you a time-saving trick"
          - "Coming up: how to customize this for your needs"

      acknowledge_difficulty:
        purpose: "Build rapport, normalize struggle"
        examples:
          - "This part can be tricky at first"
          - "Don't worry if this seems complex—it gets easier"

  accessibility_considerations:
    audio_description:
      describe_visual_actions: "State what you're clicking, where it's located"
      describe_outcomes: "Describe what appears, changes, or happens"
      avoid_vague_gestures: "Don't say 'this' or 'here' without context"

      good_example: "I'm clicking the blue Save button in the bottom right corner"
      bad_example: "I'm clicking this button here"

    caption_friendly_script:
      clear_sentences: "Complete thoughts that read well as text"
      spell_out_acronyms: "Say and show: 'API—that's Application Programming Interface'"
      avoid_relying_on_audio_only: "If you mention a sound, show visual equivalent"

    transcript_optimization:
      chapter_markers: "Include timestamps for major sections"
      formatting: "Use headings and bullets in transcript"
      links_in_description: "Put URLs in video description, not narration"

  production_notes:
    script_formatting:
      narration_column: "What to say"
      visual_column: "What to show on screen"
      timing_column: "Approximate timestamp"
      notes_column: "Technical or editing notes"

      example_format: |
        | Time | Visual | Narration | Notes |
        |------|--------|-----------|-------|
        | 0:00 | Title card | "Hi, I'm Sarah from DataFlow..." | Upbeat music |
        | 0:08 | Dashboard screen | "In this tutorial, we'll create..." | Zoom to 125% |
        | 0:15 | Cursor to button | "First, click Create Report..." | Highlight button |

    b_roll_suggestions:
      define: "Supporting visuals that illustrate concepts"
      use_cases:
        - "Example finished products while explaining benefits"
        - "Close-ups of UI elements being discussed"
        - "Animated diagrams for complex workflows"

    editing_cues:
      jump_cuts: "Mark sections that can be tightened in editing"
      graphic_overlays: "Note where text callouts or arrows needed"
      speed_adjustments: "Indicate sections to speed up (2x demo of repetitive task)"

  video_length_optimization:
    under_60_seconds:
      purpose: "Social media, quick tips, feature highlights"
      structure: "Hook (5s) → One key point (45s) → CTA (10s)"
      script_style: "Extremely concise, no fluff"

    1_3_minutes:
      purpose: "Quick tutorials, getting started guides"
      structure: "Intro (15s) → Core steps (2:30) → Recap (15s)"
      script_style: "Focused on one specific task"

    3_5_minutes:
      purpose: "Feature deep-dives, workflow tutorials"
      structure: "Intro (20s) → Main content (4:00) → Troubleshooting (20s) → Close (20s)"
      script_style: "Comprehensive but still focused"

    5_10_minutes:
      purpose: "Complete workflows, multi-step processes"
      structure: "Chapters with clear transitions"
      script_style: "In-depth with examples and variations"

  testing_and_refinement:
    read_aloud_test:
      purpose: "Ensure natural flow and timing"
      check_for:
        - "Tongue twisters or awkward phrases"
        - "Sentences that are too long for one breath"
        - "Clarity when read without visual context"

    technical_review:
      verify: "All steps are accurate and current"
      test: "Follow script exactly to catch missing steps"
      update: "Revise if UI has changed since script written"

    audience_testing:
      ideal: "Have someone from target audience follow along"
      gather_feedback: "Where did they get confused or lost?"
      iterate: "Revise based on real user comprehension"
```

=== EXAMPLES ===

**Example 1: Project Management Software (3-minute tutorial)**
- product_name: "TaskMaster"
- tutorial_topic: "How to create your first project board"
- target_audience: "New users, small business owners"
- video_style: "Screencast with voice-over"
- target_duration: "3 minutes"

Script excerpt:
```
[0:00 - HOOK]
Want to get your team organized in under 3 minutes? Let me show you how to create your first project board in TaskMaster.

[0:08 - INTRO]
Hi, I'm Maria from TaskMaster. Today you'll learn how to set up a project board, add tasks, and invite your team. By the end of this video, you'll have a fully functional board ready to use. Let's dive in!

[0:22 - STEP 1]
First, we'll create a new board. Click the plus icon in the top left corner—right here—and select "New Board."

[0:30]
Now give your board a name. I'll call mine "Website Redesign" but you can name it whatever fits your project.

[0:38]
Next, choose a template or start from scratch. For this example, I'm selecting the "Kanban" template since it's perfect for tracking workflow stages.

[0:48 - VISUAL PAUSE - 2 seconds to show template options]

[0:50 - STEP 2]
Great! Now let's add our first task. Click "Add Task" in the "To Do" column...

[continues...]

[2:35 - TROUBLESHOOTING]
Quick tip: If you don't see the "Invite" button, make sure you're on a paid plan. The free tier limits collaboration to just you.

[2:45 - CLOSING]
Nice work! You've created your first project board, added tasks, and invited team members.

Next, I recommend watching our video on task dependencies to level up your project planning.

Questions? Drop them in the comments. Thanks for watching!
```

**Example 2: Photo Editing App (90-second social media tutorial)**
- product_name: "SnapEdit"
- tutorial_topic: "Remove backgrounds in one tap"
- target_audience: "Content creators, Instagram users"
- video_style: "On-camera with screen recording insert"
- target_duration: "90 seconds"

Script:
```
[0:00-0:05 - HOOK]
Want professional product photos without a photo studio? Watch this.

[0:06-0:15 - INTRO]
I'm Jake, and I'm about to show you how to remove any background from your photos with just one tap using SnapEdit.

[0:16-0:25]
Open SnapEdit and tap the plus icon to import your photo. I'm using this coffee mug I'm selling on Instagram.

[0:26-0:35]
Now here's the magic: tap the "Remove Background" tool at the bottom.

[0:36-0:40]
[PAUSE - Show AI processing]

[0:41-0:50]
And boom—instant cutout! The AI automatically detected the mug and removed everything else.

[0:51-1:00]
Want a different background? Tap "Backgrounds" and choose from hundreds of options. I'll pick this marble texture.

[1:01-1:10]
Love it! Now just tap "Export" and you've got a pro-quality product photo ready for your store or social media.

[1:11-1:20]
That's it—from regular photo to professional product shot in under a minute.

Try it yourself and tag us with your results! Link in bio to download SnapEdit.
```

**Example 3: Developer Tool (8-minute technical walkthrough)**
- product_name: "CloudDeploy"
- tutorial_topic: "Setting up CI/CD pipeline"
- target_audience: "Software developers"
- video_style: "Screencast with code examples"
- target_duration: "8 minutes"

Script excerpt:
```
[0:00 - HOOK]
Deploying code shouldn't take 30 minutes of your time. Let me show you how to set up a fully automated CI/CD pipeline that deploys your app in under 5 minutes.

[0:10 - INTRO]
I'm Alex from CloudDeploy. In this tutorial, we'll configure a continuous integration and deployment pipeline for a Node.js application.

By the end, every git push to your main branch will automatically run tests and deploy to production.

This tutorial assumes you have a GitHub repo and basic YAML knowledge. It'll take about 8 minutes. Let's get started.

[0:35 - CHAPTER 1: Setting up]
First, we need to connect your repository. From the CloudDeploy dashboard, click "New Project"...

[continues with technical detail...]

[3:45 - CONCEPT EXPLANATION]
Before we write our pipeline config, let's talk about build stages.

A stage is a step in your pipeline—like testing, building, or deploying. Stages run in sequence, and if one fails, the pipeline stops. This prevents broken code from reaching production.

Think of it like a quality checkpoint system at a factory.

Okay, now let's define our stages in the config file...

[continues...]
```

---

**Accessibility Requirements**: All video tutorials must meet WCAG 3.0 Level AA standards. Provide accurate closed captions (not auto-generated only). Include full text transcript with timestamps. Audio describe visual-only actions in narration. Maintain clear audio quality with minimal background noise. Ensure on-screen text has 4.5:1 contrast ratio. Provide audio description track for complex visual demonstrations. Support variable playback speed. Use descriptive video titles and chapter markers.

**Psychological Principles**: Cognitive load management (one concept at a time). Dual coding theory (verbal + visual reinforcement). Active learning (encouraging users to follow along). Chunking (breaking complex tasks into steps). Completion motivation (showing progress, stating duration upfront). Engagement through conversational tone (parasocial relationship). Reduced anxiety through normalization of difficulty and troubleshooting guidance.

## Contextual Help Panel Design v1.0

**Purpose**: Create embedded help panels that provide comprehensive assistance within the application interface, offering guidance without requiring users to leave their workflow.

---

**PROMPT:**

You are designing contextual help panel systems for {{application_name}}, a {{application_type}} used by {{user_persona}}. Create in-context help experiences that provide detailed guidance, examples, and resources exactly where users need them, maintaining workflow continuity while offering comprehensive support.

=== APPLICATION CONTEXT ===

**Product Information**:
- Application name: {{application_name}}
- Application type: {{application_type}} (SaaS/enterprise software/mobile app/platform)
- User persona: {{user_persona}}
- Primary workflows: {{primary_workflows}}
- Complexity level: {{complexity_level}} (simple/moderate/complex/highly technical)
- Interface layout: {{interface_layout}} (sidebar-based/multi-panel/single-page/tabbed)

**Help Panel Strategy**:
- Panel position: {{panel_position}} (right sidebar/slide-out/modal/bottom-sheet/split-view)
- Display trigger: {{display_trigger}} (persistent/toggle/contextual/first-time)
- Content depth: {{content_depth}} (quick-reference/comprehensive/layered)
- Update mechanism: {{update_mechanism}} (static/dynamic/contextual)
- Screen size support: {{screen_support}} (desktop-only/responsive/mobile-optimized)

=== HELP PANEL ARCHITECTURE ===

**Panel Contexts**:
- Page-level help: {{page_contexts}}
- Task-specific guidance: {{task_contexts}}
- Feature explanations: {{feature_contexts}}
- Error resolution: {{error_contexts}}
- Onboarding stages: {{onboarding_stages}}
- Advanced features: {{advanced_feature_areas}}

=== OUTPUT REQUIREMENTS ===

```yaml
contextual_help_panel_system:
  panel_structure:
    layout_components:
      header:
        title: "Context-aware heading (dynamic based on active feature)"
        subtitle: "Brief description of what help is provided"
        close_button: "Persistent close/minimize control"

      navigation:
        tabs: "Separate content types (Overview, Steps, Examples, FAQ)"
        breadcrumbs: "Show help hierarchy if nested topics"
        search: "Search within help content"

      content_area:
        scrollable: "Vertical scroll for long content"
        max_width: "Optimal reading width (600-700px)"
        hierarchy: "Clear H2, H3 structure with jump links"

      footer:
        feedback: "'Was this helpful?' rating"
        contact: "Link to support with context pre-filled"
        related: "Links to related help topics"

    responsive_behavior:
      desktop: "Fixed right sidebar (300-400px width)"
      tablet: "Slide-out panel (covers 50-60% of screen)"
      mobile: "Bottom sheet or full-screen modal"

  content_types:
    overview_content:
      purpose: "High-level explanation of current feature/page"
      structure:
        what_it_is: "1-2 sentence definition"
        why_use_it: "Benefits and use cases (3-4 bullet points)"
        key_concepts: "Important terminology (2-5 terms with definitions)"
        quick_start: "Shortest path to first value"

      example_template: |
        ## [Feature Name]

        [What this feature does in one clear sentence.]

        **Use this to:**
        • [Primary use case]
        • [Secondary use case]
        • [Additional use case]

        **Key concepts:**
        • **[Term]**: [Brief definition]
        • **[Term]**: [Brief definition]

        **Quick start**: [Link to step-by-step guide]

    step_by_step_guidance:
      purpose: "Procedural instructions for completing tasks"
      structure:
        prerequisites: "What's needed before starting"
        numbered_steps: "Clear, sequential instructions"
        screenshots: "Visual guidance for complex UI"
        success_indicators: "How to know it worked"
        troubleshooting: "Common issues and fixes"

      step_writing_guidelines:
        - "One action per step"
        - "Start with action verb (Click, Enter, Select, Navigate)"
        - "Use exact UI labels in bold"
        - "Include expected outcomes"
        - "Keep steps under 20 words each"

      example_template: |
        ### How to [Complete Task]

        **Before you begin:**
        You'll need [prerequisites]

        **Steps:**
        1. Click **[Button Name]** in the top navigation
        2. Enter your [field name] in the **[Field Label]** field
        3. Select **[Option]** from the dropdown menu
        4. Click **Save Changes**

        You'll see a confirmation message: "[Success message]"

        **Troubleshooting:**
        • If [problem], try [solution]
        • If [problem], check that [condition]

    examples_showcase:
      purpose: "Real-world use cases and templates"
      structure:
        scenario_description: "Who this example is for"
        example_walkthrough: "Concrete example with sample data"
        template_access: "Link to copy/use template"
        variations: "How to adapt for different needs"

      example_template: |
        ### Example: [Use Case Title]

        **Scenario**: [Describe who and what]

        **Setup**:
        Let's say you're [specific scenario]. Here's how to configure it:

        [Specific example with real values]

        **Result**: [What the user achieves]

        [Use This Template] [View Live Demo]

        **Variations:**
        • For [different need], adjust [parameter]
        • If you need [outcome], try [alternative]

    faq_section:
      purpose: "Answer common questions about current feature"
      structure:
        question_list: "5-10 most frequent questions"
        concise_answers: "50-150 words per answer"
        links_to_deep_dives: "Full articles for complex topics"

      question_categories:
        - "How do I...?"
        - "Can I...?"
        - "What's the difference between...?"
        - "Why isn't...?"

    video_tutorials:
      purpose: "Visual learning for complex procedures"
      structure:
        thumbnail: "Clear preview image"
        duration: "Show length (aim for 2-5 minutes)"
        transcript: "Full text for accessibility and skimming"
        key_timestamps: "Jump links to specific sections"

      example_template: |
        ### Video: [Topic Title]

        [Embedded video player]
        Duration: 3:24

        **In this video:**
        • [Topic covered] (0:15)
        • [Topic covered] (1:30)
        • [Topic covered] (2:45)

        [View Transcript]

  dynamic_content_behavior:
    context_awareness:
      page_context:
        trigger: "Changes based on current page/feature"
        behavior: "Auto-loads relevant help content"
        example: "On 'Reports' page → shows Reports help"

      action_context:
        trigger: "Updates when user starts specific task"
        behavior: "Shows task-specific guidance"
        example: "User creates new item → shows creation workflow help"

      error_context:
        trigger: "Appears when user encounters error"
        behavior: "Shows troubleshooting for specific error"
        example: "Validation error → shows how to fix that field"

    progressive_enhancement:
      first_visit:
        content: "Getting started guide and basics"
        tone: "Educational and encouraging"

      regular_use:
        content: "Efficiency tips and shortcuts"
        tone: "Informative and concise"

      advanced_users:
        content: "Advanced features and API docs"
        tone: "Technical and reference-focused"

  interaction_patterns:
    panel_states:
      open:
        trigger: "Click help icon or ? key"
        behavior: "Slides in from edge, maintains position"
        persistence: "Stays open across page navigation"

      closed:
        indicator: "Help icon in consistent location"
        reopen_memory: "Remembers user's open/close preference"

      minimized:
        appearance: "Collapsed header bar visible"
        expand_trigger: "Click bar to restore"

    search_within_help:
      search_box: "Prominent search at top of panel"
      scope: "Searches current help context first, then all help"
      results: "Highlights matching text, shows snippets"
      empty_state: "Suggests related topics or contact support"

    feedback_collection:
      helpful_rating:
        placement: "Bottom of each help section"
        options: "👍 Helpful | 👎 Not helpful"
        follow_up: "Optional: 'What were you looking for?' text field"

      missing_content_detection:
        trigger: "Multiple unhelpful ratings on same topic"
        action: "Flags content for review/improvement"

  content_maintenance:
    version_sync:
      product_updates: "Update help when features change"
      screenshot_refresh: "Review images quarterly"
      link_validation: "Check for broken links monthly"

    analytics_driven:
      track_metrics:
        - "Most viewed help topics"
        - "Search queries with no results"
        - "Sections with low helpful ratings"
        - "Time spent in help panel"

      optimization:
        - "Add help for frequently searched terms"
        - "Expand topics with high views but low ratings"
        - "Remove unused content"

  writing_style_guide:
    voice_and_tone:
      helpful_expert: "Knowledgeable but not condescending"
      encouraging: "Build confidence, celebrate progress"
      concise: "Respect user's time, get to the point"

    formatting_standards:
      headings: "Use sentence case, make descriptive"
      lists: "Bullet points for concepts, numbers for steps"
      emphasis: "Bold for UI elements, italic for user input"
      links: "Descriptive link text, not 'click here'"

    terminology:
      consistency: "Match exact UI labels and terms"
      jargon: "Define technical terms on first use"
      abbreviations: "Spell out acronyms on first use"

  accessibility_standards:
    semantic_html:
      headings: "Proper H2, H3 hierarchy"
      landmarks: "Nav, main, aside regions"
      lists: "Semantic ul, ol elements"

    keyboard_support:
      open_close: "Keyboard shortcut to toggle (e.g., '?')"
      navigation: "Tab through links and controls"
      search: "Keyboard shortcut to focus search"

    screen_reader:
      announcements: "Announce when panel opens/closes"
      labels: "Clear labels for all controls"
      skip_links: "Skip to main content option"

    visual_design:
      contrast: "4.5:1 text contrast minimum"
      focus_indicators: "Visible keyboard focus states"
      text_scaling: "Support 200% zoom without breaking"
```

=== EXAMPLES ===

**Example 1: Email Marketing Platform**
- application_name: "MailCraft"
- application_type: "Email marketing SaaS"
- user_persona: "Small business marketers"
- primary_workflows: "Campaign creation, list management, analytics review"
- panel_position: "Right sidebar, 350px width"

Help Panel on "Campaign Builder" Page:

**TABS**: Overview | Build Steps | Email Examples | FAQ

**Overview Tab**:
```
# Campaign Builder

Create and send email campaigns to your subscribers.

**Use this to:**
• Send newsletters and announcements
• Promote products or services
• Nurture leads with automated sequences

**Key concepts:**
• **Template**: Pre-designed email layout
• **Segment**: Subset of your email list
• **A/B Test**: Send variations to compare performance

**Quick start**: [Create Your First Campaign (3 min video)]
```

**Build Steps Tab**:
```
### How to Create a Campaign

1. Click **New Campaign** in the top right
2. Choose a **Template** or start from scratch
3. Name your campaign (internal reference only)
4. Select your **Audience** segment
5. Design your email using the drag-and-drop editor
6. Preview and test your email
7. Schedule or send immediately

**Success check**: You'll see your campaign in the Campaigns list
with status "Scheduled" or "Sent"
```

**Example 2: Project Management Software**
- application_name: "TeamSync"
- application_type: "Collaborative project management"
- user_persona: "Project managers and team leads"
- complexity_level: "Moderate"
- display_trigger: "Persistent sidebar with minimize option"

Help Panel on "Gantt Chart" View:

**Dynamic Content** (changes based on user action):

When user hovers over dependency line:
```
# Task Dependencies

This line shows that "[Task B]" can't start until "[Task A]" is complete.

**Dependency types:**
• Finish-to-Start (FS): Most common
• Start-to-Start (SS): Tasks begin together
• Finish-to-Finish (FF): Tasks end together

**To modify**: Right-click the line → Edit Dependency

[Learn more about dependencies]
```

**Example 3: Developer Code Editor**
- application_name: "CodeStudio"
- application_type: "Cloud-based IDE"
- user_persona: "Software developers"
- complexity_level: "Highly technical"
- panel_position: "Slide-out panel, keyboard accessible"

Help Panel for "Debugger":

**Tabs**: Debugger Basics | Breakpoints | Watch Expressions | Console

**Breakpoints Tab**:
```
# Breakpoints

Pause code execution at specific lines to inspect state.

**Quick actions:**
• Click line number to toggle breakpoint
• Cmd+F8 to add conditional breakpoint
• Right-click for advanced options

**Conditional breakpoints:**
Only pause when condition is true.

Example: `user.age > 18`

**Logpoints:**
Console.log without adding code.

[View debugging video tutorial (4:32)]

**Keyboard shortcuts:**
• F9: Continue
• F10: Step over
• F11: Step into
• Shift+F11: Step out
```

---

**Accessibility Requirements**: Help panels must be WCAG 3.0 Level AA compliant. Use semantic HTML with ARIA landmarks (role="complementary" for sidebar). Provide keyboard shortcuts to open/close panel. Ensure all interactive elements are keyboard accessible. Support screen readers with proper heading structure and announcements. Maintain 4.5:1 contrast ratio. Allow text resizing to 200% without content loss. Provide text alternatives for all images and videos. Make videos with captions and transcripts available.

**Psychological Principles**: Proximity principle (help near point of need reduces cognitive load). Embedded assistance maintains flow state. Contextual relevance increases perceived helpfulness. Progressive disclosure prevents overwhelm. Search functionality supports recognition over recall. Examples provide concrete mental models (learning scaffolds). Feedback mechanisms create improvement loop. Persistent availability reduces help-seeking anxiety.

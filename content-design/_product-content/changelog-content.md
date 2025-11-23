## Changelog Content Generator v1.0

**Purpose**: Document product changes with clarity and transparency, helping users stay informed about updates, fixes, and improvements while building trust through consistent communication.

---

**PROMPT:**

You are a product content designer at {{company_name}} creating changelog entries for {{release_type}} releases. Document changes that help {{user_segment}} understand updates and make informed decisions about {{product_name}}.

=== RELEASE CONTEXT ===
- Release version: {{version_number}}
- Release type: {{release_type}} (major/minor/patch/hotfix)
- Release date: {{release_date}}
- Changes included: {{change_count}} total ({{features_count}} features, {{improvements_count}} improvements, {{fixes_count}} fixes)
- User impact: {{impact_level}} (high/medium/low)
- Breaking changes: {{has_breaking_changes}} (yes/no)

=== CONTENT STRATEGY ===
- Audience: {{audience}} (all_users/developers/admins/enterprise)
- Technical depth: {{technical_level}} (high/medium/low)
- Tone: {{tone}} (professional/conversational/technical)
- Grouping strategy: {{grouping}} (by_category/by_impact/chronological)
- Include migration notes: {{migration_needed}} (yes/no)

=== OUTPUT REQUIREMENTS ===

Generate comprehensive changelog content:

```yaml
changelog_entry:
  header:
    version: "{{version_number}}"
    release_date: "{{formatted_date}}"
    release_name: "{{optional_release_name}}"

  overview:
    summary: "{{one_sentence_release_summary}}"
    highlights:
      - "{{key_change_1}}"
      - "{{key_change_2}}"
      - "{{key_change_3}}"

  sections:
    new_features:
      title: "New Features"
      format: |
        **{{feature_name}}** - {{feature_description}}
        - {{benefit_or_detail_1}}
        - {{benefit_or_detail_2}}
        [Learn more]({{doc_link}})

    improvements:
      title: "Improvements"
      format: |
        - **{{component}}**: {{improvement_description}}
        - **Performance**: {{performance_gain}}
        - **UX**: {{user_experience_enhancement}}

    bug_fixes:
      title: "Bug Fixes"
      format: |
        - Fixed {{issue_description}} that caused {{user_problem}}
        - Resolved {{bug_summary}}
        - Corrected {{incorrect_behavior}}

    breaking_changes:
      title: "Breaking Changes"
      severity: "high"
      format: |
        ⚠️ **{{change_name}}**

        **What changed:** {{technical_change}}
        **Impact:** {{who_affected}}
        **Action required:** {{migration_steps}}
        **Timeline:** {{deprecation_timeline}}

    deprecations:
      title: "Deprecations"
      format: |
        **{{deprecated_feature}}** will be removed in {{future_version}}
        - **Alternative:** Use {{replacement_feature}}
        - **Migration guide:** {{migration_link}}
        - **Support ends:** {{end_date}}

    security_updates:
      title: "Security Updates"
      format: |
        - {{cve_number}}: {{security_issue_description}}
        - Severity: {{severity_level}}
        - Action required: {{user_action}}

  formatting_guidelines:
    structure:
      - "Most important changes first"
      - "Group similar changes together"
      - "Use present tense (Fixed, Added, Improved)"
      - "Link to relevant documentation"
      - "Include visual evidence for UI changes"

    writing_style:
      voice: "clear, concise, user-focused"
      technical_balance: "explain impact, not just implementation"
      length_per_item: "1-3 sentences"

    metadata:
      tags: ["{{category_1}}", "{{category_2}}"]
      related_versions: ["{{previous_version}}", "{{next_version}}"]

  user_communication:
    notification_channels:
      - in_app: "{{brief_summary}}"
      - email: "{{detailed_summary_with_cta}}"
      - social: "{{highlights_only}}"

    education_materials:
      - video_tutorial: "{{for_complex_features}}"
      - documentation: "{{updated_docs_list}}"
      - migration_guide: "{{for_breaking_changes}}"

  templates:
    feature_entry: |
      **{{feature_name}}** - {{what_it_does}}

      {{why_it_matters}}

      {{how_to_use}}

    improvement_entry: |
      **Improved {{component}}** - {{specific_improvement}}

    fix_entry: |
      Fixed an issue where {{problem}} would {{incorrect_behavior}}

    version_comparison:
      show_diff: true
      highlight_breaking: true
      migration_checklist: true
```

=== EXAMPLES ===

**Example 1: Major Release with Breaking Changes**
- version_number: "3.0.0"
- release_type: "major"
- overview: "Complete redesign of the dashboard with improved performance and new analytics features. This release includes breaking changes to the API."

Changelog:
```
# Version 3.0.0 - March 15, 2024

This major release brings a completely redesigned dashboard, 3x faster load times, and powerful new analytics. Please review breaking changes below.

## New Features

**Advanced Analytics Dashboard** - Visualize your data with customizable charts and real-time insights.
- Create custom dashboards with drag-and-drop widgets
- Export reports in PDF, CSV, and Excel formats
- Set up automated report delivery
[View documentation](https://docs.example.com/analytics)

**Team Collaboration Spaces** - Work together in shared workspaces with real-time updates.
- Invite unlimited team members
- Comment on any data point
- Track change history

## Breaking Changes

⚠️ **API Authentication Update**

**What changed:** OAuth 2.0 is now required for all API requests. API keys are deprecated.
**Impact:** Developers using API keys for authentication
**Action required:** Migrate to OAuth 2.0 before June 1, 2024
**Migration guide:** https://docs.example.com/oauth-migration

## Improvements

- **Performance**: Dashboard loads 3x faster with optimized data fetching
- **Search**: Improved search algorithm returns more relevant results
- **Mobile**: Redesigned mobile interface with better touch targets

## Bug Fixes

- Fixed chart rendering issue that caused incorrect data display on Safari
- Resolved export timeout for large datasets
- Corrected timezone display for international users
```

**Example 2: Patch Release with Bug Fixes**
- version_number: "2.1.3"
- release_type: "patch"
- overview: "Bug fixes and minor improvements to stability and performance."

Changelog:
```
# Version 2.1.3 - March 20, 2024

This patch release addresses several bugs reported by users and includes minor performance improvements.

## Bug Fixes

- Fixed an issue where file uploads would fail for files larger than 50MB
- Resolved memory leak in real-time sync that caused browser slowdown
- Corrected date picker displaying incorrect month on first load
- Fixed notification emails not being sent for weekend activity

## Improvements

- Reduced API response time by 15% through query optimization
- Improved error messages to be more actionable
- Updated dependencies to latest security patches
```

**Example 3: Feature Release**
- version_number: "2.2.0"
- release_type: "minor"
- overview: "New automation features and improved integrations."

Changelog:
```
# Version 2.2.0 - March 25, 2024

Automate your workflow with new triggers and actions, plus enhanced Slack and Google Workspace integrations.

## New Features

**Workflow Automation** - Create automated workflows with conditional logic.
- Build workflows with visual editor
- Choose from 50+ triggers and actions
- Test workflows before activation
[Get started with automation](https://docs.example.com/automation)

**Enhanced Slack Integration** - Richer notifications and two-way sync.
- Post formatted updates to any channel
- Trigger workflows from Slack commands
- Sync status updates automatically

## Improvements

- **Google Workspace**: Improved calendar sync reliability
- **Notifications**: Added granular notification preferences
- **Export**: Faster export processing for large datasets

## Bug Fixes

- Fixed duplicate notifications being sent to some users
- Resolved integration authorization expiring unexpectedly
- Corrected incorrect character count in text fields
```

---

**Accessibility Requirements**: Clear section headings for navigation. Semantic HTML structure. Links with descriptive text (not "click here"). Code examples with proper syntax highlighting. Breaking changes clearly marked with visual indicators. Version comparison tools for users with cognitive disabilities.

**Psychological Principles**: Transparency builds trust (honesty). Clear categorization reduces cognitive load (chunking). Breaking changes prominently displayed (loss aversion). Benefits-focused language (self-interest). Consistent format creates expectations (pattern recognition). Migration guides reduce anxiety (control).

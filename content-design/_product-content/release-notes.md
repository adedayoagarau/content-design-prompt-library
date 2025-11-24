## Release Notes Generator v1.0

**Purpose**: Document updates for both technical and non-technical users with clarity, scannability, and appropriate detail level.

---

**PROMPT:**

Generate release notes for {{product_name}} version {{version_number}} containing {{change_types}} for {{audience_mix}}.

=== RELEASE CONTEXT ===
- Version: {{version_number}}
- Release date: {{release_date}}
- Release type: {{release_type}} (major/minor/patch/hotfix)
- Change types: {{changes}} (new_features/improvements/bug_fixes/security/breaking_changes)
- Audience: {{audience}} (end_users/developers/both)

=== OUTPUT REQUIREMENTS ===

```yaml
release_notes:
  header:
    version_title: "{{product_name}} {{version_number}}"
    release_date: "{{date}}"
    release_type_badge: "[Major Release]"

  summary:
    headline: "{{key_highlight}}"
    overview: "{{brief_summary_of_changes}}"
    quick_stats:
      - "{{number}} new features"
      - "{{number}} improvements"
      - "{{number}} bugs fixed"

  sections:
    new_features:
      heading: "✨ New Features"
      entry_template: |
        **{{feature_name}}**
        {{user_facing_description}}

        {{optional_screenshot_or_gif}}

        {{technical_note_if_needed}}

      example: |
        **Dark Mode**
        You can now switch to Dark Mode in Settings > Appearance. Easy on the eyes for late-night work.

        [Screenshot of dark mode]

    improvements:
      heading: "🚀 Improvements"
      entry_template: |
        - **{{area}}:** {{improvement_description}}

      examples:
        - "**Performance:** Dashboard loading is now 50% faster"
        - "**Search:** Search results now highlight matched terms"
        - "**Mobile:** Improved touch target sizes on all buttons"

    bug_fixes:
      heading: "🐛 Bug Fixes"
      level_of_detail:
        user_facing: "Fixed issue where {{problem}} would {{symptom}}"
        technical: "Fixed {{technical_issue}} affecting {{component}}"

      examples:
        - "Fixed issue where images wouldn't load on slow connections"
        - "Resolved error when deleting items with special characters"
        - "Corrected timezone display in calendar view"

    security_updates:
      heading: "🔒 Security Updates"
      pattern: "{{what_was_fixed}} - {{recommendation_if_any}}"
      example: "Updated authentication system to prevent session hijacking. No action required."

    breaking_changes:
      heading: "⚠️ Breaking Changes"
      pattern: |
        **{{what_changed}}**
        - **Impact:** {{who_affected}}
        - **What to do:** {{migration_steps}}
        - **Deadline:** {{when_old_way_stops_working}}

      example: |
        **API v1 Deprecated**
        - **Impact:** Integrations using API v1
        - **What to do:** Migrate to API v2 using our migration guide
        - **Deadline:** v1 stops working June 1, 2024

  formatting_guidelines:
    structure:
      - "Group by type (Features, Improvements, Fixes)"
      - "Most impactful changes first"
      - "Use bullet points for scannability"
      - "Include visuals for visual changes"

    language:
      - "User-facing benefit, not technical implementation"
      - "Active voice"
      - "Specific, not vague"
      - "Consistent terminology"

    linking:
      - "Link to full documentation"
      - "Link to related features"
      - "Link to migration guides"

  audience_specific_versions:
    end_user_version:
      focus: "what changed in UI/UX"
      tone: "friendly, clear"
      technical_detail: "minimal"

    developer_version:
      focus: "API changes, new methods, deprecations"
      tone: "technical, precise"
      technical_detail: "extensive"
      include: "code examples"
```

=== EXAMPLES ===

**Example 1: End-User Release Notes**
```markdown
# Version 2.5.0 - March 15, 2024

## ✨ What's New

**Team Collaboration**
Invite unlimited team members and collaborate in real-time. See who's viewing what, leave comments, and get notified of changes.

**Smart Suggestions**
We'll now suggest relevant content based on your work patterns.

## 🚀 Improvements
- Search is 3x faster
- Mobile app now works offline
- Better error messages

## 🐛 Fixes
- Fixed issue where exports would sometimes fail
- Resolved calendar sync problems
```

**Example 2: Developer Release Notes**
```markdown
# API v2.5.0

## Breaking Changes
- `GET /users` now requires authentication
- `createdAt` timestamp format changed to ISO 8601

## New Endpoints
- `POST /webhooks` - Register webhook subscriptions
- `GET /analytics/events` - Query event data

## Deprecations
- `GET /users/list` deprecated, use `GET /users` instead
- Stops working: June 1, 2024
```

---

**Accessibility Requirements**: Scannable structure. Clear headings. Descriptive link text. Alt text for images. Semantic HTML for screen readers.

**Psychological Principles**: Group by type (chunking). Lead with high-impact (primacy effect). Clear migration paths reduce anxiety. Visuals aid understanding. Specific language builds trust.

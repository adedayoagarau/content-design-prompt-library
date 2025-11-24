## Settings Save Patterns Design v1.0

**Purpose**: Create clear, reliable save patterns for settings that help users understand when changes take effect, prevent accidental data loss, provide appropriate feedback for save operations, balance convenience with safety, and establish consistent save behaviors across different types of settings.

---

**PROMPT:**

You are designing settings save patterns for {{platform_type}} serving {{user_type}}. Create save interactions that manage {{change_application}}, ensure {{data_safety}}, provide {{feedback_clarity}}, and maintain {{brand_voice}}.

=== SAVE PATTERN CONTEXT ===
Platform type: {{platform_type}} (web app/mobile app/SaaS/enterprise software/consumer product)
User type: {{user_type}} (general consumers/business users/technical users/mixed)
Change application: {{change_application}} (immediate/on-save/on-confirm/batch/deferred)
Data safety: {{data_safety}} (auto-save/manual-save/confirmation-required/undo-available)
Feedback clarity: {{feedback}} (subtle/moderate/prominent/persistent)
Settings complexity: {{complexity}} (simple/moderate/complex/mixed)

=== SAVE STRATEGY ===
Save mechanism: {{mechanism}} (auto-save/explicit-save/mixed-approach)
Confirmation needs: {{confirmation}} (none/destructive-only/all-changes/custom)
Error handling: {{errors}} (inline/modal/toast/retry-automatic)
Undo availability: {{undo}} (per-change/session/permanent/none)
Network dependency: {{network}} (online-only/offline-capable/sync-when-available)

=== OUTPUT REQUIREMENTS ===

```yaml
settings_save_patterns:
  save_pattern_types:
    auto_save:
      pattern: "Changes save automatically as user makes them"
      when_to_use:
        - "Simple, non-destructive settings"
        - "Modern web/mobile apps"
        - "Settings with immediate visual effect"
        - "User expects instant changes"

      user_experience:
        action: "User toggles or changes setting"
        feedback: "Brief confirmation (e.g., 'Saved')"
        timing: "Immediate or within 1-2 seconds"

      advantages:
        - "No save button needed"
        - "Cannot forget to save"
        - "Frictionless experience"
        - "Reduces cognitive load"

      disadvantages:
        - "Cannot review all changes before saving"
        - "Accidental changes saved immediately"
        - "Difficult to cancel multiple changes"

      example:
        setting: "Dark mode"
        interaction: "User toggles switch"
        immediate_effect: "Interface changes to dark theme"
        feedback: "'Saved' checkmark appears briefly"
        duration: "2 seconds"

    explicit_save:
      pattern: "User makes changes, then clicks Save button"
      when_to_use:
        - "Complex forms with multiple fields"
        - "Settings requiring validation"
        - "Destructive or irreversible changes"
        - "Batch changes across multiple settings"

      user_experience:
        action: "User changes one or more settings"
        state: "Changes in draft/unsaved state"
        explicit_action: "Click 'Save' or 'Save Changes' button"
        feedback: "Confirmation that changes were saved"

      advantages:
        - "Review changes before committing"
        - "Cancel entire batch of changes"
        - "Clear moment of commitment"
        - "Group related changes together"

      disadvantages:
        - "User might forget to save"
        - "Extra click required"
        - "Data loss if navigating away"

      example:
        setting: "Profile information (name, bio, location)"
        interaction: "User edits multiple fields"
        unsaved_indicator: "'Save Changes' button enabled, unsaved badge"
        explicit_save: "Click 'Save Changes'"
        feedback: "'Profile updated' success message"

    hybrid_approach:
      pattern: "Auto-save for some settings, explicit save for others"
      when_to_use:
        - "Mix of simple and complex settings"
        - "Want benefits of both patterns"
        - "Different settings have different risk levels"

      guidelines:
        auto_save_for:
          - "Toggles and switches"
          - "Theme and appearance"
          - "Non-destructive preferences"
          - "Settings with live preview"

        explicit_save_for:
          - "Text inputs (profile, account info)"
          - "Payment information"
          - "Security settings"
          - "Settings affecting others (team settings)"

      example:
        auto_saved:
          - setting: "Email notifications"
            type: "Toggle"
            saves: "Immediately when toggled"

          - setting: "Theme"
            type: "Selection"
            saves: "Immediately when selected"

        explicit_save:
          - setting: "Display name"
            type: "Text input"
            requires: "Click 'Save' button"

          - setting: "Email address"
            type: "Email input"
            requires: "Click 'Save' and verify"

    apply_preview:
      pattern: "Preview changes, then apply or cancel"
      when_to_use:
        - "Visual settings (theme, layout, colors)"
        - "Settings with significant UI impact"
        - "Complex configurations"

      user_experience:
        action: "User adjusts setting"
        preview: "See change in real-time or preview mode"
        decision: "'Apply' to save or 'Cancel' to revert"

      example:
        setting: "Interface font size"
        interaction: "User moves slider"
        preview: "Text size changes in real-time"
        actions: "'Apply' saves, 'Cancel' reverts to original"

  save_feedback_mechanisms:
    inline_feedback:
      pattern: "Feedback appears near the setting"
      variants:
        checkmark:
          appearance: "Green checkmark icon"
          duration: "2 seconds, then fades"
          message: "'Saved' or checkmark only"

        text_indicator:
          appearance: "'Saved' text"
          location: "Next to setting name"
          duration: "2-3 seconds"

        status_change:
          appearance: "Button text changes"
          before: "'Save Changes' button"
          after: "'Saved ✓' for 2 seconds"
          then: "Button disappears or disables"

      example:
        setting: "Notification preferences"
        change: "User toggles email notifications"
        feedback: "Green checkmark appears next to toggle"
        timing: "Appears after 500ms, fades after 2 seconds"

    toast_notification:
      pattern: "Temporary message overlay"
      placement: "Bottom or top of screen"
      duration: "2-4 seconds"
      dismissible: true

      variants:
        success_toast:
          message: "Settings saved successfully"
          icon: "Checkmark"
          color: "Green background"

        detailed_toast:
          message: "Email notifications enabled"
          icon: "Settings icon"
          action: "Undo (if available)"

      example:
        setting: "Privacy settings"
        save_action: "User changes profile visibility"
        toast_appears: "Bottom of screen"
        message: "'Profile visibility changed to Friends only'"
        duration: "3 seconds"
        action: "'Undo' button available"

    persistent_indicator:
      pattern: "Save status remains visible"
      when_to_use:
        - "Long forms with many fields"
        - "Settings where save timing matters"
        - "Sync-dependent settings"

      states:
        saving:
          indicator: "Saving..."
          spinner: true
          color: "Blue/gray"

        saved:
          indicator: "All changes saved ✓"
          timestamp: "Last saved 2 minutes ago"
          color: "Green/success"

        error:
          indicator: "Failed to save"
          message: "Changes couldn't be saved. Retry?"
          color: "Red/error"
          action: "Retry button"

        offline:
          indicator: "Offline - will save when connected"
          queue: "3 changes pending"
          color: "Orange/warning"

      example:
        location: "Top of settings page or sticky header"
        default: "'All changes saved' with timestamp"
        when_editing: "Changes to 'Saving...'"
        after_save: "'Saved just now' → timestamp updates"

    modal_confirmation:
      pattern: "Dialog confirms save success"
      when_to_use:
        - "Critical settings changes"
        - "Settings requiring verification"
        - "Account or billing changes"

      structure:
        title: "Settings saved"
        message: "Your changes have been applied"
        details: "List of what changed (optional)"
        action: "OK or Close button"

      example:
        setting: "Email address change"
        trigger: "User saves new email"
        modal_title: "Verify your new email"
        modal_message: "We've sent a verification link to newmail@example.com"
        action: "Got it"

  unsaved_changes_handling:
    unsaved_indicator:
      visual_cues:
        button_state:
          unsaved: "'Save Changes' button enabled, highlighted"
          saved: "Button disabled or hidden"

        badge_indicator:
          unsaved: "'Unsaved changes' badge or dot"
          location: "Near section header or tab"

        field_highlighting:
          unsaved: "Changed fields have different background"
          visual: "Light blue or yellow background"

      example:
        form: "Account settings form"
        user_edits: "Changes display name"
        indicator: "'Save Changes' button becomes blue and prominent"
        additional: "Unsaved badge appears in tab title"

    navigation_warning:
      pattern: "Warn before leaving with unsaved changes"
      trigger: "User attempts to navigate away"

      dialog:
        title: "Unsaved changes"
        message: "You have unsaved changes. What would you like to do?"
        actions:
          primary: "Save changes"
          secondary: "Discard changes"
          tertiary: "Cancel (stay on page)"

      browser_warning:
        pattern: "Native browser confirmation"
        trigger: "beforeunload event"
        message: "You have unsaved changes. Leave anyway?"
        limitation: "Generic message in modern browsers"

      example:
        scenario: "User editing profile, clicks 'Settings' link"
        popup: "Modal appears: 'Save your changes to Profile?'"
        options: "'Save' | 'Discard' | 'Cancel'"

    draft_auto_save:
      pattern: "Auto-save drafts, explicit save to publish"
      use_case: "Best of both worlds for complex settings"

      behavior:
        typing: "Auto-save to draft every 2 seconds"
        feedback: "'Draft saved' indication"
        publishing: "Explicit 'Save' or 'Publish' to apply"

      example:
        setting: "Bio or description field"
        auto_save: "Saves draft every 2 seconds while typing"
        indication: "'Draft saved at 2:34 PM'"
        publish: "Click 'Update Profile' to make draft live"

  save_timing_patterns:
    immediate_save:
      timing: "< 100ms"
      perception: "Instantaneous"
      use_for: "Toggles, theme changes, simple selections"

      example:
        setting: "Dark mode toggle"
        timing: "Theme changes instantly on toggle"
        feedback: "Visual change IS the feedback"

    debounced_save:
      timing: "Wait for user to stop typing/changing"
      delay: "500ms - 2 seconds after last change"
      use_for: "Text inputs, sliders, frequently changing values"

      example:
        setting: "Search filter text"
        behavior: "Waits 500ms after user stops typing"
        then: "Auto-saves and updates results"
        feedback: "'Saved' appears after save completes"

    batch_save:
      timing: "Save multiple changes together"
      trigger: "Explicit save button or form submission"
      use_for: "Complex forms, profile updates, preferences pages"

      example:
        settings: "Profile form (name, bio, location, website)"
        changes: "User edits all four fields"
        save: "Click 'Save Changes' once"
        feedback: "'Profile updated successfully'"

    scheduled_sync:
      timing: "Periodic sync to server"
      interval: "Every 30 seconds or on focus loss"
      use_for: "Offline-capable apps, collaborative settings"

      example:
        behavior: "Local changes save immediately to browser"
        sync: "Syncs to server every 30 seconds or on tab blur"
        feedback: "'Synced' indicator when server update succeeds"

  error_handling:
    save_failure_inline:
      pattern: "Error appears near setting"
      severity: "Moderate"

      example:
        setting: "Email address"
        error: "Invalid email format"
        display: "Red text below input: 'Please enter a valid email'"
        state: "Save button remains disabled until fixed"

    save_failure_toast:
      pattern: "Temporary error notification"
      duration: "Longer than success (5+ seconds)"
      dismissible: true

      example:
        setting: "Profile photo upload"
        error: "Upload failed due to network"
        toast: "Couldn't save profile photo. Check your connection."
        action: "'Retry' button in toast"

    save_failure_persistent:
      pattern: "Error remains until resolved"
      severity: "High"

      example:
        setting: "Payment method"
        error: "Card declined"
        display: "Red banner at top of page"
        message: "Payment method couldn't be updated. Please try a different card."
        dismissible: false
        action: "'Update Payment Method' button"

    offline_handling:
      pattern: "Queue changes when offline"

      states:
        offline_change:
          indicator: "Offline - changes saved locally"
          queue: "Will sync when online"
          feedback: "Orange/warning color"

        coming_online:
          indicator: "Syncing changes..."
          spinner: true

        sync_success:
          indicator: "All changes synced ✓"
          duration: "3 seconds"

        sync_conflict:
          indicator: "Sync conflict"
          message: "Settings were changed elsewhere. Choose which to keep:"
          options: "'Keep local' | 'Use server version'"

      example:
        scenario: "User changes settings while offline"
        feedback: "'Offline - changes will sync when connected'"
        reconnect: "Device comes online"
        auto_sync: "Syncs queued changes automatically"
        success: "'All settings synced' confirmation"

  undo_and_revert:
    immediate_undo:
      pattern: "Undo button appears briefly after save"
      duration: "5-10 seconds"
      use_for: "Auto-saved settings"

      example:
        setting: "Email notifications"
        change: "User disables email notifications"
        auto_save: "Saves immediately"
        feedback: "Toast: 'Email notifications disabled' [Undo]"
        undo_window: "10 seconds to click Undo"
        if_undo: "Reverts to previous state immediately"

    session_undo:
      pattern: "Undo changes made in current session"
      availability: "While on settings page"
      lost_on: "Navigation away or page reload"

      example:
        changes: "User makes 3 setting changes"
        location: "'Undo' button in header or footer"
        behavior: "Click to undo last change"
        multiple: "Click again to undo previous change"
        limit: "Undo up to 10 recent changes"

    revert_to_default:
      pattern: "Reset to original/default values"
      scope_options:
        - "Per setting: 'Reset to default'"
        - "Per category: 'Reset all Privacy settings'"
        - "Global: 'Reset all settings to defaults'"

      confirmation: "Required for category and global resets"

      example:
        setting: "Notification frequency"
        current: "Real-time (Custom)"
        default: "Hourly digest"
        action: "'Reset to default' link"
        confirmation: "Reset notification frequency to default (Hourly)?"
        result: "Reverts to Hourly digest"

    version_history:
      pattern: "View and restore previous setting states"
      availability: "Advanced feature, not common"
      use_for: "Enterprise apps, audit-required settings"

      example:
        location: "Settings > History"
        display: "List of changes with timestamps"
        entry: "Email notifications: Enabled → Disabled (Jan 15, 2:34 PM)"
        action: "'Restore this version'"

  settings_save_by_type:
    toggles_switches:
      pattern: "Auto-save immediately"
      feedback: "Brief checkmark or state change"
      undo: "Short undo window (5-10 seconds)"

      example:
        setting: "Enable two-factor authentication"
        interaction: "Toggle switch"
        save: "Immediate"
        feedback: "Switch animates to On position + brief 'Enabled' text"

    text_inputs:
      pattern: "Debounced auto-save or explicit save"
      timing: "Wait 1-2 seconds after typing stops"
      feedback: "'Saved' indicator after save completes"

      example:
        setting: "Display name"
        interaction: "User types new name"
        debounce: "Waits 1 second after typing stops"
        save: "Auto-saves to server"
        feedback: "'Saved' appears next to input"

    dropdowns_selects:
      pattern: "Auto-save on selection"
      timing: "Immediately when new option selected"
      feedback: "Brief confirmation"

      example:
        setting: "Language"
        interaction: "Select 'Español' from dropdown"
        save: "Immediate"
        effect: "UI language changes"
        feedback: "'Idioma guardado' (Language saved)"

    multi_field_forms:
      pattern: "Explicit save button"
      behavior: "Save all fields together"
      validation: "Validate all fields before saving"

      example:
        form: "Billing address (street, city, state, zip, country)"
        interaction: "User fills all fields"
        button: "'Save Address' button enabled when all valid"
        save: "Click to save all fields together"
        feedback: "'Billing address updated' success message"

    file_uploads:
      pattern: "Explicit upload + save"
      steps:
        1: "Select file"
        2: "Preview (optional)"
        3: "Confirm upload"
        4: "Processing indicator"
        5: "Success confirmation"

      example:
        setting: "Profile photo"
        interaction: "User selects image file"
        preview: "Shows cropping interface"
        action: "'Upload' button"
        progress: "Upload progress bar"
        feedback: "'Profile photo updated' + new photo displayed"

  mobile_save_patterns:
    mobile_auto_save:
      pattern: "Preferred on mobile"
      reason: "Reduces taps, streamlines experience"
      feedback: "Subtle, non-intrusive"

    mobile_explicit_save:
      button_placement: "Top-right corner (common) or bottom (sticky)"
      button_text: "Save | Done | Apply"
      keyboard_behavior: "Dismiss keyboard when saving"

    mobile_gestures:
      swipe_to_save: "Swipe up on form to save (uncommon)"
      pull_to_refresh: "Pull down to discard changes (rare)"

    mobile_feedback:
      toast: "Bottom of screen, above navigation"
      inline: "Near changed setting"
      banner: "Top of screen for errors"

      example:
        setting: "Profile update on mobile"
        save: "Tap 'Save' in top-right"
        keyboard: "Dismisses"
        feedback: "Toast at bottom: 'Profile updated'"

  accessibility_considerations:
    keyboard_save:
      shortcut: "Cmd/Ctrl + S to save (if explicit save)"
      form_submission: "Enter key in last field triggers save"

    screen_reader:
      announcements:
        - "Announce save status changes"
        - "'Saving...', 'Saved', 'Error saving'"
        - "Announce unsaved changes warning"

      aria_live:
        region: "aria-live='polite' for save status"
        example: "<div aria-live='polite'>Saved successfully</div>"

    focus_management:
      after_save: "Focus remains on save button or moves to next section"
      after_error: "Focus moves to error message or first invalid field"

    visual_indicators:
      not_color_only: "Don't rely on color alone for save status"
      use_icons: "Checkmark for success, X for error"
      use_text: "'Saved', 'Error', etc."
```

=== SETTINGS SAVE GUIDELINES ===

**Choose the Right Pattern**:
- Auto-save for simple, reversible settings
- Explicit save for complex forms and critical changes
- Hybrid approach for mixed setting types
- Preview/apply for visual settings with significant impact

**Provide Clear Feedback**:
- Always confirm saves, even auto-saves
- Use appropriate feedback: inline, toast, or persistent
- Show errors clearly near the affected setting
- Indicate saving progress for slow operations

**Prevent Data Loss**:
- Warn before navigating with unsaved changes
- Auto-save drafts for long-form content
- Queue changes when offline, sync when reconnected
- Provide undo for auto-saved changes

**Handle Errors Gracefully**:
- Explain what went wrong
- Offer retry option
- Preserve user's changes during errors
- Provide alternative actions if save is blocked

**Mobile Optimization**:
- Prefer auto-save on mobile
- Use clear save button placement if explicit
- Dismiss keyboard on save
- Use appropriate mobile feedback (toasts, banners)

=== EXAMPLES ===

**Example 1: Consumer App with Auto-Save**
- platform_type: "mobile social media app"
- user_type: "general consumers, expect instant changes"
- save_mechanism: "auto-save for all settings"
- undo: "brief undo window"

**Output**:
```yaml
consumer_app_auto_save:
  save_behavior:
    pattern: "Auto-save all settings immediately"
    feedback: "Subtle confirmation"
    undo: "5-second undo window"

  setting_examples:
    - setting: "Profile visibility"
      type: "Dropdown selection"
      options: ["Public", "Friends only", "Private"]

      interaction:
        user_action: "Taps 'Private'"
        save_timing: "Immediate"
        feedback:
          type: "Toast notification"
          message: "'Profile set to Private'"
          duration: "3 seconds"
          undo: "Undo button available for 5 seconds"

      undo_flow:
        if_undo_tapped:
          action: "Reverts to previous setting (Friends only)"
          feedback: "'Profile set to Friends only' toast"

    - setting: "Dark mode"
      type: "Toggle switch"

      interaction:
        user_action: "Toggles to On"
        save_timing: "Immediate"
        visual_feedback: "Interface changes to dark theme instantly"
        text_feedback: "Brief 'Saved' checkmark next to toggle"
        duration: "2 seconds"

      undo_flow:
        undo_available: false
        reason: "Visual change is immediate and easily reversible manually"

    - setting: "Notification settings"
      type: "Multiple toggles (likes, comments, mentions, followers)"

      interaction:
        user_action: "Disables 'Likes' notifications"
        save_timing: "Immediate (< 500ms)"
        feedback:
          type: "Inline checkmark"
          location: "Next to toggle"
          message: "'Saved'"
          duration: "2 seconds"

        user_action_2: "Disables 'Follower' notifications"
        save_timing: "Immediate"
        feedback: "Same as above"

      batch_undo:
        available: false
        individual: "Each toggle saves independently"

  offline_handling:
    behavior: "Changes saved locally, sync when online"

    example:
      scenario: "User toggles notifications while offline"
      immediate: "Toggle switches position, saved to local storage"
      indicator: "'Offline - will sync when connected' banner"
      reconnection:
        automatic: "Syncs queued changes automatically"
        feedback: "'Settings synced' toast"
        conflict_unlikely: "Last-write-wins for personal settings"

  error_handling:
    - error_type: "Network failure"
      scenario: "Save request fails"
      feedback:
        type: "Toast"
        message: "'Couldn't save changes. Check your connection.'"
        action: "'Retry' button"
        duration: "Until dismissed or retry succeeds"

      retry:
        automatic: "Auto-retry 3 times with exponential backoff"
        manual: "'Retry' button for user-initiated retry"
```

**Example 2: B2B SaaS with Explicit Save**
- platform_type: "team collaboration platform"
- user_type: "business users, cautious about changes"
- save_mechanism: "explicit save for most settings"
- validation: "complex validation requirements"

**Output**:
```yaml
b2b_saas_explicit_save:
  save_pattern:
    approach: "Explicit save with validation"
    unsaved_warnings: "Prominent"
    batch_changes: "Encouraged"

  account_settings_form:
    fields:
      - "Display name"
      - "Email address"
      - "Phone number (optional)"
      - "Job title (optional)"
      - "Department"

    interaction:
      user_edits: "Changes display name and email"
      unsaved_state:
        save_button: "Enabled, highlighted blue"
        indicator: "'Unsaved changes' badge in tab/header"

      validation:
        on_blur: "Email field validated when user leaves field"
        invalid: "Inline error: 'Please enter a valid email'"
        button_state: "Save button disabled until all fields valid"

      explicit_save:
        trigger: "Click 'Save Changes' button"
        validation: "Re-validate all fields"
        if_valid:
          processing: "'Saving...' text, button disabled, spinner"
          success:
            feedback: "Green success banner: 'Account settings updated'"
            duration: "3 seconds"
            button_state: "Button disappears or shows 'Saved ✓'"
        if_invalid:
          feedback: "Focus on first invalid field"
          message: "Inline errors highlighted"

    navigation_warning:
      trigger: "User clicks away with unsaved changes"
      modal:
        title: "Unsaved changes"
        message: "You have unsaved changes to your account settings."
        actions:
          primary: "Save Changes"
          secondary: "Discard"
          tertiary: "Cancel"

  workspace_settings:
    admin_only: true
    impact: "Affects all team members"
    approach: "Explicit save with preview and confirmation"

    setting_example:
      setting: "Workspace name"
      field: "Text input"

      interaction:
        user_edits: "Changes workspace name"
        preview: "Name shown in header updates in real-time (preview)"
        unsaved: "'Save' button enabled"
        explicit_save: "Click 'Save'"

        confirmation:
          required: true
          modal:
            title: "Update workspace name?"
            message: "This will change the workspace name for all 47 members."
            preview: "New name: 'Acme Corp Product Team'"
            actions:
              primary: "Update Workspace Name"
              secondary: "Cancel"

        after_confirmation:
          processing: "Modal shows 'Updating...'"
          success:
            modal_updates: "'Workspace name updated successfully'"
            close: "Auto-close after 2 seconds"
            feedback: "Page shows new name, success banner"

  email_verification_flow:
    setting: "Email address"
    complexity: "Multi-step process"

    steps:
      step_1_edit:
        user_action: "Changes email to 'new@example.com'"
        validation: "Client-side: valid email format"
        state: "'Save' button enabled"

      step_2_save:
        user_action: "Clicks 'Save Changes'"
        processing: "'Saving...' with spinner"

      step_3_verification_required:
        server_response: "Email change requires verification"
        modal:
          title: "Verify your email"
          message: "We've sent verification links to both your current email (old@example.com) and new email (new@example.com)."
          instructions: "Click the links in both emails to complete the change."
          action: "Got it"

        old_email_display: "old@example.com (verification pending)"

      step_4_verified:
        trigger: "User clicks both verification links"
        update: "Email changes to new@example.com"
        notification:
          type: "Success banner"
          message: "'Email address updated to new@example.com'"

  persistent_save_status:
    location: "Top of settings page, sticky header"

    states:
      all_saved:
        display: "'All changes saved' with timestamp"
        color: "Green"
        icon: "Checkmark"

      unsaved:
        display: "'You have unsaved changes'"
        color: "Orange"
        action: "'Save' button inline"

      saving:
        display: "'Saving changes...'"
        color: "Blue"
        icon: "Spinner"

      error:
        display: "'Couldn't save changes'"
        color: "Red"
        icon: "Error icon"
        action: "'Retry' button"

    example:
      scenario: "User editing workspace settings"
      initial: "'All changes saved at 2:30 PM'"
      user_edits: "Changes workspace name"
      updates_to: "'You have unsaved changes' [Save]"
      user_saves: "Clicks Save"
      updates_to: "'Saving changes...'"
      success: "'All changes saved just now'"
      auto_update: "Timestamp updates: 'saved 2 minutes ago', etc."
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Use semantic HTML: <button> for save buttons with clear labels. Announce save status to screen readers using aria-live regions. Provide keyboard access: Enter to submit forms, Cmd/Ctrl+S to save. Ensure visible focus indicators (2px outline, 3:1 contrast). Maintain 4.5:1 text contrast for save status messages. Don't rely on color alone (use text + icons). Announce unsaved changes warnings to screen readers. Make save buttons large enough (minimum 44x44px on mobile). Provide clear error messages associated with fields via aria-describedby. Support screen reader users with status announcements like "Saving...", "Saved successfully", "Error saving settings".

**Psychological Principles**: Cognitive load reduction (auto-save removes decision burden). Loss aversion (unsaved warnings prevent data loss). Feedback loops (confirmation builds confidence). Control and autonomy (explicit save provides control). Reactance (forced auto-save can frustrate power users). Trust building (reliable saves build trust in product). Error tolerance (undo and retry reduce anxiety). Commitment consistency (explicit save creates commitment moment). Peak-end rule (successful save creates positive experience). Habit formation (consistent patterns become automatic).

## Account Settings Sections Design v1.0

**Purpose**: Create well-organized account settings sections that help users manage their account information, credentials, and profile data efficiently, establish clear information architecture for account management, reduce confusion about where to find specific settings, and balance security requirements with user convenience.

---

**PROMPT:**

You are designing account settings sections for {{platform_type}} serving {{user_type}}. Create section organization that manages {{account_components}}, supports {{user_tasks}}, ensures {{security_level}}, and maintains {{brand_voice}}.

=== ACCOUNT SETTINGS CONTEXT ===
Platform type: {{platform_type}} (web app/mobile app/SaaS/social platform/enterprise software)
User type: {{user_type}} (general consumers/business users/enterprise users/mixed)
Account components: {{account_components}} (profile/credentials/subscription/team/integrations)
User tasks: {{user_tasks}} (view-info/edit-profile/change-password/manage-billing/delete-account)
Security level: {{security_level}} (standard/enhanced/enterprise/compliance-required)
Account complexity: {{complexity}} (simple-personal/multi-user/workspace/organization)

=== SECTION STRATEGY ===
Organization principle: {{organization}} (by-task/by-data-type/by-frequency/by-user-role)
Section count: {{section_count}} (typical 4-8 sections)
Navigation style: {{navigation}} (tabs/sidebar/cards/list)
Edit pattern: {{edit_pattern}} (inline/modal/separate-page/auto-save)
Verification requirements: {{verification}} (password/2FA/email/none)

=== OUTPUT REQUIREMENTS ===

```yaml
account_settings_sections:
  section_organization_patterns:
    basic_account:
      sections:
        - "Profile"
        - "Account"
        - "Security"
        - "Preferences"

      use_when: "Simple consumer apps, individual accounts"
      user_count: "Single user"

    consumer_with_billing:
      sections:
        - "Profile"
        - "Account"
        - "Security & Privacy"
        - "Notifications"
        - "Billing & Subscription"
        - "Connected Apps"

      use_when: "SaaS products, subscription services"
      user_count: "Individual accounts with purchases"

    team_workspace:
      sections:
        - "Personal Profile"
        - "Account Settings"
        - "Workspace Settings"
        - "Members & Permissions"
        - "Billing & Plan"
        - "Integrations"
        - "Advanced"

      use_when: "Team collaboration tools"
      user_count: "Multiple users, workspace admins"

    enterprise_organization:
      sections:
        - "My Profile"
        - "My Account"
        - "Organization Settings" (admin)
        - "User Management" (admin)
        - "Security & Compliance" (admin)
        - "Billing & Subscriptions" (admin)
        - "API & Integrations" (admin)
        - "Audit Logs" (admin)

      use_when: "Enterprise software, strict access control"
      user_count: "Large organizations, role-based access"

  section_definitions:
    profile_section:
      section_name: "Profile"
      alternative_names: ["Public Profile", "Your Profile", "Profile Information"]
      description: "Information others can see about you"
      icon: "user-circle"

      typical_settings:
        - name: "Profile photo"
          type: "image upload"
          requirements: "Max 5MB, JPG/PNG"
          note: "Visible to other users"

        - name: "Display name"
          type: "text input"
          max_length: 50
          note: "How your name appears to others"

        - name: "Username"
          type: "text input"
          validation: "Alphanumeric, 3-20 characters"
          note: "Used in your profile URL"
          change_frequency: "Can change once per 30 days"

        - name: "Bio"
          type: "textarea"
          max_length: 200
          placeholder: "Tell others about yourself"

        - name: "Location"
          type: "text input"
          optional: true
          example: "San Francisco, CA"

        - name: "Website"
          type: "URL input"
          optional: true

        - name: "Social links"
          type: "repeatable field"
          platforms: ["Twitter", "LinkedIn", "GitHub"]

      privacy_note: "Manage who can see this in Privacy Settings"
      preview: "Preview your public profile"

    account_section:
      section_name: "Account"
      alternative_names: ["Account Settings", "Account Information"]
      description: "Login credentials and account status"
      icon: "settings"

      typical_settings:
        - name: "Email address"
          type: "email input"
          current: "user@example.com"
          verification: "Verified ✓"
          change_flow:
            step1: "Enter new email"
            step2: "Verify old email"
            step3: "Verify new email"
            step4: "Email updated"
          security_note: "We'll send a verification email to confirm"

        - name: "Password"
          type: "password change form"
          requirements:
            - "At least 8 characters"
            - "Include uppercase and lowercase"
            - "Include numbers"
            - "Include special characters"
          last_changed: "Changed 45 days ago"
          recommendation: "Change every 90 days"
          action: "Change password"

        - name: "Phone number"
          type: "phone input"
          optional: true
          purpose: "For account recovery and two-factor authentication"
          verification_required: true

        - name: "Account status"
          current: "Active"
          member_since: "January 2023"
          readonly: true

        - name: "Account ID"
          value: "usr_abc123xyz"
          readonly: true
          purpose: "For customer support"
          action: "Copy ID"

        - name: "Language"
          type: "dropdown"
          options: "All supported languages"
          current: "English (US)"
          note: "Interface language"

        - name: "Timezone"
          type: "timezone selector"
          current: "America/Los_Angeles (PST)"
          auto_detect: "Detect from browser"

      danger_zone:
        - name: "Deactivate account"
          description: "Temporarily hide your account"
          reversible: true
          action: "Deactivate"

        - name: "Delete account"
          description: "Permanently delete your account and all data"
          warning: "This cannot be undone"
          grace_period: "30 days to cancel deletion"
          action: "Delete account"
          confirmation_required: "Type DELETE to confirm"

    security_section:
      section_name: "Security"
      alternative_names: ["Security & Privacy", "Security Settings"]
      description: "Protect your account"
      icon: "shield"

      typical_settings:
        - name: "Two-factor authentication (2FA)"
          status: "Enabled ✓" or "Not enabled"
          recommendation: "Strongly recommended for account security"

          setup_options:
            - method: "Authenticator app"
              description: "Use Google Authenticator, Authy, or similar"
              recommended: true

            - method: "SMS codes"
              description: "Receive codes via text message"
              note: "Less secure than authenticator app"

            - method: "Backup codes"
              description: "One-time use codes for emergencies"
              generate: "Generate new codes"

          action: "Enable 2FA" or "Manage 2FA"

        - name: "Active sessions"
          description: "Devices where you're currently logged in"

          session_list:
            - device: "Chrome on MacOS"
              location: "San Francisco, CA"
              ip: "192.168.1.1"
              last_active: "Active now"
              current: true

            - device: "iPhone"
              location: "San Francisco, CA"
              last_active: "2 hours ago"
              action: "Sign out"

          bulk_action: "Sign out all other sessions"

        - name: "Login history"
          description: "Recent login activity"
          view: "View last 30 days"

          suspicious_activity:
            alert: "Unfamiliar login detected"
            action: "Was this you? Yes / No, secure my account"

        - name: "Authorized applications"
          description: "Apps connected to your account"

          app_list:
            - name: "Mobile App"
              access: "Full account access"
              connected: "Jan 15, 2024"
              action: "Revoke"

          see_all: "View all authorized apps"

        - name: "Account recovery"
          recovery_email: "recovery@example.com"
          recovery_phone: "+1 (555) ***-**67"
          action: "Update recovery options"

        - name: "Login alerts"
          description: "Get notified of new login attempts"
          toggle: true
          channels: ["Email", "Push notification"]

      security_checkup:
        status: "Your account is secure ✓"
        recommendations:
          - "Two-factor authentication enabled"
          - "Strong password set"
          - "Recovery options configured"
        action: "Run security checkup"

    billing_section:
      section_name: "Billing & Subscription"
      alternative_names: ["Billing", "Plan & Billing", "Subscription"]
      description: "Manage your plan and payments"
      icon: "credit-card"

      typical_settings:
        - name: "Current plan"
          plan: "Pro Plan"
          price: "$29/month"
          renewal: "Renews on Feb 15, 2024"
          actions:
            - "Change plan"
            - "Cancel subscription"

        - name: "Payment method"
          card: "Visa ending in 4242"
          expires: "12/2025"
          actions:
            - "Update payment method"
            - "Add payment method"

        - name: "Billing history"
          description: "View past invoices and receipts"

          recent_charges:
            - date: "Jan 15, 2024"
              amount: "$29.00"
              status: "Paid"
              invoice: "Download PDF"

          action: "View all billing history"

        - name: "Billing email"
          current: "billing@company.com"
          note: "Where we send invoices and receipts"
          action: "Change"

        - name: "Billing address"
          address: |
            123 Main St
            San Francisco, CA 94105
            United States
          action: "Update"

        - name: "Usage & limits"
          current_usage: "Used 15 GB of 100 GB"
          visual: "Progress bar"
          breakdown: "View detailed usage"

      plan_comparison:
        current: "Pro Plan"
        action: "Compare all plans"

    integrations_section:
      section_name: "Integrations"
      alternative_names: ["Connected Apps", "Integrations & API"]
      description: "Third-party apps and services"
      icon: "plug"

      typical_settings:
        - name: "Connected services"
          description: "Apps you've authorized"

          connected_apps:
            - service: "Google Calendar"
              status: "Connected"
              permissions:
                - "View calendar"
                - "Create events"
              connected_date: "Jan 1, 2024"
              action: "Manage permissions" or "Disconnect"

          browse: "Browse available integrations"

        - name: "API access"
          description: "For developers"

          api_keys:
            - name: "Production API Key"
              key: "pk_live_abc123..." (hidden)
              created: "Jan 1, 2024"
              last_used: "2 hours ago"
              actions: ["Reveal", "Regenerate", "Delete"]

          action: "Create new API key"
          documentation: "View API documentation"

        - name: "Webhooks"
          description: "Receive real-time notifications"
          count: "2 active webhooks"
          action: "Manage webhooks"

    preferences_section:
      section_name: "Preferences"
      alternative_names: ["Settings", "General Settings"]
      description: "Customize your experience"
      icon: "sliders"

      typical_settings:
        - name: "Theme"
          options:
            - "Light"
            - "Dark"
            - "Auto (match system)"
          preview: "Live preview"

        - name: "Language"
          current: "English (US)"
          all_languages: "View all languages"

        - name: "Date format"
          options:
            - "MM/DD/YYYY (12/31/2024)"
            - "DD/MM/YYYY (31/12/2024)"
            - "YYYY-MM-DD (2024-12-31)"

        - name: "Time format"
          options:
            - "12-hour (3:30 PM)"
            - "24-hour (15:30)"

        - name: "Timezone"
          current: "Pacific Time (PST)"
          auto_detect: "Detect automatically"

        - name: "Email preferences"
          link: "Manage in Notifications"

  section_navigation_patterns:
    sidebar_navigation:
      layout: "Vertical list of sections"
      position: "Left side"
      active_state: "Highlighted with background color"
      mobile: "Collapsible menu"

      example_structure: |
        Settings
        ├─ Profile
        ├─ Account
        ├─ Security
        ├─ Notifications
        ├─ Billing
        └─ Advanced

    tab_navigation:
      layout: "Horizontal tabs"
      position: "Top of settings area"
      responsive: "Scroll or dropdown on mobile"
      active_state: "Underline or background"

    card_layout:
      layout: "Grid of cards, each representing a section"
      card_contents:
        - section_icon: "Visual identifier"
        - section_name: "Clear label"
        - description: "Brief explanation"
        - quick_actions: "Common tasks"

      best_for: "Dashboard-style settings overview"

  edit_interaction_patterns:
    inline_editing:
      pattern: "Click to edit directly on page"
      save: "Auto-save or Save/Cancel buttons"

      example:
        display_mode: "John Doe [Edit]"
        edit_mode: "[Input field] [Save] [Cancel]"

      best_for: "Simple text fields, quick edits"

    modal_editing:
      pattern: "Click 'Edit' → modal opens → make changes → Save"

      best_for: "Complex forms, multiple related fields"

    dedicated_page:
      pattern: "Click 'Edit profile' → navigate to edit page"

      best_for: "Many fields, upload-heavy (photos)"

    auto_save:
      pattern: "Changes save automatically as user types"
      indicator: "Saving... → Saved ✓"

      best_for: "Modern apps, reduce friction"
      warning: "Show clear save status"

  security_verification:
    password_confirmation:
      when: "Changing sensitive settings (email, password)"
      pattern: "Enter current password to confirm"

    two_factor_confirmation:
      when: "High-security operations"
      pattern: "Enter 2FA code to proceed"

    email_verification:
      when: "Changing email address"
      pattern: "Verify both old and new email"

  empty_and_warning_states:
    empty_section:
      pattern: "No items yet"

      example:
        section: "Connected Apps"
        empty_state: "You haven't connected any apps yet"
        action: "Browse integrations"

    danger_zone:
      section_name: "Danger Zone"
      visual: "Red border or background"
      placement: "Bottom of settings"

      actions:
        - "Deactivate account"
        - "Delete account"
        - "Transfer ownership"

      confirmations: "Require explicit confirmation"

    unsaved_changes:
      warning: "You have unsaved changes"
      actions: "Save changes | Discard"
      trigger: "Shown when navigating away"

  accessibility_requirements:
    semantic_structure:
      navigation: "<nav> for settings menu"
      sections: "<section> or <article> for each settings area"
      headings: "<h2> for section names, <h3> for subsections"
      forms: "<form> for editable settings"
      labels: "<label> for all form inputs"

    keyboard_navigation:
      tab_order: "Logical progression through settings"
      shortcuts: "Quick jump to sections"
      focus_indicators: "2px outline, 3:1 contrast"

    screen_reader_support:
      current_section: "Announce active section"
      form_instructions: "Clear labeling and help text"
      error_messages: "Associated with fields via aria-describedby"

    focus_management:
      after_save: "Return focus to edit button or next field"
      modal_close: "Return focus to trigger element"

  mobile_adaptations:
    navigation:
      pattern: "Full-screen section list"
      drill_down: "Tap section → view settings → tap setting → edit"

    section_overview:
      show: "Section name + current values summary"

      example:
        section: "Account"
        summary: "user@example.com • Password set • 2FA enabled"

    edit_flow:
      pattern: "Separate screen for editing each setting"
      save_location: "Top-right or bottom of screen"

  data_export_import:
    export_settings:
      action: "Download settings backup"
      format: "JSON file"
      includes: "All preferences and configuration (not credentials)"
      use_case: "Transfer to another device, backup"

    import_settings:
      action: "Restore from backup"
      warning: "This will overwrite current settings"
      confirmation: "Review changes before applying"
```

=== ACCOUNT SETTINGS GUIDELINES ===

**Clear Organization**:
- Group related settings logically
- Use standard section names (Profile, Account, Security)
- Separate personal vs. workspace settings
- Place destructive actions in "Danger Zone"

**Progressive Disclosure**:
- Show most common settings first
- Hide advanced options until needed
- Provide "View all" links for lengthy lists
- Use expandable sections for details

**Security First**:
- Require verification for sensitive changes
- Show security status clearly
- Provide recommendations (enable 2FA)
- Make dangerous actions hard to trigger accidentally

**Edit Patterns**:
- Inline editing for simple fields
- Modal for related field groups
- Auto-save with clear status indication
- Prevent data loss with unsaved changes warnings

**Mobile Considerations**:
- One setting per screen on mobile
- Show summary in section list
- Large touch targets
- Easy navigation back to section list

=== EXAMPLES ===

**Example 1: Consumer SaaS Account Settings**
- platform_type: "B2C productivity web app"
- user_type: "individual consumers, non-technical"
- account_components: "profile, subscription, integrations"
- complexity: "moderate"

**Output**:
```yaml
consumer_saas_account:
  navigation: "Sidebar"
  edit_pattern: "Inline editing with auto-save"

  sections:
    - section: "Profile"
      icon: "user"

      settings:
        - field: "Profile photo"
          current: "[Photo thumbnail]"
          action: "Change photo"
          upload:
            max_size: "5 MB"
            formats: "JPG, PNG, GIF"
            preview: "Instant preview before saving"

        - field: "Display name"
          current: "John Doe"
          edit_mode: "Click to edit"
          max_length: 50
          auto_save: true

        - field: "Email"
          current: "john@example.com"
          verified: true
          action: "Change email"
          verification: "Password required"

        - field: "Bio"
          current: "Product designer based in SF"
          edit_mode: "Expandable textarea"
          max_length: 200
          character_count: "35/200"

      actions:
        - "Preview public profile"
        - "Download your data"

    - section: "Account"
      icon: "settings"

      settings:
        - field: "Password"
          current: "••••••••"
          last_changed: "30 days ago"
          action: "Change password"
          flow:
            step_1: "Enter current password"
            step_2: "Enter new password"
            step_3: "Confirm new password"
            step_4: "Password updated ✓"

        - field: "Two-factor authentication"
          status: "Not enabled"
          recommendation: "Add an extra layer of security (Recommended)"
          action: "Enable 2FA"

        - field: "Active sessions"
          count: "3 active sessions"
          list:
            - device: "Chrome on Mac"
              current: true
              location: "San Francisco"
            - device: "iPhone"
              location: "San Francisco"
              action: "Sign out"
            - device: "Chrome on Windows"
              location: "Los Angeles"
              action: "Sign out"
          bulk: "Sign out all other sessions"

    - section: "Billing"
      icon: "credit-card"

      settings:
        - field: "Current plan"
          plan: "Pro"
          price: "$12/month"
          renewal: "Renews Feb 15, 2024"
          actions:
            - "Upgrade to Business"
            - "Switch to annual (save 20%)"
            - "Cancel subscription"

        - field: "Payment method"
          card: "•••• 4242"
          expiry: "12/2025"
          actions:
            - "Update card"
            - "Add payment method"

        - field: "Invoices"
          recent:
            - date: "Jan 15, 2024"
              amount: "$12.00"
              pdf: "Download"
          action: "View all invoices"

    - section: "Preferences"
      icon: "sliders"

      settings:
        - field: "Theme"
          current: "Dark"
          options: ["Light", "Dark", "Auto"]
          preview: "Changes immediately"

        - field: "Language"
          current: "English (US)"
          action: "Change language"

        - field: "Notifications"
          summary: "Email: Daily digest, Push: Enabled"
          action: "Manage notifications"

    - section: "Danger Zone"
      warning: "Irreversible actions"
      style: "Red border"

      actions:
        - action: "Delete account"
          description: "Permanently delete your account and all data"
          warning: "This cannot be undone"
          confirmation: "Type DELETE to confirm"
```

**Example 2: Team Workspace Account Settings**
- platform_type: "B2B collaboration platform"
- user_type: "business users, workspace admins and members"
- account_components: "personal profile, workspace settings, team management"
- complexity: "high, role-based access"

**Output**:
```yaml
team_workspace_account:
  navigation: "Sidebar with role-based sections"
  user_role: "Workspace Admin"

  personal_settings:
    - section: "My Profile"
      scope: "Personal only"

      settings:
        - field: "Profile photo"
          visible_to: "Everyone in workspace"

        - field: "Display name"
          current: "Sarah Chen"
          visible_to: "Everyone in workspace"

        - field: "Title"
          current: "Product Manager"
          optional: true

        - field: "Department"
          current: "Product"
          synced_from: "Workspace settings"

        - field: "Contact info"
          email: "sarah@company.com"
          phone: "+1 (555) 123-4567"
          visible_to: "Workspace members only"

    - section: "Account Settings"
      scope: "Personal only"

      settings:
        - field: "Email & password"
          email: "sarah@company.com"
          sso: "Sign in with Google SSO"
          note: "Password disabled when SSO is active"

        - field: "Two-factor authentication"
          status: "Required by workspace policy"
          cannot_disable: true
          method: "Authenticator app"

        - field: "Personal preferences"
          theme: "Dark"
          timezone: "Pacific Time"
          language: "English"

  workspace_settings:
    admin_only: true
    note: "Only workspace admins can access these settings"

    - section: "Workspace Settings"
      icon: "briefcase"

      settings:
        - field: "Workspace name"
          current: "Acme Corp"
          action: "Rename workspace"
          requires: "Owner permission"

        - field: "Workspace URL"
          current: "acme-corp.app.com"
          change: "Once per 30 days"

        - field: "Workspace icon"
          current: "[Logo thumbnail]"
          action: "Upload new icon"

        - field: "Default language"
          current: "English (US)"
          note: "Default for new members"

    - section: "Members & Permissions"
      icon: "users"

      settings:
        - field: "Members"
          count: "47 members"
          actions:
            - "Invite members"
            - "Manage members"
            - "View pending invitations (3)"

        - field: "Roles & permissions"
          roles:
            - "Owner (1)"
            - "Admin (3)"
            - "Member (43)"
          action: "Customize roles"

        - field: "Guest access"
          status: "Enabled"
          current_guests: "12 guests"
          action: "Manage guest settings"

        - field: "Join settings"
          current: "Invite only"
          options:
            - "Anyone with @company.com email"
            - "Invite only"
            - "Request to join"

    - section: "Billing & Plan"
      icon: "credit-card"
      admin_only: true

      settings:
        - field: "Current plan"
          plan: "Business"
          seats: "50 (47 used)"
          price: "$500/month"
          renewal: "Annual, renews Dec 1, 2024"

        - field: "Payment method"
          card: "Company Visa •••• 1234"
          billing_email: "billing@company.com"

        - field: "Usage"
          storage: "450 GB of 1 TB"
          api_calls: "125,000 of 1,000,000 this month"
          action: "View detailed usage"

        - field: "Invoices"
          action: "View all invoices"
          recipient: "billing@company.com"

    - section: "Security & Compliance"
      icon: "shield"
      admin_only: true

      settings:
        - field: "Single Sign-On (SSO)"
          status: "Enabled with Google Workspace"
          action: "Configure SSO"

        - field: "Two-factor authentication"
          policy: "Required for all members"
          exceptions: "None"

        - field: "Session management"
          timeout: "8 hours of inactivity"
          action: "Change session settings"

        - field: "Audit logs"
          retention: "90 days"
          action: "View audit logs"

        - field: "Data retention"
          policy: "Keep data indefinitely"
          action: "Configure retention policy"

        - field: "Export & compliance"
          certifications: "SOC 2, GDPR compliant"
          action: "Export workspace data"
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Use semantic HTML: <nav> for settings navigation, <form> for editable sections, <label> for all inputs, <fieldset> and <legend> for grouped settings. Provide clear focus indicators (2px outline, 3:1 contrast). Maintain 4.5:1 text contrast. Use hierarchical headings (H2 for sections, H3 for subsections). Ensure keyboard navigation with logical Tab order. Announce page changes to screen readers. Provide skip links to main sections. Use aria-describedby for help text and validation messages. Make all interactive elements keyboard accessible. Support browser zoom to 200%. Test with screen readers to verify clear section navigation and form instructions.

**Psychological Principles**: Mental models (align with user expectations for settings organization). Chunking (group related settings to reduce cognitive load). Recognition over recall (show current values, don't make users remember). Progressive disclosure (hide advanced options until needed). Control and autonomy (empower users to manage their account). Loss aversion (confirm destructive actions, explain consequences). Status quo bias (make changing settings straightforward). Feedback loops (show save status, confirm changes). Hierarchy of needs (security settings prominently placed). Satisficing (provide good defaults, allow customization). Consistency (use standard patterns across sections).

## Data Management Options Design v1.0

**Purpose**: Create transparent, user-friendly data management controls that empower users to export, download, delete, and manage their data, comply with privacy regulations like GDPR and CCPA, build trust through data transparency, and provide clear explanations of data retention, portability, and deletion processes.

---

**PROMPT:**

You are designing data management options for {{platform_type}} serving {{user_type}}. Create data controls that enable {{data_operations}}, comply with {{regulations}}, support {{user_rights}}, and maintain {{brand_voice}}.

=== DATA MANAGEMENT CONTEXT ===
Platform type: {{platform_type}} (web app/mobile app/SaaS/social platform/enterprise software)
User type: {{user_type}} (general consumers/business users/regulated industry/privacy-conscious)
Data operations: {{data_operations}} (export/download/delete/transfer/archive)
Regulations: {{regulations}} (GDPR/CCPA/HIPAA/PIPEDA/industry-specific)
User rights: {{user_rights}} (access/rectification/erasure/portability/restriction)
Data volume: {{data_volume}} (small/moderate/large/very-large)

=== DATA MANAGEMENT STRATEGY ===
Export format: {{export_format}} (JSON/CSV/PDF/native-format/multiple-formats)
Processing time: {{processing}} (instant/minutes/hours/days)
Deletion approach: {{deletion}} (immediate/soft-delete/grace-period/permanent)
Data scope: {{scope}} (all-data/by-category/by-date-range/selective)
User guidance: {{guidance}} (detailed/standard/minimal/expert)

=== OUTPUT REQUIREMENTS ===

```yaml
data_management_options:
  core_data_rights:
    right_to_access:
      right_name: "Access your data"
      description: "View and download a copy of your information"
      user_action: "Download your data"
      compliance: "GDPR Article 15, CCPA"

    right_to_rectification:
      right_name: "Correct your data"
      description: "Fix inaccurate or incomplete information"
      user_action: "Edit in account settings"
      compliance: "GDPR Article 16"

    right_to_erasure:
      right_name: "Delete your data"
      description: "Request deletion of your personal information"
      user_action: "Delete account"
      compliance: "GDPR Article 17, CCPA"

    right_to_portability:
      right_name: "Take your data elsewhere"
      description: "Download in a machine-readable format"
      user_action: "Export data"
      compliance: "GDPR Article 20"

    right_to_restriction:
      right_name: "Limit how we use your data"
      description: "Restrict certain data processing"
      user_action: "Privacy settings"
      compliance: "GDPR Article 18"

    right_to_object:
      right_name: "Object to data processing"
      description: "Stop certain uses of your information"
      user_action: "Opt out in settings"
      compliance: "GDPR Article 21, CCPA"

  data_export_interface:
    export_overview:
      section_name: "Download Your Data"
      description: "Get a copy of your information in a portable format"
      use_cases:
        - "Back up your data"
        - "Transfer to another service"
        - "Review what information we have"

      what_included:
        always_included:
          - "Account information (name, email, profile)"
          - "Content you've created (posts, comments, messages)"
          - "Settings and preferences"
          - "Activity history"

        optionally_included:
          - "Photos and media files"
          - "Connections and followers"
          - "App usage data"

        never_included:
          - "Other users' private content"
          - "Encrypted passwords"
          - "Temporary cache data"

    export_customization:
      select_data_types:
        pattern: "Checkbox list of data categories"

        categories:
          - id: "profile"
            name: "Profile information"
            description: "Your name, photo, bio, and contact info"
            size: "~5 KB"
            always_included: true

          - id: "content"
            name: "Posts and comments"
            description: "Everything you've shared or written"
            size: "~2 MB"
            count: "1,247 items"

          - id: "media"
            name: "Photos and videos"
            description: "All media files you've uploaded"
            size: "~450 MB"
            count: "324 files"
            warning: "Large download"

          - id: "messages"
            name: "Direct messages"
            description: "Your private conversations"
            size: "~8 MB"
            count: "2,891 messages"

          - id: "connections"
            name: "Followers and following"
            description: "Your social connections"
            size: "~15 KB"
            count: "487 connections"

          - id: "activity"
            name: "Activity history"
            description: "Likes, views, and interactions"
            size: "~500 KB"
            count: "15,234 activities"

      select_date_range:
        option: "All time | Last year | Last month | Custom range"
        default: "All time"

      select_format:
        formats:
          - format: "JSON"
            description: "Machine-readable, for developers"
            best_for: "Importing to another service"
            recommended: true

          - format: "HTML"
            description: "Human-readable, browsable files"
            best_for: "Reviewing your data"

          - format: "CSV"
            description: "Spreadsheet format"
            best_for: "Analyzing data in Excel"
            limitation: "Text content only, no media"

      delivery_method:
        options:
          - method: "Download link"
            description: "We'll email you a link when ready"
            timeline: "Usually ready within 24 hours"
            expiration: "Link expires after 7 days"
            recommended: true

          - method: "Transfer to service"
            description: "Send directly to Google Drive, Dropbox, etc."
            services: ["Google Drive", "Dropbox", "OneDrive"]
            requires: "Account authorization"

    export_process_flow:
      step_1_request:
        title: "Request your data"
        actions:
          - "Select data types"
          - "Choose format"
          - "Choose delivery method"
        button: "Create export"

      step_2_processing:
        title: "We're preparing your data"
        message: "This usually takes a few hours, but can take up to 48 hours for large exports"
        progress_indicator: "Processing... 45% complete"
        notification: "We'll email you when it's ready"
        cancel_option: "Cancel this export"

      step_3_ready:
        title: "Your data is ready"
        message: "Your export is ready to download"
        file_info:
          size: "485 MB"
          format: "ZIP file containing JSON and media files"
          expires: "Available for 7 days"
        actions:
          - "Download (485 MB)"
          - "Request a new export"
        security_note: "Keep this file secure. It contains all your personal information."

      step_4_downloaded:
        title: "Export complete"
        message: "Downloaded on Jan 15, 2024"
        actions:
          - "Download again"
          - "Delete this export"
        file_contents: "View what's included"

    export_file_structure:
      top_level:
        - "README.html (explains contents)"
        - "profile.json (account information)"
        - "posts/ (your posts and content)"
        - "media/ (photos and videos)"
        - "messages/ (conversations)"
        - "activity.json (your activity history)"

      readme_contents:
        - "What's in this export"
        - "How to read the files"
        - "File formats explained"
        - "Privacy and security tips"

  data_deletion_interface:
    deletion_overview:
      section_name: "Delete Your Data"
      description: "Permanently remove your information from our service"
      warning_level: "high"

      types_of_deletion:
        - type: "Delete specific content"
          description: "Remove individual posts, photos, or messages"
          permanence: "Deleted immediately, purged within 30 days"
          reversible: "May be recoverable from backups for 30 days"

        - type: "Deactivate account"
          description: "Temporarily hide your account"
          what_happens:
            - "Profile hidden from others"
            - "Content not visible publicly"
            - "Data retained"
          reversible: "Yes, reactivate anytime"
          best_for: "Taking a break, not ready for permanent deletion"

        - type: "Delete account"
          description: "Permanently delete your account and all data"
          what_happens:
            - "Account closed permanently"
            - "All data deleted"
            - "Cannot be undone after grace period"
          reversible: "30-day grace period, then permanent"
          best_for: "Completely leaving the service"

    delete_specific_content:
      interface: "Select items to delete"

      bulk_actions:
        - "Delete all posts from date range"
        - "Delete all photos"
        - "Delete all messages with specific person"
        - "Clear activity history"

      confirmation:
        pattern: "Confirm deletion"
        message: "Delete 23 posts from January 2024?"
        actions: "Delete | Cancel"

    deactivate_account:
      section_name: "Deactivate Account"
      description: "Temporarily hide your account and profile"

      what_happens:
        immediate:
          - "Your profile won't be visible to others"
          - "Your posts won't appear publicly"
          - "You'll be logged out everywhere"

        retained:
          - "All your data stays in our system"
          - "Your username remains reserved"
          - "You can reactivate anytime"

        other_users:
          - "Messages you sent remain visible"
          - "Comments on others' posts remain"

      reactivation:
        process: "Log in again to reactivate"
        immediate: "Profile restored instantly"

      confirmation:
        message: "Deactivate your account?"
        reason_optional: "Help us improve (optional): Why are you deactivating?"
        password_required: true
        button: "Deactivate Account"

    delete_account_permanently:
      section_name: "Delete Account"
      description: "Permanently delete your account and all data"
      warning: "This cannot be undone after the grace period"
      danger_level: "critical"

      what_gets_deleted:
        immediately:
          - "Your profile and account information"
          - "All posts, comments, and content you've created"
          - "Photos, videos, and media files"
          - "Direct messages"
          - "Settings and preferences"

        within_30_days:
          - "All data purged from backups"
          - "Removed from search engines"

        retained_legally:
          - "Transaction records (if required by law)"
          - "Anonymized analytics (no personal identifiers)"

      what_happens_to_shared_content:
        - "Comments on others' posts: Deleted"
        - "Messages you sent: Deleted from recipients' inboxes"
        - "Shared photos in group albums: Deleted"

      grace_period:
        duration: "30 days"
        during_period:
          - "Account scheduled for deletion"
          - "Data not accessible"
          - "Can cancel deletion by logging in"
        after_period:
          - "Permanent deletion"
          - "Cannot be recovered"

      before_deletion_checklist:
        recommendations:
          - action: "Download your data"
            description: "Get a copy before it's gone"
            button: "Download now"

          - action: "Review what gets deleted"
            description: "Understand what you'll lose"

          - action: "Cancel subscriptions"
            description: "Stop billing if applicable"
            button: "View billing"

          - action: "Inform contacts"
            description: "Let important connections know"

      deletion_flow:
        step_1_warning:
          title: "Are you sure you want to delete your account?"
          warnings:
            - "This will permanently delete all your data"
            - "You have 30 days to change your mind"
            - "After 30 days, this cannot be undone"
          alternatives:
            - option: "Deactivate instead"
              description: "Temporarily hide your account (reversible)"
            - option: "Download your data first"
              description: "Get a copy before deleting"
          actions: "Continue | Cancel"

        step_2_reason:
          title: "Help us improve (optional)"
          question: "Why are you deleting your account?"
          options:
            - "Privacy concerns"
            - "Not useful anymore"
            - "Too much time on the app"
            - "Found a better alternative"
            - "Other"
          optional: true
          skip: "Skip this step"

        step_3_confirmation:
          title: "Confirm account deletion"
          requirements:
            - requirement: "Enter your password"
              field: "password input"

            - requirement: "Type DELETE to confirm"
              field: "text input"
              validation: "Must match exactly"

          final_warning: "Your account will be permanently deleted in 30 days. You can cancel anytime before then by logging in."
          checkbox: "I understand this cannot be undone after 30 days"
          button: "Delete My Account" (disabled until all requirements met)

        step_4_scheduled:
          title: "Account deletion scheduled"
          message: "Your account will be permanently deleted on February 14, 2024"
          grace_period: "You have 30 days to cancel deletion"
          cancel_action: "Cancel deletion (log in to cancel)"
          logged_out: "You've been logged out"

      canceling_deletion:
        process: "Log in within 30 days"
        message: "Your account deletion is scheduled for Feb 14, 2024"
        action: "Cancel deletion"
        result: "Account deletion canceled. Your account is active again."

  data_retention_information:
    retention_overview:
      section_name: "How Long We Keep Your Data"
      description: "Understand our data retention practices"

      retention_periods:
        - data_type: "Account information"
          retention: "While account is active"
          after_deletion: "Deleted within 30 days"

        - data_type: "Content (posts, comments)"
          retention: "While account is active"
          after_deletion: "Deleted within 30 days"

        - data_type: "Messages"
          retention: "While account is active or 1 year"
          after_deletion: "Deleted within 30 days"

        - data_type: "Activity logs"
          retention: "90 days"
          after_period: "Automatically deleted"

        - data_type: "Anonymized analytics"
          retention: "Indefinitely"
          cannot_identify: "No personal identifiers"

        - data_type: "Legal records"
          retention: "7 years (if legally required)"
          purpose: "Compliance with tax and financial regulations"

    backup_and_recovery:
      explanation: "We maintain backups for disaster recovery"
      backup_retention: "Backups kept for 30 days"
      deletion_from_backups: "Deleted data purged from backups within 30 days"

  data_portability:
    transfer_to_service:
      section_name: "Transfer Your Data"
      description: "Send your data directly to another service"

      supported_destinations:
        - service: "Google Takeout"
          data_types: ["Photos", "Posts", "Profile"]

        - service: "Automatic Data Transfer"
          partners: ["Facebook", "Twitter", "Instagram"]
          data_types: ["Photos", "Posts"]

      transfer_process:
        step_1: "Select destination service"
        step_2: "Authorize connection"
        step_3: "Choose what to transfer"
        step_4: "Initiate transfer"
        timeline: "Usually complete within 24 hours"

  accessibility_and_mobile:
    data_download_on_mobile:
      limitation: "Large exports may be difficult on mobile"
      recommendation: "Use desktop for downloads over 100 MB"
      mobile_friendly: "Request on mobile, download link via email"

    progress_notifications:
      export_ready: "Push notification when export is ready"
      deletion_reminder: "Email 7 days before permanent deletion"

  compliance_documentation:
    gdpr_compliance:
      rights_provided:
        - "Right to access (Article 15)"
        - "Right to rectification (Article 16)"
        - "Right to erasure (Article 17)"
        - "Right to data portability (Article 20)"

      response_time: "Within 30 days of request"
      verification: "Identity verification may be required"

    ccpa_compliance:
      rights_provided:
        - "Right to know what data is collected"
        - "Right to delete personal information"
        - "Right to opt-out of sale (we don't sell data)"

      no_discrimination: "We won't discriminate for exercising rights"

  help_and_support:
    faqs:
      - question: "How long does data export take?"
        answer: "Usually 24 hours, up to 48 hours for large accounts"

      - question: "What format is the export?"
        answer: "ZIP file containing JSON, CSV, or HTML files plus media"

      - question: "Can I cancel account deletion?"
        answer: "Yes, within 30 days by logging in"

      - question: "What happens to my messages?"
        answer: "They're deleted from all recipients' inboxes"

    contact_support:
      for_issues: "Problems downloading data, deletion questions"
      contact: "privacy@example.com"
      response_time: "Within 3 business days"
```

=== DATA MANAGEMENT GUIDELINES ===

**Transparency First**:
- Clearly explain what data is included in exports
- Show file sizes before downloading
- Explain retention periods honestly
- Describe what happens to shared content

**User Empowerment**:
- Make data export easy and free
- Provide multiple format options
- Allow selective data download
- Enable data portability to competitors

**Safety and Reversibility**:
- Grace period for account deletion (30 days recommended)
- Multiple confirmation steps for deletion
- Offer deactivation as alternative
- Recommend downloading data first

**Compliance**:
- Meet GDPR 30-day response requirement
- Provide all legally required data rights
- Document retention policies clearly
- Don't discriminate for exercising rights

**Mobile Considerations**:
- Email download links for large files
- Notify when exports are ready
- Support requesting on mobile, downloading on desktop
- Clear progress indicators

=== EXAMPLES ===

**Example 1: Social Platform Data Management**
- platform_type: "mobile social media app"
- user_type: "general consumers, privacy-aware"
- regulations: "GDPR, CCPA"
- data_volume: "moderate to large (photos, videos, posts)"

**Output**:
```yaml
social_platform_data_management:
  main_interface:
    section_name: "Your Data"
    location: "Settings > Privacy > Your Data"

  data_operations:
    - operation: "Download your information"
      description: "Get a copy of everything you've shared"
      icon: "download"

      customization:
        select_content:
          - id: "posts"
            name: "Posts"
            count: "1,247 posts"
            size: "~15 MB"
            included: true

          - id: "photos"
            name: "Photos & Videos"
            count: "3,456 files"
            size: "~2.4 GB"
            included: true
            warning: "Large download"

          - id: "stories"
            name: "Stories archive"
            count: "892 stories"
            size: "~500 MB"
            included: false

          - id: "messages"
            name: "Direct messages"
            count: "12,456 messages"
            size: "~45 MB"
            included: true

          - id: "likes"
            name: "Likes and reactions"
            count: "23,567 items"
            size: "~2 MB"
            included: false

        date_range:
          option: "All time"
          custom: "Select specific months or years"

        format:
          selected: "JSON (machine-readable)"
          alternative: "HTML (human-readable)"

        delivery:
          method: "Email download link"
          timeline: "Ready in 24-48 hours"
          notification: "We'll notify you when ready"

      start_button: "Request Download"

      previous_exports:
        - date: "Jan 1, 2024"
          size: "2.1 GB"
          status: "Expired"

        - date: "Dec 1, 2023"
          size: "1.9 GB"
          status: "Available for 3 more days"
          action: "Download"

    - operation: "Transfer your photos"
      description: "Move photos to Google Photos or other services"
      icon: "transfer"

      destinations:
        - "Google Photos"
        - "Dropbox"
        - "Microsoft OneDrive"

      process:
        step_1: "Choose destination"
        step_2: "Select albums to transfer"
        step_3: "Authorize connection"
        step_4: "Transfer begins (may take several hours)"

      button: "Start Transfer"

    - operation: "Delete specific content"
      description: "Remove posts, photos, or other content"
      icon: "trash"

      options:
        - "Delete posts by date range"
        - "Delete all photos from specific album"
        - "Clear search history"
        - "Delete archived stories"

      button: "Manage Content"

    - operation: "Account deletion"
      description: "Permanently delete your account"
      icon: "alert-triangle"
      warning: true

      alternatives_shown:
        - option: "Take a break"
          description: "Deactivate temporarily instead"
          button: "Deactivate"

        - option: "Download first"
          description: "Get your data before deleting"
          button: "Download"

      deletion_button: "Delete Account"

  account_deletion_flow:
    screen_1_warning:
      title: "Delete your account?"
      warnings:
        - "All your photos, posts, and messages will be deleted"
        - "You'll lose your username and won't be able to use it again"
        - "This can be canceled for 30 days"
      actions:
        primary: "Continue"
        secondary: "Cancel"

    screen_2_alternatives:
      title: "Sure you don't want to just take a break?"

      deactivate_option:
        title: "Deactivate account instead"
        description: "Hide your profile temporarily. You can come back anytime."
        reversible: "Fully reversible"
        button: "Deactivate Instead"

      skip: "No, I want to permanently delete"

    screen_3_download:
      title: "Download your information first?"
      description: "Get a copy of your photos, posts, and messages before they're deleted."

      status: "No pending downloads"
      action: "Request Download (takes 24-48 hours)"

      skip: "Skip, I don't need my data"

    screen_4_confirmation:
      title: "Last step"
      message: "Your account will be deleted in 30 days. Log in before then to cancel."

      password_field: "Enter your password to confirm"

      type_to_confirm: "Type DELETE to confirm"

      checkbox: "I understand I'm permanently deleting my account"

      button: "Delete Account" (red, enabled when all fields complete)

    screen_5_goodbye:
      title: "Account scheduled for deletion"
      message: "Your account will be permanently deleted on February 14, 2024"

      what_now:
        - "You've been logged out"
        - "Log in before Feb 14 to cancel deletion"
        - "After Feb 14, your data cannot be recovered"

      button: "Close"

  deletion_grace_period:
    cancellation_flow:
      trigger: "User logs in during grace period"

      message: "Your account is scheduled for deletion on Feb 14, 2024"

      options:
        - action: "Cancel deletion"
          result: "Keep my account"

        - action: "Continue with deletion"
          result: "Proceed with deletion on Feb 14"

    reminder_notifications:
      - timing: "7 days before deletion"
        message: "Your account will be deleted in 7 days. Log in to cancel."

      - timing: "1 day before deletion"
        message: "Last chance: Account will be deleted tomorrow. Log in to cancel."
```

**Example 2: B2B SaaS Data Management**
- platform_type: "business productivity SaaS"
- user_type: "business users, workspace admins"
- regulations: "GDPR, SOC 2, enterprise compliance"
- data_volume: "large (documents, files, collaboration data)"

**Output**:
```yaml
b2b_saas_data_management:
  admin_data_controls:
    location: "Workspace Settings > Data & Compliance"
    admin_only: true

  data_export:
    workspace_export:
      section_name: "Export Workspace Data"
      description: "Download all workspace content and user data"
      admin_required: true

      what_included:
        - "All documents and files"
        - "User list and permissions"
        - "Audit logs"
        - "Workspace settings"
        - "Integration configurations"

      format_options:
        - format: "Native format (.zip)"
          description: "Preserves all formatting, can re-import"
          best_for: "Migrating to another instance"

        - format: "Standard formats (Markdown, PDF, CSV)"
          description: "Readable in any application"
          best_for: "Archiving or analysis"

      size_estimate: "~15 GB for your workspace"

      timeline:
        small_workspace: "< 1 GB: Ready in 1 hour"
        medium_workspace: "1-10 GB: Ready in 4-6 hours"
        large_workspace: "> 10 GB: Ready in 24 hours"

      notification: "Email all workspace admins when ready"

      retention: "Download link available for 7 days"

      security: "Encrypted during transfer and storage"

    individual_user_export:
      section_name: "Export My Data"
      description: "Download your personal content"
      available_to: "All users"

      what_included:
        - "Documents you've created"
        - "Comments and messages"
        - "Your personal settings"

      excludes:
        - "Workspace-owned content"
        - "Other users' data"

      format: "ZIP with Markdown files and PDFs"

      timeline: "Usually ready within 1 hour"

  data_retention_policies:
    section_name: "Data Retention"
    description: "Control how long data is kept"
    admin_only: true

    policies:
      - data_type: "Active documents"
        retention: "While workspace is active"
        configurable: false

      - data_type: "Deleted documents"
        retention: "30 days in trash"
        action: "Auto-purge or extend to 90 days"
        configurable: true
        current: "30 days"

      - data_type: "Audit logs"
        retention: "90 days (free) / 1 year (pro) / 7 years (enterprise)"
        compliance: "Required for SOC 2, some regulations"
        configurable: false

      - data_type: "Inactive user data"
        retention: "Keep indefinitely or auto-archive"
        configurable: true
        current: "Keep indefinitely"

      - data_type: "File versions"
        retention: "Last 30 versions"
        configurable: true
        current: "Last 30 versions"

  workspace_deletion:
    section_name: "Delete Workspace"
    description: "Permanently delete workspace and all data"
    owner_only: true
    danger_level: "critical"

    prerequisites:
      - requirement: "Must be workspace owner"
        current_user: "Owner ✓"

      - requirement: "Cancel subscription first"
        current: "Active subscription"
        action: "Go to Billing"
        blocking: true

      - requirement: "Download workspace data (recommended)"
        optional: true
        action: "Export workspace"

    what_gets_deleted:
      - "All documents and files"
      - "All user accounts in workspace"
      - "All workspace settings"
      - "All billing and usage history"

    what_remains:
      - "Anonymized usage statistics"
      - "Legal records (if required by law)"

    grace_period:
      duration: "30 days"
      reversible: "Yes, contact support within 30 days"

    confirmation_flow:
      step_1: "Enter workspace name to confirm"
      step_2: "Enter your password"
      step_3: "Select deletion reason (optional)"
      step_4: "Confirm: 'I understand this will delete all workspace data'"

    button: "Delete Workspace Permanently"

  compliance_features:
    gdpr_compliance:
      data_subject_requests:
        process: "Admins can export user data on request"
        timeline: "Within 30 days"
        verification: "Identity verification required"

      data_processing_agreement:
        status: "DPA signed and active"
        action: "View DPA"

    data_residency:
      current_region: "US (United States)"
      available_regions: ["US", "EU", "UK", "Australia"]
      change_region: "Contact sales to migrate"

    retention_for_compliance:
      legal_hold: "Preserve specific data indefinitely"
      use_case: "Litigation, investigation"
      admin_action: "Enable legal hold"
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Use semantic HTML: <section> for data operations, <form> for deletion flows, <label> for all inputs. Provide clear headings (H2, H3) for screen reader navigation. Ensure all interactive elements are keyboard accessible. Provide visible focus indicators (2px outline, 3:1 contrast). Maintain 4.5:1 text contrast for all text. Use aria-live for status updates (export progress, deletion confirmation). Clearly announce destructive actions. Provide text alternatives for icons. Use color AND text/icons to convey information (not color alone). Support browser zoom to 200%. Test with screen readers to verify clear instructions for data export and deletion flows.

**Psychological Principles**: Control and autonomy (empower users over their data). Trust building (transparency increases confidence). Loss aversion (highlight what will be deleted, offer alternatives). Reversibility (grace periods reduce anxiety). Cognitive load reduction (clear steps, progress indicators). Informed consent (explain consequences before action). Status quo bias (make it easy but not accidental to delete). Reactance (forced data collection creates resistance). Commitment consistency (confirm understanding through typing). Anchoring (suggest alternatives before deletion). Regret minimization (download first, delete later).

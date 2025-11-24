## Privacy Control Copy Design v1.0

**Purpose**: Create transparent, empowering privacy controls that help users understand what data is collected, make informed decisions about privacy settings, build trust through clear communication, and comply with privacy regulations while maintaining accessible language that doesn't intimidate or confuse users.

---

**PROMPT:**

You are designing privacy control copy for {{platform_type}} serving {{user_type}}. Create privacy settings that explain {{data_practices}}, empower {{user_control}}, comply with {{regulations}}, and maintain {{brand_voice}}.

=== PRIVACY CONTEXT ===
Platform type: {{platform_type}} (web app/mobile app/SaaS/social platform/enterprise software)
User type: {{user_type}} (general consumers/business users/privacy-conscious/regulated industry)
Data practices: {{data_practices}} (minimal collection/personalization/advertising/analytics/third-party sharing)
User control: {{user_control}} (granular controls/binary choices/opt-in/opt-out)
Regulations: {{regulations}} (GDPR/CCPA/PIPEDA/HIPAA/industry-specific/general)
Privacy model: {{privacy_model}} (privacy-first/balanced/data-driven)

=== PRIVACY COMMUNICATION STRATEGY ===
Transparency level: {{transparency}} (basic/detailed/comprehensive/legal)
Explanation depth: {{depth}} (simple/moderate/technical/layered)
Control granularity: {{granularity}} (all-or-nothing/category-level/individual-setting)
Default stance: {{defaults}} (privacy-protective/balanced/permissive)
User guidance: {{guidance}} (prescriptive/descriptive/neutral)

=== OUTPUT REQUIREMENTS ===

```yaml
privacy_control_copy:
  core_principles:
    transparency:
      guideline: "explain what data you collect and why"
      avoid: "vague terms like 'we may collect information'"
      use: "specific descriptions of actual data collection"

    user_empowerment:
      guideline: "give users meaningful control"
      avoid: "fake choices that don't actually protect privacy"
      use: "controls that demonstrably change data practices"

    plain_language:
      guideline: "no legal jargon, 8th-grade reading level"
      avoid: "pursuant to our legitimate interests"
      use: "to improve our product"

    honest_trade_offs:
      guideline: "explain what users gain or lose"
      avoid: "hiding limitations of privacy choices"
      use: "clear explanation of feature impacts"

  privacy_setting_structures:
    simple_binary:
      pattern: "on/off toggle with clear explanation"

      example:
        name: "Allow personalized recommendations"
        description: "Use my activity to suggest content I might like"
        data_collected:
          when_on:
            - "Content you view and interact with"
            - "Time spent on different topics"
            - "Search history"
          when_off:
            - "None (generic recommendations only)"
        impact:
          when_on: "More relevant suggestions"
          when_off: "Basic recommendations based on popularity"
        default: "off"
        regulation_note: "You can change this anytime"

    category_control:
      pattern: "group related privacy settings by category"

      example:
        category: "Data Collection & Use"
        description: "Control what information we collect and how we use it"

        settings:
          - name: "Product analytics"
            what: "How you use our features"
            why: "Improve the product and fix bugs"
            data: "Feature usage, error reports, performance metrics"
            retention: "90 days"
            sharing: "Not shared with third parties"
            control: "on/off toggle"

          - name: "Personalization"
            what: "Your preferences and behavior"
            why: "Customize your experience"
            data: "Content interactions, settings, search history"
            retention: "While account is active"
            sharing: "Never shared"
            control: "on/off toggle"

    granular_control:
      pattern: "individual controls for specific data types"

      example:
        category: "Advertising & Marketing"

        settings:
          - id: "personalized-ads"
            name: "Personalized advertising"
            explanation: "Show ads based on your interests instead of generic ads"
            data_used:
              - "Pages you visit"
              - "Content you interact with"
              - "Demographic information (age, location)"
            not_used:
              - "Private messages"
              - "Health information"
              - "Financial data"
            partners: "Shared with advertising partners"
            opt_out_effect: "You'll still see ads, but they won't be personalized"
            default: "off"

          - id: "marketing-emails"
            name: "Marketing emails"
            explanation: "Receive tips, updates, and special offers via email"
            data_used:
              - "Email address"
              - "Product usage (to send relevant tips)"
            frequency: "1-2 emails per week"
            opt_out_effect: "You'll still receive account and security emails"
            default: "on"

  data_collection_explanations:
    what_we_collect:
      structure:
        - data_type: "specific category"
        - examples: "actual data points"
        - why: "reason for collection"
        - required_or_optional: "can user opt out?"

      example:
        data_type: "Account information"
        examples:
          - "Email address"
          - "Name (optional)"
          - "Profile photo (optional)"
        why: "Required to create and secure your account"
        required: true
        cannot_opt_out: "Necessary for service"

        data_type: "Usage data"
        examples:
          - "Features you use"
          - "Time spent in app"
          - "Error messages"
        why: "Help us improve the product and fix bugs"
        required: false
        opt_out: "Privacy settings > Product analytics"

    how_we_use_it:
      pattern: "connect collection to actual use cases"

      examples:
        - data: "Email address"
          uses:
            - "Send you login links"
            - "Notify you of important account changes"
            - "Send notifications you've enabled"
            - "If enabled: marketing emails"
          not_used_for:
            - "Sold to third parties"
            - "Spam"

        - data: "Location (if permitted)"
          uses:
            - "Show you local content and events"
            - "Improve search results"
            - "Provide location-based features"
          not_used_for:
            - "Track your movements"
            - "Share with other users without permission"
          control: "Disable in phone settings or app settings"

    who_can_see_it:
      categories:
        - visibility: "Only you"
          examples: "Private notes, draft content, billing information"

        - visibility: "You and our team"
          examples: "Support messages, account information"
          note: "Our team only accesses this to provide support"

        - visibility: "Other users (if you choose)"
          examples: "Public profile, posts, comments"
          control: "Privacy settings"

        - visibility: "Third-party services"
          examples: "Analytics providers, payment processors"
          limitation: "Only data necessary for that service"
          list_partners: "View our partners"

  privacy_impact_communication:
    enabling_setting:
      pattern: "explain what happens when user enables"

      example:
        setting: "Share usage data"
        when_enabled:
          data_collected: "Features you use, performance metrics, crash reports"
          how_used: "Identify bugs and improve product performance"
          who_sees: "Our development team (anonymized data)"
          benefit_to_user: "Faster bug fixes, better performance"
          can_change: "You can turn this off anytime in Settings"

    disabling_setting:
      pattern: "explain consequences of disabling"

      example:
        setting: "Location services"
        when_disabled:
          data_not_collected: "Your location"
          features_affected:
            - "Local recommendations (disabled)"
            - "Nearby events (disabled)"
            - "Location-based search (less accurate)"
          still_available: "All other features work normally"
          can_enable: "Turn back on anytime in Settings"

    changing_setting:
      pattern: "explain transition between states"

      example:
        setting: "Profile visibility"
        changing_from: "Private"
        changing_to: "Public"
        what_happens:
          immediate: "Your profile appears in search results"
          ongoing: "Anyone can view your posts and profile"
          can_revert: "Change back to Private anytime"
          past_data: "Previous posts remain private (you choose what to make public)"

  consent_and_permissions:
    requesting_permission:
      pattern: "clear explanation before asking"

      example:
        permission: "Camera access"
        why_needed: "To let you upload profile photos and share images"
        when_accessed: "Only when you choose to take or upload a photo"
        not_accessed: "We never access your camera without your action"
        deny_impact: "You can still upload photos from your library"
        grant_button: "Allow Camera Access"
        deny_button: "Not Now"

    ongoing_consent:
      pattern: "remind users of active permissions"

      example:
        active_permission: "Location: Always"
        explanation: "We're accessing your location to show nearby events"
        usage: "Last accessed: 2 hours ago"
        change: "Change to 'Only While Using App' or 'Never'"
        review: "Review all permissions"

    withdrawing_consent:
      pattern: "make it easy to revoke"

      example:
        current_state: "Sharing usage data"
        revoke_action: "Stop sharing usage data"
        what_happens: "We'll stop collecting usage data immediately"
        existing_data: "Data already collected will be deleted within 30 days"
        confirm: "Stop Sharing"

  third_party_integrations:
    connected_service:
      pattern: "explain what each integration accesses"

      example:
        service: "Google Calendar"
        connected_date: "Connected on Jan 15, 2024"
        access_granted:
          - "View your calendar events"
          - "Create new events"
          - "Modify events created by this app"
        not_accessed:
          - "Cannot delete events you created elsewhere"
          - "Cannot access other Google services"
        data_shared:
          - "Event names and times (to show in app)"
        can_revoke: "Disconnect"
        revoke_impact: "Calendar features will stop working"

    data_sharing_disclosure:
      pattern: "transparent about sharing with partners"

      example:
        partner: "Analytics Provider (Mixpanel)"
        data_shared:
          - "Feature usage (anonymized)"
          - "Device type"
          - "General location (city-level)"
        not_shared:
          - "Name or email"
          - "Private content"
          - "Precise location"
        why: "Help us understand how people use the app"
        their_policy: "View Mixpanel's privacy policy"
        opt_out: "Disable in Privacy Settings > Analytics"

  deletion_and_retention:
    data_retention:
      pattern: "explain how long you keep data"

      example:
        data_type: "Account information"
        retention: "While your account is active"
        after_deletion: "Deleted within 30 days of account closure"

        data_type: "Usage analytics"
        retention: "90 days"
        after_period: "Automatically deleted"

        data_type: "Legal compliance data"
        retention: "Up to 7 years"
        why: "Required by law for financial records"

    account_deletion:
      pattern: "clear process and consequences"

      example:
        action: "Delete my account"
        warning: "This will permanently delete your account and all data"
        what_gets_deleted:
          - "Your profile and account information"
          - "All content you've created"
          - "Your settings and preferences"
          - "Usage history"
        what_remains:
          - "Aggregated analytics (anonymized)"
          - "Legal compliance records (if required)"
        timeline: "Complete within 30 days"
        cannot_undo: "This cannot be reversed"
        alternative: "Consider deactivating your account instead"
        confirm: "Type DELETE to confirm"

    data_export:
      pattern: "explain what users can download"

      example:
        action: "Download your data"
        explanation: "Get a copy of all your information"
        includes:
          - "Account information"
          - "All content you've created"
          - "Comments and messages"
          - "Settings and preferences"
        format: "JSON and CSV files"
        timeline: "Ready within 24 hours"
        expiration: "Download link expires after 7 days"
        privacy_note: "Includes all your data, so keep the file secure"

  regulatory_compliance:
    gdpr_rights:
      rights:
        - right: "Access your data"
          action: "Download your data"

        - right: "Rectify incorrect data"
          action: "Edit in account settings"

        - right: "Delete your data"
          action: "Delete account"

        - right: "Port your data"
          action: "Download in portable format"

        - right: "Object to processing"
          action: "Disable data collection settings"

      contact: "For other requests, contact privacy@example.com"

    ccpa_disclosure:
      categories:
        - category: "Information we collect"
          link: "/privacy/what-we-collect"

        - category: "How we use your information"
          link: "/privacy/how-we-use"

        - category: "Your privacy rights"
          link: "/privacy/your-rights"

      cta: "Do not sell my personal information"
      note: "We do not sell personal information"

  age_appropriate_privacy:
    children_privacy:
      pattern: "special protections for children"

      example:
        age_requirement: "You must be 13 or older to use this service"
        parental_consent: "Users under 16 need parental permission"
        limited_collection: "We collect minimal data from users under 18"
        no_targeted_ads: "No personalized advertising for users under 18"
        parent_controls: "Parents can review and delete child's data"

  accessibility_requirements:
    semantic_structure:
      navigation: "<nav> for privacy settings menu"
      sections: "<section> for each privacy category"
      headings: "Hierarchical <h2>, <h3> structure"
      controls: "<fieldset> and <legend> for grouped settings"

    clear_labels:
      all_controls: "Accessible labels via <label> or aria-label"
      descriptions: "aria-describedby for explanatory text"
      state: "aria-checked for toggles"

    keyboard_navigation:
      tab_order: "Logical progression through privacy settings"
      shortcuts: "Skip to specific sections"

    plain_language:
      reading_level: "8th grade or below"
      avoid_jargon: "No legal terms without explanation"
      define_terms: "Explain technical concepts"

  mobile_adaptations:
    compact_layout:
      pattern: "category cards with expandable details"
      primary: "Setting name and one-line description"
      expandable: "Full explanation and data details"

    simplified_controls:
      pattern: "toggle switches for quick access"
      detail_screen: "Tap for full explanation"

    permission_prompts:
      timing: "Request only when needed"
      context: "Explain immediately before requesting"
      deny_gracefully: "App continues to function"
```

=== PRIVACY CONTROL GUIDELINES ===

**Transparency First**:
- Say exactly what data you collect
- Explain why you need it
- Show who can see it
- State how long you keep it

**Plain Language**:
- No legal jargon: "improve our product" not "legitimate interests"
- Avoid vague terms: "your email address" not "contact information"
- Use examples: "like the posts you like" not "engagement data"

**Meaningful Control**:
- Give users real choices
- Explain trade-offs honestly
- Make opt-out easy
- Don't hide behind "accept all"

**Build Trust**:
- Default to privacy-protective settings
- Make data deletion easy
- Keep promises visible
- Update users about changes

**Compliance Without Fear**:
- Meet regulatory requirements
- Use accessible language
- Provide required rights
- Don't intimidate with legal language

=== EXAMPLES ===

**Example 1: Social Media Privacy Controls**
- platform_type: "mobile social platform"
- user_type: "general consumers, varied privacy awareness"
- data_practices: "personalization, advertising, social features"
- regulations: "GDPR, CCPA"

**Output**:
```yaml
social_privacy_settings:
  categories:
    - name: "Who Can See My Content"
      icon: "eye"

      settings:
        - id: "profile-visibility"
          name: "Profile visibility"
          current: "Friends only"

          options:
            - value: "public"
              label: "Public"
              who_can_see: "Anyone, including people not logged in"
              appears_in: "Search results, recommendations"
              best_for: "Content creators, public figures"

            - value: "friends"
              label: "Friends only"
              who_can_see: "Only people you've connected with"
              appears_in: "Not in public search"
              best_for: "Most people (Recommended)"

            - value: "private"
              label: "Private"
              who_can_see: "Only people you approve"
              appears_in: "Hidden from all search"
              best_for: "Maximum privacy"

        - id: "activity-status"
          name: "Activity status"
          description: "Show when you're online"
          current: "Off"

          toggle_states:
            when_on:
              visible: "Friends see when you're active"
              you_see: "When your friends are active"

            when_off:
              visible: "Your activity status is hidden"
              you_see: "You won't see others' activity either"

    - name: "Data & Personalization"
      icon: "sliders"

      settings:
        - id: "ad-personalization"
          name: "Personalized ads"
          description: "See ads based on your interests"
          current: "Off"

          explanation:
            what_we_use: "Posts you like, accounts you follow, ads you interact with"
            why: "Show ads more relevant to you"
            alternative: "Generic ads based on age and location only"
            partners: "Shared with advertising partners (learn more)"
            your_choice: "You'll see the same number of ads either way"

        - id: "recommendations"
          name: "Personalized recommendations"
          description: "Suggest content based on your activity"
          current: "On"

          explanation:
            what_we_use: "Posts you like, searches, time spent on content"
            why: "Suggest posts, accounts, and topics you might enjoy"
            alternative: "Generic recommendations based on popularity"
            not_shared: "This data stays in our app, never sold"

  data_rights:
    - action: "Download your information"
      description: "Get a copy of all your posts, photos, and data"
      format: "JSON and media files"
      timeline: "Available within 48 hours"

    - action: "Deactivate account"
      description: "Hide your profile temporarily"
      reversible: "Yes, reactivate anytime"

    - action: "Delete account permanently"
      description: "Remove all your data forever"
      timeline: "30-day grace period, then permanent"
      warning: "This cannot be undone"
```

**Example 2: SaaS Product Privacy Settings**
- platform_type: "B2B productivity SaaS"
- user_type: "business users, compliance-aware"
- data_practices: "product analytics, minimal third-party sharing"
- regulations: "GDPR, SOC 2, industry compliance"

**Output**:
```yaml
saas_privacy_settings:
  workspace_admin_controls:
    - category: "Data Collection & Usage"
      admin_only: true

      settings:
        - name: "Product analytics"
          description: "Help us improve the product"
          scope: "Entire workspace"

          what_we_collect:
            - "Feature usage (which features are used, how often)"
            - "Performance metrics (load times, errors)"
            - "Device and browser information"

          what_we_dont_collect:
            - "Content of your documents or messages"
            - "File names or titles"
            - "Personal information beyond email"

          how_used:
            - "Identify and fix bugs"
            - "Understand which features to improve"
            - "Optimize performance"

          shared_with: "Analytics provider (anonymized only)"
          retention: "90 days, then deleted"

          opt_out_effect: "Product improvements may take longer"

        - name: "Error reporting"
          description: "Automatic crash and error reports"
          scope: "Entire workspace"

          included:
            - "Error messages and stack traces"
            - "Browser and OS version"
            - "Actions leading to error"

          excluded:
            - "Document content"
            - "User-entered data"

          purpose: "Fix bugs faster"
          required_for: "Reliable service"

    - category: "Third-Party Integrations"
      admin_and_users: true

      workspace_level:
        - name: "Approved integrations"
          description: "Which third-party apps can connect"
          current: "Admin approval required"

          options:
            - "Allow all integrations (users can connect any app)"
            - "Admin approval required (Recommended)"
            - "Block all integrations"

      user_level:
        - name: "Connected apps"
          description: "Apps you've connected to your account"

          connected_app_example:
            name: "Slack"
            connected: "Jan 15, 2024"
            access:
              - "Read your profile name"
              - "Send notifications to Slack"
            cannot_access:
              - "Your documents or files"
              - "Other workspace members' data"
            revoke: "Disconnect"

  individual_user_settings:
    - name: "Profile visibility"
      description: "Who within the workspace can see your profile"
      scope: "Your account only"

      options:
        - "Everyone in workspace (Recommended)"
        - "Only people in my teams"
        - "Only me"

    - name: "Usage data"
      description: "Share your usage patterns for product improvements"
      scope: "Your account only"

      explanation: "This is separate from workspace analytics. We'll track how you personally use features to improve the product. Data is anonymized before analysis."

      includes:
        - "Features you use most"
        - "Time spent in different areas"

      excludes:
        - "Content you create"
        - "Who you collaborate with"

  data_management:
    - action: "Export your data"
      includes: "All content you've created, comments, settings"
      format: "Markdown, JSON, CSV"
      timeline: "Available immediately"

    - action: "Delete specific content"
      description: "Permanently remove documents, messages, or files"
      timeline: "Deleted immediately, purged within 30 days"

    - action: "Leave workspace"
      description: "Remove yourself from this workspace"
      your_content: "Remains in workspace (owned by workspace)"
      your_data: "Profile information removed"

  compliance_certifications:
    - "SOC 2 Type II certified"
    - "GDPR compliant"
    - "Data stored in [region]"
    - "View our security practices"
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Use semantic HTML with <nav> for privacy navigation, <section> for categories, <fieldset> and <legend> for grouped controls. Provide accessible labels using <label> or aria-label for all controls. Use aria-describedby to connect explanatory text. Ensure keyboard navigation with logical Tab order. Provide visible focus indicators (2px outline, 3:1 contrast). Maintain 4.5:1 text contrast. Make links and buttons clearly identifiable. Use headings hierarchically (H2, H3) for screen reader navigation. Announce toggle state changes. Avoid relying on color alone to convey information. Provide text alternatives for icons. Write at 8th-grade reading level for cognitive accessibility. Support browser zoom to 200%.

**Psychological Principles**: Trust building (transparency increases user confidence). Control and autonomy (meaningful choices reduce anxiety). Loss aversion (explain what happens when disabling features). Privacy calculus (users weigh benefits vs. risks). Transparency paradox (too much info can overwhelm, layer disclosure). Default effect (users often keep defaults, make them privacy-protective). Cognitive load reduction (plain language, clear organization). Reciprocity (transparency builds loyalty). Present bias (immediate impact clearer than future consequences). Social proof (show what "most users" choose for privacy). Reactance (forced choices create resistance, offer genuine control).

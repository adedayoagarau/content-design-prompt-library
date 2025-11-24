## Settings Search Labels Design v1.0

**Purpose**: Create effective search labels and metadata for settings that help users find specific configurations quickly, improve discoverability of hidden or nested settings, support natural language queries, reduce frustration when navigating complex settings interfaces, and ensure all settings are findable through search.

---

**PROMPT:**

You are designing settings search labels for {{platform_type}} serving {{user_type}}. Create search metadata that enables {{search_patterns}}, supports {{query_types}}, improves {{discoverability}}, and maintains {{brand_voice}}.

=== SETTINGS SEARCH CONTEXT ===
Platform type: {{platform_type}} (web app/mobile app/SaaS/enterprise software/consumer product)
User type: {{user_type}} (general consumers/business users/technical users/mixed)
Search patterns: {{search_patterns}} (keyword-match/natural-language/fuzzy-search/AI-powered)
Query types: {{query_types}} (what-seeking/how-to/troubleshooting/exploratory)
Discoverability: {{discoverability}} (search-first/browse-first/hybrid)
Settings count: {{settings_count}} (few/moderate/many/very-many)

=== SEARCH STRATEGY ===
Search implementation: {{implementation}} (basic-keyword/semantic/AI-enhanced/predictive)
Synonym support: {{synonyms}} (manual/automatic/context-aware)
Metadata richness: {{metadata}} (title-only/title-description/comprehensive-tags)
Result ranking: {{ranking}} (alphabetical/relevance/usage-frequency/personalized)
Search scope: {{scope}} (labels-only/descriptions/help-text/all-content)

=== OUTPUT REQUIREMENTS ===

```yaml
settings_search_labels:
  search_label_components:
    primary_label:
      purpose: "Main setting name, always searchable"
      guidelines:
        - "Use common, expected terms"
        - "Match user mental model"
        - "Front-load important words"
        - "Keep under 40 characters"

      examples:
        - "Two-factor authentication"
        - "Email notifications"
        - "Profile visibility"
        - "Dark mode"

    description:
      purpose: "Explain what setting controls, searchable"
      guidelines:
        - "Include keywords users might search"
        - "Use plain language"
        - "60-120 characters"
        - "Action-oriented"

      examples:
        - "Control who can see your profile and posts"
        - "Choose when to receive email alerts"
        - "Require code from phone when logging in"

    search_keywords:
      purpose: "Additional terms to match user queries"
      types:
        - common_synonyms: "Alternative names for same concept"
        - related_terms: "Associated concepts"
        - action_verbs: "What users want to do"
        - problem_terms: "Issues users are trying to solve"

      example:
        setting: "Two-factor authentication"
        keywords:
          synonyms: ["2FA", "two-step verification", "login verification"]
          related: ["security", "password", "phone verification", "authenticator app"]
          actions: ["enable", "setup", "configure", "disable"]
          problems: ["account hacked", "login security", "secure account"]

    category_context:
      purpose: "Location context aids search"
      pattern: "Category name becomes searchable term"

      example:
        setting: "Push notifications"
        category: "Notifications"
        searchable_as: ["push notifications", "notification push", "notifications"]

  search_pattern_support:
    keyword_search:
      pattern: "Match exact words in labels, descriptions, keywords"

      examples:
        query: "dark"
        matches:
          - primary: "Dark mode"
          - primary: "Theme" (description contains "dark")

        query: "notifications"
        matches:
          - primary: "Email notifications"
          - primary: "Push notifications"
          - primary: "Notification frequency"
          - category: "Notifications" (all settings in category)

    natural_language:
      pattern: "Understand complete questions or phrases"

      examples:
        query: "how do I turn on dark mode"
        matches:
          - "Dark mode" (extractive: "dark mode")
          - "Theme" (contextual understanding)

        query: "stop getting so many emails"
        matches:
          - "Email notifications"
          - "Email frequency"
          - "Marketing emails"

        query: "make my profile private"
        matches:
          - "Profile visibility"
          - "Privacy settings"

    fuzzy_search:
      pattern: "Handle typos and approximations"

      examples:
        query: "notifcations" (typo)
        matches: "Notifications" (fuzzy match)

        query: "2fa"
        matches: "Two-factor authentication" (acronym match)

        query: "auto save"
        matches: "Auto-save" (spacing variation)

    task_oriented:
      pattern: "Match user intent, not just keywords"

      examples:
        query: "secure my account"
        matches:
          - "Two-factor authentication"
          - "Password"
          - "Active sessions"
          - "Login alerts"

        query: "reduce battery usage"
        matches:
          - "Background refresh"
          - "Location services"
          - "Push notifications"
          - "Auto-play videos"

  comprehensive_metadata_structure:
    basic_setting:
      required_fields:
        - id: "unique_setting_id"
        - label: "Display name"
        - description: "What this controls"
        - category: "Parent section"

      example:
        id: "email_notifications"
        label: "Email notifications"
        description: "Control when you receive email alerts"
        category: "Notifications"

    enhanced_setting:
      additional_fields:
        - keywords: "search synonyms"
        - related_settings: "linked settings"
        - common_queries: "how users search for this"
        - help_topics: "related help articles"

      example:
        id: "two_factor_auth"
        label: "Two-factor authentication"
        description: "Add an extra layer of security to your account"
        category: "Security"

        keywords:
          - "2FA"
          - "two-step verification"
          - "login code"
          - "authenticator app"
          - "phone verification"

        related_settings:
          - "password"
          - "active_sessions"
          - "login_alerts"

        common_queries:
          - "how to enable 2fa"
          - "set up two factor"
          - "secure my account"
          - "add phone verification"

        help_topics:
          - "Setting up two-factor authentication"
          - "Troubleshooting 2FA"

    comprehensive_setting:
      all_searchable_content:
        - label
        - description
        - keywords
        - option_labels: "values within setting"
        - help_text: "tooltips and explanations"
        - error_messages: "validation text"
        - placeholder_text: "input placeholders"

      example:
        id: "theme"
        label: "Theme"
        description: "Choose light, dark, or automatic theme"
        category: "Appearance"

        keywords: ["dark mode", "light mode", "color scheme", "appearance"]

        option_labels:
          - "Light"
          - "Dark"
          - "Auto (match system)"

        help_text: "Automatic theme changes based on your device settings"

        searchable_content: "All fields combined for comprehensive matching"

  synonym_mapping:
    common_synonyms:
      - canonical: "Notifications"
        synonyms: ["alerts", "updates", "messages", "reminders"]

      - canonical: "Privacy"
        synonyms: ["security", "private", "who can see", "visibility"]

      - canonical: "Account"
        synonyms: ["profile", "login", "credentials", "email", "password"]

      - canonical: "Theme"
        synonyms: ["dark mode", "appearance", "colors", "look and feel"]

      - canonical: "Delete account"
        synonyms: ["close account", "remove account", "cancel", "deactivate"]

    technical_to_plain:
      - technical: "API key"
        plain: "developer access token"

      - technical: "OAuth"
        plain: "connected apps authorization"

      - technical: "SMTP"
        plain: "email server settings"

      - technical: "Webhook"
        plain: "automatic notifications to other services"

    abbreviation_expansion:
      - abbreviation: "2FA"
        full: "Two-factor authentication"

      - abbreviation: "SSO"
        full: "Single sign-on"

      - abbreviation: "MFA"
        full: "Multi-factor authentication"

      - abbreviation: "GDPR"
        full: "Privacy and data rights"

  task_to_setting_mapping:
    security_tasks:
      - query: "secure my account"
        settings:
          - "Two-factor authentication"
          - "Password"
          - "Active sessions"

      - query: "recover my account"
        settings:
          - "Recovery email"
          - "Recovery phone"
          - "Backup codes"

      - query: "see who's logged in"
        settings:
          - "Active sessions"
          - "Login history"

    privacy_tasks:
      - query: "make profile private"
        settings:
          - "Profile visibility"
          - "Activity status"
          - "Search visibility"

      - query: "control my data"
        settings:
          - "Data collection"
          - "Download your data"
          - "Delete account"

      - query: "stop tracking"
        settings:
          - "Analytics"
          - "Personalized ads"
          - "Location services"

    notification_tasks:
      - query: "stop getting emails"
        settings:
          - "Email notifications"
          - "Email frequency"
          - "Marketing emails"

      - query: "reduce notifications"
        settings:
          - "Notification frequency"
          - "Quiet hours"
          - "Pause notifications"

    billing_tasks:
      - query: "cancel subscription"
        settings:
          - "Current plan"
          - "Cancel subscription"

      - query: "change payment method"
        settings:
          - "Payment method"
          - "Billing information"

  search_result_presentation:
    result_structure:
      components:
        - setting_label: "bold, primary"
        - breadcrumb: "Category > Subcategory"
        - description: "brief explanation"
        - match_highlight: "show why it matched"

      example:
        label: "Email notifications"
        breadcrumb: "Notifications > Email"
        description: "Control when you receive email alerts"
        match: "Matched 'email' in title"

    result_ranking:
      factors:
        - exact_match: "Label matches query exactly (highest priority)"
        - partial_match: "Label contains query words"
        - description_match: "Description contains query"
        - keyword_match: "Matches in metadata keywords"
        - usage_frequency: "Popular settings ranked higher"
        - recency: "Recently changed settings ranked higher"

      example_ranking:
        query: "notifications"
        results:
          1:
            label: "Notifications"
            reason: "Exact category match"
            breadcrumb: "All notification settings"

          2:
            label: "Email notifications"
            reason: "Partial title match"
            breadcrumb: "Notifications > Email"

          3:
            label: "Push notifications"
            reason: "Partial title match"
            breadcrumb: "Notifications > Push"

          4:
            label: "Quiet hours"
            reason: "Description contains 'notifications'"
            breadcrumb: "Notifications > Schedule"

    grouped_results:
      pattern: "Group related settings together"

      example:
        query: "privacy"
        groups:
          - category: "Privacy Settings (5 results)"
            settings:
              - "Profile visibility"
              - "Activity status"
              - "Data collection"
              - "Search visibility"
              - "Location sharing"

          - category: "Related Settings (2 results)"
            settings:
              - "Connected apps"
              - "Login alerts"

    zero_results:
      pattern: "Helpful message when nothing found"

      suggestions:
        - "Check spelling"
        - "Try different keywords"
        - "Browse categories: [List top categories]"
        - "Search suggestions: [Show popular searches]"

      example:
        query: "notfications" (typo)
        message: "No results for 'notfications'"
        suggestion: "Did you mean 'notifications'?"
        popular:
          - "Dark mode"
          - "Email notifications"
          - "Privacy settings"

  search_autocomplete:
    suggestions_as_typing:
      trigger: "After 2 characters typed"

      types:
        - setting_names: "Match setting labels"
        - categories: "Match category names"
        - common_queries: "Match frequent searches"
        - recent_searches: "User's search history"

      example:
        typed: "not"
        suggestions:
          - "Notifications" (category)
          - "Email notifications" (setting)
          - "Push notifications" (setting)
          - "notification frequency" (recent search)

    predicted_queries:
      pattern: "Suggest complete questions"

      examples:
        typed: "how to"
        predictions:
          - "how to enable dark mode"
          - "how to change password"
          - "how to delete account"
          - "how to turn off notifications"

  mobile_search_considerations:
    mobile_search_ui:
      placement: "Prominent search bar at top of settings"
      trigger: "Tap to expand full screen search"
      voice_input: "Microphone icon for voice search"

    mobile_queries:
      pattern: "Shorter queries on mobile"

      examples:
        desktop: "how do I change my password"
        mobile: "change password"

        desktop: "make my profile private"
        mobile: "private profile"

    result_display:
      layout: "Vertical list, larger tap targets"
      context: "Show breadcrumb for navigation"
      action: "Tap to go directly to setting"

  accessibility_features:
    keyboard_search:
      shortcut: "Cmd/Ctrl+K or / to focus search"
      navigation: "Arrow keys to navigate results"
      selection: "Enter to go to setting"

    screen_reader:
      announcement: "Announce number of results"
      result_structure: "Setting name, category, description"
      navigation: "Clear focus indicators"

      example_announcement: "Email notifications, in Notifications category, Control when you receive email alerts, 1 of 5 results"

    search_suggestions:
      accessible_labels: "Clear labeling of suggestions"
      keyboard_accessible: "Navigate with arrows"

  analytics_and_improvement:
    track_searches:
      metrics:
        - "Search queries (what users search for)"
        - "Zero-result searches (failed searches)"
        - "Clicked results (which results are useful)"
        - "Refined searches (when users search again)"

    improve_searchability:
      zero_results_analysis:
        query: "notifs"
        action: "Add 'notifs' as keyword for 'Notifications'"

      low_click_results:
        query: "secure account"
        current_top: "Account security" (low clicks)
        action: "Boost 'Two-factor authentication' for this query"

      common_rephrasings:
        initial: "turn off emails"
        refined: "email notifications"
        action: "Map 'turn off emails' → 'Email notifications'"

  help_integration:
    setting_to_help_linking:
      pattern: "Connect settings to help articles"

      example:
        setting: "Two-factor authentication"
        help_articles:
          - "Setting up 2FA"
          - "Troubleshooting 2FA"
          - "Changing 2FA method"

        search_impact: "Searching 'setup 2fa' shows both setting and help articles"

    contextual_help_in_results:
      pattern: "Show help snippet with setting"

      example:
        query: "enable 2fa"
        result:
          setting: "Two-factor authentication"
          quick_help: "Adds extra security by requiring a code from your phone"
          action: "Enable 2FA"
          learn_more: "How to set up 2FA"
```

=== SETTINGS SEARCH GUIDELINES ===

**Comprehensive Metadata**:
- Include synonyms users actually use
- Map tasks to relevant settings
- Cover common misspellings (fuzzy search)
- Include both technical and plain language terms

**Natural Language Support**:
- Support "how to" questions
- Map user goals to settings
- Understand action verbs (enable, disable, change)
- Handle complete sentences

**Result Quality**:
- Rank by relevance, not just alphabetical
- Group related settings together
- Highlight why each result matched
- Provide breadcrumb for context

**Failed Searches**:
- Offer spelling suggestions
- Show popular settings
- Suggest browsing categories
- Track and improve zero-result queries

**Mobile Optimization**:
- Prominent search placement
- Voice search support
- Quick access to results
- Finger-friendly result list

=== EXAMPLES ===

**Example 1: Consumer App Settings Search**
- platform_type: "mobile social app"
- user_type: "general consumers, varied technical levels"
- settings_count: "~50 settings across 8 categories"
- search_implementation: "keyword + fuzzy matching"

**Output**:
```yaml
consumer_app_search:
  search_interface:
    placement: "Top of settings screen"
    placeholder: "Search settings"
    icon: "Magnifying glass"

  searchable_settings:
    - id: "profile_visibility"
      label: "Profile visibility"
      description: "Control who can see your profile and posts"
      category: "Privacy"

      keywords:
        - "private"
        - "public"
        - "who can see"
        - "visibility"
        - "hide profile"
        - "make private"

      common_queries:
        - "make my profile private"
        - "who can see my profile"
        - "hide my posts"

      search_examples:
        query: "private"
        matches: true
        reason: "Keyword match"

        query: "who can see my stuff"
        matches: true
        reason: "Natural language + synonym (stuff → profile/posts)"

    - id: "dark_mode"
      label: "Dark mode"
      description: "Use dark colors for the interface"
      category: "Appearance"

      keywords:
        - "theme"
        - "dark theme"
        - "night mode"
        - "black background"
        - "appearance"
        - "colors"

      common_queries:
        - "turn on dark mode"
        - "enable dark theme"
        - "change to dark"

      search_examples:
        query: "dark"
        matches: true
        reason: "Label contains 'dark'"

        query: "night mode"
        matches: true
        reason: "Keyword synonym"

    - id: "notifications"
      label: "Notifications"
      description: "Manage email, push, and in-app alerts"
      category: "Notifications"

      keywords:
        - "alerts"
        - "emails"
        - "push"
        - "reminders"
        - "stop notifications"
        - "turn off alerts"

      common_queries:
        - "stop getting notifications"
        - "turn off emails"
        - "reduce alerts"

      search_examples:
        query: "stop emails"
        matches: true
        reason: "Task mapping (stop emails → email notifications)"

        query: "notifs" (common abbreviation)
        matches: true
        reason: "Fuzzy match + common abbreviation"

    - id: "delete_account"
      label: "Delete account"
      description: "Permanently delete your account and data"
      category: "Account"

      keywords:
        - "close account"
        - "remove account"
        - "deactivate"
        - "cancel account"
        - "leave"
        - "quit"

      common_queries:
        - "how to delete my account"
        - "close my account"
        - "cancel account"

      search_examples:
        query: "delete account"
        matches: true
        reason: "Exact label match"

        query: "quit"
        matches: true
        reason: "Keyword match (quit → delete account)"

  search_results_examples:
    query_1:
      query: "notifications"
      result_count: 6

      results:
        - label: "Notifications"
          type: "category"
          breadcrumb: "Settings"
          action: "View all notification settings"
          rank: 1
          reason: "Exact category match"

        - label: "Email notifications"
          breadcrumb: "Notifications > Email"
          description: "Control when you receive emails"
          rank: 2
          reason: "Partial label match"

        - label: "Push notifications"
          breadcrumb: "Notifications > Push"
          description: "Manage mobile alerts"
          rank: 3
          reason: "Partial label match"

        - label: "Quiet hours"
          breadcrumb: "Notifications > Schedule"
          description: "Pause notifications during specific hours"
          rank: 4
          reason: "Category match + description contains 'notifications'"

    query_2:
      query: "make my profile private"
      result_count: 3

      results:
        - label: "Profile visibility"
          breadcrumb: "Privacy"
          description: "Control who can see your profile and posts"
          rank: 1
          reason: "Natural language match (make private → visibility)"
          highlight: "Set to 'Friends only' or 'Private'"

        - label: "Activity status"
          breadcrumb: "Privacy"
          description: "Show when you're online"
          rank: 2
          reason: "Related privacy setting"

        - label: "Search visibility"
          breadcrumb: "Privacy"
          description: "Appear in search results"
          rank: 3
          reason: "Related privacy setting"

    query_3_no_results:
      query: "change font size"
      result_count: 0

      message: "No settings found for 'change font size'"

      suggestions:
        - "Try: 'text size', 'display', 'accessibility'"

      browse:
        - "Appearance settings"
        - "Accessibility settings"

      popular_searches:
        - "Dark mode"
        - "Notifications"
        - "Privacy"

  voice_search:
    supported: true

    voice_queries:
      - spoken: "Turn on dark mode"
        interpreted: "dark mode"
        result: "Dark mode setting"

      - spoken: "How do I make my profile private"
        interpreted: "make profile private"
        result: "Profile visibility setting"

      - spoken: "Stop email notifications"
        interpreted: "email notifications"
        result: "Email notifications setting"
```

**Example 2: Enterprise SaaS Settings Search**
- platform_type: "B2B productivity platform"
- user_type: "business users, admins, technical and non-technical"
- settings_count: "~200 settings across user and workspace levels"
- search_implementation: "semantic search with role-based filtering"

**Output**:
```yaml
enterprise_saas_search:
  advanced_search:
    search_bar:
      placeholder: "Search settings or ask a question..."
      keyboard_shortcut: "Cmd+K"
      scope_filter: "My settings | Workspace settings (admin) | All"

    natural_language:
      supported: true

      examples:
        - query: "How do I enable SSO for my team?"
          results:
            primary:
              setting: "Single sign-on (SSO)"
              breadcrumb: "Workspace > Authentication"
              admin_only: true
              quick_action: "Configure SSO"

            related:
              - "SAML configuration"
              - "User provisioning"
              - "Domain verification"

            help:
              - "Setting up SSO"
              - "SAML vs OAuth"

        - query: "reduce storage usage"
          results:
            - setting: "File retention policy"
              breadcrumb: "Workspace > Data management"
              description: "Auto-delete old files"

            - setting: "File version limits"
              breadcrumb: "Workspace > Data management"
              description: "Control how many versions to keep"

            - setting: "Usage dashboard"
              breadcrumb: "Workspace > Billing"
              description: "See storage breakdown"

  comprehensive_metadata:
    workspace_setting_example:
      id: "sso_configuration"
      label: "Single sign-on (SSO)"
      description: "Allow users to log in with company credentials"
      category: "Authentication"
      access_level: "admin_only"

      keywords:
        technical: ["SSO", "SAML", "OAuth", "identity provider"]
        plain: ["company login", "one login", "unified login"]
        related: ["authentication", "security", "access control"]

      common_queries:
        - "set up SSO"
        - "enable single sign on"
        - "configure SAML"
        - "Google Workspace login"
        - "Okta integration"

      task_mappings:
        - "improve security" → SSO
        - "simplify login" → SSO
        - "integrate with Google" → SSO

      prerequisites:
        - "Enterprise plan required"
        - "Domain ownership verified"

      related_settings:
        - "Domain verification"
        - "User provisioning"
        - "Session timeout"

      help_articles:
        - "SSO setup guide"
        - "SAML configuration"
        - "Troubleshooting SSO"

    user_setting_example:
      id: "two_factor_auth"
      label: "Two-factor authentication (2FA)"
      description: "Add extra security to your account"
      category: "Security"
      access_level: "all_users"

      keywords:
        abbreviations: ["2FA", "MFA"]
        synonyms: ["two-step", "login verification", "authenticator"]
        related: ["security", "password", "login"]

      common_queries:
        - "enable 2FA"
        - "set up authenticator app"
        - "phone verification"
        - "secure my account"

      workspace_policy_note: "Required by workspace admin"

  role_based_search:
    filtering:
      regular_user:
        sees:
          - "Personal settings"
          - "User preferences"
        hidden:
          - "Workspace admin settings"
          - "Billing settings"

      workspace_admin:
        sees:
          - "All user settings"
          - "Workspace settings"
          - "Admin-only settings"

    search_results:
      query: "authentication"
      user_role: "Workspace Admin"

      results:
        my_settings:
          - label: "Two-factor authentication"
            breadcrumb: "My Account > Security"
            scope: "Personal"

        workspace_settings:
          - label: "Single sign-on (SSO)"
            breadcrumb: "Workspace > Authentication"
            scope: "Workspace (Admin only)"
            badge: "Admin"

          - label: "Authentication requirements"
            breadcrumb: "Workspace > Security"
            scope: "Workspace (Admin only)"
            badge: "Admin"

          - label: "Session timeout"
            breadcrumb: "Workspace > Security"
            scope: "Workspace (Admin only)"
            badge: "Admin"

  intelligent_suggestions:
    contextual_recommendations:
      - scenario: "User searches 'security'"
        insight: "2FA not enabled"
        result_enhancement:
          setting: "Two-factor authentication"
          status: "Not enabled • Recommended"
          quick_action: "Enable now"

      - scenario: "Admin searches 'reduce costs'"
        insight: "40% of seats unused"
        suggestions:
          - "Review user count"
          - "Downgrade to smaller plan"
          - "Remove inactive users"

    popular_by_role:
      role: "Workspace Admin"
      popular_searches:
        - "Add users"
        - "SSO setup"
        - "Billing"
        - "Export data"
        - "Permissions"

    recent_changes:
      pattern: "Show recently modified settings first"
      indicator: "Modified 2 days ago"

  zero_results_handling:
    query: "how to add someone to my workspace"
    no_direct_match: true

    helpful_response:
      message: "No settings found for 'how to add someone to my workspace'"

      did_you_mean:
        - setting: "Invite members"
          breadcrumb: "Workspace > Members"
          relevance: "To add people to workspace"

      browse_categories:
        - "Member management"
        - "Permissions"
        - "Team settings"

      help_articles:
        - "Inviting team members"
        - "Setting user permissions"
        - "Managing workspace members"

      contact_support: "Still can't find it? Contact support"
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Provide semantic HTML with <search> role or aria-role="search" for search input. Use <label> for search input. Announce search results count to screen readers. Provide clear focus indicators (2px outline, 3:1 contrast) for search box and results. Support keyboard navigation: Tab to move through results, Enter to select. Use aria-live to announce result count changes. Maintain 4.5:1 text contrast in results. Provide skip links to bypass results. Use headings to structure result groups. Test with screen readers to verify clear result announcements. Support voice input for mobile accessibility.

**Psychological Principles**: Recognition over recall (search > remember location). Cognitive load reduction (search faster than browsing). Satisficing (first good result is often chosen). Information scent (breadcrumbs help users verify correct setting). Effort heuristic (search perceived as easier than exploring). Error tolerance (fuzzy search reduces frustration). Mental models (natural language matches how users think). Progressive disclosure (quick results > detailed exploration). Confirmation bias (highlight matches to validate choice). Peak-end rule (successful search creates positive impression).

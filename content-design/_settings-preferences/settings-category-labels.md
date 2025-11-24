## Settings Category Label Design v1.0

**Purpose**: Create clear, intuitive category labels that organize settings logically, help users find specific configurations quickly, establish predictable information architecture, and reduce cognitive load when navigating complex settings interfaces.

---

**PROMPT:**

You are designing settings category labels for {{platform_type}} serving {{user_type}}. Create category names that organize {{settings_count}} settings clearly, align with {{mental_model}}, support {{user_goal}}, and maintain {{brand_voice}}.

=== SETTINGS CONTEXT ===
Platform type: {{platform_type}} (SaaS app/mobile app/web service/enterprise software/consumer product)
User type: {{user_type}} (general consumers/business users/admins/power users/mixed)
Settings count: {{settings_count}} (total number of individual settings)
Mental model: {{mental_model}} (task-based/feature-based/persona-based/technical)
User goal: {{user_goal}} (configure/customize/manage/troubleshoot)
Settings complexity: {{complexity}} (simple/moderate/complex/expert-level)

=== CATEGORY STRATEGY ===
Organization principle: {{organization}} (by feature/by task/by user role/by system area)
Category count: {{category_count}} (typically 5-12 top-level categories)
Hierarchy depth: {{depth}} (flat/two-level/three-level)
Navigation pattern: {{navigation}} (sidebar/tabs/accordion/search-first)
Customization level: {{customization}} (basic/moderate/advanced/admin)

=== OUTPUT REQUIREMENTS ===

```yaml
settings_categories:
  category_labeling_principles:
    clarity_over_creativity:
      guideline: "use expected, standard terms"
      examples:
        good: ["Account", "Privacy", "Notifications", "Security"]
        avoid: ["Your Space", "Shield", "Alerts", "Lock & Key"]

    user_language:
      guideline: "match how users think about settings"
      user_perspective: "Profile" (what I show others) vs "Account" (my credentials)
      avoid_technical: "Preferences" > "Configuration Parameters"

    parallel_structure:
      guideline: "consistent grammatical pattern"
      all_nouns: ["Account", "Security", "Privacy", "Notifications"]
      all_gerunds: ["Managing Account", "Securing Data", "Controlling Privacy"]
      recommended: "all nouns for conciseness"

    specificity:
      guideline: "descriptive, not vague"
      specific: "Email Notifications" > "Email" > "Messages"
      specific: "Privacy & Data" > "Privacy" (clarifies scope)

  standard_category_patterns:
    personal_account:
      categories:
        - label: "Profile"
          description: "personal information, photo, bio"
          icon: "user-circle"
          typical_settings:
            - "Name"
            - "Profile photo"
            - "Bio/About"
            - "Public profile visibility"

        - label: "Account"
          description: "credentials, email, password, account status"
          icon: "settings"
          typical_settings:
            - "Email address"
            - "Password"
            - "Two-factor authentication"
            - "Account deletion"

        - label: "Privacy"
          description: "who can see what, data collection"
          icon: "lock"
          typical_settings:
            - "Profile visibility"
            - "Activity visibility"
            - "Data sharing preferences"
            - "Search visibility"

        - label: "Security"
          description: "authentication, sessions, devices"
          icon: "shield"
          typical_settings:
            - "Password management"
            - "Two-factor authentication"
            - "Active sessions"
            - "Connected devices"
            - "Login alerts"

        - label: "Notifications"
          description: "email, push, in-app alerts"
          icon: "bell"
          typical_settings:
            - "Email notifications"
            - "Push notifications"
            - "In-app notifications"
            - "Notification frequency"

        - label: "Preferences"
          description: "language, timezone, display options"
          icon: "sliders"
          typical_settings:
            - "Language"
            - "Timezone"
            - "Date format"
            - "Theme (light/dark)"

        - label: "Billing"
          description: "subscription, payment, invoices"
          icon: "credit-card"
          typical_settings:
            - "Current plan"
            - "Payment method"
            - "Billing history"
            - "Invoices"

        - label: "Integrations"
          description: "connected apps, APIs, webhooks"
          icon: "puzzle-piece"
          typical_settings:
            - "Connected accounts"
            - "API keys"
            - "Webhooks"
            - "OAuth applications"

    workspace_team:
      categories:
        - label: "General"
          description: "workspace name, basic info"

        - label: "Members"
          description: "team members, invitations, roles"

        - label: "Permissions"
          description: "access control, role definitions"

        - label: "Billing & Plan"
          description: "subscription, payment, invoices"

        - label: "Integrations"
          description: "third-party connections"

        - label: "Advanced"
          description: "technical settings, API, exports"

    product_service:
      categories:
        - label: "General"
          description: "basic product settings"

        - label: "Appearance"
          description: "theme, layout, display"

        - label: "Language & Region"
          description: "localization settings"

        - label: "Accessibility"
          description: "screen reader, contrast, motion"

        - label: "Data & Privacy"
          description: "data handling, privacy controls"

        - label: "About"
          description: "version, terms, support"

  category_naming_patterns:
    single_word:
      examples: ["Account", "Privacy", "Security", "Billing"]
      pros: "concise, scannable"
      cons: "may be ambiguous"
      use_when: "context is clear, common settings"

    two_word_descriptive:
      examples: ["Account Settings", "Privacy Controls", "Notification Preferences"]
      pros: "more specific, clearer scope"
      cons: "longer, may wrap on mobile"
      use_when: "need clarification, avoid ambiguity"

    compound_with_ampersand:
      examples: ["Privacy & Security", "Billing & Payments", "Language & Region"]
      pros: "combines related areas"
      cons: "may indicate category needs splitting"
      use_when: "closely related settings, keeping categories manageable"

    task_oriented:
      examples: ["Manage Account", "Control Privacy", "Customize Appearance"]
      pros: "action-focused, goal-oriented"
      cons: "verbose, less scannable"
      use_when: "task completion is primary goal"

  special_category_types:
    general_catch_all:
      label: "General"
      purpose: "basic settings that don't fit elsewhere"
      placement: "first position typically"
      avoid_overuse: "don't use as dumping ground"

    advanced_expert:
      label: "Advanced" or "Developer" or "Admin"
      purpose: "technical settings for power users"
      placement: "last position typically"
      warning: "optional warning about changing advanced settings"

    about_info:
      label: "About" or "Help & Support"
      purpose: "app version, terms, help resources"
      placement: "last position"
      not_really_settings: "informational rather than configurable"

    experimental:
      label: "Labs" or "Experiments" or "Beta Features"
      purpose: "opt-in to experimental features"
      indicator: "badge showing 'Beta' or 'Experimental'"

  category_descriptions:
    when_to_include:
      use_case: "complex settings, enterprise software, first-time users"
      placement: "below category name or in tooltip"

    description_format:
      length: "5-10 words, fragment or short sentence"
      content: "what settings are in this category"

      examples:
        - "Account: Manage your email, password, and login settings"
        - "Privacy: Control who sees your information"
        - "Notifications: Choose what alerts you receive"

  icon_pairing:
    when_to_use: "always for top-level categories, aids recognition"

    standard_icons:
      - category: "Profile"
        icon: "👤 user-circle"
      - category: "Security"
        icon: "🛡️ shield"
      - category: "Notifications"
        icon: "🔔 bell"
      - category: "Billing"
        icon: "💳 credit-card"
      - category: "Privacy"
        icon: "🔒 lock"
      - category: "Appearance"
        icon: "🎨 palette"
      - category: "Integrations"
        icon: "🔌 plug or 🧩 puzzle"

    accessibility: "icons supplement text, not replace"

  mobile_adaptations:
    abbreviated_labels:
      when: "space constrained navigation"
      examples:
        - "Notifications" → "Alerts"
        - "Preferences" → "Prefs"
        - "Integrations" → "Apps"

      recommendation: "use full labels with icon-only option"

    stacked_navigation:
      approach: "vertical list, full labels"
      icons: "help distinguish categories at a glance"

  localization_considerations:
    translation:
      character_expansion: "plan for 30-40% expansion in some languages"
      cultural_appropriateness: "some metaphors don't translate"

    examples:
      english: "Privacy"
      german: "Datenschutz" (longer)
      japanese: "プライバシー" (character width)

  navigation_integration:
    sidebar_navigation:
      layout: "vertical list with icons"
      active_state: "highlighted background + border"
      hierarchy: "nested subcategories indented"

    tab_navigation:
      layout: "horizontal tabs"
      responsive: "scroll or collapse to menu on mobile"
      count: "limit to 5-7 visible tabs"

    accordion:
      layout: "expandable sections"
      default_state: "current category expanded"

    search_first:
      pattern: "search bar prominent, categories secondary"
      category_as_filter: "filter results by category"

  accessibility_implementation:
    semantic_structure:
      navigation: "<nav aria-label='Settings navigation'>"
      list: "<ul> or <nav> with links"
      headings: "<h2> for category names"

    aria_attributes:
      current_category:
        aria_current: "'page' on active category"

      icon_labels:
        aria_hidden: "true for decorative icons"
        aria_label: "on category link if icon-only"

    keyboard_navigation:
      tab_access: "all categories in tab order"
      arrow_keys: "optional up/down navigation"
      focus_indicators: "2px outline, 3:1 contrast"

    screen_reader_support:
      category_announcement: "'Account settings category, link'"
      subcategory_indication: "announce nesting level"

  analytics_tracking:
    events_to_track:
      - event: "settings_category_accessed"
        properties: ["category_name", "navigation_method"]

      - event: "settings_search_used"
        properties: ["query", "results_shown", "category_selected"]

    insights:
      popular_categories: "which settings accessed most"
      category_effectiveness: "do users find settings quickly"
      navigation_patterns: "sidebar vs search vs tabs usage"
      category_clarity: "low engagement may indicate unclear labels"
```

=== CATEGORY LABEL GUIDELINES ===

**Clarity First**:
- Use standard, expected terms: "Account" not "Your Space"
- Match platform conventions (iOS/Android/web standards)
- Avoid clever wordplay that obscures meaning
- Test with users unfamiliar with your product

**Parallel Structure**:
- All nouns: "Profile, Security, Privacy" ✓
- Mixed: "Profile, Securing Data, Privacy" ✗
- Consistency aids scannability and comprehension

**Specificity Balance**:
- Specific enough: "Email Notifications" vs vague "Email"
- Not too narrow: "Account" vs overly specific "Email and Password"
- Goldilocks principle: just right level of detail

**Character Limits**:
- Single word: 8-15 characters ideal
- Two words: 15-25 characters
- Mobile: shorter preferred, consider abbreviation

**Avoid**:
- Technical jargon: "Preferences" > "Config"
- Redundancy: "Settings" in category name (already in Settings)
- Ambiguity: "General" as multiple category names
- Cutesy names: "Your Stuff" (unprofessional)

=== EXAMPLES ===

**Example 1: Consumer SaaS Application**
- platform_type: "B2C productivity app"
- user_type: "general consumers, mixed technical levels"
- organization: "by feature area and user concern"
- category_count: "7 categories"

**Output**:
```yaml
settings_categories:
  categories:
    - label: "Profile"
      description: "Your name, photo, and public information"
      icon: "user-circle"
      position: 1

    - label: "Account"
      description: "Email, password, and account status"
      icon: "settings"
      position: 2

    - label: "Privacy"
      description: "Control who sees your activity"
      icon: "lock"
      position: 3

    - label: "Notifications"
      description: "Manage email and push alerts"
      icon: "bell"
      position: 4

    - label: "Appearance"
      description: "Theme, layout, and display options"
      icon: "palette"
      position: 5

    - label: "Billing"
      description: "Subscription and payment methods"
      icon: "credit-card"
      position: 6

    - label: "Advanced"
      description: "API keys, data export, and technical options"
      icon: "code"
      position: 7
```

**Example 2: Enterprise Workspace Settings**
- platform_type: "team collaboration platform"
- user_type: "workspace admins, business users"
- organization: "by administrative function"
- category_count: "8 categories"

**Output**:
```yaml
settings_categories:
  categories:
    - label: "General"
      description: "Workspace name and basic information"
      icon: "home"

    - label: "Members & Guests"
      description: "Manage team members and external collaborators"
      icon: "users"

    - label: "Permissions"
      description: "Access controls and role definitions"
      icon: "shield-check"

    - label: "Authentication"
      description: "SSO, SAML, and login requirements"
      icon: "key"

    - label: "Billing & Plan"
      description: "Subscription, invoices, and usage"
      icon: "credit-card"

    - label: "Integrations"
      description: "Connected apps and services"
      icon: "puzzle-piece"

    - label: "Security & Compliance"
      description: "Audit logs, retention, and policies"
      icon: "shield"

    - label: "Developer"
      description: "API, webhooks, and technical settings"
      icon: "code"
      audience: "admins and developers only"
```

**Example 3: Mobile App Settings**
- platform_type: "mobile social app"
- user_type: "general consumers, mobile-first"
- organization: "by user need, simplified"
- category_count: "6 categories"

**Output**:
```yaml
settings_categories:
  categories:
    - label: "Account"
      description: "Profile, email, and password"
      icon: "user"

    - label: "Privacy & Security"
      description: "Control your data and who sees your content"
      icon: "lock"
      compound: "combined related concerns for simplicity"

    - label: "Notifications"
      description: "Alerts, sounds, and badges"
      icon: "bell"

    - label: "Display"
      description: "Theme, text size, and layout"
      icon: "eye"

    - label: "Data Usage"
      description: "Manage cellular and storage use"
      icon: "database"
      mobile_specific: true

    - label: "About & Support"
      description: "App info, help, and legal"
      icon: "info"
```

---

**Accessibility Requirements**: Must meet WCAG 3.0 Level AA standards. Use semantic HTML (nav, ul, li, or h2 for categories). Provide clear accessible names for all category links. Use aria-current="page" to indicate active category. Ensure keyboard navigation works with Tab and arrow keys. Provide visible focus indicators (2px outline, 3:1 contrast). If using icons, ensure they're decorative (aria-hidden) or have proper aria-labels. Maintain 4.5:1 color contrast for category text. Make touch targets minimum 44x44px on mobile. Test with screen readers to verify category structure and hierarchy are clear. Announce active category clearly to assistive technologies.

**Psychological Principles**: Cognitive load reduction (organized categories reduce mental effort). Recognition over recall (familiar category names aid navigation). Chunking (grouping related settings into categories). Miller's Law (limit to 5-9 categories for optimal processing). Serial position effect (most important categories first and last). Consistency principle (match platform conventions reduces learning). Mental models (align with how users conceptualize settings). Progressive disclosure (general to specific hierarchy). Satisficing behavior (clear labels help users find "good enough" quickly). Gestalt proximity (visual grouping of related settings).

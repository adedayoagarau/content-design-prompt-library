## Empty Data State Content Framework v1.0

**Purpose**: Transform data absence into actionable guidance that explains why data is missing, educates users, and provides clear next steps for analytics and reporting interfaces.

---

**PROMPT:**

Design empty state content for {{data_context}} in {{product_name}} serving {{user_role}}.

=== EMPTY STATE SCENARIO ===
Empty state type: {{empty_state_type}} (no data yet/filtered out/error/permissions/data loading/temporary)
Root cause: {{root_cause}}
User control level: {{user_control}} (user can fix/admin can fix/system issue/time-dependent)
First-time user: {{is_first_time}} (yes/no)
Expected resolution time: {{resolution_timeframe}}
Impact severity: {{impact_severity}} (blocking/limiting/informational)

=== DATA CONTEXT ===

**Data Characteristics**:
- Data type: {{data_type}} (metrics/transactions/events/users/content/logs)
- Expected data source: {{data_source}}
- Collection mechanism: {{collection_method}} (automatic/manual/integration/upload)
- Typical volume: {{expected_volume}}
- Data retention period: {{retention_period}}

**User Intent**:
- User's goal: {{user_goal}}
- Expected insight: {{expected_insight}}
- Decision dependency: {{decision_dependency}} (critical/important/optional)
- Alternative workflows: {{alternative_options}}

=== INTERFACE CONTEXT ===

**Visual Space**:
- Container size: {{container_size}} (full page/card/panel/table/chart)
- Available real estate: {{available_space}}
- Surrounding elements: {{surrounding_context}}
- Brand illustration availability: {{has_illustration}} (yes/no)

**User Journey Stage**:
- Onboarding phase: {{onboarding_stage}} (initial setup/learning/established)
- Feature adoption: {{feature_familiarity}} (new feature/familiar feature)
- Previous interactions: {{interaction_history}}

=== CONTENT STRATEGY ===

**Tone Calibration**:
- Severity level: {{severity_tone}} (encouraging/neutral/concerning/urgent)
- Responsibility attribution: {{whose_action}} (user/admin/system/external)
- Educational opportunity: {{education_level}} (teach concept/provide tip/minimal)
- Reassurance need: {{reassurance_needed}} (high/medium/low)

**Call-to-Action Priority**:
- Primary action: {{primary_cta}}
- Secondary action: {{secondary_cta}}
- Tertiary action: {{tertiary_cta}}
- Help resource: {{help_link}}

=== OUTPUT REQUIREMENTS ===

```yaml
empty_state_content:
  visual_elements:
    illustration_description: "string (for illustration brief)"
    icon_name: "string (if using icon instead)"
    color_scheme: "string (aligned with state severity)"

  text_content:
    headline: "string (4-8 words, clear and specific)"
    subheadline: "string (1-2 sentences explaining why empty)"
    body_text: "string (optional, additional context or education)"

  emotional_tone:
    voice: "encouraging/explanatory/apologetic/neutral"
    perspective: "first-person/second-person/third-person"
    technical_level: "beginner-friendly/moderate/technical"

  call_to_action:
    primary:
      button_text: "string (action-oriented, 2-4 words)"
      button_type: "primary/default"
      action_description: "string (what happens when clicked)"
      success_outcome: "string (what user sees after action)"

    secondary:
      link_text: "string (alternative action)"
      action_description: "string"

    tertiary:
      link_text: "string (help or documentation)"
      destination: "url or modal"

  contextual_help:
    tooltip_text: "string (if ? icon present)"
    expandable_details: "string (progressive disclosure content)"
    video_tutorial_link: "url (if applicable)"

  progressive_disclosure:
    collapsed_view: "string (minimal content)"
    expanded_view: "string (detailed explanation)"
    expansion_trigger: "string (link text for 'Learn more')"

  personalization:
    first_time_user_variant: "string (onboarding-focused message)"
    returning_user_variant: "string (assumes familiarity)"
    admin_user_variant: "string (technical details, configuration options)"

  data_quality_messaging:
    data_collecting: "string (when data is pending)"
    data_processing: "string (when data exists but not ready)"
    insufficient_data: "string (when volume too low for insights)"
    data_deprecated: "string (when data no longer collected)"

  accessibility:
    aria_label: "string (screen reader announcement)"
    role: "status/alert/region"
    focus_management: "string (where focus should go)"
```

=== SCENARIO-SPECIFIC TEMPLATES ===

**No Data Yet (First Use)**:
- Emphasize: Normal state, educational opportunity
- Tone: Encouraging, helpful
- CTA: Guide to first action

**Filtered to Zero Results**:
- Emphasize: User action caused state, easily reversible
- Tone: Neutral, informational
- CTA: Adjust filters, clear filters

**Permissions Restricted**:
- Emphasize: Who can grant access, security rationale
- Tone: Explanatory, respectful
- CTA: Request access, contact admin

**Integration Not Connected**:
- Emphasize: Value of connection, ease of setup
- Tone: Encouraging, benefit-focused
- CTA: Connect integration

**Error Loading Data**:
- Emphasize: Temporary issue, troubleshooting steps
- Tone: Apologetic, solution-oriented
- CTA: Retry, report problem

=== EXAMPLES ===

**Example 1: Analytics Dashboard - No Tracking Data Yet**
- data_context: "website analytics dashboard"
- product_name: "AnalyticsPro"
- user_role: "website owner"
- empty_state_type: "no data yet"
- root_cause: "tracking code not installed"
- user_control: "user can fix"
- is_first_time: "yes"
- impact_severity: "blocking"

Output:
```yaml
empty_state_content:
  visual_elements:
    illustration_description: "Friendly illustration of a website with a magnifying glass, suggesting discovery and insights waiting to happen"
    icon_name: "chart-line-up"
    color_scheme: "brand primary color with optimistic tone"

  text_content:
    headline: "Start tracking your website traffic"
    subheadline: "Install the tracking code to see visitor analytics, page views, and user behavior insights."
    body_text: "Takes about 5 minutes. Once installed, you'll see your first data within an hour. We'll guide you through the process step-by-step."

  emotional_tone:
    voice: "encouraging"
    perspective: "second-person"
    technical_level: "beginner-friendly"

  call_to_action:
    primary:
      button_text: "Install tracking code"
      button_type: "primary"
      action_description: "Opens step-by-step installation wizard"
      success_outcome: "Guided setup with code snippet and verification"

    secondary:
      link_text: "View installation guide"
      action_description: "Opens documentation in new tab"

    tertiary:
      link_text: "Watch 2-minute video tutorial"
      destination: "/help/videos/tracking-setup"

  contextual_help:
    tooltip_text: "The tracking code is a small JavaScript snippet that records visitor activity on your website."

  personalization:
    first_time_user_variant: "Welcome! Let's get your analytics up and running."
    returning_user_variant: "Complete setup to start seeing your website analytics."

  accessibility:
    aria_label: "No tracking data available. Install tracking code to begin collecting analytics."
    role: "status"
    focus_management: "Focus on primary CTA button"
```

**Example 2: Sales Report - Filtered to Zero Results**
- data_context: "sales transactions report"
- product_name: "SalesHub"
- user_role: "sales manager"
- empty_state_type: "filtered out"
- root_cause: "current filter combination returns no matches"
- user_control: "user can fix"
- is_first_time: "no"
- impact_severity: "informational"

Output:
```yaml
empty_state_content:
  visual_elements:
    illustration_description: "Simple icon of a filter funnel with an empty result indicator"
    icon_name: "filter-slash"
    color_scheme: "neutral gray"

  text_content:
    headline: "No transactions match your filters"
    subheadline: "Try adjusting your date range, sales rep, or product category to see results."
    body_text: ""

  emotional_tone:
    voice: "neutral"
    perspective: "second-person"
    technical_level: "moderate"

  call_to_action:
    primary:
      button_text: "Clear all filters"
      button_type: "default"
      action_description: "Removes all active filters to show complete dataset"
      success_outcome: "Full unfiltered transaction list appears"

    secondary:
      link_text: "Expand date range"
      action_description: "Opens date picker to select broader time period"

    tertiary:
      link_text: "Save this filter combination"
      destination: "filter save modal"

  data_quality_messaging:
    insufficient_data: "Your current filters are very specific. Consider broadening your criteria."

  accessibility:
    aria_label: "No results found. Current filters returned zero transactions. Clear filters to see all data."
    role: "status"
```

**Example 3: User Segmentation - Insufficient Sample Size**
- data_context: "user behavior segmentation analysis"
- product_name: "GrowthMetrics"
- user_role: "product manager"
- empty_state_type: "data loading"
- root_cause: "insufficient data volume for statistical significance"
- user_control: "time-dependent"
- is_first_time: "no"
- impact_severity: "limiting"

Output:
```yaml
empty_state_content:
  visual_elements:
    illustration_description: "Hourglass or loading chart illustration suggesting data collection in progress"
    icon_name: "clock-progress"
    color_scheme: "informational blue"

  text_content:
    headline: "Collecting more data for reliable insights"
    subheadline: "This segment needs at least 100 users for statistically significant analysis. You currently have 34 users."
    body_text: "Reliable behavioral insights require sufficient sample sizes. We'll notify you when this segment reaches the threshold, typically within 7-14 days for your traffic volume."

  emotional_tone:
    voice: "explanatory"
    perspective: "second-person"
    technical_level: "moderate"

  call_to_action:
    primary:
      button_text: "Notify me when ready"
      button_type: "primary"
      action_description: "Sets up email alert when segment reaches 100 users"
      success_outcome: "Confirmation message and email scheduled"

    secondary:
      link_text: "View all segments"
      action_description: "Returns to segment overview with available analyses"

    tertiary:
      link_text: "Why does sample size matter?"
      destination: "educational modal about statistical significance"

  contextual_help:
    tooltip_text: "Sample size ensures that patterns you see represent real user behavior, not random chance."
    expandable_details: "Statistical significance typically requires 100+ users per segment. With fewer users, you might see patterns that don't reflect broader user behavior. Learn more about our methodology."

  progressive_disclosure:
    collapsed_view: "Need 66 more users for analysis (34/100)"
    expanded_view: "Based on your current traffic, this segment grows by approximately 5 users per day. You should have enough data for reliable insights in about 13 days. We use a 95% confidence interval for all behavioral analyses."
    expansion_trigger: "Show details"

  data_quality_messaging:
    data_collecting: "Currently collecting user data for this segment. Check back in a few days."
    insufficient_data: "Sample size too small for reliable statistical analysis. Continue collecting data."

  accessibility:
    aria_label: "Insufficient data for analysis. This segment has 34 users but needs 100 for statistical significance. You can set up a notification for when the threshold is reached."
    role: "status"
```

---

**Accessibility Requirements**: Empty states must be announced to screen readers using appropriate ARIA roles (status for informational, alert for errors). Ensure illustrations have text alternatives. Maintain sufficient color contrast for all text elements. Don't rely solely on color to convey meaning - use icons and text. Focus management should direct users to primary action after state loads. Support keyboard navigation for all interactive elements.

**Psychological Principles**: Loss aversion minimized by showing opportunity rather than absence (prospect theory). Clear action paths reduce decision paralysis (paradox of choice). Educational content transforms frustration into learning (growth mindset). Progress indicators build patience for time-dependent states (goal gradient effect). Appropriate illustrations create emotional connection and reduce negative perception of empty states (affective design).

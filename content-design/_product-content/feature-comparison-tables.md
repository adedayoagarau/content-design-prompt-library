## Feature Comparison Tables Generator v1.0

**Purpose**: Help users make informed plan decisions with clear, scannable comparison tables that highlight differences, guide choices, and build confidence without overwhelming or confusing prospects.

---

**PROMPT:**

You are a product content designer at {{company_name}} creating feature comparison tables for {{product_name}}. Design tables that drive {{conversion_rate}}% conversion to {{target_plan}} while maintaining clarity for {{user_segment}} evaluating {{plan_count}} plan options.

=== COMPARISON CONTEXT ===
- Number of plans: {{plan_count}} (2-5 typical)
- Plan types: {{plan_types}} (free/starter/pro/business/enterprise)
- Price range: {{min_price}} to {{max_price}} per {{billing_period}}
- Total features: {{feature_count}}
- Displayed features: {{displayed_count}} (show most differentiating)
- Target audience: {{audience}} (individuals/teams/enterprises)
- Recommended plan: {{highlighted_plan}}

=== DESIGN STRATEGY ===
- Layout: {{layout}} (horizontal/vertical/hybrid/progressive)
- Grouping: {{grouping}} (by_category/by_importance/by_plan_tier)
- Emphasis: {{emphasis}} (recommended_plan/popular_choice/best_value)
- Detail level: {{detail}} (feature_names_only/with_descriptions/with_limits)
- Personalization: {{personalization}} (static/role_based/usage_based)

=== OUTPUT REQUIREMENTS ===

Generate effective feature comparison tables:

```yaml
feature_comparison_table:
  table_structure:
    header_row:
      plan_names:
        display: "Clear, memorable names"
        examples: ["Free", "Pro", "Business", "Enterprise"]
        avoid: ["Plan A", "Silver", "Level 2"]

      pricing_display:
        format: "${{amount}}/{{period}}"
        options:
          monthly: "$29/month"
          annual_savings: "$25/month (billed annually, save $48)"
          from_pricing: "From $10/user/month"
          custom: "Custom pricing"

      badges:
        most_popular: "⭐ Most Popular"
        best_value: "💰 Best Value"
        recommended: "✨ Recommended for {{user_type}}"
        new: "🆕 New"

      cta_buttons:
        free: "Start free"
        trial: "Try free for {{days}} days"
        paid: "Upgrade to {{plan}}"
        enterprise: "Contact sales"
        current: "Current plan"

    feature_rows:
      format_options:
        checkmark_only:
          available: "✓" or "✅"
          unavailable: "—" or "✗"
          partial: "◐" or "Limited"

        with_limits:
          numeric: "Up to {{number}} {{units}}"
          unlimited: "Unlimited"
          boolean: "Included"

        with_description:
          feature_name: "{{Feature}}"
          tooltip: "{{Brief explanation}}"
          link: "[Learn more →]"

      grouping_strategies:
        by_category:
          categories:
            - "Core Features"
            - "Collaboration"
            - "Analytics & Reporting"
            - "Integrations"
            - "Support"
            - "Security & Compliance"

        by_differentiation:
          groups:
            - "Included in all plans"
            - "Premium features"
            - "Enterprise features"

        by_user_journey:
          groups:
            - "Getting Started"
            - "Growing Your Team"
            - "Scaling Your Business"

    visual_design:
      column_widths:
        plan_name_column: "20-25% of table width"
        feature_columns: "Equal width distribution"
        mobile_responsive: "Vertical stack on small screens"

      highlighting:
        recommended_plan:
          - "Subtle background color"
          - "Slightly larger column"
          - "Border or shadow"
          - "Badge at top"

        hover_states:
          - "Highlight entire column on hover"
          - "Show additional details"
          - "Emphasize CTA button"

      spacing:
        row_height: "Comfortable touch targets (44px min)"
        padding: "Generous white space"
        separators: "Subtle lines between categories"

  content_strategies:
    feature_naming:
      user_friendly:
        technical: "API Rate Limiting"
        user_friendly: "API calls per month"

      benefit_focused:
        feature: "Version history"
        benefit: "Restore any previous version"

      specific_not_vague:
        vague: "Advanced security"
        specific: "Two-factor authentication, SSO, audit logs"

    limit_communication:
      clear_numbers:
        - "5 team members"
        - "100 GB storage"
        - "10,000 API calls/month"
        - "Up to 50 projects"

      unlimited_carefully:
        - "Unlimited projects" (truly unlimited)
        - "Unlimited storage" (with fair use policy linked)

      relative_to_plan:
        free: "{{base_amount}}"
        pro: "{{multiplier}}x more than Free"
        business: "Unlimited"

    tooltip_content:
      when_to_use:
        - "Feature needs explanation"
        - "Technical terms require clarity"
        - "Limits need context"
        - "Differences are subtle"

      tooltip_copy:
        format: |
          {{Feature_name}}

          {{One_sentence_explanation}}

          {{Limit_or_detail_if_relevant}}

        example: |
          Advanced Workflows

          Automate complex processes with conditional logic and branching.

          Business plan: Unlimited workflows
          Pro plan: Up to 10 workflows

  comparison_variations:
    simple_3_tier:
      layout: |
        |                    | Free    | Pro     | Business |
        |--------------------|---------|---------|----------|
        | Price              | $0      | $29/mo  | $99/mo   |
        | Users              | 1       | 5       | Unlimited|
        | Storage            | 5 GB    | 100 GB  | 1 TB     |
        | Support            | Email   | Priority| Dedicated|
        | [CTA]              | Sign up | Try Pro | Contact  |

      best_for:
        - "Simple products"
        - "Clear differentiation"
        - "Consumer/SMB focus"

    detailed_enterprise:
      layout: |
        | Feature Category   | Starter | Pro     | Business | Enterprise |
        |--------------------|---------|---------|----------|------------|
        | **Core Features**  |         |         |          |            |
        | Projects           | 10      | 100     | Unlimited| Unlimited  |
        | Collaborators      | 3       | 10      | Unlimited| Unlimited  |
        | Storage            | 10 GB   | 100 GB  | 1 TB     | Custom     |
        | **Advanced**       |         |         |          |            |
        | API Access         | ✗       | ✓       | ✓        | ✓          |
        | Custom Branding    | ✗       | ✗       | ✓        | ✓          |
        | SSO                | ✗       | ✗       | ✗        | ✓          |
        | **Support**        |         |         |          |            |
        | Email Support      | ✓       | ✓       | ✓        | ✓          |
        | Priority Support   | ✗       | ✓       | ✓        | ✓          |
        | Dedicated Manager  | ✗       | ✗       | ✗        | ✓          |

      best_for:
        - "Complex products"
        - "B2B/Enterprise"
        - "Many features to compare"

    progressive_disclosure:
      initial_view: "Show 5-7 key differentiating features"
      expand_option: "[Show all features +]"
      expanded_view: "Full feature list with categories"

      best_for:
        - "Many features (50+)"
        - "Avoiding overwhelming users"
        - "Mobile-first design"

    personalized_comparison:
      approach: "Show only relevant plans"
      examples:
        team_size: "For teams of {{size}}, we recommend: [Pro, Business]"
        use_case: "For {{use_case}}, compare: [Specific plans]"
        current_plan: "Your current plan vs recommended upgrade"

      best_for:
        - "Diverse user base"
        - "Many plan options"
        - "Complex decision criteria"

  mobile_responsive_design:
    approach_1_vertical_stack:
      layout: |
        [Plan 1 Card]
        ---------------
        Free
        $0/month

        ✓ Feature 1
        ✓ Feature 2
        ✗ Feature 3

        [Sign up]
        ---------------

        [Plan 2 Card]
        ---------------
        Pro ⭐ Most Popular
        $29/month

        ✓ Feature 1
        ✓ Feature 2
        ✓ Feature 3

        [Try free]
        ---------------

      pros: "Easy to scan, mobile-native"
      cons: "Harder to directly compare"

    approach_2_horizontal_scroll:
      layout: "Table scrolls horizontally, keeps plan names visible"
      pros: "Maintains comparison format"
      cons: "Non-obvious that scrolling is available"

    approach_3_plan_selector:
      layout: |
        [Select plan to view: [Dropdown: Free ▼]]

        Free Plan - $0/month

        ✓ Feature 1: {{details}}
        ✓ Feature 2: {{details}}
        ✗ Feature 3: Not available

        [Switch to compare mode]

      pros: "Focused, detail-rich"
      cons: "Loses side-by-side comparison"

  guidance_elements:
    plan_recommendations:
      algorithm_based:
        inputs:
          - team_size: "{{number}}"
          - use_case: "{{category}}"
          - budget: "{{range}}"
          - required_features: "{{list}}"

        output: "Based on your needs, we recommend {{plan}}"

      quiz_based:
        questions:
          - "How many people will use {{product}}?"
          - "What's your primary use case?"
          - "Which features are essential?"

        result: |
          {{Plan_name}} is perfect for you

          {{Why_it_matches}}

          [See {{plan}} details]

    feature_explanations:
      inline_tooltips: "Hover/tap for explanation"
      help_icons: "? icon next to complex features"
      expandable_rows: "Click row to see details"
      links_to_docs: "Learn more about {{feature}}"

    comparison_filters:
      when_many_plans: "6+ plans"
      filters:
        - user_count: "Solo / Small Team / Enterprise"
        - use_case: "Personal / Business / Developer"
        - budget: "Under $10 / $10-50 / $50+"

    social_proof:
      popular_badge: "⭐ 70% of customers choose this"
      testimonial_snippet: |
        "{{Plan}} was perfect for our team of {{size}}"
        - {{Name}}, {{Company}}
      usage_stats: "Trusted by {{number}} {{user_type}}"

  interactive_elements:
    toggle_annual_monthly:
      control: "[Monthly] / [Annual (save 20%)]"
      behavior: "Prices update throughout table"
      savings_shown: "Save ${{amount}} with annual billing"

    customize_view:
      options:
        - "Show only features I care about"
        - "Compare my current plan to others"
        - "Filter by team size"

    live_calculator:
      inputs:
        - users: "{{number_input}}"
        - storage: "{{slider}}"
        - integrations: "{{checkboxes}}"

      output:
        recommended_plan: "{{plan}}"
        monthly_cost: "${{calculated_price}}"
        reasoning: "{{why_this_plan}}"

  accessibility_features:
    semantic_html:
      - use_table_element: "<table>, <th>, <td>"
      - scope_attributes: "scope='col' and scope='row'"
      - caption: "<caption>Pricing plan comparison</caption>"

    keyboard_navigation:
      - tab_through_ctAs: "Logical tab order"
      - arrow_keys: "Navigate table cells"
      - enter_expand: "Expand collapsed sections"

    screen_readers:
      - alt_text: "Alternative text for icons"
      - aria_labels: "Clear labels for all controls"
      - table_summary: "Table structure announced"

    visual_accessibility:
      - contrast_ratio: "4.5:1 minimum for text"
      - not_color_only: "Don't rely solely on color for meaning"
      - scalable_text: "Maintains readability at 200% zoom"

  common_mistakes_to_avoid:
    overwhelming_detail:
      wrong: "50 features shown, no grouping"
      right: "7 key features visible, option to expand"

    unclear_limits:
      wrong: "Up to 5 users*" (asterisk with no explanation)
      right: "5 team members included"

    false_scarcity:
      wrong: "Only 3 spots left at this price!"
      right: "Most popular plan" (if true)

    hidden_costs:
      wrong: "From $10/month" (but actually $50 for typical use)
      right: "$10/user/month (5 user minimum)"

    vague_features:
      wrong: "Advanced features ✓"
      right: "API access, SSO, custom branding"

    poor_mobile_experience:
      wrong: "Tiny text, horizontal scrolling required"
      right: "Responsive cards or smart stacking"

  analytics_and_optimization:
    metrics_to_track:
      - conversion_by_plan: "Which plan converts best"
      - time_on_page: "Are users reading or confused"
      - scroll_depth: "Do they see all features"
      - expand_rate: "Interest in detailed features"
      - toggle_usage: "Annual vs monthly preference"

    a_b_test_ideas:
      - badge_copy: "Most popular" vs "Best value" vs none
      - feature_count: "7 features" vs "15 features" vs "expandable"
      - cta_copy: "Try free" vs "Start now" vs "Get started"
      - pricing_display: "Monthly only" vs "Annual savings" vs "both"
      - plan_names: "Free/Pro/Business" vs "Starter/Growth/Scale"
```

=== EXAMPLES ===

**Example 1: Simple 3-Tier SaaS Pricing**

```
Choose your plan

|                        | Free           | Pro ⭐          | Business       |
|------------------------|----------------|-----------------|----------------|
|                        | Perfect for    | Best for        | For growing    |
|                        | individuals    | small teams     | companies      |
|                        |                |                 |                |
| **Price**              | $0             | $29/month       | $99/month      |
|                        |                | or $25/month    | or $85/month   |
|                        |                | (billed annual) | (billed annual)|
|                        |                |                 |                |
| **Core Features**      |                |                 |                |
| Projects               | 3              | Unlimited       | Unlimited      |
| Team members           | 1              | 5               | Unlimited      |
| Storage                | 5 GB           | 100 GB          | 1 TB           |
| File versioning        | 7 days         | 30 days         | Unlimited      |
|                        |                |                 |                |
| **Advanced**           |                |                 |                |
| Custom workflows       | —              | Up to 10        | Unlimited      |
| Advanced analytics     | —              | ✓               | ✓              |
| API access             | —              | 10K calls/mo    | 100K calls/mo  |
| Custom branding        | —              | —               | ✓              |
|                        |                |                 |                |
| **Support**            |                |                 |                |
| Email support          | ✓              | ✓               | ✓              |
| Priority support       | —              | ✓               | ✓              |
| Dedicated manager      | —              | —               | ✓              |
|                        |                |                 |                |
| [Sign up free]         | [Try Pro free] | [Contact sales] |                |

[View detailed feature comparison →]

"Pro was perfect for our team of 4. We upgraded from Free after one week."
- Maria G., Design Lead
```

**Example 2: Mobile-Optimized Card View**

```
[Toggle: Monthly / Annual (Save 20%)]

-------------------
Free
$0/month

For individuals

✓ 3 projects
✓ 1 team member
✓ 5 GB storage
✓ Email support

✗ Custom workflows
✗ Advanced analytics
✗ API access

[Get started free]
-------------------

-------------------
Pro ⭐ Most Popular
$29/month
Save $48 with annual billing

For small teams

Everything in Free, plus:

✓ Unlimited projects
✓ Up to 5 team members
✓ 100 GB storage
✓ Up to 10 custom workflows
✓ Advanced analytics
✓ 10,000 API calls/month
✓ Priority support

[Try Pro free for 14 days]

"Perfect for our team of 4"
- 500+ reviews
-------------------

-------------------
Business
$99/month
Save $168 with annual billing

For growing companies

Everything in Pro, plus:

✓ Unlimited team members
✓ 1 TB storage
✓ Unlimited custom workflows
✓ 100,000 API calls/month
✓ Custom branding
✓ Dedicated account manager

[Contact sales]
-------------------

[Compare all features →]
```

**Example 3: Progressive Disclosure Table**

```
|                        | Starter   | Pro ⭐     | Enterprise  |
|------------------------|-----------|------------|-------------|
|                        | $19/month | $49/month  | Custom      |
|                        |           |            |             |
| Key Differentiators    |           |            |             |
| Team members           | 3         | 10         | Unlimited   |
| Projects               | 10        | 100        | Unlimited   |
| Advanced security      | ✗         | ✓          | ✓ + SOC2    |
| API access             | ✗         | 10K/mo     | Custom      |
| Support                | Email     | Priority   | Dedicated   |
|                        |           |            |             |
| [Get started]          | [Try free]| [Contact]  |             |

[+ Show all 47 features]

---

[Expanded view shows:]

| Feature Category       | Starter   | Pro        | Enterprise  |
|------------------------|-----------|------------|-------------|
| **Collaboration**      |           |            |             |
| Real-time editing      | ✓         | ✓          | ✓           |
| Comments               | ✓         | ✓          | ✓           |
| @mentions              | ✗         | ✓          | ✓           |
| Version comparison     | ✗         | ✓          | ✓           |
|                        |           |            |             |
| **Security**           |           |            |             |
| Two-factor auth        | ✓         | ✓          | ✓           |
| SSO                    | ✗         | ✗          | ✓           |
| Audit logs             | ✗         | ✓          | ✓           |
| Custom data retention  | ✗         | ✗         | ✓           |

[And so on...]

[− Show less]
```

---

**Accessibility Requirements**: Semantic HTML tables with proper scope attributes. Keyboard navigable. Screen reader friendly with clear row/column headers. Text alternatives for checkmarks and icons. Sufficient color contrast. Doesn't rely on color alone to convey meaning. Expandable sections keyboard accessible. Table caption describes content. Responsive without horizontal scrolling. Works at 200% zoom.

**Psychological Principles**: Anchoring (highest price first makes middle seem reasonable). Choice architecture (recommended plan guides decision). Paradox of choice (limit to 3-4 options). Loss aversion (show what's missing in lower tiers). Social proof (popular badges). Clarity reduces anxiety (clear limits and features). Default effect (highlight recommended). Price perception (annual savings emphasize value).

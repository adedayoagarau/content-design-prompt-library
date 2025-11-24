## FAQ Content Development v1.0

**Purpose**: Create comprehensive, findable FAQ content that anticipates user questions and provides clear, actionable answers that reduce support burden.

---

**PROMPT:**

You are designing FAQ content for {{product_name}}, a {{product_type}} serving {{target_audience}}. Create FAQs that anticipate common questions, provide clear answers, and guide users to solutions efficiently while reducing support tickets.

=== FAQ CONTEXT ===

**Product Information**:
- Product name: {{product_name}}
- Product category: {{product_category}}
- Target audience: {{target_audience}}
- Primary use cases: {{primary_use_cases}}
- Common pain points: {{common_pain_points}}
- Support ticket volume: {{ticket_volume_monthly}}

**Content Strategy**:
- FAQ location: {{faq_location}} (dedicated page/in-app/contextual/help center)
- Organization method: {{organization_method}} (category-based/search-first/topic-clusters)
- User technical level: {{user_technical_level}} (beginner/intermediate/advanced/mixed)
- Update frequency: {{update_frequency}}
- Integration with support: {{support_integration}}

=== USER QUESTION ANALYSIS ===

**Question Sources**:
- Support ticket themes: {{top_support_themes}}
- User feedback: {{user_feedback_patterns}}
- Product analytics: {{abandonment_points}}
- Sales questions: {{pre_purchase_questions}}
- Onboarding friction: {{onboarding_questions}}

**Question Categories**:
- Getting started: {{getting_started_topics}}
- Account management: {{account_topics}}
- Features and functionality: {{feature_topics}}
- Billing and pricing: {{billing_topics}}
- Troubleshooting: {{troubleshooting_topics}}
- Integration questions: {{integration_topics}}

=== OUTPUT REQUIREMENTS ===

```yaml
faq_content_system:
  question_formulation:
    question_writing_principles:
      - natural_language: "Write questions as users would ask them"
      - keyword_rich: "Include search terms users actually use"
      - specific: "Avoid vague questions like 'How does it work?'"
      - action_oriented: "Start with How, What, Why, Can I, When"

    question_formats:
      how_to:
        structure: "How do I [accomplish specific task]?"
        examples:
          - "How do I reset my password?"
          - "How do I export my data?"
          - "How do I invite team members?"

      capability:
        structure: "Can I [perform action]?"
        examples:
          - "Can I integrate with Slack?"
          - "Can I cancel my subscription anytime?"
          - "Can I transfer ownership of my account?"

      troubleshooting:
        structure: "Why [is problem happening]?"
        examples:
          - "Why isn't my payment going through?"
          - "Why am I not receiving email notifications?"
          - "Why is the sync not working?"

      comparison:
        structure: "What's the difference between [A] and [B]?"
        examples:
          - "What's the difference between the Pro and Enterprise plans?"
          - "What's the difference between archiving and deleting?"

  answer_structure:
    comprehensive_answers:
      components:
        - direct_answer: "Answer the question in first 1-2 sentences"
        - context: "Provide relevant background if needed"
        - steps: "Step-by-step instructions if applicable"
        - visual_aid: "Screenshot or diagram when helpful"
        - related_info: "Additional relevant details"
        - next_steps: "What to do next or related actions"
        - fallback: "What to do if answer doesn't solve problem"

      answer_template:
        opening: "Yes/No or direct answer statement"
        explanation: "2-3 sentences of context"
        instructions:
          - step: "Numbered steps if procedural"
          - format: "Clear, actionable language"
          - length: "Keep steps concise (under 15 words per step)"
        note_callout: "Important warnings or tips in highlighted box"
        related_links: "2-3 related FAQ or help articles"
        still_stuck: "Link to contact support with context pre-filled"

    answer_length_guidelines:
      simple_yes_no: "50-100 words total"
      procedural_how_to: "150-300 words with numbered steps"
      conceptual_explanation: "200-400 words with examples"
      troubleshooting: "200-500 words with multiple solutions"

  organization_patterns:
    category_based:
      structure:
        - category_name: "Clear, user-centric category names"
        - question_count: "5-12 questions per category optimal"
        - subcategories: "Use when category exceeds 15 questions"

      example_categories:
        - "Getting Started"
        - "Account & Billing"
        - "Features & Tools"
        - "Troubleshooting"
        - "Integrations"
        - "Security & Privacy"
        - "Mobile App"

    priority_ordering:
      most_asked_first:
        method: "Surface top 10 questions at top"
        metric: "Based on support ticket frequency"
        update: "Monthly review of ranking"

      journey_based:
        method: "Organize by user journey stage"
        stages:
          - "Before signing up"
          - "Getting started (Days 1-7)"
          - "Using core features (Weeks 2-4)"
          - "Advanced usage (Month 2+)"
          - "Account management (Ongoing)"

  search_optimization:
    seo_best_practices:
      title_tags: "Question becomes H2 or H3 heading"
      url_structure: "/help/faq/[category]/[question-slug]"
      meta_description: "First 150 characters of answer"
      schema_markup: "FAQPage schema.org markup"
      internal_linking: "Link to related help articles and product pages"

    search_keywords:
      primary_keyword: "Include in question and first paragraph"
      variations: "Address question phrasing variations in answer"
      long_tail: "Optimize for specific, detailed questions"

  interactive_enhancements:
    helpful_voting:
      placement: "End of each answer"
      options: "Was this helpful? Yes | No"
      follow_up_no: "What were you looking for? [text field] + [Submit]"

    dynamic_content:
      personalization: "Show role-specific FAQs based on account type"
      contextual_display: "Surface relevant FAQs on product pages"
      recently_updated_flag: "Mark FAQs updated in last 30 days"

    expandable_sections:
      format: "Question visible, answer hidden until clicked"
      benefits: "Scannable page, faster question finding"
      accessibility: "Proper ARIA labels for screen readers"

  maintenance_protocol:
    regular_updates:
      content_review: "Quarterly audit of all FAQs"
      accuracy_check: "Validate against current product state"
      metrics_analysis: "Review 'not helpful' feedback monthly"
      new_question_addition: "Add FAQ when question asked 10+ times"

    deprecation_process:
      outdated_content: "Archive, don't delete (maintain SEO)"
      redirect_strategy: "301 redirect to updated FAQ or help article"
      version_history: "Track changes for compliance if needed"
```

=== EXAMPLES ===

**Example 1: SaaS Project Management Tool**
- product_name: "TaskFlow"
- product_category: "Project management software"
- target_audience: "Small business teams and freelancers"
- top_support_themes: "Billing questions, integration setup, user permissions"
- organization_method: "Category-based with search"

Sample FAQ:
Q: "How do I add a team member to my project?"
A: "You can add team members in just a few steps:

1. Open your project and click 'Team' in the left sidebar
2. Click '+ Add Member' in the top right
3. Enter their email address and select their role (Admin, Member, or Viewer)
4. Click 'Send Invitation'

They'll receive an email invitation and be added to your project once they accept. You can add up to 10 team members on the Pro plan, or unlimited on Enterprise.

**Note**: Only Project Admins can add new team members.

Related: What's the difference between Admin, Member, and Viewer roles? | How do I remove a team member?"

**Example 2: E-commerce Platform**
- product_name: "ShopifyPlus Alternative"
- product_category: "E-commerce platform"
- target_audience: "Online store owners"
- top_support_themes: "Payment processing, shipping setup, product imports"
- organization_method: "Journey-based categories"

Sample FAQ:
Q: "Why is my payment not processing?"
A: "Payment processing issues typically have one of these causes:

**Insufficient Funds**: The customer's payment method was declined by their bank. Ask them to try another payment method or contact their bank.

**Incorrect Payment Details**: Double-check that card number, expiration date, and CVV are entered correctly.

**Geographic Restrictions**: Your payment processor may not accept cards from certain countries. Check your payment gateway settings.

**Security Flags**: Large or unusual orders may be flagged for review. Check your fraud prevention settings.

**To troubleshoot**:
1. Go to Orders > Failed Payments
2. Click on the failed transaction
3. View the specific error code
4. Match the code to our Payment Error Reference Guide

Still having issues? Contact our support team with the transaction ID for immediate help."

**Example 3: Mobile Fitness App**
- product_name: "FitTrack Pro"
- product_category: "Health and fitness mobile app"
- target_audience: "Fitness enthusiasts and beginners"
- top_support_themes: "Device sync issues, subscription management, workout tracking"
- organization_method: "Search-first with featured questions"

Sample FAQ:
Q: "Can I sync FitTrack with my Apple Watch or Fitbit?"
A: "Yes! FitTrack syncs with both Apple Watch and Fitbit, plus 15+ other fitness devices.

**Apple Watch**:
1. Open FitTrack app > Settings > Connected Devices
2. Tap 'Apple Health'
3. Toggle on the metrics you want to sync
4. Approve the connection in your Health app

**Fitbit**:
1. Settings > Connected Devices > Fitbit
2. Log in with your Fitbit credentials
3. Approve data sharing

Data syncs automatically every 30 minutes when you're connected to WiFi. You can also manually sync by pulling down on your dashboard.

**Tip**: Connecting devices counts toward your weekly activity goals and improves workout recommendations.

Related: Which fitness devices are compatible? | How do I disconnect a device?"

---

**Accessibility Requirements**: FAQs must be WCAG 3.0 Level AA compliant. Use semantic HTML with proper heading hierarchy (H1 for page, H2 for categories, H3 for questions). Implement ARIA landmarks for screen readers. Ensure expandable/collapsible sections are keyboard accessible. Provide text alternatives for any diagrams or screenshots. Maintain 4.5:1 contrast ratio for all text. Support browser text resizing up to 200%.

**Psychological Principles**: Information scent (users scan questions to find their match). Progressive disclosure (show questions, hide answers until needed). Recognition over recall (seeing questions triggers "that's my problem" response). Reduced cognitive load (clear categories help mental models). Completion bias (providing next steps encourages resolution). Social proof ("Most asked questions" validates user's question is normal).

## Community Guidelines Generator v1.0

**Purpose**: Establish clear, fair community guidelines that foster positive interactions, protect members, set behavioral expectations, and create inclusive spaces while maintaining authentic community culture and enabling effective moderation.

---

**PROMPT:**

You are a product content designer at {{company_name}} creating community guidelines for {{community_type}} with {{member_count}} members. Write rules that maintain {{community_values}} while enabling {{moderation_approach}} and supporting {{community_goals}}.

=== COMMUNITY CONTEXT ===
- Community type: {{type}} (forum/slack/discord/social/user_group)
- Size: {{members}} members
- Purpose: {{purpose}} (support/networking/education/product_discussion)
- Moderation: {{moderation}} (volunteer/professional/ai_assisted/self_moderated)
- Tone: {{tone}} (formal/casual/professional/friendly)
- Enforcement: {{enforcement}} (warnings/bans/timed_outs/community_driven)

=== GUIDELINES STRATEGY ===
- Primary values: {{values}} (respect/inclusivity/helpfulness/authenticity/safety)
- Prohibited behaviors: {{prohibited}} (spam/harassment/hate_speech/self_promotion)
- Consequences: {{consequences}} (warning_system/immediate_action/escalation)
- Appeal process: {{appeals}} (yes/no/conditional)
- Language: {{language}} (prescriptive/principle_based/examples_heavy)

=== OUTPUT REQUIREMENTS ===

Generate comprehensive community guidelines:

```yaml
community_guidelines:
  introduction:
    purpose_statement:
      format: |
        Welcome to {{community_name}}!

        These guidelines help us maintain a {{positive_adjective}} community where {{members}} can {{primary_purpose}}.

        We're all here to {{shared_goal}}. Let's make it great together.

    values_declaration:
      format: |
        **Our Values**

        • {{Value_1}}: {{What_it_means_in_practice}}
        • {{Value_2}}: {{What_it_means_in_practice}}
        • {{Value_3}}: {{What_it_means_in_practice}}

    scope:
      format: |
        **Where These Apply**

        These guidelines apply to:
        • {{Channel_or_space_1}}
        • {{Channel_or_space_2}}
        • {{Direct_messages_if_applicable}}
        • {{Events_and_meetups}}

  core_principles:
    respect_and_civility:
      principle: "Treat everyone with respect, even in disagreement"

      do:
        - "Assume good intent"
        - "Disagree ideas, not people"
        - "Use respectful language"
        - "Accept that people have different experiences"

      dont:
        - "Personal attacks or insults"
        - "Dismissing others' experiences"
        - "Hostile or aggressive tone"
        - "Public call-outs (use DMs or reports)"

      examples:
        good: |
          "I see your point, but here's another perspective..."
          "Can you help me understand your reasoning?"

        bad: |
          "That's the dumbest thing I've ever heard"
          "Anyone who thinks that is an idiot"

    inclusivity_and_belonging:
      principle: "Create space where everyone feels welcome"

      do:
        - "Use inclusive language"
        - "Welcome newcomers warmly"
        - "Make space for diverse perspectives"
        - "Call out exclusionary behavior kindly"

      dont:
        - "Gatekeeping or 'not a real X' statements"
        - "Assumptions about people's backgrounds"
        - "Inside jokes that exclude newcomers"
        - "Discrimination based on identity"

    helpfulness_and_support:
      principle: "We're here to help each other succeed"

      do:
        - "Answer questions thoughtfully"
        - "Share knowledge generously"
        - "Point people to resources"
        - "Celebrate others' wins"

      dont:
        - "'Just Google it' or similar dismissals"
        - "Gatekeeping information"
        - "Making people feel stupid for asking"
        - "Responding condescendingly"

  prohibited_behaviors:
    harassment:
      definition: "Unwelcome conduct that creates hostile environment"

      includes:
        - "Repeated unwanted contact"
        - "Sexual harassment or advances"
        - "Intimidation or threats"
        - "Doxxing or sharing private info"

      consequences: "{{immediate_removal_and_ban}}"

    hate_speech:
      definition: "Content attacking people based on protected characteristics"

      includes:
        - "Slurs or derogatory terms"
        - "Discriminatory statements"
        - "Dehumanizing language"
        - "Hate symbols or imagery"

      consequences: "{{immediate_removal_and_ban}}"

      protected_characteristics:
        - race_and_ethnicity
        - religion
        - gender_and_gender_identity
        - sexual_orientation
        - disability
        - age
        - national_origin

    spam_and_self_promotion:
      definition: "Unsolicited promotion or irrelevant content"

      allowed:
        - "Sharing relevant resources when asked"
        - "Mentioning your work in introduction"
        - "Designated self-promotion channels"

      not_allowed:
        - "Unsolicited DMs with promotions"
        - "Repeatedly posting same link"
        - "Off-topic product pitches"
        - "Affiliate links without disclosure"

      consequences: "{{warning_then_removal}}"

    misinformation:
      definition: "Deliberately false or misleading information"

      includes:
        - "Health misinformation"
        - "False technical claims"
        - "Conspiracy theories"
        - "Impersonation"

      response: "{{content_removed_with_correction}}"

    inappropriate_content:
      definition: "Content not suitable for professional community"

      includes:
        - "Graphic violence or gore"
        - "Sexual or pornographic content"
        - "Illegal activities"
        - "Excessive profanity"

      consequences: "{{removal_and_warning}}"

  specific_rules:
    discussions:
      format: |
        **Discussion Guidelines**

        ✓ Stay on topic in specific channels
        ✓ Search before posting duplicate questions
        ✓ Use threads to keep conversations organized
        ✓ Mark solutions when questions are answered

        ✗ No political or religious debates
        ✗ No heated arguments (take to DMs)
        ✗ No hijacking others' threads

    self_promotion:
      format: |
        **Sharing Your Work**

        ✓ Share in #self-promotion channel
        ✓ Contribute before promoting (10:1 ratio)
        ✓ Disclose affiliations and relationships
        ✓ Be helpful first, promotional second

        ✗ No cold DMs with pitches
        ✗ No spamming multiple channels
        ✗ No hiding affiliate links

    help_and_support:
      format: |
        **Getting Help**

        ✓ Search existing threads first
        ✓ Provide context and details
        ✓ Share what you've tried
        ✓ Thank helpers and mark solutions

        ✗ No "urgent" or "please help" without details
        ✗ Don't DM people unsolicited for help
        ✗ Don't ask same question in multiple channels

    privacy_and_confidentiality:
      format: |
        **Respecting Privacy**

        ✓ Keep conversations confidential
        ✓ Ask before sharing others' content
        ✓ Respect NDA and confidential info
        ✓ Use anonymized examples

        ✗ No screenshots of private DMs
        ✗ No sharing others' contact info
        ✗ No discussing confidential work projects

  enforcement:
    violation_response:
      level_1_minor:
        violations:
          - "First-time spam"
          - "Unintentional rudeness"
          - "Off-topic posts"

        response: |
          **Friendly reminder** with link to guidelines
          Content may be moved or removed
          No lasting consequences

      level_2_moderate:
        violations:
          - "Repeated minor violations"
          - "Argumentative behavior"
          - "Promotional spam after warning"

        response: |
          **Official warning** from moderators
          Temporary mute (24-48 hours)
          Strike on account

      level_3_serious:
        violations:
          - "Harassment"
          - "Hate speech"
          - "Deliberate rule violations"

        response: |
          **Immediate removal** from community
          **Permanent ban** in serious cases
          No appeal for hate speech or harassment

    moderation_process:
      reporting:
        how: "{{Report button or @moderators}}"
        what_happens: |
          1. Report received
          2. Moderators review (within 24 hours)
          3. Action taken if warranted
          4. Reporter notified of outcome

        confidentiality: "Reports are confidential"

      appeals:
        eligible: "Warnings and temporary bans"
        not_eligible: "Hate speech, harassment, safety issues"

        process: |
          1. Email {{appeals_address}} within 7 days
          2. Explain your perspective
          3. Moderators review collectively
          4. Decision within 3 business days
          5. Decision is final

    moderator_expectations:
      responsibilities:
        - "Enforce guidelines fairly"
        - "Respond to reports promptly"
        - "Model community behavior"
        - "Communicate clearly"

      authority:
        - "Remove content"
        - "Warn, mute, or ban members"
        - "Make judgment calls"
        - "Escalate to admins"

  positive_behaviors:
    encourage:
      format: |
        **We Love Seeing**

        • Welcoming newcomers warmly
        • Sharing knowledge and resources
        • Asking thoughtful questions
        • Celebrating others' wins
        • Offering help proactively
        • Giving constructive feedback kindly
        • Admitting mistakes and learning

    recognize:
      format: |
        **Community Champions**

        We recognize members who:
        • Answer questions regularly
        • Welcome and mentor newcomers
        • Create valuable content
        • Make community better

        {{Recognition_program_details}}

  special_situations:
    controversial_topics:
      guidance: |
        **Discussing Sensitive Topics**

        Some topics are inherently sensitive. If discussing:

        • Lead with curiosity, not judgment
        • Acknowledge multiple perspectives exist
        • Focus on learning, not winning
        • Step back if getting heated

        If discussion becomes unproductive, moderators may close it.

    crisis_response:
      guidance: |
        **During Community Crises**

        If significant issue affects community:

        • Moderators will create official thread
        • Keep discussion in that thread
        • Be patient as we gather information
        • Focus on support, not speculation

    conflicts:
      guidance: |
        **Handling Conflicts**

        If you have conflict with another member:

        1. Try resolving directly via DM
        2. Take a break if emotions are high
        3. Contact moderators if it continues
        4. Don't create public drama

  updates_and_changes:
    version_control:
      format: |
        **Guidelines Version:** {{version}}
        **Last updated:** {{date}}

        **Changelog:**
        • {{Change_1}} ({{date}})
        • {{Change_2}} ({{date}})

    feedback:
      format: |
        **Improving Our Guidelines**

        These are living documents. Have suggestions?

        • {{Feedback_channel_or_email}}
        • Quarterly community feedback sessions
        • Annual guidelines review

  acknowledgment:
    new_member_acceptance:
      format: |
        **Welcome to {{community}}!**

        By joining, you agree to our community guidelines.

        [I agree] [Read guidelines first]

    periodic_reminder:
      format: |
        📋 **Guidelines Reminder**

        New here? Read our community guidelines: {{link}}

        Everyone: Let's keep {{community}} welcoming and helpful!

  writing_principles:
    clarity:
      - "Use plain language"
      - "Be specific with examples"
      - "Avoid legal jargon"
      - "Short paragraphs"

    tone:
      - "Welcoming, not threatening"
      - "Explanatory, not just rules"
      - "Positive framing when possible"
      - "Firm but friendly"

    organization:
      - "Most important rules first"
      - "Logical grouping"
      - "Scannable with headings"
      - "Examples for clarity"
```

=== EXAMPLES ===

**Example 1: Tech Community Forum Guidelines**

```
TaskFlow Community Guidelines

Welcome! This community exists to help you get more from TaskFlow and connect with other users.

OUR VALUES

• Helpfulness: We're here to help each other succeed
• Respect: Disagree ideas, never people
• Inclusivity: Everyone belongs here
• Learning: Questions are welcome, no matter the level

COMMUNITY RULES

1. Be Kind and Respectful

Treat everyone as you'd want to be treated.

✓ Do: "I see your point. Here's another approach..."
✗ Don't: "That's stupid. Here's the right way..."

2. Help Generously

Share knowledge. We were all beginners once.

✓ Do: Answer questions thoroughly with examples
✗ Don't: "Just Google it" or "Read the docs"

3. Stay On Topic

Keep discussions relevant to TaskFlow and project management.

✓ Do: Ask about features, workflows, integrations
✗ Don't: Political debates, religious discussions, off-topic chat

4. No Spam or Self-Promotion

Contribute first, promote sparingly.

✓ Do: Share helpful resources when relevant
✗ Don't: Cold DMs, repeated link drops, hidden affiliates

5. Search First, Ask Second

Many questions are already answered.

✓ Do: Search existing threads before posting
✗ Don't: Post duplicate questions

GETTING HELP

1. Search previous discussions
2. Post in appropriate channel
3. Provide context: what you're trying to do, what you tried, what happened
4. Thank helpers and mark solutions

CONSEQUENCES

Minor issues: Friendly reminder
Repeated issues: Warning + temporary mute
Serious issues: Immediate removal

No tolerance for:
• Harassment or hate speech
• Spam after warning
• Malicious behavior

MODERATORS

Our volunteer moderators keep this community welcoming. They may:
• Move posts to appropriate channels
• Edit or remove rule-breaking content
• Warn, mute, or ban members

Questions? Contact @moderators

Last updated: March 2024 • v2.1
[Suggest improvements]
```

**Example 2: Professional Slack Community**

```
Welcome to Product Managers HQ! 🎉

We're 5,000+ PMs helping each other grow. These guidelines keep our community valuable for everyone.

━━━━━━━━━━━━━━━━━━━━

CORE PRINCIPLES

💡 Help First
Share knowledge generously. We all benefit when we lift each other up.

🤝 Respect Always
Be kind, even in disagreement. Attack ideas, never people.

🌍 Include Everyone
All backgrounds, experiences, and levels are welcome here.

━━━━━━━━━━━━━━━━━━━━

CHANNEL GUIDE

#introductions → Introduce yourself!
#job-opportunities → Hiring or looking
#feedback → Get eyes on your work
#wins → Celebrate successes
#help → Ask questions

━━━━━━━━━━━━━━━━━━━━

DO'S

✓ Search before asking
✓ Use threads for discussions
✓ Welcome newcomers
✓ Share resources freely
✓ Give credit when sharing others' work
✓ Be patient with questions

DON'TS

✗ No cold DMs unless invited
✗ No unsolicited recruiting (use #job-opportunities)
✗ No "urgent" without context
✗ No gatekeeping ("You're not a real PM if...")
✗ No heated arguments (DM or drop it)

━━━━━━━━━━━━━━━━━━━━

SELF-PROMOTION POLICY

We encourage sharing your work!

✓ Share in #feedback or #share-your-work
✓ Contribute to discussions regularly (not just promoting)
✓ Disclose if you're selling something
✓ Keep it relevant to PMs

✗ No affiliate links without disclosure
✗ No spam across multiple channels
✗ No cold DMs pitching services

Ratio: Help 10 times for every 1 self-promotion

━━━━━━━━━━━━━━━━━━━━

PRIVACY

What happens in PMHQ stays in PMHQ.

• Don't screenshot and share publicly
• Don't share confidential work info
• Ask before sharing someone's contact info
• Use company names only with permission

━━━━━━━━━━━━━━━━━━━━

ENFORCEMENT

Warning → Mute (24h) → Removal

No warnings for:
• Harassment
• Hate speech
• Spam after one warning

Report issues: React with ⚠️ or DM @moderators

━━━━━━━━━━━━━━━━━━━━

Questions about guidelines?
#community-feedback or DM @moderators

Thanks for making PMHQ awesome! 🚀

v3.0 • Updated March 2024
```

---

**Accessibility Requirements**: Plain language. Clear structure with headings. Scannable format. Examples for clarity. Easy to find (pinned/linked). Available in multiple formats. Visual hierarchy. Simple sentences. Translations if global community.

**Psychological Principles**: Social norms (what's expected). Reciprocity (help others). Authority (moderation clarity). Consistency (fair enforcement). Liking (welcoming tone). Commitment (agreement on joining). Clarity reduces anxiety. Positive framing encourages good behavior. Examples make abstract concrete. Consequences create accountability.

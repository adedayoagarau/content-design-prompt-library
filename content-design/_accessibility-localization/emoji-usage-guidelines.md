## Emoji Usage Guidelines Framework v1.0

**Purpose**: Design appropriate emoji usage in user interfaces and content that enhances communication without creating accessibility barriers, cultural misunderstandings, or unprofessional appearance across global audiences.

---

**PROMPT:**

You are an emoji content specialist designing {{content_type}} for {{target_audience}} with {{brand_voice}} considering {{accessibility_requirements}}.

=== CONTENT CONTEXT ===
Content type: {{content_type}} (UI/marketing/support/notifications/social)
Brand voice: {{brand_voice}} (professional/friendly/playful/serious)
Target audience: {{target_audience}}
Platform: {{platform}} (web/iOS/Android/cross-platform)
Tone: {{tone}}

=== EMOJI REQUIREMENTS ===
Emoji appropriateness: {{emoji_appropriateness}} (encouraged/selective/discouraged/never)
Accessibility priority: {{accessibility_priority}}
Cultural sensitivity: {{cultural_sensitivity}}
Platform consistency: {{platform_consistency}}
Professional context: {{professional_context}}

=== TECHNICAL CONSTRAINTS ===
Unicode support: {{unicode_support}}
Fallback handling: {{fallback_handling}}
Screen reader testing: {{screen_reader_testing}}
Display consistency: {{display_consistency}}
Character limits: {{character_limits}}

=== OUTPUT REQUIREMENTS ===

Generate emoji usage guidelines:

```yaml
emoji_basics:
  definition: "Pictographic Unicode characters representing emotions, objects, concepts"

  benefits:
    - "Visual interest and personality"
    - "Convey emotion and tone"
    - "Draw attention to important info"
    - "Universal recognition (often)"
    - "Break up text visually"

  risks:
    - "Accessibility barriers for screen readers"
    - "Cultural misinterpretations"
    - "Unprofessional appearance"
    - "Platform rendering differences"
    - "Overuse reduces clarity"

  statistics:
    unicode_version: "15.1 (as of 2023)"
    total_emojis: "3,600+ emojis"
    common_usage: "~100 emojis account for 90% of usage"

when_to_use_emojis:
  appropriate_contexts:
    casual_communication:
      - "Chat messages, team collaboration tools"
      - "Informal notifications"
      - "Social media posts"
      - "Friendly email newsletters"

    emotion_and_tone:
      - "Celebrate success: 🎉"
      - "Show empathy: ❤️"
      - "Indicate urgency: ⚠️"
      - "Positive feedback: ✅👍"

    visual_wayfinding:
      - "Icons in navigation: 🏠 Home, 🔍 Search"
      - "Category markers: 📚 Books, 🎵 Music"
      - "Status indicators: ✅ Complete, ❌ Error"

    engagement_and_personality:
      - "Make content more approachable"
      - "Inject brand personality"
      - "Increase message visibility"

  inappropriate_contexts:
    professional_critical:
      - "Legal documents"
      - "Medical instructions"
      - "Financial transactions"
      - "Error messages with serious consequences"
      - "Security warnings"

    accessibility_first:
      - "Essential navigation (provide text alternative)"
      - "Critical information conveyance"
      - "Form labels (never emoji alone)"

    formal_communication:
      - "Business proposals"
      - "Official announcements"
      - "Academic writing"
      - "Government communications"

accessibility_guidelines:
  screen_reader_considerations:
    problem: "Screen readers announce emoji descriptions"
    examples:
      - "🎉 → 'party popper'"
      - "❤️ → 'red heart'"
      - "👍 → 'thumbs up'"
      - "😊 → 'smiling face with smiling eyes'"

    issues:
      verbose: "Multiple emojis create long announcements"
      interrupts_flow: "Breaks natural reading rhythm"
      unclear_intent: "User may not understand why emoji is there"

  best_practices:
    redundancy_principle:
      rule: "Emoji should supplement text, never replace it"
      good: "✅ Task complete"
      bad: "✅" (emoji alone, unclear meaning)

    decorative_vs_meaningful:
      decorative:
        use: "aria-hidden='true' or as CSS background"
        example: "Celebration 🎉 (emoji adds flair, text has meaning)"

      meaningful:
        use: "Include in semantic content"
        alt_text: "Not standard for emoji, ensure text context"

    placement:
      after_text: "Success! ✅ (easier to read)"
      not_before: "✅ Success (screen reader announces emoji first)"

    limit_quantity:
      rule: "Maximum 1-2 emojis per message/line"
      reason: "Reduces screen reader verbosity"

  aria_label_approach:
    when_emoji_critical:
      html: "<span aria-label='Success'>✅</span>"
      effect: "Screen reader says 'Success' instead of 'white heavy check mark'"

    when_emoji_decorative:
      html: "<span aria-hidden='true'>🎉</span> Celebration!"
      effect: "Screen reader skips emoji, reads 'Celebration!'"

platform_consistency:
  rendering_differences:
    problem: "Same emoji looks different on iOS, Android, Windows, web"

    examples:
      gun_emoji:
        ios_15_plus: "🔫 Water pistol (toy)"
        older_android: "🔫 Real handgun"
        meaning_shift: "Apple changed to toy gun, others followed"

      smile_emoji:
        unicode: "😊 Smiling face with smiling eyes"
        ios: "Genuine warm smile"
        android: "Slightly different expression"
        windows: "Different style entirely"

  emoji_variations:
    skin_tone_modifiers:
      available: "👍 + skin tone = 👍🏻👍🏼👍🏽👍🏾👍🏿"
      recommendation: "Use default (yellow) for inclusivity unless specific reason"

    gender_variations:
      available: "👨 👩 🧑 (man, woman, person)"
      recommendation: "Use gender-neutral when possible: 🧑‍💻 (technologist)"

  safe_emoji_set:
    universally_rendered:
      - "✅ ❌ ⚠️ (check, X, warning)"
      - "❤️ 💙 💚 (hearts)"
      - "⭐ (star)"
      - "🎉 (celebration)"
      - "📧 📞 🏠 (email, phone, home)"

    newer_emoji_caution:
      issue: "May not display on older devices"
      fallback: "Shows as ▯ (empty box)"
      recommendation: "Test on target platforms"

cultural_considerations:
  meaning_variations:
    thumbs_up:
      emoji: "👍"
      western: "Approval, good job, okay"
      middle_east_parts: "Offensive gesture"
      recommendation: "Use with caution in international contexts"

    ok_hand:
      emoji: "👌"
      traditional: "Okay, perfect, good"
      modern_concern: "Appropriated by hate groups in some contexts"
      recommendation: "Avoid or use carefully with context"

    folded_hands:
      emoji: "🙏"
      intended: "Prayer, please, thank you (namaste)"
      often_interpreted_as: "High five, praying hands"
      cultural_context: "Different meanings in Western vs Asian cultures"

    eggplant_peach:
      emoji: "🍆🍑"
      literal: "Vegetable and fruit"
      common_usage: "Sexual innuendo"
      recommendation: "Avoid in professional contexts"

  country_specific:
    japan:
      popular: "🙇 (bowing), 🎌 (flags)"
      meaning: "Respect, formality important"

    western:
      popular: "😂 (tears of joy), ❤️ (heart)"
      casual: "More casual emoji use common"

  religious_sensitivity:
    religious_symbols: "Use with extreme caution"
    examples: "🕉️ ☪️ ✝️ ✡️ ☸️"
    recommendation: "Only in appropriate religious context, never decoratively"

brand_voice_and_tone:
  professional_brands:
    use_sparingly: "1 emoji per message maximum"
    stick_to_safe: "✅ ⚠️ 📧 ⭐"
    avoid: "Face emojis, playful animals, trending emojis"

    example:
      good: "Meeting confirmed ✅"
      avoid: "Meeting confirmed 🎉🎊🥳"

  friendly_brands:
    moderate_use: "2-3 emojis when appropriate"
    express_personality: "Match brand voice"
    consistent_style: "Same emojis for same meanings"

    example:
      good: "Welcome! 👋 We're excited to have you here 🎉"
      avoid: "😀😃😄😁😆 (emoji overload)"

  playful_brands:
    liberal_use: "Multiple emojis acceptable"
    creative_combinations: "Tell visual stories"
    stay_on_brand: "Match overall personality"

    example:
      good: "New feature alert! 🚀 Build better workflows ⚡ Save time ⏰ Ship faster 🎯"

emoji_in_specific_contexts:
  notifications:
    push_notifications:
      character_limit: "Very limited space"
      emoji_benefit: "Draws attention in notification list"
      recommendation: "1 emoji at start or end"

      examples:
        - "🎉 Sarah liked your post"
        - "⚠️ Your subscription expires tomorrow"
        - "✅ Task completed: Review design"

    in_app_alerts:
      success: "✅ Changes saved"
      error: "❌ Unable to save"
      warning: "⚠️ Unsaved changes"
      info: "ℹ️ New version available"

      consistency: "Same emoji for same message type always"

  buttons_and_ctas:
    not_recommended: "Don't use emoji as sole button label"

    acceptable_pattern:
      icon_plus_text: "Download ⬇️"
      text_with_emoji: "Get Started 🚀"

    avoid:
      emoji_only: "🛒 (cart button with no text)"
      problem: "Unclear meaning, accessibility issue"

  form_labels_and_fields:
    never_emoji_only: "Always include text label"

    decorative_acceptable:
      example: "📧 Email address"
      screen_reader: "Announce as 'Email address' (hide emoji with aria-hidden)"

    validation_messages:
      error: "❌ Email address is required"
      success: "✅ Email confirmed"
      supplemental: "Emoji adds visual clarity"

  marketing_content:
    subject_lines:
      benefit: "Increases open rates (sometimes)"
      risk: "May look spammy, some email clients strip emojis"

      examples:
        - "🎉 Big Sale – 50% Off Everything"
        - "New Feature: 🚀 Faster Workflows"

      testing: "A/B test emoji vs no emoji"

    social_media:
      platform_appropriate:
        instagram: "High emoji usage normal"
        twitter: "Moderate, depends on brand"
        linkedin: "Conservative, professional emoji only"
        facebook: "Moderate, varies by audience"

  documentation_and_help:
    generally_avoid: "Help documentation should be clear, text-based"

    acceptable_use:
      visual_markers: "✅ Tip: Use this feature to..."
      callout_boxes: "⚠️ Warning: This action cannot be undone"

    avoid:
      explanatory_text: "Don't use emoji to explain concepts"
      steps: "Don't replace numbered steps with emojis"

technical_implementation:
  html_encoding:
    native: "🎉 (paste emoji directly)"
    html_entity: "&#127881; (decimal)"
    unicode: "\\u{1F389} (hex)"

    recommendation: "Use native emoji in HTML5 with UTF-8 encoding"

  css_content:
    decorative_emoji:
      css: ".success::before { content: '✅'; }"
      benefit: "Separates content from presentation"
      accessibility: "Doesn't appear in screen reader"

  javascript:
    string_handling:
      issue: "Some emojis are 2+ code units"
      length: "'👍'.length === 2 (not 1)"
      solution: "Use spread operator: [...'👍'].length === 1"

    validation:
      regex: "Check for emoji presence if needed"
      library: "Use emoji-regex package for accurate detection"

  database_storage:
    utf8mb4: "Required for emoji storage in MySQL"
    postgres: "UTF-8 supports emoji by default"
    consideration: "Older systems may need upgrade"

emoji_alternatives:
  when_accessibility_critical:
    icons:
      use: "SVG icons with proper alt text"
      benefit: "Consistent rendering, accessible"

    text_labels:
      use: "Clear text like 'Success', 'Error', 'Warning'"
      benefit: "Unambiguous, universally accessible"

    combinations:
      use: "Icon + text or emoji + text"
      benefit: "Visual interest + clarity"

content_guidelines:
  dos:
    - "Use emoji to support text, not replace it"
    - "Be consistent (same emoji for same meaning)"
    - "Test on multiple platforms"
    - "Consider cultural context"
    - "Limit to 1-2 per message for readability"
    - "Make emoji decorative (aria-hidden) when possible"

  donts:
    - "Don't use emoji for critical information alone"
    - "Don't overuse (reduces impact)"
    - "Don't assume universal understanding"
    - "Don't use offensive or controversial emoji"
    - "Don't use in legal, medical, financial critical content"
    - "Don't use as form labels without text"

testing_checklist:
  visual_testing:
    - "Test on iOS, Android, Windows, Mac"
    - "Check in dark mode and light mode"
    - "Verify emoji displays correctly"
    - "Check for unintended meanings"

  accessibility_testing:
    - "Test with VoiceOver (iOS)"
    - "Test with TalkBack (Android)"
    - "Test with NVDA/JAWS (Windows)"
    - "Listen to full screen reader announcement"
    - "Verify message makes sense without emoji"

  cultural_review:
    - "Review with native speakers of target languages"
    - "Check for unintended cultural meanings"
    - "Verify appropriateness for target markets"

  brand_consistency:
    - "Aligns with brand voice and tone"
    - "Consistent with other brand communications"
    - "Appropriate for context and audience"
```

=== EXAMPLES ===

**Example 1: SaaS Product Notifications**
- content_type: "in-app notifications"
- brand_voice: "friendly professional"
- target_audience: "business users"
- accessibility_priority: "high"

**Notification Examples**:
```yaml
success_notifications:
  - message: "✅ Project created successfully"
    accessibility: "<span aria-hidden='true'>✅</span> Project created successfully"
    rationale: "Checkmark adds visual confirmation, hidden from screen reader"

  - message: "Changes saved"
    no_emoji: "Clear without emoji, no accessibility concern"

  - message: "🎉 You've completed all tasks!"
    accessibility: "<span aria-hidden='true'>🎉</span> You've completed all tasks!"
    rationale: "Celebratory emoji adds personality for milestone"

error_notifications:
  - message: "❌ Unable to save changes"
    accessibility: "<span aria-hidden='true'>❌</span> Unable to save changes"
    rationale: "X mark reinforces error visually"

  - message: "⚠️ Your session will expire in 5 minutes"
    accessibility: "<span aria-hidden='true'>⚠️</span> Your session will expire in 5 minutes"
    rationale: "Warning triangle draws attention to time-sensitive info"

info_notifications:
  - message: "New version available. Update now?"
    no_emoji: "Info icon (SVG) used instead, better accessibility"
    implementation: "<svg aria-label='Information'>...</svg> New version available"
```

**Example 2: Email Marketing Newsletter**
- content_type: "email newsletter"
- brand_voice: "friendly, approachable"
- target_audience: "general consumers"
- emoji_usage: "moderate"

**Email Content**:
```yaml
subject_line:
  version_a: "🎉 Big Announcement: New Features Inside!"
  version_b: "Big Announcement: New Features Inside!"
  note: "A/B test to measure impact"

body_content:
  greeting: "Hi Sarah! 👋"
  screen_reader: "Hi Sarah! (wave emoji decorative)"

  sections:
    - heading: "What's New 🚀"
      content: "We've been working hard on these improvements..."
      emoji_usage: "One emoji per section heading for visual interest"

    - heading: "Quick Tips ⭐"
      content: "Get the most out of your account with these tips..."

    - cta: "Get Started →"
      emoji_alternative: "Arrow symbol, not emoji, more professional"

  footer: "Questions? We're here to help! 💙"
  tone: "Warm closing with heart emoji"
```

**Example 3: Mobile App Status Messages**
- content_type: "mobile app UI"
- platform: "iOS and Android"
- brand_voice: "playful"
- emoji_usage: "encouraged"

**Status Messages**:
```yaml
empty_states:
  - context: "No messages yet"
    message: "Your inbox is empty 📬"
    visual: "Mailbox emoji adds friendliness to empty state"
    alternative: "Image illustration more robust than emoji"

  - context: "No photos uploaded"
    message: "Add your first photo! 📸"
    visual: "Camera emoji suggests action"

success_states:
  - context: "Payment processed"
    message: "✅ Payment successful!"
    note: "Checkmark universally understood"

  - context: "Profile updated"
    message: "Looking good! ✨ Profile updated"
    note: "Sparkles add personality"

loading_states:
  - context: "Processing payment"
    message: "Processing... ⏳"
    accessibility: "Prefer animated loading spinner over emoji"
    reason: "Better UX and accessibility"

error_recovery:
  - context: "Network error"
    message: "📡 Connection lost. Tap to retry."
    note: "Antenna emoji visualizes network issue"
```

**Example 4: Professional Documentation - Minimal Emoji**
- content_type: "help documentation"
- brand_voice: "professional, clear"
- target_audience: "enterprise users"
- emoji_usage: "minimal, purposeful"

**Documentation Style**:
```yaml
section_markers:
  tip: "💡 Tip: Use keyboard shortcuts to save time"
  warning: "⚠️ Warning: This action cannot be undone"
  important: "⚡ Important: Enable two-factor authentication"

  rationale: "Visual markers help scanning, but text is primary"
  accessibility: "aria-hidden on emoji, meaningful text"

body_text:
  no_emoji: "Step 1: Navigate to Settings\nStep 2: Click Security"
  rationale: "Clear instructional text doesn't need emoji"

what_to_avoid:
  - decorative_emoji: "Don't add emoji for personality in help docs"
  - face_emoji: "Avoid 😊 😢 etc. - keep professional"
  - multiple_emoji: "Never use 🎉✨🚀 in enterprise docs"

acceptable_minimal_use:
  - "✅ Completed step markers in tutorials"
  - "⚠️ Warnings about destructive actions"
  - "💡 Helpful tips and best practices"
  - "📊 Links to data/analytics sections (navigation)"
```

---

**Accessibility Requirements**: Emoji usage must not create barriers for screen reader users, users with cognitive disabilities, or users on platforms with poor emoji support. Follow WCAG 2.1 Level AA guidelines. Use `aria-hidden="true"` for decorative emoji. Always provide text alternatives for meaningful emoji. Never use emoji as sole conveyers of critical information. Test with screen readers (VoiceOver, TalkBack, JAWS, NVDA) to ensure announcements are natural. Consider users who may not understand emoji meanings or cultural contexts. Provide fallbacks for platforms that don't support emoji.

**Psychological Principles**: Visual elements draw attention (attention theory). Emotional cues influence perception (affect heuristic). Familiar symbols reduce processing time (processing fluency). Overuse creates fatigue (diminishing returns). Cultural context shapes interpretation (schema theory). Consistency builds trust (consistency principle). Personality in communication increases engagement (social presence theory).

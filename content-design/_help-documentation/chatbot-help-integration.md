## Chatbot Help Integration v1.0

**Purpose**: Design conversational help experiences through chatbots that provide immediate assistance, guide users to resources, and escalate to human support when needed while maintaining natural, helpful interactions.

---

**PROMPT:**

You are designing chatbot help integration for {{product_name}}, a {{product_type}} serving {{user_segment}}. Create conversational AI experiences that answer {{common_questions}}, guide users through {{common_tasks}}, and seamlessly escalate to {{escalation_options}} while maintaining {{brand_voice}} and providing accurate, contextual assistance.

=== CHATBOT CONTEXT ===

**Product Information**:
- Product name: {{product_name}}
- Product type: {{product_type}}
- User segment: {{user_segment}}
- Brand voice: {{brand_voice}} (professional/friendly/casual/technical)
- Support hours: {{support_hours}}
- Average response time: {{response_time}}

**Chatbot Capabilities**:
- Bot type: {{bot_type}} (rule-based/AI-powered/hybrid)
- Knowledge base: {{kb_integration}}
- Common questions: {{common_questions}}
- Common tasks: {{common_tasks}}
- Escalation options: {{escalation_options}}
- Integration points: {{integrations}} (help center/in-app/website/mobile)

=== CONVERSATION DESIGN ===

**User Journey**:
- Entry points: {{entry_points}}
- Greeting strategy: {{greeting_type}}
- Intent recognition: {{intent_capabilities}}
- Response types: {{response_formats}}
- Handoff triggers: {{handoff_conditions}}
- Follow-up mechanisms: {{follow_up_approach}}

=== OUTPUT REQUIREMENTS ===

```yaml
chatbot_help_integration_system:
  conversation_foundations:
    greeting_strategies:
      first_time_visitors:
        template: |
          👋 Hi! I'm [Bot Name], your [Product] assistant.

          I can help you with:
          • [Common task 1]
          • [Common task 2]
          • [Common task 3]

          What can I help you with today?

          [Quick action buttons:]
          [Get started] [Browse help] [Talk to a person]

      returning_users:
        template: |
          Welcome back! 👋

          Need help with something?

          [Contextual quick actions based on user's recent activity:]
          [Continue your last task] [View recent article] [New question]

      contextual_greeting:
        trigger: "User on specific page or encountered error"
        template: |
          I noticed you're on the [Feature/Page] page. Need help with:
          • [Contextual suggestion 1]
          • [Contextual suggestion 2]

          Or ask me anything!

    message_formatting:
      tone_guidelines:
        professional_friendly:
          - "Use conversational but not overly casual language"
          - "Empathize without being emotional"
          - "Be concise but thorough"
          - "Use emojis sparingly (1-2 per conversation max)"

        voice_characteristics:
          helpful: "I can help you with that"
          confident: "Here's exactly what you need to do"
          empathetic: "I understand that's frustrating"
          encouraging: "You're almost there!"

      message_structure:
        short_responses: "1-3 sentences max per message"
        chunking: "Break long responses into multiple messages"
        progressive_disclosure: "Start with summary, offer 'Tell me more'"

        example_chunking: |
          Bot: To reset your password, you'll need access to your email.

          [2 second pause]

          Bot: Here are the steps:

          1. Click "Forgot Password" on the login page
          2. Enter your email address
          3. Check your email for a reset link

          [Buttons: Got it! ✓ | I need more help]

    intent_recognition:
      common_user_intents:
        account_related:
          patterns:
            - "reset password"
            - "change email"
            - "delete account"
            - "can't log in"
          response_approach: "Direct link to relevant help article + quick summary"

        how_to_questions:
          patterns:
            - "how do I..."
            - "how to..."
            - "steps to..."
          response_approach: "Step-by-step guidance with option to view full article"

        troubleshooting:
          patterns:
            - "not working"
            - "error message"
            - "broken"
            - "problem with"
          response_approach: "Diagnostic questions → Targeted solution → Escalate if unresolved"

        feature_inquiry:
          patterns:
            - "what is..."
            - "what does...do"
            - "can I..."
            - "is it possible to"
          response_approach: "Brief explanation + use case + link to documentation"

      ambiguity_handling:
        clarifying_questions:
          template: |
            I want to make sure I understand correctly.

            Are you asking about:
            A) [Interpretation 1]
            B) [Interpretation 2]
            C) Something else

        context_gathering:
          template: |
            To help you better, could you tell me:

            [Specific question to narrow down issue]

            Or describe what you're trying to accomplish?

  response_patterns:
    direct_answers:
      simple_questions:
        structure: "Answer → Context → Related resource"

        example: |
          User: "How much does the Pro plan cost?"

          Bot: The Pro plan is $49/month (or $490/year for 2 months free).

          This includes unlimited projects, 50 team members, and priority support.

          [View all plan features →]

          Need help choosing a plan? I can compare them for you!

      step_by_step_guidance:
        format: "Numbered steps with checkpoints"

        example: |
          User: "How do I invite a team member?"

          Bot: I'll walk you through it:

          **Step 1**: Click the "Team" icon in your sidebar

          Have you found it? [Yes ✓] [No, show me]

          [If user clicks Yes:]

          Great! **Step 2**: Click "+ Invite Member" in the top right

          Enter their email address and choose their role (Admin or Member).

          [Screenshot thumbnail - click to expand]

          **Step 3**: Click "Send Invitation"

          They'll receive an email to join your team.

          [Done!] [I need more help]

    article_recommendations:
      smart_linking:
        format: "Brief summary + link + reading time"

        example: |
          Bot: I found this guide that explains exactly that:

          📄 **Setting up two-factor authentication**
          Secure your account with 2FA in just 3 minutes.

          [Read guide (3 min)] [Watch video instead (2 min)]

          Want me to summarize the key points first?

      multiple_articles:
        format: "Ranked by relevance with brief descriptions"

        example: |
          Bot: I found 3 helpful articles:

          1. **Resetting your password** (most relevant)
             Quick steps to regain account access
             [Read guide]

          2. **Security best practices**
             Keep your account secure
             [Read guide]

          3. **Two-factor authentication setup**
             Extra account protection
             [Read guide]

          Which would you like to explore?

    interactive_elements:
      quick_reply_buttons:
        use_cases:
          - "Yes/No questions"
          - "Multiple choice selections"
          - "Common follow-up actions"

        formatting:
          max_buttons: "3-5 options per message"
          button_text: "Short, action-oriented (2-4 words)"
          visual_hierarchy: "Primary action stands out"

        example: |
          Bot: Did this solve your problem?

          [✓ Yes, I'm all set] [Not quite] [Talk to a person]

      carousels:
        use_case: "Present multiple options visually"

        example_structure: |
          Bot: Here are our most popular integrations:

          [Carousel cards:]
          [Card 1: Slack]     [Card 2: Google Drive]     [Card 3: Zapier]
          [Set up →]          [Set up →]                  [Set up →]

          Swipe to see more →

      forms_in_chat:
        use_case: "Gather structured information"

        example: |
          Bot: To help you faster, I'll need a few details:

          What feature are you having trouble with?
          [Text input field]

          What error message do you see (if any)?
          [Text input field]

          [Submit] [Skip - just connect me to support]

  escalation_handling:
    handoff_triggers:
      explicit_request:
        patterns:
          - "talk to a person"
          - "speak to someone"
          - "human support"
          - "representative"
        response: "Immediate handoff with context transfer"

      unresolved_after_attempts:
        threshold: "3 unsuccessful suggestions"
        detection: "User says 'that didn't work' or similar"
        response: "Proactively offer human support"

        example: |
          Bot: I'm sorry my suggestions haven't solved this yet.

          Let me connect you with our support team who can dig deeper.

          [Chat with support (online now)] [Email instead]

      complex_issues:
        detection: "Keywords like 'billing dispute', 'data loss', 'security issue'"
        response: "Acknowledge sensitivity + immediate handoff"

        example: |
          Bot: This sounds like something our billing specialist should handle directly.

          I'm connecting you now...

          [Transferring to billing support...]

      out_of_scope:
        detection: "Question outside knowledge base or capabilities"
        response: "Honest acknowledgment + alternative options"

        example: |
          Bot: That's a great question, but it's outside my knowledge area.

          Here's what I can do:
          • Connect you with a specialist who can help
          • Search our documentation for you
          • Note this for our team to create a resource about

          What would be most helpful?

    seamless_handoff:
      context_transfer:
        information_passed:
          - "Conversation history"
          - "Articles already viewed"
          - "Solutions already attempted"
          - "User's product context (plan, account age, etc.)"

        handoff_message: |
          Bot: I'm connecting you with [Agent Name] now.

          I've shared our conversation so you don't have to repeat yourself.

          [Transfer happening...]

          ---

          [Agent Name]: Hi! I can see you've been working on [issue].
          Let's get this sorted out for you.

      wait_time_management:
        no_agents_available:
          template: |
            Bot: Our support team is currently helping other customers.

            Estimated wait time: 8 minutes

            While you wait, would you like me to:
            • Try troubleshooting together
            • Schedule a callback
            • Send your question via email

            [Continue waiting] [Email instead] [Troubleshoot with bot]

      callback_scheduling:
        template: |
          Bot: Our team can call you back when an agent is free.

          What's the best number to reach you?
          [Phone number input]

          What timezone are you in?
          [Timezone dropdown]

          We'll call you in approximately 15 minutes.

          [Schedule callback] [Never mind]

  proactive_help:
    behavior_triggered_messages:
      user_stuck:
        trigger: "No activity for 30+ seconds on complex page"
        message: |
          💬 Need help with anything? I'm here if you have questions!

          [Ask a question] [No thanks]

      repeated_action:
        trigger: "User performs same action 3+ times (possible confusion)"
        message: |
          I noticed you've tried [action] a few times.

          Having trouble? I can help!

          [Yes, help me] [Dismiss]

      error_encountered:
        trigger: "Error message displays to user"
        message: |
          Looks like something went wrong.

          [Auto-detected error: {error_type}]

          I can help troubleshoot this. Would you like me to?

          [Yes, help!] [No thanks]

    feature_discovery:
      new_feature_highlight:
        trigger: "User eligible for feature they haven't used"
        message: |
          👋 Did you know you can now [new feature]?

          It's perfect for [use case you're seeing from user's behavior].

          Want a quick 1-minute overview?

          [Show me!] [Maybe later]

      best_practice_tips:
        trigger: "User reached milestone or showing suboptimal usage"
        message: |
          🎉 Nice! You've created 10 projects.

          Pro tip: You can organize projects into folders for easier management.

          [Learn how] [Dismiss]

  conversation_recovery:
    error_handling:
      bot_doesnt_understand:
        response: |
          I'm not quite sure I understand. Let me try to help:

          Are you asking about:
          • [Common topic 1 based on keywords]
          • [Common topic 2]
          • Something else?

          Or type your question another way.

      technical_error:
        response: |
          Oops! I ran into a technical hiccup.

          Let me try that again... [Retry]

          Or I can connect you directly with support: [Chat with a person]

    dead_end_prevention:
      always_offer_options:
        principle: "Never leave user with no next action"

        example: |
          Bot: I don't have specific information about that.

          Here's what I can do:
          • Search our help center for '[user's query]'
          • Connect you with a specialist
          • Let you browse related topics

          [Search help center] [Talk to specialist] [Browse topics]

  analytics_and_optimization:
    key_metrics:
      resolution_rate:
        definition: "% of conversations resolved without human intervention"
        target: "> 60%"
        improvement_actions:
          - "Expand knowledge base coverage"
          - "Improve intent recognition"
          - "Add more interactive guidance"

      containment_rate:
        definition: "% of users who don't escalate to human support"
        tracking: "Track by issue type"
        optimization: "Improve bot responses for high-escalation topics"

      user_satisfaction:
        measurement: "Post-chat rating (1-5 stars)"
        follow_up_question: "What could I have done better?"
        action: "Flag low-rated conversations for review"

      conversation_abandonment:
        definition: "% of users who stop mid-conversation"
        analysis: "Identify drop-off points"
        fix: "Simplify responses at high-abandonment steps"

    continuous_improvement:
      unhandled_queries_review:
        frequency: "Weekly"
        process: |
          1. Collect queries bot couldn't handle
          2. Categorize by topic
          3. Prioritize by frequency
          4. Create new responses or articles
          5. Update bot knowledge base
          6. Test improvements

      conversation_mining:
        extract_insights:
          - "New product bugs users report"
          - "Feature requests and pain points"
          - "Terminology users actually use"
          - "Common workflows and use cases"

      a_b_testing:
        test_variables:
          - "Greeting variations"
          - "Response length (concise vs. detailed)"
          - "Button text and positioning"
          - "Escalation timing"

  accessibility_considerations:
    screen_reader_support:
      message_announcements: "Announce new bot messages to screen readers"
      button_labels: "Clear ARIA labels on all interactive elements"
      conversation_structure: "Proper heading hierarchy for chat messages"

    keyboard_navigation:
      focus_management: "Logical tab order through chat interface"
      shortcuts: "Enter to send, Esc to close chat"
      button_access: "Tab through quick reply buttons"

    visual_accessibility:
      color_contrast: "4.5:1 minimum for all text"
      focus_indicators: "Clear visible focus on active elements"
      text_scaling: "Chat interface scales to 200% without breaking"

    alternative_formats:
      text_based: "All information available as text (not icon/color only)"
      transcript: "Option to email conversation transcript"
      voice_input: "Support for voice-to-text input where available"

  integration_best_practices:
    help_center_integration:
      article_preview: "Show snippet of article content in chat"
      seamless_handoff: "Open article in sidebar or modal without leaving chat"
      continue_conversation: "Allow user to return to chat after reading"

    in_app_context_awareness:
      page_detection: "Know what page/feature user is on"
      user_data_access: "Reference user's account details (plan, usage, etc.)"
      action_triggers: "Offer to perform actions on user's behalf"

      example_contextual_help: |
        [User on "Team Settings" page]

        Bot: I see you're in Team Settings.

        I can help you:
        • Invite a new team member [Do it for me]
        • Change someone's role [Show me how]
        • Remove team access [Guide me]

        What would you like to do?

    ticket_system_integration:
      auto_ticket_creation:
        trigger: "User requests human support or issue unresolved"
        information_captured:
          - "Conversation transcript"
          - "User's question/issue"
          - "Troubleshooting steps attempted"
          - "User contact information"

        confirmation: |
          Bot: I've created a support ticket (#12345) for you.

          Our team will respond within 2 hours.

          You'll receive updates at: user@email.com

          [View ticket status] [Close chat]
```

=== EXAMPLES ===

**Example 1: SaaS Project Management Tool**
- product_name: "TaskFlow"
- bot_type: "Hybrid (AI + rule-based)"
- brand_voice: "Friendly, encouraging"
- common_questions: "Creating projects, inviting team, task management"

**Conversation Flow - Account Setup Help**:
```
[User clicks chat widget]

Bot: 👋 Hi! I'm Flo, your TaskFlow assistant.

I can help you get started, answer questions, or troubleshoot issues.

What brings you here today?

[Get started] [I have a question] [Something's not working]

---

[User clicks: "Get started"]

Bot: Great! Let's get your first project set up.

Have you created a project yet?

[Yes] [No] [What's a project?]

---

[User clicks: "No"]

Bot: Perfect! Creating a project takes about 30 seconds.

Here's what to do:

**Step 1**: Click the **+ New Project** button

It's in the top left corner of your screen. See it?

[Screenshot thumbnail showing button location]

[Yes, I found it ✓] [No, I don't see it]

---

[User clicks: "Yes, I found it ✓"]

Bot: Excellent! Click that button now.

[Waits for user action...]

---

[System detects user created project]

Bot: 🎉 Nice work! You've created your first project.

Now let's add a task to it.

Click **+ Add Task** in the "To Do" column.

[User clicks or types: "How do I invite my team?"]

Bot: Great question! Once you have some tasks set up, inviting your team is easy.

Want to finish setting up tasks first, or jump to inviting team members now?

[Finish task setup] [Invite team now]

---

[User clicks: "Invite team now"]

Bot: Got it! Here's how to invite team members:

1. Click the **Share** button (top right, looks like 👤+)
2. Enter their email address
3. Choose their role (Admin or Member)
4. Click **Send Invitation**

[Screenshot showing Share button]

**Quick tip**: Admins can manage everything. Members can create and edit tasks but can't delete the project.

Need me to walk through each step?

[I can do it myself] [Yes, walk me through] [What's the difference between roles?]

---

[User clicks: "What's the difference between roles?"]

Bot: Good question! Here's the breakdown:

**Admin** can:
✓ Everything Members can do, plus:
✓ Invite/remove team members
✓ Delete the project
✓ Change project settings

**Member** can:
✓ Create, edit, and complete tasks
✓ Comment and collaborate
✓ View all project activity

Most people make core team members Admins and give collaborators Member access.

[Clear explanation?]

[Yes, thanks!] [I need more details]

---

[User clicks: "Yes, thanks!"]

Bot: Awesome! Feel free to come back if you need anything else.

You're doing great! 🚀

[Additional help resources:]

📄 [Complete getting started guide]
🎥 [Watch 2-min setup video]
💬 [Chat with our team]

[Close chat] [Ask another question]
```

**Example 2: E-commerce Platform - Troubleshooting**
- product_name: "ShopCore"
- bot_type: "AI-powered"
- brand_voice: "Professional, solution-focused"
- common_issues: "Payment setup, shipping configuration, inventory sync"

**Conversation Flow - Payment Not Working**:
```
[User types: "my payment isn't working"]

Bot: I'm sorry you're having payment issues. Let's figure this out.

To help diagnose this, could you tell me:

What's happening when you try to process a payment?

A) Payment fails with error message
B) Payment button doesn't appear
C) Payment goes through but shows incorrect amount
D) Something else

---

[User clicks: "A) Payment fails with error message"]

Bot: Thank you. What error message are you seeing?

(Copy and paste it if you can)

[Text input field]

---

[User types: "card declined"]

Bot: Got it. "Card declined" errors usually happen for one of these reasons:

**Most common cause**: The test card is being used in live mode (or vice versa).

Are you currently in test mode or live mode?

You can check in the top right corner of your dashboard.

[Test mode] [Live mode] [Not sure how to check]

---

[User clicks: "Live mode"]

Bot: Perfect, you're in live mode.

Since this is a real transaction, the customer's card was declined by their bank.

**This could be because**:
• Insufficient funds
• Incorrect card details (number, expiration, CVC)
• Card flagged for fraud protection

**What the customer should do**:
1. Verify card details are correct
2. Try a different payment method
3. Contact their bank if issue persists

**What you should check**:
1. Is your payment gateway properly configured?
2. Are you using the correct API keys for live mode?

Would you like me to help verify your payment gateway setup?

[Yes, verify setup] [No, this explains it] [Connect me with support]

---

[User clicks: "Yes, verify setup"]

Bot: Great! Let's check your payment gateway configuration.

Go to **Settings → Payment Gateways**

Do you see a green checkmark next to your payment provider?

[Screenshot showing what green checkmark looks like]

[Yes ✓] [No, I see a warning ⚠️] [Payment gateway is not listed]

---

[User clicks: "No, I see a warning ⚠️"]

Bot: That warning means your payment gateway isn't fully configured.

Click on the payment gateway that shows the warning.

What does the warning message say?

[Text input]

---

[User types: "API keys not valid"]

Bot: Ah, that's the issue! Your API keys are invalid or not set for live mode.

Here's how to fix it:

1. Log into your payment provider account (Stripe, PayPal, etc.)
2. Go to their API keys section
3. Copy your **live mode secret key** (starts with `sk_live_`)
4. Paste it into ShopCore: Settings → Payment Gateways → [Your Provider] → Secret Key field
5. Click **Save and Test**

Want detailed step-by-step instructions for your specific payment provider?

[Stripe] [PayPal] [Square] [Other]

---

[User clicks: "Stripe"]

Bot: Perfect! I've got detailed Stripe setup instructions for you:

📄 **Connecting Stripe to ShopCore**
Step-by-step guide with screenshots

[Read guide (5 min)]

Or I can walk you through it right here. Your choice!

[Read the guide] [Walk me through it now]

---

[User clicks: "Walk me through it now"]

Bot: Okay! Open Stripe in another tab so you can follow along.

Ready? [Yes, let's go!]

---

[User clicks: "Yes, let's go!"]

Bot: **Step 1**: In Stripe, click **Developers** in the left menu

[Screenshot]

Found it? [Yes ✓] [No]

[Continues step-by-step...]

---

[After completing setup]

Bot: Excellent! You should now see a green checkmark ✓ next to Stripe in your payment gateways.

Try processing a test payment:
1. Go to Products
2. Add item to cart
3. Use Stripe test card: 4242 4242 4242 4242
4. Complete checkout

Did the test payment go through successfully?

[Yes, it worked! 🎉] [No, still having issues]

---

[User clicks: "Yes, it worked! 🎉"]

Bot: 🎉 Fantastic! Your payments are now set up correctly.

You're ready to accept real customer payments.

**Remember**: Always test with real cards in small amounts before going live with customers.

Was this helpful?

[Yes, very helpful!] [Somewhat helpful] [Not really]

---

[User clicks: "Yes, very helpful!"]

Bot: So glad I could help! 😊

If you run into anything else, just come back and chat with me.

Happy selling!

[Additional resources:]
📄 [Payment best practices guide]
📧 [Get payment setup tips via email]

[Close chat]
```

**Example 3: Developer Tool - API Support Bot**
- product_name: "CloudAPI"
- bot_type: "AI + code-aware"
- brand_voice: "Technical, precise"
- audience: "Software developers"

**Conversation Flow - API Integration Help**:
```
[User types: "how do I authenticate API requests?"]

Bot: API authentication in CloudAPI uses Bearer tokens.

Here's the quick version:

1. Get your API key from Dashboard → API Keys
2. Include it in the `Authorization` header:

```bash
Authorization: Bearer YOUR_API_KEY
```

Want to see complete code examples?

[Yes - show code] [Just the docs link] [I have a specific question]

---

[User clicks: "Yes - show code"]

Bot: Which language are you using?

[JavaScript] [Python] [Ruby] [PHP] [cURL] [Other]

---

[User clicks: "JavaScript"]

Bot: Here's how to authenticate in JavaScript:

```javascript
const apiKey = process.env.CLOUDAPI_KEY;

const response = await fetch('https://api.cloud.com/v1/users', {
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
```

**Important**: Store your API key in environment variables, never in code.

[Copy code] [Try in API playground]

Need help with anything specific?

[Environment variables setup] [Error handling] [Different endpoint]

---

[User types: "I'm getting 401 unauthorized error"]

Bot: 401 errors mean authentication failed. Let's troubleshoot:

**Most common causes**:

1. **Invalid API key**: Are you using the correct key for your environment?
   - Test mode keys start with `test_sk_`
   - Live mode keys start with `live_sk_`

2. **Expired token**: Some tokens expire after 1 hour

3. **Missing 'Bearer' prefix**: Header must be `Bearer YOUR_KEY`, not just `YOUR_KEY`

Which applies to your situation?

[Wrong key type] [Token expired] [Missing Bearer] [None of these]

---

[User clicks: "Missing Bearer"]

Bot: That's it! The Authorization header requires the `Bearer` prefix.

**Incorrect**:
```javascript
'Authorization': apiKey
```

**Correct**:
```javascript
'Authorization': `Bearer ${apiKey}`
```

Try adding `Bearer ` (with space) before your API key.

Did that fix it?

[Yes, working now!] [No, still 401 error]

---

[User clicks: "Yes, working now!"]

Bot: Great! You're authenticated ✓

**Next steps**:
• [Make your first API call →]
• [Set up error handling →]
• [View rate limits →]

**Pro tips**:
• Always use HTTPS
• Rotate keys every 90 days
• Use different keys for dev/staging/production

Need help with anything else?

[Ask another question] [Browse API docs] [Close]

---

[User types: "how do I handle rate limits?"]

Bot: Rate limiting in CloudAPI:

**Limits by plan**:
• Free: 100 requests/hour
• Pro: 10,000 requests/hour
• Enterprise: Custom limits

**Headers to check**:
```
X-RateLimit-Limit: 10000
X-RateLimit-Remaining: 9543
X-RateLimit-Reset: 1642348800
```

**Best practice code** (JavaScript):
```javascript
const response = await fetch(url, options);

if (response.status === 429) {
  const retryAfter = response.headers.get('Retry-After');
  console.log(`Rate limited. Retry after ${retryAfter}s`);

  // Wait and retry
  await new Promise(r => setTimeout(r, retryAfter * 1000));
  return fetch(url, options); // Retry
}
```

Want the full rate limiting guide?

[View guide] [Copy code snippet] [Talk to developer support]
```

---

**Accessibility Requirements**: Chatbot interfaces must meet WCAG 3.0 Level AA standards. Ensure chat window and messages are keyboard accessible (Tab, Enter, Arrow keys). Provide screen reader announcements for new messages and state changes. Maintain 4.5:1 color contrast for text. Support text scaling to 200%. Make quick reply buttons keyboard operable. Provide option to receive conversation transcript via email. Use ARIA live regions for message updates. Ensure focus management returns appropriately after actions. Support browser text-to-speech and voice input where available.

**Psychological Principles**: Immediate gratification through instant responses. Reduced anxiety through always-available help. Social proof through conversational format (feels like talking to helpful colleague). Progressive disclosure prevents overwhelm. Agency preservation through choice buttons. Completion motivation through guided flows. Trust building through empathy and acknowledgment. Flow state maintenance through appropriate pacing. Self-efficacy through successful problem resolution.

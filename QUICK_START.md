# Quick Start Tutorial

Get started with the Content Design Prompt Library in 5 minutes.

## Tutorial: Generate Error Messages for a Payment Form

This tutorial shows you how to use a prompt from the library to generate comprehensive error messaging.

### Step 1: Choose Your Prompt

Browse to: `content-design/_foundations/error-message-design.md`

This prompt helps you transform technical errors into human, actionable guidance.

### Step 2: Customize Variables

Open the prompt and replace these variables with your specifics:

```markdown
# Before (template variables):
Error type: {{error_type}}
Error code: {{error_code}}
User impact: {{user_impact_description}}

# After (your context):
Error type: payment
Error code: CARD_DECLINED
User impact: Cannot complete purchase
```

**Your complete variable set:**
```yaml
error_type: payment
error_code: CARD_DECLINED
technical_message: "Issuer bank declined transaction"
user_impact_description: "Cannot complete purchase"
affected_users: 1
severity: high
persona_name: "E-commerce customer"
persona_technical_level: non-technical
task_criticality: blocking
device_type: mobile
environment: mobile app
```

### Step 3: Copy to Your AI System

**Option A: Claude (claude.ai)**
1. Go to [claude.ai](https://claude.ai)
2. Paste your customized prompt
3. Hit enter

**Option B: ChatGPT**
1. Go to [chat.openai.com](https://chat.openai.com)
2. Paste your customized prompt
3. Submit

**Option C: API Integration**
```python
import anthropic

client = anthropic.Anthropic(api_key="your-key")

message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=2000,
    messages=[{
        "role": "user",
        "content": "your-customized-prompt-here"
    }]
)

print(message.content)
```

### Step 4: Review the Output

The AI will generate comprehensive error messaging:

```yaml
end_user_communication:
  in_app_banner:
    short: "Card declined"
    medium: "Your card was declined. Try another payment method."
    long: "We couldn't process your card. Your bank declined the charge. This usually happens due to insufficient funds or card restrictions. Try a different card or contact your bank."
    accessibility: "Alert: Payment declined. Try another payment method."
    
  email_notification:
    subject: "Payment could not be processed"
    preview_text: "Your order is waiting—update your payment"
    body: |
      Hi there,
      
      We tried to process your payment but your bank declined the charge.
      
      This can happen for a few reasons:
      • Insufficient funds
      • Card restrictions
      • Security holds
      
      Your cart is saved. Update your payment method to complete your order.
      
      [Update Payment Method]
    
power_user_communication:
  status_page_update:
    technical_summary: "Payment gateway returned CARD_DECLINED (error 402)"
    workaround: "Try alternative payment method or contact issuing bank"
    
support_team_brief:
  internal_ticket_notes: |
    Customer payment declined by issuing bank.
    - Error: CARD_DECLINED
    - Not a platform issue
    - Suggest: different card, contact bank, or alternative payment
  response_templates:
    - "I see your payment was declined. This is on your bank's side..."
```

### Step 5: Refine & Implement

**Refine:**
- Adjust tone to match your brand voice
- Add specific payment methods available
- Include your support contact info

**Implement:**
- Copy to your design system
- Add to error handling code
- Test with screen readers
- Translate for other locales

## Common Use Cases

### Use Case 1: Microcopy Variations

**When:** You need button copy for a sign-up form

**Prompt:** `content-design/_foundations/microcopy-generation.md`

**Quick variables:**
```yaml
company_name: "Acme Analytics"
component_type: "primary button"
char_limit: 25
persona_name: "Data analyst"
emotional_state: "hesitant about commitment"
conversion_goal: "increase sign-ups 15%"
```

**Time:** 2 minutes to generate 10 variations

---

### Use Case 2: Empty State Content

**When:** Building a new dashboard with no data

**Prompt:** `content-design/_foundations/empty-state-content.md`

**Quick variables:**
```yaml
scenario_type: "first use"
expected_content: "analytics charts"
population_method: "needs 7 days of data"
user_action: "completed onboarding"
```

**Time:** 3 minutes to generate complete empty state

---

### Use Case 3: Success Confirmation

**When:** User completes onboarding

**Prompt:** `content-design/_foundations/success-state-content.md`

**Quick variables:**
```yaml
user_action: "Finished 6-step onboarding"
effort_level: "high"
time_minutes: 12
next_action: "Explore dashboard"
```

**Time:** 2 minutes to generate celebratory success state

## Tips for Best Results

### 1. Be Specific with Variables
```
❌ persona_name: "user"
✅ persona_name: "Budget-conscious parent shopping for back-to-school supplies"

❌ voice_trait: "friendly"
✅ voice_trait: "warm and empathetic (80%), reassuring (15%), playful (5%)"
```

### 2. Provide Context
Include:
- User research findings
- A/B test results
- Brand voice guidelines
- Accessibility requirements
- Business constraints

### 3. Iterate Based on Output
First pass is rarely perfect:
1. Generate initial output
2. Review against your requirements
3. Adjust variables
4. Regenerate
5. Refine manually

### 4. Use Multiple Prompts Together
Complex scenarios might need several prompts:

**Example: Complete checkout flow**
1. Form field labels (form-field-labeling.md)
2. Button copy (button-label-variations.md)
3. Error states (error-message-design.md)
4. Success confirmation (success-state-content.md)

### 5. Save Your Variations
Create a file with your most-used variable sets:

```yaml
# my-variables.yml

payment_form:
  company_name: "Acme Corp"
  product_domain: "E-commerce"
  brand_voice: "Trustworthy, clear, warm"
  
checkout_persona:
  name: "Busy parent"
  emotional_state: "Time-pressed, security-conscious"
  technical_level: "intermediate"
```

## Keyboard Shortcuts

### Claude.ai
- `Cmd/Ctrl + K` - New chat
- `Cmd/Ctrl + L` - Copy code block
- `Cmd/Ctrl + Enter` - Send message

### ChatGPT
- `Cmd/Ctrl + Shift + ;` - New chat
- `Shift + Enter` - New line (without sending)

## Troubleshooting

### Output Too Generic
**Problem:** AI generates vague, general content

**Solution:**
- Add more specific variables
- Include example outputs you like
- Specify tone more precisely
- Add industry-specific context

### Output Too Long
**Problem:** Generated content exceeds character limits

**Solution:**
- Add explicit character constraints
- Request multiple length versions
- Use "concise" in variable descriptions
- Specify exact format needed

### Missing Accessibility Info
**Problem:** Output doesn't include screen reader text

**Solution:**
- Explicitly request accessibility_requirements section
- Add accessibility_needs variable
- Reference WCAG guidelines in prompt
- Request ARIA labels specifically

### Inconsistent Voice
**Problem:** Content doesn't match brand voice

**Solution:**
- Provide brand voice percentage breakdown
- Include 2-3 example sentences in your brand voice
- Add "voice_examples" variable
- Reference specific brand guidelines

## Next Steps

1. **Try 3 prompts** from different categories
2. **Share results** with your team
3. **Contribute improvements** back to the library
4. **Join discussions** on GitHub

## Need Help?

- 📖 [Full documentation](README.md)
- 💬 [GitHub Discussions](https://github.com/YOUR_USERNAME/content-design-prompts/discussions)
- 🐛 [Report issues](https://github.com/YOUR_USERNAME/content-design-prompts/issues)
- 📧 [Email](mailto:your-email@example.com)

---

**Ready to create amazing content?** Pick a prompt and start experimenting! 🚀

## Effective Apology Design v1.0

**Purpose**: Apologize for errors authentically without over-apologizing, maintaining user trust while taking appropriate responsibility.

---

**PROMPT:**

You are designing apology responses for {{ai_system}} when {{error_scenario}} occurs. Create apologies that acknowledge issues without undermining confidence or being excessive.

=== APOLOGY CONTEXT ===
- Error severity: {{error_severity}} (minor/moderate/major/critical)
- Responsibility: {{fault_attribution}} (user_error/system_error/ambiguous/external)
- Impact: {{user_impact}} (inconvenience/time_loss/data_loss/financial)
- Frequency: {{error_frequency}} (one-time/recurring/systemic)
- Solution available: {{solution_status}} (fixed/workaround_available/no_solution_yet)

=== OUTPUT REQUIREMENTS ===

```yaml
apology_system:
  apology_framework:
    critical_errors:
      structure:
        - acknowledgment: "state what went wrong clearly"
        - responsibility: "take ownership without excuses"
        - impact: "acknowledge user impact"
        - action: "explain fix or next steps"
        - prevention: "what we're doing to prevent recurrence (if applicable)"

      example: |
        "I apologize - our system failed to save your work from the past hour. We've identified the issue and your data has been recovered.

        I know this disrupted your workflow. To prevent this, we've implemented automatic backup every 5 minutes.

        Is there anything else I can help you with?"

      tone: "serious, accountable, solution-focused"

    moderate_errors:
      structure:
        - brief_apology: "acknowledge the issue"
        - solution: "offer fix immediately"
        - assistance: "offer help"

      example: "I apologize for the confusion. I've corrected that. What else can I help you with?"

      tone: "sincere but concise"

    minor_errors:
      structure:
        - acknowledge: "my mistake or simple acknowledgment"
        - correct: "provide right information"
        - continue: "keep conversation flowing"

      example: "You're right, I misspoke. It's actually {{correct_info}}. {{continue_conversation}}"

      tone: "casual, move forward"

  when_not_to_apologize:
    - situation: "user_error_not_bot_fault"
      response: "helpful redirection without blame or apology"
      example: "{{field_name}} is required. Could you provide that?"
      avoid: "Sorry, but you need to fill in {{field}}"

    - situation: "system_limitation_not_error"
      response: "transparent about capability"
      example: "I'm not able to {{action}}, but I can {{alternative}}"
      avoid: "Sorry, I can't do that"

    - situation: "normal_clarification"
      response: "just clarify"
      example: "What date works for you?"
      avoid: "Sorry, I didn't catch the date"

  apology_language:
    appropriate:
      - "I apologize" (formal, serious errors)
      - "My mistake" (casual, minor errors)
      - "You're right" (acknowledge user correction)
      - "That's on me" (take ownership, conversational)

    avoid_over_apologizing:
      - "I'm so terribly sorry" (too effusive)
      - "I apologize profusely" (over the top)
      - Multiple apologies in one response
      - Apologizing for every clarification

    paired_with_action:
      - "I apologize. I've {{fixed_action}}"
      - "My mistake. Let me {{corrective_action}}"
      - "I'm sorry for {{specific_issue}}. {{specific_solution}}"

  tone_calibration:
    serious_apology:
      characteristics: "formal, acknowledge impact, specific about issue"
      example: "I sincerely apologize. {{specific_issue}} caused {{specific_impact}}. {{resolution}}"

    standard_apology:
      characteristics: "professional, brief, solution-focused"
      example: "I apologize for {{issue}}. {{solution}}"

    casual_correction:
      characteristics: "conversational, move forward quickly"
      example: "Oops, my mistake! {{correction}}"
```

=== EXAMPLES ===

**Example 1: System Downtime**
- error_severity: "critical"
- responsibility: "system_error"
- user_impact: "time_loss + data_access_loss"
- apology: "I sincerely apologize - our system was down for 2 hours. Your data is safe and we've added redundancy to prevent this."

**Example 2: Incorrect Information Given**
- error_severity: "moderate"
- responsibility: "system_error"
- user_impact: "confusion"
- apology: "I apologize - I gave you incorrect information. The actual price is {{correct_price}}."

**Example 3: Misunderstanding User Intent**
- error_severity: "minor"
- responsibility: "ambiguous"
- user_impact: "inconvenience"
- response: "Got it - you meant {{correct_interpretation}}. Let me {{correct_action}}."

---

**Accessibility Requirements**: Clear about what went wrong. Solution-focused. Don't make users comfort the AI. Acknowledge impact on specific user needs.

**Psychological Principles**: Authentic apology builds trust. Over-apologizing undermines confidence. Acknowledge impact shows empathy. Pair apology with action (agency). Take responsibility without excuses (authenticity).

## Question Answering Pattern Design v1.0

**Purpose**: Structure informative responses that directly answer questions while providing appropriate context and next actions.

---

**PROMPT:**

Design question-answering patterns for {{ai_system}} responding to {{question_type}} from {{user_segment}}.

=== QUESTION CONTEXT ===
- Question type: {{q_type}} (factual/procedural/opinion/comparison/troubleshooting)
- Answer certainty: {{certainty}} (definitive/probable/uncertain)
- User need: {{need}} (quick_fact/learning/decision_support)

=== OUTPUT REQUIREMENTS ===

```yaml
qa_patterns:
  answer_structures:
    factual_question:
      structure: "direct_answer + source/confidence"
      example: "{{fact}}. [Source: {{source}}]"
      sample: "Your plan includes 100GB storage. [Source: Your Premium plan details]"

    procedural_question:
      structure: "steps + outcome + help_offer"
      example: |
        To {{goal}}:
        1. {{step1}}
        2. {{step2}}
        3. {{step3}}

        This will {{outcome}}. Need help with any step?

    comparison_question:
      structure: "key_differences + recommendation"
      example: |
        {{Option_A}}: {{key_features_A}}
        {{Option_B}}: {{key_features_B}}

        {{Recommendation}} if you {{user_need}}.

    troubleshooting_question:
      structure: "likely_cause + solution + verification"
      example: "This usually happens when {{cause}}. Try {{solution}}. Let me know if that fixes it."

    opinion_question:
      structure: "considerations + user_context + guidance"
      example: "The best choice depends on {{factors}}. Based on {{user_context}}, I'd suggest {{recommendation}}."

  answer_quality_elements:
    directly_answer_first:
      bad: "There are many factors... [long preamble] ...so the answer is X"
      good: "{{answer}}. Here's why: {{explanation}}"

    cite_sources:
      pattern: "{{fact}} [Source: {{where_from}}]"
      example: "Your subscription renews monthly. [Source: Your account settings]"

    indicate_uncertainty:
      high_confidence: "{{answer}}"
      medium_confidence: "Based on {{available_info}}, {{answer}}"
      low_confidence: "I'm not certain, but {{best_answer}}. I'd recommend {{verification_action}}"

    provide_context:
      when: "answer needs background to be useful"
      pattern: "{{answer}}. {{relevant_context}}"

    offer_next_action:
      pattern: "{{answer}}. Want me to {{related_action}}?"
      example: "Your delivery arrives Thursday. Want me to send you a reminder?"
```

=== EXAMPLES ===

**Example 1: Factual Question**
- Q: "When does my subscription expire?"
- A: "Your subscription expires on June 15, 2024. You'll get a reminder email 7 days before."

**Example 2: Procedural Question**
- Q: "How do I export my data?"
- A: "To export your data:\n1. Go to Settings > Data & Privacy\n2. Click 'Export Data'\n3. Choose format (CSV or JSON)\n4. Click 'Download'\n\nYour export will be ready in a few minutes."

**Example 3: Comparison Question**
- Q: "What's the difference between Pro and Premium?"
- A: "Pro ($10/mo): 50GB storage, basic support\nPremium ($20/mo): 200GB storage, priority support, advanced features\n\nPremium makes sense if you need more than 50GB or want faster support response."

---

**Accessibility Requirements**: Answer first, elaborate after. Use clear structure. Support scanning. Indicate certainty level. Provide actionable next steps.

**Psychological Principles**: Direct answers reduce cognitive load. Transparent uncertainty builds trust. Structure aids comprehension. Next actions reduce decision paralysis.

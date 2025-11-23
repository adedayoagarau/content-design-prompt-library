## Data Insight Summary Generation v1.0

**Purpose**: Create compelling, actionable narrative summaries that transform raw data into meaningful insights, highlighting key findings, trends, and recommendations for data-driven decision making.

---

**PROMPT:**

Generate insight summaries for {{data_context}} serving {{audience_role}} analyzing {{business_domain}}.

=== DATA CONTEXT ===
Analysis type: {{analysis_type}} (performance/trend/anomaly/forecast/comparative/diagnostic)
Data source: {{data_source}}
Time period analyzed: {{time_period}}
Key metrics: {{primary_metrics}}
Data completeness: {{data_quality}} (complete/partial/estimated)
Statistical confidence: {{confidence_level}}

=== AUDIENCE CONTEXT ===

**Reader Profile**:
- Primary audience: {{primary_audience}} (executive/manager/analyst/technical)
- Technical literacy: {{technical_level}} (high-level/business/statistical/technical)
- Decision authority: {{decision_power}} (strategic/tactical/operational/informational)
- Time availability: {{time_constraint}} (seconds/minutes/detailed review)
- Action orientation: {{action_focus}} (decision-making/monitoring/investigation/reporting)

**Business Context**:
- Industry vertical: {{industry}}
- Business objective: {{business_goal}}
- Success metrics: {{success_criteria}}
- Risk tolerance: {{risk_appetite}}
- Competitive context: {{competitive_position}}

=== INSIGHT CHARACTERISTICS ===

**Finding Significance**:
- Insight priority: {{priority}} (critical/important/informational/contextual)
- Statistical significance: {{significance}} (yes/no/not applicable)
- Business impact: {{impact}} (high/medium/low)
- Actionability: {{actionable}} (immediate action/monitor/FYI)
- Novelty: {{novelty}} (new discovery/confirming trend/expected/surprising)

**Narrative Tone**:
- Voice: {{narrative_voice}} (analytical/conversational/urgent/celebratory/cautionary)
- Certainty level: {{certainty}} (definitive/probable/possible/uncertain)
- Urgency: {{urgency}} (immediate/soon/eventual/no urgency)
- Sentiment: {{sentiment}} (positive/negative/neutral/mixed)

=== INSIGHT STRUCTURE ===

**Summary Components**:
- Headline insight: {{headline_requirement}} (one sentence key finding)
- Supporting evidence: {{evidence_depth}} (data points, comparisons, context)
- Causal explanation: {{explain_why}} (yes/no/hypothesize)
- Trend direction: {{trend_info}} (improving/declining/stable/volatile)
- Contextual factors: {{context_factors}}
- Recommended actions: {{include_actions}} (yes/no)

=== OUTPUT REQUIREMENTS ===

```yaml
insight_summary:
  headline:
    primary_finding: "string (one sentence, most important insight)"
    impact_statement: "string (why this matters)"
    urgency_indicator: "string (if time-sensitive)"

  executive_summary:
    format: "paragraph/bullets"
    word_count: "50-100 words"
    content: "string (high-level overview for busy executives)"
    key_numbers: ["array of critical metrics with context"]

  detailed_narrative:
    introduction:
      opening: "string (sets context)"
      scope: "string (what was analyzed)"
      timeframe: "string (period covered)"

    key_findings:
      - finding_id: "integer"
        finding_type: "positive/negative/neutral/mixed"
        headline: "string (finding in one sentence)"
        evidence:
          primary_metric: "string with value"
          comparison: "string (vs baseline/target/previous)"
          magnitude: "string (describing scale of change)"
        explanation: "string (why this is happening - if known)"
        implications: "string (what this means for the business)"
        confidence: "string (high/medium/low with reasoning)"

    trends_and_patterns:
      - trend_id: "integer"
        trend_type: "upward/downward/seasonal/cyclical/anomalous"
        description: "string (clear description of pattern)"
        duration: "string (how long this has been occurring)"
        strength: "string (strong/moderate/weak trend)"
        supporting_data: "string (specific data points)"

    contributing_factors:
      - factor: "string (what influenced results)"
        impact: "string (how much this contributed)"
        evidence: "string (data supporting this factor)"

    outliers_and_anomalies:
      - anomaly_description: "string (what's unusual)"
        potential_cause: "string (hypothesis or known cause)"
        significance: "string (should we be concerned?)"

  comparative_analysis:
    vs_previous_period:
      summary: "string (how this compares to last period)"
      notable_changes: ["array of significant differences"]

    vs_target:
      summary: "string (performance vs goals)"
      gap_analysis: "string (how far from target and why)"

    vs_benchmark:
      summary: "string (performance vs industry/peers)"
      competitive_position: "string (where you stand)"

  forward_looking:
    projections: "string (if forecasting included)"
    leading_indicators: "string (early signals to watch)"
    risk_factors: "string (potential issues on horizon)"

  recommendations:
    immediate_actions:
      - action: "string (specific, actionable step)"
        rationale: "string (why this action)"
        expected_outcome: "string (what this should achieve)"
        owner: "string (who should do this)"
        priority: "high/medium/low"

    strategic_considerations:
      - consideration: "string (longer-term implication)"
        recommendation: "string (strategic recommendation)"

  data_quality_notes:
    completeness: "string (any data gaps)"
    methodology: "string (how analysis was conducted)"
    limitations: "string (what to be cautious about)"
    confidence_statement: "string (overall confidence in findings)"

  visual_summary_suggestions:
    primary_chart_type: "string (best visualization for this insight)"
    secondary_charts: ["array of supporting visualizations"]
    key_metrics_callout: ["metrics to highlight visually"]

  tone_variations:
    executive_version:
      content: "string (brief, strategic focus)"
      length: "2-3 sentences"

    manager_version:
      content: "string (tactical, actionable focus)"
      length: "1 paragraph"

    analyst_version:
      content: "string (detailed, methodology included)"
      length: "2-3 paragraphs"

  storytelling_elements:
    narrative_arc: "string (beginning/middle/end structure)"
    hook: "string (attention-grabbing opening)"
    transition_phrases: ["array of connecting language"]
    conclusion: "string (memorable takeaway)"

  contextual_framing:
    historical_context: "string (how this fits into larger trends)"
    industry_context: "string (relevant external factors)"
    seasonal_factors: "string (time-of-year considerations)"

  uncertainty_communication:
    confidence_intervals: "string (if statistical)"
    assumptions: ["array of key assumptions"]
    alternative_interpretations: "string (other ways to view data)"

  call_to_action:
    primary_cta: "string (main recommended action)"
    secondary_options: ["array of alternative actions"]
    no_action_consequence: "string (what happens if nothing changes)"
```

=== INSIGHT LANGUAGE PATTERNS ===

**Opening Phrases**:
- Positive: "Strong performance in...", "Notable growth in...", "Impressive gains..."
- Negative: "Concerning decline in...", "Performance gap in...", "Challenges emerging in..."
- Neutral: "Stable performance in...", "Mixed results in...", "As expected..."
- Surprising: "Unexpected surge in...", "Contrary to trends...", "Breaking pattern..."

**Evidence Language**:
- "The data shows...", "Analysis reveals...", "Metrics indicate..."
- "Specifically, {{metric}} reached {{value}}, representing {{context}}"
- "This represents a {{magnitude}} {{direction}} from {{baseline}}"

**Causation vs Correlation**:
- Definitive: "This was caused by...", "The driver was..."
- Probable: "Likely due to...", "Appears to be driven by..."
- Correlative: "Coincides with...", "Corresponds to..."
- Uncertain: "Potential factors include...", "Could be influenced by..."

=== EXAMPLES ===

**Example 1: E-Commerce Performance Summary**
- data_context: "monthly sales performance dashboard"
- audience_role: "VP of Sales"
- business_domain: "online retail"
- analysis_type: "performance"
- time_period: "November 2024"
- primary_metrics: ["revenue", "conversion rate", "average order value"]
- primary_audience: "executive"
- technical_level: "high-level"

Output:
```yaml
insight_summary:
  headline:
    primary_finding: "November revenue surged 23% to $2.1M, driven by record-breaking Black Friday conversion rates."
    impact_statement: "This is the strongest month-over-month growth in 18 months and puts us 8% ahead of our Q4 target."
    urgency_indicator: ""

  executive_summary:
    format: "paragraph"
    word_count: "85 words"
    content: "November delivered exceptional performance with revenue reaching $2.1M, up 23% from October and 34% year-over-year. The surge was powered by our Black Friday campaign, which achieved a 4.8% conversion rate - nearly double our typical 2.5%. Average order value also climbed to $127, a 12% increase. Mobile conversion improved significantly, suggesting our app redesign is paying dividends. With two strong months remaining in Q4, we're on track to exceed our annual target by 5-7%."
    key_numbers: ["$2.1M revenue (+23%)", "4.8% conversion rate (92% increase)", "$127 avg order (+12%)"]

  detailed_narrative:
    introduction:
      opening: "November 2024 marks a turning point in our Q4 performance trajectory."
      scope: "This analysis covers all sales transactions across web and mobile channels from November 1-30, 2024."
      timeframe: "30-day period with 2,847 orders from 59,473 sessions"

    key_findings:
      - finding_id: 1
        finding_type: "positive"
        headline: "Revenue reached $2.1M, representing 23% month-over-month growth and our strongest performance since Q2 2023."
        evidence:
          primary_metric: "$2,147,392 in total revenue"
          comparison: "+$402,847 vs October 2024 (+23%), +$544,219 vs November 2023 (+34%)"
          magnitude: "This is the largest month-over-month dollar increase we've seen since launching the premium product line."
        explanation: "Growth was driven by three factors: 1) Highly successful Black Friday promotion (Nov 24-27) which generated $487K in 4 days, 2) Improved mobile conversion following October's app redesign, and 3) Stronger average order values as customers purchased bundled products."
        implications: "If we maintain even 60% of this momentum through December, we'll exceed our annual revenue target and finish the year with strong growth trajectory heading into 2025."
        confidence: "High - this growth is supported by multiple metrics and clear attribution to specific initiatives."

      - finding_id: 2
        finding_type: "positive"
        headline: "Mobile conversion rate jumped to 3.2%, closing the historical gap with desktop performance."
        evidence:
          primary_metric: "3.2% mobile conversion rate"
          comparison: "+1.1 percentage points vs October, approaching desktop's 3.8%"
          magnitude: "52% relative improvement in mobile conversion"
        explanation: "The October app redesign streamlined the checkout flow from 5 steps to 3, and introduced Apple Pay/Google Pay for faster payment. Mobile now accounts for 58% of sessions and 41% of revenue, up from 33% revenue share in October."
        implications: "Our mobile-first strategy is working. As mobile conversion approaches desktop parity, we should accelerate mobile-specific features and marketing."
        confidence: "High - clear correlation with app redesign deployment and sustained improvement across the month."

    trends_and_patterns:
      - trend_id: 1
        trend_type: "upward"
        description: "Three consecutive months of conversion rate improvement across all channels"
        duration: "September through November 2024"
        strength: "Strong - each month showed 15%+ relative improvement"
        supporting_data: "Sept: 2.1%, Oct: 2.5%, Nov: 3.4% (blended conversion rate)"

    contributing_factors:
      - factor: "Black Friday promotional campaign"
        impact: "Contributed approximately $487K (23% of monthly revenue) in 4-day period"
        evidence: "Nov 24-27 averaged $122K daily vs typical $45K daily for rest of month"

      - factor: "Mobile app redesign (launched Oct 15)"
        impact: "Estimated +$180K incremental revenue from improved mobile conversion"
        evidence: "Mobile conversion increased from 2.1% pre-redesign to 3.2% post-redesign"

  recommendations:
    immediate_actions:
      - action: "Analyze Black Friday campaign components to identify replicable tactics for December holiday push"
        rationale: "4.8% conversion rate during Black Friday weekend was exceptional - understanding which elements drove this could boost December performance"
        expected_outcome: "Could add $100-150K to December revenue if we can achieve 60-70% of Black Friday conversion rates during Dec 15-25 holiday shopping period"
        owner: "Marketing team"
        priority: "high"

      - action: "Increase mobile app marketing spend by 25% in December"
        rationale: "Mobile conversion now competitive with desktop, and mobile traffic is growing faster"
        expected_outcome: "Drive more high-converting mobile traffic to capitalize on improved app experience"
        owner: "Performance marketing team"
        priority: "high"

    strategic_considerations:
      - consideration: "Mobile conversion improvements suggest opportunity to shift from desktop-centric to mobile-first product development"
        recommendation: "Consider mobile-exclusive features or promotions in Q1 2025 to accelerate the channel mix shift"

  data_quality_notes:
    completeness: "Complete data for all transactions. Mobile attribution improved with new analytics implementation (Oct 2024)."
    methodology: "Revenue includes completed transactions only (excludes pending/cancelled). Conversion calculated as orders/sessions. Mobile vs desktop classified by device at checkout."
    limitations: "Black Friday results may not be representative of sustainable baseline performance. December will likely see different patterns due to holiday shopping behavior."
    confidence_statement: "Very high confidence in reported metrics. All findings verified across multiple data sources (GA4, Shopify, payment processor)."
```

**Example 2: Customer Churn Analysis**
- data_context: "quarterly customer retention dashboard"
- audience_role: "Customer Success Director"
- business_domain: "SaaS subscription service"
- analysis_type: "diagnostic"
- time_period: "Q4 2024"
- primary_metrics: ["churn rate", "customer lifetime value", "renewal rate"]
- primary_audience: "manager"
- technical_level: "business"
- sentiment: "negative"

Output:
```yaml
insight_summary:
  headline:
    primary_finding: "Customer churn accelerated to 6.2% in Q4, up from 4.1% in Q3, driven primarily by SMB segment dissatisfaction."
    impact_statement: "If this trend continues, we'll fall 12% short of our annual recurring revenue target and lose approximately $2.4M in projected revenue."
    urgency_indicator: "⚠️ Requires immediate attention"

  executive_summary:
    format: "bullets"
    content: "Q4 churn analysis reveals concerning trends requiring immediate intervention:"
    key_numbers:
      - "6.2% quarterly churn rate (+2.1pp from Q3) - highest in 2 years"
      - "SMB segment churn jumped to 11.3%, nearly double the company average"
      - "Primary reason cited: 'Product too complex for our needs' (43% of exit surveys)"
      - "Enterprise segment remains healthy at 1.8% churn"
      - "Estimated Q4 revenue loss: $847K from churned accounts"

  detailed_narrative:
    key_findings:
      - finding_id: 1
        finding_type: "negative"
        headline: "SMB segment churn crisis: 11.3% of small business customers cancelled in Q4, citing product complexity."
        evidence:
          primary_metric: "11.3% SMB quarterly churn rate"
          comparison: "vs 5.7% in Q3, vs 3.2% company-wide in Q3"
          magnitude: "98% increase in SMB churn rate quarter-over-quarter"
        explanation: "Exit survey analysis reveals systematic issues: 1) 43% of churning SMB customers cite 'product too complex', 2) 31% mention 'not enough value for price point', 3) Support tickets from SMB segment increased 67% in Q4. The September enterprise feature rollout added complexity that enterprise customers value but overwhelms smaller teams."
        implications: "SMB segment represents 42% of customer count but only 18% of revenue. However, SMB customers have historically been a growth pipeline to mid-market. Losing SMBs damages both current revenue and future expansion potential. At current rate, we'll churn 170+ SMB customers in Q1 2025."
        confidence: "High - pattern is clear across multiple data sources and confirmed by qualitative feedback"

    contributing_factors:
      - factor: "September product update prioritized enterprise features"
        impact: "Added UI complexity that benefits large teams but confuses small teams. Correlation between feature launch and SMB churn spike."
        evidence: "Churn rate pre-Sept: 5.1%, post-Sept: 8.7% for SMB segment. Enterprise churn improved from 2.3% to 1.8% in same period."

      - factor: "Price increase implemented in July"
        impact: "15% price increase for Starter plan (primarily SMB) coincided with value perception issues"
        evidence: "31% of churning SMBs mentioned price. Starter plan churn (13.2%) significantly higher than Professional plan churn (4.1%)"

  recommendations:
    immediate_actions:
      - action: "Launch 'SMB Mode' UI option that simplifies interface by hiding enterprise features"
        rationale: "Exit surveys clearly indicate complexity is the primary churn driver. A simplified interface could address 43% of churn reasons without removing features enterprise customers need."
        expected_outcome: "Could reduce SMB churn from 11.3% to target 6-7% range within 60 days if executed well. Estimated revenue preservation: $420K annually."
        owner: "Product team (eng lead: Sarah Chen)"
        priority: "high"

      - action: "Implement proactive CSM outreach to all SMB accounts that opened 5+ support tickets in last 30 days"
        rationale: "High support ticket volume is leading indicator of churn risk. Early intervention could prevent churns."
        expected_outcome: "Prevent estimated 20-30 at-risk accounts from churning in Q1 (value: $180-270K)"
        owner: "Customer Success team"
        priority: "high"

      - action: "Create SMB-specific onboarding flow focused on quick wins, not comprehensive training"
        rationale: "Current onboarding mirrors enterprise complexity. SMB customers need to see value faster with less learning curve."
        expected_outcome: "Improve first-month activation and reduce early-stage churn"
        owner: "Customer Success + Product teams"
        priority: "medium"

  call_to_action:
    primary_cta: "Convene cross-functional SMB retention task force by Dec 1 to execute immediate interventions and prevent Q1 revenue loss"
    secondary_options:
      - "Consider creating dedicated SMB product tier with simplified feature set and adjusted pricing"
      - "Analyze whether SMB segment is strategic fit or if resources should focus on mid-market and enterprise"
    no_action_consequence: "Continuing current trajectory, we project losing 170+ SMB customers in Q1 2025, representing $2.1M in annual recurring revenue and damaging our mid-market pipeline."
```

**Example 3: Website Performance Insights**
- data_context: "weekly website analytics"
- audience_role: "Digital Product Manager"
- business_domain: "content publishing"
- analysis_type: "trend"
- time_period: "Week of Nov 18-24, 2024"
- primary_metrics: ["page views", "engagement rate", "time on site"]
- primary_audience: "analyst"
- technical_level: "statistical"

Output:
```yaml
insight_summary:
  headline:
    primary_finding: "Thanksgiving week traffic surged 47% to 2.8M page views, with unusually high engagement on recipe and cooking content."
    impact_statement: "Seasonal content strategy is working - we should accelerate similar holiday-specific content production."

  detailed_narrative:
    key_findings:
      - finding_id: 1
        finding_type: "positive"
        headline: "Page views reached 2.8M, up 47% from typical weekly average, with recipe content driving disproportionate growth."
        evidence:
          primary_metric: "2,847,392 page views (Nov 18-24)"
          comparison: "vs 1,937,482 weekly average for Nov 1-17 (+47%), vs 2,102,394 same week 2023 (+35%)"
          magnitude: "Largest weekly traffic in site history, exceeding previous record by 12%"
        explanation: "Traffic spike concentrated in Food & Cooking vertical (73% of incremental traffic). Top 10 pages were all Thanksgiving recipes, with 'Classic Roast Turkey' receiving 147K views alone. Social referral traffic increased 203%, primarily from Pinterest and Facebook shares of recipe content. Pattern suggests strong product-market fit for seasonal, practical how-to content."
        implications: "Validates our hypothesis that timely, seasonal content drives engagement spikes. We should develop similar content calendars around other major holidays and events. Recipe content also has high Pinterest shareability, which compounds traffic through viral sharing."
        confidence: "High - pattern is consistent across multiple traffic sources and engagement metrics"

    trends_and_patterns:
      - trend_id: 1
        trend_type: "seasonal"
        description: "Annual Thanksgiving week traffic spike follows predictable pattern with 40-50% increase"
        duration: "Observed consistently over past 4 years"
        strength: "Strong seasonal pattern with p < 0.001 significance"
        supporting_data: "2021: +42%, 2022: +51%, 2023: +48%, 2024: +47%"

    recommendations:
      immediate_actions:
        - action: "Accelerate December holiday content production (Christmas recipes, gift guides, year-end roundups)"
          rationale: "If Thanksgiving content drove 47% traffic lift, similar December content could capture even larger holiday shopping/planning audience"
          expected_outcome: "Target 3.2-3.5M weekly page views for week of Dec 16-22 based on historical December patterns and this year's strong Thanksgiving performance"
          owner: "Editorial team"
          priority: "high"

        - action: "Create Pinterest-optimized versions of top 20 performing holiday recipes"
          rationale: "Pinterest drove 58% of social referral traffic during Thanksgiving week. Doubling down on this channel could extend content lifespan and drive sustained traffic."
          expected_outcome: "Build evergreen traffic source for next year's holiday season. Historical data shows Pinterest pins continue driving traffic for 12+ months."
          owner: "Social media + design teams"
          priority: "medium"
```

---

**Accessibility Requirements**: Insight summaries should use clear heading hierarchy for screen reader navigation. Avoid jargon or provide inline definitions. Use plain language when possible. Structure content with short paragraphs and bullet points for scannability. Ensure data visualizations referenced in summaries have text alternatives. Provide executive summaries at the top for users who need quick overview. Use semantic HTML for emphasis (not just visual styling).

**Psychological Principles**: Narrative structure aids comprehension and retention (storytelling effect). Leading with headline finding leverages primacy effect (information hierarchy). Contextual framing helps readers interpret data correctly (anchoring). Specific numbers increase credibility (precision bias). Action recommendations reduce analysis paralysis (decision support). Confidence statements manage expectations (uncertainty reduction). Comparative context enables benchmarking (social proof). Causal explanations satisfy human need to understand why (attribution theory).

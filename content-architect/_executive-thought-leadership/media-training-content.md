## Media Training & Interview Excellence System v1.0

**Purpose**: Design a comprehensive media training program that prepares executives, spokespeople, and subject matter experts to excel in media interviews—delivering clear messages, handling tough questions, avoiding pitfalls, and building positive media relationships that elevate brand reputation and thought leadership.

**Context**: Use this framework when preparing executives for media appearances (TV, podcasts, print, radio), building in-house spokesperson capabilities, preparing for product launches or crisis situations, or establishing systematic media training across leadership teams. Essential for companies increasing visibility, executives building personal brands, or organizations navigating high-stakes communications during fundraising, IPOs, or industry scrutiny.

**Strategic Frameworks Applied**:
- **Message Architecture System** - Core messages and supporting points across scenarios
- **Bridging Techniques** - Pivoting from difficult questions to key messages
- **STAR Storytelling Framework** - Situation, Task, Action, Result narrative structure
- **Question Anticipation Matrix** - Predicting and preparing for challenging questions
- **Nonverbal Communication Optimization** - Body language, voice, and presence
- **Media Relationship Management** - Building long-term journalist partnerships

---

## Variables

Define strategic variables for media training:

### Participant Profile Variables
- `{{participant_name}}`: Individual being trained (CEO, executive, SME)
- `{{current_role}}`: Title and responsibilities
- `{{media_experience}}`: None | Limited | Moderate | Extensive
- `{{personality_type}}`: Introverted | Extroverted | Analytical | Expressive
- `{{technical_depth}}`: Technical expert | Business generalist | Industry specialist
- `{{public_visibility}}`: Internal role | Industry-known | Public figure
- `{{training_goal}}`: Crisis prep | Thought leadership | Product launch | General skills

### Organization Context Variables
- `{{company_name}}`: Organization and brand
- `{{company_stage}}`: Startup | Growth | Enterprise | Public company
- `{{industry_sector}}`: Industry and market position
- `{{competitive_landscape}}`: Market dynamics and competitive threats
- `{{sensitive_topics}}`: Off-limits subjects or sensitive areas
- `{{key_messages}}`: 3-5 core messages company wants to communicate
- `{{brand_voice}}`: Tone and communication style (professional, friendly, authoritative, innovative)

### Media Environment Variables
- `{{media_types}}`: TV | Radio | Podcast | Print | Video | Live events
- `{{media_tier}}`: Local | Trade | Regional | National | International
- `{{journalist_relationships}}`: Existing relationships vs. cold media
- `{{media_landscape}}`: Friendly | Neutral | Skeptical | Hostile
- `{{interview_scenarios}}`: Planned appearances | Reactive opportunities | Crisis situations
- `{{target_outlets}}`: Specific publications, shows, or journalists

### Interview Preparation Variables
- `{{interview_type}}`: Pre-recorded | Live broadcast | Phone | In-person | Virtual
- `{{interview_length}}`: 5 min | 15 min | 30 min | Long-form (60+ min)
- `{{interview_format}}`: One-on-one | Panel | Debate | Town hall | Documentary
- `{{audience}}`: Consumer | B2B | Industry | Investors | General public
- `{{journalist_style}}`: Friendly | Aggressive | Technical | Entertainment-focused
- `{{risk_level}}`: Softba ll | Moderate challenge | High-risk / Adversarial

---

## Prompt

You are a media training specialist designing a comprehensive program for **{{participant_name}}**, **{{current_role}}** at **{{company_name}}** ({{company_stage}} in {{industry_sector}}). Your task is to prepare them for **{{media_types}}** interviews with **{{media_tier}}** outlets, enabling them to confidently deliver **{{key_messages}}**, handle challenging questions, avoid common pitfalls, and build productive media relationships—all aligned with **{{training_goal}}** and respecting **{{sensitive_topics}}** boundaries.

### Foundation: The Purpose of Media Interviews

**Why Media Appearances Matter:**

- **Credibility Building**: Third-party validation from respected outlets
- **Reach Amplification**: Access to journalist's audience (often larger than owned channels)
- **Thought Leadership**: Positioning as industry expert and authority
- **Brand Awareness**: Exposure for company, product, or ideas
- **Stakeholder Influence**: Reaching customers, investors, talent, partners through trusted source
- **Crisis Management**: Controlling narrative during challenging situations
- **SEO & Digital Footprint**: Permanent content assets with brand mentions and backlinks

**The Interview Transaction:**

Media interviews are exchanges:
- **Journalist Wants**: Newsworthy content, quotes, expert perspective, story angle
- **You Want**: Key messages delivered, positive brand impression, accurate representation
- **Success**: Both parties get what they need

Understanding this helps frame preparation: Give journalists what they need (good content) in a way that delivers what you need (key messages).

### Core Message Architecture

**The Rule of Three:**

Human brains remember information in groups of three. Identify your **3 Core Messages**:

**Core Message Framework:**

**Message 1**: Main point (most important thing you want audience to remember)
**Message 2**: Supporting point (adds depth or addresses audience concern)
**Message 3**: Call-to-action or future vision (what you want audience to do/believe)

**Example - SaaS CEO Interview:**
```
Message 1: "AI is transforming how enterprises make decisions, but only when it's simple enough for non-technical teams to use."

Message 2: "Traditional analytics tools fail because they're built for data scientists, not business users. We're seeing 10x adoption when tools are human-friendly."

Message 3: "The companies that win in the next decade will be those that democratize data access across their entire organization, not just the analytics team."
```

**Supporting Points** (Sub-messages under each core message):

For each core message, have 2-3 supporting points:
- Data/statistics that validate the message
- Customer stories or case studies
- Industry trends or research
- Personal experience or expertise
- Contrarian insight or differentiation

**Example Supporting Points for Message 1:**
- "In our research across 500 companies, 73% of employees say they need data to do their jobs but can't access or understand it."
- "We have a customer who went from 20 people using analytics to 2,000 when they switched to our platform."
- "The next generation of workers expects interfaces as simple as Instagram—B2B software needs to catch up."

**Bridging Language** (How to pivot to messages):

Master phrases that redirect from any question to your key messages:

- "That's a great question, and what's really important here is..."
- "Let me put that in context..."
- "What we're seeing in the market is..."
- "The bigger issue is..."
- "What that means for [audience] is..."
- "Here's what's interesting about that..."
- "That connects to..."

### Pre-Interview Preparation

**Interview Research Checklist:**

**About the Outlet/Journalist (2-4 hours before):**
- Read 5-10 recent articles by the journalist (understand their angle, writing style, areas of focus)
- Review outlet's audience and editorial stance
- Check journalist's social media (what issues do they care about?)
- Identify their beat (tech, business, policy, etc.) and expertise level
- Look for past interviews with other executives (how hard do they push?)
- Note any previous coverage of your company or competitors (what angle did they take?)

**About the Story (1-2 hours before):**
- What's the article/segment angle? (Pre-discussed with journalist or PR team)
- Who else are they interviewing? (Customers, competitors, analysts?)
- What's the news hook? (Why now? What makes this timely?)
- What questions did they preview? (If any - often journalists share general topics)
- What are they NOT covering? (Helps you offer additional angles)

**Anticipate Questions:**

Create a Q&A document with three tiers:

**Tier 1: Expected Questions (70% of interview)**
These are the obvious questions based on the story angle:
- "What problem does your product solve?"
- "How is your approach different from competitors?"
- "What results are customers seeing?"
- "Where do you see the market heading?"

Prepare 2-3 minute answers (will get cut down, but gives options)

**Tier 2: Challenging Questions (20% of interview)**
Tougher but fair questions that test your thinking:
- "Your competitor just raised $100M and claims they're doing the same thing—what's your response?"
- "This technology has been promised for 20 years—why now?"
- "How do you respond to criticism that this makes jobs obsolete?"
- "Your pricing is 3x higher than alternatives—why should customers pay that?"

Prepare bridging answers that acknowledge question, then pivot to message

**Tier 3: Worst-Case Questions (10% or less)**
Questions you hope don't come but need to be ready for:
- "I've heard rumors you're running out of money—comment?"
- "There are complaints online about X—what's going on?"
- "Your former employee said [negative thing]—is that true?"
- "Why should anyone trust you after [past controversy]?"

Prepare defensive answers that don't spiral into over-explaining

**Mock Interview Practice:**

**Setup:**
- Colleague or coach plays journalist (give them the Q&A document)
- Record the session (video if possible, audio minimum)
- Simulate real environment (sitting in studio-style setup)
- Real-time format (no stopping and restarting)
- 20-30 minute mock interview

**Debrief Focus:**
- Did you hit all 3 core messages?
- Did you answer questions concisely or ramble?
- Were there awkward pauses or filler words ("um", "like", "you know")?
- How was body language and eye contact?
- Did you fall into any traps or say anything off-message?
- What would you do differently?

**Do at least 2 mock interviews** before high-stakes appearances.

### Interview Techniques & Best Practices

**Answer Structure: The STAR Method**

For storytelling questions or examples:

**S**ituation: Set the context briefly
**T**ask: What needed to be done?
**A**ction: What did you/company do?
**R**esult: What was the outcome? (Data if possible)

**Example:**
*Question: "Can you give an example of how your product helps customers?"*

*Answer using STAR:*
"**Situation**: We had a customer, a 500-person company, where only their 5-person analytics team could create reports. Department heads would wait weeks for data.

**Task**: They needed to empower all managers to access data themselves without depending on the analytics team.

**Action**: They implemented our platform, which gave everyone natural-language query access—managers could just type questions like 'show me sales by region this month.'

**Result**: Within 60 days, 200 managers were running their own analyses. The analytics team shifted from report generation to strategic insights. Revenue-per-employee increased 15% that year because decisions were data-driven across the company."

*[Then bridge to message]: "This is exactly what we mean about democratizing data—it's not just nice to have, it's a competitive advantage."*

**The Power of Concise Answers:**

**Soundbite Thinking:**
- **Print**: Assume only 1-2 sentences will be quoted
- **TV/Radio**: 20-30 second answers ideal (longer gets cut)
- **Podcast/Long-form**: Can go 2-5 minutes, but still need concise core points

**Answer Formula:**
1. **Direct answer** to the question (don't dodge)
2. **One supporting point** (data, story, or example)
3. **Bridge** to key message if not already there

**Example:**
*Question: "What's your biggest challenge right now?"*

*Answer:*
"Our biggest challenge is educating the market. **[Direct answer]**

Most companies still think of analytics as a specialist function, so they don't consider broader adoption. We spend a lot of time showing executives the ROI of company-wide data access. **[Supporting point]**

But here's the exciting part—once companies see one peer doing this successfully, the adoption curve accelerates. We're at that inflection point now. **[Bridge to optimistic message]**"

**Bridging from Difficult Questions:**

**The Acknowledge-and-Pivot Technique:**

Don't ignore tough questions (looks defensive), but don't dwell either.

**Formula:**
1. Acknowledge the question briefly
2. Give minimum viable answer
3. Bridge to what you want to talk about

**Example:**
*Question: "Your competitor raised $200M last month—doesn't that put you at a disadvantage?"*

*Poor Answer* (defensive):
"Well, we don't need that much money, and more funding doesn't mean better product, and we're actually more capital efficient, and..."
*[Sounds worried, keeps focus on competitor]*

*Better Answer* (acknowledge-and-pivot):
"Competition validates the market—it shows enterprises are prioritizing this problem. **[Acknowledge]**

Our differentiation isn't funding, it's our approach. While others are building for data scientists, we're purpose-built for business users. That's where the bigger market opportunity is. **[Pivot to message]**

We're seeing this play out in win rates—when enterprises evaluate both options, we're winning 70% of the time based on ease-of-use. **[End with strength]**"

**Handling "Off-Limits" Topics:**

For **{{sensitive_topics}}** like:
- Unannounced products
- Financial details (private companies)
- Customer names without permission
- Personnel matters
- Ongoing litigation

**Deflection Techniques:**

**Technique 1 - Future-Focused:**
*Question: "What products are you launching next quarter?"*
*Answer: "We don't announce products ahead of launch, but I can tell you the direction—we're focused on making analytics even more accessible to non-technical users. You'll see innovation there soon."*

**Technique 2 - Principle Not Specifics:**
*Question: "What are your revenue numbers?"*
*Answer: "We don't disclose specific financials, but I can tell you we're growing triple-digits year-over-year and our unit economics are strong. The market validation we're seeing is exciting."*

**Technique 3 - Redirect to What You CAN Share:**
*Question: "Is [Big Company] a customer?"*
*Answer: "Our policy is not to name customers without their permission, but we're working with 15 Fortune 500 companies across industries including retail, financial services, and healthcare. The use cases are really exciting..."*

**Never say "No comment"** - it sounds like you're hiding something. Always offer what you CAN say.

### Nonverbal Communication & Executive Presence

**The Mehrabian Principle:**

Research shows communication impact comes from:
- 7% words (what you say)
- 38% vocal (how you say it)
- 55% nonverbal (body language, facial expressions)

You can say perfect words but undermine yourself with poor delivery.

**Body Language Dos and Don'ts:**

**DO:**
- **Sit forward slightly** - shows engagement and energy (not slouching back)
- **Maintain eye contact** - with interviewer, not camera (unless direct-to-camera format)
- **Open posture** - avoid crossed arms (looks defensive)
- **Hand gestures** - natural gesturing adds emphasis (but not wild flailing)
- **Smile when appropriate** - especially when greeting and on positive points
- **Steady energy** - consistent throughout interview (don't start strong and fade)

**DON'T:**
- **Fidget** - pen clicking, paper shuffling, leg bouncing (shows nervousness)
- **Cross arms** - looks defensive or closed-off
- **Look down/away** - breaks connection, suggests discomfort or dishonesty
- **Invade space** - leaning too far forward can be aggressive
- **Freeze** - being too still looks uncomfortable (some movement is natural)
- **Touch face excessively** - often unconscious nervous habit

**Voice & Vocal Presence:**

**Pace:**
- Most people speak too fast when nervous
- Aim for measured pace (not slow, but deliberate)
- Pause for emphasis (silence is powerful)
- Vary pace—speed up for excitement, slow down for importance

**Tone:**
- Match tone to content (serious topics need serious tone)
- Energy in voice (monotone loses audience)
- Emphasize key words in sentences
- Warmth (smile in your voice)

**Volume:**
- Loud enough to convey confidence (not tentative)
- Not so loud it seems aggressive
- Project from diaphragm, not throat

**Filler Words:**
- Minimize "um", "uh", "like", "you know", "so", "actually"
- Practice: Pause instead of filler (silence is better)
- Some filler is natural (perfection feels robotic), but excessive is distracting

**Practice Technique**: Record yourself answering questions, then watch with sound OFF first (see body language) and with eyes CLOSED second (hear vocal tics).

### Media Format-Specific Guidance

**TV/Video Interviews:**

**Technical Considerations:**
- Wardrobe: Solid colors (avoid busy patterns), blues/grays work well, no bright white or all black
- Makeup: Matte powder to reduce shine (even for men on TV)
- Background: Clean, professional, ideally branded if in office
- Lighting: Well-lit face (avoid backlighting), natural light or professional setup
- Camera position: Eye level, not looking up or down at camera

**On-Camera Presence:**
- **Who to look at**:
  - Local in-studio: Look at interviewer, not camera
  - Remote via Zoom/Skype: Look at camera (represents interviewer's eyes)
  - Direct-to-camera (rare): Look at lens like speaking to one person
- **Energy level**: 20% more energy than feels natural (camera flattens energy)
- **Movement**: Expressive but not excessive
- **Wardrobe details**: Wear your jacket/blazer even if uncomfortable (polished appearance)

**Podcast Interviews:**

**Audio-Only Dynamics:**
- **Voice is everything**: Vocal variety critical (can't see you)
- **Pacing**: Can be more conversational, longer answers work in long-form
- **Story details**: Paint verbal pictures (describe situations since no visuals)
- **Energy**: Still important but can be more relaxed than TV
- **Listening**: Good audio means you can hear when to jump in (don't talk over host)

**Podcast-Specific Prep:**
- Listen to 2-3 recent episodes (understand host's style, question patterns)
- Prepare longer stories (10-15 min possible vs. 30 sec on TV)
- Have water nearby (audio picks up dry mouth)
- Mute notifications (phone sounds, Slack pings)
- Use headphones (better audio, reduces echo)

**Print/Written Media:**

**Quote-Optimization:**
- Every sentence should be quotable (journalist picks the best)
- Think in headlines (punchy, memorable statements)
- Provide metaphors and analogies (makes you quotable)
- Give data/stats (journalists love numbers)

**Example Quotable Statements:**
- "If Excel is the calculator of data, we're building the iPhone—intuitive enough that anyone can use it."
- "We're seeing a 10x difference in adoption when the interface is designed for humans, not data scientists."
- "The winners in the next decade won't be the companies with the most data—it'll be those who get insights into the most hands."

**Fact-Checking:**
- Journalist may follow up to verify claims (have supporting data ready)
- Provide sources for stats you cite
- Offer to introduce customers for quotes (if allowed)

**Print Interview Flow:**
- Can be 30-60+ minutes (journalist needs deep quotes)
- More of a conversation than Q&A (relax and build rapport)
- May go off-record for background (clarify before saying sensitive things)
- Story may not run for weeks/months (don't forget what you said)

**Live Broadcast (TV/Radio):**

**High-Pressure Format:**
- **No do-overs**: Every word is permanent
- **Tight timing**: May get less time than planned (news breaks, running late)
- **Interruptions**: Host may cut you off to go to break (finish points fast)

**Preparation:**
- Have 3 key messages you can deliver in 30 seconds each (get them in no matter what)
- First answer is most important (may only get one question if time runs short)
- Have exit statement ready (last thought if abruptly ended)

**During Live:**
- Stay composed no matter what (camera is always on)
- Don't look frustrated if interrupted
- If technical issues, pause and wait for cue
- After interview ends, stay "on" until you're definitely off-air

### Crisis Interview Protocols

**High-Stakes Scenarios:**

When **{{interview_scenarios}}** include crisis situations (product failure, executive scandal, layoffs, financial trouble):

**Additional Preparation:**

**Legal Review:**
- All talking points reviewed by counsel
- Clear boundaries on what can/cannot be said
- Understand legal liability of different statements

**Message Discipline:**
- Extremely tight message control (no wandering into gray areas)
- Stay on script more than normal interviews
- Bridge aggressively from hostile questions

**Empathy First:**
- Lead with concern for affected parties
- Show humanity before defending company
- Never sound defensive or flippant about serious issues

**Crisis Answer Framework:**

**1. Acknowledge** - "We are aware of [situation]."
**2. Empathy** - "We deeply regret [impact]."
**3. Action** - "We immediately [response steps]."
**4. Prevention** - "We are implementing [safeguards]."
**5. Commitment** - "We will [ongoing commitment]."

**Example - Product Issue:**
*Question: "Your product injured several customers—what's your response?"*

*Answer:*
"First, our thoughts are with everyone who was affected. We take this extremely seriously. **[Empathy]**

The moment we learned of the issue, we initiated a voluntary recall of all affected units and engaged third-party safety experts to investigate. **[Action]**

Our investigation found [root cause], and we've implemented additional safety testing that goes beyond industry standards. **[Prevention]**

We're committed to the highest safety standards and earning back customer trust through our actions, not just our words. **[Commitment]**"

**What NOT to Do in Crisis Interviews:**
- Minimize the issue ("it's not that bad")
- Blame others (customers, vendors, employees)
- Speculate about causes before investigation complete
- Make promises you can't keep
- Show frustration or anger (even if questions are unfair)
- Say "no comment" (offer what you CAN say)

### Building Media Relationships

**Beyond Individual Interviews:**

**The Long Game:**
Strong media relationships create opportunities:
- Journalists call you for expert quotes (easy exposure)
- Favorable framing in stories (you're the trusted source)
- Heads-up about industry stories (prepare response)
- Introductions to other journalists
- Off-the-record background conversations (shape understanding)

**Relationship-Building Tactics:**

**1. Be a Resource (Not Just When You Want Coverage):**
- Provide expert commentary when journalists are working on stories (even if you're not the main subject)
- Share industry data or research
- Make introductions to other sources (customers, partners, industry experts)
- Offer background briefings on complex topics
- Respond quickly to journalist requests (builds reliability reputation)

**2. Respect Their Needs:**
- Understand deadlines (daily vs. monthly publication rhythm)
- Provide requested information promptly
- Don't pitch stories that aren't newsworthy
- Don't ask to review article before publication (almost always declined, and asking hurts relationship)
- Accept that not every pitch results in a story

**3. Build Personal Connection:**
- Remember journalist's beat and interests
- Follow them on social media, engage with their work
- Offer congratulations on major stories
- Occasional coffee or lunch (relationship, not transactional)
- Meet at industry conferences

**4. Become a Go-To Expert:**
- Consistent quality in interviews (journalists remember who gives good quotes)
- Domain expertise (deep knowledge beyond your company)
- Responsiveness (journalists on deadline need fast replies)
- Candor (willing to give real insights, not just corporate speak)

**Post-Interview Best Practices:**

**Immediately After:**
- Thank the journalist (email or LinkedIn message)
- If you promised follow-up info, send within 24 hours
- Don't ask when article will run (they often don't know yet)

**When Article Publishes:**
- Read carefully (check for inaccuracies)
- If significant error, politely request correction (provide specific factual error, not subjective disagreement)
- Share article on social media (tag journalist, thank them)
- Send to internal team and stakeholders
- Add to media coverage page on website

**If Article is Negative:**
- Assess if response is needed (major inaccuracy) or best left alone (draws more attention)
- Respond professionally if needed (never attack journalist personally)
- Learn from criticism (is there valid concern?)
- Don't let one negative experience end relationship (journalists respect those who can handle tough coverage)

---

## Output Schema

```yaml
media_training_program:
  participant_profile:
    name: "{{participant_name}}"
    role: "{{current_role}}"
    media_experience: "{{media_experience}}"
    personality: "{{personality_type}}"
    training_goal: "{{training_goal}}"

  core_messages:
    message_1:
      main_point: "[Most important message]"
      supporting_points:
        - "[Data/stat]"
        - "[Customer story]"
        - "[Industry trend]"

    message_2:
      main_point: "[Second key message]"
      supporting_points:
        - "[Supporting evidence]"
        - "[Example]"

    message_3:
      main_point: "[Call-to-action or vision]"
      supporting_points:
        - "[Future direction]"
        - "[Market opportunity]"

  bridging_language:
    - "That's a great question, and what's really important here is..."
    - "Let me put that in context..."
    - "What we're seeing in the market is..."
    - "The bigger issue is..."
    - "What that means for [audience] is..."

  pre_interview_prep:
    research_checklist:
      outlet_journalist:
        - "Read 5-10 recent articles"
        - "Review outlet's audience"
        - "Check journalist social media"
        - "Identify beat and expertise level"
        - "Review past interviews with others"

      story_angle:
        - "Understand article/segment angle"
        - "Know who else being interviewed"
        - "Identify news hook"
        - "Clarify any previewed questions"

    q_and_a_preparation:
      tier_1_expected:
        percentage: "70%"
        examples:
          - "What problem does your product solve?"
          - "How are you different from competitors?"
          - "What results are customers seeing?"
        preparation: "2-3 minute answers"

      tier_2_challenging:
        percentage: "20%"
        examples:
          - "How do you respond to competitor X's claims?"
          - "Why hasn't this worked before?"
          - "What about criticism that...?"
        preparation: "Bridging answers that acknowledge then pivot"

      tier_3_worst_case:
        percentage: "10%"
        examples:
          - "Rumors about financial issues?"
          - "Online complaints about X?"
          - "Former employee allegations?"
        preparation: "Defensive answers that don't over-explain"

    mock_interview:
      setup: "Colleague plays journalist with Q&A doc"
      recording: "Video preferred, audio minimum"
      duration: "20-30 minutes, real-time"
      debrief_focus:
        - "Did you hit all 3 core messages?"
        - "Concise or rambling answers?"
        - "Awkward pauses or filler words?"
        - "Body language and eye contact?"
        - "Any off-message moments?"
      frequency: "At least 2 mock interviews before high-stakes"

  interview_techniques:
    star_method:
      situation: "Set context briefly"
      task: "What needed to be done"
      action: "What you/company did"
      result: "Outcome with data if possible"

    answer_formula:
      step_1: "Direct answer to question"
      step_2: "One supporting point (data, story, example)"
      step_3: "Bridge to key message if needed"
      target_length:
        tv_radio: "20-30 seconds"
        print: "1-2 sentences likely quoted"
        podcast: "2-5 minutes for long-form"

    acknowledge_and_pivot:
      step_1: "Acknowledge question briefly"
      step_2: "Give minimum viable answer"
      step_3: "Bridge to preferred topic"
      example: "[See detailed examples in prompt]"

    off_limits_deflection:
      technique_1:
        name: "Future-focused"
        approach: "Don't announce specifics, share direction"
      technique_2:
        name: "Principle not specifics"
        approach: "General growth/trend without exact numbers"
      technique_3:
        name: "Redirect to what you CAN share"
        approach: "Explain policy, offer alternative information"

  nonverbal_communication:
    body_language_dos:
      - "Sit forward slightly (engagement)"
      - "Maintain eye contact with interviewer"
      - "Open posture (avoid crossed arms)"
      - "Natural hand gestures"
      - "Smile when appropriate"
      - "Steady energy throughout"

    body_language_donts:
      - "Fidgeting (pen clicking, leg bouncing)"
      - "Crossing arms (defensive)"
      - "Looking down/away"
      - "Invading space"
      - "Being too still (uncomfortable)"
      - "Excessive face touching"

    vocal_presence:
      pace: "Measured (not too fast), pause for emphasis, vary speed"
      tone: "Energy in voice, emphasize key words, warmth"
      volume: "Confident projection from diaphragm"
      filler_words: "Minimize um/uh/like/you know - pause instead"

    practice_technique: "Record yourself, watch with sound OFF (body language), listen with eyes CLOSED (vocal tics)"

  format_specific_guidance:
    tv_video:
      wardrobe: "Solid colors, blues/grays, avoid patterns, no bright white/all black"
      on_camera:
        local_studio: "Look at interviewer, not camera"
        remote_video: "Look at camera (your 'eyes' to interviewer)"
        direct_to_camera: "Look at lens like speaking to one person"
        energy: "20% more than feels natural (camera flattens)"

    podcast:
      audio_dynamics:
        - "Voice is everything - vocal variety critical"
        - "More conversational, longer answers OK"
        - "Paint verbal pictures (no visuals)"
        - "Good listening for when to jump in"
      prep:
        - "Listen to 2-3 recent episodes"
        - "Prepare longer stories (10-15 min possible)"
        - "Have water nearby"
        - "Mute notifications"
        - "Use headphones"

    print:
      quote_optimization:
        - "Every sentence quotable"
        - "Think in headlines"
        - "Provide metaphors and analogies"
        - "Give data/stats"
      interview_flow:
        - "30-60+ minute conversations"
        - "More relaxed dialogue"
        - "May go off-record (clarify first)"
        - "Story may not run for weeks"

    live_broadcast:
      high_pressure_prep:
        - "No do-overs - every word permanent"
        - "May get less time than planned"
        - "Host may interrupt for breaks"
        - "Have 3 messages in 30 sec each"
        - "First answer most important"
        - "Stay composed - camera always on"

  crisis_protocols:
    additional_preparation:
      - "Legal review of all talking points"
      - "Clear boundaries on what can/cannot be said"
      - "Extremely tight message control"
      - "Empathy-first approach"

    crisis_answer_framework:
      acknowledge: "We are aware of [situation]"
      empathy: "We deeply regret [impact]"
      action: "We immediately [response steps]"
      prevention: "We are implementing [safeguards]"
      commitment: "We will [ongoing commitment]"

    crisis_interview_donts:
      - "Don't minimize the issue"
      - "Don't blame others"
      - "Don't speculate before investigation complete"
      - "Don't make unkept promises"
      - "Don't show frustration/anger"
      - "Don't say 'no comment'"

  media_relationships:
    long_term_tactics:
      be_a_resource:
        - "Provide expert commentary (not just for your stories)"
        - "Share industry data/research"
        - "Make introductions to sources"
        - "Offer background briefings"
        - "Respond quickly to requests"

      respect_their_needs:
        - "Understand deadlines"
        - "Provide info promptly"
        - "Don't pitch non-newsworthy stories"
        - "Don't ask to review articles pre-publication"
        - "Accept not every pitch = story"

      build_personal_connection:
        - "Remember beat and interests"
        - "Follow and engage on social media"
        - "Congratulate on major stories"
        - "Occasional coffee/lunch"
        - "Meet at conferences"

      become_go_to_expert:
        - "Consistent quality in interviews"
        - "Deep domain expertise"
        - "Responsiveness"
        - "Candor and real insights"

    post_interview_best_practices:
      immediately_after:
        - "Thank journalist (email/LinkedIn)"
        - "Send promised follow-up within 24hrs"
        - "Don't ask when article will run"

      when_published:
        - "Read carefully for inaccuracies"
        - "Request correction if significant error"
        - "Share on social media, tag journalist"
        - "Send to internal team"
        - "Add to media coverage page"

      if_negative:
        - "Assess if response needed"
        - "Respond professionally if required"
        - "Learn from valid criticism"
        - "Don't end relationship over tough coverage"

  training_progression:
    session_1:
      duration: "2 hours"
      focus: "Message development, core concepts, Q&A prep"
      activities:
        - "Craft 3 core messages"
        - "Identify supporting points"
        - "Create anticipated Q&A"
        - "Practice bridging language"

    session_2:
      duration: "2 hours"
      focus: "Technique practice, nonverbal communication"
      activities:
        - "STAR storytelling practice"
        - "Body language and vocal presence review"
        - "First mock interview with feedback"

    session_3:
      duration: "2 hours"
      focus: "Format-specific prep, advanced techniques"
      activities:
        - "TV/podcast/print specific guidance"
        - "Crisis scenario practice"
        - "Second mock interview with feedback"

    ongoing:
      frequency: "Quarterly refreshers or before major appearances"
      activities:
        - "Message updates"
        - "New scenario practice"
        - "Review of past interview performance"

  measurement:
    interview_effectiveness:
      - "Message penetration: % of key messages that appear in coverage"
      - "Quote quality: Are your best quotes being used?"
      - "Accuracy: Minimal corrections needed post-publication?"
      - "Tone: Neutral to positive framing?"
      - "Journalist satisfaction: Do they come back to you?"

    skill_development:
      - "Mock interview scores improving"
      - "Filler words decreasing"
      - "Answer conciseness improving"
      - "Comfort level self-rating increasing"
      - "Ability to bridge to messages consistently"
```

---

## Examples

### Example 1: First-Time CEO - Tech Publication Profile

**Context**: CEO of Series B SaaS company, first major tech publication interview (TechCrunch), very technical product, needs to make accessible to business audience.

**Pre-Training Status**:
- Smart but very technical (explains product in engineering terms)
- Talks quickly when nervous
- Tends to give 5-minute answers to simple questions
- No prior media training

**Training Program**:

**Session 1 - Message Development:**
- Helped simplify technical concepts into business benefits
- Created 3 core messages focused on customer outcomes, not features
- Practiced "so what?" test (why should customers care?)
- Developed non-technical analogies

**Core Messages:**
```
1. "We're making enterprise data science as simple as asking questions in plain English—no PhD required."

2. "Companies are sitting on millions of dollars worth of insights they can't access because analytics is too complex. We're unlocking that value."

3. "The future belongs to companies that democratize data access across their organization, not just to specialists."
```

**Session 2 - Interview Technique:**
- Practiced concise answers (timer exercise - 30 seconds max)
- Worked on bridging from technical questions to business messages
- Identified filler words ("actually", "so") and practiced pausing instead
- First mock interview (recorded, reviewed)

**Session 3 - Final Prep:**
- Created comprehensive Q&A for likely TechCrunch questions
- Practiced handling competitor comparison questions
- Second mock interview simulating actual interview format
- Wardrobe and setting review (video background)

**Actual Interview Performance**:
- Hit all 3 core messages in 25-minute interview
- Answers concise and quotable
- Avoided technical jargon
- Article used 4 of his quotes (great pickup rate)
- CEO felt confident throughout

**Article Outcome**:
- Positive framing ("making data science accessible")
- Led with democratization message (his #1)
- Included customer example he provided
- Drove 2,500 website visits and 47 demo requests in 48 hours

**CEO Feedback**: "The training made me realize I was explaining what we built, not why it matters. Shifting to customer outcomes made all the difference."

### Example 2: Crisis Situation - Product Recall Interview

**Context**: VP Product at consumer electronics company, product battery issue causing overheating, preparing for local TV news interview about voluntary recall.

**Crisis Training Focus**:

**Legal Review Session:**
- Reviewed what could/couldn't be said (ongoing investigation limits)
- Identified key facts that were confirmed vs. speculative
- Practiced staying on message without speculating

**Message Development:**
```
1. Safety First: "Customer safety is our absolute top priority—that's why we initiated this voluntary recall immediately."

2. Swift Action: "We acted within 24 hours of learning about the issue—no hesitation when safety is involved."

3. Comprehensive Response: "We're offering full refunds or replacements, free return shipping, and extending warranties for everyone who purchased."
```

**Technique Practice:**
- Empathy-first approach (acknowledge customer concern before defending company)
- Bridging from "what went wrong?" to "what we're doing about it"
- Staying calm if reporter pushes on blame or liability
- Avoiding speculation ("investigation ongoing" without sounding evasive)

**Mock Interview Scenarios**:
Practiced aggressive reporter tactics:
- "Isn't this evidence of poor quality control?"
- "How many people could have been hurt?"
- "Why should customers trust you after this?"

**Actual TV Interview**:
- Reporter was tough but fair
- VP stayed composed, empathetic, factual
- Got all 3 messages across in 3-minute segment
- Didn't get defensive when challenged
- Ended with positive note (commitment to safety standards)

**Results**:
- Segment was balanced (included company response thoroughly)
- Social media sentiment 68% positive/neutral (better than expected for recall)
- Customer service calls more constructive (less angry) after seeing VP interview
- No follow-up negative coverage (story properly addressed)

**VP Feedback**: "The training prepared me for the worst questions, so when they came, I didn't panic. Empathy-first really worked."

### Example 3: Thought Leadership - Podcast Tour

**Context**: CMO of marketing tech company, launching podcast tour (15 appearances over 3 months) to establish thought leadership on marketing attribution.

**Training Approach**:

**Session 1 - Storytelling Development:**
- Created library of 15-20 stories (customer examples, personal experiences, industry observations)
- Organized stories by theme to match different podcast topics
- Practiced STAR method for consistent, compelling delivery
- Developed signature metaphors and analogies

**Example Story Bank:**
```
Story 1: "The $3M Attribution Mistake" - Customer who mis-attributed 40% of revenue
Story 2: "My Own Analytics Failure" - Personal experience with vanity metrics
Story 3: "The Last-Touch Attribution Myth" - Why industry standard is broken
[...15 more]
```

**Session 2 - Conversational Interview Style:**
- Podcast interviews more conversational than TV/print
- Practiced longer-form answers (2-5 minutes vs. 30 seconds)
- Worked on natural transitions between stories
- Identified when to lean technical vs. stay accessible (read the audience)

**Session 3 - Podcast-Specific Tactics:**
- Vocal energy without visual cues
- Describing visual concepts (no screen to point at)
- Handling host interruptions gracefully
- Strong episode endings (hosts often ask "final thoughts")

**Signature Framework Developed**:
"The Attribution Maturity Model" (4 levels) - became hook for podcast appearances and made CMO quotable.

**Results Over 15 Episodes**:
- Mentioned "Attribution Maturity Model" on 13 of 15 shows (message consistency)
- 8 hosts mentioned it in show titles/descriptions (framework resonated)
- Combined downloads: 180K (reach amplification)
- Website traffic from podcast referrals: 8,500 visits
- 127 marketing qualified leads (MQLs) directly attributed to podcast appearances
- LinkedIn followers: +4,200 (personal brand growth)
- 3 podcasts invited CMO back for second appearance (relationship building)

**CMO Feedback**: "Having the story bank meant I always had a relevant example ready. The 'Attribution Maturity Model' became my calling card."

### Example 4: Executive Visibility - Ongoing Media Training

**Context**: CFO of public company (recent IPO), needs ongoing media training as now regular spokesperson for earnings, financial news, investor commentary.

**Quarterly Training Program**:

**Q1 - Earnings Prep:**
- Practiced delivering good news without arrogance
- Prepared for tough questions on margins and burn rate
- Rehearsed "unexpected question" responses (didn't want to freeze on live call)
- Mock earnings call with analyst-style questions

**Q2 - CNBC Interview Prep:**
- First cable news appearance (different from earnings calls)
- Shorter answers needed (30 second soundbites)
- More aggressive interruption style
- Practiced staying composed when host cuts you off
- Wardrobe and on-camera presence refinement

**Q3 - Crisis Scenario Training:**
- Practiced handling hypothetical crisis (significant revenue miss)
- Delivering bad news with transparency and plan forward
- Managing investor and media confidence during downturn
- This quarter was "insurance policy" training (not active crisis)

**Q4 - IPO Anniversary Media:**
- Positive story (celebrating first year public)
- Prepared reflections on year as public company
- Practiced forward-looking vision (not just past wins)
- Multiple outlet prep (Bloomberg, WSJ, industry trades)

**Impact Over Year**:
- Earnings calls increasingly smooth and professional
- Media mentions: 45 over the year (CFO as company spokesperson)
- Zero major gaffes or misquotes (risk mitigation)
- CFO comfort level increased significantly (self-rated 4/10 to 8/10)
- Contributed to positive analyst coverage (communication quality noted)
- Stock price stability during volatility (trusted spokesperson helped)

**CFO Feedback**: "Ongoing training means I'm always sharp. The crisis prep in Q3 didn't seem useful then, but when we did miss targets in Year 2, I was ready."

### Example 5: Technical Expert - Industry Analyst Briefing

**Context**: CTO of cybersecurity company, preparing for Gartner analyst briefing (critical for Magic Quadrant positioning), very technical product, needs to communicate to business-savvy but not deeply technical analysts.

**Training Focus**:

**Message Translation:**
- Helped CTO articulate technical advantages in business benefit terms
- Created "technical detail on request" approach (overview first, depth if asked)
- Practiced recognizing when analyst wants more detail vs. high-level

**Core Messages:**
```
1. "Our approach detects threats 10x faster than traditional solutions—which means the difference between containing a breach and a company-wide incident."

2. "We're purpose-built for cloud-native architectures—legacy tools are retrofitting, we're native."

3. "Our customers are seeing 60% reduction in security incidents and 40% reduction in analyst workload—better security with fewer resources."
```

**Differentiation Practice:**
- Prepared comparison to 5 main competitors
- Identified unique technical advantages
- Translated each into customer business impact
- Avoided trash-talking competitors (unprofessional)

**Q&A Preparation:**
- Anticipated Gartner-specific questions (roadmap, market vision, execution)
- Prepared customer reference offers (analysts love talking to customers)
- Developed data/metrics to substantiate claims
- Prepared for "what keeps you up at night?" type questions

**Demo Strategy:**
- Planned 15-minute product demo showing key differentiators
- Focused on user experience (not just technical architecture)
- Prepared to go deeper on technical details if analyst interested

**Actual Briefing**:
- Analyst appreciated business-focused framing
- Asked for technical depth on 3 specific areas (CTO ready)
- Engaged positively with customer outcome stories
- Asked for 2 customer references (CTO had 5 prepared to offer)
- Briefing went 90 minutes (scheduled 60—positive signal)

**Results**:
- Gartner Magic Quadrant: Moved from "Niche Player" to "Challenger" (major improvement)
- Report cited "strong customer outcomes" and "technical innovation"
- Sales team used MQ positioning in 80% of enterprise deals
- Estimated $15M pipeline influence from improved Gartner positioning

**CTO Feedback**: "I learned that analysts don't need to understand every technical detail—they need to understand why it matters to customers. That reframing was the key."

---

## Success Metrics

- **Message Penetration**: 70%+ of interviews include at least 2 of 3 core messages in coverage
- **Quote Quality**: Your quotes used in 60%+ of print interviews (industry average ~40%)
- **Accuracy**: <5% correction requests needed post-publication (high accuracy)
- **Journalist Satisfaction**: 80%+ of journalists would interview you again (relationship success)
- **Participant Confidence**: Self-rated comfort increases 3+ points on 10-point scale post-training
- **Interview Performance**: Mock interview scores improve 40%+ from first to final session
- **Business Impact**: Media coverage drives measurable outcomes (traffic, leads, investor interest, talent applications)
- **Stakeholder Feedback**: Internal stakeholders (CEO, board, PR team) rate media performance 8+/10

---

## Best Practices

- **Prepare Obsessively**: The best interviews come from thorough preparation, not winging it
- **Message Discipline**: Return to core messages relentlessly (don't get pulled off-track)
- **Be Genuinely Helpful**: Journalists remember sources who provide value, not just pitches
- **Stay Concise**: Shorter answers are more quotable and show message discipline
- **Tell Stories**: Data + story is more memorable and compelling than data alone
- **Authentic Energy**: Be yourself (but 20% more energized)—forced personality feels fake
- **Listen Actively**: Answer the question asked, don't just deliver pre-canned answers
- **Build Relationships**: One interview is transaction, multiple interviews is relationship
- **Learn Continuously**: Review your interview performance, identify improvement areas
- **Stay Current**: Regular media training (at least annually) keeps skills sharp

---

## Common Pitfalls

- **Rambling Answers**: Talking for 5 minutes when 30 seconds would do
- **Too Technical**: Using jargon that loses non-expert audiences
- **Defensive Posture**: Coming across as combative when challenged
- **Going Off-Record Carelessly**: Assuming something is "off-record" without explicit agreement
- **Ignoring the Question**: Delivering talking points without addressing what was asked
- **Over-Promising**: Making commitments you can't keep in public forum
- **Reading from Script**: Sounding robotic instead of conversational
- **Neglecting Nonverbals**: Great words undermined by poor body language or vocal tone
- **Burning Bridges**: Getting angry at tough questions or negative coverage
- **Winging It**: Thinking you can improvise without preparation (almost always goes poorly)
- **No Follow-Through**: Promising information to journalist then not delivering

---

**License**: © 2025 Adedayo Agarau. Licensed under CC BY-SA 4.0.
**Compatibility**: Optimized for Claude Code (Anthropic), ChatGPT (OpenAI), Gemini (Google), Copilot (Microsoft).
**Maintainer**: Adedayo Agarau | https://github.com/Chinoscode | https://linkedin.com/in/adedayo-agarau

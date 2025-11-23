## Idiomatic Expression Handling Framework v1.0

**Purpose**: Identify, evaluate, and adapt idiomatic expressions, metaphors, cultural references, and colloquialisms to ensure content clarity across cultures and languages while maintaining intended meaning and tone.

---

**PROMPT:**

You are a cross-cultural content specialist managing idiomatic expressions in {{content_type}} from {{source_culture}} to {{target_culture}}.

=== CONTENT ANALYSIS ===
Content type: {{content_type}}
Source language/culture: {{source_culture}}
Target language/culture: {{target_culture}}
Brand voice: {{brand_voice}}
Tone: {{tone}} (formal/casual/playful/professional)
Idiomatic density: {{idiomatic_density}} (heavy/moderate/light)

=== EXPRESSION TYPES ===
Idioms present: {{idioms_present}}
Metaphors: {{metaphors}}
Cultural references: {{cultural_references}}
Wordplay/puns: {{wordplay}}
Slang/colloquialisms: {{slang}}
Proverbs/sayings: {{proverbs}}

=== ADAPTATION STRATEGY ===
Localization approach: {{localization_approach}} (literal/functional/transcreation)
Preserve creativity: {{preserve_creativity}} (yes/no/selectively)
Risk tolerance: {{risk_tolerance}} (conservative/moderate/adventurous)
Testing capability: {{testing_capability}}
Native speaker review: {{native_speaker_review}}

=== OUTPUT REQUIREMENTS ===

Generate idiomatic expression analysis and adaptation:

```yaml
expression_categories:
  idioms:
    definition: "Phrases whose meaning cannot be deduced from individual words"
    challenge: "Often culture-specific, don't translate literally"
    examples:
      english:
        - "It's raining cats and dogs (heavy rain)"
        - "Break a leg (good luck)"
        - "Piece of cake (very easy)"
        - "Hit the nail on the head (exactly right)"
        - "Spill the beans (reveal a secret)"

      spanish:
        - "Estar en las nubes (daydreaming)"
        - "Ser pan comido (very easy)"
        - "Tomar el pelo (to tease/joke)"

      french:
        - "Avoir le cafard (feeling depressed)"
        - "Poser un lapin (to stand someone up)"

      german:
        - "Jemandem die Daumen drücken (wish good luck)"
        - "Schwein haben (be lucky)"

  metaphors:
    definition: "Figurative language comparing unlike things"
    challenge: "Source metaphor may not resonate in target culture"
    examples:
      business_sports: "Home run, slam dunk, touchdown"
      navigation: "Roadmap, milestone, destination"
      nature: "Low-hanging fruit, seed of an idea, branching out"
      warfare: "Target, strategy, campaign, win"

  cultural_references:
    definition: "References to culture-specific events, people, media"
    challenge: "May be unknown or meaningless in target culture"
    examples:
      us_specific:
        - "Black Friday shopping"
        - "Super Bowl Sunday"
        - "Fourth of July celebration"
        - "Keeping up with the Joneses"

      uk_specific:
        - "Boxing Day sales"
        - "Mind the gap"
        - "Bob's your uncle"

      pop_culture:
        - "Netflix and chill"
        - "That's so last season"
        - "Going viral"

  wordplay_and_puns:
    definition: "Humor based on multiple meanings or similar sounds"
    challenge: "Rarely translatable, language-specific"
    examples:
      - "Time flies like an arrow, fruit flies like a banana"
      - "We're on a roll (baking pun)"
      - "Lettuce celebrate (vegetable pun)"
      - "Orange you glad to see me"

  slang_and_colloquialisms:
    definition: "Informal language, often generational or regional"
    challenge: "Ages quickly, may not exist in target language"
    examples:
      generational:
        - "Cool, groovy, rad, lit, fire, slaps"
        - "That's sick (means good)"

      regional:
        - "Y'all, you guys, youse"
        - "Pop, soda, coke (soft drink)"

adaptation_strategies:
  literal_translation:
    when_appropriate: "Expression exists similarly in target language"
    example:
      source: "Time is money (English)"
      spanish: "El tiempo es oro (Time is gold)"
      adaptation: "Slight variation but conveys same concept"

    risks:
      - "May sound awkward if not natural in target language"
      - "May lose intended impact"

  functional_equivalent:
    when_appropriate: "Target culture has similar idiom with same meaning"
    examples:
      source_english: "It's raining cats and dogs"
      french_equivalent: "Il pleut des cordes (It's raining ropes)"
      spanish_equivalent: "Llueve a cántaros (It's raining pitchers)"
      german_equivalent: "Es regnet Bindfäden (It's raining string)"

      source_english: "The early bird catches the worm"
      japanese_equivalent: "早起きは三文の得 (Early rising is worth three coins)"

  plain_language_replacement:
    when_appropriate: "No equivalent exists, clarity prioritized"
    examples:
      - source: "Break a leg!"
        plain: "Good luck!"

      - source: "It's a piece of cake"
        plain: "It's very easy"

      - source: "Hit the nail on the head"
        plain: "You're exactly right"

  transcreation:
    when_appropriate: "Creative recreation for equivalent emotional impact"
    requires: "Copywriting skill, cultural expertise"
    examples:
      source: "Got milk? (US dairy campaign)"
      spanish: "¿Y tú? ¿Ya tomaste leche?"
      analysis: "Complete recreation maintains impact, not literal translation"

  cultural_substitution:
    when_appropriate: "Replace culture-specific reference with target equivalent"
    examples:
      - source: "Black Friday shopping deals"
        china: "Singles' Day (11/11) shopping deals"
        europe: "Summer sales / Winter sales"

      - source: "Baseball metaphors (home run)"
        europe: "Football metaphors (goal / hat trick)"
        global_neutral: "Great success"

  retain_source_with_explanation:
    when_appropriate: "Source idiom is well-known or adds cultural flavor"
    examples:
      - "Think outside the box (a creative English expression)"
      - "RSVP (French: Répondez s'il vous plaît) to the event"

  remove_entirely:
    when_appropriate: "Expression adds no value, causes confusion"
    examples:
      - source: "We're not just blowing smoke"
        replace: "We're being honest" or remove qualifier entirely

decision_framework:
  evaluation_questions:
    - question: "Does this expression exist in target language/culture?"
      yes: "Consider literal translation or functional equivalent"
      no: "Continue evaluation"

    - question: "Is there a functional equivalent in target culture?"
      yes: "Use equivalent idiom"
      no: "Continue evaluation"

    - question: "Is the expression critical to meaning?"
      yes: "Use plain language replacement"
      no: "Consider removing entirely"

    - question: "Is creative impact important (marketing, brand voice)?"
      yes: "Consider transcreation"
      no: "Use plain language"

    - question: "Will target audience understand the source expression?"
      yes: "May retain with or without explanation"
      no: "Must adapt or replace"

  risk_assessment:
    low_risk:
      characteristics: "Universal concepts, clear context, non-critical"
      approach: "Plain language replacement safe"

    medium_risk:
      characteristics: "Important for tone, some cultural specificity"
      approach: "Functional equivalent or careful transcreation"

    high_risk:
      characteristics: "Brand-critical, marketing campaign, potential offense"
      approach: "Professional transcreation, native speaker testing"

common_problematic_expressions:
  business_jargon:
    english_source:
      - "Low-hanging fruit → Easy quick wins"
      - "Move the needle → Make significant progress"
      - "Circle back → Return to discuss later"
      - "Take it offline → Discuss privately"
      - "Synergy → Combined benefit"

    adaptation: "Often better to use plain language even in source language"

  sports_metaphors:
    us_centric:
      baseball:
        - "Hit it out of the park → Great success"
        - "Strike out → Fail"
        - "In the ballpark → Approximate"

      american_football:
        - "Touchdown → Success"
        - "Move the goalposts → Change requirements"

    global_sport:
      football_soccer:
        - "Score a goal → Achieve success (widely understood)"

  food_and_cooking:
    culturally_variable:
      - "That's the way the cookie crumbles → That's how things happen"
      - "Easy as pie → Very easy (pie-baking not universal)"
      - "Egg on your face → Embarrassed"

    adaptation: "Food metaphors often culture-specific, use plain language"

  religious_and_cultural:
    potentially_sensitive:
      - "God willing → Hopefully"
      - "Devil's advocate → Argue opposite view"
      - "Baptism by fire → Difficult first experience"

    approach: "Use secular alternatives for global audiences"

  generational_slang:
    aging_quickly:
      - "That's lit / fire / slaps → That's great"
      - "No cap → No lie"
      - "Ghosting → Suddenly cutting off communication"

    approach: "Use sparingly, update regularly, or avoid for longevity"

content_writing_guidelines:
  prevention:
    write_globally:
      - "Use clear, literal language from the start"
      - "Avoid idioms unless brand voice requires"
      - "Test if non-native speaker would understand"

    internationalization_first:
      - "Choose metaphors that work across cultures"
      - "Use universal concepts (time, nature, basic human experiences)"
      - "Avoid culture-specific references"

  documentation:
    track_expressions:
      - "Maintain glossary of idiomatic expressions"
      - "Document intended meaning and emotional impact"
      - "Provide context for translators"

    translator_notes:
      format: |
        Expression: "Break a leg"
        Literal meaning: "Injure your leg"
        Actual meaning: "Good luck"
        Usage context: "Said to performers before going on stage"
        Tone: "Friendly, casual, supportive"
        Adaptation guidance: "Use functional equivalent or plain language 'Good luck'"

  testing:
    back_translation:
      method: "Translate to target language, then back to source"
      reveals: "Whether meaning preserved or lost"

    native_review:
      essential: "Native speakers assess naturalness"
      questions:
        - "Does this sound natural?"
        - "Does it convey the intended meaning?"
        - "Is the tone appropriate?"
        - "Any unintended meanings or offense?"

  style_guide_inclusion:
    approved_expressions: "List of safe idioms that translate well"
    avoid_list: "Expressions to never use"
    replacement_guidance: "Plain language alternatives"

special_cases:
  brand_slogans:
    challenge: "Often rely on wordplay, cultural resonance"
    approaches:
      - "Complete transcreation (different slogan per market)"
      - "Retain English globally if well-known"
      - "Develop market-specific versions"

    examples:
      mcdonalds:
        english: "I'm lovin' it"
        global: "Retained in English in many markets"

      nike:
        english: "Just do it"
        global: "Strong, simple, translates reasonably well"

  product_names:
    pitfalls: "Names may have unfortunate meanings in other languages"
    famous_fails:
      - "Chevy Nova in Spanish markets (No va = doesn't go)"
      - "Colgate Cue toothpaste in France (cue = crude word)"

    testing: "Always test product names with native speakers"

  humor:
    challenge: "Most difficult to translate"
    cultural_specificity: "What's funny varies greatly by culture"
    approaches:
      - "Transcreate to achieve same emotional impact"
      - "Replace with humor that works in target culture"
      - "Accept that some humor won't translate, use straightforward copy"

  error_messages:
    avoid_idioms:
      not: "Oops! We dropped the ball"
      use: "Error: Unable to complete request"

    clarity_critical:
      reason: "Users need to understand and fix errors"
      approach: "Always use plain, clear language"
```

=== EXAMPLES ===

**Example 1: Marketing Email - English to Spanish (Latin America)**
- content_type: "promotional email"
- source_culture: "United States"
- target_culture: "Latin America (Mexico, Colombia, Argentina)"
- brand_voice: "Friendly, energetic, casual"

**Source English Copy**:
```
Subject: Don't miss out! These deals are fire! 🔥

Hey there!

We're pulling out all the stops for our biggest sale of the year. These prices are so low, you'll think we've lost our marbles!

Get in on the action before it's gone:
- 50% off everything
- Free shipping (no strings attached)
- The early bird catches the worm – shop now!

This is a limited-time offer, so don't drag your feet. Add items to your cart and hit the ground running!

P.S. New arrivals are dropping like hotcakes. First come, first served!
```

**Idiomatic Expression Analysis**:
```yaml
expressions_identified:
  - expression: "Don't miss out"
    type: "Common phrase"
    translation_ease: "Direct equivalent exists"
    adaptation: "No te lo pierdas"

  - expression: "These deals are fire"
    type: "Slang/generational"
    literal_spanish: "Estos descuentos son fuego (nonsensical)"
    adaptation: "Estas ofertas están increíbles / son espectaculares"

  - expression: "Pulling out all the stops"
    type: "Idiom"
    literal_meaning: "Removing organ stops"
    actual_meaning: "Making maximum effort"
    adaptation: "Hacemos todo lo posible" or "Damos todo"

  - expression: "Lost our marbles"
    type: "Idiom"
    literal_meaning: "Lost our marble toys"
    actual_meaning: "Gone crazy"
    spanish_equivalent: "Perdimos la cabeza"
    alternative: "Te parecerá increíble"

  - expression: "Get in on the action"
    type: "Colloquialism"
    adaptation: "Aprovecha la oportunidad"

  - expression: "No strings attached"
    type: "Idiom"
    adaptation: "Sin compromisos" or "Sin condiciones"

  - expression: "Early bird catches the worm"
    type: "Proverb"
    spanish_equivalent: "El que madruga encuentra todo cerrado (humorous opposite)"
    actual_equivalent: "Al que madruga Dios le ayuda"
    better_adaptation: "Los primeros en comprar" (plain language)

  - expression: "Don't drag your feet"
    type: "Idiom"
    adaptation: "No te demores" or "Date prisa"

  - expression: "Hit the ground running"
    type: "Idiom"
    adaptation: "Empieza de inmediato" (plain language)

  - expression: "Dropping like hotcakes"
    type: "Idiom"
    literal: "Pancakes fall?"
    actual_meaning: "Selling very quickly"
    spanish_equivalent: "Se venden como pan caliente (selling like hot bread)"

  - expression: "First come, first served"
    type: "Saying"
    spanish_equivalent: "Orden de llegada" or "Primero en llegar, primero en ser atendido"
```

**Adapted Spanish Copy**:
```
Asunto: ¡No te lo pierdas! Ofertas increíbles 🔥

¡Hola!

Hacemos todo lo posible para traerte la mejor oferta del año. Los precios están tan bajos que te parecerá increíble.

Aprovecha esta oportunidad antes de que termine:
- 50% de descuento en todo
- Envío gratis sin condiciones
- Los primeros en comprar tienen las mejores opciones – ¡compra ahora!

Esta es una oferta por tiempo limitado, así que no te demores. Agrega productos al carrito y empieza de inmediato.

P.D. Los nuevos productos se venden como pan caliente. ¡Primero en llegar, primero en ser atendido!
```

**Adaptation Rationale**:
- Removed generational slang ("fire") → clearer language
- Used functional Spanish equivalents where they exist
- Plain language for complex idioms without good equivalents
- Maintained energetic tone through word choice and punctuation
- Kept emoji (universally understood)

**Example 2: Software UI Error Message - English to Japanese**
- content_type: "error messages and help text"
- source_culture: "United States (tech industry, casual)"
- target_culture: "Japan"
- tone: "Source is casual/friendly, target should be polite/professional"

**Source English (with idioms)**:
```
Error Messages:
1. "Oops! Looks like we dropped the ball on that one."
2. "This feature is still in the oven. Check back soon!"
3. "Houston, we have a problem. Try again later."
4. "Looks like you're barking up the wrong tree. That file doesn't exist."
```

**Analysis and Adaptation**:
```yaml
message_1:
  source: "Oops! Looks like we dropped the ball on that one."
  idiom: "Dropped the ball (made a mistake)"
  cultural_ref: "Sports metaphor (American football/baseball)"
  tone_issue: "'Oops' very casual, may seem unprofessional in Japanese"

  japanese_adaptation:
    avoid: "ボールを落としました (literal: dropped the ball - confusing)"
    use: "申し訳ございません。エラーが発生しました。"
    translation: "We apologize. An error has occurred."
    rationale: "Polite, clear, professional tone appropriate for Japanese UI"

message_2:
  source: "This feature is still in the oven. Check back soon!"
  idiom: "In the oven (still being developed, like baking)"
  cultural_adaptation:
    avoid: "オーブンの中 (literal: in the oven - nonsensical)"
    use: "この機能は現在開発中です。もうしばらくお待ちください。"
    translation: "This feature is currently under development. Please wait a little longer."
    rationale: "Clear, respectful, no confusing metaphor"

message_3:
  source: "Houston, we have a problem. Try again later."
  cultural_ref: "Apollo 13 movie/historical event (US-specific)"
  recognition: "Well-known phrase globally, but may not resonate in Japan"

  japanese_adaptation:
    avoid: "ヒューストン、問題が発生しました (keeps reference, confusing)"
    use: "問題が発生しました。しばらくしてからもう一度お試しください。"
    translation: "A problem has occurred. Please try again later."
    rationale: "Removes cultural reference, maintains clarity"

message_4:
  source: "Looks like you're barking up the wrong tree. That file doesn't exist."
  idiom: "Barking up the wrong tree (pursuing wrong path)"
  origin: "Hunting dogs barking at wrong tree"

  japanese_adaptation:
    avoid: "間違った木に吠えています (literal: barking at wrong tree)"
    use: "そのファイルは存在しません。ファイル名をご確認ください。"
    translation: "That file does not exist. Please check the filename."
    rationale: "Direct, helpful, no confusing idiom"
```

**Improved Source English (Idiom-Free)**:
```
Error Messages:
1. "An error occurred. Please try again."
2. "This feature is coming soon. Check back later!"
3. "Unable to complete action. Please try again later."
4. "File not found. Please check the filename and try again."
```

**Rationale for Source Improvement**:
- Clearer even for native English speakers
- Easier to translate accurately
- More professional and helpful
- Reduces localization costs
- Better for non-native English speakers using English version

**Example 3: Blog Post - Idiom Replacement Guide**
- content_type: "educational blog about productivity"
- target_audience: "global, non-native English speakers"
- goal: "accessible to international readers"

**Before (Heavy Idiomatic Usage)**:
```
"Want to be productive? Here's the lowdown: First, tackle the low-hanging fruit. Don't bite off more than you can chew. When you hit a wall, don't throw in the towel – think outside the box! Keep your eye on the prize and you'll be ahead of the curve in no time. Remember, Rome wasn't built in a day, so don't put all your eggs in one basket. At the end of the day, if you play your cards right, you'll be sitting pretty!"
```

**After (Plain Language, Globally Accessible)**:
```
"Want to be productive? Here's what you need to know: First, start with the easiest tasks. Don't take on more work than you can handle. When you face a challenge, don't give up – try a creative solution! Stay focused on your goals and you'll make faster progress than others. Remember, big achievements take time, so work on multiple projects. Ultimately, if you make good decisions, you'll achieve success!"
```

**Idiom Replacement Table**:
```yaml
replacements:
  - idiom: "Here's the lowdown"
    plain: "Here's what you need to know"

  - idiom: "Low-hanging fruit"
    plain: "The easiest tasks"

  - idiom: "Bite off more than you can chew"
    plain: "Take on more work than you can handle"

  - idiom: "Hit a wall"
    plain: "Face a challenge"

  - idiom: "Throw in the towel"
    plain: "Give up"

  - idiom: "Think outside the box"
    plain: "Try a creative solution"

  - idiom: "Keep your eye on the prize"
    plain: "Stay focused on your goals"

  - idiom: "Ahead of the curve"
    plain: "Make faster progress than others"

  - idiom: "Rome wasn't built in a day"
    plain: "Big achievements take time"

  - idiom: "Don't put all your eggs in one basket"
    plain: "Work on multiple projects"

  - idiom: "At the end of the day"
    plain: "Ultimately"

  - idiom: "Play your cards right"
    plain: "Make good decisions"

  - idiom: "Sitting pretty"
    plain: "Achieve success"
```

---

**Accessibility Requirements**: Idiomatic expressions can create barriers for users with cognitive disabilities, non-native speakers, and screen reader users. Follow WCAG 2.1 Success Criterion 3.1.3 (Unusual Words) Level AAA - provide definitions for idioms and unusual words. Prefer plain language that is universally understandable. When idioms must be used, provide context clues. Test content with non-native speakers and users with cognitive disabilities to ensure comprehension.

**Psychological Principles**: Linguistic relativity affects how expressions are perceived (Sapir-Whorf hypothesis). Familiar language increases processing fluency (fluency effect). Unfamiliar idioms increase cognitive load (cognitive load theory). Plain language improves comprehension for all users (universal design). Cultural schema affects interpretation (schema theory). In-group language builds connection but excludes others (in-group/out-group dynamics).

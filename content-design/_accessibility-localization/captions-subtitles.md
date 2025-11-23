## Captions and Subtitles Framework v1.0

**Purpose**: Create accurate, synchronized captions and subtitles for video and audio content that serve deaf/hard-of-hearing users, language learners, and viewers in sound-sensitive environments.

---

**PROMPT:**

You are a captioning specialist creating accessible captions and subtitles for {{content_type}} targeting {{audience}} in {{viewing_context}}.

=== CONTENT ANALYSIS ===
Content type: {{content_type}} (video/audio/live stream/recorded presentation)
Duration: {{duration}}
Speaker count: {{speaker_count}}
Audio complexity: {{audio_complexity}} (clear/moderate background noise/multiple overlapping speakers)
Visual context importance: {{visual_context_importance}}
Language: {{source_language}}
Target subtitle languages: {{target_languages}}

=== AUDIENCE REQUIREMENTS ===
Primary audience: {{primary_audience}} (deaf/hard of hearing/language learners/general viewers)
Viewing context: {{viewing_context}} (sound-off mobile/accessibility requirement/educational)
Reading speed capability: {{reading_speed}} (slow/average/fast readers)
Technical literacy: {{technical_literacy}}
Cultural context: {{cultural_context}}

=== CAPTION TYPE SELECTION ===
Caption type needed: {{caption_type}}
- Closed Captions (CC): For deaf/hard of hearing - includes sound effects, speaker IDs
- Subtitles: Translation for hearing viewers - dialogue only
- SDH (Subtitles for Deaf and Hard of hearing): Subtitles + sound descriptions
- Open Captions: Burned into video, always visible
- Live Captions: Real-time, may have accuracy trade-offs

=== OUTPUT REQUIREMENTS ===

Generate comprehensive caption/subtitle content:

```yaml
caption_specifications:
  format: "WebVTT/SRT/TTML/SCC"
  language_code: "ISO 639-1 code (e.g., en, es, fr)"
  caption_type: "CC/Subtitles/SDH"

  timing_standards:
    reading_speed:
      characters_per_second: "20 CPS maximum (ideal: 17 CPS)"
      words_per_minute: "160-180 WPM maximum"
      calculation: "Characters / seconds displayed"

    duration_rules:
      minimum_display: "1 second (0.3s for single word)"
      maximum_display: "7 seconds (exceptions for scene without dialogue)"
      gap_between: "0.25 seconds minimum"

    synchronization:
      accuracy: "+/- 100ms from speech"
      scene_changes: "Captions don't cross scene cuts when possible"
      shot_changes: "New caption on new shot if speaker changes"

  line_breaks:
    maximum_lines: "2 lines per caption (3 for live captions)"
    maximum_characters_per_line: "42 characters (32 for mobile)"
    break_strategy: "At logical phrases, never mid-word"

    breaking_rules:
      - "Keep subject and verb together"
      - "Keep verb and object together"
      - "Keep modifiers with modified words"
      - "Break at punctuation when possible"
      - "Bottom line should be shorter or equal to top line (pyramid style)"

  positioning:
    default: "Bottom center"
    speaker_top_of_frame: "Top center (avoid covering face)"
    multiple_speakers: "Position near speaker when helpful"
    on_screen_text: "Move to avoid covering important visuals"

content_guidelines:
  verbatim_vs_edited:
    closed_captions: "Verbatim - all speech, stutters, false starts"
    subtitles: "Edited - remove filler words, smooth grammar"
    live_captions: "Light editing for clarity, real-time priority"

  speaker_identification:
    method: "Speaker labels, position, or color coding"

    formats:
      labeled: "[JOHN]: Dialogue text"
      position: "Position caption near speaker"
      color: "Different colors per speaker (ensure 4.5:1 contrast)"
      description: ">> Away from camera: Dialogue"

    when_needed:
      - "Speaker not visible on screen"
      - "Multiple speakers in scene"
      - "Speaker identity important to understanding"
      - "Voice-over narration"

    when_not_needed:
      - "Single speaker, clearly visible"
      - "Speaker obvious from context"

  sound_descriptions:
    format: "[SOUND DESCRIPTION]" or "(sound description)"

    include:
      - non_speech_audio: "[phone ringing]"
      - music: "[upbeat jazz music]"
      - tone_of_voice: "[sarcastically] Oh, great."
      - manner_of_speaking: "[whispers] Meet me outside."
      - laughter: "[laughs]"
      - significant_sounds: "[door slams]"

    exclude:
      - obvious_sounds: "Don't caption [speaking] when dialogue shown"
      - redundant_with_visual: "Don't caption [typing] if clearly shown typing"

  music_and_lyrics:
    background_music: "[soft piano music playing]"
    music_with_lyrics: "♪ Lyric line 1 ♪\n♪ Lyric line 2 ♪"
    music_ends: "[music fades]"

    tone_description:
      relevant: "[tense, ominous music]"
      mood_setting: "[cheerful ukulele music]"

  punctuation_and_formatting:
    emphasis:
      italics: "For voice-over, thoughts, emphasis"
      all_caps: "AVOID - difficult to read, perceived as shouting"
      bold: "Reserved for speaker labels in some styles"

    ellipsis:
      trailing: "Sentence continues to next caption..."
      leading: "...continuation from previous caption"
      interruption: "Wait, I think--"

    dashes:
      interruption: "I was going to say--"
      emphasis: "It was -- amazing"

    inaudible_speech:
      partial: "[inaudible]"
      word_guess: "[unintelligible]"
      foreign_language: "[speaking Spanish]"
      crosstalk: "[overlapping chatter]"

  numbers_and_symbols:
    numbers: "Spell out one through ten, use numerals for 11+"
    exceptions: "Use numerals for ages, times, dates, addresses, technical measurements"
    currency: "$50" not "fifty dollars"
    percentages: "50%" not "fifty percent"

subtitle_translation_guidelines:
  localization_vs_translation:
    translation: "Accurate meaning transfer"
    localization: "Cultural adaptation, idioms, measurements"

  condensation:
    target: "Translated text fits timing, ~80% of source duration"
    priority: "Meaning over word-for-word accuracy"
    omit: "Filler words, repetitions, less critical details"

  cultural_adaptation:
    idioms: "Translate meaning, not literal words"
    references: "Adapt pop culture references to target culture when needed"
    humor: "Explain puns/wordplay if untranslatable"
    measurements: "Convert imperial/metric based on target locale"

  reading_level:
    target: "B1/B2 level for educational content"
    simplification: "Use common words, shorter sentences"
    consistency: "Same translation for repeated terms"

technical_implementation:
  webvtt_format: |
    WEBVTT

    00:00:01.000 --> 00:00:03.500
    First caption appears here.

    00:00:04.000 --> 00:00:07.000
    Second caption with
    line break for readability.

    NOTE This is a comment

    00:00:08.000 --> 00:00:10.000 position:10%,line:10%
    Positioned caption to avoid blocking face.

  srt_format: |
    1
    00:00:01,000 --> 00:00:03,500
    First caption appears here.

    2
    00:00:04,000 --> 00:00:07,000
    Second caption with
    line break for readability.

  styling_options:
    font_family: "Proportional sans-serif (Arial, Helvetica) or monospaced (Courier)"
    font_size: "User adjustable, default ~5% of video height"
    background: "Semi-transparent black box, 60-80% opacity"
    text_color: "White (ensure 4.5:1 contrast with background)"
    edge_style: "Drop shadow or outline for readability on varied backgrounds"

quality_assurance_checklist:
  accuracy:
    - verbatim_dialogue: "All speech captured accurately"
    - speaker_attribution: "Speakers identified when needed"
    - sound_effects: "All significant sounds described"

  readability:
    - reading_speed: "Within 20 CPS limit"
    - line_length: "Within 42 character limit"
    - logical_breaks: "Natural phrase boundaries"

  synchronization:
    - timing_accuracy: "Within +/- 100ms"
    - scene_alignment: "Don't cross scene cuts"
    - proper_duration: "1-7 seconds per caption"

  technical:
    - format_validity: "File format valid and parsable"
    - encoding: "UTF-8 encoding"
    - special_characters: "Properly escaped"

accessibility_testing:
  - watch_with_sound_off: "Captions convey full meaning"
  - check_reading_pace: "Average viewer can read comfortably"
  - verify_contrast: "Text readable on all backgrounds"
  - test_on_mobile: "Readable on small screens"
```

=== EXAMPLES ===

**Example 1: Marketing Video with Music**
- content_type: "recorded video"
- duration: "90 seconds"
- speaker_count: "2 (dialogue), 1 (voice-over)"
- audio_complexity: "background music throughout, some overlapping dialogue"
- primary_audience: "deaf and hard of hearing"
- caption_type: "Closed Captions (CC)"

**Output**:
```
WEBVTT

00:00:01.000 --> 00:00:03.500
[upbeat pop music playing]

00:00:03.500 --> 00:00:06.000
SARAH: Have you tried
the new features yet?

00:00:06.500 --> 00:00:08.500
MIKE: Not yet,
but I've heard great things!

00:00:09.000 --> 00:00:11.500
SARAH: The interface is
so much more intuitive now.

00:00:12.000 --> 00:00:15.000
[Voice-over] Join over 10,000 users
who've already upgraded.

00:00:15.500 --> 00:00:17.500
♪ Making work feel like play ♪

00:00:18.000 --> 00:00:20.000
[music fades]
```

**Rationale**:
- Music described at start and end
- Speaker labels (SARAH, MIKE) distinguish speakers
- Voice-over in italics (format-dependent)
- Lyrics marked with ♪ symbols
- Maximum 42 characters per line
- Logical phrase breaks between lines
- Timing allows comfortable reading (17 CPS average)

**Example 2: Educational Lecture with Slides**
- content_type: "recorded presentation"
- duration: "15 minutes"
- speaker_count: "1 (professor)"
- audio_complexity: "clear speech, occasional paper rustling"
- visual_context_importance: "high - slide content critical"
- primary_audience: "students (some deaf, some ESL)"
- caption_type: "SDH (Subtitles for Deaf and Hard of hearing)"

**Output**:
```
WEBVTT

00:01:23.000 --> 00:01:26.000 position:10%
Today we'll explore
the three main principles.

NOTE: Caption positioned top to avoid covering slide text

00:01:27.000 --> 00:01:30.500 position:10%
First, redundancy
ensures data recovery.

00:01:31.000 --> 00:01:33.500 position:10%
Second, partitioning
improves performance.

00:01:34.000 --> 00:01:37.000 position:10%
And third, replication
provides high availability.

00:01:40.000 --> 00:01:42.000 position:10%
[pause, advancing slide]

00:01:42.500 --> 00:01:45.500 position:10%
Let's look at each
in more detail.
```

**Rationale**:
- Positioned at top (10%) to avoid covering slide content
- Sound description [pause, advancing slide] for orientation
- Verbatim speech for educational context
- Technical terms spelled correctly for reference
- Pauses represented for pacing awareness

**Example 3: Multilingual Product Demo**
- content_type: "live stream product demo"
- duration: "30 minutes"
- speaker_count: "3 (host, 2 guests)"
- audio_complexity: "moderate - occasional background noise from trade show floor"
- source_language: "English"
- target_languages: "Spanish, French, German"
- caption_type: "Live Captions + Translated Subtitles"

**English Live Captions**:
```
WEBVTT

00:05:12.000 --> 00:05:15.000
[HOST]: Let me show you
the dashboard interface.

00:05:16.000 --> 00:05:19.000
Here you can see real-time
analytics for your team.

00:05:19.500 --> 00:05:21.000
[background chatter]

00:05:21.500 --> 00:05:24.000
[GUEST 1]: How customizable
are these widgets?

00:05:24.500 --> 00:05:27.500
[HOST]: Completely customizable,
you can drag and drop.
```

**Spanish Subtitles (translated, edited)**:
```
WEBVTT

00:05:12.000 --> 00:05:15.000
[ANFITRIÓN]: Les muestro
la interfaz del panel.

00:05:16.000 --> 00:05:19.000
Aquí ven analíticas en tiempo real
para su equipo.

00:05:21.500 --> 00:05:24.000
[INVITADO 1]: ¿Qué tan personalizables
son estos widgets?

00:05:24.500 --> 00:05:27.500
[ANFITRIÓN]: Completamente personalizables,
puede arrastrar y soltar.
```

**Rationale**:
- Background chatter noted in English CC, omitted from translated subtitles (not essential)
- Spanish subtitles slightly condensed (omit "Here" in line 2) to fit timing
- Speaker labels translated for consistency
- Formal "usted" form used for professional context
- Technical terms (dashboard, widgets, drag and drop) kept in English or adapted to common Spanish tech usage

---

**Accessibility Requirements**: Must comply with WCAG 3.0 Success Criterion 1.2.2 (Captions - Prerecorded) Level A and 1.2.4 (Captions - Live) Level AA. Follow DCMP (Described and Captioned Media Program) captioning guidelines. Ensure minimum 4.5:1 contrast ratio for caption text against background. Support user customization of caption appearance (size, font, color, background). Provide accurate synchronization within 100ms. Include all speech and significant sound effects. Test with deaf/hard-of-hearing users and multiple screen sizes.

**Psychological Principles**: Cognitive load management through reading speed limits (working memory capacity). Redundancy coding through audio + visual channels (dual coding theory). Attention management through strategic positioning (selective attention). Comprehension support through logical segmentation (chunking). Inclusive design benefits all users (curb-cut effect).

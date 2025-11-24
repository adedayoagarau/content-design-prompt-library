## Date and Time Localization Framework v1.0

**Purpose**: Design date, time, and timezone content that adapts to local formats, calendars, and cultural conventions across global markets, ensuring clarity and reducing confusion.

---

**PROMPT:**

You are a date and time localization specialist designing temporal content for {{interface_type}} serving {{target_locales}} with {{time_complexity}}.

=== LOCALE REQUIREMENTS ===
Target locales: {{target_locales}}
Date format preferences: {{date_format_preferences}}
Time format preferences: {{time_format_preferences}}
Calendar systems: {{calendar_systems}}
Week start day: {{week_start_day}}
Timezone handling: {{timezone_handling}}

=== TEMPORAL CONTEXT ===
Content includes: {{temporal_content_types}} (dates/times/durations/ranges/recurring events)
Precision needed: {{precision_needed}} (year/month/day/hour/minute/second)
Time sensitivity: {{time_sensitivity}} (exact time critical/approximate/relative)
Historical dates: {{historical_dates}} (present only/past/future/wide range)
Business hours context: {{business_hours_context}}

=== TECHNICAL IMPLEMENTATION ===
Platform: {{platform}}
Localization library: {{localization_library}} (Moment.js/date-fns/Luxon/Intl.DateTimeFormat)
User timezone detection: {{timezone_detection}}
Storage format: {{storage_format}} (ISO 8601/Unix timestamp/UTC)
Display format: {{display_format_method}}

=== OUTPUT REQUIREMENTS ===

Generate localized date and time content:

```yaml
date_format_variations:
  regional_preferences:
    us_format:
      short: "12/31/2024 (MM/DD/YYYY)"
      medium: "Dec 31, 2024"
      long: "December 31, 2024"
      full: "Tuesday, December 31, 2024"

    european_format:
      short: "31/12/2024 or 31.12.2024 (DD/MM/YYYY)"
      medium: "31 Dec 2024"
      long: "31 December 2024"
      full: "Tuesday, 31 December 2024"

    iso_8601:
      format: "2024-12-31 (YYYY-MM-DD)"
      usage: "International standard, storage, technical contexts"
      benefit: "Unambiguous, sortable"

    asian_format:
      japan: "2024年12月31日 (YYYY年MM月DD日)"
      china: "2024/12/31 or 2024年12月31日"
      korea: "2024년 12월 31일"
      note: "Year first, logical hierarchy"

  ambiguity_avoidance:
    problem_dates:
      - date: "01/02/2024"
        us_interpretation: "January 2, 2024"
        european_interpretation: "February 1, 2024"
        solution: "Always use month name or ISO 8601"

      - date: "03/04/05"
        ambiguity: "Multiple possible interpretations"
        solution: "Never use 2-digit year"

    best_practices:
      - "Use month names instead of numbers when possible"
      - "Use 4-digit years always (2024, not 24)"
      - "Add context: 'Expires: Dec 31, 2024'"
      - "ISO 8601 (YYYY-MM-DD) for technical/data contexts"

time_format_variations:
  12_hour_format:
    regions: ["US", "Canada", "Australia", "Philippines", "Egypt"]
    format: "2:30 PM or 2:30 p.m."
    variants:
      - "2:30pm (no space)"
      - "2:30 PM (space, uppercase)"
      - "2:30 p.m. (periods)"
    midnight: "12:00 AM (midnight)"
    noon: "12:00 PM (noon)"
    confusion: "12 AM/PM often confused"

  24_hour_format:
    regions: ["Most of Europe", "Asia", "Latin America", "Middle East"]
    format: "14:30"
    variants:
      - "14:30 (colon)"
      - "14h30 (France)"
      - "14.30 (some regions)"
    midnight: "00:00 (24-hour starts at 00:00)"
    clarity: "No AM/PM confusion"

  time_separator:
    colon: "14:30 (most common)"
    h: "14h30 (France, some African countries)"
    period: "14.30 (Finland, some regions)"

  seconds_precision:
    include_when: "Critical precision needed"
    formats:
      - "2:30:45 PM"
      - "14:30:45"
    omit_when: "General scheduling, most UI contexts"

timezone_handling:
  timezone_display:
    explicit_timezone:
      - "2:30 PM EST (Eastern Standard Time)"
      - "14:30 UTC (Coordinated Universal Time)"
      - "9:00 PM JST (Japan Standard Time)"
      - "3:30 PM GMT+1"

    utc_offset:
      - "14:30 UTC+0"
      - "9:00 PM UTC+9"
      - "2:30 PM UTC-5"

    timezone_abbreviations:
      common: ["UTC", "GMT", "EST", "PST", "CST", "CET", "JST"]
      caution: "Some abbreviations ambiguous (CST = Central/China/Cuba)"
      prefer: "Full timezone name or UTC offset"

  user_timezone_adaptation:
    automatic_conversion:
      principle: "Display times in user's local timezone"
      example: "Event at 14:00 UTC → shows as '9:00 AM EST' to US East Coast user"
      implementation: "Use Intl.DateTimeFormat with user's timezone"

    timezone_indication:
      always_show: "When time is critical (meetings, deadlines)"
      format: "'2:30 PM (your time)' or '2:30 PM EST'"
      multiple_zones: "Show origin timezone for reference"

  relative_vs_absolute:
    relative_time:
      use_for: "Recent events, user activity"
      examples:
        - "Just now"
        - "5 minutes ago"
        - "2 hours ago"
        - "Yesterday"
        - "3 days ago"
      limits: "After 7 days, switch to absolute date"

    absolute_time:
      use_for: "Future events, historical events, precision needed"
      examples:
        - "Dec 31, 2024 at 2:30 PM"
        - "Tuesday, Jan 15 at 9:00 AM EST"

    combined:
      format: "Tomorrow at 2:30 PM (Dec 25)"
      benefit: "Relative for proximity, absolute for precision"

calendar_systems:
  gregorian:
    usage: "International standard, most digital systems"
    year_zero: "No year 0 (1 BCE → 1 CE)"
    months: "12 months, 28-31 days each"

  hijri_islamic:
    usage: "Islamic religious contexts, Saudi Arabia official"
    type: "Lunar calendar, 354-355 days per year"
    months: "12 months, 29-30 days each"
    year_reference: "622 CE (Hijra)"
    gregorian_equivalent: "1446 AH ≈ 2024-2025 CE"
    implementation:
      - "Offer Hijri calendar option in Islamic markets"
      - "Show both Gregorian and Hijri dates"
      - "Important for Ramadan, Hajj, Islamic holidays"

  hebrew:
    usage: "Jewish religious contexts, Israeli civil contexts"
    type: "Lunisolar calendar"
    year_reference: "3761 BCE (traditional creation date)"
    gregorian_equivalent: "5785 ≈ 2024-2025 CE"

  persian:
    usage: "Iran, Afghanistan"
    type: "Solar calendar"
    year_reference: "622 CE (Hijra, but solar)"
    accuracy: "More accurate than Gregorian"

  chinese:
    usage: "Chinese holidays, astrology"
    type: "Lunisolar calendar"
    year_naming: "Sexagenary cycle (60-year cycle)"

  buddhist:
    usage: "Thailand, Cambodia, Laos"
    year_reference: "543 BCE (Buddha's death/enlightenment)"
    gregorian_equivalent: "2567 BE ≈ 2024 CE"

week_start_conventions:
  sunday_first:
    regions: ["US", "Canada", "Brazil", "Israel", "many Middle Eastern countries"]
    calendar_grid: "Su Mo Tu We Th Fr Sa"

  monday_first:
    regions: ["Most of Europe", "Asia", "Australia", "ISO 8601 standard"]
    calendar_grid: "Mo Tu We Th Fr Sa Su"
    iso_8601: "Week starts Monday (day 1)"

  saturday_first:
    regions: ["Some Middle Eastern countries"]
    calendar_grid: "Sa Su Mo Tu We Th Fr"

  implementation:
    user_preference: "Allow user to select week start day"
    locale_default: "Default to user's locale convention"
    consistency: "Be consistent throughout application"

date_range_formatting:
  same_month:
    format: "Dec 24-31, 2024"
    not: "Dec 24, 2024 - Dec 31, 2024 (redundant)"

  different_months_same_year:
    format: "Dec 24, 2024 - Jan 5, 2025"
    or: "Dec 24 - Jan 5, 2025"

  different_years:
    format: "Dec 24, 2024 - Jan 5, 2025"
    always_show: "Both years for clarity"

  open_ended:
    format: "From Dec 24, 2024"
    or: "Dec 24, 2024 onwards"
    not: "Dec 24, 2024 - (confusing)"

  separators:
    en_dash: "Dec 24 – Dec 31 (preferred)"
    hyphen: "Dec 24 - Dec 31 (acceptable)"
    to: "Dec 24 to Dec 31 (clearest for clarity)"

duration_formatting:
  short_durations:
    format: "2h 30m or 2:30"
    examples:
      - "5 minutes"
      - "1h 15m"
      - "2:30 (2 hours 30 minutes)"

  long_durations:
    format: "3 days 5 hours"
    or: "3d 5h"
    examples:
      - "2 weeks"
      - "3 months 2 days"
      - "1 year"

  precision_levels:
    approximate: "about 2 hours"
    exact: "2 hours 34 minutes 12 seconds"
    choose_based: "User need and context"

special_date_references:
  relative_dates:
    today: "Today"
    tomorrow: "Tomorrow"
    yesterday: "Yesterday"

  this_week:
    format: "This Monday, This Friday"
    or: "Monday (if within current week)"

  next_last:
    format: "Next Tuesday, Last Wednesday"
    ambiguity: "'Next Monday' can mean different things"
    clarity: "Use specific date when ambiguous"

  holiday_references:
    localized: "Different holidays by culture"
    examples:
      - "Christmas: Dec 25 (Western Christian)"
      - "Eid al-Fitr: Variable (Islamic lunar)"
      - "Chinese New Year: Variable (lunisolar)"
      - "Diwali: Variable (Hindu lunar)"

recurring_events:
  frequency_patterns:
    daily: "Every day, Weekdays only, Every other day"
    weekly: "Every Monday, Every week on Monday and Wednesday"
    monthly: "Every 1st of the month, Every last Friday"
    yearly: "Every year on Dec 25, Every year in December"

  localization_considerations:
    day_names: "Localize day names (Monday → Lundi → 月曜日)"
    month_names: "Localize month names (January → Janvier → 1月)"
    ordinals: "Localize ordinal numbers (1st → 1er → 1日)"

business_hours:
  display_format:
    simple: "9:00 AM - 5:00 PM"
    with_days: "Monday-Friday: 9:00 AM - 5:00 PM"
    split: "Mon-Fri: 9 AM - 5 PM, Sat: 10 AM - 2 PM"

  timezone_consideration:
    always_include: "9:00 AM - 5:00 PM EST"
    user_conversion: "Show in user's timezone with original timezone"
    example: "9:00 AM - 5:00 PM EST (6:00 AM - 2:00 PM your time)"

  cultural_differences:
    work_week:
      - "Monday-Friday (most Western countries)"
      - "Sunday-Thursday (many Middle Eastern countries)"
      - "Monday-Saturday (some Asian businesses)"

    breaks:
      - "Lunch break explicit in some cultures"
      - "Siesta in some Mediterranean/Latin American countries"

content_writing_guidelines:
  be_explicit:
    not: "Expires on 01/02"
    use: "Expires on Feb 1, 2024"

  add_context:
    not: "2:00 PM"
    use: "Meeting at 2:00 PM EST on Tuesday, Dec 24"

  relative_with_absolute:
    format: "Tomorrow (Dec 25) at 2:00 PM"
    benefit: "Immediate understanding + precision"

  avoid_ambiguity:
    - "Use month names, not numbers"
    - "Use 24-hour format internationally or specify AM/PM clearly"
    - "Always show timezone for cross-timezone coordination"
    - "Show day of week for future dates"

  accessibility:
    screen_readers: "Use semantic time elements"
    html: "<time datetime='2024-12-31T14:30:00-05:00'>Dec 31, 2024 at 2:30 PM EST</time>"
    benefit: "Machine-readable + human-readable"

implementation_examples:
  javascript_intl:
    date_formatting: |
      const date = new Date('2024-12-31');

      // US format
      new Intl.DateTimeFormat('en-US').format(date);
      // "12/31/2024"

      // UK format
      new Intl.DateTimeFormat('en-GB').format(date);
      // "31/12/2024"

      // Long format
      new Intl.DateTimeFormat('en-US', {
        dateStyle: 'full'
      }).format(date);
      // "Tuesday, December 31, 2024"

    time_formatting: |
      const date = new Date('2024-12-31T14:30:00');

      // US 12-hour
      new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      }).format(date);
      // "2:30 PM"

      // European 24-hour
      new Intl.DateTimeFormat('de-DE', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
      }).format(date);
      // "14:30"

    relative_time: |
      const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

      rtf.format(-1, 'day');    // "yesterday"
      rtf.format(1, 'day');     // "tomorrow"
      rtf.format(-3, 'hour');   // "3 hours ago"
      rtf.format(2, 'week');    // "in 2 weeks"
```

=== EXAMPLES ===

**Example 1: Global Event Scheduling Platform**
- interface_type: "web application for international events"
- target_locales: "Global (US, UK, Germany, Japan, Saudi Arabia)"
- time_complexity: "cross-timezone coordination critical"

**Event Display**:
```yaml
event_details:
  event_name: "Global Product Launch"

  organizer_timezone: "US Pacific (UTC-8)"
  event_time_utc: "2024-12-31T22:00:00Z"

  display_by_locale:
    us_pacific:
      format: "Tuesday, Dec 31, 2024 at 2:00 PM PST"
      context: "Your local time"

    us_eastern:
      format: "Tuesday, Dec 31, 2024 at 5:00 PM EST"
      context: "Your local time (3 hours ahead of event timezone)"

    uk:
      format: "Tuesday, 31 December 2024 at 22:00 GMT"
      context: "Your local time (10 hours ahead of event timezone)"

    germany:
      format: "Dienstag, 31. Dezember 2024 um 23:00 MEZ"
      context: "Ihre lokale Zeit (11 Stunden vor Veranstaltungszeitzone)"

    japan:
      format: "2024年12月31日（火）7:00 JST"
      context: "あなたの現地時間（イベントタイムゾーンより15時間進んでいます）"
      note: "January 1 in Japan when Dec 31 in US"

    saudi_arabia:
      format: "الثلاثاء، 31 ديسمبر 2024 الساعة 01:00 بتوقيت السعودية"
      gregorian: "31 Dec 2024"
      hijri: "27 جمادى الآخرة 1446 هـ (approx)"
      context: "الوقت المحلي (11 ساعة قبل المنطقة الزمنية للحدث)"

  add_to_calendar:
    ics_file: "Uses UTC with TZID for accurate conversion"
    user_benefit: "Automatically converts to user's calendar timezone"
```

**Example 2: Booking System with Business Hours**
- interface_type: "appointment booking app"
- target_locales: "US, France, UAE"
- includes: "business hours, availability, appointment scheduling"

**Business Hours Display**:
```yaml
location_new_york:
  locale: "en-US"
  timezone: "America/New_York (EST/EDT)"
  business_hours:
    display: "Monday-Friday: 9:00 AM - 6:00 PM EST"
    saturday: "10:00 AM - 2:00 PM EST"
    sunday: "Closed"

location_paris:
  locale: "fr-FR"
  timezone: "Europe/Paris (CET/CEST)"
  business_hours:
    display: "Lundi-Vendredi : 9h00 - 18h00 CET"
    samedi: "10h00 - 14h00 CET"
    dimanche: "Fermé"

location_dubai:
  locale: "ar-AE"
  timezone: "Asia/Dubai (GST, UTC+4)"
  business_hours:
    display: "الأحد-الخميس: 9:00 - 18:00 بتوقيت الخليج"
    work_week: "Sunday-Thursday (Friday-Saturday weekend)"
    friday: "مغلق"
    saturday: "مغلق"

appointment_booking:
  user_in_london:
    viewing: "New York location"
    display: "Available slots in your time (GMT):"
    slots:
      - local_display: "Monday, Jan 15 at 2:00 PM GMT"
        original_timezone: "(9:00 AM EST)"
        clarity: "Shows both user time (primary) and location time (reference)"
```

**Example 3: Social Media Post Timestamps**
- interface_type: "social media platform"
- target_locales: "Global"
- includes: "post timestamps with relative time"

**Timestamp Display Logic**:
```yaml
post_timestamp:
  stored: "2024-12-31T14:30:00Z (UTC)"

  relative_time_stages:
    just_posted:
      range: "0-1 minute"
      display: "Just now"

    minutes_ago:
      range: "1-59 minutes"
      display: "5 minutes ago, 45 minutes ago"

    hours_ago:
      range: "1-23 hours"
      display: "2 hours ago, 23 hours ago"

    yesterday:
      range: "24-48 hours"
      display: "Yesterday"
      or: "Yesterday at 2:30 PM"

    this_week:
      range: "2-6 days"
      display: "Monday, Tuesday, etc."
      or: "Monday at 2:30 PM"

    absolute_date:
      range: "7+ days"
      display: "Dec 24, 2024"
      or: "Dec 24, 2024 at 2:30 PM"

    years_ago:
      range: "Different year"
      display: "Dec 31, 2023"

  localization:
    language_adaptation:
      english: "5 minutes ago"
      french: "Il y a 5 minutes"
      spanish: "Hace 5 minutos"
      japanese: "5分前"
      arabic: "منذ 5 دقائق"

    hover_tooltip:
      shows: "Full absolute timestamp"
      format: "Tuesday, December 31, 2024 at 2:30:45 PM EST"
      benefit: "Relative time for scanning, absolute for precision"
```

---

**Accessibility Requirements**: Date and time content must comply with WCAG 3.0 Level AA. Use semantic HTML5 `<time>` element with machine-readable `datetime` attribute for screen readers and assistive technologies. Provide both relative and absolute time formats. Ensure timezone is always clear when time is critical. Use clear, unambiguous date formats (month names preferred over numbers). Support user preferences for date/time format. Test with screen readers in multiple locales to ensure natural announcement.

**Psychological Principles**: Familiar formats reduce cognitive load (processing fluency effect). Clear timezone indication reduces anxiety (uncertainty reduction). Relative time feels more immediate (recency effect). Absolute dates provide certainty (need for closure). Cultural conventions build trust (schema congruence). Unambiguous formats prevent errors (error prevention principle).

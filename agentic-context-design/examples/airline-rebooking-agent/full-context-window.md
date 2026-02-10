# Full Context Window — Airline Rebooking Agent at Step 4

This document shows the complete context window layout for the airline rebooking agent at **Step 4: Search alternative flights**, illustrating how each section of the context window is populated during a live task.

**Total estimated tokens: ~20,110**

---

## 1. System Prompt (~1,800 tokens)

```
You are an airline customer service agent specializing in flight rebooking. You help passengers who have been affected by cancellations, delays, or schedule changes find alternative flights and complete their rebooking.

PERSONA:
- Professional, empathetic, and efficient
- You acknowledge frustration without over-apologizing
- You proactively offer relevant options without overwhelming the passenger
- You explain fare differences and compensation clearly

GLOBAL CONSTRAINTS:
- Never share other passengers' personal information
- Always verify passenger identity before accessing booking details
- Never process payments without explicit passenger confirmation
- Mask credit card numbers — show only last 4 digits
- Never rebook onto a flight that departs in less than 60 minutes
- All fare differences over $0 require passenger approval
- Compensation must follow the published compensation matrix — do not improvise amounts
- If the passenger requests to speak with a human agent, escalate immediately
- Log all rebooking actions to the audit trail
- Do not access or modify bookings outside the current session's scope

COMMUNICATION STYLE:
- Use clear, direct language
- Present options in a structured format (numbered list)
- Always state fare differences explicitly before asking for confirmation
- Summarize the final booking details before closing
```

## 2. Tool Definitions (~3,200 tokens)

```
See tool-definitions.json for full definitions. Summary:

1. lookup_passenger — Look up passenger by PNR or name + date
2. view_booking_details — View full booking details for a PNR
3. lookup_flight_status — Check status of a specific flight
4. search_alternative_flights — Search for alternative flights on a route
5. calculate_fare_difference — Calculate fare difference between bookings
6. rebook_passenger — Execute the rebooking (write operation)
7. process_compensation — Issue compensation per policy
8. issue_refund — Process a refund to original payment method
9. access_payment_method — Retrieve masked payment method on file

Tool risk levels: lookup/view/search = Low, calculate = Low,
access_payment_method = Medium, rebook = High,
process_compensation = Medium, issue_refund = High
```

## 3. Task Definition (~350 tokens)

```
CURRENT TASK:
Rebook passenger J. Torres (PNR: ABC123) from cancelled flight UA 457
(SFO → JFK, 2025-07-15, 08:00) to a suitable alternative flight.

TASK CONTEXT:
- Passenger initiated contact via chat after receiving cancellation notification
- Cancellation was airline-initiated (mechanical issue)
- Passenger has stated preference for morning flights
- Passenger is a Gold loyalty member

TASK ORIGIN: Customer chat — incoming message at 2025-07-14T22:15:00Z
```

## 4. Plan State (~800 tokens)

```
PLAN STATE:
Step 1: Verify passenger identity ✅ COMPLETE
  → Passenger verified: J. Torres, PNR ABC123, Gold member

Step 2: Confirm flight cancellation ✅ COMPLETE
  → UA 457 confirmed cancelled (mechanical). Originally: SFO→JFK, 2025-07-15 08:00

Step 3: Check passenger preferences and constraints → COMPLETE
  → Preference: morning flight (before 12:00)
  → Constraint: must arrive JFK by 18:00 (connecting obligation)
  → Loyalty tier: Gold (priority rebooking, lounge access eligible)

Step 4: Search alternative flights ⏳ IN PROGRESS
  → Searching SFO→JFK, 2025-07-15, departing 06:00–14:00

Step 5: Present options and rebook ○ PENDING
Step 6: Process compensation (if eligible) ○ PENDING
```

## 5. Working Memory / Scratchpad (~5,200 tokens)

```
SCRATCHPAD:
─────────────────────────────────────

passenger:
  name: "J. Torres"
  pnr: "ABC123"
  loyalty_tier: "Gold"
  contact: "j.torres@email.com"
  phone: "+1-555-0142"
  payment_method_on_file: "Visa ****7891"

cancelled_flight:
  flight: "UA 457"
  route: "SFO → JFK"
  date: "2025-07-15"
  scheduled_departure: "08:00"
  scheduled_arrival: "16:30"
  cancellation_reason: "mechanical"
  cancellation_source: "airline"
  cabin: "Economy Plus"
  fare_paid: "$438.00"
  seat: "12C"

passenger_preferences:
  time: "morning (before 12:00)"
  hard_constraint: "arrive JFK by 18:00"
  cabin: "no preference stated — current is Economy Plus"
  airline: "no preference stated"

search_results:
  query: "SFO→JFK, 2025-07-15, 06:00–14:00"
  results:
    - flight: "UA 512"
      departure: "09:30"
      arrival: "17:55"
      cabin_available: ["Economy", "Economy Plus", "Business"]
      economy_plus_fare: "$462.00"
      fare_difference: "+$24.00"
      seats_remaining: 34
      on_time_rate: "87%"

    - flight: "UA 788"
      departure: "11:15"
      arrival: "19:40"
      cabin_available: ["Economy", "Economy Plus"]
      economy_plus_fare: "$438.00"
      fare_difference: "$0.00"
      seats_remaining: 12
      on_time_rate: "91%"
      note: "FAILS hard constraint — arrives after 18:00"

    - flight: "AA 104"
      departure: "07:00"
      arrival: "15:25"
      cabin_available: ["Economy", "Economy Plus", "Business"]
      economy_plus_fare: "$455.00"
      fare_difference: "+$17.00"
      seats_remaining: 8
      on_time_rate: "93%"
      note: "Partner airline — Gold benefits may not apply"

compensation_policy:
  eligible: true
  reason: "airline-initiated cancellation"
  tier: "Gold"
  entitlements:
    - "Priority rebooking"
    - "Lounge access voucher"
    - "$200 travel credit (cancellation within 24h of departure)"
    - "Meal voucher if delay > 4 hours"
  policy_reference: "COMP-MATRIX-v3.2, Section 4.1"

decisions_made:
  - "Passenger verified via PNR + last name match"
  - "Cancellation confirmed as airline-initiated"
  - "Morning preference noted — filtering departures before 14:00"

─────────────────────────────────────
```

## 6. Per-Step Constraints for Step 4 (~650 tokens)

```
CONSTRAINTS [Step 4: Search alternative flights]:

FILTERING:
- Only show flights departing within 8 hours of original departure time
  unless passenger requests otherwise
- Exclude flights arriving after passenger's hard constraint (18:00 JFK)
- Prioritize same airline, then partner airlines, then other carriers
- Prioritize same cabin class or higher

RANKING:
- Rank by: (1) meets hard constraints, (2) closest to original time,
  (3) same airline, (4) lowest fare difference

PRESENTATION:
- Show maximum 3 options
- For each option show: flight number, departure, arrival, cabin, fare difference,
  seats remaining
- Flag any option that doesn't meet stated preferences (but still meets hard constraints)
- Flag partner airline flights where loyalty benefits may differ

VALIDATION:
- Confirm at least 1 option meets all hard constraints before presenting
- If no options meet hard constraints, expand search window and inform passenger
- Never present a flight departing in less than 60 minutes from now
```

## 7. Success Criteria (~400 tokens)

```
COMPLETION RUBRIC:

[REQUIRED] — all must be true:
  ✅ Passenger is confirmed on a new flight
  ✅ Booking reference is updated and sent to passenger
  ✅ Fare difference (if any) is settled — either collected or waived
  ✅ Passenger has confirmed the new itinerary

[IF ELIGIBLE]:
  ○ Compensation processed per COMP-MATRIX-v3.2
  ○ Lounge access voucher issued (if applicable)
  ○ Meal voucher issued (if delay > 4 hours)

[QUALITY]:
  ○ Resolved within 6 steps
  ○ No unnecessary escalations
  ○ Passenger sentiment: neutral or positive at close
  ○ First option presented was accepted (measures recommendation quality)
```

## 8. Conversation History (~7,710 tokens)

```
[2025-07-14T22:15:00Z] PASSENGER:
Hi, I just got a notification that my flight tomorrow is cancelled. Flight UA 457,
San Francisco to New York. My booking reference is ABC123. Can you help me get on
another flight?

[2025-07-14T22:15:05Z] AGENT:
I'm sorry about the disruption, J. Torres. Let me pull up your booking and find you
an alternative.

[TOOL CALL: lookup_passenger(pnr="ABC123")]
[TOOL RESULT: { passenger found — J. Torres, Gold member, SFO→JFK 2025-07-15 }]

[TOOL CALL: view_booking_details(pnr="ABC123")]
[TOOL RESULT: { UA 457, Economy Plus, seat 12C, fare $438, ... }]

[TOOL CALL: lookup_flight_status(flight="UA457", date="2025-07-15")]
[TOOL RESULT: { status: "cancelled", reason: "mechanical", cancelled_at: "2025-07-14T20:00Z" }]

[2025-07-14T22:15:12Z] AGENT:
I've confirmed the cancellation of UA 457 — it's due to a mechanical issue, which
means you're eligible for our cancellation compensation program. As a Gold member,
you'll have priority rebooking.

Do you have any preferences for your alternative flight? Any time constraints I
should know about?

[2025-07-14T22:16:30Z] PASSENGER:
I'd prefer a morning flight if possible. I have a connection to catch from JFK so
I need to land by 6pm at the latest.

[2025-07-14T22:16:35Z] AGENT:
Understood — morning departure, arriving JFK by 18:00. Let me search for the best
options for you.

[TOOL CALL: search_alternative_flights(origin="SFO", destination="JFK", date="2025-07-15", departure_window="06:00-14:00", cabin="Economy Plus")]
[TOOL RESULT: { 3 flights found — UA 512, UA 788, AA 104 }]

← AGENT IS HERE (Step 4 — evaluating search results against constraints) →
```

---

## Token Budget Summary

| Section | Estimated Tokens |
|---------|-----------------|
| System prompt | ~1,800 |
| Tool definitions | ~3,200 |
| Task definition | ~350 |
| Plan state | ~800 |
| Working memory / scratchpad | ~5,200 |
| Per-step constraints (Step 4) | ~650 |
| Success criteria | ~400 |
| Conversation history | ~7,710 |
| **Total** | **~20,110** |

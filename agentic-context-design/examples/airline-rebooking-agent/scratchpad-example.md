# Scratchpad Evolution — Airline Rebooking Agent

This document shows how the agent's structured scratchpad accumulates state at key steps during the rebooking of passenger J. Torres (PNR: ABC123).

---

## After Step 1: Verify Passenger Identity

The scratchpad begins with only the entity information retrieved from the passenger lookup.

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

cancelled_flight: (pending — not yet retrieved)
passenger_preferences: (pending — not yet collected)
search_results: (pending)
compensation_policy: (pending)

decisions_made:
  - "Passenger verified via PNR + last name match"

─────────────────────────────────────
```

**Token estimate: ~250 tokens**

---

## After Step 3: Check Passenger Preferences and Constraints

The scratchpad now includes the cancelled flight details (from Step 2) and the passenger's stated preferences (from Step 3). The compensation policy has been pre-loaded based on the cancellation type and loyalty tier.

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

search_results: (pending — Step 4)

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

**Token estimate: ~850 tokens**

---

## After Step 4: Search Alternative Flights

The search results are now populated. Note that the scratchpad annotates results with constraint-relevant information (e.g., "FAILS hard constraint").

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

**Token estimate: ~1,400 tokens**

---

## After Step 6: Process Compensation (Final State)

The scratchpad at task completion. Search results have been compressed (only the selected flight is retained in full detail; rejected options are summarized). The rebooking outcome and compensation details are recorded.

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
  cancellation_reason: "mechanical"
  cancellation_source: "airline"
  cabin: "Economy Plus"
  fare_paid: "$438.00"

new_booking:
  flight: "AA 104"
  route: "SFO → JFK"
  date: "2025-07-15"
  departure: "07:00"
  arrival: "15:25"
  cabin: "Economy Plus"
  seat: "14A"
  fare: "$455.00"
  fare_difference: "+$17.00 (settled)"

search_results: [COMPRESSED]
  query: "SFO→JFK, 2025-07-15, 06:00–14:00"
  total_results: 3
  qualifying_results: 2 (UA 512, AA 104)
  excluded: 1 (UA 788 — failed arrival constraint)
  selected: "AA 104"

compensation_issued:
  - type: "travel_credit"
    amount: "$200.00"
    reason_code: "CANC-MECH-24H"
    status: "confirmed"
  - type: "lounge_voucher"
    location: "SFO"
    valid: "2025-07-15"
    status: "confirmed"
  - type: "meal_voucher"
    status: "not applicable (new departure within 1h of original)"

compensation_policy:
  reference: "COMP-MATRIX-v3.2, Section 4.1"
  all_entitlements_processed: true

decisions_made:
  - "Passenger verified via PNR + last name match"
  - "Cancellation confirmed as airline-initiated"
  - "Morning preference noted — filtering departures before 14:00"
  - "UA 788 excluded — fails JFK arrival by 18:00 constraint"
  - "Passenger selected AA 104 over UA 512 (earlier arrival, lower fare diff)"
  - "Fare difference of $17.00 acknowledged by passenger"
  - "$200 travel credit + lounge voucher issued per COMP-MATRIX-v3.2"

─────────────────────────────────────
```

**Token estimate: ~1,100 tokens** (reduced from ~1,400 at Step 4 due to compression of search results)

---

## Compression Notes

Notice how the scratchpad evolves:

| Step | Tokens | What changed |
|------|--------|-------------|
| Step 1 | ~250 | Entity only — minimal state |
| Step 3 | ~850 | + cancelled flight, preferences, compensation policy |
| Step 4 | ~1,400 | + full search results with 3 flights |
| Step 6 | ~1,100 | Search results compressed; new booking + compensation added |

The compression at Step 6 demonstrates **selective pruning**: rejected flight options are summarized rather than retained in full, while the selected option, decisions, and compensation details are preserved verbatim. This keeps the scratchpad useful for audit purposes without consuming unnecessary context window space.

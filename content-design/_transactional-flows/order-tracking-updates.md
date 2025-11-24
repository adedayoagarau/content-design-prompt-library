## Order Tracking Update Generator v1.0

**Purpose**: Design clear, proactive order tracking communications that reduce anxiety, set accurate expectations, and handle delivery exceptions while building trust through transparency.

---

**PROMPT:**

You are a logistics communications designer at {{company_name}} creating tracking updates for {{product_type}} deliveries. Design tracking messaging for {{delivery_method}} serving {{customer_segment}} with {{delivery_timeline}} typical delivery across {{channels}}.

=== ORDER CONTEXT ===
- Product type: {{product_type}} (physical_goods/perishables/fragile/oversized/digital_physical_hybrid)
- Delivery method: {{delivery_method}} (standard/express/same_day/international/pickup)
- Customer segment: {{customer_segment}} (first_time/returning/vip/business)
- Delivery timeline: {{delivery_timeline}} (same_day/1-2_days/3-5_days/7-10_days)
- Order value: {{order_value}}
- Urgency: {{urgency_level}} (gift/time_sensitive/standard)

=== LOGISTICS CAPABILITIES ===
- Tracking granularity: {{tracking_detail}} (basic_milestones/detailed_scans/real_time_gps)
- Carrier: {{carrier}} (fedex/ups/usps/dhl/amazon/local_courier)
- Delivery options: {{delivery_options}} (signature/leave_at_door/safe_place/neighbor)
- Delivery window: {{window_accuracy}} (specific_time/4_hour_window/all_day/date_only)
- Rescheduling: {{reschedule_allowed}} (yes/no/limited)
- Channels: {{channels}} (email/sms/app/tracking_page/all)

=== CUSTOMER EXPECTATIONS ===
- Primary concern: {{customer_concern}} (delivery_date/package_safety/being_home/tracking_detail)
- Communication preference: {{contact_preference}} (every_update/major_milestones/problems_only)
- Device usage: {{device_split}} (mobile_primary/desktop/mixed)
- Notification tolerance: {{notification_frequency}} (high/medium/low)
- Previous experience: {{delivery_history}} (always_smooth/sometimes_issues/first_order)

=== EXCEPTION HANDLING ===
- Common issues: {{typical_exceptions}} (delays/address_issues/failed_delivery/damage/lost)
- Weather impact: {{weather_affected}} (yes/no/seasonal)
- Signature requirements: {{signature_needed}} (yes/no/high_value_only)
- Support availability: {{support_hours}} (24_7/business_hours/limited)

=== OUTPUT REQUIREMENTS ===

Generate comprehensive order tracking content:

```yaml
order_tracking_updates:
  tracking_page_structure:
    header:
      order_number: "Order #{{order_id}}"
      estimated_delivery: "Arriving {{date}}"
      delivery_confidence: "{{on_time/delayed/delivered}}"
      status_badge: "{{status_indicator}}"

    progress_tracker:
      format: "visual_timeline"
      stages:
        - stage: "Order Placed"
          status: "completed"
          timestamp: "{{date_time}}"
          icon: "checkmark"

        - stage: "Preparing Shipment"
          status: "completed"
          timestamp: "{{date_time}}"
          description: "Your order is being packed"

        - stage: "Shipped"
          status: "in_progress"
          timestamp: "{{date_time}}"
          description: "In transit to you"
          tracking_number: "{{carrier_tracking}}"

        - stage: "Out for Delivery"
          status: "pending"
          estimated: "{{date}}"
          description: "On vehicle for delivery"

        - stage: "Delivered"
          status: "pending"
          estimated: "{{date_range}}"

    current_status:
      heading: "Current Status"
      message: "{{status_specific_message}}"
      last_update: "Updated {{relative_time}}"
      next_update: "Next update expected: {{timeframe}}"

    delivery_details:
      address: "{{shipping_address}}"
      edit_allowed: "{{if_not_shipped}}"
      delivery_instructions: "{{customer_notes}}"
      estimated_arrival: "{{date_range_or_specific}}"
      carrier: "{{carrier_name}}"
      tracking_number: "{{tracking_id}}"

    map_integration: # If GPS tracking available
      live_map: "See delivery truck location"
      stops_away: "{{n}} stops away"
      eta_countdown: "Arriving in {{minutes}} minutes"

  notification_sequence:
    shipment_confirmation:
      timing: "When order ships"
      channel: "Email + SMS + Push"

      email:
        subject: "Your order has shipped!"
        preview_text: "Arriving {{date}} • Track your package"

        body: |
          Good news! Your order is on its way.

          **Delivery estimate:** {{date_range}}
          **Tracking number:** {{tracking_id}}

          [Track Your Order]

          **What's coming:**
          {{item_list_with_images}}

          **Delivery to:**
          {{shipping_address}}

          Need to make changes? {{contact_support}}

      sms:
        message: |
          Great news! Your order has shipped and will arrive {{date}}.
          Track: {{short_url}}
          - {{company_name}}

      push_notification:
        title: "Package shipped!"
        body: "Arriving {{date}} • Tap to track"
        action: "Track order"

    in_transit_updates:
      frequency: "{{major_milestones_only_or_all_scans}}"
      tone: "Informative, reassuring"

      message_templates:
        - event: "departed_facility"
          message: "Your package left {{facility_location}} and is heading to {{destination}}"
          timestamp: "{{date_time}}"

        - event: "arrived_local_facility"
          message: "Your package arrived at your local delivery facility"
          next_step: "Out for delivery soon"

        - event: "customs_clearance" # International
          message: "Package cleared customs in {{country}}"
          timeframe: "Delivery still on track for {{date}}"

    out_for_delivery:
      timing: "Morning of delivery day"
      urgency: "High priority notification"

      email:
        subject: "Out for delivery today!"
        preview_text: "Your package is on the truck • Arriving by {{time}}"

        body: |
          📦 **Your package is out for delivery!**

          **Estimated arrival:** Today by {{time}}
          **Delivery to:** {{address}}

          **What to expect:**
          - Driver will {{signature_requirement_or_leave_at_door}}
          - You'll get a photo when delivered
          - Someone should be home: {{if_signature_required}}

          **Not home?**
          {{delivery_options}}

          Track in real-time: [Live Map]

      sms:
        message: |
          📦 Your package is out for delivery today!
          Arriving by {{time}}.
          See live map: {{url}}
          - {{company}}

      push_notification:
        title: "Out for delivery! 📦"
        body: "Arriving today by {{time}}"
        action: "See live map"
        sound: "enabled"

    delivery_imminent: # If GPS tracking available
      timing: "30 minutes before arrival"
      channel: "SMS + Push"

      message: |
        Your package arrives in ~30 minutes!
        {{n}} stops away.
        Live map: {{url}}

    delivered_confirmation:
      timing: "Within minutes of delivery"
      importance: "High - confirms package safety"

      email:
        subject: "Delivered: Your order has arrived!"
        preview_text: "Package delivered at {{time}} • See delivery photo"

        body: |
          ✓ **Your package has been delivered!**

          **Delivered:** Today at {{time}}
          **Location:** {{delivery_location}}
          **Received by:** {{signature_name_or_left_at_door}}

          [See Delivery Photo]

          **What was delivered:**
          {{item_list}}

          **Can't find your package?**
          - Check all entrances and safe places
          - Ask household members or neighbors
          - Look for delivery photo above
          - Contact us: {{support_contact}}

          Enjoy your order!

      sms:
        message: |
          ✓ Delivered at {{time}}!
          Left at: {{location}}
          See photo: {{url}}
          - {{company}}

  exception_handling:
    delivery_delay:
      notification_trigger: "When estimated delivery changes"
      tone: "Apologetic, transparent"

      message: |
        **Delivery Update: Slight Delay**

        We wanted to let you know your delivery is running behind schedule.

        **Original estimate:** {{original_date}}
        **New estimate:** {{revised_date}}

        **Why the delay:**
        {{honest_reason}}

        **What we're doing:**
        {{action_being_taken}}

        We're sorry for the inconvenience. Track your order: {{url}}

        Questions? We're here: {{support_contact}}

      delay_reasons:
        weather: "Severe weather in {{location}} is impacting deliveries"
        high_volume: "Higher than expected order volume"
        carrier_issue: "Carrier processing delay"
        customs: "Customs processing taking longer than usual"
        operational: "Unexpected logistics delay"

    failed_delivery_attempt:
      notification_timing: "Immediately after failed attempt"
      urgency: "High - requires customer action"

      message: |
        **Delivery Attempted - Action Needed**

        We tried to deliver your package today but {{reason}}.

        **What happens next:**
        {{next_attempt_info}}

        **Your options:**
        1. Schedule redelivery: {{reschedule_url}}
        2. Pick up at {{facility_location}}
        3. Leave delivery instructions: {{instructions_url}}

        **Delivery will be attempted {{attempts_remaining}} more times**

        Need help? {{support_contact}}

      failure_reasons:
        no_one_home: "no one was home (signature required)"
        access_issue: "driver couldn't access delivery location"
        business_closed: "business was closed"
        safe_location: "no safe place to leave package"

    address_issue:
      notification_timing: "As soon as issue identified"
      urgency: "Critical - may prevent delivery"

      message: |
        **Action Required: Address Issue**

        We found a problem with your delivery address:

        **Issue:** {{problem_description}}
        **Current address:** {{address_on_file}}

        **This may delay or prevent delivery**

        **Update your address now:**
        [Correct Address]

        **Need help?**
        {{support_contact}} (available {{hours}})

      common_issues:
        - "Address appears incomplete"
        - "Address cannot be verified"
        - "Apartment/unit number missing"
        - "Address is a P.O. Box (cannot deliver this item)"
        - "Incorrect ZIP code"

    package_lost:
      notification_timing: "After investigation complete"
      tone: "Apologetic, solution-focused"

      message: |
        **We're Sorry - Package Update**

        Unfortunately, we've been unable to locate your package after thorough investigation.

        **What we're doing:**
        We're {{resolution}} at no cost to you.

        **Your options:**
        1. Full refund (processed in {{timeframe}})
        2. Replacement shipment (ships {{timeframe}})

        [Choose Your Preference]

        We sincerely apologize for this experience.
        {{compensation_if_applicable}}

        Questions? We're here to help: {{support_contact}}

    damaged_package:
      notification_timing: "Customer-initiated or proactive if noticed"
      tone: "Apologetic, immediate resolution"

      message: |
        **We're Sorry Your Package Arrived Damaged**

        We know how disappointing this is.

        **Immediate resolution:**
        1. Take photos of damage and packaging
        2. Upload here: {{upload_url}}
        3. We'll {{refund_or_replace}} immediately

        **No need to return the damaged item**

        We'll resolve this within {{timeframe}}.

        Our apologies,
        {{company_name}} Team

  proactive_communication:
    before_first_delivery_attempt:
      timing: "Night before delivery"
      goal: "Prepare customer, reduce failed deliveries"

      message: |
        **Your package arrives tomorrow!**

        **Delivery window:** {{time_range}}

        **Preparing for delivery:**
        ✓ Ensure someone can receive package
        ✓ Clear delivery area if needed
        ✓ {{signature_requirement_notice}}

        **Can't be home?**
        - Leave delivery instructions: {{url}}
        - Redirect to neighbor: {{url}}
        - Schedule different day: {{url}}

        Track in real-time tomorrow: {{url}}

    weekend_delivery_notice:
      message: "Your package is coming this weekend ({{day}})"
      purpose: "Weekend deliveries are less expected - set expectations"

    international_customs:
      timing: "When package enters customs"
      purpose: "Reduce anxiety about delay"

      message: |
        **Customs Processing Update**

        Your international package is being processed by {{country}} customs.

        **What to expect:**
        - Processing time: {{typical_duration}}
        - You may need to pay duties/taxes
        - We'll notify you when it clears customs

        **Current status:** In customs review
        **Estimated clearance:** {{date_range}}

        This is a normal part of international shipping.

  tracking_page_features:
    delivery_preferences:
      heading: "Delivery Preferences"
      options:
        - "Leave at door (no signature needed)"
        - "Require signature"
        - "Leave with neighbor"
        - "Deliver to safe place: {{specify}}"
        - "Hold for pickup at {{location}}"

    reschedule_delivery:
      heading: "Reschedule Delivery"
      available: "{{if_before_first_attempt}}"
      options:
        - "Choose different day"
        - "Choose time window"
        - "Hold at facility for pickup"

    contact_driver: # If available
      feature: "Message your driver"
      use_cases: "Provide access code, gate instructions, etc."

    delivery_notifications:
      heading: "Notification Preferences"
      options:
        - sms: "Text updates"
        - email: "Email updates"
        - push: "App notifications"
        - frequency: "All updates vs Delivery day only"

  accessibility_requirements:
    tracking_page:
      - "Status timeline keyboard navigable"
      - "Status changes announced to screen readers"
      - "Map must have text alternative"
      - "Color not sole indicator of status"
      - "Sufficient contrast (4.5:1 minimum)"

    notifications:
      - "Plain text email versions"
      - "Clear subject lines"
      - "Alt text for status icons"
      - "No critical info in images only"
```

=== EXAMPLES ===

**Example 1: Standard E-commerce Delivery**
- product_type: "Apparel"
- delivery_method: "Standard ground shipping"
- customer_segment: "Returning customer"
- delivery_timeline: "3-5 days"

**Email: Out for Delivery**

**Subject:** Out for delivery today! Your order arrives by 8pm

**Hi Jessica,**

📦 **Your order is out for delivery!**

**Estimated arrival:** Today by 8:00pm
**Tracking #:** 1Z9999999999999999

**What's coming:**
• Summer Floral Dress (Size M)
• Linen Pants (Navy, Size 8)

**Delivery to:**
456 Oak Avenue
Brooklyn, NY 11201

**What to expect:**
✓ Driver will leave package at your door
✓ You'll receive a delivery photo
✓ No signature needed

**Not home?** No problem - we'll leave it in a safe place.

[Track in Real-Time]

**Can't find your package?**
Check all entrances or contact us: (555) 123-4567

Happy unboxing!
The StyleShop Team

---

**Rationale:** Clear delivery window. Photo proof mentioned. No signature stress. Real-time tracking offered. Help option visible.

**Example 2: Express Delivery with GPS**
- product_type: "Electronics"
- delivery_method: "Same-day express"
- customer_segment: "VIP customer"
- delivery_timeline: "Same day"

**SMS: Delivery Imminent**

📦 Your laptop arrives in ~25 minutes!

Driver is 4 stops away.

See live map: track.store.com/abc123

Delivering to: 123 Main St

Signature required - please be ready.

Questions? Text us or call (555) 789-0123

- ElectroStore Express

---

**Email: Delivered**

**Subject:** Delivered! Your laptop arrived safely ✓

**Hi Marcus,**

✓ **Your package has been delivered!**

**Delivered:** Today at 3:47pm
**Received by:** Marcus Chen (signature verified)
**Location:** Front door

[See Delivery Photo]

**What was delivered:**
Dell XPS 15 Laptop - Order #ORD-458392

**Get started:**
→ Setup guide: {{url}}
→ Register warranty: {{url}}
→ Tech support: Available 24/7

**Everything look good?**
We'd love your feedback: [Leave Review]

**Any issues?**
Contact us immediately: (555) 789-0123

Enjoy your new laptop!

---

**Rationale:** VIP treatment with express updates. GPS tracking for transparency. Signature confirmed. Quick setup help. Immediate support access.

**Example 3: Failed Delivery Recovery**
- product_type: "Gift"
- delivery_method: "Standard"
- customer_segment: "First-time customer"
- delivery_timeline: "Delayed due to failed attempt"

**Email: Failed Delivery - Action Needed**

**Subject:** Delivery attempted - schedule redelivery

**Hi David,**

**We tried to deliver your package today but no one was home to sign.**

**Your package:** Gift box for Sarah's birthday
**Original delivery date:** Nov 28 (today)

**What happens next:**
We'll try again tomorrow (Nov 29) between 10am-2pm.

**Your options:**

1️⃣ **Schedule a specific time**
Choose a delivery window that works for you
[Reschedule Delivery]

2️⃣ **Pick it up**
Available today at FedEx location (2 miles away)
789 Commerce St - Open until 8pm
[Get Pickup Details]

3️⃣ **Leave instructions**
Tell us where to leave it (garage, back door, etc.)
[Add Delivery Note]

**We know this is a gift** - we'll do our best to get it there on time.

**Need help?**
Call us: (555) 234-5678 (24/7)
Live chat: {{url}}

We're sorry for the inconvenience.

The GiftShop Team

---

**Rationale:** Acknowledges it's a gift (time-sensitive). Three clear options. Same-day pickup available. Apologetic tone. 24/7 support for urgent issue.

---

**Accessibility Requirements**: All tracking updates must be accessible across channels. Status timelines must be keyboard navigable with clear focus states. Maps must have text alternatives showing stops/distance. Color must not be sole indicator of delivery status (WCAG 3.0 Level AA). Status changes must be announced to screen readers. Tracking numbers must be selectable/copyable. SMS messages must be concise and clear. Email notifications must have plain text versions. Sufficient color contrast (4.5:1 minimum). No time-sensitive actions that can't be completed with assistive technology.

**Psychological Principles**: Proactive updates reduce anxiety (control/predictability). Accurate estimates build trust (reliability). Real-time tracking provides control (agency). Delivery photos provide proof (security/certainty). Clear exception handling maintains trust (transparency/honesty). Multiple delivery options provide control (flexibility/choice). Friendly tone builds relationship (warmth/reciprocity). Immediate problem resolution reduces frustration (responsiveness). Progress visualization satisfies curiosity (completion tendency). Estimated delivery creates anticipation (expectation management).

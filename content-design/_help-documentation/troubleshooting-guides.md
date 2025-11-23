## Troubleshooting Guide Development v1.0

**Purpose**: Create systematic troubleshooting guides that help users diagnose and resolve problems independently through clear symptom-solution mapping and logical diagnostic flows.

---

**PROMPT:**

You are writing troubleshooting documentation for {{product_name}}, a {{product_type}} used by {{user_base}}. Create comprehensive problem-solving guides for {{issue_category}} that enable users to identify symptoms, understand root causes, and implement solutions with minimal frustration and support escalation.

=== TROUBLESHOOTING CONTEXT ===

**Product Information**:
- Product name: {{product_name}}
- Product type: {{product_type}} (software/hardware/service/platform/API)
- User base: {{user_base}}
- Technical expertise: {{user_technical_level}} (non-technical/basic/intermediate/advanced)
- Issue category: {{issue_category}}
- Issue severity: {{severity_level}} (minor inconvenience/moderate/blocking/critical)

**Problem Scope**:
- Common symptoms: {{symptoms}}
- Known root causes: {{root_causes}}
- Environment factors: {{environment_variables}} (OS/browser/network/configuration)
- Affected features: {{affected_features}}
- Frequency: {{issue_frequency}} (rare/occasional/common/widespread)
- Support ticket volume: {{ticket_volume}}

=== DIAGNOSTIC FRAMEWORK ===

**Problem Classification**:
- Error messages: {{error_messages}}
- User actions that trigger: {{trigger_actions}}
- System states: {{system_states}}
- Prerequisites for issue: {{prerequisites}}
- Workarounds available: {{workarounds}}
- Permanent fixes: {{permanent_solutions}}

=== OUTPUT REQUIREMENTS ===

```yaml
troubleshooting_guide_system:
  guide_structure:
    problem_title:
      format_patterns:
        symptom_based: "[Symptom] when [action]"
        error_based: "Error: [Error message]"
        capability_based: "Can't [do something]"
        performance_based: "[Feature] is slow/not working"

      title_guidelines:
        - "Use language users would use to describe problem"
        - "Be specific about when/where issue occurs"
        - "Match search terms users would try"
        - "Front-load the key symptom"

      examples:
        good:
          - "Login fails with 'Invalid credentials' error"
          - "Images not loading in Safari browser"
          - "Payment processing times out at checkout"
          - "Export feature produces empty CSV file"
        bad:
          - "Authentication issues"
          - "Display problems"
          - "Payment errors"
          - "Export not working"

    problem_summary:
      components:
        what_happens: "Clear description of the symptom"
        when_it_happens: "Conditions or triggers"
        who_affects: "Which users or configurations"
        impact: "What user can't accomplish"

      template: |
        **Problem**: [Brief description of what's not working]

        **Symptoms**: [What the user sees or experiences]

        **Affects**: [Which users, browsers, plans, or conditions]

        **Impact**: [What the user can't do as a result]

      example: |
        **Problem**: Unable to upload files larger than 5MB

        **Symptoms**: Upload progress bar reaches 100% but file doesn't appear in library. Error message: "Upload failed - request timeout"

        **Affects**: All users uploading files over 5MB, primarily on slower internet connections

        **Impact**: Users cannot upload high-resolution images, videos, or large documents

    quick_fix_section:
      purpose: "Provide fastest solution for common cases first"
      placement: "Immediately after problem summary"
      format: "Numbered steps to most common resolution"

      template: |
        ## Quick Fix (Most Common)

        This solves the issue 80% of the time:

        1. [Step 1 of most common solution]
        2. [Step 2]
        3. [Check if resolved]

        **Did this work?**
        ✓ If yes, you're all set!
        ✗ If no, continue to [Detailed Troubleshooting](#detailed) below.

    detailed_troubleshooting:
      diagnostic_flowchart:
        structure: "Question → Answer → Next step or solution"
        branching: "Each answer leads to narrower diagnosis"
        format: "Numbered questions with clear yes/no or multiple choice"

      flowchart_template: |
        ## Detailed Troubleshooting

        ### Step 1: Identify your situation

        **Is the error message displaying?**

        **A) Yes, I see "[specific error]"** → [Go to Solution A](#solution-a)

        **B) No, the upload just silently fails** → [Continue to Step 2](#step-2)

        **C) The page crashes** → [Go to Solution C](#solution-c)

        ---

        ### Step 2: Check your file

        **What type of file are you uploading?**

        **A) Image (JPG, PNG, GIF)** → [Continue to Step 3](#step-3)

        **B) Video (MP4, MOV)** → [Go to Video-Specific Fix](#video-fix)

        **C) Document (PDF, DOCX)** → [Go to Document Fix](#doc-fix)

    solution_sections:
      solution_format:
        heading: "Clear, action-oriented solution name"
        when_to_use: "Conditions under which this solution applies"
        steps: "Numbered, sequential instructions"
        verification: "How to confirm solution worked"
        alternative: "What to try if this doesn't work"

      solution_template: |
        ### Solution A: Clear Browser Cache and Cookies

        **Use this if**: You see the error in one browser but not others, or the issue started suddenly.

        **Steps**:
        1. Open your browser settings
        2. Navigate to Privacy & Security
        3. Click "Clear browsing data"
        4. Select "Cached images and files" and "Cookies"
        5. Choose "All time" for time range
        6. Click "Clear data"
        7. Close and reopen your browser
        8. Try uploading again

        **Verify it worked**: You should be able to upload successfully without errors.

        **If this didn't help**: Try [Solution B: Check File Size and Format](#solution-b)

        💡 **Why this works**: Corrupted cache can interfere with upload requests. Clearing it forces fresh connection to server.

    diagnostic_tables:
      error_code_reference:
        format: "Table mapping error codes/messages to solutions"
        columns: "Error | Meaning | Solution"

        example: |
          ## Error Message Reference

          | Error Message | What It Means | Solution |
          |---------------|---------------|----------|
          | "Request timeout" | Server didn't respond in time | Check internet connection, try smaller file, or [compress file](#compress) |
          | "Invalid file type" | File format not supported | Convert to supported format: JPG, PNG, PDF, MP4 |
          | "File too large" | Exceeds plan limits | Upgrade plan or compress file to under [limit] |
          | "Permission denied" | Insufficient user permissions | Contact account admin to grant upload permissions |

      symptom_cause_matrix:
        format: "Match symptoms to likely causes"
        structure: "Symptom → Possible Causes → Diagnostic Tests"

        example: |
          ## Symptom-Cause Matrix

          | Symptom | Likely Cause | How to Confirm |
          |---------|--------------|----------------|
          | Upload reaches 100%, then fails | Server timeout | Check file size (over 5MB?) and connection speed |
          | Upload fails immediately | File type restriction | Check file extension against [supported formats list] |
          | Upload works in incognito mode | Browser extension conflict | Disable extensions one by one to identify culprit |
          | Upload fails on WiFi, works on mobile data | Firewall blocking | Check with IT if port 443 is blocked |

    prevention_section:
      purpose: "Help users avoid issue in future"
      content: "Best practices, settings to configure, behaviors to avoid"

      template: |
        ## Preventing This Issue

        To avoid encountering this problem again:

        - **[Preventive action 1]**: [Why this helps]
        - **[Preventive action 2]**: [Why this helps]
        - **[Configuration to enable]**: [How to set it up]

        **Recommended**: [Proactive step users can take]

    escalation_path:
      when_to_contact_support:
        conditions:
          - "None of the solutions worked"
          - "Issue is blocking critical work"
          - "Error persists after following all steps"

      what_to_include:
        - "Specific error messages (screenshots help)"
        - "Steps already attempted"
        - "Browser/OS version"
        - "Account or transaction ID"
        - "Timeline of when issue started"

      template: |
        ## Still Having Issues?

        If you've tried all the solutions above and the problem persists, we're here to help.

        **Contact Support** with the following information for fastest resolution:
        - Screenshot of the error message
        - Your browser and version (e.g., Chrome 120)
        - Solutions you've already tried
        - When the issue first started

        [Contact Support →]

        **Expected response time**: Within 2 hours for paid plans, 24 hours for free plans.

  writing_best_practices:
    clarity_guidelines:
      step_precision:
        - "Use exact UI labels in bold: Click **Settings**, not Click the settings area"
        - "Specify location: 'in the top right corner', not 'at the top'"
        - "Include what should happen: 'A dialog will appear', not just action"

      avoiding_assumptions:
        - "Don't assume technical knowledge"
        - "Define technical terms on first use"
        - "Provide context for why steps matter"

      action_orientation:
        - "Start with verb: Check, Click, Navigate, Verify"
        - "Use imperative mood: 'Clear your cache', not 'You should clear'"
        - "Be direct: 'This won't work', not 'This might not work'"

    empathy_and_tone:
      acknowledge_frustration:
        - "Validate that issue is frustrating"
        - "Don't blame user for problem"
        - "Show confidence issue can be solved"

      examples:
        good_opening: "This error is frustrating, but we can fix it. Let's start with the most common solution."
        bad_opening: "You're seeing this because you didn't configure your settings correctly."

      encouraging_language:
        - "This usually takes just 2-3 minutes to resolve"
        - "Most users fix this with Solution A"
        - "You're almost there—one more step"

    technical_accuracy:
      verification_required:
        - "Test every solution in current product version"
        - "Verify error messages match exactly"
        - "Confirm solutions work across browsers/OS when applicable"

      version_specificity:
        - "Note if solution differs by version"
        - "Update when product changes affect solutions"
        - "Mark outdated solutions clearly"

  specialized_troubleshooting_types:
    connectivity_issues:
      structure:
        - "Isolate where connection fails (client/network/server)"
        - "Test with diagnostic tools (ping, traceroute, browser console)"
        - "Verify firewall, proxy, VPN settings"

      example_diagnostic_flow: |
        1. **Check basic connectivity**: Can you access other websites?
           - No → Internet connection issue (contact ISP)
           - Yes → Continue to step 2

        2. **Test our status page**: Visit status.productname.com
           - Shows outage → System issue on our end (we're working on it)
           - Shows operational → Continue to step 3

        3. **Check browser console**: Press F12, look for red errors
           - See "net::ERR_BLOCKED_BY_CLIENT" → Ad blocker issue
           - See "CORS error" → Contact IT about firewall rules
           - No errors → Continue to step 4

    performance_issues:
      structure:
        - "Establish baseline (what is 'slow'?)"
        - "Isolate variables (browser, data volume, time of day)"
        - "Provide optimization steps"

      diagnostic_questions:
        - "When did it become slow? (after update, gradually, suddenly)"
        - "Is it slow for specific actions or everything?"
        - "How many items/records are you working with?"
        - "Does it happen at specific times of day?"

    integration_failures:
      structure:
        - "Verify both systems are working independently"
        - "Check authentication and permissions"
        - "Test API connectivity and quotas"
        - "Review configuration mapping"

      common_causes:
        - "Authentication expired or revoked"
        - "API rate limits reached"
        - "Field mapping changed"
        - "Firewall blocking API calls"

    data_discrepancy_issues:
      structure:
        - "Confirm what should be vs. what is"
        - "Check sync timing and filters"
        - "Review data transformation rules"
        - "Verify permissions and scope"

      diagnostic_approach: |
        1. **Document the discrepancy**: Expected [X], seeing [Y]
        2. **Check last sync time**: Is data stale or missing completely?
        3. **Review filters**: Are filters hiding expected data?
        4. **Verify source data**: Is data present in original system?
        5. **Check permissions**: Do you have access to view this data?

  visual_aids:
    annotated_screenshots:
      when_to_use: "Complex UI navigation, settings buried in menus"
      annotation_types:
        - "Arrows pointing to specific buttons or fields"
        - "Numbered circles for multi-step sequences"
        - "Highlights or boxes around important areas"
        - "Red X on incorrect options, green check on correct"

    diagnostic_flowcharts:
      format: "Visual decision tree"
      tools: "Mermaid, Lucidchart, or simple text-based"
      benefit: "Helps users see their path through troubleshooting"

    before_after_comparisons:
      use_case: "Show incorrect vs. correct state"
      format: "Side-by-side screenshots"
      labels: "Clear '❌ Before' and '✓ After' indicators"

  accessibility_considerations:
    alternative_formats:
      - "Text-based flowcharts for screen readers"
      - "Alt text on all diagnostic screenshots"
      - "Transcript of video troubleshooting walkthroughs"

    navigation_aids:
      - "Jump links to skip to specific solutions"
      - "Clear heading hierarchy for screen reader navigation"
      - "Summary of solutions at top for quick scanning"

  maintenance_protocol:
    keep_current:
      triggers:
        - "Product update that changes UI or behavior"
        - "New common issue discovered in support tickets"
        - "Solution becomes outdated or ineffective"

      review_cadence: "Quarterly audit + immediate update for critical changes"

    analytics_driven_improvement:
      track:
        - "Which solutions users try most"
        - "Where users drop off without resolving"
        - "Search queries leading to guide"
        - "Support tickets still filed after reading guide"

      optimize:
        - "Promote most effective solutions to Quick Fix"
        - "Add clarification to confusing steps"
        - "Create separate guides for complex branches"
```

=== EXAMPLES ===

**Example 1: Email Marketing Platform - Connection Issue**
- product_name: "MailCraft Pro"
- issue_category: "Email sending failures"
- severity_level: "Blocking"
- user_technical_level: "Basic"

```markdown
# Emails Stuck in "Sending" Status Won't Send

**Problem**: Scheduled emails remain in "Sending" status indefinitely and never get delivered to recipients.

**Symptoms**:
- Campaign shows "Sending" for more than 30 minutes
- Email count remains at 0 sent
- No error message displayed

**Affects**: All plans, typically when sender authentication isn't complete

**Impact**: Campaigns don't reach subscribers, time-sensitive promotions are delayed

---

## Quick Fix (Most Common)

This is usually a sender authentication issue. Try this first:

1. Go to **Settings** → **Sender Domains**
2. Check if your domain shows a **yellow warning icon**
3. If yes, click **Resend Verification Email**
4. Check your email and click the verification link
5. Return to MailCraft and click **Verify Now**

**Did this work?**
✓ Your campaign should start sending within 5 minutes.
✗ If still stuck, continue to Detailed Troubleshooting below.

---

## Detailed Troubleshooting

### Step 1: Check Your Sending Limit

**Have you sent emails recently?**

Your plan has a monthly sending limit. Check your usage:

1. Go to **Dashboard** → **Usage Stats**
2. Look for "Emails sent this month"

**Are you over your limit?**
- **Yes** → [Upgrade your plan](#upgrade) or wait until next month's reset
- **No** → Continue to Step 2

---

### Step 2: Verify Domain Authentication

**Is your sender domain verified?**

1. Go to **Settings** → **Sender Domains**
2. Check the status icon:

- **Green checkmark ✓** → Domain verified, continue to Step 3
- **Yellow warning ⚠️** → Email verification pending, [complete verification](#verify)
- **Red X ✗** → DNS records not configured, [set up DNS](#dns)

---

### Solution A: Complete Email Verification {#verify}

**Use this if**: You see yellow warning on your domain.

**Steps**:
1. Click **Resend Verification Email** next to your domain
2. Check the inbox for the email address on your domain (e.g., admin@yourdomain.com)
3. Click the verification link in the email
4. Return to MailCraft and click **Verify Now**
5. Wait 2-3 minutes for verification to complete

**Verify it worked**: Status should change to green checkmark.

**If this didn't help**: Check your spam folder for the verification email, or try [adding a different email address](#different-email) on your domain.

---

### Solution B: Configure DNS Records {#dns}

**Use this if**: You see red X and "DNS records not found" message.

**Steps**:
1. In **Sender Domains**, click **View DNS Records**
2. Copy the 3 DNS records shown:
   - SPF record
   - DKIM record
   - DMARC record (optional but recommended)
3. Log in to your domain provider (GoDaddy, Namecheap, etc.)
4. Navigate to DNS settings
5. Add each record as a TXT record
6. Return to MailCraft and click **Verify DNS**

**Verify it worked**: All 3 records should show green checkmarks within 1 hour (DNS can take up to 48 hours to propagate).

💡 **Why this matters**: DNS records prove to email providers that you own the domain, dramatically improving deliverability.

**Need help?** [Watch our DNS setup video (3 min) →]

---

### Solution C: Check Content Filters {#content}

**Use this if**: Domain is verified but emails still won't send.

Certain content triggers spam filters and blocks sending:

1. Open your email in the editor
2. Click **Spam Check** in the toolbar
3. Review flagged issues

**Common issues**:
- **Too many links**: Reduce to under 10 links
- **Spammy words**: Remove phrases like "Act now!", "Free money", "Guaranteed"
- **ALL CAPS subject**: Use sentence case instead
- **Broken links**: Fix or remove any dead links

Make corrections and try sending again.

---

## Error Message Reference

| Error Message | Meaning | Solution |
|---------------|---------|----------|
| "Domain not verified" | Sender domain needs verification | [Solution A: Complete verification](#verify) |
| "DNS records not found" | SPF/DKIM not configured | [Solution B: Configure DNS](#dns) |
| "Sending limit exceeded" | Hit monthly email quota | Upgrade plan or wait for monthly reset |
| "Content blocked" | Email flagged as spam | [Solution C: Check content](#content) |
| "Invalid recipient list" | List has issues | Verify list has valid email addresses |

---

## Preventing This Issue

To avoid sending delays in the future:

- **Verify domains before scheduling**: Set up authentication before creating campaigns
- **Monitor sending limits**: Check usage weekly if sending regularly
- **Run spam checks**: Always use Spam Check tool before scheduling
- **Keep lists clean**: Remove bounced emails to maintain good sender reputation

**Recommended**: Set up [sender notifications](#notifications) to get alerts when campaigns start/finish.

---

## Still Having Issues?

If your emails are still stuck after trying all solutions above, contact our support team.

**Please include**:
- Screenshot of campaign status page
- Your sender domain
- Campaign ID (found in campaign URL)
- Solutions you've already attempted

[Contact Support →]

**Response time**: Within 1 hour for this blocking issue.
```

**Example 2: SaaS Analytics Tool - Data Discrepancy**
- product_name: "DataMetrics"
- issue_category: "Reporting accuracy"
- severity_level: "Moderate"
- user_technical_level: "Intermediate"

```markdown
# Dashboard Numbers Don't Match External Sources

**Problem**: Metrics in DataMetrics dashboard differ from numbers in Google Analytics, Facebook Ads, or other source systems.

**Symptoms**:
- Session counts are higher or lower than GA4
- Revenue totals don't match Stripe or payment processor
- Ad click numbers differ from Meta Ads Manager

**Affects**: Users comparing DataMetrics to other analytics platforms

**Impact**: Uncertainty about which numbers are correct, difficulty making data-driven decisions

---

## Quick Fix (Most Common)

**90% of discrepancies are due to timezone or attribution window differences.**

1. Go to **Settings** → **Data Sources**
2. Click on the source showing different numbers (e.g., "Google Analytics")
3. Check **Timezone** setting—does it match your account timezone?
4. Check **Attribution Window**—is it set to match your comparison source?
5. Adjust settings and wait 1 hour for data to re-sync

**Did this work?**
✓ Numbers should now align within 2-5% (perfect matches are rare).
✗ If difference is >5%, continue to Detailed Troubleshooting.

---

## Understanding Normal Variance

**Important**: Some variance between platforms is normal and expected.

**Acceptable variance**: ±2-5%

**Why platforms differ**:
- **Tracking methods**: Cookie-based vs. server-side vs. device ID
- **Bot filtering**: Different platforms filter bots differently
- **Timezone boundaries**: Sessions crossing midnight counted differently
- **Attribution models**: First-click vs. last-click vs. multi-touch
- **Processing delays**: Real-time vs. delayed reporting

💡 **Rule of thumb**: Look for trends and patterns, not exact matches. If both show 10% increase, the trend is what matters.

---

## Detailed Troubleshooting

### Step 1: Identify the Discrepancy Type

**What type of data differs?**

**A) Session/Visit counts** → [Go to Session Troubleshooting](#sessions)

**B) Revenue/Transaction data** → [Go to Revenue Troubleshooting](#revenue)

**C) Ad campaign metrics** → [Go to Ad Metrics Troubleshooting](#ads)

**D) Conversion rates** → [Go to Conversion Troubleshooting](#conversions)

---

### Sessions Don't Match Google Analytics {#sessions}

**Compare these settings**:

| Setting | DataMetrics | Google Analytics | Action |
|---------|-------------|------------------|--------|
| Session timeout | 30 minutes (default) | 30 minutes (default) | ✓ Should match |
| Timezone | Check in Settings → Account | Check in GA Admin → Property Settings | Must match |
| Bot filtering | Enabled by default | Check in Admin → View Settings | Enable in both |
| Subdomain tracking | Check if subdomains included | Check GA tracking code | Align settings |

**Common causes of session variance**:

1. **DataMetrics includes bot traffic**:
   - Go to **Settings** → **Filters**
   - Enable "Filter known bots and spiders"

2. **Different session definitions**:
   - GA starts new session at midnight; DataMetrics doesn't
   - This causes variance for late-night traffic
   - Expected variance: 1-3%

3. **Tracking code placement**:
   - Verify DataMetrics tracking code is on all pages where GA is installed
   - Missing pages = lower session count

---

### Revenue Doesn't Match Stripe {#revenue}

**Use this diagnostic**:

1. **Check date range alignment**:
   - Stripe uses payment date (when charged)
   - DataMetrics can track order date OR payment date
   - Go to **Settings** → **Revenue Tracking** → Set to "Payment Date"

2. **Verify currency conversion**:
   - If you accept multiple currencies, check conversion rates
   - DataMetrics converts daily; Stripe uses transaction-time rates
   - Small variances (< 1%) are normal

3. **Check refund tracking**:
   - Does your comparison include or exclude refunds?
   - DataMetrics: Toggle **Settings** → **Revenue** → "Include Refunds"

4. **Confirm tax/shipping inclusion**:
   - Are you comparing pre-tax or post-tax?
   - Check if shipping fees are included in both systems

**Formula to verify**:
```
Expected Revenue = (Total Charges) - (Refunds) - (Tax if excluded) - (Shipping if excluded)
```

---

### Ad Metrics Don't Match Platform {#ads}

**Common discrepancies by platform**:

**Facebook/Meta Ads**:
- **Clicks differ**: Meta counts outbound clicks; DataMetrics counts sessions started
- **Conversions differ**: Attribution window (Meta: 7-day default, DataMetrics: configurable)

**Solution**:
1. Go to **Settings** → **Integrations** → **Meta Ads**
2. Set attribution window to **7 days click, 1 day view** (Meta's default)
3. Compare "Landing Page Views" in Meta to "Sessions" in DataMetrics (closer match than "Link Clicks")

**Google Ads**:
- **Clicks vs. Sessions**: Multiple clicks from same user = 1 session
- **Conversion attribution**: Check if using last-click vs. data-driven attribution

**Solution**:
- Compare **Users** metric instead of Sessions
- Align attribution models in both platforms

---

## Preventing Discrepancies

**Best practices**:

1. **Document your settings**: Keep a record of timezone, attribution windows, and filters used in each platform
2. **Choose a source of truth**: Pick one platform as authoritative for each metric type
3. **Focus on trends, not absolutes**: If both show 15% growth, that's your insight
4. **Regular audits**: Monthly comparison to catch configuration drift

**Recommended setup**:
- Revenue source of truth: Payment processor (Stripe, PayPal)
- Traffic source of truth: Server-side analytics (DataMetrics)
- Ad performance: Platform's native reporting

---

## Still Seeing Major Differences?

If variance is >10% after checking all settings above:

**Contact Support** with:
- Screenshot of comparison showing discrepancy
- Date range you're comparing
- Specific metric that differs (sessions, revenue, etc.)
- Both DataMetrics and external source screenshots

[Contact Support →]

We'll audit your integration configuration and data pipeline.
```

**Example 3: Mobile App - Technical Error**
- product_name: "FitTrack Pro"
- issue_category: "Sync failure"
- severity_level: "Moderate"
- user_technical_level: "Non-technical"

```markdown
# Workout Data Not Syncing to Cloud

**Problem**: Workouts recorded on your device aren't appearing in the cloud or on other devices.

**Symptoms**:
- Workout completed but doesn't show in history
- Sync icon shows "Last synced: X days ago"
- Data appears on phone but not on website

**Affects**: iOS and Android app users

**Impact**: Progress not backed up, data not available on multiple devices

---

## Quick Fix (Most Common)

**Try a manual sync first—this works 75% of the time:**

1. Open FitTrack Pro app
2. Pull down on the dashboard to refresh
3. Look for spinning sync icon in top right
4. Wait 30 seconds for sync to complete

**Did this work?**
✓ Check if "Last synced" timestamp updated and workout appears.
✗ If still not syncing, continue below.

---

## Detailed Troubleshooting

### Step 1: Check Internet Connection

Sync requires active internet (WiFi or cellular data).

**Test your connection**:
- Open a web browser on your phone
- Try loading a website

**Connection works?**
- **Yes** → Continue to Step 2
- **No** → Connect to WiFi or enable cellular data, then try syncing again

---

### Step 2: Verify Account Login

Make sure you're logged into the same account on all devices.

1. Tap **Profile** (bottom right icon)
2. Check email address at the top

**Is this the email you use on other devices?**
- **Yes** → Continue to Step 3
- **No** → You're logged into a different account. Log out and sign in with correct email.

---

### Step 3: Check App Permissions

FitTrack needs specific permissions to sync properly.

**For iPhone**:
1. Open **Settings** → **FitTrack**
2. Verify these are enabled:
   - ✓ Background App Refresh: **On**
   - ✓ Cellular Data: **On**
   - ✓ Location: **While Using App** or **Always**

**For Android**:
1. Open **Settings** → **Apps** → **FitTrack**
2. Tap **Permissions** and verify:
   - ✓ Location: **Allowed**
   - ✓ Physical activity: **Allowed**
3. Tap **Mobile data & WiFi** → **Background data**: **Enabled**

**Made changes?** Force close the app and reopen, then try syncing.

---

### Solution A: Force Sync from Settings

**Use this if**: Manual pull-to-refresh didn't work.

1. Tap **Profile** → **Settings**
2. Scroll to **Data & Sync**
3. Tap **Force Sync Now**
4. Wait for "Sync Complete" message

**Check**: Does workout now appear in history?

---

### Solution B: Clear App Cache (Android)

**Use this if**: Syncing stopped working after app update (Android only).

1. Open **Settings** → **Apps** → **FitTrack**
2. Tap **Storage**
3. Tap **Clear Cache** (not Clear Data!)
4. Reopen FitTrack
5. Try syncing again

⚠️ **Important**: Tap "Clear Cache" only, NOT "Clear Data" (which deletes local workouts).

---

### Solution C: Reinstall App

**Use this if**: Nothing else worked and data is backed up to cloud.

**Before you start**: Verify recent workouts are synced by logging into fittrack.com and checking your history.

**Steps**:
1. **iPhone**: Press and hold app icon → Remove App → Delete App
   **Android**: Settings → Apps → FitTrack → Uninstall

2. Restart your phone

3. Reinstall FitTrack from App Store or Google Play

4. Log in with your email and password

5. Pull down to sync—all cloud data should download

**Verify**: Check that historical workouts loaded.

---

## Preventing Sync Issues

**Enable automatic sync**:
- **Profile** → **Settings** → **Auto-Sync**: **On**
- **Sync over cellular data**: **On** (if you have a good data plan)

**Best practices**:
- Connect to WiFi when possible (syncs faster)
- Keep app updated to latest version
- Force sync after important workouts
- Check "Last synced" timestamp weekly

💡 **Pro tip**: Enable **Background App Refresh** so data syncs automatically even when app is closed.

---

## Still Not Syncing?

If you've tried all solutions and data still won't sync:

**Contact Support** and include:
- Your account email
- Device type and OS version (e.g., iPhone 14, iOS 17.2)
- When sync last worked (if known)
- Screenshot of sync status screen

[Contact Support →] or email support@fittrack.pro

**Response time**: Within 12 hours
```

---

**Accessibility Requirements**: Troubleshooting guides must meet WCAG 3.0 Level AA standards. Use clear heading hierarchy (H1 for title, H2 for main sections, H3 for sub-solutions). Provide text alternatives for diagnostic flowcharts and annotated screenshots. Ensure tables are properly structured with headers. Maintain 4.5:1 color contrast for text. Use descriptive link text. Make diagnostic questions keyboard navigable. Support screen magnification to 200%. Provide text-based alternatives to visual flowcharts for screen reader users.

**Psychological Principles**: Reduced anxiety through systematic approach (methodical problem-solving reduces overwhelm). Quick wins first (80/20 rule prioritizes common solutions). Agency and control (user chooses diagnostic path). Completion motivation (clear progress through numbered steps). Trust building through empathy (acknowledging frustration). Cognitive load management (breaking complex diagnostics into decision points). Self-efficacy (celebratory verification steps build confidence).

---
name: Generate Privacy Policy
overview: Generate a world-market compliant Privacy Policy for SubSens by creating the missing styles.css, writing full policy content that reflects the app's actual data practices (local storage, opt-in iCloud, RevenueCat, on-device AI), and fixing navigation.
todos: []
isProject: false
---

# Generate Privacy Policy for SubSens

## Context (from subscription-kit exploration)

- **Data model**: Subscriptions, usage logs, payment methods, categories — all local or opt-in iCloud
- **Third parties**: Apple (App Store, IAP), RevenueCat (SubSens Pro entitlements), Google Fonts (website)
- **Sens (AI)**: Apple Foundation Models — on-device only, no data sent to servers
- **CloudKit**: Opt-in during onboarding; user explicitly enables iCloud sync
- **No analytics/tracking/ads** — per product claims

## Implementation Steps

### Step 1: Create `public/styles.css`

Create a minimal stylesheet so `[public/privacy.html](public/privacy.html)` and `[public/terms.html](public/terms.html)` render correctly. Match the main app theme:

- Background: `#0a0a0a`, surface: `#111111`
- Text: white / `#a3a3a3` for secondary
- Accent: `#FF9500`
- Fonts: Inter, Syne (from Google Fonts)
- Nav, footer, `.container`, `.legal-content` structure

### Step 2: Write the full Privacy Policy content in `public/privacy.html`

Replace the current policy with compliant sections. Use placeholder `[Your Full Legal Name]` for the data controller.

**Required sections and key points:**


| Section                     | Content to include                                                                                                                                                                                                                                                                                                                                    |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Introduction**            | Scope: SubSens iOS app and subsens.app website; effective date; data controller: "SubSens, operated by [Your Full Legal Name]"                                                                                                                                                                                                                        |
| **Data we collect**         | **iOS app**: Subscription names, amounts, dates, categories, usage logs — stored locally or in user's iCloud (if opted in). No upload to our servers. **Purchase data**: Apple ID, transaction IDs via Apple/RevenueCat for entitlement checks. **Website**: Google Fonts may receive IP; no analytics. **Explicit**: No analytics, tracking, or ads. |
| **iCloud Sync**             | Optional, opt-in only. When enabled, data syncs to user's iCloud via CloudKit. We do not access it.                                                                                                                                                                                                                                                   |
| **On-device AI (Sens)**     | Uses Apple Foundation Models on the device. No subscription data sent to external AI services.                                                                                                                                                                                                                                                        |
| **Third parties**           | Apple (App Store, IAP), RevenueCat (subscription management — see [RevenueCat Privacy](https://www.revenuecat.com/privacy)), Google Fonts (website — see [Google Privacy](https://policies.google.com/privacy))                                                                                                                                       |
| **Legal basis (GDPR)**      | Contract (IAP); legitimate interest (website fonts, security)                                                                                                                                                                                                                                                                                         |
| **International transfers** | Apple and RevenueCat process in the US; appropriate safeguards (adequacy / SCCs) as per their policies                                                                                                                                                                                                                                                |
| **Data retention**          | Local data: user controls (delete app = delete data). RevenueCat/Apple: per their retention policies.                                                                                                                                                                                                                                                 |
| **Your rights**             | **GDPR**: Access, rectification, erasure, portability, object, withdraw consent, lodge complaint with supervisory authority. **CCPA**: Know, delete, opt-out of sale — we do not sell personal data. Exercise via `privacy@subsens.app`                                                                                                               |
| **Children's privacy**      | Not for under 13 (COPPA) / under 16 (EU where applicable)                                                                                                                                                                                                                                                                                             |
| **Cookies/website**         | No tracking cookies; Google Fonts loads fonts                                                                                                                                                                                                                                                                                                         |
| **Changes**                 | Updates posted here; "Last updated" date revised                                                                                                                                                                                                                                                                                                      |
| **Contact**                 | `privacy@subsens.app`                                                                                                                                                                                                                                                                                                                                 |


**Remove**: Any mention of "usage analytics" or "opt-in analytics" — the app does not collect these.

### Step 3: Fix navigation in `privacy.html` and `terms.html`

- Nav links: Home → `index.html`, Features → `index.html#features`
- Remove `#pricing` (not present in subsens-landing)
- Ensure `href` values work with `base: '/subsens-landing/'` if deployed to GitHub Pages (use relative paths like `index.html`)

### Step 4: Update `terms.html` nav

- Apply the same nav and `styles.css` fixes as in privacy.html

## Files to modify/create


| File                                         | Action                                      |
| -------------------------------------------- | ------------------------------------------- |
| `[public/styles.css](public/styles.css)`     | **Create** — dark theme CSS for legal pages |
| `[public/privacy.html](public/privacy.html)` | **Rewrite** — full policy content + nav fix |
| `[public/terms.html](public/terms.html)`     | **Edit** — nav links + remove #pricing      |


## Post-generation checklist (user)

1. Replace `[Your Full Legal Name]` with your legal name
2. Confirm `privacy@subsens.app` and `support@subsens.app` are active
3. Add privacy policy URL to App Store Connect
4. Consider legal review for target markets


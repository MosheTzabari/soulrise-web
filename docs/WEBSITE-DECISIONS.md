# SoulRise website decisions

- Brand foundation: `#80F856` electric green on `#0F0F17`, with dark neutral surfaces and no competing neon primary color.
- Scope: bilingual marketing, public information, organizer acquisition, legal/support placeholders, and future app entry points only.
- Hebrew is the default language; English uses the same presentation components.
- Release mode defaults to early access. No public-release claim, fake store link, rating, pricing, address, or social profile is present.
- This dedicated web repository remains separate from the mobile application. No Flutter files are touched.
- `/open` explains the current state and never redirects or launches a payment-specific scheme.
- General deep links require an approved canonical domain, iOS Universal Links, Android App Links, verified route behavior, and fallback testing.
- Legal counsel must replace both temporary legal pages before production. Official support contact details and account-deletion/refund processes are also pending.
- Organizer requests require review. Paid ticketing may require separate approval and payment readiness.
- The organizer form is a no-network demonstration until a destination, privacy basis, retention policy, and submission adapter are approved.

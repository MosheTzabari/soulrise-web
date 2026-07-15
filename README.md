# SoulRise website

The official, Hebrew-first digital home of SoulRise. This repository is a premium marketing website for users and event organizers; it is intentionally not a web version of the mobile app.

## Stack and local setup

- Next.js 16 App Router, React 19, TypeScript
- Tailwind CSS 4 plus centralized CSS design tokens
- Heebo, self-hosted at build time through `next/font` with 400–700 weights
- ESLint; no added runtime dependencies

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Production validation uses `npm run lint` and `npm run build`; run the compiled app with `npm start`.

## Routes

`/`, `/organizers`, `/privacy`, `/terms`, `/support`, `/open`, and `/download`.

## Structure and editing

- `src/app`: routes, metadata, robots, sitemap, and global styles
- `src/components`: shared layout, UI helpers, and the demo organizer form
- `src/content`: typed Hebrew and English marketing content
- `src/lib/site-config.ts`: release state and all external integration placeholders
- `public/brand`: documented replacement points for approved assets
- `docs/WEBSITE-DECISIONS.md`: scope and pre-production decisions

Hebrew is the default. The language control writes a same-site preference cookie through a server action, then renders the same components with content from `src/content/he.ts` or `src/content/en.ts`. Edit marketing copy there, not in presentation components.

## Release and integrations

`releaseMode` defaults to `early_access`. Store URLs, the general deep link, canonical production domain, support contact, organizer form endpoint, and social links remain null/empty in `src/lib/site-config.ts`. Set only verified production values. The `/open` page never redirects automatically.

The organizer application is a client-side demonstration with accessible validation and a success state. It sends, stores, and logs no personal data. A future Tally, Airtable, email service, or API adapter should be isolated behind a submission function and enabled only after privacy/legal review; `organizerFormEndpoint` is its configuration point.

## Required assets

See `public/brand/README.md`. Do not add fictional app screens or unofficial store badges.

## Deploying to Vercel

1. Import this repository into Vercel and keep the Next.js framework preset.
2. Use `npm run build` as the build command and the default output settings.
3. Configure the verified custom domain, then set `canonicalDomain` and rebuild.
4. Add approved brand/OG assets, final legal copy, and an official support contact.
5. Configure iOS Universal Links and Android App Links before setting `generalDeepLink` or enabling app-opening behavior.
6. Add verified store URLs only after public availability is confirmed.

Deferred: authentication, checkout, chat, dashboards, app business logic, Firebase, production form submission, automatic app redirects, and unverified store/deep links.

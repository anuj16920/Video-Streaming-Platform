# StreamX implementation plan

## Product experience
- Replace the starter screen with StreamX’s public site: streaming-architecture visualization, product capabilities, editable demo cost calculator, pricing, and developer documentation.
- Build the app shell and responsive, interactive infrastructure dashboard: overview, videos and processing, courses, users, analytics, bandwidth, cache, storage, infrastructure, costs, API, and settings.
- Add deterministic demo data, reusable charts and service abstractions, a learning/player experience, and clear demo-only labeling for simulated infrastructure readings.

## Accounts and data
- Use Lovable Cloud email/password and Google sign-in, with registration, sign-in, email confirmation, and password recovery/reset flows.
- Persist profile information; keep roles in a separate table. Protect user-owned records with row-level security.
- Add a scalable relational schema for learning content, video assets/variants/jobs, enrollments/progress, and infrastructure analytics; keep real processing, storage, CDN, and billing integrations explicitly unconnected until providers are configured.

## Technical approach
- Preserve TanStack Start and existing project conventions; define visual tokens centrally in `src/styles.css`.
- Split the app into route-level pages, shared navigation/layout, typed deterministic demo data, and service abstractions.
- Validate with the preview/build signals and verify the key public, authentication, calculator, and dashboard interactions.

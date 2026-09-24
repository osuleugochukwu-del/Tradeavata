# Trade Avata architecture

## Frontend
Astro static-first pages + minimal client JavaScript. Public pages should not require Firebase reads unless a feature genuinely needs live data.

## Backend
Firebase Authentication → identity. Firestore → courses, users, progress, entitlements, announcements, notifications, products, orders and audit data. Storage → images and documents. Vimeo → video delivery.

## Access model
Visitor → registered member → course student → entitled/premium member → admin roles. A course URL never grants access. Every protected lesson/resource must be checked against authentication and entitlement/progression state.

## Core entities
users, roles, courses, modules, lessons, enrollments, progress, products, indicators, entitlements, orders, subscriptions, announcements, events, notifications, certificates, articles, supportTickets, auditLogs, siteSettings, featureFlags.

## Course model
Course → Module → Lesson. Each course has access mode, publication state, sharing state, progression mode and certificate setting. Lesson supports Vimeo reference, resources, completion requirement and ordering.

## Entitlements
User → Entitlement → Product/Course/Indicator. Entitlements support permanent, temporary, promotional and subscription-based access.

## Security
Firebase rules protect user-owned data. Admin operations require privileged claims and trusted server-side workflows. Never expose secret API credentials in Astro/client code. Review all rules before production and add indexes/queries only as required.

## Performance
Static render public content; lazy-load images; defer Vimeo player loading; paginate member/admin data; avoid polling; minimize third-party scripts; keep client bundles small.

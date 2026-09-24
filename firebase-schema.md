# Trade Avata Firebase foundation

## Core collections
- `users/{uid}` — profile, status, role references, timestamps
- `roles/{roleId}` — role metadata and permission keys
- `courses/{courseId}` — course metadata, access, progression, publishing
- `courses/{courseId}/modules/{moduleId}` — ordered module metadata
- `courses/{courseId}/modules/{moduleId}/lessons/{lessonId}` — lesson metadata and Vimeo reference
- `enrollments/{enrollmentId}` — user/course enrollment state
- `progress/{progressId}` — user/course/lesson progress and resume position
- `products/{productId}` — store product metadata
- `indicators/{indicatorId}` — indicator metadata and documentation references
- `entitlements/{entitlementId}` — user access grants with source/start/end/status
- `orders/{orderId}` — verified commerce records
- `subscriptions/{subscriptionId}` — subscription state and provider references
- `announcements/{announcementId}` — scheduled homepage/event announcements
- `notifications/{notificationId}` — user notification records
- `certificates/{certificateId}` — completion certificate and verification data
- `articles/{articleId}` — public content
- `supportTickets/{ticketId}` — support requests
- `auditLogs/{logId}` — sensitive administrative actions
- `siteSettings/{settingId}` — controlled global settings
- `featureFlags/{flagId}` — staged feature activation

## Security principles
1. Public read only for documents explicitly marked public.
2. Users can read/write only their own private profile/progress/notification data.
3. Admin writes require role/permission checks.
4. Private course content requires authentication + entitlement + course/lesson status checks.
5. Payment verification and entitlement issuance happen server-side.
6. Service account credentials never ship to the browser.

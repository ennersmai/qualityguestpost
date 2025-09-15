Of course. Here is the complete, refined Product Requirements Document in a single Markdown file, integrating the detailed phases and addressing the previously identified risks.

---

```markdown
# Product Requirements Document (PRD)
## Project: Migration & Rebuild of QualityGuestPost.com

**Version:** 2.0
**Status:** Final

**Objective:** Migrate all active subscriptions from WordPress/WooCommerce to a new custom full-stack application with a modern design, integrated subscription billing (Stripe & PayPal), and scalable search/catalog features.

---

### 1. Project Overview

We are migrating QualityGuestPost.com from a WordPress + WooCommerce stack to a modern Next.js + Node.js + Postgres + Elasticsearch stack. The new system is designed to address current performance limitations, improve user experience, and provide a scalable foundation for future growth.

The new system must:
- Migrate all active Stripe WooCommerce subscriptions without service interruption.
- Provide a clear transition path for active PayPal subscribers.
- Offer a single-seller eCommerce platform for blog placement services and subscription packages.
- Deliver superior, SEO-friendly frontend performance (<2.5s load time, passing Google PageSpeed).
- Support multiple payment gateways with region-based availability (Stripe, PayPal, Razorpay).
- Provide a comprehensive buyer dashboard for managing orders, invoices, and subscriptions.
- Include a powerful admin CMS for inventory management, customer support, and business analytics.

---

### 2. Goals & Success Metrics

✅ **Migrate all active Stripe WooCommerce subscriptions** without disrupting billing cycles.
✅ **Develop and execute a clear communication and transition plan** for active PayPal subscribers.
✅ **Rebuild the storefront** with a new, modern design and an SEO-friendly structure.
✅ **Support one-time and recurring payments** through Stripe, PayPal, and Razorpay.
✅ **Deliver a functional buyer dashboard** with order history, invoices, and subscription management.
✅ **Implement a complete Admin CMS** with blog inventory, analytics, customer management, and order processing.
✅ **Achieve page load times <2.5s** on the homepage and key service pages (verified by Google PageSpeed).
✅ **Preserve or redirect all SEO-critical URLs** to maintain search engine rankings.

---

### 3. Project Phases & Timeline

This project will be executed in four distinct phases. Each phase has specific objectives, deliverables, and success criteria.

#### Phase 1: Setup & Skeleton (Effort: ~20%)
*   **Objective:** Establish the foundational infrastructure, database schema, and core user authentication, creating a stable skeleton for future development.
*   **Key Deliverables:**
    1.  **Infrastructure Setup:** DigitalOcean App Platform, Managed Postgres, Redis, and Elasticsearch instances are provisioned and configured. Cloudflare CDN is set up.
    2.  **Staging Environment:** A functional staging environment with CI/CD is deployed.
    3.  **Database Schema:** Initial TypeORM models and Postgres tables for `Users`, `Products`, `Orders`, and `Blogs`.
    4.  **Authentication:** Backend API and Frontend UI for user registration and login via Email/Password and Google OAuth (using JWT).
    5.  **UI Skeleton:** Basic application layout, navigation, and core UI components using Next.js and Tailwind CSS.
*   **Success Criteria:**
    *   Developers can deploy code to a live staging URL.
    *   A new user can successfully register, log out, and log back in.
    *   The basic site structure is visible, though largely non-functional.

#### Phase 2: Catalog & One-Time Purchases (Effort: ~30%)
*   **Objective:** Build the core e-commerce functionality, enabling users to browse the service catalog and make one-time purchases through all required payment gateways.
*   **Key Deliverables:**
    1.  **Blog Inventory & Search:**
        *   Elasticsearch integration for fast, faceted search (DA, niche, etc.).
        *   Frontend UI for browsing, searching, and filtering the blog catalog.
    2.  **Admin Inventory Management:**
        *   Admin CMS interface to add, edit, and delete blog listings.
        *   CSV/Excel bulk import functionality (as a background job via BullMQ).
    3.  **Cart & Checkout Flow:** Full cart functionality for one-time service placements.
    4.  **Payment Gateway Integration (One-Time):**
        *   Stripe Checkout for standard one-time payments.
        *   PayPal integration for one-time payments.
        *   Razorpay integration, with geo-detection logic to display it only for users in India.
    5.  **Order Management (Basic):** Admin can view new orders placed in the system.
*   **Success Criteria:**
    *   A user can search the catalog with multiple filters and receive results in <500ms.
    *   A user can add a service to the cart and complete a one-time purchase using Stripe, PayPal, or Razorpay.
    *   An admin can successfully add a new blog listing via the CMS.

#### Phase 3: New Subscription Flow (Effort: ~30%)
*   **Objective:** Implement the complete lifecycle for *new* customers subscribing to recurring packages via Stripe Billing.
*   **Key Deliverables:**
    1.  **Stripe Billing Integration:** Logic to create, manage, and charge for recurring subscription plans.
    2.  **Subscription Checkout:** A dedicated checkout flow for users signing up for a new subscription.
    3.  **Webhook Handling:** Robust backend listeners for Stripe webhooks (`invoice.payment_succeeded`, `customer.subscription.deleted`, etc.) to keep the local database in sync.
    4.  **Buyer Dashboard (Subscriptions):** The initial version of the buyer dashboard, allowing users to:
        *   View their active/past subscriptions.
        *   Cancel a subscription.
        *   Update their payment method (via Stripe Customer Portal).
    5.  **Admin Subscription Management:** Admin CMS view to see all active subscriptions, their status, and renewal dates.
*   **Success Criteria:**
    *   A *new* user can successfully subscribe to a recurring plan using Stripe.
    *   A successful renewal payment from Stripe correctly updates the subscription status in the application database.
    *   A user can log in and cancel their own subscription from the dashboard.

#### Phase 4: Migration, Polish & Go-Live (Effort: ~20%)
*   **Objective:** Execute the critical data migration, conduct full system testing, optimize for performance and SEO, and launch the new platform.
*   **Key Deliverables:**
    1.  **Data Export & Mapping:** Final scripts to export users, orders, and subscriptions from WooCommerce.
    2.  **Stripe Subscription Migration:**
        *   A thoroughly tested script to recreate active WooCommerce subscriptions in Stripe Billing.
        *   **Crucial Logic:** The script must use the original `stripe_customer_id` and set the `billing_cycle_anchor` to the exact future renewal date to ensure seamless billing continuity.
    3.  **PayPal Subscription Transition Plan:**
        *   **Technical Investigation:** Confirm the technical inability to migrate PayPal billing agreements.
        *   **Execution:** Implement the communication plan to guide active PayPal subscribers to manually re-subscribe on the new platform. This may include a special offer to incentivize the transition.
    4.  **Historical Data Import:** Import past orders and user data into Postgres for historical record-keeping.
    5.  **SEO & Redirects:** Implement the complete 301 redirect map from all old WordPress URLs to the new Next.js URLs. Generate and submit `sitemap.xml`.
    6.  **Final QA & Polish:** Full end-to-end testing, cross-browser checks, performance optimization to meet the <2.5s load time goal, and UI/UX polish.
    7.  **Documentation & Handover:** Create documentation for admins on how to use the new CMS and manage the platform.
*   **Success Criteria:**
    *   All active Stripe subscriptions are migrated with 100% accuracy on renewal dates.
    *   The go-live process (DNS cutover) results in zero downtime.
    *   Google PageSpeed scores pass the required targets on key pages.
    *   Post-launch monitoring shows no spike in billing-related support tickets.

---

### 4. Tech Stack

- **Frontend:** Next.js (React), Tailwind CSS, Redux Toolkit, Axios, Framer Motion.
- **Backend:** Node.js, Express.js, Apollo GraphQL, TypeORM.
- **Database:** PostgreSQL (primary store), Elasticsearch (catalog + advanced filters).
- **Caching/Queues:** Redis (caching), BullMQ (background jobs).
- **Payments:** Stripe, PayPal, Razorpay.
- **Hosting/CDN:** DigitalOcean (App Platform, Managed Postgres, Redis, Spaces), Cloudflare CDN.
- **Auth:** JWT (access + refresh tokens), Google OAuth.
- **Monitoring:** Sentry, GA4, Google Search Console.

---

### 5. Key Features

#### 5.1 User Management
- **Registration/Login:** Via Email/Password & Google OAuth.
- **Profile Management:** Name, email, address, zip, phone.
- **Order History:** View past and current orders.
- **Subscription Management:** Pause, cancel, update payment method.
- **Notifications:** Email + in-app alerts for orders, subscriptions, promotions.

#### 5.2 Buyer Dashboard
- **Orders:** View status, details, and content submission forms (if required).
- **Invoices:** Auto-generated and downloadable as PDF.
- **Favorites:** Save blogs for later consideration.
- **Projects:** Create/manage projects to group blog placements (similar to Adsy/VEFogix).

#### 5.3 Catalog & Cart
- **Blog Inventory:** Search blogs with filters (DA, niche, language, traffic, pricing).
- **Ordering:** Order placements with or without content.
- **Cart:** Standard one-time checkout for services/placements.
- **Subscription Checkout:** Dedicated flow for Stripe Billing or PayPal subscription plans.

#### 5.4 Payments
- **Stripe:** Default for all new subscriptions.
- **PayPal:** Supported for one-time orders and required for legacy active subscribers to transition.
- **Razorpay:** Available only for Indian customers.
- **Logic:**
  - Stripe is required for subscriptions outside India.
  - PayPal is an option for one-time orders globally.
  - Razorpay is shown only for India (geo-detected at checkout).
- **Invoices:** Auto-generated per transaction with copies for the client and admin.

#### 5.5 Admin CMS
- **User Management:** Add/remove admins, manage customer accounts.
- **Order Management:** View/update statuses, assign writers if content is required.
- **Subscription Management:** View/manage subscription status and history.
- **Blogs Inventory Management:**
  - Add/Edit/Delete listings.
  - Import bulk listings via CSV/Excel.
  - Advanced search and export capabilities.
  - Manage publisher lists and internal pricing.
  - Internal commenting and completion rate tracking.
- **Credits System:** Allow admins to allocate credits to clients for blog purchases.

#### 5.6 Analytics & Reporting
- **User Activity:** Login history, purchases, engagement metrics.
- **Revenue Reports:** Subscription revenue, one-time sales, churn.
- **Admin Dashboard Metrics:** MRR, ARPU, churn rate, active subscriptions, pending orders.

#### 5.7 SEO & Performance
- **URL Structure:** SEO-friendly URLs that match the existing WordPress structure where possible.
- **Redirects:** A comprehensive map of 301 redirects from old URLs to the new structure.
- **SEO Essentials:** `robots.txt`, `sitemap.xml`, and schema markup for all relevant pages.
- **Performance:** Target page load <2.5s, achieved via Cloudflare caching, Redis query caching, and Next.js optimization.

---

### 6. Migration Requirements (To be executed in Phase 4)

- **WooCommerce Export:**
  - Users (including `stripe_customer_id` and `paypal_payer_id`).
  - Orders & subscriptions (map `shop_subscription` posts to new schema).
- **Stripe Subscriptions:**
  - Use stored `stripe_customer_id` and `payment_method_id`.
  - Recreate subscriptions in Stripe Billing with the original billing cycle anchored to the correct future renewal date.
- **PayPal Subscriptions:**
  - **Action:** A transition plan, not a technical migration.
  - **Process:** Import subscription history for record-keeping. Communicate with users, guiding them to re-subscribe on the new platform before their old subscription expires.
- **Invoices & Orders:**
  - Import historical orders into Postgres for reporting and the user's order history.
- **Communication Plan:**
  - Notify all users in advance about the migration.
  - Provide specific instructions for PayPal users.
  - Announce any required re-authentication or changes.

---

### 7. Data Model (Core Tables)

- **Users:** `id`, `email`, `password_hash`, `name`, `phone`, `address`, `country`, `stripe_customer_id`, `paypal_payer_id`.
- **Products:** `id`, `sku`, `title`, `description`, `price`, `type` (one-time/subscription).
- **Subscriptions:** `id`, `user_id`, `provider` (stripe/paypal), `external_id`, `status`, `start_date`, `renewal_date`.
- **Orders:** `id`, `user_id`, `items`, `total`, `status`, `payment_provider`, `created_at`.
- **Invoices:** `id`, `order_id`, `external_invoice_id`, `pdf_url`, `amount`.
- **Blogs:** `id`, `title`, `DA`, `niche`, `language`, `publisher_id`, `price`, `availability`.
- **Auxiliary Tables:** `Favorites`, `Projects`, `Comments`, `Credits`, `CreditTransactions`.

---

### 8. API Requirements

- **Auth API:** `login`, `register`, `refresh_token`, `social_login`.
- **Catalog API:** `blogs` (list, filters, search, export).
- **Cart API:** `add/remove` items, `checkout`, `payment_intent/session`.
- **Order API:** `create_order`, `update_status`, `view_history`.
- **Subscription API:** `create/cancel/pause`, `sync_with_stripe/paypal`.
- **Invoice API:** `generate_pdf`, `fetch_user/admin_copies`.
- **Admin API:** Manage blogs, pricing, users, analytics reports.

---

### 9. Non-Functional Requirements

- **Performance:** Homepage + service pages < 2.5s load time. Faceted search results < 500ms.
- **Scalability:** System designed to handle 10k+ blog listings and a growing user base.
- **Security:** JWT authentication, input validation, rate limiting, HTTPS, secure handling of secrets.
- **Compliance:** PCI compliance is offloaded to payment gateways. GDPR principles applied for EU user data.
- **Reliability:** Target 99.9% uptime, managed through DigitalOcean and Cloudflare.
- **Monitoring:** Sentry for error tracking, GA4 for traffic analysis, and uptime monitoring tools.

```
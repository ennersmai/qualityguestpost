# DigitalOcean Infrastructure Setup Plan

This document outlines the specifications for provisioning the necessary infrastructure on DigitalOcean for the QualityGuestPost.com project, as per Phase 1 of the PRD.

## 1. App Platform

-   **Project:** Create a new project named `QualityGuestPost`.
-   **App:** Create a new App within the project.
-   **Service Type:** A single App Platform app will host both the Next.js frontend and the Node.js (Express) backend as separate components.
    -   **Frontend Component:**
        -   **Source:** Connect to the GitHub repository (placeholder URL: `https://github.com/user/qgp-repo`).
        -   **Branch:** `main` (for production) or `develop` (for staging).
        -   **Type:** Next.js.
        -   **HTTP Port:** 3000.
        -   **Build Command:** `npm run build`.
        -   **Run Command:** `npm start`.
    -   **Backend Component:**
        -   **Source:** Connect to the same GitHub repository.
        -   **Branch:** `main` (for production) or `develop` (for staging).
        -   **Type:** Node.js.
        -   **HTTP Port:** 8080.
        -   **Build Command:** `npm run build` (if using TypeScript).
        -   **Run Command:** `npm start`.
-   **Environment Variables:** Plan for standard variables like `DATABASE_URL`, `REDIS_URL`, `JWT_SECRET`, etc. These will be populated from the managed services.

## 2. Managed PostgreSQL Database

-   **Database Cluster:** Create a new PostgreSQL database cluster.
-   **Version:** Use the latest stable version (e.g., PostgreSQL 14 or 15).
-   **Plan:** For the staging environment, a basic plan (e.g., 1 vCPU, 2 GB RAM, 10 GB storage) is sufficient. The production plan can be scaled later.
-   **Name:** `qgp-staging-db`.
-   **Access Control:** Restrict inbound connections to only allow the App Platform service.

## 3. Managed Redis

-   **Database Cluster:** Create a new Redis database cluster.
-   **Version:** Use the latest stable version.
-   **Plan:** A basic plan is sufficient for staging.
-   **Name:** `qgp-staging-redis`.
-   **Access Control:** Restrict inbound connections to only allow the App Platform service.

## 4. Elasticsearch

DigitalOcean does not offer a managed Elasticsearch service directly. The recommended approach is to use a third-party provider like Elastic Cloud (from the creators of Elasticsearch) and connect it to our DigitalOcean services.

-   **Provider:** Elastic Cloud (cloud.elastic.co).
-   **Deployment:** Create a new deployment on the desired cloud platform (e.g., AWS or GCP in a region close to the DigitalOcean region).
-   **Plan:** Start with a minimal "Standard" plan for staging.
-   **Configuration:**
    -   Note the **Cloud ID** and generate an **API Key**.
    -   These will be used as environment variables in the backend component (`ELASTIC_CLOUD_ID`, `ELASTIC_API_KEY`) to connect the Node.js application.

This setup provides a scalable and decoupled foundation for the application.
# CI/CD Pipeline Setup Plan

This document outlines the Continuous Integration and Continuous Deployment (CI/CD) strategy for the QualityGuestPost.com project, focusing on the staging environment as per Phase 1.

## 1. Core Technology

-   **Platform:** GitHub Actions.
    -   It is tightly integrated with the source code repository and offers a generous free tier. DigitalOcean App Platform has native integration with GitHub, making it a seamless choice.

## 2. Branching Strategy

A simple GitFlow-like model will be used:

-   `main`: Represents the production-ready code. Merges to this branch will trigger a production deployment.
-   `develop`: The primary development branch. All feature branches are merged into `develop`. Merges to this branch will trigger a deployment to the **staging environment**.
-   `feature/*`: Individual branches for new features or bug fixes. These are created from `develop`.

## 3. Staging Deployment Workflow (`deploy-staging.yml`)

This workflow will be triggered on every push or merge to the `develop` branch.

-   **Trigger:** `on: push: branches: [ develop ]`

-   **Jobs:**

    1.  **`build-and-test`:**
        -   **Runner:** `ubuntu-latest`.
        -   **Steps:**
            1.  **Checkout Code:** Use `actions/checkout@v3`.
            2.  **Setup Node.js:** Use `actions/setup-node@v3` with a specific Node.js version (e.g., 18.x).
            3.  **Install Dependencies:** Run `npm ci` to ensure a clean install of dependencies from `package-lock.json`.
            4.  **Linting:** Run `npm run lint` to check for code style issues.
            5.  **Unit & Integration Tests:** Run `npm test` to execute the test suite. This is a critical quality gate.
            6.  **Build Application:** Run `npm run build` to ensure the frontend and backend applications build successfully.

    2.  **`deploy-to-digitalocean`:**
        -   **Needs:** `build-and-test`. This job will only run if the `build-and-test` job succeeds.
        -   **Runner:** `ubuntu-latest`.
        -   **Steps:**
            1.  **Checkout Code:** Use `actions/checkout@v3`.
            2.  **DigitalOcean App Platform Deploy:** Use the official `digitalocean/app-platform-actions/deploy@v1` action.
            3.  **Configuration:**
                -   `app_name`: The name of the app in DigitalOcean (e.g., `qualityguestpost`).
                -   `api_token`: A DigitalOcean API token stored as a GitHub Secret (`DIGITALOCEAN_API_TOKEN`).
                -   `cluster_id`: The ID of the DigitalOcean cluster.
                -   `project_id`: The ID of the DigitalOcean project.

## 4. Secrets Management

The following secrets must be created in the GitHub repository settings (`Settings > Secrets and variables > Actions`):

-   `DIGITALOCEAN_API_TOKEN`: To authenticate with the DigitalOcean API.
-   `STAGING_DATABASE_URL`: The connection string for the staging PostgreSQL database.
-   `STAGING_REDIS_URL`: The connection string for the staging Redis instance.
-   `STAGING_JWT_SECRET`: The secret key for signing JWTs in the staging environment.
-   `STAGING_ELASTIC_CLOUD_ID`: The Cloud ID for the staging Elasticsearch deployment.
-   `STAGING_ELASTIC_API_KEY`: The API Key for the staging Elasticsearch deployment.

These secrets will be passed as environment variables to the DigitalOcean App Platform during the deployment process.

This CI/CD setup ensures that code is automatically tested and deployed to the staging environment upon merging, providing rapid feedback and a stable testing environment.
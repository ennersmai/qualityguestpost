# Backend Authentication Architecture Plan

This document outlines the architecture for the user authentication system for the QualityGuestPost.com backend, as required by Phase 1 of the PRD.

## 1. Core Technology & Strategy

-   **Strategy:** JSON Web Tokens (JWT) will be used for managing user sessions. This is a stateless approach that works well with a decoupled frontend and backend.
-   **Token Types:** We will use a two-token system:
    -   **Access Token:** Short-lived (e.g., 15 minutes). Grants access to protected API routes. It will be stored in memory on the frontend (e.g., in a Redux store or React context).
    -   **Refresh Token:** Long-lived (e.g., 7 days). Used to obtain a new access token when the old one expires. It will be stored in a secure, `HttpOnly` cookie to prevent XSS attacks.
-   **Libraries:**
    -   `bcryptjs`: For hashing and verifying passwords.
    -   `jsonwebtoken`: For creating and verifying JWTs.
    -   `passport`: A middleware for Node.js to handle authentication. We will use `passport-jwt`, `passport-local`, and `passport-google-oauth20` strategies.

## 2. API Endpoints & Flow

The following API endpoints will be created under the `/api/auth` route.

### 2.1. Email/Password Authentication

#### a. Registration (`POST /api/auth/register`)

1.  **Input:** `name`, `email`, `password`.
2.  **Validation:**
    -   Check if the email already exists in the `users` table.
    -   Validate password strength (e.g., minimum 8 characters).
3.  **Password Hashing:** Hash the user's password using `bcryptjs` with a salt round of 10 or 12. **Never store plain-text passwords.**
4.  **User Creation:** Create a new `User` record in the database with the hashed password.
5.  **Response:** Return a success message. Do not log the user in automatically upon registration.

#### b. Login (`POST /api/auth/login`)

1.  **Input:** `email`, `password`.
2.  **User Lookup:** Find the user in the database by their email.
3.  **Password Verification:** Compare the provided password with the stored `password_hash` using `bcrypt.compare()`.
4.  **Token Generation:** If the password is valid, generate an access token and a refresh token.
5.  **Response:**
    -   Send the **access token** in the JSON response body.
    -   Send the **refresh token** in an `HttpOnly` cookie.
    -   Include user details (e.g., `id`, `name`, `email`) in the response body.

### 2.2. Google OAuth 2.0

#### a. Initiate Google Login (`GET /api/auth/google`)

1.  This endpoint redirects the user to Google's OAuth consent screen.
2.  It will be handled by the `passport.authenticate('google', { scope: ['profile', 'email'] })` middleware.

#### b. Google Callback (`GET /api/auth/google/callback`)

1.  Google redirects the user back to this endpoint after they grant permission.
2.  The `passport` middleware will handle the code exchange with Google to get the user's profile information.
3.  **Logic:**
    -   Check if a user with the provided `google_id` already exists.
    -   If yes, log them in by generating JWTs (as in the email login flow).
    -   If no, check if a user with the same email exists.
        -   If yes, link the `google_id` to their existing account and log them in.
        -   If no, create a new user record with their Google profile information (`name`, `email`, `google_id`).
4.  **Response:** After generating tokens, redirect the user to a specific frontend page (e.g., `/auth/callback?token=...`) where the frontend can store the access token. The refresh token will be set in the cookie during the server-side part of the flow.

### 2.3. Token Management

#### a. Refresh Access Token (`POST /api/auth/refresh-token`)

1.  **Input:** No request body needed. The refresh token is read from the `HttpOnly` cookie.
2.  **Verification:** Verify the refresh token.
3.  **Token Generation:** If valid, generate a new access token.
4.  **Response:** Return the new access token in the JSON response body.

#### b. Logout (`POST /api/auth/logout`)

1.  **Input:** No request body needed.
2.  **Action:** Clear the refresh token cookie.
3.  **Response:** Return a success message. The frontend will be responsible for clearing the access token from its state.

## 3. Protected Routes

-   A `passport-jwt` strategy will be configured to protect API routes.
-   It will expect the access token to be sent in the `Authorization` header as a Bearer token (`Authorization: Bearer <access_token>`).
-   Any request to a protected endpoint without a valid access token will receive a `401 Unauthorized` response.
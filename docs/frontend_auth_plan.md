# Frontend Authentication UI & State Plan

This document outlines the plan for building the frontend components and managing the authentication state for the QualityGuestPost.com project.

## 1. State Management (Redux Toolkit)

An `authSlice` will be created to manage the global authentication state.

-   **`authSlice.ts`**
    -   **Initial State:**
        ```typescript
        {
          user: null, // or User object
          token: null, // Access token
          status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
          error: null
        }
        ```
    -   **Reducers:**
        -   `setUser`: Sets the user and token in the state upon successful login.
        -   `logout`: Clears the user and token from the state.
        -   Reducers to handle loading and error states.
    -   **Async Thunks:** These will handle the API calls to the backend.
        -   `loginUser(credentials)`:
            1.  Dispatches a "pending" action to set `status` to `'loading'`.
            2.  Makes a `POST` request to `/api/auth/login`.
            3.  On success, dispatches the `setUser` action with the user and token from the response.
            4.  On failure, updates the `error` state.
        -   `registerUser(userData)`:
            1.  Makes a `POST` request to `/api/auth/register`.
            2.  Handles success (e.g., redirecting to the login page) and error states.
        -   `refreshToken()`:
            1.  Makes a `POST` request to `/api/auth/refresh-token`.
            2.  On success, updates the `token` in the state.
            3.  On failure (e.g., expired refresh token), dispatches `logout`.

## 2. UI Components

The authentication components will reside in the `/app/(auth)/` route group.

### a. Login Page (`/app/(auth)/login/page.tsx`)

-   **Functionality:**
    -   A form with "Email" and "Password" fields.
    -   Client-side validation (e.g., using `react-hook-form`).
    -   On submit, it dispatches the `loginUser` async thunk.
    -   Displays a loading spinner while the request is in progress.
    -   Shows error messages from the API if login fails.
    -   Upon successful login, it will redirect the user to their dashboard (`/dashboard`).
-   **Social Login:**
    -   A "Sign in with Google" button.
    -   This button will be a simple link (`<a>`) pointing to the backend endpoint: `/api/auth/google`.

### b. Registration Page (`/app/(auth)/register/page.tsx`)

-   **Functionality:**
    -   A form with "Name", "Email", and "Password" fields.
    -   Client-side validation.
    -   On submit, it dispatches the `registerUser` async thunk.
    -   Displays loading and error states.
    -   Upon successful registration, it will show a success message and redirect the user to the login page.

## 3. API Client (`/lib/api.ts`)

-   An Axios instance will be configured to automatically handle the JWT access token.
-   **Request Interceptor:**
    -   Before each request is sent, the interceptor will get the `token` from the Redux store.
    -   If a token exists, it will add the `Authorization: Bearer <token>` header to the request.
-   **Response Interceptor:**
    -   This will handle token expiration.
    -   If a request fails with a `401 Unauthorized` error, the interceptor will:
        1.  Attempt to call the `refreshToken` thunk to get a new access token.
        2.  If successful, it will update the Redux store with the new token.
        3.  It will then retry the original failed request with the new token.
        4.  If the refresh attempt also fails, it will dispatch the `logout` action and redirect the user to the login page.

## 4. Protected Routes

-   A custom hook or a higher-order component (`withAuth`) will be created to protect client-side routes.
-   It will check for the presence of a user in the Redux state.
-   If the user is not authenticated, it will redirect them to the `/login` page.
-   This will be used to protect the `/dashboard/*` routes.

This comprehensive plan ensures a secure and user-friendly authentication experience on the frontend.
# Frontend Layout & Skeleton Plan

This document outlines the basic structure for the Next.js frontend application, focusing on the main layout, navigation, and the initial component library for Phase 1.

## 1. Core Technologies

-   **Framework:** Next.js (using the App Router).
-   **Styling:** Tailwind CSS for utility-first styling.
-   **UI Components:** A combination of custom-built components and a headless UI library like Headless UI to ensure accessibility.
-   **State Management:** Redux Toolkit for global state (e.g., user authentication status, cart). React Context will be used for simpler, localized state.

## 2. Project Structure (Conceptual)

A feature-based folder structure will be used to keep the codebase organized and scalable.

```
/src
|-- /app                 # Next.js App Router
|   |-- /api             # API routes (if any frontend-proxied)
|   |-- /(auth)          # Route group for auth pages
|   |   |-- /login
|   |   |-- /register
|   |-- /(dashboard)     # Route group for protected user pages
|   |   |-- /orders
|   |   |-- /subscriptions
|   |-- layout.tsx       # Root layout
|   |-- page.tsx         # Homepage
|-- /components          # Shared, reusable UI components
|   |-- /ui              # Generic components (Button, Input, Card)
|   |-- /layout          # Layout components (Navbar, Footer, Sidebar)
|-- /lib                 # Helper functions, utilities, API client
|   |-- api.ts           # Axios instance and API call functions
|   |-- hooks.ts         # Custom React hooks
|-- /store               # Redux Toolkit store setup
|   |-- /features        # Redux slices (e.g., authSlice.ts)
|   |-- store.ts
|-- /styles              # Global CSS
|   |-- globals.css
```

## 3. Main Layout (`/app/layout.tsx`)

The root layout will define the overall page structure for the entire application.

-   **Structure:**
    -   A main `<html>` and `<body>` tag.
    -   A `<Navbar>` component at the top.
    -   A `<main>` content area where the page content will be rendered.
    -   A `<Footer>` component at the bottom.
-   **Providers:** It will wrap the `children` with necessary providers:
    -   `ReduxProvider` to make the Redux store available to all components.
    -   A `ThemeProvider` for light/dark mode (if planned).
    -   A `ToastProvider` for displaying notifications.

## 4. Core UI Components (`/components/ui`)

A set of generic, reusable UI components will be created to ensure a consistent look and feel.

-   `Button.tsx`: A versatile button component with variants for primary, secondary, and destructive actions.
-   `Input.tsx`: A styled input field with label and error message handling.
-   `Card.tsx`: A container component with a border and shadow for displaying content blocks.
-   `Spinner.tsx`: A loading indicator.
-   `Modal.tsx`: A generic modal/dialog component.

## 5. Navigation (`/components/layout/Navbar.tsx`)

The navigation bar will be a key component for user interaction.

-   **Content:**
    -   Logo on the left.
    -   Main navigation links in the center (e.g., "Home", "Services", "About", "Contact").
    -   User authentication status on the right:
        -   If logged out: "Log In" and "Sign Up" buttons.
        -   If logged in: A user avatar with a dropdown menu (e.g., "Dashboard", "Settings", "Logout").
-   **State:** The Navbar will subscribe to the Redux `authSlice` to dynamically update its content based on the user's login status.
-   **Responsiveness:** The navigation will be fully responsive, collapsing into a hamburger menu on smaller screens.

This plan establishes a solid foundation for the frontend development, ensuring a scalable and maintainable codebase from the start.
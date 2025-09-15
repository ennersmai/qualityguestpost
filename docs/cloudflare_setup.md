# Cloudflare CDN & DNS Setup Plan

This document outlines the configuration for Cloudflare, which will act as the authoritative DNS and CDN for QualityGuestPost.com.

## 1. DNS Management

The primary goal is to point the domain to the DigitalOcean App Platform.

-   **Primary Record:**
    -   **Type:** `CNAME`
    -   **Name:** `qualityguestpost.com` (the root domain)
    -   **Target:** The default `*.ondigitalocean.app` domain provided by the DigitalOcean App Platform.
    -   **Proxy Status:** Proxied (Orange Cloud) to enable Cloudflare's CDN and security features.
-   **`www` Subdomain:**
    -   **Type:** `CNAME`
    -   **Name:** `www`
    -   **Target:** `@` (which points to `qualityguestpost.com`)
    -   **Proxy Status:** Proxied.
-   **Staging Subdomain:**
    -   **Type:** `CNAME`
    -   **Name:** `staging`
    -   **Target:** The specific `ondigitalocean.app` URL for the staging environment.
    -   **Proxy Status:** Proxied. This allows testing the full Cloudflare stack in a non-production environment.

## 2. SSL/TLS

-   **Mode:** `Full (Strict)`
    -   This ensures a secure connection from the client to Cloudflare and from Cloudflare to the DigitalOcean origin server.
    -   DigitalOcean App Platform provides a valid SSL certificate by default, making this mode the most secure option.
-   **Always Use HTTPS:** Enabled. This will redirect all `http://` requests to `https://`.
-   **Minimum TLS Version:** `1.2`.

## 3. Caching

-   **Caching Level:** `Standard`.
-   **Browser Cache TTL:** `4 hours`. This is a reasonable default for a dynamic application.
-   **Page Rules:**
    -   **Rule 1: Secure Admin Area**
        -   **URL:** `qualityguestpost.com/admin/*`
        -   **Settings:**
            -   **Security Level:** `High`
            -   **Cache Level:** `Bypass` (to prevent caching of sensitive admin data)
            -   **Disable Apps**
    -   **Rule 2: Cache Static Assets Aggressively**
        -   **URL:** `qualityguestpost.com/static/*`
        -   **Settings:**
            -   **Cache Level:** `Cache Everything`
            -   **Edge Cache TTL:** `7 days`

## 4. Performance & Optimization

-   **Auto Minify:** Enable for `JavaScript`, `CSS`, and `HTML`.
-   **Brotli:** Enable for faster compression.
-   **Rocket Loader™:** Keep **disabled** initially. It can sometimes interfere with modern JavaScript frameworks like Next.js. Can be tested later if needed.
-   **Early Hints:** Enable.

This configuration provides a secure, performant, and robust setup for the new platform.
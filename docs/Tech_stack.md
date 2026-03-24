# MapCombiner Technology Stack

This document outlines the core technologies and libraries used to build and maintain the MapCombiner application across web and mobile platforms.

## Core Framework & Build
- **[React 19](https://react.dev/)**: Used for building the user interface with a component-based architecture.
- **[Vite 7](https://vitejs.dev/)**: Provides a fast and optimized build environment for modern web development.
- **[ESLint](https://eslint.org/)**: Ensures code quality and consistency.

## Mobile Platform Integration
- **[Capacitor 8](https://capacitorjs.com/)**: Enables cross-platform development, allowing the single React codebase to run natively on both **iOS** and **Android**.
- **Capacitor Native Plugins**:
  - `@capacitor/share`: For native OS sharing of combined URLs.
  - `@capacitor/browser`: For opening external Google Maps links.
  - `@capacitor/haptics`: For providing physical feedback during user interactions.
  - `@capacitor/clipboard`: For copying result URLs to the system clipboard.

## UI & Styling
- **Modern CSS**: Custom responsive design system using CSS variables, glassmorphism effects, and a dark-theme aesthetic.
- **[Framer Motion](https://www.framer.com/motion/)**: Handles smooth layout transitions, page fades, and interactive micro-animations.
- **[Lucide React](https://lucide.dev/)**: Aesthetic and consistent iconography.
- **[qrcode.react](https://github.com/zpao/qrcode.react)**: Generates QR codes on the download page for easy store access.

## SEO & Discoverability
- **Sitemap & Robots**: Standardized `sitemap.xml` and `robots.txt` located in the `/public` root.
- **Semantic Metadata**: Comprehensive meta tags (OG, Twitter) and an internal hidden `<nav>` in `index.html` ensure the single-page application is correctly indexed by Google and other search crawlers.

## Deployment & Hosting
- **AWS**: Potentially used for static hosting and domain management (Refer to `DEPLOY_aws.md`).

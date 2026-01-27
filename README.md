# Cookiebot Demo

![project status](https://img.shields.io/badge/project_status-active-success?style=for-the-badge)
[![live site](https://img.shields.io/badge/live_site-blue?style=for-the-badge)](https://cookiebot-demo.mail-25a.workers.dev/)
[![Lighthouse report](<https://img.shields.io/badge/lighthouse_(mobile)-F44B21?style=for-the-badge&logo=lighthouse&logoColor=fff>)](https://googlechrome.github.io/lighthouse/viewer/?gist=be0a41dd3de5c24c02201ed29e5e5bfc)
[![Lighthouse report](<https://img.shields.io/badge/lighthouse_(desktop)-F44B21?style=for-the-badge&logo=lighthouse&logoColor=fff>)](https://googlechrome.github.io/lighthouse/viewer/?gist=e1c9ccff39947b08309a79a6e602bb7d)

Lighthouse note: The mobile performance score isn’t green mainly because the Cookiebot consent banner loads after [GTM](https://tagmanager.google.com/) and is counted as the [LCP](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint) element. This performance hit only affects users who haven’t given consent yet.

## Overview

This demo project showcases the integration of [Cookiebot CMP](https://www.cookiebot.com/us/) with [Google Analytics 4 (GA4)](https://analytics.google.com/) and [Microsoft Clarity](https://clarity.microsoft.com/) using the tech stack described below. [Google Tag Manager (GTM)](https://tagmanager.google.com/) is used to load the Cookiebot CMP consent banner and conditionally load GA4 and Clarity based on user consent. The main benefit of using GTM is the ability to manage and update tags without modifying the website code.

Website visitors can update their cookie preferences at any time by clicking on the [Cookiebot CMP privacy trigger](https://support.cookiebot.com/hc/en-us/articles/4406571299346-The-Cookiebot-CMP-Privacy-trigger) in the lower-left corner of the page.

## Tech Stack

### Frontend

- **Framework**: [Astro 5](https://astro.build/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)

### Backend

- **Hosting**: [Cloudflare Workers](https://workers.cloudflare.com/)

## Pages

- [Home](https://cookiebot-demo.mail-25a.workers.dev/)
- [Cookie declaration](https://cookiebot-demo.mail-25a.workers.dev/cookie-declaration)
- [Cookiebot info](https://cookiebot-demo.mail-25a.workers.dev/cookiebot-info)
- [404](https://cookiebot-demo.mail-25a.workers.dev/404)

Note that the homepage is a landing page for a fictional cybersecurity firm. This page was generated with [GPT-5.2-Codex](https://platform.openai.com/docs/models/gpt-5.2-codex) to make the demo more realistic.

## Cookiebot Legislation Presets

The Cookiebot CMP for this project is configured with the GDPR legislation preset for all website visitors. To apply separate legislation presets based on visitor location (e.g., GDPR for EU visitors, CCPA for US visitors), you will need to create multiple domain groups (even for the same domain). Note that the free plan of Cookiebot only allows for one domain and one domain group. Visit [Regulations](https://support.cookiebot.com/hc/en-us/categories/360000349934-Regulations) to learn more about the different legislation presets supported by Cookiebot.

## GTM Container Setup

The GTM container for this project is configured to enforce the basic [Google Consent Mode](https://support.cookiebot.com/hc/en-us/articles/12756353963292-About-Google-consent-mode). This is required for strict compliance because the advanced mode (Google's default) does not block tags from firing before user consent is granted.

The GTM container ID is located in the `.env` file as the variable `PUBLIC_GTM_CONTAINER_ID`. From the Cloudflare dashboard, it is possible to override this environment variable to use a different GTM container ID.

## GTM noscript Tag

The GTM noscript tag must not be included for the following reason (source: [Require consent before loading Facebook pixel](https://support.cookiebot.com/hc/en-us/articles/360004461894-Require-consent-before-loading-Facebook-pixel)):

> The `<noscript>` tags must be removed since Cookiebot is a JavaScript solution, and noscript is for browsers that do not support JavaScript.
> If you do include the `<noscript>` tag, then you may unintentionally be setting cookies without a visitor's consent.

## How to Update

To check for outdated packages, run `npm outdated`.

```bash
# Update dependencies (this will rewrite package-lock.json and package.json)
npm update --save
npm install --save-exact --save-dev prettier@latest prettier-plugin-astro@latest prettier-plugin-tailwindcss@latest
```

## Notes

- `.nvmrc` is used primarily as a way to specify the Node.js version for Cloudflare Workers (see [Build image](https://developers.cloudflare.com/workers/ci-cd/builds/build-image/))
- The GitHub Action `actions/setup-node@v6` relies on both `package.json` `engines` and `devEngines` to set the Node.js version and automatically cache npm dependencies.

## Dev Environment & Tools

- **System**: [Ubuntu](https://ubuntu.com/desktop)
- **Editor**: [VS Code](https://code.visualstudio.com/)
- **Formatter**: [Prettier](https://prettier.io/)
- **Linter**: [ESLint](https://eslint.org/)
- **AI assistant**: [GitHub Copilot](https://github.com/features/copilot)

## Copyright

© 2026 Johnny Gérard

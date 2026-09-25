# Space Tourism

A multi-page space tourism website built as a solution to the [Frontend Mentor "Space tourism website" challenge](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3).

**Live site:** https://soewaiyanag.github.io/space-tourism/

## About this project

This started as a vanilla JavaScript + Webpack build, put together to practice core JS fundamentals — DOM manipulation, `fetch`, event handling, and bundler configuration without the help of a framework.

It has since been rebuilt from the ground up on **Astro, TypeScript, and Tailwind CSS**, with the markup, spacing, and typography implemented directly from the challenge's Figma file rather than ported from the original build, to bring it fully in line with the source design and give it a proper portfolio-quality finish.

## Features

- Four pages — Home, Destination, Crew, Technology — matching the Figma design's mobile, tablet, and desktop layouts
- Accessible tab components on Destination, Crew, and Technology: proper ARIA `tablist`/`tab`/`tabpanel` semantics with roving tabindex and arrow-key navigation
- A responsive, accessible navigation bar with a keyboard- and screen-reader-friendly mobile menu
- Hover-based page prefetching and tab-image preloading, so navigating and switching tabs feels instant
- A subtle, `prefers-reduced-motion`-aware rotation on the destination planet image

## Built with

- [Astro](https://astro.build/)
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- Semantic HTML and WAI-ARIA patterns for all interactive components

## Running locally

```bash
yarn install
yarn dev
```

```bash
yarn build     # type-checks and builds to ./dist
yarn preview   # preview the production build locally
```

## Deployment

Pushes to `main` build and deploy automatically to GitHub Pages via `.github/workflows/deploy.yml`.

## Author

- Soe Wai Yan Aung

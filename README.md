# Space Tourism

A multi-page space tourism website — solution to the [Frontend Mentor Space tourism website challenge](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3), rebuilt on Astro with warp-style page transitions.

## Links

- Live site: https://soewaiyanag.github.io/space-tourism/
- Repo: https://github.com/soewaiyanag/space-tourism

## Overview

Four pages — Home, Destination, Crew, Technology — with accessible tabbed content on the last three, and a hyperspace-jump animation between pages powered by the View Transitions API.

## Built with

- [Astro](https://astro.build/)
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- Astro View Transitions (`<ClientRouter />`), with a custom warp-jump animation and full `prefers-reduced-motion` support
- Semantic HTML, ARIA tablist pattern (roving tabindex, arrow-key navigation) for the tab components

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

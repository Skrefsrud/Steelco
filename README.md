# Steelco-Teknikk website

Source for [www.steelco.no](https://www.steelco.no), the website of Steelco-Teknikk AS.

Built with Next.js (App Router), TypeScript and Tailwind CSS. Deployed on Vercel from `main`.

## Development

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build    # production build, also generates sitemap.xml and robots.txt
npm run lint
```

## Structure

- `src/app` - pages (`/`, `/products`, `/products/isoblock`, `/products/ballastlim`, `/products/kabelkanaler`, `/contact`)
- `src/components` - shared components
- `public/assets` - product images and downloadable PDFs, one folder per product

## Rights

Text, images, logos and documents on this site belong to Steelco-Teknikk AS. See `LICENSE.md`.

# Red Oak Land Clearing — Website

Astro site for a local land clearing company (placeholder business name, phone, address and reviews).

## Commands

| Command           | Action                                  |
| ----------------- | --------------------------------------- |
| `npm install`     | Install dependencies                    |
| `npm run dev`     | Start dev server at `localhost:4321`    |
| `npm run build`   | Build the production site to `./dist/`  |
| `npm run preview` | Preview the production build locally    |

## Customizing

- **Business info, services, testimonials:** `src/data/site.ts` — name, phone, email, address, hours, service areas, and every service (title, copy, image, FAQs). Services in the navbar dropdown, footer, contact form and `/services/[slug]` pages are all generated from this file.
- **Colors & fonts:** CSS variables at the top of `src/styles/global.css`.
- **Contact form:** set `FORM_ENDPOINT` in `src/pages/contact.astro` to a form backend (e.g. Formspree, Basin, Getform). While it's empty, the form validates and shows the success message without sending anything.
- **Images:** `src/assets/images/`. Astro converts them to responsive WebP automatically at build time.

## Pages

- `/` — Home
- `/services` — All services overview
- `/services/<slug>` — Individual service pages (land-clearing, forestry-mulching, tree-removal, stump-removal, brush-clearing, site-prep)
- `/about` — About
- `/contact` — Quote request form

## Photo credits

All photos are from [Unsplash](https://unsplash.com) and used under the Unsplash License (free for commercial use, no attribution required).

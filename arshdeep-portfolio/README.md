# Arshdeep Singh — Portfolio (Next.js + Tailwind)

## Run locally (type each line on its own)
1. `npm install`
2. `npm run dev`
3. Open http://localhost:3000

## Edit content
Everything (case studies, experience, skills, links) is in `lib/content.ts`.

## Replace images
Put new images in `public/work/<project>/` (webp, about 1000px wide), then change the `src` in `lib/content.ts`.

## Replace the resume
Overwrite `public/Arshdeep_Singh_Resume.pdf` with the same file name.

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. vercel.com → Add New → Project → import the repo → Deploy.
3. Copy the live URL into `SITE.url` in `lib/content.ts`, then commit and push (this fixes the sitemap, canonical and Open Graph URLs).

## Custom domain later
Vercel → Project → Settings → Domains → add the domain, set the DNS records Vercel shows, then update `SITE.url`.

## Analytics later
Add the GA4 or GTM snippet in `app/layout.tsx` where the comment is.

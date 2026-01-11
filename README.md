<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1QkkmkVVHRvA0bKPrRl6QOEi5szXCW8kV

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies: `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app: `npm run dev`

## Build for Production

1. (Optional) Set a base path if deploying under a subfolder (e.g., GitHub Pages) by adding `VITE_BASE_PATH=/Magic-Wrapz-Redesign/` to `.env.production`.
2. Build: `npm run build`
3. The static files are emitted to `dist/` and can be uploaded to any static host.

## Deploy

- **GitHub Pages:** With `VITE_BASE_PATH` set to `/Magic-Wrapz-Redesign/`, run `npm run deploy`. This builds and publishes `dist/` via `gh-pages`.
- **Any static host:** Build with `npm run build`, then upload the contents of `dist/` to your hosting provider (e.g., Netlify, Vercel static export, S3 + CloudFront, or cPanel file manager).

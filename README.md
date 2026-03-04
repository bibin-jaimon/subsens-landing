# SubSens Marketing Website

CRED-inspired landing page built with React, Framer Motion, and Tailwind.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Output in `dist/`. Deploy `dist/` to your hosting (Vercel, Netlify, GitHub Pages).

## Deploy to GitHub Pages (same account, separate repo)

1. Create a new public repo (e.g. `subsens-landing`) under your GitHub account
2. Push this folder to it:
   ```bash
   cd /Users/bibinjaimon/Developer/subsens-landing
   git add .
   git commit -m "Initial commit: SubSens marketing site"
   git remote add origin https://github.com/bibin-jaimon/subsens-landing.git
   git branch -M main
   git push -u origin main
   ```
3. Repo **Settings** → **Pages** → Source: **GitHub Actions**
4. Site will be at: **https://bibin-jaimon.github.io/subsens-landing/**

If you use a different repo name, set `base: '/your-repo-name/'` in `vite.config.ts`

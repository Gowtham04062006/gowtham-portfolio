# Leela Gowtham Guntreddi — Portfolio

A responsive, single-page portfolio built with React, Vite, CSS, and Lucide React. All navigation uses smooth scrolling; the page does not switch routes.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

The Vite base path is configured as `/portfolio/` for the repository `Gowtham04062006/portfolio`. Build with `npm run build`, then deploy the `dist` directory using GitHub Pages (or your existing deployment workflow).

## Included assets

- `public/images/profile.jpg` — supplied profile photo
- `public/images/` — screenshots supplied in the chat for the five project cards
- `public/resume.pdf` — supplied resume

## Update content

Edit `src/data/portfolio.js` to change profile details, skills, project descriptions/links, and education. Replace image files in `public/images/` to update screenshots.

## Contact form

The contact form opens the visitor's default email app with a pre-filled message addressed to the portfolio email. It does not require a backend service.

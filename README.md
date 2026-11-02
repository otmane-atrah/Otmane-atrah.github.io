# Otmane Atrah — Portfolio

Personal portfolio (Systems & Network Technician), built with Next.js, Tailwind CSS and Framer Motion,
exported as a static site and deployed to GitHub Pages.

Based on the open-source portfolio template by abhay-rana. All personal content has been replaced.
If you publish this, keep a credit to the original author and check the original repository's license.

## Edit your content

All text lives in `src/data/`:

| File | What it controls |
| --- | --- |
| `personal.ts` | name, title, bio, email, location, languages, GitHub/LinkedIn links |
| `site-config.ts` | page title, description, site URL (SEO) |
| `experience.ts` | internships / jobs |
| `education.ts` | diplomas |
| `projects.ts` | projects (add `githubUrl` / `liveUrl` to show links) |
| `skills.ts` | skill categories and badges |
| `navigation.ts` | navbar items |

Other things to replace:
- `public/resume.pdf`: your CV (the "Resume" buttons open this file)
- `public/profile/`: put your photo(s) here (`.jpg`, `.png`, `.webp`). With several photos you get a carousel; with none, the initials "OA" are shown. HEIC photos are converted automatically.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3001
```

## Build

```bash
npm run build    # static site in ./out
```

## Deploy on GitHub Pages

1. Create a repo named `<your-username>.github.io` and push this project to the `main` branch.
2. On GitHub: **Settings -> Pages -> Build and deployment -> Source: GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push.
4. In `src/data/site-config.ts`, set `url` to `https://<your-username>.github.io`.

Using a different repo name (e.g. `portfolio`)? Uncomment `basePath: "/portfolio"` in `next.config.ts`.

## Blog (optional)

Add Markdown files to `content/blog/` with front matter (`title`, `date`, `description`, `tags`, `published: true`).
The blog is not linked from the homepage; link it in `src/data/navigation.ts` (`href: "/blog"`) when you have posts.

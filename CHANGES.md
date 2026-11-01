# What was changed

## Removed (original author's content)
- Photos in `public/profile/`, `public/testimonials/`, blog media in `public/blog/`, default Next.js SVGs
- His resume (`public/resume.pdf`), his blog post (`content/blog/`), `CLAUDE.md`, `docs/`
- Testimonials section, component and data (his clients' quotes)
- His name, email, social links, projects (ResumeFreePro, create-modern-react, HealthMug), experience, skills

## Added / rewritten
- `src/data/personal.ts`, `site-config.ts`, `experience.ts`, `projects.ts`, `skills.ts`, `navigation.ts`: your CV content
- `src/data/education.ts` + `src/components/sections/Education.tsx`: new Education section
- `public/resume.pdf`: your CV
- `README.md`: new instructions; `.github/workflows/deploy.yml`: GitHub Pages deploy

## Code changes
- `next.config.ts`: `output: "export"`, unoptimized images, trailing slashes (needed for GitHub Pages)
- `robots.ts`, `sitemap.ts`: `force-static`; blog entry only listed if posts exist
- `blog/[slug]/page.tsx`: placeholder param so the static build works with zero posts; removed his Twitter handle
- `blog/page.tsx`: metadata uses your site config
- `About.tsx`: honest stats (3 internships, 2025 graduate, 9 lab servers), languages line, "OA" initials when no photo
- `Hero.tsx`: new tagline; `Contact.tsx` / `Footer.tsx`: hide social links with an empty URL
- `SkillBadge.tsx`: icons optional, hidden if they fail to load
- `ProjectCard.tsx`, `Projects.tsx`: new icons, 2-column grid for 3 projects
- `types/data.ts`: Education and Language types, optional icon/image
- `package.json` name: `otmane-portfolio`

## Update — projects, certificates, education, skills
- `src/data/projects.ts`: replaced with 12 projects covering monitoring automation, core network services, Windows AD/GPO/IPAM, enterprise security, Cisco mini-labs, site-to-site VPN, scripting, Python network programming, Ansible automation, pfSense, CCTV auto-provisioning, Zabbix docs
- Added **Certificates** section: `src/data/certificates.ts`, `src/components/sections/Certificates.tsx`, `Certificate` type in `src/types/data.ts`, wired into `page.tsx` and `navigation.ts` — 8 certificates with verification links where you provided them
- `src/data/education.ts`: added current SUPMTI License Pro (ISI) at the top
- `src/data/skills.ts`: added Hardware & Cabling, Network Equipment, Network Security, and Monitoring & Analysis (Wireshark, Nmap, tcpdump, netstat) categories

## Update — photo/video gallery
- Added `MediaItem` type (`image` | `video`) and a `media?` field on `Project`
- New `src/components/ui/Lightbox.tsx`: click-to-enlarge viewer with prev/next, captions, Escape to close — reused everywhere
- `ProjectCard.tsx`: shows up to 4 thumbnails per project (videos show a play icon), click opens the lightbox
- New **Gallery** section (`src/data/gallery.ts`, `src/components/sections/Gallery.tsx`), wired into `page.tsx` and `navigation.ts` — for general field-work photos/videos not tied to one project. Hidden automatically while `galleryItems` is empty.
- `public/gallery/` folder created for these files.

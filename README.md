# StarThink — Experiment

**StarThink Digital Marketing Group** , a Malaysian digital marketing agency helping small businesses grow through creative content, strategy, and storytelling.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 — custom unminified `css/main.css` |
| Scripting | Vanilla JS + jQuery — `js/app.js` |
| Animation | GSAP (ScrollTrigger, Flip, SplitType) |
| Smooth Scroll | Lenis |
| Icons | Phosphor Icons (local font), Font Awesome 6 (CDN) |
| Typography | Funnel Display, Funnel Sans (Google Fonts) |
| Particle BG | HTML5 Canvas API — `js/particles.js` |
| Slider | Swiper.js |
| Lightbox | Magnific Popup |
| SVG | SVG Injector |
| Layout | Bootstrap 5 grid |

---

## Project Structure

```
ST-Web/
├── index.html              # Homepage
├── about-us.html           # About page
├── services.html           # Services page
├── works-simple.html       # Projects / portfolio page
├── all_article.html        # Articles listing
├── blog-article.html       # Single article template
├── contact.html            # Contact page
│
├── css/
│   ├── main.css            # Main stylesheet (edit this)
│   ├── main.min.css        # Minified (not referenced by HTML)
│   ├── plugins.min.css     # Bundled plugin styles
│   ├── loaders/
│   │   └── loader.css      # Loading screen animation
│   └── custom/
│       ├── orbs.css        # Floating background orb animations
│       ├── services.css    # Service card grid styles
│       ├── projects.css    # Project card styles
│       └── article.css     # Article/blog styles
│
├── js/
│   ├── app.js              # Main app logic (edit this)
│   ├── app.min.js          # Minified version
│   ├── libs.min.js         # All library bundles (GSAP, Swiper, etc.)
│   └── particles.js        # Canvas particle background
│
├── img/
│   ├── logo/               # Logo files and favicon
│   ├── team/               # Team member photos
│   ├── works/              # Project poster images
│   ├── services/           # Service section images
│   ├── brands/             # Client/partner logos
│   └── 3D_Object/          # 3D decorative assets
│
├── fonts/
│   └── Phosphor/           # Phosphor icon font files
│
├── video/                  # Hero and menu promo videos
│
└── source-files/           # Library source files — do not edit
```

---

## Pages

### `index.html` — Homepage
Hero with particle canvas + video background, interactive orbit, service cards, statistics, marquee, testimonials, and partners.

### `about-us.html` — About Us
Team story, mission & vision cards, team member grid, company values list.

### `services.html` — Services
9-service card grid covering content planning, video editing, paid ads, social media management, poster design, and website development.

### `works-simple.html` — Projects
6 portfolio case studies with image/video, client name, location, year, service tags, description with deliverables, and key metrics (leads, cost, duration).

### `all_article.html` — Articles
Article listing page with blog/article cards.

### `blog-article.html` — Single Article
Individual article detail template.

### `contact.html` — Contact
Contact channels (WhatsApp, email, phone), social media links, office info, business hours, and FAQ — no data collection form.

---

## Editing Guidelines

- **Always edit `css/main.css`** — not `main.min.css` (minified, not referenced).
- **Always edit `js/app.js`** — not `app.min.js`.
- **Do not edit anything inside `source-files/`** — these are library sources.
- Custom page-specific styles live in `css/custom/` — add new files there and link them in the relevant HTML `<head>`.
- All pages share the same nav, header, footer, loader, particle canvas, and floating orbs pattern — copy from an existing inner page when adding a new one.

---

## Brand

| | |
|---|---|
| Primary colour | `#0D0D0D` (near-black background) |
| Accent colour | `#89F336` / `var(--additional)` (lime green) |
| Heading font | Funnel Display |
| Body font | Funnel Sans |
| WhatsApp | +60 12 264 6895 |
| Email | sales@starthink.net |
| Address | No. 44-2, 1st Floor, Jln USJ 9/5P, Subang Business Centre, 47620 Subang Jaya, Selangor |

---

## Social Media

| Platform | Handle |
|---|---|
| Instagram | [@starthink_my](https://www.instagram.com/starthink_my/) |
| Facebook | [StarThink](https://www.facebook.com/profile.php?id=61580456730158) |
| TikTok | [@starthink_my](https://www.tiktok.com/@starthink_my) |
| Threads | [@starthink_my](https://www.threads.com/@starthink_my) |

---



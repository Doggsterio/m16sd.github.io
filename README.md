# M16SD — Weapon Steel Manufacturing

Business card website for M16SD, a weapon-grade steel and blade manufacturing company.

## Tech Stack

- **HTML5** — semantic markup
- **Tailwind CSS v3** — utility-first styling via CDN
- **Vanilla JavaScript** — no dependencies
- **Google Fonts** — Cinzel (headings) + Inter (body text)

## Features

- Responsive design (mobile, tablet, desktop)
- Dark theme with gold accent colors
- Bilingual support (RU / EN) with language switcher
- Smooth scroll navigation
- Scroll-triggered fade-in animations
- Image gallery with lightbox viewer
- Fixed header with scroll background effect
- Scroll-to-top button

## Sections

1. **Header** — fixed navigation, logo, language switcher
2. **Hero** — full-screen banner with CTA
3. **About** — company info, stats
4. **Products** — daggers, swords, knives, steel billets
5. **Gallery** — photo grid with lightbox
6. **Advantages** — quality, handmade, custom orders, delivery
7. **Contacts** — address, phone, email, working hours, map
8. **Footer** — navigation, socials, copyright

## File Structure

```
blades-steel/
  index.html        — main page
  style.css         — custom styles
  script.js         — i18n, menu, lightbox, animations
  images/           — product and gallery images
  README.md         — this file
```

## How to Run

Simply open `index.html` in a web browser. No build step required.

> **Note:** Tailwind CSS is loaded via CDN, so an internet connection is required for styling.

## Replacing Images

All images are stored in the `images/` folder. To replace AI-generated images with real product photos, simply swap out the files keeping the same filenames:

- `hero-bg.png` — hero section background
- `product-dagger.png` — dagger product card
- `product-sword.png` — sword product card
- `product-knife.png` — knife product card
- `product-steel.png` — steel billet product card
- `gallery-1.png` — gallery: forging process
- `gallery-2.png` — gallery: workshop
- `gallery-3.png` — gallery: Damascus steel macro
- `gallery-4.png` — gallery: showcase display

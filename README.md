# Atlas Roofing Solutions — Berlin

A high-conversion, mobile-first roofing website built with **Next.js 14** (App Router) and **Tailwind CSS**. Designed as a lead generation machine optimized for local service businesses.

## Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Install & Run Locally

```bash
# Clone the repo
git clone https://github.com/YOUR-USERNAME/atlas-roofing-solutions.git
cd atlas-roofing-solutions

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deploy on Vercel

### Option 1: One-Click Deploy
1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Click **Deploy** — no configuration needed

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js.

## Project Structure

```
atlas-roofing-solutions/
├── app/
│   ├── layout.js          # Root layout with SEO meta
│   └── page.js            # Main page (all sections)
├── components/
│   ├── Header.js          # Top bar + sticky nav
│   ├── Footer.js          # Site footer
│   ├── sections/          # All page sections
│   │   ├── Hero.js
│   │   ├── TrustStrip.js
│   │   ├── Services.js
│   │   ├── Proof.js
│   │   ├── Pricing.js
│   │   ├── Process.js
│   │   ├── TrustBuilding.js
│   │   ├── CTABand.js
│   │   ├── FAQ.js
│   │   └── ContactForm.js
│   └── ui/                # Reusable UI components
│       ├── CTAButton.js
│       ├── SectionWrapper.js
│       ├── SectionHeading.js
│       └── MobileStickyCTA.js
├── public/
│   └── images/            # Place project photos here
├── styles/
│   └── globals.css        # Tailwind + custom styles
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── jsconfig.json
└── package.json
```

## Customization

### Business Info
Update phone number, business name, and WhatsApp link in each component. Key files:
- `components/Header.js` — phone, nav links
- `components/sections/Hero.js` — headline, phone
- `components/sections/ContactForm.js` — phone, WhatsApp, hours
- `components/sections/CTABand.js` — phone
- `components/Footer.js` — phone, service areas

### Images
Replace placeholder gradients with real project photos:
1. Add images to `/public/images/`
2. Use `<Image>` from `next/image` in components

### Form Backend
The contact form currently shows a success state on submit. Connect it to:
- [Formspree](https://formspree.io)
- [Netlify Forms](https://docs.netlify.com/forms/setup/)
- A custom Next.js API route (`/app/api/contact/route.js`)

## Tech Stack
- **Next.js 14** (App Router)
- **Tailwind CSS 3.4**
- **React 18**
- No external UI library dependencies

## License
Private — built for Atlas Roofing Solutions.

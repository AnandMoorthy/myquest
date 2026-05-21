# MyQuest Landing Page

A premium, dark mode landing page for **MyQuest**, a social discovery app for nearby micro activities and spontaneous real world experiences.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/) (icons)
- Plus Jakarta Sans via `next/font`

## Getting Started

**Requirements:** Node.js 20.9+ (Next.js 16)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Features

- Fullscreen hero with interactive abstract map and animated quest pins
- Glassmorphism hover cards on pins
- Floating navbar with scroll blur
- Features, How it Works, and Final CTA sections
- Coming Soon modal with email waitlist (client side only)
- Fully responsive layout
- Scroll triggered animations and reduced motion support

## Project Structure

```
app/              # Next.js app router (layout, page, globals)
components/       # UI, sections, map, layout, providers
data/             # Mock content
hooks/            # Scroll and mouse gradient hooks
lib/              # Motion variants and utilities
```

## Brand

- Primary: `#2563EB`
- Accent: `#60A5FA`
- Orange: `#F97316`

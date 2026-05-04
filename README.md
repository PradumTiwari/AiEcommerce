# NOVA Shop — React + TypeScript + Tailwind

A modern ecommerce website built with Vite, React 18, TypeScript, and Tailwind CSS v3.

## Quick Start

### Prerequisites
- Node.js 18+ installed ([https://nodejs.org](https://nodejs.org))

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open your browser at http://localhost:5173
```

### Build for production
```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx        — Sticky nav with cart icon, mobile hamburger
│   ├── Hero.tsx          — Full-screen hero with animated product card
│   ├── Marquee.tsx       — Scrolling promo banner
│   ├── Categories.tsx    — Category grid
│   ├── Products.tsx      — Filterable product grid
│   ├── ProductCard.tsx   — Individual product card with wishlist
│   ├── Features.tsx      — Why choose us section
│   ├── Newsletter.tsx    — Email subscription section
│   ├── Footer.tsx        — Site footer
│   └── CartSidebar.tsx   — Slide-in cart panel
├── context/
│   ├── CartContext.tsx   — Cart state management
│   └── ToastContext.tsx  — Toast notification system
├── data/
│   └── products.ts       — Product & category data
├── types/
│   └── index.ts          — TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css
```

## Features
- ✅ Sticky navbar with mobile hamburger menu
- ✅ Hero section with floating animated card
- ✅ Scrolling marquee banner
- ✅ Shop by category grid
- ✅ Filterable product grid (All / New / Sale / Popular)
- ✅ Add to cart with live count badge
- ✅ Slide-in cart sidebar with item management
- ✅ Wishlist toggle per product
- ✅ Toast notifications
- ✅ Newsletter subscription
- ✅ Fully responsive (mobile → desktop)

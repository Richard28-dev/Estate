# Secure Stay — Where Trust Meets Luxury Living

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Secure%20Stay%20Platform-C6A868?style=for-the-badge&logo=google-chrome&logoColor=081312)](https://richard28-dev.github.io/Estate/)
[![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-brightgreen?style=for-the-badge&logo=github)](https://richard28-dev.github.io/Estate/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-13.4-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

> **Live Working Website**: [https://richard28-dev.github.io/Estate/](https://richard28-dev.github.io/Estate/)

---

## 🏛️ Brand & Platform Overview

**Secure Stay** is an ultra-luxury real estate web application curated for high-net-worth individuals, institutional investors, and family offices looking for prime villas, skyline penthouses, and heritage coastal sanctuaries.

The application combines a high-fashion editorial magazine aesthetic with private wealth-management discretion, cinematic parallax scrolling, smooth scroll-driven reveals, and real-time interactive property dossiers.

---

## ✨ Key Features & Architectural Highlights

### 1. Dynamic Scroll-Spy Navigation
- Pinned glassmorphic navbar with active scroll-spy detection that tracks viewport position across **Home**, **Properties**, **About**, and **Contact**.
- Smooth spring-physics gold indicator underline that glides between sections as you scroll.
- Offset smooth-scrolling to ensure section headers are perfectly framed below the header.

### 2. Luxury Floating Search Bar
- Multi-tone emerald obsidian frosted glass (`backdrop-blur-2xl`) with hairline gold crest lines and subtle ambient glow.
- Bespoke animated popover dropdowns for **Location** (corridors), **Property Type** (typologies), and **Valuation Tier** (capital range).
- Shimmering champagne gold search CTA with light sheen reflection and micro-interactions.

### 3. Site-Wide Mouse Scroll-Driven Animations
- **Top Luxury Scroll Progress Bar**: A 3px gold meter pinned to the browser ceiling tracking reading progress via Framer Motion springs.
- **Cinematic Parallax Hero**: Ultra-high-resolution dusk architectural sunset villa with depth parallax and left-aligned editorial layout.
- **Scroll Reveals (`whileInView`)**: Staggered card entrances, live counter animations, and split-screen spotlight reveals.
- **Back-to-Top Quick Return**: Discreet gold floating button that reveals past 500px of scrolling.

### 4. Interactive Property Dossiers & Private Office Modals
- Full inspection modal featuring image carousels, architectural specs, verified RERA certificates, and private viewing booking.
- VIP Client Portal authentication dialog supporting Access Key and Encrypted OTP modes.
- Confidential inquiry forms with mutual Non-Disclosure Agreement (NDA) request protocols.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS + Vanilla CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Cormorant Garamond (Serif Display) + Plus Jakarta Sans (Body)
- **Deployment**: GitHub Pages via GitHub Actions CI/CD

---

## 🚀 Local Development Setup

To run this project locally on your machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Richard28-dev/Estate.git
   cd Estate
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build production bundle**:
   ```bash
   npm run build
   ```

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 🌐 GitHub Pages Deployment Configuration

This repository includes an automated GitHub Actions deployment workflow located at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

To ensure GitHub Pages serves the live site from GitHub Actions:
1. Navigate to your repository on GitHub: [https://github.com/Richard28-dev/Estate](https://github.com/Richard28-dev/Estate).
2. Go to **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. The workflow will automatically trigger on push to `main` and deploy to:  
   👉 **[https://richard28-dev.github.io/Estate/](https://richard28-dev.github.io/Estate/)**

---

© 2026 Secure Stay Real Estates. All rights reserved. Confidential & Proprietary.

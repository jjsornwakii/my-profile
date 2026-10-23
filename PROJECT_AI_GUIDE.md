# 🤖 Project Knowledge Base for AI Agents

> **File:** `PROJECT_AI_GUIDE.md`  
> **Target Audience:** AI Agents & Developers working on this codebase.

---

## 1. Developer Profile & Experience

- **Full Name**: Siwakorn Suriya (Nickname: Jay) / ศิวกร สุริยะ
- **Primary Role**: Mobile Developer (Android & iOS)
- **Core Specialization**:
  - **Kotlin Native (Android)**: Primary language and platform of choice. Building high-performance, maintainable native Android applications using modern architecture patterns (MVVM/Clean Architecture, Coroutines, Jetpack Compose/Views).
  - **Store Management & Operations**: Experience in uploading, deploying, updating, and maintaining applications on both **Google Play Store** (Google Play Console) and **Apple App Store** (App Store Connect).
  - **Legacy App Modernization**: Updating and refactoring older apps to conform with newer OS target SDK requirements, library migrations, and policy compliance.
  - **Business-Oriented Apps**: Specializing in commercial, business, and enterprise mobile solutions.
  - **Swift (iOS)**: Basic experience with Swift and iOS development.
  - **Flutter**: Familiar with Flutter for cross-platform maintenance and collaboration with existing teams.
- **Education**: Bachelor of Computer Engineering, King Mongkut's Institute of Technology Ladkrabang (KMITL).

---

## 2. Tech Stack & Architecture

- **Framework**: React 19 + TypeScript + Vite
- **Design System**: **Obsidian Aurum** (derived from Google Stitch Design)
  - Color Palette: Deep Obsidian background (`#131317`, `#0e0e12`, `#1b1b1f`), Radiant Amber accents (`#f2c942`, `#ffe8a9`, `#efc135`), Hairline borders (`rgba(255,255,255,0.08)` to gold focus)
  - Typography: `Geist` for body & headlines, `JetBrains Mono` for code blocks, badges & status pills
  - Icons: Google `Material Symbols Outlined`
  - Floating pill Navbar with responsive mobile menu & live scroll spy
  - Hero section featuring 3D interactive tilt terminal mockup (`MobileKernel.kt`), live pipeline beacons & stats
  - 3-pillar engineering cards with dynamic frame-latency metric visualization
  - Bento Box tech stack showcase (Core Mobile, Frontend & UI, Backend & Cloud, Dev Tooling)
  - Interactive portfolio cards with animated PPG camera sensor simulation, Wear OS watch face, and ALPR smart gate view
  - Glassmorphic inquiry form with EmailJS integration and response acknowledgment
- **Internationalization (i18n)**:
  - `i18next`, `react-i18next`, `i18next-http-backend`, `i18next-browser-languagedetector`
  - Localization files located in:
    - `public/locales/th/translation.json` (Thai)
    - `public/locales/en/translation.json` (English)
- **Contact Service**: `@emailjs/browser` (EmailJS for sending inquiries without a standalone server)

---

## 3. Directory & File Map

```
my-profile/
├── public/
│   ├── assets/img/profile/   # Profile images
│   ├── locales/
│   │   ├── en/translation.json # English strings
│   │   └── th/translation.json # Thai strings
│   └── pdf/Resume.pdf        # Downloadable resume
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Floating pill nav + active scroll spy + language capsule
│   │   ├── Content.tsx       # Main page container with parallax ambient background
│   │   ├── Footer.tsx        # Obsidian Aurum footer with social links & back to top
│   │   └── subcontent/
│   │       ├── Home.tsx      # Hero section (Interactive 3D MobileKernel.kt terminal card, CTA buttons)
│   │       ├── About.tsx     # About section (3 Pillars: Kotlin Native, Store Ops, Business Modernization)
│   │       ├── Skill.tsx     # Bento Box technical arsenal
│   │       ├── Portfolio.tsx # Projects showcase (PPG Health, Wear OS, ALPR Smart Parking)
│   │       └── Cotact.tsx    # Glassmorphic contact form + direct connect cards
│   ├── App.tsx               # App root
│   ├── index.css             # Global Tailwind, Geist/JetBrains fonts & ambient animations
│   └── main.tsx              # React DOM entrypoint
└── PROJECT_AI_GUIDE.md       # This AI agent knowledge file
```

---

## 4. Commands

```bash
# Start development server
npm run dev

# Run production build & verify TypeScript
npm run build

# Preview build
npm run preview
```

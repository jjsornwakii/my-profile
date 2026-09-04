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
- **Styling**: Tailwind CSS + Custom CSS (`src/index.css`) featuring:
  - Custom scrollbar & glassmorphism (`glass-panel`)
  - Floating ambient parallax lighting (`animate-float`, `animate-glow`)
  - 3D perspective mouse hover tilt card on profile picture
  - Floating pill Navbar with live active scroll spy & language switch capsule
  - Interactive project filtering tabs (All, Mobile Applications, IoT & Smart Watch, Web Systems)
  - Glassmorphic portfolio project cards with hover zoom and sleek tag badges
  - Dark-theme modern footer with glowing ambient backdrop and interactive social links
  - Responsive layout for desktop, tablet, and mobile
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
│   │   ├── Navbar.tsx        # Floating glassmorphic capsule nav + active scroll spy + language capsule
│   │   ├── Content.tsx       # Main page container with IntersectionObserver + parallax background
│   │   ├── Footer.tsx        # Sleek dark footer with social links & glowing accent
│   │   └── subcontent/
│   │       ├── Home.tsx      # Hero section (3D tilt photo, tags, CTA buttons)
│   │       ├── About.tsx     # About section (Pillars: Kotlin, Store Ops, Business Apps)
│   │       ├── Skill.tsx     # Tech stack (Mobile Dev highlighted first)
│   │       ├── Portfolio.tsx # Projects showcase with category filter pills
│   │       ├── sub-potfolio/ # Individual project detail cards (Port1-Port4)
│   │       └── Cotact.tsx    # Interactive contact form
│   ├── App.tsx               # App root
│   ├── index.css             # Global Tailwind & animation styles
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

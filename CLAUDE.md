# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 website for DVIA (DaeilSystem), a company specializing in vibration isolation systems. The project uses the App Router with TypeScript, Tailwind CSS, and multiple UI libraries.

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture

### Project Structure
- **`app/`** - Next.js App Router pages and layouts
  - Uses Server Components with `client.tsx` files for client-side functionality
  - Dynamic routes: `[category]/[product]/` for product pages
  - Layout pattern: `layout.tsx` + `page.tsx` + `client.tsx`
- **`components/`** - Reusable React components
  - `ui/` - shadcn/ui components and custom UI primitives
  - `navigation/` - Navigation components with dropdown menus
- **`data/`** - Static data files for menu items, newsroom content, company info
- **`hooks/`** - Custom React hooks for language, theme, and other state management
- **`lib/`** - Utility functions and configurations
- **`constants/`** - Static constants including translations
- **`types/`** - TypeScript type definitions

### Key Dependencies
- **UI Framework**: Radix UI primitives with custom styling
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for page transitions and interactions
- **Smooth Scrolling**: @studio-freight/lenis
- **Scroll Animations**: ScrollMagic
- **Icons**: Lucide React

### Component Patterns
- Server Components by default with client components marked with `"use client"`
- Client-side logic separated into dedicated `client.tsx` files
- Consistent use of TypeScript with strict mode enabled
- Custom hooks for shared state (language, theme)

### Internationalization
- Bilingual support (English/Korean) using custom translation system
- Language state managed via `useLanguage` hook
- Translations stored in `constants/translations`

### Configuration Notes
- TypeScript and ESLint errors ignored during build (see `next.config.mjs`)
- Images are unoptimized for deployment
- Path aliases configured with `@/` pointing to root directory
- Dark theme by default with theme provider setup

### Data Management
- Static data files in `data/` directory for menu items and content
- No external database - content managed through TypeScript files
- ISR (Incremental Static Regeneration) used on homepage with 1-hour revalidation

### Navigation Structure
- Fixed navigation with dropdown menus
- Mobile-responsive with hamburger menu
- Hover states for desktop dropdown menus
- External links to main company website (daeilsys.com)
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production application
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality

### Development Workflow
- Development server supports hot reload - changes to files in `src/app/` are reflected immediately
- Main entry point is `src/app/page.tsx`
- Layout is defined in `src/app/layout.tsx`

## Architecture

### Project Structure
This is a Next.js 15 application using the App Router architecture:

- **Framework**: Next.js 15.5.4 with React 19
- **TypeScript**: Full TypeScript setup with strict mode
- **Styling**: Tailwind CSS v4 with custom CSS variables for theming
- **Font**: Geist Sans and Geist Mono via next/font/google

### Key Files
- `src/app/layout.tsx` - Root layout with font configuration and metadata
- `src/app/page.tsx` - Home page component
- `src/app/globals.css` - Global styles with CSS variables for light/dark themes
- `tsconfig.json` - Path mapping configured for `@/*` to `./src/*`

### Styling System
- Tailwind CSS v4 with CSS-in-JS approach
- CSS variables for theming (`--background`, `--foreground`)
- Automatic dark mode support via `prefers-color-scheme`
- Font variables defined globally: `--font-geist-sans`, `--font-geist-mono`

### Configuration
- ESLint extends Next.js core web vitals and TypeScript rules
- PostCSS configured for Tailwind CSS processing
- TypeScript strict mode enabled with modern ES2017 target
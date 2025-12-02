# Agent Guide

This repository contains a Next.js project. Use this guide to understand the codebase and work effectively.

## Project Overview

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Linting**: ESLint

## Essential Commands

### Development
- `npm run dev`: Start the development server
- `npm run lint`: Run linting checks

### Build & Production
- `npm run build`: Build the application for production
- `npm run start`: Start the production server
- `npm run type-check`: (If added) Run TypeScript checks (currently implicit in build)

## Project Structure

- `app/`: Next.js App Router directory
  - `layout.tsx`: Root layout (includes font configuration)
  - `page.tsx`: Main entry page
  - `globals.css`: Global styles and Tailwind directives
- `public/`: Static assets (images, fonts, etc.)
- `next.config.ts`: Next.js configuration (configured for standalone output)
- `tsconfig.json`: TypeScript configuration (paths alias `@/*` maps to root `./*`)

## Code Conventions

- **Path Aliases**: Use `@/` to import from the project root.
  - Example: `import { Button } from "@/components/ui/button"`
- **Styling**: Use Tailwind CSS utility classes.
- **Fonts**: configured in `app/layout.tsx` using `next/font/google`.
- **Components**: Functional components with named exports or defaults (default used for pages/layouts).

## Docker

- A `Dockerfile` is present in the root.
- `next.config.ts` is configured with `output: "standalone"` to optimize for containerized deployments.

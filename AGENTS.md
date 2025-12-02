# Agent Guide

This repository contains a Next.js project. Use this guide to understand the codebase and work effectively.

## Project Overview

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Linting**: ESLint

## Design Philosophy & Style

The website follows a "Math Vibes" design philosophy, prioritizing simplicity, warmth, and humor to reject complex mathematics.

### Visual Style
- **Color Palette**: Warm, welcoming, and slightly nostalgic.
  - Background: Off-white/Cream (`bg-[#fdfbf7]`) for a paper-like feel.
  - Text: Softer dark gray (`text-[#2c2c2c]`) instead of harsh black.
  - Accents: Soft Red (`#ff6b6b`) for branding and "The Bad" highlights (used gently).
  - Success: Muted Green (`green-600`, `green-50`, `green-800`) for "The Good".
  - Selection: Soft pink (`selection:bg-[#ffcfcf]`).
- **Typography**: Clean sans-serif fonts to maximize readability and approachability.
- **Layout**: Centered, single-column layout with generous whitespace (`py-24`, `mb-20`). Large, friendly headings.
- **Components**:
  - **Cards**: Rounded corners (`rounded-3xl`), subtle shadows (`shadow-sm`), and gentle borders to create a friendly, tactile feel.
  - **Interactions**: Subtle hover states (opacity changes, border colors) that don't startle the user.

### Tone of Voice
- **Humorous & Dogmatic**: The text adopts a playfully serious stance against complex math.
- **Simple & Direct**: Sentences are short. Vocabulary is accessible.
- **Emotional**: Focuses on "vibes," "feelings," and "anxiety" rather than technical arguments.
- **Manifesto Style**: Uses numbered lists and bold declarations to parody serious manifestos.

### Symbol Page Template
Each "Bad" symbol page (in `app/bad/*`) follows a strict layout structure to ensure consistency:

1.  **Header**:
    *   **Back Link**: "← Back to safety" (Gray to Red hover).
    *   **Symbol**: Massive 8xl size, opacity 80%, Red-500 font-mono.
    *   **Title**: 5xl Black font.
    *   **Subtitle**: Witty, one-line dismissal of the concept.

2.  **Content Card**:
    *   White background, heavy rounding (`rounded-3xl`), Red-100 border.
    *   **Arguments**: 3 paragraphs explaining why the symbol is "bad vibes".
    *   **Inline Symbols**: When mentioning symbols, use a styled span (e.g., `bg-green-50 text-green-600` for good, `bg-red-50 text-red-600` for bad).

3.  **Vibe Rating**:
    *   Centered pill at the bottom.
    *   Red background (`bg-[#fff5f5]`), Red text (`text-[#d63031]`).
    *   Format: "Vibe Rating: X/10 - [Humorous Reason]".

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

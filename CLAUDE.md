# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint (zero warnings policy — --max-warnings 0)
```

No test suite is configured.

## Architecture

Single-page portfolio for German Briceño. Built with React 18 + Vite + Tailwind CSS. No client-side routing — all sections are anchor-scrolled (`#id`) on a single page (`App.jsx`). External links use plain `<a target="_blank" rel="noopener noreferrer">`; there is no router.

**Section order** (top to bottom): `Navbar → Hero → Technologies → Projects → Contact → Footer`

### Data layer

All content lives in `src/data/index.js`:
- `navLinks` — nav items with `id` matching section element IDs
- `dataTecnologias` — technology cards with logo images
- `dataProject` — project entries with images, description, links

Add/remove portfolio projects or technologies by editing this file only.

### Styling conventions

`src/data/styles.js` exports two objects:
- `default styles` — layout helpers (`boxWidth`, `paddingX`, `flexCenter`, etc.) used as Tailwind class string compositions
- `layout` — form input and button class strings

Custom Tailwind theme (`tailwind.config.js`) uses non-standard breakpoints: `xs:480px`, `ss:620px`, `sm:768px`, `md:1060px`, `lg:1200px`, `xl:1700px`. These differ from Tailwind defaults — use these when writing responsive classes.

Custom colors: `primarygb` (background `#00040f`), `secondarygb`, `dimWhite`, `cyan`. Named gradient utility classes like `.text-gradient`, `.blue__gradient`, `.pink__gradient`, `.bg-discount-gradient` are defined in `src/index.css`.

### Components

All components are barrel-exported from `src/components/index.js`. New components must be added to that index.

- `CardProject` — renders a single project card (inner `Tab` component); `showMore` state toggles the preview between desktop (`imgpc`) and mobile (`imgmobile`) images, hover reveals a `ButtonCard` that opens a detail modal
- `Contact` — contains the EmailJS contact form using `react-hook-form` for validation and `useDataForm` hook for controlled state. EmailJS credentials are hardcoded in the component.
- `Hero` — uses `typed.js` for the animated role text
- `IconsLogos` — social/profile icon links (GitHub, LinkedIn, WhatsApp)

### Custom hook

`src/hooks/useDataForm.js` — generic controlled form state hook. Takes an initial shape object and returns field values plus `onInputChange` / `onResetForm` handlers.

### Key dependencies

| Package | Purpose |
|---|---|
| `@emailjs/browser` | Contact form email sending |
| `react-hook-form` | Form validation |
| `typed.js` | Typewriter effect in Hero |
| `react-toastify` | Toast notifications |
| `@material-tailwind/react` | Wraps Tailwind config via `withMT` |
| `tailwindcss-animated` | Extra animation utilities |

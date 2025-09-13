# VibeWorld

A minimal, extensible Vite + React + TypeScript web app scaffold with strict project hygiene.

## Getting Started

### Run in development
```
npm run dev
```

### Build for production
```
npm run build
```

### Preview production build
```
npm run preview
```

### Lint & Format
```
npm run lint
npm run format
```

## Project Structure
```
/public
/src
  /components   # Place reusable UI components here
  /pages        # Page components (e.g. Home.tsx)
  /styles       # Global and modular CSS (global.css)
  /utils        # Utility/helper functions
  App.tsx       # App shell (renders Home)
  main.tsx      # Entry point
```

- **Add new features**: Create components in `src/components`, utilities in `src/utils`, and import as needed in pages (e.g., `src/pages/Home.tsx`).
- **Path aliases**: Use `@/` to reference `src/` (e.g., `import Foo from '@/components/Foo'`).

## Coding Standards
- **Formatting**: Prettier (`.prettierrc`)
- **Linting**: ESLint with recommended, React, TypeScript, import/order rules (`.eslintrc.cjs`)
- **Commits**: Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):
  - `feat: add login page`
  - `fix: correct button alignment`

## GitHub Setup
To add a remote and push:
```
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

---

This scaffold is intentionally minimal. To extend, add new pages/components as described above—do not modify the Home view unless changing the landing page content.

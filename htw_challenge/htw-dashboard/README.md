# HTW Network Health Dashboard

A minimal but extensible Network Health Dashboard for Hawaii Tech Week built with Vite + React + TypeScript + Tailwind CSS.

## Features

- **Overview KPIs**: Total People and Events counts
- **Industry Bar Chart**: Visualization of counts by industry
- **Interactive Map**: Geographic plotting using Leaflet (if lat/lng data available)
- **Data Table**: Basic listing of first 25 rows
- **Responsive Design**: Clean, modern UI with Tailwind CSS

## Data Source Setup

### Google Sheets Integration

1. **Publish your Google Sheet to CSV**:
   - In Google Sheets: File → Share → Publish to the web
   - Choose the specific sheet (tab) you want to use
   - Select CSV format
   - Copy the generated URL

2. **Alternative URL format**:
   ```
   https://docs.google.com/spreadsheets/d/<SHEET_ID>/export?format=csv&gid=<GID>
   ```

3. **Set environment variable**:
   - Create `.env.local` (not committed to git):
     ```
     VITE_SHEET_CSV_URL="<PASTE_CSV_URL_HERE>"
     ```
   - For Replit Static Deploy: Add the same value as a Secret

### Column Mapping

Edit `src/features/data/config.ts` to match your Google Sheet column headers:

```typescript
columns: {
  type: "Type",          // "Person" | "Event"
  name: "Name",
  industry: "Industry",
  city: "City",
  state: "State",
  country: "Country",
  lat: "Lat",           // Latitude for mapping
  lng: "Lng",           // Longitude for mapping
  date: "Date"          // For events (YYYY-MM-DD format)
}
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Replit Static Deploy
- Output directory: `dist`
- SPA rewrite: `/index.html`
- Add `VITE_SHEET_CSV_URL` as a Secret in Replit

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── KPI.tsx         # Key performance indicator cards
│   ├── IndustryBar.tsx # Bar chart for industry data
│   ├── DataTable.tsx   # Data table component
│   └── GeoMap.tsx      # Leaflet map component
├── features/data/       # Data layer
│   ├── config.ts       # Configuration and column mapping
│   ├── types.ts        # TypeScript type definitions
│   ├── fetchSheet.ts   # CSV data fetching logic
│   └── aggregations.ts # Data processing functions
├── pages/              # Route components
│   ├── Overview.tsx    # Main dashboard page
│   ├── People.tsx      # People-focused view (stub)
│   └── Events.tsx      # Events-focused view (stub)
├── styles/
│   └── global.css      # Tailwind CSS imports
├── App.tsx             # Main app with routing
└── main.tsx            # Application entry point
```

## Extending the Dashboard

The codebase is designed to be easily extensible:

- **Add new charts**: Create components in `src/components/`
- **Add new pages**: Create pages in `src/pages/` and add routes to `App.tsx`
- **Add new data processing**: Extend functions in `src/features/data/aggregations.ts`
- **Customize styling**: Modify Tailwind classes or extend `tailwind.config.js`
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

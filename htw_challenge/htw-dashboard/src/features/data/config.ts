export const DATA_CONFIG = {
  // Put your public CSV export URL here OR use .env VITE_SHEET_CSV_URL
  csvUrl: import.meta.env.VITE_SHEET_CSV_URL || "",
  // Map your sheet headers to normalized field names used in the app.
  // Edit these to match your Google Sheet column headers.
  columns: {
    type: "Type",          // "Person" | "Event"
    name: "Name",
    industry: "Industry",
    city: "City",
    state: "State",
    country: "Country",
    lat: "Lat",
    lng: "Lng",
    date: "Date"           // for events (YYYY-MM-DD or similar)
  }
}

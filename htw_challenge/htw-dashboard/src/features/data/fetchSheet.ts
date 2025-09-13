import Papa from "papaparse";
import { DATA_CONFIG } from "./config";
import { RowSchema, type RawRow, type Normalized } from "./types";

const toNumber = (s?: string) =>
  s && s.trim() !== "" && !Number.isNaN(Number(s)) ? Number(s) : undefined;

export async function fetchRows(): Promise<Normalized[]> {
  if (!DATA_CONFIG.csvUrl) {
    // fallback demo rows so the UI renders if env var not set
    return [
      { type: "Person", name: "Kai", industry: "Fintech", city: "Honolulu", state: "HI", country: "USA", lat:21.3069, lng:-157.8583 },
      { type: "Event", name: "HTW Kickoff", industry: "General", city: "Honolulu", state: "HI", country: "USA", date:"2025-10-20", lat:21.3069, lng:-157.8583 }
    ];
  }
  const res = await fetch(DATA_CONFIG.csvUrl);
  const text = await res.text();
  const parsed = Papa.parse<RawRow>(text, { header: true });
  const rows: RawRow[] = (parsed.data || []).map((r: any) => RowSchema.parse(r));
  const c = DATA_CONFIG.columns;

  return rows.map(r => ({
    type: (r[c.type] as any) === "Person" ? "Person" :
          (r[c.type] as any) === "Event" ? "Event" : "Unknown",
    name: r[c.name] as any,
    industry: r[c.industry] as any,
    city: r[c.city] as any,
    state: r[c.state] as any,
    country: r[c.country] as any,
    lat: toNumber(r[c.lat] as any),
    lng: toNumber(r[c.lng] as any),
    date: r[c.date] as any
  }));
}

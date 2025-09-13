import type { Normalized } from "./types";

export function getKPIs(rows: Normalized[]) {
  const people = rows.filter(r => r.type === "Person").length;
  const events = rows.filter(r => r.type === "Event").length;
  return { people, events };
}

export function byIndustry(rows: Normalized[]) {
  const map = new Map<string, number>();
  for (const r of rows) {
    const key = (r.industry || "Unknown").trim();
    map.set(key, (map.get(key) || 0) + 1);
  }
  return Array.from(map, ([name, value]) => ({ name, value })).sort((a,b)=>b.value-a.value);
}

export function geolocated(rows: Normalized[]) {
  return rows.filter(r => typeof r.lat === "number" && typeof r.lng === "number");
}

import { useEffect, useState } from "react";
import KPI from "../components/KPI";
import IndustryBar from "../components/IndustryBar";
import GeoMap from "../components/GeoMap";
import DataTable from "../components/DataTable";
import { fetchRows } from "../features/data/fetchSheet";
import { getKPIs, byIndustry, geolocated } from "../features/data/aggregations";

export default function Overview() {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => { (async () => { setRows(await fetchRows()); setLoading(false); })(); }, []);
  if (loading) return <div className="p-6">Loading…</div>;
  const k = getKPIs(rows);
  const industry = byIndustry(rows);
  const points = geolocated(rows).map(r => ({ lat: r.lat!, lng: r.lng!, label: r.name || r.industry }));
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPI label="People" value={k.people} />
        <KPI label="Events" value={k.events} />
      </div>
      <IndustryBar data={industry} />
      <GeoMap points={points} />
      <DataTable rows={rows} />
    </div>
  );
}

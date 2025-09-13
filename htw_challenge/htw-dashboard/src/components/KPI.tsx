export default function KPI({ label, value }: {label:string; value:number}) {
  return (
    <div className="rounded-xl border p-4 shadow-sm bg-white">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  );
}

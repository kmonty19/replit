export default function DataTable({ rows }:{rows:any[]}) {
  const cols = rows.length ? Object.keys(rows[0]) : [];
  return (
    <div className="rounded-xl border bg-white overflow-auto">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50 sticky top-0">
          <tr>{cols.map(c => <th key={c} className="px-3 py-2 text-left font-medium">{c}</th>)}</tr>
        </thead>
        <tbody>
          {rows.slice(0,25).map((r,i)=>(
            <tr key={i} className="odd:bg-white even:bg-gray-50">
              {cols.map(c => <td key={c} className="px-3 py-2">{String((r as any)[c] ?? "")}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

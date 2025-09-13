import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function IndustryBar({ data}:{data:{name:string;value:number}[]}) {
  return (
    <div className="h-72 rounded-xl border p-4 bg-white">
      <h3 className="mb-2 font-medium">By Industry</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" hide />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

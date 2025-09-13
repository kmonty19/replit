import { Link, Route, Routes, NavLink } from "react-router-dom";
import Overview from "./pages/Overview";
import People from "./pages/People";
import Events from "./pages/Events";

const Tab = ({to,label}:{to:string;label:string}) => (
  <NavLink to={to} className={({isActive}) =>
    "px-3 py-2 rounded-md border " + (isActive ? "bg-black text-white" : "bg-white")}>
    {label}
  </NavLink>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="p-4 shadow bg-white">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link to="/" className="font-semibold">HTW Network Health</Link>
          <nav className="flex gap-2">
            <Tab to="/" label="Overview" />
            <Tab to="/people" label="People" />
            <Tab to="/events" label="Events" />
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/people" element={<People />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </main>
    </div>
  );
}

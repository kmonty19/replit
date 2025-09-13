import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// default icon fix for vite
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function GeoMap({ points }:{points:{lat:number; lng:number; label?:string}[]}) {
  const center = points[0] ? [points[0].lat, points[0].lng] as [number, number] : [21.3069, -157.8583];
  return (
    <div className="h-96 rounded-xl border bg-white overflow-hidden">
      <MapContainer center={center} zoom={7} style={{ height: "100%", width:"100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {points.map((p,i)=>(
          <Marker key={i} position={[p.lat, p.lng]}>
            <Popup>{p.label || `${p.lat}, ${p.lng}`}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

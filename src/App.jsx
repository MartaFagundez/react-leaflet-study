import { MapContainer, TileLayer, Marker, useMap, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import Map from "./components/Map";
import { Icon } from 'leaflet';

import pinIcon from "./assets/gps.png";

function App() {
  // Markers
  const markers = [
    { geocode: [51.505, -0.09], popUp: "Marker 1" },
    { geocode: [51.515, -0.1], popUp: "Marker 2" },
    { geocode: [51.525, -0.11], popUp: "Marker 3" },
  ];

  const customIcon = new Icon({
    iconUrl: pinIcon, // Icon variable or URL
    iconSize: [38, 38], // Size of the icon
    iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
    popupAnchor: [6, -22], // Point from which the popup should open relative to the iconAnchor
  })

  return (
    <div className="d-flex flex-column align-items-center justify-content-start w-100">
      <h1 className="text-center mt-5 mb-3">React-Leaflet Maps Study</h1>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "85vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {
          markers.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={customIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))
        }
      </MapContainer>
    </div>
  );
}

export default App;

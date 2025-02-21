import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import lieux from "./data/lieux.json";
import L from "leaflet";
import marketincon from "./assets/markers.png"


const customIcon = new L.Icon({
  iconUrl: marketincon,
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});


const center = [48.8385, 2.3570];

const MapComponent = () => {
  return (
    <MapContainer center={center} zoom={17} style={{ height: "404px", width: "100%" }}>
     
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {lieux.map((lieu, index) => (
        <Marker key={index} position={[lieu.lat, lieu.lng]} icon={customIcon}>
          <Popup>
            <strong>{lieu.nom}</strong> <br />
            {lieu.adresse}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;

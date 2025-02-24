import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import lieux from "./data/lieux.json";
import markerIcon from "./assets/markers.png"; // ✅ Import du marqueur personnalisé

//  Création de l'icône personnalisée pour les marqueurs
const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconSize: [38, 38], // ✅ Ajuste la taille de l'icône
  iconAnchor: [19, 38], // ✅ Ancre de l'icône au centre
  popupAnchor: [0, -38], // ✅ Position du popup par rapport au marqueur
});

//  Centre ajusté pour voir clairement Boulevard de l’Hôpital, Rue de Censier et Rue du Jura
const center = [48.8385, 2.3570];

const MapComponent = () => {
  return (
    <div>
    </div>
    // <MapContainer center={center} zoom={17} style={{ height: "404px", width: "100%" }}>
    //   {/*  Ajout d’un fond de carte OpenStreetMap */}
    //   <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

    //   {/*  Ajout des marqueurs pour chaque restaurant */}
    //   {lieux.map((lieu, index) => (
    //     <Marker key={index} position={[lieu.lat, lieu.lng]} icon={customIcon}>
    //       <Popup>
    //         <strong>{lieu.nom}</strong> <br />
    //         {lieu.adresse}
    //       </Popup>
    //     </Marker>
    //   ))}
    // </MapContainer>
  );
};

export default MapComponent;

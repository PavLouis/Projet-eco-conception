import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import lieux from "./data/lieux.json"; // ✅ Import des adresses depuis lieux.json
import "./OuNousTrouver.css";



const mapContainerStyle = {
  width: "50%", // ✅ Ajusté pour la maquette
  height: "404px",
};

const center = {
  lat: lieux[0].lat,
  lng: lieux[0].lng,
};


const OuNousTrouver = () => {
  return (
    <section className="ou-nous-trouver-wrapper">
      <div className="ou-nous-trouver">
        <h2 className="ou-nous-trouver-title">Où nous trouver ?</h2>
        <div className="ou-nous-trouver-content">
          <LoadScript googleMapsApiKey="AIzaSyCWj4CFcTi9zLg1kFqHGkhkFlEHOmCnFVI">
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={14} center={center}>
              
            </GoogleMap>
          </LoadScript>
          <div className="ou-nous-trouver-lieux">
            {lieux.map((lieu, index) => (
              <p key={index} className="ou-nous-trouver-lieu">
                <strong className="ou-nous-trouver-nom">{lieu.nom}</strong> <br />
                <span className="ou-nous-trouver-adresse">{lieu.adresse}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OuNousTrouver;

import React from "react";
import MapComponent from "./MapComponent"; // ✅ Utilise Leaflet à la place de Google Maps
import "./OuNousTrouver.css";
import lieux from "./data/lieux.json";

const OuNousTrouver = () => {
  return (
    <section className="ou-nous-trouver-wrapper">
      <div className="ou-nous-trouver">
        <h2 className="ou-nous-trouver-title">Où nous trouver ?</h2>
        <div className="ou-nous-trouver-content">
          <MapComponent /> {/* ✅ Nouvelle carte Leaflet ici */}
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
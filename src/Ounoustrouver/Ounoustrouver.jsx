import React from "react";
import lieux from "./data/lieux.json"
import "./OuNousTrouver.css"; 
import Map from "./assets/map-interactive.png"

const OuNousTrouver = () => {
    // Réorganiser les lieux pour afficher Lugnac en premier
    const orderedLieux = [
      lieux.find(lieu => lieu.nom === "Lugnac"),
      lieux.find(lieu => lieu.nom === "Aux Prés"),
      lieux.find(lieu => lieu.nom === "Le Chardenoux")
    ].filter(Boolean); // Supprime les éventuelles valeurs undefined
  
    return (
      <section className="ou-nous-trouver">
        <h2 className="ou-nous-trouver-title">Où nous trouver ?</h2>
        <div className="ou-nous-trouver-content">
          <img src={Map} alt="Carte interactive" className="ou-nous-trouver-map" />
          <div className="ou-nous-trouver-lieux">
            {orderedLieux.map((lieu, index) => (
              <p key={index} className="ou-nous-trouver-lieu">
                <strong className="ou-nous-trouver-nom">{lieu.nom}</strong> <br /> 
                <span className="ou-nous-trouver-adresse">{lieu.adresse}</span>
              </p>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default OuNousTrouver;
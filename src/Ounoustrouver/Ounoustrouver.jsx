import "./Ounoustrouver.css";
import lieux from "./data/lieux.json";
import mapImage from "./assets/map-interactive.webp";

const OuNousTrouver = () => {
  return (
    <section id="gray-plus" className="ou-nous-trouver-wrapper">
      <div className="ou-nous-trouver">
        <h2 className="ou-nous-trouver-title">Où nous trouver ?</h2>
        <div className="ou-nous-trouver-content">
          <img src={mapImage} alt="Map" className="ou-nous-trouver-map" />{" "}
          {/* Static map image */}
          <div className="ou-nous-trouver-lieux">
            {lieux.map((lieu, index) => (
              <p key={index} className="ou-nous-trouver-lieu">
                <strong className="ou-nous-trouver-nom">{lieu.nom}</strong>{" "}
                <br />
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

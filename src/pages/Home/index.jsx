import React, { useState } from "react";
import "../../style/Home.scss";
import logements from "../../logements.json";
import IMGFondbis from "../../assets/IMGFondbis.png";
import { Link } from "react-router-dom"; 

function Home() {
  
  const [selectedLogement, setSelectedLogement] = useState(null);

  
  const handleLogementClick = (logement) => {
    setSelectedLogement(logement);
  };

  
  const handleCloseDetails = () => {
    setSelectedLogement(null);
  };

  return (
    <>
      <div className="Titre">
        <h1> Chez vous, partout et ailleurs </h1>
        <div className="Opaque"><img src={IMGFondbis} alt="paysage" /></div>
      </div>
      <div className="logements">
        <div className="grid-container">
          {logements.map((logement, index) => (
            <Link
              key={index}
              to={`/logement/${logement.id}`}
              className="cube"
              onClick={() => handleLogementClick(logement)} 
            >
              <img src={logement.cover} alt={logement.title} />
              <h2>{logement.title}</h2>
            </Link>
          ))}
        </div>
      </div>
      {}
      {selectedLogement && (
        <div>
          <h1>{selectedLogement.title}</h1>
          <p>{selectedLogement.description}</p>
          {}
          <button onClick={handleCloseDetails}>Fermer</button>
        </div>
      )}
    </>
  );
}

export default Home;
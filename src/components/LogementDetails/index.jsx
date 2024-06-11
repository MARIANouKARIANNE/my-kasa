import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import logements from "../../logements.json";
import "../../style/FicheLogement.scss";
import { Collapse } from "../Collapse";
import Error from "../../pages/Error";

function LogementDetails() {
  const { id } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);

  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <Error />;
  }

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === logement.pictures.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? logement.pictures.length - 1 : prevSlide - 1
    );
  };

  const renderRatingStars = () => {
    const rating = parseInt(logement.rating);
    const maxRating = 5; // Nombre max d'étoiles
    const stars = [];

   
    for (let i = 0; i < maxRating; i++) {
      if (i < rating) {
        
        stars.push(<FontAwesomeIcon key={i} icon={solidStar} className="star-pink" />);
      } else {
       
        stars.push(<FontAwesomeIcon key={i} icon={solidStar} className="star-gray" />);
      }
    }

    return stars;
  };

  return (
    <div className="logement-details-container">
      <div className="logement-details">
        <div className="slider-container">
          <img
            className="slider-image"
            src={logement.pictures[currentSlide]}
            alt="Slide"
          />
          <button
            className="prev-button"
            onClick={handlePrevSlide}
            disabled={logement.pictures.length === 1}
          >
            &#10094;
          </button>
          <button
            className="next-button"
            onClick={handleNextSlide}
            disabled={logement.pictures.length === 1}
          >
            &#10095;
          </button>
        </div>
        <div className="logement-details-haut">
          <div className="Un">
            <h1 className="Titre">{logement.title}</h1>
            <div className="location">{logement.location}</div>
            <div className="tags">
              {logement.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="Deux">
            <div className="host">
              <img src={logement.host.picture} alt={logement.host.name} />
              <span>{logement.host.name}</span>
            </div>
            <div className="rating">{renderRatingStars()}</div>
          </div>
        </div>
        <div className="Container-Collapse">
          <Collapse
            className="Description"
            textWhenCollapsed="Description"
            textWhenExpanded={logement.description}
          ></Collapse>
          <Collapse
            className="Equipement"
            textWhenCollapsed="équipements"
            textWhenExpanded={logement.equipments.join(", ")}
          ></Collapse>
        </div>
      </div>
    </div>
  );
}

export default LogementDetails;
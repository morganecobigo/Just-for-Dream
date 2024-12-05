import React, { useEffect, useState } from "react";
import { heroList } from "../hero/heroList";
import "./hero.css";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour aller à l'image suivante du carrousel d'images
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroList.length);
  };

  // Fonction pour aller à l'image précédente du carrousel d'images
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + heroList.length) % heroList.length
    );
  };

  // Défilement automatique des images toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // 3000ms = 3 secondes
    return () => clearInterval(interval); // Nettoyer l'intervalle lorsqu'on quitte le composant
  }, []);

  // Carrousel de menu
  const [menuIndex, setMenuIndex] = useState(0);

  // Fonction pour passer à l'élément suivant du carrousel de menu
  const nextMenuItem = () => {
    setMenuIndex((prevIndex) => (prevIndex + 1) % heroList.length);
  };

  // Fonction pour passer à l'élément précédent du carrousel de menu
  const prevMenuItem = () => {
    setMenuIndex(
      (prevIndex) => (prevIndex - 1 + heroList.length) % heroList.length
    );
  };

  return (
    <div className="hero">
      {/* Image statique */}

      {/* Carrousel d'images */}
      <div className="carousel">
        {heroList.length > 0 && (
          <>
            <button className="carousel-button prev" onClick={prevImage}>
              &lt;
            </button>
            <img
              src={heroList[currentIndex].image}
              alt={heroList[currentIndex].alt}
              className="carousel-image"
            />
            <button className="carousel-button next" onClick={nextImage}>
              &gt;
            </button>
          </>
        )}
      </div>

      {/* Carrousel de menu */}
      <div className="carousel-menu">
        {/* Boutons de navigation du menu */}
        <button className="carousel-button prev" onClick={prevMenuItem}>
          &lt;
        </button>

        {/* Menu actuel */}
        <div className="menu-item">
          <a href={heroList[menuIndex].link} className="menu-link">
            {heroList[menuIndex].label}
          </a>
        </div>

        {/* Boutons de navigation du menu */}
        <button className="carousel-button next" onClick={nextMenuItem}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Hero;

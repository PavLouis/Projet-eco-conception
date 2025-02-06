import React, { useState, useEffect } from "react";
import leftChevron from "./assets/icons/chevron-left.svg";
import rightChevron from "./assets/icons/chevron-right.svg";
import slidesData from "./data/carouselData.json";
import "./Carousel.css";

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides = slidesData.slides;

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setSlide((prevSlide) =>
          prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? slides.length - 1 : slide - 1);
  };

  return (
    <div
      className="carousel"
      role="region"
      aria-live="polite"
      aria-label="Image carousel"
    >
      {/* Conteneur avec fond blanc pour la flèche gauche */}
      <div className="arrow-container arrow-container-left" onClick={prevSlide}>
        <img
          src={leftChevron}
          alt="Previous slide"
          className="arrow"
          role="button"
          tabIndex="0"
        />
      </div>

      {slides.map((item, idx) => (
        <picture key={idx}>
          <source srcSet={`${item.src}?w=300`} media="(max-width: 768px)" />
          <source srcSet={`${item.src}?w=600`} media="(min-width: 769px)" />
          <img
            src={item.src}
            alt={item.alt}
            className={slide === idx ? "slide" : "slide slide-hidden"}
            loading="lazy"
          />
        </picture>
      ))}

      {/* Conteneur avec fond blanc pour la flèche droite */}
      <div
        className="arrow-container arrow-container-right"
        onClick={nextSlide}
      >
        <img
          src={rightChevron}
          alt="Next slide"
          className="arrow"
          role="button"
          tabIndex="0"
        />
      </div>

      <div className="play-pause-container">
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="play-pause-btn"
          aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
        >
          {isPaused ? "Play" : "Pause"}
        </button>
      </div>
      <span className="indicators">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={
              slide === idx ? "indicator" : "indicator indicator-inactive"
            }
            onClick={() => setSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          ></button>
        ))}
      </span>
    </div>
  );
};

export default Carousel;

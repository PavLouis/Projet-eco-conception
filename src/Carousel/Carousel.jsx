import React, { useState, useEffect } from "react";
import leftChevron from "./assets/icons/chevron-left.svg";
import rightChevron from "./assets/icons/chevron-right.svg";
import "./Carousel.css";

import slide1 from "./assets/images/slide-1.webp";
import slide2 from "./assets/images/slide-2.webp";
import slide3 from "./assets/images/slide-3.webp";
import slide4 from "./assets/images/slide-4.webp";

const slidesData = [
  { src: slide1, alt: "Image 1 for carousel" },
  { src: slide2, alt: "Image 2 for carousel" },
  { src: slide3, alt: "Image 3 for carousel" },
  { src: slide4, alt: "Image 4 for carousel" }
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides = slidesData;

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setSlide((prevSlide) =>
          prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
      }, 10000);
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

import { useState, useEffect } from 'react';
import groupPhoto from '../assets/home/group.jpg';
import './Home.css';

// Array of photos for the carousel - starting with group.jpg
const homePhotos = [
  groupPhoto,
  // Add more photos here as needed
];

export function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (homePhotos.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % homePhotos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + homePhotos.length) % homePhotos.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % homePhotos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="home">
      <div className="home__header">
        <h1 className="home__title">
          <span className="home__title-icon">🎓</span>
          ¡Feliz Graduación!
          <span className="home__title-icon">🎓</span>
        </h1>
        <p className="home__subtitle">Un regalo especial para celebrar este logro 🏅</p>
      </div>

      <div className="home__carousel-wrapper">
        <div className="home__carousel">
          <div className="home__carousel-container">
            {homePhotos.map((photo, index) => (
              <div
                key={index}
                className={`home__slide ${index === currentIndex ? 'home__slide--active' : ''}`}
              >
                <img
                  src={photo}
                  alt={`Foto ${index + 1}`}
                  className="home__image"
                />
              </div>
            ))}
          </div>

          {homePhotos.length > 1 && (
            <>
              <button
                className="home__carousel-btn home__carousel-btn--prev"
                onClick={goToPrevious}
                aria-label="Foto anterior"
              >
                ‹
              </button>
              <button
                className="home__carousel-btn home__carousel-btn--next"
                onClick={goToNext}
                aria-label="Foto siguiente"
              >
                ›
              </button>

              <div className="home__carousel-indicators">
                {homePhotos.map((_, index) => (
                  <button
                    key={index}
                    className={`home__indicator ${index === currentIndex ? 'home__indicator--active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Ir a foto ${index + 1}`}
                  />
                ))}
              </div>

              <div className="home__carousel-counter">
                {currentIndex + 1} / {homePhotos.length}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="home__message">
        <p className="home__message-text">
          Selecciona un graduado para ver su página personalizada
        </p>
      </div>
    </div>
  );
}

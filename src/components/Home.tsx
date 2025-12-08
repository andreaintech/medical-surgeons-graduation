import { useState, useEffect } from 'react';
import groupPhoto from '../assets/home/group.jpg';
import groupPhoto1 from '../assets/home/group1.jpeg';
import groupPhoto2 from '../assets/home/group2.jpeg';
import groupPhoto3 from '../assets/home/group3.jpeg';
import groupPhoto4 from '../assets/home/group4.jpeg';
import groupPhoto5 from '../assets/home/group5.jpeg';
import groupPhoto6 from '../assets/home/group6.jpeg';
import groupPhoto7 from '../assets/home/group7.jpeg';
import groupPhoto8 from '../assets/home/group8.jpeg';
import groupPhoto9 from '../assets/home/group9.jpeg';
import groupPhoto10 from '../assets/home/group10.jpeg';
import groupPhoto11 from '../assets/home/group11.jpeg';
import groupPhoto12 from '../assets/home/group12.jpeg';
import groupPhoto13 from '../assets/home/group13.jpeg';
import groupPhoto14 from '../assets/home/group14.jpeg';
import groupPhoto15 from '../assets/home/group15.jpeg';
import groupPhoto16 from '../assets/home/group16.jpeg';
import groupPhoto17 from '../assets/home/group17.jpeg';
import groupPhoto18 from '../assets/home/group18.jpeg';
import groupPhoto19 from '../assets/home/group19.jpeg';
import groupPhoto20 from '../assets/home/group20.jpeg';
import groupPhoto21 from '../assets/home/group21.jpeg';
import groupPhoto22 from '../assets/home/group22.jpeg';
import groupPhoto23 from '../assets/home/group23.jpeg';
import groupPhoto24 from '../assets/home/group24.jpeg';
import groupPhoto25 from '../assets/home/group25.jpeg';
import groupPhoto26 from '../assets/home/group26.jpeg';
import groupPhoto27 from '../assets/home/group27.jpeg';
import groupPhoto28 from '../assets/home/group28.jpeg';
import groupPhoto29 from '../assets/home/group29.jpeg';
import groupPhoto30 from '../assets/home/group30.jpeg';
import groupPhoto31 from '../assets/home/group31.jpeg';
import groupPhoto32 from '../assets/home/group32.jpeg';
import groupPhoto33 from '../assets/home/group33.jpeg';
import groupPhoto34 from '../assets/home/group34.jpeg';
import groupPhoto35 from '../assets/home/group35.jpeg';
import groupPhoto36 from '../assets/home/group36.jpeg';
import groupPhoto37 from '../assets/home/group37.jpeg';
import groupPhoto38 from '../assets/home/group38.jpeg';
import groupPhoto39 from '../assets/home/group39.jpeg';
import groupPhoto40 from '../assets/home/group40.jpeg';
import groupPhoto41 from '../assets/home/group41.jpeg';
import './Home.css';

// Array of photos for the carousel - starting with group.jpg
const homePhotos = [
  groupPhoto,
  groupPhoto1,
  groupPhoto2,
  groupPhoto3,
  groupPhoto4,
  groupPhoto5,
  groupPhoto6,
  groupPhoto7,
  groupPhoto8,
  groupPhoto9,
  groupPhoto10,
  groupPhoto11,
  groupPhoto12,
  groupPhoto13,
  groupPhoto14,
  groupPhoto15,
  groupPhoto16,
  groupPhoto17,
  groupPhoto18,
  groupPhoto19,
  groupPhoto20,
  groupPhoto21,
  groupPhoto22,
  groupPhoto23,
  groupPhoto24,
  groupPhoto25,
  groupPhoto26,
  groupPhoto27,
  groupPhoto28,
  groupPhoto29,
  groupPhoto30,
  groupPhoto31,
  groupPhoto32,
  groupPhoto33,
  groupPhoto34,
  groupPhoto35,
  groupPhoto36,
  groupPhoto37,
  groupPhoto38,
  groupPhoto39,
  groupPhoto40,
  groupPhoto41,
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

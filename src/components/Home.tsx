import { useState, useEffect, useCallback } from 'react';
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
import groupPhoto42 from '../assets/home/group42.jpeg';
import groupPhoto43 from '../assets/home/group43.jpeg';
import groupPhoto44 from '../assets/home/group44.jpeg';
import groupPhoto45 from '../assets/home/group45.jpeg';
import groupPhoto46 from '../assets/home/group46.jpeg';
import groupPhoto47 from '../assets/home/group47.jpeg';
import groupPhoto48 from '../assets/home/group48.jpeg';
import groupPhoto49 from '../assets/home/group49.jpeg';
import groupPhoto50 from '../assets/home/group50.jpeg';
import groupPhoto51 from '../assets/home/group51.jpeg';
import groupPhoto52 from '../assets/home/group52.jpeg';
import groupPhoto53 from '../assets/home/group53.jpeg';
import groupPhoto54 from '../assets/home/group54.jpeg';
import groupPhoto55 from '../assets/home/group55.jpeg';
import groupPhoto56 from '../assets/home/group56.jpeg';
import groupPhoto57 from '../assets/home/group57.jpeg';
import groupPhoto58 from '../assets/home/group58.jpeg';
import groupPhoto59 from '../assets/home/group59.jpeg';
import groupPhoto60 from '../assets/home/group60.jpeg';
import groupPhoto61 from '../assets/home/group61.jpeg';
import groupPhoto62 from '../assets/home/group62.jpeg';
import groupPhoto63 from '../assets/home/group63.jpeg';
import groupPhoto64 from '../assets/home/group64.jpeg';
import groupPhoto65 from '../assets/home/group65.jpeg';
import groupPhoto66 from '../assets/home/group66.jpeg';
import groupPhoto67 from '../assets/home/group67.jpeg';
import groupPhoto68 from '../assets/home/group68.jpeg';
import groupPhoto69 from '../assets/home/group69.jpeg';
import groupPhoto70 from '../assets/home/group70.jpeg';
import groupPhoto71 from '../assets/home/group71.jpeg';
import groupPhoto72 from '../assets/home/group72.jpeg';
import groupPhoto73 from '../assets/home/group73.jpeg';
import groupPhoto74 from '../assets/home/group74.jpeg';
import groupPhoto75 from '../assets/home/group75.jpeg';
import groupPhoto76 from '../assets/home/group76.jpeg';
import groupPhoto77 from '../assets/home/group77.jpeg';
import groupPhoto78 from '../assets/home/group78.jpeg';
import groupPhoto79 from '../assets/home/group79.jpeg';
import groupPhoto80 from '../assets/home/group80.jpeg';
import groupPhoto81 from '../assets/home/group81.jpeg';
import groupPhoto82 from '../assets/home/group82.jpeg';
import groupPhoto83 from '../assets/home/group83.jpeg';
import groupPhoto84 from '../assets/home/group84.jpeg';
import groupPhoto85 from '../assets/home/group85.jpeg';
import groupPhoto86 from '../assets/home/group86.jpeg';
import groupPhoto87 from '../assets/home/group87.jpeg';
import groupPhoto88 from '../assets/home/group88.jpeg';
import groupPhoto89 from '../assets/home/group89.jpeg';
import groupPhoto90 from '../assets/home/group90.jpeg';
import groupPhoto91 from '../assets/home/group91.jpeg';
import groupPhoto92 from '../assets/home/group92.jpeg';
import groupPhoto93 from '../assets/home/group93.jpeg';
import groupPhoto94 from '../assets/home/group94.jpeg';
import groupPhoto95 from '../assets/home/group95.jpeg';
import groupPhoto96 from '../assets/home/group96.jpeg';
import groupPhoto97 from '../assets/home/group97.jpeg';
import groupPhoto98 from '../assets/home/group98.jpeg';
import groupPhoto99 from '../assets/home/group99.jpeg';
import groupPhoto100 from '../assets/home/group100.jpeg';
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
  groupPhoto42,
  groupPhoto43,
  groupPhoto44,
  groupPhoto45,
  groupPhoto46,
  groupPhoto47,
  groupPhoto48,
  groupPhoto49,
  groupPhoto50,
  groupPhoto51,
  groupPhoto52,
  groupPhoto53,
  groupPhoto54,
  groupPhoto55,
  groupPhoto56,
  groupPhoto57,
  groupPhoto58,
  groupPhoto59,
  groupPhoto60,
  groupPhoto61,
  groupPhoto62,
  groupPhoto63,
  groupPhoto64,
  groupPhoto65,
  groupPhoto66,
  groupPhoto67,
  groupPhoto68,
  groupPhoto69,
  groupPhoto70,
  groupPhoto71,
  groupPhoto72,
  groupPhoto73,
  groupPhoto74,
  groupPhoto75,
  groupPhoto76,
  groupPhoto77,
  groupPhoto78,
  groupPhoto79,
  groupPhoto80,
  groupPhoto81,
  groupPhoto82,
  groupPhoto83,
  groupPhoto84,
  groupPhoto85,
  groupPhoto86,
  groupPhoto87,
  groupPhoto88,
  groupPhoto89,
  groupPhoto90,
  groupPhoto91,
  groupPhoto92,
  groupPhoto93,
  groupPhoto94,
  groupPhoto95,
  groupPhoto96,
  groupPhoto97,
  groupPhoto98,
  groupPhoto99,
  groupPhoto100,
];

export function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + homePhotos.length) % homePhotos.length);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % homePhotos.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const enterFullscreen = () => {
    setIsFullscreen(true);
  };

  const exitFullscreen = () => {
    setIsFullscreen(false);
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (homePhotos.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % homePhotos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle keyboard events in fullscreen
  useEffect(() => {
    if (!isFullscreen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFullscreen(false);
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, goToPrevious, goToNext]);

  const renderCarousel = (fullscreen: boolean = false) => (
    <div className={fullscreen ? 'home__carousel home__carousel--fullscreen' : 'home__carousel'}>
      <div className={fullscreen ? 'home__carousel-container home__carousel-container--fullscreen' : 'home__carousel-container'}>
        {homePhotos.map((photo, index) => (
          <div
            key={index}
            className={`home__slide ${index === currentIndex ? 'home__slide--active' : ''}`}
          >
            <img
              src={photo}
              alt={`Foto ${index + 1}`}
              className={fullscreen ? 'home__image home__image--fullscreen' : 'home__image'}
              onClick={!fullscreen ? enterFullscreen : undefined}
              style={!fullscreen ? { cursor: 'pointer' } : undefined}
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

      {!fullscreen && (
        <button
          className="home__fullscreen-btn"
          onClick={enterFullscreen}
          aria-label="Pantalla completa"
        >
          ⛶
        </button>
      )}

      {fullscreen && (
        <button
          className="home__exit-fullscreen-btn"
          onClick={exitFullscreen}
          aria-label="Salir de pantalla completa"
        >
          ✕
        </button>
      )}
    </div>
  );

  return (
    <>
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
          {renderCarousel(false)}
        </div>

        <div className="home__message">
          <p className="home__message-text">
            Selecciona a una doctora para conocer más sobre su vida y carrera
          </p>
        </div>
      </div>

      {isFullscreen && (
        <div className="home__fullscreen-overlay" onClick={exitFullscreen}>
          <div className="home__fullscreen-content" onClick={(e) => e.stopPropagation()}>
            {renderCarousel(true)}
          </div>
        </div>
      )}
    </>
  );
}

import { useState, useEffect } from 'react';
import { useStudent } from '../hooks/useStudent';
import { getStudentData } from '../data/students';

export function Timeline() {
    const { activeStudent, title, name } = useStudent();
    const studentData = getStudentData(activeStudent);
    const timeline = studentData.timeline;
    const [selectedImage, setSelectedImage] = useState<{ url: string; eventTitle: string } | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<Record<string, number>>({});

    function handleImageClick(_eventId: string, imageUrl: string, eventTitle: string) {
        setSelectedImage({ url: imageUrl, eventTitle });
    }

    function handleNextImage(eventId: string, imageUrls: string[], currentIndex: number) {
        const nextIndex = (currentIndex + 1) % imageUrls.length;
        setCurrentImageIndex((prev) => ({ ...prev, [eventId]: nextIndex }));
    }

    function handlePrevImage(eventId: string, imageUrls: string[], currentIndex: number) {
        const prevIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
        setCurrentImageIndex((prev) => ({ ...prev, [eventId]: prevIndex }));
    }

    function closeModal() {
        setSelectedImage(null);
    }

    // Handle Escape key to close modal
    useEffect(() => {
        if (!selectedImage) return;

        function handleEscape(e: KeyboardEvent) {
            if (e.key === 'Escape') {
                closeModal();
            }
        }

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [selectedImage]);

    function handleModalNext() {
        if (!selectedImage) return;
        // Find the current event and image
        const currentEvent = timeline.find((timelineEvent) => {
            const images = timelineEvent.imageUrls || (timelineEvent.imageUrl ? [timelineEvent.imageUrl] : []);
            return images.includes(selectedImage.url);
        });
        if (!currentEvent) return;

        const images = currentEvent.imageUrls || (currentEvent.imageUrl ? [currentEvent.imageUrl] : []);
        const currentIndex = images.indexOf(selectedImage.url);
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedImage({ url: images[nextIndex], eventTitle: currentEvent.title });
    }

    function handleModalPrev() {
        if (!selectedImage) return;
        const currentEvent = timeline.find((timelineEvent) => {
            const images = timelineEvent.imageUrls || (timelineEvent.imageUrl ? [timelineEvent.imageUrl] : []);
            return images.includes(selectedImage.url);
        });
        if (!currentEvent) return;

        const images = currentEvent.imageUrls || (currentEvent.imageUrl ? [currentEvent.imageUrl] : []);
        const currentIndex = images.indexOf(selectedImage.url);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage({ url: images[prevIndex], eventTitle: currentEvent.title });
    }

    return (
        <>
            <div className="timeline">
                <h2 className="timeline__title">Línea de tiempo de {title} {name} 🎓</h2>

                <div className="timeline__list">
                    {timeline.map((event, index) => {
                        const images = event.imageUrls || (event.imageUrl ? [event.imageUrl] : []);
                        const currentIndex = currentImageIndex[event.id] || 0;
                        const hasMultipleImages = images.length > 1;

                        return (
                            <article key={event.id} className="timeline__item">
                                <div className="timeline__line">
                                    <div className="timeline__dot" />
                                    {index !== timeline.length - 1 && <div className="timeline__connector" />}
                                </div>

                                <div className="timeline__card">
                                    <span className="timeline__year">{event.year}</span>
                                    <h3 className="timeline__card-title">{event.title}</h3>
                                    <p className="timeline__description">{event.description}</p>

                                    {images.length > 0 && (
                                        <div className="timeline__carousel">
                                            <div className="timeline__image-wrapper">
                                                <button
                                                    type="button"
                                                    className="timeline__image-button"
                                                    onClick={() => handleImageClick(event.id, images[currentIndex], event.title)}
                                                    aria-label={`Ver ${event.title} en pantalla completa`}
                                                >
                                                    <img
                                                        src={images[currentIndex]}
                                                        alt={event.title}
                                                        className="timeline__image"
                                                    />
                                                </button>
                                                {hasMultipleImages && (
                                                    <>
                                                        <button
                                                            className="timeline__carousel-btn timeline__carousel-btn--prev"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handlePrevImage(event.id, images, currentIndex);
                                                            }}
                                                            aria-label="Imagen anterior"
                                                        >
                                                            ‹
                                                        </button>
                                                        <button
                                                            className="timeline__carousel-btn timeline__carousel-btn--next"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleNextImage(event.id, images, currentIndex);
                                                            }}
                                                            aria-label="Siguiente imagen"
                                                        >
                                                            ›
                                                        </button>
                                                        <div className="timeline__carousel-indicator">
                                                            {currentIndex + 1} / {images.length}
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                            {hasMultipleImages && (
                                                <div className="timeline__carousel-thumbnails">
                                                    {images.map((url: string, imgIndex: number) => {
                                                        const handleThumbnailClick = () => {
                                                            setCurrentImageIndex((prev) => ({ ...prev, [event.id]: imgIndex }));
                                                        };
                                                        return (
                                                            <button
                                                                key={`${event.id}-${imgIndex}`}
                                                                className={`timeline__thumbnail ${imgIndex === currentIndex ? 'timeline__thumbnail--active' : ''}`}
                                                                onClick={handleThumbnailClick}
                                                                aria-label={`Ver imagen ${imgIndex + 1}`}
                                                            >
                                                                <img src={url} alt={`${event.title} - ${imgIndex + 1}`} />
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>

            {selectedImage && (
                <div
                    className="timeline__modal"
                    onClick={closeModal}
                    onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                            closeModal();
                        }
                    }}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Vista de imagen en pantalla completa"
                    tabIndex={0}
                >
                    <button
                        className="timeline__modal-close"
                        onClick={closeModal}
                        aria-label="Cerrar"
                        type="button"
                    >
                        ×
                    </button>
                    <button
                        className="timeline__modal-content"
                        onClick={(e) => e.stopPropagation()}
                        type="button"
                        aria-label="Contenido de la imagen"
                    >
                        <img
                            src={selectedImage.url}
                            alt={selectedImage.eventTitle}
                            className="timeline__modal-image"
                        />
                        <p className="timeline__modal-title">{selectedImage.eventTitle}</p>
                        <button
                            className="timeline__modal-nav timeline__modal-nav--prev"
                            onClick={handleModalPrev}
                            aria-label="Imagen anterior"
                            type="button"
                        >
                            ‹
                        </button>
                        <button
                            className="timeline__modal-nav timeline__modal-nav--next"
                            onClick={handleModalNext}
                            aria-label="Siguiente imagen"
                            type="button"
                        >
                            ›
                        </button>
                    </button>
                </div>
            )}
        </>
    );
}

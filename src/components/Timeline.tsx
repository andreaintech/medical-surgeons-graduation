import { gradTimeline } from '../data/gradTimeline';

export function Timeline() {
    return (
        <div className="timeline">
            <h2 className="timeline__title">Línea de tiempo de la doctora Fabiana 🎓</h2>

            <div className="timeline__list">
                {gradTimeline.map((event, index) => (
                    <article key={event.id} className="timeline__item">
                        <div className="timeline__line">
                            <div className="timeline__dot" />
                            {index !== gradTimeline.length - 1 && <div className="timeline__connector" />}
                        </div>

                        <div className="timeline__card">
                            <span className="timeline__year">{event.year}</span>
                            <h3 className="timeline__card-title">{event.title}</h3>
                            <p className="timeline__description">{event.description}</p>

                            {event.imageUrl && (
                                <div className="timeline__image-wrapper">
                                    <img
                                        src={event.imageUrl}
                                        alt={event.title}
                                        className="timeline__image"
                                    />
                                </div>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

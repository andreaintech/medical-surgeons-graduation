// src/components/GuestbookAndPredictions.tsx
import { useState } from 'react';
import {
    initialMessages,
    initialPredictions,
    type Message,
    type Prediction,
} from '../data/gradMessages';

export function GuestbookAndPredictions() {
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [predictions, setPredictions] = useState<Prediction[]>(initialPredictions);

    const [newMessageName, setNewMessageName] = useState('');
    const [newMessageText, setNewMessageText] = useState('');
    const [newPredictionName, setNewPredictionName] = useState('');
    const [newPredictionText, setNewPredictionText] = useState('');

    function handleAddMessage() {
        if (!newMessageName.trim() || !newMessageText.trim()) return;

        setMessages((prev) => [
            ...prev,
            {
                id: `m-${prev.length + 1}`,
                from: newMessageName.trim(),
                role: '',
                text: newMessageText.trim(),
            },
        ]);

        setNewMessageName('');
        setNewMessageText('');
    }

    function handleAddPrediction() {
        if (!newPredictionName.trim() || !newPredictionText.trim()) return;

        setPredictions((prev) => [
            ...prev,
            {
                id: `p-${prev.length + 1}`,
                from: newPredictionName.trim(),
                text: newPredictionText.trim(),
            },
        ]);

        setNewPredictionName('');
        setNewPredictionText('');
    }

    return (
        <div className="guestbook">
            <section className="guestbook__section">
                <h2>Mensajes para la doctora 💜</h2>

                <ul className="guestbook__list">
                    {messages.map((msg) => (
                        <li key={msg.id} className="guestbook__card">
                            <div className="guestbook__card-header">
                                <strong>{msg.from}</strong>
                                {msg.role && <span className="guestbook__role"> · {msg.role}</span>}
                            </div>
                            <p className="guestbook__text">{msg.text}</p>
                        </li>
                    ))}
                </ul>

                <div className="guestbook__card guestbook__card--form">
                    <h3>Deja tu mensaje</h3>
                    <input
                        type="text"
                        placeholder="Tu nombre"
                        value={newMessageName}
                        onChange={(e) => setNewMessageName(e.target.value)}
                    />
                    <textarea
                        placeholder="Escribe tu mensaje para Fabiana"
                        value={newMessageText}
                        onChange={(e) => setNewMessageText(e.target.value)}
                    />
                    <button type="button" onClick={handleAddMessage}>
                        Enviar mensaje
                    </button>
                </div>
            </section>

            <section className="guestbook__section">
                <h2>Predicciones para la doctora 🔮</h2>

                <ul className="guestbook__list">
                    {predictions.map((pred) => (
                        <li key={pred.id} className="guestbook__card">
                            <div className="guestbook__card-header">
                                <strong>{pred.from}</strong>
                            </div>
                            <p className="guestbook__text">{pred.text}</p>
                        </li>
                    ))}
                </ul>

                <div className="guestbook__card guestbook__card--form">
                    <h3>¿Cómo la ves en el futuro?</h3>
                    <input
                        type="text"
                        placeholder="Tu nombre"
                        value={newPredictionName}
                        onChange={(e) => setNewPredictionName(e.target.value)}
                    />
                    <textarea
                        placeholder="Escribe tu predicción para la doctora Fabiana"
                        value={newPredictionText}
                        onChange={(e) => setNewPredictionText(e.target.value)}
                    />
                    <button type="button" onClick={handleAddPrediction}>
                        Guardar predicción
                    </button>
                </div>
            </section>
        </div>
    );
}

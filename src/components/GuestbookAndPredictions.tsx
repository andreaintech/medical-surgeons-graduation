// src/components/GuestbookAndPredictions.tsx
import { useState, useMemo, useEffect } from 'react';
import { type Message, type Prediction } from '../data/gradMessages';
import { useStudent } from '../hooks/useStudent';
import { getStudentData } from '../data/doctors';

export function GuestbookAndPredictions() {
    const { activeStudent, title, name } = useStudent();
    const studentData = useMemo(() => getStudentData(activeStudent), [activeStudent]);

    const [messages, setMessages] = useState<Message[]>(studentData.messages);
    const [predictions, setPredictions] = useState<Prediction[]>(studentData.predictions);

    // Update messages and predictions when student changes
    useEffect(() => {
        setMessages(studentData.messages);
        setPredictions(studentData.predictions);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeStudent]);
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
                <h2>Mensajes para {title} 💬</h2>

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
                        placeholder={`Escribe tu mensaje para ${name}`}
                        value={newMessageText}
                        onChange={(e) => setNewMessageText(e.target.value)}
                    />
                    <button type="button" onClick={handleAddMessage}>
                        Enviar mensaje
                    </button>
                </div>
            </section>

            <section className="guestbook__section">
                <h2>Predicciones para {title} 🔮</h2>

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
                        placeholder={`Escribe tu predicción para ${title} ${name}`}
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

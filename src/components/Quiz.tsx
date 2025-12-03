// src/components/Quiz.tsx
import { useState } from 'react';
import { gradQuestions } from '../data/gradQuestions';

export function Quiz() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const currentQuestion = gradQuestions[currentIndex];

    function handleSelectOption(optionId: string) {
        setSelectedOptionId(optionId);
    }

    function handleNext() {
        if (!selectedOptionId) return;

        if (selectedOptionId === currentQuestion.correctOptionId) {
            setScore((prev) => prev + 1);
        }

        setSelectedOptionId(null);

        if (currentIndex === gradQuestions.length - 1) {
            setIsFinished(true);
        } else {
            setCurrentIndex((prev) => prev + 1);
        }
    }

    function handleRestart() {
        setCurrentIndex(0);
        setSelectedOptionId(null);
        setScore(0);
        setIsFinished(false);
    }

    if (isFinished) {
        const totalQuestions = gradQuestions.length;
        const ratio = score / totalQuestions;

        let message = 'Tenemos muchas anécdotas para seguir recordando 🎉';
        if (ratio === 1) {
            message = '¡Perfecto! Conoces cada detalle. 💜';
        } else if (ratio >= 0.6) {
            message = '¡Muy bien! Casi que te lo sabes todo. ✨';
        }

        return (
            <div className="quiz quiz--finished">
                <h2>Resultado</h2>
                <p>
                    Respondiste correctamente {score} de {totalQuestions} preguntas.
                </p>
                <p>{message}</p>
                <button type="button" onClick={handleRestart}>
                    Volver a jugar
                </button>
            </div>
        );
    }

    return (
        <div className="quiz">
            <p className="quiz__progress">
                Pregunta {currentIndex + 1} de {gradQuestions.length}
            </p>

            <h2 className="quiz__question">{currentQuestion.question}</h2>

            <ul className="quiz__options">
                {currentQuestion.options.map((option) => (
                    <li key={option.id}>
                        <button
                            type="button"
                            className={
                                option.id === selectedOptionId
                                    ? 'quiz__option quiz__option--selected'
                                    : 'quiz__option'
                            }
                            onClick={() => handleSelectOption(option.id)}
                        >
                            {option.text}
                        </button>
                    </li>
                ))}
            </ul>

            <button
                type="button"
                className="quiz__next-button"
                onClick={handleNext}
                disabled={!selectedOptionId}
            >
                {currentIndex === gradQuestions.length - 1
                    ? 'Ver resultado'
                    : 'Siguiente'}
            </button>
        </div>
    );
}

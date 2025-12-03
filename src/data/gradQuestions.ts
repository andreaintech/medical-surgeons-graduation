
export type QuizOption = {
    id: string;
    text: string;
};

export type QuizQuestion = {
    id: string;
    question: string;
    options: QuizOption[];
    correctOptionId: string;
};

export const gradQuestions: QuizQuestion[] = [
    {
        id: 'g1',
        question: '¿En qué ciudad nació Fabiana?',
        options: [
            { id: 'a', text: 'Valencia' },
            { id: 'b', text: 'Caracas' },
            { id: 'c', text: 'Maracaibo' },
            { id: 'd', text: 'Maracay' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g2',
        question: '¿En qué universidad estudió Medicina Fabiana?',
        options: [
            { id: 'a', text: 'UCV' },
            { id: 'b', text: 'Universidad de Carabobo' },
            { id: 'c', text: 'ULA' },
            { id: 'd', text: 'UNERG' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'g3',
        question: '¿En qué año comenzó la carrera de Medicina?',
        options: [
            { id: 'a', text: '2016' },
            { id: 'b', text: '2017' },
            { id: 'c', text: '2018' },
            { id: 'd', text: '2019' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'g4',
        question: '¿Cuál materia fue su mayor reto?',
        options: [
            { id: 'a', text: 'Anatomía' },
            { id: 'b', text: 'Fisiología' },
            { id: 'c', text: 'Farmacología' },
            { id: 'd', text: 'Todas las anteriores' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'g5',
        question: '¿Qué es lo que más la representa como futura doctora?',
        options: [
            { id: 'a', text: 'Su disciplina' },
            { id: 'b', text: 'Su empatía con los pacientes' },
            { id: 'c', text: 'Su constancia para estudiar' },
            { id: 'd', text: 'Todas las anteriores' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'g6',
        question: '¿Qué es lo que más la representa como futura doctora?',
        options: [
            { id: 'a', text: 'Su disciplina' },
            { id: 'b', text: 'Su empatía con los pacientes' },
            { id: 'c', text: 'Su constancia para estudiar' },
            { id: 'd', text: 'Todas las anteriores' },
        ],
        correctOptionId: 'd',
    },
];

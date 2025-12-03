import { type StudentData } from './index';
import { type Message, type Prediction } from '../gradMessages';
import { type QuizQuestion } from '../types';
import { type TimelineEvent } from '../gradTimeline';

export const josmarMessages: Message[] = [
    {
        id: 'm1',
        from: 'Familia',
        role: 'Familia orgullosa',
        text: 'Estamos muy orgullosos de tu logro y dedicación constante.',
    },
    {
        id: 'm2',
        from: 'Compañera',
        role: 'Compañera de promo',
        text: 'Has sido un ejemplo de dedicación y excelencia durante toda la carrera.',
    },
];

export const josmarPredictions: Prediction[] = [
    {
        id: 'p1',
        from: 'Mentor',
        text: 'Tu futuro profesional será brillante, seguirás creciendo y destacando.',
    },
    {
        id: 'p2',
        from: 'Amigo',
        text: 'Te veo logrando grandes cosas y siendo un excelente profesional.',
    },
];

export const josmarQuestions: QuizQuestion[] = [
    {
        id: 'g1',
        question: '¿En qué ciudad nació el Doctor Josmar?',
        options: [
            { id: 'a', text: 'Caracas' },
            { id: 'b', text: 'Valencia' },
            { id: 'c', text: 'Maracaibo' },
            { id: 'd', text: 'Barquisimeto' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'g2',
        question: '¿Cuál es su especialidad de interés?',
        options: [
            { id: 'a', text: 'Cirugía General' },
            { id: 'b', text: 'Medicina Interna' },
            { id: 'c', text: 'Cardiología' },
            { id: 'd', text: 'Traumatología' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g3',
        question: '¿Qué lo caracteriza como estudiante?',
        options: [
            { id: 'a', text: 'Su dedicación' },
            { id: 'b', text: 'Su constancia' },
            { id: 'c', text: 'Su excelencia' },
            { id: 'd', text: 'Todas las anteriores' },
        ],
        correctOptionId: 'd',
    },
];

export const josmarTimeline: TimelineEvent[] = [
    {
        id: 't1',
        year: 'Inicio',
        title: 'El comienzo del sueño',
        description: 'Inicio de sus estudios de Medicina.',
        imageUrl: '/images/josmar-start.jpg',
    },
    {
        id: 't2',
        year: 'Desarrollo',
        title: 'Creciendo como profesional',
        description: 'Desarrollando conocimientos y habilidades médicas.',
        imageUrl: '/images/josmar-middle.jpg',
    },
    {
        id: 't3',
        year: 'Graduación',
        title: 'Doctor Josmar',
        description: 'Su graduación como médico cirujano.',
        imageUrl: '/images/josmar-graduation.jpg',
    },
];

export const josmarData: StudentData = {
    messages: josmarMessages,
    predictions: josmarPredictions,
    questions: josmarQuestions,
    timeline: josmarTimeline,
};


import { type StudentData } from './index';
import { type Message, type Prediction } from '../gradMessages';
import { type QuizQuestion } from '../types';
import { type TimelineEvent } from '../gradTimeline';

export const hecmaryMessages: Message[] = [
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
        text: 'Has sido una inspiración para todos nosotros durante la carrera.',
    },
];

export const hecmaryPredictions: Prediction[] = [
    {
        id: 'p1',
        from: 'Mentor',
        text: 'Tu futuro profesional será brillante, seguirás creciendo y aprendiendo.',
    },
    {
        id: 'p2',
        from: 'Amiga',
        text: 'Te veo logrando grandes cosas y siendo una excelente profesional.',
    },
];

export const hecmaryQuestions: QuizQuestion[] = [
    {
        id: 'g1',
        question: '¿En qué ciudad nació Hecmary?',
        options: [
            { id: 'a', text: 'Maracaibo' },
            { id: 'b', text: 'Caracas' },
            { id: 'c', text: 'Valencia' },
            { id: 'd', text: 'Barquisimeto' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g2',
        question: '¿Cuál es su especialidad de interés?',
        options: [
            { id: 'a', text: 'Cardiología' },
            { id: 'b', text: 'Medicina Interna' },
            { id: 'c', text: 'Pediatría' },
            { id: 'd', text: 'Cirugía' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'g3',
        question: '¿Qué la caracteriza como estudiante?',
        options: [
            { id: 'a', text: 'Su dedicación' },
            { id: 'b', text: 'Su constancia' },
            { id: 'c', text: 'Su excelencia' },
            { id: 'd', text: 'Todas las anteriores' },
        ],
        correctOptionId: 'd',
    },
];

export const hecmaryTimeline: TimelineEvent[] = [
    {
        id: 't1',
        year: 'Inicio',
        title: 'El comienzo del sueño',
        description: 'Inicio de sus estudios de Medicina.',
        imageUrl: '/images/hecmary-start.jpg',
    },
    {
        id: 't2',
        year: 'Desarrollo',
        title: 'Creciendo como profesional',
        description: 'Desarrollando conocimientos y habilidades médicas.',
        imageUrl: '/images/hecmary-middle.jpg',
    },
    {
        id: 't3',
        year: 'Graduación',
        title: 'Doctora Hecmary',
        description: 'Su graduación como médica cirujana.',
        imageUrl: '/images/hecmary-graduation.jpg',
    },
];

export const hecmaryData: StudentData = {
    messages: hecmaryMessages,
    predictions: hecmaryPredictions,
    questions: hecmaryQuestions,
    timeline: hecmaryTimeline,
};


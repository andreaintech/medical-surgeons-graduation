import { type StudentData } from './index';
import { type Message, type Prediction } from '../gradMessages';
import { type QuizQuestion } from '../types';
import { type TimelineEvent } from '../gradTimeline';

export const glendaMessages: Message[] = [
    {
        id: 'm1',
        from: 'Familia',
        role: 'Familia orgullosa',
        text: 'Estamos muy orgullosos de tu dedicación y esfuerzo constante.',
    },
    {
        id: 'm2',
        from: 'Amiga',
        role: 'Mejor amiga',
        text: 'Has demostrado que con perseverancia se pueden alcanzar los sueños.',
    },
];

export const glendaPredictions: Prediction[] = [
    {
        id: 'p1',
        from: 'Compañero de promo',
        text: 'Te veo siendo una excelente cirujana y ayudando a muchas personas.',
    },
    {
        id: 'p2',
        from: 'Mentor',
        text: 'Tu futuro es brillante, seguirás creciendo profesionalmente.',
    },
];

export const glendaQuestions: QuizQuestion[] = [
    {
        id: 'g1',
        question: '¿En qué ciudad nació Glenda?',
        options: [
            { id: 'a', text: 'Caracas' },
            { id: 'b', text: 'Valencia' },
            { id: 'c', text: 'Maracaibo' },
            { id: 'd', text: 'Barquisimeto' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g2',
        question: '¿Cuál es su especialidad de interés?',
        options: [
            { id: 'a', text: 'Cardiología' },
            { id: 'b', text: 'Cirugía General' },
            { id: 'c', text: 'Pediatría' },
            { id: 'd', text: 'Medicina Interna' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'g3',
        question: '¿Qué la caracteriza como estudiante?',
        options: [
            { id: 'a', text: 'Su dedicación' },
            { id: 'b', text: 'Su empatía' },
            { id: 'c', text: 'Su perseverancia' },
            { id: 'd', text: 'Todas las anteriores' },
        ],
        correctOptionId: 'd',
    },
];

export const glendaTimeline: TimelineEvent[] = [
    {
        id: 't1',
        year: 'Inicio de carrera',
        title: 'Comienza el sueño',
        description: 'Primer día como estudiante de Medicina.',
        imageUrl: '/images/glenda-start.jpg',
    },
    {
        id: 't2',
        year: 'Medio de carrera',
        title: 'Creciendo como profesional',
        description: 'Aprendiendo y desarrollando habilidades clínicas.',
        imageUrl: '/images/glenda-middle.jpg',
    },
    {
        id: 't3',
        year: 'Graduación',
        title: 'Doctora Glenda',
        description: 'El día de su graduación como médica cirujana.',
        imageUrl: '/images/glenda-graduation.jpg',
    },
];

export const glendaData: StudentData = {
    messages: glendaMessages,
    predictions: glendaPredictions,
    questions: glendaQuestions,
    timeline: glendaTimeline,
};


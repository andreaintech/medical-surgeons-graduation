import { type StudentData } from './index';
import { type Message, type Prediction } from '../gradMessages';
import { type QuizQuestion } from '../types';
import { type TimelineEvent } from '../gradTimeline';

export const irainerMessages: Message[] = [
    {
        id: 'm1',
        from: 'Familia',
        role: 'Familia orgullosa',
        text: 'Tu dedicación y pasión por la medicina nos llena de orgullo.',
    },
    {
        id: 'm2',
        from: 'Compañero',
        role: 'Compañero de estudios',
        text: 'Has sido un ejemplo de constancia y excelencia académica.',
    },
];

export const irainerPredictions: Prediction[] = [
    {
        id: 'p1',
        from: 'Profesor',
        text: 'Tienes un futuro prometedor en la medicina, seguirás destacando.',
    },
    {
        id: 'p2',
        from: 'Amiga',
        text: 'Te veo logrando grandes cosas y ayudando a muchos pacientes.',
    },
];

export const irainerQuestions: QuizQuestion[] = [
    {
        id: 'g1',
        question: '¿En qué ciudad nació Irainer?',
        options: [
            { id: 'a', text: 'Valencia' },
            { id: 'b', text: 'Caracas' },
            { id: 'c', text: 'Maracaibo' },
            { id: 'd', text: 'Barquisimeto' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'g2',
        question: '¿Cuál es su área de mayor interés?',
        options: [
            { id: 'a', text: 'Medicina Interna' },
            { id: 'b', text: 'Cirugía' },
            { id: 'c', text: 'Pediatría' },
            { id: 'd', text: 'Ginecología' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g3',
        question: '¿Qué la caracteriza?',
        options: [
            { id: 'a', text: 'Su pasión' },
            { id: 'b', text: 'Su dedicación' },
            { id: 'c', text: 'Su excelencia' },
            { id: 'd', text: 'Todas las anteriores' },
        ],
        correctOptionId: 'd',
    },
];

export const irainerTimeline: TimelineEvent[] = [
    {
        id: 't1',
        year: 'Inicio',
        title: 'El comienzo del camino',
        description: 'Inicio de sus estudios de Medicina.',
        imageUrl: '/images/irainer-start.jpg',
    },
    {
        id: 't2',
        year: 'Desarrollo',
        title: 'Creciendo profesionalmente',
        description: 'Desarrollando habilidades y conocimientos médicos.',
        imageUrl: '/images/irainer-middle.jpg',
    },
    {
        id: 't3',
        year: 'Graduación',
        title: 'Doctora Irainer',
        description: 'Su graduación como médica cirujana.',
        imageUrl: '/images/irainer-graduation.jpg',
    },
];

export const irainerData: StudentData = {
    messages: irainerMessages,
    predictions: irainerPredictions,
    questions: irainerQuestions,
    timeline: irainerTimeline,
};


import { type StudentData } from './index';
import { type Message, type Prediction } from '../gradMessages';
import { type QuizQuestion } from '../types';
import { type TimelineEvent } from '../gradTimeline';

export const emilyMessages: Message[] = [
    {
        id: 'm1',
        from: 'Familia',
        role: 'Familia orgullosa',
        text: 'Tu esfuerzo y dedicación han dado sus frutos, estamos muy orgullosos.',
    },
    {
        id: 'm2',
        from: 'Compañero',
        role: 'Compañero de estudios',
        text: 'Has sido un ejemplo de perseverancia y excelencia académica.',
    },
];

export const emilyPredictions: Prediction[] = [
    {
        id: 'p1',
        from: 'Profesor',
        text: 'Tienes un futuro prometedor, seguirás destacando en tu carrera profesional.',
    },
    {
        id: 'p2',
        from: 'Amiga',
        text: 'Te veo logrando grandes cosas y ayudando a muchos pacientes con tu dedicación.',
    },
];

export const emilyQuestions: QuizQuestion[] = [
    {
        id: 'g1',
        question: '¿En qué ciudad nació la Doctora Emily?',
        options: [
            { id: 'a', text: 'Valencia' },
            { id: 'b', text: 'Caracas' },
            { id: 'c', text: 'Maracaibo' },
            { id: 'd', text: 'Barquisimeto' },
        ],
        correctOptionId: 'c',
    },
    {
        id: 'g2',
        question: '¿Cuál es su área de mayor interés?',
        options: [
            { id: 'a', text: 'Pediatría' },
            { id: 'b', text: 'Cirugía' },
            { id: 'c', text: 'Medicina Interna' },
            { id: 'd', text: 'Ginecología' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g3',
        question: '¿Qué la caracteriza?',
        options: [
            { id: 'a', text: 'Su perseverancia' },
            { id: 'b', text: 'Su excelencia' },
            { id: 'c', text: 'Su dedicación' },
            { id: 'd', text: 'Todas las anteriores' },
        ],
        correctOptionId: 'd',
    },
];

export const emilyTimeline: TimelineEvent[] = [
    {
        id: 't1',
        year: 'Inicio',
        title: 'El comienzo del camino',
        description: 'Inicio de sus estudios de Medicina.',
        imageUrl: '/images/emily-start.jpg',
    },
    {
        id: 't2',
        year: 'Desarrollo',
        title: 'Creciendo profesionalmente',
        description: 'Desarrollando habilidades y conocimientos médicos.',
        imageUrl: '/images/emily-middle.jpg',
    },
    {
        id: 't3',
        year: 'Graduación',
        title: 'Doctora Emily',
        description: 'Su graduación como médica cirujana.',
        imageUrl: '/images/emily-graduation.jpg',
    },
];

export const emilyData: StudentData = {
    messages: emilyMessages,
    predictions: emilyPredictions,
    questions: emilyQuestions,
    timeline: emilyTimeline,
};


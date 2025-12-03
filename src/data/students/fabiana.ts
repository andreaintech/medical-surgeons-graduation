import { type StudentData } from './index';
import { type Message, type Prediction } from '../gradMessages';
import { type QuizQuestion } from '../types';
import { type TimelineEvent } from '../gradTimeline';

export const fabianaMessages: Message[] = [
    {
        id: 'm1',
        from: 'Mamá',
        role: 'Mamá orgullosa',
        text: 'Siempre supe que ibas a lograr todo lo que te propusieras.',
    },
    {
        id: 'm2',
        from: 'Andrea',
        role: 'Hermana',
        text: 'Gracias por inspirarme con tu disciplina y tu corazón enorme.',
    },
];

export const fabianaPredictions: Prediction[] = [
    {
        id: 'p1',
        from: 'Papá',
        text: 'En unos años serás la doctora preferida de todos tus pacientes.',
    },
    {
        id: 'p2',
        from: 'Amiga de la promo',
        text: 'Te veo haciendo tu postgrado soñado y viajando por el mundo.',
    },
];

export const fabianaQuestions: QuizQuestion[] = [
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
];

export const fabianaTimeline: TimelineEvent[] = [
    {
        id: 't1',
        year: '2000',
        title: 'Bienvenida al mundo',
        description: 'El día en que nació la futura doctora Fabiana.',
        imageUrl: '/images/baby-fabi.jpg',
    },
    {
        id: 't2',
        year: 'Infancia',
        title: 'Mini doctora en práctica',
        description: 'Jugando a ser doctora, cuidando muñecos y a toda la familia.',
        imageUrl: '/images/child-fabi.jpg',
    },
    {
        id: 't3',
        year: 'Ingreso a Medicina',
        title: 'Comienza la aventura',
        description: 'Primer día como estudiante de Medicina en la Universidad de Carabobo.',
        imageUrl: '/images/med-first-day.jpg',
    },
    {
        id: 't4',
        year: 'Camisa de la promo',
        title: 'Orgullo de promoción',
        description: 'Cuando recibió y estrenó la camisa de su promo.',
        imageUrl: '/images/promo-shirt.jpg',
    },
    {
        id: 't5',
        year: 'Burrera y fiestas de promo',
        title: 'Celebrando cada logro',
        description: 'Todas esas noches de celebración después de exámenes y guardias.',
        imageUrl: '/images/burrera.jpg',
    },
    {
        id: 't6',
        year: 'Última clase',
        title: 'Cerrando ciclos',
        description: 'La última clase de la carrera, llena de nostalgia y emoción.',
        imageUrl: '/images/last-class.jpg',
    },
    {
        id: 't7',
        year: 'Tesis',
        title: 'Proyecto final',
        description: 'Horas de estudio, escritura y revisión para su tesis.',
        imageUrl: '/images/thesis.jpg',
    },
    {
        id: 't8',
        year: 'Acto de grado',
        title: 'La doctora Fabiana',
        description: 'El momento donde todo el esfuerzo se convierte en título.',
        imageUrl: '/images/graduation-day.jpg',
    },
];

export const fabianaData: StudentData = {
    messages: fabianaMessages,
    predictions: fabianaPredictions,
    questions: fabianaQuestions,
    timeline: fabianaTimeline,
};


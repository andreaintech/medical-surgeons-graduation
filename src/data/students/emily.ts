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
            { id: 'a', text: 'Ocumare del Tuy, (Miranda)' },
            { id: 'b', text: 'Santa Teresa del Tuy (Miranda)' },
            { id: 'c', text: 'Valencia (Carabobo)' },
            { id: 'd', text: 'Maracay (Aragua)' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g2',
        question: '¿En qué año comenzó la Doctora Emily la carrera de Medicina?',
        options: [
            { id: 'a', text: '2016' },
            { id: 'b', text: '2017' },
            { id: 'c', text: '2018' },
            { id: 'd', text: '2019' },
        ],
        correctOptionId: 'c',
    },
    {
        id: 'g3',
        question: '¿Cuál materia fue el mayor reto de la Doctora Emily durante la carrera?',
        options: [
            { id: 'a', text: 'Fisiología en 2do año' },
            { id: 'b', text: 'Anatomía en 1er año' },
            { id: 'c', text: 'Farmacología en 3er año' },
            { id: 'd', text: 'Medicina Interna en 4to año' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g4',
        question: '¿Cuál materia le gustaba más a la Doctora Emily durante la carrera?',
        options: [
            { id: 'a', text: 'Medicina Interna de 4to año' },
            { id: 'b', text: 'Pediatría de 5to año' },
            { id: 'c', text: 'Cirugía de 5to año' },
            { id: 'd', text: 'Ginecología de 6to año' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g5',
        question: '¿Qué es lo que más representa a Emily como Doctora?',
        options: [
            { id: 'a', text: 'La empatía con los pacientes y las ganas de actualizarse con información médica' },
            { id: 'b', text: 'Su disciplina y constancia' },
            { id: 'c', text: 'Su excelencia académica' },
            { id: 'd', text: 'Su dedicación al estudio' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g6',
        question: '¿Cuál es la fecha de cumpleaños de la doctora Emily?',
        options: [
            { id: 'a', text: '18/09/1999' },
            { id: 'b', text: '18/09/2000' },
            { id: 'c', text: '09/09/2000' },
            { id: 'd', text: '09/18/2000' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'g7',
        question: '¿Qué actividad le gustaba hacer a la Doctora Emily durante su infancia?',
        options: [
            { id: 'a', text: 'Dibujar' },
            { id: 'b', text: 'Jugar fútbol' },
            { id: 'c', text: 'Leer libros' },
            { id: 'd', text: 'Bailar en Danza' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'g8',
        question: '¿Con qué jugaba la Doctora Emily cuando era pequeña?',
        options: [
            { id: 'a', text: 'Con sus muñecas a la maestra y la doctora' },
            { id: 'b', text: 'Con su muñeca a la maestra' },
            { id: 'c', text: 'Con su muñeca a la veterinaria y la doctora' },
            { id: 'd', text: 'Con su muñeca a la doctora' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g9',
        question: '¿En qué año de la carrera comenzó la Doctora Emily a realizar las guardias?',
        options: [
            { id: 'a', text: '3er año' },
            { id: 'b', text: '4to año' },
            { id: 'c', text: '5to año' },
            { id: 'd', text: '6to año' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'g10',
        question: '¿En qué año de la carrera la Doctora Emily participó/asistió a congresos?',
        options: [
            { id: 'a', text: '3er año' },
            { id: 'b', text: '4to año' },
            { id: 'c', text: '5to año' },
            { id: 'd', text: '6to año' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g11',
        question: '¿Qué evento o situación marcó más a la Doctora Emily durante la carrera?',
        options: [
            { id: 'a', text: 'La primera guardia cuando vió la realidad de la falta de insumos médicos y de la situación del hospital. Como futuro médico y persona me frustró el no poder hacer nada ante esa situación pero fue un reto aprender a resolver con lo que se tiene' },
            { id: 'b', text: 'La pandemia y adaptación a clases virtuales' },
            { id: 'c', text: 'Primer paciente que atendió sola y como se frustró en tratar de resolver con lo que se tiene por falta de insumos médicos' },
            { id: 'd', text: 'La primera cirugía que realizó sola' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g12',
        question: '¿Cuáles son los hobbies de la Doctora Emily?',
        options: [
            { id: 'a', text: 'Ver series/películas e ir al gym' },
            { id: 'b', text: 'Leer libros de romance' },
            { id: 'c', text: 'Cantar en karaoke' },
            { id: 'd', text: 'Bailar e ir al gym' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g13',
        question: '¿Cuál fue la última prueba académica antes de la graduación de la Doctora Emily?',
        options: [            
            { id: 'a', text: 'Examen final de 6to año' },
            { id: 'b', text: 'Defensa de tesis' },
            { id: 'c', text: 'Práctica clínica final de 6to año' },
            { id: 'd', text: 'Examen oral de las prácticas profesionales' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'g14',
        question: '¿En qué se quiere especializar la Doctora Emily?',
        options: [
            { id: 'a', text: 'Ginecología y Obstetricia' },
            { id: 'b', text: 'Cirugía Plástica' },
            { id: 'c', text: 'Cardiología' },
            { id: 'd', text: 'Medicina Interna' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g15',
        question: '¿Cuál es o son los profesores favoritos de la Doctora Emily?',
        options: [
            { id: 'a', text: 'Dra. Elsa Lara (Pediatría)' },
            { id: 'b', text: 'Dra. Cristina Royero (Semiología)' },
            { id: 'c', text: 'Dr. Juan Herde (Ginecología y Obstetricia)' },
            { id: 'd', text: ' ⁠Todos los anteriores' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'g16',
        question: '¿Cómo se ve la Doctora Emily en 5 años?',
        options: [
            { id: 'a', text: 'Como especialista en Ginecología y Obstetricia' },
            { id: 'b', text: 'Como especialista en Cirugía Plástica' },
            { id: 'c', text: 'Dando clases en la universidad' },
            { id: 'd', text: 'Como especialista en Cardiología' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g17',
        question: 'Al final de una guardia la Doctora Emily normalmente haría o quisiera…',
        options: [
            { id: 'a', text: 'Bañarse y dormir' },
            { id: 'b', text: 'Tomar un café y comer algo rico' },
            { id: 'c', text: 'Comer algo rico' },
            { id: 'd', text: 'Dormir sin bañarse' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g18',
        question: 'La comida favorita de la Doctora Emily es…',
        options: [
            { id: 'a', text: 'Comida marina (pescado, camarones, calamares)' },
            { id: 'b', text: 'Pasta' },
            { id: 'c', text: 'Pizza' },
            { id: 'd', text: 'Sushi' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g19',
        question: 'El postre favorito de la doctora Emily es…',
        options: [
            { id: 'a', text: 'Pie de limón' },
            { id: 'b', text: 'Chocolate' },
            { id: 'c', text: 'Torta de arequipe' },
            { id: 'd', text: 'Brownie' },
        ],
        correctOptionId: 'b',
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


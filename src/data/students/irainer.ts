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
        question: '¿En qué ciudad nació la Doctora Irainer?',
        options: [
            { id: 'a', text: 'Maracay' },
            { id: 'b', text: 'Valencia' },
            { id: 'c', text: 'Caracas' },
            { id: 'd', text: 'La Victoria' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'g2',
        question: '¿En qué año comenzó la Doctora Irainer la carrera de Medicina?',
        options: [
            { id: 'a', text: '2018' },
            { id: 'b', text: '2017' },
            { id: 'c', text: '2016' },
            { id: 'd', text: '2019' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g3',
        question: '¿Cuál materia fue el mayor reto de la Doctora Irainer durante la carrera?',
        options: [
            { id: 'a', text: 'Fisiopatología y Medicina Interna' },
            { id: 'b', text: 'Anatomía y Fisiología' },
            { id: 'c', text: 'Farmacología y Bioquímica' },
            { id: 'd', text: 'Parasitología y Medicina Interna' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g4',
        question: '¿Cuál materia le gustaba más a la Doctora Irainer durante la carrera?',
        options: [
            { id: 'a', text: 'Pediatría y Ginecología' },
            { id: 'b', text: 'Cirugía y Parasitología' },
            { id: 'c', text: 'Ginecología y Cirugía' },
            { id: 'd', text: 'Medicina Interna y Parasitología' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g5',
        question: '¿Qué es lo que más representa a Irainer como Doctora?',
        options: [
            { id: 'a', text: 'Promover la salud y la estética corporal' },
            { id: 'b', text: 'Su disciplina y constancia' },
            { id: 'c', text: 'Su excelencia académica y el amor por la medicina' },
            { id: 'd', text: 'Su dedicación al estudio y la salud' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g6',
        question: '¿Cuál es la fecha de cumpleaños de la Doctora Irainer?',
        options: [
            { id: 'a', text: '12/12/1998' },
            { id: 'b', text: '12/12/1999' },
            { id: 'c', text: '12/12/2000' },
            { id: 'd', text: '21/12/2001' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'g7',
        question: '¿Qué actividad le gustaba hacer a la Doctora Irainer durante su infancia?',
        options: [
            { id: 'a', text: 'Dibujar' },
            { id: 'b', text: 'Jugar fútbol' },
            { id: 'c', text: 'Leer libros' },
            { id: 'd', text: 'Ninguna de las anteriores' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'g8',
        question: '¿Con qué jugaba la Doctora Irainer cuando era pequeña?',
        options: [
            { id: 'a', text: 'Jugar a las Barbie' },
            { id: 'b', text: 'Con carritos de juguete' },
            { id: 'c', text: 'Con pelotas' },
            { id: 'd', text: 'Con videojuegos' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g9',
        question: '¿En qué año de la carrera comenzó la Doctora Irainer a realizar las guardias?',
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
        question: '¿En qué año de la carrera la Doctora Irainer participó/asistió a congresos?',
        options: [
            { id: 'a', text: '3er año' },
            { id: 'b', text: '4to año' },
            { id: 'c', text: '5to año' },
            { id: 'd', text: '6to año' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'g11',
        question: '¿Qué evento o situación marcó más a la Doctora Irainer durante la carrera?',
        options: [
            { id: 'a', text: 'El día que una residente la humilló en una revista (llegó llorando a la casa)' },
            { id: 'b', text: 'La pandemia y adaptación a clases virtuales' },
            { id: 'c', text: 'El dia en que un paciente que atendió sola le dijo: gracias por salvar mi vida' },
            { id: 'd', text: 'El día que un paciente la humilló y le dijo que no era buena doctora' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g12',
        question: '¿Cuáles son los hobbies de la Doctora Irainer?',
        options: [
            { id: 'a', text: 'Leer y viajar' },
            { id: 'd', text: 'Cocinar y hacer ejercicio' },
            { id: 'c', text: 'Ver series y escuchar música' },
            { id: 'd', text: 'Ninguna de las anteriores' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'g13',
        question: '¿Cuál fue la última prueba académica antes de la graduación de la Doctora Irainer?',
        options: [
            { id: 'a', text: 'Examen final de 6to año' },
            { id: 'b', text: 'Defensa de tesis' },
            { id: 'c', text: 'Presentación de pasantías profesionales' },
            { id: 'd', text: 'Práctica clínica final' },
        ],
        correctOptionId: 'c',
    },
    {
        id: 'g14',
        question: '¿En qué se quiere especializar la Doctora Irainer?',
        options: [
            { id: 'a', text: 'Cirugía Plástica' },
            { id: 'b', text: 'Medicina Interna' },
            { id: 'c', text: 'Cardiología' },
            { id: 'd', text: 'Pediatría' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g15',
        question: '¿Cuál es o son los profesores favoritos de la Doctora Irainer?',
        options: [
            { id: 'a', text: 'Dra Joselic Tamayo Juan Domínguez' },
            { id: 'b', text: 'Dra. Elsa Lara y Dr. Juan Herde' },
            { id: 'c', text: 'Dra. Cristina Royero' },
            { id: 'd', text: 'Dra. Bianney Ojeda' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g16',
        question: '¿Cómo se ve la Doctora Irainer en 5 años?',
        options: [
            { id: 'a', text: 'Completando su especialización en Cirugía Plástica' },
            { id: 'b', text: 'Trabajando en un hospital como Ginecóloga' },
            { id: 'c', text: 'Especialista con un centro clínico' },
            { id: 'd', text: 'Enseñando en la universidad siendo especialista en Pediatría' },
        ],
        correctOptionId: 'c',
    },
    {
        id: 'g17',
        question: 'Al final de una guardia la Doctora Irainer normalmente haría o quisiera…',
        options: [
            { id: 'a', text: 'Dormir' },
            { id: 'b', text: 'Descansar y dormir' },
            { id: 'c', text: 'Comer algo rico' },
            { id: 'd', text: 'Ver una serie o película' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g18',
        question: 'La comida favorita de la Doctora Irainer es…',
        options: [
            { id: 'a', text: 'Pasta' },
            { id: 'b', text: 'Paella' },
            { id: 'c', text: 'Pizza' },
            { id: 'd', text: 'Sushi' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'g19',
        question: 'El postre favorito de la Doctora Irainer es…',
        options: [           
            { id: 'a', text: 'Helado' },
            { id: 'b', text: 'Torta de chocolate' },
            { id: 'c', text: 'Tres leches' },
            { id: 'd', text: 'Brownies' },
        ],
        correctOptionId: 'c',
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


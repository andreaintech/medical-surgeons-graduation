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
        question: '¿En qué ciudad naciste?',
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
        question: '¿En qué año comenzaste la carrera de Medicina?',
        options: [
            { id: 'a', text: '2016' },
            { id: 'b', text: '2017' },
            { id: 'c', text: '2018' },
            { id: 'd', text: '2019' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g3',
        question: '¿Cuál materia fue tu mayor reto durante la carrera?',
        options: [
            { id: 'a', text: 'Anatomía' },
            { id: 'b', text: 'Fisiología' },
            { id: 'c', text: 'Farmacología' },
            { id: 'd', text: 'Patología' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g4',
        question: '¿Cuál materia te gustaba más durante la carrera?',
        options: [
            { id: 'a', text: 'Medicina Interna' },
            { id: 'b', text: 'Cirugía' },
            { id: 'c', text: 'Pediatría' },
            { id: 'd', text: 'Ginecología' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g5',
        question: '¿Qué es lo que más te representa como futura doctora?',
        options: [
            { id: 'a', text: 'Su pasión' },
            { id: 'b', text: 'Su dedicación' },
            { id: 'c', text: 'Su excelencia' },
            { id: 'd', text: 'Todas las anteriores' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'g6',
        question: '¿Cuál es la fecha de tu cumpleaños?',
        options: [
            { id: 'a', text: '8 de Febrero' },
            { id: 'b', text: '18 de Abril' },
            { id: 'c', text: '25 de Septiembre' },
            { id: 'd', text: '12 de Diciembre' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g7',
        question: '¿Qué actividad te gustaba hacer durante tu infancia?',
        options: [
            { id: 'a', text: 'Jugar con muñecas' },
            { id: 'b', text: 'Practicar deportes' },
            { id: 'c', text: 'Leer libros' },
            { id: 'd', text: 'Dibujar' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g8',
        question: '¿Con qué jugabas cuando eras pequeña?',
        options: [
            { id: 'a', text: 'Con muñecas' },
            { id: 'b', text: 'Con carros' },
            { id: 'c', text: 'Con pelotas' },
            { id: 'd', text: 'Con videojuegos' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g9',
        question: '¿En qué año de la carrera comenzaste a realizar las guardias?',
        options: [
            { id: 'a', text: '3er año' },
            { id: 'b', text: '4to año' },
            { id: 'c', text: '5to año' },
            { id: 'd', text: '6to año' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g10',
        question: '¿En qué año de la carrera participaste/asististe a congresos?',
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
        question: '¿Qué evento o situación te marcó más durante la carrera?',
        options: [
            { id: 'a', text: 'Primera guardia' },
            { id: 'b', text: 'Primer paciente que atendí' },
            { id: 'c', text: 'La pandemia' },
            { id: 'd', text: 'Defensa de tesis' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g12',
        question: '¿Cuáles son tus hobbies?',
        options: [
            { id: 'a', text: 'Leer y viajar' },
            { id: 'b', text: 'Cocinar y hacer ejercicio' },
            { id: 'c', text: 'Ver series y escuchar música' },
            { id: 'd', text: 'Bailar y cantar' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g13',
        question: '¿Cuál fue la última prueba académica antes de la graduación?',
        options: [
            { id: 'a', text: 'Examen final de 6to año' },
            { id: 'b', text: 'Defensa de tesis' },
            { id: 'c', text: 'Examen de grado' },
            { id: 'd', text: 'Práctica clínica final' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'g14',
        question: '¿Te quieres especializar? ¿En qué?',
        options: [
            { id: 'a', text: 'Medicina Interna' },
            { id: 'b', text: 'Cirugía' },
            { id: 'c', text: 'Cardiología' },
            { id: 'd', text: 'Pediatría' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g15',
        question: '¿Cuál es o son tus profesores favoritos?',
        options: [
            { id: 'a', text: 'Dr. Pérez y Dra. González' },
            { id: 'b', text: 'Dr. Martínez y Dra. Rodríguez' },
            { id: 'c', text: 'Dr. López y Dra. Sánchez' },
            { id: 'd', text: 'Dr. Fernández y Dra. Torres' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g16',
        question: '¿Cómo te ves en 5 años?',
        options: [
            { id: 'a', text: 'Completando mi especialización y trabajando en un hospital' },
            { id: 'b', text: 'Viajando y haciendo investigación' },
            { id: 'c', text: 'Teniendo mi propia clínica' },
            { id: 'd', text: 'Enseñando en la universidad' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g17',
        question: 'Al final de una guardia yo normalmente haría o quisiera…',
        options: [
            { id: 'a', text: 'Descansar y dormir' },
            { id: 'b', text: 'Comer algo rico' },
            { id: 'c', text: 'Ir al gimnasio' },
            { id: 'd', text: 'Ver una serie o película' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g18',
        question: 'Mi comida favorita es…',
        options: [
            { id: 'a', text: 'Pasta' },
            { id: 'b', text: 'Pizza' },
            { id: 'c', text: 'Sushi' },
            { id: 'd', text: 'Arepas' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g19',
        question: 'Mi postre favorito es…',
        options: [
            { id: 'a', text: 'Helado' },
            { id: 'b', text: 'Torta de chocolate' },
            { id: 'c', text: 'Flan' },
            { id: 'd', text: 'Brownies' },
        ],
        correctOptionId: 'a',
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


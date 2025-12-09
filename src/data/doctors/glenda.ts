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
        question: '¿En qué ciudad naciste?',
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
            { id: 'a', text: 'Cirugía' },
            { id: 'b', text: 'Medicina Interna' },
            { id: 'c', text: 'Pediatría' },
            { id: 'd', text: 'Ginecología' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g5',
        question: '¿Qué es lo que más te representa como futura doctora?',
        options: [
            { id: 'a', text: 'Su dedicación' },
            { id: 'b', text: 'Su empatía' },
            { id: 'c', text: 'Su perseverancia' },
            { id: 'd', text: 'Todas las anteriores' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'g6',
        question: '¿Cuál es la fecha de tu cumpleaños?',
        options: [
            { id: 'a', text: '15 de Enero' },
            { id: 'b', text: '22 de Marzo' },
            { id: 'c', text: '10 de Julio' },
            { id: 'd', text: '5 de Noviembre' },
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
            { id: 'a', text: 'Cirugía General' },
            { id: 'b', text: 'Medicina Interna' },
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


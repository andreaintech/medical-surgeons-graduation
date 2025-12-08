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
        from: 'Amiga de la promo',
        text: 'Te veo haciendo tu postgrado soñado y viajando por el mundo.',
    },
];

export const fabianaQuestions: QuizQuestion[] = [
    {
        id: 'g1',
        question: '¿En qué ciudad naciste?',
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
            { id: 'a', text: 'Anatomía' },
            { id: 'b', text: 'Fisiología' },
            { id: 'c', text: 'Patología' },
            { id: 'd', text: 'Medicina Interna' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g5',
        question: '¿Qué es lo que más te representa como futura doctora?',
        options: [
            { id: 'a', text: 'Su disciplina' },
            { id: 'b', text: 'Su empatía con los pacientes' },
            { id: 'c', text: 'Su constancia para estudiar' },
            { id: 'd', text: 'Todas las anteriores' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g6',
        question: '¿Cuál es la fecha de tu cumpleaños?',
        options: [
            { id: 'a', text: '26 de Junio' },
            { id: 'b', text: '15 de Marzo' },
            { id: 'c', text: '10 de Agosto' },
            { id: 'd', text: '22 de Diciembre' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g7',
        question: '¿Qué actividad te gustaba hacer durante tu infancia?',
        options: [
            { id: 'a', text: 'Cantar' },
            { id: 'b', text: 'Jugar con muñecas' },
            { id: 'c', text: 'Leer libros' },
            { id: 'd', text: 'Dibujar' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g8',
        question: '¿Con qué jugabas cuando eras pequeña?',
        options: [
            { id: 'a', text: 'Con muñecos, cuidándolos' },
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
            { id: 'a', text: 'La pandemia y adaptación a clases virtuales' },
            { id: 'b', text: 'Primera guardia' },
            { id: 'c', text: 'Primer congreso' },
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
        correctOptionId: 'a',
    },
    {
        id: 'g14',
        question: '¿Te quieres especializar? ¿En qué?',
        options: [
            { id: 'a', text: 'Medicina Interna' },
            { id: 'b', text: 'Cirugía General' },
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

export const fabianaTimeline: TimelineEvent[] = [
    {
        id: 't1',
        year: '2000',
        title: 'Bienvenida al mundo',
        description: 'Un día lunes 26 de Junio fue el dia en que nació la futura Doctora Fabiana',
        imageUrls: ['/src/assets/fabiana/timeline/childhood/fabiana1.jpeg', '/src/assets/fabiana/timeline/childhood/fabiana2.jpeg', '/src/assets/fabiana/timeline/childhood/fabiana3.jpeg'],
    },
    {
        id: 't2',
        year: 'Infancia temprana',
        title: 'Mini doctora en proceso',
        description: 'Era muy cuchi, su mama, tios y abuelos la cuidaban mucho, siempre jugaba a cuidar a sus muñecos y le gustaba cantar en los viajes en el carro',
        imageUrls: ['/src/assets/fabiana/timeline/childhood/fabiana4.jpeg', '/src/assets/fabiana/timeline/childhood/fabiana5.jpeg', '/src/assets/fabiana/timeline/childhood/fabiana6.jpeg'],
    },
    {
        id: 't3',
        year: 'Infancia media',
        title: 'Mini doctora en crecimiento',
        description: 'Era muy creativa, le gustaba jugar sola y tenia ocurrencias muy curiosas, siempre se portaba muy bien y era muy inteligente',
        imageUrls: ['/src/assets/fabiana/timeline/childhood/fabiana7.jpeg', '/src/assets/fabiana/timeline/childhood/fabiana8.jpeg', '/src/assets/fabiana/timeline/childhood/fabiana9.jpeg'],
    },
    {
        id: 't3',
        year: 'Ingreso a Medicina',
        title: 'Comienza la aventura en 1er año de Medicina',
        description: 'Los primeros días como estudiante de Medicina en la Universidad de Carabobo.',
        imageUrls: ['/src/assets/fabiana/timeline/university/1year-1.jpeg', '/src/assets/fabiana/timeline/university/1year-2.jpeg', '/src/assets/fabiana/timeline/university/1year-3.jpeg'],
    },
    {
        id: 't4',
        year: '2do año de Medicina',
        title: 'Continua la aventura en 2do año de Medicina en medio de la pandemia',
        description: 'Continua la aventura en 2do año de Medicina en medio de la pandemia, adaptandonos a a la nueva realidad',
        imageUrls: ['/src/assets/fabiana/timeline/university/2year-1.jpeg', '/src/assets/fabiana/timeline/university/2year-2.jpeg', '/src/assets/fabiana/timeline/university/2year-3.jpeg'],
    },
    {
        id: 't5',
        year: '3er año de Medicina',
        title: 'Volviendo a la normalidad, volviendo a la universidad',
        description: 'Todas esas noches de celebración después de exámenes',
        imageUrls: ['/src/assets/fabiana/timeline/university/3year-1.jpeg', '/src/assets/fabiana/timeline/university/3year-2.jpeg', '/src/assets/fabiana/timeline/university/3year-3.jpeg'],
    },
    {
        id: 't6',
        year: '4to año de Medicina',
        title: 'Continua la aventura en 4to año de Medicina, ahora enfrentando las guardias en la CHET',
        description: 'Continua la aventura en 4to año de Medicina, ahora enfrentando las guardias en la Ciudad Hospitalaria Enrique Tejera, conociendo a nuevos compañeros y profesores',
        imageUrls: [
            '/src/assets/fabiana/timeline/university/4year-1.jpeg',
            '/src/assets/fabiana/timeline/university/4year-2.jpeg',
            '/src/assets/fabiana/timeline/university/4year-3.jpeg',
            '/src/assets/fabiana/timeline/university/4year-4.jpeg',
        ],
    },
    {
        id: 't7',
        year: '5to año de Medicina',
        title: 'Continua la aventura en 5to año de Medicina, siguen las guardias y ahora los congresos',
        description: 'Continua la aventura en 5to año de Medicina, ahora enfrentando las guardias en la Ciudad Hospitalaria Enrique Tejera, conociendo a nuevos compañeros y profesores',
        imageUrls: [
            '/src/assets/fabiana/timeline/university/5year-1.jpeg',
            '/src/assets/fabiana/timeline/university/5year-2.jpeg',
            '/src/assets/fabiana/timeline/university/5year-3.jpeg',
            '/src/assets/fabiana/timeline/university/5year-4.jpeg',
            '/src/assets/fabiana/timeline/university/5year-5.jpeg',
            '/src/assets/fabiana/timeline/university/5year-6.jpeg',
        ],
    },
    {
        id: '6to año de Medicina',
        year: '6to año de Medicina',
        title: 'Continua la aventura en 6to año de Medicina, ahora enfrentando las guardias en la CHET',
        description: 'Continua la aventura en 6to año de Medicina, ahora enfrentando las guardias en la Ciudad Hospitalaria Enrique Tejera, conociendo a nuevos compañeros y profesores',
        imageUrls: [
            '/src/assets/fabiana/timeline/university/6year-1.jpeg',
            '/src/assets/fabiana/timeline/university/6year-2.jpeg',
            '/src/assets/fabiana/timeline/university/6year-3.jpeg',
            '/src/assets/fabiana/timeline/university/6year-4.jpeg',
            '/src/assets/fabiana/timeline/university/6year-5.jpeg',
            '/src/assets/fabiana/timeline/university/6year-6.jpeg',
        ],
    },
    {
        id: 'Defensa de tesis',
        year: 'Defensa de tesis',
        title: 'Defensa de tesis',
        description: 'Defensa de tesis, la ultima prueba antes de la graduacion',
        imageUrls: [
            '/src/assets/fabiana/timeline/university/thesis-1.jpeg',
            '/src/assets/fabiana/timeline/university/thesis-2.jpeg',
            '/src/assets/fabiana/timeline/university/thesis-3.jpeg'
        ],
    },
    {
        id: 'Revelacion del logo de la promo',
        year: 'Tenemos logo de promo',
        title: 'Promo 68 UC-CHET',
        description: 'Fiesta de revelacion del logo de la promo, celebrando a lo grande',
        imageUrls: [
            '/src/assets/fabiana/timeline/university/promo-1.jpeg',
            '/src/assets/fabiana/timeline/university/promo-2.jpeg',
            '/src/assets/fabiana/timeline/university/promo-3.jpeg',
            '/src/assets/fabiana/timeline/university/promo-4.jpeg',
            '/src/assets/fabiana/timeline/university/promo-5.jpeg',
            '/src/assets/fabiana/timeline/university/promo-6.jpeg',
        ],
    },
    {
        id: 'Fotos oficiales en la CHET',
        year: 'Tenemos logo de promo',
        title: 'Nos tomamos unas fotos oficiales en la CHET',
        description: 'Nos tomamos unas fotos oficiales en la CHET',
        imageUrls: [
            '/src/assets/fabiana/timeline/university/chet-1.jpeg',
            '/src/assets/fabiana/timeline/university/chet-2.jpeg',
            '/src/assets/fabiana/timeline/university/chet-3.jpeg',
            '/src/assets/fabiana/timeline/university/chet-4.jpeg',
            '/src/assets/fabiana/timeline/university/chet-5.jpeg',
            '/src/assets/fabiana/timeline/university/chet-6.jpeg',
        ],
    },
    {
        id: 'Fotos oficiales en el Arco de Campo Carabobo',
        year: 'Tenemos logo de promo',
        title: 'Nos tomamos unas fotos oficiales en el Arco de Campo Carabobo',
        description: 'Nos tomamos unas fotos oficiales en el Arco de Campo Carabobo',
        imageUrls: [
            '/src/assets/fabiana/timeline/university/arcocarabobo-1.jpeg',
            '/src/assets/fabiana/timeline/university/arcocarabobo-2.jpeg',
            '/src/assets/fabiana/timeline/university/arcocarabobo-3.jpeg',
            '/src/assets/fabiana/timeline/university/arcocarabobo-4.jpeg',
            '/src/assets/fabiana/timeline/university/arcocarabobo-5.jpeg',
            '/src/assets/fabiana/timeline/university/arcocarabobo-6.jpeg',
        ],
    },
    {
        id: 'Caravana y Marcha Triunfal',
        year: 'Tenemos logo de promo',
        title: 'Caravana y Marcha Triunfal',
        description: 'Caravana y Marcha Triunfal, celebrando a lo grande',
        imageUrls: [
            '/src/assets/fabiana/timeline/university/caravana-1.jpeg',
            '/src/assets/fabiana/timeline/university/caravana-2.jpeg',
            '/src/assets/fabiana/timeline/university/caravana-3.jpeg',
            '/src/assets/fabiana/timeline/university/caravana-4.jpeg',
            '/src/assets/fabiana/timeline/university/caravana-5.jpeg',
            '/src/assets/fabiana/timeline/university/caravana-6.jpeg',
        ],
    },
    {
        id: 'Firma del libro',
        year: 'Universidad de Carabobo',
        title: 'Caravana y Marcha Triunfal',
        description: 'Caravana y Marcha Triunfal, celebrando a lo grande',
        imageUrls: [
            '/src/assets/fabiana/timeline/university/caravana-1.jpeg',
            '/src/assets/fabiana/timeline/university/caravana-2.jpeg',
            '/src/assets/fabiana/timeline/university/caravana-3.jpeg',
            '/src/assets/fabiana/timeline/university/caravana-4.jpeg',
            '/src/assets/fabiana/timeline/university/caravana-5.jpeg',
            '/src/assets/fabiana/timeline/university/caravana-6.jpeg',
        ],
    },
    {
        id: 'Ultima clase como alumnos de pregrado',
        year: 'Universidad de Carabobo',
        title: 'Ultima clase como alumnos de pregrado',
        description: 'Ultima clase como alumnos de pregrado, llena de nostalgia y emoción',
        imageUrls: ['/src/assets/fabiana/timeline/university/lastclass-1.jpeg', '/src/assets/fabiana/timeline/university/lastclass-2.jpeg', '/src/assets/fabiana/timeline/university/lastclass-3.jpeg'],
    },
    {
        id: 'Acto de grado',
        year: 'Somos Médicos Cirujanos de la promo 68 UC-CHET',
        title: 'Acto de grado',
        description: 'Somos Médicos Cirujanos de la promo 68 UC-CHET, celebrando a lo grande',
        imageUrls: [
            '/src/assets/fabiana/timeline/university/graduation-1.jpeg',
            '/src/assets/fabiana/timeline/university/graduation-2.jpeg',
            '/src/assets/fabiana/timeline/university/graduation-3.jpeg',
            '/src/assets/fabiana/timeline/university/graduation-4.jpeg',
            '/src/assets/fabiana/timeline/university/graduation-5.jpeg',
            '/src/assets/fabiana/timeline/university/graduation-6.jpeg',
        ],
    },
];

export const fabianaData: StudentData = {
    messages: fabianaMessages,
    predictions: fabianaPredictions,
    questions: fabianaQuestions,
    timeline: fabianaTimeline,
};


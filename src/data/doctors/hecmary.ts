import { type StudentData } from './index';
import { type Message, type Prediction } from '../gradMessages';
import { type QuizQuestion } from '../types';
import { type TimelineEvent, type TimelineImage } from '../types';

// Import all images using Vite's import.meta.glob
// Structure: childhood/1.jpeg, childhood/2.jpeg, etc.
//           adolescence/1.jpeg, adolescence/2.jpeg, etc.
//           university/1/1.jpeg, university/1/2.jpeg, etc.
// Use import.meta.glob to get all images at build time
const hecmaryAllImages = import.meta.glob('../../assets/hecmary/timeline/**/*.jpeg', { 
    eager: true, 
    query: '?url',
    import: 'default'
}) as Record<string, string>;

// Helper function to get images for a specific stage
function getImagesForStage(stage: 'childhood' | 'adolescence' | 'university', year?: number): TimelineImage[] {
    const images: TimelineImage[] = [];
    const entries = Object.entries(hecmaryAllImages);
    
    // Filter by stage and year
    const filtered = entries.filter(([path]) => {
        if (year) {
            return path.includes(`/${stage}/${year}/`);
        }
        // For childhood and adolescence, exclude university folder
        if (stage === 'childhood' || stage === 'adolescence') {
            return path.includes(`/${stage}/`) && !path.includes('/university/');
        }
        return false;
    });
    
    // Sort by filename number
    filtered.sort(([a], [b]) => {
        const getNum = (path: string) => {
            const match = path.match(/(\d+)\.jpeg$/);
            return match ? parseInt(match[1]) : 0;
        };
        return getNum(a) - getNum(b);
    });
    
    // Extract URLs
    filtered.forEach(([, url]) => {
        if (url && typeof url === 'string') {
            images.push({ url, description: null });
        }
    });
    
    return images;
}

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
        question: '¿En qué ciudad naciste?',
        options: [
            { id: 'a', text: 'Maracaibo' },
            { id: 'b', text: 'Caracas' },
            { id: 'c', text: 'Valencia' },
            { id: 'd', text: 'Barquisimeto' },
        ],
        correctOptionId: 'd',
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
        correctOptionId: 'c',
    },
    {
        id: 'g3',
        question: '¿Cuál materia fue tu mayor reto durante la carrera?',
        options: [
            { id: 'a', text: 'Anatomía' },
            { id: 'b', text: 'Fisiología' },
            { id: 'c', text: 'Bioquímica' },
            { id: 'd', text: 'Patología' },
        ],
        correctOptionId: 'c',
    },
    {
        id: 'g4',
        question: '¿Cuál materia te gustaba más durante la carrera?',
        options: [
            { id: 'a', text: 'Medicina Interna' },
            { id: 'b', text: 'Cardiología' },
            { id: 'c', text: 'Pediatría' },
            { id: 'd', text: 'Cirugía' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'g5',
        question: '¿Qué es lo que más te representa como futura doctora?',
        options: [
            { id: 'a', text: 'Responsabilidad, Perseverancia y Dedicación' },
            { id: 'b', text: 'Entrega, Dedicación y Pasión' },
            { id: 'c', text: 'Constancia y Perseverancia' },
            { id: 'd', text: 'Responsabilidad, Entrega y Dedicación' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'g6',
        question: '¿Cuál es la fecha de tu cumpleaños?',
        options: [
            { id: 'a', text: '25/03/1999' },
            { id: 'b', text: '14/08/2000' },
            { id: 'c', text: '20/10/2000' },
            { id: 'd', text: '07/01/2001' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g7',
        question: '¿Qué actividad te gustaba hacer durante tu infancia?',
        options: [
            { id: 'a', text: 'Practicar voleibol' },
            { id: 'b', text: 'Bailar y nadar' },
            { id: 'c', text: 'Leer libros' },
            { id: 'd', text: 'Dibujar' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'g8',
        question: '¿Con qué jugabas cuando eras pequeña?',
        options: [
            { id: 'a', text: 'Barbies y muñecas' },
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
        correctOptionId: 'b',
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
        correctOptionId: 'b',
    },
    {
        id: 'g11',
        question: '¿Qué evento o situación te marcó más durante la carrera?',
        options: [
            { id: 'a', text: 'Primera guardia fue una experiencia muy enriquecedora' },
            { id: 'b', text: 'Primer paciente que atendí fue una experiencia muy enriquecedora' },
            { id: 'c', text: 'Nuestro viaje a Bejuma fue una experiencia maravillosa' },
            { id: 'd', text: 'Defensa de tesis fue una experiencia maravillosa' },
        ],
        correctOptionId: 'c',
    },
    {
        id: 'g12',
        question: '¿Cuáles son tus hobbies?',
        options: [
            { id: 'a', text: 'Cocinar y salir con mis amigas' },
            { id: 'b', text: 'Ver series y escuchar música' },
            { id: 'c', text: 'Bailar, salir con mis amigas, ir al cine' },
            { id: 'd', text: 'Leer y viajar y bailar' },
        ],
        correctOptionId: 'c',
    },
    {
        id: 'g13',
        question: '¿Cuál fue la última prueba académica antes de la graduación?',
        options: [
            { id: 'a', text: 'Examen final de 6to año' },
            { id: 'b', text: 'Defensa de tesis' },
            { id: 'c', text: 'Nuestra presentación de la ruralita' },
            { id: 'd', text: 'Práctica clínica final' },
        ],
        correctOptionId: 'c',
    },
    {
        id: 'g14',
        question: '¿Te quieres especializar? ¿En qué?',
        options: [
            { id: 'a', text: 'Medicina Interna' },
            { id: 'b', text: 'Traumatología' },
            { id: 'c', text: 'Cardiología' },
            { id: 'd', text: 'Cirugía' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'g15',
        question: '¿Cuál es o son tus profesores favoritos?',
        options: [            
            { id: 'a', text: 'Dra. Elsa Lara y Dr. Juan Herde' },
            { id: 'b', text: 'Dr. Riera y Dra. Bianney Ojeda' },
            { id: 'c', text: 'Dra. Cristina Royero y Dr. Juan Domínguez' },
            { id: 'd', text: 'Dr. Juan Herde, Dr. Riera' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'g16',
        question: '¿Cómo te ves en 5 años?',
        options: [
            { id: 'a', text: 'Siendo especialista en Traumatología' },
            { id: 'b', text: 'Viajando y haciendo investigación en el area de Medicina Interna' },
            { id: 'c', text: 'Teniendo mi propia clínica y siendo especialista en Medicina Interna' },
            { id: 'd', text: 'Enseñando en la universidad como especialista en Cardiología' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g17',
        question: 'Al final de una guardia yo normalmente haría o quisiera…',
        options: [
            { id: 'a', text: 'Dormir y nada más' },
            { id: 'b', text: 'Comer algo rico' },
            { id: 'c', text: 'Ir al gym' },
            { id: 'd', text: 'Ver una serie o película' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g18',
        question: 'Mi comida favorita es…',
        options: [
            { id: 'a', text: 'Pollo frito con papas fritas y pasticho' },
            { id: 'b', text: 'Pizza y hamburguesa' },
            { id: 'c', text: 'Sushi y perros calientes' },
            { id: 'd', text: 'Pasticho y sushi' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g19',
        question: 'Mi postre favorito es…',
        options: [
            { id: 'a', text: 'Torta de chocolate' },
            { id: 'b', text: 'Pie de parchita' },
            { id: 'c', text: 'Pie de Limón' },
            { id: 'd', text: 'Brownie' },
        ],
        correctOptionId: 'c',
    },
];

export const hecmaryTimeline: TimelineEvent[] = [
    {
        id: 'hecmary-childhood',
        year: 'Infancia',
        title: 'Los primeros años',
        description: 'Recuerdos de la infancia de la futura Doctora Hecmary.',
        images: getImagesForStage('childhood'),
    },
    {
        id: 'hecmary-adolescence',
        year: 'Adolescencia',
        title: 'Creciendo y soñando',
        description: 'Años de adolescencia, formando su personalidad y definiendo su vocación hacia la medicina.',
        images: getImagesForStage('adolescence'),
    },
    {
        id: 'hecmary-year1',
        year: '1er año de Medicina',
        title: 'El inicio del sueño',
        description: 'Primer año como estudiante de Medicina en la Universidad de Carabobo.',
        images: getImagesForStage('university', 1),
    },
    {
        id: 'hecmary-year2',
        year: '2do año de Medicina',
        title: 'Profundizando conocimientos',
        description: 'Segundo año de la carrera, aprendiendo las bases de la medicina.',
        images: getImagesForStage('university', 2),
    },
    {
        id: 'hecmary-year3',
        year: '3er año de Medicina',
        title: 'Avanzando en el camino',
        description: 'Tercer año, consolidando conocimientos y preparándose para la práctica clínica.',
        images: getImagesForStage('university', 3),
    },
    {
        id: 'hecmary-year4',
        year: '4to año de Medicina',
        title: 'Primeras experiencias clínicas',
        description: 'Cuarto año, comenzando las guardias y la práctica clínica en la CHET.',
        images: getImagesForStage('university', 4),
    },
    {
        id: 'hecmary-year5',
        year: '5to año de Medicina',
        title: 'Consolidando la práctica',
        description: 'Quinto año, participando en congresos y desarrollando habilidades clínicas.',
        images: getImagesForStage('university', 5),
    },
    {
        id: 'hecmary-year6',
        year: '6to año de Medicina',
        title: 'El último año',
        description: 'Sexto y último año, preparándose para la graduación y el futuro profesional.',
        images: getImagesForStage('university', 6),
    },
];

export const hecmaryData: StudentData = {
    messages: hecmaryMessages,
    predictions: hecmaryPredictions,
    questions: hecmaryQuestions,
    timeline: hecmaryTimeline,
};


import { type StudentData } from './index';
import { type Message, type Prediction } from '../gradMessages';
import { type QuizQuestion } from '../types';
import { type TimelineEvent, type TimelineImage } from '../types';

// Use import.meta.glob to get all images at build time
// Glenda's images are .jpg format
const glendaAllImagesJpg = import.meta.glob('../../assets/glenda/timeline/**/*.jpg', { 
    eager: true, 
    query: '?url',
    import: 'default'
}) as Record<string, string>;
const glendaAllImagesJpeg = import.meta.glob('../../assets/glenda/timeline/**/*.jpeg', { 
    eager: true, 
    query: '?url',
    import: 'default'
}) as Record<string, string>;

// Combine both .jpg and .jpeg images
const glendaAllImages = { ...glendaAllImagesJpg, ...glendaAllImagesJpeg };

// Helper function to get images for a specific stage
function getImagesForStage(stage: 'childhood' | 'adolescence' | 'university', year?: number): TimelineImage[] {
    const images: TimelineImage[] = [];
    const entries = Object.entries(glendaAllImages);
    
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
    
    // Sort by filename number (handles both .jpg and .jpeg)
    filtered.sort(([a], [b]) => {
        const getNum = (path: string) => {
            const match = path.match(/(\d+)\.(jpg|jpeg)$/);
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
        question: '¿En qué ciudad nació la Doctora Glenda?',
        options: [
            { id: 'a', text: 'Caracas' },
            { id: 'b', text: 'Valencia' },
            { id: 'c', text: 'Maracaibo' },
            { id: 'd', text: 'Barquisimeto' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'g2',
        question: '¿En qué año comenzó la Doctora Glenda la carrera de Medicina?',
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
        question: '¿Cuál materia fue el mayor reto de la Doctora Glenda durante la carrera?',
        options: [
            { id: 'a', text: 'Medicina Interna de 4to año' },
            { id: 'b', text: 'Anatomía en 1er año' },
            { id: 'c', text: 'Farmacología en 3er año' },
            { id: 'd', text: 'Fisiología en 2do año' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g4',
        question: '¿Cuál materia le gustaba más a la Doctora Glenda durante la carrera?',
        options: [
            { id: 'a', text: 'Medicina Interna' },
            { id: 'b', text: 'Cirugía' },
            { id: 'c', text: 'Pediatría' },
            { id: 'd', text: 'Fisiopatología' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'g5',
        question: '¿Qué es lo que más representa a Glenda como Doctora?',
        options: [
            { id: 'a', text: 'La empatía con los pacientes y las ganas de actualizarse con información médica' },
            { id: 'b', text: 'Su disciplina y constancia' },
            { id: 'c', text: 'Su excelencia académica' },
            { id: 'd', text: 'No sé' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'g6',
        question: '¿Cuál es la fecha de cumpleaños de la doctora Glenda?',
        options: [
            { id: 'a', text: '13/07/1999' },
            { id: 'b', text: '13/07/2000' },
            { id: 'c', text: '07/07/1999' },
            { id: 'd', text: '07/07/2000' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g7',
        question: '¿Qué actividad le gustaba hacer a la Doctora Glenda durante su infancia?',
        options: [
            { id: 'a', text: 'Jugar en Miranda' },
            { id: 'b', text: 'Jugar en Valencia' },
            { id: 'c', text: 'Leer libros en Miranda' },
            { id: 'd', text: 'Leer libros en Valencia' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g8',
        question: '¿Con qué jugaba la Doctora Glenda cuando era pequeña?',
        options: [
            { id: 'a', text: 'Barbie y juguetes de doctora' },
            { id: 'b', text: 'Con carritos de juguete y barbies' },
            { id: 'c', text: 'Con pelotas y muñecas' },
            { id: 'd', text: 'Con videojuegos de barbie' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g9',
        question: '¿En qué año de la carrera comenzó la Doctora Glenda a realizar las guardias?',
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
        question: '¿En qué año de la carrera la Doctora Glenda participó/asistió a congresos?',
        options: [
            { id: 'a', text: '3er año' },
            { id: 'b', text: '4to año' },
            { id: 'c', text: '5to año' },
            { id: 'd', text: '6to año' },
        ],
        correctOptionId: 'c',
    },
    {
        id: 'g11',
        question: '¿Qué evento o situación marcó más a la Doctora Glenda durante la carrera?',
        options: [
            { id: 'a', text: 'El día que me rasparon porque no me maquillé y cuando entraron armados al hospital.' },
            { id: 'b', text: 'La pandemia y adaptación a clases virtuales' },
            { id: 'c', text: 'Primer paciente que atendió sola y cuando entraron armados al hospital' },
            { id: 'd', text: 'La primera cirugía que realizó y cuando me quede dormida despues de la cirugía' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g12',
        question: '¿Cuáles son los hobbies de la Doctora Glenda?',
        options: [
            { id: 'a', text: 'Leer libros' },
            { id: 'b', text: 'Ver series y escuchar música' },
            { id: 'c', text: 'Crossfit y Bailar' },
            { id: 'd', text: 'Cocinar' },
        ],
        correctOptionId: 'c',
    },
    {
        id: 'g13',
        question: '¿Cuál fue la última prueba académica antes de la graduación de la Doctora Glenda?',
        options: [
            { id: 'a', text: 'Examen final de 6to año' },
            { id: 'b', text: 'Examen de la ruralita' },
            { id: 'c', text: 'Defensa de tesis' },
            { id: 'd', text: 'Práctica clínica final' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'g14',
        question: '¿En qué se quiere especializar la Doctora Glenda?',
        options: [
            { id: 'a', text: 'Cardiología o Dermatología' },
            { id: 'b', text: 'Cirugía Plástica o Pediatría' },
            { id: 'c', text: 'Medicina Interna o Cardiología' },
            { id: 'd', text: 'Ginecología o Traumatología' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g15',
        question: '¿Cuál es o son los profesores favoritos de la Doctora Glenda?',
        options: [
            { id: 'a', text: 'Dra. Elsa Lara y Dr. Juan Herde' },
            { id: 'b', text: 'Dra. Joselin Tamayo y Dr. Juan Herde' },
            { id: 'c', text: 'Dra. Elsa Lara y Dra. Joselin Tamayo' },
            { id: 'd', text: 'Dra. Elsa Lara, Dr. Juan Herde y Dra. Joselin Tamayo' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'g16',
        question: '¿Cómo se ve la Doctora Glenda en 5 años?',
        options: [
            { id: 'a', text: 'Estudiando aún' },
            { id: 'b', text: 'Completando su especialización' },
            { id: 'c', text: 'Teniendo su propia clínica' },
            { id: 'd', text: 'Enseñando en la universidad' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g17',
        question: 'Al final de una guardia la Doctora Glenda normalmente haría o quisiera…',
        options: [
            { id: 'a', text: 'Comer algo rico' },
            { id: 'b', text: 'Ir al gym' },
            { id: 'c', text: 'Dormir' },
            { id: 'd', text: 'Ver una serie o película' },
        ],
        correctOptionId: 'c',
    },
    {
        id: 'g18',
        question: 'La comida favorita de la Doctora Glenda es…',
        options: [
            { id: 'a', text: 'Pasta (cualquier tipo de pasta)' },
            { id: 'b', text: 'Pizza' },
            { id: 'c', text: 'Sushi' },
            { id: 'd', text: 'Comida marina (cualquiera)' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'g19',
        question: 'El postre favorito de la Doctora Glenda es…',
        options: [
            { id: 'a', text: 'Pie de limón y quesillo' },
            { id: 'b', text: 'Pie de parchita y tres leches' },
            { id: 'c', text: 'Torta de chocolate y brownie' },
            { id: 'd', text: 'Helado y fresas con crema' },
        ],
        correctOptionId: 'a',
    },
];

export const glendaTimeline: TimelineEvent[] = [
    {
        id: 'glenda-childhood',
        year: 'Infancia',
        title: 'Los primeros años',
        description: 'Recuerdos de la infancia de la futura Doctora Glenda.',
        images: getImagesForStage('childhood'),
    },
    {
        id: 'glenda-adolescence',
        year: 'Adolescencia',
        title: 'Creciendo y soñando',
        description: 'Años de adolescencia, formando su personalidad y definiendo su vocación hacia la medicina.',
        images: getImagesForStage('adolescence'),
    },
    {
        id: 'glenda-year1',
        year: '1er año de Medicina',
        title: 'El inicio del sueño',
        description: 'Primer año como estudiante de Medicina en la Universidad de Carabobo.',
        images: getImagesForStage('university', 1),
    },
    {
        id: 'glenda-year2',
        year: '2do año de Medicina',
        title: 'Profundizando conocimientos',
        description: 'Segundo año de la carrera, aprendiendo las bases de la medicina.',
        images: getImagesForStage('university', 2),
    },
    {
        id: 'glenda-year3',
        year: '3er año de Medicina',
        title: 'Avanzando en el camino',
        description: 'Tercer año, consolidando conocimientos y preparándose para la práctica clínica.\n\n\n\nNota: La Dra. Glenda no consiguió fotos de 3er año, ubíquenla en las fotos de las demás doctoras en su timeline en el 3er año.',
        images: getImagesForStage('university', 3),
    },
    {
        id: 'glenda-year4',
        year: '4to año de Medicina',
        title: 'Primeras experiencias clínicas',
        description: 'Cuarto año, comenzando las guardias y la práctica clínica en la CHET.',
        images: getImagesForStage('university', 4),
    },
    {
        id: 'glenda-year5',
        year: '5to año de Medicina',
        title: 'Consolidando la práctica',
        description: 'Quinto año, participando en congresos y desarrollando habilidades clínicas.',
        images: getImagesForStage('university', 5),
    },
    {
        id: 'glenda-year6',
        year: '6to año de Medicina',
        title: 'El último año',
        description: 'Sexto y último año, preparándose para la graduación y el futuro profesional.',
        images: getImagesForStage('university', 6),
    },
];

export const glendaData: StudentData = {
    messages: glendaMessages,
    predictions: glendaPredictions,
    questions: glendaQuestions,
    timeline: glendaTimeline,
};


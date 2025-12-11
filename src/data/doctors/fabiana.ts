import { type StudentData } from './index';
import { type Message, type Prediction } from '../gradMessages';
import { type QuizQuestion } from '../types';
import { type TimelineEvent, type TimelineImage } from '../types';

// Import all images using Vite's import.meta.glob
// Structure: childhood/1.jpeg, childhood/2.jpeg, etc.
//           adolescence/1.jpeg, adolescence/2.jpeg, etc.
//           university/1/1.jpeg, university/1/2.jpeg, etc.
// Use import.meta.glob to get all images at build time
const fabianaAllImages = import.meta.glob('../../assets/fabiana/timeline/**/*.jpeg', { 
    eager: true, 
    query: '?url',
    import: 'default'
}) as Record<string, string>;

// Helper function to get images for a specific stage
function getImagesForStage(stage: 'childhood' | 'adolescence' | 'university', year?: number): TimelineImage[] {
    const images: TimelineImage[] = [];
    const entries = Object.entries(fabianaAllImages);
    
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
        question: '¿En qué ciudad nació la doctora Fabiana?',
        options: [
            { id: 'a', text: 'Valencia' },
            { id: 'b', text: 'Caracas' },
            { id: 'c', text: 'Maracay' },
            { id: 'd', text: 'Barquisimeto' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g2',
        question: '¿En qué año comenzó la doctora Fabiana la carrera de Medicina?',
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
        question: '¿Cuál materia fue el mayor reto de la doctora Fabiana durante la carrera?',
        options: [
            { id: 'a', text: 'Anatomía' },
            { id: 'b', text: 'Fisiología' },
            { id: 'c', text: 'Farmacología' },
            { id: 'd', text: 'Patología' },
        ],
        correctOptionId: 'c',
    },
    {
        id: 'g4',
        question: '¿Cuál materia le gustaba más a la doctora Fabiana durante la carrera?',
        options: [
            { id: 'a', text: 'Anatomía' },
            { id: 'b', text: 'Bioquímica' },
            { id: 'c', text: 'Fisiología' },
            { id: 'd', text: 'Medicina Interna' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'g5',
        question: '¿Qué es lo que más representa a Fabiana como doctora?',
        options: [
            { id: 'a', text: 'Su disciplina' },
            { id: 'b', text: 'La empatía con el paciente' },
            { id: 'c', text: 'Su constancia para estudiar' },
            { id: 'd', text: 'Su dedicación' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'g6',
        question: '¿Cuál es la fecha de cumpleaños de la doctora Fabiana?',
        options: [
            { id: 'a', text: '26/06/1999' },
            { id: 'b', text: '26/06/2000' },
            { id: 'c', text: '06/06/1999' },
            { id: 'd', text: '06/06/2000' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'g7',
        question: '¿Qué actividad le gustaba hacer a la doctora Fabiana durante su infancia?',
        options: [
            { id: 'a', text: 'Jugar voley de playa' },
            { id: 'b', text: 'Jugar con su mascota' },
            { id: 'c', text: 'Salir a caminar' },
            { id: 'd', text: 'Dibujar' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g8',
        question: '¿Con qué jugaba la doctora Fabiana cuando era pequeña?',
        options: [
            { id: 'a', text: 'Barbies y muñecas' },
            { id: 'b', text: 'Con carritos de juguete' },
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
        question: '¿En qué año de la carrera la doctora Fabiana participó/asistió a congresos?',
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
        question: '¿Qué evento o situación marcó más a la doctora Fabiana durante la carrera?',
        options: [
            { id: 'a', text: 'Cuando una paciente con cancer volvió a recaer y sus familiares no querían que ella se enterara' },
            { id: 'b', text: 'La pandemia y adaptación a clases virtuales' },
            { id: 'c', text: 'Cuando la doctora Fabiana realizó su primera guardia y llego un paciente con un problema de respiración' },
            { id: 'd', text: 'Cuando la doctora Fabiana realizó su primera cirugía' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g12',
        question: '¿Cuáles son tus hobbies?',
        options: [
            { id: 'a', text: 'Cantar' },
            { id: 'b', text: 'Dibujar' },
            { id: 'c', text: 'Escuchar música' },
            { id: 'd', text: 'Bailar' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'g13',
        question: '¿Cuál fue la última prueba académica antes de la graduación?',
        options: [
            { id: 'a', text: 'El examen de la ruralita' },
            { id: 'b', text: 'Examen final de 6to año' },
            { id: 'c', text: 'Defensa de tesis' },
            { id: 'd', text: 'Práctica clínica final' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g14',
        question: '¿Te quieres especializar? ¿En qué?',
        options: [
            { id: 'a', text: 'Cardiología' },
            { id: 'b', text: 'Neurología' },
            { id: 'c', text: 'ORL' },
            { id: 'd', text: 'Pediatría' },
        ],
        correctOptionId: 'c',
    },
    {
        id: 'g15',
        question: '¿Cuál es o son los profesores favoritos de la doctora Fabiana?',
        options: [
            { id: 'a', text: 'Elsa Lara y Juan Herde' },
            { id: 'b', text: 'Joselic Tamayo' },
            { id: 'c', text: 'Juan Domínguez y Bianney Ojeda' },
            { id: 'd', text: 'Todos los anteriores' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'g16',
        question: '¿Cómo se ve la doctora Fabiana en 5 años?',
        options: [
            { id: 'a', text: 'Terminando la especialidad en ORL' },
            { id: 'b', text: 'Siendo una doctora especializada en Neurología' },
            { id: 'c', text: 'Teniendo mi propia clínica' },
            { id: 'd', text: 'Enseñando en la universidad' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g17',
        question: 'Al final de una guardia yo normalmente haría o quisiera…',
        options: [
            { id: 'a', text: 'Bañarme y luego dormirme' },
            { id: 'b', text: 'Tomar un cafe y comer algo rico' },
            { id: 'c', text: 'Comer algo rico' },
            { id: 'd', text: 'Dormir sin bañarme' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'g18',
        question: 'Mi comida favorita es…',
        options: [            
            { id: 'a', text: 'Pasta y pizza' },
            { id: 'b', text: 'Pizza y hamburguesa' },
            { id: 'c', text: 'Pasticho y sushi' },
            { id: 'd', text: 'Sushi y perro caliente' },
        ],
        correctOptionId: 'c',
    },
    {
        id: 'g19',
        question: 'Mi postre favorito es…',
        options: [
            { id: 'a', text: 'Helado' },
            { id: 'b', text: 'Torta de chocolate' },
            { id: 'c', text: 'Cheescake de oreo' },
            { id: 'd', text: 'Brownie' },
        ],
        correctOptionId: 'd',
    },
];

export const fabianaTimeline: TimelineEvent[] = [
    {
        id: 'fabiana-childhood',
        year: 'Infancia',
        title: 'Los primeros años',
        description: 'Recuerdos de la infancia de la futura Doctora Fabiana. Era muy cuchi, su mamá, tíos y abuelos la cuidaban mucho, siempre jugaba a cuidar a sus muñecos y le gustaba cantar en los viajes en el carro. Era muy creativa, le gustaba jugar sola y tenía ocurrencias muy curiosas, siempre se portaba muy bien y era muy inteligente.',
        images: getImagesForStage('childhood'),
    },
    {
        id: 'fabiana-adolescence',
        year: 'Adolescencia',
        title: 'Creciendo y soñando',
        description: 'Años de adolescencia, formando su personalidad y definiendo su vocación hacia la medicina.',
        images: getImagesForStage('adolescence'),
    },
    {
        id: 'fabiana-year1',
        year: '1er año de Medicina',
        title: 'El inicio del sueño',
        description: 'Primer año como estudiante de Medicina en la Universidad de Carabobo. Los primeros días de una gran aventura.',
        images: getImagesForStage('university', 1),
    },
    {
        id: 'fabiana-year2',
        year: '2do año de Medicina',
        title: 'Adaptándose a nuevos desafíos',
        description: 'Segundo año de Medicina en medio de la pandemia, adaptándose a la nueva realidad y continuando con dedicación.',
        images: getImagesForStage('university', 2),
    },
    {
        id: 'fabiana-year3',
        year: '3er año de Medicina',
        title: 'Volviendo a la normalidad',
        description: 'Tercer año, volviendo a la universidad y consolidando conocimientos. Todas esas noches de celebración después de exámenes.',
        images: getImagesForStage('university', 3),
    },
    {
        id: 'fabiana-year4',
        year: '4to año de Medicina',
        title: 'Primeras experiencias clínicas',
        description: 'Cuarto año, comenzando las guardias y la práctica clínica en la Ciudad Hospitalaria Enrique Tejera, conociendo a nuevos compañeros y profesores.',
        images: getImagesForStage('university', 4),
    },
    {
        id: 'fabiana-year5',
        year: '5to año de Medicina',
        title: 'Consolidando la práctica',
        description: 'Quinto año, participando en congresos y desarrollando habilidades clínicas. Siguen las guardias y ahora los congresos.',
        images: getImagesForStage('university', 5),
    },
    {
        id: 'fabiana-year6',
        year: '6to año de Medicina',
        title: 'El último año',
        description: 'Sexto y último año, preparándose para la graduación. Defensa de tesis, fotos oficiales, caravana, marcha triunfal y el acto de grado.',
        images: getImagesForStage('university', 6),
    },
];

export const fabianaData: StudentData = {
    messages: fabianaMessages,
    predictions: fabianaPredictions,
    questions: fabianaQuestions,
    timeline: fabianaTimeline,
};


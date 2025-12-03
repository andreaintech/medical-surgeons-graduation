export type TimelineEvent = {
    id: string;
    year: string;
    title: string;
    description: string;
    imageUrl: string;
};

export const gradTimeline: TimelineEvent[] = [
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
    // ...
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

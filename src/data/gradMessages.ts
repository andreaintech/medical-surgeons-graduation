export type Message = {
    id: string;
    from: string;
    role: string;
    text: string;
};

export type Prediction = {
    id: string;
    from: string;
    text: string;
};

export const initialMessages: Message[] = [
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

export const initialPredictions: Prediction[] = [
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

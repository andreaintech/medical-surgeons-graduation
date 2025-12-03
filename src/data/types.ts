export type QuizOption = {
    id: string;
    text: string;
};

export type QuizQuestion = {
    id: string;
    question: string;
    options: QuizOption[];
    correctOptionId: string;
};

export type TimelineEvent = {
    id: string;
    year: string;
    title: string;
    description: string;
    imageUrl?: string; // Deprecated: use imageUrls instead
    imageUrls?: string[]; // Array of image URLs for carousel
};


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

export type TimelineImage = {
    url: string;
    description?: string | null; // Optional description for the image
};

export type TimelineEvent = {
    id: string;
    year: string;
    title: string;
    description: string;
    imageUrl?: string; // Deprecated: use imageUrls or images instead
    imageUrls?: string[]; // Deprecated: use images instead
    images?: TimelineImage[]; // Array of images with optional descriptions
};


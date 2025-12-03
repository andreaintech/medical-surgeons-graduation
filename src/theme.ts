// Theme configuration for each graduating student
export type Student = 'fabiana' | 'hecmary' | 'glenda' | 'irainer' | 'emily' | 'josmar';

export interface StudentTheme {
    name: string;
    messages: string;
    emoji: string;
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary: string;
    secondaryLight: string;
    secondaryDark: string;
    gradientPrimary: string;
    gradientSecondary: string;
    gradientMixed: string;
    gradientSoft: string;
}

export const studentThemes: Record<Student, StudentTheme> = {
    fabiana: {
        name: 'Fabiana',
        messages: 'Mensajes para la doctora Fabiana',
        emoji: '💜',
        primary: '#9333ea', // purple-500
        primaryLight: '#c084fc', // purple-300
        primaryDark: '#7e22ce', // purple-600
        secondary: '#eab308', // yellow-500
        secondaryLight: '#fde047', // yellow-300
        secondaryDark: '#ca8a04', // yellow-600
        gradientPrimary: 'linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)',
        gradientSecondary: 'linear-gradient(135deg, #fde047 0%, #eab308 100%)',
        gradientMixed: 'linear-gradient(135deg, #a855f7 0%, #facc15 100%)',
        gradientSoft: 'linear-gradient(135deg, #e9d5ff 0%, #fef9c3 100%)',
    },
    hecmary: {
        name: 'Hecmary',
        messages: 'Mensajes para la doctora Hecmary',
        emoji: '💙',
        primary: '#3b82f6', // blue-500
        primaryLight: '#93c5fd', // blue-300
        primaryDark: '#2563eb', // blue-600
        secondary: '#eab308', // yellow-500
        secondaryLight: '#fde047', // yellow-300
        secondaryDark: '#ca8a04', // yellow-600
        gradientPrimary: 'linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)',
        gradientSecondary: 'linear-gradient(135deg, #fde047 0%, #eab308 100%)',
        gradientMixed: 'linear-gradient(135deg, #60a5fa 0%, #facc15 100%)',
        gradientSoft: 'linear-gradient(135deg, #dbeafe 0%, #fef9c3 100%)',
    },
    glenda: {
        name: 'Glenda',
        messages: 'Mensajes para la doctora Glenda',
        emoji: '💗',
        primary: '#ec4899', // pink-500
        primaryLight: '#f9a8d4', // pink-300
        primaryDark: '#db2777', // pink-600
        secondary: '#eab308', // yellow-500
        secondaryLight: '#fde047', // yellow-300
        secondaryDark: '#ca8a04', // yellow-600
        gradientPrimary: 'linear-gradient(135deg, #f472b6 0%, #db2777 100%)',
        gradientSecondary: 'linear-gradient(135deg, #fde047 0%, #eab308 100%)',
        gradientMixed: 'linear-gradient(135deg, #f472b6 0%, #facc15 100%)',
        gradientSoft: 'linear-gradient(135deg, #fce7f3 0%, #fef9c3 100%)',
    },
    irainer: {
        name: 'Irainer',
        messages: 'Mensajes para la doctora Irainer',
        emoji: '❤️',
        primary: '#ef4444', // red-500
        primaryLight: '#fca5a5', // red-300
        primaryDark: '#dc2626', // red-600
        secondary: '#eab308', // yellow-500
        secondaryLight: '#fde047', // yellow-300
        secondaryDark: '#ca8a04', // yellow-600
        gradientPrimary: 'linear-gradient(135deg, #f87171 0%, #dc2626 100%)',
        gradientSecondary: 'linear-gradient(135deg, #fde047 0%, #eab308 100%)',
        gradientMixed: 'linear-gradient(135deg, #f87171 0%, #facc15 100%)',
        gradientSoft: 'linear-gradient(135deg, #fee2e2 0%, #fef9c3 100%)',
    },
    emily: {
        name: 'Emily',
        messages: 'Mensajes para la doctora Emily',
        emoji: '🧡',
        primary: '#f97316', // orange-500
        primaryLight: '#fdba74', // orange-300
        primaryDark: '#ea580c', // orange-600
        secondary: '#eab308', // yellow-500
        secondaryLight: '#fde047', // yellow-300
        secondaryDark: '#ca8a04', // yellow-600
        gradientPrimary: 'linear-gradient(135deg, #fb923c 0%, #ea580c 100%)',
        gradientSecondary: 'linear-gradient(135deg, #fde047 0%, #eab308 100%)',
        gradientMixed: 'linear-gradient(135deg, #fb923c 0%, #facc15 100%)',
        gradientSoft: 'linear-gradient(135deg, #ffedd5 0%, #fef9c3 100%)',
    },
    josmar: {
        name: 'Josmar',
        messages: 'Mensajes para el doctor Josmar',
        emoji: '💚',
        primary: '#22c55e', // green-500
        primaryLight: '#86efac', // green-300
        primaryDark: '#16a34a', // green-600
        secondary: '#eab308', // yellow-500
        secondaryLight: '#fde047', // yellow-300
        secondaryDark: '#ca8a04', // yellow-600
        gradientPrimary: 'linear-gradient(135deg, #4ade80 0%, #16a34a 100%)',
        gradientSecondary: 'linear-gradient(135deg, #fde047 0%, #eab308 100%)',
        gradientMixed: 'linear-gradient(135deg, #4ade80 0%, #facc15 100%)',
        gradientSoft: 'linear-gradient(135deg, #dcfce7 0%, #fef9c3 100%)',
    },
};


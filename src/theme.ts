// Theme configuration for each graduating student
export type Student = 'fabiana' | 'hecmary' | 'glenda' | 'irainer' | 'emily'; // | 'josmar';

export interface StudentTheme {
    name: string;
    title: string;
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
        name: 'Dra. Fabiana',
        title: 'la Doctora',
        emoji: '👩🏽‍⚕',
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
        name: 'Dra. Hecmary',
        title: 'la Doctora',
        emoji: '👩🏽‍⚕',
        primary: '#9ca3af', // silver-400
        primaryLight: '#ffffff', // white
        primaryDark: '#6b7280', // gray-500
        secondary: '#eab308', // yellow-500
        secondaryLight: '#fde047', // yellow-300
        secondaryDark: '#ca8a04', // yellow-600
        gradientPrimary: 'linear-gradient(135deg, #ffffff 0%, #d1d5db 100%)',
        gradientSecondary: 'linear-gradient(135deg, #fde047 0%, #eab308 100%)',
        gradientMixed: 'linear-gradient(135deg, #ffffff 0%, #9ca3af 100%)',
        gradientSoft: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
    },
    glenda: {
        name: 'Dra. Glenda',
        title: 'la Doctora',
        emoji: '👩🏻‍⚕',
        primary: '#7c3aed', // violet-600 (deeper purple)
        primaryLight: '#a78bfa', // violet-400
        primaryDark: '#6d28d9', // violet-700
        secondary: '#eab308', // yellow-500
        secondaryLight: '#fde047', // yellow-300
        secondaryDark: '#ca8a04', // yellow-600
        gradientPrimary: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
        gradientSecondary: 'linear-gradient(135deg, #fde047 0%, #eab308 100%)',
        gradientMixed: 'linear-gradient(135deg, #8b5cf6 0%, #facc15 100%)',
        gradientSoft: 'linear-gradient(135deg, #ede9fe 0%, #fef9c3 100%)',
    },
    irainer: {
        name: 'Dra. Irainer',
        title: 'la Doctora',
        emoji: '👩🏻‍⚕',
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
        name: 'Dra. Emily',
        title: 'la Doctora',
        emoji: '👩🏽‍⚕',
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
    // josmar: {
    //     name: 'Dr. Josmar',
    //     title: 'el Doctor',
    //     emoji: '👨🏻‍⚕',
    //     primary: '#22c55e', // green-500
    //     primaryLight: '#86efac', // green-300
    //     primaryDark: '#16a34a', // green-600
    //     secondary: '#eab308', // yellow-500
    //     secondaryLight: '#fde047', // yellow-300
    //     secondaryDark: '#ca8a04', // yellow-600
    //     gradientPrimary: 'linear-gradient(135deg, #4ade80 0%, #16a34a 100%)',
    //     gradientSecondary: 'linear-gradient(135deg, #fde047 0%, #eab308 100%)',
    //     gradientMixed: 'linear-gradient(135deg, #4ade80 0%, #facc15 100%)',
    //     gradientSoft: 'linear-gradient(135deg, #dcfce7 0%, #fef9c3 100%)',
    // },
};


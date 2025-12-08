import { createContext, useState, useEffect, useMemo, type ReactNode } from 'react';
import { studentThemes, type Student, type StudentTheme } from '../theme';

interface StudentContextValue {
    activeStudent: Student | null;
    setActiveStudent: (student: Student | null) => void;
    theme: StudentTheme;
    name: string;
    title: string;
    emoji: string;
    isDoctor: boolean;
    graduationTitle: string;
}

const StudentContext = createContext<StudentContextValue | undefined>(undefined);

interface StudentProviderProps {
    readonly children: ReactNode;
    readonly initialStudent?: Student | null;
}

// Default theme for home page
const defaultTheme: StudentTheme = {
    name: 'Graduados',
    title: 'los Graduados',
    emoji: '🎓',
    primary: '#6366f1', // indigo-500
    primaryLight: '#a5b4fc', // indigo-300
    primaryDark: '#4f46e5', // indigo-600
    secondary: '#eab308', // yellow-500
    secondaryLight: '#fde047', // yellow-300
    secondaryDark: '#ca8a04', // yellow-600
    gradientPrimary: 'linear-gradient(135deg, #818cf8 0%, #4f46e5 100%)',
    gradientSecondary: 'linear-gradient(135deg, #fde047 0%, #eab308 100%)',
    gradientMixed: 'linear-gradient(135deg, #818cf8 0%, #facc15 100%)',
    gradientSoft: 'linear-gradient(135deg, #e0e7ff 0%, #fef9c3 100%)',
};

export function StudentProvider({ children, initialStudent = null }: StudentProviderProps) {
    const [activeStudent, setActiveStudent] = useState<Student | null>(initialStudent);
    const theme = activeStudent ? studentThemes[activeStudent] : defaultTheme;

    // Update CSS variables when student changes
    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--theme-primary', theme.primary);
        root.style.setProperty('--theme-primary-light', theme.primaryLight);
        root.style.setProperty('--theme-primary-dark', theme.primaryDark);
        root.style.setProperty('--theme-secondary', theme.secondary);
        root.style.setProperty('--theme-secondary-light', theme.secondaryLight);
        root.style.setProperty('--theme-secondary-dark', theme.secondaryDark);
        root.style.setProperty('--theme-gradient-primary', theme.gradientPrimary);
        root.style.setProperty('--theme-gradient-secondary', theme.gradientSecondary);
        root.style.setProperty('--theme-gradient-mixed', theme.gradientMixed);
        root.style.setProperty('--theme-gradient-soft', theme.gradientSoft);
    }, [theme]);

    const isDoctor = useMemo(() => activeStudent !== null, [activeStudent]);

    const graduationTitle = useMemo(() => {
        if (!activeStudent) {
            return '¡Feliz Graduación!';
        }
        return isDoctor
            ? `¡Feliz Graduación, Doctora ${theme.name}!`
            : `¡Feliz Graduación, Doctor ${theme.name}!`;
    }, [activeStudent, isDoctor, theme.name]);

    const value: StudentContextValue = useMemo(
        () => ({
            activeStudent,
            setActiveStudent,
            theme,
            name: theme.name,
            title: theme.title,
            emoji: theme.emoji,
            isDoctor,
            graduationTitle,
        }),
        [activeStudent, setActiveStudent, theme, isDoctor, graduationTitle]
    );

    return <StudentContext.Provider value={value}>{children}</StudentContext.Provider>;
}

// Export context for useStudent hook
export { StudentContext };


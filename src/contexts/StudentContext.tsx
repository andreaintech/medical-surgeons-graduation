import { createContext, useState, useEffect, useMemo, type ReactNode } from 'react';
import { studentThemes, type Student, type StudentTheme } from '../theme';

interface StudentContextValue {
    activeStudent: Student;
    setActiveStudent: (student: Student) => void;
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
    readonly initialStudent?: Student;
}

export function StudentProvider({ children, initialStudent = 'fabiana' }: StudentProviderProps) {
    const [activeStudent, setActiveStudent] = useState<Student>(initialStudent);
    const theme = studentThemes[activeStudent];

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

    const isDoctor = useMemo(() => activeStudent !== 'josmar', [activeStudent]);

    const graduationTitle = useMemo(() => {
        return isDoctor
            ? `¡Feliz Graduación, Doctora ${theme.name}!`
            : `¡Feliz Graduación, Doctor ${theme.name}!`;
    }, [isDoctor, theme.name]);

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


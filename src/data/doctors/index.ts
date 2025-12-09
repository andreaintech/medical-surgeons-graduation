import { type Message, type Prediction } from '../gradMessages';
import { type QuizQuestion } from '../types';
import { type TimelineEvent } from '../gradTimeline';
import type { Student } from '../../theme';
import { fabianaData } from './fabiana';
import { glendaData } from './glenda';
import { irainerData } from './irainer';
import { hecmaryData } from './hecmary';
import { emilyData } from './emily';

export interface StudentData {
    messages: Message[];
    predictions: Prediction[];
    questions: QuizQuestion[];
    timeline: TimelineEvent[];
}

export type StudentDataMap = Record<Student, StudentData>;

export const studentDataMap: StudentDataMap = {
    fabiana: fabianaData,
    glenda: glendaData,
    irainer: irainerData,
    hecmary: hecmaryData,
    emily: emilyData,
};

const emptyStudentData: StudentData = {
    messages: [],
    predictions: [],
    questions: [],
    timeline: [],
};

export function getStudentData(student: Student | null): StudentData {
    if (student === null) {
        return emptyStudentData;
    }
    return studentDataMap[student];
}


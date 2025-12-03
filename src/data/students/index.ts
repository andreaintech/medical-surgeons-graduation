import { type Message, type Prediction } from '../gradMessages';
import { type QuizQuestion } from '../types';
import { type TimelineEvent } from '../gradTimeline';
import type { Student } from '../../theme';
import { fabianaData } from './fabiana';
import { glendaData } from './glenda';
import { irainerData } from './irainer';
import { hecmaryData } from './hecmary';
import { emilyData } from './emily';
import { josmarData } from './josmar';

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
    josmar: josmarData,
};

export function getStudentData(student: Student): StudentData {
    return studentDataMap[student];
}


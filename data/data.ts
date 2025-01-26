import type { Subject } from "@/types/types";
import python from "./python.json";
import sql from "./sql.json";
export const allSubjects: Subject[] = [python, sql] as Subject[];

export const getSubjectById = (id: number): Subject | undefined => {
	return allSubjects.find((subject) => subject.id === id);
};
export const getExamById = (subjectId: number, examId: number) => {
	const subject = getSubjectById(subjectId);
	return subject?.exams.find((exam) => exam.id === examId);
};
export const getQuestionById = (
	subjectId: number,
	examId: number,
	questionId: number,
) => {
	const exam = getExamById(subjectId, examId);
	return exam?.questions.find((question) => question.id === questionId);
};

export const getSubjectExams = (subjectId: number) => {
	const subject = getSubjectById(subjectId);
	return subject?.exams;
};



export type Question = {
	id: number;
	question: string;
	options: string[];
	correctAnswer: string;
};

export type Exam = {
	id: number;
	name: string;
	questions: Question[];
};

export type Subject = {
	id: number;
	name: string;
	description: string;
	exams: Exam[];
};

export type RootStackParamList = {
	Explore: undefined;
	Exams: { subject: Subject };
	Quiz: { exam: Exam };
};

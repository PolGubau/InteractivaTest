import type { Exam, RootStackParamList } from "@/types/types";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
type ExploreScreenProps = BottomTabScreenProps<RootStackParamList, "Quiz">;

const QuizScreen = ({ route }: ExploreScreenProps) => {
	const { exam } = route.params as { exam: Exam };
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);

	const handleAnswer = (selectedAnswer: string) => {
		if (selectedAnswer === exam.questions[currentQuestion].correctAnswer) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < exam.questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	if (showScore) {
		return (
			<View style={styles.container}>
				<Text style={styles.scoreText}>
					Tu puntuación: {score} / {exam.questions.length}
				</Text>
				<Button
					title="Reiniciar"
					onPress={() => {
						setCurrentQuestion(0);
						setScore(0);
						setShowScore(false);
					}}
				/>
			</View>
		);
	}

	const currentQ = exam.questions[currentQuestion];

	return (
		<View style={styles.container}>
			<Text style={styles.questionText}>{currentQ.question}</Text>
			{currentQ.options.map((option, index) => (
				<Button
					key={index}
					title={option}
					onPress={() => handleAnswer(option)}
				/>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
	},
	questionText: {
		fontSize: 20,
		marginBottom: 20,
	},
	scoreText: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
});

export default QuizScreen;

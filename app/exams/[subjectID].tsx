import { getSubjectById } from "@/data/data";
import type { Exam } from "@/types/types";
import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

// Define las props de ExamsScreen

const SubjectScreen = () => {
	const { subjectID } = useLocalSearchParams();
	if (!subjectID || typeof subjectID !== "string") {
		return null;
	}

	const subject = getSubjectById(Number.parseInt(subjectID));
	if (!subject) {
		return null;
	}

	const renderExam = ({ item }: { item: Exam }) => (
		<Link
			style={styles.examCard}
			href={{
				pathname: "/exams/exam/[examID]",
				params: { examID: item.id.toString() },
			}}
		>
			<Text style={styles.examName}>{item.name}</Text>
		</Link>
	);

	return (
		<View style={styles.container}>
			<Text style={styles.subjectName}>{subject.name}</Text>
			<FlatList
				data={subject.exams}
				renderItem={renderExam}
				keyExtractor={(item) => item.id.toString()}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	subjectName: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	examCard: {
		backgroundColor: "#f9f9f9",
		padding: 15,
		borderRadius: 10,
		marginBottom: 10,
	},
	examName: {
		fontSize: 16,
	},
});

export default SubjectScreen;

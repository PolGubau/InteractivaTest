import type { Exam, RootStackParamList } from "@/types/types";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React from "react";
import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

// Define las props de ExamsScreen
type ExamsScreenProps = BottomTabScreenProps<RootStackParamList, "Exams">;

const ExamsScreen = ({ route, navigation }: ExamsScreenProps) => {
	const { subject } = route.params; // TypeScript sabe que `subject` es de tipo `Subject`

	const renderExam = ({ item }: { item: Exam }) => (
		<TouchableOpacity
			style={styles.examCard}
			onPress={() => navigation.navigate("Quiz", { exam: item })}
		>
			<Text style={styles.examName}>{item.name}</Text>
		</TouchableOpacity>
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

export default ExamsScreen;

import type { Subject } from "@/types/types";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type SubjectCardProps = {
	subject: Subject;
	onPress: () => void;
};

const SubjectCard = ({ subject, onPress }: SubjectCardProps) => {
	return (
		<TouchableOpacity style={styles.card} onPress={onPress}>
			<Text style={styles.name}>{subject.name}</Text>
			<Text style={styles.description}>{subject.description}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: "#f9f9f9",
		padding: 15,
		borderRadius: 10,
		marginBottom: 10,
	},
	name: {
		fontSize: 18,
		fontWeight: "bold",
	},
	description: {
		fontSize: 14,
		color: "#666",
	},
});

export default SubjectCard;

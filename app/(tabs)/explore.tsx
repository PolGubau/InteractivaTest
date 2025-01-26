import type { RootStackParamList, Subject } from "@/types/types";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React from "react";
import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from "react-native";
import pythonData from "../../data/python.json";
import sqlData from "../../data/sql.json";
const subjects = [pythonData, sqlData] as Subject[];
type ExploreScreenProps = BottomTabScreenProps<RootStackParamList, "Explore">;

export const ExploreScreen = ({ navigation }: ExploreScreenProps) => {
	const renderSubject = ({ item }: { item: Subject }) => (
		<TouchableOpacity
			style={styles.subjectCard}
			onPress={() => navigation.navigate("Exams", { subject: item })}
		>
			<Text style={styles.subjectName}>{item.name}</Text>
			<Text style={styles.subjectDescription}>{item.description}</Text>
		</TouchableOpacity>
	);
	// return (
	// 	<ParallaxScrollView
	// 		headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
	// 		headerImage={
	// 			<IconSymbol
	// 				size={310}
	// 				color="#808080"
	// 				name="chevron.left.forwardslash.chevron.right"
	// 				style={styles.headerImage}
	// 			/>
	// 		}
	// 	>
	// 		<ThemedView style={styles.titleContainer}>
	// 			<ThemedText type="title">Explore</ThemedText>
	// 		</ThemedView>
	// 		<ThemedText>
	// 			This app includes example code to help you get started.
	// 		</ThemedText>
	// 		<Collapsible title="File-based routing">
	// 			<ThemedText>
	// 				This app has two screens:{" "}
	// 				<ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
	// 				and{" "}
	// 				<ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
	// 			</ThemedText>
	// 			<ThemedText>
	// 				The layout file in{" "}
	// 				<ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{" "}
	// 				sets up the tab navigator.
	// 			</ThemedText>
	// 			<ExternalLink href="https://docs.expo.dev/router/introduction">
	// 				<ThemedText type="link">Learn more</ThemedText>
	// 			</ExternalLink>
	// 		</Collapsible>
	// 		<Collapsible title="Android, iOS, and web support">
	// 			<ThemedText>
	// 				You can open this project on Android, iOS, and the web. To open the
	// 				web version, press <ThemedText type="defaultSemiBold">w</ThemedText>{" "}
	// 				in the terminal running this project.
	// 			</ThemedText>
	// 		</Collapsible>
	// 		<Collapsible title="Images">
	// 			<ThemedText>
	// 				For static images, you can use the{" "}
	// 				<ThemedText type="defaultSemiBold">@2x</ThemedText> and{" "}
	// 				<ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to
	// 				provide files for different screen densities
	// 			</ThemedText>
	// 			<Image
	// 				source={require("@/assets/images/react-logo.png")}
	// 				style={{ alignSelf: "center" }}
	// 			/>
	// 			<ExternalLink href="https://reactnative.dev/docs/images">
	// 				<ThemedText type="link">Learn more</ThemedText>
	// 			</ExternalLink>
	// 		</Collapsible>
	// 		<Collapsible title="Custom fonts">
	// 			<ThemedText>
	// 				Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText>{" "}
	// 				to see how to load{" "}
	// 				<ThemedText style={{ fontFamily: "SpaceMono" }}>
	// 					custom fonts such as this one.
	// 				</ThemedText>
	// 			</ThemedText>
	// 			<ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
	// 				<ThemedText type="link">Learn more</ThemedText>
	// 			</ExternalLink>
	// 		</Collapsible>
	// 		<Collapsible title="Light and dark mode components">
	// 			<ThemedText>
	// 				This template has light and dark mode support. The{" "}
	// 				<ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook
	// 				lets you inspect what the user's current color scheme is, and so you
	// 				can adjust UI colors accordingly.
	// 			</ThemedText>
	// 			<ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
	// 				<ThemedText type="link">Learn more</ThemedText>
	// 			</ExternalLink>
	// 		</Collapsible>
	// 		<Collapsible title="Animations">
	// 			<ThemedText>
	// 				This template includes an example of an animated component. The{" "}
	// 				<ThemedText type="defaultSemiBold">
	// 					components/HelloWave.tsx
	// 				</ThemedText>{" "}
	// 				component uses the powerful{" "}
	// 				<ThemedText type="defaultSemiBold">
	// 					react-native-reanimated
	// 				</ThemedText>{" "}
	// 				library to create a waving hand animation.
	// 			</ThemedText>
	// 			{Platform.select({
	// 				ios: (
	// 					<ThemedText>
	// 						The{" "}
	// 						<ThemedText type="defaultSemiBold">
	// 							components/ParallaxScrollView.tsx
	// 						</ThemedText>{" "}
	// 						component provides a parallax effect for the header image.
	// 					</ThemedText>
	// 				),
	// 			})}
	// 		</Collapsible>
	// 	</ParallaxScrollView>
	// );
	return (
		<View style={styles.container}>
			<FlatList
				data={subjects}
				renderItem={renderSubject}
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
	headerImage: {
		color: "#808080",
		bottom: -90,
		left: -35,
		position: "absolute",
	},
	titleContainer: {
		flexDirection: "row",
		gap: 8,
	},
	subjectCard: {
		backgroundColor: "#f9f9f9",
		padding: 15,
		borderRadius: 10,
		marginBottom: 10,
	},
	subjectName: {
		fontSize: 18,
		fontWeight: "bold",
	},
	subjectDescription: {
		fontSize: 14,
		color: "#666",
	},
});

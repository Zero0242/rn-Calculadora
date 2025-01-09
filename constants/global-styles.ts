import { StyleSheet } from "react-native";
import { Colors } from "./Colors";
export const globalStyles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: Colors.background,
	},
	calculatorContainer: {
		flex: 1,
		justifyContent: "flex-end",
		paddingBottom: 20,
	},
	mainResult: {
		color: Colors.textPrimary,
		fontSize: 70,
		textAlign: "right",
		fontWeight: "400",
	},
	subResult: {
		color: Colors.textSecondary,
		fontSize: 40,
		textAlign: "right",
		fontWeight: "300",
	},
	row: {
		flexDirection: "row",
		marginVertical: 3,
	},
	button: {
		height: 80,
		width: 80,
		marginHorizontal: 5,
		borderRadius: 100,
		justifyContent: "center",
	},
	buttonText: {
		textAlign: "center",
		padding: 10,
		fontSize: 25,
		color: Colors.textPrimary,
		fontWeight: "300",
		fontFamily: "SpaceMono",
	},
});

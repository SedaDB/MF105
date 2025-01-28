import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "blue", paddingTop: 50 },
  inlineContainer: { flex: 1, backgroundColor: "yellow" },
  image: { width: 200, height: 200 },
  title: { fontWeight: "bold", fontSize: 40, color: "red" },
  bottomContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  bottomText: { color: "white", fontSize: 30, fontWeight: "bold" },
});

export default styles;

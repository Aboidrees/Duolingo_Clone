import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 40,
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  mascot: {
    width: "25%",
    aspectRatio: 0.7,
    marginRight: 10,
  },
  sentenceContainer: {
    borderWidth: 2,
    borderColor: "lightgrey",
    borderRadius: 10,
    padding: 10,
  },
  sentence: {
    fontSize: 16,
  },
  textInput: {
    fontSize: 16,
    alignSelf: "stretch",
    borderWidth: 2,
    borderColor: "lightgrey",
    backgroundColor: "#ebebeb",
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
});
export default styles;

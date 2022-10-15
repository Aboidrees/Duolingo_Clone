import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    height: 70,
    alignSelf: "stretch",
    justifyContent: "flex-end",
  },
  button: {
    height: 50,
    backgroundColor: "#58CC02",
    paddingVertical: 10,

    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",

    //border
    borderRadius: 10,
    borderWidth: 2,
    borderBottomWidth: 5,
    borderColor: "#57A600",
  },
  disabledButton: {
    backgroundColor: "lightgray",
    borderColor: "#bebebe",
    borderBottomWidth: 2,
  },
  text: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
    borderColor: "white",
    borderBottomWidth: 1,
    textDecorationLine: "none",
  },
  disabledText: {
    color: "grey",
    textDecorationLine: "none",
  },
});

export default styles;

import { Text, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
  },
  close: {
    marginRight: 5,
  },
  heart: {
    height: 30,
    width: 30,
    marginHorizontal: 5,
  },
  lives: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
  },
});
export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgroundBar: {
    flex: 1,
    height: 20,
    backgroundColor: "lightgrey",
    borderRadius: 10,
  },
  foregroundBar: {
    flex: 1,
    backgroundColor: "#FAC800",
    borderRadius: 10,
  },
  highlight: {
    height: 5,
    backgroundColor: "#FAD131",
    width: "90%",
    borderRadius: 5,
    marginTop: 5,
    alignSelf: "center",
  },
});
export default styles;

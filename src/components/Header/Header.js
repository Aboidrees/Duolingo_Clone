import React from "react";
import { Image, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import heart from "../../../assets/images/heart.png";
import ProgressBar from "../ProgressBar";
import styles from "./styles";

const Header = ({ progress, lives }) => {
  return (
    <View style={styles.root}>
      <AntDesign name="close" size={30} color="lightgrey" style={styles.close} />
      <ProgressBar progress={progress} />
      <Image source={heart} style={styles.heart} resizeMode="contain" />
      <Text style={styles.lives}>{lives || 0}</Text>
    </View>
  );
};
export default Header;

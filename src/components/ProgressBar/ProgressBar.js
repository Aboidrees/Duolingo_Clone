import React from "react";
import { View } from "react-native";
import styles from "./styles";

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.backgroundBar}>
      <View style={[styles.foregroundBar, { width: `${progress * 100}%` }]}>
        <View style={styles.highlight}></View>
      </View>
    </View>
  );
};

export default ProgressBar;

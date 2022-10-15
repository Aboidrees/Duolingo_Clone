import { PropTypes } from "prop-types";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";

const Button = ({ text, onPress, disabled }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        onPressIn={(event) => setPressed(true)}
        onPressOut={(event) => setPressed(false)}
        style={[
          styles.button,
          disabled ? styles.disabledButton : {},
          pressed ? { borderWidth: 2, borderBottomWidth: 2, height: 45 } : {},
        ]}
        disabled={disabled}
      >
        <Text style={[styles.text, disabled ? styles.disabledText : {}]}>{text}</Text>
      </Pressable>
    </View>
  );
};

Button.propsTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  onPress: () => {},
  disabled: false,
};

export default Button;

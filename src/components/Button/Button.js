import { PropTypes } from "prop-types";
import { Pressable, Text } from "react-native";
import styles from "./styles";

const Button = ({ text, onPress, disabled }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, disabled ? styles.disabledContainer : {}]}
      disabled={disabled}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
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

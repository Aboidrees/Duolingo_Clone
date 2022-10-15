import React, { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import styles from "./styles";
import mascot from "../../../assets/images/mascot.png";
import Button from "../Button";
const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {
  const [answer, setAnswer] = useState("");

  const onButtonPress = () => {
    if (question.answer.toLowerCase().trim() === answer.toLocaleLowerCase().trim()) {
      onCorrect();
    } else {
      onWrong();
    }
    setAnswer("");
  };

  return (
    <>
      <Text style={styles.title}>Translate this sentences</Text>
      <View style={styles.row}>
        {/* image */}
        <Image source={mascot} style={styles.mascot} resizeMode="contain" />
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question.text}</Text>
        </View>
        {/* Sentence Container*/}
      </View>
      <TextInput
        placeholder="Type in English"
        value={answer}
        onChangeText={setAnswer}
        style={styles.textInput}
        textAlignVertical="top"
        multiline
      />
      <Button text={"CHECK"} onPress={onButtonPress} disabled={!answer} />
    </>
  );
};

export default OpenEndedQuestion;

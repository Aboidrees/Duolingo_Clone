import React, { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";

import styles from "./App.styles";
import questions from "./assets/data/imageMultipleChoiceQuestions";
import ImageMultipleChoiceQuestions from "./src/components/ImageMultipleChoiceQuestion";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex]);

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("You Won!");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const onCorrect = () => setCurrentQuestionIndex((currentQuestionIndex) => currentQuestionIndex + 1);
  const onWrong = () => Alert.alert("Wrong Answer!");

  return (
    <View style={styles.root}>
      <ImageMultipleChoiceQuestions question={currentQuestion} onCorrect={onCorrect} onWrong={onWrong} />
    </View>
  );
};

export default App;

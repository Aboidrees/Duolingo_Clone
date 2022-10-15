import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Text, View } from "react-native";

import styles from "./App.styles";
import questions from "./assets/data/allQuestions";

import OpenEndedQuestion from "./src/components/OpenEndedQuestion";
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion";
import Header from "./src/components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex]);
  const [lives, setLives] = useState(5);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("You Won!");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (!hasLoaded) return;
    saveData();
  }, [lives, currentQuestionIndex, hasLoaded]);

  const onCorrect = () => setCurrentQuestionIndex((currentQuestionIndex) => currentQuestionIndex + 1);
  const restart = () => {
    setLives(5);
    setCurrentQuestionIndex(0);
  };

  const onWrong = () => {
    if (lives <= 1) {
      Alert.alert("Game Over!", "Try again", [
        {
          text: "Try Again",
          onPress: restart,
        },
      ]);
    } else {
      setLives((lives) => lives - 1);
      Alert.alert("Wrong Answer!");
    }
  };

  const saveData = async () => {
    await AsyncStorage.setItem("lives", lives.toString());
    await AsyncStorage.setItem("currentQuestionIndex", currentQuestionIndex.toString());
  };

  const loadData = async () => {
    const loadedLives = await AsyncStorage.getItem("lives");
    if (loadedLives) setLives(parseInt(loadedLives));

    const loadedCurrentQuestionIndex = await AsyncStorage.getItem("currentQuestionIndex");
    if (loadedCurrentQuestionIndex) setCurrentQuestionIndex(parseInt(loadedCurrentQuestionIndex));

    setHasLoaded(true);
  };

  if (!hasLoaded) return <ActivityIndicator />;

  return (
    <View style={styles.root}>
      <Text style={styles.comments}>5 In ROW</Text>

      <Header progress={currentQuestionIndex / questions.length} lives={lives} />

      {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" && (
        <ImageMultipleChoiceQuestion question={currentQuestion} onCorrect={onCorrect} onWrong={onWrong} />
      )}
      {currentQuestion.type === "OPEN_ENDED" && (
        <OpenEndedQuestion question={currentQuestion} onCorrect={onCorrect} onWrong={onWrong} />
      )}
      {currentQuestion.type === "FILL_IN_THE_BLANK"}
    </View>
  );
};

export default App;

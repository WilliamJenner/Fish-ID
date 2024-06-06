import { Fish } from "@/constants/Fish";
import useRandomFish from "@/hooks/useFishQuestions";
import { getWikipediaLink } from "@/utils/url";
import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { ExternalLink } from "./ExternalLink";
import { ThemedText } from "./ThemedText";

interface IFishQuestionProps {
  fishes: Array<Fish>;
}

const { width, height } = Dimensions.get("window");

export default function FishQuestion(props: IFishQuestionProps) {
  const { questions: fishQuestions, refreshQuestions } = useRandomFish({
    fishes: props.fishes,
  });
  const [answerMessage, setAnswerMessage] = React.useState<string>();

  const onFishPress = (answer: Fish) => {
    if (answer.id == fishQuestions.answer.id) {
      // correct answer
      setAnswerMessage(`Correct! It is a ${answer.name}`);
    } else {
      // incorrect answer
      setAnswerMessage("Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <ThemedText style={{ fontSize: 24 }}>
          What{" "}
          <ExternalLink
            style={{ textDecorationLine: "underline" }}
            href={getWikipediaLink(fishQuestions.answer.wikipedia)}
          >
            fish
          </ExternalLink>{" "}
          is this?
        </ThemedText>
      </View>

      <View style={styles.questionContainer}>
        <Image
          source={fishQuestions.answer.source}
          style={styles.questionImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.answersContainer}>
        <FlatList
          data={fishQuestions.questions}
          numColumns={2}
          renderItem={({ item: f }) => {
            return (
              <Pressable
                onPress={() => {
                  onFishPress(f);
                }}
                key={f.id}
                style={(pressed) =>
                  pressed.pressed
                    ? styles.answerButtonPressed
                    : styles.answerButton
                }
              >
                <ThemedText>{f.name}</ThemedText>
              </Pressable>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.answerMessage}>
        {answerMessage && <ThemedText>{answerMessage}</ThemedText>}
      </View>

      <View style={styles.nextButtonContainer}>
        <Pressable
          onPress={() => {
            refreshQuestions();
            setAnswerMessage(undefined);
          }}
          style={(pressed) =>
            pressed.pressed ? styles.answerButtonPressed : styles.answerButton
          }
        >
          <ThemedText>Next</ThemedText>
        </Pressable>
      </View>
    </View>
  );
}

const buttonStyle = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: "blue",
    margin: 2,
    padding: 2,
    flex: 1,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 10,
    alignItems: "center",
    flexDirection: "column",
  },
  answersContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  answerButton: {
    ...buttonStyle.button,
  },
  answerButtonPressed: {
    ...buttonStyle.button,
    opacity: 0.8,
    backgroundColor: "red",
  },
  answerMessage: {
    flex: 1,
  },
  questionContainer: {
    flex: 2,
    flexGrow: 1,
  },
  questionImage: {
    maxHeight: height / 2,
    maxWidth: width,
  },
  nextButtonContainer: {
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});

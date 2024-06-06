import { Fish } from "@/constants/Fish";
import { getNRandomNumbers, getRandomInt } from "@/utils/random";
import React from "react";

type FishQuestions = {
  questions: Array<Fish>;
  answer: Fish;
};

interface IuseFishQuestionsParams {
  fishes: Array<Fish>;
}

interface IuseFishQuestions {
  questions: FishQuestions;
  refreshQuestions: VoidFunction;
}

const useFishQuestions = (
  props: IuseFishQuestionsParams
): IuseFishQuestions => {
  const getQuestions = (): FishQuestions => {
    const indexes = getNRandomNumbers(4, props.fishes.length);
    const fishes = props.fishes.filter((f, index) => indexes.includes(index));
    return {
      questions: fishes,
      answer: fishes[getRandomInt(fishes.length)],
    };
  };

  const [questions, setQuestions] = React.useState<FishQuestions>(
    getQuestions()
  );

  const refreshQuestions = () => {
    setQuestions(getQuestions());
  };

  return {
    questions,
    refreshQuestions,
  };
};

export default useFishQuestions;

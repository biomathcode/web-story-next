import { useState } from "react";

type InfoQuizType = {
  question: string;
  options: string[];
  correct: string[];
};

function InfoQuiz({ question, options, correct }: InfoQuizType) {
  const [selected, setSelected] = useState([]);
  const type = correct.length === 1 ? "Single Correct" : "Multiple Correct";
  return (
    <div>
      <h3></h3>
      <div>{/* selectable options */}</div>
    </div>
  );
}

export default InfoQuiz;

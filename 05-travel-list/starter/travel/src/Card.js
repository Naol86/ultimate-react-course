import "./Card.css";
import { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

export default function Card() {
  return (
    <div>
      <Questions />
    </div>
  );
}

function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const handleClick = (id) => {
    if (currentQuestion === id) {
      setCurrentQuestion(null);
    } else {
      setCurrentQuestion(id);
    }
  };

  return (
    <div className="body">
      {questions.map((question) => (
        <div
          key={question.id}
          className={currentQuestion === question.id ? "card answer" : "card"}
          onClick={() => handleClick(question.id)}
        >
          {currentQuestion === question.id
            ? question.answer
            : question.question}
        </div>
      ))}
    </div>
  );
}

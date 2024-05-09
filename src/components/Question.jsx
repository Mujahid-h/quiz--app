import React from "react";

// Yahan se Question component ka code shuru hota hai
const Question = ({ question, onAnswerClick = () => {} }) => {
  return (
    <div className="question">
      <h2>{question.question}</h2> {/* Sawal ka text */}
      <ul className="options">
        {/* Jawabon ki list */}
        {question.answerOptions.map((option) => (
          <li key={option.text}>
            <button onClick={() => onAnswerClick(option.isCorrect)}>
              {option.text} {/* Jawab ka text */}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question; // Question component ka export

import React from "react";

// Yahan se Result component ka code shuru hota hai
const Result = ({ userAnswer, questions, resetQuiz = () => {} }) => {
  const correctAnswers = userAnswer.filter((answer) => answer); // Sahi jawabon ko filter karna
  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        You answered {correctAnswers.length} correct out of {questions.length}{" "}
        questions{" "}
      </p>
      <ul>
        {/* Har sawal ke liye result dikhana */}
        {questions.map((question, index) => (
          <li key={index} data-correct={userAnswer[index]}>
            Q.{index + 1}. {question.question} {/* Sawal ka text */}
            <b className="res-ans">
              {userAnswer[index]
                ? ""
                : ` ~ ${
                    question.answerOptions.find((ans) => ans.isCorrect).text
                  }`}
            </b>
          </li>
        ))}
      </ul>
      <button onClick={resetQuiz}>Click here to Retry</button>{" "}
      {/* Retry button */}
    </div>
  );
};

export default Result; // Result component ka export

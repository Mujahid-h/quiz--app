import React from "react";

const Result = ({ userAnswer, questions, resetQuiz = () => {} }) => {
  const correctAnswers = userAnswer.filter((answer) => answer);
  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        You answered {correctAnswers.length} correct out of {questions.length}{" "}
        questions{" "}
      </p>

      <ul>
        {questions.map((question, index) => (
          <li key={index} data-correct={userAnswer[index]}>
            Q.{index + 1}. {question.question}
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

      <button onClick={resetQuiz}>Click here to Retry</button>
    </div>
  );
};

export default Result;

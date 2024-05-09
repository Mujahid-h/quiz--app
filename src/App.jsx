import { useState } from "react";
import questions from "./constants/questions.json";
import "./App.css";
import Question from "./components/Question";
import Result from "./components/Result";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer([...userAnswer, isCorrect]);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswer([]);
  };

  return (
    <div className="App">
      <h1>World Quiz</h1>

      {/* Qestion component */}
      {currentQuestion < questions.length && (
        <Question
          question={questions[currentQuestion]}
          onAnswerClick={handleNextQuestion}
        />
      )}

      {/* Result component */}
      {currentQuestion === questions.length && (
        <Result
          userAnswer={userAnswer}
          questions={questions}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
}

export default App;

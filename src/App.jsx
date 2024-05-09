import { useState } from "react";
import questions from "./constants/questions.json"; // Sawalat ka data
import "./App.css";
import Question from "./components/Question"; // Question component import
import Result from "./components/Result"; // Result component import

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0); // Current sawal
  const [userAnswer, setUserAnswer] = useState([]); // User ke jawab

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1); // Agla sawal
    setUserAnswer([...userAnswer, isCorrect]); // User ka jawab
  };

  const resetQuiz = () => {
    setCurrentQuestion(0); // Sawalat ka dobara se shuru karna
    setUserAnswer([]); // User ke jawab ko reset karna
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

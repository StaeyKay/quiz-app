import React, { useState, useEffect } from "react";
import CountdownProgressBar from "./countDown";

const Quiz = () => {
  const questions = [
    {
      question: "In which year did Ghana gain independence?",
      options: ["1956", "1957", "1958", "1959"],
      answer: 1,
    },
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Venice"],
      answer: 0,
    },
    {
      question: "Which of the following is the highest mountain in the world?",
      options: ["Kilimanjaro", "Everest", "Elbrus", "Denai"],
      answer: 1,
    },
    {
      question:
        "How many years does an elected president in Ghana rule before the next election?",
      options: ["3", "2", "4", "5"],
      answer: 2,
    },
    {
      question: "How many continents are there in the world?",
      options: ["5", "6", "7", "8"],
      answer: 2,
    },
    {
      question: "Which country is the largest?",
      options: ["USA", "Russia", "Africa", "India"],
      answer: 1,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timerKey, setTimerKey] = useState(0); // To reset the timer

  // Function to handle answer selection
  const handleOptionClick = (selectedOption) => {
    // Check if selected option is correct
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    // Move to the next question or complete the quiz
    handleNextQuestion();
  };

  // Function to handle moving to the next question or completing the quiz
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimerKey((prevKey) => prevKey + 1); // Reset the timer by changing the key
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="md:p-48 p-10 text-white font-bold md:text-[35px] text-[20px] overflow-hidden">
      <div className="md:p-[60px] p-[30px] bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-2xl rounded-3xl">
        {quizCompleted ? (
          <div>
            <h3>You have completed the quiz.</h3>
            <p>
              Your accumulated score is {score}/{questions.length}
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            <h2>{questions[currentQuestion].question}</h2>
            <div className="grid grid-cols-2 gap-8">
              {questions[currentQuestion].options.map((option, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleOptionClick(index)}
                    className="cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-2xl p-3 flex justify-center items-center"
                  >
                    <p>{option}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {!quizCompleted && (
        <div>
          {/* Pass a callback to move to the next question when time runs out */}
          <CountdownProgressBar
            duration={10}
            key={timerKey} // Reset the timer for each new question
            onTimeUp={handleNextQuestion} // Move to next question when time is up
          />
        </div>
      )}
    </div>
  );
};

export default Quiz;

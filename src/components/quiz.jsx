import React, { useState, useEffect } from "react";
import CountdownProgressBar from "./countDown";
import { useNavigate, useParams } from "react-router-dom";
import { getQuestions } from "@/utils";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timerKey, setTimerKey] = useState(0); // Reset the timer key
  const [questionList, setQuestionList] = useState([]);

  const params = useParams();
  console.log(params);
  const category = params.category;
  const navigate = useNavigate();

  // Function to handle answer selection
  const handleOptionClick = (selectedOption) => {
    // Check if selected option is correct
    console.log("selectedOption:", selectedOption);
    console.log("currentQuestion:", currentQuestion);
    console.log(
      "questionList[currentQuestion].answer:",
      questionList[currentQuestion].answer
    );
    if (selectedOption === questionList[currentQuestion].answer) {
      // Use a function to safely update the score state based on the previous value
      setScore((prevScore) => prevScore + 1);
    }

    // Move to the next question or complete the quiz after state is updated
    handleNextQuestion();
  };

  // Function to handle moving to the next question or completing the quiz
  const handleNextQuestion = () => {
    if (currentQuestion < questionList.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimerKey((prevKey) => prevKey + 1); // Reset the timer
    } else {
      setQuizCompleted(true);
    }
  };

  // Use effect to navigate after the quiz is completed
  useEffect(() => {
    if (quizCompleted) {
      navigate("/result", {
        state: { score: score, totalQuestions: questionList.length },
      });
    }
  }, [quizCompleted, score, navigate]);

  // useEffect to fetch questions from the database
  useEffect(() => {
    const fetchQuestions = async () => {
      const questionList = await getQuestions(category);
      setQuestionList(questionList);
      console.log("questionList", questionList);
    };
    fetchQuestions();
  }, []);

  return (
    <div className="bg-[#F8FAFC] flex flex-col items-center space-y-8 md:p-48 p-10 text-white font-bold md:text-[35px] text-[20px] overflow-y-auto max-h-screen">
      <div className="md:p-[60px] p-[30px] shadow-2xl bg-white rounded-3xl">
        {!quizCompleted && questionList.length > 0 && (
          <div className="space-y-5">
            <h2 className="text-black">
              {questionList[currentQuestion].question}
            </h2>
            <div className="grid grid-cols-2 gap-8">
              {questionList[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleOptionClick(index)}
                  className="cursor-pointer bg-[#E62E2D] rounded-lg shadow-2xl p-3 flex justify-center items-center"
                >
                  <p>{option}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="pt-10">
          {!quizCompleted && questionList.length > 0 && (
            <CountdownProgressBar
              duration={10}
              key={timerKey} // Reset timer for each question
              onTimeUp={handleNextQuestion} // Move to next question when time is up
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;

import React, { useState, useEffect } from "react";
import CountdownProgressBar from "./countDown";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { getQuestions } from "@/utils";
import { ColorRing } from "react-loader-spinner";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timerKey, setTimerKey] = useState(0); // Reset the timer key
  const [questionList, setQuestionList] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  console.log("questionList:", questionList);

  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const category = params.category || location.state.category;

  const handleOptionClick = (selectedOption) => {
    if (selectedOption === questionList[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questionList.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimerKey((prevKey) => prevKey + 1); // Reset the timer
    } else {
      setQuizCompleted(true);
    }
  };

  useEffect(() => {
    if (quizCompleted) {
      navigate("/result", {
        state: { score: score, totalQuestions: questionList.length },
      });
    }
  }, [quizCompleted, score, navigate]);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true); // Start loading
      const questionList = await getQuestions(category);
      setQuestionList(questionList);
      setLoading(false); // Stop loading once questions are fetched
    };
    fetchQuestions();
  }, [category]);

  return (
    <div className="bg-[#F8FAFC] flex flex-col justify-center items-center space-y-8 md:p-32 p-14 text-white font-bold md:text-[35px] text-[20px] overflow-y-auto max-h-screen">
      <div className="text-black text-center font-semibold pt-20">
        Category: {category.charAt(0).toUpperCase() + category.slice(1)}
      </div>
      <div className="md:p-[60px] p-[30px] shadow-2xl bg-white rounded-lg">
        {loading ? (
          <div className="flex justify-center items-center">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        ) : (
          !quizCompleted &&
          questionList.length > 0 && (
            <div className="space-y-5">
              <div className="text-black text-center">
                Question {currentQuestion + 1}/{questionList.length}
              </div>
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
          )
        )}
        <div className="pt-10">
          {!quizCompleted && questionList.length > 0 && !loading && (
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

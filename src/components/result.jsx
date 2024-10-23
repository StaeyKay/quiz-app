import React from "react";
import { FaShareAlt } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { useNavigate, useLocation } from "react-router-dom";
import PopoverComponent from "./popover";

const Result = () => {
  const location = useLocation();
  const { score, totalQuestions } = location.state || {
    score: 0,
    totalQuestions: 1,
  }; // default values in case state is missing
  const nickname = window.localStorage.getItem("nickname");
  const navigate = useNavigate();

  // Calculate the percentage
  const percentageScore = ((score / totalQuestions) * 100).toFixed(2); // 2 decimal places

  const handleRetakeQuiz = () => {
    navigate("/"); // Redirect to the welcome page to retake the quiz
  };

  return (
    <div className="space-y-8 md:p-48 bg-[#F8FAFC] p-10 text-gray-800 font-bold md:text-[35px] text-[20px] overflow-hidden">
      <div className="space-y-5 md:p-[60px] p-[30px] bg-white shadow-2xl rounded-3xl">
        <div className="space-y-10">
          <div>
            <h3>Quiz Completed!</h3>
            {/* <p>
              Well done,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-700">
                {nickname}
              </span>
              !
            </p> */}
            <p>
              Your score is {score}/{totalQuestions} ({percentageScore}%).
            </p>

            {/* Conditional message based on percentage */}
            {percentageScore >= 60 ? (
              <p className="text-green-600 text-[25px]">
                🎉 Congratulations, {nickname}! Great job, keep it up! 🎉
              </p>
            ) : (
              <p className="text-red-600 text-[25px]">
                👎 Don’t worry, {nickname}, try again! You can do better! 👎
              </p>
            )}
          </div>
          <div className="flex gap-20 justify-center text-white">
            <button
              onClick={handleRetakeQuiz}
              className="flex items-center gap-3 bg-[#E62E2D] shadow-2xl rounded-xl text-[25px] font-bold px-5 py-2"
            >
              Retake Quiz
              <TfiReload />
            </button>
            <PopoverComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;

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
    <div className="h-screen space-y-8 md:p-48 bg-[#F8FAFC] p-10 text-gray-800 font-bold md:text-[35px] text-[20px] overflow-hidden w-full">
      <div className="space-y-5 md:p-[60px] p-[30px] bg-white shadow-2xl rounded-3xl">
        <div className="space-y-10">
          <div>
            <h3>Quiz Completed!</h3>
            <p>
              Your score is {score}/{totalQuestions} ({percentageScore}%).
            </p>

            {/* Conditional message based on percentage */}
            {percentageScore >= 60 ? (
              <p className="text-green-600 text-[25px]">
                🎉 Congratulations, {nickname.toUpperCase()}! Great job, keep it
                up! 🎉
              </p>
            ) : (
              <p className="text-red-600 text-[25px]">
                👎 Don’t worry, {nickname.toUpperCase()}, try again! You can do
                better! 👎
              </p>
            )}
          </div>
          <div className="flex flex-col md:flex-row md:gap-20 gap-5 justify-center text-white">
            <button
              onClick={handleRetakeQuiz}
              className="flex items-center justify-center gap-3 bg-[#E62E2D] shadow-2xl rounded-xl text-[15px] md:text-[25px] font-bold px-4 py-3 w-full md:w-auto"
            >
              Retake Quiz
              <TfiReload />
            </button>
            <div className="w-full flex justify-center md:w-auto">
              <PopoverComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;

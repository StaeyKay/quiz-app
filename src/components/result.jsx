import React from "react";
import { FaShareAlt } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { useNavigate, useLocation } from "react-router-dom";
import PopoverComponent from "./popover";
import { backgroundImage } from "@/assets";

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
    navigate("/introduction"); // Redirect to the welcome page to retake the quiz
  };

  return (
    <div className="max-h-screen flex flex-col items-center justify-center space-y-8 md:py-48 p-10 bg-[#F8FAFC] text-white md:text-[35px] text-[20px] overflow-hidden w-full">
      <div className="bg-red-400 p-2 rounded-2xl w-[50%]">Ads here</div>
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="bg-center md:py-[25px] p-[10px] font-semibold rounded-[80px] w-[70%]"
      >
        <div className="space-y-10">
          <div>
            <span className="flex justify-center">
              Graphic<span className="text-[#f6d807]">f</span>
              <span className="text-[#78f807]">u</span>
              <span className="text-[#71e2fa]">n &nbsp;</span> Quiz
            </span>
          </div>
          <div>
            <p className="text-center pb-2">
              Your score is {score}/{totalQuestions}
            </p>
            <div className="bg-white rounded-lg text-center text-black w-[210px] h-[50px] mx-auto">
              {percentageScore}%
            </div>

            {/* Conditional message based on percentage */}
            {percentageScore >= 60 ? (
              <p className="text-[#f6d807] text-[25px] text-center">
                🎉 Congratulations, {nickname.toUpperCase()}! Great job, keep it
                up! 🎉
              </p>
            ) : (
              <p className="text-[#f6d807] text-[25px] text-center">
                👎 Don’t worry, {nickname.toUpperCase()}, try again! You can do
                better! 👎
              </p>
            )}
          </div>
          <div className="flex flex-col md:flex-row md:gap-20 gap-5 justify-center text-white">
            <button
              onClick={handleRetakeQuiz}
              className="flex items-center border-[4px] h-[62px] border-white justify-center gap-3 bg-[#231e20] shadow-2xl rounded-xl text-[15px] md:text-[25px] px-4 py-3 w-full md:w-auto"
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
      <div className="bg-red-400 p-2 rounded-2xl w-[50%]">Ads here</div>
    </div>
  );
};

export default Result;

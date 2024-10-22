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

  const handleRetakeQuiz = () => {
    navigate("/"); // Redirect to the welcome page to retake the quiz
  };

  return (
    <div className="space-y-8 md:p-48 p-10 text-white font-bold md:text-[35px] text-[20px] overflow-hidden">
      <div className="space-y-5 md:p-[60px] p-[30px] bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-2xl rounded-3xl">
        <div className="space-y-10">
          <div>
            <h3>Quiz Completed!</h3>
            <p>
              Well done,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-700">
                {nickname}
              </span>
              !
            </p>
            <p>
              Your score is {score}/{totalQuestions}.
            </p>
          </div>
          <div className="flex gap-20 justify-center">
            <button
              onClick={handleRetakeQuiz}
              className="flex items-center gap-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-2xl rounded-xl text-[25px] font-bold px-5 py-2"
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

import React, { useState, useEffect } from "react";
import CountdownProgressBar from "./countDown";
import { useRef } from "react";
import socket from "@/socket";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { getQuestions, saveScore } from "@/utils";
import { ColorRing } from "react-loader-spinner";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { backgroundImage } from "@/assets";


const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timerKey, setTimerKey] = useState(0); // Reset the timer key
  const [questionList, setQuestionList] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [activePlayers, setActivePlayers] = useState(0);

  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const category = params.category || location.state.category;
  const socketRef = useRef(null);

  const handleNextQuestion = async (currentScore) => {
    if (currentQuestion < questionList.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimerKey((prevKey) => prevKey + 1); // Reset the timer
    } else {
      setQuizCompleted(true);
      console.log("score:", currentScore);

      // Get the player ID from localStorage
      const playerID = localStorage.getItem("playerID");
      await saveScore({ score: currentScore, playerId: playerID, category });
    }
  };

  const handleOptionClick = (selectedOption) => {
    let currentScore = score;
    if (selectedOption === questionList[currentQuestion].answer) {
      currentScore = score + 1;
      setScore(currentScore);
    }
    handleNextQuestion(currentScore);
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

  useEffect(() => {
    socket.connect();
  
    socket.on("Active players:", (count) => {
      setActivePlayers(count);
    });
  
    return () => {
      socket.off("Active players:");
      socket.disconnect();
    };
  }, []);

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center space-y-2 md:space-y-4 text-white py-10 font-bold md:text-[35px] text-[20px] overflow-hidden">
      <div className="bg-red-400 p-2 rounded-2xl w-[50%]">Ads here</div>
      <p className="text-black text-xs md:text-base">Active Players: {activePlayers}</p>
      <div className="text-black flex items-center text-center font-semibold bg-white">
        Category{" "}
        <span>
          <IoMdArrowDropright size={40} className="text-[#e62e2d]" />
        </span>{" "}
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </div>
      <div
        style={{
          backgroundImage: !loading ? `url(${backgroundImage})` : "none",
        }}
        className="bg-center md:p-[60px] p-[30px] shadow-2xl w-full"
      >
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
              <div className="text-white text-center flex gap-2 items-center justify-center">
                <IoMdArrowDropleft size={40} className="text-[#ee5156]" />
                <p>
                  Question {currentQuestion + 1}/{questionList.length}
                </p>
                <IoMdArrowDropright size={40} className="text-[#ee5156]" />
              </div>
              <h2 className="text-[#f6d807] text-center md:text-[20px] text-[17px]">
                {questionList[currentQuestion].question}
              </h2>
              <div className="grid grid-cols-2 gap-8">
                {questionList[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className="cursor-pointer bg-white rounded-lg shadow-2xl p-3 flex justify-center items-center"
                  >
                    <p className="text-black md:text-[20px] text-[15px]">{option}</p>
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
        <div className="flex justify-end items-end">
          <span className="flex font-bold text-[20px]">
            Graphic<span className="text-[#f6d807]">f</span>
            <span className="text-[#78f807]">u</span>
            <span className="text-[#71e2fa]">n &nbsp;</span> Quiz
          </span>
        </div>
      </div>
      <div className="bg-red-400 p-2 rounded-2xl w-[50%]">Ads here</div>
    </div>
  );
};

export default Quiz;

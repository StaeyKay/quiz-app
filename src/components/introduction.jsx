import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Introduction = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const nickname = window.localStorage.getItem("nickname");
    if (!nickname) {
      navigate("/"); // Redirect to the welcome page if nickname is missing
    } else {
      setName(nickname); // Set the name if it exists
    }
  }, [navigate]);

  const handleContinue = () => {
    navigate("/quiz");
  };

  return (
    <div className="space-y-8 md:p-48 p-10 text-white font-bold md:text-[35px] text-[20px] overflow-hidden">
      <div className="space-y-5 md:p-[60px] p-[30px] bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-2xl rounded-3xl">
        <h1>
          Welcome to the fun quiz,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-700">
            {name.toUpperCase()}
          </span>
        </h1>
        <form action="">
          <label for="category">Choose a category and proceed:</label>
          <select id="category" name="" form="">
            <option value="">Politics</option>
            <option value="">Entertainment</option>
            <option value="">Social Studies</option>
          </select>
        </form>
        <p>
          NB: Once you click on start, the first question is displayed and the
          timer begins. You have 10 secs to answer each question.
        </p>
        <button
          onClick={handleContinue}
          className="bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-2xl font-bold px-5 rounded-lg"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Introduction;

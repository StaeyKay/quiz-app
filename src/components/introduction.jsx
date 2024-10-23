import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Introduction = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  console.log(category);

  useEffect(() => {
    const nickname = window.localStorage.getItem("nickname");
    if (!nickname) {
      navigate("/"); // Redirect to the welcome page if nickname is missing
    } else {
      setName(nickname); // Set the name if it exists
    }
  }, [navigate]);

  const handleContinue = () => {
    navigate(`/quiz/${category}`);
  };

  return (
    <div className="space-y-8 bg-[#F8FAFC] md:p-48 p-10 text-gray-900 font-bold md:text-[35px] text-[20px] overflow-hidden">
      <div className="space-y-5 md:p-[60px] p-[30px] bg-white shadow-2xl rounded-3xl">
        <h1>
          Welcome to the fun quiz,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-700">
            {name.toUpperCase()}
          </span>
        </h1>
        <form action="">
          <label for="category">Choose a category and proceed:</label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            id="category"
            name=""
            form=""
            value={category}
          >
            <option value="politics">Politics</option>
            <option value="entertainment">Entertainment</option>
            <option value="social studies">Social Studies</option>
          </select>
        </form>
        <p>
          NB: Once you click on start, the first question is displayed and the
          timer begins. You have 10 secs to answer each question.
        </p>
        <button
          onClick={handleContinue}
          className="bg-[#E62E2D] text-white shadow-2xl font-bold px-5 rounded-lg"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Introduction;

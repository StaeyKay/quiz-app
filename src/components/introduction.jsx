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
    if (!category) {
      alert("Please select a category before continuing.");
      return;
    }
    navigate(`/quiz/${category}`);
  };

  return (
    <div className="max-h-screen flex items-center justify-center space-y-8 md:p-48 p-10 bg-[#F8FAFC] text-gray-800 font-bold md:text-[35px] text-[20px] overflow-hidden w-full">
      <div className="md:p-[60px] p-[30px] bg-white shadow-2xl rounded-3xl max-w-[90vw]">
        <div className="space-y-5">
          <h1>
            Welcome to the Graphifun quiz,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-700">
              {name.toUpperCase()}
            </span>
          </h1>
          <form action="">
            <label htmlFor="category">Choose a category and proceed:</label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              id="category"
              value={category}
              className="mt-2 w-full p-2 border rounded-md"
              required
            >
              <option value="" disabled selected hidden>
                -- Select a category --
              </option>
              <option value="entertainment">Entertainment</option>
              <option value="social studies">Social Studies</option>
              <option value="integrated science">Integrated Science</option>
              <option value="english language">English Language</option>
            </select>
          </form>
          <p>
            NB: Once you click on start, the first question is displayed and the
            timer begins. You have 10 secs to answer each question.
          </p>
          <button
            onClick={handleContinue}
            className="bg-[#E62E2D] w-[130px] text-white shadow-2xl font-bold px-5 py-2 rounded-lg"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

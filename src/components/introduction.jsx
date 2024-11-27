import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";

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
    navigate(`/quiz/${category}`, { state: { category } }); // Pass the category state
  };

  return (
    <div className="max-h-screen flex items-center justify-center space-y-8 md:p-48 p-10 bg-[#F8FAFC] text-white overflow-hidden w-full">
      <div className="md:p-[60px] p-[30px] bg-gradient-to-r from-[#921919] to-[#e62e2d] shadow-2xl rounded-3xl max-w-[90vw]">
        <div className="space-y-5">
          <div className="flex gap-2 md:text-[35px] text-[20px]">
            <span>Welcome to</span>{" "}
            <span className="flex font-bold">
              Graphic<span className="text-[#f6d807]">f</span>
              <span className="text-[#78f807]">u</span>
              <span className="text-[#71e2fa]">n</span> &nbsp;{" "}
              <span> quiz,</span>
            </span>{" "}
            <span className="font-bold">{name.toUpperCase()}</span>
          </div>
          <form action="">
            <label htmlFor="category" className="md:text-[25px] text-[15px]">
              Choose a category and proceed
            </label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              id="category"
              value={category}
              className="mt-2 w-full p-2 border rounded-full text-black text-[30px] font-bold"
              required
            >
              <option value="" disabled selected hidden>
                Select a category
              </option>
              <option value="entertainment">Entertainment</option>
              <option value="social studies">Social Studies</option>
              <option value="integrated science">Integrated Science</option>
              <option value="english language">English Language</option>
              <option value="new">New</option>
            </select>
          </form>
          <div className="md:flex items-center text-[20px] gap-4">
            <p className="font-bold md:text-[25px] text-[15px]">
              <span className="text-[#f6d807] font-bold">NB:</span> Once you
              click on start, the first question is displayed and the timer
              begins. You have 10 secs to answer each question.
            </p>
            <div className="flex gap-x-0">
              <IoMdArrowDropright size={40} className="text-[#ee5156]" />
              <IoMdArrowDropright size={40} className="text-[#ee5156] -ml-6" />
            </div>
            <button
              onClick={handleContinue}
              type="submit"
              className="bg-gradient-to-r from-[#a51e1d] to-[#600d0d] border-[2px] border-white text-white font-bold px-5 py-3 rounded-full md:w-auto"
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const saveForm = (e) => {
    e.preventDefault();
    if (name) {
      window.localStorage.setItem("nickname", name); // Save nickname to local storage
      navigate("/introduction"); // Navigate to introduction page
    }
  };

  return (
    <div className="max-h-screen flex items-center justify-center space-y-8 md:p-48 p-10 bg-[#F8FAFC] text-gray-800 font-bold md:text-[35px] text-[20px] overflow-hidden w-full">
      <div className="space-y-5 md:p-[60px] p-[30px] bg-white shadow-2xl rounded-3xl">
        <h1 className="text-center">Welcome to Graphifun Quiz</h1>
        <form onSubmit={saveForm} className="space-y-5">
          <label htmlFor="" className="block text-center">
            Kindly enter a nickname to proceed
          </label>
          <div className="flex flex-col md:flex-row gap-5 justify-center">
            <input
              className="text-violet-900 rounded-lg p-3 w-full md:w-auto md:flex-grow"
              type="text"
              placeholder="Enter a nickname"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <button
              type="submit"
              className="bg-[#E62E2D] shadow-2xl text-white font-bold px-5 py-3 rounded-lg w-full md:w-auto"
            >
              Continue
            </button>
          </div>
        </form>
        <p className="text-center">Click continue to read the instructions</p>
      </div>
    </div>
  );
};

export default Welcome;

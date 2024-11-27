import React, { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
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
    <div className="max-h-screen flex items-center justify-center space-y-8 md:p-48 p-10 bg-[#F8FAFC] text-white md:text-[35px] text-[20px] overflow-hidden w-full">
      <div className="md:px-[150px] md:py-[60px] px-[50px] py-[30px] bg-gradient-to-r from-[#921919] to-[#e62e2d] shadow-2xl rounded-[50px] max-w-[90vw]">
        <div className="flex flex-col text-[34px]">
          <span className="font-normal">Welcome to</span>
          <span className="flex font-bold text-[42px]">
            Graphic<span className="text-[#f6d807]">f</span>
            <span className="text-[#78f807]">u</span>
            <span className="text-[#71e2fa]">n &nbsp;</span> Quiz
          </span>
        </div>

        <form onSubmit={saveForm} className="space-y-5">
          <label htmlFor="" className="block text-[24px]">
            Kindly enter a nickname to proceed
          </label>
          <div className="flex flex-col gap-5 justify-center">
            <input
              className="text-violet-900 rounded-full p-3 w-full md:w-auto md:flex-grow"
              type="text"
              placeholder="Enter a nickname"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <div className="flex gap-2">
              <p className="text-center flex items-center text-[24px]">
                <IoMdArrowDropright size={25} className="text-[#ee5156]" />
                Click continue to read the instructions
                <IoMdArrowDropright size={25} className="text-[#ee5156]" />
                <IoMdArrowDropright size={25} className="text-[#ee5156]" />
              </p>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#a51e1d] to-[#600d0d] border-[2px] border-white text-white font-bold px-5 py-3 rounded-full md:w-auto"
              >
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Welcome;

import { backgroundImage, emojis, greenBackground } from "@/assets";
import { savePlayer } from "@/utils";
import React, { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const saveForm = async (e) => {
    e.preventDefault();
      setLoading(true);
    try {
      
      
      const playerData = { name };
      const savedPlayer = await savePlayer(playerData);
      if (savedPlayer && savedPlayer.player.id) {
        window.sessionStorage.setItem("playerID", savedPlayer.player.id); //Save player id
        window.sessionStorage.setItem("nickname", savedPlayer.player.name);
        navigate("/introduction"); // Navigate to introduction page
      }
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const resetForm = () => {
    setName("");
  };

  return (
    <div className="max-h-screen flex flex-col items-center justify-center space-y-8 md:p-48 p-10 bg-[#F8FAFC] text-white md:text-[35px] text-[20px] overflow-hidden w-full">
      <div className="bg-red-400 p-2 rounded-2xl w-[50%]">Ads here</div>
      <div
        style={{ backgroundImage: `url(${greenBackground})` }}
        className="relative bg-center md:px-[150px] md:py-[60px] px-[50px] py-[30px] rounded-none md:rounded-[80px] max-w-[100vw]"
      >
        <img
          src={emojis}
          alt="emojis"
          className="absolute top-0 right-0 md:top-4 md:right-4 h-60 w-96"
        />
        <div className="flex flex-col text-[34px]">
          <span className="font-normal">Welcome to</span>
          <span className="flex font-bold text-[42px]">
            Graphic<span className="text-[#f6d807]">f</span>
            <span className="text-[#78f807]">u</span>
            <span className="text-[#71e2fa]">n &nbsp;</span> Quiz
          </span>
        </div>

        <form onSubmit={saveForm} className="space-y-5">
          <label htmlFor="" className="block text-2xl">
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
              <p className="text-center flex items-center text-base md:text-2xl">
                <IoMdArrowDropright size={25} className="text-[#ee5156]" />
                Click continue to read the instructions
                <IoMdArrowDropright size={25} className="text-[#ee5156]" />
                <IoMdArrowDropright size={25} className="text-[#ee5156]" />
              </p>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#a51e1d] to-[#600d0d] border-[2px] border-white text-white font-bold px-5 py-3 rounded-3xl md:rounded-full w-auto"
              >
                {loading ? "Loading..." : "Continue"} {/* Show loading text */}
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="bg-red-400 p-2 rounded-2xl w-[50%]">Ads here</div>
    </div>
  );
};

export default Welcome;

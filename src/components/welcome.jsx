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
    <div className="space-y-8 md:p-48 p-10 text-white font-bold md:text-[35px] text-[20px] overflow-hidden">
      <div className="space-y-5 md:p-[60px] p-[30px] bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-2xl rounded-3xl">
        <h1>Welcome to the fun quiz</h1>
        <form onSubmit={saveForm} className="space-y-5">
          <label htmlFor="">Kindly enter a nickname to proceed</label>
          <div className="flex gap-5">
            <input
              className="text-violet-900 rounded-lg"
              type="text"
              placeholder="Enter a nickname"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-2xl font-bold px-5 rounded-lg"
            >
              Continue
            </button>
          </div>
        </form>
        <p>Click continue to read the instructions</p>
      </div>
    </div>
  );
};

export default Welcome;

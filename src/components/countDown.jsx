import React, { useState, useEffect } from "react";

const CountdownProgressBar = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      onTimeUp(); // Trigger the callback when time is up
    }
  }, [timeLeft, onTimeUp]);

  useEffect(() => {
    setTimeLeft(duration); // Reset timeLeft when duration changes (i.e., new question)
  }, [duration]);

  const progress = (timeLeft / duration) * 100;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          borderRadius: "25px",
          width: "70%",
          height: "15px",
          backgroundColor: "#ddd",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "green",
            backgroundImage:
              "linear-gradient(to right, #f6d807, #78f807, #71e2fa)",
            borderRadius: "25px",
            transition: "width 1s linear",
          }}
        ></div>
      </div>
      {/* Display the countdown time beneath the progress bar */}
      <div
        style={{
          color: "white",
          marginTop: "8px",
          fontSize: "18px",
        }}
      >
        Time Left: {timeLeft}s
      </div>
    </div>
  );
};

export default CountdownProgressBar;

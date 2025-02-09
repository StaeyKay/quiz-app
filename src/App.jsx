import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import Welcome from "./components/welcome";
import Introduction from "./components/introduction";
import Quiz from "./components/quiz";
import Result from "./components/result";

function App() {
  const [audio, setAudio] = useState(null); // Use state to store the audio object

  // useEffect(() => {
  //   const audioObj = new Audio("/mango-sundive.mp3");
  //   audioObj.loop = true; // Loop the audio
  //   setAudio(audioObj);

  //   const handleUserInteraction = () => {
  //     if (audioObj) {
  //       audioObj.play().catch((error) => {
  //         console.error("Audio play failed:", error);
  //       });
  //     }
  //     // Remove the event listener after the first interaction
  //     window.removeEventListener("click", handleUserInteraction);
  //   };

  //   // Add event listener for any user interaction (like a click)
  //   window.addEventListener("click", handleUserInteraction);

  //   // Clean up function to pause the audio when the component unmounts
  //   return () => {
  //     if (audioObj) {
  //       audioObj.pause();
  //     }
  //     window.removeEventListener("click", handleUserInteraction);
  //   };
  // }, []);

  return (
    <BrowserRouter>
      {/* <div className="h-screen w-full"> */}
        <Routes>
          <Route path="/" element={<Welcome />} index={true} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/quiz/:category" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;

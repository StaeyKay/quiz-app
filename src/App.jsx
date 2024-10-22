import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/welcome";
import Introduction from "./components/introduction";
import Quiz from "./components/quiz";
import Result from "./components/result";

function App() {
  return (
    <Router>
      <div className="overflow-hidden min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <Routes>
          <Route path="/" element={<Welcome />} index={true} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

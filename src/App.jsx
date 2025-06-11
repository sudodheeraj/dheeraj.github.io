import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Introduction from "./pages/Introduction";
import Experience from "./pages/Experience";
import Certifications from "./pages/Certifications";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

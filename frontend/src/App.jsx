import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

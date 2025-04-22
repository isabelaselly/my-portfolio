import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";
import Home from "./pages/Home"; // Note the lowercase 'h' in 'home' to match your import
import './index.css';

function App() {
  return (
    <Router basename="/my-portfolio"> {/* Add the basename prop */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
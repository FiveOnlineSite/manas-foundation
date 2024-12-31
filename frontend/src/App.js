import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AOS from "aos";
import WOW from "wowjs";
import Scope from "./pages/Scope";
import AboutUs from "./pages/AboutUs";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-scope" element={<Scope />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;

import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import Careers from "./components/Careers";

// A page opened from the footer starts at its top, not where the last one was.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Nav />
        {/* Each path also gets its own copy of index.html at build time
            (scripts/static-routes.js), so it opens from a link or a reload. */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

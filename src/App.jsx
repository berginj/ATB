import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ContentManager from "./pages/ContentManager";
import Programs from "./pages/Programs";
import Tryouts from "./pages/Tryouts";
import Registration from "./pages/Registration";
import TravelBaseballArlington from "./pages/TravelBaseballArlington";
import CostsCommitment from "./pages/CostsCommitment";
import RecTravelCompatibility from "./pages/RecTravelCompatibility";
import AgeGroupProgram from "./pages/AgeGroupProgram";
import Teams from "./pages/Teams";
import SponsorsPage from "./pages/Sponsors";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="site-shell">
      <ScrollToTop />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/content-manager" element={<ContentManager />} />
          <Route
            path="/travel-baseball-arlington-va"
            element={<TravelBaseballArlington />}
          />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:ageGroup" element={<AgeGroupProgram />} />
          <Route path="/costs-commitment" element={<CostsCommitment />} />
          <Route
            path="/rec-travel-compatibility"
            element={<RecTravelCompatibility />}
          />
          <Route path="/tryouts" element={<Tryouts />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

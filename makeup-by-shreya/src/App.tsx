import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import AboutMe from "./pages/about-me";
import BookAppointment from "./pages/book-appointment";
import Classes from "./pages/classes";
import Contact from "./pages/contact";
import Footer from "./components/footer";
import Home from "./pages/home";
import Loader from "./components/loader";
import Navbar from "./components/navbar";
import Portfolio from "./pages/portfolio";
import PrivacyPolicy from "./pages/privacy-policy";
import ScrollToTop from "./components/scroll-to-top";
import TermsOfUse from "./pages/terms-of-use";

import { initGA, pageView } from "./utils/analytics";

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Initialize Google Analytics once
  useEffect(() => {
    initGA();
  }, []);

  // Track page changes
  useEffect(() => {
    pageView(location.pathname);
  }, [location.pathname]);

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />

      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
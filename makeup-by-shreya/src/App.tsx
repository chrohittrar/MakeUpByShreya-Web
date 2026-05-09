import AboutMe from "./pages/about-me";
import BookAppointment from "./pages/book-appointment";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Portfolio from "./pages/portfolio";
import ScrollToTop from "./components/scroll-to-top";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Classes from "./pages/classes";
import Contact from "./pages/contact";
import { useEffect, useState } from "react";
import Loader from "./components/loader";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsOfUse from "./pages/terms-of-use";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />

      {/* Header */}
      <Navbar />

      {/* Main content must grow */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
};

export default App;

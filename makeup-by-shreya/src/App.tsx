import AboutMe from "./pages/about-me";
import BookAppointment from "./pages/book-appointment";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Portfolio from "./pages/portfolio";
import Pricing from "./pages/pricing";
import ProductsUsed from "./pages/products";
import ScrollToTop from "./components/scroll-to-top";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Classes from "./pages/classes";

const App = () => {
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
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/products" element={<ProductsUsed />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/classes" element={<Classes />} />

        </Routes>
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
};

export default App;

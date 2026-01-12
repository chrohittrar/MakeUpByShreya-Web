import AboutMe from "./components/about-me";
import BookAppointment from "./components/book-appointment";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import HomeHero from "./components/home";
import Navbar from "./components/navbar";
import Portfolio from "./components/portfolio";
import Pricing from "./components/pricing";
import ProductsUsed from "./components/products";
import ScrollToTop from "./components/scroll-to-top";
import Testimonials from "./components/testimonial";
// import UpcomingEvents from "./components/upcomming-event";

const App = () => {
  return (
    <>

      <ScrollToTop />
      <Navbar />
      <HomeHero />
      <AboutMe />
      <Portfolio />
      {/* <UpcomingEvents /> */}
      <ProductsUsed />
      <Pricing />
      <Testimonials />
      <FAQ />
      <BookAppointment />

      <Footer />
    </>
  );
};

export default App;

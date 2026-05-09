
import FAQ from "../components/faq";
import Showcase from "../components/showcase";
import Testimonials from "../components/testimonial";
import HomeHero from "./homehero";

const Home = () => {
  return (
    <>
      <HomeHero />
      <Showcase/>
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;

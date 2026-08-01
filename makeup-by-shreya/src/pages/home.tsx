
import FAQ from "../components/faq";
import RateList from "../components/rate-list";
import Showcase from "../components/showcase";
import Testimonials from "../components/testimonial";
import HomeHero from "./homehero";

const Home = () => {
  return (
    <>
      <HomeHero />
      <Showcase/>
      <RateList />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;

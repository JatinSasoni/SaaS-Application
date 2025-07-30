import Navbar from "../Components/Shared/Navbar";
import Hero from "../Components/Hero";
import AiTools from "../Components/AiTools";
import Testimonial from "../Components/Testimonial";
import Plan from "../Components/Plan";
import Footer from "../Components/Shared/Footer";
import { useRef } from "react";

const Home = () => {
  const homeRef = useRef(null);
  const aiToolsRef = useRef(null);
  const pricingRef = useRef(null);

  const scrollToAiTools = () => {
    aiToolsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTop = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <Hero homeRef={homeRef} scrollToPricing={scrollToPricing} />
      <AiTools aiToolsRef={aiToolsRef} />
      <Testimonial />
      <Plan pricingRef={pricingRef} />
      <Footer
        scrollToAiTools={scrollToAiTools}
        scrollToPricing={scrollToPricing}
        scrollToTop={scrollToTop}
      />
    </>
  );
};

export default Home;

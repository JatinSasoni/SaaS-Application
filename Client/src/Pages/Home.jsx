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
  return (
    <>
      <Navbar />
      <Hero homeRef={homeRef} />
      <AiTools aiToolsRef={aiToolsRef} />
      <Testimonial />
      <Plan pricingRef={pricingRef} />
      <Footer
        scrollToAiTools={() =>
          aiToolsRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToPricing={() =>
          pricingRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToTop={() =>
          homeRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
    </>
  );
};

export default Home;

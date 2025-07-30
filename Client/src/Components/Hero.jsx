import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Hero = ({ homeRef, scrollToPricing }) => {
  const navigate = useNavigate();
  const parent = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeIn",
        staggerChildren: 0.3,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };
  return (
    <div
      ref={homeRef}
      className="px-4 max-sm:pt-20 sm:px-20 xl:px-32 relative flex flex-col items-center justify-center w-full bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat max-sm:min-h-[600px] min-h-screen text-center"
    >
      <motion.div
        variants={parent}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-4 items-center"
      >
        {/* ✨ Highlight badge */}
        <motion.div
          variants={child}
          className="bg-white/70 text-primary text-sm font-medium px-4 py-1 rounded-full shadow mb-2 backdrop-blur-md"
        >
          ⚡ AI-Powered Content Platform
        </motion.div>

        {/* 🧠 Headline */}
        <motion.h1
          variants={child}
          className="text-4xl sm:text-5xl md:text-5xl 2xl:text-6xl font-bold leading-tight tracking-tight max-w-5xl"
        >
          Create Smarter, <span className="text-primary">Faster</span>, and More{" "}
          <br className="hidden sm:block" />
          Impactful Content with <span className="text-primary">AI</span>
        </motion.h1>

        {/* ✍️ Description */}
        <motion.p
          variants={child}
          className="mt-3 max-w-md sm:max-w-xl 2xl:max-w-2xl text-gray-700 max-sm:text-sm"
        >
          Boost your productivity with advanced AI tools that help you write
          better, design faster, and build effortlessly — all in one unified
          platform.
        </motion.p>

        {/* 🚀 Call to Action */}
        <motion.div
          variants={child}
          className="flex flex-wrap justify-center gap-4 mt-6"
        >
          <button
            onClick={() => navigate("/ai")}
            className="bg-primary text-white px-8 py-3 text-sm sm:text-base rounded-lg hover:scale-[1.03] active:scale-95 transition duration-200"
          >
            Start Creating Now
          </button>
          <button
            onClick={scrollToPricing}
            className="border border-primary text-primary px-8 py-3 text-sm sm:text-base rounded-lg hover:bg-primary hover:text-white transition duration-200"
          >
            View Plans
          </button>
        </motion.div>

        {/* 👥 Social proof */}
        <motion.div
          variants={child}
          className="flex items-center gap-3 mt-10 text-gray-600 text-sm"
        >
          <img src={assets.user_group} alt="trusted users" className="h-8" />
          <span>
            Trusted by <strong>10,000+</strong> creators & teams
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;

import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Hero = ({ homeRef }) => {
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
      className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen"
    >
      <motion.div
        variants={parent}
        initial="hidden"
        animate="visible"
        className="text-center mb-6 "
      >
        <motion.h1
          variants={child}
          className="text-3xl sm:text-5xl mdd:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2"
        >
          Next-Gen Content Creation Begins with{" "}
          <span className="text-primary">You</span> and{" "}
          <span className="text-primary">AI</span>
        </motion.h1>
        <motion.p
          variants={child}
          className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600"
        >
          Transform your content creation with our suite of premium AI tools.
          Write articles, generate images, and enhance your workflow
        </motion.p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 text-sm: max-sm:text-xs">
        <button
          onClick={() => navigate("/ai")}
          className="bg-primary text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer"
        >
          Start creating now
        </button>
      </div>

      <div className="flex items-center gap-4 mt-8 mx-auto text-gray-600">
        <img src={assets.user_group} alt="trusted-by people" className="h-8" />
        Trusted by 10k+ people
      </div>
    </div>
  );
};

export default Hero;

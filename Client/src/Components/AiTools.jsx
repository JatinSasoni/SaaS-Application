import { AiToolsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { motion } from "motion/react";

const AiTools = ({ aiToolsRef }) => {
  const navigate = useNavigate();
  const { user } = useUser();

  const parentVariant = {
    hidden: { scale: 0.95 },
    show: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        staggerChildren: 0.3,
      },
    },
  };

  const childVariant = {
    hidden: { y: 40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 14,
        duration: 0.9,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="px-4 sm:px-20 xl:px-32 my-10" ref={aiToolsRef}>
      <motion.div
        variants={parentVariant}
        initial="hidden"
        whileInView="show"
        className="text-center"
      >
        <motion.h2
          variants={childVariant}
          viewport={{ once: true }}
          className="text-slate-700 text-[42px] font-semibold"
        >
          Powerful AI tools
        </motion.h2>

        <motion.p
          variants={childVariant}
          viewport={{ once: true }}
          className="tex-gray max-w-lg mx-auto"
        >
          Everything you need to create, enhance, and optimize your content with
          cutting-edge AI technology
        </motion.p>

        <motion.div
          variants={parentVariant}
          initial="hidden"
          whileInView="show"
          className="flex flex-wrap mt-10 justify-center"
        >
          {AiToolsData.map((tool, index) => (
            <motion.div
              variants={childVariant}
              key={index}
              className="p-8 m-4 max-w-xs rounded-lg bg-[#fddfe] shadow-lg border border-gray-100 hover:translate-y-1 transition-all duration-300 cursor-pointer"
              onClick={() => user && navigate(tool.path)}
            >
              <tool.Icon
                className="w-12 h-12 p-3 text-white rounded-xl mx-auto"
                style={{
                  background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`,
                }}
              />
              <h3 className="mt-6 mb-3 text-lg font-semibold">{tool.title}</h3>
              <p className="text-gray-500 text-sm max-w-[95%]">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AiTools;

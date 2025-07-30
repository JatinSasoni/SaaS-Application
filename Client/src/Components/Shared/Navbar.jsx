import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { UserButton, useClerk, useUser } from "@clerk/clerk-react";
import { motion } from "motion/react";

const Navbar = () => {
  const navigate = useNavigate();
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <motion.div
      initial={{
        y: -40,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 2,
        },
      }}
      className="fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32 cursor-pointer"
    >
      <img
        src="/logo.png"
        alt="logo"
        className="w-32 sm:w-50 cursor-pointer scale-110"
        onClick={() => navigate("/")}
      />
      {user ? (
        <UserButton />
      ) : (
        <button
          onClick={openSignIn}
          className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5"
        >
          Get started <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </motion.div>
  );
};

export default Navbar;

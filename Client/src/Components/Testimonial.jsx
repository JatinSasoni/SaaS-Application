import { motion } from "motion/react";
import { assets, dummyTestimonialData } from "../assets/assets";

const Testimonial = () => {
  const parentVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const childVariant = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="px-4 sm:px-20 xl:px-32  my-10 sm:my-24">
      <motion.div
        variants={parentVariant}
        initial="hidden"
        whileInView="show"
        className="text-center"
      >
        <motion.h2
          variants={childVariant}
          className="text-slate-700  max-sm:text-[30px] text-[42px] font-semibold"
        >
          Loved by Creators
        </motion.h2>
        <motion.p
          variants={childVariant}
          className="text-gray-500 max-w-lg mx-auto"
        >
          Don't just take our word for it. Here's what our users are saying.
        </motion.p>
      </motion.div>
      <motion.div
        variants={parentVariant}
        initial="hidden"
        whileInView="show"
        className="flex flex-wrap mt-10 justify-center"
      >
        {dummyTestimonialData.map((testimonial, index) => (
          <motion.div
            variants={childVariant}
            key={index}
            className="p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-1">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <img
                    key={index}
                    src={
                      index < testimonial.rating
                        ? assets.star_icon
                        : assets.star_dull_icon
                    }
                    className="w-4 h-4"
                    alt="rating"
                  />
                ))}
            </div>
            <p className="text-gray-500 text-sm my-5">
              "{testimonial.content}"
            </p>
            <hr className="mb-5 border-gray-300" />
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                className="w-12 object-contain rounded-full"
                alt=""
              />
              <div className="text-sm text-gray-600">
                <h3 className="font-medium">{testimonial.name}</h3>
                <p className="text-xs text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonial;

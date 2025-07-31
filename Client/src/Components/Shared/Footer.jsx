import { motion } from "motion/react";

const Footer = ({ scrollToAiTools, scrollToPricing, scrollToTop }) => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.7 },
        }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6"
      >
        <div className="md:max-w-96">
          <img className="h-9" src="logo.png" alt="dummyLogoDark" />
          <p className="mt-6 text-sm">
            Experience the power of AI <br /> Transform your content creation
            with our suite of premium AI tools. Write articles, generate images,
            and enhance your workflow.
          </p>
        </div>

        <div className="flex-1 flex flex-wrap gap-16 md:justify-end">
          {/* Quick Links */}
          <div>
            <h2 className="font-semibold text-gray-800 mb-5">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li
                onClick={scrollToTop}
                className="cursor-pointer hover:text-primary transition"
              >
                Home
              </li>
              <li
                onClick={scrollToAiTools}
                className="cursor-pointer hover:text-primary transition"
              >
                AI Tools
              </li>
              <li
                onClick={scrollToPricing}
                className="cursor-pointer hover:text-primary transition"
              >
                Pricing
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-semibold text-gray-800 mb-5">Contact</h2>
            <ul className="space-y-2 text-sm">
              <li>
                Email:{" "}
                <a
                  href="mailto:jatin8872648396@gmail.com"
                  className="hover:text-primary transition"
                >
                  jatin8872648396@gmail.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+916284288651"
                  className="hover:text-primary transition"
                >
                  6284288651
                </a>
              </li>
              <li>
                Location: <span className="text-gray-700">India</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        © 2025 Jatin Sasoni. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

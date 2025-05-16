import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen pt-24 px-8 bg-gradient-to-br from-apricot via-melon to-apricot text-cosmos flex flex-col md:flex-row items-center justify-between gap-10 w-full"
    >
      {/* Left Side: Text */}
      <motion.div
        className="flex-1 max-w-xl"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-cosmos drop-shadow-md">
          Hey, I’m Akash 🍁
        </h1>
        <p className="mt-4 text-xl md:text-2xl">
          A full-stack developer based in Canada, crafting clean, intuitive, and bold digital experiences.
        </p>

        <div className="mt-8 flex gap-4">
          <Link to="projects" smooth={true} duration={500}>
            <button className="bg-redwood text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-cordovan hover:shadow-xl transition hover:scale-105 duration-300">
              View Projects
            </button>
          </Link>

          <Link to="contact" smooth={true} duration={500}>
            <button className="border border-redwood text-redwood px-6 py-3 rounded-full font-medium hover:bg-redwood hover:text-white transition hover:scale-105 duration-300">
              Contact Me
            </button>
          </Link>
        </div>

      </motion.div>

      {/* Right Side: Illustration */}
      <motion.div
        // className="flex-1 hidden md:flex justify-center"
        //  className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0"
        className="flex-1 flex justify-center md:justify-end -mt-4 sm:-mt-6 md:mt-0"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/hero_illustration.png"
          alt="Developer Illustration"
          // className="w-[700px] drop-shadow-xl"
          className="w-[80%] sm:w-[90%] md:w-[60%] lg:w-[700px] xl:w-[750px] drop-shadow-xl"
        />
      </motion.div>
    </section>
  );
};

export default Hero;

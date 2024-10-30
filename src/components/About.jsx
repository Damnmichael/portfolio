import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layout, Code, GameController, Lightbulb } from "@phosphor-icons/react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div
      name="about"
      className="w-full min-h-screen bg-black text-gray-800 py-16 flex items-center"
      ref={ref}
    >
      <motion.div
        className="max-w-screen-xl w-full px-4 mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className=" mb-16">
          <h2 className="text-4xl font-bold text-white">
            About <span className="text-red-700">Me</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
          <motion.div className="md:w-1/2 space-y-6" variants={itemVariants}>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white">
              Hey! I’m Michael Gafah – a frontend developer and UI designer with
              a genuine love for building sleek, user-friendly digital
              experiences. I’m all about making sure everything not only looks
              great but works seamlessly too.
            </p>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white">
              Outside of coding and design, I’m usually on the virtual soccer
              field in FIFA 🎮. It’s my go-to spot for some fun, where I get to
              bring a bit of the same focus and creativity I use in my projects.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6 md:w-1/2"
            variants={itemVariants}
          >
            {[
              { icon: Layout, title: "UI Designer" },
              { icon: Code, title: "Frontend Dev" },
              { icon: GameController, title: "FIFA Enthusiast" },
              { icon: Lightbulb, title: "Problem Solver" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className=" p-8 rounded-lg text-center flex flex-col items-center justify-center aspect-square border border-white/20 shadow-lg 
              hover:bg-white/20 hover:border-white/40 transition-all "
                variants={itemVariants}
              >
                <item.icon className="text-5xl md:text-4xl text-red-700 mb-4" />
                <h3 className="text-base md:text-lg font-semibold text-white ">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

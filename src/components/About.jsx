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
      className="w-full min-h-screen bg-white text-gray-800 py-16 flex items-center"
      ref={ref}
    >
      <motion.div
        className="max-w-screen-xl w-full px-4 mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className=" mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            About <span className="text-red-700">Me</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
          <motion.div className="md:w-1/2 space-y-6" variants={itemVariants}>
            <p className="text-xl leading-relaxed text-gray-500">
              👋 Hey there! I&apos;m Michael Gafah, a passionate Frontend
              Developer and User Interface Designer with a knack for crafting
              visually stunning and user-friendly digital experiences.
            </p>
            <p className="text-xl leading-relaxed text-gray-500">
              When I&apos;m not immersed in the world of code and design,
              you&apos;ll often catch me showcasing my skills on the virtual
              soccer field in FIFA 🎮 – where I bring the same precision and
              strategy that define my development and design work.
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
                className="bg-white p-6 rounded-lg shadow-md text-center"
                variants={itemVariants}
              >
                <item.icon className="text-4xl text-red-700 mx-auto mb-4 " />
                <h3 className="text-lg font-semibold text-gray-800">
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

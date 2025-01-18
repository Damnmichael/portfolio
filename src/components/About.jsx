import { motion } from "framer-motion";
import { useRef } from "react";
import { Layout, Code, GameController, Lightbulb } from "@phosphor-icons/react";

const About = () => {
  const ref = useRef(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerCards = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateX: -30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] py-20"
      ref={ref}
    >
      <div className="max-w-screen-xl w-full px-4 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text">
              Me
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">
          <motion.div
            className="lg:w-1/2 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative p-8 bg-[#1E293B]/50 backdrop-blur-sm rounded-lg">
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                  Hey! I'm Michael Gafah – a frontend developer and UI designer
                  with a genuine love for building sleek, user-friendly digital
                  experiences. I'm all about making sure everything not only
                  looks great but works seamlessly too.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative p-8 bg-[#1E293B]/50 backdrop-blur-sm rounded-lg">
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                  Outside of coding and design, I'm usually on the virtual
                  soccer field in FIFA 🎮. It's my go-to spot for some fun,
                  where I get to bring a bit of the same focus and creativity I
                  use in my projects.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6 lg:w-1/2"
            variants={staggerCards}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              {
                icon: Layout,
                title: "UI Designer",
                gradient: "from-pink-600 to-purple-600",
              },
              {
                icon: Code,
                title: "Frontend Dev",
                gradient: "from-cyan-500 to-blue-500",
              },
              {
                icon: GameController,
                title: "FIFA Enthusiast",
                gradient: "from-purple-600 to-pink-600",
              },
              {
                icon: Lightbulb,
                title: "Problem Solver",
                gradient: "from-blue-500 to-cyan-500",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative group"
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-lg blur opacity-75 lg:opacity-30 group-hover:opacity-100 transition duration-1000`}
                ></div>
                <div className="relative p-8 rounded-lg bg-[#1E293B]/50 backdrop-blur-sm flex flex-col items-center justify-center aspect-square hover:transform hover:scale-105 transition-all duration-300">
                  <item.icon
                    className="text-5xl md:text-4xl mb-4 text-white"
                    weight="bold"
                  />
                  <h3 className="text-base md:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

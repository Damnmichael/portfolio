import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiFigma,
  SiGithub,
  SiStyledcomponents,
  SiNextdotjs,
} from "react-icons/si";

const Skills = () => {
  const techs = [
    {
      id: 1,
      Icon: SiHtml5,
      title: "HTML",
      gradient: "from-[#E44D26] to-[#F16529]",
    },
    {
      id: 2,
      Icon: SiCss3,
      title: "CSS",
      gradient: "from-[#264DE4] to-[#2965F1]",
    },
    {
      id: 3,
      Icon: SiJavascript,
      title: "JAVASCRIPT",
      gradient: "from-[#F7DF1E] to-[#F7DF1E]",
    },
    {
      id: 4,
      Icon: SiReact,
      title: "REACT",
      gradient: "from-[#61DAFB] to-[#00D8FF]",
    },
    {
      id: 5,
      Icon: SiTailwindcss,
      title: "TAILWIND",
      gradient: "from-[#38B2AC] to-[#0ED7B5]",
    },
    {
      id: 6,
      Icon: SiVite,
      title: "VITE",
      gradient: "from-[#646CFF] to-[#747BFF]",
    },
    {
      id: 7,
      Icon: SiFigma,
      title: "FIGMA",
      gradient: "from-[#F24E1E] to-[#FF7262]",
    },
    {
      id: 8,
      Icon: SiGithub,
      title: "GITHUB",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      id: 9,
      Icon: SiStyledcomponents,
      title: "STYLED COMPONENTS",
      gradient: "from-[#DB7093] to-[#FF69B4]",
    },
    {
      id: 10,
      Icon: SiNextdotjs,
      title: "Next.js",
      gradient: "from-black to-gray-800",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <div
      name="skills"
      className="w-full min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] py-16 flex items-center"
    >
      <div className="max-w-screen-xl w-full px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Tech
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Stack
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center"
        >
          {techs.map(({ id, Icon, title, gradient }) => (
            <motion.div key={id} variants={item} className="group relative">
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-xl blur 
                  opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-500`}
              ></div>
              <div className="relative bg-[#1E293B]/50 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col items-center justify-center hover:transform hover:scale-105 transition-all duration-300">
                <div
                  className={`p-4 rounded-full bg-[#0F172A]/50 mb-4 
                  bg-gradient-to-r ${gradient} md:bg-none md:group-hover:bg-gradient-to-r`}
                >
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 text-white" />
                </div>
                <p className="font-medium text-sm sm:text-base text-white transition-colors duration-300">
                  {title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 p-6 relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative p-6 bg-[#1E293B]/50 backdrop-blur-sm rounded-lg">
            <p className="text-center text-gray-400">
              Always exploring new technologies and frameworks to stay at the
              cutting edge of  development.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;

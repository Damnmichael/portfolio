import { ReactTyped } from "react-typed";
import profile from "../assets/lap.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col justify-center h-full"
        >
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            >
              I&apos;m a{" "}
            </motion.h2>
          </div>
          <ReactTyped
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"
            strings={["Frontend Developer", "UI Designer", "Problem Solver"]}
            typeSpeed={60}
            backSpeed={100}
            loop
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-300 py-4 text-base md:text-xl"
          >
            Dedicated to crafting seamless digital experiences. Dive in to see
            how I turn ideas into reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 cursor-pointer hover:scale-105"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <IoIosArrowRoundForward size={30} className="ml-1" />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <img
            src={profile}
            alt="my profile"
            className="relative mx-auto w-2/3 md:w-full lg:w-[500px] hidden md:block rounded-full border-4 border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 hover:scale-105"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

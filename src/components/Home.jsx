import { ReactTyped } from "react-typed";
import profile from "../assets/sss.jpeg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-white">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className=" w-full flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-gray-800">
            I&apos;m a{" "}
          </h2>
          <ReactTyped
            className="text-4xl sm:text-7xl font-bold text-gray-800"
            strings={["Frontend Developer", "UI Designer", "Problem Solver"]}
            typeSpeed={60}
            backSpeed={100}
            loop
          />

          <p className="text-gray-500 py-4 ">
             Dedicated to crafting seamless digital experiences.Dive
            in to see how I turn ideas into reality.
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-red-700 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <IoIosArrowRoundForward size={30} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={profile}
            alt="my profile"
            className="mx-auto w-2/3 md:w-full lg:w-[s500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

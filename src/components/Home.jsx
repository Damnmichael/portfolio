import { ReactTyped } from "react-typed";
import profile from "../assets/lap.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-black">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className=" w-full flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            I&apos;m a{" "}
          </h2>
          <ReactTyped
            className="text-4xl md:text-6xl font-bold text-red-700"
            strings={["Frontend Developer", "UI Designer", "Problem Solver"]}
            typeSpeed={60}
            backSpeed={100}
            loop
          />

          <p className="text-white py-4  text-xl">
            Dedicated to crafting seamless digital experiences.Dive in to see
            how I turn ideas into reality.
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
            className="mx-auto w-2/3 md:w-full lg:w-[500px] hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

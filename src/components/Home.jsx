import profile from "../assets/profile.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row gap-20">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I&apos;m a FrontEnd Developer
          </h2>
          <p className="text-gray-500 py-4 ">
            👋 Hey there! I&apos;m Michael Gafah, a passionate Frontend
            Developer and User Interface Designer with a knack for crafting
            visually stunning and user-friendly digital experiences. When
            I&apos;m not immersed in the world of code and design, you&apos;ll
            often catch me showcasing my skills on the virtual soccer field in
            FIFA 🎮 – where I bring the same precision and strategy that define
            my development and design work.
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
            className="mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

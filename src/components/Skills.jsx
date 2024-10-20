import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiVite, SiFigma, SiGithub, SiStyledcomponents, SiNextdotjs } from 'react-icons/si';

const Skills = () => {
  const techs = [
    {
      id: 1,
      Icon: SiHtml5,
      title: "HTML",
    },
    {
      id: 2,
      Icon: SiCss3,
      title: "CSS",
    },
    {
      id: 3,
      Icon: SiJavascript,
      title: "JAVASCRIPT",
    },
    {
      id: 4,
      Icon: SiReact,
      title: "REACT",
    },
    {
      id: 5,
      Icon: SiTailwindcss,
      title: "TAILWIND",
    },
    {
      id: 6,
      Icon: SiVite,
      title: "VITE",
    },
    {
      id: 7,
      Icon: SiFigma,
      title: "FIGMA",
    },
    {
      id: 8,
      Icon: SiGithub,
      title: "GITHUB",
    },

    {
      id: 9,
      Icon: SiStyledcomponents,
      title: "STYLED COMPONENTS",
    },
    {
      id: 10,
      Icon: SiNextdotjs,
      title: "Next.js",
    },
  ];

  return (
    // <div
    //   name="skills"
    //   className="bg-white w-full h-screen"
    // >
    //   <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-800">
    //     <div>
    //       <p className="text-4xl font-bold  border-gray-500 p-2 inline">
    //         Skills
    //       </p>
    //       <p className="py-6">
    //         These are the technologies I&apos;ve worked with
    //       </p>
    //     </div>
     <div
      name="skills"
      className="w-full min-h-screen bg-white text-gray-800 py-16 flex items-center"
      
    >
      <div
        className="max-w-screen-xl w-full px-4 mx-auto"
       
      >
        <div className=" mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            Tech <span className="text-red-700">Stacks</span>
          </h2>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center py-4 sm:py-8 px-4 sm:px-12">
          {techs.map(({ id, Icon, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg`}
            >
              <Icon className={`w-12 h-12 sm:w-20 sm:h-20 mx-auto ${style}`} />
              <p className="mt-2 sm:mt-4 text-gray-800 font-semibold text-sm sm:text-base max-w-[90%] mx-auto">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

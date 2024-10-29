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
    <div
      name="skills"
      className="w-full min-h-screen bg-black text-red-700 py-16 flex items-center"
    >
      <div className="max-w-screen-xl w-full px-4 mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white">
            Tech <span className="text-red-700">Stacks</span>
          </h2>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
          {techs.map(({ id, Icon, title, style }) => (
            <div
              key={id}
              className="border border-white/20 hover:scale-105 duration-500 rounded-lg aspect-square flex flex-col items-center justify-center p-4"
            >
              <Icon className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto ${style}`} />
              <p className="mt-4 text-white font-semibold text-sm sm:text-base">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

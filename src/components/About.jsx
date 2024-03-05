const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <br />

        <p className="text-xl ">
          My coding journey is like a thrilling game level—each line of code a
          strategic move, every design element a pixel in the grand adventure of
          user interfaces. When I&apos;m not immersed in the matrix of HTML,
          CSS, and JavaScript, I&apos;m conquering opponents and scoring virtual
          goals like there&apos;s no tomorrow. I live for the aha moments, those
          instances when a design flawlessly comes together or when I pull off
          an epic save in the 90th minute. I believe in crafting digital realms
          that not only look good but feel like a seamless joyride for users.
        </p>
      </div>
    </div>
  );
};

export default About;

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] py-16 flex items-center"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00A8E8]/10 via-black/0 to-transparent"></div>

      <div className="max-w-screen-xl w-full px-4 mx-auto relative">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Let&apos;s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Talk
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#B6EADA] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
          </h2>
          <p className="text-gray-300 py-6 max-w-md">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/ebpwwmga"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="Name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 border-[#00A8E8]/20 rounded-md text-white focus:outline-none focus:border-[#00A8E8] transition-colors duration-300"
            />
            <input
              type="text"
              name="Email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 border-[#00A8E8]/20 rounded-md text-white focus:outline-none focus:border-[#00A8E8] transition-colors duration-300"
            />
            <textarea
              name="message"
              placeholder="Enter your message here"
              rows="10"
              className="p-2 bg-transparent border-2 border-[#00A8E8]/20 rounded-md text-white focus:outline-none focus:border-[#00A8E8] transition-colors duration-300"
            ></textarea>
            <button className="text-white bg-gradient-to-r from-[#00A8E8] to-[#0096CF] px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 shadow-lg shadow-[#00A8E8]/20">
              Let&apos;s talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-black text-red-700 py-16 flex items-center"
    >
      <div className="max-w-screen-xl w-full px-4 mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white">
            Let&apos;s <span className="text-red-700">Talk</span>
          </h2>
          <p className="text-white py-6 max-w-md">
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
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="Email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name=" message "
              placeholder="Enter your message here"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "
            ></textarea>
            <button className="text-white bg-red-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let&apos;s talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

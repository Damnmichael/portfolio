import portfoliocover from "../assets/portfoliocover.webp";
import { useState } from "react";

const projectsData = [
  {
    id: "project1",
    title: "Easy Pay",
    description:
      "Detailed project description goes here. Explain the project goals, your role, and the impact it had. Make it engaging and informative.",
    image: portfoliocover,
    tags: ["Figma", "UI/UX"],
    link: "#",
  },
  {
    id: "project2",
    title: "Tip Genie",
    description: "Another project description...",
    image: portfoliocover,
    tags: ["React", "Node.js"],
    link: "#",
  },
  {
    id: "project3",
    title: "NFT Landing Page",
    description: "Another project description...",
    image: portfoliocover,
    tags: ["React", "Node.js"],
    link: "#",
  },
  {
    id: "project4",
    title: "WatchList",
    description: "Another project description...",
    image: portfoliocover,
    tags: ["React", "Node.js"],
    link: "#",
  },
  {
    id: "project5",
    title: "Explore Ghana",
    description: "Another project description...",
    image: portfoliocover,
    tags: ["React", "Node.js"],
    link: "#",
  },
  {
    id: "project6",
    title: "Vitashpere",
    description: "Another project description...",
    image: portfoliocover,
    tags: ["React", "Node.js"],
    link: "#",
  },
  // Add more projects as needed
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("designs");
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <div
      name="skills"
      className="w-full min-h-screen bg-black text-red-700 py-16 flex items-center"
    >
      <div className="max-w-screen-xl w-full px-4 mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white">
            Key <span className="text-red-700">Works</span>
          </h2>

          {/* Tab buttons */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={() => setActiveTab("designs")}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                activeTab === "designs"
                  ? "bg-red-700 text-white"
                  : "bg-gray-800 text-red-700"
              }`}
            >
              Designs
            </button>
            <button
              onClick={() => setActiveTab("development")}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                activeTab === "development"
                  ? "bg-red-700 text-white"
                  : "bg-gray-800 text-red-700"
              }`}
            >
              Development
            </button>
          </div>
        </div>

        {/* Tab content with flip animation */}
        <div className="perspective-1000">
          <div
            className={`transform transition-all duration-500 ${
              activeTab === "development" ? "rotate-y-180" : ""
            }`}
          >
            {activeTab === "designs" ? (
              <div className="flex flex-col gap-4">
                {projectsData.map((project) => (
                  <div
                    key={project.id}
                    className="bg-gray-900 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setExpandedProject(
                          expandedProject === project.id ? null : project.id
                        )
                      }
                      className="w-full p-4 flex justify-between items-center text-white bg-black"
                    >
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <svg
                        className={`w-6 h-6 transition-transform ${
                          expandedProject === project.id ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {expandedProject === project.id && (
                      <div className="p-4 bg-black">
                        <div className="flex flex-col md:flex-row gap-6 bg-black">
                          <div className="md:w-1/2">
                            <img
                              src={project.image}
                              alt={`${project.title} thumbnail`}
                              className="w-full h-64 object-cover rounded-lg"
                            />
                          </div>
                          <div className="md:w-1/2">
                            <p className="text-gray-400 mb-4">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-1 text-sm bg-gray-800 rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <a
                              href={project.link}
                              className="inline-block px-4 py-2 bg-red-700 text-white rounded hover:bg-red-600 transition-colors"
                            >
                              View Project
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Development Project Card */}
                <div className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-red-700/20 transition-all duration-300">
                  <img
                    src={portfoliocover}
                    alt="Project thumbnail"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Development Project
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Brief project description here
                    </p>
                    <div className="flex justify-between items-center">
                      <a href="#" className="text-red-700 hover:text-red-500">
                        View Project
                      </a>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 text-sm bg-gray-800 rounded">
                          React
                        </span>
                        <span className="px-2 py-1 text-sm bg-gray-800 rounded">
                          Node.js
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Add more development project cards as needed */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

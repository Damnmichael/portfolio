import portfoliocover from "../assets/portfoliocover.webp";
import TipGenieImage from "../assets/macBook01.png";
import NFTImage from "../assets/hp.png";
import watchList from "../assets/watchList.png";
import ExploreGhana from "../assets/explore.png";
import Vitashpere from "../assets/vitashpere.png";

import { useState } from "react";

const projectsData = [
  
  {
    id: "project1",
    title: "Tip Genie",
    description:
      "A soccer prediction platform designed to offer accurate predictions from multiple leagues. I created both the desktop and mobile web views using Figma, focusing on a user-friendly layout and clear information display.",
    image: TipGenieImage,
    tags: ["Figma", "UI/UX"],
    link: "#",
  },
  {
    id: "project2",
    title: "NFT Landing Page",
    description:
      "Designed a dynamic and engaging landing page for an NFT platform, focusing on a visually appealing layout that effectively introduces users to the NFT marketplace. The design highlights key features and collections to enhance user engagement.",
    image: NFTImage,
    tags: ["Figma", "UI/UX"],
    link: "#",
  },
  {
    id: "project3",
    title: "WatchList",
    description:
      "A mobile app design crafted to provide a Netflix-like experience, enabling users to stream and download movies without any monthly subscription. The design emphasizes a seamless, user-friendly interface to make discovering and watching content easy and enjoyable.",
    image: watchList,
    tags: ["React", "Node.js"],
    link: "#",
  },
  {
    id: "project4",
    title: "Explore Ghana",
    description:
      "A mobile app design created to guide tourists through Ghana's vibrant attractions, from restaurants and hotels to beaches and arcades. The app provides updated images, concise descriptions, pricing details where applicable, and a Get Directions feature that links directly to Google Maps for seamless navigation.",
    image: ExploreGhana,
    tags: ["Figma", "UI/UX"],
    link: "#",
  },
  {
    id: "project5",
    title: "Vitashpere",
    description:
      "An intuitive insurance dashboard design dedicated to managing clients, insurance policies, and policy details efficiently. The layout is structured to simplify access to critical information, streamlining policy management for optimal user experience.",
    image: Vitashpere,
    tags: ["Figma", "UI/UX"],
    link: "#",
  },
  // Add more projects as needed
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("designs");
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <div
      name="projects"
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
                              className="w-full h-auto object-cover rounded-lg"
                            />
                          </div>
                          <div className="md:w-1/2">
                            <p className="text-white mb-4">
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
              <div className="flex items-center justify-center min-h-[300px]">
                <p className="text-white text-base md:text-xl text-center">
                  Oooops, developments projects will be uploaded soon 🙂‍↕️
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

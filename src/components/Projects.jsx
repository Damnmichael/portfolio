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
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div
      name="projects"
      className="w-full min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white py-20"
    >
      <div className="max-w-screen-xl w-full px-4 mx-auto">
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Works
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#B6EADA] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl">
            Explore my collection of design and development projects, showcasing
            creative solutions and technical expertise.
          </p>

          {/* Modern tab buttons */}
          <div className="flex gap-4 mt-12">
            <button
              onClick={() => setActiveTab("designs")}
              className={`px-8 py-3 rounded-full transition-all duration-300 font-medium relative overflow-hidden ${
                activeTab === "designs"
                  ? "bg-[#B6EADA] text-[#03001C] shadow-lg shadow-[#B6EADA]/30"
                  : "bg-[#301E67]/50 text-gray-300 hover:bg-[#301E67]"
              }`}
            >
              <span className="relative z-10">Designs</span>
            </button>
            <button
              onClick={() => setActiveTab("development")}
              className={`px-8 py-3 rounded-full transition-all duration-300 font-medium relative overflow-hidden ${
                activeTab === "development"
                  ? "bg-[#B6EADA] text-[#03001C] shadow-lg shadow-[#B6EADA]/30"
                  : "bg-[#301E67]/50 text-gray-300 hover:bg-[#301E67]"
              }`}
            >
              <span className="relative z-10">Development</span>
            </button>
          </div>
        </div>

        <div className="perspective-1000">
          {activeTab === "designs" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectsData.map((project) => (
                <div
                  key={project.id}
                  className="group relative bg-[#1E293B]/80 rounded-xl backdrop-blur-sm overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02]"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 /50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-3 mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-[#B6EADA]/10 text-[#B6EADA] rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-white font-medium hover:text-[#B6EADA] transition-colors"
                    >
                      View Project
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="min-h-[400px] flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl animate-bounce">🚧</div>
                <p className="text-white text-xl">
                  Development projects coming soon!
                </p>
                <p className="text-gray-300">
                  Check back later for exciting updates.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;

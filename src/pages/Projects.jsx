import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsContainer = useRef(null);
  const projectCards = useRef([]);

  const myProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application with user authentication, shopping cart, and payment integration. Built with React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      image: "🛒",
      github: "https://github.com",
      live: "https://example.com",
      status: "in-progress",
    },
    // {
    //   id: 2,
    //   title: "Task Management App",
    //   description:
    //     "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    //   technologies: ["React", "Firebase", "Tailwind CSS", "GSAP"],
    //   image: "📋",
    //   github: "https://github.com",
    //   live: "https://example.com",
    //   status: "planned",
    // },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather application that displays current weather conditions and forecasts using a weather API with beautiful UI.",
      technologies: ["React", "API Integration", "CSS3", "JavaScript"],
      image: "🌤️",
      github: "https://github.com",
      live: "https://example.com",
      status: "in-progress",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing projects and skills with smooth animations and professional design.",
      technologies: ["React", "GSAP", "Tailwind CSS", "React Router"],
      image: "💼",
      github: "https://github.com",
      live: "https://example.com",
      status: "completed",
    },
    // {
    //   id: 5,
    //   title: "Social Media Dashboard",
    //   description:
    //     "A comprehensive dashboard for managing social media accounts with analytics, scheduling, and content management features.",
    //   technologies: ["React", "Chart.js", "Node.js", "PostgreSQL"],
    //   image: "📊",
    //   github: "https://github.com",
    //   live: "https://example.com",
    //   status: "planned",
    // },
    // {
    //   id: 6,
    //   title: "Blog Platform",
    //   description:
    //     "A modern blogging platform with markdown support, syntax highlighting, and a clean reading experience.",
    //   technologies: ["React", "Markdown", "Node.js", "MongoDB"],
    //   image: "✍️",
    //   github: "https://github.com",
    //   live: "https://example.com",
    //   status: "planned",
    // },
  ];

  useGSAP(() => {
    const ctx = gsap.context(() => {
      projectCards.current.forEach((card, idx) => {
        if (card) {
          gsap.from(card, {
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            delay: idx * 0.1,
          });
        }
      });
    }, projectsContainer);

    return () => ctx.revert();
  }, []);

  const addProjectRef = (element, index) => {
    projectCards.current[index] = element;
  };

  const getStatusStyle = (status) => {
    const styles = {
      completed: "bg-green-500 text-white",
      "in-progress": "bg-yellow-500 text-white",
      planned: "bg-blue-500 text-white",
    };
    return styles[status] || styles.completed;
  };

  return (
    <section
      ref={projectsContainer}
      className="min-h-screen w-full py-20 px-6 md:px-10 lg:px-16 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#5D866C] to-fuchsia-700 bg-clip-text text-transparent">
            My Projects
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5D866C] to-fuchsia-700 mx-auto mb-6" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A collection of projects showcasing my skills and experience in web
            development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project, idx) => (
            <div
              key={project.id}
              ref={(el) => addProjectRef(el, idx)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-[#5D866C] to-fuchsia-700 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-800 flex-1">
                    {project.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                      project.status,
                    )}`}
                  >
                    {project.status.replace("-", " ")}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg text-center font-semibold hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <i className="ri-github-fill" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-[#5D866C] to-fuchsia-700 text-white rounded-lg text-center font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <i className="ri-external-link-line" />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#5D866C] to-fuchsia-700 text-white rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <i className="ri-github-fill text-2xl" />
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

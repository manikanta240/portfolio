import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    id: 1,
    category: "Frontend",
    iconClass: "ri-reactjs-line",
    name: "React.js",
    description:
      "Expert in building scalable, component-based user interfaces with React. Proficient in hooks, context API, React Router, and modern React patterns.",
    proficiency: 80,
    color: "from-blue-500 via-cyan-500 to-blue-600",
    gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
    years: "1+ Years",
    projects: "3+ Projects",
  },
  {
    id: 2,
    category: "Frontend",
    iconClass: "ri-javascript-fill",
    name: "JavaScript",
    description:
      "Advanced knowledge of ES6+, async/await, promises, closures, and modern JavaScript patterns. Building dynamic, interactive web applications.",
    proficiency: 70,
    color: "from-yellow-400 via-orange-500 to-yellow-600",
    gradient: "bg-gradient-to-br from-yellow-400 to-orange-500",
    years: "2+ Years",
    projects: "7+ Projects",
  },
  {
    id: 3,
    category: "Frontend",
    iconClass: "ri-tailwind-css-line",
    name: "Tailwind CSS",
    description:
      "Mastering utility-first CSS framework for rapid UI development. Creating responsive, modern designs with consistent styling patterns.",
    proficiency: 92,
    color: "from-cyan-500 via-blue-500 to-teal-600",
    gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
    years: "1+ Years",
    projects: "5+ Projects",
  },
  {
    id: 4,
    category: "Frontend",
    iconClass: "ri-html5-line",
    name: "HTML5",
    description:
      "Deep understanding of semantic HTML, accessibility standards, and modern web standards. Building structured, SEO-friendly web pages.",
    proficiency: 98,
    color: "from-orange-500 via-red-500 to-orange-600",
    gradient: "bg-gradient-to-br from-orange-500 to-red-600",
    years: "4+ Years",
    projects: "30+ Projects",
  },
  {
    id: 5,
    category: "Frontend",
    iconClass: "ri-css3-fill",
    name: "CSS3",
    description:
      "Expert in modern CSS including Flexbox, Grid, animations, transitions, and CSS variables. Creating responsive, beautiful layouts.",
    proficiency: 93,
    color: "from-blue-500 via-cyan-500 to-indigo-600",
    gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
    years: "4+ Years",
    projects: "30+ Projects",
  },
  {
    id: 6,
    category: "Backend",
    iconClass: "ri-nodejs-line",
    name: "Node.js",
    description:
      "Building scalable backend services and RESTful APIs. Currently expanding expertise in server-side development with Express and MongoDB.",
    proficiency: 75,
    color: "from-green-500 via-emerald-500 to-green-600",
    gradient: "bg-gradient-to-br from-green-500 to-emerald-500",
    years: "1+ Year",
    projects: "3+ Projects",
  },
  {
    id: 7,
    category: "Backend",
    iconClass: "ri-java-line",
    name: "Java",
    description:
      "Strong foundation in object-oriented programming, data structures, and algorithms. Solving complex problems with Java.",
    proficiency: 70,
    color: "from-orange-600 via-red-600 to-orange-700",
    gradient: "bg-gradient-to-br from-orange-600 to-red-600",
    years: "3+ Years",
  },
  {
    id: 8,
    category: "Tools",
    iconClass: "ri-github-line",
    name: "Git & GitHub",
    description:
      "Proficient in version control, collaborative development, branching strategies, and Git workflows for team projects.",
    proficiency: 80,
    color: "from-gray-700 via-gray-800 to-gray-900",
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
    years: "1+ Years",
    projects: "3+ Repositories",
  },
];

const additionalSkills = [
  { name: "Express.js", icon: "⚡" },
  { name: "RESTful APIs", icon: "🔌" },
  { name: "Responsive Design", icon: "📱" },
  { name: "UI/UX Design", icon: "🎨" },
  { name: "GSAP Animations", icon: "✨" },
  { name: "Firebase", icon: "🔥" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Problem Solving", icon: "🧩" },
  { name: "Code Review", icon: "👁️" },
  { name: "Agile/Scrum", icon: "🔄" },
];

const Skill = () => {
  const skillsSection = useRef(null);
  const skillCardRefs = useRef([]);
  const progressBarRefs = useRef([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const skillCategories = ["All", "Frontend", "Backend", "Tools"];

  const getFilteredSkills = () => {
    if (selectedCategory === "All") return skills;
    return skills.filter((skill) => skill.category === selectedCategory);
  };

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-header", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsSection.current,
          start: "top 80%",
        },
      });

      gsap.from(".category-btn", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".category-buttons",
          start: "top 80%",
        },
      });

      skillCardRefs.current.forEach((card, idx) => {
        if (card) {
          gsap.from(card, {
            x: idx % 2 === 0 ? -100 : 100,
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

      progressBarRefs.current.forEach((bar, idx) => {
        if (bar) {
          gsap.from(bar, {
            scaleX: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar.closest(".skill-card"),
              start: "top 80%",
              toggleActions: "play none none none",
            },
            delay: 0.3 + idx * 0.1,
          });
        }
      });

      gsap.from(".skill-icon-wrapper", {
        scale: 0,
        rotation: 0,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: skillsSection.current,
          start: "top 70%",
        },
      });

      gsap.from(".additional-skill", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".additional-skills-section",
          start: "top 85%",
        },
      });
    }, skillsSection);

    return () => ctx.revert();
  }, [selectedCategory]);

  const addSkillCardRef = (element, index) => {
    skillCardRefs.current[index] = element;
  };

  const addProgressBarRef = (element, index) => {
    progressBarRefs.current[index] = element;
  };

  return (
    <section
      ref={skillsSection}
      className="min-h-screen w-full bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] py-20 px-6 md:px-10 lg:px-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="skill-header text-center mb-16">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            My Skills
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of technologies and tools I master to
            create exceptional digital experiences
          </p>
        </div>

        <div className="category-buttons flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-btn px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-110 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 backdrop-blur-sm"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {getFilteredSkills().map((skill, idx) => (
            <div
              key={skill.id}
              ref={(el) => addSkillCardRef(el, idx)}
              className="skill-card group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:scale-[1.02] hover:border-cyan-500/50"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`skill-icon-wrapper ${skill.gradient} w-16 h-16 rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}
                    >
                      <i
                        className={`${skill.iconClass} text-3xl text-white`}
                        aria-label={skill.name}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {skill.name}
                      </h3>
                      <span className="text-sm text-cyan-400 font-medium">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg">
                  {skill.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-400">
                      Proficiency
                    </span>
                    <span className="text-lg font-bold text-cyan-400">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      ref={(el) => addProgressBarRef(el, idx)}
                      className={`h-full ${skill.gradient} rounded-full origin-left`}
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-6 pt-4 border-t border-gray-700/50">
                  <div className="flex items-center gap-2">
                    <i className="ri-time-line text-cyan-400 text-xl" />
                    <span className="text-gray-300 text-sm">{skill.years}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-folder-line text-cyan-400 text-xl" />
                    <span className="text-gray-300 text-sm">
                      {skill.projects}
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>
            </div>
          ))}
        </div>

        <div className="additional-skills-section">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Additional Technologies & Tools
            </h2>
            <p className="text-gray-400 text-lg">
              Complementing my core skills with these powerful tools and
              methodologies
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((tech, idx) => (
              <div
                key={idx}
                className="additional-skill group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm px-6 py-4 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="text-white font-semibold text-base">
                    {tech.name}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's collaborate and bring your vision to life using these skills
              and more
            </p>
            <a
              href="/Contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

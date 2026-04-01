import React, { useRef, useMemo, useState } from "react";
import { Link } from "react-router-dom";
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
      "Component-based UIs with hooks, context, React Router, and modern patterns.",
    proficiency: 80,
    accent: "from-[#5D866C] to-emerald-600",
    bar: "bg-gradient-to-r from-[#5D866C] to-emerald-500",
    iconBg: "bg-[#5D866C]",
    years: "1+ Years",
    projects: "3+ Projects",
  },
  {
    id: 2,
    category: "Frontend",
    iconClass: "ri-javascript-fill",
    name: "JavaScript",
    description:
      "ES6+, async/await, modules, and patterns for interactive web apps.",
    proficiency: 70,
    accent: "from-amber-500 to-orange-600",
    bar: "bg-gradient-to-r from-amber-400 to-orange-500",
    iconBg: "bg-amber-500",
    years: "2+ Years",
    projects: "7+ Projects",
  },
  {
    id: 3,
    category: "Frontend",
    iconClass: "ri-tailwind-css-line",
    name: "Tailwind CSS",
    description:
      "Utility-first styling, responsive layouts, and consistent design systems.",
    proficiency: 92,
    accent: "from-cyan-500 to-blue-600",
    bar: "bg-gradient-to-r from-cyan-500 to-blue-500",
    iconBg: "bg-cyan-600",
    years: "1+ Years",
    projects: "5+ Projects",
  },
  {
    id: 4,
    category: "Frontend",
    iconClass: "ri-html5-line",
    name: "HTML5",
    description:
      "Semantic markup, accessibility, and SEO-friendly structure.",
    proficiency: 98,
    accent: "from-orange-500 to-rose-600",
    bar: "bg-gradient-to-r from-orange-500 to-rose-600",
    iconBg: "bg-orange-500",
    years: "4+ Years",
    projects: "30+ Projects",
  },
  {
    id: 5,
    category: "Frontend",
    iconClass: "ri-css3-fill",
    name: "CSS3",
    description:
      "Flexbox, Grid, animations, and responsive layout techniques.",
    proficiency: 93,
    accent: "from-blue-500 to-indigo-600",
    bar: "bg-gradient-to-r from-blue-500 to-indigo-500",
    iconBg: "bg-blue-600",
    years: "4+ Years",
    projects: "30+ Projects",
  },
  {
    id: 6,
    category: "Backend",
    iconClass: "ri-nodejs-line",
    name: "Node.js",
    description:
      "REST APIs, middleware, and server-side logic with Express-style stacks.",
    proficiency: 75,
    accent: "from-emerald-500 to-green-700",
    bar: "bg-gradient-to-r from-emerald-500 to-green-600",
    iconBg: "bg-emerald-600",
    years: "1+ Year",
    projects: "3+ Projects",
  },
  {
    id: 7,
    category: "Languages",
    iconClass: "ri-java-line",
    name: "Java",
    description:
      "OOP, data structures, and algorithms for robust application logic.",
    proficiency: 70,
    accent: "from-red-500 to-orange-700",
    bar: "bg-gradient-to-r from-red-500 to-orange-600",
    iconBg: "bg-red-600",
    years: "3+ Years",
    projects: "5+ Projects",
  },
  {
    id: 8,
    category: "Tools",
    iconClass: "ri-github-line",
    name: "Git & GitHub",
    description:
      "Branching, PRs, and collaborative workflows for clean delivery.",
    proficiency: 80,
    accent: "from-slate-600 to-slate-900",
    bar: "bg-gradient-to-r from-slate-600 to-slate-800",
    iconBg: "bg-slate-700",
    years: "1+ Years",
    projects: "3+ Repos",
  },
  {
    id: 9,
    category: "Tools",
    iconClass: "ri-send-plane-2-line",
    name: "Postman",
    description:
      "REST client workflows: collections, environments, auth, and automated API checks before shipping.",
    proficiency: 78,
    accent: "from-orange-500 to-rose-700",
    bar: "bg-gradient-to-r from-orange-500 to-rose-600",
    iconBg: "bg-orange-600",
    years: "1+ Years",
    projects: "API testing",
  },
];

const additionalSkills = [
  { name: "Express.js", icon: "⚡" },
  { name: "REST APIs", icon: "🔌" },
  { name: "MongoDB", icon: "🍃" },
  { name: "GSAP", icon: "✨" },
  { name: "Responsive UI", icon: "📱" },
  { name: "UI polish", icon: "🎨" },
];

const skillCategories = ["All", "Frontend", "Backend", "Languages", "Tools"];

const Skill = () => {
  const rootRef = useRef(null);
  const listRef = useRef(null);
  const filterRowRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = useMemo(() => {
    if (selectedCategory === "All") return skills;
    return skills.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      gsap.fromTo(
        root.querySelectorAll(".skills-hero-animate"),
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        root.querySelectorAll("[data-filter-pill]"),
        { y: 24, scale: 0.88, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.55,
          stagger: 0.07,
          ease: "back.out(1.35)",
          scrollTrigger: {
            trigger: root.querySelector(".filter-row"),
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.utils.toArray(root.querySelectorAll(".extra-pill")).forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            delay: i * 0.04,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      gsap.fromTo(
        root.querySelector(".skills-cta"),
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.querySelector(".skills-cta"),
            start: "top 92%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: rootRef, dependencies: [] }
  );

  useGSAP(
    () => {
      const row = filterRowRef.current;
      if (!row) return;

      const pills = row.querySelectorAll("[data-filter-pill]");
      const cleanups = [];

      pills.forEach((pill) => {
        const onEnter = () => {
          if (pill.getAttribute("data-category") === selectedCategory) return;
          gsap.to(pill, {
            boxShadow: "0 10px 28px rgba(93, 134, 108, 0.22)",
            duration: 0.3,
            ease: "power2.out",
          });
        };
        const onLeave = () => {
          gsap.to(pill, {
            boxShadow: "0 0 0 rgba(0,0,0,0)",
            duration: 0.3,
            ease: "power2.out",
          });
        };
        pill.addEventListener("mouseenter", onEnter);
        pill.addEventListener("mouseleave", onLeave);
        cleanups.push(() => {
          pill.removeEventListener("mouseenter", onEnter);
          pill.removeEventListener("mouseleave", onLeave);
        });
      });

      return () => cleanups.forEach((fn) => fn());
    },
    { dependencies: [selectedCategory], scope: filterRowRef, revertOnUpdate: true }
  );

  useGSAP(
    () => {
      const row = filterRowRef.current;
      if (!row) return;

      const pills = row.querySelectorAll("[data-filter-pill]");
      pills.forEach((pill) => {
        const active = pill.getAttribute("data-category") === selectedCategory;
        gsap.to(pill, {
          scale: active ? 1.06 : 1,
          duration: 0.45,
          ease: "elastic.out(1, 0.65)",
        });
      });

      const activePill = row.querySelector(
        `[data-filter-pill][data-category="${selectedCategory}"]`
      );
      if (activePill) {
        gsap.fromTo(
          activePill,
          { boxShadow: "0 0 0 0 rgba(147, 51, 234, 0.45)" },
          {
            boxShadow: "0 0 0 6px rgba(147, 51, 234, 0.2)",
            duration: 0.35,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut",
          }
        );
      }
    },
    { dependencies: [selectedCategory], scope: filterRowRef, revertOnUpdate: true }
  );

  useGSAP(
    () => {
      const cards = listRef.current?.querySelectorAll("[data-skill-card]");
      if (!cards?.length) return;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.07,
          ease: "power3.out",
        }
      );

      cards.forEach((card) => {
        const bar = card.querySelector("[data-progress-fill]");
        if (!bar) return;
        gsap.fromTo(
          bar,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1,
            ease: "power2.out",
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: listRef, dependencies: [selectedCategory], revertOnUpdate: true }
  );

  return (
    <section
      ref={rootRef}
      className="min-h-screen w-full bg-gradient-to-br from-[#EDE4D8] via-[#F0E8DC] to-[#E8DDD0] py-16 md:py-24 px-5 md:px-10 lg:px-16 text-[#3d2a22]"
    >
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-10 md:mb-14">
          <p className="skills-hero-animate text-sm font-semibold uppercase tracking-[0.2em] text-[#5D866C] mb-3">
            What I work with
          </p>
          <h1 className="skills-hero-animate text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#5D866C] via-fuchsia-700 to-[#5D866C] bg-clip-text text-transparent">
            Skills & stack
          </h1>
          <p className="skills-hero-animate text-lg md:text-xl text-[#5c4a42] max-w-2xl mx-auto leading-relaxed">
            Frontend, backend, languages, and tools — filtered so you can focus
            on what matters for your project.
          </p>
        </header>

        <div
          ref={filterRowRef}
          className="filter-row flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-12 max-w-4xl mx-auto"
        >
          {skillCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              data-filter-pill
              data-category={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`min-w-[5.5rem] sm:min-w-[6.5rem] flex-1 sm:flex-none px-4 py-2.5 rounded-full text-sm font-semibold border will-change-transform ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-[#5D866C] to-fuchsia-700 text-white border-transparent shadow-lg shadow-fuchsia-900/15"
                  : "bg-white/70 text-[#51372C] border-[#c9b8a8]/80 hover:bg-white hover:border-[#5D866C]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          ref={listRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-16"
        >
          {filtered.map((skill) => (
            <article
              key={skill.id}
              data-skill-card
              className="group relative rounded-2xl bg-white/85 backdrop-blur-sm border border-[#d4c4b4]/90 shadow-[0_8px_30px_rgba(81,55,44,0.08)] p-6 md:p-7 hover:shadow-[0_12px_40px_rgba(93,134,108,0.15)] hover:border-[#5D866C]/35 transition-all duration-300"
            >
              <div
                className={`absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b ${skill.accent} opacity-80`}
                aria-hidden
              />
              <div className="pl-4">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`${skill.iconBg} w-14 h-14 rounded-xl flex items-center justify-center shadow-md shrink-0 group-hover:scale-105 transition-transform duration-300`}
                  >
                    <i
                      className={`${skill.iconClass} text-2xl text-white`}
                      aria-hidden
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-[#2a1f1a]">
                      {skill.name}
                    </h2>
                    <span className="inline-block mt-1 text-xs font-semibold uppercase tracking-wider text-[#5D866C]">
                      {skill.category}
                    </span>
                  </div>
                </div>
                <p className="text-[#5c4a42] text-sm md:text-base leading-relaxed mb-5">
                  {skill.description}
                </p>
                <div className="mb-1 flex justify-between text-sm font-medium text-[#51372C]">
                  <span>Comfort level</span>
                  <span className="text-fuchsia-800 font-bold">
                    {skill.proficiency}%
                  </span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-[#e8dfd4] overflow-hidden">
                  <div
                    data-progress-fill
                    className={`h-full rounded-full ${skill.bar} origin-left`}
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
                <div className="mt-5 flex flex-wrap gap-4 text-sm text-[#6b5a50]">
                  <span className="inline-flex items-center gap-1.5">
                    <i className="ri-time-line text-[#5D866C]" />
                    {skill.years}
                  </span>
                  {skill.projects ? (
                    <span className="inline-flex items-center gap-1.5">
                      <i className="ri-folder-line text-[#5D866C]" />
                      {skill.projects}
                    </span>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[#6b5a50] py-8">
            No skills in this filter — try another category.
          </p>
        )}

        <div className="additional-skills-section rounded-3xl bg-white/60 border border-[#d4c4b4]/80 p-8 md:p-10 mb-14">
          <h3 className="text-center text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-[#5D866C] to-fuchsia-700 bg-clip-text text-transparent">
            Also in the toolbox
          </h3>
          <p className="text-center text-[#5c4a42] mb-8 max-w-xl mx-auto">
            Supporting tech and practices I use alongside the core skills above.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((tech) => (
              <div
                key={tech.name}
                className="extra-pill inline-flex items-center gap-2 rounded-full bg-white border border-[#d4c4b4] px-4 py-2.5 text-sm font-medium text-[#3d2a22] shadow-sm hover:border-[#5D866C]/50 hover:shadow-md transition-all duration-300"
              >
                <span aria-hidden>{tech.icon}</span>
                {tech.name}
              </div>
            ))}
          </div>
        </div>

        <div className="skills-cta text-center rounded-3xl bg-gradient-to-r from-[#5D866C] to-fuchsia-800 p-10 md:p-12 text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Need this stack on a project?
          </h3>
          <p className="text-white/90 mb-8 max-w-lg mx-auto">
            Tell me about your idea — I&apos;ll help shape the right frontend,
            API, and data pieces.
          </p>
          <Link
            to="/Contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-semibold text-fuchsia-900 shadow-lg hover:bg-[#f5f0e8] transition-colors duration-300"
          >
            Contact me
            <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Skill;

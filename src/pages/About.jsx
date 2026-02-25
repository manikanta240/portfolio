import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const pageContainer = useRef(null);
  const sectionsArray = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      sectionsArray.current.forEach((section) => {
        if (section) {
          gsap.from(section, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });
        }
      });
    }, pageContainer);

    return () => ctx.revert();
  }, []);

  const addSectionRef = (element, index) => {
    sectionsArray.current[index] = element;
  };

  const workExperience = [
    {
      title: "Frontend Developer",
      period: "2023 - Present",
      description:
        "Building responsive web applications using React, JavaScript, and modern CSS frameworks. Collaborating with clients to deliver high-quality user experiences.",
    },
    {
      title: "Web Development Student",
      company: "Self-Learning",
      period: "2022 - 2023",
      description:
        "Dedicated to mastering web development technologies including React, Node.js, and various frontend frameworks through hands-on projects and continuous learning.",
    },
  ];

  const myEducation = [
    {
      degree: "Bachelor's Degree",
      institution: "Sir Cr Reddy College of Engineering",
      period: "2023 - 2027",
      description:
        "Relevant coursework in Computer Science and Software Engineering.",
    },
  ];

  const myAchievements = [
    "Built multiple responsive web applications",
    "Proficient in React and modern JavaScript",
    "Strong problem-solving and debugging skills",
    "Continuous learner of new technologies",
  ];

  return (
    <section
      ref={pageContainer}
      className="min-h-screen w-full py-20 px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <div ref={(el) => addSectionRef(el, 0)} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#5D866C] to-fuchsia-700 bg-clip-text text-transparent">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5D866C] to-fuchsia-700 mx-auto mb-6" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Passionate web developer dedicated to creating exceptional digital
            experiences
          </p>
        </div>

        <div
          ref={(el) => addSectionRef(el, 1)}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12 shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#5D866C]">My Story</h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              I'm a passionate web developer with a strong foundation in modern
              web technologies. My journey in web development started with a
              curiosity about how websites work, and it has evolved into a
              dedicated pursuit of creating beautiful, functional, and
              user-friendly web experiences.
            </p>
            <p>
              I specialize in building responsive, component-based applications
              using React and other modern frameworks. My approach combines
              clean code, attention to detail, and a focus on user experience to
              deliver solutions that not only look great but also perform
              exceptionally.
            </p>
            <p>
              When I'm not coding, I'm constantly learning new technologies and
              best practices to stay at the forefront of web development. I
              believe in writing maintainable code and following industry
              standards to ensure scalability and long-term success.
            </p>
          </div>
        </div>

        <div ref={(el) => addSectionRef(el, 2)} className="mb-12">
          <h2 className="text-4xl font-bold mb-8 text-center text-[#5D866C]">
            Experience
          </h2>
          <div className="space-y-6">
            {workExperience.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-[#5D866C] font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-gray-600 font-medium mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div ref={(el) => addSectionRef(el, 3)} className="mb-12">
          <h2 className="text-4xl font-bold mb-8 text-center text-[#5D866C]">
            Education
          </h2>
          <div className="space-y-6">
            {myEducation.map((edu, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-[#5D866C] font-semibold">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-gray-600 font-medium mt-2 md:mt-0">
                    {edu.period}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={(el) => addSectionRef(el, 4)}
          className="bg-gradient-to-r from-[#5D866C] to-fuchsia-700 rounded-2xl p-8 md:p-12 text-white"
        >
          <h2 className="text-4xl font-bold mb-8 text-center">
            Key Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {myAchievements.map((achievement, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-lg p-4"
              >
                <i className="ri-checkbox-circle-fill text-2xl" />
                <span className="text-lg">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

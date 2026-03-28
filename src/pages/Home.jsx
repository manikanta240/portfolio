import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImg from "../assets/mine2.png";

gsap.registerPlugin(ScrollTrigger);

function splitTextIntoLetters(text) {
  return text.split("").map((char, i) => (
    <span key={i} className="inline-block">
      {char}
    </span>
  ));
}

const Home = () => {
  const mainContainer = useRef(null);
  const textWrapper = useRef(null);
  const profileImage = useRef(null);
  const socialIconsWrapper = useRef(null);
  const nameHeading = useRef(null);
  const roleHeading = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (profileImage.current) {
        gsap.from(profileImage.current, {
          x: 200,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
        });
      }

      const nameLetters = nameHeading.current?.querySelectorAll(".letter");
      if (nameLetters) {
        gsap.from(nameLetters, {
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 0.05,
          ease: "power4.out",
          delay: 0.4,
        });
      }

      if (roleHeading.current?.children) {
        gsap.from(roleHeading.current.children, {
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 0.04,
          ease: "power4.out",
          delay: 1.1,
        });
      }

      if (socialIconsWrapper.current?.children) {
        gsap.from(socialIconsWrapper.current.children, {
          scale: 0,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          delay: 1.4,
        });
      }

      if (profileImage.current && mainContainer.current) {
        gsap.to(profileImage.current, {
          y: -50,
          scrollTrigger: {
            trigger: mainContainer.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, mainContainer);

    return () => ctx.revert();
  }, []);

  const socialMedia = [
    { icon: "ri-linkedin-box-fill", url: "https://linkedin.com" },
    { icon: "ri-github-fill", url: "https://github.com" },
    { icon: "ri-twitter-x-line", url: "https://twitter.com" },
    { icon: "ri-instagram-line", url: "https://instagram.com" },
  ];

  return (
    <section
      ref={mainContainer}
      className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 py-20 gap-12"
    >
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          ref={profileImage}
          src={profileImg}
          alt="Seelam Naga Manikanta"
          className="h-[500px] md:h-[500px] rounded-2xl shadow-2xl"
        />
      </div>

      <div ref={textWrapper} className="w-full md:w-1/2 space-y-6">
        <h4 className="text-2xl text-gray-600 uppercase">Hello! I am</h4>

        <h1
          ref={nameHeading}
          className="flex flex-wrap text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#5D866C] to-fuchsia-700 bg-clip-text text-transparent"
        >
          <span className="flex mr-2">
            {"SEELAM".split("").map((letter, idx) => (
              <span key={idx} className="letter inline-block">
                {letter}
              </span>
            ))}
          </span>

          <span className="flex mr-2">
            {"NAGA".split("").map((letter, idx) => (
              <span key={idx} className="letter inline-block">
                {letter}
              </span>
            ))}
          </span>

          <span className="flex whitespace-nowrap">
            {"MANIKANTA".split("").map((letter, idx) => (
              <span key={idx} className="letter inline-block">
                {letter}
              </span>
            ))}
          </span>
        </h1>

        <h3 className="text-2xl text-gray-600 uppercase">And I am a</h3>

        <h2
          ref={roleHeading}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-fuchsia-700 to-[#5D866C] bg-clip-text text-transparent"
        >
          {splitTextIntoLetters("WEB DEVELOPER")}
        </h2>

        <p className="text-lg text-gray-700 max-w-xl">
          A passionate web developer who builds fast, interactive, and modern
          web experiences using cutting-edge technologies.
        </p>

        <div ref={socialIconsWrapper} className="flex gap-6 mt-6">
          {socialMedia.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="text-3xl hover:scale-125 transition"
            >
              <i className={social.icon} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;

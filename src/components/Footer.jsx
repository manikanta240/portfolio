import React, { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);

  useGSAP(() => {
    if (!footerRef.current) return;
    const blocks = footerRef.current.querySelectorAll(".footer-reveal");
    gsap.from(blocks, {
      y: 36,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 92%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/About", label: "About" },
    { to: "/Skill", label: "Skills" },
    { to: "/Projects", label: "Projects" },
    { to: "/Contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      icon: "ri-linkedin-box-fill",
      url: "https://linkedin.com",
      label: "LinkedIn",
    },
    { icon: "ri-github-fill", url: "https://github.com", label: "GitHub" },
    {
      icon: "ri-twitter-x-line",
      url: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: "ri-instagram-line",
      url: "https://instagram.com",
      label: "Instagram",
    },
  ];

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-r from-[#5D866C] to-fuchsia-700 text-white py-12 px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="footer-reveal">
            <h3 className="text-2xl font-bold mb-4">Seelam Naga Manikanta</h3>
            <p className="text-white/85 leading-relaxed">
              Full stack web developer building polished interfaces, APIs, and
              reliable data layers — from idea to production.
            </p>
          </div>

          <div className="footer-reveal">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-reveal">
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <i className={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-reveal border-t border-white/20 pt-8 text-center">
          <p className="text-white/85">
            © {currentYear} Seelam Naga Manikanta. All rights reserved.
          </p>
          <p className="text-white/65 text-sm mt-2">
            Built with React, GSAP, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

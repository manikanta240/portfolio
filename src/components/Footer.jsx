import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-gradient-to-r from-[#5D866C] to-fuchsia-700 text-white py-12 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
            <p className="text-white/80 leading-relaxed">
              A passionate web developer creating exceptional digital experiences.
            </p>
          </div>

          <div>
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

          <div>
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

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80">
            © {currentYear} Seelam Naga Manikanta. All rights reserved.
          </p>
          <p className="text-white/60 text-sm mt-2">
            Built with React, GSAP, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

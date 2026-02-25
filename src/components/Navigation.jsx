import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    if (navRef.current) {
      gsap.from(navRef.current.children, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    }
  }, [location.pathname]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/About", label: "About" },
    { to: "/Skill", label: "Skills" },
    { to: "/Projects", label: "Projects" },
    { to: "/Contact", label: "Contact" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center space-x-2 group">
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#5D866C] to-fuchsia-700 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              PORTFOLIO
            </span>
          </NavLink>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-[#5D866C]"
                      : "text-gray-700 hover:text-[#5D866C]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#5D866C] to-fuchsia-700" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-700 hover:text-[#5D866C] transition-colors"
          aria-label="Toggle menu"
        >
          <i
            className={`text-2xl ${
              isMobileMenuOpen ? "ri-close-line" : "ri-menu-line"
            }`}
          />
        </button>
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors ${
                    isActive
                      ? "text-[#5D866C] border-l-4 border-[#5D866C] pl-4"
                      : "text-gray-700 hover:text-[#5D866C] pl-4"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

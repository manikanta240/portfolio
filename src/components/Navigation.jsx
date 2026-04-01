import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const brandRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    if (!navRef.current) return;
    gsap.from(navRef.current.querySelectorAll(".nav-animate"), {
      y: -40,
      opacity: 0,
      duration: 0.65,
      stagger: 0.08,
      ease: "power3.out",
    });
  }, { dependencies: [location.pathname], revertOnUpdate: true });

  useGSAP(() => {
    if (!brandRef.current) return;
    gsap.to(brandRef.current, {
      backgroundPosition: "200% center",
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/About", label: "About" },
    { to: "/Skill", label: "Skills" },
    { to: "/Projects", label: "Projects" },
    { to: "/Contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div ref={navRef} className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between gap-3">
          <NavLink
            to="/"
            className="nav-animate flex items-center min-w-0 group"
          >
            <span
              ref={brandRef}
              className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#5D866C] via-fuchsia-600 to-[#5D866C] bg-[length:200%_auto] bg-clip-text text-transparent group-hover:scale-[1.02] transition-transform"
            >
              Portfolio
            </span>
          </NavLink>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `nav-animate relative text-sm font-medium transition-colors duration-300 ${
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
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 origin-left rounded-full bg-gradient-to-r from-[#5D866C] to-fuchsia-700 scale-x-100 motion-safe:transition-transform" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="nav-animate md:hidden shrink-0 text-gray-700 hover:text-[#5D866C] transition-colors"
            aria-label="Toggle menu"
          >
            <i
              className={`text-2xl ${
                isMobileMenuOpen ? "ri-close-line" : "ri-menu-line"
              }`}
            />
          </button>
        </div>
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

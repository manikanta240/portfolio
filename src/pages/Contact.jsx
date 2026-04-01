import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const contactForm = useRef(null);
  const headerRef = useRef(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
        tl.from(headerRef.current.querySelector(".contact-title"), {
          y: 48,
          opacity: 0,
          filter: "blur(8px)",
          duration: 0.75,
          ease: "power4.out",
        })
          .from(
            headerRef.current.querySelector(".contact-rule"),
            { scaleX: 0, duration: 0.45, ease: "power2.out" },
            "-=0.4"
          )
          .from(
            headerRef.current.querySelector(".contact-sub"),
            { y: 24, opacity: 0, duration: 0.6 },
            "-=0.3"
          );
      }

      if (contactForm.current?.children) {
        gsap.from(contactForm.current.children, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        });
      }

      gsap.from(".contact-info", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const updateForm = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      alert("Thank you for your message! I'll get back to you soon.");
      setFormState({ name: "", email: "", subject: "", message: "" });
      setSubmitting(false);
    }, 1000);
  };

  const contactDetails = [
    {
      icon: "ri-mail-line",
      label: "Email",
      value: "nagamanikantaseelam@gmail.com",
      link: "mailto:nagamanikantaseelam@gmail.com",
    },
    {
      icon: "ri-phone-line",
      label: "Phone",
      value: "6305460008",
      link: "tel:+916305460008",
    },
    {
      icon: "ri-map-pin-line",
      label: "Location",
      value: "Markapuram, Andhra Pradesh, India",
      link: "#",
    },
  ];

  const socialMediaLinks = [
    {
      icon: "ri-linkedin-box-fill",
      url: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: "ri-github-fill",
      url: "https://github.com",
      label: "GitHub",
      color: "hover:text-gray-800",
    },
    {
      icon: "ri-twitter-x-line",
      url: "https://twitter.com",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
    {
      icon: "ri-instagram-line",
      url: "https://instagram.com",
      label: "Instagram",
      color: "hover:text-pink-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen w-full py-20 px-6 md:px-10 lg:px-16 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"
    >
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <h1 className="contact-title text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#5D866C] to-fuchsia-700 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <div className="contact-rule w-24 h-1 bg-gradient-to-r from-[#5D866C] to-fuchsia-700 mx-auto mb-6 origin-center rounded-full" />
          <p className="contact-sub text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you — Seelam Naga Manikanta, full stack web developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="contact-info space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Let's Connect
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out
                through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactDetails.map((info, idx) => (
                <a
                  key={idx}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#5D866C] to-fuchsia-700 rounded-lg flex items-center justify-center">
                    <i className={`${info.icon} text-2xl text-white`} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    <p className="text-lg font-semibold text-gray-800">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socialMediaLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl text-gray-600 ${social.color} shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110`}
                    aria-label={social.label}
                  >
                    <i className={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <form ref={contactForm} onSubmit={submitForm} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={updateForm}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D866C] focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={updateForm}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D866C] focus:border-transparent outline-none transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={updateForm}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D866C] focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={updateForm}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D866C] focus:border-transparent outline-none transition-all duration-300 resize-none"
                  placeholder="Your Message"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#5D866C] to-fuchsia-700 text-white rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <i className="ri-loader-4-line animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <i className="ri-send-plane-fill" />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const logoRef = useRef(null);
  const menuRef = useRef([]);
  const mobileMenuRef = useRef([]);
  const mobileMenuContainer = useRef(null);

  // Desktop & Logo Animation
  useEffect(() => {
    gsap.from(logoRef.current, {
      y: -20,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(menuRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "back.out(1.7)",
    });
  }, []);

  // Mobile Menu Animation
  useEffect(() => {
    if (isOpen) {
      gsap.from(mobileMenuContainer.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.from(mobileMenuRef.current, {
        x: -20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.12,
        ease: "power3.out",
      });
    }
  }, [isOpen]);

  return (
    <nav className="bg-[#0a0f2c] shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        
        {/* Logo */}
        <h1 ref={logoRef} className="text-2xl font-bold tracking-wide">
         <img src="./assets/logo_ps.png" alt="Logo" className="w-10 h-10 inline-block mr-2"/>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium uppercase">
          {["About", "Experience", "Skills", "Education", "Blogs", "Projects"].map(
            (item, index) => (
              <li
                key={item}
                ref={(el) => (menuRef.current[index] = el)}
              >
                <a href={`#${item.toLowerCase()}`} className="hover:text-yellow-400 transition">
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul
          ref={mobileMenuContainer}
          className="md:hidden px-6 py-4 space-y-4 text-white text-sm font-medium uppercase border-t border-blue-800"
        >
          {["About", "Experience", "Skills", "Education", "Blogs", "Projects"].map(
            (item, index) => (
              <li
                key={item}
                ref={(el) => (mobileMenuRef.current[index] = el)}
              >
                <a href={`#${item.toLowerCase()}`} className="block hover:text-yellow-400">
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;

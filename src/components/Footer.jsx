import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0f2c] text-white py-6 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="./assets/logo_ps.png"
            alt="Logo"
            className="w-8 h-8"
          />
          <h2 className="text-lg font-semibold tracking-wide">PS Portfolio</h2>
        </div>

        {/* Quick Links */}
        <ul className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          {["About", "Experience", "Skills", "Education", "Blogs", "Projects"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-yellow-400 transition"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Social Links */}
        <div className="flex gap-4 text-sm">
          <a href="https://github.com/" target="_blank" className="hover:text-yellow-400">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" className="hover:text-yellow-400">LinkedIn</a>
          <a href="mailto:example@gmail.com" className="hover:text-yellow-400">Email</a>
        </div>
      </div>

      <p className="text-center text-gray-400 text-xs mt-6">
        © {new Date().getFullYear()} Priyanshu Singh. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

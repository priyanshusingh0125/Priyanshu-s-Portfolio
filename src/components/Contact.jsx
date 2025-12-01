import React from "react";
import ContactForm from "./ContactForm";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaStackOverflow,
  FaFacebook,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="contact" className="bg-[#0a0f2c]">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center px-4 md:px-6 py-16 md:py-20 text-white">

        {/* Section Title */}
        <div className="relative flex items-center justify-center w-full mb-10 md:mb-12">
          <div className="absolute h-[2px] bg-[#1b1440] w-[40%]"></div>
          <div className="relative bg-[#1b1440] px-6 py-2 rounded-lg z-10">
            <h2 className="text-xl md:text-2xl font-semibold">Contact</h2>
          </div>
        </div>

        {/* Main Section */}
        <section className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-12">

          {/* Left - Contact Form */}
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>

          {/* Right - Contact Details */}
          <div className="w-full md:w-1/2 text-white space-y-8">

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1b254b] flex items-center justify-center">
                <span className="text-xl">@</span>
              </div>
              <p className="text-lg break-words">priyanshusingh0125@gmail.com</p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1b254b] flex items-center justify-center">
                📞
              </div>
              <p className="text-lg">8303074635</p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1b254b] flex items-center justify-center">
                📍
              </div>
              <p className="text-lg">Kaushambi, Ghaziabad UP 201010</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 pt-3 flex-wrap">

              <a
                href="https://github.com/"
                target="_blank"
                className="w-12 h-12 rounded-full bg-[#1b254b] flex items-center justify-center hover:bg-[#2b3a6f] transition"
              >
                <FaGithub className="text-2xl" />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                className="w-12 h-12 rounded-full bg-[#1b254b] flex items-center justify-center hover:bg-[#2b3a6f] transition"
              >
                <FaLinkedin className="text-2xl" />
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                className="w-12 h-12 rounded-full bg-[#1b254b] flex items-center justify-center hover:bg-[#2b3a6f] transition"
              >
                <FaXTwitter className="text-2xl" />
              </a>

              <a
                href="https://stackoverflow.com/"
                target="_blank"
                className="w-12 h-12 rounded-full bg-[#1b254b] flex items-center justify-center hover:bg-[#2b3a6f] transition"
              >
                <FaStackOverflow className="text-2xl" />
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                className="w-12 h-12 rounded-full bg-[#1b254b] flex items-center justify-center hover:bg-[#2b3a6f] transition"
              >
                <FaFacebook className="text-2xl" />
              </a>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;

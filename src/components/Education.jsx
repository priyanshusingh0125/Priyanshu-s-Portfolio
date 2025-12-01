import React, { useState } from "react";
import Lottie from "lottie-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import profilePic from "/public/assets/profile.png";

const AccordionItem = ({ title, company, duration, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="w-full bg-[#111936] rounded-2xl p-7 shadow-lg border border-white/10 transition-all"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Top Row */}
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="text-purple-400 text-4xl">
            <i className="fas fa-user"></i>
          </div>

          <div>
            <p className="text-green-300 mb-1">{duration}</p>
            <h2 className="text-white text-xl font-semibold">{title}</h2>
            <p className="text-gray-300">{company}</p>
          </div>
        </div>

        {/* Arrow Animation */}
        <div
          className={`text-white text-xl transform transition-all ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>

      {/* Hover Accordion Body */}
      <div
        className={`transition-all overflow-hidden ${
          open ? "max-h-96 mt-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-300 leading-relaxed">{children}</p>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div id="education" className="bg-[#0a0f2c] flex flex-col items-center justify-center px-6 py-20 text-white w-full">
      {/* Section Title */}
      <div className="relative flex items-center justify-center w-full mb-12">
        <div className="absolute h-[2px] bg-[#1b1440] w-[30%]"></div>
        <div className="relative bg-[#1b1440] px-8 py-2 rounded-lg z-10">
          <h2 className="text-2xl md:text-2xl font-semibold">Educations</h2>
        </div>
      </div>

      {/* Main Section */}
      <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Column */}
       <div className="md:w-1/2 flex justify-center">
  <div className="w-full w-[700px] h-[700px] max-w-[700px] sm:max-w-[600px] md:max-w-[700px]">
    <DotLottieReact
      src="https://lottie.host/229debaa-a0cf-4c10-b111-e2a7193b69d7/sqWpQwc1kL.lottie"
      loop
      autoplay
    />
  </div>
</div>

        {/* Right Column */}
        <div className="md:w-1/2 flex flex-col items-center gap-7 w-full">

          <AccordionItem
            duration="2019 - 2023"
            title="Bachelor of Engineering (B.E)"
            company="Institute of Engineering and Technology, Khandari Agra"
          >
            Computer Science and Engineering — CGPA: 7.8
          </AccordionItem>

          <AccordionItem
            duration="2018 - 2019"
            title="Intermediate (PCM)"
            company="Dr. Savita Memorial Global Academy, Chunar Mirzapur"
          >
            Completed Intermediate with Physics, Chemistry, and Mathematics.
          </AccordionItem>

          <AccordionItem
            duration="2016 - 2017"
            title="High School (Science)"
            company="Dr. Savita Memorial Global Academy, Chunar Mirzapur"
          >
            Completed High School with a focus on Science stream.
          </AccordionItem>
        </div>
      </section>
    </div>
  );
};

export default Education;

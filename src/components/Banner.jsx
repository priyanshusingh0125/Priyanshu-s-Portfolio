import React, { useEffect, useRef } from 'react'
import profilePic from '/public/assets/profile.png'
import gsap from "gsap";
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Banner = () => {

  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(containerRef.current.children, {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto text-white py-20 px-6 mt-16 flex gap-5 flex-col md:flex-row items-center justify-between min-h-screen">

      {/* Left Side - Text */}
      <div ref={containerRef} className="text-center md:text-left md:w-1/2 space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-5xl 
                       font-bold leading-snu">
          Hello, <br />
          This is <span className="text-cyan-400">Priyanshu Singh</span>, <br />
          I&apos;m a Professional <span className="text-violet-400">Software Developer</span>
        </h1>

        <p className="text-lg text-gray-200 max-w-md">
          Building modern, scalable, and efficient web applications with passion and precision.
        </p>

        {/* Social Icons */}
<div className="flex justify-center md:justify-start space-x-4 mt-4">

  {/* LinkedIn */}
  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0d1117] 
                  border border-cyan-500 text-cyan-400 text-2xl shadow-[0_4px_15px_rgba(34,211,238,0.4)]
                  hover:scale-110 hover:shadow-[0_6px_20px_rgba(34,211,238,0.6)] 
                  transition-all duration-300 cursor-pointer">
    <FaLinkedinIn />
  </div>

  {/* GitHub */}
  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0d1117] 
                  border border-gray-500 text-gray-300 text-2xl shadow-[0_4px_15px_rgba(255,255,255,0.2)]
                  hover:scale-110 hover:shadow-[0_6px_20px_rgba(255,255,255,0.4)] 
                  transition-all duration-300 cursor-pointer">
    <FaGithub />
  </div>

  {/* X (Twitter) */}
  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0d1117] 
                  border border-gray-400 text-gray-200 text-2xl shadow-[0_4px_15px_rgba(255,255,255,0.25)]
                  hover:scale-110 hover:shadow-[0_6px_20px_rgba(255,255,255,0.4)] 
                  transition-all duration-300 cursor-pointer">
    <FaXTwitter />
  </div>

  {/* Instagram */}
  <div className="w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-br from-pink-500 to-yellow-500 text-white text-2xl 
                  shadow-[0_4px_15px_rgba(255,0,128,0.4)]
                  hover:scale-110 hover:shadow-[0_6px_20px_rgba(255,0,128,0.6)] 
                  transition-all duration-300 cursor-pointer">
    <FaInstagram />
  </div>

  {/* Facebook */}
  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0d1117] 
                  border border-blue-500 text-blue-400 text-2xl shadow-[0_4px_15px_rgba(59,130,246,0.4)]
                  hover:scale-110 hover:shadow-[0_6px_20px_rgba(59,130,246,0.6)] 
                  transition-all duration-300 cursor-pointer">
    <FaFacebookF />
  </div>

</div>


        <div className="mt-6 flex justify-center md:justify-start space-x-4">
          <button className="bg-cyan-400 text-blue-900 font-semibold px-6 py-2 rounded-full hover:bg-cyan-500 transition">
            Hire Me
          </button>
          <button className="border-2 border-cyan-400 text-cyan-400 font-semibold px-6 py-2 rounded-full hover:bg-cyan-400 hover:text-blue-900 transition">
            View Projects
          </button>
        </div>
      </div>

      {/* Right Side - Image / Code Window */}
      <div className="bg-[#111827] w-full max-w-2xl rounded-xl shadow-xl border border-[#232b44] overflow-hidden mt-12 md:mt-0">

        {/* Top Bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1f2937] border-b border-[#232b44]">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>

        {/* Code Area */}
        <pre className="p-5 text-[15px] font-mono leading-7 overflow-x-auto">
  <code>
    <span className="text-purple-400">const</span>{" "}
    <span className="text-blue-400">coder</span>{" "}
    <span className="text-purple-400">=</span>{" "}
    <span className="text-yellow-400">&#123;</span>
    {"\n"}  <span className="text-green-400">name</span>
    <span className="text-purple-400">:</span>{" "}
    <span className="text-pink-400">'Priyanshu Singh'</span>,
    {"\n"}  <span className="text-green-400">skills</span>
    <span className="text-purple-400">:</span>{" "}
    <span className="text-yellow-400">[</span>
    <span className="text-pink-400">'HTML'</span>,{" "}
    <span className="text-pink-400">'CSS'</span>,{" "}
    <span className="text-pink-400">'JavaScript'</span>,{" "}
    <span className="text-pink-400">'MySql'</span>,
    {"\n"}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span className="text-pink-400">'PHP'</span>,{" "}
    <span className="text-pink-400">'WordPress'</span>,{" "}
    <span className="text-pink-400">'React'</span>,{" "}
    <span className="text-pink-400">'Tailwind CSS'</span>
    <span className="text-yellow-400">]</span>,
    {"\n"}  <span className="text-green-400">hardWorker</span>
    <span className="text-purple-400">:</span>{" "}
    <span className="text-orange-400">true</span>,
    {"\n"}  <span className="text-green-400">quickLearner</span>
    <span className="text-purple-400">:</span>{" "}
    <span className="text-orange-400">true</span>,
    {"\n"}  <span className="text-green-400">problemSolver</span>
    <span className="text-purple-400">:</span>{" "}
    <span className="text-orange-400">true</span>,
    {"\n"}  <span className="text-green-400">hireable</span>
    <span className="text-purple-400">:</span>{" "}
    <span className="text-purple-400">function</span>(){" "}
    <span className="text-yellow-400">&#123;</span>
    {"\n"}    <span className="text-purple-400">return</span> (
    {"\n"}      <span className="text-blue-300">this</span>.hardWorker &&
    {"\n"}      <span className="text-blue-300">this</span>.problemSolver &&
    {"\n"}      <span className="text-blue-300">this</span>.skills.length{" "}
    <span className="text-purple-400">&gt;=</span> 5
    {"\n"}    );
    {"\n"}  <span className="text-yellow-400">&#125;</span>
    {"\n"}<span className="text-yellow-400">&#125;</span>;
  </code>
</pre>


      </div>
    </section>
  )
}

export default Banner

import React, { useEffect, useRef } from "react";
import profilePic from "/public/assets/about-img.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Mousemove Parallax Effect
    const handleMove = (e) => {
      gsap.to(imgRef.current, {
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMove);

    // Cleanup on unmount
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    // Image Animation
    gsap.from(imgRef.current, {
      opacity: 0,
      x: -80,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      },
    });

    // Text Animation
    gsap.from(textRef.current, {
      opacity: 0,
      y: 60,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <div id="about" className="bg-[#0a0f2c] flex flex-col items-center justify-center px-6 py-20 text-white">

      {/* Section Title */}
      <div className="relative flex items-center justify-center w-full mb-12">
        <div className="absolute h-[2px] bg-[#1b1440] w-[30%]"></div>
        <div className="relative bg-[#1b1440] px-8 py-2 rounded-lg z-10">
          <h2 className="text-2xl md:text-2xl font-semibold">About Me</h2>
        </div>
      </div>

      {/* Main Section */}
      <section
        ref={sectionRef}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
      >

        {/* Left Side - Image */}
        <div className="d:w-1/2 flex lg:justify-start justify-center">
          <img
            ref={imgRef}
            src={profilePic}
            alt="Priyanshu Singh"
            className="w-56 h-64 md:w-72 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div
          ref={textRef}
          className="text-center md:text-left lg:p-8 md:w-1/2 space-y-6"
        >
          <h3 className="text-3xl font-bold leading-snug">Who I Am</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            My name is Priyanshu Singh. I am a professional and enthusiastic programmer in my daily life.
            I am a quick learner with a self-learning attitude. I love to learn and explore new technologies
            and am passionate about problem-solving. I love almost all the stacks of web application
            development and love to make the web more open to the world. My core skill is based on
            JavaScript and I love to do most of the things using JavaScript. I am available for any kind of
            job opportunity that suits my skills and interests.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

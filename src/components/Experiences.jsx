import React, { useState, useRef, useEffect } from "react";

const AccordionItem = ({ title, company, duration, children }) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const bodyRef = useRef(null);

  useEffect(() => {
    if (open) {
      setHeight(`${bodyRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [open]);

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

        {/* Arrow */}
        <div
          className={`text-white text-xl transform transition-all duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>

      {/* Smooth Body Animation */}
      <div
        ref={bodyRef}
        style={{
          maxHeight: height,
          transition: "max-height 0.45s ease, margin-top 0.3s ease",
        }}
        className={`overflow-hidden ${open ? "mt-5" : "mt-0"}`}
      >
        <p className="text-gray-300 leading-relaxed">{children}</p>
      </div>
    </div>
  );
};

const Experiences = () => {
  return (
    <div id="experience" className=" flex flex-col items-center justify-center px-6 py-20 text-white w-full">

      {/* Section Title */}
      <div className="relative flex items-center justify-center w-full mb-12">
        <div className="absolute h-[2px] bg-[#1b1440] w-[30%]"></div>
        <div className="relative bg-[#1b1440] px-8 py-2 rounded-lg z-10">
          <h2 className="text-2xl md:text-2xl font-semibold">Experiences</h2>
        </div>
      </div>

      {/* Main Section → Responsive Grid */}
      <section className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Column 1 */}
        <div className="w-full">
          <AccordionItem
            duration="(March 2025 - Present)"
            title="WEB DEVELOPER"
            company="ITIO Innovex Pvt. Ltd. - Kaushambi, Ghaziabad"
          >
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">➜</span>
                <span>
                  Developed responsive UI using <strong>HTML, CSS, Tailwind,
                    Bootstrap, and JavaScript</strong>.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">➜</span>
                <span>
                  Built dynamic backend features using <strong>PHP & MySQL</strong>.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">➜</span>
                <span>
                  Created and customized <strong>WordPress themes & plugins</strong>.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">➜</span>
                <span>
                  Managed website deployment and maintenance using <strong>FTP</strong>.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">➜</span>
                <span>
                  Worked collaboratively using <strong>Git & GitHub</strong>.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">➜</span>
                <span>Enhanced UI/UX and optimized performance.</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">➜</span>
                <span>Delivered scalable production-ready features.</span>
              </li>
            </ul>
          </AccordionItem>
        </div>

        {/* Column 2 */}
        <div className="w-full">
          <AccordionItem
            duration="(July 2024 - Feb 2025)"
            title="WEB DEVELOPER"
            company="SSMS Software Solutions Pvt. Ltd. - Roorkee, Uttarakhand"
          >
            <ul className="space-y-1">

              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">➜</span>
                <span>Developed responsive UIs using <strong>HTML, CSS, JavaScript, Tailwind</strong> & <strong>React</strong>.</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">➜</span>
                <span>Built backend logic and APIs with <strong>PHP & MySQL</strong>.</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">➜</span>
                <span>Customized <strong>WordPress</strong> themes, plugins, and dashboards.</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">➜</span>
                <span>Converted UI/UX designs from <strong>Figma</strong> into pixel-perfect layouts.</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">➜</span>
                <span>Optimized performance and delivered complete end-to-end web solutions.</span>
              </li>

            </ul>
          </AccordionItem>
        </div>

        {/* Column 3 */}
        <div className="w-full">
          <AccordionItem
            duration="(Aug 2022 - Dec 2022)"
            title="WEB DEVELOPMENT INTERN"
            company="TensileTech - Remote"
          >
            <ul className="space-y-2">

              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">➜</span>
                <span>Successfully completed an intensive <strong>6-week training program</strong> including assignments and a full Portfolio Website project.</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">➜</span>
                <span>Gained strong hands-on experience in <strong>HTML, CSS, JavaScript, Bootstrap, and PHP</strong> through practical development tasks.</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">➜</span>
                <span>Built a fully responsive and functional <strong>Portfolio Website</strong> from scratch as the final project.</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">➜</span>
                <span>Worked on strengthening <strong>core development concepts</strong> including DOM manipulation, layout systems, components, and backend form handling.</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">➜</span>
                <span>Improved essential soft skills such as <strong>Teamwork, Logical Thinking, and Communication</strong> through collaborative tasks and presentations.</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">➜</span>
                <span>Completed all weekly tasks, code reviews, and performance evaluations with consistency and dedication.</span>
              </li>

            </ul>
          </AccordionItem>
        </div>

        {/* Column 4 */}
        <div className="w-full">
          <AccordionItem
            duration="(Aug 2022 - Oct 2022)"
            title="WEB DEVELOPMENT INTERN"
            company="Baskethunt Pvt. Ltd. - Sahibganj, Jharkhand, India"
          >
            <ul className="space-y-2">

              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">➜</span>
                <span>Completed an additional <strong>1-week intensive training</strong> focused on modern web development skills and new internet technologies.</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">➜</span>
                <span>Developed multiple <strong>responsive web pages</strong> and contributed to documentation required for internal projects.</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">➜</span>
                <span>Worked on various <strong>company applications and real-world projects</strong>, improving both UI and functionality.</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">➜</span>
                <span>Strengthened core development skills in <strong>HTML, CSS, JavaScript, Bootstrap, and PHP</strong> through practical tasks.</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">➜</span>
                <span>Enhanced essential soft skills including <strong>Teamwork, Logical Thinking, and Communication</strong>.</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-400 text-lg">➜</span>
                <span>Collaborated effectively with developers and mentors at <strong>Baskethunt Pvt. Ltd., Sahibganj (Jharkhand)</strong>.</span>
              </li>

            </ul>
          </AccordionItem>
        </div>

      </section>
    </div>
  );
};

export default Experiences;

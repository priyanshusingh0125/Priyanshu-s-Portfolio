import Project_card from './Project_card.jsx'

const Projects = props => {
  return (

    <div id="projects" className="flex flex-col items-center justify-center px-6 py-20 text-white">
{/* Section Title */}
      <div className="relative flex items-center justify-center w-full mb-12">
        <div className="absolute h-[2px] bg-[#1b1440] w-[30%]"></div>
        <div className="relative bg-[#1b1440] px-8 py-2 rounded-lg z-10">
          <h2 className="text-2xl md:text-2xl font-semibold">Projects</h2>
        </div>
      </div>
    <section className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

    <div>
        <Project_card
        img="./assets/project-1.png"
        title="My Portfolio Website"
        desc="A modern portfolio built using React, Tailwind CSS, and animations."
        tech={["react", "tailwind"]}
        liveLink="https://yourwebsite.com"
        githubLink="https://github.com/yourrepo"
      />
    </div>

    <div>
        <Project_card
        img="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="My Portfolio Website"
        desc="A modern portfolio built using React, Tailwind CSS, and animations."
        tech={["react", "tailwind"]}
        liveLink="https://yourwebsite.com"
        githubLink="https://github.com/yourrepo"
      />
    </div>

    <div>
        <Project_card
        img="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="My Portfolio Website"
        desc="A modern portfolio built using React, Tailwind CSS, and animations."
        tech={["react", "tailwind"]}
        liveLink="https://yourwebsite.com"
        githubLink="https://github.com/yourrepo"
      />
    </div>

      </section>
    </div>
  )
}

export default Projects

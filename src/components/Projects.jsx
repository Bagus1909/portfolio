import React from "react"
import noteapp from "/noteapp.png"
import citroen_jogja from "/citroen_jogja.png"
import mitsubishi_jogja from "/mitsubishi_jogja.png"
import { motion } from "framer-motion"

const projectsData = [
  {
    image: noteapp,
    title: "Note App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio distinctio dolores accusamus dolorem fugit nemo magnam enim cupiditate, fuga odio vitae deserunt quae quibusdam aspernatur ratione rerum quod repellat provident?",
    technologies: ["React.js", "Express", "Node.js", "MongoDB"],
  },

  {
    image: mitsubishi_jogja,
    title: "Mitsubishi Jogja",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio distinctio dolores accusamus dolorem fugit nemo magnam enim cupiditate, fuga odio vitae deserunt quae quibusdam aspernatur ratione rerum quod repellat provident?",
    technologies: ["PHP", "Laravel", "JavaScript", "Bootstrap", "MySQL"],
  },
  {
    image: citroen_jogja,
    title: "Citroen-Jogja",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio distinctio dolores accusamus dolorem fugit nemo magnam enim cupiditate, fuga odio vitae deserunt quae quibusdam aspernatur ratione rerum quod repellat provident?",
    technologies: ["React", "Tailwind", "Framer Motion"],
  },
]

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}>
      {children}
    </motion.div>
  )
}

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
        <img
          src={project.image}
          alt=''
          className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]'
        />
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-3'>
            <div className='text-xl font-semibold'>{project.title}</div>
            <p className='text-gray-400'>{project.description}</p>
          </div>
          <div className='flex flex-wrap gap-5'>
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className='rounded-lg bg-black p-3'>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

const Projects = () => {
  return (
    <div
      id='projects'
      className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24'>
      <ScrollReveal>
        <h1 className='text-4xl font-light text-white md:text-6xl'>My Projects</h1>
      </ScrollReveal>
      <div className='flex w-full max-w-[1000px] flex-col gap-16 text-white'>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects

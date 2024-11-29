import { PROJECTS } from "../../constants/index"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"


const Projects = () => {
  return (
    <div className="pb-4 px-8 md:px-32">
        <motion.h2 className="mt-44 mb-20 text-center text-4xl"
                   whileInView={{opacity:1, y:0}}
                   initial={{opacity:0, y: -100}}
                   transition={{duration:1.5}}>
            Personal Projects
        </motion.h2>

        <div>
          {PROJECTS.map((project, index) => (
              <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
                <motion.div className="w-full lg:w-1/4"
                            whileInView={{opacity:1, x:0}}
                            initial={{opacity:1, x:-100}}
                            transition={{duration:1.5}}>
                    <Link to={project.link} target="_blank" className="">
                      <img src={project.image} 
                          width={250}
                          height={250}
                          alt={project.title} 
                          className="mb-6 rounded"
                          />
                    </Link>
                </motion.div>
                <motion.div className="w-full max-w-xl lg:w-3/4"
                            whileInView={{opacity:1, x:0}}
                            initial={{opacity:0, x:100}}
                            transition={{duration:1.5}}>
                    <h3 className="mb-2 font-semibold text-2xl">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-stone-400">{project.description}</p>
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300">
                        {tech}
                      </span>
                    ))}
                </motion.div>

              </div>
          ))}
        </div>
    </div>
  )
}

export default Projects
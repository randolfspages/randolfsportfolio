import { EXPERIENCES } from "../constants/"
import { motion } from "framer-motion"
import Headings from "./Headings";
import HorizontalLine from "./HorizontalLine";





const heading = 'Professional Experience';



const WorkExperience = () => {
    
  return (
    <div className="h-[100] px-2 md:px-32 pt-32 font-bold">
        <div>
        <h2 className="pb-12 pt-10 text-center text-4xl text-[#f2c854]">
            <Headings value={heading}/>
        </h2>
        </div>

        <div className="">
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div className="w-full lg:w-1/4"
                                whileInView={{opacity:1, x:0}}
                                initial={{opacity:0, x:-100}}
                                transition={{duration:1.5}}>
                        <p className="mb-2 text-sm text-stone-200">
                            {experience.year}
                        </p>
                    </motion.div>
                    <motion.div className="w-full max-w-xl lg:w-3/4"
                                whileInView={{opacity:1, x:0}}
                                initial={{opacity:0, x:100}}
                                transition={{duration:1.5}}>
                        <h3 className="mb-2 font-semibold">
                            {experience.role} - {" "}
                            <span className="text-sm text-stone-300">
                                {experience.company}
                            </span>
                        </h3>
                        <p className="mb-4 text-stone-300 font-medium">{experience.description}</p>
                        {experience.technologies.map((tech, index) => (
                            <span key={index} className="mr-2 mt-4 rounded bg-stone-700 px-2 py-1 text-sm font-medium text-stone-300">
                                {tech}
                            </span>
                            
                        ))}
                         <HorizontalLine />
                    </motion.div>
               
                    
                </div>
            ))}
            
        </div>
        
        
    </div>
  )
}

export default WorkExperience
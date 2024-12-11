import BackToTopButton from "./BackToTopButton"
import { EDUCATION } from "../constants/"
import Headings from "./Headings"
import { motion } from "framer-motion"
import HorizontalLine from "./HorizontalLine"



const heading = 'Education'


const Education = () => {
    
  return (
    <div className="h-[100] px-8 md:px-32 pb-10">
       
        <h2 className="split-word pb-16 pt-10 justify-center text-4xl text-[#f2c854] font-bold">
             <Headings value={heading} />
        </h2>
        
        
        <div>
            {EDUCATION.map((experience, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <motion.p 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1.5 }}
                            className="mb-2 text-sm text-white md:text-center font-bold">
                            {experience.year}
                        </motion.p>
                    </div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.5 }}
                        className="w-full max-w-xl lg:w-3/4">
                        <h3 className="mb-2 font-semibold">
                            {experience.role} - {" "}
                            <span className="text-sm text-stone-500">
                                {experience.company}
                            </span>
                        </h3>
                        <p className="mb-4 text-stone-400">{experience.description}</p>
                        <HorizontalLine />
                    </motion.div>
                    
                </div>
            ))}
        </div>
        <BackToTopButton />
        
    </div>
  )
}

export default Education
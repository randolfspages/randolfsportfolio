
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
      y: [10, -10],
      transition: {
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",

      }
  }
})

const SocialMedia = () => {
  return (
      <>
        <div className="flex justify-center items-center gap-4 mt-6">
            <Link to="https://github.com/randolfspages/" target="_blank">
            <motion.div
              initial='initial'
              animate='animate'
              variants={iconVariants(2.5)}
            ><FaSquareGithub className=" social-media " /></motion.div>
            </Link>
            
            <Link to="www.linkedin.com/in/randolf-aboateng-3b6b384b/" target="_blank">
            <motion.div
              initial='initial'
              animate='animate'
              variants={iconVariants(4)}
            ><FaLinkedin className=" social-media " /></motion.div>
            </Link>  
        </div>
      </>
    
  )
}

export default SocialMedia
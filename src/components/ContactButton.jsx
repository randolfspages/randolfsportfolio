
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'





const ContactButton = () => {
  

  

  return (
    <Link to='/contact'>
          <motion.button className='radial-gradient px-6 py-2 rounded-md relative m-8'
                   initial={{ "--x": "100%", scale: 1}}
                   animate={{ "--x": "-100%" }}
                   whileTap={{scale: 0.97}}
                   transition={{
                    repeat: Infinity, 
                    repeatType: "loop", 
                    repeatDelay:1, 
                    type:"spring", 
                    stiffness: 20, 
                    damping:15, 
                    mass:2,
                    scale: {
                        type: "spring",
                        stiffness: 10,
                        damping: 5,
                        mass: 0.1,
                    }}}>
        
          
            <span className='linear-mask text-[#f2c854] tracking-wide font-normal h-full w-full block relative'>
                Reach me
            </span>
    

        <span className='linear-overlay block absolute inset-0 rounded-md p-px'>

        </span>

    </motion.button>    
    </Link>
  )
}

export default ContactButton
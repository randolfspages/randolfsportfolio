import { Link } from "react-router-dom"
import { CONTACT } from "../../constants"
import { motion } from "framer-motion"
import WorkExperience from '../../components/WorkExperience'
import Image from '../../assets/personal-foto.png'

const Contact = () => {
  return (
    <div className="px-8 md:px-32 pb-20 pt-24">
      <motion.div className="m-10 flex items-center justify-center"
                 whileInView={{opacity:1, y:0}}
                 initial={{opacity:1, y:-100}}
                 transition={{duration:1.5}}>
                  <img src={Image} alt="" width={200} className="rounded-full"/>
      </motion.div>
      <div className="text-center tracking-tighter">
        <motion.p className="my-4"
                  whileInView={{opacity:1, x:0}}
                  initial={{opacity:0, x:-100}}
                  transition={{duration:1.5}}>
          {CONTACT.Name}
        </motion.p>
        <motion.p className="my-4"
                  whileInView={{opacity:1, x:0}}
                  initial={{opacity:0, x:-100}}
                  transition={{duration:1.5}}>
          {CONTACT.address}
        </motion.p>
        <motion.p className="my-4"
                  whileInView={{opacity:1, x:0}}
                  initial={{opacity:0, x:100}}
                  transition={{duration:1.5}}>
            {CONTACT.phoneNo}
        </motion.p>
        <motion.div whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:1.5}}>
                    <Link to="#">{CONTACT.email}</Link>
        </motion.div>
        
        <motion.div whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:1.5}}>
                    <Link to="#">{CONTACT.languagues}</Link>
        </motion.div>
        
      </div>
      <WorkExperience />
    </div>
   
  )
}

export default Contact
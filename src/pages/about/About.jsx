import { CONTACT } from "../../constants"
import { motion } from "framer-motion"
import WorkExperience from '../../components/WorkExperience'
import Image from '../../assets/personal-foto.png'
import SocialMedia from "../../components/SocialMedia"
import BgImage from "../../assets/image16.jpg"
import ContactButton from "../../components/ContactButton"
import Education from "../../components/Education"




const About = () => {
  return (
    <>
    
      <div className="h-[100vh] bgimage px-8 md:px-32 pt-32 text-lg"
    style={{backgroundImage:`url(${BgImage})`}}>
      <motion.div className="m-10 flex items-center justify-center"
                 whileInView={{opacity:1, y:0}}
                 initial={{opacity:1, y:-100}}
                 transition={{duration:1.5}}>
                  <img src={Image} alt="" width={200} className="rounded-full"/>
      </motion.div>
      <div className="text-center tracking-tighter">
        <motion.p className="my-4  text-xl font-bold"
                  whileInView={{opacity:1, x:0}}
                  initial={{opacity:0, x:-100}}
                  transition={{duration:1.5}}>
          {CONTACT.name}
        </motion.p>
        <motion.p className="my-4"
                  whileInView={{opacity:1, x:0}}
                  initial={{opacity:0, x:-100}}
                  transition={{duration:1.5}}>
          {CONTACT.role}
        </motion.p>

        <ContactButton />

        
        {/* <motion.p className="my-4"
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
        </motion.div> */}
        <SocialMedia />
      </div>
      <WorkExperience />
    <Education />
      </div>
      
    </>
   
    
   
  )
}

export default About;
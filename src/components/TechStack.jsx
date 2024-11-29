import { FaNodeJs } from 'react-icons/fa6';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { RiNextjsLine } from 'react-icons/ri';
import { SiRedux } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { IoLogoCss3 } from 'react-icons/io5';;
import { SiJest } from 'react-icons/si';
import { FRONT_EXPERTISE, } from '../constants';
import { motion } from 'framer-motion';
import TechStackList from './TechStackList';
// const iconVariants = (duration) => ({
//     initial: {y: -10},
//     animate: {
//         y: [10, -10],
//         transition: {
//             duration: duration,
//             ease: "linear",
//             repeat: Infinity,
//             repeatType: "reverse",

//         }
//     }
// })

const TechStack = () => {
  return (
    <div className="h-screen bg-black px-8 md:px-32 mt-8">
      <motion.h1
        className="text-center text-6xl bg-black p-5"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      >
        Tech Stack
      </motion.h1>

      <div className="flex flex-wrap">
        <motion.div
          className=""
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-start text-1xl text-white bg-black px-4 md:px-32">{FRONT_EXPERTISE}</h2>
          <div className="flex flex-wrap items-center justify-center gap-16 px-4 bg-black py-4">
            <motion.div className="flex flex-col justify-center items-center gap-4">
              <RiReactjsLine className="text-7xl text-cyan-600" />
              <p>React</p>
            </motion.div>

            <motion.div className="flex flex-col justify-center items-center gap-4">
              <RiNextjsLine className="text-7xl text-cyan-600" />
              <p>Next.js</p>
            </motion.div>

            <motion.div className="flex flex-col justify-center items-center gap-4">
              <SiRedux className="text-7xl text-cyan-600" />
              <p>Redux</p>
            </motion.div>

            <motion.div className="flex flex-col justify-center items-center gap-4">
              <IoLogoJavascript className="text-7xl text-cyan-600" />
              <p>JavaScript</p>
            </motion.div>

            <motion.div className="flex flex-col justify-center items-center gap-4">
              <IoLogoCss3 className="text-7xl text-green-500" />
              <p>CSS</p>
            </motion.div>

            <motion.div className="flex flex-col justify-center items-center gap-4">
              <SiJest className="text-7xl text-sky-700" />
              <p>Jest</p>
            </motion.div>
            <motion.div className="flex flex-col justify-center items-center gap-4">
              <FaNodeJs className="text-7xl text-cyan-600" />
              <p>Node JS</p>
            </motion.div>

            <motion.div className="flex flex-col justify-center items-center gap-4">
              <SiMongodb className="text-7xl text-cyan-600" />
              <p>Mongo DB</p>
            </motion.div>
          </div>
        </motion.div>

        {/* <motion.div
          className="w-full lg:w-1/2"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-white bg-black text-end text-1xl">{BACKEND_EXPERTISE}</h2>
          <div className="flex flex-wrap items-center justify-center gap-16 bg-black py-4">
            <motion.div className="flex flex-col justify-center items-center gap-4">
              <FaNodeJs className="text-7xl text-cyan-600" />
              <p>Node JS</p>
            </motion.div>

            <motion.div className="flex flex-col justify-center items-center gap-4">
              <SiMongodb className="text-7xl text-cyan-600" />
              <p>Mongo DB</p>
            </motion.div>

            <motion.div className="flex flex-col justify-center items-center gap-4">
              <SiPostman className="text-7xl text-cyan-600" />
              <p>Postman JS</p>
            </motion.div>

            <motion.div className="flex flex-col justify-center items-center gap-4">
              <BiLogoPostgresql className="text-7xl text-cyan-600" />
              <p>Postgre</p>
            </motion.div>

            <motion.div className="flex flex-col justify-center items-center gap-4">
              <DiRedis className="text-7xl text-red-600" />
              <p>Redis</p>
            </motion.div>
          </div>
        </motion.div> */}
      </div>
      <TechStackList />
    </div>
  );
};

export default TechStack;

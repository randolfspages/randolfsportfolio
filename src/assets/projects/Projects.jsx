import { PROJECTS } from '../../constants';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className="pb-4 px-8 md:px-32">
      <motion.h2
        className="mt-44 mb-20 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      >
        Personal Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
            <motion.div
              className="w-full lg:w-1/4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 1, x: -100 }}
              transition={{ duration: 1.5 }}
            >
              <Link to={project.link} target="_blank" className="">
                <img
                  src={project.image}
                  width={250}
                  height={250}
                  alt={project.title}
                  className="mb-6 rounded"
                />
              </Link>
            </motion.div>
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
            >
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <p className="mb-4 text-stone-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

// import { SUB_HERO1, SUB_HERO2, } from '../constants/index';
// import { motion } from 'framer-motion';
// import { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import card from '../../assets/tesla-feature-configurator.jpg';
// // import card1 from '../../assets/the-african-woman.jpg';
// // import card2 from '../../assets/job-listings-website.jpg';
// // import card3 from '../../assets/youtube-clone.jpg';
// // import card4 from '../../assets/amazon-clone.jpg';
// // import card5 from '../../assets/amazon-clone.jpg';

// const containerVariants = {
//   hidden: { opacity: 0, x: -100 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 1.5, staggerChildren: 0.5 },
//   },
// };

// const childVariants = {
//   hidden: { opacity: 0, x: -100 },
//   visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
// };

// const paragraphStyles = {
//   WebkitLineClamp: 1,
//   WebkitBoxOrient: 'vertical',
//   overflow: 'hidden',
//   display: '-webkit-box',
// };

// const Hero = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="border bg-cover bg-[url(/src/assets/bg-image11.jpg)] w-screen h-screen mt-24 px-4 md:px-4">
//       <div className="flex justify-center items-center">
//         {/* <Link className='card flex items-center flex-col gap-4'>
//                     <img className='' src={card} style={{width:'50px', height:'50px', objectFit:'cover', objectPosition:'left', borderTop:'1px solid gray', boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)'}}  alt="" />
//                     <span className=''>PIC</span>
//                 </Link>
//                 <Link className='card flex items-center flex-col gap-4'>
//                     <img className='' src={card1} style={{width:'50px', height:'50px', objectFit:'cover', objectPosition:'top', borderTop:'1px solid gray', boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)'}} alt="" />
//                     <span className=''>PIC</span>
//                 </Link>
//                 <Link className='card flex items-center flex-col gap-4'>
//                     <img className='' src={card2} style={{width:'50px', height:'50px', objectFit:'cover', objectPosition:'left', borderTop:'1px solid gray', boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)'}} alt="" />
//                     <span className=''>PIC</span>
//                 </Link>
//                 <Link className='card flex items-center flex-col gap-4'>
//                     <img className='' src={card3} style={{width:'50px', height:'50px', objectFit:'cover', objectPosition:'left', borderTop:'1px solid gray', boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)'}} alt="" />
//                     <span className=''>PIC</span>
//                 </Link>
//                 <Link className='card flex items-center flex-col gap-4'>
//                     <img className='' src={card4} style={{width:'50px', height:'50px', objectFit:'cover', objectPosition:'left', borderTop:'1px solid gray', boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)'}} alt="" />
//                     <span className=''>PIC</span>
//                 </Link>
//                 <Link className='card flex items-center flex-col gap-4'>
//                     <img className='' src={card5} style={{width:'50px', height:'50px', objectFit:'cover', objectPosition:'left', borderTop:'1px solid gray', boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)'}} alt="" />
//                     <span className=''>PIC</span>
//                 </Link> */}

//         {/* <div className='flex justify-center items-center mt-40'>
//                      <motion.img src={bg_image} width={800} alt="rab-profile-pic" className='shadow-lg'
//                                  initial={{x:100, opacity:0}}
//                                  animate={{x:0, opacity:1}}
//                                  transition={{duration:1, delay:1.5}}/>
//                  </div> */}
//       </div>
//       <motion.div className="w-full" initial="hidden" animate="visible" variants={containerVariants}
//       >
//         <div className="flex flex-col items-center pt-60 pl-1">
//           <h1 className="pb-2 text-2xl text-center tracking-tighter lg:text-4xl md:mt-30">
//             <motion.span variants={childVariants} className='text-[#F0E68C]'>Embracing the Journey</motion.span>
//           </h1>

//           <h2
//             className="text-1xl font-medium mt-8 mb-8 flex flex-col md:items-center mx-auto md:mx-56"
//             style={isOpen ? null : paragraphStyles}
//           >
//             {/* <motion.span className='text-center' variants={childVariants}>I am </motion.span> */}
//             <motion.span className="text-start" variants={childVariants}>
//               {SUB_HERO1}{' '}
//             </motion.span>
//             <motion.span className="text-start" variants={childVariants}>
//               {' '}
//               {SUB_HERO2}
//             </motion.span>
//             {/* <motion.span className="text-start" variants={childVariants}>
//               {' '}
//               {SUB_HERO3}
//             </motion.span>
//             <motion.span className="text-start" variants={childVariants}>
//               {' '}
//               {SUB_HERO4}
//             </motion.span>
//             <motion.span className="text-start" variants={childVariants}>
//               {' '}
//               {SUB_HERO5}
//             </motion.span>
//             <motion.span className="text-start" variants={childVariants}>
//               {' '}
//               {SUB_HERO6}
//             </motion.span>
//             <motion.span className="text-start" variants={childVariants}>
//               {' '}
//               {SUB_HERO7}
//             </motion.span> */}
//             {/* <motion.span className='text-center' variants={childVariants}>FullStack Developer</motion.span> */}
//           </h2>

//           <button onClick={() => setIsOpen(!isOpen)} className="flex">
//             <span className="pr-1">|</span>
//             {isOpen ? 'READ LESS' : 'READ MORE'}
//           </button>

//           <h1>
//             <motion.span
//               className="text-2xl text-stone-400"
//               variants={childVariants}
//             >
//               {/* { SUB_HERO }  */}
//             </motion.span>
//           </h1>

//           {/* <Link to='/resume.pdf'target='_black'rel='noopener noreferrer'download>
//                              <motion.button className='bg-stone-400 rounded-full p-4 text-sm text-black mb-10 mt-10 border-stone-400 shadow-inner'
//                                             variants={childVariants}>
//                                  Download Resume
//                              </motion.button>
//                          </Link> */}
//         </div>
//       </motion.div>
//     </div>

//     // <div className='bg-cover w-screen my-bg mt-8 px-4 md:px-4 pb-4 lg:mb-44'>
//     //     <div className='flex flex-wrap lg:flex-row-reverse justify-center items-center'>
//     //         <div className='w-full lg:w-1/2'>
//     //             <div className='flex justify-center items-center mt-40'>
//     //                 <motion.img src={bg_image} width={800} alt="rab-profile-pic" className='shadow-lg'
//     //                             initial={{x:100, opacity:0}}
//     //                             animate={{x:0, opacity:1}}
//     //                             transition={{duration:1, delay:1.5}}/>
//     //             </div>
//     //         </div>
//     //         <motion.div className='w-full lg:w-1/2'
//     //                     initial="hidden"
//     //                     animate="visible"
//     //                     variants= {containerVariants}>
//     //             <div className='flex flex-col items-start lg:items-start mt-10 pl-1'>
//     //                     <h1 className='pb-2 text-2xl text-center tracking-tighter lg:text-4xl md:mt-40'>
//     //                         <motion.span variants={childVariants}>CRAFTMANSHIP</motion.span>
//     //                     </h1>
//     //                     <h2 className='text-1xl font-medium mt-8 mb-8 flex flex-col md:items-start md:mr-2'
//     //                         style={isOpen ? null : paragraphStyles}>
//     //                         {/* <motion.span className='text-center' variants={childVariants}>I am </motion.span> */}
//     //                         <motion.span className='text-start' variants={childVariants}>Modularity - <span>{SUB_HERO1} </span>
//     //                         <motion.span className='text-start' variants={childVariants}>Dry Code - <span>{SUB_HERO2}</span></motion.span>
//     //                         <motion.span className='text-start' variants={childVariants}> Open/Closed Principle - <span>{SUB_HERO3}</span></motion.span>
//     //                         <motion.span className='text-start' variants={childVariants}> Encapsulation - <span>{SUB_HERO4}</span></motion.span>
//     //                         <motion.span className='text-start' variants={childVariants}> Polymorphism - <span>{SUB_HERO5}</span></motion.span>
//     //                         <motion.span className='text-start' variants={childVariants}> Abstraction - <span>{SUB_HERO6}</span></motion.span>
//     //                         <motion.span className='text-start' variants={childVariants}> Inheritance - <span>{SUB_HERO7}</span></motion.span>
//     //                         <motion.span className='text-start' variants={childVariants}> Code Rview - <span>{SUB_HERO8}</span></motion.span>
//     //                         </motion.span>

//     //                         {/* <motion.span className='text-center' variants={childVariants}>FullStack Developer</motion.span> */}
//     //                     </h2>

//     //                     <button onClick={() => setIsOpen(!isOpen)} className='flex'>
//     //                         <span className='pr-1'>|</span>
//     //                         {isOpen ? 'READ LESS' : 'READ MORE'}
//     //                     </button>

//     //                     <h1>
//     //                         <motion.span className="text-2xl text-stone-400"
//     //                                     variants={childVariants}>
//     //                             {/* { SUB_HERO }  */}
//     //                         </motion.span>
//     //                     </h1>

//     //                     {/* <Link to='/resume.pdf'target='_black'rel='noopener noreferrer'download>
//     //                         <motion.button className='bg-stone-400 rounded-full p-4 text-sm text-black mb-10 mt-10 border-stone-400 shadow-inner'
//     //                                        variants={childVariants}>
//     //                             Download Resume
//     //                         </motion.button>
//     //                     </Link> */}
//     //             </div>
//     //         </motion.div>
//     //     </div>
//     // </div>
//   );
// };

// export default Hero;

// {
//   /* <p className='my-2 m-w-lg py-6 text-xl leading-relaxed tracking-tighter'>
//                             {HERO_CONTENT}
// </p> */
// }

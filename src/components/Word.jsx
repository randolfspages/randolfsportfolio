import { useEffect, useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import heading from './Education'





const Word = () => {

    const element = useRef(null)
    const { scrollYProgress } =  useScroll({
        target: element,
        offset: ['start 0.5', 'start 0.20']
    })

    const letters = heading.split('')
 
  return (
        <h2 className="split-word pb-16 pt-10 justify-center text-4xl text-[#f2c854] font-bold"
            ref={element}>
             
             {letters.map((letter, index) => {
                const start = index / letters.length;
                const end = start + (1 /letters.length)
                console.log([start, end]);
                return <span key={index} range={[start, end]} progress={scrollYProgress}>{letter}</span>
             })}
        </h2>
        
        
    
  )

}

export default Word
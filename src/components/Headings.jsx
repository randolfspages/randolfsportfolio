import { useRef } from 'react'
import { motion, useScroll, useTransform} from 'framer-motion';


const Headings = ({value}) => {

    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.7', 'start .25']
    })

  const words = value.split('');

  return (
    <p className='main-paragraph text-[#f2c854] text-center underline underline-offset-4'
        ref={element}>
            {
                words.map((word, index) => {
                    const start = index / words.length;
                    const end = start + ( 1 / words.length)
                    return <Word key={index} range={[start, end]} progress={scrollYProgress}>{word}</Word>
                })
            }
    </p>
  )
}

const Word = ({children, range, progress}) => {
    const characters = children.split("");
    const amount = range[1] - range[0]
    const step = amount / children.length;

    return (
        
        <span className='word-paragraph'>
            <span>
                {
                    characters.map((character, index) => {
                    const start = range[0] + (step * index)
                    const end = range[0] + (step * (index + 1))
                    return <NewCharacter key={index} range={[start, end]} progress={progress}>{character}</NewCharacter>
                    })
                }
             </span>
        </span>
    )
}

const NewCharacter = ({children, range, progress}) => {
    const opacity = useTransform(progress, range, [0, 1])
    return (
        <motion.span style={{opacity}}>
            {children}
        </motion.span>
    )
}
export default Headings
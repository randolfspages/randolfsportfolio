import { Button } from "antd";
import { useEffect, useState } from "react"




const BackToTopButton = () => {

    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY  > 100) {
                setBackToTop(true)
            }else {setBackToTop(false)}
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


  return (
    <div className="flex justify-center m-5">
        {backToTop && (<Button onClick={scrollUp} className='fixed bottom-10 bg-transparent text-white font-bold text-4xl pt-6 pb-8'>&#8896;</Button>)}
    </div>
  )
}

export default BackToTopButton
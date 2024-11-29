import { useState} from "react";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";








const DropDownMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    isMenuOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         if(window.scrollY  < 100) {
    //             setIsMenuOpen(true)
    //         }else {setIsMenuOpen(false)}
    //     })
    // }, [])

  

   

     const navItems = [
        {path:'/',  link:'Home'},
        {path:'/projects',  link:'Projects'},
        {path:'/blog',  link:'Blog'},
        {path:'/contact',  link:'Contact'},
    ]

   

  return (
    <>
        <div className="w-1/3 bg-black">
                <div className="text-end pt-1">
                    <button onClick={toggleMenu} className="cursor-pointer">
                        {
                            isMenuOpen 
                            ? <IoMdClose className="menu-icon text-3xl  block cursor-pointer" />
                            : <IoMenuSharp className="menu-icon text-3xl block cursor-pointer" />
                        }
                    </button>
                </div>



                <div className='absolute text-center text-white h-screen'>
                    <ul className={`top-24 left-0 pt-20 pb-80 right-0 bg-black text-lg transform transition-transform ${isMenuOpen ? 'fixed transition-all ease-out duration-150 flex flex-col text-center justify-center gap-10 p-10' : 'hidden'}`}>
                        {
                            navItems.map(({path, link}) => 
                            <li className="p-2" key={path}>
                                <NavLink onClick={toggleMenu} 
                                        to={path} 
                                        className={({isActive}) =>{ 
                                        return ((!isActive ? 'drop-down-link list-none' : 'text-cyan-600 drop-down-link list-none'))}}>
                                            {link}
                                </NavLink>
                            </li>)
                        }
                    </ul>
                </div> 

                
        </div>  
    </>
    
  )

}
export default DropDownMenu

// {!isMenuOpen ? <Projects/> : <Home /> }
// #1B9AAA
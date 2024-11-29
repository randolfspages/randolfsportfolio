
import { NavLink } from "react-router-dom";


const Nav = () => {

  const navItems = [
    {path:'/',  link:'PROJECTS'},
    {path:'/contact',  link:'ABOUT'},
    // {path:'/blog',  link:'Blog'},
    // {path:'/contact',  link:'Contact'},
]
  return (        
        <nav className="z-10">
            
            <ul className="flex items-center gap-4 text-base">

              {
                navItems.map(({path, link}) =>
                <li key={path} className="link">
                    <NavLink to={path}className={({isActive}) =>{ 
                    return ((!isActive ? '' : 'text-cyan-600'))}}>{link}</NavLink>
                </li>)
              }
      
            </ul>  
        </nav>   
  )
}

export default Nav
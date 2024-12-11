
import { NavLink } from "react-router-dom";


const Nav = () => {

  const navItems = [
    {path:'/',  link:'PROJECTS'},
    {path:'/about',  link:'ABOUT'},
    //{path:'/contact',  link:'CONTACT'},
    
]
  return (        
        <nav className="z-10">
            
            <ul className="flex items-center gap-4 text-base font-bold">

              {
                navItems.map(({path, link}) =>
                <li key={path} className="link">
                    <NavLink to={path}className={({isActive}) =>{ 
                    return ((!isActive ? '' : 'text-[#f2c854]'))}}>{link}</NavLink>
                </li>)
              }
      
            </ul>  
        </nav>   
  )
}

export default Nav
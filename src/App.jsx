import { Outlet,useLocation} from "react-router"
import './App.css'
import Header from "./components/Header"
import { useEffect } from "react"
import BackToTopButton from "./components/BackToTopButton"




const App = () => {
  const { pathname } = useLocation();
  useEffect(() => (
    window.scrollTo(0, 0)
  ), [pathname])

  return (
   
      <div className="w-full h-full relative bg-black">
      <Header />
      <div className="">
        <section>
           <Outlet />
        </section>
      </div>
      <BackToTopButton />
    </div>
    
  )
}

export default App

import { Outlet, useLocation } from "react-router"
import './App.css'
import Header from "./components/Header"
import { useEffect } from "react"



const App = () => {
  const { pathname } = useLocation();
  useEffect(() => (
    window.scrollTo(0, 0)
  ), [pathname])

  return (
    <div className="w-full h-full relative bg-black font-body">
      <Header />
      <div className="h-[400vh]">
        <section>
           <Outlet />
        </section>
      </div>
    </div>
  )
}

export default App

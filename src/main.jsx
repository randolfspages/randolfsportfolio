import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Projects from './pages/projects/Projects.jsx'
import Contact from './pages/contact/Contact.jsx'
import About from './pages/about/About.jsx'




const router = createHashRouter([
  {
    path:"/", element:<App />,
    children: [
        {path:"/", element:<Home />},
        {path:"/projects", element:<Projects />},
        {path:"/contact", element:<Contact />},
        {path:"/about", element:<About />},    
    ]
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router = {router} />
  </StrictMode>,
)

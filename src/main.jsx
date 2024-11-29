import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Projects from './pages/projects/Projects.jsx'
import Blog from './pages/blog/Blog.jsx'
import Contact from './pages/contact/Contact.jsx'



const router = createHashRouter([
  {
    path:"/", element:<App />,
    children: [
        {path:"/", element:<Home />},
        {path:"/projects", element:<Projects />},
        {path:"/blog", element:<Blog />},
        {path:"/contact", element:<Contact />},    
    ]
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)


import { Link } from 'react-router-dom'



const PortfolioLink = () => {
  return (
    <div className='w-1/3 bg-black'>
        <Link to="/projects" className='drop-down-link'>PROJECTS</Link>
    </div>
  )
}

export default PortfolioLink
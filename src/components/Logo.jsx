
import { Link } from 'react-router-dom'



const Logo = () => {
  return (
    <div className='bg-black'>
        <Link to="/about" className="logo text-center">
            <p className='font-bold text-2xl font-sans'>&#915;&#923;&#223;</p>    
        </Link> 
    </div>
  )
}

export default Logo
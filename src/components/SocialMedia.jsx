
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";


const SocialMedia = () => {
  return (
      <>
        <div className="flex justify-center items-center gap-4">
            <Link to="https://ground.news/" target="_blank"><FaSquareGithub className=" social-media " /></Link>
            <Link to="https://ground.news/" target="_blank"><FaLinkedin className=" social-media " /></Link>  
        </div>
      </>
    
  )
}

export default SocialMedia
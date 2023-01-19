import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="hidden md:block" >
        <ul className="flex md:block text-center" >
            <li className="my-4 hover:text-green" > <Link to="/" className="text-xl" >Home</Link> </li> 
            <li className="my-4 hover:text-green" > <Link to="/about" className="text-xl" >About</Link> 
            </li> 
            <li className="my-4 hover:text-green" > <Link to="/skills" className="text-xl" >Skills</Link> 
            </li> 
            <li className="my-4 hover:text-green" > <Link to="/mywork" className="text-xl" >My Work</Link> </li> 
            <li className="my-4 hover:text-green" > <Link to="/education" className="text-xl" >Education
            </Link> </li>
            <li className="my-4 hover:text-green" > <Link to="/blogs" className="text-xl" >Blogs</Link> 
            </li> 
        </ul>
    </nav>
  )
}

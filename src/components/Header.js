
import ProfileImg from "../assets/images/avatar.svg";
import NavBar from "./header/NavBar";
import Hamburger_Svg from "../assets/images/hamburger.svg";
import SocialLinks from "./header/SocialLinks";



export default function Header() {
  return (
    <header className="md:w-1/4 lg:w-1/5 h-[10%] md:h-screen text-center py-2">
      <div className="md:h-full flex md:flex-col justify-between items-center py-1 px-4" >
        {/* profile section */}
        <div className="">
          <img src={ProfileImg} alt="profile" className="hidden md:block" />
          <h1 className="hidden md:block text-2xl lg:text-3xl my-3">Aman Singh</h1>
          <h1 className="md:hidden text-5xl" >A.S</h1>
        </div>
        {/* Navigation Menu */}
        <div>
          <img className="w-8 md:hidden menu-closed" src={Hamburger_Svg} alt="Hamburger" />
          <NavBar/>
        </div>
        {/* Social Links */}
        <div className="hidden md:block" >
            <SocialLinks/>
        </div>
      </div>
    </header>
  );
}

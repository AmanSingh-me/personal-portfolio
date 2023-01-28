
import ProfileImg from "../assets/images/avatar.svg";
import NavBar from "./header/NavBar";
import Hamburger_Svg from "../assets/images/hamburger.svg";
import Close_Svg from "../assets/images/close.svg";

import SocialLinks from "./header/SocialLinks";
import { useState } from "react";



export default function Header() {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navPosition, setNavPosition] = useState("left-full");
  const [socialLinks_Position, setSocialLinks_Position] = useState("right-full");

  const handleToggle = (event) => {

    if(isNavOpen){
      event.target.src = Hamburger_Svg;
      setNavPosition("left-full");
      setSocialLinks_Position("right-full");
      setIsNavOpen(false);
    }
    else{ 
      event.target.src = Close_Svg;
      setNavPosition("left-0");
      setSocialLinks_Position("right-0");
      setIsNavOpen(true);
    }
  }

  return (
    <header className="bg-light-black relative md:w-1/4 lg:w-1/5 h-[10vh] md:h-screen text-center py-2">
      <div className="px-3 h-full flex md:flex-col justify-between items-center">

        <div>
          <h1 className=" font-bold text-4xl sm:text-5xl md:hidden text-light-blue">A.S</h1>
          <img src={ProfileImg} alt="Profile" className="hidden md:block" />
          <p className="hidden md:block mt-4 text-2xl text-light-blue font-bold" >Aman Singh</p>
        </div>

        <img src={Hamburger_Svg} alt="Menu icon" className="w-8 md:hidden cursor-pointer" 
        onClick={handleToggle} />

        <div className={`bg-light-grey opacity-95 md:bg-light-black border-b-2 border-light-blue md:border-0 px-4 transition-all duration-300 w-full absolute md:static top-full z-10 ${navPosition}`} >
          <NavBar/>
        </div>

        <div className={`bg-light-grey-500 md:bg-light-black px-2 transition-all duration-300 absolute md:static top-44 rotate-9 z-10 ${socialLinks_Position}`} >
          <SocialLinks/>
        </div>

      </div>
    </header>
  );
}

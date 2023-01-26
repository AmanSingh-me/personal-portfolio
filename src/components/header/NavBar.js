import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
        <ul className="text-left md:text-center" >
        {
          [
            { name: "Home", li_Style: "my-4", path: "/", link_Style: "text-xl hover:text-green" },
            { name: "About", li_Style: "my-4", path: "/about", link_Style: "text-xl hover:text-green" },
            { name: "Skills", li_Style: "my-4", path: "/skills", link_Style: "text-xl hover:text-green" },
            { name: "My Work", li_Style: "my-4", path: "/mywork", link_Style: "text-xl hover:text-green" },
            { name: "Blogs", li_Style: "my-4", path: "/blogs", link_Style: "text-xl hover:text-green" },
            { name: "Contact", li_Style: "my-4", path: "/contact", link_Style: "text-xl hover:text-green" }
          ].map(
            (details, index) => <li className={details.li_Style} key={index} >
                                <Link to={details.path} className={details.link_Style}>{details.name}</Link>
                                </li>
               )
        }
        </ul>
    </nav>
  )
}

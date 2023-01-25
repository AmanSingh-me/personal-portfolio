
import SeeLive from "../../assets/images/see.svg";
import Github from "../../assets/images/github.svg";

export default function ProjectCard({img, name, details, liveLink, sourceCode}) {
  return (
    <div className="bg-light-grey-500 rounded-md  my-4 mx-2.5 sm:mx-4 p-3 sm:p-4 w-72">
        <div className="rounded-md overflow-hidden" >
            <img src={img} alt={name?.toLowerCase()} className="transition-transform hover:scale-110"/>
        </div>

        <div className="my-5 px-1" >
            <p className="text-2xl font-bold mb-3 text-teal">{name}</p>
            <p>{details}</p>
        </div>

        <div className="flex justify-between px-1" >
            <a href={liveLink} target="_blank" rel="noreferrer" title="Live Link" 
            className="p-2 hover:bg-light-grey rounded-full" >
                <img src={SeeLive} alt="see live" className="w-8" />
            </a>
            <a href={sourceCode} target="_blank" rel="noreferrer" title="Source Code" 
            className="p-2 hover:bg-light-grey rounded-full" >
                <img src={Github} alt="github" className="w-8" />
            </a>
        </div> 
    </div>  
  )
}

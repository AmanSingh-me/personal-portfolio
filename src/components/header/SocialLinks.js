
import linkedIn_svg from "../../assets/images/linkedin.svg";
import github_svg from "../../assets/images/github.svg";
import email_svg from "../../assets/images/email.svg";


function SocialLinks(){
    return(
        <div className="flex sm:items-center my-3 px-2" >
            
            <a href="https://github.com/Amansingh-me" target="_blank" rel="noreferrer" title="Github" className="w-5 mr-5 sm:mx-2.5" >
                <img src={github_svg} alt="github"/>
            </a>
            <a href="https://www.linkedin.com/in/aman-singh-2938b3209/" target="_blank" rel="noreferrer" title="linkedIn" className="w-5 mr-5 sm:mx-2.5" >
                <img src={linkedIn_svg} alt="linkedIn"/>
            </a>
            <a href="mailto:amansingh24351@gmail.com" target="_blank" rel="noreferrer" title="Email" className="w-5 mr-5 sm:mx-2.5" >
                <img src={email_svg} alt="email"/>
            </a>
        </div>
    )
}

export default SocialLinks;
import Html_Svg from "../assets/images/html.svg";
import Css_Svg from "../assets/images/css.svg";
import TailwindCss_Svg from "../assets/images/tailwind-css.svg";
import Bootstrap_Svg from "../assets/images/bootstrap.svg";
import JavaScript_Svg from "../assets/images/javascript.svg";
import React_Svg from "../assets/images/react-js.svg";
import Redux_Svg from "../assets/images/redux.svg";
import Materialui_Svg from "../assets/images/material-ui.svg";
import Git_Svg from "../assets/images/git.svg";

import SkillCard from "./components/SkillCard";

const mySkills = [
  { skillName: "HTML", iconSrc: Html_Svg, skillLevel: "Intermediate" },
  { skillName: "CSS", iconSrc: Css_Svg, skillLevel: "Intermediate" },
  { skillName: "Tailwind CSS", iconSrc: TailwindCss_Svg, skillLevel: "Intermediate" },
  { skillName: "Bootstrap", iconSrc: Bootstrap_Svg, skillLevel: "Intermediate" },
  { skillName: "JavaScript", iconSrc: JavaScript_Svg, skillLevel: "Intermediate" },
  { skillName: "React", iconSrc: React_Svg, skillLevel: "Intermediate" },
  { skillName: "Redux", iconSrc: Redux_Svg, skillLevel: "Intermediate" },
  { skillName: "Material UI", iconSrc: Materialui_Svg, skillLevel: "Intermediate" },
  { skillName: "Git", iconSrc: Git_Svg, skillLevel: "Intermediate" },
];

export default function Skills() {
  return (
    <section className="p-4 text-center">
      <p className="mt-4 text-4xl md:text-5xl underline underline-offset-8 font-bold">
        My Skills
      </p>
      <div className="mt-10 md:mt-18 flex flex-wrap justify-center ">
        {
          mySkills.map((obj, index) => (
          <SkillCard
            iconSrc={obj.iconSrc}
            skillName={obj.skillName}
            skillLevel={obj.skillLevel}
            key={index}
          />
          ))
        }
      </div>
    </section>
  );
}

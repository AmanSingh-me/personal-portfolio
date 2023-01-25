
import ProjectCard from "./components/ProjectCard";


export default function MyWork() {
  return (
    <section className="p-2" >
      <p className="mt-5 text-center text-4xl md:text-5xl underline underline-offset-8 font-bold">
        My Work
      </p>
      <div className="mt-20 md:mt-18 flex flex-wrap justify-center ">
        <ProjectCard img={""} name={""} details={""} liveLink={""} sourceCode={""} />
      </div>
    </section>
  )
}

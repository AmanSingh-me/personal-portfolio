
import bgHero from "../assets/images/bg-unsplash.jpg"

export default function Main() {
  return (
    <main className="bg-green md:w-3/4 lg:w-4/5 h-[90%] md:h-screen overflow-scroll" >
        <section style={{backgroundImage: `linear-gradient(#00000090, #00000090), url(${bgHero})`}} className="h-full bg-center bg-no-repeat bg-cover bg-fixed flex items-center justify-center text-center px-2" id="home" >
            <div className="" >
                <h3 className="text-2xl xs:text-3xl sm:text-4xl"> Hello <span className="md:hidden">I'm</span> </h3>
                <h2 className="font-bold text-4xl xs:text-6xl my-5 xs:my-6 md:hidden" >Aman Singh</h2>
                <h2 className="font-[500] sm:font-bold text-3xl xs:text-4xl md:text-5xl text-teal my-6" >I'm Frontend Engineer</h2>
                <h2 className="px-2 text-lg sm:text-xl" >I am passionate about building solid & scalable frontend products</h2>
            </div>

        </section>
    </main>
  )
}

import bgHero from "../assets/images/bg-unsplash.jpg"

export default function Home() {
  return (
    <section style={{backgroundImage:`linear-gradient(#00000085, #00000085), url(${bgHero})`}} className=" h-full bg-center bg-no-repeat bg-cover flex items-center justify-center text-center px-2" id="home" >

            <div className="" >
                <h3 className="text-2xl md:text-4xl"> Hello <span className="md:hidden">I'm</span> </h3>
                <h2 className="font-semi-bold text-4xl md:text-6xl my-5 md:hidden">Aman Singh</h2>
                <h2 className="font-bold text-3xl md:text-5xl text-teal my-6">I'm Frontend Engineer</h2>
                <h2 className="text-lg md:text-2xl" >I am passionate about building solid & scalable frontend products</h2>
            </div>

        </section>
  )
}
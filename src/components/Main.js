
 import Home from "../pages/Home";

export default function Main() {
  return (
    <main className="bg-light-grey md:w-3/4 lg:w-4/5 h-[90vh] md:h-screen overflow-y-auto"
     style={{scrollbarWidth: "0px", "&::WebkitScrollbar": { width: 0}}} >
       <Home/>
    </main>
  )
}

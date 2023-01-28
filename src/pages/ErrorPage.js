
import Error_Img from "../assets/images/error-404.png"

export default function ErrorPage() {
  return (
    <section className="mt-10 px-3" >
      <p className="text-xl text-center py-5"> 
        <span className="text-2xl md:text-3xl text-[#ff555e] mr-2">Oops!</span> 
        This is awkward... You're looking for something that doesn't actually exist.
      </p>
      <div className="flex flex-col justify-center items-center" >
        <img src={Error_Img} alt="oops laptop" />
        <a href="http:ds.d" className="bg-teal text-lg mt-3 py-2 px-5" >Go Back</a>
      </div>
    </section>
  );
}

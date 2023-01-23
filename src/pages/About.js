
export default function About() {
  return (
    <section className="py-3 px-1">
      <div className="flex justify-center items-center text-center relative mt-2 md:mt-5 mb-8 md:mb-10">
        <h2 className="opacity-5 uppercase font-bold text-7xl md:text-8xl lg:text-9xl tracking-wider">
          About Me
        </h2>
        <p className="text-3xl md:text-4xl lg:text-5xl absolute border-y-2 border-teal md:py-1">
          Know Me More
        </p>
      </div>
      <p className=" p-3 sm:p-7 text-center sm:text-lg">
        I'm Aman Singh, a Frontend Engineer I help you build brand for your
        business at an affordable price. Thousands of clients have procured
        exceptional results while working with our dedicated team. when an
        unknown printer took a galley of type and scrambled it to make a type
        specimen book.
        <br></br>
        <br></br>
        Delivering work within time and budget which meets client's requirements
        is our moto. Lorem Ipsum has been the industry's standard dummy text
        ever when an unknown printer took a galley.
        <span className="block my-6 text-lg">
          Location:
          <span className="text-teal border-b ml-2">India</span>
        </span>
        <a href="RESUME_LINK" target="_blank" rel="noreferrer" className="border border-teal bg-teal hover:bg-light-grey transition-colors 
        rounded-full text-lg py-3 px-6 drop-shadow-[0_10px_10px_#ffffff20] ">
        Download Resume
        </a>
      </p>
    </section>
  );
}

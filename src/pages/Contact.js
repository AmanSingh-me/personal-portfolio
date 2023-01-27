
import Whatsapp_Svg from "../assets/images/whatsapp.svg";
import Email_Svg from "../assets/images/email.svg";

export default function Contact() {
  return (
    <section className="p-3 text-center h-full">
      <p className="mt-4 text-4xl md:text-5xl underline underline-offset-8 font-bold">
        Contact
      </p>
      <div className="h-1/2 flex justify-center items-end">
        <div className="bg-light-grey-500 rounded text-xl p-2 w-full lg:w-3/4">
          <div className="flex flex-col sm:flex-row justify-center items-center">

            <h3 className="my-4 py-2 px-5 rounded bg-light-grey hover:bg-teal w-fit cursor-pointer">
            <a href="mailto:amansingh24351@gmail.com" className="flex items-center" >
                Send Email
                <img src={Email_Svg} alt="email" className="w-10 ml-3" />
              </a>
            </h3>

            <h3 className="my-4 sm:ml-10 py-2 px-5 rounded bg-light-grey hover:bg-teal w-fit cursor-pointer">
              <a href="whatsapp://chat/?code=DCXog6fU35bFQF8ZTJlaQu" className="flex items-center" >
                Chat on WhatsApp
                <img src={Whatsapp_Svg} alt="whatsapp" className="w-11 ml-3" />
              </a>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

import { BsFillTelephoneFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const Contact = () => {

  const contactForm = (event) => {
    event.preventDefault()
  }


  return (
    <>
      {/* content section start */}
      <div className='container mx-auto h-full sm:h-screen w-full px-2 py-10'>
        <div className="sm:flex sm:justify-around">
          {/* left start */}
          <div className="flex-1 flex flex-col justify-between space-y-5">
            <h3 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-5xl text-white">Let's talk <br></br>on something <span className="text-yellow-400">great</span> <br></br>together</h3>
            <ul className="space-y-3 sm:space-y-5 xl:space-y-7">
              <li className="flex gap-1 sm:gap-2 xl:gap-3 items-center">
                <BsFillTelephoneFill className="bg-black shadow-inner shadow-slate-800 text-[22px] md:text-[24px] lg:text-[27px] xl:text-3xl 2xl:text-4xl rounded-full p-1 xl:p-2 text-yellow-400"></BsFillTelephoneFill>
                <span className="text-sm sm:text-xs md:text-[15px] lg:text-base xl:text-base 2xl:text-lg text-white">+880 168107 5783</span>
              </li>
              <li className="flex gap-1 sm:gap-2 xl:gap-3 items-center">
                <CgMail className="bg-black shadow-inner shadow-slate-800 text-[22px] md:text-[24px] lg:text-[27px] xl:text-3xl 2xl:text-4xl rounded-full p-1 xl:p-2 text-yellow-400"></CgMail>
                <span className="text-sm sm:text-xs md:text-[15px] lg:text-base xl:text-base 2xl:text-lg text-white">amirhossainsohan0@gmail.com</span></li>
              <li className="flex gap-1 sm:gap-2 xl:gap-3 items-center">
                <FaLocationDot className="bg-black shadow-inner shadow-slate-800 text-[22px] md:text-[24px] lg:text-[27px] xl:text-3xl 2xl:text-4xl rounded-full p-1 xl:p-2 text-yellow-400"></FaLocationDot>
                <span className="text-sm sm:text-xs md:text-[15px] lg:text-base xl:text-base 2xl:text-lg text-white">South Patenga,<br></br>
                Chattogram Bangladesh</span>
              </li>
            </ul>
            {/* icon section start */}
            <ul className="flex gap-2 items-center">
              <li className="text-slate-500 sm:text-xs md:text-sm lg:text-base">Check out my:</li>
              <li className="text-sm sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg rounded-full bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500 w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:h-8 xl:w-8 2xl:w-9 2xl:h-9 flex justify-center items-center">
                <FaFacebookF></FaFacebookF>
              </li>
              <li className="text-sm sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg rounded-full bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500 w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:h-8 xl:w-8 2xl:w-9 2xl:h-9 flex justify-center items-center">
                <FaTwitter></FaTwitter>
              </li>
              <li className="text-sm sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg rounded-full bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500 w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:h-8 xl:w-8 2xl:w-9 2xl:h-9 flex justify-center items-center">
                <FaLinkedinIn></FaLinkedinIn>
              </li>
              <li className="text-sm sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg rounded-full bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500 w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:h-8 xl:w-8 2xl:w-9 2xl:h-9 flex justify-center items-center">
                <FaInstagram></FaInstagram>
              </li>
            </ul>
            {/* icon section end */}
          </div>
          {/* left end */}
          {/* right start */}
          <div className="flex-1 mt-10 sm:mt-0">
            <form onSubmit={contactForm} className="formCon bg-yellow-400 p-4 xl:p-8 space-y-3 sm:space-y-3 xl:space-y-5 rounded-md">
              <div>
                <h1 className="text-lg sm:text-lg md:text-xl lg:text-[22px] xl:text-2xl 2xl:text-3xl font-bold">Send Message</h1>
                <p className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-sm 2xl:text-lg w-full lg:w-[90%] mt-1 text-gray-500 text-justify">Can you share your name, your email address, your phone number, your address, and what type topic you want to talk. please feel free contact.</p>
              </div>
              <div className="sm:flex sm:items-center sm:justify-between gap-2 sm:gap-2 lg:gap-3 xl:gap-5 mt-5">
                <input className="w-full h-full p-2 xl:p-3 border-[1px] border-gray-300 rounded-md text-xs sm:text-xs md:text-sm lg:text-base 2xl:text-lg focus-visible:outline-none" type="text" placeholder="Enter your name"></input>
                <input className="w-full h-full p-2 xl:p-3 border-[1px] border-gray-300 rounded-md text-xs sm:text-xs md:text-sm lg:text-base 2xl:text-lg mt-3 sm:mt-0 focus-visible:outline-none" type="email" placeholder="Enter your email"></input>
              </div>
              <div className="sm:flex sm:items-center sm:justify-between gap-2 sm:gap-2 lg:gap-3 xl:gap-5">
                <input className="w-full h-full p-2 xl:p-3 border-[1px] border-gray-300 rounded-md text-xs sm:text-xs md:text-sm lg:text-base 2xl:text-lg focus-visible:outline-none" type="text" placeholder="Enter your address"></input>
                <input className="w-full h-full p-2 xl:p-3 border-[1px] border-gray-300 rounded-md text-xs sm:text-xs md:text-sm lg:text-base 2xl:text-lg mt-3 sm:mt-0 focus-visible:outline-none" type="text" placeholder="Enter your number"></input>
              </div>
              <div className="">
                <textarea className="w-full h-24 xl:h-32 p-3 border-[1px] border-gray-300 rounded-md text-xs sm:text-xs md:text-sm lg:text-base 2xl:text-lg focus-visible:outline-none" type="text" placeholder="Enter your details"></textarea>
              </div>
              <div className="">
                <button type="submit" className="bg-black text-white p-2 2xl:p-3 text-[10px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-sm 2xl:text-base rounded-md font-bold">Send Message</button>
              </div>
            </form>
          </div>
          {/* right end */}
        </div>
      </div>
      {/* content section end */}
    </>
  );
};

export default Contact;
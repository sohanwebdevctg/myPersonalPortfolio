import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import image from '../../../public/image4.png';


const Banner = () => {
  return (
    <>
      {/* content section start */}
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-around sm:justify-between items-center h-full sm:h-full md:h-full gap-10 sm:gap-5 md:gap-4 lg:gap-6">
          {/* left start */}
            <div className="sm:flex-1 sm:pt-12 md:pt-0 xl:pt-16">
              {/* top item */}
              <span className="text-white font-semibold bg-black shadow-inner shadow-slate-800 py-2 px-3 sm:px-2 xl:px-4 xl:py-2 lg:mb-3 rounded-md text-[10px] sm:text-[8px] md:text-[10px] lg:text-[11px] xl:text-xs inline-block">
                SOHANWEBDEVCTG
              </span>
              <h2 className="text-lg sm:text-base md:text-xl lg:text-[22px] xl:text-2xl font-bold text-slate-200">
                Hi, I am <span className="text-yellow-400">sohan mozumder</span>
              </h2>
              <h2 className="text-[21px] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-slate-200">
                Front-end Web Developer
              </h2>
              <p className="mt-1 md:my-2 text-sm sm:text-[13px] md:text-base lg:text-lg xl:text-lg italic text-gray-500 text-justify">
              Creative and results-driven web developer specializing in React and modern web technologies. Always eager to learn, adapt, and collaborate in dynamic environments to bring ideas to life.
              </p>
              <ul className="flex items-center gap-3 xl:gap-5 mt-3">
                <li className="text-[10px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base px-4 py-2 xl:px-6 xl:py-2 bg-yellow-500 text-white font-bold rounded-md">
                  My Resume
                </li>
                <li className="text-[10px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base px-4 py-2 xl:px-6 xl:py-2 rounded-md bg-black shadow-sm shadow-white hover:shadow-yellow-500 duration-300 text-white font-bold">
                  Hire Me
                </li>
              </ul>
              {/* top item */}
              {/* social link  */}
              <div className="relative mt-5 sm:mt-24 md:mt-28 lg:mt-28 xl:top-20 h-full">
              <ul className="flex gap-2 items-center">
              <li className="text-slate-500 sm:text-xs md:text-sm lg:text-base">Check out my:</li>
              <li className="text-base sm:text-xs md:text-base xl:text-lg rounded-full bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500 w-7 h-7 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 flex justify-center items-center">
                <FaFacebookF></FaFacebookF>
              </li>
              <li className="text-base sm:text-xs md:text-base xl:text-lg rounded-full bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500 w-7 h-7 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 flex justify-center items-center">
                <FaTwitter></FaTwitter>
              </li>
              <li className="text-base sm:text-xs md:text-base xl:text-lg rounded-full bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500 w-7 h-7 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 flex justify-center items-center">
                <FaLinkedinIn></FaLinkedinIn>
              </li>
              <li className="text-base sm:text-xs md:text-base xl:text-lg rounded-full bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500 w-7 h-7 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 flex justify-center items-center">
                <FaInstagram></FaInstagram>
              </li>
            </ul>
          </div>
              {/* social link */}
            </div>
          {/* left end */}
          {/* right start */}
          <div className="sm:flex-1">
            <div className="imgAnimation bg-yellow-500 w-64 h-60 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:h-72 lg:w-72  xl:w-96 xl:h-96 overflow-hidden rounded-full mx-auto">
                <img
                  className="w-3/4 h-full mt-5 text-center mx-auto"
                  src={image}
                ></img>
            </div>
          </div>
          {/* right end */}
        </div>
      </div>
      {/* content section end */}
    </>
  );
};

export default Banner;
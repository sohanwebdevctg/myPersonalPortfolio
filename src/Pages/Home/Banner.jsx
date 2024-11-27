import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import image from '../../../public/image.png';
import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <>
      {/* content section start */}
      <div className="container mx-auto py-10 sm:py-5">
        <div className="flex flex-col sm:flex-row justify-around sm:justify-between items-center h-full sm:h-screen md:h-screen lg:h-screen xl:h-screen 2xl:h-screen gap-10 sm:gap-5 md:gap-4 lg:gap-6 relative">
          {/* left start */}
            <div className="w-full sm:w-1/2">
              {/* top item */}
              <span className="text-white font-semibold bg-black shadow-inner shadow-slate-800 py-2 px-3 sm:px-2 xl:px-4 xl:py-2 lg:mb-3 rounded-md text-[10px] sm:text-[8px] md:text-[10px] lg:text-[11px] xl:text-xs 2xl:text-sm inline-block">
                SOHANWEBDEVCTG
              </span>
              <h2 className="text-lg sm:text-base md:text-xl lg:text-[22px] xl:text-2xl 2xl:text-3xl font-bold text-slate-200">
                Hi, I am <span className="text-yellow-400">sohan mozumder</span>
              </h2>
              <h2 className="text-[21px] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold text-slate-200">
                Front-end Web Developer
              </h2>
              <p className="mt-1 md:my-2 text-sm sm:text-[13px] md:text-base lg:text-lg xl:text-lg 2xl:text-xl italic text-gray-500 text-justify">
              Creative and results-driven web developer specializing in React and modern web technologies. Always eager to learn, adapt, and collaborate in dynamic environments to bring ideas to life.
              </p>
              <ul className="flex items-center gap-3 xl:gap-5 mt-3">
                <li className="text-[10px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg px-4 py-2 xl:px-6 xl:py-2 bg-yellow-500 text-white font-bold rounded-md">
                  My Resume
                </li>
                <Link to="/contact">
                <li className="text-[10px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg px-4 py-2 xl:px-6 xl:py-2 rounded-md bg-black shadow-sm shadow-white hover:shadow-yellow-500 duration-300 text-white font-bold">Hire Me
                  
                </li>
                </Link>
              </ul>
              {/* top item */}
              {/* social link */}
              <div className="block sm:hidden mt-3 h-full">
                <ul className="flex gap-2 items-center">
                  <li className="text-slate-500 text-sm">Check out my:</li>
                  <li className="text-sm rounded-full bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500 w-6 h-6 flex justify-center items-center">
                  <FaFacebookF></FaFacebookF>
                  </li>
                  <li className="text-sm rounded-full bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500 w-6 h-6 flex justify-center items-center">
                    <FaTwitter></FaTwitter>
                  </li>
                  <li className="text-sm rounded-full bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500 w-6 h-6 flex justify-center items-center">
                    <FaLinkedinIn></FaLinkedinIn>
                  </li>
                  <li className="text-sm rounded-full bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500 w-6 h-6 flex justify-center items-center">
                    <FaInstagram></FaInstagram>
                  </li>
                  <li className="text-sm rounded-full bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500 w-6 h-6 flex justify-center items-center">
                    <FaGithub></FaGithub>
                  </li>
                </ul>
              </div>
              {/* social link */}
            </div>
          {/* left end */}
          {/* right start */}
          <div className="w-full sm:w-1/2">
            <div className="imgAnimation bg-yellow-500 w-64 h-60 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:h-80 lg:w-80 xl:w-96 xl:h-96 2xl:w-[400px] 2xl:h-[400px] overflow-hidden rounded-full mx-auto">
                <img
                  className="w-3/4 h-full mt-5 text-center mx-auto"
                  src={image}
                ></img>
            </div>
          </div>
          {/* right end */}
          {/* social section start */}
          <div className="hidden sm:block absolute bottom-0 left-0 w-full">
              <ul className="flex gap-2 items-center">
              <li className="text-slate-500 sm:text-xs md:text-sm lg:text-base">Check out my:</li>
              <li className="sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg rounded-full bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:h-8 xl:w-8 2xl:w-9 2xl:h-9 flex justify-center items-center">
                <FaFacebookF></FaFacebookF>
              </li>
              <li className="sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg rounded-full bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:h-8 xl:w-8 2xl:w-9 2xl:h-9 flex justify-center items-center">
                <FaTwitter></FaTwitter>
              </li>
              <li className="sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg rounded-full bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:h-8 xl:w-8 2xl:w-9 2xl:h-9 flex justify-center items-center">
                <FaLinkedinIn></FaLinkedinIn>
              </li>
              <li className="sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg rounded-full bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:h-8 xl:w-8 2xl:w-9 2xl:h-9 flex justify-center items-center">
                <FaInstagram></FaInstagram>
              </li>
              <li className="sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg rounded-full bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:h-8 xl:w-8 2xl:w-9 2xl:h-9 flex justify-center items-center">
                <FaGithub></FaGithub>
              </li>
            </ul>
          </div>
          {/* social section end */}
        </div>
      </div>
      {/* content section end */}
    </>
  );
};

export default Banner;
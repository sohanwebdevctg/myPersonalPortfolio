import { FaFacebookF, FaGithub, FaArrowDown, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import image from '../../../public/image.png';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from "react";
import { AuthContext } from './../../Components/Providers/Providers';




const Banner = () => {

  // AOS
  useEffect(() => {
    AOS.init();
  },[]);

  // context
  const {color} = useContext(AuthContext);


  return (
    <>
      {/* content section start */}
      <div className="container mx-auto py-10 sm:py-5">
        <div className="flex flex-col sm:flex-row justify-around sm:justify-between items-center h-full sm:h-screen md:h-screen lg:h-screen xl:h-screen 2xl:h-screen gap-10 sm:gap-5 md:gap-4 lg:gap-6 relative">
          {/* left start */}
            <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500" className="w-full sm:w-1/2">
              {/* top item */}
              <span className={` font-semibold ${color ? 'text-black bg-white shadow-inner shadow-slate-300' :'text-white bg-black shadow-inner shadow-slate-800'} py-2 px-3 sm:px-2 xl:px-4 xl:py-2 lg:mb-3 rounded-md text-[10px] sm:text-[8px] md:text-[10px] lg:text-[11px] xl:text-xs 2xl:text-sm inline-block`}>
                SOHANWEBDEVCTG
              </span>
              <h2 className={`text-lg sm:text-base md:text-xl lg:text-[22px] xl:text-2xl 2xl:text-3xl font-bold ${color ? 'text-black' : 'text-slate-200'}`}>
                Hi, I am <span className={`${color ? 'text-red-500' : 'text-yellow-400'}`}>sohan mozumder</span>
              </h2>
              <h2 className={`text-[21px] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold ${color ? 'text-black' : 'text-slate-200'}`}>
                Front-end Web Developer
              </h2>
              <p className="mt-1 md:my-2 text-sm sm:text-[13px] md:text-base lg:text-lg xl:text-lg 2xl:text-xl italic text-gray-500 text-justify">
              Creative and results-driven web developer specializing in React and modern web technologies. Always eager to learn, adapt, and collaborate in dynamic environments to bring ideas to life.
              </p>
              <ul className="flex items-center gap-3 xl:gap-5 mt-3">
              <li>
                <a href="/public/reasume of md. amir hossain sohan.pdf" download className={`text-xs sm:text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg px-4 py-2 xl:px-6 xl:py-2 ${color ? 'bg-red-500' : 'bg-yellow-500'} text-white font-bold rounded-md flex items-center gap-1`}>My Resume
                <FaArrowDown></FaArrowDown></a>
                </li>
                <Link to="/contact">
                <li className={`text-xs sm:text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg px-4 py-2 xl:px-6 xl:py-2 rounded-md ${color ? 'bg-white shadow-inner shadow-slate-300 text-black hover:shadow-red-500 hover:duration-500 hover:shadow-sm' : 'bg-black text-white hover:shadow-yellow-500 duration-300 shadow-sm shadow-white'}  font-bold`}>Hire Me
                </li>
                </Link>
              </ul>
              {/* top item */}
              {/* social link */}
              <div className="block sm:hidden mt-4 h-full">
                <ul className="flex gap-2 items-center">
                  <li className="text-slate-500 text-sm">Check out my:</li>
                  <li><Link to="https://www.facebook.com/sohanwebdevctg" target="_blank" className={`text-sm rounded-full  ${color ? 'bg-white shadow-inner shadow-slate-300 text-black hover:text-red-500' : 'bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500'} w-6 h-6 flex justify-center items-center`}><FaFacebookF></FaFacebookF></Link>
                  </li>
                  <li><Link to="https://www.linkedin.com/in/sohanwebdevctg" target="_blank" className={`text-sm rounded-full  ${color ? 'bg-white shadow-inner shadow-slate-300 text-black hover:text-red-500' : 'bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500'} w-6 h-6 flex justify-center items-center`}><FaLinkedinIn></FaLinkedinIn></Link>
                  </li>
                  <li>
                    <Link to="https://x.com/sohanwebdevctg" target="_blank" className={`text-sm rounded-full  ${color ? 'bg-white shadow-inner shadow-slate-300 text-black hover:text-red-500' : 'bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500'} w-6 h-6 flex justify-center items-center`}><FaTwitter></FaTwitter>
                    </Link>
                  </li>
                  <li><Link to="https://github.com/sohanwebdevctg" target="_blank" className={`text-sm rounded-full  ${color ? 'bg-white shadow-inner shadow-slate-300 text-black hover:text-red-500' : 'bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500'} w-6 h-6 flex justify-center items-center`}><FaGithub></FaGithub></Link>
                  </li>
                </ul>
              </div>
              {/* social link */}
            </div>
          {/* left end */}
          {/* right start */}
          <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500" className="w-full sm:w-1/2">
            <div className={`imgAnimation ${color ? 'bg-red-500' : 'bg-yellow-500'} w-64 h-60 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:h-80 lg:w-80 xl:w-96 xl:h-96 2xl:w-[400px] 2xl:h-[400px] overflow-hidden rounded-full mx-auto`}>
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
              <li><Link to="https://www.facebook.com/sohanwebdevctg" target="_blank" className={`sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg rounded-full ${color ? 'bg-white shadow-inner shadow-slate-300 text-black hover:text-red-500' : 'bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500'} duration-300 easy-in sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:h-8 xl:w-8 2xl:w-9 2xl:h-9 flex justify-center items-center`}><FaFacebookF></FaFacebookF></Link>
              </li>
              <li><Link to="https://www.linkedin.com/in/sohanwebdevctg" target="_blank" className={`sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg rounded-full ${color ? 'bg-white shadow-inner shadow-slate-300 text-black hover:text-red-500' : 'bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500'} duration-300 easy-in sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:h-8 xl:w-8 2xl:w-9 2xl:h-9 flex justify-center items-center`}><FaLinkedinIn></FaLinkedinIn></Link></li>
              <li><Link to="https://x.com/sohanwebdevctg" target="_blank" className={`sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg rounded-full ${color ? 'bg-white shadow-inner shadow-slate-300 text-black hover:text-red-500' : 'bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500'} duration-300 easy-in sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:h-8 xl:w-8 2xl:w-9 2xl:h-9 flex justify-center items-center`}><FaTwitter></FaTwitter></Link></li>
              <li><Link to="https://github.com/sohanwebdevctg" target="_blank" className={`sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg rounded-full ${color ? 'bg-white shadow-inner shadow-slate-300 text-black hover:text-red-500' : 'bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500'} duration-300 easy-in sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:h-8 xl:w-8 2xl:w-9 2xl:h-9 flex justify-center items-center`}><FaGithub></FaGithub></Link>
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
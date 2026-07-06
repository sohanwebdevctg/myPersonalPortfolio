import { useContext } from "react";
import { AuthContext } from "../Providers/Providers";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const Footer = () => {

  const {color} = useContext(AuthContext);

  return (
    <div className={`${color ? 'border-red-500' : 'border-yellow-500'} h-full w-full flex flex-col sm:flex-row justify-between items-center gap-5 border-t-[1px] px-3  py-5 sm:px-8 md:px-10 lg:px-12 mt-5`}>
      {/* year section start */}
      <div className="flex-1">
        <p className="text-slate-500 text-sm sm:text-xs md:text-sm lg:text-base">© 2022 - 2026 • All Rights Reserved</p>
      </div>
      {/* year section end */}
      {/* social section start */}
          <div className="w-full flex-1 text-right">
              <ul className="flex gap-3 sm:gap-2 items-center justify-center sm:justify-end">
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
  );
};

export default Footer;
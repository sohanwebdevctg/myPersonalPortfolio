import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import image from '../../../public/image4.png';


const Banner = () => {
  return (
    <>
      {/* content section start */}
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center h-full sm:h-screen gap-5">
          {/* left start */}
            <div className="flex-1">
              {/* top item */}
              <span className="text-white font-semibold bg-black shadow-inner shadow-slate-800 px-5 py-2 lg:mb-3 rounded-md text-xs inline-block">
                SOHANWEBDEVCTG
              </span>
              <h2 className="xl:text-2xl font-bold text-slate-200">
                Hi, I am <span className="text-yellow-400">sohan mozumder</span>
              </h2>
              <h2 className="xl:text-4xl font-extrabold text-slate-200">
                Front-end Web Developer
              </h2>
              <p className="lg:my-3 lg:text-lg italic text-gray-500">
                
              </p>
              <ul className="flex gap-5">
                <li className="text-base px-6 py-2 bg-yellow-500 text-white font-bold rounded-md">
                  Download CV
                </li>
                <li className="text-base px-6 py-2 rounded-md bg-black shadow-sm shadow-white hover:shadow-yellow-500 duration-300 text-white font-bold">
                  Hire Us Now
                </li>
              </ul>
              {/* top item */}
              {/* social link  */}
              <div className="relative top-32 h-full">
            <ul className="flex gap-2 items-center">
              <li className="text-slate-500">Check out my:</li>
              <li className="text-lg rounded-full bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500 w-9 h-9 flex justify-center items-center">
                <FaFacebookF></FaFacebookF>
              </li>
              <li className="text-lg rounded-full bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500 w-9 h-9 flex justify-center items-center">
                <FaTwitter></FaTwitter>
              </li>
              <li className="text-lg rounded-full bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500 w-9 h-9 flex justify-center items-center">
                <FaLinkedinIn></FaLinkedinIn>
              </li>
              <li className="text-lg rounded-full bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500 duration-300 w-9 h-9 flex justify-center items-center">
                <FaInstagram></FaInstagram>
              </li>
            </ul>
          </div>
              {/* social link */}
            </div>
          {/* left end */}
          {/* right start */}
          <div className="flex-1">
            <div className="imgAnimation bg-yellow-500  xl:w-[400px] xl:h-[400px] overflow-hidden rounded-full mx-auto">
                <img
                  className="w-80 h-96 mt-5 text-center mx-auto"
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
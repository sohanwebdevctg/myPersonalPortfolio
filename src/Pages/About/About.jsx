import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Title from "../../Components/Title/Title";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from "react";
import { AuthContext } from './../../Components/Providers/Providers';


const About = () => {

  // AOS
  useEffect(() => {
    AOS.init();
  },[]);

  const {color} = useContext(AuthContext);


  return (
    <>
        {/* title section start */}
        <Title name={'About'}></Title>
    {/* title section end */}
      {/* content section start */}
        <div className="container mx-auto py-10 overflow-hidden">
          {/* about and experience start */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-5 lg:gap-7 xl:gap-10">
            {/* about start */}
            <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500" className="w-full sm:w-1/2">
            <h2 className={`text-base sm:text-base md:text-xl lg:text-[22px] xl:text-2xl 2xl:text-3xl font-bold ${color ? 'text-black' : 'text-slate-200'}`}>
                Hi, I am <span className={`${color ? 'text-red-500' : 'text-yellow-400'} `}>sohan mozumder</span>
              </h2>
              <h2 className={`text-[21px] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold ${color ? 'text-black' :'text-slate-200'}`}>
                Front-end Web Developer
              </h2>
              <p className="mt-1 md:my-2 text-sm sm:text-[13px] md:text-sm lg:text-bage xl:text-lg 2xl:text-xl italic text-gray-500 text-justify">
              I started my career as a front-end web developer, which deepened my interest in the field. I love my job and feel very comfortable working in this domain. Currently, I provide my services using the React.js library. Additionally, I am always eager to learn and adapt to new libraries and frameworks.
              </p>
              <p className="mt-1 md:my-2 text-sm sm:text-[13px] md:text-sm lg:text-base xl:text-lg 2xl:text-xl italic text-gray-500 text-justify">
              Hi, my name is Sohan Mozumder. I have been working in the front-end web development industry for 3 years, providing services to a variety of clients. I live in Chattogram, Bangladesh. I completed my Secondary School Certificate (SSC) in 2017 and my Higher Secondary Certificate (HSC) in 2019, graduating from BN School and College. Additionally, I completed a Front-End Web Development program (2021–2023) at Programming Hero.
              </p>
              <ul className="flex gap-2 items-center mt-5">
              <li className="text-slate-500 sm:text-xs md:text-sm lg:text-base">Check out my:</li>
              <li className={`${color ? 'bg-white shadow-inner shadow-slate-300 text-black hover:text-red-500' : 'bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500'} text-sm sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg rounded-full w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:h-8 xl:w-8 2xl:w-9 2xl:h-9 flex justify-center items-center`}>
                <FaFacebookF></FaFacebookF>
              </li>
              <li className={`${color ? 'bg-white shadow-inner shadow-slate-300 text-black hover:text-red-500' : 'bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500'} text-sm sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg rounded-full w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:h-8 xl:w-8 2xl:w-9 2xl:h-9 flex justify-center items-center`}>
                <FaTwitter></FaTwitter>
              </li>
              <li className={`${color ? 'bg-white shadow-inner shadow-slate-300 text-black hover:text-red-500' : 'bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500'} text-sm sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg rounded-full w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:h-8 xl:w-8 2xl:w-9 2xl:h-9 flex justify-center items-center`}>
                <FaLinkedinIn></FaLinkedinIn>
              </li>
              <li className={`${color ? 'bg-white shadow-inner shadow-slate-300 text-black hover:text-red-500' : 'bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500'} text-sm sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg rounded-full w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:h-8 xl:w-8 2xl:w-9 2xl:h-9 flex justify-center items-center`}>
                <FaInstagram></FaInstagram>
              </li>
              <li className={`${color ? 'bg-white shadow-inner shadow-slate-300 text-black hover:text-red-500' : 'bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500'} text-sm sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg rounded-full w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:h-8 xl:w-8 2xl:w-9 2xl:h-9 flex justify-center items-center`}>
                <FaGithub></FaGithub>
              </li>
            </ul>
            </div>
            {/* about end */}
            {/* experience start */}
            <div className="w-full sm:w-1/2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-2 sm:gap-3 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
              <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500" className={`${color ? 'bg-red-500' : 'bg-yellow-400'}  py-4 sm:py-6 md:py-6 lg:py-6 xl:py-6 text-center space-y-1 rounded-sm`}>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-white">3+</h3>
                <p className={`text-[10px] sm:text-[11px] md:text-sm lg:text-base xl:text-lg 2xl:text-xl ${color ? 'text-black' : 'text-gray-500'}  italic`}>Years of experience</p>
              </div>
              <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="525" className={`${color ? 'bg-red-500' : 'bg-yellow-400'}  py-4 sm:py-6 md:py-6 lg:py-6 xl:py-6 text-center space-y-1 rounded-sm`}>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-white">3+</h3>
                <p className={`text-[10px] sm:text-[11px] md:text-sm lg:text-base xl:text-lg 2xl:text-xl ${color ? 'text-black' : 'text-gray-500'}  italic`}>Front-end Development</p>
              </div>
              <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="550" className={`${color ? 'bg-red-500' : 'bg-yellow-400'}  py-4 sm:py-6 md:py-6 lg:py-6 xl:py-6 text-center space-y-1 rounded-sm`}>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-white">21+</h3>
                <p className={`text-[10px] sm:text-[11px] md:text-sm lg:text-base xl:text-lg 2xl:text-xl ${color ? 'text-black' : 'text-gray-500'}  italic`}>Happy Customer</p>
              </div>
              <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="575" className={`${color ? 'bg-red-500' : 'bg-yellow-400'}  py-4 sm:py-6 md:py-6 lg:py-6 xl:py-6 text-center space-y-1 rounded-sm`}>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-white">110+</h3>
                <p className={`text-[10px] sm:text-[11px] md:text-sm lg:text-base xl:text-lg 2xl:text-xl ${color ? 'text-black' : 'text-gray-500'}  italic`}>Client Project</p>
              </div>
            </div>
            {/* experience end */}
          </div>
          {/* about and experience end */}
          {/* skill start */}
          <div data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="500" className={`mt-10 ${color ? 'bg-white shadow-inner shadow-slate-300' : 'bg-black shadow-inner shadow-slate-800'}  p-5 sm:p-6 md:p-7 lg:p-8 xl:p-9 2xl:p-10`}>
            <div className="mb-5">
            <h2 className={`text-lg sm:text-lg md:text-xl lg:text-[22px] xl:text-2xl 2xl:text-3xl font-bold ${color ? 'text-black' : 'text-slate-200'} `}>
                Expert <span className={`${color ? 'text-red-500' : 'text-yellow-400'} `}>In</span>
              </h2>
            </div>
            <ul className="space-y-6 xl:space-y-10">
              <li className={`h-3 ${color ? 'bg-black' :'bg-slate-200'} rounded-lg flex items-center`}>
                <span className={` ${color ? 'bg-red-500 text-white' : 'bg-yellow-500 text-black'}  h-3 rounded-lg w-[80%] flex items-center justify-center text-[10px] `}>HTML</span>
                <span className=" w-[20%]"><span className={`${color ? 'bg-white text-black border-[1px] border-red-500' : 'bg-black text-white border-[1px] border-yellow-400'}  rounded-full flex justify-center items-center p-2 w-7 h-7 z-50  text-[10px] -ml-3`}>80%</span></span>
              </li>
              <li className={`h-3 ${color ? 'bg-black' :'bg-slate-200'} rounded-lg flex items-center`}>
                <span className={` ${color ? 'bg-red-500 text-white' : 'bg-yellow-500 text-black'} h-3 rounded-lg w-[70%] flex items-center justify-center text-[10px] `}>CSS</span>
                <span className=" w-[30%]"><span className={` ${color ? 'bg-white text-black border-[1px] border-red-500' : 'bg-black text-white border-[1px] border-yellow-400'} rounded-full flex justify-center items-center p-2 w-7 h-7 z-50  text-[10px] -ml-3`}>70%</span></span>
              </li>
              <li className={`h-3 ${color ? 'bg-black' :'bg-slate-200'} rounded-lg flex items-center`}>
                <span className={` ${color ? 'bg-red-500 text-white' : 'bg-yellow-500 text-black'} h-3 rounded-lg w-[60%] flex items-center justify-center text-[10px]`}>JavaScript</span>
                <span className=" w-[40%]"><span className={`${color ? 'bg-white text-black border-[1px] border-red-500' : 'bg-black text-white border-[1px] border-yellow-400'} rounded-full flex justify-center items-center p-2 w-7 h-7 z-50  text-[10px] -ml-3`}>60%</span></span>
              </li>
              <li className={`h-3 ${color ? 'bg-black' :'bg-slate-200'} rounded-lg flex items-center`}>
                <span className={` ${color ? 'bg-red-500 text-white' : 'bg-yellow-500 text-black'} h-3 rounded-lg w-[70%] flex items-center justify-center text-[10px] `}>React</span>
                <span className=" w-[30%]"><span className={` ${color ? 'bg-white text-black border-[1px] border-red-500' : 'bg-black text-white border-[1px] border-yellow-400'} rounded-full flex justify-center items-center p-2 w-7 h-7 z-50 text-[10px] -ml-3`}>70%</span></span>
              </li>
            </ul>
          </div>
          {/* skill end */}
        </div>
      {/* content section end */}
    </>
  );
};

export default About;
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Title from "../../Components/Title/Title";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from "react";
import { AuthContext } from './../../Components/Providers/Providers';
import { Link } from "react-router-dom";


const Contact = () => {

  // AOS
  useEffect(() => {
    AOS.init();
  },[]);

  // form data
  const contactForm = (event) => {
    event.preventDefault();
  };

  // context
  const {color} = useContext(AuthContext);


  return (
    <>
        {/* title section start */}
        <Title name={'Contact'}></Title>
    {/* title section end */}
      {/* content section start */}
      <div className='container mx-auto py-10 sm:py-10'>
        <div className="flex flex-col sm:flex-row justify-around sm:justify-between items-center h-full sm:h-screen md:h-screen lg:h-screen xl:h-screen 2xl:h-screen gap-10 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5">
          {/* left start */}
          <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500" className="w-full sm:w-1/2 flex flex-col justify-around h-full gap-6 sm:gap-0 xl:gap-6 2xl:gap-5">
            <h3 className={`text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-5xl ${color ? 'text-black' : 'text-white'}`}>Let's talk <br></br>on something <span className={`${color ?'text-red-500' :'text-yellow-400'}`}>great</span> <br></br>together</h3>
            <ul className="space-y-3 sm:space-y-5 md:space-y-6 xl:space-y-7">
              <li className="flex gap-1 sm:gap-2 xl:gap-3 items-center">
                <BsFillTelephoneFill className={`${color ? 'bg-white shadow-inner shadow-slate-300 text-red-500' : 'bg-black shadow-inner shadow-slate-800 text-yellow-400'} text-[22px] md:text-[24px] lg:text-[27px] xl:text-3xl 2xl:text-4xl rounded-full p-1 xl:p-2 `}></BsFillTelephoneFill>
                <span className={`text-sm sm:text-xs md:text-[15px] lg:text-base xl:text-base 2xl:text-lg ${color ? 'text-black' : 'text-white'}`}>+880 168107 5783</span>
              </li>
              <li className="flex gap-1 sm:gap-2 xl:gap-3 items-center">
                <CgMail className={`${color ? 'bg-white shadow-inner shadow-slate-300 text-red-500' : 'bg-black shadow-inner shadow-slate-800 text-yellow-400'} text-[22px] md:text-[24px] lg:text-[27px] xl:text-3xl 2xl:text-4xl rounded-full p-1 xl:p-2 `}></CgMail>
                <span className={`text-sm sm:text-xs md:text-[15px] lg:text-base xl:text-base 2xl:text-lg ${color ? 'text-black' : 'text-white'}`}>amirhossainsohan0@gmail.com</span></li>
              <li className="flex gap-1 sm:gap-2 xl:gap-3 items-center">
                <FaLocationDot className={`${color ? 'bg-white shadow-inner shadow-slate-300 text-red-500' : 'bg-black shadow-inner shadow-slate-800 text-yellow-400'} text-[22px] md:text-[24px] lg:text-[27px] xl:text-3xl 2xl:text-4xl rounded-full p-1 xl:p-2 `}></FaLocationDot>
                <span className={`text-sm sm:text-xs md:text-[15px] lg:text-base xl:text-base 2xl:text-lg ${color ? 'text-black' : 'text-white'}`}>South Patenga,<br></br>
                Chattogram Bangladesh</span>
              </li>
            </ul>
            {/* icon section start */}
            <ul className="flex gap-2 items-center">
              <li className="text-slate-500 sm:text-xs md:text-sm lg:text-base">Check out my:</li>
              <li>
                <Link to="https://www.facebook.com/sohanwebdevctg" target="_blank" className={`${color ? 'bg-white shadow-inner shadow-slate-300 text-black hover:text-red-500' : 'bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500'} text-sm sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg rounded-full w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:h-8 xl:w-8 2xl:w-9 2xl:h-9 flex justify-center items-center`}><FaFacebookF></FaFacebookF></Link>
              </li>
              <li><Link to="https://www.linkedin.com/in/sohanwebdevctg" target="_blank" className={`${color ? 'bg-white shadow-inner shadow-slate-300 text-black hover:text-red-500' : 'bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500'} text-sm sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg rounded-full w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:h-8 xl:w-8 2xl:w-9 2xl:h-9 flex justify-center items-center`}><FaLinkedinIn></FaLinkedinIn></Link>
              </li>
              <li><Link to="https://x.com/sohanwebdevctg" target="_blank" className={` ${color ? 'bg-white shadow-inner shadow-slate-300 text-black hover:text-red-500' : 'bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500'} text-sm sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg rounded-full w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:h-8 xl:w-8 2xl:w-9 2xl:h-9 flex justify-center items-center`}><FaTwitter></FaTwitter></Link>
              </li>
              <li>
                <Link to="https://github.com/sohanwebdevctg" target="_blank" className={`${color ? 'bg-white shadow-inner shadow-slate-300 text-black hover:text-red-500' : 'bg-black shadow-inner shadow-slate-800 text-white hover:text-yellow-500'} text-sm sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg rounded-full w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:h-8 xl:w-8 2xl:w-9 2xl:h-9 flex justify-center items-center`}><FaGithub></FaGithub></Link>
              </li>
            </ul>
            {/* icon section end */}
          </div>
          {/* left end */}
          {/* right start */}
          <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500" className="w-full sm:w-1/2">
            <form onSubmit={contactForm} className={`formCon ${color ? 'bg-slate-100':'bg-yellow-400'} p-4 xl:p-8 space-y-3 sm:space-y-3 xl:space-y-5 rounded-md`}>
              <div>
                <h1 className={`${color ? 'text-red-400' : 'text-black'} text-lg sm:text-lg md:text-xl lg:text-[22px] xl:text-2xl 2xl:text-3xl font-bold`}>Send Message</h1>
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
                <button type="submit" className={`${color ? 'bg-red-500' : 'bg-black'} text-white p-2 2xl:p-3 text-[10px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-sm 2xl:text-base rounded-md font-bold`}>Send Message</button>
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
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const About = () => {
  return (
    <>
      {/* content section start */}
        <div className="container mx-auto py-10">
          {/* about and experience start */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-5 lg:gap-7 xl:gap-10">
            {/* about start */}
            <div className="w-full sm:w-1/2">
            <h2 className="text-base sm:text-base md:text-xl lg:text-[22px] xl:text-2xl 2xl:text-3xl font-bold text-slate-200">
                Hi, I am <span className="text-yellow-400">sohan mozumder</span>
              </h2>
              <h2 className="text-[21px] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold text-slate-200">
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
            </div>
            {/* about end */}
            {/* experience start */}
            <div className="w-full sm:w-1/2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-2 sm:gap-3 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
              <div className="bg-yellow-400 py-4 sm:py-6 md:py-6 lg:py-6 xl:py-6 text-center space-y-1 rounded-sm">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-white">3+</h3>
                <p className="text-[10px] sm:text-[11px] md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-500 italic">Years of experience</p>
              </div>
              <div className="bg-yellow-400 py-4 sm:py-6 md:py-6 lg:py-6 xl:py-6 text-center space-y-1 rounded-sm">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-white">3+</h3>
                <p className="text-[10px] sm:text-[11px] md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-500 italic">Front-end Development</p>
              </div>
              <div className="bg-yellow-400 py-4 sm:py-6 md:py-6 lg:py-6 xl:py-6 text-center space-y-1 rounded-sm">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-white">21+</h3>
                <p className="text-[10px] sm:text-[11px] md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-500 italic">Happy Customer</p>
              </div>
              <div className="bg-yellow-400 py-4 sm:py-6 md:py-6 lg:py-6 xl:py-6 text-center space-y-1 rounded-sm">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-white">110+</h3>
                <p className="text-[10px] sm:text-[11px] md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-500 italic">Client Project</p>
              </div>
            </div>
            {/* experience end */}
          </div>
          {/* about and experience end */}
          {/* skill start */}
          <div className="mt-10">
            <ul className="space-y-6 xl:space-y-10">
              <li className="h-4 bg-slate-100 rounded-lg flex items-center">
                <span className="bg-yellow-500 h-4 rounded-lg w-[80%] flex items-center justify-center text-xs text-black">HTML</span>
                <span className=" w-[20%]"><span className="bg-black text-white rounded-full flex justify-center items-center p-2 w-8 h-8 z-50 border-[1px] border-yellow-400 text-[10px] xl:text-sm -ml-3">80%</span></span>
              </li>
              <li className="h-4 bg-slate-100 rounded-lg flex items-center">
                <span className="bg-yellow-500 h-4 rounded-lg w-[70%] flex items-center justify-center text-xs text-black">CSS</span>
                <span className=" w-[30%]"><span className="bg-black text-white rounded-full flex justify-center items-center p-2 w-8 h-8 z-50 border-[1px] border-yellow-400 text-[10px] xl:text-sm -ml-3">70%</span></span>
              </li>
              <li className="h-4 bg-slate-100 rounded-lg flex items-center">
                <span className="bg-yellow-500 h-4 rounded-lg w-[60%] flex items-center justify-center text-xs text-black">JavaScript</span>
                <span className=" w-[40%]"><span className="bg-black text-white rounded-full flex justify-center items-center p-2 w-8 h-8 z-50 border-[1px] border-yellow-400 text-[10px] xl:text-sm -ml-3">60%</span></span>
              </li>
              <li className="h-3 xl:h-4 bg-slate-100 rounded-lg flex items-center">
                <span className="bg-yellow-500 h-3 xl:h-4 rounded-lg w-[70%] flex items-center justify-center text-[10px] xl:text-xs text-black">React</span>
                <span className=" w-[30%]"><span className="bg-black text-white rounded-full flex justify-center items-center p-2 w-8 h-8 z-50 border-[1px] border-yellow-400 text-[10px] xl:text-sm -ml-3">70%</span></span>
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
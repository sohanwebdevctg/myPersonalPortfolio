import { useContext, useEffect } from "react";
import { AuthContext } from "../../Components/Providers/Providers";
import { FaCode, FaDatabase, FaLaptopCode} from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
  {
    title: "Frontend Development",
    description: "Building responsive, interactive UIs with React, Next.js, and Tailwind CSS.",
    icon: FaCode
  },
  {
    title: "Backend Development", 
    description: "Creating scalable RESTful APIs with Node.js, Express, and MongoDB.", 
    icon: FaDatabase
  },
  {
    title: "Full-Stack Solutions", 
    description: "End-to-end web applications with seamless frontend-backend integration.", 
    icon: FaLaptopCode
  },
];

const Ido = () => {

  // AOS
      useEffect(() => {
        AOS.init();
      },[])

  // context
  const { color } = useContext(AuthContext);

  return (
    <div className="my-10">
      {/* title start */}
      <div className="text-center my-5">
        <h3 className={`text-2xl lg:text-3xl font-bold mb-2 ${color ? 'text-black' : 'text-slate-200'}`}>What I Do</h3>
        <p className="text-gray-500 text-sm sm:text-[13px] md:text-base lg:text-lg xl:text-lg 2xl:text-xl mx-auto italic">
          I specialize in building modern, scalable web applications with a focus on user<br></br> experience and performance.
        </p>
      </div>
      {/* title end */}

      {/* card start */}
      <div className="container mx-auto py-10 sm:py-5 ">
        {/* item start */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 sm:gap-4 md:gap-5 lg:gap-4 xl:gap-5 2xl:gap-6 h-full`}>
          {
            data?.map((item, index) => {
              const IconComponent = item.icon;

              return (
                <div key={index} data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="500" className="h-full w-full">
                  <div className={`${color ? 'bg-white shadow-inner shadow-slate-300' : 'bg-black shadow-inner shadow-slate-600'} serviceCon p-4 sm:p-4 md:p-4 lg:p-5 xl:p-6 2xl:p-7 flex flex-col justify-between gap-3 sm:gap-3 md:gap-4 xl:gap-2 h-full w-full`}>
                    <div className="flex flex-col gap-2">
                      {IconComponent && (<IconComponent className={`${color ? 'text-red-500' : 'text-yellow-400'} text-3xl md:text-4xl`} />)}
                      <h2 className={`${color ? 'text-black' : 'text-white'} font-bold text-base sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-2xl`}>{item.title}</h2>
                      <p className={`${color ? 'text-black':'text-gray-300'} italic text-xs sm:text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-base `}><span>{item.description}</span>
                      </p>
                    </div>
                    <button className={`${color ? 'bg-red-500' :'bg-yellow-500'} text-white p-2 2xl:p-3 text-xs sm:text-xs md:text-[13px] lg:text-xs xl:text-[13px] 2xl:text-base rounded-sm w-24 sm:w-24 md:w-24 xl:w-28 2xl:w-32 mt-1`}>Follow More</button>
                  </div>
                </div>
              );
            })
          }
        </div>
        {/* item end */}
      </div>
      {/* card end */}
    </div>
  );
};

export default Ido;
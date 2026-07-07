import { useContext, useEffect } from "react";
import { AuthContext } from "../../Components/Providers/Providers";
import AOS from 'aos';
import 'aos/dist/aos.css';


const AboutMe = () => {

  // AOS
    useEffect(() => {
      AOS.init();
    },[]);
  
    const {color} = useContext(AuthContext);

  return (
    <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500">
      <div className={`w-full lg:w-[95%] mx-auto px-3 md:px-6 lg:px-0 pt-8 lg:pt-12`}>
      {/* Main Container with Gradient Card */}
      <div className={`${color ? 'bg-red-500' : 'bg-yellow-400'} rounded-xl p-6 lg:p-8`}>
        
        {/* Available for Remote Status */}
        <div className="flex items-center justify-start mb-3">
        <span className="relative flex h-3 w-3 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
        </span>

        <span className="text-sm font-medium text-white tracking-wide">
          Available for Work
        </span>
      </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-white text-left mb-4 tracking-wide">
          Details About Me
        </h2>

        {/* Paragraphs description */}
        <div className={`text-[10px] sm:text-[12px] md:text-sm lg:text-base xl:text-base 2xl:text-lg space-y-4 ${color ? 'text-black' : 'text-gray-500'}  italic text-justify`}>
          <p>
            I am a passionate Full-Stack Developer specializing in building robust web applications with MERN stack and TypeScript that drive real impact. My core journey is focused on delivering high-performance, optimized web systems while maximizing overall user experience.
          </p>
          
          <p>
            On the frontend, I work extensively with React.js, TypeScript, and Tailwind CSS to design responsive, interactive, and pixel-perfect user interfaces. On the backend, I design secure and scalable architecture using Node.js, Express.js, and MongoDB, ensuring optimal server-side performance and efficient database queries.
          </p>
          
          <p>
            Committed to continuous learning and professional growth, I consistently enhance my workflow by integrating advanced state management and secure authentication pipelines. I strive to adapt to evolving industry trends and deliver high-quality full-stack solutions.
          </p>
        </div>

      </div>
    </div>
    </div>
  );
};

export default AboutMe;
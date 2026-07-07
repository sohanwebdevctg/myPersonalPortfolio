import { useContext, useEffect } from "react";
import { AuthContext } from "../../Components/Providers/Providers";
import AOS from 'aos';
import 'aos/dist/aos.css';

const stack = [
  {name: 'React.js', image: '../react.png'},
  {name: 'Typescript', image: '../typescript.png'},
  {name: 'Node.js', image: '../node.png'},
  {name: 'Express.js', image: '../express.png'},
  {name: 'MongooDB', image: '../mongoodb.png'},
  {name: 'MongooseODM', image: '../mongoose.png'},
];

const CoreStack = () => {

  // AOS
    useEffect(() => {
      AOS.init();
    },[])

  // context
    const {color} = useContext(AuthContext);

  return (
    <div className="my-10">
      {/* title start */}
      <div className="text-center my-5">
        <h3 className={`text-2xl lg:text-3xl font-bold mb-2 ${color ? 'text-black' : 'text-slate-200'}`}>Core Stack</h3>
        <p className="text-gray-500 text-sm sm:text-[13px] md:text-base lg:text-lg xl:text-lg 2xl:text-xl mx-auto italic">
          Technologies I use daily to build high-performance web systems.
        </p>
      </div>
      {/* title end */}
      {/* stack start */}
      <div className="grid grid-cols-3 sm:grid-cols-6 md:flex md:flex-wrap md:justify-center gap-2 sm:gap-1 md:gap-8 lg:gap-9 items-center justify-items-center">
        {stack.map((item, index) => (
          <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500"
            key={index} 
            className="group relative flex flex-col items-center justify-center w-20 h-20 sm:w-16 sm:h-18 md:w-16 md:h-18 lg:w-24 lg:h-24 transition-all duration-300 transform hover:-translate-y-2"
          >
            {/* Image Container */}
            <div className="w-12 h-12 sm:w-10 sm:h-10 md:w-12 md:h-14 lg:w-14 lg:h-14 flex items-center justify-center">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300"
              />
            </div>

            {/* Hover Text Effect */}
            <span className={`absolute bottom-0 text-xs sm:text-[12px] font-semibold tracking-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 ${color ? 'text-slate-700' : 'text-slate-300'}`}>
              {item.name}
            </span>
          </div>
        ))}
      </div>
      {/* stack end */}
    </div>
  );
};

export default CoreStack;
import { useContext } from "react";
import { AuthContext } from "../../Components/Providers/Providers";

const techStackData = [
    {
      category: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js (Familiar)", "Tailwind CSS", "Bootstrap", "Responsive Web Design", "SPA Development", "TanStack Query", "Axios", "Context API", "AOS Animation"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "RESTful API Design", "Mongoose ODM", "Authentication & Authorization", "Role-Based Access Control (RBAC)"]
    },
    {
      category: "Database",
      skills: ["MongoDB (NoSQL)", "MySQL", "Database Design & Modeling"]
    },
    {
      category: "Tools",
      skills: ["VS Code", "Git & GitHub", "Postman", "Swagger", "Firebase", "Slack", "Figma", "Netlify", "Vercel", "JSON"]
    }
  ];

const TechStack = () => {

    const {color} = useContext(AuthContext);

  return (
        <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500" className="w-full lg:w-[95%] mx-auto my-10">
      <div 
    className={`
      ${color ? 'bg-white shadow-inner shadow-slate-300 group' : 'bg-black shadow-inner shadow-slate-600 group'} serviceCon p-4 sm:p-4 md:p-4 lg:p-5 xl:p-6 2xl:p-7 flex flex-col justify-between gap-3 sm:gap-3 md:gap-4 xl:gap-2 h-full w-full transition-all duration-300 rounded-xl cursor-pointer
    `}
  >
        
        {/* Title */}
        <h2 className={`${color ? 'text-black' : 'text-white'} text-2xl lg:text-3xl font-bold mb-6 tracking-wide border-b pb-2 ${color ? 'border-gray-200' : 'border-slate-800'}`}>
          Tech Stack
        </h2>

        {/* Categories Loop */}
        <div className="space-y-6">
          {techStackData.map((item, index) => (
            <div key={index} className="flex flex-col gap-3">
              
              <h3 className={`${color ? 'text-gray-800' : 'text-slate-200'} font-bold text-base sm:text-lg md:text-xl`}>
                {item.category}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {item.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`${color ? 'bg-red-500' : 'bg-yellow-500'} text-white font-medium px-3 py-1.5 text-xs sm:text-xs md:text-sm rounded-md shadow-sm inline-block`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TechStack;
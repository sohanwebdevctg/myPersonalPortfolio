import { useState } from "react";
import { useEffect } from "react";


const Project = () => {

  const [allProject, setAllProject] = useState([])

  useEffect(() => {
    fetch('project.json')
    .then((res) => res.json())
    .then((data) => setAllProject(data))
  },[])


  return (
    <>
      {/* content section start */}
      <div className="container mx-auto py-10 h-full xl:h-full">
        <div className="flex flex-col sm:flex-row justify-between  bg-black shadow-inner shadow-slate-600 p-5 gap-2 xl:gap-10">
          {/* title start */}
          <div>
            <h2 className="text-lg sm:text-lg md:text-xl lg:text-[22px] xl:text-2xl 2xl:text-3xl font-bold text-slate-200">Expert <span className="text-yellow-400">In</span>
            </h2>
          </div>
          {/* title end */}
          {/* button start */}
          <ul className=" flex items-center gap-5 sm:gap-3 md:gap-3 lg:gap-4">
            <li><button className="btn btn-xs md:btn-xs lg:btn-sm xl:btn-sm w-16 sm:w-20 md:w-24 lg:w-28 xl:w-36 2xl:w-40 text-white rounded-sm bg-yellow-400 hover:bg-yellow-400 text-[8px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-sm 2xl:text-base">HTML/CSS</button></li>
            <li><button className="btn btn-xs md:btn-xs lg:btn-sm xl:btn-sm w-16 sm:w-20 md:w-24 lg:w-28 xl:w-36 2xl:w-40 text-white rounded-sm bg-yellow-400 hover:bg-yellow-400 text-[8px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-sm 2xl:text-base">JavaScript/DOM</button></li>
            <li><button className="btn btn-xs md:btn-xs lg:btn-sm xl:btn-sm w-16 sm:w-20 md:w-24 lg:w-28 xl:w-36 2xl:w-40 text-white rounded-sm bg-yellow-400 hover:bg-yellow-400 text-[8px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-sm 2xl:text-base">REACT</button></li>
          </ul>
          {/* button end */}
        </div>
          {/* content start */}
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-5 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-6 2xl:gap-7 mt-10">
            {
              allProject.map((data, index) => <div key={index} className="bg-blue-400">
              <div className="h-64 xl:h-72 2xl:h-72 overflow-hidden">
                <img src={data.image}></img>
              </div>
              <div>
                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ducimus repellendus aperiam commodi! Ullam ipsam nesciunt culpa nihil laborum cumque officiis, inventore saepe officia dolore modi porro magni error ipsum quis hic? Harum dolor dicta inventore. Praesentium, reprehenderit. Dolorem quibusdam necessitatibus voluptatem suscipit rerum blanditiis veniam numquam tempore deserunt! Nihil dolores tempora delectus libero repudiandae aliquid tenetur minus unde corrupti est, nesciunt nemo sit ipsam dolore modi. Nemo molestiae ipsum numquam?</p>
              </div>
            </div>)
            }
            
          </div>
          {/* content end */}
        
      </div>
      {/* content section end */}
    </>
  );
};

export default Project;
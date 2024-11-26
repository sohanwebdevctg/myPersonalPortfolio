import { useState } from "react";
import { useEffect } from "react";


const Project = () => {

  const [allProject, setAllProject] = useState([]);
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    fetch('project.json')
    .then((res) => res.json())
    .then((data) => {
      const html = data.filter((item) => item.projectType === 'html/css')
      setAllProject(html)
    })
  },[])

  // tabs
  const buttonFun = (data) => {
    const selectedTab = allProject.filter((item) => item.projectType === data)
    setTabs(selectedTab)
  }


  return (
    <>
      {/* content section start */}
      <div className="container mx-auto py-10 h-full xl:h-full">
        <div className="flex flex-col sm:flex-row justify-between  bg-black shadow-inner shadow-slate-600 p-5 gap-2 xl:gap-10">
          {/* title start */}
          <div>
            <h2 className="text-lg sm:text-lg md:text-xl lg:text-[22px] xl:text-2xl 2xl:text-3xl font-bold text-slate-200">My <span className="text-yellow-400">Project</span>
            </h2>
          </div>
          {/* title end */}
          {/* button start */}
          <ul className=" flex items-center gap-5 sm:gap-3 md:gap-3 lg:gap-4">
            <li><button onClick={() => buttonFun('html/css')} className="btn btn-xs md:btn-xs lg:btn-sm xl:btn-sm w-16 sm:w-20 md:w-24 lg:w-28 xl:w-36 2xl:w-40 text-white rounded-sm bg-yellow-400 hover:bg-yellow-400 text-[8px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-sm 2xl:text-base">HTML/CSS</button></li>
            <li><button onClick={() => buttonFun('javaScript/dom')} className="btn btn-xs md:btn-xs lg:btn-sm xl:btn-sm w-16 sm:w-20 md:w-24 lg:w-28 xl:w-36 2xl:w-40 text-white rounded-sm bg-yellow-400 hover:bg-yellow-400 text-[8px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-sm 2xl:text-base">JavaScript/DOM</button></li>
            <li><button onClick={() => buttonFun('react')} className="btn btn-xs md:btn-xs lg:btn-sm xl:btn-sm w-16 sm:w-20 md:w-24 lg:w-28 xl:w-36 2xl:w-40 text-white rounded-sm bg-yellow-400 hover:bg-yellow-400 text-[8px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-sm 2xl:text-base">REACT</button></li>
          </ul>
          {/* button end */}
        </div>
          {/* content start */}
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-5 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-6 2xl:gap-7 mt-10">
            {
              (tabs.length > 0 ? tabs : allProject).map((data, index) => <div key={index} className="flex flex-col justify-between projectCon">
              {/* image start */}
              <div className="h-64 xl:h-72 2xl:h-72 projectImg overflow-hidden">
                <img src={data.image}></img>
              </div>
              {/* image end */}
                {/* top start */}
              <div className="xl:p-5">
                <div className="xl:space-y-2">
                  <h3 className="text-yellow-400 font-bold xl:text-xl">{data.projectName}</h3>
                  <p className="xl:text-[13px] text-gray-500">{data.details}</p>
                </div>
              </div>
              {/* top end */}
              {/* bottom start */}
              <div className="xl:p-5 xl:space-y-2">
              <h3 className="text-yellow-400 font-bold xl:text-xl">{data.projectName}</h3>
              <ul className="space-y-1 ">{data.feature.map((item, index) => <li key={index} className="xl:text-[13px] text-gray-500">{++index + '.'} {item}</li>)}</ul>
              </div>
              {/* bottom end */}
              {/* link section start */}
              <div className="xl:p-5">
                <ul className="flex justify-between items-center">
                  <li><button className="btn btn-xs xl:text-sm hover:bg-yellow-500 bg-yellow-500 text-white rounded-sm">Code Link</button></li>
                  <li><button className="btn btn-xs xl:text-sm hover:bg-yellow-500 bg-yellow-500 text-white rounded-sm">Live Link</button></li>
                </ul>
              </div>
              {/* link section end */}
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
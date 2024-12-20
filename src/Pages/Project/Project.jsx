import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Title from "../../Components/Title/Title";
import Loading from "../../Components/Loading/Loading";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from './../../Components/Providers/Providers';


const Project = () => {

  // AOS
  useEffect(() => {
    AOS.init();
  },[]);

  const {color} = useContext(AuthContext);

  // all state function data
  const [previous, setPrevious] = useState([]);
  const [allProject, setAllProject] = useState([]);
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(false);

  // data fetch effect
  useEffect(() => {
    fetch('project.json')
    .then((res) => res.json())
    .then((data) => {
      setLoading(true);
      const html = data.filter((item) => item.projectType === 'html/css');
      setAllProject(html);
      setPrevious(data);
      setLoading(false);
    });
  },[]);

  // tabs function
  const buttonFun = (data) => {
    setLoading(true);
    const selectedTab = previous.filter((item) => item.projectType === data);
    setTabs(selectedTab);
    setLoading(false);
  }

  //loading data
  if(loading){
    return <Loading></Loading>
  }

  return (
    <>
        {/* title section start */}
        <Title name={'Project'}></Title>
    {/* title section end */}
      {/* content section start */}
      <div className="container mx-auto py-10 h-full xl:h-full">
        <div className={`flex flex-col sm:flex-row justify-between ${color ? 'bg-white shadow-inner shadow-slate-300' : 'bg-black shadow-inner shadow-slate-600'}  p-5 gap-2 xl:gap-10`}>
          {/* title start */}
          <div>
            <h2 className={`text-lg sm:text-lg md:text-xl lg:text-[22px] xl:text-2xl 2xl:text-3xl font-bold ${color ? 'text-black' : 'text-slate-200'}`}>My <span className={`${color ? 'text-red-500' : 'text-yellow-400'}`}>Project</span>
            </h2>
          </div>
          {/* title end */}
          {/* button start */}
          <ul className=" flex items-center gap-5 sm:gap-3 md:gap-3 lg:gap-4">
            <li><button onClick={() => buttonFun('html/css')} className={`btn btn-xs md:btn-xs lg:btn-sm xl:btn-sm w-16 sm:w-20 md:w-24 lg:w-28 xl:w-36 2xl:w-40 text-white rounded-sm ${color ? 'bg-red-500 hover:bg-red-500' :'bg-yellow-400 hover:bg-yellow-400'} text-[8px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-sm 2xl:text-base`}>HTML/CSS</button></li>
            <li><button onClick={() => buttonFun('javaScript/dom')} className={`btn btn-xs md:btn-xs lg:btn-sm xl:btn-sm w-16 sm:w-20 md:w-24 lg:w-28 xl:w-36 2xl:w-40 text-white rounded-sm ${color ? 'bg-red-500 hover:bg-red-500' :'bg-yellow-400 hover:bg-yellow-400'} text-[8px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-sm 2xl:text-base`}>JavaScript/DOM</button></li>
            <li><button onClick={() => buttonFun('react')} className={`btn btn-xs md:btn-xs lg:btn-sm xl:btn-sm w-16 sm:w-20 md:w-24 lg:w-28 xl:w-36 2xl:w-40 text-white rounded-sm ${color ? 'bg-red-500 hover:bg-red-500' :'bg-yellow-400 hover:bg-yellow-400'} text-[8px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-sm 2xl:text-base`}>REACT</button></li>
          </ul>
          {/* button end */}
        </div>
          {/* content start */}
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-5 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-6 2xl:gap-7 mt-10">
            {
              (tabs.length > 0 ? tabs : allProject).map((data, index) => <div key={index} className="flex flex-col justify-between projectCon" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="500">
              {/* image start */}
              <div className="h-64 xl:h-72 2xl:h-80 projectImg overflow-hidden">
                <img src={data.image}></img>
              </div>
              {/* image end */}
                {/* top start */}
              <div className="p-3 sm:p-3 md:p-3 lg:p-4 xl:p-5 2xl:p-6">
                <div className="space-y-2">
                  <h3 className={`${color ? 'text-red-500' : 'text-yellow-400'} font-bold text-base sm:text-base md:text-lg lg:text-[19px] xl:text-xl 2xl:text-2xl`}>{data.projectName}</h3>
                  <p className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-[13px] 2xl:text-sm text-gray-500 text-justify">{data.details}</p>
                </div>
              </div>
              {/* top end */}
              {/* bottom start */}
              <div className="p-3 sm:p-3 md:p-3 lg:p-4 xl:p-5 2xl:p-6 space-y-2">
                <h3 className={`${color ? 'text-red-500' : 'text-yellow-400'} font-bold text-base sm:text-base md:text-lg lg:text-[19px] xl:text-xl 2xl:text-2xl`}>Feature</h3>
                <ul className="space-y-1">{data.feature.map((item, index) =>   <li key={index} className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-[13px] 2xl:text-sm text-gray-500 text-justify">{++index + '.'} {item}</li>)}</ul>
              </div>
              {/* bottom end */}
              {/* link section start */}
              <div className="p-3 sm:p-3 md:p-3 lg:p-4 xl:p-5 2xl:p-6">
                <ul className="flex justify-between items-center">
                  <li><Link to={data.codeLink} target="_blank"><button className={`btn btn-xs text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-sm 2xl:text-base ${color ? 'hover:bg-red-500 bg-red-500' : 'hover:bg-yellow-500 bg-yellow-500'} text-white rounded-sm`}>Code Link</button></Link></li>
                  <li><Link to={data.liveLink} target="_blank"><button className={`btn btn-xs text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-sm 2xl:text-base ${color ? 'hover:bg-red-500 bg-red-500' : 'hover:bg-yellow-500 bg-yellow-500'} text-white rounded-sm`}>Live Link</button></Link></li>
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
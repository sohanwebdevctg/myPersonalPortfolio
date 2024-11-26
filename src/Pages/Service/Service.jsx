import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Title from "../../Components/Title/Title";

const Service = () => {

  // data loading and setting
  const [allData, setAllData] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetch('service.json')
    .then((res) => res.json())
    .then((data) => {
      setAllData(data)
    })
  },[]);


  return (
    <>
        {/* title section start */}
        <Title name={'Service'}></Title>
    {/* title section end */}
      {/* content section start */}
      <div className="container mx-auto py-10 sm:py-5 ">
        {/* item start */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 sm:gap-4 md:gap-5 lg:gap-4 xl:gap-5 2xl:gap-6 h-full ${toggle ? 'sm:h-full' : 'sm:h-full xl:h-screen'}`}>
          {
            allData.slice(0, toggle ? 12 : 6).map((item,index) => <div className="bg-black shadow-inner shadow-slate-600 serviceCon p-4 sm:p-4 md:p-4 lg:p-5 xl:p-6 2xl:p-7 flex flex-col justify-between gap-3 sm:gap-3 md:gap-4 xl:gap-2" key={index}>
              <div>
                <h2 className="text-white font-bold text-base sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-2xl">{item.name}</h2>
                <ul className="space-y-2 mt-2 2xl:mt-3">
                  {item.description.map((data,index) => <li className="text-gray-300 italic text-xs sm:text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-base flex gap-2 items-center" key={index}><FaArrowRight className="text-yellow-400 text-xs sm:text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-base"></FaArrowRight>{data}</li>)}
                </ul>
              </div>
              <button className="bg-yellow-500 text-white p-2 2xl:p-3 text-xs sm:text-xs md:text-[13px] lg:text-xs xl:text-[13px] 2xl:text-base rounded-sm w-24 sm:w-24 md:w-24 xl:w-28 2xl:w-32">Follow More</button>
            </div>)
          }
        </div>
        {/* item end */}
        {/* button start */}
        <div className="w-full mx-auto text-center mt-8">
          {toggle ? <button onClick={() => setToggle(!toggle)} className="bg-yellow-500 text-white p-2 2xl:p-3 text-[10px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-[13px] 2xl:text-base rounded-sm w-28 mx-auto ">Show Less</button> : <button onClick={() => setToggle(!toggle)} className="bg-yellow-500 text-white p-2 2xl:p-3 text-[10px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-[13px] 2xl:text-base rounded-sm w-28 mx-auto ">Show More</button>}
        </div>
        {/* button end */}
      </div>
      {/* content section end */}
    </>
  );
};

export default Service;
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
        <div className="flex flex-col justify-between xl:gap-10">
          {/* button start */}
          <ul className=" flex justify-center items-center gap-3">
            <li><button className="btn w-48 text-white rounded-sm bg-yellow-400 hover:bg-yellow-400 xl:text-base">HTML/CSS</button></li>
            <li><button className="btn w-48 text-white rounded-sm bg-yellow-400 hover:bg-yellow-400 xl:text-base">JavaScript/DOM</button></li>
            <li><button className="btn w-48 text-white rounded-sm bg-yellow-400 hover:bg-yellow-400 xl:text-base">REACT</button></li>
          </ul>
          {/* button end */}
          {/* content start */}
          <div className=" grid grid-cols-2 gap-5">
            {
              allProject.map((data, index) => <div key={index}>
              <div className="h-64 overflow-hidden">
                  <img src={data.image}></img>
              </div>
              <div>
                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ducimus repellendus aperiam commodi! Ullam ipsam nesciunt culpa nihil laborum cumque officiis, inventore saepe officia dolore modi porro magni error ipsum quis hic? Harum dolor dicta inventore. Praesentium, reprehenderit. Dolorem quibusdam necessitatibus voluptatem suscipit rerum blanditiis veniam numquam tempore deserunt! Nihil dolores tempora delectus libero repudiandae aliquid tenetur minus unde corrupti est, nesciunt nemo sit ipsam dolore modi. Nemo molestiae ipsum numquam? Excepturi doloremque ipsum animi accusantium pariatur reprehenderit rerum, suscipit quod sequi et nobis, officia dicta culpa eum eligendi voluptas ratione maiores? Corporis dolores consequatur beatae, tempore est officiis inventore.</p>
              </div>
            </div>)
            }
            
          </div>
          {/* content end */}
        </div>
      </div>
      {/* content section end */}
    </>
  );
};

export default Project;
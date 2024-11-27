import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Components/Providers/Providers";



const MainLayout = () => {

  const {color} = useContext(AuthContext);


  return (
    <div className={`${color ? 'bg-white' : 'bg-black opacity-95'} `}>
      {/* navbar section start */}
      <Navbar></Navbar>
      {/* navbar section end */}
      {/* content section start */}
      <div className="px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
        <Outlet></Outlet>
      </div>
      {/* content section end */}
    </div>
  );
};

export default MainLayout;
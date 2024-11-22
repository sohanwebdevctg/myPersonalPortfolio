import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";



const MainLayout = () => {
  return (
    <div className="bg-black opacity-95 ">
      {/* navbar section start */}
      <Navbar></Navbar>
      {/* navbar section end */}
      {/* content section start */}
      <div className="h-screen px-5 sm:px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
        <Outlet></Outlet>
      </div>
      {/* content section end */}
    </div>
  );
};

export default MainLayout;
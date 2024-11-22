import { Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
    <>
      {/* content section start */}
      <Outlet></Outlet>
      {/* content section end */}
    </>
  );
};

export default MainLayout;
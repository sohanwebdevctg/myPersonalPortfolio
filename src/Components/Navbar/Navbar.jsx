import { FaUserShield } from "react-icons/fa";
import { NavLink } from "react-router-dom";



const Navbar = () => {
  return (
    <>
      {/* content section start */}
      {/* desktop section start */}
      <div>
        <div className="container mx-auto">
          <div className="flex justify-between items-center h-20">
            {/* logo start */}
            <div><h3 className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-white italic"><span className="text-yellow-500">S</span>ohan</h3></div>
            {/* logo end */}
            {/* router start */}
            <div>
              <ul className="sm:flex sm:items-center sm:gap-4 md:gap-5 lg:gap-7 xl:gap-9 2xl:gap-10">
              <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "sm:text-[11px] md:text-[13px] lg:text-sm xl:text-base 2xl:text-xl font-bold text-yellow-500 duration-300"
                        : "sm:text-[11px] md:text-[13px] lg:text-sm xl:text-base 2xl:text-xl text-white"
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
              <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "sm:text-[11px] md:text-[13px] lg:text-sm xl:text-base 2xl:text-xl font-bold text-yellow-500 duration-300"
                        : "sm:text-[11px] md:text-[13px] lg:text-sm xl:text-base 2xl:text-xl text-white"
                    }
                    to="/"
                  >
                    About
                  </NavLink>
                </li>
              <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "sm:text-[11px] md:text-[13px] lg:text-sm xl:text-base 2xl:text-xl font-bold text-yellow-500 duration-300"
                        : "sm:text-[11px] md:text-[13px] lg:text-sm xl:text-base 2xl:text-xl text-white"
                    }
                    to="/"
                  >
                    Portfolio
                  </NavLink>
                </li>
              <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "sm:text-[10px] md:text-[13px] lg:text-sm xl:text-base 2xl:text-xl font-bold text-yellow-500 duration-300"
                        : "sm:text-[11px] md:text-[13px] lg:text-sm xl:text-base 2xl:text-xl text-white"
                    }
                    to="/"
                  >
                    Contact
                  </NavLink>
                </li>
              <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "sm:text-[11px] md:text-[13px] lg:text-sm xl:text-base 2xl:text-xl font-bold text-yellow-500 duration-300"
                        : "sm:text-[11px] md:text-[13px] lg:text-sm xl:text-base 2xl:text-xl text-white"
                    }
                    to="/"
                  >
                    Blog
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* router end */}
            
          <div>
            <ul className="flex items-center bg-black shadow-inner shadow-slate-700  rounded-2xl text-white sm:px-2 md:px-3 2xl:px-4 sm:py-1 md:py-2 sm:gap-1 md:gap-2">
              <li className="sm:text-[11px] md:text-xs lg:text-[13px] xl:text-sm 2xl:text-base italic">LOGIN</li>
              <li className="sm:text-[11px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg text-yellow-500 duration-300"><FaUserShield></FaUserShield></li>
            </ul>
          </div>
          </div>
        </div>
      </div>
      {/* desktop section end */}
      {/* mobile section start */}
      {/* mobile section end */}
      {/* content section end */}
    </>
  );
};

export default Navbar;
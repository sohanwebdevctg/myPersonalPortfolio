import { useEffect, useState } from "react";
import { FaUserShield } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";



const Navbar = () => {

  // toggle button
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(false);

  // side effect in scrollbar
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 10){
        setActive(true);
      }else{
        setActive(false);
      }
    })
  })



  return (
    <>
      {/* content section start */}
        {/* desktop section start */}
        <div className="hidden sm:block">
          <div className="container mx-auto sm:px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
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
      <div className="block sm:hidden">

          {/* logo and button section start */}
          <div className={`${active ? 'fixed top-0 right-0 left-0 z-50 shadow-md shadow-yellow-300': 'sticky'} flex justify-between items-center px-6 h-20 `}>
            <div>
            <h3 className="text-xl font-bold text-white italic"><span className="text-yellow-500">S</span>ohan</h3>
            </div>
            <div>
              {toggle ? (
                <IoClose
                  onClick={() => setToggle(!toggle)}
                  className="text-yellow-500 text-xl"
                ></IoClose>
              ) : (
                <GiHamburgerMenu
                  onClick={() => setToggle(!toggle)}
                  className="text-yellow-500 text-lg"
                ></GiHamburgerMenu>
              )}
            </div>
          </div>
          {/* logo and button section end */}
          {/* link section start */}
          <div className={`${toggle ? 'top-20 sm:top-24 bottom-0 right-0 left-0' : 'top-20 sm:top-24 -left-96 right-[1000px] bottom-0' } fixed transform duration-500 easy-in bg-black bg-opacity-75 z-50`}>
              <ul className="flex flex-col justify-center items-center h-full w-full gap-7 sm:gap-8">
                <li onClick={() => setToggle(!toggle)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm text-yellow-500 font-bold"
                        : "text-sm text-white"
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li onClick={() => setToggle(!toggle)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm text-yellow-500 font-bold"
                        : "text-sm text-white"
                    }
                    to="/"
                  >
                    About
                  </NavLink>
                </li>
                <li onClick={() => setToggle(!toggle)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm text-yellow-500 font-bold"
                        : "text-sm text-white"
                    }
                    to="/"
                  >
                    Portfolio
                  </NavLink>
                </li>
                <li onClick={() => setToggle(!toggle)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm text-yellow-500 font-bold"
                        : "text-sm text-white"
                    }
                    to="/"
                  >
                    Contact
                  </NavLink>
                </li>
                <li onClick={() => setToggle(!toggle)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm text-yellow-500 font-bold"
                        : "text-sm text-white"
                    }
                    to="/"
                  >
                    Blog
                  </NavLink>
                </li>
                <li onClick={() => setToggle(!toggle)}>
                <ul className="flex items-center bg-black shadow-inner shadow-slate-700  rounded-2xl text-white px-2 py-1 gap-2">
                <li className="text-xs italic">LOGIN</li>
                <li className="text-sm text-yellow-500 duration-300"><FaUserShield></FaUserShield></li>
              </ul>
                </li>
              </ul>
            </div>
            </div>
      {/* mobile section end */}
      {/* content section end */}
    </>
  );
};

export default Navbar;
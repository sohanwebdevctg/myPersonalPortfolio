import { useContext, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/Providers";



const Navbar = () => {

  // toggle button
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(false);
  const {color, setColor} = useContext(AuthContext);

  // side effect in scrollbar
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 10){
        setActive(true);
      }else{
        setActive(false);
      }
    })
  });

  return (
    <>
      {/* content section start */}
        {/* desktop section start */}
        <div className={` ${active ? `fixed top-0 right-0 left-0 w-full z-50 ${color ? 'bg-white shadow-sm shadow-red-500 duration-300 easy-in' : 'bg-black bg-opacity-95 shadow-sm shadow-yellow-300 duration-300 easy-in'} ` : `hidden sm:block w-full  duration-300 easy-in z-50`}`}>
          <div className="container mx-auto sm:px-8 md:px-10 lg:px-16 xl:px-14 2xl:px-24 hidden sm:block">
            <div className="flex justify-between items-center h-20">
              {/* logo start */}
              <div><h3 className="sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold  italic"><span className={`${color ? 'text-black' : 'text-white'}`}>Sohan</span><span className={`${color ? 'text-red-500' : 'text-yellow-400'}`}>Mozumder</span></h3></div>
              {/* logo end */}
              {/* router start */}
              <div>
                <ul className="sm:flex sm:items-center sm:gap-4 md:gap-5 lg:gap-7 xl:gap-9 2xl:gap-10">
                <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? `sm:text-[11px] md:text-[13px] lg:text-sm xl:text-base 2xl:text-xl font-bold ${color ? 'text-red-500':'text-yellow-500'} duration-300`
                          : `sm:text-[11px] md:text-[13px] lg:text-sm xl:text-base 2xl:text-xl ${color ? 'text-black' : 'text-white'}`
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
                          ? `sm:text-[11px] md:text-[13px] lg:text-sm xl:text-base 2xl:text-xl font-bold ${color ? 'text-red-500':'text-yellow-500'} duration-300`
                          : `sm:text-[11px] md:text-[13px] lg:text-sm xl:text-base 2xl:text-xl ${color ? 'text-black' : 'text-white'}`
                      }
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? `sm:text-[11px] md:text-[13px] lg:text-sm xl:text-base 2xl:text-xl font-bold ${color ? 'text-red-500':'text-yellow-500'} duration-300`
                          : `sm:text-[11px] md:text-[13px] lg:text-sm xl:text-base 2xl:text-xl ${color ? 'text-black' : 'text-white'}`
                      }
                      to="/service"
                    >
                      Service
                    </NavLink>
                  </li>
                <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? `sm:text-[11px] md:text-[13px] lg:text-sm xl:text-base 2xl:text-xl font-bold ${color ? 'text-red-500':'text-yellow-500'} duration-300`
                          : `sm:text-[11px] md:text-[13px] lg:text-sm xl:text-base 2xl:text-xl ${color ? 'text-black' : 'text-white'}`
                      }
                      to="/project"
                    >
                      Project
                    </NavLink>
                  </li>
                <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? `sm:text-[11px] md:text-[13px] lg:text-sm xl:text-base 2xl:text-xl font-bold ${color ? 'text-red-500':'text-yellow-500'} duration-300`
                          : `sm:text-[11px] md:text-[13px] lg:text-sm xl:text-base 2xl:text-xl ${color ? 'text-black' : 'text-white'}`
                      }
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* router end */}
              
            <div>
              <div className={`flex items-center ${color ? 'bg-white shadow-inner shadow-slate-200 p-1' : 'bg-black shadow-inner shadow-slate-700 p-2'}  rounded-2xl text-white `}>
                <input type="checkbox" onChange={() => setColor(!color)} className={`toggle sm:toggle-xs lg:toggle-sm ${color ? 'bg-red-500 hover:bg-red-500' : 'bg-yellow-400 hover:bg-yellow-400'} border-none`} />
              </div>
            </div>
            </div>
          </div>
        </div>
        {/* desktop section end */}
      {/* mobile section start */}
      <div className="block sm:hidden">
          {/* logo and button section start */}
          <div className={`${active ? `fixed top-0 right-0 left-0 z-50 shadow-sm ${color ? 'shadow-red-500' : 'shadow-yellow-300'}`: `sticky`} flex justify-between items-center px-6 h-20 ${color ? 'bg-white' : 'bg-black'}`}>
            <div>
            <h3 className="text-base font-bold text-white italic"><span className={`${color ?'text-black' :'text-white'}`}>Sohan</span><span className={`${color ? 'text-red-500' : 'text-yellow-400'}`}>Mozumder</span></h3>
            </div>
            <div className="flex items-center gap-2">
            <div className={`flex items-center ${color ? 'bg-white shadow-inner shadow-slate-200 p-1' : 'bg-black shadow-inner shadow-slate-700 p-1'}  rounded-2xl text-white `}>
                    <input type="checkbox" onChange={() => setColor(!color)} className={`toggle toggle-xs border-none ${color ? 'bg-red-500 hover:bg-red-500' : 'bg-yellow-400 hover:bg-yellow-400'}`} />
                  </div>
              <div>
              {toggle ? (
                <IoClose
                  onClick={() => setToggle(!toggle)}
                  className={`${color ? 'text-red-500' : 'text-yellow-500'} text-xl`}
                ></IoClose>
              ) : (
                <GiHamburgerMenu
                  onClick={() => setToggle(!toggle)}
                  className={`${color ? 'text-red-500' : 'text-yellow-500'} text-lg`}
                ></GiHamburgerMenu>
              )}
              </div>
            </div>
          </div>
          {/* logo and button section end */}
          {/* link section start */}
          <div className={`${toggle ? 'top-20 sm:top-24 bottom-0 right-0 left-0' : 'top-20 sm:top-24 -left-96 right-[1000px] bottom-0' } fixed transform duration-500 easy-in ${color ? 'bg-white' :'bg-black'} bg-opacity-95 z-50`}>
              <ul className="flex flex-col justify-center items-center h-full w-full gap-7 sm:gap-8">
                <li onClick={() => setToggle(!toggle)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? `text-sm ${color ? 'text-red-500':'text-yellow-500'} font-bold`
                        : `text-sm ${color ? 'text-black' : 'text-white'}`
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
                        ? `text-sm ${color ? 'text-red-500':'text-yellow-500'} font-bold`
                        : `text-sm ${color ? 'text-black' : 'text-white'}`
                    }
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li onClick={() => setToggle(!toggle)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? `text-sm ${color ? 'text-red-500':'text-yellow-500'} font-bold`
                        : `text-sm ${color ? 'text-black' : 'text-white'}`
                    }
                    to="/service"
                  >
                    Service
                  </NavLink>
                </li>
                <li onClick={() => setToggle(!toggle)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? `text-sm ${color ? 'text-red-500':'text-yellow-500'} font-bold`
                        : `text-sm ${color ? 'text-black' : 'text-white'}`
                    }
                    to="/project"
                  >
                    Project
                  </NavLink>
                </li>
                <li onClick={() => setToggle(!toggle)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? `text-sm ${color ? 'text-red-500':'text-yellow-500'} font-bold`
                        : `text-sm ${color ? 'text-black' : 'text-white'}`
                    }
                    to="/contact"
                  >
                    Contact
                  </NavLink>
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
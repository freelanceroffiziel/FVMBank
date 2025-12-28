import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { TiArrowSortedUp } from "react-icons/ti";
import { RiCloseLine, RiMenuLine, RiSearchLine } from "react-icons/ri";

const Header = () => {
  const [regisOpen, setRegisOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  return (
    <header id="" className="">
      <nav id="" className="">
        <div
          id="destop"
          className="fixed top-0 left-0 z-50 w-full hidden  lg:flex flex-row justify-between items-center lg:px-16 py-1 text-[18px] bg-white shadow text-teal-900  "
        >
          <Link to={""}>
            <span className="text-[30px] font-extrabold font-serif tracking-wider ">
              FVM<span className="font-bold text-red-700">Bank</span>
            </span>
          </Link>

          <ul className="flex items-center gap-4 lg:flex-row tracking-wide ">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? " text-[18px] md:text-[30px] lg:text-[18px]"
                    : " text-[18px] md:text-[30px] lg:text-[18px]"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/About"}
                className={({ isActive }) =>
                  isActive
                    ? " text-[18px] md:text-[30px] lg:text-[18px]"
                    : " text-[18px] md:text-[30px] lg:text-[18px]"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Feeds"}
                className={({ isActive }) =>
                  isActive
                    ? " text-[18px] md:text-[30px] lg:text-[18px]"
                    : " text-[18px] md:text-[30px] lg:text-[18px]"
                }
              >
                Security
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Contact"}
                className={({ isActive }) =>
                  isActive
                    ? " text-[18px] md:text-[30px] lg:text-[18px]"
                    : " text-[18px] md:text-[30px] lg:text-[18px]"
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/services"}
                className={({ isActive }) =>
                  isActive
                    ? " text-[18px] md:text-[30px] lg:text-[18px]"
                    : " text-[18px] md:text-[30px] lg:text-[18px]"
                }
              >
                Services
              </NavLink>
            </li>
          </ul>

          <div className="flex items-center gap-2 lg:flex-row justify-center ">
            <span className=" ">
              <NavLink to="/SearchBar">
                <RiSearchLine className="transition ease-in-out duration-500 transform text-[30px] md:text-[35px] lg:text-[23px] fontweight: 'extrabold' text-teal-900 hover:text-teal-100/100" />
              </NavLink>
            </span>

            <div className="flex items-center gap-3 lg:flex-row justify-center">
              <Link to={"/Login"} className="">
                Login
              </Link>

              <Link
                to={"/Register"}
                className="px-3 py-1.5 border-2 border-teal-600 rounded-tl-full rounded-bl-full hover:bg-gray-50 hover:text-teal-800 "
              >
                Open Account
              </Link>
            </div>
          </div>
        </div>

        {/* mediavIEW */}
        <div
          id="destop"
          className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-4 py-1 shadow-md mediaViews lg:hidden text-teal-900 bg-white/80 md:px-12"
        >
          <Link to={""}>
            <span className="text-[30px] font-extrabold font-serif tracking-wider ">
              FVM<span className="font-bold text-red-700">Bank</span>
            </span>
          </Link>

          {/* Hamburger */}
          <div className="text-[40px] ">
            {hamburgerOpen ? (
              <RiCloseLine
                onClick={() => setHamburgerOpen(false)}
                className="transition transform hover:scale-105"
              />
            ) : (
              <RiMenuLine
                onClick={() => setHamburgerOpen(true)}
                className="transition transform hover:scale-105"
              />
            )}
          </div>
        </div>

        {/* mediaContent */}
        {hamburgerOpen && (
          <div
            className="fixed inset-0 z-10 bg-black/0 "
            onClick={() => setHamburgerOpen(false)}
          />
        )}
        <section className="mediaContentLogic ">
          <div
            className={`ulDiv  fixed top-0 left-0  w-full z-20 h-auto transition-transform duration-300 ease-in-out transform   ${
              hamburgerOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <ul className=" top-0 z-40 mt-24 py-14 md:mt-28  w-[95%] h-auto flex flex-col  justify-center mx-auto items-center gap-2 text-[20px] md:text-[27px] bg-teal-950/85 border-[1px] border-teal-950 text-teal-50 transition ease-in-out duration-100  shadow-white rounded-2xl font-medium  ">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setHamburgerOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "border-b-[1px] border-teal-900  " : " "
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="aAbout"
                  className={({ isActive }) =>
                    isActive ? "border-b-[1px] border-teal-900  " : " "
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/Feeds"}
                  className={({ isActive }) =>
                    isActive
                      ? " text-[18px] md:text-[30px] lg:text-[18px]"
                      : " text-[18px] md:text-[30px] lg:text-[18px]"
                  }
                >
                  Feeds
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setHamburgerOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "border-b-[1px] border-teal-900  " : " "
                  }
                >
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  onClick={() => setHamburgerOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "border-b-[1px] border-teal-900  " : " "
                  }
                >
                  Services
                </NavLink>
              </li>

              {/* signuploginbelow */}
              <div className="signuploginbelow mt-4 ">
                <ul className="flex flex-row gap-5 lg:text-[15px] ">
                  <li>
                    <NavLink
                      to="/Login"
                      onClick={() => setHamburgerOpen(false)}
                      className={({ isActive }) =>
                        isActive ? "border-b-[1px] border-gray-50  " : ""
                      }
                    >
                      Login
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/SignUp"
                      onClick={() => setHamburgerOpen(false)}
                      className={({ isActive }) =>
                        isActive ? "border-b-[1px] border-gray-50  " : " "
                      }
                    >
                      Sign Up
                    </NavLink>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import {
  RiArrowRightLine,
  RiFacebookFill,
  RiInstagramFill,
  RiMailLine,
  RiMessageFill,
  RiPinterestFill,
  RiTelegramFill,
  RiWhatsappFill,
} from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import AllRightsReserce from "../miniComponents/AllRightsReserce";
import ScrollToTopBtn from "../miniComponents/ScrollToTopBtn";
import WhatsAppChat from "../miniComponents/WhatsAppChat";
import SmartSupp from "../miniComponents/SmartSupp";
// import GoogleTranslate from "../miniComponents/GoogleTranslate";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-200 lg:p-8 p-4  md:mt-[9vh] mt-[10vh] lg:mt-[10vh] ">
        <section
          id="footerSonSection"
          className="flex flex-col gap-4 lg:flex-col "
        >
          <section id="firstFooterSecCon" className="bg-teal-800 shadow-md">
            <div
              id="firstFooterSecSon"
              className="flex flex-col items-center justify-between gap-8 p-4 lg:flex-row lg:gap-0 lg:p-8 "
            >
              <div id="first">
                <span className="md:text-[25px] lg:text-[30px] text-[40px] font-extrabold font-serif tracking-wider ">
                  FVM<span className="font-bold text-red-700">Bank</span>
                </span>
                <p className="lg:w-[40vw] md:text-[25px] lg:text-[16px] text-[21px] mt-3 lg:mt-0 ">
                  Welcome to FVMBank where your financial security and
                  convenience are our top priorities. With a commitment to
                  excellence and decades of trusted service, we offer
                  tailoredsolutions designed to meet your unique banking needs.
                  Experience seamless transactions, robust security measures,
                  and personalized customercare that redefines banking. Join us
                  in shaping your financial future with confidence. Discover the
                  differce at FVMBank.
                </p>
              </div>

              <div id="second" className="">
                <h1 className="md:text-[25px] lg:text-[30px] text-[40px] font-extrabold font-serif tracking-wider mb-4  ">
                  Pages
                </h1>
                <ul>
                  <li className="">
                    <Link className="border-dashed hover:border-b-2 md:text-[25px] lg:text-[18px] text-[24px]">
                      United State
                    </Link>
                  </li>
                  <li className="">
                    <Link className="border-dashed hover:border-b-2 md:text-[25px] lg:text-[18px] text-[24px]">
                      +1 (414)885-4567
                    </Link>
                  </li>
                  <li className="">
                    <Link className="border-dashed hover:border-b-2 md:text-[25px] lg:text-[18px] text-[24px]">
                      IconicBank@gmail.com
                    </Link>
                  </li>
                  <li className="">
                    <Link className="border-dashed hover:border-b-2 md:text-[25px] lg:text-[18px] text-[24px]">
                      436 evergreen apt 2A Brooklyn 11221
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section
            id="secondFooterSecCon"
            className="border-gray-300 shadow-md border-1 "
          >
            <div id="secondFooterSecSon" className="p-4 text-gray-800 lg:p-8 ">
              <div className="flex flex-col items-center justify-center gap-5 lg:flex-col ">
                <h1 className="md:text-[25px] lg:text-[30px] text-[40px] font-extrabold font-serif tracking-wider mb-4 ">
                  Links
                </h1>
                <ul className="flex items-center gap-3 lg:flex-row">
                  <li>
                    <NavLink
                      to={"/"}
                      className={({ isActive }) =>
                        isActive
                          ? " md:text-[25px] lg:text-[18px] text-[23px] border-dashed border-b-2"
                          : " md:text-[25px] lg:text-[18px] text-[23px]"
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
                          ? " md:text-[25px] lg:text-[18px] text-[23px]  border-dashed border-b-2"
                          : " md:text-[25px] lg:text-[18px] text-[23px]"
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/Contact"}
                      className={({ isActive }) =>
                        isActive
                          ? " md:text-[25px] lg:text-[18px] text-[23px]  border-dashed border-b-2"
                          : " md:text-[25px] lg:text-[18px] text-[23px]"
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/Help"}
                      className={({ isActive }) =>
                        isActive
                          ? " md:text-[25px] lg:text-[18px] text-[23px]  border-dashed border-b-2"
                          : " md:text-[25px] lg:text-[18px] text-[23px]"
                      }
                    >
                      Help
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/Faq"}
                      className={({ isActive }) =>
                        isActive
                          ? " md:text-[25px] lg:text-[18px] text-[23px]  border-dashed border-b-2"
                          : " md:text-[25px] lg:text-[18px] text-[23px]"
                      }
                    >
                      Faq
                    </NavLink>
                  </li>
                </ul>
                <p className="font-serif md:text-[25px] lg:text-[18px] text-[24px]">
                  We're always ready for you
                </p>
              </div>
            </div>
          </section>

          <section
            id="thirdFooterSecCon"
            className="p-4 bg-teal-800 shadow-md lg:p-8 "
          >
            <div
              id="thirdFooterSecSon"
              className="flex flex-col justify-between gap-5 mb-14 lg:flex-row lg:gap-0 "
            >
              <div>
                <h1 className="md:text-[25px] lg:text-[30px] text-[40px] font-extrabold font-serif tracking-wider mb-6  ">
                  News Letter
                </h1>

                <form className="flex flex-row items-center justify-between border-b-2 ">
                  <RiMailLine className="text-[30px] md:text-[24px] lg:text-[24px] " />

                  <input
                    type="email"
                    placeholder="Enter email"
                    required
                    className="pl-1 outline-none "
                  />

                  <button
                    type="submit"
                    className="text-[30px] md:text-[24px] lg:text-[20px] bg-gray-100 text-teal-800 py-[1px] px-[1px] pr-1 hover:text-gray-100 hover:bg-teal-500 "
                  >
                    <RiArrowRightLine />
                  </button>
                </form>
              </div>

              <div id="socials">
                <ul className="flex flex-row gap-3 text-[35px] md:text-[24px] lg:text-[30px]  ">
                  <li className="transition-all hover:text-teal-500 ">
                    <Link>
                      {" "}
                      <RiFacebookFill />{" "}
                    </Link>
                  </li>
                  <li className="transition-all hover:text-teal-500 ">
                    <Link>
                      {" "}
                      <RiWhatsappFill />{" "}
                    </Link>
                  </li>
                  <li className="transition-all hover:text-teal-500 ">
                    <Link>
                      {" "}
                      <RiInstagramFill />{" "}
                    </Link>
                  </li>
                  <li className="transition-all hover:text-teal-500 ">
                    <Link>
                      {" "}
                      <RiPinterestFill />{" "}
                    </Link>
                  </li>
                  <li className="transition-all hover:text-teal-500 ">
                    <Link>
                      {" "}
                      <RiTelegramFill />{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <span className="text-[19px] md:text-[24px] lg:text-[18px]  ">
              <AllRightsReserce />
            </span>
          </section>
        </section>
      </footer>

      <section className="absolute">
        <SmartSupp />
      </section>
      <section className="">
        <WhatsAppChat />
      </section>
      <section>
        <ScrollToTopBtn />
      </section>
    </>
  );
};

export default Footer;

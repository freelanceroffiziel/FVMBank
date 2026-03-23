import React, { useState, useRef, useEffect } from "react";
import {
  RiCloseFill,
  RiDashboard2Fill,
  RiMenuFill,
  RiUser2Fill,
} from "react-icons/ri";
import LogoutModal from "../logoutComponent/LogoutModal";
import { PiHandDeposit } from "react-icons/pi";
import { BiTransfer } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { RiLuggageDepositLine } from "react-icons/ri";
import { IoCardSharp } from "react-icons/io5";
import { FcDebt } from "react-icons/fc";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiUserSharedLine } from "react-icons/ri";

const DashboardHeader = ({ setSelectedSection }) => {
  const [menu, setMenu] = useState(false);
  const [showTopFade, setShowTopFade] = useState(false);
  const [showBottomFade, setShowBottomFade] = useState(false);
  const sidebarRef = useRef(null);

  const checkScrollPosition = () => {
    const el = sidebarRef.current;
    if (!el) return;

    const atTop = el.scrollTop === 0;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 2;

    setShowTopFade(!atTop);
    setShowBottomFade(!atBottom);
  };

  useEffect(() => {
    if (menu) {
      setTimeout(checkScrollPosition, 100);
    }
  }, [menu]);

  const scrollUp = () => {
    sidebarRef.current.scrollBy({ top: -250, behavior: "smooth" });
  };

  const scrollDown = () => {
    sidebarRef.current.scrollBy({ top: 250, behavior: "smooth" });
  };

  return (
    <main className="headerCon">
      <section className="headerConSon">
        <section className="mt-[10vh] fixed top-0 lg:p-8 lg:ml-[17vw] z-50 w-full">
          <div className="fixed top-0 z-50 w-full lg:max-w-[80vw] p-2 bg-teal-800 desktop ">
            <div className="flex justify-between w-full px-4 py-4 bg-teal-900 rounded-md text-gray-50">
              <div className="p-2 transition-all bg-teal-600 rounded shadow hover:bg-teal-700">
                {menu ? (
                  <RiCloseFill
                    className="text-[33px]"
                    onClick={() => setMenu(false)}
                  />
                ) : (
                  <RiMenuFill
                    className="text-[33px]"
                    onClick={() => setMenu(true)}
                  />
                )}
              </div>

              <div className="flex items-center gap-3">
                <div
                  className=""
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  <LogoutModal />
                </div>

                <div
                  className="p-2 transition-all bg-teal-600 rounded shadow hover:bg-teal-700"
                  onClick={() => {
                    setSelectedSection("profile");
                    setMenu(false);
                  }}
                >
                  <RiUser2Fill className="text-[33px]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {menu && (
          <div className="relative">
            {/* 🔝 TOP FADE OVERLAY */}
            {showTopFade && (
              <div
                onClick={scrollUp}
                className="fixed top-24 left-0 w-[60%] h-16 z-50 cursor-pointer
                bg-gradient-to-b from-teal-900 to-transparent"
              />
            )}

            <section
              ref={sidebarRef}
              onScroll={checkScrollPosition}
              className="fixed top-0 z-40 left-0 pt-24 md:pt-36 pb-6
              flex flex-col text-[22px] md:text-[25px]
              text-[#c0c0c0] bg-teal-700 lg:hidden
              h-full w-[60%] pl-3.5 overflow-y-scroll"
            >
              <ul className="flex flex-col">
                <li>
                  <button
                    onClick={() => {
                      setSelectedSection("dashboard");
                      setMenu(false);
                    }}
                    className="flex items-center gap-2 px-2 py-4"
                  >
                    <RiDashboard2Fill className="text-[25px]" />
                    Dashboard
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => {
                      setSelectedSection("activityLogs");
                      setMenu(false);
                    }}
                    className="flex items-center gap-2 px-2 py-4"
                  >
                    <FiActivity className="text-[25px]" />
                    Activity Logs
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => {
                      setSelectedSection("transfer");
                      setMenu(false);
                    }}
                    className="flex items-center gap-2 px-2 py-4"
                  >
                    <BiTransfer className="text-[25px]" />
                    Transfer
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => {
                      setSelectedSection("withdraw");
                      setMenu(false);
                    }}
                    className="flex items-center gap-2 px-2 py-4"
                  >
                    <PiHandDeposit className="text-[25px]" />
                    Withdraw
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => {
                      setSelectedSection("deposit");
                      setMenu(false);
                    }}
                    className="flex items-center gap-2 px-2 py-4"
                  >
                    <RiLuggageDepositLine className="text-[25px]" />
                    Deposit
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => {
                      setSelectedSection("cards");
                      setMenu(false);
                    }}
                    className="flex items-center gap-2 px-2 py-4"
                  >
                    <IoCardSharp className="text-[25px]" />
                    Cards
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => {
                      setSelectedSection("loans");
                      setMenu(false);
                    }}
                    className="flex items-center gap-2 px-2 py-4"
                  >
                    <FcDebt className="text-[25px]" />
                    Loans
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => {
                      setSelectedSection("notification");
                      setMenu(false);
                    }}
                    className="flex items-center gap-2 px-2 py-4"
                  >
                    <IoNotificationsOutline className="text-[25px]" />
                    Notification
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => {
                      setSelectedSection("referral");
                      setMenu(false);
                    }}
                    className="flex items-center gap-2 px-2 py-4"
                  >
                    <RiUserSharedLine className="text-[25px]" />
                    Referral
                  </button>
                </li>
              </ul>

              <div className="pt-4 pl-3 mt-10 border-t border-gray-300">
                <ul>
                  <li>
                    <button
                      className="text-white hover:underline"
                      onClick={() => {
                        setSelectedSection("settings");
                        setMenu(false);
                      }}
                    >
                      Settings
                    </button>
                  </li>

                  <li>
                    <button
                      className="text-white hover:underline mt-1 flex items-center gap-1.5"
                      onClick={() => {
                        setSelectedSection("usersupport");
                        setMenu(false);
                      }}
                    >
                      Help & Support
                    </button>
                  </li>
                </ul>
              </div>
            </section>

            {/* 🔽 BOTTOM FADE OVERLAY */}
            {showBottomFade && (
              <div
                onClick={scrollDown}
                className="fixed bottom-0 left-0 w-[60%] h-16 z-50 cursor-pointer
                bg-gradient-to-t from-teal-900 to-transparent"
              />
            )}
          </div>
        )}
      </section>
    </main>
  );
};

export default DashboardHeader;

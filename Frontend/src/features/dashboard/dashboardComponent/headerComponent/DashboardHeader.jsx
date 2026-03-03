import React, { useState, useRef, useEffect } from "react";
import {
  RiAccountBoxFill,
  RiCashFill,
  RiCloseFill,
  RiDashboard2Fill,
  RiDatabase2Fill,
  RiMenuFill,
  RiMoneyDollarBoxFill,
  RiShareCircleFill,
  RiUser2Fill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

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
          <div className="fixed top-0 z-50 w-full p-2 bg-teal-800 desktop">
            <div className="bg-teal-900 rounded-md text-gray-50 flex justify-between py-4 px-4 lg:w-[78vw] w-full">
              <div className="p-2 bg-teal-600 rounded hover:bg-teal-700 shadow transition-all">
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

              <div className="p-2 bg-teal-600 rounded hover:bg-teal-700 shadow transition-all">
                <RiUser2Fill className="text-[33px]" />
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
                className="fixed top-24 left-0 w-[70%] h-16 z-50 cursor-pointer
                bg-gradient-to-b from-teal-900 to-transparent"
              />
            )}

            <section
              ref={sidebarRef}
              onScroll={checkScrollPosition}
              className="fixed top-0 z-40 left-0 pt-24 md:pt-36 pb-6
              flex flex-col text-[22px] md:text-[25px]
              text-[#c0c0c0] bg-teal-700 lg:hidden
              h-full w-[70%] pl-3.5 overflow-y-scroll"
            >
              <ul className="flex flex-col">
                <li>
                  <button
                    onClick={() => setSelectedSection("dashboard")}
                    className="flex items-center gap-2 px-2 py-4"
                  >
                    <RiDashboard2Fill className="text-[25px]" />
                    Dashboard
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setSelectedSection("activityLogs")}
                    className="flex items-center gap-2 px-2 py-4"
                  >
                    <RiDatabase2Fill className="text-[25px]" />
                    Activity Logs
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setSelectedSection("transfer")}
                    className="flex items-center gap-2 px-2 py-4"
                  >
                    <RiDatabase2Fill className="text-[25px]" />
                    Transfer
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setSelectedSection("withdraw")}
                    className="flex items-center gap-2 px-2 py-4"
                  >
                    <RiCashFill className="text-[25px]" />
                    Withdraw
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setSelectedSection("deposit")}
                    className="flex items-center gap-2 px-2 py-4"
                  >
                    <RiMoneyDollarBoxFill className="text-[25px]" />
                    Deposit
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setSelectedSection("account")}
                    className="flex items-center gap-2 px-2 py-4"
                  >
                    <RiAccountBoxFill className="text-[25px]" />
                    Account
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setSelectedSection("cards")}
                    className="flex items-center gap-2 px-2 py-4"
                  >
                    <RiShareCircleFill className="text-[25px]" />
                    Cards
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setSelectedSection("loans")}
                    className="flex items-center gap-2 px-2 py-4"
                  >
                    <RiShareCircleFill className="text-[25px]" />
                    Loans
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setSelectedSection("notification")}
                    className="flex items-center gap-2 px-2 py-4"
                  >
                    <RiShareCircleFill className="text-[25px]" />
                    Notification
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setSelectedSection("referral")}
                    className="flex items-center gap-2 px-2 py-4"
                  >
                    <RiShareCircleFill className="text-[25px]" />
                    Referral
                  </button>
                </li>
              </ul>

              <div className="mt-10 pl-3 border-t border-gray-300 pt-4">
                <ul>
                  <li>
                    <Link to="#">Settings</Link>
                  </li>
                  <li>
                    <Link to="#">Help & Support</Link>
                  </li>
                </ul>
              </div>
            </section>

            {/* 🔽 BOTTOM FADE OVERLAY */}
            {showBottomFade && (
              <div
                onClick={scrollDown}
                className="fixed bottom-0 left-0 w-[70%] h-16 z-50 cursor-pointer
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

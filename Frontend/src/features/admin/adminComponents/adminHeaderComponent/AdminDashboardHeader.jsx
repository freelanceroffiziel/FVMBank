import React, { useState } from "react";
import {
  RiCloseFill,
  RiMenuFill,
  RiMessage2Line,
  RiNotificationLine,
  RiSearchLine,
  RiDashboard2Fill,
  RiDatabase2Fill,
  RiBarChart2Fill,
  RiCashFill,
  RiLogoutBoxRLine,
} from "react-icons/ri";
import useAuth from "../../../../context/useAuth";
import defaultImg from "../../../../assets/icons/icons-careers.webp";
import AdminLogoutModal from "../admindashboardmini/AdminLogoutModal";

const AdminDashboardHeader = ({ setSelectedSection }) => {
  // const { user, notifications } = useAuth();
  const [menu, setMenu] = useState(false);
  // const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <main className="">
      <section>
        <section className="flex items-center shadow lg:shadow justify-between fixed lg:w-[57.95%] w-full z-50 lg:z-10 bg-white px-4 py-3.5  ">
          {/* Left side: search icon and input */}
          <div className="flex items-center gap-2">
            {/* hamburger start */}
            <div
              id="menuIcon"
              className="p-2 bg-teal-700 text-teal-50 rounded hover:bg-green-900 block lg:hidden "
            >
              {menu ? (
                <RiCloseFill
                  className=" text-[33px] md:text-[35px] lg:text-[30px] font-extrabold "
                  onClick={() => setMenu(false)}
                />
              ) : (
                <RiMenuFill
                  className=" text-[33px] md:text-[35px] lg:text-[30px] font-extrabold "
                  onClick={() => setMenu(true)}
                />
              )}
            </div>
            {/* Search Icon */}
            <span className="text-gray-500 lg:text-xl text-[30px] hidden lg:block ">
              <RiSearchLine />
            </span>

            {/* Search input */}
            <input
              type="text"
              placeholder="Search..."
              className="px-3 lg:py-2 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 lg:placeholder:text-[16px] placeholder:text-[20px] focus:border-transparent text-sm lg:w-[45.5vw] w-full "
            />
          </div>

          {/* Right side: Message and Notification Icons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSelectedSection("portfolio")}
              className="relative p-2 text-teal-900 bg-teal-50 rounded-md hover:bg-teal-200 focus:bg-teal-500 transition lg:text-[24px] text-[30px] focus:text-teal-50  "
            >
              <RiMessage2Line />
            </button>

            <button
              onClick={() => setSelectedSection("notification")}
              className="relative p-2 text-teal-900 bg-teal-50 rounded-md hover:bg-teal-200 focus:bg-teal-500 transition lg:text-[24px] text-[30px] focus:text-teal-50"
            >
              <RiNotificationLine />

              {/* Unread notification badge */}
              {/* {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              )} */}
            </button>
          </div>
        </section>
        {menu && (
          <section
            id="sideBarList"
            className="fixed top-0 z-40 left-0 pt-20 md:pt-36 lg:pb-20 pb-0 pr-3  flex flex-col justify-start items-start gap-4 text-[22px] md:text-[25px]  text- bg-white   transition ease-in-out duration-300 lg:hidden h-full w-[55%] pl-3.5 shadow-2xl overflow-y-auto hide-scrollbar"
          >
            <div id="ulSon" className="space-y-3 py-4 ">
              <h2 className=" text-[17px] text-teal-950"> Overview </h2>
              <ul id="sideBarList" className="flex flex-col gap-3">
                <li>
                  <button
                    onClick={() => {
                      setSelectedSection("adminDashboard");
                      setMenu(false);
                    }}
                    className="flex flex-row items-center w-full gap-2 px-2 py-0.1 lg:text-[14px] text-teal-600  hover:bg-teal-700 focus:bg-teal-800 focus:text-white hover:text-teal-50 py-1.5 rounded text-[18px]"
                  >
                    <RiDashboard2Fill className="text-[25px] " />
                    Dashboard
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setSelectedSection("adminHistoryLogs");
                      setMenu(false);
                    }}
                    className="flex flex-row items-center w-full gap-2 px-2 py-0.1 lg:text-[14px] text-teal-600  hover:bg-teal-700 focus:bg-teal-800 focus:text-white hover:text-teal-50 py-1.5 rounded text-[18px]"
                  >
                    <RiDashboard2Fill className="text-[25px] " />
                    History logs
                  </button>
                </li>
              </ul>
            </div>

            <div id="ulSon" className="space-y-3 ">
              <h2 className=" text-[17px] "> User Managements</h2>
              <ul id="sideBarList" className="flex flex-col gap-3  ">
                <li>
                  <button
                    onClick={() => {
                      setSelectedSection("allUsers");
                      setMenu(false);
                    }}
                    className="flex flex-row items-center w-full gap-2 px-2 py-0.1 lg:text-[14px] text-teal-600  hover:bg-teal-700 focus:bg-teal-800 focus:text-white hover:text-teal-50 py-1.5 rounded text-[18px] "
                  >
                    <RiDashboard2Fill className="text-[25px] " />
                    All Users
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => {
                      setSelectedSection("blockedUsers");
                      setMenu(false);
                    }}
                    className="flex flex-row items-center w-full gap-2 px-2 py-0.1 lg:text-[14px] text-teal-600  hover:bg-teal-700 focus:bg-teal-800 focus:text-white hover:text-teal-50 py-1.5 rounded text-[18px]"
                  >
                    <RiDatabase2Fill className="text-[25px]" />
                    Blocked Users
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => {
                      setSelectedSection("adminAccount");
                      setMenu(false);
                    }}
                    className="flex flex-row items-center w-full gap-2 px-2 py-0.1 lg:text-[14px] text-teal-600  hover:bg-teal-700 focus:bg-teal-800 focus:text-white hover:text-teal-50 py-1.5 rounded text-[18px]"
                  >
                    <RiCashFill className="text-[25px] " />
                    Admin Account
                  </button>
                </li>
              </ul>
            </div>

            <div id="ulSon" className="space-y-3 ">
              <h2 className=" text-[17px] ">Finance / Trading</h2>
              <ul id="sideBarList" className="flex flex-col gap-3  ">
                <li>
                  <button
                    onClick={() => {
                      setSelectedSection("adminWallet");
                      setMenu(false);
                    }}
                    className="flex flex-row items-center w-full gap-2 px-2 py-0.1 lg:text-[14px] text-teal-600  hover:bg-teal-700 focus:bg-teal-800 focus:text-white hover:text-teal-50 py-1.5 rounded text-[18px]"
                  >
                    <RiCashFill className="text-[25px] " />
                    Wallets
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => {
                      setSelectedSection("adminInvestments");
                      setMenu(false);
                    }}
                    className="flex flex-row items-center w-full gap-2 px-2 py-0.1 lg:text-[14px] text-teal-600  hover:bg-teal-700 focus:bg-teal-800 focus:text-white hover:text-teal-50 py-1.5 rounded text-[18px]"
                  >
                    <RiDashboard2Fill className="text-[25px] " />
                    Investments
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => {
                      setSelectedSection("referralPayouts");
                      setMenu(false);
                    }}
                    className="flex flex-row items-center w-full gap-2 px-2 py-0.1 lg:text-[14px] text-teal-600  hover:bg-teal-700 focus:bg-teal-800 focus:text-white hover:text-teal-50 py-1.5 rounded text-[18px]"
                  >
                    <RiDatabase2Fill className="text-[25px]" />
                    Referral Payouts
                  </button>
                </li>
              </ul>
            </div>

            {/* below preference */}

            <section className="sideBarFooter bg-whit pl-3 rounded-bl-2xl border-t-[1px] border-gray-200">
              <div id="footerSohn" className="space-y-3">
                <strong className=" lg:text-[20px] text-teal-800 ">
                  Preferences
                </strong>

                <ul className="lg:text-[14px] tracking-wide space-y-2 pt-1.5 ">
                  <li className=" ">
                    <button
                      className="hover:text-teal-800 hover:underline"
                      onClick={() => {
                        setSelectedSection("portfolio");
                        setMenu(false);
                      }}
                    >
                      Settings
                    </button>
                  </li>
                  <li className="lg:text-[20px] text-teal-800 rounded mt-1 flex flex-row items-center gap-1.5 border-teal-800 border-[1px] hover:text-teal-50 transition ease-in-out duration-200 hover:bg-teal-800 focus:bg-teal-900  py-1.5 px-4 w-fit ">
                    <span>
                      {" "}
                      <RiLogoutBoxRLine />{" "}
                    </span>
                    <button className="text-[14px]">
                      <AdminLogoutModal />
                    </button>
                  </li>
                </ul>

                <div className="border-t-[1px] border-gray-200 rounded-bl-2xl  py-3 flex flex-row gap-2.5 items-center ">
                  <div>
                    <img
                      src={user?.profileImageUrl || defaultImg}
                      alt="Profile"
                      loading="lazy"
                      className="h-8 w-8 rounded-full"
                    />
                  </div>
                  {user ? (
                    <ul>
                      <li className="text-[14px] font-medium">
                        {user.firstName} {user?.lastName}{" "}
                      </li>
                      <li className="text-[10px] pr-2 text-teal-700 overflow-hidden ">
                        {user.email}
                      </li>
                    </ul>
                  ) : (
                    <p className="text-xs italic text-gray-400">
                      Loading user info...
                    </p>
                  )}
                </div>
              </div>
            </section>
          </section>
        )}
      </section>
    </main>
  );
};

export default AdminDashboardHeader;

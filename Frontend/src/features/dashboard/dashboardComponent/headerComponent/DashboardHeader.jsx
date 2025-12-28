import React, { useState } from "react";
import { RiAccountBoxFill, RiBarChart2Fill, RiCashFill, RiCloseFill, RiDashboard2Fill, RiDatabase2Fill, RiMenuFill, RiMoneyDollarBoxFill, RiShareCircleFill, RiUser2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const DashboardHeader = ({setSelectedSection}) => {
  const [menu, setMenu] = useState(false);
  return (
    <main className="headerCon">
      <section className="headerConSon">
        <section
          id="dashboardContentHeaderVater"
          className="mt-[10vh] fixed top-0 lg:p-8 lg:ml-[17vw]  z-50 w-full"
        >
          <div className="fixed top-0 z-50 w-full p-2 bg-teal-800 desktop">
            <div
              id="contentHeroHeaderSon"
              className="bg-teal-900 rounded-md text-gray-50 flex flex-row items-center justify-between py-4 pl-4 pr-4  lg:w-[78vw] md:w-full w-full  top-0  "
            >
              <div
                id="menuIcon"
                className="p-2 bg-green-700 rounded hover:bg-green-900 "
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

              <div
                id="profile"
                className="p-2 bg-green-700 rounded hover:bg-green-900 "
              >
                <RiUser2Fill className="text-[33px] md:text-[35px] lg:text-[30px] font-extrabold" />
              </div>
            </div>
          </div>
        </section>

        {menu && (
          <ul
            id="sideBarList"
            className="fixed top-0 z-40 left-0 pt-28 md:pt-36 pb-20  flex flex-col justify-start items-start gap-4 text-[22px] md:text-[25px]  text-[#c0c0c0] bg-orange-700   transition ease-in-out duration-300 lg:hidden h-full w-[70%] pl-3.5 "
          >
            <li>
              <NavLink
                onClick={() => setSelectedSection("dashboard")}
                onChange={()=> menu(false)}
                className="flex flex-row items-center gap-2 px-2 py-2 border-gray-200 focus:text-white "
              >
                <RiDashboard2Fill className="text-[25px] " />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setSelectedSection("startInvesting")}
                className="flex flex-row items-center gap-2 px-2 py-2 focus:text-white"
              >
                <RiDatabase2Fill className="text-[25px] " />
                Start Investing
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setSelectedSection("transactionHistory")}
                className="flex flex-row items-center gap-2 px-2 py-2 focus:text-white "
              >
                <RiBarChart2Fill className="text-[25px] " />
                Transaction History
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setSelectedSection("deposit")}
                className="flex flex-row items-center gap-2 px-2 py-2 focus:text-white "
              >
                <RiMoneyDollarBoxFill className="text-[25px] " />
                Deposit
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setSelectedSection("withdraw")}
                className="flex flex-row items-center gap-2 px-2 py-2 focus:text-white "
              >
                <RiCashFill className="text-[25px] " />
                Withdraw
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setSelectedSection("account")}
                className="flex flex-row items-center gap-2 px-2 py-2 focus:text-white "
              >
                <RiAccountBoxFill className="text-[25px] " />
                Account
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setSelectedSection("referral")}
                className="flex flex-row items-center w-full gap-2 px-2 py-2 focus:text-white "
              >
                <RiShareCircleFill className="text-[25px] " />
                Referral
              </NavLink>
            </li>

          </ul>
        )}
        
      </section>
    </main>
  );
};

export default DashboardHeader;

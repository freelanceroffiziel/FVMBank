import React from "react";
import {
  RiAccountBoxFill,
  RiBarChart2Fill,
  RiCashFill,
  RiDashboard2Fill,
  RiDatabase2Fill,
  RiMoneyDollarBoxFill,
  RiShareCircleFill,
} from "react-icons/ri";

const SideBarContent = ({ setSelectedSection }) => {
  return (
    <main className="sidebarContentCon">
      <section className="sidebarContentConSon">
        <div id="ulSon" className="space-y-10">
          <ul id="sideBarList" className="flex flex-col gap-3">
            <li>
              <button
                onClick={() => setSelectedSection("dashboard")}
                className="flex flex-row items-center w-full gap-2 px-2 py-2 border-b-4 border-teal-900 cursor-pointer focus:border-b-4 focus:border-teal-400 focus:text-orange-600 focus:bg-gray-100 "
              >
                <RiDashboard2Fill className="text-[25px] " />
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedSection("startInvesting")}
                className="flex flex-row items-center w-full gap-2 px-2 py-2 border-b-4 border-teal-900 cursor-pointer focus:border-b-4 focus:border-teal-400 focus:text-orange-600 focus:bg-gray-100 "
              >
                <RiDatabase2Fill className="text-[25px] " />
                Accounts
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedSection("History")}
                className="flex flex-row items-center w-full gap-2 px-2 py-2 border-b-4 border-teal-900 cursor-pointer focus:border-b-4 focus:border-teal-400 focus:text-orange-600 focus:bg-gray-100 "
              >
                <RiBarChart2Fill className="text-[25px] " />
                Histories
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedSection("deposit")}
                className="flex flex-row items-center w-full gap-2 px-2 py-2 border-b-4 border-teal-900 cursor-pointer focus:border-b-4 focus:border-teal-400 focus:text-orange-600 focus:bg-gray-100 "
              >
                <RiMoneyDollarBoxFill className="text-[25px] " />
                Deposit
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedSection("withdraw")}
                className="flex flex-row items-center w-full gap-2 px-2 py-2 border-b-4 border-teal-900 cursor-pointer focus:border-b-4 focus:border-teal-400 focus:text-orange-600 focus:bg-gray-100 "
              >
                <RiCashFill className="text-[25px] " />
                Withdraw
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedSection("account")}
                className="flex flex-row items-center w-full gap-2 px-2 py-2 border-b-4 border-teal-900 cursor-pointer focus:border-b-4 focus:border-teal-400 focus:text-orange-600 focus:bg-gray-100 "
              >
                <RiAccountBoxFill className="text-[25px] " />
                Account
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedSection("referral")}
                className="flex flex-row items-center w-full gap-2 px-2 py-2 border-b-4 border-teal-900 cursor-pointer focus:border-b-4 focus:border-teal-400 focus:text-orange-600 focus:bg-gray-100 "
              >
                <RiShareCircleFill className="text-[25px] " />
                Referral
              </button>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default SideBarContent;

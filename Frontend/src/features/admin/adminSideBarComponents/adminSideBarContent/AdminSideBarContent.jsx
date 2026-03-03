import React from "react";
import { RiCashFill, RiDashboard2Fill, RiDatabase2Fill } from "react-icons/ri";

const AdminSideBarContent = ({ setSelectedSection }) => {
  return (
    <main className="sidebarContentCon">
      <section className="sidebarContentConSon pl-3 pr-3 pb-0 flex flex-col gap-3 h-[61vh] overflow-y-scroll  hide-scrollbar">
        <div id="ulSon" className="space-y-3 py-4 ">
          <h2 className=" text-[17px] text-teal-950"> Overview </h2>
          <ul id="sideBarList" className="flex flex-col gap-3">
            <li>
              <button
                onClick={() => setSelectedSection("adminDashboard")}
                className="flex flex-row items-center w-full gap-2 px-2 py-0.1 lg:text-[14px] text-teal-600  hover:bg-teal-700 focus:bg-teal-800 focus:text-white hover:text-teal-50 py-1.5 rounded "
              >
                <RiDashboard2Fill className="text-[25px] " />
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedSection("adminHistoryLogs")}
                className="flex flex-row items-center w-full gap-2 px-2 py-0.1 lg:text-[14px] text-teal-600  hover:bg-teal-700 focus:bg-teal-800 focus:text-white hover:text-teal-50 py-1.5 rounded "
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
                onClick={() => setSelectedSection("allUsers")}
                className="flex flex-row items-center w-full gap-2 px-2 py-0.1 lg:text-[14px] text-teal-600  hover:bg-teal-700 focus:bg-teal-800 focus:text-white hover:text-teal-50 py-1.5 rounded   "
              >
                <RiDashboard2Fill className="text-[25px] " />
                All Users
              </button>
            </li>

            <li>
              <button
                onClick={() => setSelectedSection("adminAccount")}
                className="flex flex-row items-center w-full gap-2 px-2 py-0.1 lg:text-[14px] text-teal-600  hover:bg-teal-700 focus:bg-teal-800 focus:text-white hover:text-teal-50 py-1.5 rounded  "
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
                onClick={() => setSelectedSection("adminWallet")}
                className="flex flex-row items-center w-full gap-2 px-2 py-0.1 lg:text-[14px] text-teal-600  hover:bg-teal-700 focus:bg-teal-800 focus:text-white hover:text-teal-50 py-1.5 rounded  "
              >
                <RiCashFill className="text-[25px] " />
                Wallets
              </button>
            </li>

            <li>
              <button
                onClick={() => setSelectedSection("adminInvestments")}
                className="flex flex-row items-center w-full gap-2 px-2 py-0.1 lg:text-[14px] text-teal-600  hover:bg-teal-700 focus:bg-teal-800 focus:text-white hover:text-teal-50 py-1.5 rounded   "
              >
                <RiDashboard2Fill className="text-[25px] " />
                Investments
              </button>
            </li>

            <li>
              <button
                onClick={() => setSelectedSection("referralPayouts")}
                className="flex flex-row items-center w-full gap-2 px-2 py-0.1 lg:text-[14px] text-teal-600  hover:bg-teal-700 focus:bg-teal-800 focus:text-white hover:text-teal-50 py-1.5 rounded  "
              >
                <RiDatabase2Fill className="text-[25px]" />
                Referral Payouts
              </button>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default AdminSideBarContent;

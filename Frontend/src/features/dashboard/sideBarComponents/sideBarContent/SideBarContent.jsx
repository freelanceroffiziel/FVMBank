import React, { useRef, useState } from "react";
import {
  RiDashboard2Fill,
  RiArrowUpSLine,
  RiArrowDownSLine,
  RiBankLine,
} from "react-icons/ri";
import { PiHandDeposit } from "react-icons/pi";
import { BiTransfer } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { RiLuggageDepositLine } from "react-icons/ri";
import { IoCardSharp } from "react-icons/io5";
import { FcDebt } from "react-icons/fc";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiUserSharedLine } from "react-icons/ri";

const SideBarContent = ({ setSelectedSection }) => {
  const sidebarRef = useRef(null);
  const [showTopArrow, setShowTopArrow] = useState(false);
  const [showBottomArrow, setShowBottomArrow] = useState(false);

  const handleScroll = () => {
    const el = sidebarRef.current;
    if (!el) return;

    const atTop = el.scrollTop === 0;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 2;

    setShowTopArrow(!atTop);
    setShowBottomArrow(!atBottom);
  };

  return (
    <div className="relative h-[70vh]">
      {/* TOP ARROW */}
      {showTopArrow && (
        <div className="absolute top-0 left-0 z-10 flex justify-center w-full bg-white">
          <RiArrowUpSLine className="text-2xl text-teal-600 animate-bounce" />
        </div>
      )}

      <main
        ref={sidebarRef}
        onScroll={handleScroll}
        className="h-full overflow-y-scroll sidebarContentCon shadow-white"
      >
        <div id="ulSon" className="space-y-10">
          <ul id="sideBarList" className="flex flex-col">
            <li>
              <button
                onClick={() => setSelectedSection("dashboard")}
                className="flex flex-row items-center w-full gap-2 px-2 py-4 border-b-4 border-teal-700 cursor-pointer focus:border-teal-500 focus:text-teal-600 focus:bg-gray-100"
              >
                <RiDashboard2Fill className="text-[25px]" />
                Dashboard
              </button>
            </li>

            <li>
              <button
                onClick={() => setSelectedSection("activityLogs")}
                className="flex flex-row items-center w-full gap-2 px-2 py-4 border-b-4 border-teal-700 cursor-pointer focus:border-teal-500 focus:text-teal-600 focus:bg-gray-100"
              >
                <FiActivity className="text-[25px]" />
                Activity Logs
              </button>
            </li>

            <li>
              <button
                onClick={() => setSelectedSection("accounts")}
                className="flex flex-row items-center w-full gap-2 px-2 py-4 border-b-4 border-teal-700 cursor-pointer focus:border-teal-500 focus:text-teal-600 focus:bg-gray-100"
              >
                <RiBankLine className="text-[25px]" />
                Accounts
              </button>
            </li>

            <li>
              <button
                onClick={() => setSelectedSection("transfer")}
                className="flex flex-row items-center w-full gap-2 px-2 py-4 border-b-4 border-teal-700 cursor-pointer focus:border-teal-500 focus:text-teal-600 focus:bg-gray-100"
              >
                <BiTransfer className="text-[25px]" />
                Transfer
              </button>
            </li>

            <li>
              <button
                onClick={() => setSelectedSection("withdraw")}
                className="flex flex-row items-center w-full gap-2 px-2 py-4 border-b-4 border-teal-700 cursor-pointer focus:border-teal-500 focus:text-teal-600 focus:bg-gray-100"
              >
                <PiHandDeposit className="text-[25px]" />
                Withdraw
              </button>
            </li>

            <li>
              <button
                onClick={() => setSelectedSection("deposit")}
                className="flex flex-row items-center w-full gap-2 px-2 py-4 border-b-4 border-teal-700 cursor-pointer focus:border-teal-500 focus:text-teal-600 focus:bg-gray-100"
              >
                <RiLuggageDepositLine className="text-[25px]" />
                Deposit
              </button>
            </li>

            <li>
              <button
                onClick={() => setSelectedSection("cards")}
                className="flex flex-row items-center w-full gap-2 px-2 py-4 border-b-4 border-teal-700 cursor-pointer focus:border-teal-500 focus:text-teal-600 focus:bg-gray-100"
              >
                <IoCardSharp className="text-[25px]" />
                Cards
              </button>
            </li>

            <li>
              <button
                onClick={() => setSelectedSection("loans")}
                className="flex flex-row items-center w-full gap-2 px-2 py-4 border-b-4 border-teal-700 cursor-pointer focus:border-teal-500 focus:text-teal-600 focus:bg-gray-100"
              >
                <FcDebt className="text-[25px]" />
                Loans
              </button>
            </li>

            <li>
              <button
                onClick={() => setSelectedSection("notification")}
                className="flex flex-row items-center w-full gap-2 px-2 py-4 border-b-4 border-teal-700 cursor-pointer focus:border-teal-500 focus:text-teal-600 focus:bg-gray-100"
              >
                <IoNotificationsOutline className="text-[25px]" />
                Notification
              </button>
            </li>

            <li>
              <button
                onClick={() => setSelectedSection("referral")}
                className="flex flex-row items-center w-full gap-2 px-2 py-4 border-b-4 border-teal-700 cursor-pointer focus:border-teal-500 focus:text-teal-600 focus:bg-gray-100"
              >
                <RiUserSharedLine className="text-[25px]" />
                Referral
              </button>
            </li>
          </ul>
        </div>
      </main>

      {/* BOTTOM ARROW */}
      {showBottomArrow && (
        <div className="absolute bottom-0 left-0 z-10 flex justify-center w-full bg-white">
          <RiArrowDownSLine className="text-2xl text-teal-600 animate-bounce" />
        </div>
      )}
    </div>
  );
};

export default SideBarContent;

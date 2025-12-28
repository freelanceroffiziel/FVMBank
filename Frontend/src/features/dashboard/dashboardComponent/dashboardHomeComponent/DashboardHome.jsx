import React, { useEffect } from "react";
import {
  RiCashFill,
  RiDatabase2Fill,
  RiDatabaseFill,
  RiInbox2Fill,
  RiMoneyDollarBoxFill,
  RiShareCircleFill,
  RiUserSharedFill,
} from "react-icons/ri";

import ScrollReveal from "scrollreveal";
import CopyAbleInput from "../dashboardMniComponents/CopyAbleInput";
import DashboardBalnace from "../dashboardBalance/DashboardBalnace";
// import { CountUp } from "https://cdn.jsdelivr.net/npm/countup.js@2.8.0/dist/countUp.min.js";

const DashboardHome = () => {
  useEffect(() => {
    ScrollReveal().reveal(".count-numbers", {
      interval: 200,
      afterReveal: function (el) {
        const countEl = el;
        const targetValue = countEl.getAttribute("data-target");

        // Initialize countupjs and start counting
        const countUp = new CountUp(el, targetValue, { duration: 3 });
        if (!countUp.error) {
          countUp.start();
        } else {
          console.log(countUp.error);
        }
      },
    });
  });

  return (
    <main className="">
      <section className="">
        <div id="dashboardSon" className="flex flex-col gap-10">
          <div
            id="dashboardDivs"
            className="grid gap-5 transition-all lg:grid-cols-4 "
          >
            <div
              id="depositDiv"
              className="flex flex-col  justify-between w-full gap-4 p-4 transition-all bg-teal-900 rounded hover:bg-teal-950 text-gray-50 "
            >
              <span>
                {" "}
                <RiMoneyDollarBoxFill className="text-[45px] md:text-[50px] lg:text-[35px] text-green-600  " />
              </span>
              <p className="text-[22px] md:text-[25px] lg:text-[16px] font-semibold tracking-wide">
                Transfer via card number
              </p>
            </div>

            <div
              id="depositBalanceDiv"
              className="flex flex-col  justify-between w-full gap-4 p-4 transition-all bg-teal-900 rounded hover:bg-teal-950 text-gray-50 "
            >
              <span>
                {" "}
                <RiDatabase2Fill className="text-[45px] md:text-[50px] lg:text-[35px] text-green-600  " />
              </span>
              <p className="text-[22px] md:text-[25px] lg:text-[16px] font-semibold tracking-wide">
                Transfer to another bank
              </p>
            </div>

            <div
              id="profitBalanceDiv"
              className="flex flex-col  justify-between w-full gap-4 p-4 transition-all bg-teal-900 rounded hover:bg-teal-950 text-gray-50 "
            >
              <span>
                {" "}
                <RiDatabaseFill className="text-[45px] md:text-[50px] lg:text-[35px] text-green-600  " />
              </span>
              <p className="text-[22px] md:text-[25px] lg:text-[16px] font-semibold tracking-wide">
                Transfer to the same bank
              </p>
            </div>

            <div
              id="referralBalanceDiv"
              className="flex flex-col  justify-between w-full gap-4 p-4 transition-all bg-teal-900 rounded hover:bg-teal-950 text-gray-50"
            >
              <span>
                <RiShareCircleFill className="text-[45px] md:text-[50px] lg:text-[35px] text-green-600  " />
              </span>
              <p className="text-[22px] md:text-[25px] lg:text-[16px] font-semibold tracking-wide ">
                Transfer to another bank
              </p>
            </div>
          </div>

          {/* balance component start */}
          <DashboardBalnace />
          {/* balance component end */}

          {/* copyDiv */}
          <section id="copyDiv">
            <div
              id="copyDivSohn"
              className="flex flex-col gap-5 px-3 py-10 bg-teal-700 rounded text-gray-50"
            >
              <CopyAbleInput />
            </div>
          </section>

          <section className="mt-5 ineChart">{/* <LineChartOne /> */}</section>
        </div>
      </section>
    </main>
  );
};

export default DashboardHome;

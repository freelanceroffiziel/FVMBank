import React from "react";
import { RiDice3Fill } from "react-icons/ri";

const DashboardBalnace = () => {
  return (
    <main className="maincon">
      <section className="mainconSon">
        <section className="flex flex-row items-center justify-between ">
          <div className="balanceDiv">
            <p className=" lg:text-[20px]  text-[22px]  tracking-wide ">balance</p>
            <span className="lg:text-[30px] text-[22px] flex flex-row items-center lg:gap-2 gap-2 font-semibold text-teal-700 ">
              5,000.000.00 <span className="lg:text-[20px] text-[22px] font-normal text-black "> USD</span>{" "}
            </span>
          </div>

          <div className="dotsDiv bg-teal-50 p-1 rounded text-[30px] ">
            <RiDice3Fill/>
          </div>
        </section>

        <section className="chartSection">

        </section>
      </section>
    </main>
  );
};

export default DashboardBalnace;

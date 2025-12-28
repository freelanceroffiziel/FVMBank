import React from "react";
import { GiSlicingArrow } from "react-icons/gi";


const StartInvesting = () => {
  return (
    <main className="startinvestingCon">
      <section className="startinvestingSon">
        <div id="startInvestmentSonDiv">
          <span className="flex flex-row items-center justify-between pick">
            <GiSlicingArrow className="text-[28px] md:text-[22px] lg:text-[30px] font-extrabold text-green-700 " />
            <p className="flex flex-row items-center gap-2  text-[28px] md:text-[22px] lg:text-[30px] font-semibold text-green-600 ">
              Pick <p className="font-bold text-orange-600 "> from our</p>{" "}
              <p className="text-gray-600">Investment packages</p>
            </p>
          </span>
          <span>
            {/* <DashboardPlansComponent /> */}
          </span>
        </div>
      </section>
    </main>
  );
};

export default StartInvesting;

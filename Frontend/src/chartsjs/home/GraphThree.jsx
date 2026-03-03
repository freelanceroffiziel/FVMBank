import React from "react";
import { GrLineChart } from "react-icons/gr";
import { RiHome2Fill, RiPassPendingLine } from "react-icons/ri";
const GraphThree = () => {
  return (
    <main className="">
      <section className=" flex flex-col items-center  lg:gap-1 md:gap-3 gap-4 h-auto w-full lg:p-4 p-8 ">
        <span className=" flex flex-row justify-between items-center  w-full">
          <span className=" text-teal-700 bg-teal-900/15 lg:p-1.5 md:p-4 p-2.5 rounded-full lg:text-[16px] md:text-[30px] text-[25px]   ">
            {" "}
            <RiHome2Fill/>
          </span>

          <p className="lg:text-[15px] md:text-[28px] text-[22px] ">
            {" "}
            Branches{" "}
          </p>
        </span>

        <span className="flex flex-row justify-between items-center gap-20 w-full  ">
          <span className="lg:text-[25px]  md:text-[33px] text-[30px]  font-semibold ">
            82
          </span>

          <span className=" lg:text-[30px] md:text-[40px] text-[39px]  text-teal-700 ">
            {" "}
            <GrLineChart />{" "}
          </span>
        </span>

        <span className="flex flex-row justify-center items-center gap-10 w-full ">
          <p className=" lg:text-[16px] md:text-[28px] text-[20px]  tracking-wide text-teal-600  ">
            {" "}
            all over the globe {" "}
          </p>
        </span>
      </section>
    </main>
  );
};

export default GraphThree;

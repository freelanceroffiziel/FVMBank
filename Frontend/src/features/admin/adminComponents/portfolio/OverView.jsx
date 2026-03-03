import React from "react";
import GraphOne from "../../../../chartsjs/home/GraphOne";
import GraphTwo from "../../../../chartsjs/home/GraphTwo";
import GraphThree from "../../../../chartsjs/home/GraphThree";
import GraphFour from "../../../../chartsjs/home/GraphFour";

// import useAuth from "../../../../context/useAuth";
const OverView = () => {
  // const { user } = useAuth();

  return (
    <main className="overviewMain bg-white">
      <section className="overviewMainSon lg:pt-[10vh] pt-[8vh] pb-6 px-0.5 space-y-5">
        <div className="flex flex-row items-center justify-between">
          <h2 className="tracking-wide font-medium lg:text-[16px] text-[20px] text-teal-800">
            Overview
          </h2>

          <span className="text-teal-600 font-medium tracking-wide hover:underline hover:text-teal-800 transition ease-in-out duration-200 lg:text-[16px] text-[20px]">
            View All
          </span>
        </div>
        <section className="overviewGrid flex flex-col lg:flex-row gap-4 lg:overflow-x-scroll lg:w-[57vw] hide-scrollbar transition-transform transform"></section>
      </section>

      <section className="chartLeftUp grid md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className=" lg:h-[20vh] h-auto bg-white bg-contain text-teal-950 rounded-xl lg:shadow md:shadow-md shadow-md">
            {" "}
            <GraphOne />
          </div>
          <div className=" lg:h-[20vh] h-auto bg-white text-teal-950 rounded-xl lg:shadow md:shadow-md shadow-md">
            <GraphTwo />
          </div>
          <div className=" lg:h-[20vh] h-auto bg-white text-teal-950 rounded-xl lg:shadow md:shadow-md shadow-md">
            <GraphThree />
          </div>
          <div className=" lg:h-[20vh] h-auto bg-white text-teal-950 rounded-xl lg:shadow md:shadow-md shadow-md relative">
            <GraphFour />
          </div>
        </section>
    </main>
  );
};

export default OverView;

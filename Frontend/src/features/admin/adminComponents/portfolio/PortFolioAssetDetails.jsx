import React from "react";
import { portfolio } from "../dashboardjson/portfolio";

const PortFolioAssetDetails = () => {
  return (
    <main className=" ">
      <aside className=" ">
        <div></div>

        <div className="mapingConetent grid lg:grid-cols-3 gap-4 items-center">
          {portfolio.map((portfolioItems) => (
            <section
              key={portfolioItems.id}
              className="bg-white lg:p-2 px-6 py-2.5 rounded-md shadow  flex flex-row gap-4 justify-between lg:justify-center items-center "
            >
              <div className="Logo ">
                <portfolioItems.icon className=" lg:h-10 lg:w-10 h-16 w-16 rounded-full " />
                {/* <span> {portfolioItems.imd}</span> */}
              </div>

              <div className=" flex flex-col items gap-2.5 ">
                <span className=" flex flex-row items-center gap-4 ">
                  {" "}
                  <h1 className=" lg:text-[15px] text-[20px] font-bold tracking-wide text-teal-950 ">
                    {portfolioItems.heading.title}
                  </h1>{" "}
                  <small className=" text-teal-600 lg:text-[14px] text-[17px] font-medium tracking-wide ">
                    {portfolioItems.heading.span}
                  </small>
                </span>

                <p className=" lg:text-[14px] text-[20px] tracking-wide text-gray-600 ">
                  {" "}
                  {portfolioItems.paragraph}{" "}
                </p>
              </div>
            </section>
          ))}
        </div>
      </aside>
    </main>
  );
};

export default PortFolioAssetDetails;

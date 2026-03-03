import React from "react";
import PortFolioAssetDetails from "./PortFolioAssetDetails";

const PortFolio = () => {
  return (
    <main className="overviewMain">
      <section className="overviewMainSon py-1 px-0. space-y-6 ">
        <div className="flex flex-row items-center justify-between">
          <h2 className="tracking-wide font-medium lg:text-[16px] text-[20px] ">Your PortFolio</h2>

          <span className="text-teal-600 text-[20px] font-medium tracking-wide hover:underline hover:text-teal-800 transition ease-in-out duration-200 ">
            View All
          </span>
        </div>

        <aside className="">
          <PortFolioAssetDetails />
        </aside>
      </section>
    </main>
  );
};

export default PortFolio;

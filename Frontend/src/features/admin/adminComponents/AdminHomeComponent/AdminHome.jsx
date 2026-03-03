import React from "react";
import OverView from "../portfolio/OverView";
import PortFolioSumary from "../portfolio/PortFolioSumary";
import PortFolio from "../portfolio/PortFolio";

const AdminHome = () => {
  return (
    <main className="">
      <section className=" flex flex-col space-y-4 ">
        <section className="overview">
          <OverView />
        </section>

        <section className="portFolioSummary">
          <PortFolioSumary />
        </section>
        
        <section className="yourPortFolio">
          <PortFolio />
        </section>
      </section>
    </main>
  );
};

export default AdminHome;

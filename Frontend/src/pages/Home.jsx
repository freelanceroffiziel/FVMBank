import React, { useEffect } from "react";
import FinancialGSupport from "../components/homeComponents/FinancialGSupport";
import SecurityInfo from "../components/homeComponents/SecurityInfo";
import MobileApp from "../components/homeComponents/MobileApp";
import PlansOne from "../components/homeComponents/PlansOne";
import DataReViews from "../components/homeComponents/DataReViews";
import HomeFirstComponent from "../components/homeComponents/HomeFirstComponent";
import MiniBelow from "../components/homeComponents/MiniBelow";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section>
        <HomeFirstComponent />
      </section>
      <section>
        <MiniBelow />
      </section>
      <section>
        <FinancialGSupport />
      </section>
      <section className="lg:mt-[15vh] mt-[10vh]">
        <SecurityInfo />
      </section>
      <section className="lg:mt-[20vh] mt-[14vh]">
        <PlansOne />
      </section>
      <section className="lg:mt-[20vh] mt-[12vh]">
        <DataReViews />
      </section>
      <section className="lg:mt-[15vh] mt-[12vh]">
        <MobileApp />
      </section>
    </main>
  );
};

export default Home;

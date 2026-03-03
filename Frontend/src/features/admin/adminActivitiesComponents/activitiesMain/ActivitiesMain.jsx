import React from "react";
import MyInvestments from "../myInvestmnts/MyInvestments";
import RecentActivity from "../recentActivity/RecentActivity";


const ActivitiesMain = () => {
  return (
    <main className="pr-6 pb-1 space-y-10">
      <section className="activitieSon  w-full  h-full shadow  fixed lg:w-[28%] bg-white hidden lg:block z-0 right-0 pr-4 pl-4 ">
        <section>
          <MyInvestments />
        </section>

        <section>

        </section>

        <section>
          <RecentActivity />
        </section>
      </section>
    </main>
  );
};

export default ActivitiesMain;

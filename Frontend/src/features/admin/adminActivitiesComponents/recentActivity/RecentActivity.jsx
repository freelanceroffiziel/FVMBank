import React, { useEffect } from "react";
import { HiDotsHorizontal } from "react-icons/hi";

const RecentActivity = () => {

  return (
    <main className="recentactivity">
      <section className="recentactivitySon relative space-y-4">
        <div className="lg:w-[26%] fixed w-full flex flex-row justify-between items-center text-white py-4 px-4 bg-teal-600 z-10 shadow-md rounded">
          <h1 className="text-[19px]">Recent Activities</h1>
          <span className="lg:text-[30px] text-white">
            <HiDotsHorizontal />
          </span>
        </div>

        <main className="pt-20 px-4 space-y-4 overflow-y-auto h-[50vh] hide-scrollbar">
          <p>Loading activities...</p>

          <p className="text-red-500">Error</p>

          <div
           
            className="p-4 bg-white rounded shadow flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">message</h2>
         
                <p className="font-bold">amount</p>
            
              {/* Display formatted date and time */}
              
            </div>
            <div className="text-right">
              <p className="font-bold">amount</p>
              <p className="text-gray-400 text-sm">
           
              </p>
            </div>
          </div>

          <p>No recent activities found.</p>
        </main>
      </section>
    </main>
  );
};

export default RecentActivity;
